import React from 'react';
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur'> {
    error?: string;
    label?: string;
    /** onChange handler - receives the change event */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** onBlur handler - receives the blur event */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** onValueChange - receives just the string value (alternative to onChange) */
    onValueChange?: (value: string) => void;
    /** onBlurValue - receives just the string value (alternative to onBlur) */
    onBlurValue?: (value: string) => void;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=Textarea.d.ts.map