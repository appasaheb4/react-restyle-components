"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[8463],{"./src/core-components/src/components/TreeSelect/TreeSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TreeSelect});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),designTokens=__webpack_require__("./src/core-components/src/utils/designTokens.ts");const fadeIn=styled_components_browser_esm.i7`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,rotate=styled_components_browser_esm.i7`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,sizeConfig={small:{height:28,fontSize:12,padding:"4px 8px",tagHeight:20,iconSize:14},medium:{height:36,fontSize:14,padding:"6px 12px",tagHeight:24,iconSize:16},large:{height:44,fontSize:16,padding:"8px 16px",tagHeight:28,iconSize:18}},variantStyles={outlined:styled_components_browser_esm.AH`
    background: white;
    border: 1px solid ${designTokens.L.outline||"#d1d5db"};
    
    &:hover:not([data-disabled="true"]) {
      border-color: ${designTokens.L.primary||"#3b82f6"};
    }
    
    &:focus-within {
      border-color: ${designTokens.L.primary||"#3b82f6"};
      box-shadow: 0 0 0 2px ${designTokens.L.primary?`${designTokens.L.primary}20`:"rgba(59, 130, 246, 0.15)"};
    }
  `,borderless:styled_components_browser_esm.AH`
    background: transparent;
    border: 1px solid transparent;
    
    &:hover:not([data-disabled="true"]) {
      background: ${designTokens.L.surface||"#f9fafb"};
    }
  `,filled:styled_components_browser_esm.AH`
    background: ${designTokens.L.surface||"#f3f4f6"};
    border: 1px solid transparent;
    
    &:hover:not([data-disabled="true"]) {
      background: #e5e7eb;
    }
    
    &:focus-within {
      background: white;
      border-color: ${designTokens.L.primary||"#3b82f6"};
      box-shadow: 0 0 0 2px ${designTokens.L.primary?`${designTokens.L.primary}20`:"rgba(59, 130, 246, 0.15)"};
    }
  `,underlined:styled_components_browser_esm.AH`
    background: transparent;
    border: none;
    border-bottom: 1px solid ${designTokens.L.outline||"#d1d5db"};
    border-radius: 0;
    
    &:hover:not([data-disabled="true"]) {
      border-bottom-color: ${designTokens.L.primary||"#3b82f6"};
    }
    
    &:focus-within {
      border-bottom-color: ${designTokens.L.primary||"#3b82f6"};
      border-bottom-width: 2px;
    }
  `},statusStyles={error:styled_components_browser_esm.AH`
    border-color: ${designTokens.L.error||"#ef4444"} !important;
    
    &:focus-within {
      box-shadow: 0 0 0 2px ${designTokens.L.error?`${designTokens.L.error}20`:"rgba(239, 68, 68, 0.15)"};
    }
  `,warning:styled_components_browser_esm.AH`
    border-color: ${designTokens.L.warning||"#f59e0b"} !important;
    
    &:focus-within {
      box-shadow: 0 0 0 2px ${designTokens.L.warning?`${designTokens.L.warning}20`:"rgba(245, 158, 11, 0.15)"};
    }
  `},TreeSelectRoot=styled_components_browser_esm.I4.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  font-family: inherit;
  
  &[data-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`,Selector=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  flex-wrap: ${({$multiple})=>$multiple?"wrap":"nowrap"};
  gap: 4px;
  width: 100%;
  min-height: ${({$size})=>sizeConfig[$size].height}px;
  padding: ${({$size})=>sizeConfig[$size].padding};
  font-size: ${({$size})=>sizeConfig[$size].fontSize}px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
  
  ${({$variant})=>variantStyles[$variant]}
  ${({$status})=>$status&&statusStyles[$status]}
`,Prefix=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};
  margin-right: 8px;
  flex-shrink: 0;
  
  svg {
    width: ${({$size})=>sizeConfig[$size].iconSize}px;
    height: ${({$size})=>sizeConfig[$size].iconSize}px;
  }
`,SearchInput=styled_components_browser_esm.I4.input`
  flex: 1;
  min-width: 60px;
  border: none;
  background: transparent;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  color: ${designTokens.L.onSurface||"#1f2937"};
  
  &::placeholder {
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}50`:"#9ca3af"};
  }
`,Placeholder=styled_components_browser_esm.I4.span`
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}50`:"#9ca3af"};
  user-select: none;
`,SelectedValue=styled_components_browser_esm.I4.span`
  color: ${designTokens.L.onSurface||"#1f2937"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Tag=styled_components_browser_esm.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: ${({$size})=>sizeConfig[$size].tagHeight}px;
  padding: 0 8px;
  background: ${designTokens.L.surface||"#f3f4f6"};
  border-radius: 4px;
  font-size: ${({$size})=>sizeConfig[$size].fontSize-2}px;
  color: ${designTokens.L.onSurface||"#374151"};
  max-width: 100%;
  
  ${({$disabled})=>$disabled&&styled_components_browser_esm.AH`
      opacity: 0.6;
    `}
`,TagLabel=styled_components_browser_esm.I4.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,TagClose=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};
  border-radius: 50%;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${designTokens.L.outline||"#d1d5db"};
    color: ${designTokens.L.onSurface||"#1f2937"};
  }
  
  svg {
    width: 10px;
    height: 10px;
  }
`,MaxTagPlaceholder=styled_components_browser_esm.I4.span`
  display: inline-flex;
  align-items: center;
  height: ${({$size})=>sizeConfig[$size].tagHeight}px;
  padding: 0 8px;
  background: ${designTokens.L.surface||"#f3f4f6"};
  border-radius: 4px;
  font-size: ${({$size})=>sizeConfig[$size].fontSize-2}px;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}80`:"#6b7280"};
