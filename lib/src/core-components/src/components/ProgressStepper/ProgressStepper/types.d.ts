import React from 'react';
export type ProgressStepperOrientation = 'horizontal' | 'vertical';
export type ProgressStepperSize = 'small' | 'medium' | 'large';
export type ProgressStepperStepState = 'incomplete' | 'inprogress' | 'complete' | 'warning' | 'error';
/**
 * Indicator type for each step:
 * - 'dot': Simple circle dot
 * - 'number': Step number display
 * - 'icon': Custom icon only
 * - 'iconCircle': Icon inside a circle
 * - 'check': Checkmark icon (auto for complete state)
 */
export type ProgressStepperIndicatorType = 'dot' | 'number' | 'icon' | 'iconCircle' | 'check';
export interface ProgressStepperStep {
    /** Unique identifier for the step */
    id?: string;
    /** Current state of the step */
    state: ProgressStepperStepState;
    /** Title text for the step */
    stepTitle?: string;
    /** Subtitle text for the step */
    stepSubTitle?: string;
    /** Link URL for the step */
    stepLinkHref?: string;
    /** Link text for the step */
    stepLinkText?: string;
    /** Tag text to display */
    tagText?: string;
    /** Tag variant */
    tagVariant?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
    /** Sub-steps for partial progress */
    subSteps?: ProgressStepperStep[];
    /** Custom icon for the step (React node) */
    icon?: React.ReactNode;
    /** Icon source URL (alternative to icon prop) */
    iconSrc?: string;
    /** Step number override (for number indicator type) */
    stepNumber?: number;
}
export interface ProgressStepperLineItem extends ProgressStepperStep {
    /** Index of the step in the list */
    index: number;
    /** Total number of steps */
    stepsAmount: number;
    /** Size of the step indicator */
    size: ProgressStepperSize;
    /** Orientation of the stepper */
    orientation: ProgressStepperOrientation;
    /** Whether to use compact spacing */
    isPacked?: boolean;
    /** Type of indicator to display */
    indicatorType: ProgressStepperIndicatorType;
    /** Primary color for active/complete states */
    activeColor?: string;
    /** Color for incomplete state */
    inactiveColor?: string;
}
export interface ProgressStepperProps extends React.HTMLAttributes<HTMLUListElement> {
    /** Array of steps to display */
    steps: ProgressStepperStep[];
    /** Orientation of the progress stepper */
    orientation?: ProgressStepperOrientation;
    /** Size of the step indicators */
    size?: ProgressStepperSize;
    /** Whether to use compact vertical spacing */
    isPacked?: boolean;
    /** Type of indicator to display for all steps */
    indicatorType?: ProgressStepperIndicatorType;
    /** Primary color for active/complete states */
    activeColor?: string;
    /** Color for incomplete state */
    inactiveColor?: string;
    /** Custom class name */
    className?: string;
}
