import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { Label } from '../../../core-components/atoms/Label/Label';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const OtpInput = React.forwardRef(({ id, label, error, required, value, onChange, disabled, otpLength = 6, pinErrorMsg, pinDefaultMsg, className, labelProps, ...props }, ref) => {
    const [pinState, setPinState] = useState(value || []);
    const pinInputRefs = useRef([]);
    useEffect(() => {
        if (value) {
            setPinState(value);
        }
    }, [value]);
    const handlePinChange = (event, index) => {
        const val = event.target.value;
        const pinNumber = Number(val.trim());
        if (isNaN(pinNumber) || val.length === 0)
            return;
        if (pinNumber >= 0 && pinNumber <= 9) {
            const newPin = [...pinState];
            newPin[index] = pinNumber;
            setPinState(newPin);
            if (onChange) {
                onChange(newPin);
            }
            if (index < otpLength - 1) {
                const nextRef = pinInputRefs.current[index + 1];
                if (nextRef)
                    nextRef.focus();
            }
        }
    };
    const handlePinKeyDown = (event, index) => {
        if (event.nativeEvent.code !== 'Backspace')
            return;
        if (pinState[index] !== undefined) {
            const newPin = [...pinState];
            newPin[index] = undefined;
            setPinState(newPin);
            if (onChange) {
                onChange(newPin);
            }
            if (index > 0) {
                const prevRef = pinInputRefs.current[index - 1];
                if (prevRef)
                    prevRef.focus();
            }
        }
        else if (index > 0) {
            const prevRef = pinInputRefs.current[index - 1];
            if (prevRef)
                prevRef.focus();
        }
    };
    return (_jsxs("div", { className: cn(s['w-full'], s['relative'], className), children: [label && (_jsx(Label, { id: id, required: required, label: label, ...labelProps })), _jsx("div", { className: cn(s['flex'], s['gap-2'], s['p-2'], s['text-center']), children: Array.from({ length: otpLength }, (_, index) => (_jsx("input", { ref: (el) => {
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
                    }, type: "tel", disabled: disabled, className: cn(s['text-md'], s['font-extrabold'], s['bg-transparent'], s['text-center'], s['z-20'], s['border'], s['border-gray-secondary'], s['rounded-full'], disabled && s['cursor-not-allowed'], disabled && s['opacity-50'], error && s['border-red-500']), style: { width: '30px', height: '30px' }, onKeyDown: (event) => handlePinKeyDown(event, index), onMouseUp: () => {
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
                    }, onChange: (event) => handlePinChange(event, index), value: pinState[index] || '', ...props }, index))) }), error && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-red-600'], s['dark:text-red-400']), children: error || pinErrorMsg })), !error && pinDefaultMsg && (_jsx("p", { className: cn(s['mt-1'], s['text-sm'], s['text-gray-600'], s['dark:text-gray-400']), children: pinDefaultMsg }))] }));
});
OtpInput.displayName = 'OtpInput';
