/* eslint-disable */
import React, { useRef, useState } from 'react';
import './input.styles.css';
import '../../../tc.css';
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
    return (React.createElement("div", { className: `${className} relative` },
        React.createElement("label", { className: "duration-300  -z-1 origin-0 text-gray-dark-secondary font-arimaRegular text-md" }, title),
        React.createElement("div", { className: "flex  space-x-1" }, Array.from({ length: pinLength }, (_, index) => (React.createElement("div", { className: "flex space-x-1 max-w-full items-stretch", key: index },
            React.createElement("input", { "data-testid": "inputElementPin", type: "tel", className: "pb-2 block  w-4  px-0 mt-0 bg-transparent text-center border-0 border-b z-20 appearance-none rounded-none focus:outline-none  focus:ring-0 focus:border-gray-secondary border-gray-secondary font-arimaRegular ", onKeyUp: (event) => onKeyDown(event, index), key: index, onMouseUp: () => {
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
                }, onChange: (event) => onChange(event, index), value: pin.current[index]?.toString() || '' }),
            React.createElement("div", { className: "invisible" }, (index + 1) % 4 === 0 ? 'ss' : null))))),
        hasError && hasError?.type !== 'required' && (React.createElement("span", { className: "text-sm text-red text-4xs font-arimaRegular", id: "error" }, `${errorMsg || ''}`)),
        (!hasError || hasError?.type === 'required') && (React.createElement("span", { className: "text-sm text-4xs font-arimaRegular", id: "error" }, `${defaultMsg || ''}`))));
};
