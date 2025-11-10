import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from 'react';
import { Icon } from '../../';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
const DEFAULT_ITEM_HEIGHT = 34;
export const Autocomplete = ({ value = '', onValueChange, options = [], filterConfig = {}, displayConfig = {}, keyboardConfig = {}, uiConfig = {}, hasError = false, disabled = false, name, className, style, inputClassName, onInputValueChange, onOpen, onClose, onSelect, autoFocus = false, }) => {
    // Merge configs with defaults
    const { enabled: filterEnabled = true, caseSensitive = false, filterFn, minCharacters = 0, } = filterConfig;
    const { renderOption, renderEmptyState, highlightActive = true, activeOptionClassName, optionClassName, } = displayConfig;
    const { enabled: keyboardEnabled = true, selectKeys = ['Enter'], closeKeys = ['Escape'], enterToSelect = true, escapeToClose = true, } = keyboardConfig;
    const { placeholder = 'Search...', emptyStateMessage = 'Not Found Result!!', itemHeight = DEFAULT_ITEM_HEIGHT, maxHeight, zIndex = 999, showOnFocus = true, showOnClick = true, autoSelectFirst = true, } = uiConfig;
    // Helper to get option label (moved outside to avoid dependency issues)
    const getOptionLabel = useCallback((option) => {
        return typeof option === 'string' ? option : option.label;
    }, []);
    // Helper to get option value (moved outside to avoid dependency issues)
    const getOptionValue = useCallback((option) => {
        return typeof option === 'string' ? option : String(option.value);
    }, []);
    // Find initial active option index
    const getInitialActiveIndex = useCallback(() => {
        if (!value || options.length === 0)
            return 0;
        const index = options.findIndex((opt) => getOptionValue(opt) === value || getOptionLabel(opt) === value);
        return index !== -1 ? index : 0;
    }, [value, options, getOptionValue, getOptionLabel]);
    const [activeOption, setActiveOption] = useState(() => {
        if (!value || options.length === 0)
            return 0;
        const index = options.findIndex((opt) => (typeof opt === 'string' ? opt : String(opt.value)) === value ||
            (typeof opt === 'string' ? opt : opt.label) === value);
        return index !== -1 ? index : 0;
    });
    // Initialize filtered options - will be updated by useEffect
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [shouldShowList, setShouldShowList] = useState(false);
    const [searchValue, setSearchValue] = useState(value);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const wrapperRef = useRef(null);
    // Track if user is actively typing to prevent value prop from overwriting input
    const isTypingRef = useRef(false);
    const typingTimeoutRef = useRef(null);
    // Filter function
    const filterOptions = useCallback((searchValue) => {
        if (!filterEnabled)
            return options;
        // If search is empty and minCharacters is 0, show all options
        if (searchValue.length === 0 && minCharacters === 0)
            return options;
        // If search length is less than minCharacters, return empty array or all options
        if (searchValue.length < minCharacters) {
            return minCharacters === 0 ? options : [];
        }
        // Use custom filter function if provided
        if (filterFn) {
            return options.filter((option) => filterFn(option, searchValue));
        }
        // Default filtering: case-insensitive substring match
        const lowerSearch = caseSensitive
            ? searchValue.trim()
            : searchValue.trim().toLowerCase();
        if (lowerSearch.length === 0)
            return options;
        return options.filter((option) => {
            const label = getOptionLabel(option);
            const matchText = caseSensitive
                ? label.trim()
                : label.trim().toLowerCase();
            return matchText.includes(lowerSearch);
        });
    }, [
        options,
        filterEnabled,
        caseSensitive,
        filterFn,
        minCharacters,
        getOptionLabel,
    ]);
    const onInputChange = useCallback((event) => {
        const input = event.target.value;
        // Mark that user is typing
        isTypingRef.current = true;
        // Clear existing timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        // Reset typing flag after user stops typing (300ms)
        typingTimeoutRef.current = setTimeout(() => {
            isTypingRef.current = false;
        }, 300);
        // Call onInputValueChange callback
        if (onInputValueChange) {
            onInputValueChange(input);
        }
        // Update search value immediately for responsive UI
        setSearchValue(input);
        // Filter options
        const filtered = filterOptions(input);
        setFilteredOptions(filtered);
        // Reset active option to first item or 0
        setActiveOption(filtered.length > 0 ? 0 : 0);
        // Show list if there are filtered options or if input is not empty
        if (filtered.length > 0 || input.length > 0) {
            setShouldShowList(true);
        }
        // Don't auto-select when user is typing - only update the input value
        // Auto-select should only happen on initial load or when dropdown opens
    }, [filterOptions, onInputValueChange]);
    const handleOptionSelect = useCallback((option, index) => {
        const label = getOptionLabel(option);
        setShouldShowList(false);
        setActiveOption(0);
        setFilteredOptions([]);
        setSearchValue(label);
        onValueChange(option);
        if (onSelect) {
            onSelect(option);
        }
        if (onClose) {
            onClose();
        }
    }, [onValueChange, onSelect, onClose]);
    const onOptionClick = useCallback((event) => {
        const index = parseInt(event.currentTarget.getAttribute('data-index') || '0', 10);
        const option = filteredOptions[index];
        if (option) {
            handleOptionSelect(option, index);
        }
    }, [filteredOptions, handleOptionSelect]);
    const onKeyDown = useCallback((event) => {
        if (!keyboardEnabled)
            return;
        const key = event.key;
        const keyCode = event.keyCode;
        // Arrow Up
        if (keyCode === 38 || key === 'ArrowUp') {
            event.preventDefault();
            if (activeOption > 0) {
                const newIndex = activeOption - 1;
                const option = filteredOptions[newIndex];
                setActiveOption(newIndex);
                setSearchValue(getOptionLabel(option));
                listRef.current?.scroll({
                    top: itemHeight * newIndex,
                    behavior: 'smooth',
                });
            }
            return;
        }
        // Arrow Down
        if (keyCode === 40 || key === 'ArrowDown') {
            event.preventDefault();
            if (activeOption < filteredOptions.length - 1) {
                const newIndex = activeOption + 1;
                const option = filteredOptions[newIndex];
                setActiveOption(newIndex);
                setSearchValue(getOptionLabel(option));
                listRef.current?.scroll({
                    top: itemHeight * newIndex,
                    behavior: 'smooth',
                });
            }
            return;
        }
        // Enter to select
        if ((keyCode === 13 || key === 'Enter') && enterToSelect) {
            event.preventDefault();
            if (filteredOptions.length > 0 && activeOption >= 0) {
                const option = filteredOptions[activeOption];
                handleOptionSelect(option, activeOption);
            }
            return;
        }
        // Escape to close
        if ((keyCode === 27 || key === 'Escape') && escapeToClose) {
            event.preventDefault();
            setShouldShowList(false);
            if (onClose) {
                onClose();
            }
            return;
        }
        // Other select keys
        if (selectKeys.includes(key) &&
            filteredOptions.length > 0 &&
            activeOption >= 0) {
            event.preventDefault();
            const option = filteredOptions[activeOption];
            handleOptionSelect(option, activeOption);
        }
        // Close keys
        if (closeKeys.includes(key)) {
            event.preventDefault();
            setShouldShowList(false);
            if (onClose) {
                onClose();
            }
        }
    }, [
        keyboardEnabled,
        activeOption,
        filteredOptions,
        itemHeight,
        enterToSelect,
        escapeToClose,
        selectKeys,
        closeKeys,
        handleOptionSelect,
        onClose,
    ]);
    const handleInputFocus = useCallback(() => {
        if (showOnFocus && !shouldShowList) {
            // Update filtered options when opening
            const filtered = filterOptions(searchValue);
            setFilteredOptions(filtered);
            setShouldShowList(true);
            if (onOpen) {
                onOpen();
            }
        }
    }, [showOnFocus, shouldShowList, onOpen, filterOptions, searchValue]);
    const handleInputClick = useCallback(() => {
        if (showOnClick && !shouldShowList) {
            // Update filtered options when opening
            const filtered = filterOptions(searchValue);
            setFilteredOptions(filtered);
            setShouldShowList(true);
            if (onOpen) {
                onOpen();
            }
        }
    }, [showOnClick, shouldShowList, onOpen, filterOptions, searchValue]);
    const handleIconClick = useCallback(() => {
        if (disabled)
            return;
        if (shouldShowList) {
            // Close dropdown
            setShouldShowList(false);
            if (onClose) {
                onClose();
            }
        }
        else {
            // Open dropdown
            const filtered = filterOptions(searchValue);
            setFilteredOptions(filtered);
            setShouldShowList(true);
            // Focus input when opening via icon
            inputRef.current?.focus();
            if (onOpen) {
                onOpen();
            }
        }
    }, [disabled, shouldShowList, onOpen, onClose, filterOptions, searchValue]);
    const renderList = () => {
        if (!shouldShowList)
            return null;
        return (_jsxs("div", { className: cn(s['absolute'], s['w-full'], s['mt-1'], s['rounded-lg'], s['bg-white'], s['border'], s['border-gray-200'], s['shadow-lg'], s['overflow-hidden'], s['left-0']), style: {
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                zIndex,
                animation: 'fadeIn 0.15s ease-out',
                transformOrigin: 'top',
            }, children: [_jsx("style", { children: `
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-8px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        ` }), filteredOptions.length > 0 ? (_jsx("ul", { role: "listbox", className: cn(s['flex'], s['flex-col'], s['py-1'], s['w-full'], s['overflow-y-auto'], s['overflow-x-hidden']), id: "autocomplete-list", ref: listRef, style: {
                        maxHeight: maxHeight || '300px',
                        scrollbarWidth: 'thin',
                    }, children: filteredOptions.map((option, index) => {
                        const isActive = highlightActive && index === activeOption;
                        let itemClassName = cn(s['flex'], s['items-center'], s['px-4'], s['py-3'], s['cursor-pointer'], s['text-sm'], s['transition-all'], s['duration-150'], s['ease-in-out'], optionClassName);
                        if (isActive && highlightActive) {
                            itemClassName = cn(itemClassName, s['bg-blue-50'], s['text-blue-700'], s['font-medium'], activeOptionClassName);
                        }
                        return (_jsx("li", { className: itemClassName, role: "option", "aria-selected": isActive, id: `autocomplete-option-${index}`, "data-index": index, onClick: onOptionClick, onMouseEnter: () => setActiveOption(index), style: {
                                transition: 'background-color 0.15s ease, color 0.15s ease',
                                backgroundColor: isActive && highlightActive
                                    ? 'rgb(239, 246, 255)'
                                    : 'transparent',
                                color: isActive && highlightActive
                                    ? 'rgb(29, 78, 216)'
                                    : 'rgb(55, 65, 81)',
                            }, onMouseOver: (e) => {
                                if (!isActive) {
                                    e.currentTarget.style.backgroundColor =
                                        'rgb(239, 246, 255)';
                                    e.currentTarget.style.color = 'rgb(29, 78, 216)';
                                }
                            }, onMouseOut: (e) => {
                                if (!isActive) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'rgb(55, 65, 81)';
                                }
                            }, children: renderOption ? (renderOption(option, index, isActive)) : (_jsx("span", { className: cn(s['select-none']), children: getOptionLabel(option) })) }, index));
                    }) })) : (_jsx("div", { className: cn(s['flex'], s['flex-col'], s['items-center'], s['justify-center'], s['py-8'], s['px-4'], s['text-center']), children: renderEmptyState ? (renderEmptyState()) : (_jsxs(_Fragment, { children: [_jsx(Icon, { nameIcon: "FaSearch", propsIcon: {
                                    size: 32,
                                    color: '#9ca3af',
                                } }), _jsx("p", { className: cn(s['mt-3'], s['text-sm'], s['font-medium'], s['text-gray-500']), children: emptyStateMessage }), _jsx("p", { className: cn(s['mt-1'], s['text-xs'], s['text-gray-400']), children: "Try adjusting your search" })] })) }))] }));
    };
    // Update filtered options when options or search value changes
    useEffect(() => {
        const filtered = filterOptions(searchValue);
        setFilteredOptions(filtered);
        // Update active option if current value is in filtered options
        if (filtered.length > 0) {
            const currentIndex = filtered.findIndex((opt) => getOptionValue(opt) === value || getOptionLabel(opt) === value);
            if (currentIndex !== -1) {
                setActiveOption(currentIndex);
            }
            else if (activeOption >= filtered.length) {
                // Reset to first option if current active is out of bounds
                setActiveOption(0);
            }
        }
        else if (filtered.length === 0 && searchValue.length === 0) {
            // If no search and no filtered results, reset active option
            setActiveOption(0);
        }
    }, [
        options,
        searchValue,
        filterOptions,
        value,
        activeOption,
        getOptionValue,
        getOptionLabel,
    ]);
    // Auto-focus and auto-select first option on mount
    useEffect(() => {
        if (autoFocus) {
            setTimeout(() => {
                inputRef.current?.focus();
                inputRef.current?.select();
            }, 0);
        }
        if (autoSelectFirst && filteredOptions.length > 0 && !value) {
            onValueChange(filteredOptions[0]);
        }
    }, [autoFocus, autoSelectFirst, filteredOptions, value, onValueChange]);
    // Update search value when value prop changes (but not when user is actively typing)
    useEffect(() => {
        // Don't sync if user is currently typing
        if (isTypingRef.current) {
            return;
        }
        // Only sync if value prop changed and doesn't match current search
        if (value !== searchValue) {
            const matchingOption = options.find((opt) => getOptionValue(opt) === value || getOptionLabel(opt) === value);
            if (matchingOption) {
                setSearchValue(getOptionLabel(matchingOption));
            }
            else if (value) {
                setSearchValue(value);
            }
        }
    }, [value, options, searchValue, getOptionValue, getOptionLabel]);
    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target) &&
                shouldShowList) {
                setShouldShowList(false);
                if (onClose) {
                    onClose();
                }
            }
        }
        if (shouldShowList) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [shouldShowList, onClose]);
    // Cleanup typing timeout on unmount
    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, []);
    return (_jsxs("div", { ref: wrapperRef, className: cn(s['flex'], s['flex-col'], s['relative'], s['w-full'], className), style: style, children: [_jsx("div", { className: cn(s['flex'], s['items-center'], s['relative'], s['w-full'], s['bg-white'], s['border'], s['rounded-lg'], s['shadow-sm'], s['transition-all'], s['duration-200'], s['ease-in-out'], s['overflow-hidden'], {
                    [s['border-red-500']]: hasError,
                    [s['border-gray-300']]: !hasError && !shouldShowList,
                    [s['border-blue-500']]: !hasError && shouldShowList,
                    [s['ring-2']]: !hasError && shouldShowList,
                    [s['ring-blue-200']]: !hasError && shouldShowList,
                    [s['opacity-50']]: disabled,
                    [s['cursor-not-allowed']]: disabled,
                }), style: {
                    boxShadow: shouldShowList && !hasError
                        ? '0 0 0 3px rgba(59, 130, 246, 0.1)'
                        : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    overflow: 'hidden',
                }, children: _jsxs("div", { className: cn(s['flex'], s['items-center'], s['w-full'], s['relative']), style: {
                        padding: '0.5rem 0.75rem',
                        minWidth: 0,
                    }, children: [_jsx("div", { className: cn(s['mr-2'], s['flex-shrink-0']), style: { display: 'flex', alignItems: 'center' }, children: _jsx(Icon, { nameIcon: "FaSearch", propsIcon: {
                                    size: 18,
                                    color: shouldShowList ? '#3b82f6' : '#9ca3af',
                                } }) }), _jsx("input", { type: "text", role: "combobox", "aria-autocomplete": "list", "aria-expanded": shouldShowList, "aria-controls": "autocomplete-list", "aria-activedescendant": shouldShowList && activeOption >= 0
                                ? `autocomplete-option-${activeOption}`
                                : undefined, name: name || 'autocomplete-input', className: cn(s['flex-1'], s['bg-transparent'], s['text-sm'], s['text-gray-700'], s['placeholder-gray-400'], s['focus:outline-none'], s['border-none'], s['focus:ring-0'], inputClassName), placeholder: placeholder, onChange: onInputChange, onKeyDown: onKeyDown, onFocus: handleInputFocus, onClick: handleInputClick, value: searchValue, ref: inputRef, disabled: disabled, autoComplete: "off", style: {
                                cursor: disabled ? 'not-allowed' : 'text',
                                minWidth: 0,
                                flex: '1 1 0%',
                                width: 0,
                            } }), _jsx("div", { className: cn(s['flex-shrink-0'], s['flex'], s['items-center'], s['justify-center'], s['cursor-pointer']), onClick: handleIconClick, style: {
                                marginLeft: '0.5rem',
                                transition: 'transform 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: disabled ? 'not-allowed' : 'pointer',
                            }, children: shouldShowList ? (_jsx(Icon, { nameIcon: "FaChevronUp", propsIcon: {
                                    size: 16,
                                    color: disabled ? '#9ca3af' : '#3b82f6',
                                } })) : (_jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                    size: 16,
                                    color: '#9ca3af',
                                } })) })] }) }), renderList()] }));
};
