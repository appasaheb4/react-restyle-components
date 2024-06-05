"use strict";
(self.webpackChunkreact_restyle_components =
  self.webpackChunkreact_restyle_components || []).push([
  [686],
  {
    "./src/core-components/atoms/tooltip/tooltip.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => tooltip_stories,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        Tooltip = __webpack_require__(
          "./node_modules/@mui/material/Tooltip/Tooltip.js",
        ),
        Box = __webpack_require__("./node_modules/@mui/material/Box/Box.js"),
        tooltip_component_Tooltip = function (param) {
          var tooltipText = param.tooltipText,
            children = (param.position, param.children),
            positionRef = react.useRef({ x: 0, y: 0 }),
            popperRef = react.useRef(null),
            areaRef = react.useRef(null);
          return react.createElement(
            Tooltip.A,
            {
              title: tooltipText,
              placement: "bottom-start",
              arrow: !0,
              PopperProps: {
                popperRef,
                anchorEl: {
                  getBoundingClientRect: function () {
                    return new DOMRect(
                      positionRef.current.x,
                      areaRef.current.getBoundingClientRect().y + 22,
                      0,
                      0,
                    );
                  },
                },
              },
            },
            react.createElement(
              Box.A,
              {
                ref: areaRef,
                onMouseMove: function (event) {
                  (positionRef.current = {
                    x: event.clientX,
                    y: event.clientY,
                  }),
                    null != popperRef.current && popperRef.current.update();
                },
              },
              children,
            ),
          );
        };
      tooltip_component_Tooltip.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Tooltip",
        props: {
          tooltipText: {
            required: !1,
            tsType: { name: "any" },
            description: "",
          },
          position: {
            required: !1,
            tsType: {
              name: "union",
              raw: "'bottom' | 'left' | 'top'",
              elements: [
                { name: "literal", value: "'bottom'" },
                { name: "literal", value: "'left'" },
                { name: "literal", value: "'top'" },
              ],
            },
            description: "",
            defaultValue: { value: "'bottom-start'", computed: !1 },
          },
          className: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          children: { required: !1, tsType: { name: "any" }, description: "" },
        },
      };
      const tooltip_stories = {
        title: "Design System/Atoms/Tooltip",
        component: tooltip_component_Tooltip,
        tags: ["autodocs"],
        parameters: {
          componentSubtitle:
            "import { Tooltip } from 'react-restyle-components'",
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
  },
]);
