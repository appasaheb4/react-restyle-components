import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as e}from"./index-CTjT7uj6.js";import{I as g}from"./form.component-CGLVFWV-.js";import"./index-CCQ3W5xA.js";const k=t=>e.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("rect",{x:.5,y:.5,width:14,height:14,rx:1.5,fill:"white",stroke:"#E7503D"})),x=t=>e.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",...t},e.createElement("rect",{width:15,height:15,fill:"#E5E5E5"}),e.createElement("g",{clipPath:"url(#clip0_0_1)"},e.createElement("rect",{width:360,height:640,transform:"translate(-20 -399)",fill:"white"}),e.createElement("rect",{x:.5,y:.5,width:14,height:14,rx:1.5,fill:"white"}),e.createElement("rect",{x:.5,y:.5,width:14,height:14,rx:1.5}),e.createElement("path",{d:"M4 7.33333L6.33333 10L11.6667 5",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_0_1"},e.createElement("rect",{width:360,height:640,fill:"white",transform:"translate(-20 -399)"})))),i=({title:t="Banks",data:h=[{title:"SBI Bank",checked:!1}],className:m,onChange:p})=>{const[c,f]=e.useState(h),n=20;return a.jsx(g,{label:t,children:c?.map((s,o)=>a.jsxs("div",{className:`${m} flex flex-row  items-center `,onClick:()=>{const d=c?.map((l,u)=>u===o?{...l,checked:!s.checked}:{...l});f(d),p(d?.filter(l=>l.checked))},children:[a.jsx("div",{className:"flex mt-1",children:s.checked?a.jsx(x,{width:n,height:n,fill:"#E7503D",stroke:"E7503D"}):a.jsx(k,{width:n,height:n})}),a.jsx("span",{children:s?.title})]},o))})};try{i.displayName="CheckBox",i.__docgenInfo={description:"",displayName:"CheckBox",props:{title:{defaultValue:{value:"Banks"},description:"",name:"title",required:!1,type:{name:"string"}},data:{defaultValue:{value:"[{title: 'SBI Bank', checked: false}]"},description:"",name:"data",required:!1,type:{name:"any[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(items: any) => void"}}}}}catch{}const C={title:"Design System/Atoms/CheckBox",component:i,tags:["autodocs"],parameters:{componentSubtitle:"import { CheckBox } from 'react-restyle-components'"}},r={args:{title:"",data:[{title:"SBI Bank",checked:!1},{title:"ICICI Bank",checked:!1}],disable:!1,onChange:t=>{console.log({item:t})}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const _=["Basic"];export{r as Basic,_ as __namedExportsOrder,C as default};
