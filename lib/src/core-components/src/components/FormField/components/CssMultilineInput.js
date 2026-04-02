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
        if (onChange) {
            // When resetting, we call onChange with the value directly (custom pattern)
            // since we don't have an event object
            onChange(cssValueRef.current);
        }
    };
    return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['w-full'], s['relative'], className), ref: cssWrapperRef, children: [_jsxs("div", { className: cn(s['flex'], s['absolute'], s['gap-2'], s['right-2'], s['z-10']), children: [onReset && (_jsx(Icon, { nameIcon: "MdLockReset", propsIcon: { color: '#000000', size: 24 }, onClick: handleReset })), onMoreInfo && (_jsx(Icon, { nameIcon: "MdInfoOutline", propsIcon: { color: '#000000', size: 24 }, onClick: onMoreInfo }))] }), _jsx(Textarea, { ref: ref, id: id, label: label, error: error, required: required, placeholder: placeholder, value: cssValueRef.current, onChange: handleChange, onBlur: handleBlur, onKeyUp: () => setIsCssListOpen(true), disabled: disabled, ...labelProps, ...props }), isCssListOpen && cssPropertiesList.length > 0 && (_jsx("div", { children: _jsx("ul", { className: cn(s['flex'], s['flex-col'], s['bg-black'], s['text-white'], s['overflow-y-scroll'], s['w-full']), style: { maxHeight: 'calc(100vh - 20vh)' }, children: cssPropertiesList?.map((item, index) => (_jsxs("li", { className: cn(s['flex'], s['gap-4'], s['p-2']), children: [_jsx("span", { className: cn(s['underline']), children: item[0] }), item[1]?.map((prop, propIndex) => (_jsxs("li", { className: cn(s['flex'], s['bg-slate-800'], s['rounded-md'], s['items-center'], s['cursor-pointer']), onClick: () => {
                                    let existsString = cssValueRef.current?.split(',');
                                    if (cssValueRef.current.includes(',')) {
                                        existsString = existsString.map((item) => {
                                            if (item?.includes(':'))
                                                return item;
                                        });
                                        if (prop != 'number')
                                            existsString.push(`${item[0]}:'${prop}',`);
                                        else
                                            existsString.push(`${item[0]}:1,`);
                                        cssValueRef.current = existsString
                                            .join(',')
                                            .replaceAll(',,', ',');
                                    }
                                    else {
                                        if (prop != 'number')
                                            cssValueRef.current = `${item[0]}:'${prop}',`;
                                        else {
                                            cssValueRef.current = `${item[0]}:1,`;
                                        }
                                    }
                                    handleCssFilter(existsString.join(''));
                                }, children: [' ', prop, ' '] }, propIndex)))] }, index))) }) })), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error }))] }));
});
CssMultilineInput.displayName = 'CssMultilineInput';
