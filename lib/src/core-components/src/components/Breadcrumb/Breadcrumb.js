'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useEffect, useMemo, useRef, useState, useCallback, } from 'react';
import { useCombinedRefs } from '../../utils/hooks';
import { Container, BreadcrumbList, Item, Separator, SeparatorText, OverflowDots, IconWrapper, DropdownMenu, DropdownItem, } from './elements';
const ChevronIcon = () => (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
const HomeIconSvg = () => (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const getSeparatorContent = (type, size) => {
    switch (type) {
        case 'chevron':
            return _jsx(ChevronIcon, {});
        case 'slash':
            return _jsx(SeparatorText, { "$size": size, children: "/" });
        case 'arrow':
            return _jsx(SeparatorText, { "$size": size, children: "\u2192" });
        case 'dot':
            return _jsx(SeparatorText, { "$size": size, children: "\u2022" });
        default:
            return _jsx(ChevronIcon, {});
    }
};
export const Breadcrumb = forwardRef(function BreadcrumbComponent({ children, maxItems, showOverflowDots = false, variant = 'default', size = 'medium', separatorType = 'chevron', customSeparator, showHomeIcon = false, collapsedItems, onCollapsedToggle, ariaLabel, ...rest }, fRef) {
    const innerRef = useRef(null);
    const combinedRef = useCombinedRefs(fRef, innerRef);
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);
    const dropdownRef = useRef(null);
    // Ensure collapsedItems is always an array
    const safeCollapsedItems = collapsedItems ?? [];
    // Handle collapsed items
    const handleCollapsedToggle = useCallback(() => {
        const newState = !isCollapsedOpen;
        setIsCollapsedOpen(newState);
        onCollapsedToggle?.(newState);
    }, [isCollapsedOpen, onCollapsedToggle]);
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsCollapsedOpen(false);
            }
        };
        if (isCollapsedOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCollapsedOpen]);
    // Process children with maxItems limit
    const breadcrumbChildren = useMemo(() => {
        const childArray = React.Children.toArray(children);
        if (maxItems && childArray.length > maxItems) {
            return childArray.slice(-maxItems);
        }
        return childArray;
    }, [children, maxItems]);
    // Scroll to last item on mount
    useEffect(() => {
        if (innerRef.current) {
            const lastElementChild = innerRef.current.querySelector('ol')
                ?.lastElementChild;
            if (lastElementChild) {
                innerRef.current.scroll?.(lastElementChild.offsetLeft, 0);
            }
        }
    }, []);
    const separatorContent = customSeparator || getSeparatorContent(separatorType, size);
    const childCount = React.Children.count(breadcrumbChildren);
    return (_jsx(Container, { "data-aui": "breadcrumb", "aria-label": ariaLabel || rest['aria-label'] || 'Breadcrumb navigation', ref: combinedRef, "$variant": variant, "$size": size, role: "navigation", ...rest, children: _jsxs(BreadcrumbList, { "$variant": variant, "$size": size, children: [showOverflowDots &&
                    maxItems &&
                    React.Children.count(children) > maxItems && (_jsxs(Item, { "$variant": variant, "$size": size, "$isActive": false, "$isCollapsed": true, "aria-hidden": "true", children: [_jsx(OverflowDots, { "$size": size, onClick: handleCollapsedToggle, role: "button", tabIndex: 0, onKeyDown: (e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleCollapsedToggle();
                                }
                            }, children: "\u2022\u2022\u2022" }), safeCollapsedItems.length > 0 && (_jsx(DropdownMenu, { ref: dropdownRef, "$isOpen": isCollapsedOpen, children: safeCollapsedItems.map((item, idx) => (_jsxs(DropdownItem, { href: item.href || '#', children: [item.icon && (_jsx(IconWrapper, { "$size": size, children: item.icon })), item.label] }, idx))) })), _jsx(Separator, { "$type": separatorType, "$size": size, "aria-hidden": "true", children: separatorContent })] })), React.Children.map(breadcrumbChildren, (child, index) => {
                    const isLast = index === childCount - 1;
                    const isFirst = index === 0;
                    return (_jsxs(Item, { "$variant": variant, "$size": size, "$isActive": isLast, "$isCollapsed": false, "aria-current": isLast ? 'page' : undefined, children: [showHomeIcon && isFirst && (_jsx(IconWrapper, { "$size": size, children: _jsx(HomeIconSvg, {}) })), child, !isLast && (_jsx(Separator, { "$type": separatorType, "$size": size, "aria-hidden": "true", children: separatorContent }))] }, index));
                })] }) }));
});
Breadcrumb.displayName = 'Breadcrumb';
