import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from '../../tc.module.css';
import { cn } from '../../utils';
const sizeClasses = {
    sm: {
        wrapper: cn(s['w-4'], s['h-4']),
        spinner: cn(s['w-4'], s['h-4']),
        dots: cn(s['w-1'], s['h-1']),
        bars: cn(s['w-1'], s['h-6']),
        pulse: cn(s['w-4'], s['h-4']),
    },
    md: {
        wrapper: cn(s['w-8'], s['h-8']),
        spinner: cn(s['w-8'], s['h-8']),
        dots: cn(s['w-2'], s['h-2']),
        bars: cn(s['w-1'], s['h-8']),
        pulse: cn(s['w-8'], s['h-8']),
    },
    lg: {
        wrapper: cn(s['w-10'], s['h-10']),
        spinner: cn(s['w-10'], s['h-10']),
        dots: cn(s['w-3'], s['h-3']),
        bars: cn(s['w-2'], s['h-10']),
        pulse: cn(s['w-10'], s['h-10']),
    },
};
const getColorValue = (color) => {
    const colors = {
        blue: 'rgb(59 130 246)',
        green: 'rgb(34 197 94)',
        gray: 'rgb(156 163 175)',
        primary: 'rgb(59 130 246)',
    };
    return colors[color] || colors.blue;
};
export const LoadingAnimateSpin = ({ classWarper = '', className = '', variant = 'spinner', size = 'md', color = 'blue', 'aria-label': ariaLabel = 'Loading', }) => {
    const sizeConfig = sizeClasses[size];
    const renderSpinner = () => {
        const colorValue = getColorValue(color);
        return (_jsx("div", { className: cn(sizeConfig.spinner, s['rounded-full'], className), style: {
                borderWidth: '2px',
                borderStyle: 'solid',
                borderTopColor: colorValue,
                borderRightColor: colorValue,
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent',
                animation: 'spin 1s linear infinite',
            }, "aria-label": ariaLabel, role: "status" }));
    };
    const renderDots = () => {
        const colorValue = getColorValue(color);
        return (_jsx("div", { className: cn(s['flex'], s['gap-2'], s['items-center'], className), "aria-label": ariaLabel, role: "status", children: [0, 1, 2].map((i) => (_jsx("div", { className: cn(sizeConfig.dots, s['rounded-full']), style: {
                    backgroundColor: colorValue,
                    animation: `bounce 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite`,
                    animationDelay: `${i * 0.16}s`,
                    animationFillMode: 'both',
                } }, i))) }));
    };
    const renderBars = () => {
        const colorValue = getColorValue(color);
        return (_jsx("div", { className: cn(s['flex'], s['gap-1'], s['items-center'], className), "aria-label": ariaLabel, role: "status", children: [0, 1, 2].map((i) => (_jsx("div", { className: cn(sizeConfig.bars, s.rounded), style: {
                    backgroundColor: colorValue,
                    borderRadius: '0.125rem',
                    animation: `pulse 1.2s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                    animationFillMode: 'both',
                } }, i))) }));
    };
    const renderPulse = () => {
        const colorValue = getColorValue(color);
        return (_jsx("div", { className: cn(sizeConfig.pulse, s['rounded-full'], className), style: {
                backgroundColor: colorValue,
                animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                animationFillMode: 'both',
            }, "aria-label": ariaLabel, role: "status" }));
    };
    const renderLoader = () => {
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'bars':
                return renderBars();
            case 'pulse':
                return renderPulse();
            case 'spinner':
            default:
                return renderSpinner();
        }
    };
    return (_jsxs("div", { className: cn(s['absolute'], s['inset-0'], s['flex'], s['justify-center'], s['items-center'], classWarper), children: [_jsx("style", { children: `
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.8;
          }
        }
      ` }), renderLoader()] }));
};
