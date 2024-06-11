import React from 'react';
interface AutoCompleteFilterMultipleSelectMultipleFieldsDisplayProps {
    uniqueField?: string;
    loader?: boolean;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    disable?: boolean;
    isUpperCase?: boolean;
    name?: string;
    onFilter?: (value: string) => void;
    onUpdate: (item: any) => void;
    onSelect: (item: any) => any;
    onBlur?: (e: any) => void;
}
export declare const AutoCompleteFilterMultipleSelectMultipleFieldsDisplay: ({ uniqueField, loader, placeholder, data, hasError, disable, isUpperCase, name, onFilter, onUpdate, onSelect, onBlur, }: AutoCompleteFilterMultipleSelectMultipleFieldsDisplayProps) => React.JSX.Element;
export {};
