import { useCallback, useEffect, useState } from 'react';
import { gapSizeValues, gapSizes, } from './types';
// Breakpoint values in pixels
const BREAKPOINTS = {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1440,
};
/**
 * Convert pixels to rem
 */
export const pxToRem = (px) => px / 16;
/**
 * Convert rem to pixels
 */
export const remToPx = (rem) => rem * 16;
/**
 * Get gap value from GapSize or LegacyGapSize
 */
export const getGapValue = (gap) => {
    if (typeof gap === 'number') {
        return gapSizes[gap] || gapSizes[1];
    }
    return gapSizeValues[gap] || gapSizeValues.md;
};
const moduloColumns = (columns, modulo) => Math.floor(columns / modulo) * modulo;
export const calcColumns = ({ minWidth, elementWidth, gap, modulo, maxColumns, scrollHint = 0, }) => {
    if (elementWidth === 0)
        return 1;
    const gapSize = parseFloat(gap);
    const elementWidthInRem = pxToRem(elementWidth);
    const columns = Math.min(Math.floor((elementWidthInRem + gapSize - minWidth * scrollHint) /
        (minWidth + gapSize)), maxColumns);
    return Math.max(1, moduloColumns(columns, modulo));
};
/**
 * Get responsive columns based on window width
 */
export const getResponsiveColumns = (responsiveColumns, windowWidth) => {
    let columns = 1;
    if (responsiveColumns.xs !== undefined && windowWidth >= BREAKPOINTS.xs) {
        columns = responsiveColumns.xs;
    }
    if (responsiveColumns.sm !== undefined && windowWidth >= BREAKPOINTS.sm) {
        columns = responsiveColumns.sm;
    }
    if (responsiveColumns.md !== undefined && windowWidth >= BREAKPOINTS.md) {
        columns = responsiveColumns.md;
    }
    if (responsiveColumns.lg !== undefined && windowWidth >= BREAKPOINTS.lg) {
        columns = responsiveColumns.lg;
    }
    if (responsiveColumns.xl !== undefined && windowWidth >= BREAKPOINTS.xl) {
        columns = responsiveColumns.xl;
    }
    if (responsiveColumns['2xl'] !== undefined && windowWidth >= BREAKPOINTS['2xl']) {
        columns = responsiveColumns['2xl'];
    }
    return columns;
};
/**
 * Hook to get current window width
 */
export const useWindowWidth = () => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};
/**
 * Hook to observe element resize
 */
export const useElementResize = (ref, callback) => {
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        // Initial size
        callback(element.clientWidth, element.clientHeight);
        if (!window.ResizeObserver)
            return;
        const observer = new ResizeObserver((entries) => {
            window.requestAnimationFrame(() => {
                const entry = entries[0];
                if (entry) {
                    callback(entry.contentRect.width, entry.contentRect.height);
                }
            });
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, callback]);
};
/**
 * Hook to handle keyboard focus scrolling in scroll mode
 */
export const useScrollToKeyboardFocus = (ref, scroll) => {
    const scrollToFocused = useCallback((keyboardEvent) => {
        const { target } = keyboardEvent;
        if (target instanceof HTMLElement &&
            scroll?.enabled &&
            keyboardEvent.key === 'Tab') {
            target.scrollIntoView({
                inline: 'center',
                block: 'nearest',
                behavior: scroll.smoothScroll !== false ? 'smooth' : 'auto',
            });
        }
    }, [scroll]);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        element.addEventListener('keyup', scrollToFocused);
        return () => {
            element.removeEventListener('keyup', scrollToFocused);
        };
    }, [scrollToFocused, ref]);
};
export const useScrollNavigation = (ref, itemCount, columns) => {
    const [scrollState, setScrollState] = useState({
        canScrollLeft: false,
        canScrollRight: true,
        currentPage: 0,
    });
    const totalPages = Math.ceil(itemCount / columns);
    useEffect(() => {
        const element = ref.current;
        if (!element)
            return;
        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = element;
            const canScrollLeft = scrollLeft > 0;
            const canScrollRight = scrollLeft + clientWidth < scrollWidth - 1;
            const currentPage = Math.round(scrollLeft / clientWidth);
            setScrollState({ canScrollLeft, canScrollRight, currentPage });
        };
        element.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => element.removeEventListener('scroll', handleScroll);
    }, [ref]);
    const scrollTo = useCallback((index) => {
        const element = ref.current;
        if (!element)
            return;
        const { clientWidth } = element;
        element.scrollTo({
            left: index * clientWidth,
            behavior: 'smooth',
        });
    }, [ref]);
    const scrollLeft = useCallback(() => {
        if (scrollState.currentPage > 0) {
            scrollTo(scrollState.currentPage - 1);
        }
    }, [scrollState.currentPage, scrollTo]);
    const scrollRight = useCallback(() => {
        if (scrollState.currentPage < totalPages - 1) {
            scrollTo(scrollState.currentPage + 1);
        }
    }, [scrollState.currentPage, totalPages, scrollTo]);
    return {
        ...scrollState,
        totalPages,
        scrollTo,
        scrollLeft,
        scrollRight,
    };
};
/**
 * Get item count from children
 */
export const getItemCount = (children) => {
    if (!children)
        return 0;
    if (Array.isArray(children))
        return children.filter(Boolean).length;
    return 1;
};
/**
 * Generate unique ID for accessibility
 */
export const generateGridId = () => `grid-${Math.random().toString(36).substr(2, 9)}`;
