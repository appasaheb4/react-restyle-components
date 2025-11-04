import React from 'react';
import { InputProps } from '../../core-components/atoms/Input/Input';
import { TextareaProps } from '../../core-components/atoms/Textarea/Textarea';
import { LabelProps } from '../../core-components/atoms/Label/Label';
export type { InputProps, TextareaProps, LabelProps };
interface BaseFormFieldProps {
    /** Label text displayed above the input */
    label?: string;
    /** Error message displayed below the input */
    error?: string;
    /** Additional props for the Label component */
    labelProps?: Omit<LabelProps, 'htmlFor' | 'required' | 'children'>;
    /** Unique identifier for the field */
    id?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Input type - use 'textarea' to render a Textarea component */
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'] | 'textarea';
}
type HTMLFieldAttributes = React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type SafeHTMLAttributes = Pick<HTMLFieldAttributes, 'name' | 'placeholder' | 'value' | 'defaultValue' | 'disabled' | 'readOnly' | 'autoFocus' | 'autoComplete' | 'className' | 'style' | 'maxLength' | 'minLength' | 'tabIndex' | 'aria-label' | 'aria-describedby' | 'aria-invalid' | 'aria-required'>;
type FieldEventHandlers = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
type InputSpecificProps = {
    accept?: string;
    alt?: string;
    capture?: boolean | 'user' | 'environment';
    checked?: boolean;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    list?: string;
    max?: string | number;
    min?: string | number;
    multiple?: boolean;
    pattern?: string;
    step?: string | number;
    src?: string;
};
type TextareaSpecificProps = {
    rows?: number;
    cols?: number;
    wrap?: 'hard' | 'soft' | 'off';
};
export interface FormFieldProps extends BaseFormFieldProps, SafeHTMLAttributes, FieldEventHandlers, Partial<InputSpecificProps>, Partial<TextareaSpecificProps> {
    [key: string]: any;
}
export declare const FormField: React.ForwardRefExoticComponent<Omit<FormFieldProps, "ref"> & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
//# sourceMappingURL=FormField.d.ts.map