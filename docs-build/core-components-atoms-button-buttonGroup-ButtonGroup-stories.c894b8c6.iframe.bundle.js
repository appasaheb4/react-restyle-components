"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[7],{"./src/core-components/atoms/button/buttonGroup/ButtonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/atoms/tooltip/tooltip.component.tsx"),_buttonGroup_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/core-components/atoms/button/buttonGroup/buttonGroup.component.tsx"),_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/core-components/atoms/button/button.component.tsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/dist/development/chunk-D52XG6IA.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Button/ButtonGroup",parameters:{componentSubtitle:"A container for grouping buttons together. Used when you want no space between buttons. Can also be used to create a split button using a Button and a DropdownMenu."},component:_buttonGroup_component__WEBPACK_IMPORTED_MODULE_2__.e,tags:["autodocs"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Kd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__.B,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))))]},Basic={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_component__WEBPACK_IMPORTED_MODULE_3__.$,null,"Button 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_component__WEBPACK_IMPORTED_MODULE_3__.$,null,"Button 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_component__WEBPACK_IMPORTED_MODULE_3__.$,null,"Button 3"))}},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <Button>Button 1</Button>\n        <Button>Button 2</Button>\n        <Button>Button 3</Button>\n      </>\n  }\n}",...Basic.parameters?.docs?.source},description:{story:"At its simplest you can just wrap any `Button` elements in a `ButtonGroup`.\n\nAll props for button scale, variant, etc stay on the Button.\nYou should use the same scale for all buttons in a group but could mix and match variants and levels.",...Basic.parameters?.docs?.description}}};try{Basic.displayName="Basic",Basic.__docgenInfo={description:"At its simplest you can just wrap any `Button` elements in a `ButtonGroup`.\n\nAll props for button scale, variant, etc stay on the Button.\nYou should use the same scale for all buttons in a group but could mix and match variants and levels.",displayName:"Basic",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/atoms/button/buttonGroup/ButtonGroup.stories.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"src/core-components/atoms/button/buttonGroup/ButtonGroup.stories.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/atoms/button/button.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/core-components/atoms/tooltip/tooltip.component.tsx");__webpack_require__("./src/tc.css");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({variant="solid",tooltip,disabled=!1,type="button",className,children,...args},ref)=>{const buttonColorClass="solid"===variant?"text-white bg-[#007BFF] hover:bg-[#007BFF] hover:shadow-lg text-white":"dark:text-white  text-black border border-gray-400 hover:shadow-lg",button=react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{ref,...args,className:`${className} rounded-100px px-3 py-1  text-md ${buttonColorClass} pt-2 pb-2 font-nunitoSansRegular ${disabled?"opacity-50":"opacity-100"}`,type,disabled},children);return tooltip?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__.m,{content:tooltip},button):button}));Button.displayName="Button"},"./src/core-components/atoms/button/buttonGroup/buttonGroup.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./src/tc.css");const ButtonGroup=({children,orientation="horizontal",className})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`flex ${"horizontal"==orientation?"flex-row":"flex-col"} w-fit gap-2 ${className}`},children);try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/atoms/button/buttonGroup/buttonGroup.component.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/core-components/atoms/button/buttonGroup/buttonGroup.component.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/atoms/tooltip/tooltip.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>TooltipProvider,m:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs");const Tooltip=({align="center",side="bottom",children,content,avoidCollisions=!0,alignOffset=0,sideOffset=5,disabled=!1,delay=400,className})=>{const isChildrenString="string"==typeof children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.bL,{delayDuration:delay},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.l9,{asChild:!isChildrenString,disabled,className},children),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.ZL,null,!disabled&&content&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.UC,{className,avoidCollisions,side,align,alignOffset,sideOffset},content,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.i3,{className}))))},TooltipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Kq;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"The `Tooltip` must be nested somewhere inside the `TooltipProvider` in the component tree.",displayName:"Tooltip",props:{className:{defaultValue:null,description:"custom classname to pass to the tooltip element",name:"className",required:!1,type:{name:"string"}},delay:{defaultValue:{value:"400"},description:"The delay (in ms) before showing the tooltip",name:"delay",required:!1,type:{name:"number"}},side:{defaultValue:{value:"bottom"},description:"Sets the preferred position relative to the trigger",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},sideOffset:{defaultValue:{value:"5"},description:"Space between the tooltip element and anchor element (arrow not included in calculation)",name:"sideOffset",required:!1,type:{name:"number"}},content:{defaultValue:null,description:"Use this to set the content of the tooltip",name:"content",required:!1,type:{name:"ReactNode"}},align:{defaultValue:{value:"center"},description:"Sets the preferred alignment relative to the trigger & position",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},alignOffset:{defaultValue:{value:"0"},description:"Space between alignment point and tooltip",name:"alignOffset",required:!1,type:{name:"number"}},avoidCollisions:{defaultValue:{value:"true"},description:"If set to true then in the case of collision finds the alternate ways by changing the position or aligment or both to properly display tooltip",name:"avoidCollisions",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Set true to prevent tooltip from displaying",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/atoms/tooltip/tooltip.component.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/core-components/atoms/tooltip/tooltip.component.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}try{TooltipProvider.displayName="TooltipProvider",TooltipProvider.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/atoms/tooltip/tooltip.component.tsx#TooltipProvider"]={docgenInfo:TooltipProvider.__docgenInfo,name:"TooltipProvider",path:"src/core-components/atoms/tooltip/tooltip.component.tsx#TooltipProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);