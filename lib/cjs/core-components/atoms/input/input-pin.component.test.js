"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const input_pin_component_1 = require("./input-pin.component");
it('render InputOtp correctly without error', () => {
    const pinInput = (0, _core_utils_1.render)(react_1.default.createElement(input_pin_component_1.InputPin, { title: "Enter your Aadhaar Number", hasError: false, errorMsg: "Uh oh! You\u2019ve entered an invalid aadhaar number", onPinChanged: () => jest.fn(), pin: new Array(12) }));
    expect(pinInput).toMatchSnapshot();
});
it('render InputOtp correctly with error', () => {
    const pinInput = (0, _core_utils_1.render)(react_1.default.createElement(input_pin_component_1.InputPin, { title: "Enter your Aadhaar Number", hasError: true, errorMsg: "Uh oh! You\u2019ve entered an invalid aadhaar number", onPinChanged: () => jest.fn(), pin: new Array(12) }));
    expect(pinInput).toMatchSnapshot();
});
//# sourceMappingURL=input-pin.component.test.js.map