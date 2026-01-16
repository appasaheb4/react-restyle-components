/**
 * AG Grid Styled Components
 * Beautiful, responsive styled components for the AG Grid-like table
 */
import { styled, css, keyframes } from 'styled-components';
// ============================================================================
// Theme Definitions
// ============================================================================
const themes = {
    alpine: {
        backgroundColor: '#ffffff',
        headerBackgroundColor: '#f8f8f8',
        oddRowBackgroundColor: '#fcfcfc',
        borderColor: '#dde2eb',
        selectedRowBackgroundColor: '#b7e4ff',
        hoverRowBackgroundColor: '#ecf0f1',
        textColor: '#181d1f',
        headerTextColor: '#181d1f',
        accentColor: '#2196f3',
        cellPadding: '0 12px',
        headerPadding: '0 12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '13px',
        headerFontSize: '13px',
        headerFontWeight: '600',
        borderRadius: '0',
        cellBorderWidth: '1px',
    },
    'alpine-dark': {
        backgroundColor: '#181d1f',
        headerBackgroundColor: '#222628',
        oddRowBackgroundColor: '#1f2426',
        borderColor: '#3d4749',
        selectedRowBackgroundColor: '#005880',
        hoverRowBackgroundColor: '#2d3436',
        textColor: '#f0f0f0',
        headerTextColor: '#f0f0f0',
        accentColor: '#2196f3',
        cellPadding: '0 12px',
        headerPadding: '0 12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '13px',
        headerFontSize: '13px',
        headerFontWeight: '600',
        borderRadius: '0',
        cellBorderWidth: '1px',
    },
    balham: {
        backgroundColor: '#ffffff',
        headerBackgroundColor: '#f5f7f7',
        oddRowBackgroundColor: '#fcfdfd',
        borderColor: '#bdc3c7',
        selectedRowBackgroundColor: '#b7e4ff',
        hoverRowBackgroundColor: '#ecf0f1',
        textColor: '#000000',
        headerTextColor: '#000000',
        accentColor: '#0091ea',
        cellPadding: '0 4px',
        headerPadding: '0 4px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '12px',
        headerFontSize: '12px',
        headerFontWeight: '600',
        borderRadius: '0',
        cellBorderWidth: '1px',
    },
    'balham-dark': {
        backgroundColor: '#2d3436',
        headerBackgroundColor: '#1e272c',
        oddRowBackgroundColor: '#32393c',
        borderColor: '#424a4d',
        selectedRowBackgroundColor: '#005880',
        hoverRowBackgroundColor: '#3d4749',
        textColor: '#f0f0f0',
        headerTextColor: '#f0f0f0',
        accentColor: '#0091ea',
        cellPadding: '0 4px',
        headerPadding: '0 4px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '12px',
        headerFontSize: '12px',
        headerFontWeight: '600',
        borderRadius: '0',
        cellBorderWidth: '1px',
    },
    material: {
        backgroundColor: '#ffffff',
        headerBackgroundColor: '#fafafa',
        oddRowBackgroundColor: '#ffffff',
        borderColor: '#e0e0e0',
        selectedRowBackgroundColor: '#e3f2fd',
        hoverRowBackgroundColor: '#f5f5f5',
        textColor: 'rgba(0, 0, 0, 0.87)',
        headerTextColor: 'rgba(0, 0, 0, 0.54)',
        accentColor: '#3f51b5',
        cellPadding: '0 24px 0 24px',
        headerPadding: '0 24px 0 24px',
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
        fontSize: '14px',
        headerFontSize: '12px',
        headerFontWeight: '500',
        borderRadius: '0',
        cellBorderWidth: '1px',
    },
    quartz: {
        backgroundColor: '#ffffff',
        headerBackgroundColor: '#ffffff',
        oddRowBackgroundColor: '#fafafa',
        borderColor: '#e2e8f0',
        selectedRowBackgroundColor: '#dbeafe',
        hoverRowBackgroundColor: '#f1f5f9',
        textColor: '#1e293b',
        headerTextColor: '#475569',
        accentColor: '#3b82f6',
        cellPadding: '0 16px',
        headerPadding: '0 16px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        headerFontSize: '12px',
        headerFontWeight: '600',
        borderRadius: '8px',
        cellBorderWidth: '1px',
    },
    'quartz-dark': {
        backgroundColor: '#0f172a',
        headerBackgroundColor: '#1e293b',
        oddRowBackgroundColor: '#1e293b',
        borderColor: '#334155',
        selectedRowBackgroundColor: '#1e3a5f',
        hoverRowBackgroundColor: '#334155',
        textColor: '#e2e8f0',
        headerTextColor: '#94a3b8',
        accentColor: '#3b82f6',
        cellPadding: '0 16px',
        headerPadding: '0 16px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        headerFontSize: '12px',
        headerFontWeight: '600',
        borderRadius: '8px',
        cellBorderWidth: '1px',
    },
};
export const getTheme = (variant, custom) => ({
    ...themes[variant],
    ...custom,
});
// ============================================================================
// Animations
// ============================================================================
const fadeIn = keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`;
const slideInRight = keyframes `
  from { transform: translateX(10px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;
const pulse = keyframes `
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;
const shimmer = keyframes `
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
const spin = keyframes `
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const rowEnter = keyframes `
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const cellFlash = keyframes `
  0% { background-color: rgba(76, 175, 80, 0.4); }
  100% { background-color: transparent; }
`;
// ============================================================================
// Grid Container
// ============================================================================
export const GridRoot = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ $theme }) => $theme.backgroundColor};
  font-family: ${({ $theme }) => $theme.fontFamily};
  font-size: ${({ $theme }) => $theme.fontSize};
  color: ${({ $theme }) => $theme.textColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: ${({ $theme }) => $theme.borderRadius};
  overflow: hidden;
  position: relative;

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Responsive styles */
  ${({ $responsive }) => $responsive &&
    css `
      @media (max-width: 768px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
      }
    `}
`;
export const GridWrapper = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;
// ============================================================================
// Toolbar / Header Area
// ============================================================================
export const GridToolbar = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;
export const ToolbarGroup = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
export const ToolbarButton = styled.button `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  background: ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.backgroundColor)};
  color: ${({ $theme, $active }) => ($active ? '#ffffff' : $theme.textColor)};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${({ $variant, $theme }) => $variant === 'primary' &&
    css `
      background: ${$theme.accentColor};
      border-color: ${$theme.accentColor};
      color: #ffffff;

      &:hover {
        filter: brightness(1.1);
      }
    `}

  ${({ $variant }) => $variant === 'danger' &&
    css `
      background: #ef4444;
      border-color: #ef4444;
      color: #ffffff;

      &:hover {
        background: #dc2626;
        border-color: #dc2626;
      }
    `}

  &:hover:not(:disabled) {
    background: ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.hoverRowBackgroundColor)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
