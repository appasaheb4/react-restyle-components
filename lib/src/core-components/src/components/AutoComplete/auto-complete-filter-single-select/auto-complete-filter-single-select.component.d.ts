import { CSSProperties } from 'react';
export interface AutoCompleteFilterSingleSelectClassNames {
    container?: string;
    inputWrapper?: string;
    input?: string;
    icon?: string;
    dropdown?: string;
    list?: string;
    listItem?: string;
    itemLabel?: string;
    emptyState?: string;
}
export interface AutoCompleteFilterSingleSelectStyles {
    container?: CSSProperties;
    inputWrapper?: CSSProperties;
    input?: CSSProperties;
    icon?: CSSProperties;
    dropdown?: CSSProperties;
    list?: CSSProperties;
    listItem?: CSSProperties;
    itemLabel?: CSSProperties;
    emptyState?: CSSProperties;
}
interface AutoCompleteFilterSingleSelectProps {
    loader?: boolean;
    disable?: boolean;
    displayValue?: string;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    classNames?: AutoCompleteFilterSingleSelectClassNames;
    styles?: AutoCompleteFilterSingleSelectStyles;
    onFilter: (item: any) => void;
    onSelect: (item: any) => any;
}
export declare const AutoCompleteFilterSingleSelect: ({ disable, loader, displayValue, placeholder, data, hasError, classNames, styles, onFilter, onSelect, }: AutoCompleteFilterSingleSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
