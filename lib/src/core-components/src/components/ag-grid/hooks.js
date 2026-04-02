/**
 * AG Grid Hooks
 * Custom React hooks for AG Grid-like functionality
 */
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
export function useSorting(initialSort = [], multiSort = false) {
    const [sortModel, setSortModel] = useState(initialSort);
    const handleSort = useCallback((colId, multiSortKey = false) => {
        setSortModel((prev) => {
            const existing = prev.find((s) => s.colId === colId);
            let nextSort;
            if (!existing) {
                nextSort = 'asc';
            }
            else if (existing.sort === 'asc') {
                nextSort = 'desc';
            }
            else {
                nextSort = null;
            }
            if (multiSort && multiSortKey) {
                // Multi-sort: add/update/remove from list
                if (nextSort === null) {
                    return prev.filter((s) => s.colId !== colId);
                }
                if (existing) {
                    return prev.map((s) => s.colId === colId ? { ...s, sort: nextSort } : s);
                }
                return [...prev, { colId, sort: nextSort }];
            }
            // Single sort
            if (nextSort === null) {
                return [];
            }
            return [{ colId, sort: nextSort }];
        });
    }, [multiSort]);
    const getSortForColumn = useCallback((colId) => {
        const index = sortModel.findIndex((s) => s.colId === colId);
        if (index === -1)
            return { sort: null };
        return {
            sort: sortModel[index].sort,
            sortIndex: multiSort ? index : undefined,
        };
    }, [sortModel, multiSort]);
    const clearSort = useCallback(() => {
        setSortModel([]);
    }, []);
    // Apply sorting to data
    const sortData = useCallback((data, columns) => {
        if (sortModel.length === 0)
            return data;
        return [...data].sort((a, b) => {
            for (const { colId, sort } of sortModel) {
                if (!sort)
                    continue;
                const col = columns.find((c) => c.field === colId || c.colId === colId);
                if (!col || !col.field)
                    continue;
                const field = col.field;
                const aVal = getNestedValue(a, field);
                const bVal = getNestedValue(b, field);
                // Custom comparator
                if (col.comparator) {
                    const nodeA = createRowNode(a, 0);
                    const nodeB = createRowNode(b, 0);
                    const result = col.comparator(aVal, bVal, nodeA, nodeB, sort === 'desc');
                    if (result !== 0)
                        return sort === 'asc' ? result : -result;
                    continue;
                }
                // Default comparison
                let comparison = 0;
                if (aVal === bVal)
                    comparison = 0;
                else if (aVal == null)
                    comparison = 1;
                else if (bVal == null)
                    comparison = -1;
                else if (typeof aVal === 'string' && typeof bVal === 'string') {
                    comparison = aVal.localeCompare(bVal);
                }
                else {
                    comparison = aVal < bVal ? -1 : 1;
                }
                if (comparison !== 0) {
                    return sort === 'asc' ? comparison : -comparison;
                }
            }
            return 0;
        });
    }, [sortModel]);
    return {
        sortModel,
        setSortModel,
        handleSort,
        getSortForColumn,
        clearSort,
        sortData,
    };
}
export function useFiltering(initialFilters = {}) {
    const [filterModel, setFilterModel] = useState(initialFilters);
    const [quickFilterText, setQuickFilterText] = useState('');
    const setColumnFilter = useCallback((field, filter) => {
        setFilterModel((prev) => {
            if (filter === null) {
                const { [field]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [field]: filter };
        });
    }, []);
    const clearFilters = useCallback(() => {
        setFilterModel({});
        setQuickFilterText('');
    }, []);
    const isFilterActive = useCallback((field) => {
        return field in filterModel;
    }, [filterModel]);
    const hasActiveFilters = useMemo(() => {
        return Object.keys(filterModel).length > 0 || quickFilterText.length > 0;
    }, [filterModel, quickFilterText]);
    // Apply filtering to data
    const filterData = useCallback((data, columns) => {
        let filtered = data;
        // Apply column filters
        for (const [field, filter] of Object.entries(filterModel)) {
            filtered = filtered.filter((row) => {
                const value = getNestedValue(row, field);
                return matchesFilter(value, filter);
            });
        }
        // Apply quick filter
        if (quickFilterText) {
            const search = quickFilterText.toLowerCase();
            filtered = filtered.filter((row) => {
                return columns.some((col) => {
                    if (!col.field)
                        return false;
                    const value = getNestedValue(row, col.field);
                    if (value == null)
                        return false;
                    return String(value).toLowerCase().includes(search);
                });
            });
        }
        return filtered;
    }, [filterModel, quickFilterText]);
    return {
        filterModel,
        setFilterModel,
        quickFilterText,
        setQuickFilterText,
        setColumnFilter,
        clearFilters,
        isFilterActive,
        hasActiveFilters,
        filterData,
    };
}
function matchesFilter(value, filter) {
    if (value == null)
        return false;
    const strValue = String(value).toLowerCase();
    switch (filter.filterType) {
        case 'text':
            if (filter.filter == null)
                return true;
            const filterStr = String(filter.filter).toLowerCase();
            switch (filter.type) {
                case 'equals':
                    return strValue === filterStr;
                case 'notEqual':
                    return strValue !== filterStr;
                case 'startsWith':
                    return strValue.startsWith(filterStr);
                case 'endsWith':
                    return strValue.endsWith(filterStr);
                case 'contains':
                default:
                    return strValue.includes(filterStr);
                case 'notContains':
                    return !strValue.includes(filterStr);
            }
        case 'number':
            const numValue = Number(value);
            const filterNum = Number(filter.filter);
            if (isNaN(numValue) || isNaN(filterNum))
                return false;
            switch (filter.type) {
                case 'equals':
                    return numValue === filterNum;
                case 'notEqual':
                    return numValue !== filterNum;
                case 'greaterThan':
                    return numValue > filterNum;
                case 'greaterThanOrEqual':
                    return numValue >= filterNum;
                case 'lessThan':
                    return numValue < filterNum;
                case 'lessThanOrEqual':
                    return numValue <= filterNum;
                case 'inRange':
                    return numValue >= filterNum && numValue <= Number(filter.filterTo);
                default:
                    return true;
            }
        case 'date':
            const dateValue = new Date(value);
            if (isNaN(dateValue.getTime()))
                return false;
            if (filter.dateFrom) {
                const from = new Date(filter.dateFrom);
                if (filter.dateTo) {
                    const to = new Date(filter.dateTo);
                    return dateValue >= from && dateValue <= to;
                }
                switch (filter.type) {
                    case 'equals':
                        return dateValue.toDateString() === from.toDateString();
                    case 'greaterThan':
                        return dateValue > from;
                    case 'lessThan':
                        return dateValue < from;
                    default:
                        return dateValue >= from;
                }
            }
            return true;
        case 'set':
            if (!filter.values || filter.values.length === 0)
                return true;
            return filter.values.includes(String(value));
        default:
            return true;
    }
}
// ============================================================================
// Pagination Hook
// ============================================================================
export function usePagination(totalRows, initialPageSize = 10, initialPage = 0) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const totalPages = useMemo(() => Math.max(1, Math.ceil(totalRows / pageSize)), [totalRows, pageSize]);
    // Clamp current page when total pages changes
    useEffect(() => {
        if (currentPage >= totalPages) {
            setCurrentPage(Math.max(0, totalPages - 1));
        }
    }, [totalPages, currentPage]);
    const goToPage = useCallback((page) => {
        const validPage = Math.max(0, Math.min(page, totalPages - 1));
        setCurrentPage(validPage);
    }, [totalPages]);
    const goToNextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
    const goToPreviousPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);
    const goToFirstPage = useCallback(() => goToPage(0), [goToPage]);
    const goToLastPage = useCallback(() => goToPage(totalPages - 1), [totalPages, goToPage]);
    const changePageSize = useCallback((size) => {
        setPageSize(size);
        setCurrentPage(0);
    }, []);
    const startRow = currentPage * pageSize;
    const endRow = Math.min(startRow + pageSize, totalRows);
    const paginateData = useCallback((data) => {
        return data.slice(startRow, startRow + pageSize);
    }, [startRow, pageSize]);
    return {
        currentPage,
        pageSize,
        totalPages,
        totalRows,
        startRow,
        endRow,
        goToPage,
        goToNextPage,
        goToPreviousPage,
        goToFirstPage,
        goToLastPage,
        changePageSize,
        paginateData,
        setCurrentPage,
        setPageSize,
    };
}
// ============================================================================
// Row Selection Hook
// ============================================================================
export function useRowSelection(data, getRowId, mode = 'multiple', isRowSelectable) {
    const [selectedIds, setSelectedIds] = useState(new Set());
    const isSelected = useCallback((id) => selectedIds.has(id), [selectedIds]);
    const toggleRow = useCallback((row, index) => {
        const id = getRowId(row);
        const node = createRowNode(row, index);
        if (isRowSelectable && !isRowSelectable(node))
            return;
        setSelectedIds((prev) => {
            if (mode === 'single') {
                return prev.has(id) ? new Set() : new Set([id]);
            }
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            }
            else {
                next.add(id);
            }
            return next;
        });
    }, [getRowId, mode, isRowSelectable]);
    const selectAll = useCallback(() => {
        const ids = data
            .filter((row, i) => {
            if (!isRowSelectable)
                return true;
            return isRowSelectable(createRowNode(row, i));
        })
            .map(getRowId);
        setSelectedIds(new Set(ids));
    }, [data, getRowId, isRowSelectable]);
    const deselectAll = useCallback(() => {
        setSelectedIds(new Set());
    }, []);
    const selectRows = useCallback((rows) => {
        const ids = rows.map(getRowId);
        setSelectedIds(new Set(ids));
    }, [getRowId]);
    const isAllSelected = useMemo(() => {
        if (data.length === 0)
            return false;
        const selectableRows = data.filter((row, i) => {
            if (!isRowSelectable)
                return true;
            return isRowSelectable(createRowNode(row, i));
        });
        return selectableRows.every((row) => selectedIds.has(getRowId(row)));
    }, [data, selectedIds, getRowId, isRowSelectable]);
    const isIndeterminate = useMemo(() => {
        if (data.length === 0)
            return false;
        const selectableRows = data.filter((row, i) => {
            if (!isRowSelectable)
                return true;
            return isRowSelectable(createRowNode(row, i));
        });
        const selectedCount = selectableRows.filter((row) => selectedIds.has(getRowId(row))).length;
        return selectedCount > 0 && selectedCount < selectableRows.length;
    }, [data, selectedIds, getRowId, isRowSelectable]);
    const selectedRows = useMemo(() => {
        return data.filter((row) => selectedIds.has(getRowId(row)));
    }, [data, selectedIds, getRowId]);
    const selectedNodes = useMemo(() => {
        return data
            .map((row, i) => createRowNode(row, i))
            .filter((node) => selectedIds.has(node.id));
    }, [data, selectedIds]);
    return {
        selectedIds,
        setSelectedIds,
        isSelected,
        toggleRow,
        selectAll,
        deselectAll,
        selectRows,
        isAllSelected,
        isIndeterminate,
        selectedRows,
        selectedNodes,
    };
}
// ============================================================================
// Row Expansion Hook (for groups and master/detail)
// ============================================================================
export function useRowExpansion(getRowId, defaultExpanded = 0 // -1 for all expanded
) {
    const [expandedIds, setExpandedIds] = useState(new Set());
    const isExpanded = useCallback((id) => expandedIds.has(id), [expandedIds]);
    const toggleExpand = useCallback((row) => {
        const id = getRowId(row);
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            }
            else {
                next.add(id);
            }
            return next;
        });
    }, [getRowId]);
    const expandAll = useCallback((rows) => {
        const ids = rows.map(getRowId);
        setExpandedIds(new Set(ids));
    }, [getRowId]);
    const collapseAll = useCallback(() => {
        setExpandedIds(new Set());
    }, []);
    const setExpanded = useCallback((id, expanded) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (expanded) {
                next.add(id);
            }
            else {
                next.delete(id);
            }
            return next;
        });
    }, []);
    return {
        expandedIds,
        setExpandedIds,
        isExpanded,
        toggleExpand,
        expandAll,
        collapseAll,
        setExpanded,
    };
}
// ============================================================================
// Column State Hook
// ============================================================================
export function useColumnState(columns, persistKey) {
    const [columnState, setColumnState] = useState(() => {
        // Load from localStorage if available
        if (persistKey && typeof window !== 'undefined') {
            const saved = localStorage.getItem(`ag-grid-columns-${persistKey}`);
            if (saved) {
                try {
                    return JSON.parse(saved);
                }
                catch (e) {
                    // Ignore
                }
            }
        }
        // Initialize from column definitions
        return columns.map((col) => ({
            colId: col.colId || col.field || '',
            hide: col.hide ?? col.initialHide ?? false,
            width: col.width ?? col.initialWidth,
            pinned: col.pinned ?? col.initialPinned ?? null,
            sort: col.sort ?? null,
        }));
    });
    // Persist to localStorage
    useEffect(() => {
        if (persistKey && typeof window !== 'undefined') {
            localStorage.setItem(`ag-grid-columns-${persistKey}`, JSON.stringify(columnState));
        }
    }, [columnState, persistKey]);
    const getColumnState = useCallback((colId) => {
        return columnState.find((s) => s.colId === colId);
    }, [columnState]);
    // Helper to extract colId from string or Column object
    const getColId = (colIdOrColumn) => {
        if (typeof colIdOrColumn === 'string')
            return colIdOrColumn;
        return colIdOrColumn.colId;
    };
    const setColumnVisible = useCallback((colIdOrColumn, visible) => {
        const colId = getColId(colIdOrColumn);
        setColumnState((prev) => prev.map((s) => (s.colId === colId ? { ...s, hide: !visible } : s)));
    }, []);
    const setColumnWidth = useCallback((colIdOrColumn, width) => {
        const colId = getColId(colIdOrColumn);
        setColumnState((prev) => prev.map((s) => (s.colId === colId ? { ...s, width } : s)));
    }, []);
    const setColumnPinned = useCallback((colIdOrColumn, pinned) => {
        const colId = getColId(colIdOrColumn);
        setColumnState((prev) => prev.map((s) => (s.colId === colId ? { ...s, pinned } : s)));
    }, []);
    const moveColumn = useCallback((colIdOrColumn, toIndex) => {
        const colId = getColId(colIdOrColumn);
        setColumnState((prev) => {
            const fromIndex = prev.findIndex((s) => s.colId === colId);
            if (fromIndex === -1 || fromIndex === toIndex)
                return prev;
            const next = [...prev];
            const [removed] = next.splice(fromIndex, 1);
            next.splice(toIndex, 0, removed);
            return next;
        });
    }, []);
    const resetColumnState = useCallback(() => {
        setColumnState(columns.map((col) => ({
            colId: col.colId || col.field || '',
            hide: col.hide ?? col.initialHide ?? false,
            width: col.width ?? col.initialWidth,
            pinned: col.pinned ?? col.initialPinned ?? null,
            sort: col.sort ?? null,
        })));
    }, [columns]);
    // Get processed columns with state applied
    const processedColumns = useMemo(() => {
        return columnState
            .map((state) => {
            const col = columns.find((c) => (c.colId || c.field) === state.colId);
            if (!col)
                return null;
            return {
                ...col,
                hide: state.hide,
                width: state.width,
                pinned: state.pinned,
                sort: state.sort,
            };
        })
            .filter(Boolean);
    }, [columns, columnState]);
    const visibleColumns = useMemo(() => {
        return processedColumns.filter((col) => !col.hide);
    }, [processedColumns]);
    return {
        columnState,
        setColumnState,
        getColumnState,
        setColumnVisible,
        setColumnWidth,
        setColumnPinned,
        moveColumn,
        resetColumnState,
        processedColumns,
        visibleColumns,
    };
}
export function useCellEditing(onCellValueChanged) {
    const [editingCell, setEditingCell] = useState(null);
    const editHistory = useRef([]);
    const historyIndex = useRef(-1);
    const startEditing = useCallback((rowId, colId, rowIndex, value) => {
        setEditingCell({ rowId, colId, rowIndex, value });
    }, []);
    const stopEditing = useCallback((cancel = false, newValue) => {
        if (!editingCell)
            return;
        if (!cancel && newValue !== undefined && newValue !== editingCell.value) {
            // Record in history for undo/redo
            editHistory.current = editHistory.current.slice(0, historyIndex.current + 1);
            editHistory.current.push({
                data: {},
                field: editingCell.colId,
                oldValue: editingCell.value,
                newValue,
            });
            historyIndex.current = editHistory.current.length - 1;
        }
        setEditingCell(null);
    }, [editingCell]);
    const isEditing = useCallback((rowId, colId) => {
        return editingCell?.rowId === rowId && editingCell?.colId === colId;
    }, [editingCell]);
    const undo = useCallback(() => {
        if (historyIndex.current < 0)
            return null;
        const entry = editHistory.current[historyIndex.current];
        historyIndex.current--;
        return entry;
    }, []);
    const redo = useCallback(() => {
        if (historyIndex.current >= editHistory.current.length - 1)
            return null;
        historyIndex.current++;
        return editHistory.current[historyIndex.current];
    }, []);
    const canUndo = historyIndex.current >= 0;
    const canRedo = historyIndex.current < editHistory.current.length - 1;
    return {
        editingCell,
        startEditing,
        stopEditing,
        isEditing,
        undo,
        redo,
        canUndo,
        canRedo,
    };
}
export function useRowGrouping(data, groupByFields, aggregations) {
    const [expandedGroups, setExpandedGroups] = useState(new Set());
    const groupData = useCallback((items, fields, level = 0) => {
        if (fields.length === 0 || items.length === 0)
            return items;
        const [field, ...remainingFields] = fields;
        const groups = new Map();
        items.forEach((item) => {
            const value = getNestedValue(item, field);
            const existing = groups.get(value) || [];
            existing.push(item);
            groups.set(value, existing);
        });
        return Array.from(groups.entries()).map(([value, groupItems]) => {
            const groupKey = `${field}:${value}:${level}`;
            const childrenData = groupData(groupItems, remainingFields, level + 1);
            // Calculate aggregations
            const aggs = {};
            if (aggregations) {
                for (const [aggField, aggFn] of Object.entries(aggregations)) {
                    const values = groupItems.map((item) => getNestedValue(item, aggField));
                    aggs[aggField] = aggFn(values);
                }
            }
            return {
                isGroup: true,
                groupValue: value,
                groupField: field,
                children: childrenData,
                level,
                expanded: expandedGroups.has(groupKey),
                aggregations: aggs,
            };
        });
    }, [expandedGroups, aggregations]);
    const groupedData = useMemo(() => {
        return groupData(data, groupByFields);
    }, [data, groupByFields, groupData]);
    const toggleGroup = useCallback((field, value, level) => {
        const key = `${field}:${value}:${level}`;
        setExpandedGroups((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            }
            else {
                next.add(key);
            }
            return next;
        });
    }, []);
    const expandAllGroups = useCallback(() => {
        const collectKeys = (items) => {
            const keys = [];
            items.forEach((item) => {
                if ('isGroup' in item && item.isGroup) {
                    keys.push(`${item.groupField}:${item.groupValue}:${item.level}`);
                    keys.push(...collectKeys(item.children));
                }
            });
            return keys;
        };
        setExpandedGroups(new Set(collectKeys(groupedData)));
    }, [groupedData]);
    const collapseAllGroups = useCallback(() => {
        setExpandedGroups(new Set());
    }, []);
    // Flatten grouped data for rendering
    const flattenedData = useMemo(() => {
        const flatten = (items) => {
            const result = [];
            items.forEach((item) => {
                result.push(item);
                if ('isGroup' in item && item.isGroup && item.expanded) {
                    result.push(...flatten(item.children));
                }
            });
            return result;
        };
        return flatten(groupedData);
    }, [groupedData]);
    return {
        groupedData,
        flattenedData,
        expandedGroups,
        toggleGroup,
        expandAllGroups,
        collapseAllGroups,
    };
}
// ============================================================================
// Virtual Scrolling Hook
// ============================================================================
export function useVirtualScrolling(data, rowHeight, containerHeight, overscan = 5) {
    const [scrollTop, setScrollTop] = useState(0);
    const totalHeight = data.length * rowHeight;
    const visibleRange = useMemo(() => {
        const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
        const endIndex = Math.min(data.length, Math.ceil((scrollTop + containerHeight) / rowHeight) + overscan);
        return { startIndex, endIndex };
    }, [scrollTop, rowHeight, containerHeight, data.length, overscan]);
    const visibleData = useMemo(() => {
        return data.slice(visibleRange.startIndex, visibleRange.endIndex);
    }, [data, visibleRange]);
    const offsetY = visibleRange.startIndex * rowHeight;
    const handleScroll = useCallback((e) => {
        setScrollTop(e.currentTarget.scrollTop);
    }, []);
    return {
        totalHeight,
        visibleData,
        visibleRange,
        offsetY,
        handleScroll,
        scrollTop,
    };
}
// ============================================================================
// Clipboard Hook
// ============================================================================
export function useClipboard() {
    const copyToClipboard = useCallback(async (data, columns, includeHeaders = true) => {
        const rows = [];
        if (includeHeaders) {
            const header = columns
                .filter((col) => !col.hide)
                .map((col) => col.headerName || col.field || '')
                .join('\t');
            rows.push(header);
        }
        data.forEach((row) => {
            const values = columns
                .filter((col) => !col.hide)
                .map((col) => {
                if (!col.field)
                    return '';
                const value = getNestedValue(row, col.field);
                return value == null ? '' : String(value);
            })
                .join('\t');
            rows.push(values);
        });
        const text = rows.join('\n');
        await navigator.clipboard.writeText(text);
    }, []);
    const pasteFromClipboard = useCallback(async () => {
        const text = await navigator.clipboard.readText();
        return text.split('\n').map((row) => row.split('\t'));
    }, []);
    return {
        copyToClipboard,
        pasteFromClipboard,
    };
}
// ============================================================================
// Responsive Hook
// ============================================================================
export function useResponsive(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);
    return { isMobile };
}
export function useContextMenu() {
    const [contextMenu, setContextMenu] = useState({
        visible: false,
        x: 0,
        y: 0,
    });
    const showContextMenu = useCallback((x, y, data) => {
        setContextMenu({ visible: true, x, y, data });
    }, []);
    const hideContextMenu = useCallback(() => {
        setContextMenu((prev) => ({ ...prev, visible: false }));
    }, []);
    // Close on click outside
    useEffect(() => {
        if (!contextMenu.visible)
            return;
        const handleClick = () => hideContextMenu();
        const handleEscape = (e) => {
            if (e.key === 'Escape')
                hideContextMenu();
        };
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [contextMenu.visible, hideContextMenu]);
    return {
        contextMenu,
        showContextMenu,
        hideContextMenu,
    };
}
// ============================================================================
// Keyboard Navigation Hook
// ============================================================================
export function useKeyboardNavigation(data, columns, onCellSelect, onEnter) {
    const [focusedCell, setFocusedCell] = useState(null);
    const handleKeyDown = useCallback((e) => {
        if (!focusedCell)
            return;
        const { rowIndex, colIndex } = focusedCell;
        const visibleCols = columns.filter((col) => !col.hide);
        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault();
                if (rowIndex > 0) {
                    setFocusedCell({ rowIndex: rowIndex - 1, colIndex });
                }
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (rowIndex < data.length - 1) {
                    setFocusedCell({ rowIndex: rowIndex + 1, colIndex });
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (colIndex > 0) {
                    setFocusedCell({ rowIndex, colIndex: colIndex - 1 });
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (colIndex < visibleCols.length - 1) {
                    setFocusedCell({ rowIndex, colIndex: colIndex + 1 });
                }
                break;
            case 'Enter':
                e.preventDefault();
                const col = visibleCols[colIndex];
                if (col?.field) {
                    onEnter?.(rowIndex, col.field);
                }
                break;
            case 'Tab':
                if (e.shiftKey) {
                    if (colIndex > 0) {
                        e.preventDefault();
                        setFocusedCell({ rowIndex, colIndex: colIndex - 1 });
                    }
                    else if (rowIndex > 0) {
                        e.preventDefault();
                        setFocusedCell({
                            rowIndex: rowIndex - 1,
                            colIndex: visibleCols.length - 1,
                        });
                    }
                }
                else {
                    if (colIndex < visibleCols.length - 1) {
                        e.preventDefault();
                        setFocusedCell({ rowIndex, colIndex: colIndex + 1 });
                    }
                    else if (rowIndex < data.length - 1) {
                        e.preventDefault();
                        setFocusedCell({ rowIndex: rowIndex + 1, colIndex: 0 });
                    }
                }
                break;
        }
    }, [focusedCell, data.length, columns, onEnter]);
    useEffect(() => {
        if (focusedCell) {
            const visibleCols = columns.filter((col) => !col.hide);
            const col = visibleCols[focusedCell.colIndex];
            if (col?.field) {
                onCellSelect?.(focusedCell.rowIndex, col.field);
            }
        }
    }, [focusedCell, columns, onCellSelect]);
    return {
        focusedCell,
        setFocusedCell,
        handleKeyDown,
    };
}
// ============================================================================
// Utility Functions
// ============================================================================
export function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
}
export function setNestedValue(obj, path, value) {
    const parts = path.split('.');
    const result = { ...obj };
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
        current[parts[i]] = { ...current[parts[i]] };
        current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
    return result;
}
export function createRowNode(data, index, id) {
    const rowId = id || String(index);
    return {
        id: rowId,
        data,
        rowIndex: index,
        isSelected: false,
        expanded: false,
        level: 0,
        setData: () => { },
        setSelected: () => { },
        isSelectable: () => true,
        setExpanded: () => { },
        getRowId: () => rowId,
    };
}
// Aggregation helper functions
export const aggregations = {
    sum: (values) => values.reduce((a, b) => (a || 0) + (b || 0), 0),
    avg: (values) => {
        const validValues = values.filter((v) => v != null && !isNaN(v));
        return validValues.length
            ? validValues.reduce((a, b) => a + b, 0) / validValues.length
            : 0;
    },
    min: (values) => Math.min(...values.filter((v) => v != null && !isNaN(v))),
    max: (values) => Math.max(...values.filter((v) => v != null && !isNaN(v))),
    count: (values) => values.length,
    first: (values) => values[0],
    last: (values) => values[values.length - 1],
};
// Export to CSV
export function exportToCsv(data, columns, filename = 'export.csv') {
    const exportCols = columns.filter((col) => !col.suppressCsvExport && !col.hide);
    const header = exportCols
        .map((col) => `"${col.headerName || col.field || ''}"`)
        .join(',');
    const rows = data.map((row) => {
        return exportCols
            .map((col) => {
            if (!col.field)
                return '""';
            const value = getNestedValue(row, col.field);
            if (value == null)
                return '""';
            const str = String(value).replace(/"/g, '""');
            return `"${str}"`;
        })
            .join(',');
    });
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}
export function useSetFilter(data, field) {
    const [selectedValues, setSelectedValues] = useState(new Set());
    const [selectAll, setSelectAll] = useState(true);
    const [searchText, setSearchText] = useState('');
    // Extract unique values from data
    const uniqueValues = useMemo(() => {
        const values = new Set();
        data.forEach((row) => {
            const value = getNestedValue(row, field);
            if (value != null) {
                values.add(String(value));
            }
        });
        return Array.from(values).sort();
    }, [data, field]);
    // Filter unique values by search
    const filteredValues = useMemo(() => {
        if (!searchText)
            return uniqueValues;
        const search = searchText.toLowerCase();
        return uniqueValues.filter((v) => v.toLowerCase().includes(search));
    }, [uniqueValues, searchText]);
    // Initialize selected values when unique values change
    useEffect(() => {
        if (selectAll) {
            setSelectedValues(new Set(uniqueValues));
        }
    }, [uniqueValues, selectAll]);
    const toggleValue = useCallback((value) => {
        setSelectedValues((prev) => {
            const next = new Set(prev);
            if (next.has(value)) {
                next.delete(value);
            }
            else {
                next.add(value);
            }
            return next;
        });
        setSelectAll(false);
    }, []);
    const toggleSelectAll = useCallback(() => {
        if (selectAll) {
            setSelectedValues(new Set());
            setSelectAll(false);
        }
        else {
            setSelectedValues(new Set(uniqueValues));
            setSelectAll(true);
        }
    }, [selectAll, uniqueValues]);
    const selectNone = useCallback(() => {
        setSelectedValues(new Set());
        setSelectAll(false);
    }, []);
    const isValueSelected = useCallback((value) => selectedValues.has(value), [selectedValues]);
    const filterFunction = useCallback((row) => {
        if (selectAll)
            return true;
        const value = getNestedValue(row, field);
        if (value == null)
            return selectedValues.size === 0;
        return selectedValues.has(String(value));
    }, [field, selectedValues, selectAll]);
    const isIndeterminate = useMemo(() => {
        return selectedValues.size > 0 && selectedValues.size < uniqueValues.length;
    }, [selectedValues, uniqueValues]);
    return {
        uniqueValues,
        filteredValues,
        selectedValues,
        selectAll,
        isIndeterminate,
        searchText,
        setSearchText,
        toggleValue,
        toggleSelectAll,
        selectNone,
        isValueSelected,
        filterFunction,
    };
}
export function useAggregationPanel(data) {
    const [valueColumns, setValueColumns] = useState([]);
    const addValueColumn = useCallback((field, aggFunc, displayName) => {
        setValueColumns((prev) => {
            // Check if already exists
            if (prev.some((v) => v.field === field && v.aggFunc === aggFunc)) {
                return prev;
            }
            return [...prev, { field, aggFunc, displayName }];
        });
    }, []);
    const removeValueColumn = useCallback((field, aggFunc) => {
        setValueColumns((prev) => prev.filter((v) => !(v.field === field && v.aggFunc === aggFunc)));
    }, []);
    const clearValueColumns = useCallback(() => {
        setValueColumns([]);
    }, []);
    // Calculate aggregated values
    const aggregatedValues = useMemo(() => {
        const result = {};
        valueColumns.forEach(({ field, aggFunc }) => {
            const values = data
                .map((row) => getNestedValue(row, field))
                .filter((v) => v != null && !isNaN(Number(v)))
                .map(Number);
            const key = `${aggFunc}(${field})`;
            switch (aggFunc) {
                case 'sum':
                    result[key] = aggregations.sum(values);
                    break;
                case 'avg':
                    result[key] = aggregations.avg(values);
                    break;
                case 'min':
                    result[key] = aggregations.min(values);
                    break;
                case 'max':
                    result[key] = aggregations.max(values);
                    break;
                case 'count':
                    result[key] = aggregations.count(values);
                    break;
            }
        });
        return result;
    }, [data, valueColumns]);
    return {
        valueColumns,
        addValueColumn,
        removeValueColumn,
        clearValueColumns,
        aggregatedValues,
    };
}
// ============================================================================
// Row Grouping Panel Hook
// ============================================================================
export function useRowGroupingPanel(columns) {
    const [rowGroupColumns, setRowGroupColumns] = useState([]);
    const addRowGroupColumn = useCallback((field) => {
        setRowGroupColumns((prev) => {
            if (prev.includes(field))
                return prev;
            return [...prev, field];
        });
    }, []);
    const removeRowGroupColumn = useCallback((field) => {
        setRowGroupColumns((prev) => prev.filter((f) => f !== field));
    }, []);
    const moveRowGroupColumn = useCallback((fromIndex, toIndex) => {
        setRowGroupColumns((prev) => {
            const next = [...prev];
            const [removed] = next.splice(fromIndex, 1);
            next.splice(toIndex, 0, removed);
            return next;
        });
    }, []);
    const clearRowGroupColumns = useCallback(() => {
        setRowGroupColumns([]);
    }, []);
    // Get groupable columns (columns that have enableRowGroup: true or have a field)
    const groupableColumns = useMemo(() => {
        return columns.filter((col) => col.field && col.enableRowGroup !== false);
    }, [columns]);
    // Get column info for grouped columns
    const groupedColumnsInfo = useMemo(() => {
        return rowGroupColumns.map((field) => {
            const col = columns.find((c) => c.field === field);
            return {
                field,
                headerName: col?.headerName || field,
            };
        });
    }, [rowGroupColumns, columns]);
    return {
        rowGroupColumns,
        addRowGroupColumn,
        removeRowGroupColumn,
        moveRowGroupColumn,
        clearRowGroupColumns,
        groupableColumns,
        groupedColumnsInfo,
    };
}
export function useColumnMenu() {
    const [menuState, setMenuState] = useState({
        visible: false,
        colId: null,
        x: 0,
        y: 0,
    });
    const [filterDropdownState, setFilterDropdownState] = useState({
        visible: false,
        colId: null,
        x: 0,
        y: 0,
    });
    const showColumnMenu = useCallback((colId, x, y) => {
        setMenuState({ visible: true, colId, x, y });
    }, []);
    const hideColumnMenu = useCallback(() => {
        setMenuState((prev) => ({ ...prev, visible: false }));
    }, []);
    const showFilterDropdown = useCallback((colId, x, y) => {
        setFilterDropdownState({ visible: true, colId, x, y });
    }, []);
    const hideFilterDropdown = useCallback(() => {
        setFilterDropdownState((prev) => ({ ...prev, visible: false }));
    }, []);
    return {
        menuState,
        showColumnMenu,
        hideColumnMenu,
        filterDropdownState,
        showFilterDropdown,
        hideFilterDropdown,
    };
}
export function useSidePanel(defaultOpen = true, defaultTab = 'columns') {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [activeTab, setActiveTab] = useState(defaultTab);
    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    const open = useCallback(() => {
        setIsOpen(true);
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    const switchTab = useCallback((tab) => {
        setActiveTab(tab);
        if (!isOpen) {
            setIsOpen(true);
        }
    }, [isOpen]);
    return {
        isOpen,
        activeTab,
        toggle,
        open,
        close,
        switchTab,
        setIsOpen,
        setActiveTab,
    };
}
// ============================================================================
// Pivot Mode Hook
// ============================================================================
export function usePivotMode() {
    const [isPivotMode, setIsPivotMode] = useState(false);
    const [pivotColumns, setPivotColumns] = useState([]);
    const togglePivotMode = useCallback(() => {
        setIsPivotMode((prev) => !prev);
    }, []);
    const addPivotColumn = useCallback((field) => {
        setPivotColumns((prev) => {
            if (prev.includes(field))
                return prev;
            return [...prev, field];
        });
    }, []);
    const removePivotColumn = useCallback((field) => {
        setPivotColumns((prev) => prev.filter((f) => f !== field));
    }, []);
    return {
        isPivotMode,
        setIsPivotMode,
        togglePivotMode,
        pivotColumns,
        addPivotColumn,
        removePivotColumn,
    };
}
