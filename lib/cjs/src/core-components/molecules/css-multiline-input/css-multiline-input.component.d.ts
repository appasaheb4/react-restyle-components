import React from 'react';
import '../../../tc.css';
interface CSSMultilineProps {
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    style?: any;
    onChange(item: any): void;
}
export declare const CSSMultiline: ({ label, defaultValue, className, style, placeholder, onChange, }: CSSMultilineProps) => React.JSX.Element;
export {};
