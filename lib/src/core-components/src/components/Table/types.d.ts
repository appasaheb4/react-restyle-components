import React, { CSSProperties } from 'react';
/** Sort direction */
export type SortDirection = 'asc' | 'desc' | null;
/** Filter type */
export type FilterType = 'text' | 'number' | 'date' | 'dateRange' | 'select' | 'custom';
/** Row selection mode */
export type SelectionMode = 'none' | 'single' | 'multiple' | 'checkbox';
/** Cell edit mode */
export type EditMode = 'none' | 'click' | 'dblclick';
/** Pagination position */
export type PaginationPosition = 'top' | 'bottom' | 'both';
/** Column alignment */
export type ColumnAlign = 'left' | 'center' | 'right';
/** Field type for fieldTypeConfig */
export type FieldConfigType = 'text' | 'string' | 'number' | 'date' | 'select' | 'boolean' | 'array' | 'object' | 'custom';
/** Single field configuration */
export interface FieldConfig<T = any> {
    /** Field type */
    type?: FieldConfigType;
    /** For array/object type - fields to extract from each item */
    fields?: string[];
    /** For array type - separator between array items */
    separator?: string;
    /** For array type - max items to display */
    maxItems?: number;
    /** For object type - keys to display (alias for fields) */
    keys?: string[];
    /** For object type - label mapping for keys */
    labelMap?: Record<string, string>;
    /** Date format string */
    dateFormat?: string;
    /** Select options */
    options?: Array<{
        value: string;
        label: string;
    }>;
    /** Custom formatter for display */
    formatter?: (value: any, row: T) => React.ReactNode;
    /** Is editable */
    editable?: boolean;
    /** Custom style */
    style?: CSSProperties;
    /** Hide from export */
    hideFromExport?: boolean;
    /** Export formatter - custom CSV value formatter */
    exportFormatter?: (value: any, row: T) => string;
    /** CSV export enabled (default true) */
    csvExport?: boolean;
}
/** Field type configuration for dynamic rendering */
export type FieldTypeConfig<T = any> = Record<string, FieldConfig<T>>;
/** Column definition */
export interface TableColumn<T = any> {
    /** Unique field key */
    dataField: string;
    /** Column header text */
    text: string;
    /** Column header alias for display */
    headerText?: string;
    /** Whether column is hidden */
    hidden?: boolean;
    /** Column width */
    width?: number | string;
    /** Minimum width */
    minWidth?: number | string;
    /** Maximum width */
    maxWidth?: number | string;
    /** Text alignment */
    align?: ColumnAlign;
    /** Header alignment */
    headerAlign?: ColumnAlign;
    /** Whether column is sortable */
    sort?: boolean;
    /** Custom sort function */
    sortFunc?: (a: any, b: any, order: SortDirection, rowA: T, rowB: T) => number;
    /** Default sort order */
    defaultSort?: SortDirection;
    /** Custom sort caret renderer */
    sortCaret?: (order: SortDirection, column: TableColumn<T>) => React.ReactNode;
    /** Whether column is filterable, or a custom filter component */
    filter?: boolean | React.ComponentType<TableFilterProps>;
    /** Filter type */
    filterType?: FilterType;
    /** Filter options (for select filter) */
    filterOptions?: Array<{
        value: string;
        label: string;
    }>;
    /** Custom filter component (alias for filter when using component) */
    filterComponent?: React.ComponentType<TableFilterProps>;
    /** Custom filter renderer */
    filterRenderer?: (onFilter: (value: any) => void, column: TableColumn<T>) => React.ReactNode;
    /** Filter placeholder */
    filterPlaceholder?: string;
    /** Whether column is editable - boolean or function returning boolean/custom editor */
    editable?: boolean | ((cell: any, row: T, rowIndex: number, columnIndex: number) => boolean | React.ReactNode);
    /** Editor type */
    editorType?: 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'textarea';
    /** Editor options (for select editor) */
    editorOptions?: Array<{
        value: string;
        label: string;
    }>;
    /** Custom editor renderer */
    editorRenderer?: (editorProps: TableEditorProps<T>, value: any, row: T, column: TableColumn<T>, rowIndex: number, columnIndex: number) => React.ReactNode;
    /** Editor style */
    editorStyle?: CSSProperties;
    /** Editor CSS classes */
    editorClasses?: string;
    /** Validator function */
    validator?: (value: any, row: T) => boolean | string;
    /** Custom cell renderer */
    formatter?: (cell: any, row: T, rowIndex: number, columnIndex: number) => React.ReactNode;
    /** Custom header renderer */
    headerFormatter?: (column: TableColumn<T>, columnIndex: number) => React.ReactNode;
    /** Custom footer renderer */
    footerFormatter?: (column: TableColumn<T>, data: T[]) => React.ReactNode;
    /** CSV export formatter */
    csvFormatter?: (cell: any, row: T, rowIndex: number) => string;
    /** Whether to include in CSV export */
    csvExport?: boolean;
    /** Header CSS class */
    headerClasses?: string;
    /** Hide header text/title (only show filter and sort) - deprecated, use isHeaderTitle instead */
    hideHeaderText?: boolean;
    /** Show/hide header title (default: true) */
    isHeaderTitle?: boolean;
    /** Show/hide header filter component (default: true) */
    isHeaderFilterComp?: boolean;
    /** Show/hide header sort icon (default: true) */
    isHeaderSort?: boolean;
    /** Cell CSS class */
    classes?: string | ((cell: any, row: T, rowIndex: number, colIndex: number) => string);
    /** Header style */
    headerStyle?: CSSProperties | ((column: TableColumn<T>) => CSSProperties);
    /** Cell style */
    style?: CSSProperties | ((cell: any, row: T, rowIndex: number, colIndex: number) => CSSProperties);
    /** Whether column can be resized */
    resizable?: boolean;
    /** Whether column can be reordered */
    reorderable?: boolean;
    /** Whether column is pinned */
    pinned?: 'left' | 'right' | false;
    /** Footer content */
    footer?: string | ((column: TableColumn<T>, data: T[]) => React.ReactNode);
    /** Events */
    events?: {
        onClick?: (e: React.MouseEvent, row: T, rowIndex: number, column: TableColumn<T>, columnIndex: number) => void;
        onDoubleClick?: (e: React.MouseEvent, row: T, rowIndex: number, column: TableColumn<T>, columnIndex: number) => void;
    };
}
/** Filter props passed to custom filter components */
export interface TableFilterProps {
    column: TableColumn;
    value: any;
    onChange: (value: any) => void;
    onClear: () => void;
}
/** Editor props passed to custom editor renderer */
export interface TableEditorProps<T = any> {
    /** Current value being edited */
    value: any;
    /** Callback to update the value and close editor */
    onUpdate: (value: any) => void;
    /** Callback to cancel editing */
    onCancel: () => void;
    /** Callback to blur/complete editing */
    onBlur: () => void;
    /** The row being edited */
    row: T;
    /** The column definition */
    column: TableColumn<T>;
    /** Row index */
    rowIndex: number;
    /** Column index */
    columnIndex: number;
    /** Row ID (keyField value) */
    rowId: string;
    /** Data field name */
    dataField: string;
    /** Direct callback to update item and close editor */
    onUpdateItem: (value: any) => void;
}
/** Pagination config */
export interface TablePaginationConfig {
    /** Current page (0-indexed) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Total items */
    total: number;
    /** Page size options */
    pageSizeOptions?: number[];
    /** Show page size dropdown */
    showSizeChanger?: boolean;
    /** Show quick jumper */
    showQuickJumper?: boolean;
    /** Show total info */
    showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
    /** Pagination position */
    position?: PaginationPosition;
    /** Simple mode */
    simple?: boolean;
}
/** Row selection config */
export interface TableSelectionConfig<T = any> {
    /** Selection mode */
    mode: SelectionMode;
    /** Selected row keys */
    selectedRowKeys?: string[];
    /** Key field for rows */
    keyField?: string;
    /** Callback when selection changes */
    onChange?: (selectedRowKeys: string[], selectedRows: T[]) => void;
    /** Function to determine if row is selectable */
    getCheckboxProps?: (row: T) => {
        disabled?: boolean;
        name?: string;
    };
    /** Selected row style */
    selectedRowStyle?: CSSProperties | ((row: T) => CSSProperties);
    /** Selected row class */
    selectedRowClassName?: string | ((row: T) => string);
    /** Hide select all checkbox */
    hideSelectAll?: boolean;
    /** Fixed column */
    fixed?: boolean;
    /** Column width */
    columnWidth?: number | string;
    /** Column title */
    columnTitle?: React.ReactNode;
}
/** Row expand config */
export interface TableExpandConfig<T = any> {
    /** Expanded row keys */
    expandedRowKeys?: string[];
    /** Default expanded row keys */
    defaultExpandedRowKeys?: string[];
    /** Key field for rows */
    keyField?: string;
    /** Callback when expand changes */
    onExpandChange?: (expandedRowKeys: string[], expanded: boolean, row: T) => void;
    /** Expanded row render */
    expandedRowRender?: (row: T, rowIndex: number, expanded: boolean) => React.ReactNode;
    /** Row expandable check */
    rowExpandable?: (row: T) => boolean;
    /** Fixed column */
    fixed?: boolean;
    /** Column width */
    columnWidth?: number | string;
    /** Expand icon */
    expandIcon?: (props: {
        expanded: boolean;
        row: T;
        onExpand: () => void;
    }) => React.ReactNode;
    /** Expand row by click */
    expandRowByClick?: boolean;
    /** Accordion mode (only one row expanded at a time) */
    accordion?: boolean;
}
/** Sort state */
export interface TableSortState {
    field: string;
    order: SortDirection;
}
/** Filter state */
export interface TableFilterState {
    [field: string]: any;
}
/** Table change info */
export interface TableChangeInfo {
    type: 'pagination' | 'sort' | 'filter' | 'search';
    pagination?: {
        page: number;
        pageSize: number;
    };
    sort?: TableSortState;
    filters?: TableFilterState;
    search?: string;
}
/** Custom class names */
export interface TableClassNames {
    root?: string;
    wrapper?: string;
    header?: string;
    headerRow?: string;
    headerCell?: string;
    body?: string;
    row?: string;
    cell?: string;
    footer?: string;
    footerRow?: string;
    footerCell?: string;
    pagination?: string;
    toolbar?: string;
    empty?: string;
    loading?: string;
}
/** Custom styles */
export interface TableStyles {
    root?: CSSProperties;
    wrapper?: CSSProperties;
    header?: CSSProperties;
    headerRow?: CSSProperties;
    headerCell?: CSSProperties;
    body?: CSSProperties;
    row?: CSSProperties;
    cell?: CSSProperties;
    footer?: CSSProperties;
    footerRow?: CSSProperties;
    footerCell?: CSSProperties;
    pagination?: CSSProperties;
    toolbar?: CSSProperties;
    empty?: CSSProperties;
    loading?: CSSProperties;
}
export interface TableProps<T = any> {
    /** Unique table ID */
    id: string;
    /** Data source */
    data: T[];
    /** Column definitions */
    columns: TableColumn<T>[];
    /** Key field for row identification */
    keyField?: string;
    /** Loading state */
    loading?: boolean;
    /** Custom loading indicator */
    loadingIndicator?: React.ReactNode;
    /** Enable pagination */
    pagination?: boolean;
    /** Pagination config */
    paginationConfig?: Partial<TablePaginationConfig>;
    /** Total records (for server-side) */
    totalSize?: number;
    /** Server-side mode (default: true) - data is fetched from server via onPageSizeChange.
     * Auto-detection: If totalSize <= data.length, automatically uses client-side mode (remote=false) */
    remote?: boolean;
    /** Default sort */
    defaultSort?: TableSortState;
    /** Controlled sort */
    sort?: TableSortState;
    /** Multi-column sort */
    multiSort?: boolean;
    /** Enable column filters */
    filterable?: boolean;
    /** Default filters */
    defaultFilters?: TableFilterState;
    /** Controlled filters */
    filters?: TableFilterState;
    /** Show filter row by default (when filterable is true) */
    defaultShowFilters?: boolean;
    /** Controlled show/hide filter row */
    showFilters?: boolean;
    /** Callback when filter visibility changes */
    onShowFiltersChange?: (visible: boolean) => void;
    /** Show filter toggle button in toolbar */
    showFilterToggle?: boolean;
    /** Enable global search */
    searchable?: boolean;
    /** Search placeholder */
    searchPlaceholder?: string;
    /** Default search value */
    defaultSearchValue?: string;
    /** Controlled search value */
    searchValue?: string;
    /** Search debounce delay */
    searchDebounce?: number;
    /** Row selection config */
    rowSelection?: TableSelectionConfig<T>;
    /** Row expand config */
    expandable?: TableExpandConfig<T>;
    /** Edit mode (default: 'dblclick') */
    editMode?: EditMode;
    /** Show edit pencil icon on editable cells (default: false) */
    showEditIcon?: boolean;
    /** On cell edit */
    onCellEdit?: (value: any, dataField: string, row: T, rowIndex: number) => void;
    /** Enable export button */
    exportable?: boolean;
    /** Export file name */
    exportFileName?: string;
    /** Export format: 'csv' (default) or 'excel' */
    exportFormat?: 'csv' | 'excel';
    /** Enable column toggle */
    columnToggle?: boolean;
    /** Enable column reorder */
    columnReorder?: boolean;
    /** Enable column resize */
    columnResize?: boolean;
    /** Bordered style */
    bordered?: boolean;
    /** Striped rows */
    striped?: boolean;
    /** Hoverable rows */
    hover?: boolean;
    /** Compact/dense mode */
    compact?: boolean;
    /** Custom cell padding (e.g., '2px', '4px 6px'). Default is '2px' */
    cellPadding?: string;
    /** Fixed header */
    stickyHeader?: boolean;
    /** Table max height (for sticky header) */
    maxHeight?: number | string;
    /** Row class name */
    rowClassName?: string | ((row: T, rowIndex: number) => string);
    /** Row style */
    rowStyle?: CSSProperties | ((row: T, rowIndex: number) => CSSProperties);
    /** Custom class names */
    classNames?: TableClassNames;
    /** Custom styles */
    styles?: TableStyles;
    /** Root className */
    className?: string;
    /** Root style */
    style?: CSSProperties;
    /** Empty state content */
    emptyText?: React.ReactNode;
    /** Called when table state changes */
    onChange?: (info: TableChangeInfo) => void;
    /** Called on page change */
    onPageChange?: (page: number, pageSize: number) => void;
    /** Called on sort change */
    onSortChange?: (sort: TableSortState) => void;
    /** Called on filter change */
    onFilterChange?: (filters: TableFilterState) => void;
    /** Called on search */
    onSearch?: (value: string) => void;
    /** Called on row click */
    onRowClick?: (row: T, rowIndex: number, e: React.MouseEvent) => void;
    /** Called on row double click */
    onRowDoubleClick?: (row: T, rowIndex: number, e: React.MouseEvent) => void;
    /** Called on clear all filters */
    onClearFilters?: () => void;
    /** Custom toolbar render */
    toolbar?: React.ReactNode | ((props: {
        searchValue: string;
        onSearch: (value: string) => void;
        onClearFilters: () => void;
        onExport: () => void;
    }) => React.ReactNode);
    /** Hide toolbar */
    hideToolbar?: boolean;
    /** Show footer */
    showFooter?: boolean;
    /** Table caption */
    caption?: string;
    /** ARIA label */
    'aria-label'?: string;
    /** ARIA labelledby */
    'aria-labelledby'?: string;
    /** Enable delete action */
    isDelete?: boolean;
    /** Enable edit/modify action */
    isEditModify?: boolean;
    /** Alias for isEditModify */
    isUpdate?: boolean;
    /** Enable export button (alias for exportable) */
    isExport?: boolean;
    /** Show view button */
    isView?: boolean;
    /** On delete action */
    onDelete?: (row: T, rowIndex: number) => void;
    /** On edit action */
    onEdit?: (row: T, rowIndex: number) => void;
    /** On view action */
    onView?: (row: T, rowIndex: number) => void;
    /** Enable row selection (shorthand) */
    isSelectRow?: boolean;
    /** Array of row IDs (keyField values) that cannot be selected */
    getNonSelectableRows?: string[];
    /** Style for non-selectable rows */
    nonSelectableStyle?: CSSProperties;
    /** Export file name (alias for exportFileName) */
    fileName?: string;
    /** Hide export sheet button or array of fields to exclude from export */
    hideExcelSheet?: boolean | string[];
    /** Callback when rows are selected (simplified) */
    onSelectedRow?: (rows: T[]) => void;
    /** Custom style for selected rows (when using isSelectRow) */
    selectedRowStyle?: CSSProperties | ((row: T) => CSSProperties);
    /** Custom class for selected rows (when using isSelectRow) */
    selectedRowClassName?: string | ((row: T) => string);
    /** Callback when an item is updated */
    onUpdateItem?: (value: any, dataField: string, id: string) => void;
    /** Callback when page or size changes */
    onPageSizeChange?: (page: number, size: number) => void;
    /** Callback when filter changes with full context */
    onFilter?: (type: 'filter' | 'search' | 'sort', filter: TableFilterState, page: number, size: number) => void;
    /** Callback to clear all filters (user-defined reset logic) */
    clearAllFilter?: () => void;
    /** Dynamic styling fields configuration */
    dynamicStylingFields?: string[];
    /** Field type configuration for dynamic rendering */
    fieldTypeConfig?: FieldTypeConfig<T>;
    /** Show row number column */
    showRowNumber?: boolean;
    /** Row number column width */
    rowNumberWidth?: number | string;
    /** Row number column title */
    rowNumberTitle?: string;
    /** Custom row number render */
    rowNumberRender?: (rowIndex: number, row: T) => React.ReactNode;
    /** Enable bulk actions */
    bulkActions?: boolean;
    /** Bulk action items */
    bulkActionItems?: Array<{
        key: string;
        label: string;
        icon?: React.ReactNode;
        danger?: boolean;
        disabled?: boolean;
        onClick: (selectedRows: T[], selectedKeys: string[]) => void;
    }>;
    /** On bulk action */
    onBulkAction?: (action: string, selectedRows: T[], selectedKeys: string[]) => void;
    /** Enable print button */
    printable?: boolean;
    /** Print title */
    printTitle?: string;
    /** On print */
    onPrint?: () => void;
    /** Enable copy button */
    copyable?: boolean;
    /** On copy */
    onCopy?: (data: T[]) => void;
    /** Enable refresh button */
    refreshable?: boolean;
    /** On refresh */
    onRefresh?: () => void;
    /** Auto refresh interval (ms) */
    autoRefreshInterval?: number;
    /** Highlighted row keys */
    highlightedRowKeys?: string[];
    /** Highlight row style */
    highlightRowStyle?: CSSProperties;
    /** Highlight row class */
    highlightRowClassName?: string;
    /** Get row status */
    getRowStatus?: (row: T) => 'success' | 'warning' | 'error' | 'info' | null;
    /** Show row status indicator */
    showRowStatus?: boolean;
    /** Pinned left columns */
    pinnedLeftColumns?: string[];
    /** Pinned right columns */
    pinnedRightColumns?: string[];
    /** Show summary row */
    showSummary?: boolean;
    /** Summary data */
    summaryData?: Partial<T>;
    /** Custom summary render */
    summaryRender?: (data: T[], column: TableColumn<T>) => React.ReactNode;
    /** Enable virtual scrolling */
    virtual?: boolean;
    /** Virtual row height */
    virtualRowHeight?: number;
    /** Virtual buffer size */
    virtualBuffer?: number;
    /** Responsive mode */
    responsive?: boolean;
    /** Responsive breakpoint */
    responsiveBreakpoint?: number;
    /** Card view on mobile */
    cardViewOnMobile?: boolean;
    /** Mobile card render */
    mobileCardRender?: (row: T, rowIndex: number) => React.ReactNode;
    /** Enable context menu */
    contextMenu?: boolean;
    /** Context menu items */
    contextMenuItems?: Array<{
        key: string;
        label: string;
        icon?: React.ReactNode;
        danger?: boolean;
        disabled?: boolean | ((row: T) => boolean);
        onClick: (row: T, rowIndex: number) => void;
    }>;
    /** Enable keyboard navigation */
    keyboardNavigation?: boolean;
    /** On key down */
    onKeyDown?: (e: React.KeyboardEvent, row: T | null, rowIndex: number | null) => void;
    /** Enable row dragging */
    draggable?: boolean;
    /** On row drag end */
    onRowDragEnd?: (fromIndex: number, toIndex: number, data: T[]) => void;
    /** Enable inline add row */
    inlineAdd?: boolean;
    /** Add row position */
    addRowPosition?: 'top' | 'bottom';
    /** On add row */
    onAddRow?: (row: Partial<T>) => void;
    /** Default new row values */
    defaultNewRowValues?: Partial<T>;
    /** Row click behavior */
    rowClickBehavior?: 'select' | 'expand' | 'edit' | 'custom' | 'none';
    /** Transform data before render */
    transformData?: (data: T[]) => T[];
    /** Error state */
    error?: string | React.ReactNode;
    /** On error retry */
    onRetry?: () => void;
    /** Show skeleton loading */
    skeletonLoading?: boolean;
    /** Skeleton row count */
    skeletonRowCount?: number;
    /** Enable state persistence (localStorage) */
    persistState?: boolean;
    /** State persistence key */
    persistStateKey?: string;
    /** Persist which states */
    persistStateFields?: Array<'sort' | 'filter' | 'pagination' | 'columns' | 'search'>;
    /** Toolbar position */
    toolbarPosition?: 'top' | 'bottom' | 'both';
    /** Left toolbar content */
    toolbarLeft?: React.ReactNode;
    /** Right toolbar content */
    toolbarRight?: React.ReactNode;
    /** Center toolbar content */
    toolbarCenter?: React.ReactNode;
    /** Hide header */
    hideHeader?: boolean;
    /** Header height */
    headerHeight?: number | string;
    /** Multi-line header */
    multiLineHeader?: boolean;
    /** Table size */
    size?: 'small' | 'medium' | 'large';
    /** Table theme */
    theme?: 'light' | 'dark' | 'auto';
    /** Primary color */
    primaryColor?: string;
    /** Fixed table layout */
    fixedLayout?: boolean;
    /** Table width */
    tableWidth?: number | string;
    /** Table min width */
    tableMinWidth?: number | string;
    /** On row mouse enter */
    onRowMouseEnter?: (row: T, rowIndex: number, e: React.MouseEvent) => void;
    /** On row mouse leave */
    onRowMouseLeave?: (row: T, rowIndex: number, e: React.MouseEvent) => void;
    /** On cell click */
    onCellClick?: (cell: any, row: T, rowIndex: number, column: TableColumn<T>, columnIndex: number, e: React.MouseEvent) => void;
    /** On cell double click */
    onCellDoubleClick?: (cell: any, row: T, rowIndex: number, column: TableColumn<T>, columnIndex: number, e: React.MouseEvent) => void;
    /** On header click */
    onHeaderClick?: (column: TableColumn<T>, columnIndex: number, e: React.MouseEvent) => void;
    /** On data change (after sort/filter/page) */
    onDataChange?: (processedData: T[], info: TableChangeInfo) => void;
    /** Enable screen reader announcements */
    announceChanges?: boolean;
    /** Custom screen reader text */
    screenReaderText?: {
        sortAscending?: string;
        sortDescending?: string;
        filterActive?: string;
        rowSelected?: string;
        rowExpanded?: string;
    };
    /**
     * Enable column resizing via drag handle
     * @default true
     */
    resizable?: boolean;
    /**
     * Column resize configuration
     * Only used when resizable={true}
     */
    resizeConfig?: {
        /** Minimum column width in pixels (default: 50) */
        minWidth?: number;
        /** Maximum column width in pixels (default: 800) */
        maxWidth?: number;
        /** Enable double-click to auto-fit width (default: true) */
        autoFit?: boolean;
        /** Callback when column is resized */
        onResize?: (columnWidths: Record<string, number>) => void;
        /** Callback when resize starts */
        onResizeStart?: (dataField: string, width: number) => void;
        /** Callback when resize ends */
        onResizeEnd?: (dataField: string, width: number) => void;
        /** Initial column widths */
        defaultWidths?: Record<string, number>;
        /** Handle color */
        handleColor?: string;
        /** Handle hover color */
        handleHoverColor?: string;
        /** Handle width in pixels (default: 4) */
        handleWidth?: number;
    };
    /**
     * Enable column reordering via long press and drag
     * @default true
     */
    reorderable?: boolean;
    /**
     * Column reorder configuration
     * Only used when reorderable={true}
     */
    reorderConfig?: {
        /** Long press delay in ms before drag starts (default: 200) */
        longPressDelay?: number;
        /** Callback when columns are reordered */
        onReorder?: (newColumns: TableColumn<T>[], fromIndex: number, toIndex: number) => void;
        /** Callback when drag starts */
        onDragStart?: (column: TableColumn<T>, index: number) => void;
        /** Callback when drag ends */
        onDragEnd?: (column: TableColumn<T>, index: number) => void;
        /** Disable specific columns from being dragged */
        disabledColumns?: string[];
        /** Ghost element opacity (default: 0.8) */
        ghostOpacity?: number;
        /** Drop indicator color */
        dropIndicatorColor?: string;
        /** Enable animation (default: true) */
        animated?: boolean;
    };
}
