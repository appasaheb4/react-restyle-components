import React from 'react';
import { PropsWithChildren } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipProps } from './Tooltip.types';
/**
 *  The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.
 */
export declare const Tooltip: ({ align, side, children, content, avoidCollisions, alignOffset, sideOffset, disabled, delay, padding, className, }: PropsWithChildren<TooltipProps>) => React.JSX.Element;
/**
 * Wrap a UI tooltip element with TooltipProvider to give it a tooltip.
 */
export declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
/**
 * Exports a tooltip body element to match the full tooltip component.
 * Useful when another library needs to be used for the tooltip trigger - eg AG-grid.
 */
export declare const TooltipBody: ({ children, padding, }: PropsWithChildren<Pick<TooltipProps, 'padding'>>) => React.JSX.Element;
