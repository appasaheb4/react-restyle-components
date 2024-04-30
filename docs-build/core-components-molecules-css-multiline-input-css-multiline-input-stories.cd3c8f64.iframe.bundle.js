/*! For license information please see core-components-molecules-css-multiline-input-css-multiline-input-stories.cd3c8f64.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [647],
  {
    "./src/core-components/molecules/css-multiline-input/css-multiline-input.stories.tsx":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Primary: () => Primary,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => css_multiline_input_stories,
          });
        var react = __webpack_require__("./node_modules/react/index.js");
        __webpack_require__("./node_modules/classnames/index.js");
        function _array_like_to_array(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _define_property(obj, key, value) {
          return (
            key in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          );
        }
        function _object_spread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {},
              ownKeys = Object.keys(source);
            "function" == typeof Object.getOwnPropertySymbols &&
              (ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(source, sym)
                    .enumerable;
                }),
              )),
              ownKeys.forEach(function (key) {
                _define_property(target, key, source[key]);
              });
          }
          return target;
        }
        function _sliced_to_array(arr, i) {
          return (
            (function _array_with_holes(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function _iterable_to_array_limit(arr, i) {
              var _i =
                null == arr
                  ? null
                  : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                    arr["@@iterator"];
              if (null != _i) {
                var _s,
                  _e,
                  _arr = [],
                  _n = !0,
                  _d = !1;
                try {
                  for (
                    _i = _i.call(arr);
                    !(_n = (_s = _i.next()).done) &&
                    (_arr.push(_s.value), !i || _arr.length !== i);
                    _n = !0
                  );
                } catch (err) {
                  (_d = !0), (_e = err);
                } finally {
                  try {
                    _n || null == _i.return || _i.return();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
            })(arr, i) ||
            (function _unsupported_iterable_to_array(o, minLen) {
              if (!o) return;
              if ("string" == typeof o) return _array_like_to_array(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              "Object" === n && o.constructor && (n = o.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(n);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _array_like_to_array(o, minLen);
            })(arr, i) ||
            (function _non_iterable_rest() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        var Label = function (props) {
            return react.createElement(
              react.Fragment,
              null,
              react.createElement(
                "label",
                {
                  htmlFor: props.htmlFor,
                  className: "".concat(
                    props.hasError ? "text-red-400" : "text-current",
                    " block text-3xs font-medium  mb-1",
                  ),
                  style: _object_spread({}, props.style),
                },
                props.children,
              ),
            );
          },
          InputWrapper = function (props) {
            return react.createElement(
              "div",
              { className: props.className, ref: props.ref },
              react.createElement(
                Label,
                {
                  htmlFor: props.id || "",
                  hasError: props.hasError,
                  style: _object_spread({}, props.style),
                },
                react.createElement(
                  "span",
                  { className: "dark:text-white w-10" },
                  props.label,
                ),
              ),
              props.children,
            );
          },
          Input = react.forwardRef(function (props, ref) {
            return react.createElement(
              InputWrapper,
              {
                label: props.label,
                id: props.id,
                hasError: props.hasError,
                style: props.wrapperStyle,
                className: props.labelClassName,
              },
              react.createElement("input", {
                type: props.type || "text",
                id: props.id,
                ref: props.inputRef,
                "data-testid": "INPT",
                autoFocus: (null == props ? void 0 : props.isAutoFocus) || !1,
                name: props.name,
                style: props.style,
                defaultValue: props.defaultValue,
                placeholder: props.placeholder,
                required: props.required || !1,
                disabled: props.disabled || !1,
                autoComplete: "given-name",
                maxLength: props.maxLength,
                value: props.value,
                onChange: function (e) {
                  return props.onChange && props.onChange(e.target.value);
                },
                onKeyPress: function (e) {
                  return (function (e) {
                    var key = e.key,
                      regex = props.pattern;
                    regex &&
                      !(null == regex ? void 0 : regex.test(key)) &&
                      e.preventDefault();
                  })(e);
                },
                className: ""
                  .concat(
                    props.className,
                    " leading-4 p-2  dark:bg-boxdark  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ",
                  )
                  .concat(
                    props.hasError ? "border-red " : "border-gray-300",
                    " rounded-md ",
                  ),
                onBlur: function (e) {
                  return props.onBlur && props.onBlur(e.target.value);
                },
                onKeyDown: props.onKeyDown && props.onKeyDown,
              }),
            );
          }),
          InputPassword = react.forwardRef(function (props, ref) {
            var _useState = _sliced_to_array((0, react.useState)(!1), 2),
              showPassword = _useState[0],
              setShowPassword = _useState[1],
              handleMouseUp = function () {
                setShowPassword(!1);
              };
            return react.createElement(
              InputWrapper,
              {
                label: props.label,
                id: props.id,
                hasError: props.hasError,
                style: props.wrapperStyle,
                className: props.labelClassName,
              },
              react.createElement(
                "div",
                { className: "flex items-center relative" },
                react.createElement("input", {
                  type: showPassword ? "text" : "password",
                  id: props.id,
                  ref: props.inputRef,
                  "data-testid": "INPT",
                  autoFocus: (null == props ? void 0 : props.isAutoFocus) || !1,
                  name: props.name,
                  style: props.style,
                  defaultValue: props.defaultValue,
                  placeholder: props.placeholder,
                  required: props.required || !1,
                  disabled: props.disabled || !1,
                  autoComplete: "given-name",
                  maxLength: props.maxLength,
                  value: props.value,
                  onChange: function (e) {
                    return props.onChange && props.onChange(e.target.value);
                  },
                  className: ""
                    .concat(
                      props.className,
                      " leading-4 p-2  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ",
                    )
                    .concat(
                      props.hasError ? "border-red " : "border-gray-300",
                      " rounded-md dark:bg-boxdark",
                    ),
                  onBlur: function (e) {
                    return props.onBlur && props.onBlur(e.target.value);
                  },
                  onKeyDown: props.onKeyDown && props.onKeyDown,
                }),
                react.createElement(
                  "div",
                  { className: "flex absolute right-3" },
                  react.createElement(
                    "svg",
                    {
                      className: "h-6 dark:bg-boxdark",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 576 512",
                      onMouseDown: function () {
                        setShowPassword(!0);
                      },
                      onMouseUp: handleMouseUp,
                      onMouseLeave: handleMouseUp,
                    },
                    showPassword
                      ? react.createElement("path", {
                          fill: "currentColor",
                          d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",
                        })
                      : react.createElement("path", {
                          fill: "currentColor",
                          d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z",
                        }),
                  ),
                ),
              ),
            );
          }),
          Input1 = react.forwardRef(function (props, ref) {
            return react.createElement(
              InputWrapper,
              {
                label: props.label,
                id: props.id,
                hasError: props.hasError,
                style: props.wrapperStyle,
                className: props.labelClassName,
              },
              react.createElement("input", {
                type: props.type || "text",
                id: props.id,
                ref: props.inputRef,
                "data-testid": "INPT",
                autoFocus: (null == props ? void 0 : props.isAutoFocus) || !1,
                name: props.name,
                style: props.style,
                defaultValue: props.defaultValue,
                placeholder: props.placeholder,
                required: props.required || !1,
                disabled: props.disabled || !1,
                autoComplete: "given-name",
                maxLength: props.maxLength,
                value: props.value,
                onChange: function (e) {
                  return props.onChange && props.onChange(e.target.value);
                },
                onKeyPress: function (e) {
                  return (function (e) {
                    var key = e.key,
                      regex = props.pattern;
                    regex &&
                      !(null == regex ? void 0 : regex.test(key)) &&
                      e.preventDefault();
                  })(e);
                },
                className: ""
                  .concat(
                    props.className,
                    " leading-4 p-2  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ",
                  )
                  .concat(
                    props.hasError ? "border-red " : "border-gray-300",
                    " rounded-md dark:text-black",
                  ),
                onBlur: function (e) {
                  return props.onBlur && props.onBlur(e);
                },
                onKeyDown: props.onKeyDown,
              }),
            );
          }),
          Input2 = react.forwardRef(function (props, ref) {
            var _useState = _sliced_to_array((0, react.useState)(!0), 2),
              isBlur = _useState[0],
              setIsBlur = _useState[1];
            return react.createElement(
              InputWrapper,
              {
                label: props.label,
                id: props.id,
                hasError: props.hasError,
                style: props.wrapperStyle,
                className: props.labelClassName,
              },
              react.createElement("input", {
                type: props.type || "text",
                id: props.id,
                ref: props.inputRef,
                "data-testid": "INPT",
                autoFocus: (null == props ? void 0 : props.isAutoFocus) || !1,
                name: props.name,
                style: props.style,
                defaultValue: props.defaultValue,
                placeholder: props.placeholder,
                required: props.required || !1,
                disabled: props.disabled || !1,
                autoComplete: "given-name",
                maxLength: props.maxLength,
                value: props.value,
                onChange: function (e) {
                  setIsBlur(!0),
                    props.onChange && props.onChange(e.target.value);
                },
                onKeyPress: function (e) {
                  return (function (e) {
                    var key = e.key,
                      regex = props.pattern;
                    regex &&
                      !(null == regex ? void 0 : regex.test(key)) &&
                      e.preventDefault();
                  })(e);
                },
                className: ""
                  .concat(
                    props.className,
                    " leading-4 p-2  focus:outline-none focus:ring  block w-full shadow-sm sm:text-base  border-2  ",
                  )
                  .concat(
                    props.hasError ? "border-red " : "border-gray-300",
                    " rounded-md dark:text-black",
                  ),
                onKeyDown: function (e) {
                  13 == e.keyCode &&
                    (setIsBlur(!1),
                    props.onBlur && props.onBlur(e.target.value)),
                    props.onKeyDown && props.onKeyDown(e);
                },
                onBlur: function (e) {
                  var value;
                  (value = e.target.value),
                    props.onBlur && isBlur && props.onBlur(value);
                },
              }),
            );
          }),
          MultilineInput = function (props) {
            return react.createElement(
              InputWrapper,
              { label: props.label, id: props.id, className: props.className },
              react.createElement("textarea", {
                id: props.id,
                autoComplete: "given-name",
                value: props.value,
                disabled: props.disabled,
                style: props.style,
                rows: props.rows,
                onKeyUp: props.onKeyUp && props.onKeyUp,
                placeholder: props.placeholder,
                onChange: function (e) {
                  return props.onChange && props.onChange(e.target.value);
                },
                onBlur: function (e) {
                  return props.onBlur && props.onBlur(e.target.value);
                },
                className:
                  "leading-4 p-2 focus:outline-none focus:ring block w-full shadow-sm sm:text-base border-2 ".concat(
                    props.hasError ? "border-red " : "border-gray-300",
                    " rounded-md dark:bg-boxdark",
                  ),
                defaultValue: props.defaultValue,
              }),
            );
          };
        (Label.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Label",
          props: {
            htmlFor: {
              required: !0,
              tsType: { name: "string" },
              description: "",
            },
            hasError: {
              required: !1,
              tsType: { name: "boolean" },
              description: "",
            },
            style: { required: !1, tsType: { name: "any" }, description: "" },
            children: {
              required: !1,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        }),
          (InputWrapper.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "InputWrapper",
            props: {
              id: { required: !1, tsType: { name: "string" }, description: "" },
              label: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              className: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              hasError: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              style: { required: !1, tsType: { name: "any" }, description: "" },
              ref: { required: !1, tsType: { name: "any" }, description: "" },
              children: {
                required: !1,
                tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                description: "",
              },
            },
          }),
          (Input.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "Input",
            props: {
              id: { required: !1, tsType: { name: "string" }, description: "" },
              label: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              className: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              hasError: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              style: { required: !1, tsType: { name: "any" }, description: "" },
              ref: { required: !1, tsType: { name: "any" }, description: "" },
              children: {
                required: !1,
                tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                description: "",
              },
              value: { required: !1, tsType: { name: "any" }, description: "" },
              defaultValue: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              name: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              placeholder: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              type: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              required: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              disabled: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              labelClassName: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              rows: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              wrapperStyle: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              pattern: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              maxLength: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              isAutoFocus: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              input2isBlurEnable: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              onChange: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onBlur: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyDown: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyUp: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              inputRef: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
            },
          }),
          (InputPassword.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "InputPassword",
            props: {
              id: { required: !1, tsType: { name: "string" }, description: "" },
              label: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              className: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              hasError: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              style: { required: !1, tsType: { name: "any" }, description: "" },
              ref: { required: !1, tsType: { name: "any" }, description: "" },
              children: {
                required: !1,
                tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                description: "",
              },
              value: { required: !1, tsType: { name: "any" }, description: "" },
              defaultValue: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              name: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              placeholder: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              type: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              required: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              disabled: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              labelClassName: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              rows: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              wrapperStyle: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              pattern: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              maxLength: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              isAutoFocus: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              input2isBlurEnable: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              onChange: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onBlur: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyDown: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyUp: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              inputRef: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
            },
          }),
          (Input1.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "Input1",
            props: {
              id: { required: !1, tsType: { name: "string" }, description: "" },
              label: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              className: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              hasError: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              style: { required: !1, tsType: { name: "any" }, description: "" },
              ref: { required: !1, tsType: { name: "any" }, description: "" },
              children: {
                required: !1,
                tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                description: "",
              },
              value: { required: !1, tsType: { name: "any" }, description: "" },
              defaultValue: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              name: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              placeholder: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              type: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              required: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              disabled: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              labelClassName: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              rows: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              wrapperStyle: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              pattern: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              maxLength: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              isAutoFocus: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              input2isBlurEnable: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              onChange: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onBlur: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyDown: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyUp: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              inputRef: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
            },
          }),
          (Input2.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "Input2",
            props: {
              id: { required: !1, tsType: { name: "string" }, description: "" },
              label: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              className: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              hasError: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              style: { required: !1, tsType: { name: "any" }, description: "" },
              ref: { required: !1, tsType: { name: "any" }, description: "" },
              children: {
                required: !1,
                tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                description: "",
              },
              value: { required: !1, tsType: { name: "any" }, description: "" },
              defaultValue: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              name: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              placeholder: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              type: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              required: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              disabled: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              labelClassName: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              rows: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              wrapperStyle: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              pattern: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              maxLength: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              isAutoFocus: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              input2isBlurEnable: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              onChange: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onBlur: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyDown: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyUp: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              inputRef: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
            },
          }),
          (MultilineInput.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "MultilineInput",
            props: {
              id: { required: !1, tsType: { name: "string" }, description: "" },
              label: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              className: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              hasError: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              style: { required: !1, tsType: { name: "any" }, description: "" },
              ref: { required: !1, tsType: { name: "any" }, description: "" },
              children: {
                required: !1,
                tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
                description: "",
              },
              value: { required: !1, tsType: { name: "any" }, description: "" },
              defaultValue: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              name: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              placeholder: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              type: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              required: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              disabled: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              labelClassName: {
                required: !1,
                tsType: { name: "string" },
                description: "",
              },
              rows: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              wrapperStyle: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              pattern: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
              maxLength: {
                required: !1,
                tsType: { name: "number" },
                description: "",
              },
              isAutoFocus: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              input2isBlurEnable: {
                required: !1,
                tsType: { name: "boolean" },
                description: "",
              },
              onChange: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onBlur: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyDown: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              onKeyUp: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "(e: any) => void",
                  signature: {
                    arguments: [{ type: { name: "any" }, name: "e" }],
                    return: { name: "void" },
                  },
                },
                description: "",
              },
              inputRef: {
                required: !1,
                tsType: { name: "any" },
                description: "",
              },
            },
          });
        function css_multiline_input_component_array_like_to_array(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function css_multiline_input_component_define_property(
          obj,
          key,
          value,
        ) {
          return (
            key in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          );
        }
        function css_multiline_input_component_object_spread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {},
              ownKeys = Object.keys(source);
            "function" == typeof Object.getOwnPropertySymbols &&
              (ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(source, sym)
                    .enumerable;
                }),
              )),
              ownKeys.forEach(function (key) {
                css_multiline_input_component_define_property(
                  target,
                  key,
                  source[key],
                );
              });
          }
          return target;
        }
        function css_multiline_input_component_sliced_to_array(arr, i) {
          return (
            (function css_multiline_input_component_array_with_holes(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function css_multiline_input_component_iterable_to_array_limit(
              arr,
              i,
            ) {
              var _i =
                null == arr
                  ? null
                  : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                    arr["@@iterator"];
              if (null != _i) {
                var _s,
                  _e,
                  _arr = [],
                  _n = !0,
                  _d = !1;
                try {
                  for (
                    _i = _i.call(arr);
                    !(_n = (_s = _i.next()).done) &&
                    (_arr.push(_s.value), !i || _arr.length !== i);
                    _n = !0
                  );
                } catch (err) {
                  (_d = !0), (_e = err);
                } finally {
                  try {
                    _n || null == _i.return || _i.return();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
            })(arr, i) ||
            (function css_multiline_input_component_unsupported_iterable_to_array(
              o,
              minLen,
            ) {
              if (!o) return;
              if ("string" == typeof o)
                return css_multiline_input_component_array_like_to_array(
                  o,
                  minLen,
                );
              var n = Object.prototype.toString.call(o).slice(8, -1);
              "Object" === n && o.constructor && (n = o.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(n);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return css_multiline_input_component_array_like_to_array(
                  o,
                  minLen,
                );
            })(arr, i) ||
            (function css_multiline_input_component_non_iterable_rest() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        var res,
          data =
            ((res = []),
            [
              {
                alignContent: [
                  "flex-start",
                  "flex-end",
                  "center",
                  "stretch",
                  "space-between",
                  "space-around",
                ],
              },
              {
                alignItems: [
                  "flex-start",
                  "flex-end",
                  "center",
                  "stretch",
                  "baseline",
                ],
              },
              {
                alignSelf: [
                  "auto",
                  "flex-start",
                  "flex-end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
              { flex: ["number", "string"] },
              {
                flexDirection: [
                  "row",
                  "row-reverse",
                  "column",
                  "column-reverse",
                ],
              },
              { flexWrap: ["nowrap", "wrap", "wrap-reverse"] },
              { flexFlow: ["number"] },
              { flexGrow: ["number"] },
              { flexShrink: ["number"] },
              { flexBasis: ["number", "string"] },
              {
                justifyContent: [
                  ,
                  "flex-start",
                  "flex-end",
                  "center",
                  "space-around",
                  "space-between",
                  "space-evenly",
                ],
              },
              { gap: ["number", "string"] },
              { rowGap: ["number"] },
              { columnGap: ["number"] },
              { aspectRatio: ["number", "string"] },
              { bottom: ["number", "string"] },
              { display: ["flex", "none"] },
              { left: ["number", "string"] },
              { position: ["absolute", "relative"] },
              { right: ["number", "string"] },
              { top: ["number", "string"] },
              { overflow: ["hidden"] },
              { zIndex: ["number", "string"] },
              { height: ["number", "string"] },
              { maxHeight: ["number", "string"] },
              { maxWidth: ["number", "string"] },
              { minHeight: ["number", "string"] },
              { minWidth: ["number", "string"] },
              { width: ["number", "string"] },
              { backgroundColor: ["string"] },
              { color: ["string"] },
              { opacity: ["number"] },
              { fontSize: ["number", "string"] },
              { fontFamily: ["string"] },
              { fontStyle: ["string", "normal"] },
              {
                fontWeight: [
                  ,
                  "number",
                  "thin",
                  "hairline",
                  "ultralight",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "demibold",
                  "bold",
                  "ultrabold",
                  "extrabold",
                  "heavy",
                  "black",
                ],
              },
              { letterSpacing: ["number", "string"] },
              { lineHeight: ["number", "string"] },
              { maxLines: ["number"] },
              { textAlign: ["left", "right", "center", "justify"] },
              {
                textDecoration: [
                  ,
                  "line-through",
                  "underline",
                  "none",
                  "line-through underline",
                  "underline line-through",
                ],
              },
              { textDecorationColor: ["string"] },
              { textDecorationStyle: ["dashed", "dotted", "solid", "string"] },
              { textIndent: ["any"] },
              { textOverflow: ["ellipsis"] },
              { textTransform: ["capitalize", "lowercase", "uppercase"] },
              { verticalAlign: ["sub", "super"] },
              { objectFit: ["string"] },
              { objectPosition: ["number", "string"] },
              { objectPositionX: ["number", "string"] },
              { objectPositionY: ["number", "string"] },
              { margin: ["number", "string"] },
              { marginHorizontal: ["number", "string"] },
              { marginVertical: ["number", "string"] },
              { marginTop: ["number", "string"] },
              { marginRight: ["number", "string"] },
              { marginBottom: ["number", "string"] },
              { marginLeft: ["number", "string"] },
              { padding: ["number", "string"] },
              { paddingHorizontal: ["number", "string"] },
              { paddingVertical: ["number", "string"] },
              { paddingTop: ["number", "string"] },
              { paddingRight: ["number", "string"] },
              { paddingBottom: ["number", "string"] },
              { paddingLeft: ["number", "string"] },
              { transform: ["string"] },
              { transformOrigin: ["number", "string"] },
              { transformOriginX: ["number", "string"] },
              { transformOriginY: ["number", "string"] },
              { border: ["number", "string"] },
              { borderWidth: ["number", "string"] },
              { borderColor: ["string"] },
              { borderStyle: ["dashed", "dotted", "solid"] },
              { borderTop: ["number", "string"] },
              { borderTopColor: ["string"] },
              { borderTopStyle: ["dashed", "dotted", "solid"] },
              { borderTopWidth: ["number", "string"] },
              { borderRight: ["number", "string"] },
              { borderRightColor: ["string"] },
              { borderRightStyle: ["dashed", "dotted", "solid"] },
              { borderRightWidth: ["number", "string"] },
              { borderBottom: ["number", "string"] },
              { borderBottomColor: ["string"] },
              { borderBottomStyle: ["dashed", "dotted", "solid"] },
              { borderBottomWidth: ["number", "string"] },
              { borderLeft: ["number", "string"] },
              { borderLeftColor: ["string"] },
              { borderLeftStyle: ["dashed", "dotted", "solid"] },
              { borderLeftWidth: ["number", "string"] },
              { borderTopLeftRadius: ["number", "string"] },
              { borderTopRightRadius: ["number", "string"] },
              { borderBottomRightRadius: ["number", "string"] },
              { borderBottomLeftRadius: ["number", "string"] },
              { borderRadius: ["number", "string"] },
            ].forEach(function (obj, index) {
              var key = Object.keys(obj)[0],
                value = key;
              res.push([value, obj[key]]);
            }),
            res),
          CSSMultiline = function (param) {
            var _param_label = param.label,
              label = void 0 === _param_label ? "Main Box CSS" : _param_label,
              _param_defaultValue = param.defaultValue,
              defaultValue =
                void 0 === _param_defaultValue ? "" : _param_defaultValue,
              _param_className = param.className,
              className = void 0 === _param_className ? "" : _param_className,
              _param_style = param.style,
              style = void 0 === _param_style ? {} : _param_style,
              _param_placeholder = param.placeholder,
              placeholder =
                void 0 === _param_placeholder
                  ? "Like fontSize: 12,backgroundColor:'#000000',"
                  : _param_placeholder,
              onChange = param.onChange,
              value = (0, react.useRef)(""),
              _useState = css_multiline_input_component_sliced_to_array(
                (0, react.useState)([]),
                2,
              ),
              properties = _useState[0],
              setProperties = _useState[1],
              _useState1 = css_multiline_input_component_sliced_to_array(
                (0, react.useState)(!1),
                2,
              ),
              isListOpen = _useState1[0],
              setIsListOpen = _useState1[1];
            (0, react.useEffect)(
              function () {
                (value.current = defaultValue), setProperties(data);
              },
              [defaultValue],
            );
            var ref,
              wrapperRef = (0, react.useRef)(null);
            (ref = wrapperRef),
              (0, react.useEffect)(
                function () {
                  var handleClickOutside = function handleClickOutside(event) {
                    ref.current &&
                      !ref.current.contains(event.target) &&
                      (setIsListOpen(!1), onChange(value.current));
                  };
                  return (
                    document.addEventListener("mousedown", handleClickOutside),
                    function () {
                      document.removeEventListener(
                        "mousedown",
                        handleClickOutside,
                      );
                    }
                  );
                },
                [ref],
              );
            var list = [],
              filter = function (css) {
                var matchString = null == css ? void 0 : css.split(",");
                if (
                  ((matchString =
                    null ==
                    (matchString =
                      null ==
                      (matchString =
                        matchString[
                          (null == matchString ? void 0 : matchString.length) -
                            1
                        ])
                        ? void 0
                        : matchString.split(":")[0])
                      ? void 0
                      : matchString.split("'")[0]),
                  0 == (null == css ? void 0 : css.length))
                )
                  return setProperties(data);
                null == data ||
                  data.map(function (item) {
                    var _item_,
                      innerItem = [];
                    (null === (_item_ = item[0]) || void 0 === _item_
                      ? void 0
                      : _item_.startsWith(matchString)) &&
                      innerItem.push(item[0]),
                      (null == innerItem ? void 0 : innerItem.length) > 0 &&
                        list.push([item[0], item[1]]);
                  }),
                  setProperties(list);
              };
            return react.createElement(
              "div",
              { className: "flex flex-col w-full", ref: wrapperRef },
              react.createElement(MultilineInput, {
                label,
                style: css_multiline_input_component_object_spread(
                  { color: "#ffffff", backgroundColor: "#000000" },
                  style,
                ),
                placeholder,
                value: value.current,
                className,
                onKeyUp: function (e) {
                  setIsListOpen(!0);
                },
                onChange: function (css) {
                  (value.current = css), filter(css);
                },
              }),
              isListOpen &&
                react.createElement(
                  "div",
                  { style: { marginTop: -10 } },
                  react.createElement(
                    "ul",
                    {
                      className:
                        "flex flex-col max-h-40 bg-black  m-2 text-white  overflow-y-scroll  ",
                    },
                    null == properties
                      ? void 0
                      : properties.map(function (item, index) {
                          var _item_;
                          return react.createElement(
                            "li",
                            {
                              key: index,
                              className: "flex flex-col gap-4 p-2",
                            },
                            react.createElement(
                              "span",
                              { className: "underline" },
                              item[0],
                            ),
                            null === (_item_ = item[1]) || void 0 === _item_
                              ? void 0
                              : _item_.map(function (prop) {
                                  return react.createElement(
                                    "li",
                                    {
                                      className:
                                        "flex -mt-2 px-2 h-8 bg-slate-800  rounded-md items-center cursor-pointer",
                                      onClick: function () {
                                        var _value_current,
                                          existsString =
                                            null ===
                                              (_value_current =
                                                value.current) ||
                                            void 0 === _value_current
                                              ? void 0
                                              : _value_current.split(",");
                                        value.current.includes(",")
                                          ? ((existsString = existsString.map(
                                              function (item) {
                                                if (
                                                  null == item
                                                    ? void 0
                                                    : item.includes(":")
                                                )
                                                  return item;
                                              },
                                            )),
                                            "number" != prop
                                              ? existsString.push(
                                                  ""
                                                    .concat(item[0], ":'")
                                                    .concat(prop, "',"),
                                                )
                                              : existsString.push(
                                                  "".concat(item[0], ":1,"),
                                                ),
                                            (value.current = existsString
                                              .join(",")
                                              .replaceAll(",,", ",")))
                                          : (value.current =
                                              "number" != prop
                                                ? ""
                                                    .concat(item[0], ":'")
                                                    .concat(prop, "',")
                                                : "".concat(item[0], ":1,")),
                                          filter(existsString.join(""));
                                      },
                                    },
                                    " ",
                                    prop,
                                    " ",
                                  );
                                }),
                          );
                        }),
                  ),
                ),
            );
          };
        CSSMultiline.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CSSMultiline",
          props: {
            label: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: { value: "'Main Box CSS'", computed: !1 },
            },
            defaultValue: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: { value: "''", computed: !1 },
            },
            placeholder: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: {
                value: "\"Like fontSize: 12,backgroundColor:'#000000',\"",
                computed: !1,
              },
            },
            className: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: { value: "''", computed: !1 },
            },
            style: {
              required: !1,
              tsType: { name: "any" },
              description: "",
              defaultValue: { value: "{}", computed: !1 },
            },
          },
        };
        const css_multiline_input_stories = {
          title: "Design System/Molecules/CSSMultiline",
          component: CSSMultiline,
          tags: ["autodocs"],
        };
        var Primary = { args: {} };
        Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...Primary.parameters?.docs,
            source: {
              originalSource: "{\n  args: {}\n}",
              ...Primary.parameters?.docs?.source,
            },
          },
        };
        const __namedExportsOrder = ["Primary"];
      },
    "./node_modules/classnames/index.js": (module, exports) => {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      !(function () {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          for (var classes = "", i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            arg && (classes = appendClass(classes, parseValue(arg)));
          }
          return classes;
        }
        function parseValue(arg) {
          if ("string" == typeof arg || "number" == typeof arg) return arg;
          if ("object" != typeof arg) return "";
          if (Array.isArray(arg)) return classNames.apply(null, arg);
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes("[native code]")
          )
            return arg.toString();
          var classes = "";
          for (var key in arg)
            hasOwn.call(arg, key) &&
              arg[key] &&
              (classes = appendClass(classes, key));
          return classes;
        }
        function appendClass(value, newClass) {
          return newClass
            ? value
              ? value + " " + newClass
              : value + newClass
            : value;
        }
        module.exports
          ? ((classNames.default = classNames), (module.exports = classNames))
          : void 0 ===
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return classNames;
              }.apply(exports, [])) ||
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
      })();
    },
  },
]);
