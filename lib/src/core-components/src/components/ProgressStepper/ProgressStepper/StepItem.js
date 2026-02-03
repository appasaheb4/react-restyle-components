'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from 'react';
import { styled } from 'styled-components';
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
// Styled components
const StepListItem = styled.li `
  position: relative;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 600;
  transition: all 0.3s ease;

  ${({ $size }) => {
    const config = sizeConfig[$size];
    return `
      height: ${config.diameter};
      width: ${config.diameter};
      min-width: ${config.diameter};
      font-size: ${config.fontSize};
    `;
}}

  ${({ $state, $indicatorType, $activeColor, $inactiveColor }) => {
    const stateColor = getStateColor($state, $activeColor, $inactiveColor);
    const isActive = $state !== 'incomplete';
    if ($indicatorType === 'dot') {
        return `
        border: 2px solid ${stateColor};
        background-color: ${isActive ? stateColor : 'transparent'};
        color: ${isActive ? '#fff' : stateColor};
      `;
    }
    if ($indicatorType === 'number' || $indicatorType === 'iconCircle') {
        return `
        border: 2px solid ${stateColor};
        background-color: ${isActive ? stateColor : 'transparent'};
        color: ${isActive ? '#fff' : stateColor};
      `;
    }
    if ($indicatorType === 'icon') {
        return `
        border: none;
        background-color: transparent;
        color: ${stateColor};
      `;
    }
    if ($indicatorType === 'check') {
        return `
        border: 2px solid ${stateColor};
        background-color: ${$state === 'complete' ? stateColor : 'transparent'};
        color: ${$state === 'complete' ? '#fff' : stateColor};
      `;
    }
    return '';
}}
`;
const InnerDot = styled.div `
  position: absolute;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;

  ${({ $size }) => {
    const config = sizeConfig[$size];
    return `
      height: ${config.innerDiameter};
      width: ${config.innerDiameter};
    `;
}}
`;
const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $size }) => {
    const config = sizeConfig[$size];
    return `
      width: ${config.iconSize};
      height: ${config.iconSize};
    `;
}}

  svg {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ConnectorTextGroup = styled.div `
  display: flex;

  ${({ $orientation, $isLast }) => $orientation === 'vertical'
    ? `flex-direction: row;`
    : `
          flex-direction: column;
          ${$isLast ? '' : 'width: 100%;'}
          margin-top: auto;
          margin-bottom: auto;
        `}
`;
const Connector = styled.div `
  background-color: ${({ $inactiveColor }) => $inactiveColor};

  ${({ $orientation, $size, $isPacked }) => {
    const config = sizeConfig[$size];
    return $orientation === 'vertical'
        ? `
          height: ${$isPacked ? '1.5rem' : '3rem'};
          width: ${config.connectorWidth};
          margin-left: ${config.marginLeft};
        `
        : `
          height: ${config.connectorWidth};
          width: 100%;
        `;
}}
`;
const ConnectorFill = styled.div `
  position: relative;
  background-color: ${({ $activeColor }) => $activeColor};

  ${({ $orientation, $percentage }) => $orientation === 'vertical'
    ? `
          height: ${$percentage}%;
          width: 100%;
          transition: height 0.3s ease;
        `
    : `
          width: ${$percentage}%;
          height: 100%;
          transition: width 0.3s ease;
        `}

  &:after {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${({ $orientation }) => ($orientation === 'vertical' ? '-2px' : '-3px')};
    border-radius: 50%;
    margin: auto 0;
    background-color: ${({ $activeColor }) => $activeColor};
    opacity: ${({ $showDot }) => ($showDot ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;
const StepTextGroup = styled.div `
  margin-left: ${({ $size }) => sizeConfig[$size].marginLeft};
  margin-bottom: 1rem;
  margin-top: -0.25rem;
`;
const StepTitle = styled.h2 `
  font-size: ${({ $size }) => $size === 'small' ? '0.875rem' : $size === 'medium' ? '1rem' : '1.125rem'};
  font-weight: 500;
  color: ${defaultColors.text};
  margin: 0 0 0.125rem 0;
  max-width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const StepSubTitle = styled.h3 `
  font-size: 0.75rem;
  font-weight: 400;
  color: ${defaultColors.supportText};
  margin: 0.125rem 0;
  max-width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const StepTag = styled.span `
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  margin-top: 0.25rem;

  ${({ $variant }) => {
    const variants = {
        success: `background-color: #DCFCE7; color: #166534;`,
        error: `background-color: #FEE2E2; color: #991B1B;`,
        warning: `background-color: #FEF3C7; color: #92400E;`,
        info: `background-color: #DBEAFE; color: #1E40AF;`,
        neutral: `background-color: #F3F4F6; color: #374151;`,
    };
    return variants[$variant] || variants.neutral;
}}
`;
const StepLink = styled.a `
  display: block;
  font-size: 0.75rem;
  color: #3b82f6;
  text-decoration: none;
  margin-top: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;
// Utility functions
const calcPercentage = (part, total) => total > 0 ? (100 * part) / total : 0;
// Icon components
const CheckIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const WarningIcon = () => (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M12 9v4m0 4h.01M12 2L2 20h20L12 2z" }) }));
const ErrorIcon = () => (_jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
export const StepItem = ({ state = 'incomplete', subSteps, isPacked, stepTitle, stepSubTitle, stepLinkHref, stepLinkText, tagText, tagVariant = 'neutral', icon, iconSrc, stepNumber, index, stepsAmount, orientation, size = 'medium', indicatorType = 'dot', activeColor = defaultColors.active, inactiveColor = defaultColors.inactive, }) => {
    const steps = subSteps ?? [];
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
    const renderIndicatorContent = () => {
        // For complete state with check indicator type
        if (state === 'complete' && indicatorType === 'check') {
            return (_jsx(IconWrapper, { "$size": size, children: _jsx(CheckIcon, {}) }));
        }
        // For warning state
        if (state === 'warning') {
            return (_jsx(IconWrapper, { "$size": size, children: _jsx(WarningIcon, {}) }));
        }
        // For error state
        if (state === 'error') {
            return (_jsx(IconWrapper, { "$size": size, children: _jsx(ErrorIcon, {}) }));
        }
        // Custom icon
        if (icon) {
            return _jsx(IconWrapper, { "$size": size, children: icon });
        }
        // Icon from URL
        if (iconSrc) {
            return (_jsx(IconWrapper, { "$size": size, children: _jsx("img", { src: iconSrc, alt: `Step ${displayNumber}` }) }));
        }
        // Number indicator
        if (indicatorType === 'number') {
            return _jsx("span", { children: displayNumber });
        }
        // Dot indicator - show inner dot
        if (indicatorType === 'dot' && state === 'incomplete') {
            return null;
        }
        // Default check for complete
        if (state === 'complete') {
            return (_jsx(IconWrapper, { "$size": size, children: _jsx(CheckIcon, {}) }));
        }
        return null;
    };
    return (_jsxs(_Fragment, { children: [_jsxs(StepListItem, { "$state": stateWithSubSteps, "$size": size, "$indicatorType": indicatorType, "$activeColor": activeColor, "$inactiveColor": inactiveColor, "data-testid": `progress-stepper-step-${index}`, children: [indicatorType === 'dot' && state === 'inprogress' && (_jsx(InnerDot, { "$size": size, "$visible": true, "$color": defaultColors.white })), renderIndicatorContent()] }), _jsxs(ConnectorTextGroup, { "$isLast": isLast, "$orientation": orientation, children: [!isLast && (_jsx(Connector, { className: "step-connector", "$size": size, "$isPacked": isPacked, "$orientation": orientation, "$inactiveColor": inactiveColor, "data-testid": `progress-stepper-step-${index}-connector`, children: _jsx(ConnectorFill, { "$showDot": showConnectorDot, "$percentage": connectorFillPercentage, "$orientation": orientation, "$activeColor": activeColor, "data-testid": `progress-stepper-step-${index}-connector-fill` }) })), orientation === 'vertical' && (stepTitle || stepSubTitle) && (_jsxs(StepTextGroup, { "$isLast": isLast, "$size": size, children: [stepTitle && (_jsx(StepTitle, { "$size": size, "data-testid": `step-title-${index}`, children: stepTitle })), stepSubTitle && (_jsx(StepSubTitle, { "data-testid": `step-subtitle-${index}`, children: stepSubTitle })), tagText && (_jsx(StepTag, { "$variant": tagVariant, "data-testid": `step-tag-${index}`, children: tagText })), stepLinkText && stepLinkHref && (_jsx(StepLink, { href: stepLinkHref, "data-testid": `step-link-${index}`, children: stepLinkText }))] }))] })] }));
};
StepItem.displayName = 'StepItem';
