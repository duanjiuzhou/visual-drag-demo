(this["webpackJsonpvisual-drag-demo"]=this["webpackJsonpvisual-drag-demo"]||[]).push([[2],{155:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}var i=n(0),c=n.n(i),u=n(50),s=n.n(u),d=Object(i.createContext)({});function f(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=n(426),v={};function g(e,t){}var b=function(e,t){!function(e,t,n){t||v[n]||(e(!1,n),v[n]=!0)}(g,e,t)},h="rc-util-key";function C(e){return e.attachTo||document.querySelector("head")||document.body}function O(e,t){var n=1<arguments.length&&void 0!==t?t:{};if("undefined"==typeof window||!window.document||!window.document.createElement)return null;var r=document.createElement("style");null!==(t=n.csp)&&void 0!==t&&t.nonce&&(r.nonce=null===(o=n.csp)||void 0===o?void 0:o.nonce),r.innerHTML=e;var o=C(n);e=o.firstChild;return n.prepend&&o.prepend?o.prepend(r):n.prepend&&e?o.insertBefore(r,e):o.appendChild(r),r}var w=new Map;function x(e){return"object"===m(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===m(e.icon)||"function"==typeof e.icon)}function j(e){var t=0<arguments.length&&void 0!==e?e:{};return Object.keys(t).reduce((function(e,n){var r=t[n];return"class"===n?(e.className=r,delete e.class):e[n]=r,e}),{})}function P(e){return Object(y.generate)(e)[0]}function N(e){return e?Array.isArray(e)?e:[e]:[]}var E={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};(n=function(e){var t=e.icon,n=e.className,r=e.onClick,o=e.style,a=e.primaryColor,u=e.secondaryColor,s=l(e,["icon","className","onClick","style","primaryColor","secondaryColor"]);e=E;return a&&(e={primaryColor:a,secondaryColor:u||P(a)}),function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",t=Object(i.useContext)(d).csp;Object(i.useEffect)((function(){!function(e,t,n){var r=2<arguments.length&&void 0!==n?n:{},o=C(r);w.has(o)||(n=(l=O("",r)).parentNode,w.set(o,n),n.removeChild(l));var a,l=Array.from(w.get(o).children).find((function(e){return"STYLE"===e.tagName&&e[h]===t}));l?(null!==(o=r.csp)&&void 0!==o&&o.nonce&&l.nonce!==(null===(a=r.csp)||void 0===a?void 0:a.nonce)&&(l.nonce=null===(a=r.csp)||void 0===a?void 0:a.nonce),l.innerHTML!==e&&(l.innerHTML=e)):(r=O(e,r))[h]=t}(e,"@ant-design-icons",{prepend:!0,csp:t})}),[])}(),u=x(t),a="icon should be icon definiton, but got ".concat(t),b(u,"[@ant-design/icons] ".concat(a)),x(t)?function e(t,n,r){return r?c.a.createElement(t.tag,p(p({key:n},j(t.attrs)),r),(t.children||[]).map((function(r,o){return e(r,"".concat(n,"-").concat(t.tag,"-").concat(o))}))):c.a.createElement(t.tag,p({key:n},j(t.attrs)),(t.children||[]).map((function(r,o){return e(r,"".concat(n,"-").concat(t.tag,"-").concat(o))})))}((t=t&&"function"==typeof t.icon?p(p({},t),{},{icon:t.icon(e.primaryColor,e.secondaryColor)}):t).icon,"svg-".concat(t.name),p({className:n,onClick:r,style:o,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s)):null}).displayName="IconReact",n.getTwoToneColors=function(){return p({},E)},n.setTwoToneColors=function(e){var t=e.primaryColor;e=e.secondaryColor;E.primaryColor=t,E.secondaryColor=e||P(t),E.calculated=!!e};var k=n;function M(e){e=(t=o(N(e),2))[0];var t=t[1];return k.setTwoToneColors({primaryColor:e,secondaryColor:t})}M("#1890ff"),(n=i.forwardRef((function(e,t){var n=e.className,r=e.icon,c=e.spin,u=e.rotate,f=e.tabIndex,p=e.onClick,m=e.twoToneColor,y=l(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),v=(e=void 0===(v=i.useContext(d).prefixCls)?"anticon":v,s()(e,(a(v={},"".concat(e,"-").concat(r.name),!!r.name),a(v,"".concat(e,"-spin"),!!c||"loading"===r.name),v),n));return void 0===(n=f)&&p&&(n=-1),f=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,m=(u=o(N(m),2))[0],u=u[1],i.createElement("span",Object.assign({role:"img","aria-label":r.name},y,{ref:t,tabIndex:n,onClick:p,className:v}),i.createElement(k,{icon:r,primaryColor:m,secondaryColor:u,style:f}))}))).displayName="AntdIcon",n.getTwoToneColor=function(){var e=k.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},n.setTwoToneColor=M,t.a=n},209:function(e,t,n){"use strict";var r=n(51),o=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SiderContext=void 0;var a=r(n(56)),l=r(n(53)),i=r(n(64)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=g(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),u=r(n(50)),s=r(n(87)),d=r(n(535)),f=r(n(210)),p=r(n(540)),m=n(274),y=n(55),v=r(n(543));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}var b={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},h=c.createContext({});t.SiderContext=h;var C,O=(C=0,function(){return C+=1,"".concat(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").concat(C)});(n=c.forwardRef((function(e,t){var n,r=e.prefixCls,o=e.className,g=e.trigger,C=e.children,w=void 0!==(n=e.defaultCollapsed)&&n,x=void 0===(n=e.theme)?"dark":n,j=void 0===(n=e.style)?{}:n,P=void 0!==(n=e.collapsible)&&n,N=void 0!==(n=e.reverseArrow)&&n,E=void 0===(n=e.width)?200:n,k=void 0===(n=e.collapsedWidth)?80:n,M=e.zeroWidthTriggerStyle,S=e.breakpoint,_=e.onCollapse,I=e.onBreakpoint,T=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),W=(0,c.useContext)(m.LayoutContext).siderHook,L=(w=(0,c.useState)("collapsed"in T?T.collapsed:w),(w=(0,i.default)(w,2))[0]),z=w[1],D=(w=(0,c.useState)(!1),(w=(0,i.default)(w,2))[0]),A=w[1];function H(e,t){"collapsed"in T||z(e),null!=_&&_(e,t)}(0,c.useEffect)((function(){"collapsed"in T&&z(T.collapsed)}),[T.collapsed]);var F=(0,c.useRef)();function B(){H(!L,"clickTrigger")}F.current=function(e){A(e.matches),null!=I&&I(e.matches),L!==e.matches&&H(e.matches,"responsive")},(0,c.useEffect)((function(){function e(e){return F.current(e)}var t;if("undefined"!=typeof window){var n=window.matchMedia;if(n&&S&&S in b){t=n("(max-width: ".concat(b[S],")"));try{t.addEventListener("change",e)}catch(n){t.addListener(e)}e(t)}}return function(){try{null!=t&&t.removeEventListener("change",e)}catch(n){null!=t&&t.removeListener(e)}}}),[]),(0,c.useEffect)((function(){var e=O("ant-sider-");return W.addSider(e),function(){return W.removeSider(e)}}),[]);var R,V,G,J,q,U,Y,$=(0,c.useContext)(y.ConfigContext).getPrefixCls;return c.createElement(h.Provider,{value:{siderCollapsed:L}},(R=$("layout-sider",r),V=(0,s.default)(T,["collapsed"]),G=L?k:E,J=(0,v.default)(G)?"".concat(G,"px"):String(G),q=0===parseFloat(String(k||0))?c.createElement("span",{onClick:B,className:(0,u.default)("".concat(R,"-zero-width-trigger"),"".concat(R,"-zero-width-trigger-").concat(N?"right":"left")),style:M},g||c.createElement(d.default,null)):null,U={expanded:N?c.createElement(f.default,null):c.createElement(p.default,null),collapsed:N?c.createElement(p.default,null):c.createElement(f.default,null)}[L?"collapsed":"expanded"],Y=null!==g?q||c.createElement("div",{className:"".concat(R,"-trigger"),onClick:B,style:{width:J}},g||U):null,G=(0,l.default)((0,l.default)({},j),{flex:"0 0 ".concat(J),maxWidth:J,minWidth:J,width:J}),U=(0,u.default)(R,"".concat(R,"-").concat(x),(U={},(0,a.default)(U,"".concat(R,"-collapsed"),!!L),(0,a.default)(U,"".concat(R,"-has-trigger"),P&&null!==g&&!q),(0,a.default)(U,"".concat(R,"-below"),!!D),(0,a.default)(U,"".concat(R,"-zero-width"),0===parseFloat(J)),U),o),c.createElement("aside",(0,l.default)({className:U},V,{style:G,ref:t}),c.createElement("div",{className:"".concat(R,"-children")},C),P||D&&q?Y:null)))}))).displayName="Sider",t.default=n},220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=(t.default=void 0,n(0).createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),t.default=n},272:function(e,t,n){"use strict";n(72),n(472),n(196)},274:function(e,t,n){"use strict";var r=n(51),o=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Content=t.Footer=t.Header=t.LayoutContext=void 0;var a=r(n(110)),l=r(n(56)),i=r(n(64)),c=r(n(53)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=f(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),s=r(n(50)),d=n(55);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},m=u.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function y(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){function o(r){var o=u.useContext(d.ConfigContext).getPrefixCls,a=r.prefixCls;a=o(t,a);return u.createElement(e,(0,c.default)({prefixCls:a,tagName:n},r))}return o.displayName=r,o}}t.LayoutContext=m;var v=function(e){var t=e.prefixCls,n=e.className,r=e.children,o=e.tagName;e=p(e,["prefixCls","className","children","tagName"]),n=(0,s.default)(t,n);return u.createElement(o,(0,c.default)({className:n},e),r)};r=y({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t=u.useContext(d.ConfigContext).direction,n=u.useState([]),r=(b=(0,i.default)(n,2))[0],o=b[1],f=e.prefixCls,y=e.className,v=e.children,g=e.hasSider,b=(n=e.tagName,p(e,["prefixCls","className","children","hasSider","tagName"]));y=(0,s.default)(f,(e={},(0,l.default)(e,"".concat(f,"-has-sider"),"boolean"==typeof g?g:0<r.length),(0,l.default)(e,"".concat(f,"-rtl"),"rtl"===t),e),y);return u.createElement(m.Provider,{value:{siderHook:{addSider:function(e){o((function(t){return[].concat((0,a.default)(t),[e])}))},removeSider:function(e){o((function(t){return t.filter((function(t){return t!==e}))}))}}}},u.createElement(n,(0,c.default)({className:y},b),v))})),n=y({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(v);t.Header=n,n=y({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(v),t.Footer=n,v=y({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(v),t.Content=v,t.default=r},324:function(e,t,n){"use strict";var r=n(51),o=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=r(n(95)),i=r(n(99)),c=r(n(100)),u=r(n(101)),s=j(n(0)),d=j(n(193)),f=r(n(50)),p=r(n(87)),m=r(n(219)),y=r(n(637)),v=r(n(638)),g=n(55),b=r(n(81)),h=n(209),C=r(n(119)),O=n(91),w=r(n(220));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=x(t))&&t.has(e))return t.get(e);var n,r,a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((r=l?Object.getOwnPropertyDescriptor(e,n):null)&&(r.get||r.set)?Object.defineProperty(a,n,r):a[n]=e[n]);return a.default=e,t&&t.set(e,a),a}var P=function(e){(0,c.default)(n,e);var t=(0,u.default)(n);function n(e){var r;return(0,l.default)(this,n),(r=t.call(this,e)).renderMenu=function(e){var t=e.getPopupContainer,n=e.getPrefixCls,o=e.direction,l=n(),i=(v=r.props).prefixCls,c=v.className,u=v.theme,y=v.expandIcon,v=(e=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(v,["prefixCls","className","theme","expandIcon"]),(0,p.default)(e,["siderCollapsed","collapsedWidth"]));e=r.getInlineCollapsed(),l={horizontal:{motionName:"".concat(l,"-slide-up")},inline:C.default,other:{motionName:"".concat(l,"-zoom-big")}},i=n("menu",i),c=(0,f.default)("".concat(i,"-").concat(u),c);return s.createElement(w.default.Provider,{value:{prefixCls:i,inlineCollapsed:e||!1,antdMenuTheme:u,direction:o,firstLevel:!0}},s.createElement(d.default,(0,a.default)({getPopupContainer:t,overflowedIndicator:s.createElement(m.default,null),overflowedIndicatorPopupClassName:"".concat(i,"-").concat(u)},v,{inlineCollapsed:e,className:c,prefixCls:i,direction:o,defaultMotions:l,expandIcon:(0,O.cloneElement)(y,{className:"".concat(i,"-submenu-expand-icon")})})))},(0,b.default)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),(0,b.default)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),r}return(0,i.default)(n,[{key:"getInlineCollapsed",value:function(){var e,t=(e=this.props).inlineCollapsed;return void 0!==(e=e.siderCollapsed)?e:t}},{key:"render",value:function(){return s.createElement(g.ConfigConsumer,null,this.renderMenu)}}]),n}(s.Component);P.defaultProps={theme:"light"},(n=function(e){(0,c.default)(n,e);var t=(0,u.default)(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,i.default)(n,[{key:"render",value:function(){var e=this;return s.createElement(h.SiderContext.Consumer,null,(function(t){return s.createElement(P,(0,a.default)({},e.props,t))}))}}]),n}(s.Component)).Divider=d.Divider,n.Item=v.default,n.SubMenu=y.default,n.ItemGroup=d.ItemGroup,t.default=n},472:function(e,t,n){},535:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(536))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},536:function(e,t,n){"use strict";var r=n(65),o=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=r(n(537)),i=r(n(68));(n=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))}).displayName="BarsOutlined",n=a.forwardRef(n),t.default=n},537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"}},540:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(541))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},541:function(e,t,n){"use strict";var r=n(65),o=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=r(n(542)),i=r(n(68));(n=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))}).displayName="LeftOutlined",n=a.forwardRef(n),t.default=n},542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"}},543:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},637:function(e,t,n){"use strict";var r=n(51),o=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=f(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),i=n(193),c=r(n(50)),u=r(n(87)),s=r(n(220)),d=n(91);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}n=function(e){var t,n=e.popupClassName,r=e.icon,o=e.title,f=l.useContext(s.default),p=f.prefixCls,m=f.inlineCollapsed,y=f.antdMenuTheme,v=(0,i.useFullPath)();return o=r?(t=(0,d.isValidElement)(o)&&"span"===o.type,l.createElement(l.Fragment,null,(0,d.cloneElement)(r,{className:(0,c.default)((0,d.isValidElement)(r)?null===(r=r.props)||void 0===r?void 0:r.className:"","".concat(p,"-item-icon"))}),t?o:l.createElement("span",{className:"".concat(p,"-title-content")},o))):m&&!v.length&&o&&"string"==typeof o?l.createElement("div",{className:"".concat(p,"-inline-collapsed-noicon")},o.charAt(0)):l.createElement("span",{className:"".concat(p,"-title-content")},o),l.createElement(s.default.Provider,{value:(0,a.default)((0,a.default)({},f),{firstLevel:!1})},l.createElement(i.SubMenu,(0,a.default)({},(0,u.default)(e,["icon"]),{title:o,popupClassName:(0,c.default)(p,"".concat(p,"-").concat(y),n)})))},t.default=n},638:function(e,t,n){"use strict";var r=n(51),o=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=r(n(56)),i=r(n(95)),c=r(n(99)),u=r(n(100)),s=r(n(101)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=h(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),f=n(193),p=r(n(326)),m=r(n(50)),y=r(n(220)),v=r(n(215)),g=n(209),b=n(91);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var C=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};n=function(e){(0,u.default)(n,e);var t=(0,s.default)(n);function n(){var e;return(0,i.default)(this,n),(e=t.apply(this,arguments)).renderItem=function(t){var n=t.siderCollapsed,r=(g=e.context).prefixCls,o=g.firstLevel,i=g.inlineCollapsed,c=g.direction,u=(h=e.props).className,s=h.children,y=(O=e.props).title,g=(t=O.icon,O.danger),h=C(O,["title","icon","danger"]),O=y;return void 0===y?O=o?s:"":!1===y&&(O=""),O={title:O},n||i||(O.title=null,O.visible=!1),s=(0,p.default)(s).length,d.createElement(v.default,(0,a.default)({},O,{placement:"rtl"===c?"left":"right",overlayClassName:"".concat(r,"-inline-collapsed-tooltip")}),d.createElement(f.Item,(0,a.default)({},h,{className:(0,m.default)((h={},(0,l.default)(h,"".concat(r,"-item-danger"),g),(0,l.default)(h,"".concat(r,"-item-only-child"),1===(t?s+1:s)),h),u),title:"string"==typeof y?y:void 0}),(0,b.cloneElement)(t,{className:(0,m.default)((0,b.isValidElement)(t)?null===(t=t.props)||void 0===t?void 0:t.className:"","".concat(r,"-item-icon"))}),e.renderItemChildren(i)))},e}return(0,c.default)(n,[{key:"renderItemChildren",value:function(e){var t=(o=this.context).prefixCls,n=o.firstLevel,r=(a=this.props).icon,o=a.children,a=d.createElement("span",{className:"".concat(t,"-title-content")},o);return(!r||(0,b.isValidElement)(o)&&"span"===o.type)&&o&&e&&n&&"string"==typeof o?d.createElement("div",{className:"".concat(t,"-inline-collapsed-noicon")},o.charAt(0)):a}},{key:"render",value:function(){return d.createElement(g.SiderContext.Consumer,null,this.renderItem)}}]),n}(d.Component);(t.default=n).contextType=y.default}}]);