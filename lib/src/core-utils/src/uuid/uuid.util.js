"use strict";import*as n from"lodash";export function uuidv4(r){return n.repeat("x",r).replace(/[xy]/g,function(o){const t=Math.random()*r|0;return(o==="x"?t:t&3|8).toString(r)})}
