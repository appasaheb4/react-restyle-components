import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Animations
const fadeIn = keyframes `
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const rotate = keyframes `
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
// Size configurations
const sizeConfig = {
    small: {
        height: 28,
        fontSize: 12,
        padding: '4px 8px',
        tagHeight: 20,
        iconSize: 14,
    },
    medium: {
        height: 36,
        fontSize: 14,
        padding: '6px 12px',
        tagHeight: 24,
        iconSize: 16,
    },
    large: {
        height: 44,
        fontSize: 16,
        padding: '8px 16px',
        tagHeight: 28,
        iconSize: 18,
    },
};
// Variant styles
const variantStyles = {
    outlined: css `
    background: white;
    border: 1px solid ${tokens.outline || '#d1d5db'};
    
    &:hover:not([data-disabled="true"]) {
      border-color: ${tokens.primary || '#3b82f6'};
    }
    
    &:focus-within {
      border-color: ${tokens.primary || '#3b82f6'};
      box-shadow: 0 0 0 2px ${tokens.primary ? `${tokens.primary}20` : 'rgba(59, 130, 246, 0.15)'};
    }
  `,
    borderless: css `
    background: transparent;
    border: 1px solid transparent;
    
    &:hover:not([data-disabled="true"]) {
      background: ${tokens.surface || '#f9fafb'};
    }
  `,
    filled: css `
    background: ${tokens.surface || '#f3f4f6'};
    border: 1px solid transparent;
    
    &:hover:not([data-disabled="true"]) {
      background: #e5e7eb;
    }
    
    &:focus-within {
      background: white;
      border-color: ${tokens.primary || '#3b82f6'};
      box-shadow: 0 0 0 2px ${tokens.primary ? `${tokens.primary}20` : 'rgba(59, 130, 246, 0.15)'};
    }
  `,
    underlined: css `
    background: transparent;
    border: none;
    border-bottom: 1px solid ${tokens.outline || '#d1d5db'};
    border-radius: 0;
    
    &:hover:not([data-disabled="true"]) {
      border-bottom-color: ${tokens.primary || '#3b82f6'};
    }
    
    &:focus-within {
      border-bottom-color: ${tokens.primary || '#3b82f6'};
      border-bottom-width: 2px;
    }
  `,
};
// Status styles
const statusStyles = {
    error: css `
    border-color: ${tokens.error || '#ef4444'} !important;
    
    &:focus-within {
      box-shadow: 0 0 0 2px ${tokens.error ? `${tokens.error}20` : 'rgba(239, 68, 68, 0.15)'};
    }
  `,
    warning: css `
    border-color: ${tokens.warning || '#f59e0b'} !important;
    
    &:focus-within {
      box-shadow: 0 0 0 2px ${tokens.warning ? `${tokens.warning}20` : 'rgba(245, 158, 11, 0.15)'};
    }
  `,
};
export const TreeSelectRoot = styled.div `
  position: relative;
  display: inline-flex;
  width: 100%;
  font-family: inherit;
  
  &[data-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
export const Selector = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: ${({ $multiple }) => ($multiple ? 'wrap' : 'nowrap')};
  gap: 4px;
  width: 100%;
  min-height: ${({ $size }) => sizeConfig[$size].height}px;
  padding: ${({ $size }) => sizeConfig[$size].padding};
  font-size: ${({ $size }) => sizeConfig[$size].fontSize}px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $status }) => $status && statusStyles[$status]}
`;
export const Prefix = styled.span `
  display: flex;
  align-items: center;
  color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};
  margin-right: 8px;
  flex-shrink: 0;
  
  svg {
    width: ${({ $size }) => sizeConfig[$size].iconSize}px;
    height: ${({ $size }) => sizeConfig[$size].iconSize}px;
  }
`;
export const SearchInput = styled.input `
  flex: 1;
  min-width: 60px;
  border: none;
  background: transparent;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  color: ${tokens.onSurface || '#1f2937'};
  
  &::placeholder {
    color: ${tokens.onSurface ? `${tokens.onSurface}50` : '#9ca3af'};
  }
`;
export const Placeholder = styled.span `
  color: ${tokens.onSurface ? `${tokens.onSurface}50` : '#9ca3af'};
  user-select: none;
`;
export const SelectedValue = styled.span `
  color: ${tokens.onSurface || '#1f2937'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;
export const Tag = styled.span `
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: ${({ $size }) => sizeConfig[$size].tagHeight}px;
  padding: 0 8px;
  background: ${tokens.surface || '#f3f4f6'};
  border-radius: 4px;
  font-size: ${({ $size }) => sizeConfig[$size].fontSize - 2}px;
  color: ${tokens.onSurface || '#374151'};
  max-width: 100%;
  
  ${({ $disabled }) => $disabled &&
    css `
      opacity: 0.6;
    `}
`;
export const TagLabel = styled.span `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const TagClose = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};
  border-radius: 50%;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${tokens.outline || '#d1d5db'};
    color: ${tokens.onSurface || '#1f2937'};
  }
  
  svg {
    width: 10px;
    height: 10px;
  }
