'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef, useContext, createContext } from 'react';
import { useDebouncedValue } from '../../utils/hooks/useDebouncedValue';
import s from '../../tc.module.css';
import { cn } from '../../utils';
const UNSET = Symbol('FilterValueContext.UNSET');
/**
 * Context that carries the current table filter-state value for a column.
 * When a filter component is rendered inside `filterRenderer`, the Table wraps
 * the output with `FilterValueProvider` so every filter picks up the value
 * automatically — even when the consumer doesn't pass `value` explicitly.
 */
const FilterValueContext = createContext(UNSET);
export const FilterValueProvider = ({ value, children, }) => (_jsx(FilterValueContext.Provider, { value: value, children: children }));
function useFilterValueFromContext(propValue) {
    const ctxValue = useContext(FilterValueContext);
    if (propValue !== undefined)
        return propValue;
    if (ctxValue === UNSET)
        return undefined;
    return ctxValue;
}
// Tailwind CSS class helpers for filter components
const filterInputClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['w-full'], s['bg-white'], s['placeholder-gray-400'], s['transition-all']);
const filterSelectClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['w-full'], s['bg-white'], s['cursor-pointer'], s['transition-all']);
const comparatorSelectClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['bg-white'], s['cursor-pointer'], s['w-12']);
const dateInputClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['bg-white'], s['flex-1'], s['transition-all']);
const filterContainerClass = cn(s['flex'], s['flex-row'], s['gap-1'], s['items-center'], s['w-full']);
/**
 * Wraps `getFilter` instances so they are callable: `fn()`, `fn('')`, `fn(null)` clear;
 * `fn(value)` sets. Still exposes `.value`, `.setValue`, and `.clear` like TextFilterInstance.
 */
export function createCallableFilterHandle({ getValue, setValue, clear, }) {
    const handle = Object.assign(function callFilter(v) {
        if (arguments.length === 0 ||
            v === '' ||
            (typeof v === 'string' && v.trim() === '') ||
            v == null) {
            clear();
            return;
        }
        setValue(v);
    }, {
        setValue,
        clear,
    });
    Object.defineProperty(handle, 'value', {
        get() {
            return getValue();
        },
        enumerable: true,
        configurable: true,
    });
    return handle;
}
/**
 * Internal Text filter component with options support
 */
const TextFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options }) => {
    const value = useFilterValueFromContext(valueProp);
    const { placeholder, className, style, defaultValue, delay = 500, getFilter, onFilter: onFilterOption, id, disabled, } = options || {};
    // Support both onChange and onFilter props (onFilter is alias for onChange)
    const onChangeCallback = onChange || onFilterProp || (() => { });
    const onFilter = onFilterOption;
    // Local state for immediate input updates (maintains focus)
    const [internalValue, setInternalValue] = useState(value || defaultValue || '');
    const internalValueRef = useRef(internalValue);
    const inputRef = useRef(null);
    const onChangeRef = useRef(onChangeCallback);
    const onFilterRef = useRef(onFilter);
    // Track if the last change was from user input (internal) vs external (e.g., clear all)
    const lastInternalValueRef = useRef(internalValue);
    // Keep refs in sync
    useEffect(() => {
        internalValueRef.current = internalValue;
    }, [internalValue]);
    useEffect(() => {
        onChangeRef.current = onChangeCallback;
        onFilterRef.current = onFilter;
    }, [onChangeCallback, onFilter]);
    // Sync internal value when external value changes (e.g., from clear all filters)
    // Only sync when external value differs from what we last sent to parent
    useEffect(() => {
        const externalValue = value || '';
        // Only sync if external value is different from what we last propagated
        // This prevents overwriting user input while they're typing
        if (externalValue !== lastInternalValueRef.current) {
            setInternalValue(externalValue);
            lastInternalValueRef.current = externalValue;
        }
    }, [value]);
    // Debounce the internal value
    const [debouncedValue] = useDebouncedValue(internalValue, { wait: delay });
    // Propagate debounced value to parent
    useEffect(() => {
        // Update the ref to track what we're sending to parent
        lastInternalValueRef.current = debouncedValue || '';
        onChangeRef.current(debouncedValue || null);
        onFilterRef.current?.(debouncedValue);
    }, [debouncedValue]);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter(createCallableFilterHandle({
                getValue: () => internalValueRef.current,
                setValue: (newValue) => {
                    setInternalValue(newValue);
                    onChangeRef.current(newValue || null);
                    onFilterRef.current?.(newValue);
                },
                clear: () => {
                    setInternalValue('');
                    onChangeRef.current(null);
                    onFilterRef.current?.('');
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    // Track if input should be focused (user is actively typing)
    const hasFocusRef = useRef(false);
    // Simple change handler - just update local state
    const handleChange = useCallback((e) => {
        setInternalValue(e.target.value);
    }, []);
    // Track focus state
    const handleFocus = useCallback(() => {
        hasFocusRef.current = true;
    }, []);
    const handleBlur = useCallback(() => {
        hasFocusRef.current = false;
    }, []);
    // Restore focus after re-renders if it was focused
    useEffect(() => {
        if (hasFocusRef.current && inputRef.current) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
                if (hasFocusRef.current && inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
    });
    return (_jsx("input", { ref: inputRef, type: "text", id: id, "data-filter-field": column.dataField, value: internalValue, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, placeholder: placeholder || column.filterPlaceholder || `Filter ${column.text}...`, className: className || filterInputClass, style: style, disabled: disabled }));
};
export function TextFilter(optionsOrProps) {
    // Check if it's being used as a factory function (options object without column/value/onChange)
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        // Factory function usage - return a component
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(TextFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'TextFilter';
        // Attach options as props for backwards compatibility
        // This allows accessing: column.filter.props.getFilter
        FilterWithOptions.props = options;
        return FilterWithOptions;
    }
    // Direct component usage
    const props = optionsOrProps;
    return _jsx(TextFilterComponent, { ...props });
}
/**
 * Internal Number filter component with options support
 */
const NumberFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options }) => {
    const value = useFilterValueFromContext(valueProp);
    const { placeholder, className, style, defaultValue, delay = 500, defaultComparator = '=', allowDecimal = true, getFilter, onFilter: onFilterOption, id, disabled, hideComparator, comparators = ['=', '!=', '>', '>=', '<', '<='], } = options || {};
    // Support both onChange and onFilter props (onFilter is alias for onChange)
    const onChangeCallback = onChange || onFilterProp || (() => { });
    const onFilter = onFilterOption;
    // Local state for immediate input updates (maintains focus)
    const [number, setNumber] = useState(value?.number || defaultValue?.number || '');
    const [comparator, setComparator] = useState(value?.comparator || defaultValue?.comparator || defaultComparator);
    const numberRef = useRef(number);
    const comparatorRef = useRef(comparator);
    const inputRef = useRef(null);
    const onChangeRef = useRef(onChangeCallback);
    const onFilterRef = useRef(onFilter);
    // Track last value sent to parent to prevent sync loops
    const lastNumberRef = useRef(number);
    const lastComparatorRef = useRef(comparator);
    // Keep refs in sync with state
    useEffect(() => {
        numberRef.current = number;
        comparatorRef.current = comparator;
    }, [number, comparator]);
    useEffect(() => {
        onChangeRef.current = onChangeCallback;
        onFilterRef.current = onFilter;
    }, [onChangeCallback, onFilter]);
    // Sync internal value when external value changes (e.g., from clear all filters)
    useEffect(() => {
        const externalNumber = value?.number || '';
        const externalComparator = value?.comparator || defaultComparator;
        // Only sync if different from what we last sent to parent
        if (externalNumber !== lastNumberRef.current) {
            setNumber(externalNumber);
            lastNumberRef.current = externalNumber;
        }
        if (externalComparator !== lastComparatorRef.current) {
            setComparator(externalComparator);
            lastComparatorRef.current = externalComparator;
        }
    }, [value, defaultComparator]);
    // Debounce the number value
    const [debouncedNumber] = useDebouncedValue(number, { wait: delay });
    // Propagate debounced value to parent
    useEffect(() => {
        // Update refs to track what we're sending to parent
        lastNumberRef.current = debouncedNumber || '';
        lastComparatorRef.current = comparatorRef.current;
        const newValue = debouncedNumber
            ? { number: debouncedNumber, comparator: comparatorRef.current }
            : null;
        onChangeRef.current(newValue);
        // onFilter passes string value directly
        onFilterRef.current?.(debouncedNumber || null);
    }, [debouncedNumber]);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter(createCallableFilterHandle({
                getValue: () => numberRef.current
                    ? {
                        number: numberRef.current,
                        comparator: comparatorRef.current,
                    }
                    : null,
                setValue: (newValue) => {
                    if (newValue !== null && newValue !== undefined) {
                        const num = typeof newValue === 'object'
                            ? newValue.number
                            : String(newValue);
                        const comp = typeof newValue === 'object'
                            ? newValue.comparator
                            : comparatorRef.current;
                        setNumber(num);
                        setComparator(comp);
                        onChangeRef.current({ number: num, comparator: comp });
                        onFilterRef.current?.(num);
                    }
                    else {
                        setNumber('');
                        onChangeRef.current(null);
                        onFilterRef.current?.(null);
                    }
                },
                clear: () => {
                    setNumber('');
                    setComparator(defaultComparator);
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    // Track if input should be focused
    const hasFocusRef = useRef(false);
    // Track focus state
    const handleFocus = useCallback(() => {
        hasFocusRef.current = true;
    }, []);
    const handleBlur = useCallback(() => {
        hasFocusRef.current = false;
    }, []);
    // Restore focus after re-renders if it was focused
    useEffect(() => {
        if (hasFocusRef.current && inputRef.current) {
            requestAnimationFrame(() => {
                if (hasFocusRef.current && inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
    });
    // Handle comparator change - trigger immediate filter update
    const handleComparatorChange = useCallback((newComparator) => {
        setComparator(newComparator);
        if (number) {
            onChangeRef.current({ number, comparator: newComparator });
            onFilterRef.current?.(number);
        }
    }, [number]);
    const comparatorSymbols = {
        '=': '=',
        '!=': '≠',
        '>': '>',
        '>=': '≥',
        '<': '<',
        '<=': '≤',
    };
    // Resolve placeholder: own options > column.filter.props.placeholder > column.filterPlaceholder > default
    const resolvedPlaceholder = placeholder ||
        column?.filter?.props?.placeholder ||
        column.filterPlaceholder ||
        'Number...';
    const handleInputChange = useCallback((e) => {
        const val = e.target.value;
        const pattern = allowDecimal ? /^[0-9.,]*$/ : /^[0-9]*$/;
        if (pattern.test(val)) {
            setNumber(val);
        }
    }, [allowDecimal]);
    return (_jsxs("div", { className: filterContainerClass, children: [!hideComparator && (_jsx("select", { value: comparator, onChange: (e) => handleComparatorChange(e.target.value), disabled: disabled, className: className || comparatorSelectClass, children: comparators.map((comp) => (_jsx("option", { value: comp, children: comparatorSymbols[comp] || comp }, comp))) })), _jsx("input", { ref: inputRef, type: "text", id: id, "data-filter-field": column.dataField, value: number, onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, placeholder: resolvedPlaceholder, className: className || filterInputClass, style: style, disabled: disabled })] }));
};
export function NumberFilter(optionsOrProps) {
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(NumberFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'NumberFilter';
        // Attach options as props for backwards compatibility
        FilterWithOptions.props = options;
        return FilterWithOptions;
    }
    const props = optionsOrProps;
    return _jsx(NumberFilterComponent, { ...props });
}
/**
 * Internal Date filter component with options support
 */
const DateFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options }) => {
    const value = useFilterValueFromContext(valueProp);
    const { className, style, defaultValue, defaultComparator = '=', defaultRangeMode = false, getFilter, onFilter: onFilterOption, id, disabled, minDate, maxDate, } = options || {};
    // Support both onChange and onFilter props (onFilter is alias for onChange)
    const handleChange = onChange || onFilterProp || (() => { });
    const onFilter = onFilterOption;
    // Local state for immediate updates
    const [startDate, setStartDate] = useState(value?.startDate || defaultValue?.startDate || '');
    const [endDate, setEndDate] = useState(value?.endDate || defaultValue?.endDate || '');
    const [diffFlag, setDiffFlag] = useState(value?.diffFlag ?? defaultValue?.diffFlag ?? defaultRangeMode);
    const [comparator, setComparator] = useState(value?.comparator || defaultValue?.comparator || defaultComparator);
    const stateRef = useRef({ startDate, endDate, diffFlag, comparator });
    const onChangeRef = useRef(handleChange);
    const onFilterRef = useRef(onFilter);
    // Track last values sent to parent to prevent sync loops
    const lastValuesRef = useRef({
        startDate,
        endDate,
        diffFlag,
        comparator,
    });
    // Keep refs in sync with state
    useEffect(() => {
        stateRef.current = { startDate, endDate, diffFlag, comparator };
    }, [startDate, endDate, diffFlag, comparator]);
    useEffect(() => {
        onChangeRef.current = handleChange;
        onFilterRef.current = onFilter;
    }, [handleChange, onFilter]);
    // Sync internal value when external value changes (e.g., from clear all filters)
    useEffect(() => {
        const externalStartDate = value?.startDate || '';
        const externalEndDate = value?.endDate || '';
        const externalDiffFlag = value?.diffFlag ?? defaultRangeMode;
        const externalComparator = value?.comparator || defaultComparator;
        // Only sync if different from what we last sent to parent
        if (externalStartDate !== lastValuesRef.current.startDate) {
            setStartDate(externalStartDate);
            lastValuesRef.current.startDate = externalStartDate;
        }
        if (externalEndDate !== lastValuesRef.current.endDate) {
            setEndDate(externalEndDate);
            lastValuesRef.current.endDate = externalEndDate;
        }
        if (externalDiffFlag !== lastValuesRef.current.diffFlag) {
            setDiffFlag(externalDiffFlag);
            lastValuesRef.current.diffFlag = externalDiffFlag;
        }
        if (externalComparator !== lastValuesRef.current.comparator) {
            setComparator(externalComparator);
            lastValuesRef.current.comparator = externalComparator;
        }
    }, [value, defaultRangeMode, defaultComparator]);
    // Debounce the date values
    const [debouncedStartDate] = useDebouncedValue(startDate, { wait: 500 });
    const [debouncedEndDate] = useDebouncedValue(endDate, { wait: 500 });
    // Propagate debounced value to parent
    useEffect(() => {
        // Update refs to track what we're sending to parent
        lastValuesRef.current = {
            startDate: debouncedStartDate,
            endDate: debouncedEndDate,
            diffFlag,
            comparator,
        };
        const newValue = debouncedStartDate || debouncedEndDate
            ? {
                startDate: debouncedStartDate,
                endDate: debouncedEndDate,
                diffFlag,
                comparator,
            }
            : null;
        onChangeRef.current(newValue);
        onFilterRef.current?.(newValue);
    }, [debouncedStartDate, debouncedEndDate, diffFlag, comparator]);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter(createCallableFilterHandle({
                getValue: () => {
                    const { startDate: s, endDate: e, diffFlag: d, comparator: c, } = stateRef.current;
                    return s || e
                        ? { startDate: s, endDate: e, diffFlag: d, comparator: c }
                        : null;
                },
                setValue: (newValue) => {
                    if (newValue) {
                        setStartDate(newValue.startDate || '');
                        setEndDate(newValue.endDate || '');
                        setDiffFlag(newValue.diffFlag ?? defaultRangeMode);
                        setComparator(newValue.comparator || defaultComparator);
                        onChangeRef.current(newValue);
                        onFilterRef.current?.(newValue);
                    }
                    else {
                        setStartDate('');
                        setEndDate('');
                        onChangeRef.current(null);
                        onFilterRef.current?.(null);
                    }
                },
                clear: () => {
                    setStartDate('');
                    setEndDate('');
                    setDiffFlag(defaultRangeMode);
                    setComparator(defaultComparator);
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    // Simple change handlers - just update local state
    const handleStartDateChange = useCallback((e) => {
        setStartDate(e.target.value);
    }, []);
    const handleEndDateChange = useCallback((e) => {
        setEndDate(e.target.value);
    }, []);
    const handleDiffFlagChange = useCallback(() => {
        setDiffFlag((prev) => !prev);
    }, []);
    const handleComparatorChange = useCallback((e) => {
        setComparator(e.target.value);
    }, []);
    // Show/hide the expanded filter UI - initially collapsed (search icon only)
    const [isExpanded, setIsExpanded] = useState(false);
    // Collapsed view: show column text + search icon
    if (!isExpanded) {
        return (_jsxs("div", { className: cn(s['flex'], s['flex-row'], s['gap-2'], s['items-center'], s['cursor-pointer']), onClick: () => setIsExpanded(true), title: "Click to open date filter", children: [_jsx("span", { className: cn(s['text-white'], s['text-xs'], s['font-normal']), children: column.text }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: { color: 'white', cursor: 'pointer', flexShrink: 0 }, children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] })] }));
    }
    // Expanded view: full date filter UI
    return (_jsxs("div", { className: cn(filterContainerClass, className), style: style, children: [_jsx("button", { type: "button", onClick: handleDiffFlagChange, title: "Date range mode", disabled: disabled, className: cn(s['text-xs'], s['font-normal'], s['px-2'], s['py-1'], s['border'], s['rounded-md'], s['cursor-pointer'], s['whitespace-nowrap'], s['transition-all'], s['focus:outline-none'], diffFlag
                    ? cn(s['bg-blue-500'], s['text-white'], s['border-blue-500'])
                    : cn(s['bg-white'], s['text-black'], s['border-gray-300'], s['hover:bg-gray-50'])), children: diffFlag ? 'Range' : 'Single' }), !diffFlag && (_jsxs("select", { value: comparator, onChange: handleComparatorChange, disabled: disabled, className: comparatorSelectClass, children: [_jsx("option", { value: "=", children: "=" }), _jsx("option", { value: ">=", children: "\u2265" }), _jsx("option", { value: "<", children: "<" })] })), _jsx("input", { type: "date", id: id, value: startDate, onChange: handleStartDateChange, disabled: disabled, min: minDate, max: maxDate, className: dateInputClass }), diffFlag && (_jsxs(_Fragment, { children: [_jsx("span", { className: cn(s['text-xs'], s['text-gray-500'], s['font-normal']), children: "to" }), _jsx("input", { type: "date", value: endDate, onChange: handleEndDateChange, disabled: disabled, min: minDate, max: maxDate, className: dateInputClass })] })), _jsx("button", { type: "button", onClick: () => {
                    setIsExpanded(false);
                    // Clear filter when collapsing
                    setStartDate('');
                    setEndDate('');
                    setDiffFlag(defaultRangeMode);
                    setComparator(defaultComparator);
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                }, title: "Close date filter", className: cn(s['text-xs'], s['p-1'], s['cursor-pointer'], s['text-gray-400'], s['hover:text-red-500'], s['focus:outline-none'], s['transition-all']), children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }));
};
export function DateFilter(optionsOrProps) {
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(DateFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'DateFilter';
        // Attach options as props for backwards compatibility
        FilterWithOptions.props = options;
        return FilterWithOptions;
    }
    const props = optionsOrProps;
    return _jsx(DateFilterComponent, { ...props });
}
/**
 * Internal Select filter component with options support
 */
const SelectFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options }) => {
    const value = useFilterValueFromContext(valueProp);
    const { placeholder = 'All', className, style, defaultValue, delay = 300, options: customOptions, getFilter, onFilter: onFilterOption, id, disabled, } = options || {};
    // Support both onChange and onFilter props (onFilter is alias for onChange)
    const onChangeCallback = onChange || onFilterProp || (() => { });
    const onFilter = onFilterOption;
    // Local state for immediate updates
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
    const selectedValueRef = useRef(selectedValue);
    const onChangeRef = useRef(onChangeCallback);
    const onFilterRef = useRef(onFilter);
    // Track last value sent to parent to prevent sync loops
    const lastValueRef = useRef(selectedValue);
    // Keep refs in sync with state
    useEffect(() => {
        selectedValueRef.current = selectedValue;
    }, [selectedValue]);
    useEffect(() => {
        onChangeRef.current = onChangeCallback;
        onFilterRef.current = onFilter;
    }, [onChangeCallback, onFilter]);
    // Sync internal value when external value changes (e.g., from clear all filters)
    useEffect(() => {
        const externalValue = value || '';
        // Only sync if different from what we last sent to parent
        if (externalValue !== lastValueRef.current) {
            setSelectedValue(externalValue);
            lastValueRef.current = externalValue;
        }
    }, [value]);
    // Debounce the selected value
    const [debouncedValue] = useDebouncedValue(selectedValue, { wait: delay });
    // Propagate debounced value to parent
    useEffect(() => {
        // Update ref to track what we're sending to parent
        lastValueRef.current = debouncedValue || '';
        onChangeRef.current(debouncedValue || null);
        onFilterRef.current?.(debouncedValue || null);
    }, [debouncedValue]);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter(createCallableFilterHandle({
                getValue: () => selectedValueRef.current || null,
                setValue: (newValue) => {
                    setSelectedValue(newValue || '');
                    onChangeRef.current(newValue);
                    onFilterRef.current?.(newValue);
                },
                clear: () => {
                    setSelectedValue('');
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    // Simple change handler - just update local state
    const handleChange = useCallback((e) => {
        setSelectedValue(e.target.value);
    }, []);
    // Use custom options if provided, otherwise fall back to column.filterOptions
    const selectOptions = customOptions || column.filterOptions || [];
    const selectContent = (_jsxs(_Fragment, { children: [_jsx("option", { value: "", children: placeholder }), selectOptions.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }));
    return (_jsx("select", { id: id, value: selectedValue, onChange: handleChange, className: className || filterSelectClass, style: style, disabled: disabled, children: selectContent }));
};
export function SelectFilter(optionsOrProps) {
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(SelectFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'SelectFilter';
        // Attach options as props for backwards compatibility
        FilterWithOptions.props = options;
        return FilterWithOptions;
    }
    const props = optionsOrProps;
    return _jsx(SelectFilterComponent, { ...props });
}
/**
 * Internal Custom filter component with options support
 */
const CustomFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options }) => {
    const value = useFilterValueFromContext(valueProp);
    const { render, placeholder, className, style, defaultValue, delay = 300, getFilter, onFilter: onFilterOption, id, disabled, } = options;
    // Support both onChange and onFilter props (onFilter is alias for onChange)
    const onChangeCallback = onChange || onFilterProp || (() => { });
    const onFilter = onFilterOption;
    // Local state for immediate updates
    const [filterValue, setFilterValue] = useState(value ?? defaultValue ?? null);
    const filterValueRef = useRef(filterValue);
    const onChangeRef = useRef(onChangeCallback);
    const onFilterRef = useRef(onFilter);
    // Track last value sent to parent to prevent sync loops
    const lastValueRef = useRef(filterValue);
    // Keep refs in sync with state
    useEffect(() => {
        filterValueRef.current = filterValue;
    }, [filterValue]);
    useEffect(() => {
        onChangeRef.current = onChangeCallback;
        onFilterRef.current = onFilter;
    }, [onChangeCallback, onFilter]);
    // Sync internal value when external value changes (e.g., from clear all filters)
    useEffect(() => {
        const externalValue = value ?? null;
        // Only sync if different from what we last sent to parent
        if (JSON.stringify(externalValue) !== JSON.stringify(lastValueRef.current)) {
            setFilterValue(externalValue);
            lastValueRef.current = externalValue;
        }
    }, [value]);
    // Debounce the filter value
    const [debouncedValue] = useDebouncedValue(filterValue, { wait: delay });
    // Propagate debounced value to parent
    useEffect(() => {
        // Update ref to track what we're sending to parent
        lastValueRef.current = debouncedValue;
        onChangeRef.current(debouncedValue);
        onFilterRef.current?.(debouncedValue);
    }, [debouncedValue]);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter(createCallableFilterHandle({
                getValue: () => filterValueRef.current,
                setValue: (newValue) => {
                    setFilterValue(newValue);
                    onChangeRef.current(newValue);
                    onFilterRef.current?.(newValue);
                },
                clear: () => {
                    setFilterValue(null);
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    // Handler for value changes from custom render
    const handleChange = useCallback((newValue) => {
        setFilterValue(newValue);
    }, []);
    // Clear handler
    const handleClear = useCallback(() => {
        setFilterValue(null);
    }, []);
    // Build render props
    const renderProps = {
        value: filterValue,
        onChange: handleChange,
        column,
        clear: handleClear,
        placeholder,
        className,
        style,
        id,
        disabled,
    };
    // If no render function provided, render a default text input
    // This allows using CustomFilter with column.filterRenderer
    if (!render) {
        return (_jsx("input", { type: "text", id: id, "data-filter-field": column.dataField, value: filterValue || '', onChange: (e) => handleChange(e.target.value || null), placeholder: placeholder || column.filterPlaceholder || `Filter ${column.text}...`, className: className || filterInputClass, style: style, disabled: disabled }));
    }
    // Render the custom filter UI
    return _jsx(_Fragment, { children: render(renderProps) });
};
/**
 * Custom filter - allows rendering any custom filter component
 *
 * @example
 * // Basic custom filter with input
 * filter: CustomFilter({
 *   render: ({ value, onChange }) => (
 *     <input
 *       type="text"
 *       value={value || ''}
 *       onChange={(e) => onChange(e.target.value || null)}
 *       placeholder="Custom filter..."
 *     />
 *   ),
 * })
 *
 * @example
 * // Using render props (placeholder, className, etc.)
 * filter: CustomFilter({
 *   placeholder: 'Search...',
 *   className: 'my-custom-input',
 *   render: ({ value, onChange, placeholder, className }) => (
 *     <input
 *       type="text"
 *       value={value || ''}
 *       onChange={(e) => onChange(e.target.value || null)}
 *       placeholder={placeholder}
 *       className={className}
 *     />
 *   ),
 * })
 *
 * @example
 * // With filterRenderer, mount the same factory component as `filter` so getFilter runs.
 * // CustomFilter’s getFilter is not called if you only render a different component in filterRenderer.
 * const PictureFilter = NumberFilter({
 *   placeholder: 'Picture',
 *   getFilter: (f) => {
 *     pictureFilterRef.current = f;
 *   },
 * });
 * {
 *   filter: PictureFilter,
 *   filterRenderer: (onFilter, column, {value, onClear}) => (
 *     <PictureFilter column={column} value={value} onChange={onFilter} />
 *   ),
 * }
 * // clearAllFilter: () => pictureFilterRef.current?.clear()
 *
 * @example
 * // Custom range filter
 * filter: CustomFilter({
 *   render: ({ value, onChange }) => (
 *     <div style={{ display: 'flex', gap: 4 }}>
 *       <input
 *         type="number"
 *         placeholder="Min"
 *         value={value?.min || ''}
 *         onChange={(e) => onChange({ ...value, min: e.target.value })}
 *       />
 *       <input
 *         type="number"
 *         placeholder="Max"
 *         value={value?.max || ''}
 *         onChange={(e) => onChange({ ...value, max: e.target.value })}
 *       />
 *     </div>
 *   ),
 *   filterFunction: (cellValue, filterValue) => {
 *     if (!filterValue) return true;
 *     const { min, max } = filterValue;
 *     const num = Number(cellValue);
 *     if (min && num < Number(min)) return false;
 *     if (max && num > Number(max)) return false;
 *     return true;
 *   },
 * })
 *
 * @example
 * // Custom multi-select filter with checkboxes
 * filter: CustomFilter({
 *   render: ({ value, onChange }) => {
 *     const selected = value || [];
 *     const options = ['Active', 'Inactive', 'Pending'];
 *     return (
 *       <div>
 *         {options.map(opt => (
 *           <label key={opt}>
 *             <input
 *               type="checkbox"
 *               checked={selected.includes(opt)}
 *               onChange={(e) => {
 *                 if (e.target.checked) {
 *                   onChange([...selected, opt]);
 *                 } else {
 *                   onChange(selected.filter(s => s !== opt));
 *                 }
 *               }}
 *             />
 *             {opt}
 *           </label>
 *         ))}
 *       </div>
 *     );
 *   },
 *   filterFunction: (cellValue, filterValue) => {
 *     if (!filterValue?.length) return true;
 *     return filterValue.includes(cellValue);
 *   },
 * })
 *
 * @example
 * // External control with getFilter
 * filter: CustomFilter({
 *   placeholder: 'Custom...',
 *   getFilter: (filter) => {
 *     customFilterRef.current = filter;
 *     // filter.value - get current value
 *     // filter.setValue(newValue) - set value programmatically
 *     // filter.clear() - clear the filter
 *   },
 * })
 */
export function CustomFilter(options) {
    const FilterWithOptions = (props) => (_jsx(CustomFilterComponent, { ...props, options: options }));
    FilterWithOptions.displayName = 'CustomFilter';
    // Attach options as props for backwards compatibility with filter-comp.tsx pattern
    // This allows accessing: column.filter.props.getFilter
    FilterWithOptions.props = options;
    return FilterWithOptions;
}
/**
 * Get filter component based on type
 */
export const getFilterComponent = (type) => {
    switch (type) {
        case 'number':
            return NumberFilter;
        case 'date':
        case 'dateRange':
            return DateFilter;
        case 'select':
            return SelectFilter;
        case 'custom':
            // For 'custom' type, return a placeholder - actual custom filters
            // should be created using CustomFilter factory function
            return TextFilter;
        default:
            return TextFilter;
    }
};
