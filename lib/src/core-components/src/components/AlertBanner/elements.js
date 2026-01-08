"use strict";import{styled as o,css as n,keyframes as a}from"styled-components";import{tokens as r}from"../../utils/designTokens";import{breakpoints as s}from"../../utils/abstracts";const f=a`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,c=a`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`,t={info:{bg:"#e7f3ff",border:"#3b82f6",text:"#1e40af",icon:"#3b82f6"},success:{bg:"#ecfdf5",border:"#10b981",text:"#065f46",icon:"#10b981"},warning:{bg:"#fffbeb",border:"#f59e0b",text:"#92400e",icon:"#f59e0b"},error:{bg:"#fef2f2",border:"#ef4444",text:"#991b1b",icon:"#ef4444"},default:{bg:r.surface||"#f8f9fa",border:r.outline||"#e9ecef",text:r.onSurface||"#1a1a2e",icon:r.primary||"#454cbf"},dark:{bg:"#1f2937",border:"#374151",text:"#f9fafb",icon:"#9ca3af"}},i={small:{padding:"0.5rem 0.75rem",fontSize:"0.8125rem",iconSize:"16px"},medium:{padding:"0.75rem 1rem",fontSize:"0.875rem",iconSize:"20px"},large:{padding:"1rem 1.25rem",fontSize:"1rem",iconSize:"24px"}};export const AlertBannerContainer=o.div`
  display: ${({$isOpen:e})=>e?"flex":"none"};
  align-items: flex-start;
  gap: ${r.spacing100||"0.5rem"};
  width: 100%;
  box-sizing: border-box;
  
  /* Type colors */
  background: ${({$type:e})=>t[e].bg};
  border: 1px solid ${({$type:e})=>t[e].border};
  color: ${({$type:e})=>t[e].text};
  
  /* Size styles */
  padding: ${({$size:e})=>i[e].padding};
  font-size: ${({$size:e})=>i[e].fontSize};
  
  /* Variant styles */
  ${({$variant:e})=>e==="banner"&&n`
      border-radius: 0;
      border-left: none;
      border-right: none;
    `}
  
  ${({$variant:e})=>e==="inline"&&n`
      border-radius: ${r.borderRadius100||"8px"};
    `}
  
  ${({$variant:e})=>e==="floating"&&n`
      border-radius: ${r.borderRadius100||"8px"};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      position: fixed;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      max-width: calc(100% - 2rem);
      z-index: 1000;
      
      ${s.md} {
        max-width: 600px;
      }
    `}
  
  /* Animation */
  ${({$animated:e,$isOpen:d})=>e&&n`
      animation: ${d?f:c} 0.3s ease-out;
    `}
  
  /* Responsive */
  ${s.xs} {
    flex-direction: column;
    align-items: stretch;
  }
`,IconWrapper=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({$type:e})=>t[e].icon};
  width: ${({$size:e})=>i[e].iconSize};
  height: ${({$size:e})=>i[e].iconSize};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ContentWrapper=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${r.spacing050||"0.25rem"};
  min-width: 0;
`,Title=o.strong`
  font-weight: 600;
  font-size: ${({$size:e})=>e==="small"?"0.875rem":e==="large"?"1.125rem":"1rem"};
  line-height: 1.4;
`,Message=o.div`
  line-height: 1.5;
`,ActionsWrapper=o.div`
  display: flex;
  align-items: center;
  gap: ${r.spacing100||"0.5rem"};
  flex-shrink: 0;
  margin-left: auto;
  
  ${s.xs} {
    margin-left: 0;
    margin-top: ${r.spacing100||"0.5rem"};
    justify-content: flex-end;
  }
`,ActionButton=o.button`
  background: transparent;
  border: 1px solid ${({$type:e})=>t[e].border};
  color: ${({$type:e})=>t[e].text};
  padding: 0.375rem 0.75rem;
  border-radius: ${r.borderRadius050||"4px"};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${({$type:e})=>t[e].border}20;
  }
  
  &:focus-visible {
    outline: 2px solid ${({$type:e})=>t[e].border};
    outline-offset: 2px;
  }
`,DismissButton=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${({$type:e})=>t[e].text};
  padding: 0.25rem;
  border-radius: ${r.borderRadius050||"4px"};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
  flex-shrink: 0;
  width: ${({$size:e})=>i[e].iconSize};
  height: ${({$size:e})=>i[e].iconSize};
  
  &:hover {
    opacity: 1;
    background: ${({$type:e})=>t[e].border}20;
  }
  
  &:focus-visible {
    outline: 2px solid ${({$type:e})=>t[e].border};
    outline-offset: 2px;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
