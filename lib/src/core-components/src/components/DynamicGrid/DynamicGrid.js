'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Children, forwardRef, useMemo, useRef, useState, useCallback, createContext, useContext, } from 'react';
import { cn } from '../../utils';
import s from '../../tc.module.css';
import { GridWrapper, GridContainer, GridItem, SkeletonItem, EmptyState, ScrollArrow, ScrollDots, ScrollDot, } from './elements';
import { gapSizeValues, } from './types';
import { calcColumns, getGapValue, getResponsiveColumns, useWindowWidth, useElementResize, useScrollToKeyboardFocus, useScrollNavigation, getItemCount, } from './utils';
// Grid context for nested components
const GridContext = createContext(null);
export const useGridContext = () => useContext(GridContext);
// Arrow icons
const ChevronLeftIcon = () => (_jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "15 18 9 12 15 6" }) }));
const ChevronRightIcon = () => (_jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
// Empty icon
const EmptyIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), _jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" }), _jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" })] }));
// Default empty state
const DefaultEmptyState = () => (_jsxs(EmptyState, { children: [_jsx(EmptyIcon, {}), _jsx("p", { className: cn(s['text-gray-500'], s['text-sm']), children: "No items to display" })] }));
// Default skeleton renderer
const DefaultSkeleton = ({ aspectRatio }) => (_jsx(SkeletonItem, { "$aspectRatio": aspectRatio }));
export const DynamicGrid = forwardRef(function DynamicGridComponent(props, fRef) {
    const { children, 
    // Layout
    minWidth = 10, maxWidth, columns: fixedColumns, responsiveColumns, maxColumns = Infinity, maxRows, autoFit = false, modulo = 1, 
    // Spacing
    gap = 'md', rowGap, columnGap, 
    // Styling
    variant = 'default', alignItems, justifyItems, alignContent, justifyContent, 
    // Scroll
    scroll, scrollEnabled, 
    // Animation
    animation, 
    // Item config
    itemConfig, 
    // Accessibility
    role = 'none', elementRole, ariaLabel, 
    // State
    isLoading = false, skeletonCount = 6, renderSkeleton, emptyState, 
    // Events
    onLayoutChange, onScrollChange, 
    // Styling
    className, style, containerClassName, itemClassName, ...rest } = props;
    const innerRef = useRef(null);
    const gridRef = useRef(null);
    const [elementWidth, setElementWidth] = useState(0);
    const windowWidth = useWindowWidth();
    // Merge scroll config
    const scrollConfig = useMemo(() => scroll?.enabled || scrollEnabled
        ? {
            enabled: true,
            scrollHint: scroll?.scrollHint ?? 0.5,
            hideScrollbar: scroll?.hideScrollbar ?? false,
            scrollSnapAlign: scroll?.scrollSnapAlign ?? 'start',
            smoothScroll: scroll?.smoothScroll ?? true,
            showArrows: scroll?.showArrows ?? true,
            showDots: scroll?.showDots ?? false,
            ...scroll,
        }
        : undefined, [scroll, scrollEnabled]);
    // Handle element resize
    const handleResize = useCallback((width) => {
        setElementWidth(width);
    }, []);
    useElementResize(innerRef, handleResize);
    // Calculate columns
    const calculatedColumns = useMemo(() => {
        // Use fixed columns if provided
        if (fixedColumns)
            return fixedColumns;
        // Use responsive columns if provided
        if (responsiveColumns) {
            return getResponsiveColumns(responsiveColumns, windowWidth);
        }
        // Calculate based on container width
        const gapValue = getGapValue(gap);
        return calcColumns({
            minWidth,
            elementWidth,
            gap: gapValue,
            modulo,
            maxColumns,
            scrollHint: scrollConfig?.scrollHint,
        });
    }, [
        fixedColumns,
        responsiveColumns,
        windowWidth,
        minWidth,
        elementWidth,
        gap,
        modulo,
        maxColumns,
        scrollConfig?.scrollHint,
    ]);
    // Handle keyboard focus scroll
    useScrollToKeyboardFocus(gridRef, scrollConfig);
    // Scroll navigation
    const itemCount = getItemCount(children);
    const scrollNav = useScrollNavigation(gridRef, itemCount, calculatedColumns);
    // Notify layout changes
    React.useEffect(() => {
        if (onLayoutChange) {
            const rows = Math.ceil(itemCount / calculatedColumns);
            onLayoutChange(calculatedColumns, rows);
        }
    }, [calculatedColumns, itemCount, onLayoutChange]);
    // Get gap values
    const gapValue = getGapValue(gap);
    const rowGapValue = rowGap ? gapSizeValues[rowGap] : undefined;
    const columnGapValue = columnGap ? gapSizeValues[columnGap] : undefined;
    // Process children
    const processedChildren = useMemo(() => {
        const childArray = Children.toArray(children);
        return childArray.map((child, index) => (_jsx(GridItem, { "$animation": animation, "$animationIndex": index, "$borderRadius": itemConfig?.borderRadius, "$padding": itemConfig?.padding, "$aspectRatio": itemConfig?.aspectRatio, className: itemClassName, children: child }, index)));
    }, [children, animation, itemConfig, itemClassName]);
    // Render as list items if role is list
    const gridRole = role || elementRole || 'none';
    const renderChildren = useMemo(() => {
        if (gridRole === 'list') {
            return processedChildren.map((child, index) => (_jsx("li", { style: { display: 'contents' }, children: child }, index)));
        }
        return processedChildren;
    }, [processedChildren, gridRole]);
    // Render skeletons
    const skeletons = useMemo(() => {
        if (!isLoading)
            return null;
        return Array.from({ length: skeletonCount }, (_, index) => (_jsx(GridItem, { "$animation": { enabled: true, type: 'fade', duration: 200 }, "$animationIndex": index, "$borderRadius": itemConfig?.borderRadius, "$aspectRatio": itemConfig?.aspectRatio, children: renderSkeleton ? (renderSkeleton()) : (_jsx(DefaultSkeleton, { aspectRatio: itemConfig?.aspectRatio })) }, `skeleton-${index}`)));
    }, [isLoading, skeletonCount, renderSkeleton, itemConfig]);
    // Check if empty
    const isEmpty = !isLoading && itemCount === 0;
    // Grid context value
    const contextValue = useMemo(() => ({
        columns: calculatedColumns,
        gap: gapValue,
        variant,
        itemConfig,
    }), [calculatedColumns, gapValue, variant, itemConfig]);
    return (_jsx(GridContext.Provider, { value: contextValue, children: _jsxs(GridWrapper, { ref: innerRef, "$variant": variant, className: cn(containerClassName, className), style: style, "data-aui": "dynamic-grid", ...rest, children: [_jsx(GridContainer, { ref: gridRef, as: gridRole === 'list' ? 'ul' : 'div', role: gridRole === 'grid' ? 'grid' : undefined, "aria-label": ariaLabel, "$columns": calculatedColumns, "$minWidth": minWidth, "$maxWidth": maxWidth, "$gap": gapValue, "$rowGap": rowGapValue, "$columnGap": columnGapValue, "$autoFit": autoFit, "$maxRows": maxRows, "$alignItems": alignItems, "$justifyItems": justifyItems, "$alignContent": alignContent, "$justifyContent": justifyContent, "$scroll": scrollConfig, "$animation": animation, "$variant": variant, children: isLoading ? skeletons : isEmpty ? null : renderChildren }), isEmpty && (emptyState || _jsx(DefaultEmptyState, {})), scrollConfig?.enabled && scrollConfig.showArrows && !isEmpty && (_jsxs(_Fragment, { children: [_jsx(ScrollArrow, { "$direction": "left", "$visible": scrollNav.canScrollLeft, onClick: scrollNav.scrollLeft, "aria-label": "Scroll left", disabled: !scrollNav.canScrollLeft, children: _jsx(ChevronLeftIcon, {}) }), _jsx(ScrollArrow, { "$direction": "right", "$visible": scrollNav.canScrollRight, onClick: scrollNav.scrollRight, "aria-label": "Scroll right", disabled: !scrollNav.canScrollRight, children: _jsx(ChevronRightIcon, {}) })] })), scrollConfig?.enabled && scrollConfig.showDots && !isEmpty && (_jsx(ScrollDots, { children: Array.from({ length: scrollNav.totalPages }, (_, index) => (_jsx(ScrollDot, { "$active": index === scrollNav.currentPage, onClick: () => scrollNav.scrollTo(index), "aria-label": `Go to page ${index + 1}` }, index))) }))] }) }));
});
// Grid Item component for advanced usage
export const DynamicGridItem = forwardRef(function DynamicGridItemComponent({ children, colSpan, rowSpan, order, alignSelf, justifySelf, className, ...rest }, ref) {
    const gridContext = useGridContext();
    return (_jsx(GridItem, { ref: ref, "$colSpan": colSpan, "$rowSpan": rowSpan, "$order": order, "$alignSelf": alignSelf, "$justifySelf": justifySelf, "$borderRadius": gridContext?.itemConfig?.borderRadius, "$padding": gridContext?.itemConfig?.padding, className: className, ...rest, children: children }));
});
DynamicGrid.displayName = 'DynamicGrid';
DynamicGridItem.displayName = 'DynamicGridItem';
