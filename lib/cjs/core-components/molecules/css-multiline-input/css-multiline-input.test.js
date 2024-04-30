"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const css_multiline_input_component_1 = require("./css-multiline-input.component");
it("render CSSMultiline correctly", () => {
  const result = (0, _core_utils_1.render)(
    react_1.default.createElement(
      css_multiline_input_component_1.CSSMultiline,
      { onChange: () => {} },
    ),
  );
  expect(result).toMatchSnapshot();
});
//# sourceMappingURL=css-multiline-input.test.js.map
