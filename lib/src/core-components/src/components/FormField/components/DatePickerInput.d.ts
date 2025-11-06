import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
export interface DatePickerInputProps {
    id: string;
    label?: string;
    error?: string;
    required?: boolean;
    value?: string | Date;
    onChange?: (value: string) => void;
    disabled?: boolean;
    dateFormat?: string;
    placeholder?: string;
    className?: string;
    labelProps?: any;
    [key: string]: any;
}
export declare const DatePickerInput: React.ForwardRefExoticComponent<Omit<DatePickerInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=DatePickerInput.d.ts.map