import React from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import s from './button.module.css';
import { Tooltip } from '../tooltip/tooltip.component';
/**
 * It's a `<button>button</button>`. Pass in regular button props such as onClick as well as any of the props defined here.
 */
export const Button = forwardRef(({ tooltip, disabled = false, type = 'button', className, level = 'primary', variant = 'brand', scale = 'm', iconOnly = false, children, focus = 'visible', loading = false, ...args }, ref) => {
    const buttonClasses = clsx(s.reset_button, s.button, s[`button-level-${level}`], s[`button-theme-${variant}`], s[`button-size-${scale}`], iconOnly && s[`button-icon-only`], focus === 'focus' && [s.focus], focus === 'visible' && s[`focus-visible`], loading && s.loading, className);
    const button = (React.createElement("button", { ref: ref, ...args, className: buttonClasses, type: type, disabled: disabled }, children));
    if (tooltip) {
        return (React.createElement(Tooltip, { content: tooltip, padding: "s" }, button));
    }
    else {
        return button;
    }
});
Button.displayName = 'Button';
