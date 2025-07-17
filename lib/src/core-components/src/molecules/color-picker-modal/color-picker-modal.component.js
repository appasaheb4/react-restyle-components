import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useClickOutside } from '../../hooks';
import { TooltipProvider, Tooltip } from '../../atoms/tooltip/tooltip.component';
import { DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR, STANDARD_COLORS, } from '../../helpers/constants';
import './color-picker-modal.css';
import '../../tc.module.css';
export const ColorPickerModal = ({ color, isVisible = false, testId = 'color-picker', tooltip = '', tooltipSide = 'bottom', onChange, onNoFill, onClose, }) => {
    const popover = useRef();
    const [currentColor, setCurrentColor] = useState(color);
    const [isOpen, toggle] = useState(isVisible);
    const close = useCallback(() => {
        if (isOpen) {
            toggle(false);
            onClose && onClose(currentColor);
        }
    }, [isOpen, onClose, currentColor]);
    useClickOutside(popover, close);
    useEffect(() => {
        if (!isOpen) {
            setCurrentColor(color || DEFAULT_BG_COLOR);
        }
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
    return (_jsxs("div", { className: "picker-modal", "data-testid": testId, children: [_jsx(TooltipProvider, { children: _jsx(Tooltip, { content: tooltip, className: 'text-white bg-black p-2', side: tooltipSide, children: _jsx("div", { "data-testid": "swatch", className: `${currentColor !== '' ? 'swatch-modal' : 'swatch-modal diagonal-line'} z-10`, style: { backgroundColor: currentColor }, onClick: () => toggle(true) }) }) }), isOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ", children: _jsx("div", { className: "relative w-auto h-auto mx-auto my-auto bg-white rounded-md", children: _jsx("div", { className: "border-0 rounded-lg  relative flex flex-col w-full outline-none focus:outline-none", children: _jsxs("div", { className: "flex flex-col  w-full gap-4 justify-center items-center p-4 rounded-lg shadow-lg z-99 color-picker-modal", ref: popover, children: [_jsx(HexColorPicker, { "data-testid": "colorPicker", color: currentColor, onChange: handleColorChange }), _jsxs("div", { className: "flex flex-col mt-4", children: [_jsx("span", { className: "font-serif", children: "Standard Colors" }), _jsx("div", { className: "flex gap-2 mt-2", children: STANDARD_COLORS?.map((color) => (_jsx("div", { className: "rounded-full w-8 h-8 cursor-pointer gap-2", style: { backgroundColor: color }, onClick: () => handleStandardColorClick(color), "data-testid": `standard-color-${color}` }, color))) })] }), _jsx("div", { className: "flex justify-center bg-blue-600 mt-2 rounded-md p-2 mx-8 text-white hover:bg-blue-800 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer", onClick: handleNoFillClick, "data-testid": "no-fill", children: _jsx("span", { className: "font-serif", children: "No Fill" }) })] }) }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] }))] }));
};
