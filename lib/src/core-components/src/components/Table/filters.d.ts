import React from 'react';
import { TableFilterProps } from './types';
export declare const FilterValueProvider: React.FC<React.PropsWithChildren<{
    value: any;
}>>;
export declare const FilterClickApplyProvider: React.FC<React.PropsWithChildren<{
    value: boolean;
}>>;
/**
 * Text filter options for factory function pattern
 */
export interface TextFilterOptions {
    /** Placeholder text for the input */
    placeholder?: string;
    /** CSS class name(s) for the input */
    className?: string;
    /** Inline style for the input */
    style?: React.CSSProperties;
    /** Default value for the filter */
    defaultValue?: string;
    /** Debounce delay in milliseconds */
    delay?: number;
    /** Comparator type */
    comparator?: 'like' | 'eq' | 'ne';
    /** Case sensitive filtering */
    caseSensitive?: boolean;
    /** Callback to get filter instance for external control */
    getFilter?: (filter: TextFilterInstance) => void;
    /** Callback when filter value changes */
    onFilter?: (value: string) => void;
    /** Input ID */
    id?: string;
    /** Disabled state */
    disabled?: boolean;
    /**
     * When true, Enter-to-apply mode is on. Table/column `isClickFilter` overrides `false` here.
     */
    isClickFilter?: boolean;
}
/**
 * Filter instance returned by getFilter callback
 */
export interface TextFilterInstance {
    /** Current filter value */
    value: string;
    /** Set filter value programmatically */
    setValue: (value: string) => void;
    /** Clear the filter */
    clear: () => void;
}
/**
 * Number filter options for factory function pattern
 */
export interface NumberFilterOptions {
    /** Placeholder text for the input */
    placeholder?: string;
    /** CSS class name(s) for the input */
    className?: string;
    /** Inline style for the input */
    style?: React.CSSProperties;
    /** Default value for the filter */
    defaultValue?: {
        number: string;
        comparator: string;
    };
    /** Debounce delay in milliseconds */
    delay?: number;
    /** Default comparator */
    defaultComparator?: '=' | '!=' | '>' | '>=' | '<' | '<=';
    /** Allow decimal numbers */
    allowDecimal?: boolean;
    /** Callback to get filter instance for external control */
    getFilter?: (filter: NumberFilterInstance) => void;
    /** Callback when filter value changes - passes string value */
    onFilter?: (value: string | null) => void;
    /** Input ID */
    id?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Hide comparator select */
    hideComparator?: boolean;
    /** Available comparators */
    comparators?: Array<'=' | '!=' | '>' | '>=' | '<' | '<='>;
    /**
     * When true, Enter-to-apply mode is on. Table/column `isClickFilter` overrides `false` here.
     */
    isClickFilter?: boolean;
}
/**
 * Number filter instance returned by getFilter callback
 */
export interface NumberFilterInstance {
    /** Current filter value */
    value: {
        number: string;
        comparator: string;
    } | null;
    /** Set filter value programmatically */
    setValue: (value: {
        number: string;
        comparator: string;
    } | string | null) => void;
    /** Clear the filter */
    clear: () => void;
}
/**
 * Select filter options for factory function pattern
 */
export interface SelectFilterOptions {
    /** Placeholder text (shown as first option) */
    placeholder?: string;
    /** CSS class name(s) for the select */
    className?: string;
    /** Inline style for the select */
    style?: React.CSSProperties;
    /** Default selected value */
    defaultValue?: string;
    /** Debounce delay in milliseconds */
    delay?: number;
    /** Options for the select */
    options?: Array<{
        value: string;
        label: string;
    }>;
    /** Callback to get filter instance for external control */
    getFilter?: (filter: SelectFilterInstance) => void;
    /** Callback when filter value changes */
    onFilter?: (value: string | null) => void;
    /** Select ID */
    id?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Allow multiple selection */
    multiple?: boolean;
}
/**
 * Select filter instance returned by getFilter callback
 */
export interface SelectFilterInstance {
    /** Current filter value */
    value: string | null;
    /** Set filter value programmatically */
    setValue: (value: string | null) => void;
    /** Clear the filter */
    clear: () => void;
}
/**
 * Date filter options for factory function pattern
 */
