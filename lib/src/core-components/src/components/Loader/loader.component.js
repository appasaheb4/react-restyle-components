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
        white: 'rgb(255 255 255)',
        black: 'rgb(0 0 0)',
    };
    // If it's a predefined color, return the mapped value
    if (colors[color]) {
        return colors[color];
    }
    // If it's already a valid CSS color (hex, rgb, rgba, hsl, named color, etc.), return it as-is
    // Check if it looks like a CSS color value (starts with #, rgb, rgba, hsl, hsla, or is a valid CSS color name)
    if (color.startsWith('#') ||
        color.startsWith('rgb') ||
        color.startsWith('hsl') ||
        color.startsWith('rgba') ||
        color.startsWith('hsla') ||
        /^[a-z]+$/i.test(color) // Named colors like 'coral', 'tomato', etc.
    ) {
        return color;
    }
    // Default fallback
    return colors.blue;
};
// Helper function to extract RGB values from any color format for opacity borders
const extractRgbForOpacity = (colorValue) => {
    // Handle rgb/rgba format: rgb(59 130 246) or rgba(59, 130, 246, 0.5)
    const rgbMatch = colorValue.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    if (rgbMatch) {
        return [
            parseInt(rgbMatch[1]),
            parseInt(rgbMatch[2]),
            parseInt(rgbMatch[3]),
        ];
    }
    // Handle hex format: #3b82f6 or #3bf
    if (colorValue.startsWith('#')) {
        const hex = colorValue.slice(1);
        if (hex.length === 3) {
            // Short hex: #3bf -> #33bbff
            const r = parseInt(hex[0] + hex[0], 16);
            const g = parseInt(hex[1] + hex[1], 16);
            const b = parseInt(hex[2] + hex[2], 16);
            return [r, g, b];
        }
        else if (hex.length === 6) {
            // Full hex: #3b82f6
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return [r, g, b];
        }
    }
    // For named colors or other formats, create a temporary element to get computed color
    // This is a fallback for named CSS colors like 'coral', 'tomato', etc.
    if (typeof document !== 'undefined') {
        try {
            const tempEl = document.createElement('div');
            tempEl.style.color = colorValue;
            document.body.appendChild(tempEl);
            const computedColor = window.getComputedStyle(tempEl).color;
            document.body.removeChild(tempEl);
            const computedRgb = computedColor.match(/\d+/g);
            if (computedRgb && computedRgb.length >= 3) {
                return [
                    parseInt(computedRgb[0]),
                    parseInt(computedRgb[1]),
                    parseInt(computedRgb[2]),
                ];
            }
        }
        catch (e) {
            // Fallback if DOM manipulation fails
        }
    }
    // Default fallback to white
    return [255, 255, 255];
};
export const LoadingAnimateSpin = ({ classWarper = '', className = '', variant = 'spinner', size = 'md', color = 'blue', borderWidth = '10px', textFontSize = '1.125rem', 'aria-label': ariaLabel = 'Loading', }) => {
    const sizeConfig = sizeClasses[size];
    const renderSpinner = () => {
        const colorValue = getColorValue(color);
        // Extract RGB values for opacity border - making it more subtle
        const [r, g, b] = extractRgbForOpacity(colorValue);
        const baseBorderColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
        return (_jsxs("div", { className: cn(s['flex'], s['flex-col'], s['items-center'], s['justify-center'], className), "aria-label": ariaLabel, role: "status", children: [_jsx("div", { className: cn(sizeConfig.spinner, s['rounded-full'], s['animate-spin']), style: {
                        width: '4rem',
                        height: '4rem',
                        borderWidth: borderWidth,
                        borderStyle: 'solid',
                        borderTopColor: colorValue,
                        borderRightColor: colorValue,
                        borderBottomColor: baseBorderColor,
                        borderLeftColor: baseBorderColor,
                        animation: 'spin 1s linear infinite',
                    } }), _jsx("p", { className: cn(s['mt-4'], s['text-white'], s['text-lg'], s['font-semibold'], s['animate-pulse']), style: {
                        marginTop: '1rem',
                        color: colorValue,
                        fontSize: textFontSize,
                        fontWeight: 600,
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }, children: "Loading..." })] }));
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
