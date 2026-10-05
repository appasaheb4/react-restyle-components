import React, { CSSProperties } from 'react';
export type AutoCompleteGroupByCheckSize = 'sm' | 'md' | 'lg';
export interface AutoCompleteGroupByCheckClassNames {
    container?: string;
    inputWrapper?: string;
    input?: string;
    icon?: string;
    clear?: string;
    dropdown?: string;
    list?: string;
    group?: string;
    groupLabel?: string;
    groupCount?: string;
    item?: string;
    itemActive?: string;
    checkbox?: string;
    emptyState?: string;
}
export interface AutoCompleteGroupByCheckStyles {
    container?: CSSProperties;
    inputWrapper?: CSSProperties;
    input?: CSSProperties;
    icon?: CSSProperties;
    clear?: CSSProperties;
    dropdown?: CSSProperties;
    list?: CSSProperties;
    group?: CSSProperties;
    groupLabel?: CSSProperties;
    groupCount?: CSSProperties;
    item?: CSSProperties;
    itemActive?: CSSProperties;
    checkbox?: CSSProperties;
    emptyState?: CSSProperties;
}
export interface AutoCompleteGroupByCheckProps {
    data?: any[];
    /** Groups (with nested items) or flat items that should start selected. */
    defaultItem?: any[];
    /** How long (ms) to show "Loading..." before "No Results Found". Default 1000. */
    filterDebounceDelay?: number;
    hasError?: boolean;
    placeholder?: string;
    disabled?: boolean;
    /** Shows a spinner in the field while a parent fetch is in progress. */
    loader?: boolean;
    /** Field shown as the group heading. Default `title`. */
    groupKey?: string;
    /** Field shown for each nested option. Default `title`. */
    itemKey?: string;
    /** Nested array field on each group. Default `children`. */
    childrenKey?: string;
    /**
     * Field used to match `defaultItem` and to tell options apart.
     * Falls back to `itemKey` when empty. Default `name`.
     */
    valueKey?: string;
    /** Extra item fields included in search, in addition to `groupKey` and `itemKey`. */
    searchKeys?: string[];
    /** Joins selected labels in the field. Default `, `. */
    separator?: string;
    /** Dropdown max height. Number is pixels. Default 350. */
    maxDropdownHeight?: number | string;
    /** Show how many options are in each group. Default true. */
    showGroupCount?: boolean;
    /** Checkbox on the group heading selects every visible item in that group. Default true. */
    showGroupCheckbox?: boolean;
    /** Show a clear control when something is selected or the search has text. Default true. */
    clearable?: boolean;
    /** Highlight the matched substring in labels. Default true. */
    highlightMatch?: boolean;
    size?: AutoCompleteGroupByCheckSize;
    emptyStateMessage?: string;
    emptyStateDescription?: string;
    className?: string;
    classNames?: AutoCompleteGroupByCheckClassNames;
    styles?: AutoCompleteGroupByCheckStyles;
    /**
     * Selected groups, each containing only the checked children.
     * Fires when a checkbox changes and again when the menu closes.
     */
    onChange?: (selected: any[]) => void;
    /** Called when the dropdown is dismissed. */
    onClose?: () => void;
    /** Called as the user types in the search field. */
    onFilter?: (value: string) => void;
    /** Called when the clear control removes every selection. */
    onClear?: () => void;
    renderGroupLabel?: (group: any) => React.ReactNode;
    renderItem?: (item: any, group: any, query: string) => React.ReactNode;
}
export declare const AutoCompleteGroupByCheck: ({ data, defaultItem, filterDebounceDelay, hasError, placeholder, disabled, loader, groupKey, itemKey, childrenKey, valueKey, searchKeys, separator, maxDropdownHeight, showGroupCount, showGroupCheckbox, clearable, highlightMatch, size, emptyStateMessage, emptyStateDescription, className, classNames, styles, onChange, onClose, onFilter, onClear, renderGroupLabel, renderItem, }: AutoCompleteGroupByCheckProps) => import("react/jsx-runtime").JSX.Element;
