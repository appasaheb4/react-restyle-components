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
exports.Tabs = void 0;
const react_1 = __importStar(require("react"));
const __1 = require("../..");
require("../../../tc.css");
const Tabs = ({ options, onSelect }) => {
    const [selected, setSelected] = (0, react_1.useState)(options[0].title);
    return (react_1.default.createElement("div", { className: "flex justify-center" },
        react_1.default.createElement("ul", { className: "flex flex-wrap items-center justify-center -mb-px text-sm font-medium text-center text-black cursor-pointer gap-2" }, options?.map((item, index) => (react_1.default.createElement("li", { key: index, className: "bg-orange1 rounded-md" },
            react_1.default.createElement("div", { className: `inline-flex items-center justify-center p-3 border-b-2 gap-1 ${item.title == selected
                    ? 'text-white font-bold md:text-md  border-primary active'
                    : ' text-gray-200  md:text-md border-transparent'}`, onClick: () => {
                    setSelected(item.title);
                    onSelect(item.title);
                } },
                react_1.default.createElement(__1.Icon, { nameIcon: item.icon, propsIcon: {
                        color: item.title == selected ? '#ffffff' : '#000000',
                        size: 24,
                    } }),
                react_1.default.createElement("span", { className: "text-3md" }, item.title))))))));
};
exports.Tabs = Tabs;
