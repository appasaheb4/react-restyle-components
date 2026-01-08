"use strict";import{styled as t,css as r}from"styled-components";import{Icon as s}from"../../Icon/Icon";import{StateLayer as n}from"../../../core-components";import{tokens as e}from"../../../utils/designTokens";const d=t.hr`
  border: none;
  border-top: 1px solid;
  margin: 0;
  width: 100%;
`;export const AccordionElement=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  gap: ${e.spacing050};
  ${({$variant:i})=>i==="inline"&&r`
      border: 1px solid ${e.outline};
      border-radius: ${e.borderRadius100};
      padding: ${e.spacing100};
      background: ${e.surface||"#ffffff"};
    `};
  overflow: hidden;
  width: 100%;
  color: ${e.onSurface};
`,AccordionSectionWrapper=t.div`
  overflow: hidden;
  width: 100%;
  isolation: isolate;
  transition: all 0.3s ease;

  ${({$variant:i,$isOpen:o})=>i==="inline"&&r`
      border-radius: ${e.borderRadius100};
      margin-bottom: ${o?e.spacing100:"0"};
      box-shadow: ${o?"0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)":"none"};

      &:last-child ${AccordionDivider} {
        display: none;
      }
    `};
`,ButtonElement=t.button`
  all: unset;
  box-sizing: border-box;

  z-index: 1;
  position: relative;
  cursor: pointer;
  width: 100%;

  background: ${({$isOpen:i})=>i?`linear-gradient(135deg, ${e.darkGray||"#4a4a4a"} 0%, #3a3a3a 100%)`:e.darkGray||"#4a4a4a"} !important;
  color: ${e.white||"#ffffff"} !important;

  display: flex;
  gap: ${e.spacing100};
  align-items: center;
  padding: ${e.spacing200} ${e.spacing200};

  transition: all 0.25s ease;

  ${({$variant:i,$isOpen:o})=>i==="inline"&&r`
      border-radius: ${o?`${e.borderRadius100} ${e.borderRadius100} 0 0`:e.borderRadius100};
    `}

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #555555 0%, #3f3f3f 100%) !important;

    ${n} {
      opacity: ${e.stateLayerHover};
    }
  }

  &:active:not(:disabled) ${n} {
    opacity: ${e.stateLayerPress};
  }

  &:focus-visible {
    outline: 2px solid ${e.primary||"#454cbf"};
    outline-offset: 2px;
  }
`,AccordionSectionText=t.div`
  line-height: 1.4;
  flex-grow: 1;
  padding-right: ${e.spacing100};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${e.spacing050};
  color: ${e.white};

  /* Better text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`,AccordionFade=t.div`
  z-index: 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    transparent,
    ${e.surface||"#ffffff"}
  );
  width: 100%;
  height: ${e.spacing200};
  margin-top: calc(${e.spacing200} * -1);
  opacity: ${({$isOpen:i})=>i?1:0};
  transition: opacity ${({$transitionDuration:i})=>i} ease;
  pointer-events: none;
`;const c=(i,o)=>i!=="ease-in"&&i!=="ease-out"?i:o?"ease-out":"ease-in";export const AccordionSectionContentWrapper=t.div`
  z-index: -1;
  position: relative;
  display: grid;
  grid-template-rows: ${({$isOpen:i})=>i?"1fr":"0fr"};
  transition: ${({$transitionDuration:i,$transitionTimingFunction:o,$isOpen:a})=>`grid-template-rows ${i} ${c(o,a)}`};
  background: ${({$isOpen:i})=>i?"linear-gradient(180deg, rgba(74, 74, 74, 0.05) 0%, transparent 100%)":"transparent"};
  border-left: ${({$isOpen:i})=>i?`3px solid ${e.primary||"#454cbf"}`:"3px solid transparent"};
  margin-left: ${({$isOpen:i})=>i?e.spacing100:"0"};
  transition: all 0.3s ease;
`,AccordionSectionContent=t.div`
  overflow-y: hidden;
  transition: ${({$transitionDuration:i})=>`opacity ${i} linear, transform ${i} ease`};
  line-height: 1.6;
  opacity: ${({$isOpen:i})=>i?1:0};
  transform: ${({$isOpen:i})=>i?"translateY(0)":"translateY(-8px)"};
  padding-top: ${({$isOpen:i})=>i?e.spacing150:"0"};
  padding-right: ${e.spacing200};
  padding-left: ${({$hasLeader:i})=>i?e.spacing600:e.spacing200};
`,StyledLeadingTrailing=t.div`
  flex-shrink: 0;
  min-width: ${e.spacing300};
  display: flex;
  align-self: ${({alignment:i})=>i==="center"?"center":"flex-start"};
  position: relative;
  z-index: 1;

  img,
  picture {
    object-fit: contain;
  }
`,AccordionDivider=t(d)`
  border-color: ${e.outline};
  opacity: 0.5;
  margin: ${e.spacing025} 0;
`,RotatingIcon=t(s.SSR)`
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({$rotateIcon:i})=>`rotate(${i?-180:0}deg)`};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
