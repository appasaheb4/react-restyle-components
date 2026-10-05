import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useId, useMemo, useRef, useState, } from 'react';
import { Icon } from '../../Icon/Icon';
import { AutoCompleteEmptyState } from '../shared/AutoCompleteEmptyState';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
const EMPTY_LIST = [];
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
const childList = (group, childrenKey) => Array.isArray(group?.[childrenKey]) ? group[childrenKey] : [];
const identityOf = (item, valueKey, itemKey) => readText(item, valueKey) || readText(item, itemKey);
const collectDefaultIds = (defaults, childrenKey, valueKey, itemKey) => {
    const ids = new Set();
    defaults.forEach((entry) => {
        const nested = Array.isArray(entry?.[childrenKey])
            ? entry[childrenKey]
            : Array.isArray(entry?.children)
                ? entry.children
                : null;
        if (nested) {
            nested.forEach((child) => {
                const id = identityOf(child, valueKey, itemKey);
                if (id)
                    ids.add(id);
            });
            return;
        }
        const id = identityOf(entry, valueKey, itemKey);
        if (id)
            ids.add(id);
    });
    return ids;
};
const withSelection = (groups, defaults, childrenKey, valueKey, itemKey) => {
    const ids = collectDefaultIds(defaults, childrenKey, valueKey, itemKey);
    return (groups || []).map((group) => ({
        ...group,
        [childrenKey]: childList(group, childrenKey).map((child) => ({
            ...child,
            selected: Boolean(child?.selected) ||
                ids.has(identityOf(child, valueKey, itemKey)),
        })),
    }));
};
const selectedGroups = (groups, childrenKey) => groups
    .map((group) => ({
    ...group,
    [childrenKey]: childList(group, childrenKey).filter((child) => child.selected),
}))
    .filter((group) => childList(group, childrenKey).length > 0);
const selectedLabels = (groups, childrenKey, itemKey, separator) => groups
    .flatMap((group) => childList(group, childrenKey)
    .filter((child) => child.selected)
    .map((child) => readText(child, itemKey)))
    .filter(Boolean)
    .join(separator);
