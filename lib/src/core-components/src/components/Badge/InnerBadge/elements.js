"use strict";import{styled as n,css as r}from"styled-components";import{sizeMap as l}from"../types";const u=(t,e)=>{const[o,s]=e.split("-");let a,i;return o==="top"?a="-50%":a="50%",s==="right"?i="50%":i="-50%",t==="square"?r`
      transform: translate(${i}, ${a});
      ${o}: 0;
      ${s}: 0;
    `:r`
    transform: translate(${i}, ${a});
    ${o}: 14%;
    ${s}: 14%;
  `},d=t=>{switch(t){case"alert":return r`
        background-color: var(--aui-status-error);
        color: var(--aui-status-on-error);
      `;case"warn":return r`
        background-color: var(--aui-status-warning);
        color: var(--aui-status-on-warning);
      `;case"positive":return r`
        background-color: var(--aui-status-success);
        color: var(--aui-status-on-success);
      `;case"neutral":return r`
        background-color: var(--aui-neutral-soft);
        color: var(--aui-on-neutral-soft);
        border: 1px solid var(--aui-outline);
      `;default:return r`
        background-color: var(--aui-primary);
        color: var(--aui-on-primary);
      `}},g=(t,e)=>t==="sm"&&!e?r`
      padding: 0 var(--aui-spacing-050);
    `:t==="md"&&!e?r`
      padding: 0 var(--aui-spacing-075);
    `:r`
      padding: 0;
    `,c=t=>r`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 1rem;
  width: fit-content;
  min-height: ${l[t.$size]};
  min-width: ${l[t.$size]};
  ${t.$size==="hint"&&r`
    outline: 2px solid var(--aui-surface);
  `}
  ${d(t.$variant)};
  ${g(t.$size,t.$hasIcon)}
`;export const StyledBadge=n.div`
  position: absolute;
  ${c}
  ${t=>u(t.$overlap,t.$position)};
`,StyledInline=n.div`
  ${c}
`,StyledText=n.span`
  font-size: ${({$size:t})=>t==="sm"?"0.75rem":"0.875rem"};
  font-weight: 700;
  line-height: 1rem;
  vertical-align: middle;
  font-variant-numeric: tabular-nums lining-nums;
`,StyledIcon=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:t})=>t==="sm"?"0.625rem":"0.75rem"};
  height: ${({$size:t})=>t==="sm"?"0.625rem":"0.75rem"};

  .iconContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 100%;
    height: 100%;
  }
`;
