if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const t=e=>n(e,o),c={module:{uri:o},exports:u,require:t};s[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(i(...e),u)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-expense"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue-expense/css/app.f0990ccb.css",revision:null},{url:"/vue-expense/index.html",revision:"014d8f93dae2326bfb93dc7c774081d0"},{url:"/vue-expense/js/about.5fca69f6.js",revision:null},{url:"/vue-expense/js/app.2eac66ee.js",revision:null},{url:"/vue-expense/js/chunk-vendors.05d35ce7.js",revision:null},{url:"/vue-expense/manifest.json",revision:"f17f31c1f8620b8ba56f159bd0148837"},{url:"/vue-expense/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
