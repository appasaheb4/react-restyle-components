"use strict";"use client";import{jsx as a}from"react/jsx-runtime";import{styled as n}from"styled-components";const o=({size:r,weight:e,children:t})=>a("span",{style:{fontSize:{1:"0.75rem",4:"1.25rem"}[r],fontWeight:{regular:400,heavy:700}[e]},children:t}),s=n.div`
  background-color: var(--aui-primary);
  color: var(--aui-on-primary);

  flex-shrink: 0;
  width: ${({$diameter:r})=>r};
  height: ${({$diameter:r})=>r};
  border-radius: var(--aui-border-radius-round);

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;export const Avatar=({size:r,children:e})=>{const t={sm:"1.25rem",lg:"2rem"}[r],i={sm:1,lg:4}[r];return a(s,{"data-aui":"avatar",$diameter:t,children:a(o,{size:i,weight:"heavy",children:e})})};