export interface DateFilterOptions {
    /** CSS class name(s) for the input */
    className?: string;
    /** Inline style for the input */
    style?: React.CSSProperties;
    /** Default value for the filter */
    defaultValue?: {
        startDate?: string;
        endDate?: string;
        comparator?: string;
        diffFlag?: boolean;
    };
    /** Default comparator */
    defaultComparator?: '=' | '>=' | '<';
    /** Enable range mode by default */
    defaultRangeMode?: boolean;
    /** Callback to get filter instance for external control */
    getFilter?: (filter: DateFilterInstance) => void;
    /** Callback when filter value changes */
    onFilter?: (value: any) => void;
    /** Input ID */
    id?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Date format (for display) */
    dateFormat?: string;
    /** Min date */
    minDate?: string;
    /** Max date */
    maxDate?: string;
    /**
     * When true, Enter-to-apply mode is on. Table/column `isClickFilter` overrides `false` here.
     */
    isClickFilter?: boolean;
}
/**
 * Date filter instance returned by getFilter callback
 */
export interface DateFilterInstance {
    /** Current filter value */
    value: any;
    /** Set filter value programmatically */
    setValue: (value: any) => void;
    /** Clear the filter */
    clear: () => void;
}
/**
 * Wraps `getFilter` instances so they are callable: `fn()`, `fn('')`, `fn(null)` clear;
 * `fn(value)` sets. Still exposes `.value`, `.setValue`, and `.clear` like TextFilterInstance.
 */
export declare function createCallableFilterHandle({ getValue, setValue, clear, }: {
    getValue: () => any;
    setValue: (value: any) => void;
    clear: () => void;
}): ((v?: any) => void) & {
    setValue: (value: any) => void;
    clear: () => void;
};
/**
 * Text filter - can be used as a component or factory function
 *
 * @example
 * // As a factory function with options
 * filter: TextFilter({
 *   placeholder: 'Search...',
 *   className: 'my-custom-class',
 *   getFilter: (filter) => { myFilterRef = filter; },
 * })
 *
 * @example
 * // As a component (for direct usage)
 * <TextFilter column={column} value={value} onChange={onChange} />
 */
export declare function TextFilter(options: TextFilterOptions): React.FC<TableFilterProps> & {
    props: TextFilterOptions;
};
export declare function TextFilter(props: TableFilterProps): React.ReactElement;
/**
 * Number filter - can be used as a component or factory function
 *
 * @example
 * // As a factory function with options
 * filter: NumberFilter({
 *   placeholder: 'Enter amount...',
 *   className: 'my-custom-class',
 *   defaultComparator: '>=',
 *   getFilter: (filter) => { myFilterRef = filter; },
 * })
 */
export declare function NumberFilter(options: NumberFilterOptions): React.FC<TableFilterProps> & {
    props: NumberFilterOptions;
};
export declare function NumberFilter(props: TableFilterProps): React.ReactElement;
/**
 * Date filter - can be used as a component or factory function
 *
 * @example
 * // As a factory function with options
 * filter: DateFilter({
 *   defaultRangeMode: true,
 *   minDate: '2020-01-01',
 *   getFilter: (filter) => { myFilterRef = filter; },
 * })
 */
export declare function DateFilter(options: DateFilterOptions): React.FC<TableFilterProps> & {
    props: DateFilterOptions;
};
export declare function DateFilter(props: TableFilterProps): React.ReactElement;
/**
 * Select filter - can be used as a component or factory function
 *
 * @example
 * // As a factory function with options
 * filter: SelectFilter({
 *   placeholder: 'Select status...',
 *   options: [{value: 'active', label: 'Active'}, {value: 'inactive', label: 'Inactive'}],
 *   getFilter: (filter) => { myFilterRef = filter; },
 * })
 */
export declare function SelectFilter(options: SelectFilterOptions): React.FC<TableFilterProps> & {
    props: SelectFilterOptions;
};
export declare function SelectFilter(props: TableFilterProps): React.ReactElement;
/**
 * Custom filter options for factory function pattern
 * Allows rendering any custom filter component while integrating with Table's filter system
 */
export interface CustomFilterOptions<T = any> {
    /** Custom render function for the filter UI (optional if using column.filterRenderer) */
    render?: (props: CustomFilterRenderProps<T>) => React.ReactNode;
    /** Placeholder text (passed to render props) */
    placeholder?: string;
    /** CSS class name(s) for the filter */
    className?: string;
    /** Inline style for the filter */
    style?: React.CSSProperties;
    /** Default value for the filter */
    defaultValue?: T;
    /** Debounce delay in milliseconds */
    delay?: number;
    /** Callback to get filter instance for external control */
    getFilter?: (filter: CustomFilterInstance<T>) => void;
    /** Callback when filter value changes */
    onFilter?: (value: T | null) => void;
    /** Custom filter function for data filtering */
    filterFunction?: (cellValue: any, filterValue: T, row: any) => boolean;
    /** Input ID */
    id?: string;
    /** Disabled state */
    disabled?: boolean;
}
/**
 * Props passed to custom filter render function
 */
