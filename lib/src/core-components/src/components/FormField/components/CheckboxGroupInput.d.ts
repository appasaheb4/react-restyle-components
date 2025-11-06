import React from 'react';
export interface CheckboxOption {
    title: string;
    checked: boolean;
}
export interface CheckboxGroupInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: CheckboxOption[];
    onChange?: (value: CheckboxOption[]) => void;
    disabled?: boolean;
    checkboxOptions?: CheckboxOption[];
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const CheckboxGroupInput: React.ForwardRefExoticComponent<Omit<CheckboxGroupInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=CheckboxGroupInput.d.ts.map