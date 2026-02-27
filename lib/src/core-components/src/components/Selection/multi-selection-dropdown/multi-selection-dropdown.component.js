import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useCallback } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { Icon } from '../../Icon/Icon';
export const MultiSelectionDropdown = ({ options = [], onSelect, onClear, placeholder = 'Select Items', disabled = false, }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);
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
    const toggleItem = useCallback((item) => {
        const isSelected = selectedItems.includes(item);
        const updated = isSelected
            ? selectedItems.filter((i) => i !== item)
            : [...selectedItems, item];
        setSelectedItems(updated);
        onSelect(updated);
    }, [selectedItems, onSelect]);
    const removeItem = useCallback((item) => {
        const updated = selectedItems.filter((i) => i !== item);
        setSelectedItems(updated);
        onSelect(updated);
    }, [selectedItems, onSelect]);
    const clearAll = useCallback(() => {
        setSelectedItems([]);
        setSearch('');
        onClear?.();
        onSelect([]);
    }, [onClear, onSelect]);
    const filteredOptions = options.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
    return (_jsxs("div", { className: cn(s['relative']), ref: dropdownRef, children: [_jsxs("button", { type: "button", onClick: () => !disabled && setIsOpen(!isOpen), className: cn(s['w-full'], s['flex'], s['justify-between'], s['items-center'], s['px-3'], s['py-2'], s['border'], s['border-gray-300'], s['bg-white'], s['rounded-md'], s['shadow-sm'], s['focus:outline-none'], s['transition-all'], {
                    [s['border-blue-500']]: isOpen,
                    [s['opacity-50']]: disabled,
                    [s['cursor-not-allowed']]: disabled,
                }), style: {
                    minHeight: '42px',
                    boxShadow: isOpen
                        ? '0 0 0 3px rgba(59, 130, 246, 0.1)'
                        : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                }, disabled: disabled, children: [_jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-1'], s['flex-1']), style: { minHeight: '24px', alignItems: 'center' }, children: selectedItems.length > 0 ? (selectedItems.map((item) => (_jsxs("span", { className: cn(s['flex'], s['items-center'], s['gap-1'], s['text-sm'], s['rounded-full']), style: {
                                backgroundColor: 'rgb(219, 234, 254)',
                                color: 'rgb(29, 78, 216)',
                                padding: '2px 8px 2px 10px',
                                fontSize: '13px',
                                fontWeight: 500,
                            }, children: [item, _jsx("span", { onClick: (e) => {
                                        e.stopPropagation();
                                        removeItem(item);
                                    }, style: {
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        marginLeft: '2px',
                                        transition: 'background-color 0.15s ease',
                                    }, onMouseOver: (e) => {
                                        e.currentTarget.style.backgroundColor =
                                            'rgba(29, 78, 216, 0.15)';
                                    }, onMouseOut: (e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }, children: _jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "2", y1: "2", x2: "8", y2: "8" }), _jsx("line", { x1: "8", y1: "2", x2: "2", y2: "8" })] }) })] }, item)))) : (_jsx("span", { style: { color: '#9ca3af', fontSize: '14px' }, children: placeholder })) }), _jsx("div", { className: cn(s['flex-shrink-0'], s['flex'], s['items-center']), style: {
                            marginLeft: '8px',
                            transition: 'transform 0.2s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }, children: _jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                size: 14,
                                color: '#6b7280',
                            } }) })] }), isOpen && (_jsxs("div", { className: cn(s['absolute'], s['w-full'], s['mt-1'], s['bg-white'], s['border'], s['border-gray-200'], s['rounded-lg'], s['shadow-lg'], s['overflow-hidden']), style: {
                    zIndex: 999,
                    animation: 'fadeIn 0.15s ease-out',
                }, children: [_jsx("style", { children: `
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-4px); }
              to { opacity: 1; transform: translateY(0); }
            }
          ` }), _jsx("div", { style: {
                            padding: '8px',
                            borderBottom: '1px solid #e5e7eb',
                        }, children: _jsxs("div", { className: cn(s['flex'], s['items-center'], s['border'], s['border-gray-300'], s['rounded-md'], s['overflow-hidden']), style: { backgroundColor: '#f9fafb' }, children: [_jsx("div", { style: {
                                        padding: '0 8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }, children: _jsx(Icon, { nameIcon: "FaSearch", propsIcon: { size: 14, color: '#9ca3af' } }) }), _jsx("input", { type: "text", placeholder: "Search...", value: search, onChange: (e) => setSearch(e.target.value), className: cn(s['w-full'], s['focus:outline-none']), style: {
                                        padding: '8px 8px 8px 0',
                                        fontSize: '14px',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                    } }), selectedItems.length > 0 && (_jsx("button", { type: "button", onClick: clearAll, style: {
                                        padding: '4px 10px',
                                        fontSize: '12px',
                                        color: '#ef4444',
                                        whiteSpace: 'nowrap',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: 500,
                                    }, children: "Clear All" }))] }) }), selectedItems.length > 0 && (_jsxs("div", { style: {
                            padding: '8px 12px',
                            borderBottom: '1px solid #e5e7eb',
                            backgroundColor: '#f0f9ff',
                        }, children: [_jsxs("div", { style: {
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '6px',
                                }, children: ["Selected (", selectedItems.length, ")"] }), _jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-1']), children: selectedItems.map((item) => (_jsxs("span", { className: cn(s['flex'], s['items-center'], s['gap-1'], s['rounded-full']), style: {
                                        backgroundColor: 'rgb(219, 234, 254)',
                                        color: 'rgb(29, 78, 216)',
                                        padding: '3px 8px 3px 10px',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                    }, children: [item, _jsx("span", { onClick: () => removeItem(item), style: {
                                                cursor: 'pointer',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                marginLeft: '2px',
                                                transition: 'background-color 0.15s ease',
                                            }, onMouseOver: (e) => {
                                                e.currentTarget.style.backgroundColor =
                                                    'rgba(29, 78, 216, 0.15)';
                                            }, onMouseOut: (e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                            }, children: _jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "2", y1: "2", x2: "8", y2: "8" }), _jsx("line", { x1: "8", y1: "2", x2: "2", y2: "8" })] }) })] }, item))) })] })), _jsx("ul", { style: {
                            margin: 0,
                            padding: '4px 0',
                            listStyle: 'none',
                            maxHeight: '240px',
                            overflowY: 'auto',
                        }, children: filteredOptions.length > 0 ? (filteredOptions.map((item) => {
                            const isChecked = selectedItems.includes(item);
                            return (_jsxs("li", { onClick: () => toggleItem(item), className: cn(s['flex'], s['items-center'], s['cursor-pointer']), style: {
                                    padding: '8px 12px',
                                    gap: '10px',
                                    transition: 'background-color 0.15s ease, color 0.15s ease',
                                    backgroundColor: isChecked
                                        ? 'rgb(239, 246, 255)'
                                        : 'transparent',
                                    color: isChecked
                                        ? 'rgb(29, 78, 216)'
                                        : 'rgb(55, 65, 81)',
                                }, onMouseOver: (e) => {
                                    if (!isChecked) {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                    }
                                }, onMouseOut: (e) => {
                                    e.currentTarget.style.backgroundColor = isChecked
                                        ? 'rgb(239, 246, 255)'
                                        : 'transparent';
                                }, children: [_jsx("input", { type: "checkbox", checked: isChecked, onChange: () => toggleItem(item), onClick: (e) => e.stopPropagation(), style: {
                                            width: '16px',
                                            height: '16px',
                                            accentColor: '#3b82f6',
                                            cursor: 'pointer',
                                            flexShrink: 0,
                                        } }), _jsx("span", { style: {
                                            fontSize: '14px',
                                            fontWeight: isChecked ? 500 : 400,
                                            userSelect: 'none',
                                        }, children: item })] }, item));
                        })) : (_jsx("li", { style: {
                                padding: '16px',
                                textAlign: 'center',
                                color: '#9ca3af',
                                fontSize: '14px',
                            }, children: "No items found" })) })] }))] }));
};
