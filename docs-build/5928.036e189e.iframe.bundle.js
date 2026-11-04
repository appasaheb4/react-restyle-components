"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[5928],{"./src/core-components/src/components/DynamicGrid/DynamicGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kv:()=>DynamicGrid});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/core-components/src/utils/index.ts"),tc_module=__webpack_require__("./src/core-components/src/tc.module.css"),tc_module_default=__webpack_require__.n(tc_module),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),abstracts=__webpack_require__("./src/core-components/src/utils/abstracts/index.ts"),designTokens=__webpack_require__("./src/core-components/src/utils/designTokens.ts");const fadeIn=styled_components_browser_esm.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideIn=styled_components_browser_esm.i7`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,scaleIn=styled_components_browser_esm.i7`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,shimmer=styled_components_browser_esm.i7`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,GridWrapper=styled_components_browser_esm.I4.div`
  position: relative;
  width: 100%;

  /* Variant: contained */
  ${({$variant})=>"contained"===$variant&&styled_components_browser_esm.AH`
      background: linear-gradient(
        135deg,
        ${designTokens.L.surface||"#ffffff"} 0%,
        #f8f9fa 100%
      );
      border: 1px solid ${designTokens.L.outline||"#e9ecef"};
      border-radius: ${designTokens.L.borderRadius100||"8px"};
      padding: ${designTokens.L.spacing200||"1rem"};
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    `}

  /* Variant: card */
  ${({$variant})=>"card"===$variant&&styled_components_browser_esm.AH`
      background: ${designTokens.L.surface||"#ffffff"};
      border-radius: ${designTokens.L.borderRadius200||"16px"};
      padding: ${designTokens.L.spacing300||"1.5rem"};
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    `}
`,GridContainer=styled_components_browser_esm.I4.div`
  display: grid;
  width: 100%;
  gap: ${({$gap,$rowGap,$columnGap})=>$rowGap||$columnGap?`${$rowGap||$gap} ${$columnGap||$gap}`:$gap};

  /* Grid alignment */
  ${({$alignItems})=>$alignItems&&styled_components_browser_esm.AH`
      align-items: ${$alignItems};
    `}

  ${({$justifyItems})=>$justifyItems&&styled_components_browser_esm.AH`
      justify-items: ${$justifyItems};
    `}

  ${({$alignContent})=>$alignContent&&styled_components_browser_esm.AH`
      align-content: ${$alignContent};
    `}

  ${({$justifyContent})=>$justifyContent&&styled_components_browser_esm.AH`
      justify-content: ${$justifyContent};
    `}

  /* Grid template columns */
  ${({$minWidth,$maxWidth,$columns,$autoFit})=>styled_components_browser_esm.AH`
    grid-template-columns: repeat(
      ${$autoFit?"auto-fit":$columns},
      minmax(${$minWidth}rem, ${$maxWidth?`${$maxWidth}rem`:"1fr"})
    );
  `}

  /* Auto-fit single child centering */
  ${({$autoFit,$columns,$gap})=>$autoFit&&styled_components_browser_esm.AH`
      & > *:only-child {
        width: 100%;
        max-width: calc((100% - ${$columns-1} * ${$gap}) / ${$columns});
      }
    `}

  /* Max rows limit (hide overflow) */
  ${({$maxRows,$columns,$scroll})=>$maxRows&&!$scroll?.enabled&&styled_components_browser_esm.AH`
      & > *:nth-child(n + ${$columns*$maxRows+1}) {
        display: none;
      }
    `}

  /* Scroll mode */
  ${({$scroll,$minWidth,$columns,$gap,$maxRows})=>$scroll?.enabled&&styled_components_browser_esm.AH`
      scroll-behavior: ${!1!==$scroll.smoothScroll?"smooth":"auto"};
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      grid-auto-flow: column;
      -webkit-overflow-scrolling: touch;

      /* Prevent overflow from hiding focus outline */
      & > *:focus,
      & > li > *:focus {
        outline-offset: -2px;
      }

      /* Hide scrollbar if configured */
      ${$scroll.hideScrollbar&&styled_components_browser_esm.AH`
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
          height: 0;
          background: transparent;
        }
      `}

      /* Custom scrollbar styling */
      ${!$scroll.hideScrollbar&&styled_components_browser_esm.AH`
        scrollbar-width: thin;
        scrollbar-color: ${designTokens.L.outline||"#dee2e6"} transparent;

        &::-webkit-scrollbar {
          height: 6px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background: ${designTokens.L.outline||"#dee2e6"};
          border-radius: 3px;

          &:hover {
            background: ${designTokens.L.primary||"#454cbf"};
          }
        }
      `}

      grid-template-columns: unset;
      grid-template-rows: repeat(${$maxRows||1}, max-content);
      grid-auto-columns: max(
        calc(
          (100% - ${$columns+($scroll.scrollHint||0)-1} * ${$gap}) /
            ${$columns+($scroll.scrollHint||0)}
        ),
        ${$minWidth}rem
      );

      & > * {
        scroll-snap-align: ${$scroll.scrollSnapAlign||"start"};
      }

      & > *:first-child {
        scroll-snap-align: start;
      }

      & > *:last-child {
        scroll-snap-align: end;
      }
    `}

  /* List item styling */
  & > li {
    display: flex;
    box-sizing: border-box;
    list-style: none;

    & > * {
      width: 100%;
      height: auto;
    }
  }
