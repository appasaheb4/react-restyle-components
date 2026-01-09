/**
 * Column Resize Feature
 *
 * This file contains the column resizing functionality for the Table component.
 * It can be easily enabled/disabled via props without affecting core table logic.
 *
 * Features:
 * - Drag to resize columns
 * - Min/Max width constraints
 * - Double-click to auto-fit column width
 * - Persist column widths (optional)
 *
 * Usage:
 * <Table
 *   resizable={true}
 *   resizeConfig={{
 *     minWidth: 50,
 *     maxWidth: 500,
 *     onResize: (columnWidths) => console.log(columnWidths),
 *   }}
 * />
 */
import React from 'react';
import { TableColumn } from './types';
export interface ColumnResizeConfig {
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
}
export interface UseColumnResizeProps<T> {
    columns: TableColumn<T>[];
    config?: ColumnResizeConfig;
    enabled?: boolean;
    tableId?: string;
}
export interface UseColumnResizeReturn {
    columnWidths: Record<string, number>;
    getResizeHandle: (dataField: string, headerRef: React.RefObject<HTMLElement>) => React.ReactNode;
    resetWidths: () => void;
    setColumnWidth: (dataField: string, width: number) => void;
    isResizing: boolean;
    resizingColumn: string | null;
}
export declare const ResizeHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isResizing: boolean;
    $handleColor?: string | undefined;
    $handleHoverColor?: string | undefined;
    $handleWidth?: number | undefined;
}>> & string;
export declare const ResizeLine: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $left: number;
    $visible: boolean;
    $color?: string | undefined;
}>> & string;
export declare function useColumnResize<T>({ columns, config, enabled, tableId, }: UseColumnResizeProps<T>): UseColumnResizeReturn;
export declare function getColumnStyle<T>(column: TableColumn<T>, columnWidths: Record<string, number>, resizable: boolean, isResizing?: boolean): React.CSSProperties;
interface ResizableHeaderCellProps {
    children: React.ReactNode;
    dataField: string;
    resizable: boolean;
    getResizeHandle: (dataField: string, headerRef: React.RefObject<HTMLElement>) => React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
export declare const ResizableHeaderCell: React.FC<ResizableHeaderCellProps>;
declare const _default: {
    useColumnResize: typeof useColumnResize;
    getColumnStyle: typeof getColumnStyle;
    ResizeHandle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        $isResizing: boolean;
        $handleColor?: string | undefined;
        $handleHoverColor?: string | undefined;
        $handleWidth?: number | undefined;
    }>> & string;
    ResizeLine: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        $left: number;
        $visible: boolean;
        $color?: string | undefined;
    }>> & string;
    ResizableHeaderCell: React.FC<ResizableHeaderCellProps>;
};
export default _default;
