"use strict";import{styled as e,css as n,keyframes as i}from"styled-components";import{tokens as r}from"../../utils/designTokens";import{breakpoints as s}from"../../utils/abstracts";const a=i`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,c=i`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,f=i`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,l=i`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,p=i`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`,o={default:{bg:"#1f2937",border:"#374151",text:"#f9fafb",icon:"#9ca3af",accent:r.primary||"#454cbf"},success:{bg:"#065f46",border:"#10b981",text:"#ecfdf5",icon:"#10b981",accent:"#10b981"},error:{bg:"#991b1b",border:"#ef4444",text:"#fef2f2",icon:"#ef4444",accent:"#ef4444"},warning:{bg:"#92400e",border:"#f59e0b",text:"#fffbeb",icon:"#f59e0b",accent:"#f59e0b"},info:{bg:"#1e40af",border:"#3b82f6",text:"#e7f3ff",icon:"#3b82f6",accent:"#3b82f6"}},d=t=>{switch(t){case"top-left":return n`
        top: 1rem;
        left: 1rem;
        align-items: flex-start;
      `;case"top-center":return n`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
      `;case"top-right":return n`
        top: 1rem;
        right: 1rem;
        align-items: flex-end;
      `;case"bottom-left":return n`
        bottom: 1rem;
        left: 1rem;
        align-items: flex-start;
      `;case"bottom-center":return n`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
      `;default:return n`
        bottom: 1rem;
        right: 1rem;
        align-items: flex-end;
      `}},m=t=>t.includes("left")?c:t.includes("right")?a:t.includes("top")?l:f;export const ToastContainerElement=e.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({$gap:t})=>t};
  pointer-events: none;
  
  ${({$position:t})=>d(t)}
  
  ${s.xs} {
    left: 1rem;
    right: 1rem;
    transform: none;
    align-items: stretch;
  }
`,ToastElement=e.div`
  display: ${({$isOpen:t})=>t?"flex":"none"};
  align-items: flex-start;
  gap: ${r.spacing150||"0.75rem"};
  min-width: 280px;
  max-width: 420px;
  padding: ${r.spacing150||"0.75rem"} ${r.spacing200||"1rem"};
  background: ${({$type:t})=>o[t].bg};
  border: 1px solid ${({$type:t})=>o[t].border};
  border-radius: ${r.borderRadius100||"8px"};
  color: ${({$type:t})=>o[t].text};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  overflow: hidden;
  position: relative;
  
  animation: ${({$position:t})=>m(t)} 0.3s ease-out;
  
  ${s.xs} {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`,IconWrapper=e.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: ${({$type:t})=>o[t].icon};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ContentWrapper=e.div`
  flex: 1;
  min-width: 0;
`,Message=e.div`
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
`,ActionsWrapper=e.div`
  display: flex;
  align-items: center;
  gap: ${r.spacing100||"0.5rem"};
  flex-shrink: 0;
`,ActionButton=e.button`
  background: transparent;
  border: 1px solid ${({$type:t})=>o[t].border};
  color: inherit;
  padding: 0.25rem 0.625rem;
  border-radius: ${r.borderRadius050||"4px"};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:focus-visible {
    outline: 2px solid ${({$type:t})=>o[t].accent};
    outline-offset: 2px;
  }
`,DismissButton=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: inherit;
  padding: 0.25rem;
  border-radius: ${r.borderRadius050||"4px"};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:focus-visible {
    outline: 2px solid ${({$type:t})=>o[t].accent};
    outline-offset: 2px;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ProgressBar=e.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${({$type:t})=>o[t].accent};
  animation: ${p} ${({$duration:t})=>t}ms linear forwards;
`;
