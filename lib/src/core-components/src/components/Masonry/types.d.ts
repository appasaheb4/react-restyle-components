import React, { CSSProperties } from 'react';
/** Responsive breakpoint configuration */
export interface MasonryBreakpoints {
    /** Extra small screens (default) */
    xs?: number;
    /** Small screens (≥640px) */
    sm?: number;
    /** Medium screens (≥768px) */
    md?: number;
    /** Large screens (≥1024px) */
    lg?: number;
    /** Extra large screens (≥1280px) */
    xl?: number;
    /** 2XL screens (≥1536px) */
    '2xl'?: number;
}
/** Masonry item data structure */
export interface MasonryItem {
    /** Unique identifier */
    id: string | number;
    /** Content to render */
    content?: React.ReactNode;
    /** Force item to specific column (0-indexed) */
    column?: number;
    /** Image source (for image items) */
    src?: string;
    /** Image alt text */
    alt?: string;
    /** Fixed height (optional) */
    height?: number | string;
    /** Additional data */
    [key: string]: any;
}
/** Custom class names */
export interface MasonryClassNames {
    /** Root container */
    root?: string;
    /** Column container */
    column?: string;
    /** Individual item wrapper */
    item?: string;
    /** Image element */
    image?: string;
}
/** Custom styles */
export interface MasonryStyles {
    /** Root container */
    root?: CSSProperties;
    /** Column container */
    column?: CSSProperties;
    /** Individual item wrapper */
    item?: CSSProperties;
    /** Image element */
    image?: CSSProperties;
}
/** Render item function */
export type MasonryRenderItem<T extends MasonryItem = MasonryItem> = (item: T, index: number, columnIndex: number) => React.ReactNode;
/** Image load handler */
export type MasonryImageLoadHandler = (item: MasonryItem, naturalWidth: number, naturalHeight: number) => void;
export interface MasonryProps<T extends MasonryItem = MasonryItem> {
    /** Array of items to render */
    items: T[];
    /** Number of columns (number for fixed, object for responsive) */
    columns?: number | MasonryBreakpoints;
    /** Gap between items in pixels (number for fixed, object for responsive) */
    gutter?: number | MasonryBreakpoints;
    /** Custom render function for each item */
    renderItem?: MasonryRenderItem<T>;
    /** Enable sequential ordering (items placed in order, not balanced) */
    sequential?: boolean;
    /** Animation duration in ms */
    animationDuration?: number;
    /** Enable fade-in animation */
    animated?: boolean;
    /** Stagger delay between items in ms */
    staggerDelay?: number;
    /** Custom class names */
    classNames?: MasonryClassNames;
    /** Custom styles */
    styles?: MasonryStyles;
    /** Additional className for root */
    className?: string;
    /** Additional style for root */
    style?: CSSProperties;
    /** Called when an image loads */
    onImageLoad?: MasonryImageLoadHandler;
    /** Called when layout updates */
    onLayoutComplete?: () => void;
    /** Minimum item height */
    minItemHeight?: number;
    /** Default column for items without specified column */
    defaultColumn?: number;
    /** Loading placeholder */
    loadingPlaceholder?: React.ReactNode;
    /** Empty state content */
    emptyState?: React.ReactNode;
}
/** Image item props */
export interface MasonryImageProps {
    /** Image source */
    src: string;
    /** Alt text */
    alt?: string;
    /** Additional className */
    className?: string;
    /** Additional style */
    style?: CSSProperties;
    /** Load handler */
    onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
    /** Error handler */
    onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
    /** Object fit */
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    /** Border radius */
    borderRadius?: string | number;
}
//# sourceMappingURL=types.d.ts.map