"use strict";import{jsx as r,jsxs as c}from"react/jsx-runtime";import{styled as i,css as o}from"styled-components";import{createTransition as n}from"../../utils";import{StateLayer as a}from"../StateLayer";const p=e=>r("span",{...e}),u=o`
  position: relative;
  display: block;
  box-sizing: border-box;
  overflow: hidden;

  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-right: var(--aui-spacing-100);

  ${({$showInteraction:e})=>e&&o`
      // Transitions
      &:before,
      [data-aui='icon'],
      ${a} {
        ${n({properties:["opacity"]})}
      }

      ${n({properties:["box-shadow","background-color","color"]})}

      // Support keyboard focus
      &:has(~ input:focus-visible) {
        outline: 1px solid blue;
      }

      // Disabled styles
      &:has(~ input:disabled) {
        opacity: var(--aui-state-layer-on-disabled);
      }
    `}
`,s=i.span`
  [data-aui='icon-check'],
  [data-aui='icon-minus'] {
    position: absolute;
    inset: 0;
    margin: auto;
    transition: opacity 0.15s;
    pointer-events: none;
  }
  ${u};

  border-radius: var(--aui-border-radius-050);

  ${({$checked:e,$indeterminate:d})=>e||d?o`
          box-shadow: 0 0 0 1px var(--aui-inverse-surface) inset;
          background: var(--aui-inverse-surface);
          color: var(--aui-inverse-on-surface);
        `:o`
          box-shadow: 0 0 0 1px var(--aui-outline) inset;
          background: var(--aui-surface);
          color: var(--aui-on-surface);
        `}
`,t=i.span`
  ${u};

  border-radius: var(--aui-border-radius-round);
  background: var(--aui-surface);

  ${({$checked:e})=>e?o`
          box-shadow: 0 0 0 2px var(--aui-inverse-surface) inset;
        `:o`
          box-shadow: 0 0 0 1px var(--aui-outline) inset;
        `}

  &:before {
    content: '';
    position: absolute;
    border-radius: var(--aui-border-radius-round);
    width: 0.625rem;
    height: 0.625rem;
    top: 0.3125rem;
    left: 0.3125rem;
    background: var(--aui-inverse-surface);
    opacity: ${({$checked:e})=>e?"1":"0"};
  }
`;export const CheckboxToggle=({...e})=>c(s,{...e,children:[r(a,{}),r("span",{children:"Icons"})]}),RadioToggle=e=>r(t,{...e,children:r(a,{})}),StyledDescription=i(p).attrs({size:2})`
  color: var(--aui-on-surface);
  line-height: 1.3;

  &:has(~ input:disabled) {
    opacity: var(--aui-state-layer-on-disabled);
    cursor: not-allowed;
  }
`,HiddenInput=i.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`,toggleParentStyles=o`
  &:not(:has(input:disabled)) {
    &:hover
      ${s}
      ${a},
      &:hover
      ${t}
      ${a} {
      opacity: var(--aui-state-layer-hover);
    }

    &:active
      ${s}
      ${a},
      &:hover
      ${t}
      ${a} {
      opacity: var(--aui-state-layer-press);
    }
  }
`;
