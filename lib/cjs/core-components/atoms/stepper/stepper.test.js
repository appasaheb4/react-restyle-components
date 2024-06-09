"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const stepper_component_1 = require("./stepper.component");
it("render Stepper correctly", () => {
  const stepper = (0, _core_utils_1.render)(
    react_1.default.createElement(stepper_component_1.Stepper, {
      steps: ["1", "2", "3", "4"],
      currentStep: 3,
      onStepClick: () => jest.fn(),
      className: "mt-4",
    }),
  );
  expect(stepper).toMatchSnapshot();
});
//# sourceMappingURL=stepper.test.js.map
