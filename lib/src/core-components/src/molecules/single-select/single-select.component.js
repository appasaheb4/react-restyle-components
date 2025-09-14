import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../..';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const SingleSelect = ({ options = [], displayKey = 'title', displayValue = '', hasError = false, className = '', style = {}, onSelect, }) => {
    const [value, setValue] = useState('');
    const [isListOpen, setIsListOpen] = useState(false);
    // Arrow navigation state
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    setIsListOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen]);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    // Keyboard navigation
    useEffect(() => {
        if (displayValue)
            setValue(displayValue);
        if (!isListOpen)
            return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                setHighlightedIndex((prev) => prev < options.length - 1 ? prev + 1 : 0);
            }
            else if (e.key === 'ArrowUp') {
                setHighlightedIndex((prev) => prev > 0 ? prev - 1 : options.length - 1);
            }
            else if (e.key === 'Enter' && highlightedIndex >= 0) {
                const item = options[highlightedIndex];
                setValue(item[displayKey]);
                onSelect(item);
                setIsListOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [
        isListOpen,
        highlightedIndex,
        options,
        displayKey,
        onSelect,
        displayValue,
    ]);
    // Reset highlight when list opens/closes
    useEffect(() => {
        if (isListOpen)
            setHighlightedIndex(-1);
    }, [isListOpen]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s['flex'], s['dark:bg-boxdark'], s['dark:text-white'], s['flex-col'], s['w-full'], s['rounded-md'], s['border'], {
                [s['border-red']]: hasError,
                [s['border-gray-300']]: !hasError,
            }, className), ref: wrapperRef, style: style, children: [_jsxs("span", { className: cn(s['p-2'], s['shadow-sm'], s['flex'], s['justify-between'], s['items-center']), onClick: () => {
                        setIsListOpen(!isListOpen);
                    }, tabIndex: 0, style: { cursor: 'pointer' }, children: [value ? value : 'Select', _jsx("span", { children: isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: { size: 16 } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: { size: 16 } })) })] }), _jsx("div", { className: cn(s['flex'], { [s['show']]: isListOpen, [s['hidden']]: !isListOpen }, s['relative']), children: options
                        ? options?.length > 0 && (_jsx("div", { className: cn(s['flex'], s['absolute'], s['rounded-sm'], s['w-full']), style: { zIndex: 999 }, children: _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['gap-1'], s['bg-gray-200'], s['w-full']), children: options?.map((item, index) => (_jsx("li", { className: cn(s['flex'], s['gap-2'], s['p-2'], highlightedIndex === index && s['bg-blue-100']), style: {
                                        cursor: 'pointer',
                                        background: highlightedIndex === index ? '#e0e7ff' : undefined,
                                    }, onClick: () => {
                                        setValue(item[displayKey]);
                                        onSelect(item);
                                        setIsListOpen(false);
                                    }, onMouseEnter: () => setHighlightedIndex(index), children: _jsx("label", { className: cn(s['flex'], s['gap-2']), children: _jsx("span", { className: cn(s['flex'], s['h-4']), children: item[displayKey] }) }) }, index))) }) }))
                        : null })] }) }));
};
