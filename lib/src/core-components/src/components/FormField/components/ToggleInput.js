import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Label } from '../../../core-components/atoms/Label/Label';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import '../toggle.css';
export const ToggleInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, isToggleLabel = true, className, labelProps, ...props }, ref) => {
    const [toggleValue, setToggleValue] = useState(value ?? false);
    useEffect(() => {
        if (value !== undefined) {
            setToggleValue(value);
        }
    }, [value]);
    const handleToggleClick = () => {
        if (disabled)
            return;
        const newValue = !toggleValue;
        setToggleValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggleValue,
        'wrg-toggle--disabled': disabled,
    }, className);
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps })), _jsxs("div", { onClick: handleToggleClick, className: toggleClasses, children: [_jsx("div", { className: cn('wrg-toggle-container', {
                            [s['bg-green-700']]: toggleValue,
                            [s['bg-black']]: !toggleValue,
                        }), children: isToggleLabel && (_jsxs(_Fragment, { children: [_jsx("div", { className: cn('wrg-toggle-check'), children: _jsx("span", { className: cn(s['text-white'], s['ml-1']), children: "Yes" }) }), _jsx("div", { className: cn('wrg-toggle-uncheck'), children: _jsx("span", { className: cn(s['dark:text-black']), children: "No" }) })] })) }), _jsx("div", { className: cn('wrg-toggle-circle', s['dark:bg-black'], {
                            'ml-1': toggleValue,
                            'mr-1': !toggleValue,
                        }) }), _jsx("input", { ref: ref, type: "checkbox", "aria-label": "Toggle Button", className: cn('wrg-toggle-input'), checked: toggleValue, readOnly: true, ...props })] }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
ToggleInput.displayName = 'ToggleInput';
