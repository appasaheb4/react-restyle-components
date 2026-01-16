import { jsx as _jsx } from "react/jsx-runtime";
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
import { useRef, useState, useCallback, useEffect, useMemo, } from 'react';
import { styled, css, keyframes } from 'styled-components';
// ============================================================================
// Animations
// ============================================================================
const shake = keyframes `
  0%, 100% { transform: translateX(0) rotate(0deg); }
  10% { transform: translateX(-2px) rotate(-0.5deg); }
  20% { transform: translateX(2px) rotate(0.5deg); }
  30% { transform: translateX(-2px) rotate(-0.5deg); }
  40% { transform: translateX(2px) rotate(0.5deg); }
  50% { transform: translateX(-1px) rotate(-0.3deg); }
  60% { transform: translateX(1px) rotate(0.3deg); }
  70% { transform: translateX(-1px) rotate(-0.2deg); }
  80% { transform: translateX(1px) rotate(0.2deg); }
  90% { transform: translateX(0) rotate(0deg); }
`;
const pulse = keyframes `
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.7;
    transform: scale(0.98);
  }
`;
const float = keyframes `
  0%, 100% { transform: translate(-50%, -50%) scale(1.05) rotate(-1deg); }
  50% { transform: translate(-50%, -50%) scale(1.08) rotate(1deg); }
`;
const glowPulse = keyframes `
  0%, 100% { 
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
                0 0 0 0 rgba(59, 130, 246, 0);
  }
  50% { 
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4),
                0 0 20px 4px rgba(59, 130, 246, 0.3);
  }
`;
const dropIndicatorPulse = keyframes `
  0%, 100% { 
    opacity: 1;
    transform: scaleY(1);
  }
  50% { 
    opacity: 0.8;
    transform: scaleY(1.02);
  }
`;
const slideDown = keyframes `
  from { 
    transform: translateY(-10px) scaleY(0.5);
    opacity: 0;
  }
  to { 
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;
// ============================================================================
// Styled Components
// ============================================================================
export const DragGhost = styled.div `
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  z-index: 10000;
  pointer-events: none;
  opacity: ${({ $visible, $opacity }) => ($visible ? $opacity : 0)};
  transform: translate(-50%, -50%) scale(${({ $visible }) => ($visible ? 1.05 : 0.8)});
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Glass morphism effect */
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.95) 0%,
    rgba(37, 99, 235, 0.9) 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* Floating animation when visible */
  ${({ $visible }) => $visible &&
    css `
      animation: ${float} 2s ease-in-out infinite, ${glowPulse} 1.5s ease-in-out infinite;
    `}

  /* Icon with animation */
  &::before {
    content: '⋮⋮';
    margin-right: 10px;
    font-size: 14px;
    opacity: 0.8;
    letter-spacing: 1px;
  }

  /* Subtle gradient overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
  }
`;
export const DropIndicator = styled.div `
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 4px;
  z-index: 100;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  ${({ $position }) => $position === 'left'
    ? css `left: -2px;`
    : css `right: -2px;`}

  /* Gradient background with glow */
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ $color }) => $color} 10%,
    ${({ $color }) => $color} 90%,
    transparent 100%
  );
  border-radius: 2px;
  box-shadow: 
    0 0 8px ${({ $color }) => $color},
    0 0 16px ${({ $color }) => $color}80;

  /* Pulsing animation when visible */
  ${({ $visible }) => $visible &&
    css `
      animation: ${dropIndicatorPulse} 0.8s ease-in-out infinite, ${slideDown} 0.2s ease-out;
    `}
  
  /* Top arrow */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${({ $color }) => $color};
    filter: drop-shadow(0 -2px 4px ${({ $color }) => $color}80);
  }
  
  /* Bottom arrow */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({ $color }) => $color};
    filter: drop-shadow(0 2px 4px ${({ $color }) => $color}80);
  }
`;
export const DraggableHeader = styled.div `
  position: relative;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'grab')};
  user-select: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Dragging state - semi-transparent with scale */
  ${({ $isDragging }) => $isDragging &&
    css `
      opacity: 0.35;
      transform: scale(0.95);
      cursor: grabbing;
      filter: grayscale(50%);
      
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 5px,
          rgba(59, 130, 246, 0.1) 5px,
          rgba(59, 130, 246, 0.1) 10px
        );
        border-radius: 4px;
        pointer-events: none;
      }
    `}
  
  /* Drag over state - highlight target */
  ${({ $isDragOver, $animated }) => $isDragOver &&
    css `
      background: rgba(59, 130, 246, 0.15);
      transform: scale(1.02);
      box-shadow: inset 0 0 0 2px rgba(59, 130, 246, 0.4);
      border-radius: 4px;
      
      ${$animated &&
        css `
          animation: ${pulse} 0.6s ease-in-out infinite;
        `}
    `}
  
  /* Disabled state */
  ${({ $isDisabled }) => $isDisabled &&
    css `
      cursor: not-allowed;
      opacity: 0.6;
      
      &::before {
        content: '🔒';
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 10px;
        opacity: 0.5;
      }
    `}
  
  &:active {
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'grabbing')};
  }

  /* Hover state for grabbable columns */
  &:hover {
    ${({ $isDisabled, $isDragging }) => !$isDisabled &&
    !$isDragging &&
    css `
        background: rgba(255, 255, 255, 0.1);
      `}
  }
