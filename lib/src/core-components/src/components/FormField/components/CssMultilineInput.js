import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Textarea } from '../../../core-components/atoms/Textarea/Textarea';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { properties as defaultCssProperties } from '../css-properties';
/** Used for suggestion grouping labels and scoped property pools */
const CSS_COLOR_PROPERTIES = new Set([
    'backgroundColor',
    'color',
    'borderColor',
    'textDecorationColor',
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor',
]);
/** Placeholder value shown after picking a color property — replaced when user picks or types a real color */
const COLOR_PROPERTY_PLACEHOLDER = 'string';
/** Incomplete segment after choosing a property name from the list (before picking a value). */
function incompleteSegmentForSelectedProperty(propertyKey) {
    return CSS_COLOR_PROPERTIES.has(propertyKey)
        ? `${propertyKey}:'${COLOR_PROPERTY_PLACEHOLDER}'`
        : `${propertyKey}:`;
}
/** Everyday CSS colors — shown first when picking values for color-related properties */
const COMMON_CSS_COLOR_VALUES = [
    'white',
    'black',
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'gray',
    'grey',
    'brown',
    'cyan',
    'magenta',
    'lime',
    'navy',
    'teal',
    'maroon',
    'olive',
    'silver',
    'gold',
    'violet',
    'indigo',
    'coral',
    'transparent',
    'currentColor',
    'inherit',
    '#000000',
    '#ffffff',
    '#ff0000',
    '#0000ff',
    '#008000',
    '#ffa500',
    '#808080',
];
function mergeColorEnumValuesWithCommonPresets(base) {
    const seen = new Set();
    const out = [];
    for (const c of COMMON_CSS_COLOR_VALUES) {
        const k = c.toLowerCase();
        if (!seen.has(k)) {
            seen.add(k);
            out.push(c);
        }
    }
    for (const v of base) {
        const k = v.toLowerCase();
        if (!seen.has(k)) {
            seen.add(k);
            out.push(v);
        }
    }
    return out;
}
/** Fallback when the schema only lists `number` and no property-specific map exists */
const GENERIC_NUMERIC_PRESETS = [
    '0',
    '8',
    '16',
    '24',
    '32',
    '48',
    '64',
    '100',
];
/**
 * Suggested values for properties whose schema is only `number` — shown after picking the property.
 */
