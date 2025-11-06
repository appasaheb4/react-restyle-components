import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Label = React.forwardRef(({ className, required, children, label, ...props }, ref) => {
    // Don't render if neither label nor children are provided
    if (!label && !children) {
        return null;
    }
    // If only label is provided, show just the label
    if (label && !children) {
        return (_jsxs("label", { ref: ref, className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], className), ...props, children: [label, required && (_jsx("span", { className: cn(s['text-red-500'], s['ml-1']), children: "*" }))] }));
    }
    // If only children are provided (no label), just render children
    if (!label && children) {
        return _jsx(_Fragment, { children: children });
    }
    // If both label and children are provided, show label first, then children
    return (_jsxs("div", { className: cn(s['w-full']), children: [_jsxs("label", { ref: ref, className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], s['mb-1'], className), ...props, children: [label, required && (_jsx("span", { className: cn(s['text-red-500'], s['ml-1']), children: "*" }))] }), children] }));
});
Label.displayName = 'Label';
