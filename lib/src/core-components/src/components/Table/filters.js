'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef } from 'react';
import { styled, css } from 'styled-components';
import { tokens } from '../../utils/designTokens';
import { useDebouncedValue } from '../../utils/hooks/useDebouncedValue';
// Styled components for filters
const FilterContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 3px;
`;
const FilterInputBase = styled.input `
  width: 100%;
  height: 22px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: normal;
  color: #000000;
  border: 1px solid ${tokens.outline || '#e2e8f0'};
  border-radius: 2px;
  background: white;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${tokens.primary || '#94a3b8'};
  }

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
    box-shadow: 0 0 0 1px
      ${tokens.primary ? `${tokens.primary}20` : '#3b82f620'};
  }

  &::placeholder {
    color: ${tokens.onSurface ? `${tokens.onSurface}50` : '#94a3af'};
    font-size: 9px;
  }
`;
const FilterSelectBase = styled.select `
  width: 100%;
  height: 22px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: normal;
  color: #000000;
  border: 1px solid ${tokens.outline || '#e2e8f0'};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${tokens.primary || '#94a3b8'};
  }

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
    box-shadow: 0 0 0 1px
      ${tokens.primary ? `${tokens.primary}20` : '#3b82f620'};
  }
`;
const ComparatorSelect = styled.select `
  width: 38px;
  height: 22px;
  padding: 0 2px;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid ${tokens.outline || '#e2e8f0'};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  flex-shrink: 0;
  text-align: center;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${tokens.primary || '#94a3b8'};
  }

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
`;
const DateInput = styled.input `
  flex: 1;
  height: 22px;
  padding: 0 4px;
  font-size: 10px;
  border: 1px solid ${tokens.outline || '#e2e8f0'};
  border-radius: 2px;
  background: white;
  min-width: 80px;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${tokens.primary || '#94a3b8'};
  }

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
    box-shadow: 0 0 0 1px
      ${tokens.primary ? `${tokens.primary}20` : '#3b82f620'};
  }
`;
const ToggleButton = styled.button `
  height: 22px;
  padding: 0 5px;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid ${tokens.outline || '#e2e8f0'};
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${({ $active }) => $active
    ? css `
          background: ${tokens.primary || '#3b82f6'};
          color: white;
          border-color: ${tokens.primary || '#3b82f6'};
        `
    : css `
          background: white;
          color: ${tokens.onSurface || '#374151'};

          &:hover {
            background: #f8fafc;
            border-color: ${tokens.primary || '#94a3b8'};
          }
        `}
