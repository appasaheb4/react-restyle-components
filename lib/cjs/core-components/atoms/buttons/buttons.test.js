"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const buttons_component_1 = require("./buttons.component");
it('render Button correctly', () => {
    const button = (0, _core_utils_1.render)(react_1.default.createElement(buttons_component_1.Button, { className: "bg-gray-light w-40", onClick: () => jest.fn() }, "Permanent Address"));
    expect(button).toMatchSnapshot();
});
//# sourceMappingURL=buttons.test.js.map