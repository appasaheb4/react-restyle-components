"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const loader_component_1 = require("./loader.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/Loader',
    component: loader_component_1.Loader,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () => (react_1.default.createElement("div", { className: "flex flex-row" },
    react_1.default.createElement(loader_component_1.Loader, null)));
exports.Primary = Primary;
//# sourceMappingURL=loader.stories.js.map