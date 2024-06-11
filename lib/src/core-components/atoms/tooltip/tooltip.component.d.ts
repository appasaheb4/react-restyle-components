import React from 'react';
interface TooltipProps {
    tooltipText?: any;
    position?: 'bottom' | 'left' | 'top';
    className?: string;
    children?: any;
}
export declare const Tooltip: React.FunctionComponent<TooltipProps>;
export {};
