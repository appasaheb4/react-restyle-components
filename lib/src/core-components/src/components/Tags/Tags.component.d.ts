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
    /** Callback when tags change */
    onChange?: (tags: string[]) => void;
    /** Callback when input loses focus */
    onBlur?: (tags: string[]) => void;
    /** Callback when a tag is added */
    onTagAdd?: (tag: string) => void;
    /** Callback when a tag is removed */
    onTagRemove?: (tag: string, index: number) => void;
}
export declare const Tags: ({ defaultTags, placeholder, maxTags, disabled, className, label, hasError, errorMessage, removable, tagVariant, size, onChange, onBlur, onTagAdd, onTagRemove, }: TagsProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Tags.component.d.ts.map