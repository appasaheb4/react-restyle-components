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
exports.MultiSelect = void 0;
/* eslint-disable  */
const react_1 = __importStar(require("react"));
const MultiSelect = ({ options = [], selectedItems = [], hasError = false, onSelect, }) => {
    const [selectedOptions, setSelectedOptions] = (0, react_1.useState)([]);
    const [isListOpen, setIsListOpen] = (0, react_1.useState)(false);
    const useOutsideAlerter = (ref) => {
        (0, react_1.useEffect)(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    setIsListOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen]);
    };
    (0, react_1.useEffect)(() => {
        setSelectedOptions(selectedItems);
    }, [selectedItems]);
    const wrapperRef = (0, react_1.useRef)(null);
    useOutsideAlerter(wrapperRef);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `flex dark:bg-boxdark dark:text-white flex-col w-full rounded-md border-2 ${hasError ? 'border-red  ' : 'border-gray-300'}`, ref: wrapperRef },
            react_1.default.createElement("span", { className: "p-2 mt-1 shadow-sm", onClick: () => {
                    setIsListOpen(!isListOpen);
                } }, selectedOptions?.length > 0 ? selectedOptions?.join(',') : 'Select'),
            react_1.default.createElement("div", { className: `flex mx-2 ${isListOpen ? `show` : `hidden`}` }, options
                ? options?.length > 0 && (react_1.default.createElement("ul", null, options?.map((item, index) => (react_1.default.createElement("li", { key: index, className: "flex items-center text-center" },
                    react_1.default.createElement("input", { className: "bg-black", type: "checkbox", checked: selectedOptions?.includes(item), onChange: () => {
                            if (selectedOptions?.includes(item)) {
                                setSelectedOptions(selectedOptions?.filter((e) => e != item));
                            }
                            else {
                                if (selectedOptions?.length > 0) {
                                    setSelectedOptions(selectedOptions?.concat([item]));
                                }
                                else {
                                    setSelectedOptions([item]);
                                }
                            }
                        }, onBlur: () => {
                            if (!isListOpen)
                                onSelect(selectedOptions);
                        } }),
                    ' ',
                    react_1.default.createElement("label", { className: "ml-3 mt-2 pt-1 dark:text-white" },
                        ' ',
                        item))))))
                : null))));
};
exports.MultiSelect = MultiSelect;
