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
// ---------------------------------------------------------------------------
// Internal helpers for ExcelJS styling
// ---------------------------------------------------------------------------
// ─── Canvas chart renderer (no external dependencies) ───────────────────────
const CHART_PALETTE = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
    '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1',
];
function resolveChartColor(colorProp, index) {
    if (Array.isArray(colorProp)) {
        return colorProp[index % colorProp.length] ?? CHART_PALETTE[index % CHART_PALETTE.length];
    }
    return colorProp ?? CHART_PALETTE[index % CHART_PALETTE.length];
}
/** Draw a horizontal legend row at the bottom of the canvas */
function drawChartLegend(ctx, labels, colors, canvasW, canvasH, legendAreaH) {
    const boxSize = 10;
    const colCount = Math.max(1, Math.floor(canvasW / 130));
    const startX = 16;
    const startY = canvasH - legendAreaH + 8;
    ctx.font = '10px Arial, sans-serif';
    labels.forEach((label, i) => {
        const col = i % colCount;
        const row = Math.floor(i / colCount);
        const x = startX + col * Math.floor(canvasW / colCount);
        const y = startY + row * 16;
        ctx.fillStyle = colors[i] ?? CHART_PALETTE[i % CHART_PALETTE.length];
        ctx.fillRect(x, y, boxSize, boxSize);
        ctx.fillStyle = '#374151';
        ctx.textAlign = 'left';
        const txt = label.length > 15 ? label.slice(0, 14) + '…' : label;
        ctx.fillText(txt, x + boxSize + 4, y + 9);
    });
}
/** Y-axis grid lines + labels shared by bar and line charts */
function drawYGrid(ctx, ax, ay, aw, ah, maxV) {
    ctx.font = '10px Arial, sans-serif';
    for (let gi = 0; gi <= 5; gi++) {
        const val = (maxV * gi) / 5;
        const y = ay + ah - (val / maxV) * ah;
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(ax, y);
        ctx.lineTo(ax + aw, y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#6b7280';
        ctx.textAlign = 'right';
        const lbl = val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val.toFixed(0);
        ctx.fillText(lbl, ax - 6, y + 4);
    }
}
/** Draw the L-shaped axis lines */
function drawAxes(ctx, ax, ay, aw, ah) {
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax, ay + ah);
    ctx.lineTo(ax + aw, ay + ah);
    ctx.stroke();
}
function drawBarChart(ctx, W, H, chart, titleH) {
    const legendH = 28;
    const pd = { top: titleH + 10, right: 24, bottom: legendH + 42, left: 64 };
    const ax = pd.left, ay = pd.top;
    const aw = W - pd.left - pd.right;
    const ah = H - pd.top - pd.bottom;
    const { labels, datasets } = chart;
    if (!labels.length || !datasets.length)
        return;
    const allVals = datasets.flatMap(d => d.values ?? []).filter(isFinite);
    const maxV = Math.max(...allVals, 0) || 1;
    const N = labels.length;
    const D = datasets.length;
    const gW = aw / N;
    const bPad = gW * 0.12;
    const bW = Math.max(4, (gW - bPad * 2) / D);
    drawYGrid(ctx, ax, ay, aw, ah, maxV);
    datasets.forEach((ds, di) => {
        const color = resolveChartColor(ds.backgroundColor ?? ds.color, di);
        (ds.values ?? []).forEach((val, li) => {
            if (li >= N)
                return;
            const bH = Math.max(0, (val / maxV) * ah);
            const x = ax + li * gW + bPad + di * bW;
            const y = ay + ah - bH;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, bW - 2, bH);
        });
    });
    drawAxes(ctx, ax, ay, aw, ah);
    ctx.fillStyle = '#374151';
    ctx.font = '10px Arial, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, li) => {
        const x = ax + li * gW + gW / 2;
        const maxCh = Math.max(3, Math.floor(gW / 7));
        const txt = label.length > maxCh ? label.slice(0, maxCh - 1) + '…' : label;
        ctx.fillText(txt, x, ay + ah + 16);
    });
    drawChartLegend(ctx, datasets.map(d => d.label), datasets.map((ds, i) => resolveChartColor(ds.backgroundColor ?? ds.color, i)), W, H, legendH);
}
function drawLineChart(ctx, W, H, chart, titleH) {
    const legendH = 28;
    const pd = { top: titleH + 10, right: 24, bottom: legendH + 42, left: 64 };
    const ax = pd.left, ay = pd.top;
    const aw = W - pd.left - pd.right;
    const ah = H - pd.top - pd.bottom;
    const { labels, datasets } = chart;
    if (!labels.length || !datasets.length)
        return;
    const allVals = datasets.flatMap(d => d.values ?? []).filter(isFinite);
    const maxV = Math.max(...allVals, 0) || 1;
    const N = labels.length;
    const stepX = N > 1 ? aw / (N - 1) : aw;
    drawYGrid(ctx, ax, ay, aw, ah, maxV);
    datasets.forEach((ds, di) => {
        const color = resolveChartColor(ds.color, di);
        const pts = (ds.values ?? []).slice(0, N).map((val, li) => ({
            x: ax + li * stepX,
            y: ay + ah - (Math.max(0, val) / maxV) * ah,
        }));
        if (!pts.length)
            return;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.setLineDash([]);
        ctx.beginPath();
        pts.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
        ctx.stroke();
        pts.forEach(pt => {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    });
    drawAxes(ctx, ax, ay, aw, ah);
    ctx.fillStyle = '#374151';
    ctx.font = '10px Arial, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, li) => {
        const x = ax + li * stepX;
        const maxCh = Math.max(3, Math.floor(stepX / 7));
        const txt = label.length > maxCh ? label.slice(0, maxCh - 1) + '…' : label;
        ctx.fillText(txt, x, ay + ah + 16);
    });
    drawChartLegend(ctx, datasets.map(d => d.label), datasets.map((ds, i) => resolveChartColor(ds.color, i)), W, H, legendH);
}
function drawPieChart(ctx, W, H, chart, isDoughnut, titleH) {
    const ds = chart.datasets[0];
    const values = ds?.values ?? [];
    const total = values.reduce((s, v) => s + v, 0);
    if (!total)
        return;
    const cols = Math.min(values.length, 3);
    const legendRows = Math.ceil(values.length / cols);
    const legendAreaH = legendRows * 16 + 14;
    const chartAreaH = H - titleH - legendAreaH;
    const cx = W / 2;
    const cy = titleH + chartAreaH / 2;
    const R = Math.min(W * 0.38, chartAreaH * 0.46);
    const innerR = isDoughnut ? R * 0.55 : 0;
    const sliceColors = values.map((_, i) => CHART_PALETTE[i % CHART_PALETTE.length]);
    let startAngle = -Math.PI / 2;
    values.forEach((val, i) => {
        const sweep = (val / total) * 2 * Math.PI;
        ctx.fillStyle = sliceColors[i];
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, startAngle, startAngle + sweep);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        startAngle += sweep;
    });
    if (isDoughnut) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(cx, cy, innerR, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = '#374151';
        ctx.textAlign = 'center';
        ctx.font = 'bold 11px Arial, sans-serif';
        ctx.fillText('Total', cx, cy - 5);
        ctx.font = '11px Arial, sans-serif';
        const totLabel = total >= 1000 ? `${(total / 1000).toFixed(1)}k` : String(total);
        ctx.fillText(totLabel, cx, cy + 11);
    }
    // Legend
    const startY = H - legendAreaH + 6;
    const itemW = W / cols;
    values.forEach((val, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const lx = col * itemW + 16;
        const ly = startY + row * 16;
        const pct = ((val / total) * 100).toFixed(1);
        const rawLabel = chart.labels[i] ?? `Item ${i + 1}`;
        const label = rawLabel.length > 16 ? rawLabel.slice(0, 15) + '…' : rawLabel;
        ctx.fillStyle = sliceColors[i];
        ctx.fillRect(lx, ly, 10, 10);
        ctx.fillStyle = '#374151';
        ctx.textAlign = 'left';
        ctx.font = '10px Arial, sans-serif';
        ctx.fillText(`${label}: ${pct}%`, lx + 14, ly + 9);
    });
}
/**
 * Render an ExportChart to a PNG base64 string using the browser Canvas API.
 * Returns an empty string if called outside a browser (e.g. SSR).
 */
