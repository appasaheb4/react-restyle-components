'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * AG Grid Component
 * A comprehensive, AG Grid-like data table with all enterprise features
 * Reference: https://www.ag-grid.com/react-data-grid/getting-started/
 */
import React, { forwardRef, useImperativeHandle, useMemo, useCallback, useState, useEffect, useRef, } from 'react';
import { GridRoot, GridWrapper, GridToolbar, ToolbarGroup, ToolbarButton, QuickFilter, TableContainer, StyledTable, TableHead, HeaderRow, HeaderCell, HeaderCellContent, HeaderText, SortIndicator, FilterIndicator, ResizeHandle, GroupHeaderRow, GroupHeaderCell, FloatingFilterRow, FloatingFilterCell, TableBody, TableRow, TableCell, CellContent, Checkbox, CheckboxCell, ExpandButton, DragHandle, CellEditor, PaginationBar, PaginationInfo, PaginationControls, PageButton, PageSizeSelect, StatusBar, StatusItem, LoadingOverlay, Spinner, NoRowsOverlay, ContextMenu, ContextMenuItem, ContextMenuDivider, MobileCardContainer, MobileCard, MobileCardHeader, MobileCardRow, MobileCardLabel, MobileCardValue, SelectionBar, SelectionActions, getTheme, 
// New Side Panel Components
SidePanel, SidePanelTabs, SidePanelTab, SidePanelContent, SidePanelSearch, SidePanelSection, SidePanelSectionHeader, SidePanelColumnItem, SidePanelDragHandle, SidePanelGroupLabel, 
// Row Groups
RowGroupsZone, RowGroupsLabel, RowGroupChip, 
// Values Panel
ValuesPanel, ValueItem, ValueItemLabel, ValueItemRemove, 
// Pivot Mode
PivotModeToggle, PivotModeLabel, ToggleSwitch, 
// Column Menu
HeaderMenuButton, ColumnMenuPopup, ColumnMenuSection, ColumnMenuItem, 
// Set Filter
SetFilterContainer, SetFilterHeader, SetFilterSearch, SetFilterList, SetFilterItem, SetFilterActions, SetFilterButton, 
// Filter Panel
FilterPanelColumn, FilterPanelHeader, FilterPanelContent, 
// Layout
GridLayout, GridMainArea, } from './elements';
import { useSorting, useFiltering, usePagination, useRowSelection, useRowExpansion, useColumnState, useCellEditing, useContextMenu, useResponsive, useClipboard, getNestedValue, createRowNode, exportToCsv, useAggregationPanel, useRowGroupingPanel, useColumnMenu, useSidePanel, usePivotMode, } from './hooks';
// ============================================================================
// Icons
// ============================================================================
const SearchIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "M21 21l-4.35-4.35", strokeLinecap: "round" })] }));
const SortAscIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M7 14l5-5 5 5H7z" }) }));
const SortDescIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M7 10l5 5 5-5H7z" }) }));
const FilterIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronRightIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M9 18l6-6-6-6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronLeftIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M15 18l-6-6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronsLeftIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M11 17l-5-5 5-5M18 17l-5-5 5-5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronsRightIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M13 7l5 5-5 5M6 7l5 5-5 5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const DownloadIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ColumnsIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "3", y: "3", width: "7", height: "18", rx: "1" }), _jsx("rect", { x: "14", y: "3", width: "7", height: "18", rx: "1" })] }));
const RefreshIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M23 4v6h-6M1 20v-6h6", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const MenuIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "1" }), _jsx("circle", { cx: "12", cy: "5", r: "1" }), _jsx("circle", { cx: "12", cy: "19", r: "1" })] }));
const GripIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "currentColor", opacity: "0.5", children: [_jsx("circle", { cx: "9", cy: "5", r: "1.5" }), _jsx("circle", { cx: "9", cy: "12", r: "1.5" }), _jsx("circle", { cx: "9", cy: "19", r: "1.5" }), _jsx("circle", { cx: "15", cy: "5", r: "1.5" }), _jsx("circle", { cx: "15", cy: "12", r: "1.5" }), _jsx("circle", { cx: "15", cy: "19", r: "1.5" })] }));
const EmptyIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), _jsx("path", { d: "M3 9h18M9 3v18", strokeLinecap: "round" })] }));
const CloseIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const PinIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M12 2v10M12 22v-6M4 12h16", strokeLinecap: "round" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const PinLeftIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 4v16M8 12h12M15 7l5 5-5 5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const PinRightIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M20 4v16M4 12h12M9 7l-5 5 5 5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const NoPinIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M3 3l18 18M12 2v10M12 22v-6", strokeLinecap: "round" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const GroupIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 6h16M4 12h16M4 18h16", strokeLinecap: "round" }) }));
const AutosizeIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M4 12h16M9 7l-5 5 5 5M15 7l5 5-5 5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ResetIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M3 3v5h5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const SigmaIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M18 6H6l6 6-6 6h12", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const EyeIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const EyeOffIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" }), _jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })] }));
const CheckIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const PanelRightIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), _jsx("path", { d: "M15 3v18", strokeLinecap: "round" })] }));
// ============================================================================
// Helper Functions
// ============================================================================
function isColGroupDef(col) {
    return 'children' in col;
}
function flattenColumnDefs(columns) {
    const result = [];
    columns.forEach((col) => {
        if (isColGroupDef(col)) {
            result.push(...flattenColumnDefs(col.children));
        }
        else {
            result.push(col);
        }
    });
    return result;
}
// ============================================================================
// Main Component
// ============================================================================
function AgGridInner(props, ref) {
    const { 
    // Data
    rowData, columnDefs, defaultColDef, getRowId = (params) => String(params.data._id ?? params.data.id ?? Math.random()), 
    // Theme
    theme = 'quartz', customTheme, rowHeight = 42, headerHeight = 42, floatingFiltersHeight = 32, domLayout = 'normal', 
    // Selection
    rowSelection, rowMultiSelectWithClick = false, suppressRowClickSelection = false, isRowSelectable, 
    // Sorting
    sortable = true, suppressMultiSort = false, alwaysMultiSort = false, 
    // Filtering
    filter = true, floatingFilter = false, quickFilterText: controlledQuickFilter, 
    // Pagination
    pagination = false, paginationPageSize = 10, paginationPageSizeSelector = [10, 25, 50, 100], suppressPaginationPanel = false, 
    // Editing
    singleClickEdit = false, stopEditingWhenCellsLoseFocus = true, undoRedoCellEditing = false, 
    // Row Grouping
    groupDefaultExpanded = 0, 
    // Master/Detail
    masterDetail = false, detailCellRenderer, isRowMaster, 
    // Row Dragging
    rowDragManaged = false, 
    // Overlays
    loadingOverlayComponent, noRowsOverlayComponent, 
    // Status Bar
    statusBar, 
    // Clipboard
    enableClipboard = true, 
    // Export
    suppressCsvExport = false, 
    // Context Menu
    getContextMenuItems, suppressContextMenu = false, 
    // Tooltips
    enableBrowserTooltips = false, 
    // Responsive
    responsive = true, mobileBreakpoint = 768, mobileCardRenderer, 
    // Misc
    animateRows = true, enableRtl = false, 
    // Events
    onGridReady, onCellClicked, onCellDoubleClicked, onCellValueChanged, onRowClicked, onRowDoubleClicked, onRowSelected, onSelectionChanged, onSortChanged, onFilterChanged, onPaginationChanged, 
    // Custom props
    containerStyle, containerClassName, context, gridId, } = props;
    // ============================================================================
    // Theme
    // ============================================================================
    const gridTheme = useMemo(() => getTheme(theme, customTheme), [theme, customTheme]);
    // ============================================================================
    // Flatten and process columns
    // ============================================================================
    const flatColumns = useMemo(() => {
        const flat = flattenColumnDefs(columnDefs);
        return flat.map((col) => ({
            ...defaultColDef,
            ...col,
            colId: col.colId || col.field || `col-${Math.random()}`,
        }));
    }, [columnDefs, defaultColDef]);
    // ============================================================================
    // Column State (visibility, width, order, pinning)
    // ============================================================================
    const { columnState, processedColumns, visibleColumns, setColumnVisible, setColumnWidth, setColumnPinned, moveColumn, resetColumnState, } = useColumnState(flatColumns, gridId);
    // ============================================================================
    // Sorting
    // ============================================================================
    const { sortModel, handleSort, getSortForColumn, clearSort, sortData, } = useSorting([], !suppressMultiSort || alwaysMultiSort);
    // ============================================================================
    // Filtering
    // ============================================================================
    const { filterModel, quickFilterText, setQuickFilterText, setColumnFilter, clearFilters, isFilterActive, hasActiveFilters, filterData, } = useFiltering();
    // Sync controlled quick filter
    useEffect(() => {
        if (controlledQuickFilter !== undefined) {
            setQuickFilterText(controlledQuickFilter);
        }
    }, [controlledQuickFilter, setQuickFilterText]);
    // ============================================================================
    // Set Filter State (for each column) - moved up for processedData dependency
    // ============================================================================
    const [setFilterStates, setSetFilterStates] = useState({});
    // ============================================================================
    // Processed Data (sort + filter + set filter)
    // ============================================================================
    const processedData = useMemo(() => {
        let data = [...rowData];
        // Apply quick filter and column text filters
        data = filterData(data, visibleColumns);
        // Apply set filters (filter by selected values)
        Object.entries(setFilterStates).forEach(([field, selectedValues]) => {
            // If no values selected or all values selected, skip filtering
            const allValues = new Set();
            rowData.forEach((row) => {
                const value = getNestedValue(row, field);
                if (value != null) {
                    allValues.add(String(value));
                }
            });
            // Only apply filter if some values are deselected
            if (selectedValues.size > 0 && selectedValues.size < allValues.size) {
                data = data.filter((row) => {
                    const value = getNestedValue(row, field);
                    if (value == null)
                        return false;
                    return selectedValues.has(String(value));
                });
            }
            else if (selectedValues.size === 0) {
                // No values selected means filter out all
                data = [];
            }
        });
        // Apply sorting
        data = sortData(data, visibleColumns);
        return data;
    }, [rowData, filterData, sortData, visibleColumns, setFilterStates]);
    // ============================================================================
    // Pagination
    // ============================================================================
    const { currentPage, pageSize, totalPages, startRow, endRow, goToPage, goToNextPage, goToPreviousPage, goToFirstPage, goToLastPage, changePageSize, paginateData, } = usePagination(processedData.length, paginationPageSize);
    const displayData = useMemo(() => {
        if (!pagination)
            return processedData;
        return paginateData(processedData);
    }, [processedData, pagination, paginateData]);
    // ============================================================================
    // Selection
    // ============================================================================
    const { selectedIds, isSelected, toggleRow, selectAll, deselectAll, isAllSelected, isIndeterminate, selectedRows, } = useRowSelection(displayData, (row) => getRowId({ data: row }), rowSelection || 'multiple', isRowSelectable);
    // ============================================================================
    // Expansion (for master/detail)
    // ============================================================================
    const { isExpanded, toggleExpand, expandAll, collapseAll, } = useRowExpansion((row) => getRowId({ data: row }), groupDefaultExpanded);
    // ============================================================================
    // Cell Editing
    // ============================================================================
    const { editingCell, startEditing, stopEditing, isEditing, } = useCellEditing();
    const [editValue, setEditValue] = useState(null);
    // ============================================================================
    // Context Menu
    // ============================================================================
    const { contextMenu, showContextMenu, hideContextMenu } = useContextMenu();
    // ============================================================================
    // Clipboard
    // ============================================================================
    const { copyToClipboard } = useClipboard();
    // ============================================================================
    // Responsive
    // ============================================================================
    const { isMobile } = useResponsive(mobileBreakpoint);
    // ============================================================================
    // Side Panel
    // ============================================================================
    const { isOpen: isSidePanelOpen, activeTab: sidePanelTab, toggle: toggleSidePanel, switchTab: switchSidePanelTab, setIsOpen: setSidePanelOpen, } = useSidePanel(props.sideBar !== false, 'columns');
    // ============================================================================
    // Column Menu
    // ============================================================================
    const { menuState: columnMenuState, showColumnMenu, hideColumnMenu, filterDropdownState, showFilterDropdown, hideFilterDropdown, } = useColumnMenu();
    // ============================================================================
    // Row Grouping Panel
    // ============================================================================
    const { rowGroupColumns, addRowGroupColumn, removeRowGroupColumn, clearRowGroupColumns, groupableColumns, groupedColumnsInfo, } = useRowGroupingPanel(flatColumns);
    // ============================================================================
    // Aggregation Panel
    // ============================================================================
    const { valueColumns, addValueColumn, removeValueColumn, clearValueColumns, aggregatedValues, } = useAggregationPanel(processedData);
    // ============================================================================
    // Pivot Mode
    // ============================================================================
    const { isPivotMode, togglePivotMode, } = usePivotMode();
    // ============================================================================
    // Expanded Filter Panels State
    // ============================================================================
    const [expandedFilterPanels, setExpandedFilterPanels] = useState(new Set());
    // ============================================================================
    // Column Drag State (for reordering in side panel)
    // ============================================================================
    const [draggedColumnId, setDraggedColumnId] = useState(null);
    const [dragOverColumnId, setDragOverColumnId] = useState(null);
    const handleColumnDragStart = useCallback((e, colId) => {
        setDraggedColumnId(colId);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', colId);
    }, []);
    const handleColumnDragOver = useCallback((e, colId) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (colId !== draggedColumnId) {
            setDragOverColumnId(colId);
        }
    }, [draggedColumnId]);
    const handleColumnDragLeave = useCallback(() => {
        setDragOverColumnId(null);
    }, []);
    const handleColumnDrop = useCallback((e, targetColId) => {
        e.preventDefault();
        if (draggedColumnId && draggedColumnId !== targetColId) {
            // Find indices in columnState
            const fromIndex = columnState.findIndex((s) => s.colId === draggedColumnId);
            const toIndex = columnState.findIndex((s) => s.colId === targetColId);
            if (fromIndex !== -1 && toIndex !== -1) {
                moveColumn(draggedColumnId, toIndex);
            }
        }
        setDraggedColumnId(null);
        setDragOverColumnId(null);
    }, [draggedColumnId, columnState, moveColumn]);
    const handleColumnDragEnd = useCallback(() => {
        setDraggedColumnId(null);
        setDragOverColumnId(null);
    }, []);
    // Extract unique values for a field
    const getUniqueValuesForField = useCallback((field) => {
        const values = new Set();
        rowData.forEach((row) => {
            const value = getNestedValue(row, field);
            if (value != null) {
                values.add(String(value));
            }
        });
        return Array.from(values).sort();
    }, [rowData]);
    // Toggle filter panel expansion
    const toggleFilterPanel = useCallback((field) => {
        setExpandedFilterPanels((prev) => {
            const next = new Set(prev);
            if (next.has(field)) {
                next.delete(field);
            }
            else {
                next.add(field);
            }
            return next;
        });
    }, []);
    // Toggle value in set filter
    const toggleSetFilterValue = useCallback((field, value) => {
        setSetFilterStates((prev) => {
            const currentValues = prev[field] || new Set(getUniqueValuesForField(field));
            const next = new Set(currentValues);
            if (next.has(value)) {
                next.delete(value);
            }
            else {
                next.add(value);
            }
            return { ...prev, [field]: next };
        });
    }, [getUniqueValuesForField]);
    // Select/deselect all in set filter
    const toggleSetFilterSelectAll = useCallback((field) => {
        setSetFilterStates((prev) => {
            const allValues = getUniqueValuesForField(field);
            const currentValues = prev[field];
            const isAllSelected = !currentValues || currentValues.size === allValues.length;
            if (isAllSelected) {
                return { ...prev, [field]: new Set() };
            }
            else {
                return { ...prev, [field]: new Set(allValues) };
            }
        });
    }, [getUniqueValuesForField]);
    // Check if set filter has active filter
    const isSetFilterActive = useCallback((field) => {
        const state = setFilterStates[field];
        if (!state)
            return false;
        const allValues = getUniqueValuesForField(field);
        return state.size > 0 && state.size < allValues.length;
    }, [setFilterStates, getUniqueValuesForField]);
    // Check if any set filter is active
    const hasActiveSetFilters = useMemo(() => {
        return Object.entries(setFilterStates).some(([field, selectedValues]) => {
            const allValues = getUniqueValuesForField(field);
            return selectedValues.size > 0 && selectedValues.size < allValues.length;
        });
    }, [setFilterStates, getUniqueValuesForField]);
    // Clear all set filters
    const clearSetFilters = useCallback(() => {
        setSetFilterStates({});
    }, []);
    // Clear all filters (including set filters)
    const clearAllFilters = useCallback(() => {
        clearFilters();
        clearSetFilters();
    }, [clearFilters, clearSetFilters]);
    // ============================================================================
    // Refs
    // ============================================================================
    const containerRef = useRef(null);
    const tableRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    // ============================================================================
    // Column Resize State
    // ============================================================================
    const [resizing, setResizing] = useState(null);
    const handleResizeStart = useCallback((e, colId, currentWidth) => {
        e.preventDefault();
        setResizing({ colId, startX: e.clientX, startWidth: currentWidth });
    }, []);
    useEffect(() => {
        if (!resizing)
            return;
        const handleMouseMove = (e) => {
            const delta = e.clientX - resizing.startX;
            const newWidth = Math.max(50, resizing.startWidth + delta);
            setColumnWidth(resizing.colId, newWidth);
        };
        const handleMouseUp = () => {
            setResizing(null);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [resizing, setColumnWidth]);
    // ============================================================================
    // Grid API
    // ============================================================================
    const gridApi = useMemo(() => ({
        // Data
        setRowData: () => { },
        getRowData: () => rowData,
        applyTransaction: () => { },
        applyTransactionAsync: () => { },
        refreshCells: () => { },
        redrawRows: () => { },
        // Row Nodes
        getRowNode: (id) => displayData.find((row) => getRowId({ data: row }) === id),
        forEachNode: (callback) => displayData.forEach((row, i) => callback(createRowNode(row, i), i)),
        forEachLeafNode: (callback) => displayData.forEach((row, i) => callback(createRowNode(row, i), i)),
        getDisplayedRowCount: () => displayData.length,
        getDisplayedRowAtIndex: (index) => createRowNode(displayData[index], index),
        getFirstDisplayedRow: () => startRow,
        getLastDisplayedRow: () => endRow,
        // Selection
        selectAll,
        deselectAll,
        selectAllFiltered: selectAll,
        deselectAllFiltered: deselectAll,
        getSelectedRows: () => selectedRows,
        getSelectedNodes: () => selectedRows.map((row, i) => createRowNode(row, i)),
        // Sorting
        getSortModel: () => sortModel,
        setSortModel: () => { },
        // Filtering
        setFilterModel: () => { },
        getFilterModel: () => filterModel,
        setQuickFilter: setQuickFilterText,
        isQuickFilterPresent: () => quickFilterText.length > 0,
        isAnyFilterPresent: () => hasActiveFilters,
        destroyFilter: () => { },
        getFilterInstance: () => null,
        onFilterChanged: () => { },
        // Pagination
        paginationGetPageSize: () => pageSize,
        paginationSetPageSize: changePageSize,
        paginationGetCurrentPage: () => currentPage,
        paginationGetTotalPages: () => totalPages,
        paginationGetRowCount: () => processedData.length,
        paginationGoToPage: goToPage,
        paginationGoToNextPage: goToNextPage,
        paginationGoToPreviousPage: goToPreviousPage,
        paginationGoToFirstPage: goToFirstPage,
        paginationGoToLastPage: goToLastPage,
        // Editing
        startEditingCell: ({ rowIndex, colKey }) => {
            const row = displayData[rowIndex];
            if (row) {
                const value = getNestedValue(row, colKey);
                startEditing(getRowId({ data: row }), colKey, rowIndex, value);
            }
        },
        stopEditing: (cancel) => stopEditing(cancel || false),
        getEditingCells: () => editingCell ? [{ rowIndex: editingCell.rowIndex, column: {} }] : [],
        // Export
        exportDataAsCsv: (params) => {
            exportToCsv(selectedRows.length > 0 && params?.onlySelected ? selectedRows : processedData, visibleColumns, params?.fileName || 'export.csv');
        },
        getDataAsCsv: () => '',
        exportDataAsExcel: () => { },
        // Clipboard
        copySelectedRangeToClipboard: (includeHeaders) => copyToClipboard(selectedRows, visibleColumns, includeHeaders),
        copySelectedRowsToClipboard: (includeHeaders) => copyToClipboard(selectedRows, visibleColumns, includeHeaders),
        pasteFromClipboard: () => { },
        // Scrolling
        ensureIndexVisible: () => { },
        ensureNodeVisible: () => { },
        ensureColumnVisible: () => { },
        getHorizontalScrollPosition: () => containerRef.current?.scrollLeft || 0,
        getVerticalScrollPosition: () => containerRef.current?.scrollTop || 0,
        // Row Height
        resetRowHeights: () => { },
        onRowHeightChanged: () => { },
        // Display
        sizeColumnsToFit: () => { },
        autoSizeAllColumns: () => { },
        autoSizeColumn: () => { },
        // Grouping
        expandAll: () => expandAll(displayData),
        collapseAll,
        setRowGroupColumns: () => { },
        getRowGroupColumns: () => [],
        // Events
        addEventListener: () => { },
        removeEventListener: () => { },
        // Misc
        destroy: () => { },
        getContext: () => context,
        setContext: () => { },
        isDestroyed: () => false,
        refreshHeader: () => { },
        setHeaderHeight: () => { },
        showLoadingOverlay: () => setIsLoading(true),
        showNoRowsOverlay: () => { },
        hideOverlay: () => setIsLoading(false),
        getGridElement: () => containerRef.current,
    }), [
        rowData, displayData, getRowId, startRow, endRow, selectAll, deselectAll, selectedRows,
        sortModel, filterModel, setQuickFilterText, quickFilterText, hasActiveFilters,
        pageSize, changePageSize, currentPage, totalPages, processedData, goToPage,
        goToNextPage, goToPreviousPage, goToFirstPage, goToLastPage, startEditing, stopEditing,
        editingCell, visibleColumns, copyToClipboard, expandAll, collapseAll, context,
    ]);
    // ============================================================================
    // Column API
    // ============================================================================
    const columnApi = useMemo(() => ({
        getAllColumns: () => processedColumns.map((col, i) => ({ ...col, colId: col.colId, colDef: col, sort: null, visible: !col.hide, pinned: col.pinned || null, width: col.width || 100, left: 0, getColDef: () => col, getColId: () => col.colId, isVisible: () => !col.hide, isPinned: () => !!col.pinned, getSort: () => getSortForColumn(col.colId).sort, setSort: () => { } })),
        getAllGridColumns: () => [],
        getVisibleColumns: () => visibleColumns.map((col) => ({ colId: col.colId, colDef: col })),
        getColumn: (colId) => processedColumns.find((c) => c.colId === colId),
        setColumnVisible,
        setColumnsVisible: (colIds, visible) => colIds.forEach((id) => setColumnVisible(String(id), visible)),
        setColumnPinned,
        setColumnsPinned: (colIds, pinned) => colIds.forEach((id) => setColumnPinned(String(id), pinned)),
        moveColumn,
        moveColumns: (colIds, toIndex) => colIds.forEach((id, i) => moveColumn(String(id), toIndex + i)),
        getColumnState: () => columnState,
        applyColumnState: () => true,
        resetColumnState,
        setColumnWidth,
        setColumnsWidth: (colIds, width) => colIds.forEach((id) => setColumnWidth(String(id), width)),
        autoSizeColumn: () => { },
        autoSizeColumns: () => { },
        sizeColumnsToFit: () => { },
        isPinningLeft: () => visibleColumns.some((c) => c.pinned === 'left'),
        isPinningRight: () => visibleColumns.some((c) => c.pinned === 'right'),
        getDisplayNameForColumn: (column) => column.colDef.headerName || column.colDef.field || '',
    }), [processedColumns, visibleColumns, columnState, setColumnVisible, setColumnPinned, moveColumn, resetColumnState, setColumnWidth, getSortForColumn]);
    // ============================================================================
    // Expose API via ref
    // ============================================================================
    useImperativeHandle(ref, () => ({ api: gridApi, columnApi }), [gridApi, columnApi]);
    // ============================================================================
    // Grid Ready Event
    // ============================================================================
    useEffect(() => {
        onGridReady?.({
            type: 'gridReady',
            api: gridApi,
            columnApi,
            context,
        });
    }, []);
    // ============================================================================
    // Event Handlers
    // ============================================================================
    const handleCellClick = useCallback((e, row, rowIndex, col, colIndex) => {
        const value = col.field ? getNestedValue(row, col.field) : null;
        const node = createRowNode(row, rowIndex);
        onCellClicked?.({
            type: 'cellClicked',
            api: gridApi,
            columnApi,
            context,
            data: row,
            node,
            column: { colId: col.colId, colDef: col },
            colDef: col,
            value,
            rowIndex,
            event: e.nativeEvent,
        });
        // Single click edit
        if (singleClickEdit && col.editable) {
            startEditing(getRowId({ data: row }), col.colId, rowIndex, value);
            setEditValue(value);
        }
        // Row selection on click
        if (rowSelection && !suppressRowClickSelection && !col.checkboxSelection) {
            toggleRow(row, rowIndex);
            onRowSelected?.({
                type: 'rowSelected',
                api: gridApi,
                columnApi,
                context,
                data: row,
                node,
                rowIndex,
            });
        }
    }, [gridApi, columnApi, context, onCellClicked, singleClickEdit, rowSelection, suppressRowClickSelection, toggleRow, onRowSelected, startEditing, getRowId]);
    const handleCellDoubleClick = useCallback((e, row, rowIndex, col, colIndex) => {
        const value = col.field ? getNestedValue(row, col.field) : null;
        const node = createRowNode(row, rowIndex);
        onCellDoubleClicked?.({
            type: 'cellDoubleClicked',
            api: gridApi,
            columnApi,
            context,
            data: row,
            node,
            column: { colId: col.colId, colDef: col },
            colDef: col,
            value,
            rowIndex,
            event: e.nativeEvent,
        });
        // Double click edit
        if (!singleClickEdit && col.editable) {
            startEditing(getRowId({ data: row }), col.colId, rowIndex, value);
            setEditValue(value);
        }
    }, [gridApi, columnApi, context, onCellDoubleClicked, singleClickEdit, startEditing, getRowId]);
    const handleRowClick = useCallback((e, row, rowIndex) => {
        const node = createRowNode(row, rowIndex);
        onRowClicked?.({
            type: 'rowClicked',
            api: gridApi,
            columnApi,
            context,
            data: row,
            node,
            rowIndex,
            event: e.nativeEvent,
        });
    }, [gridApi, columnApi, context, onRowClicked]);
    const handleHeaderClick = useCallback((col, e) => {
        if (col.sortable !== false && sortable) {
            handleSort(col.colId, e.shiftKey || alwaysMultiSort);
            onSortChanged?.({
                type: 'sortChanged',
                api: gridApi,
                columnApi,
                context,
            });
        }
    }, [sortable, handleSort, alwaysMultiSort, onSortChanged, gridApi, columnApi, context]);
    const handleContextMenu = useCallback((e, row, rowIndex, col) => {
        if (suppressContextMenu)
            return;
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, { row, rowIndex, col });
    }, [suppressContextMenu, showContextMenu]);
    const handleEditComplete = useCallback((newValue) => {
        if (editingCell) {
            onCellValueChanged?.({
                type: 'cellValueChanged',
                api: gridApi,
                columnApi,
                context,
                data: {},
                node: createRowNode({}, editingCell.rowIndex),
                column: {},
                colDef: {},
                oldValue: editingCell.value,
                newValue,
                rowIndex: editingCell.rowIndex,
            });
        }
        stopEditing(false, newValue);
        setEditValue(null);
    }, [editingCell, onCellValueChanged, gridApi, columnApi, context, stopEditing]);
    // ============================================================================
    // Keyboard Handlers
    // ============================================================================
    const handleKeyDown = useCallback((e) => {
        if (editingCell) {
            if (e.key === 'Escape') {
                stopEditing(true);
                setEditValue(null);
            }
            else if (e.key === 'Enter') {
                handleEditComplete(editValue);
            }
        }
        // Clipboard shortcuts
        if (enableClipboard && (e.ctrlKey || e.metaKey)) {
            if (e.key === 'c') {
                copyToClipboard(selectedRows, visibleColumns, true);
            }
        }
    }, [editingCell, stopEditing, handleEditComplete, editValue, enableClipboard, copyToClipboard, selectedRows, visibleColumns]);
    // ============================================================================
    // Render Column Groups (if any)
    // ============================================================================
    const hasColumnGroups = columnDefs.some(isColGroupDef);
    const renderColumnGroups = () => {
        if (!hasColumnGroups)
            return null;
        return (_jsx(GroupHeaderRow, { "$theme": gridTheme, children: columnDefs.map((col, i) => {
                if (isColGroupDef(col)) {
                    return (_jsx(GroupHeaderCell, { "$theme": gridTheme, "$colSpan": flattenColumnDefs(col.children).length, colSpan: flattenColumnDefs(col.children).length, children: col.headerName }, col.groupId || i));
                }
                return _jsx(GroupHeaderCell, { "$theme": gridTheme, "$colSpan": 1 }, col.field || i);
            }) }));
    };
    // ============================================================================
    // Render Header
    // ============================================================================
    const renderHeader = () => (_jsxs(HeaderRow, { "$theme": gridTheme, "$height": headerHeight, children: [rowSelection && (_jsx(HeaderCell, { "$theme": gridTheme, "$width": 40, "$align": "center", children: _jsx(CheckboxCell, { children: _jsx(Checkbox, { type: "checkbox", "$theme": gridTheme, checked: isAllSelected, ref: (el) => el && (el.indeterminate = isIndeterminate), onChange: (e) => {
                            if (e.target.checked) {
                                selectAll();
                            }
                            else {
                                deselectAll();
                            }
                            onSelectionChanged?.({
                                type: 'selectionChanged',
                                api: gridApi,
                                columnApi,
                                context,
                            });
                        } }) }) })), rowDragManaged && (_jsx(HeaderCell, { "$theme": gridTheme, "$width": 40, "$align": "center" })), masterDetail && (_jsx(HeaderCell, { "$theme": gridTheme, "$width": 40, "$align": "center" })), visibleColumns.map((col, colIndex) => {
                const colId = col.colId;
                const { sort: sortDir } = getSortForColumn(colId);
                const state = columnState.find((s) => s.colId === colId);
                const width = state?.width || col.width;
                return (_jsxs(HeaderCell, { "$theme": gridTheme, "$align": col.headerAlign || col.align, "$sortable": col.sortable !== false && sortable, "$sorted": !!sortDir, "$resizable": col.resizable !== false, "$pinned": col.pinned, "$width": width, "$minWidth": col.minWidth, "$maxWidth": col.maxWidth, onClick: (e) => handleHeaderClick(col, e), onMouseEnter: (e) => {
                        const target = e.currentTarget.querySelector('[data-menu-button]');
                        if (target)
                            target.style.opacity = '1';
                    }, onMouseLeave: (e) => {
                        const target = e.currentTarget.querySelector('[data-menu-button]');
                        if (target && columnMenuState.colId !== colId)
                            target.style.opacity = '0';
                    }, children: [_jsxs(HeaderCellContent, { children: [_jsx(HeaderText, { children: col.headerName || col.field }), col.sortable !== false && sortable && (_jsx(SortIndicator, { "$direction": sortDir, "$active": !!sortDir, children: sortDir === 'desc' ? _jsx(SortDescIcon, {}) : _jsx(SortAscIcon, {}) })), col.filter && (_jsx(FilterIndicator, { "$active": isFilterActive(col.field || '') || isSetFilterActive(col.field || ''), "$theme": gridTheme, onClick: (e) => {
                                        e.stopPropagation();
                                        const rect = e.target.getBoundingClientRect();
                                        showFilterDropdown(colId, rect.left, rect.bottom + 4);
                                    }, children: _jsx(FilterIcon, {}) })), !col.suppressMenu && (_jsx(HeaderMenuButton, { "data-menu-button": true, "$theme": gridTheme, "$active": columnMenuState.visible && columnMenuState.colId === colId, onClick: (e) => {
                                        e.stopPropagation();
                                        const rect = e.target.getBoundingClientRect();
                                        if (columnMenuState.visible && columnMenuState.colId === colId) {
                                            hideColumnMenu();
                                        }
                                        else {
                                            showColumnMenu(colId, rect.left, rect.bottom + 4);
                                        }
                                    }, children: _jsx(MenuIcon, {}) }))] }), col.resizable !== false && (_jsx(ResizeHandle, { "$theme": gridTheme, "$resizing": resizing?.colId === colId, onMouseDown: (e) => handleResizeStart(e, colId, width || 100) }))] }, colId));
            })] }));
    // ============================================================================
    // Render Floating Filters
    // ============================================================================
    const renderFloatingFilters = () => {
        if (!floatingFilter)
            return null;
        return (_jsxs(FloatingFilterRow, { "$theme": gridTheme, "$height": floatingFiltersHeight, children: [rowSelection && _jsx(FloatingFilterCell, { "$theme": gridTheme }), rowDragManaged && _jsx(FloatingFilterCell, { "$theme": gridTheme }), masterDetail && _jsx(FloatingFilterCell, { "$theme": gridTheme }), visibleColumns.map((col) => (_jsx(FloatingFilterCell, { "$theme": gridTheme, children: col.filter && (_jsx("input", { type: "text", placeholder: `Filter ${col.headerName || col.field}...`, onChange: (e) => {
                            setColumnFilter(col.field || '', {
                                filterType: 'text',
                                filter: e.target.value,
                            });
                            onFilterChanged?.({
                                type: 'filterChanged',
                                api: gridApi,
                                columnApi,
                                context,
                            });
                        } })) }, col.colId)))] }));
    };
    // ============================================================================
    // Render Cell
    // ============================================================================
    const renderCell = (row, rowIndex, col, colIndex) => {
        const colId = col.colId;
        const rowId = getRowId({ data: row });
        const value = col.field ? getNestedValue(row, col.field) : null;
        const isEditingThis = isEditing(rowId, colId);
        const state = columnState.find((s) => s.colId === colId);
        const width = state?.width || col.width;
        // Editing mode
        if (isEditingThis) {
            return (_jsx(TableCell, { "$theme": gridTheme, "$editing": true, "$align": col.align, "$width": width, children: _jsx(CellEditor, { "$theme": gridTheme, children: _jsx("input", { type: col.cellEditor === 'agNumberCellEditor' ? 'number' : 'text', value: editValue ?? '', onChange: (e) => setEditValue(e.target.value), onBlur: () => stopEditingWhenCellsLoseFocus && handleEditComplete(editValue), onKeyDown: (e) => {
                            if (e.key === 'Enter')
                                handleEditComplete(editValue);
                            if (e.key === 'Escape') {
                                stopEditing(true);
                                setEditValue(null);
                            }
                        }, autoFocus: true }) }) }, colId));
        }
        // Custom cell renderer
        if (col.cellRenderer) {
            const CellRenderer = col.cellRenderer;
            const params = {
                value,
                data: row,
                node: createRowNode(row, rowIndex, rowId),
                rowIndex,
                colDef: col,
                column: { colId, colDef: col },
                api: gridApi,
                columnApi,
                context,
                refreshCell: () => { },
                eGridCell: null,
                getValue: () => value,
                setValue: () => { },
            };
            return (_jsx(TableCell, { "$theme": gridTheme, "$align": col.align, "$pinned": col.pinned, "$width": width, onClick: (e) => handleCellClick(e, row, rowIndex, col, colIndex), onDoubleClick: (e) => handleCellDoubleClick(e, row, rowIndex, col, colIndex), onContextMenu: (e) => handleContextMenu(e, row, rowIndex, col), children: _jsx(CellContent, { "$wrapText": col.wrapText, children: _jsx(CellRenderer, { ...params }) }) }, colId));
        }
        // Value formatter
        let displayValue = value;
        if (col.valueFormatter) {
            displayValue = col.valueFormatter({
                value,
                data: row,
                node: createRowNode(row, rowIndex, rowId),
                colDef: col,
                column: { colId, colDef: col },
                api: gridApi,
                columnApi,
                context,
            });
        }
        return (_jsx(TableCell, { "$theme": gridTheme, "$align": col.align, "$pinned": col.pinned, "$width": width, title: enableBrowserTooltips ? String(displayValue ?? '') : undefined, onClick: (e) => handleCellClick(e, row, rowIndex, col, colIndex), onDoubleClick: (e) => handleCellDoubleClick(e, row, rowIndex, col, colIndex), onContextMenu: (e) => handleContextMenu(e, row, rowIndex, col), children: _jsx(CellContent, { "$wrapText": col.wrapText, children: displayValue ?? '' }) }, colId));
    };
    // ============================================================================
    // Render Row
    // ============================================================================
    const renderRow = (row, rowIndex) => {
        const rowId = getRowId({ data: row });
        const selected = isSelected(rowId);
        const expanded = isExpanded(rowId);
        const isMaster = masterDetail && (isRowMaster?.(row) ?? true);
        return (_jsxs(React.Fragment, { children: [_jsxs(TableRow, { "$theme": gridTheme, "$selected": selected, "$striped": true, "$even": rowIndex % 2 === 0, "$height": rowHeight, "$animate": animateRows, onClick: (e) => handleRowClick(e, row, rowIndex), children: [rowSelection && (_jsx(TableCell, { "$theme": gridTheme, "$align": "center", "$width": 40, children: _jsx(CheckboxCell, { children: _jsx(Checkbox, { type: "checkbox", "$theme": gridTheme, checked: selected, onChange: () => {
                                        toggleRow(row, rowIndex);
                                        onSelectionChanged?.({
                                            type: 'selectionChanged',
                                            api: gridApi,
                                            columnApi,
                                            context,
                                        });
                                    }, onClick: (e) => e.stopPropagation() }) }) })), rowDragManaged && (_jsx(TableCell, { "$theme": gridTheme, "$align": "center", "$width": 40, children: _jsx(DragHandle, { "$theme": gridTheme, children: _jsx(GripIcon, {}) }) })), masterDetail && (_jsx(TableCell, { "$theme": gridTheme, "$align": "center", "$width": 40, children: isMaster && (_jsx(ExpandButton, { "$theme": gridTheme, "$expanded": expanded, onClick: (e) => {
                                    e.stopPropagation();
                                    toggleExpand(row);
                                }, children: _jsx(ChevronRightIcon, {}) })) })), visibleColumns.map((col, colIndex) => renderCell(row, rowIndex, col, colIndex))] }), masterDetail && isMaster && expanded && detailCellRenderer && (_jsx(TableRow, { "$theme": gridTheme, children: _jsx(TableCell, { "$theme": gridTheme, colSpan: visibleColumns.length + (rowSelection ? 1 : 0) + (rowDragManaged ? 1 : 0) + 1, style: { padding: '16px' }, children: React.createElement(detailCellRenderer, {
                            value: null,
                            data: row,
                            node: createRowNode(row, rowIndex, rowId),
                            rowIndex,
                            colDef: {},
                            column: {},
                            api: gridApi,
                            columnApi,
                            context,
                            refreshCell: () => { },
                            eGridCell: null,
                            getValue: () => null,
                            setValue: () => { },
                        }) }) }))] }, rowId));
    };
    // ============================================================================
    // Render Mobile Card View
    // ============================================================================
    const renderMobileCards = () => {
        if (mobileCardRenderer) {
            return (_jsx(MobileCardContainer, { "$theme": gridTheme, children: displayData.map((row, i) => {
                    const rowId = getRowId({ data: row });
                    return (_jsx(MobileCard, { "$theme": gridTheme, "$selected": isSelected(rowId), onClick: (e) => handleRowClick(e, row, i), children: React.createElement(mobileCardRenderer, {
                            data: row,
                            node: createRowNode(row, i, rowId),
                        }) }, rowId));
                }) }));
        }
        return (_jsx(MobileCardContainer, { "$theme": gridTheme, children: displayData.map((row, i) => {
                const rowId = getRowId({ data: row });
                return (_jsxs(MobileCard, { "$theme": gridTheme, "$selected": isSelected(rowId), onClick: (e) => handleRowClick(e, row, i), children: [rowSelection && (_jsx(MobileCardHeader, { "$theme": gridTheme, children: _jsx(Checkbox, { type: "checkbox", "$theme": gridTheme, checked: isSelected(rowId), onChange: () => toggleRow(row, i) }) })), visibleColumns.slice(0, 6).map((col) => {
                            const value = col.field ? getNestedValue(row, col.field) : null;
                            return (_jsxs(MobileCardRow, { "$theme": gridTheme, children: [_jsx(MobileCardLabel, { "$theme": gridTheme, children: col.headerName || col.field }), _jsx(MobileCardValue, { "$theme": gridTheme, children: String(value ?? '') })] }, col.colId));
                        })] }, rowId));
            }) }));
    };
    // ============================================================================
    // Render Empty State
    // ============================================================================
    const renderEmptyState = () => {
        if (noRowsOverlayComponent) {
            return (_jsx(NoRowsOverlay, { "$theme": gridTheme, children: React.createElement(noRowsOverlayComponent, {}) }));
        }
        return (_jsxs(NoRowsOverlay, { "$theme": gridTheme, children: [_jsx(EmptyIcon, {}), _jsx("span", { children: "No Rows To Show" })] }));
    };
    // ============================================================================
    // Render Loading State
    // ============================================================================
    const renderLoadingState = () => {
        if (loadingOverlayComponent) {
            return (_jsx(LoadingOverlay, { "$theme": gridTheme, children: React.createElement(loadingOverlayComponent, {}) }));
        }
        return (_jsxs(LoadingOverlay, { "$theme": gridTheme, children: [_jsx(Spinner, { "$theme": gridTheme }), _jsx("span", { children: "Loading..." })] }));
    };
    // ============================================================================
    // Render Pagination
    // ============================================================================
    const renderPagination = () => {
        if (!pagination || suppressPaginationPanel)
            return null;
        return (_jsxs(PaginationBar, { "$theme": gridTheme, children: [_jsxs(PaginationInfo, { "$theme": gridTheme, children: ["Showing ", startRow + 1, " to ", endRow, " of ", processedData.length, " rows"] }), _jsxs(PaginationControls, { children: [_jsx(PageButton, { "$theme": gridTheme, onClick: goToFirstPage, disabled: currentPage === 0, children: _jsx(ChevronsLeftIcon, {}) }), _jsx(PageButton, { "$theme": gridTheme, onClick: goToPreviousPage, disabled: currentPage === 0, children: _jsx(ChevronLeftIcon, {}) }), _jsxs("span", { style: { padding: '0 12px', fontSize: '13px' }, children: ["Page ", currentPage + 1, " of ", totalPages] }), _jsx(PageButton, { "$theme": gridTheme, onClick: goToNextPage, disabled: currentPage >= totalPages - 1, children: _jsx(ChevronRightIcon, {}) }), _jsx(PageButton, { "$theme": gridTheme, onClick: goToLastPage, disabled: currentPage >= totalPages - 1, children: _jsx(ChevronsRightIcon, {}) }), Array.isArray(paginationPageSizeSelector) && (_jsx(PageSizeSelect, { "$theme": gridTheme, value: pageSize, onChange: (e) => {
                                changePageSize(Number(e.target.value));
                                onPaginationChanged?.({
                                    type: 'paginationChanged',
                                    api: gridApi,
                                    columnApi,
                                    context,
                                    newPage: false,
                                    newPageSize: true,
                                    animate: true,
                                    keepRenderedRows: false,
                                });
                            }, children: paginationPageSizeSelector.map((size) => (_jsxs("option", { value: size, children: [size, " rows"] }, size))) }))] })] }));
    };
    // ============================================================================
    // Render Context Menu
    // ============================================================================
    const renderContextMenu = () => {
        if (!contextMenu.visible)
            return null;
        const items = getContextMenuItems?.({
            node: contextMenu.data?.row ? createRowNode(contextMenu.data.row, contextMenu.data.rowIndex) : {},
            column: { colId: contextMenu.data?.col?.colId, colDef: contextMenu.data?.col },
            value: contextMenu.data?.col?.field ? getNestedValue(contextMenu.data.row, contextMenu.data.col.field) : null,
        }) || ['copy', 'separator', 'export'];
        return (_jsx(ContextMenu, { "$theme": gridTheme, "$x": contextMenu.x, "$y": contextMenu.y, children: items.map((item, i) => {
                if (item === 'separator') {
                    return _jsx(ContextMenuDivider, { "$theme": gridTheme }, i);
                }
                if (typeof item === 'string') {
                    // Default menu items
                    switch (item) {
                        case 'copy':
                            return (_jsxs(ContextMenuItem, { "$theme": gridTheme, onClick: () => copyToClipboard(selectedRows, visibleColumns, true), children: ["Copy", _jsx("span", { className: "shortcut", children: "Ctrl+C" })] }, item));
                        case 'export':
                            return (_jsx(ContextMenuItem, { "$theme": gridTheme, onClick: () => exportToCsv(processedData, visibleColumns, 'export.csv'), children: "Export to CSV" }, item));
                        default:
                            return null;
                    }
                }
                return (_jsxs(ContextMenuItem, { "$theme": gridTheme, "$disabled": item.disabled, "$danger": item.cssClasses?.includes('danger'), onClick: () => !item.disabled && item.action?.(), children: [item.icon, item.name, item.shortcut && _jsx("span", { className: "shortcut", children: item.shortcut })] }, item.name));
            }) }));
    };
    // ============================================================================
    // Render Column Menu Popup
    // ============================================================================
    const renderColumnMenuPopup = () => {
        if (!columnMenuState.visible || !columnMenuState.colId)
            return null;
        const col = flatColumns.find((c) => c.colId === columnMenuState.colId);
        if (!col)
            return null;
        const colId = columnMenuState.colId;
        const { sort: sortDir } = getSortForColumn(colId);
        return (_jsxs(ColumnMenuPopup, { "$theme": gridTheme, "$x": columnMenuState.x, "$y": columnMenuState.y, onClick: (e) => e.stopPropagation(), children: [_jsxs(ColumnMenuSection, { "$theme": gridTheme, children: [_jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                handleSort(colId, false);
                                if (sortDir !== 'asc') {
                                    // Force asc
                                }
                                hideColumnMenu();
                            }, children: [_jsx(SortAscIcon, {}), _jsx("span", { children: "Sort Ascending" })] }), _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                handleSort(colId, false);
                                hideColumnMenu();
                            }, children: [_jsx(SortDescIcon, {}), _jsx("span", { children: "Sort Descending" })] })] }), _jsxs(ColumnMenuSection, { "$theme": gridTheme, children: [_jsxs(ColumnMenuItem, { "$theme": gridTheme, "$hasSubmenu": true, onClick: () => { }, children: [_jsx(PinIcon, {}), _jsx("span", { children: "Pin Column" })] }), _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                setColumnPinned(colId, 'left');
                                hideColumnMenu();
                            }, style: { paddingLeft: 36 }, children: [_jsx(PinLeftIcon, {}), _jsx("span", { children: "Pin Left" })] }), _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                setColumnPinned(colId, 'right');
                                hideColumnMenu();
                            }, style: { paddingLeft: 36 }, children: [_jsx(PinRightIcon, {}), _jsx("span", { children: "Pin Right" })] }), _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                setColumnPinned(colId, null);
                                hideColumnMenu();
                            }, style: { paddingLeft: 36 }, children: [_jsx(NoPinIcon, {}), _jsx("span", { children: "No Pin" })] })] }), _jsxs(ColumnMenuSection, { "$theme": gridTheme, children: [_jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                // Autosize this column (simplified)
                                hideColumnMenu();
                            }, children: [_jsx(AutosizeIcon, {}), _jsx("span", { children: "Autosize This Column" })] }), _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                // Autosize all columns (simplified)
                                hideColumnMenu();
                            }, children: [_jsx(AutosizeIcon, {}), _jsx("span", { children: "Autosize All Columns" })] })] }), col.field && col.enableRowGroup !== false && (_jsx(ColumnMenuSection, { "$theme": gridTheme, children: _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                            addRowGroupColumn(col.field);
                            hideColumnMenu();
                        }, children: [_jsx(GroupIcon, {}), _jsxs("span", { children: ["Group by ", col.headerName || col.field] })] }) })), _jsxs(ColumnMenuSection, { "$theme": gridTheme, children: [_jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                setSidePanelOpen(true);
                                switchSidePanelTab('columns');
                                hideColumnMenu();
                            }, children: [_jsx(ColumnsIcon, {}), _jsx("span", { children: "Choose Columns" })] }), _jsxs(ColumnMenuItem, { "$theme": gridTheme, onClick: () => {
                                resetColumnState();
                                hideColumnMenu();
                            }, children: [_jsx(ResetIcon, {}), _jsx("span", { children: "Reset Columns" })] })] })] }));
    };
    // ============================================================================
    // Render Set Filter Dropdown
    // ============================================================================
    const renderSetFilterDropdown = () => {
        if (!filterDropdownState.visible || !filterDropdownState.colId)
            return null;
        const col = flatColumns.find((c) => c.colId === filterDropdownState.colId);
        if (!col || !col.field)
            return null;
        const field = col.field;
        const uniqueValues = getUniqueValuesForField(field);
        const selectedValues = setFilterStates[field] || new Set(uniqueValues);
        const isAllSelected = selectedValues.size === uniqueValues.length;
        return (_jsxs(SetFilterContainer, { "$theme": gridTheme, style: {
                position: 'fixed',
                top: filterDropdownState.y,
                left: filterDropdownState.x,
                zIndex: 1000,
            }, onClick: (e) => e.stopPropagation(), children: [_jsx(SetFilterHeader, { "$theme": gridTheme, children: "Text Filter" }), _jsx(SetFilterSearch, { "$theme": gridTheme, children: _jsx("input", { type: "text", placeholder: "Search...", autoFocus: true }) }), _jsxs(SetFilterList, { "$theme": gridTheme, children: [_jsxs(SetFilterItem, { "$theme": gridTheme, "$selectAll": true, children: [_jsx("input", { type: "checkbox", checked: isAllSelected, onChange: () => toggleSetFilterSelectAll(field) }), "(Select All)"] }), uniqueValues.map((value) => (_jsxs(SetFilterItem, { "$theme": gridTheme, children: [_jsx("input", { type: "checkbox", checked: selectedValues.has(value), onChange: () => toggleSetFilterValue(field, value) }), value] }, value)))] }), _jsxs(SetFilterActions, { "$theme": gridTheme, children: [_jsx(SetFilterButton, { "$theme": gridTheme, onClick: () => {
                                toggleSetFilterSelectAll(field);
                            }, children: "Reset" }), _jsx(SetFilterButton, { "$theme": gridTheme, "$primary": true, onClick: () => {
                                hideFilterDropdown();
                            }, children: "Apply" })] })] }));
    };
    // ============================================================================
    // Render Side Panel
    // ============================================================================
    const renderSidePanel = () => {
        if (props.sideBar === false)
            return null;
        return (_jsxs(SidePanel, { "$theme": gridTheme, "$open": isSidePanelOpen, children: [_jsx(SidePanelTabs, { "$theme": gridTheme, "$collapsed": !isSidePanelOpen, children: isSidePanelOpen ? (_jsxs(_Fragment, { children: [_jsxs(SidePanelTab, { "$theme": gridTheme, "$active": sidePanelTab === 'columns', onClick: () => switchSidePanelTab('columns'), children: [_jsx(ColumnsIcon, {}), "Columns"] }), _jsxs(SidePanelTab, { "$theme": gridTheme, "$active": sidePanelTab === 'filters', onClick: () => switchSidePanelTab('filters'), children: [_jsx(FilterIcon, {}), "Filters"] })] })) : (_jsxs(_Fragment, { children: [_jsx(SidePanelTab, { "$theme": gridTheme, "$collapsed": true, "$active": sidePanelTab === 'columns', onClick: () => { setSidePanelOpen(true); switchSidePanelTab('columns'); }, title: "Columns", children: _jsx(ColumnsIcon, {}) }), _jsx(SidePanelTab, { "$theme": gridTheme, "$collapsed": true, "$active": sidePanelTab === 'filters', onClick: () => { setSidePanelOpen(true); switchSidePanelTab('filters'); }, title: "Filters", children: _jsx(FilterIcon, {}) })] })) }), isSidePanelOpen && (_jsxs(SidePanelContent, { "$theme": gridTheme, children: [sidePanelTab === 'columns' && (_jsxs(_Fragment, { children: [_jsxs(PivotModeToggle, { "$theme": gridTheme, children: [_jsx(PivotModeLabel, { "$theme": gridTheme, children: "Pivot Mode" }), _jsxs(ToggleSwitch, { "$theme": gridTheme, children: [_jsx("input", { type: "checkbox", checked: isPivotMode, onChange: togglePivotMode }), _jsx("span", {})] })] }), _jsx(SidePanelSearch, { "$theme": gridTheme, children: _jsx("input", { type: "text", placeholder: "Search..." }) }), _jsxs(SidePanelSection, { "$theme": gridTheme, children: [_jsxs(SidePanelSectionHeader, { "$theme": gridTheme, children: [_jsx(ColumnsIcon, {}), "Columns"] }), processedColumns.map((col) => {
                                            const colId = col.colId;
                                            const isVisible = !col.hide;
                                            const isDragging = draggedColumnId === colId;
                                            const isDragOver = dragOverColumnId === colId;
                                            return (_jsxs(SidePanelColumnItem, { "$theme": gridTheme, "$dragging": isDragging, "$selected": isDragOver, draggable: true, onDragStart: (e) => handleColumnDragStart(e, colId), onDragOver: (e) => handleColumnDragOver(e, colId), onDragLeave: handleColumnDragLeave, onDrop: (e) => handleColumnDrop(e, colId), onDragEnd: handleColumnDragEnd, children: [_jsx(SidePanelDragHandle, { "$theme": gridTheme, children: _jsx(GripIcon, {}) }), _jsx(Checkbox, { type: "checkbox", "$theme": gridTheme, checked: isVisible, onChange: (e) => {
                                                            // Toggle visibility: if checked, show (visible=true); if unchecked, hide (visible=false)
                                                            setColumnVisible(colId, e.target.checked);
                                                        } }), _jsx(SidePanelGroupLabel, { children: col.headerName || col.field })] }, colId));
                                        })] }), _jsxs(SidePanelSection, { "$theme": gridTheme, children: [_jsxs(SidePanelSectionHeader, { "$theme": gridTheme, children: [_jsx(GroupIcon, {}), "Row Groups"] }), _jsx(RowGroupsZone, { "$theme": gridTheme, "$hasItems": rowGroupColumns.length > 0, children: rowGroupColumns.length === 0 ? (_jsxs(RowGroupsLabel, { "$theme": gridTheme, children: [_jsx(GroupIcon, {}), "Drag here to set row groups"] })) : (groupedColumnsInfo.map(({ field, headerName }) => (_jsxs(RowGroupChip, { "$theme": gridTheme, children: [headerName, _jsx("button", { onClick: () => removeRowGroupColumn(field), children: _jsx(CloseIcon, {}) })] }, field)))) })] }), _jsxs(SidePanelSection, { "$theme": gridTheme, children: [_jsxs(SidePanelSectionHeader, { "$theme": gridTheme, children: [_jsx(SigmaIcon, {}), "Values"] }), _jsx(ValuesPanel, { "$theme": gridTheme, children: valueColumns.length === 0 ? (_jsx(RowGroupsZone, { "$theme": gridTheme, "$hasItems": false, children: _jsxs(RowGroupsLabel, { "$theme": gridTheme, children: [_jsx(SigmaIcon, {}), "Drag here to aggregate"] }) })) : (valueColumns.map(({ field, aggFunc, displayName }) => (_jsxs(ValueItem, { "$theme": gridTheme, children: [_jsxs(ValueItemLabel, { "$theme": gridTheme, children: [_jsx(SidePanelDragHandle, { "$theme": gridTheme, children: _jsx(GripIcon, {}) }), aggFunc, "(", displayName, ")"] }), _jsx(ValueItemRemove, { "$theme": gridTheme, onClick: () => removeValueColumn(field, aggFunc), children: _jsx(CloseIcon, {}) })] }, `${aggFunc}-${field}`)))) })] })] })), sidePanelTab === 'filters' && (_jsxs(_Fragment, { children: [_jsx(SidePanelSearch, { "$theme": gridTheme, children: _jsx("input", { type: "text", placeholder: "Search..." }) }), flatColumns
                                    .filter((col) => col.filter && col.field)
                                    .map((col) => {
                                    const field = col.field;
                                    const isExpanded = expandedFilterPanels.has(field);
                                    const hasFilter = isFilterActive(field) || isSetFilterActive(field);
                                    const uniqueValues = getUniqueValuesForField(field);
                                    const selectedValues = setFilterStates[field] || new Set(uniqueValues);
                                    return (_jsxs(FilterPanelColumn, { "$theme": gridTheme, children: [_jsxs(FilterPanelHeader, { "$theme": gridTheme, "$expanded": isExpanded, "$hasFilter": hasFilter, onClick: () => toggleFilterPanel(field), children: [_jsx(ChevronRightIcon, {}), col.headerName || col.field, hasFilter && _jsx(FilterIcon, {})] }), isExpanded && (_jsx(FilterPanelContent, { "$theme": gridTheme, "$expanded": isExpanded, children: _jsxs(SetFilterList, { "$theme": gridTheme, style: { maxHeight: 200, marginBottom: 8 }, children: [_jsxs(SetFilterItem, { "$theme": gridTheme, "$selectAll": true, children: [_jsx("input", { type: "checkbox", checked: selectedValues.size === uniqueValues.length, onChange: () => toggleSetFilterSelectAll(field) }), "(Select All)"] }), uniqueValues.slice(0, 20).map((value) => (_jsxs(SetFilterItem, { "$theme": gridTheme, children: [_jsx("input", { type: "checkbox", checked: selectedValues.has(value), onChange: () => toggleSetFilterValue(field, value) }), value] }, value))), uniqueValues.length > 20 && (_jsx(SetFilterItem, { "$theme": gridTheme, children: _jsxs("span", { style: { opacity: 0.6, fontSize: 12 }, children: ["...and ", uniqueValues.length - 20, " more"] }) }))] }) }))] }, col.colId));
                                })] }))] }))] }));
    };
    // ============================================================================
    // Main Render
    // ============================================================================
    // Close menus on outside click
    useEffect(() => {
        const handleClickOutside = () => {
            if (columnMenuState.visible)
                hideColumnMenu();
            if (filterDropdownState.visible)
                hideFilterDropdown();
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [columnMenuState.visible, filterDropdownState.visible, hideColumnMenu, hideFilterDropdown]);
    return (_jsxs(GridRoot, { ref: containerRef, "$theme": gridTheme, "$responsive": responsive, style: containerStyle, className: containerClassName, onKeyDown: handleKeyDown, tabIndex: 0, dir: enableRtl ? 'rtl' : 'ltr', children: [_jsxs(GridToolbar, { "$theme": gridTheme, children: [_jsxs(ToolbarGroup, { children: [_jsxs(QuickFilter, { "$theme": gridTheme, children: [_jsx(SearchIcon, {}), _jsx("input", { type: "text", placeholder: "Search...", value: quickFilterText, onChange: (e) => {
                                            setQuickFilterText(e.target.value);
                                            onFilterChanged?.({
                                                type: 'filterChanged',
                                                api: gridApi,
                                                columnApi,
                                                context,
                                            });
                                        } })] }), (hasActiveFilters || hasActiveSetFilters) && (_jsxs(ToolbarButton, { "$theme": gridTheme, onClick: clearAllFilters, children: [_jsx(CloseIcon, {}), "Clear Filters"] }))] }), _jsxs(ToolbarGroup, { children: [!suppressCsvExport && (_jsxs(ToolbarButton, { "$theme": gridTheme, onClick: () => exportToCsv(processedData, visibleColumns, 'export.csv'), children: [_jsx(DownloadIcon, {}), "Export"] })), _jsxs(ToolbarButton, { "$theme": gridTheme, onClick: resetColumnState, children: [_jsx(RefreshIcon, {}), "Reset"] }), props.sideBar !== false && (_jsx(ToolbarButton, { "$theme": gridTheme, "$active": isSidePanelOpen, onClick: toggleSidePanel, children: _jsx(PanelRightIcon, {}) }))] })] }), props.rowGroupPanelShow !== 'never' && rowGroupColumns.length > 0 && (_jsxs(RowGroupsZone, { "$theme": gridTheme, "$hasItems": true, children: [_jsx(RowGroupsLabel, { "$theme": gridTheme, children: _jsx(GroupIcon, {}) }), groupedColumnsInfo.map(({ field, headerName }) => (_jsxs(RowGroupChip, { "$theme": gridTheme, children: [headerName, _jsx("button", { onClick: () => removeRowGroupColumn(field), children: _jsx(CloseIcon, {}) })] }, field)))] })), selectedRows.length > 0 && (_jsxs(SelectionBar, { "$theme": gridTheme, "$visible": selectedRows.length > 0, children: [_jsxs("span", { children: [selectedRows.length, " row", selectedRows.length !== 1 ? 's' : '', " selected"] }), _jsx(SelectionActions, { children: _jsxs(ToolbarButton, { "$theme": gridTheme, style: { background: 'transparent', border: 'none', color: 'white' }, onClick: deselectAll, children: [_jsx(CloseIcon, {}), "Clear"] }) })] })), _jsxs(GridLayout, { children: [_jsxs(GridMainArea, { children: [_jsx(GridWrapper, { children: _jsxs(TableContainer, { "$stickyHeader": true, "$maxHeight": domLayout === 'autoHeight' ? undefined : 'calc(100% - 100px)', children: [responsive && isMobile ? (displayData.length === 0 ? renderEmptyState() : renderMobileCards()) : (
                                        /* Desktop Table View */
                                        _jsxs(_Fragment, { children: [displayData.length === 0 && !isLoading && renderEmptyState(), displayData.length > 0 && (_jsxs(StyledTable, { ref: tableRef, "$theme": gridTheme, "$fixedLayout": true, children: [_jsxs(TableHead, { "$theme": gridTheme, "$sticky": true, children: [renderColumnGroups(), renderHeader(), renderFloatingFilters()] }), _jsx(TableBody, { "$theme": gridTheme, children: displayData.map((row, i) => renderRow(row, startRow + i)) })] }))] })), isLoading && renderLoadingState()] }) }), renderPagination(), statusBar && (_jsxs(StatusBar, { "$theme": gridTheme, children: [_jsxs(StatusItem, { children: [_jsx("strong", { children: "Rows:" }), " ", processedData.length] }), _jsxs(StatusItem, { children: [_jsx("strong", { children: "Selected:" }), " ", selectedRows.length] })] }))] }), renderSidePanel()] }), renderContextMenu(), renderColumnMenuPopup(), renderSetFilterDropdown()] }));
}
// ============================================================================
// Exported Component with ForwardRef
// ============================================================================
export const AgGrid = forwardRef(AgGridInner);
export default AgGrid;