export const QuickFilter = styled.div `
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 220px;
    padding: 6px 12px 6px 32px;
    font-size: 13px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 4px;
    background: ${({ $theme }) => $theme.backgroundColor};
    color: ${({ $theme }) => $theme.textColor};
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;

    &::placeholder {
      color: ${({ $theme }) => $theme.headerTextColor};
      opacity: 0.6;
    }

    &:focus {
      border-color: ${({ $theme }) => $theme.accentColor};
      box-shadow: 0 0 0 3px ${({ $theme }) => $theme.accentColor}20;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  svg {
    position: absolute;
    left: 10px;
    width: 14px;
    height: 14px;
    color: ${({ $theme }) => $theme.headerTextColor};
    opacity: 0.6;
  }
`;
// ============================================================================
// Table Container
// ============================================================================
export const TableContainer = styled.div `
  flex: 1;
  overflow: auto;
  position: relative;
  min-height: 0;

  ${({ $maxHeight }) => $maxHeight &&
    css `
      max-height: ${typeof $maxHeight === 'number' ? `${$maxHeight}px` : $maxHeight};
    `}
`;
export const StyledTable = styled.table `
  width: 100%;
  border-collapse: collapse;
  table-layout: ${({ $fixedLayout }) => ($fixedLayout ? 'fixed' : 'auto')};
  color: ${({ $theme }) => $theme.textColor};
`;
// ============================================================================
// Header
// ============================================================================
export const TableHead = styled.thead `
  ${({ $sticky, $theme }) => $sticky &&
    css `
      position: sticky;
      top: 0;
      z-index: 10;
      background: ${$theme.headerBackgroundColor};
    `}
`;
export const HeaderRow = styled.tr `
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  height: ${({ $height }) => ($height ? `${$height}px` : '42px')};
`;
export const HeaderCell = styled.th `
  padding: ${({ $theme }) => $theme.headerPadding};
  text-align: ${({ $align }) => $align || 'left'};
  font-size: ${({ $theme }) => $theme.headerFontSize};
  font-weight: ${({ $theme }) => $theme.headerFontWeight};
  color: ${({ $theme }) => $theme.headerTextColor};
  border-bottom: 2px solid ${({ $theme }) => $theme.borderColor};
  border-right: 1px solid ${({ $theme }) => $theme.borderColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  user-select: none;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ $width }) => $width && css `width: ${$width}px;`}
  ${({ $minWidth }) => $minWidth && css `min-width: ${$minWidth}px;`}
  ${({ $maxWidth }) => $maxWidth && css `max-width: ${$maxWidth}px;`}

  ${({ $sortable, $theme }) => $sortable &&
    css `
      cursor: pointer;

      &:hover {
        background: ${$theme.hoverRowBackgroundColor};
      }
    `}

  ${({ $sorted, $theme }) => $sorted &&
    css `
      background: ${$theme.selectedRowBackgroundColor}40;
    `}

  ${({ $pinned, $theme }) => $pinned &&
    css `
      position: sticky;
      ${$pinned === 'left' ? 'left: 0;' : 'right: 0;'}
      z-index: 11;
      background: ${$theme.headerBackgroundColor};
      box-shadow: ${$pinned === 'left' ? '2px 0 4px rgba(0,0,0,0.1)' : '-2px 0 4px rgba(0,0,0,0.1)'};
    `}

  &:last-child {
    border-right: none;
  }
`;
export const HeaderCellContent = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
`;
export const HeaderText = styled.span `
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SortIndicator = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity 0.15s ease, transform 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({ $direction }) => ($direction === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
export const FilterIndicator = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  color: ${({ $active, $theme }) => ($active ? $theme.accentColor : $theme.headerTextColor)};
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;
export const ResizeHandle = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  cursor: col-resize;
  z-index: 1;
  transition: background-color 0.15s ease;

  ${({ $resizing, $theme }) => $resizing &&
    css `
      background: ${$theme.accentColor};
    `}

  &:hover {
    background: ${({ $theme }) => $theme.accentColor}60;
  }

  &::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 25%;
    height: 50%;
    width: 2px;
    background: ${({ $theme }) => $theme.borderColor};
    border-radius: 1px;
  }
