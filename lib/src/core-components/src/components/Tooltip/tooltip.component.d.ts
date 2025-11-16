import React from 'react';
import { PropsWithChildren } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipProps } from './Tooltip.types';
/**
 *  The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.
 */
export declare const Tooltip: ({ align, side, children, content, avoidCollisions, alignOffset, sideOffset, disabled, delay, className, }: PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
export declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
//# sourceMappingURL=tooltip.component.d.ts.map