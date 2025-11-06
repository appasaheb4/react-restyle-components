import React from 'react';
export interface OtpInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: Array<number | undefined>;
    onChange?: (value: Array<number | undefined>) => void;
    disabled?: boolean;
    otpLength?: number;
    pinErrorMsg?: string;
    pinDefaultMsg?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const OtpInput: React.ForwardRefExoticComponent<Omit<OtpInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=OtpInput.d.ts.map