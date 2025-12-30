import React from 'react';
interface PasswordInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string;
    /** onChange handler - receives the event object or string value */
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | string | boolean) => void;
    /** onValueChange - receives just the string value (cleaner alternative to onChange) */
    onValueChange?: (value: string) => void;
    /** onBlur handler - receives the event object */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** onValueBlur - receives just the string value on blur */
    onValueBlur?: (value: string) => void;
    /** onFocus handler */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const PasswordInput: React.ForwardRefExoticComponent<Omit<PasswordInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=PasswordInput.d.ts.map