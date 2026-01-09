import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { useRef, useState, useCallback, useEffect, useMemo, } from 'react';
import { styled, css, keyframes } from 'styled-components';
// ============================================================================
// Animations
// ============================================================================
const pulseGlow = keyframes `
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% { 
    box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.6);
  }
`;
const slideIn = keyframes `
  from { 
    transform: scaleY(0);
    opacity: 0;
  }
  to { 
    transform: scaleY(1);
    opacity: 1;
  }
`;
const shimmer = keyframes `
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
// ============================================================================
// Styled Components
// ============================================================================
export const ResizeHandle = styled.div `
  position: absolute;
  top: 0;
  right: -2px;
  width: ${({ $handleWidth }) => ($handleWidth || 8) + 4}px;
  height: 100%;
  cursor: col-resize;
  background: transparent;
  z-index: 10;
  user-select: none;
  touch-action: none;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Visible handle bar */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    width: 3px;
    height: 60%;
    background: ${({ $isResizing, $handleColor, $handleHoverColor }) => $isResizing
    ? $handleHoverColor || '#3b82f6'
    : $handleColor || 'rgba(255, 255, 255, 0.25)'};
    border-radius: 2px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleY(${({ $isResizing }) => ($isResizing ? 1 : 0.7)});
  }

  /* Hover effect - expand and glow */
  &:hover::after {
    background: ${({ $handleHoverColor }) => $handleHoverColor || '#3b82f6'};
    transform: scaleY(1);
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  }

  /* Active/resizing state */
  ${({ $isResizing }) => $isResizing &&
    css `
      &::after {
        animation: ${pulseGlow} 1s ease-in-out infinite;
        transform: scaleY(1.1);
      }

      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: col-resize;
        z-index: 9999;
        background: rgba(59, 130, 246, 0.02);
      }
    `}

  /* Grip dots pattern */
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 12px;
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    );
    background-size: 4px 4px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;
