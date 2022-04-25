"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputOtp = void 0;
/* eslint-disable no-console */
const react_1 = __importStar(require("react"));
require("./input-otp.styles.css");
const InputOtp = ({ className, pin, onPinChanged }) => {
  const pinLength = 6;
  const Pin_Min_Value = 0;
  const Pin_Max_Value = 9;
  const BACKSPACE_Key = "Backspace";
  const inputRefs = (0, react_1.useRef)([]);
  (0, react_1.useEffect)(() => {
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
    console.log({ event, index });
    const keyboardKeyCode = event.nativeEvent.code;
    if (keyboardKeyCode != BACKSPACE_Key) return;
    if (pin[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };
  return react_1.default.createElement(
    "div",
    { className: `${className} relative` },
    react_1.default.createElement(
      "div",
      {
        className:
          "flex space-x-1 bg-background-secondary rounded-lg outline-offset-8",
      },
      Array.from({ length: pinLength }, (_, index) =>
        react_1.default.createElement("input", {
          "data-testid": "onPinChanged",
          className:
            "pt-3 pb-2 block w-full px-0 text-5xl font-extrabold border-b-0 text-orange mt-0 bg-transparent text-center z-20 appearance-none focus:outline-none  font-nunitoSansRegular",
          onKeyDown: (event) => onKeyDown(event, index),
          key: index,
          onMouseUp: () => {
            if (pin.join("").length <= 0) {
              changePinFocus(0);
            }
          },
          onClick: () => {
            if (pin.join("").length <= 0) {
              onPinChanged(undefined, 0);
            }
          },
          ref: (el) => {
            if (el) {
              inputRefs.current[index] = el;
            }
          },
          onChange: (event) => onChange(event, index),
          value: pin[index] || "",
        })
      )
    )
  );
};
exports.InputOtp = InputOtp;
//# sourceMappingURL=input-otp.component.js.map
