import React from 'react';
import '../../../../tc.css';
interface StepperProps {
    className?: string;
    steps: Array<string>;
    currentStep: number;
    onStepClick: (currentStep: any, index: any) => void;
}
export declare const Stepper: ({ className, steps, currentStep, onStepClick, }: StepperProps) => React.JSX.Element;
export {};
