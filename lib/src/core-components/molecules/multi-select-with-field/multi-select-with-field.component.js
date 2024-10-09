/* eslint-disable  */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
export const MultiSelectWithField = ({ displayField = '', options = [], selectedItems = [], hasError = false, onSelect, }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isListOpen, setIsListOpen] = useState(false);
    const useOutsideAlerter = ref => {
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
            React.createElement("span", { className: 'p-2 mt-1 shadow-sm', onClick: () => {
                    setIsListOpen(!isListOpen);
                } }, selectedOptions?.length > 0
                ? `${selectedOptions?.length} Items`
                : 'Select'),
            React.createElement("div", { className: `flex mx-2 ${isListOpen ? `show` : `hidden`}` }, options
                ? options?.length > 0 && (React.createElement("ul", { className: 'flex flex-col gap-1 p-2' }, options?.map((item, index) => (React.createElement("li", { key: index, className: 'flex items-center' },
                    React.createElement("input", { className: 'flex bg-black', type: 'checkbox', checked: !_.isEmpty(selectedOptions?.find(e => e[displayField]?.toUpperCase() ==
                            item[displayField]?.toUpperCase()))
                            ? true
                            : false, onChange: () => {
                            if (!_.isEmpty(selectedOptions?.find(e => e[displayField]?.toUpperCase() ==
                                item[displayField]?.toUpperCase()))) {
                                setSelectedOptions(selectedOptions?.filter(e => e[displayField]?.toUpperCase() !=
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
                        } }),
                    ' ',
                    React.createElement("span", { className: 'flex ml-2  dark:text-white text-center' }, item[displayField]))))))
                : null))));
};