async function generateChartBase64(chart) {
    if (typeof document === 'undefined')
        return '';
    const W = chart.width ?? 600;
    const H = chart.height ?? 350;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return '';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, W - 1, H - 1);
    let titleH = 10;
    if (chart.title) {
        titleH = 34;
        ctx.fillStyle = '#111827';
        ctx.font = 'bold 14px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(chart.title, W / 2, 22);
    }
    switch (chart.type) {
        case 'bar':
            drawBarChart(ctx, W, H, chart, titleH);
            break;
        case 'line':
            drawLineChart(ctx, W, H, chart, titleH);
            break;
        case 'pie':
            drawPieChart(ctx, W, H, chart, false, titleH);
            break;
        case 'doughnut':
            drawPieChart(ctx, W, H, chart, true, titleH);
            break;
    }
    return canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
}
/**
 * Embed ExportChart images into an ExcelJS worksheet below afterRowIndex.
 * Charts are stacked vertically when multiple are provided.
 */
async function addChartsToWorksheet(workbook, worksheet, charts, afterRowIndex) {
    let nextRow = afterRowIndex;
    for (const chart of charts) {
        const base64 = await generateChartBase64(chart);
        if (!base64)
            continue;
        const imageId = workbook.addImage({ base64, extension: 'png' });
        const startRow = nextRow + (chart.rowOffset ?? 2);
        const startCol = chart.colOffset ?? 0;
        const rowSpan = chart.rowSpan ?? 20;
        const colSpan = chart.colSpan ?? 8;
        worksheet.addImage(imageId, {
            tl: { col: startCol, row: startRow },
            br: { col: startCol + colSpan, row: startRow + rowSpan },
            editAs: 'oneCell',
        });
        nextRow = startRow + rowSpan;
    }
}
function toArgb(hex, fallback) {
    return `FF${(hex ?? fallback).replace('#', '').toUpperCase().padStart(6, '0')}`;
}
/**
 * Write a block of rows (data + column definitions) into an ExcelJS worksheet.
 * Returns the 1-based index of the last written row.
 */
