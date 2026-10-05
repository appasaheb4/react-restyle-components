import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useId, useMemo, useRef, useState, } from 'react';
import { Icon } from '../../Icon/Icon';
import { AutoCompleteEmptyState } from '../shared/AutoCompleteEmptyState';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
const EMPTY_SEARCH_KEYS = [];
const sizePadding = {
    sm: '6px 10px',
    md: '8px 12px',
    lg: '12px 14px',
};
const sizeFont = {
    sm: '13px',
    md: '14px',
    lg: '16px',
};
const readText = (record, key) => {
    const value = record?.[key];
    if (value === null || value === undefined)
        return '';
    return String(value);
};
const highlightText = (text, query) => {
    const needle = query.trim();
    if (!needle)
        return text;
    const index = text.toLowerCase().indexOf(needle.toLowerCase());
    if (index < 0)
        return text;
    return (_jsxs(_Fragment, { children: [text.slice(0, index), _jsx("mark", { style: {
                    background: '#fde68a',
                    color: 'inherit',
                    borderRadius: 2,
                    padding: '0 1px',
                }, children: text.slice(index, index + needle.length) }), text.slice(index + needle.length)] }));
};
export const AutocompleteGroupBy = ({ data = [], filterDebounceDelay = 1000, hasError = false, displayValue = '', placeholder = 'Search...', disabled = false, loader = false, groupKey = 'title', itemKey = 'title', childrenKey = 'children', searchKeys = EMPTY_SEARCH_KEYS, maxDropdownHeight = 350, showGroupCount = true, clearable = true, highlightMatch = true, size = 'md', emptyStateMessage = 'No Results Found', emptyStateDescription = 'Try adjusting your search', className, classNames = {}, styles = {}, onChange, onClose, onFilter, onClear, renderGroupLabel, renderItem, }) => {
    const listId = useId();
    const [value, setValue] = useState(displayValue);
    const [committedValue, setCommittedValue] = useState(displayValue);
    const [isListOpen, setIsListOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    useEffect(() => {
        setValue(displayValue);
        setCommittedValue(displayValue);
    }, [displayValue]);
    const filterGroups = useCallback((search, source) => {
        const query = search.trim().toLowerCase();
        if (!query)
            return source || [];
        return (source || []).reduce((groups, group) => {
            const children = Array.isArray(group?.[childrenKey])
                ? group[childrenKey]
                : [];
            const matched = children.filter((child) => {
                const haystack = [
                    readText(group, groupKey),
                    readText(child, itemKey),
                    ...searchKeys.map((key) => readText(child, key)),
                ]
                    .join(' ')
                    .toLowerCase();
                return haystack.includes(query);
            });
            if (matched.length > 0) {
                groups.push({ ...group, [childrenKey]: matched });
            }
            return groups;
        }, []);
    }, [childrenKey, groupKey, itemKey, searchKeys]);
    const options = useMemo(() => filterGroups(value, data), [filterGroups, value, data]);
    const flatOptions = useMemo(() => {
        const rows = [];
        options.forEach((group, groupIndex) => {
            const children = Array.isArray(group?.[childrenKey])
                ? group[childrenKey]
                : [];
            children.forEach((item, itemIndex) => {
                rows.push({
                    group,
                    item,
                    key: `${groupIndex}-${itemIndex}-${readText(item, itemKey)}`,
                });
            });
        });
        return rows;
    }, [options, childrenKey, itemKey]);
    useEffect(() => {
        setActiveIndex(0);
    }, [value, data]);
    const closeList = useCallback((restoreCommitted) => {
        setIsListOpen(false);
        if (restoreCommitted)
            setValue(committedValue);
        onClose?.();
    }, [committedValue, onClose]);
    useEffect(() => {
        if (!isListOpen)
            return;
        const handleClickOutside = (event) => {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target)) {
                closeList(true);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isListOpen, closeList]);
    useEffect(() => {
        if (!isListOpen || !listRef.current)
            return;
        const active = listRef.current.querySelector('[data-active="true"]');
        active?.scrollIntoView({ block: 'nearest' });
    }, [activeIndex, isListOpen]);
    const selectOption = useCallback((group, item) => {
        const label = readText(item, itemKey);
        setValue(label);
        setCommittedValue(label);
        setIsListOpen(false);
        onChange?.(group, item);
    }, [itemKey, onChange]);
    const openList = () => {
        if (disabled)
            return;
        setIsListOpen(true);
    };
    const onChangeValue = (event) => {
        const next = event.target.value;
        setValue(next);
        setIsListOpen(true);
        onFilter?.(next);
    };
    const handleClear = () => {
        setValue('');
        setCommittedValue('');
        setIsListOpen(true);
        onClear?.();
        onFilter?.('');
        inputRef.current?.focus();
    };
    const onKeyDown = (event) => {
        if (disabled)
            return;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (!isListOpen) {
                setIsListOpen(true);
                setActiveIndex(0);
                return;
            }
            setActiveIndex((index) => flatOptions.length === 0 ? 0 : (index + 1) % flatOptions.length);
            return;
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (!isListOpen) {
                setIsListOpen(true);
                setActiveIndex(0);
                return;
            }
            setActiveIndex((index) => flatOptions.length === 0
                ? 0
                : (index - 1 + flatOptions.length) % flatOptions.length);
            return;
        }
        if (event.key === 'Escape') {
            event.preventDefault();
            closeList(true);
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            const highlighted = flatOptions[activeIndex];
            if (isListOpen && highlighted) {
                selectOption(highlighted.group, highlighted.item);
                return;
            }
            const exact = flatOptions.find((row) => readText(row.item, itemKey).toLowerCase() === value.toLowerCase() ||
                readText(row.group, groupKey).toLowerCase() === value.toLowerCase());
            if (exact)
                selectOption(exact.group, exact.item);
        }
    };
    const resolvedMaxHeight = typeof maxDropdownHeight === 'number'
        ? `min(${maxDropdownHeight}px, calc(100dvh - 8rem))`
        : maxDropdownHeight;
    const showClear = clearable && !disabled && value.length > 0;
    let optionCursor = 0;
    return (_jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative'], s['min-w-0'], className, classNames.container), style: styles.container, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['w-full'], s['bg-white'], s['border'], s['rounded-lg'], s['shadow-sm'], s['transition-all'], s['duration-200'], {
                    [s['border-red']]: hasError,
                    [s['border-gray-300']]: !hasError,
                    [s['opacity-60']]: disabled,
                    [s['cursor-not-allowed']]: disabled,
                }, classNames.inputWrapper), style: {
                    padding: sizePadding[size],
                    gap: 8,
                    borderColor: hasError ? undefined : isFocused ? '#454cbf' : undefined,
                    boxShadow: isFocused
                        ? '0 0 0 3px rgba(69, 76, 191, 0.16)'
                        : undefined,
                    ...styles.inputWrapper,
                }, children: [_jsx("input", { ref: inputRef, role: "combobox", "aria-expanded": isListOpen, "aria-controls": listId, "aria-autocomplete": "list", placeholder: placeholder, value: value, disabled: disabled, className: cn(s['w-full'], s['min-w-0'], s['bg-transparent'], s['focus:outline-none'], s['text-gray-900'], disabled && s['cursor-not-allowed'], classNames.input), style: { fontSize: sizeFont[size], ...styles.input }, onChange: onChangeValue, onClick: openList, onFocus: () => {
                            setIsFocused(true);
                            openList();
                        }, onBlur: () => setIsFocused(false), onKeyDown: onKeyDown }), loader && (_jsx("span", { role: "status", "aria-label": "Loading", className: cn(s['animate-spin'], s['rounded-full'], s['flex-shrink-0']), style: {
                            width: 14,
                            height: 14,
                            border: '2px solid #e5e7eb',
                            borderTopColor: '#454cbf',
                        } })), showClear && (_jsx("button", { type: "button", "aria-label": "Clear", className: cn(s['flex'], s['items-center'], s['justify-center'], s['flex-shrink-0'], s['cursor-pointer'], s['text-gray-400'], s['bg-transparent'], s['border-none'], s['p-0'], classNames.clear), style: styles.clear, onMouseDown: (event) => event.preventDefault(), onClick: handleClear, children: _jsx(Icon, { nameIcon: "FaTimes", propsIcon: { size: 12, color: '#9ca3af' } }) })), _jsx("span", { className: cn(s['flex-shrink-0'], classNames.icon), style: styles.icon, children: _jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: { size: 14, color: '#6b7280' }, onClick: () => {
                                if (disabled)
                                    return;
                                setIsListOpen((open) => !open);
                                inputRef.current?.focus();
                            }, styles: {
                                icon: {
                                    transform: isListOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 180ms ease',
                                },
                            } }) })] }), isListOpen && !disabled && (_jsx("div", { id: listId, role: "listbox", className: cn(s['absolute'], s['left-0'], s['w-full'], s['mt-1'], s['bg-white'], s['border'], s['border-gray-200'], s['rounded-lg'], s['shadow-lg'], s['overflow-hidden'], classNames.dropdown), style: { zIndex: 50, ...styles.dropdown }, children: flatOptions.length > 0 ? (_jsx("div", { ref: listRef, className: cn(s['overflow-y-auto'], s['overflow-x-hidden'], classNames.list), style: {
                        maxHeight: resolvedMaxHeight,
                        padding: 6,
                        ...styles.list,
                    }, children: options.map((group, groupIndex) => {
                        const children = Array.isArray(group?.[childrenKey])
                            ? group[childrenKey]
                            : [];
                        const groupLabel = readText(group, groupKey);
                        return (_jsxs("div", { className: classNames.group, style: { marginBottom: 4, ...styles.group }, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['text-gray-500'], classNames.groupLabel), style: {
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 1,
                                        gap: 8,
                                        padding: '6px 8px',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: '0.04em',
                                        textTransform: 'uppercase',
                                        background: '#f8fafc',
                                        borderRadius: 6,
                                        ...styles.groupLabel,
                                    }, children: [_jsx("span", { className: s['truncate'], style: { minWidth: 0 }, children: renderGroupLabel
                                                ? renderGroupLabel(group)
                                                : groupLabel || 'Group' }), showGroupCount && (_jsx("span", { className: cn(s['flex-shrink-0'], s['text-gray-500'], classNames.groupCount), style: {
                                                fontSize: 11,
                                                fontWeight: 600,
                                                letterSpacing: 0,
                                                textTransform: 'none',
                                                background: '#e5e7eb',
                                                color: '#374151',
                                                borderRadius: 999,
                                                padding: '1px 7px',
                                                ...styles.groupCount,
                                            }, children: children.length }))] }), children.map((item) => {
                                    const index = optionCursor;
                                    optionCursor += 1;
                                    const label = readText(item, itemKey);
                                    const isActive = index === activeIndex;
                                    return (_jsx("button", { type: "button", role: "option", "aria-selected": isActive, "data-active": isActive ? 'true' : 'false', title: label, className: cn(s['flex'], s['w-full'], s['text-left'], s['cursor-pointer'], s['border-none'], s['bg-transparent'], s['truncate'], classNames.item, isActive && classNames.itemActive), style: {
                                            marginTop: 2,
                                            padding: '8px 10px',
                                            borderRadius: 6,
                                            fontSize: sizeFont[size],
                                            color: '#111827',
                                            background: isActive ? '#eef2ff' : 'transparent',
                                            ...styles.item,
                                            ...(isActive ? styles.itemActive : null),
                                        }, onMouseEnter: () => setActiveIndex(index), onMouseDown: (event) => event.preventDefault(), onClick: () => selectOption(group, item), children: renderItem
                                            ? renderItem(item, group, value)
                                            : highlightMatch
                                                ? highlightText(label, value)
                                                : label }, `${groupIndex}-${index}-${label}`));
                                })] }, `${groupLabel}-${groupIndex}`));
                    }) })) : (_jsx("div", { className: classNames.emptyState, style: styles.emptyState, children: _jsx(AutoCompleteEmptyState, { loader: loader, hasSearchText: !!value.trim(), loadingDelayMs: filterDebounceDelay, emptyStateMessage: emptyStateMessage, emptyStateDescription: emptyStateDescription }) })) }))] }));
};
