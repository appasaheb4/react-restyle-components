import React from 'react';
export interface TextDropdownInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement> | null, value?: string) => void;
    disabled?: boolean;
    dropdownItems?: string[];
    allowCustomInput?: boolean;
    placeholder?: string;
    name?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const TextDropdownInput: React.ForwardRefExoticComponent<Omit<TextDropdownInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextDropdownInput.d.ts.map