"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const input_component_1 = require("./input.component");
it("render Input correctly without error", () => {
  const input = (0, _core_utils_1.render)(
    react_1.default.createElement(input_component_1.Input, {
      className: "h-1 relative top-1 border-red-600 border-b-0 dummy",
      title: "input",
      hasError: false,
      value: "",
      inputStyle: " border-b-0 invisible ",
      onChange: () => jest.fn(),
    }),
  );
  expect(input).toMatchSnapshot();
});
it("render Input correctly with error", () => {
  const input = (0, _core_utils_1.render)(
    react_1.default.createElement(input_component_1.Input, {
      className: "h-1 relative top-1 border-red-600 border-b-0 dummy",
      title: "input",
      hasError: true,
      value: "",
      inputStyle: " border-b-0 invisible ",
      onChange: () => jest.fn(),
    }),
  );
  expect(input).toMatchSnapshot();
});
//# sourceMappingURL=input.test.js.map