function writeSheetData(worksheet, exportColumns, data, headerStyle) {
    const cols = exportColumns.filter((c) => c.csvExport !== false);
    worksheet.columns = cols.map((col) => ({
        header: col.text,
        key: col.dataField,
        width: Math.max(col.text.length + 5, 15),
    }));
    // Style the header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = {
        bold: headerStyle?.font?.bold ?? true,
        size: headerStyle?.font?.size ?? 12,
        color: { argb: toArgb(headerStyle?.font?.color, '#FFFFFF') },
    };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: toArgb(headerStyle?.fill?.color, '#6b7280') },
    };
    headerRow.commit();
    // Write data rows
    data.forEach((row, rowIndex) => {
        const rowData = {};
        cols.forEach((col) => {
            const raw = getNestedValue(row, col.dataField);
            const value = col.csvFormatter ? col.csvFormatter(raw, row, rowIndex) : raw;
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
    // Return index of last data row (1-indexed header + data rows)
    return 1 + data.length;
}
/**
 * Append ExportSummaryRow entries after the last data row of a worksheet.
 */
function writeSummaryRows(worksheet, exportColumns, summaryRows, lastDataRowIndex) {
    const cols = exportColumns.filter((c) => c.csvExport !== false);
    summaryRows.forEach((summaryRow, si) => {
        const rowData = {};
        cols.forEach((col) => {
            rowData[col.dataField] = summaryRow.values[col.dataField] ?? '';
        });
        const excelRow = worksheet.addRow(rowData);
        const excelRowIndex = lastDataRowIndex + si + 1;
        // Row-level styling defaults
        const rowBg = summaryRow.backgroundColor;
        const rowColor = summaryRow.color;
        const rowBold = summaryRow.bold;
        const rowFontSize = summaryRow.fontSize;
        cols.forEach((col) => {
            const cell = excelRow.getCell(col.dataField);
            const cellOverride = summaryRow.cellStyles?.[col.dataField];
            // Fill (background)
            const bg = cellOverride?.backgroundColor ?? rowBg;
            if (bg) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: toArgb(bg, bg) },
                };
            }
            // Font
            const fontColor = cellOverride?.color ?? rowColor;
            const isBold = cellOverride?.bold ?? rowBold;
            const fontSize = cellOverride?.fontSize ?? rowFontSize;
            if (fontColor !== undefined || isBold !== undefined || fontSize !== undefined) {
                cell.font = {
                    ...(isBold !== undefined ? { bold: isBold } : {}),
                    ...(fontSize !== undefined ? { size: fontSize } : {}),
                    ...(fontColor ? { color: { argb: toArgb(fontColor, fontColor) } } : {}),
                };
            }
            // Number format
            if (cellOverride?.numFmt) {
                cell.numFmt = cellOverride.numFmt;
            }
            // Alignment
            const align = cellOverride?.align;
            if (align) {
                cell.alignment = { horizontal: align };
            }
        });
        excelRow.commit();
        void excelRowIndex; // suppress unused-var warning
    });
}
/**
 * Export data to Excel (.xlsx) - loads ExcelJS dynamically from CDN.
 *
 * Supports:
 *  - Custom header styles
 *  - Summary rows at the bottom of the main sheet
 *  - Extra sheets (Sheet2, Sheet3 …) each with their own data / columns /
 *    header styles / summary rows
 */
