import React, { CSSProperties } from 'react';
export declare const SPEED_DIAL_DIRECTIONS: readonly ["up", "down", "left", "right"];
export type SpeedDialDirection = (typeof SPEED_DIAL_DIRECTIONS)[number];
export declare const SPEED_DIAL_SIZES: readonly ["small", "medium", "large"];
export type SpeedDialSize = (typeof SPEED_DIAL_SIZES)[number];
export declare const SPEED_DIAL_VARIANTS: readonly ["filled", "outlined", "soft"];
export type SpeedDialVariant = (typeof SPEED_DIAL_VARIANTS)[number];
/** Individual action item */
export interface SpeedDialAction {
    /** Unique identifier */
    id: string;
    /** Icon name (from react-icons, e.g., 'FaShare', 'MdPrint') */
    icon: string;
    /** Custom icon element (overrides icon name) */
    iconElement?: React.ReactNode;
    /** Tooltip text */
    tooltip?: string;
    /** Label text (shown next to icon if showLabels is true) */
    label?: string;
    /** Click handler */
    onClick?: (e: React.MouseEvent) => void;
    /** Disabled state */
    disabled?: boolean;
    /** Custom background color */
    backgroundColor?: string;
    /** Custom icon color */
    iconColor?: string;
    /** Custom class name */
    className?: string;
    /** Custom style */
    style?: CSSProperties;
    /** ARIA label */
    ariaLabel?: string;
}
/** UI Configuration */
export interface SpeedDialUIConfig {
    /** Direction of expansion */
    direction?: SpeedDialDirection;
    /** Size preset */
    size?: SpeedDialSize;
    /** Visual variant */
    variant?: SpeedDialVariant;
    /** Gap between action buttons */
    gap?: number;
    /** Show labels next to actions */
    showLabels?: boolean;
    /** Show tooltips on hover */
    showTooltips?: boolean;
    /** Animation duration in ms */
    animationDuration?: number;
    /** Stagger delay between actions in ms */
    staggerDelay?: number;
    /** Backdrop when open */
    showBackdrop?: boolean;
    /** Backdrop opacity */
    backdropOpacity?: number;
    /** Z-index */
    zIndex?: number;
}
/** Main button configuration */
export interface SpeedDialMainButtonConfig {
    /** Open icon name (default: 'MdAdd') */
    openIcon?: string;
    /** Close icon name (default: 'MdClose') */
    closeIcon?: string;
    /** Custom open icon element */
    openIconElement?: React.ReactNode;
    /** Custom close icon element */
    closeIconElement?: React.ReactNode;
    /** Background color */
    backgroundColor?: string;
    /** Icon color */
    iconColor?: string;
    /** Rotate animation on toggle */
    rotateOnToggle?: boolean;
    /** Rotation degrees */
    rotationDegrees?: number;
    /** ARIA label when closed */
    ariaLabelClosed?: string;
    /** ARIA label when open */
    ariaLabelOpen?: string;
}
/** Custom class names */
export interface SpeedDialClassNames {
    /** Root container */
    root?: string;
    /** Main FAB button */
    fab?: string;
    /** Actions container */
    actions?: string;
    /** Individual action button */
    action?: string;
    /** Action label */
    actionLabel?: string;
    /** Backdrop */
    backdrop?: string;
}
/** Custom styles */
export interface SpeedDialStyles {
    /** Root container */
    root?: CSSProperties;
    /** Main FAB button */
    fab?: CSSProperties;
    /** Actions container */
    actions?: CSSProperties;
    /** Individual action button */
    action?: CSSProperties;
    /** Action label */
    actionLabel?: CSSProperties;
    /** Backdrop */
    backdrop?: CSSProperties;
}
export interface SpeedDialProps {
    /** Array of action items */
    actions: SpeedDialAction[];
    /** Controlled open state */
    open?: boolean;
    /** Default open state (uncontrolled) */
    defaultOpen?: boolean;
    /** Open state change handler */
    onOpenChange?: (open: boolean) => void;
    /** Called when an action is clicked */
    onActionClick?: (action: SpeedDialAction, e: React.MouseEvent) => void;
    /** UI configuration */
    uiConfig?: SpeedDialUIConfig;
    /** Main button configuration */
    mainButtonConfig?: SpeedDialMainButtonConfig;
    /** Custom class names */
    classNames?: SpeedDialClassNames;
    /** Custom styles */
    styles?: SpeedDialStyles;
    /** Disabled state */
    disabled?: boolean;
    /** Hidden state */
    hidden?: boolean;
    /** Close on action click */
    closeOnActionClick?: boolean;
    /** Close on outside click */
    closeOnClickOutside?: boolean;
    /** Close on escape key */
    closeOnEscape?: boolean;
    /** Additional class name */
    className?: string;
    /** Additional style */
    style?: CSSProperties;
    /** ARIA label */
    ariaLabel?: string;
}
