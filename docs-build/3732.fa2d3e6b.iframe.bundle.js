"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[3732],{"./src/core-components/src/components/Accordion/AccordionSection/Accordion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Accordion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_AccordionContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/AccordionContext.tsx"),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/elements.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core-components/src/utils/index.ts");const Accordion=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({ariaLabel="",variant="inline",numbered=!1,children,...props},fRef)=>((0,_utils__WEBPACK_IMPORTED_MODULE_3__.hG)({name:"numbered",version:"5.0.0",alternative:"AccordionSection.Header.Leading and  AccordionSection.Header.Trailing",value:numbered}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_1__.A.Provider,{value:{variant,numbered}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.P8,{"data-aui":"accordion","aria-label":ariaLabel,ref:fRef,$variant:variant,...props},children)))))},"./src/core-components/src/components/Accordion/AccordionSection/AccordionContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/react/index.js").createContext)({variant:"inline",numbered:!1})},"./src/core-components/src/components/Accordion/AccordionSection/AccordionSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>AccordionSection});var react=__webpack_require__("./node_modules/react/index.js"),AccordionSection_elements=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/elements.tsx"),utils=__webpack_require__("./src/core-components/src/utils/index.ts");const Text=({size,weight,color,children,...props})=>{const fontSizeMap={1:"0.875rem",2:"1rem",3:"1.25rem",4:"1.5rem"},fontWeightMap={regular:400,medium:500,heavy:700};return react.createElement("span",{style:{fontSize:fontSizeMap[size]||fontSizeMap[2],fontWeight:fontWeightMap[weight]||fontWeightMap.regular,color:color||"inherit"},...props},children)},LeadingTrailing=({children,...props})=>react.createElement(AccordionSection_elements.WK,props,react.createElement(utils.UU,{value:{iconSize:"large"}},children)),Leading=props=>react.createElement(LeadingTrailing,props),Trailing=props=>react.createElement(LeadingTrailing,props),Header=(0,utils.ES)("Header",(({children})=>{const[leading,trailing,content]=(0,utils.On)(children,Leading,Trailing);return react.createElement(react.Fragment,null,leading,react.createElement(AccordionSection_elements.rI,null,content),trailing)}),{Heading:({children,...props})=>react.createElement(Text,{size:2,weight:"heavy",...props},children),Leading,Number:({children,...props})=>react.createElement(Text,{size:2,weight:"heavy",...props},children),SupportiveText:({children,...props})=>react.createElement(Text,{size:1,color:"var(--aui-on-surface-soft)",...props},children),Trailing});var Icon=__webpack_require__("./src/core-components/src/components/Icon/index.ts");var AccordionContext=__webpack_require__("./src/core-components/src/components/Accordion/AccordionSection/AccordionContext.tsx"),core_components=__webpack_require__("./src/core-components/src/core-components/index.ts");const AccordionSection=(0,utils.ES)("AccordionSection",react.forwardRef((({buttonClassName="",iconWrapperClassName="",ariaLabel="",icons,children,header,subheader,startOpen=!1,transitionDuration=".3s",transitionTimingFunction="ease-in",onClick,onOpenStateChange,isOpen,...rest},fRef)=>{(0,utils.hG)({name:"iconSrc",version:"5.0.0",alternative:"AccordionSection.Header.Leading and  AccordionSection.Header.Trailing",value:icons});const{numbered,variant}=(0,react.useContext)(AccordionContext.A),accordionRef=(0,react.useRef)(null),accordionIndex=(ref=>{const[currentIndex,setCurrentIndex]=(0,react.useState)(1);return(0,react.useEffect)((()=>{let node=ref.current,index=1;for(;node&&(node=node.previousElementSibling);)index++;setCurrentIndex(index)}),[]),currentIndex})(accordionRef),[accordionOpen,setAccordionOpenState]=(0,react.useState)(isOpen??startOpen);(0,react.useEffect)((()=>{setAccordionOpenState(isOpen??startOpen)}),[isOpen]);const[headerElements,content]=(0,utils.On)(children,Header),sectionHeader=0!==react.Children.count(headerElements)?headerElements:react.createElement(Header,null,numbered?react.createElement(Header.Leading,null,react.createElement(Header.Number,null,accordionIndex,".")):icons&&react.createElement(Header.Leading,{className:iconWrapperClassName},react.createElement(Icon.I,{nameIcon:icons.nameIcon})),react.createElement(Header.Heading,null,header),subheader&&react.createElement(Header.SupportiveText,null,subheader));return react.createElement(AccordionSection_elements.hZ,{$variant:variant,$isOpen:accordionOpen,"data-aui":"accordion.section",ref:accordionRef},react.createElement(AccordionSection_elements.b0,{ref:fRef,className:buttonClassName,"aria-label":ariaLabel,"aria-expanded":accordionOpen,onClick:e=>{onClick?.(e),onOpenStateChange?.(!accordionOpen),setAccordionOpenState(!accordionOpen)},...rest},react.createElement(core_components.N$,null),sectionHeader),react.createElement(AccordionSection_elements.sd,{$isOpen:accordionOpen,$transitionDuration:transitionDuration,$transitionTimingFunction:transitionTimingFunction},react.createElement(AccordionSection_elements.ZM,{"aria-hidden":!accordionOpen,$isOpen:accordionOpen,$hasLeader:!!icons||numbered,$transitionDuration:transitionDuration},react.createElement("div",{style:{zIndex:-1,paddingBottom:10}},content)),react.createElement(AccordionSection_elements.bQ,{$isOpen:accordionOpen,$transitionDuration:transitionDuration,$transitionTimingFunction:transitionTimingFunction})),react.createElement(AccordionSection_elements.m3,null))})),{Header})},"./src/core-components/src/components/Accordion/AccordionSection/elements.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P8:()=>AccordionElement,WK:()=>StyledLeadingTrailing,ZM:()=>AccordionSectionContent,b0:()=>ButtonElement,bQ:()=>AccordionFade,hZ:()=>AccordionSectionWrapper,m3:()=>AccordionDivider,rI:()=>AccordionSectionText,sd:()=>AccordionSectionContentWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core-components/src/components/Icon/index.ts"),_core_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/src/core-components/index.ts");const Divider=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.hr`
  border: none;
  border-top: 1px solid;
  margin: 0;
  width: 100%;
