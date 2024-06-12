import React from 'react';
import '../../../../tc.css';
interface TooltipProps {
    tooltipText?: any;
    position?: 'bottom' | 'left' | 'top';
    className?: string;
    children?: any;
}
export declare const Tooltip: React.FunctionComponent<TooltipProps>;
export {};
