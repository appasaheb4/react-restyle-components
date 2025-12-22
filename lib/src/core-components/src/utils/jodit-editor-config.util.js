/**
 * JoditEditor Configuration Utility
 *
 * Provides common configuration options and helpers for JoditEditor instances
 * to ensure consistency across components and reduce code duplication.
 */
/**
 * Common font list used across JoditEditor instances
 */
export const JODIT_COMMON_FONTS = {
    "'Open Sans',sans-serif": 'Open Sans',
    'Helvetica,sans-serif': 'Helvetica',
    'Arial,Helvetica,sans-serif': 'Arial',
    'Georgia,serif': 'Georgia',
    'Impact,Charcoal,sans-serif': 'Impact',
    'Tahoma,Geneva,sans-serif': 'Tahoma',
    "'Times New Roman',Times,serif": 'Times New Roman',
    'Verdana,Geneva,sans-serif': 'Verdana',
    'Consolas,monaco,monospace': 'Consolas',
};
/**
 * Font size list with comprehensive options (px values)
 */
export const JODIT_FONT_SIZES = {
    '8px': '8',
    '9px': '9',
    '10px': '10',
    '11px': '11',
    '12px': '12',
    '13px': '13',
    '14px': '14',
    '15px': '15',
    '16px': '16',
    '18px': '18',
    '20px': '20',
    '22px': '22',
    '24px': '24',
    '26px': '26',
    '28px': '28',
    '30px': '30',
    '32px': '32',
    '36px': '36',
    '40px': '40',
    '44px': '44',
    '48px': '48',
    '54px': '54',
    '60px': '60',
    '72px': '72',
    '80px': '80',
    '96px': '96',
};
/**
 * Line height list with comprehensive options
 */
export const JODIT_LINE_HEIGHTS = {
    '1': '1',
    '1.1': '1.1',
    '1.2': '1.2',
    '1.3': '1.3',
    '1.4': '1.4',
    '1.5': '1.5',
    '1.6': '1.6',
    '1.7': '1.7',
    '1.8': '1.8',
    '1.9': '1.9',
    '2': '2',
    '2.2': '2.2',
    '2.5': '2.5',
    '3': '3',
};
/**
 * Speech recognition plugin names that should be disabled
 */
export const JODIT_SPEECH_PLUGINS_TO_DISABLE = [
    'speech-recognize',
    'speechRecognize',
    'speech',
];
/**
 * Speech recognition buttons that should be removed from toolbar
 */
export const JODIT_SPEECH_BUTTONS_TO_REMOVE = [
    'speechRecognize',
    'speech-recognize',
];
/**
 * Base JoditEditor configuration with common settings
 */
export const JODIT_BASE_CONFIG = {
    readonly: false,
    toolbar: true,
    spellcheck: true,
    language: 'en',
    toolbarButtonSize: 'medium',
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    disablePlugins: [...JODIT_SPEECH_PLUGINS_TO_DISABLE],
    removeButtons: [...JODIT_SPEECH_BUTTONS_TO_REMOVE],
    controls: {
        font: {
            command: 'fontname',
            list: JODIT_COMMON_FONTS,
        },
        fontsize: {
            list: JODIT_FONT_SIZES,
            command: 'fontSize',
            // Add custom value input popup with text input for manual entry (e.g., 5px, 100px)
            popup: (editor, current, close) => {
                const form = editor.create.fromHTML(`
          <div style="padding: 10px; min-width: 200px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #333;">Enter Font Size:</label>
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="text" placeholder="e.g., 14px, 1.5em, 12pt" 
                style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px;" />
              <button type="button" style="padding: 8px 16px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Apply</button>
            </div>
            <div style="margin-top: 8px; font-size: 11px; color: #666;">
              Supports: px, pt, em, rem, % (e.g., 16px, 12pt, 1.2em)
            </div>
          </div>
        `);
                const input = form.querySelector('input');
                const applyBtn = form.querySelector('button');
                const handleApply = () => {
                    let value = input.value.trim();
                    if (value) {
                        // If user enters only number, default to px
                        if (/^\d+(\.\d+)?$/.test(value)) {
                            value = value + 'px';
                        }
                        // Try fontSize command first, fallback to direct style application
                        try {
                            editor.execCommand('fontSize', false, value);
                        }
                        catch {
                            // Fallback: Apply font-size directly via style
                            editor.s.applyStyle({ fontSize: value });
                        }
                        close();
                    }
                };
                applyBtn.addEventListener('click', handleApply);
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleApply();
                    }
                });
                // Auto focus input
                setTimeout(() => input.focus(), 100);
                return form;
            },
        },
        lineHeight: {
            list: JODIT_LINE_HEIGHTS,
            command: 'applyLineHeight',
            // Add custom value input popup with text input for manual entry
            popup: (editor, current, close) => {
                const form = editor.create.fromHTML(`
          <div style="padding: 10px; min-width: 200px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #333;">Enter Line Height:</label>
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="text" placeholder="e.g., 1.5, 2, 24px" 
                style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px;" />
              <button type="button" style="padding: 8px 16px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Apply</button>
            </div>
            <div style="margin-top: 8px; font-size: 11px; color: #666;">
              Supports: number (1.5, 2) or units (24px, 1.5em)
            </div>
          </div>
        `);
                const input = form.querySelector('input');
                const applyBtn = form.querySelector('button');
                const handleApply = () => {
                    const value = input.value.trim();
                    if (value) {
                        // Try applyLineHeight command first, fallback to direct style application
                        try {
                            editor.execCommand('applyLineHeight', false, value);
                        }
                        catch {
                            // Fallback: Apply line-height directly via style
                            editor.s.applyStyle({ lineHeight: value });
                        }
                        close();
                    }
                };
                applyBtn.addEventListener('click', handleApply);
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleApply();
                    }
                });
                // Auto focus input
                setTimeout(() => input.focus(), 100);
                return form;
            },
        },
    },
};
/**
 * Creates a JoditEditor configuration
 *
 * @param overrides - Configuration overrides to merge with base config
 * @param enableSpeechRecognition - If true, enables speech recognition (default: false)
 * @returns Merged JoditEditor configuration
 */