`,Suffix=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  padding-left: 8px;
  flex-shrink: 0;
  
  svg {
    width: ${({$size})=>sizeConfig[$size].iconSize}px;
    height: ${({$size})=>sizeConfig[$size].iconSize}px;
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};
    transition: transform 0.2s ease;
  }
`,ArrowIcon=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${({$open})=>$open?"rotate(180deg)":"rotate(0deg)"};
  
  svg {
    width: 16px;
    height: 16px;
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};
  }
`,ClearButton=styled_components_browser_esm.I4.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}50`:"#9ca3af"};
  border-radius: 50%;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${designTokens.L.outline||"#e5e7eb"};
    color: ${designTokens.L.onSurface||"#1f2937"};
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`,Dropdown=styled_components_browser_esm.I4.div`
  position: absolute;
  ${({$placement})=>$placement.startsWith("top")?styled_components_browser_esm.AH`
        bottom: 100%;
        margin-bottom: 4px;
      `:styled_components_browser_esm.AH`
      top: 100%;
      margin-top: 4px;
    `}
  ${({$placement})=>$placement.endsWith("Right")?styled_components_browser_esm.AH`right: 0;`:styled_components_browser_esm.AH`left: 0;`}
  ${({$matchWidth})=>!0===$matchWidth?styled_components_browser_esm.AH`width: 100%;`:"number"==typeof $matchWidth?styled_components_browser_esm.AH`min-width: ${$matchWidth}px;`:styled_components_browser_esm.AH`min-width: 200px;`}
  max-height: ${({$maxHeight})=>$maxHeight}px;
  overflow: auto;
  background: white;
  border: 1px solid ${designTokens.L.outline||"#e5e7eb"};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  z-index: 1050;
  animation: ${fadeIn} 0.15s ease;
`,TreeContainer=styled_components_browser_esm.I4.div`
  padding: 4px;
  
  ${({$showLine})=>$showLine&&styled_components_browser_esm.AH`
      --tree-line-color: ${designTokens.L.outline||"#e5e7eb"};
    `}
`,TreeNode=styled_components_browser_esm.I4.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px 8px;
  padding-left: ${({$level})=>8+20*$level}px;
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};
  border-radius: 4px;
  transition: background 0.15s ease;
  
  ${({$disabled})=>$disabled&&styled_components_browser_esm.AH`
      opacity: 0.5;
    `}
  
  ${({$selected})=>$selected&&styled_components_browser_esm.AH`
      background: ${designTokens.L.primary?`${designTokens.L.primary}10`:"#eff6ff"};
      color: ${designTokens.L.primary||"#3b82f6"};
    `}
  
  &:hover:not([data-disabled="true"]) {
    background: ${({$selected})=>$selected?designTokens.L.primary?`${designTokens.L.primary}15`:"#dbeafe":designTokens.L.surface||"#f9fafb"};
  }
  
  /* Tree lines */
  ${({$showLine,$level,$isLeaf})=>$showLine&&$level>0&&styled_components_browser_esm.AH`
      &::before {
        content: '';
        position: absolute;
        left: ${8+20*($level-1)+8}px;
        top: 0;
        bottom: 50%;
        width: 1px;
        background: var(--tree-line-color);
      }
      
      &::after {
        content: '';
        position: absolute;
        left: ${8+20*($level-1)+8}px;
        top: 50%;
        width: 12px;
        height: 1px;
        background: var(--tree-line-color);
      }
    `}
`,ExpandIcon=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  flex-shrink: 0;
  
  svg {
    width: 12px;
    height: 12px;
    color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};
    transition: transform 0.2s ease;
    transform: ${({$expanded})=>$expanded?"rotate(90deg)":"rotate(0deg)"};
    
    ${({$loading})=>$loading&&styled_components_browser_esm.AH`
        animation: ${rotate} 0.8s linear infinite;
      `}
  }
`,LeafIndent=styled_components_browser_esm.I4.span`
  width: 20px;
  margin-right: 4px;
  flex-shrink: 0;
`,Checkbox=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1.5px solid ${designTokens.L.outline||"#d1d5db"};
  border-radius: 3px;
  flex-shrink: 0;
  transition: all 0.15s ease;
  
  ${({$checked})=>$checked&&styled_components_browser_esm.AH`
      background: ${designTokens.L.primary||"#3b82f6"};
      border-color: ${designTokens.L.primary||"#3b82f6"};
    `}
  
  ${({$indeterminate})=>$indeterminate&&styled_components_browser_esm.AH`
      background: ${designTokens.L.primary||"#3b82f6"};
      border-color: ${designTokens.L.primary||"#3b82f6"};
    `}
  
  ${({$disabled})=>$disabled&&styled_components_browser_esm.AH`
      background: ${designTokens.L.surface||"#f3f4f6"};
      cursor: not-allowed;
    `}
  
  svg {
    width: 12px;
    height: 12px;
    color: white;
  }
`,NodeIcon=styled_components_browser_esm.I4.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}60`:"#6b7280"};
  
  svg {
    width: 14px;
    height: 14px;
  }
`,NodeTitle=styled_components_browser_esm.I4.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: ${({$disabled})=>$disabled?designTokens.L.onSurface?`${designTokens.L.onSurface}50`:"#9ca3af":designTokens.L.onSurface||"#1f2937"};
`,EmptyState=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}50`:"#9ca3af"};
  font-size: 14px;
