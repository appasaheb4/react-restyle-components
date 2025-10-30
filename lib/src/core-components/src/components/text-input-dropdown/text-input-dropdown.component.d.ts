import React from 'react';
interface TextInputDropdownProps {
    placeholder?: string;
    items: Array<string>;
    hasError?: boolean;
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (item: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement> | null, value?: string) => void;
    disabled?: boolean;
    allowCustomInput?: boolean;
}
export declare const TextInputDropdown: ({ items, className, hasError, placeholder, value: controlledValue, defaultValue, onChange, onBlur, disabled, allowCustomInput, }: TextInputDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=text-input-dropdown.component.d.ts.map