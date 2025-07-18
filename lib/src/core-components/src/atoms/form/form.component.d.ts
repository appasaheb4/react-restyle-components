import React from 'react';
import './toggle.css';
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
interface InputProps extends InputWrapperProps {
    value?: any;
    defaultValue?: any;
    name?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
    rows?: number;
    style?: any;
    wrapperStyle?: any;
    hasError?: boolean;
    pattern?: any;
    maxLength?: number;
    isAutoFocus?: boolean;
    input2isBlurEnable?: boolean;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    inputRef?: any;
}
export declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<any>>;
export declare const InputPassword: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<any>>;
export declare const MultilineInput: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
interface InputRadioProps extends InputWrapperProps {
    values?: any[];
    value?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    labelStyle?: any;
    onChange?: (e: any) => void;
}
export declare const InputRadio: (props: InputRadioProps) => import("react/jsx-runtime").JSX.Element;
interface InputDateProps extends InputWrapperProps {
    value?: any;
    name?: string;
    disabled?: boolean;
    hasError?: boolean;
    format?: string;
    isCalenderOpen?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onChange?: (e: any) => void;
    onCalendarToggle?: (status: boolean) => void;
    onFocusRemove?: (date: any) => void;
}
export declare const InputDate: ({ name, value, label, id, hasError, disabled, format, onChange, onFocusRemove, }: InputDateProps) => import("react/jsx-runtime").JSX.Element;
interface InputDateTimeProps extends InputWrapperProps {
    type?: string;
    id?: string;
    label?: string;
    hasError?: boolean;
    className?: string;
    min?: string;
    onChange?: (value: any) => void;
}
export declare const InputDateTime: ({ type, id, label, hasError, className, min, onChange, }: InputDateTimeProps) => import("react/jsx-runtime").JSX.Element;
export declare const CheckBox: (props: any) => import("react/jsx-runtime").JSX.Element;
interface InputFileProps extends InputWrapperProps {
    value?: any;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    accept?: string;
    multiple?: boolean;
    hasError?: boolean;
    onChange?: (e: any) => void;
}
export declare const InputFile: (props: InputFileProps) => import("react/jsx-runtime").JSX.Element;
interface ToggleProps extends InputWrapperProps {
    disabled?: boolean;
    isToggleLabel?: boolean;
    defaultChecked?: boolean;
    className?: string;
    icons?: any;
    value?: boolean;
    name?: string;
    onChange?: (e: boolean) => void;
    style?: any;
}
export declare const Toggle: (props: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=form.component.d.ts.map