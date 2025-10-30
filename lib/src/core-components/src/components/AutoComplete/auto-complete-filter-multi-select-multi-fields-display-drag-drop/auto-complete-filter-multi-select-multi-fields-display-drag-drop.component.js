import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef } from 'react';
import { LoadingAnimateSpin, Icon } from '../../';
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, horizontalListSortingStrategy, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
const DraggableSelectedItem = ({ item, index, onRemove, displayKey, uniqueField, }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item[uniqueField] });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };
    return (_jsxs("div", { ref: setNodeRef, style: style, ...attributes, ...listeners, className: cn(s['flex'], s['text-white'], s['gap-1'], s['bg-blue-500'], s['p-1'], s['rounded'], s['cursor-move']), children: [_jsx("div", { className: cn(s['flex'], s['w-fit'], s['cursor-pointer'], s['items-center']), onClick: (e) => {
                    e.stopPropagation();
                    onRemove(index);
                }, children: _jsx(Icon, { nameIcon: "BsTrashFill", propsIcon: { size: 16, color: 'white' } }) }), _jsx("span", { children: displayKey?.map((key) => `${item[key]}`).join(' - ') })] }));
};
export const AutoCompleteFilterMultiSelectMultiFieldsDisplayDragDrop = ({ key, uniqueField = '_id', loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, defaultValue = '', onFilter, onUpdate, onSelect, onBlur, }) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState();
    const [originalOptions, setOriginalOptions] = useState();
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
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    onUpdate && onUpdate(refSelectedItems.current);
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
    const getSelectedItem = (selectedItem, list) => {
        const finalList = list?.filter((item, index) => {
            item.selected = false;
            selectedItem && selectedItem?.length > 0
                ? selectedItem?.find((sItem, index) => {
                    if (sItem[uniqueField] === item[uniqueField]) {
                        item.selected = true;
                    }
                })
                : (item.selected = false);
            return item;
        });
        list = finalList;
        return list;
    };
    useEffect(() => {
        setOriginalOptions(getSelectedItem(data?.selected, data?.list));
        setOptions(getSelectedItem(data?.selected, data?.list));
        // Update both ref and state
        const itemsWithSort = data?.selected?.map((sItem, index) => ({
            ...sItem,
            sort: index?.toString(),
        })) || [];
        refSelectedItems.current = itemsWithSort;
        setSelectedItems(itemsWithSort); // Add this line
    }, [data, data?.selected]);
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
    const onDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = refSelectedItems.current.findIndex((item) => item.sort === active.id);
            const newIndex = refSelectedItems.current.findIndex((item) => item.sort === over.id);
            if (oldIndex !== -1 && newIndex !== -1) {
                const reorderedItems = arrayMove(refSelectedItems.current, oldIndex, newIndex);
                // Update sort values to maintain proper order
                const updatedItems = reorderedItems?.map((item, index) => ({
                    ...item,
                    sort: index.toString(),
                }));
                // Update both ref and state to trigger re-render
                refSelectedItems.current = updatedItems;
                setSelectedItems([...updatedItems]);
            }
        }
    };
    const handleRemoveItem = (index) => {
        const firstArr = refSelectedItems.current?.slice(0, index) || [];
        const secondArr = refSelectedItems.current?.slice(index + 1) || [];
        const fieldsList = [...firstArr, ...secondArr];
        // Update sort values after removal
        const updatedItems = fieldsList?.map((item, idx) => ({
            ...item,
            sort: idx.toString(),
        }));
        refSelectedItems.current = updatedItems;
        setSelectedItems([...updatedItems]);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                    }), children: [_jsx("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                                ? data?.selected?.length > 0
                                    ? `${(data?.selected && data?.selected?.length) || 0} Items`
                                    : value
                                : isUpperCase
                                    ? value?.toUpperCase()
                                    : value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none']), onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e), id: `${key}_input_text` }, `${key}_input`), loader && _jsx(LoadingAnimateSpin, {}), isListOpen ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: { size: 16 } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: { size: 16 } }))] }), options && isListOpen
                    ? options?.length > 0 && (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['absolute'], s['rounded-sm'], s['z-500'], s['w-full']), style: { zIndex: 80 }, children: [_jsx("div", { className: cn(s['flex'], s['w-full'], s['bg-gray-400']), children: _jsx(DndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: onDragEnd, children: selectedItems?.length > 0 && (_jsx(SortableContext, { items: selectedItems.map((item) => item.sort), strategy: horizontalListSortingStrategy, children: _jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-1'], s['bg-gray-400'], s['p-1']), children: selectedItems?.map((item, index) => (_jsx(DraggableSelectedItem, { item: item, index: index, onRemove: handleRemoveItem, displayKey: data.displayKey, uniqueField: "sort" }, item.sort))) }) })) }) }), _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['gap-1'], s['bg-gray-200'], s['p-2'], s['overflow-y-scroll'], s['w-full']), id: `${key}_listView`, style: { maxHeight: 'calc(100vh - 20vh)' }, children: options?.map((item, index) => (_jsx(_Fragment, { children: _jsx("li", { className: cn(s['flex'], s['gap-4'], s['p-1']), children: _jsxs("label", { className: cn(s['flex'], s['items-center']), children: [_jsx("input", { className: cn(s['flex'], s['h-4'], s['w-4']), type: "checkbox", checked: item.selected, onChange: () => onSelect(item), id: `${key}_${index}_check_box_view` }, `${key}_${index}_check_box_view`), ' ', _jsx("span", { className: cn(s['flex'], s['ml-2']), children: data.displayKey
                                                        .map((key) => `${item[key]}
                              `)
                                                        .join(' - ') })] }) }, `${key}_${index}_list`) }))) }, `${key}_listView`)] }, `${key}_list_wrapper_view`))
                    : null] }, `${key}_wrapperView`) }));
};
