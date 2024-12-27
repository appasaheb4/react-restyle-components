import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as b}from"./index-DRjF_FHU.js";/* empty css                     */const s=({title:e,defaultValue:o,className:i,disable:d,hasError:n,errorMsg:m,defaultMsg:p,inputStyle:c,autoComplete:f,maxlength:g=40,onChange:l,onBlur:u})=>{const[y,x]=b.useState(o),V=a=>{l(a.target.value)};return t.jsxs("div",{className:`${i} relative`,children:[t.jsx("input",{"data-testid":"inputElement",type:"text",name:"name",value:y,placeholder:" ",disabled:d,className:`pt-3 pb-2 bg-transparent block w-full px-0 mt-0  rounded-none  border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-secondary border-gray-secondary font-arimaRegular ${c}`,onChange:a=>{x(a.target.value),l&&l(a.target.value)},onKeyUp:V,onBlur:a=>u&&u(a.target.value),autoComplete:f,maxLength:g}),t.jsx("label",{className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-dark-secondary font-arimaRegular text-md",children:e}),n&&n?.type!=="required"&&t.jsx("span",{className:"text-sm text-red text-4xs",id:"error",children:`${m||""}`}),(!n||n?.type==="required")&&t.jsx("span",{className:"text-sm text-4xs",id:"error",children:`${p||""}`})]})};try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"any"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string"}},defaultMsg:{defaultValue:null,description:"",name:"defaultMsg",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"on"'}]}},maxlength:{defaultValue:{value:"40"},description:"",name:"maxlength",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((value: any) => void)"}}}}}catch{}const N={title:"Design System/Atoms/Input",component:s,tags:["autodocs"]},r={args:{className:"mt-4",title:"Enter your Pan Number",hasError:!0,defaultValue:"",onChange:e=>{console.log({item:e})},onBlur:e=>{console.log({item:e})}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'mt-4',
    title: 'Enter your Pan Number',
    hasError: true,
    defaultValue: '',
    onChange: item => {
      console.log({
        item
      });
    },
    onBlur: item => {
      console.log({
        item
      });
    }
  }
}`,...r.parameters?.docs?.source}}};const _=["Basic"];export{r as Basic,_ as __namedExportsOrder,N as default};
