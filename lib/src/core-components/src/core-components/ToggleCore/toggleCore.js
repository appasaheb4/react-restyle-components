'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useId } from '../../utils';
import { CheckboxToggle, RadioToggle, StyledDescription, HiddenInput, } from './elements';
/** To apply hover states, apply `toggleParentStyles` to the label containing this component */
export const ToggleCore = React.forwardRef(({ id, children, checked, isToggleShowing = true, showInteraction = true, onFocusChange, toggleType, indeterminate = false, ...rest }, ref) => {
    const inputId = useId(toggleType, id);
    if (typeof children === 'string') {
        children = _jsx(StyledDescription, { children: children });
    }
    const ToggleComponent = toggleType === 'checkbox' ? CheckboxToggle : RadioToggle;
    return (_jsxs(_Fragment, { children: [isToggleShowing && (_jsx(ToggleComponent, { "$checked": checked ?? false, "$showInteraction": showInteraction, "$indeterminate": indeterminate })), children, _jsx(HiddenInput, { readOnly: true, id: inputId, ref: ref, ...rest, checked: checked, type: toggleType, onFocus: () => onFocusChange?.(true), onBlur: () => onFocusChange?.(false), "aria-checked": indeterminate ? 'mixed' : undefined })] }));
});
