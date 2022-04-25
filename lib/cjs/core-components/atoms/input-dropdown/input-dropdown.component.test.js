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
const input_dropdown_component_1 = require("./input-dropdown.component");
it("render InputDropdown correctly", () => {
  const inputDropDown = (0, _core_utils_1.render)(
    react_1.default.createElement(input_dropdown_component_1.InputDropdown, {
      title: "Source of funds",
      items: ["Bank account", "UPI", "Credit Card"],
      hasError: true,
      onChange: () => jest.fn(),
    })
  );
  expect(inputDropDown).toMatchSnapshot();
});
//# sourceMappingURL=input-dropdown.component.test.js.map
