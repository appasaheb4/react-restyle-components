import React from 'react';
import '../toggle.css';
export interface ToggleInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    isToggleLabel?: boolean;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const ToggleInput: React.ForwardRefExoticComponent<Omit<ToggleInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
