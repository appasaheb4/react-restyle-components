import React from 'react';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPosition = 'center' | 'top' | 'bottom';
export interface ModalProps {
    /** Controls modal visibility */
    visible: boolean;
    /** Modal title text */
    title?: string;
    /** Additional className for the modal container */
    className?: string;
    /** Additional className for the modal content */
    contentClassName?: string;
    /** Additional className for the header */
    headerClassName?: string;
    /** Inline styles for the modal container */
    style?: React.CSSProperties;
    /** Inline styles for the modal content */
    contentStyle?: React.CSSProperties;
    /** Callback when modal should close */
    onClose?: () => void;
    /** Auto close modal after delay (in milliseconds) */
    isAutoClose?: boolean | number;
    /** Auto close delay in milliseconds (default: 1000) */
    autoCloseDelay?: number;
    /** Modal size: sm, md, lg, xl, full */
    size?: ModalSize;
    /** Modal vertical position */
    position?: ModalPosition;
    /** Show/hide close button */
    showCloseButton?: boolean;
    /** Custom close button element */
    closeButton?: React.ReactNode;
    /** Overlay background opacity (0-1) */
    overlayOpacity?: number;
    /** Overlay background color */
    overlayColor?: string;
    /** Click overlay to close */
    closeOnOverlayClick?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Show header section */
    showHeader?: boolean;
    /** Header background color */
    headerBgColor?: string;
    /** Header text color */
    headerTextColor?: string;
    /** Border radius */
    borderRadius?: string;
    /** Max width (CSS value) */
    maxWidth?: string;
    /** Padding for content area */
    contentPadding?: string;
    /** Header padding */
    headerPadding?: string;
    /** Animation duration (in ms) */
    animationDuration?: number;
    /** Modal content */
    children: React.ReactNode;
}
export declare const Modal: ({ visible, title, className, contentClassName, headerClassName, style, contentStyle, onClose, isAutoClose, autoCloseDelay, size, position, showCloseButton, closeButton, overlayOpacity, overlayColor, closeOnOverlayClick, closeOnEscape, showHeader, headerBgColor, headerTextColor, borderRadius, maxWidth, contentPadding, headerPadding, animationDuration, children, }: ModalProps) => JSX.Element | null;
//# sourceMappingURL=modal.component.d.ts.map