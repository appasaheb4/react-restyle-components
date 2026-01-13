"use strict";import t from"@emotion/is-prop-valid";export const dontForwardProps=()=>({shouldForwardProp:(r,o)=>typeof o=="string"?t(r):!0});
