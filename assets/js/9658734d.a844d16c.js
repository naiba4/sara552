"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[4916],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53744:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={sidebar_position:10},l="Validate a limit order",d={unversionedId:"limit-order-protocol/guide/validate-limit-order",id:"limit-order-protocol/guide/validate-limit-order",isDocsHomePage:!1,title:"Validate a limit order",description:"LimitOrderProtocolFacade.simulateCalls()",source:"@site/docs/limit-order-protocol/guide/validate-limit-order.md",sourceDirName:"limit-order-protocol/guide",slug:"/limit-order-protocol/guide/validate-limit-order",permalink:"/docs/limit-order-protocol/guide/validate-limit-order",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/guide/validate-limit-order.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Limit order remaining",permalink:"/docs/limit-order-protocol/guide/remaining"},next:{title:"Interaction receiver",permalink:"/docs/limit-order-protocol/guide/interactive-receiver"}},s=[{value:"Example:",id:"example",children:[]}],p={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validate-a-limit-order"},"Validate a limit order"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LimitOrderProtocolFacade.simulateCalls()")),(0,i.kt)("p",null,"There is the possibility to check limit order validity.",(0,i.kt)("br",{parentName:"p"}),"\n","For example, you can check that a limit order is valid by predicates."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Under the hood:"),(0,i.kt)("br",{parentName:"p"}),"\n","On a ",(0,i.kt)("inlineCode",{parentName:"p"},"simulateCalls()")," call, the contract returns the string like ",(0,i.kt)("inlineCode",{parentName:"p"},"CALL_RESULTS_01101"),(0,i.kt)("br",{parentName:"p"}),"\n","If that string contains at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," symbol, then a limit order is invalid, otherwise - valid")),(0,i.kt)("h2",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import Web3 from 'web3';\nimport {\n    LimitOrderProtocolFacade,\n    LimitOrder,\n    Web3ProviderConnector\n} from '@1inch/limit-order-protocol';\n\nconst contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';\nconst order: LimitOrder = {...};\n\nconst connector = new Web3ProviderConnector(new Web3('...'));\nconst limitOrderProtocolFacade = new LimitOrderProtocolFacade(contractAddress, connector);\n\nconst addresses = [contractAddress];\nconst callDatas = [order.predicate];\n\ntry {\n    const result: boolean = await limitOrderProtocolFacade.simulateCalls(addresses, callDatas);\n\n    console.log('Order validity: ', result);\n} catch (error) {\n    console.error(error);\n}\n")))}m.isMDXComponent=!0}}]);