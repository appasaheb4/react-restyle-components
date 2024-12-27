import{j as n}from"./jsx-dev-runtime-CZZW4CYh.js";import{r as e}from"./index-vZAiTh_1.js";import{I as f}from"./form.component-DgIPvGgI.js";import"./index-B45rDdvl.js";const x=t=>e.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("rect",{x:.5,y:.5,width:14,height:14,rx:1.5,fill:"white",stroke:"#E7503D"})),k=t=>e.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",...t},e.createElement("rect",{width:15,height:15,fill:"#E5E5E5"}),e.createElement("g",{clipPath:"url(#clip0_0_1)"},e.createElement("rect",{width:360,height:640,transform:"translate(-20 -399)",fill:"white"}),e.createElement("rect",{x:.5,y:.5,width:14,height:14,rx:1.5,fill:"white"}),e.createElement("rect",{x:.5,y:.5,width:14,height:14,rx:1.5}),e.createElement("path",{d:"M4 7.33333L6.33333 10L11.6667 5",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_0_1"},e.createElement("rect",{width:360,height:640,fill:"white",transform:"translate(-20 -399)"})))),b=({title:t="Banks",data:i=[{title:"SBI Bank",checked:!1}],className:h,onChange:p})=>{const[a,d]=e.useState(i),c=20;return n.jsxDEV(f,{label:t,children:a?.map((r,l)=>n.jsxDEV("div",{className:`${h} flex flex-row  items-center `,onClick:()=>{const m=a?.map((o,u)=>u===l?{...o,checked:!r.checked}:{...o});d(m),p(m?.filter(o=>o.checked))},children:[n.jsxDEV("div",{className:"flex mt-1",children:r.checked?n.jsxDEV(k,{width:c,height:c,fill:"#E7503D",stroke:"E7503D"},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/check-box/checkBox.component.tsx",lineNumber:42,columnNumber:15},void 0):n.jsxDEV(x,{width:c,height:c},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/check-box/checkBox.component.tsx",lineNumber:49,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/check-box/checkBox.component.tsx",lineNumber:40,columnNumber:11},void 0),n.jsxDEV("span",{children:r?.title},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/check-box/checkBox.component.tsx",lineNumber:53,columnNumber:11},void 0)]},l,!0,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/check-box/checkBox.component.tsx",lineNumber:28,columnNumber:9},void 0))},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/check-box/checkBox.component.tsx",lineNumber:26,columnNumber:5},void 0)},N={title:"Design System/Atoms/CheckBox",component:b,tags:["autodocs"],parameters:{componentSubtitle:"import { CheckBox } from 'react-restyle-components'"}},s={args:{title:"",data:[{title:"SBI Bank",checked:!1},{title:"ICICI Bank",checked:!1}],disable:!1,onChange:t=>{console.log({item:t})}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    data: [{
      title: 'SBI Bank',
      checked: false
    }, {
      title: 'ICICI Bank',
      checked: false
    }],
    disable: false,
    onChange: item => {
      console.log({
        item
      });
    }
  }
}`,...s.parameters?.docs?.source}}};const D=["Basic"];export{s as Basic,D as __namedExportsOrder,N as default};
