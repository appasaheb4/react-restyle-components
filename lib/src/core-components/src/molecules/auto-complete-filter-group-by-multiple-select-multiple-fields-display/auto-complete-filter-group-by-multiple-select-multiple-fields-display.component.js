import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { Icon } from '../../atoms/icons/icons.component';
import s from '../../tc.module.css';
import { cn } from '../../utils';
import { debounce } from '@techabl/core-utils';
export const AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplay = ({ uniqueField = '_id', isSelectedStringArray = false, loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, showGroupHeaders = true, collapsibleGroups = false, groupByDetails = { groupByName: 'lab', totalItemName: 'department' }, onFilter, onUpdate, onSelect, onBlur, }) => {
    const [value, setValue] = useState('');
    const [groupedOptions, setGroupedOptions] = useState({});
    const [collapsedGroups, setCollapsedGroups] = useState(new Set());
    const [isListOpen, setIsListOpen] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    onSelect &&
                        onSelect(Object.keys(groupedOptions).reduce((acc, groupKey) => {
                            const selectedItems = (groupedOptions[groupKey] || []).filter((item) => item.selected);
                            if (selectedItems.length > 0) {
                                acc[groupKey] = selectedItems;
                            }
                            return acc;
                        }, {}));
                    setIsListOpen(false);
                    setValue('');
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen, groupedOptions]);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    // Process grouped data and mark selected items
    const processGroupedData = (groupedData, selectedItems) => {
        const processedGroups = {};
        let totalCount = 0;
        Object.keys(groupedData).forEach((groupKey) => {
            const groupItems = groupedData[groupKey] || [];
            const processedItems = groupItems.map((item) => {
                totalCount++;
                const isSelected = selectedItems && selectedItems.length > 0
                    ? selectedItems.some((sItem) => {
                        if (isSelectedStringArray) {
                            return sItem === item[uniqueField];
                        }
                        else {
                            return sItem[uniqueField] === item[uniqueField];
                        }
                    })
                    : false;
                return {
                    ...item,
                    selected: isSelected,
                };
            });
            processedGroups[groupKey] = processedItems;
        });
        setTotalItems(totalCount);
        return processedGroups;
    };
    useEffect(() => {
        // Handle both grouped data structure and regular list structure
        let processedData = {};
        if (data.list && Array.isArray(data.list)) {
            // If data.list is an array, it's the regular structure
            // Group by 'lab' field or create a single group
            const grouped = data.list.reduce((groups, item) => {
                const groupKey = item.lab || 'Default';
                if (!groups[groupKey]) {
                    groups[groupKey] = [];
                }
                groups[groupKey].push(item);
                return groups;
            }, {});
            processedData = processGroupedData(grouped, data.selected || []);
        }
        else if (typeof data.list === 'object' && data.list !== null) {
            // If data.list is an object, it's already grouped
            processedData = processGroupedData(data.list, data.selected || []);
        }
        setGroupedOptions(processedData);
    }, [data, data.selected, isSelectedStringArray, uniqueField]);
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
    const toggleGroupCollapse = (groupName) => {
        const newCollapsedGroups = new Set(collapsedGroups);
        if (newCollapsedGroups.has(groupName)) {
            newCollapsedGroups.delete(groupName);
        }
        else {
            newCollapsedGroups.add(groupName);
        }
        setCollapsedGroups(newCollapsedGroups);
    };
    // Simple and effective group select all function
    const handleGroupSelectAll = (groupName, groupItems, selectAll) => {
        const updatedGroupItems = groupItems.map((item) => ({
            ...item,
            selected: selectAll,
        }));
        // Update groupedOptions state
        setGroupedOptions((prev) => ({
            ...prev,
            [groupName]: updatedGroupItems,
        }));
    };
    const handleGroupSelectToggle = (groupName, isSelected, itemIndex) => {
        const updatedGroupItems = groupedOptions[groupName].map((grpItem, index) => index === itemIndex ? { ...grpItem, selected: !isSelected } : grpItem);
        setGroupedOptions((prev) => ({
            ...prev,
            [groupName]: updatedGroupItems,
        }));
    };
    const renderGroupedOptions = () => {
        const groupNames = Object.keys(groupedOptions).sort();
        if (groupNames.length === 0) {
            return (_jsxs("div", { className: cn(s['p-4'], s['text-center'], s['text-gray-500']), children: [_jsx(Icon, { nameIcon: "FaSearch", propsIcon: {
                            size: 24,
                            color: '#ccc',
                        } }), _jsx("p", { className: cn(s['mt-2'], s['text-sm']), children: "No results found" }), _jsx("p", { className: cn(s['text-xs']), children: "Try adjusting your search terms" })] }));
        }
        return groupNames.map((groupName) => {
            const groupItems = groupedOptions[groupName] || [];
            const isCollapsed = collapsedGroups.has(groupName);
            const selectedInGroup = groupItems.filter((item) => item.selected).length;
            return (_jsxs("div", { className: cn(s['border-b'], s['border-gray-200'], s['last:border-b-0']), children: [showGroupHeaders && (_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['p-3'], s['bg-gray-50'], s['border-b'], s['border-gray-200'], s['font-semibold'], s['text-sm'], s['text-gray-700'], collapsibleGroups && s['cursor-pointer'], s['hover:bg-gray-100']), onClick: () => collapsibleGroups && toggleGroupCollapse(groupName), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), children: [collapsibleGroups && (_jsx(Icon, { nameIcon: isCollapsed ? 'FaChevronRight' : 'FaChevronDown', propsIcon: {
                                            size: 12,
                                            color: '#666',
                                        } })), _jsx("span", { className: cn(s['font-bold'], s['text-blue-700']), children: groupName }), _jsxs("span", { className: cn(s['text-xs'], s['bg-blue-100'], s['text-blue-800'], s['px-2'], s['py-1'], s['rounded-full']), children: [selectedInGroup, "/", groupItems.length] })] }), _jsxs("div", { className: cn(s['flex'], s['gap-1']), children: [_jsx("button", { type: "button", onClick: (e) => {
                                            e.stopPropagation();
                                            handleGroupSelectAll(groupName, groupItems, true);
                                        }, className: cn(s['text-xs'], s['px-2'], s['py-1'], s['bg-green-500'], s['text-white'], s['rounded'], s['hover:bg-green-600'], s['transition-colors'], 
                                        // Add disabled styling
                                        selectedInGroup === groupItems.length && s['opacity-50'], selectedInGroup === groupItems.length &&
                                            s['cursor-not-allowed']), title: `Select all in ${groupName}`, disabled: selectedInGroup === groupItems.length, children: "All" }), _jsx("button", { type: "button", onClick: (e) => {
                                            e.stopPropagation();
                                            handleGroupSelectAll(groupName, groupItems, false);
                                        }, className: cn(s['text-xs'], s['px-2'], s['py-1'], s['bg-gray-500'], s['text-white'], s['rounded'], s['hover:bg-gray-600'], s['transition-colors'], 
                                        // Add disabled styling
                                        selectedInGroup === 0 && s['opacity-50'], selectedInGroup === 0 && s['cursor-not-allowed']), title: `Deselect all in ${groupName}`, disabled: selectedInGroup === 0, children: "None" })] })] })), (!collapsibleGroups || !isCollapsed) && (_jsx("div", { className: cn(s['max-h-60'], s['overflow-y-auto']), children: groupItems.map((item, index) => (_jsx("div", { className: cn(s['flex'], s['items-center'], s['gap-3'], s['p-3'], s['hover:bg-blue-50'], s['border-l-4'], s['border-transparent'], item.selected && s['border-blue-500'], item.selected && s['bg-blue-50'], s['transition-colors']), children: _jsxs("label", { className: cn(s['flex'], s['items-center'], s['cursor-pointer'], s['w-full']), children: [_jsx("input", { id: `${groupName}-${index}`, className: cn(s['h-4'], s['w-4'], s['text-blue-600'], s['border-gray-300'], s['rounded'], s['focus:ring-blue-500'], s['cursor-pointer']), type: "checkbox", checked: item.selected || false, onChange: () => {
                                            handleGroupSelectToggle(groupName, item.selected, index);
                                        } }), _jsx("div", { className: cn(s['ml-3'], s['flex'], s['flex-col']), children: _jsx("span", { className: cn(s['text-sm'], s['font-medium'], item.selected && s['text-blue-700']), children: data.displayKey
                                                ? data.displayKey
                                                    .map((key) => item[key])
                                                    .filter(Boolean)
                                                    .join(' - ')
                                                : item.name || item.code || 'Unnamed Item' }) })] }) }, `${groupName}-${item[uniqueField] || index}`))) }))] }, groupName));
        });
    };
    const getSelectedCount = () => {
        let count = 0;
        Object.values(groupedOptions).forEach((groupItems) => {
            count += groupItems.filter((item) => item.selected).length;
        });
        return count;
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red-500']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }, s['bg-white']), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen ? `${getSelectedCount()} Items Selected` : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-transparent']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }), loader ? (_jsx("div", { className: cn(s['animate-spin'], s['w-4'], s['h-4']), children: _jsx(Icon, { nameIcon: "FaSpinner", propsIcon: {
                                    size: 16,
                                    color: '#666',
                                } }) })) : (_jsx(Icon, { nameIcon: isListOpen ? 'FaChevronUp' : 'FaChevronDown', propsIcon: {
                                size: 16,
                                color: '#000000',
                            } }))] }), isListOpen && (_jsxs("div", { className: cn(s['mt-1'], s['absolute'], s['rounded-md'], s['bg-white'], s['border'], s['border-gray-300'], s['shadow-lg'], s['z-50'], s['w-full'], s['max-h-96'], s['overflow-hidden']), style: { zIndex: 1000 }, children: [_jsx("div", { className: cn(s['p-3'], s['border-b'], s['border-gray-200'], s['bg-gray-50'], s['text-sm'], s['font-medium'], s['text-gray-700']), children: _jsxs("div", { className: cn(s['flex'], s['justify-between'], s['items-center']), children: [_jsxs("span", { children: [Object.keys(groupedOptions).length, ' ', groupByDetails.groupByName?.toUpperCase(), ", ", totalItems, ' ', groupByDetails.totalItemName?.toUpperCase()] }), _jsxs("span", { className: cn(s['text-blue-600']), children: [getSelectedCount(), " Selected"] })] }) }), _jsx("div", { className: cn(s['max-h-80'], s['overflow-y-auto']), children: renderGroupedOptions() })] }))] }) }));
};
