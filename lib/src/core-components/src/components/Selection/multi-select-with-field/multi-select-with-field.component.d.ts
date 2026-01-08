interface MultiSelectWithFieldProps {
    displayField: string;
    options: Array<any>;
    selectedItems?: Array<any>;
    hasError?: boolean;
    onSelect: (item: any) => any;
}
export declare const MultiSelectWithField: ({ displayField, options, selectedItems, hasError, onSelect, }: MultiSelectWithFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
