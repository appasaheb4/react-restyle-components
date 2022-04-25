"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const input_pin_component_1 = require("./input-pin.component");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Atoms/InputPin',
    component: input_pin_component_1.InputPin,
};
const pin = new Array(12);
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Primary = () => (react_1.default.createElement(input_pin_component_1.InputPin, { title: "Enter your Aadhaar Number", hasError: true, onPinChanged: (value) => {
        console.log({ value });
    }, pin: pin }));
exports.Primary = Primary;
//# sourceMappingURL=input-pin.stories.js.map