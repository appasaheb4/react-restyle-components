import { CSSProperties } from 'react';
import { ReactNode } from 'react';
export interface ButtonGroupClassNames {
    /** Custom className for the container */
    container?: string;
}
export interface ButtonGroupStyles {
    /** Custom style for the container */
    container?: CSSProperties;
}
export interface ButtonGroupProps {
    children: ReactNode;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    /** Custom classNames for component parts */
    classNames?: ButtonGroupClassNames;
    /** Custom inline styles for component parts */
    styles?: ButtonGroupStyles;
}
export declare const ButtonGroup: ({ children, orientation, className, classNames, styles, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
