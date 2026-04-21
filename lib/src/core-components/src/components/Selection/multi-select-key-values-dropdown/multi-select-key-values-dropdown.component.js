import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { Icon } from '../../Icon/Icon';
const defaultFieldsResolver = () => ({});
/**
 * Coerces router / menu `options` into a safe shape (`children` always an array; skips invalid nodes).
 */
const normalizeRouterOptions = (input) => {
    if (!Array.isArray(input)) {
        return [];
    }
    const out = [];
    for (const raw of input) {
        if (raw == null || typeof raw !== 'object') {
            continue;
        }
        const p = raw;
        const rawChildren = p.children;
        const children = (Array.isArray(rawChildren)
            ? rawChildren.filter((c) => c != null && typeof c === 'object')
            : []);
        out.push({ ...p, children });
    }
    return out;
};
const selectionKey = (parent, child) => `${parent.name}::${child.name}`;
/** Keys not copied from the selected child into `SelectedData` (structural / internal). */
const SELECTED_CHILD_PAYLOAD_BLOCKLIST = new Set([
    'path',
    'name',
    'icon',
    'title',
    'collection',
    'documentType',
    'category',
    'selectionId',
    'fields',
    'parentSnapshot',
]);
/** Keys not merged into `SelectedParentPayload` extras (core fields are set explicitly). */
const PARENT_PAYLOAD_BLOCKLIST = new Set([
    'path',
    'name',
    'title',
    'order',
    'icon',
    'children',
]);
const passthroughParentExtras = (parent) => {
    if (parent == null || typeof parent !== 'object') {
        return {};
    }
    const src = parent;
    const out = {};
    for (const key of Object.keys(src)) {
        if (!PARENT_PAYLOAD_BLOCKLIST.has(key)) {
            out[key] = src[key];
        }
    }
    return out;
};
const passthroughChildExtras = (item) => {
    if (item == null || typeof item !== 'object') {
        return {};
    }
    const src = item;
    const out = {};
    for (const key of Object.keys(src)) {
        if (!SELECTED_CHILD_PAYLOAD_BLOCKLIST.has(key)) {
            out[key] = src[key];
        }
    }
    return out;
};
const buildParentPayload = (parent) => ({
    path: parent.path,
    name: parent.name,
    title: parent.title,
    order: parent.order,
    icon: parent.icon,
    ...passthroughParentExtras(parent),
});
const INTERNAL_CHILD_PAYLOAD_KEYS = new Set([
    'selectionId',
    'category',
    'parentSnapshot',
]);
const toPublicChildPayload = (item) => {
    const out = {};
    for (const key of Object.keys(item)) {
        if (!INTERNAL_CHILD_PAYLOAD_KEYS.has(key)) {
            out[key] = item[key];
        }
    }
    return out;
};
const mapItemsToPayload = (items, resolveFields) => items.map((item) => {
    const rawFields = resolveFields(`${item?.category ?? ''}-${item.name}`);
    const fieldSource = rawFields != null && typeof rawFields === 'object' ? rawFields : {};
    const formattedFields = Object.entries(fieldSource).map(([name, dataType]) => ({
        name,
        label: name,
        dataType,
    }));
    return {
        parent: item.parentSnapshot,
        child: toPublicChildPayload(item),
        ...passthroughChildExtras(item),
        collection: item?.collection,
        documentType: item?.documentType,
        name: item?.name,
        fields: formattedFields,
    };
});
export const MultiSelectKeyValuesDropdown = ({ options = [], onSelect, onClear, placeholder = 'Select items', disabled = false, isDisable = false, hasError = false, getFieldsResolver, isSingleSelect = false, className, style, buttonClassName, buttonStyle, dropdownClassName, dropdownStyle, }) => {
    const isDisabled = disabled || isDisable;
    const resolveFields = getFieldsResolver ?? defaultFieldsResolver;
    const safeOptions = useMemo(() => normalizeRouterOptions(options), [options]);
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
    const emitSelection = useCallback((next) => {
        onSelect(mapItemsToPayload(next, resolveFields));
    }, [onSelect, resolveFields]);
    const toggleSelection = useCallback((parent, child) => {
        const id = selectionKey(parent, child);
        setSelectedItems((prev) => {
            const isSelected = prev.some((s) => s.selectionId === id);
            const parentSnapshot = buildParentPayload(parent);
            const row = {
                ...child,
                category: parent?.name,
                selectionId: id,
                parentSnapshot,
            };
            let next;
            if (isSingleSelect) {
                next = isSelected ? [] : [row];
            }
            else {
                next = isSelected
                    ? prev.filter((s) => s.selectionId !== id)
                    : [...prev, row];
            }
            emitSelection(next);
            if (isSingleSelect && next.length === 1) {
                queueMicrotask(() => setIsOpen(false));
            }
            return next;
        });
    }, [emitSelection, isSingleSelect]);
    const removeItem = useCallback((selectionId) => {
        setSelectedItems((prev) => {
            const next = prev.filter((s) => s.selectionId !== selectionId);
            emitSelection(next);
            return next;
        });
    }, [emitSelection]);
    const clearAll = useCallback(() => {
        setSelectedItems([]);
        setSearch('');
        onClear?.();
        onSelect([]);
    }, [onClear, onSelect]);
    const groupedRows = useMemo(() => {
        const q = search.toLowerCase().trim();
        return safeOptions.map((parent) => {
            const children = (parent.children ?? []).filter((child) => String(child.name ?? '')
                .toLowerCase()
                .includes(q));
            return { parent, children };
        });
    }, [safeOptions, search]);
    const totalVisible = useMemo(() => groupedRows.reduce((n, g) => n + g.children.length, 0), [groupedRows]);
    return (_jsxs("div", { className: cn(s['relative'], className), style: style, ref: dropdownRef, children: [_jsxs("button", { type: "button", onClick: () => !isDisabled && setIsOpen(!isOpen), className: cn(s['w-full'], s['flex'], s['justify-between'], s['items-center'], s['px-3'], s['py-2'], s['border'], {
                    [s['border-blue-500']]: isOpen && !hasError,
                    [s['border-red']]: hasError,
                    [s['border-gray-300']]: !hasError && !isOpen,
                }, s['bg-white'], s['rounded-md'], s['shadow-sm'], s['focus:outline-none'], s['transition-all'], {
                    [s['opacity-50']]: isDisabled,
                    [s['cursor-not-allowed']]: isDisabled,
                }, buttonClassName), style: {
                    minHeight: '42px',
                    boxShadow: isOpen && hasError
                        ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                        : isOpen
                            ? '0 0 0 3px rgba(59, 130, 246, 0.1)'
                            : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    ...buttonStyle,
                }, disabled: isDisabled, children: [_jsx("div", { className: cn(s['flex'], s['flex-wrap'], s['gap-1'], s['flex-1']), style: { minHeight: '24px', alignItems: 'center', maxHeight: '120px', overflowY: 'auto' }, children: selectedItems.length > 0 ? (selectedItems.map((item) => (_jsxs("span", { className: cn(s['flex'], s['items-center'], s['gap-1'], s['text-sm'], s['rounded-full']), style: {
                                backgroundColor: 'rgb(219, 234, 254)',
                                color: 'rgb(29, 78, 216)',
                                padding: '2px 8px 2px 10px',
                                fontSize: '13px',
                                fontWeight: 500,
                            }, children: [item.name, _jsx("span", { role: "button", tabIndex: 0, onClick: (e) => {
                                        e.stopPropagation();
                                        if (!isDisabled)
                                            removeItem(item.selectionId);
                                    }, onKeyDown: (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (!isDisabled)
                                                removeItem(item.selectionId);
                                        }
                                    }, style: {
                                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        marginLeft: '2px',
                                        transition: 'background-color 0.15s ease',
                                    }, onMouseOver: (e) => {
                                        if (!isDisabled) {
                                            e.currentTarget.style.backgroundColor =
                                                'rgba(29, 78, 216, 0.15)';
                                        }
                                    }, onMouseOut: (e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }, children: _jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "2", y1: "2", x2: "8", y2: "8" }), _jsx("line", { x1: "8", y1: "2", x2: "2", y2: "8" })] }) })] }, item.selectionId)))) : (_jsx("span", { style: { color: '#9ca3af', fontSize: '14px' }, children: placeholder })) }), _jsx("div", { className: cn(s['flex-shrink-0'], s['flex'], s['items-center']), style: {
                            marginLeft: '8px',
                            transition: 'transform 0.2s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }, children: _jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                size: 14,
                                color: '#6b7280',
                            } }) })] }), isOpen && (_jsxs("div", { className: cn(s['absolute'], s['w-full'], s['mt-1'], s['bg-white'], s['border'], s['border-gray-200'], s['rounded-lg'], s['shadow-lg'], s['overflow-hidden'], dropdownClassName), style: {
                    zIndex: 999,
                    animation: 'mskvFadeIn 0.18s ease-out',
                    ...dropdownStyle,
                }, children: [_jsx("style", { children: `
            @keyframes mskvFadeIn {
              from { opacity: 0; transform: translateY(-6px); }
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
                                    }, children: "Clear all" }))] }) }), _jsx("ul", { style: {
                            margin: 0,
                            padding: '4px 0',
                            listStyle: 'none',
                            maxHeight: '280px',
                            overflowY: 'auto',
                        }, children: totalVisible === 0 ? (_jsx("li", { style: {
                                padding: '16px',
                                textAlign: 'center',
                                color: '#9ca3af',
                                fontSize: '14px',
                            }, children: "No items found" })) : (groupedRows.map(({ parent, children }) => {
                            if (children.length === 0) {
                                return null;
                            }
                            return (_jsxs(React.Fragment, { children: [_jsx("li", { className: cn(s['flex'], s['items-center']), style: {
                                            padding: '6px 12px 4px',
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            color: '#6b7280',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                            userSelect: 'none',
                                            pointerEvents: 'none',
                                        }, children: parent.title || parent.name }), children.map((child) => {
                                        const id = selectionKey(parent, child);
                                        const isChecked = selectedItems.some((sel) => sel.selectionId === id);
                                        return (_jsxs("li", { onClick: () => toggleSelection(parent, child), className: cn(s['flex'], s['items-center'], s['cursor-pointer']), style: {
                                                padding: '8px 12px 8px 14px',
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
                                                    e.currentTarget.style.backgroundColor =
                                                        '#f3f4f6';
                                                }
                                            }, onMouseOut: (e) => {
                                                e.currentTarget.style.backgroundColor = isChecked
                                                    ? 'rgb(239, 246, 255)'
                                                    : 'transparent';
                                            }, children: [_jsx("input", { type: isSingleSelect ? 'radio' : 'checkbox', name: isSingleSelect
                                                        ? 'multi-select-key-values-dropdown'
                                                        : undefined, checked: isChecked, onChange: () => toggleSelection(parent, child), onClick: (e) => e.stopPropagation(), style: {
                                                        width: '16px',
                                                        height: '16px',
                                                        accentColor: '#3b82f6',
                                                        cursor: 'pointer',
                                                        flexShrink: 0,
                                                    } }), _jsx(Icon, { nameIcon: child.icon || 'VscListSelection', propsIcon: {
                                                        size: 16,
                                                        color: isChecked ? 'rgb(29, 78, 216)' : '#4b5563',
                                                    } }), _jsx("span", { style: {
                                                        fontSize: '14px',
                                                        fontWeight: isChecked ? 500 : 400,
                                                        userSelect: 'none',
                                                        flex: 1,
                                                    }, children: child.name })] }, id));
                                    })] }, parent.name));
                        })) })] }))] }));
};
