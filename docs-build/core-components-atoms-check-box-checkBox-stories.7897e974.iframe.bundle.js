/*! For license information please see core-components-atoms-check-box-checkBox-stories.7897e974.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [741],
  {
    "./src/core-components/atoms/check-box/checkBox.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary1: () => Primary1,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => checkBox_stories,
        });
      var _path,
        _g,
        _defs,
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
      const checkedBox = (props) =>
        react.createElement(
          "svg",
          _extends({ width: 15, height: 15, fill: "none" }, props),
          _path ||
            (_path = react.createElement("path", {
              fill: "#E5E5E5",
              d: "M0 0h15v15H0z",
            })),
          _g ||
            (_g = react.createElement(
              "g",
              { clipPath: "url(#checkedBox_svg__a)" },
              react.createElement("path", {
                fill: "#fff",
                d: "M-20-399h360v640H-20z",
              }),
              react.createElement("rect", {
                width: 14,
                height: 14,
                x: 0.5,
                y: 0.5,
                fill: "#fff",
                rx: 1.5,
              }),
              react.createElement("rect", {
                width: 14,
                height: 14,
                x: 0.5,
                y: 0.5,
                rx: 1.5,
              }),
              react.createElement("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4 7.333 6.333 10l5.334-5",
              }),
            )),
          _defs ||
            (_defs = react.createElement(
              "defs",
              null,
              react.createElement(
                "clipPath",
                { id: "checkedBox_svg__a" },
                react.createElement("path", {
                  fill: "#fff",
                  d: "M-20-399h360v640H-20z",
                }),
              ),
            )),
        );
      var _rect;
      function unCheckbox_extends() {
        return (
          (unCheckbox_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          unCheckbox_extends.apply(null, arguments)
        );
      }
      const unCheckbox = (props) =>
        react.createElement(
          "svg",
          unCheckbox_extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 15,
              height: 15,
              fill: "none",
            },
            props,
          ),
          _rect ||
            (_rect = react.createElement("rect", {
              width: 14,
              height: 14,
              x: 0.5,
              y: 0.5,
              fill: "#fff",
              stroke: "#E7503D",
              rx: 1.5,
            })),
        );
      var form_component = __webpack_require__(
        "./src/core-components/atoms/form/form.component.tsx",
      );
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
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              _define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function _object_spread_props(target, source) {
        return (
          (source = null != source ? source : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : (function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                  var symbols = Object.getOwnPropertySymbols(object);
                  enumerableOnly &&
                    (symbols = symbols.filter(function (sym) {
                      return Object.getOwnPropertyDescriptor(object, sym)
                        .enumerable;
                    })),
                    keys.push.apply(keys, symbols);
                }
                return keys;
              })(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              }),
          target
        );
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
      var CheckBox = function (param) {
        var _param_title = param.title,
          title = void 0 === _param_title ? "Banks" : _param_title,
          _param_data = param.data,
          data =
            void 0 === _param_data
              ? [{ title: "SBI Bank", checked: !1 }]
              : _param_data,
          className = param.className,
          onChange = param.onChange,
          _useState = _sliced_to_array((0, react.useState)(data), 2),
          list = _useState[0],
          setList = _useState[1];
        return react.createElement(
          form_component.oi,
          { label: title },
          null == list
            ? void 0
            : list.map(function (item, index) {
                return react.createElement(
                  "div",
                  {
                    className: "".concat(
                      className,
                      " flex flex-row  items-center ",
                    ),
                    onClick: function () {
                      var result =
                        null == list
                          ? void 0
                          : list.map(function (e, i) {
                              return i == index
                                ? _object_spread_props(_object_spread({}, e), {
                                    checked: !item.checked,
                                  })
                                : _object_spread({}, e);
                            });
                      setList(result),
                        onChange(
                          null == result
                            ? void 0
                            : result.filter(function (item) {
                                return item.checked;
                              }),
                        );
                    },
                    key: index,
                  },
                  react.createElement(
                    "div",
                    { className: "flex mt-1" },
                    item.checked
                      ? react.createElement(checkedBox, {
                          width: 20,
                          height: 20,
                          fill: "#E7503D",
                          stroke: "E7503D",
                        })
                      : react.createElement(unCheckbox, {
                          width: 20,
                          height: 20,
                        }),
                  ),
                  react.createElement(
                    "span",
                    null,
                    null == item ? void 0 : item.title,
                  ),
                );
              }),
        );
      };
      CheckBox.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "CheckBox",
        props: {
          title: {
            required: !1,
            tsType: { name: "string" },
            description: "",
            defaultValue: { value: "'Banks'", computed: !1 },
          },
          data: {
            required: !1,
            tsType: {
              name: "Array",
              elements: [{ name: "any" }],
              raw: "Array<any>",
            },
            description: "",
            defaultValue: {
              value: "[{title: 'SBI Bank', checked: false}]",
              computed: !1,
            },
          },
          className: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          disable: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          onChange: {
            required: !0,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(items: any) => void",
              signature: {
                arguments: [{ type: { name: "any" }, name: "items" }],
                return: { name: "void" },
              },
            },
            description: "",
          },
        },
      };
      const checkBox_stories = {
        title: "Design System/Atoms/CheckBox",
        component: CheckBox,
        tags: ["autodocs"],
        parameters: {
          componentSubtitle:
            "import { CheckBox } from 'react-restyle-components'",
        },
      };
      var Primary1 = {
        args: {
          title: "Banks",
          data: [
            { title: "SBI Bank", checked: !1 },
            { title: "ICICI Bank", checked: !1 },
          ],
          disable: !1,
          onChange: function (item) {
            console.log({ item });
          },
        },
      };
      Primary1.parameters = {
        ...Primary1.parameters,
        docs: {
          ...Primary1.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    title: 'Banks',\n    data: [{\n      title: 'SBI Bank',\n      checked: false\n    }, {\n      title: 'ICICI Bank',\n      checked: false\n    }],\n    disable: false,\n    onChange: item => {\n      console.log({\n        item\n      });\n    }\n  }\n}",
            ...Primary1.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Primary1"];
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
