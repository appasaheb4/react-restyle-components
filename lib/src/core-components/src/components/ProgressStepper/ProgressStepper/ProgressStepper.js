'use client';
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from 'react';
import { StepItem } from './StepItem';
export const ProgressStepper = forwardRef(({ steps, size = 'medium', orientation = 'horizontal', isPacked = false, indicatorType = 'dot', activeColor = '#8B5CF6', inactiveColor = '#E5E7EB', className, style, ...rest }, ref) => {
    // Generate accessible aria label based on current step
    const ariaLabel = useMemo(() => {
        const currentStepIndex = steps
            .map((step) => step.state !== 'incomplete')
            .lastIndexOf(true);
        const currentStep = steps[currentStepIndex];
        const label = `step ${currentStepIndex + 1} out of ${steps.length}`;
        if (!currentStep?.subSteps?.length) {
            return label;
        }
        if (currentStep.state === 'inprogress') {
            return `${label} part 1`;
        }
        const subStepIndex = currentStep.subSteps?.findIndex((subStep) => subStep.state === 'inprogress');
        if (subStepIndex !== undefined && subStepIndex >= 0) {
            return `${label} part ${subStepIndex + 2}`;
        }
        return label;
    }, [steps]);
    const hiddenAriaStyle = {
        height: 0,
        opacity: 0,
        position: 'absolute',
        overflow: 'hidden',
    };
    const listContainerStyle = {
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        alignItems: 'flex-start',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: hiddenAriaStyle, "aria-live": "polite", role: "status", children: ariaLabel }), _jsx("ul", { "data-aui": "progress-stepper", ref: ref, "aria-hidden": true, "data-testid": "progress-stepper", style: { ...listContainerStyle, ...style }, className: className, ...rest, children: steps.map((step, index) => (_createElement(StepItem, { ...step, key: step.id || index, index: index, stepsAmount: steps.length, size: size, orientation: orientation, isPacked: isPacked, indicatorType: indicatorType, activeColor: activeColor, inactiveColor: inactiveColor }))) })] }));
});
ProgressStepper.displayName = 'ProgressStepper';
