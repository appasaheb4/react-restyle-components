"use strict";import{styled as t,css as r,keyframes as n}from"styled-components";import{tokens as o}from"../../utils/designTokens";const f=n`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,a=n`
  from { opacity: 0; }
  to { opacity: 1; }
`,p=n`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,s=n`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,l=n`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`,d=n`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`,c=n`
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;export const TableRoot=t.div`
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  color: ${o.onSurface||"#1f2937"};
  background: white;
  border-radius: 8px;
  overflow: hidden;

  ${({$bordered:e})=>e&&r`
      border: 1px solid ${o.outline||"#e5e7eb"};
    `}
`,Toolbar=t.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border-bottom: 1px solid ${o.outline||"#e5e7eb"};

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,ToolbarGroup=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,SearchInput=t.div`
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
`,ToolbarButton=t.button`
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
  background: ${({$active:e})=>e?o.primary||"#3b82f6":"#6b7280"};
  border: none;

  &:hover:not(:disabled) {
    background: ${({$active:e})=>e?o.primary||"#2563eb":"#5b6570"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,SelectionIndicator=t.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${o.primary||"#3b82f6"};
  border-radius: 6px;
  border: 2px solid ${o.primary||"#3b82f6"};
  outline: none;
  color: white;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  animation: ${c} 0.3s ease-out;

  &:hover {
    border-color: white;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    border-color: white;
    box-shadow: 0 0 0 3px
      ${o.primary?`${o.primary}40`:"rgba(59, 130, 246, 0.4)"};
  }
`,SelectionCount=t.span`
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

  ${({$animate:e})=>e==="up"&&r`
      animation:
        ${l} 0.3s ease-out,
        ${s} 0.3s ease-out;
    `}

  ${({$animate:e})=>e==="down"&&r`
      animation:
        ${d} 0.3s ease-out,
        ${s} 0.3s ease-out;
    `}
`,SelectionIcon=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  svg {
    width: 16px;
    height: 16px;
  }
`,TableWrapper=t.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: ${({$stickyHeader:e})=>e?"auto":"visible"};
  ${({$maxHeight:e})=>e&&r`
      max-height: ${typeof e=="number"?`${e}px`:e};
    `}
`,StyledTable=t.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

  ${({$striped:e})=>e&&r`
      tbody tr:nth-child(even) {
        background: ${o.surface||"#f9fafb"};
        color: ${o.onSurface||"#1f2937"};
      }
    `}

  ${({$hover:e})=>e&&r`
      /* Hover effect - skip rows with custom selected style (data-custom-selected attribute) */
      tbody tr:not([data-custom-selected='true']):hover {
        background: #ececec !important;
        color: ${o.onSurface||"#1f2937"};
      }
    `}
