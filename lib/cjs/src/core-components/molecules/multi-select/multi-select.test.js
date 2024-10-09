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
const multi_select_component_1 = require("./multi-select.component");
it('render MultiSelect correctly', () => {
    const result = (0, _core_utils_1.render)(react_1.default.createElement(multi_select_component_1.MultiSelect, { options: ['UPI', 'CASH'], selectedItems: ['CASH'], onSelect: () => { } }));
    expect(result).toMatchSnapshot();
});
