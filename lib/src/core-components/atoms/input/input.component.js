/* eslint-disable no-console */
import React, { useState } from 'react';
import './input.styles.css';
import '../../../tc.module.css';
export const Input = ({ title, defaultValue, className, disable, hasError, errorMsg, defaultMsg, inputStyle, autoComplete, maxlength = 40, onChange, onBlur, }) => {
    const [value, setValue] = useState(defaultValue);
    const onKeyUpValue = (event) => {
        onChange(event.target.value);
    };
    return (React.createElement("div", { className: `${className} relative` },
        React.createElement("input", { "data-testid": "inputElement", type: "text", name: "name", value: value, placeholder: " ", disabled: disable, className: `pt-3 pb-2 bg-transparent block w-full px-0 mt-0  rounded-none  border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-secondary border-gray-secondary font-arimaRegular ${inputStyle}`, onChange: (e) => {
                setValue(e.target.value);
                onChange && onChange(e.target.value);
            }, onKeyUp: onKeyUpValue, onBlur: (e) => onBlur && onBlur(e.target.value), autoComplete: autoComplete, maxLength: maxlength }),
        React.createElement("label", { className: "absolute duration-300 top-3 -z-1 origin-0 text-gray-dark-secondary font-arimaRegular text-md" }, title),
        hasError && hasError?.type !== 'required' && (React.createElement("span", { className: "text-sm text-red text-4xs", id: "error" }, `${errorMsg || ''}`)),
        (!hasError || hasError?.type === 'required') && (React.createElement("span", { className: "text-sm text-4xs", id: "error" }, `${defaultMsg || ''}`))));
};
