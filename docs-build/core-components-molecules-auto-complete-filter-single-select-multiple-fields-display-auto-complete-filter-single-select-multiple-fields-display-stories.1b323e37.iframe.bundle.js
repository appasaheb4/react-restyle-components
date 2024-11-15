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
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          });
        __webpack_require__("./node_modules/react/index.js");
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title:
              "Design System/Molecules/AutoCompleteFilterSingleSelectMultiFieldsDisplay",
            component: __webpack_require__(
              "./src/core-components/molecules/auto-complete-filter-single-select-multiple-fields-display/auto-complete-filter-single-select-multiple-fields-display.component.tsx",
            ).l,
            tags: ["autodocs"],
            parameters: {
              componentSubtitle:
                "import { AutoCompleteFilterSingleSelectMultiFieldsDisplay } from 'react-restyle-components'",
            },
          },
          Primary = {
            args: {
              data: {
                list: [
                  { code: "Code1", name: "Value1" },
                  { code: "Code2", name: "Value2" },
                  { code: "Code3", name: "Value3" },
                ],
                displayKey: ["name"],
              },
              onSelect: (item) => {
                console.log({ item });
              },
            },
          },
          __namedExportsOrder = ["Primary"];
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
      },
  },
]);
