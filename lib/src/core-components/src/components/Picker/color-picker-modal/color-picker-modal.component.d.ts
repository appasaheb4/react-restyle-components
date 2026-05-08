import './color-picker-modal.css';
interface ColorPickerModalProps {
    color: string;
    isVisible?: boolean;
    /** Controlled open state; when omitted, the swatch toggles internally */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Hide swatch/trigger — use with controlled `open` from a parent (e.g. CSS editor) */
    hideSwatch?: boolean;
    testId?: string;
    tooltip?: string;
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
    onChange: (color: string) => void;
    onNoFill?: (bgColor: string, textColor: string) => void;
    onClose?: (color?: string) => void;
}
export declare const ColorPickerModal: ({ color, isVisible, open: openControlled, onOpenChange, hideSwatch, testId, tooltip, tooltipSide, onChange, onNoFill, onClose, }: ColorPickerModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
