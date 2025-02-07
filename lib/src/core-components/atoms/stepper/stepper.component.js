import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from '../../../tc.module.css';
import { cn } from '../../../core-utils';
export const Stepper = ({ className = '', steps, currentStep = 1, onStepClick, }) => {
    const finalClass = cn(className, s['w-full'], s['px-4'], s['sm:px-8']);
    const progressClass = cn(s['absolute'], s['my-4'], s['top-1/2'], s['left-0'], s['h-0.5'], s['transform'], s['-translate-y-1/2'], s['bg-orange'], s['transition-width'], s['ease-in-out'], s['duration-500']);
    const Steps = steps?.map((step, index) => {
        let stepClass = cn(s['inline-block'], s['transform'], s['-translate-x-1/2'], s['pt-1'], s['w-8'], s['h-8'], s['rounded-full'], s['text-center']);
        if (index < currentStep)
            stepClass = cn(stepClass, s['font-medium'], s['border'], s['border-orange'], s['bg-background-secondary'], s['text-gray'], s['bg-white']);
        else if (index > currentStep)
            stepClass = cn(stepClass, s['font-medium'], s['border'], s['border-gray-dark-secondary'], s['text-gray'], s['bg-background-secondary'], s['bg-white']);
        else if (currentStep === index)
            stepClass = cn(stepClass, s['font-medium'], s['bg-orange'], s['text-white'], s['border']);
        if (typeof onStepClick === 'function')
            stepClass = cn(stepClass, s['cursor-pointer']);
        return (_jsx("div", { style: { left: `${(index / (steps.length - 1)) * 100}%` }, className: cn(s['absolute']), children: _jsx("span", { className: cn(stepClass, s['font-arimaRegular'], s['text-4xs'], s['text-center'], s['z-2']), onClick: () => {
                    if (typeof onStepClick === 'function')
                        onStepClick(index + 1, step);
                }, children: step }) }, step));
    });
    return (_jsxs("div", { className: finalClass, children: [_jsx("div", { className: cn(s['w-full'], s['relative'], s['z-0']), children: _jsx("div", { className: progressClass, style: {
                        // width: `${(currentStep / (steps.length - 1)) * 100}%`,
                        width: `100%`,
                    }, children: _jsx("div", { className: cn(s['w-3'], s['h-3'], s['bg-orange'], s['rounded-full'], s['absolute'], s['right-0'], s['top-1/2'], s['transform'], s['translate-x-1/2'], s['-translate-y-1/2']) }) }) }), _jsx("div", { className: cn(s['relative'], s['sm:block']), children: Steps })] }));
};
