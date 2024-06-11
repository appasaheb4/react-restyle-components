"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ type = 'solid', className = 'w-40', disable = false, onClick, children, }) => {
    const buttonColorClass = type === 'solid'
        ? 'text-white bg-[#007BFF] hover:bg-[#007BFF] hover:shadow-lg text-white'
        : 'dark:text-white  text-black border border-gray-400 hover:shadow-lg';
    return (react_1.default.createElement("button", { "data-testid": "buttonElement", disabled: disable, className: `${className} rounded-100px px-3 py-1  text-md ${buttonColorClass} pt-2 pb-2 font-nunitoSansRegular ${disable ? 'opacity-50' : 'opacity-100'}`, onClick: () => onClick() }, children));
};
exports.Button = Button;
//# sourceMappingURL=buttons.component.js.map