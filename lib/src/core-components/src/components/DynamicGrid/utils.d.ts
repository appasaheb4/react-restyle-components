import React, { RefObject } from 'react';
import { ResponsiveColumns, GapSize, LegacyGapSize, ScrollConfig } from './types';
/**
 * Convert pixels to rem
 */
export declare const pxToRem: (px: number) => number;
/**
 * Convert rem to pixels
 */
export declare const remToPx: (rem: number) => number;
/**
 * Get gap value from GapSize or LegacyGapSize
 */
export declare const getGapValue: (gap: GapSize | LegacyGapSize) => string;
/**
 * Calculate columns based on container width and configuration
 */
interface CalcColumnsConfig {
    minWidth: number;
    elementWidth: number;
    gap: string;
    modulo: number;
    maxColumns: number;
    scrollHint?: number;
}
export declare const calcColumns: ({ minWidth, elementWidth, gap, modulo, maxColumns, scrollHint, }: CalcColumnsConfig) => number;
/**
 * Get responsive columns based on window width
 */
export declare const getResponsiveColumns: (responsiveColumns: ResponsiveColumns, windowWidth: number) => number;
/**
 * Hook to get current window width
 */
export declare const useWindowWidth: () => number;
/**
 * Hook to observe element resize
 */
export declare const useElementResize: (ref: RefObject<HTMLElement>, callback: (width: number, height: number) => void) => void;
/**
 * Hook to handle keyboard focus scrolling in scroll mode
 */
export declare const useScrollToKeyboardFocus: (ref: RefObject<HTMLElement>, scroll?: ScrollConfig) => void;
/**
 * Hook for scroll navigation (arrows and dots)
 */
interface UseScrollNavigationReturn {
    canScrollLeft: boolean;
    canScrollRight: boolean;
    currentPage: number;
    totalPages: number;
    scrollTo: (index: number) => void;
    scrollLeft: () => void;
    scrollRight: () => void;
}
export declare const useScrollNavigation: (ref: RefObject<HTMLElement>, itemCount: number, columns: number) => UseScrollNavigationReturn;
/**
 * Get item count from children
 */
export declare const getItemCount: (children: React.ReactNode) => number;
/**
 * Generate unique ID for accessibility
 */
export declare const generateGridId: () => string;
export {};
