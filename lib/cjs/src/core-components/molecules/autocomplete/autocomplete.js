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
const react_1 = __importStar(require("react"));
require("./autocomplete.css");
const LI_ELEMENT_HEIGHT = 34;
exports.default = ({ value = '', onValueChange, options = [], }) => {
    const [activeOption, setActiveOption] = (0, react_1.useState)(value === '' || options.indexOf(value) === -1 ? 0 : options.indexOf(value));
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)(options);
    const [shouldShowList, setShouldShowList] = (0, react_1.useState)(false);
    const [searchValue, setSearchValue] = (0, react_1.useState)(value);
    const inputRef = (0, react_1.useRef)(null);
    const listRef = (0, react_1.useRef)(null);
    const onInputChange = (0, react_1.useCallback)((event) => {
        const input = event.target.value;
        if (input != '') {
            const newFilteredOptions = options.filter((option) => option.toLowerCase().indexOf(input.toLowerCase()) > -1);
            setFilteredOptions(newFilteredOptions);
        }
        else {
            setFilteredOptions(options);
        }
        setActiveOption(0);
        setShouldShowList(true);
        setSearchValue(input);
    }, [
        setActiveOption,
        setFilteredOptions,
        setShouldShowList,
        setSearchValue,
        onValueChange,
    ]);
    const onOptionClick = (0, react_1.useCallback)((event) => {
        const symbol = event.currentTarget.innerText || event.currentTarget.textContent || '';
        setShouldShowList(false);
        setActiveOption(0);
        setFilteredOptions([]);
        setSearchValue(symbol);
        onValueChange(symbol);
    }, [
        setShouldShowList,
        setActiveOption,
        setFilteredOptions,
        setSearchValue,
        onValueChange,
    ]);
    const onKeyDown = (0, react_1.useCallback)((event) => {
        let selectedItem = '';
        if (event.keyCode === 38) {
            // arrow up
            event.preventDefault();
            if (activeOption === 0) {
                return;
            }
            else {
                selectedItem = options[activeOption - 1];
                setSearchValue(options[activeOption - 1]);
                setActiveOption(activeOption - 1);
                listRef.current?.scroll({
                    top: LI_ELEMENT_HEIGHT * (activeOption - 1),
                });
            }
        }
        else if (event.keyCode === 40) {
            // arrow down
            event.preventDefault();
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            else {
                selectedItem = options[activeOption + 1];
                setSearchValue(options[activeOption + 1]);
                setActiveOption(activeOption + 1);
                listRef.current?.scroll({
                    top: LI_ELEMENT_HEIGHT * (activeOption + 1),
                });
            }
        }
        if (Object.keys(selectedItem)?.length > 0) {
            onValueChange(selectedItem);
        }
    }, [
        setActiveOption,
        setSearchValue,
        filteredOptions,
        activeOption,
        onValueChange,
    ]);
    const renderList = () => {
        if (!options.length) {
            return react_1.default.createElement(react_1.default.Fragment, null);
        }
        if (shouldShowList) {
            if (filteredOptions.length) {
                return (react_1.default.createElement("ul", { role: "list", className: "autocomplete-list", id: "list", ref: listRef }, filteredOptions?.map((option, index) => {
                    let className = '';
                    if (index === activeOption) {
                        className = 'active-option';
                    }
                    return (react_1.default.createElement("li", { className: className, role: "listitem", key: index, onClick: onOptionClick }, option));
                })));
            }
            else {
                return react_1.default.createElement("div", { className: "no-options" }, "No match");
            }
        }
        return react_1.default.createElement(react_1.default.Fragment, null);
    };
    (0, react_1.useEffect)(() => {
        // this only works on click when inside timeout
        setTimeout(() => {
            inputRef.current?.select();
        }, 0);
        options[0] && onValueChange(options[0]);
        setShouldShowList(true);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { type: "text", role: "input", name: "autocomplete-input", onChange: onInputChange, onKeyDown: onKeyDown, value: searchValue, ref: inputRef }),
        renderList()));
};