`,AccordionElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  ${({$variant})=>"inline"===$variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      border: 1px solid var(--outline);
      border-radius: var(--border-radius-100);
    `};
  overflow: hidden;
  width: 100%;
  color: var(--on-surface);
`,AccordionSectionWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  overflow: hidden;
  width: 100%;
  isolation: isolate;

  ${({$variant})=>"inline"===$variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      &:last-child ${AccordionDivider} {
        display: none;
      }
    `};
`,ButtonElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.button`
  all: unset;

  z-index: 1;
  position: relative;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  background-color: var(--surface);

  display: flex;
  gap: var(--spacing-100);
  align-items: center;
  padding: var(--spacing-200);

  &:hover:not(:disabled) ${_core_components__WEBPACK_IMPORTED_MODULE_1__.N$} {
    opacity: var(--state-layer-hover);
  }

  &:active:not(:disabled) ${_core_components__WEBPACK_IMPORTED_MODULE_1__.N$} {
    opacity: var(--state-layer-press);
  }
`,AccordionSectionText=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  line-height: 1.3;
  flex-grow: 1;
  padding-right: var(--spacing-100);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-050);
`,AccordionFade=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  z-index: 0;
  position: relative;
  background: linear-gradient(to bottom, transparent, var(--surface));
  width: 100%;
  height: var(--spacing-150);
  margin-top: calc(var(--spacing-150) * -1);
