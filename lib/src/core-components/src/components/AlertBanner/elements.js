import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
import { breakpoints } from '../../utils/abstracts';
// Animations
const slideIn = keyframes `
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideOut = keyframes `
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;
// Type colors
const typeStyles = {
    info: {
        bg: '#e7f3ff',
        border: '#3b82f6',
        text: '#1e40af',
        icon: '#3b82f6',
    },
    success: {
        bg: '#ecfdf5',
        border: '#10b981',
        text: '#065f46',
        icon: '#10b981',
    },
    warning: {
        bg: '#fffbeb',
        border: '#f59e0b',
        text: '#92400e',
        icon: '#f59e0b',
    },
    error: {
        bg: '#fef2f2',
        border: '#ef4444',
        text: '#991b1b',
        icon: '#ef4444',
    },
    default: {
        bg: tokens.surface || '#f8f9fa',
        border: tokens.outline || '#e9ecef',
        text: tokens.onSurface || '#1a1a2e',
        icon: tokens.primary || '#454cbf',
    },
    dark: {
        bg: '#1f2937',
        border: '#374151',
        text: '#f9fafb',
        icon: '#9ca3af',
    },
};
// Size styles
const sizeStyles = {
    small: {
        padding: '0.5rem 0.75rem',
        fontSize: '0.8125rem',
        iconSize: '16px',
    },
    medium: {
        padding: '0.75rem 1rem',
        fontSize: '0.875rem',
        iconSize: '20px',
    },
    large: {
        padding: '1rem 1.25rem',
        fontSize: '1rem',
        iconSize: '24px',
    },
};
export const AlertBannerContainer = styled.div `
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: flex-start;
  gap: ${tokens.spacing100 || '0.5rem'};
  width: 100%;
  box-sizing: border-box;
  
  /* Type colors */
  background: ${({ $type }) => typeStyles[$type].bg};
  border: 1px solid ${({ $type }) => typeStyles[$type].border};
  color: ${({ $type }) => typeStyles[$type].text};
  
  /* Size styles */
  padding: ${({ $size }) => sizeStyles[$size].padding};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  
  /* Variant styles */
  ${({ $variant }) => $variant === 'banner' &&
    css `
      border-radius: 0;
      border-left: none;
      border-right: none;
    `}
  
  ${({ $variant }) => $variant === 'inline' &&
    css `
      border-radius: ${tokens.borderRadius100 || '8px'};
    `}
  
  ${({ $variant }) => $variant === 'floating' &&
    css `
      border-radius: ${tokens.borderRadius100 || '8px'};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      position: fixed;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      max-width: calc(100% - 2rem);
      z-index: 1000;
      
      ${breakpoints.md} {
        max-width: 600px;
      }
    `}
  
  /* Animation */
  ${({ $animated, $isOpen }) => $animated &&
    css `
      animation: ${$isOpen ? slideIn : slideOut} 0.3s ease-out;
    `}
  
  /* Responsive */
  ${breakpoints.xs} {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $type }) => typeStyles[$type].icon};
  width: ${({ $size }) => sizeStyles[$size].iconSize};
  height: ${({ $size }) => sizeStyles[$size].iconSize};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const ContentWrapper = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing050 || '0.25rem'};
  min-width: 0;
`;
export const Title = styled.strong `
  font-weight: 600;
  font-size: ${({ $size }) => $size === 'small' ? '0.875rem' :
    $size === 'large' ? '1.125rem' : '1rem'};
  line-height: 1.4;
`;
export const Message = styled.div `
  line-height: 1.5;
`;
export const ActionsWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: ${tokens.spacing100 || '0.5rem'};
  flex-shrink: 0;
  margin-left: auto;
  
  ${breakpoints.xs} {
    margin-left: 0;
    margin-top: ${tokens.spacing100 || '0.5rem'};
    justify-content: flex-end;
  }
`;
export const ActionButton = styled.button `
  background: transparent;
  border: 1px solid ${({ $type }) => typeStyles[$type].border};
  color: ${({ $type }) => typeStyles[$type].text};
  padding: 0.375rem 0.75rem;
  border-radius: ${tokens.borderRadius050 || '4px'};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${({ $type }) => typeStyles[$type].border}20;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ $type }) => typeStyles[$type].border};
    outline-offset: 2px;
  }
`;
export const DismissButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${({ $type }) => typeStyles[$type].text};
  padding: 0.25rem;
  border-radius: ${tokens.borderRadius050 || '4px'};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
  flex-shrink: 0;
  width: ${({ $size }) => sizeStyles[$size].iconSize};
  height: ${({ $size }) => sizeStyles[$size].iconSize};
  
  &:hover {
    opacity: 1;
    background: ${({ $type }) => typeStyles[$type].border}20;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ $type }) => typeStyles[$type].border};
    outline-offset: 2px;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
