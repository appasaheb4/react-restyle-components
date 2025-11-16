import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
export type ButtonProps = {
    variant?: 'solid' | 'outline';
    /** Optional tooltip content */
    tooltip?: string;
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
//# sourceMappingURL=types.d.ts.map