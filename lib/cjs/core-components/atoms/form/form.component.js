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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryScheduleToggle =
  exports.Toggle =
  exports.InputFile =
  exports.CheckBox =
  exports.InputDate =
  exports.InputRadio =
  exports.MultilineInput1 =
  exports.MultilineInput =
  exports.Input2 =
  exports.Input1 =
  exports.InputPassword =
  exports.Input =
  exports.InputWrapper =
  exports.Label =
    void 0;
const react_1 = __importStar(require("react"));
require("../css/toggle.css");
require("../css/toggle-2.css");
const classnames_1 = __importDefault(require("classnames"));
require("../css/date-time-picker.css");
const Label = (props) =>
  react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      "label",
      {
        htmlFor: props.htmlFor,
        className: `${
          props.hasError ? "text-red-400" : "text-current"
        } block text-3xs font-medium  mb-1`,
        style: Object.assign({}, props.style),
      },
      props.children
    )
  );
exports.Label = Label;
const InputWrapper = (props) =>
  react_1.default.createElement(
    "div",
    { className: props.className, ref: props.ref },
    react_1.default.createElement(
      exports.Label,
      {
        htmlFor: props.id || "",
        hasError: props.hasError,
        style: Object.assign({}, props.style),
      },
      react_1.default.createElement(
        "span",
        { className: "dark:text-white w-10" },
        props.label
      )
    ),
    props.children
  );
