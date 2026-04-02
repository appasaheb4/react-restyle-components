import { styled, css } from 'styled-components';
import { breakpoints, getFontSize } from '../../utils/abstracts';
import { tokens } from '../../utils/designTokens';
// Simple Text component for internal use (basic span)
export const Text = styled.span `
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`;
// CurrentPage component for the active/last breadcrumb item
export const CurrentPage = styled.span `
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  color: inherit;
  display: inline-flex;
  align-items: center;

  /* Enhanced styling for pills variant */
  ${({ $variant }) => $variant === 'pills' &&
    css `
      font-weight: 700;
      letter-spacing: 0.02em;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    `}
`;
// Size configurations
const sizeStyles = {
    small: {
        fontSize: getFontSize(0),
        padding: `${tokens.spacing050} ${tokens.spacing100}`,
        gap: tokens.spacing050,
        iconSize: '12px',
    },
    medium: {
        fontSize: getFontSize(1),
        padding: `${tokens.spacing075} ${tokens.spacing150}`,
        gap: tokens.spacing075,
        iconSize: '14px',
    },
    large: {
        fontSize: getFontSize(2),
        padding: `${tokens.spacing100} ${tokens.spacing200}`,
        gap: tokens.spacing100,
        iconSize: '16px',
    },
};
export const Container = styled.nav `
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${({ $size }) => sizeStyles[$size].gap};
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Variant: contained */
  ${({ $variant }) => $variant === 'contained' &&
    css `
      background: linear-gradient(
        135deg,
        ${tokens.surface || '#f8f9fa'} 0%,
        #f1f3f5 100%
      );
      border: 1px solid ${tokens.outline || '#e9ecef'};
      border-radius: ${tokens.borderRadius100 || '8px'};
      padding: ${tokens.spacing100} ${tokens.spacing200};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    `}

  /* Variant: pills */
  ${({ $variant }) => $variant === 'pills' &&
    css `
      background: transparent;
      gap: ${tokens.spacing050};
    `}

  /* Responsive: allow wrapping on larger screens */
  ${breakpoints.md} {
    flex-wrap: wrap;
  }

  /* Smooth scroll behavior */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;
export const BreadcrumbList = styled.ol `
  all: unset;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${({ $size }) => sizeStyles[$size].gap};
  list-style: none;
  margin: 0;
  padding: 0;

  ${breakpoints.md} {
    flex-wrap: wrap;
  }
`;
export const Item = styled.li `
  display: flex;
  align-items: center;
  gap: ${({ $size }) => sizeStyles[$size].gap};
  position: relative;
  transition: all 0.2s ease;

  /* Base text styles */
  color: ${({ $isActive }) => $isActive
    ? tokens.onSurface || '#1a1a2e'
    : tokens.onSurface
        ? `${tokens.onSurface}99`
        : '#6c757d'};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 400)};
  line-height: 1.5;
  white-space: nowrap;

  /* Links and actions styling */
  [data-aui='link'],
  [data-aui='action.inline'],
  a {
    color: ${tokens.primary || '#454cbf'};
    text-decoration: none;
    transition: all 0.2s ease;
    padding: ${({ $size }) => $size === 'small'
    ? `${tokens.spacing025} ${tokens.spacing050}`
    : $size === 'large'
        ? `${tokens.spacing075} ${tokens.spacing100}`
        : `${tokens.spacing050} ${tokens.spacing075}`};
    border-radius: ${tokens.borderRadius050 || '4px'};

    &:hover {
      color: ${tokens.primary || '#454cbf'};
      background: ${tokens.primary
    ? `${tokens.primary}10`
    : 'rgba(69, 76, 191, 0.08)'};
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${tokens.primary || '#454cbf'};
      outline-offset: 2px;
    }
  }

  /* Pills variant styling */
  ${({ $variant, $isActive, $size }) => $variant === 'pills' &&
    css `
      background: ${$isActive
        ? `linear-gradient(135deg, ${tokens.primary || '#454cbf'} 0%, ${tokens.primary ? tokens.primary + 'dd' : '#5a61c9'} 100%)`
        : tokens.surface || '#f8f9fa'};
      color: ${$isActive
        ? tokens.white || '#ffffff'
        : tokens.onSurface || '#1a1a2e'};
      padding: ${sizeStyles[$size].padding};
      border-radius: ${tokens.borderRadius200 || '16px'};
      border: 1px solid
        ${$isActive ? 'transparent' : tokens.outline || '#e9ecef'};
      box-shadow: ${$isActive
        ? '0 2px 8px rgba(69, 76, 191, 0.3)'
        : '0 1px 2px rgba(0, 0, 0, 0.05)'};
      transition: all 0.25s ease;

      &:hover:not(:last-child) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      [data-aui='link'],
      [data-aui='action.inline'],
      a {
        color: inherit;
        background: transparent;
        padding: 0;

        &:hover {
          background: transparent;
          text-decoration: none;
        }
      }
    `}

  /* Collapsed item (ellipsis) */
  ${({ $isCollapsed }) => $isCollapsed &&
    css `
      cursor: pointer;
      padding: ${tokens.spacing050} ${tokens.spacing075};
      border-radius: ${tokens.borderRadius050 || '4px'};
      background: ${tokens.surface || '#f8f9fa'};
      border: 1px solid ${tokens.outline || '#e9ecef'};

      &:hover {
        background: ${tokens.primary
        ? `${tokens.primary}10`
        : 'rgba(69, 76, 191, 0.08)'};
        border-color: ${tokens.primary || '#454cbf'};
      }
    `}

  /* Hide on mobile for collapsed items */
  ${({ $isCollapsed }) => $isCollapsed &&
    css `
      ${breakpoints.xs} {
        display: none;
      }
    `}
