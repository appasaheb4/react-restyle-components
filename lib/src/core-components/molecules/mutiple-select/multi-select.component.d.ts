import React from 'react';
interface MultipleSelectProps {
    options: Array<string>;
    selectedItems?: Array<string>;
    hasError?: boolean;
    onSelect: (item: any) => any;
}
export declare const MultipleSelect: ({ options, selectedItems, hasError, onSelect, }: MultipleSelectProps) => React.JSX.Element;
export {};
