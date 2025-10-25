import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
import { Icon } from '../icons/icons.component';
export const TextInputDropdown = ({ items, className, hasError, placeholder = 'Select an option', value: controlledValue, defaultValue = '', onChange, onBlur, disabled = false, allowCustomInput = true, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [filteredItems, setFilteredItems] = useState(items);
    const [isEditing, setIsEditing] = useState(false);
    // Use controlled value if provided, otherwise use internal state
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isOpen) {
                    setIsOpen(false);
                    setIsEditing(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isOpen]);
    };
    // Update filtered items when items prop changes
    useEffect(() => {
        setFilteredItems(items);
    }, [items]);
    // Filter items based on current input value
    useEffect(() => {
        if (isEditing && value) {
            const filtered = items.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
            setFilteredItems(filtered);
        }
        else {
            setFilteredItems(items);
        }
    }, [value, items, isEditing]);
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (controlledValue === undefined) {
            setInternalValue(inputValue);
        }
        setIsEditing(true);
        // Filter items based on input
        const filtered = items.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredItems(filtered);
        onChange && onChange(inputValue);
    };
    const handleItemSelect = (item) => {
        if (controlledValue === undefined) {
            setInternalValue(item);
        }
        setIsOpen(false);
        setIsEditing(false);
        onChange && onChange(item);
        if (item)
            onBlur && onBlur(null, item); // Trigger onBlur when selection changes
    };
    const handleInputClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            setIsEditing(true);
        }
    };
    const handleInputFocus = () => {
        if (!disabled) {
            setIsEditing(true);
        }
    };
    const handleInputBlur = (event) => {
        // Small delay to allow item selection to complete
        setTimeout(() => {
            setIsEditing(false);
        }, 150);
        onBlur && onBlur(event, value);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (_jsxs("div", { className: cn(className, s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['flex-row'], s['items-center'], s['leading-4'], s['p-2'], s['dark:bg-boxdark'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                    [s['border-red']]: hasError,
                    [s['border-gray-300']]: !hasError,
                }), children: [_jsx("input", { type: "text", name: "name", placeholder: placeholder, value: value, disabled: disabled, className: cn(s['w-full'], s['bg-transparent'], s['border-0'], s['appearance-none'], s['focus:outline-none'], s['focus:ring-0'], s['font-arimaRegular'], s['text-md'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50']), onClick: handleInputClick, onChange: allowCustomInput ? handleInputChange : undefined, onFocus: handleInputFocus, onBlur: handleInputBlur, readOnly: !allowCustomInput }), !disabled && (_jsx(Icon, { nameIcon: isOpen ? 'MdKeyboardArrowUp' : 'MdKeyboardArrowDown', propsIcon: { size: '16', color: '#000000' }, onClick: handleInputClick }))] }), isOpen && !disabled && (_jsx("div", { className: cn(s['z-10'], s['w-full'], s['absolute'], s['text-base'], s['list-none'], s['bg-white'], s['rounded'], s['divide-y'], s['divide-gray-100'], s['shadow'], s['dark:bg-gray-700'], s['max-h-60'], s['overflow-y-auto']), ref: wrapperRef, children: _jsxs("ul", { className: s['py-1'], children: [filteredItems.length > 0 ? (filteredItems.map((item, index) => (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-600'], s['dark:text-gray-200'], s['font-arimaRegular'], s['cursor-pointer'], 
                            // Highlight if this item matches current value
                            value === item && s['bg-blue-50'], value === item && s['text-blue-700']), onClick: () => handleItemSelect(item), children: item }, index)))) : (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['text-gray-500'], s['font-arimaRegular']), children: allowCustomInput ? 'No matches found' : 'No options available' })), allowCustomInput &&
                            value &&
                            !items.includes(value) &&
                            isEditing && (_jsx("li", { className: cn(s['block'], s['py-2'], s['px-4'], s['text-md'], s['hover:bg-gray-100'], s['dark:hover:bg-gray-600'], s['dark:text-gray-200'], s['font-arimaRegular'], s['cursor-pointer'], s['border-t'], s['border-gray-200'], s['bg-green-50'], s['text-green-700']), onClick: () => handleItemSelect(value), children: _jsxs("span", { className: cn(s.flex, s['ml-2'], s['items-center'], s['gap-1']), children: [_jsx(Icon, { nameIcon: "MdAdd", propsIcon: { size: '16', color: '#059669' } }), "\"", value, "\""] }) }))] }) }))] }));
};
