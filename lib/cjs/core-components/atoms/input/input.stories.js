"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const input_component_1 = require("./input.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/Input',
    component: input_component_1.Input,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () => (react_1.default.createElement(input_component_1.Input, { className: "mt-4", title: "Enter your Pan Number", hasError: true, value: "", onChange: (panNumber) => console.log({ panNumber }) }));
exports.Primary = Primary;
//# sourceMappingURL=input.stories.js.map