import React, { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons/lib';
export interface SingleSelectClassNames {
    /** Custom className for the container */
    container?: string;
    /** Custom className for the trigger/display span */
    trigger?: string;
    /** Custom className for the icon wrapper */
    icon?: string;
    /** Custom className for the dropdown container */
    dropdown?: string;
    /** Custom className for the list */
    list?: string;
    /** Custom className for list items */
    listItem?: string;
    /** Custom className for the item text */
    itemText?: string;
}
export interface SingleSelectIconProps {
    /** Icon when the list is closed. Default `FaChevronDown`. */
    nameIcon?: string;
    /** Icon when the list is open. Default `FaChevronUp`. */
    openNameIcon?: string;
    /** Icon size. Default `16`. */
    size?: IconBaseProps['size'];
    /** Icon color. Omit to keep the Icon default. */
    color?: string;
    /** Extra props forwarded to the icon. `size` and `color` above take precedence. */
    propsIcon?: IconBaseProps;
}
export interface SingleSelectStyles {
    /** Custom style for the container */
    container?: CSSProperties;
    /** Custom style for the trigger/display span */
    trigger?: CSSProperties;
    /** Custom style for the icon wrapper */
    icon?: CSSProperties;
    /** Custom style for the dropdown container */
    dropdown?: CSSProperties;
    /** Custom style for the list */
    list?: CSSProperties;
    /** Custom style for list items */
    listItem?: CSSProperties;
    /** Custom style for the item text */
    itemText?: CSSProperties;
}
interface SingleSelectProps {
    options: Array<any>;
    displayKey?: string;
    displayValue?: string;
    /** Placeholder text when no value is selected. Optional, defaults to "Select" */
    placeholder?: string;
    hasError?: boolean;
    className?: string;
    style?: React.CSSProperties;
    /** Custom classNames for component parts */
    classNames?: SingleSelectClassNames;
    /** Custom inline styles for component parts */
    styles?: SingleSelectStyles;
    /**
     * Chevron icons. Closed and open names, size, and color can change at runtime.
     * Defaults stay `FaChevronDown` / `FaChevronUp` at size 16.
     */
    iconProps?: SingleSelectIconProps;
    onSelect: (item: any) => any;
}
export declare const SingleSelect: ({ options, displayKey, displayValue, placeholder, hasError, className, style, classNames, styles, iconProps, onSelect, }: SingleSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
