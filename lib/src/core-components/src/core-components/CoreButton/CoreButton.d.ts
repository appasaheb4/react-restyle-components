import React from 'react';
import type { ButtonSize, ButtonVariant, ButtonColor, ButtonOptions } from './types';
export type CoreButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
    ariaLabel?: string;
    size?: ButtonSize;
    hasChildren?: boolean;
    iconSide?: 'left' | 'right';
    hasIcon?: boolean;
    options?: ButtonOptions;
};
export declare const CoreButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outline" | "flat" | "default" | "text" | undefined;
    color?: "white" | "primary" | "secondary" | undefined;
    ariaLabel?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    hasChildren?: boolean | undefined;
    iconSide?: "left" | "right" | undefined;
    hasIcon?: boolean | undefined;
    options?: ButtonOptions | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=CoreButton.d.ts.map