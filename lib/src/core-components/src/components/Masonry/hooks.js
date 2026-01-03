import { useState, useEffect, useCallback, useMemo } from 'react';
// Breakpoint values in pixels
const BREAKPOINT_VALUES = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};
/**
 * Hook to get responsive value based on current viewport width
 */
export function useResponsiveValue(value, defaultValue) {
    const [currentValue, setCurrentValue] = useState(() => {
        if (typeof value === 'number')
            return value;
        return getResponsiveValue(value, defaultValue, typeof window !== 'undefined' ? window.innerWidth : 1024);
    });
    useEffect(() => {
        if (typeof value === 'number') {
            setCurrentValue(value);
            return;
        }
        const handleResize = () => {
            const width = window.innerWidth;
            setCurrentValue(getResponsiveValue(value, defaultValue, width));
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [value, defaultValue]);
    return currentValue;
}
function getResponsiveValue(breakpoints, defaultValue, width) {
    const sortedBreakpoints = Object.entries(BREAKPOINT_VALUES)
        .sort(([, a], [, b]) => b - a);
    for (const [key, breakpointWidth] of sortedBreakpoints) {
        if (width >= breakpointWidth && breakpoints[key] !== undefined) {
            return breakpoints[key];
        }
    }
    return defaultValue;
}
/**
 * Hook to distribute items into columns
 */
export function useColumnDistribution(items, columnCount, sequential = false) {
    return useMemo(() => {
        const columns = Array.from({ length: columnCount }, () => []);
        if (sequential) {
            // Sequential: place items in order, filling columns one by one
            items.forEach((item, index) => {
                const columnIndex = item.column !== undefined
                    ? Math.min(item.column, columnCount - 1)
                    : index % columnCount;
                columns[columnIndex].push(item);
            });
        }
        else {
            // Balanced: distribute items to shortest column
            const columnHeights = Array(columnCount).fill(0);
            items.forEach((item) => {
                let targetColumn;
                if (item.column !== undefined) {
                    // Respect specified column
                    targetColumn = Math.min(item.column, columnCount - 1);
                }
                else {
                    // Find shortest column
                    targetColumn = columnHeights.indexOf(Math.min(...columnHeights));
                }
                columns[targetColumn].push(item);
                // Increment height (use 1 as placeholder, actual heights vary)
                columnHeights[targetColumn]++;
            });
        }
        return columns;
    }, [items, columnCount, sequential]);
}
/**
 * Hook to track image loading states
 */
export function useImageLoading() {
    const [loadingStates, setLoadingStates] = useState({});
    const [loadedImages, setLoadedImages] = useState(new Set());
    const setLoading = useCallback((id, isLoading) => {
        setLoadingStates(prev => ({ ...prev, [id]: isLoading }));
        if (!isLoading) {
            setLoadedImages(prev => new Set(prev).add(id));
        }
    }, []);
    const isLoading = useCallback((id) => {
        return loadingStates[id] ?? true;
    }, [loadingStates]);
    const isLoaded = useCallback((id) => {
        return loadedImages.has(id);
    }, [loadedImages]);
    return { setLoading, isLoading, isLoaded };
}
