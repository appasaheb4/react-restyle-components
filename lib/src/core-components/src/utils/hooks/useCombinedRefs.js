"use strict";import{useCallback as e}from"react";export function useCombinedRefs(...t){return e(o=>{t.forEach(n=>{n&&(typeof n=="function"?n(o):n.current=o)})},[])}
