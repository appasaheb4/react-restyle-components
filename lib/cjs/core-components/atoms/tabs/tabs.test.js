"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const tabs_component_1 = require("./tabs.component");
it("render Tabs correctly", () => {
  const tabs = (0, _core_utils_1.render)(
    react_1.default.createElement(tabs_component_1.Tabs, {
      options: [
        { title: "Work History", icon: "FaHistory" },
        { title: "Book Order", icon: "FaBook" },
        { title: "Make Frame", icon: "MdFilterFrames" },
      ],
      onSelect: (item) => {
        console.log({ item });
      },
    }),
  );
  expect(tabs).toMatchSnapshot();
});
//# sourceMappingURL=tabs.test.js.map
