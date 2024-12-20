"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[409],{"./src/core-components/molecules/multi-select/multi-select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/MultiSelect",component:__webpack_require__("./src/core-components/molecules/multi-select/multi-select.component.tsx").K,tags:["autodocs"],parameters:{componentSubtitle:"import { MultiSelect } from 'react-restyle-components'"}},Basic={args:{options:["UPI","CARD","CASH"],selectedItems:["CASH","UPI"],onSelect:item=>{console.log({item})}}},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: ['UPI', 'CARD', 'CASH'],\n    selectedItems: ['CASH', 'UPI'],\n    onSelect: item => {\n      console.log({\n        item\n      });\n    }\n  }\n}",...Basic.parameters?.docs?.source}}}},"./src/core-components/molecules/multi-select/multi-select.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>MultiSelect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./src/tc.css");const MultiSelect=({options=[],selectedItems=[],hasError=!1,onSelect})=>{const[selectedOptions,setSelectedOptions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[isListOpen,setIsListOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setSelectedOptions(selectedItems)}),[selectedItems]);const wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var ref;return ref=wrapperRef,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function handleClickOutside(event){ref.current&&!ref.current.contains(event.target)&&isListOpen&&setIsListOpen(!1)}return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[ref,isListOpen]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex dark:bg-boxdark dark:text-white flex-col w-full rounded-md border-2 "+(hasError?"border-red  ":"border-gray-300"),ref:wrapperRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"p-2 mt-1 shadow-sm",onClick:()=>{setIsListOpen(!isListOpen)}},selectedOptions?.length>0?selectedOptions?.join(","):"Select"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`flex ${isListOpen?"show":"hidden"} relative`},options?options?.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex absolute rounded-sm w-full",style:{zIndex:999}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"flex  flex-col gap-1  bg-gray-200 w-full"},options?.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:index,className:"flex gap-2 p-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"flex gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:"flex h-4 w-4",type:"checkbox",checked:selectedOptions?.includes(item),onChange:()=>{selectedOptions?.includes(item)?setSelectedOptions(selectedOptions?.filter((e=>e!=item))):setSelectedOptions(selectedOptions?.length>0?selectedOptions?.concat([item]):[item])},onBlur:()=>{isListOpen||onSelect(selectedOptions)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"flex h-4"},item))))))):null)))};try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"string[]"}},selectedItems:{defaultValue:{value:"[]"},description:"",name:"selectedItems",required:!1,type:{name:"string[]"}},hasError:{defaultValue:{value:"false"},description:"",name:"hasError",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(item: any) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/molecules/multi-select/multi-select.component.tsx#MultiSelect"]={docgenInfo:MultiSelect.__docgenInfo,name:"MultiSelect",path:"src/core-components/molecules/multi-select/multi-select.component.tsx#MultiSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);