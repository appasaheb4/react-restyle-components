import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as i,af as s}from"./index-B9h2UFpJ.js";import"./index-CTjT7uj6.js";import"./iframe-CNaXZQyW.js";import"../sb-preview/runtime.js";import"./index-BcVaf52u.js";import"./index-D-8MO0q_.js";import"./inheritsLoose-D5cG50_G.js";import"./setPrototypeOf-NYsvoNVB.js";import"./isNativeReflectConstruct-gwnEYaHE.js";import"./index-g6dvgpde.js";import"./index-DrFu-skq.js";function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting started"}),`
`,e.jsx(t.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(t.h2,{id:"using-the-react-restyle-components",children:"Using the react-restyle-components"}),`
`,e.jsxs(t.p,{children:["First you can install standard ",e.jsx(t.a,{href:"https://www.nodejs.tech/ro/download",rel:"nofollow",children:"Node Version"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`npm install react-restyle-components
`})}),`
`,e.jsx(t.h5,{id:"or",children:"OR"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`yarn add react-restyle-components
`})}),`
`,e.jsx(t.p,{children:"You can then import and use components as expected:"}),`
`,e.jsx(s,{language:"tsx",code:`
    // YourComponent.tsx
    import { Button } from 'react-restyle-components';
    ...
    export const YourComponent = ()=>{
      ...
      return(
          <Button
              onClick={() => remove(index)}
              tooltip="Remove condition"
              iconOnly={true}
              className={styles.delete}
              scale="s"
              variant="brand"
              level="secondary"
          >
              Submit
          </Button>
      )
    }
  `}),`
`,e.jsx(t.h3,{id:"styling",children:"Styling"}),`
`,e.jsx(t.p,{children:`It does not import the raw CSS custom properties for colors that all components reference.
You will need to import this file somewhere in your build - a common pactice is to import it into your index css file in React:`}),`
`,e.jsx(t.p,{children:"Option would be to add a link to it in your html document head."}),`
`,e.jsx(t.p,{children:`The UI-libary contains two themes: 'dark' and 'light'. In order to choose between themes, you just need your app to toggle classes on the root html element.
For dark theme the expected value is 'theme--dark' and for light it is 'theme--light'. You can use the helper function 'applyTheme' from the library, or handle this yourself.`}),`
`,e.jsx(t.h2,{id:"contributing-to-the-library",children:"Contributing to the library"}),`
`,e.jsxs(t.p,{children:[`If you want to develop this reach out to any of the contributors to discuss intent and workflow.
To access the code, you can clone `,e.jsx(t.a,{href:"https://github.com/appasaheb4/react-restyle-components",rel:"nofollow",children:"the github repository"}),`.
You can build it locally and use npm link to use it in your own apps without submitting a PR.`]}),`
`,e.jsx(t.h2,{id:"deploying-a-new-build",children:"Deploying a new build"}),`
`,e.jsxs(t.p,{children:["When Pull Requests are merged to ",e.jsx(t.code,{children:"main"})," branch will automatically update the hosted Storybook application."]})]})}function b(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{b as default};
