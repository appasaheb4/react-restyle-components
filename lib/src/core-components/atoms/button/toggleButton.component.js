import React, { forwardRef } from 'react';
import clsx from 'clsx';
import s from './button.module.css';
import { Tooltip } from '../tooltip/tooltip.component';
/**
 * A checkbox styled to look like our Button, for a toggleable state UI component.
 */
export const ToggleButton = forwardRef(({ tooltip, onChange, labelClassName, contentClassName, active, disabled = false, children, level = 'primary', variant = 'brand', scale = 'm', iconOnly = false, focus = 'visible', loading = false, ...restProps }, ref) => {
    const controlled = typeof active === 'undefined' ? {} : { checked: active };
    const labelClassNames = clsx(disabled && s.isDisabled, s.label, contentClassName);
    const childrenClassNames = clsx(s.button, s.toggleButton, s[`button-level-${level}`], s[`button-theme-${variant}`], s[`button-size-${scale}`], loading && s.loading, iconOnly && s[`button-icon-only`], labelClassName);
    const checkboxClassNames = clsx(s.checkbox, s.visuallyHidden, focus === 'focus' && [s.focus], focus === 'visible' && s[`focus-visible`]);
    const renderContent = (React.createElement("label", { className: labelClassNames },
        React.createElement("input", { ref: ref, type: "checkbox", onChange: onChange, disabled: disabled || loading, ...controlled, ...restProps, className: checkboxClassNames }),
        React.createElement("span", { className: childrenClassNames }, children)));
    if (!tooltip) {
        return renderContent;
    }
    return (React.createElement(Tooltip, { content: tooltip, padding: "s" }, renderContent));
});
ToggleButton.displayName = 'ToggleButton';