`,TableHeader=t.thead`
  ${({$sticky:e})=>e&&r`
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`,HeaderRow=t.tr`
  background: #6b7280;
`,HeaderCell=t.th`
  padding: ${({$compact:e})=>e?"4px 6px":"6px 8px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  user-select: none;
  white-space: nowrap;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  /* Default styles - only applied when no custom class */
  ${({$customClass:e})=>!e&&r`
      position: relative;
      font-weight: 600;
      font-size: 11px;
      color: white;
      background: #6b7280;
      border-bottom: 1px solid ${o.outline||"#e5e7eb"};
    `}

  ${({$width:e})=>e&&r`
      width: ${typeof e=="number"?`${e}px`:e};
    `}

  ${({$minWidth:e})=>e&&r`
      min-width: ${typeof e=="number"?`${e}px`:e};
    `}

  ${({$pinned:e,$customClass:i})=>e&&!i&&r`
      position: sticky;
      ${e}: 0;
      z-index: 11;
    `}

  /* Add left border separator when custom class is used (e.g., sticky action column) */
  ${({$customClass:e})=>e&&r`
      border-left: 2px solid #d1d5db;
      border-bottom: 2px solid #d1d5db;
    `}
`,SortIcon=t.span`
  display: inline-flex;
  flex-direction: column;
  gap: 1px;
  opacity: ${({$active:e})=>e?1:.5};
  vertical-align: middle;

  svg {
    width: 8px;
    height: 8px;

    &:first-child {
      opacity: ${({$active:e,$direction:i})=>e&&i==="asc"?1:.4};
    }

    &:last-child {
      opacity: ${({$active:e,$direction:i})=>e&&i==="desc"?1:.4};
    }
  }
`,FilterRow=t.tr`
  background: #6b7280;
`,FilterCell=t.td`
  padding: ${({$compact:e})=>e?"2px 4px":"4px 6px"};
  vertical-align: middle;
  border-bottom: 1px solid ${o.outline||"#e5e7eb"};
`,FilterInput=t.input`
  width: 100%;
  height: 24px;
  padding: 0 8px;
  font-size: 11px;
  border: 1px solid ${o.outline||"#e2e8f0"};
  border-radius: 3px;
  background: white;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${o.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${o.primary||"#3b82f6"};
  }

  &::placeholder {
    color: ${o.onSurface?`${o.onSurface}40`:"#9ca3af"};
  }
`,FilterSelect=t.select`
  width: 100%;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${o.outline||"#d1d5db"};
  border-radius: 4px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${o.primary||"#3b82f6"};
  }
`,TableBody=t.tbody``,TableRow=t.tr`
  transition: background 0.15s ease;
  color: ${o.onSurface||"#1f2937"};
  background: white;

  /* Hover effect - only apply when not selected with custom style */
  ${({$hasCustomSelectedStyle:e})=>!e&&r`
      &:hover {
        background: #ececec !important;
      }
    `}

  /* Default selected styling - only when no custom style is provided */
  ${({$selected:e,$hasCustomSelectedStyle:i})=>e&&!i&&r`
      background: ${o.primary?`${o.primary}10`:"#fef3c7"} !important;
      color: ${o.onSurface||"#1f2937"};

      &:hover {
        background: ${o.primary?`${o.primary}15`:"#fde68a"} !important;
      }
    `}
  
  ${({$clickable:e,$disabled:i})=>e&&!i&&r`
      cursor: pointer;
    `}
  
  ${({$disabled:e})=>e&&r`
      opacity: 0.5;
      background: ${o.surface||"#e5e7eb"} !important;
      color: ${o.onSurface||"#1f2937"};
      cursor: not-allowed;

      &:hover {
        background: ${o.surface||"#e5e7eb"} !important;
      }
    `}
`,TableCellContent=t.div.attrs({className:"tc-table-cell-content"})`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: stretch;
  gap: 0;

  ${({$hasFormatter:e})=>!e&&r`
      display: block;
    `}

  > * {
    width: 100%;
    min-width: 0;
  }
`,TableCell=t.td`
  padding: ${({$padding:e,$compact:i})=>e||"2px"};
  text-align: ${({$align:e})=>e};
  border-bottom: 1px solid #d1d5db;
  border-right: 1px solid #9ca3af;
  vertical-align: middle;
  font-size: 12px;

  ${({$hasCustomClass:e})=>!e&&r`
      color: ${o.onSurface||"#1f2937"};
      background: transparent;
    `}

  ${({$pinned:e,$hasCustomClass:i})=>e&&!i&&r`
      position: sticky;
      ${e}: 0;
      background: white;
      z-index: 1;
    `}

  /* Add left border separator when custom class is used (e.g., sticky action column) */
  ${({$hasCustomClass:e})=>e&&r`
      border-left: 2px solid #d1d5db;
    `}

  /* Ensure formatter content displays properly */
  /* Use a dedicated wrapper to allow formatter content to stretch full width */
  > .tc-table-cell-content {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-width: 0;
    gap: 0;
  }

  > .tc-table-cell-content > * {
    width: 100%;
    min-width: 0;
  }

  /* Default inline layout for legacy direct children */
  > :not(.tc-table-cell-content) {
    display: inline-block;
    vertical-align: middle;
  }

  /* Preserve flex layouts - these take precedence */
  > [class*='flex'],
  > [style*='display: flex'],
  > [style*='display:flex'],
  > div[class*='flex'],
  > div[style*='display: flex'],
  > div[style*='display:flex'] {
    display: flex !important;
  }

  /* Preserve grid layouts */
  > [class*='grid'],
  > [style*='display: grid'],
  > [style*='display:grid'] {
    display: grid !important;
  }

  /* Preserve block layouts */
  > [class*='block'],
  > [style*='display: block'],
  > [style*='display:block'] {
    display: block !important;
  }

  /* Disabled state - prevent clicks and show not-allowed cursor */
  /* Only apply pointer-events: none if row is disabled AND column is NOT effectively editable */
  ${({$disabled:e,$isEditable:i})=>e&&!i&&r`
      cursor: not-allowed;
      pointer-events: none;
    `}

  /* If row is disabled but column is effectively editable, ensure proper width and interaction */
  ${({$disabled:e,$isEditable:i})=>e&&i&&r`
      cursor: default;
      pointer-events: auto !important;
      opacity: 1 !important;
      width: auto !important;
      min-width: 0 !important;
      max-width: none !important;
      box-sizing: border-box;
    `}
  
  /* Remove opacity for allowed columns when row is disabled and ensure proper width */
  ${({$disabled:e,$isInAllowedCells:i})=>e&&i&&r`
      opacity: 1 !important;
      pointer-events: auto !important;
      width: auto !important;
      min-width: 0 !important;
      max-width: none !important;
      box-sizing: border-box;
    `}
`,Checkbox=t.input.attrs({type:"checkbox"})`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${o.primary||"#3b82f6"};
`,ExpandButton=t.button`
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
    background: ${o.surface||"#f3f4f6"};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${o.onSurface?`${o.onSurface}70`:"#6b7280"};
    transition: transform 0.2s ease;
    transform: ${({$expanded:e})=>e?"rotate(90deg)":"rotate(0)"};
  }
`,ExpandedRow=t.tr`
  animation: ${a} 0.2s ease;
`,ExpandedCell=t.td`
  padding: 16px;
  background: ${o.surface||"#f9fafb"};
  border-bottom: 1px solid ${o.outline||"#e5e7eb"};
`,TableFooter=t.tfoot`
  background: ${o.surface||"#f3f4f6"};
`,FooterRow=t.tr``,FooterCell=t.td`
  padding: ${({$compact:e})=>e?"8px 12px":"12px 16px"};
  text-align: ${({$align:e})=>e};
  font-weight: 600;
  border-top: 2px solid ${o.outline||"#e5e7eb"};
`,PaginationWrapper=t.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: #6b7280;
  border-top: 1px solid ${o.outline||"#e5e7eb"};
  color: white;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,PaginationInfo=t.div`
  font-size: 13px;
  color: white;
`,PaginationControls=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,PageButton=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  font-size: 13px;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({$active:e})=>"white"};
  background: ${({$active:e})=>e?o.primary||"#3b82f6":"transparent"};
  border: 1px solid
    ${({$active:e})=>e?"transparent":"rgba(255,255,255,0.3)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({$active:e})=>e?o.primary||"#2563eb":"rgba(255,255,255,0.1)"};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,PageSizeSelect=t.select`
  height: 32px;
  padding: 0 24px 0 8px;
  font-size: 13px;
  color: #1f2937;
  background: white;
  border: 1px solid ${o.outline||"#d1d5db"};
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${o.primary||"#3b82f6"};
  }
