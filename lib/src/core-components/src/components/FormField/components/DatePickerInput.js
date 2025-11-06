import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { Label } from '../../../core-components/atoms/Label/Label';
import { Icon } from '../../Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
const DatePickerCustomInput = forwardRef((customInputProps, customInputRef) => {
    return (_jsxs("div", { onClick: !customInputProps.disabled && customInputProps.onClick, ref: customInputRef, className: cn(s['border-gray-300'], s['place-items-center'], s['border'], s['rounded-md'], s['px-2'], s['py-2'], s['flex'], s['items-center'], s['w-full'], s['cursor-pointer'], customInputProps.disabled && s['cursor-not-allowed'], customInputProps.disabled && s['opacity-50']), children: [_jsx("label", { className: cn(s['mr-3'], s['font-arimaRegular'], s['text-gray-900'], s['dark:text-gray-100'], s['text-base'], s['flex-1']), children: customInputProps.value || customInputProps.placeholder }), _jsx(Icon, { nameIcon: "ImCalendar" })] }));
});
DatePickerCustomInput.displayName = 'DatePickerCustomInput';
export const DatePickerInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, dateFormat = 'yyyy-MM-dd', placeholder = 'Select Date', className, labelProps, ...props }, ref) => {
    const [pickedDate, setPickedDate] = useState(value && typeof value === 'string' ? dayjs(value).toDate() : null);
    useEffect(() => {
        if (value) {
            setPickedDate(typeof value === 'string' ? dayjs(value).toDate() : value);
        }
    }, [value]);
    const handleDateChange = (date) => {
        setPickedDate(date);
        if (onChange && date) {
            onChange(dayjs(date).format(dateFormat));
        }
    };
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps, children: _jsx("div", { className: cn(s['flex'], s['z-50']), children: _jsx(DatePicker, { selected: pickedDate || undefined, dateFormat: dateFormat, placeholderText: placeholder, onChange: handleDateChange, customInput: _jsx(DatePickerCustomInput, { disabled: disabled }), disabled: disabled, ...props }) }) })), !label && (_jsx("div", { className: cn(s['flex'], s['z-50'], className), children: _jsx(DatePicker, { selected: pickedDate || undefined, dateFormat: dateFormat, placeholderText: placeholder, onChange: handleDateChange, customInput: _jsx(DatePickerCustomInput, { disabled: disabled }), disabled: disabled, ...props }) })), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
DatePickerInput.displayName = 'DatePickerInput';
