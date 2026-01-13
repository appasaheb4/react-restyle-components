"use strict";import{styled as o,css as t,keyframes as a}from"styled-components";import{tokens as r}from"../../utils/designTokens";const s=a`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,p=a`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,n={small:{height:28,fontSize:12,padding:"4px 8px",tagHeight:20,iconSize:14},medium:{height:36,fontSize:14,padding:"6px 12px",tagHeight:24,iconSize:16},large:{height:44,fontSize:16,padding:"8px 16px",tagHeight:28,iconSize:18}},d={outlined:t`
    background: white;
    border: 1px solid ${r.outline||"#d1d5db"};
    
    &:hover:not([data-disabled="true"]) {
      border-color: ${r.primary||"#3b82f6"};
    }
    
    &:focus-within {
      border-color: ${r.primary||"#3b82f6"};
      box-shadow: 0 0 0 2px ${r.primary?`${r.primary}20`:"rgba(59, 130, 246, 0.15)"};
    }
  `,borderless:t`
    background: transparent;
    border: 1px solid transparent;
    
    &:hover:not([data-disabled="true"]) {
      background: ${r.surface||"#f9fafb"};
    }
  `,filled:t`
    background: ${r.surface||"#f3f4f6"};
    border: 1px solid transparent;
    
    &:hover:not([data-disabled="true"]) {
      background: #e5e7eb;
    }
    
    &:focus-within {
      background: white;
      border-color: ${r.primary||"#3b82f6"};
      box-shadow: 0 0 0 2px ${r.primary?`${r.primary}20`:"rgba(59, 130, 246, 0.15)"};
    }
  `,underlined:t`
    background: transparent;
    border: none;
    border-bottom: 1px solid ${r.outline||"#d1d5db"};
    border-radius: 0;
    
    &:hover:not([data-disabled="true"]) {
      border-bottom-color: ${r.primary||"#3b82f6"};
    }
    
    &:focus-within {
      border-bottom-color: ${r.primary||"#3b82f6"};
      border-bottom-width: 2px;
    }
  `},c={error:t`
    border-color: ${r.error||"#ef4444"} !important;
    
    &:focus-within {
      box-shadow: 0 0 0 2px ${r.error?`${r.error}20`:"rgba(239, 68, 68, 0.15)"};
    }
  `,warning:t`
    border-color: ${r.warning||"#f59e0b"} !important;
    
    &:focus-within {
      box-shadow: 0 0 0 2px ${r.warning?`${r.warning}20`:"rgba(245, 158, 11, 0.15)"};
    }
  `};export const TreeSelectRoot=o.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  font-family: inherit;
  
  &[data-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`,Selector=o.div`
  display: flex;
  align-items: center;
  flex-wrap: ${({$multiple:e})=>e?"wrap":"nowrap"};
  gap: 4px;
  width: 100%;
  min-height: ${({$size:e})=>n[e].height}px;
  padding: ${({$size:e})=>n[e].padding};
  font-size: ${({$size:e})=>n[e].fontSize}px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  ${({$variant:e})=>d[e]}
  ${({$status:e})=>e&&c[e]}
`,Prefix=o.span`
  display: flex;
  align-items: center;
  color: ${r.onSurface?`${r.onSurface}60`:"#6b7280"};
  margin-right: 8px;
  flex-shrink: 0;
  
  svg {
    width: ${({$size:e})=>n[e].iconSize}px;
    height: ${({$size:e})=>n[e].iconSize}px;
  }
`,SearchInput=o.input`
  flex: 1;
  min-width: 60px;
  border: none;
  background: transparent;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  color: ${r.onSurface||"#1f2937"};
  
  &::placeholder {
    color: ${r.onSurface?`${r.onSurface}50`:"#9ca3af"};
  }
`,Placeholder=o.span`
  color: ${r.onSurface?`${r.onSurface}50`:"#9ca3af"};
  user-select: none;
`,SelectedValue=o.span`
  color: ${r.onSurface||"#1f2937"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Tag=o.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: ${({$size:e})=>n[e].tagHeight}px;
  padding: 0 8px;
  background: ${r.surface||"#f3f4f6"};
  border-radius: 4px;
  font-size: ${({$size:e})=>n[e].fontSize-2}px;
  color: ${r.onSurface||"#374151"};
  max-width: 100%;
  
  ${({$disabled:e})=>e&&t`
      opacity: 0.6;
    `}
`,TagLabel=o.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,TagClose=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${r.onSurface?`${r.onSurface}60`:"#6b7280"};
  border-radius: 50%;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${r.outline||"#d1d5db"};
    color: ${r.onSurface||"#1f2937"};
  }
  
  svg {
    width: 10px;
    height: 10px;
  }
`,MaxTagPlaceholder=o.span`
  display: inline-flex;
  align-items: center;
  height: ${({$size:e})=>n[e].tagHeight}px;
  padding: 0 8px;
  background: ${r.surface||"#f3f4f6"};
  border-radius: 4px;
  font-size: ${({$size:e})=>n[e].fontSize-2}px;
  color: ${r.onSurface?`${r.onSurface}80`:"#6b7280"};
`,Suffix=o.span`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  padding-left: 8px;
  flex-shrink: 0;
  
  svg {
    width: ${({$size:e})=>n[e].iconSize}px;
    height: ${({$size:e})=>n[e].iconSize}px;
    color: ${r.onSurface?`${r.onSurface}60`:"#6b7280"};
    transition: transform 0.2s ease;
  }
`,ArrowIcon=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${({$open:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${r.onSurface?`${r.onSurface}60`:"#6b7280"};
  }
`,ClearButton=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${r.onSurface?`${r.onSurface}50`:"#9ca3af"};
  border-radius: 50%;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${r.outline||"#e5e7eb"};
    color: ${r.onSurface||"#1f2937"};
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`,Dropdown=o.div`
  position: absolute;
  ${({$placement:e})=>e.startsWith("top")?t`
        bottom: 100%;
        margin-bottom: 4px;
      `:t`
      top: 100%;
      margin-top: 4px;
    `}
  ${({$placement:e})=>e.endsWith("Right")?t`right: 0;`:t`left: 0;`}
  ${({$matchWidth:e})=>e===!0?t`width: 100%;`:typeof e=="number"?t`min-width: ${e}px;`:t`min-width: 200px;`}
  max-height: ${({$maxHeight:e})=>e}px;
  overflow: auto;
  background: white;
  border: 1px solid ${r.outline||"#e5e7eb"};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  z-index: 1050;
  animation: ${s} 0.15s ease;
`,TreeContainer=o.div`
  padding: 4px;
  
  ${({$showLine:e})=>e&&t`
      --tree-line-color: ${r.outline||"#e5e7eb"};
    `}
`,TreeNode=o.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  padding-left: ${({$level:e})=>8+e*20}px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  border-radius: 4px;
  transition: background 0.15s ease;
  
  ${({$disabled:e})=>e&&t`
      opacity: 0.5;
    `}
  
  ${({$selected:e})=>e&&t`
      background: ${r.primary?`${r.primary}10`:"#eff6ff"};
      color: ${r.primary||"#3b82f6"};
    `}
  
  &:hover:not([data-disabled="true"]) {
    background: ${({$selected:e})=>e?r.primary?`${r.primary}15`:"#dbeafe":r.surface||"#f9fafb"};
  }
  
  /* Tree lines */
  ${({$showLine:e,$level:i,$isLeaf:f})=>e&&i>0&&t`
      &::before {
        content: '';
        position: absolute;
        left: ${8+(i-1)*20+8}px;
        top: 0;
        bottom: 50%;
        width: 1px;
        background: var(--tree-line-color);
      }
      
      &::after {
        content: '';
        position: absolute;
        left: ${8+(i-1)*20+8}px;
        top: 50%;
        width: 12px;
        height: 1px;
        background: var(--tree-line-color);
      }
    `}
`,ExpandIcon=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  flex-shrink: 0;
  
  svg {
    width: 12px;
    height: 12px;
    color: ${r.onSurface?`${r.onSurface}60`:"#6b7280"};
    transition: transform 0.2s ease;
    transform: ${({$expanded:e})=>e?"rotate(90deg)":"rotate(0deg)"};
    
    ${({$loading:e})=>e&&t`
        animation: ${p} 0.8s linear infinite;
      `}
  }
`,LeafIndent=o.span`
  width: 20px;
  margin-right: 4px;
  flex-shrink: 0;
`,Checkbox=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1.5px solid ${r.outline||"#d1d5db"};
  border-radius: 3px;
  flex-shrink: 0;
  transition: all 0.15s ease;
  
  ${({$checked:e})=>e&&t`
      background: ${r.primary||"#3b82f6"};
      border-color: ${r.primary||"#3b82f6"};
    `}
  
  ${({$indeterminate:e})=>e&&t`
      background: ${r.primary||"#3b82f6"};
      border-color: ${r.primary||"#3b82f6"};
    `}
  
  ${({$disabled:e})=>e&&t`
      background: ${r.surface||"#f3f4f6"};
      cursor: not-allowed;
    `}
  
  svg {
    width: 12px;
    height: 12px;
    color: white;
  }
`,NodeIcon=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
  color: ${r.onSurface?`${r.onSurface}60`:"#6b7280"};
  
  svg {
    width: 14px;
    height: 14px;
  }
`,NodeTitle=o.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: ${({$disabled:e})=>e?r.onSurface?`${r.onSurface}50`:"#9ca3af":r.onSurface||"#1f2937"};
`,EmptyState=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  color: ${r.onSurface?`${r.onSurface}50`:"#9ca3af"};
  font-size: 14px;
`,LoadingIndicator=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${r.primary||"#3b82f6"};
    animation: ${p} 0.8s linear infinite;
  }
`;
