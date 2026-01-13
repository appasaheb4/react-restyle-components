"use strict";import{jsx as g,jsxs as b}from"react/jsx-runtime";import B,{memo as u,useMemo as y}from"react";import{attachSubComponents as h}from"../../utils";import{InnerBadge as x}from"./InnerBadge/InnerBadge";import{styled as j}from"styled-components";import{InlineBadge as v}from"./InnerBadge/Inline";const C=j.div`
  position: relative;
  width: min-content;
  display: inline-block;
`,t=B.forwardRef(({size:n="hint",overlap:r="circular",children:o,position:a="bottom-right",variant:s="notification",iconSrc:m,count:e,"aria-label":i,classNames:d={},styles:f={},...l},p)=>{const c=y(()=>{if(i)return i;if(typeof e=="number")return`${e} notifications`;if(typeof e=="string"&&e)return`${e} notifications`},[i,e]);return b(C,{ref:p,"data-aui":"badge",className:d.container,style:f.container,...l,children:[g(x,{position:a,size:n,overlap:r,variant:s,iconSrc:m,count:e,"aria-label":c}),o]})});t.displayName="Badge";export const Badge=h("Badge",u(t),{Inline:v});
