/**
 * AG Grid Hooks
 * Custom React hooks for AG Grid-like functionality
 */
import React from 'react';
import type { ColDef, RowNode, SortDirection, Column, ColumnState } from './types';
export interface SortModel {
    colId: string;
    sort: SortDirection;
}
export declare function useSorting<T>(initialSort?: SortModel[], multiSort?: boolean): {
    sortModel: SortModel[];
    setSortModel: React.Dispatch<React.SetStateAction<SortModel[]>>;
    handleSort: (colId: string, multiSortKey?: boolean) => void;
    getSortForColumn: (colId: string) => {
        sort: SortDirection;
        sortIndex?: number;
    };
    clearSort: () => void;
    sortData: (data: T[], columns: ColDef<T>[]) => T[];
};
export interface FilterModel {
    [field: string]: {
        filterType: string;
        type?: string;
        filter?: string | number;
        filterTo?: string | number;
        values?: string[];
        dateFrom?: string;
        dateTo?: string;
    };
}
export declare function useFiltering<T>(initialFilters?: FilterModel): {
    filterModel: FilterModel;
    setFilterModel: React.Dispatch<React.SetStateAction<FilterModel>>;
    quickFilterText: string;
    setQuickFilterText: React.Dispatch<React.SetStateAction<string>>;
    setColumnFilter: (field: string, filter: FilterModel[string] | null) => void;
    clearFilters: () => void;
    isFilterActive: (field: string) => boolean;
    hasActiveFilters: boolean;
    filterData: (data: T[], columns: ColDef<T>[]) => T[];
};
export declare function usePagination(totalRows: number, initialPageSize?: number, initialPage?: number): {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalRows: number;
    startRow: number;
    endRow: number;
    goToPage: (page: number) => void;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    goToFirstPage: () => void;
    goToLastPage: () => void;
    changePageSize: (size: number) => void;
    paginateData: <T>(data: T[]) => T[];
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setPageSize: React.Dispatch<React.SetStateAction<number>>;
};
export declare function useRowSelection<T>(data: T[], getRowId: (row: T) => string, mode?: 'single' | 'multiple', isRowSelectable?: (node: RowNode<T>) => boolean): {
    selectedIds: Set<string>;
    setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
    isSelected: (id: string) => boolean;
    toggleRow: (row: T, index: number) => void;
    selectAll: () => void;
    deselectAll: () => void;
    selectRows: (rows: T[]) => void;
    isAllSelected: boolean;
    isIndeterminate: boolean;
    selectedRows: T[];
    selectedNodes: RowNode<T>[];
};
export declare function useRowExpansion<T>(getRowId: (row: T) => string, defaultExpanded?: number): {
    expandedIds: Set<string>;
    setExpandedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
    isExpanded: (id: string) => boolean;
    toggleExpand: (row: T) => void;
    expandAll: (rows: T[]) => void;
    collapseAll: () => void;
    setExpanded: (id: string, expanded: boolean) => void;
};
export declare function useColumnState<T>(columns: ColDef<T>[], persistKey?: string): {
    columnState: ColumnState[];
    setColumnState: React.Dispatch<React.SetStateAction<ColumnState[]>>;
    getColumnState: (colId: string) => ColumnState | undefined;
    setColumnVisible: (colIdOrColumn: string | Column<T>, visible: boolean) => void;
    setColumnWidth: (colIdOrColumn: string | Column<T>, width: number) => void;
    setColumnPinned: (colIdOrColumn: string | Column<T>, pinned: 'left' | 'right' | null) => void;
    moveColumn: (colIdOrColumn: string | Column<T>, toIndex: number) => void;
    resetColumnState: () => void;
    processedColumns: ColDef<T>[];
    visibleColumns: ColDef<T>[];
};
export interface EditingCell {
    rowId: string;
    colId: string;
    rowIndex: number;
    value: any;
}
export declare function useCellEditing<T>(onCellValueChanged?: (params: {
    data: T;
    oldValue: any;
    newValue: any;
    colId: string;
    rowIndex: number;
}) => void): {
    editingCell: EditingCell | null;
    startEditing: (rowId: string, colId: string, rowIndex: number, value: any) => void;
    stopEditing: (cancel?: boolean, newValue?: any) => void;
    isEditing: (rowId: string, colId: string) => boolean;
    undo: () => {
        data: T;
        field: string;
        oldValue: any;
        newValue: any;
    } | null;
    redo: () => {
        data: T;
        field: string;
        oldValue: any;
        newValue: any;
    } | null;
    canUndo: boolean;
    canRedo: boolean;
};
export interface GroupedRow<T> {
    isGroup: true;
    groupValue: any;
    groupField: string;
    children: (T | GroupedRow<T>)[];
    level: number;
    expanded: boolean;
    aggregations?: Record<string, any>;
}
export declare function useRowGrouping<T extends object>(data: T[], groupByFields: string[], aggregations?: Record<string, (values: any[]) => any>): {
    groupedData: (T | GroupedRow<T>)[];
    flattenedData: (T | GroupedRow<T>)[];
    expandedGroups: Set<string>;
    toggleGroup: (field: string, value: any, level: number) => void;
    expandAllGroups: () => void;
    collapseAllGroups: () => void;
};
export declare function useVirtualScrolling<T>(data: T[], rowHeight: number, containerHeight: number, overscan?: number): {
    totalHeight: number;
    visibleData: T[];
    visibleRange: {
        startIndex: number;
        endIndex: number;
    };
    offsetY: number;
    handleScroll: (e: React.UIEvent<HTMLElement>) => void;
    scrollTop: number;
};
export declare function useClipboard<T>(): {
    copyToClipboard: (data: T[], columns: ColDef<T>[], includeHeaders?: boolean) => Promise<void>;
    pasteFromClipboard: () => Promise<string[][]>;
};
export declare function useResponsive(breakpoint?: number): {
    isMobile: boolean;
};
export interface ContextMenuState {
    visible: boolean;
    x: number;
    y: number;
    data?: any;
}
export declare function useContextMenu(): {
    contextMenu: ContextMenuState;
    showContextMenu: (x: number, y: number, data?: any) => void;
    hideContextMenu: () => void;
};
export declare function useKeyboardNavigation<T>(data: T[], columns: ColDef<T>[], onCellSelect?: (rowIndex: number, colId: string) => void, onEnter?: (rowIndex: number, colId: string) => void): {
    focusedCell: {
        rowIndex: number;
        colIndex: number;
    } | null;
    setFocusedCell: React.Dispatch<React.SetStateAction<{
        rowIndex: number;
        colIndex: number;
    } | null>>;
    handleKeyDown: (e: KeyboardEvent) => void;
};
export declare function getNestedValue(obj: any, path: string): any;
export declare function setNestedValue(obj: any, path: string, value: any): any;
export declare function createRowNode<T>(data: T, index: number, id?: string): RowNode<T>;
export declare const aggregations: {
    sum: (values: number[]) => number;
    avg: (values: number[]) => number;
    min: (values: number[]) => number;
    max: (values: number[]) => number;
    count: (values: any[]) => number;
    first: <T>(values: T[]) => T;
    last: <T_1>(values: T_1[]) => T_1;
};
export declare function exportToCsv<T>(data: T[], columns: ColDef<T>[], filename?: string): void;
export interface SetFilterModel {
    values: Set<string>;
    selectAll: boolean;
}
export declare function useSetFilter<T>(data: T[], field: string): {
    uniqueValues: string[];
    filteredValues: string[];
    selectedValues: Set<string>;
    selectAll: boolean;
    isIndeterminate: boolean;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    toggleValue: (value: string) => void;
    toggleSelectAll: () => void;
    selectNone: () => void;
    isValueSelected: (value: string) => boolean;
    filterFunction: (row: T) => boolean;
};
export interface AggregationValue {
    field: string;
    aggFunc: 'sum' | 'avg' | 'min' | 'max' | 'count';
    displayName: string;
}
export declare function useAggregationPanel<T>(data: T[]): {
    valueColumns: AggregationValue[];
    addValueColumn: (field: string, aggFunc: AggregationValue['aggFunc'], displayName: string) => void;
    removeValueColumn: (field: string, aggFunc: AggregationValue['aggFunc']) => void;
    clearValueColumns: () => void;
    aggregatedValues: Record<string, number>;
};
export declare function useRowGroupingPanel<T extends object>(columns: ColDef<T>[]): {
    rowGroupColumns: string[];
    addRowGroupColumn: (field: string) => void;
    removeRowGroupColumn: (field: string) => void;
    moveRowGroupColumn: (fromIndex: number, toIndex: number) => void;
    clearRowGroupColumns: () => void;
    groupableColumns: ColDef<T>[];
    groupedColumnsInfo: {
        field: string;
        headerName: string;
    }[];
};
export interface ColumnMenuState {
    visible: boolean;
    colId: string | null;
    x: number;
    y: number;
}
export declare function useColumnMenu(): {
    menuState: ColumnMenuState;
    showColumnMenu: (colId: string, x: number, y: number) => void;
    hideColumnMenu: () => void;
    filterDropdownState: {
        visible: boolean;
        colId: string | null;
        x: number;
        y: number;
    };
    showFilterDropdown: (colId: string, x: number, y: number) => void;
    hideFilterDropdown: () => void;
};
export type SidePanelTab = 'columns' | 'filters';
export declare function useSidePanel(defaultOpen?: boolean, defaultTab?: SidePanelTab): {
    isOpen: boolean;
    activeTab: SidePanelTab;
    toggle: () => void;
    open: () => void;
    close: () => void;
    switchTab: (tab: SidePanelTab) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setActiveTab: React.Dispatch<React.SetStateAction<SidePanelTab>>;
};
export declare function usePivotMode(): {
    isPivotMode: boolean;
    setIsPivotMode: React.Dispatch<React.SetStateAction<boolean>>;
    togglePivotMode: () => void;
    pivotColumns: string[];
    addPivotColumn: (field: string) => void;
    removePivotColumn: (field: string) => void;
};
