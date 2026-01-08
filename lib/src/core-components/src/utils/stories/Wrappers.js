"use strict";import{jsx as r}from"react/jsx-runtime";import{styled as e}from"styled-components";export const Wrappers={Default:e.div`
    display: flex;
    justify-content: flex-start;
    padding: 2rem;
  `,Dashed:e.div`
    margin: auto;
    ${({$width:i})=>i&&`width: ${i};`}
    border: 2px dashed var(--aui-primary);
    border-radius: 8px;
    padding: 8px;
  `,TextInput:e.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
  `,Modal:e.div`
    height: 100%;
    margin: -1rem;
  `,Row:e.div`
    max-width: 100%;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  `,Test:e.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(100%, 600px);
  `},Decorators=Object.entries(Wrappers).reduce((i,[t,a])=>({...i,[t]:d=>r(a,{children:r(d,{})})}),{});