`;
// ============================================================================
// Column Group Header
// ============================================================================
export const GroupHeaderRow = styled.tr `
  background: ${({ $theme }) => $theme.headerBackgroundColor};
`;
export const GroupHeaderCell = styled.th `
  padding: ${({ $theme }) => $theme.headerPadding};
  text-align: center;
  font-size: ${({ $theme }) => $theme.headerFontSize};
  font-weight: ${({ $theme }) => $theme.headerFontWeight};
  color: ${({ $theme }) => $theme.headerTextColor};
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  border-right: 1px solid ${({ $theme }) => $theme.borderColor};
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:last-child {
    border-right: none;
  }
`;
// ============================================================================
// Floating Filter Row
// ============================================================================
export const FloatingFilterRow = styled.tr `
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  height: ${({ $height }) => ($height ? `${$height}px` : '32px')};
`;
export const FloatingFilterCell = styled.td `
  padding: 4px 8px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  border-right: 1px solid ${({ $theme }) => $theme.borderColor};
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }

  input,
  select {
    width: 100%;
    padding: 4px 8px;
    font-size: 12px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 3px;
    background: ${({ $theme }) => $theme.backgroundColor};
    color: ${({ $theme }) => $theme.textColor};
    outline: none;

    &:focus {
      border-color: ${({ $theme }) => $theme.accentColor};
    }
  }
`;
// ============================================================================
// Body
// ============================================================================
export const TableBody = styled.tbody `
  color: ${({ $theme }) => $theme.textColor};
