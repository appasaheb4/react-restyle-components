"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[4434],{"./src/core-components/src/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),designTokens=__webpack_require__("./src/core-components/src/utils/designTokens.ts");styled_components_browser_esm.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const fadeIn=styled_components_browser_esm.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,spin=styled_components_browser_esm.i7`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,pulse=styled_components_browser_esm.i7`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,countUp=styled_components_browser_esm.i7`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`,countDown=styled_components_browser_esm.i7`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`,slideIn=styled_components_browser_esm.i7`
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`,TableRoot=styled_components_browser_esm.I4.div`
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  color: ${designTokens.L.onSurface||"#1f2937"};
  background: white;
  border-radius: 8px;
  overflow: hidden;

  ${({$bordered})=>$bordered&&styled_components_browser_esm.AH`
      border: 1px solid ${designTokens.L.outline||"#e5e7eb"};
    `}
`,Toolbar=styled_components_browser_esm.I4.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border-bottom: 1px solid ${designTokens.L.outline||"#e5e7eb"};

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,ToolbarGroup=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,SearchInput=styled_components_browser_esm.I4.div`
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
`,ToolbarButton=styled_components_browser_esm.I4.button`
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
  background: ${({$active})=>$active?designTokens.L.primary||"#3b82f6":"#6b7280"};
  border: none;

  &:hover:not(:disabled) {
    background: ${({$active})=>$active?designTokens.L.primary||"#2563eb":"#5b6570"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,SelectionIndicator=styled_components_browser_esm.I4.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${designTokens.L.primary||"#3b82f6"};
  border-radius: 6px;
  border: 2px solid ${designTokens.L.primary||"#3b82f6"};
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
      ${designTokens.L.primary?`${designTokens.L.primary}40`:"rgba(59, 130, 246, 0.4)"};
  }
`,SelectionCount=styled_components_browser_esm.I4.span`
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

  ${({$animate})=>"up"===$animate&&styled_components_browser_esm.AH`
      animation:
        ${countUp} 0.3s ease-out,
        ${pulse} 0.3s ease-out;
    `}

  ${({$animate})=>"down"===$animate&&styled_components_browser_esm.AH`
      animation:
        ${countDown} 0.3s ease-out,
        ${pulse} 0.3s ease-out;
    `}
`,SelectionIcon=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  svg {
    width: 16px;
    height: 16px;
  }
`,TableWrapper=styled_components_browser_esm.I4.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: ${({$stickyHeader})=>$stickyHeader?"auto":"visible"};
  ${({$maxHeight})=>$maxHeight&&styled_components_browser_esm.AH`
      max-height: ${"number"==typeof $maxHeight?`${$maxHeight}px`:$maxHeight};
    `}
`,StyledTable=styled_components_browser_esm.I4.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

  ${({$striped})=>$striped&&styled_components_browser_esm.AH`
      tbody tr:nth-child(even) {
        background: ${designTokens.L.surface||"#f9fafb"};
        color: ${designTokens.L.onSurface||"#1f2937"};
      }
    `}

  ${({$hover})=>$hover&&styled_components_browser_esm.AH`
      /* Hover effect - skip rows with custom selected style (data-custom-selected attribute) */
      tbody tr:not([data-custom-selected='true']):hover {
        background: #ececec !important;
        color: ${designTokens.L.onSurface||"#1f2937"};
      }
    `}
`,TableHeader=styled_components_browser_esm.I4.thead`
  ${({$sticky})=>$sticky&&styled_components_browser_esm.AH`
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`,HeaderRow=styled_components_browser_esm.I4.tr`
  background: #6b7280;
`,HeaderCell=styled_components_browser_esm.I4.th`
  padding: ${({$compact})=>$compact?"4px 6px":"6px 8px"};
  text-align: ${({$align})=>$align};
  vertical-align: middle;
  user-select: none;
  white-space: nowrap;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  /* Default styles - only applied when no custom class */
  ${({$customClass})=>!$customClass&&styled_components_browser_esm.AH`
      position: relative;
      font-weight: 600;
      font-size: 11px;
      color: white;
      background: #6b7280;
      border-bottom: 1px solid ${designTokens.L.outline||"#e5e7eb"};
    `}

  ${({$width})=>$width&&styled_components_browser_esm.AH`
      width: ${"number"==typeof $width?`${$width}px`:$width};
    `}

  ${({$minWidth})=>$minWidth&&styled_components_browser_esm.AH`
      min-width: ${"number"==typeof $minWidth?`${$minWidth}px`:$minWidth};
    `}

  ${({$pinned,$customClass})=>$pinned&&!$customClass&&styled_components_browser_esm.AH`
      position: sticky;
      ${$pinned}: 0;
      z-index: 11;
    `}

  /* Add left border separator when custom class is used (e.g., sticky action column) */
  ${({$customClass})=>$customClass&&styled_components_browser_esm.AH`
      border-left: 2px solid #d1d5db;
      border-bottom: 2px solid #d1d5db;
    `}
`,SortIcon=styled_components_browser_esm.I4.span`
  display: inline-flex;
  flex-direction: column;
  gap: 1px;
  opacity: ${({$active})=>$active?1:.5};
  vertical-align: middle;

  svg {
    width: 8px;
    height: 8px;

    &:first-child {
      opacity: ${({$active,$direction})=>$active&&"asc"===$direction?1:.4};
    }

    &:last-child {
      opacity: ${({$active,$direction})=>$active&&"desc"===$direction?1:.4};
    }
  }
`,FilterRow=styled_components_browser_esm.I4.tr`
  background: #6b7280;
`,FilterCell=styled_components_browser_esm.I4.td`
  padding: ${({$compact})=>$compact?"2px 4px":"4px 6px"};
  vertical-align: middle;
  border-bottom: 1px solid ${designTokens.L.outline||"#e5e7eb"};
`,FilterInput=styled_components_browser_esm.I4.input`
  width: 100%;
  height: 24px;
  padding: 0 8px;
  font-size: 11px;
  border: 1px solid ${designTokens.L.outline||"#e2e8f0"};
  border-radius: 3px;
  background: white;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${designTokens.L.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${designTokens.L.primary||"#3b82f6"};
  }

  &::placeholder {
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}40`:"#9ca3af"};
  }
`,FilterSelect=styled_components_browser_esm.I4.select`
  width: 100%;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid ${designTokens.L.outline||"#d1d5db"};
  border-radius: 4px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${designTokens.L.primary||"#3b82f6"};
  }
`,TableBody=styled_components_browser_esm.I4.tbody``,TableRow=styled_components_browser_esm.I4.tr`
  transition: background 0.15s ease;
  color: ${designTokens.L.onSurface||"#1f2937"};
  background: white;

  /* Hover effect - only apply when not selected with custom style */
  ${({$hasCustomSelectedStyle})=>!$hasCustomSelectedStyle&&styled_components_browser_esm.AH`
      &:hover {
        background: #ececec !important;
      }
    `}

  /* Default selected styling - only when no custom style is provided */
  ${({$selected,$hasCustomSelectedStyle})=>$selected&&!$hasCustomSelectedStyle&&styled_components_browser_esm.AH`
      background: ${designTokens.L.primary?`${designTokens.L.primary}10`:"#fef3c7"} !important;
      color: ${designTokens.L.onSurface||"#1f2937"};

      &:hover {
        background: ${designTokens.L.primary?`${designTokens.L.primary}15`:"#fde68a"} !important;
      }
    `}
  
  ${({$clickable,$disabled})=>$clickable&&!$disabled&&styled_components_browser_esm.AH`
      cursor: pointer;
    `}
  
  ${({$disabled})=>$disabled&&styled_components_browser_esm.AH`
      opacity: 0.5;
      background: ${designTokens.L.surface||"#e5e7eb"} !important;
      color: ${designTokens.L.onSurface||"#1f2937"};
      cursor: not-allowed;

      &:hover {
        background: ${designTokens.L.surface||"#e5e7eb"} !important;
      }
    `}
`,TableCellContent=styled_components_browser_esm.I4.div.attrs({className:"tc-table-cell-content"})`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: stretch;
  gap: 0;

  ${({$hasFormatter})=>!$hasFormatter&&styled_components_browser_esm.AH`
      display: block;
    `}

  > * {
    width: 100%;
    min-width: 0;
  }
`,TableCell=styled_components_browser_esm.I4.td`
  padding: ${({$padding,$compact})=>$padding||"2px"};
  text-align: ${({$align})=>$align};
  border-bottom: 1px solid #d1d5db;
  border-right: 1px solid #9ca3af;
  vertical-align: middle;
  font-size: 12px;

  ${({$hasCustomClass})=>!$hasCustomClass&&styled_components_browser_esm.AH`
      color: ${designTokens.L.onSurface||"#1f2937"};
      background: transparent;
    `}

  ${({$pinned,$hasCustomClass})=>$pinned&&!$hasCustomClass&&styled_components_browser_esm.AH`
      position: sticky;
      ${$pinned}: 0;
      background: white;
      z-index: 1;
    `}

  /* Add left border separator when custom class is used (e.g., sticky action column) */
  ${({$hasCustomClass})=>$hasCustomClass&&styled_components_browser_esm.AH`
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
  ${({$disabled,$isEditable})=>$disabled&&!$isEditable&&styled_components_browser_esm.AH`
      cursor: not-allowed;
      pointer-events: none;
    `}

  /* If row is disabled but column is effectively editable, ensure proper width and interaction */
  ${({$disabled,$isEditable})=>$disabled&&$isEditable&&styled_components_browser_esm.AH`
      cursor: default;
      pointer-events: auto !important;
      opacity: 1 !important;
      width: auto !important;
      min-width: 0 !important;
      max-width: none !important;
      box-sizing: border-box;
    `}
  
  /* Remove opacity for allowed columns when row is disabled and ensure proper width */
  ${({$disabled,$isInAllowedCells})=>$disabled&&$isInAllowedCells&&styled_components_browser_esm.AH`
      opacity: 1 !important;
      pointer-events: auto !important;
      width: auto !important;
      min-width: 0 !important;
      max-width: none !important;
      box-sizing: border-box;
    `}
`,Checkbox=styled_components_browser_esm.I4.input.attrs({type:"checkbox"})`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${designTokens.L.primary||"#3b82f6"};
`,ExpandButton=styled_components_browser_esm.I4.button`
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
    background: ${designTokens.L.surface||"#f3f4f6"};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}70`:"#6b7280"};
    transition: transform 0.2s ease;
    transform: ${({$expanded})=>$expanded?"rotate(90deg)":"rotate(0)"};
  }
`,ExpandedRow=styled_components_browser_esm.I4.tr`
  animation: ${fadeIn} 0.2s ease;
`,ExpandedCell=styled_components_browser_esm.I4.td`
  padding: 16px;
  background: ${designTokens.L.surface||"#f9fafb"};
  border-bottom: 1px solid ${designTokens.L.outline||"#e5e7eb"};
`,TableFooter=styled_components_browser_esm.I4.tfoot`
  background: ${designTokens.L.surface||"#f3f4f6"};
`,FooterRow=styled_components_browser_esm.I4.tr``,FooterCell=styled_components_browser_esm.I4.td`
  padding: ${({$compact})=>$compact?"8px 12px":"12px 16px"};
  text-align: ${({$align})=>$align};
  font-weight: 600;
  border-top: 2px solid ${designTokens.L.outline||"#e5e7eb"};
`,PaginationWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: #6b7280;
  border-top: 1px solid ${designTokens.L.outline||"#e5e7eb"};
  color: white;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,PaginationInfo=styled_components_browser_esm.I4.div`
  font-size: 13px;
  color: white;
`,PaginationControls=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,PageButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  font-size: 13px;
  font-weight: ${({$active})=>$active?600:400};
  color: ${({$active})=>"white"};
  background: ${({$active})=>$active?designTokens.L.primary||"#3b82f6":"transparent"};
  border: 1px solid
    ${({$active})=>$active?"transparent":"rgba(255,255,255,0.3)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({$active})=>$active?designTokens.L.primary||"#2563eb":"rgba(255,255,255,0.1)"};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,PageSizeSelect=styled_components_browser_esm.I4.select`
  height: 32px;
  padding: 0 24px 0 8px;
  font-size: 13px;
  color: #1f2937;
  background: white;
  border: 1px solid ${designTokens.L.outline||"#d1d5db"};
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${designTokens.L.primary||"#3b82f6"};
  }
`,QuickJumper=styled_components_browser_esm.I4.div`
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
      border-color: ${designTokens.L.primary||"#3b82f6"};
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,EmptyState=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  span {
    font-size: 14px;
  }
`,LoadingOverlay=styled_components_browser_esm.I4.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 20;
`,LoadingSpinner=styled_components_browser_esm.I4.div`
  width: 32px;
  height: 32px;
  border: 3px solid ${designTokens.L.outline||"#e5e7eb"};
  border-top-color: ${designTokens.L.primary||"#3b82f6"};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`,EditableCell=styled_components_browser_esm.I4.div`
  position: relative;
  min-height: 24px;

  ${({$editing,$showEditIcon=!1})=>!$editing&&$showEditIcon&&styled_components_browser_esm.AH`
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
`,CellEditor=styled_components_browser_esm.I4.input`
  width: 100%;
  padding: 4px 8px;
  font-size: inherit;
  border: 2px solid ${designTokens.L.primary||"#3b82f6"};
  border-radius: 4px;
  background: white;

  &:focus {
    outline: none;
  }
`,ColumnTogglePanel=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 280px;
  max-height: 400px;
  overflow-y: auto;
  background: white;
  border: 1px solid ${designTokens.L.outline||"#e5e7eb"};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: ${fadeIn} 0.15s ease;
`,ColumnToggleHeader=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${designTokens.L.outline||"#e5e7eb"};

  span {
    font-weight: 600;
    font-size: 14px;
  }

  button {
    padding: 4px;
    border: none;
    background: none;
    cursor: pointer;
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};

    &:hover {
      color: ${designTokens.L.onSurface||"#1f2937"};
    }
  }
