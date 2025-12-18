import { CSSProperties } from 'react';
export interface AutoCompleteFilterMultipleSelectMultipleFieldsDisplayClassNames {
    /** Custom className for the root container */
    container?: string;
    /** Custom className for the input wrapper (contains input + icon) */
    inputWrapper?: string;
    /** Custom className for the input field */
    input?: string;
    /** Custom className for the dropdown container */
    dropdown?: string;
    /** Custom className for the dropdown list (ul element) */
    list?: string;
    /** Custom className for each list item (li element) */
    listItem?: string;
    /** Custom className for the label wrapper */
    label?: string;
    /** Custom className for the checkbox */
    checkbox?: string;
    /** Custom className for the item text/span */
    itemText?: string;
    /** Custom className for the empty state container */
    emptyState?: string;
    /** Custom className for the empty state text */
    emptyStateText?: string;
    /** Custom className for the chevron icon */
    icon?: string;
}
export interface AutoCompleteFilterMultipleSelectMultipleFieldsDisplayStyles {
    /** Custom style for the root container */
    container?: CSSProperties;
    /** Custom style for the input wrapper (contains input + icon) */
    inputWrapper?: CSSProperties;
    /** Custom style for the input field */
    input?: CSSProperties;
    /** Custom style for the dropdown container */
    dropdown?: CSSProperties;
    /** Custom style for the dropdown list (ul element) */
    list?: CSSProperties;
    /** Custom style for each list item (li element) */
    listItem?: CSSProperties;
    /** Custom style for the label wrapper */
    label?: CSSProperties;
    /** Custom style for the checkbox */
    checkbox?: CSSProperties;
    /** Custom style for the item text/span */
    itemText?: CSSProperties;
    /** Custom style for the empty state container */
    emptyState?: CSSProperties;
    /** Custom style for the empty state text */
    emptyStateText?: CSSProperties;
    /** Custom style for the chevron icon wrapper */
    icon?: CSSProperties;
}
export interface AutoCompleteFilterMultipleSelectMultipleFieldsDisplayProps {
    uniqueField?: string;
    isSelectedStringArray?: boolean;
    loader?: boolean;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    disable?: boolean;
    isUpperCase?: boolean;
    name?: string;
    /** Custom classNames for component parts */
    classNames?: AutoCompleteFilterMultipleSelectMultipleFieldsDisplayClassNames;
    /** Custom inline styles for component parts */
    styles?: AutoCompleteFilterMultipleSelectMultipleFieldsDisplayStyles;
    onFilter?: (value: string) => void;
    onUpdate: (item: any) => void;
    onSelect: (item: any) => any;
    onBlur?: (e: any) => void;
}
export declare const AutoCompleteFilterMultipleSelectMultipleFieldsDisplay: ({ uniqueField, isSelectedStringArray, loader, placeholder, data, hasError, disable, isUpperCase, name, classNames, styles, onFilter, onUpdate, onSelect, onBlur, }: AutoCompleteFilterMultipleSelectMultipleFieldsDisplayProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=auto-complete-filter-multiple-select-multiple-fields-display.component.d.ts.map