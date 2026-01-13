"use strict";export const calcWidthOfColumns=({columns:n,totalColumns:t,margin:r,gutter:c,maxWidth:$="100%"})=>{const e=(n-1)*c,s=2*r+(t-1)*c;return`calc(${e}px + ${n} * (${$} - ${s}px) / ${t})`};
