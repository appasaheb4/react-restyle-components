import React, { useState, useEffect, useRef } from 'react';
import '../../../tc.css';
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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `flex dark:bg-boxdark dark:text-white flex-col w-full rounded-md border-2 ${hasError ? 'border-red  ' : 'border-gray-300'}`, ref: wrapperRef },
            React.createElement("span", { className: "p-2 mt-1 shadow-sm", onClick: () => {
                    setIsListOpen(!isListOpen);
                } }, selectedOptions?.length > 0 ? selectedOptions?.join(',') : 'Select'),
            React.createElement("div", { className: `flex ${isListOpen ? `show` : `hidden`} relative` }, options
                ? options?.length > 0 && (React.createElement("div", { className: "flex absolute rounded-sm w-full", style: { zIndex: 999 } },
                    React.createElement("ul", { className: "flex  flex-col gap-1  bg-gray-200 w-full" }, options?.map((item, index) => (React.createElement("li", { key: index, className: "flex gap-2 p-2" },
                        React.createElement("label", { className: "flex gap-2" },
                            React.createElement("input", { className: "flex h-4 w-4", type: "checkbox", checked: selectedOptions?.includes(item), onChange: () => {
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
                                } }),
                            React.createElement("span", { className: "flex h-4" }, item))))))))
                : null))));
};
