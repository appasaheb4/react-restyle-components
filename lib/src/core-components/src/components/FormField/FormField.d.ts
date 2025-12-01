import React from 'react';
import { InputProps } from '../../core-components/atoms/Input/Input';
import { TextareaProps } from '../../core-components/atoms/Textarea/Textarea';
import { LabelProps as ImportedLabelProps } from '../../core-components/atoms/Label/Label';
import { type RadioOption, type CheckboxOption } from './components';
export type { InputProps, TextareaProps, LabelProps as ImportedLabelProps };
export type { RadioOption, CheckboxOption } from './components';
export type { LabelProps, InputWrapperProps };
export { PasswordInput, ToggleInput, RadioInput, CheckboxInput, CheckboxGroupInput, DatePickerInput, DropdownInput, TextDropdownInput, PinInput, OtpInput, CssMultilineInput, } from './components';
interface LabelProps {
    htmlFor: string;
    hasError?: boolean;
    style?: any;
    children?: React.ReactNode;
}
export declare const Label: React.FunctionComponent<LabelProps>;
interface InputWrapperProps {
    id?: string;
    label?: string;
    className?: string;
    hasError?: boolean;
    style?: any;
    ref?: any;
    children?: React.ReactNode;
}
export declare const InputWrapper: React.FunctionComponent<InputWrapperProps>;
interface BaseFormFieldProps {
    /** Label text displayed above the input */
    label?: string;
    /** Error message displayed below the input */
    error?: string;
    /** Whether the field has an error (shows error styling even without error message) */
    hasError?: boolean;
    /** Additional props for the Label component */
    labelProps?: Omit<ImportedLabelProps, 'htmlFor' | 'required' | 'children'>;
    /** Unique identifier for the field */
    id?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Input type - use 'textarea', 'toggle', 'radio', 'checkbox', 'checkbox-group', 'date-picker', 'input-dropdown', 'text-input-dropdown', 'input-pin', 'input-otp', 'css-multiline', or 'input-wrapper' for special types */
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'] | 'textarea' | 'toggle' | 'radio' | 'checkbox' | 'checkbox-group' | 'date-picker' | 'input-dropdown' | 'text-input-dropdown' | 'input-pin' | 'input-otp' | 'css-multiline' | 'input-wrapper';
    /** Show password toggle button (only for type="password") */
    showPasswordToggle?: boolean;
    /** Radio options (only for type="radio") */
    radioOptions?: RadioOption[];
    /** Checkbox label (only for type="checkbox") */
    checkboxLabel?: string;
    /** Checkbox group options (only for type="checkbox-group") */
    checkboxOptions?: CheckboxOption[];
    /** Toggle label visibility (only for type="toggle") */
    isToggleLabel?: boolean;
    /** Date format (only for type="date-picker") */
    dateFormat?: string;
    /** Dropdown items (only for type="input-dropdown" or "text-input-dropdown") */
    dropdownItems?: string[];
    /** Allow custom input values (only for type="text-input-dropdown", default: true) */
    allowCustomInput?: boolean;
    /** PIN length (only for type="input-pin", default: 12) */
    pinLength?: number;
    /** OTP length (only for type="input-otp", default: 6) */
    otpLength?: number;
    /** PIN/OTP value array (only for type="input-pin" or "input-otp") */
    pinValue?: Array<number | undefined>;
    /** Error message for PIN/OTP (only for type="input-pin" or "input-otp") */
    pinErrorMsg?: string;
    /** Default message for PIN/OTP (only for type="input-pin" or "input-otp") */
    pinDefaultMsg?: string;
    /** CSS properties data (only for type="css-multiline") */
    cssProperties?: Array<[string, string[]]>;
    /** On reset callback (only for type="css-multiline") */
    onReset?: (value: string) => void;
    /** On more info callback (only for type="css-multiline") */
    onMoreInfo?: () => void;
}
type HTMLFieldAttributes = React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type SafeHTMLAttributes = Pick<HTMLFieldAttributes, 'name' | 'placeholder' | 'value' | 'defaultValue' | 'disabled' | 'readOnly' | 'autoFocus' | 'autoComplete' | 'className' | 'style' | 'maxLength' | 'minLength' | 'tabIndex' | 'aria-label' | 'aria-describedby' | 'aria-invalid' | 'aria-required'>;
type FieldEventHandlers = {
    /** onChange handler - receives the event object (standard React pattern) */
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string | boolean) => void;
    /** onValueChange - receives just the string value (cleaner alternative to onChange for text inputs) */
    onValueChange?: (value: string) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** onBlur handler - receives the event object (standard React pattern) */
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** onBlurValue - receives just the string value (cleaner alternative to onBlur for text inputs) */
    onBlurValue?: (value: string) => void;
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