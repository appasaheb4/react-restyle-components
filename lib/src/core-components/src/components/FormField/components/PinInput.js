import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { Label } from '../../../core-components/atoms/Label/Label';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const PinInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, pinLength = 12, pinErrorMsg, pinDefaultMsg, className, labelProps, ...props }, ref) => {
    const [pinState, setPinState] = useState(value || []);
    const pinInputRefs = useRef([]);
    useEffect(() => {
        if (value) {
            setPinState(value);
        }
    }, [value]);
    const handlePinChange = (event, index) => {
        const inputValue = event.target.value;
        const numericValue = parseInt(inputValue, 10);
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 9) {
            const newPinState = [...pinState];
            newPinState[index] = numericValue;
            setPinState(newPinState);
            if (onChange) {
                onChange(newPinState);
            }
            // Move to next input
            if (index < pinLength - 1) {
                const nextRef = pinInputRefs.current[index + 1];
                if (nextRef) {
                    nextRef.focus();
                }
            }
        }
        else if (inputValue === '') {
            const newPinState = [...pinState];
            newPinState[index] = undefined;
            setPinState(newPinState);
            if (onChange) {
                onChange(newPinState);
            }
        }
    };
    const handlePinKeyDown = (event, index) => {
        if (event.key === 'Backspace' && !pinState[index] && index > 0) {
            const prevRef = pinInputRefs.current[index - 1];
            if (prevRef) {
                prevRef.focus();
            }
        }
    };
    return (_jsxs("div", { className: cn(s['w-full'], s['relative'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps })), _jsx("div", { className: cn(s['flex'], s['space-x-1']), children: Array.from({ length: pinLength }, (_, index) => (_jsxs("div", { className: cn(s['flex'], s['space-x-1'], s['max-w-full'], s['items-stretch']), children: [_jsx("input", { ref: (el) => {
                                if (el) {
                                    pinInputRefs.current[index] = el;
                                }
                                if (index === 0 && ref) {
                                    if (typeof ref === 'function') {
                                        ref(el);
                                    }
                                    else {
                                        ref.current = el;
                                    }
                                }
                            }, "data-testid": "inputElementPin", type: "tel", disabled: disabled, className: cn(s['pb-2'], s['block'], s['w-4'], s['px-0'], s['mt-0'], s['bg-transparent'], s['text-center'], s['border-0'], s['border-b'], s['z-20'], s['appearance-none'], s['rounded-none'], s['focus:outline-none'], s['focus:ring-0'], s['focus:border-gray-secondary'], s['border-gray-secondary'], s['font-arimaRegular'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50'], error && s['border-red-500']), onKeyDown: (event) => handlePinKeyDown(event, index), onMouseUp: () => {
                                if (pinState.join('').length <= 0) {
                                    const firstRef = pinInputRefs.current[0];
                                    if (firstRef)
                                        firstRef.focus();
                                }
                            }, onClick: () => {
                                if (pinState.join('').length <= 0) {
                                    if (onChange) {
                                        onChange([]);
                                    }
                                }
                            }, onChange: (event) => handlePinChange(event, index), value: pinState[index]?.toString() || '', ...props }), _jsx("div", { className: s['invisible'], children: (index + 1) % 4 === 0 ? 'ss' : null })] }, index))) }), error && (_jsx("span", { className: cn(s['text-sm'], s['text-red'], s['text-4xs'], s['font-arimaRegular']), id: "error", children: error || pinErrorMsg || '' })), !error && pinDefaultMsg && (_jsx("span", { className: cn(s['text-sm'], s['text-4xs'], s['font-arimaRegular']), id: "error", children: pinDefaultMsg }))] }));
});
PinInput.displayName = 'PinInput';
