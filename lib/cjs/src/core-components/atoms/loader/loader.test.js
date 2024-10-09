"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const loader_component_1 = require("./loader.component");
it('render Loader correctly', () => {
    const loader = (0, _core_utils_1.render)(react_1.default.createElement(loader_component_1.Loader, null));
    expect(loader).toMatchSnapshot();
});
