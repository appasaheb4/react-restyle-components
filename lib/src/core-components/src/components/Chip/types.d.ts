import React from 'react';
export declare const CHIP_VARIANTS: readonly ["filled", "outlined", "soft"];
export type ChipVariant = (typeof CHIP_VARIANTS)[number];
export declare const CHIP_SIZES: readonly ["small", "medium", "large"];
export type ChipSize = (typeof CHIP_SIZES)[number];
export declare const CHIP_COLORS: readonly ["default", "primary", "success", "warning", "error", "info"];
export type ChipColor = (typeof CHIP_COLORS)[number];
export declare const CHIP_TYPES: readonly ["button", "selection", "filter", "input"];
export type ChipType = (typeof CHIP_TYPES)[number];
export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** Chip label text */
    label: string;
    /** Visual variant */
    variant?: ChipVariant;
    /** Size of the chip */
    size?: ChipSize;
    /** Color scheme */
    color?: ChipColor;
    /** Chip behavior type */
    chipType?: ChipType;
    /** Whether the chip is selected */
    selected?: boolean;
    /** Whether the chip is disabled */
    disabled?: boolean;
    /** Icon on the left side */
    iconLeft?: React.ReactNode;
    /** Icon on the right side */
    iconRight?: React.ReactNode;
    /** Show delete icon (for input type) */
    deletable?: boolean;
    /** Delete handler */
    onDelete?: () => void;
    /** Click handler */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Avatar or image on left */
    avatar?: React.ReactNode;
    /** Additional class name */
    className?: string;
}
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Children chips */
    children: React.ReactNode;
    /** Gap between chips */
    gap?: string;
    /** Wrap chips */
    wrap?: boolean;
    /** Horizontal scroll on overflow */
    scrollable?: boolean;
    /** Direction */
    direction?: 'row' | 'column';
    /** Additional class name */
    className?: string;
}
