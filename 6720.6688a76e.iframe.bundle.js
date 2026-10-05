"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[6720],{"./src/core-components/src/components/ag-grid/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z1:()=>AgGrid});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const themes={alpine:{backgroundColor:"#ffffff",headerBackgroundColor:"#f8f8f8",oddRowBackgroundColor:"#fcfcfc",borderColor:"#dde2eb",selectedRowBackgroundColor:"#b7e4ff",hoverRowBackgroundColor:"#ecf0f1",textColor:"#181d1f",headerTextColor:"#181d1f",accentColor:"#2196f3",cellPadding:"0 12px",headerPadding:"0 12px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"13px",headerFontSize:"13px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},"alpine-dark":{backgroundColor:"#181d1f",headerBackgroundColor:"#222628",oddRowBackgroundColor:"#1f2426",borderColor:"#3d4749",selectedRowBackgroundColor:"#005880",hoverRowBackgroundColor:"#2d3436",textColor:"#f0f0f0",headerTextColor:"#f0f0f0",accentColor:"#2196f3",cellPadding:"0 12px",headerPadding:"0 12px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"13px",headerFontSize:"13px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},balham:{backgroundColor:"#ffffff",headerBackgroundColor:"#f5f7f7",oddRowBackgroundColor:"#fcfdfd",borderColor:"#bdc3c7",selectedRowBackgroundColor:"#b7e4ff",hoverRowBackgroundColor:"#ecf0f1",textColor:"#000000",headerTextColor:"#000000",accentColor:"#0091ea",cellPadding:"0 4px",headerPadding:"0 4px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"12px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},"balham-dark":{backgroundColor:"#2d3436",headerBackgroundColor:"#1e272c",oddRowBackgroundColor:"#32393c",borderColor:"#424a4d",selectedRowBackgroundColor:"#005880",hoverRowBackgroundColor:"#3d4749",textColor:"#f0f0f0",headerTextColor:"#f0f0f0",accentColor:"#0091ea",cellPadding:"0 4px",headerPadding:"0 4px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"12px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},material:{backgroundColor:"#ffffff",headerBackgroundColor:"#fafafa",oddRowBackgroundColor:"#ffffff",borderColor:"#e0e0e0",selectedRowBackgroundColor:"#e3f2fd",hoverRowBackgroundColor:"#f5f5f5",textColor:"rgba(0, 0, 0, 0.87)",headerTextColor:"rgba(0, 0, 0, 0.54)",accentColor:"#3f51b5",cellPadding:"0 24px 0 24px",headerPadding:"0 24px 0 24px",fontFamily:'Roboto, "Helvetica Neue", sans-serif',fontSize:"14px",headerFontSize:"12px",headerFontWeight:"500",borderRadius:"0",cellBorderWidth:"1px"},quartz:{backgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",oddRowBackgroundColor:"#fafafa",borderColor:"#e2e8f0",selectedRowBackgroundColor:"#dbeafe",hoverRowBackgroundColor:"#f1f5f9",textColor:"#1e293b",headerTextColor:"#475569",accentColor:"#3b82f6",cellPadding:"0 16px",headerPadding:"0 16px",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"14px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"8px",cellBorderWidth:"1px"},"quartz-dark":{backgroundColor:"#0f172a",headerBackgroundColor:"#1e293b",oddRowBackgroundColor:"#1e293b",borderColor:"#334155",selectedRowBackgroundColor:"#1e3a5f",hoverRowBackgroundColor:"#334155",textColor:"#e2e8f0",headerTextColor:"#94a3b8",accentColor:"#3b82f6",cellPadding:"0 16px",headerPadding:"0 16px",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"14px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"8px",cellBorderWidth:"1px"}},fadeIn=styled_components_browser_esm.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,slideInRight=styled_components_browser_esm.i7`
  from { transform: translateX(10px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,shimmer=(styled_components_browser_esm.i7`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,styled_components_browser_esm.i7`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`),spin=styled_components_browser_esm.i7`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,rowEnter=styled_components_browser_esm.i7`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,cellFlash=styled_components_browser_esm.i7`
  0% { background-color: rgba(76, 175, 80, 0.4); }
  100% { background-color: transparent; }
`,GridRoot=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({$theme})=>$theme.backgroundColor};
  font-family: ${({$theme})=>$theme.fontFamily};
  font-size: ${({$theme})=>$theme.fontSize};
  color: ${({$theme})=>$theme.textColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: ${({$theme})=>$theme.borderRadius};
  overflow: hidden;
  position: relative;

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Responsive styles */
  ${({$responsive})=>$responsive&&styled_components_browser_esm.AH`
      @media (max-width: 768px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
      }
    `}
`,GridWrapper=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,GridToolbar=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  background: ${({$theme})=>$theme.headerBackgroundColor};
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`,ToolbarGroup=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,ToolbarButton=styled_components_browser_esm.I4.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${({$theme})=>$theme.borderColor};
  background: ${({$theme,$active})=>$active?$theme.accentColor:$theme.backgroundColor};
  color: ${({$theme,$active})=>$active?"#ffffff":$theme.textColor};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${({$variant,$theme})=>"primary"===$variant&&styled_components_browser_esm.AH`
      background: ${$theme.accentColor};
      border-color: ${$theme.accentColor};
      color: #ffffff;

      &:hover {
        filter: brightness(1.1);
      }
    `}

  ${({$variant})=>"danger"===$variant&&styled_components_browser_esm.AH`
      background: #ef4444;
      border-color: #ef4444;
      color: #ffffff;

      &:hover {
        background: #dc2626;
        border-color: #dc2626;
      }
    `}

  &:hover:not(:disabled) {
    background: ${({$theme,$active})=>$active?$theme.accentColor:$theme.hoverRowBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,QuickFilter=styled_components_browser_esm.I4.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 220px;
    padding: 6px 12px 6px 32px;
    font-size: 13px;
    border: 1px solid ${({$theme})=>$theme.borderColor};
    border-radius: 4px;
    background: ${({$theme})=>$theme.backgroundColor};
    color: ${({$theme})=>$theme.textColor};
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;

    &::placeholder {
      color: ${({$theme})=>$theme.headerTextColor};
      opacity: 0.6;
    }

    &:focus {
      border-color: ${({$theme})=>$theme.accentColor};
      box-shadow: 0 0 0 3px ${({$theme})=>$theme.accentColor}20;
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
    color: ${({$theme})=>$theme.headerTextColor};
    opacity: 0.6;
  }
`,TableContainer=styled_components_browser_esm.I4.div`
  flex: 1;
  overflow: auto;
  position: relative;
  min-height: 0;

  ${({$maxHeight})=>$maxHeight&&styled_components_browser_esm.AH`
      max-height: ${"number"==typeof $maxHeight?`${$maxHeight}px`:$maxHeight};
    `}
`,StyledTable=styled_components_browser_esm.I4.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: ${({$fixedLayout})=>$fixedLayout?"fixed":"auto"};
  color: ${({$theme})=>$theme.textColor};
`,TableHead=styled_components_browser_esm.I4.thead`
  ${({$sticky,$theme})=>$sticky&&styled_components_browser_esm.AH`
      position: sticky;
      top: 0;
      z-index: 10;
      background: ${$theme.headerBackgroundColor};
    `}
`,HeaderRow=styled_components_browser_esm.I4.tr`
  background: ${({$theme})=>$theme.headerBackgroundColor};
  height: ${({$height})=>$height?`${$height}px`:"42px"};
`,HeaderCell=styled_components_browser_esm.I4.th`
  padding: ${({$theme})=>$theme.headerPadding};
  text-align: ${({$align})=>$align||"left"};
  font-size: ${({$theme})=>$theme.headerFontSize};
  font-weight: ${({$theme})=>$theme.headerFontWeight};
  color: ${({$theme})=>$theme.headerTextColor};
  border-bottom: 2px solid ${({$theme})=>$theme.borderColor};
  border-right: 1px solid ${({$theme})=>$theme.borderColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  user-select: none;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({$width})=>$width&&styled_components_browser_esm.AH`width: ${$width}px;`}
  ${({$minWidth})=>$minWidth&&styled_components_browser_esm.AH`min-width: ${$minWidth}px;`}
  ${({$maxWidth})=>$maxWidth&&styled_components_browser_esm.AH`max-width: ${$maxWidth}px;`}

  ${({$sortable,$theme})=>$sortable&&styled_components_browser_esm.AH`
      cursor: pointer;

      &:hover {
        background: ${$theme.hoverRowBackgroundColor};
      }
    `}

  ${({$sorted,$theme})=>$sorted&&styled_components_browser_esm.AH`
      background: ${$theme.selectedRowBackgroundColor}40;
    `}

  ${({$pinned,$theme})=>$pinned&&styled_components_browser_esm.AH`
      position: sticky;
      ${"left"===$pinned?"left: 0;":"right: 0;"}
      z-index: 11;
      background: ${$theme.headerBackgroundColor};
      box-shadow: ${"left"===$pinned?"2px 0 4px rgba(0,0,0,0.1)":"-2px 0 4px rgba(0,0,0,0.1)"};
    `}

  &:last-child {
    border-right: none;
  }
`,HeaderCellContent=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
`,HeaderText=styled_components_browser_esm.I4.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`,SortIndicator=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: ${({$active})=>$active?1:.3};
  transition: opacity 0.15s ease, transform 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({$direction})=>"desc"===$direction?"rotate(180deg)":"rotate(0deg)"};
  }
`,FilterIndicator=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  color: ${({$active,$theme})=>$active?$theme.accentColor:$theme.headerTextColor};
  opacity: ${({$active})=>$active?1:.4};
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,ResizeHandle=styled_components_browser_esm.I4.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  cursor: col-resize;
  z-index: 1;
  transition: background-color 0.15s ease;

  ${({$resizing,$theme})=>$resizing&&styled_components_browser_esm.AH`
      background: ${$theme.accentColor};
    `}

  &:hover {
    background: ${({$theme})=>$theme.accentColor}60;
  }

  &::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 25%;
    height: 50%;
    width: 2px;
    background: ${({$theme})=>$theme.borderColor};
    border-radius: 1px;
  }
`,GroupHeaderRow=styled_components_browser_esm.I4.tr`
  background: ${({$theme})=>$theme.headerBackgroundColor};
`,GroupHeaderCell=styled_components_browser_esm.I4.th`
  padding: ${({$theme})=>$theme.headerPadding};
  text-align: center;
  font-size: ${({$theme})=>$theme.headerFontSize};
  font-weight: ${({$theme})=>$theme.headerFontWeight};
  color: ${({$theme})=>$theme.headerTextColor};
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
  border-right: 1px solid ${({$theme})=>$theme.borderColor};
  background: ${({$theme})=>$theme.headerBackgroundColor};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:last-child {
    border-right: none;
  }
`,FloatingFilterRow=styled_components_browser_esm.I4.tr`
  background: ${({$theme})=>$theme.headerBackgroundColor};
  height: ${({$height})=>$height?`${$height}px`:"32px"};
`,FloatingFilterCell=styled_components_browser_esm.I4.td`
  padding: 4px 8px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
  border-right: 1px solid ${({$theme})=>$theme.borderColor};
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }

  input,
  select {
    width: 100%;
    padding: 4px 8px;
    font-size: 12px;
    border: 1px solid ${({$theme})=>$theme.borderColor};
    border-radius: 3px;
    background: ${({$theme})=>$theme.backgroundColor};
    color: ${({$theme})=>$theme.textColor};
    outline: none;

    &:focus {
      border-color: ${({$theme})=>$theme.accentColor};
    }
  }
`,TableBody=styled_components_browser_esm.I4.tbody`
  color: ${({$theme})=>$theme.textColor};
`,TableRow=styled_components_browser_esm.I4.tr`
  height: ${({$height})=>$height?`${$height}px`:"42px"};
  color: ${({$theme})=>$theme.textColor};
  background: ${({$theme,$selected,$highlighted,$striped,$even,$group})=>$selected?$theme.selectedRowBackgroundColor:$highlighted?`${$theme.accentColor}20`:$group?$theme.headerBackgroundColor:$striped&&$even?$theme.oddRowBackgroundColor:$theme.backgroundColor};
  transition: background-color 0.15s ease;

  ${({$animate})=>$animate&&styled_components_browser_esm.AH`
      animation: ${rowEnter} 0.2s ease;
    `}

  ${({$dragging})=>$dragging&&styled_components_browser_esm.AH`
      opacity: 0.5;
    `}

  ${({$dragOver,$theme})=>$dragOver&&styled_components_browser_esm.AH`
      background: ${$theme.selectedRowBackgroundColor}60;
      box-shadow: inset 0 -2px 0 ${$theme.accentColor};
    `}

  &:hover {
    background: ${({$theme,$selected})=>$selected?$theme.selectedRowBackgroundColor:$theme.hoverRowBackgroundColor};
  }

  ${({$group})=>$group&&styled_components_browser_esm.AH`
      cursor: pointer;
      font-weight: 600;
    `}
`,TableCell=styled_components_browser_esm.I4.td`
  padding: ${({$theme})=>$theme.cellPadding};
  text-align: ${({$align})=>$align||"left"};
  border-bottom: ${({$theme})=>$theme.cellBorderWidth} solid ${({$theme})=>$theme.borderColor};
  border-right: ${({$theme})=>$theme.cellBorderWidth} solid ${({$theme})=>$theme.borderColor};
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({$theme})=>$theme.textColor};

  ${({$width})=>$width&&styled_components_browser_esm.AH`width: ${$width}px;`}

  ${({$pinned,$theme})=>$pinned&&styled_components_browser_esm.AH`
      position: sticky;
      ${"left"===$pinned?"left: 0;":"right: 0;"}
      z-index: 5;
      background: inherit;
      box-shadow: ${"left"===$pinned?"2px 0 4px rgba(0,0,0,0.1)":"-2px 0 4px rgba(0,0,0,0.1)"};
    `}

  ${({$editing,$theme})=>$editing&&styled_components_browser_esm.AH`
      padding: 0;
      background: ${$theme.backgroundColor};
      box-shadow: inset 0 0 0 2px ${$theme.accentColor};
    `}

  ${({$flashing})=>$flashing&&styled_components_browser_esm.AH`
      animation: ${cellFlash} 0.5s ease;
    `}

  &:last-child {
    border-right: none;
  }
`,CellContent=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 20px;
  color: inherit;

  ${({$wrapText})=>$wrapText&&styled_components_browser_esm.AH`
      white-space: normal;
      word-break: break-word;
    `}
`,Checkbox=styled_components_browser_esm.I4.input`
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
  accent-color: ${({$theme})=>$theme.accentColor};
  flex-shrink: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,CheckboxCell=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,ExpandButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-left: ${({$level})=>$level?16*$level+"px":"0"};
  margin-right: 8px;
  border: none;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({$expanded})=>$expanded?"rotate(90deg)":"rotate(0deg)"};
  }
`,GroupCell=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  padding-left: ${({$level})=>$level?20*$level+"px":"0"};
`,DragHandle=styled_components_browser_esm.I4.div`
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

  ${({$dragging})=>$dragging&&styled_components_browser_esm.AH`
      cursor: grabbing;
      opacity: 1;
    `}

  svg {
    width: 14px;
    height: 14px;
  }
`,CellEditor=styled_components_browser_esm.I4.div`
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
    background: ${({$theme})=>$theme.backgroundColor};
    color: ${({$theme})=>$theme.textColor};
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`,TableFooter=styled_components_browser_esm.I4.tfoot`
  background: ${({$theme})=>$theme.headerBackgroundColor};
`,FooterRow=styled_components_browser_esm.I4.tr`
  height: 42px;
`,FooterCell=styled_components_browser_esm.I4.td`
  padding: ${({$theme})=>$theme.cellPadding};
  text-align: ${({$align})=>$align||"left"};
  font-weight: 600;
  border-top: 2px solid ${({$theme})=>$theme.borderColor};
  color: ${({$theme})=>$theme.headerTextColor};
`,PaginationBar=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({$theme})=>$theme.headerBackgroundColor};
  border-top: 1px solid ${({$theme})=>$theme.borderColor};
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`,PaginationInfo=styled_components_browser_esm.I4.div`
  font-size: 13px;
  color: ${({$theme})=>$theme.headerTextColor};
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
  font-weight: 500;
  border: 1px solid ${({$theme,$active})=>$active?$theme.accentColor:$theme.borderColor};
  border-radius: 4px;
  background: ${({$theme,$active})=>$active?$theme.accentColor:$theme.backgroundColor};
  color: ${({$theme,$active})=>$active?"#ffffff":$theme.textColor};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({$theme,$active})=>$active?$theme.accentColor:$theme.hoverRowBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,PageSizeSelect=styled_components_browser_esm.I4.select`
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 4px;
  background: ${({$theme})=>$theme.backgroundColor};
  color: ${({$theme})=>$theme.textColor};
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${({$theme})=>$theme.accentColor};
  }
`,StatusBar=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  background: ${({$theme})=>$theme.headerBackgroundColor};
  border-top: 1px solid ${({$theme})=>$theme.borderColor};
  font-size: 12px;
  color: ${({$theme})=>$theme.headerTextColor};
  gap: 16px;
`,StatusItem=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 6px;

  strong {
    color: inherit;
  }
`,SideBar=styled_components_browser_esm.I4.div`
  width: ${({$width})=>$width?`${$width}px`:"250px"};
  min-width: 200px;
  max-width: 400px;
  background: ${({$theme})=>$theme.backgroundColor};
  border-${({$position})=>"left"===$position?"right":"left"}: 1px solid ${({$theme})=>$theme.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,SideBarTabs=styled_components_browser_esm.I4.div`
  display: flex;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
`,SideBarTab=styled_components_browser_esm.I4.button`
  flex: 1;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  background: ${({$theme,$active})=>$active?$theme.backgroundColor:$theme.headerBackgroundColor};
  color: ${({$theme,$active})=>$active?$theme.accentColor:$theme.headerTextColor};
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid ${({$theme,$active})=>$active?$theme.accentColor:"transparent"};

  &:hover {
    background: ${({$theme})=>$theme.backgroundColor};
  }
`,SideBarContent=styled_components_browser_esm.I4.div`
  flex: 1;
  overflow: auto;
  padding: 12px;
`,Overlay=styled_components_browser_esm.I4.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({$theme})=>$theme.backgroundColor}e6;
  z-index: 100;
  animation: ${fadeIn} 0.2s ease;
`,LoadingOverlay=(0,styled_components_browser_esm.I4)(Overlay)`
  flex-direction: column;
  gap: 16px;
`,Spinner=styled_components_browser_esm.I4.div`
  width: ${({$size})=>$size?`${$size}px`:"40px"};
  height: ${({$size})=>$size?`${$size}px`:"40px"};
  border: 3px solid ${({$theme})=>$theme.borderColor};
  border-top-color: ${({$theme})=>$theme.accentColor};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`,NoRowsOverlay=(0,styled_components_browser_esm.I4)(Overlay)`
  flex-direction: column;
  gap: 12px;
  color: ${({$theme})=>$theme.headerTextColor};

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }
`,ContextMenu=styled_components_browser_esm.I4.div`
  position: fixed;
  top: ${({$y})=>$y}px;
  left: ${({$x})=>$x}px;
  min-width: 180px;
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  animation: ${slideInRight} 0.15s ease;
`,ContextMenuItem=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  font-size: 13px;
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};
  opacity: ${({$disabled})=>$disabled?.5:1};
  color: ${({$danger,$theme})=>$danger?"#ef4444":$theme.textColor};
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$disabled,$theme})=>$disabled?"transparent":$theme.hoverRowBackgroundColor};
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
`,ContextMenuDivider=styled_components_browser_esm.I4.div`
  height: 1px;
  background: ${({$theme})=>$theme.borderColor};
  margin: 4px 0;
`,ColumnMenu=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 200px;
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  animation: ${fadeIn} 0.15s ease;
`,MobileCardContainer=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`,MobileCard=styled_components_browser_esm.I4.div`
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme,$selected})=>$selected?$theme.accentColor:$theme.borderColor};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease;

  ${({$selected,$theme})=>$selected&&styled_components_browser_esm.AH`
      background: ${$theme.selectedRowBackgroundColor};
    `}
`,MobileCardHeader=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
`,MobileCardRow=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({$theme})=>$theme.borderColor}50;
  }
`,MobileCardLabel=styled_components_browser_esm.I4.span`
  color: ${({$theme})=>$theme.headerTextColor};
  font-weight: 500;
`,MobileCardValue=styled_components_browser_esm.I4.span`
  color: ${({$theme})=>$theme.textColor};
  text-align: right;
`,SkeletonRow=styled_components_browser_esm.I4.tr`
  height: 42px;
`,SkeletonCell=styled_components_browser_esm.I4.td`
  padding: 8px 12px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
  border-right: 1px solid ${({$theme})=>$theme.borderColor};

  &:last-child {
    border-right: none;
  }
`,SkeletonBlock=styled_components_browser_esm.I4.div`
  height: 16px;
  width: ${({$width})=>$width||"80%"};
  background: linear-gradient(
    90deg,
    ${({$theme})=>$theme.borderColor}40 25%,
    ${({$theme})=>$theme.borderColor}80 50%,
    ${({$theme})=>$theme.borderColor}40 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
`,TooltipContainer=styled_components_browser_esm.I4.div`
  position: fixed;
  top: ${({$y})=>$y}px;
  left: ${({$x})=>$x}px;
  max-width: 300px;
  padding: 8px 12px;
  font-size: 12px;
  background: ${({$theme})=>$theme.textColor.includes("f0")?"#333":"#fff"};
  color: ${({$theme})=>$theme.textColor.includes("f0")?"#fff":"#333"};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  pointer-events: none;
  animation: ${fadeIn} 0.1s ease;
`,DragGhost=styled_components_browser_esm.I4.div`
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  padding: 8px 16px;
  background: ${({$theme})=>$theme.accentColor};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  opacity: ${({$visible})=>$visible?.9:0};
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease;
`,SelectionBar=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({$theme})=>$theme.accentColor};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  transform: translateY(${({$visible})=>$visible?"0":"-100%"});
  opacity: ${({$visible})=>$visible?1:0};
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`,SelectionActions=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,SidePanel=styled_components_browser_esm.I4.div`
  width: ${({$open,$width})=>$open?$width?`${$width}px`:"280px":"40px"};
  min-width: ${({$open})=>$open?"200px":"40px"};
  max-width: ${({$open})=>$open?"400px":"40px"};
  background: ${({$theme})=>$theme.backgroundColor};
  border-left: 1px solid ${({$theme})=>$theme.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.2s ease;
  flex-shrink: 0;
`,SidePanelTabs=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: ${({$collapsed})=>$collapsed?"column":"row"};
  border-bottom: ${({$collapsed})=>$collapsed?"none":"1px solid"};
  border-color: ${({$theme})=>$theme.borderColor};
  background: ${({$theme})=>$theme.headerBackgroundColor};
`,SidePanelTab=styled_components_browser_esm.I4.button`
  flex: ${({$collapsed})=>$collapsed?"none":"1"};
  padding: ${({$collapsed})=>$collapsed?"12px 10px":"10px 12px"};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  background: ${({$theme,$active})=>$active?$theme.backgroundColor:"transparent"};
  color: ${({$theme,$active})=>$active?$theme.accentColor:$theme.headerTextColor};
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid ${({$theme,$active})=>$active?$theme.accentColor:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
    color: ${({$theme})=>$theme.accentColor};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,SidePanelContent=styled_components_browser_esm.I4.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,SidePanelSearch=styled_components_browser_esm.I4.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};

  input {
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    border: 1px solid ${({$theme})=>$theme.borderColor};
    border-radius: 4px;
    background: ${({$theme})=>$theme.backgroundColor};
    color: ${({$theme})=>$theme.textColor};
    outline: none;

    &::placeholder {
      color: ${({$theme})=>$theme.headerTextColor};
      opacity: 0.6;
    }

    &:focus {
      border-color: ${({$theme})=>$theme.accentColor};
    }
  }
`,SidePanelSection=styled_components_browser_esm.I4.div`
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
`,SidePanelSectionHeader=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({$theme})=>$theme.headerTextColor};
  background: ${({$theme})=>$theme.headerBackgroundColor};
  cursor: ${({$collapsible})=>$collapsible?"pointer":"default"};
  user-select: none;

  &:hover {
    background: ${({$collapsible,$theme})=>$collapsible?$theme.hoverRowBackgroundColor:$theme.headerBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
`,SidePanelColumnItem=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  padding-left: ${({$indent})=>$indent?12+16*$indent+"px":"12px"};
  font-size: 13px;
  color: ${({$theme})=>$theme.textColor};
  cursor: pointer;
  user-select: none;
  transition: background-color 0.1s ease;
  border-left: 2px solid transparent;

  ${({$selected,$theme})=>$selected&&styled_components_browser_esm.AH`
      background: ${$theme.selectedRowBackgroundColor}40;
      border-left-color: ${$theme.accentColor};
    `}

  ${({$dragging,$theme})=>$dragging&&styled_components_browser_esm.AH`
      opacity: 0.5;
      background: ${$theme.accentColor}20;
    `}

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }
`,SidePanelDragHandle=styled_components_browser_esm.I4.span`
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
`,SidePanelGroupLabel=styled_components_browser_esm.I4.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,RowGroupsZone=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  min-height: 36px;
  background: ${({$theme,$dragOver})=>$dragOver?`${$theme.accentColor}15`:$theme.headerBackgroundColor};
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
  border: ${({$dragOver,$theme})=>$dragOver?`2px dashed ${$theme.accentColor}`:"1px solid transparent"};
  transition: all 0.15s ease;
  flex-wrap: wrap;

  ${({$hasItems})=>!$hasItems&&styled_components_browser_esm.AH`
      justify-content: center;
    `}
`,RowGroupsLabel=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${({$theme})=>$theme.headerTextColor};
  white-space: nowrap;

  svg {
    width: 14px;
    height: 14px;
    opacity: 0.6;
  }
`,RowGroupChip=styled_components_browser_esm.I4.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$theme})=>$theme.accentColor}15;
  color: ${({$theme})=>$theme.accentColor};
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
      background: ${({$theme})=>$theme.accentColor}30;
    }

    svg {
      width: 10px;
      height: 10px;
    }
  }
