import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { Textarea } from '../../../core-components/atoms/Textarea/Textarea';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { properties as defaultCssProperties } from '../css-properties';
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
export const CssMultilineInput = React.forwardRef(({ id, label, error, required, value, onChange, onBlur, disabled, cssProperties, onReset, onMoreInfo, placeholder = "fontSize: 12,backgroundColor:'#000000'", className, labelProps, ...props }, ref) => {
    const [isCssListOpen, setIsCssListOpen] = useState(false);
    const [displayValue, setDisplayValue] = useState(() => value ?? '');
    const [cssPropertiesList, setCssPropertiesList] = useState(cssProperties || mapToArray(defaultCssProperties));
    const cssValueRef = useRef(value || '');
    const cssWrapperRef = useRef(null);
    useEffect(() => {
        if (cssProperties) {
            setCssPropertiesList(cssProperties);
        }
        else {
            setCssPropertiesList(mapToArray(defaultCssProperties));
        }
    }, [cssProperties]);
    useEffect(() => {
        if (value !== undefined) {
            cssValueRef.current = value;
            setDisplayValue(value);
        }
    }, [value]);
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
    const handleCssFilter = (css) => {
        const props = cssProperties || mapToArray(defaultCssProperties);
        if (css.length === 0) {
            setCssPropertiesList(props);
            return;
        }
        const matchString = css.split(/,\s*/);
        const lastPart = matchString[matchString.length - 1];
        const key = lastPart.split(':')[0]?.split("'")[0]?.trim();
        const filtered = props.filter((item) => item[0]?.startsWith(key || ''));
        setCssPropertiesList(filtered);
    };
    const handleCssChange = (css) => {
        cssValueRef.current = css;
        setDisplayValue(css);
        handleCssFilter(css);
    };
    // Handle onChange - support both event and value patterns
    const handleChange = (e) => {
        const css = e.target.value;
        handleCssChange(css);
        setIsCssListOpen(true);
        if (onChange) {
            // Support both patterns:
            // 1. Standard React: onChange={(e) => { const val = e.target.value; ... }}
            // 2. Custom: onChange={(value) => { ... value ... }}
            // Check if onChange expects a string (custom pattern) by examining function signature
            // If parameter name suggests it expects a value (not 'e' or 'event'), call with value
            // Otherwise, call with event (standard React pattern)
            try {
                const funcStr = onChange.toString();
                const paramMatch = funcStr.match(/\(([^)]+)\)/);
                if (paramMatch) {
                    const param = paramMatch[1].trim();
                    // If parameter is not 'e', 'event', or starts with 'e:', it might expect value
                    if (param &&
                        param !== 'e' &&
                        param !== 'event' &&
                        !param.startsWith('e:')) {
                        // Custom pattern - call with value
                        onChange(css);
                    }
                    else {
                        // Standard React pattern - call with event
                        onChange(e);
                    }
                }
                else {
                    // Default to standard React pattern
                    onChange(e);
                }
            }
            catch (error) {
                // If calling with value fails, try with event
                try {
                    onChange(e);
                }
                catch {
                    // If both fail, call with value as fallback
                    onChange(css);
                }
            }
        }
    };
    /** Append a property:value pair from the suggestion list (same rules as legacy click handler). */
    const applyCssPropertyValue = (propertyKey, prop) => {
        let existsString = cssValueRef.current?.split(',');
        if (cssValueRef.current?.includes(',')) {
            existsString = existsString.map((part) => {
                if (part?.includes(':'))
                    return part;
            });
            if (prop != 'number')
                existsString.push(`${propertyKey}:'${prop}',`);
            else
                existsString.push(`${propertyKey}:1,`);
            cssValueRef.current = existsString.join(',').replaceAll(',,', ',');
        }
        else {
            if (prop != 'number')
                cssValueRef.current = `${propertyKey}:'${prop}',`;
            else {
                cssValueRef.current = `${propertyKey}:1,`;
            }
        }
        handleChange({
            target: { value: cssValueRef.current },
            currentTarget: { value: cssValueRef.current },
        });
    };
    // Handle onBlur - support both event and value patterns
    const handleBlur = (e) => {
        if (onBlur) {
            const css = e.target.value;
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
    };
    return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['w-full'], s['relative'], className), ref: cssWrapperRef, children: [_jsxs("div", { className: cn(s['flex'], s['absolute'], s['gap-2'], s['right-2'], s['top-2'], s['z-20']), children: [onReset && (_jsx(Icon, { nameIcon: "MdLockReset", propsIcon: { color: '#4b5563', size: 22 }, onClick: handleReset })), onMoreInfo && (_jsx(Icon, { nameIcon: "MdInfoOutline", propsIcon: { color: '#4b5563', size: 22 }, onClick: onMoreInfo }))] }), _jsxs("div", { className: cn(s['relative'], s['w-full']), children: [_jsx(Textarea, { ref: ref, id: id, label: label, error: error, required: required, placeholder: placeholder, value: displayValue, onChange: handleChange, onBlur: handleBlur, onKeyUp: () => setIsCssListOpen(true), disabled: disabled, ...labelProps, ...props }), isCssListOpen && cssPropertiesList.length > 0 && (_jsxs("div", { className: cn(s['absolute'], s['left-0'], s['right-0'], s['top-full'], s['mt-1'], s['z-50'], s['rounded-lg'], s['border'], s['border-gray-200'], s['bg-white'], s['shadow-lg'], s['dark:border-gray-700'], s['dark:bg-boxdark'], s['overflow-hidden']), onMouseDown: (e) => e.preventDefault(), style: {
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
              ` }), _jsx("ul", { role: "listbox", className: cn(s['m-0'], s['w-full'], s['list-none'], s['p-1']), style: {
                                    maxHeight: 'min(240px, calc(100vh - 20vh))',
                                    overflowY: 'auto',
                                }, children: cssPropertiesList.flatMap((item) => (item[1] ?? []).map((prop, propIndex) => (_jsxs("li", { role: "option", tabIndex: 0, className: cn(s['flex'], s['w-full'], s['cursor-pointer'], s['items-center'], s['rounded-md'], s['px-3'], s['py-2'], s['text-left'], s['outline-none']), style: {
                                        gap: '8px',
                                        transition: 'background-color 0.15s ease, color 0.15s ease',
                                        backgroundColor: 'transparent',
                                    }, onMouseOver: (e) => {
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                    }, onMouseOut: (e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }, onClick: () => applyCssPropertyValue(item[0], prop), onKeyDown: (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            applyCssPropertyValue(item[0], prop);
                                        }
                                    }, children: [_jsx("span", { className: cn(s['truncate'], s['text-sm'], s['font-medium'], s['text-gray-900'], s['dark:text-white']), children: item[0] }), _jsx("span", { className: cn(s['flex-shrink-0'], s['text-sm'], s['text-gray-400']), children: ":" }), _jsx("span", { className: cn(s['min-w-0'], s['flex-1'], s['truncate'], s['text-sm'], s['text-blue-600'], s['dark:text-blue-400']), children: prop })] }, `${item[0]}-${String(prop)}-${propIndex}`)))) })] }))] }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
CssMultilineInput.displayName = 'CssMultilineInput';
