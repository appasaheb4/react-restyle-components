import React, { CSSProperties } from 'react';
import { ButtonProps } from './types';
export interface ButtonClassNames {
    /** Custom className for the button element */
    button?: string;
}
export interface ButtonStyles {
    /** Custom style for the button element */
    button?: CSSProperties;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    classNames?: ButtonClassNames | undefined;
    styles?: ButtonStyles | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
