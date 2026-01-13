"use strict";import{styled as a,css as n}from"styled-components";import{breakpoints as o,getFontSize as s}from"../../utils/abstracts";import{tokens as e}from"../../utils/designTokens";export const Text=a.span`
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`,CurrentPage=a.span`
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  color: inherit;
  display: inline-flex;
  align-items: center;

  /* Enhanced styling for pills variant */
  ${({$variant:i})=>i==="pills"&&n`
      font-weight: 700;
      letter-spacing: 0.02em;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    `}
`;const r={small:{fontSize:s(0),padding:`${e.spacing050} ${e.spacing100}`,gap:e.spacing050,iconSize:"12px"},medium:{fontSize:s(1),padding:`${e.spacing075} ${e.spacing150}`,gap:e.spacing075,iconSize:"14px"},large:{fontSize:s(2),padding:`${e.spacing100} ${e.spacing200}`,gap:e.spacing100,iconSize:"16px"}};export const Container=a.nav`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${({$size:i})=>r[i].gap};
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Variant: contained */
  ${({$variant:i})=>i==="contained"&&n`
      background: linear-gradient(
        135deg,
        ${e.surface||"#f8f9fa"} 0%,
        #f1f3f5 100%
      );
      border: 1px solid ${e.outline||"#e9ecef"};
      border-radius: ${e.borderRadius100||"8px"};
      padding: ${e.spacing100} ${e.spacing200};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    `}

  /* Variant: pills */
  ${({$variant:i})=>i==="pills"&&n`
      background: transparent;
      gap: ${e.spacing050};
    `}

  /* Responsive: allow wrapping on larger screens */
  ${o.md} {
    flex-wrap: wrap;
  }

  /* Smooth scroll behavior */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`,BreadcrumbList=a.ol`
  all: unset;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${({$size:i})=>r[i].gap};
  list-style: none;
  margin: 0;
  padding: 0;

  ${o.md} {
    flex-wrap: wrap;
  }
`,Item=a.li`
  display: flex;
  align-items: center;
  gap: ${({$size:i})=>r[i].gap};
  position: relative;
  transition: all 0.2s ease;

  /* Base text styles */
  color: ${({$isActive:i})=>i?e.onSurface||"#1a1a2e":e.onSurface?`${e.onSurface}99`:"#6c757d"};
  font-size: ${({$size:i})=>r[i].fontSize};
  font-weight: ${({$isActive:i})=>i?600:400};
  line-height: 1.5;
  white-space: nowrap;

  /* Links and actions styling */
  [data-aui='link'],
  [data-aui='action.inline'],
  a {
    color: ${e.primary||"#454cbf"};
    text-decoration: none;
    transition: all 0.2s ease;
    padding: ${({$size:i})=>i==="small"?`${e.spacing025} ${e.spacing050}`:i==="large"?`${e.spacing075} ${e.spacing100}`:`${e.spacing050} ${e.spacing075}`};
    border-radius: ${e.borderRadius050||"4px"};

    &:hover {
      color: ${e.primary||"#454cbf"};
      background: ${e.primary?`${e.primary}10`:"rgba(69, 76, 191, 0.08)"};
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid ${e.primary||"#454cbf"};
      outline-offset: 2px;
    }
  }

  /* Pills variant styling */
  ${({$variant:i,$isActive:t,$size:p})=>i==="pills"&&n`
      background: ${t?`linear-gradient(135deg, ${e.primary||"#454cbf"} 0%, ${e.primary?e.primary+"dd":"#5a61c9"} 100%)`:e.surface||"#f8f9fa"};
      color: ${t?e.white||"#ffffff":e.onSurface||"#1a1a2e"};
      padding: ${r[p].padding};
      border-radius: ${e.borderRadius200||"16px"};
      border: 1px solid
        ${t?"transparent":e.outline||"#e9ecef"};
      box-shadow: ${t?"0 2px 8px rgba(69, 76, 191, 0.3)":"0 1px 2px rgba(0, 0, 0, 0.05)"};
      transition: all 0.25s ease;

      &:hover:not(:last-child) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      [data-aui='link'],
      [data-aui='action.inline'],
      a {
        color: inherit;
        background: transparent;
        padding: 0;

        &:hover {
          background: transparent;
          text-decoration: none;
        }
      }
    `}

  /* Collapsed item (ellipsis) */
  ${({$isCollapsed:i})=>i&&n`
      cursor: pointer;
      padding: ${e.spacing050} ${e.spacing075};
      border-radius: ${e.borderRadius050||"4px"};
      background: ${e.surface||"#f8f9fa"};
      border: 1px solid ${e.outline||"#e9ecef"};

      &:hover {
        background: ${e.primary?`${e.primary}10`:"rgba(69, 76, 191, 0.08)"};
        border-color: ${e.primary||"#454cbf"};
      }
    `}

  /* Hide on mobile for collapsed items */
  ${({$isCollapsed:i})=>i&&n`
      ${o.xs} {
        display: none;
      }
    `}
`,Separator=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.onSurface?`${e.onSurface}66`:"#adb5bd"};
  flex-shrink: 0;
  transition: color 0.2s ease;

  /* Icon styling */
  [data-aui='icon'] {
    color: inherit;
    width: ${({$size:i})=>r[i].iconSize};
    height: ${({$size:i})=>r[i].iconSize};
  }

  /* Hide separator on last item via CSS */
  ${Item}:last-child & {
    display: none;
  }
