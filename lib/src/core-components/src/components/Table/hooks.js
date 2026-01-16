import { useState, useCallback, useMemo, useEffect } from 'react';
/**
 * Debounce function for table
 */
export function useTableDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}
/**
 * Hook for managing sort state
 */
export function useSortState(defaultSort, controlledSort, multiSort = false) {
    const [internalSort, setInternalSort] = useState(defaultSort || { field: '', order: null });
    const sort = controlledSort ?? internalSort;
    const handleSort = useCallback((field, currentOrder) => {
        let nextOrder;
        if (sort.field !== field) {
            nextOrder = 'asc';
        }
        else if (currentOrder === null) {
            nextOrder = 'asc';
        }
        else if (currentOrder === 'asc') {
            nextOrder = 'desc';
        }
        else {
            nextOrder = null;
        }
        const newSort = { field, order: nextOrder };
        setInternalSort(newSort);
        return newSort;
    }, [sort.field]);
    return { sort, handleSort, setSort: setInternalSort };
}
/**
 * Hook for managing filter state
 */
export function useFilterState(defaultFilters, controlledFilters) {
    const [internalFilters, setInternalFilters] = useState(defaultFilters || {});
    const filters = controlledFilters ?? internalFilters;
    const setFilter = useCallback((field, value) => {
        setInternalFilters((prev) => {
            if (value === undefined || value === null || value === '') {
                const { [field]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [field]: value };
        });
    }, []);
    const clearFilters = useCallback(() => {
        setInternalFilters({});
    }, []);
    return { filters, setFilter, clearFilters, setFilters: setInternalFilters };
}
/**
 * Hook for managing pagination state
 */
export function usePaginationState(defaultPage = 0, defaultPageSize = 10, totalSize = 0) {
    const [page, setPage] = useState(defaultPage);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const totalPages = Math.ceil(totalSize / pageSize) || 1;
    const goToPage = useCallback((newPage) => {
        const validPage = Math.max(0, Math.min(newPage, totalPages - 1));
        setPage(validPage);
    }, [totalPages]);
    const goToNextPage = useCallback(() => {
        goToPage(page + 1);
    }, [page, goToPage]);
    const goToPrevPage = useCallback(() => {
        goToPage(page - 1);
    }, [page, goToPage]);
    const goToFirstPage = useCallback(() => {
        goToPage(0);
    }, [goToPage]);
    const goToLastPage = useCallback(() => {
        goToPage(totalPages - 1);
    }, [totalPages, goToPage]);
    const changePageSize = useCallback((newSize) => {
        setPageSize(newSize);
        setPage(0); // Reset to first page
    }, []);
    return {
        page,
        pageSize,
        totalPages,
        goToPage,
        goToNextPage,
        goToPrevPage,
        goToFirstPage,
        goToLastPage,
        changePageSize,
        setPage,
        setPageSize,
    };
}
/**
 * Hook for managing row selection
 */
export function useRowSelection(data, keyField = '_id', mode = 'none', controlledSelectedKeys, getCheckboxProps) {
    const [internalSelected, setInternalSelected] = useState(new Set());
    const selectedKeys = controlledSelectedKeys
        ? new Set(controlledSelectedKeys)
        : internalSelected;
    const isSelected = useCallback((key) => selectedKeys.has(key), [selectedKeys]);
    const toggleRow = useCallback((row) => {
        const key = row[keyField];
        const props = getCheckboxProps?.(row);
        if (props?.disabled)
            return;
        if (mode === 'single') {
            setInternalSelected(new Set([key]));
            return { selectedKeys: [key], selectedRows: [row] };
        }
        setInternalSelected((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            }
            else {
                next.add(key);
            }
            return next;
        });
        const newSelected = selectedKeys.has(key)
            ? Array.from(selectedKeys).filter((k) => k !== key)
            : [...Array.from(selectedKeys), key];
        return {
            selectedKeys: newSelected,
            selectedRows: data.filter((r) => newSelected.includes(r[keyField])),
        };
    }, [data, keyField, mode, selectedKeys, getCheckboxProps]);
    const toggleAll = useCallback((selectAll) => {
        if (selectAll) {
            const selectableKeys = data
                .filter((row) => {
                const props = getCheckboxProps?.(row);
                return !props?.disabled;
            })
                .map((row) => row[keyField]);
            setInternalSelected(new Set(selectableKeys));
            return {
                selectedKeys: selectableKeys,
                selectedRows: data.filter((r) => selectableKeys.includes(r[keyField])),
            };
        }
        else {
            setInternalSelected(new Set());
            return { selectedKeys: [], selectedRows: [] };
        }
    }, [data, keyField, getCheckboxProps]);
    const isAllSelected = useMemo(() => {
        if (data.length === 0)
            return false;
        const selectableRows = data.filter((row) => {
            const props = getCheckboxProps?.(row);
            return !props?.disabled;
        });
        return selectableRows.every((row) => selectedKeys.has(row[keyField]));
    }, [data, selectedKeys, keyField, getCheckboxProps]);
    const isIndeterminate = useMemo(() => {
        if (data.length === 0)
            return false;
        const selectableRows = data.filter((row) => {
            const props = getCheckboxProps?.(row);
            return !props?.disabled;
        });
        const selectedCount = selectableRows.filter((row) => selectedKeys.has(row[keyField])).length;
        return selectedCount > 0 && selectedCount < selectableRows.length;
    }, [data, selectedKeys, keyField, getCheckboxProps]);
    const clearSelection = useCallback(() => {
        setInternalSelected(new Set());
    }, []);
    return {
        selectedKeys,
        isSelected,
        toggleRow,
        toggleAll,
        isAllSelected,
        isIndeterminate,
        clearSelection,
        setSelected: setInternalSelected,
    };
}
/**
 * Hook for managing row expansion
 */
