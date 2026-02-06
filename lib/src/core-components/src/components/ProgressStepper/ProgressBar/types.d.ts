import React from 'react';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Label text displayed above the progress bar */
    label?: string;
    /** Support text displayed below the progress bar */
    supportText?: string;
    /** Current progress value */
    value: number;
    /** Maximum value (default: 100) */
    max?: number;
    /** Size of the progress bar */
    size?: 'small' | 'medium' | 'large';
    /** Variant of the progress bar */
    variant?: 'continuous' | 'segmented';
    /** Number of segments (for segmented variant) */
    segments?: number;
    /** Custom color for the progress fill */
    color?: string;
    /** Custom color for the track */
    trackColor?: string;
    /** Whether to show the percentage value */
    showValue?: boolean;
    /** Whether the progress bar is in loading/indeterminate state */
    isIndeterminate?: boolean;
    /** Whether to show loading animations (shimmer, pulse effects). Default: true */
    showAnimation?: boolean;
    /** Custom class name */
    className?: string;
}
