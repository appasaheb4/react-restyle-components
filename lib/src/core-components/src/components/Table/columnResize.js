"use strict";import{jsx as N,jsxs as T}from"react/jsx-runtime";import{useRef as b,useState as R,useCallback as l,useEffect as U,useMemo as V}from"react";import{styled as Y,css as B,keyframes as M}from"styled-components";const J=M`
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% { 
    box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.6);
  }
`,K=M`
  from { 
    transform: scaleY(0);
    opacity: 0;
  }
  to { 
    transform: scaleY(1);
    opacity: 1;
  }
`,tt=M`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;export const ResizeHandle=Y.div`
  position: absolute;
  top: 0;
  right: -2px;
  width: ${({$handleWidth:t})=>(t||8)+4}px;
  height: 100%;
  cursor: col-resize;
  background: transparent;
  z-index: 10;
  user-select: none;
  touch-action: none;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Visible handle bar */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    width: 3px;
    height: 60%;
    background: ${({$isResizing:t,$handleColor:h,$handleHoverColor:s})=>t?s||"#3b82f6":h||"rgba(255, 255, 255, 0.25)"};
    border-radius: 2px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleY(${({$isResizing:t})=>t?1:.7});
  }

  /* Hover effect - expand and glow */
  &:hover::after {
    background: ${({$handleHoverColor:t})=>t||"#3b82f6"};
    transform: scaleY(1);
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  }

  /* Active/resizing state */
  ${({$isResizing:t})=>t&&B`
      &::after {
        animation: ${J} 1s ease-in-out infinite;
        transform: scaleY(1.1);
      }

      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: col-resize;
        z-index: 9999;
        background: rgba(59, 130, 246, 0.02);
      }
    `}

  /* Grip dots pattern */
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 12px;
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    );
    background-size: 4px 4px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,ResizeLine=Y.div`
  position: fixed;
  top: 0;
  left: ${({$left:t})=>t}px;
  width: 2px;
  height: 100vh;
  pointer-events: none;
  z-index: 10000;
  opacity: ${({$visible:t})=>t?1:0};
  transition: opacity 0.15s ease, transform 0.1s ease;
  transform: ${({$visible:t})=>t?"scaleX(1)":"scaleX(0)"};
  transform-origin: center;

  /* Gradient line with glow effect */
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({$color:t})=>t||"#3b82f6"} 5%,
    ${({$color:t})=>t||"#3b82f6"} 95%,
    transparent 100%
  );
  box-shadow: 
    0 0 10px ${({$color:t})=>t||"#3b82f6"},
    0 0 20px ${({$color:t})=>(t||"#3b82f6")+"80"},
    0 0 30px ${({$color:t})=>(t||"#3b82f6")+"40"};

  /* Animated shimmer effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${K} 0.3s ease-out;
  }
`;export function useColumnResize({columns:t,config:h={},enabled:s=!0,tableId:g}){const{minWidth:r=50,maxWidth:c=800,autoFit:m=!0,onResize:u,onResizeStart:k,onResizeEnd:W,defaultWidths:f={},handleColor:E,handleHoverColor:F,handleWidth:S=4}=h,w=V(()=>{const i={};return t.forEach(e=>{typeof e.width=="number"?i[e.dataField]=e.width:typeof e.width=="string"&&e.width.endsWith("px")?i[e.dataField]=parseInt(e.width,10):f[e.dataField]&&(i[e.dataField]=f[e.dataField])}),i},[t,f]),[y,x]=R(w),[A,I]=R(!1),[z,D]=R(null),H=b(0),X=b(0),p=b(null),G=b(new Map);U(()=>{x(i=>{const e={...i};return t.forEach(n=>{n.dataField in e||(typeof n.width=="number"?e[n.dataField]=n.width:typeof n.width=="string"&&n.width.endsWith("px")?e[n.dataField]=parseInt(n.width,10):f[n.dataField]&&(e[n.dataField]=f[n.dataField]))}),e})},[t,f]);const v=l(i=>{if(!p.current)return;const e=i.clientX-H.current;let n=X.current+e;const o=t.find($=>$.dataField===p.current),d=typeof o?.minWidth=="number"?o.minWidth:typeof o?.minWidth=="string"&&o.minWidth.endsWith("px")?parseInt(o.minWidth,10):r,a=typeof o?.maxWidth=="number"?o.maxWidth:typeof o?.maxWidth=="string"&&o.maxWidth.endsWith("px")?parseInt(o.maxWidth,10):c;n=Math.max(d,Math.min(a,n)),x($=>({...$,[p.current]:n}))},[t,r,c]),C=l(()=>{if(p.current){const i=y[p.current];W?.(p.current,i),u?.(y)}I(!1),D(null),p.current=null,document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",C),document.body.style.cursor="",document.body.style.userSelect=""},[y,v,u,W]),j=l((i,e,n)=>{if(!s)return;i.preventDefault(),i.stopPropagation();const o=n.current;if(!o)return;const d=o.offsetWidth;H.current=i.clientX,X.current=d,p.current=e,I(!0),D(e),k?.(e,d),document.addEventListener("mousemove",v),document.addEventListener("mouseup",C),document.body.style.cursor="col-resize",document.body.style.userSelect="none"},[s,v,C,k]),L=l((i,e)=>{if(!s||!m)return;i.preventDefault(),i.stopPropagation();const n=document.querySelectorAll(`[data-column="${e}"]`);let o=r;n.forEach(d=>{const a=document.createElement("span");a.style.visibility="hidden",a.style.position="absolute",a.style.whiteSpace="nowrap",a.style.font=window.getComputedStyle(d).font,a.textContent=d.innerText,document.body.appendChild(a),o=Math.max(o,a.offsetWidth+24),document.body.removeChild(a)}),o=Math.min(o,c),x(d=>{const a={...d,[e]:o};return u?.(a),a}),W?.(e,o)},[s,m,r,c,u,W]),P=l((i,e)=>s?(G.current.set(i,e),N(ResizeHandle,{$isResizing:z===i,$handleColor:E,$handleHoverColor:F,$handleWidth:S,onMouseDown:n=>j(n,i,e),onDoubleClick:n=>L(n,i),onClick:n=>n.stopPropagation()})):null,[s,z,E,F,S,j,L]),_=l(()=>{x(w),u?.(w)},[w,u]),q=l((i,e)=>{const n=Math.max(r,Math.min(c,e));x(o=>{const d={...o,[i]:n};return u?.(d),d})},[r,c,u]);return{columnWidths:y,getResizeHandle:P,resetWidths:_,setColumnWidth:q,isResizing:A,resizingColumn:z}}export function getColumnStyle(t,h,s,g){const r={};return s&&h[t.dataField]?(r.width=h[t.dataField],r.minWidth=h[t.dataField],r.maxWidth=h[t.dataField]):(t.width&&(r.width=t.width),t.minWidth&&(r.minWidth=t.minWidth),t.maxWidth&&(r.maxWidth=t.maxWidth)),s&&!g&&(r.transition="width 0.2s cubic-bezier(0.4, 0, 0.2, 1)"),r}export const ResizableHeaderCell=({children:t,dataField:h,resizable:s,getResizeHandle:g,style:r,className:c})=>{const m=b(null);return T("th",{ref:m,style:{...r,position:"relative"},className:c,"data-column":h,children:[t,s&&g(h,m)]})};export default{useColumnResize,getColumnStyle,ResizeHandle,ResizeLine,ResizableHeaderCell};
