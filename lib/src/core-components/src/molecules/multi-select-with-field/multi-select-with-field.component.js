import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import s from '../../tc.module.css';
import { cn } from '../../utils';
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
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s['flex'], s['dark:bg-boxdark'], s['dark:text-white'], s['flex-col'], s['w-full'], s['rounded-md'], s['border'], {
                [s['border-red']]: hasError,
                [s['border-gray-300']]: !hasError,
            }), ref: wrapperRef, children: [_jsx("span", { className: cn(s['p-2'], s['shadow-sm']), onClick: () => {
                        setIsListOpen(!isListOpen);
                    }, children: selectedOptions?.length > 0
                        ? `${selectedOptions?.length} Items`
                        : 'Select' }), _jsx("div", { className: cn(s['flex'], s['mx-2'], isListOpen ? s['show'] : s['hidden']), children: options
                        ? options?.length > 0 && (_jsx("ul", { className: cn(s['flex'], s['flex-col'], s['gap-1'], s['p-2']), children: options?.map((item, index) => (_jsxs("li", { className: cn(s['flex'], s['items-center']), children: [_jsx("input", { className: cn(s['flex'], s['bg-black']), type: "checkbox", checked: !_.isEmpty(selectedOptions?.find((e) => e[displayField]?.toUpperCase() ==
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
                                        } }), ' ', _jsx("span", { className: cn(s['flex'], s['ml-2'], s['dark:text-white'], s['text-center']), children: item[displayField] })] }, index))) }))
                        : null })] }) }));
};