export function useRowExpansion(keyField = '_id', defaultExpandedKeys, controlledExpandedKeys, accordion = false) {
    const [internalExpanded, setInternalExpanded] = useState(new Set(defaultExpandedKeys || []));
    const expandedKeys = controlledExpandedKeys
        ? new Set(controlledExpandedKeys)
        : internalExpanded;
    const isExpanded = useCallback((key) => expandedKeys.has(key), [expandedKeys]);
    const toggleExpand = useCallback((row) => {
        const key = row[keyField];
        setInternalExpanded((prev) => {
            const next = accordion ? new Set() : new Set(prev);
            if (prev.has(key)) {
                next.delete(key);
            }
            else {
                next.add(key);
            }
            return next;
        });
        const newExpanded = expandedKeys.has(key)
            ? Array.from(expandedKeys).filter((k) => k !== key)
            : accordion
                ? [key]
                : [...Array.from(expandedKeys), key];
        return { expandedKeys: newExpanded, expanded: !expandedKeys.has(key), row };
    }, [keyField, expandedKeys, accordion]);
    return {
        expandedKeys,
        isExpanded,
        toggleExpand,
        setExpanded: setInternalExpanded,
    };
}
/**
 * Hook for managing column visibility
 */
export function useColumnVisibility(columns, storageKey) {
    const [hiddenColumns, setHiddenColumns] = useState(() => {
        // Load from storage if available
        if (storageKey && typeof window !== 'undefined') {
            const stored = localStorage.getItem(`table_columns_${storageKey}`);
            if (stored) {
                try {
                    return new Set(JSON.parse(stored));
                }
                catch (e) {
                    // Ignore
                }
            }
        }
        return new Set(columns.filter((c) => c.hidden).map((c) => c.dataField));
    });
    const visibleColumns = useMemo(() => columns.filter((c) => !hiddenColumns.has(c.dataField)), [columns, hiddenColumns]);
    const toggleColumn = useCallback((dataField) => {
        setHiddenColumns((prev) => {
            const next = new Set(prev);
            if (next.has(dataField)) {
                next.delete(dataField);
            }
            else {
                next.add(dataField);
            }
            // Save to storage
            if (storageKey && typeof window !== 'undefined') {
                localStorage.setItem(`table_columns_${storageKey}`, JSON.stringify(Array.from(next)));
            }
            return next;
        });
    }, [storageKey]);
    const showAllColumns = useCallback(() => {
        setHiddenColumns(new Set());
        if (storageKey && typeof window !== 'undefined') {
            localStorage.removeItem(`table_columns_${storageKey}`);
        }
    }, [storageKey]);
    return {
        hiddenColumns,
        visibleColumns,
        toggleColumn,
        showAllColumns,
        isColumnHidden: (field) => hiddenColumns.has(field),
    };
}
/**
 * Sort data locally
 */
export function sortData(data, sort, columns) {
    if (!sort.field || !sort.order)
        return data;
    const column = columns.find((c) => c.dataField === sort.field);
    if (!column)
        return data;
    const sorted = [...data].sort((a, b) => {
        const aVal = getNestedValue(a, sort.field);
        const bVal = getNestedValue(b, sort.field);
        if (column.sortFunc) {
            return column.sortFunc(aVal, bVal, sort.order, a, b);
        }
        // Default sorting
        if (aVal === bVal)
            return 0;
        if (aVal === null || aVal === undefined)
            return 1;
        if (bVal === null || bVal === undefined)
            return -1;
        const comparison = typeof aVal === 'string'
            ? aVal.localeCompare(bVal)
            : aVal < bVal
                ? -1
                : 1;
        return sort.order === 'asc' ? comparison : -comparison;
    });
    return sorted;
}
/**
 * Filter data locally
 */
