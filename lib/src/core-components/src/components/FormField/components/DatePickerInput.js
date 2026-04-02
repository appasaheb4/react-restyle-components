import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { Label } from '../../../core-components/atoms/Label/Label';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
export const DatePickerInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, dateFormat = 'YYYY-MM-DD', placeholder = 'Select Date', className, labelProps, ...props }, ref) => {
    const [pickedDate, setPickedDate] = useState(value && typeof value === 'string' ? dayjs(value).toDate() : null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(dayjs(pickedDate || new Date()));
    const calendarRef = useRef(null);
    useEffect(() => {
        if (value) {
            const date = typeof value === 'string' ? dayjs(value).toDate() : value;
            setPickedDate(date);
            setCurrentMonth(dayjs(date));
        }
    }, [value]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current &&
                !calendarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    const handleDateChange = (date) => {
        setPickedDate(date);
        setIsOpen(false);
        if (onChange) {
            onChange(dayjs(date).format(dateFormat));
        }
    };
    const getDaysInMonth = () => {
        const startOfMonth = currentMonth.startOf('month');
        const endOfMonth = currentMonth.endOf('month');
        const startDay = startOfMonth.day();
        const daysInMonth = endOfMonth.date();
        const days = [];
        // Add empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }
        // Add actual days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };
    const isSelectedDate = (day) => {
        if (!day || !pickedDate)
            return false;
        const date = currentMonth.date(day);
        return dayjs(pickedDate).isSame(date, 'day');
    };
    const isToday = (day) => {
        if (!day)
            return false;
        const date = currentMonth.date(day);
        return date.isSame(dayjs(), 'day');
    };
    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, 'month'));
    };
    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, 'month'));
    };
    const displayValue = pickedDate
        ? dayjs(pickedDate).format(dateFormat)
        : placeholder;
    const CalendarComponent = () => (_jsxs("div", { ref: calendarRef, className: cn(s['absolute'], s['top-full'], s['left-0'], s['mt-2'], s['bg-white'], s['dark:bg-gray-800'], s['border'], s['border-gray-300'], s['dark:border-gray-600'], s['rounded-lg'], s['shadow-lg'], s['p-4'], s['z-50'], s['w-80']), children: [_jsxs("div", { className: cn(s['flex'], s['justify-between'], s['items-center'], s['mb-4']), children: [_jsx("button", { type: "button", onClick: handlePrevMonth, className: cn(s['p-2'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-700'], s['rounded']), children: _jsx(Icon, { nameIcon: "FaChevronLeft" }) }), _jsxs("div", { className: cn(s['font-semibold'], s['text-gray-900'], s['dark:text-gray-100']), children: [MONTHS[currentMonth.month()], " ", currentMonth.year()] }), _jsx("button", { type: "button", onClick: handleNextMonth, className: cn(s['p-2'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-700'], s['rounded']), children: _jsx(Icon, { nameIcon: "FaChevronRight" }) })] }), _jsx("div", { className: cn(s['grid'], s['grid-cols-7'], s['gap-1'], s['mb-2']), children: DAYS.map((day) => (_jsx("div", { className: cn(s['text-center'], s['text-xs'], s['font-semibold'], s['text-gray-600'], s['dark:text-gray-400'], s['py-2']), children: day }, day))) }), _jsx("div", { className: cn(s['grid'], s['grid-cols-7'], s['gap-1']), children: getDaysInMonth().map((day, index) => (_jsx("div", { className: cn(s['text-center']), children: day ? (_jsx("button", { type: "button", onClick: () => handleDateChange(currentMonth.date(day).toDate()), className: cn(s['w-full'], s['py-2'], s['rounded'], s['text-sm'], s['hover:bg-blue-100'], s['dark:hover:bg-blue-900'], isSelectedDate(day) && s['bg-blue-500'], isSelectedDate(day) && s['text-white'], isSelectedDate(day) && s['hover:bg-blue-600'], isToday(day) && !isSelectedDate(day) && s['border'], isToday(day) &&
                            !isSelectedDate(day) &&
                            s['border-blue-500'], !isSelectedDate(day) && s['text-gray-900'], !isSelectedDate(day) && s['dark:text-gray-100']), children: day })) : (_jsx("div", { className: cn(s['w-full'], s['py-2']) })) }, index))) })] }));
    const InputComponent = () => (_jsxs("div", { className: cn(s['relative'], s['w-full']), children: [_jsxs("div", { onClick: () => !disabled && setIsOpen(!isOpen), className: cn(s['border-gray-300'], s['dark:border-gray-600'], s['border'], s['rounded-md'], s['px-3'], s['py-2'], s['flex'], s['items-center'], s['w-full'], s['cursor-pointer'], s['bg-white'], s['dark:bg-gray-800'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50']), children: [_jsx("span", { className: cn(s['flex-1'], s['font-arimaRegular'], pickedDate ? s['text-gray-900'] : s['text-gray-400'], pickedDate ? s['dark:text-gray-100'] : s['dark:text-gray-500'], s['text-base']), children: displayValue }), _jsx(Icon, { nameIcon: "ImCalendar" })] }), isOpen && _jsx(CalendarComponent, {})] }));
    return (_jsxs("div", { className: cn(s['w-full'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps, children: _jsx(InputComponent, {}) })), !label && _jsx(InputComponent, {}), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
DatePickerInput.displayName = 'DatePickerInput';
