import { styled, css, keyframes } from 'styled-components';
import { tokens } from '../../utils/designTokens';
// Animations
const shimmer = keyframes `
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
const fadeIn = keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`;
const spin = keyframes `
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const pulse = keyframes `
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
const countUp = keyframes `
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;
const countDown = keyframes `
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;
const slideIn = keyframes `
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;
export const TableRoot = styled.div `
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  color: ${tokens.onSurface || '#1f2937'};
  background: white;
  border-radius: 8px;
  overflow: hidden;

  ${({ $bordered }) => $bordered &&
    css `
      border: 1px solid ${tokens.outline || '#e5e7eb'};
    `}
`;
export const Toolbar = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border-bottom: 1px solid ${tokens.outline || '#e5e7eb'};

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const ToolbarGroup = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
export const SearchInput = styled.div `
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 220px;
    height: 34px;
    padding: 0 12px 0 36px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 13px;
    background: #f9fafb;
    color: #374151;
    transition: all 0.2s ease;

    &:hover {
      border-color: #d1d5db;
      background: #ffffff;
    }

    &:focus {
      outline: none;
      border-color: #9ca3af;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.15);
    }

    &::placeholder {
      color: #9ca3af;
      font-size: 12px;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  svg {
    position: absolute;
    left: 12px;
    width: 14px;
    height: 14px;
    color: #9ca3af;
  }
`;
export const ToolbarButton = styled.button `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 32px;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  /* Default gray button style (matching existing TableBootstrap) */
  color: white;
  background: ${({ $active }) => $active ? tokens.primary || '#3b82f6' : '#6b7280'};
  border: none;

  &:hover:not(:disabled) {
    background: ${({ $active }) => $active ? tokens.primary || '#2563eb' : '#5b6570'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
export const SelectionIndicator = styled.button `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${tokens.primary || '#3b82f6'};
  border-radius: 6px;
  border: 2px solid ${tokens.primary || '#3b82f6'};
  outline: none;
  color: white;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  animation: ${slideIn} 0.3s ease-out;

  &:hover {
    border-color: white;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    border-color: white;
    box-shadow: 0 0 0 3px
      ${tokens.primary ? `${tokens.primary}40` : 'rgba(59, 130, 246, 0.4)'};
  }
`;
export const SelectionCount = styled.span `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  height: 26px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  overflow: hidden;

  ${({ $animate }) => $animate === 'up' &&
    css `
      animation:
        ${countUp} 0.3s ease-out,
        ${pulse} 0.3s ease-out;
    `}

  ${({ $animate }) => $animate === 'down' &&
    css `
      animation:
        ${countDown} 0.3s ease-out,
        ${pulse} 0.3s ease-out;
    `}
`;
export const SelectionIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  svg {
    width: 16px;
    height: 16px;
  }
`;
export const TableWrapper = styled.div `
  width: 100%;
  overflow-x: auto;
  overflow-y: ${({ $stickyHeader }) => ($stickyHeader ? 'auto' : 'visible')};
  ${({ $maxHeight }) => $maxHeight &&
    css `
      max-height: ${typeof $maxHeight === 'number'
        ? `${$maxHeight}px`
        : $maxHeight};
    `}
`;
export const StyledTable = styled.table `
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

  ${({ $striped }) => $striped &&
    css `
      tbody tr:nth-child(even) {
        background: ${tokens.surface || '#f9fafb'};
        color: ${tokens.onSurface || '#1f2937'};
      }
    `}

  ${({ $hover }) => $hover &&
    css `
      tbody tr:hover {
        background: #ececec !important;
        color: ${tokens.onSurface || '#1f2937'};
      }
    `}
`;
export const TableHeader = styled.thead `
  ${({ $sticky }) => $sticky &&
    css `
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`;
export const HeaderRow = styled.tr `
  background: #6b7280;
`;
export const HeaderCell = styled.th `
  padding: ${({ $compact }) => ($compact ? '4px 6px' : '6px 8px')};
  text-align: ${({ $align }) => $align};
  vertical-align: middle;
  user-select: none;
  white-space: nowrap;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  /* Default styles - only applied when no custom class */
  ${({ $customClass }) => !$customClass &&
    css `
      position: relative;
      font-weight: 600;
      font-size: 11px;
      color: white;
      background: #6b7280;
      border-bottom: 1px solid ${tokens.outline || '#e5e7eb'};
    `}

  ${({ $width }) => $width &&
    css `
      width: ${typeof $width === 'number' ? `${$width}px` : $width};
    `}

  ${({ $minWidth }) => $minWidth &&
    css `
      min-width: ${typeof $minWidth === 'number'
        ? `${$minWidth}px`
        : $minWidth};
    `}

  ${({ $pinned, $customClass }) => $pinned &&
    !$customClass &&
    css `
      position: sticky;
      ${$pinned}: 0;
      z-index: 11;
    `}
`;
export const SortIcon = styled.span `
  display: inline-flex;
  flex-direction: column;
  gap: 1px;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  vertical-align: middle;

  svg {
    width: 8px;
    height: 8px;

    &:first-child {
      opacity: ${({ $active, $direction }) => $active && $direction === 'asc' ? 1 : 0.4};
    }

    &:last-child {
      opacity: ${({ $active, $direction }) => $active && $direction === 'desc' ? 1 : 0.4};
    }
  }
`;
export const FilterRow = styled.tr `
  background: #6b7280;
`;
export const FilterCell = styled.td `
  padding: ${({ $compact }) => ($compact ? '2px 4px' : '4px 6px')};
  vertical-align: middle;
  border-bottom: 1px solid ${tokens.outline || '#e5e7eb'};
`;
export const FilterInput = styled.input `
  width: 100%;
  height: 24px;
  padding: 0 8px;
  font-size: 11px;
  border: 1px solid ${tokens.outline || '#e2e8f0'};
  border-radius: 3px;
  background: white;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${tokens.primary || '#94a3b8'};
  }

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }

  &::placeholder {
    color: ${tokens.onSurface ? `${tokens.onSurface}40` : '#9ca3af'};
  }
`;
export const FilterSelect = styled.select `
  width: 100%;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
`;
export const TableBody = styled.tbody ``;
export const TableRow = styled.tr `
  transition: background 0.15s ease;
  color: ${tokens.onSurface || '#1f2937'};
  background: white;

  /* Hover effect - light gray background */
  &:hover {
    background: #ececec !important;
  }

  ${({ $selected }) => $selected &&
    css `
      background: ${tokens.primary
        ? `${tokens.primary}10`
        : '#fef3c7'} !important;
      color: ${tokens.onSurface || '#1f2937'};

      &:hover {
        background: ${tokens.primary
        ? `${tokens.primary}15`
        : '#fde68a'} !important;
      }
    `}

  ${({ $clickable, $disabled }) => $clickable &&
    !$disabled &&
    css `
      cursor: pointer;
    `}
  
  ${({ $disabled }) => $disabled &&
    css `
      opacity: 0.5;
      background: ${tokens.surface || '#e5e7eb'} !important;
      color: ${tokens.onSurface || '#1f2937'};

      &:hover {
        background: ${tokens.surface || '#e5e7eb'} !important;
      }
    `}
`;
export const TableCell = styled.td `
  padding: ${({ $padding, $compact }) => $padding || ($compact ? '2px' : '2px')};
  text-align: ${({ $align }) => $align};
  border-bottom: 1px solid #d1d5db;
  border-right: 1px solid #9ca3af;
  vertical-align: middle;
  font-size: 12px;

  ${({ $hasCustomClass }) => !$hasCustomClass &&
    css `
      color: ${tokens.onSurface || '#1f2937'};
      background: transparent;
    `}

  ${({ $pinned, $hasCustomClass }) => $pinned &&
    !$hasCustomClass &&
    css `
      position: sticky;
      ${$pinned}: 0;
      background: white;
      z-index: 1;
    `}
`;
export const Checkbox = styled.input.attrs({ type: 'checkbox' }) `
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${tokens.primary || '#3b82f6'};
`;
export const ExpandButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.15s ease;

  &:hover {
    background: ${tokens.surface || '#f3f4f6'};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${tokens.onSurface ? `${tokens.onSurface}70` : '#6b7280'};
    transition: transform 0.2s ease;
    transform: ${({ $expanded }) => ($expanded ? 'rotate(90deg)' : 'rotate(0)')};
  }
`;
export const ExpandedRow = styled.tr `
  animation: ${fadeIn} 0.2s ease;
`;
export const ExpandedCell = styled.td `
  padding: 16px;
  background: ${tokens.surface || '#f9fafb'};
  border-bottom: 1px solid ${tokens.outline || '#e5e7eb'};
`;
export const TableFooter = styled.tfoot `
  background: ${tokens.surface || '#f3f4f6'};
`;
export const FooterRow = styled.tr ``;
export const FooterCell = styled.td `
  padding: ${({ $compact }) => ($compact ? '8px 12px' : '12px 16px')};
  text-align: ${({ $align }) => $align};
  font-weight: 600;
  border-top: 2px solid ${tokens.outline || '#e5e7eb'};
`;
export const PaginationWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: #6b7280;
  border-top: 1px solid ${tokens.outline || '#e5e7eb'};
  color: white;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
export const PaginationInfo = styled.div `
  font-size: 13px;
  color: white;
`;
export const PaginationControls = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const PageButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active }) => ($active ? 'white' : 'white')};
  background: ${({ $active }) => $active ? tokens.primary || '#3b82f6' : 'transparent'};
  border: 1px solid
    ${({ $active }) => ($active ? 'transparent' : 'rgba(255,255,255,0.3)')};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => $active ? tokens.primary || '#2563eb' : 'rgba(255,255,255,0.1)'};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
export const PageSizeSelect = styled.select `
  height: 32px;
  padding: 0 24px 0 8px;
  font-size: 13px;
  color: #1f2937;
  background: white;
  border: 1px solid ${tokens.outline || '#d1d5db'};
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${tokens.primary || '#3b82f6'};
  }
`;
export const QuickJumper = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: white;

  input {
    width: 50px;
    height: 32px;
    padding: 0 8px;
    text-align: center;
    font-size: 13px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    background: transparent;
    color: white;

    &:focus {
      outline: none;
      border-color: ${tokens.primary || '#3b82f6'};
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
export const EmptyState = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  span {
    font-size: 14px;
  }
`;
export const LoadingOverlay = styled.div `
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 20;
`;
export const LoadingSpinner = styled.div `
  width: 32px;
  height: 32px;
  border: 3px solid ${tokens.outline || '#e5e7eb'};
  border-top-color: ${tokens.primary || '#3b82f6'};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
export const EditableCell = styled.div `
  position: relative;
  min-height: 24px;

  ${({ $editing, $showEditIcon = false }) => !$editing &&
    $showEditIcon &&
    css `
      &:hover::after {
        content: '✏️';
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 12px;
        opacity: 0.5;
      }
    `}
`;
export const CellEditor = styled.input `
  width: 100%;
  padding: 4px 8px;
  font-size: inherit;
  border: 2px solid ${tokens.primary || '#3b82f6'};
  border-radius: 4px;
  background: white;

  &:focus {
    outline: none;
  }
`;
export const ColumnTogglePanel = styled.div `
  position: absolute;
  top: 100%;
  right: 0;
  width: 280px;
  max-height: 400px;
  overflow-y: auto;
  background: white;
  border: 1px solid ${tokens.outline || '#e5e7eb'};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: ${fadeIn} 0.15s ease;
`;
export const ColumnToggleHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${tokens.outline || '#e5e7eb'};

  span {
    font-weight: 600;
    font-size: 14px;
  }

  button {
    padding: 4px;
    border: none;
    background: none;
    cursor: pointer;
    color: ${tokens.onSurface ? `${tokens.onSurface}60` : '#6b7280'};

    &:hover {
      color: ${tokens.onSurface || '#1f2937'};
    }
  }
`;
export const ColumnToggleSearch = styled.div `
  padding: 8px 16px;
  border-bottom: 1px solid ${tokens.outline || '#e5e7eb'};

  input {
    width: 100%;
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
    border: 1px solid ${tokens.outline || '#d1d5db'};
    border-radius: 6px;

    &:focus {
      outline: none;
      border-color: ${tokens.primary || '#3b82f6'};
    }
  }
`;
export const ColumnToggleList = styled.div `
  padding: 8px 0;
  max-height: 300px;
  overflow-y: auto;
`;
export const ColumnToggleItem = styled.label `
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${tokens.surface || '#f9fafb'};
  }

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${tokens.primary || '#3b82f6'};
  }

  span {
    font-size: 13px;
    color: ${tokens.onSurface || '#374151'};
  }
`;
export const ResizeHandle = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  cursor: col-resize;
  background: transparent;

  &:hover {
    background: ${tokens.primary || '#3b82f6'};
  }
`;
