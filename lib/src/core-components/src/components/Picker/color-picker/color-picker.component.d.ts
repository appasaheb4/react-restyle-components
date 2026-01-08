import { CSSProperties } from 'react';
import './color-picker.css';
export interface ColorPickerClassNames {
    /** Custom className for the picker container */
    container?: string;
    /** Custom className for the color swatch */
    swatch?: string;
    /** Custom className for the popover */
    popover?: string;
}
export interface ColorPickerStyles {
    /** Custom style for the picker container */
    container?: CSSProperties;
    /** Custom style for the color swatch */
    swatch?: CSSProperties;
    /** Custom style for the popover */
    popover?: CSSProperties;
}
export interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    /** Custom classNames for component parts */
    classNames?: ColorPickerClassNames;
    /** Custom inline styles for component parts */
    styles?: ColorPickerStyles;
}
export declare const ColorPicker: ({ color, onChange, classNames, styles }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
