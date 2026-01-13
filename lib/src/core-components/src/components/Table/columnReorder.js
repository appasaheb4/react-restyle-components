"use strict";import{jsx as z}from"react/jsx-runtime";import{useRef as R,useState as f,useCallback as l,useEffect as N,useMemo as Z}from"react";import{styled as G,css as u,keyframes as v}from"styled-components";const ut=v`
  0%, 100% { transform: translateX(0) rotate(0deg); }
  10% { transform: translateX(-2px) rotate(-0.5deg); }
  20% { transform: translateX(2px) rotate(0.5deg); }
  30% { transform: translateX(-2px) rotate(-0.5deg); }
  40% { transform: translateX(2px) rotate(0.5deg); }
  50% { transform: translateX(-1px) rotate(-0.3deg); }
  60% { transform: translateX(1px) rotate(0.3deg); }
  70% { transform: translateX(-1px) rotate(-0.2deg); }
  80% { transform: translateX(1px) rotate(0.2deg); }
  90% { transform: translateX(0) rotate(0deg); }
`,tt=v`
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.7;
    transform: scale(0.98);
  }
`,et=v`
  0%, 100% { transform: translate(-50%, -50%) scale(1.05) rotate(-1deg); }
  50% { transform: translate(-50%, -50%) scale(1.08) rotate(1deg); }
`,rt=v`
  0%, 100% { 
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
                0 0 0 0 rgba(59, 130, 246, 0);
  }
  50% { 
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4),
                0 0 20px 4px rgba(59, 130, 246, 0.3);
  }
`,ot=v`
  0%, 100% { 
    opacity: 1;
    transform: scaleY(1);
  }
  50% { 
    opacity: 0.8;
    transform: scaleY(1.02);
  }
`,nt=v`
  from { 
    transform: translateY(-10px) scaleY(0.5);
    opacity: 0;
  }
  to { 
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;export const DragGhost=G.div`
  position: fixed;
  top: ${({$y:t})=>t}px;
  left: ${({$x:t})=>t}px;
  z-index: 10000;
  pointer-events: none;
  opacity: ${({$visible:t,$opacity:s})=>t?s:0};
  transform: translate(-50%, -50%) scale(${({$visible:t})=>t?1.05:.8});
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Glass morphism effect */
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.95) 0%,
    rgba(37, 99, 235, 0.9) 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* Floating animation when visible */
  ${({$visible:t})=>t&&u`
      animation: ${et} 2s ease-in-out infinite, ${rt} 1.5s ease-in-out infinite;
    `}

  /* Icon with animation */
  &::before {
    content: '⋮⋮';
    margin-right: 10px;
    font-size: 14px;
    opacity: 0.8;
    letter-spacing: 1px;
  }

  /* Subtle gradient overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
  }
`,DropIndicator=G.div`
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 4px;
  z-index: 100;
  opacity: ${({$visible:t})=>t?1:0};
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  ${({$position:t})=>t==="left"?u`left: -2px;`:u`right: -2px;`}

  /* Gradient background with glow */
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({$color:t})=>t} 10%,
    ${({$color:t})=>t} 90%,
    transparent 100%
  );
  border-radius: 2px;
  box-shadow: 
    0 0 8px ${({$color:t})=>t},
    0 0 16px ${({$color:t})=>t}80;

  /* Pulsing animation when visible */
  ${({$visible:t})=>t&&u`
      animation: ${ot} 0.8s ease-in-out infinite, ${nt} 0.2s ease-out;
    `}
  
  /* Top arrow */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${({$color:t})=>t};
    filter: drop-shadow(0 -2px 4px ${({$color:t})=>t}80);
  }
  
  /* Bottom arrow */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({$color:t})=>t};
    filter: drop-shadow(0 2px 4px ${({$color:t})=>t}80);
  }
`,DraggableHeader=G.div`
  position: relative;
  cursor: ${({$isDisabled:t})=>t?"default":"grab"};
  user-select: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Dragging state - semi-transparent with scale */
  ${({$isDragging:t})=>t&&u`
      opacity: 0.35;
      transform: scale(0.95);
      cursor: grabbing;
      filter: grayscale(50%);
      
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 5px,
          rgba(59, 130, 246, 0.1) 5px,
          rgba(59, 130, 246, 0.1) 10px
        );
        border-radius: 4px;
        pointer-events: none;
      }
    `}
  
  /* Drag over state - highlight target */
  ${({$isDragOver:t,$animated:s})=>t&&u`
      background: rgba(59, 130, 246, 0.15);
      transform: scale(1.02);
      box-shadow: inset 0 0 0 2px rgba(59, 130, 246, 0.4);
      border-radius: 4px;
      
      ${s&&u`
          animation: ${tt} 0.6s ease-in-out infinite;
        `}
    `}
  
  /* Disabled state */
  ${({$isDisabled:t})=>t&&u`
      cursor: not-allowed;
      opacity: 0.6;
      
      &::before {
        content: '🔒';
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 10px;
        opacity: 0.5;
      }
    `}
  
  &:active {
    cursor: ${({$isDisabled:t})=>t?"not-allowed":"grabbing"};
  }

  /* Hover state for grabbable columns */
  &:hover {
    ${({$isDisabled:t,$isDragging:s})=>!t&&!s&&u`
        background: rgba(255, 255, 255, 0.1);
      `}
  }
