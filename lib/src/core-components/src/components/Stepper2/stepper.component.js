import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from '../../tc.module.css';
import { cn } from '../../utils';
const DEFAULT_COLORS = {
    completedColor: '#ffae1a',
    activeColor: '#ffae1a',
    pendingColor: '#d1d5db',
    lineColor: '#d1d5db',
    completedTextColor: '#374151',
    activeTextColor: '#ffffff',
    pendingTextColor: '#9ca3af', // gray-400
};
const SIZE_CONFIG = {
    sm: { stepSize: 24, fontSize: '0.625rem', padding: 2 },
    md: { stepSize: 32, fontSize: '0.75rem', padding: 4 },
    lg: { stepSize: 40, fontSize: '0.875rem', padding: 6 },
};
export const Stepper = ({ className = '', steps, currentStep = 1, onStepClick, size = 'md', colors = {}, showNumbers = true, lineThickness = 2, stepSize, clickable = true, style, orientation = 'horizontal', }) => {
    const mergedColors = { ...DEFAULT_COLORS, ...colors };
    const sizeConfig = SIZE_CONFIG[size];
    const finalStepSize = stepSize || sizeConfig.stepSize;
    const linePosition = sizeConfig.padding + finalStepSize / 2;
    const finalClass = cn(className, s['w-full'], s['px-4'], s['sm:px-8']);
    // Helper to get step info
    const getStepInfo = (step, index) => {
        if (typeof step === 'string') {
            return {
                label: step,
                number: index + 1,
                description: undefined,
                status: undefined,
            };
        }
        return {
            label: step.label,
            number: step.number ?? index + 1,
            description: step.description,
            status: step.status,
        };
    };
    const Steps = steps?.map((step, index) => {
        const stepInfo = getStepInfo(step, index);
        const stepNumber = stepInfo.number;
        // Determine status
        let status;
        if (stepInfo.status) {
            status = stepInfo.status;
        }
        else if (stepNumber < currentStep) {
            status = 'completed';
        }
        else if (stepNumber === currentStep) {
            status = 'current';
        }
        else {
            status = 'pending';
        }
        // Base step classes
        let stepClass = cn(s['inline-block'], s['transform'], s['-translate-x-1/2'], s['rounded-full'], s['text-center'], s['font-medium'], s['border']);
        // Apply styles based on status
        const stepStyles = {
            width: `${finalStepSize}px`,
            height: `${finalStepSize}px`,
            fontSize: sizeConfig.fontSize,
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '2px',
            borderStyle: 'solid',
            transition: 'all 0.3s ease',
            lineHeight: 1,
        };
        if (status === 'completed') {
            stepStyles.borderColor = mergedColors.completedColor;
            stepStyles.backgroundColor = '#ffffff';
            stepStyles.color = mergedColors.completedTextColor;
        }
        else if (status === 'current') {
            stepStyles.borderColor = mergedColors.activeColor;
            stepStyles.backgroundColor = mergedColors.activeColor;
            stepStyles.color = mergedColors.activeTextColor;
        }
        else {
            // pending
            stepStyles.borderColor = mergedColors.pendingColor;
            stepStyles.backgroundColor = '#ffffff';
            stepStyles.color = mergedColors.pendingTextColor;
        }
        if (clickable && onStepClick) {
            stepStyles.cursor = 'pointer';
        }
        return (_jsxs("div", { style: {
                left: steps.length > 1 ? `${(index / (steps.length - 1)) * 100}%` : '50%',
            }, className: cn(s['absolute']), children: [_jsx("span", { className: cn(stepClass, s['font-arimaRegular']), style: stepStyles, onClick: () => {
                        if (clickable && onStepClick) {
                            onStepClick(stepNumber, step, index);
                        }
                    }, children: showNumbers ? stepNumber : stepInfo.label }), !showNumbers && stepInfo.description && (_jsx("div", { style: {
                        position: 'absolute',
                        top: `${finalStepSize + 8}px`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.75rem',
                        color: status === 'current'
                            ? mergedColors.activeColor
                            : mergedColors.pendingTextColor,
                        whiteSpace: 'nowrap',
                    }, children: stepInfo.description }))] }, `step-${index}-${stepInfo.label}`));
    });
    // Calculate progress width based on current step
    const progressWidth = steps.length > 1
        ? `${((currentStep - 1) / (steps.length - 1)) * 100}%`
        : '0%';
    const containerHeight = sizeConfig.padding * 2 + finalStepSize;
    return (_jsx("div", { className: finalClass, style: style, children: _jsxs("div", { className: cn(s['w-full'], s['relative']), style: {
                minHeight: `${containerHeight}px`,
                paddingTop: `${sizeConfig.padding}px`,
            }, children: [_jsx("div", { className: cn(s['absolute'], s['left-0'], s['w-full'], s['transition-width'], s['ease-in-out'], s['duration-500']), style: {
                        top: `${linePosition}px`,
                        height: `${lineThickness}px`,
                        backgroundColor: mergedColors.lineColor,
                        transform: 'translateY(-50%)',
                        zIndex: 0,
                    } }), _jsx("div", { className: cn(s['absolute'], s['left-0'], s['transition-width'], s['ease-in-out'], s['duration-500']), style: {
                        top: `${linePosition}px`,
                        width: progressWidth,
                        height: `${lineThickness}px`,
                        backgroundColor: mergedColors.completedColor,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                    } }), _jsx("div", { className: cn(s['relative'], s['sm:block']), style: { zIndex: 2 }, children: Steps })] }) }));
};
