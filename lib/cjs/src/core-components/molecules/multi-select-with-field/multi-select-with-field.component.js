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
exports.MultiSelectWithField = void 0;
/* eslint-disable  */
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const MultiSelectWithField = ({ displayField = '', options = [], selectedItems = [], hasError = false, onSelect, }) => {
    const [selectedOptions, setSelectedOptions] = (0, react_1.useState)([]);
    const [isListOpen, setIsListOpen] = (0, react_1.useState)(false);
    const useOutsideAlerter = ref => {
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
            react_1.default.createElement("span", { className: 'p-2 mt-1 shadow-sm', onClick: () => {
                    setIsListOpen(!isListOpen);
                } }, selectedOptions?.length > 0
                ? `${selectedOptions?.length} Items`
                : 'Select'),
            react_1.default.createElement("div", { className: `flex mx-2 ${isListOpen ? `show` : `hidden`}` }, options
                ? options?.length > 0 && (react_1.default.createElement("ul", { className: 'flex flex-col gap-1 p-2' }, options?.map((item, index) => (react_1.default.createElement("li", { key: index, className: 'flex items-center' },
                    react_1.default.createElement("input", { className: 'flex bg-black', type: 'checkbox', checked: !lodash_1.default.isEmpty(selectedOptions?.find(e => e[displayField]?.toUpperCase() ==
                            item[displayField]?.toUpperCase()))
                            ? true
                            : false, onChange: () => {
                            if (!lodash_1.default.isEmpty(selectedOptions?.find(e => e[displayField]?.toUpperCase() ==
                                item[displayField]?.toUpperCase()))) {
                                setSelectedOptions(selectedOptions?.filter(e => e[displayField]?.toUpperCase() !=
                                    item[displayField]?.toUpperCase()));
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
                    react_1.default.createElement("span", { className: 'flex ml-2  dark:text-white text-center' }, item[displayField]))))))
                : null))));
};
exports.MultiSelectWithField = MultiSelectWithField;
