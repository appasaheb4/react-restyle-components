import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useClickOutside } from '../../../hooks';
import './color-picker.css';
export const ColorPicker = ({ color, onChange, classNames = {}, styles = {} }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);
    return (_jsxs("div", { className: `picker ${classNames.container || ''}`, style: styles.container, children: [_jsx("div", { className: `swatch ${classNames.swatch || ''}`, style: { backgroundColor: color, ...styles.swatch }, onClick: () => toggle(true) }), isOpen && (_jsx("div", { className: `popover ${classNames.popover || ''}`, style: styles.popover, ref: popover, children: _jsx(HexColorPicker, { color: color, onChange: onChange }) }))] }));
};
