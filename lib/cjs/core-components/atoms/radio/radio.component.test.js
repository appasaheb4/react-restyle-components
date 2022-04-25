"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const radio_component_1 = require("./radio.component");
it('render XB_Radio correctly', () => {
    const radio = (0, _core_utils_1.render)(react_1.default.createElement(radio_component_1.Radio, { checked: true, onChange: () => jest.fn() }));
    expect(radio).toMatchSnapshot();
});
//# sourceMappingURL=radio.component.test.js.map