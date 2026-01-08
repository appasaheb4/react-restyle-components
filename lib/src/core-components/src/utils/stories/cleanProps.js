"use strict";export function cleanProps(n){return Object.entries(n).filter(([,e])=>e!==void 0).reduce((e,[r,t])=>({...e,[r]:t}),{})}
