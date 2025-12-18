import { CSSProperties } from 'react';
export interface MultiSelectClassNames {
    /** Custom className for the container */
    container?: string;
    /** Custom className for the trigger/display span */
    trigger?: string;
    /** Custom className for the dropdown container */
    dropdown?: string;
    /** Custom className for the list */
    list?: string;
    /** Custom className for list items */
    listItem?: string;
    /** Custom className for the label */
    label?: string;
    /** Custom className for the checkbox */
    checkbox?: string;
    /** Custom className for the item text */
    itemText?: string;
}
export interface MultiSelectStyles {
    /** Custom style for the container */
    container?: CSSProperties;
    /** Custom style for the trigger/display span */
    trigger?: CSSProperties;
    /** Custom style for the dropdown container */
    dropdown?: CSSProperties;
    /** Custom style for the list */
    list?: CSSProperties;
    /** Custom style for list items */
    listItem?: CSSProperties;
    /** Custom style for the label */
    label?: CSSProperties;
    /** Custom style for the checkbox */
    checkbox?: CSSProperties;
    /** Custom style for the item text */
    itemText?: CSSProperties;
}
interface MultiSelectProps {
    options: Array<string>;
    selectedItems?: Array<string>;
    hasError?: boolean;
    /** Custom classNames for component parts */
    classNames?: MultiSelectClassNames;
    /** Custom inline styles for component parts */
    styles?: MultiSelectStyles;
    onSelect: (item: any) => any;
}
export declare const MultiSelect: ({ options, selectedItems, hasError, classNames, styles, onSelect, }: MultiSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=multi-select.component.d.ts.map