`,ColumnToggleSearch=styled_components_browser_esm.I4.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${designTokens.L.outline||"#e5e7eb"};

  input {
    width: 100%;
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
    border: 1px solid ${designTokens.L.outline||"#d1d5db"};
    border-radius: 6px;

    &:focus {
      outline: none;
      border-color: ${designTokens.L.primary||"#3b82f6"};
    }
  }
`,ColumnToggleList=styled_components_browser_esm.I4.div`
  padding: 8px 0;
  max-height: 300px;
  overflow-y: auto;
`,ColumnToggleItem=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  cursor: ${({$reorderable})=>$reorderable?"grab":"pointer"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  user-select: none;

  &:hover {
    background: ${designTokens.L.surface||"#f3f4f6"};
  }

  /* Dragging state */
  ${({$isDragging})=>$isDragging&&styled_components_browser_esm.AH`
      opacity: 0.4;
      transform: scale(0.98);
      background: ${designTokens.L.primary||"#3b82f6"}10;
      cursor: grabbing;
    `}

  /* Drag over state */
  ${({$isDragOver})=>$isDragOver&&styled_components_browser_esm.AH`
      background: ${designTokens.L.primary||"#3b82f6"}15;
      transform: translateY(2px);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 8px;
        right: 8px;
        height: 2px;
        background: ${designTokens.L.primary||"#3b82f6"};
        border-radius: 1px;
        animation: ${fadeIn} 0.15s ease;
      }
    `}

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${designTokens.L.primary||"#3b82f6"};
    flex-shrink: 0;
  }

  span {
    font-size: 13px;
    color: ${designTokens.L.onSurface||"#374151"};
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,ColumnToggleDragHandle=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: auto;
  cursor: grab;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}40`:"#9ca3af"};
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${designTokens.L.primary||"#3b82f6"};
    transform: scale(1.1);
  }

  &:active {
    cursor: grabbing;
    color: ${designTokens.L.primary||"#3b82f6"};
  }

  ${({$isDragging})=>$isDragging&&styled_components_browser_esm.AH`
      color: ${designTokens.L.primary||"#3b82f6"};
      animation: ${pulse} 0.6s ease-in-out infinite;
    `}

  /* Grip dots pattern */
  &::before {
    content: '⠿';
    font-size: 14px;
    letter-spacing: -2px;
  }
`,ColumnToggleListAnimated=styled_components_browser_esm.I4.div`
  padding: 8px 0;
  max-height: 300px;
  overflow-y: auto;

  /* Smooth reorder animation */
  & > * {
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,ResizeHandle=styled_components_browser_esm.I4.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  cursor: col-resize;
  background: transparent;

  &:hover {
    background: ${designTokens.L.primary||"#3b82f6"};
  }
`;try{TableRoot.displayName="TableRoot",TableRoot.__docgenInfo={description:"",displayName:"TableRoot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableRoot"]={docgenInfo:TableRoot.__docgenInfo,name:"TableRoot",path:"src/core-components/src/components/Table/elements.tsx#TableRoot"})}catch(__react_docgen_typescript_loader_error){}try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:"",displayName:"Toolbar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#Toolbar"]={docgenInfo:Toolbar.__docgenInfo,name:"Toolbar",path:"src/core-components/src/components/Table/elements.tsx#Toolbar"})}catch(__react_docgen_typescript_loader_error){}try{ToolbarGroup.displayName="ToolbarGroup",ToolbarGroup.__docgenInfo={description:"",displayName:"ToolbarGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ToolbarGroup"]={docgenInfo:ToolbarGroup.__docgenInfo,name:"ToolbarGroup",path:"src/core-components/src/components/Table/elements.tsx#ToolbarGroup"})}catch(__react_docgen_typescript_loader_error){}try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:"",displayName:"SearchInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/core-components/src/components/Table/elements.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}try{ToolbarButton.displayName="ToolbarButton",ToolbarButton.__docgenInfo={description:"",displayName:"ToolbarButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ToolbarButton"]={docgenInfo:ToolbarButton.__docgenInfo,name:"ToolbarButton",path:"src/core-components/src/components/Table/elements.tsx#ToolbarButton"})}catch(__react_docgen_typescript_loader_error){}try{SelectionIndicator.displayName="SelectionIndicator",SelectionIndicator.__docgenInfo={description:"",displayName:"SelectionIndicator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#SelectionIndicator"]={docgenInfo:SelectionIndicator.__docgenInfo,name:"SelectionIndicator",path:"src/core-components/src/components/Table/elements.tsx#SelectionIndicator"})}catch(__react_docgen_typescript_loader_error){}try{SelectionCount.displayName="SelectionCount",SelectionCount.__docgenInfo={description:"",displayName:"SelectionCount",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#SelectionCount"]={docgenInfo:SelectionCount.__docgenInfo,name:"SelectionCount",path:"src/core-components/src/components/Table/elements.tsx#SelectionCount"})}catch(__react_docgen_typescript_loader_error){}try{SelectionIcon.displayName="SelectionIcon",SelectionIcon.__docgenInfo={description:"",displayName:"SelectionIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#SelectionIcon"]={docgenInfo:SelectionIcon.__docgenInfo,name:"SelectionIcon",path:"src/core-components/src/components/Table/elements.tsx#SelectionIcon"})}catch(__react_docgen_typescript_loader_error){}try{TableWrapper.displayName="TableWrapper",TableWrapper.__docgenInfo={description:"",displayName:"TableWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableWrapper"]={docgenInfo:TableWrapper.__docgenInfo,name:"TableWrapper",path:"src/core-components/src/components/Table/elements.tsx#TableWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledTable.displayName="StyledTable",StyledTable.__docgenInfo={description:"",displayName:"StyledTable",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#StyledTable"]={docgenInfo:StyledTable.__docgenInfo,name:"StyledTable",path:"src/core-components/src/components/Table/elements.tsx#StyledTable"})}catch(__react_docgen_typescript_loader_error){}try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"src/core-components/src/components/Table/elements.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}try{HeaderRow.displayName="HeaderRow",HeaderRow.__docgenInfo={description:"",displayName:"HeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#HeaderRow"]={docgenInfo:HeaderRow.__docgenInfo,name:"HeaderRow",path:"src/core-components/src/components/Table/elements.tsx#HeaderRow"})}catch(__react_docgen_typescript_loader_error){}try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#HeaderCell"]={docgenInfo:HeaderCell.__docgenInfo,name:"HeaderCell",path:"src/core-components/src/components/Table/elements.tsx#HeaderCell"})}catch(__react_docgen_typescript_loader_error){}try{SortIcon.displayName="SortIcon",SortIcon.__docgenInfo={description:"",displayName:"SortIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#SortIcon"]={docgenInfo:SortIcon.__docgenInfo,name:"SortIcon",path:"src/core-components/src/components/Table/elements.tsx#SortIcon"})}catch(__react_docgen_typescript_loader_error){}try{FilterRow.displayName="FilterRow",FilterRow.__docgenInfo={description:"",displayName:"FilterRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#FilterRow"]={docgenInfo:FilterRow.__docgenInfo,name:"FilterRow",path:"src/core-components/src/components/Table/elements.tsx#FilterRow"})}catch(__react_docgen_typescript_loader_error){}try{FilterCell.displayName="FilterCell",FilterCell.__docgenInfo={description:"",displayName:"FilterCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#FilterCell"]={docgenInfo:FilterCell.__docgenInfo,name:"FilterCell",path:"src/core-components/src/components/Table/elements.tsx#FilterCell"})}catch(__react_docgen_typescript_loader_error){}try{FilterInput.displayName="FilterInput",FilterInput.__docgenInfo={description:"",displayName:"FilterInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#FilterInput"]={docgenInfo:FilterInput.__docgenInfo,name:"FilterInput",path:"src/core-components/src/components/Table/elements.tsx#FilterInput"})}catch(__react_docgen_typescript_loader_error){}try{FilterSelect.displayName="FilterSelect",FilterSelect.__docgenInfo={description:"",displayName:"FilterSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#FilterSelect"]={docgenInfo:FilterSelect.__docgenInfo,name:"FilterSelect",path:"src/core-components/src/components/Table/elements.tsx#FilterSelect"})}catch(__react_docgen_typescript_loader_error){}try{TableBody.displayName="TableBody",TableBody.__docgenInfo={description:"",displayName:"TableBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableBody"]={docgenInfo:TableBody.__docgenInfo,name:"TableBody",path:"src/core-components/src/components/Table/elements.tsx#TableBody"})}catch(__react_docgen_typescript_loader_error){}try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/core-components/src/components/Table/elements.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}try{TableCellContent.displayName="TableCellContent",TableCellContent.__docgenInfo={description:"",displayName:"TableCellContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableCellContent"]={docgenInfo:TableCellContent.__docgenInfo,name:"TableCellContent",path:"src/core-components/src/components/Table/elements.tsx#TableCellContent"})}catch(__react_docgen_typescript_loader_error){}try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/core-components/src/components/Table/elements.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/core-components/src/components/Table/elements.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}try{ExpandButton.displayName="ExpandButton",ExpandButton.__docgenInfo={description:"",displayName:"ExpandButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ExpandButton"]={docgenInfo:ExpandButton.__docgenInfo,name:"ExpandButton",path:"src/core-components/src/components/Table/elements.tsx#ExpandButton"})}catch(__react_docgen_typescript_loader_error){}try{ExpandedRow.displayName="ExpandedRow",ExpandedRow.__docgenInfo={description:"",displayName:"ExpandedRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ExpandedRow"]={docgenInfo:ExpandedRow.__docgenInfo,name:"ExpandedRow",path:"src/core-components/src/components/Table/elements.tsx#ExpandedRow"})}catch(__react_docgen_typescript_loader_error){}try{ExpandedCell.displayName="ExpandedCell",ExpandedCell.__docgenInfo={description:"",displayName:"ExpandedCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ExpandedCell"]={docgenInfo:ExpandedCell.__docgenInfo,name:"ExpandedCell",path:"src/core-components/src/components/Table/elements.tsx#ExpandedCell"})}catch(__react_docgen_typescript_loader_error){}try{TableFooter.displayName="TableFooter",TableFooter.__docgenInfo={description:"",displayName:"TableFooter",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#TableFooter"]={docgenInfo:TableFooter.__docgenInfo,name:"TableFooter",path:"src/core-components/src/components/Table/elements.tsx#TableFooter"})}catch(__react_docgen_typescript_loader_error){}try{FooterRow.displayName="FooterRow",FooterRow.__docgenInfo={description:"",displayName:"FooterRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#FooterRow"]={docgenInfo:FooterRow.__docgenInfo,name:"FooterRow",path:"src/core-components/src/components/Table/elements.tsx#FooterRow"})}catch(__react_docgen_typescript_loader_error){}try{FooterCell.displayName="FooterCell",FooterCell.__docgenInfo={description:"",displayName:"FooterCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#FooterCell"]={docgenInfo:FooterCell.__docgenInfo,name:"FooterCell",path:"src/core-components/src/components/Table/elements.tsx#FooterCell"})}catch(__react_docgen_typescript_loader_error){}try{PaginationWrapper.displayName="PaginationWrapper",PaginationWrapper.__docgenInfo={description:"",displayName:"PaginationWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#PaginationWrapper"]={docgenInfo:PaginationWrapper.__docgenInfo,name:"PaginationWrapper",path:"src/core-components/src/components/Table/elements.tsx#PaginationWrapper"})}catch(__react_docgen_typescript_loader_error){}try{PaginationInfo.displayName="PaginationInfo",PaginationInfo.__docgenInfo={description:"",displayName:"PaginationInfo",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#PaginationInfo"]={docgenInfo:PaginationInfo.__docgenInfo,name:"PaginationInfo",path:"src/core-components/src/components/Table/elements.tsx#PaginationInfo"})}catch(__react_docgen_typescript_loader_error){}try{PaginationControls.displayName="PaginationControls",PaginationControls.__docgenInfo={description:"",displayName:"PaginationControls",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#PaginationControls"]={docgenInfo:PaginationControls.__docgenInfo,name:"PaginationControls",path:"src/core-components/src/components/Table/elements.tsx#PaginationControls"})}catch(__react_docgen_typescript_loader_error){}try{PageButton.displayName="PageButton",PageButton.__docgenInfo={description:"",displayName:"PageButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#PageButton"]={docgenInfo:PageButton.__docgenInfo,name:"PageButton",path:"src/core-components/src/components/Table/elements.tsx#PageButton"})}catch(__react_docgen_typescript_loader_error){}try{PageSizeSelect.displayName="PageSizeSelect",PageSizeSelect.__docgenInfo={description:"",displayName:"PageSizeSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#PageSizeSelect"]={docgenInfo:PageSizeSelect.__docgenInfo,name:"PageSizeSelect",path:"src/core-components/src/components/Table/elements.tsx#PageSizeSelect"})}catch(__react_docgen_typescript_loader_error){}try{QuickJumper.displayName="QuickJumper",QuickJumper.__docgenInfo={description:"",displayName:"QuickJumper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#QuickJumper"]={docgenInfo:QuickJumper.__docgenInfo,name:"QuickJumper",path:"src/core-components/src/components/Table/elements.tsx#QuickJumper"})}catch(__react_docgen_typescript_loader_error){}try{EmptyState.displayName="EmptyState",EmptyState.__docgenInfo={description:"",displayName:"EmptyState",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#EmptyState"]={docgenInfo:EmptyState.__docgenInfo,name:"EmptyState",path:"src/core-components/src/components/Table/elements.tsx#EmptyState"})}catch(__react_docgen_typescript_loader_error){}try{LoadingOverlay.displayName="LoadingOverlay",LoadingOverlay.__docgenInfo={description:"",displayName:"LoadingOverlay",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#LoadingOverlay"]={docgenInfo:LoadingOverlay.__docgenInfo,name:"LoadingOverlay",path:"src/core-components/src/components/Table/elements.tsx#LoadingOverlay"})}catch(__react_docgen_typescript_loader_error){}try{LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"src/core-components/src/components/Table/elements.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}try{EditableCell.displayName="EditableCell",EditableCell.__docgenInfo={description:"",displayName:"EditableCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#EditableCell"]={docgenInfo:EditableCell.__docgenInfo,name:"EditableCell",path:"src/core-components/src/components/Table/elements.tsx#EditableCell"})}catch(__react_docgen_typescript_loader_error){}try{CellEditor.displayName="CellEditor",CellEditor.__docgenInfo={description:"",displayName:"CellEditor",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#CellEditor"]={docgenInfo:CellEditor.__docgenInfo,name:"CellEditor",path:"src/core-components/src/components/Table/elements.tsx#CellEditor"})}catch(__react_docgen_typescript_loader_error){}try{ColumnTogglePanel.displayName="ColumnTogglePanel",ColumnTogglePanel.__docgenInfo={description:"",displayName:"ColumnTogglePanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnTogglePanel"]={docgenInfo:ColumnTogglePanel.__docgenInfo,name:"ColumnTogglePanel",path:"src/core-components/src/components/Table/elements.tsx#ColumnTogglePanel"})}catch(__react_docgen_typescript_loader_error){}try{ColumnToggleHeader.displayName="ColumnToggleHeader",ColumnToggleHeader.__docgenInfo={description:"",displayName:"ColumnToggleHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnToggleHeader"]={docgenInfo:ColumnToggleHeader.__docgenInfo,name:"ColumnToggleHeader",path:"src/core-components/src/components/Table/elements.tsx#ColumnToggleHeader"})}catch(__react_docgen_typescript_loader_error){}try{ColumnToggleSearch.displayName="ColumnToggleSearch",ColumnToggleSearch.__docgenInfo={description:"",displayName:"ColumnToggleSearch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnToggleSearch"]={docgenInfo:ColumnToggleSearch.__docgenInfo,name:"ColumnToggleSearch",path:"src/core-components/src/components/Table/elements.tsx#ColumnToggleSearch"})}catch(__react_docgen_typescript_loader_error){}try{ColumnToggleList.displayName="ColumnToggleList",ColumnToggleList.__docgenInfo={description:"",displayName:"ColumnToggleList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnToggleList"]={docgenInfo:ColumnToggleList.__docgenInfo,name:"ColumnToggleList",path:"src/core-components/src/components/Table/elements.tsx#ColumnToggleList"})}catch(__react_docgen_typescript_loader_error){}try{ColumnToggleItem.displayName="ColumnToggleItem",ColumnToggleItem.__docgenInfo={description:"",displayName:"ColumnToggleItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnToggleItem"]={docgenInfo:ColumnToggleItem.__docgenInfo,name:"ColumnToggleItem",path:"src/core-components/src/components/Table/elements.tsx#ColumnToggleItem"})}catch(__react_docgen_typescript_loader_error){}try{ColumnToggleDragHandle.displayName="ColumnToggleDragHandle",ColumnToggleDragHandle.__docgenInfo={description:"",displayName:"ColumnToggleDragHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnToggleDragHandle"]={docgenInfo:ColumnToggleDragHandle.__docgenInfo,name:"ColumnToggleDragHandle",path:"src/core-components/src/components/Table/elements.tsx#ColumnToggleDragHandle"})}catch(__react_docgen_typescript_loader_error){}try{ColumnToggleListAnimated.displayName="ColumnToggleListAnimated",ColumnToggleListAnimated.__docgenInfo={description:"",displayName:"ColumnToggleListAnimated",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ColumnToggleListAnimated"]={docgenInfo:ColumnToggleListAnimated.__docgenInfo,name:"ColumnToggleListAnimated",path:"src/core-components/src/components/Table/elements.tsx#ColumnToggleListAnimated"})}catch(__react_docgen_typescript_loader_error){}try{ResizeHandle.displayName="ResizeHandle",ResizeHandle.__docgenInfo={description:"",displayName:"ResizeHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/elements.tsx#ResizeHandle"]={docgenInfo:ResizeHandle.__docgenInfo,name:"ResizeHandle",path:"src/core-components/src/components/Table/elements.tsx#ResizeHandle"})}catch(__react_docgen_typescript_loader_error){}var hooks=__webpack_require__("./src/core-components/src/components/Table/hooks.ts"),Table_filters=__webpack_require__("./src/core-components/src/components/Table/filters.tsx"),Tooltip=__webpack_require__("./src/core-components/src/components/Tooltip/index.ts"),columnResize=__webpack_require__("./src/core-components/src/components/Table/columnResize.tsx");const SearchIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("circle",{cx:"11",cy:"11",r:"8"}),react.createElement("path",{d:"M21 21l-4.35-4.35",strokeLinecap:"round"})),ArrowUpIcon=({size=16,color="white"})=>react.createElement("svg",{viewBox:"0 0 16 16",fill:color,style:{width:size,height:size,display:"block"}},react.createElement("path",{fillRule:"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})),ArrowDownIcon=({size=16,color="white"})=>react.createElement("svg",{viewBox:"0 0 16 16",fill:color,style:{width:size,height:size,display:"block"}},react.createElement("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})),DefaultSortCaret=({order})=>{const{up,down}=(()=>{switch(order){case"asc":return{up:18,down:12};case"desc":return{up:12,down:18};default:return{up:16,down:16}}})();return react.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:0}},react.createElement(ArrowUpIcon,{size:up,color:"white"}),react.createElement(ArrowDownIcon,{size:down,color:"white"}))},ChevronLeftIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronsLeftIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronsRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M13 7l5 5-5 5M6 7l5 5-5 5",strokeLinecap:"round",strokeLinejoin:"round"})),ExpandIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})),CloseIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})),FilterIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M22 3H2l8 9.46V19l4 2v-8.54L22 3z",strokeLinecap:"round",strokeLinejoin:"round"})),DownloadIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",strokeLinecap:"round",strokeLinejoin:"round"})),ColumnsIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("rect",{x:"3",y:"3",width:"7",height:"18",rx:"1"}),react.createElement("rect",{x:"14",y:"3",width:"7",height:"18",rx:"1"})),EmptyIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5"},react.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),react.createElement("path",{d:"M3 9h18M9 3v18",strokeLinecap:"round"})),RefreshIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M23 4v6h-6M1 20v-6h6",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15",strokeLinecap:"round",strokeLinejoin:"round"})),PrintIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("rect",{x:"6",y:"14",width:"12",height:"8"})),Table=(0,react.forwardRef)((function TableComponent(props,ref){const{id,data,columns,keyField="_id",loading=!1,loadingIndicator,pagination=!0,paginationConfig,totalSize,remote=!0,defaultSort,sort:controlledSort,filterable=!1,defaultFilters,filters:controlledFilters,defaultShowFilters=!0,showFilters:controlledShowFilters,onShowFiltersChange,showFilterToggle=!0,searchable=!0,searchPlaceholder="Search...",defaultSearchValue="",searchValue:controlledSearchValue,searchDebounce=300,rowSelection,expandable,editMode="dblclick",showEditIcon=!1,onCellEdit,exportable=!0,exportFileName="table_export",exportFormat="csv",columnToggle=!1,bordered=!0,striped=!1,hover=!0,compact=!1,cellPadding,stickyHeader=!1,maxHeight,rowClassName,rowStyle,classNames={},styles={},className,style,emptyText="No data available",onChange,onPageChange,onSortChange,onFilterChange,onSearch,onRowClick,onRowDoubleClick,onClearFilters,toolbar,hideToolbar=!1,showFooter=!1,caption,isDelete=!1,isEditModify,isUpdate,isExport,isSelectRow,getNonSelectableRows,nonSelectableStyle,isView=!1,fileName,hideExcelSheet=!1,onSelectedRow,selectedRowStyle,selectedRowClassName,onUpdateItem,onPageSizeChange,onFilter,clearAllFilter,onDelete,onEdit,onView,dynamicStylingFields,fieldTypeConfig,showRowNumber=!1,rowNumberWidth=50,rowNumberTitle="#",rowNumberRender,toolbarPosition="top",toolbarLeft,toolbarRight,toolbarCenter,refreshable=!1,onRefresh,printable=!1,onPrint,size="medium",error,onRetry,skeletonLoading=!1,skeletonRowCount=5,hideHeader=!1,highlightedRowKeys=[],highlightRowStyle,highlightRowClassName,onRowMouseEnter,onRowMouseLeave,onCellClick,onHeaderClick,resizable=!0,resizeConfig,reorderable=!0,reorderConfig,...rest}=props,resolvedExportable=isExport??exportable,resolvedExportFileName=fileName??exportFileName,resolvedRemote=(0,react.useMemo)((()=>!(void 0!==totalSize&&totalSize>0&&totalSize<=data.length)&&remote),[remote,totalSize,data.length]),resolvedRowSelection=isSelectRow?{mode:"checkbox",selectedRowStyle:selectedRowStyle||rowSelection?.selectedRowStyle,selectedRowClassName:selectedRowClassName||rowSelection?.selectedRowClassName,...rowSelection,getCheckboxProps:row=>{const rowKey=row[keyField],isNonSelectable=getNonSelectableRows?.includes(rowKey),existingProps=rowSelection?.getCheckboxProps?.(row);return{...existingProps,disabled:isNonSelectable||existingProps?.disabled}},onChange:(keys,rows)=>{rowSelection?.onChange?.(keys,rows)}}:rowSelection,allowedEditingFields=(0,react.useMemo)((()=>resolvedRowSelection&&resolvedRowSelection.allowEditingCells||[]),[resolvedRowSelection]),hasAllowedEditingFields=allowedEditingFields.length>0,isFieldAllowedForDisabledRow=(0,react.useCallback)((field=>!!hasAllowedEditingFields&&allowedEditingFields.includes(field)),[hasAllowedEditingFields,allowedEditingFields]),resolvedPaginationConfig=pagination?{page:0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0,pageSizeOptions:[10,20,30,50],...paginationConfig}:paginationConfig,tableRef=(0,react.useRef)(null),columnToggleRef=(0,react.useRef)(null),prevSelectionCountRef=(0,react.useRef)(0),[internalSearchValue,setInternalSearchValue]=(0,react.useState)(defaultSearchValue),[internalShowFilters,setInternalShowFilters]=(0,react.useState)(defaultShowFilters),[columnToggleOpen,setColumnToggleOpen]=(0,react.useState)(!1),[columnSearch,setColumnSearch]=(0,react.useState)(""),[selectionAnimation,setSelectionAnimation]=(0,react.useState)("none"),[toggleDraggingColumn,setToggleDraggingColumn]=(0,react.useState)(null),[toggleDragOverColumn,setToggleDragOverColumn]=(0,react.useState)(null),[reorderedColumns,setReorderedColumns]=(0,react.useState)(columns);(0,react.useEffect)((()=>{if(reorderedColumns.map((c=>c.dataField)).sort().join(",")!==columns.map((c=>c.dataField)).sort().join(",")){const newColumnMap=new Map(columns.map((c=>[c.dataField,c]))),existingDataFields=new Set(reorderedColumns.map((c=>c.dataField))),preserved=reorderedColumns.filter((c=>newColumnMap.has(c.dataField))).map((c=>newColumnMap.get(c.dataField))),added=columns.filter((c=>!existingDataFields.has(c.dataField)));setReorderedColumns([...preserved,...added])}else{const columnMap=new Map(columns.map((c=>[c.dataField,c])));setReorderedColumns(reorderedColumns.map((c=>columnMap.get(c.dataField)||c)))}}),[columns]),(0,react.useEffect)((()=>{if(!columnToggleOpen)return;const handleClickOutside=event=>{columnToggleRef.current&&!columnToggleRef.current.contains(event.target)&&setColumnToggleOpen(!1)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[columnToggleOpen]);const isFilterVisibilityControlled=void 0!==controlledShowFilters,showFilterRow=isFilterVisibilityControlled?controlledShowFilters:internalShowFilters,[editingCell,setEditingCell]=((0,react.useCallback)((()=>{const newValue=!showFilterRow;isFilterVisibilityControlled||setInternalShowFilters(newValue),onShowFiltersChange?.(newValue)}),[showFilterRow,isFilterVisibilityControlled,onShowFiltersChange]),(0,react.useState)(null)),[editValue,setEditValue]=(0,react.useState)(null),editorRendererCacheRef=(0,react.useRef)(new Map);(0,react.useEffect)((()=>{editorRendererCacheRef.current.clear()}),[editingCell]);const searchValue=controlledSearchValue??internalSearchValue,debouncedSearchValue=(0,hooks.d1)(searchValue,searchDebounce),{sort,handleSort}=(0,hooks.bf)(defaultSort,controlledSort),{filters,setFilter,clearFilters}=(0,hooks.vs)(defaultFilters,controlledFilters),shouldCallOnFilter=(0,react.useRef)(!1),filterTypeRef=(0,react.useRef)("filter"),onFilterRef=(0,react.useRef)(onFilter),lastOnFilterCallRef=(0,react.useRef)(null),focusedFilterFieldRef=(0,react.useRef)(null),tableContainerRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{const handleClickOutside=event=>{tableContainerRef.current&&!tableContainerRef.current.contains(event.target)&&(focusedFilterFieldRef.current=null)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]),(0,react.useEffect)((()=>{const restoreFocus=()=>{if(focusedFilterFieldRef.current&&tableContainerRef.current){const filterInput=tableContainerRef.current.querySelector(`[data-filter-field="${focusedFilterFieldRef.current}"]`);if(filterInput&&document.activeElement!==filterInput){filterInput.focus();const len=filterInput.value?.length||0;filterInput.setSelectionRange(len,len)}}},timers=[requestAnimationFrame((()=>restoreFocus())),setTimeout((()=>restoreFocus()),50),setTimeout((()=>restoreFocus()),150)];return()=>{timers.forEach((timer=>{"number"==typeof timer&&(cancelAnimationFrame(timer),clearTimeout(timer))}))}}),[data]);const{page,pageSize,totalPages,goToPage,goToNextPage,goToPrevPage,goToFirstPage,goToLastPage,changePageSize}=(0,hooks.P7)(resolvedPaginationConfig?.page||0,resolvedPaginationConfig?.pageSize||10,totalSize??data.length),{selectedKeys,isSelected,toggleRow,toggleAll,isAllSelected,isIndeterminate}=(0,hooks.Uk)(data,resolvedRowSelection?.keyField||keyField,resolvedRowSelection?.mode||"none",resolvedRowSelection?.selectedRowKeys,resolvedRowSelection?.getCheckboxProps),{expandedKeys,isExpanded,toggleExpand}=(0,hooks.zH)(expandable?.keyField||keyField,expandable?.defaultExpandedRowKeys,expandable?.expandedRowKeys,expandable?.accordion),{visibleColumns,toggleColumn,isColumnHidden}=(0,hooks.eL)(columns,id),{columnWidths,getResizeHandle,resetWidths:resetColumnWidths,isResizing}=(0,columnResize.iX)({columns:visibleColumns,config:resizeConfig,enabled:resizable,tableId:id}),visibleRereorderedColumns=(0,react.useMemo)((()=>reorderedColumns.filter((col=>!isColumnHidden(col.dataField)))),[reorderedColumns,isColumnHidden]),renderColumns=reorderable?visibleRereorderedColumns:visibleColumns;(0,react.useEffect)((()=>{onFilterRef.current=onFilter}),[onFilter]);const prevSearchRef=(0,react.useRef)(debouncedSearchValue),prevFiltersRef=(0,react.useRef)(JSON.stringify(filters));(0,react.useEffect)((()=>{if(!shouldCallOnFilter.current)return;const currentFiltersStr=JSON.stringify(filters),searchChanged=prevSearchRef.current!==debouncedSearchValue,filtersChanged=prevFiltersRef.current!==currentFiltersStr;if(!searchChanged&&!filtersChanged)return void(shouldCallOnFilter.current=!1);prevSearchRef.current=debouncedSearchValue,prevFiltersRef.current=currentFiltersStr;const cleanFilters={};Object.keys(filters).forEach((key=>{const value=filters[key];null!=value&&""!==value&&(cleanFilters[key]=value)}));Object.keys(cleanFilters).length;const filterData={...cleanFilters};"search"===filterTypeRef.current&&debouncedSearchValue&&(filterData.srText=debouncedSearchValue),onFilterRef.current?.(filterTypeRef.current,filterData,page+1,pageSize),shouldCallOnFilter.current=!1}),[debouncedSearchValue,filters,page,pageSize]),(0,react.useEffect)((()=>{const currentCount=selectedKeys.size,prevCount=prevSelectionCountRef.current;currentCount>prevCount?setSelectionAnimation("up"):currentCount<prevCount&&setSelectionAnimation("down"),prevSelectionCountRef.current=currentCount;const timer=setTimeout((()=>{setSelectionAnimation("none")}),300);return()=>clearTimeout(timer)}),[selectedKeys.size]);const processedData=(0,react.useMemo)((()=>{if(resolvedRemote)return data;let result=[...data];return result=(0,hooks.Bd)(result,filters,columns,debouncedSearchValue),result=(0,hooks.LT)(result,sort,columns),pagination&&(result=(0,hooks.Eb)(result,page,pageSize)),result}),[data,filters,sort,page,pageSize,debouncedSearchValue,resolvedRemote,pagination,columns]),calculatedTotal=(0,react.useMemo)((()=>void 0!==totalSize&&totalSize>0?totalSize:resolvedRemote?data.length:(0,hooks.Bd)(data,filters,columns,debouncedSearchValue).length),[data,filters,columns,debouncedSearchValue,resolvedRemote,totalSize]),handleSearchChange=(0,react.useCallback)((value=>{setInternalSearchValue(value),onSearch?.(value),shouldCallOnFilter.current=!0,filterTypeRef.current="search",onChange?.({type:"search",search:value})}),[onSearch,onChange]),handleSortClick=(0,react.useCallback)((column=>{if(!column.sort)return;const newSort=handleSort(column.dataField,sort.order);onSortChange?.(newSort),onChange?.({type:"sort",sort:newSort})}),[sort,handleSort,onSortChange,onChange]),handleFilterChange=(0,react.useCallback)(((field,value)=>{setFilter(field,value);const newFilters={...filters,[field]:value};onFilterChange?.(newFilters),shouldCallOnFilter.current=!0,filterTypeRef.current="filter",onChange?.({type:"filter",filters:newFilters})}),[filters,setFilter,onFilterChange,onChange]),handleClearFilters=(0,react.useCallback)((()=>{clearFilters(),setInternalSearchValue(""),onClearFilters?.(),clearAllFilter?.(),onFilterChange?.({}),onChange?.({type:"filter",filters:{}}),lastOnFilterCallRef.current=null}),[clearFilters,onClearFilters,onFilterChange,onChange]),handlePageChange=(0,react.useCallback)((newPage=>{goToPage(newPage);const displayPage=newPage+1;onPageSizeChange?.(displayPage,pageSize),onPageChange?.(displayPage,pageSize),onChange?.({type:"pagination",pagination:{page:displayPage,pageSize}})}),[goToPage,pageSize,onPageSizeChange,onPageChange,onChange]),handlePageSizeChange=(0,react.useCallback)((newSize=>{changePageSize(newSize),onPageSizeChange?.(1,newSize),onPageChange?.(1,newSize),onChange?.({type:"pagination",pagination:{page:1,pageSize:newSize}})}),[changePageSize,onPageSizeChange,onPageChange,onChange]),handleRowClick=(0,react.useCallback)(((row,rowIndex,e)=>{const checkboxProps=resolvedRowSelection?.getCheckboxProps?.(row);if(!checkboxProps?.disabled){if("single"===resolvedRowSelection?.mode){const result=toggleRow(row);result&&resolvedRowSelection?.onChange?.(result.selectedKeys,result.selectedRows)}if(expandable?.expandRowByClick){const result=toggleExpand(row);result&&expandable.onExpandChange?.(result.expandedKeys,result.expanded,row)}onRowClick?.(row,rowIndex,e)}}),[rowSelection,expandable,toggleRow,toggleExpand,onRowClick,resolvedRowSelection]),getCellEditableInfo=(0,react.useCallback)(((column,row,rowIndex,colIndex)=>{const hasEditorRenderer=!!column.editorRenderer;if(void 0===column.editable)return{isEditable:hasEditorRenderer};if(!1===column.editable)return{isEditable:!1};if(!0===column.editable)return{isEditable:!0};const cellValue=(0,hooks.LJ)(row,column.dataField),result=column.editable(cellValue,row,rowIndex,colIndex);return"boolean"==typeof result?{isEditable:result}:{isEditable:!0,customEditor:result}}),[]),handleCellDoubleClick=(0,react.useCallback)(((row,rowIndex,column,colIndex,e)=>{if(resolvedRowSelection){const checkboxProps=resolvedRowSelection.getCheckboxProps?.(row);if(!!checkboxProps?.disabled){if(!hasAllowedEditingFields)return;if(!isFieldAllowedForDisabledRow(column.dataField))return}}const{isEditable}=getCellEditableInfo(column,row,rowIndex,colIndex);if(column.events?.onDoubleClick?.(e,row,rowIndex,column,colIndex),"none"!==editMode)if(resolvedRowSelection){const checkboxProps=resolvedRowSelection.getCheckboxProps?.(row);!!checkboxProps?.disabled?isFieldAllowedForDisabledRow(column.dataField)&&"dblclick"===editMode&&(setEditingCell({row:rowIndex,field:column.dataField}),setEditValue((0,hooks.LJ)(row,column.dataField))):isEditable&&"dblclick"===editMode&&(setEditingCell({row:rowIndex,field:column.dataField}),setEditValue((0,hooks.LJ)(row,column.dataField)))}else isEditable&&"dblclick"===editMode&&(setEditingCell({row:rowIndex,field:column.dataField}),setEditValue((0,hooks.LJ)(row,column.dataField)));onRowDoubleClick?.(row,rowIndex,e)}),[editMode,onRowDoubleClick,getCellEditableInfo,resolvedRowSelection]),handleCellClick=(0,react.useCallback)(((row,rowIndex,column,colIndex,e)=>{if(resolvedRowSelection){const checkboxProps=resolvedRowSelection.getCheckboxProps?.(row);if(!!checkboxProps?.disabled){if(!hasAllowedEditingFields)return;if(!isFieldAllowedForDisabledRow(column.dataField))return}}const{isEditable}=getCellEditableInfo(column,row,rowIndex,colIndex);if(e&&column.events?.onClick?.(e,row,rowIndex,column,colIndex),"click"===editMode)if(resolvedRowSelection){const checkboxProps=resolvedRowSelection.getCheckboxProps?.(row);!!checkboxProps?.disabled?isFieldAllowedForDisabledRow(column.dataField)&&(setEditingCell({row:rowIndex,field:column.dataField}),setEditValue((0,hooks.LJ)(row,column.dataField))):isEditable&&(setEditingCell({row:rowIndex,field:column.dataField}),setEditValue((0,hooks.LJ)(row,column.dataField)))}else isEditable&&(setEditingCell({row:rowIndex,field:column.dataField}),setEditValue((0,hooks.LJ)(row,column.dataField)))}),[editMode,getCellEditableInfo,resolvedRowSelection]),handleCellEditComplete=(0,react.useCallback)(((row,rowIndex,column)=>{if(editingCell){if(column.validator){const result=column.validator(editValue,row);if(!0!==result)return alert("string"==typeof result?result:"Invalid value"),void setEditingCell(null)}const rowId=row[keyField];onCellEdit?.(editValue,column.dataField,row,rowIndex),onUpdateItem?.(editValue,column.dataField,rowId)}setEditingCell(null)}),[editingCell,editValue,onCellEdit,onUpdateItem,keyField]),processFieldValue=(0,react.useCallback)(((value,dataField,row)=>{const configOrType=fieldTypeConfig?.[dataField],config="string"==typeof configOrType?{type:configOrType}:configOrType;switch(config?.type||"string"){case"array":return config?.fields&&config.fields.length>0?Array.isArray(value)?value.slice(0,config.maxItems||value.length).map((item=>"object"==typeof item&&config.fields?config.fields.map((field=>item[field])).filter(Boolean).join(", "):"string"==typeof item?item:"")).filter(Boolean).join(config.separator||"; "):value||"":Array.isArray(value)?value.map((item=>"object"==typeof item?JSON.stringify(item):item)).join("; "):value||"";case"object":if(!value||"object"!=typeof value)return"";const fields=config?.fields||config?.keys||[],labelMap=config?.labelMap||{};return fields.length>0?fields.map((field=>{const nestedValue=(obj=value,field.split(".").reduce(((acc,key)=>acc?.[key]),obj));var obj;if(null!=nestedValue){return`${labelMap[field]||field}: ${nestedValue}`}return null})).filter(Boolean).join(", "):Object.entries(value).map((([key,val])=>"boolean"==typeof val?`${key}: ${val?"Yes":"No"}`:`${key}: ${val}`)).join(", ");case"date":if(!value)return"";try{const date=new Date(value);return date.toISOString().slice(0,19).replace("T"," ")}catch{return String(value)}case"number":return null!=value?String(Number(value)):"";case"boolean":return"boolean"==typeof value?value?"Yes":"No":"";default:return"boolean"==typeof value?value?"Yes":"No":null!=value?String(value):""}}),[fieldTypeConfig]),handleExport=(0,react.useCallback)((async()=>{const exportData=resolvedRemote?data:(0,hooks.Bd)(data,filters,columns,debouncedSearchValue);let exportColumns=visibleColumns.filter((col=>!1!==col.csvExport));Array.isArray(hideExcelSheet)&&(exportColumns=exportColumns.filter((col=>!hideExcelSheet.includes(col.dataField)))),fieldTypeConfig&&(exportColumns=exportColumns.filter((col=>{const configOrType=fieldTypeConfig[col.dataField],config="string"==typeof configOrType?{type:configOrType}:configOrType;return!config?.hideFromExport&&!1!==config?.csvExport})));const enhancedColumns=exportColumns.map((col=>{const configOrType=fieldTypeConfig?.[col.dataField],config="string"==typeof configOrType?{type:configOrType}:configOrType;return col.csvFormatter?col:config?.exportFormatter?{...col,csvFormatter:config.exportFormatter}:config?.type?{...col,csvFormatter:(cell,row)=>processFieldValue(cell,col.dataField,row)}:col}));"excel"===exportFormat?await(0,hooks.bJ)(exportData,enhancedColumns,resolvedExportFileName):(0,hooks.GF)(exportData,enhancedColumns,resolvedExportFileName)}),[data,filters,columns,debouncedSearchValue,visibleColumns,hideExcelSheet,fieldTypeConfig,processFieldValue,resolvedExportFileName,resolvedRemote,exportFormat]),handleCheckboxChange=(0,react.useCallback)(((row,e)=>{e.stopPropagation();const result=toggleRow(row);result&&resolvedRowSelection?.onChange?.(result.selectedKeys,result.selectedRows)}),[toggleRow,rowSelection]),handleSelectAllChange=(0,react.useCallback)((()=>{const result=toggleAll(!isAllSelected);result&&resolvedRowSelection?.onChange?.(result.selectedKeys,result.selectedRows)}),[toggleAll,isAllSelected,resolvedRowSelection]),handleExpandClick=(0,react.useCallback)(((row,e)=>{const checkboxProps=resolvedRowSelection?.getCheckboxProps?.(row);if(checkboxProps?.disabled)return;e.stopPropagation();const result=toggleExpand(row);expandable?.onExpandChange?.(result.expandedKeys,result.expanded,row)}),[toggleExpand,expandable,resolvedRowSelection]),filteredToggleColumns=(0,react.useMemo)((()=>reorderedColumns.filter((c=>c.dataField!==keyField&&c.text.toLowerCase().includes(columnSearch.toLowerCase())))),[reorderedColumns,keyField,columnSearch]),getRowKey=(0,react.useCallback)((row=>row[keyField]),[keyField]),renderCellContent=(0,react.useCallback)(((row,column,rowIndex,colIndex)=>{const value=(0,hooks.LJ)(row,column.dataField);if(editingCell?.row===rowIndex&&editingCell?.field===column.dataField){if(column.editorRenderer){const rowId=row[keyField],cacheKey=`${rowId??rowIndex}-${column.dataField}`;if(!editorRendererCacheRef.current.has(cacheKey)){const editorProps={value:editValue,onUpdate:newValue=>{setEditValue(newValue),onUpdateItem?.(newValue,column.dataField,rowId),setEditingCell(null)},onCancel:()=>setEditingCell(null),onBlur:()=>{editValue!==value&&onUpdateItem?.(editValue,column.dataField,rowId),setEditingCell(null)},row,column,rowIndex,columnIndex:colIndex,rowId,dataField:column.dataField,onUpdateItem:newValue=>{onUpdateItem?.(newValue,column.dataField,rowId),setEditingCell(null)}};editorRendererCacheRef.current.set(cacheKey,column.editorRenderer(editorProps,editValue,row,column,rowIndex,colIndex))}return editorRendererCacheRef.current.get(cacheKey)}return react.createElement(CellEditor,{type:"number"===column.editorType?"number":"text",value:editValue??"",onChange:e=>setEditValue(e.target.value),onBlur:()=>handleCellEditComplete(row,rowIndex,column),onKeyDown:e=>{"Enter"===e.key&&handleCellEditComplete(row,rowIndex,column),"Escape"===e.key&&setEditingCell(null)},className:column.editorClasses,style:column.editorStyle,autoFocus:!0})}return column.formatter?column.formatter(value,row,rowIndex,colIndex):null==value?"":"boolean"==typeof value?value?"Yes":"No":"object"==typeof value?JSON.stringify(value):String(value)}),[editingCell,editValue,handleCellEditComplete]),shouldShowFilterRow=(filterable||columns.some((c=>"function"==typeof c.filter||c.filterComponent||!0===c.filter)))&&showFilterRow;return react.createElement(TableRoot,{ref:node=>{"function"==typeof ref?ref(node):ref&&(ref.current=node),tableContainerRef.current=node},$bordered:bordered,$compact:compact,className:className||classNames.root,style:{...styles.root,...style,position:"relative"},"aria-label":rest["aria-label"],"aria-labelledby":rest["aria-labelledby"]},loading&&react.createElement(LoadingOverlay,{className:classNames.loading,style:styles.loading},loadingIndicator||react.createElement(LoadingSpinner,null)),(()=>{if(hideToolbar)return null;if("function"==typeof toolbar)return toolbar({searchValue,onSearch:handleSearchChange,onClearFilters:handleClearFilters,onExport:handleExport});if(toolbar)return toolbar;const hasFilters=Object.keys(filters).length>0||searchValue;return react.createElement(Toolbar,{className:classNames.toolbar,style:styles.toolbar},react.createElement(ToolbarGroup,null,toolbarLeft,searchable&&react.createElement(SearchInput,null,react.createElement(SearchIcon,null),react.createElement("input",{type:"text",value:searchValue,onChange:e=>handleSearchChange(e.target.value),onFocus:()=>{focusedFilterFieldRef.current=null},placeholder:searchPlaceholder})),searchable&&react.createElement(ToolbarButton,{onClick:()=>handleSearchChange(""),disabled:!searchValue,style:{opacity:searchValue?1:.6}},"Clear"),react.createElement(ToolbarButton,{onClick:handleClearFilters,disabled:!hasFilters,style:{opacity:hasFilters?1:.6}},"Clear all filters"),resolvedExportable&&!0!==hideExcelSheet&&react.createElement(ToolbarButton,{onClick:handleExport},react.createElement(DownloadIcon,null),"excel"===exportFormat?"Export Excel":"Export CSV"),showFilterToggle&&react.createElement("div",{ref:columnToggleRef,style:{position:"relative"}},react.createElement(Tooltip.m_,{content:"Show/Hide Columns",position:"bottom"},react.createElement(ToolbarButton,{$active:columnToggleOpen,onClick:()=>setColumnToggleOpen(!columnToggleOpen),"aria-label":"Toggle column visibility",style:{padding:"0 8px"}},react.createElement(FilterIcon,null))),columnToggleOpen&&react.createElement(ColumnTogglePanel,null,react.createElement(ColumnToggleHeader,null,react.createElement("span",null,"Show/Hide Columns"),react.createElement("button",{onClick:()=>setColumnToggleOpen(!1)},react.createElement(CloseIcon,null))),react.createElement(ColumnToggleSearch,null,react.createElement("input",{type:"text",value:columnSearch,onChange:e=>setColumnSearch(e.target.value),placeholder:"Search columns..."})),react.createElement(ColumnToggleList,null,react.createElement(ColumnToggleItem,{style:{borderBottom:"1px solid #e5e7eb",paddingBottom:8,marginBottom:4}},react.createElement("input",{type:"checkbox",checked:filteredToggleColumns.length>0&&filteredToggleColumns.every((col=>!isColumnHidden(col.dataField))),onChange:e=>{filteredToggleColumns.forEach((col=>{e.target.checked?isColumnHidden(col.dataField)&&toggleColumn(col.dataField):isColumnHidden(col.dataField)||toggleColumn(col.dataField)}))}}),react.createElement("span",{style:{fontWeight:600}},"Select All")),filteredToggleColumns.map(((column,index)=>react.createElement(ColumnToggleItem,{key:column.dataField,$reorderable:reorderable,$isDragging:toggleDraggingColumn===column.dataField,$isDragOver:toggleDragOverColumn===column.dataField,draggable:reorderable,onDragStart:e=>{reorderable&&(setToggleDraggingColumn(column.dataField),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",column.dataField))},onDragEnd:()=>{setToggleDraggingColumn(null),setToggleDragOverColumn(null)},onDragOver:e=>{reorderable&&(e.preventDefault(),toggleDraggingColumn&&toggleDraggingColumn!==column.dataField&&setToggleDragOverColumn(column.dataField))},onDragLeave:()=>{setToggleDragOverColumn(null)},onDrop:e=>{if(!reorderable)return;e.preventDefault();const draggedField=e.dataTransfer.getData("text/plain");if(draggedField&&draggedField!==column.dataField){const fromIdx=reorderedColumns.findIndex((c=>c.dataField===draggedField)),toIdx=reorderedColumns.findIndex((c=>c.dataField===column.dataField));if(-1!==fromIdx&&-1!==toIdx){const newColumns=[...reorderedColumns],[removed]=newColumns.splice(fromIdx,1);newColumns.splice(toIdx,0,removed),setReorderedColumns(newColumns),reorderConfig?.onReorder?.(newColumns,fromIdx,toIdx)}}setToggleDraggingColumn(null),setToggleDragOverColumn(null)}},react.createElement("input",{type:"checkbox",checked:!isColumnHidden(column.dataField),onChange:()=>toggleColumn(column.dataField),onClick:e=>e.stopPropagation()}),react.createElement("span",null,column.text),reorderable&&react.createElement(ColumnToggleDragHandle,{$isDragging:toggleDraggingColumn===column.dataField,title:"Drag to reorder"})))))))),toolbarCenter,react.createElement(ToolbarGroup,null,refreshable&&react.createElement(ToolbarButton,{onClick:onRefresh},react.createElement(RefreshIcon,null),"Refresh"),printable&&react.createElement(ToolbarButton,{onClick:onPrint},react.createElement(PrintIcon,null),"Print"),columnToggle&&react.createElement("div",{ref:showFilterToggle?void 0:columnToggleRef,style:{position:"relative"}},react.createElement(ToolbarButton,{$active:columnToggleOpen,onClick:()=>setColumnToggleOpen(!columnToggleOpen)},react.createElement(ColumnsIcon,null),"Columns"),columnToggleOpen&&react.createElement(ColumnTogglePanel,null,react.createElement(ColumnToggleHeader,null,react.createElement("span",null,"Toggle Columns"),react.createElement("button",{onClick:()=>setColumnToggleOpen(!1)},react.createElement(CloseIcon,null))),react.createElement(ColumnToggleSearch,null,react.createElement("input",{type:"text",value:columnSearch,onChange:e=>setColumnSearch(e.target.value),placeholder:"Search columns..."})),react.createElement(ColumnToggleList,null,filteredToggleColumns.map(((column,index)=>react.createElement(ColumnToggleItem,{key:column.dataField,$reorderable:reorderable,$isDragging:toggleDraggingColumn===column.dataField,$isDragOver:toggleDragOverColumn===column.dataField,draggable:reorderable,onDragStart:e=>{reorderable&&(setToggleDraggingColumn(column.dataField),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",column.dataField))},onDragEnd:()=>{setToggleDraggingColumn(null),setToggleDragOverColumn(null)},onDragOver:e=>{reorderable&&(e.preventDefault(),toggleDraggingColumn&&toggleDraggingColumn!==column.dataField&&setToggleDragOverColumn(column.dataField))},onDragLeave:()=>{setToggleDragOverColumn(null)},onDrop:e=>{if(!reorderable)return;e.preventDefault();const draggedField=e.dataTransfer.getData("text/plain");if(draggedField&&draggedField!==column.dataField){const fromIdx=reorderedColumns.findIndex((c=>c.dataField===draggedField)),toIdx=reorderedColumns.findIndex((c=>c.dataField===column.dataField));if(-1!==fromIdx&&-1!==toIdx){const newColumns=[...reorderedColumns],[removed]=newColumns.splice(fromIdx,1);newColumns.splice(toIdx,0,removed),setReorderedColumns(newColumns),reorderConfig?.onReorder?.(newColumns,fromIdx,toIdx)}}setToggleDraggingColumn(null),setToggleDragOverColumn(null)}},react.createElement("input",{type:"checkbox",checked:!isColumnHidden(column.dataField),onChange:()=>toggleColumn(column.dataField),onClick:e=>e.stopPropagation()}),react.createElement("span",null,column.text),reorderable&&react.createElement(ColumnToggleDragHandle,{$isDragging:toggleDraggingColumn===column.dataField,title:"Drag to reorder"}))))))),toolbarRight))})(),react.createElement(TableWrapper,{$maxHeight:maxHeight,$stickyHeader:stickyHeader,className:classNames.wrapper,style:styles.wrapper},react.createElement(StyledTable,{ref:tableRef,$striped:striped,$hover:hover,$compact:compact,role:"grid"},caption&&react.createElement("caption",{className:"sr-only"},caption),react.createElement(TableHeader,{$sticky:stickyHeader,className:classNames.header,style:styles.header},react.createElement(HeaderRow,{className:classNames.headerRow,style:styles.headerRow},"checkbox"===resolvedRowSelection?.mode&&react.createElement(HeaderCell,{$align:"center",$sortable:!1,$compact:compact,$width:resolvedRowSelection.columnWidth||40},!resolvedRowSelection.hideSelectAll&&react.createElement(Checkbox,{checked:isAllSelected,ref:el=>{el&&(el.indeterminate=isIndeterminate)},onChange:handleSelectAllChange})),expandable&&react.createElement(HeaderCell,{$align:"center",$sortable:!1,$compact:compact,$width:expandable.columnWidth||40}),showRowNumber&&react.createElement(HeaderCell,{$align:"center",$sortable:!1,$compact:compact,$width:rowNumberWidth},rowNumberTitle),renderColumns.map(((column,colIndex)=>{const hasColumnFilter="function"==typeof column.filter||!0===column.filter||column.filterComponent||column.filterRenderer,FilterComponent=hasColumnFilter?("function"==typeof column.filter?column.filter:null)||column.filterComponent||(0,Table_filters.KO)(column.filterType||"text"):null,onFilter=value=>handleFilterChange(column.dataField,value),resizeStyle=resizable?(0,columnResize.Uw)(column,columnWidths,resizable,isResizing):{};return react.createElement(HeaderCell,{key:column.dataField,ref:node=>{if(node&&resizable){}},$align:column.headerAlign||column.align||"left",$sortable:!!column.sort,$compact:compact,$width:resizable&&columnWidths[column.dataField]?columnWidths[column.dataField]:column.width,$minWidth:column.minWidth,$pinned:column.pinned,$customClass:!!column.headerClasses,className:[column.headerClasses,classNames.headerCell].filter(Boolean).join(" "),style:{..."function"==typeof column.headerStyle?column.headerStyle(column):column.headerStyle||styles.headerCell,...resizeStyle,position:"relative"},role:"columnheader","aria-sort":sort.field===column.dataField?"asc"===sort.order?"ascending":"desc"===sort.order?"descending":"none":void 0,"data-column":column.dataField},(()=>{const headerStyleObj="function"==typeof column.headerStyle?column.headerStyle(column):column.headerStyle,showTitle=!1!==column.isHeaderTitle&&!0!==column.hideHeaderText&&!(headerStyleObj&&0===headerStyleObj.fontSize),showFilter=!1!==column.isHeaderFilterComp&&shouldShowFilterRow&&hasColumnFilter&&FilterComponent,showSort=!1!==column.isHeaderSort&&column.sort;return showFilter?react.createElement("div",{style:{display:"flex",flexDirection:"column",gap:showTitle?4:0,width:"100%",paddingRight:resizable?12:0,position:"relative",zIndex:2}},showTitle&&react.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:4}},react.createElement("span",{style:{color:"white",fontWeight:600,fontSize:12,whiteSpace:"nowrap",cursor:showSort?"pointer":"default",flex:1},onClick:()=>showSort&&handleSortClick(column)},column.headerFormatter?column.headerFormatter(column,colIndex):column.headerText||column.text)),react.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:4,width:"100%",minHeight:24}},react.createElement("div",{style:{flex:showSort?"0 1 auto":1,width:showSort?"calc(100% - 48px)":"100%",minWidth:0,maxWidth:showSort?"calc(100% - 48px)":"100%",display:"flex",alignItems:"center",overflow:"hidden"},onClick:e=>e.stopPropagation()},column.filterRenderer?column.filterRenderer(onFilter,column):react.createElement("div",{onFocusCapture:()=>{focusedFilterFieldRef.current=column.dataField},"data-filter-wrapper":column.dataField,style:{width:"100%"}},react.createElement(FilterComponent,{key:`filter-${column.dataField}`,column,value:filters[column.dataField],onChange:onFilter,onClear:()=>handleFilterChange(column.dataField,null)}))),showSort&&react.createElement("div",{style:{minWidth:40,minHeight:24,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,cursor:"pointer",marginLeft:"auto",position:"relative",overflow:"visible"},onClick:e=>{e.stopPropagation(),handleSortClick(column)},title:`Sort by ${column.text}`},column.sortCaret?column.sortCaret(sort.field===column.dataField?sort.order:null,column):react.createElement(DefaultSortCaret,{order:sort.field===column.dataField?sort.order:null,column})))):react.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:column.headerAlign||column.align||"left",gap:6,width:"100%",cursor:showSort?"pointer":"default",paddingRight:resizable?12:0,position:"relative",zIndex:2},onClick:()=>showSort&&handleSortClick(column)},showTitle&&react.createElement("span",{style:{color:"white",fontWeight:600,fontSize:12,whiteSpace:"nowrap",flex:1}},column.headerFormatter?column.headerFormatter(column,colIndex):column.headerText||column.text),showSort&&react.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,minWidth:40,minHeight:24,position:"relative",overflow:"visible"},title:`Sort by ${column.text}`},column.sortCaret?column.sortCaret(sort.field===column.dataField?sort.order:null,column):react.createElement(DefaultSortCaret,{order:sort.field===column.dataField?sort.order:null,column})))})(),resizable&&react.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:6,cursor:"col-resize",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},onMouseDown:e=>{e.preventDefault(),e.stopPropagation();const cell=e.currentTarget.parentElement;if(cell){const startX=e.clientX,startWidth=cell.offsetWidth,dataField=column.dataField,handleMouseMove=moveEvent=>{const deltaX=moveEvent.clientX-startX,newWidth=Math.max(50,Math.min(800,startWidth+deltaX));cell.style.width=`${newWidth}px`,cell.style.minWidth=`${newWidth}px`,cell.style.maxWidth=`${newWidth}px`,document.querySelectorAll(`[data-column="${dataField}"]`).forEach((el=>{el.style.width=`${newWidth}px`,el.style.minWidth=`${newWidth}px`,el.style.maxWidth=`${newWidth}px`}))},handleMouseUp=()=>{document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const finalWidth=cell.offsetWidth;resizeConfig?.onResizeEnd?.(dataField,finalWidth)};document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp),document.body.style.cursor="col-resize",document.body.style.userSelect="none",resizeConfig?.onResizeStart?.(dataField,startWidth)}}},react.createElement("div",{style:{width:3,height:"60%",background:"rgba(255,255,255,0.3)",borderRadius:2,transition:"background 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background=resizeConfig?.handleHoverColor||"#3b82f6"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255,255,255,0.3)"}})))})))),react.createElement(TableBody,{className:classNames.body,style:styles.body},0===processedData.length?react.createElement("tr",null,react.createElement("td",{colSpan:visibleColumns.length+("checkbox"===resolvedRowSelection?.mode?1:0)+(expandable?1:0)+(showRowNumber?1:0)},react.createElement(EmptyState,{className:classNames.empty,style:styles.empty},react.createElement(EmptyIcon,null),react.createElement("span",null,emptyText)))):processedData.map(((row,rowIndex)=>{const rowKey=getRowKey(row),rowSelected=isSelected(rowKey),rowExpanded=isExpanded(rowKey),checkboxProps=resolvedRowSelection?.getCheckboxProps?.(row),isExpandable=expandable?.rowExpandable?.(row)??!0,rowClass="function"==typeof rowClassName?rowClassName(row,rowIndex):rowClassName,rowStyles="function"==typeof rowStyle?rowStyle(row,rowIndex):rowStyle,selectedStyle=rowSelected?"function"==typeof resolvedRowSelection?.selectedRowStyle?resolvedRowSelection.selectedRowStyle(row):resolvedRowSelection?.selectedRowStyle:void 0,hasCustomBgColor=rowSelected&&selectedStyle&&(selectedStyle.backgroundColor||selectedStyle.background),isRowDisabled=!!checkboxProps?.disabled,disabledStyle=isRowDisabled?nonSelectableStyle||{backgroundColor:"#f3f4f6",opacity:.7}:void 0;return react.createElement(react.Fragment,{key:rowKey},react.createElement(TableRow,{$selected:rowSelected,$clickable:!!onRowClick||"single"===resolvedRowSelection?.mode||!0===expandable?.expandRowByClick,$disabled:isRowDisabled,$hasCustomSelectedStyle:!!hasCustomBgColor,"data-custom-selected":hasCustomBgColor?"true":void 0,className:`${classNames.row||""} ${rowClass||""} ${rowSelected?"function"==typeof resolvedRowSelection?.selectedRowClassName?resolvedRowSelection.selectedRowClassName(row):resolvedRowSelection?.selectedRowClassName||"":""}`,style:{...styles.row,...rowStyles,...selectedStyle,...disabledStyle},onClick:e=>handleRowClick(row,rowIndex,e),onDoubleClick:e=>{isRowDisabled||onRowDoubleClick?.(row,rowIndex,e)},role:"row","aria-selected":rowSelected},"checkbox"===resolvedRowSelection?.mode&&react.createElement(TableCell,{$align:"center",$compact:compact,$padding:cellPadding,$disabled:isRowDisabled},react.createElement(Checkbox,{checked:rowSelected,disabled:checkboxProps?.disabled,onChange:e=>handleCheckboxChange(row,e),onClick:e=>e.stopPropagation()})),expandable&&react.createElement(TableCell,{$align:"center",$compact:compact,$padding:cellPadding,$disabled:isRowDisabled},isExpandable&&react.createElement(ExpandButton,{$expanded:rowExpanded,onClick:e=>handleExpandClick(row,e)},expandable.expandIcon?expandable.expandIcon({expanded:rowExpanded,row,onExpand:()=>toggleExpand(row)}):react.createElement(ExpandIcon,null))),showRowNumber&&react.createElement(TableCell,{$align:"center",$compact:compact,$padding:cellPadding,$disabled:isRowDisabled,style:{width:rowNumberWidth,color:"#6b7280",fontWeight:500}},rowNumberRender?rowNumberRender(rowIndex+1,row):rowIndex+1+page*pageSize),renderColumns.map(((column,colIndex)=>{const cellClass="function"==typeof column.classes?column.classes((0,hooks.LJ)(row,column.dataField),row,rowIndex,colIndex):column.classes,cellStyle="function"==typeof column.style?column.style((0,hooks.LJ)(row,column.dataField),row,rowIndex,colIndex):column.style,cellResizeStyle=resizable?(0,columnResize.Uw)(column,columnWidths,resizable,isResizing):{},editInfo=getCellEditableInfo(column,row,rowIndex,colIndex),isRowDisabled=!!checkboxProps?.disabled;let isEffectivelyEditable=editInfo.isEditable;if(resolvedRowSelection&&isRowDisabled)if(hasAllowedEditingFields){const isAllowed=isFieldAllowedForDisabledRow(column.dataField);isEffectivelyEditable=isAllowed}else isEffectivelyEditable=!1;const isInAllowedCells=!!(resolvedRowSelection&&isRowDisabled&&hasAllowedEditingFields&&isFieldAllowedForDisabledRow(column.dataField)),cellContent=isEffectivelyEditable&&"none"!==editMode?editInfo.customEditor?editInfo.customEditor:react.createElement(EditableCell,{$editing:editingCell?.row===rowIndex&&editingCell?.field===column.dataField,$showEditIcon:showEditIcon},renderCellContent(row,column,rowIndex,colIndex)):renderCellContent(row,column,rowIndex,colIndex);return react.createElement(TableCell,{key:column.dataField,$align:column.align||"left",$compact:compact,$padding:cellPadding,$pinned:column.pinned,$hasCustomClass:!!cellClass,$disabled:isRowDisabled,$isEditable:isEffectivelyEditable,$isInAllowedCells:isInAllowedCells,className:cellClass||classNames.cell,style:{...styles.cell,...cellStyle,...cellResizeStyle},"data-column":column.dataField,onClick:e=>handleCellClick(row,rowIndex,column,colIndex,e),onDoubleClick:e=>{e.stopPropagation(),handleCellDoubleClick(row,rowIndex,column,colIndex,e)},role:"gridcell"},react.createElement(TableCellContent,{$hasFormatter:!!column.formatter},cellContent))}))),expandable&&rowExpanded&&isExpandable&&react.createElement(ExpandedRow,null,react.createElement(ExpandedCell,{colSpan:visibleColumns.length+("checkbox"===resolvedRowSelection?.mode?1:0)+(expandable?1:0)+(showRowNumber?1:0)},expandable.expandedRowRender?.(row,rowIndex,rowExpanded))))}))),showFooter&&react.createElement(TableFooter,{className:classNames.footer,style:styles.footer},react.createElement(FooterRow,{className:classNames.footerRow,style:styles.footerRow},"checkbox"===resolvedRowSelection?.mode&&react.createElement(FooterCell,{$align:"center",$compact:compact}),expandable&&react.createElement(FooterCell,{$align:"center",$compact:compact}),showRowNumber&&react.createElement(FooterCell,{$align:"center",$compact:compact}),renderColumns.map((column=>react.createElement(FooterCell,{key:column.dataField,$align:column.align||"left",$compact:compact,className:classNames.footerCell,style:styles.footerCell},"function"==typeof column.footer?column.footer(column,data):column.footerFormatter?column.footerFormatter(column,data):column.footer))))))),(()=>{if(!pagination)return null;const actualTotalPages=Math.ceil(calculatedTotal/pageSize)||1,startItem=calculatedTotal>0?page*pageSize+1:0,actualDataCount=resolvedRemote?data.length:processedData.length,endItem=Math.min(page*pageSize+actualDataCount,calculatedTotal),showTotal=!0===resolvedPaginationConfig?.showTotal?`Showing ${startItem} to ${endItem} of ${calculatedTotal} Results`:"function"==typeof resolvedPaginationConfig?.showTotal?resolvedPaginationConfig.showTotal(calculatedTotal,[startItem,endItem]):null;return react.createElement(PaginationWrapper,{className:classNames.pagination,style:styles.pagination},react.createElement(ToolbarGroup,null,("checkbox"===resolvedRowSelection?.mode||isSelectRow)&&selectedKeys.size>0&&react.createElement(SelectionIndicator,{onClick:()=>{const selectedRows=data.filter((row=>selectedKeys.has(getRowKey(row))));resolvedRowSelection?.onChange?.(Array.from(selectedKeys),selectedRows),onSelectedRow?.(selectedRows)}},react.createElement(SelectionCount,{key:selectedKeys.size,$animate:selectionAnimation},selectedKeys.size),react.createElement("span",null,"Selected")),!1!==resolvedPaginationConfig?.showSizeChanger&&react.createElement(PageSizeSelect,{value:pageSize,onChange:e=>handlePageSizeChange(Number(e.target.value))},(resolvedPaginationConfig?.pageSizeOptions||[10,20,30,50]).map((size=>react.createElement("option",{key:size,value:size},size))))),react.createElement(PaginationControls,null,react.createElement(PageButton,{onClick:()=>handlePageChange(0),disabled:0===page},react.createElement(ChevronsLeftIcon,null)),react.createElement(PageButton,{onClick:()=>handlePageChange(page-1),disabled:0===page},react.createElement(ChevronLeftIcon,null)),(()=>{const pages=[];if(actualTotalPages<=5)for(let i=0;i<actualTotalPages;i++)pages.push(i);else if(page<3){for(let i=0;i<4;i++)pages.push(i);pages.push("..."),pages.push(actualTotalPages-1)}else if(page>actualTotalPages-4){pages.push(0),pages.push("...");for(let i=actualTotalPages-4;i<actualTotalPages;i++)pages.push(i)}else{pages.push(0),pages.push("...");for(let i=page-1;i<=page+1;i++)pages.push(i);pages.push("..."),pages.push(actualTotalPages-1)}return pages})().map(((p,i)=>"string"==typeof p?react.createElement("span",{key:`ellipsis-${i}`,style:{padding:"0 4px",color:"white"}},p):react.createElement(PageButton,{key:p,$active:p===page,onClick:()=>handlePageChange(p)},p+1))),react.createElement(PageButton,{onClick:()=>handlePageChange(page+1),disabled:page>=actualTotalPages-1},react.createElement(ChevronRightIcon,null)),react.createElement(PageButton,{onClick:()=>handlePageChange(actualTotalPages-1),disabled:page>=actualTotalPages-1},react.createElement(ChevronsRightIcon,null))),showTotal&&react.createElement(PaginationInfo,null,showTotal),resolvedPaginationConfig?.showQuickJumper&&(()=>{const handleQuickJump=input=>{const pageNum=parseInt(input.value,10);return!isNaN(pageNum)&&pageNum>=1&&pageNum<=actualTotalPages&&(handlePageChange(pageNum-1),input.value="",!0)};return react.createElement(QuickJumper,null,"Go to",react.createElement("input",{type:"number",min:1,max:actualTotalPages,placeholder:`1-${actualTotalPages}`,onKeyDown:e=>{if("Enter"===e.key){e.preventDefault();const target=e.target;handleQuickJump(target)&&target.blur()}},onBlur:e=>{const target=e.target;handleQuickJump(target)}}),react.createElement(PageButton,{onClick:()=>{const input=document.querySelector(`#${id} input[type="number"]`);input&&(handleQuickJump(input),input.blur())},style:{marginLeft:"4px",padding:"2px 8px"}},"Go"))})())})())}));Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{id:{defaultValue:null,description:"Unique table ID",name:"id",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"Data source",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"Column definitions",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},keyField:{defaultValue:null,description:"Key field for row identification",name:"keyField",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},loadingIndicator:{defaultValue:null,description:"Custom loading indicator",name:"loadingIndicator",required:!1,type:{name:"ReactNode"}},pagination:{defaultValue:null,description:"Enable pagination",name:"pagination",required:!1,type:{name:"boolean"}},paginationConfig:{defaultValue:null,description:"Pagination config",name:"paginationConfig",required:!1,type:{name:"Partial<TablePaginationConfig>"}},totalSize:{defaultValue:null,description:"Total records (for server-side)",name:"totalSize",required:!1,type:{name:"number"}},remote:{defaultValue:null,description:"Server-side mode (default: true) - data is fetched from server via onPageSizeChange.\nAuto-detection: If totalSize <= data.length, automatically uses client-side mode (remote=false)",name:"remote",required:!1,type:{name:"boolean"}},defaultSort:{defaultValue:null,description:"Default sort",name:"defaultSort",required:!1,type:{name:"TableSortState"}},sort:{defaultValue:null,description:"Controlled sort",name:"sort",required:!1,type:{name:"TableSortState"}},multiSort:{defaultValue:null,description:"Multi-column sort",name:"multiSort",required:!1,type:{name:"boolean"}},filterable:{defaultValue:null,description:"Enable column filters",name:"filterable",required:!1,type:{name:"boolean"}},defaultFilters:{defaultValue:null,description:"Default filters",name:"defaultFilters",required:!1,type:{name:"TableFilterState"}},filters:{defaultValue:null,description:"Controlled filters",name:"filters",required:!1,type:{name:"TableFilterState"}},defaultShowFilters:{defaultValue:null,description:"Show filter row by default (when filterable is true)",name:"defaultShowFilters",required:!1,type:{name:"boolean"}},showFilters:{defaultValue:null,description:"Controlled show/hide filter row",name:"showFilters",required:!1,type:{name:"boolean"}},onShowFiltersChange:{defaultValue:null,description:"Callback when filter visibility changes",name:"onShowFiltersChange",required:!1,type:{name:"((visible: boolean) => void)"}},showFilterToggle:{defaultValue:null,description:"Show filter toggle button in toolbar",name:"showFilterToggle",required:!1,type:{name:"boolean"}},searchable:{defaultValue:null,description:"Enable global search",name:"searchable",required:!1,type:{name:"boolean"}},searchPlaceholder:{defaultValue:null,description:"Search placeholder",name:"searchPlaceholder",required:!1,type:{name:"string"}},defaultSearchValue:{defaultValue:null,description:"Default search value",name:"defaultSearchValue",required:!1,type:{name:"string"}},searchValue:{defaultValue:null,description:"Controlled search value",name:"searchValue",required:!1,type:{name:"string"}},searchDebounce:{defaultValue:null,description:"Search debounce delay",name:"searchDebounce",required:!1,type:{name:"number"}},rowSelection:{defaultValue:null,description:"Row selection config",name:"rowSelection",required:!1,type:{name:"TableSelectionConfig<T>"}},expandable:{defaultValue:null,description:"Row expand config",name:"expandable",required:!1,type:{name:"TableExpandConfig<T>"}},editMode:{defaultValue:null,description:"Edit mode (default: 'dblclick')",name:"editMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"dblclick"'}]}},showEditIcon:{defaultValue:null,description:"Show edit pencil icon on editable cells (default: false)",name:"showEditIcon",required:!1,type:{name:"boolean"}},onCellEdit:{defaultValue:null,description:"On cell edit",name:"onCellEdit",required:!1,type:{name:"((value: any, dataField: string, row: T, rowIndex: number) => void)"}},exportable:{defaultValue:null,description:"Enable export button",name:"exportable",required:!1,type:{name:"boolean"}},exportFileName:{defaultValue:null,description:"Export file name",name:"exportFileName",required:!1,type:{name:"string"}},exportFormat:{defaultValue:null,description:"Export format: 'csv' (default) or 'excel'",name:"exportFormat",required:!1,type:{name:"enum",value:[{value:'"csv"'},{value:'"excel"'}]}},columnToggle:{defaultValue:null,description:"Enable column toggle",name:"columnToggle",required:!1,type:{name:"boolean"}},columnReorder:{defaultValue:null,description:"Enable column reorder",name:"columnReorder",required:!1,type:{name:"boolean"}},columnResize:{defaultValue:null,description:"Enable column resize",name:"columnResize",required:!1,type:{name:"boolean"}},bordered:{defaultValue:null,description:"Bordered style",name:"bordered",required:!1,type:{name:"boolean"}},striped:{defaultValue:null,description:"Striped rows",name:"striped",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"Hoverable rows",name:"hover",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"Compact/dense mode",name:"compact",required:!1,type:{name:"boolean"}},cellPadding:{defaultValue:null,description:"Custom cell padding (e.g., '2px', '4px 6px'). Default is '2px'",name:"cellPadding",required:!1,type:{name:"string"}},stickyHeader:{defaultValue:null,description:"Fixed header",name:"stickyHeader",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"Table max height (for sticky header)",name:"maxHeight",required:!1,type:{name:"string | number"}},rowClassName:{defaultValue:null,description:"Row class name",name:"rowClassName",required:!1,type:{name:"string | ((row: T, rowIndex: number) => string)"}},rowStyle:{defaultValue:null,description:"Row style",name:"rowStyle",required:!1,type:{name:"CSSProperties | ((row: T, rowIndex: number) => CSSProperties)"}},classNames:{defaultValue:null,description:"Custom class names",name:"classNames",required:!1,type:{name:"TableClassNames"}},styles:{defaultValue:null,description:"Custom styles",name:"styles",required:!1,type:{name:"TableStyles"}},className:{defaultValue:null,description:"Root className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Root style",name:"style",required:!1,type:{name:"CSSProperties"}},emptyText:{defaultValue:null,description:"Empty state content",name:"emptyText",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"Called when table state changes",name:"onChange",required:!1,type:{name:"((info: TableChangeInfo) => void)"}},onPageChange:{defaultValue:null,description:"Called on page change",name:"onPageChange",required:!1,type:{name:"((page: number, pageSize: number) => void)"}},onSortChange:{defaultValue:null,description:"Called on sort change",name:"onSortChange",required:!1,type:{name:"((sort: TableSortState) => void)"}},onFilterChange:{defaultValue:null,description:"Called on filter change",name:"onFilterChange",required:!1,type:{name:"((filters: TableFilterState) => void)"}},onSearch:{defaultValue:null,description:"Called on search",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},onRowClick:{defaultValue:null,description:"Called on row click",name:"onRowClick",required:!1,type:{name:"((row: T, rowIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onRowDoubleClick:{defaultValue:null,description:"Called on row double click",name:"onRowDoubleClick",required:!1,type:{name:"((row: T, rowIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onClearFilters:{defaultValue:null,description:"Called on clear all filters",name:"onClearFilters",required:!1,type:{name:"(() => void)"}},toolbar:{defaultValue:null,description:"Custom toolbar render",name:"toolbar",required:!1,type:{name:"ReactNode | ((props: { searchValue: string; onSearch: (value: string) => void; onClearFilters: () => void; onExport: () => void; }) => ReactNode)"}},hideToolbar:{defaultValue:null,description:"Hide toolbar",name:"hideToolbar",required:!1,type:{name:"boolean"}},showFooter:{defaultValue:null,description:"Show footer",name:"showFooter",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"Table caption",name:"caption",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"ARIA label",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"ARIA labelledby",name:"aria-labelledby",required:!1,type:{name:"string"}},isDelete:{defaultValue:null,description:"Enable delete action",name:"isDelete",required:!1,type:{name:"boolean"}},isEditModify:{defaultValue:null,description:"Enable edit/modify action",name:"isEditModify",required:!1,type:{name:"boolean"}},isUpdate:{defaultValue:null,description:"Alias for isEditModify",name:"isUpdate",required:!1,type:{name:"boolean"}},isExport:{defaultValue:null,description:"Enable export button (alias for exportable)",name:"isExport",required:!1,type:{name:"boolean"}},isView:{defaultValue:null,description:"Show view button",name:"isView",required:!1,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"On delete action",name:"onDelete",required:!1,type:{name:"((row: T, rowIndex: number) => void)"}},onEdit:{defaultValue:null,description:"On edit action",name:"onEdit",required:!1,type:{name:"((row: T, rowIndex: number) => void)"}},onView:{defaultValue:null,description:"On view action",name:"onView",required:!1,type:{name:"((row: T, rowIndex: number) => void)"}},isSelectRow:{defaultValue:null,description:"Enable row selection (shorthand)",name:"isSelectRow",required:!1,type:{name:"boolean"}},getNonSelectableRows:{defaultValue:null,description:"Array of row IDs (keyField values) that cannot be selected",name:"getNonSelectableRows",required:!1,type:{name:"string[]"}},nonSelectableStyle:{defaultValue:null,description:"Style for non-selectable rows",name:"nonSelectableStyle",required:!1,type:{name:"CSSProperties"}},fileName:{defaultValue:null,description:"Export file name (alias for exportFileName)",name:"fileName",required:!1,type:{name:"string"}},hideExcelSheet:{defaultValue:null,description:"Hide export sheet button or array of fields to exclude from export",name:"hideExcelSheet",required:!1,type:{name:"boolean | string[]"}},onSelectedRow:{defaultValue:null,description:"Callback when rows are selected (simplified)",name:"onSelectedRow",required:!1,type:{name:"((rows: T[]) => void)"}},selectedRowStyle:{defaultValue:null,description:"Custom style for selected rows (when using isSelectRow)",name:"selectedRowStyle",required:!1,type:{name:"CSSProperties | ((row: T) => CSSProperties)"}},selectedRowClassName:{defaultValue:null,description:"Custom class for selected rows (when using isSelectRow)",name:"selectedRowClassName",required:!1,type:{name:"string | ((row: T) => string)"}},onUpdateItem:{defaultValue:null,description:"Callback when an item is updated",name:"onUpdateItem",required:!1,type:{name:"((value: any, dataField: string, id: string) => void)"}},onPageSizeChange:{defaultValue:null,description:"Callback when page or size changes",name:"onPageSizeChange",required:!1,type:{name:"((page: number, size: number) => void)"}},onFilter:{defaultValue:null,description:"Callback when filter changes with full context",name:"onFilter",required:!1,type:{name:'((type: "search" | "filter" | "sort", filter: TableFilterState, page: number, size: number) => void)'}},clearAllFilter:{defaultValue:null,description:"Callback to clear all filters (user-defined reset logic)",name:"clearAllFilter",required:!1,type:{name:"(() => void)"}},dynamicStylingFields:{defaultValue:null,description:"Dynamic styling fields configuration",name:"dynamicStylingFields",required:!1,type:{name:"string[]"}},fieldTypeConfig:{defaultValue:null,description:"Field type configuration for dynamic rendering",name:"fieldTypeConfig",required:!1,type:{name:"FieldTypeConfig<T>"}},showRowNumber:{defaultValue:null,description:"Show row number column",name:"showRowNumber",required:!1,type:{name:"boolean"}},rowNumberWidth:{defaultValue:null,description:"Row number column width",name:"rowNumberWidth",required:!1,type:{name:"string | number"}},rowNumberTitle:{defaultValue:null,description:"Row number column title",name:"rowNumberTitle",required:!1,type:{name:"string"}},rowNumberRender:{defaultValue:null,description:"Custom row number render",name:"rowNumberRender",required:!1,type:{name:"((rowIndex: number, row: T) => ReactNode)"}},bulkActions:{defaultValue:null,description:"Enable bulk actions",name:"bulkActions",required:!1,type:{name:"boolean"}},bulkActionItems:{defaultValue:null,description:"Bulk action items",name:"bulkActionItems",required:!1,type:{name:"{ key: string; label: string; icon?: ReactNode; danger?: boolean; disabled?: boolean; onClick: (selectedRows: T[], selectedKeys: string[]) => void; }[] | undefined"}},onBulkAction:{defaultValue:null,description:"On bulk action",name:"onBulkAction",required:!1,type:{name:"((action: string, selectedRows: T[], selectedKeys: string[]) => void)"}},printable:{defaultValue:null,description:"Enable print button",name:"printable",required:!1,type:{name:"boolean"}},printTitle:{defaultValue:null,description:"Print title",name:"printTitle",required:!1,type:{name:"string"}},onPrint:{defaultValue:null,description:"On print",name:"onPrint",required:!1,type:{name:"(() => void)"}},copyable:{defaultValue:null,description:"Enable copy button",name:"copyable",required:!1,type:{name:"boolean"}},onCopy:{defaultValue:null,description:"On copy",name:"onCopy",required:!1,type:{name:"((data: T[]) => void)"}},refreshable:{defaultValue:null,description:"Enable refresh button",name:"refreshable",required:!1,type:{name:"boolean"}},onRefresh:{defaultValue:null,description:"On refresh",name:"onRefresh",required:!1,type:{name:"(() => void)"}},autoRefreshInterval:{defaultValue:null,description:"Auto refresh interval (ms)",name:"autoRefreshInterval",required:!1,type:{name:"number"}},highlightedRowKeys:{defaultValue:null,description:"Highlighted row keys",name:"highlightedRowKeys",required:!1,type:{name:"string[]"}},highlightRowStyle:{defaultValue:null,description:"Highlight row style",name:"highlightRowStyle",required:!1,type:{name:"CSSProperties"}},highlightRowClassName:{defaultValue:null,description:"Highlight row class",name:"highlightRowClassName",required:!1,type:{name:"string"}},getRowStatus:{defaultValue:null,description:"Get row status",name:"getRowStatus",required:!1,type:{name:'((row: T) => "error" | "warning" | "success" | "info" | null)'}},showRowStatus:{defaultValue:null,description:"Show row status indicator",name:"showRowStatus",required:!1,type:{name:"boolean"}},pinnedLeftColumns:{defaultValue:null,description:"Pinned left columns",name:"pinnedLeftColumns",required:!1,type:{name:"string[]"}},pinnedRightColumns:{defaultValue:null,description:"Pinned right columns",name:"pinnedRightColumns",required:!1,type:{name:"string[]"}},showSummary:{defaultValue:null,description:"Show summary row",name:"showSummary",required:!1,type:{name:"boolean"}},summaryData:{defaultValue:null,description:"Summary data",name:"summaryData",required:!1,type:{name:"Partial<T>"}},summaryRender:{defaultValue:null,description:"Custom summary render",name:"summaryRender",required:!1,type:{name:"((data: T[], column: TableColumn<T>) => ReactNode)"}},virtual:{defaultValue:null,description:"Enable virtual scrolling",name:"virtual",required:!1,type:{name:"boolean"}},virtualRowHeight:{defaultValue:null,description:"Virtual row height",name:"virtualRowHeight",required:!1,type:{name:"number"}},virtualBuffer:{defaultValue:null,description:"Virtual buffer size",name:"virtualBuffer",required:!1,type:{name:"number"}},responsive:{defaultValue:null,description:"Responsive mode",name:"responsive",required:!1,type:{name:"boolean"}},responsiveBreakpoint:{defaultValue:null,description:"Responsive breakpoint",name:"responsiveBreakpoint",required:!1,type:{name:"number"}},cardViewOnMobile:{defaultValue:null,description:"Card view on mobile",name:"cardViewOnMobile",required:!1,type:{name:"boolean"}},mobileCardRender:{defaultValue:null,description:"Mobile card render",name:"mobileCardRender",required:!1,type:{name:"((row: T, rowIndex: number) => ReactNode)"}},contextMenu:{defaultValue:null,description:"Enable context menu",name:"contextMenu",required:!1,type:{name:"boolean"}},contextMenuItems:{defaultValue:null,description:"Context menu items",name:"contextMenuItems",required:!1,type:{name:"{ key: string; label: string; icon?: ReactNode; danger?: boolean; disabled?: boolean | ((row: T) => boolean); onClick: (row: T, rowIndex: number) => void; }[] | undefined"}},keyboardNavigation:{defaultValue:null,description:"Enable keyboard navigation",name:"keyboardNavigation",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"On key down",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<Element>, row: T | null, rowIndex: number | null) => void)"}},draggable:{defaultValue:null,description:"Enable row dragging",name:"draggable",required:!1,type:{name:"boolean"}},onRowDragEnd:{defaultValue:null,description:"On row drag end",name:"onRowDragEnd",required:!1,type:{name:"((fromIndex: number, toIndex: number, data: T[]) => void)"}},inlineAdd:{defaultValue:null,description:"Enable inline add row",name:"inlineAdd",required:!1,type:{name:"boolean"}},addRowPosition:{defaultValue:null,description:"Add row position",name:"addRowPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},onAddRow:{defaultValue:null,description:"On add row",name:"onAddRow",required:!1,type:{name:"((row: Partial<T>) => void)"}},defaultNewRowValues:{defaultValue:null,description:"Default new row values",name:"defaultNewRowValues",required:!1,type:{name:"Partial<T>"}},rowClickBehavior:{defaultValue:null,description:"Row click behavior",name:"rowClickBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"select"'},{value:'"custom"'},{value:'"expand"'},{value:'"edit"'}]}},transformData:{defaultValue:null,description:"Transform data before render",name:"transformData",required:!1,type:{name:"((data: T[]) => T[])"}},error:{defaultValue:null,description:"Error state",name:"error",required:!1,type:{name:"ReactNode"}},onRetry:{defaultValue:null,description:"On error retry",name:"onRetry",required:!1,type:{name:"(() => void)"}},skeletonLoading:{defaultValue:null,description:"Show skeleton loading",name:"skeletonLoading",required:!1,type:{name:"boolean"}},skeletonRowCount:{defaultValue:null,description:"Skeleton row count",name:"skeletonRowCount",required:!1,type:{name:"number"}},persistState:{defaultValue:null,description:"Enable state persistence (localStorage)",name:"persistState",required:!1,type:{name:"boolean"}},persistStateKey:{defaultValue:null,description:"State persistence key",name:"persistStateKey",required:!1,type:{name:"string"}},persistStateFields:{defaultValue:null,description:"Persist which states",name:"persistStateFields",required:!1,type:{name:'("search" | "filter" | "sort" | "columns" | "pagination")[]'}},toolbarPosition:{defaultValue:null,description:"Toolbar position",name:"toolbarPosition",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"top"'},{value:'"bottom"'}]}},toolbarLeft:{defaultValue:null,description:"Left toolbar content",name:"toolbarLeft",required:!1,type:{name:"ReactNode"}},toolbarRight:{defaultValue:null,description:"Right toolbar content",name:"toolbarRight",required:!1,type:{name:"ReactNode"}},toolbarCenter:{defaultValue:null,description:"Center toolbar content",name:"toolbarCenter",required:!1,type:{name:"ReactNode"}},hideHeader:{defaultValue:null,description:"Hide header",name:"hideHeader",required:!1,type:{name:"boolean"}},headerHeight:{defaultValue:null,description:"Header height",name:"headerHeight",required:!1,type:{name:"string | number"}},multiLineHeader:{defaultValue:null,description:"Multi-line header",name:"multiLineHeader",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"16"},description:"Table size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:null,description:"Table theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"auto"'}]}},primaryColor:{defaultValue:null,description:"Primary color",name:"primaryColor",required:!1,type:{name:"string"}},fixedLayout:{defaultValue:null,description:"Fixed table layout",name:"fixedLayout",required:!1,type:{name:"boolean"}},tableWidth:{defaultValue:null,description:"Table width",name:"tableWidth",required:!1,type:{name:"string | number"}},tableMinWidth:{defaultValue:null,description:"Table min width",name:"tableMinWidth",required:!1,type:{name:"string | number"}},onRowMouseEnter:{defaultValue:null,description:"On row mouse enter",name:"onRowMouseEnter",required:!1,type:{name:"((row: T, rowIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onRowMouseLeave:{defaultValue:null,description:"On row mouse leave",name:"onRowMouseLeave",required:!1,type:{name:"((row: T, rowIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onCellClick:{defaultValue:null,description:"On cell click",name:"onCellClick",required:!1,type:{name:"((cell: any, row: T, rowIndex: number, column: TableColumn<T>, columnIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onCellDoubleClick:{defaultValue:null,description:"On cell double click",name:"onCellDoubleClick",required:!1,type:{name:"((cell: any, row: T, rowIndex: number, column: TableColumn<T>, columnIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onHeaderClick:{defaultValue:null,description:"On header click",name:"onHeaderClick",required:!1,type:{name:"((column: TableColumn<T>, columnIndex: number, e: MouseEvent<Element, MouseEvent>) => void)"}},onDataChange:{defaultValue:null,description:"On data change (after sort/filter/page)",name:"onDataChange",required:!1,type:{name:"((processedData: T[], info: TableChangeInfo) => void)"}},announceChanges:{defaultValue:null,description:"Enable screen reader announcements",name:"announceChanges",required:!1,type:{name:"boolean"}},screenReaderText:{defaultValue:null,description:"Custom screen reader text",name:"screenReaderText",required:!1,type:{name:"{ sortAscending?: string; sortDescending?: string; filterActive?: string | undefined; rowSelected?: string | undefined; rowExpanded?: string | undefined; } | undefined"}},resizable:{defaultValue:{value:"true"},description:"Enable column resizing via drag handle",name:"resizable",required:!1,type:{name:"boolean"}},resizeConfig:{defaultValue:null,description:"Column resize configuration\nOnly used when resizable={true}",name:"resizeConfig",required:!1,type:{name:"{ minWidth?: number; maxWidth?: number; autoFit?: boolean | undefined; onResize?: ((columnWidths: Record<string, number>) => void) | undefined; onResizeStart?: ((dataField: string, width: number) => void) | undefined; ... 4 more ...; handleWidth?: number | undefined; } | undefined"}},reorderable:{defaultValue:{value:"true"},description:"Enable column reordering via long press and drag",name:"reorderable",required:!1,type:{name:"boolean"}},reorderConfig:{defaultValue:null,description:"Column reorder configuration\nOnly used when reorderable={true}",name:"reorderConfig",required:!1,type:{name:"{ longPressDelay?: number; onReorder?: ((newColumns: TableColumn<T>[], fromIndex: number, toIndex: number) => void); onDragStart?: ((column: TableColumn<T>, index: number) => void) | undefined; ... 4 more ...; animated?: boolean | undefined; } | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/core-components/src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/src/components/Table/columnResize.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uw:()=>getColumnStyle,iX:()=>useColumnResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const pulseGlow=styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% { 
    box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.6);
  }
