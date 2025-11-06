import React from 'react';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'> {
    error?: string;
    label?: string;
    /** onChange handler - supports both standard React event or direct value callback */
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
    /** onBlur handler - supports both standard React event or direct value callback */
    onBlur?: (e: React.FocusEvent<HTMLInputElement> | string) => void;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map