`,ValuesPanel=styled_components_browser_esm.I4.div`
  min-height: 60px;
`,ValueItem=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: ${({$theme})=>$theme.textColor};
  cursor: pointer;

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }
`,ValueItemLabel=styled_components_browser_esm.I4.span`
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
`,ValueItemRemove=styled_components_browser_esm.I4.button`
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
    background: ${({$theme})=>$theme.borderColor};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,PivotModeToggle=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
`,PivotModeLabel=styled_components_browser_esm.I4.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({$theme})=>$theme.textColor};
`,ToggleSwitch=styled_components_browser_esm.I4.label`
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
    background: ${({$theme})=>$theme.borderColor};
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
    background: ${({$theme})=>$theme.accentColor};
  }

  input:checked + span::before {
    transform: translateX(16px);
  }
`,HeaderMenuButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: ${({$active,$theme})=>$active?$theme.hoverRowBackgroundColor:"transparent"};
  border-radius: 3px;
  cursor: pointer;
  opacity: ${({$active})=>$active?1:0};
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }

  svg {
    width: 14px;
    height: 14px;
    color: ${({$theme})=>$theme.headerTextColor};
  }
`,ColumnMenuPopup=styled_components_browser_esm.I4.div`
  position: fixed;
  top: ${({$y})=>$y}px;
  left: ${({$x})=>$x}px;
  min-width: 200px;
  max-width: 280px;
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  animation: ${fadeIn} 0.15s ease;
`,ColumnMenuSection=styled_components_browser_esm.I4.div`
  padding: 4px 0;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,ColumnMenuItem=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-size: 13px;
  color: ${({$theme,$disabled})=>$disabled?$theme.headerTextColor:$theme.textColor};
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};
  opacity: ${({$disabled})=>$disabled?.5:1};
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$disabled,$theme})=>$disabled?"transparent":$theme.hoverRowBackgroundColor};
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

  ${({$hasSubmenu})=>$hasSubmenu&&styled_components_browser_esm.AH`
      &::after {
        content: '›';
        margin-left: auto;
        font-size: 16px;
        opacity: 0.5;
      }
    `}
`,ColumnMenuSubmenu=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 150px;
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,SetFilterContainer=styled_components_browser_esm.I4.div`
  min-width: 200px;
  max-width: 300px;
  max-height: 400px;
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,SetFilterHeader=styled_components_browser_esm.I4.div`
  padding: 8px 12px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
  font-size: 12px;
  font-weight: 600;
  color: ${({$theme})=>$theme.headerTextColor};
  background: ${({$theme})=>$theme.headerBackgroundColor};
`,SetFilterSearch=styled_components_browser_esm.I4.div`
  padding: 8px 10px;
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};

  input {
    width: 100%;
    padding: 6px 10px;
    font-size: 12px;
    border: 1px solid ${({$theme})=>$theme.borderColor};
    border-radius: 4px;
    background: ${({$theme})=>$theme.backgroundColor};
    color: ${({$theme})=>$theme.textColor};
    outline: none;

    &:focus {
      border-color: ${({$theme})=>$theme.accentColor};
    }

    &::placeholder {
      color: ${({$theme})=>$theme.headerTextColor};
      opacity: 0.6;
    }
  }
`,SetFilterList=styled_components_browser_esm.I4.div`
  flex: 1;
  overflow-y: auto;
  max-height: 280px;
`,SetFilterItem=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: ${({$theme})=>$theme.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;
  border-bottom: ${({$selectAll,$theme})=>$selectAll?`1px solid ${$theme.borderColor}`:"none"};
  font-weight: ${({$selectAll})=>$selectAll?"500":"normal"};

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }

  input {
    margin: 0;
    accent-color: ${({$theme})=>$theme.accentColor};
  }
`,SetFilterActions=styled_components_browser_esm.I4.div`
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-top: 1px solid ${({$theme})=>$theme.borderColor};
  background: ${({$theme})=>$theme.headerBackgroundColor};
`,SetFilterButton=styled_components_browser_esm.I4.button`
  flex: 1;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid ${({$theme,$primary})=>$primary?$theme.accentColor:$theme.borderColor};
  border-radius: 4px;
  background: ${({$theme,$primary})=>$primary?$theme.accentColor:$theme.backgroundColor};
  color: ${({$primary,$theme})=>$primary?"#ffffff":$theme.textColor};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    filter: brightness(0.95);
  }
`,FilterPanelColumn=styled_components_browser_esm.I4.div`
  border-bottom: 1px solid ${({$theme})=>$theme.borderColor};
`,FilterPanelHeader=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$theme,$hasFilter})=>$hasFilter?$theme.accentColor:$theme.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${({$expanded})=>$expanded?"rotate(90deg)":"rotate(0deg)"};
    opacity: 0.5;
  }
`,FilterPanelContent=styled_components_browser_esm.I4.div`
  display: ${({$expanded})=>$expanded?"block":"none"};
  padding: 8px 12px;
  background: ${({$theme})=>$theme.headerBackgroundColor}50;
`,GridLayout=styled_components_browser_esm.I4.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,GridMainArea=styled_components_browser_esm.I4.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,ColumnVisibilityDropdown=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 220px;
  max-height: 400px;
  background: ${({$theme})=>$theme.backgroundColor};
  border: 1px solid ${({$theme})=>$theme.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.15s ease;
`,ColumnVisibilityList=styled_components_browser_esm.I4.div`
  flex: 1;
  overflow-y: auto;
`,ColumnVisibilityItem=styled_components_browser_esm.I4.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  color: ${({$theme})=>$theme.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$theme})=>$theme.hoverRowBackgroundColor};
  }

  input {
    margin: 0;
    accent-color: ${({$theme})=>$theme.accentColor};
  }
