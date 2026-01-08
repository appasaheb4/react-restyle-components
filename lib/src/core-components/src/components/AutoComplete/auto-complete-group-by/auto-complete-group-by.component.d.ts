interface AutocompleteGroupByProps {
    data: any[];
    hasError?: boolean;
    displayValue?: string;
    onChange?: (item: any, children: any) => void;
    onClose?: () => void;
}
export declare const AutocompleteGroupBy: ({ data, hasError, displayValue, onChange, onClose, }: AutocompleteGroupByProps) => import("react/jsx-runtime").JSX.Element;
export {};
