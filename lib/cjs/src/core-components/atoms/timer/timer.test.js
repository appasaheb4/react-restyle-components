"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const timer_component_1 = require("./timer.component");
it('render Timer correctly', () => {
    const time = (0, _core_utils_1.render)(react_1.default.createElement(timer_component_1.Timer, { onClear: () => { } }));
    expect(time).toMatchSnapshot();
});
it('render Timer with minute correctly', () => {
    const time = (0, _core_utils_1.render)(react_1.default.createElement(timer_component_1.Timer, { onClear: () => { } }));
    expect(time.findByText('minute')).toBeTruthy();
});
