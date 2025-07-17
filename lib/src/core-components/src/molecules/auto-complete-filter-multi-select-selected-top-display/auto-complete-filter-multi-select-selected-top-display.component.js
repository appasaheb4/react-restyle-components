import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { Icon } from '../../atoms/icons/icons.component';
import { debounce } from '@techabl/core-utils';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const AutoCompleteFilterMultiSelectSelectedTopDisplay = ({ uniqueField = '_id', placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, onFilter, onUpdate, onSelect, onBlur, dynamicCheck = 'panelCode', }) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState();
    const [originalOptions, setOriginalOptions] = useState();
    const [isListOpen, setIsListOpen] = useState(false);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    if (originalOptions && options) {
                        if (isListOpen) {
                            onUpdate && onUpdate(data.selected);
                        }
                    }
                    setIsListOpen(false);
                    setValue('');
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
    let count = 0;
    const getSelectedItem = (selectedItem, list) => {
        if (count === 0) {
            const finalList = list?.filter((item, index) => {
                item.selected = false;
                selectedItem && selectedItem.length > 0
                    ? selectedItem?.find((sItem, index) => {
                        if (sItem[uniqueField] === item[uniqueField]) {
                            item.selected = true;
                        }
                    })
                    : (item.selected = false);
                count++;
                return item;
            });
            list = finalList;
        }
        return list;
    };
    useEffect(() => {
        setOriginalOptions(getSelectedItem(data.selected, data.list));
        setOptions(getSelectedItem(data.selected, data.list));
    }, [data, data.selected]);
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        debounce(() => {
            onFilter && onFilter(search);
        });
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.target.value;
            debounce(() => {
                onFilter && onFilter(search);
            });
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? `${(data.selected && data.selected.length) || 0} Items`
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp" })) : (_jsx(Icon, { nameIcon: "FaChevronDown" }))] }), options && isListOpen ? (options?.length > 0 ? (_jsxs("div", { className: cn(s['mt-1'], s['absolute'], s['bg-gray-100'], s['p-2'], s['rounded-sm'], s['z-500']), style: { zIndex: 80, width: '100%' }, children: [_jsx("ul", { children: data.selected?.map((item, index) => (_jsx(React.Fragment, { children: _jsx("li", { className: cn(s['text-gray-400'], s['flex'], s['items-center']), children: _jsxs("label", { className: cn(s['flex']), children: [_jsx("input", { type: "checkbox", checked: true, onChange: () => onSelect({ ...item, selected: true }, true) }), ' ', _jsx("span", { className: cn(s['ml-2'], s['mt-1'], s['text-black']), children: data.displayKey
                                                    .map((key) => `${item[key]}
                              `)
                                                    .join(' - ') })] }) }, index) }, index))) }), _jsx("hr", {}), _jsx("ul", { className: cn(s['p-2'], s['rounded-sm']), children: _jsx("div", { children: _jsx("div", { style: { height: 'auto', maxHeight: '300px' }, children: options?.map((item, index) => (_jsx(React.Fragment, { children: _.some(data.selected, {
                                            [dynamicCheck]: item[dynamicCheck],
                                        }) == false && (_jsx("li", { className: cn(s['text-gray-400'], s['flex'], s['items-center']), children: _jsxs("label", { className: cn(s['flex']), children: [_jsx("input", { type: "checkbox", checked: item.selected, onChange: () => onSelect(item) }), ' ', _jsx("span", { className: cn(s['ml-2'], s['mt-1'], s['text-black']), children: data.displayKey
                                                            .map((key) => `${item[key]}
                                          `)
                                                            .join(' - ') })] }) }, index)) }, index))) }) }) })] })) : (_jsx("div", { className: cn(s['mt-1'], s['absolute'], s['bg-gray-100'], s['p-2'], s['rounded-sm']), style: { zIndex: 80, width: '100%' }, children: _jsx("span", { children: "Not Found Result!!" }) }))) : null] }) }));
};
