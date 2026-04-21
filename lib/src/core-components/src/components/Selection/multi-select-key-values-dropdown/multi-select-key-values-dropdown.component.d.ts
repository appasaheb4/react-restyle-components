import React from 'react';
/**
 * Child row in the dropdown. Supports optional dynamic key/value pairs from the data source.
 */
export interface ChildItem {
    path: string;
    name: string;
    icon: string;
    title: string;
    collection?: string;
    documentType?: string;
    [key: string]: unknown;
}
/**
 * Parent group. Supports optional dynamic key/value pairs from the data source.
 */
export interface ParentItem {
    path: string;
    name: string;
    title: string;
    order: number;
    icon: string;
    children: ChildItem[];
    [key: string]: unknown;
}
export interface FieldItem {
    name: string;
    label: string;
    dataType: unknown;
}
/**
 * Parent row as emitted in `onSelect` (no `children` array), including dynamic fields from the source parent.
 */
export interface SelectedParentPayload {
    path: string;
    name: string;
    title: string;
    order: number;
    icon: string;
    [key: string]: unknown;
}
/**
 * Child row as emitted in `onSelect` — mirrors the selected `ChildItem` (no internal selection keys).
 */
export type SelectedChildPayload = ChildItem;
/**
 * Payload entry for one selection. Includes explicit `parent` / `child` (like toggling with `(parent, child)`)
 * plus pass-through of optional dynamic fields from the child at the top level for backward compatibility.
 */
export interface SelectedData {
    parent: SelectedParentPayload;
    child: SelectedChildPayload;
    collection?: string;
    documentType?: string;
    name: string;
    fields: FieldItem[];
    [key: string]: unknown;
}
export interface MultiSelectKeyValuesDropdownProps {
    options: ParentItem[];
    onSelect: (selectedData: SelectedData[]) => void;
    onClear?: () => void;
    placeholder?: string;
    disabled?: boolean;
    isDisable?: boolean;
    hasError?: boolean;
    /**
     * Maps `category-name` keys to field definitions for the payload.
     * If omitted, selected items still emit with empty `fields` arrays.
     */
    getFieldsResolver?: (compoundKey: string) => Record<string, unknown>;
    /**
     * When true, only one child may be selected; picking another replaces the selection.
     * The panel closes after a new value is chosen. List controls use radio styling.
     */
    isSingleSelect?: boolean;
    /** Merged onto the root wrapper (e.g. width, margin). */
    className?: string;
    /** Merged onto the root wrapper. */
    style?: React.CSSProperties;
    /** Merged onto the trigger button after built-in classes; `buttonStyle` is merged last. */
    buttonClassName?: string;
    buttonStyle?: React.CSSProperties;
    /** Merged onto the floating options panel. */
    dropdownClassName?: string;
    dropdownStyle?: React.CSSProperties;
}
export declare const MultiSelectKeyValuesDropdown: React.FC<MultiSelectKeyValuesDropdownProps>;
