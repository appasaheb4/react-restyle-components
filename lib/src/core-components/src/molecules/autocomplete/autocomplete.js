import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from 'react';
import s from '../../tc.module.css';
import { cn } from '../../utils';
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
        return (_jsx(_Fragment, { children: shouldShowList ? (_jsx(_Fragment, { children: _jsx("div", { className: cn(s['flex'], s['absolute'], s['rounded-sm'], s['w-full']), style: { zIndex: 999 }, children: filteredOptions?.length > 0 ? (_jsx("ul", { role: "list", className: cn(s['flex'], s['flex-col'], s['gap-1'], s['bg-gray-200'], s['w-full']), id: "list", ref: listRef, children: filteredOptions?.map((option, index) => {
                            let className = cn(s['flex'], s['gap-2'], s['p-2']);
                            if (index === activeOption) {
                                className = cn(className, s['font-bold']);
                            }
                            return (_jsx("li", { className: className, role: "listitem", onClick: onOptionClick, children: option }, index));
                        }) })) : (_jsx("div", { className: cn(s['flex'], s['bg-gray-200'], s['w-full'], s['p-2']), children: _jsx("span", { children: "Not Found Result!!" }) })) }) })) : (_jsx(_Fragment, {})) }));
    };
    useEffect(() => {
        // this only works on click when inside timeout
        setTimeout(() => {
            inputRef.current?.select();
        }, 0);
        filteredOptions[0] && onValueChange(filteredOptions[0]);
        // setShouldShowList(true);
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s['flex'], s['flex-col'], s['relative']), children: [_jsx("div", { className: cn(s['flex'], s['leading-4'], s['p-2'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md']), children: _jsx("input", { type: "text", role: "input", name: "autocomplete-input", className: cn(s['flex'], s['focus:outline-none']), placeholder: "Search...", onChange: onInputChange, onKeyDown: onKeyDown, value: searchValue, ref: inputRef, onClick: () => {
                            setShouldShowList(true);
                        } }) }), _jsx("div", { className: cn(s['flex']), children: renderList() })] }) }));
};
