import React from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import s from './button.module.css';
import { Tooltip } from '../tooltip/tooltip.component';
/**
 * Wraps a provided Link component in our button styles.
 * Assumes your chosen Router library uses a Link component that uses a `to` prop.
 */
export const LinkButton = forwardRef(({ to, tooltip, className, level = 'primary', variant = 'brand', scale = 'm', iconOnly = false, children, Component, focus = 'visible', ...args }, ref) => {
    const linkClasses = clsx(s.button, s.linkButton, s[`button-level-${level}`], s[`button-theme-${variant}`], s[`button-size-${scale}`], iconOnly && s[`button-icon-only`], focus === 'focus' && [s.focus], focus === 'visible' && s[`focus-visible`], className);
    const link = (React.createElement(Component, { ref: ref, className: linkClasses, ...args, to: to }, children));
    if (tooltip) {
        return (React.createElement(Tooltip, { content: tooltip, padding: "s" }, link));
    }
    else {
        return link;
    }
});
LinkButton.displayName = 'LinkButton';
