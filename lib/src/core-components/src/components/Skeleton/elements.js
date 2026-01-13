"use strict";import{styled as i,css as t,keyframes as o}from"styled-components";import{tokens as s}from"../../utils/designTokens";import{breakpoints as d}from"../../utils/abstracts";const c=o`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`,l=o`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`,x=o`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,u=o`
  0%, 100% {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    opacity: 0.8;
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
`,p=e=>e==="dark"?{base:"#374151",highlight:"#4b5563",wave:"rgba(255, 255, 255, 0.1)"}:{base:"#e5e7eb",highlight:"#f3f4f6",wave:"rgba(255, 255, 255, 0.6)"},$={xs:{width:"40px",height:"12px"},sm:{width:"80px",height:"16px"},md:{width:"120px",height:"20px"},lg:{width:"180px",height:"24px"},xl:{width:"240px",height:"32px"}};export const avatarSizes={xs:"24px",sm:"32px",md:"48px",lg:"64px",xl:"96px"};const m=(e,r,a)=>{const n=p(a);switch(e){case"pulse":return t`
        animation: ${c} ${r}ms cubic-bezier(0.4, 0, 0.6, 1) infinite;
      `;case"wave":return t`
        position: relative;
        overflow: hidden;
        
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${n.wave} 50%,
            transparent 100%
          );
          animation: ${l} ${r}ms ease-in-out infinite;
        }
      `;case"shimmer":return t`
        background: linear-gradient(
          90deg,
          ${n.base} 0%,
          ${n.highlight} 20%,
          ${n.highlight} 40%,
          ${n.base} 100%
        );
        background-size: 400% 100%;
        animation: ${x} ${r}ms linear infinite;
      `;case"glow":return t`
        animation: ${u} ${r}ms ease-in-out infinite;
      `;default:return t``}},f=(e,r)=>{switch(e){case"circular":case"avatar":return t`
        border-radius: 50%;
      `;case"text":return t`
        border-radius: 6px;
      `;case"button":return t`
        border-radius: ${s.borderRadius050||"6px"};
      `;case"badge":return t`
        border-radius: 9999px;
      `;case"rounded":return t`
        border-radius: ${r||s.borderRadius100||"12px"};
      `;default:return t`
        border-radius: 4px;
      `}};export const SkeletonElement=i.div`
  display: block;
  flex-shrink: 0;
  background-color: ${({$animation:e,$theme:r})=>{const a=p(r);return e==="shimmer"?"transparent":a.base}};
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e,$aspectRatio:r})=>r?"auto":typeof e=="number"?`${e}px`:e};
  
  ${({$aspectRatio:e})=>e&&t`
      aspect-ratio: ${e};
    `}
  
  ${({$variant:e,$borderRadius:r})=>f(e,r)}
  ${({$animation:e,$duration:r,$theme:a})=>m(e,r,a)}
  
  /* Stagger animation */
  ${({$staggerIndex:e})=>e!==void 0&&t`
      animation-delay: ${e*100}ms;
    `}
  
  /* Responsive */
  ${({$responsive:e})=>e&&t`
      ${d.sm} {
        width: 100%;
      }
    `}
  
  /* Accessibility - reduce motion */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &::after {
      animation: none;
    }
  }
`,SkeletonWrapper=i.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  gap: ${({$gap:e})=>e};
`,SkeletonGroupContainer=i.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  gap: ${({$gap:e})=>e};
  align-items: ${({$align:e})=>e==="start"?"flex-start":e==="end"?"flex-end":e==="stretch"?"stretch":"center"};
  
  ${({$wrap:e})=>e&&t`
      flex-wrap: wrap;
    `}
  
  /* Responsive stacking */
  ${({$responsive:e,$direction:r})=>e&&r==="row"&&t`
      ${d.sm} {
        flex-direction: column;
        align-items: stretch;
      }
    `}
`,SkeletonCardContainer=i.div`
  background: ${({$theme:e})=>e==="dark"?"#1f2937":"#ffffff"};
  border-radius: ${s.borderRadius100||"12px"};
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({$theme:e})=>e==="dark"?"#374151":"#f3f4f6"};
  overflow: hidden;
  
  ${d.sm} {
    padding: 12px;
  }
`,SkeletonTextContainer=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>e};
`;
