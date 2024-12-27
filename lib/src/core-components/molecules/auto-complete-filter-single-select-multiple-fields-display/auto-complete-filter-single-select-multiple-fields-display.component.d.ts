import '../../../tc.module.css';
interface AutoCompleteFilterSingleSelectMultiFieldsDisplayProps {
    loader?: boolean;
    disable?: boolean;
    displayValue?: string;
    placeholder?: string;
    data: any;
    hasError?: boolean;
    className?: string;
    posstion?: string;
    onFilter?: (item: any) => void;
    onSelect?: (item: any) => any;
    onBlur?: (item: any) => any;
}
export declare const AutoCompleteFilterSingleSelectMultiFieldsDisplay: ({ disable, loader, displayValue, placeholder, data, hasError, className, posstion, onFilter, onSelect, onBlur, }: AutoCompleteFilterSingleSelectMultiFieldsDisplayProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=auto-complete-filter-single-select-multiple-fields-display.component.d.ts.map