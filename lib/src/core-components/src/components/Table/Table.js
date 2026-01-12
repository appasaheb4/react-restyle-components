'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useState, useCallback, useMemo, useEffect, useRef, } from 'react';
import { TableRoot, Toolbar, ToolbarGroup, SearchInput, ToolbarButton, TableWrapper, StyledTable, TableHeader, HeaderRow, HeaderCell, TableBody, TableRow, TableCell, TableCellContent, Checkbox, ExpandButton, ExpandedRow, ExpandedCell, TableFooter, FooterRow, FooterCell, PaginationWrapper, PaginationInfo, PaginationControls, PageButton, PageSizeSelect, QuickJumper, EmptyState, LoadingOverlay, LoadingSpinner, EditableCell, CellEditor, ColumnTogglePanel, ColumnToggleHeader, ColumnToggleSearch, ColumnToggleList, ColumnToggleItem, ColumnToggleDragHandle, SelectionIndicator, SelectionCount, } from './elements';
import { useSortState, useFilterState, usePaginationState, useRowSelection, useRowExpansion, useColumnVisibility, useTableDebounce, sortData, filterData, paginateData, getNestedValue, exportToCSV, exportToExcel, } from './hooks';
import { getFilterComponent } from './filters';
import { Tooltip } from '../Tooltip';
import { useColumnResize, getColumnStyle } from './columnResize';
// Column reorder is handled internally via popup drag & drop
// Icons
const SearchIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "M21 21l-4.35-4.35", strokeLinecap: "round" })] }));
// Arrow Up Icon with configurable size
// Arrow Up Icon - stroke-based arrow pointing up (like BsArrowUp)
const ArrowUpIcon = ({ size = 16, color = 'white', }) => (_jsx("svg", { viewBox: "0 0 16 16", fill: color, style: { width: size, height: size, display: 'block' }, children: _jsx("path", { fillRule: "evenodd", d: "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" }) }));
// Arrow Down Icon - stroke-based arrow pointing down (like BsArrowDown)
const ArrowDownIcon = ({ size = 16, color = 'white', }) => (_jsx("svg", { viewBox: "0 0 16 16", fill: color, style: { width: size, height: size, display: 'block' }, children: _jsx("path", { fillRule: "evenodd", d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" }) }));
// Default sort caret component with arrow icons (matches BsArrowUp/BsArrowDown style)
const DefaultSortCaret = ({ order, }) => {
    // Size configuration based on sort order (like your custom sortCaret)
    const getSizeConfig = () => {
        switch (order) {
            case 'asc':
                return { up: 18, down: 12 };
            case 'desc':
                return { up: 12, down: 18 };
            default:
                return { up: 16, down: 16 };
        }
    };
    const { up, down } = getSizeConfig();
    return (_jsxs("div", { style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
        }, children: [_jsx(ArrowUpIcon, { size: up, color: "white" }), _jsx(ArrowDownIcon, { size: down, color: "white" })] }));
};
const ChevronLeftIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M15 18l-6-6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronRightIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M9 18l6-6-6-6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronsLeftIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M11 17l-5-5 5-5M18 17l-5-5 5-5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronsRightIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M13 7l5 5-5 5M6 7l5 5-5 5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ExpandIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M9 18l6-6-6-6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const CloseIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const FilterIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const DownloadIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ColumnsIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "3", y: "3", width: "7", height: "18", rx: "1" }), _jsx("rect", { x: "14", y: "3", width: "7", height: "18", rx: "1" })] }));
const EmptyIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), _jsx("path", { d: "M3 9h18M9 3v18", strokeLinecap: "round" })] }));
const RefreshIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M23 4v6h-6M1 20v-6h6", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const PrintIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("rect", { x: "6", y: "14", width: "12", height: "8" })] }));
const ErrorIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("path", { d: "M12 8v4M12 16h.01", strokeLinecap: "round", strokeLinejoin: "round" })] }));
export const Table = forwardRef(function TableComponent(props, ref) {
    const { id, data, columns, keyField = '_id', loading = false, loadingIndicator, pagination = true, paginationConfig, totalSize, remote = true, defaultSort, sort: controlledSort, filterable = false, defaultFilters, filters: controlledFilters, defaultShowFilters = true, showFilters: controlledShowFilters, onShowFiltersChange, showFilterToggle = true, searchable = true, searchPlaceholder = 'Search...', defaultSearchValue = '', searchValue: controlledSearchValue, searchDebounce = 300, rowSelection, expandable, editMode = 'dblclick', showEditIcon = false, onCellEdit, exportable = true, exportFileName = 'table_export', exportFormat = 'csv', columnToggle = false, bordered = true, striped = false, hover = true, compact = false, cellPadding, stickyHeader = false, maxHeight, rowClassName, rowStyle, classNames = {}, styles = {}, className, style, emptyText = 'No data available', onChange, onPageChange, onSortChange, onFilterChange, onSearch, onRowClick, onRowDoubleClick, onClearFilters, toolbar, hideToolbar = false, showFooter = false, caption, 
    // Quick configuration props
    isDelete = false, isEditModify, isUpdate, isExport, isSelectRow, getNonSelectableRows, nonSelectableStyle, isView = false, fileName, hideExcelSheet = false, 
    // Quick callbacks
    onSelectedRow, selectedRowStyle, selectedRowClassName, onUpdateItem, onPageSizeChange, onFilter, clearAllFilter, onDelete, onEdit, onView, 
    // Dynamic configuration
    dynamicStylingFields, fieldTypeConfig, 
    // Row number
    showRowNumber = false, rowNumberWidth = 50, rowNumberTitle = '#', rowNumberRender, 
    // Toolbar customization
    toolbarPosition = 'top', toolbarLeft, toolbarRight, toolbarCenter, 
    // Refresh
    refreshable = false, onRefresh, 
    // Print
    printable = false, onPrint, 
    // Size
    size = 'medium', 
    // Error state
    error, onRetry, 
    // Skeleton loading
    skeletonLoading = false, skeletonRowCount = 5, 
    // Hide header
    hideHeader = false, 
    // Highlighted rows
    highlightedRowKeys = [], highlightRowStyle, highlightRowClassName, 
    // Events
    onRowMouseEnter, onRowMouseLeave, onCellClick, onHeaderClick, 
    // Column Resizing
    resizable = true, resizeConfig, 
    // Column Reordering
    reorderable = true, reorderConfig, ...rest } = props;
    // Resolve aliases
    const resolvedExportable = isExport ?? exportable;
    const resolvedExportFileName = fileName ?? exportFileName;
    // Auto-detect remote mode: if totalSize <= data.length, use client-side (remote=false)
    const resolvedRemote = useMemo(() => {
        // If totalSize is provided and is <= data.length, all data is loaded - use client-side
        if (totalSize !== undefined &&
            totalSize > 0 &&
            totalSize <= data.length) {
            return false;
        }
        // Otherwise use the prop value (default: true)
        return remote;
    }, [remote, totalSize, data.length]);
    // Handle isSelectRow shorthand
    const resolvedRowSelection = isSelectRow
        ? {
            mode: 'checkbox',
            selectedRowStyle: selectedRowStyle || rowSelection?.selectedRowStyle,
            selectedRowClassName: selectedRowClassName || rowSelection?.selectedRowClassName,
            ...rowSelection,
            // Merge getNonSelectableRows with existing getCheckboxProps
            getCheckboxProps: (row) => {
                const rowKey = row[keyField];
                const isNonSelectable = getNonSelectableRows?.includes(rowKey);
                const existingProps = rowSelection?.getCheckboxProps?.(row);
                return {
                    ...existingProps,
                    disabled: isNonSelectable || existingProps?.disabled,
                };
            },
            onChange: (keys, rows) => {
                rowSelection?.onChange?.(keys, rows);
                // Note: onSelectedRow is only called when user clicks the "X Selected" button
            },
        }
        : rowSelection;
    // Normalize allowed editable cells for disabled rows
    const allowedEditingFields = useMemo(() => resolvedRowSelection
        ? resolvedRowSelection.allowEditingCells || []
        : [], [resolvedRowSelection]);
    const hasAllowedEditingFields = allowedEditingFields.length > 0;
    const isFieldAllowedForDisabledRow = useCallback((field) => hasAllowedEditingFields ? allowedEditingFields.includes(field) : false, [hasAllowedEditingFields, allowedEditingFields]);
    // Default pagination config - users don't need to pass these
    const resolvedPaginationConfig = pagination
        ? {
            page: 0,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: true,
            pageSizeOptions: [10, 20, 30, 50],
            ...paginationConfig,
        }
        : paginationConfig;
    // Size configuration
    const sizeConfig = {
        small: { padding: '4px 8px', fontSize: '12px' },
        medium: { padding: '8px 12px', fontSize: '14px' },
        large: { padding: '12px 16px', fontSize: '16px' },
    };
    // Refs
    const tableRef = useRef(null);
    const columnToggleRef = useRef(null);
    const prevSelectionCountRef = useRef(0);
    // State
    const [internalSearchValue, setInternalSearchValue] = useState(defaultSearchValue);
    const [internalShowFilters, setInternalShowFilters] = useState(defaultShowFilters);
    const [columnToggleOpen, setColumnToggleOpen] = useState(false);
    const [columnSearch, setColumnSearch] = useState('');
    const [selectionAnimation, setSelectionAnimation] = useState('none');
    // Column toggle reorder state
    const [toggleDraggingColumn, setToggleDraggingColumn] = useState(null);
    const [toggleDragOverColumn, setToggleDragOverColumn] = useState(null);
    // Internal state for reordered columns (used in popup and for rendering)
    const [reorderedColumns, setReorderedColumns] = useState(columns);
    // Sync reorderedColumns when columns prop structure changes (columns added/removed)
    // We only reset when the actual column dataFields change, not on every reference change
    useEffect(() => {
        const currentDataFields = reorderedColumns
            .map((c) => c.dataField)
            .sort()
            .join(',');
        const newDataFields = columns
            .map((c) => c.dataField)
            .sort()
            .join(',');
        if (currentDataFields !== newDataFields) {
            // Columns structure changed - merge new columns while preserving order where possible
            const newColumnMap = new Map(columns.map((c) => [c.dataField, c]));
            const existingDataFields = new Set(reorderedColumns.map((c) => c.dataField));
            // Keep existing order for columns that still exist, update their data
            const preserved = reorderedColumns
                .filter((c) => newColumnMap.has(c.dataField))
                .map((c) => newColumnMap.get(c.dataField));
            // Add new columns at the end
            const added = columns.filter((c) => !existingDataFields.has(c.dataField));
            setReorderedColumns([...preserved, ...added]);
        }
        else {
            // Same columns but maybe different data - update column data while preserving order
            const columnMap = new Map(columns.map((c) => [c.dataField, c]));
            setReorderedColumns(reorderedColumns.map((c) => columnMap.get(c.dataField) || c));
        }
    }, [columns]);
    // Close column toggle panel on outside click
    useEffect(() => {
        if (!columnToggleOpen)
            return;
        const handleClickOutside = (event) => {
            if (columnToggleRef.current &&
                !columnToggleRef.current.contains(event.target)) {
                setColumnToggleOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [columnToggleOpen]);
    // Filter visibility (controlled or uncontrolled)
    const isFilterVisibilityControlled = controlledShowFilters !== undefined;
    const showFilterRow = isFilterVisibilityControlled
        ? controlledShowFilters
        : internalShowFilters;
    const handleToggleFilters = useCallback(() => {
        const newValue = !showFilterRow;
        if (!isFilterVisibilityControlled) {
            setInternalShowFilters(newValue);
        }
        onShowFiltersChange?.(newValue);
    }, [showFilterRow, isFilterVisibilityControlled, onShowFiltersChange]);
    const [editingCell, setEditingCell] = useState(null);
    const [editValue, setEditValue] = useState(null);
    // Cache custom editor render to avoid repeated renders while editing the same cell
    const editorRendererCacheRef = useRef(new Map());
    useEffect(() => {
        // Clear cache when editing target changes
        editorRendererCacheRef.current.clear();
    }, [editingCell]);
    const searchValue = controlledSearchValue ?? internalSearchValue;
    const debouncedSearchValue = useTableDebounce(searchValue, searchDebounce);
    // Sort state
    const { sort, handleSort } = useSortState(defaultSort, controlledSort);
    // Filter state
    const { filters, setFilter, clearFilters } = useFilterState(defaultFilters, controlledFilters);
    // Track if onFilter should be called (only after user interaction)
    const shouldCallOnFilter = useRef(false);
    const filterTypeRef = useRef('filter');
    const onFilterRef = useRef(onFilter);
    // Track last called values to prevent duplicate calls
    const lastOnFilterCallRef = useRef(null);
    // Track focused filter field to restore focus after data changes
    const focusedFilterFieldRef = useRef(null);
    const tableContainerRef = useRef(null);
    // Clear focus ref when clicking outside the table
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tableContainerRef.current &&
                !tableContainerRef.current.contains(event.target)) {
                focusedFilterFieldRef.current = null;
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Restore filter focus after data changes
    useEffect(() => {
        const restoreFocus = () => {
            if (focusedFilterFieldRef.current && tableContainerRef.current) {
                const filterInput = tableContainerRef.current.querySelector(`[data-filter-field="${focusedFilterFieldRef.current}"]`);
                if (filterInput && document.activeElement !== filterInput) {
                    filterInput.focus();
                    // Move cursor to end of input
                    const len = filterInput.value?.length || 0;
                    filterInput.setSelectionRange(len, len);
                }
            }
        };
        // Try multiple times with increasing delays to handle async renders
        const timers = [
            requestAnimationFrame(() => restoreFocus()),
            setTimeout(() => restoreFocus(), 50),
            setTimeout(() => restoreFocus(), 150),
        ];
        return () => {
            timers.forEach((timer) => {
                if (typeof timer === 'number') {
                    cancelAnimationFrame(timer);
                    clearTimeout(timer);
                }
            });
        };
    }, [data]);
    // Pagination state
    const { page, pageSize, totalPages, goToPage, goToNextPage, goToPrevPage, goToFirstPage, goToLastPage, changePageSize, } = usePaginationState(resolvedPaginationConfig?.page || 0, resolvedPaginationConfig?.pageSize || 10, totalSize ?? data.length);
    // Row selection
    const { selectedKeys, isSelected, toggleRow, toggleAll, isAllSelected, isIndeterminate, } = useRowSelection(data, resolvedRowSelection?.keyField || keyField, resolvedRowSelection?.mode || 'none', resolvedRowSelection?.selectedRowKeys, resolvedRowSelection?.getCheckboxProps);
    // Row expansion
    const { expandedKeys, isExpanded, toggleExpand } = useRowExpansion(expandable?.keyField || keyField, expandable?.defaultExpandedRowKeys, expandable?.expandedRowKeys, expandable?.accordion);
    // Column visibility
    const { visibleColumns, toggleColumn, isColumnHidden } = useColumnVisibility(columns, id);
    // Column resizing hook
    const { columnWidths, getResizeHandle, resetWidths: resetColumnWidths, isResizing, } = useColumnResize({
        columns: visibleColumns,
        config: resizeConfig,
        enabled: resizable,
        tableId: id,
    });
    // Get visible columns from reordered columns (filter hidden ones)
    const visibleRereorderedColumns = useMemo(() => {
        return reorderedColumns.filter((col) => !isColumnHidden(col.dataField));
    }, [reorderedColumns, isColumnHidden]);
    // Use reordered visible columns for rendering
    const renderColumns = reorderable
        ? visibleRereorderedColumns
        : visibleColumns;
    // Keep onFilter ref updated
    useEffect(() => {
        onFilterRef.current = onFilter;
    }, [onFilter]);
    // Track previous values to detect actual changes
    const prevSearchRef = useRef(debouncedSearchValue);
    const prevFiltersRef = useRef(JSON.stringify(filters));
    // Call onFilter when filter/search values actually change
    // Note: filter components already debounce internally, so we use filters directly
    useEffect(() => {
        if (!shouldCallOnFilter.current)
            return;
        const currentFiltersStr = JSON.stringify(filters);
        const searchChanged = prevSearchRef.current !== debouncedSearchValue;
        const filtersChanged = prevFiltersRef.current !== currentFiltersStr;
        // Only proceed if search or filters actually changed
        if (!searchChanged && !filtersChanged) {
            shouldCallOnFilter.current = false;
            return;
        }
        // Update previous values
        prevSearchRef.current = debouncedSearchValue;
        prevFiltersRef.current = currentFiltersStr;
        // Clean up filters - remove null, undefined, and empty string values
        const cleanFilters = {};
        Object.keys(filters).forEach((key) => {
            const value = filters[key];
            if (value !== null && value !== undefined && value !== '') {
                cleanFilters[key] = value;
            }
        });
        const hasFilters = Object.keys(cleanFilters).length > 0;
        // Build filter data based on what type of filter changed
        // For 'search' type, include srText if not empty; for 'filter' type, only pass filters
        const filterData = { ...cleanFilters };
        if (filterTypeRef.current === 'search' && debouncedSearchValue) {
            filterData.srText = debouncedSearchValue;
        }
        // Always call onFilter when filters change (including when cleared)
        // Case 1: Global search cleared, column filters exist → filters only
        // Case 2: Global search cleared, no column filters → empty filters (reload all)
        // Case 3: Specific column cleared → remaining filters
        // Note: page is 0-indexed internally, but onFilter expects 1-indexed page
        onFilterRef.current?.(filterTypeRef.current, filterData, page + 1, pageSize);
        // Reset the flag after processing to prevent duplicate calls
        shouldCallOnFilter.current = false;
    }, [debouncedSearchValue, filters, page, pageSize]);
    // Track selection count changes for animation
    useEffect(() => {
        const currentCount = selectedKeys.size;
        const prevCount = prevSelectionCountRef.current;
        if (currentCount > prevCount) {
            setSelectionAnimation('up');
        }
        else if (currentCount < prevCount) {
            setSelectionAnimation('down');
        }
        prevSelectionCountRef.current = currentCount;
        // Reset animation after it completes
        const timer = setTimeout(() => {
            setSelectionAnimation('none');
        }, 300);
        return () => clearTimeout(timer);
    }, [selectedKeys.size]);
    // Process data (filter, sort, paginate)
    const processedData = useMemo(() => {
        if (resolvedRemote) {
            // Server-side processing - data is already processed
            return data;
        }
        let result = [...data];
        // Filter
        result = filterData(result, filters, columns, debouncedSearchValue);
        // Sort
        result = sortData(result, sort, columns);
        // Paginate
        if (pagination) {
            result = paginateData(result, page, pageSize);
        }
        return result;
    }, [
        data,
        filters,
        sort,
        page,
        pageSize,
        debouncedSearchValue,
        resolvedRemote,
        pagination,
        columns,
    ]);
    // Calculate total for pagination
    const calculatedTotal = useMemo(() => {
        // If totalSize is explicitly provided, use it for server-side pagination
        if (totalSize !== undefined && totalSize > 0)
            return totalSize;
        if (resolvedRemote)
            return data.length;
        return filterData(data, filters, columns, debouncedSearchValue).length;
    }, [
        data,
        filters,
        columns,
        debouncedSearchValue,
        resolvedRemote,
        totalSize,
    ]);
    // Handle search
    const handleSearchChange = useCallback((value) => {
        setInternalSearchValue(value);
        onSearch?.(value);
        // Enable debounced onFilter callback with 'search' type
        shouldCallOnFilter.current = true;
        filterTypeRef.current = 'search';
        onChange?.({ type: 'search', search: value });
    }, [onSearch, onChange]);
    // Handle sort
    const handleSortClick = useCallback((column) => {
        if (!column.sort)
            return;
        const newSort = handleSort(column.dataField, sort.order);
        onSortChange?.(newSort);
        onChange?.({ type: 'sort', sort: newSort });
    }, [sort, handleSort, onSortChange, onChange]);
    // Handle filter
    const handleFilterChange = useCallback((field, value) => {
        setFilter(field, value);
        const newFilters = { ...filters, [field]: value };
        onFilterChange?.(newFilters);
        // Enable debounced onFilter callback with 'filter' type
        shouldCallOnFilter.current = true;
        filterTypeRef.current = 'filter';
        onChange?.({ type: 'filter', filters: newFilters });
    }, [filters, setFilter, onFilterChange, onChange]);
    // Handle clear all filters
    const handleClearFilters = useCallback(() => {
        clearFilters();
        setInternalSearchValue('');
        onClearFilters?.();
        clearAllFilter?.();
        onFilterChange?.({});
        onChange?.({ type: 'filter', filters: {} });
        // Reset the tracking ref so subsequent filters can trigger onFilter
        lastOnFilterCallRef.current = null;
    }, [clearFilters, onClearFilters, onFilterChange, onChange]);
    // Handle page change
    const handlePageChange = useCallback((newPage) => {
        goToPage(newPage);
        // Pass 1-indexed page number to callbacks (user-friendly)
        const displayPage = newPage + 1;
        // onPageSizeChange is the primary callback
        onPageSizeChange?.(displayPage, pageSize);
        onPageChange?.(displayPage, pageSize);
        onChange?.({
            type: 'pagination',
            pagination: { page: displayPage, pageSize },
        });
    }, [goToPage, pageSize, onPageSizeChange, onPageChange, onChange]);
    // Handle page size change
    const handlePageSizeChange = useCallback((newSize) => {
        changePageSize(newSize);
        // Pass 1-indexed page number to callbacks (page 1 after size change)
        onPageSizeChange?.(1, newSize);
        onPageChange?.(1, newSize);
        onChange?.({
            type: 'pagination',
            pagination: { page: 1, pageSize: newSize },
        });
    }, [changePageSize, onPageSizeChange, onPageChange, onChange]);
    // Handle row click
    const handleRowClick = useCallback((row, rowIndex, e) => {
        // Prevent clicks on disabled rows
        const checkboxProps = resolvedRowSelection?.getCheckboxProps?.(row);
        if (checkboxProps?.disabled) {
            return;
        }
        // Selection handling - only for 'single' mode (checkbox mode uses checkbox click only)
        if (resolvedRowSelection?.mode === 'single') {
            const result = toggleRow(row);
            if (result) {
                resolvedRowSelection?.onChange?.(result.selectedKeys, result.selectedRows);
            }
        }
        // Expand by click
        if (expandable?.expandRowByClick) {
            const result = toggleExpand(row);
            if (result) {
                expandable.onExpandChange?.(result.expandedKeys, result.expanded, row);
            }
        }
        onRowClick?.(row, rowIndex, e);
    }, [rowSelection, expandable, toggleRow, toggleExpand, onRowClick, resolvedRowSelection]);
    // Helper to check if cell is editable and get custom editor
    const getCellEditableInfo = useCallback((column, row, rowIndex, colIndex) => {
        // If editorRenderer is provided, column is editable by default (unless editable explicitly returns false)
        const hasEditorRenderer = !!column.editorRenderer;
        if (column.editable === undefined) {
            // No editable prop - editable if has editorRenderer
            return { isEditable: hasEditorRenderer };
        }
        if (column.editable === false) {
            return { isEditable: false };
        }
        if (column.editable === true) {
            return { isEditable: true };
        }
        // It's a function
        const cellValue = getNestedValue(row, column.dataField);
        const result = column.editable(cellValue, row, rowIndex, colIndex);
        if (typeof result === 'boolean') {
            return { isEditable: result };
        }
        // Result is a custom editor (ReactNode)
        return { isEditable: true, customEditor: result };
    }, []);
    // Handle cell edit
    const handleCellDoubleClick = useCallback((row, rowIndex, column, colIndex, e) => {
        // Only apply allowed-cells logic if rowSelection is configured
        if (resolvedRowSelection) {
            // Check if row is disabled
            const checkboxProps = resolvedRowSelection.getCheckboxProps?.(row);
            const isRowDisabled = !!checkboxProps?.disabled;
            // Only apply allowed-cells logic when row is disabled
            if (isRowDisabled) {
                // If no allowed cells provided, block all clicks
                if (!hasAllowedEditingFields) {
                    return;
                }
                // Only allow clicks on columns in allowed list
                if (!isFieldAllowedForDisabledRow(column.dataField)) {
                    return;
                }
            }
        }
        // Check if column is editable
        const { isEditable } = getCellEditableInfo(column, row, rowIndex, colIndex);
        // Call column's onDoubleClick event if defined
        column.events?.onDoubleClick?.(e, row, rowIndex, column, colIndex);
        // Handle cell editing
        if (editMode !== 'none') {
            // Only apply allowed-cells logic if rowSelection is configured and row is disabled
            if (resolvedRowSelection) {
                const checkboxProps = resolvedRowSelection.getCheckboxProps?.(row);
                const isRowDisabled = !!checkboxProps?.disabled;
                if (isRowDisabled) {
                    if (isFieldAllowedForDisabledRow(column.dataField)) {
                        if (editMode === 'dblclick') {
                            setEditingCell({ row: rowIndex, field: column.dataField });
                            setEditValue(getNestedValue(row, column.dataField));
                        }
                    }
                    // If row is disabled and no allowed cells, don't allow editing (already returned above)
                }
                else if (isEditable && editMode === 'dblclick') {
                    // Row is not disabled, allow normal editing
                    setEditingCell({ row: rowIndex, field: column.dataField });
                    setEditValue(getNestedValue(row, column.dataField));
                }
            }
            else if (isEditable && editMode === 'dblclick') {
                // No rowSelection configured, allow normal editing
                setEditingCell({ row: rowIndex, field: column.dataField });
                setEditValue(getNestedValue(row, column.dataField));
            }
        }
        // Call row double click callback
        onRowDoubleClick?.(row, rowIndex, e);
    }, [editMode, onRowDoubleClick, getCellEditableInfo, resolvedRowSelection]);
    const handleCellClick = useCallback((row, rowIndex, column, colIndex, e) => {
        // Only apply allowed-cells logic if rowSelection is configured
        if (resolvedRowSelection) {
            // Check if row is disabled
            const checkboxProps = resolvedRowSelection.getCheckboxProps?.(row);
            const isRowDisabled = !!checkboxProps?.disabled;
            // Only apply allowed-cells logic when row is disabled
            if (isRowDisabled) {
                // If no allowed cells provided, block all clicks
                if (!hasAllowedEditingFields) {
                    return;
                }
                // Only allow clicks on columns in allowed list
                if (!isFieldAllowedForDisabledRow(column.dataField)) {
                    return;
                }
            }
        }
        // Check if column is editable
        const { isEditable } = getCellEditableInfo(column, row, rowIndex, colIndex);
        // Call column's onClick event if defined
        if (e) {
            column.events?.onClick?.(e, row, rowIndex, column, colIndex);
        }
        // Handle cell editing on click
        if (editMode === 'click') {
            // Only apply allowed-cells logic if rowSelection is configured and row is disabled
            if (resolvedRowSelection) {
                const checkboxProps = resolvedRowSelection.getCheckboxProps?.(row);
                const isRowDisabled = !!checkboxProps?.disabled;
                if (isRowDisabled) {
                    if (isFieldAllowedForDisabledRow(column.dataField)) {
                        setEditingCell({ row: rowIndex, field: column.dataField });
                        setEditValue(getNestedValue(row, column.dataField));
                    }
                    // If row is disabled and no allowed cells, don't allow editing (already returned above)
                }
                else if (isEditable) {
                    // Row is not disabled, allow normal editing
                    setEditingCell({ row: rowIndex, field: column.dataField });
                    setEditValue(getNestedValue(row, column.dataField));
                }
            }
            else if (isEditable) {
                // No rowSelection configured, allow normal editing
                setEditingCell({ row: rowIndex, field: column.dataField });
                setEditValue(getNestedValue(row, column.dataField));
            }
        }
    }, [editMode, getCellEditableInfo, resolvedRowSelection]);
    const handleCellEditComplete = useCallback((row, rowIndex, column) => {
        if (editingCell) {
            // Validate
            if (column.validator) {
                const result = column.validator(editValue, row);
                if (result !== true) {
                    alert(typeof result === 'string' ? result : 'Invalid value');
                    setEditingCell(null);
                    return;
                }
            }
            const rowId = row[keyField];
            onCellEdit?.(editValue, column.dataField, row, rowIndex);
            onUpdateItem?.(editValue, column.dataField, rowId);
        }
        setEditingCell(null);
    }, [editingCell, editValue, onCellEdit, onUpdateItem, keyField]);
    // Helper to get nested value from object
    const getNestedValueLocal = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    };
    // Process field value based on fieldTypeConfig (matching reference implementation)
    const processFieldValue = useCallback((value, dataField, row) => {
        const configOrType = fieldTypeConfig?.[dataField];
        // Handle both object config and string shorthand (e.g., 'boolean', 'date')
        const config = typeof configOrType === 'string'
            ? { type: configOrType }
            : configOrType;
        const fieldType = config?.type || 'string';
        switch (fieldType) {
            case 'array':
                if (config?.fields && config.fields.length > 0) {
                    // Array of objects with specific fields to extract
                    if (!Array.isArray(value))
                        return value || '';
                    return value
                        .slice(0, config.maxItems || value.length)
                        .map((item) => {
                        if (typeof item === 'object' && config.fields) {
                            // Extract only specified fields from the object
                            return config.fields
                                .map((field) => item[field])
                                .filter(Boolean)
                                .join(', ');
                        }
                        else if (typeof item === 'string') {
                            return item;
                        }
                        return '';
                    })
                        .filter(Boolean)
                        .join(config.separator || '; ');
                }
                else {
                    // Default array handling
                    if (!Array.isArray(value))
                        return value || '';
                    return value
                        .map((item) => typeof item === 'object' ? JSON.stringify(item) : item)
                        .join('; ');
                }
            case 'object':
                if (!value || typeof value !== 'object')
                    return '';
                const fields = config?.fields || config?.keys || [];
                const labelMap = config?.labelMap || {};
                if (fields.length > 0) {
                    // Extract specific fields with optional label mapping
                    return fields
                        .map((field) => {
                        const nestedValue = getNestedValueLocal(value, field);
                        if (nestedValue !== undefined && nestedValue !== null) {
                            const label = labelMap[field] || field;
                            return `${label}: ${nestedValue}`;
                        }
                        return null;
                    })
                        .filter(Boolean)
                        .join(', ');
                }
                else {
                    // Default object handling
                    return Object.entries(value)
                        .map(([key, val]) => typeof val === 'boolean'
                        ? `${key}: ${val ? 'Yes' : 'No'}`
                        : `${key}: ${val}`)
                        .join(', ');
                }
            case 'date':
                if (!value)
                    return '';
                try {
                    const date = new Date(value);
                    const format = config?.dateFormat || 'YYYY-MM-DD HH:mm:ss';
                    // Simple date formatting
                    return date.toISOString().slice(0, 19).replace('T', ' ');
                }
                catch {
                    return String(value);
                }
            case 'number':
                return value !== undefined && value !== null
                    ? String(Number(value))
                    : '';
            case 'boolean':
                return typeof value === 'boolean' ? (value ? 'Yes' : 'No') : '';
            case 'string':
            case 'text':
            default:
                if (typeof value === 'boolean')
                    return value ? 'Yes' : 'No';
                return value !== undefined && value !== null ? String(value) : '';
        }
    }, [fieldTypeConfig]);
    // Handle export
    const handleExport = useCallback(async () => {
        const exportData = resolvedRemote
            ? data
            : filterData(data, filters, columns, debouncedSearchValue);
        // Filter columns based on hideExcelSheet array and csvExport !== false
        let exportColumns = visibleColumns.filter((col) => col.csvExport !== false);
        if (Array.isArray(hideExcelSheet)) {
            exportColumns = exportColumns.filter((col) => !hideExcelSheet.includes(col.dataField));
        }
        // Also filter based on fieldTypeConfig hideFromExport or csvExport
        if (fieldTypeConfig) {
            exportColumns = exportColumns.filter((col) => {
                const configOrType = fieldTypeConfig[col.dataField];
                const config = typeof configOrType === 'string'
                    ? { type: configOrType }
                    : configOrType;
                if (config?.hideFromExport)
                    return false;
                if (config?.csvExport === false)
                    return false;
                return true;
            });
        }
        // Create enhanced columns with export formatters
        const enhancedColumns = exportColumns.map((col) => {
            const configOrType = fieldTypeConfig?.[col.dataField];
            const config = typeof configOrType === 'string'
                ? { type: configOrType }
                : configOrType;
            // If column already has csvFormatter, use it
            if (col.csvFormatter) {
                return col;
            }
            // If config has exportFormatter, use it
            if (config?.exportFormatter) {
                return { ...col, csvFormatter: config.exportFormatter };
            }
            // If config has type, create formatter based on type
            if (config?.type) {
                return {
                    ...col,
                    csvFormatter: (cell, row) => processFieldValue(cell, col.dataField, row),
                };
            }
            return col;
        });
        // Export based on format
        if (exportFormat === 'excel') {
            await exportToExcel(exportData, enhancedColumns, resolvedExportFileName);
        }
        else {
            exportToCSV(exportData, enhancedColumns, resolvedExportFileName);
        }
    }, [
        data,
        filters,
        columns,
        debouncedSearchValue,
        visibleColumns,
        hideExcelSheet,
        fieldTypeConfig,
        processFieldValue,
        resolvedExportFileName,
        resolvedRemote,
        exportFormat,
    ]);
    // Handle checkbox change
    const handleCheckboxChange = useCallback((row, e) => {
        e.stopPropagation();
        const result = toggleRow(row);
        if (result) {
            resolvedRowSelection?.onChange?.(result.selectedKeys, result.selectedRows);
        }
    }, [toggleRow, rowSelection]);
    // Handle select all
    const handleSelectAllChange = useCallback(() => {
        const result = toggleAll(!isAllSelected);
        if (result) {
            resolvedRowSelection?.onChange?.(result.selectedKeys, result.selectedRows);
        }
    }, [toggleAll, isAllSelected, resolvedRowSelection]);
    // Handle expand toggle
    const handleExpandClick = useCallback((row, e) => {
        // Prevent expand on disabled rows
        const checkboxProps = resolvedRowSelection?.getCheckboxProps?.(row);
        if (checkboxProps?.disabled) {
            return;
        }
        e.stopPropagation();
        const result = toggleExpand(row);
        expandable?.onExpandChange?.(result.expandedKeys, result.expanded, row);
    }, [toggleExpand, expandable, resolvedRowSelection]);
    // Filtered column list for toggle panel - use reorderedColumns to preserve reorder state
    const filteredToggleColumns = useMemo(() => {
        return reorderedColumns.filter((c) => c.dataField !== keyField &&
            c.text.toLowerCase().includes(columnSearch.toLowerCase()));
    }, [reorderedColumns, keyField, columnSearch]);
    // Get row key
    const getRowKey = useCallback((row) => row[keyField], [keyField]);
    // Render cell content
    const renderCellContent = useCallback((row, column, rowIndex, colIndex) => {
        const value = getNestedValue(row, column.dataField);
        const isEditing = editingCell?.row === rowIndex &&
            editingCell?.field === column.dataField;
        if (isEditing) {
            // Check for custom editorRenderer
            if (column.editorRenderer) {
                const rowId = row[keyField];
                const cacheKey = `${rowId ?? rowIndex}-${column.dataField}`;
                if (!editorRendererCacheRef.current.has(cacheKey)) {
                    const editorProps = {
                        value: editValue,
                        onUpdate: (newValue) => {
                            setEditValue(newValue);
                            // Call onUpdateItem directly for custom editors
                            onUpdateItem?.(newValue, column.dataField, rowId);
                            setEditingCell(null);
                        },
                        onCancel: () => setEditingCell(null),
                        onBlur: () => {
                            // Only complete if value changed
                            if (editValue !== value) {
                                onUpdateItem?.(editValue, column.dataField, rowId);
                            }
                            setEditingCell(null);
                        },
                        row,
                        column,
                        rowIndex,
                        columnIndex: colIndex,
                        // Additional helpers for direct update
                        rowId,
                        dataField: column.dataField,
                        onUpdateItem: (newValue) => {
                            onUpdateItem?.(newValue, column.dataField, rowId);
                            setEditingCell(null);
                        },
                    };
                    editorRendererCacheRef.current.set(cacheKey, column.editorRenderer(editorProps, editValue, row, column, rowIndex, colIndex));
                }
                return editorRendererCacheRef.current.get(cacheKey);
            }
            // Default editor
            return (_jsx(CellEditor, { type: column.editorType === 'number' ? 'number' : 'text', value: editValue ?? '', onChange: (e) => setEditValue(e.target.value), onBlur: () => handleCellEditComplete(row, rowIndex, column), onKeyDown: (e) => {
                    if (e.key === 'Enter') {
                        handleCellEditComplete(row, rowIndex, column);
                    }
                    if (e.key === 'Escape') {
                        setEditingCell(null);
                    }
                }, className: column.editorClasses, style: column.editorStyle, autoFocus: true }));
        }
        if (column.formatter) {
            return column.formatter(value, row, rowIndex, colIndex);
        }
        if (value === null || value === undefined)
            return '';
        if (typeof value === 'boolean')
            return value ? 'Yes' : 'No';
        if (typeof value === 'object')
            return JSON.stringify(value);
        return String(value);
    }, [editingCell, editValue, handleCellEditComplete]);
    // Render toolbar
    const renderToolbar = () => {
        if (hideToolbar)
            return null;
        if (typeof toolbar === 'function') {
            return toolbar({
                searchValue,
                onSearch: handleSearchChange,
                onClearFilters: handleClearFilters,
                onExport: handleExport,
            });
        }
        if (toolbar)
            return toolbar;
        const hasFilters = Object.keys(filters).length > 0 || searchValue;
        return (_jsxs(Toolbar, { className: classNames.toolbar, style: styles.toolbar, children: [_jsxs(ToolbarGroup, { children: [toolbarLeft, searchable && (_jsxs(SearchInput, { children: [_jsx(SearchIcon, {}), _jsx("input", { type: "text", value: searchValue, onChange: (e) => handleSearchChange(e.target.value), onFocus: () => {
                                        // Clear column filter focus when global search is focused
                                        focusedFilterFieldRef.current = null;
                                    }, placeholder: searchPlaceholder })] })), searchable && (_jsx(ToolbarButton, { onClick: () => handleSearchChange(''), disabled: !searchValue, style: { opacity: searchValue ? 1 : 0.6 }, children: "Clear" })), _jsx(ToolbarButton, { onClick: handleClearFilters, disabled: !hasFilters, style: { opacity: hasFilters ? 1 : 0.6 }, children: "Clear all filters" }), resolvedExportable && hideExcelSheet !== true && (_jsxs(ToolbarButton, { onClick: handleExport, children: [_jsx(DownloadIcon, {}), exportFormat === 'excel' ? 'Export Excel' : 'Export CSV'] })), showFilterToggle && (_jsxs("div", { ref: columnToggleRef, style: { position: 'relative' }, children: [_jsx(Tooltip, { content: "Show/Hide Columns", position: "bottom", children: _jsx(ToolbarButton, { "$active": columnToggleOpen, onClick: () => setColumnToggleOpen(!columnToggleOpen), "aria-label": "Toggle column visibility", style: { padding: '0 8px' }, children: _jsx(FilterIcon, {}) }) }), columnToggleOpen && (_jsxs(ColumnTogglePanel, { children: [_jsxs(ColumnToggleHeader, { children: [_jsx("span", { children: "Show/Hide Columns" }), _jsx("button", { onClick: () => setColumnToggleOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(ColumnToggleSearch, { children: _jsx("input", { type: "text", value: columnSearch, onChange: (e) => setColumnSearch(e.target.value), placeholder: "Search columns..." }) }), _jsxs(ColumnToggleList, { children: [_jsxs(ColumnToggleItem, { style: {
                                                        borderBottom: '1px solid #e5e7eb',
                                                        paddingBottom: 8,
                                                        marginBottom: 4,
                                                    }, children: [_jsx("input", { type: "checkbox", checked: filteredToggleColumns.length > 0 &&
                                                                filteredToggleColumns.every((col) => !isColumnHidden(col.dataField)), onChange: (e) => {
                                                                filteredToggleColumns.forEach((col) => {
                                                                    if (e.target.checked) {
                                                                        if (isColumnHidden(col.dataField)) {
                                                                            toggleColumn(col.dataField);
                                                                        }
                                                                    }
                                                                    else {
                                                                        if (!isColumnHidden(col.dataField)) {
                                                                            toggleColumn(col.dataField);
                                                                        }
                                                                    }
                                                                });
                                                            } }), _jsx("span", { style: { fontWeight: 600 }, children: "Select All" })] }), filteredToggleColumns.map((column, index) => (_jsxs(ColumnToggleItem, { "$reorderable": reorderable, "$isDragging": toggleDraggingColumn === column.dataField, "$isDragOver": toggleDragOverColumn === column.dataField, draggable: reorderable, onDragStart: (e) => {
                                                        if (!reorderable)
                                                            return;
                                                        setToggleDraggingColumn(column.dataField);
                                                        e.dataTransfer.effectAllowed = 'move';
                                                        e.dataTransfer.setData('text/plain', column.dataField);
                                                    }, onDragEnd: () => {
                                                        setToggleDraggingColumn(null);
                                                        setToggleDragOverColumn(null);
                                                    }, onDragOver: (e) => {
                                                        if (!reorderable)
                                                            return;
                                                        e.preventDefault();
                                                        if (toggleDraggingColumn &&
                                                            toggleDraggingColumn !== column.dataField) {
                                                            setToggleDragOverColumn(column.dataField);
                                                        }
                                                    }, onDragLeave: () => {
                                                        setToggleDragOverColumn(null);
                                                    }, onDrop: (e) => {
                                                        if (!reorderable)
                                                            return;
                                                        e.preventDefault();
                                                        const draggedField = e.dataTransfer.getData('text/plain');
                                                        if (draggedField &&
                                                            draggedField !== column.dataField) {
                                                            // Find indices
                                                            const fromIdx = reorderedColumns.findIndex((c) => c.dataField === draggedField);
                                                            const toIdx = reorderedColumns.findIndex((c) => c.dataField === column.dataField);
                                                            if (fromIdx !== -1 && toIdx !== -1) {
                                                                // Reorder columns
                                                                const newColumns = [...reorderedColumns];
                                                                const [removed] = newColumns.splice(fromIdx, 1);
                                                                newColumns.splice(toIdx, 0, removed);
                                                                // Update local state
                                                                setReorderedColumns(newColumns);
                                                                // Call reorder callback
                                                                reorderConfig?.onReorder?.(newColumns, fromIdx, toIdx);
                                                            }
                                                        }
                                                        setToggleDraggingColumn(null);
                                                        setToggleDragOverColumn(null);
                                                    }, children: [_jsx("input", { type: "checkbox", checked: !isColumnHidden(column.dataField), onChange: () => toggleColumn(column.dataField), onClick: (e) => e.stopPropagation() }), _jsx("span", { children: column.text }), reorderable && (_jsx(ColumnToggleDragHandle, { "$isDragging": toggleDraggingColumn === column.dataField, title: "Drag to reorder" }))] }, column.dataField)))] })] }))] }))] }), toolbarCenter, _jsxs(ToolbarGroup, { children: [refreshable && (_jsxs(ToolbarButton, { onClick: onRefresh, children: [_jsx(RefreshIcon, {}), "Refresh"] })), printable && (_jsxs(ToolbarButton, { onClick: onPrint, children: [_jsx(PrintIcon, {}), "Print"] })), columnToggle && (_jsxs("div", { ref: !showFilterToggle ? columnToggleRef : undefined, style: { position: 'relative' }, children: [_jsxs(ToolbarButton, { "$active": columnToggleOpen, onClick: () => setColumnToggleOpen(!columnToggleOpen), children: [_jsx(ColumnsIcon, {}), "Columns"] }), columnToggleOpen && (_jsxs(ColumnTogglePanel, { children: [_jsxs(ColumnToggleHeader, { children: [_jsx("span", { children: "Toggle Columns" }), _jsx("button", { onClick: () => setColumnToggleOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(ColumnToggleSearch, { children: _jsx("input", { type: "text", value: columnSearch, onChange: (e) => setColumnSearch(e.target.value), placeholder: "Search columns..." }) }), _jsx(ColumnToggleList, { children: filteredToggleColumns.map((column, index) => (_jsxs(ColumnToggleItem, { "$reorderable": reorderable, "$isDragging": toggleDraggingColumn === column.dataField, "$isDragOver": toggleDragOverColumn === column.dataField, draggable: reorderable, onDragStart: (e) => {
                                                    if (!reorderable)
                                                        return;
                                                    setToggleDraggingColumn(column.dataField);
                                                    e.dataTransfer.effectAllowed = 'move';
                                                    e.dataTransfer.setData('text/plain', column.dataField);
                                                }, onDragEnd: () => {
                                                    setToggleDraggingColumn(null);
                                                    setToggleDragOverColumn(null);
                                                }, onDragOver: (e) => {
                                                    if (!reorderable)
                                                        return;
                                                    e.preventDefault();
                                                    if (toggleDraggingColumn &&
                                                        toggleDraggingColumn !== column.dataField) {
                                                        setToggleDragOverColumn(column.dataField);
                                                    }
                                                }, onDragLeave: () => {
                                                    setToggleDragOverColumn(null);
                                                }, onDrop: (e) => {
                                                    if (!reorderable)
                                                        return;
                                                    e.preventDefault();
                                                    const draggedField = e.dataTransfer.getData('text/plain');
                                                    if (draggedField &&
                                                        draggedField !== column.dataField) {
                                                        const fromIdx = reorderedColumns.findIndex((c) => c.dataField === draggedField);
                                                        const toIdx = reorderedColumns.findIndex((c) => c.dataField === column.dataField);
                                                        if (fromIdx !== -1 && toIdx !== -1) {
                                                            const newColumns = [...reorderedColumns];
                                                            const [removed] = newColumns.splice(fromIdx, 1);
                                                            newColumns.splice(toIdx, 0, removed);
                                                            // Update local state
                                                            setReorderedColumns(newColumns);
                                                            reorderConfig?.onReorder?.(newColumns, fromIdx, toIdx);
                                                        }
                                                    }
                                                    setToggleDraggingColumn(null);
                                                    setToggleDragOverColumn(null);
                                                }, children: [_jsx("input", { type: "checkbox", checked: !isColumnHidden(column.dataField), onChange: () => toggleColumn(column.dataField), onClick: (e) => e.stopPropagation() }), _jsx("span", { children: column.text }), reorderable && (_jsx(ColumnToggleDragHandle, { "$isDragging": toggleDraggingColumn === column.dataField, title: "Drag to reorder" }))] }, column.dataField))) })] }))] })), toolbarRight] })] }));
    };
    // Render pagination
    const renderPagination = () => {
        if (!pagination)
            return null;
        const actualTotalPages = Math.ceil(calculatedTotal / pageSize) || 1;
        const startItem = calculatedTotal > 0 ? page * pageSize + 1 : 0;
        // Use actual data length for endItem to show correct count
        const actualDataCount = resolvedRemote
            ? data.length
            : processedData.length;
        const endItem = Math.min(page * pageSize + actualDataCount, calculatedTotal);
        const showTotal = resolvedPaginationConfig?.showTotal === true
            ? `Showing ${startItem} to ${endItem} of ${calculatedTotal} Results`
            : typeof resolvedPaginationConfig?.showTotal === 'function'
                ? resolvedPaginationConfig.showTotal(calculatedTotal, [
                    startItem,
                    endItem,
                ])
                : null;
        // Generate page numbers
        const getPageNumbers = () => {
            const pages = [];
            const maxVisible = 5;
            if (actualTotalPages <= maxVisible) {
                for (let i = 0; i < actualTotalPages; i++)
                    pages.push(i);
            }
            else {
                if (page < 3) {
                    for (let i = 0; i < 4; i++)
                        pages.push(i);
                    pages.push('...');
                    pages.push(actualTotalPages - 1);
                }
                else if (page > actualTotalPages - 4) {
                    pages.push(0);
                    pages.push('...');
                    for (let i = actualTotalPages - 4; i < actualTotalPages; i++)
                        pages.push(i);
                }
                else {
                    pages.push(0);
                    pages.push('...');
                    for (let i = page - 1; i <= page + 1; i++)
                        pages.push(i);
                    pages.push('...');
                    pages.push(actualTotalPages - 1);
                }
            }
            return pages;
        };
        return (_jsxs(PaginationWrapper, { className: classNames.pagination, style: styles.pagination, children: [_jsxs(ToolbarGroup, { children: [(resolvedRowSelection?.mode === 'checkbox' || isSelectRow) &&
                            selectedKeys.size > 0 && (_jsxs(SelectionIndicator, { onClick: () => {
                                const selectedRows = data.filter((row) => selectedKeys.has(getRowKey(row)));
                                resolvedRowSelection?.onChange?.(Array.from(selectedKeys), selectedRows);
                                // Call onSelectedRow only when user clicks this button
                                onSelectedRow?.(selectedRows);
                            }, children: [_jsx(SelectionCount, { "$animate": selectionAnimation, children: selectedKeys.size }, selectedKeys.size), _jsx("span", { children: "Selected" })] })), resolvedPaginationConfig?.showSizeChanger !== false && (_jsx(PageSizeSelect, { value: pageSize, onChange: (e) => handlePageSizeChange(Number(e.target.value)), children: (resolvedPaginationConfig?.pageSizeOptions || [10, 20, 30, 50]).map((size) => (_jsx("option", { value: size, children: size }, size))) }))] }), _jsxs(PaginationControls, { children: [_jsx(PageButton, { onClick: () => handlePageChange(0), disabled: page === 0, children: _jsx(ChevronsLeftIcon, {}) }), _jsx(PageButton, { onClick: () => handlePageChange(page - 1), disabled: page === 0, children: _jsx(ChevronLeftIcon, {}) }), getPageNumbers().map((p, i) => typeof p === 'string' ? (_jsx("span", { style: { padding: '0 4px', color: 'white' }, children: p }, `ellipsis-${i}`)) : (_jsx(PageButton, { "$active": p === page, onClick: () => handlePageChange(p), children: p + 1 }, p))), _jsx(PageButton, { onClick: () => handlePageChange(page + 1), disabled: page >= actualTotalPages - 1, children: _jsx(ChevronRightIcon, {}) }), _jsx(PageButton, { onClick: () => handlePageChange(actualTotalPages - 1), disabled: page >= actualTotalPages - 1, children: _jsx(ChevronsRightIcon, {}) })] }), showTotal && _jsx(PaginationInfo, { children: showTotal }), resolvedPaginationConfig?.showQuickJumper &&
                    (() => {
                        const handleQuickJump = (input) => {
                            const pageNum = parseInt(input.value, 10);
                            if (!isNaN(pageNum) &&
                                pageNum >= 1 &&
                                pageNum <= actualTotalPages) {
                                handlePageChange(pageNum - 1); // Convert to 0-indexed
                                input.value = '';
                                return true;
                            }
                            return false;
                        };
                        return (_jsxs(QuickJumper, { children: ["Go to", _jsx("input", { type: "number", min: 1, max: actualTotalPages, placeholder: `1-${actualTotalPages}`, onKeyDown: (e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            const target = e.target;
                                            if (handleQuickJump(target)) {
                                                target.blur();
                                            }
                                        }
                                    }, onBlur: (e) => {
                                        const target = e.target;
                                        handleQuickJump(target);
                                    } }), _jsx(PageButton, { onClick: () => {
                                        const input = document.querySelector(`#${id} input[type="number"]`);
                                        if (input) {
                                            handleQuickJump(input);
                                            input.blur();
                                        }
                                    }, style: { marginLeft: '4px', padding: '2px 8px' }, children: "Go" })] }));
                    })()] }));
    };
    // Check if any columns have filters
    const hasFilterableColumns = filterable ||
        columns.some((c) => typeof c.filter === 'function' ||
            c.filterComponent ||
            c.filter === true);
    // Should show filter row - check if there are filterable columns AND filters are visible
    const shouldShowFilterRow = hasFilterableColumns && showFilterRow;
    return (_jsxs(TableRoot, { ref: (node) => {
            // Handle forwarded ref
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
            // Also store in our container ref
            tableContainerRef.current = node;
        }, "$bordered": bordered, "$compact": compact, className: className || classNames.root, style: { ...styles.root, ...style, position: 'relative' }, "aria-label": rest['aria-label'], "aria-labelledby": rest['aria-labelledby'], children: [loading && (_jsx(LoadingOverlay, { className: classNames.loading, style: styles.loading, children: loadingIndicator || _jsx(LoadingSpinner, {}) })), renderToolbar(), _jsx(TableWrapper, { "$maxHeight": maxHeight, "$stickyHeader": stickyHeader, className: classNames.wrapper, style: styles.wrapper, children: _jsxs(StyledTable, { ref: tableRef, "$striped": striped, "$hover": hover, "$compact": compact, role: "grid", children: [caption && _jsx("caption", { className: "sr-only", children: caption }), _jsx(TableHeader, { "$sticky": stickyHeader, className: classNames.header, style: styles.header, children: _jsxs(HeaderRow, { className: classNames.headerRow, style: styles.headerRow, children: [resolvedRowSelection?.mode === 'checkbox' && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": resolvedRowSelection.columnWidth || 40, children: !resolvedRowSelection.hideSelectAll && (_jsx(Checkbox, { checked: isAllSelected, ref: (el) => {
                                                if (el)
                                                    el.indeterminate = isIndeterminate;
                                            }, onChange: handleSelectAllChange })) })), expandable && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": expandable.columnWidth || 40 })), showRowNumber && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": rowNumberWidth, children: rowNumberTitle })), renderColumns.map((column, colIndex) => {
                                        // Determine if column has a filter
                                        const hasColumnFilter = typeof column.filter === 'function' ||
                                            column.filter === true ||
                                            column.filterComponent ||
                                            column.filterRenderer;
                                        // Get the filter component
                                        const FilterComponent = hasColumnFilter
                                            ? (typeof column.filter === 'function'
                                                ? column.filter
                                                : null) ||
                                                column.filterComponent ||
                                                getFilterComponent(column.filterType || 'text')
                                            : null;
                                        const onFilter = (value) => handleFilterChange(column.dataField, value);
                                        // Get resized column style
                                        const resizeStyle = resizable
                                            ? getColumnStyle(column, columnWidths, resizable, isResizing)
                                            : {};
                                        // Render header cell with resize handle
                                        // Note: Using callback ref pattern for resize functionality
                                        const headerCellRef = (node) => {
                                            if (node && resizable) {
                                                // Store ref for resize handle
                                                const refObj = {
                                                    current: node,
                                                };
                                                // Attach resize handle via DOM if needed
                                            }
                                        };
                                        return (_jsxs(HeaderCell, { ref: headerCellRef, "$align": column.headerAlign || column.align || 'left', "$sortable": !!column.sort, "$compact": compact, "$width": resizable && columnWidths[column.dataField]
                                                ? columnWidths[column.dataField]
                                                : column.width, "$minWidth": column.minWidth, "$pinned": column.pinned, "$customClass": !!column.headerClasses, className: [column.headerClasses, classNames.headerCell]
                                                .filter(Boolean)
                                                .join(' '), style: {
                                                ...(typeof column.headerStyle === 'function'
                                                    ? column.headerStyle(column)
                                                    : column.headerStyle || styles.headerCell),
                                                ...resizeStyle,
                                                position: 'relative',
                                            }, role: "columnheader", "aria-sort": sort.field === column.dataField
                                                ? sort.order === 'asc'
                                                    ? 'ascending'
                                                    : sort.order === 'desc'
                                                        ? 'descending'
                                                        : 'none'
                                                : undefined, "data-column": column.dataField, children: [(() => {
                                                    // Check visibility props (default to true if not specified)
                                                    const headerStyleObj = typeof column.headerStyle === 'function'
                                                        ? column.headerStyle(column)
                                                        : column.headerStyle;
                                                    // isHeaderTitle: show title (default true, false to hide)
                                                    const showTitle = column.isHeaderTitle !== false &&
                                                        column.hideHeaderText !== true &&
                                                        !(headerStyleObj && headerStyleObj.fontSize === 0);
                                                    // isHeaderFilterComp: show filter (default true)
                                                    const showFilter = column.isHeaderFilterComp !== false &&
                                                        shouldShowFilterRow &&
                                                        hasColumnFilter &&
                                                        FilterComponent;
                                                    // isHeaderSort: show sort icon (default true)
                                                    const showSort = column.isHeaderSort !== false && column.sort;
                                                    // If no filter, show title and sort on single line
                                                    if (!showFilter) {
                                                        return (_jsxs("div", { style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: column.headerAlign || column.align || 'left',
                                                                gap: 6,
                                                                width: '100%',
                                                                cursor: showSort ? 'pointer' : 'default',
                                                                paddingRight: resizable ? 12 : 0,
                                                                position: 'relative',
                                                                zIndex: 2, // Above resize handle
                                                            }, onClick: () => showSort && handleSortClick(column), children: [showTitle && (_jsx("span", { style: {
                                                                        color: 'white',
                                                                        fontWeight: 600,
                                                                        fontSize: 12,
                                                                        whiteSpace: 'nowrap',
                                                                        flex: 1,
                                                                    }, children: column.headerFormatter
                                                                        ? column.headerFormatter(column, colIndex)
                                                                        : column.headerText || column.text })), showSort && (_jsx("div", { style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        flexShrink: 0,
                                                                        minWidth: 40,
                                                                        minHeight: 24,
                                                                        position: 'relative',
                                                                        overflow: 'visible',
                                                                    }, title: `Sort by ${column.text}`, children: column.sortCaret ? (column.sortCaret(sort.field === column.dataField
                                                                        ? sort.order
                                                                        : null, column)) : (_jsx(DefaultSortCaret, { order: sort.field === column.dataField
                                                                            ? sort.order
                                                                            : null, column: column })) }))] }));
                                                    }
                                                    // With filter: layout with filter + sort
                                                    return (_jsxs("div", { style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: showTitle ? 4 : 0,
                                                            width: '100%',
                                                            paddingRight: resizable ? 12 : 0,
                                                            position: 'relative',
                                                            zIndex: 2, // Above resize handle
                                                        }, children: [showTitle && (_jsx("div", { style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'space-between',
                                                                    gap: 4,
                                                                }, children: _jsx("span", { style: {
                                                                        color: 'white',
                                                                        fontWeight: 600,
                                                                        fontSize: 12,
                                                                        whiteSpace: 'nowrap',
                                                                        cursor: showSort ? 'pointer' : 'default',
                                                                        flex: 1,
                                                                    }, onClick: () => showSort && handleSortClick(column), children: column.headerFormatter
                                                                        ? column.headerFormatter(column, colIndex)
                                                                        : column.headerText || column.text }) })), _jsxs("div", { style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'flex-start',
                                                                    gap: 4,
                                                                    width: '100%',
                                                                    minHeight: 24,
                                                                }, children: [_jsx("div", { style: {
                                                                            flex: showSort ? '0 1 auto' : 1,
                                                                            width: showSort
                                                                                ? 'calc(100% - 48px)'
                                                                                : '100%',
                                                                            minWidth: 0,
                                                                            maxWidth: showSort
                                                                                ? 'calc(100% - 48px)'
                                                                                : '100%',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            overflow: 'hidden',
                                                                        }, onClick: (e) => e.stopPropagation(), children: column.filterRenderer ? (column.filterRenderer(onFilter, column)) : (_jsx("div", { onFocusCapture: () => {
                                                                                focusedFilterFieldRef.current =
                                                                                    column.dataField;
                                                                            }, "data-filter-wrapper": column.dataField, style: { width: '100%' }, children: _jsx(FilterComponent, { column: column, value: filters[column.dataField], onChange: onFilter, onClear: () => handleFilterChange(column.dataField, null) }, `filter-${column.dataField}`) })) }), showSort && (_jsx("div", { style: {
                                                                            minWidth: 40,
                                                                            minHeight: 24,
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            flexShrink: 0,
                                                                            flexGrow: 0,
                                                                            cursor: 'pointer',
                                                                            marginLeft: 'auto',
                                                                            position: 'relative',
                                                                            overflow: 'visible',
                                                                        }, onClick: (e) => {
                                                                            e.stopPropagation();
                                                                            handleSortClick(column);
                                                                        }, title: `Sort by ${column.text}`, children: column.sortCaret ? (column.sortCaret(sort.field === column.dataField
                                                                            ? sort.order
                                                                            : null, column)) : (_jsx(DefaultSortCaret, { order: sort.field === column.dataField
                                                                                ? sort.order
                                                                                : null, column: column })) }))] })] }));
                                                })(), resizable && (_jsx("div", { style: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        width: 6,
                                                        cursor: 'col-resize',
                                                        zIndex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }, onMouseDown: (e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        const cell = e.currentTarget
                                                            .parentElement;
                                                        if (cell) {
                                                            const startX = e.clientX;
                                                            const startWidth = cell.offsetWidth;
                                                            const dataField = column.dataField;
                                                            const handleMouseMove = (moveEvent) => {
                                                                const deltaX = moveEvent.clientX - startX;
                                                                const newWidth = Math.max(50, Math.min(800, startWidth + deltaX));
                                                                // Update via CSS for smooth resize
                                                                cell.style.width = `${newWidth}px`;
                                                                cell.style.minWidth = `${newWidth}px`;
                                                                cell.style.maxWidth = `${newWidth}px`;
                                                                // Update body cells too
                                                                document
                                                                    .querySelectorAll(`[data-column="${dataField}"]`)
                                                                    .forEach((el) => {
                                                                    el.style.width =
                                                                        `${newWidth}px`;
                                                                    el.style.minWidth =
                                                                        `${newWidth}px`;
                                                                    el.style.maxWidth =
                                                                        `${newWidth}px`;
                                                                });
                                                            };
                                                            const handleMouseUp = () => {
                                                                document.removeEventListener('mousemove', handleMouseMove);
                                                                document.removeEventListener('mouseup', handleMouseUp);
                                                                document.body.style.cursor = '';
                                                                document.body.style.userSelect = '';
                                                                // Trigger resize callback
                                                                const finalWidth = cell.offsetWidth;
                                                                resizeConfig?.onResizeEnd?.(dataField, finalWidth);
                                                            };
                                                            document.addEventListener('mousemove', handleMouseMove);
                                                            document.addEventListener('mouseup', handleMouseUp);
                                                            document.body.style.cursor = 'col-resize';
                                                            document.body.style.userSelect = 'none';
                                                            resizeConfig?.onResizeStart?.(dataField, startWidth);
                                                        }
                                                    }, children: _jsx("div", { style: {
                                                            width: 3,
                                                            height: '60%',
                                                            background: 'rgba(255,255,255,0.3)',
                                                            borderRadius: 2,
                                                            transition: 'background 0.2s',
                                                        }, onMouseEnter: (e) => {
                                                            e.currentTarget.style.background =
                                                                resizeConfig?.handleHoverColor || '#3b82f6';
                                                        }, onMouseLeave: (e) => {
                                                            e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                                                        } }) }))] }, column.dataField));
                                    })] }) }), _jsx(TableBody, { className: classNames.body, style: styles.body, children: processedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: visibleColumns.length +
                                        (resolvedRowSelection?.mode === 'checkbox' ? 1 : 0) +
                                        (expandable ? 1 : 0) +
                                        (showRowNumber ? 1 : 0), children: _jsxs(EmptyState, { className: classNames.empty, style: styles.empty, children: [_jsx(EmptyIcon, {}), _jsx("span", { children: emptyText })] }) }) })) : (processedData.map((row, rowIndex) => {
                                const rowKey = getRowKey(row);
                                const rowSelected = isSelected(rowKey);
                                const rowExpanded = isExpanded(rowKey);
                                const checkboxProps = resolvedRowSelection?.getCheckboxProps?.(row);
                                const isExpandable = expandable?.rowExpandable?.(row) ?? true;
                                const rowClass = typeof rowClassName === 'function'
                                    ? rowClassName(row, rowIndex)
                                    : rowClassName;
                                const rowStyles = typeof rowStyle === 'function'
                                    ? rowStyle(row, rowIndex)
                                    : rowStyle;
                                const selectedStyle = rowSelected
                                    ? typeof resolvedRowSelection?.selectedRowStyle ===
                                        'function'
                                        ? resolvedRowSelection.selectedRowStyle(row)
                                        : resolvedRowSelection?.selectedRowStyle
                                    : undefined;
                                // Check if custom selected style has a background color
                                const hasCustomBgColor = rowSelected &&
                                    selectedStyle &&
                                    (selectedStyle.backgroundColor || selectedStyle.background);
                                // Apply non-selectable style ONLY if row is disabled
                                // When disabled: false or not disabled, no styles should be applied
                                const isRowDisabled = !!checkboxProps?.disabled;
                                const disabledStyle = isRowDisabled
                                    ? nonSelectableStyle || {
                                        backgroundColor: '#f3f4f6',
                                        opacity: 0.7,
                                    }
                                    : undefined;
                                return (_jsxs(React.Fragment, { children: [_jsxs(TableRow, { "$selected": rowSelected, "$clickable": !!onRowClick ||
                                                resolvedRowSelection?.mode === 'single' ||
                                                expandable?.expandRowByClick === true, "$disabled": isRowDisabled, "$hasCustomSelectedStyle": !!hasCustomBgColor, "data-custom-selected": hasCustomBgColor ? 'true' : undefined, className: `${classNames.row || ''} ${rowClass || ''} ${rowSelected
                                                ? typeof resolvedRowSelection?.selectedRowClassName ===
                                                    'function'
                                                    ? resolvedRowSelection.selectedRowClassName(row)
                                                    : resolvedRowSelection?.selectedRowClassName || ''
                                                : ''}`, style: {
                                                ...styles.row,
                                                ...rowStyles,
                                                ...selectedStyle,
                                                ...disabledStyle,
                                            }, onClick: (e) => handleRowClick(row, rowIndex, e), onDoubleClick: (e) => {
                                                // Prevent double clicks ONLY on disabled rows
                                                // When disabled: false, allow normal behavior
                                                if (isRowDisabled) {
                                                    return;
                                                }
                                                // Only trigger row-level double click if not handled by a cell
                                                // Cells handle their own double-clicks for editing
                                                onRowDoubleClick?.(row, rowIndex, e);
                                            }, role: "row", "aria-selected": rowSelected, children: [resolvedRowSelection?.mode === 'checkbox' && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, "$disabled": isRowDisabled, children: _jsx(Checkbox, { checked: rowSelected, disabled: checkboxProps?.disabled, onChange: (e) => handleCheckboxChange(row, e), onClick: (e) => e.stopPropagation() }) })), expandable && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, "$disabled": isRowDisabled, children: isExpandable && (_jsx(ExpandButton, { "$expanded": rowExpanded, onClick: (e) => handleExpandClick(row, e), children: expandable.expandIcon ? (expandable.expandIcon({
                                                            expanded: rowExpanded,
                                                            row,
                                                            onExpand: () => toggleExpand(row),
                                                        })) : (_jsx(ExpandIcon, {})) })) })), showRowNumber && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, "$disabled": isRowDisabled, style: {
                                                        width: rowNumberWidth,
                                                        color: '#6b7280',
                                                        fontWeight: 500,
                                                    }, children: rowNumberRender
                                                        ? rowNumberRender(rowIndex + 1, row)
                                                        : rowIndex + 1 + page * pageSize })), renderColumns.map((column, colIndex) => {
                                                    const cellClass = typeof column.classes === 'function'
                                                        ? column.classes(getNestedValue(row, column.dataField), row, rowIndex, colIndex)
                                                        : column.classes;
                                                    const cellStyle = typeof column.style === 'function'
                                                        ? column.style(getNestedValue(row, column.dataField), row, rowIndex, colIndex)
                                                        : column.style;
                                                    // Get resized column style for body cells
                                                    const cellResizeStyle = resizable
                                                        ? getColumnStyle(column, columnWidths, resizable, isResizing)
                                                        : {};
                                                    // Check if column is editable (needed for disabled row handling)
                                                    const editInfo = getCellEditableInfo(column, row, rowIndex, colIndex);
                                                    // Determine if column is effectively editable:
                                                    // - If rowSelection is configured AND row is disabled AND no allowed cells are provided: NOT editable (even if marked as editable)
                                                    // - If rowSelection is configured AND row is disabled AND allowed cells are provided: editable only if in allowed list
                                                    // - Otherwise: editable if marked as editable
                                                    const isRowDisabled = !!checkboxProps?.disabled;
                                                    let isEffectivelyEditable = editInfo.isEditable;
                                                    // Only apply allow list logic if rowSelection is configured and row is disabled
                                                    if (resolvedRowSelection && isRowDisabled) {
                                                        if (!hasAllowedEditingFields) {
                                                            // No allowed cells provided: disable all columns
                                                            isEffectivelyEditable = false;
                                                        }
                                                        else {
                                                            // Allowed cells provided: only those columns are editable
                                                            const isAllowed = isFieldAllowedForDisabledRow(column.dataField);
                                                            isEffectivelyEditable = isAllowed;
                                                        }
                                                    }
                                                    // Check if column is in allowed list (for styling purposes)
                                                    const isInAllowedCells = !!(resolvedRowSelection &&
                                                        isRowDisabled &&
                                                        hasAllowedEditingFields &&
                                                        isFieldAllowedForDisabledRow(column.dataField));
                                                    const cellContent = (() => {
                                                        if (isEffectivelyEditable && editMode !== 'none') {
                                                            // Check for custom editor
                                                            if (editInfo.customEditor) {
                                                                return editInfo.customEditor;
                                                            }
                                                            return (_jsx(EditableCell, { "$editing": editingCell?.row === rowIndex &&
                                                                    editingCell?.field === column.dataField, "$showEditIcon": showEditIcon, children: renderCellContent(row, column, rowIndex, colIndex) }));
                                                        }
                                                        return renderCellContent(row, column, rowIndex, colIndex);
                                                    })();
                                                    return (_jsx(TableCell, { "$align": column.align || 'left', "$compact": compact, "$padding": cellPadding, "$pinned": column.pinned, "$hasCustomClass": !!cellClass, "$disabled": isRowDisabled, "$isEditable": isEffectivelyEditable, "$isInAllowedCells": isInAllowedCells, className: cellClass || classNames.cell, style: {
                                                            ...styles.cell,
                                                            ...cellStyle,
                                                            ...cellResizeStyle,
                                                        }, "data-column": column.dataField, onClick: (e) => handleCellClick(row, rowIndex, column, colIndex, e), onDoubleClick: (e) => {
                                                            e.stopPropagation(); // Prevent row-level double-click from interfering
                                                            handleCellDoubleClick(row, rowIndex, column, colIndex, e);
                                                        }, role: "gridcell", children: _jsx(TableCellContent, { "$hasFormatter": !!column.formatter, children: cellContent }) }, column.dataField));
                                                })] }), expandable && rowExpanded && isExpandable && (_jsx(ExpandedRow, { children: _jsx(ExpandedCell, { colSpan: visibleColumns.length +
                                                    (resolvedRowSelection?.mode === 'checkbox'
                                                        ? 1
                                                        : 0) +
                                                    (expandable ? 1 : 0) +
                                                    (showRowNumber ? 1 : 0), children: expandable.expandedRowRender?.(row, rowIndex, rowExpanded) }) }))] }, rowKey));
                            })) }), showFooter && (_jsx(TableFooter, { className: classNames.footer, style: styles.footer, children: _jsxs(FooterRow, { className: classNames.footerRow, style: styles.footerRow, children: [resolvedRowSelection?.mode === 'checkbox' && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), expandable && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), showRowNumber && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), renderColumns.map((column) => (_jsx(FooterCell, { "$align": column.align || 'left', "$compact": compact, className: classNames.footerCell, style: styles.footerCell, children: typeof column.footer === 'function'
                                            ? column.footer(column, data)
                                            : column.footerFormatter
                                                ? column.footerFormatter(column, data)
                                                : column.footer }, column.dataField)))] }) }))] }) }), renderPagination()] }));
});
Table.displayName = 'Table';
export default Table;
