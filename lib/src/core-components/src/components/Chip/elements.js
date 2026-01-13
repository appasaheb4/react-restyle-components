"use strict";import{styled as a,css as i}from"styled-components";import{tokens as t}from"../../utils/designTokens";const f={small:{height:"24px",padding:"0 8px",fontSize:"0.75rem",iconSize:"14px",gap:"4px",borderRadius:"12px"},medium:{height:"32px",padding:"0 12px",fontSize:"0.8125rem",iconSize:"16px",gap:"6px",borderRadius:"16px"},large:{height:"40px",padding:"0 16px",fontSize:"0.875rem",iconSize:"18px",gap:"8px",borderRadius:"20px"}},s={default:{filled:{bg:t.onSurface||"#1a1a2e",text:"#fff",hover:"#2d2d42"},outlined:{border:t.outline||"#d1d5db",text:t.onSurface||"#1a1a2e",hover:"#f3f4f6"},soft:{bg:t.surface||"#f3f4f6",text:t.onSurface||"#1a1a2e",hover:"#e5e7eb"}},primary:{filled:{bg:t.primary||"#454cbf",text:"#fff",hover:"#3d44a5"},outlined:{border:t.primary||"#454cbf",text:t.primary||"#454cbf",hover:"#e7e8f8"},soft:{bg:"#e7e8f8",text:t.primary||"#454cbf",hover:"#d4d6f4"}},success:{filled:{bg:"#10b981",text:"#fff",hover:"#059669"},outlined:{border:"#10b981",text:"#10b981",hover:"#ecfdf5"},soft:{bg:"#ecfdf5",text:"#065f46",hover:"#d1fae5"}},warning:{filled:{bg:"#f59e0b",text:"#fff",hover:"#d97706"},outlined:{border:"#f59e0b",text:"#f59e0b",hover:"#fffbeb"},soft:{bg:"#fffbeb",text:"#92400e",hover:"#fef3c7"}},error:{filled:{bg:"#ef4444",text:"#fff",hover:"#dc2626"},outlined:{border:"#ef4444",text:"#ef4444",hover:"#fef2f2"},soft:{bg:"#fef2f2",text:"#991b1b",hover:"#fee2e2"}},info:{filled:{bg:"#3b82f6",text:"#fff",hover:"#2563eb"},outlined:{border:"#3b82f6",text:"#3b82f6",hover:"#e7f3ff"},soft:{bg:"#e7f3ff",text:"#1e40af",hover:"#dbeafe"}}},p=(e,r,n)=>{const d=s[r];if(e==="filled"){const o=d.filled;return i`
      background: ${n?o.hover:o.bg};
      color: ${o.text};
      border: 2px solid transparent;

      &:hover:not(:disabled) {
        background: ${o.hover};
      }
    `}if(e==="outlined"){const o=d.outlined;return i`
      background: ${n?o.hover:"transparent"};
      color: ${o.text};
      border: 2px solid ${o.border};

      &:hover:not(:disabled) {
        background: ${o.hover};
      }
    `}const l=d.soft;return i`
    background: ${n?l.hover:l.bg};
    color: ${l.text};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: ${l.hover};
    }
  `};export const ChipElement=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({$size:e})=>f[e].gap};
  height: ${({$size:e})=>f[e].height};
  padding: ${({$size:e})=>f[e].padding};
  font-size: ${({$size:e})=>f[e].fontSize};
  font-weight: 500;
  font-family: inherit;
  border-radius: ${({$size:e})=>f[e].borderRadius};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  user-select: none;
  outline: none;
  position: relative;
  overflow: hidden;

  ${({$variant:e,$color:r,$selected:n})=>p(e,r,n)}

  /* Selected state visual indicator */
  ${({$selected:e,$color:r,$variant:n})=>e&&n==="outlined"&&i`
      border-color: ${s[r].outlined.text};
      box-shadow: 0 0 0 1px ${s[r].outlined.text};
    `}
  
  /* Disabled state */
  ${({$disabled:e})=>e&&i`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  
  /* Focus visible */
  &:focus-visible {
    box-shadow:
      0 0 0 2px ${t.surface||"#fff"},
      0 0 0 4px ${t.primary||"#454cbf"};
  }

  /* Active state */
  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`,IconWrapper=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>f[e].iconSize};
  height: ${({$size:e})=>f[e].iconSize};

  ${({$side:e})=>e==="left"?i`
          margin-left: -2px;
        `:i`
          margin-right: -2px;
        `}

  svg {
    width: 100%;
    height: 100%;
  }
`,AvatarWrapper=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>e==="small"?"18px":e==="large"?"28px":"24px"};
  height: ${({$size:e})=>e==="small"?"18px":e==="large"?"28px":"24px"};
  border-radius: 50%;
  overflow: hidden;
  margin-left: ${({$size:e})=>e==="small"?"-4px":e==="large"?"-10px":"-6px"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,DeleteButton=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  height: ${({$size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  border-radius: 50%;
  margin-right: -4px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`,ChipLabel=a.span`
  line-height: 1;
`,ChipGroupElement=a.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  gap: ${({$gap:e})=>e};

  ${({$wrap:e})=>e&&i`
      flex-wrap: wrap;
    `}

  ${({$scrollable:e,$direction:r})=>e&&i`
      overflow-x: ${r==="row"?"auto":"visible"};
      overflow-y: ${r==="column"?"auto":"visible"};
      padding-bottom: ${r==="row"?"4px":"0"};

      /* Custom scrollbar */
      &::-webkit-scrollbar {
        height: 4px;
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${t.outline||"#d1d5db"};
        border-radius: 2px;
      }
    `}
`;
