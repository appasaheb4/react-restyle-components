import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import s from './Tooltip.module.css';
/**
 *  The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.
 */
export const Tooltip = ({ align = 'center', side = 'bottom', children, content, avoidCollisions = true, alignOffset = 0, sideOffset = 5, disabled = false, delay = 400, padding = 'l', className, }) => {
    const classes = clsx(s.tooltip_content, s[`tooltip_padding_${padding}`], className);
    const isChildrenString = typeof children === 'string';
    return (React.createElement(TooltipPrimitive.Root, { delayDuration: delay },
        React.createElement(TooltipPrimitive.Trigger, { asChild: !isChildrenString, disabled: disabled, className: clsx({ [s.tooltip_reset_button]: isChildrenString }) }, children),
        React.createElement(TooltipPrimitive.Portal, null, !disabled && content && (React.createElement(TooltipPrimitive.Content, { className: classes, avoidCollisions: avoidCollisions, side: side, align: align, alignOffset: alignOffset, sideOffset: sideOffset },
            content,
            React.createElement(TooltipPrimitive.Arrow, { className: s.tooltip_arrow }))))));
};
/**
 * Wrap a UI tooltip element with TooltipProvider to give it a tooltip.
 */
export const TooltipProvider = TooltipPrimitive.Provider;
/**
 * Exports a tooltip body element to match the full tooltip component.
 * Useful when another library needs to be used for the tooltip trigger - eg AG-grid.
 */
export const TooltipBody = ({ children, padding = 'l', }) => {
    const classes = clsx(s.tooltip_content, s[`tooltip_padding_${padding}`]);
    return React.createElement("div", { className: classes }, children);
};
