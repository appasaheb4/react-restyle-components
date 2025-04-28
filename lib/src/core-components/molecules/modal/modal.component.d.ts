import React from 'react';
export interface ModalProps {
    visible: boolean;
    title?: string;
    onClose: () => void;
    isAutoClose?: boolean;
    children: React.ReactNode;
}
export declare const Modal: ({ visible, title, onClose, isAutoClose, children, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modal.component.d.ts.map