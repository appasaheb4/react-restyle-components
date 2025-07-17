import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable */
import { useRef, useState } from 'react';
import './input.styles.css';
import s from '../../tc.module.css';
import { cn } from '../../utils';
export const InputPin = ({ title, className, defaultPin, errorMsg, defaultMsg, hasError, onPinChanged, }) => {
    const pin = useRef([]);
    const [reload, setReload] = useState(false);
    const pinLength = 12;
    const Pin_Min_Value = 0;
    const Pin_Max_Value = 9;
    const BACKSPACE_Key = 'Backspace';
    const inputRefs = useRef([]);
    const removeValuesFromArray = (valuesArray, value) => {
        const valueIndex = valuesArray.findIndex((entry) => entry === value);
        if (valueIndex === -1) {
            return;
        }
        valuesArray.splice(valueIndex, 1);
    };
    const changePinFocus = (pinIndex) => {
        const ref = inputRefs.current[pinIndex];
        if (ref) {
            ref.focus();
        }
    };
    const onChange = (event, index) => {
        const previousValue = event.target.defaultValue;
        const valueArray = event.target.value.split('');
        const output = removeValuesFromArray(valueArray, previousValue);
        const value = valueArray.pop();
        if (!value) {
            return;
        }
        const pinNumber = Number(value);
        if (isNaN(pinNumber) || value.length === 0) {
            return;
        }
        pin.current[pin.current?.length] = value;
        setReload(!reload);
        if (pinNumber >= Pin_Min_Value && pinNumber <= Pin_Max_Value) {
            onPinChanged(pin.current, index);
            if (index < pinLength - 1) {
                changePinFocus(index + 1);
            }
        }
    };
    const onKeyDown = (event, index) => {
        const keyboardKeyCode = event.nativeEvent.code;
        if (keyboardKeyCode != BACKSPACE_Key)
            return;
        if (pin.current[index] !== undefined && keyboardKeyCode === BACKSPACE_Key) {
            changePinFocus(index - 1);
        }
        if (pin.current[index] === undefined) {
            changePinFocus(index - 1);
        }
        else {
            onPinChanged(undefined, index);
        }
    };
    return (_jsxs("div", { className: cn(className, s.relative), children: [_jsx("label", { className: cn(s['duration-300'], s['-z-1'], s['origin-0'], s['text-gray-dark-secondary'], s['font-arimaRegular'], s['text-md']), children: title }), _jsx("div", { className: cn(s.flex, s['space-x-1']), children: Array.from({ length: pinLength }, (_, index) => (_jsxs("div", { className: cn(s.flex, s['space-x-1'], s['max-w-full'], s['items-stretch']), children: [_jsx("input", { "data-testid": "inputElementPin", type: "tel", className: cn(s['pb-2'], s.block, s['w-4'], s['px-0'], s['mt-0'], s['bg-transparent'], s['text-center'], s['border-0'], s['border-b'], s['z-20'], s['appearance-none'], s['rounded-none'], s['focus:outline-none'], s['focus:ring-0'], s['focus:border-gray-secondary'], s['border-gray-secondary'], s['font-arimaRegular']), onKeyUp: (event) => onKeyDown(event, index), onMouseUp: () => {
                                if (pin.current.join('').length <= 0) {
                                    changePinFocus(0);
                                }
                            }, onClick: () => {
                                if (pin.current.join('').length <= 0) {
                                    onPinChanged(undefined, 0);
                                }
                            }, ref: (el) => {
                                if (el) {
                                    inputRefs.current[index] = el;
                                }
                            }, onChange: (event) => onChange(event, index), value: pin.current[index]?.toString() || '' }, index), _jsx("div", { className: s.invisible, children: (index + 1) % 4 === 0 ? 'ss' : null })] }, index))) }), hasError && hasError?.type !== 'required' && (_jsx("span", { className: cn(s['text-sm'], s['text-red'], s['text-4xs'], s['font-arimaRegular']), id: "error", children: `${errorMsg || ''}` })), (!hasError || hasError?.type === 'required') && (_jsx("span", { className: cn(s['text-sm'], s['text-4xs'], s['font-arimaRegular']), id: "error", children: `${defaultMsg || ''}` }))] }));
};
