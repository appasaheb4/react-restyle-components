import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { Label } from '../../../core-components/atoms/Label/Label';
import { Icon } from '../../Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const DropdownInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, dropdownItems = [], placeholder, name, className, labelProps, ...props }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(value || '');
    const [filteredDropdownItems, setFilteredDropdownItems] = useState(dropdownItems);
    const dropdownWrapperRef = useRef(null);
    useEffect(() => {
        if (dropdownItems) {
            setFilteredDropdownItems(dropdownItems);
        }
    }, [dropdownItems]);
    useEffect(() => {
        if (value !== undefined) {
            setDropdownValue(value);
        }
    }, [value]);
    // Outside click handler
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownWrapperRef.current &&
                !dropdownWrapperRef.current.contains(event.target) &&
                isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);
    const handleDropdownInputChange = (event) => {
        const inputValue = event.target.value;
        setDropdownValue(inputValue);
        const filtered = dropdownItems.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredDropdownItems(filtered);
        if (onChange) {
            onChange(inputValue);
        }
    };
    const handleDropdownItemSelect = (item) => {
        setDropdownValue(item);
        setIsDropdownOpen(false);
        if (onChange) {
            onChange(item);
        }
    };
    return (_jsxs("div", { className: cn(s['w-full'], s['relative'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps })), _jsxs("div", { className: cn(s['flex'], s['flex-row'], s['items-center']), ref: dropdownWrapperRef, children: [_jsx("input", { ref: ref, id: id, type: "text", name: name || id, placeholder: placeholder || label, value: dropdownValue, disabled: disabled, className: cn(s['pt-3'], s['pb-2'], s['w-full'], s['px-0'], s['mt-0'], s['bg-transparent'], s['border-gray-secondary'], s['border-0'], s['border-b'], s['appearance-none'], s['focus:outline-none'], s['focus:ring-0'], s['font-arimaRegular'], s['text-md'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50'], error && s['border-red-500']), onClick: () => {
                            if (!disabled) {
                                setIsDropdownOpen(!isDropdownOpen);
                            }
                        }, onChange: handleDropdownInputChange, ...props }), !isDropdownOpen && (_jsx(Icon, { nameIcon: "MdKeyboardArrowDown", propsIcon: { size: '24', color: '#000000' }, onClick: () => {
                            if (!disabled) {
                                setIsDropdownOpen(!isDropdownOpen);
                            }
                        } })), isDropdownOpen && (_jsx(Icon, { nameIcon: "MdKeyboardArrowUp", propsIcon: { size: '24', color: '#000000' }, onClick: () => {
                            if (!disabled) {
                                setIsDropdownOpen(!isDropdownOpen);
                            }
                        } }))] }), isDropdownOpen && (_jsx("div", { className: cn(s['z-10'], s['w-full'], s['absolute'], s['text-base'], s['list-none'], s['bg-white'], s['rounded'], s['divide-y'], s['divide-gray-100'], s['shadow'], s['dark:bg-gray-700']), children: _jsx("ul", { className: s['py-1'], children: filteredDropdownItems?.map((item, index) => (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-600'], s['dark:text-gray-200'], s['font-arimaRegular'], s['cursor-pointer']), onClick: () => {
                            if (!disabled) {
                                handleDropdownItemSelect(item);
                            }
                        }, children: item }, index))) }) })), error && (_jsx("span", { className: cn(s['text-red'], s['text-4xs']), id: "error", children: error || `${label || 'Field'} is required` }))] }));
});
DropdownInput.displayName = 'DropdownInput';
