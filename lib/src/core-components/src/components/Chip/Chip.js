'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback } from 'react';
import { ChipElement, ChipLabel, IconWrapper, AvatarWrapper, DeleteButton, ChipGroupElement, } from './elements';
// Default icons
const CheckIcon = () => (_jsx("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "3 8 6 11 13 4" }) }));
const CloseIcon = () => (_jsxs("svg", { viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "4", y1: "4", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "4", x2: "4", y2: "12" })] }));
export const Chip = forwardRef(function ChipComponent(props, ref) {
    const { label, variant = 'soft', size = 'medium', color = 'default', chipType = 'button', selected = false, disabled = false, iconLeft, iconRight, deletable = false, onDelete, onClick, avatar, className, ...rest } = props;
    const handleClick = useCallback((e) => {
        if (disabled)
            return;
        onClick?.(e);
    }, [disabled, onClick]);
    const handleDelete = useCallback((e) => {
        e.stopPropagation();
        if (disabled)
            return;
        onDelete?.();
    }, [disabled, onDelete]);
    // Determine left icon based on chip type
    const renderLeftIcon = () => {
        if (avatar) {
            return _jsx(AvatarWrapper, { "$size": size, children: avatar });
        }
        if (iconLeft) {
            return (_jsx(IconWrapper, { "$size": size, "$side": "left", children: iconLeft }));
        }
        // Show checkmark for selection chips when selected
        if (chipType === 'selection' && selected) {
            return (_jsx(IconWrapper, { "$size": size, "$side": "left", children: _jsx(CheckIcon, {}) }));
        }
        return null;
    };
    // Determine right icon based on chip type
    const renderRightIcon = () => {
        // Filter chips show close icon when selected
        if (chipType === 'filter' && selected) {
            return (_jsx(DeleteButton, { "$size": size, onClick: handleDelete, role: "button", "aria-label": "Remove filter", children: _jsx(CloseIcon, {}) }));
        }
        // Deletable chips show close icon
        if (deletable) {
            return (_jsx(DeleteButton, { "$size": size, onClick: handleDelete, role: "button", "aria-label": "Delete", children: _jsx(CloseIcon, {}) }));
        }
        if (iconRight) {
            return (_jsx(IconWrapper, { "$size": size, "$side": "right", children: iconRight }));
        }
        return null;
    };
    const getRole = () => {
        if (chipType === 'selection')
            return 'checkbox';
        if (chipType === 'filter')
            return 'checkbox';
        return 'button';
    };
    return (_jsxs(ChipElement, { ref: ref, "$variant": variant, "$size": size, "$color": color, "$selected": selected, "$disabled": disabled, disabled: disabled, onClick: handleClick, role: getRole(), "aria-checked": chipType === 'selection' || chipType === 'filter' ? selected : undefined, "aria-pressed": chipType === 'button' ? selected : undefined, "data-aui": "chip", className: className, type: "button", ...rest, children: [renderLeftIcon(), _jsx(ChipLabel, { children: label }), renderRightIcon()] }));
});
Chip.displayName = 'Chip';
export const ChipGroup = forwardRef(function ChipGroupComponent(props, ref) {
    const { children, gap = '8px', wrap = true, scrollable = false, direction = 'row', className, ...rest } = props;
    return (_jsx(ChipGroupElement, { ref: ref, "$gap": gap, "$wrap": wrap, "$scrollable": scrollable, "$direction": direction, "data-aui": "chip-group", className: className, role: "group", ...rest, children: children }));
});
ChipGroup.displayName = 'ChipGroup';
