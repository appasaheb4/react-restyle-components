"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
/* eslint-disable no-console */
const react_1 = __importDefault(require("react"));
require("./input.styles.css");
const Input = ({
  title,
  value,
  className,
  disable,
  hasError,
  errorMsg,
  defaultMsg,
  inputStyle,
  autoComplete,
  maxlength = 40,
  onChange,
  onBlur,
}) => {
  const onKeyUpValue = (event) => {
    onChange(event.target.value);
  };
  return react_1.default.createElement(
    "div",
    { className: `${className} relative` },
    react_1.default.createElement("input", {
      "data-testid": "inputElement",
      type: "text",
      name: "name",
      value: value,
      placeholder: " ",
      disabled: disable,
      className: `pt-3 pb-2 bg-transparent block w-full px-0 mt-0  rounded-none  border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-secondary border-gray-secondary font-nunitoSansRegular ${inputStyle}`,
      onChange: (e) => onChange && onChange(e.target.value),
      onKeyUp: onKeyUpValue,
      onBlur: (e) => onBlur && onBlur(e.target.value),
      autoComplete: autoComplete,
      maxLength: maxlength,
    }),
    react_1.default.createElement(
      "label",
      {
        className:
          "absolute duration-300 top-3 -z-1 origin-0 text-gray-dark-secondary font-nunitoSansRegular text-md",
      },
      title
    ),
    hasError &&
      (hasError === null || hasError === void 0 ? void 0 : hasError.type) !==
        "required" &&
      react_1.default.createElement(
        "span",
        { className: "text-sm text-red text-4xs", id: "error" },
        `${errorMsg || ""}`
      ),
    (!hasError ||
      (hasError === null || hasError === void 0 ? void 0 : hasError.type) ===
        "required") &&
      react_1.default.createElement(
        "span",
        { className: "text-sm text-4xs", id: "error" },
        `${defaultMsg || ""}`
      )
  );
};
exports.Input = Input;
//# sourceMappingURL=input.component.js.map
