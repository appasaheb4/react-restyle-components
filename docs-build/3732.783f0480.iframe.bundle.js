"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[3732],{"./src/core-components/src/components/Accordion/AccordionSection/Accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Accordion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_AccordionContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/AccordionContext.tsx"),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/elements.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core-components/src/utils/index.ts");const Accordion=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({ariaLabel="",variant="inline",numbered=!1,children,...props},fRef)=>((0,_utils__WEBPACK_IMPORTED_MODULE_3__.hG)({name:"numbered",version:"5.0.0",alternative:"AccordionSection.Header.Leading and  AccordionSection.Header.Trailing",value:numbered}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_1__.A.Provider,{value:{variant,numbered}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.P8,{"data-aui":"accordion","aria-label":ariaLabel,ref:fRef,$variant:variant,...props},children)))))},"./src/core-components/src/components/Accordion/AccordionSection/AccordionContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/react/index.js").createContext)({variant:"inline",numbered:!1})},"./src/core-components/src/components/Accordion/AccordionSection/AccordionSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>AccordionSection});var react=__webpack_require__("./node_modules/react/index.js"),AccordionSection_elements=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/elements.tsx"),utils=__webpack_require__("./src/core-components/src/utils/index.ts"),designTokens=__webpack_require__("./src/core-components/src/utils/designTokens.ts");const Text=({size,weight,color,children,...props})=>{const fontSizeMap={1:"0.875rem",2:"1rem",3:"1.25rem",4:"1.5rem"},fontWeightMap={regular:400,medium:500,heavy:700};return react.createElement("span",{style:{fontSize:fontSizeMap[size]||fontSizeMap[2],fontWeight:fontWeightMap[weight]||fontWeightMap.regular,color:color||designTokens.L.white},...props},children)},LeadingTrailing=({children,...props})=>react.createElement(AccordionSection_elements.WK,props,react.createElement(utils.UU,{value:{iconSize:"large"}},children)),Leading=props=>react.createElement(LeadingTrailing,props),Trailing=props=>react.createElement(LeadingTrailing,props),Header=(0,utils.ES)("Header",(({children})=>{const[leading,trailing,content]=(0,utils.On)(children,Leading,Trailing);return react.createElement(react.Fragment,null,leading,react.createElement(AccordionSection_elements.rI,null,content),trailing)}),{Heading:({children,...props})=>react.createElement(Text,{size:2,weight:"heavy",...props},children),Leading,Number:({children,...props})=>react.createElement(Text,{size:2,weight:"heavy",...props},children),SupportiveText:({children,...props})=>react.createElement(Text,{size:1,...props},children),Trailing});var Icon=__webpack_require__("./src/core-components/src/components/Icon/Icon.tsx");var AccordionContext=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/AccordionContext.tsx"),core_components=__webpack_require__("./src/core-components/src/core-components/index.ts");const AccordionSection=(0,utils.ES)("AccordionSection",react.forwardRef((({buttonClassName="",headerClassName="",subheaderClassName="",iconWrapperClassName="",ariaLabel="",icons,children,header,subheader,startOpen=!1,transitionDuration=".3s",transitionTimingFunction="ease-in",onClick,onOpenStateChange,isOpen,...rest},fRef)=>{(0,utils.hG)({name:"iconSrc",version:"5.0.0",alternative:"AccordionSection.Header.Leading and  AccordionSection.Header.Trailing",value:icons});const{numbered,variant}=(0,react.useContext)(AccordionContext.A),accordionRef=(0,react.useRef)(null),accordionIndex=(ref=>{const[currentIndex,setCurrentIndex]=(0,react.useState)(1);return(0,react.useEffect)((()=>{let node=ref.current,index=1;for(;node&&(node=node.previousElementSibling);)index++;setCurrentIndex(index)}),[]),currentIndex})(accordionRef),[accordionOpen,setAccordionOpenState]=(0,react.useState)(isOpen??startOpen);(0,react.useEffect)((()=>{setAccordionOpenState(isOpen??startOpen)}),[isOpen]);const[headerElements,content]=(0,utils.On)(children,Header),sectionHeader=0!==react.Children.count(headerElements)?headerElements:react.createElement(Header,null,numbered?react.createElement(Header.Leading,null,react.createElement(Header.Number,null,accordionIndex,".")):icons&&react.createElement(Header.Leading,{alignment:"center",className:iconWrapperClassName},react.createElement(Icon.I,{nameIcon:icons.nameIcon,propsIcon:{size:24,color:designTokens.L.white,...icons.propsIcon||{}}})),react.createElement(Header.Heading,{className:headerClassName},header),subheader&&react.createElement(Header.SupportiveText,{className:subheaderClassName},subheader));return react.createElement(AccordionSection_elements.hZ,{$variant:variant,$isOpen:accordionOpen,"data-aui":"accordion.section",ref:accordionRef},react.createElement(AccordionSection_elements.b0,{ref:fRef,className:buttonClassName,"aria-label":ariaLabel,"aria-expanded":accordionOpen,$variant:variant,$isOpen:accordionOpen,onClick:e=>{onClick?.(e),onOpenStateChange?.(!accordionOpen),setAccordionOpenState(!accordionOpen)},...rest},react.createElement(core_components.N$,null),sectionHeader),react.createElement(AccordionSection_elements.sd,{$isOpen:accordionOpen,$transitionDuration:transitionDuration,$transitionTimingFunction:transitionTimingFunction},react.createElement(AccordionSection_elements.ZM,{"aria-hidden":!accordionOpen,$isOpen:accordionOpen,$hasLeader:!!icons||numbered,$transitionDuration:transitionDuration},react.createElement("div",{style:{zIndex:-1,paddingBottom:10}},content)),react.createElement(AccordionSection_elements.bQ,{$isOpen:accordionOpen,$transitionDuration:transitionDuration,$transitionTimingFunction:transitionTimingFunction})),react.createElement(AccordionSection_elements.m3,null))})),{Header})},"./src/core-components/src/components/Accordion/AccordionSection/elements.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P8:()=>AccordionElement,WK:()=>StyledLeadingTrailing,ZM:()=>AccordionSectionContent,b0:()=>ButtonElement,bQ:()=>AccordionFade,hZ:()=>AccordionSectionWrapper,m3:()=>AccordionDivider,rI:()=>AccordionSectionText,sd:()=>AccordionSectionContentWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core-components/src/components/Icon/Icon.tsx"),_core_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/src/core-components/index.ts"),_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core-components/src/utils/designTokens.ts");const Divider=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.hr`
  border: none;
  border-top: 1px solid;
  margin: 0;
  width: 100%;
