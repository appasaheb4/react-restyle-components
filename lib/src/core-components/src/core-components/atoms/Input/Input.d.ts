import React from 'react';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'> {
    error?: string;
    label?: string;
    /** onChange handler - receives the change event */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** onBlur handler - receives the blur event */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** onValueChange - receives just the string value (alternative to onChange) */
    onValueChange?: (value: string) => void;
    /** onValueBlur - receives just the string value (alternative to onBlur) */
    onValueBlur?: (value: string) => void;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