exports.InputWrapper = InputWrapper;
exports.Input = react_1.default.forwardRef((props, ref) => {
  const handleKeyPress = (e) => {
    const key = e.key;
    const regex = props.pattern;
    if (
      regex &&
      !(regex === null || regex === void 0 ? void 0 : regex.test(key))
    ) {
      e.preventDefault();
    }
  };
  return react_1.default.createElement(
    exports.InputWrapper,
    {
      label: props.label,
      id: props.id,
      hasError: props.hasError,
      style: props.wrapperStyle,
      className: props.labelClassName,
    },
    react_1.default.createElement("input", {
      type: props.type || "text",
      id: props.id,
      ref: props.inputRef,
      "data-testid": "INPT",
      autoFocus:
        (props === null || props === void 0 ? void 0 : props.isAutoFocus) ||
        false,
      name: props.name,
      style: props.style,
      defaultValue: props.defaultValue,
      placeholder: props.placeholder,
      required: props.required || false,
      disabled: props.disabled || false,
      autoComplete: "given-name",
      maxLength: props.maxLength,
      value: props.value,
      onChange: (e) => props.onChange && props.onChange(e.target.value),
      onKeyPress: (e) => handleKeyPress(e),
      className: `${
        props.className
      } leading-4 p-2  dark:bg-boxdark  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ${
        props.hasError ? "border-red " : "border-gray-300"
      } rounded-md `,
      onBlur: (e) => props.onBlur && props.onBlur(e.target.value),
      onKeyDown: props.onKeyDown && props.onKeyDown,
    })
  );
});
exports.InputPassword = react_1.default.forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = (0, react_1.useState)(false);
  const handleMouseDown = () => {
    setShowPassword(true);
  };
  const handleMouseUp = () => {
    setShowPassword(false);
  };
  return react_1.default.createElement(
    exports.InputWrapper,
    {
      label: props.label,
      id: props.id,
      hasError: props.hasError,
      style: props.wrapperStyle,
      className: props.labelClassName,
    },
    react_1.default.createElement(
      "div",
      { className: "flex items-center relative" },
      react_1.default.createElement("input", {
        type: showPassword ? "text" : "password",
        id: props.id,
        ref: props.inputRef,
        "data-testid": "INPT",
        autoFocus:
          (props === null || props === void 0 ? void 0 : props.isAutoFocus) ||
          false,
        name: props.name,
        style: props.style,
        defaultValue: props.defaultValue,
        placeholder: props.placeholder,
        required: props.required || false,
        disabled: props.disabled || false,
        autoComplete: "given-name",
        maxLength: props.maxLength,
        value: props.value,
        onChange: (e) => props.onChange && props.onChange(e.target.value),
        // onKeyPress={e => handleKeyPress(e)}
        className: `${
          props.className
        } leading-4 p-2  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ${
          props.hasError ? "border-red " : "border-gray-300"
        } rounded-md dark:bg-boxdark`,
        onBlur: (e) => props.onBlur && props.onBlur(e.target.value),
        onKeyDown: props.onKeyDown && props.onKeyDown,
      }),
      react_1.default.createElement(
        "div",
        { className: "flex absolute right-3" },
        react_1.default.createElement(
          "svg",
          {
            className: "h-6 dark:bg-boxdark",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
          },
          showPassword
            ? react_1.default.createElement("path", {
                fill: "currentColor",
                d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",
              })
            : react_1.default.createElement("path", {
                fill: "currentColor",
                d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z",
              })
        )
      )
    )
  );
});
exports.Input1 = react_1.default.forwardRef((props, ref) => {
  const handleKeyPress = (e) => {
    const key = e.key;
    const regex = props.pattern;
    if (
      regex &&
      !(regex === null || regex === void 0 ? void 0 : regex.test(key))
    ) {
      e.preventDefault();
    }
  };
  return react_1.default.createElement(
    exports.InputWrapper,
    {
      label: props.label,
      id: props.id,
      hasError: props.hasError,
      style: props.wrapperStyle,
      className: props.labelClassName,
    },
    react_1.default.createElement("input", {
      type: props.type || "text",
      id: props.id,
      ref: props.inputRef,
      "data-testid": "INPT",
      autoFocus:
        (props === null || props === void 0 ? void 0 : props.isAutoFocus) ||
        false,
      name: props.name,
      style: props.style,
      defaultValue: props.defaultValue,
      placeholder: props.placeholder,
      required: props.required || false,
      disabled: props.disabled || false,
      autoComplete: "given-name",
      maxLength: props.maxLength,
      value: props.value,
      onChange: (e) => props.onChange && props.onChange(e.target.value),
      onKeyPress: (e) => handleKeyPress(e),
      className: `${
        props.className
      } leading-4 p-2  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ${
        props.hasError ? "border-red " : "border-gray-300"
      } rounded-md dark:text-black`,
      onBlur: (e) => props.onBlur && props.onBlur(e),
      onKeyDown: props.onKeyDown,
    })
  );
});
exports.Input2 = react_1.default.forwardRef((props, ref) => {
  const [isBlur, setIsBlur] = (0, react_1.useState)(true);
  const handleKeyPress = (e) => {
    const key = e.key;
    const regex = props.pattern;
    if (
      regex &&
      !(regex === null || regex === void 0 ? void 0 : regex.test(key))
    ) {
      e.preventDefault();
    }
  };
  const handleBlur = (value) => {
    props.onBlur && isBlur && props.onBlur(value);
  };
  return react_1.default.createElement(
    exports.InputWrapper,
    {
      label: props.label,
      id: props.id,
      hasError: props.hasError,
      style: props.wrapperStyle,
      className: props.labelClassName,
    },
    react_1.default.createElement("input", {
      type: props.type || "text",
      id: props.id,
      ref: props.inputRef,
      "data-testid": "INPT",
      autoFocus:
        (props === null || props === void 0 ? void 0 : props.isAutoFocus) ||
        false,
      name: props.name,
      style: props.style,
      defaultValue: props.defaultValue,
      placeholder: props.placeholder,
      required: props.required || false,
      disabled: props.disabled || false,
      autoComplete: "given-name",
      maxLength: props.maxLength,
      value: props.value,
      onChange: (e) => {
        setIsBlur(true);
        props.onChange && props.onChange(e.target.value);
      },
      onKeyPress: (e) => handleKeyPress(e),
      className: `${
        props.className
      } leading-4 p-2  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ${
        props.hasError ? "border-red " : "border-gray-300"
      } rounded-md dark:text-black`,
      onKeyDown: (e) => {
        if (e.keyCode == 13) {
          setIsBlur(false);
          props.onBlur && props.onBlur(e.target.value);
        }
        props.onKeyDown && props.onKeyDown(e);
      },
      onBlur: (e) => {
        handleBlur(e.target.value);
      },
    })
  );
});
const MultilineInput = (props) =>
  react_1.default.createElement(
    exports.InputWrapper,
    { label: props.label, id: props.id, className: props.className },
    react_1.default.createElement("textarea", {
      id: props.id,
      autoComplete: "given-name",
      value: props.value,
      disabled: props.disabled,
      style: props.style,
      rows: props.rows,
      onKeyUp: props.onKeyUp && props.onKeyUp,
      placeholder: props.placeholder,
      onChange: (e) => props.onChange && props.onChange(e.target.value),
      onBlur: (e) => props.onBlur && props.onBlur(e.target.value),
      className: `leading-4 p-2 focus:outline-none focus:ring block w-full shadow-sm sm:text-base border-2 ${
        props.hasError ? "border-red " : "border-gray-300"
      } rounded-md dark:bg-boxdark`,
      defaultValue: props.defaultValue,
    })
  );
