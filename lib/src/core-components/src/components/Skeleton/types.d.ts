import React from 'react';
export declare const SKELETON_VARIANTS: readonly ["rectangular", "circular", "text", "rounded", "button", "avatar", "badge"];
export type SkeletonVariant = (typeof SKELETON_VARIANTS)[number];
export declare const SKELETON_ANIMATIONS: readonly ["pulse", "wave", "shimmer", "glow", "none"];
export type SkeletonAnimation = (typeof SKELETON_ANIMATIONS)[number];
export declare const SKELETON_SIZES: readonly ["xs", "sm", "md", "lg", "xl"];
export type SkeletonSize = (typeof SKELETON_SIZES)[number];
export declare const SKELETON_THEMES: readonly ["light", "dark", "auto"];
export type SkeletonTheme = (typeof SKELETON_THEMES)[number];
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Width of the skeleton */
    width?: string | number;
    /** Height of the skeleton */
    height?: string | number;
    /** Shape variant */
    variant?: SkeletonVariant;
    /** Animation type */
    animation?: SkeletonAnimation;
    /** Preset size (overridden by width/height) */
    size?: SkeletonSize;
    /** Number of skeleton elements to render */
    count?: number;
    /** Gap between multiple elements */
    gap?: string;
    /** Animation duration in ms */
    duration?: number;
    /** Border radius for rounded variant */
    borderRadius?: string;
    /** Theme mode */
    theme?: SkeletonTheme;
    /** Stagger animation delay for multiple elements */
    stagger?: boolean;
    /** Make responsive (width: 100%) on mobile */
    responsive?: boolean;
    /** Aspect ratio for responsive elements */
    aspectRatio?: string;
    /** Additional class name */
    className?: string;
}
export interface SkeletonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Children skeleton elements */
    children: React.ReactNode;
    /** Layout direction */
    direction?: 'row' | 'column';
    /** Gap between elements */
    gap?: string;
    /** Align items */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /** Wrap items */
    wrap?: boolean;
    /** Responsive stack on mobile */
    responsive?: boolean;
    /** Additional class name */
    className?: string;
}
export interface SkeletonTextProps extends Omit<SkeletonProps, 'variant'> {
    /** Number of text lines */
    lines?: number;
    /** Last line width percentage */
    lastLineWidth?: string;
}
export interface SkeletonAvatarProps extends Omit<SkeletonProps, 'variant' | 'width' | 'height'> {
    /** Avatar size preset */
    size?: SkeletonSize;
}
export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Show image placeholder */
    hasImage?: boolean;
    /** Image height */
    imageHeight?: string | number;
    /** Number of text lines */
    textLines?: number;
    /** Show action buttons */
    hasActions?: boolean;
    /** Animation type */
    animation?: SkeletonAnimation;
    /** Theme mode */
    theme?: SkeletonTheme;
}
//# sourceMappingURL=types.d.ts.map