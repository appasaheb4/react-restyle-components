import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Label = React.forwardRef(({ className, required, children, ...props }, ref) => {
    return (_jsxs("label", { ref: ref, className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], className), ...props, children: [children, required && (_jsx("span", { className: cn(s['text-red-500'], s['ml-1']), children: "*" }))] }));
});
Label.displayName = 'Label';
