"use strict";
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [0],
  {
    "./src/core-components/atoms/input-dropdown/input-dropdown.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => input_dropdown_stories,
        });
      var _path,
        react = __webpack_require__("./node_modules/react/index.js");
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      const UpArrow = (props) =>
        react.createElement(
          "svg",
          _extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              stroke: "#E7503E",
              viewBox: "0 -6 20 20",
            },
            props,
          ),
          _path ||
            (_path = react.createElement("path", {
              d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
            })),
        );
      var DownArrow_path;
      function DownArrow_extends() {
        return (
          (DownArrow_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          DownArrow_extends.apply(null, arguments)
        );
      }
      const DownArrow = (props) =>
        react.createElement(
          "svg",
          DownArrow_extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              stroke: "#E7503E",
              viewBox: "0 -6 20 20",
            },
            props,
          ),
          DownArrow_path ||
            (DownArrow_path = react.createElement("path", {
              d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z",
            })),
        );
      function _array_like_to_array(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
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
      var InputDropdown = function (param) {
        var ref,
          items = param.items,
          className = param.className,
          hasError = param.hasError,
          title = param.title,
          onChange = param.onChange,
          _useState = _sliced_to_array((0, react.useState)(!1), 2),
          isOpen = _useState[0],
          setIsOpen = _useState[1],
          _useState1 = _sliced_to_array((0, react.useState)(""), 2),
          value = _useState1[0],
          setValue = _useState1[1],
          wrapperRef = (0, react.useRef)(null);
        return (
          (ref = wrapperRef),
          (0, react.useEffect)(
            function () {
              var handleClickOutside = function handleClickOutside(event) {
                ref.current &&
                  !ref.current.contains(event.target) &&
                  isOpen &&
                  isOpen &&
                  setIsOpen(!isOpen);
              };
              return (
                document.addEventListener("mousedown", handleClickOutside),
                function () {
                  document.removeEventListener("mousedown", handleClickOutside);
                }
              );
            },
            [ref],
          ),
          react.createElement(
            "div",
            { className: "".concat(className, " relative") },
            react.createElement(
              "div",
              { className: "flex flex-row items-center " },
              react.createElement("input", {
                type: "text",
                name: "name",
                placeholder: title,
                value,
                className:
                  " pt-3 pb-2  w-full px-0 mt-0 bg-transparent border-gray-secondary border-0 border-b appearance-none focus:outline-none focus:ring-0 font-nunitoSansRegular text-md",
                onClick: function () {
                  setIsOpen(!isOpen);
                },
                onChange: function (event) {
                  return onChange && onChange(event.target.value);
                },
              }),
              !isOpen &&
                react.createElement("img", {
                  src: UpArrow,
                  className: "absolute h-4 w-4 right-0",
                }),
              isOpen &&
                react.createElement("img", {
                  src: DownArrow,
                  className: "absolute h-4 w-4 right-0",
                }),
            ),
            isOpen &&
              react.createElement(
                "div",
                {
                  className:
                    "z-10  w-full absolute text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700",
                  ref: wrapperRef,
                },
                react.createElement(
                  "ul",
                  { className: "py-1" },
                  items.map(function (item, index) {
                    return react.createElement(
                      "li",
                      {
                        key: index,
                        className:
                          "block py-2 px-4 text-md  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200   font-nunitoSansRegular",
                        onClick: function () {
                          setValue(item), setIsOpen(!isOpen);
                        },
                      },
                      item,
                    );
                  }),
                ),
              ),
            hasError &&
              react.createElement(
                "span",
                { className: "text-primaryCharcoal text-4xs", id: "error" },
                "".concat(title, " is required"),
              ),
          )
        );
      };
      InputDropdown.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "InputDropdown",
        props: {
          title: { required: !0, tsType: { name: "string" }, description: "" },
          items: {
            required: !0,
            tsType: {
              name: "Array",
              elements: [{ name: "string" }],
              raw: "Array<string>",
            },
            description: "",
          },
          hasError: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          className: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          onChange: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(item: string) => void",
              signature: {
                arguments: [{ type: { name: "string" }, name: "item" }],
                return: { name: "void" },
              },
            },
            description: "",
          },
        },
      };
      const input_dropdown_stories = {
        title: "Design System/Atoms/InputDropdown",
        component: InputDropdown,
        tags: ["autodocs"],
        parameters: {
          componentSubtitle:
            "import { InputDropdown } from 'react-restyle-components'",
        },
      };
      var Primary = {
        args: {
          title: "Source of funds",
          items: ["Bank account", "UPI", "Credit Card"],
          hasError: !0,
        },
      };
      Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    title: 'Source of funds',\n    items: ['Bank account', 'UPI', 'Credit Card'],\n    hasError: true\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Primary"];
    },
  },
]);