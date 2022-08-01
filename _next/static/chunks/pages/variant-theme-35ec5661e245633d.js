(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{6010:function(e,r,n){"use strict";function t(e){var r,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(o&&(o+=" "),o+=r);return o}n.d(r,{Z:function(){return o}})},9579:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/variant-theme",function(){return n(2259)}])},2259:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var t=n(5893),o=n(7294),a=n(6486),s=n(6010),i=(0,o.createContext)(null),u=function(e){var r=e.variant,n=e.children,u=(0,o.useContext)(i).components.Button.variants,d=(0,o.useState)(""),l=d[0],c=d[1];return(0,o.useEffect)((function(){if("default"===r)c("text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800");else{var e=(0,a.find)(u,(function(e){return e.props.variant===r}));if(!e)throw new Error("The variant ".concat(r," you use does not exist."));c(e.className)}}),[r,u]),(0,t.jsx)("button",{className:(0,s.Z)(l,"m-1"),children:n})},d=function(e){var r=e.theme,n=e.children;return(0,t.jsx)(i.Provider,{value:r,children:n})},l=function(){return(0,t.jsx)("section",{className:"mb-5",children:(0,t.jsxs)("div",{className:"not-prose rounded-xl overflow-hidden bg-slate-800/75 p-5 border-2 border-gray-700",children:[(0,t.jsx)(u,{variant:"default",children:"Default"}),(0,t.jsx)(u,{variant:"danger",children:"Danger"}),(0,t.jsx)(u,{variant:"gradient",children:"Gradient"}),(0,t.jsx)(u,{variant:"colored-shadows",children:"Colored shadows"}),(0,t.jsx)(u,{variant:"outline",children:"Outline"})]})})},c=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("section",{className:"mb-5",children:[(0,t.jsx)("p",{className:"text-base dark:text-white mb-2",children:"pages/_app.js"}),(0,t.jsx)("div",{className:"not-prose rounded-xl bg-slate-800/75 p-5 border-2 border-gray-700",children:(0,t.jsx)("pre",{className:"text-white whitespace-pre-wrap",children:"import { createTheme, ThemeProvider } from 'Button';\n\nconst theme = createTheme({\n  components: {\n    Button: {\n      variants: [\n        {\n          props: { variant: 'danger' },\n          className: 'focus:outline-none text-white bg-red-700...',\n        }\n      ]\n    }\n  }\n});\n\nconst MyApp = ({ Component, pageProps }) => (\n  <ThemeProvider theme={theme}>\n    <Component {...pageProps} />\n  </ThemeProvider>\n);\n\nexport default MyApp"})})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("p",{className:"text-base dark:text-white mb-2",children:"pages/some-page.js"}),(0,t.jsx)("div",{className:"not-prose rounded-xl bg-slate-800/75 p-5 border-2 border-gray-700",children:(0,t.jsx)("pre",{className:"text-white whitespace-pre-wrap",children:'import Button from \'Button\';\n\nconst SomePage = ({ Component, pageProps }) => (\n  <>\n    <Button variant="default">Default</Button>\n    <Button variant="danger">Danger</Button>\n  </>\n);\n\nexport default SomePage'})})]})]})},p=function(){return(0,t.jsx)("div",{className:"grid place-items-center py-10 bg-slate-900",children:(0,t.jsxs)("main",{children:[(0,t.jsx)(l,{}),(0,t.jsx)(c,{})]})})},m=function(e){return e}({components:{Button:{variants:[{props:{variant:"danger"},className:"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"},{props:{variant:"gradient"},className:"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-bold"},{props:{variant:"colored-shadows"},className:"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},{props:{variant:"outline"},className:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"}]}}}),f=function(){return(0,t.jsx)(d,{theme:m,children:(0,t.jsx)(p,{})})},h=function(){return(0,t.jsx)(f,{})}}},function(e){e.O(0,[662,774,888,179],(function(){return r=9579,e(e.s=r);var r}));var r=e.O();_N_E=r}]);