export interface AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplayProps {
    uniqueField?: string;
    isSelectedStringArray?: boolean;
    loader?: boolean;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    disable?: boolean;
    isUpperCase?: boolean;
    name?: string;
    showGroupHeaders?: boolean;
    collapsibleGroups?: boolean;
    groupByDetails?: {
        groupByName: string;
        totalItemName: string;
    };
    onFilter?: (value: string) => void;
    onUpdate?: (item: any) => void;
    onSelect: (item: any) => any;
    onBlur?: (e: any) => void;
}
export declare const AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplay: ({ uniqueField, isSelectedStringArray, loader, placeholder, data, hasError, disable, isUpperCase, name, showGroupHeaders, collapsibleGroups, groupByDetails, onFilter, onUpdate, onSelect, onBlur, }: AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplayProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=auto-complete-filter-group-by-multiple-select-multiple-fields-display.component.d.ts.map