import React from 'react';
export declare const SWITCH_SIZES: readonly ["small", "medium", "large"];
export type SwitchSize = (typeof SWITCH_SIZES)[number];
export declare const SWITCH_COLORS: readonly ["primary", "success", "warning", "error", "neutral"];
export type SwitchColor = (typeof SWITCH_COLORS)[number];
export declare const SWITCH_LABEL_POSITIONS: readonly ["left", "right"];
export type SwitchLabelPosition = (typeof SWITCH_LABEL_POSITIONS)[number];
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Label text */
    label?: string;
    /** Label position relative to switch */
    labelPosition?: SwitchLabelPosition;
    /** Switch size */
    size?: SwitchSize;
    /** Color scheme when checked */
    color?: SwitchColor;
    /** Whether the switch is checked */
    checked?: boolean;
    /** Default checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Show on/off icons inside track */
    showIcons?: boolean;
    /** Description text below label */
    description?: string;
    /** Change handler */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Additional class name */
    className?: string;
}
