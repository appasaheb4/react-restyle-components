"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-indent-props */
const react_1 = __importDefault(require("react"));
const css_multiline_input_component_1 = require("./css-multiline-input.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
  title: "Molecules/CSSMultiline",
  component: css_multiline_input_component_1.CSSMultiline,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () =>
  react_1.default.createElement(css_multiline_input_component_1.CSSMultiline, {
    onChange: (item) => {
      console.log({ item });
    },
  });
exports.Primary = Primary;
//# sourceMappingURL=css-multiline-input.stories.js.map
