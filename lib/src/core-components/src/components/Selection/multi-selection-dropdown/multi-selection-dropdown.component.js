import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { Icon } from '../../';
export const MultiSelectionDropdown = ({ options = [], onSelect, onClear, }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);
    // **Close dropdown if user clicks outside**
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (_jsxs("div", { className: cn(s['relative']), ref: dropdownRef, children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), className: cn(s['w-full'], s['flex'], s['justify-between'], s['items-center'], s['px-2'], s['py-2'], s['border'], s['border-gray-300'], s['bg-white'], s['rounded-md'], s['shadow-sm'], s['focus:outline-none']), children: [_jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-2']), children: selectedItems?.length > 0 ? (selectedItems?.map((item, key) => (_jsx("span", { className: cn(s['bg-blue-500'], s['text-white'], s['text-sm'], s['px-2'], s['py-1'], s['rounded']), children: item }, key?.toString())))) : (_jsx("span", { className: cn(s['text-gray-500']), children: "Select Items" })) }), _jsx(Icon, { nameIcon: 'FaChevronDown', propsIcon: {
                            color: '#ffffff',
                            size: 18,
                        } })] }), isOpen && (_jsxs("div", { className: cn(s['absolute'], s['z-10'], s['w-full'], s['mt-1'], s['bg-white'], s['border'], s['border-gray-300'], s['rounded-md'], s['shadow-lg'], s['max-h-60'], s['overflow-y-auto']), children: [_jsx("div", { className: cn(s['p-2'], s['top-0'], s['bg-white'], s['z-10'], s['border-b'], s['relative']), children: _jsxs("div", { className: cn(s['flex'], s['items-center'], s['border'], s['border-gray-300'], s['rounded-md']), children: [_jsx("input", { type: "text", placeholder: "Search...", value: search, onChange: (e) => setSearch(e.target.value), className: cn(s['flex'], s['w-full'], s['p-2'], s['focus:outline-none']) }), selectedItems?.length > 0 && (_jsx("button", { onClick: () => {
                                        setSelectedItems([]);
                                        setSearch('');
                                        onClear && onClear();
                                    }, className: cn(s['flex'], s['w-fit'], s['pr-2'], s['text-sm'], s['hover:text-red'], s['whitespace-nowrap']), children: "Clear Selection" }))] }) }), _jsx("ul", { className: cn(s['py-2']), children: options?.filter((child) => child.toLowerCase().includes(search.toLowerCase()))?.length > 0 ? (options
                            ?.filter((child) => child.toLowerCase().includes(search.toLowerCase()))
                            .map((item, key) => (_jsxs("li", { onClick: () => {
                                setSelectedItems([...selectedItems, item]);
                                onSelect([...selectedItems, item]);
                            }, className: cn(s['flex'], s['items-center'], s['justify-between'], s['px-4'], s['py-2'], s['cursor-pointer'], s['hover:bg-gray-100']), children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), children: [_jsx(Icon, { nameIcon: 'FaAlignJustify', propsIcon: {
                                                color: '#000000',
                                                size: 18,
                                            } }), _jsx("span", { children: item })] }), selectedItems?.some((selected) => selected === item) && (_jsx(Icon, { nameIcon: 'FaCheck', propsIcon: {
                                        color: '#000000',
                                        size: 18,
                                    } }))] }, key?.toString())))) : (_jsx("li", { className: cn(s['px-4'], s['py-2'], s['text-gray-500'], s['text-sm']), children: "No items found" })) })] }))] }));
};