`,slideIn=styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  from { 
    transform: scaleY(0);
    opacity: 0;
  }
  to { 
    transform: scaleY(1);
    opacity: 1;
  }
`,ResizeHandle=(styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.I4.div`
  position: absolute;
  top: 0;
  right: -2px;
  width: ${({$handleWidth})=>($handleWidth||8)+4}px;
  height: 100%;
  cursor: col-resize;
  background: transparent;
  z-index: 10;
  user-select: none;
  touch-action: none;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Visible handle bar */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    width: 3px;
    height: 60%;
    background: ${({$isResizing,$handleColor,$handleHoverColor})=>$isResizing?$handleHoverColor||"#3b82f6":$handleColor||"rgba(255, 255, 255, 0.25)"};
    border-radius: 2px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleY(${({$isResizing})=>$isResizing?1:.7});
  }

  /* Hover effect - expand and glow */
  &:hover::after {
    background: ${({$handleHoverColor})=>$handleHoverColor||"#3b82f6"};
    transform: scaleY(1);
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  }

  /* Active/resizing state */
  ${({$isResizing})=>$isResizing&&styled_components__WEBPACK_IMPORTED_MODULE_1__.AH`
      &::after {
        animation: ${pulseGlow} 1s ease-in-out infinite;
        transform: scaleY(1.1);
      }

      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: col-resize;
        z-index: 9999;
        background: rgba(59, 130, 246, 0.02);
      }
    `}

  /* Grip dots pattern */
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 12px;
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    );
    background-size: 4px 4px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`),ResizeLine=styled_components__WEBPACK_IMPORTED_MODULE_1__.I4.div`
  position: fixed;
  top: 0;
  left: ${({$left})=>$left}px;
  width: 2px;
  height: 100vh;
  pointer-events: none;
  z-index: 10000;
  opacity: ${({$visible})=>$visible?1:0};
  transition: opacity 0.15s ease, transform 0.1s ease;
  transform: ${({$visible})=>$visible?"scaleX(1)":"scaleX(0)"};
  transform-origin: center;

  /* Gradient line with glow effect */
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({$color})=>$color||"#3b82f6"} 5%,
    ${({$color})=>$color||"#3b82f6"} 95%,
    transparent 100%
  );
  box-shadow: 
    0 0 10px ${({$color})=>$color||"#3b82f6"},
    0 0 20px ${({$color})=>($color||"#3b82f6")+"80"},
    0 0 30px ${({$color})=>($color||"#3b82f6")+"40"};

  /* Animated shimmer effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${slideIn} 0.3s ease-out;
  }
`;function useColumnResize({columns,config={},enabled=!0,tableId}){const{minWidth=50,maxWidth=800,autoFit=!0,onResize,onResizeStart,onResizeEnd,defaultWidths={},handleColor,handleHoverColor,handleWidth=4}=config,initialWidths=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const widths={};return columns.forEach((col=>{"number"==typeof col.width?widths[col.dataField]=col.width:"string"==typeof col.width&&col.width.endsWith("px")?widths[col.dataField]=parseInt(col.width,10):defaultWidths[col.dataField]&&(widths[col.dataField]=defaultWidths[col.dataField])})),widths}),[columns,defaultWidths]),[columnWidths,setColumnWidths]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialWidths),[isResizing,setIsResizing]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[resizingColumn,setResizingColumn]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),startXRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),startWidthRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),currentColumnRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),headerRefMap=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setColumnWidths((prev=>{const newWidths={...prev};return columns.forEach((col=>{col.dataField in newWidths||("number"==typeof col.width?newWidths[col.dataField]=col.width:"string"==typeof col.width&&col.width.endsWith("px")?newWidths[col.dataField]=parseInt(col.width,10):defaultWidths[col.dataField]&&(newWidths[col.dataField]=defaultWidths[col.dataField]))})),newWidths}))}),[columns,defaultWidths]);const handleMouseMove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{if(!currentColumnRef.current)return;const deltaX=e.clientX-startXRef.current;let newWidth=startWidthRef.current+deltaX;const column=columns.find((col=>col.dataField===currentColumnRef.current)),colMinWidth="number"==typeof column?.minWidth?column.minWidth:"string"==typeof column?.minWidth&&column.minWidth.endsWith("px")?parseInt(column.minWidth,10):minWidth,colMaxWidth="number"==typeof column?.maxWidth?column.maxWidth:"string"==typeof column?.maxWidth&&column.maxWidth.endsWith("px")?parseInt(column.maxWidth,10):maxWidth;newWidth=Math.max(colMinWidth,Math.min(colMaxWidth,newWidth)),setColumnWidths((prev=>({...prev,[currentColumnRef.current]:newWidth})))}),[columns,minWidth,maxWidth]),handleMouseUp=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(currentColumnRef.current){const finalWidth=columnWidths[currentColumnRef.current];onResizeEnd?.(currentColumnRef.current,finalWidth),onResize?.(columnWidths)}setIsResizing(!1),setResizingColumn(null),currentColumnRef.current=null,document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp),document.body.style.cursor="",document.body.style.userSelect=""}),[columnWidths,handleMouseMove,onResize,onResizeEnd]),handleMouseDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((e,dataField,headerRef)=>{if(!enabled)return;e.preventDefault(),e.stopPropagation();const headerEl=headerRef.current;if(!headerEl)return;const currentWidth=headerEl.offsetWidth;startXRef.current=e.clientX,startWidthRef.current=currentWidth,currentColumnRef.current=dataField,setIsResizing(!0),setResizingColumn(dataField),onResizeStart?.(dataField,currentWidth),document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}),[enabled,handleMouseMove,handleMouseUp,onResizeStart]),handleDoubleClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((e,dataField)=>{if(!enabled||!autoFit)return;e.preventDefault(),e.stopPropagation();const cells=document.querySelectorAll(`[data-column="${dataField}"]`);let maxContentWidth=minWidth;cells.forEach((cell=>{const span=document.createElement("span");span.style.visibility="hidden",span.style.position="absolute",span.style.whiteSpace="nowrap",span.style.font=window.getComputedStyle(cell).font,span.textContent=cell.innerText,document.body.appendChild(span),maxContentWidth=Math.max(maxContentWidth,span.offsetWidth+24),document.body.removeChild(span)})),maxContentWidth=Math.min(maxContentWidth,maxWidth),setColumnWidths((prev=>{const newWidths={...prev,[dataField]:maxContentWidth};return onResize?.(newWidths),newWidths})),onResizeEnd?.(dataField,maxContentWidth)}),[enabled,autoFit,minWidth,maxWidth,onResize,onResizeEnd]),getResizeHandle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((dataField,headerRef)=>enabled?(headerRefMap.current.set(dataField,headerRef),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResizeHandle,{$isResizing:resizingColumn===dataField,$handleColor:handleColor,$handleHoverColor:handleHoverColor,$handleWidth:handleWidth,onMouseDown:e=>handleMouseDown(e,dataField,headerRef),onDoubleClick:e=>handleDoubleClick(e,dataField),onClick:e=>e.stopPropagation()})):null),[enabled,resizingColumn,handleColor,handleHoverColor,handleWidth,handleMouseDown,handleDoubleClick]),resetWidths=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setColumnWidths(initialWidths),onResize?.(initialWidths)}),[initialWidths,onResize]),setColumnWidth=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((dataField,width)=>{const constrainedWidth=Math.max(minWidth,Math.min(maxWidth,width));setColumnWidths((prev=>{const newWidths={...prev,[dataField]:constrainedWidth};return onResize?.(newWidths),newWidths}))}),[minWidth,maxWidth,onResize]);return{columnWidths,getResizeHandle,resetWidths,setColumnWidth,isResizing,resizingColumn}}function getColumnStyle(column,columnWidths,resizable,isResizing){const style={};return resizable&&columnWidths[column.dataField]?(style.width=columnWidths[column.dataField],style.minWidth=columnWidths[column.dataField],style.maxWidth=columnWidths[column.dataField]):(column.width&&(style.width=column.width),column.minWidth&&(style.minWidth=column.minWidth),column.maxWidth&&(style.maxWidth=column.maxWidth)),resizable&&!isResizing&&(style.transition="width 0.2s cubic-bezier(0.4, 0, 0.2, 1)"),style}const ResizableHeaderCell=({children,dataField,resizable,getResizeHandle,style,className})=>{const headerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{ref:headerRef,style:{...style,position:"relative"},className,"data-column":dataField},children,resizable&&getResizeHandle(dataField,headerRef))};try{useColumnResize.displayName="useColumnResize",useColumnResize.__docgenInfo={description:"",displayName:"useColumnResize",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},config:{defaultValue:{value:"{}"},description:"",name:"config",required:!1,type:{name:"ColumnResizeConfig"}},enabled:{defaultValue:{value:"true"},description:"",name:"enabled",required:!1,type:{name:"boolean"}},tableId:{defaultValue:null,description:"",name:"tableId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/columnResize.tsx#useColumnResize"]={docgenInfo:useColumnResize.__docgenInfo,name:"useColumnResize",path:"src/core-components/src/components/Table/columnResize.tsx#useColumnResize"})}catch(__react_docgen_typescript_loader_error){}try{ResizeHandle.displayName="ResizeHandle",ResizeHandle.__docgenInfo={description:"",displayName:"ResizeHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/columnResize.tsx#ResizeHandle"]={docgenInfo:ResizeHandle.__docgenInfo,name:"ResizeHandle",path:"src/core-components/src/components/Table/columnResize.tsx#ResizeHandle"})}catch(__react_docgen_typescript_loader_error){}try{ResizeLine.displayName="ResizeLine",ResizeLine.__docgenInfo={description:"",displayName:"ResizeLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/columnResize.tsx#ResizeLine"]={docgenInfo:ResizeLine.__docgenInfo,name:"ResizeLine",path:"src/core-components/src/components/Table/columnResize.tsx#ResizeLine"})}catch(__react_docgen_typescript_loader_error){}try{ResizableHeaderCell.displayName="ResizableHeaderCell",ResizableHeaderCell.__docgenInfo={description:"",displayName:"ResizableHeaderCell",props:{dataField:{defaultValue:null,description:"",name:"dataField",required:!0,type:{name:"string"}},resizable:{defaultValue:null,description:"",name:"resizable",required:!0,type:{name:"boolean"}},getResizeHandle:{defaultValue:null,description:"",name:"getResizeHandle",required:!0,type:{name:"(dataField: string, headerRef: RefObject<HTMLElement>) => ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/columnResize.tsx#ResizableHeaderCell"]={docgenInfo:ResizableHeaderCell.__docgenInfo,name:"ResizableHeaderCell",path:"src/core-components/src/components/Table/columnResize.tsx#ResizableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/src/components/Table/filters.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KO:()=>getFilterComponent,U$:()=>TextFilter,Zv:()=>DateFilter,dN:()=>SelectFilter,yL:()=>NumberFilter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/src/utils/designTokens.ts"),_utils_hooks_useDebouncedValue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core-components/src/utils/hooks/useDebouncedValue.ts");const FilterContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  display: flex;
  align-items: center;
  gap: 3px;
`,FilterInputBase=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.input`
  width: 100%;
  height: 22px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: normal;
  color: #000000;
  border: 1px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#3b82f6"};
    box-shadow: 0 0 0 1px
      ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary?`${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary}20`:"#3b82f620"};
  }

  &::placeholder {
    color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.onSurface?`${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.onSurface}50`:"#94a3af"};
    font-size: 9px;
  }
`,FilterSelectBase=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.select`
  width: 100%;
  height: 22px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: normal;
  color: #000000;
  border: 1px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#3b82f6"};
    box-shadow: 0 0 0 1px
      ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary?`${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary}20`:"#3b82f620"};
  }
