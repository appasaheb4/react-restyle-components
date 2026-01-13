"use strict";import{styled as i,css as e,keyframes as n}from"styled-components";import{tokens as a}from"../../utils/designTokens";const c=n`
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,p=n`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.3);
  }
`,x=n`
  from { opacity: 0; }
  to { opacity: 1; }
`;export const sizeConfig={small:{fabSize:48,actionSize:40,iconSize:24,actionIconSize:20,labelFontSize:"12px"},medium:{fabSize:56,actionSize:48,iconSize:28,actionIconSize:24,labelFontSize:"13px"},large:{fabSize:64,actionSize:56,iconSize:32,actionIconSize:28,labelFontSize:"14px"}};const l={filled:e`
    background: ${a.primary||"#3b82f6"};
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    
    &:hover:not(:disabled) {
      background: #2563eb;
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
    }
  `,outlined:e`
    background: white;
    color: ${a.primary||"#3b82f6"};
    border: 2px solid ${a.primary||"#3b82f6"};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover:not(:disabled) {
      background: ${a.primary||"#3b82f6"}10;
    }
  `,soft:e`
    background: ${a.primary||"#3b82f6"}15;
    color: ${a.primary||"#3b82f6"};
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    
    &:hover:not(:disabled) {
      background: ${a.primary||"#3b82f6"}25;
    }
  `},d=o=>{switch(o){case"up":return e`
        flex-direction: column-reverse;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 16px;
      `;case"down":return e`
        flex-direction: column;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 16px;
      `;case"left":return e`
        flex-direction: row-reverse;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        padding-right: 16px;
      `;case"right":return e`
        flex-direction: row;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 16px;
      `;default:return e`
        flex-direction: column-reverse;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 16px;
      `}};export const SpeedDialRoot=i.div`
  position: relative;
  display: ${({$hidden:o})=>o?"none":"inline-flex"};
  z-index: ${({$zIndex:o})=>o};
`,SpeedDialBackdrop=i.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, ${({$opacity:o})=>o});
  z-index: ${({$zIndex:o})=>o-1};
  pointer-events: ${({$isOpen:o})=>o?"auto":"none"};
  opacity: ${({$isOpen:o})=>o?1:0};
  transition: opacity 0.2s ease;
`,SpeedDialFab=i.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:o})=>sizeConfig[o].fabSize}px;
  height: ${({$size:o})=>sizeConfig[o].fabSize}px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  z-index: 2;
  
  ${({$variant:o})=>l[o]}
  
  /* Custom colors override */
  ${({$customBg:o})=>o&&e`background: ${o};`}
  ${({$customColor:o})=>o&&e`color: ${o};`}
  
  /* Icon rotation */
  & > * {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    ${({$isOpen:o,$rotateOnToggle:t,$rotationDegrees:r})=>o&&t&&e`
        transform: rotate(${r}deg);
      `}
  }
  
  /* Focus ring */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${a.primary||"#3b82f6"}40;
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Hover scale */
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`,SpeedDialActions=i.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${({$gap:o})=>o}px;
  pointer-events: ${({$isOpen:o})=>o?"auto":"none"};
  
  ${({$direction:o})=>d(o)}
`,SpeedDialActionWrapper=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  ${({$direction:o,$showLabels:t})=>t?o==="up"||o==="down"?e`flex-direction: row;`:e`flex-direction: column;`:""}
`,SpeedDialActionButton=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:o})=>sizeConfig[o].actionSize}px;
  height: ${({$size:o})=>sizeConfig[o].actionSize}px;
  border-radius: 50%;
  border: none;
  background: ${({$customBg:o})=>o||"white"};
  color: ${({$customColor:o})=>o||"#374151"};
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  outline: none;
  flex-shrink: 0;
  
  /* Animation */
  opacity: 0;
  transform: scale(0.3);
  
  ${({$isOpen:o,$index:t,$staggerDelay:r,$animationDuration:s})=>o?e`
          animation: ${c} ${s}ms ease forwards;
          animation-delay: ${t*r}ms;
        `:e`
          animation: ${p} ${s*.5}ms ease forwards;
          animation-delay: ${t*(r*.3)}ms;
        `}
  
  /* Focus ring */
  &:focus-visible {
    box-shadow: 0 0 0 3px ${a.primary||"#3b82f6"}40;
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  
  /* Hover */
  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`,SpeedDialActionLabel=i.span`
  font-size: ${({$size:o})=>sizeConfig[o].labelFontSize};
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  padding: 6px 12px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  
  /* Animation */
  opacity: 0;
  transform: translateX(${({$direction:o})=>o==="left"?"10px":o==="right"?"-10px":"0"}) translateY(${({$direction:o})=>o==="up"?"10px":o==="down"?"-10px":"0"});
  
  ${({$isOpen:o,$index:t,$staggerDelay:r})=>o&&e`
      animation: ${c} 150ms ease forwards;
      animation-delay: ${t*r+50}ms;
    `}
`,IconWrapper=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:o,$isAction:t})=>t?sizeConfig[o].actionIconSize:sizeConfig[o].iconSize}px;
  height: ${({$size:o,$isAction:t})=>t?sizeConfig[o].actionIconSize:sizeConfig[o].iconSize}px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
