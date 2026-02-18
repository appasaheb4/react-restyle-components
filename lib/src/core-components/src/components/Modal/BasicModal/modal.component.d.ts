import React from 'react';
export type { ModalSize, ModalPosition, ModalClassNames, ModalStyles, ModalProps } from './types';
import type { ModalProps } from './types';
export declare const Modal: ({ visible, title, className, contentClassName, headerClassName, style, contentStyle, onClose, isAutoClose, autoCloseDelay, isAutoCloseOutside, size, position, showCloseButton, closeButton, overlayOpacity, overlayColor, zIndex, closeOnOverlayClick, closeOnEscape, showHeader, headerBgColor, headerTextColor, borderRadius, maxWidth, contentPadding, headerPadding, animationDuration, classNames, styles, children, }: ModalProps) => React.JSX.Element | null;