`;
export const TableRow = styled.tr `
  height: ${({ $height }) => ($height ? `${$height}px` : '42px')};
  color: ${({ $theme }) => $theme.textColor};
  background: ${({ $theme, $selected, $highlighted, $striped, $even, $group }) => {
    if ($selected)
        return $theme.selectedRowBackgroundColor;
    if ($highlighted)
        return `${$theme.accentColor}20`;
    if ($group)
        return $theme.headerBackgroundColor;
    if ($striped && $even)
        return $theme.oddRowBackgroundColor;
    return $theme.backgroundColor;
}};
  transition: background-color 0.15s ease;

  ${({ $animate }) => $animate &&
    css `
      animation: ${rowEnter} 0.2s ease;
    `}

  ${({ $dragging }) => $dragging &&
    css `
      opacity: 0.5;
    `}

  ${({ $dragOver, $theme }) => $dragOver &&
    css `
      background: ${$theme.selectedRowBackgroundColor}60;
      box-shadow: inset 0 -2px 0 ${$theme.accentColor};
    `}

  &:hover {
    background: ${({ $theme, $selected }) => $selected ? $theme.selectedRowBackgroundColor : $theme.hoverRowBackgroundColor};
  }

  ${({ $group }) => $group &&
    css `
      cursor: pointer;
      font-weight: 600;
    `}
`;
export const TableCell = styled.td `
  padding: ${({ $theme }) => $theme.cellPadding};
  text-align: ${({ $align }) => $align || 'left'};
  border-bottom: ${({ $theme }) => $theme.cellBorderWidth} solid ${({ $theme }) => $theme.borderColor};
  border-right: ${({ $theme }) => $theme.cellBorderWidth} solid ${({ $theme }) => $theme.borderColor};
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ $theme }) => $theme.textColor};

  ${({ $width }) => $width && css `width: ${$width}px;`}

  ${({ $pinned, $theme }) => $pinned &&
    css `
      position: sticky;
      ${$pinned === 'left' ? 'left: 0;' : 'right: 0;'}
      z-index: 5;
      background: inherit;
      box-shadow: ${$pinned === 'left' ? '2px 0 4px rgba(0,0,0,0.1)' : '-2px 0 4px rgba(0,0,0,0.1)'};
    `}

  ${({ $editing, $theme }) => $editing &&
    css `
      padding: 0;
      background: ${$theme.backgroundColor};
      box-shadow: inset 0 0 0 2px ${$theme.accentColor};
    `}

  ${({ $flashing }) => $flashing &&
    css `
      animation: ${cellFlash} 0.5s ease;
    `}

  &:last-child {
    border-right: none;
  }
`;
export const CellContent = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 20px;
  color: inherit;

  ${({ $wrapText }) => $wrapText &&
    css `
      white-space: normal;
      word-break: break-word;
    `}
`;
// ============================================================================
// Checkbox
// ============================================================================
export const Checkbox = styled.input `
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
  accent-color: ${({ $theme }) => $theme.accentColor};
  flex-shrink: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const CheckboxCell = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
// ============================================================================
// Expand / Group
// ============================================================================
export const ExpandButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-left: ${({ $level }) => ($level ? `${$level * 16}px` : '0')};
  margin-right: 8px;
  border: none;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({ $expanded }) => ($expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`;
export const GroupCell = styled.div `
  display: flex;
  align-items: center;
  padding-left: ${({ $level }) => ($level ? `${$level * 20}px` : '0')};
`;
// ============================================================================
// Row Drag Handle
// ============================================================================
export const DragHandle = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: grab;
  opacity: 0.4;
  transition: opacity 0.15s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }

  ${({ $dragging }) => $dragging &&
    css `
      cursor: grabbing;
      opacity: 1;
    `}

  svg {
    width: 14px;
    height: 14px;
  }
`;
// ============================================================================
// Cell Editor
// ============================================================================
export const CellEditor = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  input,
  textarea,
  select {
    width: 100%;
    height: 100%;
    padding: 8px 12px;
    font-size: inherit;
    font-family: inherit;
    border: none;
    background: ${({ $theme }) => $theme.backgroundColor};
    color: ${({ $theme }) => $theme.textColor};
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;
// ============================================================================
// Footer
// ============================================================================
export const TableFooter = styled.tfoot `
  background: ${({ $theme }) => $theme.headerBackgroundColor};
`;
export const FooterRow = styled.tr `
  height: 42px;
`;
export const FooterCell = styled.td `
  padding: ${({ $theme }) => $theme.cellPadding};
  text-align: ${({ $align }) => $align || 'left'};
  font-weight: 600;
  border-top: 2px solid ${({ $theme }) => $theme.borderColor};
  color: ${({ $theme }) => $theme.headerTextColor};
