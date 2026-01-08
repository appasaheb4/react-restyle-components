import { CSSProperties } from 'react';
export interface AutoCompleteFilterSingleSelectMultiFieldsDisplayClassNames {
    container?: string;
    inputWrapper?: string;
    input?: string;
    icon?: string;
    dropdown?: string;
    list?: string;
    listItem?: string;
    itemLabel?: string;
    emptyState?: string;
    loadingContainer?: string;
}
export interface AutoCompleteFilterSingleSelectMultiFieldsDisplayStyles {
    container?: CSSProperties;
    inputWrapper?: CSSProperties;
    input?: CSSProperties;
    icon?: CSSProperties;
    dropdown?: CSSProperties;
    list?: CSSProperties;
    listItem?: CSSProperties;
    itemLabel?: CSSProperties;
    emptyState?: CSSProperties;
    loadingContainer?: CSSProperties;
}
interface AutoCompleteFilterSingleSelectMultiFieldsDisplayProps {
    loader?: boolean;
    disable?: boolean;
    displayValue?: string;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    className?: string;
    posstion?: string;
    keyboard?: string;
    classNames?: AutoCompleteFilterSingleSelectMultiFieldsDisplayClassNames;
    styles?: AutoCompleteFilterSingleSelectMultiFieldsDisplayStyles;
    onFilter?: (item: any) => void;
    onSelect?: (item: any) => any;
    onBlur?: (item: any) => any;
}
export declare const AutoCompleteFilterSingleSelectMultiFieldsDisplay: ({ disable, loader, displayValue, placeholder, data, hasError, className, posstion, keyboard, classNames: customClassNames, styles: customStyles, onFilter, onSelect, onBlur, }: AutoCompleteFilterSingleSelectMultiFieldsDisplayProps) => import("react/jsx-runtime").JSX.Element;
export {};
