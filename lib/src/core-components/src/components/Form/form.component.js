import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import s from '../../tc.module.css';
import { cn } from '../../utils';
import './toggle.css';
export const Label = (props) => (_jsx(_Fragment, { children: _jsx("label", { htmlFor: props.htmlFor, className: cn(s['block'], s['text-3xs'], s['font-medium'], s['mb-1'], {
            [s['text-red-400']]: props.hasError,
            [s['text-current']]: !props.hasError,
        }), style: { ...props.style }, children: props.children }) }));
export const InputWrapper = (props) => (_jsxs("div", { className: cn(props.className), ref: props.ref, children: [_jsx(Label, { htmlFor: props.id || '', hasError: props.hasError, style: { ...props.style }, children: _jsx("span", { className: cn(s['dark:text-white'], s['w-10']), children: props.label }) }), props.children] }));
export const Input = React.forwardRef((props, ref) => {
    const handleKeyPress = (e) => {
        const key = e.key;
        const regex = props.pattern;
        if (regex && !regex?.test(key)) {
            e.preventDefault();
        }
    };
    return (_jsx(InputWrapper, { label: props.label, id: props.id, hasError: props.hasError, style: props.wrapperStyle, className: props.labelClassName, children: _jsx("input", { type: props.type || 'text', id: props.id, ref: props.inputRef, "data-testid": "INPT", autoFocus: props?.isAutoFocus || false, name: props.name, style: props.style, defaultValue: props.defaultValue, placeholder: props.placeholder, required: props.required || false, disabled: props.disabled || false, autoComplete: "given-name", maxLength: props.maxLength, value: props.value, onChange: (e) => props.onChange && props.onChange(e.target.value), onKeyPress: (e) => handleKeyPress(e), className: cn(props.className, s['leading-4'], s['p-2'], s['dark:bg-boxdark'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
                [s['border-red']]: props.hasError,
                [s['border-gray-300']]: !props.hasError,
            }), onBlur: (e) => props.onBlur && props.onBlur(e.target.value), onKeyDown: props.onKeyDown && props.onKeyDown }) }));
});
export const InputPassword = React.forwardRef((props, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDown = () => {
        setShowPassword(true);
    };
    const handleMouseUp = () => {
        setShowPassword(false);
    };
    return (_jsx(InputWrapper, { label: props.label, id: props.id, hasError: props.hasError, style: props.wrapperStyle, className: props.labelClassName, children: _jsxs("div", { className: cn(s['flex'], s['items-center'], s['relative']), children: [_jsx("input", { type: showPassword ? 'text' : 'password', id: props.id, ref: props.inputRef, "data-testid": "INPT", autoFocus: props?.isAutoFocus || false, name: props.name, style: props.style, defaultValue: props.defaultValue, placeholder: props.placeholder, required: props.required || false, disabled: props.disabled || false, autoComplete: "given-name", maxLength: props.maxLength, value: props.value, onChange: (e) => props.onChange && props.onChange(e.target.value), className: cn(props.className, s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], s['dark:bg-boxdark'], {
                        [s['border-red']]: props.hasError,
                        [s['border-gray-300']]: !props.hasError,
                    }), onBlur: (e) => props.onBlur && props.onBlur(e.target.value), onKeyDown: props.onKeyDown && props.onKeyDown }), _jsx("div", { className: cn(s['flex'], s['absolute'], s['right-3']), children: _jsx("svg", { className: cn(s['h-6'], s['dark:bg-boxdark']), fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, children: showPassword ? (_jsx("path", { fill: "currentColor", d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" })) : (_jsx("path", { fill: "currentColor", d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" })) }) })] }) }));
});
export const MultilineInput = (props) => (_jsx(InputWrapper, { label: props.label, id: props.id, className: props.className, children: _jsx("textarea", { id: props.id, autoComplete: "given-name", value: props.value, disabled: props.disabled, style: props.style, rows: props.rows, onKeyUp: props.onKeyUp && props.onKeyUp, placeholder: props.placeholder, onChange: (e) => props.onChange && props.onChange(e.target.value), onBlur: (e) => props.onBlur && props.onBlur(e.target.value), className: cn(s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], s['dark:bg-boxdark'], {
            [s['border-red']]: props.hasError,
            [s['border-gray-300']]: !props.hasError,
        }), defaultValue: props.defaultValue }) }));
