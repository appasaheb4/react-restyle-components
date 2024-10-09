import React from 'react';
import './input.styles.css';
import '../../../tc.css';
interface InputProps {
    title: string;
    defaultValue: string;
    hasError?: any;
    errorMsg?: string;
    defaultMsg?: string;
    className?: string;
    disable?: boolean;
    inputStyle?: string;
    autoComplete?: 'off' | 'on';
    maxlength?: number;
    onChange: (value: any) => void;
    onBlur?: (value: any) => void;
}
export declare const Input: ({ title, defaultValue, className, disable, hasError, errorMsg, defaultMsg, inputStyle, autoComplete, maxlength, onChange, onBlur, }: InputProps) => React.JSX.Element;
export {};
