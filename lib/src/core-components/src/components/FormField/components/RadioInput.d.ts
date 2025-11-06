import React from 'react';
export interface RadioOption {
    label?: string;
    value?: string;
    title?: string;
    checked?: boolean;
}
export interface RadioInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string | RadioOption;
    onChange?: (value: string | RadioOption) => void;
    disabled?: boolean;
    radioOptions?: RadioOption[];
    name?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const RadioInput: React.ForwardRefExoticComponent<Omit<RadioInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=RadioInput.d.ts.map