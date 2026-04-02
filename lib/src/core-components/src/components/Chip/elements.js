import { styled, css } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Size configurations
const sizeConfig = {
    small: {
        height: '24px',
        padding: '0 8px',
        fontSize: '0.75rem',
        iconSize: '14px',
        gap: '4px',
        borderRadius: '12px',
    },
    medium: {
        height: '32px',
        padding: '0 12px',
        fontSize: '0.8125rem',
        iconSize: '16px',
        gap: '6px',
        borderRadius: '16px',
    },
    large: {
        height: '40px',
        padding: '0 16px',
        fontSize: '0.875rem',
        iconSize: '18px',
        gap: '8px',
        borderRadius: '20px',
    },
};
// Color configurations
const colorConfig = {
    default: {
        filled: { bg: tokens.onSurface || '#1a1a2e', text: '#fff', hover: '#2d2d42' },
        outlined: {
            border: tokens.outline || '#d1d5db',
            text: tokens.onSurface || '#1a1a2e',
            hover: '#f3f4f6',
        },
        soft: {
            bg: tokens.surface || '#f3f4f6',
            text: tokens.onSurface || '#1a1a2e',
            hover: '#e5e7eb',
        },
    },
    primary: {
        filled: { bg: tokens.primary || '#454cbf', text: '#fff', hover: '#3d44a5' },
        outlined: {
            border: tokens.primary || '#454cbf',
            text: tokens.primary || '#454cbf',
            hover: '#e7e8f8',
        },
        soft: { bg: '#e7e8f8', text: tokens.primary || '#454cbf', hover: '#d4d6f4' },
    },
    success: {
        filled: { bg: '#10b981', text: '#fff', hover: '#059669' },
        outlined: { border: '#10b981', text: '#10b981', hover: '#ecfdf5' },
        soft: { bg: '#ecfdf5', text: '#065f46', hover: '#d1fae5' },
    },
    warning: {
        filled: { bg: '#f59e0b', text: '#fff', hover: '#d97706' },
        outlined: { border: '#f59e0b', text: '#f59e0b', hover: '#fffbeb' },
        soft: { bg: '#fffbeb', text: '#92400e', hover: '#fef3c7' },
    },
    error: {
        filled: { bg: '#ef4444', text: '#fff', hover: '#dc2626' },
        outlined: { border: '#ef4444', text: '#ef4444', hover: '#fef2f2' },
        soft: { bg: '#fef2f2', text: '#991b1b', hover: '#fee2e2' },
    },
    info: {
        filled: { bg: '#3b82f6', text: '#fff', hover: '#2563eb' },
        outlined: { border: '#3b82f6', text: '#3b82f6', hover: '#e7f3ff' },
        soft: { bg: '#e7f3ff', text: '#1e40af', hover: '#dbeafe' },
    },
};
const getVariantStyles = (variant, color, selected) => {
    const colorSet = colorConfig[color];
    if (variant === 'filled') {
        const config = colorSet.filled;
        return css `
      background: ${selected ? config.hover : config.bg};
      color: ${config.text};
      border: 2px solid transparent;

      &:hover:not(:disabled) {
        background: ${config.hover};
      }
    `;
    }
    if (variant === 'outlined') {
        const config = colorSet.outlined;
        return css `
      background: ${selected ? config.hover : 'transparent'};
      color: ${config.text};
      border: 2px solid ${config.border};

      &:hover:not(:disabled) {
        background: ${config.hover};
      }
    `;
    }
    // soft
    const config = colorSet.soft;
    return css `
    background: ${selected ? config.hover : config.bg};
    color: ${config.text};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: ${config.hover};
    }
  `;
};
export const ChipElement = styled.button `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $size }) => sizeConfig[$size].gap};
  height: ${({ $size }) => sizeConfig[$size].height};
  padding: ${({ $size }) => sizeConfig[$size].padding};
  font-size: ${({ $size }) => sizeConfig[$size].fontSize};
  font-weight: 500;
  font-family: inherit;
  border-radius: ${({ $size }) => sizeConfig[$size].borderRadius};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
  position: relative;
  overflow: hidden;

  ${({ $variant, $color, $selected }) => getVariantStyles($variant, $color, $selected)}

  /* Selected state visual indicator */
  ${({ $selected, $color, $variant }) => $selected &&
    $variant === 'outlined' &&
    css `
      border-color: ${colorConfig[$color].outlined.text};
      box-shadow: 0 0 0 1px ${colorConfig[$color].outlined.text};
    `}
  
  /* Disabled state */
  ${({ $disabled }) => $disabled &&
    css `
      opacity: 0.5;
      cursor: not-allowed;
    `}
  
  /* Focus visible */
  &:focus-visible {
    box-shadow:
      0 0 0 2px ${tokens.surface || '#fff'},
      0 0 0 4px ${tokens.primary || '#454cbf'};
  }

  /* Active state */
  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;
export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => sizeConfig[$size].iconSize};
  height: ${({ $size }) => sizeConfig[$size].iconSize};

  ${({ $side }) => $side === 'left'
    ? css `
          margin-left: -2px;
        `
    : css `
          margin-right: -2px;
        `}

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const AvatarWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => $size === 'small' ? '18px' : $size === 'large' ? '28px' : '24px'};
  height: ${({ $size }) => $size === 'small' ? '18px' : $size === 'large' ? '28px' : '24px'};
  border-radius: 50%;
  overflow: hidden;
  margin-left: ${({ $size }) => $size === 'small' ? '-4px' : $size === 'large' ? '-10px' : '-6px'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const DeleteButton = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => $size === 'small' ? '14px' : $size === 'large' ? '18px' : '16px'};
  height: ${({ $size }) => $size === 'small' ? '14px' : $size === 'large' ? '18px' : '16px'};
  border-radius: 50%;
  margin-right: -4px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const ChipLabel = styled.span `
  line-height: 1;
`;
export const ChipGroupElement = styled.div `
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};

  ${({ $wrap }) => $wrap &&
    css `
      flex-wrap: wrap;
    `}

  ${({ $scrollable, $direction }) => $scrollable &&
    css `
      overflow-x: ${$direction === 'row' ? 'auto' : 'visible'};
      overflow-y: ${$direction === 'column' ? 'auto' : 'visible'};
      padding-bottom: ${$direction === 'row' ? '4px' : '0'};

      /* Custom scrollbar */
      &::-webkit-scrollbar {
        height: 4px;
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${tokens.outline || '#d1d5db'};
        border-radius: 2px;
      }
    `}
`;
