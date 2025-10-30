import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../';
import { debounce } from '@techabl/core-utils';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const AutoCompleteFilterMultiSelectSelectedTopDisplay = ({ uniqueField = '_id', loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, showSelectAllSection = true, onFilter, onUpdate, onSelect, onBlur, dynamicCheck = 'panelCode', }) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [originalOptions, setOriginalOptions] = useState([]);
    const [isListOpen, setIsListOpen] = useState(false);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    if (originalOptions && options) {
                        if (isListOpen) {
                            onUpdate && onUpdate(options.filter((item) => item.selected));
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
    // Handle select all functionality
    const handleSelect = (selectAll) => {
        const updatedItems = options.map((item) => ({
            ...item,
            selected: selectAll,
        }));
        setOptions(updatedItems);
        onSelect(updatedItems);
    };
    // Fix the getAvailableItemsCount function
    const getAvailableItemsCount = () => {
        if (!options)
            return 0;
        const availableCount = options?.filter((item) => {
            const isSelected = data.selected?.some((selectedItem) => selectedItem[dynamicCheck] === item[dynamicCheck]);
            return !isSelected;
        }).length;
        return availableCount;
    };
    // Get selected items count
    const getSelectedCount = () => {
        return data.selected?.length || 0;
    };
    // Get total items count
    const getTotalItemsCount = () => {
        return options?.length || 0;
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }, s['bg-white']), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? `${getSelectedCount()} Items Selected`
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-transparent']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }), loader ? (_jsx("div", { className: cn(s['animate-spin'], s['w-4'], s['h-4']), children: _jsx(Icon, { nameIcon: "FaSpinner", propsIcon: {
                                    size: 16,
                                    color: '#666',
                                } }) })) : (_jsx(Icon, { nameIcon: isListOpen ? 'FaChevronUp' : 'FaChevronDown', propsIcon: {
                                size: 16,
                                color: '#000000',
                            } }))] }), isListOpen && (_jsxs("div", { className: cn(s['mt-1'], s['absolute'], s['rounded-md'], s['bg-white'], s['border'], s['border-gray-300'], s['shadow-lg'], s['z-50'], s['w-full'], s['max-h-96'], s['overflow-hidden']), style: { zIndex: 1000 }, children: [_jsx("div", { className: cn(s['p-3'], s['border-b'], s['border-gray-200'], s['bg-gray-50'], s['text-sm'], s['font-medium'], s['text-gray-700']), children: _jsxs("div", { className: cn(s['flex'], s['justify-between'], s['items-center']), children: [_jsxs("span", { children: ["Total Items: ", getTotalItemsCount()] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: cn(s['text-blue-600']), children: [getSelectedCount(), " Selected"] }), _jsx("div", { className: cn(s['flex'], s['gap-2']), children: _jsx("button", { type: "button", className: cn(s['text-xs'], s['px-3'], s['py-1'], s['bg-blue-600'], s['text-white'], s['rounded'], s['hover:bg-blue-700'], s['transition-colors']), onClick: () => {
                                                        onUpdate &&
                                                            onUpdate(options.filter((item) => item.selected));
                                                        setIsListOpen(false);
                                                        setValue('');
                                                    }, children: "OK" }) })] })] }) }), showSelectAllSection && (_jsxs("div", { className: cn(s['p-3'], s['border-b'], s['border-gray-200'], s['bg-gray-50'], s['flex'], s['justify-between'], s['items-center']), children: [_jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['text-gray-700']), children: "Quick Actions" }), _jsxs("div", { className: cn(s['flex'], s['gap-2']), children: [_jsx("button", { type: "button", onClick: () => handleSelect(true), className: cn(s['text-xs'], s['px-3'], s['py-1'], s['bg-green-500'], s['text-white'], s['rounded'], s['hover:bg-green-600'], s['transition-colors'], getAvailableItemsCount() === 0 && s['opacity-50'], getAvailableItemsCount() === 0 && s['cursor-not-allowed']), disabled: getAvailableItemsCount() === 0, title: "Select all available items", children: "Select All" }), _jsx("button", { type: "button", onClick: () => handleSelect(false), className: cn(s['text-xs'], s['px-3'], s['py-1'], s['bg-gray-500'], s['text-white'], s['rounded'], s['hover:bg-gray-600'], s['transition-colors'], getSelectedCount() === 0 && s['opacity-50'], getSelectedCount() === 0 && s['cursor-not-allowed']), disabled: getSelectedCount() === 0, title: "Deselect all selected items", children: "Clear All" })] })] })), _jsxs("div", { className: cn(s['max-h-80'], s['overflow-y-auto']), children: [data.selected && data.selected.length > 0 && (_jsxs("div", { className: cn(s['border-b'], s['border-gray-200']), children: [_jsx("div", { className: cn(s['p-3'], s['bg-blue-50'], s['border-b'], s['border-blue-200'], s['font-semibold'], s['text-sm'], s['text-blue-700']), children: _jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), children: [_jsx(Icon, { nameIcon: "FaCheck", propsIcon: {
                                                            size: 12,
                                                            color: '#1976d2',
                                                        } }), _jsxs("span", { children: ["Selected Items (", data.selected.length, ")"] })] }) }), _jsx("div", { className: cn(s['max-h-48'], s['overflow-y-auto']), children: data?.selected?.map((item, index) => (_jsx("div", { className: cn(s['flex'], s['items-center'], s['gap-3'], s['p-3'], s['hover:bg-blue-50'], s['border-l-4'], s['border-blue-500'], s['bg-blue-25'], s['transition-colors']), children: _jsxs("label", { className: cn(s['flex'], s['items-center'], s['cursor-pointer'], s['w-full']), children: [_jsx("input", { type: "checkbox", checked: true, onChange: () => onSelect([{ ...item, selected: !item.selected }]), className: cn(s['h-4'], s['w-4'], s['text-blue-600'], s['border-gray-300'], s['rounded'], s['focus:ring-blue-500'], s['cursor-pointer']) }), _jsx("div", { className: cn(s['ml-3'], s['flex'], s['flex-col']), children: _jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['text-blue-700']), children: data.displayKey
                                                                    ?.map((key) => item[key])
                                                                    .filter(Boolean)
                                                                    .join(' - ') || 'Unnamed Item' }) })] }) }, `selected-${index}`))) })] })), options && options.length > 0 && (_jsx("div", { children: _jsx("div", { className: cn(s['max-h-60'], s['overflow-y-auto']), children: options
                                            ?.filter((item) => {
                                            // Check if this item is NOT in the selected items
                                            const isSelected = data.selected?.some((selectedItem) => selectedItem[uniqueField] === item[uniqueField]);
                                            return !isSelected;
                                        })
                                            ?.map((item, index) => (_jsx("div", { className: cn(s['flex'], s['items-center'], s['gap-3'], s['p-3'], s['hover:bg-gray-50'], s['border-l-4'], s['border-transparent'], s['transition-colors']), children: _jsxs("label", { className: cn(s['flex'], s['items-center'], s['cursor-pointer'], s['w-full']), children: [_jsx("input", { type: "checkbox", checked: item.selected || false, onChange: () => onSelect([{ ...item, selected: !item.selected }]), className: cn(s['h-4'], s['w-4'], s['text-blue-600'], s['border-gray-300'], s['rounded'], s['focus:ring-blue-500'], s['cursor-pointer']) }), _jsx("div", { className: cn(s['ml-3'], s['flex'], s['flex-col']), children: _jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['text-gray-700']), children: data.displayKey
                                                                ?.map((key) => item[key])
                                                                .filter(Boolean)
                                                                .join(' - ') || 'Unnamed Item' }) })] }) }, `available-${index}`))) }) })), (!options || options.length === 0) && (_jsxs("div", { className: cn(s['p-4'], s['text-center'], s['text-gray-500']), children: [_jsx(Icon, { nameIcon: "FaSearch", propsIcon: {
                                                size: 24,
                                                color: '#ccc',
                                            } }), _jsx("p", { className: cn(s['mt-2'], s['text-sm']), children: "No items found" }), _jsx("p", { className: cn(s['text-xs']), children: "Try adjusting your search terms" })] }))] })] }))] }) }));
};