export const InputRadio = (props) => (_jsx(InputWrapper, { label: props.label, id: props.id, style: props.labelStyle, children: props.values?.map((item, key) => (_jsxs("div", { className: cn(s['flex'], s['items-center'], s['gap-2']), onClick: () => {
            props.onChange && props.onChange(item.value);
        }, children: [_jsx("input", { type: "radio", id: props.id, name: props.name, value: item.value, checked: item.value == props.value ? true : false, onChange: () => props.onChange && props.onChange(item.value), className: cn(s['w-4'], s['h-4'], s['text-blue-600'], s['bg-gray-100'], s['border-gray-300'], s['focus:ring-blue-500'], s['dark:focus:ring-blue-600'], s['dark:ring-offset-gray-800'], s['focus:ring-2'], s['dark:bg-gray-700'], s['dark:border-gray-600']) }, key), _jsx("span", { children: item.label })] }, key))) }));
export const InputDate = ({ name, value, label, id, hasError, disabled, format, onChange, onFocusRemove, }) => (_jsx(InputWrapper, { label: label, id: id, hasError: hasError, children: _jsx("input", { type: "date", id: id, name: name, disabled: disabled || false, value: value, onChange: (e) => onChange && onChange(e), className: cn(s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], {
            [s['border-red']]: hasError,
            [s['border-gray-300']]: !hasError,
        }) }) }));
export const InputDateTime = ({ type, id, label, hasError, className, min, onChange, }) => (_jsx(InputWrapper, { label: label, id: id, hasError: hasError, children: _jsx("input", { type: type || 'datetime-local', id: id || 'interviewDateTime', name: "interviewDateTime", className: cn(s['border'], s['border-gray-300'], s['rounded-md'], s['p-2'], s['w-full'], {
            [s['border-red']]: hasError,
            [s['border-gray-300']]: !hasError,
        }, { className }), min: min || new Date().toISOString().slice(0, 16), onChange: (e) => {
            onChange && onChange(e.target.value);
        } }) }));
export const CheckBox = (props) => {
    return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { onClick: props.handleCheck, type: "checkbox", checked: props.isChecked, value: props.value }, props.id), ' ', props.value] }));
};
export const InputFile = (props) => (_jsx(InputWrapper, { label: props.label, id: props.id, children: _jsx("input", { type: "file", id: props.id, name: props.name, disabled: props.disabled || false, accept: props.accept, value: props.value, onChange: (e) => props.onChange && props.onChange(e), className: cn(s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['block'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], {
            [s['border-red']]: props.hasError,
            [s['border-gray-300']]: !props.hasError,
        }), multiple: props.multiple }) }));
export const Toggle = (props) => {
    const [toggle, setToggle] = useState(props.value);
    const { onChange, disabled, className, isToggleLabel = true } = props;
    useEffect(() => {
        setToggle(props.value);
    }, [props.value]);
    const triggerToggle = () => {
        if (disabled) {
            return;
        }
        setToggle(!toggle);
        if (typeof onChange === 'function') {
            onChange(!toggle);
        }
    };
    const toggleClasses = classNames('wrg-toggle ', {
        'wrg-toggle--checked': toggle,
        'wrg-toggle--disabled': disabled,
    }, className);
    return (_jsx(InputWrapper, { label: props.label, id: props.id, style: props.style, children: _jsxs("div", { onClick: triggerToggle, className: toggleClasses, children: [_jsx("div", { className: cn('wrg-toggle-container', {
                        [s['bg-green-700']]: toggle,
                        [s['bg-black']]: !toggle,
                    }), children: isToggleLabel && (_jsxs(_Fragment, { children: [_jsx("div", { className: cn('wrg-toggle-check'), children: _jsx("span", { className: cn(s['text-white'], s['ml-1']), children: "Yes" }) }), _jsx("div", { className: cn('wrg-toggle-uncheck'), children: _jsx("span", { className: cn(s['dark:text-black']), children: "No" }) })] })) }), _jsx("div", { className: cn('wrg-toggle-circle', s['dark:bg-black'], {
                        'ml-1': toggle,
                        'mr-1': !toggle,
                    }) }), _jsx("input", { type: "checkbox", "aria-label": "Toggle Button", className: cn('wrg-toggle-input') })] }) }));
};