export function createJoditConfig(overrides = {}, enableSpeechRecognition = false) {
    // Create mutable copies of arrays
    const baseDisablePlugins = [...JODIT_BASE_CONFIG.disablePlugins];
    const baseRemoveButtons = [...JODIT_BASE_CONFIG.removeButtons];
    // If speech recognition is enabled, don't disable it
    if (enableSpeechRecognition) {
        const filteredPlugins = baseDisablePlugins.filter((plugin) => !JODIT_SPEECH_PLUGINS_TO_DISABLE.includes(plugin));
        const filteredButtons = baseRemoveButtons.filter((button) => !JODIT_SPEECH_BUTTONS_TO_REMOVE.includes(button));
        return {
            ...JODIT_BASE_CONFIG,
            ...overrides,
            disablePlugins: overrides.disablePlugins || filteredPlugins,
            removeButtons: overrides.removeButtons || filteredButtons,
            // Merge controls if provided
            controls: overrides.controls
                ? {
                    ...JODIT_BASE_CONFIG.controls,
                    ...overrides.controls,
                }
                : JODIT_BASE_CONFIG.controls,
        };
    }
    return {
        ...JODIT_BASE_CONFIG,
        ...overrides,
        // Merge disablePlugins if provided
        disablePlugins: [
            ...baseDisablePlugins,
            ...(overrides.disablePlugins || []),
        ],
        // Merge removeButtons if provided
        removeButtons: [...baseRemoveButtons, ...(overrides.removeButtons || [])],
        // Merge controls if provided
        controls: overrides.controls
            ? {
                ...JODIT_BASE_CONFIG.controls,
                ...overrides.controls,
            }
            : JODIT_BASE_CONFIG.controls,
    };
}
/**
 * Common paste dialog handler that closes the dialog immediately
 */
export const JODIT_PASTE_DIALOG_HANDLER = {
    afterOpenPasteDialog: (dialog, msg, title, callback) => {
        dialog.close();
        callback();
    },
};
/**
 * Common toolbar buttons configuration organized by category
 * Used across all JoditEditor instances for consistency
 */
export const JODIT_TOOLBAR_BUTTONS = [
    // Source & View
    'source',
    '|',
    // Text Formatting
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'superscript',
    'subscript',
    '|',
    // Font Styling
    'font',
    'fontsize',
    'lineHeight',
    'brush',
    'paragraph',
    'classSpan',
    '|',
    // Lists
    'ul',
    'ol',
    '|',
    // Indentation
    'indent',
    'outdent',
    '|',
    // Alignment
    'align',
    'left',
    'center',
    'right',
    'justify',
    '|',
    // Media & Links
    'image',
    'video',
    'file',
    'link',
    '|',
    // Insert Elements
    'hr',
    'table',
    'symbol',
    '|',
    // Clipboard
    'cut',
    'copy',
    'paste',
    'selectall',
    'copyformat',
    'eraser',
    '|',
    // History
    'undo',
    'redo',
    '|',
    // Tools
    'find',
    'spellcheck',
    'print',
    'fullsize',
    '|',
    // Other
    'dots',
];