`;
// ============================================================================
// Pagination
// ============================================================================
export const PaginationBar = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  border-top: 1px solid ${({ $theme }) => $theme.borderColor};
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;
export const PaginationInfo = styled.div `
  font-size: 13px;
  color: ${({ $theme }) => $theme.headerTextColor};
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
  font-weight: 500;
  border: 1px solid ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.borderColor)};
  border-radius: 4px;
  background: ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.backgroundColor)};
  color: ${({ $theme, $active }) => ($active ? '#ffffff' : $theme.textColor)};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.hoverRowBackgroundColor)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
export const PageSizeSelect = styled.select `
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 4px;
  background: ${({ $theme }) => $theme.backgroundColor};
  color: ${({ $theme }) => $theme.textColor};
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${({ $theme }) => $theme.accentColor};
  }
`;
// ============================================================================
// Status Bar
// ============================================================================
export const StatusBar = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  border-top: 1px solid ${({ $theme }) => $theme.borderColor};
  font-size: 12px;
  color: ${({ $theme }) => $theme.headerTextColor};
  gap: 16px;
`;
export const StatusItem = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;

  strong {
    color: inherit;
  }
`;
// ============================================================================
// Side Bar / Tool Panels
// ============================================================================
export const SideBar = styled.div `
  width: ${({ $width }) => ($width ? `${$width}px` : '250px')};
  min-width: 200px;
  max-width: 400px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border-${({ $position }) => ($position === 'left' ? 'right' : 'left')}: 1px solid ${({ $theme }) => $theme.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const SideBarTabs = styled.div `
  display: flex;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
`;
export const SideBarTab = styled.button `
  flex: 1;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  background: ${({ $theme, $active }) => ($active ? $theme.backgroundColor : $theme.headerBackgroundColor)};
  color: ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.headerTextColor)};
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid ${({ $theme, $active }) => ($active ? $theme.accentColor : 'transparent')};

  &:hover {
    background: ${({ $theme }) => $theme.backgroundColor};
  }
`;
export const SideBarContent = styled.div `
  flex: 1;
  overflow: auto;
  padding: 12px;
`;
// ============================================================================
// Overlays
// ============================================================================
export const Overlay = styled.div `
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $theme }) => $theme.backgroundColor}e6;
  z-index: 100;
  animation: ${fadeIn} 0.2s ease;
`;
export const LoadingOverlay = styled(Overlay) `
  flex-direction: column;
  gap: 16px;
`;
export const Spinner = styled.div `
  width: ${({ $size }) => ($size ? `${$size}px` : '40px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '40px')};
  border: 3px solid ${({ $theme }) => $theme.borderColor};
  border-top-color: ${({ $theme }) => $theme.accentColor};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
export const NoRowsOverlay = styled(Overlay) `
  flex-direction: column;
  gap: 12px;
  color: ${({ $theme }) => $theme.headerTextColor};

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }
`;
// ============================================================================
// Context Menu
// ============================================================================
export const ContextMenu = styled.div `
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  min-width: 180px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  animation: ${slideInRight} 0.15s ease;
`;
export const ContextMenuItem = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  font-size: 13px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  color: ${({ $danger, $theme }) => ($danger ? '#ef4444' : $theme.textColor)};
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({ $disabled, $theme }) => ($disabled ? 'transparent' : $theme.hoverRowBackgroundColor)};
  }

  svg {
    width: 16px;
    height: 16px;
    opacity: 0.7;
  }

  span.shortcut {
    margin-left: auto;
    font-size: 11px;
    opacity: 0.5;
  }
`;
export const ContextMenuDivider = styled.div `
  height: 1px;
  background: ${({ $theme }) => $theme.borderColor};
  margin: 4px 0;
`;
// ============================================================================
// Column Menu
// ============================================================================
export const ColumnMenu = styled.div `
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 200px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  animation: ${fadeIn} 0.15s ease;
`;
// ============================================================================
// Mobile Card View
// ============================================================================
export const MobileCardContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;
export const MobileCard = styled.div `
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme, $selected }) => ($selected ? $theme.accentColor : $theme.borderColor)};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease;

  ${({ $selected, $theme }) => $selected &&
    css `
      background: ${$theme.selectedRowBackgroundColor};
    `}
