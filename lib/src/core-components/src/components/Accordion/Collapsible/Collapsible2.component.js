import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
// Beautiful chevron icon with circle background
const ChevronIcon = ({ isOpen, duration, variant }) => {
    const getIconColors = () => {
        switch (variant) {
            case 'elevated':
                return { bg: 'rgba(255,255,255,0.2)', stroke: '#ffffff' };
            case 'glass':
                return { bg: 'rgba(99,102,241,0.15)', stroke: '#6366f1' };
            case 'bordered':
                return { bg: '#f3f4f6', stroke: '#374151' };
            case 'minimal':
                return { bg: 'transparent', stroke: '#6b7280' };
            default:
                return { bg: '#e0e7ff', stroke: '#4f46e5' };
        }
    };
    const colors = getIconColors();
    return (_jsx("div", { style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: colors.bg,
            transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
        }, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: colors.stroke, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }) }));
};
// Variant style configurations
const getVariantStyles = (variant, isOpen) => {
    const baseButton = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '16px 20px',
        fontSize: '15px',
        fontWeight: 600,
        textAlign: 'left',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        gap: '12px',
    };
    const baseContent = {
        padding: '20px',
    };
    switch (variant) {
        case 'bordered':
            return {
                container: {
                    borderRadius: 16,
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                },
                button: {
                    ...baseButton,
                    backgroundColor: '#ffffff',
                    color: '#1f2937',
                    borderBottom: isOpen ? '1px solid #e5e7eb' : 'none',
                },
                content: {
                    ...baseContent,
                    backgroundColor: '#fafafa',
                },
            };
        case 'elevated':
            return {
                container: {
                    borderRadius: 20,
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.4)',
                },
                button: {
                    ...baseButton,
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                    color: '#ffffff',
                },
                content: {
                    ...baseContent,
                    backgroundColor: '#ffffff',
                },
            };
        case 'minimal':
            return {
                container: {
                    borderRadius: 12,
                },
                button: {
                    ...baseButton,
                    backgroundColor: 'transparent',
                    color: '#374151',
                    padding: '12px 16px',
                },
                content: {
                    ...baseContent,
                    backgroundColor: 'transparent',
                    padding: '12px 16px',
                },
            };
        case 'glass':
            return {
                container: {
                    borderRadius: 20,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15)',
                },
                button: {
                    ...baseButton,
                    backgroundColor: 'transparent',
                    color: '#1f2937',
                },
                content: {
                    ...baseContent,
                    backgroundColor: 'rgba(249, 250, 251, 0.5)',
                },
            };
        default: // 'default'
            return {
                container: {
                    borderRadius: 16,
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #f3f4f6',
                },
                button: {
                    ...baseButton,
                    backgroundColor: '#f8fafc',
                    color: '#1e293b',
                    borderBottom: isOpen ? '1px solid #e2e8f0' : 'none',
                },
                content: {
                    ...baseContent,
                    backgroundColor: '#ffffff',
                },
            };
    }
};
export const Collapsible = ({ label, labelClassName, className, classNames = {}, styles = {}, variant = 'default', animationDuration = 300, defaultOpen = false, isOpen: controlledOpen, hideIcon = false, icon, onExpand, onCollapse, children, }) => {
    const isControlled = controlledOpen !== undefined;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = isControlled ? controlledOpen : internalOpen;
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    // Measure content height - always observe for dynamic content changes
    useEffect(() => {
        const element = contentRef.current;
        if (!element)
            return;
        // Function to update height
        const updateHeight = () => {
            if (element) {
                // Use scrollHeight for accurate measurement including all children
                const newHeight = element.scrollHeight;
                setContentHeight(newHeight);
            }
        };
        // Initial measurement
        updateHeight();
        // ResizeObserver for size changes (window resize, content reflow)
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });
        resizeObserver.observe(element);
        // MutationObserver for DOM changes (dynamic content)
        const mutationObserver = new MutationObserver(() => {
            // Use requestAnimationFrame to ensure DOM has settled
            requestAnimationFrame(updateHeight);
        });
        mutationObserver.observe(element, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
        });
        return () => {
            resizeObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, [children]);
    const toggle = () => {
        const labelText = typeof label === 'string' ? label : '';
        if (open) {
            onCollapse?.(labelText);
        }
        else {
            onExpand?.(labelText);
        }
        if (!isControlled) {
            setInternalOpen(!open);
        }
    };
    const variantStyles = getVariantStyles(variant, open);
    // Hover styles per variant
    const getHoverButtonStyle = () => {
        if (!isHovered)
            return {};
        switch (variant) {
            case 'elevated':
                return { filter: 'brightness(1.1)' };
            case 'bordered':
                return { backgroundColor: '#f9fafb' };
            case 'minimal':
                return { backgroundColor: '#f3f4f6' };
            case 'glass':
                return { backgroundColor: 'rgba(99, 102, 241, 0.05)' };
            default:
                return { backgroundColor: '#f1f5f9' };
        }
    };
    return (_jsxs("div", { className: classNames.container, style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            transition: `all ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            ...variantStyles.container,
            ...styles.container,
        }, children: [_jsxs("button", { className: [labelClassName, classNames.button]
                    .filter(Boolean)
                    .join(' '), style: {
                    ...variantStyles.button,
                    ...getHoverButtonStyle(),
                    transition: `all ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    ...styles.button,
                }, type: "button", onClick: toggle, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onFocus: () => setIsHovered(true), onBlur: () => setIsHovered(false), "aria-expanded": open, children: [_jsx("span", { style: {
                            flex: 1,
                            lineHeight: 1.5,
                        }, children: label }), !hideIcon && (_jsx("div", { className: classNames.iconWrapper, children: icon || (_jsx(ChevronIcon, { isOpen: open, duration: animationDuration, variant: variant })) }))] }), _jsx("div", { style: {
                    height: open ? contentHeight : 0,
                    overflow: 'hidden',
                    transition: `height ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    opacity: open ? 1 : 0,
                }, children: _jsx("div", { ref: contentRef, className: [className, classNames.content].filter(Boolean).join(' '), style: {
                        ...variantStyles.content,
                        transform: open ? 'translateY(0)' : 'translateY(-10px)',
                        transition: `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                        ...styles.content,
                    }, children: children }) })] }));
};