`,AccordionElement=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  gap: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing050};
  ${({$variant})=>"inline"===$variant&&styled_components__WEBPACK_IMPORTED_MODULE_3__.AH`
      border: 1px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.outline};
      border-radius: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.borderRadius100};
      padding: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing100};
      background: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.surface||"#ffffff"};
    `};
  overflow: hidden;
  width: 100%;
  color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.onSurface};
`,AccordionSectionWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  overflow: hidden;
  width: 100%;
  isolation: isolate;
  transition: all 0.3s ease;

  ${({$variant,$isOpen})=>"inline"===$variant&&styled_components__WEBPACK_IMPORTED_MODULE_3__.AH`
      border-radius: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.borderRadius100};
      margin-bottom: ${$isOpen?_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing100:"0"};
      box-shadow: ${$isOpen?"0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)":"none"};

      &:last-child ${AccordionDivider} {
        display: none;
      }
    `};
`,ButtonElement=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.button`
  all: unset;
  box-sizing: border-box;

  z-index: 1;
  position: relative;
  cursor: pointer;
  width: 100%;

  background: ${({$isOpen})=>$isOpen?`linear-gradient(135deg, ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.darkGray||"#4a4a4a"} 0%, #3a3a3a 100%)`:_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.darkGray||"#4a4a4a"} !important;
  color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.white||"#ffffff"} !important;

  display: flex;
  gap: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing100};
  align-items: center;
  padding: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing200} ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing200};

  transition: all 0.25s ease;

  ${({$variant,$isOpen})=>"inline"===$variant&&styled_components__WEBPACK_IMPORTED_MODULE_3__.AH`
      border-radius: ${$isOpen?`${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.borderRadius100} ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.borderRadius100} 0 0`:_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.borderRadius100};
    `}

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #555555 0%, #3f3f3f 100%) !important;

    ${_core_components__WEBPACK_IMPORTED_MODULE_1__.N$} {
      opacity: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.stateLayerHover};
    }
  }

  &:active:not(:disabled) ${_core_components__WEBPACK_IMPORTED_MODULE_1__.N$} {
    opacity: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.stateLayerPress};
  }

  &:focus-visible {
    outline: 2px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.primary||"#454cbf"};
    outline-offset: 2px;
  }
