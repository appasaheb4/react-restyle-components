import React from 'react';
export declare const DIVIDER_ORIENTATIONS: readonly ["horizontal", "vertical"];
export type DividerOrientation = (typeof DIVIDER_ORIENTATIONS)[number];
export declare const DIVIDER_VARIANTS: readonly ["solid", "dashed", "dotted", "gradient"];
export type DividerVariant = (typeof DIVIDER_VARIANTS)[number];
export declare const DIVIDER_SIZES: readonly ["thin", "medium", "thick"];
export type DividerSize = (typeof DIVIDER_SIZES)[number];
export declare const DIVIDER_COLORS: readonly ["default", "primary", "subtle", "dark"];
export type DividerColor = (typeof DIVIDER_COLORS)[number];
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Orientation of the divider */
    orientation?: DividerOrientation;
    /** Visual variant */
    variant?: DividerVariant;
    /** Thickness of the divider */
    size?: DividerSize;
    /** Color scheme */
    color?: DividerColor;
    /** Inset from edges */
    inset?: string;
    /** Center the inset (from both sides) */
    centerInset?: boolean;
    /** Label text in the middle */
    label?: string;
    /** Label position */
    labelPosition?: 'start' | 'center' | 'end';
    /** Additional class name */
    className?: string;
}