`,LoadingIndicator=styled_components_browser_esm.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${designTokens.L.primary||"#3b82f6"};
    animation: ${rotate} 0.8s linear infinite;
  }
`;try{TreeSelectRoot.displayName="TreeSelectRoot",TreeSelectRoot.__docgenInfo={description:"",displayName:"TreeSelectRoot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#TreeSelectRoot"]={docgenInfo:TreeSelectRoot.__docgenInfo,name:"TreeSelectRoot",path:"src/core-components/src/components/TreeSelect/elements.tsx#TreeSelectRoot"})}catch(__react_docgen_typescript_loader_error){}try{Selector.displayName="Selector",Selector.__docgenInfo={description:"",displayName:"Selector",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Selector"]={docgenInfo:Selector.__docgenInfo,name:"Selector",path:"src/core-components/src/components/TreeSelect/elements.tsx#Selector"})}catch(__react_docgen_typescript_loader_error){}try{Prefix.displayName="Prefix",Prefix.__docgenInfo={description:"",displayName:"Prefix",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Prefix"]={docgenInfo:Prefix.__docgenInfo,name:"Prefix",path:"src/core-components/src/components/TreeSelect/elements.tsx#Prefix"})}catch(__react_docgen_typescript_loader_error){}try{SearchInput.displayName="SearchInput",SearchInput.__docgenInfo={description:"",displayName:"SearchInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#SearchInput"]={docgenInfo:SearchInput.__docgenInfo,name:"SearchInput",path:"src/core-components/src/components/TreeSelect/elements.tsx#SearchInput"})}catch(__react_docgen_typescript_loader_error){}try{Placeholder.displayName="Placeholder",Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Placeholder"]={docgenInfo:Placeholder.__docgenInfo,name:"Placeholder",path:"src/core-components/src/components/TreeSelect/elements.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}try{SelectedValue.displayName="SelectedValue",SelectedValue.__docgenInfo={description:"",displayName:"SelectedValue",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#SelectedValue"]={docgenInfo:SelectedValue.__docgenInfo,name:"SelectedValue",path:"src/core-components/src/components/TreeSelect/elements.tsx#SelectedValue"})}catch(__react_docgen_typescript_loader_error){}try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/core-components/src/components/TreeSelect/elements.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}try{TagLabel.displayName="TagLabel",TagLabel.__docgenInfo={description:"",displayName:"TagLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#TagLabel"]={docgenInfo:TagLabel.__docgenInfo,name:"TagLabel",path:"src/core-components/src/components/TreeSelect/elements.tsx#TagLabel"})}catch(__react_docgen_typescript_loader_error){}try{TagClose.displayName="TagClose",TagClose.__docgenInfo={description:"",displayName:"TagClose",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#TagClose"]={docgenInfo:TagClose.__docgenInfo,name:"TagClose",path:"src/core-components/src/components/TreeSelect/elements.tsx#TagClose"})}catch(__react_docgen_typescript_loader_error){}try{MaxTagPlaceholder.displayName="MaxTagPlaceholder",MaxTagPlaceholder.__docgenInfo={description:"",displayName:"MaxTagPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#MaxTagPlaceholder"]={docgenInfo:MaxTagPlaceholder.__docgenInfo,name:"MaxTagPlaceholder",path:"src/core-components/src/components/TreeSelect/elements.tsx#MaxTagPlaceholder"})}catch(__react_docgen_typescript_loader_error){}try{Suffix.displayName="Suffix",Suffix.__docgenInfo={description:"",displayName:"Suffix",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Suffix"]={docgenInfo:Suffix.__docgenInfo,name:"Suffix",path:"src/core-components/src/components/TreeSelect/elements.tsx#Suffix"})}catch(__react_docgen_typescript_loader_error){}try{ArrowIcon.displayName="ArrowIcon",ArrowIcon.__docgenInfo={description:"",displayName:"ArrowIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#ArrowIcon"]={docgenInfo:ArrowIcon.__docgenInfo,name:"ArrowIcon",path:"src/core-components/src/components/TreeSelect/elements.tsx#ArrowIcon"})}catch(__react_docgen_typescript_loader_error){}try{ClearButton.displayName="ClearButton",ClearButton.__docgenInfo={description:"",displayName:"ClearButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#ClearButton"]={docgenInfo:ClearButton.__docgenInfo,name:"ClearButton",path:"src/core-components/src/components/TreeSelect/elements.tsx#ClearButton"})}catch(__react_docgen_typescript_loader_error){}try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/core-components/src/components/TreeSelect/elements.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}try{TreeContainer.displayName="TreeContainer",TreeContainer.__docgenInfo={description:"",displayName:"TreeContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#TreeContainer"]={docgenInfo:TreeContainer.__docgenInfo,name:"TreeContainer",path:"src/core-components/src/components/TreeSelect/elements.tsx#TreeContainer"})}catch(__react_docgen_typescript_loader_error){}try{TreeNode.displayName="TreeNode",TreeNode.__docgenInfo={description:"",displayName:"TreeNode",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#TreeNode"]={docgenInfo:TreeNode.__docgenInfo,name:"TreeNode",path:"src/core-components/src/components/TreeSelect/elements.tsx#TreeNode"})}catch(__react_docgen_typescript_loader_error){}try{ExpandIcon.displayName="ExpandIcon",ExpandIcon.__docgenInfo={description:"",displayName:"ExpandIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#ExpandIcon"]={docgenInfo:ExpandIcon.__docgenInfo,name:"ExpandIcon",path:"src/core-components/src/components/TreeSelect/elements.tsx#ExpandIcon"})}catch(__react_docgen_typescript_loader_error){}try{LeafIndent.displayName="LeafIndent",LeafIndent.__docgenInfo={description:"",displayName:"LeafIndent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#LeafIndent"]={docgenInfo:LeafIndent.__docgenInfo,name:"LeafIndent",path:"src/core-components/src/components/TreeSelect/elements.tsx#LeafIndent"})}catch(__react_docgen_typescript_loader_error){}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/core-components/src/components/TreeSelect/elements.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}try{NodeIcon.displayName="NodeIcon",NodeIcon.__docgenInfo={description:"",displayName:"NodeIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#NodeIcon"]={docgenInfo:NodeIcon.__docgenInfo,name:"NodeIcon",path:"src/core-components/src/components/TreeSelect/elements.tsx#NodeIcon"})}catch(__react_docgen_typescript_loader_error){}try{NodeTitle.displayName="NodeTitle",NodeTitle.__docgenInfo={description:"",displayName:"NodeTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#NodeTitle"]={docgenInfo:NodeTitle.__docgenInfo,name:"NodeTitle",path:"src/core-components/src/components/TreeSelect/elements.tsx#NodeTitle"})}catch(__react_docgen_typescript_loader_error){}try{EmptyState.displayName="EmptyState",EmptyState.__docgenInfo={description:"",displayName:"EmptyState",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#EmptyState"]={docgenInfo:EmptyState.__docgenInfo,name:"EmptyState",path:"src/core-components/src/components/TreeSelect/elements.tsx#EmptyState"})}catch(__react_docgen_typescript_loader_error){}try{LoadingIndicator.displayName="LoadingIndicator",LoadingIndicator.__docgenInfo={description:"",displayName:"LoadingIndicator",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/elements.tsx#LoadingIndicator"]={docgenInfo:LoadingIndicator.__docgenInfo,name:"LoadingIndicator",path:"src/core-components/src/components/TreeSelect/elements.tsx#LoadingIndicator"})}catch(__react_docgen_typescript_loader_error){}var hooks=__webpack_require__("./src/core-components/src/components/TreeSelect/hooks.ts");const ChevronDownIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})),ChevronRightIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M9 6l6 6-6 6",strokeLinecap:"round",strokeLinejoin:"round"})),CloseIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})),CheckIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3"},react.createElement("path",{d:"M5 12l5 5L20 7",strokeLinecap:"round",strokeLinejoin:"round"})),MinusIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3"},react.createElement("path",{d:"M5 12h14",strokeLinecap:"round"})),LoadingIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},react.createElement("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.25"}),react.createElement("path",{d:"M12 2a10 10 0 0 1 10 10",strokeLinecap:"round"})),FolderIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"})),FileIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"}),react.createElement("path",{d:"M14 2v6h6",fill:"none",stroke:"currentColor",strokeWidth:"1"})),TreeSelect=(0,react.forwardRef)((function TreeSelectComponent(props,ref){const{treeData,value,defaultValue,mode="single",placeholder="Please select",disabled=!1,showSearch=!1,filterTreeNode,treeNodeFilterProp="title",treeLine=!1,showTreeIcon=!1,checkable=!1,checkStrictly=!1,defaultExpandedKeys,expandedKeys:controlledExpandedKeys,defaultExpandAll=!1,loadData,allowClear=!1,autoClearSearchValue=!0,maxTagCount,maxTagPlaceholder,placement="bottomLeft",open:controlledOpen,defaultOpen=!1,variant="outlined",size="medium",prefix,suffixIcon,clearIcon,listHeight=256,popupMatchSelectWidth=!0,classNames={},styles={},className,style,status,fieldNames,dropdownRender,tabIndex=0,autoFocus=!1,onChange,onSelect,onSearch,onDropdownVisibleChange,onTreeExpand,onPopupScroll,onFocus,onBlur,onClear,...rest}=props,rootRef=(0,react.useRef)(null),inputRef=(0,react.useRef)(null),[internalOpen,setInternalOpen]=(0,react.useState)(defaultOpen),[searchValue,setSearchValue]=(0,react.useState)(""),[focused,setFocused]=(0,react.useState)(!1),isOpen=void 0!==controlledOpen?controlledOpen:internalOpen,isMultiple="multiple"===mode||"checkable"===mode,isCheckable="checkable"===mode||checkable,[selectedValues,setSelectedValues]=(0,react.useState)((()=>void 0!==value?Array.isArray(value)?value:value?[value]:[]:void 0!==defaultValue?Array.isArray(defaultValue)?defaultValue:defaultValue?[defaultValue]:[]:[]));(0,react.useEffect)((()=>{void 0!==value&&setSelectedValues(Array.isArray(value)?value:value?[value]:[])}),[value]);const{expandedKeys,toggleExpand,setExpanded}=(0,hooks.Ms)(treeData,defaultExpandedKeys,defaultExpandAll,controlledExpandedKeys,fieldNames),{checkedKeys,halfCheckedKeys,toggleCheck}=(0,hooks.UY)(treeData,isCheckable?selectedValues:void 0,checkStrictly,fieldNames),{isLoading,setLoading,markLoaded}=(0,hooks.U9)(),filteredData=(0,react.useMemo)((()=>searchValue?(0,hooks.hV)(treeData,searchValue,filterTreeNode,treeNodeFilterProp,fieldNames):treeData),[treeData,searchValue,filterTreeNode,treeNodeFilterProp,fieldNames]),selectedLabels=(0,react.useMemo)((()=>selectedValues.map((val=>{const node=(0,hooks.uu)(treeData,val,fieldNames);return node?(0,hooks.GR)(node,"label",fieldNames):val}))),[selectedValues,treeData,fieldNames]),toggleOpen=(0,react.useCallback)((newOpen=>{disabled||(void 0===controlledOpen&&setInternalOpen(newOpen),onDropdownVisibleChange?.(newOpen))}),[disabled,controlledOpen,onDropdownVisibleChange]);(0,react.useEffect)((()=>{const handleClickOutside=e=>{rootRef.current&&!rootRef.current.contains(e.target)&&toggleOpen(!1)};if(isOpen)return document.addEventListener("mousedown",handleClickOutside),()=>document.removeEventListener("mousedown",handleClickOutside)}),[isOpen,toggleOpen]);const handleSelectorClick=(0,react.useCallback)((()=>{disabled||(toggleOpen(!isOpen),showSearch&&inputRef.current?.focus())}),[disabled,isOpen,showSearch,toggleOpen]),handleSearchChange=(0,react.useCallback)((e=>{const val=e.target.value;setSearchValue(val),onSearch?.(val)}),[onSearch]),handleNodeSelect=(0,react.useCallback)((node=>{const nodeValue=(0,hooks.GR)(node,"value",fieldNames),nodeLabel=(0,hooks.GR)(node,"label",fieldNames);if(!node.disabled){if(isCheckable){toggleCheck(nodeValue,node);const newChecked=checkedKeys.has(nodeValue)?Array.from(checkedKeys).filter((v=>v!==nodeValue)):[...Array.from(checkedKeys),nodeValue];if(!checkStrictly){const descendants=(0,hooks.EI)(node,fieldNames),isChecking=!checkedKeys.has(nodeValue);descendants.forEach((d=>{if(isChecking)newChecked.includes(d)||newChecked.push(d);else{const idx=newChecked.indexOf(d);idx>-1&&newChecked.splice(idx,1)}}))}setSelectedValues(newChecked),onChange?.(newChecked,newChecked.map((v=>{const n=(0,hooks.uu)(treeData,v,fieldNames);return n?(0,hooks.GR)(n,"label",fieldNames):v})),{triggerValue:nodeValue,triggerNode:node})}else if(isMultiple){const isSelected=selectedValues.includes(nodeValue),newValues=isSelected?selectedValues.filter((v=>v!==nodeValue)):[...selectedValues,nodeValue];setSelectedValues(newValues),onSelect?.(nodeValue,node,{selected:!isSelected}),onChange?.(newValues,newValues.map((v=>{const n=(0,hooks.uu)(treeData,v,fieldNames);return n?(0,hooks.GR)(n,"label",fieldNames):v})),{preValue:selectedValues,triggerValue:nodeValue,triggerNode:node})}else setSelectedValues([nodeValue]),onSelect?.(nodeValue,node,{selected:!0}),onChange?.(nodeValue,nodeLabel,{preValue:selectedValues[0],triggerValue:nodeValue,triggerNode:node}),toggleOpen(!1);autoClearSearchValue&&setSearchValue("")}}),[isCheckable,isMultiple,selectedValues,checkedKeys,checkStrictly,fieldNames,treeData,toggleCheck,autoClearSearchValue,onChange,onSelect,toggleOpen]),handleExpandToggle=(0,react.useCallback)((async(e,node)=>{e.stopPropagation();const nodeValue=(0,hooks.GR)(node,"value",fieldNames),children=(0,hooks.GR)(node,"children",fieldNames);if(loadData&&!node.isLeaf&&(!children||0===children.length)&&!isLoading(nodeValue)){setLoading(nodeValue,!0);try{await loadData(node),markLoaded(nodeValue)}catch(err){console.error("Failed to load data:",err)}setLoading(nodeValue,!1)}toggleExpand(nodeValue);const newExpanded=expandedKeys.has(nodeValue)?Array.from(expandedKeys).filter((k=>k!==nodeValue)):[...Array.from(expandedKeys),nodeValue];onTreeExpand?.(newExpanded)}),[fieldNames,loadData,isLoading,setLoading,markLoaded,toggleExpand,expandedKeys,onTreeExpand]),handleTagRemove=(0,react.useCallback)(((e,val)=>{e.stopPropagation();const newValues=selectedValues.filter((v=>v!==val));setSelectedValues(newValues),onChange?.(newValues,newValues.map((v=>{const n=(0,hooks.uu)(treeData,v,fieldNames);return n?(0,hooks.GR)(n,"label",fieldNames):v})),{triggerValue:val})}),[selectedValues,treeData,fieldNames,onChange]),handleClear=(0,react.useCallback)((e=>{e.stopPropagation(),setSelectedValues([]),setSearchValue(""),onChange?.(isMultiple?[]:"",isMultiple?[]:"",{}),onClear?.()}),[isMultiple,onChange,onClear]),handleFocus=(0,react.useCallback)((e=>{setFocused(!0),onFocus?.(e)}),[onFocus]),handleBlur=(0,react.useCallback)((e=>{setFocused(!1),onBlur?.(e)}),[onBlur]),handleKeyDown=(0,react.useCallback)((e=>{switch(e.key){case"Enter":case" ":isOpen||toggleOpen(!0);break;case"Escape":toggleOpen(!1);break;case"Backspace":if(!searchValue&&isMultiple&&selectedValues.length>0){const newValues=selectedValues.slice(0,-1);setSelectedValues(newValues),onChange?.(newValues,newValues.map((v=>{const n=(0,hooks.uu)(treeData,v,fieldNames);return n?(0,hooks.GR)(n,"label",fieldNames):v})),{})}}}),[isOpen,searchValue,isMultiple,selectedValues,treeData,fieldNames,onChange,toggleOpen]);(0,react.useEffect)((()=>{autoFocus&&inputRef.current&&inputRef.current.focus()}),[autoFocus]);const renderTreeNode=(node,level=0)=>{const nodeValue=(0,hooks.GR)(node,"value",fieldNames),nodeLabel=(0,hooks.GR)(node,"label",fieldNames),children=(0,hooks.GR)(node,"children",fieldNames),hasChildren=children&&children.length>0,isExpanded=expandedKeys.has(nodeValue),isSelected=selectedValues.includes(nodeValue),isChecked=checkedKeys.has(nodeValue),isHalfChecked=halfCheckedKeys.has(nodeValue),loading=isLoading(nodeValue),isLeaf=node.isLeaf||!hasChildren&&!loadData,showLine=!!treeLine;return react.createElement(react.Fragment,{key:node.key||nodeValue},react.createElement(TreeNode,{$level:level,$isLeaf:isLeaf,$disabled:!!node.disabled,$selected:isSelected&&!isCheckable,$checked:isChecked,$indeterminate:isHalfChecked,$showLine:showLine,"data-disabled":node.disabled,className:classNames.node,style:styles.node,onClick:()=>handleNodeSelect(node),role:"treeitem","aria-selected":isSelected,"aria-expanded":hasChildren?isExpanded:void 0,"aria-disabled":node.disabled},isLeaf?react.createElement(LeafIndent,null):react.createElement(ExpandIcon,{$expanded:isExpanded,$loading:loading,onClick:e=>handleExpandToggle(e,node)},loading?react.createElement(LoadingIcon,null):react.createElement(ChevronRightIcon,null)),isCheckable&&!1!==node.checkable&&react.createElement(Checkbox,{$checked:isChecked,$indeterminate:isHalfChecked&&!isChecked,$disabled:!!node.disableCheckbox||!!node.disabled,className:classNames.nodeCheckbox,style:styles.nodeCheckbox,role:"checkbox","aria-checked":isHalfChecked?"mixed":isChecked},isChecked&&react.createElement(CheckIcon,null),isHalfChecked&&!isChecked&&react.createElement(MinusIcon,null)),showTreeIcon&&react.createElement(NodeIcon,null,node.icon||(isLeaf?react.createElement(FileIcon,null):react.createElement(FolderIcon,null))),react.createElement(NodeTitle,{$disabled:!!node.disabled,className:classNames.nodeTitle,style:styles.nodeTitle},nodeLabel)),hasChildren&&isExpanded&&react.createElement(react.Fragment,null,children.map((child=>renderTreeNode(child,level+1)))))},hasValue=selectedValues.length>0;return react.createElement(TreeSelectRoot,{ref:node=>{rootRef.current=node,"function"==typeof ref?ref(node):ref&&(ref.current=node)},$size:size,$variant:variant,$status:status,$disabled:disabled,$focused:focused,"data-disabled":disabled,className:className||classNames.root,style:{...styles.root,...style},onKeyDown:handleKeyDown,tabIndex:disabled?-1:tabIndex,role:"combobox","aria-expanded":isOpen,"aria-haspopup":"tree","aria-disabled":disabled,"aria-label":rest["aria-label"],"aria-labelledby":rest["aria-labelledby"]},react.createElement(Selector,{$size:size,$variant:variant,$status:status,$multiple:isMultiple,$hasValue:hasValue,className:classNames.selector,style:styles.selector,onClick:handleSelectorClick,onFocus:handleFocus,onBlur:handleBlur},prefix&&react.createElement(Prefix,{$size:size,className:classNames.prefix,style:styles.prefix},prefix),(()=>{if(!isMultiple)return null;let visibleValues=selectedValues,hiddenCount=0;return void 0!==maxTagCount&&"responsive"!==maxTagCount&&(visibleValues=selectedValues.slice(0,maxTagCount),hiddenCount=selectedValues.length-maxTagCount),react.createElement(react.Fragment,null,visibleValues.map(((val,idx)=>{const label=selectedLabels[selectedValues.indexOf(val)],node=(0,hooks.uu)(treeData,val,fieldNames);return react.createElement(Tag,{key:val,$size:size,$disabled:node?.disabled,className:classNames.tag,style:styles.tag},react.createElement(TagLabel,null,label),!disabled&&!node?.disabled&&react.createElement(TagClose,{onClick:e=>handleTagRemove(e,val)},react.createElement(CloseIcon,null)))})),hiddenCount>0&&react.createElement(MaxTagPlaceholder,{$size:size},"function"==typeof maxTagPlaceholder?maxTagPlaceholder(selectedValues.slice(maxTagCount)):maxTagPlaceholder||`+${hiddenCount}`))})(),showSearch?react.createElement(SearchInput,{ref:inputRef,$size:size,value:searchValue,onChange:handleSearchChange,placeholder:hasValue&&!isMultiple?"":placeholder,disabled,className:classNames.search,style:styles.search,"aria-label":"Search"}):isMultiple&&hasValue?null:hasValue&&!isMultiple?react.createElement(SelectedValue,null,selectedLabels[0]):react.createElement(Placeholder,{className:classNames.placeholder,style:styles.placeholder},placeholder),react.createElement(Suffix,{$size:size,$open:isOpen,className:classNames.suffix,style:styles.suffix},allowClear&&hasValue&&!disabled&&react.createElement(ClearButton,{onClick:handleClear,"aria-label":"Clear"},clearIcon||react.createElement(CloseIcon,null)),react.createElement(ArrowIcon,{$open:isOpen},suffixIcon||react.createElement(ChevronDownIcon,null)))),isOpen&&react.createElement(Dropdown,{$placement:placement,$maxHeight:listHeight,$matchWidth:popupMatchSelectWidth,className:classNames.popup,style:styles.popup,role:"listbox"},(()=>{const content=react.createElement(TreeContainer,{$showLine:!!treeLine,className:classNames.tree,style:styles.tree,role:"tree",onScroll:onPopupScroll},0===filteredData.length?react.createElement(EmptyState,null,"No data"):filteredData.map((node=>renderTreeNode(node))));return dropdownRender?dropdownRender(content):content})()))}));TreeSelect.displayName="TreeSelect";try{TreeSelect.displayName="TreeSelect",TreeSelect.__docgenInfo={description:"",displayName:"TreeSelect",props:{treeData:{defaultValue:null,description:"Tree data",name:"treeData",required:!0,type:{name:"TreeSelectNode[]"}},value:{defaultValue:null,description:"Current selected value(s)",name:"value",required:!1,type:{name:"string | string[]"}},defaultValue:{defaultValue:null,description:"Default selected value(s)",name:"defaultValue",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Selection mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'},{value:'"checkable"'}]}},placeholder:{defaultValue:null,description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether component is disabled",name:"disabled",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:null,description:"Whether to show search input",name:"showSearch",required:!1,type:{name:"boolean"}},filterTreeNode:{defaultValue:null,description:"Custom filter function",name:"filterTreeNode",required:!1,type:{name:"((inputValue: string, node: TreeSelectNode) => boolean)"}},treeNodeFilterProp:{defaultValue:null,description:"Property to use for filtering",name:"treeNodeFilterProp",required:!1,type:{name:"string"}},treeLine:{defaultValue:null,description:"Whether to show tree lines",name:"treeLine",required:!1,type:{name:"boolean | { showLeafIcon?: ReactNode; }"}},showTreeIcon:{defaultValue:null,description:"Whether to show tree icons",name:"showTreeIcon",required:!1,type:{name:"boolean"}},checkable:{defaultValue:null,description:"Whether to show checkboxes",name:"checkable",required:!1,type:{name:"boolean"}},checkStrictly:{defaultValue:null,description:"Check strictly (parent-child not associated)",name:"checkStrictly",required:!1,type:{name:"boolean"}},defaultExpandedKeys:{defaultValue:null,description:"Default expanded keys",name:"defaultExpandedKeys",required:!1,type:{name:"string[]"}},expandedKeys:{defaultValue:null,description:"Expanded keys (controlled)",name:"expandedKeys",required:!1,type:{name:"string[]"}},defaultExpandAll:{defaultValue:null,description:"Default expand all",name:"defaultExpandAll",required:!1,type:{name:"boolean"}},loadData:{defaultValue:null,description:"Async load data",name:"loadData",required:!1,type:{name:"TreeSelectLoadData"}},allowClear:{defaultValue:null,description:"Allow clear button",name:"allowClear",required:!1,type:{name:"boolean"}},autoClearSearchValue:{defaultValue:null,description:"Auto clear search on select",name:"autoClearSearchValue",required:!1,type:{name:"boolean"}},maxTagCount:{defaultValue:null,description:"Max tag count in multiple mode",name:"maxTagCount",required:!1,type:{name:'number | "responsive"'}},maxTagPlaceholder:{defaultValue:null,description:"Max tag placeholder",name:"maxTagPlaceholder",required:!1,type:{name:"ReactNode | ((omittedValues: string[]) => ReactNode)"}},placement:{defaultValue:null,description:"Dropdown placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},open:{defaultValue:null,description:"Dropdown open state (controlled)",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Default dropdown open state",name:"defaultOpen",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Component variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"borderless"'},{value:'"underlined"'}]}},size:{defaultValue:null,description:"Component size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},prefix:{defaultValue:null,description:"Prefix icon/element",name:"prefix",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"Suffix icon (replaces default arrow)",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},clearIcon:{defaultValue:null,description:"Clear icon",name:"clearIcon",required:!1,type:{name:"ReactNode"}},listHeight:{defaultValue:null,description:"Dropdown max height",name:"listHeight",required:!1,type:{name:"number"}},popupMatchSelectWidth:{defaultValue:null,description:"Whether popup matches selector width",name:"popupMatchSelectWidth",required:!1,type:{name:"number | boolean"}},getPopupContainer:{defaultValue:null,description:"Popup container",name:"getPopupContainer",required:!1,type:{name:"((triggerNode: HTMLElement) => HTMLElement)"}},classNames:{defaultValue:null,description:"Custom classNames",name:"classNames",required:!1,type:{name:"TreeSelectClassNames"}},styles:{defaultValue:null,description:"Custom styles",name:"styles",required:!1,type:{name:"TreeSelectStyles"}},className:{defaultValue:null,description:"Additional root className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional root style",name:"style",required:!1,type:{name:"CSSProperties"}},status:{defaultValue:null,description:"Status",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'}]}},fieldNames:{defaultValue:null,description:"Field name mapping",name:"fieldNames",required:!1,type:{name:"TreeSelectFieldNames"}},virtual:{defaultValue:null,description:"Virtual scroll (for large lists)",name:"virtual",required:!1,type:{name:"boolean"}},dropdownRender:{defaultValue:null,description:"Dropdown render customization",name:"dropdownRender",required:!1,type:{name:"((menu: ReactNode) => ReactNode)"}},tabIndex:{defaultValue:null,description:"Tab index",name:"tabIndex",required:!1,type:{name:"number"}},autoFocus:{defaultValue:null,description:"Auto focus",name:"autoFocus",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"ARIA label",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"ARIA labelledby",name:"aria-labelledby",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Called when selection changes",name:"onChange",required:!1,type:{name:"((value: string | string[], label: ReactNode | ReactNode[], extra: { preValue?: string | string[]; triggerValue?: string; triggerNode?: TreeSelectNode | undefined; allCheckedNodes?: TreeSelectNode[] | undefined; }) => void) | undefined"}},onSelect:{defaultValue:null,description:"Called when a node is selected",name:"onSelect",required:!1,type:{name:"((value: string, node: TreeSelectNode, extra: { selected: boolean; }) => void)"}},onSearch:{defaultValue:null,description:"Called when search input changes",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},onDropdownVisibleChange:{defaultValue:null,description:"Called when dropdown visibility changes",name:"onDropdownVisibleChange",required:!1,type:{name:"((open: boolean) => void)"}},onTreeExpand:{defaultValue:null,description:"Called when tree expands",name:"onTreeExpand",required:!1,type:{name:"((expandedKeys: string[]) => void)"}},onPopupScroll:{defaultValue:null,description:"Called when popup scrolls",name:"onPopupScroll",required:!1,type:{name:"((event: UIEvent<HTMLDivElement, UIEvent>) => void)"}},onFocus:{defaultValue:null,description:"Called on focus",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"Called on blur",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onClear:{defaultValue:null,description:"Called on clear",name:"onClear",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/TreeSelect/TreeSelect.tsx#TreeSelect"]={docgenInfo:TreeSelect.__docgenInfo,name:"TreeSelect",path:"src/core-components/src/components/TreeSelect/TreeSelect.tsx#TreeSelect"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/src/components/TreeSelect/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EI:()=>getDescendantValues,GR:()=>getFieldValue,Ms:()=>useExpandedState,U9:()=>useAsyncLoading,UY:()=>useCheckedState,hV:()=>filterTree,uu:()=>findNodeByValue});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getFieldValue(node,field,fieldNames={}){return node[{label:fieldNames.label||"title",value:fieldNames.value||"value",children:fieldNames.children||"children"}[field]]}function flattenTree(nodes,fieldNames,parent){const result=[];for(const node of nodes){const value=getFieldValue(node,"value",fieldNames),children=getFieldValue(node,"children",fieldNames),path=parent?[...parent.path,value]:[value];result.push({...node,parent,path}),children&&Array.isArray(children)&&result.push(...flattenTree(children,fieldNames,{...node,path}))}return result}function findNodeByValue(nodes,value,fieldNames){for(const node of nodes){const nodeValue=getFieldValue(node,"value",fieldNames),children=getFieldValue(node,"children",fieldNames);if(nodeValue===value)return node;if(children&&Array.isArray(children)){const found=findNodeByValue(children,value,fieldNames);if(found)return found}}}function getDescendantValues(node,fieldNames){const values=[],children=getFieldValue(node,"children",fieldNames);if(children&&Array.isArray(children))for(const child of children){const childValue=getFieldValue(child,"value",fieldNames);values.push(childValue),values.push(...getDescendantValues(child,fieldNames))}return values}function filterTree(nodes,searchValue,filterFn,filterProp="title",fieldNames){if(!searchValue)return nodes;const filter=filterFn||((value,node)=>{const nodeLabel=node[filterProp];return"string"==typeof nodeLabel&&nodeLabel.toLowerCase().includes(value.toLowerCase())}),result=[];for(const node of nodes){const children=getFieldValue(node,"children",fieldNames),filteredChildren=children?filterTree(children,searchValue,filterFn,filterProp,fieldNames):[];(filter(searchValue,node)||filteredChildren.length>0)&&result.push({...node,children:filteredChildren.length>0?filteredChildren:children})}return result}function useExpandedState(treeData,defaultExpandedKeys,defaultExpandAll,controlledExpandedKeys,fieldNames){const[internalExpanded,setInternalExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>{if(defaultExpandAll){const allKeys=new Set,collectKeys=nodes=>{for(const node of nodes){const value=getFieldValue(node,"value",fieldNames),children=getFieldValue(node,"children",fieldNames);children&&children.length>0&&(allKeys.add(value),collectKeys(children))}};return collectKeys(treeData),allKeys}return new Set(defaultExpandedKeys||[])}));return{expandedKeys:controlledExpandedKeys?new Set(controlledExpandedKeys):internalExpanded,toggleExpand:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key=>{setInternalExpanded((prev=>{const next=new Set(prev);return next.has(key)?next.delete(key):next.add(key),next}))}),[]),setExpanded:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((keys=>{setInternalExpanded(new Set(keys))}),[])}}function useCheckedState(treeData,value,checkStrictly=!1,fieldNames){const[checkedKeys,setCheckedKeys]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(value||[])),[halfCheckedKeys,setHalfCheckedKeys]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{value&&(setCheckedKeys(new Set(value)),checkStrictly||updateHalfChecked(new Set(value)))}),[value,checkStrictly]);const updateHalfChecked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((checked=>{if(checkStrictly)return void setHalfCheckedKeys(new Set);const half=new Set,flatNodes=flattenTree(treeData,fieldNames);for(const node of flatNodes){const nodeValue=getFieldValue(node,"value",fieldNames),children=getFieldValue(node,"children",fieldNames);if(children&&children.length>0){const descendantValues=getDescendantValues(node,fieldNames),checkedDescendants=descendantValues.filter((v=>checked.has(v)));checkedDescendants.length>0&&checkedDescendants.length<descendantValues.length&&half.add(nodeValue)}}setHalfCheckedKeys(half)}),[treeData,checkStrictly,fieldNames]);return{checkedKeys,halfCheckedKeys,toggleCheck:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((nodeValue,node)=>{setCheckedKeys((prev=>{const next=new Set(prev);if(next.has(nodeValue)){if(next.delete(nodeValue),!checkStrictly){getDescendantValues(node,fieldNames).forEach((v=>next.delete(v)))}}else if(next.add(nodeValue),!checkStrictly){getDescendantValues(node,fieldNames).forEach((v=>next.add(v)))}return checkStrictly||function updateParentStates(checked,changedValue,treeData,fieldNames){const ancestors=function getAncestorValues(nodes,targetValue,fieldNames){const target=flattenTree(nodes,fieldNames).find((n=>getFieldValue(n,"value",fieldNames)===targetValue));return target?.path.slice(0,-1)||[]}(treeData,changedValue,fieldNames);for(const ancestorValue of ancestors.reverse()){const ancestorNode=findNodeByValue(treeData,ancestorValue,fieldNames);if(ancestorNode){getDescendantValues(ancestorNode,fieldNames).every((v=>checked.has(v)))?checked.add(ancestorValue):checked.delete(ancestorValue)}}}(next,nodeValue,treeData,fieldNames),updateHalfChecked(next),next}))}),[checkStrictly,treeData,fieldNames,updateHalfChecked]),setCheckedKeys}}function useAsyncLoading(){const[loadingKeys,setLoadingKeys]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set),[loadedKeys,setLoadedKeys]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set),setLoading=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((key,isLoading)=>{setLoadingKeys((prev=>{const next=new Set(prev);return isLoading?next.add(key):next.delete(key),next}))}),[]),markLoaded=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key=>{setLoadedKeys((prev=>new Set(prev).add(key))),setLoadingKeys((prev=>{const next=new Set(prev);return next.delete(key),next}))}),[]),isLoading=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key=>loadingKeys.has(key)),[loadingKeys]),isLoaded=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((key=>loadedKeys.has(key)),[loadedKeys]);return{loadingKeys,setLoading,markLoaded,isLoading,isLoaded}}}}]);
//# sourceMappingURL=8463.9c2598aa.iframe.bundle.js.map