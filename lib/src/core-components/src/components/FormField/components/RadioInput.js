import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Label } from '../../../core-components/atoms/Label/Label';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const RadioInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, radioOptions = [], name, className, labelProps, ...props }, ref) => {
    const [radioList, setRadioList] = useState(radioOptions);
    useEffect(() => {
        if (radioOptions) {
            setRadioList(radioOptions);
        }
    }, [radioOptions]);
    // Check if using icon-based radio (has title/checked properties)
    const firstOption = radioList[0];
    const isIconBased = firstOption && ('title' in firstOption || 'checked' in firstOption);
    const handleRadioChange = (index) => {
        if (isIconBased) {
            const result = radioList.map((e, i) => {
                if (i === index)
                    return { ...e, checked: true };
                else
                    return { ...e, checked: false };
            });
            setRadioList(result);
            if (onChange) {
                onChange(result.find((item) => item.checked));
            }
        }
        else {
            // Native radio button behavior
            const selectedOption = radioList[index];
            if (onChange && selectedOption?.value) {
                onChange(selectedOption.value);
            }
        }
    };
    const renderIconBasedRadio = () => (_jsx(_Fragment, { children: radioList.map((item, index) => (_jsx("div", { className: cn(s['flex'], s['items-center'], s['mb-1'], !disabled && s['cursor-pointer'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50'], className), onClick: () => {
                if (!disabled) {
                    handleRadioChange(index);
                }
            }, children: _jsxs("div", { className: cn(s['flex'], s['flex-row'], s['gap-1'], s['items-center']), children: [item.checked ? (_jsx(Icon, { nameIcon: "ImRadioChecked" })) : (_jsx(Icon, { nameIcon: "ImRadioUnchecked" })), _jsx("span", { className: cn(s['text-4xs']), children: item.title })] }) }, index))) }));
    const renderNativeRadio = () => (_jsx(_Fragment, { children: radioList.map((item, key) => (_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2'], s['mb-2']), onClick: () => {
                if (!disabled && item.value) {
                    handleRadioChange(key);
                }
            }, children: [_jsx("input", { ref: ref, type: "radio", id: `${id}-${key}`, name: name || id, value: item.value, checked: value === item.value, onChange: () => {
                        if (item.value) {
                            handleRadioChange(key);
                        }
                    }, disabled: disabled, className: cn(s['w-4'], s['h-4'], s['text-blue-600'], s['bg-gray-100'], s['border-gray-300'], s['focus:ring-blue-500'], s['dark:focus:ring-blue-600'], s['dark:ring-offset-gray-800'], s['focus:ring-2'], s['dark:bg-gray-700'], s['dark:border-gray-600']), ...props }), _jsx("label", { htmlFor: `${id}-${key}`, className: cn(s['cursor-pointer']), children: item.label })] }, key))) }));
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps, children: isIconBased ? renderIconBasedRadio() : renderNativeRadio() })), !label && (_jsx(_Fragment, { children: isIconBased ? renderIconBasedRadio() : renderNativeRadio() })), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
RadioInput.displayName = 'RadioInput';
