import React from 'react';
export declare const ALERT_BANNER_TYPES: readonly ["info", "success", "warning", "error", "default", "dark"];
export type AlertBannerType = (typeof ALERT_BANNER_TYPES)[number];
export declare const ALERT_BANNER_VARIANTS: readonly ["banner", "inline", "floating"];
export type AlertBannerVariant = (typeof ALERT_BANNER_VARIANTS)[number];
export declare const ALERT_BANNER_SIZES: readonly ["small", "medium", "large"];
export type AlertBannerSize = (typeof ALERT_BANNER_SIZES)[number];
export interface AlertBannerActionProps {
    /** Action button text */
    text: string;
    /** Action button click handler */
    onClick?: () => void;
    /** ARIA label for the action button */
    ariaLabel?: string;
}
export interface AlertBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Children content */
    children?: React.ReactNode;
    /** Alert type determines colors and default icon */
    type?: AlertBannerType;
    /** Display variant */
    variant?: AlertBannerVariant;
    /** Size of the alert */
    size?: AlertBannerSize;
    /** Whether the alert is visible */
    isOpen?: boolean;
    /** Dismiss button click handler */
    onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** Hide the dismiss button */
    hideDismissButton?: boolean;
    /** Custom icon element */
    icon?: React.ReactNode;
    /** Show default icon based on type */
    showIcon?: boolean;
    /** Action button configuration */
    action?: AlertBannerActionProps;
    /** Title text */
    title?: string;
    /** Auto dismiss after duration (ms) */
    autoDismiss?: number;
    /** Animation on enter/exit */
    animated?: boolean;
    /** Additional class names */
    className?: string;
}
