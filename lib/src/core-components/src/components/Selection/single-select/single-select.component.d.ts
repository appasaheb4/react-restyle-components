import React, { CSSProperties } from 'react';
export interface SingleSelectClassNames {
    /** Custom className for the container */
    container?: string;
    /** Custom className for the trigger/display span */
    trigger?: string;
    /** Custom className for the icon wrapper */
    icon?: string;
    /** Custom className for the dropdown container */
    dropdown?: string;
    /** Custom className for the list */
    list?: string;
    /** Custom className for list items */
    listItem?: string;
    /** Custom className for the item text */
    itemText?: string;
}
export interface SingleSelectStyles {
    /** Custom style for the container */
    container?: CSSProperties;
    /** Custom style for the trigger/display span */
    trigger?: CSSProperties;
    /** Custom style for the icon wrapper */
    icon?: CSSProperties;
    /** Custom style for the dropdown container */
    dropdown?: CSSProperties;
    /** Custom style for the list */
    list?: CSSProperties;
    /** Custom style for list items */
    listItem?: CSSProperties;
    /** Custom style for the item text */
    itemText?: CSSProperties;
}
interface SingleSelectProps {
    options: Array<any>;
    displayKey?: string;
    displayValue?: string;
    hasError?: boolean;
    className?: string;
    style?: React.CSSProperties;
    /** Custom classNames for component parts */
    classNames?: SingleSelectClassNames;
    /** Custom inline styles for component parts */
    styles?: SingleSelectStyles;
    onSelect: (item: any) => any;
}
export declare const SingleSelect: ({ options, displayKey, displayValue, hasError, className, style, classNames, styles, onSelect, }: SingleSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=single-select.component.d.ts.map