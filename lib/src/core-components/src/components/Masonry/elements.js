"use strict";import{styled as t,css as n,keyframes as a}from"styled-components";import{tokens as e}from"../../utils/designTokens";const s=a`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,x=a`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;export const MasonryContainer=t.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: ${({$gutter:o})=>o}px;
`,MasonryColumn=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: ${({$gutter:o})=>o}px;
`,MasonryItemWrapper=t.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  
  ${({$minHeight:o})=>o&&n`
      min-height: ${o}px;
    `}
  
  /* Animation */
  ${({$animated:o,$animationDuration:i,$staggerIndex:r,$staggerDelay:p})=>o&&n`
      opacity: 0;
      animation: ${s} ${i}ms ease-out forwards;
      animation-delay: ${r*p}ms;
    `}
  
  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`,MasonryImage=t.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: ${({$objectFit:o})=>o};
  border-radius: ${({$borderRadius:o})=>typeof o=="number"?`${o}px`:o};
  transition: opacity 0.3s ease;
  
  ${({$isLoading:o})=>o&&n`
      opacity: 0;
    `}
`,ImagePlaceholder=t.div`
  width: 100%;
  height: ${({$height:o})=>o?typeof o=="number"?`${o}px`:o:"200px"};
  background: linear-gradient(
    90deg,
    ${e.surface||"#f0f0f0"} 25%,
    ${e.outlineSoft||"#e5e5e5"} 50%,
    ${e.surface||"#f0f0f0"} 75%
  );
  background-size: 400% 100%;
  animation: ${x} 1.5s ease-in-out infinite;
  border-radius: ${({$borderRadius:o})=>typeof o=="number"?`${o}px`:o};
`,EmptyState=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  color: ${e.onSurface?`${e.onSurface}80`:"#6b7280"};
  font-size: 14px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }
`,MasonryCard=t.div`
  background: white;
  border-radius: ${({$borderRadius:o})=>typeof o=="number"?`${o}px`:o};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  }
`,MasonryCardImage=t.img`
  width: 100%;
  height: auto;
  display: block;
`,MasonryCardContent=t.div`
  padding: 12px 16px;
`;
