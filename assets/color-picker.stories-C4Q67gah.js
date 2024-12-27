import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{r as s}from"./index-DRjF_FHU.js";import{u as p,Z as m}from"./outside.hook-BsTgpT0K.js";const a=({color:e,onChange:c})=>{const t=s.useRef(),[l,n]=s.useState(!1),i=s.useCallback(()=>n(!1),[]);return p(t,i),o.jsxs("div",{className:"picker",children:[o.jsx("div",{className:"swatch",style:{backgroundColor:e},onClick:()=>n(!0)}),l&&o.jsx("div",{className:"popover",ref:t,children:o.jsx(m,{color:e,onChange:c})})]})};try{a.displayName="ColorPicker",a.__docgenInfo={description:"",displayName:"ColorPicker",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"any"}}}}}catch{}const C={title:"Design System/Molecules/ColorPicker",component:a,tags:["autodocs"],parameters:{componentSubtitle:"import { ColorPicker } from 'react-restyle-components'"}},r={args:{color:"#000000",onChange:e=>{console.log({color:e})}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#000000',
    onChange: color => {
      console.log({
        color
      });
    }
  }
}`,...r.parameters?.docs?.source}}};const f=["Basic"];export{r as Basic,f as __namedExportsOrder,C as default};
