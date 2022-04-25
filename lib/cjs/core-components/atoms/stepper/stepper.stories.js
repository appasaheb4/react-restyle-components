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
const stepper_component_1 = require("./stepper.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
  title: "Atoms/Stepper",
  component: stepper_component_1.Stepper,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () =>
  react_1.default.createElement(stepper_component_1.Stepper, {
    steps: ["1", "2", "3", "4"],
    currentStep: 2,
    onStepClick: (currentStep, step) => {},
    className: "mt-4",
  });
exports.Primary = Primary;
//# sourceMappingURL=stepper.stories.js.map
