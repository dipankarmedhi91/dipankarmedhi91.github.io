(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/UzP":function(e,t,a){e.exports={base:"Layout-module--base--3cQg6",header:"Layout-module--header--3SiQE",mobileNavTop:"Layout-module--mobileNavTop--31FjW",sidebar:"Layout-module--sidebar--2e4gz",sidebarClose:"Layout-module--sidebarClose--2NXAK",sidebarOpen:"Layout-module--sidebarOpen--35TTc",main:"Layout-module--main--u9lWq",footer:"Layout-module--footer--37cEW",logoTop:"Layout-module--logoTop--1omZp",navTop:"Layout-module--navTop--1sUL6",topDivider:"Layout-module--topDivider--12vN4",activeTab:"Layout-module--activeTab--1kJM-",hamburgerMenu:"Layout-module--hamburgerMenu--3LyL_",closeMenu:"Layout-module--closeMenu--IlBej"}},"/i54":function(e,t,a){},IIwj:function(e,t,a){},e3TN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=(a("/i54"),a("IIwj"),a("h3cU"),a("Wbzz")),o=a("/UzP"),c=a("i0RT"),i=(a("qddJ"),[{name:"About",path:"/"},{name:"Résumé",path:"/resume"},{name:"Tinker-Box",path:"/tinkerbox"},{name:"Videos",path:"/videos"},{name:"Misc",path:"/misc"}]);t.a=function(e){var t=Object(n.useState)(0),a=t[0],m=t[1];return r.a.createElement("div",{className:o.base},r.a.createElement("header",{className:o.header},r.a.createElement("button",{className:o.hamburgerMenu,onClick:function(){return m(1)}},c.b),r.a.createElement("div",{className:o.logoTop},r.a.createElement("h1",null,r.a.createElement(l.Link,{to:"/"},"Dipankar Medhi"))),r.a.createElement("nav",{className:o.navTop},r.a.createElement("ul",null,i.map((function(t){return r.a.createElement("li",{key:t.name,className:t.name===e.pageName?o.activeTab:""},r.a.createElement(l.Link,{to:t.path},t.name))})))),r.a.createElement("div",{className:o.topDivider})),r.a.createElement("aside",{className:o.sidebar+" "+(a?o.sidebarOpen:o.sidebarClose)},r.a.createElement("nav",null,r.a.createElement("ul",null,i.map((function(t){return r.a.createElement("li",{key:t.name,onClick:function(){return m(0)},className:t.name===e.pageName?o.activeTab:""},r.a.createElement(l.Link,{to:t.path},t.name))})))),r.a.createElement("button",{title:"close",className:o.closeMenu,onClick:function(){return m(0)}},"X")),r.a.createElement("main",{role:"main",className:o.main},e.children),r.a.createElement("footer",{className:o.footer},"Welcome to my Gatsby Site"))}},h3cU:function(e,t,a){},i0RT:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#4a90e2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"})),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"#4a90e2"},r.a.createElement("path",{d:"M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"})),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"#4a90e2",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),r.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),i=r.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"40"},r.a.createElement("rect",{width:"100",height:"10",rx:"8"}),r.a.createElement("rect",{y:"30",width:"100",height:"10",rx:"8"}),r.a.createElement("rect",{y:"60",width:"100",height:"10",rx:"8"}))},iI2j:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("e3TN"),o=a("uA6p"),c=a("y65v"),i={JavaScript:[{name:"Eloquent JS",url:"https://eloquentjavascript.net/"},{name:"JS Allonge",url:"https://leanpub.com/javascriptallongesix/read"},{name:"YDKJS",url:"https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/README.md"},{name:"JS Info",url:"https://javascript.info/"},{name:"JS CheatSheet",url:"https://github.com/mbeaudru/modern-js-cheatsheet?utm_source=hackernewsletter&utm_medium=email&utm_term=code"}],HTML:[{name:"HTML.com",url:"https://html.com/"},{name:"HTML MDN",url:"https://developer.mozilla.org/en-US/docs/Web/HTML"}],CSS:[{name:"CSS Tricks",url:"https://css-tricks.com/"}],Others:[{name:"FrontEnd Handbook",url:"https://frontendmasters.com/books/front-end-handbook/2019/"},{name:"Dev Hints",url:"https://devhints.io/"},{name:"GraphQL",url:"https://graphql.org/"},{name:"Free for Dev",url:"https://free-for.dev/#/?id=docker-related"}],DS:[{name:"text",url:""}]},m=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"JavaScript"),r.a.createElement("ul",null,i.JavaScript.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{rel:"noreferrer",target:"_blank",href:e.url},e.name))}))),r.a.createElement("p",null,"HTML"),r.a.createElement("ul",null,i.HTML.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{rel:"noreferrer",target:"_blank",href:e.url},e.name))}))),r.a.createElement("p",null,"CSS"),r.a.createElement("ul",null,i.CSS.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{rel:"noreferrer",target:"_blank",href:e.url},e.name))}))),r.a.createElement("p",null,"Web development - others"),r.a.createElement("ul",null,i.Others.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{rel:"noreferrer",target:"_blank",href:e.url},e.name))}))))},u=function(){return r.a.createElement("div",null,"To Be Added!")},s=function(){var e=Object(n.useState)("myFavRes"),t=e[0],a=e[1],l=function(e){return a(e)};return r.a.createElement("div",{className:o.main},r.a.createElement("section",{className:o.navSection},r.a.createElement(c.a,{onClick:function(){return l("myFavRes")},className:o.btnStyle},"Fav Resources"),r.a.createElement(c.a,{onClick:function(){return l("myNotes")},className:o.btnStyle},"Notes")),r.a.createElement("section",{className:o.contentSection},"myFavRes"===t?r.a.createElement(m,null):r.a.createElement(u,null)))};t.default=function(){return r.a.createElement(l.a,{pageName:"Misc"},r.a.createElement(s,null))}},qddJ:function(e,t,a){},uA6p:function(e,t,a){e.exports={main:"Misc-module--main--2DAAs",btnStyle:"Misc-module--btnStyle--IDYVw",navSection:"Misc-module--navSection--cvROO",contentSection:"Misc-module--contentSection--2PFX8"}},y65v:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l={borderRadius:"5px",cursor:"pointer"};t.a=function(e){var t=e.disabled,a=void 0!==t&&t,n=e.children,o=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["disabled","children"]);return r.a.createElement("button",Object.assign({disabled:a,style:l},o),n)}}}]);
//# sourceMappingURL=component---src-pages-misc-js-2231b1acac13ffbe71f2.js.map