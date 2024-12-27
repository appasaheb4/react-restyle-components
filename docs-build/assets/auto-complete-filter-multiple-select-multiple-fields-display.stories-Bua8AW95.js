import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{I as v}from"./icons.component-DqIut2FN.js";import"./iframe-Czg-4uTC.js";import"../sb-preview/runtime.js";import"./lodash-ud-njmiO.js";import"./tooltip.component-Cq4q6yDP.js";import"./index-BcVaf52u.js";import"./inheritsLoose-D5cG50_G.js";import"./setPrototypeOf-NYsvoNVB.js";const m=({uniqueField:a="_id",isSelectedStringArray:_=!1,loader:B=!1,placeholder:E="Search...",data:n,hasError:j=!1,disable:T=!1,isUpperCase:w=!1,name:V,onFilter:d,onUpdate:f,onSelect:q,onBlur:y})=>{const[p,b]=r.useState(""),[c,F]=r.useState(),[N,A]=r.useState(),[o,g]=r.useState(!1),D=e=>{r.useEffect(()=>{function t(i){e.current&&!e.current.contains(i.target)&&o&&(N&&c&&o&&f&&f(n.selected),g(!1),b(""))}return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[e,o])},h=r.useRef(null);D(h);let S=0;const x=(e,t)=>(S===0&&(t=t?.filter((s,I)=>(s.selected=!1,e&&e.length>0?e.find((C,U)=>{_?C===s[a]&&(s.selected=!0):C[a]===s[a]&&(s.selected=!0)}):s.selected=!1,S++,s))),t);r.useEffect(()=>{A(x(n.selected,n.list)),F(x(n.selected,n.list))},[n,n.selected]);const M=e=>{const t=e.target.value;b(t),d&&d(t)},O=e=>{if((e.which?e.which:e.keyCode)===8){const i=e.target.value;d&&d(i)}};return l.jsx(l.Fragment,{children:l.jsxs("div",{ref:h,className:"w-full relative",children:[l.jsxs("div",{className:`flex items-center leading-4 p-2 focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2 ${j?"border-red":"border-gray-300"} rounded-md`,children:[l.jsx("input",{placeholder:E,disabled:T,name:V,value:o?w?p?.toUpperCase():p:n?.selected?.length>0?`${n.selected&&n.selected.length||0} Items`:p,className:"w-full focus:outline-none bg-none",onKeyUp:O,onChange:M,onClick:()=>g(!0),onBlur:e=>y&&y(e)}),o?l.jsx(v,{nameIcon:"FaChevronUp",propsIcon:{color:"#000000",size:22}}):l.jsx(v,{nameIcon:"FaChevronDown",propsIcon:{color:"#000000",size:22}})]}),c&&o?c?.length>0&&l.jsx("div",{className:"flex mt-1  absolute  rounded-sm z-500 w-full",style:{zIndex:80},children:l.jsx("ul",{className:"flex  flex-col gap-2  bg-gray-200 p-2 w-full",children:c?.map((e,t)=>l.jsx(l.Fragment,{children:l.jsx("li",{className:'flex gap-4 p-2"',children:l.jsxs("label",{className:"flex",children:[l.jsx("input",{id:t?.toString(),className:"flex h-4 w-4",type:"checkbox",checked:e.selected,onChange:()=>q(e)})," ",l.jsx("span",{className:"flex h-4 ml-2",children:n.displayKey.map(i=>`${e[i]}
                              `).join(" - ")})]})},t)}))})}):null]})})};try{m.displayName="AutoCompleteFilterMultipleSelectMultipleFieldsDisplay",m.__docgenInfo={description:"",displayName:"AutoCompleteFilterMultipleSelectMultipleFieldsDisplay",props:{uniqueField:{defaultValue:{value:"_id"},description:"",name:"uniqueField",required:!1,type:{name:"string"}},isSelectedStringArray:{defaultValue:{value:"false"},description:"",name:"isSelectedStringArray",required:!1,type:{name:"boolean"}},loader:{defaultValue:{value:"false"},description:"",name:"loader",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Search..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},disable:{defaultValue:{value:"false"},description:"",name:"disable",required:!1,type:{name:"boolean"}},isUpperCase:{defaultValue:{value:"false"},description:"",name:"isUpperCase",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onFilter:{defaultValue:null,description:"",name:"onFilter",required:!1,type:{name:"((value: string) => void)"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!0,type:{name:"(item: any) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(item: any) => any"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: any) => void)"}}}}}catch{}const Q={title:"Design System/Molecules/AutoCompleteFilterMultipleSelectMultipleFieldsDisplay",component:m,tags:["autodocs"],parameters:{componentSubtitle:"import { AutoCompleteFilterMultipleSelectMultipleFieldsDisplay } from 'react-restyle-components'"}},u={args:{data:{list:[{_id:"66532a99bbfed4eea86eae23",code:82,description:"TEST1",libraryCode:"ABCD"},{_id:"6652b6d8bcef7f713cb547d4",code:81,description:"TEST New",libraryCode:"TEST"}],selected:[{_id:"66532a99bbfed4eea86eae23",code:82,description:"TEST1",libraryCode:"ABCD"}],displayKey:["libraryCode","description"]},onUpdate:a=>{console.log({item:a})},onSelect:a=>{console.log({item:a})}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      list: [{
        _id: '66532a99bbfed4eea86eae23',
        code: 82,
        description: 'TEST1',
        libraryCode: 'ABCD'
      }, {
        _id: '6652b6d8bcef7f713cb547d4',
        code: 81,
        description: 'TEST New',
        libraryCode: 'TEST'
      }],
      selected: [{
        _id: '66532a99bbfed4eea86eae23',
        code: 82,
        description: 'TEST1',
        libraryCode: 'ABCD'
      }],
      displayKey: ['libraryCode', 'description']
    },
    onUpdate: item => {
      console.log({
        item
      });
    },
    onSelect: item => {
      console.log({
        item
      });
    }
  }
}`,...u.parameters?.docs?.source}}};const W=["Basic"];export{u as Basic,W as __namedExportsOrder,Q as default};
