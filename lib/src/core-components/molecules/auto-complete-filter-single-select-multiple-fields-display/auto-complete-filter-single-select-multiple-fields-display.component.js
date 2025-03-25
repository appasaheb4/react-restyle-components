import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icons/icons.component';
import '../../../tc.module.css';
import s from '../../../tc.module.css';
import { cn, debounce } from '../../../core-utils';
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
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    useEffect(() => {
        setOptions(data.list);
    }, [data]);
    useEffect(() => {
        setValue(displayValue);
    }, [displayValue]);
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        setFilterValue(search);
        const filteredOptions = data.list.filter((item) => data.displayKey.some((key) => item[key]?.toString().toLowerCase().includes(search.toLowerCase())));
        setOptions(filteredOptions);
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
    const calculateMaxHeight = () => {
        if (inputRef.current) {
            const inputRect = inputRef.current.getBoundingClientRect();
            const availableHeight = window.innerHeight - inputRect.bottom - 20; // 10px padding
            return availableHeight;
        }
        return 'calc(100vh - 140px)';
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: "w-full relative", children: [_jsxs("div", { className: cn(s['flex'], s['p-2'], s['leading-4'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                        [s['dark:text-black']]: true,
                    }), children: [_jsx("input", { ref: inputRef, placeholder: placeholder, type: keyboard, value: value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none'], s['dark:text-black'], className), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), disabled: disable, onMouseDown: () => setValue(''), onBlur: (e) => onBlur && onBlur(e), onKeyDown: onKeyDown }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                color: '#000000',
                                size: 22,
                            } }))] }), options && isListOpen
                    ? options.length > 0 && (_jsx("div", { className: cn(s['absolute'], s['w-full'], s['bg-gray-100'], s['p-2'], s['rounded-sm'], s['overflow-y-auto']), style: {
                            zIndex: 500,
                            maxHeight: `${calculateMaxHeight()}px`,
                        }, children: _jsx("ul", { children: options?.map((item, index) => (_jsx("li", { className: cn(s['text-gray-400'], s['flex'], s['items-center']), onClick: () => {
                                    setValue(data.displayKey
                                        .map((key) => item[key])
                                        .filter((value) => value !== null && value !== undefined)
                                        .join(' - '));
                                    setIsListOpen(false);
                                    onSelect && onSelect(item);
                                }, children: _jsx("label", { className: cn(s['ml-2'], s['mt-1'], s['text-black']), style: {
                                        textOverflow: 'ellipsis',
                                        minWidth: 0,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                    }, title: data.displayKey
                                        .map((key) => item[key])
                                        .join(' - '), children: data.displayKey
                                        .map((key) => item[key])
                                        .filter((value) => value !== null && value !== undefined)
                                        .join(' - ') }) }, index))) }) }))
                    : null] }) }));
};