`;try{GridRoot.displayName="GridRoot",GridRoot.__docgenInfo={description:"",displayName:"GridRoot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GridRoot"]={docgenInfo:GridRoot.__docgenInfo,name:"GridRoot",path:"src/core-components/src/components/ag-grid/elements.tsx#GridRoot"})}catch(__react_docgen_typescript_loader_error){}try{GridWrapper.displayName="GridWrapper",GridWrapper.__docgenInfo={description:"",displayName:"GridWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GridWrapper"]={docgenInfo:GridWrapper.__docgenInfo,name:"GridWrapper",path:"src/core-components/src/components/ag-grid/elements.tsx#GridWrapper"})}catch(__react_docgen_typescript_loader_error){}try{GridToolbar.displayName="GridToolbar",GridToolbar.__docgenInfo={description:"",displayName:"GridToolbar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GridToolbar"]={docgenInfo:GridToolbar.__docgenInfo,name:"GridToolbar",path:"src/core-components/src/components/ag-grid/elements.tsx#GridToolbar"})}catch(__react_docgen_typescript_loader_error){}try{ToolbarGroup.displayName="ToolbarGroup",ToolbarGroup.__docgenInfo={description:"",displayName:"ToolbarGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ToolbarGroup"]={docgenInfo:ToolbarGroup.__docgenInfo,name:"ToolbarGroup",path:"src/core-components/src/components/ag-grid/elements.tsx#ToolbarGroup"})}catch(__react_docgen_typescript_loader_error){}try{ToolbarButton.displayName="ToolbarButton",ToolbarButton.__docgenInfo={description:"",displayName:"ToolbarButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ToolbarButton"]={docgenInfo:ToolbarButton.__docgenInfo,name:"ToolbarButton",path:"src/core-components/src/components/ag-grid/elements.tsx#ToolbarButton"})}catch(__react_docgen_typescript_loader_error){}try{QuickFilter.displayName="QuickFilter",QuickFilter.__docgenInfo={description:"",displayName:"QuickFilter",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#QuickFilter"]={docgenInfo:QuickFilter.__docgenInfo,name:"QuickFilter",path:"src/core-components/src/components/ag-grid/elements.tsx#QuickFilter"})}catch(__react_docgen_typescript_loader_error){}try{TableContainer.displayName="TableContainer",TableContainer.__docgenInfo={description:"",displayName:"TableContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TableContainer"]={docgenInfo:TableContainer.__docgenInfo,name:"TableContainer",path:"src/core-components/src/components/ag-grid/elements.tsx#TableContainer"})}catch(__react_docgen_typescript_loader_error){}try{StyledTable.displayName="StyledTable",StyledTable.__docgenInfo={description:"",displayName:"StyledTable",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#StyledTable"]={docgenInfo:StyledTable.__docgenInfo,name:"StyledTable",path:"src/core-components/src/components/ag-grid/elements.tsx#StyledTable"})}catch(__react_docgen_typescript_loader_error){}try{TableHead.displayName="TableHead",TableHead.__docgenInfo={description:"",displayName:"TableHead",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TableHead"]={docgenInfo:TableHead.__docgenInfo,name:"TableHead",path:"src/core-components/src/components/ag-grid/elements.tsx#TableHead"})}catch(__react_docgen_typescript_loader_error){}try{HeaderRow.displayName="HeaderRow",HeaderRow.__docgenInfo={description:"",displayName:"HeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#HeaderRow"]={docgenInfo:HeaderRow.__docgenInfo,name:"HeaderRow",path:"src/core-components/src/components/ag-grid/elements.tsx#HeaderRow"})}catch(__react_docgen_typescript_loader_error){}try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#HeaderCell"]={docgenInfo:HeaderCell.__docgenInfo,name:"HeaderCell",path:"src/core-components/src/components/ag-grid/elements.tsx#HeaderCell"})}catch(__react_docgen_typescript_loader_error){}try{HeaderCellContent.displayName="HeaderCellContent",HeaderCellContent.__docgenInfo={description:"",displayName:"HeaderCellContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#HeaderCellContent"]={docgenInfo:HeaderCellContent.__docgenInfo,name:"HeaderCellContent",path:"src/core-components/src/components/ag-grid/elements.tsx#HeaderCellContent"})}catch(__react_docgen_typescript_loader_error){}try{HeaderText.displayName="HeaderText",HeaderText.__docgenInfo={description:"",displayName:"HeaderText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#HeaderText"]={docgenInfo:HeaderText.__docgenInfo,name:"HeaderText",path:"src/core-components/src/components/ag-grid/elements.tsx#HeaderText"})}catch(__react_docgen_typescript_loader_error){}try{SortIndicator.displayName="SortIndicator",SortIndicator.__docgenInfo={description:"",displayName:"SortIndicator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SortIndicator"]={docgenInfo:SortIndicator.__docgenInfo,name:"SortIndicator",path:"src/core-components/src/components/ag-grid/elements.tsx#SortIndicator"})}catch(__react_docgen_typescript_loader_error){}try{FilterIndicator.displayName="FilterIndicator",FilterIndicator.__docgenInfo={description:"",displayName:"FilterIndicator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FilterIndicator"]={docgenInfo:FilterIndicator.__docgenInfo,name:"FilterIndicator",path:"src/core-components/src/components/ag-grid/elements.tsx#FilterIndicator"})}catch(__react_docgen_typescript_loader_error){}try{ResizeHandle.displayName="ResizeHandle",ResizeHandle.__docgenInfo={description:"",displayName:"ResizeHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ResizeHandle"]={docgenInfo:ResizeHandle.__docgenInfo,name:"ResizeHandle",path:"src/core-components/src/components/ag-grid/elements.tsx#ResizeHandle"})}catch(__react_docgen_typescript_loader_error){}try{GroupHeaderRow.displayName="GroupHeaderRow",GroupHeaderRow.__docgenInfo={description:"",displayName:"GroupHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GroupHeaderRow"]={docgenInfo:GroupHeaderRow.__docgenInfo,name:"GroupHeaderRow",path:"src/core-components/src/components/ag-grid/elements.tsx#GroupHeaderRow"})}catch(__react_docgen_typescript_loader_error){}try{GroupHeaderCell.displayName="GroupHeaderCell",GroupHeaderCell.__docgenInfo={description:"",displayName:"GroupHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GroupHeaderCell"]={docgenInfo:GroupHeaderCell.__docgenInfo,name:"GroupHeaderCell",path:"src/core-components/src/components/ag-grid/elements.tsx#GroupHeaderCell"})}catch(__react_docgen_typescript_loader_error){}try{FloatingFilterRow.displayName="FloatingFilterRow",FloatingFilterRow.__docgenInfo={description:"",displayName:"FloatingFilterRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FloatingFilterRow"]={docgenInfo:FloatingFilterRow.__docgenInfo,name:"FloatingFilterRow",path:"src/core-components/src/components/ag-grid/elements.tsx#FloatingFilterRow"})}catch(__react_docgen_typescript_loader_error){}try{FloatingFilterCell.displayName="FloatingFilterCell",FloatingFilterCell.__docgenInfo={description:"",displayName:"FloatingFilterCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FloatingFilterCell"]={docgenInfo:FloatingFilterCell.__docgenInfo,name:"FloatingFilterCell",path:"src/core-components/src/components/ag-grid/elements.tsx#FloatingFilterCell"})}catch(__react_docgen_typescript_loader_error){}try{TableBody.displayName="TableBody",TableBody.__docgenInfo={description:"",displayName:"TableBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TableBody"]={docgenInfo:TableBody.__docgenInfo,name:"TableBody",path:"src/core-components/src/components/ag-grid/elements.tsx#TableBody"})}catch(__react_docgen_typescript_loader_error){}try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/core-components/src/components/ag-grid/elements.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/core-components/src/components/ag-grid/elements.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}try{CellContent.displayName="CellContent",CellContent.__docgenInfo={description:"",displayName:"CellContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#CellContent"]={docgenInfo:CellContent.__docgenInfo,name:"CellContent",path:"src/core-components/src/components/ag-grid/elements.tsx#CellContent"})}catch(__react_docgen_typescript_loader_error){}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/core-components/src/components/ag-grid/elements.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}try{CheckboxCell.displayName="CheckboxCell",CheckboxCell.__docgenInfo={description:"",displayName:"CheckboxCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#CheckboxCell"]={docgenInfo:CheckboxCell.__docgenInfo,name:"CheckboxCell",path:"src/core-components/src/components/ag-grid/elements.tsx#CheckboxCell"})}catch(__react_docgen_typescript_loader_error){}try{ExpandButton.displayName="ExpandButton",ExpandButton.__docgenInfo={description:"",displayName:"ExpandButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ExpandButton"]={docgenInfo:ExpandButton.__docgenInfo,name:"ExpandButton",path:"src/core-components/src/components/ag-grid/elements.tsx#ExpandButton"})}catch(__react_docgen_typescript_loader_error){}try{GroupCell.displayName="GroupCell",GroupCell.__docgenInfo={description:"",displayName:"GroupCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GroupCell"]={docgenInfo:GroupCell.__docgenInfo,name:"GroupCell",path:"src/core-components/src/components/ag-grid/elements.tsx#GroupCell"})}catch(__react_docgen_typescript_loader_error){}try{DragHandle.displayName="DragHandle",DragHandle.__docgenInfo={description:"",displayName:"DragHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#DragHandle"]={docgenInfo:DragHandle.__docgenInfo,name:"DragHandle",path:"src/core-components/src/components/ag-grid/elements.tsx#DragHandle"})}catch(__react_docgen_typescript_loader_error){}try{CellEditor.displayName="CellEditor",CellEditor.__docgenInfo={description:"",displayName:"CellEditor",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#CellEditor"]={docgenInfo:CellEditor.__docgenInfo,name:"CellEditor",path:"src/core-components/src/components/ag-grid/elements.tsx#CellEditor"})}catch(__react_docgen_typescript_loader_error){}try{TableFooter.displayName="TableFooter",TableFooter.__docgenInfo={description:"",displayName:"TableFooter",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TableFooter"]={docgenInfo:TableFooter.__docgenInfo,name:"TableFooter",path:"src/core-components/src/components/ag-grid/elements.tsx#TableFooter"})}catch(__react_docgen_typescript_loader_error){}try{FooterRow.displayName="FooterRow",FooterRow.__docgenInfo={description:"",displayName:"FooterRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FooterRow"]={docgenInfo:FooterRow.__docgenInfo,name:"FooterRow",path:"src/core-components/src/components/ag-grid/elements.tsx#FooterRow"})}catch(__react_docgen_typescript_loader_error){}try{FooterCell.displayName="FooterCell",FooterCell.__docgenInfo={description:"",displayName:"FooterCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FooterCell"]={docgenInfo:FooterCell.__docgenInfo,name:"FooterCell",path:"src/core-components/src/components/ag-grid/elements.tsx#FooterCell"})}catch(__react_docgen_typescript_loader_error){}try{PaginationBar.displayName="PaginationBar",PaginationBar.__docgenInfo={description:"",displayName:"PaginationBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PaginationBar"]={docgenInfo:PaginationBar.__docgenInfo,name:"PaginationBar",path:"src/core-components/src/components/ag-grid/elements.tsx#PaginationBar"})}catch(__react_docgen_typescript_loader_error){}try{PaginationInfo.displayName="PaginationInfo",PaginationInfo.__docgenInfo={description:"",displayName:"PaginationInfo",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PaginationInfo"]={docgenInfo:PaginationInfo.__docgenInfo,name:"PaginationInfo",path:"src/core-components/src/components/ag-grid/elements.tsx#PaginationInfo"})}catch(__react_docgen_typescript_loader_error){}try{PaginationControls.displayName="PaginationControls",PaginationControls.__docgenInfo={description:"",displayName:"PaginationControls",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PaginationControls"]={docgenInfo:PaginationControls.__docgenInfo,name:"PaginationControls",path:"src/core-components/src/components/ag-grid/elements.tsx#PaginationControls"})}catch(__react_docgen_typescript_loader_error){}try{PageButton.displayName="PageButton",PageButton.__docgenInfo={description:"",displayName:"PageButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PageButton"]={docgenInfo:PageButton.__docgenInfo,name:"PageButton",path:"src/core-components/src/components/ag-grid/elements.tsx#PageButton"})}catch(__react_docgen_typescript_loader_error){}try{PageSizeSelect.displayName="PageSizeSelect",PageSizeSelect.__docgenInfo={description:"",displayName:"PageSizeSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PageSizeSelect"]={docgenInfo:PageSizeSelect.__docgenInfo,name:"PageSizeSelect",path:"src/core-components/src/components/ag-grid/elements.tsx#PageSizeSelect"})}catch(__react_docgen_typescript_loader_error){}try{StatusBar.displayName="StatusBar",StatusBar.__docgenInfo={description:"",displayName:"StatusBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#StatusBar"]={docgenInfo:StatusBar.__docgenInfo,name:"StatusBar",path:"src/core-components/src/components/ag-grid/elements.tsx#StatusBar"})}catch(__react_docgen_typescript_loader_error){}try{StatusItem.displayName="StatusItem",StatusItem.__docgenInfo={description:"",displayName:"StatusItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#StatusItem"]={docgenInfo:StatusItem.__docgenInfo,name:"StatusItem",path:"src/core-components/src/components/ag-grid/elements.tsx#StatusItem"})}catch(__react_docgen_typescript_loader_error){}try{SideBar.displayName="SideBar",SideBar.__docgenInfo={description:"",displayName:"SideBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SideBar"]={docgenInfo:SideBar.__docgenInfo,name:"SideBar",path:"src/core-components/src/components/ag-grid/elements.tsx#SideBar"})}catch(__react_docgen_typescript_loader_error){}try{SideBarTabs.displayName="SideBarTabs",SideBarTabs.__docgenInfo={description:"",displayName:"SideBarTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SideBarTabs"]={docgenInfo:SideBarTabs.__docgenInfo,name:"SideBarTabs",path:"src/core-components/src/components/ag-grid/elements.tsx#SideBarTabs"})}catch(__react_docgen_typescript_loader_error){}try{SideBarTab.displayName="SideBarTab",SideBarTab.__docgenInfo={description:"",displayName:"SideBarTab",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SideBarTab"]={docgenInfo:SideBarTab.__docgenInfo,name:"SideBarTab",path:"src/core-components/src/components/ag-grid/elements.tsx#SideBarTab"})}catch(__react_docgen_typescript_loader_error){}try{SideBarContent.displayName="SideBarContent",SideBarContent.__docgenInfo={description:"",displayName:"SideBarContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SideBarContent"]={docgenInfo:SideBarContent.__docgenInfo,name:"SideBarContent",path:"src/core-components/src/components/ag-grid/elements.tsx#SideBarContent"})}catch(__react_docgen_typescript_loader_error){}try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"src/core-components/src/components/ag-grid/elements.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}try{LoadingOverlay.displayName="LoadingOverlay",LoadingOverlay.__docgenInfo={description:"",displayName:"LoadingOverlay",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#LoadingOverlay"]={docgenInfo:LoadingOverlay.__docgenInfo,name:"LoadingOverlay",path:"src/core-components/src/components/ag-grid/elements.tsx#LoadingOverlay"})}catch(__react_docgen_typescript_loader_error){}try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/core-components/src/components/ag-grid/elements.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{NoRowsOverlay.displayName="NoRowsOverlay",NoRowsOverlay.__docgenInfo={description:"",displayName:"NoRowsOverlay",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#NoRowsOverlay"]={docgenInfo:NoRowsOverlay.__docgenInfo,name:"NoRowsOverlay",path:"src/core-components/src/components/ag-grid/elements.tsx#NoRowsOverlay"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenu.displayName="ContextMenu",ContextMenu.__docgenInfo={description:"",displayName:"ContextMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"src/core-components/src/components/ag-grid/elements.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenuItem.displayName="ContextMenuItem",ContextMenuItem.__docgenInfo={description:"",displayName:"ContextMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ContextMenuItem"]={docgenInfo:ContextMenuItem.__docgenInfo,name:"ContextMenuItem",path:"src/core-components/src/components/ag-grid/elements.tsx#ContextMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{ContextMenuDivider.displayName="ContextMenuDivider",ContextMenuDivider.__docgenInfo={description:"",displayName:"ContextMenuDivider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ContextMenuDivider"]={docgenInfo:ContextMenuDivider.__docgenInfo,name:"ContextMenuDivider",path:"src/core-components/src/components/ag-grid/elements.tsx#ContextMenuDivider"})}catch(__react_docgen_typescript_loader_error){}try{ColumnMenu.displayName="ColumnMenu",ColumnMenu.__docgenInfo={description:"",displayName:"ColumnMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnMenu"]={docgenInfo:ColumnMenu.__docgenInfo,name:"ColumnMenu",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnMenu"})}catch(__react_docgen_typescript_loader_error){}try{MobileCardContainer.displayName="MobileCardContainer",MobileCardContainer.__docgenInfo={description:"",displayName:"MobileCardContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#MobileCardContainer"]={docgenInfo:MobileCardContainer.__docgenInfo,name:"MobileCardContainer",path:"src/core-components/src/components/ag-grid/elements.tsx#MobileCardContainer"})}catch(__react_docgen_typescript_loader_error){}try{MobileCard.displayName="MobileCard",MobileCard.__docgenInfo={description:"",displayName:"MobileCard",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#MobileCard"]={docgenInfo:MobileCard.__docgenInfo,name:"MobileCard",path:"src/core-components/src/components/ag-grid/elements.tsx#MobileCard"})}catch(__react_docgen_typescript_loader_error){}try{MobileCardHeader.displayName="MobileCardHeader",MobileCardHeader.__docgenInfo={description:"",displayName:"MobileCardHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#MobileCardHeader"]={docgenInfo:MobileCardHeader.__docgenInfo,name:"MobileCardHeader",path:"src/core-components/src/components/ag-grid/elements.tsx#MobileCardHeader"})}catch(__react_docgen_typescript_loader_error){}try{MobileCardRow.displayName="MobileCardRow",MobileCardRow.__docgenInfo={description:"",displayName:"MobileCardRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#MobileCardRow"]={docgenInfo:MobileCardRow.__docgenInfo,name:"MobileCardRow",path:"src/core-components/src/components/ag-grid/elements.tsx#MobileCardRow"})}catch(__react_docgen_typescript_loader_error){}try{MobileCardLabel.displayName="MobileCardLabel",MobileCardLabel.__docgenInfo={description:"",displayName:"MobileCardLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#MobileCardLabel"]={docgenInfo:MobileCardLabel.__docgenInfo,name:"MobileCardLabel",path:"src/core-components/src/components/ag-grid/elements.tsx#MobileCardLabel"})}catch(__react_docgen_typescript_loader_error){}try{MobileCardValue.displayName="MobileCardValue",MobileCardValue.__docgenInfo={description:"",displayName:"MobileCardValue",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#MobileCardValue"]={docgenInfo:MobileCardValue.__docgenInfo,name:"MobileCardValue",path:"src/core-components/src/components/ag-grid/elements.tsx#MobileCardValue"})}catch(__react_docgen_typescript_loader_error){}try{SkeletonRow.displayName="SkeletonRow",SkeletonRow.__docgenInfo={description:"",displayName:"SkeletonRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SkeletonRow"]={docgenInfo:SkeletonRow.__docgenInfo,name:"SkeletonRow",path:"src/core-components/src/components/ag-grid/elements.tsx#SkeletonRow"})}catch(__react_docgen_typescript_loader_error){}try{SkeletonCell.displayName="SkeletonCell",SkeletonCell.__docgenInfo={description:"",displayName:"SkeletonCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SkeletonCell"]={docgenInfo:SkeletonCell.__docgenInfo,name:"SkeletonCell",path:"src/core-components/src/components/ag-grid/elements.tsx#SkeletonCell"})}catch(__react_docgen_typescript_loader_error){}try{SkeletonBlock.displayName="SkeletonBlock",SkeletonBlock.__docgenInfo={description:"",displayName:"SkeletonBlock",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SkeletonBlock"]={docgenInfo:SkeletonBlock.__docgenInfo,name:"SkeletonBlock",path:"src/core-components/src/components/ag-grid/elements.tsx#SkeletonBlock"})}catch(__react_docgen_typescript_loader_error){}try{TooltipContainer.displayName="TooltipContainer",TooltipContainer.__docgenInfo={description:"",displayName:"TooltipContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#TooltipContainer"]={docgenInfo:TooltipContainer.__docgenInfo,name:"TooltipContainer",path:"src/core-components/src/components/ag-grid/elements.tsx#TooltipContainer"})}catch(__react_docgen_typescript_loader_error){}try{DragGhost.displayName="DragGhost",DragGhost.__docgenInfo={description:"",displayName:"DragGhost",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#DragGhost"]={docgenInfo:DragGhost.__docgenInfo,name:"DragGhost",path:"src/core-components/src/components/ag-grid/elements.tsx#DragGhost"})}catch(__react_docgen_typescript_loader_error){}try{SelectionBar.displayName="SelectionBar",SelectionBar.__docgenInfo={description:"",displayName:"SelectionBar",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SelectionBar"]={docgenInfo:SelectionBar.__docgenInfo,name:"SelectionBar",path:"src/core-components/src/components/ag-grid/elements.tsx#SelectionBar"})}catch(__react_docgen_typescript_loader_error){}try{SelectionActions.displayName="SelectionActions",SelectionActions.__docgenInfo={description:"",displayName:"SelectionActions",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SelectionActions"]={docgenInfo:SelectionActions.__docgenInfo,name:"SelectionActions",path:"src/core-components/src/components/ag-grid/elements.tsx#SelectionActions"})}catch(__react_docgen_typescript_loader_error){}try{SidePanel.displayName="SidePanel",SidePanel.__docgenInfo={description:"",displayName:"SidePanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanel"]={docgenInfo:SidePanel.__docgenInfo,name:"SidePanel",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanel"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelTabs.displayName="SidePanelTabs",SidePanelTabs.__docgenInfo={description:"",displayName:"SidePanelTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelTabs"]={docgenInfo:SidePanelTabs.__docgenInfo,name:"SidePanelTabs",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelTabs"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelTab.displayName="SidePanelTab",SidePanelTab.__docgenInfo={description:"",displayName:"SidePanelTab",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelTab"]={docgenInfo:SidePanelTab.__docgenInfo,name:"SidePanelTab",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelTab"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelContent.displayName="SidePanelContent",SidePanelContent.__docgenInfo={description:"",displayName:"SidePanelContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelContent"]={docgenInfo:SidePanelContent.__docgenInfo,name:"SidePanelContent",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelContent"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelSearch.displayName="SidePanelSearch",SidePanelSearch.__docgenInfo={description:"",displayName:"SidePanelSearch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelSearch"]={docgenInfo:SidePanelSearch.__docgenInfo,name:"SidePanelSearch",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelSearch"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelSection.displayName="SidePanelSection",SidePanelSection.__docgenInfo={description:"",displayName:"SidePanelSection",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelSection"]={docgenInfo:SidePanelSection.__docgenInfo,name:"SidePanelSection",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelSection"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelSectionHeader.displayName="SidePanelSectionHeader",SidePanelSectionHeader.__docgenInfo={description:"",displayName:"SidePanelSectionHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelSectionHeader"]={docgenInfo:SidePanelSectionHeader.__docgenInfo,name:"SidePanelSectionHeader",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelSectionHeader"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelColumnItem.displayName="SidePanelColumnItem",SidePanelColumnItem.__docgenInfo={description:"",displayName:"SidePanelColumnItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelColumnItem"]={docgenInfo:SidePanelColumnItem.__docgenInfo,name:"SidePanelColumnItem",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelColumnItem"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelDragHandle.displayName="SidePanelDragHandle",SidePanelDragHandle.__docgenInfo={description:"",displayName:"SidePanelDragHandle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelDragHandle"]={docgenInfo:SidePanelDragHandle.__docgenInfo,name:"SidePanelDragHandle",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelDragHandle"})}catch(__react_docgen_typescript_loader_error){}try{SidePanelGroupLabel.displayName="SidePanelGroupLabel",SidePanelGroupLabel.__docgenInfo={description:"",displayName:"SidePanelGroupLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SidePanelGroupLabel"]={docgenInfo:SidePanelGroupLabel.__docgenInfo,name:"SidePanelGroupLabel",path:"src/core-components/src/components/ag-grid/elements.tsx#SidePanelGroupLabel"})}catch(__react_docgen_typescript_loader_error){}try{RowGroupsZone.displayName="RowGroupsZone",RowGroupsZone.__docgenInfo={description:"",displayName:"RowGroupsZone",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#RowGroupsZone"]={docgenInfo:RowGroupsZone.__docgenInfo,name:"RowGroupsZone",path:"src/core-components/src/components/ag-grid/elements.tsx#RowGroupsZone"})}catch(__react_docgen_typescript_loader_error){}try{RowGroupsLabel.displayName="RowGroupsLabel",RowGroupsLabel.__docgenInfo={description:"",displayName:"RowGroupsLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#RowGroupsLabel"]={docgenInfo:RowGroupsLabel.__docgenInfo,name:"RowGroupsLabel",path:"src/core-components/src/components/ag-grid/elements.tsx#RowGroupsLabel"})}catch(__react_docgen_typescript_loader_error){}try{RowGroupChip.displayName="RowGroupChip",RowGroupChip.__docgenInfo={description:"",displayName:"RowGroupChip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#RowGroupChip"]={docgenInfo:RowGroupChip.__docgenInfo,name:"RowGroupChip",path:"src/core-components/src/components/ag-grid/elements.tsx#RowGroupChip"})}catch(__react_docgen_typescript_loader_error){}try{ValuesPanel.displayName="ValuesPanel",ValuesPanel.__docgenInfo={description:"",displayName:"ValuesPanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ValuesPanel"]={docgenInfo:ValuesPanel.__docgenInfo,name:"ValuesPanel",path:"src/core-components/src/components/ag-grid/elements.tsx#ValuesPanel"})}catch(__react_docgen_typescript_loader_error){}try{ValueItem.displayName="ValueItem",ValueItem.__docgenInfo={description:"",displayName:"ValueItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ValueItem"]={docgenInfo:ValueItem.__docgenInfo,name:"ValueItem",path:"src/core-components/src/components/ag-grid/elements.tsx#ValueItem"})}catch(__react_docgen_typescript_loader_error){}try{ValueItemLabel.displayName="ValueItemLabel",ValueItemLabel.__docgenInfo={description:"",displayName:"ValueItemLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ValueItemLabel"]={docgenInfo:ValueItemLabel.__docgenInfo,name:"ValueItemLabel",path:"src/core-components/src/components/ag-grid/elements.tsx#ValueItemLabel"})}catch(__react_docgen_typescript_loader_error){}try{ValueItemRemove.displayName="ValueItemRemove",ValueItemRemove.__docgenInfo={description:"",displayName:"ValueItemRemove",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ValueItemRemove"]={docgenInfo:ValueItemRemove.__docgenInfo,name:"ValueItemRemove",path:"src/core-components/src/components/ag-grid/elements.tsx#ValueItemRemove"})}catch(__react_docgen_typescript_loader_error){}try{PivotModeToggle.displayName="PivotModeToggle",PivotModeToggle.__docgenInfo={description:"",displayName:"PivotModeToggle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PivotModeToggle"]={docgenInfo:PivotModeToggle.__docgenInfo,name:"PivotModeToggle",path:"src/core-components/src/components/ag-grid/elements.tsx#PivotModeToggle"})}catch(__react_docgen_typescript_loader_error){}try{PivotModeLabel.displayName="PivotModeLabel",PivotModeLabel.__docgenInfo={description:"",displayName:"PivotModeLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#PivotModeLabel"]={docgenInfo:PivotModeLabel.__docgenInfo,name:"PivotModeLabel",path:"src/core-components/src/components/ag-grid/elements.tsx#PivotModeLabel"})}catch(__react_docgen_typescript_loader_error){}try{ToggleSwitch.displayName="ToggleSwitch",ToggleSwitch.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ToggleSwitch"]={docgenInfo:ToggleSwitch.__docgenInfo,name:"ToggleSwitch",path:"src/core-components/src/components/ag-grid/elements.tsx#ToggleSwitch"})}catch(__react_docgen_typescript_loader_error){}try{HeaderMenuButton.displayName="HeaderMenuButton",HeaderMenuButton.__docgenInfo={description:"",displayName:"HeaderMenuButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#HeaderMenuButton"]={docgenInfo:HeaderMenuButton.__docgenInfo,name:"HeaderMenuButton",path:"src/core-components/src/components/ag-grid/elements.tsx#HeaderMenuButton"})}catch(__react_docgen_typescript_loader_error){}try{ColumnMenuPopup.displayName="ColumnMenuPopup",ColumnMenuPopup.__docgenInfo={description:"",displayName:"ColumnMenuPopup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuPopup"]={docgenInfo:ColumnMenuPopup.__docgenInfo,name:"ColumnMenuPopup",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuPopup"})}catch(__react_docgen_typescript_loader_error){}try{ColumnMenuSection.displayName="ColumnMenuSection",ColumnMenuSection.__docgenInfo={description:"",displayName:"ColumnMenuSection",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuSection"]={docgenInfo:ColumnMenuSection.__docgenInfo,name:"ColumnMenuSection",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuSection"})}catch(__react_docgen_typescript_loader_error){}try{ColumnMenuItem.displayName="ColumnMenuItem",ColumnMenuItem.__docgenInfo={description:"",displayName:"ColumnMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuItem"]={docgenInfo:ColumnMenuItem.__docgenInfo,name:"ColumnMenuItem",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{ColumnMenuSubmenu.displayName="ColumnMenuSubmenu",ColumnMenuSubmenu.__docgenInfo={description:"",displayName:"ColumnMenuSubmenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuSubmenu"]={docgenInfo:ColumnMenuSubmenu.__docgenInfo,name:"ColumnMenuSubmenu",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnMenuSubmenu"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterContainer.displayName="SetFilterContainer",SetFilterContainer.__docgenInfo={description:"",displayName:"SetFilterContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterContainer"]={docgenInfo:SetFilterContainer.__docgenInfo,name:"SetFilterContainer",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterContainer"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterHeader.displayName="SetFilterHeader",SetFilterHeader.__docgenInfo={description:"",displayName:"SetFilterHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterHeader"]={docgenInfo:SetFilterHeader.__docgenInfo,name:"SetFilterHeader",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterHeader"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterSearch.displayName="SetFilterSearch",SetFilterSearch.__docgenInfo={description:"",displayName:"SetFilterSearch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterSearch"]={docgenInfo:SetFilterSearch.__docgenInfo,name:"SetFilterSearch",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterSearch"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterList.displayName="SetFilterList",SetFilterList.__docgenInfo={description:"",displayName:"SetFilterList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterList"]={docgenInfo:SetFilterList.__docgenInfo,name:"SetFilterList",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterList"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterItem.displayName="SetFilterItem",SetFilterItem.__docgenInfo={description:"",displayName:"SetFilterItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterItem"]={docgenInfo:SetFilterItem.__docgenInfo,name:"SetFilterItem",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterItem"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterActions.displayName="SetFilterActions",SetFilterActions.__docgenInfo={description:"",displayName:"SetFilterActions",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterActions"]={docgenInfo:SetFilterActions.__docgenInfo,name:"SetFilterActions",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterActions"})}catch(__react_docgen_typescript_loader_error){}try{SetFilterButton.displayName="SetFilterButton",SetFilterButton.__docgenInfo={description:"",displayName:"SetFilterButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#SetFilterButton"]={docgenInfo:SetFilterButton.__docgenInfo,name:"SetFilterButton",path:"src/core-components/src/components/ag-grid/elements.tsx#SetFilterButton"})}catch(__react_docgen_typescript_loader_error){}try{FilterPanelColumn.displayName="FilterPanelColumn",FilterPanelColumn.__docgenInfo={description:"",displayName:"FilterPanelColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FilterPanelColumn"]={docgenInfo:FilterPanelColumn.__docgenInfo,name:"FilterPanelColumn",path:"src/core-components/src/components/ag-grid/elements.tsx#FilterPanelColumn"})}catch(__react_docgen_typescript_loader_error){}try{FilterPanelHeader.displayName="FilterPanelHeader",FilterPanelHeader.__docgenInfo={description:"",displayName:"FilterPanelHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FilterPanelHeader"]={docgenInfo:FilterPanelHeader.__docgenInfo,name:"FilterPanelHeader",path:"src/core-components/src/components/ag-grid/elements.tsx#FilterPanelHeader"})}catch(__react_docgen_typescript_loader_error){}try{FilterPanelContent.displayName="FilterPanelContent",FilterPanelContent.__docgenInfo={description:"",displayName:"FilterPanelContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#FilterPanelContent"]={docgenInfo:FilterPanelContent.__docgenInfo,name:"FilterPanelContent",path:"src/core-components/src/components/ag-grid/elements.tsx#FilterPanelContent"})}catch(__react_docgen_typescript_loader_error){}try{GridLayout.displayName="GridLayout",GridLayout.__docgenInfo={description:"",displayName:"GridLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GridLayout"]={docgenInfo:GridLayout.__docgenInfo,name:"GridLayout",path:"src/core-components/src/components/ag-grid/elements.tsx#GridLayout"})}catch(__react_docgen_typescript_loader_error){}try{GridMainArea.displayName="GridMainArea",GridMainArea.__docgenInfo={description:"",displayName:"GridMainArea",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#GridMainArea"]={docgenInfo:GridMainArea.__docgenInfo,name:"GridMainArea",path:"src/core-components/src/components/ag-grid/elements.tsx#GridMainArea"})}catch(__react_docgen_typescript_loader_error){}try{ColumnVisibilityDropdown.displayName="ColumnVisibilityDropdown",ColumnVisibilityDropdown.__docgenInfo={description:"",displayName:"ColumnVisibilityDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnVisibilityDropdown"]={docgenInfo:ColumnVisibilityDropdown.__docgenInfo,name:"ColumnVisibilityDropdown",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnVisibilityDropdown"})}catch(__react_docgen_typescript_loader_error){}try{ColumnVisibilityList.displayName="ColumnVisibilityList",ColumnVisibilityList.__docgenInfo={description:"",displayName:"ColumnVisibilityList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnVisibilityList"]={docgenInfo:ColumnVisibilityList.__docgenInfo,name:"ColumnVisibilityList",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnVisibilityList"})}catch(__react_docgen_typescript_loader_error){}try{ColumnVisibilityItem.displayName="ColumnVisibilityItem",ColumnVisibilityItem.__docgenInfo={description:"",displayName:"ColumnVisibilityItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/elements.tsx#ColumnVisibilityItem"]={docgenInfo:ColumnVisibilityItem.__docgenInfo,name:"ColumnVisibilityItem",path:"src/core-components/src/components/ag-grid/elements.tsx#ColumnVisibilityItem"})}catch(__react_docgen_typescript_loader_error){}function matchesFilter(value,filter){if(null==value)return!1;const strValue=String(value).toLowerCase();switch(filter.filterType){case"text":if(null==filter.filter)return!0;const filterStr=String(filter.filter).toLowerCase();switch(filter.type){case"equals":return strValue===filterStr;case"notEqual":return strValue!==filterStr;case"startsWith":return strValue.startsWith(filterStr);case"endsWith":return strValue.endsWith(filterStr);case"contains":default:return strValue.includes(filterStr);case"notContains":return!strValue.includes(filterStr)}case"number":const numValue=Number(value),filterNum=Number(filter.filter);if(isNaN(numValue)||isNaN(filterNum))return!1;switch(filter.type){case"equals":return numValue===filterNum;case"notEqual":return numValue!==filterNum;case"greaterThan":return numValue>filterNum;case"greaterThanOrEqual":return numValue>=filterNum;case"lessThan":return numValue<filterNum;case"lessThanOrEqual":return numValue<=filterNum;case"inRange":return numValue>=filterNum&&numValue<=Number(filter.filterTo);default:return!0}case"date":const dateValue=new Date(value);if(isNaN(dateValue.getTime()))return!1;if(filter.dateFrom){const from=new Date(filter.dateFrom);if(filter.dateTo){const to=new Date(filter.dateTo);return dateValue>=from&&dateValue<=to}switch(filter.type){case"equals":return dateValue.toDateString()===from.toDateString();case"greaterThan":return dateValue>from;case"lessThan":return dateValue<from;default:return dateValue>=from}}return!0;case"set":return!filter.values||0===filter.values.length||filter.values.includes(String(value));default:return!0}}function getNestedValue(obj,path){return path.split(".").reduce(((acc,part)=>acc?.[part]),obj)}function createRowNode(data,index,id){const rowId=id||String(index);return{id:rowId,data,rowIndex:index,isSelected:!1,expanded:!1,level:0,setData:()=>{},setSelected:()=>{},isSelectable:()=>!0,setExpanded:()=>{},getRowId:()=>rowId}}const aggregations_sum=values=>values.reduce(((a,b)=>(a||0)+(b||0)),0),aggregations_avg=values=>{const validValues=values.filter((v=>null!=v&&!isNaN(v)));return validValues.length?validValues.reduce(((a,b)=>a+b),0)/validValues.length:0},aggregations_min=values=>Math.min(...values.filter((v=>null!=v&&!isNaN(v)))),aggregations_max=values=>Math.max(...values.filter((v=>null!=v&&!isNaN(v)))),aggregations_count=values=>values.length;function exportToCsv(data,columns,filename="export.csv"){const exportCols=columns.filter((col=>!col.suppressCsvExport&&!col.hide)),csv=[exportCols.map((col=>`"${col.headerName||col.field||""}"`)).join(","),...data.map((row=>exportCols.map((col=>{if(!col.field)return'""';const value=getNestedValue(row,col.field);if(null==value)return'""';return`"${String(value).replace(/"/g,'""')}"`})).join(",")))].join("\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url,link.download=filename,link.click(),URL.revokeObjectURL(url)}const SearchIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("circle",{cx:"11",cy:"11",r:"8"}),react.createElement("path",{d:"M21 21l-4.35-4.35",strokeLinecap:"round"})),SortAscIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M7 14l5-5 5 5H7z"})),SortDescIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M7 10l5 5 5-5H7z"})),FilterIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M22 3H2l8 9.46V19l4 2v-8.54L22 3z",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronLeftIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronsLeftIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M11 17l-5-5 5-5M18 17l-5-5 5-5",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronsRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M13 7l5 5-5 5M6 7l5 5-5 5",strokeLinecap:"round",strokeLinejoin:"round"})),DownloadIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",strokeLinecap:"round",strokeLinejoin:"round"})),ColumnsIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("rect",{x:"3",y:"3",width:"7",height:"18",rx:"1"}),react.createElement("rect",{x:"14",y:"3",width:"7",height:"18",rx:"1"})),RefreshIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M23 4v6h-6M1 20v-6h6",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15",strokeLinecap:"round",strokeLinejoin:"round"})),MenuIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("circle",{cx:"12",cy:"12",r:"1"}),react.createElement("circle",{cx:"12",cy:"5",r:"1"}),react.createElement("circle",{cx:"12",cy:"19",r:"1"})),GripIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",opacity:"0.5"},react.createElement("circle",{cx:"9",cy:"5",r:"1.5"}),react.createElement("circle",{cx:"9",cy:"12",r:"1.5"}),react.createElement("circle",{cx:"9",cy:"19",r:"1.5"}),react.createElement("circle",{cx:"15",cy:"5",r:"1.5"}),react.createElement("circle",{cx:"15",cy:"12",r:"1.5"}),react.createElement("circle",{cx:"15",cy:"19",r:"1.5"})),EmptyIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5"},react.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),react.createElement("path",{d:"M3 9h18M9 3v18",strokeLinecap:"round"})),CloseIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})),PinIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M12 2v10M12 22v-6M4 12h16",strokeLinecap:"round"}),react.createElement("circle",{cx:"12",cy:"12",r:"3"})),PinLeftIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M4 4v16M8 12h12M15 7l5 5-5 5",strokeLinecap:"round",strokeLinejoin:"round"})),PinRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M20 4v16M4 12h12M9 7l-5 5 5 5",strokeLinecap:"round",strokeLinejoin:"round"})),NoPinIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M3 3l18 18M12 2v10M12 22v-6",strokeLinecap:"round"}),react.createElement("circle",{cx:"12",cy:"12",r:"3"})),GroupIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M4 6h16M4 12h16M4 18h16",strokeLinecap:"round"})),AutosizeIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M4 12h16M9 7l-5 5 5 5M15 7l5 5-5 5",strokeLinecap:"round",strokeLinejoin:"round"})),ResetIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M3 3v5h5",strokeLinecap:"round",strokeLinejoin:"round"})),SigmaIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M18 6H6l6 6-6 6h12",strokeLinecap:"round",strokeLinejoin:"round"})),PanelRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),react.createElement("path",{d:"M15 3v18",strokeLinecap:"round"}));function isColGroupDef(col){return"children"in col}function flattenColumnDefs(columns){const result=[];return columns.forEach((col=>{isColGroupDef(col)?result.push(...flattenColumnDefs(col.children)):result.push(col)})),result}function AgGridInner(props,ref){const{rowData,columnDefs,defaultColDef,getRowId=params=>String(params.data._id??params.data.id??Math.random()),theme="quartz",customTheme,rowHeight=42,headerHeight=42,floatingFiltersHeight=32,domLayout="normal",rowSelection,rowMultiSelectWithClick=!1,suppressRowClickSelection=!1,isRowSelectable,sortable=!0,suppressMultiSort=!1,alwaysMultiSort=!1,filter=!0,floatingFilter=!1,quickFilterText:controlledQuickFilter,pagination=!1,paginationPageSize=10,paginationPageSizeSelector=[10,25,50,100],suppressPaginationPanel=!1,singleClickEdit=!1,stopEditingWhenCellsLoseFocus=!0,undoRedoCellEditing=!1,groupDefaultExpanded=0,masterDetail=!1,detailCellRenderer,isRowMaster,rowDragManaged=!1,loadingOverlayComponent,noRowsOverlayComponent,statusBar,enableClipboard=!0,suppressCsvExport=!1,getContextMenuItems,suppressContextMenu=!1,enableBrowserTooltips=!1,responsive=!0,mobileBreakpoint=768,mobileCardRenderer,animateRows=!0,enableRtl=!1,onGridReady,onCellClicked,onCellDoubleClicked,onCellValueChanged,onRowClicked,onRowDoubleClicked,onRowSelected,onSelectionChanged,onSortChanged,onFilterChanged,onPaginationChanged,containerStyle,containerClassName,context,gridId}=props,gridTheme=(0,react.useMemo)((()=>{return custom=customTheme,{...themes[theme],...custom};var custom}),[theme,customTheme]),flatColumns=(0,react.useMemo)((()=>flattenColumnDefs(columnDefs).map((col=>({...defaultColDef,...col,colId:col.colId||col.field||`col-${Math.random()}`})))),[columnDefs,defaultColDef]),{columnState,processedColumns,visibleColumns,setColumnVisible,setColumnWidth,setColumnPinned,moveColumn,resetColumnState}=function useColumnState(columns,persistKey){const[columnState,setColumnState]=(0,react.useState)((()=>{if(persistKey&&"undefined"!=typeof window){const saved=localStorage.getItem(`ag-grid-columns-${persistKey}`);if(saved)try{return JSON.parse(saved)}catch(e){}}return columns.map((col=>({colId:col.colId||col.field||"",hide:col.hide??col.initialHide??!1,width:col.width??col.initialWidth,pinned:col.pinned??col.initialPinned??null,sort:col.sort??null})))}));(0,react.useEffect)((()=>{persistKey&&"undefined"!=typeof window&&localStorage.setItem(`ag-grid-columns-${persistKey}`,JSON.stringify(columnState))}),[columnState,persistKey]);const getColumnState=(0,react.useCallback)((colId=>columnState.find((s=>s.colId===colId))),[columnState]),getColId=colIdOrColumn=>"string"==typeof colIdOrColumn?colIdOrColumn:colIdOrColumn.colId,setColumnVisible=(0,react.useCallback)(((colIdOrColumn,visible)=>{const colId=getColId(colIdOrColumn);setColumnState((prev=>prev.map((s=>s.colId===colId?{...s,hide:!visible}:s))))}),[]),setColumnWidth=(0,react.useCallback)(((colIdOrColumn,width)=>{const colId=getColId(colIdOrColumn);setColumnState((prev=>prev.map((s=>s.colId===colId?{...s,width}:s))))}),[]),setColumnPinned=(0,react.useCallback)(((colIdOrColumn,pinned)=>{const colId=getColId(colIdOrColumn);setColumnState((prev=>prev.map((s=>s.colId===colId?{...s,pinned}:s))))}),[]),moveColumn=(0,react.useCallback)(((colIdOrColumn,toIndex)=>{const colId=getColId(colIdOrColumn);setColumnState((prev=>{const fromIndex=prev.findIndex((s=>s.colId===colId));if(-1===fromIndex||fromIndex===toIndex)return prev;const next=[...prev],[removed]=next.splice(fromIndex,1);return next.splice(toIndex,0,removed),next}))}),[]),resetColumnState=(0,react.useCallback)((()=>{setColumnState(columns.map((col=>({colId:col.colId||col.field||"",hide:col.hide??col.initialHide??!1,width:col.width??col.initialWidth,pinned:col.pinned??col.initialPinned??null,sort:col.sort??null}))))}),[columns]),processedColumns=(0,react.useMemo)((()=>columnState.map((state=>{const col=columns.find((c=>(c.colId||c.field)===state.colId));return col?{...col,hide:state.hide,width:state.width,pinned:state.pinned,sort:state.sort}:null})).filter(Boolean)),[columns,columnState]),visibleColumns=(0,react.useMemo)((()=>processedColumns.filter((col=>!col.hide))),[processedColumns]);return{columnState,setColumnState,getColumnState,setColumnVisible,setColumnWidth,setColumnPinned,moveColumn,resetColumnState,processedColumns,visibleColumns}}(flatColumns,gridId),{sortModel,handleSort,getSortForColumn,clearSort,sortData}=function useSorting(initialSort=[],multiSort=!1){const[sortModel,setSortModel]=(0,react.useState)(initialSort),handleSort=(0,react.useCallback)(((colId,multiSortKey=!1)=>{setSortModel((prev=>{const existing=prev.find((s=>s.colId===colId));let nextSort;return nextSort=existing?"asc"===existing.sort?"desc":null:"asc",multiSort&&multiSortKey?null===nextSort?prev.filter((s=>s.colId!==colId)):existing?prev.map((s=>s.colId===colId?{...s,sort:nextSort}:s)):[...prev,{colId,sort:nextSort}]:null===nextSort?[]:[{colId,sort:nextSort}]}))}),[multiSort]),getSortForColumn=(0,react.useCallback)((colId=>{const index=sortModel.findIndex((s=>s.colId===colId));return-1===index?{sort:null}:{sort:sortModel[index].sort,sortIndex:multiSort?index:void 0}}),[sortModel,multiSort]),clearSort=(0,react.useCallback)((()=>{setSortModel([])}),[]),sortData=(0,react.useCallback)(((data,columns)=>0===sortModel.length?data:[...data].sort(((a,b)=>{for(const{colId,sort}of sortModel){if(!sort)continue;const col=columns.find((c=>c.field===colId||c.colId===colId));if(!col||!col.field)continue;const field=col.field,aVal=getNestedValue(a,field),bVal=getNestedValue(b,field);if(col.comparator){const nodeA=createRowNode(a,0),nodeB=createRowNode(b,0),result=col.comparator(aVal,bVal,nodeA,nodeB,"desc"===sort);if(0!==result)return"asc"===sort?result:-result;continue}let comparison=0;if(comparison=aVal===bVal?0:null==aVal?1:null==bVal?-1:"string"==typeof aVal&&"string"==typeof bVal?aVal.localeCompare(bVal):aVal<bVal?-1:1,0!==comparison)return"asc"===sort?comparison:-comparison}return 0}))),[sortModel]);return{sortModel,setSortModel,handleSort,getSortForColumn,clearSort,sortData}}([],!suppressMultiSort||alwaysMultiSort),{filterModel,quickFilterText,setQuickFilterText,setColumnFilter,clearFilters,isFilterActive,hasActiveFilters,filterData}=function useFiltering(initialFilters={}){const[filterModel,setFilterModel]=(0,react.useState)(initialFilters),[quickFilterText,setQuickFilterText]=(0,react.useState)(""),setColumnFilter=(0,react.useCallback)(((field,filter)=>{setFilterModel((prev=>{if(null===filter){const{[field]:_,...rest}=prev;return rest}return{...prev,[field]:filter}}))}),[]),clearFilters=(0,react.useCallback)((()=>{setFilterModel({}),setQuickFilterText("")}),[]),isFilterActive=(0,react.useCallback)((field=>field in filterModel),[filterModel]),hasActiveFilters=(0,react.useMemo)((()=>Object.keys(filterModel).length>0||quickFilterText.length>0),[filterModel,quickFilterText]),filterData=(0,react.useCallback)(((data,columns)=>{let filtered=data;for(const[field,filter]of Object.entries(filterModel))filtered=filtered.filter((row=>matchesFilter(getNestedValue(row,field),filter)));if(quickFilterText){const search=quickFilterText.toLowerCase();filtered=filtered.filter((row=>columns.some((col=>{if(!col.field)return!1;const value=getNestedValue(row,col.field);return null!=value&&String(value).toLowerCase().includes(search)}))))}return filtered}),[filterModel,quickFilterText]);return{filterModel,setFilterModel,quickFilterText,setQuickFilterText,setColumnFilter,clearFilters,isFilterActive,hasActiveFilters,filterData}}();(0,react.useEffect)((()=>{void 0!==controlledQuickFilter&&setQuickFilterText(controlledQuickFilter)}),[controlledQuickFilter,setQuickFilterText]);const[setFilterStates,setSetFilterStates]=(0,react.useState)({}),processedData=(0,react.useMemo)((()=>{let data=[...rowData];return data=filterData(data,visibleColumns),Object.entries(setFilterStates).forEach((([field,selectedValues])=>{const allValues=new Set;rowData.forEach((row=>{const value=getNestedValue(row,field);null!=value&&allValues.add(String(value))})),selectedValues.size>0&&selectedValues.size<allValues.size?data=data.filter((row=>{const value=getNestedValue(row,field);return null!=value&&selectedValues.has(String(value))})):0===selectedValues.size&&(data=[])})),data=sortData(data,visibleColumns),data}),[rowData,filterData,sortData,visibleColumns,setFilterStates]),{currentPage,pageSize,totalPages,startRow,endRow,goToPage,goToNextPage,goToPreviousPage,goToFirstPage,goToLastPage,changePageSize,paginateData}=function usePagination(totalRows,initialPageSize=10,initialPage=0){const[currentPage,setCurrentPage]=(0,react.useState)(initialPage),[pageSize,setPageSize]=(0,react.useState)(initialPageSize),totalPages=(0,react.useMemo)((()=>Math.max(1,Math.ceil(totalRows/pageSize))),[totalRows,pageSize]);(0,react.useEffect)((()=>{currentPage>=totalPages&&setCurrentPage(Math.max(0,totalPages-1))}),[totalPages,currentPage]);const goToPage=(0,react.useCallback)((page=>{const validPage=Math.max(0,Math.min(page,totalPages-1));setCurrentPage(validPage)}),[totalPages]),goToNextPage=(0,react.useCallback)((()=>goToPage(currentPage+1)),[currentPage,goToPage]),goToPreviousPage=(0,react.useCallback)((()=>goToPage(currentPage-1)),[currentPage,goToPage]),goToFirstPage=(0,react.useCallback)((()=>goToPage(0)),[goToPage]),goToLastPage=(0,react.useCallback)((()=>goToPage(totalPages-1)),[totalPages,goToPage]),changePageSize=(0,react.useCallback)((size=>{setPageSize(size),setCurrentPage(0)}),[]),startRow=currentPage*pageSize,endRow=Math.min(startRow+pageSize,totalRows),paginateData=(0,react.useCallback)((data=>data.slice(startRow,startRow+pageSize)),[startRow,pageSize]);return{currentPage,pageSize,totalPages,totalRows,startRow,endRow,goToPage,goToNextPage,goToPreviousPage,goToFirstPage,goToLastPage,changePageSize,paginateData,setCurrentPage,setPageSize}}(processedData.length,paginationPageSize),displayData=(0,react.useMemo)((()=>pagination?paginateData(processedData):processedData),[processedData,pagination,paginateData]),{selectedIds,isSelected,toggleRow,selectAll,deselectAll,isAllSelected,isIndeterminate,selectedRows}=function useRowSelection(data,getRowId,mode="multiple",isRowSelectable){const[selectedIds,setSelectedIds]=(0,react.useState)(new Set),isSelected=(0,react.useCallback)((id=>selectedIds.has(id)),[selectedIds]),toggleRow=(0,react.useCallback)(((row,index)=>{const id=getRowId(row),node=createRowNode(row,index);isRowSelectable&&!isRowSelectable(node)||setSelectedIds((prev=>{if("single"===mode)return prev.has(id)?new Set:new Set([id]);const next=new Set(prev);return next.has(id)?next.delete(id):next.add(id),next}))}),[getRowId,mode,isRowSelectable]),selectAll=(0,react.useCallback)((()=>{const ids=data.filter(((row,i)=>!isRowSelectable||isRowSelectable(createRowNode(row,i)))).map(getRowId);setSelectedIds(new Set(ids))}),[data,getRowId,isRowSelectable]),deselectAll=(0,react.useCallback)((()=>{setSelectedIds(new Set)}),[]),selectRows=(0,react.useCallback)((rows=>{const ids=rows.map(getRowId);setSelectedIds(new Set(ids))}),[getRowId]),isAllSelected=(0,react.useMemo)((()=>0!==data.length&&data.filter(((row,i)=>!isRowSelectable||isRowSelectable(createRowNode(row,i)))).every((row=>selectedIds.has(getRowId(row))))),[data,selectedIds,getRowId,isRowSelectable]),isIndeterminate=(0,react.useMemo)((()=>{if(0===data.length)return!1;const selectableRows=data.filter(((row,i)=>!isRowSelectable||isRowSelectable(createRowNode(row,i)))),selectedCount=selectableRows.filter((row=>selectedIds.has(getRowId(row)))).length;return selectedCount>0&&selectedCount<selectableRows.length}),[data,selectedIds,getRowId,isRowSelectable]),selectedRows=(0,react.useMemo)((()=>data.filter((row=>selectedIds.has(getRowId(row))))),[data,selectedIds,getRowId]),selectedNodes=(0,react.useMemo)((()=>data.map(((row,i)=>createRowNode(row,i))).filter((node=>selectedIds.has(node.id)))),[data,selectedIds]);return{selectedIds,setSelectedIds,isSelected,toggleRow,selectAll,deselectAll,selectRows,isAllSelected,isIndeterminate,selectedRows,selectedNodes}}(displayData,(row=>getRowId({data:row})),rowSelection||"multiple",isRowSelectable),{isExpanded,toggleExpand,expandAll,collapseAll}=function useRowExpansion(getRowId,defaultExpanded=0){const[expandedIds,setExpandedIds]=(0,react.useState)(new Set),isExpanded=(0,react.useCallback)((id=>expandedIds.has(id)),[expandedIds]),toggleExpand=(0,react.useCallback)((row=>{const id=getRowId(row);setExpandedIds((prev=>{const next=new Set(prev);return next.has(id)?next.delete(id):next.add(id),next}))}),[getRowId]),expandAll=(0,react.useCallback)((rows=>{const ids=rows.map(getRowId);setExpandedIds(new Set(ids))}),[getRowId]),collapseAll=(0,react.useCallback)((()=>{setExpandedIds(new Set)}),[]),setExpanded=(0,react.useCallback)(((id,expanded)=>{setExpandedIds((prev=>{const next=new Set(prev);return expanded?next.add(id):next.delete(id),next}))}),[]);return{expandedIds,setExpandedIds,isExpanded,toggleExpand,expandAll,collapseAll,setExpanded}}((row=>getRowId({data:row})),groupDefaultExpanded),{editingCell,startEditing,stopEditing,isEditing}=function useCellEditing(onCellValueChanged){const[editingCell,setEditingCell]=(0,react.useState)(null),editHistory=(0,react.useRef)([]),historyIndex=(0,react.useRef)(-1),startEditing=(0,react.useCallback)(((rowId,colId,rowIndex,value)=>{setEditingCell({rowId,colId,rowIndex,value})}),[]),stopEditing=(0,react.useCallback)(((cancel=!1,newValue)=>{editingCell&&(cancel||void 0===newValue||newValue===editingCell.value||(editHistory.current=editHistory.current.slice(0,historyIndex.current+1),editHistory.current.push({data:{},field:editingCell.colId,oldValue:editingCell.value,newValue}),historyIndex.current=editHistory.current.length-1),setEditingCell(null))}),[editingCell]),isEditing=(0,react.useCallback)(((rowId,colId)=>editingCell?.rowId===rowId&&editingCell?.colId===colId),[editingCell]),undo=(0,react.useCallback)((()=>{if(historyIndex.current<0)return null;const entry=editHistory.current[historyIndex.current];return historyIndex.current--,entry}),[]),redo=(0,react.useCallback)((()=>historyIndex.current>=editHistory.current.length-1?null:(historyIndex.current++,editHistory.current[historyIndex.current])),[]),canUndo=historyIndex.current>=0,canRedo=historyIndex.current<editHistory.current.length-1;return{editingCell,startEditing,stopEditing,isEditing,undo,redo,canUndo,canRedo}}(),[editValue,setEditValue]=(0,react.useState)(null),{contextMenu,showContextMenu,hideContextMenu}=function useContextMenu(){const[contextMenu,setContextMenu]=(0,react.useState)({visible:!1,x:0,y:0}),showContextMenu=(0,react.useCallback)(((x,y,data)=>{setContextMenu({visible:!0,x,y,data})}),[]),hideContextMenu=(0,react.useCallback)((()=>{setContextMenu((prev=>({...prev,visible:!1})))}),[]);return(0,react.useEffect)((()=>{if(!contextMenu.visible)return;const handleClick=()=>hideContextMenu(),handleEscape=e=>{"Escape"===e.key&&hideContextMenu()};return document.addEventListener("click",handleClick),document.addEventListener("keydown",handleEscape),()=>{document.removeEventListener("click",handleClick),document.removeEventListener("keydown",handleEscape)}}),[contextMenu.visible,hideContextMenu]),{contextMenu,showContextMenu,hideContextMenu}}(),{copyToClipboard}=function useClipboard(){return{copyToClipboard:(0,react.useCallback)((async(data,columns,includeHeaders=!0)=>{const rows=[];if(includeHeaders){const header=columns.filter((col=>!col.hide)).map((col=>col.headerName||col.field||"")).join("\t");rows.push(header)}data.forEach((row=>{const values=columns.filter((col=>!col.hide)).map((col=>{if(!col.field)return"";const value=getNestedValue(row,col.field);return null==value?"":String(value)})).join("\t");rows.push(values)}));const text=rows.join("\n");await navigator.clipboard.writeText(text)}),[]),pasteFromClipboard:(0,react.useCallback)((async()=>(await navigator.clipboard.readText()).split("\n").map((row=>row.split("\t")))),[])}}(),{isMobile}=function useResponsive(breakpoint=768){const[isMobile,setIsMobile]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const checkMobile=()=>{setIsMobile(window.innerWidth<breakpoint)};return checkMobile(),window.addEventListener("resize",checkMobile),()=>window.removeEventListener("resize",checkMobile)}),[breakpoint]),{isMobile}}(mobileBreakpoint),{isOpen:isSidePanelOpen,activeTab:sidePanelTab,toggle:toggleSidePanel,switchTab:switchSidePanelTab,setIsOpen:setSidePanelOpen}=function useSidePanel(defaultOpen=!0,defaultTab="columns"){const[isOpen,setIsOpen]=(0,react.useState)(defaultOpen),[activeTab,setActiveTab]=(0,react.useState)(defaultTab),toggle=(0,react.useCallback)((()=>{setIsOpen((prev=>!prev))}),[]),open=(0,react.useCallback)((()=>{setIsOpen(!0)}),[]),close=(0,react.useCallback)((()=>{setIsOpen(!1)}),[]),switchTab=(0,react.useCallback)((tab=>{setActiveTab(tab),isOpen||setIsOpen(!0)}),[isOpen]);return{isOpen,activeTab,toggle,open,close,switchTab,setIsOpen,setActiveTab}}(!1!==props.sideBar,"columns"),{menuState:columnMenuState,showColumnMenu,hideColumnMenu,filterDropdownState,showFilterDropdown,hideFilterDropdown}=function useColumnMenu(){const[menuState,setMenuState]=(0,react.useState)({visible:!1,colId:null,x:0,y:0}),[filterDropdownState,setFilterDropdownState]=(0,react.useState)({visible:!1,colId:null,x:0,y:0});return{menuState,showColumnMenu:(0,react.useCallback)(((colId,x,y)=>{setMenuState({visible:!0,colId,x,y})}),[]),hideColumnMenu:(0,react.useCallback)((()=>{setMenuState((prev=>({...prev,visible:!1})))}),[]),filterDropdownState,showFilterDropdown:(0,react.useCallback)(((colId,x,y)=>{setFilterDropdownState({visible:!0,colId,x,y})}),[]),hideFilterDropdown:(0,react.useCallback)((()=>{setFilterDropdownState((prev=>({...prev,visible:!1})))}),[])}}(),{rowGroupColumns,addRowGroupColumn,removeRowGroupColumn,clearRowGroupColumns,groupableColumns,groupedColumnsInfo}=function useRowGroupingPanel(columns){const[rowGroupColumns,setRowGroupColumns]=(0,react.useState)([]),addRowGroupColumn=(0,react.useCallback)((field=>{setRowGroupColumns((prev=>prev.includes(field)?prev:[...prev,field]))}),[]),removeRowGroupColumn=(0,react.useCallback)((field=>{setRowGroupColumns((prev=>prev.filter((f=>f!==field))))}),[]),moveRowGroupColumn=(0,react.useCallback)(((fromIndex,toIndex)=>{setRowGroupColumns((prev=>{const next=[...prev],[removed]=next.splice(fromIndex,1);return next.splice(toIndex,0,removed),next}))}),[]),clearRowGroupColumns=(0,react.useCallback)((()=>{setRowGroupColumns([])}),[]),groupableColumns=(0,react.useMemo)((()=>columns.filter((col=>col.field&&!1!==col.enableRowGroup))),[columns]),groupedColumnsInfo=(0,react.useMemo)((()=>rowGroupColumns.map((field=>{const col=columns.find((c=>c.field===field));return{field,headerName:col?.headerName||field}}))),[rowGroupColumns,columns]);return{rowGroupColumns,addRowGroupColumn,removeRowGroupColumn,moveRowGroupColumn,clearRowGroupColumns,groupableColumns,groupedColumnsInfo}}(flatColumns),{valueColumns,addValueColumn,removeValueColumn,clearValueColumns,aggregatedValues}=function useAggregationPanel(data){const[valueColumns,setValueColumns]=(0,react.useState)([]),addValueColumn=(0,react.useCallback)(((field,aggFunc,displayName)=>{setValueColumns((prev=>prev.some((v=>v.field===field&&v.aggFunc===aggFunc))?prev:[...prev,{field,aggFunc,displayName}]))}),[]),removeValueColumn=(0,react.useCallback)(((field,aggFunc)=>{setValueColumns((prev=>prev.filter((v=>!(v.field===field&&v.aggFunc===aggFunc)))))}),[]),clearValueColumns=(0,react.useCallback)((()=>{setValueColumns([])}),[]),aggregatedValues=(0,react.useMemo)((()=>{const result={};return valueColumns.forEach((({field,aggFunc})=>{const values=data.map((row=>getNestedValue(row,field))).filter((v=>null!=v&&!isNaN(Number(v)))).map(Number),key=`${aggFunc}(${field})`;switch(aggFunc){case"sum":result[key]=aggregations_sum(values);break;case"avg":result[key]=aggregations_avg(values);break;case"min":result[key]=aggregations_min(values);break;case"max":result[key]=aggregations_max(values);break;case"count":result[key]=aggregations_count(values)}})),result}),[data,valueColumns]);return{valueColumns,addValueColumn,removeValueColumn,clearValueColumns,aggregatedValues}}(processedData),{isPivotMode,togglePivotMode}=function usePivotMode(){const[isPivotMode,setIsPivotMode]=(0,react.useState)(!1),[pivotColumns,setPivotColumns]=(0,react.useState)([]),togglePivotMode=(0,react.useCallback)((()=>{setIsPivotMode((prev=>!prev))}),[]),addPivotColumn=(0,react.useCallback)((field=>{setPivotColumns((prev=>prev.includes(field)?prev:[...prev,field]))}),[]),removePivotColumn=(0,react.useCallback)((field=>{setPivotColumns((prev=>prev.filter((f=>f!==field))))}),[]);return{isPivotMode,setIsPivotMode,togglePivotMode,pivotColumns,addPivotColumn,removePivotColumn}}(),[expandedFilterPanels,setExpandedFilterPanels]=(0,react.useState)(new Set),[draggedColumnId,setDraggedColumnId]=(0,react.useState)(null),[dragOverColumnId,setDragOverColumnId]=(0,react.useState)(null),handleColumnDragStart=(0,react.useCallback)(((e,colId)=>{setDraggedColumnId(colId),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",colId)}),[]),handleColumnDragOver=(0,react.useCallback)(((e,colId)=>{e.preventDefault(),e.dataTransfer.dropEffect="move",colId!==draggedColumnId&&setDragOverColumnId(colId)}),[draggedColumnId]),handleColumnDragLeave=(0,react.useCallback)((()=>{setDragOverColumnId(null)}),[]),handleColumnDrop=(0,react.useCallback)(((e,targetColId)=>{if(e.preventDefault(),draggedColumnId&&draggedColumnId!==targetColId){const fromIndex=columnState.findIndex((s=>s.colId===draggedColumnId)),toIndex=columnState.findIndex((s=>s.colId===targetColId));-1!==fromIndex&&-1!==toIndex&&moveColumn(draggedColumnId,toIndex)}setDraggedColumnId(null),setDragOverColumnId(null)}),[draggedColumnId,columnState,moveColumn]),handleColumnDragEnd=(0,react.useCallback)((()=>{setDraggedColumnId(null),setDragOverColumnId(null)}),[]),getUniqueValuesForField=(0,react.useCallback)((field=>{const values=new Set;return rowData.forEach((row=>{const value=getNestedValue(row,field);null!=value&&values.add(String(value))})),Array.from(values).sort()}),[rowData]),toggleFilterPanel=(0,react.useCallback)((field=>{setExpandedFilterPanels((prev=>{const next=new Set(prev);return next.has(field)?next.delete(field):next.add(field),next}))}),[]),toggleSetFilterValue=(0,react.useCallback)(((field,value)=>{setSetFilterStates((prev=>{const currentValues=prev[field]||new Set(getUniqueValuesForField(field)),next=new Set(currentValues);return next.has(value)?next.delete(value):next.add(value),{...prev,[field]:next}}))}),[getUniqueValuesForField]),toggleSetFilterSelectAll=(0,react.useCallback)((field=>{setSetFilterStates((prev=>{const allValues=getUniqueValuesForField(field),currentValues=prev[field];return!currentValues||currentValues.size===allValues.length?{...prev,[field]:new Set}:{...prev,[field]:new Set(allValues)}}))}),[getUniqueValuesForField]),isSetFilterActive=(0,react.useCallback)((field=>{const state=setFilterStates[field];if(!state)return!1;const allValues=getUniqueValuesForField(field);return state.size>0&&state.size<allValues.length}),[setFilterStates,getUniqueValuesForField]),hasActiveSetFilters=(0,react.useMemo)((()=>Object.entries(setFilterStates).some((([field,selectedValues])=>{const allValues=getUniqueValuesForField(field);return selectedValues.size>0&&selectedValues.size<allValues.length}))),[setFilterStates,getUniqueValuesForField]),clearSetFilters=(0,react.useCallback)((()=>{setSetFilterStates({})}),[]),clearAllFilters=(0,react.useCallback)((()=>{clearFilters(),clearSetFilters()}),[clearFilters,clearSetFilters]),containerRef=(0,react.useRef)(null),tableRef=(0,react.useRef)(null),[isLoading,setIsLoading]=(0,react.useState)(!1),[resizing,setResizing]=(0,react.useState)(null),handleResizeStart=(0,react.useCallback)(((e,colId,currentWidth)=>{e.preventDefault(),setResizing({colId,startX:e.clientX,startWidth:currentWidth})}),[]);(0,react.useEffect)((()=>{if(!resizing)return;const handleMouseMove=e=>{const delta=e.clientX-resizing.startX,newWidth=Math.max(50,resizing.startWidth+delta);setColumnWidth(resizing.colId,newWidth)},handleMouseUp=()=>{setResizing(null)};return document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp),()=>{document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp)}}),[resizing,setColumnWidth]);const gridApi=(0,react.useMemo)((()=>({setRowData:()=>{},getRowData:()=>rowData,applyTransaction:()=>{},applyTransactionAsync:()=>{},refreshCells:()=>{},redrawRows:()=>{},getRowNode:id=>displayData.find((row=>getRowId({data:row})===id)),forEachNode:callback=>displayData.forEach(((row,i)=>callback(createRowNode(row,i),i))),forEachLeafNode:callback=>displayData.forEach(((row,i)=>callback(createRowNode(row,i),i))),getDisplayedRowCount:()=>displayData.length,getDisplayedRowAtIndex:index=>createRowNode(displayData[index],index),getFirstDisplayedRow:()=>startRow,getLastDisplayedRow:()=>endRow,selectAll,deselectAll,selectAllFiltered:selectAll,deselectAllFiltered:deselectAll,getSelectedRows:()=>selectedRows,getSelectedNodes:()=>selectedRows.map(((row,i)=>createRowNode(row,i))),getSortModel:()=>sortModel,setSortModel:()=>{},setFilterModel:()=>{},getFilterModel:()=>filterModel,setQuickFilter:setQuickFilterText,isQuickFilterPresent:()=>quickFilterText.length>0,isAnyFilterPresent:()=>hasActiveFilters,destroyFilter:()=>{},getFilterInstance:()=>null,onFilterChanged:()=>{},paginationGetPageSize:()=>pageSize,paginationSetPageSize:changePageSize,paginationGetCurrentPage:()=>currentPage,paginationGetTotalPages:()=>totalPages,paginationGetRowCount:()=>processedData.length,paginationGoToPage:goToPage,paginationGoToNextPage:goToNextPage,paginationGoToPreviousPage:goToPreviousPage,paginationGoToFirstPage:goToFirstPage,paginationGoToLastPage:goToLastPage,startEditingCell:({rowIndex,colKey})=>{const row=displayData[rowIndex];if(row){const value=getNestedValue(row,colKey);startEditing(getRowId({data:row}),colKey,rowIndex,value)}},stopEditing:cancel=>stopEditing(cancel||!1),getEditingCells:()=>editingCell?[{rowIndex:editingCell.rowIndex,column:{}}]:[],exportDataAsCsv:params=>{exportToCsv(selectedRows.length>0&&params?.onlySelected?selectedRows:processedData,visibleColumns,params?.fileName||"export.csv")},getDataAsCsv:()=>"",exportDataAsExcel:()=>{},copySelectedRangeToClipboard:includeHeaders=>copyToClipboard(selectedRows,visibleColumns,includeHeaders),copySelectedRowsToClipboard:includeHeaders=>copyToClipboard(selectedRows,visibleColumns,includeHeaders),pasteFromClipboard:()=>{},ensureIndexVisible:()=>{},ensureNodeVisible:()=>{},ensureColumnVisible:()=>{},getHorizontalScrollPosition:()=>containerRef.current?.scrollLeft||0,getVerticalScrollPosition:()=>containerRef.current?.scrollTop||0,resetRowHeights:()=>{},onRowHeightChanged:()=>{},sizeColumnsToFit:()=>{},autoSizeAllColumns:()=>{},autoSizeColumn:()=>{},expandAll:()=>expandAll(displayData),collapseAll,setRowGroupColumns:()=>{},getRowGroupColumns:()=>[],addEventListener:()=>{},removeEventListener:()=>{},destroy:()=>{},getContext:()=>context,setContext:()=>{},isDestroyed:()=>!1,refreshHeader:()=>{},setHeaderHeight:()=>{},showLoadingOverlay:()=>setIsLoading(!0),showNoRowsOverlay:()=>{},hideOverlay:()=>setIsLoading(!1),getGridElement:()=>containerRef.current})),[rowData,displayData,getRowId,startRow,endRow,selectAll,deselectAll,selectedRows,sortModel,filterModel,setQuickFilterText,quickFilterText,hasActiveFilters,pageSize,changePageSize,currentPage,totalPages,processedData,goToPage,goToNextPage,goToPreviousPage,goToFirstPage,goToLastPage,startEditing,stopEditing,editingCell,visibleColumns,copyToClipboard,expandAll,collapseAll,context]),columnApi=(0,react.useMemo)((()=>({getAllColumns:()=>processedColumns.map(((col,i)=>({...col,colId:col.colId,colDef:col,sort:null,visible:!col.hide,pinned:col.pinned||null,width:col.width||100,left:0,getColDef:()=>col,getColId:()=>col.colId,isVisible:()=>!col.hide,isPinned:()=>!!col.pinned,getSort:()=>getSortForColumn(col.colId).sort,setSort:()=>{}}))),getAllGridColumns:()=>[],getVisibleColumns:()=>visibleColumns.map((col=>({colId:col.colId,colDef:col}))),getColumn:colId=>processedColumns.find((c=>c.colId===colId)),setColumnVisible,setColumnsVisible:(colIds,visible)=>colIds.forEach((id=>setColumnVisible(String(id),visible))),setColumnPinned,setColumnsPinned:(colIds,pinned)=>colIds.forEach((id=>setColumnPinned(String(id),pinned))),moveColumn,moveColumns:(colIds,toIndex)=>colIds.forEach(((id,i)=>moveColumn(String(id),toIndex+i))),getColumnState:()=>columnState,applyColumnState:()=>!0,resetColumnState,setColumnWidth,setColumnsWidth:(colIds,width)=>colIds.forEach((id=>setColumnWidth(String(id),width))),autoSizeColumn:()=>{},autoSizeColumns:()=>{},sizeColumnsToFit:()=>{},isPinningLeft:()=>visibleColumns.some((c=>"left"===c.pinned)),isPinningRight:()=>visibleColumns.some((c=>"right"===c.pinned)),getDisplayNameForColumn:column=>column.colDef.headerName||column.colDef.field||""})),[processedColumns,visibleColumns,columnState,setColumnVisible,setColumnPinned,moveColumn,resetColumnState,setColumnWidth,getSortForColumn]);(0,react.useImperativeHandle)(ref,(()=>({api:gridApi,columnApi})),[gridApi,columnApi]),(0,react.useEffect)((()=>{onGridReady?.({type:"gridReady",api:gridApi,columnApi,context})}),[]);const handleCellClick=(0,react.useCallback)(((e,row,rowIndex,col,colIndex)=>{const value=col.field?getNestedValue(row,col.field):null,node=createRowNode(row,rowIndex);onCellClicked?.({type:"cellClicked",api:gridApi,columnApi,context,data:row,node,column:{colId:col.colId,colDef:col},colDef:col,value,rowIndex,event:e.nativeEvent}),singleClickEdit&&col.editable&&(startEditing(getRowId({data:row}),col.colId,rowIndex,value),setEditValue(value)),!rowSelection||suppressRowClickSelection||col.checkboxSelection||(toggleRow(row,rowIndex),onRowSelected?.({type:"rowSelected",api:gridApi,columnApi,context,data:row,node,rowIndex}))}),[gridApi,columnApi,context,onCellClicked,singleClickEdit,rowSelection,suppressRowClickSelection,toggleRow,onRowSelected,startEditing,getRowId]),handleCellDoubleClick=(0,react.useCallback)(((e,row,rowIndex,col,colIndex)=>{const value=col.field?getNestedValue(row,col.field):null,node=createRowNode(row,rowIndex);onCellDoubleClicked?.({type:"cellDoubleClicked",api:gridApi,columnApi,context,data:row,node,column:{colId:col.colId,colDef:col},colDef:col,value,rowIndex,event:e.nativeEvent}),!singleClickEdit&&col.editable&&(startEditing(getRowId({data:row}),col.colId,rowIndex,value),setEditValue(value))}),[gridApi,columnApi,context,onCellDoubleClicked,singleClickEdit,startEditing,getRowId]),handleRowClick=(0,react.useCallback)(((e,row,rowIndex)=>{const node=createRowNode(row,rowIndex);onRowClicked?.({type:"rowClicked",api:gridApi,columnApi,context,data:row,node,rowIndex,event:e.nativeEvent})}),[gridApi,columnApi,context,onRowClicked]),handleHeaderClick=(0,react.useCallback)(((col,e)=>{!1!==col.sortable&&sortable&&(handleSort(col.colId,e.shiftKey||alwaysMultiSort),onSortChanged?.({type:"sortChanged",api:gridApi,columnApi,context}))}),[sortable,handleSort,alwaysMultiSort,onSortChanged,gridApi,columnApi,context]),handleContextMenu=(0,react.useCallback)(((e,row,rowIndex,col)=>{suppressContextMenu||(e.preventDefault(),showContextMenu(e.clientX,e.clientY,{row,rowIndex,col}))}),[suppressContextMenu,showContextMenu]),handleEditComplete=(0,react.useCallback)((newValue=>{editingCell&&onCellValueChanged?.({type:"cellValueChanged",api:gridApi,columnApi,context,data:{},node:createRowNode({},editingCell.rowIndex),column:{},colDef:{},oldValue:editingCell.value,newValue,rowIndex:editingCell.rowIndex}),stopEditing(!1,newValue),setEditValue(null)}),[editingCell,onCellValueChanged,gridApi,columnApi,context,stopEditing]),handleKeyDown=(0,react.useCallback)((e=>{editingCell&&("Escape"===e.key?(stopEditing(!0),setEditValue(null)):"Enter"===e.key&&handleEditComplete(editValue)),enableClipboard&&(e.ctrlKey||e.metaKey)&&"c"===e.key&&copyToClipboard(selectedRows,visibleColumns,!0)}),[editingCell,stopEditing,handleEditComplete,editValue,enableClipboard,copyToClipboard,selectedRows,visibleColumns]),hasColumnGroups=columnDefs.some(isColGroupDef),renderRow=(row,rowIndex)=>{const rowId=getRowId({data:row}),selected=isSelected(rowId),expanded=isExpanded(rowId),isMaster=masterDetail&&(isRowMaster?.(row)??!0);return react.createElement(react.Fragment,{key:rowId},react.createElement(TableRow,{$theme:gridTheme,$selected:selected,$striped:!0,$even:rowIndex%2==0,$height:rowHeight,$animate:animateRows,onClick:e=>handleRowClick(e,row,rowIndex)},rowSelection&&react.createElement(TableCell,{$theme:gridTheme,$align:"center",$width:40},react.createElement(CheckboxCell,null,react.createElement(Checkbox,{type:"checkbox",$theme:gridTheme,checked:selected,onChange:()=>{toggleRow(row,rowIndex),onSelectionChanged?.({type:"selectionChanged",api:gridApi,columnApi,context})},onClick:e=>e.stopPropagation()}))),rowDragManaged&&react.createElement(TableCell,{$theme:gridTheme,$align:"center",$width:40},react.createElement(DragHandle,{$theme:gridTheme},react.createElement(GripIcon,null))),masterDetail&&react.createElement(TableCell,{$theme:gridTheme,$align:"center",$width:40},isMaster&&react.createElement(ExpandButton,{$theme:gridTheme,$expanded:expanded,onClick:e=>{e.stopPropagation(),toggleExpand(row)}},react.createElement(ChevronRightIcon,null))),visibleColumns.map(((col,colIndex)=>((row,rowIndex,col,colIndex)=>{const colId=col.colId,rowId=getRowId({data:row}),value=col.field?getNestedValue(row,col.field):null,isEditingThis=isEditing(rowId,colId),state=columnState.find((s=>s.colId===colId)),width=state?.width||col.width;if(isEditingThis)return react.createElement(TableCell,{key:colId,$theme:gridTheme,$editing:!0,$align:col.align,$width:width},react.createElement(CellEditor,{$theme:gridTheme},react.createElement("input",{type:"agNumberCellEditor"===col.cellEditor?"number":"text",value:editValue??"",onChange:e=>setEditValue(e.target.value),onBlur:()=>stopEditingWhenCellsLoseFocus&&handleEditComplete(editValue),onKeyDown:e=>{"Enter"===e.key&&handleEditComplete(editValue),"Escape"===e.key&&(stopEditing(!0),setEditValue(null))},autoFocus:!0})));if(col.cellRenderer){const CellRenderer=col.cellRenderer,params={value,data:row,node:createRowNode(row,rowIndex,rowId),rowIndex,colDef:col,column:{colId,colDef:col},api:gridApi,columnApi,context,refreshCell:()=>{},eGridCell:null,getValue:()=>value,setValue:()=>{}};return react.createElement(TableCell,{key:colId,$theme:gridTheme,$align:col.align,$pinned:col.pinned,$width:width,onClick:e=>handleCellClick(e,row,rowIndex,col,colIndex),onDoubleClick:e=>handleCellDoubleClick(e,row,rowIndex,col,colIndex),onContextMenu:e=>handleContextMenu(e,row,rowIndex,col)},react.createElement(CellContent,{$wrapText:col.wrapText},react.createElement(CellRenderer,params)))}let displayValue=value;return col.valueFormatter&&(displayValue=col.valueFormatter({value,data:row,node:createRowNode(row,rowIndex,rowId),colDef:col,column:{colId,colDef:col},api:gridApi,columnApi,context})),react.createElement(TableCell,{key:colId,$theme:gridTheme,$align:col.align,$pinned:col.pinned,$width:width,title:enableBrowserTooltips?String(displayValue??""):void 0,onClick:e=>handleCellClick(e,row,rowIndex,col,colIndex),onDoubleClick:e=>handleCellDoubleClick(e,row,rowIndex,col,colIndex),onContextMenu:e=>handleContextMenu(e,row,rowIndex,col)},react.createElement(CellContent,{$wrapText:col.wrapText},displayValue??""))})(row,rowIndex,col,colIndex)))),masterDetail&&isMaster&&expanded&&detailCellRenderer&&react.createElement(TableRow,{$theme:gridTheme},react.createElement(TableCell,{$theme:gridTheme,colSpan:visibleColumns.length+(rowSelection?1:0)+(rowDragManaged?1:0)+1,style:{padding:"16px"}},react.createElement(detailCellRenderer,{value:null,data:row,node:createRowNode(row,rowIndex,rowId),rowIndex,colDef:{},column:{},api:gridApi,columnApi,context,refreshCell:()=>{},eGridCell:null,getValue:()=>null,setValue:()=>{}}))))},renderEmptyState=()=>noRowsOverlayComponent?react.createElement(NoRowsOverlay,{$theme:gridTheme},react.createElement(noRowsOverlayComponent,{})):react.createElement(NoRowsOverlay,{$theme:gridTheme},react.createElement(EmptyIcon,null),react.createElement("span",null,"No Rows To Show"));return(0,react.useEffect)((()=>{const handleClickOutside=()=>{columnMenuState.visible&&hideColumnMenu(),filterDropdownState.visible&&hideFilterDropdown()};return document.addEventListener("click",handleClickOutside),()=>document.removeEventListener("click",handleClickOutside)}),[columnMenuState.visible,filterDropdownState.visible,hideColumnMenu,hideFilterDropdown]),react.createElement(GridRoot,{ref:containerRef,$theme:gridTheme,$responsive:responsive,style:containerStyle,className:containerClassName,onKeyDown:handleKeyDown,tabIndex:0,dir:enableRtl?"rtl":"ltr"},react.createElement(GridToolbar,{$theme:gridTheme},react.createElement(ToolbarGroup,null,react.createElement(QuickFilter,{$theme:gridTheme},react.createElement(SearchIcon,null),react.createElement("input",{type:"text",placeholder:"Search...",value:quickFilterText,onChange:e=>{setQuickFilterText(e.target.value),onFilterChanged?.({type:"filterChanged",api:gridApi,columnApi,context})}})),(hasActiveFilters||hasActiveSetFilters)&&react.createElement(ToolbarButton,{$theme:gridTheme,onClick:clearAllFilters},react.createElement(CloseIcon,null),"Clear Filters")),react.createElement(ToolbarGroup,null,!suppressCsvExport&&react.createElement(ToolbarButton,{$theme:gridTheme,onClick:()=>exportToCsv(processedData,visibleColumns,"export.csv")},react.createElement(DownloadIcon,null),"Export"),react.createElement(ToolbarButton,{$theme:gridTheme,onClick:resetColumnState},react.createElement(RefreshIcon,null),"Reset"),!1!==props.sideBar&&react.createElement(ToolbarButton,{$theme:gridTheme,$active:isSidePanelOpen,onClick:toggleSidePanel},react.createElement(PanelRightIcon,null)))),"never"!==props.rowGroupPanelShow&&rowGroupColumns.length>0&&react.createElement(RowGroupsZone,{$theme:gridTheme,$hasItems:!0},react.createElement(RowGroupsLabel,{$theme:gridTheme},react.createElement(GroupIcon,null)),groupedColumnsInfo.map((({field,headerName})=>react.createElement(RowGroupChip,{key:field,$theme:gridTheme},headerName,react.createElement("button",{onClick:()=>removeRowGroupColumn(field)},react.createElement(CloseIcon,null)))))),selectedRows.length>0&&react.createElement(SelectionBar,{$theme:gridTheme,$visible:selectedRows.length>0},react.createElement("span",null,selectedRows.length," row",1!==selectedRows.length?"s":""," selected"),react.createElement(SelectionActions,null,react.createElement(ToolbarButton,{$theme:gridTheme,style:{background:"transparent",border:"none",color:"white"},onClick:deselectAll},react.createElement(CloseIcon,null),"Clear"))),react.createElement(GridLayout,null,react.createElement(GridMainArea,null,react.createElement(GridWrapper,null,react.createElement(TableContainer,{$stickyHeader:!0,$maxHeight:"autoHeight"===domLayout?void 0:"calc(100% - 100px)"},responsive&&isMobile?0===displayData.length?renderEmptyState():mobileCardRenderer?react.createElement(MobileCardContainer,{$theme:gridTheme},displayData.map(((row,i)=>{const rowId=getRowId({data:row});return react.createElement(MobileCard,{key:rowId,$theme:gridTheme,$selected:isSelected(rowId),onClick:e=>handleRowClick(e,row,i)},react.createElement(mobileCardRenderer,{data:row,node:createRowNode(row,i,rowId)}))}))):react.createElement(MobileCardContainer,{$theme:gridTheme},displayData.map(((row,i)=>{const rowId=getRowId({data:row});return react.createElement(MobileCard,{key:rowId,$theme:gridTheme,$selected:isSelected(rowId),onClick:e=>handleRowClick(e,row,i)},rowSelection&&react.createElement(MobileCardHeader,{$theme:gridTheme},react.createElement(Checkbox,{type:"checkbox",$theme:gridTheme,checked:isSelected(rowId),onChange:()=>toggleRow(row,i)})),visibleColumns.slice(0,6).map((col=>{const value=col.field?getNestedValue(row,col.field):null;return react.createElement(MobileCardRow,{key:col.colId,$theme:gridTheme},react.createElement(MobileCardLabel,{$theme:gridTheme},col.headerName||col.field),react.createElement(MobileCardValue,{$theme:gridTheme},String(value??"")))})))}))):react.createElement(react.Fragment,null,0===displayData.length&&!isLoading&&renderEmptyState(),displayData.length>0&&react.createElement(StyledTable,{ref:tableRef,$theme:gridTheme,$fixedLayout:!0},react.createElement(TableHead,{$theme:gridTheme,$sticky:!0},hasColumnGroups?react.createElement(GroupHeaderRow,{$theme:gridTheme},columnDefs.map(((col,i)=>isColGroupDef(col)?react.createElement(GroupHeaderCell,{key:col.groupId||i,$theme:gridTheme,$colSpan:flattenColumnDefs(col.children).length,colSpan:flattenColumnDefs(col.children).length},col.headerName):react.createElement(GroupHeaderCell,{key:col.field||i,$theme:gridTheme,$colSpan:1})))):null,react.createElement(HeaderRow,{$theme:gridTheme,$height:headerHeight},rowSelection&&react.createElement(HeaderCell,{$theme:gridTheme,$width:40,$align:"center"},react.createElement(CheckboxCell,null,react.createElement(Checkbox,{type:"checkbox",$theme:gridTheme,checked:isAllSelected,ref:el=>el&&(el.indeterminate=isIndeterminate),onChange:e=>{e.target.checked?selectAll():deselectAll(),onSelectionChanged?.({type:"selectionChanged",api:gridApi,columnApi,context})}}))),rowDragManaged&&react.createElement(HeaderCell,{$theme:gridTheme,$width:40,$align:"center"}),masterDetail&&react.createElement(HeaderCell,{$theme:gridTheme,$width:40,$align:"center"}),visibleColumns.map(((col,colIndex)=>{const colId=col.colId,{sort:sortDir}=getSortForColumn(colId),state=columnState.find((s=>s.colId===colId)),width=state?.width||col.width;return react.createElement(HeaderCell,{key:colId,$theme:gridTheme,$align:col.headerAlign||col.align,$sortable:!1!==col.sortable&&sortable,$sorted:!!sortDir,$resizable:!1!==col.resizable,$pinned:col.pinned,$width:width,$minWidth:col.minWidth,$maxWidth:col.maxWidth,onClick:e=>handleHeaderClick(col,e),onMouseEnter:e=>{const target=e.currentTarget.querySelector("[data-menu-button]");target&&(target.style.opacity="1")},onMouseLeave:e=>{const target=e.currentTarget.querySelector("[data-menu-button]");target&&columnMenuState.colId!==colId&&(target.style.opacity="0")}},react.createElement(HeaderCellContent,null,react.createElement(HeaderText,null,col.headerName||col.field),!1!==col.sortable&&sortable&&react.createElement(SortIndicator,{$direction:sortDir,$active:!!sortDir},"desc"===sortDir?react.createElement(SortDescIcon,null):react.createElement(SortAscIcon,null)),col.filter&&react.createElement(FilterIndicator,{$active:isFilterActive(col.field||"")||isSetFilterActive(col.field||""),$theme:gridTheme,onClick:e=>{e.stopPropagation();const rect=e.target.getBoundingClientRect();showFilterDropdown(colId,rect.left,rect.bottom+4)}},react.createElement(FilterIcon,null)),!col.suppressMenu&&react.createElement(HeaderMenuButton,{"data-menu-button":!0,$theme:gridTheme,$active:columnMenuState.visible&&columnMenuState.colId===colId,onClick:e=>{e.stopPropagation();const rect=e.target.getBoundingClientRect();columnMenuState.visible&&columnMenuState.colId===colId?hideColumnMenu():showColumnMenu(colId,rect.left,rect.bottom+4)}},react.createElement(MenuIcon,null))),!1!==col.resizable&&react.createElement(ResizeHandle,{$theme:gridTheme,$resizing:resizing?.colId===colId,onMouseDown:e=>handleResizeStart(e,colId,width||100)}))}))),floatingFilter?react.createElement(FloatingFilterRow,{$theme:gridTheme,$height:floatingFiltersHeight},rowSelection&&react.createElement(FloatingFilterCell,{$theme:gridTheme}),rowDragManaged&&react.createElement(FloatingFilterCell,{$theme:gridTheme}),masterDetail&&react.createElement(FloatingFilterCell,{$theme:gridTheme}),visibleColumns.map((col=>react.createElement(FloatingFilterCell,{key:col.colId,$theme:gridTheme},col.filter&&react.createElement("input",{type:"text",placeholder:`Filter ${col.headerName||col.field}...`,onChange:e=>{setColumnFilter(col.field||"",{filterType:"text",filter:e.target.value}),onFilterChanged?.({type:"filterChanged",api:gridApi,columnApi,context})}}))))):null),react.createElement(TableBody,{$theme:gridTheme},displayData.map(((row,i)=>renderRow(row,startRow+i)))))),isLoading&&(loadingOverlayComponent?react.createElement(LoadingOverlay,{$theme:gridTheme},react.createElement(loadingOverlayComponent,{})):react.createElement(LoadingOverlay,{$theme:gridTheme},react.createElement(Spinner,{$theme:gridTheme}),react.createElement("span",null,"Loading..."))))),!pagination||suppressPaginationPanel?null:react.createElement(PaginationBar,{$theme:gridTheme},react.createElement(PaginationInfo,{$theme:gridTheme},"Showing ",startRow+1," to ",endRow," of ",processedData.length," rows"),react.createElement(PaginationControls,null,react.createElement(PageButton,{$theme:gridTheme,onClick:goToFirstPage,disabled:0===currentPage},react.createElement(ChevronsLeftIcon,null)),react.createElement(PageButton,{$theme:gridTheme,onClick:goToPreviousPage,disabled:0===currentPage},react.createElement(ChevronLeftIcon,null)),react.createElement("span",{style:{padding:"0 12px",fontSize:"13px"}},"Page ",currentPage+1," of ",totalPages),react.createElement(PageButton,{$theme:gridTheme,onClick:goToNextPage,disabled:currentPage>=totalPages-1},react.createElement(ChevronRightIcon,null)),react.createElement(PageButton,{$theme:gridTheme,onClick:goToLastPage,disabled:currentPage>=totalPages-1},react.createElement(ChevronsRightIcon,null)),Array.isArray(paginationPageSizeSelector)&&react.createElement(PageSizeSelect,{$theme:gridTheme,value:pageSize,onChange:e=>{changePageSize(Number(e.target.value)),onPaginationChanged?.({type:"paginationChanged",api:gridApi,columnApi,context,newPage:!1,newPageSize:!0,animate:!0,keepRenderedRows:!1})}},paginationPageSizeSelector.map((size=>react.createElement("option",{key:size,value:size},size," rows")))))),statusBar&&react.createElement(StatusBar,{$theme:gridTheme},react.createElement(StatusItem,null,react.createElement("strong",null,"Rows:")," ",processedData.length),react.createElement(StatusItem,null,react.createElement("strong",null,"Selected:")," ",selectedRows.length))),!1===props.sideBar?null:react.createElement(SidePanel,{$theme:gridTheme,$open:isSidePanelOpen},react.createElement(SidePanelTabs,{$theme:gridTheme,$collapsed:!isSidePanelOpen},isSidePanelOpen?react.createElement(react.Fragment,null,react.createElement(SidePanelTab,{$theme:gridTheme,$active:"columns"===sidePanelTab,onClick:()=>switchSidePanelTab("columns")},react.createElement(ColumnsIcon,null),"Columns"),react.createElement(SidePanelTab,{$theme:gridTheme,$active:"filters"===sidePanelTab,onClick:()=>switchSidePanelTab("filters")},react.createElement(FilterIcon,null),"Filters")):react.createElement(react.Fragment,null,react.createElement(SidePanelTab,{$theme:gridTheme,$collapsed:!0,$active:"columns"===sidePanelTab,onClick:()=>{setSidePanelOpen(!0),switchSidePanelTab("columns")},title:"Columns"},react.createElement(ColumnsIcon,null)),react.createElement(SidePanelTab,{$theme:gridTheme,$collapsed:!0,$active:"filters"===sidePanelTab,onClick:()=>{setSidePanelOpen(!0),switchSidePanelTab("filters")},title:"Filters"},react.createElement(FilterIcon,null)))),isSidePanelOpen&&react.createElement(SidePanelContent,{$theme:gridTheme},"columns"===sidePanelTab&&react.createElement(react.Fragment,null,react.createElement(PivotModeToggle,{$theme:gridTheme},react.createElement(PivotModeLabel,{$theme:gridTheme},"Pivot Mode"),react.createElement(ToggleSwitch,{$theme:gridTheme},react.createElement("input",{type:"checkbox",checked:isPivotMode,onChange:togglePivotMode}),react.createElement("span",null))),react.createElement(SidePanelSearch,{$theme:gridTheme},react.createElement("input",{type:"text",placeholder:"Search..."})),react.createElement(SidePanelSection,{$theme:gridTheme},react.createElement(SidePanelSectionHeader,{$theme:gridTheme},react.createElement(ColumnsIcon,null),"Columns"),processedColumns.map((col=>{const colId=col.colId,isVisible=!col.hide,isDragging=draggedColumnId===colId,isDragOver=dragOverColumnId===colId;return react.createElement(SidePanelColumnItem,{key:colId,$theme:gridTheme,$dragging:isDragging,$selected:isDragOver,draggable:!0,onDragStart:e=>handleColumnDragStart(e,colId),onDragOver:e=>handleColumnDragOver(e,colId),onDragLeave:handleColumnDragLeave,onDrop:e=>handleColumnDrop(e,colId),onDragEnd:handleColumnDragEnd},react.createElement(SidePanelDragHandle,{$theme:gridTheme},react.createElement(GripIcon,null)),react.createElement(Checkbox,{type:"checkbox",$theme:gridTheme,checked:isVisible,onChange:e=>{setColumnVisible(colId,e.target.checked)}}),react.createElement(SidePanelGroupLabel,null,col.headerName||col.field))}))),react.createElement(SidePanelSection,{$theme:gridTheme},react.createElement(SidePanelSectionHeader,{$theme:gridTheme},react.createElement(GroupIcon,null),"Row Groups"),react.createElement(RowGroupsZone,{$theme:gridTheme,$hasItems:rowGroupColumns.length>0},0===rowGroupColumns.length?react.createElement(RowGroupsLabel,{$theme:gridTheme},react.createElement(GroupIcon,null),"Drag here to set row groups"):groupedColumnsInfo.map((({field,headerName})=>react.createElement(RowGroupChip,{key:field,$theme:gridTheme},headerName,react.createElement("button",{onClick:()=>removeRowGroupColumn(field)},react.createElement(CloseIcon,null))))))),react.createElement(SidePanelSection,{$theme:gridTheme},react.createElement(SidePanelSectionHeader,{$theme:gridTheme},react.createElement(SigmaIcon,null),"Values"),react.createElement(ValuesPanel,{$theme:gridTheme},0===valueColumns.length?react.createElement(RowGroupsZone,{$theme:gridTheme,$hasItems:!1},react.createElement(RowGroupsLabel,{$theme:gridTheme},react.createElement(SigmaIcon,null),"Drag here to aggregate")):valueColumns.map((({field,aggFunc,displayName})=>react.createElement(ValueItem,{key:`${aggFunc}-${field}`,$theme:gridTheme},react.createElement(ValueItemLabel,{$theme:gridTheme},react.createElement(SidePanelDragHandle,{$theme:gridTheme},react.createElement(GripIcon,null)),aggFunc,"(",displayName,")"),react.createElement(ValueItemRemove,{$theme:gridTheme,onClick:()=>removeValueColumn(field,aggFunc)},react.createElement(CloseIcon,null)))))))),"filters"===sidePanelTab&&react.createElement(react.Fragment,null,react.createElement(SidePanelSearch,{$theme:gridTheme},react.createElement("input",{type:"text",placeholder:"Search..."})),flatColumns.filter((col=>col.filter&&col.field)).map((col=>{const field=col.field,isExpanded=expandedFilterPanels.has(field),hasFilter=isFilterActive(field)||isSetFilterActive(field),uniqueValues=getUniqueValuesForField(field),selectedValues=setFilterStates[field]||new Set(uniqueValues);return react.createElement(FilterPanelColumn,{key:col.colId,$theme:gridTheme},react.createElement(FilterPanelHeader,{$theme:gridTheme,$expanded:isExpanded,$hasFilter:hasFilter,onClick:()=>toggleFilterPanel(field)},react.createElement(ChevronRightIcon,null),col.headerName||col.field,hasFilter&&react.createElement(FilterIcon,null)),isExpanded&&react.createElement(FilterPanelContent,{$theme:gridTheme,$expanded:isExpanded},react.createElement(SetFilterList,{$theme:gridTheme,style:{maxHeight:200,marginBottom:8}},react.createElement(SetFilterItem,{$theme:gridTheme,$selectAll:!0},react.createElement("input",{type:"checkbox",checked:selectedValues.size===uniqueValues.length,onChange:()=>toggleSetFilterSelectAll(field)}),"(Select All)"),uniqueValues.slice(0,20).map((value=>react.createElement(SetFilterItem,{key:value,$theme:gridTheme},react.createElement("input",{type:"checkbox",checked:selectedValues.has(value),onChange:()=>toggleSetFilterValue(field,value)}),value))),uniqueValues.length>20&&react.createElement(SetFilterItem,{$theme:gridTheme},react.createElement("span",{style:{opacity:.6,fontSize:12}},"...and ",uniqueValues.length-20," more")))))})))))),(()=>{if(!contextMenu.visible)return null;const items=getContextMenuItems?.({node:contextMenu.data?.row?createRowNode(contextMenu.data.row,contextMenu.data.rowIndex):{},column:{colId:contextMenu.data?.col?.colId,colDef:contextMenu.data?.col},value:contextMenu.data?.col?.field?getNestedValue(contextMenu.data.row,contextMenu.data.col.field):null})||["copy","separator","export"];return react.createElement(ContextMenu,{$theme:gridTheme,$x:contextMenu.x,$y:contextMenu.y},items.map(((item,i)=>{if("separator"===item)return react.createElement(ContextMenuDivider,{key:i,$theme:gridTheme});if("string"==typeof item)switch(item){case"copy":return react.createElement(ContextMenuItem,{key:item,$theme:gridTheme,onClick:()=>copyToClipboard(selectedRows,visibleColumns,!0)},"Copy",react.createElement("span",{className:"shortcut"},"Ctrl+C"));case"export":return react.createElement(ContextMenuItem,{key:item,$theme:gridTheme,onClick:()=>exportToCsv(processedData,visibleColumns,"export.csv")},"Export to CSV");default:return null}return react.createElement(ContextMenuItem,{key:item.name,$theme:gridTheme,$disabled:item.disabled,$danger:item.cssClasses?.includes("danger"),onClick:()=>!item.disabled&&item.action?.()},item.icon,item.name,item.shortcut&&react.createElement("span",{className:"shortcut"},item.shortcut))})))})(),(()=>{if(!columnMenuState.visible||!columnMenuState.colId)return null;const col=flatColumns.find((c=>c.colId===columnMenuState.colId));if(!col)return null;const colId=columnMenuState.colId,{sort:sortDir}=getSortForColumn(colId);return react.createElement(ColumnMenuPopup,{$theme:gridTheme,$x:columnMenuState.x,$y:columnMenuState.y,onClick:e=>e.stopPropagation()},react.createElement(ColumnMenuSection,{$theme:gridTheme},react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{handleSort(colId,!1),hideColumnMenu()}},react.createElement(SortAscIcon,null),react.createElement("span",null,"Sort Ascending")),react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{handleSort(colId,!1),hideColumnMenu()}},react.createElement(SortDescIcon,null),react.createElement("span",null,"Sort Descending"))),react.createElement(ColumnMenuSection,{$theme:gridTheme},react.createElement(ColumnMenuItem,{$theme:gridTheme,$hasSubmenu:!0,onClick:()=>{}},react.createElement(PinIcon,null),react.createElement("span",null,"Pin Column")),react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{setColumnPinned(colId,"left"),hideColumnMenu()},style:{paddingLeft:36}},react.createElement(PinLeftIcon,null),react.createElement("span",null,"Pin Left")),react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{setColumnPinned(colId,"right"),hideColumnMenu()},style:{paddingLeft:36}},react.createElement(PinRightIcon,null),react.createElement("span",null,"Pin Right")),react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{setColumnPinned(colId,null),hideColumnMenu()},style:{paddingLeft:36}},react.createElement(NoPinIcon,null),react.createElement("span",null,"No Pin"))),react.createElement(ColumnMenuSection,{$theme:gridTheme},react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{hideColumnMenu()}},react.createElement(AutosizeIcon,null),react.createElement("span",null,"Autosize This Column")),react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{hideColumnMenu()}},react.createElement(AutosizeIcon,null),react.createElement("span",null,"Autosize All Columns"))),col.field&&!1!==col.enableRowGroup&&react.createElement(ColumnMenuSection,{$theme:gridTheme},react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{addRowGroupColumn(col.field),hideColumnMenu()}},react.createElement(GroupIcon,null),react.createElement("span",null,"Group by ",col.headerName||col.field))),react.createElement(ColumnMenuSection,{$theme:gridTheme},react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{setSidePanelOpen(!0),switchSidePanelTab("columns"),hideColumnMenu()}},react.createElement(ColumnsIcon,null),react.createElement("span",null,"Choose Columns")),react.createElement(ColumnMenuItem,{$theme:gridTheme,onClick:()=>{resetColumnState(),hideColumnMenu()}},react.createElement(ResetIcon,null),react.createElement("span",null,"Reset Columns"))))})(),(()=>{if(!filterDropdownState.visible||!filterDropdownState.colId)return null;const col=flatColumns.find((c=>c.colId===filterDropdownState.colId));if(!col||!col.field)return null;const field=col.field,uniqueValues=getUniqueValuesForField(field),selectedValues=setFilterStates[field]||new Set(uniqueValues),isAllSelected=selectedValues.size===uniqueValues.length;return react.createElement(SetFilterContainer,{$theme:gridTheme,style:{position:"fixed",top:filterDropdownState.y,left:filterDropdownState.x,zIndex:1e3},onClick:e=>e.stopPropagation()},react.createElement(SetFilterHeader,{$theme:gridTheme},"Text Filter"),react.createElement(SetFilterSearch,{$theme:gridTheme},react.createElement("input",{type:"text",placeholder:"Search...",autoFocus:!0})),react.createElement(SetFilterList,{$theme:gridTheme},react.createElement(SetFilterItem,{$theme:gridTheme,$selectAll:!0},react.createElement("input",{type:"checkbox",checked:isAllSelected,onChange:()=>toggleSetFilterSelectAll(field)}),"(Select All)"),uniqueValues.map((value=>react.createElement(SetFilterItem,{key:value,$theme:gridTheme},react.createElement("input",{type:"checkbox",checked:selectedValues.has(value),onChange:()=>toggleSetFilterValue(field,value)}),value)))),react.createElement(SetFilterActions,{$theme:gridTheme},react.createElement(SetFilterButton,{$theme:gridTheme,onClick:()=>{toggleSetFilterSelectAll(field)}},"Reset"),react.createElement(SetFilterButton,{$theme:gridTheme,$primary:!0,onClick:()=>{hideFilterDropdown()}},"Apply")))})())}const AgGrid=(0,react.forwardRef)(AgGridInner);try{AgGrid.displayName="AgGrid",AgGrid.__docgenInfo={description:"",displayName:"AgGrid",props:{rowData:{defaultValue:null,description:"Row data array",name:"rowData",required:!0,type:{name:"T[]"}},columnDefs:{defaultValue:null,description:"Column definitions",name:"columnDefs",required:!0,type:{name:"(ColDef<T> | ColGroupDef<T>)[]"}},defaultColDef:{defaultValue:null,description:"Default column definition",name:"defaultColDef",required:!1,type:{name:"ColDef<T>"}},columnTypes:{defaultValue:null,description:"Column types",name:"columnTypes",required:!1,type:{name:"Record<string, ColDef<T>>"}},getRowId:{defaultValue:null,description:"Get row ID",name:"getRowId",required:!1,type:{name:"((params: { data: T; }) => string)"}},rowModelType:{defaultValue:null,description:"Row model type",name:"rowModelType",required:!1,type:{name:"enum",value:[{value:'"infinite"'},{value:'"clientSide"'},{value:'"serverSide"'},{value:'"viewport"'}]}},theme:{defaultValue:null,description:"Theme variant",name:"theme",required:!1,type:{name:"enum",value:[{value:'"alpine"'},{value:'"alpine-dark"'},{value:'"balham"'},{value:'"balham-dark"'},{value:'"material"'},{value:'"quartz"'},{value:'"quartz-dark"'}]}},customTheme:{defaultValue:null,description:"Custom theme",name:"customTheme",required:!1,type:{name:"Partial<AgGridTheme>"}},rowHeight:{defaultValue:null,description:"Row height",name:"rowHeight",required:!1,type:{name:"number"}},headerHeight:{defaultValue:null,description:"Header height",name:"headerHeight",required:!1,type:{name:"number"}},floatingFiltersHeight:{defaultValue:null,description:"Float filter height",name:"floatingFiltersHeight",required:!1,type:{name:"number"}},pivotHeaderHeight:{defaultValue:null,description:"Pivot header height",name:"pivotHeaderHeight",required:!1,type:{name:"number"}},pivotGroupHeaderHeight:{defaultValue:null,description:"Pivot group header height",name:"pivotGroupHeaderHeight",required:!1,type:{name:"number"}},groupHeaderHeight:{defaultValue:null,description:"Group header height",name:"groupHeaderHeight",required:!1,type:{name:"number"}},rowClass:{defaultValue:null,description:"Row class",name:"rowClass",required:!1,type:{name:"string | ((params: { data: T; node: RowNode<T>; }) => string)"}},rowStyle:{defaultValue:null,description:"Row style",name:"rowStyle",required:!1,type:{name:"CSSProperties | ((params: { data: T; node: RowNode<T>; }) => CSSProperties)"}},getRowClass:{defaultValue:null,description:"Get row class",name:"getRowClass",required:!1,type:{name:"((params: { data: T; node: RowNode<T>; rowIndex: number; }) => string | string[])"}},getRowStyle:{defaultValue:null,description:"Get row style",name:"getRowStyle",required:!1,type:{name:"((params: { data: T; node: RowNode<T>; rowIndex: number; }) => CSSProperties)"}},getRowHeight:{defaultValue:null,description:"Get row height",name:"getRowHeight",required:!1,type:{name:"((params: { data: T; node: RowNode<T>; }) => number)"}},domLayout:{defaultValue:null,description:"DOM layout",name:"domLayout",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"autoHeight"'},{value:'"print"'}]}},rowSelection:{defaultValue:null,description:"Row selection mode",name:"rowSelection",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},rowMultiSelectWithClick:{defaultValue:null,description:"Row multi-select with click",name:"rowMultiSelectWithClick",required:!1,type:{name:"boolean"}},suppressRowDeselection:{defaultValue:null,description:"Suppress row deselection",name:"suppressRowDeselection",required:!1,type:{name:"boolean"}},suppressRowClickSelection:{defaultValue:null,description:"Suppress row click selection",name:"suppressRowClickSelection",required:!1,type:{name:"boolean"}},suppressCellFocus:{defaultValue:null,description:"Suppress cell focus",name:"suppressCellFocus",required:!1,type:{name:"boolean"}},enableRangeSelection:{defaultValue:null,description:"Enable range selection",name:"enableRangeSelection",required:!1,type:{name:"boolean"}},enableRangeHandle:{defaultValue:null,description:"Enable range handle",name:"enableRangeHandle",required:!1,type:{name:"boolean"}},enableFillHandle:{defaultValue:null,description:"Enable fill handle",name:"enableFillHandle",required:!1,type:{name:"boolean"}},isRowSelectable:{defaultValue:null,description:"Is row selectable",name:"isRowSelectable",required:!1,type:{name:"((node: RowNode<T>) => boolean)"}},sortable:{defaultValue:null,description:"Enable sorting",name:"sortable",required:!1,type:{name:"boolean"}},multiSortKey:{defaultValue:null,description:"Multi-sort key",name:"multiSortKey",required:!1,type:{name:"enum",value:[{value:'"ctrl"'},{value:'"shift"'}]}},accentedSort:{defaultValue:null,description:"Accentuated sort",name:"accentedSort",required:!1,type:{name:"boolean"}},unSortIcon:{defaultValue:null,description:"Unordered sort",name:"unSortIcon",required:!1,type:{name:"boolean"}},suppressMultiSort:{defaultValue:null,description:"Suppress multi-sort",name:"suppressMultiSort",required:!1,type:{name:"boolean"}},alwaysMultiSort:{defaultValue:null,description:"Always multi-sort",name:"alwaysMultiSort",required:!1,type:{name:"boolean"}},filter:{defaultValue:null,description:"Enable filtering",name:"filter",required:!1,type:{name:"boolean"}},floatingFilter:{defaultValue:null,description:"Enable floating filters",name:"floatingFilter",required:!1,type:{name:"boolean"}},quickFilterText:{defaultValue:null,description:"Quick filter text",name:"quickFilterText",required:!1,type:{name:"string"}},cacheQuickFilter:{defaultValue:null,description:"Cache quick filter",name:"cacheQuickFilter",required:!1,type:{name:"boolean"}},suppressMenuFilterPanel:{defaultValue:null,description:"Suppress menu filter panel",name:"suppressMenuFilterPanel",required:!1,type:{name:"boolean"}},excludeChildrenWhenTreeDataFiltering:{defaultValue:null,description:"Exclude children when tree data filtering",name:"excludeChildrenWhenTreeDataFiltering",required:!1,type:{name:"boolean"}},pagination:{defaultValue:null,description:"Enable pagination",name:"pagination",required:!1,type:{name:"boolean"}},paginationPageSize:{defaultValue:null,description:"Page size",name:"paginationPageSize",required:!1,type:{name:"number"}},paginationPageSizeSelector:{defaultValue:null,description:"Page size selector",name:"paginationPageSizeSelector",required:!1,type:{name:"boolean | number[]"}},paginationAutoPageSize:{defaultValue:null,description:"Auto page size",name:"paginationAutoPageSize",required:!1,type:{name:"boolean"}},suppressPaginationPanel:{defaultValue:null,description:"Suppress pagination panel",name:"suppressPaginationPanel",required:!1,type:{name:"boolean"}},paginationNumberFormatter:{defaultValue:null,description:"Pagination numbers to show",name:"paginationNumberFormatter",required:!1,type:{name:"((params: { value: number; }) => string)"}},editType:{defaultValue:null,description:"Edit type",name:"editType",required:!1,type:{name:"enum",value:[{value:'"fullRow"'}]}},singleClickEdit:{defaultValue:null,description:"Single click edit",name:"singleClickEdit",required:!1,type:{name:"boolean"}},suppressClickEdit:{defaultValue:null,description:"Suppress click edit",name:"suppressClickEdit",required:!1,type:{name:"boolean"}},stopEditingWhenCellsLoseFocus:{defaultValue:null,description:"Stop editing when focus leaves",name:"stopEditingWhenCellsLoseFocus",required:!1,type:{name:"boolean"}},enterMovesDown:{defaultValue:null,description:"Enter moves down",name:"enterMovesDown",required:!1,type:{name:"boolean"}},enterMovesDownAfterEdit:{defaultValue:null,description:"Enter moves down after edit",name:"enterMovesDownAfterEdit",required:!1,type:{name:"boolean"}},enableCellEditing:{defaultValue:null,description:"Enable cell editing",name:"enableCellEditing",required:!1,type:{name:"boolean"}},undoRedoCellEditing:{defaultValue:null,description:"Undo/redo cell editing",name:"undoRedoCellEditing",required:!1,type:{name:"boolean"}},undoRedoCellEditingLimit:{defaultValue:null,description:"Undo/redo cell editing limit",name:"undoRedoCellEditingLimit",required:!1,type:{name:"number"}},readOnlyEdit:{defaultValue:null,description:"Read only edit",name:"readOnlyEdit",required:!1,type:{name:"boolean"}},rowGroup:{defaultValue:null,description:"Enable row grouping",name:"rowGroup",required:!1,type:{name:"boolean"}},groupDefaultExpanded:{defaultValue:null,description:"Group default expanded",name:"groupDefaultExpanded",required:!1,type:{name:"number"}},autoGroupColumnDef:{defaultValue:null,description:"Auto group column def",name:"autoGroupColumnDef",required:!1,type:{name:"ColDef<T>"}},groupDisplayType:{defaultValue:null,description:"Group display type",name:"groupDisplayType",required:!1,type:{name:"enum",value:[{value:'"custom"'},{value:'"singleColumn"'},{value:'"multipleColumns"'},{value:'"groupRows"'}]}},showOpenedGroup:{defaultValue:null,description:"Show open groups in group columns",name:"showOpenedGroup",required:!1,type:{name:"boolean"}},groupRowRenderer:{defaultValue:null,description:"Group row renderer",name:"groupRowRenderer",required:!1,type:{name:"ComponentType<CellRendererParams<T>>"}},groupRowRendererParams:{defaultValue:null,description:"Group row renderer params",name:"groupRowRendererParams",required:!1,type:{name:"Record<string, any>"}},groupSelectsChildren:{defaultValue:null,description:"Group selects children",name:"groupSelectsChildren",required:!1,type:{name:"boolean"}},groupSelectsFiltered:{defaultValue:null,description:"Group selects filtered",name:"groupSelectsFiltered",required:!1,type:{name:"boolean"}},groupIncludeFooter:{defaultValue:null,description:"Group include footer",name:"groupIncludeFooter",required:!1,type:{name:"boolean"}},groupIncludeTotalFooter:{defaultValue:null,description:"Group include total footer",name:"groupIncludeTotalFooter",required:!1,type:{name:"boolean"}},suppressGroupRowsSticky:{defaultValue:null,description:"Suppress group rows sticky",name:"suppressGroupRowsSticky",required:!1,type:{name:"boolean"}},suppressRowGroupHilight:{defaultValue:null,description:"Suppress row group hilight",name:"suppressRowGroupHilight",required:!1,type:{name:"boolean"}},groupRowsSticky:{defaultValue:null,description:"Group rows sticky",name:"groupRowsSticky",required:!1,type:{name:"boolean"}},groupLockGroupColumns:{defaultValue:null,description:"Group lock group columns",name:"groupLockGroupColumns",required:!1,type:{name:"number"}},rowGroupPanelShow:{defaultValue:null,description:"Row group panel show",name:"rowGroupPanelShow",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"never"'},{value:'"onlyWhenGrouping"'}]}},treeData:{defaultValue:null,description:"Tree data mode",name:"treeData",required:!1,type:{name:"boolean"}},getDataPath:{defaultValue:null,description:"Get data path for tree",name:"getDataPath",required:!1,type:{name:"((data: T) => string[])"}},treeDataChildrenField:{defaultValue:null,description:"Tree data children field",name:"treeDataChildrenField",required:!1,type:{name:"string"}},groupAllowUnbalanced:{defaultValue:null,description:"Group allows synthetic children",name:"groupAllowUnbalanced",required:!1,type:{name:"boolean"}},masterDetail:{defaultValue:null,description:"Master detail mode",name:"masterDetail",required:!1,type:{name:"boolean"}},detailRowHeight:{defaultValue:null,description:"Detail row height",name:"detailRowHeight",required:!1,type:{name:"number"}},detailRowAutoHeight:{defaultValue:null,description:"Detail row auto height",name:"detailRowAutoHeight",required:!1,type:{name:"boolean"}},detailCellRenderer:{defaultValue:null,description:"Detail cell renderer",name:"detailCellRenderer",required:!1,type:{name:"ComponentType<CellRendererParams<T>>"}},detailCellRendererParams:{defaultValue:null,description:"Detail cell renderer params",name:"detailCellRendererParams",required:!1,type:{name:"Record<string, any>"}},isRowMaster:{defaultValue:null,description:"Is row master",name:"isRowMaster",required:!1,type:{name:"((data: T) => boolean)"}},keepDetailRows:{defaultValue:null,description:"Keep detail rows",name:"keepDetailRows",required:!1,type:{name:"boolean"}},keepDetailRowsCount:{defaultValue:null,description:"Keep detail rows count",name:"keepDetailRowsCount",required:!1,type:{name:"number"}},embedFullWidthRows:{defaultValue:null,description:"Embed full width rows",name:"embedFullWidthRows",required:!1,type:{name:"boolean"}},pinnedTopRowData:{defaultValue:null,description:"Pinned top row data",name:"pinnedTopRowData",required:!1,type:{name:"T[]"}},pinnedBottomRowData:{defaultValue:null,description:"Pinned bottom row data",name:"pinnedBottomRowData",required:!1,type:{name:"T[]"}},rowDragManaged:{defaultValue:null,description:"Enable row drag",name:"rowDragManaged",required:!1,type:{name:"boolean"}},rowDragEntireRow:{defaultValue:null,description:"Row drag entire row",name:"rowDragEntireRow",required:!1,type:{name:"boolean"}},rowDragMultiRow:{defaultValue:null,description:"Row drag multi row",name:"rowDragMultiRow",required:!1,type:{name:"boolean"}},suppressRowDrag:{defaultValue:null,description:"Suppress row drag leave hide",name:"suppressRowDrag",required:!1,type:{name:"boolean"}},suppressMoveWhenRowDragging:{defaultValue:null,description:"Suppress move when row dragging",name:"suppressMoveWhenRowDragging",required:!1,type:{name:"boolean"}},rowDragText:{defaultValue:null,description:"Row drag text",name:"rowDragText",required:!1,type:{name:"((params: CellRendererParams<T>, dragItemCount: number) => string)"}},columnMovable:{defaultValue:null,description:"Enable column moving",name:"columnMovable",required:!1,type:{name:"boolean"}},suppressColumnMoveAnimation:{defaultValue:null,description:"Suppress column move animation",name:"suppressColumnMoveAnimation",required:!1,type:{name:"boolean"}},suppressMovingInWhenColumnDragging:{defaultValue:null,description:"Suppress moving columns while dragging",name:"suppressMovingInWhenColumnDragging",required:!1,type:{name:"boolean"}},lockVisible:{defaultValue:null,description:"Lock visible",name:"lockVisible",required:!1,type:{name:"boolean"}},columnResizable:{defaultValue:null,description:"Enable column resizing",name:"columnResizable",required:!1,type:{name:"boolean"}},suppressAutoSize:{defaultValue:null,description:"Suppress auto-size",name:"suppressAutoSize",required:!1,type:{name:"boolean"}},maintainColumnOrder:{defaultValue:null,description:"Maintain column order",name:"maintainColumnOrder",required:!1,type:{name:"boolean"}},deltaColumnMode:{defaultValue:null,description:"Delta column mode",name:"deltaColumnMode",required:!1,type:{name:"boolean"}},applyColumnDefOrder:{defaultValue:null,description:"Apply column def order",name:"applyColumnDefOrder",required:!1,type:{name:"boolean"}},columnHoverHighlight:{defaultValue:null,description:"Column hover highlight",name:"columnHoverHighlight",required:!1,type:{name:"boolean"}},suppressDragLeaveHidesColumns:{defaultValue:null,description:"Suppress drag leave hides columns",name:"suppressDragLeaveHidesColumns",required:!1,type:{name:"boolean"}},colMenu:{defaultValue:null,description:"Column menu",name:"colMenu",required:!1,type:{name:"enum",value:[{value:'"legacy"'},{value:'"new"'}]}},alwaysShowHorizontalScroll:{defaultValue:null,description:"Always show horizontal scrollbar",name:"alwaysShowHorizontalScroll",required:!1,type:{name:"boolean"}},alwaysShowVerticalScroll:{defaultValue:null,description:"Always show vertical scrollbar",name:"alwaysShowVerticalScroll",required:!1,type:{name:"boolean"}},debounceVerticalScrollbar:{defaultValue:null,description:"Debounce vertical scrollbar",name:"debounceVerticalScrollbar",required:!1,type:{name:"boolean"}},suppressHorizontalScroll:{defaultValue:null,description:"Suppress horizontal scroll",name:"suppressHorizontalScroll",required:!1,type:{name:"boolean"}},suppressScrollOnNewData:{defaultValue:null,description:"Suppress scroll on new data",name:"suppressScrollOnNewData",required:!1,type:{name:"boolean"}},suppressScrollLag:{defaultValue:null,description:"Suppress scroll lag",name:"suppressScrollLag",required:!1,type:{name:"boolean"}},suppressColumnVirtualisation:{defaultValue:null,description:"Suppress column virtualization",name:"suppressColumnVirtualisation",required:!1,type:{name:"boolean"}},suppressRowVirtualisation:{defaultValue:null,description:"Suppress row virtualization",name:"suppressRowVirtualisation",required:!1,type:{name:"boolean"}},loadingOverlayComponent:{defaultValue:null,description:"Loading overlay component",name:"loadingOverlayComponent",required:!1,type:{name:"ComponentType<any>"}},loadingOverlayComponentParams:{defaultValue:null,description:"Loading overlay component params",name:"loadingOverlayComponentParams",required:!1,type:{name:"Record<string, any>"}},noRowsOverlayComponent:{defaultValue:null,description:"No rows overlay component",name:"noRowsOverlayComponent",required:!1,type:{name:"ComponentType<any>"}},noRowsOverlayComponentParams:{defaultValue:null,description:"No rows overlay component params",name:"noRowsOverlayComponentParams",required:!1,type:{name:"Record<string, any>"}},overlayLoadingTemplate:{defaultValue:null,description:"Overlay loading template",name:"overlayLoadingTemplate",required:!1,type:{name:"string"}},overlayNoRowsTemplate:{defaultValue:null,description:"Overlay no rows template",name:"overlayNoRowsTemplate",required:!1,type:{name:"string"}},statusBar:{defaultValue:null,description:"Status bar",name:"statusBar",required:!1,type:{name:'{ statusPanels: { statusPanel: string | ComponentType<any>; statusPanelParams?: Record<string, any>; align?: "left" | "right" | "center"; key?: string | undefined; }[]; } | undefined'}},sideBar:{defaultValue:null,description:"Side bar",name:"sideBar",required:!1,type:{name:'boolean | "columns" | "filters" | { toolPanels: { id: string; labelKey: string; labelDefault: string; iconKey?: string; toolPanel: string | ComponentType<any>; toolPanelParams?: Record<...>; width?: number | undefined; minWidth?: number | undefined; maxWidth?: number | undefined; }[]; default...'}},enableClipboard:{defaultValue:null,description:"Enable clipboard",name:"enableClipboard",required:!1,type:{name:"boolean"}},clipboardDelimiter:{defaultValue:null,description:"Clipboard delimiter",name:"clipboardDelimiter",required:!1,type:{name:"string"}},suppressLastEmptyLineOnPaste:{defaultValue:null,description:"Suppress last empty line on paste",name:"suppressLastEmptyLineOnPaste",required:!1,type:{name:"boolean"}},suppressClipboardPaste:{defaultValue:null,description:"Suppress clipboard paste",name:"suppressClipboardPaste",required:!1,type:{name:"boolean"}},suppressCopyRowsToClipboard:{defaultValue:null,description:"Suppress copy rows to clipboard",name:"suppressCopyRowsToClipboard",required:!1,type:{name:"boolean"}},suppressCopySingleCellRanges:{defaultValue:null,description:"Suppress copy single cell ranges",name:"suppressCopySingleCellRanges",required:!1,type:{name:"boolean"}},defaultExportParams:{defaultValue:null,description:"Default export params",name:"defaultExportParams",required:!1,type:{name:"CsvExportParams"}},defaultExcelExportParams:{defaultValue:null,description:"Default Excel export params",name:"defaultExcelExportParams",required:!1,type:{name:"ExcelExportParams"}},suppressCsvExport:{defaultValue:null,description:"Suppress CSV export",name:"suppressCsvExport",required:!1,type:{name:"boolean"}},suppressExcelExport:{defaultValue:null,description:"Suppress Excel export",name:"suppressExcelExport",required:!1,type:{name:"boolean"}},getContextMenuItems:{defaultValue:null,description:"Context menu items",name:"getContextMenuItems",required:!1,type:{name:"((params: { node: RowNode<T>; column: Column<T>; value: any; }) => (string | { name: string; disabled?: boolean; shortcut?: string; action?: (() => void) | undefined; icon?: ReactNode; subMenu?: any[] | undefined; cssClasses?: string[] | undefined; tooltip?: string | undefined; })[]) | undefi..."}},suppressContextMenu:{defaultValue:null,description:"Suppress context menu",name:"suppressContextMenu",required:!1,type:{name:"boolean"}},allowContextMenuWithControlKey:{defaultValue:null,description:"Allow context menu with control key",name:"allowContextMenuWithControlKey",required:!1,type:{name:"boolean"}},getMainMenuItems:{defaultValue:null,description:"Get main menu items",name:"getMainMenuItems",required:!1,type:{name:"((params: { column: Column<T>; columnApi: ColumnApi<T>; }) => (string | { name: string; disabled?: boolean; shortcut?: string; action?: (() => void) | undefined; icon?: ReactNode; subMenu?: any[] | undefined; cssClasses?: string[] | undefined; tooltip?: string | undefined; })[]) | undefined"}},suppressMenuHide:{defaultValue:null,description:"Suppress menu hide",name:"suppressMenuHide",required:!1,type:{name:"boolean"}},postProcessPopup:{defaultValue:null,description:"Post process popup",name:"postProcessPopup",required:!1,type:{name:"((params: { type: string; ePopup: HTMLElement; column?: Column<T>; rowNode?: RowNode<T>; }) => void) | undefined"}},enableCharts:{defaultValue:null,description:"Enable charts",name:"enableCharts",required:!1,type:{name:"boolean"}},chartThemes:{defaultValue:null,description:"Chart themes",name:"chartThemes",required:!1,type:{name:"string[]"}},customChartThemes:{defaultValue:null,description:"Custom chart themes",name:"customChartThemes",required:!1,type:{name:"Record<string, any>"}},chartToolPanelsDef:{defaultValue:null,description:"Chart tool panel def",name:"chartToolPanelsDef",required:!1,type:{name:"any"}},enableBrowserTooltips:{defaultValue:null,description:"Enable browser tooltips",name:"enableBrowserTooltips",required:!1,type:{name:"boolean"}},tooltipShowDelay:{defaultValue:null,description:"Tooltip show delay",name:"tooltipShowDelay",required:!1,type:{name:"number"}},tooltipHideDelay:{defaultValue:null,description:"Tooltip hide delay",name:"tooltipHideDelay",required:!1,type:{name:"number"}},tooltipMouseTrack:{defaultValue:null,description:"Tooltip mouse track",name:"tooltipMouseTrack",required:!1,type:{name:"boolean"}},tooltipInteraction:{defaultValue:null,description:"Tooltip interaction",name:"tooltipInteraction",required:!1,type:{name:"boolean"}},ensureDomOrder:{defaultValue:null,description:"Ensure DOM order",name:"ensureDomOrder",required:!1,type:{name:"boolean"}},suppressRowTransform:{defaultValue:null,description:"Suppress row transform",name:"suppressRowTransform",required:!1,type:{name:"boolean"}},animateRows:{defaultValue:null,description:"Animate rows",name:"animateRows",required:!1,type:{name:"boolean"}},enableRtl:{defaultValue:null,description:"Enable RTL",name:"enableRtl",required:!1,type:{name:"boolean"}},suppressFocusAfterRefresh:{defaultValue:null,description:"Suppress focus after refresh",name:"suppressFocusAfterRefresh",required:!1,type:{name:"boolean"}},skipHeaderOnAutoSize:{defaultValue:null,description:"Skip header on auto-size",name:"skipHeaderOnAutoSize",required:!1,type:{name:"boolean"}},suppressBrowserResizeObserver:{defaultValue:null,description:"Suppress browser resizes",name:"suppressBrowserResizeObserver",required:!1,type:{name:"boolean"}},localeText:{defaultValue:null,description:"Locale text",name:"localeText",required:!1,type:{name:"Record<string, string>"}},icons:{defaultValue:null,description:"Icons",name:"icons",required:!1,type:{name:"Record<string, ReactNode>"}},gridId:{defaultValue:null,description:"Grid ID",name:"gridId",required:!1,type:{name:"string"}},suppressPropertyNamesCheck:{defaultValue:null,description:"Suppress property names check",name:"suppressPropertyNamesCheck",required:!1,type:{name:"boolean"}},debug:{defaultValue:null,description:"Debug",name:"debug",required:!1,type:{name:"boolean"}},valueCache:{defaultValue:null,description:"Values cache",name:"valueCache",required:!1,type:{name:"boolean"}},valueCacheNeverExpires:{defaultValue:null,description:"Values cache never expires",name:"valueCacheNeverExpires",required:!1,type:{name:"boolean"}},enableCellChangeFlash:{defaultValue:null,description:"Enable cell change flash",name:"enableCellChangeFlash",required:!1,type:{name:"boolean"}},cellFlashDelay:{defaultValue:null,description:"Cell flash delay",name:"cellFlashDelay",required:!1,type:{name:"number"}},cellFadeDelay:{defaultValue:null,description:"Cell fade delay",name:"cellFadeDelay",required:!1,type:{name:"number"}},suppressMiddleClickScrolls:{defaultValue:null,description:"Suppress middle click scrolls",name:"suppressMiddleClickScrolls",required:!1,type:{name:"boolean"}},suppressPreventDefaultOnMouseWheel:{defaultValue:null,description:"Suppress prevent default on mouse wheel",name:"suppressPreventDefaultOnMouseWheel",required:!1,type:{name:"boolean"}},suppressColumnStateEvents:{defaultValue:null,description:"Suppress column state events",name:"suppressColumnStateEvents",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"Enable responsive",name:"responsive",required:!1,type:{name:"boolean"}},responsiveBreakpoints:{defaultValue:null,description:"Responsive breakpoints",name:"responsiveBreakpoints",required:!1,type:{name:"{ xs?: number; sm?: number; md?: number | undefined; lg?: number | undefined; xl?: number | undefined; } | undefined"}},mobileCardRenderer:{defaultValue:null,description:"Mobile card renderer",name:"mobileCardRenderer",required:!1,type:{name:"ComponentType<{ data: T; node: RowNode<T>; }>"}},mobileBreakpoint:{defaultValue:null,description:"Mobile breakpoint",name:"mobileBreakpoint",required:!1,type:{name:"number"}},onGridReady:{defaultValue:null,description:"",name:"onGridReady",required:!1,type:{name:"((event: GridReadyEvent<T>) => void)"}},onFirstDataRendered:{defaultValue:null,description:"",name:"onFirstDataRendered",required:!1,type:{name:"((event: FirstDataRenderedEvent<T>) => void)"}},onRowDataUpdated:{defaultValue:null,description:"",name:"onRowDataUpdated",required:!1,type:{name:"((event: BaseEventParams<T>) => void)"}},onCellClicked:{defaultValue:null,description:"",name:"onCellClicked",required:!1,type:{name:"((event: CellClickedEvent<T>) => void)"}},onCellDoubleClicked:{defaultValue:null,description:"",name:"onCellDoubleClicked",required:!1,type:{name:"((event: CellDoubleClickedEvent<T>) => void)"}},onCellContextMenu:{defaultValue:null,description:"",name:"onCellContextMenu",required:!1,type:{name:"((event: CellContextMenuEvent<T>) => void)"}},onCellValueChanged:{defaultValue:null,description:"",name:"onCellValueChanged",required:!1,type:{name:"((event: CellValueChangedEvent<T>) => void)"}},onCellEditingStarted:{defaultValue:null,description:"",name:"onCellEditingStarted",required:!1,type:{name:"((event: CellClickedEvent<T>) => void)"}},onCellEditingStopped:{defaultValue:null,description:"",name:"onCellEditingStopped",required:!1,type:{name:"((event: CellClickedEvent<T>) => void)"}},onRowClicked:{defaultValue:null,description:"",name:"onRowClicked",required:!1,type:{name:"((event: RowClickedEvent<T>) => void)"}},onRowDoubleClicked:{defaultValue:null,description:"",name:"onRowDoubleClicked",required:!1,type:{name:"((event: RowDoubleClickedEvent<T>) => void)"}},onRowSelected:{defaultValue:null,description:"",name:"onRowSelected",required:!1,type:{name:"((event: RowSelectedEvent<T>) => void)"}},onSelectionChanged:{defaultValue:null,description:"",name:"onSelectionChanged",required:!1,type:{name:"((event: SelectionChangedEvent<T>) => void)"}},onSortChanged:{defaultValue:null,description:"",name:"onSortChanged",required:!1,type:{name:"((event: SortChangedEvent<T>) => void)"}},onFilterChanged:{defaultValue:null,description:"",name:"onFilterChanged",required:!1,type:{name:"((event: FilterChangedEvent<T>) => void)"}},onPaginationChanged:{defaultValue:null,description:"",name:"onPaginationChanged",required:!1,type:{name:"((event: PaginationChangedEvent<T>) => void)"}},onColumnVisible:{defaultValue:null,description:"",name:"onColumnVisible",required:!1,type:{name:"((event: ColumnVisibleEvent<T>) => void)"}},onColumnResized:{defaultValue:null,description:"",name:"onColumnResized",required:!1,type:{name:"((event: ColumnResizedEvent<T>) => void)"}},onColumnMoved:{defaultValue:null,description:"",name:"onColumnMoved",required:!1,type:{name:"((event: ColumnMovedEvent<T>) => void)"}},onColumnPinned:{defaultValue:null,description:"",name:"onColumnPinned",required:!1,type:{name:"((event: ColumnPinnedEvent<T>) => void)"}},onRowDragStart:{defaultValue:null,description:"",name:"onRowDragStart",required:!1,type:{name:"((event: RowDragEvent<T>) => void)"}},onRowDragMove:{defaultValue:null,description:"",name:"onRowDragMove",required:!1,type:{name:"((event: RowDragEvent<T>) => void)"}},onRowDragEnd:{defaultValue:null,description:"",name:"onRowDragEnd",required:!1,type:{name:"((event: RowDragEvent<T>) => void)"}},onRowDragEnter:{defaultValue:null,description:"",name:"onRowDragEnter",required:!1,type:{name:"((event: RowDragEvent<T>) => void)"}},onRowDragLeave:{defaultValue:null,description:"",name:"onRowDragLeave",required:!1,type:{name:"((event: RowDragEvent<T>) => void)"}},onModelUpdated:{defaultValue:null,description:"",name:"onModelUpdated",required:!1,type:{name:"((event: ModelUpdatedEvent<T>) => void)"}},onBodyScroll:{defaultValue:null,description:"",name:"onBodyScroll",required:!1,type:{name:'((event: BaseEventParams<T> & { direction: "horizontal" | "vertical"; left: number; top: number; }) => void)'}},onBodyScrollEnd:{defaultValue:null,description:"",name:"onBodyScrollEnd",required:!1,type:{name:'((event: BaseEventParams<T> & { direction: "horizontal" | "vertical"; left: number; top: number; }) => void)'}},onViewportChanged:{defaultValue:null,description:"",name:"onViewportChanged",required:!1,type:{name:"((event: BaseEventParams<T> & { firstRow: number; lastRow: number; }) => void)"}},onComponentStateChanged:{defaultValue:null,description:"",name:"onComponentStateChanged",required:!1,type:{name:"((event: BaseEventParams<T>) => void)"}},onAsyncTransactionsFlushed:{defaultValue:null,description:"",name:"onAsyncTransactionsFlushed",required:!1,type:{name:"((event: BaseEventParams<T>) => void)"}},containerStyle:{defaultValue:null,description:"Container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"Container className",name:"containerClassName",required:!1,type:{name:"string"}},context:{defaultValue:null,description:"Context",name:"context",required:!1,type:{name:"any"}},ref:{defaultValue:null,description:"ref",name:"ref",required:!1,type:{name:"((((instance: AgGridRef<T> | null) => void) | RefObject<AgGridRef<T>>) & (((instance: AgGridRef<T> | null) => void) | MutableRefObject<...>)) | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/ag-grid/AgGrid.tsx#AgGrid"]={docgenInfo:AgGrid.__docgenInfo,name:"AgGrid",path:"src/core-components/src/components/ag-grid/AgGrid.tsx#AgGrid"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=6720.6688a76e.iframe.bundle.js.map