`;
// ============================================================================
// Hook: useColumnReorder
// ============================================================================
export function useColumnReorder({ columns, config = {}, enabled = true, }) {
    const { longPressDelay = 200, onReorder, onDragStart, onDragEnd, disabledColumns = [], ghostOpacity = 0.8, dropIndicatorColor = '#3b82f6', animated = true, } = config;
    // State
    const [orderedColumns, setOrderedColumns] = useState(columns);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedColumn, setDraggedColumn] = useState(null);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [dragOverColumn, setDragOverColumn] = useState(null);
    const [ghostPosition, setGhostPosition] = useState({ x: 0, y: 0 });
    const [ghostText, setGhostText] = useState('');
    // Refs
    const longPressTimerRef = useRef(null);
    const startPosRef = useRef({ x: 0, y: 0 });
    const isDraggingRef = useRef(false);
    // Update ordered columns when columns prop changes
    useEffect(() => {
        setOrderedColumns(columns);
    }, [columns]);
    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (longPressTimerRef.current) {
                clearTimeout(longPressTimerRef.current);
            }
        };
    }, []);
    // Start drag after long press
    const startDrag = useCallback((column, index, x, y) => {
        if (disabledColumns.includes(column.dataField))
            return;
        isDraggingRef.current = true;
        setIsDragging(true);
        setDraggedColumn(column.dataField);
        setDraggedIndex(index);
        setGhostPosition({ x, y });
        setGhostText(column.headerText || column.text);
        onDragStart?.(column, index);
        // Add global event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    }, [disabledColumns, onDragStart]);
    // Handle mouse/touch move during drag
    const handleMouseMove = useCallback((e) => {
        if (!isDraggingRef.current)
            return;
        setGhostPosition({ x: e.clientX, y: e.clientY });
        updateDragOver(e.clientX, e.clientY);
    }, []);
    const handleTouchMove = useCallback((e) => {
        if (!isDraggingRef.current)
            return;
        e.preventDefault();
        const touch = e.touches[0];
        setGhostPosition({ x: touch.clientX, y: touch.clientY });
        updateDragOver(touch.clientX, touch.clientY);
    }, []);
    // Update which column we're hovering over
    const updateDragOver = useCallback((x, y) => {
        const elements = document.elementsFromPoint(x, y);
        const headerCell = elements.find((el) => el.getAttribute('data-draggable') === 'true');
        if (headerCell) {
            const dataField = headerCell.getAttribute('data-column');
            if (dataField && dataField !== draggedColumn) {
                setDragOverColumn(dataField);
            }
        }
        else {
            setDragOverColumn(null);
        }
    }, [draggedColumn]);
    // End drag
    const endDrag = useCallback(() => {
        if (!isDraggingRef.current)
            return;
        isDraggingRef.current = false;
        // Find the target index
        if (draggedColumn && dragOverColumn && draggedIndex !== null) {
            const fromIndex = draggedIndex;
            const toIndex = orderedColumns.findIndex((c) => c.dataField === dragOverColumn);
            if (fromIndex !== toIndex && toIndex !== -1) {
                const newColumns = [...orderedColumns];
                const [removed] = newColumns.splice(fromIndex, 1);
                newColumns.splice(toIndex, 0, removed);
                setOrderedColumns(newColumns);
                onReorder?.(newColumns, fromIndex, toIndex);
            }
        }
        // Get the column for callback
        const column = orderedColumns.find((c) => c.dataField === draggedColumn);
        if (column && draggedIndex !== null) {
            onDragEnd?.(column, draggedIndex);
        }
        // Reset state
        setIsDragging(false);
        setDraggedColumn(null);
        setDraggedIndex(null);
        setDragOverColumn(null);
        // Remove global event listeners
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, [
        draggedColumn,
        dragOverColumn,
        draggedIndex,
        orderedColumns,
        onReorder,
        onDragEnd,
        handleMouseMove,
        handleTouchMove,
    ]);
    const handleMouseUp = useCallback(() => {
        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
        endDrag();
    }, [endDrag]);
    const handleTouchEnd = useCallback(() => {
        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
        endDrag();
    }, [endDrag]);
    // Mouse down handler - starts long press timer
    const handleMouseDown = useCallback((e, column, index) => {
        if (!enabled || disabledColumns.includes(column.dataField))
            return;
        e.preventDefault();
        startPosRef.current = { x: e.clientX, y: e.clientY };
        // Start long press timer
        longPressTimerRef.current = setTimeout(() => {
            startDrag(column, index, e.clientX, e.clientY);
        }, longPressDelay);
        // Add mouse move listener to cancel if moved too much
        const handleEarlyMove = (moveEvent) => {
            const dx = moveEvent.clientX - startPosRef.current.x;
            const dy = moveEvent.clientY - startPosRef.current.y;
            if (Math.sqrt(dx * dx + dy * dy) > 10) {
                if (longPressTimerRef.current) {
                    clearTimeout(longPressTimerRef.current);
                    longPressTimerRef.current = null;
                }
                document.removeEventListener('mousemove', handleEarlyMove);
            }
        };
        document.addEventListener('mousemove', handleEarlyMove);
        // Cleanup early move listener on mouse up
        const cleanup = () => {
            document.removeEventListener('mousemove', handleEarlyMove);
            document.removeEventListener('mouseup', cleanup);
            if (longPressTimerRef.current && !isDraggingRef.current) {
                clearTimeout(longPressTimerRef.current);
                longPressTimerRef.current = null;
            }
        };
        document.addEventListener('mouseup', cleanup);
    }, [enabled, disabledColumns, longPressDelay, startDrag]);
    // Touch start handler
    const handleTouchStart = useCallback((e, column, index) => {
        if (!enabled || disabledColumns.includes(column.dataField))
            return;
        const touch = e.touches[0];
        startPosRef.current = { x: touch.clientX, y: touch.clientY };
        // Start long press timer
        longPressTimerRef.current = setTimeout(() => {
            startDrag(column, index, touch.clientX, touch.clientY);
        }, longPressDelay);
    }, [enabled, disabledColumns, longPressDelay, startDrag]);
    // Get drag handle props for a column header
    const getDragHandleProps = useCallback((column, index) => {
        const isDisabled = disabledColumns.includes(column.dataField);
        const isThisDragging = draggedColumn === column.dataField;
        const isThisDragOver = dragOverColumn === column.dataField;
        return {
            onMouseDown: (e) => handleMouseDown(e, column, index),
            onTouchStart: (e) => handleTouchStart(e, column, index),
            'data-draggable': enabled && !isDisabled,
            'data-dragging': isThisDragging,
            'data-drag-over': isThisDragOver,
            style: {
                cursor: enabled && !isDisabled ? 'grab' : 'default',
                opacity: isThisDragging ? 0.4 : 1,
                transition: 'opacity 0.2s ease',
            },
        };
    }, [
        enabled,
        disabledColumns,
        draggedColumn,
        dragOverColumn,
        handleMouseDown,
        handleTouchStart,
    ]);
    // Reset column order
    const resetOrder = useCallback(() => {
        setOrderedColumns(columns);
    }, [columns]);
    // Render ghost element (called from Table component)
    const GhostElement = useMemo(() => (_jsx(DragGhost, { "$visible": isDragging, "$x": ghostPosition.x, "$y": ghostPosition.y, "$opacity": ghostOpacity, children: ghostText })), [isDragging, ghostPosition, ghostOpacity, ghostText]);
    return {
        orderedColumns,
        getDragHandleProps,
        isDragging,
        draggedColumn,
        dragOverColumn,
        ghostPosition,
        ghostText,
        resetOrder,
    };
}
export const ColumnReorderGhost = ({ visible, x, y, text, opacity = 0.8, }) => (_jsx(DragGhost, { "$visible": visible, "$x": x, "$y": y, "$opacity": opacity, children: text }));
export const ColumnDropIndicator = ({ visible, position, color = '#3b82f6', }) => _jsx(DropIndicator, { "$visible": visible, "$position": position, "$color": color });
// ============================================================================
// Helper: Get header cell wrapper props
// ============================================================================
export function getReorderableHeaderProps(column, index, getDragHandleProps, isDragging, draggedColumn, dragOverColumn) {
    const wrapperProps = getDragHandleProps(column, index);
    const showDropIndicator = isDragging && dragOverColumn === column.dataField && draggedColumn !== column.dataField;
    return {
        wrapperProps,
        showDropIndicator,
        dropPosition: 'left', // Always show on left side
    };
}
// ============================================================================
// Export
// ============================================================================
export default {
    useColumnReorder,
    DragGhost,
    DropIndicator,
    DraggableHeader,
    ColumnReorderGhost,
    ColumnDropIndicator,
    getReorderableHeaderProps,
};
