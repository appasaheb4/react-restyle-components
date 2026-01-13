"use strict";export function attachSubComponents(a,e,t){return Object.values(t).forEach(c=>c.displayName=`${a}.${c.displayName}`),Object.assign(e,{displayName:a},t)}
