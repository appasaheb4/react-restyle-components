import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const InputOtp = ({ className, pin, onPinChanged, }) => {
    const pinLength = 6;
    const Pin_Min_Value = 0;
    const Pin_Max_Value = 9;
    const BACKSPACE_Key = 'Backspace';
    const inputRefs = useRef([]);
    useEffect(() => {
        const ref = inputRefs.current[0];
        if (ref) {
            ref.focus();
        }
    }, []);
    const changePinFocus = (pinIndex) => {
        const ref = inputRefs.current[pinIndex];
        if (ref) {
            ref.focus();
        }
    };
    const onChange = (event, index) => {
        const value = event.target.value;
        const pinNumber = Number(value.trim());
        if (isNaN(pinNumber) || value.length === 0) {
            return;
        }
        if (pinNumber >= Pin_Min_Value && pinNumber <= Pin_Max_Value) {
            onPinChanged(pinNumber, index);
            if (index < pinLength - 1) {
                changePinFocus(index + 1);
            }
        }
    };
    const onKeyDown = (event, index) => {
        const keyboardKeyCode = event.nativeEvent.code;
        if (keyboardKeyCode != BACKSPACE_Key)
            return;
        if (pin[index] === undefined) {
            changePinFocus(index - 1);
        }
        else {
            onPinChanged(undefined, index);
        }
    };
    return (_jsx("div", { className: cn(s['relative'], className), children: _jsx("div", { className: cn(s['flex'], s['gap-2'], s['p-2'], s['text-center']), children: Array.from({ length: pinLength }, (_, index) => (_jsx("input", { className: cn(s['text-md'], s['font-extrabold'], s['bg-transparent'], s['text-center'], s['z-20'], s['border'], s['border-gray-secondary'], s['rounded-full'] // Added for full border radius
                ), style: { width: '30px', height: '30px' }, onKeyDown: (event) => onKeyDown(event, index), onMouseUp: () => {
                    if (pin.join('').length <= 0) {
                        changePinFocus(0);
                    }
                }, onClick: () => {
                    if (pin.join('').length <= 0) {
                        onPinChanged(undefined, 0);
                    }
                }, ref: (el) => {
                    if (el) {
                        inputRefs.current[index] = el;
                    }
                }, onChange: (event) => onChange(event, index), value: pin[index] || '' }, index))) }) }));
};
