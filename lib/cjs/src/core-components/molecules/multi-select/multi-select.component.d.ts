import React from 'react';
interface MultiSelectProps {
    options: Array<string>;
    selectedItems?: Array<string>;
    hasError?: boolean;
    onSelect: (item: any) => any;
}
export declare const MultiSelect: ({ options, selectedItems, hasError, onSelect, }: MultiSelectProps) => React.JSX.Element;
export {};
