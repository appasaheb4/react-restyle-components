/* eslint-disable no-console */
import React, {useEffect, useRef} from 'react';
import './input-otp.styles.css';
interface PinInputGridProps {
  title?: string;
  hasError?: boolean;
  className?: string;
  disable?: boolean;
  blur?: any;
  name?: string;
  pin: Array<number | undefined>;

  onPinChanged: (pinEntry: number | undefined, index: number) => void;
}

export const InputOtp: React.FC<PinInputGridProps> = ({
  className,
  pin,
  onPinChanged,
}) => {
  const pinLength = 6;
  const Pin_Min_Value = 0;
  const Pin_Max_Value = 9;
  const BACKSPACE_Key = 'Backspace';
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const ref = inputRefs.current[0];
    if (ref) {
      ref.focus();
    }
  }, []);

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

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log({event, index});

    const keyboardKeyCode = event.nativeEvent.code;
    if (keyboardKeyCode != BACKSPACE_Key) return;

    if (pin[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };

  return (
    <div className={`${className} relative`}>
      <div className="flex space-x-1 bg-background-secondary rounded-lg outline-offset-8">
        {Array.from({length: pinLength}, (_, index) => (
          <input
            data-testid="onPinChanged"
            className="pt-3 pb-2 block w-full px-0 text-5xl font-extrabold border-b-0 text-orange mt-0 bg-transparent text-center z-20 appearance-none focus:outline-none  font-nunitoSansRegular"
            onKeyDown={(event) => onKeyDown(event, index)}
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
            value={pin[index] || ''}
          />
        ))}
      </div>
    </div>
  );
};