`,ComparatorSelect=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.select`
  width: 38px;
  height: 22px;
  padding: 0 2px;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  flex-shrink: 0;
  text-align: center;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#3b82f6"};
  }
`,DateInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.input`
  flex: 1;
  height: 22px;
  padding: 0 4px;
  font-size: 10px;
  border: 1px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  min-width: 80px;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#3b82f6"};
    box-shadow: 0 0 0 1px
      ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary?`${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary}20`:"#3b82f620"};
  }
`,ToggleButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.button`
  height: 22px;
  padding: 0 5px;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.outline||"#e2e8f0"};
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${({$active})=>$active?styled_components__WEBPACK_IMPORTED_MODULE_3__.AH`
          background: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#3b82f6"};
          color: white;
          border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#3b82f6"};
        `:styled_components__WEBPACK_IMPORTED_MODULE_3__.AH`
          background: white;
          color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.onSurface||"#374151"};

          &:hover {
            background: #f8fafc;
            border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_1__.L.primary||"#94a3b8"};
          }
        `}
`,TextFilterComponent=({column,value,onChange,options})=>{const{placeholder,className,style,defaultValue,delay=500,getFilter,onFilter,id,disabled}=options||{},[internalValue,setInternalValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue||""),internalValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(internalValue),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onChangeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange),onFilterRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFilter),lastInternalValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(internalValue);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{internalValueRef.current=internalValue}),[internalValue]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onChangeRef.current=onChange,onFilterRef.current=onFilter}),[onChange,onFilter]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const externalValue=value||"";externalValue!==lastInternalValueRef.current&&(setInternalValue(externalValue),lastInternalValueRef.current=externalValue)}),[value]);const[debouncedValue]=(0,_utils_hooks_useDebouncedValue__WEBPACK_IMPORTED_MODULE_2__.o)(internalValue,{wait:delay});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{lastInternalValueRef.current=debouncedValue||"",onChangeRef.current(debouncedValue||null),onFilterRef.current?.(debouncedValue)}),[debouncedValue]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{getFilter&&getFilter({get value(){return internalValueRef.current},setValue:newValue=>{setInternalValue(newValue),onChangeRef.current(newValue||null),onFilterRef.current?.(newValue)},clear:()=>{setInternalValue(""),onChangeRef.current(null),onFilterRef.current?.("")}})}),[getFilter]);const hasFocusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setInternalValue(e.target.value)}),[]),handleFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{hasFocusRef.current=!0}),[]),handleBlur=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{hasFocusRef.current=!1}),[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{hasFocusRef.current&&inputRef.current&&requestAnimationFrame((()=>{hasFocusRef.current&&inputRef.current&&inputRef.current.focus()}))}));const inputStyle={fontWeight:400,...style};return className?react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{ref:inputRef,type:"text",id,"data-filter-field":column.dataField,value:internalValue,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur,placeholder:placeholder||column.filterPlaceholder||`Filter ${column.text}...`,className,style:{width:"100%",fontWeight:400,...style},disabled}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterInputBase,{ref:inputRef,type:"text",id,"data-filter-field":column.dataField,value:internalValue,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur,placeholder:placeholder||column.filterPlaceholder||`Filter ${column.text}...`,style:inputStyle,disabled})};function TextFilter(optionsOrProps){if(!("column"in optionsOrProps)&&!("value"in optionsOrProps)&&!("onChange"in optionsOrProps)){const options=optionsOrProps,FilterWithOptions=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextFilterComponent,{...props,options});return FilterWithOptions.displayName="TextFilter",FilterWithOptions}const props=optionsOrProps;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextFilterComponent,props)}const NumberFilterComponent=({column,value,onChange,options})=>{const{placeholder,className,style,defaultValue,delay=500,defaultComparator="=",allowDecimal=!0,getFilter,onFilter,id,disabled,hideComparator,comparators=["=","!=",">",">=","<","<="]}=options||{},[number,setNumber]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.number||defaultValue?.number||""),[comparator,setComparator]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.comparator||defaultValue?.comparator||defaultComparator),numberRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(number),comparatorRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(comparator),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onChangeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange),onFilterRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFilter),lastNumberRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(number),lastComparatorRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(comparator);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{numberRef.current=number,comparatorRef.current=comparator}),[number,comparator]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onChangeRef.current=onChange,onFilterRef.current=onFilter}),[onChange,onFilter]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const externalNumber=value?.number||"",externalComparator=value?.comparator||defaultComparator;externalNumber!==lastNumberRef.current&&(setNumber(externalNumber),lastNumberRef.current=externalNumber),externalComparator!==lastComparatorRef.current&&(setComparator(externalComparator),lastComparatorRef.current=externalComparator)}),[value,defaultComparator]);const[debouncedNumber]=(0,_utils_hooks_useDebouncedValue__WEBPACK_IMPORTED_MODULE_2__.o)(number,{wait:delay});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{lastNumberRef.current=debouncedNumber||"",lastComparatorRef.current=comparatorRef.current;const newValue=debouncedNumber?{number:debouncedNumber,comparator:comparatorRef.current}:null;onChangeRef.current(newValue),onFilterRef.current?.(newValue)}),[debouncedNumber]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{getFilter&&getFilter({get value(){return numberRef.current?{number:numberRef.current,comparator:comparatorRef.current}:null},setValue:newValue=>{newValue?(setNumber(newValue.number),setComparator(newValue.comparator),onChangeRef.current(newValue),onFilterRef.current?.(newValue)):(setNumber(""),onChangeRef.current(null),onFilterRef.current?.(null))},clear:()=>{setNumber(""),setComparator(defaultComparator),onChangeRef.current(null),onFilterRef.current?.(null)}})}),[getFilter]);const hasFocusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),handleFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{hasFocusRef.current=!0}),[]),handleBlur=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{hasFocusRef.current=!1}),[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{hasFocusRef.current&&inputRef.current&&requestAnimationFrame((()=>{hasFocusRef.current&&inputRef.current&&inputRef.current.focus()}))}));const handleComparatorChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newComparator=>{if(setComparator(newComparator),number){const newValue={number,comparator:newComparator};onChangeRef.current(newValue),onFilterRef.current?.(newValue)}}),[number]),comparatorSymbols={"=":"=","!=":"≠",">":">",">=":"≥","<":"<","<=":"≤"},inputStyle={flex:1,fontWeight:400,...style},inputProps={type:"text",id,"data-filter-field":column.dataField,value:number,onChange:e=>{const val=e.target.value;(allowDecimal?/^[0-9.,]*$/:/^[0-9]*$/).test(val)&&setNumber(val)},onFocus:handleFocus,onBlur:handleBlur,placeholder:placeholder||column.filterPlaceholder||"Number...",disabled};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterContainer,null,!hideComparator&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComparatorSelect,{value:comparator,onChange:e=>handleComparatorChange(e.target.value),disabled},comparators.map((comp=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:comp,value:comp},comparatorSymbols[comp]||comp)))),className?react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{ref:inputRef,...inputProps,className,style:{flex:1,width:"100%",fontWeight:400,...style}}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterInputBase,{ref:inputRef,...inputProps,style:inputStyle}))};function NumberFilter(optionsOrProps){if(!("column"in optionsOrProps)&&!("value"in optionsOrProps)&&!("onChange"in optionsOrProps)){const options=optionsOrProps,FilterWithOptions=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(NumberFilterComponent,{...props,options});return FilterWithOptions.displayName="NumberFilter",FilterWithOptions}const props=optionsOrProps;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NumberFilterComponent,props)}const DateFilterComponent=({column,value,onChange,options})=>{const{className,style,defaultValue,defaultComparator="=",defaultRangeMode=!1,getFilter,onFilter,id,disabled,minDate,maxDate}=options||{},[startDate,setStartDate]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.startDate||defaultValue?.startDate||""),[endDate,setEndDate]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.endDate||defaultValue?.endDate||""),[diffFlag,setDiffFlag]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.diffFlag??defaultValue?.diffFlag??defaultRangeMode),[comparator,setComparator]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value?.comparator||defaultValue?.comparator||defaultComparator),stateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({startDate,endDate,diffFlag,comparator}),onChangeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange),onFilterRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFilter),lastValuesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({startDate,endDate,diffFlag,comparator});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{stateRef.current={startDate,endDate,diffFlag,comparator}}),[startDate,endDate,diffFlag,comparator]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onChangeRef.current=onChange,onFilterRef.current=onFilter}),[onChange,onFilter]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const externalStartDate=value?.startDate||"",externalEndDate=value?.endDate||"",externalDiffFlag=value?.diffFlag??defaultRangeMode,externalComparator=value?.comparator||defaultComparator;externalStartDate!==lastValuesRef.current.startDate&&(setStartDate(externalStartDate),lastValuesRef.current.startDate=externalStartDate),externalEndDate!==lastValuesRef.current.endDate&&(setEndDate(externalEndDate),lastValuesRef.current.endDate=externalEndDate),externalDiffFlag!==lastValuesRef.current.diffFlag&&(setDiffFlag(externalDiffFlag),lastValuesRef.current.diffFlag=externalDiffFlag),externalComparator!==lastValuesRef.current.comparator&&(setComparator(externalComparator),lastValuesRef.current.comparator=externalComparator)}),[value,defaultRangeMode,defaultComparator]);const[debouncedStartDate]=(0,_utils_hooks_useDebouncedValue__WEBPACK_IMPORTED_MODULE_2__.o)(startDate,{wait:500}),[debouncedEndDate]=(0,_utils_hooks_useDebouncedValue__WEBPACK_IMPORTED_MODULE_2__.o)(endDate,{wait:500});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{lastValuesRef.current={startDate:debouncedStartDate,endDate:debouncedEndDate,diffFlag,comparator};const newValue=debouncedStartDate||debouncedEndDate?{startDate:debouncedStartDate,endDate:debouncedEndDate,diffFlag,comparator}:null;onChangeRef.current(newValue),onFilterRef.current?.(newValue)}),[debouncedStartDate,debouncedEndDate,diffFlag,comparator]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{getFilter&&getFilter({get value(){const{startDate:s,endDate:e,diffFlag:d,comparator:c}=stateRef.current;return s||e?{startDate:s,endDate:e,diffFlag:d,comparator:c}:null},setValue:newValue=>{newValue?(setStartDate(newValue.startDate||""),setEndDate(newValue.endDate||""),setDiffFlag(newValue.diffFlag??defaultRangeMode),setComparator(newValue.comparator||defaultComparator),onChangeRef.current(newValue),onFilterRef.current?.(newValue)):(setStartDate(""),setEndDate(""),onChangeRef.current(null),onFilterRef.current?.(null))},clear:()=>{setStartDate(""),setEndDate(""),setDiffFlag(defaultRangeMode),setComparator(defaultComparator),onChangeRef.current(null),onFilterRef.current?.(null)}})}),[getFilter]);const handleStartDateChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setStartDate(e.target.value)}),[]),handleEndDateChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setEndDate(e.target.value)}),[]),handleDiffFlagChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setDiffFlag((prev=>!prev))}),[]),handleComparatorChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setComparator(e.target.value)}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterContainer,{className,style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleButton,{$active:diffFlag,onClick:handleDiffFlagChange,title:"Date range mode",disabled},diffFlag?"Range":"Single"),!diffFlag&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComparatorSelect,{value:comparator,onChange:handleComparatorChange,disabled,style:{fontWeight:400}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"="},"="),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:">="},"≥"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"<"},"<")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(DateInput,{type:"date",id,value:startDate,onChange:handleStartDateChange,disabled,min:minDate,max:maxDate,style:{fontWeight:400}}),diffFlag&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:{color:"#6b7280",fontSize:12,fontWeight:400}},"to"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(DateInput,{type:"date",value:endDate,onChange:handleEndDateChange,disabled,min:minDate,max:maxDate,style:{fontWeight:400}})))};function DateFilter(optionsOrProps){if(!("column"in optionsOrProps)&&!("value"in optionsOrProps)&&!("onChange"in optionsOrProps)){const options=optionsOrProps,FilterWithOptions=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(DateFilterComponent,{...props,options});return FilterWithOptions.displayName="DateFilter",FilterWithOptions}const props=optionsOrProps;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DateFilterComponent,props)}const SelectFilterComponent=({column,value,onChange,options})=>{const{placeholder="All",className,style,defaultValue,delay=300,options:customOptions,getFilter,onFilter,id,disabled}=options||{},[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue||""),selectedValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectedValue),onChangeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange),onFilterRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFilter),lastValueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectedValue);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{selectedValueRef.current=selectedValue}),[selectedValue]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onChangeRef.current=onChange,onFilterRef.current=onFilter}),[onChange,onFilter]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const externalValue=value||"";externalValue!==lastValueRef.current&&(setSelectedValue(externalValue),lastValueRef.current=externalValue)}),[value]);const[debouncedValue]=(0,_utils_hooks_useDebouncedValue__WEBPACK_IMPORTED_MODULE_2__.o)(selectedValue,{wait:delay});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{lastValueRef.current=debouncedValue||"",onChangeRef.current(debouncedValue||null),onFilterRef.current?.(debouncedValue||null)}),[debouncedValue]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{getFilter&&getFilter({get value(){return selectedValueRef.current||null},setValue:newValue=>{setSelectedValue(newValue||""),onChangeRef.current(newValue),onFilterRef.current?.(newValue)},clear:()=>{setSelectedValue(""),onChangeRef.current(null),onFilterRef.current?.(null)}})}),[getFilter]);const handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setSelectedValue(e.target.value)}),[]),selectOptions=customOptions||column.filterOptions||[],selectContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:""},placeholder),selectOptions.map((opt=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:opt.value,value:opt.value},opt.label))));return className?react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{id,value:selectedValue,onChange:handleChange,className,style:{width:"100%",fontWeight:400,...style},disabled},selectContent):react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterSelectBase,{id,value:selectedValue,onChange:handleChange,style:{fontWeight:400,...style},disabled},selectContent)};function SelectFilter(optionsOrProps){if(!("column"in optionsOrProps)&&!("value"in optionsOrProps)&&!("onChange"in optionsOrProps)){const options=optionsOrProps,FilterWithOptions=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectFilterComponent,{...props,options});return FilterWithOptions.displayName="SelectFilter",FilterWithOptions}const props=optionsOrProps;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectFilterComponent,props)}const getFilterComponent=type=>{switch(type){case"number":return NumberFilter;case"date":case"dateRange":return DateFilter;case"select":return SelectFilter;default:return TextFilter}};try{TextFilter.displayName="TextFilter",TextFilter.__docgenInfo={description:"Text filter - can be used as a component or factory function",displayName:"TextFilter",props:{placeholder:{defaultValue:null,description:"Placeholder text for the input",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS class name(s) for the input",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline style for the input",name:"style",required:!1,type:{name:"CSSProperties"}},defaultValue:{defaultValue:null,description:"Default value for the filter",name:"defaultValue",required:!1,type:{name:"string"}},delay:{defaultValue:null,description:"Debounce delay in milliseconds",name:"delay",required:!1,type:{name:"number"}},comparator:{defaultValue:null,description:"Comparator type",name:"comparator",required:!1,type:{name:"enum",value:[{value:'"like"'},{value:'"eq"'},{value:'"ne"'}]}},caseSensitive:{defaultValue:null,description:"Case sensitive filtering",name:"caseSensitive",required:!1,type:{name:"boolean"}},getFilter:{defaultValue:null,description:"Callback to get filter instance for external control",name:"getFilter",required:!1,type:{name:"((filter: TextFilterInstance) => void)"}},onFilter:{defaultValue:null,description:"Callback when filter value changes",name:"onFilter",required:!1,type:{name:"((value: string) => void)"}},id:{defaultValue:null,description:"Input ID",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/filters.tsx#TextFilter"]={docgenInfo:TextFilter.__docgenInfo,name:"TextFilter",path:"src/core-components/src/components/Table/filters.tsx#TextFilter"})}catch(__react_docgen_typescript_loader_error){}try{NumberFilter.displayName="NumberFilter",NumberFilter.__docgenInfo={description:"Number filter - can be used as a component or factory function",displayName:"NumberFilter",props:{placeholder:{defaultValue:null,description:"Placeholder text for the input",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS class name(s) for the input",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline style for the input",name:"style",required:!1,type:{name:"CSSProperties"}},defaultValue:{defaultValue:null,description:"Default value for the filter",name:"defaultValue",required:!1,type:{name:"{ number: string; comparator: string; }"}},delay:{defaultValue:null,description:"Debounce delay in milliseconds",name:"delay",required:!1,type:{name:"number"}},defaultComparator:{defaultValue:null,description:"Default comparator",name:"defaultComparator",required:!1,type:{name:"enum",value:[{value:'"="'},{value:'"!="'},{value:'">"'},{value:'">="'},{value:'"<"'},{value:'"<="'}]}},allowDecimal:{defaultValue:null,description:"Allow decimal numbers",name:"allowDecimal",required:!1,type:{name:"boolean"}},getFilter:{defaultValue:null,description:"Callback to get filter instance for external control",name:"getFilter",required:!1,type:{name:"((filter: NumberFilterInstance) => void)"}},onFilter:{defaultValue:null,description:"Callback when filter value changes",name:"onFilter",required:!1,type:{name:"((value: { number: string; comparator: string; } | null) => void)"}},id:{defaultValue:null,description:"Input ID",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},hideComparator:{defaultValue:null,description:"Hide comparator select",name:"hideComparator",required:!1,type:{name:"boolean"}},comparators:{defaultValue:null,description:"Available comparators",name:"comparators",required:!1,type:{name:'("=" | "!=" | ">" | ">=" | "<" | "<=")[]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/filters.tsx#NumberFilter"]={docgenInfo:NumberFilter.__docgenInfo,name:"NumberFilter",path:"src/core-components/src/components/Table/filters.tsx#NumberFilter"})}catch(__react_docgen_typescript_loader_error){}try{DateFilter.displayName="DateFilter",DateFilter.__docgenInfo={description:"Date filter - can be used as a component or factory function",displayName:"DateFilter",props:{className:{defaultValue:null,description:"CSS class name(s) for the input",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline style for the input",name:"style",required:!1,type:{name:"CSSProperties"}},defaultValue:{defaultValue:null,description:"Default value for the filter",name:"defaultValue",required:!1,type:{name:"{ startDate?: string; endDate?: string; comparator?: string | undefined; diffFlag?: boolean | undefined; } | undefined"}},defaultComparator:{defaultValue:null,description:"Default comparator",name:"defaultComparator",required:!1,type:{name:"enum",value:[{value:'"="'},{value:'">="'},{value:'"<"'}]}},defaultRangeMode:{defaultValue:null,description:"Enable range mode by default",name:"defaultRangeMode",required:!1,type:{name:"boolean"}},getFilter:{defaultValue:null,description:"Callback to get filter instance for external control",name:"getFilter",required:!1,type:{name:"((filter: DateFilterInstance) => void)"}},onFilter:{defaultValue:null,description:"Callback when filter value changes",name:"onFilter",required:!1,type:{name:"((value: any) => void)"}},id:{defaultValue:null,description:"Input ID",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},dateFormat:{defaultValue:null,description:"Date format (for display)",name:"dateFormat",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Min date",name:"minDate",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Max date",name:"maxDate",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/filters.tsx#DateFilter"]={docgenInfo:DateFilter.__docgenInfo,name:"DateFilter",path:"src/core-components/src/components/Table/filters.tsx#DateFilter"})}catch(__react_docgen_typescript_loader_error){}try{SelectFilter.displayName="SelectFilter",SelectFilter.__docgenInfo={description:"Select filter - can be used as a component or factory function",displayName:"SelectFilter",props:{placeholder:{defaultValue:null,description:"Placeholder text (shown as first option)",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS class name(s) for the select",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline style for the select",name:"style",required:!1,type:{name:"CSSProperties"}},defaultValue:{defaultValue:null,description:"Default selected value",name:"defaultValue",required:!1,type:{name:"string"}},delay:{defaultValue:null,description:"Debounce delay in milliseconds",name:"delay",required:!1,type:{name:"number"}},options:{defaultValue:null,description:"Options for the select",name:"options",required:!1,type:{name:"{ value: string; label: string; }[]"}},getFilter:{defaultValue:null,description:"Callback to get filter instance for external control",name:"getFilter",required:!1,type:{name:"((filter: SelectFilterInstance) => void)"}},onFilter:{defaultValue:null,description:"Callback when filter value changes",name:"onFilter",required:!1,type:{name:"((value: string | null) => void)"}},id:{defaultValue:null,description:"Select ID",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Allow multiple selection",name:"multiple",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/filters.tsx#SelectFilter"]={docgenInfo:SelectFilter.__docgenInfo,name:"SelectFilter",path:"src/core-components/src/components/Table/filters.tsx#SelectFilter"})}catch(__react_docgen_typescript_loader_error){}try{getFilterComponent.displayName="getFilterComponent",getFilterComponent.__docgenInfo={description:"Get filter component based on type",displayName:"getFilterComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/Table/filters.tsx#getFilterComponent"]={docgenInfo:getFilterComponent.__docgenInfo,name:"getFilterComponent",path:"src/core-components/src/components/Table/filters.tsx#getFilterComponent"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/src/components/Table/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bd:()=>filterData,Eb:()=>paginateData,GF:()=>exportToCSV,LJ:()=>getNestedValue,LT:()=>sortData,P7:()=>usePaginationState,Uk:()=>useRowSelection,bJ:()=>exportToExcel,bf:()=>useSortState,d1:()=>useTableDebounce,eL:()=>useColumnVisibility,vs:()=>useFilterState,zH:()=>useRowExpansion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useTableDebounce(value,delay){const[debouncedValue,setDebouncedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handler=setTimeout((()=>{setDebouncedValue(value)}),delay);return()=>clearTimeout(handler)}),[value,delay]),debouncedValue}function useSortState(defaultSort,controlledSort,multiSort=!1){const[internalSort,setInternalSort]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSort||{field:"",order:null}),sort=controlledSort??internalSort,handleSort=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((field,currentOrder)=>{let nextOrder;nextOrder=sort.field!==field||null===currentOrder?"asc":"asc"===currentOrder?"desc":null;const newSort={field,order:nextOrder};return setInternalSort(newSort),newSort}),[sort.field]);return{sort,handleSort,setSort:setInternalSort}}function useFilterState(defaultFilters,controlledFilters){const[internalFilters,setInternalFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultFilters||{});return{filters:controlledFilters??internalFilters,setFilter:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((field,value)=>{setInternalFilters((prev=>{if(null==value||""===value){const{[field]:_,...rest}=prev;return rest}return{...prev,[field]:value}}))}),[]),clearFilters:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setInternalFilters({})}),[]),setFilters:setInternalFilters}}function usePaginationState(defaultPage=0,defaultPageSize=10,totalSize=0){const[page,setPage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPage),[pageSize,setPageSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPageSize),totalPages=Math.ceil(totalSize/pageSize)||1,goToPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newPage=>{const validPage=Math.max(0,Math.min(newPage,totalPages-1));setPage(validPage)}),[totalPages]),goToNextPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{goToPage(page+1)}),[page,goToPage]),goToPrevPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{goToPage(page-1)}),[page,goToPage]),goToFirstPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{goToPage(0)}),[goToPage]),goToLastPage=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{goToPage(totalPages-1)}),[totalPages,goToPage]),changePageSize=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSize=>{setPageSize(newSize),setPage(0)}),[]);return{page,pageSize,totalPages,goToPage,goToNextPage,goToPrevPage,goToFirstPage,goToLastPage,changePageSize,setPage,setPageSize}}function useRowSelection(data,keyField="_id",mode="none",controlledSelectedKeys,getCheckboxProps){const[internalSelected,setInternalSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set),selectedKeys=controlledSelectedKeys?new Set(controlledSelectedKeys):internalSelected,isSelected=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key=>selectedKeys.has(key)),[selectedKeys]),toggleRow=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((row=>{const key=row[keyField],props=getCheckboxProps?.(row);if(props?.disabled)return;if("single"===mode)return setInternalSelected(new Set([key])),{selectedKeys:[key],selectedRows:[row]};setInternalSelected((prev=>{const next=new Set(prev);return next.has(key)?next.delete(key):next.add(key),next}));const newSelected=selectedKeys.has(key)?Array.from(selectedKeys).filter((k=>k!==key)):[...Array.from(selectedKeys),key];return{selectedKeys:newSelected,selectedRows:data.filter((r=>newSelected.includes(r[keyField])))}}),[data,keyField,mode,selectedKeys,getCheckboxProps]),toggleAll=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((selectAll=>{if(selectAll){const selectableKeys=data.filter((row=>{const props=getCheckboxProps?.(row);return!props?.disabled})).map((row=>row[keyField]));return setInternalSelected(new Set(selectableKeys)),{selectedKeys:selectableKeys,selectedRows:data.filter((r=>selectableKeys.includes(r[keyField])))}}return setInternalSelected(new Set),{selectedKeys:[],selectedRows:[]}}),[data,keyField,getCheckboxProps]),isAllSelected=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(0===data.length)return!1;return data.filter((row=>{const props=getCheckboxProps?.(row);return!props?.disabled})).every((row=>selectedKeys.has(row[keyField])))}),[data,selectedKeys,keyField,getCheckboxProps]),isIndeterminate=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(0===data.length)return!1;const selectableRows=data.filter((row=>{const props=getCheckboxProps?.(row);return!props?.disabled})),selectedCount=selectableRows.filter((row=>selectedKeys.has(row[keyField]))).length;return selectedCount>0&&selectedCount<selectableRows.length}),[data,selectedKeys,keyField,getCheckboxProps]),clearSelection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setInternalSelected(new Set)}),[]);return{selectedKeys,isSelected,toggleRow,toggleAll,isAllSelected,isIndeterminate,clearSelection,setSelected:setInternalSelected}}function useRowExpansion(keyField="_id",defaultExpandedKeys,controlledExpandedKeys,accordion=!1){const[internalExpanded,setInternalExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(defaultExpandedKeys||[])),expandedKeys=controlledExpandedKeys?new Set(controlledExpandedKeys):internalExpanded,isExpanded=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key=>expandedKeys.has(key)),[expandedKeys]),toggleExpand=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((row=>{const key=row[keyField];setInternalExpanded((prev=>{const next=accordion?new Set:new Set(prev);return prev.has(key)?next.delete(key):next.add(key),next}));return{expandedKeys:expandedKeys.has(key)?Array.from(expandedKeys).filter((k=>k!==key)):accordion?[key]:[...Array.from(expandedKeys),key],expanded:!expandedKeys.has(key),row}}),[keyField,expandedKeys,accordion]);return{expandedKeys,isExpanded,toggleExpand,setExpanded:setInternalExpanded}}function useColumnVisibility(columns,storageKey){const[hiddenColumns,setHiddenColumns]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{if(storageKey&&"undefined"!=typeof window){const stored=localStorage.getItem(`table_columns_${storageKey}`);if(stored)try{return new Set(JSON.parse(stored))}catch(e){}}return new Set(columns.filter((c=>c.hidden)).map((c=>c.dataField)))})),visibleColumns=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>columns.filter((c=>!hiddenColumns.has(c.dataField)))),[columns,hiddenColumns]),toggleColumn=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((dataField=>{setHiddenColumns((prev=>{const next=new Set(prev);return next.has(dataField)?next.delete(dataField):next.add(dataField),storageKey&&"undefined"!=typeof window&&localStorage.setItem(`table_columns_${storageKey}`,JSON.stringify(Array.from(next))),next}))}),[storageKey]),showAllColumns=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setHiddenColumns(new Set),storageKey&&"undefined"!=typeof window&&localStorage.removeItem(`table_columns_${storageKey}`)}),[storageKey]);return{hiddenColumns,visibleColumns,toggleColumn,showAllColumns,isColumnHidden:field=>hiddenColumns.has(field)}}function sortData(data,sort,columns){if(!sort.field||!sort.order)return data;const column=columns.find((c=>c.dataField===sort.field));if(!column)return data;return[...data].sort(((a,b)=>{const aVal=getNestedValue(a,sort.field),bVal=getNestedValue(b,sort.field);if(column.sortFunc)return column.sortFunc(aVal,bVal,sort.order,a,b);if(aVal===bVal)return 0;if(null==aVal)return 1;if(null==bVal)return-1;const comparison="string"==typeof aVal?aVal.localeCompare(bVal):aVal<bVal?-1:1;return"asc"===sort.order?comparison:-comparison}))}function filterData(data,filters,columns,searchValue){let filtered=data;for(const[field,value]of Object.entries(filters)){if(null==value||""===value)continue;columns.find((c=>c.dataField===field))&&(filtered=filtered.filter((row=>{const cellValue=getNestedValue(row,field);return"object"==typeof value&&null!==value?"number"in value&&"comparator"in value?compareNumber(cellValue,value.number,value.comparator):!("startDate"in value)||compareDateRange(cellValue,value):null!=cellValue&&String(cellValue).toLowerCase().includes(String(value).toLowerCase())})))}if(searchValue){const searchLower=searchValue.toLowerCase();filtered=filtered.filter((row=>columns.some((column=>{const value=getNestedValue(row,column.dataField);return null!=value&&String(value).toLowerCase().includes(searchLower)}))))}return filtered}function paginateData(data,page,pageSize){const start=page*pageSize;return data.slice(start,start+pageSize)}function getNestedValue(obj,path){return path.split(".").reduce(((acc,part)=>acc?.[part]),obj)}function compareNumber(value,filterValue,comparator){const num=parseFloat(value),filterNum=parseFloat(filterValue);if(isNaN(num)||isNaN(filterNum))return!1;switch(comparator){case"=":return num===filterNum;case"!=":return num!==filterNum;case">":return num>filterNum;case">=":return num>=filterNum;case"<":return num<filterNum;case"<=":return num<=filterNum;default:return!0}}function compareDateRange(value,filter){if(!value)return!1;const date=new Date(value);if(isNaN(date.getTime()))return!1;if(filter.diffFlag&&filter.startDate&&filter.endDate){const start=new Date(filter.startDate),end=new Date(filter.endDate);return date>=start&&date<=end}if(filter.startDate){const start=new Date(filter.startDate);switch(filter.comparator){case"=":return date.toDateString()===start.toDateString();case">=":default:return date>=start;case"<":return date<start}}return!0}function exportToCSV(data,columns,fileName){const exportColumns=columns.filter((c=>!1!==c.csvExport)),csv=[exportColumns.map((c=>`"${c.text}"`)).join(","),...data.map(((row,rowIndex)=>exportColumns.map((col=>{const value=col.csvFormatter?col.csvFormatter(getNestedValue(row,col.dataField),row,rowIndex):getNestedValue(row,col.dataField);return null==value?'""':"string"==typeof value?`"${value.replace(/"/g,'""')}"`:"object"==typeof value?`"${JSON.stringify(value).replace(/"/g,'""')}"`:`"${value}"`})).join(",")))].join("\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url,link.download=`${fileName}_${(new Date).toISOString().slice(0,10)}.csv`,link.click(),URL.revokeObjectURL(url)}async function exportToExcel(data,columns,fileName,options){try{const workbook=new((await async function loadExcelJS(){return window.ExcelJS?window.ExcelJS:new Promise(((resolve,reject)=>{const script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js",script.async=!0,script.onload=()=>resolve(window.ExcelJS),script.onerror=()=>reject(new Error("Failed to load ExcelJS from CDN")),document.head.appendChild(script)}))}()).Workbook),worksheet=workbook.addWorksheet(options?.sheetName||"Sheet1"),exportColumns=columns.filter((c=>!1!==c.csvExport));worksheet.columns=exportColumns.map((col=>({header:col.text,key:col.dataField,width:Math.max(col.text.length+5,15)})));const headerRow=worksheet.getRow(1);headerRow.font={bold:options?.headerStyle?.font?.bold??!0,size:options?.headerStyle?.font?.size??12},options?.headerStyle?.fill?.color&&(headerRow.fill={type:"pattern",pattern:"solid",fgColor:{argb:options.headerStyle.fill.color.replace("#","")}}),headerRow.commit(),data.forEach(((row,rowIndex)=>{const rowData={};exportColumns.forEach((col=>{const value=col.csvFormatter?col.csvFormatter(getNestedValue(row,col.dataField),row,rowIndex):getNestedValue(row,col.dataField);rowData[col.dataField]=null==value?"":"object"==typeof value?JSON.stringify(value):value})),worksheet.addRow(rowData)}));const buffer=await workbook.xlsx.writeBuffer(),blob=new Blob([buffer],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url,link.download=`${fileName}_${(new Date).toISOString().slice(0,10)}.xlsx`,link.click(),URL.revokeObjectURL(url)}catch(error){console.error("Excel export failed:",error),console.warn("Falling back to CSV export"),exportToCSV(data,columns,fileName)}}}}]);
//# sourceMappingURL=4434.fde24ae5.iframe.bundle.js.map