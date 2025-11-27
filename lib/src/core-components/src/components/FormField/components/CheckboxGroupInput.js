import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Label } from '../../../core-components/atoms/Label/Label';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const CheckboxGroupInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, checkboxOptions = [], className, labelProps, ...props }, ref) => {
    const [checkboxList, setCheckboxList] = useState(checkboxOptions);
    useEffect(() => {
        if (checkboxOptions) {
            setCheckboxList(checkboxOptions);
        }
    }, [checkboxOptions]);
    useEffect(() => {
        if (value) {
            setCheckboxList(value);
        }
    }, [value]);
    const handleCheckboxGroupChange = (index) => {
        const result = checkboxList.map((e, i) => {
            if (i === index)
                return { ...e, checked: !e.checked };
            else
                return { ...e };
        });
        setCheckboxList(result);
        if (onChange) {
            onChange(result.filter((item) => item.checked));
        }
    };
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [_jsx(Label, { label: label, required: required, ...labelProps, children: checkboxList?.map((item, index) => (_jsxs("div", { className: cn(s['flex'], s['flex-row'], s['items-center'], s['mb-2'], className), onClick: () => {
                        if (!disabled) {
                            handleCheckboxGroupChange(index);
                        }
                    }, children: [_jsx("div", { className: cn(s['flex'], s['gap-2']), children: item.checked ? (_jsx(Icon, { nameIcon: "ImCheckboxChecked" })) : (_jsx(Icon, { nameIcon: "ImCheckboxUnchecked" })) }), _jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['ml-2'], disabled && s['cursor-not-allowed'], !disabled && s['cursor-pointer']), children: item?.title })] }, index))) }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
CheckboxGroupInput.displayName = 'CheckboxGroupInput';
