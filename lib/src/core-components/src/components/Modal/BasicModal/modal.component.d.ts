import React, { CSSProperties } from 'react';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPosition = 'center' | 'top' | 'bottom';
export interface ModalClassNames {
    /** Custom className for the overlay */
    overlay?: string;
    /** Custom className for the modal container */
    container?: string;
    /** Custom className for the modal wrapper */
    wrapper?: string;
    /** Custom className for the modal content */
    content?: string;
    /** Custom className for the header */
    header?: string;
    /** Custom className for the title */
    title?: string;
    /** Custom className for the close button */
    closeButton?: string;
    /** Custom className for the body/children container */
    body?: string;
}
export interface ModalStyles {
    /** Custom style for the overlay */
    overlay?: CSSProperties;
    /** Custom style for the modal container */
    container?: CSSProperties;
    /** Custom style for the modal wrapper */
    wrapper?: CSSProperties;
    /** Custom style for the modal content */
    content?: CSSProperties;
    /** Custom style for the header */
    header?: CSSProperties;
    /** Custom style for the title */
    title?: CSSProperties;
    /** Custom style for the close button */
    closeButton?: CSSProperties;
    /** Custom style for the body/children container */
    body?: CSSProperties;
}
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
    /** Custom classNames for component parts */
    classNames?: ModalClassNames;
    /** Custom inline styles for component parts */
    styles?: ModalStyles;
    /** Modal content */
    children: React.ReactNode;
}
export declare const Modal: ({ visible, title, className, contentClassName, headerClassName, style, contentStyle, onClose, isAutoClose, autoCloseDelay, size, position, showCloseButton, closeButton, overlayOpacity, overlayColor, closeOnOverlayClick, closeOnEscape, showHeader, headerBgColor, headerTextColor, borderRadius, maxWidth, contentPadding, headerPadding, animationDuration, classNames, styles, children, }: ModalProps) => JSX.Element | null;
//# sourceMappingURL=modal.component.d.ts.map