`,GridItem=styled_components_browser_esm.I4.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${({$colSpan})=>$colSpan&&styled_components_browser_esm.AH`
      grid-column: span ${$colSpan};
    `}

  ${({$rowSpan})=>$rowSpan&&styled_components_browser_esm.AH`
      grid-row: span ${$rowSpan};
    `}

  ${({$order})=>void 0!==$order&&styled_components_browser_esm.AH`
      order: ${$order};
    `}

  ${({$alignSelf})=>$alignSelf&&styled_components_browser_esm.AH`
      align-self: ${$alignSelf};
    `}

  ${({$justifySelf})=>$justifySelf&&styled_components_browser_esm.AH`
      justify-self: ${$justifySelf};
    `}

  ${({$borderRadius})=>$borderRadius&&styled_components_browser_esm.AH`
      border-radius: ${$borderRadius};
      overflow: hidden;
    `}

  ${({$padding})=>$padding&&styled_components_browser_esm.AH`
      padding: ${$padding};
    `}

  ${({$aspectRatio})=>$aspectRatio&&styled_components_browser_esm.AH`
      aspect-ratio: ${$aspectRatio};
    `}

  /* Animation */
  ${({$animation,$animationIndex=0})=>$animation?.enabled&&"none"!==$animation.type&&styled_components_browser_esm.AH`
      opacity: 0;
      animation-delay: ${$animationIndex*($animation.staggerDelay||50)}ms;
      ${((type,duration)=>{switch(type){case"fade":return styled_components_browser_esm.AH`
        animation: ${fadeIn} ${duration}ms ease-out forwards;
      `;case"slide":return styled_components_browser_esm.AH`
        animation: ${slideIn} ${duration}ms ease-out forwards;
      `;case"scale":return styled_components_browser_esm.AH`
        animation: ${scaleIn} ${duration}ms ease-out forwards;
      `;default:return""}})($animation.type,$animation.duration||300)}
    `}

  & > * {
    width: 100%;
    height: 100%;
  }
`,SkeletonItem=styled_components_browser_esm.I4.div`
  background: linear-gradient(
    90deg,
    ${designTokens.L.surface||"#f0f0f0"} 25%,
    #e8e8e8 50%,
    ${designTokens.L.surface||"#f0f0f0"} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${({$borderRadius})=>$borderRadius||designTokens.L.borderRadius100||"8px"};
  min-height: 100px;

  ${({$aspectRatio})=>$aspectRatio&&styled_components_browser_esm.AH`
      aspect-ratio: ${$aspectRatio};
    `}
`,EmptyState=styled_components_browser_esm.I4.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${designTokens.L.spacing400||"2rem"};
  text-align: center;
  color: ${designTokens.L.onSurface?`${designTokens.L.onSurface}80`:"#6c757d"};

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: ${designTokens.L.spacing200||"1rem"};
    opacity: 0.5;
  }
