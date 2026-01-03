'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { forwardRef, useState, useRef, useCallback, useEffect, useMemo, } from 'react';
import { TreeSelectRoot, Selector, Prefix, SearchInput, Placeholder, SelectedValue, Tag, TagLabel, TagClose, MaxTagPlaceholder, Suffix, ArrowIcon, ClearButton, Dropdown, TreeContainer, TreeNode, ExpandIcon, LeafIndent, Checkbox, NodeIcon, NodeTitle, EmptyState, } from './elements';
import { useExpandedState, useCheckedState, useAsyncLoading, filterTree, findNodeByValue, getFieldValue, getDescendantValues, } from './hooks';
// Icons
const ChevronDownIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const ChevronRightIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M9 6l6 6-6 6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const CloseIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const CheckIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: _jsx("path", { d: "M5 12l5 5L20 7", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const MinusIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: _jsx("path", { d: "M5 12h14", strokeLinecap: "round" }) }));
const LoadingIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }), _jsx("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })] }));
const FolderIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" }) }));
const FileIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [_jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }), _jsx("path", { d: "M14 2v6h6", fill: "none", stroke: "currentColor", strokeWidth: "1" })] }));
export const TreeSelect = forwardRef(function TreeSelectComponent(props, ref) {
    const { treeData, value, defaultValue, mode = 'single', placeholder = 'Please select', disabled = false, showSearch = false, filterTreeNode, treeNodeFilterProp = 'title', treeLine = false, showTreeIcon = false, checkable = false, checkStrictly = false, defaultExpandedKeys, expandedKeys: controlledExpandedKeys, defaultExpandAll = false, loadData, allowClear = false, autoClearSearchValue = true, maxTagCount, maxTagPlaceholder, placement = 'bottomLeft', open: controlledOpen, defaultOpen = false, variant = 'outlined', size = 'medium', prefix, suffixIcon, clearIcon, listHeight = 256, popupMatchSelectWidth = true, classNames = {}, styles = {}, className, style, status, fieldNames, dropdownRender, tabIndex = 0, autoFocus = false, onChange, onSelect, onSearch, onDropdownVisibleChange, onTreeExpand, onPopupScroll, onFocus, onBlur, onClear, ...rest } = props;
    // Refs
    const rootRef = useRef(null);
    const inputRef = useRef(null);
    // State
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const [searchValue, setSearchValue] = useState('');
    const [focused, setFocused] = useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const isMultiple = mode === 'multiple' || mode === 'checkable';
    const isCheckable = mode === 'checkable' || checkable;
    // Selection state
    const [selectedValues, setSelectedValues] = useState(() => {
        if (value !== undefined) {
            return Array.isArray(value) ? value : value ? [value] : [];
        }
        if (defaultValue !== undefined) {
            return Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
        }
        return [];
    });
    // Update when controlled value changes
    useEffect(() => {
        if (value !== undefined) {
            setSelectedValues(Array.isArray(value) ? value : value ? [value] : []);
        }
    }, [value]);
    // Expanded state
    const { expandedKeys, toggleExpand, setExpanded } = useExpandedState(treeData, defaultExpandedKeys, defaultExpandAll, controlledExpandedKeys, fieldNames);
    // Checked state (for checkable mode)
    const { checkedKeys, halfCheckedKeys, toggleCheck } = useCheckedState(treeData, isCheckable ? selectedValues : undefined, checkStrictly, fieldNames);
    // Async loading
    const { isLoading, setLoading, markLoaded } = useAsyncLoading();
    // Filter tree based on search
    const filteredData = useMemo(() => {
        if (!searchValue)
            return treeData;
        return filterTree(treeData, searchValue, filterTreeNode, treeNodeFilterProp, fieldNames);
    }, [treeData, searchValue, filterTreeNode, treeNodeFilterProp, fieldNames]);
    // Get selected labels
    const selectedLabels = useMemo(() => {
        return selectedValues.map((val) => {
            const node = findNodeByValue(treeData, val, fieldNames);
            return node ? getFieldValue(node, 'label', fieldNames) : val;
        });
    }, [selectedValues, treeData, fieldNames]);
    // Toggle dropdown
    const toggleOpen = useCallback((newOpen) => {
        if (disabled)
            return;
        if (controlledOpen === undefined) {
            setInternalOpen(newOpen);
        }
        onDropdownVisibleChange?.(newOpen);
    }, [disabled, controlledOpen, onDropdownVisibleChange]);
    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                toggleOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen, toggleOpen]);
    // Handle selector click
    const handleSelectorClick = useCallback(() => {
        if (!disabled) {
            toggleOpen(!isOpen);
            if (showSearch) {
                inputRef.current?.focus();
            }
        }
    }, [disabled, isOpen, showSearch, toggleOpen]);
    // Handle search
    const handleSearchChange = useCallback((e) => {
        const val = e.target.value;
        setSearchValue(val);
        onSearch?.(val);
    }, [onSearch]);
    // Handle node select
    const handleNodeSelect = useCallback((node) => {
        const nodeValue = getFieldValue(node, 'value', fieldNames);
        const nodeLabel = getFieldValue(node, 'label', fieldNames);
        if (node.disabled)
            return;
        if (isCheckable) {
            toggleCheck(nodeValue, node);
            const newChecked = checkedKeys.has(nodeValue)
                ? Array.from(checkedKeys).filter((v) => v !== nodeValue)
                : [...Array.from(checkedKeys), nodeValue];
            if (!checkStrictly) {
                // Handle descendants
                const descendants = getDescendantValues(node, fieldNames);
                const isChecking = !checkedKeys.has(nodeValue);
                descendants.forEach((d) => {
                    if (isChecking) {
                        if (!newChecked.includes(d))
                            newChecked.push(d);
                    }
                    else {
                        const idx = newChecked.indexOf(d);
                        if (idx > -1)
                            newChecked.splice(idx, 1);
                    }
                });
            }
            setSelectedValues(newChecked);
            onChange?.(newChecked, newChecked.map((v) => {
                const n = findNodeByValue(treeData, v, fieldNames);
                return n ? getFieldValue(n, 'label', fieldNames) : v;
            }), { triggerValue: nodeValue, triggerNode: node });
        }
        else if (isMultiple) {
            const isSelected = selectedValues.includes(nodeValue);
            const newValues = isSelected
                ? selectedValues.filter((v) => v !== nodeValue)
                : [...selectedValues, nodeValue];
            setSelectedValues(newValues);
            onSelect?.(nodeValue, node, { selected: !isSelected });
            onChange?.(newValues, newValues.map((v) => {
                const n = findNodeByValue(treeData, v, fieldNames);
                return n ? getFieldValue(n, 'label', fieldNames) : v;
            }), { preValue: selectedValues, triggerValue: nodeValue, triggerNode: node });
        }
        else {
            setSelectedValues([nodeValue]);
            onSelect?.(nodeValue, node, { selected: true });
            onChange?.(nodeValue, nodeLabel, {
                preValue: selectedValues[0],
                triggerValue: nodeValue,
                triggerNode: node,
            });
            toggleOpen(false);
        }
        if (autoClearSearchValue) {
            setSearchValue('');
        }
    }, [
        isCheckable,
        isMultiple,
        selectedValues,
        checkedKeys,
        checkStrictly,
        fieldNames,
        treeData,
        toggleCheck,
        autoClearSearchValue,
        onChange,
        onSelect,
        toggleOpen,
    ]);
    // Handle expand toggle
    const handleExpandToggle = useCallback(async (e, node) => {
        e.stopPropagation();
        const nodeValue = getFieldValue(node, 'value', fieldNames);
        const children = getFieldValue(node, 'children', fieldNames);
        // Async loading
        if (loadData &&
            !node.isLeaf &&
            (!children || children.length === 0) &&
            !isLoading(nodeValue)) {
            setLoading(nodeValue, true);
            try {
                await loadData(node);
                markLoaded(nodeValue);
            }
            catch (err) {
                console.error('Failed to load data:', err);
            }
            setLoading(nodeValue, false);
        }
        toggleExpand(nodeValue);
        const newExpanded = expandedKeys.has(nodeValue)
            ? Array.from(expandedKeys).filter((k) => k !== nodeValue)
            : [...Array.from(expandedKeys), nodeValue];
        onTreeExpand?.(newExpanded);
    }, [fieldNames, loadData, isLoading, setLoading, markLoaded, toggleExpand, expandedKeys, onTreeExpand]);
    // Handle tag remove
    const handleTagRemove = useCallback((e, val) => {
        e.stopPropagation();
        const newValues = selectedValues.filter((v) => v !== val);
        setSelectedValues(newValues);
        onChange?.(newValues, newValues.map((v) => {
            const n = findNodeByValue(treeData, v, fieldNames);
            return n ? getFieldValue(n, 'label', fieldNames) : v;
        }), { triggerValue: val });
    }, [selectedValues, treeData, fieldNames, onChange]);
    // Handle clear
    const handleClear = useCallback((e) => {
        e.stopPropagation();
        setSelectedValues([]);
        setSearchValue('');
        onChange?.(isMultiple ? [] : '', isMultiple ? [] : '', {});
        onClear?.();
    }, [isMultiple, onChange, onClear]);
    // Handle focus/blur
    const handleFocus = useCallback((e) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);
    const handleBlur = useCallback((e) => {
        setFocused(false);
        onBlur?.(e);
    }, [onBlur]);
    // Keyboard navigation
    const handleKeyDown = useCallback((e) => {
        switch (e.key) {
            case 'Enter':
            case ' ':
                if (!isOpen) {
                    toggleOpen(true);
                }
                break;
            case 'Escape':
                toggleOpen(false);
                break;
            case 'Backspace':
                if (!searchValue && isMultiple && selectedValues.length > 0) {
                    const newValues = selectedValues.slice(0, -1);
                    setSelectedValues(newValues);
                    onChange?.(newValues, newValues.map((v) => {
                        const n = findNodeByValue(treeData, v, fieldNames);
                        return n ? getFieldValue(n, 'label', fieldNames) : v;
                    }), {});
                }
                break;
        }
    }, [isOpen, searchValue, isMultiple, selectedValues, treeData, fieldNames, onChange, toggleOpen]);
    // Auto focus
    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);
    // Render tree node
    const renderTreeNode = (node, level = 0) => {
        const nodeValue = getFieldValue(node, 'value', fieldNames);
        const nodeLabel = getFieldValue(node, 'label', fieldNames);
        const children = getFieldValue(node, 'children', fieldNames);
        const hasChildren = children && children.length > 0;
        const isExpanded = expandedKeys.has(nodeValue);
        const isSelected = selectedValues.includes(nodeValue);
        const isChecked = checkedKeys.has(nodeValue);
        const isHalfChecked = halfCheckedKeys.has(nodeValue);
        const loading = isLoading(nodeValue);
        const isLeaf = node.isLeaf || (!hasChildren && !loadData);
        const showLine = !!treeLine;
        return (_jsxs(React.Fragment, { children: [_jsxs(TreeNode, { "$level": level, "$isLeaf": isLeaf, "$disabled": !!node.disabled, "$selected": isSelected && !isCheckable, "$checked": isChecked, "$indeterminate": isHalfChecked, "$showLine": showLine, "data-disabled": node.disabled, className: classNames.node, style: styles.node, onClick: () => handleNodeSelect(node), role: "treeitem", "aria-selected": isSelected, "aria-expanded": hasChildren ? isExpanded : undefined, "aria-disabled": node.disabled, children: [isLeaf ? (_jsx(LeafIndent, {})) : (_jsx(ExpandIcon, { "$expanded": isExpanded, "$loading": loading, onClick: (e) => handleExpandToggle(e, node), children: loading ? _jsx(LoadingIcon, {}) : _jsx(ChevronRightIcon, {}) })), isCheckable && node.checkable !== false && (_jsxs(Checkbox, { "$checked": isChecked, "$indeterminate": isHalfChecked && !isChecked, "$disabled": !!node.disableCheckbox || !!node.disabled, className: classNames.nodeCheckbox, style: styles.nodeCheckbox, role: "checkbox", "aria-checked": isHalfChecked ? 'mixed' : isChecked, children: [isChecked && _jsx(CheckIcon, {}), isHalfChecked && !isChecked && _jsx(MinusIcon, {})] })), showTreeIcon && (_jsx(NodeIcon, { children: node.icon || (isLeaf ? _jsx(FileIcon, {}) : _jsx(FolderIcon, {})) })), _jsx(NodeTitle, { "$disabled": !!node.disabled, className: classNames.nodeTitle, style: styles.nodeTitle, children: nodeLabel })] }), hasChildren && isExpanded && (_jsx(_Fragment, { children: children.map((child) => renderTreeNode(child, level + 1)) }))] }, node.key || nodeValue));
    };
    // Render selected tags
    const renderTags = () => {
        if (!isMultiple)
            return null;
        let visibleValues = selectedValues;
        let hiddenCount = 0;
        if (maxTagCount !== undefined && maxTagCount !== 'responsive') {
            visibleValues = selectedValues.slice(0, maxTagCount);
            hiddenCount = selectedValues.length - maxTagCount;
        }
        return (_jsxs(_Fragment, { children: [visibleValues.map((val, idx) => {
                    const label = selectedLabels[selectedValues.indexOf(val)];
                    const node = findNodeByValue(treeData, val, fieldNames);
                    return (_jsxs(Tag, { "$size": size, "$disabled": node?.disabled, className: classNames.tag, style: styles.tag, children: [_jsx(TagLabel, { children: label }), !disabled && !node?.disabled && (_jsx(TagClose, { onClick: (e) => handleTagRemove(e, val), children: _jsx(CloseIcon, {}) }))] }, val));
                }), hiddenCount > 0 && (_jsx(MaxTagPlaceholder, { "$size": size, children: typeof maxTagPlaceholder === 'function'
                        ? maxTagPlaceholder(selectedValues.slice(maxTagCount))
                        : maxTagPlaceholder || `+${hiddenCount}` }))] }));
    };
    // Render dropdown content
    const renderDropdown = () => {
        const content = (_jsx(TreeContainer, { "$showLine": !!treeLine, className: classNames.tree, style: styles.tree, role: "tree", onScroll: onPopupScroll, children: filteredData.length === 0 ? (_jsx(EmptyState, { children: "No data" })) : (filteredData.map((node) => renderTreeNode(node))) }));
        return dropdownRender ? dropdownRender(content) : content;
    };
    const hasValue = selectedValues.length > 0;
    return (_jsxs(TreeSelectRoot, { ref: (node) => {
            rootRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        }, "$size": size, "$variant": variant, "$status": status, "$disabled": disabled, "$focused": focused, "data-disabled": disabled, className: className || classNames.root, style: { ...styles.root, ...style }, onKeyDown: handleKeyDown, tabIndex: disabled ? -1 : tabIndex, role: "combobox", "aria-expanded": isOpen, "aria-haspopup": "tree", "aria-disabled": disabled, "aria-label": rest['aria-label'], "aria-labelledby": rest['aria-labelledby'], children: [_jsxs(Selector, { "$size": size, "$variant": variant, "$status": status, "$multiple": isMultiple, "$hasValue": hasValue, className: classNames.selector, style: styles.selector, onClick: handleSelectorClick, onFocus: handleFocus, onBlur: handleBlur, children: [prefix && (_jsx(Prefix, { "$size": size, className: classNames.prefix, style: styles.prefix, children: prefix })), renderTags(), showSearch ? (_jsx(SearchInput, { ref: inputRef, "$size": size, value: searchValue, onChange: handleSearchChange, placeholder: hasValue && !isMultiple ? '' : placeholder, disabled: disabled, className: classNames.search, style: styles.search, "aria-label": "Search" })) : !isMultiple || !hasValue ? (hasValue && !isMultiple ? (_jsx(SelectedValue, { children: selectedLabels[0] })) : (_jsx(Placeholder, { className: classNames.placeholder, style: styles.placeholder, children: placeholder }))) : null, _jsxs(Suffix, { "$size": size, "$open": isOpen, className: classNames.suffix, style: styles.suffix, children: [allowClear && hasValue && !disabled && (_jsx(ClearButton, { onClick: handleClear, "aria-label": "Clear", children: clearIcon || _jsx(CloseIcon, {}) })), _jsx(ArrowIcon, { "$open": isOpen, children: suffixIcon || _jsx(ChevronDownIcon, {}) })] })] }), isOpen && (_jsx(Dropdown, { "$placement": placement, "$maxHeight": listHeight, "$matchWidth": popupMatchSelectWidth, className: classNames.popup, style: styles.popup, role: "listbox", children: renderDropdown() }))] }));
});
TreeSelect.displayName = 'TreeSelect';
export default TreeSelect;
