import React from 'react';
import { ReactNode } from 'react';
import '../../../../tc.css';
export declare const ButtonGroup: ({ children, orientation, horizontalSizing, verticalSizing, className, }: {
    children: ReactNode;
    orientation?: "horizontal" | "vertical" | undefined;
    horizontalSizing?: "fill" | "hug" | undefined;
    verticalSizing?: "fill" | "hug" | undefined;
    className?: string | undefined;
}) => React.JSX.Element;
