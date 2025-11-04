import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Input = React.forwardRef(({ className, error, label, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs("div", { className: cn(s['w-full']), children: [label && (_jsx("label", { className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], s['mb-1']), children: label })), _jsx("input", { ref: ref, id: inputId, className: cn(s['w-full'], s['px-4'], s['py-2'], s['border'], s['rounded-lg'], s['transition-colors'], s['bg-white'], s['dark:bg-gray-800'], s['border-gray-300'], s['dark:border-gray-600'], s['text-gray-900'], s['dark:text-gray-100'], s['placeholder-gray-500'], s['dark:placeholder-gray-400'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-primary1'], s['focus:border-transparent'], error && s['border-red-500'], error && s['focus:ring-red-500'], className), ...props }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
Input.displayName = 'Input';
