"use strict";import{styled as a,css as o,keyframes as n}from"styled-components";import{breakpoints as d}from"../../utils/abstracts";import{tokens as r}from"../../utils/designTokens";const c=n`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,f=n`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,p=n`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,u=n`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,b=(e,t)=>{switch(e){case"fade":return o`
        animation: ${c} ${t}ms ease-out forwards;
      `;case"slide":return o`
        animation: ${f} ${t}ms ease-out forwards;
      `;case"scale":return o`
        animation: ${p} ${t}ms ease-out forwards;
      `;default:return""}};export const GridWrapper=a.div`
  position: relative;
  width: 100%;

  /* Variant: contained */
  ${({$variant:e})=>e==="contained"&&o`
      background: linear-gradient(
        135deg,
        ${r.surface||"#ffffff"} 0%,
        #f8f9fa 100%
      );
      border: 1px solid ${r.outline||"#e9ecef"};
      border-radius: ${r.borderRadius100||"8px"};
      padding: ${r.spacing200||"1rem"};
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    `}

  /* Variant: card */
  ${({$variant:e})=>e==="card"&&o`
      background: ${r.surface||"#ffffff"};
      border-radius: ${r.borderRadius200||"16px"};
      padding: ${r.spacing300||"1.5rem"};
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    `}
`,GridContainer=a.div`
  display: grid;
  width: 100%;
  gap: ${({$gap:e,$rowGap:t,$columnGap:i})=>t||i?`${t||e} ${i||e}`:e};

  /* Grid alignment */
  ${({$alignItems:e})=>e&&o`
      align-items: ${e};
    `}

  ${({$justifyItems:e})=>e&&o`
      justify-items: ${e};
    `}

  ${({$alignContent:e})=>e&&o`
      align-content: ${e};
    `}

  ${({$justifyContent:e})=>e&&o`
      justify-content: ${e};
    `}

  /* Grid template columns */
  ${({$minWidth:e,$maxWidth:t,$columns:i,$autoFit:s})=>o`
    grid-template-columns: repeat(
      ${s?"auto-fit":i},
      minmax(${e}rem, ${t?`${t}rem`:"1fr"})
    );
  `}

  /* Auto-fit single child centering */
  ${({$autoFit:e,$columns:t,$gap:i})=>e&&o`
      & > *:only-child {
        width: 100%;
        max-width: calc((100% - ${t-1} * ${i}) / ${t});
      }
    `}

  /* Max rows limit (hide overflow) */
  ${({$maxRows:e,$columns:t,$scroll:i})=>e&&!i?.enabled&&o`
      & > *:nth-child(n + ${t*e+1}) {
        display: none;
      }
    `}

  /* Scroll mode */
  ${({$scroll:e,$minWidth:t,$columns:i,$gap:s,$maxRows:l})=>e?.enabled&&o`
      scroll-behavior: ${e.smoothScroll!==!1?"smooth":"auto"};
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      grid-auto-flow: column;
      -webkit-overflow-scrolling: touch;

      /* Prevent overflow from hiding focus outline */
      & > *:focus,
      & > li > *:focus {
        outline-offset: -2px;
      }

      /* Hide scrollbar if configured */
      ${e.hideScrollbar&&o`
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
          height: 0;
          background: transparent;
        }
      `}

      /* Custom scrollbar styling */
      ${!e.hideScrollbar&&o`
        scrollbar-width: thin;
        scrollbar-color: ${r.outline||"#dee2e6"} transparent;

        &::-webkit-scrollbar {
          height: 6px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background: ${r.outline||"#dee2e6"};
          border-radius: 3px;

          &:hover {
            background: ${r.primary||"#454cbf"};
          }
        }
      `}

      grid-template-columns: unset;
      grid-template-rows: repeat(${l||1}, max-content);
      grid-auto-columns: max(
        calc(
          (100% - ${i+(e.scrollHint||0)-1} * ${s}) /
            ${i+(e.scrollHint||0)}
        ),
        ${t}rem
      );

      & > * {
        scroll-snap-align: ${e.scrollSnapAlign||"start"};
      }

      & > *:first-child {
        scroll-snap-align: start;
      }

      & > *:last-child {
        scroll-snap-align: end;
      }
    `}

  /* List item styling */
  & > li {
    display: flex;
    box-sizing: border-box;
    list-style: none;

    & > * {
      width: 100%;
      height: auto;
    }
  }
`,GridItem=a.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({$colSpan:e})=>e&&o`
      grid-column: span ${e};
    `}

  ${({$rowSpan:e})=>e&&o`
      grid-row: span ${e};
    `}

  ${({$order:e})=>e!==void 0&&o`
      order: ${e};
    `}

  ${({$alignSelf:e})=>e&&o`
      align-self: ${e};
    `}

  ${({$justifySelf:e})=>e&&o`
      justify-self: ${e};
    `}

  ${({$borderRadius:e})=>e&&o`
      border-radius: ${e};
      overflow: hidden;
    `}

  ${({$padding:e})=>e&&o`
      padding: ${e};
    `}

  ${({$aspectRatio:e})=>e&&o`
      aspect-ratio: ${e};
    `}

  /* Animation */
  ${({$animation:e,$animationIndex:t=0})=>e?.enabled&&e.type!=="none"&&o`
      opacity: 0;
      animation-delay: ${t*(e.staggerDelay||50)}ms;
      ${b(e.type,e.duration||300)}
    `}

  & > * {
    width: 100%;
    height: 100%;
  }
`,SkeletonItem=a.div`
  background: linear-gradient(
    90deg,
    ${r.surface||"#f0f0f0"} 25%,
    #e8e8e8 50%,
    ${r.surface||"#f0f0f0"} 75%
  );
  background-size: 200% 100%;
  animation: ${u} 1.5s infinite;
  border-radius: ${({$borderRadius:e})=>e||r.borderRadius100||"8px"};
  min-height: 100px;

  ${({$aspectRatio:e})=>e&&o`
      aspect-ratio: ${e};
    `}
`,EmptyState=a.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${r.spacing400||"2rem"};
  text-align: center;
  color: ${r.onSurface?`${r.onSurface}80`:"#6c757d"};

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: ${r.spacing200||"1rem"};
    opacity: 0.5;
  }
`,ScrollArrow=a.button`
  position: absolute;
  top: 50%;
  ${({$direction:e})=>e==="left"?"left: -16px;":"right: -16px;"}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${r.surface||"#ffffff"};
  border: 1px solid ${r.outline||"#e9ecef"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.onSurface||"#1a1a2e"};
  opacity: ${({$visible:e})=>e?1:0};
  visibility: ${({$visible:e})=>e?"visible":"hidden"};
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: ${r.primary||"#454cbf"};
    color: ${r.white||"#ffffff"};
    border-color: ${r.primary||"#454cbf"};
    transform: translateY(-50%) scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${r.primary||"#454cbf"};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* Hide on mobile */
  ${d.xs} {
    display: none;
  }
`,ScrollDots=a.div`
  display: flex;
  justify-content: center;
  gap: ${r.spacing100||"0.5rem"};
  margin-top: ${r.spacing200||"1rem"};
`,ScrollDot=a.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({$active:e})=>e?r.primary||"#454cbf":r.outline||"#dee2e6"};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background: ${r.primary||"#454cbf"};
    transform: scale(1.2);
  }

  &:focus-visible {
    outline: 2px solid ${r.primary||"#454cbf"};
    outline-offset: 2px;
  }
`,LoadingOverlay=a.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  z-index: 20;
`;
