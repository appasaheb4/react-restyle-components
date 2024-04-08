/* eslint-disable no-console */
import React from "react";
import "./input.styles.css";
export const Input = ({
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
  return React.createElement(
    "div",
    { className: `${className} relative` },
    React.createElement("input", {
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
    React.createElement(
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
      React.createElement(
        "span",
        { className: "text-sm text-red text-4xs", id: "error" },
        `${errorMsg || ""}`
      ),
    (!hasError ||
      (hasError === null || hasError === void 0 ? void 0 : hasError.type) ===
        "required") &&
      React.createElement(
        "span",
        { className: "text-sm text-4xs", id: "error" },
        `${defaultMsg || ""}`
      )
  );
};
//# sourceMappingURL=input.component.js.map
