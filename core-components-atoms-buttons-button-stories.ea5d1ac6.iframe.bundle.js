"use strict";(self.webpackChunkreact_restyle_components=self.webpackChunkreact_restyle_components||[]).push([[951],{"./src/core-components/atoms/buttons/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=function(param){var className=param.className,disable=param.disable,onClick=param.onClick,children=param.children;return react.createElement("button",{"data-testid":"buttonElement",disabled:disable,className:"".concat(className," rounded-100px px-3 py-1 text-text-base text-md pt-2 pb-2 font-nunitoSansRegular ").concat(disable?"opacity-50":"opacity-100"),onClick:function(){return onClick()}},children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'submit'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'submit'"}]},description:""},className:{required:!1,tsType:{name:"any"},description:""},disable:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const button_stories={title:"Design System/Atoms/Button",component:Button,tags:["autodocs"],args:{className:"bg-orange w-40"}};var Primary={args:{disable:!1,type:"solid",children:react.createElement("span",null,"Primary")}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  // parameters: {\n  //   backgrounds: {\n  //     default: 'dark',\n  //   },\n  // },\n  args: {\n    disable: false,\n    type: 'solid' || 'outline' || 'submit',\n    children: <span>Primary</span>\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);