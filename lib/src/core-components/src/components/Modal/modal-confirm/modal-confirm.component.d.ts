import React, { CSSProperties } from 'react';
export interface ModalConfirmClassNames {
    /** Custom className for the overlay */
    overlay?: string;
    /** Custom className for the container */
    container?: string;
    /** Custom className for the modal wrapper */
    wrapper?: string;
    /** Custom className for the content */
    content?: string;
    /** Custom className for the header */
    header?: string;
    /** Custom className for the title */
    title?: string;
    /** Custom className for the close button */
    closeButton?: string;
    /** Custom className for the body */
    body?: string;
    /** Custom className for the footer */
    footer?: string;
    /** Custom className for the cancel button */
    cancelButton?: string;
    /** Custom className for the submit button */
    submitButton?: string;
}
export interface ModalConfirmStyles {
    /** Custom style for the overlay */
    overlay?: CSSProperties;
    /** Custom style for the container */
    container?: CSSProperties;
    /** Custom style for the modal wrapper */
    wrapper?: CSSProperties;
    /** Custom style for the content */
    content?: CSSProperties;
    /** Custom style for the header */
    header?: CSSProperties;
    /** Custom style for the title */
    title?: CSSProperties;
    /** Custom style for the close button */
    closeButton?: CSSProperties;
    /** Custom style for the body */
    body?: CSSProperties;
    /** Custom style for the footer */
    footer?: CSSProperties;
    /** Custom style for the cancel button */
    cancelButton?: CSSProperties;
    /** Custom style for the submit button */
    submitButton?: CSSProperties;
}
export interface ModalConfirmProps {
    visible: boolean;
    title?: string;
    message: React.ReactNode | string;
    submitTitle?: string;
    closeTitle?: string;
    isClick?: boolean;
    isClose?: boolean;
    /** Custom classNames for component parts */
    classNames?: ModalConfirmClassNames;
    /** Custom inline styles for component parts */
    styles?: ModalConfirmStyles;
    onClick: () => void;
    onClose: () => void;
}
export declare const ModalConfirm: ({ visible, title, message, submitTitle, closeTitle, isClick, isClose, classNames, styles, onClick, onClose, }: ModalConfirmProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modal-confirm.component.d.ts.map