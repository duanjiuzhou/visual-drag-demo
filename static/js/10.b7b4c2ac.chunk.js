(this["webpackJsonpvisual-drag-demo"]=this["webpackJsonpvisual-drag-demo"]||[]).push([[10],{205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=(t.default=void 0,n(0).createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),t.default=n},239:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r=function(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}var i=n(0),c=n.n(i),u=n(49),s=n.n(u),d=Object(i.createContext)({});function f(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=n(385),v={};function g(e,t){}var b=function(e,t){!function(e,t,n){t||v[n]||(e(!1,n),v[n]=!0)}(g,e,t)},h="rc-util-key";function C(e){return e.attachTo||document.querySelector("head")||document.body}function O(e,t){var n=1<arguments.length&&void 0!==t?t:{};if("undefined"==typeof window||!window.document||!window.document.createElement)return null;var r=document.createElement("style");null!==(t=n.csp)&&void 0!==t&&t.nonce&&(r.nonce=null===(o=n.csp)||void 0===o?void 0:o.nonce),r.innerHTML=e;var o=C(n);e=o.firstChild;return n.prepend&&o.prepend?o.prepend(r):n.prepend&&e?o.insertBefore(r,e):o.appendChild(r),r}var w=new Map;function x(e){return"object"===m(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===m(e.icon)||"function"==typeof e.icon)}function j(e){var t=0<arguments.length&&void 0!==e?e:{};return Object.keys(t).reduce((function(e,n){var r=t[n];return"class"===n?(e.className=r,delete e.class):e[n]=r,e}),{})}function P(e){return Object(y.generate)(e)[0]}function E(e){return e?Array.isArray(e)?e:[e]:[]}var N={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};(n=function(e){var t=e.icon,n=e.className,r=e.onClick,o=e.style,a=e.primaryColor,u=e.secondaryColor,s=l(e,["icon","className","onClick","style","primaryColor","secondaryColor"]);e=N;return a&&(e={primaryColor:a,secondaryColor:u||P(a)}),function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",t=Object(i.useContext)(d).csp;Object(i.useEffect)((function(){!function(e,t,n){var r=2<arguments.length&&void 0!==n?n:{},o=C(r);w.has(o)||(n=(l=O("",r)).parentNode,w.set(o,n),n.removeChild(l));var a,l=Array.from(w.get(o).children).find((function(e){return"STYLE"===e.tagName&&e[h]===t}));l?(null!==(o=r.csp)&&void 0!==o&&o.nonce&&l.nonce!==(null===(a=r.csp)||void 0===a?void 0:a.nonce)&&(l.nonce=null===(a=r.csp)||void 0===a?void 0:a.nonce),l.innerHTML!==e&&(l.innerHTML=e)):(r=O(e,r))[h]=t}(e,"@ant-design-icons",{prepend:!0,csp:t})}),[])}(),u=x(t),a="icon should be icon definiton, but got ".concat(t),b(u,"[@ant-design/icons] ".concat(a)),x(t)?function e(t,n,r){return r?c.a.createElement(t.tag,p(p({key:n},j(t.attrs)),r),(t.children||[]).map((function(r,o){return e(r,"".concat(n,"-").concat(t.tag,"-").concat(o))}))):c.a.createElement(t.tag,p({key:n},j(t.attrs)),(t.children||[]).map((function(r,o){return e(r,"".concat(n,"-").concat(t.tag,"-").concat(o))})))}((t=t&&"function"==typeof t.icon?p(p({},t),{},{icon:t.icon(e.primaryColor,e.secondaryColor)}):t).icon,"svg-".concat(t.name),p({className:n,onClick:r,style:o,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s)):null}).displayName="IconReact",n.getTwoToneColors=function(){return p({},N)},n.setTwoToneColors=function(e){var t=e.primaryColor;e=e.secondaryColor;N.primaryColor=t,N.secondaryColor=e||P(t),N.calculated=!!e};var M=n;function k(e){e=(t=o(E(e),2))[0];var t=t[1];return M.setTwoToneColors({primaryColor:e,secondaryColor:t})}k("#1890ff"),(n=i.forwardRef((function(e,t){var n=e.className,r=e.icon,c=e.spin,u=e.rotate,f=e.tabIndex,p=e.onClick,m=e.twoToneColor,y=l(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),v=(e=void 0===(v=i.useContext(d).prefixCls)?"anticon":v,s()(e,(a(v={},"".concat(e,"-").concat(r.name),!!r.name),a(v,"".concat(e,"-spin"),!!c||"loading"===r.name),v),n));return void 0===(n=f)&&p&&(n=-1),f=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,m=(u=o(E(m),2))[0],u=u[1],i.createElement("span",Object.assign({role:"img","aria-label":r.name},y,{ref:t,tabIndex:n,onClick:p,className:v}),i.createElement(M,{icon:r,primaryColor:m,secondaryColor:u,style:f}))}))).displayName="AntdIcon",n.getTwoToneColor=function(){var e=M.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},n.setTwoToneColor=k,t.a=n},310:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SiderContext=void 0;var a=r(n(55)),l=r(n(53)),i=r(n(64)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=g(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),u=r(n(49)),s=r(n(83)),d=r(n(663)),f=r(n(198)),p=r(n(666)),m=n(669),y=n(54),v=r(n(670));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}var b={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},h=c.createContext({});t.SiderContext=h;var C,O=(C=0,function(){return C+=1,"".concat(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").concat(C)});(n=c.forwardRef((function(e,t){var n,r=e.prefixCls,o=e.className,g=e.trigger,C=e.children,w=void 0!==(n=e.defaultCollapsed)&&n,x=void 0===(n=e.theme)?"dark":n,j=void 0===(n=e.style)?{}:n,P=void 0!==(n=e.collapsible)&&n,E=void 0!==(n=e.reverseArrow)&&n,N=void 0===(n=e.width)?200:n,M=void 0===(n=e.collapsedWidth)?80:n,k=e.zeroWidthTriggerStyle,S=e.breakpoint,_=e.onCollapse,T=e.onBreakpoint,L=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),D=(0,c.useContext)(m.LayoutContext).siderHook,I=(w=(0,c.useState)("collapsed"in L?L.collapsed:w),(w=(0,i.default)(w,2))[0]),W=w[1],z=(w=(0,c.useState)(!1),(w=(0,i.default)(w,2))[0]),H=w[1];function R(e,t){"collapsed"in L||W(e),null!=_&&_(e,t)}(0,c.useEffect)((function(){"collapsed"in L&&W(L.collapsed)}),[L.collapsed]);var A=(0,c.useRef)();function V(){R(!I,"clickTrigger")}A.current=function(e){H(e.matches),null!=T&&T(e.matches),I!==e.matches&&R(e.matches,"responsive")},(0,c.useEffect)((function(){function e(e){return A.current(e)}var t;if("undefined"!=typeof window){var n=window.matchMedia;if(n&&S&&S in b){t=n("(max-width: ".concat(b[S],")"));try{t.addEventListener("change",e)}catch(n){t.addListener(e)}e(t)}}return function(){try{null!=t&&t.removeEventListener("change",e)}catch(n){null!=t&&t.removeListener(e)}}}),[]),(0,c.useEffect)((function(){var e=O("ant-sider-");return D.addSider(e),function(){return D.removeSider(e)}}),[]);var B,F,G,J,U,q,Y,$=(0,c.useContext)(y.ConfigContext).getPrefixCls;return c.createElement(h.Provider,{value:{siderCollapsed:I}},(B=$("layout-sider",r),F=(0,s.default)(L,["collapsed"]),G=I?M:N,J=(0,v.default)(G)?"".concat(G,"px"):String(G),U=0===parseFloat(String(M||0))?c.createElement("span",{onClick:V,className:(0,u.default)("".concat(B,"-zero-width-trigger"),"".concat(B,"-zero-width-trigger-").concat(E?"right":"left")),style:k},g||c.createElement(d.default,null)):null,q={expanded:E?c.createElement(f.default,null):c.createElement(p.default,null),collapsed:E?c.createElement(p.default,null):c.createElement(f.default,null)}[I?"collapsed":"expanded"],Y=null!==g?U||c.createElement("div",{className:"".concat(B,"-trigger"),onClick:V,style:{width:J}},g||q):null,G=(0,l.default)((0,l.default)({},j),{flex:"0 0 ".concat(J),maxWidth:J,minWidth:J,width:J}),q=(0,u.default)(B,"".concat(B,"-").concat(x),(q={},(0,a.default)(q,"".concat(B,"-collapsed"),!!I),(0,a.default)(q,"".concat(B,"-has-trigger"),P&&null!==g&&!U),(0,a.default)(q,"".concat(B,"-below"),!!z),(0,a.default)(q,"".concat(B,"-zero-width"),0===parseFloat(J)),q),o),c.createElement("aside",(0,l.default)({className:q},F,{style:G,ref:t}),c.createElement("div",{className:"".concat(B,"-children")},C),P||z&&U?Y:null)))}))).displayName="Sider",t.default=n},311:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=r(n(55)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=y(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),c=r(n(407)),u=r(n(49)),s=r(n(198)),d=r(n(672)),f=n(54),p=r(n(84)),m=(r=n(112),n(88));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}(0,r.tuple)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),(r=function(e){var t,n,r,o,d,y=(j=i.useContext(f.ConfigContext)).getPopupContainer,v=j.getPrefixCls,g=j.direction,b=e.arrow,h=e.prefixCls,C=e.children,O=e.trigger,w=e.disabled,x=e.getPopupContainer,j=e.overlayClassName,P=v("dropdown",h);C=i.Children.only(C),C=(0,m.cloneElement)(C,{className:(0,u.default)("".concat(P,"-trigger"),(0,l.default)({},"".concat(P,"-rtl"),"rtl"===g),C.props.className),disabled:w}),j=(0,u.default)(j,(0,l.default)({},"".concat(P,"-rtl"),"rtl"===g));return(O=w?[]:O)&&-1!==O.indexOf("contextMenu")&&(t=!0),i.createElement(c.default,(0,a.default)({arrow:b,alignPoint:t},e,{overlayClassName:j,prefixCls:P,getPopupContainer:x||y,transitionName:(r=v(),o=e.placement,d=void 0===o?"":o,void 0!==(o=e.transitionName)?o:0<=d.indexOf("top")?"".concat(r,"-slide-down"):"".concat(r,"-slide-up")),trigger:O,overlay:function(){return function(t){var n=e.overlay,r="function"==typeof n?n():n,o=(r=i.Children.only("string"==typeof r?i.createElement("span",null,r):r)).props;return(0,p.default)(!o.mode||"vertical"===o.mode,"Dropdown",'mode="'.concat(o.mode,"\" is not supported for Dropdown's Menu.")),n=void 0!==(n=o.selectable)&&n,t=void 0!==(o=o.expandIcon)&&i.isValidElement(o)?o:i.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},i.createElement(s.default,{className:"".concat(t,"-menu-submenu-arrow-icon")})),"string"==typeof r.type?r:(0,m.cloneElement)(r,{mode:"vertical",selectable:n,expandIcon:t})}(P)},placement:void 0!==(n=e.placement)?n:"rtl"===g?"bottomRight":"bottomLeft"}),C)}).Button=d.default,r.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1},t.default=r},422:function(e,t,n){"use strict";n(75),n(423)},423:function(e,t,n){},424:function(e,t,n){"use strict";n(75),n(425),n(145)},425:function(e,t,n){},427:function(e,t,n){"use strict";n(75),n(428),n(180)},428:function(e,t,n){},660:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=r(n(93)),i=r(n(97)),c=r(n(98)),u=r(n(99)),s=j(n(0)),d=j(n(176)),f=r(n(49)),p=r(n(83)),m=r(n(204)),y=r(n(661)),v=r(n(662)),g=n(54),b=r(n(84)),h=n(310),C=r(n(154)),O=n(88),w=r(n(205));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=x(t))&&t.has(e))return t.get(e);var n,r,a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((r=l?Object.getOwnPropertyDescriptor(e,n):null)&&(r.get||r.set)?Object.defineProperty(a,n,r):a[n]=e[n]);return a.default=e,t&&t.set(e,a),a}var P=function(e){(0,c.default)(n,e);var t=(0,u.default)(n);function n(e){var r;return(0,l.default)(this,n),(r=t.call(this,e)).renderMenu=function(e){var t=e.getPopupContainer,n=e.getPrefixCls,o=e.direction,l=n(),i=(v=r.props).prefixCls,c=v.className,u=v.theme,y=v.expandIcon,v=(e=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(v,["prefixCls","className","theme","expandIcon"]),(0,p.default)(e,["siderCollapsed","collapsedWidth"]));e=r.getInlineCollapsed(),l={horizontal:{motionName:"".concat(l,"-slide-up")},inline:C.default,other:{motionName:"".concat(l,"-zoom-big")}},i=n("menu",i),c=(0,f.default)("".concat(i,"-").concat(u),c);return s.createElement(w.default.Provider,{value:{prefixCls:i,inlineCollapsed:e||!1,antdMenuTheme:u,direction:o,firstLevel:!0}},s.createElement(d.default,(0,a.default)({getPopupContainer:t,overflowedIndicator:s.createElement(m.default,null),overflowedIndicatorPopupClassName:"".concat(i,"-").concat(u)},v,{inlineCollapsed:e,className:c,prefixCls:i,direction:o,defaultMotions:l,expandIcon:(0,O.cloneElement)(y,{className:"".concat(i,"-submenu-expand-icon")})})))},(0,b.default)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),(0,b.default)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),r}return(0,i.default)(n,[{key:"getInlineCollapsed",value:function(){var e,t=(e=this.props).inlineCollapsed;return void 0!==(e=e.siderCollapsed)?e:t}},{key:"render",value:function(){return s.createElement(g.ConfigConsumer,null,this.renderMenu)}}]),n}(s.Component);P.defaultProps={theme:"light"},(n=function(e){(0,c.default)(n,e);var t=(0,u.default)(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,i.default)(n,[{key:"render",value:function(){var e=this;return s.createElement(h.SiderContext.Consumer,null,(function(t){return s.createElement(P,(0,a.default)({},e.props,t))}))}}]),n}(s.Component)).Divider=d.Divider,n.Item=v.default,n.SubMenu=y.default,n.ItemGroup=d.ItemGroup,t.default=n},661:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=f(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),i=n(176),c=r(n(49)),u=r(n(83)),s=r(n(205)),d=n(88);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}n=function(e){var t,n=e.popupClassName,r=e.icon,o=e.title,f=l.useContext(s.default),p=f.prefixCls,m=f.inlineCollapsed,y=f.antdMenuTheme,v=(0,i.useFullPath)();return o=r?(t=(0,d.isValidElement)(o)&&"span"===o.type,l.createElement(l.Fragment,null,(0,d.cloneElement)(r,{className:(0,c.default)((0,d.isValidElement)(r)?null===(r=r.props)||void 0===r?void 0:r.className:"","".concat(p,"-item-icon"))}),t?o:l.createElement("span",{className:"".concat(p,"-title-content")},o))):m&&!v.length&&o&&"string"==typeof o?l.createElement("div",{className:"".concat(p,"-inline-collapsed-noicon")},o.charAt(0)):l.createElement("span",{className:"".concat(p,"-title-content")},o),l.createElement(s.default.Provider,{value:(0,a.default)((0,a.default)({},f),{firstLevel:!1})},l.createElement(i.SubMenu,(0,a.default)({},(0,u.default)(e,["icon"]),{title:o,popupClassName:(0,c.default)(p,"".concat(p,"-").concat(y),n)})))},t.default=n},662:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=r(n(55)),i=r(n(93)),c=r(n(97)),u=r(n(98)),s=r(n(99)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=h(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),f=n(176),p=r(n(289)),m=r(n(49)),y=r(n(205)),v=r(n(199)),g=n(310),b=n(88);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var C=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};n=function(e){(0,u.default)(n,e);var t=(0,s.default)(n);function n(){var e;return(0,i.default)(this,n),(e=t.apply(this,arguments)).renderItem=function(t){var n=t.siderCollapsed,r=(g=e.context).prefixCls,o=g.firstLevel,i=g.inlineCollapsed,c=g.direction,u=(h=e.props).className,s=h.children,y=(O=e.props).title,g=(t=O.icon,O.danger),h=C(O,["title","icon","danger"]),O=y;return void 0===y?O=o?s:"":!1===y&&(O=""),O={title:O},n||i||(O.title=null,O.visible=!1),s=(0,p.default)(s).length,d.createElement(v.default,(0,a.default)({},O,{placement:"rtl"===c?"left":"right",overlayClassName:"".concat(r,"-inline-collapsed-tooltip")}),d.createElement(f.Item,(0,a.default)({},h,{className:(0,m.default)((h={},(0,l.default)(h,"".concat(r,"-item-danger"),g),(0,l.default)(h,"".concat(r,"-item-only-child"),1===(t?s+1:s)),h),u),title:"string"==typeof y?y:void 0}),(0,b.cloneElement)(t,{className:(0,m.default)((0,b.isValidElement)(t)?null===(t=t.props)||void 0===t?void 0:t.className:"","".concat(r,"-item-icon"))}),e.renderItemChildren(i)))},e}return(0,c.default)(n,[{key:"renderItemChildren",value:function(e){var t=(o=this.context).prefixCls,n=o.firstLevel,r=(a=this.props).icon,o=a.children,a=d.createElement("span",{className:"".concat(t,"-title-content")},o);return(!r||(0,b.isValidElement)(o)&&"span"===o.type)&&o&&e&&n&&"string"==typeof o?d.createElement("div",{className:"".concat(t,"-inline-collapsed-noicon")},o.charAt(0)):a}},{key:"render",value:function(){return d.createElement(g.SiderContext.Consumer,null,this.renderItem)}}]),n}(d.Component);(t.default=n).contextType=y.default},663:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(664))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},664:function(e,t,n){"use strict";var r=n(62),o=n(65);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=r(n(665)),i=r(n(67));(n=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))}).displayName="BarsOutlined",n=a.forwardRef(n),t.default=n},665:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"}},666:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(667))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},667:function(e,t,n){"use strict";var r=n(62),o=n(65);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=r(n(668)),i=r(n(67));(n=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))}).displayName="LeftOutlined",n=a.forwardRef(n),t.default=n},668:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"}},669:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Content=t.Footer=t.Header=t.LayoutContext=void 0;var a=r(n(121)),l=r(n(55)),i=r(n(64)),c=r(n(53)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=f(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),s=r(n(49)),d=n(54);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},m=u.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function y(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){function o(r){var o=u.useContext(d.ConfigContext).getPrefixCls,a=r.prefixCls;a=o(t,a);return u.createElement(e,(0,c.default)({prefixCls:a,tagName:n},r))}return o.displayName=r,o}}t.LayoutContext=m;var v=function(e){var t=e.prefixCls,n=e.className,r=e.children,o=e.tagName;e=p(e,["prefixCls","className","children","tagName"]),n=(0,s.default)(t,n);return u.createElement(o,(0,c.default)({className:n},e),r)};r=y({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t=u.useContext(d.ConfigContext).direction,n=u.useState([]),r=(b=(0,i.default)(n,2))[0],o=b[1],f=e.prefixCls,y=e.className,v=e.children,g=e.hasSider,b=(n=e.tagName,p(e,["prefixCls","className","children","hasSider","tagName"]));y=(0,s.default)(f,(e={},(0,l.default)(e,"".concat(f,"-has-sider"),"boolean"==typeof g?g:0<r.length),(0,l.default)(e,"".concat(f,"-rtl"),"rtl"===t),e),y);return u.createElement(m.Provider,{value:{siderHook:{addSider:function(e){o((function(t){return[].concat((0,a.default)(t),[e])}))},removeSider:function(e){o((function(t){return t.filter((function(t){return t!==e}))}))}}}},u.createElement(n,(0,c.default)({className:y},b),v))})),n=y({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(v);t.Header=n,n=y({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(v),t.Footer=n,v=y({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(v),t.Content=v,t.default=r},670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},671:function(e,t,n){"use strict";var r=n(50);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=r(n(311)).default,t.default=n},672:function(e,t,n){"use strict";var r=n(50),o=n(51);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53)),l=r(n(64)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};if((t=p(t))&&t.has(e))return t.get(e);var n,r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var l;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((l=a?Object.getOwnPropertyDescriptor(e,n):null)&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n])}return r.default=e,t&&t.set(e,r),r}(n(0)),c=r(n(49)),u=r(n(204)),s=r(n(153)),d=n(54),f=r(n(311));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var m=s.default.Group;(n=function(e){var t=(T=i.useContext(d.ConfigContext)).getPopupContainer,n=T.getPrefixCls,r=T.direction,o=e.prefixCls,p=e.type,y=e.disabled,v=e.onClick,g=e.htmlType,b=e.children,h=e.className,C=e.overlay,O=e.trigger,w=e.align,x=e.visible,j=e.onVisibleChange,P=e.placement,E=e.getPopupContainer,N=e.href,M=void 0===(L=e.icon)?i.createElement(u.default,null):L,k=e.title,S=e.buttonsRender,_=e.mouseEnterDelay,T=e.mouseLeaveDelay,L=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay"]);o=n("dropdown-button",o),T={align:w,overlay:C,disabled:y,trigger:y?[]:O,onVisibleChange:j,getPopupContainer:E||t,mouseEnterDelay:_,mouseLeaveDelay:T};return"visible"in e&&(T.visible=x),T.placement="placement"in e?P:"rtl"===r?"bottomLeft":"bottomRight",p=S([i.createElement(s.default,{type:p,disabled:y,onClick:v,htmlType:g,href:N,title:k},b),i.createElement(s.default,{type:p,icon:M})]),p=(M=(0,l.default)(p,2))[0],M=M[1],i.createElement(m,(0,a.default)({},L,{className:(0,c.default)(o,h)}),p,i.createElement(f.default,T,M))}).__ANT_BUTTON=!0,n.defaultProps={type:"default",buttonsRender:function(e){return e}},t.default=n},723:function(e,t,n){"use strict";var r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=n(239);(n=function(e,t){return r.createElement(a.a,Object.assign({},e,{ref:t,icon:o}))}).displayName="DeleteOutlined",t.a=r.forwardRef(n)},724:function(e,t,n){"use strict";var r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},a=n(239);(n=function(e,t){return r.createElement(a.a,Object.assign({},e,{ref:t,icon:o}))}).displayName="SaveOutlined",t.a=r.forwardRef(n)},725:function(e,t,n){"use strict";var r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},a=n(239);(n=function(e,t){return r.createElement(a.a,Object.assign({},e,{ref:t,icon:o}))}).displayName="SendOutlined",t.a=r.forwardRef(n)}}]);