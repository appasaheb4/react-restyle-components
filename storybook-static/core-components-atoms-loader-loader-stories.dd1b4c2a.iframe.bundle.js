/*! For license information please see core-components-atoms-loader-loader-stories.dd1b4c2a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [570],
  {
    "./src/core-components/atoms/loader/loader.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => loader_stories,
        });
      var globalCssModule,
        react = __webpack_require__("./node_modules/react/index.js"),
        prop_types = __webpack_require__("./node_modules/prop-types/index.js"),
        prop_types_default = __webpack_require__.n(prop_types),
        classnames = __webpack_require__("./node_modules/classnames/index.js"),
        classnames_default = __webpack_require__.n(classnames);
      function _typeof(obj) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function mapToCssModules() {
        var className =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          cssModule =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : globalCssModule;
        return cssModule
          ? className
              .split(" ")
              .map(function (c) {
                return cssModule[c] || c;
              })
              .join(" ")
          : className;
      }
      var warned = {};
      var Element =
        ("object" ===
          ("undefined" == typeof window ? "undefined" : _typeof(window)) &&
          window.Element) ||
        function () {};
      prop_types_default().oneOfType([
        prop_types_default().string,
        prop_types_default().func,
        function DOMElement(props, propName, componentName) {
          if (!(props[propName] instanceof Element))
            return new Error(
              "Invalid prop `" +
                propName +
                "` supplied to `" +
                componentName +
                "`. Expected prop to be an instance of Element. Validation failed.",
            );
        },
        prop_types_default().shape({ current: prop_types_default().any }),
      ]);
      var tagPropType = prop_types_default().oneOfType([
        prop_types_default().func,
        prop_types_default().string,
        prop_types_default().shape({
          $$typeof: prop_types_default().symbol,
          render: prop_types_default().func,
        }),
        prop_types_default().arrayOf(
          prop_types_default().oneOfType([
            prop_types_default().func,
            prop_types_default().string,
            prop_types_default().shape({
              $$typeof: prop_types_default().symbol,
              render: prop_types_default().func,
            }),
          ]),
        ),
      ]);
      "undefined" == typeof window ||
        !window.document ||
        window.document.createElement;
      var _excluded = ["className", "cssModule", "fluid", "tag"];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var propTypes = {
        tag: tagPropType,
        fluid: prop_types_default().oneOfType([
          prop_types_default().bool,
          prop_types_default().string,
        ]),
        className: prop_types_default().string,
        cssModule: prop_types_default().object,
      };
      function Container(props) {
        var className = props.className,
          cssModule = props.cssModule,
          fluid = props.fluid,
          _props$tag = props.tag,
          Tag = void 0 === _props$tag ? "div" : _props$tag,
          attributes = _objectWithoutProperties(props, _excluded),
          containerClass = "container";
        !0 === fluid
          ? (containerClass = "container-fluid")
          : fluid && (containerClass = "container-".concat(fluid));
        var classes = mapToCssModules(
          classnames_default()(className, containerClass),
          cssModule,
        );
        return react.createElement(
          Tag,
          _extends({}, attributes, { className: classes }),
        );
      }
      Container.propTypes = propTypes;
      const esm_Container = Container;
      var Row_excluded = [
        "className",
        "cssModule",
        "noGutters",
        "tag",
        "widths",
      ];
      function Row_extends() {
        return (
          (Row_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          Row_extends.apply(this, arguments)
        );
      }
      function Row_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Row_objectWithoutPropertiesLoose(
            source,
            excluded,
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var rowColWidths = ["xs", "sm", "md", "lg", "xl", "xxl"],
        rowColsPropType = prop_types_default().oneOfType([
          prop_types_default().number,
          prop_types_default().string,
        ]),
        Row_propTypes = {
          tag: tagPropType,
          noGutters: (function deprecated(propType, explanation) {
            return function validate(props, propName, componentName) {
              null !== props[propName] &&
                void 0 !== props[propName] &&
                (function warnOnce(message) {
                  warned[message] ||
                    ("undefined" != typeof console && console.error(message),
                    (warned[message] = !0));
                })(
                  '"'
                    .concat(propName, '" property of "')
                    .concat(componentName, '" has been deprecated.\n')
                    .concat(explanation),
                );
              for (
                var _len = arguments.length,
                  rest = new Array(_len > 3 ? _len - 3 : 0),
                  _key = 3;
                _key < _len;
                _key++
              )
                rest[_key - 3] = arguments[_key];
              return propType.apply(
                void 0,
                [props, propName, componentName].concat(rest),
              );
            };
          })(
            prop_types_default().bool,
            "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/",
          ),
          className: prop_types_default().string,
          cssModule: prop_types_default().object,
          xs: rowColsPropType,
          sm: rowColsPropType,
          md: rowColsPropType,
          lg: rowColsPropType,
          xl: rowColsPropType,
          xxl: rowColsPropType,
          widths: prop_types_default().array,
        };
      function Row(props) {
        var className = props.className,
          cssModule = props.cssModule,
          noGutters = props.noGutters,
          _props$tag = props.tag,
          Tag = void 0 === _props$tag ? "div" : _props$tag,
          _props$widths = props.widths,
          widths = void 0 === _props$widths ? rowColWidths : _props$widths,
          attributes = Row_objectWithoutProperties(props, Row_excluded),
          colClasses = [];
        widths.forEach(function (colWidth, i) {
          var colSize = props[colWidth];
          if ((delete attributes[colWidth], colSize)) {
            var isXs = !i;
            colClasses.push(
              isXs
                ? "row-cols-".concat(colSize)
                : "row-cols-".concat(colWidth, "-").concat(colSize),
            );
          }
        });
        var classes = mapToCssModules(
          classnames_default()(
            className,
            noGutters ? "gx-0" : null,
            "row",
            colClasses,
          ),
          cssModule,
        );
        return react.createElement(
          Tag,
          Row_extends({}, attributes, { className: classes }),
        );
      }
      Row.propTypes = Row_propTypes;
      const esm_Row = Row;
      var Spinner_excluded = [
        "className",
        "cssModule",
        "type",
        "size",
        "color",
        "children",
        "tag",
      ];
      function Spinner_extends() {
        return (
          (Spinner_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          Spinner_extends.apply(this, arguments)
        );
      }
      function Spinner_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Spinner_objectWithoutPropertiesLoose(
            source,
            excluded,
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Spinner_propTypes = {
        tag: tagPropType,
        type: prop_types_default().oneOf(["border", "grow"]),
        size: prop_types_default().oneOf(["sm"]),
        color: prop_types_default().oneOf([
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ]),
        className: prop_types_default().string,
        cssModule: prop_types_default().object,
        children: prop_types_default().string,
      };
      function Spinner(props) {
        var className = props.className,
          cssModule = props.cssModule,
          _props$type = props.type,
          type = void 0 === _props$type ? "border" : _props$type,
          size = props.size,
          color = props.color,
          _props$children = props.children,
          children =
            void 0 === _props$children ? "Loading..." : _props$children,
          _props$tag = props.tag,
          Tag = void 0 === _props$tag ? "div" : _props$tag,
          attributes = Spinner_objectWithoutProperties(props, Spinner_excluded),
          classes = mapToCssModules(
            classnames_default()(
              className,
              !!size && "spinner-".concat(type, "-").concat(size),
              "spinner-".concat(type),
              !!color && "text-".concat(color),
            ),
            cssModule,
          );
        return react.createElement(
          Tag,
          Spinner_extends({ role: "status" }, attributes, {
            className: classes,
          }),
          children &&
            react.createElement(
              "span",
              { className: mapToCssModules("visually-hidden", cssModule) },
              children,
            ),
        );
      }
      Spinner.propTypes = Spinner_propTypes;
      const esm_Spinner = Spinner;
      var Loader = function () {
        return react.createElement(
          esm_Container,
          { fluid: !0, className: "vh-50 d-flex" },
          react.createElement(
            esm_Row,
            {
              className:
                "justify-content-center align-self-center w-100 text-center",
            },
            react.createElement(esm_Spinner, { color: "primary" }),
          ),
        );
      };
      Loader.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Loader",
      };
      const loader_stories = {
        title: "Design System/Atoms/Loader",
        component: Loader,
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