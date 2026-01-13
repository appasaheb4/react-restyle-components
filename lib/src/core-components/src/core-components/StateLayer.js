"use strict";import{styled as o}from"styled-components";import{tokens as t}from"../utils/designTokens";export const StateLayer=o.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  background: ${t.darkGray||"#4a4a4a"} !important;
  opacity: ${t.stateLayerNone};
`;
