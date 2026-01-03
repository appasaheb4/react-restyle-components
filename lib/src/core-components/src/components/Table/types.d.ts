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
    /** Whether column is filterable */
    filter?: boolean;
    /** Filter type */
    filterType?: FilterType;
    /** Filter options (for select filter) */
    filterOptions?: Array<{
        value: string;
        label: string;
    }>;
    /** Custom filter component */
    filterComponent?: React.ComponentType<TableFilterProps>;
    /** Filter placeholder */
    filterPlaceholder?: string;
    /** Whether column is editable */
    editable?: boolean;
    /** Editor type */
    editorType?: 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'textarea';
    /** Editor options (for select editor) */
    editorOptions?: Array<{
        value: string;
        label: string;
    }>;
    /** Validator function */
    validator?: (value: any, row: T) => boolean | string;
    /** Custom cell renderer */
    formatter?: (cell: any, row: T, rowIndex: number, columnIndex: number) => React.ReactNode;
    /** Custom header renderer */
    headerFormatter?: (column: TableColumn<T>, columnIndex: number) => React.ReactNode;
    /** Custom footer renderer */
    footerFormatter?: (column: TableColumn<T>, data: T[]) => React.ReactNode;
    /** CSV export formatter */
    csvFormatter?: (cell: any, row: T) => string;
    /** Whether to include in CSV export */
    csvExport?: boolean;
    /** Header CSS class */
    headerClasses?: string;
    /** Cell CSS class */
    classes?: string | ((cell: any, row: T, rowIndex: number) => string);
    /** Header style */
    headerStyle?: CSSProperties | ((column: TableColumn<T>) => CSSProperties);
    /** Cell style */
    style?: CSSProperties | ((cell: any, row: T, rowIndex: number) => CSSProperties);
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
        onClick?: (e: React.MouseEvent, cell: any, row: T, rowIndex: number) => void;
        onDoubleClick?: (e: React.MouseEvent, cell: any, row: T, rowIndex: number) => void;
    };
}
/** Filter props passed to custom filter components */
export interface TableFilterProps {
    column: TableColumn;
    value: any;
    onChange: (value: any) => void;
    onClear: () => void;
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
    /** Server-side mode */
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
    /** Edit mode */
    editMode?: EditMode;
    /** On cell edit */
    onCellEdit?: (value: any, dataField: string, row: T, rowIndex: number) => void;
    /** Enable CSV export */
    exportable?: boolean;
    /** Export file name */
    exportFileName?: string;
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
}
//# sourceMappingURL=types.d.ts.map