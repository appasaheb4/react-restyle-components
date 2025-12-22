import React from 'react';
import 'jodit/esm/plugins/resizer/resizer';
export interface ModalDocxContentProps {
    /** Controls the visibility of the modal */
    visible: boolean;
    /** Initial content to display in the editor */
    details?: string;
    /** Callback fired when the user saves the content */
    onSave: (content: string) => void;
    /** Callback fired when the modal is closed */
    onClose: () => void;
    /** Optional title for the modal header */
    title?: string;
    /** Custom AI service function for processing content */
    aiService?: (message: string, gemini_key: string) => Promise<{
        text: string;
    } | null>;
    /** Whether to show AI assistant button */
    showAIButton?: boolean;
    /** Whether to show voice recording buttons */
    showVoiceButtons?: boolean;
    uploaderUrl?: string;
    folder?: string;
    gemini_key?: string;
    /** Custom class names for styling */
    classNames?: {
        overlay?: string;
        container?: string;
        header?: string;
        body?: string;
        footer?: string;
    };
    /** Custom inline styles */
    styles?: {
        overlay?: React.CSSProperties;
        container?: React.CSSProperties;
        header?: React.CSSProperties;
        body?: React.CSSProperties;
        footer?: React.CSSProperties;
    };
}
export declare const ModalDocxContent: ({ visible, details, onSave, onClose, title, aiService, showAIButton, showVoiceButtons, uploaderUrl, folder, gemini_key, classNames, styles, }: ModalDocxContentProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modal-docx-content.component.d.ts.map