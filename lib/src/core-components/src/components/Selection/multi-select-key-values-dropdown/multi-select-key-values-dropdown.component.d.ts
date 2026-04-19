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
 * Payload entry for one selection. Includes pass-through of optional dynamic fields from `ChildItem`.
 */
export interface SelectedData {
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
}
export declare const MultiSelectKeyValuesDropdown: React.FC<MultiSelectKeyValuesDropdownProps>;
