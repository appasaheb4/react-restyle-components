"use strict";import{styled as e,css as t,keyframes as n}from"styled-components";const a={alpine:{backgroundColor:"#ffffff",headerBackgroundColor:"#f8f8f8",oddRowBackgroundColor:"#fcfcfc",borderColor:"#dde2eb",selectedRowBackgroundColor:"#b7e4ff",hoverRowBackgroundColor:"#ecf0f1",textColor:"#181d1f",headerTextColor:"#181d1f",accentColor:"#2196f3",cellPadding:"0 12px",headerPadding:"0 12px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"13px",headerFontSize:"13px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},"alpine-dark":{backgroundColor:"#181d1f",headerBackgroundColor:"#222628",oddRowBackgroundColor:"#1f2426",borderColor:"#3d4749",selectedRowBackgroundColor:"#005880",hoverRowBackgroundColor:"#2d3436",textColor:"#f0f0f0",headerTextColor:"#f0f0f0",accentColor:"#2196f3",cellPadding:"0 12px",headerPadding:"0 12px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"13px",headerFontSize:"13px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},balham:{backgroundColor:"#ffffff",headerBackgroundColor:"#f5f7f7",oddRowBackgroundColor:"#fcfdfd",borderColor:"#bdc3c7",selectedRowBackgroundColor:"#b7e4ff",hoverRowBackgroundColor:"#ecf0f1",textColor:"#000000",headerTextColor:"#000000",accentColor:"#0091ea",cellPadding:"0 4px",headerPadding:"0 4px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"12px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},"balham-dark":{backgroundColor:"#2d3436",headerBackgroundColor:"#1e272c",oddRowBackgroundColor:"#32393c",borderColor:"#424a4d",selectedRowBackgroundColor:"#005880",hoverRowBackgroundColor:"#3d4749",textColor:"#f0f0f0",headerTextColor:"#f0f0f0",accentColor:"#0091ea",cellPadding:"0 4px",headerPadding:"0 4px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:"12px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"0",cellBorderWidth:"1px"},material:{backgroundColor:"#ffffff",headerBackgroundColor:"#fafafa",oddRowBackgroundColor:"#ffffff",borderColor:"#e0e0e0",selectedRowBackgroundColor:"#e3f2fd",hoverRowBackgroundColor:"#f5f5f5",textColor:"rgba(0, 0, 0, 0.87)",headerTextColor:"rgba(0, 0, 0, 0.54)",accentColor:"#3f51b5",cellPadding:"0 24px 0 24px",headerPadding:"0 24px 0 24px",fontFamily:'Roboto, "Helvetica Neue", sans-serif',fontSize:"14px",headerFontSize:"12px",headerFontWeight:"500",borderRadius:"0",cellBorderWidth:"1px"},quartz:{backgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",oddRowBackgroundColor:"#fafafa",borderColor:"#e2e8f0",selectedRowBackgroundColor:"#dbeafe",hoverRowBackgroundColor:"#f1f5f9",textColor:"#1e293b",headerTextColor:"#475569",accentColor:"#3b82f6",cellPadding:"0 16px",headerPadding:"0 16px",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"14px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"8px",cellBorderWidth:"1px"},"quartz-dark":{backgroundColor:"#0f172a",headerBackgroundColor:"#1e293b",oddRowBackgroundColor:"#1e293b",borderColor:"#334155",selectedRowBackgroundColor:"#1e3a5f",hoverRowBackgroundColor:"#334155",textColor:"#e2e8f0",headerTextColor:"#94a3b8",accentColor:"#3b82f6",cellPadding:"0 16px",headerPadding:"0 16px",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:"14px",headerFontSize:"12px",headerFontWeight:"600",borderRadius:"8px",cellBorderWidth:"1px"}};export const getTheme=(o,r)=>({...a[o],...r});const i=n`
  from { opacity: 0; }
  to { opacity: 1; }
`,s=n`
  from { transform: translateX(10px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,h=n`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,x=n`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,g=n`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,b=n`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,f=n`
  0% { background-color: rgba(76, 175, 80, 0.4); }
  100% { background-color: transparent; }
`;export const GridRoot=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({$theme:o})=>o.backgroundColor};
  font-family: ${({$theme:o})=>o.fontFamily};
  font-size: ${({$theme:o})=>o.fontSize};
  color: ${({$theme:o})=>o.textColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: ${({$theme:o})=>o.borderRadius};
  overflow: hidden;
  position: relative;

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Responsive styles */
  ${({$responsive:o})=>o&&t`
      @media (max-width: 768px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
      }
    `}
`,GridWrapper=e.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,GridToolbar=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  background: ${({$theme:o})=>o.headerBackgroundColor};
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`,ToolbarGroup=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,ToolbarButton=e.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid ${({$theme:o})=>o.borderColor};
  background: ${({$theme:o,$active:r})=>r?o.accentColor:o.backgroundColor};
  color: ${({$theme:o,$active:r})=>r?"#ffffff":o.textColor};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${({$variant:o,$theme:r})=>o==="primary"&&t`
      background: ${r.accentColor};
      border-color: ${r.accentColor};
      color: #ffffff;

      &:hover {
        filter: brightness(1.1);
      }
    `}

  ${({$variant:o})=>o==="danger"&&t`
      background: #ef4444;
      border-color: #ef4444;
      color: #ffffff;

      &:hover {
        background: #dc2626;
        border-color: #dc2626;
      }
    `}

  &:hover:not(:disabled) {
    background: ${({$theme:o,$active:r})=>r?o.accentColor:o.hoverRowBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,QuickFilter=e.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 220px;
    padding: 6px 12px 6px 32px;
    font-size: 13px;
    border: 1px solid ${({$theme:o})=>o.borderColor};
    border-radius: 4px;
    background: ${({$theme:o})=>o.backgroundColor};
    color: ${({$theme:o})=>o.textColor};
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;

    &::placeholder {
      color: ${({$theme:o})=>o.headerTextColor};
      opacity: 0.6;
    }

    &:focus {
      border-color: ${({$theme:o})=>o.accentColor};
      box-shadow: 0 0 0 3px ${({$theme:o})=>o.accentColor}20;
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
    color: ${({$theme:o})=>o.headerTextColor};
    opacity: 0.6;
  }
`,TableContainer=e.div`
  flex: 1;
  overflow: auto;
  position: relative;
  min-height: 0;

  ${({$maxHeight:o})=>o&&t`
      max-height: ${typeof o=="number"?`${o}px`:o};
    `}
`,StyledTable=e.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: ${({$fixedLayout:o})=>o?"fixed":"auto"};
  color: ${({$theme:o})=>o.textColor};
`,TableHead=e.thead`
  ${({$sticky:o,$theme:r})=>o&&t`
      position: sticky;
      top: 0;
      z-index: 10;
      background: ${r.headerBackgroundColor};
    `}
`,HeaderRow=e.tr`
  background: ${({$theme:o})=>o.headerBackgroundColor};
  height: ${({$height:o})=>o?`${o}px`:"42px"};
`,HeaderCell=e.th`
  padding: ${({$theme:o})=>o.headerPadding};
  text-align: ${({$align:o})=>o||"left"};
  font-size: ${({$theme:o})=>o.headerFontSize};
  font-weight: ${({$theme:o})=>o.headerFontWeight};
  color: ${({$theme:o})=>o.headerTextColor};
  border-bottom: 2px solid ${({$theme:o})=>o.borderColor};
  border-right: 1px solid ${({$theme:o})=>o.borderColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  user-select: none;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({$width:o})=>o&&t`width: ${o}px;`}
  ${({$minWidth:o})=>o&&t`min-width: ${o}px;`}
  ${({$maxWidth:o})=>o&&t`max-width: ${o}px;`}

  ${({$sortable:o,$theme:r})=>o&&t`
      cursor: pointer;

      &:hover {
        background: ${r.hoverRowBackgroundColor};
      }
    `}

  ${({$sorted:o,$theme:r})=>o&&t`
      background: ${r.selectedRowBackgroundColor}40;
    `}

  ${({$pinned:o,$theme:r})=>o&&t`
      position: sticky;
      ${o==="left"?"left: 0;":"right: 0;"}
      z-index: 11;
      background: ${r.headerBackgroundColor};
      box-shadow: ${o==="left"?"2px 0 4px rgba(0,0,0,0.1)":"-2px 0 4px rgba(0,0,0,0.1)"};
    `}

  &:last-child {
    border-right: none;
  }
`,HeaderCellContent=e.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
`,HeaderText=e.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`,SortIndicator=e.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: ${({$active:o})=>o?1:.3};
  transition: opacity 0.15s ease, transform 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({$direction:o})=>o==="desc"?"rotate(180deg)":"rotate(0deg)"};
  }
`,FilterIndicator=e.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  color: ${({$active:o,$theme:r})=>o?r.accentColor:r.headerTextColor};
  opacity: ${({$active:o})=>o?1:.4};
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,ResizeHandle=e.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  cursor: col-resize;
  z-index: 1;
  transition: background-color 0.15s ease;

  ${({$resizing:o,$theme:r})=>o&&t`
      background: ${r.accentColor};
    `}

  &:hover {
    background: ${({$theme:o})=>o.accentColor}60;
  }

  &::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 25%;
    height: 50%;
    width: 2px;
    background: ${({$theme:o})=>o.borderColor};
    border-radius: 1px;
  }
`,GroupHeaderRow=e.tr`
  background: ${({$theme:o})=>o.headerBackgroundColor};
`,GroupHeaderCell=e.th`
  padding: ${({$theme:o})=>o.headerPadding};
  text-align: center;
  font-size: ${({$theme:o})=>o.headerFontSize};
  font-weight: ${({$theme:o})=>o.headerFontWeight};
  color: ${({$theme:o})=>o.headerTextColor};
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
  border-right: 1px solid ${({$theme:o})=>o.borderColor};
  background: ${({$theme:o})=>o.headerBackgroundColor};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:last-child {
    border-right: none;
  }
`,FloatingFilterRow=e.tr`
  background: ${({$theme:o})=>o.headerBackgroundColor};
  height: ${({$height:o})=>o?`${o}px`:"32px"};
`,FloatingFilterCell=e.td`
  padding: 4px 8px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
  border-right: 1px solid ${({$theme:o})=>o.borderColor};
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }

  input,
  select {
    width: 100%;
    padding: 4px 8px;
    font-size: 12px;
    border: 1px solid ${({$theme:o})=>o.borderColor};
    border-radius: 3px;
    background: ${({$theme:o})=>o.backgroundColor};
    color: ${({$theme:o})=>o.textColor};
    outline: none;

    &:focus {
      border-color: ${({$theme:o})=>o.accentColor};
    }
  }
`,TableBody=e.tbody`
  color: ${({$theme:o})=>o.textColor};
`,TableRow=e.tr`
  height: ${({$height:o})=>o?`${o}px`:"42px"};
  color: ${({$theme:o})=>o.textColor};
  background: ${({$theme:o,$selected:r,$highlighted:d,$striped:l,$even:p,$group:c})=>r?o.selectedRowBackgroundColor:d?`${o.accentColor}20`:c?o.headerBackgroundColor:l&&p?o.oddRowBackgroundColor:o.backgroundColor};
  transition: background-color 0.15s ease;

  ${({$animate:o})=>o&&t`
      animation: ${b} 0.2s ease;
    `}

  ${({$dragging:o})=>o&&t`
      opacity: 0.5;
    `}

  ${({$dragOver:o,$theme:r})=>o&&t`
      background: ${r.selectedRowBackgroundColor}60;
      box-shadow: inset 0 -2px 0 ${r.accentColor};
    `}

  &:hover {
    background: ${({$theme:o,$selected:r})=>r?o.selectedRowBackgroundColor:o.hoverRowBackgroundColor};
  }

  ${({$group:o})=>o&&t`
      cursor: pointer;
      font-weight: 600;
    `}
`,TableCell=e.td`
  padding: ${({$theme:o})=>o.cellPadding};
  text-align: ${({$align:o})=>o||"left"};
  border-bottom: ${({$theme:o})=>o.cellBorderWidth} solid ${({$theme:o})=>o.borderColor};
  border-right: ${({$theme:o})=>o.cellBorderWidth} solid ${({$theme:o})=>o.borderColor};
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({$theme:o})=>o.textColor};

  ${({$width:o})=>o&&t`width: ${o}px;`}

  ${({$pinned:o,$theme:r})=>o&&t`
      position: sticky;
      ${o==="left"?"left: 0;":"right: 0;"}
      z-index: 5;
      background: inherit;
      box-shadow: ${o==="left"?"2px 0 4px rgba(0,0,0,0.1)":"-2px 0 4px rgba(0,0,0,0.1)"};
    `}

  ${({$editing:o,$theme:r})=>o&&t`
      padding: 0;
      background: ${r.backgroundColor};
      box-shadow: inset 0 0 0 2px ${r.accentColor};
    `}

  ${({$flashing:o})=>o&&t`
      animation: ${f} 0.5s ease;
    `}

  &:last-child {
    border-right: none;
  }
`,CellContent=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 20px;
  color: inherit;

  ${({$wrapText:o})=>o&&t`
      white-space: normal;
      word-break: break-word;
    `}
`,Checkbox=e.input`
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
  accent-color: ${({$theme:o})=>o.accentColor};
  flex-shrink: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,CheckboxCell=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,ExpandButton=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-left: ${({$level:o})=>o?`${o*16}px`:"0"};
  margin-right: 8px;
  border: none;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({$expanded:o})=>o?"rotate(90deg)":"rotate(0deg)"};
  }
`,GroupCell=e.div`
  display: flex;
  align-items: center;
  padding-left: ${({$level:o})=>o?`${o*20}px`:"0"};
`,DragHandle=e.div`
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

  ${({$dragging:o})=>o&&t`
      cursor: grabbing;
      opacity: 1;
    `}

  svg {
    width: 14px;
    height: 14px;
  }
`,CellEditor=e.div`
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
    background: ${({$theme:o})=>o.backgroundColor};
    color: ${({$theme:o})=>o.textColor};
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`,TableFooter=e.tfoot`
  background: ${({$theme:o})=>o.headerBackgroundColor};
`,FooterRow=e.tr`
  height: 42px;
`,FooterCell=e.td`
  padding: ${({$theme:o})=>o.cellPadding};
  text-align: ${({$align:o})=>o||"left"};
  font-weight: 600;
  border-top: 2px solid ${({$theme:o})=>o.borderColor};
  color: ${({$theme:o})=>o.headerTextColor};
`,PaginationBar=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({$theme:o})=>o.headerBackgroundColor};
  border-top: 1px solid ${({$theme:o})=>o.borderColor};
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`,PaginationInfo=e.div`
  font-size: 13px;
  color: ${({$theme:o})=>o.headerTextColor};
`,PaginationControls=e.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,PageButton=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${({$theme:o,$active:r})=>r?o.accentColor:o.borderColor};
  border-radius: 4px;
  background: ${({$theme:o,$active:r})=>r?o.accentColor:o.backgroundColor};
  color: ${({$theme:o,$active:r})=>r?"#ffffff":o.textColor};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({$theme:o,$active:r})=>r?o.accentColor:o.hoverRowBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,PageSizeSelect=e.select`
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 4px;
  background: ${({$theme:o})=>o.backgroundColor};
  color: ${({$theme:o})=>o.textColor};
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${({$theme:o})=>o.accentColor};
  }
`,StatusBar=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  background: ${({$theme:o})=>o.headerBackgroundColor};
  border-top: 1px solid ${({$theme:o})=>o.borderColor};
  font-size: 12px;
  color: ${({$theme:o})=>o.headerTextColor};
  gap: 16px;
`,StatusItem=e.div`
  display: flex;
  align-items: center;
  gap: 6px;

  strong {
    color: inherit;
  }
`,SideBar=e.div`
  width: ${({$width:o})=>o?`${o}px`:"250px"};
  min-width: 200px;
  max-width: 400px;
  background: ${({$theme:o})=>o.backgroundColor};
  border-${({$position:o})=>o==="left"?"right":"left"}: 1px solid ${({$theme:o})=>o.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,SideBarTabs=e.div`
  display: flex;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
`,SideBarTab=e.button`
  flex: 1;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  background: ${({$theme:o,$active:r})=>r?o.backgroundColor:o.headerBackgroundColor};
  color: ${({$theme:o,$active:r})=>r?o.accentColor:o.headerTextColor};
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid ${({$theme:o,$active:r})=>r?o.accentColor:"transparent"};

  &:hover {
    background: ${({$theme:o})=>o.backgroundColor};
  }
`,SideBarContent=e.div`
  flex: 1;
  overflow: auto;
  padding: 12px;
`,Overlay=e.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({$theme:o})=>o.backgroundColor}e6;
  z-index: 100;
  animation: ${i} 0.2s ease;
`,LoadingOverlay=e(Overlay)`
  flex-direction: column;
  gap: 16px;
`,Spinner=e.div`
  width: ${({$size:o})=>o?`${o}px`:"40px"};
  height: ${({$size:o})=>o?`${o}px`:"40px"};
  border: 3px solid ${({$theme:o})=>o.borderColor};
  border-top-color: ${({$theme:o})=>o.accentColor};
  border-radius: 50%;
  animation: ${g} 0.8s linear infinite;
`,NoRowsOverlay=e(Overlay)`
  flex-direction: column;
  gap: 12px;
  color: ${({$theme:o})=>o.headerTextColor};

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }
`,ContextMenu=e.div`
  position: fixed;
  top: ${({$y:o})=>o}px;
  left: ${({$x:o})=>o}px;
  min-width: 180px;
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  animation: ${s} 0.15s ease;
`,ContextMenuItem=e.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  font-size: 13px;
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};
  opacity: ${({$disabled:o})=>o?.5:1};
  color: ${({$danger:o,$theme:r})=>o?"#ef4444":r.textColor};
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$disabled:o,$theme:r})=>o?"transparent":r.hoverRowBackgroundColor};
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
`,ContextMenuDivider=e.div`
  height: 1px;
  background: ${({$theme:o})=>o.borderColor};
  margin: 4px 0;
`,ColumnMenu=e.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 200px;
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  animation: ${i} 0.15s ease;
`,MobileCardContainer=e.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`,MobileCard=e.div`
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o,$selected:r})=>r?o.accentColor:o.borderColor};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease;

  ${({$selected:o,$theme:r})=>o&&t`
      background: ${r.selectedRowBackgroundColor};
    `}
`,MobileCardHeader=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
`,MobileCardRow=e.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({$theme:o})=>o.borderColor}50;
  }
`,MobileCardLabel=e.span`
  color: ${({$theme:o})=>o.headerTextColor};
  font-weight: 500;
`,MobileCardValue=e.span`
  color: ${({$theme:o})=>o.textColor};
  text-align: right;
`,SkeletonRow=e.tr`
  height: 42px;
`,SkeletonCell=e.td`
  padding: 8px 12px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
  border-right: 1px solid ${({$theme:o})=>o.borderColor};

  &:last-child {
    border-right: none;
  }
`,SkeletonBlock=e.div`
  height: 16px;
  width: ${({$width:o})=>o||"80%"};
  background: linear-gradient(
    90deg,
    ${({$theme:o})=>o.borderColor}40 25%,
    ${({$theme:o})=>o.borderColor}80 50%,
    ${({$theme:o})=>o.borderColor}40 75%
  );
  background-size: 200% 100%;
  animation: ${x} 1.5s ease-in-out infinite;
  border-radius: 4px;
`,TooltipContainer=e.div`
  position: fixed;
  top: ${({$y:o})=>o}px;
  left: ${({$x:o})=>o}px;
  max-width: 300px;
  padding: 8px 12px;
  font-size: 12px;
  background: ${({$theme:o})=>o.textColor.includes("f0")?"#333":"#fff"};
  color: ${({$theme:o})=>o.textColor.includes("f0")?"#fff":"#333"};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  pointer-events: none;
  animation: ${i} 0.1s ease;
`,DragGhost=e.div`
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  padding: 8px 16px;
  background: ${({$theme:o})=>o.accentColor};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  opacity: ${({$visible:o})=>o?.9:0};
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease;
`,SelectionBar=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({$theme:o})=>o.accentColor};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  transform: translateY(${({$visible:o})=>o?"0":"-100%"});
  opacity: ${({$visible:o})=>o?1:0};
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`,SelectionActions=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,SidePanel=e.div`
  width: ${({$open:o,$width:r})=>o?r?`${r}px`:"280px":"40px"};
  min-width: ${({$open:o})=>o?"200px":"40px"};
  max-width: ${({$open:o})=>o?"400px":"40px"};
  background: ${({$theme:o})=>o.backgroundColor};
  border-left: 1px solid ${({$theme:o})=>o.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.2s ease;
  flex-shrink: 0;
`,SidePanelTabs=e.div`
  display: flex;
  flex-direction: ${({$collapsed:o})=>o?"column":"row"};
  border-bottom: ${({$collapsed:o})=>o?"none":"1px solid"};
  border-color: ${({$theme:o})=>o.borderColor};
  background: ${({$theme:o})=>o.headerBackgroundColor};
`,SidePanelTab=e.button`
  flex: ${({$collapsed:o})=>o?"none":"1"};
  padding: ${({$collapsed:o})=>o?"12px 10px":"10px 12px"};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  background: ${({$theme:o,$active:r})=>r?o.backgroundColor:"transparent"};
  color: ${({$theme:o,$active:r})=>r?o.accentColor:o.headerTextColor};
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid ${({$theme:o,$active:r})=>r?o.accentColor:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
    color: ${({$theme:o})=>o.accentColor};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,SidePanelContent=e.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,SidePanelSearch=e.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};

  input {
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    border: 1px solid ${({$theme:o})=>o.borderColor};
    border-radius: 4px;
    background: ${({$theme:o})=>o.backgroundColor};
    color: ${({$theme:o})=>o.textColor};
    outline: none;

    &::placeholder {
      color: ${({$theme:o})=>o.headerTextColor};
      opacity: 0.6;
    }

    &:focus {
      border-color: ${({$theme:o})=>o.accentColor};
    }
  }
`,SidePanelSection=e.div`
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
`,SidePanelSectionHeader=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({$theme:o})=>o.headerTextColor};
  background: ${({$theme:o})=>o.headerBackgroundColor};
  cursor: ${({$collapsible:o})=>o?"pointer":"default"};
  user-select: none;

  &:hover {
    background: ${({$collapsible:o,$theme:r})=>o?r.hoverRowBackgroundColor:r.headerBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }
`,SidePanelColumnItem=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  padding-left: ${({$indent:o})=>o?`${12+o*16}px`:"12px"};
  font-size: 13px;
  color: ${({$theme:o})=>o.textColor};
  cursor: pointer;
  user-select: none;
  transition: background-color 0.1s ease;
  border-left: 2px solid transparent;

  ${({$selected:o,$theme:r})=>o&&t`
      background: ${r.selectedRowBackgroundColor}40;
      border-left-color: ${r.accentColor};
    `}

  ${({$dragging:o,$theme:r})=>o&&t`
      opacity: 0.5;
      background: ${r.accentColor}20;
    `}

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }
`,SidePanelDragHandle=e.span`
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
`,SidePanelGroupLabel=e.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,RowGroupsZone=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  min-height: 36px;
  background: ${({$theme:o,$dragOver:r})=>r?`${o.accentColor}15`:o.headerBackgroundColor};
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
  border: ${({$dragOver:o,$theme:r})=>o?`2px dashed ${r.accentColor}`:"1px solid transparent"};
  transition: all 0.15s ease;
  flex-wrap: wrap;

  ${({$hasItems:o})=>!o&&t`
      justify-content: center;
    `}
`,RowGroupsLabel=e.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${({$theme:o})=>o.headerTextColor};
  white-space: nowrap;

  svg {
    width: 14px;
    height: 14px;
    opacity: 0.6;
  }
