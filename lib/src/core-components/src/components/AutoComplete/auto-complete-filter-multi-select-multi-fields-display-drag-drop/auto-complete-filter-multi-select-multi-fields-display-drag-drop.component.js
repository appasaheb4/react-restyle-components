import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../../Icon/Icon';
import { LoadingAnimateSpin } from '../../Loader/loader.component';
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, horizontalListSortingStrategy, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const DraggableSelectedItem = ({ item, index, onRemove, displayKey, uniqueField = 'sort', displayConfig = {}, className, style: customStyle, }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item[uniqueField] || item.sort || index.toString() });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        ...customStyle,
    };
    const getItemDisplayText = () => {
        const keys = displayConfig.displayKeys || displayKey || ['name', 'code'];
        const separator = displayConfig.displaySeparator || ' - ';
        return (keys
            .map((key) => item[key])
            .filter(Boolean)
            .join(separator) || 'Unnamed Item');
    };
    const handleRemove = (e) => {
        e.stopPropagation();
        onRemove(index);
    };
    if (displayConfig.renderSelectedBadge) {
        return (_jsx("div", { ref: setNodeRef, style: style, ...attributes, ...listeners, children: displayConfig.renderSelectedBadge(item, index, () => onRemove(index)) }));
    }
    return (_jsxs("div", { ref: setNodeRef, style: style, ...attributes, ...listeners, className: cn(s['flex'], s['text-white'], s['gap-1'], s['bg-blue-500'], s['p-1'], s['rounded'], s['cursor-move'], className), children: [_jsx("div", { className: cn(s['flex'], s['w-fit'], s['cursor-pointer'], s['items-center']), onClick: handleRemove, children: _jsx(Icon, { nameIcon: "BsTrashFill", propsIcon: { size: 16, color: 'white' } }) }), _jsx("span", { children: getItemDisplayText() })] }));
};
export const AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop = ({ componentKey, uniqueField = '_id', loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, defaultValue = '', displayConfig = {}, dragDropConfig = {}, selectionConfig = {}, uiConfig = {}, onFilter, onUpdate, onSelect, onBlur, className, style, filterDebounceDelay = 300, }) => {
    // Merge configs with defaults
    const { enabled: dragDropEnabled = true, strategy = horizontalListSortingStrategy, onDragEnd: customOnDragEnd, animationDuration = 200, } = dragDropConfig;
    const { maxSelection, onSelectionChange } = selectionConfig;
    const { showSelectedSection = true, selectedPlaceholder, emptyStateMessage = 'No items available', maxHeight = 'calc(100vh - 20vh)', zIndex = 80, } = uiConfig;
    // Helper to get display text for item
    const getItemDisplayText = (item) => {
        if (displayConfig.renderItem) {
            const rendered = displayConfig.renderItem(item);
            if (typeof rendered === 'string')
                return rendered;
        }
        const keys = displayConfig.displayKeys ||
            data.displayKey ||
            displayConfig.fallbackKeys || ['name', 'code'];
        const separator = displayConfig.displaySeparator || ' - ';
        return (keys
            .map((key) => item[key])
            .filter(Boolean)
            .join(separator) || 'Unnamed Item');
    };
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [originalOptions, setOriginalOptions] = useState([]);
    const [isListOpen, setIsListOpen] = useState(false);
    const refSelectedItems = useRef(data?.selected || []);
    const [selectedItems, setSelectedItems] = useState(data?.selected || []);
    const sensors = useSensors(useSensor(PointerSensor));
    useEffect(() => {
        if (defaultValue)
            setValue(defaultValue);
    }, [defaultValue]);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current &&
                    !ref.current.contains(event.target) &&
                    isListOpen) {
                    onUpdate(refSelectedItems.current);
                    setIsListOpen(false);
                    setValue('');
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen, onUpdate]);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const getSelectedItem = (selectedItem, list) => {
        return list.map((item) => {
            const isSelected = selectedItem && selectedItem.length > 0
                ? selectedItem.some((sItem) => sItem[uniqueField] === item[uniqueField])
                : false;
            return {
                ...item,
                selected: isSelected,
            };
        });
    };
    useEffect(() => {
        const selected = data?.selected || [];
        const list = data?.list || [];
        setOriginalOptions(getSelectedItem(selected, list));
        setOptions(getSelectedItem(selected, list));
        // Update both ref and state with sort field for drag-drop
        const itemsWithSort = selected.map((sItem, index) => ({
            ...sItem,
            sort: index.toString(),
        }));
        refSelectedItems.current = itemsWithSort;
        setSelectedItems(itemsWithSort);
        // Call selection change callback
        if (onSelectionChange) {
            onSelectionChange(itemsWithSort);
        }
    }, [data, data?.selected, uniqueField, onSelectionChange]);
    const debouncedFilter = React.useMemo(() => {
        if (!onFilter)
            return () => { };
        let timeout;
        return (search) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onFilter(search);
            }, filterDebounceDelay);
        };
    }, [onFilter, filterDebounceDelay]);
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        debouncedFilter(search);
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.currentTarget.value;
            debouncedFilter(search);
        }
    };
    const onDragEnd = (event) => {
        if (!dragDropEnabled)
            return;
        const { active, over } = event;
        if (!over || active.id === over.id)
            return;
        const oldIndex = refSelectedItems.current.findIndex((item) => item.sort === active.id || item[uniqueField] === active.id);
        const newIndex = refSelectedItems.current.findIndex((item) => item.sort === over.id || item[uniqueField] === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
            const reorderedItems = arrayMove(refSelectedItems.current, oldIndex, newIndex);
            // Update sort values to maintain proper order
            const updatedItems = reorderedItems.map((item, index) => ({
                ...item,
                sort: index.toString(),
            }));
            // Update both ref and state to trigger re-render
            refSelectedItems.current = updatedItems;
            setSelectedItems([...updatedItems]);
            // Call custom onDragEnd callback
            if (customOnDragEnd) {
                customOnDragEnd(updatedItems);
            }
            // Call selection change callback
            if (onSelectionChange) {
                onSelectionChange(updatedItems);
            }
        }
    };
    const handleRemoveItem = (index) => {
        const firstArr = refSelectedItems.current?.slice(0, index) || [];
        const secondArr = refSelectedItems.current?.slice(index + 1) || [];
        const fieldsList = [...firstArr, ...secondArr];
        // Update sort values after removal
        const updatedItems = fieldsList.map((item, idx) => ({
            ...item,
            sort: idx.toString(),
        }));
        refSelectedItems.current = updatedItems;
        setSelectedItems([...updatedItems]);
        // Call selection change callback
        if (onSelectionChange) {
            onSelectionChange(updatedItems);
        }
    };
    const handleSelectItem = (item) => {
        // Check max selection limit
        if (maxSelection &&
            selectedItems.length >= maxSelection &&
            !item.selected) {
            return;
        }
        onSelect(item);
        // Update selected items after selection change
        setTimeout(() => {
            const updatedItems = (data?.selected || []).map((sItem, index) => ({
                ...sItem,
                sort: index.toString(),
            }));
            refSelectedItems.current = updatedItems;
            setSelectedItems(updatedItems);
            if (onSelectionChange) {
                onSelectionChange(updatedItems);
            }
        }, 0);
    };
    const getSelectedPlaceholder = () => {
        const count = selectedItems.length;
        if (typeof selectedPlaceholder === 'function') {
            return selectedPlaceholder(count);
        }
        return selectedPlaceholder || `${count} Items`;
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative'], className), style: style, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? selectedItems.length > 0
                                    ? getSelectedPlaceholder()
                                    : placeholder
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e), id: componentKey ? `${componentKey}_input_text` : undefined }, componentKey ? `${componentKey}_input` : undefined), loader && _jsx(LoadingAnimateSpin, {}), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: { size: 16 } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: { size: 16 } }))] }), options && isListOpen && (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['absolute'], s['rounded-sm'], s['z-500'], s['w-full']), style: { zIndex }, children: [showSelectedSection && selectedItems.length > 0 && (_jsx("div", { className: cn(s['flex'], s['w-full'], s['bg-gray-400']), children: dragDropEnabled ? (_jsx(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: onDragEnd, children: _jsx(SortableContext, { items: selectedItems.map((item, idx) => item.sort || item[uniqueField] || idx.toString()), strategy: strategy, children: _jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-1'], s['bg-gray-400'], s['p-1']), children: selectedItems.map((item, index) => (_jsx(DraggableSelectedItem, { item: item, index: index, onRemove: handleRemoveItem, displayKey: data.displayKey, uniqueField: "sort", displayConfig: displayConfig }, item.sort || item[uniqueField] || index))) }) }) })) : (_jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-1'], s['bg-gray-400'], s['p-1']), children: selectedItems.map((item, index) => (_jsx(DraggableSelectedItem, { item: item, index: index, onRemove: handleRemoveItem, displayKey: data.displayKey, uniqueField: uniqueField, displayConfig: displayConfig }, item[uniqueField] || index))) })) })), options.length > 0 ? (_jsx("ul", { className: cn(s['flex'], s['flex-col'], s['gap-1'], s['bg-gray-200'], s['p-2'], s['overflow-y-scroll'], s['w-full']), id: componentKey ? `${componentKey}_listView` : undefined, style: { maxHeight }, children: options.map((item, index) => (_jsx("li", { className: cn(s['flex'], s['gap-4'], s['p-1']), children: _jsxs("label", { className: cn(s['flex'], s['items-center']), children: [_jsx("input", { className: cn(s['flex'], s['h-4'], s['w-4']), type: "checkbox", checked: item.selected || false, onChange: () => handleSelectItem(item), disabled: maxSelection
                                                ? selectedItems.length >= maxSelection &&
                                                    !item.selected
                                                : false, id: componentKey
                                                ? `${componentKey}_${index}_check_box_view`
                                                : undefined }, componentKey
                                            ? `${componentKey}_${index}_check_box_view`
                                            : undefined), _jsx("span", { className: cn(s['flex'], s['ml-2']), children: displayConfig.renderItem
                                                ? displayConfig.renderItem(item)
                                                : getItemDisplayText(item) })] }) }, `${componentKey || 'item'}_${index}_list`))) }, componentKey ? `${componentKey}_listView` : undefined)) : (_jsx("div", { className: cn(s['p-4'], s['text-center'], s['text-gray-500']), children: _jsx("p", { className: cn(s['text-sm']), children: emptyStateMessage }) }))] }, componentKey ? `${componentKey}_list_wrapper_view` : undefined))] }, componentKey ? `${componentKey}_wrapperView` : undefined) }));
};