const NUMERIC_PROPERTY_VALUE_PRESETS = {
    fontSize: ['12', '14', '16', '18', '20', '24', '28'],
    lineHeight: ['1', '1.2', '1.4', '1.5', '1.6', '2'],
    letterSpacing: ['0', '0.5', '1', '2'],
    width: ['auto', '100', '200', '400', '600', '800', '100%'],
    height: ['auto', '100', '200', '400', '600', '800', '100%'],
    maxWidth: ['100', '200', '400', '600', '800', '100%', 'none'],
    maxHeight: ['100', '200', '400', '600', '800', '100%', 'none'],
    minWidth: ['0', '100', '200'],
    minHeight: ['0', '100', '200'],
    top: ['0', '8', '16', '24', 'auto'],
    right: ['0', '8', '16', '24', 'auto'],
    bottom: ['0', '8', '16', '24', 'auto'],
    left: ['0', '8', '16', '24', 'auto'],
    margin: ['0', '4', '8', '12', '16', '24', 'auto'],
    marginHorizontal: ['0', '4', '8', '12', '16', '24'],
    marginVertical: ['0', '4', '8', '12', '16', '24'],
    marginTop: ['0', '4', '8', '12', '16', 'auto'],
    marginRight: ['0', '4', '8', '12', '16', 'auto'],
    marginBottom: ['0', '4', '8', '12', '16', 'auto'],
    marginLeft: ['0', '4', '8', '12', '16', 'auto'],
    padding: ['0', '4', '8', '12', '16', '24', '32'],
    paddingHorizontal: ['0', '4', '8', '12', '16', '24'],
    paddingVertical: ['0', '4', '8', '12', '16', '24'],
    paddingTop: ['0', '4', '8', '12', '16'],
    paddingRight: ['0', '4', '8', '12', '16'],
    paddingBottom: ['0', '4', '8', '12', '16'],
    paddingLeft: ['0', '4', '8', '12', '16'],
    gap: ['0', '4', '8', '12', '16', '24'],
    rowGap: ['0', '4', '8', '12', '16'],
    columnGap: ['0', '4', '8', '12', '16'],
    opacity: ['0', '0.25', '0.5', '0.75', '1'],
    zIndex: ['0', '1', '10', '100', '1000'],
    flex: ['0', '1', '2'],
    flexGrow: ['0', '1'],
    flexShrink: ['0', '1'],
    flexBasis: ['auto', '0', '100', '200'],
    flexFlow: ['1', '2'],
    border: ['0', '1', '2'],
    borderWidth: ['0', '1', '2', '4'],
    borderTop: ['0', '1', '2', '4'],
    borderRight: ['0', '1', '2', '4'],
    borderBottom: ['0', '1', '2', '4'],
    borderLeft: ['0', '1', '2', '4'],
    borderTopWidth: ['0', '1', '2', '4'],
    borderRightWidth: ['0', '1', '2', '4'],
    borderBottomWidth: ['0', '1', '2', '4'],
    borderLeftWidth: ['0', '1', '2', '4'],
    borderRadius: ['0', '4', '8', '12', '9999'],
    borderTopLeftRadius: ['0', '4', '8', '12'],
    borderTopRightRadius: ['0', '4', '8', '12'],
    borderBottomRightRadius: ['0', '4', '8', '12'],
    borderBottomLeftRadius: ['0', '4', '8', '12'],
    objectPosition: ['50%', '0%', '100%'],
    objectPositionX: ['50%', '0%', '100%'],
    objectPositionY: ['50%', '0%', '100%'],
    transformOrigin: ['50%', '0%', '100%'],
    transformOriginX: ['50%', '0%', '100%'],
    transformOriginY: ['50%', '0%', '100%'],
    aspectRatio: ['1', '16/9', '4/3'],
    maxLines: ['1', '2', '3', '5'],
};
function getRawSchemaTokens(propertyKey, fullList) {
    const row = fullList.find(([k]) => k === propertyKey);
    return (row?.[1] ?? []).filter((v) => typeof v === 'string' && v !== '');
}
function schemaIsNumberOnly(propertyKey, fullList) {
    const raw = getRawSchemaTokens(propertyKey, fullList);
    return raw.length === 1 && raw[0] === 'number';
}
function mergeNumericSuggestionPresets(propertyKey, base, fullList) {
    if (!schemaIsNumberOnly(propertyKey, fullList)) {
        return base;
    }
    const presets = NUMERIC_PROPERTY_VALUE_PRESETS[propertyKey] ?? GENERIC_NUMERIC_PRESETS;
    const seen = new Set();
    const out = [];
    for (const p of presets) {
        const k = p.toLowerCase();
        if (!seen.has(k)) {
            seen.add(k);
            out.push(p);
        }
    }
    for (const b of base) {
        const k = b.toLowerCase();
        if (!seen.has(k)) {
            seen.add(k);
            out.push(b);
        }
    }
    return out;
}
/** One segment `propKey:value` with quoting rules aligned to the field DSL */
function formatCssPropertySegment(propertyKey, prop) {
    if (prop === 'number') {
        return `${propertyKey}:1`;
    }
    if (/^-?\d+(\.\d+)?$/.test(prop)) {
        return `${propertyKey}:${prop}`;
    }
    if (/^-?\d+(\.\d+)?(%|px|em|rem|vh|vw|ch|ex)$/.test(prop)) {
        return `${propertyKey}:${prop}`;
    }
    const escaped = prop.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `${propertyKey}:'${escaped}'`;
}
/**
 * Split comma-separated DSL segments without splitting on commas inside '...' or "..."
 */
function splitCssCommaSegments(input) {
    const out = [];
    let cur = '';
    let inQuote = null;
    for (let i = 0; i < input.length; i++) {
        const c = input[i];
        if (inQuote) {
            cur += c;
            if (c === '\\' && i + 1 < input.length) {
                cur += input[++i];
            }
            else if (c === inQuote) {
                inQuote = null;
            }
            continue;
        }
        if (c === "'" || c === '"') {
            inQuote = c;
            cur += c;
            continue;
        }
        if (c === ',') {
            const t = cur.trim();
            if (t)
                out.push(t);
            cur = '';
            continue;
        }
        cur += c;
    }
    const tail = cur.trim();
    if (tail)
        out.push(tail);
    return out;
}
/**
 * One declaration per property key — later segments replace earlier ones (same key).
 */
