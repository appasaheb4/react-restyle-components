import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Modal = ({ visible, title = '', className = '', contentClassName = '', headerClassName = '', style = {}, contentStyle = {}, onClose, isAutoClose = false, autoCloseDelay = 1000, isAutoCloseOutside, size = 'md', position = 'center', showCloseButton = true, closeButton, isExpand = false, expandButton, onExpand, overlayOpacity = 0.5, overlayColor, zIndex = 11000, closeOnOverlayClick, closeOnEscape = true, showHeader = true, headerBgColor, headerTextColor, borderRadius = '0.5rem', maxWidth, contentPadding = '1rem', headerPadding = '1rem', animationDuration = 300, classNames = {}, styles = {}, children, }) => {
    // isAutoCloseOutside takes priority, then closeOnOverlayClick, default true
    const shouldCloseOnOutsideClick = isAutoCloseOutside ?? closeOnOverlayClick ?? true;
    const [showModal, setShowModal] = useState(visible);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
        if (visible) {
            setShowModal(true);
            setTimeout(() => setIsAnimating(true), 10);
        }
        else {
            setIsAnimating(false);
            setTimeout(() => setShowModal(false), animationDuration);
        }
    }, [visible, animationDuration]);
    useEffect(() => {
        if (showModal && isAutoClose) {
            const delay = typeof isAutoClose === 'number' ? isAutoClose : autoCloseDelay;
            const timer = setTimeout(() => {
                onClose && onClose();
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [showModal, isAutoClose, autoCloseDelay, onClose]);
    useEffect(() => {
        if (!closeOnEscape || !showModal)
            return;
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose && onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [showModal, closeOnEscape, onClose]);
    const handleOverlayClick = (e) => {
        if (shouldCloseOnOutsideClick && e.target === e.currentTarget) {
            onClose && onClose();
        }
    };
    const handleClose = () => {
        onClose && onClose();
    };
    const sizeMaxWidths = {
        sm: '28rem',
        md: '32rem',
        lg: '42rem',
        xl: '56rem',
        full: '95%',
    };
    const positionClasses = {
        center: s['items-center'],
        top: s['items-start'],
        bottom: s['items-end'],
    };
    const modalMaxWidth = maxWidth || (size !== 'full' ? sizeMaxWidths[size] : '95%');
    const baseZIndex = zIndex ?? 11000;
    const overlayZIndex = styles.overlay?.zIndex ?? baseZIndex;
    const containerZIndex = styles.container?.zIndex ??
        (typeof style.zIndex === 'number' ? style.zIndex : undefined) ??
        baseZIndex + 1;
    if (!showModal)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: cn(s['fixed'], s['inset-0'], s['z-40'], s['bg-black'], classNames.overlay), style: {
                    opacity: isAnimating ? overlayOpacity : 0,
                    transition: `opacity ${animationDuration}ms ease-in-out`,
                    backgroundColor: overlayColor || undefined,
                    zIndex: overlayZIndex,
                    ...styles.overlay,
                }, onClick: handleOverlayClick }), _jsx("div", { className: cn(s['flex'], s['justify-center'], positionClasses[position], s['overflow-x-hidden'], s['overflow-y-auto'], s['fixed'], s['inset-0'], s['z-50'], s['outline-none'], s['focus:outline-none'], className, classNames.container), style: {
                    ...style,
                    transition: `opacity ${animationDuration}ms ease-in-out`,
                    opacity: isAnimating ? 1 : 0,
                    zIndex: isExpanded ? 2147483647 : containerZIndex,
                    overflow: isExpanded ? 'hidden' : undefined,
                    ...styles.container,
                }, onClick: handleOverlayClick, children: _jsx("div", { className: cn(s['relative'], s['w-full'], !isExpanded && s['my-5'], !isExpanded && s['mx-auto'], classNames.wrapper), style: isExpanded
                        ? {
                            maxWidth: '100vw',
                            width: '100vw',
                            height: '100vh',
                            margin: 0,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 2147483647,
                            transform: 'none',
                            opacity: isAnimating ? 1 : 0,
                            transition: `opacity ${animationDuration}ms ease-out`,
                            ...styles.wrapper,
                        }
                        : {
                            maxWidth: modalMaxWidth,
                            marginLeft: size === 'full' ? '1rem' : undefined,
                            marginRight: size === 'full' ? '1rem' : undefined,
                            transform: isAnimating
                                ? position === 'center'
                                    ? 'scale(1)'
                                    : 'translateY(0)'
                                : position === 'center'
                                    ? 'scale(0.95)'
                                    : position === 'top'
                                        ? 'translateY(-20px)'
                                        : 'translateY(20px)',
                            transition: `transform ${animationDuration}ms ease-out, opacity ${animationDuration}ms ease-out`,
                            opacity: isAnimating ? 1 : 0,
                            ...styles.wrapper,
                        }, onClick: (e) => e.stopPropagation(), children: _jsxs("div", { className: cn(s['border-0'], s['shadow-xl'], s['relative'], s['flex'], s['flex-col'], s['bg-white'], s['outline-none'], s['focus:outline-none'], contentClassName, classNames.content), style: {
                            borderRadius: isExpanded ? 0 : borderRadius,
                            height: isExpanded ? '100%' : undefined,
                            overflow: isExpanded ? 'hidden' : undefined,
                            ...contentStyle,
                            ...styles.content,
                        }, children: [showHeader && (_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['border-b'], s['border-solid'], s['border-gray-200'], headerClassName, classNames.header), style: {
                                    padding: headerPadding,
                                    backgroundColor: headerBgColor,
                                    borderTopLeftRadius: borderRadius,
                                    borderTopRightRadius: borderRadius,
                                    borderBottom: title || showCloseButton ? undefined : 'none',
                                    ...styles.header,
                                }, children: [title && (_jsx("h3", { className: cn(s['text-xl'], s['font-semibold'], s['m-0'], s['flex-1'], classNames.title), style: { color: headerTextColor, ...styles.title }, children: title })), isExpand && (_jsx("button", { type: "button", className: cn(s['p-1'], s['ml-4'], s['border-0'], s['bg-transparent'], s['cursor-pointer'], s['outline-none'], s['focus:outline-none'], s['transition-colors'], s['hover:bg-gray-100'], s['rounded'], classNames.expandButton), onClick: () => {
                                            const next = !isExpanded;
                                            setIsExpanded(next);
                                            onExpand && onExpand(next);
                                        }, "aria-label": isExpanded ? 'Collapse modal' : 'Expand modal', style: {
                                            marginLeft: title ? '1rem' : 0,
                                            ...styles.expandButton,
                                        }, children: expandButton || (_jsx("span", { style: {
                                                color: headerTextColor || '#1f2937',
                                                height: '1.5rem',
                                                width: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }, children: isExpanded ? (
                                            // Collapse icon
                                            _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("polyline", { points: "4 14 10 14 10 20" }), _jsx("polyline", { points: "20 10 14 10 14 4" }), _jsx("line", { x1: "10", y1: "14", x2: "3", y2: "21" }), _jsx("line", { x1: "21", y1: "3", x2: "14", y2: "10" })] })) : (
                                            // Expand icon
                                            _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("polyline", { points: "15 3 21 3 21 9" }), _jsx("polyline", { points: "9 21 3 21 3 15" }), _jsx("line", { x1: "21", y1: "3", x2: "14", y2: "10" }), _jsx("line", { x1: "3", y1: "21", x2: "10", y2: "14" })] })) })) })), showCloseButton && (_jsx("button", { type: "button", className: cn(s['p-1'], s['ml-4'], s['border-0'], s['bg-transparent'], s['cursor-pointer'], s['outline-none'], s['focus:outline-none'], s['transition-colors'], s['hover:bg-gray-100'], s['rounded'], classNames.closeButton), onClick: handleClose, "aria-label": "Close modal", style: {
                                            marginLeft: title ? '1rem' : 0,
                                            marginRight: title ? 0 : 'auto',
                                            ...styles.closeButton,
                                        }, children: closeButton || (_jsx("span", { className: cn(s['block'], s['text-2xl'], s['leading-none'], s['font-light']), style: {
                                                color: headerTextColor || '#1f2937',
                                                height: '1.5rem',
                                                width: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                lineHeight: 1,
                                            }, children: "\u00D7" })) }))] })), _jsx("div", { className: cn(s['flex'], s['flex-col'], s['w-full'], !isExpanded && s['h-auto'], s['overflow-y-auto'], classNames.body), style: {
                                    padding: contentPadding,
                                    flex: isExpanded ? '1 1 0' : undefined,
                                    minHeight: isExpanded ? 0 : undefined,
                                    ...styles.body,
                                }, children: children })] }) }) })] }));
};
