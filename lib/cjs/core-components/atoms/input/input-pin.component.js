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
exports.InputPin = void 0;
/* eslint-disable */
const react_1 = __importStar(require("react"));
require("./input.styles.css");
const InputPin = ({
  title,
  className,
  defaultPin,
  errorMsg,
  defaultMsg,
  hasError,
  onPinChanged,
}) => {
  const pin = (0, react_1.useRef)([]);
  const [reload, setReload] = (0, react_1.useState)(false);
  const pinLength = 12;
  const Pin_Min_Value = 0;
  const Pin_Max_Value = 9;
  const BACKSPACE_Key = "Backspace";
  const inputRefs = (0, react_1.useRef)([]);
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
    var _a;
    const previousValue = event.target.defaultValue;
    const valueArray = event.target.value.split("");
    const output = removeValuesFromArray(valueArray, previousValue);
    const value = valueArray.pop();
    if (!value) {
      return;
    }
    const pinNumber = Number(value);
    if (isNaN(pinNumber) || value.length === 0) {
      return;
    }
    pin.current[
      (_a = pin.current) === null || _a === void 0 ? void 0 : _a.length
    ] = value;
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
    if (keyboardKeyCode != BACKSPACE_Key) return;
    if (pin.current[index] !== undefined && keyboardKeyCode === BACKSPACE_Key) {
      changePinFocus(index - 1);
    }
    if (pin.current[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };
  return react_1.default.createElement(
    "div",
    { className: `${className} relative` },
    react_1.default.createElement(
      "label",
      {
        className:
          "duration-300  -z-1 origin-0 text-gray-dark-secondary font-nunitoSansRegular text-md",
      },
      title,
    ),
    react_1.default.createElement(
      "div",
      { className: "flex  space-x-1" },
      Array.from({ length: pinLength }, (_, index) => {
        var _a;
        return react_1.default.createElement(
          "div",
          { className: "flex space-x-1 max-w-full items-stretch", key: index },
          react_1.default.createElement("input", {
            "data-testid": "inputElementPin",
            type: "tel",
            className:
              "pb-2 block  w-4  px-0 mt-0 bg-transparent text-center border-0 border-b z-20 appearance-none rounded-none focus:outline-none  focus:ring-0 focus:border-gray-secondary border-gray-secondary font-nunitoSansRegular ",
            onKeyUp: (event) => onKeyDown(event, index),
            key: index,
            onMouseUp: () => {
              if (pin.current.join("").length <= 0) {
                changePinFocus(0);
              }
            },
            onClick: () => {
              if (pin.current.join("").length <= 0) {
                onPinChanged(undefined, 0);
              }
            },
            ref: (el) => {
              if (el) {
                inputRefs.current[index] = el;
              }
            },
            onChange: (event) => onChange(event, index),
            value:
              ((_a = pin.current[index]) === null || _a === void 0
                ? void 0
                : _a.toString()) || "",
          }),
          react_1.default.createElement(
            "div",
            { className: "invisible" },
            (index + 1) % 4 === 0 ? "ss" : null,
          ),
        );
      }),
    ),
    hasError &&
      (hasError === null || hasError === void 0 ? void 0 : hasError.type) !==
        "required" &&
      react_1.default.createElement(
        "span",
        {
          className: "text-sm text-red text-4xs font-nunitoSansRegular",
          id: "error",
        },
        `${errorMsg || ""}`,
      ),
    (!hasError ||
      (hasError === null || hasError === void 0 ? void 0 : hasError.type) ===
        "required") &&
      react_1.default.createElement(
        "span",
        { className: "text-sm text-4xs font-nunitoSansRegular", id: "error" },
        `${defaultMsg || ""}`,
      ),
  );
};
exports.InputPin = InputPin;
//# sourceMappingURL=input-pin.component.js.map
