import React, { useState, useRef, useEffect, useCallback } from 'react';
// import './autocomplete.css';
import '../../../tc.css';
const LI_ELEMENT_HEIGHT = 34;
export const Autocomplete = ({ value = '', onValueChange, options = [], }) => {
    const [activeOption, setActiveOption] = useState(value === '' || options.indexOf(value) === -1 ? 0 : options.indexOf(value));
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [shouldShowList, setShouldShowList] = useState(false);
    const [searchValue, setSearchValue] = useState(value);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const onInputChange = useCallback((event) => {
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
    const onOptionClick = useCallback((event) => {
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
    const onKeyDown = useCallback((event) => {
        let selectedItem = '';
        if (event.keyCode === 38) {
            // arrow up
            event.preventDefault();
            if (activeOption === 0) {
                return;
            }
            else {
                selectedItem = filteredOptions[activeOption - 1];
                setSearchValue(filteredOptions[activeOption - 1]);
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
                selectedItem = filteredOptions[activeOption + 1];
                setSearchValue(filteredOptions[activeOption + 1]);
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
        return (React.createElement(React.Fragment, null, shouldShowList ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex absolute rounded-sm w-full", style: { zIndex: 999 } }, filteredOptions?.length > 0 ? (React.createElement("ul", { role: "list", className: "flex flex-col gap-1 bg-gray-200 w-full", id: "list", ref: listRef }, filteredOptions?.map((option, index) => {
                let className = 'flex gap-2 p-2 ';
                if (index === activeOption) {
                    className = className + 'font-bold';
                }
                return (React.createElement("li", { className: className, role: "listitem", key: index, onClick: onOptionClick }, option));
            }))) : (React.createElement("div", { className: "flex bg-gray-200 w-full p-2" },
                ' ',
                React.createElement("span", null, "Not Found Result!!"),
                ' '))))) : (React.createElement(React.Fragment, null))));
    };
    useEffect(() => {
        // this only works on click when inside timeout
        setTimeout(() => {
            inputRef.current?.select();
        }, 0);
        filteredOptions[0] && onValueChange(filteredOptions[0]);
        // setShouldShowList(true);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col relative" },
            React.createElement("div", { className: "flex leading-4 p-2  focus:outline-none focus:ring w-full shadow-sm sm:text-base border-2 rounded-md" },
                React.createElement("input", { type: "text", role: "input", name: "autocomplete-input", className: "flex focus:outline-none", placeholder: "Search...", onChange: onInputChange, onKeyDown: onKeyDown, value: searchValue, ref: inputRef, onClick: () => {
                        setShouldShowList(true);
                    } })),
            React.createElement("div", { className: "flex" }, renderList()))));
};
