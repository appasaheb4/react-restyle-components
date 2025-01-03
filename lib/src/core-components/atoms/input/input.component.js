import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-console */
import { useState } from 'react';
import './input.styles.css';
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Input = ({ title, defaultValue, className, disable, hasError, errorMsg, defaultMsg, inputStyle, autoComplete, maxlength = 40, onChange, onBlur, }) => {
    const [value, setValue] = useState(defaultValue);
    const onKeyUpValue = (event) => {
        onChange(event.target.value);
    };
    return (_jsxs("div", { className: cn(className, s.relative), children: [_jsx("input", { "data-testid": "inputElement", type: "text", name: "name", value: value, placeholder: " ", disabled: disable, className: cn(s['pt-3'], s['pb-2'], s['bg-transparent'], s['block'], s['w-full'], s['px-0'], s['mt-0'], s['rounded-none'], s['border-0'], s['border-b'], s['appearance-none'], s['focus:outline-none'], s['focus:ring-0'], s['focus:border-gray-secondary'], s['border-gray-secondary'], s['font-arimaRegular'], inputStyle), onChange: (e) => {
                    setValue(e.target.value);
                    onChange && onChange(e.target.value);
                }, onKeyUp: onKeyUpValue, onBlur: (e) => onBlur && onBlur(e.target.value), autoComplete: autoComplete, maxLength: maxlength }), _jsx("label", { className: cn(s['absolute'], s['duration-300'], s['top-3'], s['-z-1'], s['origin-0'], s['text-gray-dark-secondary'], s['font-arimaRegular'], s['text-md']), children: title }), hasError && hasError?.type !== 'required' && (_jsx("span", { className: cn(s['text-sm'], s['text-red'], s['text-4xs']), id: "error", children: `${errorMsg || ''}` })), (!hasError || hasError?.type === 'required') && (_jsx("span", { className: cn(s['text-sm'], s['text-4xs']), id: "error", children: `${defaultMsg || ''}` }))] }));
};
