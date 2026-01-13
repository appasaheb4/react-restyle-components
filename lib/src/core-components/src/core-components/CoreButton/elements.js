"use strict";"use client";import{styled as a}from"styled-components";import{colors as t,getFontSize as l,getFontWeight as g}from"../../utils";import{dontForwardProps as d}from"../../utils";const s=({size:e})=>({small:`
      height: 2rem;
      padding: 0.25rem 1rem;
    `,medium:`
      height: 3rem;
      padding: 0.75rem 1.75rem;
    `,large:`
      height: 4rem;
      padding: 1rem 1.75rem;
    `})[e],u=({theme:e,color:r,variant:n,isMobile:i})=>{if(i)return"";const o={...e,whiteHover:t.neutralBrighter}[`${r}Hover`];return{default:`
      background: ${o};
      border-color: ${o};
    `,outline:`
      background: ${r==="white"?"transparent":t.neutralBrightest};
      border-color: ${r==="primary"?e.primary:o};
      color: ${r==="primary"?e.primary:o};
    `,flat:`
      background: ${r==="white"?"transparent":t.neutralBrightest};
      border-color: ${r==="white"?o:t.neutralBrightest};
      text-decoration: unset;
      color: ${o};
    `,text:`
      color: ${o};
    `}[n]},c=({theme:e,color:r,variant:n})=>{const i={...e,whitePressed:t.neutralBright}[`${r}Pressed`];return{default:`
      background: ${i};
      border-color: ${i};
      color: ${{primary:e.textOnPrimary,secondary:e.textOnSecondary,white:t.black}[r]};
    `,outline:`
      background: ${r==="white"?"transparent":t.neutralBrighter};
      border-color: ${i};
      color: ${i};
    `,flat:`
      background: ${r==="white"?"transparent":t.neutralBrighter};
      border-color: ${r==="white"?i:t.neutralBrighter};
      color: ${i};
    `,text:`
      color: ${i};
    `}[n]},m=({variant:e})=>({default:`
      background: ${t.disabledBackground};
      border-color: ${t.disabledBackground};
    `,outline:`
      border-color: ${t.disabledText};
    `})[e],h=({theme:e,color:r,variant:n,hasIcon:i})=>{const o={...e,white:t.white}[r];return{default:`
      background: ${o};
      border-color: ${o};
      color: ${{primary:e.textOnPrimary,secondary:e.textOnSecondary,white:t.black}[r]};
    `,outline:`
      background: transparent;
      color: ${o};
      border: 2px solid ${o};
    `,flat:`
      background: transparent;
      color: ${o};
      border-color: transparent;
      ${i?"":"text-decoration: underline; text-underline-position: under;"}
    `,text:`
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 0.0625rem;
      color: ${o};
      text-decoration: underline;
      text-underline-position: under;
      background: inherit;
      height: initial;
    `}[n]};export const iconOnlyStyle={small:`
    padding: 0.375rem;
    height: auto;
  `,medium:`
    padding: 0.75rem;
    height: auto;
  `,large:`
    padding: 1rem;
    height: auto;
  `},iconOnlyFigmaStyle={small:`
    padding: 0.375rem;
    width: 2rem;
    height: 2rem;
  `,medium:`
    padding: 0.75rem;
    width: 3rem;
    height: 3rem;
  `,large:`
    padding: 1rem;
    width: 4rem;
    height: 4rem;
  `};const p=({hasIcon:e,iconSide:r,size:n})=>e?n!=="small"?r==="left"?"padding-left: 1.25rem":"padding-right: 1.25rem":r==="left"?"padding-left: 0.75rem":"padding-right: 0.75rem":"";export const ButtonElement=a.button.withConfig(d())`
  font-family: inherit;
  font-weight: ${g("base")};
  font-style: normal;
  font-size: ${({size:e})=>l(e==="large"?3:2)};
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
  width: auto;

  ${s};

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 0.125rem;
  border-radius: 10rem;

  ${h}

  &:not(:disabled) {
    &:focus {
      outline-width: 0.125rem;
      outline-offset: 0.25rem;
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
    &:focus-visible {
      outline-width: 0.125rem;
      outline-offset: 0.25rem;
    }

    &:hover {
      cursor: pointer;
      ${u}
    }
    &:active {
      ${c}
    }
  }

  &:disabled {
    ${m}

    color: ${t.disabledText};
    -webkit-text-fill-color: ${t.disabledText};
    cursor: not-allowed;
  }

  ${p};

  ${({hasChildren:e,size:r,useFigmaStyles:n})=>{if(!e)return n?iconOnlyFigmaStyle[r]:iconOnlyStyle[r]}}
`,iconMargins={small:{left:"0 0.25rem 0 0",right:"0 0 0 0.25rem"},medium:{left:"0 0.5rem 0 0",right:"0 0 0 0.5rem"},large:{left:"0 0.5rem 0 0",right:"0 0 0 0.5rem"}},IconWrapper=a.div.withConfig(d())`
  margin: ${({hasChildren:e,iconSide:r,size:n})=>e?r==="left"?iconMargins[n].left:iconMargins[n].right:"0"};
`;
