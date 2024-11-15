import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useClickOutside } from '../../../hooks';
import './color-picker-modal.css';
import '../../../tc.css';
export const ColorPickerModal = ({ color, onChange }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);
    return (React.createElement("div", { className: "picker-modal" },
        React.createElement("div", { className: "swatch-modal", style: { backgroundColor: color }, onClick: () => toggle(true) }),
        isOpen && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" },
                React.createElement("div", { className: "relative w-auto h-auto mx-auto my-auto" },
                    React.createElement("div", { className: "border-0 rounded-lg  relative flex flex-col w-full outline-none focus:outline-none" },
                        React.createElement("div", { className: "flex flex-col p-2 w-full ", ref: popover },
                            React.createElement(HexColorPicker, { color: color, onChange: onChange }))))),
            React.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })))));
};
