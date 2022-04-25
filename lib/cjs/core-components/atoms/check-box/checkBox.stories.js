"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const checkBox_component_1 = require("./checkBox.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/CheckBox',
    component: checkBox_component_1.CheckBox,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () => (react_1.default.createElement("div", { className: "flex flex-row" },
    react_1.default.createElement(checkBox_component_1.CheckBox, { checked: true, onChange: () => { } }),
    react_1.default.createElement("span", null, "I agree and authorize MiMo to fetch my personal details from UIDAI. I confirm that I have not used the OTP-based Aadhar verification to open any other bank account. I have read and accepted all Terms & Conditions")));
exports.Primary = Primary;
//# sourceMappingURL=checkBox.stories.js.map