import React from 'react';
interface ModalConfirmProps {
    visible: boolean;
    title?: string;
    message: string;
    submitTitle?: string;
    closeTitle?: string;
    onClick: () => void;
    onClose: () => void;
}
export declare const ModalConfirm: ({ visible, title, message, submitTitle, closeTitle, onClick, onClose, }: ModalConfirmProps) => React.JSX.Element;
export {};
