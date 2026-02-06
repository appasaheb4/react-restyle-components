'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, useEffect } from 'react';
// Inject keyframes animation styles
const injectAnimationStyles = () => {
    const styleId = 'progress-bar-animations';
    if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
        const styleSheet = document.createElement('style');
        styleSheet.id = styleId;
        styleSheet.textContent = `
      @keyframes progressBarShimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      @keyframes progressBarIndeterminate {
        0% {
          left: -25%;
        }
        100% {
          left: 100%;
        }
      }
      @keyframes progressBarPulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
      @keyframes progressBarStripe {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 40px 0;
        }
      }
      @keyframes progressBarGlow {
        0%, 100% {
          box-shadow: 0 0 4px currentColor, inset 0 0 4px rgba(255,255,255,0.2);
        }
        50% {
          box-shadow: 0 0 12px currentColor, inset 0 0 8px rgba(255,255,255,0.3);
        }
      }
      @keyframes progressBarSegmentPulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.02);
          opacity: 0.9;
        }
      }
    `;
        document.head.appendChild(styleSheet);
    }
};
// Color constants
const colors = {
    primary: '#8B5CF6',
    track: '#E5E7EB',
    text: '#374151',
    supportText: '#6B7280',
};
// Size configurations
const sizeConfig = {
    small: {
        height: '4px',
        borderRadius: '2px',
        labelSize: '0.75rem',
        supportSize: '0.625rem',
    },
    medium: {
        height: '6px',
        borderRadius: '3px',
        labelSize: '0.875rem',
        supportSize: '0.75rem',
    },
    large: {
        height: '8px',
        borderRadius: '4px',
        labelSize: '1rem',
        supportSize: '0.875rem',
    },
};
export const ProgressBar = forwardRef(({ label, supportText, value, max = 100, size = 'medium', variant = 'continuous', segments = 4, color, trackColor, showValue = false, isIndeterminate = false, showAnimation = true, className, style, ...rest }, ref) => {
    // Inject animation styles on mount
    useEffect(() => {
        injectAnimationStyles();
    }, []);
    const percentage = useMemo(() => {
        const clampedValue = Math.max(0, Math.min(value, max));
        return (clampedValue / max) * 100;
    }, [value, max]);
    // Check if progress is active (not 0 and not 100)
    const isActive = percentage > 0 && percentage < 100;
    const activeSegments = useMemo(() => {
        if (variant !== 'segmented')
            return 0;
        return Math.ceil((percentage / 100) * segments);
    }, [percentage, segments, variant]);
    const ariaLabel = useMemo(() => {
        if (isIndeterminate)
            return 'Loading...';
        return `${Math.round(percentage)}% complete`;
    }, [percentage, isIndeterminate]);
    const config = sizeConfig[size];
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '100%',
    };
    const labelStyle = {
        fontSize: config.labelSize,
        fontWeight: 600,
        color: colors.text,
        lineHeight: 1.4,
    };
    const supportTextStyle = {
        fontSize: config.supportSize,
        fontWeight: 400,
        color: colors.supportText,
        lineHeight: 1.4,
    };
    const trackStyle = {
        width: '100%',
        height: config.height,
        backgroundColor: trackColor || colors.track,
        borderRadius: config.borderRadius,
        overflow: 'hidden',
        position: 'relative',
    };
    const fillColor = color || colors.primary;
    const fillStyle = {
        height: '100%',
        backgroundColor: fillColor,
        borderRadius: config.borderRadius,
        transition: 'width 0.5s ease-out',
        width: isIndeterminate ? '30%' : `${percentage}%`,
        position: 'relative',
        overflow: 'hidden',
        ...(isIndeterminate
            ? {
                position: 'absolute',
                animation: 'progressBarIndeterminate 1.5s ease-in-out infinite',
            }
            : {}),
        ...(showAnimation && isActive && !isIndeterminate
            ? {
                animation: 'progressBarPulse 2s ease-in-out infinite',
            }
            : {}),
    };
    // Shimmer overlay for the fill
    const shimmerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 100%
      )`,
        animation: 'progressBarShimmer 1.5s ease-in-out infinite',
    };
    // Striped effect style (alternative animation)
    const stripedStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      )`,
        backgroundSize: '40px 40px',
        animation: 'progressBarStripe 1s linear infinite',
    };
    const segmentedTrackStyle = {
        display: 'flex',
        gap: '0.25rem',
        width: '100%',
        height: config.height,
    };
    const getSegmentStyle = (isActiveSegment, segmentIndex) => {
        const isLastActiveSegment = segmentIndex === activeSegments - 1 && activeSegments > 0;
        return {
            flex: 1,
            height: '100%',
            backgroundColor: isActiveSegment ? fillColor : trackColor || colors.track,
            borderRadius: config.borderRadius,
            transition: 'all 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
            ...(showAnimation && isLastActiveSegment && isActive
                ? {
                    animation: 'progressBarSegmentPulse 1.5s ease-in-out infinite',
                    boxShadow: `0 0 8px ${fillColor}`,
                }
                : {}),
        };
    };
    const valueContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };
    const valueTextStyle = {
        fontSize: config.supportSize,
        fontWeight: 500,
        color: colors.text,
    };
    return (_jsxs("div", { ref: ref, className: className, style: { ...containerStyle, ...style }, "data-aui": "progress-bar", ...rest, children: [(label || showValue) && (_jsxs("div", { style: valueContainerStyle, children: [label && _jsx("span", { style: labelStyle, children: label }), showValue && !isIndeterminate && (_jsxs("span", { style: valueTextStyle, children: [Math.round(percentage), "%"] }))] })), variant === 'continuous' ? (_jsx("div", { style: trackStyle, role: "progressbar", "aria-valuenow": isIndeterminate ? undefined : value, "aria-valuemin": 0, "aria-valuemax": max, "aria-label": ariaLabel, children: _jsxs("div", { style: fillStyle, children: [showAnimation && (isActive || isIndeterminate) && percentage > 0 && (_jsx("div", { style: shimmerStyle, "aria-hidden": "true" })), showAnimation && isIndeterminate && (_jsx("div", { style: stripedStyle, "aria-hidden": "true" }))] }) })) : (_jsx("div", { style: segmentedTrackStyle, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max, "aria-label": ariaLabel, children: Array.from({ length: segments }).map((_, index) => {
                    const isActiveSegment = index < activeSegments;
                    const isLastActiveSegment = index === activeSegments - 1 && activeSegments > 0;
                    return (_jsx("div", { style: getSegmentStyle(isActiveSegment, index), children: showAnimation && isLastActiveSegment && isActive && (_jsx("div", { style: shimmerStyle, "aria-hidden": "true" })) }, index));
                }) })), supportText && _jsx("span", { style: supportTextStyle, children: supportText })] }));
});
ProgressBar.displayName = 'ProgressBar';
