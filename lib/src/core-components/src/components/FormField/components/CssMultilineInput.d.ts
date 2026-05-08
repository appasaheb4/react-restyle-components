import React from 'react';
export interface CssLayoutPreset {
    id: string;
    title: string;
    hint: string;
    /** Comma-separated fragment appended to current CSS (same quoting rules as picker) */
    snippet: string;
}
export declare const DEFAULT_LAYOUT_PRESETS: CssLayoutPreset[];
export interface CssMultilineInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string;
    /** onChange handler - supports both standard React event or direct value callback */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
    /** onBlur handler - supports both standard React event or direct value callback */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement> | string) => void;
    disabled?: boolean;
    cssProperties?: Array<[string, string[]]>;
    onReset?: (value: string) => void;
    onMoreInfo?: () => void;
    placeholder?: string;
    className?: string;
    labelProps?: any;
    /** Quick layout stacks shown above the property list (defaults built-in) */
    layoutPresets?: CssLayoutPreset[];
    [key: string]: any;
}
export declare const CssMultilineInput: React.ForwardRefExoticComponent<Omit<CssMultilineInputProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
