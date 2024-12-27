import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import '../../../tc.module.css';
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
    return (_jsx(_Fragment, { children: _jsxs("div", { className: `flex dark:bg-boxdark dark:text-white flex-col w-full rounded-md border-2 ${hasError ? 'border-red  ' : 'border-gray-300'}`, ref: wrapperRef, children: [_jsx("span", { className: "p-2 mt-1 shadow-sm", onClick: () => {
                        setIsListOpen(!isListOpen);
                    }, children: selectedOptions?.length > 0 ? selectedOptions?.join(',') : 'Select' }), _jsx("div", { className: `flex ${isListOpen ? `show` : `hidden`} relative`, children: options
                        ? options?.length > 0 && (_jsx("div", { className: "flex absolute rounded-sm w-full", style: { zIndex: 999 }, children: _jsx("ul", { className: "flex  flex-col gap-1  bg-gray-200 w-full", children: options?.map((item, index) => (_jsx("li", { className: "flex gap-2 p-2", children: _jsxs("label", { className: "flex gap-2", children: [_jsx("input", { className: "flex h-4 w-4", type: "checkbox", checked: selectedOptions?.includes(item), onChange: () => {
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
                                                } }), _jsx("span", { className: "flex h-4", children: item })] }) }, index))) }) }))
                        : null })] }) }));
};
