import React from 'react';
/** Item data structure */
export interface AutoCompleteItem {
    [key: string]: any;
    selected?: boolean;
}
/** Grouped data structure */
export interface GroupedData {
    [groupKey: string]: AutoCompleteItem[];
}
/** Component data prop structure */
export interface AutoCompleteData {
    /** List of items (array) or grouped items (object) */
    list: AutoCompleteItem[] | GroupedData;
    /** Selected items */
    selected?: AutoCompleteItem[] | string[];
    /** Display keys for rendering item text */
    displayKey?: string[];
}
/** Group by configuration */
export interface GroupByDetails {
    /** Field name to group by */
    groupByName: string;
    /** Field name for total items label */
    totalItemName: string;
    /** Default group name if item doesn't have group field */
    defaultGroupName?: string;
}
/** Display configuration */
export interface DisplayConfig {
    /** Keys to use for displaying item text (joined with separator) */
    displayKeys?: string[];
    /** Separator for joining display keys */
    displaySeparator?: string;
    /** Fallback keys if displayKeys not provided */
    fallbackKeys?: string[];
    /** Custom render function for item display */
    renderItem?: (item: AutoCompleteItem) => React.ReactNode;
    /** Custom render function for group name */
    renderGroupName?: (groupName: string, count: number) => React.ReactNode;
}
/** Selection configuration */
export interface SelectionConfig {
    /** Whether selected items are string arrays (IDs only) */
    isSelectedStringArray?: boolean;
    /** Callback when selection changes */
    onSelectionChange?: (selectedItems: GroupedData) => void;
    /** Maximum number of items that can be selected */
    maxSelection?: number;
}
/** UI Configuration */
export interface UIConfig {
    /** Show group headers */
    showGroupHeaders?: boolean;
    /** Enable collapsible groups */
    collapsibleGroups?: boolean;
    /** Show "Select All" buttons in group headers */
    showSelectAllButtons?: boolean;
    /** Show selected items section */
    showSelectedSection?: boolean;
    /** Custom placeholder text when items are selected */
    selectedPlaceholder?: string | ((count: number) => string);
    /** Empty state message */
    emptyStateMessage?: string;
    /** Empty state description */
    emptyStateDescription?: string;
    /** Enable internal filtering (filters data locally without external callback) */
    enableInternalFilter?: boolean;
    /** Show search input for each group separately */
    showGroupSearch?: boolean;
    /** Minimum items in group to show group search input */
    groupSearchMinItems?: number;
}
export interface AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplayProps {
    /** Unique identifier field name for items */
    uniqueField?: string;
    /** Field name to group items by */
    groupByField?: string;
    /** Selection configuration */
    selectionConfig?: SelectionConfig;
    /** Display configuration */
    displayConfig?: DisplayConfig;
    /** UI configuration */
    uiConfig?: UIConfig;
    /** Loading state */
    loader?: boolean;
    /** Input placeholder */
    placeholder?: string;
    /** Component data */
    data: AutoCompleteData;
    /** Error state */
    hasError?: boolean;
    /** Disabled state */
    disable?: boolean;
    /** Convert input to uppercase */
    isUpperCase?: boolean;
    /** Input name attribute */
    name?: string;
    /** Group by details (legacy, use groupByField instead) */
    groupByDetails?: GroupByDetails;
    /** Filter callback */
    onFilter?: (value: string) => void;
    /** Update callback (fires on every selection change) */
    onUpdate?: (items: AutoCompleteItem[]) => void;
    /** Select callback (fires when OK is clicked or dropdown closes) */
    onSelect: (selectedGroups: GroupedData) => void;
    /** Clear all callback (fires when Clear All is clicked) */
    onClearAll?: () => void;
    /** Blur callback */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** Additional className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Debounce delay for filter (ms) */
    filterDebounceDelay?: number;
    /** Key to re-render options list without remounting whole component */
    optionsRenderKey?: string | number;
}
export declare const AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplay: ({ uniqueField, groupByField, selectionConfig, displayConfig, uiConfig, loader, placeholder, data, hasError, disable, isUpperCase, name, groupByDetails, onFilter, onUpdate, onSelect, onClearAll, onBlur, className, style, filterDebounceDelay, optionsRenderKey, }: AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplayProps) => import("react/jsx-runtime").JSX.Element;
