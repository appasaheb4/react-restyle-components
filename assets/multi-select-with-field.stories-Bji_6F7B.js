import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{_ as h}from"./lodash-BuEDxp7s.js";const p=({displayField:e="",options:d=[],selectedItems:u=[],hasError:x=!1,onSelect:g})=>{const[n,o]=l.useState([]),[a,m]=l.useState(!1),S=t=>{l.useEffect(()=>{function c(r){t.current&&!t.current.contains(r.target)&&a&&m(!1)}return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[t,a])};l.useEffect(()=>{o(u)},[u]);const f=l.useRef(null);return S(f),s.jsx(s.Fragment,{children:s.jsxs("div",{className:`flex dark:bg-boxdark dark:text-white flex-col w-full rounded-md border-2 ${x?"border-red  ":"border-gray-300"}`,ref:f,children:[s.jsx("span",{className:"p-2 mt-1 shadow-sm",onClick:()=>{m(!a)},children:n?.length>0?`${n?.length} Items`:"Select"}),s.jsx("div",{className:`flex mx-2 ${a?"show":"hidden"}`,children:d?d?.length>0&&s.jsx("ul",{className:"flex flex-col gap-1 p-2",children:d?.map((t,c)=>s.jsxs("li",{className:"flex items-center",children:[s.jsx("input",{className:"flex bg-black",type:"checkbox",checked:!h.isEmpty(n?.find(r=>r[e]?.toUpperCase()==t[e]?.toUpperCase())),onChange:()=>{h.isEmpty(n?.find(r=>r[e]?.toUpperCase()==t[e]?.toUpperCase()))?n?.length>0?o(n?.concat([t])):o([t]):o(n?.filter(r=>r[e]?.toUpperCase()!=t[e]?.toUpperCase()))},onBlur:()=>{a||g(n)}})," ",s.jsx("span",{className:"flex ml-2  dark:text-white text-center",children:t[e]})]},c))}):null})]})})};try{p.displayName="MultiSelectWithField",p.__docgenInfo={description:"",displayName:"MultiSelectWithField",props:{displayField:{defaultValue:{value:""},description:"",name:"displayField",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"any[]"}},selectedItems:{defaultValue:{value:"[]"},description:"",name:"selectedItems",required:!1,type:{name:"any[]"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(item: any) => any"}}}}}catch{}const _={title:"Design System/Molecules/MultiSelectWithField",component:p,tags:["autodocs"],parameters:{componentSubtitle:"import { MultiSelectWithField } from 'react-restyle-components'"}},i={args:{displayField:"code",options:[{code:"UPI"},{code:"CARD"},{code:"CASH"}],selectedItems:[{code:"CASH"}],onSelect:e=>{console.log({item:e})}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    displayField: 'code',
    options: [{
      code: 'UPI'
    }, {
      code: 'CARD'
    }, {
      code: 'CASH'
    }],
    selectedItems: [{
      code: 'CASH'
    }],
    onSelect: item => {
      console.log({
        item
      });
    }
  }
}`,...i.parameters?.docs?.source}}};const b=["Basic"];export{i as Basic,b as __namedExportsOrder,_ as default};
