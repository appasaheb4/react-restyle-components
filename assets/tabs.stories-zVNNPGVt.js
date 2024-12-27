import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as p,R as m}from"./index-DRjF_FHU.js";import{c as i,s as e}from"./utility.util-DX3Ki9SV.js";const d=({title:t,children:o})=>r.jsx("div",{className:i(e.flex),children:o},t),l=({options:t,children:o})=>{const[a,u]=p.useState(0),[b,x]=p.useState(t[0].title),y=m.Children.toArray(o).filter(s=>m.isValidElement(s)&&s.type===d);return r.jsx(r.Fragment,{children:r.jsxs("div",{className:i(e.flex,e["flex-col"],e["w-full"]),children:[r.jsx("div",{className:i(e.flex,e["border-b"]),children:t?.map((s,n)=>r.jsx("button",{type:"button",className:i(e["py-2"],e["px-4"],e["mr-1"],e["border-none"],e["rounded-t-md"],e["shadow-inner"],e["cursor-pointer"],a===n&&e["bg-blue-500"],a===n&&e["border-none"],a===n&&e["text-white"]),onClick:()=>{x(s?.title),!s.inActive&&u(n)},disabled:s.inActive,children:s.title},n))}),r.jsx("div",{className:i(e["p-2"],e.border,e["border-solid"],e["border-slate-600"],e["rounded-b-md"]),children:t[a]?.content?t[a]?.content:y[t?.findIndex(s=>s.title===b)]})]})})};try{d.displayName="Tab",d.__docgenInfo={description:"",displayName:"Tab",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; content?: Element | undefined; inActive?: boolean | undefined; }[]"}}}}}catch{}const g={title:"Design System/Atoms/Tabs",component:l,tags:["autodocs"],decorators:[t=>r.jsx(r.Fragment,{children:r.jsx(t,{})})]},c={args:{options:[{title:"Work History"},{title:"Book Order"},{title:"Make Frame",content:r.jsx("div",{children:"Make Frame"})}]},render:function(o){return r.jsxs(l,{...o,children:[r.jsx(d,{title:"Work History",children:r.jsx("span",{children:"Work History"})}),r.jsx(d,{title:"Book Order",children:r.jsx("span",{children:"Book Order"})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      title: 'Work History'
    }, {
      title: 'Book Order'
    }, {
      title: 'Make Frame',
      content: <div>Make Frame</div>
    }]
  },
  render: function Render(args) {
    return <Tabs {...args}>
        <Tab title="Work History">
          <span>Work History</span>
        </Tab>
        <Tab title="Book Order">
          <span>Book Order</span>
        </Tab>
      </Tabs>;
  }
}`,...c.parameters?.docs?.source}}};const h=["Basic"];export{c as Basic,h as __namedExportsOrder,g as default};