`,AccordionSectionContentWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  z-index: -1;
  position: relative;
  display: grid;
  grid-template-rows: ${({$isOpen})=>$isOpen?"1fr":"0fr"};
  transition: ${({$transitionDuration,$transitionTimingFunction,$isOpen})=>{return`grid-template-rows ${$transitionDuration} ${transitionTimingFunction=$transitionTimingFunction,isOpen=$isOpen,"ease-in"!==transitionTimingFunction&&"ease-out"!==transitionTimingFunction?transitionTimingFunction:isOpen?"ease-out":"ease-in"}`;var transitionTimingFunction,isOpen}};
`,AccordionSectionContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  overflow-y: hidden;
  transition: ${({$transitionDuration})=>`opacity ${$transitionDuration} linear`};
  line-height: 1.3;
  opacity: ${({$isOpen})=>$isOpen?1:0};
  padding-right: var(--spacing-150);
  padding-left: ${({$hasLeader})=>$hasLeader?"var(--spacing-600)":"var(--spacing-200)"};
`,StyledLeadingTrailing=styled_components__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  flex-shrink: 0;
  min-width: var(--spacing-300);
  display: flex;
  align-self: ${({alignment})=>"center"===alignment?"center":"flex-start"};

  img,
  picture {
    object-fit: contain;
  }
`,AccordionDivider=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.I4)(Divider)`
  border-color: var(--outline);
`;(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.I4)(_Icon__WEBPACK_IMPORTED_MODULE_0__.I.SSR)`
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${({$rotateIcon})=>`rotate(${$rotateIcon?-180:0}deg)`};
`},"./src/core-components/src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__),_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core-components/src/components/tooltip/tooltip.component.tsx"),_loadable_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@loadable/component/dist/esm/loadable.esm.mjs"),_tc_module_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/core-components/src/tc.module.css"),_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_tc_module_css__WEBPACK_IMPORTED_MODULE_4__),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/core-components/src/utils/index.ts");const Icon=({nameIcon,propsIcon,className,tooltip="",isDisable=!1,onClick})=>{try{const iconProps={...propsIcon,color:isDisable?"#808080":propsIcon?.color||"rgb(36 48 63)"},lib=nameIcon.startsWith("IoIo")?"io":nameIcon.startsWith("Io")?"io5":nameIcon.replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ")[0].toLowerCase(),loadLibrary={fa:()=>__webpack_require__.e(9972).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/fa/index.mjs")),md:()=>__webpack_require__.e(7284).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/md/index.mjs")),io:()=>__webpack_require__.e(8995).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/io/index.mjs")),fi:()=>__webpack_require__.e(4988).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/fi/index.mjs")),bs:()=>__webpack_require__.e(9610).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/bs/index.mjs")),hi:()=>__webpack_require__.e(6070).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/hi/index.mjs")),go:()=>__webpack_require__.e(21).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/go/index.mjs")),si:()=>__webpack_require__.e(3343).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/si/index.mjs")),ti:()=>__webpack_require__.e(9434).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/ti/index.mjs")),wi:()=>__webpack_require__.e(2651).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/wi/index.mjs")),di:()=>__webpack_require__.e(2346).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/di/index.mjs")),ri:()=>__webpack_require__.e(2816).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/ri/index.mjs")),fc:()=>__webpack_require__.e(2406).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/fc/index.mjs")),gr:()=>__webpack_require__.e(6888).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/gr/index.mjs")),lu:()=>__webpack_require__.e(8006).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/lu/index.mjs")),gi:()=>__webpack_require__.e(9611).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/gi/index.mjs")),tb:()=>__webpack_require__.e(681).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/tb/index.mjs")),rx:()=>__webpack_require__.e(201).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/rx/index.mjs")),im:()=>__webpack_require__.e(7025).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/im/index.mjs")),cg:()=>__webpack_require__.e(2265).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/cg/index.mjs")),io5:()=>__webpack_require__.e(2990).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/io5/index.mjs")),ai:()=>__webpack_require__.e(8741).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/ai/index.mjs")),vsc:()=>__webpack_require__.e(3151).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/vsc/index.mjs")),bi:()=>__webpack_require__.e(7488).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/bi/index.mjs")),fa2:()=>__webpack_require__.e(9972).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/fa/index.mjs")),ci:()=>__webpack_require__.e(1759).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/ci/index.mjs")),lib:()=>__webpack_require__.e(1987).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/lib/index.mjs")),lia:()=>__webpack_require__.e(6081).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/lia/index.mjs")),pi:()=>__webpack_require__.e(5086).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/pi/index.mjs")),tfi:()=>__webpack_require__.e(7544).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/tfi/index.mjs")),fa6:()=>__webpack_require__.e(7056).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/fa6/index.mjs"))}[lib]||(()=>__webpack_require__.e(7284).then(__webpack_require__.bind(__webpack_require__,"./node_modules/react-icons/md/index.mjs"))),ElementIcon=(0,_loadable_component__WEBPACK_IMPORTED_MODULE_3__.Ay)(loadLibrary,{resolveComponent:el=>null!=el[nameIcon]?el[nameIcon]:el[Object.keys(el.default)[0]]});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default().iconContainer,className),onClick:()=>{isDisable||onClick&&onClick()}},lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(tooltip)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Loading...")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementIcon,{...iconProps,className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)})):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_2__.m,{content:tooltip},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementIcon,{...iconProps,className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)})))}catch(error){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)}};Icon.SSR=({nameIcon,...props})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon,props.className),"aria-hidden":"true"},"⚫"),Icon.Compat=({src,className,...props})=>"string"==typeof src?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src,className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon,className),...props,alt:""}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(_tc_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon,className),...props},src)},"./src/core-components/src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon.I});var Icon=__webpack_require__("./src/core-components/src/components/Icon/Icon.tsx");__webpack_require__("./node_modules/react/index.js")},"./src/core-components/src/components/tooltip/tooltip.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>TooltipProvider,m:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs");const Tooltip=({align="center",side="bottom",children,content,avoidCollisions=!0,alignOffset=0,sideOffset=5,disabled=!1,delay=400,className})=>{const isChildrenString="string"==typeof children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.bL,{delayDuration:delay},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.l9,{asChild:!isChildrenString,disabled,className},children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.ZL,null,!disabled&&content&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.UC,{className,avoidCollisions,side,align,alignOffset,sideOffset},content,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.i3,{className}))))},TooltipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Kq},"./src/core-components/src/core-components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N$:()=>StateLayer_StateLayer});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/core-components/src/utils/index.ts");const StateLayer_StateLayer=styled_components_browser_esm.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
  background: currentColor;
  opacity: var(--state-layer-none);
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
`,elements_CheckboxToggle=({...props})=>React.createElement(StyledCheckbox,props,React.createElement(StateLayer,null),React.createElement("span",null,"Icons")),elements_RadioToggle=props=>React.createElement(StyledRadio,props,React.createElement(StateLayer,null)),elements_StyledDescription=(0,styled_components_browser_esm.I4)((props=>react.createElement("span",props))).attrs({size:2})`
  color: var(--aui-on-surface);
  line-height: 1.3;

  &:has(~ input:disabled) {
    opacity: var(--aui-state-layer-on-disabled);
    cursor: not-allowed;
  }
