import React, { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons/lib';
export interface IconClassNames {
    /** Custom className for the container wrapper */
    container?: string;
    /** Custom className for the icon element */
    icon?: string;
}
export interface IconStyles {
    /** Custom style for the container wrapper */
    container?: CSSProperties;
    /** Custom style for the icon element */
    icon?: CSSProperties;
}
export interface IconProps {
    /** Name of the icon from react-icons library (e.g., 'FaHeart', 'MdSettings') */
    nameIcon: string;
    /** Props to pass to the underlying react-icon component */
    propsIcon?: IconBaseProps;
    /** Additional className for the container */
    className?: string;
    /** Tooltip text to display on hover */
    tooltip?: string;
    /** Whether the icon is disabled */
    isDisable?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Custom classNames for internal elements */
    classNames?: IconClassNames;
    /** Custom styles for internal elements */
    styles?: IconStyles;
}
export interface CompatIconProps {
    src: string | React.ReactNode;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
}
export declare const Icon: {
    ({ nameIcon, propsIcon, className, tooltip, isDisable, classNames, styles, onClick, }: IconProps): React.JSX.Element;
    SSR: ({ nameIcon, classNames, styles, ...props }: IconProps) => React.JSX.Element;
    Compat: ({ src, className, style, ...props }: CompatIconProps) => React.JSX.Element;
};
