"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[2933],{3905:function(t,e,l){l.d(e,{Zo:function(){return i},kt:function(){return p}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},i=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),k=d(l),p=r,m=k["".concat(s,".").concat(p)]||k[p]||c[p]||o;return l?n.createElement(m,a(a({ref:e},i),{},{components:l})):n.createElement(m,a({ref:e},i))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,a=new Array(o);a[0]=k;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var d=2;d<o;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},17992:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return i},default:function(){return k}});var n=l(87462),r=l(63366),o=(l(67294),l(3905)),a=["components"],u={sidebar_position:4},s="Swap params",d={unversionedId:"aggregation-protocol/api/swap-params",id:"aggregation-protocol/api/swap-params",isDocsHomePage:!1,title:"Swap params",description:"Generate data for calling the 1inch router for exchange: /api/swap",source:"@site/docs/aggregation-protocol/api/swap-params.mdx",sourceDirName:"aggregation-protocol/api",slug:"/aggregation-protocol/api/swap-params",permalink:"/docs/aggregation-protocol/api/swap-params",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/aggregation-protocol/api/swap-params.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Swagger",permalink:"/docs/aggregation-protocol/api/swagger"},next:{title:"Quote params",permalink:"/docs/aggregation-protocol/api/quote-params"}},i=[{value:"Generate data for calling the 1inch router for exchange: /api/swap",id:"generate-data-for-calling-the-1inch-router-for-exchange-apiswap",children:[{value:"Description of query parameters",id:"description-of-query-parameters",children:[]},{value:"Description of response parameters",id:"description-of-response-parameters",children:[]}]}],c={toc:i};function k(t){var e=t.components,l=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swap-params"},"Swap params"),(0,o.kt)("h2",{id:"generate-data-for-calling-the-1inch-router-for-exchange-apiswap"},"Generate data for calling the 1inch router for exchange: ",(0,o.kt)("a",{parentName:"h2",href:"/docs/aggregation-protocol/api/swagger"},(0,o.kt)("inlineCode",{parentName:"a"},"/api/swap"))),(0,o.kt)("h3",{id:"description-of-query-parameters"},"Description of query parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter name")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fromTokenAddress *")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"contract address of a token to sell",(0,o.kt)("br",null),"e.g.: ",(0,o.kt)("code",null,"0x6b175474e89094c44da98b954eedeac495271d0f"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"toTokenAddress *")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"contract address of a token to buy",(0,o.kt)("br",null),"e.g.: ",(0,o.kt)("code",null,"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"amount *")),(0,o.kt)("td",null,"integer"),(0,o.kt)("td",null,"amount of a token to sell, set in minimal divisible units e.g.:",(0,o.kt)("br",null),(0,o.kt)("code",null,"1.00 DAI")," set as ",(0,o.kt)("code",null,"1000000000000000000"),(0,o.kt)("br",null),(0,o.kt)("code",null,"51.03 USDC")," set as ",(0,o.kt)("code",null,"51030000"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fromAddress *")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"address of a seller, make sure that this address has approved to spend fromTokenAddress in needed amount",(0,o.kt)("br",null),"e.g.: ",(0,o.kt)("code",null,"0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"slippage *")),(0,o.kt)("td",null,"number"),(0,o.kt)("td",null,"limit of price slippage you are willing to accept in percentage, may be set with decimals. &slippage=0.5 means 0.5% slippage is acceptable. Low values increase chances that transaction will fail, high values increase chances of front running. Set values in the range from 0 to 50")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"protocols")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"specify liquidity protocols. If not set, all liquidity protocols will be used; you can disable any protocol by listing all protocols except those you don't need",(0,o.kt)("br",null),"e.g.: ",(0,o.kt)("code",null,"&protocols=WETH,CURVE,BALANCER,...,ZRX"),(0,o.kt)("br",null),(0,o.kt)("code",null,"default: all protocols can be used"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"destReceiver")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"recipient address of a purchased token",(0,o.kt)("br",null),"if not set, fromAddress will receive a purchased token")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"referrerAddress")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"referrer's address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fee")),(0,o.kt)("td",null,"number"),(0,o.kt)("td",null,"this percentage of fromTokenAddress token amount will be sent to referrerAddress, the rest will be used as input for a swap",(0,o.kt)("br",null),(0,o.kt)("code",null,"min: 0;")," ",(0,o.kt)("code",null,"max: 3;")," ",(0,o.kt)("code",null,"default: 0"),(0,o.kt)("br",null),"example to set a fee to 1.5%: ",(0,o.kt)("code",null,"&fee=1.5"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"gasPrice")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"1inch takes in account gas expenses to determine exchange route. It is important to use the same gas price on the quote and swap methods.",(0,o.kt)("br",null),"Gas price set in wei: ",(0,o.kt)("code",null,"12.5 GWEI")," set as ",(0,o.kt)("code",null,"12500000000"),(0,o.kt)("br",null),(0,o.kt)("code",null,'default: "fast" from network'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"permit")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"https://eips.ethereum.org/EIPS/eip-2612")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"burnChi")),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"If true, CHI will be burned from fromAddress to compensate gas. Check CHI balance and allowance before turning that on. CHI should be approved for the spender address",(0,o.kt)("br",null),(0,o.kt)("code",null,"default: false"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"complexityLevel")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"maximum number of token-connectors to be used in a transaction. The more is used \u2014 the longer route estimation will take, the more complex route might be as a result. If not set, two token-connectors may be used",(0,o.kt)("br",null),(0,o.kt)("code",null,"min: 0;")," ",(0,o.kt)("code",null,"max: 3;")," ",(0,o.kt)("code",null,"default: 2"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"connectorTokens")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"token-connectors can be specified via this parameter. The more is set \u2014 the longer route estimation will take. If not set, default token-connectors will be used. If a token you want to exchange doesn't have a pool with one of the default token-connectors this parameter will help find the route; should be the same for a quote and swap ",(0,o.kt)("code",null,"max: 5;"),(0,o.kt)("br",null),"e.g.: ",(0,o.kt)("code",null,"&connectorTokens=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE, 0x6b175474e89094c44da98b954eedeac495271d0f"),(0,o.kt)("br",null),(0,o.kt)("code",null,"default: list of default token-connectors"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"allowPartialFill")),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"if true, the algorithm can cancel part of the route, if the rate has become less attractive. Unswapped tokens will return to the fromAddress",(0,o.kt)("br",null),(0,o.kt)("code",null,"default: true"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"disableEstimate")),(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"if true, disable most of the checks",(0,o.kt)("br",null),(0,o.kt)("code",null,"default: false"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"gasLimit")),(0,o.kt)("td",null,"integer"),(0,o.kt)("td",null,"maximum amount of gas for a swap;",(0,o.kt)("br",null),"should be the same for a quote and swap",(0,o.kt)("br",null),(0,o.kt)("code",null,"default: 11500000;")," ",(0,o.kt)("code",null,"max: 11500000"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"mainRouteParts")),(0,o.kt)("td",null,"integer"),(0,o.kt)("td",null,"limit maximum number of main route parts;",(0,o.kt)("br",null),"should be the same for a quote and swap",(0,o.kt)("br",null),(0,o.kt)("code",null,"default: 20;")," ",(0,o.kt)("code",null,"max: 50"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"parts")),(0,o.kt)("td",null,"integer"),(0,o.kt)("td",null,"limit maximum number of parts each main route parts can be split into; should be the same for a quote and swap",(0,o.kt)("br",null),(0,o.kt)("code",null,"default: 20;")," ",(0,o.kt)("code",null,"max: 100"))))),(0,o.kt)("h3",{id:"description-of-response-parameters"},"Description of response parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter name")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fromToken")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"parameters of a token to sell")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"toToken")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"parameters of a token to buy")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fromTokenAmount")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"input amount of ",(0,o.kt)("code",null,"fromToken")," in minimal divisible units")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"toTokenAmount")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"result amount of ",(0,o.kt)("code",null,"toToken")," in minimal divisible units")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"protocols")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"route of the trade")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"from")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"transactions will be sent from this address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"to")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"transactions will be sent to our contract address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"data")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"bytes of call data")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"value")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"amount of ETH (in wei) will be sent to the contract address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"gasPrice")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"gas price in wei")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"gas")),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"estimated amount of the gas limit, increase this value by 25%")))))}k.isMDXComponent=!0}}]);