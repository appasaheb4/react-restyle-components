import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
import { breakpoints } from '../../utils/abstracts';
// Animations
const slideInRight = keyframes `
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const slideInLeft = keyframes `
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const slideInUp = keyframes `
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideInDown = keyframes `
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const progressShrink = keyframes `
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;
// Type styles
const typeStyles = {
    default: {
        bg: '#1f2937',
        border: '#374151',
        text: '#f9fafb',
        icon: '#9ca3af',
        accent: tokens.primary || '#454cbf',
    },
    success: {
        bg: '#065f46',
        border: '#10b981',
        text: '#ecfdf5',
        icon: '#10b981',
        accent: '#10b981',
    },
    error: {
        bg: '#991b1b',
        border: '#ef4444',
        text: '#fef2f2',
        icon: '#ef4444',
        accent: '#ef4444',
    },
    warning: {
        bg: '#92400e',
        border: '#f59e0b',
        text: '#fffbeb',
        icon: '#f59e0b',
        accent: '#f59e0b',
    },
    info: {
        bg: '#1e40af',
        border: '#3b82f6',
        text: '#e7f3ff',
        icon: '#3b82f6',
        accent: '#3b82f6',
    },
};
const getPositionStyles = (position) => {
    switch (position) {
        case 'top-left':
            return css `
        top: 1rem;
        left: 1rem;
        align-items: flex-start;
      `;
        case 'top-center':
            return css `
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
      `;
        case 'top-right':
            return css `
        top: 1rem;
        right: 1rem;
        align-items: flex-end;
      `;
        case 'bottom-left':
            return css `
        bottom: 1rem;
        left: 1rem;
        align-items: flex-start;
      `;
        case 'bottom-center':
            return css `
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
      `;
        case 'bottom-right':
        default:
            return css `
        bottom: 1rem;
        right: 1rem;
        align-items: flex-end;
      `;
    }
};
const getAnimation = (position) => {
    if (position.includes('left'))
        return slideInLeft;
    if (position.includes('right'))
        return slideInRight;
    if (position.includes('top'))
        return slideInDown;
    return slideInUp;
};
export const ToastContainerElement = styled.div `
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
  pointer-events: none;
  
  ${({ $position }) => getPositionStyles($position)}
  
  ${breakpoints.xs} {
    left: 1rem;
    right: 1rem;
    transform: none;
    align-items: stretch;
  }
`;
export const ToastElement = styled.div `
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: flex-start;
  gap: ${tokens.spacing150 || '0.75rem'};
  min-width: 280px;
  max-width: 420px;
  padding: ${tokens.spacing150 || '0.75rem'} ${tokens.spacing200 || '1rem'};
  background: ${({ $type }) => typeStyles[$type].bg};
  border: 1px solid ${({ $type }) => typeStyles[$type].border};
  border-radius: ${tokens.borderRadius100 || '8px'};
  color: ${({ $type }) => typeStyles[$type].text};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  overflow: hidden;
  position: relative;
  
  animation: ${({ $position }) => getAnimation($position)} 0.3s ease-out;
  
  ${breakpoints.xs} {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`;
export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: ${({ $type }) => typeStyles[$type].icon};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const ContentWrapper = styled.div `
  flex: 1;
  min-width: 0;
`;
export const Message = styled.div `
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
`;
export const ActionsWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: ${tokens.spacing100 || '0.5rem'};
  flex-shrink: 0;
`;
export const ActionButton = styled.button `
  background: transparent;
  border: 1px solid ${({ $type }) => typeStyles[$type].border};
  color: inherit;
  padding: 0.25rem 0.625rem;
  border-radius: ${tokens.borderRadius050 || '4px'};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ $type }) => typeStyles[$type].accent};
    outline-offset: 2px;
  }
`;
export const DismissButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: inherit;
  padding: 0.25rem;
  border-radius: ${tokens.borderRadius050 || '4px'};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ $type }) => typeStyles[$type].accent};
    outline-offset: 2px;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const ProgressBar = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${({ $type }) => typeStyles[$type].accent};
  animation: ${progressShrink} ${({ $duration }) => $duration}ms linear forwards;
`;
