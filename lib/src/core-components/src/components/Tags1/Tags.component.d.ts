import { CSSProperties } from 'react';
export interface TagsClassNames {
    /** Custom className for the root container */
    container?: string;
    /** Custom className for the label */
    label?: string;
    /** Custom className for the tags container (input wrapper) */
    tagsContainer?: string;
    /** Custom className for individual tag */
    tag?: string;
    /** Custom className for the tag text */
    tagText?: string;
    /** Custom className for the remove button */
    removeButton?: string;
    /** Custom className for the input field */
    input?: string;
    /** Custom className for the helper/error text container */
    helperText?: string;
    /** Custom className for error message */
    errorMessage?: string;
}
export interface TagsStyles {
    /** Custom style for the root container */
    container?: CSSProperties;
    /** Custom style for the label */
    label?: CSSProperties;
    /** Custom style for the tags container (input wrapper) */
    tagsContainer?: CSSProperties;
    /** Custom style for individual tag */
    tag?: CSSProperties;
    /** Custom style for the tag text */
    tagText?: CSSProperties;
    /** Custom style for the remove button */
    removeButton?: CSSProperties;
    /** Custom style for the input field */
    input?: CSSProperties;
    /** Custom style for the helper/error text container */
    helperText?: CSSProperties;
    /** Custom style for error message */
    errorMessage?: CSSProperties;
}
export interface TagsProps {
    /** Array of initial tags */
    defaultTags?: string[];
    /** Placeholder text for input */
    placeholder?: string;
    /** Maximum number of tags allowed */
    maxTags?: number;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Custom className for styling */
    className?: string;
    /** Label for the tags input */
    label?: string;
    /** Whether to show error state */
    hasError?: boolean;
    /** Error message to display */
    errorMessage?: string;
    /** Whether tags are removable */
    removable?: boolean;
    /** Custom tag colors */
    tagVariant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    /** Size of tags */
    size?: 'sm' | 'md' | 'lg';
    /** Custom classNames for component parts */
    classNames?: TagsClassNames;
    /** Custom inline styles for component parts */
    styles?: TagsStyles;
    /** Callback when tags change */
    onChange?: (tags: string[]) => void;
    /** Callback when input loses focus */
    onBlur?: (tags: string[]) => void;
    /** Callback when a tag is added */
    onTagAdd?: (tag: string) => void;
    /** Callback when a tag is removed */
    onTagRemove?: (tag: string, index: number) => void;
}
export declare const Tags: ({ defaultTags, placeholder, maxTags, disabled, className, label, hasError, errorMessage, removable, tagVariant, size, classNames, styles, onChange, onBlur, onTagAdd, onTagRemove, }: TagsProps) => import("react/jsx-runtime").JSX.Element;
