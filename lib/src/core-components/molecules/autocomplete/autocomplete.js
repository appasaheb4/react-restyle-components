import React, { useState, useRef, useEffect, useCallback } from 'react';
import './autocomplete.css';
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
            return React.createElement(React.Fragment, null);
        }
        if (shouldShowList) {
            if (filteredOptions.length) {
                return (React.createElement("ul", { role: "list", className: "autocomplete-list", id: "list", ref: listRef }, filteredOptions?.map((option, index) => {
                    let className = '';
                    if (index === activeOption) {
                        className = 'active-option';
                    }
                    return (React.createElement("li", { className: className, role: "listitem", key: index, onClick: onOptionClick }, option));
                })));
            }
            else {
                return React.createElement("div", { className: "no-options" }, "No match");
            }
        }
        return React.createElement(React.Fragment, null);
    };
    useEffect(() => {
        // this only works on click when inside timeout
        setTimeout(() => {
            inputRef.current?.select();
        }, 0);
        options[0] && onValueChange(options[0]);
        // setShouldShowList(true);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "text", role: "input", name: "autocomplete-input", onChange: onInputChange, onKeyDown: onKeyDown, value: searchValue, ref: inputRef, onClick: () => {
                setShouldShowList(true);
            } }),
        renderList()));
};