`;
/**
 * Internal Text filter component with options support
 */
const TextFilterComponent = ({ column, value, onChange, options }) => {
    const { placeholder, className, style, defaultValue, delay = 500, getFilter, onFilter, id, disabled, } = options || {};
    // Local state for immediate input updates (maintains focus)
    const [internalValue, setInternalValue] = useState(value || defaultValue || '');
    const internalValueRef = useRef(internalValue);
    const inputRef = useRef(null);
    const onChangeRef = useRef(onChange);
    const onFilterRef = useRef(onFilter);
    // Track if the last change was from user input (internal) vs external (e.g., clear all)
    const lastInternalValueRef = useRef(internalValue);
    // Keep refs in sync
    useEffect(() => {
        internalValueRef.current = internalValue;
    }, [internalValue]);
    useEffect(() => {
        onChangeRef.current = onChange;
        onFilterRef.current = onFilter;
    }, [onChange, onFilter]);
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
            getFilter({
                get value() {
                    return internalValueRef.current;
                },
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
            });
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
    const inputStyle = {
        fontWeight: 400,
        ...style,
    };
    // If custom className is provided, use plain input to allow full CSS control
    if (className) {
        return (_jsx("input", { ref: inputRef, type: "text", id: id, "data-filter-field": column.dataField, value: internalValue, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, placeholder: placeholder || column.filterPlaceholder || `Filter ${column.text}...`, className: className, style: {
                width: '100%',
                fontWeight: 400,
                ...style,
            }, disabled: disabled }));
    }
    return (_jsx(FilterInputBase, { ref: inputRef, type: "text", id: id, "data-filter-field": column.dataField, value: internalValue, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, placeholder: placeholder || column.filterPlaceholder || `Filter ${column.text}...`, style: inputStyle, disabled: disabled }));
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
        return FilterWithOptions;
    }
    // Direct component usage
    const props = optionsOrProps;
    return _jsx(TextFilterComponent, { ...props });
}
/**
 * Internal Number filter component with options support
 */
const NumberFilterComponent = ({ column, value, onChange, options }) => {
    const { placeholder, className, style, defaultValue, delay = 500, defaultComparator = '=', allowDecimal = true, getFilter, onFilter, id, disabled, hideComparator, comparators = ['=', '!=', '>', '>=', '<', '<='], } = options || {};
    // Local state for immediate input updates (maintains focus)
    const [number, setNumber] = useState(value?.number || defaultValue?.number || '');
    const [comparator, setComparator] = useState(value?.comparator || defaultValue?.comparator || defaultComparator);
    const numberRef = useRef(number);
    const comparatorRef = useRef(comparator);
    const inputRef = useRef(null);
    const onChangeRef = useRef(onChange);
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
        onChangeRef.current = onChange;
        onFilterRef.current = onFilter;
    }, [onChange, onFilter]);
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
        onFilterRef.current?.(newValue);
    }, [debouncedNumber]);
    // Provide filter instance via getFilter callback - only on mount
    useEffect(() => {
        if (getFilter) {
            getFilter({
                get value() {
                    return numberRef.current
                        ? { number: numberRef.current, comparator: comparatorRef.current }
                        : null;
                },
                setValue: (newValue) => {
                    if (newValue) {
                        setNumber(newValue.number);
                        setComparator(newValue.comparator);
                        onChangeRef.current(newValue);
                        onFilterRef.current?.(newValue);
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
            });
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
            const newValue = { number, comparator: newComparator };
            onChangeRef.current(newValue);
            onFilterRef.current?.(newValue);
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
    const inputStyle = {
        flex: 1,
        fontWeight: 400,
        ...style,
    };
    const inputProps = {
        type: 'text',
        id,
        'data-filter-field': column.dataField,
        value: number,
        onChange: (e) => {
            const val = e.target.value;
            const pattern = allowDecimal ? /^[0-9.,]*$/ : /^[0-9]*$/;
            if (pattern.test(val)) {
                setNumber(val);
            }
        },
        onFocus: handleFocus,
        onBlur: handleBlur,
        placeholder: placeholder || column.filterPlaceholder || 'Number...',
        disabled,
    };
    return (_jsxs(FilterContainer, { children: [!hideComparator && (_jsx(ComparatorSelect, { value: comparator, onChange: (e) => handleComparatorChange(e.target.value), disabled: disabled, children: comparators.map((comp) => (_jsx("option", { value: comp, children: comparatorSymbols[comp] || comp }, comp))) })), className ? (_jsx("input", { ref: inputRef, ...inputProps, className: className, style: { flex: 1, width: '100%', fontWeight: 400, ...style } })) : (_jsx(FilterInputBase, { ref: inputRef, ...inputProps, style: inputStyle }))] }));
};
export function NumberFilter(optionsOrProps) {
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(NumberFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'NumberFilter';
        return FilterWithOptions;
    }
    const props = optionsOrProps;
    return _jsx(NumberFilterComponent, { ...props });
}
/**
 * Internal Date filter component with options support
 */
const DateFilterComponent = ({ column, value, onChange, options }) => {
    const { className, style, defaultValue, defaultComparator = '=', defaultRangeMode = false, getFilter, onFilter, id, disabled, minDate, maxDate, } = options || {};
    // Local state for immediate updates
    const [startDate, setStartDate] = useState(value?.startDate || defaultValue?.startDate || '');
    const [endDate, setEndDate] = useState(value?.endDate || defaultValue?.endDate || '');
    const [diffFlag, setDiffFlag] = useState(value?.diffFlag ?? defaultValue?.diffFlag ?? defaultRangeMode);
    const [comparator, setComparator] = useState(value?.comparator || defaultValue?.comparator || defaultComparator);
    const stateRef = useRef({ startDate, endDate, diffFlag, comparator });
    const onChangeRef = useRef(onChange);
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
        onChangeRef.current = onChange;
        onFilterRef.current = onFilter;
    }, [onChange, onFilter]);
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
            getFilter({
                get value() {
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
            });
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
    return (_jsxs(FilterContainer, { className: className, style: style, children: [_jsx(ToggleButton, { "$active": diffFlag, onClick: handleDiffFlagChange, title: "Date range mode", disabled: disabled, children: diffFlag ? 'Range' : 'Single' }), !diffFlag && (_jsxs(ComparatorSelect, { value: comparator, onChange: handleComparatorChange, disabled: disabled, style: { fontWeight: 400 }, children: [_jsx("option", { value: "=", children: "=" }), _jsx("option", { value: ">=", children: "\u2265" }), _jsx("option", { value: "<", children: "<" })] })), _jsx(DateInput, { type: "date", id: id, value: startDate, onChange: handleStartDateChange, disabled: disabled, min: minDate, max: maxDate, style: { fontWeight: 400 } }), diffFlag && (_jsxs(_Fragment, { children: [_jsx("span", { style: { color: '#6b7280', fontSize: 12, fontWeight: 400 }, children: "to" }), _jsx(DateInput, { type: "date", value: endDate, onChange: handleEndDateChange, disabled: disabled, min: minDate, max: maxDate, style: { fontWeight: 400 } })] }))] }));
};
export function DateFilter(optionsOrProps) {
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(DateFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'DateFilter';
        return FilterWithOptions;
    }
    const props = optionsOrProps;
    return _jsx(DateFilterComponent, { ...props });
}
/**
 * Internal Select filter component with options support
 */
const SelectFilterComponent = ({ column, value, onChange, options }) => {
    const { placeholder = 'All', className, style, defaultValue, delay = 300, options: customOptions, getFilter, onFilter, id, disabled, } = options || {};
    // Local state for immediate updates
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
    const selectedValueRef = useRef(selectedValue);
    const onChangeRef = useRef(onChange);
    const onFilterRef = useRef(onFilter);
    // Track last value sent to parent to prevent sync loops
    const lastValueRef = useRef(selectedValue);
    // Keep refs in sync with state
    useEffect(() => {
        selectedValueRef.current = selectedValue;
    }, [selectedValue]);
    useEffect(() => {
        onChangeRef.current = onChange;
        onFilterRef.current = onFilter;
    }, [onChange, onFilter]);
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
            getFilter({
                get value() {
                    return selectedValueRef.current || null;
                },
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
            });
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
    // If custom className is provided, use plain select to allow full CSS control
    if (className) {
        return (_jsx("select", { id: id, value: selectedValue, onChange: handleChange, className: className, style: { width: '100%', fontWeight: 400, ...style }, disabled: disabled, children: selectContent }));
    }
    return (_jsx(FilterSelectBase, { id: id, value: selectedValue, onChange: handleChange, style: { fontWeight: 400, ...style }, disabled: disabled, children: selectContent }));
};
export function SelectFilter(optionsOrProps) {
    if (!('column' in optionsOrProps) &&
        !('value' in optionsOrProps) &&
        !('onChange' in optionsOrProps)) {
        const options = optionsOrProps;
        const FilterWithOptions = (props) => (_jsx(SelectFilterComponent, { ...props, options: options }));
        FilterWithOptions.displayName = 'SelectFilter';
        return FilterWithOptions;
    }
    const props = optionsOrProps;
    return _jsx(SelectFilterComponent, { ...props });
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
        default:
            return TextFilter;
    }
};
