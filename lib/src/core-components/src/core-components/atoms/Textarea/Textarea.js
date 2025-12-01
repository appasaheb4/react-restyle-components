import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Textarea = React.forwardRef(({ className, error, label, id, onChange, onBlur, onValueChange, onBlurValue, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    // Handle onChange - always pass event to onChange, value to onValueChange
    const handleChange = (e) => {
        onChange?.(e);
        onValueChange?.(e.target.value);
    };
    // Handle onBlur - always pass event to onBlur, value to onBlurValue
    const handleBlur = (e) => {
        onBlur?.(e);
        onBlurValue?.(e.target.value);
    };
    return (_jsxs("div", { className: cn(s['w-full']), children: [label && (_jsx("label", { className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], s['mb-1']), children: label })), _jsx("textarea", { ref: ref, id: textareaId, className: cn(s['w-full'], s['px-4'], s['py-2'], s['border'], s['rounded-lg'], s['transition-colors'], s['resize-vertical'], s['bg-white'], s['dark:bg-gray-800'], s['border-gray-300'], s['dark:border-gray-600'], s['text-gray-900'], s['dark:text-gray-100'], s['placeholder-gray-500'], s['dark:placeholder-gray-400'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-primary'], s['focus:ring-offset-1'], error && s['border-red-500'], error && s['focus:ring-red-500'], className), ...props, onChange: handleChange, onBlur: handleBlur }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
Textarea.displayName = 'Textarea';
