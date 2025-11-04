import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import s from '../../../tc.module.css';
import { cn } from '../../../utils';
export const Modal = ({ visible, title = '', className = '', contentClassName = '', headerClassName = '', style = {}, contentStyle = {}, onClose, isAutoClose = false, autoCloseDelay = 1000, size = 'md', position = 'center', showCloseButton = true, closeButton, overlayOpacity = 0.5, overlayColor, closeOnOverlayClick = true, closeOnEscape = true, showHeader = true, headerBgColor, headerTextColor, borderRadius = '0.5rem', maxWidth, contentPadding = '1rem', headerPadding = '1rem', animationDuration = 300, children, }) => {
    const [showModal, setShowModal] = useState(visible);
    const [isAnimating, setIsAnimating] = useState(false);
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
        if (closeOnOverlayClick && e.target === e.currentTarget) {
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
    if (!showModal)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: cn(s['fixed'], s['inset-0'], s['z-40'], s['bg-black']), style: {
                    opacity: isAnimating ? overlayOpacity : 0,
                    transition: `opacity ${animationDuration}ms ease-in-out`,
                    backgroundColor: overlayColor || undefined,
                }, onClick: handleOverlayClick }), _jsx("div", { className: cn(s['flex'], s['justify-center'], positionClasses[position], s['overflow-x-hidden'], s['overflow-y-auto'], s['fixed'], s['inset-0'], s['z-50'], s['outline-none'], s['focus:outline-none'], className), style: {
                    ...style,
                    transition: `opacity ${animationDuration}ms ease-in-out`,
                    opacity: isAnimating ? 1 : 0,
                }, onClick: handleOverlayClick, children: _jsx("div", { className: cn(s['relative'], s['w-full'], s['my-5'], s['mx-auto']), style: {
                        maxWidth: modalMaxWidth,
                        marginLeft: size === 'full' ? '1rem' : undefined,
                        marginRight: size === 'full' ? '1rem' : undefined,
                        transform: isAnimating
                            ? position === 'center'
                                ? 'scale(1)'
                                : position === 'top'
                                    ? 'translateY(0)'
                                    : 'translateY(0)'
                            : position === 'center'
                                ? 'scale(0.95)'
                                : position === 'top'
                                    ? 'translateY(-20px)'
                                    : 'translateY(20px)',
                        transition: `transform ${animationDuration}ms ease-out, opacity ${animationDuration}ms ease-out`,
                        opacity: isAnimating ? 1 : 0,
                    }, onClick: (e) => e.stopPropagation(), children: _jsxs("div", { className: cn(s['border-0'], s['shadow-xl'], s['relative'], s['flex'], s['flex-col'], s['bg-white'], s['outline-none'], s['focus:outline-none'], contentClassName), style: {
                            borderRadius,
                            ...contentStyle,
                        }, children: [showHeader && (_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['border-b'], s['border-solid'], s['border-gray-200'], headerClassName), style: {
                                    padding: headerPadding,
                                    backgroundColor: headerBgColor,
                                    borderTopLeftRadius: borderRadius,
                                    borderTopRightRadius: borderRadius,
                                    borderBottom: title || showCloseButton ? undefined : 'none',
                                }, children: [title && (_jsx("h3", { className: cn(s['text-xl'], s['font-semibold'], s['m-0'], s['flex-1']), style: { color: headerTextColor }, children: title })), showCloseButton && (_jsx("button", { type: "button", className: cn(s['p-1'], s['ml-4'], s['border-0'], s['bg-transparent'], s['cursor-pointer'], s['outline-none'], s['focus:outline-none'], s['transition-colors'], s['hover:bg-gray-100'], s['rounded']), onClick: handleClose, "aria-label": "Close modal", style: {
                                            marginLeft: title ? '1rem' : 0,
                                            marginRight: title ? 0 : 'auto',
                                        }, children: closeButton || (_jsx("span", { className: cn(s['block'], s['text-2xl'], s['leading-none'], s['font-light']), style: {
                                                color: headerTextColor || '#1f2937',
                                                height: '1.5rem',
                                                width: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                lineHeight: 1,
                                            }, children: "\u00D7" })) }))] })), _jsx("div", { className: cn(s['flex'], s['flex-col'], s['w-full'], s['h-auto'], s['overflow-y-auto']), style: {
                                    padding: contentPadding,
                                }, children: children })] }) }) })] }));
};
