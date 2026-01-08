import React from 'react';
/** Option data structure */
export interface AutocompleteOption {
    /** Display value */
    label: string;
    /** Unique identifier */
    value: string | number;
    /** Additional data */
    [key: string]: any;
}
/** Filter configuration */
export interface AutocompleteFilterConfig {
    /** Enable filtering */
    enabled?: boolean;
    /** Case sensitive filtering */
    caseSensitive?: boolean;
    /** Custom filter function */
    filterFn?: (option: string | AutocompleteOption, searchValue: string) => boolean;
    /** Minimum characters to trigger filter */
    minCharacters?: number;
}
/** Display configuration */
export interface AutocompleteDisplayConfig {
    /** Custom render function for option */
    renderOption?: (option: string | AutocompleteOption, index: number, isActive: boolean) => React.ReactNode;
    /** Custom render function for empty state */
    renderEmptyState?: () => React.ReactNode;
    /** Highlight active option */
    highlightActive?: boolean;
    /** Active option class names */
    activeOptionClassName?: string;
    /** Option class names */
    optionClassName?: string;
}
/** Keyboard navigation configuration */
export interface AutocompleteKeyboardConfig {
    /** Enable keyboard navigation */
    enabled?: boolean;
    /** Keys that trigger selection */
    selectKeys?: string[];
    /** Keys that close the dropdown */
    closeKeys?: string[];
    /** Enable Enter key to select */
    enterToSelect?: boolean;
    /** Enable Escape key to close */
    escapeToClose?: boolean;
}
/** UI Configuration */
export interface AutocompleteUIConfig {
    /** Input placeholder */
    placeholder?: string;
    /** Empty state message */
    emptyStateMessage?: string;
    /** List item height in pixels */
    itemHeight?: number;
    /** Maximum height for dropdown */
    maxHeight?: string;
    /** Z-index for dropdown */
    zIndex?: number;
    /** Show dropdown on focus */
    showOnFocus?: boolean;
    /** Show dropdown on click */
    showOnClick?: boolean;
    /** Auto-select first option */
    autoSelectFirst?: boolean;
}
export interface AutocompleteProps {
    /** Current value */
    value?: string;
    /** Callback when value changes */
    onValueChange: (value: string | AutocompleteOption) => void;
    /** Options - can be strings or AutocompleteOption objects */
    options?: (string | AutocompleteOption)[];
    /** Filter configuration */
    filterConfig?: AutocompleteFilterConfig;
    /** Display configuration */
    displayConfig?: AutocompleteDisplayConfig;
    /** Keyboard configuration */
    keyboardConfig?: AutocompleteKeyboardConfig;
    /** UI configuration */
    uiConfig?: AutocompleteUIConfig;
    /** Error state */
    hasError?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Input name attribute */
    name?: string;
    /** Additional className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Input className */
    inputClassName?: string;
    /** Callback when input value changes (receives the string value) */
    onInputValueChange?: (value: string) => void;
    /** Callback when dropdown opens */
    onOpen?: () => void;
    /** Callback when dropdown closes */
    onClose?: () => void;
    /** Callback when option is selected */
    onSelect?: (option: string | AutocompleteOption) => void;
    /** Auto-focus input on mount */
    autoFocus?: boolean;
}
export declare const Autocomplete: ({ value, onValueChange, options, filterConfig, displayConfig, keyboardConfig, uiConfig, hasError, disabled, name, className, style, inputClassName, onInputValueChange, onOpen, onClose, onSelect, autoFocus, }: AutocompleteProps) => import("react/jsx-runtime").JSX.Element;
