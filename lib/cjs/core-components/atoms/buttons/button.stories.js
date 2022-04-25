"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = exports.Disable = void 0;
const react_1 = __importDefault(require("react"));
const buttons_component_1 = require("./buttons.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/Button',
    component: buttons_component_1.Button,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Disable = () => (react_1.default.createElement(buttons_component_1.Button, { className: "bg-gray-light w-40", onClick: () => { } }, "Next"));
exports.Disable = Disable;
const Primary = () => (react_1.default.createElement(buttons_component_1.Button, { className: "bg-orange mt-4", onClick: () => { } }, "Permanent Address"));
exports.Primary = Primary;
//# sourceMappingURL=button.stories.js.map