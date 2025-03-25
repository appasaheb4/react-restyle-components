import React from 'react';
interface ModalConfirmProps {
    visible: boolean;
    title?: string;
    message: React.ReactNode | string;
    submitTitle?: string;
    closeTitle?: string;
    isClick?: boolean;
    isClose?: boolean;
    onClick: () => void;
    onClose: () => void;
}
export declare const ModalConfirm: ({ visible, title, message, submitTitle, closeTitle, isClick, isClose, onClick, onClose, }: ModalConfirmProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=modal-confirm.component.d.ts.map