`,ScrollArrow=styled_components_browser_esm.I4.button`
  position: absolute;
  top: 50%;
  ${({$direction})=>"left"===$direction?"left: -16px;":"right: -16px;"}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${designTokens.L.surface||"#ffffff"};
  border: 1px solid ${designTokens.L.outline||"#e9ecef"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${designTokens.L.onSurface||"#1a1a2e"};
  opacity: ${({$visible})=>$visible?1:0};
  visibility: ${({$visible})=>$visible?"visible":"hidden"};
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: ${designTokens.L.primary||"#454cbf"};
    color: ${designTokens.L.white||"#ffffff"};
    border-color: ${designTokens.L.primary||"#454cbf"};
    transform: translateY(-50%) scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${designTokens.L.primary||"#454cbf"};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* Hide on mobile */
  ${abstracts.fi.xs} {
    display: none;
  }
`,ScrollDots=styled_components_browser_esm.I4.div`
  display: flex;
  justify-content: center;
  gap: ${designTokens.L.spacing100||"0.5rem"};
  margin-top: ${designTokens.L.spacing200||"1rem"};
`,ScrollDot=styled_components_browser_esm.I4.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({$active})=>$active?designTokens.L.primary||"#454cbf":designTokens.L.outline||"#dee2e6"};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background: ${designTokens.L.primary||"#454cbf"};
    transform: scale(1.2);
  }

  &:focus-visible {
    outline: 2px solid ${designTokens.L.primary||"#454cbf"};
    outline-offset: 2px;
  }
`,LoadingOverlay=styled_components_browser_esm.I4.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  z-index: 20;
`;try{GridWrapper.displayName="GridWrapper",GridWrapper.__docgenInfo={description:"",displayName:"GridWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#GridWrapper"]={docgenInfo:GridWrapper.__docgenInfo,name:"GridWrapper",path:"src/core-components/src/components/DynamicGrid/elements.tsx#GridWrapper"})}catch(__react_docgen_typescript_loader_error){}try{GridContainer.displayName="GridContainer",GridContainer.__docgenInfo={description:"",displayName:"GridContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#GridContainer"]={docgenInfo:GridContainer.__docgenInfo,name:"GridContainer",path:"src/core-components/src/components/DynamicGrid/elements.tsx#GridContainer"})}catch(__react_docgen_typescript_loader_error){}try{GridItem.displayName="GridItem",GridItem.__docgenInfo={description:"",displayName:"GridItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#GridItem"]={docgenInfo:GridItem.__docgenInfo,name:"GridItem",path:"src/core-components/src/components/DynamicGrid/elements.tsx#GridItem"})}catch(__react_docgen_typescript_loader_error){}try{SkeletonItem.displayName="SkeletonItem",SkeletonItem.__docgenInfo={description:"",displayName:"SkeletonItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#SkeletonItem"]={docgenInfo:SkeletonItem.__docgenInfo,name:"SkeletonItem",path:"src/core-components/src/components/DynamicGrid/elements.tsx#SkeletonItem"})}catch(__react_docgen_typescript_loader_error){}try{EmptyState.displayName="EmptyState",EmptyState.__docgenInfo={description:"",displayName:"EmptyState",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#EmptyState"]={docgenInfo:EmptyState.__docgenInfo,name:"EmptyState",path:"src/core-components/src/components/DynamicGrid/elements.tsx#EmptyState"})}catch(__react_docgen_typescript_loader_error){}try{ScrollArrow.displayName="ScrollArrow",ScrollArrow.__docgenInfo={description:"",displayName:"ScrollArrow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#ScrollArrow"]={docgenInfo:ScrollArrow.__docgenInfo,name:"ScrollArrow",path:"src/core-components/src/components/DynamicGrid/elements.tsx#ScrollArrow"})}catch(__react_docgen_typescript_loader_error){}try{ScrollDots.displayName="ScrollDots",ScrollDots.__docgenInfo={description:"",displayName:"ScrollDots",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#ScrollDots"]={docgenInfo:ScrollDots.__docgenInfo,name:"ScrollDots",path:"src/core-components/src/components/DynamicGrid/elements.tsx#ScrollDots"})}catch(__react_docgen_typescript_loader_error){}try{ScrollDot.displayName="ScrollDot",ScrollDot.__docgenInfo={description:"",displayName:"ScrollDot",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#ScrollDot"]={docgenInfo:ScrollDot.__docgenInfo,name:"ScrollDot",path:"src/core-components/src/components/DynamicGrid/elements.tsx#ScrollDot"})}catch(__react_docgen_typescript_loader_error){}try{LoadingOverlay.displayName="LoadingOverlay",LoadingOverlay.__docgenInfo={description:"",displayName:"LoadingOverlay",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/elements.tsx#LoadingOverlay"]={docgenInfo:LoadingOverlay.__docgenInfo,name:"LoadingOverlay",path:"src/core-components/src/components/DynamicGrid/elements.tsx#LoadingOverlay"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/core-components/src/components/DynamicGrid/types.ts"),DynamicGrid_utils=__webpack_require__("./src/core-components/src/components/DynamicGrid/utils.ts");const GridContext=(0,react.createContext)(null),ChevronLeftIcon=()=>react.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},react.createElement("polyline",{points:"15 18 9 12 15 6"})),ChevronRightIcon=()=>react.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},react.createElement("polyline",{points:"9 18 15 12 9 6"})),EmptyIcon=()=>react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},react.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),react.createElement("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),react.createElement("line",{x1:"15",y1:"9",x2:"9",y2:"15"})),DefaultEmptyState=()=>react.createElement(EmptyState,null,react.createElement(EmptyIcon,null),react.createElement("p",{className:(0,utils.cn)(tc_module_default()["text-gray-500"],tc_module_default()["text-sm"])},"No items to display")),DefaultSkeleton=({aspectRatio})=>react.createElement(SkeletonItem,{$aspectRatio:aspectRatio}),DynamicGrid=(0,react.forwardRef)((function DynamicGridComponent(props,fRef){const{children,minWidth=10,maxWidth,columns:fixedColumns,responsiveColumns,maxColumns=1/0,maxRows,autoFit=!1,modulo=1,gap="md",rowGap,columnGap,variant="default",alignItems,justifyItems,alignContent,justifyContent,scroll,scrollEnabled,animation,itemConfig,role="none",elementRole,ariaLabel,isLoading=!1,skeletonCount=6,renderSkeleton,emptyState,onLayoutChange,onScrollChange,className,style,containerClassName,itemClassName,...rest}=props,innerRef=(0,react.useRef)(null),gridRef=(0,react.useRef)(null),[elementWidth,setElementWidth]=(0,react.useState)(0),windowWidth=(0,DynamicGrid_utils.SO)(),scrollConfig=(0,react.useMemo)((()=>scroll?.enabled||scrollEnabled?{enabled:!0,scrollHint:scroll?.scrollHint??.5,hideScrollbar:scroll?.hideScrollbar??!1,scrollSnapAlign:scroll?.scrollSnapAlign??"start",smoothScroll:scroll?.smoothScroll??!0,showArrows:scroll?.showArrows??!0,showDots:scroll?.showDots??!1,...scroll}:void 0),[scroll,scrollEnabled]),handleResize=(0,react.useCallback)((width=>{setElementWidth(width)}),[]);(0,DynamicGrid_utils.y_)(innerRef,handleResize);const calculatedColumns=(0,react.useMemo)((()=>{if(fixedColumns)return fixedColumns;if(responsiveColumns)return(0,DynamicGrid_utils.ys)(responsiveColumns,windowWidth);const gapValue=(0,DynamicGrid_utils.GB)(gap);return(0,DynamicGrid_utils.hz)({minWidth,elementWidth,gap:gapValue,modulo,maxColumns,scrollHint:scrollConfig?.scrollHint})}),[fixedColumns,responsiveColumns,windowWidth,minWidth,elementWidth,gap,modulo,maxColumns,scrollConfig?.scrollHint]);(0,DynamicGrid_utils.hP)(gridRef,scrollConfig);const itemCount=(0,DynamicGrid_utils.vS)(children),scrollNav=(0,DynamicGrid_utils.pl)(gridRef,itemCount,calculatedColumns);react.useEffect((()=>{if(onLayoutChange){const rows=Math.ceil(itemCount/calculatedColumns);onLayoutChange(calculatedColumns,rows)}}),[calculatedColumns,itemCount,onLayoutChange]);const gapValue=(0,DynamicGrid_utils.GB)(gap),rowGapValue=rowGap?types.Q3[rowGap]:void 0,columnGapValue=columnGap?types.Q3[columnGap]:void 0,processedChildren=(0,react.useMemo)((()=>react.Children.toArray(children).map(((child,index)=>react.createElement(GridItem,{key:index,$animation:animation,$animationIndex:index,$borderRadius:itemConfig?.borderRadius,$padding:itemConfig?.padding,$aspectRatio:itemConfig?.aspectRatio,className:itemClassName},child)))),[children,animation,itemConfig,itemClassName]),gridRole=role||elementRole||"none",renderChildren=(0,react.useMemo)((()=>"list"===gridRole?processedChildren.map(((child,index)=>react.createElement("li",{key:index,style:{display:"contents"}},child))):processedChildren),[processedChildren,gridRole]),skeletons=(0,react.useMemo)((()=>isLoading?Array.from({length:skeletonCount},((_,index)=>react.createElement(GridItem,{key:`skeleton-${index}`,$animation:{enabled:!0,type:"fade",duration:200},$animationIndex:index,$borderRadius:itemConfig?.borderRadius,$aspectRatio:itemConfig?.aspectRatio},renderSkeleton?renderSkeleton():react.createElement(DefaultSkeleton,{aspectRatio:itemConfig?.aspectRatio})))):null),[isLoading,skeletonCount,renderSkeleton,itemConfig]),isEmpty=!isLoading&&0===itemCount,contextValue=(0,react.useMemo)((()=>({columns:calculatedColumns,gap:gapValue,variant,itemConfig})),[calculatedColumns,gapValue,variant,itemConfig]);return react.createElement(GridContext.Provider,{value:contextValue},react.createElement(GridWrapper,{ref:innerRef,$variant:variant,className:(0,utils.cn)(containerClassName,className),style,"data-aui":"dynamic-grid",...rest},react.createElement(GridContainer,{ref:gridRef,as:"list"===gridRole?"ul":"div",role:"grid"===gridRole?"grid":void 0,"aria-label":ariaLabel,$columns:calculatedColumns,$minWidth:minWidth,$maxWidth:maxWidth,$gap:gapValue,$rowGap:rowGapValue,$columnGap:columnGapValue,$autoFit:autoFit,$maxRows:maxRows,$alignItems:alignItems,$justifyItems:justifyItems,$alignContent:alignContent,$justifyContent:justifyContent,$scroll:scrollConfig,$animation:animation,$variant:variant},isLoading?skeletons:isEmpty?null:renderChildren),isEmpty&&(emptyState||react.createElement(DefaultEmptyState,null)),scrollConfig?.enabled&&scrollConfig.showArrows&&!isEmpty&&react.createElement(react.Fragment,null,react.createElement(ScrollArrow,{$direction:"left",$visible:scrollNav.canScrollLeft,onClick:scrollNav.scrollLeft,"aria-label":"Scroll left",disabled:!scrollNav.canScrollLeft},react.createElement(ChevronLeftIcon,null)),react.createElement(ScrollArrow,{$direction:"right",$visible:scrollNav.canScrollRight,onClick:scrollNav.scrollRight,"aria-label":"Scroll right",disabled:!scrollNav.canScrollRight},react.createElement(ChevronRightIcon,null))),scrollConfig?.enabled&&scrollConfig.showDots&&!isEmpty&&react.createElement(ScrollDots,null,Array.from({length:scrollNav.totalPages},((_,index)=>react.createElement(ScrollDot,{key:index,$active:index===scrollNav.currentPage,onClick:()=>scrollNav.scrollTo(index),"aria-label":`Go to page ${index+1}`}))))))})),DynamicGridItem=(0,react.forwardRef)((function DynamicGridItemComponent({children,colSpan,rowSpan,order,alignSelf,justifySelf,className,...rest},ref){const gridContext=(0,react.useContext)(GridContext);return react.createElement(GridItem,{ref,$colSpan:colSpan,$rowSpan:rowSpan,$order:order,$alignSelf:alignSelf,$justifySelf:justifySelf,$borderRadius:gridContext?.itemConfig?.borderRadius,$padding:gridContext?.itemConfig?.padding,className,...rest},children)}));DynamicGrid.displayName="DynamicGrid",DynamicGridItem.displayName="DynamicGridItem";try{DynamicGrid.displayName="DynamicGrid",DynamicGrid.__docgenInfo={description:"",displayName:"DynamicGrid",props:{children:{defaultValue:null,description:"Children elements",name:"children",required:!1,type:{name:"ReactNode"}},minWidth:{defaultValue:null,description:"Minimum width of grid items (in rem)",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"Maximum width of grid items (in rem)",name:"maxWidth",required:!1,type:{name:"number"}},columns:{defaultValue:null,description:"Fixed number of columns (overrides responsive)",name:"columns",required:!1,type:{name:"number"}},responsiveColumns:{defaultValue:null,description:"Responsive column configuration",name:"responsiveColumns",required:!1,type:{name:"ResponsiveColumns"}},maxColumns:{defaultValue:null,description:"Maximum number of columns",name:"maxColumns",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display",name:"maxRows",required:!1,type:{name:"number"}},autoFit:{defaultValue:null,description:"Use auto-fit for flexible column sizing",name:"autoFit",required:!1,type:{name:"boolean"}},modulo:{defaultValue:null,description:"Column modulo (columns must be divisible by this)",name:"modulo",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"Gap between items",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:"2"},{value:"3"},{value:"4"},{value:"1"},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},rowGap:{defaultValue:null,description:"Row gap (overrides gap for rows)",name:"rowGap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},columnGap:{defaultValue:null,description:"Column gap (overrides gap for columns)",name:"columnGap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},variant:{defaultValue:null,description:"Visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"contained"'},{value:'"card"'},{value:'"masonry"'}]}},alignItems:{defaultValue:null,description:"Item alignment",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},justifyItems:{defaultValue:null,description:"Item justification",name:"justifyItems",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},alignContent:{defaultValue:null,description:"Content alignment",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},justifyContent:{defaultValue:null,description:"Content justification",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},scroll:{defaultValue:null,description:"Scroll configuration",name:"scroll",required:!1,type:{name:"ScrollConfig"}},scrollEnabled:{defaultValue:null,description:"@deprecated Use scroll.enabled instead",name:"scrollEnabled",required:!1,type:{name:"boolean"}},animation:{defaultValue:null,description:"Animation configuration",name:"animation",required:!1,type:{name:"AnimationConfig"}},itemConfig:{defaultValue:null,description:"Grid item configuration",name:"itemConfig",required:!1,type:{name:"GridItemConfig"}},role:{defaultValue:null,description:"ARIA role for the grid",name:"role",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grid"'},{value:'"list"'}]}},elementRole:{defaultValue:null,description:"@deprecated Use role instead",name:"elementRole",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"grid"'},{value:'"list"'}]}},ariaLabel:{defaultValue:null,description:"ARIA label",name:"ariaLabel",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"Loading state",name:"isLoading",required:!1,type:{name:"boolean"}},skeletonCount:{defaultValue:null,description:"Number of skeleton items to show when loading",name:"skeletonCount",required:!1,type:{name:"number"}},renderSkeleton:{defaultValue:null,description:"Custom skeleton component",name:"renderSkeleton",required:!1,type:{name:"(() => ReactNode)"}},emptyState:{defaultValue:null,description:"Empty state content",name:"emptyState",required:!1,type:{name:"ReactNode"}},onLayoutChange:{defaultValue:null,description:"Called when grid layout changes",name:"onLayoutChange",required:!1,type:{name:"((columns: number, rows: number) => void)"}},onScrollChange:{defaultValue:null,description:"Called when scroll position changes",name:"onScrollChange",required:!1,type:{name:"((scrollLeft: number, scrollWidth: number) => void)"}},className:{defaultValue:null,description:"Additional class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styles",name:"style",required:!1,type:{name:"CSSProperties"}},containerClassName:{defaultValue:null,description:"Container class name",name:"containerClassName",required:!1,type:{name:"string"}},itemClassName:{defaultValue:null,description:"Item wrapper class name",name:"itemClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/src/components/DynamicGrid/DynamicGrid.tsx#DynamicGrid"]={docgenInfo:DynamicGrid.__docgenInfo,name:"DynamicGrid",path:"src/core-components/src/components/DynamicGrid/DynamicGrid.tsx#DynamicGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/src/components/DynamicGrid/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CA:()=>GRID_VARIANTS,Q3:()=>gapSizeValues,ip:()=>GAP_SIZES,xH:()=>gapSizes});__webpack_require__("./node_modules/react/index.js");const GAP_SIZES=["none","xs","sm","md","lg","xl","2xl"],gapSizeValues={none:"0",xs:"0.25rem",sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem"},gapSizes={0:"0.5rem",1:"0.75rem",2:"1rem",3:"1.5rem",4:"2rem"},GRID_VARIANTS=["default","contained","card","masonry"]},"./src/core-components/src/components/DynamicGrid/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GB:()=>getGapValue,SO:()=>useWindowWidth,hP:()=>useScrollToKeyboardFocus,hz:()=>calcColumns,pl:()=>useScrollNavigation,vS:()=>getItemCount,y_:()=>useElementResize,ys:()=>getResponsiveColumns});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/src/components/DynamicGrid/types.ts");const BREAKPOINTS_xs=0,BREAKPOINTS_sm=375,BREAKPOINTS_md=768,BREAKPOINTS_lg=1024,BREAKPOINTS_xl=1280,BREAKPOINTS_2xl=1440,getGapValue=gap=>"number"==typeof gap?_types__WEBPACK_IMPORTED_MODULE_1__.xH[gap]||_types__WEBPACK_IMPORTED_MODULE_1__.xH[1]:_types__WEBPACK_IMPORTED_MODULE_1__.Q3[gap]||_types__WEBPACK_IMPORTED_MODULE_1__.Q3.md,calcColumns=({minWidth,elementWidth,gap,modulo,maxColumns,scrollHint=0})=>{if(0===elementWidth)return 1;const gapSize=parseFloat(gap),elementWidthInRem=elementWidth/16;const columns=Math.min(Math.floor((elementWidthInRem+gapSize-minWidth*scrollHint)/(minWidth+gapSize)),maxColumns);return Math.max(1,((columns,modulo)=>Math.floor(columns/modulo)*modulo)(columns,modulo))},getResponsiveColumns=(responsiveColumns,windowWidth)=>{let columns=1;return void 0!==responsiveColumns.xs&&windowWidth>=BREAKPOINTS_xs&&(columns=responsiveColumns.xs),void 0!==responsiveColumns.sm&&windowWidth>=BREAKPOINTS_sm&&(columns=responsiveColumns.sm),void 0!==responsiveColumns.md&&windowWidth>=BREAKPOINTS_md&&(columns=responsiveColumns.md),void 0!==responsiveColumns.lg&&windowWidth>=BREAKPOINTS_lg&&(columns=responsiveColumns.lg),void 0!==responsiveColumns.xl&&windowWidth>=BREAKPOINTS_xl&&(columns=responsiveColumns.xl),void 0!==responsiveColumns["2xl"]&&windowWidth>=BREAKPOINTS_2xl&&(columns=responsiveColumns["2xl"]),columns},useWindowWidth=()=>{const[width,setWidth]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("undefined"!=typeof window?window.innerWidth:1024);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("undefined"==typeof window)return;const handleResize=()=>{setWidth(window.innerWidth)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)}),[]),width},useElementResize=(ref,callback)=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(!element)return;if(callback(element.clientWidth,element.clientHeight),!window.ResizeObserver)return;const observer=new ResizeObserver((entries=>{window.requestAnimationFrame((()=>{const entry=entries[0];entry&&callback(entry.contentRect.width,entry.contentRect.height)}))}));return observer.observe(element),()=>observer.disconnect()}),[ref,callback])},useScrollToKeyboardFocus=(ref,scroll)=>{const scrollToFocused=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((keyboardEvent=>{const{target}=keyboardEvent;target instanceof HTMLElement&&scroll?.enabled&&"Tab"===keyboardEvent.key&&target.scrollIntoView({inline:"center",block:"nearest",behavior:!1!==scroll.smoothScroll?"smooth":"auto"})}),[scroll]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return element.addEventListener("keyup",scrollToFocused),()=>{element.removeEventListener("keyup",scrollToFocused)}}),[scrollToFocused,ref])},useScrollNavigation=(ref,itemCount,columns)=>{const[scrollState,setScrollState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({canScrollLeft:!1,canScrollRight:!0,currentPage:0}),totalPages=Math.ceil(itemCount/columns);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(!element)return;const handleScroll=()=>{const{scrollLeft,scrollWidth,clientWidth}=element,canScrollLeft=scrollLeft>0,canScrollRight=scrollLeft+clientWidth<scrollWidth-1,currentPage=Math.round(scrollLeft/clientWidth);setScrollState({canScrollLeft,canScrollRight,currentPage})};return element.addEventListener("scroll",handleScroll),handleScroll(),()=>element.removeEventListener("scroll",handleScroll)}),[ref]);const scrollTo=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index=>{const element=ref.current;if(!element)return;const{clientWidth}=element;element.scrollTo({left:index*clientWidth,behavior:"smooth"})}),[ref]),scrollLeft=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{scrollState.currentPage>0&&scrollTo(scrollState.currentPage-1)}),[scrollState.currentPage,scrollTo]),scrollRight=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{scrollState.currentPage<totalPages-1&&scrollTo(scrollState.currentPage+1)}),[scrollState.currentPage,totalPages,scrollTo]);return{...scrollState,totalPages,scrollTo,scrollLeft,scrollRight}},getItemCount=children=>children?Array.isArray(children)?children.filter(Boolean).length:1:0}}]);
//# sourceMappingURL=5928.036e189e.iframe.bundle.js.map