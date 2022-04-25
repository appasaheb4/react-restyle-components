"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const radio_component_1 = require("./radio.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/Radio',
    component: radio_component_1.Radio,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", { className: "flex flex-row" },
        react_1.default.createElement(radio_component_1.Radio, { checked: true, onChange: () => { } }),
        react_1.default.createElement("span", null, "Married"))));
exports.Primary = Primary;
//# sourceMappingURL=radio.stories.js.map