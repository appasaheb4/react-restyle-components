"use strict";import{styled as i,css as n}from"styled-components";import{tokens as r}from"../../utils/designTokens";const t={small:{trackWidth:"36px",trackHeight:"20px",thumbSize:"16px",thumbOffset:"2px",fontSize:"0.8125rem",iconSize:"10px"},medium:{trackWidth:"44px",trackHeight:"24px",thumbSize:"20px",thumbOffset:"2px",fontSize:"0.875rem",iconSize:"12px"},large:{trackWidth:"52px",trackHeight:"28px",thumbSize:"24px",thumbOffset:"2px",fontSize:"1rem",iconSize:"14px"}},c={primary:{checked:r.primary||"#454cbf",hover:"#3d44a5"},success:{checked:"#10b981",hover:"#059669"},warning:{checked:"#f59e0b",hover:"#d97706"},error:{checked:"#ef4444",hover:"#dc2626"},neutral:{checked:"#6b7280",hover:"#4b5563"}};export const SwitchLabel=i.label`
  display: inline-flex;
  align-items: flex-start;
  gap: ${r.spacing150||"0.75rem"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  
  ${({$labelPosition:e})=>e==="left"?n`
          flex-direction: row;
        `:n`
          flex-direction: row-reverse;
        `}
  
  ${({$disabled:e})=>e&&n`
      opacity: 0.5;
    `}
`,LabelContent=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,LabelText=i.span`
  font-size: ${({$size:e})=>t[e].fontSize};
  font-weight: 500;
  line-height: 1.4;
  color: ${r.onSurface||"#1a1a2e"};
`,DescriptionText=i.span`
  font-size: ${({$size:e})=>e==="small"?"0.6875rem":e==="large"?"0.875rem":"0.75rem"};
  color: ${r.onSurface?`${r.onSurface}80`:"#6c757d"};
  line-height: 1.4;
`,HiddenInput=i.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,SwitchTrack=i.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${({$size:e})=>t[e].trackWidth};
  height: ${({$size:e})=>t[e].trackHeight};
  border-radius: 9999px;
  background-color: ${({$checked:e,$color:o})=>e?c[o].checked:r.outline||"#d1d5db"};
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  flex-shrink: 0;
  
  /* Focus ring */
  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 2px ${r.surface||"#fff"}, 
                0 0 0 4px ${({$color:e})=>c[e].checked};
  }
  
  /* Hover state */
  ${({$disabled:e,$checked:o,$color:a})=>!e&&n`
      &:hover {
        background-color: ${o?c[a].hover:r.outlineSoft||"#9ca3af"};
      }
    `}
`,SwitchThumb=i.span`
  position: absolute;
  width: ${({$size:e})=>t[e].thumbSize};
  height: ${({$size:e})=>t[e].thumbSize};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  left: ${({$size:e})=>t[e].thumbOffset};
  
  ${({$checked:e,$size:o})=>e&&n`
      transform: translateX(calc(${t[o].trackWidth} - ${t[o].thumbSize} - ${t[o].thumbOffset} * 2));
    `}
`,IconWrapper=i.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:e})=>t[e].iconSize};
  height: ${({$size:e})=>t[e].iconSize};
  color: white;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.2s ease;
  
  ${({$position:e,$size:o})=>e==="left"?n`
          left: 6px;
        `:n`
          right: 6px;
        `}
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
