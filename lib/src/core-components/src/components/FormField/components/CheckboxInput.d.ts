import React from 'react';
export interface CheckboxInputProps {
    id: string;
    label?: string;
    checkboxLabel?: string;
    error?: string;
    required?: boolean;
    value?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const CheckboxInput: React.ForwardRefExoticComponent<Omit<CheckboxInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=CheckboxInput.d.ts.map