`,AccordionSectionText=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  line-height: 1.4;
  flex-grow: 1;
  padding-right: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing100};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing050};
  color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.white};

  /* Better text rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`,AccordionFade=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  z-index: 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    transparent,
    ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.surface||"#ffffff"}
  );
  width: 100%;
  height: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing200};
  margin-top: calc(${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing200} * -1);
  opacity: ${({$isOpen})=>$isOpen?1:0};
  transition: opacity ${({$transitionDuration})=>$transitionDuration} ease;
  pointer-events: none;
`,AccordionSectionContentWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  z-index: -1;
  position: relative;
  display: grid;
  grid-template-rows: ${({$isOpen})=>$isOpen?"1fr":"0fr"};
  transition: ${({$transitionDuration,$transitionTimingFunction,$isOpen})=>{return`grid-template-rows ${$transitionDuration} ${transitionTimingFunction=$transitionTimingFunction,isOpen=$isOpen,"ease-in"!==transitionTimingFunction&&"ease-out"!==transitionTimingFunction?transitionTimingFunction:isOpen?"ease-out":"ease-in"}`;var transitionTimingFunction,isOpen}};
  background: ${({$isOpen})=>$isOpen?"linear-gradient(180deg, rgba(74, 74, 74, 0.05) 0%, transparent 100%)":"transparent"};
  border-left: ${({$isOpen})=>$isOpen?`3px solid ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.primary||"#454cbf"}`:"3px solid transparent"};
  margin-left: ${({$isOpen})=>$isOpen?_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing100:"0"};
  transition: all 0.3s ease;
`,AccordionSectionContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  overflow-y: hidden;
  transition: ${({$transitionDuration})=>`opacity ${$transitionDuration} linear, transform ${$transitionDuration} ease`};
  line-height: 1.6;
  opacity: ${({$isOpen})=>$isOpen?1:0};
  transform: ${({$isOpen})=>$isOpen?"translateY(0)":"translateY(-8px)"};
  padding-top: ${({$isOpen})=>$isOpen?_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing150:"0"};
  padding-right: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing200};
  padding-left: ${({$hasLeader})=>$hasLeader?_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing600:_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing200};
`,StyledLeadingTrailing=styled_components__WEBPACK_IMPORTED_MODULE_3__.I4.div`
  flex-shrink: 0;
  min-width: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing300};
  display: flex;
  align-self: ${({alignment})=>"center"===alignment?"center":"flex-start"};
  position: relative;
  z-index: 1;

  img,
  picture {
    object-fit: contain;
  }
`,AccordionDivider=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.I4)(Divider)`
  border-color: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.outline};
  opacity: 0.5;
  margin: ${_utils_designTokens__WEBPACK_IMPORTED_MODULE_2__.L.spacing025} 0;
