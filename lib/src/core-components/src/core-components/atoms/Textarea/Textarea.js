import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Textarea = React.forwardRef(({ className, error, label, id, onChange, onBlur, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    // Handle onChange - support both event and value patterns
    const handleChange = (e) => {
        if (onChange) {
            const value = e.target.value;
            // Support both patterns:
            // 1. Standard React: onChange={(e) => { const val = e.target.value; ... }}
            // 2. Custom: onChange={(value) => { ... value ... }}
            // Check if onChange expects a string (custom pattern) by examining function signature
            // If parameter name suggests it expects a value (not 'e' or 'event'), call with value
            // Otherwise, call with event (standard React pattern)
            try {
                const funcStr = onChange.toString();
                const paramMatch = funcStr.match(/\(([^)]+)\)/);
                if (paramMatch) {
                    const param = paramMatch[1].trim();
                    // If parameter is not 'e', 'event', or starts with 'e:', it might expect value
                    if (param &&
                        param !== 'e' &&
                        param !== 'event' &&
                        !param.startsWith('e:')) {
                        // Custom pattern - call with value
                        onChange(value);
                    }
                    else {
                        // Standard React pattern - call with event
                        onChange(e);
                    }
                }
                else {
                    // Default to standard React pattern
                    onChange(e);
                }
            }
            catch (error) {
                // If calling with value fails, try with event
                try {
                    onChange(e);
                }
                catch {
                    // If both fail, call with value as fallback
                    onChange(value);
                }
            }
        }
    };
    // Handle onBlur - support both event and value patterns
    const handleBlur = (e) => {
        if (onBlur) {
            const value = e.target.value;
            // Similar logic for onBlur
            try {
                const funcStr = onBlur.toString();
                const paramMatch = funcStr.match(/\(([^)]+)\)/);
                if (paramMatch) {
                    const param = paramMatch[1].trim();
                    if (param &&
                        param !== 'e' &&
                        param !== 'event' &&
                        !param.startsWith('e:')) {
                        onBlur(value);
                    }
                    else {
                        onBlur(e);
                    }
                }
                else {
                    onBlur(e);
                }
            }
            catch (error) {
                // If calling with value fails, try with event
                try {
                    onBlur(e);
                }
                catch {
                    // If both fail, call with value as fallback
                    onBlur(value);
                }
            }
        }
    };
    return (_jsxs("div", { className: cn(s['w-full']), children: [label && (_jsx("label", { className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], s['mb-1']), children: label })), _jsx("textarea", { ref: ref, id: textareaId, className: cn(s['w-full'], s['px-4'], s['py-2'], s['border'], s['rounded-lg'], s['transition-colors'], s['resize-vertical'], s['bg-white'], s['dark:bg-gray-800'], s['border-gray-300'], s['dark:border-gray-600'], s['text-gray-900'], s['dark:text-gray-100'], s['placeholder-gray-500'], s['dark:placeholder-gray-400'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-primary'], s['focus:ring-offset-1'], error && s['border-red-500'], error && s['focus:ring-red-500'], className), onChange: handleChange, onBlur: handleBlur, ...props }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
Textarea.displayName = 'Textarea';
