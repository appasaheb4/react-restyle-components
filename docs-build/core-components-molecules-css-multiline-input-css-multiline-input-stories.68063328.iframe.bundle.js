/*! For license information please see core-components-molecules-css-multiline-input-css-multiline-input-stories.68063328.iframe.bundle.js.LICENSE.txt */
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
        var react = __webpack_require__("./node_modules/react/index.js"),
          form_component = __webpack_require__(
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
              _useState = _sliced_to_array((0, react.useState)([]), 2),
              properties = _useState[0],
              setProperties = _useState[1],
              _useState1 = _sliced_to_array((0, react.useState)(!1), 2),
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
              react.createElement(form_component.C, {
                label,
                style: _object_spread(
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
          parameters: {
            componentSubtitle:
              "import { CSSMultiline } from 'react-restyle-components'",
          },
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