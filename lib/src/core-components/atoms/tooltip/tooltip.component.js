import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
/**
 *  The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.
 */
export const Tooltip = ({ align = 'center', side = 'bottom', children, content, avoidCollisions = true, alignOffset = 0, sideOffset = 5, disabled = false, delay = 400, className, }) => {
    const isChildrenString = typeof children === 'string';
    return (React.createElement(TooltipPrimitive.Root, { delayDuration: delay },
        React.createElement(TooltipPrimitive.Trigger, { asChild: !isChildrenString, disabled: disabled, className: className }, children),
        React.createElement(TooltipPrimitive.Portal, null, !disabled && content && (React.createElement(TooltipPrimitive.Content, { className: className, avoidCollisions: avoidCollisions, side: side, align: align, alignOffset: alignOffset, sideOffset: sideOffset },
            content,
            React.createElement(TooltipPrimitive.Arrow, { className: className }))))));
};
/**
 * Wrap a UI tooltip element with TooltipProvider to give it a tooltip.
 */
export const TooltipProvider = TooltipPrimitive.Provider;
/**
 * Exports a tooltip body element to match the full tooltip component.
 * Useful when another library needs to be used for the tooltip trigger - eg AG-grid.
 */
// export const TooltipBody = ({
//   children,
//   padding = 'l',
// }: PropsWithChildren<Pick<TooltipProps, 'padding'>>) => {
//   const classes = className;
//   return <div className={classes}>{children}</div>;
// };