`,SeparatorText=a.span`
  font-size: ${({$size:i})=>r[i].fontSize};
  color: inherit;
  user-select: none;
`,OverflowDots=a.span`
  display: none;
  color: ${e.onSurface?`${e.onSurface}80`:"#6c757d"};
  font-weight: 500;
  letter-spacing: 2px;
  padding: ${e.spacing050} ${e.spacing075};
  border-radius: ${e.borderRadius050||"4px"};
  background: ${e.surface||"#f8f9fa"};
  border: 1px solid ${e.outline||"#e9ecef"};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${({$size:i})=>r[i].fontSize};

  &:hover {
    background: ${e.primary?`${e.primary}10`:"rgba(69, 76, 191, 0.08)"};
    border-color: ${e.primary||"#454cbf"};
    color: ${e.primary||"#454cbf"};
  }

  ${o.md} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,HomeIcon=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:i})=>r[i].iconSize};
  height: ${({$size:i})=>r[i].iconSize};
  color: ${e.primary||"#454cbf"};
  transition: all 0.2s ease;

  [data-aui='icon'] {
    color: inherit;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`,IconWrapper=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({$size:i})=>i==="small"?"16px":i==="large"?"24px":"20px"};
  height: ${({$size:i})=>i==="small"?"16px":i==="large"?"24px":"20px"};

  [data-aui='icon'],
  svg {
    width: 100%;
    height: 100%;
  }
`,MobileMenuButton=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e.surface||"#f8f9fa"};
  border: 1px solid ${e.outline||"#e9ecef"};
  border-radius: ${e.borderRadius050||"4px"};
  padding: ${({$size:i})=>i==="small"?e.spacing050:i==="large"?e.spacing100:e.spacing075};
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${e.onSurface||"#1a1a2e"};

  &:hover {
    background: ${e.primary?`${e.primary}10`:"rgba(69, 76, 191, 0.08)"};
    border-color: ${e.primary||"#454cbf"};
  }

  &:focus-visible {
    outline: 2px solid ${e.primary||"#454cbf"};
    outline-offset: 2px;
  }

  /* Only show on mobile */
  ${o.sm} {
    display: none;
  }
`,DropdownMenu=a.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  min-width: 200px;
  background: ${e.surface||"#ffffff"};
  border: 1px solid ${e.outline||"#e9ecef"};
  border-radius: ${e.borderRadius100||"8px"};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: ${e.spacing050};
  opacity: ${({$isOpen:i})=>i?1:0};
  visibility: ${({$isOpen:i})=>i?"visible":"hidden"};
  transform: ${({$isOpen:i})=>i?"translateY(4px)":"translateY(-8px)"};
  transition: all 0.2s ease;
`,DropdownItem=a.a`
  display: flex;
  align-items: center;
  gap: ${e.spacing100};
  padding: ${e.spacing100} ${e.spacing150};
  color: ${e.onSurface||"#1a1a2e"};
  text-decoration: none;
  border-radius: ${e.borderRadius050||"4px"};
  transition: all 0.15s ease;
  font-size: ${s(1)};

  &:hover {
    background: ${e.primary?`${e.primary}10`:"rgba(69, 76, 191, 0.08)"};
    color: ${e.primary||"#454cbf"};
  }

  &:focus-visible {
    outline: 2px solid ${e.primary||"#454cbf"};
    outline-offset: -2px;
  }
`;
