'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useEffect } from 'react';
// Inject keyframes animation styles
const injectAnimationStyles = () => {
    const styleId = 'progress-stepper-animations';
    if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
        const styleSheet = document.createElement('style');
        styleSheet.id = styleId;
        styleSheet.textContent = `
      @keyframes progressShimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      @keyframes progressPulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.6;
        }
      }
      @keyframes progressGlow {
        0%, 100% {
          box-shadow: 0 0 4px currentColor;
        }
        50% {
          box-shadow: 0 0 12px currentColor;
        }
      }
      @keyframes progressFlow {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      @keyframes progressFlowVertical {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
    `;
        document.head.appendChild(styleSheet);
    }
};
// Default colors
const defaultColors = {
    active: '#8B5CF6',
    inactive: '#E5E7EB',
    complete: '#8B5CF6',
    inprogress: '#8B5CF6',
    warning: '#F59E0B',
    error: '#EF4444',
    white: '#ffffff',
    text: '#374151',
    supportText: '#6B7280',
};
// Size configurations
const sizeConfig = {
    small: {
        diameter: '1.25rem',
        innerDiameter: '0.5rem',
        fontSize: '0.625rem',
        iconSize: '0.625rem',
        connectorWidth: '2px',
        marginLeft: '0.5rem',
    },
    medium: {
        diameter: '1.75rem',
        innerDiameter: '0.75rem',
        fontSize: '0.75rem',
        iconSize: '0.875rem',
        connectorWidth: '2px',
        marginLeft: '0.75rem',
    },
    large: {
        diameter: '2.25rem',
        innerDiameter: '1rem',
        fontSize: '0.875rem',
        iconSize: '1rem',
        connectorWidth: '3px',
        marginLeft: '1rem',
    },
};
// Get state color
const getStateColor = (state, activeColor, inactiveColor) => {
    const stateColors = {
        complete: activeColor,
        inprogress: activeColor,
        incomplete: inactiveColor,
        warning: defaultColors.warning,
        error: defaultColors.error,
    };
    return stateColors[state];
};
// Utility functions
const calcPercentage = (part, total) => total > 0 ? (100 * part) / total : 0;
// Icon components
const CheckIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const WarningIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M12 9v4m0 4h.01M12 2L2 20h20L12 2z" }) }));
const ErrorIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const getStepItemStyle = (state, size, indicatorType, activeColor, inactiveColor) => {
    const config = sizeConfig[size];
    const stateColor = getStateColor(state, activeColor, inactiveColor);
    const isActive = state !== 'incomplete';
    const baseStyle = {
        position: 'relative',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontWeight: 600,
        transition: 'all 0.3s ease',
        height: config.diameter,
        width: config.diameter,
        minWidth: config.diameter,
        fontSize: config.fontSize,
    };
    if (indicatorType === 'dot' || indicatorType === 'number' || indicatorType === 'iconCircle') {
        return {
            ...baseStyle,
            border: `2px solid ${stateColor}`,
            backgroundColor: isActive ? stateColor : 'transparent',
            color: isActive ? '#fff' : stateColor,
        };
    }
    if (indicatorType === 'icon') {
        return {
            ...baseStyle,
            border: 'none',
            backgroundColor: 'transparent',
            color: stateColor,
        };
    }
    if (indicatorType === 'check') {
        return {
            ...baseStyle,
            border: `2px solid ${stateColor}`,
            backgroundColor: state === 'complete' ? stateColor : 'transparent',
            color: state === 'complete' ? '#fff' : stateColor,
        };
    }
    return baseStyle;
};
export const StepItem = ({ state = 'incomplete', subSteps, isPacked, stepTitle, stepSubTitle, stepLinkHref, stepLinkText, tagText, tagVariant = 'neutral', icon, iconSrc, stepNumber, index, stepsAmount, orientation, size, indicatorType, activeColor = defaultColors.active, inactiveColor = defaultColors.inactive, }) => {
    // Inject animation styles on mount
    useEffect(() => {
        injectAnimationStyles();
    }, []);
    const steps = subSteps ?? [];
    const config = sizeConfig[size];
    const connectorFillPercentage = useMemo(() => {
        if (steps.length === 0) {
            return state === 'complete' ? 100 : 0;
        }
        if (steps[steps.length - 1]?.state === 'complete') {
            return 100;
        }
        const activeSubSteps = steps.filter((subStep) => subStep.state !== 'incomplete').length;
        return calcPercentage(activeSubSteps, steps.length + 1);
    }, [state, steps]);
    const isLast = useMemo(() => index === stepsAmount - 1, [index, stepsAmount]);
    const showConnectorDot = useMemo(() => connectorFillPercentage > 0 && connectorFillPercentage < 100, [connectorFillPercentage]);
    const stateWithSubSteps = useMemo(() => state === 'complete' && connectorFillPercentage < 100
        ? 'inprogress'
        : state, [connectorFillPercentage, state]);
    const displayNumber = stepNumber ?? index + 1;
    const innerDotStyle = {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: defaultColors.white,
        opacity: state === 'inprogress' && indicatorType === 'dot' ? 1 : 0,
        transition: 'opacity 0.3s ease',
        height: config.innerDiameter,
        width: config.innerDiameter,
    };
    const iconWrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: config.iconSize,
        height: config.iconSize,
    };
    const connectorTextGroupStyle = {
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'row' : 'column',
        ...(orientation === 'horizontal' && !isLast ? { width: '100%' } : {}),
        ...(orientation === 'horizontal' ? { marginTop: 'auto', marginBottom: 'auto' } : {}),
    };
    const connectorStyle = {
        backgroundColor: inactiveColor,
        ...(orientation === 'vertical'
            ? {
                height: isPacked ? '1.5rem' : '3rem',
                width: config.connectorWidth,
                marginLeft: config.marginLeft,
            }
            : {
                height: config.connectorWidth,
                width: '100%',
            }),
    };
    // Check if this connector should be animated (when step is inprogress or has partial substeps)
    const isAnimated = state === 'inprogress' || (connectorFillPercentage > 0 && connectorFillPercentage < 100);
    const connectorFillStyle = {
        position: 'relative',
        backgroundColor: activeColor,
        transition: orientation === 'vertical' ? 'height 0.5s ease-out' : 'width 0.5s ease-out',
        overflow: 'hidden',
        ...(orientation === 'vertical'
            ? { height: `${connectorFillPercentage}%`, width: '100%' }
            : { width: `${connectorFillPercentage}%`, height: '100%' }),
    };
    // Animated shimmer overlay style
    const shimmerOverlayStyle = isAnimated ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(
      ${orientation === 'vertical' ? '180deg' : '90deg'},
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    )`,
        backgroundSize: orientation === 'vertical' ? '100% 200%' : '200% 100%',
        animation: `progressShimmer 1.5s ease-in-out infinite`,
    } : {};
    // Pulse effect on the fill when in progress
    const pulseStyle = state === 'inprogress' ? {
        animation: 'progressPulse 2s ease-in-out infinite',
    } : {};
    const connectorDotStyle = {
        content: '""',
        width: '6px',
        height: '6px',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: orientation === 'vertical' ? '-2px' : '-3px',
        borderRadius: '50%',
        margin: 'auto 0',
        backgroundColor: activeColor,
        opacity: showConnectorDot ? 1 : 0,
        transition: 'opacity 0.3s ease',
    };
    const stepTextGroupStyle = {
        marginLeft: config.marginLeft,
        marginBottom: '1rem',
        marginTop: '-0.25rem',
    };
    const stepTitleStyle = {
        fontSize: size === 'small' ? '0.875rem' : size === 'medium' ? '1rem' : '1.125rem',
        fontWeight: 500,
        color: defaultColors.text,
        margin: '0 0 0.125rem 0',
        maxWidth: '12rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
    };
    const stepSubTitleStyle = {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: defaultColors.supportText,
        margin: '0.125rem 0',
        maxWidth: '12rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    };
    const getTagStyle = (variant) => {
        const variants = {
            success: { backgroundColor: '#DCFCE7', color: '#166534' },
            error: { backgroundColor: '#FEE2E2', color: '#991B1B' },
            warning: { backgroundColor: '#FEF3C7', color: '#92400E' },
            info: { backgroundColor: '#DBEAFE', color: '#1E40AF' },
            neutral: { backgroundColor: '#F3F4F6', color: '#374151' },
        };
        return {
            display: 'inline-block',
            fontSize: '0.625rem',
            fontWeight: 600,
            padding: '0.125rem 0.5rem',
            borderRadius: '0.25rem',
            marginTop: '0.25rem',
            ...(variants[variant] || variants.neutral),
        };
    };
    const stepLinkStyle = {
        display: 'block',
        fontSize: '0.75rem',
        color: '#3b82f6',
        textDecoration: 'none',
        marginTop: '0.25rem',
    };
    const renderIndicatorContent = () => {
        if (state === 'complete' && indicatorType === 'check') {
            return _jsx("span", { style: iconWrapperStyle, children: _jsx(CheckIcon, {}) });
        }
        if (state === 'warning') {
            return _jsx("span", { style: iconWrapperStyle, children: _jsx(WarningIcon, {}) });
        }
        if (state === 'error') {
            return _jsx("span", { style: iconWrapperStyle, children: _jsx(ErrorIcon, {}) });
        }
        if (icon) {
            return _jsx("span", { style: iconWrapperStyle, children: icon });
        }
        if (iconSrc) {
            return (_jsx("span", { style: iconWrapperStyle, children: _jsx("img", { src: iconSrc, alt: `Step ${displayNumber}`, style: { width: '100%', height: '100%', objectFit: 'contain' } }) }));
        }
        if (indicatorType === 'number') {
            return _jsx("span", { children: displayNumber });
        }
        if (indicatorType === 'dot' && state === 'incomplete') {
            return null;
        }
        if (state === 'complete') {
            return _jsx("span", { style: iconWrapperStyle, children: _jsx(CheckIcon, {}) });
        }
        return null;
    };
    // Glow animation for in-progress step indicator
    const stepIndicatorGlowStyle = state === 'inprogress' ? {
        boxShadow: `0 0 8px ${activeColor}`,
        animation: 'progressGlow 2s ease-in-out infinite',
    } : {};
    return (_jsxs(_Fragment, { children: [_jsxs("li", { style: {
                    ...getStepItemStyle(stateWithSubSteps, size, indicatorType, activeColor, inactiveColor),
                    ...stepIndicatorGlowStyle,
                }, "data-testid": `progress-stepper-step-${index}`, children: [indicatorType === 'dot' && state === 'inprogress' && (_jsx("div", { style: innerDotStyle })), renderIndicatorContent()] }), _jsxs("div", { style: connectorTextGroupStyle, children: [!isLast && (_jsx("div", { className: "step-connector", style: connectorStyle, "data-testid": `progress-stepper-step-${index}-connector`, children: _jsxs("div", { style: { ...connectorFillStyle, ...pulseStyle }, "data-testid": `progress-stepper-step-${index}-connector-fill`, children: [isAnimated && connectorFillPercentage > 0 && (_jsx("div", { style: shimmerOverlayStyle, "aria-hidden": "true" })), _jsx("span", { style: connectorDotStyle })] }) })), orientation === 'vertical' && (stepTitle || stepSubTitle) && (_jsxs("div", { style: stepTextGroupStyle, children: [stepTitle && (_jsx("h2", { style: stepTitleStyle, "data-testid": `step-title-${index}`, children: stepTitle })), stepSubTitle && (_jsx("h3", { style: stepSubTitleStyle, "data-testid": `step-subtitle-${index}`, children: stepSubTitle })), tagText && (_jsx("span", { style: getTagStyle(tagVariant), "data-testid": `step-tag-${index}`, children: tagText })), stepLinkText && stepLinkHref && (_jsx("a", { href: stepLinkHref, style: stepLinkStyle, "data-testid": `step-link-${index}`, children: stepLinkText }))] }))] })] }));
};
StepItem.displayName = 'StepItem';
