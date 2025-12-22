/**
 * JoditEditor Configuration Utility
 *
 * Provides common configuration options and helpers for JoditEditor instances
 * to ensure consistency across components and reduce code duplication.
 */
type JoditConfig = Record<string, any>;
/**
 * Common font list used across JoditEditor instances
 */
export declare const JODIT_COMMON_FONTS: {
    readonly "'Open Sans',sans-serif": "Open Sans";
    readonly 'Helvetica,sans-serif': "Helvetica";
    readonly 'Arial,Helvetica,sans-serif': "Arial";
    readonly 'Georgia,serif': "Georgia";
    readonly 'Impact,Charcoal,sans-serif': "Impact";
    readonly 'Tahoma,Geneva,sans-serif': "Tahoma";
    readonly "'Times New Roman',Times,serif": "Times New Roman";
    readonly 'Verdana,Geneva,sans-serif': "Verdana";
    readonly 'Consolas,monaco,monospace': "Consolas";
};
/**
 * Font size list with comprehensive options (px values)
 */
export declare const JODIT_FONT_SIZES: {
    readonly '8px': "8";
    readonly '9px': "9";
    readonly '10px': "10";
    readonly '11px': "11";
    readonly '12px': "12";
    readonly '13px': "13";
    readonly '14px': "14";
    readonly '15px': "15";
    readonly '16px': "16";
    readonly '18px': "18";
    readonly '20px': "20";
    readonly '22px': "22";
    readonly '24px': "24";
    readonly '26px': "26";
    readonly '28px': "28";
    readonly '30px': "30";
    readonly '32px': "32";
    readonly '36px': "36";
    readonly '40px': "40";
    readonly '44px': "44";
    readonly '48px': "48";
    readonly '54px': "54";
    readonly '60px': "60";
    readonly '72px': "72";
    readonly '80px': "80";
    readonly '96px': "96";
};
/**
 * Line height list with comprehensive options
 */
export declare const JODIT_LINE_HEIGHTS: {
    readonly '1': "1";
    readonly '1.1': "1.1";
    readonly '1.2': "1.2";
    readonly '1.3': "1.3";
    readonly '1.4': "1.4";
    readonly '1.5': "1.5";
    readonly '1.6': "1.6";
    readonly '1.7': "1.7";
    readonly '1.8': "1.8";
    readonly '1.9': "1.9";
    readonly '2': "2";
    readonly '2.2': "2.2";
    readonly '2.5': "2.5";
    readonly '3': "3";
};
/**
 * Speech recognition plugin names that should be disabled
 */
export declare const JODIT_SPEECH_PLUGINS_TO_DISABLE: readonly ["speech-recognize", "speechRecognize", "speech"];
/**
 * Speech recognition buttons that should be removed from toolbar
 */
export declare const JODIT_SPEECH_BUTTONS_TO_REMOVE: readonly ["speechRecognize", "speech-recognize"];
/**
 * Base JoditEditor configuration with common settings
 */
export declare const JODIT_BASE_CONFIG: {
    readonly: boolean;
    toolbar: boolean;
    spellcheck: boolean;
    language: string;
    toolbarButtonSize: "medium";
    showCharsCounter: boolean;
    showWordsCounter: boolean;
    showXPathInStatusbar: boolean;
    askBeforePasteHTML: boolean;
    askBeforePasteFromWord: boolean;
    disablePlugins: string[];
    removeButtons: string[];
    controls: {
        font: {
            command: string;
            list: {
                readonly "'Open Sans',sans-serif": "Open Sans";
                readonly 'Helvetica,sans-serif': "Helvetica";
                readonly 'Arial,Helvetica,sans-serif': "Arial";
                readonly 'Georgia,serif': "Georgia";
                readonly 'Impact,Charcoal,sans-serif': "Impact";
                readonly 'Tahoma,Geneva,sans-serif': "Tahoma";
                readonly "'Times New Roman',Times,serif": "Times New Roman";
                readonly 'Verdana,Geneva,sans-serif': "Verdana";
                readonly 'Consolas,monaco,monospace': "Consolas";
            };
        };
        fontsize: {
            list: {
                readonly '8px': "8";
                readonly '9px': "9";
                readonly '10px': "10";
                readonly '11px': "11";
                readonly '12px': "12";
                readonly '13px': "13";
                readonly '14px': "14";
                readonly '15px': "15";
                readonly '16px': "16";
                readonly '18px': "18";
                readonly '20px': "20";
                readonly '22px': "22";
                readonly '24px': "24";
                readonly '26px': "26";
                readonly '28px': "28";
                readonly '30px': "30";
                readonly '32px': "32";
                readonly '36px': "36";
                readonly '40px': "40";
                readonly '44px': "44";
                readonly '48px': "48";
                readonly '54px': "54";
                readonly '60px': "60";
                readonly '72px': "72";
                readonly '80px': "80";
                readonly '96px': "96";
            };
            command: string;
            popup: (editor: any, current: any, close: () => void) => any;
        };
        lineHeight: {
            list: {
                readonly '1': "1";
                readonly '1.1': "1.1";
                readonly '1.2': "1.2";
                readonly '1.3': "1.3";
                readonly '1.4': "1.4";
                readonly '1.5': "1.5";
                readonly '1.6': "1.6";
                readonly '1.7': "1.7";
                readonly '1.8': "1.8";
                readonly '1.9': "1.9";
                readonly '2': "2";
                readonly '2.2': "2.2";
                readonly '2.5': "2.5";
                readonly '3': "3";
            };
            command: string;
            popup: (editor: any, current: any, close: () => void) => any;
        };
    };
};
/**
 * Creates a JoditEditor configuration
 *
 * @param overrides - Configuration overrides to merge with base config
 * @param enableSpeechRecognition - If true, enables speech recognition (default: false)
 * @returns Merged JoditEditor configuration
 */
export declare function createJoditConfig(overrides?: Partial<JoditConfig>, enableSpeechRecognition?: boolean): Partial<JoditConfig>;
/**
 * Common paste dialog handler that closes the dialog immediately
 */
export declare const JODIT_PASTE_DIALOG_HANDLER: {
    afterOpenPasteDialog: (dialog: any, msg: any, title: any, callback: () => void) => void;
};
/**
 * Common toolbar buttons configuration organized by category
 * Used across all JoditEditor instances for consistency
 */
export declare const JODIT_TOOLBAR_BUTTONS: readonly ["source", "preview", "print", "|", "bold", "italic", "underline", "strikethrough", "|", "superscript", "subscript", "|", "font", "fontsize", "lineHeight", "brush", "paragraph", "classSpan", "|", "ul", "ol", "|", "indent", "outdent", "|", "align", "left", "center", "right", "justify", "|", "image", "video", "file", "link", "|", "hr", "table", "symbol", "|", "cut", "copy", "paste", "selectall", "copyformat", "eraser", "|", "undo", "redo", "|", "find", "spellcheck", "print", "fullsize", "|", "dots"];
/**
 * Type for toolbar button names
 */
export type JoditToolbarButton = (typeof JODIT_TOOLBAR_BUTTONS)[number];
export {};
//# sourceMappingURL=jodit-editor-config.util.d.ts.map