`;
export const MobileCardHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
`;
export const MobileCardRow = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor}50;
  }
`;
export const MobileCardLabel = styled.span `
  color: ${({ $theme }) => $theme.headerTextColor};
  font-weight: 500;
`;
export const MobileCardValue = styled.span `
  color: ${({ $theme }) => $theme.textColor};
  text-align: right;
`;
// ============================================================================
// Skeleton Loading
// ============================================================================
export const SkeletonRow = styled.tr `
  height: 42px;
`;
export const SkeletonCell = styled.td `
  padding: 8px 12px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  border-right: 1px solid ${({ $theme }) => $theme.borderColor};

  &:last-child {
    border-right: none;
  }
`;
export const SkeletonBlock = styled.div `
  height: 16px;
  width: ${({ $width }) => $width || '80%'};
  background: linear-gradient(
    90deg,
    ${({ $theme }) => $theme.borderColor}40 25%,
    ${({ $theme }) => $theme.borderColor}80 50%,
    ${({ $theme }) => $theme.borderColor}40 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
`;
// ============================================================================
// Tooltip
// ============================================================================
export const TooltipContainer = styled.div `
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  max-width: 300px;
  padding: 8px 12px;
  font-size: 12px;
  background: ${({ $theme }) => ($theme.textColor.includes('f0') ? '#333' : '#fff')};
  color: ${({ $theme }) => ($theme.textColor.includes('f0') ? '#fff' : '#333')};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  pointer-events: none;
  animation: ${fadeIn} 0.1s ease;
`;
// ============================================================================
// Drag Ghost
// ============================================================================
export const DragGhost = styled.div `
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  padding: 8px 16px;
  background: ${({ $theme }) => $theme.accentColor};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  opacity: ${({ $visible }) => ($visible ? 0.9 : 0)};
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease;
`;
// ============================================================================
// Selection Info Bar
// ============================================================================
export const SelectionBar = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({ $theme }) => $theme.accentColor};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-100%')});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;
export const SelectionActions = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
`;
// ============================================================================
// Side Panel (Right Panel with Columns & Filters tabs)
// ============================================================================
export const SidePanel = styled.div `
  width: ${({ $open, $width }) => ($open ? ($width ? `${$width}px` : '280px') : '40px')};
  min-width: ${({ $open }) => ($open ? '200px' : '40px')};
  max-width: ${({ $open }) => ($open ? '400px' : '40px')};
  background: ${({ $theme }) => $theme.backgroundColor};
  border-left: 1px solid ${({ $theme }) => $theme.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.2s ease;
  flex-shrink: 0;
`;
export const SidePanelTabs = styled.div `
  display: flex;
  flex-direction: ${({ $collapsed }) => ($collapsed ? 'column' : 'row')};
  border-bottom: ${({ $collapsed }) => ($collapsed ? 'none' : '1px solid')};
  border-color: ${({ $theme }) => $theme.borderColor};
  background: ${({ $theme }) => $theme.headerBackgroundColor};
`;
export const SidePanelTab = styled.button `
  flex: ${({ $collapsed }) => ($collapsed ? 'none' : '1')};
  padding: ${({ $collapsed }) => ($collapsed ? '12px 10px' : '10px 12px')};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  background: ${({ $theme, $active }) => ($active ? $theme.backgroundColor : 'transparent')};
  color: ${({ $theme, $active }) => ($active ? $theme.accentColor : $theme.headerTextColor)};
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid ${({ $theme, $active }) => ($active ? $theme.accentColor : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
    color: ${({ $theme }) => $theme.accentColor};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
export const SidePanelContent = styled.div `
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const SidePanelSearch = styled.div `
  padding: 10px 12px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};

  input {
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 4px;
    background: ${({ $theme }) => $theme.backgroundColor};
    color: ${({ $theme }) => $theme.textColor};
    outline: none;

    &::placeholder {
      color: ${({ $theme }) => $theme.headerTextColor};
      opacity: 0.6;
    }

    &:focus {
      border-color: ${({ $theme }) => $theme.accentColor};
    }
  }
`;
export const SidePanelSection = styled.div `
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
`;
export const SidePanelSectionHeader = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ $theme }) => $theme.headerTextColor};
  background: ${({ $theme }) => $theme.headerBackgroundColor};
  cursor: ${({ $collapsible }) => ($collapsible ? 'pointer' : 'default')};
  user-select: none;

  &:hover {
    background: ${({ $collapsible, $theme }) => ($collapsible ? $theme.hoverRowBackgroundColor : $theme.headerBackgroundColor)};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
`;
export const SidePanelColumnItem = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  padding-left: ${({ $indent }) => ($indent ? `${12 + $indent * 16}px` : '12px')};
  font-size: 13px;
  color: ${({ $theme }) => $theme.textColor};
  cursor: pointer;
  user-select: none;
  transition: background-color 0.1s ease;
  border-left: 2px solid transparent;

  ${({ $selected, $theme }) => $selected &&
    css `
      background: ${$theme.selectedRowBackgroundColor}40;
      border-left-color: ${$theme.accentColor};
    `}

  ${({ $dragging, $theme }) => $dragging &&
    css `
      opacity: 0.5;
      background: ${$theme.accentColor}20;
    `}

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }
`;
export const SidePanelDragHandle = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  cursor: grab;
  opacity: 0.4;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }

  &:active {
    cursor: grabbing;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;
export const SidePanelGroupLabel = styled.span `
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
// ============================================================================
// Row Groups Drop Zone
// ============================================================================
export const RowGroupsZone = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  min-height: 36px;
  background: ${({ $theme, $dragOver }) => ($dragOver ? `${$theme.accentColor}15` : $theme.headerBackgroundColor)};
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  border: ${({ $dragOver, $theme }) => ($dragOver ? `2px dashed ${$theme.accentColor}` : '1px solid transparent')};
  transition: all 0.15s ease;
  flex-wrap: wrap;

  ${({ $hasItems }) => !$hasItems &&
    css `
      justify-content: center;
    `}
`;
export const RowGroupsLabel = styled.span `
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${({ $theme }) => $theme.headerTextColor};
  white-space: nowrap;

  svg {
    width: 14px;
    height: 14px;
    opacity: 0.6;
  }
`;
export const RowGroupChip = styled.div `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ $theme }) => $theme.accentColor}15;
  color: ${({ $theme }) => $theme.accentColor};
  border-radius: 16px;
  cursor: default;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 0.6;
    border-radius: 50%;
    transition: all 0.1s ease;

    &:hover {
      opacity: 1;
      background: ${({ $theme }) => $theme.accentColor}30;
    }

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;
// ============================================================================
// Values/Aggregation Panel
// ============================================================================
export const ValuesPanel = styled.div `
  min-height: 60px;
`;
export const ValueItem = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: ${({ $theme }) => $theme.textColor};
  cursor: pointer;

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }
`;
export const ValueItemLabel = styled.span `
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  overflow: hidden;

  svg {
    width: 12px;
    height: 12px;
    opacity: 0.5;
  }
`;
export const ValueItemRemove = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.5;
  border-radius: 50%;

  &:hover {
    opacity: 1;
    background: ${({ $theme }) => $theme.borderColor};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;
// ============================================================================
// Pivot Mode Toggle
// ============================================================================
export const PivotModeToggle = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
`;
export const PivotModeLabel = styled.span `
  font-size: 12px;
  font-weight: 500;
  color: ${({ $theme }) => $theme.textColor};
`;
export const ToggleSwitch = styled.label `
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    inset: 0;
    background: ${({ $theme }) => $theme.borderColor};
    border-radius: 20px;
    transition: all 0.2s ease;

    &::before {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      left: 3px;
      bottom: 3px;
      background: white;
      border-radius: 50%;
      transition: transform 0.2s ease;
    }
  }

  input:checked + span {
    background: ${({ $theme }) => $theme.accentColor};
  }

  input:checked + span::before {
    transform: translateX(16px);
  }
`;
// ============================================================================
// Column Header Menu (Three Dot Menu)
// ============================================================================
export const HeaderMenuButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: ${({ $active, $theme }) => ($active ? $theme.hoverRowBackgroundColor : 'transparent')};
  border-radius: 3px;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }

  svg {
    width: 14px;
    height: 14px;
    color: ${({ $theme }) => $theme.headerTextColor};
  }
`;
export const ColumnMenuPopup = styled.div `
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  min-width: 200px;
  max-width: 280px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  animation: ${fadeIn} 0.15s ease;
`;
export const ColumnMenuSection = styled.div `
  padding: 4px 0;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`;
export const ColumnMenuItem = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-size: 13px;
  color: ${({ $theme, $disabled }) => ($disabled ? $theme.headerTextColor : $theme.textColor)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({ $disabled, $theme }) => ($disabled ? 'transparent' : $theme.hoverRowBackgroundColor)};
  }

  svg {
    width: 16px;
    height: 16px;
    opacity: 0.6;
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }

  ${({ $hasSubmenu }) => $hasSubmenu &&
    css `
      &::after {
        content: '›';
        margin-left: auto;
        font-size: 16px;
        opacity: 0.5;
      }
    `}