export const AutoCompleteGroupByCheck = ({ data = EMPTY_LIST, defaultItem = EMPTY_LIST, filterDebounceDelay = 1000, hasError = false, placeholder = 'Select item', disabled = false, loader = false, groupKey = 'title', itemKey = 'title', childrenKey = 'children', valueKey = 'name', searchKeys = EMPTY_SEARCH_KEYS, separator = ', ', maxDropdownHeight = 350, showGroupCount = true, showGroupCheckbox = true, clearable = true, highlightMatch = true, size = 'md', emptyStateMessage = 'No Results Found', emptyStateDescription = 'Try adjusting your search', className, classNames = {}, styles = {}, onChange, onClose, onFilter, onClear, renderGroupLabel, renderItem, }) => {
    const listId = useId();
    const [source, setSource] = useState(() => withSelection(data, defaultItem, childrenKey, valueKey, itemKey));
    const [query, setQuery] = useState('');
    const [isListOpen, setIsListOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const onChangeRef = useRef(onChange);
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onChangeRef.current = onChange;
        onCloseRef.current = onClose;
    }, [onChange, onClose]);
    const defaultSignature = JSON.stringify(defaultItem ?? []);
    useEffect(() => {
        setSource(withSelection(data || [], defaultItem || [], childrenKey, valueKey, itemKey));
        // defaultItem is read through defaultSignature so inline arrays with the same content do not reset selection.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, defaultSignature, childrenKey, valueKey, itemKey]);
    const filterGroups = useCallback((search, groups) => {
        const text = search.trim().toLowerCase();
        if (!text)
            return groups;
        return groups.reduce((next, group) => {
            const matched = childList(group, childrenKey).filter((child) => {
                const haystack = [
                    readText(group, groupKey),
                    readText(child, itemKey),
                    readText(child, valueKey),
                    ...searchKeys.map((key) => readText(child, key)),
                ]
                    .join(' ')
                    .toLowerCase();
                return haystack.includes(text);
            });
            if (matched.length > 0) {
                next.push({ ...group, [childrenKey]: matched });
            }
            return next;
        }, []);
    }, [childrenKey, groupKey, itemKey, searchKeys, valueKey]);
    const options = useMemo(() => filterGroups(query, source), [filterGroups, query, source]);
    const flatOptions = useMemo(() => {
        const rows = [];
        options.forEach((group, groupIndex) => {
            childList(group, childrenKey).forEach((item, itemIndex) => {
                rows.push({
                    group,
                    item,
                    key: `${groupIndex}-${itemIndex}-${identityOf(item, valueKey, itemKey)}`,
                });
            });
        });
        return rows;
    }, [options, childrenKey, valueKey, itemKey]);
    const summary = selectedLabels(source, childrenKey, itemKey, separator);
    const selectedCount = source.reduce((count, group) => count + childList(group, childrenKey).filter((child) => child.selected).length, 0);
    useEffect(() => {
        setActiveIndex(0);
    }, [query, data]);
    const emitSelection = useCallback((groups) => {
        onChangeRef.current?.(selectedGroups(groups, childrenKey));
    }, [childrenKey]);
    const closeList = useCallback(() => {
        setIsListOpen(false);
        setQuery('');
        emitSelection(source);
        onCloseRef.current?.();
    }, [emitSelection, source]);
    useEffect(() => {
        if (!isListOpen)
            return;
        const handleClickOutside = (event) => {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target)) {
                closeList();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isListOpen, closeList]);
    useEffect(() => {
        if (!isListOpen || !listRef.current)
            return;
        if (activeIndex === 0)
            return;
        const active = listRef.current.querySelector('[data-active="true"]');
        active?.scrollIntoView({ block: 'nearest' });
    }, [activeIndex, isListOpen]);
    const updateSource = (next) => {
        setSource(next);
        emitSelection(next);
    };
    const mapGroupItems = (groups, group, update) => {
        const groupId = readText(group, groupKey);
        return groups.map((entry) => {
            if (readText(entry, groupKey) !== groupId)
                return entry;
            return {
                ...entry,
                [childrenKey]: childList(entry, childrenKey).map(update),
            };
        });
    };
    const toggleItem = (group, item) => {
        const itemId = identityOf(item, valueKey, itemKey);
        updateSource(mapGroupItems(source, group, (child) => identityOf(child, valueKey, itemKey) === itemId
            ? { ...child, selected: !child.selected }
            : child));
        setIsListOpen(true);
    };
    const toggleGroup = (group, visibleItems) => {
        const visibleIds = new Set(visibleItems.map((item) => identityOf(item, valueKey, itemKey)));
        const allSelected = visibleItems.length > 0 && visibleItems.every((item) => item.selected);
        updateSource(mapGroupItems(source, group, (child) => visibleIds.has(identityOf(child, valueKey, itemKey))
            ? { ...child, selected: !allSelected }
            : child));
        setIsListOpen(true);
    };
    const openList = () => {
        if (disabled)
            return;
        if (!isListOpen)
            setQuery('');
        setIsListOpen(true);
    };
    const onChangeValue = (event) => {
        const next = event.target.value;
        // The closed field shows selected labels. The first keystroke must not
        // search for that whole summary, or the group titles stay hidden.
        const search = !isListOpen && summary && next.startsWith(summary)
            ? next.slice(summary.length)
            : next;
        setQuery(search);
        setIsListOpen(true);
        onFilter?.(search);
    };
    const handleClear = () => {
        const cleared = source.map((group) => ({
            ...group,
            [childrenKey]: childList(group, childrenKey).map((child) => ({
                ...child,
                selected: false,
            })),
        }));
        setQuery('');
        setSource(cleared);
        emitSelection(cleared);
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
            closeList();
            return;
        }
        if (event.key === 'Enter') {
            if (!isListOpen || flatOptions.length === 0)
                return;
            event.preventDefault();
            const highlighted = flatOptions[activeIndex];
            if (highlighted)
                toggleItem(highlighted.group, highlighted.item);
        }
    };
    const resolvedMaxHeight = typeof maxDropdownHeight === 'number'
        ? `min(${maxDropdownHeight}px, calc(100dvh - 8rem))`
        : maxDropdownHeight;
    const showClear = clearable && !disabled && (selectedCount > 0 || query.length > 0);
    const inputValue = isListOpen ? query : summary;
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
                }, children: [_jsx("input", { ref: inputRef, role: "combobox", "aria-expanded": isListOpen, "aria-controls": listId, "aria-autocomplete": "list", placeholder: placeholder, value: inputValue, title: summary, disabled: disabled, className: cn(s['w-full'], s['min-w-0'], s['bg-transparent'], s['focus:outline-none'], s['text-gray-900'], s['truncate'], disabled && s['cursor-not-allowed'], classNames.input), style: { fontSize: sizeFont[size], ...styles.input }, onChange: onChangeValue, onClick: openList, onFocus: () => {
                            setIsFocused(true);
                            openList();
                        }, onBlur: () => setIsFocused(false), onKeyDown: onKeyDown }), selectedCount > 0 && (_jsx("span", { className: cn(s['flex-shrink-0'], s['text-white']), style: {
                            minWidth: 20,
                            height: 20,
                            padding: '0 6px',
                            borderRadius: 999,
                            background: '#454cbf',
                            fontSize: 11,
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, children: selectedCount })), loader && (_jsx("span", { role: "status", "aria-label": "Loading", className: cn(s['animate-spin'], s['rounded-full'], s['flex-shrink-0']), style: {
                            width: 14,
                            height: 14,
                            border: '2px solid #e5e7eb',
                            borderTopColor: '#454cbf',
                        } })), showClear && (_jsx("button", { type: "button", "aria-label": "Clear", className: cn(s['flex'], s['items-center'], s['justify-center'], s['flex-shrink-0'], s['cursor-pointer'], s['text-gray-400'], s['bg-transparent'], s['border-none'], s['p-0'], classNames.clear), style: styles.clear, onMouseDown: (event) => event.preventDefault(), onClick: handleClear, children: _jsx(Icon, { nameIcon: "FaTimes", propsIcon: { size: 12, color: '#9ca3af' } }) })), _jsx("span", { className: cn(s['flex-shrink-0'], classNames.icon), style: styles.icon, children: _jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: { size: 14, color: '#6b7280' }, onClick: () => {
                                if (disabled)
                                    return;
                                if (isListOpen)
                                    closeList();
                                else {
                                    setIsListOpen(true);
                                    inputRef.current?.focus();
                                }
                            }, styles: {
                                icon: {
                                    transform: isListOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 180ms ease',
                                },
                            } }) })] }), isListOpen && !disabled && (_jsx("div", { id: listId, role: "listbox", "aria-multiselectable": "true", className: cn(s['absolute'], s['left-0'], s['w-full'], s['mt-1'], s['bg-white'], s['border'], s['border-gray-200'], s['rounded-lg'], s['shadow-lg'], s['overflow-hidden'], classNames.dropdown), style: { zIndex: 50, ...styles.dropdown }, children: flatOptions.length > 0 ? (_jsx("div", { ref: listRef, className: cn(s['overflow-y-auto'], s['overflow-x-hidden'], classNames.list), style: {
                        maxHeight: resolvedMaxHeight,
                        padding: 6,
                        ...styles.list,
                    }, children: options.map((group, groupIndex) => {
                        const children = childList(group, childrenKey);
                        const groupLabel = readText(group, groupKey);
                        const allSelected = children.length > 0 && children.every((child) => child.selected);
                        const someSelected = children.some((child) => child.selected);
                        return (_jsxs("div", { className: classNames.group, style: { marginBottom: 4, ...styles.group }, children: [_jsxs("div", { role: "presentation", className: cn(s['flex'], s['items-center'], s['w-full'], s['cursor-pointer'], classNames.groupLabel), style: {
                                        gap: 8,
                                        padding: '6px 8px',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: '0.04em',
                                        textTransform: 'uppercase',
                                        color: '#4b5563',
                                        background: '#f8fafc',
                                        borderRadius: 6,
                                        ...styles.groupLabel,
                                    }, onMouseDown: (event) => event.preventDefault(), onClick: () => toggleGroup(group, children), children: [showGroupCheckbox && (_jsx("input", { type: "checkbox", "aria-label": `Select all ${groupLabel || 'group'}`, checked: allSelected, readOnly: true, ref: (node) => {
                                                if (node)
                                                    node.indeterminate = someSelected && !allSelected;
                                            }, className: cn(s['cursor-pointer'], s['flex-shrink-0'], classNames.checkbox), style: { accentColor: '#454cbf', pointerEvents: 'none', ...styles.checkbox } })), _jsx("span", { className: s['truncate'], style: { minWidth: 0, flex: 1, color: '#4b5563' }, children: renderGroupLabel
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
                                    return (_jsxs("button", { type: "button", role: "option", "aria-selected": Boolean(item.selected), "data-active": isActive ? 'true' : 'false', title: label, className: cn(s['flex'], s['items-center'], s['w-full'], s['text-left'], s['cursor-pointer'], s['border-none'], s['bg-transparent'], classNames.item, isActive && classNames.itemActive), style: {
                                            marginTop: 2,
                                            gap: 8,
                                            padding: '8px 10px',
                                            borderRadius: 6,
                                            fontSize: sizeFont[size],
                                            color: '#111827',
                                            background: item.selected
                                                ? '#eef2ff'
                                                : isActive
                                                    ? '#f8fafc'
                                                    : 'transparent',
                                            ...styles.item,
                                            ...(isActive ? styles.itemActive : null),
                                        }, onMouseEnter: () => setActiveIndex(index), onMouseDown: (event) => event.preventDefault(), onClick: () => toggleItem(group, item), children: [_jsx("input", { type: "checkbox", checked: Boolean(item.selected), readOnly: true, tabIndex: -1, className: classNames.checkbox, style: {
                                                    accentColor: '#454cbf',
                                                    pointerEvents: 'none',
                                                    flexShrink: 0,
                                                    ...styles.checkbox,
                                                } }), _jsx("span", { className: s['truncate'], style: { minWidth: 0, flex: 1, color: '#111827' }, children: renderItem
                                                    ? renderItem(item, group, query)
                                                    : highlightMatch
                                                        ? highlightText(label, query)
                                                        : label })] }, `${groupIndex}-${index}-${label}`));
                                })] }, `${groupLabel}-${groupIndex}`));
                    }) })) : (_jsx("div", { className: classNames.emptyState, style: styles.emptyState, children: _jsx(AutoCompleteEmptyState, { loader: loader, hasSearchText: !!query.trim(), loadingDelayMs: filterDebounceDelay, emptyStateMessage: emptyStateMessage, emptyStateDescription: emptyStateDescription }) })) }))] }));
};
