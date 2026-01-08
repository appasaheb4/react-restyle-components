"use strict";import{styled as d,css as o,keyframes as l}from"styled-components";const s=l`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,e={dark:{bg:"#1f2937",text:"#f9fafb",border:"#374151"},light:{bg:"#ffffff",text:"#1f2937",border:"#e5e7eb"}},a={small:{padding:"4px 8px",fontSize:"12px",borderRadius:"4px"},medium:{padding:"8px 12px",fontSize:"13px",borderRadius:"6px"},large:{padding:"12px 16px",fontSize:"14px",borderRadius:"8px"}},r=6;export const TooltipTrigger=d.span`
  display: inline-flex;
  cursor: default;
`,TooltipPortal=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: ${({$zIndex:t})=>t};
`,TooltipContent=d.div`
  position: fixed;
  pointer-events: none;
  box-sizing: border-box;
  
  /* Variant */
  background: ${({$variant:t})=>e[t].bg};
  color: ${({$variant:t})=>e[t].text};
  border: 1px solid ${({$variant:t})=>e[t].border};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Size */
  padding: ${({$size:t})=>a[t].padding};
  font-size: ${({$size:t})=>a[t].fontSize};
  border-radius: ${({$size:t})=>a[t].borderRadius};
  
  /* Layout */
  max-width: ${({$maxWidth:t})=>t?`${t}px`:"280px"};
  width: max-content;
  text-align: left;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: normal;
  
  /* Animation */
  opacity: 0;
  ${({$animated:t,$isVisible:i})=>i&&(t?o`
          animation: ${s} 0.15s ease-out forwards;
        `:o`
          opacity: 1;
        `)}
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: ${({$isVisible:t})=>t?1:0};
  }
`,TooltipArrow=d.div`
  position: absolute;
  width: 0;
  height: 0;
  border: ${r}px solid transparent;
  
  /* Position and color based on tooltip position */
  ${({$position:t,$variant:i})=>{const p=e[i].bg,n=e[i].border;return t.startsWith("top")?o`
        top: 100%;
        border-top-color: ${p};
        
        &::before {
          content: '';
          position: absolute;
          top: -${r+1}px;
          left: -${r}px;
          border: ${r}px solid transparent;
          border-top-color: ${n};
          z-index: -1;
        }
        
        ${t==="top"&&o`left: 50%; margin-left: -${r}px;`}
        ${t==="top-start"&&o`left: 12px;`}
        ${t==="top-end"&&o`right: 12px;`}
      `:t.startsWith("bottom")?o`
        bottom: 100%;
        border-bottom-color: ${p};
        
        &::before {
          content: '';
          position: absolute;
          bottom: -${r+1}px;
          left: -${r}px;
          border: ${r}px solid transparent;
          border-bottom-color: ${n};
          z-index: -1;
        }
        
        ${t==="bottom"&&o`left: 50%; margin-left: -${r}px;`}
        ${t==="bottom-start"&&o`left: 12px;`}
        ${t==="bottom-end"&&o`right: 12px;`}
      `:t.startsWith("left")?o`
        left: 100%;
        border-left-color: ${p};
        
        &::before {
          content: '';
          position: absolute;
          left: -${r-1}px;
          top: -${r}px;
          border: ${r}px solid transparent;
          border-left-color: ${n};
          z-index: -1;
        }
        
        ${t==="left"&&o`top: 50%; margin-top: -${r}px;`}
        ${t==="left-start"&&o`top: 12px;`}
        ${t==="left-end"&&o`bottom: 12px;`}
      `:t.startsWith("right")?o`
        right: 100%;
        border-right-color: ${p};
        
        &::before {
          content: '';
          position: absolute;
          right: -${r-1}px;
          top: -${r}px;
          border: ${r}px solid transparent;
          border-right-color: ${n};
          z-index: -1;
        }
        
        ${t==="right"&&o`top: 50%; margin-top: -${r}px;`}
        ${t==="right-start"&&o`top: 12px;`}
        ${t==="right-end"&&o`bottom: 12px;`}
      `:""}}
`;
