"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const react_1 = __importStar(require("react"));
const svg_1 = require("../../../library/assets/svg");
const form_component_1 = require("../form/form.component");
const Radio = ({ title = 'Source', data = [], className, onChange, }) => {
    const [list, setList] = (0, react_1.useState)(data);
    const width = 20;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(form_component_1.InputWrapper, { label: title }, list === null || list === void 0 ? void 0 : list.map((item, index) => (react_1.default.createElement("div", { className: `${className} flex items-center mb-1`, onClick: () => {
                const result = list === null || list === void 0 ? void 0 : list.map((e, i) => {
                    if (i == index)
                        return Object.assign(Object.assign({}, e), { checked: true });
                    else
                        return Object.assign(Object.assign({}, e), { checked: false });
                });
                setList(result);
                onChange(result === null || result === void 0 ? void 0 : result.find((item) => item.checked));
            }, key: index },
            react_1.default.createElement("div", { className: "flex flex-row gap-1 items-center" },
                item.checked ? (react_1.default.createElement(svg_1.CheckedRadio, { width: width, height: width })) : (react_1.default.createElement(svg_1.UncheckRadio, { width: width, height: width })),
                react_1.default.createElement("span", { className: "text-4xs" }, item === null || item === void 0 ? void 0 : item.title))))))));
};
exports.Radio = Radio;
//# sourceMappingURL=radio.component.js.map