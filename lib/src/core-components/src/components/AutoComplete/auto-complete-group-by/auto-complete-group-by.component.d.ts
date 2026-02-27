interface AutocompleteGroupByProps {
    data: any[];
    /** How long (ms) to show "Loading..." before "No Results Found". Default 1000. */
    filterDebounceDelay?: number;
    hasError?: boolean;
    displayValue?: string;
    onChange?: (item: any, children: any) => void;
    onClose?: () => void;
}
export declare const AutocompleteGroupBy: ({ data, filterDebounceDelay, hasError, displayValue, onChange, onClose, }: AutocompleteGroupByProps) => import("react/jsx-runtime").JSX.Element;
export {};
