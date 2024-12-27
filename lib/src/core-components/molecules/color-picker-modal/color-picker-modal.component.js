import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useClickOutside } from '../../../hooks';
import './color-picker-modal.css';
import '../../../tc.module.css';
export const ColorPickerModal = ({ color, onChange, onClose, }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => {
        toggle(false);
        onClose && onClose();
    }, []);
    useClickOutside(popover, close);
    return (_jsxs("div", { className: "picker-modal", children: [_jsx("div", { className: "swatch-modal", style: { backgroundColor: color }, onClick: () => toggle(true) }), isOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: _jsx("div", { className: "relative w-auto h-auto mx-auto my-auto", children: _jsx("div", { className: "border-0 rounded-lg  relative flex flex-col w-full outline-none focus:outline-none", children: _jsx("div", { className: "flex flex-col p-2 w-full ", ref: popover, children: _jsx(HexColorPicker, { color: color, onChange: onChange }) }) }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] }))] }));
};
