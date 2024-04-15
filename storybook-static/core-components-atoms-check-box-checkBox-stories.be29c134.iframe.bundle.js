"use strict";
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [741],
  {
    "./src/core-components/atoms/check-box/checkBox.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
      const checkedBox = function SvgCheckedBox(props) {
        return react.createElement(
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
              { clipPath: "url(#checkedBox_svg__clip0_0_1)" },
              react.createElement("path", {
                fill: "#fff",
                d: "M-20-399h360v640H-20z",
              }),
              react.createElement("rect", {
                x: 0.5,
                y: 0.5,
                width: 14,
                height: 14,
                rx: 1.5,
                fill: "#fff",
              }),
              react.createElement("rect", {
                x: 0.5,
                y: 0.5,
                width: 14,
                height: 14,
                rx: 1.5,
              }),
              react.createElement("path", {
                d: "M4 7.333L6.333 10l5.334-5",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            )),
          _defs ||
            (_defs = react.createElement(
              "defs",
              null,
              react.createElement(
                "clipPath",
                { id: "checkedBox_svg__clip0_0_1" },
                react.createElement("path", {
                  fill: "#fff",
                  transform: "translate(-20 -399)",
                  d: "M0 0h360v640H0z",
                }),
              ),
            )),
        );
      };
      var _rect;
      function unCheckbox_extends() {
        return (
          (unCheckbox_extends = Object.assign
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
          unCheckbox_extends.apply(this, arguments)
        );
      }
      const unCheckbox = function SvgUnCheckbox(props) {
        return react.createElement(
          "svg",
          unCheckbox_extends(
            {
              width: 15,
              height: 15,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            props,
          ),
          _rect ||
            (_rect = react.createElement("rect", {
              x: 0.5,
              y: 0.5,
              width: 14,
              height: 14,
              rx: 1.5,
              fill: "#fff",
              stroke: "#E7503D",
            })),
        );
      };
      var CheckBox = function (param) {
        var className = param.className,
          checked = param.checked,
          onChange = param.onChange;
        return react.createElement(
          "div",
          {
            className: "".concat(className, " flex flex-row  mr-2"),
            onClick: function () {
              onChange();
            },
          },
          checked
            ? react.createElement(checkedBox, {
                width: 20,
                height: 20,
                fill: "#E7503D",
                stroke: "E7503D",
              })
            : react.createElement(unCheckbox, { width: 20, height: 20 }),
        );
      };
      CheckBox.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "CheckBox",
        props: {
          className: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          checked: {
            required: !1,
            tsType: { name: "boolean" },
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
              raw: "() => void",
              signature: { arguments: [], return: { name: "void" } },
            },
            description: "",
          },
        },
      };
      const checkBox_stories = {
        title: "Design System/Atoms/CheckBox",
        component: CheckBox,
        tags: ["autodocs"],
      };
      var Primary1 = {
        args: { className: "flex flex-row", checked: !0, disable: !1 },
      };
      Primary1.parameters = {
        ...Primary1.parameters,
        docs: {
          ...Primary1.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    className: 'flex flex-row',\n    checked: true,\n    disable: false\n  }\n}",
            ...Primary1.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ["Primary1"];
    },
  },
]);