`,RowGroupChip=e.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  background: ${({$theme:o})=>o.accentColor}15;
  color: ${({$theme:o})=>o.accentColor};
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
      background: ${({$theme:o})=>o.accentColor}30;
    }

    svg {
      width: 10px;
      height: 10px;
    }
  }
`,ValuesPanel=e.div`
  min-height: 60px;
`,ValueItem=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: ${({$theme:o})=>o.textColor};
  cursor: pointer;

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }
`,ValueItemLabel=e.span`
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
`,ValueItemRemove=e.button`
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
    background: ${({$theme:o})=>o.borderColor};
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,PivotModeToggle=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
`,PivotModeLabel=e.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({$theme:o})=>o.textColor};
`,ToggleSwitch=e.label`
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
    background: ${({$theme:o})=>o.borderColor};
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
    background: ${({$theme:o})=>o.accentColor};
  }

  input:checked + span::before {
    transform: translateX(16px);
  }
`,HeaderMenuButton=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: ${({$active:o,$theme:r})=>o?r.hoverRowBackgroundColor:"transparent"};
  border-radius: 3px;
  cursor: pointer;
  opacity: ${({$active:o})=>o?1:0};
  transition: all 0.15s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }

  svg {
    width: 14px;
    height: 14px;
    color: ${({$theme:o})=>o.headerTextColor};
  }
