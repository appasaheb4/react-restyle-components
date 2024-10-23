import React from 'react';
interface AutocompleteGroupByProps {
    data: any[];
    onChange?: (item: any, children: any) => void;
    hasError?: boolean;
    displayValue?: string;
    onClose?: () => void;
}
export declare const AutocompleteGroupBy: (props: AutocompleteGroupByProps) => React.JSX.Element;
export {};
