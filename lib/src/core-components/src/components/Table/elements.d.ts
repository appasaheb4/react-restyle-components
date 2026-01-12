/// <reference types="react" />
export declare const TableRoot: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $bordered: boolean;
    $compact: boolean;
}>> & string;
export declare const Toolbar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ToolbarGroup: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const SearchInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ToolbarButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $active?: boolean | undefined;
    $variant?: "gray" | "default" | "primary" | undefined;
}>> & string;
export declare const SelectionIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $animate?: "none" | "up" | "down" | undefined;
}>> & string;
export declare const SelectionCount: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $animate?: "none" | "up" | "down" | undefined;
}>> & string;
export declare const SelectionIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const TableWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $maxHeight?: string | number | undefined;
    $stickyHeader: boolean;
}>> & string;
export declare const StyledTable: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, {
    $striped: boolean;
    $hover: boolean;
    $compact: boolean;
}>> & string;
export declare const TableHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $sticky: boolean;
}>> & string;
export declare const HeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
export declare const HeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {
    $align: string;
    $sortable: boolean;
    $compact: boolean;
    $width?: string | number | undefined;
    $minWidth?: string | number | undefined;
    $pinned?: false | "left" | "right" | undefined;
    $customClass?: boolean | undefined;
}>> & string;
export declare const SortIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $active: boolean;
    $direction?: string | undefined;
}>> & string;
export declare const FilterRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
export declare const FilterCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $compact: boolean;
}>> & string;
export declare const FilterInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
export declare const FilterSelect: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, never>> & string;
export declare const TableBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, never>> & string;
export declare const TableRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $selected: boolean;
    $clickable: boolean;
    $disabled: boolean;
    $hasCustomSelectedStyle?: boolean | undefined;
}>> & string;
export declare const TableCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $align: string;
    $compact: boolean;
    $pinned?: false | "left" | "right" | undefined;
    $padding?: string | undefined;
    $hasCustomClass?: boolean | undefined;
    $disabled?: boolean | undefined;
    $isEditable?: boolean | undefined;
    $isInAllowRows?: boolean | undefined;
}>> & string;
export declare const Checkbox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | import("react").RefObject<HTMLInputElement> | null | undefined;
}>, never>, never>> & string;
export declare const ExpandButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $expanded: boolean;
}>> & string;
export declare const ExpandedRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
export declare const ExpandedCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>> & string;
export declare const TableFooter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, never>> & string;
export declare const FooterRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
export declare const FooterCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $align: string;
    $compact: boolean;
}>> & string;
export declare const PaginationWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const PaginationInfo: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const PaginationControls: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const PageButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $active?: boolean | undefined;
}>> & string;
export declare const PageSizeSelect: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, never>> & string;
export declare const QuickJumper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const EmptyState: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LoadingOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LoadingSpinner: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const EditableCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $editing: boolean;
    $showEditIcon?: boolean | undefined;
}>> & string;
export declare const CellEditor: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
export declare const ColumnTogglePanel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ColumnToggleHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ColumnToggleSearch: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ColumnToggleList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ColumnToggleItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $isDragging?: boolean | undefined;
    $isDragOver?: boolean | undefined;
    $reorderable?: boolean | undefined;
}>> & string;
export declare const ColumnToggleDragHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isDragging?: boolean | undefined;
}>> & string;
export declare const ColumnToggleListAnimated: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ResizeHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
