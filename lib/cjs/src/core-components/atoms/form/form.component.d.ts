import React from 'react';
import '../../../tc.css';
import '../../../tc.css';
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
export declare const Input1: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<any>>;
export declare const Input2: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<any>>;
export declare const MultilineInput: (props: InputProps) => React.JSX.Element;
export declare const MultilineInput1: (props: InputProps) => React.JSX.Element;
interface InputRadioProps extends InputWrapperProps {
    values?: any[];
    value?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    labelStyle?: any;
    onChange?: (e: any) => void;
}
export declare const InputRadio: (props: InputRadioProps) => React.JSX.Element;
interface InputDateProps extends InputWrapperProps {
    value?: any;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    hasError?: boolean;
    format?: string;
    use12Hours?: boolean;
    isCalenderOpen?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onChange?: (e: any) => void;
    onCalendarToggle?: (status: boolean) => void;
    onFocusRemove?: (date: any) => void;
}
export declare const InputDate: ({ name, value, placeholder, use12Hours, label, id, hasError, disabled, format, onChange, onFocusRemove, }: InputDateProps) => React.JSX.Element;
export declare const CheckBox: (props: any) => React.JSX.Element;
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
export declare const InputFile: (props: InputFileProps) => React.JSX.Element;
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
export declare const Toggle: (props: ToggleProps) => React.JSX.Element;
export declare const DeliveryScheduleToggle: (props: ToggleProps) => React.JSX.Element;
export {};
