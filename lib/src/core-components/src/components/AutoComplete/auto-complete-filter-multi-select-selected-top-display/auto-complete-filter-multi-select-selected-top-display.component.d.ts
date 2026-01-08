export interface AutoCompleteFilterMultiSelectSelectedTopDisplayProps {
    uniqueField?: string;
    loader?: boolean;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    disable?: boolean;
    isUpperCase?: boolean;
    name?: string;
    showSelectAllSection?: boolean;
    onFilter?: (value: string) => void;
    onUpdate?: (items?: Array<any>) => void;
    onSelect: (items: any) => void;
    onBlur?: (e: any) => void;
    dynamicCheck?: string;
}
export declare const AutoCompleteFilterMultiSelectSelectedTopDisplay: ({ uniqueField, loader, placeholder, data, hasError, disable, isUpperCase, name, showSelectAllSection, onFilter, onUpdate, onSelect, onBlur, dynamicCheck, }: AutoCompleteFilterMultiSelectSelectedTopDisplayProps) => import("react/jsx-runtime").JSX.Element;
