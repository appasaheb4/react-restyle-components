import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icons/icons.component';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const AutoCompleteFilterMultipleSelectMultipleFieldsDisplay = ({ uniqueField = '_id', isSelectedStringArray = false, loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, onFilter, onUpdate, onSelect, onBlur, }) => {
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
                    ? selectedItem.find((sItem, index) => {
                        if (isSelectedStringArray) {
                            if (sItem === item[uniqueField]) {
                                item.selected = true;
                            }
                        }
                        else {
                            if (sItem[uniqueField] === item[uniqueField]) {
                                item.selected = true;
                            }
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
        onFilter && onFilter(search);
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.target.value;
            onFilter && onFilter(search);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border-2'], hasError ? s['border-red'] : s['border-gray-300'], s['rounded-md']), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? data?.selected?.length > 0
                                    ? `${(data.selected && data.selected.length) || 0} Items`
                                    : value
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } }))] }), options && isListOpen
                    ? options?.length > 0 && (_jsx("div", { className: cn(s['flex'], s['mt-1'], s['absolute'], s['rounded-sm'], s['z-500'], s['w-full']), style: { zIndex: 80 }, children: _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['gap-2'], s['bg-gray-200'], s['p-2'], s['w-full']), children: options?.map((item, index) => (_jsx(_Fragment, { children: _jsx("li", { className: cn(s['flex'], s['gap-4'], s['p-2']), children: _jsxs("label", { className: cn(s['flex']), children: [_jsx("input", { id: index?.toString(), className: cn(s['flex'], s['h-4'], s['w-4']), type: "checkbox", checked: item.selected, onChange: () => onSelect(item) }), ' ', _jsx("span", { className: cn(s['flex'], s['h-4'], s['ml-2']), children: data.displayKey
                                                    .map((key) => `${item[key]}
                              `)
                                                    .join(' - ') })] }) }, index) }))) }) }))
                    : null] }) }));
};
