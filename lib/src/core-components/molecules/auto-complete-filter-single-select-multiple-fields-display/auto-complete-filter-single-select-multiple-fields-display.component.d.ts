import React from 'react';
interface AutoCompleteFilterSingleSelectMultiFieldsDisplayProps {
    loader?: boolean;
    disable?: boolean;
    displayValue?: string;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    className?: string;
    posstion?: string;
    onFilter?: (item: any) => void;
    onSelect?: (item: any) => any;
    onBlur?: (item: any) => any;
}
export declare const AutoCompleteFilterSingleSelectMultiFieldsDisplay: ({ disable, loader, displayValue, placeholder, data, hasError, className, posstion, onFilter, onSelect, onBlur, }: AutoCompleteFilterSingleSelectMultiFieldsDisplayProps) => React.JSX.Element;
export {};
