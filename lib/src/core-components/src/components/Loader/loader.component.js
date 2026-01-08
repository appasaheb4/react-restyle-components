"use strict";import{jsx as d,jsxs as y}from"react/jsx-runtime";import e from"../../tc.module.css";import{cn as n}from"../../utils";const P={sm:{wrapper:n(e["w-4"],e["h-4"]),spinner:n(e["w-4"],e["h-4"]),dots:n(e["w-1"],e["h-1"]),bars:n(e["w-1"],e["h-6"]),pulse:n(e["w-4"],e["h-4"])},md:{wrapper:n(e["w-8"],e["h-8"]),spinner:n(e["w-8"],e["h-8"]),dots:n(e["w-2"],e["h-2"]),bars:n(e["w-1"],e["h-8"]),pulse:n(e["w-8"],e["h-8"])},lg:{wrapper:n(e["w-10"],e["h-10"]),spinner:n(e["w-10"],e["h-10"]),dots:n(e["w-3"],e["h-3"]),bars:n(e["w-2"],e["h-10"]),pulse:n(e["w-10"],e["h-10"])}},b=t=>{const s={blue:"rgb(59 130 246)",green:"rgb(34 197 94)",gray:"rgb(156 163 175)",primary:"rgb(59 130 246)",white:"rgb(255 255 255)",black:"rgb(0 0 0)"};return s[t]?s[t]:t.startsWith("#")||t.startsWith("rgb")||t.startsWith("hsl")||t.startsWith("rgba")||t.startsWith("hsla")||/^[a-z]+$/i.test(t)?t:s.blue},R=t=>{const s=t.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/);if(s)return[parseInt(s[1]),parseInt(s[2]),parseInt(s[3])];if(t.startsWith("#")){const r=t.slice(1);if(r.length===3){const c=parseInt(r[0]+r[0],16),o=parseInt(r[1]+r[1],16),u=parseInt(r[2]+r[2],16);return[c,o,u]}else if(r.length===6){const c=parseInt(r.slice(0,2),16),o=parseInt(r.slice(2,4),16),u=parseInt(r.slice(4,6),16);return[c,o,u]}}if(typeof document<"u")try{const r=document.createElement("div");r.style.color=t,document.body.appendChild(r);const c=window.getComputedStyle(r).color;document.body.removeChild(r);const o=c.match(/\d+/g);if(o&&o.length>=3)return[parseInt(o[0]),parseInt(o[1]),parseInt(o[2])]}catch{}return[255,255,255]},D=(t,s)=>{if(s)return s;if(!t)return"10px";let r;if(t.endsWith("rem"))r=parseFloat(t)*16;else if(t.endsWith("px"))r=parseFloat(t);else if(t.endsWith("em"))r=parseFloat(t)*16;else return"10px";return`${Math.max(2,Math.min(16,Math.round(r*.156)))}px`};export const LoadingAnimateSpin=({classWarper:t="",className:s="",variant:r="spinner",size:c="md",color:o="blue",borderWidth:u,width:x,height:C,textFontSize:I="1.125rem",loadingText:f,classNames:a={},styles:l={},"aria-label":m="Loading"})=>{const h=P[c],W=()=>{const i=b(o),[p,$,j]=R(i),g=`rgba(${p}, ${$}, ${j}, 0.15)`,w=x||"4rem",S=C||"4rem",B=D(w,u);return y("div",{className:n(e.flex,e["flex-col"],e["items-center"],e["justify-center"],s,a.container),style:l.container,"aria-label":m,role:"status",children:[d("div",{className:n(h.spinner,e["rounded-full"],e["animate-spin"],a.spinner),style:{width:w,height:S,borderWidth:B,borderStyle:"solid",borderTopColor:i,borderRightColor:i,borderBottomColor:g,borderLeftColor:g,animation:"spin 1s linear infinite",...l.spinner}}),f&&d("p",{className:n(e["mt-4"],e["text-white"],e["text-lg"],e["font-semibold"],e["animate-pulse"],a.text),style:{marginTop:"1rem",color:i,fontSize:I,fontWeight:600,animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",...l.text},children:f})]})},v=()=>{const i=b(o);return d("div",{className:n(e.flex,e["gap-2"],e["items-center"],s,a.container),style:l.container,"aria-label":m,role:"status",children:[0,1,2].map(p=>d("div",{className:n(h.dots,e["rounded-full"],a.dot),style:{backgroundColor:i,animation:"bounce 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",animationDelay:`${p*.16}s`,animationFillMode:"both",...l.dot}},p))})},k=()=>{const i=b(o);return d("div",{className:n(e.flex,e["gap-1"],e["items-center"],s,a.container),style:l.container,"aria-label":m,role:"status",children:[0,1,2].map(p=>d("div",{className:n(h.bars,e.rounded,a.bar),style:{backgroundColor:i,borderRadius:"0.125rem",animation:"pulse 1.2s ease-in-out infinite",animationDelay:`${p*.15}s`,animationFillMode:"both",...l.bar}},p))})},F=()=>{const i=b(o);return d("div",{className:n(h.pulse,e["rounded-full"],s,a.pulse),style:{backgroundColor:i,animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",animationFillMode:"both",...l.pulse},"aria-label":m,role:"status"})},M=()=>{switch(r){case"dots":return v();case"bars":return k();case"pulse":return F();default:return W()}};return y("div",{className:n(e.flex,e["justify-center"],e["items-center"],t,a.wrapper),style:l.wrapper,children:[d("style",{children:`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.8;
          }
        }
      `}),M()]})};
