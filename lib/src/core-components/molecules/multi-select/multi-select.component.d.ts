import '../../../tc.module.css';
interface MultiSelectProps {
    options: Array<string>;
    selectedItems?: Array<string>;
    hasError?: boolean;
    onSelect: (item: any) => any;
}
export declare const MultiSelect: ({ options, selectedItems, hasError, onSelect, }: MultiSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=multi-select.component.d.ts.map