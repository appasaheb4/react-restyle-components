import React from 'react';
export type BadgeSize = 'hint' | 'sm' | 'md';
export type BadgeVariant = 'notification' | 'alert' | 'warn' | 'positive' | 'neutral';
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type BadgeOverlap = 'circular' | 'square';
export declare const sizeMap: {
    readonly hint: "0.5rem";
    readonly sm: "1rem";
    readonly md: "1.25rem";
};
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Position of the badge */
    position?: BadgePosition;
    /** Size of the badge */
    size?: BadgeSize;
    /** Overlap style */
    overlap?: BadgeOverlap;
    /** Visual variant */
    variant?: BadgeVariant;
    /** Icon source for the badge */
    iconSrc?: string;
    /** Count to display */
    count?: number | string;
    /** Children to wrap with badge */
    children?: React.ReactNode;
}
//# sourceMappingURL=types.d.ts.map