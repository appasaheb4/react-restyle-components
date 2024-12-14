import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
export type ButtonProps = {
    /** Optional tooltip content */
    tooltip?: string;
    /** What level of button? Defaults to 'primary' */
    level?: 'primary' | 'secondary';
    /** What variant of button? Defaults to 'brand' */
    variant?: 'brand' | 'danger' | 'accent' | 'neutral';
    /** What size of button? Defaults to 'm' */
    scale?: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
    /** Does the button only include a single SVG? If so we will tweak styles. Defaults to false. */
    iconOnly?: boolean;
    /** What kind of focus of button? Defaults to 'visible' */
    focus?: 'visible' | 'focus' | 'none';
    /** should we replace content with a loading indicator */
    loading?: boolean;
    /** ClassName to add so you can add additional styling */
    className?: string;
};
export type LinkButtonProps = Omit<ButtonProps, 'loading'> & {
    /** The location the link will take you to */
    to: string;
    /** The underlaying UI component to use */
    Component: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
};
export type ToggleButtonProps = Omit<ButtonProps, 'variant'> & {
    /** Optionally pass an extra classname to the label wrapper */
    labelClassName?: string;
    /** Optionally pass an extra classname to the content wrapper */
    contentClassName?: string;
    /** Optionally pass an active state. If not passed the component will be uncontrolled. */
    active?: boolean;
    /** What variant of button? Defaults to 'brand' */
    variant?: 'brand' | 'accent';
};
