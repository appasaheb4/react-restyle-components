import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const MultiSelect = ({ options = [], selectedItems = [], hasError = false, onSelect, }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isListOpen, setIsListOpen] = useState(false);
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
    useEffect(() => {
        setSelectedOptions(selectedItems);
    }, [selectedItems]);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s['flex'], s['dark:bg-boxdark'], s['dark:text-white'], s['flex-col'], s['w-full'], s['rounded-md'], s['border'], {
                [s['border-red']]: hasError,
                [s['border-gray-300']]: !hasError,
            }), ref: wrapperRef, children: [_jsx("span", { className: cn(s['p-2'], s['shadow-sm']), onClick: () => {
                        setIsListOpen(!isListOpen);
                    }, children: selectedOptions?.length > 0 ? selectedOptions?.join(',') : 'Select' }), _jsx("div", { className: cn(s['flex'], { [s['show']]: isListOpen, [s['hidden']]: !isListOpen }, s['relative']), children: options
                        ? options?.length > 0 && (_jsx("div", { className: cn(s['flex'], s['absolute'], s['rounded-sm'], s['w-full']), style: { zIndex: 999 }, children: _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['gap-1'], s['bg-gray-200'], s['w-full']), children: options?.map((item, index) => (_jsx("li", { className: cn(s['flex'], s['gap-2'], s['p-2']), children: _jsxs("label", { className: cn(s['flex'], s['gap-2']), children: [_jsx("input", { className: cn(s['flex'], s['h-4'], s['w-4']), type: "checkbox", checked: selectedOptions?.includes(item), onChange: () => {
                                                    if (selectedOptions?.includes(item)) {
                                                        setSelectedOptions(selectedOptions?.filter((e) => e != item));
                                                    }
                                                    else {
                                                        if (selectedOptions?.length > 0) {
                                                            setSelectedOptions(selectedOptions?.concat([item]));
                                                        }
                                                        else {
                                                            setSelectedOptions([item]);
                                                        }
                                                    }
                                                }, onBlur: () => {
                                                    if (!isListOpen)
                                                        onSelect(selectedOptions);
                                                } }), _jsx("span", { className: cn(s['flex'], s['h-4']), children: item })] }) }, index))) }) }))
                        : null })] }) }));
};
