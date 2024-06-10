"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const icons_component_1 = require("./icons.component");
it("render Icon correctly", () => {
  const icon = (0, _core_utils_1.render)(
    react_1.default.createElement(icons_component_1.Icon, {
      nameIcon: "FaHistory",
      propsIcon: {
        color: "#000000",
        size: 24,
      },
    }),
  );
  expect(icon).toMatchSnapshot();
});
//# sourceMappingURL=icons.test.js.map
