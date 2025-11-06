import React from 'react';
interface PasswordInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const PasswordInput: React.ForwardRefExoticComponent<Omit<PasswordInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=PasswordInput.d.ts.map