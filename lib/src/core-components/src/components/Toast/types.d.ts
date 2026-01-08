import React from 'react';
export declare const TOAST_TYPES: readonly ["default", "success", "error", "warning", "info"];
export type ToastType = (typeof TOAST_TYPES)[number];
export declare const TOAST_POSITIONS: readonly ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
export type ToastPosition = (typeof TOAST_POSITIONS)[number];
export interface ToastActionProps {
    /** Action button text */
    text: string;
    /** Action click handler */
    onClick?: () => void;
    /** ARIA label for the action */
    ariaLabel?: string;
}
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Toast message content */
    message: React.ReactNode;
    /** Toast type determines colors and icon */
    type?: ToastType;
    /** Whether the toast is visible */
    isOpen?: boolean;
    /** Close handler */
    onClose?: () => void;
    /** Action button config */
    action?: ToastActionProps;
    /** Custom icon */
    icon?: React.ReactNode;
    /** Show default icon based on type */
    showIcon?: boolean;
    /** Auto dismiss after duration (ms) */
    duration?: number;
    /** Enable progress bar */
    showProgress?: boolean;
    /** Additional class name */
    className?: string;
}
export interface ToastContainerProps {
    /** Position on screen */
    position?: ToastPosition;
    /** Children toast elements */
    children?: React.ReactNode;
    /** Gap between toasts */
    gap?: string;
}
export interface ToastContextValue {
    /** Show a toast */
    show: (props: Omit<ToastProps, 'isOpen'>) => string;
    /** Hide a specific toast */
    hide: (id: string) => void;
    /** Hide all toasts */
    hideAll: () => void;
}
