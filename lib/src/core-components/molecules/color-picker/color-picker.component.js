import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useClickOutside } from '../../../hooks';
import './color-picker.css';
export const ColorPicker = ({ color, onChange }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);
    return (React.createElement("div", { className: "picker" },
        React.createElement("div", { className: "swatch", style: { backgroundColor: color }, onClick: () => toggle(true) }),
        isOpen && (React.createElement("div", { className: "popover", ref: popover },
            React.createElement(HexColorPicker, { color: color, onChange: onChange })))));
};
