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
exports.Input = void 0;
/* eslint-disable no-console */
const react_1 = __importStar(require("react"));
require("./input.styles.css");
require("../../../tc.css");
const Input = ({ title, defaultValue, className, disable, hasError, errorMsg, defaultMsg, inputStyle, autoComplete, maxlength = 40, onChange, onBlur, }) => {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const onKeyUpValue = (event) => {
        onChange(event.target.value);
    };
    return (react_1.default.createElement("div", { className: `${className} relative` },
        react_1.default.createElement("input", { "data-testid": "inputElement", type: "text", name: "name", value: value, placeholder: " ", disabled: disable, className: `pt-3 pb-2 bg-transparent block w-full px-0 mt-0  rounded-none  border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-secondary border-gray-secondary font-nunitoSansRegular ${inputStyle}`, onChange: (e) => {
                setValue(e.target.value);
                onChange && onChange(e.target.value);
            }, onKeyUp: onKeyUpValue, onBlur: (e) => onBlur && onBlur(e.target.value), autoComplete: autoComplete, maxLength: maxlength }),
        react_1.default.createElement("label", { className: "absolute duration-300 top-3 -z-1 origin-0 text-gray-dark-secondary font-nunitoSansRegular text-md" }, title),
        hasError && hasError?.type !== 'required' && (react_1.default.createElement("span", { className: "text-sm text-red text-4xs", id: "error" }, `${errorMsg || ''}`)),
        (!hasError || hasError?.type === 'required') && (react_1.default.createElement("span", { className: "text-sm text-4xs", id: "error" }, `${defaultMsg || ''}`))));
};
exports.Input = Input;
