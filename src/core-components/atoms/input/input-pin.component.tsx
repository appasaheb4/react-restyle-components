/* eslint-disable */
import React, {useRef, useState} from 'react';
import './input.styles.css';

interface PinInputGridProps {
  title: string;
  hasError?: any;
  errorMsg?: string;
  defaultMsg?: string;
  className?: string;
  disable?: boolean;
  name?: string;
  pin: Array<number | undefined>;
  onPinChanged: (pinEntry: number | undefined, index: number) => void;
}

export const InputPin: React.FC<PinInputGridProps> = ({
  title,
  className,
  pin,
  errorMsg,
  defaultMsg,
  hasError,
  onPinChanged,
}) => {
  const pinLength = 12;
  const Pin_Min_Value = 0;
  const Pin_Max_Value = 9;
  const BACKSPACE_Key = 'Backspace';
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const removeValuesFromArray = (valuesArray: string[], value: string) => {
    const valueIndex = valuesArray.findIndex((entry) => entry === value);
    if (valueIndex === -1) {
      return;
    }
    valuesArray.splice(valueIndex, 1);
  };

  const changePinFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex];
    if (ref) {
      ref.focus();
    }
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const previousValue = event.target.defaultValue;
    const valueArray = event.target.value.split('');
    removeValuesFromArray(valueArray, previousValue);
    const value = valueArray.pop();

    if (!value) {
      return;
    }
    const pinNumber = Number(value);

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
  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const keyboardKeyCode = event.nativeEvent.code;
    if (keyboardKeyCode != BACKSPACE_Key) return;
    if (pin[index] !== undefined && keyboardKeyCode === BACKSPACE_Key) {
      changePinFocus(index - 1);
    }
    if (pin[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };

  return (
    <div className={`${className} relative`}>
      <label className="duration-300  -z-1 origin-0 text-gray-dark-secondary font-nunitoSansRegular text-md">
        {title}
      </label>
      <div className="flex  space-x-1">
        {Array.from({length: pinLength}, (_, index) => (
          <div className="flex space-x-1 max-w-full items-stretch" key={index}>
            <input
              data-testid="inputElementPin"
              type="tel"
              className="pb-2 block  w-4  px-0 mt-0 bg-transparent text-center border-0 border-b z-20 appearance-none rounded-none focus:outline-none  focus:ring-0 focus:border-gray-secondary border-gray-secondary font-nunitoSansRegular "
              onKeyUp={(event) => onKeyDown(event, index)}
              key={index}
              onMouseUp={() => {
                if (pin.join('').length <= 0) {
                  changePinFocus(0);
                }
              }}
              onClick={() => {
                if (pin.join('').length <= 0) {
                  onPinChanged(undefined, 0);
                }
              }}
              ref={(el) => {
                if (el) {
                  inputRefs.current[index] = el;
                }
              }}
              onChange={(event) => onChange(event, index)}
              value={pin[index]?.toString() || ''}
            />
            <div className="invisible">
              {(index + 1) % 4 === 0 ? 'ss' : null}
            </div>
          </div>
        ))}
      </div>
      {hasError && hasError?.type !== 'required' && (
        <span
          className="text-sm text-red text-4xs font-nunitoSansRegular"
          id="error"
        >
          {`${errorMsg || ''}`}
        </span>
      )}
      {(!hasError || hasError?.type === 'required') && (
        <span className="text-sm text-4xs font-nunitoSansRegular" id="error">
          {`${defaultMsg || ''}`}
        </span>
      )}
    </div>
  );
};
