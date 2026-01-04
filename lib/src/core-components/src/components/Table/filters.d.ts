import React from 'react';
import { TableFilterProps } from './types';
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
    /** Callback when filter value changes */
    onFilter?: (value: {
        number: string;
        comparator: string;
    } | null) => void;
    /** Input ID */
    id?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Hide comparator select */
    hideComparator?: boolean;
    /** Available comparators */
    comparators?: Array<'=' | '!=' | '>' | '>=' | '<' | '<='>;
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
    } | null) => void;
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
export declare function TextFilter(options: TextFilterOptions): React.FC<TableFilterProps>;
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
export declare function NumberFilter(options: NumberFilterOptions): React.FC<TableFilterProps>;
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
export declare function DateFilter(options: DateFilterOptions): React.FC<TableFilterProps>;
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
export declare function SelectFilter(options: SelectFilterOptions): React.FC<TableFilterProps>;
export declare function SelectFilter(props: TableFilterProps): React.ReactElement;
/**
 * Get filter component based on type
 */
export declare const getFilterComponent: (type: string) => React.FC<TableFilterProps>;
//# sourceMappingURL=filters.d.ts.map