'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useCallback } from 'react';
import { ToastElement, ToastContainerElement, IconWrapper, ContentWrapper, Message, ActionsWrapper, ActionButton, DismissButton, ProgressBar, } from './elements';
// Default icons
const SuccessIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), _jsx("polyline", { points: "22 4 12 14.01 9 11.01" })] }));
const ErrorIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), _jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] }));
const WarningIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }), _jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), _jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }));
const InfoIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] }));
const CloseIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const getDefaultIcon = (type) => {
    switch (type) {
        case 'success':
            return _jsx(SuccessIcon, {});
        case 'error':
            return _jsx(ErrorIcon, {});
        case 'warning':
            return _jsx(WarningIcon, {});
        case 'info':
            return _jsx(InfoIcon, {});
        default:
            return null;
    }
};
export const Toast = forwardRef(function ToastComponent(props, ref) {
    const { message, type = 'default', isOpen = true, onClose, action, icon, showIcon = true, duration, showProgress = false, className, ...rest } = props;
    // Auto dismiss
    useEffect(() => {
        if (duration && isOpen && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, isOpen, onClose]);
    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);
    const handleAction = useCallback(() => {
        action?.onClick?.();
    }, [action]);
    const displayIcon = icon ?? (showIcon ? getDefaultIcon(type) : null);
    return (_jsxs(ToastElement, { ref: ref, "$type": type, "$isOpen": isOpen, "$position": "bottom-right", role: "alert", "aria-live": "assertive", "data-aui": "toast", className: className, ...rest, children: [displayIcon && (_jsx(IconWrapper, { "$type": type, "aria-hidden": "true", children: displayIcon })), _jsx(ContentWrapper, { children: _jsx(Message, { children: message }) }), _jsxs(ActionsWrapper, { children: [action && (_jsx(ActionButton, { "$type": type, onClick: handleAction, "aria-label": action.ariaLabel || action.text, children: action.text })), onClose && (_jsx(DismissButton, { "$type": type, onClick: handleClose, "aria-label": "Dismiss", children: _jsx(CloseIcon, {}) }))] }), showProgress && duration && (_jsx(ProgressBar, { "$type": type, "$duration": duration }))] }));
});
Toast.displayName = 'Toast';
export const ToastContainer = forwardRef(function ToastContainerComponent(props, ref) {
    const { position = 'bottom-right', children, gap = '8px', ...rest } = props;
    return (_jsx(ToastContainerElement, { ref: ref, "$position": position, "$gap": gap, "data-aui": "toast-container", ...rest, children: children }));
});
ToastContainer.displayName = 'ToastContainer';
