import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const Tags = ({ defaultTags = [], placeholder = 'Type and press Enter to add tags...', maxTags, disabled = false, className = '', label, hasError = false, errorMessage, removable = true, tagVariant = 'default', size = 'md', onChange, onBlur, onTagAdd, onTagRemove, }) => {
    const [tags, setTags] = useState(defaultTags);
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    // Tag variant styles
    const tagVariants = {
        default: s['bg-gray-100'] + ' ' + s['text-gray-800'] + ' ' + s['border-gray-200'],
        primary: s['bg-blue-100'] + ' ' + s['text-blue-800'] + ' ' + s['border-blue-200'],
        secondary: s['bg-gray-100'] + ' ' + s['text-gray-700'] + ' ' + s['border-gray-300'],
        success: s['bg-green-100'] +
            ' ' +
            s['text-green-800'] +
            ' ' +
            s['border-green-200'],
        warning: s['bg-yellow-100'] +
            ' ' +
            s['text-yellow-800'] +
            ' ' +
            s['border-yellow-200'],
        danger: s['bg-red-100'] + ' ' + s['text-red-800'] + ' ' + s['border-red-200'],
    };
    // Size styles
    const sizeStyles = {
        sm: {
            tag: s['text-xs'] + ' ' + s['px-2'] + ' ' + s['py-1'],
            input: s['text-sm'] + ' ' + s['p-2'],
            removeBtn: s['w-3'] + ' ' + s['h-3'],
        },
        md: {
            tag: s['text-sm'] + ' ' + s['px-3'] + ' ' + s['py-1'],
            input: s['text-base'] + ' ' + s['p-3'],
            removeBtn: s['w-4'] + ' ' + s['h-4'],
        },
        lg: {
            tag: s['text-base'] + ' ' + s['px-4'] + ' ' + s['py-2'],
            input: s['text-lg'] + ' ' + s['p-4'],
            removeBtn: s['w-5'] + ' ' + s['h-5'],
        },
    };
    const addTag = (tag) => {
        const trimmedTag = tag.trim();
        if (!trimmedTag)
            return;
        // Check if tag already exists
        if (tags.includes(trimmedTag)) {
            setInputValue('');
            return;
        }
        // Check max tags limit
        if (maxTags && tags.length >= maxTags) {
            setInputValue('');
            return;
        }
        const newTags = [...tags, trimmedTag];
        setTags(newTags);
        setInputValue('');
        // Callbacks
        onChange?.(newTags);
        onTagAdd?.(trimmedTag);
    };
    const removeTag = (indexToRemove) => {
        if (!removable)
            return;
        const tagToRemove = tags[indexToRemove];
        const newTags = tags.filter((_, index) => index !== indexToRemove);
        setTags(newTags);
        // Callbacks
        onChange?.(newTags);
        onTagRemove?.(tagToRemove, indexToRemove);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(inputValue);
        }
        else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
            // Remove last tag when backspace is pressed on empty input
            removeTag(tags.length - 1);
        }
        else if (e.key === 'Escape') {
            setInputValue('');
            inputRef.current?.blur();
        }
    };
    const handleInputBlur = () => {
        setIsFocused(false);
        // Add current input as tag if not empty
        if (inputValue.trim()) {
            addTag(inputValue);
        }
        onBlur?.(tags);
    };
    const handleContainerClick = () => {
        if (!disabled) {
            inputRef.current?.focus();
        }
    };
    return (_jsxs("div", { className: cn(s.flex, s['flex-col'], s['w-full'], className), children: [label && (_jsxs("label", { className: cn(s['text-sm'], s['font-medium'], s['mb-2'], hasError ? s['text-red-600'] : s['text-gray-700']), children: [label, maxTags && (_jsxs("span", { className: cn(s['text-xs'], s['text-gray-500'], s['ml-2']), children: ["(", tags.length, "/", maxTags, ")"] }))] })), _jsxs("div", { onClick: handleContainerClick, className: cn(s['min-h-10'], s['w-full'], s['border'], s['rounded-md'], s['bg-white'], s['flex'], s['flex-wrap'], s['gap-2'], s['p-2'], s['cursor-text'], s['transition-colors'], 
                // Focus styles
                isFocused &&
                    !hasError &&
                    s['border-blue-500'] + ' ' + s['ring-1'] + ' ' + s['ring-blue-500'], 
                // Error styles
                hasError ? s['border-red-500'] : s['border-gray-300'], 
                // Disabled styles
                disabled && s['bg-gray-50'] + ' ' + s['cursor-not-allowed'], 
                // Hover styles
                !disabled && s['hover:border-gray-400']), children: [tags.map((tag, index) => (_jsxs("span", { className: cn(s['flex'], s['inline-flex'], s['items-center'], s['border'], s['rounded-full'], s['font-medium'], s['transition-colors'], s['items-center'], sizeStyles[size].tag, tagVariants[tagVariant], disabled && s['opacity-60']), children: [_jsx("span", { className: cn(s['truncate'], s['max-w-32']), children: tag }), removable && !disabled && (_jsx("button", { type: "button", onClick: (e) => {
                                    e.stopPropagation();
                                    removeTag(index);
                                }, className: cn(s['ml-2'], s['flex-shrink-0'], s['rounded-full'], s['hover:bg-black'], s['hover:bg-opacity-10'], s['transition-colors'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-offset-1'], s['focus:ring-gray-500']), "aria-label": `Remove ${tag} tag`, children: _jsx("svg", { className: cn(sizeStyles[size].removeBtn), fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) }) }))] }, `${tag}-${index}`))), (!maxTags || tags.length < maxTags) && (_jsx("input", { ref: inputRef, type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown, onFocus: () => setIsFocused(true), onBlur: handleInputBlur, placeholder: tags.length === 0 ? placeholder : '', disabled: disabled, className: cn(s['flex-1'], s['min-w-32'], s['border-0'], s['outline-none'], s['bg-transparent'], sizeStyles[size].input.replace(s['p-3'], s['p-1']), // Adjust padding for input inside container
                        disabled && s['cursor-not-allowed']), "aria-label": "Add new tag" }))] }), (errorMessage || maxTags) && (_jsxs("div", { className: cn(s['mt-1'], s['flex'], s['justify-between'], s['text-xs']), children: [errorMessage && hasError && (_jsx("span", { className: cn(s['text-red-600']), children: errorMessage })), maxTags && !hasError && (_jsxs("span", { className: cn(s['text-gray-500'], s['ml-auto']), children: [tags.length, "/", maxTags, " tags"] }))] })), !hasError && !errorMessage && (_jsx("p", { className: cn(s['mt-1'], s['text-xs'], s['text-gray-500']), children: "Press Enter to add tags, Backspace to remove last tag" }))] }));
};
