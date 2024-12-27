import '../../../tc.module.css';
interface StepperProps {
    className?: string;
    steps: Array<string>;
    currentStep: number;
    onStepClick: (currentStep: any, index: any) => void;
}
export declare const Stepper: ({ className, steps, currentStep, onStepClick, }: StepperProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=stepper.component.d.ts.map