`;
export const Separator = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.onSurface ? `${tokens.onSurface}66` : '#adb5bd'};
  flex-shrink: 0;
  transition: color 0.2s ease;

  /* Icon styling */
  [data-aui='icon'] {
    color: inherit;
    width: ${({ $size }) => sizeStyles[$size].iconSize};
    height: ${({ $size }) => sizeStyles[$size].iconSize};
  }

  /* Hide separator on last item via CSS */
  ${Item}:last-child & {
    display: none;
  }
`;
export const SeparatorText = styled.span `
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  color: inherit;
  user-select: none;
`;
export const OverflowDots = styled.span `
  display: none;
  color: ${tokens.onSurface ? `${tokens.onSurface}80` : '#6c757d'};
  font-weight: 500;
  letter-spacing: 2px;
  padding: ${tokens.spacing050} ${tokens.spacing075};
  border-radius: ${tokens.borderRadius050 || '4px'};
  background: ${tokens.surface || '#f8f9fa'};
  border: 1px solid ${tokens.outline || '#e9ecef'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};

  &:hover {
    background: ${tokens.primary
    ? `${tokens.primary}10`
    : 'rgba(69, 76, 191, 0.08)'};
    border-color: ${tokens.primary || '#454cbf'};
    color: ${tokens.primary || '#454cbf'};
  }

  ${breakpoints.md} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HomeIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeStyles[$size].iconSize};
  height: ${({ $size }) => sizeStyles[$size].iconSize};
  color: ${tokens.primary || '#454cbf'};
  transition: all 0.2s ease;

  [data-aui='icon'] {
    color: inherit;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => $size === 'small' ? '16px' : $size === 'large' ? '24px' : '20px'};
  height: ${({ $size }) => $size === 'small' ? '16px' : $size === 'large' ? '24px' : '20px'};

  [data-aui='icon'],
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const MobileMenuButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.surface || '#f8f9fa'};
  border: 1px solid ${tokens.outline || '#e9ecef'};
  border-radius: ${tokens.borderRadius050 || '4px'};
  padding: ${({ $size }) => $size === 'small'
    ? tokens.spacing050
    : $size === 'large'
        ? tokens.spacing100
        : tokens.spacing075};
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${tokens.onSurface || '#1a1a2e'};

  &:hover {
    background: ${tokens.primary
    ? `${tokens.primary}10`
    : 'rgba(69, 76, 191, 0.08)'};
    border-color: ${tokens.primary || '#454cbf'};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.primary || '#454cbf'};
    outline-offset: 2px;
  }

  /* Only show on mobile */
  ${breakpoints.sm} {
    display: none;
  }
`;
export const DropdownMenu = styled.div `
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  min-width: 200px;
  background: ${tokens.surface || '#ffffff'};
  border: 1px solid ${tokens.outline || '#e9ecef'};
  border-radius: ${tokens.borderRadius100 || '8px'};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: ${tokens.spacing050};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => $isOpen ? 'translateY(4px)' : 'translateY(-8px)'};
  transition: all 0.2s ease;
`;
export const DropdownItem = styled.a `
  display: flex;
  align-items: center;
  gap: ${tokens.spacing100};
  padding: ${tokens.spacing100} ${tokens.spacing150};
  color: ${tokens.onSurface || '#1a1a2e'};
  text-decoration: none;
  border-radius: ${tokens.borderRadius050 || '4px'};
  transition: all 0.15s ease;
  font-size: ${getFontSize(1)};

  &:hover {
    background: ${tokens.primary
    ? `${tokens.primary}10`
    : 'rgba(69, 76, 191, 0.08)'};
    color: ${tokens.primary || '#454cbf'};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.primary || '#454cbf'};
    outline-offset: -2px;
  }
`;