`;
export const MaxTagPlaceholder = styled.span `
  display: inline-flex;
  align-items: center;
  height: ${({ $size }) => sizeConfig[$size].tagHeight}px;
  padding: 0 8px;
  background: ${tokens.surface || '#f3f4f6'};
  border-radius: 4px;
  font-size: ${({ $size }) => sizeConfig[$size].fontSize - 2}px;
  color: ${tokens.onSurface ? `${tokens.onSurface}80` : '#6b7280'};
`;
export const Suffix = styled.span `
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  padding-left: 8px;
  flex-shrink: 0;
  
  svg {
    width: ${({ $size }) => sizeConfig[$size].iconSize}px;
    height: ${({ $size }) => sizeConfig[$size].iconSize}px;
    color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};
    transition: transform 0.2s ease;
  }
`;
export const ArrowIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};
  }
`;
export const ClearButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${tokens.onSurface ? `${tokens.onSurface}50` : '#9ca3af'};
  border-radius: 50%;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${tokens.outline || '#e5e7eb'};
    color: ${tokens.onSurface || '#1f2937'};
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;
export const Dropdown = styled.div `
  position: absolute;
  ${({ $placement }) => {
    if ($placement.startsWith('top')) {
        return css `
        bottom: 100%;
        margin-bottom: 4px;
      `;
    }
    return css `
      top: 100%;
      margin-top: 4px;
    `;
}}
  ${({ $placement }) => {
    if ($placement.endsWith('Right')) {
        return css `right: 0;`;
    }
    return css `left: 0;`;
}}
  ${({ $matchWidth }) => {
    if ($matchWidth === true) {
        return css `width: 100%;`;
    }
    if (typeof $matchWidth === 'number') {
        return css `min-width: ${$matchWidth}px;`;
    }
    return css `min-width: 200px;`;
}}
  max-height: ${({ $maxHeight }) => $maxHeight}px;
  overflow: auto;
  background: white;
  border: 1px solid ${tokens.outline || '#e5e7eb'};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  z-index: 1050;
  animation: ${fadeIn} 0.15s ease;
`;
export const TreeContainer = styled.div `
  padding: 4px;
  
  ${({ $showLine }) => $showLine &&
    css `
      --tree-line-color: ${tokens.outline || '#e5e7eb'};
    `}
`;
export const TreeNode = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  padding-left: ${({ $level }) => 8 + $level * 20}px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
  transition: background 0.15s ease;
  
  ${({ $disabled }) => $disabled &&
    css `
      opacity: 0.5;
    `}
  
  ${({ $selected }) => $selected &&
    css `
      background: ${tokens.primary ? `${tokens.primary}10` : '#eff6ff'};
      color: ${tokens.primary || '#3b82f6'};
    `}
  
  &:hover:not([data-disabled="true"]) {
    background: ${({ $selected }) => $selected
    ? tokens.primary
        ? `${tokens.primary}15`
        : '#dbeafe'
    : tokens.surface || '#f9fafb'};
  }
  
  /* Tree lines */
  ${({ $showLine, $level, $isLeaf }) => $showLine &&
    $level > 0 &&
    css `
      &::before {
        content: '';
        position: absolute;
        left: ${8 + ($level - 1) * 20 + 8}px;
        top: 0;
        bottom: 50%;
        width: 1px;
        background: var(--tree-line-color);
      }
      
      &::after {
        content: '';
        position: absolute;
        left: ${8 + ($level - 1) * 20 + 8}px;
        top: 50%;
        width: 12px;
        height: 1px;
        background: var(--tree-line-color);
      }
    `}
`;
export const ExpandIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  flex-shrink: 0;
  
  svg {
    width: 12px;
    height: 12px;
    color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};
    transition: transform 0.2s ease;
    transform: ${({ $expanded }) => ($expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
    
    ${({ $loading }) => $loading &&
    css `
        animation: ${rotate} 0.8s linear infinite;
      `}
  }
`;
export const LeafIndent = styled.span `
  width: 20px;
  margin-right: 4px;
  flex-shrink: 0;
`;
export const Checkbox = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1.5px solid ${tokens.outline || '#d1d5db'};
  border-radius: 3px;
  flex-shrink: 0;
  transition: all 0.15s ease;
  
  ${({ $checked }) => $checked &&
    css `
      background: ${tokens.primary || '#3b82f6'};
      border-color: ${tokens.primary || '#3b82f6'};
    `}
  
  ${({ $indeterminate }) => $indeterminate &&
    css `
      background: ${tokens.primary || '#3b82f6'};
      border-color: ${tokens.primary || '#3b82f6'};
    `}
  
  ${({ $disabled }) => $disabled &&
    css `
      background: ${tokens.surface || '#f3f4f6'};
      cursor: not-allowed;
    `}
  
  svg {
    width: 12px;
    height: 12px;
    color: white;
  }
`;
export const NodeIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
  color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};
  
  svg {
    width: 14px;
    height: 14px;
  }
`;
export const NodeTitle = styled.span `
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: ${({ $disabled }) => $disabled
    ? tokens.onSurface
        ? `${tokens.onSurface}50`
        : '#9ca3af'
    : tokens.onSurface || '#1f2937'};
`;
export const EmptyState = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  color: ${tokens.onSurface ? `${tokens.onSurface}50` : '#9ca3af'};
  font-size: 14px;
`;
export const LoadingIndicator = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${tokens.primary || '#3b82f6'};
    animation: ${rotate} 0.8s linear infinite;
  }
`;
