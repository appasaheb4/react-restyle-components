import React from 'react';
import '../../../tc.css';
interface MultiSelectProps {
    options: Array<string>;
    selectedItems?: Array<string>;
    hasError?: boolean;
    onSelect: (item: any) => any;
}
export declare const MultiSelect: ({ options, selectedItems, hasError, onSelect, }: MultiSelectProps) => React.JSX.Element;
export {};
