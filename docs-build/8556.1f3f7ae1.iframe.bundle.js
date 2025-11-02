"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[8556],{"./src/core-components/src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UU:()=>DefaultsProvider,ES:()=>attachSubComponents,cn:()=>cn,Tj:()=>colors,eV:()=>createTransition,jk:()=>dontForwardProps,On:()=>separateChildrenByType,hG:()=>usePropDeprecation});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const cn=(...inputs)=>(0,bundle_mjs.QP)((0,clsx.A)(inputs));var react=__webpack_require__("./node_modules/react/index.js");const DefaultsContext=(0,react.createContext)({}),DefaultsProvider=({value,children})=>{const currentDefaults=(0,react.useContext)(DefaultsContext);return react.createElement(DefaultsContext.Provider,{value:{...currentDefaults,...value}},children)},colors={primaryBrighter:"#cb5aff",primaryBright:"#a839f3",primaryDeep:"#8223d2",primaryDeeper:"#6700b8",secondaryBrighter:"#6b8bff",secondaryBright:"#4a68f9",secondaryDeep:"#2743cc",secondaryDeeper:"#253baa",brandGreenBrighter:"#6efac3",brandGreenBright:"#00e7a1",brandGreenDeep:"#00b574",brandGreenDeeper:"#0b8350",brandTennis:"#d2fa46",white:"#ffffff",black:"#000000",neutralBrightest:"#f0f0f5",neutralBrighter:"#e6e6eb",neutralBright:"#d5d6da",neutralDeep:"#a5aaaf",neutralDeeper:"#6e767d",neutralDeepest:"#333f48",disabledBackground:"#e6e6eb",disabledText:"#a5aaaf",errorBright:"#ff5070",errorDeep:"#db1b1b",warningBright:"#f9d51c",warningDeep:"#edb800",successBright:"#37e7a7",successDeep:"#00bf63",successDeeper:"#008662",focus:"#0047e1"};colors.primaryDeeper,colors.primaryDeeper,colors.primaryDeeper,colors.primaryDeeper,colors.primaryDeep,colors.primaryBright,colors.primaryDeeper,colors.white,colors.black,colors.neutralDeepest,colors.black,colors.white,colors.white,colors.neutralBrightest,colors.white,colors.black,colors.black,colors.neutralDeepest,colors.black,colors.white,colors.black,colors.neutralDeepest,colors.black,colors.white,colors.white,colors.neutralBrightest,colors.white,colors.black;function attachSubComponents(displayName,topLevelComponent,otherComponents){return Object.values(otherComponents).forEach((component=>component.displayName=`${displayName}.${component.displayName}`)),Object.assign(topLevelComponent,{displayName},otherComponents)}const isComponentType_isComponentType=(element,componentType)=>!!react.isValidElement(element)&&(element.type===componentType||element.type.target===componentType),flattenChildren=children=>react.Children.toArray(children).reduce(((acc,child)=>isComponentType_isComponentType(child,react.Fragment)?acc.concat(...flattenChildren(child.props.children)):acc.concat(child)),[]),separateChildrenByType=(children,...componentTypes)=>flattenChildren(children).reduce(((acc,element)=>{const typeIndex=componentTypes.findIndex((componentType=>isComponentType_isComponentType(element,componentType)));return-1!==typeIndex?acc[typeIndex].push(element):acc[componentTypes.length].push(element),acc}),[...componentTypes.map((()=>[])),[]]);const isReactDevelopment=()=>"_self"in react.createElement("div"),useDeprecation=({name,message,version})=>{isReactDevelopment()&&(0,react.useEffect)((()=>{console.warn(`DEPRECATED: ${name} is deprecated and will be removed in version ${version}. ${message}`)}),[])},usePropDeprecation=({name,value,version,alternative})=>{value&&useDeprecation({name,version,message:alternative?`Please use ${alternative} prop instead.`:"Please remove it carefully."})};"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrappers={Default:styled_components_browser_esm.I4.div`
    display: flex;
    justify-content: flex-start;
    padding: 2rem;
  `,Dashed:styled_components_browser_esm.I4.div`
    margin: auto;
    ${({$width})=>$width&&`width: ${$width};`}
    border: 2px dashed var(--aui-primary);
    border-radius: 8px;
    padding: 8px;
  `,TextInput:styled_components_browser_esm.I4.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
  `,Modal:styled_components_browser_esm.I4.div`
    height: 100%;
    margin: -1rem;
  `,Row:styled_components_browser_esm.I4.div`
    max-width: 100%;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  `,Test:styled_components_browser_esm.I4.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(100%, 600px);
  `},createTransition=(Object.entries(Wrappers).reduce(((acc,[title,Wrapper])=>({...acc,[title]:Story=>react.createElement(Wrapper,null,react.createElement(Story,null))})),{}),({properties,duration="0.2s",timingFunction="ease-in-out"})=>styled_components_browser_esm.AH`
  transition: ${properties.map((property=>`${property} ${duration} ${timingFunction}`)).join(", ")};
`);var emotion_is_prop_valid_esm=__webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");const dontForwardProps=()=>({shouldForwardProp:(propName,target)=>"string"!=typeof target||(0,emotion_is_prop_valid_esm.A)(propName)})}}]);
//# sourceMappingURL=8556.1f3f7ae1.iframe.bundle.js.map