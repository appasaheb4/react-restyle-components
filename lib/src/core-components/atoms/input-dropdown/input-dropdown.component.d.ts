import React from 'react';
import '../../../tc.css';
interface InputDropdownProps {
    title: string;
    items: Array<string>;
    hasError?: boolean;
    className?: string;
    onChange?: (item: string) => void;
}
export declare const InputDropdown: ({ items, className, hasError, title, onChange, }: InputDropdownProps) => React.JSX.Element;
export {};