`;
export const ColumnMenuSubmenu = styled.div `
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 150px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
// ============================================================================
// Set Filter (Filter by unique values)
// ============================================================================
export const SetFilterContainer = styled.div `
  min-width: 200px;
  max-width: 300px;
  max-height: 400px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
export const SetFilterHeader = styled.div `
  padding: 8px 12px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
  font-size: 12px;
  font-weight: 600;
  color: ${({ $theme }) => $theme.headerTextColor};
  background: ${({ $theme }) => $theme.headerBackgroundColor};
`;
export const SetFilterSearch = styled.div `
  padding: 8px 10px;
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};

  input {
    width: 100%;
    padding: 6px 10px;
    font-size: 12px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 4px;
    background: ${({ $theme }) => $theme.backgroundColor};
    color: ${({ $theme }) => $theme.textColor};
    outline: none;

    &:focus {
      border-color: ${({ $theme }) => $theme.accentColor};
    }

    &::placeholder {
      color: ${({ $theme }) => $theme.headerTextColor};
      opacity: 0.6;
    }
  }
`;
export const SetFilterList = styled.div `
  flex: 1;
  overflow-y: auto;
  max-height: 280px;
`;
export const SetFilterItem = styled.label `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: ${({ $theme }) => $theme.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;
  border-bottom: ${({ $selectAll, $theme }) => ($selectAll ? `1px solid ${$theme.borderColor}` : 'none')};
  font-weight: ${({ $selectAll }) => ($selectAll ? '500' : 'normal')};

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }

  input {
    margin: 0;
    accent-color: ${({ $theme }) => $theme.accentColor};
  }
