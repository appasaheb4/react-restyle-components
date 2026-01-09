import { styled, css } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Size values
const sizeValues = {
    thin: '1px',
    medium: '2px',
    thick: '4px',
};
// Color values
const colorValues = {
    default: tokens.outline || '#e9ecef',
    primary: tokens.primary || '#454cbf',
    subtle: tokens.outlineSoft || '#f1f3f5',
    dark: '#374151',
};
export const DividerContainer = styled.div `
  display: flex;
  align-items: center;
  
  ${({ $orientation, $inset, $centerInset }) => $orientation === 'horizontal'
    ? css `
          width: ${$centerInset
        ? `calc(100% - (${$inset} * 2))`
        : `calc(100% - ${$inset})`};
          margin-left: ${$inset};
          ${$centerInset && `margin-right: ${$inset};`}
          flex-direction: row;
        `
    : css `
          height: 100%;
          margin-top: ${$inset};
          ${$centerInset && `margin-bottom: ${$inset};`}
          flex-direction: column;
        `}
`;
export const DividerLine = styled.div `
  flex: ${({ $flex }) => $flex ?? 1};
  
  ${({ $orientation, $size, $variant, $color }) => $orientation === 'horizontal'
    ? css `
          height: ${sizeValues[$size]};
          width: 100%;
        `
    : css `
          width: ${sizeValues[$size]};
          height: 100%;
        `}
  
  /* Variant styles */
  ${({ $variant, $color }) => {
    const colorValue = colorValues[$color];
    switch ($variant) {
        case 'solid':
            return css `
          background-color: ${colorValue};
        `;
        case 'dashed':
            return css `
          background-image: repeating-linear-gradient(
            90deg,
            ${colorValue},
            ${colorValue} 8px,
            transparent 8px,
            transparent 16px
          );
        `;
        case 'dotted':
            return css `
          background-image: repeating-linear-gradient(
            90deg,
            ${colorValue},
            ${colorValue} 4px,
            transparent 4px,
            transparent 12px
          );
        `;
        case 'gradient':
            return css `
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${colorValue} 20%,
            ${colorValue} 80%,
            transparent 100%
          );
        `;
        default:
            return css `
          background-color: ${colorValue};
        `;
    }
}}
`;
export const DividerLabel = styled.span `
  padding: 0 ${tokens.spacing150 || '0.75rem'};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ $color }) => $color === 'dark' ? '#9ca3af' : tokens.onSurface ? `${tokens.onSurface}80` : '#6c757d'};
  white-space: nowrap;
  flex-shrink: 0;
`;
