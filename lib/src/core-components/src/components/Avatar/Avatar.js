"use strict";import{jsx as a}from"react/jsx-runtime";import{styled as u}from"styled-components";import{Icon as b}from"../Icon/Icon";const h={sm:"2rem",md:"2.5rem",lg:"3rem",xl:"4rem",xxl:"5rem"},p=u.div`
  width: ${({$size:e})=>h[e]};
  height: ${({$size:e})=>h[e]};
  border-radius: 50%;
  background-color: ${({$backgroundColor:e})=>e};
  color: ${({$textColor:e})=>e};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  user-select: none;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({$clickable:e})=>e&&`
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `}
  }
`,C=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,A=u.span`
  font-weight: 600;
  font-size: ${({$size:e})=>{switch(e){case"sm":return"0.75rem";case"md":return"0.875rem";case"lg":return"1rem";case"xl":return"1.25rem";case"xxl":return"1.5rem";default:return"0.875rem"}}};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,v=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:e})=>{switch(e){case"sm":return"1rem";case"md":return"1.25rem";case"lg":return"1.5rem";case"xl":return"2rem";case"xxl":return"2.5rem";default:return"1.25rem"}}};
  height: ${({$size:e})=>{switch(e){case"sm":return"1rem";case"md":return"1.25rem";case"lg":return"1.5rem";case"xl":return"2rem";case"xxl":return"2.5rem";default:return"1.25rem"}}};
`,I=e=>{if(!e)return"";const r=e.trim().split(/\s+/);if(r.length===1)return r[0].charAt(0).toUpperCase();const t=r[0].charAt(0).toUpperCase(),n=r[r.length-1].charAt(0).toUpperCase();return t+n},k=e=>{const r=["#f56565","#ed8936","#ecc94b","#48bb78","#38b2ac","#4299e1","#667eea","#9f7aea","#ed64a6","#f687b3","#fc8181","#f6ad55","#fbd38d","#68d391","#4fd1c7","#63b3ed","#7c3aed","#a78bfa","#f093fb","#fbb6ce"];let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return r[Math.abs(t)%r.length]},w=e=>(["#f56565","#ed8936","#667eea","#9f7aea","#7c3aed"].includes(e),"#ffffff");export const Avatar=({name:e="",initials:r,src:t,alt:n,size:s="md",backgroundColor:g,textColor:$,iconName:x="FaUser",className:m,classNames:o={},styles:c={},onClick:i})=>{const l=r||I(e),d=g||k(l||e||"User"),f=$||w(d);return t?a(p,{$size:s,$backgroundColor:d,$textColor:f,$clickable:!!i,className:`${m||""} ${o.container||""}`,style:c.container,onClick:i,title:e||n,children:a(C,{src:t,alt:n||e||"Avatar",className:o.image,style:c.image})}):l?a(p,{$size:s,$backgroundColor:d,$textColor:f,$clickable:!!i,className:`${m||""} ${o.container||""}`,style:c.container,onClick:i,title:e||`${l} Avatar`,children:a(A,{$size:s,className:o.initials,style:c.initials,children:l})}):a(p,{$size:s,$backgroundColor:d,$textColor:f,$clickable:!!i,className:`${m||""} ${o.container||""}`,style:c.container,onClick:i,title:"User Avatar",children:a(v,{$size:s,className:o.iconWrapper,style:c.iconWrapper,children:a(b,{nameIcon:x,propsIcon:{color:f,size:"100%"}})})})},AVATAR_SIZES=Object.keys(h);export default Avatar;
