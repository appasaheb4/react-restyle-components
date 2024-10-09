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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const __1 = require("../..");
const component_1 = __importDefault(require("@loadable/component"));
require("../../../tc.css");
let lib = 'md';
const Icon = ({ nameIcon, propsIcon, tooltip = '', isDisable = false, onClick, }) => {
    try {
        const iconProps = {
            ...propsIcon,
            color: isDisable ? '#808080' : propsIcon?.color || '#ffffff',
        };
        const lib = nameIcon
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .split(' ')[0]
            .toLocaleLowerCase();
        let ElementIcon;
        if (lib == 'md')
            ElementIcon = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(require('react-icons/md'))), {
                resolveComponent: (el) => el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
            });
        else
            ElementIcon = (0, component_1.default)(() => Promise.resolve().then(() => __importStar(require('react-icons/fa'))), {
                resolveComponent: (el) => el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el.default)[0]],
            });
        return (react_1.default.createElement("div", { onClick: () => {
                if (!isDisable)
                    onClick && onClick();
            } }, !lodash_1.default.isEmpty(tooltip) ? (react_1.default.createElement(__1.Tooltip, { tooltipText: tooltip },
            react_1.default.createElement(ElementIcon, { ...iconProps }))) : (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") },
            react_1.default.createElement(ElementIcon, { ...iconProps })))));
    }
    catch (error) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
};
exports.Icon = Icon;
