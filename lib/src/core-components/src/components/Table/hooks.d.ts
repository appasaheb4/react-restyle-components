/// <reference types="react" />
import { TableColumn, TableSortState, SortDirection, TableFilterState } from './types';
/**
 * Debounce function for table
 */
export declare function useTableDebounce<T>(value: T, delay: number): T;
/**
 * Hook for managing sort state
 */
export declare function useSortState(defaultSort?: TableSortState, controlledSort?: TableSortState, multiSort?: boolean): {
    sort: TableSortState;
    handleSort: (field: string, currentOrder: SortDirection) => {
        field: string;
        order: SortDirection;
    };
    setSort: import("react").Dispatch<import("react").SetStateAction<TableSortState>>;
};
/**
 * Hook for managing filter state
 */
export declare function useFilterState(defaultFilters?: TableFilterState, controlledFilters?: TableFilterState): {
    filters: TableFilterState;
    setFilter: (field: string, value: any) => void;
    clearFilters: () => void;
    setFilters: import("react").Dispatch<import("react").SetStateAction<TableFilterState>>;
};
/**
 * Hook for managing pagination state
 */
export declare function usePaginationState(defaultPage?: number, defaultPageSize?: number, totalSize?: number): {
    page: number;
    pageSize: number;
    totalPages: number;
    goToPage: (newPage: number) => void;
    goToNextPage: () => void;
    goToPrevPage: () => void;
    goToFirstPage: () => void;
    goToLastPage: () => void;
    changePageSize: (newSize: number) => void;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPageSize: import("react").Dispatch<import("react").SetStateAction<number>>;
};
/**
 * Hook for managing row selection
 */
export declare function useRowSelection<T>(data: T[], keyField?: string, mode?: 'none' | 'single' | 'multiple' | 'checkbox', controlledSelectedKeys?: string[], getCheckboxProps?: (row: T) => {
    disabled?: boolean;
}): {
    selectedKeys: Set<string>;
    isSelected: (key: string) => boolean;
    toggleRow: (row: T) => {
        selectedKeys: any[];
        selectedRows: T[];
    } | undefined;
    toggleAll: (selectAll: boolean) => {
        selectedKeys: any[];
        selectedRows: T[];
    };
    isAllSelected: boolean;
    isIndeterminate: boolean;
    clearSelection: () => void;
    setSelected: import("react").Dispatch<import("react").SetStateAction<Set<string>>>;
};
/**
 * Hook for managing row expansion
 */
export declare function useRowExpansion<T>(keyField?: string, defaultExpandedKeys?: string[], controlledExpandedKeys?: string[], accordion?: boolean): {
    expandedKeys: Set<string>;
    isExpanded: (key: string) => boolean;
    toggleExpand: (row: T) => {
        expandedKeys: any[];
        expanded: boolean;
        row: T;
    };
    setExpanded: import("react").Dispatch<import("react").SetStateAction<Set<string>>>;
};
/**
 * Hook for managing column visibility
 */
export declare function useColumnVisibility<T>(columns: TableColumn<T>[], storageKey?: string): {
    hiddenColumns: Set<string>;
    visibleColumns: TableColumn<T>[];
    toggleColumn: (dataField: string) => void;
    showAllColumns: () => void;
    isColumnHidden: (field: string) => boolean;
};
/**
 * Sort data locally
 */
export declare function sortData<T>(data: T[], sort: TableSortState, columns: TableColumn<T>[]): T[];
/**
 * Filter data locally
 */
export declare function filterData<T>(data: T[], filters: TableFilterState, columns: TableColumn<T>[], searchValue?: string): T[];
/**
 * Paginate data locally
 */
export declare function paginateData<T>(data: T[], page: number, pageSize: number): T[];
/**
 * Get nested value from object
 */
export declare function getNestedValue(obj: any, path: string): any;
/**
 * Export data to CSV
 */
export declare function exportToCSV<T>(data: T[], columns: TableColumn<T>[], fileName: string): void;
//# sourceMappingURL=hooks.d.ts.map