import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{B as n}from"./button.component-BL7vkpFh.js";import{a as o,T as p}from"./tooltip.component-Cq4q6yDP.js";import{ag as l,ah as d,ai as c,aj as m,ak as x}from"./index-C3iK-eis.js";import"./index-CTjT7uj6.js";import"./utility.util-DX3Ki9SV.js";import"./index-BcVaf52u.js";import"./iframe-DN4RC3GK.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./inheritsLoose-D5cG50_G.js";import"./setPrototypeOf-NYsvoNVB.js";import"./isNativeReflectConstruct-gwnEYaHE.js";import"./index-g6dvgpde.js";import"./index-DrFu-skq.js";const X={title:"Design System/Atoms/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx(d,{}),t.jsx(c,{}),t.jsx(m,{}),t.jsx(x,{})]})}},decorators:[s=>t.jsx(p,{children:t.jsx(s,{})})]},e={args:{children:t.jsx("span",{className:"m-10",children:"🪔"}),content:"Happy Diwali ✨"}},i={parameters:{controls:{hideNoControlsWarning:!0,exclude:["content","position"]},docs:{description:{story:"Example shows the same `Tooltip` used for all 4 position."}}},render:s=>t.jsxs("div",{style:{padding:"100px",display:"flex",gap:"12px"},children:[t.jsx(o,{...s,content:"top",side:"top",children:t.jsx("span",{children:"👆"})}),t.jsx(o,{...s,content:"bottom",side:"bottom",children:t.jsx("span",{children:"👇"})}),t.jsx(o,{...s,content:"left",side:"left",children:t.jsx("span",{children:"👈"})}),t.jsx(o,{...s,content:"right",side:"right",children:t.jsx("span",{children:"👉"})})]})},r={parameters:{controls:{hideNoControlsWarning:!0,include:[]},docs:{description:{story:"JSX tooltip for a button."}}},render:()=>t.jsx("div",{style:{padding:"100px",display:"flex",gap:"12px"},children:t.jsx(o,{side:"top",content:t.jsxs(t.Fragment,{children:[t.jsx(n,{variant:"solid",children:"✨✨✨"})," ",t.jsx(n,{variant:"solid",children:"✨✨✨"})]}),children:t.jsx("span",{children:"Fancy Tooltip"})})})},a={parameters:{controls:{hideNoControlsWarning:!0,include:[]},docs:{description:{story:"JSX tooltip for a button with all 3 alignments options and side set to top."}}},render:()=>t.jsxs("div",{style:{padding:"100px",display:"flex",gap:"12px"},children:[t.jsx(o,{side:"top",align:"start",content:t.jsx("span",{children:"Tooltip"}),children:t.jsx(n,{variant:"solid",children:"Align Start"})}),t.jsx(o,{side:"top",align:"center",content:t.jsx("span",{children:"Tooltip"}),children:t.jsx(n,{variant:"solid",children:"Align Center"})}),t.jsx(o,{side:"top",align:"end",content:t.jsx("span",{children:"Tooltip"}),children:t.jsx(n,{variant:"solid",children:"Align End"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span className="m-10">{'🪔'}</span>,
    content: 'Happy Diwali ✨'
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      exclude: ['content', 'position']
    },
    docs: {
      description: {
        story: 'Example shows the same \`Tooltip\` used for all 4 position.'
      }
    }
  },
  render: args => <div style={{
    padding: '100px',
    display: 'flex',
    gap: '12px'
  }}>
      <Tooltip {...args} content="top" side="top">
        <span>👆</span>
      </Tooltip>
      <Tooltip {...args} content="bottom" side="bottom">
        <span>👇</span>
      </Tooltip>
      <Tooltip {...args} content="left" side="left">
        <span>👈</span>
      </Tooltip>
      <Tooltip {...args} content="right" side="right">
        <span>👉</span>
      </Tooltip>
    </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      include: []
    },
    docs: {
      description: {
        story: 'JSX tooltip for a button.'
      }
    }
  },
  render: () => <div style={{
    padding: '100px',
    display: 'flex',
    gap: '12px'
  }}>
      <Tooltip side="top" content={<>
            <Button variant="solid">✨✨✨</Button>{' '}
            <Button variant="solid">✨✨✨</Button>
          </>}>
        <span>Fancy Tooltip</span>
      </Tooltip>
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      include: []
    },
    docs: {
      description: {
        story: 'JSX tooltip for a button with all 3 alignments options and side set to top.'
      }
    }
  },
  render: () => <div style={{
    padding: '100px',
    display: 'flex',
    gap: '12px'
  }}>
      <Tooltip side="top" align="start" content={<span>Tooltip</span>}>
        <Button variant="solid">Align Start</Button>
      </Tooltip>
      <Tooltip side="top" align="center" content={<span>Tooltip</span>}>
        <Button variant="solid">Align Center</Button>
      </Tooltip>
      <Tooltip side="top" align="end" content={<span>Tooltip</span>}>
        <Button variant="solid">Align End</Button>
      </Tooltip>
    </div>
}`,...a.parameters?.docs?.source}}};const w=["Basic","Positions","JSXContent","JSXContentDifferentAlignments"];export{e as Basic,r as JSXContent,a as JSXContentDifferentAlignments,i as Positions,w as __namedExportsOrder,X as default};
