/**
 * AG Grid Styled Components
 * Beautiful, responsive styled components for the AG Grid-like table
 */
/// <reference types="react" />
import type { ThemeVariant, AgGridTheme } from './types';
declare const themes: Record<ThemeVariant, AgGridTheme>;
export declare const getTheme: (variant: ThemeVariant, custom?: Partial<AgGridTheme>) => AgGridTheme;
export declare const GridRoot: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $responsive?: boolean | undefined;
}>> & string;
export declare const GridWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const GridToolbar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ToolbarGroup: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ToolbarButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $active?: boolean | undefined;
    $variant?: "default" | "primary" | "danger" | undefined;
}>> & string;
export declare const QuickFilter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const TableContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $stickyHeader?: boolean | undefined;
    $maxHeight?: string | number | undefined;
}>> & string;
export declare const StyledTable: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, {
    $theme: AgGridTheme;
    $fixedLayout?: boolean | undefined;
}>> & string;
export declare const TableHead: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $theme: AgGridTheme;
    $sticky?: boolean | undefined;
}>> & string;
export declare const HeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $theme: AgGridTheme;
    $height?: number | undefined;
}>> & string;
export declare const HeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {
    $theme: AgGridTheme;
    $align?: "center" | "left" | "right" | undefined;
    $sortable?: boolean | undefined;
    $sorted?: boolean | undefined;
    $resizable?: boolean | undefined;
    $pinned?: "left" | "right" | null | undefined;
    $width?: number | undefined;
    $minWidth?: number | undefined;
    $maxWidth?: number | undefined;
}>> & string;
export declare const HeaderCellContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const HeaderText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const SortIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $direction: 'asc' | 'desc' | null;
    $active?: boolean | undefined;
}>> & string;
export declare const FilterIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $active?: boolean | undefined;
    $theme: AgGridTheme;
}>> & string;
export declare const ResizeHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $resizing?: boolean | undefined;
}>> & string;
export declare const GroupHeaderRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const GroupHeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {
    $theme: AgGridTheme;
    $colSpan: number;
}>> & string;
export declare const FloatingFilterRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $theme: AgGridTheme;
    $height?: number | undefined;
}>> & string;
export declare const FloatingFilterCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const TableBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const TableRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $theme: AgGridTheme;
    $selected?: boolean | undefined;
    $highlighted?: boolean | undefined;
    $striped?: boolean | undefined;
    $even?: boolean | undefined;
    $height?: number | undefined;
    $animate?: boolean | undefined;
    $dragging?: boolean | undefined;
    $dragOver?: boolean | undefined;
    $group?: boolean | undefined;
    $groupLevel?: number | undefined;
}>> & string;
export declare const TableCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $theme: AgGridTheme;
    $align?: "center" | "left" | "right" | undefined;
    $pinned?: "left" | "right" | null | undefined;
    $editing?: boolean | undefined;
    $flashing?: boolean | undefined;
    $width?: number | undefined;
}>> & string;
export declare const CellContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $wrapText?: boolean | undefined;
    $theme?: AgGridTheme | undefined;
}>> & string;
export declare const Checkbox: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const CheckboxCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ExpandButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $expanded?: boolean | undefined;
    $level?: number | undefined;
}>> & string;
export declare const GroupCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $level?: number | undefined;
}>> & string;
export declare const DragHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $dragging?: boolean | undefined;
}>> & string;
export declare const CellEditor: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const TableFooter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const FooterRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const FooterCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $theme: AgGridTheme;
    $align?: "center" | "left" | "right" | undefined;
}>> & string;
export declare const PaginationBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const PaginationInfo: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const PaginationControls: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const PageButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $active?: boolean | undefined;
}>> & string;
export declare const PageSizeSelect: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const StatusBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const StatusItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const SideBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $position: 'left' | 'right';
    $width?: number | undefined;
}>> & string;
export declare const SideBarTabs: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SideBarTab: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $active?: boolean | undefined;
}>> & string;
export declare const SideBarContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const Overlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const LoadingOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$theme"> & {
    $theme: AgGridTheme;
}, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, never>> & string;
export declare const Spinner: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $size?: number | undefined;
}>> & string;
export declare const NoRowsOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$theme"> & {
    $theme: AgGridTheme;
}, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, never>> & string;
export declare const ContextMenu: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $x: number;
    $y: number;
}>> & string;
export declare const ContextMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $disabled?: boolean | undefined;
    $danger?: boolean | undefined;
}>> & string;
export declare const ContextMenuDivider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ColumnMenu: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const MobileCardContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const MobileCard: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $selected?: boolean | undefined;
}>> & string;
export declare const MobileCardHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const MobileCardRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const MobileCardLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const MobileCardValue: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SkeletonRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SkeletonCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SkeletonBlock: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $width?: string | undefined;
}>> & string;
export declare const TooltipContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $x: number;
    $y: number;
}>> & string;
export declare const DragGhost: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $visible: boolean;
}>> & string;
export declare const SelectionBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $visible: boolean;
}>> & string;
export declare const SelectionActions: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const SidePanel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $open: boolean;
    $width?: number | undefined;
}>> & string;
export declare const SidePanelTabs: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $collapsed?: boolean | undefined;
}>> & string;
export declare const SidePanelTab: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $active?: boolean | undefined;
    $collapsed?: boolean | undefined;
}>> & string;
export declare const SidePanelContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SidePanelSearch: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SidePanelSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SidePanelSectionHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $collapsible?: boolean | undefined;
}>> & string;
export declare const SidePanelColumnItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $indent?: number | undefined;
    $dragging?: boolean | undefined;
    $selected?: boolean | undefined;
}>> & string;
export declare const SidePanelDragHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SidePanelGroupLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export declare const RowGroupsZone: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $dragOver?: boolean | undefined;
    $hasItems?: boolean | undefined;
}>> & string;
export declare const RowGroupsLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const RowGroupChip: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ValuesPanel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ValueItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ValueItemLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ValueItemRemove: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const PivotModeToggle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const PivotModeLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ToggleSwitch: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const HeaderMenuButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $active?: boolean | undefined;
}>> & string;
export declare const ColumnMenuPopup: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $x: number;
    $y: number;
}>> & string;
export declare const ColumnMenuSection: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ColumnMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $disabled?: boolean | undefined;
    $hasSubmenu?: boolean | undefined;
}>> & string;
export declare const ColumnMenuSubmenu: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SetFilterContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SetFilterHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SetFilterSearch: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SetFilterList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SetFilterItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $theme: AgGridTheme;
    $selectAll?: boolean | undefined;
}>> & string;
export declare const SetFilterActions: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const SetFilterButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $theme: AgGridTheme;
    $primary?: boolean | undefined;
}>> & string;
export declare const FilterPanelColumn: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const FilterPanelHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $expanded?: boolean | undefined;
    $hasFilter?: boolean | undefined;
}>> & string;
export declare const FilterPanelContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
    $expanded?: boolean | undefined;
}>> & string;
export declare const GridLayout: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const GridMainArea: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ColumnVisibilityDropdown: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ColumnVisibilityList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $theme: AgGridTheme;
}>> & string;
export declare const ColumnVisibilityItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $theme: AgGridTheme;
}>> & string;
export { themes };
