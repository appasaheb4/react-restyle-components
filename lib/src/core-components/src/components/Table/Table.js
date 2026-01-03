'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useState, useCallback, useMemo, useRef, } from 'react';
import { TableRoot, Toolbar, ToolbarGroup, SearchInput, ToolbarButton, TableWrapper, StyledTable, TableHeader, HeaderRow, HeaderCell, SortIcon, FilterRow, FilterCell, TableBody, TableRow, TableCell, Checkbox, ExpandButton, ExpandedRow, ExpandedCell, TableFooter, FooterRow, FooterCell, PaginationWrapper, PaginationInfo, PaginationControls, PageButton, PageSizeSelect, QuickJumper, EmptyState, LoadingOverlay, LoadingSpinner, EditableCell, CellEditor, ColumnTogglePanel, ColumnToggleHeader, ColumnToggleSearch, ColumnToggleList, ColumnToggleItem, } from './elements';
import { useSortState, useFilterState, usePaginationState, useRowSelection, useRowExpansion, useColumnVisibility, useTableDebounce, sortData, filterData, paginateData, getNestedValue, exportToCSV, } from './hooks';
import { getFilterComponent } from './filters';
// Icons
const SearchIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "M21 21l-4.35-4.35", strokeLinecap: "round" })] }));
const SortUpIcon = () => (_jsx("svg", { viewBox: "0 0 10 10", fill: "currentColor", children: _jsx("path", { d: "M5 0L10 6H0L5 0z" }) }));
const SortDownIcon = () => (_jsx("svg", { viewBox: "0 0 10 10", fill: "currentColor", children: _jsx("path", { d: "M5 10L0 4h10L5 10z" }) }));
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
export const Table = forwardRef(function TableComponent(props, ref) {
    const { id, data, columns, keyField = '_id', loading = false, loadingIndicator, pagination = true, paginationConfig, totalSize, remote = false, defaultSort, sort: controlledSort, filterable = false, defaultFilters, filters: controlledFilters, searchable = false, searchPlaceholder = 'Search...', defaultSearchValue = '', searchValue: controlledSearchValue, searchDebounce = 300, rowSelection, expandable, editMode = 'none', onCellEdit, exportable = false, exportFileName = 'table_export', columnToggle = false, bordered = true, striped = false, hover = true, compact = false, stickyHeader = false, maxHeight, rowClassName, rowStyle, classNames = {}, styles = {}, className, style, emptyText = 'No data available', onChange, onPageChange, onSortChange, onFilterChange, onSearch, onRowClick, onRowDoubleClick, onClearFilters, toolbar, hideToolbar = false, showFooter = false, caption, ...rest } = props;
    // Refs
    const tableRef = useRef(null);
    // State
    const [internalSearchValue, setInternalSearchValue] = useState(defaultSearchValue);
    const [columnToggleOpen, setColumnToggleOpen] = useState(false);
    const [columnSearch, setColumnSearch] = useState('');
    const [editingCell, setEditingCell] = useState(null);
    const [editValue, setEditValue] = useState(null);
    const searchValue = controlledSearchValue ?? internalSearchValue;
    const debouncedSearchValue = useTableDebounce(searchValue, searchDebounce);
    // Sort state
    const { sort, handleSort } = useSortState(defaultSort, controlledSort);
    // Filter state
    const { filters, setFilter, clearFilters } = useFilterState(defaultFilters, controlledFilters);
    // Pagination state
    const { page, pageSize, totalPages, goToPage, goToNextPage, goToPrevPage, goToFirstPage, goToLastPage, changePageSize, } = usePaginationState(paginationConfig?.page || 0, paginationConfig?.pageSize || 10, totalSize ?? data.length);
    // Row selection
    const { selectedKeys, isSelected, toggleRow, toggleAll, isAllSelected, isIndeterminate, } = useRowSelection(data, rowSelection?.keyField || keyField, rowSelection?.mode || 'none', rowSelection?.selectedRowKeys, rowSelection?.getCheckboxProps);
    // Row expansion
    const { expandedKeys, isExpanded, toggleExpand } = useRowExpansion(expandable?.keyField || keyField, expandable?.defaultExpandedRowKeys, expandable?.expandedRowKeys, expandable?.accordion);
    // Column visibility
    const { visibleColumns, toggleColumn, isColumnHidden } = useColumnVisibility(columns, id);
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
    }, [data, filters, sort, page, pageSize, debouncedSearchValue, remote, pagination, columns]);
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
        onFilterChange?.({ ...filters, [field]: value });
        onChange?.({ type: 'filter', filters: { ...filters, [field]: value } });
    }, [filters, setFilter, onFilterChange, onChange]);
    // Handle clear all filters
    const handleClearFilters = useCallback(() => {
        clearFilters();
        setInternalSearchValue('');
        onClearFilters?.();
        onFilterChange?.({});
        onChange?.({ type: 'filter', filters: {} });
    }, [clearFilters, onClearFilters, onFilterChange, onChange]);
    // Handle page change
    const handlePageChange = useCallback((newPage) => {
        goToPage(newPage);
        onPageChange?.(newPage, pageSize);
        onChange?.({ type: 'pagination', pagination: { page: newPage, pageSize } });
    }, [goToPage, pageSize, onPageChange, onChange]);
    // Handle page size change
    const handlePageSizeChange = useCallback((newSize) => {
        changePageSize(newSize);
        onPageChange?.(0, newSize);
        onChange?.({ type: 'pagination', pagination: { page: 0, pageSize: newSize } });
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
    // Handle cell edit
    const handleCellDoubleClick = useCallback((row, rowIndex, column, e) => {
        if (editMode === 'none' || !column.editable)
            return;
        if (editMode === 'dblclick') {
            setEditingCell({ row: rowIndex, field: column.dataField });
            setEditValue(getNestedValue(row, column.dataField));
        }
        onRowDoubleClick?.(row, rowIndex, e);
    }, [editMode, onRowDoubleClick]);
    const handleCellClick = useCallback((row, rowIndex, column) => {
        if (editMode !== 'click' || !column.editable)
            return;
        setEditingCell({ row: rowIndex, field: column.dataField });
        setEditValue(getNestedValue(row, column.dataField));
    }, [editMode]);
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
            onCellEdit?.(editValue, column.dataField, row, rowIndex);
        }
        setEditingCell(null);
    }, [editingCell, editValue, onCellEdit]);
    // Handle export
    const handleExport = useCallback(() => {
        const exportData = remote ? data : filterData(data, filters, columns, debouncedSearchValue);
        exportToCSV(exportData, visibleColumns, exportFileName);
    }, [data, filters, columns, debouncedSearchValue, visibleColumns, exportFileName, remote]);
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
        const isEditing = editingCell?.row === rowIndex && editingCell?.field === column.dataField;
        if (isEditing) {
            return (_jsx(CellEditor, { type: column.editorType === 'number' ? 'number' : 'text', value: editValue ?? '', onChange: (e) => setEditValue(e.target.value), onBlur: () => handleCellEditComplete(row, rowIndex, column), onKeyDown: (e) => {
                    if (e.key === 'Enter') {
                        handleCellEditComplete(row, rowIndex, column);
                    }
                    if (e.key === 'Escape') {
                        setEditingCell(null);
                    }
                }, autoFocus: true }));
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
        return (_jsxs(Toolbar, { className: classNames.toolbar, style: styles.toolbar, children: [_jsxs(ToolbarGroup, { children: [searchable && (_jsxs(SearchInput, { children: [_jsx(SearchIcon, {}), _jsx("input", { type: "text", value: searchValue, onChange: (e) => handleSearchChange(e.target.value), placeholder: searchPlaceholder })] })), hasFilters && (_jsxs(ToolbarButton, { onClick: handleClearFilters, children: [_jsx(CloseIcon, {}), "Clear Filters"] }))] }), _jsxs(ToolbarGroup, { children: [exportable && (_jsxs(ToolbarButton, { onClick: handleExport, children: [_jsx(DownloadIcon, {}), "Export"] })), columnToggle && (_jsxs("div", { style: { position: 'relative' }, children: [_jsxs(ToolbarButton, { "$active": columnToggleOpen, onClick: () => setColumnToggleOpen(!columnToggleOpen), children: [_jsx(ColumnsIcon, {}), "Columns"] }), columnToggleOpen && (_jsxs(ColumnTogglePanel, { children: [_jsxs(ColumnToggleHeader, { children: [_jsx("span", { children: "Toggle Columns" }), _jsx("button", { onClick: () => setColumnToggleOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(ColumnToggleSearch, { children: _jsx("input", { type: "text", value: columnSearch, onChange: (e) => setColumnSearch(e.target.value), placeholder: "Search columns..." }) }), _jsx(ColumnToggleList, { children: filteredToggleColumns.map((column) => (_jsxs(ColumnToggleItem, { children: [_jsx("input", { type: "checkbox", checked: !isColumnHidden(column.dataField), onChange: () => toggleColumn(column.dataField) }), _jsx("span", { children: column.text })] }, column.dataField))) })] }))] }))] })] }));
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
    // Has any filter active
    const hasFilters = filterable && columns.some((c) => c.filter !== false);
    return (_jsxs(TableRoot, { ref: ref, "$bordered": bordered, "$compact": compact, className: className || classNames.root, style: { ...styles.root, ...style, position: 'relative' }, "aria-label": rest['aria-label'], "aria-labelledby": rest['aria-labelledby'], children: [loading && (_jsx(LoadingOverlay, { className: classNames.loading, style: styles.loading, children: loadingIndicator || _jsx(LoadingSpinner, {}) })), renderToolbar(), _jsx(TableWrapper, { "$maxHeight": maxHeight, "$stickyHeader": stickyHeader, className: classNames.wrapper, style: styles.wrapper, children: _jsxs(StyledTable, { ref: tableRef, "$striped": striped, "$hover": hover, "$compact": compact, role: "grid", children: [caption && _jsx("caption", { className: "sr-only", children: caption }), _jsxs(TableHeader, { "$sticky": stickyHeader, className: classNames.header, style: styles.header, children: [_jsxs(HeaderRow, { className: classNames.headerRow, style: styles.headerRow, children: [rowSelection?.mode === 'checkbox' && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": rowSelection.columnWidth || 40, children: !rowSelection.hideSelectAll && (_jsx(Checkbox, { checked: isAllSelected, ref: (el) => {
                                                    if (el)
                                                        el.indeterminate = isIndeterminate;
                                                }, onChange: handleSelectAllChange })) })), expandable && (_jsx(HeaderCell, { "$align": "center", "$sortable": false, "$compact": compact, "$width": expandable.columnWidth || 40 })), visibleColumns.map((column, colIndex) => (_jsxs(HeaderCell, { "$align": column.headerAlign || column.align || 'left', "$sortable": !!column.sort, "$compact": compact, "$width": column.width, "$minWidth": column.minWidth, "$pinned": column.pinned, className: column.headerClasses || classNames.headerCell, style: typeof column.headerStyle === 'function'
                                                ? column.headerStyle(column)
                                                : column.headerStyle || styles.headerCell, onClick: () => handleSortClick(column), role: "columnheader", "aria-sort": sort.field === column.dataField
                                                ? sort.order === 'asc'
                                                    ? 'ascending'
                                                    : sort.order === 'desc'
                                                        ? 'descending'
                                                        : 'none'
                                                : undefined, children: [column.headerFormatter
                                                    ? column.headerFormatter(column, colIndex)
                                                    : column.headerText || column.text, column.sort && (_jsxs(SortIcon, { "$active": sort.field === column.dataField, "$direction": sort.field === column.dataField ? sort.order || undefined : undefined, children: [_jsx(SortUpIcon, {}), _jsx(SortDownIcon, {})] }))] }, column.dataField)))] }), hasFilters && (_jsxs(FilterRow, { children: [rowSelection?.mode === 'checkbox' && _jsx(FilterCell, { "$compact": compact }), expandable && _jsx(FilterCell, { "$compact": compact }), visibleColumns.map((column) => {
                                            const FilterComponent = column.filterComponent ||
                                                getFilterComponent(column.filterType || 'text');
                                            return (_jsx(FilterCell, { "$compact": compact, children: column.filter !== false && (_jsx(FilterComponent, { column: column, value: filters[column.dataField], onChange: (value) => handleFilterChange(column.dataField, value), onClear: () => handleFilterChange(column.dataField, null) })) }, column.dataField));
                                        })] }))] }), _jsx(TableBody, { className: classNames.body, style: styles.body, children: processedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: visibleColumns.length +
                                        (rowSelection?.mode === 'checkbox' ? 1 : 0) +
                                        (expandable ? 1 : 0), children: _jsxs(EmptyState, { className: classNames.empty, style: styles.empty, children: [_jsx(EmptyIcon, {}), _jsx("span", { children: emptyText })] }) }) })) : (processedData.map((row, rowIndex) => {
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
                                                ? typeof rowSelection?.selectedRowClassName === 'function'
                                                    ? rowSelection.selectedRowClassName(row)
                                                    : rowSelection?.selectedRowClassName || ''
                                                : ''}`, style: { ...styles.row, ...rowStyles, ...selectedStyle }, onClick: (e) => handleRowClick(row, rowIndex, e), onDoubleClick: (e) => handleCellDoubleClick(row, rowIndex, visibleColumns[0], e), role: "row", "aria-selected": rowSelected, children: [rowSelection?.mode === 'checkbox' && (_jsx(TableCell, { "$align": "center", "$compact": compact, children: _jsx(Checkbox, { checked: rowSelected, disabled: checkboxProps?.disabled, onChange: (e) => handleCheckboxChange(row, e), onClick: (e) => e.stopPropagation() }) })), expandable && (_jsx(TableCell, { "$align": "center", "$compact": compact, children: isExpandable && (_jsx(ExpandButton, { "$expanded": rowExpanded, onClick: (e) => handleExpandClick(row, e), children: expandable.expandIcon ? (expandable.expandIcon({
                                                            expanded: rowExpanded,
                                                            row,
                                                            onExpand: () => toggleExpand(row),
                                                        })) : (_jsx(ExpandIcon, {})) })) })), visibleColumns.map((column, colIndex) => {
                                                    const cellClass = typeof column.classes === 'function'
                                                        ? column.classes(getNestedValue(row, column.dataField), row, rowIndex)
                                                        : column.classes;
                                                    const cellStyle = typeof column.style === 'function'
                                                        ? column.style(getNestedValue(row, column.dataField), row, rowIndex)
                                                        : column.style;
                                                    return (_jsx(TableCell, { "$align": column.align || 'left', "$compact": compact, "$pinned": column.pinned, className: cellClass || classNames.cell, style: { ...styles.cell, ...cellStyle }, onClick: () => handleCellClick(row, rowIndex, column), onDoubleClick: (e) => handleCellDoubleClick(row, rowIndex, column, e), role: "gridcell", children: column.editable && editMode !== 'none' ? (_jsx(EditableCell, { "$editing": editingCell?.row === rowIndex &&
                                                                editingCell?.field === column.dataField, children: renderCellContent(row, column, rowIndex, colIndex) })) : (renderCellContent(row, column, rowIndex, colIndex)) }, column.dataField));
                                                })] }), expandable && rowExpanded && isExpandable && (_jsx(ExpandedRow, { children: _jsx(ExpandedCell, { colSpan: visibleColumns.length +
                                                    (rowSelection?.mode === 'checkbox' ? 1 : 0) +
                                                    1, children: expandable.expandedRowRender?.(row, rowIndex, rowExpanded) }) }))] }, rowKey));
                            })) }), showFooter && (_jsx(TableFooter, { className: classNames.footer, style: styles.footer, children: _jsxs(FooterRow, { className: classNames.footerRow, style: styles.footerRow, children: [rowSelection?.mode === 'checkbox' && (_jsx(FooterCell, { "$align": "center", "$compact": compact })), expandable && _jsx(FooterCell, { "$align": "center", "$compact": compact }), visibleColumns.map((column) => (_jsx(FooterCell, { "$align": column.align || 'left', "$compact": compact, className: classNames.footerCell, style: styles.footerCell, children: typeof column.footer === 'function'
                                            ? column.footer(column, data)
                                            : column.footerFormatter
                                                ? column.footerFormatter(column, data)
                                                : column.footer }, column.dataField)))] }) }))] }) }), renderPagination()] }));
});
Table.displayName = 'Table';
export default Table;
