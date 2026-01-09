import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const CheckboxInput = React.forwardRef(({ id, label, checkboxLabel, error, required, value, onChange, disabled, name, className, labelProps, ...props }, ref) => {
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), children: [_jsx("input", { ref: ref, type: "checkbox", id: id, name: name, checked: value, onChange: onChange, disabled: disabled, className: cn(s['w-4'], s['h-4'], s['text-blue-600'], s['bg-gray-100'], s['border-gray-300'], s['focus:ring-blue-500'], s['dark:focus:ring-blue-600'], s['dark:ring-offset-gray-800'], s['focus:ring-2'], s['dark:bg-gray-700'], s['dark:border-gray-600'], className), ...props }), (checkboxLabel || label) && (_jsx("label", { htmlFor: id, className: cn(s['cursor-pointer']), children: checkboxLabel || label }))] }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
CheckboxInput.displayName = 'CheckboxInput';
