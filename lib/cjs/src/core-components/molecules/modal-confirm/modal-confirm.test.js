"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable testing-library/render-result-naming-convention */
const react_1 = __importDefault(require("react"));
const _core_utils_1 = require("@core-utils");
const modal_confirm_component_1 = require("./modal-confirm.component");
it('render ModalConfirm correctly', () => {
    const modalConfirm = (0, _core_utils_1.render)(react_1.default.createElement(modal_confirm_component_1.ModalConfirm, { visible: true, title: "Confirm", message: "Are you sure delete?", onClick: () => jest.fn(), onClose: () => {
            jest.fn();
        } }));
    expect(modalConfirm).toMatchSnapshot();
});
