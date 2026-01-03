'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { forwardRef } from 'react';
import { SwitchLabel, LabelContent, LabelText, DescriptionText, HiddenInput, SwitchTrack, SwitchThumb, IconWrapper, } from './elements';
// Icons
const CheckIcon = () => (_jsx("svg", { viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "2 6 5 9 10 3" }) }));
const CloseIcon = () => (_jsxs("svg", { viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "3", y1: "3", x2: "9", y2: "9" }), _jsx("line", { x1: "9", y1: "3", x2: "3", y2: "9" })] }));
export const Switch = forwardRef(function SwitchComponent(props, ref) {
    const { label, labelPosition = 'right', size = 'medium', color = 'primary', checked, defaultChecked, disabled = false, showIcons = false, description, className, id, ...rest } = props;
    // Use internal state if uncontrolled
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const handleChange = (e) => {
        if (!isControlled) {
            setInternalChecked(e.target.checked);
        }
        rest.onChange?.(e);
    };
    const switchElement = (_jsxs(_Fragment, { children: [_jsx(HiddenInput, { ref: ref, type: "checkbox", role: "switch", id: id, checked: isChecked, disabled: disabled, onChange: handleChange, "aria-checked": isChecked, ...rest }), _jsxs(SwitchTrack, { "$size": size, "$color": color, "$checked": isChecked, "$disabled": disabled, "$showIcons": showIcons, "aria-hidden": "true", children: [showIcons && (_jsxs(_Fragment, { children: [_jsx(IconWrapper, { "$size": size, "$position": "left", "$visible": isChecked, children: _jsx(CheckIcon, {}) }), _jsx(IconWrapper, { "$size": size, "$position": "right", "$visible": !isChecked, children: _jsx(CloseIcon, {}) })] })), _jsx(SwitchThumb, { "$size": size, "$checked": isChecked })] })] }));
    if (!label && !description) {
        return (_jsx(SwitchLabel, { "$labelPosition": labelPosition, "$disabled": disabled, "data-aui": "switch", className: className, children: switchElement }));
    }
    return (_jsxs(SwitchLabel, { "$labelPosition": labelPosition, "$disabled": disabled, "data-aui": "switch", className: className, htmlFor: id, children: [switchElement, _jsxs(LabelContent, { "$size": size, children: [label && _jsx(LabelText, { "$size": size, children: label }), description && _jsx(DescriptionText, { "$size": size, children: description })] })] }));
});
Switch.displayName = 'Switch';
