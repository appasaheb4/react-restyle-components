import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { Icon } from '../../Icon/Icon';
export const PasswordInput = React.forwardRef(({ id, label, error, required, value, onChange, onValueChange, onBlur, onValueBlur, onFocus, disabled, placeholder, className, labelProps, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const handleChange = (e) => {
        const newValue = e.target.value;
        // Call onValueChange with just the value
        onValueChange?.(newValue);
        // Call onChange with the event (or value for backward compatibility)
        if (onChange) {
            // Try to call with event first, some consumers expect the value directly
            onChange(e);
        }
    };
    const handleBlur = (e) => {
        const blurValue = e.target.value;
        // Call onValueBlur with just the value
        onValueBlur?.(blurValue);
        // Call onBlur with the event
        onBlur?.(e);
    };
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [label && (_jsxs("label", { htmlFor: id, className: cn(s['block'], s['text-sm'], s['font-medium'], s['text-gray-700'], s['dark:text-gray-300'], s['mb-1']), ...labelProps, children: [label, required && (_jsx("span", { className: cn(s['text-red-500'], s['ml-1']), children: "*" }))] })), _jsxs("div", { className: cn(s['flex'], s['items-center'], s['relative']), children: [_jsx("input", { ref: ref, id: id, type: showPassword ? 'text' : 'password', required: required, disabled: disabled, value: value, onChange: handleChange, onBlur: handleBlur, onFocus: onFocus, placeholder: placeholder, className: cn(s['w-full'], s['px-4'], s['py-2'], s['pr-12'], s['border'], s['rounded-lg'], s['transition-colors'], s['bg-white'], s['dark:bg-gray-800'], s['border-gray-300'], s['dark:border-gray-600'], s['text-gray-900'], s['dark:text-gray-100'], s['placeholder-gray-500'], s['dark:placeholder-gray-400'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-primary'], s['focus:ring-offset-1'], error && s['border-red-500'], error && s['focus:ring-red-500'], className), style: {
                            ...props.style,
                            '--tw-ring-offset-color': '#ffffff',
                        }, ...props }), _jsx("button", { type: "button", onClick: togglePasswordVisibility, disabled: disabled, className: cn(s['absolute'], s['right-3'], s['flex'], s['items-center'], s['justify-center'], s['focus:outline-none'], s['transition-colors'], s['cursor-pointer'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50']), style: {
                            background: 'transparent',
                            border: 'none',
                            padding: '4px',
                        }, "aria-label": showPassword ? 'Hide password' : 'Show password', tabIndex: -1, children: _jsx(Icon, { nameIcon: showPassword ? 'FiEyeOff' : 'FiEye', propsIcon: {
                                size: 20,
                                color: disabled ? '#9ca3af' : '#6b7280',
                            } }) })] }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
PasswordInput.displayName = 'PasswordInput';
