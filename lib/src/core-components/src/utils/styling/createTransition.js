"use strict";import{css as r}from"styled-components";export const transitionDuration="0.2s",transitionTimingFunction="ease-in-out",createTransition=({properties:t,duration:n=transitionDuration,timingFunction:o=transitionTimingFunction})=>r`
  transition: ${t.map(i=>`${i} ${n} ${o}`).join(", ")};
`;
