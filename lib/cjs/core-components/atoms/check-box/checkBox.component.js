"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const react_1 = __importDefault(require("react"));
const unCheckbox_svg_1 = require("../../../library/assets/svg/unCheckbox.svg");
const checkedBox_svg_1 = require("../../../library/assets/svg/checkedBox.svg");
const CheckBox = ({ className, checked, onChange }) => {
    const width = 20;
    const hanleClick = () => {
        onChange();
    };
    return (react_1.default.createElement("div", { className: `${className} flex flex-row  mr-2`, onClick: hanleClick }, checked ? (react_1.default.createElement(checkedBox_svg_1.ReactComponent, { width: width, height: width, fill: "#E7503D", stroke: "E7503D" })) : (react_1.default.createElement(unCheckbox_svg_1.ReactComponent, { width: width, height: width }))));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=checkBox.component.js.map