import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
interface DatePickerProps {
    title: string;
    value?: string;
    className?: string;
    disable?: boolean;
    showFormat?: string;
    placeholder?: string;
}
export declare const DatePickerComp: ({ title, className, disable, value, showFormat, placeholder, }: DatePickerProps) => React.JSX.Element;
export {};
