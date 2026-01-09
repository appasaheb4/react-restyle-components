'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState, useRef, useCallback, useEffect, } from 'react';
import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';
import { SpeedDialRoot, SpeedDialBackdrop, SpeedDialFab, SpeedDialActions, SpeedDialActionWrapper, SpeedDialActionButton, SpeedDialActionLabel, IconWrapper, sizeConfig, } from './elements';
// Default icons
const PlusIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [_jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), _jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })] }));
const CloseIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
export const SpeedDial = forwardRef(function SpeedDialComponent(props, ref) {
    const { actions, open: controlledOpen, defaultOpen = false, onOpenChange, onActionClick, uiConfig = {}, mainButtonConfig = {}, classNames = {}, styles = {}, disabled = false, hidden = false, closeOnActionClick = true, closeOnClickOutside = true, closeOnEscape = true, className, style, ariaLabel, } = props;
    // Destructure configs with defaults
    const { direction = 'up', size = 'medium', variant = 'filled', gap = 12, showLabels = false, showTooltips = true, animationDuration = 200, staggerDelay = 30, showBackdrop = false, backdropOpacity = 0.3, zIndex = 1000, } = uiConfig;
    const { openIcon = 'MdAdd', closeIcon = 'MdClose', openIconElement, closeIconElement, backgroundColor, iconColor, rotateOnToggle = true, rotationDegrees = 45, ariaLabelClosed = 'Open speed dial', ariaLabelOpen = 'Close speed dial', } = mainButtonConfig;
    // Refs
    const rootRef = useRef(null);
    // State
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    // Controlled vs uncontrolled
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;
    // Handle open/close
    const setOpen = useCallback((newOpen) => {
        if (disabled)
            return;
        if (isControlled) {
            onOpenChange?.(newOpen);
        }
        else {
            setInternalOpen(newOpen);
            onOpenChange?.(newOpen);
        }
    }, [disabled, isControlled, onOpenChange]);
    const toggle = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen, setOpen]);
    const close = useCallback(() => {
        setOpen(false);
    }, [setOpen]);
    // Handle action click
    const handleActionClick = useCallback((action, e) => {
        if (action.disabled)
            return;
        action.onClick?.(e);
        onActionClick?.(action, e);
        if (closeOnActionClick) {
            close();
        }
    }, [closeOnActionClick, close, onActionClick]);
    // Click outside handler
    useEffect(() => {
        if (!isOpen || !closeOnClickOutside)
            return;
        const handleClickOutside = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                close();
            }
        };
        // Delay to prevent immediate close on open click
        const timeout = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);
        return () => {
            clearTimeout(timeout);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeOnClickOutside, close]);
    // Escape key handler
    useEffect(() => {
        if (!isOpen || !closeOnEscape)
            return;
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                close();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, close]);
    // Render main button icon
    const renderMainIcon = () => {
        if (isOpen) {
            if (closeIconElement)
                return closeIconElement;
            if (!rotateOnToggle) {
                return (_jsx(IconWrapper, { "$size": size, children: _jsx(Icon, { nameIcon: closeIcon, propsIcon: { size: sizeConfig[size].iconSize, color: 'currentColor' } }) }));
            }
        }
        if (openIconElement)
            return openIconElement;
        // Use default plus/close icons for rotation effect
        if (rotateOnToggle) {
            return (_jsx(IconWrapper, { "$size": size, children: _jsx(PlusIcon, {}) }));
        }
        return (_jsx(IconWrapper, { "$size": size, children: _jsx(Icon, { nameIcon: openIcon, propsIcon: { size: sizeConfig[size].iconSize, color: 'currentColor' } }) }));
    };
    // Render action icon
    const renderActionIcon = (action) => {
        if (action.iconElement) {
            return (_jsx(IconWrapper, { "$size": size, "$isAction": true, children: action.iconElement }));
        }
        return (_jsx(IconWrapper, { "$size": size, "$isAction": true, children: _jsx(Icon, { nameIcon: action.icon, propsIcon: {
                    size: sizeConfig[size].actionIconSize,
                    color: action.iconColor || 'currentColor',
                } }) }));
    };
    // Render action button
    const renderAction = (action, index) => {
        const button = (_jsx(SpeedDialActionButton, { "$size": size, "$isOpen": isOpen, "$index": index, "$staggerDelay": staggerDelay, "$animationDuration": animationDuration, "$customBg": action.backgroundColor, "$customColor": action.iconColor, onClick: (e) => handleActionClick(action, e), disabled: action.disabled, "aria-label": action.ariaLabel || action.tooltip || action.label, className: classNames.action || action.className, style: { ...styles.action, ...action.style }, children: renderActionIcon(action) }, action.id));
        if (showLabels && action.label) {
            return (_jsxs(SpeedDialActionWrapper, { "$direction": direction, "$showLabels": showLabels, children: [(direction === 'left' || direction === 'up') && (_jsx(SpeedDialActionLabel, { "$size": size, "$direction": direction, "$isOpen": isOpen, "$index": index, "$staggerDelay": staggerDelay, className: classNames.actionLabel, style: styles.actionLabel, children: action.label })), button, (direction === 'right' || direction === 'down') && (_jsx(SpeedDialActionLabel, { "$size": size, "$direction": direction, "$isOpen": isOpen, "$index": index, "$staggerDelay": staggerDelay, className: classNames.actionLabel, style: styles.actionLabel, children: action.label }))] }, action.id));
        }
        if (showTooltips && action.tooltip) {
            return (_jsx(Tooltip, { content: action.tooltip, position: direction === 'up' || direction === 'down' ? 'left' : 'top', delay: 100, children: button }, action.id));
        }
        return button;
    };
    return (_jsxs(_Fragment, { children: [showBackdrop && (_jsx(SpeedDialBackdrop, { "$isOpen": isOpen, "$opacity": backdropOpacity, "$zIndex": zIndex, className: classNames.backdrop, style: styles.backdrop, onClick: close })), _jsxs(SpeedDialRoot, { ref: (node) => {
                    rootRef.current = node;
                    if (typeof ref === 'function') {
                        ref(node);
                    }
                    else if (ref) {
                        ref.current = node;
                    }
                }, "$zIndex": zIndex, "$hidden": hidden, className: className || classNames.root, style: { ...styles.root, ...style }, role: "menu", "aria-label": ariaLabel || 'Speed dial', "aria-expanded": isOpen, children: [_jsx(SpeedDialFab, { "$size": size, "$variant": variant, "$isOpen": isOpen, "$rotateOnToggle": rotateOnToggle, "$rotationDegrees": rotationDegrees, "$customBg": backgroundColor, "$customColor": iconColor, onClick: toggle, disabled: disabled, "aria-label": isOpen ? ariaLabelOpen : ariaLabelClosed, className: classNames.fab, style: styles.fab, children: renderMainIcon() }), _jsx(SpeedDialActions, { "$direction": direction, "$gap": gap, "$isOpen": isOpen, className: classNames.actions, style: styles.actions, role: "menu", children: actions.map((action, index) => renderAction(action, index)) })] })] }));
});
SpeedDial.displayName = 'SpeedDial';
