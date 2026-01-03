'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { styled, css } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Styled components for filters
const FilterContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
`;
const FilterInputBase = styled.input `
  width: 100%;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
  
  &::placeholder {
    color: ${tokens.onSurface ? `${tokens.onSurface}40` : '#9ca3af'};
  }
`;
const FilterSelectBase = styled.select `
  width: 100%;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
`;
const ComparatorSelect = styled.select `
  width: 50px;
  height: 28px;
  padding: 0 4px;
  font-size: 11px;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
  background: white;
  cursor: pointer;
  flex-shrink: 0;
  
  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
`;
const DateInput = styled.input `
  flex: 1;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
  background: white;
  min-width: 100px;
  
  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
`;
const ToggleButton = styled.button `
  height: 28px;
  padding: 0 8px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
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
        `}
`;
/**
 * Text filter component
 */
export const TextFilter = ({ column, value, onChange, }) => {
    return (_jsx(FilterInputBase, { type: "text", value: value || '', onChange: (e) => onChange(e.target.value), placeholder: column.filterPlaceholder || `Filter ${column.text}...` }));
};
/**
 * Number filter component with comparator
 */
export const NumberFilter = ({ column, value, onChange, }) => {
    const [number, setNumber] = useState(value?.number || '');
    const [comparator, setComparator] = useState(value?.comparator || '=');
    const handleChange = useCallback((newNumber, newComparator) => {
        setNumber(newNumber);
        setComparator(newComparator);
        if (newNumber) {
            onChange({ number: newNumber, comparator: newComparator });
        }
        else {
            onChange(null);
        }
    }, [onChange]);
    return (_jsxs(FilterContainer, { children: [_jsxs(ComparatorSelect, { value: comparator, onChange: (e) => handleChange(number, e.target.value), children: [_jsx("option", { value: "=", children: "=" }), _jsx("option", { value: "!=", children: "\u2260" }), _jsx("option", { value: ">", children: ">" }), _jsx("option", { value: ">=", children: "\u2265" }), _jsx("option", { value: "<", children: "<" }), _jsx("option", { value: "<=", children: "\u2264" })] }), _jsx(FilterInputBase, { type: "text", value: number, onChange: (e) => {
                    const val = e.target.value;
                    if (/^[0-9.,]*$/.test(val)) {
                        handleChange(val, comparator);
                    }
                }, placeholder: column.filterPlaceholder || 'Number...' })] }));
};
/**
 * Date filter component
 */
export const DateFilter = ({ column, value, onChange, }) => {
    const [startDate, setStartDate] = useState(value?.startDate || '');
    const [endDate, setEndDate] = useState(value?.endDate || '');
    const [diffFlag, setDiffFlag] = useState(value?.diffFlag || false);
    const [comparator, setComparator] = useState(value?.comparator || '=');
    const handleChange = useCallback((updates) => {
        const newValue = {
            startDate,
            endDate,
            diffFlag,
            comparator,
            ...updates,
        };
        if (updates.startDate !== undefined)
            setStartDate(updates.startDate);
        if (updates.endDate !== undefined)
            setEndDate(updates.endDate);
        if (updates.diffFlag !== undefined)
            setDiffFlag(updates.diffFlag);
        if (updates.comparator !== undefined)
            setComparator(updates.comparator);
        if (newValue.startDate || newValue.endDate) {
            onChange(newValue);
        }
        else {
            onChange(null);
        }
    }, [startDate, endDate, diffFlag, comparator, onChange]);
    return (_jsxs(FilterContainer, { children: [_jsx(ToggleButton, { "$active": diffFlag, onClick: () => handleChange({ diffFlag: !diffFlag }), title: "Date range mode", children: diffFlag ? 'Range' : 'Single' }), !diffFlag && (_jsxs(ComparatorSelect, { value: comparator, onChange: (e) => handleChange({ comparator: e.target.value }), children: [_jsx("option", { value: "=", children: "=" }), _jsx("option", { value: ">=", children: "\u2265" }), _jsx("option", { value: "<", children: "<" })] })), _jsx(DateInput, { type: "date", value: startDate, onChange: (e) => handleChange({ startDate: e.target.value }) }), diffFlag && (_jsxs(_Fragment, { children: [_jsx("span", { style: { color: '#6b7280', fontSize: 12 }, children: "to" }), _jsx(DateInput, { type: "date", value: endDate, onChange: (e) => handleChange({ endDate: e.target.value }) })] }))] }));
};
/**
 * Select filter component
 */
export const SelectFilter = ({ column, value, onChange, }) => {
    return (_jsxs(FilterSelectBase, { value: value || '', onChange: (e) => onChange(e.target.value || null), children: [_jsx("option", { value: "", children: "All" }), column.filterOptions?.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }));
};
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
