import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const AutoCompleteFilterGroupByMultipleSelectMultipleFieldsDisplay = ({ uniqueField = '_id', groupByField, selectionConfig = {}, displayConfig = {}, uiConfig = {}, loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, groupByDetails, onFilter, onUpdate, onSelect, onClearAll, onBlur, className, style, filterDebounceDelay = 500, optionsRenderKey, }) => {
    // Merge configs with defaults
    const { isSelectedStringArray = false, maxSelection, onSelectionChange, } = selectionConfig;
    const { displayKeys, displaySeparator = ' - ', fallbackKeys = ['name', 'code'], renderItem, renderGroupName, } = displayConfig;
    const { showGroupHeaders = true, collapsibleGroups = false, showSelectAllButtons = true, showSelectedSection = true, selectedPlaceholder, emptyStateMessage = 'No results found', emptyStateDescription = 'Try adjusting your search terms', enableInternalFilter = false, showGroupSearch = false, groupSearchMinItems = 5, } = uiConfig;
    // Get groupByField from props or legacy groupByDetails
    const groupField = groupByField || groupByDetails?.groupByName || 'lab';
    const defaultGroupName = groupByDetails?.defaultGroupName || 'Default';
    const totalItemName = groupByDetails?.totalItemName || 'department';
    // Helper to get display text for item
    const getItemDisplayText = (item) => {
        if (renderItem) {
            const rendered = renderItem(item);
            if (typeof rendered === 'string')
                return rendered;
        }
        const keys = displayKeys || data.displayKey || fallbackKeys;
        return (keys
            .map((key) => item[key])
            .filter(Boolean)
            .join(displaySeparator) || 'Unnamed Item');
    };
    // Helper to get group name display
    const getGroupNameDisplay = (groupName, count) => {
        if (renderGroupName) {
            return renderGroupName(groupName, count);
        }
        return groupName;
    };
    const [value, setValue] = useState('');
    const [groupedOptions, setGroupedOptions] = useState({});
    const [originalGroupedOptions, setOriginalGroupedOptions] = useState({});
    const [selectedItems, setSelectedItems] = useState([]);
    const [collapsedGroups, setCollapsedGroups] = useState(new Set());
    const [isListOpen, setIsListOpen] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    // Internal filter state
    const [internalFilterText, setInternalFilterText] = useState('');
    const [groupFilters, setGroupFilters] = useState({});
    // Filter items based on display text
    const filterItems = useCallback((items, searchText) => {
        if (!searchText || searchText.trim() === '')
            return items;
        const lowerSearch = searchText.toLowerCase().trim();
        const keys = displayKeys || data.displayKey || fallbackKeys;
        return items.filter((item) => {
            // Search across all display keys
            return keys.some((key) => {
                const value = item[key];
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(lowerSearch);
                }
                if (typeof value === 'number') {
                    return value.toString().includes(lowerSearch);
                }
                return false;
            });
        });
    }, [displayKeys, data.displayKey, fallbackKeys]);
    // Get filtered options based on internal filter and group filters
    const getFilteredGroupedOptions = useCallback(() => {
        const result = {};
        const searchText = internalFilterText.trim();
        Object.keys(groupedOptions).forEach((groupKey) => {
            const groupItems = groupedOptions[groupKey] || [];
            // Apply global filter first
            let filteredItems = searchText
                ? filterItems(groupItems, searchText)
                : groupItems;
            // Apply group-specific filter if exists
            const groupSearch = groupFilters[groupKey]?.trim();
            if (groupSearch) {
                filteredItems = filterItems(filteredItems, groupSearch);
            }
            // Only include groups with matching items
            if (filteredItems.length > 0) {
                result[groupKey] = filteredItems;
            }
        });
        return result;
    }, [groupedOptions, internalFilterText, groupFilters, filterItems]);
    // Handle group-specific search
    const handleGroupSearch = (groupName, searchValue) => {
        setGroupFilters((prev) => ({
            ...prev,
            [groupName]: searchValue,
        }));
    };
    // Clear group filter
    const clearGroupFilter = (groupName) => {
        setGroupFilters((prev) => {
            const newFilters = { ...prev };
            delete newFilters[groupName];
            return newFilters;
        });
    };
    // Helper to get selected groups
    const getSelectedGroups = React.useCallback(() => {
        return Object.keys(originalGroupedOptions).reduce((acc, groupKey) => {
            const selectedItems = (originalGroupedOptions[groupKey] || []).filter((item) => item.selected);
            if (selectedItems.length > 0) {
                acc[groupKey] = selectedItems;
            }
            return acc;
        }, {});
    }, [originalGroupedOptions]);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current &&
                    !ref.current.contains(event.target) &&
                    isListOpen) {
                    const selectedGroups = getSelectedGroups();
                    onSelect && onSelect(selectedGroups);
                    // Call onUpdate when user clicks outside
                    const flatList = getFlatListFromGroupedOptions(groupedOptions);
                    onUpdate && onUpdate(flatList);
                    setIsListOpen(false);
                    setValue('');
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [
            ref,
            isListOpen,
            getSelectedGroups,
            onSelect,
            groupedOptions,
            getFlatListFromGroupedOptions,
            onUpdate,
        ]);
    };
    // Helper to get flat list from grouped options for onUpdate callback
    const getFlatListFromGroupedOptions = useCallback((grouped) => {
        return Array.isArray(grouped)
            ? grouped.flat(Number.POSITIVE_INFINITY)
            : Object.values(grouped).flat(Number.POSITIVE_INFINITY);
    }, []);
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
    // Compute a key from data.list to detect changes (helps with MobX observables)
    const dataListKey = React.useMemo(() => {
        if (!data.list)
            return '';
        if (Array.isArray(data.list)) {
            return data.list.length.toString();
        }
        // For grouped data, create a key from group names and item counts
        const groups = Object.keys(data.list);
        return groups
            .map((g) => `${g}:${data.list[g]?.length || 0}`)
            .join(',');
    }, [data.list]);
    useEffect(() => {
        // Handle both grouped data structure and regular list structure
        let processedData = {};
        if (data.list && Array.isArray(data.list)) {
            // If data.list is an array, group by the specified field
            const grouped = data.list.reduce((groups, item) => {
                const groupKey = item?.[groupField] || defaultGroupName;
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
        // Store both original and current grouped options
        setOriginalGroupedOptions(processedData);
        setGroupedOptions(processedData);
        // Extract and maintain selected items separately
        const allSelected = [];
        Object.keys(processedData).forEach((groupKey) => {
            const selectedInGroup = (processedData[groupKey] || []).filter((item) => item.selected);
            allSelected.push(...selectedInGroup);
        });
        setSelectedItems(Array.isArray(data?.selected) && !isSelectedStringArray
            ? data.selected
            : allSelected);
    }, [
        data.list,
        data.selected,
        isSelectedStringArray,
        uniqueField,
        groupField,
        defaultGroupName,
        dataListKey, // Computed key to detect data.list changes
    ]);
    // Store onFilter in ref to avoid recreating debounce when callback changes
    const onFilterRef = useRef(onFilter);
    onFilterRef.current = onFilter;
    // Store timeout ref for proper cleanup
    const debounceTimeoutRef = useRef(null);
    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, []);
    // Debounced filter using useCallback with stable reference
    const debouncedFilter = useCallback((search) => {
        if (!onFilterRef.current)
            return;
        // Clear any existing timeout
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        // Set new timeout
        debounceTimeoutRef.current = setTimeout(() => {
            onFilterRef.current?.(search);
        }, filterDebounceDelay);
    }, [filterDebounceDelay]);
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        // Use internal filtering if enabled
        if (enableInternalFilter) {
            setInternalFilterText(search);
        }
        // Also call external filter if provided
        debouncedFilter(search);
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.currentTarget.value;
            if (enableInternalFilter) {
                setInternalFilterText(search);
            }
            debouncedFilter(search);
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
        // Update originalGroupedOptions to maintain consistency
        setOriginalGroupedOptions((prev) => ({
            ...prev,
            [groupName]: updatedGroupItems,
        }));
        // Update selected items list
        if (selectAll) {
            // Add all items from this group to selected items
            const newSelectedItems = [...selectedItems];
            groupItems.forEach((item) => {
                const existingIndex = newSelectedItems.findIndex((selected) => selected[uniqueField] === item[uniqueField]);
                if (existingIndex === -1) {
                    newSelectedItems.push({ ...item, selected: true });
                }
            });
            setSelectedItems(newSelectedItems);
        }
        else {
            // Remove all items from this group from selected items
            const newSelectedItems = selectedItems.filter((selectedItem) => {
                return !groupItems.some((groupItem) => groupItem[uniqueField] === selectedItem[uniqueField]);
            });
            setSelectedItems(newSelectedItems);
        }
    };
    const handleGroupSelectToggle = (groupName, isSelected, itemIndex) => {
        const item = groupedOptions[groupName][itemIndex];
        const updatedGroupItems = groupedOptions[groupName].map((grpItem, index) => index === itemIndex ? { ...grpItem, selected: !isSelected } : grpItem);
        setGroupedOptions((prev) => ({
            ...prev,
            [groupName]: updatedGroupItems,
        }));
        // Update originalGroupedOptions to maintain consistency
        setOriginalGroupedOptions((prev) => ({
            ...prev,
            [groupName]: updatedGroupItems,
        }));
        // Update selected items list
        if (!isSelected) {
            // Add item to selected items
            setSelectedItems((prev) => [...prev, { ...item, selected: true }]);
        }
        else {
            // Remove item from selected items
            setSelectedItems((prev) => prev.filter((selectedItem) => selectedItem[uniqueField] !== item[uniqueField]));
        }
    };
    // Handle individual item deselection from selected section
    const handleDeselectItem = (itemToDeselect) => {
        // Remove from selected items
        setSelectedItems((prev) => prev.filter((item) => item[uniqueField] !== itemToDeselect[uniqueField]));
        // Update both grouped options
        Object.keys(groupedOptions).forEach((groupKey) => {
            const updatedGroupItems = groupedOptions[groupKey].map((item) => {
                if (item[uniqueField] === itemToDeselect[uniqueField]) {
                    return { ...item, selected: false };
                }
                return item;
            });
            setGroupedOptions((prev) => ({
                ...prev,
                [groupKey]: updatedGroupItems,
            }));
            setOriginalGroupedOptions((prev) => ({
                ...prev,
                [groupKey]: updatedGroupItems,
            }));
        });
    };
    // Clear all selected items and notify consumer if provided
    const handleClearAll = () => {
        const clearedGroupedOptions = {};
        Object.keys(groupedOptions).forEach((groupKey) => {
            const clearedItems = (groupedOptions[groupKey] || []).map((item) => ({
                ...item,
                selected: false,
            }));
            clearedGroupedOptions[groupKey] = clearedItems;
        });
        setGroupedOptions(clearedGroupedOptions);
        setOriginalGroupedOptions(clearedGroupedOptions);
        setSelectedItems([]);
        onClearAll?.();
    };
    const renderGroupedOptions = () => {
        // Use filtered options instead of raw groupedOptions
        const filteredOptions = getFilteredGroupedOptions();
        const groupNames = Object.keys(filteredOptions).sort();
        if (groupNames.length === 0) {
            return (_jsxs("div", { className: cn(s['p-4'], s['text-center'], s['text-gray-500']), children: [_jsx(Icon, { nameIcon: "FaSearch", propsIcon: {
                            size: 24,
                            color: '#ccc',
                        } }), _jsx("p", { className: cn(s['mt-2'], s['text-sm']), children: emptyStateMessage }), _jsx("p", { className: cn(s['text-xs']), children: emptyStateDescription }), internalFilterText && (_jsx("button", { type: "button", onClick: () => {
                            setInternalFilterText('');
                            setValue('');
                        }, className: cn(s['mt-3'], s['text-xs'], s['px-3'], s['py-1'], s['bg-blue-500'], s['text-white'], s['rounded'], s['hover:bg-blue-600']), children: "Clear Search" }))] }));
        }
        return groupNames.map((groupName) => {
            const groupItems = filteredOptions[groupName] || [];
            // Get original group items for accurate counts
            const originalGroupItems = groupedOptions[groupName] || [];
            const isCollapsed = collapsedGroups.has(groupName);
            const selectedInGroup = originalGroupItems.filter((item) => item.selected).length;
            const unselectedInGroup = groupItems.filter((item) => !item.selected);
            const hasGroupFilter = !!groupFilters[groupName];
            const showGroupSearchInput = showGroupSearch && originalGroupItems.length >= groupSearchMinItems;
            return (_jsxs("div", { className: cn(s['border-b'], s['border-gray-200'], s['last:border-b-0']), children: [showGroupHeaders && (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['bg-gradient-to-r'], s['from-blue-50'], s['to-indigo-50'], s['border-b'], s['border-blue-200']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['p-3'], s['font-semibold'], s['text-sm'], s['text-gray-700'], collapsibleGroups && s['cursor-pointer'], s['hover:bg-blue-100'], s['transition-colors']), onClick: () => collapsibleGroups && toggleGroupCollapse(groupName), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), children: [collapsibleGroups && (_jsx(Icon, { nameIcon: isCollapsed ? 'FaChevronRight' : 'FaChevronDown', propsIcon: {
                                                    size: 12,
                                                    color: '#4F46E5',
                                                } })), _jsx("span", { className: cn(s['font-bold'], s['text-indigo-700'], s['text-base']), children: getGroupNameDisplay(groupName, originalGroupItems.length) }), _jsxs("span", { className: cn(s['text-xs'], s['bg-indigo-100'], s['text-indigo-800'], s['px-2'], s['py-1'], s['rounded-full'], s['font-medium']), children: [selectedInGroup, "/", originalGroupItems.length] }), groupItems.length !== originalGroupItems.length && (_jsxs("span", { className: cn(s['text-xs'], s['bg-amber-100'], s['text-amber-800'], s['px-2'], s['py-1'], s['rounded-full']), children: [groupItems.length, " shown"] }))] }), showSelectAllButtons && (_jsxs("div", { className: cn(s['flex'], s['gap-1']), children: [_jsx("button", { type: "button", onClick: (e) => {
                                                    e.stopPropagation();
                                                    handleGroupSelectAll(groupName, originalGroupItems, true);
                                                }, className: cn(s['text-xs'], s['px-2'], s['py-1'], s['bg-emerald-500'], s['text-white'], s['rounded'], s['hover:bg-emerald-600'], s['transition-colors'], s['shadow-sm'], selectedInGroup === originalGroupItems.length &&
                                                    s['opacity-50'], selectedInGroup === originalGroupItems.length &&
                                                    s['cursor-not-allowed']), title: `Select all in ${groupName}`, disabled: selectedInGroup === originalGroupItems.length, children: "All" }), _jsx("button", { type: "button", onClick: (e) => {
                                                    e.stopPropagation();
                                                    handleGroupSelectAll(groupName, originalGroupItems, false);
                                                }, className: cn(s['text-xs'], s['px-2'], s['py-1'], s['bg-slate-500'], s['text-white'], s['rounded'], s['hover:bg-slate-600'], s['transition-colors'], s['shadow-sm'], selectedInGroup === 0 && s['opacity-50'], selectedInGroup === 0 && s['cursor-not-allowed']), title: `Deselect all in ${groupName}`, disabled: selectedInGroup === 0, children: "None" })] }))] }), showGroupSearchInput && !isCollapsed && (_jsx("div", { className: cn(s['px-3'], s['pb-2']), children: _jsxs("div", { className: cn(s['relative']), children: [_jsx("input", { type: "text", placeholder: `Search in ${groupName}...`, value: groupFilters[groupName] || '', onChange: (e) => handleGroupSearch(groupName, e.target.value), onClick: (e) => e.stopPropagation(), className: cn(s['w-full'], s['px-3'], s['py-1.5'], s['text-sm'], s['border'], s['border-indigo-200'], s['rounded-md'], s['focus:outline-none'], s['focus:ring-2'], s['focus:ring-indigo-300'], s['focus:border-indigo-400'], s['bg-white'], s['placeholder-gray-400']) }), hasGroupFilter && (_jsx("button", { type: "button", onClick: (e) => {
                                                e.stopPropagation();
                                                clearGroupFilter(groupName);
                                            }, className: cn(s['absolute'], s['right-2'], s['top-1/2'], s['-translate-y-1/2'], s['text-gray-400'], s['hover:text-gray-600']), children: _jsx(Icon, { nameIcon: "FaTimes", propsIcon: {
                                                    size: 12,
                                                    color: 'currentColor',
                                                } }) }))] }) }))] })), (!collapsibleGroups || !isCollapsed) && (_jsxs("div", { className: cn(s['max-h-60'], s['overflow-y-auto']), children: [unselectedInGroup.map((item, index) => (_jsx("div", { className: cn(s['flex'], s['items-center'], s['gap-3'], s['p-3'], s['hover:bg-blue-50'], s['border-l-4'], s['border-transparent'], s['transition-colors']), children: _jsxs("label", { className: cn(s['flex'], s['items-center'], s['cursor-pointer'], s['w-full']), children: [_jsx("input", { id: `${groupName}-${index}`, className: cn(s['h-4'], s['w-4'], s['text-blue-600'], s['border-gray-300'], s['rounded'], s['focus:ring-blue-500'], s['cursor-pointer']), type: "checkbox", checked: false, onChange: () => {
                                                const itemIndex = groupedOptions[groupName].findIndex((grpItem) => grpItem[uniqueField] === item[uniqueField]);
                                                handleGroupSelectToggle(groupName, false, itemIndex);
                                            } }), _jsx("div", { className: cn(s['ml-3'], s['flex'], s['flex-col']), children: renderItem ? (renderItem(item)) : (_jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['text-gray-700']), children: getItemDisplayText(item) })) })] }) }, `${groupName}-${item[uniqueField] || index}`))), unselectedInGroup.length === 0 && groupItems.length > 0 && (_jsx("div", { className: cn(s['p-3'], s['text-center'], s['text-gray-500'], s['text-sm']), children: "All items in this group are selected" }))] }))] }, groupName));
        });
    };
    const getSelectedCount = () => {
        return selectedItems?.length;
    };
    // Call selection change callback when selection updates
    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(getSelectedGroups());
        }
    }, [groupedOptions, onSelectionChange, getSelectedGroups]);
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative'], className), style: style, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }, s['bg-white']), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? getSelectedCount() > 0
                                    ? typeof selectedPlaceholder === 'function'
                                        ? selectedPlaceholder(getSelectedCount())
                                        : selectedPlaceholder ||
                                            `${getSelectedCount()} Items Selected`
                                    : placeholder
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-transparent']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }), loader ? (_jsx("div", { className: cn(s['animate-spin'], s['w-4'], s['h-4']), children: _jsx(Icon, { nameIcon: "FaSpinner", propsIcon: {
                                    size: 16,
                                    color: '#666',
                                } }) })) : (_jsx(Icon, { nameIcon: isListOpen ? 'FaChevronUp' : 'FaChevronDown', propsIcon: {
                                size: 16,
                                color: '#000000',
                            } }))] }), isListOpen && (_jsxs("div", { className: cn(s['mt-1'], s['absolute'], s['rounded-md'], s['bg-white'], s['border'], s['border-gray-300'], s['shadow-lg'], s['z-50'], s['w-full'], s['max-h-96'], s['overflow-hidden']), style: { zIndex: 1000 }, children: [_jsx("div", { className: cn(s['p-3'], s['border-b'], s['border-gray-200'], s['bg-gray-50'], s['text-sm'], s['font-medium'], s['text-gray-700']), children: _jsxs("div", { className: cn(s['flex'], s['justify-between'], s['items-center']), children: [_jsxs("span", { children: [Object.keys(groupedOptions).length, ' ', groupField?.toUpperCase(), ", ", totalItems, ' ', totalItemName?.toUpperCase()] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: cn(s['text-blue-600']), children: [getSelectedCount(), " Selected"] }), _jsxs("div", { className: cn(s['flex'], s['gap-2'], s['items-center']), children: [_jsx("button", { type: "button", className: cn(s['text-xs'], s['px-3'], s['py-1'], s['bg-gray-200'], s['text-gray-700'], s['rounded'], s['hover:bg-gray-300'], s['transition-colors'], s['disabled:opacity-50'], s['disabled:cursor-not-allowed']), disabled: getSelectedCount() === 0, onClick: handleClearAll, children: "Clear All" }), _jsx("button", { type: "button", className: cn(s['text-xs'], s['px-3'], s['py-1'], s['bg-blue-600'], s['text-white'], s['rounded'], s['hover:bg-blue-700'], s['transition-colors']), onClick: () => {
                                                            const selectedGroups = getSelectedGroups();
                                                            onSelect(selectedGroups);
                                                            // Call onUpdate when user clicks OK
                                                            const flatList = getFlatListFromGroupedOptions(groupedOptions);
                                                            onUpdate && onUpdate(flatList);
                                                            setIsListOpen(false);
                                                            setValue('');
                                                        }, children: "OK" })] })] })] }) }), _jsxs("div", { className: cn(s['max-h-80'], s['overflow-y-auto']), children: [showSelectedSection && getSelectedCount() > 0 && (_jsxs("div", { className: cn(s['border-b'], s['border-gray-200']), children: [_jsx("div", { className: cn(s['p-3'], s['bg-blue-50'], s['border-b'], s['border-blue-200'], s['font-semibold'], s['text-sm'], s['text-blue-700']), children: _jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), children: [_jsx(Icon, { nameIcon: "FaCheck", propsIcon: {
                                                            size: 12,
                                                            color: '#1976d2',
                                                        } }), _jsxs("span", { children: ["Selected Items (", getSelectedCount(), ")"] })] }) }), _jsx("div", { className: cn(s['max-h-48'], s['overflow-y-auto']), children: selectedItems?.map((item, index) => (_jsx("div", { className: cn(s['flex'], s['items-center'], s['gap-3'], s['p-3'], s['hover:bg-blue-50'], s['border-l-4'], s['border-blue-500'], s['bg-blue-25'], s['transition-colors']), children: _jsxs("label", { className: cn(s['flex'], s['items-center'], s['cursor-pointer'], s['w-full']), children: [_jsx("input", { type: "checkbox", checked: true, onChange: () => handleDeselectItem(item), className: cn(s['h-4'], s['w-4'], s['text-blue-600'], s['border-gray-300'], s['rounded'], s['focus:ring-blue-500'], s['cursor-pointer']) }), _jsx("div", { className: cn(s['ml-3'], s['flex'], s['flex-col']), children: renderItem ? (renderItem(item)) : (_jsxs(_Fragment, { children: [_jsx("span", { className: cn(s['text-sm'], s['font-medium'], s['text-blue-700']), children: getItemDisplayText(item) }), _jsx("span", { className: cn(s['text-xs'], s['text-gray-500']), children: item[groupField] || defaultGroupName })] })) })] }) }, `selected-${item[uniqueField] || index}`))) })] })), _jsx("div", { children: renderGroupedOptions() })] })] }, optionsRenderKey))] }) }));
};
