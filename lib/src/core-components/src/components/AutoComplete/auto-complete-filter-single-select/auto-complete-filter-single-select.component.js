import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../Icon/Icon';
import { debounce } from '@techabl/core-utils';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const AutoCompleteFilterSingleSelect = ({ disable = false, loader = false, displayValue = '', placeholder = 'Search...', data, hasError = false, onFilter, onSelect, }) => {
    const [value, setValue] = useState(displayValue);
    const [options, setOptions] = useState();
    const [isListOpen, setIsListOpen] = useState(false);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
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
    useEffect(() => {
        setOptions(data.list);
    }, [data]);
    useEffect(() => {
        setValue(displayValue);
    }, [displayValue]);
    const handleInputChange = (e) => {
        const search = e.target.value;
        setValue(search);
        const filteredOptions = data.list.filter((item) => item[data.displayKey].toLowerCase().includes(search.toLowerCase()));
        setOptions(filteredOptions);
        debounce(() => {
            onFilter(search);
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }), children: [_jsx("input", { placeholder: placeholder, value: !isListOpen ? value : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none']), onChange: handleInputChange, onClick: () => setIsListOpen(true), disabled: disable }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                size: 16,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                size: 16,
                            } }))] }), options && isListOpen ? (options.length > 0 ? (_jsx("div", { className: cn(s['mt-1'], s['absolute'], s['bg-gray-100'], s['p-2'], s['rounded-sm'], s['z-50']), style: { zIndex: 80, width: '100%' }, children: _jsx("ul", { children: options?.map((item, index) => (_jsx(_Fragment, { children: _jsx("li", { className: cn(s['text-gray-400'], s['flex'], s['items-center']), onClick: () => {
                                    setValue(item[data.displayKey]);
                                    setIsListOpen(false);
                                    onSelect(item);
                                }, children: _jsx("label", { className: cn(s['ml-2'], s['mt-1'], s['text-black']), children: item[data.displayKey] }) }, index) }))) }) })) : (_jsx("div", { className: cn(s['mt-1'], s['absolute'], s['bg-gray-100'], s['p-2'], s['rounded-sm']), style: { zIndex: 80, width: '100%' }, children: _jsx("span", { children: "Not Found Result!!" }) }))) : null] }) }));
};
