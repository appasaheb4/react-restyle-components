import React from 'react';
interface SingleSelectProps {
    options: Array<any>;
    displayKey?: string;
    displayValue?: string;
    hasError?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onSelect: (item: any) => any;
}
export declare const SingleSelect: ({ options, displayKey, displayValue, hasError, className, style, onSelect, }: SingleSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=single-select.component.d.ts.map