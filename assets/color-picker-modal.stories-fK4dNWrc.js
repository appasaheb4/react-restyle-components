import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{Z as u}from"./index-xi8Ovxh5.js";import{u as m}from"./outside.hook-DvIWYdwz.js";const l=({color:o,onChange:c,onClose:a})=>{const n=s.useRef(),[i,t]=s.useState(!1),d=s.useCallback(()=>{t(!1),a&&a()},[]);return m(n,d),e.jsxs("div",{className:"picker-modal",children:[e.jsx("div",{className:"swatch-modal",style:{backgroundColor:o},onClick:()=>t(!0)}),i&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e.jsx("div",{className:"relative w-auto h-auto mx-auto my-auto",children:e.jsx("div",{className:"border-0 rounded-lg  relative flex flex-col w-full outline-none focus:outline-none",children:e.jsx("div",{className:"flex flex-col p-2 w-full ",ref:n,children:e.jsx(u,{color:o,onChange:c})})})})}),e.jsx("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})]})};try{l.displayName="ColorPickerModal",l.__docgenInfo={description:"",displayName:"ColorPickerModal",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(color: string) => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const h={title:"Design System/Molecules/ColorPickerModal",component:l,tags:["autodocs"],parameters:{componentSubtitle:"import { ColorPickerModal } from 'react-restyle-components'"}},r={args:{color:"#000000",onChange:o=>{console.log({color:o})}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#000000',
    onChange: color => {
      console.log({
        color
      });
    }
  }
}`,...r.parameters?.docs?.source}}};const v=["Basic"];export{r as Basic,v as __namedExportsOrder,h as default};