`,ColumnMenuPopup=e.div`
  position: fixed;
  top: ${({$y:o})=>o}px;
  left: ${({$x:o})=>o}px;
  min-width: 200px;
  max-width: 280px;
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  animation: ${i} 0.15s ease;
`,ColumnMenuSection=e.div`
  padding: 4px 0;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,ColumnMenuItem=e.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-size: 13px;
  color: ${({$theme:o,$disabled:r})=>r?o.headerTextColor:o.textColor};
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};
  opacity: ${({$disabled:o})=>o?.5:1};
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$disabled:o,$theme:r})=>o?"transparent":r.hoverRowBackgroundColor};
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

  ${({$hasSubmenu:o})=>o&&t`
      &::after {
        content: '›';
        margin-left: auto;
        font-size: 16px;
        opacity: 0.5;
      }
    `}
`,ColumnMenuSubmenu=e.div`
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 150px;
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,SetFilterContainer=e.div`
  min-width: 200px;
  max-width: 300px;
  max-height: 400px;
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,SetFilterHeader=e.div`
  padding: 8px 12px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
  font-size: 12px;
  font-weight: 600;
  color: ${({$theme:o})=>o.headerTextColor};
  background: ${({$theme:o})=>o.headerBackgroundColor};
`,SetFilterSearch=e.div`
  padding: 8px 10px;
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};

  input {
    width: 100%;
    padding: 6px 10px;
    font-size: 12px;
    border: 1px solid ${({$theme:o})=>o.borderColor};
    border-radius: 4px;
    background: ${({$theme:o})=>o.backgroundColor};
    color: ${({$theme:o})=>o.textColor};
    outline: none;

    &:focus {
      border-color: ${({$theme:o})=>o.accentColor};
    }

    &::placeholder {
      color: ${({$theme:o})=>o.headerTextColor};
      opacity: 0.6;
    }
  }
