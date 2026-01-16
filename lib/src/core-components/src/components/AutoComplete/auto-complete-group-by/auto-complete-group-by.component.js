import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const AutocompleteGroupBy = ({ data = [], hasError = false, displayValue = '', onChange, onClose, }) => {
    //const [userRouter, setUserRouter] = useState<any>()
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
        setValue(displayValue);
    }, [displayValue]);
    useEffect(() => {
        setOptions(data || []);
    }, [data]);
    const uniqByKeepFirst = (a, key) => {
        const seen = new Set();
        return a.filter((item) => {
            const k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    };
    const filter = (search, data) => {
        if (search !== '') {
            let filterArray = [];
            data.filter((item) => {
                item.children.filter((children) => {
                    const childrenItem = children.title &&
                        children.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                    if (childrenItem) {
                        const isSameArray = filterArray.filter((filterItem, index) => {
                            if (filterItem.name === item.name) {
                                const newChildren = filterArray[index].children.concat(children);
                                filterArray[index] = {
                                    ...filterArray[index],
                                    children: newChildren,
                                };
                            }
                        });
                        if (isSameArray.length < 1) {
                            filterArray.push({ ...item, children: [children] });
                        }
                        const uniqueChars = uniqByKeepFirst(filterArray, (it) => it.name);
                        filterArray = uniqueChars;
                    }
                });
            });
            setOptions(filterArray);
        }
        else {
            setOptions(data);
        }
    };
    const onChangeValue = (e) => {
        const search = e.target.value;
        setValue(search);
        filter(search, data);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['bg-white'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }), children: [_jsx("input", { placeholder: "Search...", value: !isListOpen ? value : value, className: cn(s['w-full'], s['focus:outline-none']), onChange: onChangeValue, onClick: () => setIsListOpen(true), onKeyDown: (e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    // Find the selected item and children
                                    let selectedItem = null;
                                    let selectedChildren = null;
                                    for (const item of options) {
                                        for (const children of item.children) {
                                            if (children.title.toLowerCase() === value.toLowerCase() ||
                                                item.title.toLowerCase() === value.toLowerCase()) {
                                                selectedItem = item;
                                                selectedChildren = children;
                                                break;
                                            }
                                        }
                                        if (selectedItem) {
                                            break;
                                        }
                                    }
                                    // Call props.onChange with the selected item and children
                                    if (onChange && selectedItem && selectedChildren) {
                                        onChange(selectedItem, selectedChildren);
                                    }
                                    setIsListOpen(false);
                                    setValue(value);
                                }
                            } }), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                size: 16,
                            } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                size: 16,
                            } }))] }), options && isListOpen ? (options?.length > 0 ? (_jsx("div", { className: cn(s['flex'], s['mt-1'], s['absolute'], s['z-50'], s['rounded-md'], s['bg-gray-200'], s['w-100'], s['w-full']), children: _jsx("ul", { className: cn(s['flex'], s['p-2'], s['rounded-sm'], s['w-full']), children: _jsx("div", { className: cn(s['flex'], s['flex-col'], s['w-full']), style: { height: 'auto', maxHeight: '350px' }, children: options?.map((item, index) => (_jsxs(_Fragment, { children: [_jsx("li", { className: cn(s['flex'] + ' ' + s['text-gray-400']), children: item.title }, index), _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['ml-4'], s['w-full']), children: item?.children?.map((children, childrenIndex) => (_jsx("li", { className: cn(s['flex'], s['hover:bg-gray-200'], s['focus:outline-none'], s['cursor-pointer'], s['w-full']), onClick: async () => {
                                                onChange && onChange(item, children);
                                                setIsListOpen(false);
                                                setValue(children.title);
                                            }, children: children.title }, childrenIndex))) })] }))) }) }) })) : (_jsx("div", { className: cn(s['mt-1'], s['absolute'], s['bg-gray-200'], s['p-2'], s['rounded-md']), style: { zIndex: 80, width: '100%' }, children: _jsx("span", { children: "Not Found Result!!" }) }))) : null] }) }));
};