function dedupeCssPropertySegments(css) {
    const trimmed = css.trim().replace(/,+$/, '');
    if (!trimmed)
        return '';
    const parts = splitCssCommaSegments(trimmed);
    const lastIdx = new Map();
    const orphans = [];
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i].trim();
        const colon = part.indexOf(':');
        if (colon <= 0) {
            orphans.push({ index: i, text: part });
            continue;
        }
        const key = part.slice(0, colon).trim();
        if (!key) {
            orphans.push({ index: i, text: part });
            continue;
        }
        lastIdx.set(key, i);
    }
    const keyedSegments = [...lastIdx.entries()]
        .sort((a, b) => a[1] - b[1])
        .map(([, idx]) => parts[idx].trim());
    const orphanTexts = orphans
        .sort((a, b) => a.index - b.index)
        .map((o) => o.text);
    const merged = [...keyedSegments, ...orphanTexts].filter(Boolean);
    if (merged.length === 0)
        return '';
    return `${merged.join(',')},`;
}
function getLastSegmentValuePrefix(css, propertyKey) {
    const parts = splitCssCommaSegments(css).filter(Boolean);
    const last = parts[parts.length - 1] ?? '';
    const colonIdx = last.indexOf(':');
    if (colonIdx <= 0)
        return '';
    const key = last.slice(0, colonIdx).trim();
    if (key !== propertyKey)
        return '';
    return last
        .slice(colonIdx + 1)
        .trim()
        .replace(/,$/, '')
        .replace(/^['"]|['"]$/g, '');
}
function getEnumValuesForProperty(propertyKey, fullList) {
    const row = fullList.find(([k]) => k === propertyKey);
    if (!row)
        return [];
    return (row[1] ?? []).filter((v) => typeof v === 'string' &&
        v !== '' &&
        v !== 'string' &&
        v !== 'number' &&
        v !== 'any');
}
/** Replace existing segment for `propertyKey` or append (comma-separated DSL). */
function upsertCssPropertySegment(css, propertyKey, prop) {
    const segment = formatCssPropertySegment(propertyKey, prop);
    if (!css?.trim()) {
        return `${segment},`;
    }
    const rawParts = splitCssCommaSegments(css).filter(Boolean);
    const next = [];
    let replaced = false;
    for (const part of rawParts) {
        const colon = part.indexOf(':');
        if (colon <= 0) {
            next.push(part);
            continue;
        }
        const key = part.slice(0, colon).trim();
        if (key === propertyKey) {
            next.push(segment);
            replaced = true;
        }
        else {
            next.push(part.replace(/,$/, ''));
        }
    }
    if (!replaced) {
        next.push(segment);
    }
    const joined = `${next.join(',')},`;
    return dedupeCssPropertySegments(joined) || joined;
}
/**
 * When the user picks a property from the list, mirror it in the textarea as `name:`
 * so the field stays in sync and value picking filters correctly.
 */
function applySelectedPropertyNameToCss(css, propertyKey) {
    const trimmed = css.trim();
    const core = trimmed.replace(/,+$/, '');
    const segments = core
        ? splitCssCommaSegments(core).map((x) => x.trim()).filter(Boolean)
        : [];
    if (segments.length === 0) {
        return `${incompleteSegmentForSelectedProperty(propertyKey)},`;
    }
    const last = segments[segments.length - 1];
    const colonIdx = last.indexOf(':');
    if (colonIdx === -1) {
        segments[segments.length - 1] =
            incompleteSegmentForSelectedProperty(propertyKey);
        return `${segments.join(',')},`;
    }
    const keyPart = last.slice(0, colonIdx).trim();
    const valuePart = last.slice(colonIdx + 1).trim().replace(/,$/, '');
    const keysAlign = keyPart.toLowerCase() === propertyKey.toLowerCase() ||
        propertyKey.toLowerCase().startsWith(keyPart.toLowerCase());
    if (valuePart === '' && keysAlign) {
        segments[segments.length - 1] =
            incompleteSegmentForSelectedProperty(propertyKey);
        return `${segments.join(',')},`;
    }
    if (valuePart === '' && keyPart !== '' && !keysAlign) {
        segments[segments.length - 1] =
            incompleteSegmentForSelectedProperty(propertyKey);
        return `${segments.join(',')},`;
    }
    segments.push(incompleteSegmentForSelectedProperty(propertyKey));
    return `${segments.join(',')},`;
}
/** Layout / flexbox — friendlier suggestion labels & presets */
const LAYOUT_RELATED_PROPERTIES = new Set([
    'display',
    'flex',
    'flexDirection',
    'flexWrap',
    'flexFlow',
    'justifyContent',
    'alignItems',
    'alignContent',
    'alignSelf',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'gap',
    'rowGap',
    'columnGap',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'zIndex',
]);
function getScopedPropertyPool(scope, fullList) {
    if (scope === 'color') {
        return fullList.filter(([name]) => CSS_COLOR_PROPERTIES.has(name));
    }
    if (scope === 'layout') {
        return fullList.filter(([name]) => LAYOUT_RELATED_PROPERTIES.has(name));
    }
    return fullList;
}
/** Narrow the suggestion pool from what the user is typing (last segment property prefix). */
function inferScopeFromTyping(css, fullList) {
    const trimmed = css.trim();
    if (!trimmed)
        return 'all';
    const parts = trimmed.split(',').map((x) => x.trim()).filter(Boolean);
    const last = parts[parts.length - 1] ?? '';
    const colonIdx = last.indexOf(':');
    let keyPart = (colonIdx >= 0 ? last.slice(0, colonIdx) : last).trim();
    keyPart = keyPart.split("'")[0]?.trim() ?? '';
    if (!keyPart)
        return 'all';
    const names = fullList.map(([n]) => n);
    const lower = keyPart.toLowerCase();
    const candidates = names.filter((n) => n.toLowerCase().startsWith(lower));
    if (candidates.length === 0)
        return 'all';
    if (candidates.every((n) => CSS_COLOR_PROPERTIES.has(n)))
        return 'color';
    if (candidates.every((n) => LAYOUT_RELATED_PROPERTIES.has(n))) {
        return 'layout';
    }
    return 'all';
}
/** Short titles + hints for common layout keyword values */
const LAYOUT_VALUE_PRESENTATION = {
    display: {
        flex: { title: 'Flex', hint: 'Flexbox — row/column stacks' },
        grid: { title: 'Grid', hint: 'CSS Grid' },
        none: { title: 'None', hint: 'Hide from layout' },
        block: { title: 'Block', hint: 'Block-level box' },
        'inline-flex': { title: 'Inline flex', hint: 'Flex inline with text' },
        'inline-grid': { title: 'Inline grid', hint: 'Grid inline with text' },
        contents: { title: 'Contents', hint: 'Children participate in parent grid/flex' },
    },
    flexDirection: {
        row: { title: 'Row', hint: 'Main axis → horizontal' },
        'row-reverse': { title: 'Row reverse', hint: 'Horizontal, reversed' },
        column: { title: 'Column', hint: 'Main axis → vertical' },
        'column-reverse': { title: 'Column reverse', hint: 'Vertical, reversed' },
    },
    justifyContent: {
        'flex-start': { title: 'Start', hint: 'Pack from main-axis start' },
        'flex-end': { title: 'End', hint: 'Pack toward main-axis end' },
        center: { title: 'Center', hint: 'Center on main axis' },
        'space-between': { title: 'Space between', hint: 'Between items' },
        'space-around': { title: 'Space around', hint: 'Gap around items' },
        'space-evenly': { title: 'Space evenly', hint: 'Equal space' },
    },
    alignItems: {
        'flex-start': { title: 'Align start', hint: 'Cross-axis start' },
        'flex-end': { title: 'Align end', hint: 'Cross-axis end' },
        center: { title: 'Align center', hint: 'Cross-axis center' },
        stretch: { title: 'Stretch', hint: 'Fill cross size' },
        baseline: { title: 'Baseline', hint: 'Text baseline' },
    },
    alignContent: {
        'flex-start': { title: 'Lines at start', hint: 'Wrap lines pack start' },
        'flex-end': { title: 'Lines at end', hint: 'Wrap lines pack end' },
        center: { title: 'Lines centered', hint: 'Wrap lines centered' },
        stretch: { title: 'Stretch lines', hint: 'Fill cross-axis' },
        'space-between': { title: 'Space between lines', hint: '' },
        'space-around': { title: 'Space around lines', hint: '' },
    },
    flexWrap: {
        nowrap: { title: 'No wrap', hint: 'Single line' },
        wrap: { title: 'Wrap', hint: 'Multiple lines' },
        'wrap-reverse': { title: 'Wrap reverse', hint: 'Lines reversed' },
    },
    position: {
        relative: { title: 'Relative', hint: 'Offset from normal flow' },
        absolute: { title: 'Absolute', hint: 'Position to containing box' },
    },
};
export const DEFAULT_LAYOUT_PRESETS = [
    {
        id: 'flex-col-center-relative',
        title: 'Flex column · centered · relative',
        hint: 'display flex, column, justify & align center, position relative',
        snippet: `display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',position:'relative',`,
    },
    {
        id: 'flex-row-space-between',
        title: 'Flex row · space-between · center',
        hint: 'Horizontal bar layout',
        snippet: `display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',`,
    },
    {
        id: 'flex-col-start',
        title: 'Flex column · top aligned',
        hint: 'Column stack, items at start',
        snippet: `display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch',`,
    },
    {
        id: 'grid-basic',
        title: 'Grid layout',
        hint: 'display grid',
        snippet: `display:'grid',`,
    },
];
function mergeCssFragment(existing, fragment) {
    const e = existing.trim();
    const f = fragment.trim();
    if (!e) {
        const d = dedupeCssPropertySegments(f);
        return d || f;
    }
    const join = e.endsWith(',') ? '' : ',';
    const merged = `${e}${join}${f}`.replace(/,{2,}/g, ',');
    const d = dedupeCssPropertySegments(merged);
    return d || merged;
}
function getExtendedEnumValuesForProperty(propertyKey, fullList) {
    const base = getEnumValuesForProperty(propertyKey, fullList);
    if (CSS_COLOR_PROPERTIES.has(propertyKey)) {
        return mergeColorEnumValuesWithCommonPresets(base);
    }
    if (propertyKey === 'display') {
        const extras = [
            'grid',
            'block',
            'inline-flex',
            'inline-grid',
            'contents',
        ];
        const merged = [...new Set([...base, ...extras])];
        const order = [
            'flex',
            'grid',
            'none',
            'block',
            'inline-flex',
            'inline-grid',
            'contents',
        ];
        merged.sort((a, b) => {
            const ia = order.indexOf(a);
            const ib = order.indexOf(b);
            if (ia !== -1 && ib !== -1)
                return ia - ib;
            if (ia !== -1)
                return -1;
            if (ib !== -1)
                return 1;
            return a.localeCompare(b);
        });
        return merged;
    }
    return mergeNumericSuggestionPresets(propertyKey, base, fullList);
}
function getLayoutValuePresentation(propertyKey, value) {
    const row = LAYOUT_VALUE_PRESENTATION[propertyKey]?.[value];
    const code = `${propertyKey}: '${value}'`;
    if (row) {
        return {
            title: row.title,
            subtitle: row.hint ? `${code} · ${row.hint}` : code,
        };
    }
    return {
        title: value,
        subtitle: code,
    };
}
// Helper function to map CSS properties to array format
const mapToArray = (arr) => {
    const res = [];
    arr.forEach(function (obj, index) {
        const key = Object.keys(obj)[0];
        const value = key;
        res.push([value, obj[key]]);
    });
    return res;
};
export const CssMultilineInput = React.forwardRef(({ id, label, error, required, value, onChange, onBlur, disabled, cssProperties, onReset, onMoreInfo, placeholder = "fontSize: 12,backgroundColor:'#000000'", className, labelProps, layoutPresets = DEFAULT_LAYOUT_PRESETS, onFocus, onKeyDown, onKeyUp, ...props }, ref) => {
    const textareaRef = useRef(null);
    const setTextareaRef = useCallback((node) => {
        textareaRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref != null) {
            ref.current =
                node;
        }
    }, [ref]);
    const cssWrapperRef = useRef(null);
    const focusCssInputAtEnd = useCallback((nextValue) => {
        const el = textareaRef.current;
        if (!el)
            return;
        el.focus();
        const len = (nextValue ?? el.value ?? '').length;
        requestAnimationFrame(() => {
            try {
                el.setSelectionRange(len, len);
            }
            catch {
                /* ignore */
            }
        });
        cssWrapperRef.current?.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
        });
    }, []);
    const [isCssListOpen, setIsCssListOpen] = useState(false);
    const [displayValue, setDisplayValue] = useState(() => value ?? '');
    const [cssPropertiesList, setCssPropertiesList] = useState(cssProperties || mapToArray(defaultCssProperties));
    const cssValueRef = useRef(value || '');
    /** After Esc / Close, don't auto-open suggestions until user focuses the field again */
    const suppressSuggestionsRef = useRef(false);
    const [suggestionPhase, setSuggestionPhase] = useState('properties');
    const [activePropertyKey, setActivePropertyKey] = useState(null);
    const fullPropertiesList = useMemo(() => cssProperties || mapToArray(defaultCssProperties), [cssProperties]);
    // Outside click handler
    useEffect(() => {
        function handleClickOutside(event) {
            if (cssWrapperRef.current &&
                !cssWrapperRef.current.contains(event.target) &&
                isCssListOpen) {
                setIsCssListOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCssListOpen]);
    useEffect(() => {
        if (!isCssListOpen) {
            setSuggestionPhase('properties');
            setActivePropertyKey(null);
        }
    }, [isCssListOpen]);
    const enumValuesForActive = useMemo(() => {
        if (!activePropertyKey)
            return [];
        return getExtendedEnumValuesForProperty(activePropertyKey, fullPropertiesList);
    }, [activePropertyKey, fullPropertiesList]);
    const filteredEnumValues = useMemo(() => {
        if (!activePropertyKey)
            return [];
        let prefix = getLastSegmentValuePrefix(displayValue, activePropertyKey);
        if (CSS_COLOR_PROPERTIES.has(activePropertyKey) &&
            prefix.toLowerCase() === COLOR_PROPERTY_PLACEHOLDER) {
            prefix = '';
        }
        if (!prefix)
            return enumValuesForActive;
        const lower = prefix.toLowerCase();
        return enumValuesForActive.filter((v) => v.toLowerCase().startsWith(lower));
    }, [activePropertyKey, displayValue, enumValuesForActive]);
    const handleCssFilter = useCallback((css) => {
        const scope = inferScopeFromTyping(css, fullPropertiesList);
        const pool = getScopedPropertyPool(scope, fullPropertiesList);
        if (css.length === 0) {
            setCssPropertiesList(pool);
            return;
        }
        const matchString = css.split(/,\s*/);
        const lastPart = matchString[matchString.length - 1];
        const key = lastPart.split(':')[0]?.split("'")[0]?.trim();
        const filtered = pool.filter((item) => item[0]?.startsWith(key || ''));
        setCssPropertiesList(filtered);
    }, [fullPropertiesList]);
    useEffect(() => {
        if (value !== undefined) {
            cssValueRef.current = value;
            setDisplayValue(value);
        }
        handleCssFilter(cssValueRef.current);
    }, [value, handleCssFilter]);
    const notifyParentCssChange = useCallback((css, e) => {
        if (!onChange)
            return;
        const synthetic = e ??
            {
                target: { value: css },
                currentTarget: { value: css },
            };
        try {
            const funcStr = onChange.toString();
            const paramMatch = funcStr.match(/\(([^)]+)\)/);
            if (paramMatch) {
                const param = paramMatch[1].trim();
                if (param &&
                    param !== 'e' &&
                    param !== 'event' &&
                    !param.startsWith('e:')) {
                    onChange(css);
                }
                else {
                    onChange(synthetic);
                }
            }
            else {
                onChange(synthetic);
            }
        }
        catch (error) {
            try {
                onChange(synthetic);
            }
            catch {
                onChange(css);
            }
        }
    }, [onChange]);
    const handleCssChange = (css) => {
        cssValueRef.current = css;
        setDisplayValue(css);
        handleCssFilter(css);
    };
    // Handle onChange - support both event and value patterns
    const handleChange = (e) => {
        const css = e.target.value;
        handleCssChange(css);
        if (!suppressSuggestionsRef.current) {
            setIsCssListOpen(true);
        }
        notifyParentCssChange(css, e);
    };
    /** Append or replace a property:value pair from the suggestion list. */
    const applyCssPropertyValue = (propertyKey, prop) => {
        cssValueRef.current = upsertCssPropertySegment(cssValueRef.current, propertyKey, prop);
        handleChange({
            target: { value: cssValueRef.current },
            currentTarget: { value: cssValueRef.current },
        });
        setSuggestionPhase('properties');
        setActivePropertyKey(null);
        queueMicrotask(() => focusCssInputAtEnd(cssValueRef.current));
    };
    const applyLayoutPreset = (snippet) => {
        cssValueRef.current = mergeCssFragment(cssValueRef.current, snippet);
        handleChange({
            target: { value: cssValueRef.current },
            currentTarget: { value: cssValueRef.current },
        });
        setSuggestionPhase('properties');
        setActivePropertyKey(null);
        queueMicrotask(() => focusCssInputAtEnd(cssValueRef.current));
    };
    const handleSelectPropertyName = (propertyKey) => {
        const next = applySelectedPropertyNameToCss(cssValueRef.current, propertyKey);
        cssValueRef.current = next;
        setDisplayValue(next);
        handleCssFilter(next);
        notifyParentCssChange(next);
        setActivePropertyKey(propertyKey);
        setSuggestionPhase('values');
        queueMicrotask(() => focusCssInputAtEnd(next));
    };
    // Handle onBlur - support both event and value patterns
    const handleBlur = (e) => {
        const raw = e.target.value;
        const normalized = dedupeCssPropertySegments(raw);
        if (normalized !== raw) {
            cssValueRef.current = normalized;
            setDisplayValue(normalized);
            notifyParentCssChange(normalized);
            handleCssFilter(normalized);
        }
        if (onBlur) {
            const css = normalized;
            // Similar logic for onBlur
            try {
                const funcStr = onBlur.toString();
                const paramMatch = funcStr.match(/\(([^)]+)\)/);
                if (paramMatch) {
                    const param = paramMatch[1].trim();
                    if (param &&
                        param !== 'e' &&
                        param !== 'event' &&
                        !param.startsWith('e:')) {
                        onBlur(css);
                    }
                    else {
                        onBlur(e);
                    }
                }
                else {
                    onBlur(e);
                }
            }
            catch (error) {
                // If calling with value fails, try with event
                try {
                    onBlur(e);
                }
                catch {
                    // If both fail, call with value as fallback
                    onBlur(css);
                }
            }
        }
    };
    const handleReset = () => {
        const styles = cssValueRef.current.split(',').filter(Boolean);
        if (styles.length > 0) {
            styles.pop();
            cssValueRef.current = styles.join(',') + (styles.length ? ',' : '');
        }
        else {
            cssValueRef.current = '';
        }
        if (onReset) {
            onReset(cssValueRef.current);
        }
        setDisplayValue(cssValueRef.current);
        if (onChange) {
            // When resetting, we call onChange with the value directly (custom pattern)
            // since we don't have an event object
            onChange(cssValueRef.current);
        }
        handleCssFilter(cssValueRef.current);
    };
    const dismissSuggestionsPanel = useCallback(() => {
        suppressSuggestionsRef.current = true;
        setIsCssListOpen(false);
        setSuggestionPhase('properties');
        setActivePropertyKey(null);
    }, []);
    const handleFocus = (e) => {
        suppressSuggestionsRef.current = false;
        labelProps?.onFocus?.(e);
        onFocus?.(e);
    };
    const handleTextareaKeyDown = (e) => {
        labelProps?.onKeyDown?.(e);
        if (e.defaultPrevented)
            return;
        if (e.key === 'Escape') {
            e.preventDefault();
            dismissSuggestionsPanel();
            onKeyDown?.(e);
            return;
        }
        onKeyDown?.(e);
    };
    const handleTextareaKeyUp = (e) => {
        labelProps?.onKeyUp?.(e);
        if (e.defaultPrevented)
            return;
        if (!suppressSuggestionsRef.current) {
            setIsCssListOpen(true);
        }
        onKeyUp?.(e);
    };
    return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['w-full'], s['relative'], className), ref: cssWrapperRef, children: [_jsxs("div", { className: cn(s['flex'], s['absolute'], s['gap-2'], s['right-2'], s['top-2'], s['z-20']), children: [onReset && (_jsx(Icon, { nameIcon: "MdLockReset", propsIcon: { color: '#4b5563', size: 22 }, onClick: handleReset })), onMoreInfo && (_jsx(Icon, { nameIcon: "MdInfoOutline", propsIcon: { color: '#4b5563', size: 22 }, onClick: onMoreInfo }))] }), _jsxs("div", { className: cn(s['relative'], s['w-full']), children: [_jsx(Textarea, { ref: setTextareaRef, id: id, label: label, error: error, required: required, placeholder: placeholder, ...labelProps, ...props, value: displayValue, onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleTextareaKeyDown, onKeyUp: handleTextareaKeyUp, disabled: disabled }), isCssListOpen &&
                        (suggestionPhase === 'values'
                            ? Boolean(activePropertyKey)
                            : cssPropertiesList.length > 0 ||
                                layoutPresets.length > 0) && (_jsxs("div", { className: cn(s['absolute'], s['left-0'], s['right-0'], s['top-full'], s['mt-1'], s['z-50'], s['rounded-lg'], s['border'], s['border-gray-200'], s['bg-white'], s['shadow-lg'], s['dark:border-gray-700'], s['dark:bg-boxdark'], s['overflow-hidden']), onMouseDown: (e) => e.preventDefault(), style: {
                            animation: 'cssMultilineSuggestionFadeIn 0.15s ease-out',
                        }, children: [_jsx("style", { children: `
                @keyframes cssMultilineSuggestionFadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(-4px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              ` }), suggestionPhase === 'values' && activePropertyKey ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2'], s['border-b'], s['border-gray-200'], s['px-2'], s['py-2'], s['dark:border-gray-700']), children: [_jsx("button", { type: "button", className: cn(s['text-sm'], s['font-medium'], s['text-blue-600'], s['dark:text-blue-400'], s['cursor-pointer'], s['rounded'], s['px-1'], s['py-1']), onMouseDown: (e) => e.preventDefault(), onClick: () => {
                                                    setSuggestionPhase('properties');
                                                    setActivePropertyKey(null);
                                                }, children: "\u2190 Properties" }), _jsx("span", { className: cn(s['truncate'], s['text-sm'], s['font-semibold'], s['text-gray-800'], s['dark:text-white']), children: activePropertyKey }), _jsx("span", { className: cn(s['text-xs'], s['text-gray-500'], s['dark:text-gray-400']), children: "\u00B7 type after : or pick below" })] }), _jsxs("ul", { role: "listbox", className: cn(s['m-0'], s['w-full'], s['list-none'], s['p-1']), style: {
                                            maxHeight: 'min(200px, 35vh)',
                                            overflowY: 'auto',
                                        }, children: [filteredEnumValues.map((propVal, idx) => {
                                                const layoutChrome = Boolean(activePropertyKey) &&
                                                    LAYOUT_RELATED_PROPERTIES.has(activePropertyKey);
                                                const pres = layoutChrome && activePropertyKey
                                                    ? getLayoutValuePresentation(activePropertyKey, propVal)
                                                    : null;
                                                return (_jsx("li", { role: "option", tabIndex: 0, className: cn(s['flex'], s['w-full'], s['cursor-pointer'], s['items-start'], s['rounded-md'], s['px-3'], s['py-2'], s['text-left'], s['outline-none']), style: {
                                                        transition: 'background-color 0.15s ease, color 0.15s ease',
                                                        backgroundColor: 'transparent',
                                                    }, onMouseOver: (e) => {
                                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                                    }, onMouseOut: (e) => {
                                                        e.currentTarget.style.backgroundColor =
                                                            'transparent';
                                                    }, onClick: () => applyCssPropertyValue(activePropertyKey, propVal), onKeyDown: (e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            applyCssPropertyValue(activePropertyKey, propVal);
                                                        }
                                                    }, children: layoutChrome && pres ? (_jsxs("span", { className: cn(s['flex'], s['min-w-0'], s['flex-col']), style: { gap: 4 }, children: [_jsx("span", { className: cn(s['text-sm'], s['font-semibold'], s['text-gray-900'], s['dark:text-white']), children: pres.title }), _jsx("span", { className: cn(s['text-xs'], s['leading-snug'], s['text-gray-500'], s['dark:text-gray-400']), style: {
                                                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                                                                }, children: pres.subtitle })] })) : (_jsx("span", { className: cn(s['text-sm'], s['text-gray-900'], s['dark:text-white']), children: propVal })) }, `${activePropertyKey}-${String(propVal)}-${idx}`));
                                            }), filteredEnumValues.length === 0 && (_jsx("li", { className: cn(s['px-3'], s['py-2'], s['text-sm'], s['text-gray-500'], s['dark:text-gray-400']), children: "No matching presets \u2014 keep typing after \":\" or switch property." }))] })] })) : (_jsxs(_Fragment, { children: [cssPropertiesList.length > 0 ? (_jsx("ul", { role: "listbox", className: cn(s['m-0'], s['w-full'], s['list-none'], s['p-1']), style: {
                                            maxHeight: 'min(200px, 35vh)',
                                            overflowY: 'auto',
                                        }, children: cssPropertiesList.map(([propName]) => (_jsxs("li", { role: "option", tabIndex: 0, className: cn(s['flex'], s['w-full'], s['cursor-pointer'], s['items-center'], s['justify-between'], s['gap-2'], s['rounded-md'], s['px-3'], s['py-2'], s['text-left'], s['outline-none']), style: {
                                                transition: 'background-color 0.15s ease, color 0.15s ease',
                                                backgroundColor: 'transparent',
                                            }, onMouseOver: (e) => {
                                                e.currentTarget.style.backgroundColor =
                                                    '#f3f4f6';
                                            }, onMouseOut: (e) => {
                                                e.currentTarget.style.backgroundColor =
                                                    'transparent';
                                            }, onClick: () => handleSelectPropertyName(propName), onKeyDown: (e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    handleSelectPropertyName(propName);
                                                }
                                            }, children: [_jsx("span", { className: cn(s['truncate'], s['text-sm'], s['font-medium'], s['text-gray-900'], s['dark:text-white']), children: propName }), _jsx("span", { className: cn(s['flex-shrink-0'], s['text-xs'], s['text-gray-500'], s['dark:text-gray-400']), children: CSS_COLOR_PROPERTIES.has(propName)
                                                        ? 'Color'
                                                        : LAYOUT_RELATED_PROPERTIES.has(propName)
                                                            ? 'Layout'
                                                            : 'Values' })] }, propName))) })) : null, layoutPresets.length > 0 && (_jsxs("div", { className: cn(cssPropertiesList.length > 0 && s['border-t'], s['border-gray-200'], s['dark:border-gray-700'], s['bg-gray-50'], s['dark:bg-gray-900']), children: [_jsx("div", { className: cn(s['px-3'], s['pt-2'], s['pb-1'], s['text-xs'], s['font-semibold'], s['uppercase'], s['tracking-wide'], s['text-gray-600'], s['dark:text-gray-300']), children: "Quick layouts" }), _jsx("div", { className: cn(s['flex'], s['flex-col'], s['gap-1'], s['p-2'], s['pt-0']), children: layoutPresets.map((preset) => (_jsxs("button", { type: "button", className: cn(s['flex'], s['w-full'], s['cursor-pointer'], s['flex-col'], s['items-start'], s['rounded-md'], s['border'], s['border-gray-200'], s['bg-white'], s['px-3'], s['py-2'], s['text-left'], s['transition-colors'], s['dark:border-gray-600'], s['dark:bg-boxdark'], s['hover:bg-blue-50'], s['dark:hover:bg-gray-800']), onMouseDown: (e) => e.preventDefault(), onClick: () => applyLayoutPreset(preset.snippet), children: [_jsx("span", { className: cn(s['text-sm'], s['font-semibold'], s['text-gray-900'], s['dark:text-white']), children: preset.title }), _jsx("span", { className: cn(s['mt-1'], s['text-xs'], s['leading-snug'], s['text-gray-600'], s['dark:text-gray-400']), children: preset.hint })] }, preset.id))) })] }))] })), _jsxs("div", { className: cn(s['flex'], s['flex-wrap'], s['items-center'], s['justify-between'], s['gap-2'], s['border-t'], s['border-gray-200'], s['px-2'], s['py-2'], s['dark:border-gray-700']), children: [_jsx("span", { className: cn(s['text-xs'], s['text-gray-500'], s['dark:text-gray-400']), children: "Suggestions are optional \u2014 type your own CSS anytime (Esc or Close hides this)." }), _jsx("button", { type: "button", className: cn(s['text-xs'], s['font-medium'], s['text-blue-600'], s['dark:text-blue-400'], s['cursor-pointer'], s['rounded'], s['px-2'], s['py-1'], s['flex-shrink-0']), onMouseDown: (e) => e.preventDefault(), onClick: () => dismissSuggestionsPanel(), children: "Close" })] })] }))] }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
CssMultilineInput.displayName = 'CssMultilineInput';
