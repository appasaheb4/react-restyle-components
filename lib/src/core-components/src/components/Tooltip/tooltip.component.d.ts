import React, { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipProps } from './types';
export interface TooltipClassNames {
    /** Custom className for the trigger wrapper */
    trigger?: string;
    /** Custom className for the content container */
    content?: string;
    /** Custom className for the arrow */
    arrow?: string;
}
export interface TooltipStyles {
    /** Custom style for the trigger wrapper */
    trigger?: CSSProperties;
    /** Custom style for the content container */
    content?: CSSProperties;
    /** Custom style for the arrow */
    arrow?: CSSProperties;
}
/**
 *  The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.
 */
export declare const Tooltip: ({ align, side, children, content, avoidCollisions, alignOffset, sideOffset, disabled, delay, className, classNames, styles, }: React.PropsWithChildren<TooltipProps & {
    classNames?: TooltipClassNames | undefined;
    styles?: TooltipStyles | undefined;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
//# sourceMappingURL=tooltip.component.d.ts.map