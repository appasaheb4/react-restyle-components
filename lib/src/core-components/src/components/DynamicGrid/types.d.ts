import React from 'react';
export declare const GAP_SIZES: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl"];
export type GapSize = (typeof GAP_SIZES)[number];
export declare const gapSizeValues: Record<GapSize, string>;
export type LegacyGapSize = 0 | 1 | 2 | 3 | 4;
export declare const gapSizes: Record<LegacyGapSize, string>;
export declare const GRID_VARIANTS: readonly ["default", "contained", "card", "masonry"];
export type GridVariant = (typeof GRID_VARIANTS)[number];
export declare const GRID_ALIGNMENTS: readonly ["start", "center", "end", "stretch"];
export type GridAlignment = (typeof GRID_ALIGNMENTS)[number];
export declare const GRID_JUSTIFY: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
export type GridJustify = (typeof GRID_JUSTIFY)[number];
export declare const SCROLL_SNAP_TYPES: readonly ["start", "center", "end"];
export type ScrollSnapType = (typeof SCROLL_SNAP_TYPES)[number];
export declare const GRID_ROLES: readonly ["none", "list", "grid"];
export type GridRole = (typeof GRID_ROLES)[number];
export interface ResponsiveColumns {
    /** Columns for extra small screens (< 375px) */
    xs?: number;
    /** Columns for small screens (≥ 375px) */
    sm?: number;
    /** Columns for medium screens (≥ 768px) */
    md?: number;
    /** Columns for large screens (≥ 1024px) */
    lg?: number;
    /** Columns for extra large screens (≥ 1280px) */
    xl?: number;
    /** Columns for 2xl screens (≥ 1440px) */
    '2xl'?: number;
}
export interface ScrollConfig {
    /** Enable horizontal scroll mode */
    enabled?: boolean;
    /** Amount of next item visible as scroll hint (0-1) */
    scrollHint?: number;
    /** Hide the scrollbar */
    hideScrollbar?: boolean;
    /** Scroll snap alignment */
    scrollSnapAlign?: ScrollSnapType;
    /** Enable smooth scrolling */
    smoothScroll?: boolean;
    /** Show navigation arrows */
    showArrows?: boolean;
    /** Show pagination dots */
    showDots?: boolean;
}
export interface AnimationConfig {
    /** Enable item animations */
    enabled?: boolean;
    /** Animation type */
    type?: 'fade' | 'slide' | 'scale' | 'none';
    /** Animation duration in ms */
    duration?: number;
    /** Stagger delay between items in ms */
    staggerDelay?: number;
}
export interface GridItemConfig {
    /** Minimum width of each item (in rem) */
    minWidth?: number;
    /** Maximum width of each item (in rem) */
    maxWidth?: number;
    /** Aspect ratio (e.g., '16/9', '1/1', '4/3') */
    aspectRatio?: string;
    /** Item padding */
    padding?: string;
    /** Item border radius */
    borderRadius?: string;
}
export interface DynamicGridProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Children elements */
    children?: React.ReactNode;
    /** Minimum width of grid items (in rem) */
    minWidth?: number;
    /** Maximum width of grid items (in rem) */
    maxWidth?: number;
    /** Fixed number of columns (overrides responsive) */
    columns?: number;
    /** Responsive column configuration */
    responsiveColumns?: ResponsiveColumns;
    /** Maximum number of columns */
    maxColumns?: number;
    /** Maximum number of rows to display */
    maxRows?: number;
    /** Use auto-fit for flexible column sizing */
    autoFit?: boolean;
    /** Column modulo (columns must be divisible by this) */
    modulo?: number;
    /** Gap between items */
    gap?: GapSize | LegacyGapSize;
    /** Row gap (overrides gap for rows) */
    rowGap?: GapSize;
    /** Column gap (overrides gap for columns) */
    columnGap?: GapSize;
    /** Visual variant */
    variant?: GridVariant;
    /** Item alignment */
    alignItems?: GridAlignment;
    /** Item justification */
    justifyItems?: GridAlignment;
    /** Content alignment */
    alignContent?: GridAlignment;
    /** Content justification */
    justifyContent?: GridJustify;
    /** Scroll configuration */
    scroll?: ScrollConfig;
    /** @deprecated Use scroll.enabled instead */
    scrollEnabled?: boolean;
    /** Animation configuration */
    animation?: AnimationConfig;
    /** Grid item configuration */
    itemConfig?: GridItemConfig;
    /** ARIA role for the grid */
    role?: GridRole;
    /** @deprecated Use role instead */
    elementRole?: GridRole;
    /** ARIA label */
    ariaLabel?: string;
    /** Loading state */
    isLoading?: boolean;
    /** Number of skeleton items to show when loading */
    skeletonCount?: number;
    /** Custom skeleton component */
    renderSkeleton?: () => React.ReactNode;
    /** Empty state content */
    emptyState?: React.ReactNode;
    /** Called when grid layout changes */
    onLayoutChange?: (columns: number, rows: number) => void;
    /** Called when scroll position changes */
    onScrollChange?: (scrollLeft: number, scrollWidth: number) => void;
    /** Additional class name */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Container class name */
    containerClassName?: string;
    /** Item wrapper class name */
    itemClassName?: string;
}
export interface GridContextValue {
    columns: number;
    gap: string;
    variant: GridVariant;
    itemConfig?: GridItemConfig;
}
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Span multiple columns */
    colSpan?: number;
    /** Span multiple rows */
    rowSpan?: number;
    /** Order in the grid */
    order?: number;
    /** Self alignment */
    alignSelf?: GridAlignment;
    /** Self justification */
    justifySelf?: GridAlignment;
}
export interface ScrollProps {
    /** Enable horizontal scroll mode */
    enabled?: boolean;
    /** Amount of next item visible as scroll hint (0-1) */
    scrollHint?: number;
    /** Hide the scrollbar */
    hideScrollbar?: boolean;
    /** Scroll snap alignment */
    scrollSnapAlign?: ScrollSnapType;
    /** Enable smooth scrolling */
    smoothScroll?: boolean;
    /** Show navigation arrows */
    showArrows?: boolean;
    /** Show pagination dots */
    showDots?: boolean;
}
//# sourceMappingURL=types.d.ts.map