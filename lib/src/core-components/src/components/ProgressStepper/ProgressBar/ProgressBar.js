'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from 'react';
import { styled, keyframes } from 'styled-components';
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
// Indeterminate animation
const indeterminateAnimation = keyframes `
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
`;
// Styled components
const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
const Label = styled.span `
  font-size: ${({ $size }) => sizeConfig[$size].labelSize};
  font-weight: 600;
  color: ${colors.text};
  line-height: 1.4;
`;
const SupportText = styled.span `
  font-size: ${({ $size }) => sizeConfig[$size].supportSize};
  font-weight: 400;
  color: ${colors.supportText};
  line-height: 1.4;
`;
const Track = styled.div `
  width: 100%;
  height: ${({ $size }) => sizeConfig[$size].height};
  background-color: ${({ $trackColor }) => $trackColor || colors.track};
  border-radius: ${({ $size }) => sizeConfig[$size].borderRadius};
  overflow: hidden;
  position: relative;
`;
const Fill = styled.div `
  height: 100%;
  background-color: ${({ $color }) => $color || colors.primary};
  border-radius: ${({ $size }) => sizeConfig[$size].borderRadius};
  transition: width 0.3s ease-in-out;
  width: ${({ $percentage, $isIndeterminate }) => $isIndeterminate ? '25%' : `${$percentage}%`};

  ${({ $isIndeterminate }) => $isIndeterminate &&
    `
    animation: ${indeterminateAnimation} 1.5s ease-in-out infinite;
  `}
`;
const SegmentedTrack = styled.div `
  display: flex;
  gap: 0.25rem;
  width: 100%;
  height: ${({ $size }) => sizeConfig[$size].height};
`;
const Segment = styled.div `
  flex: 1;
  height: 100%;
  background-color: ${({ $isActive, $color, $trackColor }) => $isActive ? $color || colors.primary : $trackColor || colors.track};
  border-radius: ${({ $size }) => sizeConfig[$size].borderRadius};
  transition: background-color 0.3s ease-in-out;
`;
const ValueContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ValueText = styled.span `
  font-size: ${({ $size }) => sizeConfig[$size].supportSize};
  font-weight: 500;
  color: ${colors.text};
`;
export const ProgressBar = forwardRef(({ label, supportText, value, max = 100, size = 'medium', variant = 'continuous', segments = 4, color, trackColor, showValue = false, isIndeterminate = false, className, style, ...rest }, ref) => {
    const percentage = useMemo(() => {
        const clampedValue = Math.max(0, Math.min(value, max));
        return (clampedValue / max) * 100;
    }, [value, max]);
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
    return (_jsxs(Container, { ref: ref, className: className, style: style, "data-aui": "progress-bar", ...rest, children: [(label || showValue) && (_jsxs(ValueContainer, { children: [label && _jsx(Label, { "$size": size, children: label }), showValue && !isIndeterminate && (_jsxs(ValueText, { "$size": size, children: [Math.round(percentage), "%"] }))] })), variant === 'continuous' ? (_jsx(Track, { "$size": size, "$trackColor": trackColor, role: "progressbar", "aria-valuenow": isIndeterminate ? undefined : value, "aria-valuemin": 0, "aria-valuemax": max, "aria-label": ariaLabel, children: _jsx(Fill, { "$size": size, "$percentage": percentage, "$color": color, "$isIndeterminate": isIndeterminate }) })) : (_jsx(SegmentedTrack, { "$size": size, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max, "aria-label": ariaLabel, children: Array.from({ length: segments }).map((_, index) => (_jsx(Segment, { "$size": size, "$isActive": index < activeSegments, "$color": color, "$trackColor": trackColor }, index))) })), supportText && _jsx(SupportText, { "$size": size, children: supportText })] }));
});
ProgressBar.displayName = 'ProgressBar';
