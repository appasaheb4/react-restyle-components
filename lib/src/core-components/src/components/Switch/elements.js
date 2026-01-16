import { styled, css } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Size configurations
const sizeConfig = {
    small: {
        trackWidth: '36px',
        trackHeight: '20px',
        thumbSize: '16px',
        thumbOffset: '2px',
        fontSize: '0.8125rem',
        iconSize: '10px',
    },
    medium: {
        trackWidth: '44px',
        trackHeight: '24px',
        thumbSize: '20px',
        thumbOffset: '2px',
        fontSize: '0.875rem',
        iconSize: '12px',
    },
    large: {
        trackWidth: '52px',
        trackHeight: '28px',
        thumbSize: '24px',
        thumbOffset: '2px',
        fontSize: '1rem',
        iconSize: '14px',
    },
};
// Color configurations
const colorConfig = {
    primary: {
        checked: tokens.primary || '#454cbf',
        hover: '#3d44a5',
    },
    success: {
        checked: '#10b981',
        hover: '#059669',
    },
    warning: {
        checked: '#f59e0b',
        hover: '#d97706',
    },
    error: {
        checked: '#ef4444',
        hover: '#dc2626',
    },
    neutral: {
        checked: '#6b7280',
        hover: '#4b5563',
    },
};
export const SwitchLabel = styled.label `
  display: inline-flex;
  align-items: flex-start;
  gap: ${tokens.spacing150 || '0.75rem'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  
  ${({ $labelPosition }) => $labelPosition === 'left'
    ? css `
          flex-direction: row;
        `
    : css `
          flex-direction: row-reverse;
        `}
  
  ${({ $disabled }) => $disabled &&
    css `
      opacity: 0.5;
    `}
`;
export const LabelContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const LabelText = styled.span `
  font-size: ${({ $size }) => sizeConfig[$size].fontSize};
  font-weight: 500;
  line-height: 1.4;
  color: ${tokens.onSurface || '#1a1a2e'};
`;
export const DescriptionText = styled.span `
  font-size: ${({ $size }) => $size === 'small' ? '0.6875rem' :
    $size === 'large' ? '0.875rem' : '0.75rem'};
  color: ${tokens.onSurface ? `${tokens.onSurface}80` : '#6c757d'};
  line-height: 1.4;
`;
export const HiddenInput = styled.input `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
export const SwitchTrack = styled.span `
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${({ $size }) => sizeConfig[$size].trackWidth};
  height: ${({ $size }) => sizeConfig[$size].trackHeight};
  border-radius: 9999px;
  background-color: ${({ $checked, $color }) => $checked ? colorConfig[$color].checked : (tokens.outline || '#d1d5db')};
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  flex-shrink: 0;
  
  /* Focus ring */
  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 2px ${tokens.surface || '#fff'}, 
                0 0 0 4px ${({ $color }) => colorConfig[$color].checked};
  }
  
  /* Hover state */
  ${({ $disabled, $checked, $color }) => !$disabled &&
    css `
      &:hover {
        background-color: ${$checked
        ? colorConfig[$color].hover
        : (tokens.outlineSoft || '#9ca3af')};
      }
    `}
`;
export const SwitchThumb = styled.span `
  position: absolute;
  width: ${({ $size }) => sizeConfig[$size].thumbSize};
  height: ${({ $size }) => sizeConfig[$size].thumbSize};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  left: ${({ $size }) => sizeConfig[$size].thumbOffset};
  
  ${({ $checked, $size }) => $checked &&
    css `
      transform: translateX(calc(${sizeConfig[$size].trackWidth} - ${sizeConfig[$size].thumbSize} - ${sizeConfig[$size].thumbOffset} * 2));
    `}
`;
export const IconWrapper = styled.span `
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeConfig[$size].iconSize};
  height: ${({ $size }) => sizeConfig[$size].iconSize};
  color: white;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  
  ${({ $position, $size }) => $position === 'left'
    ? css `
          left: 6px;
        `
    : css `
          right: 6px;
        `}
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
