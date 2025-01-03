import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icons/icons.component';
import '../../../tc.module.css';
export const AutoCompleteFilterSingleSelectMultiFieldsDisplay = ({ disable = false, loader = false, displayValue = '', placeholder = 'Search...', data, hasError = false, className, posstion = 'absolute', keyboard = 'text', onFilter, onSelect, onBlur, }) => {
    const [value, setValue] = useState(displayValue);
    const [options, setOptions] = useState(data.list);
    const [isListOpen, setIsListOpen] = useState(false);
    const [filterValue, setFilterValue] = useState();
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    setIsListOpen(false);
                    //setValue('');
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
    useEffect(() => {
        setOptions(data.list);
    }, [data]);
    useEffect(() => {
        setValue(displayValue);
    }, [displayValue]);
    const onChange = (e) => {
        const search = e.target.value?.toUpperCase();
        setValue(search);
        setFilterValue(search);
        onFilter && onFilter(search);
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.target.value;
            onFilter && onFilter(search);
        }
    };
    const onKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            if (options.length > 0) {
                const selectedItem = options.find((item) => item.labId === Number(value));
                if (selectedItem) {
                    setValue(data.displayKey.map((key) => `${selectedItem[key]}`).join(' - '));
                    setIsListOpen(false);
                    onSelect && onSelect(selectedItem);
                }
            }
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: "w-full relative", children: [_jsxs("div", { className: `flex items-center leading-4 p-2 focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2 ${hasError ? 'border-red' : 'border-gray-300'} rounded-md dark:text-black`, children: [_jsx("input", { placeholder: placeholder, type: keyboard, value: value, className: `${className} w-full focus:outline-none bg-none dark:text-black`, onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), disabled: disable, onMouseDown: () => setValue(''), onBlur: (e) => onBlur && onBlur(e), onKeyDown: onKeyDown }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } }))] }), options && isListOpen
                    ? options.length > 0 && (_jsx("div", { className: `mt-1 absolute  w-full bg-gray-100 p-2 rounded-sm `, style: {
                            zIndex: 500,
                        }, children: _jsx("ul", { children: options?.map((item, index) => (_jsxs("li", { className: "text-gray-400 flex items-center", onClick: () => {
                                    setValue(data.displayKey
                                        .map((key) => `${item[key]}`)
                                        .join(' - '));
                                    setIsListOpen(false);
                                    onSelect && onSelect(item);
                                }, children: [' ', _jsx("label", { className: "ml-2 mt-1 text-black", style: {
                                            textOverflow: 'ellipsis',
                                            minWidth: 0,
                                            overflow: 'hidden',
                                            maxWidth: '334px',
                                            whiteSpace: 'nowrap',
                                        }, title: data.displayKey
                                            .map((key) => item[key])
                                            .join(' - '), children: data.displayKey
                                            .map((key) => `${item[key]}
                              `)
                                            .join(' - ') })] }, index))) }) }))
                    : null] }) }));
};