`,QuickJumper=t.div`
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
      border-color: ${o.primary||"#3b82f6"};
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,EmptyState=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: ${o.onSurface?`${o.onSurface}60`:"#6b7280"};

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  span {
    font-size: 14px;
  }
`,LoadingOverlay=t.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 20;
`,LoadingSpinner=t.div`
  width: 32px;
  height: 32px;
  border: 3px solid ${o.outline||"#e5e7eb"};
  border-top-color: ${o.primary||"#3b82f6"};
  border-radius: 50%;
  animation: ${p} 0.8s linear infinite;
`,EditableCell=t.div`
  position: relative;
  min-height: 24px;

  ${({$editing:e,$showEditIcon:i=!1})=>!e&&i&&r`
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
`,CellEditor=t.input`
  width: 100%;
  padding: 4px 8px;
  font-size: inherit;
  border: 2px solid ${o.primary||"#3b82f6"};
  border-radius: 4px;
  background: white;

  &:focus {
    outline: none;
  }
`,ColumnTogglePanel=t.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 280px;
  max-height: 400px;
  overflow-y: auto;
  background: white;
  border: 1px solid ${o.outline||"#e5e7eb"};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: ${a} 0.15s ease;
`,ColumnToggleHeader=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${o.outline||"#e5e7eb"};

  span {
    font-weight: 600;
    font-size: 14px;
  }

  button {
    padding: 4px;
    border: none;
    background: none;
    cursor: pointer;
    color: ${o.onSurface?`${o.onSurface}60`:"#6b7280"};

    &:hover {
      color: ${o.onSurface||"#1f2937"};
    }
  }
