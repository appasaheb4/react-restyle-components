"use strict";"use client";import{jsx as o}from"react/jsx-runtime";import e,{useContext as i}from"react";import{styled as s}from"styled-components";import{colors as n}from"../../utils";import{dontForwardProps as d}from"../../utils";const m=e.createContext({isInsideCard:!1});export const StyledDivider=s.hr.withConfig(d())`
  margin: 0;
  border: 0;
  border-top: 1px solid ${n.neutralBrightest};

  ${({isInsideCard:r})=>r&&`margin-left: -1rem; 
    margin-right: -1rem;`}
`,Divider=r=>{const{isInsideCard:t}=i(m);return o(StyledDivider,{isInsideCard:t,...r})};
