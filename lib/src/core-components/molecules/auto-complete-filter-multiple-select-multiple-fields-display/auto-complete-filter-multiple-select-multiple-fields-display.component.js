import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icons/icons.component';
import '../../../tc.module.css';
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
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: "w-full relative", children: [_jsxs("div", { className: `flex items-center leading-4 p-2 focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2 ${hasError ? 'border-red' : 'border-gray-300'} rounded-md`, children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? data?.selected?.length > 0
                                    ? `${(data.selected && data.selected.length) || 0} Items`
                                    : value
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: `w-full focus:outline-none bg-none`, onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } }))] }), options && isListOpen
                    ? options?.length > 0 && (_jsx("div", { className: "flex mt-1  absolute  rounded-sm z-500 w-full", style: { zIndex: 80 }, children: _jsx("ul", { className: "flex  flex-col gap-2  bg-gray-200 p-2 w-full", children: options?.map((item, index) => (_jsx(_Fragment, { children: _jsx("li", { className: 'flex gap-4 p-2"', children: _jsxs("label", { className: "flex", children: [_jsx("input", { id: index?.toString(), className: "flex h-4 w-4", type: "checkbox", checked: item.selected, onChange: () => onSelect(item) }), ' ', _jsx("span", { className: "flex h-4 ml-2", children: data.displayKey
                                                    .map((key) => `${item[key]}
                              `)
                                                    .join(' - ') })] }) }, index) }))) }) }))
                    : null] }) }));
};