`,ColumnToggleSearch=t.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${o.outline||"#e5e7eb"};

  input {
    width: 100%;
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
    border: 1px solid ${o.outline||"#d1d5db"};
    border-radius: 6px;

    &:focus {
      outline: none;
      border-color: ${o.primary||"#3b82f6"};
    }
  }
`,ColumnToggleList=t.div`
  padding: 8px 0;
  max-height: 300px;
  overflow-y: auto;
`,ColumnToggleItem=t.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  cursor: ${({$reorderable:e})=>e?"grab":"pointer"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  user-select: none;

  &:hover {
    background: ${o.surface||"#f3f4f6"};
  }

  /* Dragging state */
  ${({$isDragging:e})=>e&&r`
      opacity: 0.4;
      transform: scale(0.98);
      background: ${o.primary||"#3b82f6"}10;
      cursor: grabbing;
    `}

  /* Drag over state */
  ${({$isDragOver:e})=>e&&r`
      background: ${o.primary||"#3b82f6"}15;
      transform: translateY(2px);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 8px;
        right: 8px;
        height: 2px;
        background: ${o.primary||"#3b82f6"};
        border-radius: 1px;
        animation: ${a} 0.15s ease;
      }
    `}

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${o.primary||"#3b82f6"};
    flex-shrink: 0;
  }

  span {
    font-size: 13px;
    color: ${o.onSurface||"#374151"};
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,ColumnToggleDragHandle=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: auto;
  cursor: grab;
  color: ${o.onSurface?`${o.onSurface}40`:"#9ca3af"};
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${o.primary||"#3b82f6"};
    transform: scale(1.1);
  }

  &:active {
    cursor: grabbing;
    color: ${o.primary||"#3b82f6"};
  }

  ${({$isDragging:e})=>e&&r`
      color: ${o.primary||"#3b82f6"};
      animation: ${s} 0.6s ease-in-out infinite;
    `}

  /* Grip dots pattern */
  &::before {
    content: '⠿';
    font-size: 14px;
    letter-spacing: -2px;
  }
`,ColumnToggleListAnimated=t.div`
  padding: 8px 0;
  max-height: 300px;
  overflow-y: auto;

  /* Smooth reorder animation */
  & > * {
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,ResizeHandle=t.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  cursor: col-resize;
  background: transparent;

  &:hover {
    background: ${o.primary||"#3b82f6"};
  }
`;
