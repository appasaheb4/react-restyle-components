import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
export const MultiSelectWithField = ({ displayField = '', options = [], selectedItems = [], hasError = false, onSelect, }) => {
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
                    }, children: selectedOptions?.length > 0
                        ? `${selectedOptions?.length} Items`
                        : 'Select' }), _jsx("div", { className: `flex mx-2 ${isListOpen ? `show` : `hidden`}`, children: options
                        ? options?.length > 0 && (_jsx("ul", { className: "flex flex-col gap-1 p-2", children: options?.map((item, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx("input", { className: "flex bg-black", type: "checkbox", checked: !_.isEmpty(selectedOptions?.find((e) => e[displayField]?.toUpperCase() ==
                                            item[displayField]?.toUpperCase()))
                                            ? true
                                            : false, onChange: () => {
                                            if (!_.isEmpty(selectedOptions?.find((e) => e[displayField]?.toUpperCase() ==
                                                item[displayField]?.toUpperCase()))) {
                                                setSelectedOptions(selectedOptions?.filter((e) => e[displayField]?.toUpperCase() !=
                                                    item[displayField]?.toUpperCase()));
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
                                        } }), ' ', _jsx("span", { className: "flex ml-2  dark:text-white text-center", children: item[displayField] })] }, index))) }))
                        : null })] }) }));
};