export const ResizeLine = styled.div `
  position: fixed;
  top: 0;
  left: ${({ $left }) => $left}px;
  width: 2px;
  height: 100vh;
  pointer-events: none;
  z-index: 10000;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease, transform 0.1s ease;
  transform: ${({ $visible }) => ($visible ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: center;

  /* Gradient line with glow effect */
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ $color }) => $color || '#3b82f6'} 5%,
    ${({ $color }) => $color || '#3b82f6'} 95%,
    transparent 100%
  );
  box-shadow: 
    0 0 10px ${({ $color }) => $color || '#3b82f6'},
    0 0 20px ${({ $color }) => ($color || '#3b82f6') + '80'},
    0 0 30px ${({ $color }) => ($color || '#3b82f6') + '40'};

  /* Animated shimmer effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${slideIn} 0.3s ease-out;
  }
`;
// ============================================================================
// Hook: useColumnResize
// ============================================================================
export function useColumnResize({ columns, config = {}, enabled = true, tableId, }) {
    const { minWidth = 50, maxWidth = 800, autoFit = true, onResize, onResizeStart, onResizeEnd, defaultWidths = {}, handleColor, handleHoverColor, handleWidth = 4, } = config;
    // Initialize column widths - Column-level width takes FIRST priority
    const initialWidths = useMemo(() => {
        const widths = {};
        columns.forEach((col) => {
            // Priority 1: Column-level width (user-defined in column)
            if (typeof col.width === 'number') {
                widths[col.dataField] = col.width;
            }
            else if (typeof col.width === 'string' && col.width.endsWith('px')) {
                widths[col.dataField] = parseInt(col.width, 10);
            }
            // Priority 2: defaultWidths from resizeConfig (only if column width not set)
            else if (defaultWidths[col.dataField]) {
                widths[col.dataField] = defaultWidths[col.dataField];
            }
        });
        return widths;
    }, [columns, defaultWidths]);
    const [columnWidths, setColumnWidths] = useState(initialWidths);
    const [isResizing, setIsResizing] = useState(false);
    const [resizingColumn, setResizingColumn] = useState(null);
    // Refs for drag tracking
    const startXRef = useRef(0);
    const startWidthRef = useRef(0);
    const currentColumnRef = useRef(null);
    const headerRefMap = useRef(new Map());
    // Update widths when columns change - Column-level width takes FIRST priority
    useEffect(() => {
        setColumnWidths((prev) => {
            const newWidths = { ...prev };
            columns.forEach((col) => {
                // Only add if not already set (user hasn't resized it)
                if (!(col.dataField in newWidths)) {
                    // Priority 1: Column-level width
                    if (typeof col.width === 'number') {
                        newWidths[col.dataField] = col.width;
                    }
                    else if (typeof col.width === 'string' && col.width.endsWith('px')) {
                        newWidths[col.dataField] = parseInt(col.width, 10);
                    }
                    // Priority 2: defaultWidths from resizeConfig
                    else if (defaultWidths[col.dataField]) {
                        newWidths[col.dataField] = defaultWidths[col.dataField];
                    }
                }
            });
            return newWidths;
        });
    }, [columns, defaultWidths]);
    // Handle mouse move during resize
    const handleMouseMove = useCallback((e) => {
        if (!currentColumnRef.current)
            return;
        const deltaX = e.clientX - startXRef.current;
        let newWidth = startWidthRef.current + deltaX;
        // Apply min/max constraints
        const column = columns.find((col) => col.dataField === currentColumnRef.current);
        const colMinWidth = typeof column?.minWidth === 'number'
            ? column.minWidth
            : typeof column?.minWidth === 'string' && column.minWidth.endsWith('px')
                ? parseInt(column.minWidth, 10)
                : minWidth;
        const colMaxWidth = typeof column?.maxWidth === 'number'
            ? column.maxWidth
            : typeof column?.maxWidth === 'string' && column.maxWidth.endsWith('px')
                ? parseInt(column.maxWidth, 10)
                : maxWidth;
        newWidth = Math.max(colMinWidth, Math.min(colMaxWidth, newWidth));
        setColumnWidths((prev) => ({
            ...prev,
            [currentColumnRef.current]: newWidth,
        }));
    }, [columns, minWidth, maxWidth]);
    // Handle mouse up (end resize)
    const handleMouseUp = useCallback(() => {
        if (currentColumnRef.current) {
            const finalWidth = columnWidths[currentColumnRef.current];
            onResizeEnd?.(currentColumnRef.current, finalWidth);
            onResize?.(columnWidths);
        }
        setIsResizing(false);
        setResizingColumn(null);
        currentColumnRef.current = null;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, [columnWidths, handleMouseMove, onResize, onResizeEnd]);
    // Handle mouse down (start resize)
    const handleMouseDown = useCallback((e, dataField, headerRef) => {
        if (!enabled)
            return;
        e.preventDefault();
        e.stopPropagation();
        const headerEl = headerRef.current;
        if (!headerEl)
            return;
        const currentWidth = headerEl.offsetWidth;
        startXRef.current = e.clientX;
        startWidthRef.current = currentWidth;
        currentColumnRef.current = dataField;
        setIsResizing(true);
        setResizingColumn(dataField);
        onResizeStart?.(dataField, currentWidth);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    }, [enabled, handleMouseMove, handleMouseUp, onResizeStart]);
    // Handle double-click for auto-fit
    const handleDoubleClick = useCallback((e, dataField) => {
        if (!enabled || !autoFit)
            return;
        e.preventDefault();
        e.stopPropagation();
        // Get all cells for this column and find the max content width
        const cells = document.querySelectorAll(`[data-column="${dataField}"]`);
        let maxContentWidth = minWidth;
        cells.forEach((cell) => {
            // Create a temporary span to measure text width
            const span = document.createElement('span');
            span.style.visibility = 'hidden';
            span.style.position = 'absolute';
            span.style.whiteSpace = 'nowrap';
            span.style.font = window.getComputedStyle(cell).font;
            span.textContent = cell.innerText;
            document.body.appendChild(span);
            maxContentWidth = Math.max(maxContentWidth, span.offsetWidth + 24); // Add padding
            document.body.removeChild(span);
        });
        // Apply constraints
        maxContentWidth = Math.min(maxContentWidth, maxWidth);
        setColumnWidths((prev) => {
            const newWidths = { ...prev, [dataField]: maxContentWidth };
            onResize?.(newWidths);
            return newWidths;
        });
        onResizeEnd?.(dataField, maxContentWidth);
    }, [enabled, autoFit, minWidth, maxWidth, onResize, onResizeEnd]);
    // Get resize handle component
    const getResizeHandle = useCallback((dataField, headerRef) => {
        if (!enabled)
            return null;
        headerRefMap.current.set(dataField, headerRef);
        return (_jsx(ResizeHandle, { "$isResizing": resizingColumn === dataField, "$handleColor": handleColor, "$handleHoverColor": handleHoverColor, "$handleWidth": handleWidth, onMouseDown: (e) => handleMouseDown(e, dataField, headerRef), onDoubleClick: (e) => handleDoubleClick(e, dataField), onClick: (e) => e.stopPropagation() }));
    }, [
        enabled,
        resizingColumn,
        handleColor,
        handleHoverColor,
        handleWidth,
        handleMouseDown,
        handleDoubleClick,
    ]);
    // Reset all widths
    const resetWidths = useCallback(() => {
        setColumnWidths(initialWidths);
        onResize?.(initialWidths);
    }, [initialWidths, onResize]);
    // Set specific column width
    const setColumnWidth = useCallback((dataField, width) => {
        const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, width));
        setColumnWidths((prev) => {
            const newWidths = { ...prev, [dataField]: constrainedWidth };
            onResize?.(newWidths);
            return newWidths;
        });
    }, [minWidth, maxWidth, onResize]);
    return {
        columnWidths,
        getResizeHandle,
        resetWidths,
        setColumnWidth,
        isResizing,
        resizingColumn,
    };
}
// ============================================================================
// Helper: Get column style with resize width
// ============================================================================
export function getColumnStyle(column, columnWidths, resizable, isResizing) {
    const style = {};
    // Use resized width if available
    if (resizable && columnWidths[column.dataField]) {
        style.width = columnWidths[column.dataField];
        style.minWidth = columnWidths[column.dataField];
        style.maxWidth = columnWidths[column.dataField];
    }
    else {
        // Use column-defined widths
        if (column.width) {
            style.width = column.width;
        }
        if (column.minWidth) {
            style.minWidth = column.minWidth;
        }
        if (column.maxWidth) {
            style.maxWidth = column.maxWidth;
        }
    }
    // Add smooth transition when not actively resizing (for auto-fit double-click)
    if (resizable && !isResizing) {
        style.transition = 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    return style;
}
export const ResizableHeaderCell = ({ children, dataField, resizable, getResizeHandle, style, className, }) => {
    const headerRef = useRef(null);
    return (_jsxs("th", { ref: headerRef, style: { ...style, position: 'relative' }, className: className, "data-column": dataField, children: [children, resizable && getResizeHandle(dataField, headerRef)] }));
};
// ============================================================================
// Export
// ============================================================================
export default {
    useColumnResize,
    getColumnStyle,
    ResizeHandle,
    ResizeLine,
    ResizableHeaderCell,
};
