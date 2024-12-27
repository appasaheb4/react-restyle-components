import{j as n}from"./jsx-dev-runtime-CZZW4CYh.js";import{r as g}from"./index-vZAiTh_1.js";/* empty css                     */const y=({title:t,defaultValue:m,className:c,disable:u,hasError:o,errorMsg:p,defaultMsg:l,inputStyle:i,autoComplete:d,maxlength:b=40,onChange:r,onBlur:a})=>{const[x,f]=g.useState(m),N=e=>{r(e.target.value)};return n.jsxDEV("div",{className:`${c} relative`,children:[n.jsxDEV("input",{"data-testid":"inputElement",type:"text",name:"name",value:x,placeholder:" ",disabled:u,className:`pt-3 pb-2 bg-transparent block w-full px-0 mt-0  rounded-none  border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-secondary border-gray-secondary font-arimaRegular ${i}`,onChange:e=>{f(e.target.value),r&&r(e.target.value)},onKeyUp:N,onBlur:e=>a&&a(e.target.value),autoComplete:d,maxLength:b},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/input/input.component.tsx",lineNumber:43,columnNumber:7},void 0),n.jsxDEV("label",{className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-dark-secondary font-arimaRegular text-md",children:t},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/input/input.component.tsx",lineNumber:60,columnNumber:7},void 0),o&&o?.type!=="required"&&n.jsxDEV("span",{className:"text-sm text-red text-4xs",id:"error",children:`${p||""}`},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/input/input.component.tsx",lineNumber:64,columnNumber:9},void 0),(!o||o?.type==="required")&&n.jsxDEV("span",{className:"text-sm text-4xs",id:"error",children:`${l||""}`},void 0,!1,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/input/input.component.tsx",lineNumber:69,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/appasaheb4/Documents/project/npm/react-restyle-components/src/core-components/atoms/input/input.component.tsx",lineNumber:42,columnNumber:5},void 0)},h={title:"Design System/Atoms/Input",component:y,tags:["autodocs"]},s={args:{className:"mt-4",title:"Enter your Pan Number",hasError:!0,defaultValue:"",onChange:t=>{console.log({item:t})},onBlur:t=>{console.log({item:t})}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const E=["Basic"];export{s as Basic,E as __namedExportsOrder,h as default};
