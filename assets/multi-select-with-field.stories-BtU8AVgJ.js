import{j as s}from"./jsx-dev-runtime-CZZW4CYh.js";import{r as l}from"./index-vZAiTh_1.js";import{_ as f}from"./lodash-DsGp_hsM.js";const N=({displayField:t="",options:a=[],selectedItems:u=[],hasError:h=!1,onSelect:x})=>{const[n,r]=l.useState([]),[c,p]=l.useState(!1),b=e=>{l.useEffect(()=>{function m(o){e.current&&!e.current.contains(o.target)&&c&&p(!1)}return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[e,c])};l.useEffect(()=>{r(u)},[u]);const d=l.useRef(null);return b(d),s.jsxDEV(s.Fragment,{children:s.jsxDEV("div",{className:`flex dark:bg-boxdark dark:text-white flex-col w-full rounded-md border-2 ${h?"border-red  ":"border-gray-300"}`,ref:d,children:[s.jsxDEV("span",{className:"p-2 mt-1 shadow-sm",onClick:()=>{p(!c)},children:n?.length>0?`${n?.length} Items`:"Select"},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:50,columnNumber:9},void 0),s.jsxDEV("div",{className:`flex mx-2 ${c?"show":"hidden"}`,children:a?a?.length>0&&s.jsxDEV("ul",{className:"flex flex-col gap-1 p-2",children:a?.map((e,m)=>s.jsxDEV("li",{className:"flex items-center",children:[s.jsxDEV("input",{className:"flex bg-black",type:"checkbox",checked:!f.isEmpty(n?.find(o=>o[t]?.toUpperCase()==e[t]?.toUpperCase())),onChange:()=>{f.isEmpty(n?.find(o=>o[t]?.toUpperCase()==e[t]?.toUpperCase()))?n?.length>0?r(n?.concat([e])):r([e]):r(n?.filter(o=>o[t]?.toUpperCase()!=e[t]?.toUpperCase()))},onBlur:()=>{c||x(n)}},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:66,columnNumber:23},void 0)," ",s.jsxDEV("span",{className:"flex ml-2  dark:text-white text-center",children:e[t]},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:111,columnNumber:23},void 0)]},m,!0,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:65,columnNumber:21},void 0))},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:63,columnNumber:17},void 0):null},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:60,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:44,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/molecules/multi-select-with-field/multi-select-with-field.component.tsx",lineNumber:43,columnNumber:5},void 0)},j={title:"Design System/Molecules/MultiSelectWithField",component:N,tags:["autodocs"],parameters:{componentSubtitle:"import { MultiSelectWithField } from 'react-restyle-components'"}},i={args:{displayField:"code",options:[{code:"UPI"},{code:"CARD"},{code:"CASH"}],selectedItems:[{code:"CASH"}],onSelect:t=>{console.log({item:t})}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const E=["Basic"];export{i as Basic,E as __namedExportsOrder,j as default};