`;(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.I4)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_0__.I.SSR)`
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({$rotateIcon})=>`rotate(${$rotateIcon?-180:0}deg)`};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`},"./src/core-components/src/core-components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N$:()=>StateLayer_StateLayer});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/core-components/src/utils/index.ts"),designTokens=__webpack_require__("./src/core-components/src/utils/designTokens.ts");const StateLayer_StateLayer=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  background: ${designTokens.L.darkGray||"#4a4a4a"} !important;
  opacity: ${designTokens.L.stateLayerNone};
`,baseToggleStyles=styled_components_browser_esm.AH`
  position: relative;
  display: block;
  box-sizing: border-box;
  overflow: hidden;

  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-right: var(--aui-spacing-100);

  ${({$showInteraction})=>$showInteraction&&styled_components_browser_esm.AH`
      // Transitions
      &:before,
      [data-aui='icon'],
      ${StateLayer_StateLayer} {
        ${(0,utils.eV)({properties:["opacity"]})}
      }

      ${(0,utils.eV)({properties:["box-shadow","background-color","color"]})}

      // Support keyboard focus
      &:has(~ input:focus-visible) {
        outline: 1px solid blue;
      }

      // Disabled styles
      &:has(~ input:disabled) {
        opacity: var(--aui-state-layer-on-disabled);
      }
    `}
`,StyledCheckbox=styled_components_browser_esm.I4.span`
  [data-aui='icon-check'],
  [data-aui='icon-minus'] {
    position: absolute;
    inset: 0;
    margin: auto;
    transition: opacity 0.15s;
    pointer-events: none;
  }
  ${baseToggleStyles};

  border-radius: var(--aui-border-radius-050);

  ${({$checked,$indeterminate})=>$checked||$indeterminate?styled_components_browser_esm.AH`
          box-shadow: 0 0 0 1px var(--aui-inverse-surface) inset;
          background: var(--aui-inverse-surface);
          color: var(--aui-inverse-on-surface);
        `:styled_components_browser_esm.AH`
          box-shadow: 0 0 0 1px var(--aui-outline) inset;
          background: var(--aui-surface);
          color: var(--aui-on-surface);
        `}
`,StyledRadio=styled_components_browser_esm.I4.span`
  ${baseToggleStyles};

  border-radius: var(--aui-border-radius-round);
  background: var(--aui-surface);

  ${({$checked})=>$checked?styled_components_browser_esm.AH`
          box-shadow: 0 0 0 2px var(--aui-inverse-surface) inset;
        `:styled_components_browser_esm.AH`
          box-shadow: 0 0 0 1px var(--aui-outline) inset;
        `}

  &:before {
    content: '';
    position: absolute;
    border-radius: var(--aui-border-radius-round);
    width: 0.625rem;
    height: 0.625rem;
    top: 0.3125rem;
    left: 0.3125rem;
    background: var(--aui-inverse-surface);
    opacity: ${({$checked})=>$checked?"1":"0"};
  }
`,toggleParentStyles=((0,styled_components_browser_esm.I4)((props=>react.createElement("span",props))).attrs({size:2})`
  color: var(--aui-on-surface);
  line-height: 1.3;

  &:has(~ input:disabled) {
    opacity: var(--aui-state-layer-on-disabled);
    cursor: not-allowed;
  }
`,styled_components_browser_esm.I4.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`,styled_components_browser_esm.AH`
  &:not(:has(input:disabled)) {
    &:hover
      ${StyledCheckbox}
      ${StateLayer_StateLayer},
      &:hover
      ${StyledRadio}
      ${StateLayer_StateLayer} {
      opacity: var(--aui-state-layer-hover);
    }

    &:active
      ${StyledCheckbox}
      ${StateLayer_StateLayer},
      &:hover
      ${StyledRadio}
      ${StateLayer_StateLayer} {
      opacity: var(--aui-state-layer-press);
    }
  }
`);(0,styled_components_browser_esm.I4)((props=>react.createElement("div",props))).withConfig((0,utils.jk)())`
  display: inline-flex;
  align-items: flex-start;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.3;
  -moz-osx-font-smoothing: grayscale;

  ${()=>(0,utils.eV)({properties:["box-shadow","background-color"]})}

  ${toggleParentStyles};
`,styled_components_browser_esm.I4.div.withConfig((0,utils.jk)())`
  display: flex;
  z-index: 1;
  width: 100%;
  justify-content: center;
  padding: 0.1rem 0 0 0;
  ${(0,utils.eV)({properties:["color"]})};

  ${({isDisabled})=>isDisabled&&`\n      cursor: not-allowed;\n      color: ${utils.Tj.disabledText};\n`}
  ${({disableSvgColorOverride,isDisabled})=>!disableSvgColorOverride&&`\n    svg path {\n      fill: none;\n      stroke: ${isDisabled&&utils.Tj.disabledText};\n    }\n`}
`}}]);
//# sourceMappingURL=3732.783f0480.iframe.bundle.js.map