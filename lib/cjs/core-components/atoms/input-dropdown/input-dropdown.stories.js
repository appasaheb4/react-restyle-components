"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const input_dropdown_component_1 = require("./input-dropdown.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/InputDropdown',
    component: input_dropdown_component_1.InputDropdown,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () => (react_1.default.createElement(input_dropdown_component_1.InputDropdown, { title: "Source of funds", items: ['Bank account', 'UPI', 'Credit Card'], hasError: true }));
exports.Primary = Primary;
//# sourceMappingURL=input-dropdown.stories.js.map