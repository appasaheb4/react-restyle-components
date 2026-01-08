"use strict";import{styled as i,css as t}from"styled-components";import{tokens as n}from"../../utils/designTokens";const o={thin:"1px",medium:"2px",thick:"4px"},c={default:n.outline||"#e9ecef",primary:n.primary||"#454cbf",subtle:n.outlineSoft||"#f1f3f5",dark:"#374151"};export const DividerContainer=i.div`
  display: flex;
  align-items: center;
  
  ${({$orientation:a,$inset:e,$centerInset:r})=>a==="horizontal"?t`
          width: ${r?`calc(100% - (${e} * 2))`:`calc(100% - ${e})`};
          margin-left: ${e};
          ${r&&`margin-right: ${e};`}
          flex-direction: row;
        `:t`
          height: 100%;
          margin-top: ${e};
          ${r&&`margin-bottom: ${e};`}
          flex-direction: column;
        `}
`,DividerLine=i.div`
  flex: ${({$flex:a})=>a??1};
  
  ${({$orientation:a,$size:e,$variant:r,$color:d})=>a==="horizontal"?t`
          height: ${o[e]};
          width: 100%;
        `:t`
          width: ${o[e]};
          height: 100%;
        `}
  
  /* Variant styles */
  ${({$variant:a,$color:e})=>{const r=c[e];switch(a){case"solid":return t`
          background-color: ${r};
        `;case"dashed":return t`
          background-image: repeating-linear-gradient(
            90deg,
            ${r},
            ${r} 8px,
            transparent 8px,
            transparent 16px
          );
        `;case"dotted":return t`
          background-image: repeating-linear-gradient(
            90deg,
            ${r},
            ${r} 4px,
            transparent 4px,
            transparent 12px
          );
        `;case"gradient":return t`
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${r} 20%,
            ${r} 80%,
            transparent 100%
          );
        `;default:return t`
          background-color: ${r};
        `}}}
`,DividerLabel=i.span`
  padding: 0 ${n.spacing150||"0.75rem"};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({$color:a})=>a==="dark"?"#9ca3af":n.onSurface?`${n.onSurface}80`:"#6c757d"};
  white-space: nowrap;
  flex-shrink: 0;
`;
