import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
import { breakpoints } from '../../utils/abstracts';
// Animations
const pulse = keyframes `
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`;
const wave = keyframes `
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const shimmer = keyframes `
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;
const glow = keyframes `
  0%, 100% {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    opacity: 0.8;
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
`;
// Theme colors
const getThemeColors = (theme) => {
    if (theme === 'dark') {
        return {
            base: '#374151',
            highlight: '#4b5563',
            wave: 'rgba(255, 255, 255, 0.1)',
        };
    }
    // light or auto (defaults to light)
    return {
        base: '#e5e7eb',
        highlight: '#f3f4f6',
        wave: 'rgba(255, 255, 255, 0.6)',
    };
};
// Size presets
const sizePresets = {
    xs: { width: '40px', height: '12px' },
    sm: { width: '80px', height: '16px' },
    md: { width: '120px', height: '20px' },
    lg: { width: '180px', height: '24px' },
    xl: { width: '240px', height: '32px' },
};
// Avatar size presets
export const avatarSizes = {
    xs: '24px',
    sm: '32px',
    md: '48px',
    lg: '64px',
    xl: '96px',
};
const getAnimationStyles = (animation, duration, theme) => {
    const colors = getThemeColors(theme);
    switch (animation) {
        case 'pulse':
            return css `
        animation: ${pulse} ${duration}ms cubic-bezier(0.4, 0, 0.6, 1) infinite;
      `;
        case 'wave':
            return css `
        position: relative;
        overflow: hidden;
        
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${colors.wave} 50%,
            transparent 100%
          );
          animation: ${wave} ${duration}ms ease-in-out infinite;
        }
      `;
        case 'shimmer':
            return css `
        background: linear-gradient(
          90deg,
          ${colors.base} 0%,
          ${colors.highlight} 20%,
          ${colors.highlight} 40%,
          ${colors.base} 100%
        );
        background-size: 400% 100%;
        animation: ${shimmer} ${duration}ms linear infinite;
      `;
        case 'glow':
            return css `
        animation: ${glow} ${duration}ms ease-in-out infinite;
      `;
        case 'none':
        default:
            return css ``;
    }
};
const getVariantStyles = (variant, borderRadius) => {
    switch (variant) {
        case 'circular':
        case 'avatar':
            return css `
        border-radius: 50%;
      `;
        case 'text':
            return css `
        border-radius: 6px;
      `;
        case 'button':
            return css `
        border-radius: ${tokens.borderRadius050 || '6px'};
      `;
        case 'badge':
            return css `
        border-radius: 9999px;
      `;
        case 'rounded':
            return css `
        border-radius: ${borderRadius || tokens.borderRadius100 || '12px'};
      `;
        case 'rectangular':
        default:
            return css `
        border-radius: 4px;
      `;
    }
};
export const SkeletonElement = styled.div `
  display: block;
  flex-shrink: 0;
  background-color: ${({ $animation, $theme }) => {
    const colors = getThemeColors($theme);
    return $animation === 'shimmer' ? 'transparent' : colors.base;
}};
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  height: ${({ $height, $aspectRatio }) => $aspectRatio ? 'auto' : (typeof $height === 'number' ? `${$height}px` : $height)};
  
  ${({ $aspectRatio }) => $aspectRatio &&
    css `
      aspect-ratio: ${$aspectRatio};
    `}
  
  ${({ $variant, $borderRadius }) => getVariantStyles($variant, $borderRadius)}
  ${({ $animation, $duration, $theme }) => getAnimationStyles($animation, $duration, $theme)}
  
  /* Stagger animation */
  ${({ $staggerIndex }) => $staggerIndex !== undefined &&
    css `
      animation-delay: ${$staggerIndex * 100}ms;
    `}
  
  /* Responsive */
  ${({ $responsive }) => $responsive &&
    css `
      ${breakpoints.sm} {
        width: 100%;
      }
    `}
  
  /* Accessibility - reduce motion */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &::after {
      animation: none;
    }
  }
`;
export const SkeletonWrapper = styled.div `
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};
`;
export const SkeletonGroupContainer = styled.div `
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};
  align-items: ${({ $align }) => $align === 'start' ? 'flex-start' :
    $align === 'end' ? 'flex-end' :
        $align === 'stretch' ? 'stretch' : 'center'};
  
  ${({ $wrap }) => $wrap &&
    css `
      flex-wrap: wrap;
    `}
  
  /* Responsive stacking */
  ${({ $responsive, $direction }) => $responsive &&
    $direction === 'row' &&
    css `
      ${breakpoints.sm} {
        flex-direction: column;
        align-items: stretch;
      }
    `}
`;
export const SkeletonCardContainer = styled.div `
  background: ${({ $theme }) => $theme === 'dark' ? '#1f2937' : '#ffffff'};
  border-radius: ${tokens.borderRadius100 || '12px'};
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ $theme }) => $theme === 'dark' ? '#374151' : '#f3f4f6'};
  overflow: hidden;
  
  ${breakpoints.sm} {
    padding: 12px;
  }
`;
export const SkeletonTextContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;
