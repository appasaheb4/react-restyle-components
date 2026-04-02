/**
 * Column Reorder Feature
 *
 * This file contains the column reordering (drag & drop) functionality for the Table component.
 * It can be easily enabled/disabled via props without affecting core table logic.
 *
 * Features:
 * - Long press on header to start dragging
 * - Drag column to new position
 * - Visual feedback during drag (ghost element, drop indicators)
 * - Callback when columns are reordered
 *
 * Usage:
 * <Table
 *   reorderable={true}
 *   reorderConfig={{
 *     longPressDelay: 200,
 *     onReorder: (newColumns, fromIndex, toIndex) => console.log(newColumns),
 *   }}
 * />
 */
import React from 'react';
import { TableColumn } from './types';
export interface ColumnReorderConfig<T = any> {
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
}
export interface UseColumnReorderProps<T> {
    columns: TableColumn<T>[];
    config?: ColumnReorderConfig<T>;
    enabled?: boolean;
}
export interface UseColumnReorderReturn<T> {
    orderedColumns: TableColumn<T>[];
    getDragHandleProps: (column: TableColumn<T>, index: number) => DragHandleProps;
    isDragging: boolean;
    draggedColumn: string | null;
    dragOverColumn: string | null;
    ghostPosition: {
        x: number;
        y: number;
    };
    ghostText: string;
    resetOrder: () => void;
}
export interface DragHandleProps {
    onMouseDown: (e: React.MouseEvent) => void;
    onTouchStart: (e: React.TouchEvent) => void;
    'data-draggable': boolean;
    'data-dragging': boolean;
    'data-drag-over': boolean;
    style: React.CSSProperties;
}
export declare const DragGhost: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $visible: boolean;
    $x: number;
    $y: number;
    $opacity: number;
}>> & string;
export declare const DropIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $visible: boolean;
    $position: 'left' | 'right';
    $color: string;
}>> & string;
export declare const DraggableHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isDragging: boolean;
    $isDragOver: boolean;
    $isDisabled: boolean;
    $animated: boolean;
}>> & string;
export declare function useColumnReorder<T>({ columns, config, enabled, }: UseColumnReorderProps<T>): UseColumnReorderReturn<T>;
interface ColumnReorderGhostProps {
    visible: boolean;
    x: number;
    y: number;
    text: string;
    opacity?: number;
}
export declare const ColumnReorderGhost: React.FC<ColumnReorderGhostProps>;
interface ColumnDropIndicatorProps {
    visible: boolean;
    position: 'left' | 'right';
    color?: string;
}
export declare const ColumnDropIndicator: React.FC<ColumnDropIndicatorProps>;
export declare function getReorderableHeaderProps<T>(column: TableColumn<T>, index: number, getDragHandleProps: (column: TableColumn<T>, index: number) => DragHandleProps, isDragging: boolean, draggedColumn: string | null, dragOverColumn: string | null): {
    wrapperProps: DragHandleProps;
    showDropIndicator: boolean;
    dropPosition: 'left' | 'right';
};
declare const _default: {
    useColumnReorder: typeof useColumnReorder;
    DragGhost: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        $visible: boolean;
        $x: number;
        $y: number;
        $opacity: number;
    }>> & string;
    DropIndicator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        $visible: boolean;
        $position: "left" | "right";
        $color: string;
    }>> & string;
    DraggableHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        $isDragging: boolean;
        $isDragOver: boolean;
        $isDisabled: boolean;
        $animated: boolean;
    }>> & string;
    ColumnReorderGhost: React.FC<ColumnReorderGhostProps>;
    ColumnDropIndicator: React.FC<ColumnDropIndicatorProps>;
    getReorderableHeaderProps: typeof getReorderableHeaderProps;
};
export default _default;
