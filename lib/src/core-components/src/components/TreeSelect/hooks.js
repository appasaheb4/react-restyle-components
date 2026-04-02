import { useState, useCallback, useEffect } from 'react';
/**
 * Get the actual field value based on field names mapping
 */
export function getFieldValue(node, field, fieldNames = {}) {
    const mapping = {
        label: fieldNames.label || 'title',
        value: fieldNames.value || 'value',
        children: fieldNames.children || 'children',
    };
    return node[mapping[field]];
}
/**
 * Flatten tree data for easier searching
 */
export function flattenTree(nodes, fieldNames, parent) {
    const result = [];
    for (const node of nodes) {
        const value = getFieldValue(node, 'value', fieldNames);
        const children = getFieldValue(node, 'children', fieldNames);
        const path = parent ? [...parent.path, value] : [value];
        result.push({ ...node, parent, path });
        if (children && Array.isArray(children)) {
            result.push(...flattenTree(children, fieldNames, { ...node, path }));
        }
    }
    return result;
}
/**
 * Find a node by value
 */
export function findNodeByValue(nodes, value, fieldNames) {
    for (const node of nodes) {
        const nodeValue = getFieldValue(node, 'value', fieldNames);
        const children = getFieldValue(node, 'children', fieldNames);
        if (nodeValue === value)
            return node;
        if (children && Array.isArray(children)) {
            const found = findNodeByValue(children, value, fieldNames);
            if (found)
                return found;
        }
    }
    return undefined;
}
/**
 * Get all descendant values
 */
export function getDescendantValues(node, fieldNames) {
    const values = [];
    const children = getFieldValue(node, 'children', fieldNames);
    if (children && Array.isArray(children)) {
        for (const child of children) {
            const childValue = getFieldValue(child, 'value', fieldNames);
            values.push(childValue);
            values.push(...getDescendantValues(child, fieldNames));
        }
    }
    return values;
}
/**
 * Get all ancestor values
 */
export function getAncestorValues(nodes, targetValue, fieldNames) {
    const flatNodes = flattenTree(nodes, fieldNames);
    const target = flatNodes.find((n) => getFieldValue(n, 'value', fieldNames) === targetValue);
    return target?.path.slice(0, -1) || [];
}
/**
 * Filter tree nodes based on search
 */
export function filterTree(nodes, searchValue, filterFn, filterProp = 'title', fieldNames) {
    if (!searchValue)
        return nodes;
    const defaultFilter = (value, node) => {
        const nodeLabel = node[filterProp];
        if (typeof nodeLabel === 'string') {
            return nodeLabel.toLowerCase().includes(value.toLowerCase());
        }
        return false;
    };
    const filter = filterFn || defaultFilter;
    const result = [];
    for (const node of nodes) {
        const children = getFieldValue(node, 'children', fieldNames);
        const filteredChildren = children
            ? filterTree(children, searchValue, filterFn, filterProp, fieldNames)
            : [];
        if (filter(searchValue, node) || filteredChildren.length > 0) {
            result.push({
                ...node,
                children: filteredChildren.length > 0 ? filteredChildren : children,
            });
        }
    }
    return result;
}
/**
 * Hook for managing expanded state
 */
export function useExpandedState(treeData, defaultExpandedKeys, defaultExpandAll, controlledExpandedKeys, fieldNames) {
    const [internalExpanded, setInternalExpanded] = useState(() => {
        if (defaultExpandAll) {
            const allKeys = new Set();
            const collectKeys = (nodes) => {
                for (const node of nodes) {
                    const value = getFieldValue(node, 'value', fieldNames);
                    const children = getFieldValue(node, 'children', fieldNames);
                    if (children && children.length > 0) {
                        allKeys.add(value);
                        collectKeys(children);
                    }
                }
            };
            collectKeys(treeData);
            return allKeys;
        }
        return new Set(defaultExpandedKeys || []);
    });
    const expandedKeys = controlledExpandedKeys
        ? new Set(controlledExpandedKeys)
        : internalExpanded;
    const toggleExpand = useCallback((key) => {
        setInternalExpanded((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            }
            else {
                next.add(key);
            }
            return next;
        });
    }, []);
    const setExpanded = useCallback((keys) => {
        setInternalExpanded(new Set(keys));
    }, []);
    return { expandedKeys, toggleExpand, setExpanded };
}
/**
 * Hook for managing checked state (checkable mode)
 */