export function filterData(data, filters, columns, searchValue) {
    let filtered = data;
    // Apply column filters
    for (const [field, value] of Object.entries(filters)) {
        if (value === undefined || value === null || value === '')
            continue;
        const column = columns.find((c) => c.dataField === field);
        if (!column)
            continue;
        filtered = filtered.filter((row) => {
            const cellValue = getNestedValue(row, field);
            if (typeof value === 'object' && value !== null) {
                // Complex filter (number range, date range, etc.)
                if ('number' in value && 'comparator' in value) {
                    return compareNumber(cellValue, value.number, value.comparator);
                }
                if ('startDate' in value) {
                    return compareDateRange(cellValue, value);
                }
                return true;
            }
            // Simple text filter
            if (cellValue === null || cellValue === undefined)
                return false;
            return String(cellValue)
                .toLowerCase()
                .includes(String(value).toLowerCase());
        });
    }
    // Apply global search
    if (searchValue) {
        const searchLower = searchValue.toLowerCase();
        filtered = filtered.filter((row) => {
            return columns.some((column) => {
                const value = getNestedValue(row, column.dataField);
                if (value === null || value === undefined)
                    return false;
                return String(value).toLowerCase().includes(searchLower);
            });
        });
    }
    return filtered;
}
/**
 * Paginate data locally
 */
export function paginateData(data, page, pageSize) {
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
}
/**
 * Get nested value from object
 */
export function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
}
/**
 * Compare numbers with comparator
 */
function compareNumber(value, filterValue, comparator) {
    const num = parseFloat(value);
    const filterNum = parseFloat(filterValue);
    if (isNaN(num) || isNaN(filterNum))
        return false;
    switch (comparator) {
        case '=':
            return num === filterNum;
        case '!=':
            return num !== filterNum;
        case '>':
            return num > filterNum;
        case '>=':
            return num >= filterNum;
        case '<':
            return num < filterNum;
        case '<=':
            return num <= filterNum;
        default:
            return true;
    }
}
/**
 * Compare date range
 */
function compareDateRange(value, filter) {
    if (!value)
        return false;
    const date = new Date(value);
    if (isNaN(date.getTime()))
        return false;
    if (filter.diffFlag && filter.startDate && filter.endDate) {
        const start = new Date(filter.startDate);
        const end = new Date(filter.endDate);
        return date >= start && date <= end;
    }
    if (filter.startDate) {
        const start = new Date(filter.startDate);
        switch (filter.comparator) {
            case '=':
                return date.toDateString() === start.toDateString();
            case '>=':
                return date >= start;
            case '<':
                return date < start;
            default:
                return date >= start;
        }
    }
    return true;
}
/**
 * Export data to CSV
 */
export function exportToCSV(data, columns, fileName) {
    const exportColumns = columns.filter((c) => c.csvExport !== false);
    // Header row
    const header = exportColumns.map((c) => `"${c.text}"`).join(',');
    // Data rows
    const rows = data.map((row, rowIndex) => {
        return exportColumns
            .map((col) => {
            const value = col.csvFormatter
                ? col.csvFormatter(getNestedValue(row, col.dataField), row, rowIndex)
                : getNestedValue(row, col.dataField);
            if (value === null || value === undefined)
                return '""';
            if (typeof value === 'string')
                return `"${value.replace(/"/g, '""')}"`;
            if (typeof value === 'object')
                return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
            return `"${value}"`;
        })
            .join(',');
    });
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}
/**
 * Dynamically load ExcelJS from CDN (no bundle impact)
 */
async function loadExcelJS() {
    // Check if already loaded
    if (window.ExcelJS) {
        return window.ExcelJS;
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
            'https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js';
        script.async = true;
        script.onload = () => resolve(window.ExcelJS);
        script.onerror = () => reject(new Error('Failed to load ExcelJS from CDN'));
        document.head.appendChild(script);
    });
}
/**
 * Export data to Excel (.xlsx) - loads ExcelJS dynamically from CDN
 */
export async function exportToExcel(data, columns, fileName, options) {
    try {
        const ExcelJS = await loadExcelJS();
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet(options?.sheetName || 'Sheet1');
        const exportColumns = columns.filter((c) => c.csvExport !== false);
        // Set up columns with headers
        worksheet.columns = exportColumns.map((col) => ({
            header: col.text,
            key: col.dataField,
            width: Math.max(col.text.length + 5, 15),
        }));
        // Style header row
        const headerRow = worksheet.getRow(1);
        headerRow.font = {
            bold: options?.headerStyle?.font?.bold ?? true,
            size: options?.headerStyle?.font?.size ?? 12,
        };
        if (options?.headerStyle?.fill?.color) {
            headerRow.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: options.headerStyle.fill.color.replace('#', '') },
            };
        }
        headerRow.commit();
        // Add data rows
        data.forEach((row, rowIndex) => {
            const rowData = {};
            exportColumns.forEach((col) => {
                const value = col.csvFormatter
                    ? col.csvFormatter(getNestedValue(row, col.dataField), row, rowIndex)
                    : getNestedValue(row, col.dataField);
                if (value === null || value === undefined) {
                    rowData[col.dataField] = '';
                }
                else if (typeof value === 'object') {
                    rowData[col.dataField] = JSON.stringify(value);
                }
                else {
                    rowData[col.dataField] = value;
                }
            });
            worksheet.addRow(rowData);
        });
        // Generate and download
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}_${new Date().toISOString().slice(0, 10)}.xlsx`;
        link.click();
        URL.revokeObjectURL(url);
    }
    catch (error) {
        console.error('Excel export failed:', error);
        // Fallback to CSV if Excel export fails
        console.warn('Falling back to CSV export');
        exportToCSV(data, columns, fileName);
    }
}
