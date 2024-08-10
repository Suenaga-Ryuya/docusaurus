"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53940],{53945:(e,t,r)=>{r.d(t,{n4:()=>l,Ne:()=>Z,ci:()=>D,CS:()=>j,wj:()=>s,nO:()=>u,iZ:()=>y,cH:()=>S});var n=r(24246),o=r(27378),a=r(51114),i=r(32451);function s(){var e;const t=(0,i.Z)(),r=null==t||null===(e=t.data)||void 0===e?void 0:e.blogMetadata;if(!r)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return r}const c=o.createContext(null);function l({children:e,content:t,isBlogPostPage:r=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return(0,n.jsx)(c.Provider,{value:a,children:e})}function u(){const e=(0,o.useContext)(c);if(null===e)throw new a.i6("BlogPostProvider");return e}var p=r(66448),b=r(4423);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const g=e=>new Date(e).toISOString();function d(e){const t=e.map(w);return{author:1===t.length?t[0]:t}}function O(e,t,r){return e?{image:v({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${r}`})}:{}}function j(e){const{siteConfig:t}=(0,b.Z)(),{withBaseUrl:r}=(0,p.Cg)(),{metadata:{blogDescription:n,blogTitle:o,permalink:a}}=e,i=`${t.url}${a}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:o,description:n,blogPost:e.items.map((e=>function(e,t,r){const{assets:n,frontMatter:o,metadata:a}=e,{date:i,title:s,description:c,lastUpdatedAt:l}=a;var u;const p=null!==(u=n.image)&&void 0!==u?u:o.image;var b;const f=null!==(b=o.keywords)&&void 0!==b?b:[],h=`${t.url}${a.permalink}`,j=l?g(l):void 0;return m({"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:s,name:s,description:c,datePublished:i},j?{dateModified:j}:{},d(a.authors),O(p,r,s),f?{keywords:f}:{})}(e.content,t,r)))}}function y(){const e=s(),{assets:t,metadata:r}=u(),{siteConfig:n}=(0,b.Z)(),{withBaseUrl:o}=(0,p.Cg)(),{date:a,title:i,description:c,frontMatter:l,lastUpdatedAt:f}=r;var j;const y=null!==(j=t.image)&&void 0!==j?j:l.image;var w;const v=null!==(w=l.keywords)&&void 0!==w?w:[],P=f?g(f):void 0,x=`${n.url}${r.permalink}`;return h(m({"@context":"https://schema.org","@type":"BlogPosting","@id":x,mainEntityOfPage:x,url:x,headline:i,name:i,description:c,datePublished:a},P?{dateModified:P}:{},d(r.authors),O(y,o,i),v?{keywords:v}:{}),{isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}})}function w(e){return m({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}function v({imageUrl:e,caption:t}){return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:t}}var P=r(3620),x=r(41428),k=r(52196),N=r(39779);function S(e){const{pathname:t}=(0,P.TH)();return(0,o.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,N.Mg)(e.permalink,t))}(e,t)))),[e,t])}function D(e){const t=(0,k.vM)(e,(e=>`${new Date(e.date).getFullYear()}`)),r=Object.entries(t);return r.reverse(),r}function Z({items:e,ulClassName:t,liClassName:r,linkClassName:o,linkActiveClassName:a}){return(0,n.jsx)("ul",{className:t,children:e.map((e=>(0,n.jsx)("li",{className:r,children:(0,n.jsx)(x.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:a,children:e.title})},e.permalink)))})}},26323:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(24246),o=(r(27378),r(40624)),a=r(41428);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const c="githubSvg_jqE4";function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const p="xSvg_Q0g7";function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const y=function(e){return(0,n.jsxs)("svg",j(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e),{children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,n.jsx)("path",{d:"M3.6 9h16.8"}),(0,n.jsx)("path",{d:"M3.6 15h16.8"}),(0,n.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,n.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]}))},w={authorSocials:"authorSocials_tPnL",authorSocialLink:"authorSocialLink_hEWM",authorSocialIcon:"authorSocialIcon_hTX6"},v={twitter:{Icon:function(e){return(0,n.jsx)("svg",s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e),{children:(0,n.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})}))},label:"Twitter"},github:{Icon:function(e){return(0,n.jsx)("svg",u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({viewBox:"0 0 256 250",width:"1em",height:"1em"},e),{className:(0,o.Z)(e.className,c),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,n.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})}))},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,n.jsxs)("svg",h(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e),{children:[(0,n.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,n.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]}))},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,n.jsx)("svg",d(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}({width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e),{children:(0,n.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})}))},label:"LinkedIn"},x:{Icon:function(e){return(0,n.jsx)("svg",f(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227"},e),{className:(0,o.Z)(e.className,p),style:{"--dark":"#000","--light":"#fff"},children:(0,n.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})}))},label:"X"}};function P({platform:e,link:t}){const{Icon:r,label:i}=null!==(c=v[s=e])&&void 0!==c?c:{Icon:y,label:s};var s,c;return(0,n.jsx)(a.Z,{className:w.authorSocialLink,href:t,title:i,children:(0,n.jsx)(r,{className:(0,o.Z)(w.authorSocialLink)})})}function x({author:e}){var t;const r=Object.entries(null!==(t=e.socials)&&void 0!==t?t:{});return(0,n.jsx)("div",{className:w.authorSocials,children:r.map((([e,t])=>(0,n.jsx)(P,{platform:e,link:t},e)))})}var k=r(52615);const N={authorImage:"authorImage_p8ow","author-as-h1":"author-as-h1_Pd3R","author-as-h2":"author-as-h2_UaZL",authorDetails:"authorDetails_dWdF",authorName:"authorName_Y8Hr",authorTitle:"authorTitle_Slpj",authorBlogPostCount:"authorBlogPostCount_FxU_"};function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){return e.href?(0,n.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){S(e,t,r[t])}))}return e}({},e)):(0,n.jsx)(n.Fragment,{children:e.children})}function Z({title:e}){return(0,n.jsx)("small",{className:N.authorTitle,title:e,children:e})}function _({name:e,as:t}){return t?(0,n.jsx)(k.Z,{as:t,className:N.authorName,children:e}):(0,n.jsx)("span",{className:N.authorName,children:e})}function C({count:e}){return(0,n.jsx)("span",{className:(0,o.Z)(N.authorBlogPostCount),children:e})}function M({as:e,author:t,className:r,count:a}){const{name:i,title:s,url:c,imageURL:l,email:u,page:p}=t,b=(null==p?void 0:p.permalink)||c||u&&`mailto:${u}`||void 0;return(0,n.jsxs)("div",{className:(0,o.Z)("avatar margin-bottom--sm",r,N[`author-as-${e}`]),children:[l&&(0,n.jsx)(D,{href:b,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:(0,o.Z)("avatar__photo",N.authorImage),src:l,alt:i})}),(i||s)&&(0,n.jsxs)("div",{className:(0,o.Z)("avatar__intro",N.authorDetails),children:[(0,n.jsxs)("div",{className:"avatar__name",children:[i&&(0,n.jsx)(D,{href:b,children:(0,n.jsx)(_,{name:i,as:e})}),a&&(0,n.jsx)(C,{count:a})]}),!!s&&(0,n.jsx)(Z,{title:s}),(0,n.jsx)(x,{author:t})]})]})}},3748:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(24246),o=(r(27378),r(40624)),a=r(44008),i=r(89583),s=r(41773),c=r(76341),l=r(10057),u=r(52615),p=r(26323);const b={authorListItem:"authorListItem_Y1Zl"};function f({author:e}){return(0,n.jsx)("li",{className:b.authorListItem,children:(0,n.jsx)(p.Z,{as:"h2",author:e,count:e.count})})}function m({authors:e}){return(0,n.jsx)("section",{className:(0,o.Z)("margin-vert--lg",b.authorsListSection),children:(0,n.jsx)("ul",{children:e.map((e=>(0,n.jsx)(f,{author:e},e.key)))})})}function h({authors:e,sidebar:t}){const r=(0,s.HV)();return(0,n.jsxs)(a.FG,{className:(0,o.Z)(i.k.wrapper.blogPages,i.k.page.blogAuthorsListPage),children:[(0,n.jsx)(a.d,{title:r}),(0,n.jsx)(l.Z,{tag:"blog_authors_list"}),(0,n.jsxs)(c.Z,{sidebar:t,children:[(0,n.jsx)(u.Z,{as:"h1",children:r}),(0,n.jsx)(m,{authors:e})]})]})}},76341:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(24246),o=r(27378),a=r(40624),i=r(88613),s=r(60029),c=r(36712),l=r(53945),u=r(73919),p=r(52615);function b({year:e,yearGroupHeadingClassName:t,children:r}){return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(p.Z,{as:"h3",className:t,children:e}),r]})}function f({items:e,yearGroupHeadingClassName:t,ListComponent:r}){if((0,u.L)().blog.sidebar.groupByYear){const o=(0,l.ci)(e);return(0,n.jsx)(n.Fragment,{children:o.map((([e,o])=>(0,n.jsx)(b,{year:e,yearGroupHeadingClassName:t,children:(0,n.jsx)(r,{items:o})},e)))})}return(0,n.jsx)(r,{items:e})}const m=(0,o.memo)(f),h="sidebar_P3nc",g="sidebarItemTitle_VrjY",d="sidebarItemList_OSkG",O="sidebarItem_WJ0y",j="sidebarItemLink_Qrfg",y="sidebarItemLinkActive_nUeK",w="yearGroupHeading_lECJ",v=({items:e})=>(0,n.jsx)(l.Ne,{items:e,ulClassName:(0,a.Z)(d,"clean-list"),liClassName:O,linkClassName:j,linkActiveClassName:y});function P({sidebar:e}){const t=(0,l.cH)(e.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,a.Z)(h,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,a.Z)(g,"margin-bottom--md"),children:e.title}),(0,n.jsx)(m,{items:t,ListComponent:v,yearGroupHeadingClassName:w})]})})}const x=(0,o.memo)(P);var k=r(35612);const N={yearGroupHeading:"yearGroupHeading_Ruz9"},S=({items:e})=>(0,n.jsx)(l.Ne,{items:e,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"});function D({sidebar:e}){const t=(0,l.cH)(e.items);return(0,n.jsx)(m,{items:t,ListComponent:S,yearGroupHeadingClassName:N.yearGroupHeading})}function Z(e){return(0,n.jsx)(k.Zo,{component:D,props:e})}const _=(0,o.memo)(Z);function C({sidebar:e}){const t=(0,s.i)();return(null==e?void 0:e.items.length)?"mobile"===t?(0,n.jsx)(_,{sidebar:e}):(0,n.jsx)(x,{sidebar:e}):null}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function I(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function E(e){const{sidebar:t,toc:r,children:o}=e,s=I(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return(0,n.jsx)(i.Z,L(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){M(e,t,r[t])}))}return e}({},s),{children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(C,{sidebar:t}),(0,n.jsx)("main",{className:(0,a.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:o}),r&&(0,n.jsx)("div",{className:"col col--2",children:r})]})})}))}},41773:(e,t,r)=>{r.d(t,{HV:()=>l,Wi:()=>s,ds:()=>c,fw:()=>u});var n=r(24246),o=(r(27378),r(36712)),a=r(7812);function i(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function s(e){const t=i();return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function c(e){const t=i();return(0,o.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const l=()=>(0,o.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function u(){return(0,n.jsx)(o.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View All Authors"})}},7812:(e,t,r)=>{r.d(t,{c:()=>l});var n=r(27378),o=r(4423);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),a=r.pluralForms.indexOf(o);return n[Math.min(a,n.length-1)]}(r,t,e)}}}}]);