exports.MultilineInput = MultilineInput;
const MultilineInput1 = (props) =>
  react_1.default.createElement(
    exports.InputWrapper,
    { label: props.label, id: props.id, className: props.className },
    react_1.default.createElement("textarea", {
      id: props.id,
      autoComplete: "given-name",
      value: props.value,
      disabled: props.disabled,
      style: props.style,
      rows: props.rows,
      placeholder: props.placeholder,
      onChange: (e) => props.onChange && props.onChange(e.target.value),
      onBlur: (e) => props.onBlur && props.onBlur(e),
      className: `leading-4 p-2 focus:outline-none focus:ring block w-full shadow-sm sm:text-base border-2 ${
        props.hasError ? "border-red " : "border-gray-300"
      } rounded-md`,
      defaultValue: props.defaultValue,
    })
  );
exports.MultilineInput1 = MultilineInput1;
const InputRadio = (props) => {
  var _a;
  return react_1.default.createElement(
    exports.InputWrapper,
    { label: props.label, id: props.id, style: props.labelStyle },
    (_a = props.values) === null || _a === void 0
      ? void 0
      : _a.map((item, key) =>
          react_1.default.createElement(
            "div",
            {
              className: "flex items-center gap-2",
              key: key,
              onClick: () => {
                props.onChange && props.onChange(item.value);
              },
            },
            react_1.default.createElement("input", {
              key: key,
              type: "radio",
              id: props.id,
              name: props.name,
              value: item.value,
              checked: item.value == props.value ? true : false,
              onChange: () => props.onChange && props.onChange(item.value),
              className:
                "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
            }),
            react_1.default.createElement(
              exports.Label,
              { htmlFor: props.id || "", style: { marginTop: 6 } },
              item.label
            )
          )
        )
  );
};
exports.InputRadio = InputRadio;
const InputDate = ({
  name,
  value,
  placeholder,
  use12Hours = true,
  label,
  id,
  hasError,
  disabled,
  format,
  onChange,
  onFocusRemove,
}) =>
  react_1.default.createElement(
    exports.InputWrapper,
    { label: label, id: id, hasError: hasError },
    react_1.default.createElement("input", {
      type: "date",
      id: id,
      name: name,
      disabled: disabled || false,
      value: value,
      onChange: (e) => onChange && onChange(e),
      className: `leading-4 p-2 focus:outline-none focus:ring block w-full shadow-sm sm:text-base border-2 ${
        hasError ? "border-red " : "border-gray-300"
      } rounded-md`,
    })
  );
exports.InputDate = InputDate;
const CheckBox = (props) => {
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement("input", {
      key: props.id,
      onClick: props.handleCheckChieldElement,
      type: "checkbox",
      checked: props.isChecked,
      value: props.value,
    }),
    " ",
    props.value
  );
};
exports.CheckBox = CheckBox;
const InputFile = (props) =>
  react_1.default.createElement(
    exports.InputWrapper,
    { label: props.label, id: props.id },
    react_1.default.createElement("input", {
      type: "file",
      id: props.id,
      name: props.name,
      disabled: props.disabled || false,
      accept: props.accept,
      value: props.value,
      onChange: (e) => props.onChange && props.onChange(e),
      className: `leading-4 p-2 focus:outline-none focus:ring block w-full shadow-sm sm:text-base border-2 ${
        props.hasError ? "border-red " : "border-gray-300"
      } rounded-md`,
      multiple: props.multiple,
    })
  );
