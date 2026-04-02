import React from 'react';
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
    [key: string]: any;
}
export declare const CssMultilineInput: React.ForwardRefExoticComponent<Omit<CssMultilineInputProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
