import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Stepper = ({ className = '', steps, currentStep = 1, onStepClick, }) => {
    const finalClass = `${className} w-full px-4 sm:px-8`;
    const progressClass = 'absolute my-4 top-1/2 left-0 h-0.5  transform -translate-y-1/2 bg-orange transition-width ease-in-out duration-500';
    const Steps = steps?.map((step, index) => {
        let stepClass = 'inline-block transform -translate-x-1/2 pt-1 w-8 h-8 rounded-full text-center';
        if (index < currentStep)
            stepClass +=
                ' font-medium border border-orange  bg-background-secondary text-gray';
        else if (index > currentStep)
            stepClass +=
                ' font-medium border border-gray-dark-secondary text-gray bg-background-secondary';
        else if (currentStep === index)
            stepClass += ' font-medium bg-orange text-white';
        if (typeof onStepClick === 'function')
            stepClass += ' cursor-pointer';
        return (_jsx("div", { style: { left: `${(index / (steps.length - 1)) * 100}%` }, className: "absolute", children: _jsx("span", { className: `${stepClass} font-arimaRegular  text-4xs text-center`, onClick: () => {
                    if (typeof onStepClick === 'function')
                        onStepClick(index + 1, step);
                }, children: step }) }, step));
    });
    return (_jsxs("div", { className: finalClass, children: [_jsxs("div", { className: "w-full relative", children: [_jsx("div", { className: progressClass, style: {
                            width: `${(currentStep / (steps.length - 1)) * 100}%`,
                        }, children: _jsx("div", { className: "w-3 h-3 bg-orange rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2" }) }), _jsx("div", { className: 'absolute h-0.5 my-4 top-1/2 left-0 transform -translate-y-1/2 bg-gray-dark-secondary transition-width ease-in-out duration-500', style: {
                            marginLeft: `${(currentStep / (steps.length - 1)) * 100}%`,
                            width: `${100 - (currentStep / (steps.length - 1)) * 100}%`,
                        } })] }), _jsx("div", { className: "relative sm:block", children: Steps })] }));
};