`,SetFilterList=e.div`
  flex: 1;
  overflow-y: auto;
  max-height: 280px;
`,SetFilterItem=e.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: ${({$theme:o})=>o.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;
  border-bottom: ${({$selectAll:o,$theme:r})=>o?`1px solid ${r.borderColor}`:"none"};
  font-weight: ${({$selectAll:o})=>o?"500":"normal"};

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }

  input {
    margin: 0;
    accent-color: ${({$theme:o})=>o.accentColor};
  }
`,SetFilterActions=e.div`
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-top: 1px solid ${({$theme:o})=>o.borderColor};
  background: ${({$theme:o})=>o.headerBackgroundColor};
`,SetFilterButton=e.button`
  flex: 1;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid ${({$theme:o,$primary:r})=>r?o.accentColor:o.borderColor};
  border-radius: 4px;
  background: ${({$theme:o,$primary:r})=>r?o.accentColor:o.backgroundColor};
  color: ${({$primary:o,$theme:r})=>o?"#ffffff":r.textColor};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    filter: brightness(0.95);
  }
`,FilterPanelColumn=e.div`
  border-bottom: 1px solid ${({$theme:o})=>o.borderColor};
`,FilterPanelHeader=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$theme:o,$hasFilter:r})=>r?o.accentColor:o.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${({$expanded:o})=>o?"rotate(90deg)":"rotate(0deg)"};
    opacity: 0.5;
  }
`,FilterPanelContent=e.div`
  display: ${({$expanded:o})=>o?"block":"none"};
  padding: 8px 12px;
  background: ${({$theme:o})=>o.headerBackgroundColor}50;
`,GridLayout=e.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,GridMainArea=e.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`,ColumnVisibilityDropdown=e.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 220px;
  max-height: 400px;
  background: ${({$theme:o})=>o.backgroundColor};
  border: 1px solid ${({$theme:o})=>o.borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${i} 0.15s ease;
`,ColumnVisibilityList=e.div`
  flex: 1;
  overflow-y: auto;
`,ColumnVisibilityItem=e.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 13px;
  color: ${({$theme:o})=>o.textColor};
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background: ${({$theme:o})=>o.hoverRowBackgroundColor};
  }

  input {
    margin: 0;
    accent-color: ${({$theme:o})=>o.accentColor};
  }
`;export{a as themes};
