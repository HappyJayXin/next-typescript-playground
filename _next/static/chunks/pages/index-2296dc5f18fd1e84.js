(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},2079:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(5893),o=function(e){var r=e.children;return(0,n.jsx)("div",{className:"grid place-items-center h-screen",children:r})}},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},l=t(1003),i=t(880),f=t(9246);function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s={};function d(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var p=u.default.forwardRef((function(e,r){var t,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,p=e.href,y=e.as,v=e.children,h=e.prefetch,b=e.passHref,g=e.replace,m=e.shallow,w=e.scroll,_=e.locale,j=e.onClick,k=e.onMouseEnter,O=c(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=v,a&&"string"===typeof t&&(t=u.default.createElement("a",null,t));var x,E=!1!==h,M=i.useRouter(),C=u.default.useMemo((function(){var e=o(l.resolveHref(M,p,!0),2),r=e[0],t=e[1];return{href:r,as:y?l.resolveHref(M,y):t||r}}),[M,p,y]),I=C.href,S=C.as,A=u.default.useRef(I),L=u.default.useRef(S);a&&(x=u.default.Children.only(t));var R=a?x&&"object"===typeof x&&x.ref:r,N=o(f.useIntersection({rootMargin:"200px"}),3),P=N[0],T=N[1],U=N[2],H=u.default.useCallback((function(e){L.current===S&&A.current===I||(U(),L.current=S,A.current=I),P(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[S,R,I,U,P]);u.default.useEffect((function(){var e=T&&E&&l.isLocalURL(I),r="undefined"!==typeof _?_:M&&M.locale,t=s[I+"%"+S+(r?"%"+r:"")];e&&!t&&d(M,I,S,{locale:r})}),[S,I,T,_,E,M]);var K={ref:H,onClick:function(e){a||"function"!==typeof j||j(e),a&&x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,u,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:i,scroll:u}))}(e,M,I,S,g,m,w,_)},onMouseEnter:function(e){a||"function"!==typeof k||k(e),a&&x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l.isLocalURL(I)&&d(M,I,S,{priority:!0})}};if(!a||b||"a"===x.type&&!("href"in x.props)){var B="undefined"!==typeof _?_:M&&M.locale,D=M&&M.isLocaleDomain&&l.getDomainLocale(S,B,M&&M.locales,M&&M.domainLocales);K.href=D||l.addBasePath(l.addLocale(S,B,M&&M.defaultLocale))}return a?u.default.cloneElement(x,K):u.default.createElement("a",Object.assign({},O,K),t)}));r.default=p,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&"undefined"===typeof r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,c=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(r?r.current:null),2),v=y[0],h=y[1],b=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=f.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=i.get(n):(r=i.get(t),f.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,u=n.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var r=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&f.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&h(r.current)}),[r]),[b,d,g]};var a=t(7294),u=t(4686),l="undefined"!==typeof IntersectionObserver;var i=new Map,f=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&"undefined"===typeof r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},4186:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(1664),a=t.n(o),u=t(2079),l=[{href:"/float-toolbar",name:"Float Toolbar"},{href:"/variant-theme",name:"Variant Theme"},{href:"/react-spring",name:"React Spring"}];r.default=function(){return(0,n.jsx)(u.Z,{children:(0,n.jsx)("div",{className:"w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:l.map((function(e){return(0,n.jsx)(a(),{href:e.href,children:(0,n.jsx)("a",{className:"block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",children:e.name})})}))})})}},1664:function(e,r,t){e.exports=t(1551)}},function(e){e.O(0,[774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);