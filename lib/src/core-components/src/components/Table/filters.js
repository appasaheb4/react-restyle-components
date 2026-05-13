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
/**
 * Set by {@link Table} around each header filter so components used in
 * `filterRenderer` inherit `isClickFilter` without repeating the prop.
 */
const CLICK_FILTER_UNSET = Symbol('FilterClickApplyContext.UNSET');
const FilterClickApplyContext = createContext(CLICK_FILTER_UNSET);
export const FilterClickApplyProvider = ({ value, children }) => (_jsx(FilterClickApplyContext.Provider, { value: value, children: children }));
function useClickApplyMode(isClickFilterProp, factoryIsClick) {
    const inherited = useContext(FilterClickApplyContext);
    const fromTable = isClickFilterProp !== undefined && isClickFilterProp !== null
        ? Boolean(isClickFilterProp)
        : inherited !== CLICK_FILTER_UNSET
            ? Boolean(inherited)
            : false;
    return Boolean(fromTable || factoryIsClick);
}
// Tailwind CSS class helpers for filter components
const filterInputClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['w-full'], s['bg-white'], s['placeholder-gray-400'], s['transition-all']);
const filterSelectClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['w-full'], s['bg-white'], s['cursor-pointer'], s['transition-all']);
const comparatorSelectClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['bg-white'], s['cursor-pointer'], s['w-12']);
const dateInputClass = cn(s['leading-4'], s['p-1'], s['focus:outline-none'], s['focus:ring'], s['shadow-sm'], s['text-xs'], s['font-normal'], s['border'], s['border-gray-300'], s['rounded-md'], s['text-black'], s['bg-white'], s['flex-1'], s['transition-all']);
const filterContainerClass = cn(s['flex'], s['flex-row'], s['gap-1'], s['items-center'], s['w-full']);
function numberColumnFilterSnapshot(num, comparator) {
    const n = (num ?? '').trim();
    if (!n)
        return '';
    return `${n}\0${comparator}`;
}
/** Serialized committed date-filter value for dedupe / sync when `isClickFilter` */
function dateFilterCommittedSnapshot(payload) {
    if (!payload ||
        (!(payload.startDate || '').trim() && !(payload.endDate || '').trim())) {
        return '';
    }
    return JSON.stringify({
        s: payload.startDate || '',
        e: payload.endDate || '',
        d: !!payload.diffFlag,
        c: payload.comparator || '',
    });
}
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
const TextFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options, isClickFilter: isClickFilterProp, }) => {
    const value = useFilterValueFromContext(valueProp);
    const { placeholder, className, style, defaultValue, delay = 500, getFilter, onFilter: onFilterOption, id, disabled, } = options || {};
    const clickApplyMode = useClickApplyMode(isClickFilterProp, options?.isClickFilter);
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
    /** Committed value when {@link clickApplyMode} — keeps draft input while parent filter is stale */
    const appliedTextSnapshotRef = useRef(value || defaultValue || '');
    // Keep refs in sync
    useEffect(() => {
        internalValueRef.current = internalValue;
    }, [internalValue]);
    useEffect(() => {
        onChangeRef.current = onChangeCallback;
        onFilterRef.current = onFilter;
    }, [onChangeCallback, onFilter]);
    // Sync internal value when external value changes (e.g., from clear all filters)
    useEffect(() => {
        const externalValue = value || '';
        if (clickApplyMode) {
            if (externalValue !== appliedTextSnapshotRef.current) {
                appliedTextSnapshotRef.current = externalValue;
                setInternalValue(externalValue);
            }
            return;
        }
        if (externalValue !== lastInternalValueRef.current) {
            setInternalValue(externalValue);
            lastInternalValueRef.current = externalValue;
        }
    }, [value, clickApplyMode]);
    // Debounce the internal value
    const [debouncedValue, cancelTextDebounce] = useDebouncedValue(internalValue, { wait: delay });
    useEffect(() => {
        if (clickApplyMode)
            cancelTextDebounce();
    }, [clickApplyMode, cancelTextDebounce]);
    // Propagate debounced value to parent (standard mode only)
    useEffect(() => {
        if (clickApplyMode)
            return;
        lastInternalValueRef.current = debouncedValue || '';
        onChangeRef.current(debouncedValue || null);
        onFilterRef.current?.(debouncedValue);
    }, [debouncedValue, clickApplyMode]);
    const commitTextDraft = useCallback(() => {
        const v = internalValueRef.current || '';
        if (v === appliedTextSnapshotRef.current)
            return;
        appliedTextSnapshotRef.current = v;
        lastInternalValueRef.current = v;
        onChangeRef.current(v || null);
        onFilterRef.current?.(v);
    }, []);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter(createCallableFilterHandle({
                getValue: () => internalValueRef.current,
                setValue: (newValue) => {
                    const normalized = newValue || '';
                    setInternalValue(normalized);
                    appliedTextSnapshotRef.current = normalized;
                    lastInternalValueRef.current = normalized;
                    onChangeRef.current(newValue || null);
                    onFilterRef.current?.(newValue);
                },
                clear: () => {
                    appliedTextSnapshotRef.current = '';
                    setInternalValue('');
                    lastInternalValueRef.current = '';
                    onChangeRef.current(null);
                    onFilterRef.current?.('');
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    // Track if input should be focused (user is actively typing)
    const hasFocusRef = useRef(false);
    const handleChange = useCallback((e) => {
        const v = e.target.value;
        internalValueRef.current = v;
        setInternalValue(v);
    }, []);
    const handleFocus = useCallback(() => {
        hasFocusRef.current = true;
    }, []);
    const handleBlur = useCallback(() => {
        hasFocusRef.current = false;
    }, []);
    const handleKeyDownText = useCallback((e) => {
        if (!clickApplyMode || e.key !== 'Enter')
            return;
        e.preventDefault();
        commitTextDraft();
    }, [clickApplyMode, commitTextDraft]);
    useEffect(() => {
        if (hasFocusRef.current && inputRef.current) {
            requestAnimationFrame(() => {
                if (hasFocusRef.current && inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
    });
    return (_jsx("input", { ref: inputRef, type: "text", id: id, "data-filter-field": column.dataField, value: internalValue, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDownText, placeholder: placeholder || column.filterPlaceholder || `Filter ${column.text}...`, className: className || filterInputClass, style: style, disabled: disabled }));
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
const NumberFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options, isClickFilter: isClickFilterProp, }) => {
    const value = useFilterValueFromContext(valueProp);
    const { placeholder, className, style, defaultValue, delay = 500, defaultComparator = '=', allowDecimal = true, getFilter, onFilter: onFilterOption, id, disabled, hideComparator, comparators = ['=', '!=', '>', '>=', '<', '<='], } = options || {};
    const clickApplyMode = useClickApplyMode(isClickFilterProp, options?.isClickFilter);
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
    const lastNumberRef = useRef(number);
    const lastComparatorRef = useRef(comparator);
    const appliedNumberSnapshotRef = useRef(numberColumnFilterSnapshot(value?.number || defaultValue?.number || '', value?.comparator || defaultValue?.comparator || defaultComparator));
    useEffect(() => {
        numberRef.current = number;
        comparatorRef.current = comparator;
    }, [number, comparator]);
    useEffect(() => {
        onChangeRef.current = onChangeCallback;
        onFilterRef.current = onFilter;
    }, [onChangeCallback, onFilter]);
    useEffect(() => {
        const externalNumber = value?.number || '';
        const externalComparator = value?.comparator || defaultComparator;
        if (clickApplyMode) {
            const snap = numberColumnFilterSnapshot(externalNumber, externalComparator);
            if (snap !== appliedNumberSnapshotRef.current) {
                appliedNumberSnapshotRef.current = snap;
                setNumber(externalNumber);
                setComparator(externalComparator);
            }
            return;
        }
        if (externalNumber !== lastNumberRef.current) {
            setNumber(externalNumber);
            lastNumberRef.current = externalNumber;
        }
        if (externalComparator !== lastComparatorRef.current) {
            setComparator(externalComparator);
            lastComparatorRef.current = externalComparator;
        }
    }, [value, defaultComparator, clickApplyMode]);
    const [debouncedNumber, cancelNumberDebounce] = useDebouncedValue(number, {
        wait: delay,
    });
    useEffect(() => {
        if (clickApplyMode)
            cancelNumberDebounce();
    }, [clickApplyMode, cancelNumberDebounce]);
    useEffect(() => {
        if (clickApplyMode)
            return;
        lastNumberRef.current = debouncedNumber || '';
        lastComparatorRef.current = comparatorRef.current;
        const newValue = debouncedNumber
            ? { number: debouncedNumber, comparator: comparatorRef.current }
            : null;
        onChangeRef.current(newValue);
        onFilterRef.current?.(debouncedNumber || null);
    }, [debouncedNumber, clickApplyMode]);
    const commitNumberDraft = useCallback(() => {
        const num = (numberRef.current || '').trim();
        const comp = comparatorRef.current;
        const nextSnap = numberColumnFilterSnapshot(num, comp);
        if (nextSnap === appliedNumberSnapshotRef.current)
            return;
        if (!num) {
            appliedNumberSnapshotRef.current = '';
            lastNumberRef.current = '';
            lastComparatorRef.current = defaultComparator;
            comparatorRef.current = defaultComparator;
            setComparator(defaultComparator);
            onChangeRef.current(null);
            onFilterRef.current?.(null);
            return;
        }
        appliedNumberSnapshotRef.current = nextSnap;
        lastNumberRef.current = num;
        lastComparatorRef.current = comp;
        onChangeRef.current({ number: num, comparator: comp });
        onFilterRef.current?.(num);
    }, [defaultComparator]);
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
                        comparatorRef.current = comp;
                        setNumber(num);
                        setComparator(comp);
                        appliedNumberSnapshotRef.current = numberColumnFilterSnapshot(num, comp);
                        onChangeRef.current({ number: num, comparator: comp });
                        onFilterRef.current?.(num);
                    }
                    else {
                        appliedNumberSnapshotRef.current = '';
                        comparatorRef.current = defaultComparator;
                        setNumber('');
                        onChangeRef.current(null);
                        onFilterRef.current?.(null);
                    }
                },
                clear: () => {
                    appliedNumberSnapshotRef.current = '';
                    comparatorRef.current = defaultComparator;
                    setNumber('');
                    setComparator(defaultComparator);
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
    const hasFocusRef = useRef(false);
    const handleFocus = useCallback(() => {
        hasFocusRef.current = true;
    }, []);
    const handleBlur = useCallback(() => {
        hasFocusRef.current = false;
    }, []);
    useEffect(() => {
        if (hasFocusRef.current && inputRef.current) {
            requestAnimationFrame(() => {
                if (hasFocusRef.current && inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
    });
    const handleKeyDownNumber = useCallback((e) => {
        if (!clickApplyMode || e.key !== 'Enter')
            return;
        e.preventDefault();
        commitNumberDraft();
    }, [clickApplyMode, commitNumberDraft]);
    const handleComparatorChange = useCallback((newComparator) => {
        comparatorRef.current = newComparator;
        setComparator(newComparator);
        if (clickApplyMode)
            return;
        if (number) {
            onChangeRef.current({ number, comparator: newComparator });
            onFilterRef.current?.(number);
        }
    }, [number, clickApplyMode]);
    const comparatorSymbols = {
        '=': '=',
        '!=': '≠',
        '>': '>',
        '>=': '≥',
        '<': '<',
        '<=': '≤',
    };
    const resolvedPlaceholder = placeholder ||
        column?.filter?.props?.placeholder ||
        column.filterPlaceholder ||
        'Number...';
    const handleInputChange = useCallback((e) => {
        const val = e.target.value;
        const pattern = allowDecimal ? /^[0-9.,]*$/ : /^[0-9]*$/;
        if (!pattern.test(val))
            return;
        numberRef.current = val;
        setNumber(val);
    }, [allowDecimal]);
    return (_jsxs("div", { className: filterContainerClass, children: [!hideComparator && (_jsx("select", { value: comparator, onChange: (e) => handleComparatorChange(e.target.value), onKeyDown: clickApplyMode
                    ? (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            commitNumberDraft();
                        }
                    }
                    : undefined, disabled: disabled, className: className || comparatorSelectClass, children: comparators.map((comp) => (_jsx("option", { value: comp, children: comparatorSymbols[comp] || comp }, comp))) })), _jsx("input", { ref: inputRef, type: "text", id: id, "data-filter-field": column.dataField, value: number, onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDownNumber, placeholder: resolvedPlaceholder, className: className || filterInputClass, style: style, disabled: disabled })] }));
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
const DateFilterComponent = ({ column, value: valueProp, onChange, onFilter: onFilterProp, options, isClickFilter: isClickFilterProp, }) => {
    const value = useFilterValueFromContext(valueProp);
    const { className, style, defaultValue, defaultComparator = '=', defaultRangeMode = false, getFilter, onFilter: onFilterOption, id, disabled, minDate, maxDate, } = options || {};
    const clickApplyMode = useClickApplyMode(isClickFilterProp, options?.isClickFilter);
    const handleChange = onChange || onFilterProp || (() => { });
    const onFilter = onFilterOption;
    const [startDate, setStartDate] = useState(value?.startDate || defaultValue?.startDate || '');
    const [endDate, setEndDate] = useState(value?.endDate || defaultValue?.endDate || '');
    const [diffFlag, setDiffFlag] = useState(value?.diffFlag ?? defaultValue?.diffFlag ?? defaultRangeMode);
    const [comparator, setComparator] = useState(value?.comparator || defaultValue?.comparator || defaultComparator);
    const stateRef = useRef({ startDate, endDate, diffFlag, comparator });
    const onChangeRef = useRef(handleChange);
    const onFilterRef = useRef(onFilter);
    const lastValuesRef = useRef({
        startDate,
        endDate,
        diffFlag,
        comparator,
    });
    const appliedDateSnapshotRef = useRef(dateFilterCommittedSnapshot(value?.startDate?.trim() || value?.endDate?.trim()
        ? {
            startDate: value?.startDate || '',
            endDate: value?.endDate || '',
            diffFlag: value?.diffFlag ?? defaultRangeMode,
            comparator: value?.comparator || defaultComparator,
        }
        : null));
    useEffect(() => {
        stateRef.current = { startDate, endDate, diffFlag, comparator };
    }, [startDate, endDate, diffFlag, comparator]);
    useEffect(() => {
        onChangeRef.current = handleChange;
        onFilterRef.current = onFilter;
    }, [handleChange, onFilter]);
    useEffect(() => {
        const externalStartDate = value?.startDate || '';
        const externalEndDate = value?.endDate || '';
        const externalDiffFlag = value?.diffFlag ?? defaultRangeMode;
        const externalComparator = value?.comparator || defaultComparator;
        if (clickApplyMode) {
            const extPayload = externalStartDate.trim() || externalEndDate.trim()
                ? {
                    startDate: externalStartDate,
                    endDate: externalEndDate,
                    diffFlag: externalDiffFlag,
                    comparator: externalComparator,
                }
                : null;
            const extSnap = dateFilterCommittedSnapshot(extPayload);
            if (extSnap !== appliedDateSnapshotRef.current) {
                appliedDateSnapshotRef.current = extSnap;
                setStartDate(externalStartDate);
                setEndDate(externalEndDate);
                setDiffFlag(externalDiffFlag);
                setComparator(externalComparator);
                lastValuesRef.current = {
                    startDate: externalStartDate,
                    endDate: externalEndDate,
                    diffFlag: externalDiffFlag,
                    comparator: externalComparator,
                };
            }
            return;
        }
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
    }, [value, defaultRangeMode, defaultComparator, clickApplyMode]);
    const [debouncedStartDate, cancelStartDebounce] = useDebouncedValue(startDate, { wait: 500 });
    const [debouncedEndDate, cancelEndDebounce] = useDebouncedValue(endDate, {
        wait: 500,
    });
    useEffect(() => {
        if (clickApplyMode) {
            cancelStartDebounce();
            cancelEndDebounce();
        }
    }, [clickApplyMode, cancelStartDebounce, cancelEndDebounce]);
    useEffect(() => {
        if (clickApplyMode)
            return;
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
    }, [debouncedStartDate, debouncedEndDate, diffFlag, comparator, clickApplyMode]);
    const commitDateDraft = useCallback(() => {
        const { startDate: s, endDate: e, diffFlag: d, comparator: c } = stateRef.current;
        const payload = (s || '').trim() || (e || '').trim()
            ? { startDate: s, endDate: e, diffFlag: d, comparator: c }
            : null;
        const snap = dateFilterCommittedSnapshot(payload);
        if (snap === appliedDateSnapshotRef.current)
            return;
        appliedDateSnapshotRef.current = snap;
        lastValuesRef.current = {
            startDate: s,
            endDate: e,
            diffFlag: d,
            comparator: c,
        };
        onChangeRef.current(payload);
        onFilterRef.current?.(payload);
    }, []);
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
                        const s = newValue.startDate || '';
                        const e = newValue.endDate || '';
                        const d = newValue.diffFlag ?? defaultRangeMode;
                        const c = newValue.comparator || defaultComparator;
                        setStartDate(s);
                        setEndDate(e);
                        setDiffFlag(d);
                        setComparator(c);
                        const payload = (s || '').trim() || (e || '').trim()
                            ? { startDate: s, endDate: e, diffFlag: d, comparator: c }
                            : null;
                        appliedDateSnapshotRef.current =
                            dateFilterCommittedSnapshot(payload);
                        lastValuesRef.current = {
                            startDate: s,
                            endDate: e,
                            diffFlag: d,
                            comparator: c,
                        };
                        onChangeRef.current(newValue);
                        onFilterRef.current?.(newValue);
                    }
                    else {
                        appliedDateSnapshotRef.current = '';
                        setStartDate('');
                        setEndDate('');
                        lastValuesRef.current = {
                            startDate: '',
                            endDate: '',
                            diffFlag: defaultRangeMode,
                            comparator: defaultComparator,
                        };
                        onChangeRef.current(null);
                        onFilterRef.current?.(null);
                    }
                },
                clear: () => {
                    appliedDateSnapshotRef.current = '';
                    setStartDate('');
                    setEndDate('');
                    setDiffFlag(defaultRangeMode);
                    setComparator(defaultComparator);
                    lastValuesRef.current = {
                        startDate: '',
                        endDate: '',
                        diffFlag: defaultRangeMode,
                        comparator: defaultComparator,
                    };
                    onChangeRef.current(null);
                    onFilterRef.current?.(null);
                },
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilter]);
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
    const handleDateEnterKeyDown = useCallback((e) => {
        if (!clickApplyMode || e.key !== 'Enter')
            return;
        e.preventDefault();
        commitDateDraft();
    }, [clickApplyMode, commitDateDraft]);
    const [isExpanded, setIsExpanded] = useState(false);
    if (!isExpanded) {
        return (_jsxs("div", { className: cn(s['flex'], s['flex-row'], s['gap-2'], s['items-center'], s['cursor-pointer']), onClick: () => setIsExpanded(true), title: "Click to open date filter", children: [_jsx("span", { className: cn(s['text-white'], s['text-xs'], s['font-normal']), children: column.text }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: { color: 'white', cursor: 'pointer', flexShrink: 0 }, children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] })] }));
    }
    return (_jsxs("div", { className: cn(filterContainerClass, className), style: style, children: [_jsx("button", { type: "button", onClick: handleDiffFlagChange, title: "Date range mode", disabled: disabled, className: cn(s['text-xs'], s['font-normal'], s['px-2'], s['py-1'], s['border'], s['rounded-md'], s['cursor-pointer'], s['whitespace-nowrap'], s['transition-all'], s['focus:outline-none'], diffFlag
                    ? cn(s['bg-blue-500'], s['text-white'], s['border-blue-500'])
                    : cn(s['bg-white'], s['text-black'], s['border-gray-300'], s['hover:bg-gray-50'])), children: diffFlag ? 'Range' : 'Single' }), !diffFlag && (_jsxs("select", { value: comparator, onChange: handleComparatorChange, onKeyDown: clickApplyMode ? handleDateEnterKeyDown : undefined, disabled: disabled, className: comparatorSelectClass, children: [_jsx("option", { value: "=", children: "=" }), _jsx("option", { value: ">=", children: "\u2265" }), _jsx("option", { value: "<", children: "<" })] })), _jsx("input", { type: "date", id: id, "data-filter-field": column.dataField, value: startDate, onChange: handleStartDateChange, onKeyDown: clickApplyMode ? handleDateEnterKeyDown : undefined, disabled: disabled, min: minDate, max: maxDate, className: dateInputClass }), diffFlag && (_jsxs(_Fragment, { children: [_jsx("span", { className: cn(s['text-xs'], s['text-gray-500'], s['font-normal']), children: "to" }), _jsx("input", { type: "date", value: endDate, onChange: handleEndDateChange, onKeyDown: clickApplyMode ? handleDateEnterKeyDown : undefined, disabled: disabled, min: minDate, max: maxDate, className: dateInputClass, "data-filter-field": column.dataField })] })), _jsx("button", { type: "button", onClick: () => {
                    setIsExpanded(false);
                    setStartDate('');
                    setEndDate('');
                    setDiffFlag(defaultRangeMode);
                    setComparator(defaultComparator);
                    appliedDateSnapshotRef.current = '';
                    lastValuesRef.current = {
                        startDate: '',
                        endDate: '',
                        diffFlag: defaultRangeMode,
                        comparator: defaultComparator,
                    };
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