`,elements_HiddenInput=styled_components_browser_esm.I4.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`,toggleParentStyles=styled_components_browser_esm.AH`
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
`;try{elements_CheckboxToggle.displayName="CheckboxToggle",elements_CheckboxToggle.__docgenInfo={description:"",displayName:"CheckboxToggle",props:{$checked:{defaultValue:null,description:"",name:"$checked",required:!0,type:{name:"boolean"}},$showInteraction:{defaultValue:null,description:"",name:"$showInteraction",required:!0,type:{name:"boolean"}},$indeterminate:{defaultValue:null,description:"",name:"$indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/core-components/ToggleCore/elements.tsx#CheckboxToggle"]={docgenInfo:elements_CheckboxToggle.__docgenInfo,name:"CheckboxToggle",path:"src/core-components/src/core-components/ToggleCore/elements.tsx#CheckboxToggle"})}catch(__react_docgen_typescript_loader_error){}try{elements_RadioToggle.displayName="RadioToggle",elements_RadioToggle.__docgenInfo={description:"",displayName:"RadioToggle",props:{$checked:{defaultValue:null,description:"",name:"$checked",required:!0,type:{name:"boolean"}},$showInteraction:{defaultValue:null,description:"",name:"$showInteraction",required:!0,type:{name:"boolean"}},$indeterminate:{defaultValue:null,description:"",name:"$indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/core-components/ToggleCore/elements.tsx#RadioToggle"]={docgenInfo:elements_RadioToggle.__docgenInfo,name:"RadioToggle",path:"src/core-components/src/core-components/ToggleCore/elements.tsx#RadioToggle"})}catch(__react_docgen_typescript_loader_error){}try{elements_StyledDescription.displayName="StyledDescription",elements_StyledDescription.__docgenInfo={description:"",displayName:"StyledDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/core-components/ToggleCore/elements.tsx#StyledDescription"]={docgenInfo:elements_StyledDescription.__docgenInfo,name:"StyledDescription",path:"src/core-components/src/core-components/ToggleCore/elements.tsx#StyledDescription"})}catch(__react_docgen_typescript_loader_error){}try{elements_HiddenInput.displayName="HiddenInput",elements_HiddenInput.__docgenInfo={description:"",displayName:"HiddenInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/core-components/ToggleCore/elements.tsx#HiddenInput"]={docgenInfo:elements_HiddenInput.__docgenInfo,name:"HiddenInput",path:"src/core-components/src/core-components/ToggleCore/elements.tsx#HiddenInput"})}catch(__react_docgen_typescript_loader_error){}try{toggleParentStyles.displayName="toggleParentStyles",toggleParentStyles.__docgenInfo={description:"Add this style snippet to the label containing this ToggleCore component",displayName:"toggleParentStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/core-components/ToggleCore/elements.tsx#toggleParentStyles"]={docgenInfo:toggleParentStyles.__docgenInfo,name:"toggleParentStyles",path:"src/core-components/src/core-components/ToggleCore/elements.tsx#toggleParentStyles"})}catch(__react_docgen_typescript_loader_error){}const ToggleCore=null;try{ToggleCore.displayName="ToggleCore",ToggleCore.__docgenInfo={description:"To apply hover states, apply `toggleParentStyles` to the label containing this component",displayName:"ToggleCore",props:{isToggleShowing:{defaultValue:{value:"true"},description:"",name:"isToggleShowing",required:!1,type:{name:"boolean"}},showInteraction:{defaultValue:{value:"true"},description:"When inside ActionCard, set this to false to let the parent show interaction styles",name:"showInteraction",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"@deprecated",name:"onFocusChange",required:!1,type:{name:"((boolean: any) => void)"}},toggleType:{defaultValue:null,description:"",name:"toggleType",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/core-components/ToggleCore/toggleCore.tsx#ToggleCore"]={docgenInfo:ToggleCore.__docgenInfo,name:"ToggleCore",path:"src/core-components/src/core-components/ToggleCore/toggleCore.tsx#ToggleCore"})}catch(__react_docgen_typescript_loader_error){}(0,styled_components_browser_esm.I4)((props=>react.createElement("div",props))).withConfig((0,utils.jk)())`
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
//# sourceMappingURL=3732.fa2d3e6b.iframe.bundle.js.map