/**
 * AG Grid-like Types
 * Comprehensive type definitions matching AG Grid's API
 * Reference: https://www.ag-grid.com/react-data-grid/getting-started/
 */
import React, { CSSProperties, ReactNode } from 'react';
/** Sort direction for columns */
export type SortDirection = 'asc' | 'desc' | null;
/** Filter type options */
export type FilterType = 'text' | 'number' | 'date' | 'set' | 'multi' | 'custom';
/** Column alignment */
export type ColumnAlign = 'left' | 'center' | 'right';
/** Row selection mode */
export type RowSelectionMode = 'single' | 'multiple';
/** Cell edit trigger mode */
export type EditTrigger = 'click' | 'doubleClick';
/** Column pinning position */
export type PinDirection = 'left' | 'right' | null;
/** Row model type */
export type RowModelType = 'clientSide' | 'serverSide' | 'infinite' | 'viewport';
/** Pagination position */
export type PaginationPosition = 'top' | 'bottom' | 'both';
/** Theme variants */
export type ThemeVariant = 'alpine' | 'alpine-dark' | 'balham' | 'balham-dark' | 'material' | 'quartz' | 'quartz-dark';
/** Cell renderer params passed to custom cell renderers */
export interface CellRendererParams<T = any> {
    value: any;
    data: T;
    node: RowNode<T>;
    rowIndex: number;
    colDef: ColDef<T>;
    column: Column<T>;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
    refreshCell: () => void;
    eGridCell: HTMLElement | null;
    getValue: () => any;
    setValue: (value: any) => void;
}
/** Header component params */
export interface HeaderComponentParams<T = any> {
    column: Column<T>;
    colDef: ColDef<T>;
    displayName: string;
    enableSorting: boolean;
    enableMenu: boolean;
    showColumnMenu: (source: HTMLElement) => void;
    progressSort: (multiSort: boolean) => void;
    setSort: (sort: SortDirection, multiSort?: boolean) => void;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
}
/** Cell editor params */
export interface CellEditorParams<T = any> {
    value: any;
    data: T;
    node: RowNode<T>;
    rowIndex: number;
    colDef: ColDef<T>;
    column: Column<T>;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
    cellStartedEdit: boolean;
    onKeyDown: (event: KeyboardEvent) => void;
    stopEditing: (suppressNavigateAfterEdit?: boolean) => void;
    eGridCell: HTMLElement | null;
    parseValue: (value: any) => any;
    formatValue: (value: any) => any;
}
/** Filter component params */
export interface FilterParams<T = any> {
    column: Column<T>;
    colDef: ColDef<T>;
    rowModel: any;
    filterChangedCallback: () => void;
    filterModifiedCallback: () => void;
    valueGetter: (node: RowNode<T>) => any;
    doesRowPassOtherFilter: (node: RowNode<T>) => boolean;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
}
/** Value formatter params */
export interface ValueFormatterParams<T = any> {
    value: any;
    data: T;
    node: RowNode<T>;
    colDef: ColDef<T>;
    column: Column<T>;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
}
/** Value getter params */
export interface ValueGetterParams<T = any> {
    data: T;
    node: RowNode<T>;
    colDef: ColDef<T>;
    column: Column<T>;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
    getValue: (field: string) => any;
}
/** Value setter params */
export interface ValueSetterParams<T = any> {
    oldValue: any;
    newValue: any;
    data: T;
    node: RowNode<T>;
    colDef: ColDef<T>;
    column: Column<T>;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
}
/** Column Definition - Main configuration for each column */
export interface ColDef<T = any> {
    /** Unique column identifier */
    colId?: string;
    /** Field name from row data to display */
    field?: string;
    /** Column header text */
    headerName?: string;
    /** Header tooltip */
    headerTooltip?: string;
    /** Custom header component */
    headerComponent?: React.ComponentType<HeaderComponentParams<T>>;
    /** Header component params */
    headerComponentParams?: Record<string, any>;
    /** Header class */
    headerClass?: string | string[] | ((params: HeaderComponentParams<T>) => string | string[]);
    /** Custom cell renderer */
    cellRenderer?: React.ComponentType<CellRendererParams<T>> | string;
    /** Cell renderer params */
    cellRendererParams?: Record<string, any>;
    /** Value formatter for display */
    valueFormatter?: (params: ValueFormatterParams<T>) => string;
    /** Value getter for extracting data */
    valueGetter?: (params: ValueGetterParams<T>) => any;
    /** Tooltip value getter */
    tooltipValueGetter?: (params: CellRendererParams<T>) => string;
    /** Enable cell tooltips */
    tooltipField?: string;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Header text alignment */
    headerAlign?: 'left' | 'center' | 'right';
    /** Cell class */
    cellClass?: string | string[] | ((params: CellRendererParams<T>) => string | string[]);
    /** Cell style */
    cellStyle?: CSSProperties | ((params: CellRendererParams<T>) => CSSProperties);
    /** Column width in pixels */
    width?: number;
    /** Minimum width */
    minWidth?: number;
    /** Maximum width */
    maxWidth?: number;
    /** Flex grow factor */
    flex?: number;
    /** Initial width */
    initialWidth?: number;
    /** Suppress column sizing to fit content */
    suppressSizeToFit?: boolean;
    /** Auto-size this column */
    autoSize?: boolean;
    /** Hide column */
    hide?: boolean;
    /** Lock column visibility */
    lockVisible?: boolean;
    /** Pin column left or right */
    pinned?: PinDirection;
    /** Lock pinned state */
    lockPinned?: boolean;
    /** Initial hide state */
    initialHide?: boolean;
    /** Initial pinned state */
    initialPinned?: PinDirection;
    /** Enable sorting */
    sortable?: boolean;
    /** Initial sort direction */
    sort?: SortDirection;
    /** Sort order index for multi-sort */
    sortIndex?: number;
    /** Custom comparator function */
    comparator?: (valueA: any, valueB: any, nodeA: RowNode<T>, nodeB: RowNode<T>, isDescending: boolean) => number;
    /** Unordered sort (no third null state) */
    unSortIcon?: boolean;
    /** Enable filtering */
    filter?: boolean | FilterType | React.ComponentType<FilterParams<T>>;
    /** Filter params */
    filterParams?: Record<string, any>;
    /** Floating filter component */
    floatingFilter?: boolean;
    /** Floating filter component */
    floatingFilterComponent?: React.ComponentType<any>;
    /** Suppress floating filter button */
    suppressFloatingFilterButton?: boolean;
    /** Enable cell editing */
    editable?: boolean | ((params: CellRendererParams<T>) => boolean);
    /** Cell editor component */
    cellEditor?: React.ComponentType<CellEditorParams<T>> | 'agTextCellEditor' | 'agSelectCellEditor' | 'agLargeTextCellEditor' | 'agNumberCellEditor' | 'agDateCellEditor';
    /** Cell editor params */
    cellEditorParams?: Record<string, any>;
    /** Single click edit */
    singleClickEdit?: boolean;
    /** Value setter */
    valueSetter?: (params: ValueSetterParams<T>) => boolean;
    /** Value parser */
    valueParser?: (params: ValueSetterParams<T>) => any;
    /** Enable row grouping on this column */
    enableRowGroup?: boolean;
    /** Row group index */
    rowGroupIndex?: number;
    /** Show row group column */
    showRowGroup?: boolean | string;
    /** Row group expanded by default */
    rowGroupExpanded?: boolean;
    /** Enable aggregation */
    enableValue?: boolean;
    /** Aggregation function */
    aggFunc?: 'sum' | 'min' | 'max' | 'count' | 'avg' | 'first' | 'last' | ((params: {
        values: any[];
    }) => any);
    /** Enable pivoting */
    enablePivot?: boolean;
    /** Pivot index */
    pivotIndex?: number;
    /** Column span getter */
    colSpan?: (params: CellRendererParams<T>) => number;
    /** Row span getter */
    rowSpan?: (params: CellRendererParams<T>) => number;
    /** Checkbox selection column */
    checkboxSelection?: boolean | ((params: CellRendererParams<T>) => boolean);
    /** Header checkbox selection */
    headerCheckboxSelection?: boolean | ((params: HeaderComponentParams<T>) => boolean);
    /** Header checkbox select filtered only */
    headerCheckboxSelectionFilteredOnly?: boolean;
    /** Show disabled checkboxes */
    showDisabledCheckboxes?: boolean;
    /** Suppress column menu */
    suppressMenu?: boolean;
    /** Column menu tabs */
    menuTabs?: ('generalMenuTab' | 'filterMenuTab' | 'columnsMenuTab')[];
    /** Suppress header context menu */
    suppressHeaderContextMenu?: boolean;
    /** Enable row dragging */
    rowDrag?: boolean | ((params: CellRendererParams<T>) => boolean);
    /** Row drag text */
    rowDragText?: (params: CellRendererParams<T>, dragItemCount: number) => string;
    /** DnD source */
    dndSource?: boolean;
    /** DnD source on row drag */
    dndSourceOnRowDrag?: (params: {
        rowNode: RowNode<T>;
        dragEvent: DragEvent;
    }) => void;
    /** Suppress spanning */
    suppressSpanHeaderHeight?: boolean;
    /** Enable column resizing */
    resizable?: boolean;
    /** Suppress column moving */
    suppressMovable?: boolean;
    /** Lock column position */
    lockPosition?: boolean | 'left' | 'right';
    /** Suppress export */
    suppressCsvExport?: boolean;
    /** Suppress Excel export */
    suppressExcelExport?: boolean;
    /** Auto row height */
    autoHeight?: boolean;
    /** Wrap text */
    wrapText?: boolean;
    /** Column type for predefined configs */
    type?: string | string[];
    /** Suppress keyboard event */
    suppressKeyboardEvent?: (params: CellRendererParams<T> & {
        event: KeyboardEvent;
    }) => boolean;
    /** Suppress paste */
    suppressPaste?: boolean;
    /** Suppress fill handle */
    suppressFillHandle?: boolean;
    /** Suppress auto size */
    suppressAutoSize?: boolean;
    /** Tool panel class */
    toolPanelClass?: string | string[];
    /** Column group show */
    columnGroupShow?: 'open' | 'closed';
    /** Icons */
    icons?: {
        [key: string]: ReactNode;
    };
    /** Refdata map */
    refData?: {
        [key: string]: string;
    };
}
/** Column Group Definition */
export interface ColGroupDef<T = any> {
    /** Group header name */
    headerName?: string;
    /** Group ID */
    groupId?: string;
    /** Children columns */
    children: (ColDef<T> | ColGroupDef<T>)[];
    /** Header class */
    headerClass?: string | string[];
    /** Tool panel class */
    toolPanelClass?: string | string[];
    /** Marrying children */
    marryChildren?: boolean;
    /** Open by default */
    openByDefault?: boolean;
    /** Column group show */
    columnGroupShow?: 'open' | 'closed';
    /** Suppress span header height */
    suppressSpanHeaderHeight?: boolean;
}
/** Row Node - Represents a row in the grid */
export interface RowNode<T = any> {
    /** Unique row ID */
    id: string;
    /** Row data */
    data: T;
    /** Row index in the grid */
    rowIndex: number;
    /** Row top position */
    rowTop?: number;
    /** Row height */
    rowHeight?: number;
    /** Is row selected */
    isSelected: boolean;
    /** Is row expanded */
    expanded: boolean;
    /** Parent node for grouped rows */
    parent?: RowNode<T>;
    /** Child nodes for grouped rows */
    childrenAfterGroup?: RowNode<T>[];
    /** All leaf children */
    allLeafChildren?: RowNode<T>[];
    /** Level in group hierarchy */
    level: number;
    /** Is group row */
    group?: boolean;
    /** Group data for grouped rows */
    groupData?: Record<string, any>;
    /** Aggregation data */
    aggData?: Record<string, any>;
    /** First child in group */
    firstChild?: boolean;
    /** Last child in group */
    lastChild?: boolean;
    /** Child index in parent */
    childIndex?: number;
    /** Is row pinned */
    rowPinned?: 'top' | 'bottom';
    /** Is row dragging */
    dragging?: boolean;
    /** Set data */
    setData: (data: T) => void;
    /** Set selected */
    setSelected: (selected: boolean, clearSelection?: boolean, source?: string) => void;
    /** Is selectable */
    isSelectable: () => boolean;
    /** Set expanded */
    setExpanded: (expanded: boolean) => void;
    /** Get row id */
    getRowId: () => string;
}
/** Column instance */
export interface Column<T = any> {
    colId: string;
    colDef: ColDef<T>;
    sort: SortDirection;
    sortIndex?: number;
    visible: boolean;
    pinned: PinDirection;
    width: number;
    left: number;
    parent?: ColumnGroup<T>;
    getColDef: () => ColDef<T>;
    getColId: () => string;
    isVisible: () => boolean;
    isPinned: () => boolean;
    getSort: () => SortDirection;
    setSort: (sort: SortDirection) => void;
}
/** Column Group */
export interface ColumnGroup<T = any> {
    groupId: string;
    headerName?: string;
    children: (Column<T> | ColumnGroup<T>)[];
    parent?: ColumnGroup<T>;
    expanded: boolean;
}
/** Grid API - Main API for grid operations */
export interface GridApi<T = any> {
    /** Set row data */
    setRowData: (rowData: T[]) => void;
    /** Get row data */
    getRowData: () => T[];
    /** Apply transaction */
    applyTransaction: (transaction: {
        add?: T[];
        update?: T[];
        remove?: T[];
    }) => void;
    /** Apply async transaction */
    applyTransactionAsync: (transaction: {
        add?: T[];
        update?: T[];
        remove?: T[];
    }) => void;
    /** Refresh cells */
    refreshCells: (params?: {
        rowNodes?: RowNode<T>[];
        columns?: string[];
        force?: boolean;
    }) => void;
    /** Redraw rows */
    redrawRows: (params?: {
        rowNodes?: RowNode<T>[];
    }) => void;
    /** Get row node by ID */
    getRowNode: (id: string) => RowNode<T> | undefined;
    /** Iterate rows */
    forEachNode: (callback: (node: RowNode<T>, index: number) => void) => void;
    /** Iterate leaf nodes */
    forEachLeafNode: (callback: (node: RowNode<T>, index: number) => void) => void;
    /** Get displayed row count */
    getDisplayedRowCount: () => number;
    /** Get displayed row at index */
    getDisplayedRowAtIndex: (index: number) => RowNode<T> | undefined;
    /** Get first displayed row */
    getFirstDisplayedRow: () => number;
    /** Get last displayed row */
    getLastDisplayedRow: () => number;
    /** Select all rows */
    selectAll: () => void;
    /** Deselect all rows */
    deselectAll: () => void;
    /** Select all filtered rows */
    selectAllFiltered: () => void;
    /** Deselect all filtered rows */
    deselectAllFiltered: () => void;
    /** Get selected rows */
    getSelectedRows: () => T[];
    /** Get selected nodes */
    getSelectedNodes: () => RowNode<T>[];
    /** Get sort model */
    getSortModel: () => {
        colId: string;
        sort: SortDirection;
    }[];
    /** Set sort model */
    setSortModel: (sortModel: {
        colId: string;
        sort: SortDirection;
    }[]) => void;
    /** Set filter model */
    setFilterModel: (model: Record<string, any>) => void;
    /** Get filter model */
    getFilterModel: () => Record<string, any>;
    /** Set quick filter */
    setQuickFilter: (quickFilter: string) => void;
    /** Is quick filter present */
    isQuickFilterPresent: () => boolean;
    /** Is any filter present */
    isAnyFilterPresent: () => boolean;
    /** Destroy filter */
    destroyFilter: (column: string | Column<T>) => void;
    /** Get filter instance */
    getFilterInstance: (column: string | Column<T>) => any;
    /** On filter changed */
    onFilterChanged: () => void;
    /** Get page size */
    paginationGetPageSize: () => number;
    /** Set page size */
    paginationSetPageSize: (size: number) => void;
    /** Get current page */
    paginationGetCurrentPage: () => number;
    /** Get total pages */
    paginationGetTotalPages: () => number;
    /** Get row count */
    paginationGetRowCount: () => number;
    /** Go to page */
    paginationGoToPage: (page: number) => void;
    /** Go to next page */
    paginationGoToNextPage: () => void;
    /** Go to previous page */
    paginationGoToPreviousPage: () => void;
    /** Go to first page */
    paginationGoToFirstPage: () => void;
    /** Go to last page */
    paginationGoToLastPage: () => void;
    /** Start editing cell */
    startEditingCell: (params: {
        rowIndex: number;
        colKey: string;
        charPress?: string;
    }) => void;
    /** Stop editing */
    stopEditing: (cancel?: boolean) => void;
    /** Get editing cells */
    getEditingCells: () => {
        rowIndex: number;
        column: Column<T>;
    }[];
    /** Export to CSV */
    exportDataAsCsv: (params?: CsvExportParams) => void;
    /** Get CSV data */
    getDataAsCsv: (params?: CsvExportParams) => string;
    /** Export to Excel */
    exportDataAsExcel: (params?: ExcelExportParams) => void;
    /** Copy selected range to clipboard */
    copySelectedRangeToClipboard: (includeHeaders?: boolean) => void;
    /** Copy selected rows to clipboard */
    copySelectedRowsToClipboard: (includeHeaders?: boolean) => void;
    /** Paste from clipboard */
    pasteFromClipboard: () => void;
    /** Ensure row visible */
    ensureIndexVisible: (index: number, position?: 'top' | 'middle' | 'bottom') => void;
    /** Ensure node visible */
    ensureNodeVisible: (node: RowNode<T>, position?: 'top' | 'middle' | 'bottom') => void;
    /** Ensure column visible */
    ensureColumnVisible: (key: string | Column<T>, position?: 'start' | 'middle' | 'end') => void;
    /** Get horizontal scroll position */
    getHorizontalScrollPosition: () => number;
    /** Get vertical scroll position */
    getVerticalScrollPosition: () => number;
    /** Reset row heights */
    resetRowHeights: () => void;
    /** On row height changed */
    onRowHeightChanged: () => void;
    /** Size columns to fit */
    sizeColumnsToFit: () => void;
    /** Auto-size all columns */
    autoSizeAllColumns: (skipHeader?: boolean) => void;
    /** Auto-size column */
    autoSizeColumn: (colKey: string | Column<T>, skipHeader?: boolean) => void;
    /** Expand all groups */
    expandAll: () => void;
    /** Collapse all groups */
    collapseAll: () => void;
    /** Set row group state */
    setRowGroupColumns: (columns: string[]) => void;
    /** Get row group columns */
    getRowGroupColumns: () => Column<T>[];
    /** Add event listener */
    addEventListener: (eventType: string, listener: (event: any) => void) => void;
    /** Remove event listener */
    removeEventListener: (eventType: string, listener: (event: any) => void) => void;
    /** Destroy grid */
    destroy: () => void;
    /** Get context */
    getContext: () => any;
    /** Set context */
    setContext: (context: any) => void;
    /** Is destroyed */
    isDestroyed: () => boolean;
    /** Refresh header */
    refreshHeader: () => void;
    /** Set header height */
    setHeaderHeight: (height: number) => void;
    /** Show loading overlay */
    showLoadingOverlay: () => void;
    /** Show no rows overlay */
    showNoRowsOverlay: () => void;
    /** Hide overlay */
    hideOverlay: () => void;
    /** Get grid element */
    getGridElement: () => HTMLElement | null;
}
/** Column API */
export interface ColumnApi<T = any> {
    /** Get all columns */
    getAllColumns: () => Column<T>[];
    /** Get all grid columns */
    getAllGridColumns: () => Column<T>[];
    /** Get visible columns */
    getVisibleColumns: () => Column<T>[];
    /** Get column */
    getColumn: (colId: string) => Column<T> | null;
    /** Set column visible */
    setColumnVisible: (colId: string | Column<T>, visible: boolean) => void;
    /** Set columns visible */
    setColumnsVisible: (colIds: (string | Column<T>)[], visible: boolean) => void;
    /** Set column pinned */
    setColumnPinned: (colId: string | Column<T>, pinned: PinDirection) => void;
    /** Set columns pinned */
    setColumnsPinned: (colIds: (string | Column<T>)[], pinned: PinDirection) => void;
    /** Move column */
    moveColumn: (colId: string | Column<T>, toIndex: number) => void;
    /** Move columns */
    moveColumns: (colIds: (string | Column<T>)[], toIndex: number) => void;
    /** Get column state */
    getColumnState: () => ColumnState[];
    /** Apply column state */
    applyColumnState: (params: {
        state: ColumnState[];
        applyOrder?: boolean;
    }) => boolean;
    /** Reset column state */
    resetColumnState: () => void;
    /** Set column width */
    setColumnWidth: (colId: string | Column<T>, width: number) => void;
    /** Set columns width */
    setColumnsWidth: (colIds: (string | Column<T>)[], width: number) => void;
    /** Auto-size column */
    autoSizeColumn: (colId: string | Column<T>, skipHeader?: boolean) => void;
    /** Auto-size columns */
    autoSizeColumns: (colIds: (string | Column<T>)[], skipHeader?: boolean) => void;
    /** Size columns to fit */
    sizeColumnsToFit: (width?: number) => void;
    /** Is pinned left */
    isPinningLeft: () => boolean;
    /** Is pinned right */
    isPinningRight: () => boolean;
    /** Get display name for column */
    getDisplayNameForColumn: (column: Column<T>) => string;
}
/** Column state for persistence */
export interface ColumnState {
    colId: string;
    hide?: boolean;
    width?: number;
    pinned?: PinDirection;
    sort?: SortDirection;
    sortIndex?: number;
    aggFunc?: string;
    rowGroup?: boolean;
    rowGroupIndex?: number;
    pivot?: boolean;
    pivotIndex?: number;
    flex?: number;
}
/** CSV Export params */
export interface CsvExportParams {
    fileName?: string;
    columnKeys?: string[];
    allColumns?: boolean;
    onlySelected?: boolean;
    onlySelectedAllPages?: boolean;
    skipHeader?: boolean;
    skipFooters?: boolean;
    skipPinnedTop?: boolean;
    skipPinnedBottom?: boolean;
    columnSeparator?: string;
    suppressQuotes?: boolean;
    processCellCallback?: (params: {
        value: any;
        node: RowNode;
        column: Column;
    }) => string;
    processHeaderCallback?: (params: {
        column: Column;
    }) => string;
    processRowGroupCallback?: (params: {
        node: RowNode;
        column: Column;
    }) => string;
}
/** Excel Export params */
export interface ExcelExportParams extends CsvExportParams {
    sheetName?: string;
    exportMode?: 'xlsx' | 'xml';
    prependContent?: any[];
    appendContent?: any[];
    headerRowHeight?: number;
    rowHeight?: number;
    margins?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
}
/** Base event params */
export interface BaseEventParams<T = any> {
    type: string;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
}
/** Cell clicked event */
export interface CellClickedEvent<T = any> extends BaseEventParams<T> {
    data: T;
    node: RowNode<T>;
    column: Column<T>;
    colDef: ColDef<T>;
    value: any;
    rowIndex: number;
    event: MouseEvent;
}
/** Cell double clicked event */
export interface CellDoubleClickedEvent<T = any> extends CellClickedEvent<T> {
}
/** Cell context menu event */
export interface CellContextMenuEvent<T = any> extends CellClickedEvent<T> {
}
/** Cell value changed event */
export interface CellValueChangedEvent<T = any> extends BaseEventParams<T> {
    data: T;
    node: RowNode<T>;
    column: Column<T>;
    colDef: ColDef<T>;
    oldValue: any;
    newValue: any;
    rowIndex: number;
}
/** Row clicked event */
export interface RowClickedEvent<T = any> extends BaseEventParams<T> {
    data: T;
    node: RowNode<T>;
    rowIndex: number;
    event: MouseEvent;
}
/** Row double clicked event */
export interface RowDoubleClickedEvent<T = any> extends RowClickedEvent<T> {
}
/** Row selected event */
export interface RowSelectedEvent<T = any> extends BaseEventParams<T> {
    data: T;
    node: RowNode<T>;
    rowIndex: number;
}
/** Selection changed event */
export interface SelectionChangedEvent<T = any> extends BaseEventParams<T> {
}
/** Sort changed event */
export interface SortChangedEvent<T = any> extends BaseEventParams<T> {
}
/** Filter changed event */
export interface FilterChangedEvent<T = any> extends BaseEventParams<T> {
}
/** Pagination changed event */
export interface PaginationChangedEvent<T = any> extends BaseEventParams<T> {
    newPage: boolean;
    newPageSize: boolean;
    animate: boolean;
    keepRenderedRows: boolean;
}
/** Column visible event */
export interface ColumnVisibleEvent<T = any> extends BaseEventParams<T> {
    column: Column<T>;
    visible: boolean;
    source: string;
}
/** Column resized event */
export interface ColumnResizedEvent<T = any> extends BaseEventParams<T> {
    column: Column<T>;
    finished: boolean;
    source: string;
}
/** Column moved event */
export interface ColumnMovedEvent<T = any> extends BaseEventParams<T> {
    column: Column<T>;
    toIndex: number;
    source: string;
}
/** Column pinned event */
export interface ColumnPinnedEvent<T = any> extends BaseEventParams<T> {
    column: Column<T>;
    pinned: PinDirection;
    source: string;
}
/** Row drag event */
export interface RowDragEvent<T = any> extends BaseEventParams<T> {
    node: RowNode<T>;
    overIndex: number;
    overNode?: RowNode<T>;
    y: number;
    vDirection: 'up' | 'down';
    event: MouseEvent;
}
/** Grid ready event */
export interface GridReadyEvent<T = any> extends BaseEventParams<T> {
}
/** First data rendered event */
export interface FirstDataRenderedEvent<T = any> extends BaseEventParams<T> {
    firstRow: number;
    lastRow: number;
}
/** Model updated event */
export interface ModelUpdatedEvent<T = any> extends BaseEventParams<T> {
    animate: boolean;
    keepRenderedRows: boolean;
    newData: boolean;
    newPage: boolean;
}
/** AG Grid Props - Main configuration */
export interface AgGridProps<T = any> {
    /** Row data array */
    rowData: T[];
    /** Column definitions */
    columnDefs: (ColDef<T> | ColGroupDef<T>)[];
    /** Default column definition */
    defaultColDef?: ColDef<T>;
    /** Column types */
    columnTypes?: Record<string, ColDef<T>>;
    /** Get row ID */
    getRowId?: (params: {
        data: T;
    }) => string;
    /** Row model type */
    rowModelType?: RowModelType;
    /** Theme variant */
    theme?: ThemeVariant;
    /** Custom theme */
    customTheme?: Partial<AgGridTheme>;
    /** Row height */
    rowHeight?: number;
    /** Header height */
    headerHeight?: number;
    /** Float filter height */
    floatingFiltersHeight?: number;
    /** Pivot header height */
    pivotHeaderHeight?: number;
    /** Pivot group header height */
    pivotGroupHeaderHeight?: number;
    /** Group header height */
    groupHeaderHeight?: number;
    /** Row class */
    rowClass?: string | ((params: {
        data: T;
        node: RowNode<T>;
    }) => string);
    /** Row style */
    rowStyle?: CSSProperties | ((params: {
        data: T;
        node: RowNode<T>;
    }) => CSSProperties);
    /** Get row class */
    getRowClass?: (params: {
        data: T;
        node: RowNode<T>;
        rowIndex: number;
    }) => string | string[] | undefined;
    /** Get row style */
    getRowStyle?: (params: {
        data: T;
        node: RowNode<T>;
        rowIndex: number;
    }) => CSSProperties | undefined;
    /** Get row height */
    getRowHeight?: (params: {
        data: T;
        node: RowNode<T>;
    }) => number | undefined;
    /** DOM layout */
    domLayout?: 'normal' | 'autoHeight' | 'print';
    /** Row selection mode */
    rowSelection?: RowSelectionMode;
    /** Row multi-select with click */
    rowMultiSelectWithClick?: boolean;
    /** Suppress row deselection */
    suppressRowDeselection?: boolean;
    /** Suppress row click selection */
    suppressRowClickSelection?: boolean;
    /** Suppress cell focus */
    suppressCellFocus?: boolean;
    /** Enable range selection */
    enableRangeSelection?: boolean;
    /** Enable range handle */
    enableRangeHandle?: boolean;
    /** Enable fill handle */
    enableFillHandle?: boolean;
    /** Is row selectable */
    isRowSelectable?: (node: RowNode<T>) => boolean;
    /** Enable sorting */
    sortable?: boolean;
    /** Multi-sort key */
    multiSortKey?: 'ctrl' | 'shift';
    /** Accentuated sort */
    accentedSort?: boolean;
    /** Unordered sort */
    unSortIcon?: boolean;
    /** Suppress multi-sort */
    suppressMultiSort?: boolean;
    /** Always multi-sort */
    alwaysMultiSort?: boolean;
    /** Enable filtering */
    filter?: boolean;
    /** Enable floating filters */
    floatingFilter?: boolean;
    /** Quick filter text */
    quickFilterText?: string;
    /** Cache quick filter */
    cacheQuickFilter?: boolean;
    /** Suppress menu filter panel */
    suppressMenuFilterPanel?: boolean;
    /** Exclude children when tree data filtering */
    excludeChildrenWhenTreeDataFiltering?: boolean;
    /** Enable pagination */
    pagination?: boolean;
    /** Page size */
    paginationPageSize?: number;
    /** Page size selector */
    paginationPageSizeSelector?: number[] | boolean;
    /** Auto page size */
    paginationAutoPageSize?: boolean;
    /** Suppress pagination panel */
    suppressPaginationPanel?: boolean;
    /** Pagination numbers to show */
    paginationNumberFormatter?: (params: {
        value: number;
    }) => string;
    /** Edit type */
    editType?: 'fullRow';
    /** Single click edit */
    singleClickEdit?: boolean;
    /** Suppress click edit */
    suppressClickEdit?: boolean;
    /** Stop editing when focus leaves */
    stopEditingWhenCellsLoseFocus?: boolean;
    /** Enter moves down */
    enterMovesDown?: boolean;
    /** Enter moves down after edit */
    enterMovesDownAfterEdit?: boolean;
    /** Enable cell editing */
    enableCellEditing?: boolean;
    /** Undo/redo cell editing */
    undoRedoCellEditing?: boolean;
    /** Undo/redo cell editing limit */
    undoRedoCellEditingLimit?: number;
    /** Read only edit */
    readOnlyEdit?: boolean;
    /** Enable row grouping */
    rowGroup?: boolean;
    /** Group default expanded */
    groupDefaultExpanded?: number;
    /** Auto group column def */
    autoGroupColumnDef?: ColDef<T>;
    /** Group display type */
    groupDisplayType?: 'singleColumn' | 'multipleColumns' | 'groupRows' | 'custom';
    /** Show open groups in group columns */
    showOpenedGroup?: boolean;
    /** Group row renderer */
    groupRowRenderer?: React.ComponentType<CellRendererParams<T>>;
    /** Group row renderer params */
    groupRowRendererParams?: Record<string, any>;
    /** Group selects children */
    groupSelectsChildren?: boolean;
    /** Group selects filtered */
    groupSelectsFiltered?: boolean;
    /** Group include footer */
    groupIncludeFooter?: boolean;
    /** Group include total footer */
    groupIncludeTotalFooter?: boolean;
    /** Suppress group rows sticky */
    suppressGroupRowsSticky?: boolean;
    /** Suppress row group hilight */
    suppressRowGroupHilight?: boolean;
    /** Group rows sticky */
    groupRowsSticky?: boolean;
    /** Group lock group columns */
    groupLockGroupColumns?: number;
    /** Row group panel show */
    rowGroupPanelShow?: 'always' | 'onlyWhenGrouping' | 'never';
    /** Tree data mode */
    treeData?: boolean;
    /** Get data path for tree */
    getDataPath?: (data: T) => string[];
    /** Tree data children field */
    treeDataChildrenField?: string;
    /** Group allows synthetic children */
    groupAllowUnbalanced?: boolean;
    /** Master detail mode */
    masterDetail?: boolean;
    /** Detail row height */
    detailRowHeight?: number;
    /** Detail row auto height */
    detailRowAutoHeight?: boolean;
    /** Detail cell renderer */
    detailCellRenderer?: React.ComponentType<CellRendererParams<T>>;
    /** Detail cell renderer params */
    detailCellRendererParams?: Record<string, any>;
    /** Is row master */
    isRowMaster?: (data: T) => boolean;
    /** Keep detail rows */
    keepDetailRows?: boolean;
    /** Keep detail rows count */
    keepDetailRowsCount?: number;
    /** Embed full width rows */
    embedFullWidthRows?: boolean;
    /** Pinned top row data */
    pinnedTopRowData?: T[];
    /** Pinned bottom row data */
    pinnedBottomRowData?: T[];
    /** Enable row drag */
    rowDragManaged?: boolean;
    /** Row drag entire row */
    rowDragEntireRow?: boolean;
    /** Row drag multi row */
    rowDragMultiRow?: boolean;
    /** Suppress row drag leave hide */
    suppressRowDrag?: boolean;
    /** Suppress move when row dragging */
    suppressMoveWhenRowDragging?: boolean;
    /** Row drag text */
    rowDragText?: (params: CellRendererParams<T>, dragItemCount: number) => string;
    /** Enable column moving */
    columnMovable?: boolean;
    /** Suppress column move animation */
    suppressColumnMoveAnimation?: boolean;
    /** Suppress moving columns while dragging */
    suppressMovingInWhenColumnDragging?: boolean;
    /** Lock visible */
    lockVisible?: boolean;
    /** Enable column resizing */
    columnResizable?: boolean;
    /** Suppress auto-size */
    suppressAutoSize?: boolean;
    /** Maintain column order */
    maintainColumnOrder?: boolean;
    /** Delta column mode */
    deltaColumnMode?: boolean;
    /** Apply column def order */
    applyColumnDefOrder?: boolean;
    /** Column hover highlight */
    columnHoverHighlight?: boolean;
    /** Suppress drag leave hides columns */
    suppressDragLeaveHidesColumns?: boolean;
    /** Column menu */
    colMenu?: 'legacy' | 'new';
    /** Always show horizontal scrollbar */
    alwaysShowHorizontalScroll?: boolean;
    /** Always show vertical scrollbar */
    alwaysShowVerticalScroll?: boolean;
    /** Debounce vertical scrollbar */
    debounceVerticalScrollbar?: boolean;
    /** Suppress horizontal scroll */
    suppressHorizontalScroll?: boolean;
    /** Suppress scroll on new data */
    suppressScrollOnNewData?: boolean;
    /** Suppress scroll lag */
    suppressScrollLag?: boolean;
    /** Suppress column virtualization */
    suppressColumnVirtualisation?: boolean;
    /** Suppress row virtualization */
    suppressRowVirtualisation?: boolean;
    /** Loading overlay component */
    loadingOverlayComponent?: React.ComponentType<any>;
    /** Loading overlay component params */
    loadingOverlayComponentParams?: Record<string, any>;
    /** No rows overlay component */
    noRowsOverlayComponent?: React.ComponentType<any>;
    /** No rows overlay component params */
    noRowsOverlayComponentParams?: Record<string, any>;
    /** Overlay loading template */
    overlayLoadingTemplate?: string;
    /** Overlay no rows template */
    overlayNoRowsTemplate?: string;
    /** Status bar */
    statusBar?: {
        statusPanels: {
            statusPanel: string | React.ComponentType<any>;
            statusPanelParams?: Record<string, any>;
            align?: 'left' | 'center' | 'right';
            key?: string;
        }[];
    };
    /** Side bar */
    sideBar?: boolean | 'columns' | 'filters' | {
        toolPanels: {
            id: string;
            labelKey: string;
            labelDefault: string;
            iconKey?: string;
            toolPanel: string | React.ComponentType<any>;
            toolPanelParams?: Record<string, any>;
            width?: number;
            minWidth?: number;
            maxWidth?: number;
        }[];
        defaultToolPanel?: string;
        hiddenByDefault?: boolean;
        position?: 'left' | 'right';
    };
    /** Enable clipboard */
    enableClipboard?: boolean;
    /** Clipboard delimiter */
    clipboardDelimiter?: string;
    /** Suppress last empty line on paste */
    suppressLastEmptyLineOnPaste?: boolean;
    /** Suppress clipboard paste */
    suppressClipboardPaste?: boolean;
    /** Suppress copy rows to clipboard */
    suppressCopyRowsToClipboard?: boolean;
    /** Suppress copy single cell ranges */
    suppressCopySingleCellRanges?: boolean;
    /** Default export params */
    defaultExportParams?: CsvExportParams;
    /** Default Excel export params */
    defaultExcelExportParams?: ExcelExportParams;
    /** Suppress CSV export */
    suppressCsvExport?: boolean;
    /** Suppress Excel export */
    suppressExcelExport?: boolean;
    /** Context menu items */
    getContextMenuItems?: (params: {
        node: RowNode<T>;
        column: Column<T>;
        value: any;
    }) => (string | {
        name: string;
        disabled?: boolean;
        shortcut?: string;
        action?: () => void;
        icon?: ReactNode;
        subMenu?: any[];
        cssClasses?: string[];
        tooltip?: string;
    })[];
    /** Suppress context menu */
    suppressContextMenu?: boolean;
    /** Allow context menu with control key */
    allowContextMenuWithControlKey?: boolean;
    /** Get main menu items */
    getMainMenuItems?: (params: {
        column: Column<T>;
        columnApi: ColumnApi<T>;
    }) => (string | {
        name: string;
        disabled?: boolean;
        shortcut?: string;
        action?: () => void;
        icon?: ReactNode;
        subMenu?: any[];
        cssClasses?: string[];
        tooltip?: string;
    })[];
    /** Suppress menu hide */
    suppressMenuHide?: boolean;
    /** Post process popup */
    postProcessPopup?: (params: {
        type: string;
        ePopup: HTMLElement;
        column?: Column<T>;
        rowNode?: RowNode<T>;
    }) => void;
    /** Enable charts */
    enableCharts?: boolean;
    /** Chart themes */
    chartThemes?: string[];
    /** Custom chart themes */
    customChartThemes?: Record<string, any>;
    /** Chart tool panel def */
    chartToolPanelsDef?: any;
    /** Enable browser tooltips */
    enableBrowserTooltips?: boolean;
    /** Tooltip show delay */
    tooltipShowDelay?: number;
    /** Tooltip hide delay */
    tooltipHideDelay?: number;
    /** Tooltip mouse track */
    tooltipMouseTrack?: boolean;
    /** Tooltip interaction */
    tooltipInteraction?: boolean;
    /** Ensure DOM order */
    ensureDomOrder?: boolean;
    /** Suppress row transform */
    suppressRowTransform?: boolean;
    /** Animate rows */
    animateRows?: boolean;
    /** Enable RTL */
    enableRtl?: boolean;
    /** Suppress focus after refresh */
    suppressFocusAfterRefresh?: boolean;
    /** Skip header on auto-size */
    skipHeaderOnAutoSize?: boolean;
    /** Suppress browser resizes */
    suppressBrowserResizeObserver?: boolean;
    /** Locale text */
    localeText?: Record<string, string>;
    /** Icons */
    icons?: Record<string, ReactNode>;
    /** Grid ID */
    gridId?: string;
    /** Suppress property names check */
    suppressPropertyNamesCheck?: boolean;
    /** Debug */
    debug?: boolean;
    /** Values cache */
    valueCache?: boolean;
    /** Values cache never expires */
    valueCacheNeverExpires?: boolean;
    /** Enable cell change flash */
    enableCellChangeFlash?: boolean;
    /** Cell flash delay */
    cellFlashDelay?: number;
    /** Cell fade delay */
    cellFadeDelay?: number;
    /** Suppress middle click scrolls */
    suppressMiddleClickScrolls?: boolean;
    /** Suppress prevent default on mouse wheel */
    suppressPreventDefaultOnMouseWheel?: boolean;
    /** Suppress column state events */
    suppressColumnStateEvents?: boolean;
    /** Enable responsive */
    responsive?: boolean;
    /** Responsive breakpoints */
    responsiveBreakpoints?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    /** Mobile card renderer */
    mobileCardRenderer?: React.ComponentType<{
        data: T;
        node: RowNode<T>;
    }>;
    /** Mobile breakpoint */
    mobileBreakpoint?: number;
    onGridReady?: (event: GridReadyEvent<T>) => void;
    onFirstDataRendered?: (event: FirstDataRenderedEvent<T>) => void;
    onRowDataUpdated?: (event: BaseEventParams<T>) => void;
    onCellClicked?: (event: CellClickedEvent<T>) => void;
    onCellDoubleClicked?: (event: CellDoubleClickedEvent<T>) => void;
    onCellContextMenu?: (event: CellContextMenuEvent<T>) => void;
    onCellValueChanged?: (event: CellValueChangedEvent<T>) => void;
    onCellEditingStarted?: (event: CellClickedEvent<T>) => void;
    onCellEditingStopped?: (event: CellClickedEvent<T>) => void;
    onRowClicked?: (event: RowClickedEvent<T>) => void;
    onRowDoubleClicked?: (event: RowDoubleClickedEvent<T>) => void;
    onRowSelected?: (event: RowSelectedEvent<T>) => void;
    onSelectionChanged?: (event: SelectionChangedEvent<T>) => void;
    onSortChanged?: (event: SortChangedEvent<T>) => void;
    onFilterChanged?: (event: FilterChangedEvent<T>) => void;
    onPaginationChanged?: (event: PaginationChangedEvent<T>) => void;
    onColumnVisible?: (event: ColumnVisibleEvent<T>) => void;
    onColumnResized?: (event: ColumnResizedEvent<T>) => void;
    onColumnMoved?: (event: ColumnMovedEvent<T>) => void;
    onColumnPinned?: (event: ColumnPinnedEvent<T>) => void;
    onRowDragStart?: (event: RowDragEvent<T>) => void;
    onRowDragMove?: (event: RowDragEvent<T>) => void;
    onRowDragEnd?: (event: RowDragEvent<T>) => void;
    onRowDragEnter?: (event: RowDragEvent<T>) => void;
    onRowDragLeave?: (event: RowDragEvent<T>) => void;
    onModelUpdated?: (event: ModelUpdatedEvent<T>) => void;
    onBodyScroll?: (event: BaseEventParams<T> & {
        direction: 'horizontal' | 'vertical';
        left: number;
        top: number;
    }) => void;
    onBodyScrollEnd?: (event: BaseEventParams<T> & {
        direction: 'horizontal' | 'vertical';
        left: number;
        top: number;
    }) => void;
    onViewportChanged?: (event: BaseEventParams<T> & {
        firstRow: number;
        lastRow: number;
    }) => void;
    onComponentStateChanged?: (event: BaseEventParams<T>) => void;
    onAsyncTransactionsFlushed?: (event: BaseEventParams<T>) => void;
    /** Container style */
    containerStyle?: CSSProperties;
    /** Container className */
    containerClassName?: string;
    /** Context */
    context?: any;
    /** ref */
    ref?: React.Ref<AgGridRef<T>>;
}
/** AG Grid ref - Imperative handle */
export interface AgGridRef<T = any> {
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
}
/** Theme configuration */
export interface AgGridTheme {
    backgroundColor: string;
    headerBackgroundColor: string;
    oddRowBackgroundColor: string;
    borderColor: string;
    selectedRowBackgroundColor: string;
    hoverRowBackgroundColor: string;
    textColor: string;
    headerTextColor: string;
    accentColor: string;
    cellPadding: string;
    headerPadding: string;
    fontFamily: string;
    fontSize: string;
    headerFontSize: string;
    headerFontWeight: string;
    borderRadius: string;
    cellBorderWidth: string;
}
/** Server-side datasource */
export interface IServerSideDatasource<T = any> {
    getRows: (params: IServerSideGetRowsParams<T>) => void;
    destroy?: () => void;
}
/** Server-side get rows params */
export interface IServerSideGetRowsParams<T = any> {
    request: IServerSideGetRowsRequest;
    success: (params: {
        rowData: T[];
        rowCount?: number;
    }) => void;
    fail: () => void;
    parentNode: RowNode<T>;
    api: GridApi<T>;
    columnApi: ColumnApi<T>;
    context: any;
}
/** Server-side get rows request */
export interface IServerSideGetRowsRequest {
    startRow: number;
    endRow: number;
    rowGroupCols: {
        id: string;
        displayName: string;
        field: string;
    }[];
    valueCols: {
        id: string;
        displayName: string;
        field: string;
        aggFunc: string;
    }[];
    pivotCols: {
        id: string;
        displayName: string;
        field: string;
    }[];
    pivotMode: boolean;
    groupKeys: string[];
    filterModel: Record<string, any>;
    sortModel: {
        colId: string;
        sort: SortDirection;
    }[];
}
/** Infinite datasource */
export interface IDatasource<T = any> {
    rowCount?: number;
    getRows: (params: {
        startRow: number;
        endRow: number;
        successCallback: (rowsThisBlock: T[], lastRow?: number) => void;
        failCallback: () => void;
        sortModel: {
            colId: string;
            sort: SortDirection;
        }[];
        filterModel: Record<string, any>;
        context: any;
    }) => void;
    destroy?: () => void;
}
/** Make all properties optional recursively */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
/** Extract data type from column defs */
export type ExtractRowData<T extends ColDef[]> = {
    [K in T[number]['field'] as K extends string ? K : never]: any;
};