export async function exportToExcel(data, columns, fileName, options) {
    try {
        const ExcelJS = await loadExcelJS();
        const workbook = new ExcelJS.Workbook();
        // -----------------------------------------------------------------------
        // Main sheet
        // -----------------------------------------------------------------------
        const worksheet = workbook.addWorksheet(options?.sheetName || 'Sheet1');
        const lastDataRow = writeSheetData(worksheet, columns, data, options?.headerStyle);
        let afterMainRow = lastDataRow;
        if (options?.summaryRows?.length) {
            writeSummaryRows(worksheet, columns, options.summaryRows, lastDataRow);
            afterMainRow = lastDataRow + options.summaryRows.length;
        }
        if (options?.charts?.length) {
            await addChartsToWorksheet(workbook, worksheet, options.charts, afterMainRow);
        }
        // -----------------------------------------------------------------------
        // Extra sheets (for...of so each async chart render is awaited in order)
        // -----------------------------------------------------------------------
        if (options?.extraSheets?.length) {
            for (const [idx, sheet] of options.extraSheets.entries()) {
                const sheetName = sheet.name || `Sheet${idx + 2}`;
                const extraWs = workbook.addWorksheet(sheetName);
                const extraHeaderStyle = sheet.headerStyle
                    ? {
                        font: {
                            bold: sheet.headerStyle.bold,
                            color: sheet.headerStyle.color,
                            size: sheet.headerStyle.fontSize,
                        },
                        fill: { color: sheet.headerStyle.backgroundColor },
                    }
                    : undefined;
                const lastExtra = writeSheetData(extraWs, sheet.columns, sheet.data, extraHeaderStyle);
                let afterExtra = lastExtra;
                if (sheet.summaryRows?.length) {
                    writeSummaryRows(extraWs, sheet.columns, sheet.summaryRows, lastExtra);
                    afterExtra = lastExtra + sheet.summaryRows.length;
                }
                if (sheet.charts?.length) {
                    await addChartsToWorksheet(workbook, extraWs, sheet.charts, afterExtra);
                }
            }
        }
        // -----------------------------------------------------------------------
        // Generate and download
        // -----------------------------------------------------------------------
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
        console.warn('Falling back to CSV export');
        exportToCSV(data, columns, fileName);
    }
}
