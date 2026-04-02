import React, { CSSProperties } from 'react';
export declare const TOOLTIP_POSITIONS: readonly ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"];
export type TooltipPosition = (typeof TOOLTIP_POSITIONS)[number];
export declare const TOOLTIP_VARIANTS: readonly ["dark", "light"];
export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number];
export declare const TOOLTIP_SIZES: readonly ["small", "medium", "large"];
export type TooltipSize = (typeof TOOLTIP_SIZES)[number];
export declare const TOOLTIP_TRIGGERS: readonly ["hover", "click", "focus", "manual"];
export type TooltipTrigger = (typeof TOOLTIP_TRIGGERS)[number];
export interface TargetRect {
    top: number;
    left: number;
    width: number;
    height: number;
}
export interface TooltipClassNames {
    /** Custom className for the trigger wrapper */
    trigger?: string;
    /** Custom className for the content container */
    content?: string;
    /** Custom className for the arrow */
    arrow?: string;
}
export interface TooltipStyles {
    /** Custom style for the trigger wrapper */
    trigger?: CSSProperties;
    /** Custom style for the content container */
    content?: CSSProperties;
    /** Custom style for the arrow */
    arrow?: CSSProperties;
}
export interface TooltipProps {
    /** Children element (trigger) */
    children: React.ReactNode;
    /** Tooltip content */
    content?: React.ReactNode;
    /** Preferred position */
    position?: TooltipPosition;
    /** @deprecated use 'position' instead */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Alignment (only for basic positions) */
    align?: 'start' | 'center' | 'end';
    /** Visual variant */
    variant?: TooltipVariant;
    /** Size preset */
    size?: TooltipSize;
    /** Delay before showing (ms) */
    delay?: number;
    /** Delay before hiding (ms) */
    hideDelay?: number;
    /** Distance from trigger element */
    offset?: number;
    /** @deprecated use 'offset' instead */
    sideOffset?: number;
    /** @deprecated use 'offset' instead */
    alignOffset?: number;
    /** Maximum width of tooltip */
    maxWidth?: number;
    /** Show arrow */
    showArrow?: boolean;
    /** Disable tooltip */
    disabled?: boolean;
    /** Trigger mode */
    trigger?: TooltipTrigger | TooltipTrigger[];
    /** Controlled open state */
    open?: boolean;
    /** Open state change handler */
    onOpenChange?: (open: boolean) => void;
    /** Avoid viewport collisions */
    avoidCollisions?: boolean;
    /** Use portal for rendering */
    portal?: boolean;
    /** Enable animations */
    animated?: boolean;
    /** Custom class names */
    classNames?: TooltipClassNames;
    /** Custom styles */
    styles?: TooltipStyles;
    /** Deprecated: use classNames.trigger */
    className?: string;
    /** z-index for tooltip */
    zIndex?: number;
    /** Accessibility: aria-label override */
    ariaLabel?: string;
}