export function useCheckedState(treeData, value, checkStrictly = false, fieldNames) {
    const [checkedKeys, setCheckedKeys] = useState(new Set(value || []));
    const [halfCheckedKeys, setHalfCheckedKeys] = useState(new Set());
    // Update when controlled value changes
    useEffect(() => {
        if (value) {
            setCheckedKeys(new Set(value));
            if (!checkStrictly) {
                updateHalfChecked(new Set(value));
            }
        }
    }, [value, checkStrictly]);
    const updateHalfChecked = useCallback((checked) => {
        if (checkStrictly) {
            setHalfCheckedKeys(new Set());
            return;
        }
        const half = new Set();
        const flatNodes = flattenTree(treeData, fieldNames);
        // Check each parent node
        for (const node of flatNodes) {
            const nodeValue = getFieldValue(node, 'value', fieldNames);
            const children = getFieldValue(node, 'children', fieldNames);
            if (children && children.length > 0) {
                const descendantValues = getDescendantValues(node, fieldNames);
                const checkedDescendants = descendantValues.filter((v) => checked.has(v));
                if (checkedDescendants.length > 0 &&
                    checkedDescendants.length < descendantValues.length) {
                    half.add(nodeValue);
                }
            }
        }
        setHalfCheckedKeys(half);
    }, [treeData, checkStrictly, fieldNames]);
    const toggleCheck = useCallback((nodeValue, node) => {
        setCheckedKeys((prev) => {
            const next = new Set(prev);
            const isChecked = next.has(nodeValue);
            if (isChecked) {
                next.delete(nodeValue);
                if (!checkStrictly) {
                    // Uncheck all descendants
                    const descendants = getDescendantValues(node, fieldNames);
                    descendants.forEach((v) => next.delete(v));
                }
            }
            else {
                next.add(nodeValue);
                if (!checkStrictly) {
                    // Check all descendants
                    const descendants = getDescendantValues(node, fieldNames);
                    descendants.forEach((v) => next.add(v));
                }
            }
            // Update parent states if not strict
            if (!checkStrictly) {
                updateParentStates(next, nodeValue, treeData, fieldNames);
            }
            updateHalfChecked(next);
            return next;
        });
    }, [checkStrictly, treeData, fieldNames, updateHalfChecked]);
    return { checkedKeys, halfCheckedKeys, toggleCheck, setCheckedKeys };
}
function updateParentStates(checked, changedValue, treeData, fieldNames) {
    const ancestors = getAncestorValues(treeData, changedValue, fieldNames);
    for (const ancestorValue of ancestors.reverse()) {
        const ancestorNode = findNodeByValue(treeData, ancestorValue, fieldNames);
        if (ancestorNode) {
            const descendants = getDescendantValues(ancestorNode, fieldNames);
            const allChecked = descendants.every((v) => checked.has(v));
            if (allChecked) {
                checked.add(ancestorValue);
            }
            else {
                checked.delete(ancestorValue);
            }
        }
    }
}
/**
 * Hook for managing async loading
 */
export function useAsyncLoading() {
    const [loadingKeys, setLoadingKeys] = useState(new Set());
    const [loadedKeys, setLoadedKeys] = useState(new Set());
    const setLoading = useCallback((key, isLoading) => {
        setLoadingKeys((prev) => {
            const next = new Set(prev);
            if (isLoading) {
                next.add(key);
            }
            else {
                next.delete(key);
            }
            return next;
        });
    }, []);
    const markLoaded = useCallback((key) => {
        setLoadedKeys((prev) => new Set(prev).add(key));
        setLoadingKeys((prev) => {
            const next = new Set(prev);
            next.delete(key);
            return next;
        });
    }, []);
    const isLoading = useCallback((key) => loadingKeys.has(key), [loadingKeys]);
    const isLoaded = useCallback((key) => loadedKeys.has(key), [loadedKeys]);
    return { loadingKeys, setLoading, markLoaded, isLoading, isLoaded };
}
