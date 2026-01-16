'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useCallback } from 'react';
import { AlertBannerContainer, IconWrapper, ContentWrapper, Title, Message, ActionsWrapper, ActionButton, DismissButton, } from './elements';
// Default icons for each type
const InfoIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] }));
const SuccessIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), _jsx("polyline", { points: "22 4 12 14.01 9 11.01" })] }));
const WarningIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }), _jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), _jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }));
const ErrorIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), _jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] }));
const CloseIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const getDefaultIcon = (type) => {
    switch (type) {
        case 'info':
            return _jsx(InfoIcon, {});
        case 'success':
            return _jsx(SuccessIcon, {});
        case 'warning':
            return _jsx(WarningIcon, {});
        case 'error':
            return _jsx(ErrorIcon, {});
        default:
            return _jsx(InfoIcon, {});
    }
};
export const AlertBanner = forwardRef(function AlertBannerComponent(props, ref) {
    const { children, type = 'info', variant = 'inline', size = 'medium', isOpen = true, onClose, hideDismissButton = false, icon, showIcon = true, action, title, autoDismiss, animated = true, className, ...rest } = props;
    // Auto dismiss
    useEffect(() => {
        if (autoDismiss && isOpen && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, autoDismiss);
            return () => clearTimeout(timer);
        }
    }, [autoDismiss, isOpen, onClose]);
    const handleClose = useCallback((e) => {
        onClose?.(e);
    }, [onClose]);
    const handleAction = useCallback(() => {
        action?.onClick?.();
    }, [action]);
    const displayIcon = icon || (showIcon ? getDefaultIcon(type) : null);
    return (_jsxs(AlertBannerContainer, { ref: ref, "$type": type, "$variant": variant, "$size": size, "$isOpen": isOpen, "$animated": animated, role: "alert", "aria-live": "polite", "data-aui": "alert-banner", className: className, ...rest, children: [displayIcon && (_jsx(IconWrapper, { "$type": type, "$size": size, "aria-hidden": "true", children: displayIcon })), _jsxs(ContentWrapper, { children: [title && _jsx(Title, { "$size": size, children: title }), _jsx(Message, { children: children })] }), _jsxs(ActionsWrapper, { children: [action && (_jsx(ActionButton, { "$type": type, onClick: handleAction, "aria-label": action.ariaLabel || action.text, children: action.text })), !hideDismissButton && onClose && (_jsx(DismissButton, { "$type": type, "$size": size, onClick: handleClose, "aria-label": "Dismiss alert", children: _jsx(CloseIcon, {}) }))] })] }));
});
AlertBanner.displayName = 'AlertBanner';
