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
exports.AutoCompleteFilterMultipleSelectMultipleFieldsDisplay = void 0;
/* eslint-disable  */
const react_1 = __importStar(require("react"));
const __1 = require("../..");
require("../../../tc.css");
const AutoCompleteFilterMultipleSelectMultipleFieldsDisplay = ({ uniqueField = '_id', loader = false, placeholder = 'Search...', data, hasError = false, disable = false, isUpperCase = false, name, onFilter, onUpdate, onSelect, onBlur, }) => {
    const [value, setValue] = (0, react_1.useState)('');
    const [options, setOptions] = (0, react_1.useState)();
    const [originalOptions, setOriginalOptions] = (0, react_1.useState)();
    const [isListOpen, setIsListOpen] = (0, react_1.useState)(false);
    const useOutsideAlerter = (ref) => {
        (0, react_1.useEffect)(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    if (originalOptions && options) {
                        if (isListOpen) {
                            onUpdate && onUpdate(data.selected);
                        }
                    }
                    setIsListOpen(false);
                    setValue('');
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen]);
    };
    const wrapperRef = (0, react_1.useRef)(null);
    useOutsideAlerter(wrapperRef);
    let count = 0;
    const getSelectedItem = (selectedItem, list) => {
        if (count === 0) {
            const finalList = list?.filter((item, index) => {
                item.selected = false;
                selectedItem && selectedItem.length > 0
                    ? selectedItem.find((sItem, index) => {
                        if (sItem[uniqueField] === item[uniqueField]) {
                            item.selected = true;
                        }
                    })
                    : (item.selected = false);
                count++;
                return item;
            });
            list = finalList;
        }
        return list;
    };
    (0, react_1.useEffect)(() => {
        setOriginalOptions(getSelectedItem(data.selected, data.list));
        setOptions(getSelectedItem(data.selected, data.list));
    }, [data, data.selected]);
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        onFilter && onFilter(search);
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.target.value;
            onFilter && onFilter(search);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: wrapperRef, className: "w-full relative" },
            react_1.default.createElement("div", { className: `flex items-center leading-4 p-2 focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2 ${hasError ? 'border-red' : 'border-gray-300'} rounded-md` },
                react_1.default.createElement("input", { placeholder: placeholder, disabled: disable, name: name, value: !isListOpen
                        ? `${(data.selected && data.selected.length) || 0} Items`
                        : isUpperCase
                            ? value?.toUpperCase()
                            : value, className: `w-full focus:outline-none bg-none`, onKeyUp: onKeyUp, onChange: onChange, onClick: () => setIsListOpen(true), onBlur: (e) => onBlur && onBlur(e) }),
                isListOpen ? (react_1.default.createElement(__1.Icon, { nameIcon: "FaChevronUp", propsIcon: {
                        color: '#000000',
                        size: 22,
                    } })) : (react_1.default.createElement(__1.Icon, { nameIcon: "FaChevronDown", propsIcon: {
                        color: '#000000',
                        size: 22,
                    } }))),
            options && isListOpen
                ? options?.length > 0 && (react_1.default.createElement("div", { className: "mt-1  absolute bg-gray-100 p-2 rounded-sm z-500", style: { zIndex: 80 } },
                    react_1.default.createElement("ul", null, options?.map((item, index) => (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("li", { key: index, className: "text-gray-400 flex items-center" },
                            react_1.default.createElement("input", { type: "checkbox", checked: item.selected, onChange: () => onSelect(item) }),
                            ' ',
                            react_1.default.createElement("label", { className: "ml-2 mt-1 text-black" }, data.displayKey
                                .map((key) => `${item[key]}
                              `)
                                .join(' - ')))))))))
                : null)));
};
exports.AutoCompleteFilterMultipleSelectMultipleFieldsDisplay = AutoCompleteFilterMultipleSelectMultipleFieldsDisplay;