`;
export const SetFilterActions = styled.div `
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-top: 1px solid ${({ $theme }) => $theme.borderColor};
  background: ${({ $theme }) => $theme.headerBackgroundColor};
`;
export const SetFilterButton = styled.button `
  flex: 1;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid ${({ $theme, $primary }) => ($primary ? $theme.accentColor : $theme.borderColor)};
  border-radius: 4px;
  background: ${({ $theme, $primary }) => ($primary ? $theme.accentColor : $theme.backgroundColor)};
  color: ${({ $primary, $theme }) => ($primary ? '#ffffff' : $theme.textColor)};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    filter: brightness(0.95);
  }
`;
// ============================================================================
// Filter Panel in Side Bar
// ============================================================================
export const FilterPanelColumn = styled.div `
  border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
`;
export const FilterPanelHeader = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ $theme, $hasFilter }) => ($hasFilter ? $theme.accentColor : $theme.textColor)};
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${({ $expanded }) => ($expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
    opacity: 0.5;
  }
`;
export const FilterPanelContent = styled.div `
  display: ${({ $expanded }) => ($expanded ? 'block' : 'none')};
  padding: 8px 12px;
  background: ${({ $theme }) => $theme.headerBackgroundColor}50;
`;
// ============================================================================
// Grid Container with Side Panel Layout
// ============================================================================
export const GridLayout = styled.div `
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const GridMainArea = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;
// ============================================================================
// Column Visibility Dropdown
// ============================================================================
export const ColumnVisibilityDropdown = styled.div `
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 220px;
  max-height: 400px;
  background: ${({ $theme }) => $theme.backgroundColor};
  border: 1px solid ${({ $theme }) => $theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.15s ease;
`;
export const ColumnVisibilityList = styled.div `
  flex: 1;
  overflow-y: auto;
`;
export const ColumnVisibilityItem = styled.label `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  color: ${({ $theme }) => $theme.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({ $theme }) => $theme.hoverRowBackgroundColor};
  }

  input {
    margin: 0;
    accent-color: ${({ $theme }) => $theme.accentColor};
  }
`;
// ============================================================================
// Export all themes
// ============================================================================
export { themes };
