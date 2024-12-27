import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{r as e}from"./index-DRjF_FHU.js";import{I as g}from"./form.component-KDnulUFn.js";import"./index-lhGYx47h.js";const x=t=>e.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",...t},e.createElement("rect",{width:20,height:20,fill:"#E5E5E5"}),e.createElement("g",{clipPath:"url(#clip0_0_1)"},e.createElement("rect",{width:360,height:2645,transform:"translate(-253 -1410)",fill:"white"}),e.createElement("circle",{cx:10,cy:10,r:9.5,stroke:"#E7503D"}),e.createElement("circle",{cx:10,cy:10,r:6,fill:"#E7503D"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_0_1"},e.createElement("rect",{width:360,height:2645,fill:"white",transform:"translate(-253 -1410)"})))),E=t=>e.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("circle",{cx:10,cy:10,r:9.5,stroke:"#212721"})),c=({title:t="Source",data:m=[],className:h,onChange:p})=>{const[l,u]=e.useState(m),r=20;return a.jsx(a.Fragment,{children:a.jsx(g,{label:t,children:l?.map((i,o)=>a.jsx("div",{className:`${h} flex items-center mb-1`,onClick:()=>{const d=l?.map((n,f)=>f==o?{...n,checked:!0}:{...n,checked:!1});u(d),p(d?.find(n=>n.checked))},children:a.jsxs("div",{className:"flex flex-row gap-1 items-center",children:[i.checked?a.jsx(x,{width:r,height:r}):a.jsx(E,{width:r,height:r}),a.jsx("span",{className:"text-4xs",children:i?.title})]})},o))})})};try{c.displayName="Radio",c.__docgenInfo={description:"",displayName:"Radio",props:{title:{defaultValue:{value:"Source"},description:"",name:"title",required:!1,type:{name:"string"}},data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"any[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: any) => void"}}}}}catch{}const v={title:"Design System/Atoms/Radio",component:c,tags:["autodocs"],parameters:{componentSubtitle:"import { Radio } from 'react-restyle-components'"}},s={args:{title:"",data:[{title:"Salary",checked:!1},{title:"Business",checked:!1}],onChange:t=>{console.log({item:t})}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    data: [{
      title: 'Salary',
      checked: false
    }, {
      title: 'Business',
      checked: false
    }],
    onChange: item => {
      console.log({
        item
      });
    }
  }
}`,...s.parameters?.docs?.source}}};const S=["Basic"];export{s as Basic,S as __namedExportsOrder,v as default};
