"use strict";
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [157],
  {
    "./src/core-components/molecules/auto-complete-filter-single-select-multiple-fields-display/auto-complete-filter-single-select-multiple-fields-display.stories.tsx":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Primary: () => Primary,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () =>
              auto_complete_filter_single_select_multiple_fields_display_stories,
          });
        var react = __webpack_require__("./node_modules/react/index.js"),
          icons_component = __webpack_require__(
            "./src/core-components/atoms/icons/icons.component.tsx",
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
        var AutoCompleteFilterSingleSelectMultiFieldsDisplay = function (
          param,
        ) {
          var ref,
            _param_disable = param.disable,
            disable = void 0 !== _param_disable && _param_disable,
            _param_displayValue = (param.loader, param.displayValue),
            displayValue =
              void 0 === _param_displayValue ? "" : _param_displayValue,
            _param_placeholder = param.placeholder,
            placeholder =
              void 0 === _param_placeholder ? "Search..." : _param_placeholder,
            data = param.data,
            _param_hasError = param.hasError,
            hasError = void 0 !== _param_hasError && _param_hasError,
            className = param.className,
            onFilter = (param.posstion, param.onFilter),
            onSelect = param.onSelect,
            onBlur = param.onBlur,
            _useState = _sliced_to_array((0, react.useState)(displayValue), 2),
            value = _useState[0],
            setValue = _useState[1],
            _useState1 = _sliced_to_array((0, react.useState)(data.list), 2),
            options = _useState1[0],
            setOptions = _useState1[1],
            _useState2 = _sliced_to_array((0, react.useState)(!1), 2),
            isListOpen = _useState2[0],
            setIsListOpen = _useState2[1],
            _useState3 = _sliced_to_array((0, react.useState)(), 2),
            setFilterValue = (_useState3[0], _useState3[1]),
            wrapperRef = (0, react.useRef)(null);
          (ref = wrapperRef),
            (0, react.useEffect)(
              function () {
                var handleClickOutside = function handleClickOutside(event) {
                  ref.current &&
                    !ref.current.contains(event.target) &&
                    isListOpen &&
                    setIsListOpen(!1);
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
              [ref, isListOpen],
            ),
            (0, react.useEffect)(
              function () {
                setOptions(data.list);
              },
              [data],
            ),
            (0, react.useEffect)(
              function () {
                setValue(displayValue);
              },
              [displayValue],
            );
          return react.createElement(
            react.Fragment,
            null,
            react.createElement(
              "div",
              { ref: wrapperRef, className: "w-full relative" },
              react.createElement(
                "div",
                {
                  className:
                    "flex items-center leading-4 p-2 focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2 ".concat(
                      hasError ? "border-red" : "border-gray-300",
                      " rounded-md dark:text-black",
                    ),
                },
                react.createElement("input", {
                  placeholder,
                  value,
                  className: "".concat(
                    className,
                    " w-full focus:outline-none bg-none dark:text-black",
                  ),
                  onKeyUp: function (e) {
                    if (8 === (e.which ? e.which : e.keyCode)) {
                      var search = e.target.value;
                      onFilter && onFilter(search);
                    }
                  },
                  onChange: function (e) {
                    var _e_target_value,
                      search =
                        null === (_e_target_value = e.target.value) ||
                        void 0 === _e_target_value
                          ? void 0
                          : _e_target_value.toUpperCase();
                    setValue(search),
                      setFilterValue(search),
                      onFilter && onFilter(search);
                  },
                  onClick: function () {
                    return setIsListOpen(!0);
                  },
                  disabled: disable,
                  onMouseDown: function () {
                    return setValue("");
                  },
                  onBlur: function (e) {
                    return onBlur && onBlur(e);
                  },
                  onKeyDown: function (e) {
                    if (
                      ("Enter" === e.key || "Tab" === e.key) &&
                      options.length > 0
                    ) {
                      var selectedItem = options.find(function (item) {
                        return item.labId === Number(value);
                      });
                      selectedItem &&
                        (setValue(
                          data.displayKey
                            .map(function (key) {
                              return "".concat(selectedItem[key]);
                            })
                            .join(" - "),
                        ),
                        setIsListOpen(!1),
                        onSelect && onSelect(selectedItem));
                    }
                  },
                }),
                isListOpen
                  ? react.createElement(icons_component.I, {
                      nameIcon: "FaChevronUp",
                      propsIcon: { color: "#000000", size: 22 },
                    })
                  : react.createElement(icons_component.I, {
                      nameIcon: "FaChevronDown",
                      propsIcon: { color: "#000000", size: 22 },
                    }),
              ),
              options && isListOpen
                ? options.length > 0 &&
                    react.createElement(
                      "div",
                      {
                        className:
                          "mt-1 absolute  w-full bg-gray-100 p-2 rounded-sm ",
                        style: { zIndex: 500 },
                      },
                      react.createElement(
                        "ul",
                        null,
                        null == options
                          ? void 0
                          : options.map(function (item, index) {
                              return react.createElement(
                                "li",
                                {
                                  key: index,
                                  className: "text-gray-400 flex items-center",
                                  onClick: function () {
                                    setValue(
                                      data.displayKey
                                        .map(function (key) {
                                          return "".concat(item[key]);
                                        })
                                        .join(" - "),
                                    ),
                                      setIsListOpen(!1),
                                      onSelect && onSelect(item);
                                  },
                                },
                                " ",
                                react.createElement(
                                  "label",
                                  {
                                    className: "ml-2 mt-1 text-black",
                                    style: {
                                      textOverflow: "ellipsis",
                                      minWidth: 0,
                                      overflow: "hidden",
                                      maxWidth: "334px",
                                      whiteSpace: "nowrap",
                                    },
                                    title: data.displayKey
                                      .map(function (key) {
                                        return item[key];
                                      })
                                      .join(" - "),
                                  },
                                  data.displayKey
                                    .map(function (key) {
                                      return "".concat(
                                        item[key],
                                        "\n                              ",
                                      );
                                    })
                                    .join(" - "),
                                ),
                              );
                            }),
                      ),
                    )
                : null,
            ),
          );
        };
        AutoCompleteFilterSingleSelectMultiFieldsDisplay.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AutoCompleteFilterSingleSelectMultiFieldsDisplay",
          props: {
            loader: {
              required: !1,
              tsType: { name: "boolean" },
              description: "",
              defaultValue: { value: "false", computed: !1 },
            },
            disable: {
              required: !1,
              tsType: { name: "boolean" },
              description: "",
              defaultValue: { value: "false", computed: !1 },
            },
            displayValue: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: { value: "''", computed: !1 },
            },
            placeholder: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: { value: "'Search...'", computed: !1 },
            },
            data: { required: !0, tsType: { name: "any" }, description: "" },
            hasError: {
              required: !1,
              tsType: { name: "boolean" },
              description: "",
              defaultValue: { value: "false", computed: !1 },
            },
            className: {
              required: !1,
              tsType: { name: "string" },
              description: "",
            },
            posstion: {
              required: !1,
              tsType: { name: "string" },
              description: "",
              defaultValue: { value: "'absolute'", computed: !1 },
            },
            onFilter: {
              required: !1,
              tsType: {
                name: "signature",
                type: "function",
                raw: "(item: any) => void",
                signature: {
                  arguments: [{ type: { name: "any" }, name: "item" }],
                  return: { name: "void" },
                },
              },
              description: "",
            },
            onSelect: {
              required: !1,
              tsType: {
                name: "signature",
                type: "function",
                raw: "(item: any) => any",
                signature: {
                  arguments: [{ type: { name: "any" }, name: "item" }],
                  return: { name: "any" },
                },
              },
              description: "",
            },
            onBlur: {
              required: !1,
              tsType: {
                name: "signature",
                type: "function",
                raw: "(item: any) => any",
                signature: {
                  arguments: [{ type: { name: "any" }, name: "item" }],
                  return: { name: "any" },
                },
              },
              description: "",
            },
          },
        };
        const auto_complete_filter_single_select_multiple_fields_display_stories =
          {
            title:
              "Design System/Molecules/AutoCompleteFilterSingleSelectMultiFieldsDisplay",
            component: AutoCompleteFilterSingleSelectMultiFieldsDisplay,
            tags: ["autodocs"],
            parameters: {
              componentSubtitle:
                "import { AutoCompleteFilterSingleSelectMultiFieldsDisplay } from 'react-restyle-components'",
            },
          };
        var Primary = {
          args: {
            data: {
              list: [
                { code: "Code1", name: "Value1" },
                { code: "Code2", name: "Value2" },
                { code: "Code3", name: "Value3" },
              ],
              displayKey: ["name"],
            },
            onSelect: function (item) {
              console.log({ item });
            },
          },
        };
        Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...Primary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: {\n      list: [{\n        code: 'Code1',\n        name: 'Value1'\n      }, {\n        code: 'Code2',\n        name: 'Value2'\n      }, {\n        code: 'Code3',\n        name: 'Value3'\n      }],\n      displayKey: ['name']\n    },\n    onSelect: item => {\n      console.log({\n        item\n      });\n    }\n  }\n}",
              ...Primary.parameters?.docs?.source,
            },
          },
        };
        const __namedExportsOrder = ["Primary"];
      },
    "./src/core-components/atoms/icons/icons.component.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { I: () => Icon });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/react/index.js",
      );
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
      var Icon = function (param) {
        var nameIcon = param.nameIcon,
          propsIcon = param.propsIcon,
          _param_isDisable = (param.tooltip, param.isDisable),
          isDisable = void 0 !== _param_isDisable && _param_isDisable,
          onClick = param.onClick;
        try {
          _object_spread_props(
            (function _object_spread(target) {
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
            })({}, propsIcon),
            {
              color: isDisable
                ? "#808080"
                : (null == propsIcon ? void 0 : propsIcon.color) || "#ffffff",
            },
          ),
            nameIcon
              .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
              .split(" ")[0]
              .toLocaleLowerCase();
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            onClick: function () {
              isDisable || (onClick && onClick());
            },
          });
        } catch (error) {
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            null,
          );
        }
      };
      Icon.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Icon",
        props: {
          nameIcon: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
          propsIcon: {
            required: !1,
            tsType: { name: "IconBaseProps" },
            description: "",
          },
          tooltip: {
            required: !1,
            tsType: { name: "string" },
            description: "",
            defaultValue: { value: "''", computed: !1 },
          },
          isDisable: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
            defaultValue: { value: "false", computed: !1 },
          },
          onClick: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "() => void",
              signature: { arguments: [], return: { name: "void" } },
            },
            description: "",
          },
        },
      };
    },
  },
]);