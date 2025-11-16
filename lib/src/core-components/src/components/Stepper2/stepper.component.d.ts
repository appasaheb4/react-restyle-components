import React from 'react';
export type StepperSize = 'sm' | 'md' | 'lg';
export type StepperStepStatus = 'completed' | 'current' | 'pending';
export interface StepperStep {
    /** Step label/name */
    label: string;
    /** Optional step number (if not provided, uses index + 1) */
    number?: number;
    /** Optional description for the step */
    description?: string;
    /** Optional custom status override */
    status?: StepperStepStatus;
}
export interface StepperColors {
    /** Color for completed steps (border and progress line) */
    completedColor?: string;
    /** Color for current/active step */
    activeColor?: string;
    /** Color for pending/future steps */
    pendingColor?: string;
    /** Color for background line */
    lineColor?: string;
    /** Text color for completed steps */
    completedTextColor?: string;
    /** Text color for current step */
    activeTextColor?: string;
    /** Text color for pending steps */
    pendingTextColor?: string;
}
export interface StepperProps {
    /** Additional className for the container */
    className?: string;
    /** Step items - can be strings or StepperStep objects */
    steps: Array<string | StepperStep>;
    /** Current active step (1-based index) */
    currentStep?: number;
    /** Callback when a step is clicked */
    onStepClick?: (stepNumber: number, step: string | StepperStep, index: number) => void;
    /** Size variant */
    size?: StepperSize;
    /** Custom colors */
    colors?: StepperColors;
    /** Show step numbers */
    showNumbers?: boolean;
    /** Line thickness in pixels */
    lineThickness?: number;
    /** Step circle size in pixels */
    stepSize?: number;
    /** Enable/disable step clicking */
    clickable?: boolean;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Orientation (horizontal is default) */
    orientation?: 'horizontal' | 'vertical';
}
export declare const Stepper: ({ className, steps, currentStep, onStepClick, size, colors, showNumbers, lineThickness, stepSize, clickable, style, orientation, }: StepperProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=stepper.component.d.ts.map