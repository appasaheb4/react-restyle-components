import './color-picker-modal.css';
interface ColorPickerModalProps {
    color: string;
    isVisible?: boolean;
    testId?: string;
    tooltip?: string;
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
    onChange: (color: string) => void;
    onNoFill?: (bgColor: string, textColor: string) => void;
    onClose?: (color?: string) => void;
}
export declare const ColorPickerModal: ({ color, isVisible, testId, tooltip, tooltipSide, onChange, onNoFill, onClose, }: ColorPickerModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=color-picker-modal.component.d.ts.map