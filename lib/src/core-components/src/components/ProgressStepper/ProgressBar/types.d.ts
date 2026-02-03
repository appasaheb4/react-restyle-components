import React from 'react';
export type ProgressBarSize = 'small' | 'medium' | 'large';
export type ProgressBarVariant = 'continuous' | 'segmented';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Label text displayed above the progress bar */
    label?: string;
    /** Support text displayed below the progress bar */
    supportText?: string;
    /** Current progress value (0-100) */
    value: number;
    /** Maximum value (default: 100) */
    max?: number;
    /** Size of the progress bar */
    size?: ProgressBarSize;
    /** Variant of the progress bar */
    variant?: ProgressBarVariant;
    /** Number of segments (only for segmented variant) */
    segments?: number;
    /** Color of the progress fill */
    color?: string;
    /** Background color of the track */
    trackColor?: string;
    /** Whether to show the percentage value */
    showValue?: boolean;
    /** Whether the progress bar is in loading/indeterminate state */
    isIndeterminate?: boolean;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
}
