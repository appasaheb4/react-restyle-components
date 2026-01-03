import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Animations
const fadeIn = keyframes `
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const fadeOut = keyframes `
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.3);
  }
`;
const backdropFadeIn = keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`;
// Size configurations
export const sizeConfig = {
    small: {
        fabSize: 48,
        actionSize: 40,
        iconSize: 24,
        actionIconSize: 20,
        labelFontSize: '12px',
    },
    medium: {
        fabSize: 56,
        actionSize: 48,
        iconSize: 28,
        actionIconSize: 24,
        labelFontSize: '13px',
    },
    large: {
        fabSize: 64,
        actionSize: 56,
        iconSize: 32,
        actionIconSize: 28,
        labelFontSize: '14px',
    },
};
// Variant styles for FAB
const fabVariantStyles = {
    filled: css `
    background: ${tokens.primary || '#3b82f6'};
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    
    &:hover:not(:disabled) {
      background: #2563eb;
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
    }
  `,
    outlined: css `
    background: white;
    color: ${tokens.primary || '#3b82f6'};
    border: 2px solid ${tokens.primary || '#3b82f6'};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover:not(:disabled) {
      background: ${tokens.primary || '#3b82f6'}10;
    }
  `,
    soft: css `
    background: ${tokens.primary || '#3b82f6'}15;
    color: ${tokens.primary || '#3b82f6'};
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    
    &:hover:not(:disabled) {
      background: ${tokens.primary || '#3b82f6'}25;
    }
  `,
};
// Direction styles for actions container
const getDirectionStyles = (direction) => {
    switch (direction) {
        case 'up':
            return css `
        flex-direction: column-reverse;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 16px;
      `;
        case 'down':
            return css `
        flex-direction: column;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 16px;
      `;
        case 'left':
            return css `
        flex-direction: row-reverse;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        padding-right: 16px;
      `;
        case 'right':
            return css `
        flex-direction: row;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 16px;
      `;
        default:
            return css `
        flex-direction: column-reverse;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 16px;
      `;
    }
};
export const SpeedDialRoot = styled.div `
  position: relative;
  display: ${({ $hidden }) => ($hidden ? 'none' : 'inline-flex')};
  z-index: ${({ $zIndex }) => $zIndex};
`;
export const SpeedDialBackdrop = styled.div `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, ${({ $opacity }) => $opacity});
  z-index: ${({ $zIndex }) => $zIndex - 1};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;
`;
export const SpeedDialFab = styled.button `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeConfig[$size].fabSize}px;
  height: ${({ $size }) => sizeConfig[$size].fabSize}px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  z-index: 2;
  
  ${({ $variant }) => fabVariantStyles[$variant]}
  
  /* Custom colors override */
  ${({ $customBg }) => $customBg && css `background: ${$customBg};`}
  ${({ $customColor }) => $customColor && css `color: ${$customColor};`}
  
  /* Icon rotation */
  & > * {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    ${({ $isOpen, $rotateOnToggle, $rotationDegrees }) => $isOpen && $rotateOnToggle && css `
        transform: rotate(${$rotationDegrees}deg);
      `}
  }
  
  /* Focus ring */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${tokens.primary || '#3b82f6'}40;
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Hover scale */
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;
export const SpeedDialActions = styled.div `
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  
  ${({ $direction }) => getDirectionStyles($direction)}
`;
export const SpeedDialActionWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
  
  ${({ $direction, $showLabels }) => {
    if (!$showLabels)
        return '';
    if ($direction === 'up' || $direction === 'down') {
        return css `flex-direction: row;`;
    }
    return css `flex-direction: column;`;
}}
`;
export const SpeedDialActionButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeConfig[$size].actionSize}px;
  height: ${({ $size }) => sizeConfig[$size].actionSize}px;
  border-radius: 50%;
  border: none;
  background: ${({ $customBg }) => $customBg || 'white'};
  color: ${({ $customColor }) => $customColor || '#374151'};
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  outline: none;
  flex-shrink: 0;
  
  /* Animation */
  opacity: 0;
  transform: scale(0.3);
  
  ${({ $isOpen, $index, $staggerDelay, $animationDuration }) => $isOpen
    ? css `
          animation: ${fadeIn} ${$animationDuration}ms ease forwards;
          animation-delay: ${$index * $staggerDelay}ms;
        `
    : css `
          animation: ${fadeOut} ${$animationDuration * 0.5}ms ease forwards;
          animation-delay: ${$index * ($staggerDelay * 0.3)}ms;
        `}
  
  /* Focus ring */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${tokens.primary || '#3b82f6'}40;
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  
  /* Hover */
  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;
export const SpeedDialActionLabel = styled.span `
  font-size: ${({ $size }) => sizeConfig[$size].labelFontSize};
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  padding: 6px 12px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  
  /* Animation */
  opacity: 0;
  transform: translateX(${({ $direction }) => $direction === 'left' ? '10px' :
    $direction === 'right' ? '-10px' : '0'}) translateY(${({ $direction }) => $direction === 'up' ? '10px' :
    $direction === 'down' ? '-10px' : '0'});
  
  ${({ $isOpen, $index, $staggerDelay }) => $isOpen &&
    css `
      animation: ${fadeIn} 150ms ease forwards;
      animation-delay: ${$index * $staggerDelay + 50}ms;
    `}
`;
export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size, $isAction }) => $isAction ? sizeConfig[$size].actionIconSize : sizeConfig[$size].iconSize}px;
  height: ${({ $size, $isAction }) => $isAction ? sizeConfig[$size].actionIconSize : sizeConfig[$size].iconSize}px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