export interface CustomFilterRenderProps<T = any> {
    /** Current filter value */
    value: T | null;
    /** Callback to update filter value */
    onChange: (value: T | null) => void;
    /** Column configuration */
    column: any;
    /** Clear the filter */
    clear: () => void;
    /** Placeholder text from options */
    placeholder?: string;
    /** CSS class name from options */
    className?: string;
    /** Style from options */
    style?: React.CSSProperties;
    /** Input ID from options */
    id?: string;
    /** Disabled state from options */
    disabled?: boolean;
}
/**
 * Custom filter instance returned by getFilter callback
 */
export interface CustomFilterInstance<T = any> {
    /** Current filter value */
    value: T | null;
    /** Set filter value programmatically */
    setValue: (value: T | null) => void;
    /** Clear the filter */
    clear: () => void;
}
/**
 * Custom filter - allows rendering any custom filter component
 *
 * @example
 * // Basic custom filter with input
 * filter: CustomFilter({
 *   render: ({ value, onChange }) => (
 *     <input
 *       type="text"
 *       value={value || ''}
 *       onChange={(e) => onChange(e.target.value || null)}
 *       placeholder="Custom filter..."
 *     />
 *   ),
 * })
 *
 * @example
 * // Using render props (placeholder, className, etc.)
 * filter: CustomFilter({
 *   placeholder: 'Search...',
 *   className: 'my-custom-input',
 *   render: ({ value, onChange, placeholder, className }) => (
 *     <input
 *       type="text"
 *       value={value || ''}
 *       onChange={(e) => onChange(e.target.value || null)}
 *       placeholder={placeholder}
 *       className={className}
 *     />
 *   ),
 * })
 *
 * @example
 * // With filterRenderer, mount the same factory component as `filter` so getFilter runs.
 * // CustomFilter’s getFilter is not called if you only render a different component in filterRenderer.
 * const PictureFilter = NumberFilter({
 *   placeholder: 'Picture',
 *   getFilter: (f) => {
 *     pictureFilterRef.current = f;
 *   },
 * });
 * {
 *   filter: PictureFilter,
 *   filterRenderer: (onFilter, column, {value, onClear}) => (
 *     <PictureFilter column={column} value={value} onChange={onFilter} />
 *   ),
 * }
 * // clearAllFilter: () => pictureFilterRef.current?.clear()
 *
 * @example
 * // Custom range filter
 * filter: CustomFilter({
 *   render: ({ value, onChange }) => (
 *     <div style={{ display: 'flex', gap: 4 }}>
 *       <input
 *         type="number"
 *         placeholder="Min"
 *         value={value?.min || ''}
 *         onChange={(e) => onChange({ ...value, min: e.target.value })}
 *       />
 *       <input
 *         type="number"
 *         placeholder="Max"
 *         value={value?.max || ''}
 *         onChange={(e) => onChange({ ...value, max: e.target.value })}
 *       />
 *     </div>
 *   ),
 *   filterFunction: (cellValue, filterValue) => {
 *     if (!filterValue) return true;
 *     const { min, max } = filterValue;
 *     const num = Number(cellValue);
 *     if (min && num < Number(min)) return false;
 *     if (max && num > Number(max)) return false;
 *     return true;
 *   },
 * })
 *
 * @example
 * // Custom multi-select filter with checkboxes
 * filter: CustomFilter({
 *   render: ({ value, onChange }) => {
 *     const selected = value || [];
 *     const options = ['Active', 'Inactive', 'Pending'];
 *     return (
 *       <div>
 *         {options.map(opt => (
 *           <label key={opt}>
 *             <input
 *               type="checkbox"
 *               checked={selected.includes(opt)}
 *               onChange={(e) => {
 *                 if (e.target.checked) {
 *                   onChange([...selected, opt]);
 *                 } else {
 *                   onChange(selected.filter(s => s !== opt));
 *                 }
 *               }}
 *             />
 *             {opt}
 *           </label>
 *         ))}
 *       </div>
 *     );
 *   },
 *   filterFunction: (cellValue, filterValue) => {
 *     if (!filterValue?.length) return true;
 *     return filterValue.includes(cellValue);
 *   },
 * })
 *
 * @example
 * // External control with getFilter
 * filter: CustomFilter({
 *   placeholder: 'Custom...',
 *   getFilter: (filter) => {
 *     customFilterRef.current = filter;
 *     // filter.value - get current value
 *     // filter.setValue(newValue) - set value programmatically
 *     // filter.clear() - clear the filter
 *   },
 * })
 */
export declare function CustomFilter<T = any>(options: CustomFilterOptions<T>): React.FC<TableFilterProps> & {
    props: CustomFilterOptions<T>;
};
/**
 * Get filter component based on type
 */
export declare const getFilterComponent: (type: string) => React.FC<TableFilterProps>;
