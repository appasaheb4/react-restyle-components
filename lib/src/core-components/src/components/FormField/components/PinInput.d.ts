import React from 'react';
export interface PinInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: Array<number | undefined>;
    onChange?: (value: Array<number | undefined>) => void;
    disabled?: boolean;
    pinLength?: number;
    pinErrorMsg?: string;
    pinDefaultMsg?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const PinInput: React.ForwardRefExoticComponent<Omit<PinInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
