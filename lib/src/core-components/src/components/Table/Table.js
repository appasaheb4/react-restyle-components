'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useState, useCallback, useMemo, useEffect, useRef, } from 'react';
import { TableRoot, Toolbar, ToolbarGroup, SearchInput, ToolbarButton, TableWrapper, StyledTable, TableHeader, HeaderRow, HeaderCell, TableBody, TableRow, TableCell, Checkbox, ExpandButton, ExpandedRow, ExpandedCell, TableFooter, FooterRow, FooterCell, PaginationWrapper, PaginationInfo, PaginationControls, PageButton, PageSizeSelect, QuickJumper, EmptyState, LoadingOverlay, LoadingSpinner, EditableCell, CellEditor, ColumnTogglePanel, ColumnToggleHeader, ColumnToggleSearch, ColumnToggleList, ColumnToggleItem, } from './elements';
import { useSortState, useFilterState, usePaginationState, useRowSelection, useRowExpansion, useColumnVisibility, useTableDebounce, sortData, filterData, paginateData, getNestedValue, exportToCSV, } from './hooks';
import { getFilterComponent } from './filters';
import { Tooltip } from '../Tooltip';
// Icons
const SearchIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "M21 21l-4.35-4.35", strokeLinecap: "round" })] }));
// Arrow Up Icon with configurable size
const ArrowUpIcon = ({ size = 14 }) => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { width: size, height: size }, children: _jsx("path", { d: "M12 19V5M5 12l7-7 7 7" }) }));
// Arrow Down Icon with configurable size
const ArrowDownIcon = ({ size = 14 }) => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { width: size, height: size }, children: _jsx("path", { d: "M12 5v14M5 12l7 7 7-7" }) }));
// Legacy triangle icons (kept for backward compatibility)
const SortUpIcon = () => (_jsx("svg", { viewBox: "0 0 10 10", fill: "currentColor", children: _jsx("path", { d: "M5 0L10 6H0L5 0z" }) }));
const SortDownIcon = () => (_jsx("svg", { viewBox: "0 0 10 10", fill: "currentColor", children: _jsx("path", { d: "M5 10L0 4h10L5 10z" }) }));
// Default sort caret component with arrow icons
const DefaultSortCaret = ({ order, }) => {
    const getSizeConfig = () => {
        switch (order) {
            case 'asc':
                return { up: 16, down: 10 };
            case 'desc':
                return { up: 10, down: 16 };
            default:
                return { up: 14, down: 14 };
        }
    };
    const { up, down } = getSizeConfig();
    return (_jsxs("div", { style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            color: 'white',
        }, children: [_jsx(ArrowUpIcon, { size: up }), _jsx(ArrowDownIcon, { size: down })] }));
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
const EditIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const DeleteIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ViewIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const RefreshIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M23 4v6h-6M1 20v-6h6", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const PrintIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("rect", { x: "6", y: "14", width: "12", height: "8" })] }));
const ErrorIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("path", { d: "M12 8v4M12 16h.01", strokeLinecap: "round", strokeLinejoin: "round" })] }));
export const Table = forwardRef(function TableComponent(props, ref) {
    const { id, data, columns, keyField = '_id', loading = false, loadingIndicator, pagination = true, paginationConfig, totalSize, remote = false, defaultSort, sort: controlledSort, filterable = false, defaultFilters, filters: controlledFilters, defaultShowFilters = true, showFilters: controlledShowFilters, onShowFiltersChange, showFilterToggle = true, searchable = true, searchPlaceholder = 'Search...', defaultSearchValue = '', searchValue: controlledSearchValue, searchDebounce = 300, rowSelection, expandable, editMode = 'none', onCellEdit, exportable = true, exportFileName = 'table_export', columnToggle = false, bordered = true, striped = false, hover = true, compact = false, cellPadding, stickyHeader = false, maxHeight, rowClassName, rowStyle, classNames = {}, styles = {}, className, style, emptyText = 'No data available', onChange, onPageChange, onSortChange, onFilterChange, onSearch, onRowClick, onRowDoubleClick, onClearFilters, toolbar, hideToolbar = false, showFooter = false, caption, 
    // Quick configuration props
    isDelete = false, isEditModify, isUpdate, isExport, isSelectRow, fileName, hideExcelSheet = false, 
    // Quick callbacks
    onSelectedRow, onUpdateItem, onPageSizeChange, onFilter, clearAllFilter, 
    // Dynamic configuration
    dynamicStylingFields, fieldTypeConfig, 
    // Action column
    showActionColumn, actionColumnWidth = 100, actionColumnTitle = 'Actions', actionColumnPosition = 'last', actionColumnRender, onDelete, onEdit, onView, isView = false, 
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
    onRowMouseEnter, onRowMouseLeave, onCellClick, onHeaderClick, ...rest } = props;
    // Resolve aliases
    const resolvedExportable = isExport ?? exportable;
    const resolvedExportFileName = fileName ?? exportFileName;
    const resolvedIsEdit = isEditModify ?? isUpdate ?? false;
    const resolvedIsView = isView;
    const resolvedShowActionColumn = showActionColumn ?? (isDelete || resolvedIsEdit || resolvedIsView);
    // Handle isSelectRow shorthand
    const resolvedRowSelection = isSelectRow
        ? {
            mode: 'checkbox',
            ...rowSelection,
            onChange: (keys, rows) => {
                rowSelection?.onChange?.(keys, rows);
                onSelectedRow?.(rows);
            },
        }
        : rowSelection;
    // Size configuration
    const sizeConfig = {
        small: { padding: '4px 8px', fontSize: '12px' },
        medium: { padding: '8px 12px', fontSize: '14px' },
        large: { padding: '12px 16px', fontSize: '16px' },
    };
    // Refs
    const tableRef = useRef(null);
    const columnToggleRef = useRef(null);
    // State
    const [internalSearchValue, setInternalSearchValue] = useState(defaultSearchValue);
    const [internalShowFilters, setInternalShowFilters] = useState(defaultShowFilters);
    const [columnToggleOpen, setColumnToggleOpen] = useState(false);
    const [columnSearch, setColumnSearch] = useState('');
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
    const searchValue = controlledSearchValue ?? internalSearchValue;
    const debouncedSearchValue = useTableDebounce(searchValue, searchDebounce);
    // Sort state
    const { sort, handleSort } = useSortState(defaultSort, controlledSort);
    // Filter state
    const { filters, setFilter, clearFilters } = useFilterState(defaultFilters, controlledFilters);
    // Debounced filters for onFilter callback
    const debouncedFilters = useTableDebounce(filters, 500);
    // Track if onFilter should be called (only after user interaction)
    const shouldCallOnFilter = useRef(false);
    const filterTypeRef = useRef('filter');
    const onFilterRef = useRef(onFilter);
    // Pagination state
    const { page, pageSize, totalPages, goToPage, goToNextPage, goToPrevPage, goToFirstPage, goToLastPage, changePageSize, } = usePaginationState(paginationConfig?.page || 0, paginationConfig?.pageSize || 10, totalSize ?? data.length);
    // Row selection
    const { selectedKeys, isSelected, toggleRow, toggleAll, isAllSelected, isIndeterminate, } = useRowSelection(data, rowSelection?.keyField || keyField, rowSelection?.mode || 'none', rowSelection?.selectedRowKeys, rowSelection?.getCheckboxProps);
    // Row expansion
    const { expandedKeys, isExpanded, toggleExpand } = useRowExpansion(expandable?.keyField || keyField, expandable?.defaultExpandedRowKeys, expandable?.expandedRowKeys, expandable?.accordion);
    // Column visibility
    const { visibleColumns, toggleColumn, isColumnHidden } = useColumnVisibility(columns, id);
    // Keep onFilter ref updated
    useEffect(() => {
        onFilterRef.current = onFilter;
    }, [onFilter]);
    // Call onFilter when debounced values change (debounced)
    useEffect(() => {
        if (!shouldCallOnFilter.current)
            return;
        const hasFilters = Object.keys(debouncedFilters).some((key) => debouncedFilters[key] !== null &&
            debouncedFilters[key] !== undefined &&
            debouncedFilters[key] !== '');
        if (debouncedSearchValue || hasFilters) {
            // For 'search' type, include srText; for 'filter' type, only pass filters
            const filterData = filterTypeRef.current === 'search'
                ? { ...debouncedFilters, srText: debouncedSearchValue }
                : debouncedFilters;
            onFilterRef.current?.(filterTypeRef.current, filterData, page, pageSize);
        }
        // Reset the flag after calling onFilter to prevent duplicate calls
        shouldCallOnFilter.current = false;
    }, [debouncedSearchValue, debouncedFilters, page, pageSize]);
    // Process data (filter, sort, paginate)
    const processedData = useMemo(() => {
        if (remote) {
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
        remote,
        pagination,
        columns,
    ]);
    // Calculate total for client-side
    const calculatedTotal = useMemo(() => {
        if (remote)
            return totalSize || data.length;
        return filterData(data, filters, columns, debouncedSearchValue).length;
    }, [data, filters, columns, debouncedSearchValue, remote, totalSize]);
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
    }, [clearFilters, onClearFilters, onFilterChange, onChange]);
    // Handle page change
    const handlePageChange = useCallback((newPage) => {
        goToPage(newPage);
        onPageChange?.(newPage, pageSize);
        onPageSizeChange?.(newPage, pageSize);
        onChange?.({ type: 'pagination', pagination: { page: newPage, pageSize } });
    }, [goToPage, pageSize, onPageChange, onPageSizeChange, onChange]);
    // Handle page size change
    const handlePageSizeChange = useCallback((newSize) => {
        changePageSize(newSize);
        onPageChange?.(0, newSize);
        onPageSizeChange?.(0, newSize);
        onChange?.({
            type: 'pagination',
            pagination: { page: 0, pageSize: newSize },
        });
    }, [changePageSize, onPageChange, onChange]);
    // Handle row click
    const handleRowClick = useCallback((row, rowIndex, e) => {
        // Selection handling
        if (rowSelection?.mode && rowSelection.mode !== 'none') {
            const result = toggleRow(row);
            if (result) {
                rowSelection.onChange?.(result.selectedKeys, result.selectedRows);
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
    }, [rowSelection, expandable, toggleRow, toggleExpand, onRowClick]);
    // Helper to check if cell is editable and get custom editor
    const getCellEditableInfo = useCallback((column, row, rowIndex, colIndex) => {
        if (!column.editable) {
            return { isEditable: false };
        }
        if (typeof column.editable === 'boolean') {
            return { isEditable: column.editable };
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
        if (editMode === 'none')
            return;
        const { isEditable } = getCellEditableInfo(column, row, rowIndex, colIndex);
        if (!isEditable)
            return;
        if (editMode === 'dblclick') {
            setEditingCell({ row: rowIndex, field: column.dataField });
            setEditValue(getNestedValue(row, column.dataField));
        }
        onRowDoubleClick?.(row, rowIndex, e);
    }, [editMode, onRowDoubleClick, getCellEditableInfo]);
    const handleCellClick = useCallback((row, rowIndex, column, colIndex) => {
        if (editMode !== 'click')
            return;
        const { isEditable } = getCellEditableInfo(column, row, rowIndex, colIndex);
        if (!isEditable)
            return;
        setEditingCell({ row: rowIndex, field: column.dataField });
        setEditValue(getNestedValue(row, column.dataField));
    }, [editMode, getCellEditableInfo]);
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
        const config = fieldTypeConfig?.[dataField];
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
    const handleExport = useCallback(() => {
        const exportData = remote
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
                const config = fieldTypeConfig[col.dataField];
                if (config?.hideFromExport)
                    return false;
                if (config?.csvExport === false)
                    return false;
                return true;
            });
        }
        // Create enhanced columns with export formatters
        const enhancedColumns = exportColumns.map((col) => {
            const config = fieldTypeConfig?.[col.dataField];
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
        exportToCSV(exportData, enhancedColumns, resolvedExportFileName);
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
        remote,
    ]);
    // Handle checkbox change
    const handleCheckboxChange = useCallback((row, e) => {
        e.stopPropagation();
        const result = toggleRow(row);
        if (result) {
            rowSelection?.onChange?.(result.selectedKeys, result.selectedRows);
        }
    }, [toggleRow, rowSelection]);
    // Handle select all
    const handleSelectAllChange = useCallback(() => {
        const result = toggleAll(!isAllSelected);
        if (result) {
            rowSelection?.onChange?.(result.selectedKeys, result.selectedRows);
        }
    }, [toggleAll, isAllSelected, rowSelection]);
    // Handle expand toggle
    const handleExpandClick = useCallback((row, e) => {
        e.stopPropagation();
        const result = toggleExpand(row);
        expandable?.onExpandChange?.(result.expandedKeys, result.expanded, row);
    }, [toggleExpand, expandable]);
    // Filtered column list for toggle panel
    const filteredToggleColumns = useMemo(() => {
        return columns.filter((c) => c.dataField !== keyField &&
            c.text.toLowerCase().includes(columnSearch.toLowerCase()));
    }, [columns, keyField, columnSearch]);
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
                const editorProps = {
                    value: editValue,
                    onUpdate: (newValue) => {
                        setEditValue(newValue);
                        handleCellEditComplete(row, rowIndex, column);
                    },
                    onCancel: () => setEditingCell(null),
                    onBlur: () => handleCellEditComplete(row, rowIndex, column),
                    row,
                    column,
                    rowIndex,
                    columnIndex: colIndex,
                };
                return column.editorRenderer(editorProps, editValue, row, column, rowIndex, colIndex);
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
        return (_jsxs(Toolbar, { className: classNames.toolbar, style: styles.toolbar, children: [_jsxs(ToolbarGroup, { children: [toolbarLeft, searchable && (_jsxs(SearchInput, { children: [_jsx(SearchIcon, {}), _jsx("input", { type: "text", value: searchValue, onChange: (e) => handleSearchChange(e.target.value), placeholder: searchPlaceholder })] })), searchable && (_jsx(ToolbarButton, { onClick: () => handleSearchChange(''), disabled: !searchValue, style: { opacity: searchValue ? 1 : 0.6 }, children: "Clear" })), _jsx(ToolbarButton, { onClick: handleClearFilters, disabled: !hasFilters, style: { opacity: hasFilters ? 1 : 0.6 }, children: "Clear all filters" }), resolvedExportable && hideExcelSheet !== true && (_jsxs(ToolbarButton, { onClick: handleExport, children: [_jsx(DownloadIcon, {}), "Export CSV"] })), showFilterToggle && (_jsxs("div", { ref: columnToggleRef, style: { position: 'relative' }, children: [_jsx(Tooltip, { content: "Show/Hide Columns", position: "bottom", children: _jsx(ToolbarButton, { "$active": columnToggleOpen, onClick: () => setColumnToggleOpen(!columnToggleOpen), "aria-label": "Toggle column visibility", style: { padding: '0 8px' }, children: _jsx(FilterIcon, {}) }) }), columnToggleOpen && (_jsxs(ColumnTogglePanel, { children: [_jsxs(ColumnToggleHeader, { children: [_jsx("span", { children: "Show/Hide Columns" }), _jsx("button", { onClick: () => setColumnToggleOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(ColumnToggleSearch, { children: _jsx("input", { type: "text", value: columnSearch, onChange: (e) => setColumnSearch(e.target.value), placeholder: "Search columns..." }) }), _jsxs(ColumnToggleList, { children: [_jsxs(ColumnToggleItem, { style: {
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
                                                            } }), _jsx("span", { style: { fontWeight: 600 }, children: "Select All" })] }), filteredToggleColumns.map((column) => (_jsxs(ColumnToggleItem, { children: [_jsx("input", { type: "checkbox", checked: !isColumnHidden(column.dataField), onChange: () => toggleColumn(column.dataField) }), _jsx("span", { children: column.text })] }, column.dataField)))] })] }))] }))] }), toolbarCenter, _jsxs(ToolbarGroup, { children: [refreshable && (_jsxs(ToolbarButton, { onClick: onRefresh, children: [_jsx(RefreshIcon, {}), "Refresh"] })), printable && (_jsxs(ToolbarButton, { onClick: onPrint, children: [_jsx(PrintIcon, {}), "Print"] })), columnToggle && (_jsxs("div", { ref: !showFilterToggle ? columnToggleRef : undefined, style: { position: 'relative' }, children: [_jsxs(ToolbarButton, { "$active": columnToggleOpen, onClick: () => setColumnToggleOpen(!columnToggleOpen), children: [_jsx(ColumnsIcon, {}), "Columns"] }), columnToggleOpen && (_jsxs(ColumnTogglePanel, { children: [_jsxs(ColumnToggleHeader, { children: [_jsx("span", { children: "Toggle Columns" }), _jsx("button", { onClick: () => setColumnToggleOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(ColumnToggleSearch, { children: _jsx("input", { type: "text", value: columnSearch, onChange: (e) => setColumnSearch(e.target.value), placeholder: "Search columns..." }) }), _jsx(ColumnToggleList, { children: filteredToggleColumns.map((column) => (_jsxs(ColumnToggleItem, { children: [_jsx("input", { type: "checkbox", checked: !isColumnHidden(column.dataField), onChange: () => toggleColumn(column.dataField) }), _jsx("span", { children: column.text })] }, column.dataField))) })] }))] })), toolbarRight] })] }));
    };
    // Render pagination
    const renderPagination = () => {
        if (!pagination)
            return null;
        const actualTotalPages = Math.ceil(calculatedTotal / pageSize) || 1;
        const startItem = page * pageSize + 1;
        const endItem = Math.min((page + 1) * pageSize, calculatedTotal);
        const showTotal = paginationConfig?.showTotal === true
            ? `Showing ${startItem} to ${endItem} of ${calculatedTotal} Results`
            : typeof paginationConfig?.showTotal === 'function'
                ? paginationConfig.showTotal(calculatedTotal, [startItem, endItem])
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
        return (_jsxs(PaginationWrapper, { className: classNames.pagination, style: styles.pagination, children: [_jsxs(ToolbarGroup, { children: [rowSelection?.mode === 'checkbox' && selectedKeys.size > 0 && (_jsxs(ToolbarButton, { onClick: () => {
                                const selectedRows = data.filter((row) => selectedKeys.has(getRowKey(row)));
                                rowSelection.onChange?.(Array.from(selectedKeys), selectedRows);
                            }, children: [selectedKeys.size, " Selected"] })), paginationConfig?.showSizeChanger !== false && (_jsx(PageSizeSelect, { value: pageSize, onChange: (e) => handlePageSizeChange(Number(e.target.value)), children: (paginationConfig?.pageSizeOptions || [10, 20, 30, 50]).map((size) => (_jsx("option", { value: size, children: size }, size))) }))] }), _jsxs(PaginationControls, { children: [_jsx(PageButton, { onClick: goToFirstPage, disabled: page === 0, children: _jsx(ChevronsLeftIcon, {}) }), _jsx(PageButton, { onClick: goToPrevPage, disabled: page === 0, children: _jsx(ChevronLeftIcon, {}) }), getPageNumbers().map((p, i) => typeof p === 'string' ? (_jsx("span", { style: { padding: '0 4px', color: 'white' }, children: p }, `ellipsis-${i}`)) : (_jsx(PageButton, { "$active": p === page, onClick: () => handlePageChange(p), children: p + 1 }, p))), _jsx(PageButton, { onClick: goToNextPage, disabled: page >= actualTotalPages - 1, children: _jsx(ChevronRightIcon, {}) }), _jsx(PageButton, { onClick: goToLastPage, disabled: page >= actualTotalPages - 1, children: _jsx(ChevronsRightIcon, {}) })] }), showTotal && _jsx(PaginationInfo, { children: showTotal }), paginationConfig?.showQuickJumper && (_jsxs(QuickJumper, { children: ["Go to", _jsx("input", { type: "number", min: 1, max: actualTotalPages, placeholder: "#", onKeyDown: (e) => {
                                if (e.key === 'Enter') {
                                    const target = e.target;
                                    const pageNum = parseInt(target.value, 10) - 1;
                                    if (pageNum >= 0 && pageNum < actualTotalPages) {
                                        handlePageChange(pageNum);
                                        target.value = '';
                                    }
                                }
                            } })] }))] }));
    };
    // Check if any columns have filters
    const hasFilterableColumns = filterable ||
        columns.some((c) => typeof c.filter === 'function' ||
            c.filterComponent ||
            c.filter === true);
    // Should show filter row - check if there are filterable columns AND filters are visible
    const shouldShowFilterRow = hasFilterableColumns && showFilterRow;
    return (_jsxs(TableRoot, { ref: ref, "$bordered": bordered, "$compact": compact, className: className || classNames.root, style: { ...styles.root, ...style, position: 'relative' }, "aria-label": rest['aria-label'], "aria-labelledby": rest['aria-labelledby'], children: [loading && (_jsx(LoadingOverlay, { className: classNames.loading, style: styles.loading, children: loadingIndicator || _jsx(LoadingSpinner, {}) })), renderToolbar(), _jsx(TableWrapper, { "$maxHeight": maxHeight, "$stickyHeader": stickyHeader, className: classNames.wrapper, style: styles.wrapper, children: _jsxs(StyledTable, { ref: tableRef, "$striped": striped, "$hover": hover, "$compact": compact, role: "grid", children: [caption && _jsx("caption", { className: "sr-only", children: caption }), _jsx(TableHeader, { "$sticky": stickyHeader, className: classNames.header, style: styles.header, children: _jsxs(HeaderRow, { className: classNames.headerRow, style: styles.headerRow, children: [rowSelection?.mode === 'checkbox' && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": rowSelection.columnWidth || 40, children: !rowSelection.hideSelectAll && (_jsx(Checkbox, { checked: isAllSelected, ref: (el) => {
                                                if (el)
                                                    el.indeterminate = isIndeterminate;
                                            }, onChange: handleSelectAllChange })) })), expandable && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": expandable.columnWidth || 40 })), showRowNumber && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": rowNumberWidth, children: rowNumberTitle })), visibleColumns.map((column, colIndex) => {
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
                                        return (_jsx(HeaderCell, { "$align": column.headerAlign || column.align || 'left', "$sortable": !!column.sort, "$compact": compact, "$width": column.width, "$minWidth": column.minWidth, "$pinned": column.pinned, "$customClass": !!column.headerClasses, className: [column.headerClasses, classNames.headerCell]
                                                .filter(Boolean)
                                                .join(' '), style: typeof column.headerStyle === 'function'
                                                ? column.headerStyle(column)
                                                : column.headerStyle || styles.headerCell, role: "columnheader", "aria-sort": sort.field === column.dataField
                                                ? sort.order === 'asc'
                                                    ? 'ascending'
                                                    : sort.order === 'desc'
                                                        ? 'descending'
                                                        : 'none'
                                                : undefined, children: (() => {
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
                                                return (_jsxs("div", { style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 4,
                                                        width: '100%',
                                                    }, children: [showTitle && (_jsx("span", { style: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                fontSize: 12,
                                                                whiteSpace: 'nowrap',
                                                                cursor: showSort ? 'pointer' : 'default',
                                                            }, onClick: () => showSort && handleSortClick(column), children: column.headerFormatter
                                                                ? column.headerFormatter(column, colIndex)
                                                                : column.headerText || column.text })), (showFilter || showSort) && (_jsxs("div", { style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                gap: 6,
                                                                width: '100%',
                                                                minHeight: 24,
                                                            }, children: [showFilter && (_jsx("div", { style: {
                                                                        width: showSort ? '80%' : '100%',
                                                                        minWidth: 0,
                                                                        flexShrink: 1,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                    }, onClick: (e) => e.stopPropagation(), children: column.filterRenderer ? (column.filterRenderer(onFilter, column)) : (_jsx(FilterComponent, { column: column, value: filters[column.dataField], onChange: onFilter, onClear: () => handleFilterChange(column.dataField, null) })) })), showSort && (_jsx("div", { style: {
                                                                        width: showFilter ? '20%' : '100%',
                                                                        minWidth: 24,
                                                                        height: 24,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        flexShrink: 0,
                                                                        cursor: 'pointer',
                                                                    }, onClick: () => handleSortClick(column), children: column.sortCaret ? (column.sortCaret(sort.field === column.dataField
                                                                        ? sort.order
                                                                        : null, column)) : (_jsx(DefaultSortCaret, { order: sort.field === column.dataField
                                                                            ? sort.order
                                                                            : null, column: column })) }))] }))] }));
                                            })() }, column.dataField));
                                    }), resolvedShowActionColumn && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": actionColumnWidth, children: "Actions" }))] }) }), _jsx(TableBody, { className: classNames.body, style: styles.body, children: processedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: visibleColumns.length +
                                        (rowSelection?.mode === 'checkbox' ? 1 : 0) +
                                        (expandable ? 1 : 0) +
                                        (showRowNumber ? 1 : 0) +
                                        (resolvedShowActionColumn ? 1 : 0), children: _jsxs(EmptyState, { className: classNames.empty, style: styles.empty, children: [_jsx(EmptyIcon, {}), _jsx("span", { children: emptyText })] }) }) })) : (processedData.map((row, rowIndex) => {
                                const rowKey = getRowKey(row);
                                const rowSelected = isSelected(rowKey);
                                const rowExpanded = isExpanded(rowKey);
                                const checkboxProps = rowSelection?.getCheckboxProps?.(row);
                                const isExpandable = expandable?.rowExpandable?.(row) ?? true;
                                const rowClass = typeof rowClassName === 'function'
                                    ? rowClassName(row, rowIndex)
                                    : rowClassName;
                                const rowStyles = typeof rowStyle === 'function'
                                    ? rowStyle(row, rowIndex)
                                    : rowStyle;
                                const selectedStyle = rowSelected
                                    ? typeof rowSelection?.selectedRowStyle === 'function'
                                        ? rowSelection.selectedRowStyle(row)
                                        : rowSelection?.selectedRowStyle
                                    : undefined;
                                return (_jsxs(React.Fragment, { children: [_jsxs(TableRow, { "$selected": rowSelected, "$clickable": !!onRowClick ||
                                                rowSelection?.mode === 'single' ||
                                                expandable?.expandRowByClick === true, "$disabled": !!checkboxProps?.disabled, className: `${classNames.row || ''} ${rowClass || ''} ${rowSelected
                                                ? typeof rowSelection?.selectedRowClassName ===
                                                    'function'
                                                    ? rowSelection.selectedRowClassName(row)
                                                    : rowSelection?.selectedRowClassName || ''
                                                : ''}`, style: { ...styles.row, ...rowStyles, ...selectedStyle }, onClick: (e) => handleRowClick(row, rowIndex, e), onDoubleClick: (e) => handleCellDoubleClick(row, rowIndex, visibleColumns[0], 0, e), role: "row", "aria-selected": rowSelected, children: [rowSelection?.mode === 'checkbox' && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, children: _jsx(Checkbox, { checked: rowSelected, disabled: checkboxProps?.disabled, onChange: (e) => handleCheckboxChange(row, e), onClick: (e) => e.stopPropagation() }) })), expandable && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, children: isExpandable && (_jsx(ExpandButton, { "$expanded": rowExpanded, onClick: (e) => handleExpandClick(row, e), children: expandable.expandIcon ? (expandable.expandIcon({
                                                            expanded: rowExpanded,
                                                            row,
                                                            onExpand: () => toggleExpand(row),
                                                        })) : (_jsx(ExpandIcon, {})) })) })), showRowNumber && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, style: {
                                                        width: rowNumberWidth,
                                                        color: '#6b7280',
                                                        fontWeight: 500,
                                                    }, children: rowNumberRender
                                                        ? rowNumberRender(rowIndex + 1, row)
                                                        : rowIndex + 1 + page * pageSize })), visibleColumns.map((column, colIndex) => {
                                                    const cellClass = typeof column.classes === 'function'
                                                        ? column.classes(getNestedValue(row, column.dataField), row, rowIndex, colIndex)
                                                        : column.classes;
                                                    const cellStyle = typeof column.style === 'function'
                                                        ? column.style(getNestedValue(row, column.dataField), row, rowIndex, colIndex)
                                                        : column.style;
                                                    return (_jsx(TableCell, { "$align": column.align || 'left', "$compact": compact, "$padding": cellPadding, "$pinned": column.pinned, className: cellClass || classNames.cell, style: { ...styles.cell, ...cellStyle }, onClick: () => handleCellClick(row, rowIndex, column, colIndex), onDoubleClick: (e) => handleCellDoubleClick(row, rowIndex, column, colIndex, e), role: "gridcell", children: (() => {
                                                            const editInfo = getCellEditableInfo(column, row, rowIndex, colIndex);
                                                            if (editInfo.isEditable &&
                                                                editMode !== 'none') {
                                                                // Check for custom editor
                                                                if (editInfo.customEditor) {
                                                                    return editInfo.customEditor;
                                                                }
                                                                return (_jsx(EditableCell, { "$editing": editingCell?.row === rowIndex &&
                                                                        editingCell?.field === column.dataField, children: renderCellContent(row, column, rowIndex, colIndex) }));
                                                            }
                                                            return renderCellContent(row, column, rowIndex, colIndex);
                                                        })() }, column.dataField));
                                                }), resolvedShowActionColumn && (_jsx(TableCell, { "$align": "center", "$compact": compact, "$padding": cellPadding, style: {
                                                        width: actionColumnWidth,
                                                        whiteSpace: 'nowrap',
                                                    }, children: actionColumnRender ? (actionColumnRender(row, rowIndex)) : (_jsxs("div", { style: {
                                                            display: 'flex',
                                                            gap: '4px',
                                                            justifyContent: 'center',
                                                        }, children: [resolvedIsView && (_jsx("button", { onClick: (e) => {
                                                                    e.stopPropagation();
                                                                    onView?.(row, rowIndex);
                                                                }, style: {
                                                                    padding: '4px 8px',
                                                                    background: '#10b981',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '4px',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    fontSize: '12px',
                                                                }, title: "View", children: _jsx(ViewIcon, {}) })), resolvedIsEdit && (_jsx("button", { onClick: (e) => {
                                                                    e.stopPropagation();
                                                                    onEdit?.(row, rowIndex);
                                                                }, style: {
                                                                    padding: '4px 8px',
                                                                    background: '#3b82f6',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '4px',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    fontSize: '12px',
                                                                }, title: "Edit", children: _jsx(EditIcon, {}) })), isDelete && (_jsx("button", { onClick: (e) => {
                                                                    e.stopPropagation();
                                                                    onDelete?.(row, rowIndex);
                                                                }, style: {
                                                                    padding: '4px 8px',
                                                                    background: '#ef4444',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '4px',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    fontSize: '12px',
                                                                }, title: "Delete", children: _jsx(DeleteIcon, {}) }))] })) }))] }), expandable && rowExpanded && isExpandable && (_jsx(ExpandedRow, { children: _jsx(ExpandedCell, { colSpan: visibleColumns.length +
                                                    (rowSelection?.mode === 'checkbox' ? 1 : 0) +
                                                    (expandable ? 1 : 0) +
                                                    (showRowNumber ? 1 : 0) +
                                                    (resolvedShowActionColumn ? 1 : 0), children: expandable.expandedRowRender?.(row, rowIndex, rowExpanded) }) }))] }, rowKey));
                            })) }), showFooter && (_jsx(TableFooter, { className: classNames.footer, style: styles.footer, children: _jsxs(FooterRow, { className: classNames.footerRow, style: styles.footerRow, children: [rowSelection?.mode === 'checkbox' && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), expandable && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), showRowNumber && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), visibleColumns.map((column) => (_jsx(FooterCell, { "$align": column.align || 'left', "$compact": compact, className: classNames.footerCell, style: styles.footerCell, children: typeof column.footer === 'function'
                                            ? column.footer(column, data)
                                            : column.footerFormatter
                                                ? column.footerFormatter(column, data)
                                                : column.footer }, column.dataField))), resolvedShowActionColumn && (_jsx(FooterCell, { "$align": "center", "$compact": compact }))] }) }))] }) }), renderPagination()] }));
});
Table.displayName = 'Table';
export default Table;
