"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const tooltip_component_1 = require("./tooltip.component");
describe('Tooltip component', () => {
    it('render tooltip correctly', () => {
        const tooltip = (0, react_2.render)(react_1.default.createElement(tooltip_component_1.Tooltip, null));
        expect(tooltip).toMatchSnapshot();
    });
});
