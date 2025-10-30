interface AutoCompleteFilterMutiSelectMultiFieldsDisplayDragDropProps {
    key?: string;
    uniqueField?: string;
    loader?: boolean;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    disable?: boolean;
    isUpperCase?: boolean;
    name?: string;
    defaultValue?: string;
    onFilter?: (value: string) => void;
    onUpdate: (item: any) => void;
    onSelect: (item: any) => any;
    onBlur?: (e: any) => void;
}
export declare const AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop: ({ key, uniqueField, loader, placeholder, data, hasError, disable, isUpperCase, name, defaultValue, onFilter, onUpdate, onSelect, onBlur, }: AutoCompleteFilterMutiSelectMultiFieldsDisplayDragDropProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=auto-complete-filter-multi-select-multi-fields-display-drag-drop.component.d.ts.map