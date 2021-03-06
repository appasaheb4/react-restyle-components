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
const checkBox_component_1 = require("./checkBox.component");
it("render XB_CheckBox correctly", () => {
  const checkbox = (0, _core_utils_1.render)(
    react_1.default.createElement(checkBox_component_1.CheckBox, {
      checked: true,
      onChange: () => jest.fn(),
    })
  );
  expect(checkbox).toMatchSnapshot();
});
//# sourceMappingURL=checkBox.component.test.js.map
