import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
/**
 *  The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.
 */
export const Tooltip = ({ align = 'center', side = 'bottom', children, content, avoidCollisions = true, alignOffset = 0, sideOffset = 5, disabled = false, delay = 400, className, classNames = {}, styles = {}, }) => {
    const isChildrenString = typeof children === 'string';
    return (_jsxs(TooltipPrimitive.Root, { delayDuration: delay, children: [_jsx(TooltipPrimitive.Trigger, { asChild: !isChildrenString, disabled: disabled, className: className || classNames.trigger, style: styles.trigger, children: children }), _jsx(TooltipPrimitive.Portal, { children: !disabled && content && (_jsxs(TooltipPrimitive.Content, { className: className || classNames.content, style: styles.content, avoidCollisions: avoidCollisions, side: side, align: align, alignOffset: alignOffset, sideOffset: sideOffset, children: [content, _jsx(TooltipPrimitive.Arrow, { className: classNames.arrow, style: styles.arrow })] })) })] }));
};
export const TooltipProvider = TooltipPrimitive.Provider;
