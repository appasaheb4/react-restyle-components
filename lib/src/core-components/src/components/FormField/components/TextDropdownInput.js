import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { Label } from '../../../core-components/atoms/Label/Label';
import { Icon } from '../../Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const TextDropdownInput = React.forwardRef(({ id, label, error, required, value, onChange, onBlur, disabled, dropdownItems = [], allowCustomInput = true, placeholder = 'Select an option', name, className, labelProps, ...props }, ref) => {
    const [isTextDropdownOpen, setIsTextDropdownOpen] = useState(false);
    const [textDropdownValue, setTextDropdownValue] = useState(value || '');
    const [filteredTextDropdownItems, setFilteredTextDropdownItems] = useState(dropdownItems);
    const [isTextEditing, setIsTextEditing] = useState(false);
    const textDropdownWrapperRef = useRef(null);
    useEffect(() => {
        if (dropdownItems) {
            setFilteredTextDropdownItems(dropdownItems);
        }
    }, [dropdownItems]);
    useEffect(() => {
        if (value !== undefined) {
            setTextDropdownValue(value);
        }
    }, [value]);
    useEffect(() => {
        if (isTextEditing && textDropdownValue) {
            const filtered = dropdownItems.filter((item) => item.toLowerCase().includes(textDropdownValue.toLowerCase()));
            setFilteredTextDropdownItems(filtered);
        }
        else {
            setFilteredTextDropdownItems(dropdownItems);
        }
    }, [textDropdownValue, dropdownItems, isTextEditing]);
    // Outside click handler
    useEffect(() => {
        function handleClickOutside(event) {
            if (textDropdownWrapperRef.current &&
                !textDropdownWrapperRef.current.contains(event.target) &&
                isTextDropdownOpen) {
                setIsTextDropdownOpen(false);
                setIsTextEditing(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isTextDropdownOpen]);
    const handleTextDropdownInputChange = (event) => {
        const inputValue = event.target.value;
        setTextDropdownValue(inputValue);
        setIsTextEditing(true);
        const filtered = dropdownItems.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredTextDropdownItems(filtered);
        if (onChange) {
            onChange(inputValue);
        }
    };
    const handleTextDropdownItemSelect = (item) => {
        setTextDropdownValue(item);
        setIsTextDropdownOpen(false);
        setIsTextEditing(false);
        if (onChange) {
            onChange(item);
        }
        if (onBlur) {
            onBlur(null, item);
        }
    };
    const handleTextDropdownClick = () => {
        if (!disabled) {
            setIsTextDropdownOpen(!isTextDropdownOpen);
            setIsTextEditing(true);
        }
    };
    const handleTextDropdownFocus = () => {
        if (!disabled) {
            setIsTextEditing(true);
        }
    };
    const handleTextDropdownBlur = (event) => {
        setTimeout(() => {
            setIsTextEditing(false);
        }, 150);
        if (onBlur) {
            onBlur(event, textDropdownValue);
        }
    };
    return (_jsxs("div", { className: cn(s['w-full'], s['relative'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps })), _jsxs("div", { className: cn(s['flex'], s['flex-row'], s['items-center'], s['leading-4'], s['p-2'], s['dark:bg-boxdark'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], error ? s['border-red'] : s['border-gray-300'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50']), ref: textDropdownWrapperRef, children: [_jsx("input", { ref: ref, id: id, type: "text", name: name || id, placeholder: placeholder, value: textDropdownValue, disabled: disabled, readOnly: !allowCustomInput, className: cn(s['w-full'], s['bg-transparent'], s['border-0'], s['appearance-none'], s['focus:outline-none'], s['focus:ring-0'], s['font-arimaRegular'], s['text-md'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50']), onClick: handleTextDropdownClick, onChange: allowCustomInput ? handleTextDropdownInputChange : undefined, onFocus: handleTextDropdownFocus, onBlur: handleTextDropdownBlur, ...props }), !disabled && (_jsx(Icon, { nameIcon: isTextDropdownOpen ? 'MdKeyboardArrowUp' : 'MdKeyboardArrowDown', propsIcon: { size: '16', color: '#000000' }, onClick: handleTextDropdownClick }))] }), isTextDropdownOpen && !disabled && (_jsx("div", { className: cn(s['z-10'], s['w-full'], s['absolute'], s['text-base'], s['list-none'], s['bg-white'], s['rounded'], s['divide-y'], s['divide-gray-100'], s['shadow'], s['dark:bg-gray-700'], s['max-h-60'], s['overflow-y-auto']), children: _jsxs("ul", { className: s['py-1'], children: [filteredTextDropdownItems.length > 0 ? (filteredTextDropdownItems.map((item, index) => (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-600'], s['dark:text-gray-200'], s['font-arimaRegular'], s['cursor-pointer'], textDropdownValue === item && s['bg-blue-50'], textDropdownValue === item && s['text-blue-700']), onClick: () => handleTextDropdownItemSelect(item), children: item }, index)))) : (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['text-gray-500'], s['font-arimaRegular']), children: allowCustomInput
                                ? 'No matches found'
                                : 'No options available' })), allowCustomInput &&
                            textDropdownValue &&
                            !dropdownItems.includes(textDropdownValue) &&
                            isTextEditing && (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-600'], s['dark:text-gray-200'], s['font-arimaRegular'], s['cursor-pointer'], s['border-t'], s['border-gray-200'], s['bg-green-50'], s['text-green-700']), onClick: () => handleTextDropdownItemSelect(textDropdownValue), children: _jsxs("span", { className: cn(s['flex'], s['ml-2'], s['items-center'], s['gap-1']), children: [_jsx(Icon, { nameIcon: "MdAdd", propsIcon: { size: '16', color: '#059669' } }), "\"", textDropdownValue, "\""] }) }))] }) })), error && (_jsx("span", { className: cn(s['text-red'], s['text-4xs']), id: "error", children: error || `${label || 'Field'} is required` }))] }));
});
TextDropdownInput.displayName = 'TextDropdownInput';