`;export function useColumnReorder({columns:t,config:s={},enabled:i=!0}){const{longPressDelay:p=200,onReorder:m,onDragStart:w,onDragEnd:D,disabledColumns:d=[],ghostOpacity:O=.8,dropIndicatorColor:at="#3b82f6",animated:st=!0}=s,[y,C]=f(t),[F,S]=f(!1),[g,H]=f(null),[$,j]=f(null),[x,k]=f(null),[X,L]=f({x:0,y:0}),[P,Q]=f(""),n=R(null),T=R({x:0,y:0}),b=R(!1);N(()=>{C(t)},[t]),N(()=>()=>{n.current&&clearTimeout(n.current)},[]);const E=l((e,r,a,o)=>{d.includes(e.dataField)||(b.current=!0,S(!0),H(e.dataField),j(r),L({x:a,y:o}),Q(e.headerText||e.text),w?.(e,r),document.addEventListener("mousemove",I),document.addEventListener("mouseup",q),document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",B),document.body.style.cursor="grabbing",document.body.style.userSelect="none")},[d,w]),I=l(e=>{b.current&&(L({x:e.clientX,y:e.clientY}),A(e.clientX,e.clientY))},[]),M=l(e=>{if(!b.current)return;e.preventDefault();const r=e.touches[0];L({x:r.clientX,y:r.clientY}),A(r.clientX,r.clientY)},[]),A=l((e,r)=>{const o=document.elementsFromPoint(e,r).find(c=>c.getAttribute("data-draggable")==="true");if(o){const c=o.getAttribute("data-column");c&&c!==g&&k(c)}else k(null)},[g]),Y=l(()=>{if(!b.current)return;if(b.current=!1,g&&x&&$!==null){const r=$,a=y.findIndex(o=>o.dataField===x);if(r!==a&&a!==-1){const o=[...y],[c]=o.splice(r,1);o.splice(a,0,c),C(o),m?.(o,r,a)}}const e=y.find(r=>r.dataField===g);e&&$!==null&&D?.(e,$),S(!1),H(null),j(null),k(null),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",q),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",B),document.body.style.cursor="",document.body.style.userSelect=""},[g,x,$,y,m,D,I,M]),q=l(()=>{n.current&&(clearTimeout(n.current),n.current=null),Y()},[Y]),B=l(()=>{n.current&&(clearTimeout(n.current),n.current=null),Y()},[Y]),U=l((e,r,a)=>{if(!i||d.includes(r.dataField))return;e.preventDefault(),T.current={x:e.clientX,y:e.clientY},n.current=setTimeout(()=>{E(r,a,e.clientX,e.clientY)},p);const o=h=>{const J=h.clientX-T.current.x,K=h.clientY-T.current.y;Math.sqrt(J*J+K*K)>10&&(n.current&&(clearTimeout(n.current),n.current=null),document.removeEventListener("mousemove",o))};document.addEventListener("mousemove",o);const c=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",c),n.current&&!b.current&&(clearTimeout(n.current),n.current=null)};document.addEventListener("mouseup",c)},[i,d,p,E]),_=l((e,r,a)=>{if(!i||d.includes(r.dataField))return;const o=e.touches[0];T.current={x:o.clientX,y:o.clientY},n.current=setTimeout(()=>{E(r,a,o.clientX,o.clientY)},p)},[i,d,p,E]),V=l((e,r)=>{const a=d.includes(e.dataField),o=g===e.dataField,c=x===e.dataField;return{onMouseDown:h=>U(h,e,r),onTouchStart:h=>_(h,e,r),"data-draggable":i&&!a,"data-dragging":o,"data-drag-over":c,style:{cursor:i&&!a?"grab":"default",opacity:o?.4:1,transition:"opacity 0.2s ease"}}},[i,d,g,x,U,_]),W=l(()=>{C(t)},[t]),it=Z(()=>z(DragGhost,{$visible:F,$x:X.x,$y:X.y,$opacity:O,children:P}),[F,X,O,P]);return{orderedColumns:y,getDragHandleProps:V,isDragging:F,draggedColumn:g,dragOverColumn:x,ghostPosition:X,ghostText:P,resetOrder:W}}export const ColumnReorderGhost=({visible:t,x:s,y:i,text:p,opacity:m=.8})=>z(DragGhost,{$visible:t,$x:s,$y:i,$opacity:m,children:p}),ColumnDropIndicator=({visible:t,position:s,color:i="#3b82f6"})=>z(DropIndicator,{$visible:t,$position:s,$color:i});export function getReorderableHeaderProps(t,s,i,p,m,w){const D=i(t,s),d=p&&w===t.dataField&&m!==t.dataField;return{wrapperProps:D,showDropIndicator:d,dropPosition:"left"}}export default{useColumnReorder,DragGhost,DropIndicator,DraggableHeader,ColumnReorderGhost,ColumnDropIndicator,getReorderableHeaderProps};
