import React from 'react';
export interface DropdownInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    dropdownItems?: string[];
    placeholder?: string;
    name?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const DropdownInput: React.ForwardRefExoticComponent<Omit<DropdownInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=DropdownInput.d.ts.map