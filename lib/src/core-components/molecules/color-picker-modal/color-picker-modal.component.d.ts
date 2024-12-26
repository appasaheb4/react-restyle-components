import React from 'react';
import './color-picker-modal.css';
import '../../../tc.module.css';
interface ColorPickerModalProps {
    color: string;
    onChange: (color: string) => void;
    onClose?: () => void;
}
export declare const ColorPickerModal: ({ color, onChange, onClose, }: ColorPickerModalProps) => React.JSX.Element;
export {};
