import React from 'react';
import { SortingStrategy } from '@dnd-kit/sortable';
/** Item data structure with optional sort field for drag-drop */
export interface DragDropItem {
    [key: string]: any;
    selected?: boolean;
    sort?: string;
}
/** Component data prop structure */
export interface DragDropAutoCompleteData {
    /** List of available items */
    list: DragDropItem[];
    /** Selected items */
    selected?: DragDropItem[];
    /** Display keys for rendering item text */
    displayKey?: string[];
}
/** Display configuration */
export interface DragDropDisplayConfig {
    /** Keys to use for displaying item text */
    displayKeys?: string[];
    /** Separator for joining display keys */
    displaySeparator?: string;
    /** Fallback keys if displayKeys not provided */
    fallbackKeys?: string[];
    /** Custom render function for item display */
    renderItem?: (item: DragDropItem) => React.ReactNode;
    /** Custom render function for selected item badge */
    renderSelectedBadge?: (item: DragDropItem, index: number, onRemove: () => void) => React.ReactNode;
}
/** Drag and Drop configuration */
export interface DragDropConfig {
    /** Enable drag and drop */
    enabled?: boolean;
    /** Sorting strategy */
    strategy?: SortingStrategy;
    /** Callback when drag ends */
    onDragEnd?: (reorderedItems: DragDropItem[]) => void;
    /** Animation duration (ms) */
    animationDuration?: number;
}
/** Selection configuration */
export interface DragDropSelectionConfig {
    /** Maximum number of items that can be selected */
    maxSelection?: number;
    /** Callback when selection changes */
    onSelectionChange?: (selectedItems: DragDropItem[]) => void;
}
/** UI Configuration */
export interface DragDropUIConfig {
    /** Show selected items section */
    showSelectedSection?: boolean;
    /** Custom placeholder text when items are selected */
    selectedPlaceholder?: string | ((count: number) => string);
    /** Empty state message */
    emptyStateMessage?: string;
    /** Maximum height for dropdown */
    maxHeight?: string;
    /** Z-index for dropdown */
    zIndex?: number;
}
/** Draggable selected item props */
export interface DraggableSelectedItemProps {
    item: DragDropItem;
    index: number;
    onRemove: (index: number) => void;
    displayKey?: string[];
    uniqueField?: string;
    displayConfig?: DragDropDisplayConfig;
    className?: string;
    style?: React.CSSProperties;
}
export declare const DraggableSelectedItem: React.FC<DraggableSelectedItemProps>;
interface AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDropProps {
    /** Component key for React */
    componentKey?: string;
    /** Unique identifier field name for items */
    uniqueField?: string;
    /** Loading state */
    loader?: boolean;
    /** Input placeholder */
    placeholder?: string;
    /** Component data */
    data: DragDropAutoCompleteData;
    /** Error state */
    hasError?: boolean;
    /** Disabled state */
    disable?: boolean;
    /** Convert input to uppercase */
    isUpperCase?: boolean;
    /** Input name attribute */
    name?: string;
    /** Default input value */
    defaultValue?: string;
    /** Display configuration */
    displayConfig?: DragDropDisplayConfig;
    /** Drag and drop configuration */
    dragDropConfig?: DragDropConfig;
    /** Selection configuration */
    selectionConfig?: DragDropSelectionConfig;
    /** UI configuration */
    uiConfig?: DragDropUIConfig;
    /** Filter callback */
    onFilter?: (value: string) => void;
    /** Update callback (fires when dropdown closes) */
    onUpdate: (items: DragDropItem[]) => void;
    /** Select callback (fires when item is selected/deselected) */
    onSelect: (item: DragDropItem) => void;
    /** Blur callback */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** Additional className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Debounce delay for filter (ms) */
    filterDebounceDelay?: number;
}
export declare const AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop: ({ componentKey, uniqueField, loader, placeholder, data, hasError, disable, isUpperCase, name, defaultValue, displayConfig, dragDropConfig, selectionConfig, uiConfig, onFilter, onUpdate, onSelect, onBlur, className, style, filterDebounceDelay, }: AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDropProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=auto-complete-filter-multi-select-multi-fields-display-drag-drop.component.d.ts.map