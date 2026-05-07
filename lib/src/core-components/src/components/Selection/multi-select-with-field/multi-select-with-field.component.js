import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef, useCallback } from 'react';
import _ from 'lodash';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { Icon } from '../../Icon/Icon';
function computeNextSelection(prev, item, displayField) {
    const isSelected = !_.isEmpty(prev.find((e) => e[displayField]?.toUpperCase() == item[displayField]?.toUpperCase()));
    if (isSelected) {
        return prev.filter((e) => e[displayField]?.toUpperCase() != item[displayField]?.toUpperCase());
    }
    return prev.length > 0 ? [...prev, item] : [item];
}
export const MultiSelectWithField = ({ displayField = '', options = [], selectedItems = [], hasError = false, onSelect, }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isListOpen, setIsListOpen] = useState(false);
    const wrapperRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target) &&
                isListOpen) {
                setIsListOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isListOpen]);
    useEffect(() => {
        setSelectedOptions(selectedItems);
    }, [selectedItems]);
    const toggleItem = useCallback((item) => {
        setSelectedOptions((prev) => {
            const next = computeNextSelection(prev, item, displayField);
            onSelect(next);
            return next;
        });
    }, [displayField, onSelect]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(s['relative'], s['flex'], s['dark:bg-boxdark'], s['dark:text-white'], s['flex-col'], s['w-full'], s['rounded-md'], s['border'], {
                [s['border-red']]: hasError,
                [s['border-gray-300']]: !hasError,
            }), ref: wrapperRef, children: [_jsxs("button", { type: "button", className: cn(s['flex'], s['w-full'], s['items-center'], s['justify-between'], s['px-3'], s['py-2'], s['shadow-sm'], s['bg-white'], s['dark:bg-boxdark'], s['rounded-md'], s['focus:outline-none'], s['transition-all'], s['text-left']), style: {
                        minHeight: '42px',
                        boxShadow: isListOpen && hasError
                            ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                            : isListOpen
                                ? '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    }, onClick: () => setIsListOpen(!isListOpen), children: [_jsx("span", { className: cn(s['text-sm'], s['dark:text-white']), children: selectedOptions?.length > 0
                                ? `${selectedOptions?.length} Items`
                                : 'Select' }), _jsx("span", { className: cn(s['flex-shrink-0'], s['flex'], s['items-center']), style: {
                                marginLeft: '8px',
                                transition: 'transform 0.2s ease',
                                transform: isListOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            }, children: _jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                    size: 14,
                                    color: '#6b7280',
                                } }) })] }), isListOpen && options?.length > 0 ? (_jsxs("div", { className: cn(s['absolute'], s['left-0'], s['right-0'], s['top-full'], s['mt-1'], s['z-50'], s['bg-white'], s['dark:bg-boxdark'], s['border'], s['border-gray-200'], s['rounded-lg'], s['shadow-lg'], s['overflow-hidden']), style: {
                        animation: 'multiSelectWithFieldFadeIn 0.15s ease-out',
                    }, children: [_jsx("style", { children: `
              @keyframes multiSelectWithFieldFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-4px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            ` }), _jsx("ul", { style: {
                                margin: 0,
                                padding: '4px 0',
                                listStyle: 'none',
                                maxHeight: '240px',
                                overflowY: 'auto',
                            }, children: options.map((item, index) => {
                                const isChecked = !_.isEmpty(selectedOptions?.find((e) => e[displayField]?.toUpperCase() ==
                                    item[displayField]?.toUpperCase()));
                                return (_jsxs("li", { role: "option", "aria-selected": isChecked, onClick: () => toggleItem(item), className: cn(s['flex'], s['items-center'], s['cursor-pointer']), style: {
                                        padding: '8px 12px',
                                        gap: '10px',
                                        transition: 'background-color 0.15s ease, color 0.15s ease',
                                        backgroundColor: isChecked
                                            ? 'rgb(239, 246, 255)'
                                            : 'transparent',
                                        color: isChecked
                                            ? 'rgb(29, 78, 216)'
                                            : 'rgb(55, 65, 81)',
                                    }, onMouseOver: (e) => {
                                        if (!isChecked) {
                                            e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        }
                                    }, onMouseOut: (e) => {
                                        e.currentTarget.style.backgroundColor = isChecked
                                            ? 'rgb(239, 246, 255)'
                                            : 'transparent';
                                    }, children: [_jsx("input", { type: "checkbox", checked: isChecked, onChange: () => toggleItem(item), onClick: (e) => e.stopPropagation(), style: {
                                                width: '16px',
                                                height: '16px',
                                                accentColor: '#3b82f6',
                                                cursor: 'pointer',
                                                flexShrink: 0,
                                            } }), _jsx("span", { style: {
                                                fontSize: '14px',
                                                fontWeight: isChecked ? 500 : 400,
                                                userSelect: 'none',
                                            }, className: cn(!isChecked && s['dark:text-white']), children: item[displayField] })] }, index));
                            }) })] })) : null] }) }));
};
