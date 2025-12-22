import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef, useCallback } from 'react';
import { createJoditConfig, JODIT_PASTE_DIALOG_HANDLER, JODIT_TOOLBAR_BUTTONS, cn, } from '../../../utils';
import JoditEditor from 'jodit-react';
import 'jodit/esm/plugins/resizer/resizer';
import { Icon } from '../..';
import SpeechRecognition, { useSpeechRecognition, } from 'react-speech-recognition';
import s from '../../../tc.module.css';
import { geminiSendMessageService } from './gemini.service';
// CSS-in-JS styles for enhanced visual design
const modalStyles = {
    // Glass-morphism overlay
    overlay: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.9) 100%)',
        backdropFilter: 'blur(8px)',
    },
    // Modal container with subtle gradient border
    container: {
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(148, 163, 184, 0.1)',
    },
    // Header gradient
    header: {
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
    },
    // Action button base styles
    actionButton: {
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    // Footer with subtle top border
    footer: {
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        borderTop: '1px solid rgba(148, 163, 184, 0.3)',
    },
};
// Keyframe animations
const keyframes = `
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @keyframes overlayFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
    }
    50% {
      box-shadow: 0 0 20px 8px rgba(99, 102, 241, 0.2);
    }
  }
  
  @keyframes recordingPulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 20px 8px rgba(220, 38, 38, 0.2);
    }
  }
  
  @keyframes ai-pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(168, 85, 247, 0.4);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(168, 85, 247, 0.6);
    }
  }
  
  @keyframes ai-text-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
export const ModalDocxContent = ({ visible, details = '', onSave, onClose, title = 'Document Editor', aiService = (message, gemini_key) => geminiSendMessageService(message, gemini_key), showAIButton = true, showVoiceButtons = true, uploaderUrl = 'https://www.tech-abl.com/api/assets/uploadFile', folder = 'library', gemini_key = '', classNames = {}, styles = {}, }) => {
    // AI button is only visible when showAIButton is true AND a valid gemini_key is provided
    const isValidGeminiKey = gemini_key && gemini_key.trim() !== '' && gemini_key !== 'xxx';
    const shouldShowAIButton = showAIButton && isValidGeminiKey;
    const joditEditorRef = useRef(null);
    const content = useRef('');
    const [showModal, setShowModal] = useState(visible);
    const parentDivRef = useRef(null);
    const [parentDivWidth, setParentDivWidth] = useState(0);
    const [parentDivHeight, setParentDivHeight] = useState(0);
    // AI processing state
    const [isAIProcessing, setIsAIProcessing] = useState(false);
    // Store selection info (text + occurrence index)
    const selectionInfoRef = useRef(null);
    // Helper: Get selected text and find which occurrence it is
    const getSelectedText = useCallback(() => {
        const editor = joditEditorRef.current;
        if (!editor)
            return '';
        selectionInfoRef.current = null; // Reset
        try {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
                const selectedText = selection.toString().trim();
                if (selectedText) {
                    // Get the full text content of the editor
                    const editorElement = editor.editor || editor.container;
                    const fullText = editorElement?.textContent || '';
                    // Find the position of selection in the text
                    const range = selection.getRangeAt(0);
                    // Calculate text offset from start of editor
                    let textOffset = 0;
                    const treeWalker = document.createTreeWalker(editorElement, NodeFilter.SHOW_TEXT, null);
                    let node;
                    while ((node = treeWalker.nextNode())) {
                        if (node === range.startContainer) {
                            textOffset += range.startOffset;
                            break;
                        }
                        textOffset += node.textContent?.length || 0;
                    }
                    // Count which occurrence this is
                    let occurrenceIndex = 0;
                    let searchPos = 0;
                    const lowerText = fullText.toLowerCase();
                    const lowerSelected = selectedText.toLowerCase();
                    while (searchPos < textOffset) {
                        const foundPos = lowerText.indexOf(lowerSelected, searchPos);
                        if (foundPos === -1 || foundPos >= textOffset)
                            break;
                        occurrenceIndex++;
                        searchPos = foundPos + 1;
                    }
                    selectionInfoRef.current = {
                        text: selectedText,
                        occurrenceIndex: occurrenceIndex,
                    };
                    console.log('[getSelectedText] Found selection:', {
                        text: selectedText,
                        occurrenceIndex,
                        textOffset,
                    });
                    return selectedText;
                }
            }
        }
        catch (error) {
            console.error('[getSelectedText] Error:', error);
        }
        console.log('[getSelectedText] No selection found');
        return '';
    }, []);
    // Helper: Replace the specific occurrence of text in editor content
    const replaceTextInContent = useCallback((originalText, newHtml, occurrenceIndex) => {
        const editor = joditEditorRef.current;
        if (!editor || !originalText)
            return false;
        try {
            const currentHtml = editor.value;
            // Escape special regex characters in the original text
            const escapedText = originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Find all occurrences and replace the specific one
            const regex = new RegExp(escapedText, 'gi');
            let matchIndex = 0;
            const newContent = currentHtml.replace(regex, (match) => {
                if (matchIndex === occurrenceIndex) {
                    matchIndex++;
                    // console.log(
                    //   `[replaceTextInContent] Replacing occurrence ${occurrenceIndex}`,
                    // );
                    return newHtml;
                }
                matchIndex++;
                return match; // Keep other occurrences unchanged
            });
            if (matchIndex > occurrenceIndex) {
                editor.value = newContent;
                // console.log('[replaceTextInContent] Replaced successfully');
                return true;
            }
            // console.log('[replaceTextInContent] Occurrence not found');
            return false;
        }
        catch (error) {
            // console.error('[replaceTextInContent] Error:', error);
            return false;
        }
    }, []);
    // Handle AI button click
    const handleAIButtonClick = useCallback(async () => {
        if (isAIProcessing || !content.current.trim())
            return;
        // Get selected text BEFORE async call (also saves occurrence index)
        const selectedText = getSelectedText();
        const hasSelection = selectedText.length > 0;
        const selectionInfo = selectionInfoRef.current;
        const textToProcess = hasSelection ? selectedText : content.current.trim();
        setIsAIProcessing(true);
        try {
            const response = await aiService(textToProcess, gemini_key);
            if (response?.text && joditEditorRef.current) {
                const aiResponse = `<span style="color: #6366f1; font-style: italic;">${response.text}</span>`;
                if (hasSelection && selectionInfo) {
                    // Replace the specific occurrence using saved index
                    replaceTextInContent(selectedText, aiResponse, selectionInfo.occurrenceIndex);
                    content.current = joditEditorRef.current.value;
                }
                else {
                    // Replace all content with AI response (original behavior)
                    joditEditorRef.current.value = aiResponse;
                    content.current = aiResponse;
                }
                joditEditorRef.current.focus();
            }
        }
        catch (error) {
            console.error('AI Error:', error);
        }
        finally {
            setIsAIProcessing(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAIProcessing, aiService]);
    // Speech recognition
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, } = useSpeechRecognition();
    const [lastTranscript, setLastTranscript] = useState('');
    // Local state to track if THIS modal started recording (not global listening state)
    const [isRecording, setIsRecording] = useState(false);
    // Ref to track recording state for event handlers (avoids stale closure issues)
    const isRecordingRef = useRef(false);
    // Track if manual mode is active (continuous listening without auto-stop)
    const isManualModeRef = useRef(false);
    // State for UI rendering of manual mode indicator
    const [isManualMode, setIsManualMode] = useState(false);
    // Auto-stop silence timer ref
    const silenceTimerRef = useRef(null);
    // Track last transcript change time for auto-stop
    const lastTranscriptTimeRef = useRef(Date.now());
    // Watchdog interval ref for manual mode (checks every 1 sec if recording is still active)
    const watchdogIntervalRef = useRef(null);
    // Ref to track listening state (avoids stale closure in interval)
    const listeningRef = useRef(listening);
    // Cleanup: Stop listening when component unmounts
    useEffect(() => {
        setTimeout(() => {
            SpeechRecognition.stopListening();
            resetTranscript();
            isRecordingRef.current = false;
            setIsRecording(false);
            isManualModeRef.current = false;
            setIsManualMode(false);
            if (silenceTimerRef.current) {
                clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = null;
            }
            if (watchdogIntervalRef.current) {
                clearInterval(watchdogIntervalRef.current);
                watchdogIntervalRef.current = null;
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Keep listeningRef in sync with listening state
    useEffect(() => {
        listeningRef.current = listening;
    }, [listening]);
    // Restart counter for debugging
    const restartCountRef = useRef(0);
    // Last forced restart time
    const lastForceRestartRef = useRef(Date.now());
    // Soft restart speech recognition - only called when browser stopped listening
    // Does NOT abort - just starts listening again to avoid losing words
    const softRestartRecognition = useCallback(() => {
        if (!isManualModeRef.current || !isRecordingRef.current)
            return;
        restartCountRef.current += 1;
        console.log(`[Watchdog ${new Date().toLocaleTimeString()}] Soft restart #${restartCountRef.current} (browser had stopped)`);
        // Don't abort - just start listening directly
        // This avoids losing any words that might be in the buffer
        SpeechRecognition.startListening({
            continuous: true,
            interimResults: true,
            language: 'en-US',
        });
        lastForceRestartRef.current = Date.now();
    }, []);
    // Start watchdog function - Only restart when browser stops listening
    const startWatchdog = useCallback(() => {
        // Clear any existing watchdog first
        if (watchdogIntervalRef.current) {
            clearInterval(watchdogIntervalRef.current);
            watchdogIntervalRef.current = null;
        }
        restartCountRef.current = 0;
        lastForceRestartRef.current = Date.now();
        // Create persistent watchdog that runs every 1 second
        watchdogIntervalRef.current = setInterval(() => {
            // Only restart if: manual mode active, recording on, AND browser stopped listening
            // Don't force restart while listening - this would lose words
            if (isManualModeRef.current &&
                isRecordingRef.current &&
                !listeningRef.current) {
                console.log(`[Watchdog ${new Date().toLocaleTimeString()}] Browser stopped - restarting`);
                softRestartRecognition();
            }
        }, 1000);
        console.log('[Watchdog] Started - will restart only when browser stops');
    }, [softRestartRecognition]);
    // Stop watchdog function
    const stopWatchdog = useCallback(() => {
        if (watchdogIntervalRef.current) {
            clearInterval(watchdogIntervalRef.current);
            watchdogIntervalRef.current = null;
            console.log('[Watchdog] Stopped');
        }
    }, []);
    // Listen for speech recognition end/error events when recording starts
    useEffect(() => {
        if (!isRecording)
            return;
        const recognition = SpeechRecognition.getRecognition();
        if (!recognition)
            return;
        const handleEnd = () => {
            // Use ref to get current recording state (avoids stale closure)
            // If recording was stopped (by silence timer or user), don't restart
            if (!isRecordingRef.current) {
                console.log('[handleEnd] Recording stopped - not restarting');
                return;
            }
            // In manual mode, always restart listening
            if (isManualModeRef.current) {
                console.log('[handleEnd] Manual mode - restarting');
                setTimeout(() => {
                    if (isManualModeRef.current && isRecordingRef.current) {
                        SpeechRecognition.startListening({
                            continuous: true,
                            interimResults: true,
                            language: 'en-US',
                        });
                    }
                }, 100);
            }
            else if (isRecordingRef.current) {
                // In auto-stop mode, only restart if still recording (browser stopped unexpectedly)
                console.log('[handleEnd] Auto-stop mode - browser stopped, restarting');
                setTimeout(() => {
                    if (!isManualModeRef.current && isRecordingRef.current) {
                        SpeechRecognition.startListening({
                            continuous: true,
                            interimResults: true,
                            language: 'en-US',
                        });
                    }
                }, 100);
            }
        };
        const handleError = () => {
            // Use ref to get current recording state (avoids stale closure)
            if (!isRecordingRef.current)
                return;
            // In manual mode, try to restart on error
            if (isManualModeRef.current) {
                setTimeout(() => {
                    if (isManualModeRef.current && isRecordingRef.current) {
                        SpeechRecognition.startListening({
                            continuous: true,
                            interimResults: true,
                            language: 'en-US',
                        });
                    }
                }, 100);
            }
            else {
                // In auto-stop mode, restart on error as well
                setTimeout(() => {
                    if (!isManualModeRef.current && isRecordingRef.current) {
                        SpeechRecognition.startListening({
                            continuous: true,
                            interimResults: true,
                            language: 'en-US',
                        });
                    }
                }, 100);
            }
        };
        recognition.addEventListener('end', handleEnd);
        recognition.addEventListener('error', handleError);
        return () => {
            recognition.removeEventListener('end', handleEnd);
            recognition.removeEventListener('error', handleError);
        };
    }, [isRecording]);
    // Handle transcript changes - exactly like reference implementation
    useEffect(() => {
        if (!joditEditorRef.current)
            return;
        // Track changes like reference: https://github.com/RahulSM2002/SpeechRecognition/blob/main/src/components/SpeechToTextField.tsx
        if (transcript !== lastTranscript) {
            try {
                const editor = joditEditorRef.current;
                editor.focus();
                // Get only the new text that was added (incremental update)
                const newText = transcript.slice(lastTranscript.length);
                if (newText) {
                    // Remove newlines to ensure single line
                    const cleanText = newText.replace(/\n/g, ' ').replace(/\r/g, '');
                    if (cleanText) {
                        // Move cursor to end of editor content
                        editor.selection.setCursorIn(editor.editor, false);
                        // Check if there's existing text and add space before first speech-to-text input
                        const currentValue = editor.value || '';
                        const hasExistingText = currentValue.trim().length > 0;
                        const isFirstInsert = lastTranscript.length === 0;
                        // Add space if there's existing text and this is the first insert after starting recording
                        // This ensures proper spacing when speech-to-text starts with existing content
                        const textToInsert = hasExistingText && isFirstInsert && !currentValue.endsWith(' ')
                            ? ' ' + cleanText
                            : cleanText;
                        // Use JoditEditor's insertHTML to insert plain text inline
                        // Escape HTML to ensure it's treated as plain text
                        const escapedText = textToInsert
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;');
                        editor.selection.insertHTML(escapedText);
                        // Move cursor to end after insertion
                        editor.selection.setCursorIn(editor.editor, false);
                        // Update content ref
                        content.current = editor.value;
                        // Reset silence timer in auto-stop mode when new words are detected
                        if (!isManualModeRef.current && isRecordingRef.current) {
                            lastTranscriptTimeRef.current = Date.now();
                            // Restart the silence timer
                            if (silenceTimerRef.current) {
                                clearTimeout(silenceTimerRef.current);
                            }
                            silenceTimerRef.current = setTimeout(() => {
                                if (!isManualModeRef.current && isRecordingRef.current) {
                                    console.log('[Auto-Stop] 5 seconds of silence - stopping');
                                    isRecordingRef.current = false; // Set ref BEFORE stopping
                                    setIsRecording(false);
                                    SpeechRecognition.stopListening();
                                }
                            }, 5000); // 5 seconds of silence before auto-stop
                        }
                    }
                }
                setLastTranscript(transcript);
            }
            catch (error) {
                console.error('Error updating transcript:', error);
            }
        }
    }, [transcript, lastTranscript, isRecording]);
    // Auto-stop silence detection constant (5 seconds of silence - increased for better experience)
    const AUTO_STOP_SILENCE_DURATION = 5000;
    // Function to start silence detection timer for auto-stop mode
    const startSilenceTimer = useCallback(() => {
        // Clear any existing timer
        if (silenceTimerRef.current) {
            clearTimeout(silenceTimerRef.current);
        }
        // Start new timer - will stop recording after silence duration
        silenceTimerRef.current = setTimeout(() => {
            if (!isManualModeRef.current && isRecordingRef.current) {
                console.log('[Auto-Stop] Silence timer expired - stopping');
                isRecordingRef.current = false; // Set ref BEFORE stopping to prevent handleEnd restart
                setIsRecording(false);
                SpeechRecognition.stopListening();
            }
        }, AUTO_STOP_SILENCE_DURATION);
    }, []);
    // Handle auto-stop recording (stops automatically after 3 seconds of silence)
    const handleAutoStopRecordClick = useCallback(() => {
        if (!browserSupportsSpeechRecognition) {
            return;
        }
        if (isRecording) {
            isManualModeRef.current = false;
            setIsManualMode(false);
            if (silenceTimerRef.current) {
                clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = null;
            }
            SpeechRecognition.stopListening();
            isRecordingRef.current = false;
            setIsRecording(false);
        }
        else {
            isManualModeRef.current = false; // Auto-stop mode
            setIsManualMode(false);
            lastTranscriptTimeRef.current = Date.now();
            resetTranscript();
            setLastTranscript('');
            SpeechRecognition.startListening({
                continuous: true,
                interimResults: true,
                language: 'en-US',
            });
            isRecordingRef.current = true;
            setIsRecording(true);
            // Start silence detection timer
            startSilenceTimer();
        }
    }, [
        isRecording,
        resetTranscript,
        browserSupportsSpeechRecognition,
        startSilenceTimer,
    ]);
    // Handle manual-stop recording (requires manual stop - continuous listening)
    const handleManualStopRecordClick = useCallback(() => {
        if (!browserSupportsSpeechRecognition) {
            return;
        }
        if (isRecording) {
            // STOP recording
            isManualModeRef.current = false;
            setIsManualMode(false);
            // Stop watchdog
            stopWatchdog();
            // Clear any silence timer
            if (silenceTimerRef.current) {
                clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = null;
            }
            SpeechRecognition.stopListening();
            isRecordingRef.current = false;
            setIsRecording(false);
            console.log('[Manual Mode] Stopped by user');
        }
        else {
            // START recording
            isManualModeRef.current = true;
            setIsManualMode(true);
            isRecordingRef.current = true;
            setIsRecording(true);
            // Clear any silence timer (not used in manual mode)
            if (silenceTimerRef.current) {
                clearTimeout(silenceTimerRef.current);
                silenceTimerRef.current = null;
            }
            resetTranscript();
            setLastTranscript('');
            // Start listening
            SpeechRecognition.startListening({
                continuous: true,
                interimResults: true,
                language: 'en-US',
            });
            // Start watchdog to keep it running forever
            startWatchdog();
            console.log('[Manual Mode] Started - will run until manually stopped');
        }
    }, [
        isRecording,
        resetTranscript,
        browserSupportsSpeechRecognition,
        startWatchdog,
        stopWatchdog,
    ]);
    useEffect(() => {
        if (parentDivRef.current) {
            const { width, height } = parentDivRef.current.getBoundingClientRect();
            setParentDivWidth(width - 16);
            setParentDivHeight(height - 120);
        }
    }, [showModal]);
    useEffect(() => {
        content.current = details || '';
        setShowModal(visible);
        // Stop any ongoing speech recognition and reset state when modal opens/closes
        // Always reset local recording state
        isManualModeRef.current = false;
        setIsManualMode(false);
        if (silenceTimerRef.current) {
            clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = null;
        }
        SpeechRecognition.stopListening();
        resetTranscript();
        setLastTranscript('');
        isRecordingRef.current = false;
        setIsRecording(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible, details]);
    const config = createJoditConfig({
        height: parentDivHeight,
        width: window.innerWidth / 1.24,
        disabled: false,
        buttons: JODIT_TOOLBAR_BUTTONS,
        events: {
            afterInit: (instance) => {
                joditEditorRef.current = instance;
            },
            afterOpenPasteDialog: JODIT_PASTE_DIALOG_HANDLER.afterOpenPasteDialog,
        },
        uploader: {
            url: uploaderUrl,
            prepareData: function (data) {
                data.append('folder', folder);
                data.delete('path');
                data.delete('source');
            },
            isSuccess: function (resp) {
                console.log({ resp });
                if (joditEditorRef.current) {
                    joditEditorRef.current.selection.insertHTML(`<img src=${resp?.url} alt="logo" style="width:100%;height:auto"/>`);
                }
            },
        },
    }, false // Disable speech recognition and remove speech button
    );
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: keyframes }), showModal && (_jsx(_Fragment, { children: _jsx("div", { className: cn(s['fixed'], s['inset-0'], s['z-50'], s['flex'], s['justify-center'], s['items-center'], s['overflow-hidden'], classNames.overlay), style: {
                        ...modalStyles.overlay,
                        animation: 'overlayFadeIn 0.3s ease-out forwards',
                        ...styles.overlay,
                    }, children: _jsx("div", { ref: parentDivRef, className: cn(s['relative'], s['w-auto'], s['mx-auto'], classNames.container), style: {
                            width: `${config.width + 40}px`,
                            animation: 'modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                            ...styles.container,
                        }, children: _jsxs("div", { className: cn(s['relative'], s['flex'], s['flex-col'], s['w-full'], s['overflow-hidden']), style: {
                                ...modalStyles.container,
                                borderRadius: '24px',
                                height: window.outerHeight / 1.3,
                            }, children: [_jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['p-4'], classNames.header), style: {
                                        ...modalStyles.header,
                                        borderRadius: '24px 24px 0 0',
                                        padding: '16px 24px',
                                        ...styles.header,
                                    }, children: [_jsxs("div", { className: cn(s['flex'], s['items-center']), style: { gap: '12px' }, children: [_jsx("div", { className: cn(s['flex'], s['items-center'], s['justify-center']), style: {
                                                        width: '40px',
                                                        height: '40px',
                                                        borderRadius: '12px',
                                                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                                                    }, children: _jsx(Icon, { nameIcon: "IoDocumentTextOutline", propsIcon: { color: '#ffffff', size: 22 } }) }), _jsx("h3", { className: cn(s['text-xl'], s['font-semibold']), style: {
                                                        color: '#f8fafc',
                                                        fontWeight: 700,
                                                        letterSpacing: '-0.025em',
                                                    }, children: title })] }), _jsxs("div", { className: cn(s['flex'], s['items-center']), style: { gap: '12px' }, children: [isRecording && (_jsxs("div", { className: cn(s['flex'], s['items-center']), style: {
                                                        gap: '8px',
                                                        padding: '8px 16px',
                                                        borderRadius: '9999px',
                                                        background: isManualMode
                                                            ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(185, 28, 28, 0.2) 100%)'
                                                            : 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%)',
                                                        border: `1px solid ${isManualMode ? 'rgba(220, 38, 38, 0.4)' : 'rgba(34, 197, 94, 0.4)'}`,
                                                    }, children: [_jsx("span", { style: {
                                                                width: '10px',
                                                                height: '10px',
                                                                borderRadius: '50%',
                                                                background: isManualMode ? '#dc2626' : '#22c55e',
                                                                animation: 'pulseGlow 1.5s ease-in-out infinite',
                                                            } }), _jsx("span", { className: cn(s['text-sm']), style: {
                                                                fontWeight: 500,
                                                                color: isManualMode ? '#fca5a5' : '#86efac',
                                                            }, children: isManualMode ? 'Continuous Mode' : 'Auto-Stop Mode' })] })), shouldShowAIButton && (_jsx("button", { className: cn(s['relative'], s['flex'], s['items-center'], s['justify-center'], s['border-0'], s['outline-none'], s['focus:outline-none']), style: {
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '12px',
                                                        cursor: 'pointer',
                                                        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                                                        boxShadow: isAIProcessing
                                                            ? '0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)'
                                                            : '0 4px 15px rgba(99, 102, 241, 0.4)',
                                                        animation: isAIProcessing
                                                            ? 'ai-pulse 1.5s ease-in-out infinite'
                                                            : 'none',
                                                        ...modalStyles.actionButton,
                                                    }, onClick: handleAIButtonClick, disabled: isAIProcessing, title: isAIProcessing
                                                        ? 'AI is processing...'
                                                        : 'Ask AI to enhance content', children: _jsx("span", { className: cn(s['font-bold']), style: {
                                                            fontSize: '14px',
                                                            color: '#ffffff',
                                                            animation: isAIProcessing
                                                                ? 'ai-text-pulse 1.5s ease-in-out infinite'
                                                                : 'none',
                                                        }, children: "AI" }) })), showVoiceButtons && browserSupportsSpeechRecognition && (_jsxs(_Fragment, { children: [_jsx("button", { className: cn(s['flex'], s['items-center'], s['justify-center'], s['border-0'], s['outline-none'], s['focus:outline-none']), style: {
                                                                width: '44px',
                                                                height: '44px',
                                                                borderRadius: '12px',
                                                                cursor: 'pointer',
                                                                background: isRecording && !isManualMode
                                                                    ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                                                                    : 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                                                                boxShadow: isRecording && !isManualMode
                                                                    ? '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.2)'
                                                                    : '0 4px 12px rgba(34, 197, 94, 0.3)',
                                                                animation: isRecording && !isManualMode
                                                                    ? 'pulseGlow 1.5s ease-in-out infinite'
                                                                    : 'none',
                                                                ...modalStyles.actionButton,
                                                            }, onClick: handleAutoStopRecordClick, title: "Auto Stop - Stops automatically after 5 seconds of silence", children: _jsx(Icon, { nameIcon: isRecording && !isManualMode
                                                                    ? 'IoMic'
                                                                    : 'IoMicOutline', propsIcon: { color: '#ffffff', size: 22 } }) }), _jsx("button", { className: cn(s['flex'], s['items-center'], s['justify-center'], s['border-0'], s['outline-none'], s['focus:outline-none']), style: {
                                                                width: '44px',
                                                                height: '44px',
                                                                borderRadius: '12px',
                                                                cursor: 'pointer',
                                                                background: isRecording && isManualMode
                                                                    ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                                                                    : 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                                                                boxShadow: isRecording && isManualMode
                                                                    ? '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.2)'
                                                                    : '0 4px 12px rgba(139, 92, 246, 0.3)',
                                                                animation: isRecording && isManualMode
                                                                    ? 'recordingPulse 1.5s ease-in-out infinite'
                                                                    : 'none',
                                                                ...modalStyles.actionButton,
                                                            }, onClick: handleManualStopRecordClick, title: "Continuous Mode - Records until manually stopped", children: _jsx(Icon, { nameIcon: isRecording && isManualMode
                                                                    ? 'IoMic'
                                                                    : 'IoMicOutline', propsIcon: { color: '#ffffff', size: 22 } }) })] })), _jsx("div", { style: {
                                                        width: '1px',
                                                        height: '32px',
                                                        margin: '0 4px',
                                                        background: 'rgba(148, 163, 184, 0.3)',
                                                    } }), _jsx("button", { className: cn(s['flex'], s['items-center'], s['justify-center'], s['outline-none'], s['focus:outline-none']), style: {
                                                        width: '44px',
                                                        height: '44px',
                                                        borderRadius: '12px',
                                                        cursor: 'pointer',
                                                        background: 'rgba(239, 68, 68, 0.1)',
                                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                                        ...modalStyles.actionButton,
                                                    }, onClick: () => {
                                                        isManualModeRef.current = false;
                                                        setIsManualMode(false);
                                                        stopWatchdog();
                                                        if (silenceTimerRef.current) {
                                                            clearTimeout(silenceTimerRef.current);
                                                            silenceTimerRef.current = null;
                                                        }
                                                        SpeechRecognition.stopListening();
                                                        resetTranscript();
                                                        setLastTranscript('');
                                                        isRecordingRef.current = false;
                                                        setIsRecording(false);
                                                        setShowModal(false);
                                                        onClose && onClose();
                                                    }, onMouseEnter: (e) => {
                                                        e.currentTarget.style.background =
                                                            'rgba(239, 68, 68, 0.2)';
                                                    }, onMouseLeave: (e) => {
                                                        e.currentTarget.style.background =
                                                            'rgba(239, 68, 68, 0.1)';
                                                    }, title: "Close", children: _jsx(Icon, { nameIcon: "IoCloseOutline", propsIcon: { color: '#f87171', size: 22 } }) })] })] }), _jsx("div", { id: "editorContent", className: cn(s['relative'], s['flex-1'], classNames.body), style: {
                                        width: '100%',
                                        overflow: 'hidden',
                                        padding: '16px',
                                        background: '#ffffff',
                                        ...styles.body,
                                    }, children: _jsx(JoditEditor, { ref: (editor) => {
                                            joditEditorRef.current = editor;
                                        }, value: content.current || '', config: {
                                            ...config,
                                            width: '100%',
                                            height: window.outerHeight / 1.5 - 130,
                                        }, onBlur: (newContent) => {
                                            content.current = newContent;
                                        } }) }), _jsxs("div", { className: cn(s['flex'], s['items-center'], s['justify-between'], s['p-4'], classNames.footer), style: {
                                        ...modalStyles.footer,
                                        borderRadius: '0 0 24px 24px',
                                        padding: '16px 24px',
                                        ...styles.footer,
                                    }, children: [_jsx("div", { className: cn(s['flex'], s['items-center']), style: { gap: '8px' }, children: _jsxs("span", { style: { fontSize: '12px', color: '#94a3b8' }, children: ["Press", ' ', _jsx("kbd", { style: {
                                                            padding: '2px 6px',
                                                            borderRadius: '4px',
                                                            fontSize: '12px',
                                                            fontFamily: 'monospace',
                                                            background: 'rgba(148, 163, 184, 0.2)',
                                                            border: '1px solid rgba(148, 163, 184, 0.3)',
                                                            color: '#64748b',
                                                        }, children: "Esc" }), ' ', "to close"] }) }), _jsxs("div", { className: cn(s['flex'], s['items-center']), style: { gap: '12px' }, children: [_jsx("button", { className: cn(s['font-bold'], s['uppercase'], s['outline-none'], s['focus:outline-none']), style: {
                                                        padding: '10px 20px',
                                                        borderRadius: '12px',
                                                        fontSize: '14px',
                                                        fontWeight: 600,
                                                        background: 'transparent',
                                                        border: '1px solid rgba(148, 163, 184, 0.4)',
                                                        color: '#64748b',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease',
                                                    }, type: "button", onClick: () => {
                                                        isManualModeRef.current = false;
                                                        setIsManualMode(false);
                                                        if (silenceTimerRef.current) {
                                                            clearTimeout(silenceTimerRef.current);
                                                            silenceTimerRef.current = null;
                                                        }
                                                        SpeechRecognition.stopListening();
                                                        resetTranscript();
                                                        setLastTranscript('');
                                                        isRecordingRef.current = false;
                                                        setIsRecording(false);
                                                        setShowModal(false);
                                                        onClose && onClose();
                                                    }, onMouseEnter: (e) => {
                                                        e.currentTarget.style.background =
                                                            'rgba(148, 163, 184, 0.1)';
                                                    }, onMouseLeave: (e) => {
                                                        e.currentTarget.style.background = 'transparent';
                                                    }, children: "Cancel" }), _jsx("button", { className: cn(s['text-white'], s['font-bold'], s['uppercase'], s['shadow'], s['outline-none'], s['focus:outline-none']), style: {
                                                        padding: '10px 24px',
                                                        borderRadius: '12px',
                                                        fontSize: '14px',
                                                        fontWeight: 600,
                                                        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                                        border: 'none',
                                                        boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease',
                                                    }, type: "button", onClick: () => {
                                                        setShowModal(false);
                                                        onSave(content.current);
                                                    }, onMouseEnter: (e) => {
                                                        e.currentTarget.style.boxShadow =
                                                            '0 6px 20px rgba(34, 197, 94, 0.4)';
                                                    }, onMouseLeave: (e) => {
                                                        e.currentTarget.style.boxShadow =
                                                            '0 4px 12px rgba(34, 197, 94, 0.3)';
                                                    }, children: "Save Changes" })] })] })] }) }) }) }))] }));
};
