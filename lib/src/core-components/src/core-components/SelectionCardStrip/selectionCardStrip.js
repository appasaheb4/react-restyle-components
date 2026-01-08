"use strict";"use client";import{jsx as t}from"react/jsx-runtime";import s from"react";import{styled as r}from"styled-components";import{createTransition as i,dontForwardProps as n}from"../../utils";import{colors as l}from"../../utils";import{toggleParentStyles as a}from"../ToggleCore";const d=e=>t("div",{...e}),c=r(d).withConfig(n())`
  display: inline-flex;
  align-items: flex-start;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.3;
  -moz-osx-font-smoothing: grayscale;

  ${()=>i({properties:["box-shadow","background-color"]})}

  ${a};
`,f=s.forwardRef((e,o)=>t(c,{ref:o,element:"label",type:"selection",selected:e.checked||e.focused,...e})),p=r.div.withConfig(n())`
  display: flex;
  z-index: 1;
  width: 100%;
  justify-content: center;
  padding: 0.1rem 0 0 0;
  ${i({properties:["color"]})};

  ${({isDisabled:e})=>e&&`
      cursor: not-allowed;
      color: ${l.disabledText};
`}
  ${({disableSvgColorOverride:e,isDisabled:o})=>!e&&`
    svg path {
      fill: none;
      stroke: ${o&&l.disabledText};
    }
`}
`;export const SelectionCardStrip={Wrapper:f,InternalWrapper:p};
