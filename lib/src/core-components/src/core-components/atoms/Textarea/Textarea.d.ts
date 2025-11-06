import React from 'react';
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur'> {
    error?: string;
    label?: string;
    /** onChange handler - supports both standard React event or direct value callback */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
    /** onBlur handler - supports both standard React event or direct value callback */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement> | string) => void;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=Textarea.d.ts.map