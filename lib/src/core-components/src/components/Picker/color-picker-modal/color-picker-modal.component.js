import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HexColorPicker } from 'react-colorful';
import { useClickOutside } from '../../../hooks';
import { TooltipProvider, Tooltip } from '../../Tooltip';
import { DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR, STANDARD_COLORS, } from '../../../helpers/constants';
import './color-picker-modal.css';
export const ColorPickerModal = ({ color, isVisible = false, open: openControlled, onOpenChange, hideSwatch = false, testId = 'color-picker', tooltip = '', tooltipSide = 'bottom', onChange, onNoFill, onClose, }) => {
    const popover = useRef();
    const [currentColor, setCurrentColor] = useState(color);
    const [internalOpen, setInternalOpen] = useState(isVisible);
    const isControlled = openControlled !== undefined;
    const isOpen = isControlled ? Boolean(openControlled) : internalOpen;
    const setOpen = useCallback((next) => {
        if (!isControlled) {
            setInternalOpen(next);
        }
        onOpenChange?.(next);
    }, [isControlled, onOpenChange]);
    const close = useCallback(() => {
        if (!isOpen)
            return;
        setOpen(false);
        onClose?.(currentColor);
    }, [isOpen, setOpen, onClose, currentColor]);
    useClickOutside(popover, close);
    useEffect(() => {
        setCurrentColor(color || DEFAULT_BG_COLOR);
    }, [color, isOpen]);
    const handleColorChange = useCallback((color) => {
        setCurrentColor(color);
        onChange(color);
    }, [onChange]);
    const handleStandardColorClick = useCallback((color) => {
        setCurrentColor(color);
        onChange(color);
        close();
    }, [onChange, close]);
    const handleNoFillClick = useCallback(() => {
        onNoFill && onNoFill(DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR);
        setCurrentColor(DEFAULT_BG_COLOR);
        onChange(DEFAULT_BG_COLOR);
        close();
    }, [onNoFill, onChange, close]);
    return (_jsxs("div", { className: "picker-modal", "data-testid": testId, children: [!hideSwatch && (_jsx(TooltipProvider, { children: _jsx(Tooltip, { content: tooltip, className: 'text-white bg-black p-2', side: tooltipSide, children: _jsx("div", { "data-testid": "swatch", className: `${currentColor !== '' ? 'swatch-modal' : 'swatch-modal diagonal-line'} z-10`, style: { backgroundColor: currentColor }, onClick: () => setOpen(true) }) }) })), isOpen &&
                typeof document !== 'undefined' &&
                createPortal(_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 z-[10040] bg-black opacity-25", "aria-hidden": true }), _jsx("div", { className: "fixed inset-0 z-[10050] flex justify-center items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none pointer-events-none", children: _jsx("div", { className: "relative mx-auto my-auto max-h-[min(100vh,900px)] w-auto pointer-events-auto", children: _jsx("div", { className: "relative w-auto h-auto bg-white rounded-md", children: _jsx("div", { className: "border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none", children: _jsxs("div", { className: "flex flex-col w-full gap-4 justify-center items-center p-4 rounded-lg shadow-lg color-picker-modal", ref: popover, children: [_jsx(HexColorPicker, { "data-testid": "colorPicker", color: currentColor, onChange: handleColorChange }), _jsxs("div", { className: "flex flex-col mt-4", children: [_jsx("span", { className: "font-serif", children: "Standard Colors" }), _jsx("div", { className: "flex gap-2 mt-2", children: STANDARD_COLORS?.map((color) => (_jsx("div", { className: "rounded-full w-8 h-8 cursor-pointer gap-2", style: { backgroundColor: color }, onClick: () => handleStandardColorClick(color), "data-testid": `standard-color-${color}` }, color))) })] }), _jsx("div", { className: "flex justify-center bg-blue-600 mt-2 rounded-md p-2 mx-8 text-white hover:bg-blue-800 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer", onClick: handleNoFillClick, "data-testid": "no-fill", children: _jsx("span", { className: "font-serif", children: "No Fill" }) }), _jsx("button", { type: "button", className: "mt-3 w-full max-w-xs rounded-md bg-gray-900 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800 transition", onClick: () => close(), children: "Done" })] }) }) }) }) })] }), document.body)] }));
};
