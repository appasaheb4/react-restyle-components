import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable  */
import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '../../Icon/Icon';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
import { debounce } from '@techabl/core-utils';
// Inline styles for animations (CSS-in-JS approach for portability)
const animationStyles = {
    dropdown: {
        base: {
            transformOrigin: 'top center',
            transition: 'opacity 200ms ease-out, transform 200ms ease-out',
        },
        entering: {
            opacity: 1,
            transform: 'scaleY(1) translateY(0)',
        },
        exiting: {
            opacity: 0,
            transform: 'scaleY(0.95) translateY(-8px)',
        },
    },
    listItem: {
        base: {
            transition: 'opacity 180ms ease-out, transform 180ms ease-out, background-color 150ms ease',
            cursor: 'pointer',
        },
        visible: {
            opacity: 1,
            transform: 'translateX(0)',
        },
        hidden: {
            opacity: 0,
            transform: 'translateX(-12px)',
        },
        hover: {
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
        },
    },
    skeleton: {
        base: {
            background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: '4px',
        },
    },
    spinner: {
        animation: 'spin 0.8s linear infinite',
        border: '2px solid #e5e7eb',
        borderTopColor: '#3b82f6',
        borderRadius: '50%',
        width: '16px',
        height: '16px',
    },
    fadeContent: {
        base: {
            transition: 'opacity 200ms ease-out',
        },
        loading: {
            opacity: 0.5,
        },
        ready: {
            opacity: 1,
        },
    },
};
// Inject keyframes for shimmer animation
const injectKeyframes = () => {
    const styleId = 'autocomplete-animations';
    if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `;
        document.head.appendChild(style);
    }
};
// Skeleton loader component
const SkeletonItem = ({ delay = 0 }) => (_jsxs("div", { style: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 8px',
        gap: '12px',
        animation: `fadeInUp 300ms ease-out ${delay}ms both`,
    }, children: [_jsx("div", { style: {
                ...animationStyles.skeleton.base,
                width: '60px',
                height: '14px',
            } }), _jsx("div", { style: {
                ...animationStyles.skeleton.base,
                flex: 1,
                height: '14px',
                maxWidth: '180px',
            } })] }));
// Loading spinner component
const LoadingSpinner = () => (_jsx("div", { style: animationStyles.spinner, role: "status", "aria-label": "Loading" }));
export const AutoCompleteFilterSingleSelectMultiFieldsDisplay = ({ disable = false, loader = false, displayValue = '', placeholder = 'Search...', data, hasError = false, className, posstion = 'absolute', keyboard = 'text', onFilter, onSelect, onBlur, }) => {
    const [value, setValue] = useState(displayValue);
    const [options, setOptions] = useState(data.list);
    const [isListOpen, setIsListOpen] = useState(false);
    const [filterValue, setFilterValue] = useState();
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isFiltering, setIsFiltering] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    // Inject animation keyframes on mount
    useEffect(() => {
        injectKeyframes();
    }, []);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && isListOpen) {
                    handleCloseDropdown();
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isListOpen]);
    };
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    // Smooth dropdown open/close with animation
    const handleOpenDropdown = useCallback(() => {
        setIsListOpen(true);
        // Small delay to trigger CSS transition
        requestAnimationFrame(() => {
            setShowDropdown(true);
        });
    }, []);
    const handleCloseDropdown = useCallback(() => {
        setShowDropdown(false);
        // Wait for animation to complete before hiding
        setTimeout(() => {
            setIsListOpen(false);
        }, 200);
    }, []);
    // Staggered animation for list items
    useEffect(() => {
        if (isListOpen && options.length > 0 && !loader) {
            setVisibleItems(new Set());
            // Stagger the appearance of items
            options.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems((prev) => new Set([...prev, index]));
                }, Math.min(index * 30, 300)); // Cap at 300ms total
            });
        }
    }, [isListOpen, options, loader]);
    // Smooth transition when data changes
    useEffect(() => {
        if (isFiltering) {
            // Brief fade out during filter
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setOptions(data.list);
                setIsAnimating(false);
                setIsFiltering(false);
                // Re-trigger staggered animation
                setVisibleItems(new Set());
                data.list.forEach((_, index) => {
                    setTimeout(() => {
                        setVisibleItems((prev) => new Set([...prev, index]));
                    }, Math.min(index * 25, 200));
                });
            }, 150);
            return () => clearTimeout(timer);
        }
        else {
            setOptions(data.list);
        }
    }, [data]);
    useEffect(() => {
        setValue(displayValue);
    }, [displayValue]);
    const onChange = (e) => {
        const search = e.target.value;
        setValue(search);
        setFilterValue(search);
        setIsFiltering(true);
        const filteredOptions = data.list.filter((item) => data.displayKey.some((key) => item[key]?.toString().toLowerCase().includes(search.toLowerCase())));
        // Animate transition
        setIsAnimating(true);
        setTimeout(() => {
            setOptions(filteredOptions);
            setIsAnimating(false);
            setIsFiltering(false);
            // Re-animate visible items
            setVisibleItems(new Set());
            filteredOptions.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems((prev) => new Set([...prev, index]));
                }, Math.min(index * 25, 200));
            });
        }, 100);
        debounce(() => {
            onFilter && onFilter(search);
        });
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.target.value;
            debounce(() => {
                onFilter && onFilter(search);
            });
        }
    };
    const onKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            if (options.length > 0) {
                const selectedItem = options.find((item) => item.labId === Number(value));
                if (selectedItem) {
                    setValue(data.displayKey.map((key) => `${selectedItem[key]}`).join(' - '));
                    handleCloseDropdown();
                    onSelect && onSelect(selectedItem);
                }
            }
        }
    };
    const calculateMaxHeight = () => {
        if (inputRef.current) {
            const inputRect = inputRef.current.getBoundingClientRect();
            const availableHeight = window.innerHeight - inputRect.bottom - 20;
            return availableHeight;
        }
        return 'calc(100vh - 140px)';
    };
    const handleSelectItem = useCallback((item) => {
        setValue(data.displayKey
            .map((key) => item[key])
            .filter((value) => value !== null && value !== undefined)
            .join(' - '));
        handleCloseDropdown();
        onSelect && onSelect(item);
    }, [data.displayKey, onSelect, handleCloseDropdown]);
    // Show loading state
    const isLoading = loader || isFiltering;
    return (_jsx(_Fragment, { children: _jsxs("div", { ref: wrapperRef, className: cn(s['w-full'], s['relative']), children: [_jsxs("div", { className: cn(s['flex'], s['p-2'], s['leading-4'], s['focus:outline-none'], s['focus:ring'], s['w-full'], s['shadow-sm'], s['sm:text-base'], s['border'], s['rounded-md'], s['transition-all'], s['duration-200'], {
                        [s['border-red']]: hasError,
                        [s['border-gray-300']]: !hasError,
                        [s['dark:text-black']]: true,
                    }), style: {
                        transition: 'border-color 200ms ease, box-shadow 200ms ease',
                    }, children: [_jsx("input", { ref: inputRef, placeholder: placeholder, type: keyboard, value: value, className: cn(s['w-full'], s['focus:outline-none'], s['bg-none'], s['dark:text-black'], className), onKeyUp: onKeyUp, onChange: onChange, onClick: handleOpenDropdown, disabled: disable, onMouseDown: () => setValue(''), onBlur: (e) => onBlur && onBlur(e), onKeyDown: onKeyDown }), _jsxs("div", { style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }, children: [isLoading && _jsx(LoadingSpinner, {}), _jsx("div", { style: {
                                        transition: 'transform 200ms ease',
                                        transform: isListOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }, children: _jsx(Icon, { nameIcon: "FaChevronDown", propsIcon: {
                                            size: 16,
                                        } }) })] })] }), isListOpen && (_jsx("div", { className: cn(s['absolute'], s['w-full'], s['bg-white'], s['rounded-md'], s['shadow-lg'], s['overflow-hidden']), style: {
                        ...animationStyles.dropdown.base,
                        ...(showDropdown
                            ? animationStyles.dropdown.entering
                            : animationStyles.dropdown.exiting),
                        zIndex: 500,
                        marginTop: '4px',
                        border: '1px solid #e5e7eb',
                    }, children: _jsx("div", { className: cn(s['overflow-y-auto'], s['p-1']), style: {
                            maxHeight: `${calculateMaxHeight()}px`,
                            ...animationStyles.fadeContent.base,
                            ...(isAnimating
                                ? animationStyles.fadeContent.loading
                                : animationStyles.fadeContent.ready),
                        }, children: loader ? (
                        // Skeleton loading state
                        _jsx("div", { style: { padding: '4px 0' }, children: [0, 1, 2, 3, 4].map((i) => (_jsx(SkeletonItem, { delay: i * 50 }, i))) })) : options.length > 0 ? (_jsx("ul", { style: { listStyle: 'none', margin: 0, padding: 0 }, children: options.map((item, index) => (_jsx("li", { className: cn(s['flex'], s['items-center']), onClick: () => handleSelectItem(item), onMouseEnter: () => setHoveredIndex(index), onMouseLeave: () => setHoveredIndex(null), style: {
                                    ...animationStyles.listItem.base,
                                    ...(visibleItems.has(index)
                                        ? animationStyles.listItem.visible
                                        : animationStyles.listItem.hidden),
                                    ...(hoveredIndex === index
                                        ? animationStyles.listItem.hover
                                        : {}),
                                    padding: '10px 12px',
                                    borderRadius: '6px',
                                    margin: '2px 0',
                                    transitionDelay: `${Math.min(index * 20, 150)}ms`,
                                }, children: _jsx("label", { className: cn(s['text-gray-700']), style: {
                                        textOverflow: 'ellipsis',
                                        minWidth: 0,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                    }, title: data.displayKey
                                        .map((key) => item[key])
                                        .join(' - '), children: data.displayKey
                                        .map((key) => item[key])
                                        .filter((value) => value !== null && value !== undefined)
                                        .join(' - ') }) }, index))) })) : (_jsx("div", { style: {
                                padding: '16px',
                                textAlign: 'center',
                                color: '#6b7280',
                                animation: 'fadeInUp 200ms ease-out',
                            }, children: _jsx("span", { children: "No results found" }) })) }) }))] }) }));
};
