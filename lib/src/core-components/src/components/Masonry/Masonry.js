'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useCallback, useState, useEffect } from 'react';
import { MasonryContainer, MasonryColumn, MasonryItemWrapper, MasonryImage, ImagePlaceholder, EmptyState, MasonryCard, MasonryCardContent, } from './elements';
import { useResponsiveValue, useColumnDistribution, useImageLoading } from './hooks';
// Default empty icon
const EmptyIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [_jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }), _jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }), _jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }), _jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })] }));
export const Masonry = forwardRef(function MasonryComponent(props, ref) {
    const { items, columns = 3, gutter = 16, renderItem, sequential = false, animationDuration = 300, animated = true, staggerDelay = 50, classNames = {}, styles = {}, className, style, onImageLoad, onLayoutComplete, minItemHeight, loadingPlaceholder, emptyState, } = props;
    // Get responsive values
    const columnCount = useResponsiveValue(columns, 3);
    const gutterSize = useResponsiveValue(gutter, 16);
    // Distribute items into columns
    const columnData = useColumnDistribution(items, columnCount, sequential);
    // Image loading state
    const { setLoading, isLoading } = useImageLoading();
    // Track global item index for stagger animation
    let globalIndex = 0;
    // Layout complete callback
    useEffect(() => {
        if (items.length > 0) {
            const timeout = setTimeout(() => {
                onLayoutComplete?.();
            }, animationDuration + staggerDelay * items.length);
            return () => clearTimeout(timeout);
        }
    }, [items, animationDuration, staggerDelay, onLayoutComplete]);
    // Handle image load
    const handleImageLoad = useCallback((item, e) => {
        const img = e.currentTarget;
        setLoading(item.id, false);
        onImageLoad?.(item, img.naturalWidth, img.naturalHeight);
    }, [setLoading, onImageLoad]);
    // Default render function
    const defaultRenderItem = useCallback((item, index, columnIndex) => {
        if (item.src) {
            // Image item
            return (_jsxs(MasonryCard, { "$borderRadius": 8, children: [isLoading(item.id) && (_jsx(ImagePlaceholder, { "$height": item.height, "$borderRadius": 8 })), _jsx(MasonryImage, { src: item.src, alt: item.alt || '', "$objectFit": "cover", "$borderRadius": 0, "$isLoading": isLoading(item.id), onLoad: (e) => handleImageLoad(item, e), onError: () => setLoading(item.id, false) }), item.content && (_jsx(MasonryCardContent, { children: item.content }))] }));
        }
        // Content item
        if (item.content) {
            return item.content;
        }
        return null;
    }, [isLoading, handleImageLoad, setLoading]);
    // Use custom render or default
    const render = renderItem || defaultRenderItem;
    // Empty state
    if (items.length === 0) {
        return (_jsx(EmptyState, { className: classNames.root, style: styles.root, children: emptyState || (_jsxs(_Fragment, { children: [_jsx(EmptyIcon, {}), _jsx("span", { children: "No items to display" })] })) }));
    }
    return (_jsx(MasonryContainer, { ref: ref, "$gutter": gutterSize, className: className || classNames.root, style: { ...styles.root, ...style }, role: "grid", "aria-label": "Masonry layout", children: columnData.map((columnItems, columnIndex) => (_jsx(MasonryColumn, { "$gutter": gutterSize, "$columnCount": columnCount, className: classNames.column, style: styles.column, role: "gridcell", children: columnItems.map((item, itemIndex) => {
                const currentGlobalIndex = globalIndex++;
                return (_jsx(MasonryItemWrapper, { "$animated": animated, "$animationDuration": animationDuration, "$staggerIndex": currentGlobalIndex, "$staggerDelay": staggerDelay, "$minHeight": minItemHeight, className: classNames.item, style: styles.item, children: render(item, itemIndex, columnIndex) }, item.id));
            }) }, columnIndex))) }));
});
// Display name
Masonry.displayName = 'Masonry';
// MasonryImage component for standalone use
export const MasonryImageComponent = forwardRef(function MasonryImageComponent(props, ref) {
    const { src, alt = '', className, style, onLoad, onError, objectFit = 'cover', borderRadius = 8, } = props;
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = (e) => {
        setIsLoading(false);
        onLoad?.(e);
    };
    const handleError = (e) => {
        setIsLoading(false);
        onError?.(e);
    };
    return (_jsxs(_Fragment, { children: [isLoading && _jsx(ImagePlaceholder, { "$borderRadius": borderRadius }), _jsx(MasonryImage, { ref: ref, src: src, alt: alt, className: className, style: style, "$objectFit": objectFit, "$borderRadius": borderRadius, "$isLoading": isLoading, onLoad: handleLoad, onError: handleError })] }));
});
MasonryImageComponent.displayName = 'MasonryImage';