exports.InputFile = InputFile;
const Toggle = (props) => {
  const [toggle, setToggle] = (0, react_1.useState)(props.value);
  const { onChange, disabled, className, isToggleLabel = true } = props;
  (0, react_1.useEffect)(() => {
    setToggle(props.value);
  }, [props.value]);
  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    setToggle(!toggle);
    if (typeof onChange === "function") {
      onChange(!toggle);
    }
  };
  const toggleClasses = (0, classnames_1.default)(
    "wrg-toggle ",
    {
      "wrg-toggle--checked": toggle,
      "wrg-toggle--disabled": disabled,
    },
    className
  );
  return react_1.default.createElement(
    exports.InputWrapper,
    { label: props.label, id: props.id, style: props.style },
    react_1.default.createElement(
      "div",
      { onClick: triggerToggle, className: toggleClasses },
      react_1.default.createElement(
        "div",
        {
          className:
            "wrg-toggle-container " +
            (toggle ? "bg-green-700" : "bg-black dark:bg-white"),
        },
        isToggleLabel &&
          react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement(
              "div",
              { className: "wrg-toggle-check" },
              react_1.default.createElement(
                "span",
                { className: "text-white ml-1" },
                "Yes"
              )
            ),
            react_1.default.createElement(
              "div",
              { className: "wrg-toggle-uncheck" },
              react_1.default.createElement(
                "span",
                { className: "dark:text-black" },
                "No"
              )
            )
          )
      ),
      react_1.default.createElement("div", {
        className: `wrg-toggle-circle  dark:bg-black ${
          toggle ? "ml-1" : "mr-1"
        }  `,
      }),
      react_1.default.createElement("input", {
        type: "checkbox",
        "aria-label": "Toggle Button",
        className: "wrg-toggle-input",
      })
    )
  );
};
exports.Toggle = Toggle;
const DeliveryScheduleToggle = (props) => {
  const [toggle, setToggle] = (0, react_1.useState)(props.value);
  const { onChange, disabled, className, isToggleLabel = true } = props;
  (0, react_1.useEffect)(() => {
    setToggle(props.value);
  }, [props.value]);
  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    setToggle(!toggle);
    if (typeof onChange === "function") {
      onChange(!toggle);
    }
  };
  const toggleClasses = (0, classnames_1.default)(
    "wrg-toggle1 ",
    {
      "wrg-toggle--checked1": toggle,
      "wrg-toggle--disabled1": disabled,
    },
    className
  );
  return react_1.default.createElement(
    exports.InputWrapper,
    { label: props.label, id: props.id, style: props.style },
    react_1.default.createElement(
      "div",
      { onClick: triggerToggle, className: toggleClasses },
      react_1.default.createElement(
        "div",
        {
          className:
            "wrg-toggle-container1 " +
            (toggle ? "bg-green-700" : "bg-black dark:bg-white"),
        },
        isToggleLabel &&
          react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement(
              "div",
              { className: "wrg-toggle-check1" },
              react_1.default.createElement(
                "span",
                { className: "text-white ml-1" },
                "Departments"
              )
            ),
            react_1.default.createElement(
              "div",
              { className: "wrg-toggle-uncheck1" },
              react_1.default.createElement(
                "span",
                { className: "dark:text-black" },
                "Patients"
              )
            )
          )
      ),
      react_1.default.createElement("div", {
        className: `wrg-toggle-circle1  dark:bg-black ${
          toggle ? "ml-1" : "mr-1"
        }  `,
      }),
      react_1.default.createElement("input", {
        type: "checkbox",
        "aria-label": "Toggle Button",
        className: "wrg-toggle-input1",
      })
    )
  );
};
exports.DeliveryScheduleToggle = DeliveryScheduleToggle;
//# sourceMappingURL=form.component.js.map
