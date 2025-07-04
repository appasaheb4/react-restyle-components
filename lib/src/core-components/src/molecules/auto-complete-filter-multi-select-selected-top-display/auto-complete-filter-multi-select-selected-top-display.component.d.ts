export interface AutoCompleteFilterMultiSelectSelectedTopDisplayProps {
    uniqueField?: string;
    loader?: boolean;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    disable?: boolean;
    isUpperCase?: boolean;
    name?: string;
    onFilter?: (value: string) => void;
    onUpdate: (item: any) => void;
    onSelect: (item: any, isSelectedRemove?: boolean) => any;
    onBlur?: (e: any) => void;
    dynamicCheck?: string;
}
export declare const AutoCompleteFilterMultiSelectSelectedTopDisplay: ({ uniqueField, placeholder, data, hasError, disable, isUpperCase, name, onFilter, onUpdate, onSelect, onBlur, dynamicCheck, }: AutoCompleteFilterMultiSelectSelectedTopDisplayProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=auto-complete-filter-multi-select-selected-top-display.component.d.ts.map