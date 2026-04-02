import { styled, css, keyframes } from 'styled-components';
// Animations
const fadeIn = keyframes `
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
// Variant colors
const variantStyles = {
    dark: {
        bg: '#1f2937',
        text: '#f9fafb',
        border: '#374151',
    },
    light: {
        bg: '#ffffff',
        text: '#1f2937',
        border: '#e5e7eb',
    },
};
// Size styles
const sizeStyles = {
    small: {
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '4px',
    },
    medium: {
        padding: '8px 12px',
        fontSize: '13px',
        borderRadius: '6px',
    },
    large: {
        padding: '12px 16px',
        fontSize: '14px',
        borderRadius: '8px',
    },
};
// Arrow size
const ARROW_SIZE = 6;
export const TooltipTrigger = styled.span `
  display: inline-flex;
  cursor: default;
`;
export const TooltipPortal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: ${({ $zIndex }) => $zIndex};
`;
export const TooltipContent = styled.div `
  position: fixed;
  pointer-events: none;
  box-sizing: border-box;
  
  /* Variant */
  background: ${({ $variant }) => variantStyles[$variant].bg};
  color: ${({ $variant }) => variantStyles[$variant].text};
  border: 1px solid ${({ $variant }) => variantStyles[$variant].border};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Size */
  padding: ${({ $size }) => sizeStyles[$size].padding};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  border-radius: ${({ $size }) => sizeStyles[$size].borderRadius};
  
  /* Layout */
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : '280px')};
  width: max-content;
  text-align: left;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: normal;
  
  /* Animation */
  opacity: 0;
  ${({ $animated, $isVisible }) => $isVisible &&
    ($animated
        ? css `
          animation: ${fadeIn} 0.15s ease-out forwards;
        `
        : css `
          opacity: 1;
        `)}
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  }
`;
export const TooltipArrow = styled.div `
  position: absolute;
  width: 0;
  height: 0;
  border: ${ARROW_SIZE}px solid transparent;
  
  /* Position and color based on tooltip position */
  ${({ $position, $variant }) => {
    const color = variantStyles[$variant].bg;
    const borderColor = variantStyles[$variant].border;
    // Top positions - arrow at bottom
    if ($position.startsWith('top')) {
        return css `
        top: 100%;
        border-top-color: ${color};
        
        &::before {
          content: '';
          position: absolute;
          top: -${ARROW_SIZE + 1}px;
          left: -${ARROW_SIZE}px;
          border: ${ARROW_SIZE}px solid transparent;
          border-top-color: ${borderColor};
          z-index: -1;
        }
        
        ${$position === 'top' && css `left: 50%; margin-left: -${ARROW_SIZE}px;`}
        ${$position === 'top-start' && css `left: 12px;`}
        ${$position === 'top-end' && css `right: 12px;`}
      `;
    }
    // Bottom positions - arrow at top
    if ($position.startsWith('bottom')) {
        return css `
        bottom: 100%;
        border-bottom-color: ${color};
        
        &::before {
          content: '';
          position: absolute;
          bottom: -${ARROW_SIZE + 1}px;
          left: -${ARROW_SIZE}px;
          border: ${ARROW_SIZE}px solid transparent;
          border-bottom-color: ${borderColor};
          z-index: -1;
        }
        
        ${$position === 'bottom' && css `left: 50%; margin-left: -${ARROW_SIZE}px;`}
        ${$position === 'bottom-start' && css `left: 12px;`}
        ${$position === 'bottom-end' && css `right: 12px;`}
      `;
    }
    // Left positions - arrow at right
    if ($position.startsWith('left')) {
        return css `
        left: 100%;
        border-left-color: ${color};
        
        &::before {
          content: '';
          position: absolute;
          left: -${ARROW_SIZE - 1}px;
          top: -${ARROW_SIZE}px;
          border: ${ARROW_SIZE}px solid transparent;
          border-left-color: ${borderColor};
          z-index: -1;
        }
        
        ${$position === 'left' && css `top: 50%; margin-top: -${ARROW_SIZE}px;`}
        ${$position === 'left-start' && css `top: 12px;`}
        ${$position === 'left-end' && css `bottom: 12px;`}
      `;
    }
    // Right positions - arrow at left
    if ($position.startsWith('right')) {
        return css `
        right: 100%;
        border-right-color: ${color};
        
        &::before {
          content: '';
          position: absolute;
          right: -${ARROW_SIZE - 1}px;
          top: -${ARROW_SIZE}px;
          border: ${ARROW_SIZE}px solid transparent;
          border-right-color: ${borderColor};
          z-index: -1;
        }
        
        ${$position === 'right' && css `top: 50%; margin-top: -${ARROW_SIZE}px;`}
        ${$position === 'right-start' && css `top: 12px;`}
        ${$position === 'right-end' && css `bottom: 12px;`}
      `;
    }
    return '';
}}
`;
