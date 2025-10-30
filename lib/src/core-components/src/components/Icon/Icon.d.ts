import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
export interface IconProps {
    nameIcon: string;
    propsIcon?: IconBaseProps;
    className?: string;
    tooltip?: string;
    isDisable?: boolean;
    onClick?: () => void;
}
export interface CompatIconProps {
    src: string | React.ReactNode;
    className?: string;
    [key: string]: any;
}
export interface IconProps {
    nameIcon: string;
    propsIcon?: IconBaseProps;
    className?: string;
    tooltip?: string;
    isDisable?: boolean;
    onClick?: () => void;
}
export declare const Icon: {
    ({ nameIcon, propsIcon, className, tooltip, isDisable, onClick, }: IconProps): JSX.Element;
    SSR: ({ nameIcon, ...props }: IconProps) => JSX.Element;
    Compat: ({ src, className, ...props }: CompatIconProps) => JSX.Element;
};
//# sourceMappingURL=Icon.d.ts.map