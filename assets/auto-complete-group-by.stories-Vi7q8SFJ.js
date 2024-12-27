import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{I as x}from"./icons.component-DqIut2FN.js";import"./iframe-Czg-4uTC.js";import"../sb-preview/runtime.js";import"./lodash-ud-njmiO.js";import"./tooltip.component-Cq4q6yDP.js";import"./index-BcVaf52u.js";import"./inheritsLoose-D5cG50_G.js";import"./setPrototypeOf-NYsvoNVB.js";const g=a=>{const[i,c]=s.useState(a.displayValue),[m,d]=s.useState(),[u,f]=s.useState(!1),w=t=>{s.useEffect(()=>{function n(e){t.current&&!t.current.contains(e.target)&&u&&(f(!1),c(""))}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t,u])},C=s.useRef(null);w(C),s.useEffect(()=>{c(a.displayValue)},[a.displayValue]),s.useEffect(()=>{d(a.data||[])},[a]);const I=(t,n)=>{const e=new Set;return t.filter(l=>{const r=n(l);return e.has(r)?!1:e.add(r)})},v=(t,n)=>{if(t!==""){let e=[];n.filter(l=>{l.children.filter(r=>{r.title&&r.title.toLowerCase().indexOf(t.toLowerCase())>-1&&(e.filter((h,y)=>{if(h.name===l.name){const j=e[y].children.concat(r);e[y]={...e[y],children:j}}}).length<1&&e.push({...l,children:[r]}),e=I(e,h=>h.name))})}),d(e)}else d(n)},S=t=>{const n=t.target.value;c(n),v(n,a.data)};return o.jsx(o.Fragment,{children:o.jsxs("div",{ref:C,className:"w-full relative",children:[o.jsxs("div",{className:`flex items-center leading-4 p-2 bg-white focus:outline-none focus:ring  w-full shadow-sm sm:text-base border-2  ${a.hasError?"border-red ":"border-gray-300"} rounded-md`,children:[o.jsx("input",{placeholder:"Search...",value:i,className:"w-full focus:outline-none",onChange:S,onClick:()=>f(!0),onKeyDown:t=>{if(t.key==="Enter"){t.preventDefault();let n=null,e=null;for(const l of m){for(const r of l.children)if(r.title.toLowerCase()===i.toLowerCase()||l.title.toLowerCase()===i.toLowerCase()){n=l,e=r;break}if(n)break}a.onChange&&n&&e&&a.onChange(n,e),f(!1),c(i),d([])}}}),u?o.jsx(x,{nameIcon:"FaChevronUp",propsIcon:{color:"#000000",size:22}}):o.jsx(x,{nameIcon:"FaChevronDown",propsIcon:{color:"#000000",size:22}})]}),m&&u?m?.length>0&&o.jsx("div",{className:"flex mt-1 absolute z-50  rounded-md bg-gray-200 w-100 w-full",children:o.jsx("ul",{className:"flex p-2 rounded-sm w-full",children:o.jsx("div",{className:"flex flex-col w-full overflow-scroll",style:{height:"auto",maxHeight:"350px"},children:m?.map((t,n)=>o.jsxs(o.Fragment,{children:[o.jsx("li",{className:"flex text-gray-400",children:t.title},n),o.jsx("ul",{className:"flex flex-col ml-4 w-full",children:t?.children?.map((e,l)=>o.jsx("li",{className:"flex hover:bg-gray-200 focus:outline-none cursor-pointer w-full",onClick:async()=>{a.onChange&&a.onChange(t,e),f(!1),c(e.title),d([])},children:e.title},l))})]}))})})}):null]})})};try{g.displayName="AutocompleteGroupBy",g.__docgenInfo={description:"",displayName:"AutocompleteGroupBy",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: any, children: any) => void)"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const U={title:"Design System/Molecules/AutocompleteGroupBy",component:g,tags:["autodocs"],parameters:{componentSubtitle:"import { AutocompleteGroupBy } from 'react-restyle-components'"}},p={args:{data:[{title:"Country",code:"C",children:[{title:"India",code:"I"},{title:"United States",code:"US"}]},{title:"Social Media",code:"C",children:[{title:"Facebook",code:"F"},{title:"Instagram",code:"I"}]}],hasError:!0,onChange:()=>{},onClose:()=>{}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      title: 'Country',
      code: 'C',
      children: [{
        title: 'India',
        code: 'I'
      }, {
        title: 'United States',
        code: 'US'
      }]
    }, {
      title: 'Social Media',
      code: 'C',
      children: [{
        title: 'Facebook',
        code: 'F'
      }, {
        title: 'Instagram',
        code: 'I'
      }]
    }],
    hasError: true,
    onChange: () => {},
    onClose: () => {}
  }
}`,...p.parameters?.docs?.source}}};const D=["Basic"];export{p as Basic,D as __namedExportsOrder,U as default};
