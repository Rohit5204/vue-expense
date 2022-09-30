(function(){"use strict";var e={1624:function(e,t,n){var r=n(144),o=n(998),a=n(3059),i=function(){var e=this,t=e._self._c;return t(o.Z,[t(e.layout,{tag:"component"},[t(a.Z,[t("router-view")],1)],1)],1)},s=[];const l="side";var u={computed:{layout(){return(this.$route.meta.layout||l)+"-layout"}}},c=u,d=n(1001),f=(0,d.Z)(c,i,s,!1,null,null,null),p=f.exports,h=n(5205);(0,h.z)("/vue-expense/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=n(8345),v=n(9582),g=n(4886),b=n(266),Z=n(3875),w=n(1267),y=n(3201),_=n(1713),k=function(){var e=this,t=e._self._c;return t(w.Z,[t(y.Z,{attrs:{wrap:""}},e._l(e.dashboardItems,(function(e){return t(w.Z,{key:e.title,attrs:{md4:""}},[t("widgets-dashboard",{staticClass:"elevation-8",attrs:{value:e.value,title:e.title,icon:e.icon,color:e.color}})],1)})),1),t(y.Z,[t(_.Z,[t(b.Z,{attrs:{cols:"12"}},[t(v.Z,{staticClass:"ml-2 mr-2",attrs:{width:"580",elevation:"10"}},[t(g.Qq,[t("strong",[e._v("Bar Representation Of Data")])]),t("bar-widget")],1)],1)],1),t(_.Z,[t(b.Z,{attrs:{cols:"12"}},[t(v.Z,{staticClass:"mr-1",attrs:{elevation:"10",width:"auto"}},[t(g.EB,{attrs:{"primary-title":""}},[e._v(" PLATFORM WISE LEADS ")]),t(Z.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"items-per-page":5}})],1)],1)],1)],1),t(y.Z,[t(_.Z,[t(b.Z,[t(v.Z,{staticClass:"ml-2 mt-5 mr-2",attrs:{elevation:"10"}},[t(g.EB,[e._v("Platform Wise Donut Representation ")]),t(_.Z,[t(b.Z,[t("strong",{staticClass:"pl-8"},[e._v("Facebook")]),t("pie-widget")],1),t(b.Z,[t("strong",[e._v("Instagram")]),t("pie-widget")],1),t(b.Z,[t("strong",[e._v("Justdial")]),t("pie-widget")],1)],1)],1)],1)],1)],1)],1)},x=[],C=n(9256),P=function(){var e=this,t=e._self._c;return t(C.Z,[t("apexchart",{attrs:{type:"bar",height:"300",options:e.chartOptions,series:e.series}})],1)},O=[],E={data(){return{series:[{name:"Inflation",data:[350,247,288,450,467,364,489,512,241]}],chartOptions:{chart:{height:250,type:"bar"},plotOptions:{bar:{borderRadius:10,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-20,style:{fontSize:"10px",colors:["#304758"]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},title:{text:"Monthty Leads in Year 2022",floating:!0,align:"center",style:{color:"#444"}}}}}},S=E,A=(0,d.Z)(S,P,O,!1,null,null,null),L=A.exports,T=function(){var e=this,t=e._self._c;return t(C.Z,{attrs:{"grid-list-xs":""}},[t("apexchart",{attrs:{type:"donut",width:"300",options:e.chartOptions,series:e.series}})],1)},j=[],B={data(){return{series:[44,55,13,33],chartOptions:{chart:{width:380,type:"donut"},dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{show:!1}}}],legend:{position:"right",offsetY:0,height:230}}}}},D=B,N=(0,d.Z)(D,T,j,!1,null,"322eb01e",null),F=N.exports,I=n(4324),M=n(4525),$=n(9708),J=function(){var e=this,t=e._self._c;return t(v.Z,{staticClass:"ma-2",attrs:{color:e.color}},[t(M.Z,{attrs:{"three-line":""}},[t($.km,{staticClass:"justify-center"},[t(g.EB,{staticClass:"widget-title justify-center"},[t(I.Z,{staticClass:"widget-icon ml-n6",attrs:{size:"45"}},[e._v(" "+e._s(e.icon))]),t("b",{staticClass:"ml-5"},[e._v(e._s(e.value))])],1),t("hr"),t(g.Qq,{staticClass:"widget-subtitle mt-3"},[e._v(" "+e._s(e.title))])],1)],1)],1)},R=[],W={props:{icon:"",title:"",value:"",color:""}},q=W,z=(0,d.Z)(q,J,R,!1,null,null,null),V=z.exports,U={components:{WidgetsDashboard:V,BarWidget:L,PieWidget:F},data(){return{headers:[{text:"Platform Name",value:"name"},{text:"Total Leads",value:"count"}],desserts:[{name:"Facebook",count:159},{name:"Instagram",count:250},{name:"Justdial",count:450},{name:"India Mart",count:24}],dashboardItems:[{value:21,title:"Total Leads",icon:"mdi-calendar-month",color:"cyan darken-3"},{value:15,title:"Active Leads",icon:"mdi-send",color:"deep-orange  lighten-3"},{value:8,title:"Closed Leads",icon:"mdi-send",color:"blue-grey lighten-4"}]}}},Y=U,Q=(0,d.Z)(Y,k,x,!1,null,"f852285a",null),G=Q.exports;r.ZP.use(m.ZP);const H=[{path:"/dashboard",name:"dashboard",component:G},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4663))},{path:"/",name:"Login",meta:{layout:"blank"},component:()=>n.e(443).then(n.bind(n,3573))},{path:"/viewProfile",name:"viewProfile",component:()=>n.e(443).then(n.bind(n,1605))}],K=new m.ZP({mode:"history",base:"/vue-expense/",routes:H});var X=K,ee=n(1705);r.ZP.use(ee.Z);var te=new ee.Z({}),ne=n(7166),re=n.n(ne),oe=n(5808),ae=n(6900),ie=n(7233),se=function(){var e=this,t=e._self._c;return t(ie.Z,{attrs:{app:"",height:"100%",color:" grey lighten-2",permanent:e.$vuetify.breakpoint.mdAndUp,temporary:e.$vuetify.breakpoint.smAndDown,left:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(oe.Z,[t(M.Z,{staticClass:"px-2"},[t($.km,[t("div",{staticClass:"text-center"},[t("label",{staticClass:"display-1"},[e._v("Welcome")])])])],1),t("hr"),t(M.Z,{attrs:{link:""}},[t(ae.Z,{attrs:{color:"grey"}},[t(I.Z,{attrs:{size:"40px"}},[e._v("mdi-account")])],1),t($.km,[t($.V9,{staticClass:"text-h6"}),t($.oZ,[t(y.Z,[t(w.Z,[e._v("Admin ")])],1)],1)],1)],1),t("hr"),e._l(e.links,(function([n,r,o]){return t(M.Z,{key:n,attrs:{to:o,link:""}},[t(ae.Z,[t(I.Z,[e._v(e._s(n))])],1),e._v(" "+e._s(r)+" ")],1)}))],2)],1)},le=[],ue={props:["value","Users"],computed:{drawer:{get(){return console.log("Getting :"+this.value),this.value},set(e){console.log("Setting :"+this.value),this.$emit("input",e)}}},data(){return{user:"",name:"",links:[["mdi-view-dashboard","Dashboard","/dashboard"],["mdi-send","Expense","/about"],["mdi-webpack","Leads",""],["mdi-bank","Platform",""]]}},methods:{hhh(){this.user=localStorage.getItem("LAST")},local(){this.name=localStorage.getItem("Name")}}},ce=ue,de=(0,d.Z)(ce,se,le,!1,null,null,null),fe=de.exports,pe=function(){var e=this,t=e._self._c;return t("div",[e._t("default")],2)},he=[],me={},ve=me,ge=(0,d.Z)(ve,pe,he,!1,null,"7c6ff936",null),be=ge.exports,Ze=n(5550),we=function(){var e=this,t=e._self._c;return t("div",[t("title-bar"),t("sidebar",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),e.$vuetify.breakpoint.smAndDown?t(Ze.Z,{on:{click:function(t){t.stopPropagation(),e.$emit("drawerclick",e.drawer=!e.drawer)}}}):e._e(),e._t("default")],2)},ye=[],_e=n(6232),ke=n(6190),xe=n(3687),Ce=n(7808),Pe=n(7953),Oe=function(){var e=this,t=e._self._c;return t("div",[t(_e.Z,{attrs:{app:""}},[e.$vuetify.breakpoint.smAndDown?t(Ze.Z,{on:{click:function(t){e.drawer=!e.drawer}}}):e._e(),t(Pe.qW,[e._v("CRM DEMO PROJECT")]),t(xe.Z),t("div",{directives:[{name:"show",rawName:"v-show",value:e.serach,expression:"serach"}],staticClass:"mt-4"},[t(Ce.Z,{attrs:{placeholder:"Search here ...."},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(ke.Z,{attrs:{icon:""},on:{click:function(t){e.serach=!e.serach}}},[t(I.Z,[e._v("mdi-magnify")])],1),t("profile")],1)],1)},Ee=[],Se=n(3423),Ae=n(4611),Le=n(4568),Te=n(2082),je=function(){var e=this,t=e._self._c;return t("div",[t(Le.Z,{attrs:{bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t(Te.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:r}){return[t(Se.Z,e._g({attrs:{size:"40",color:"white"}},{...n,...r}),[t(I.Z,{attrs:{color:"black"}},[e._v("mdi-account")])],1)]}}],null,!0)},[t("span",[e._v("Profile")])])]}}])},[t(v.Z,{attrs:{color:"black--text"}},[t(g.EB,{staticClass:"ml-4"},[e._v("Rohit Jaiswal")]),t(oe.Z,{attrs:{dark:""}},[e._l(e.menu,(function(n,r){return t(M.Z,{key:r,attrs:{to:n.link}},[t(Ae.Z,[t(I.Z,{attrs:{color:"white"},domProps:{textContent:e._s(n.icon)}})],1),t($.km,[t($.V9,{domProps:{textContent:e._s(n.text)}})],1)],1)})),t(M.Z,{on:{click:function(t){return e.logout()}}},[t(Ae.Z,[t(I.Z,{attrs:{color:"white"}},[e._v("mdi-logout")])],1),t($.km,[t($.V9,{domProps:{textContent:e._s("Logout")}})],1)],1)],2)],1)],1)],1)},Be=[],De=(n(7658),{data(){return{menu:[{icon:"mdi-account",text:"View Profile",link:"/viewProfile"}],profileDetails:JSON.parse(localStorage.getItem("profile"))}},methods:{logout(){this.$router.push({name:"Login"})}}}),Ne=De,Fe=(0,d.Z)(Ne,je,Be,!1,null,"753e64e0",null),Ie=Fe.exports,Me={components:{Profile:Ie},data:()=>({serach:!1,drawer:!0})},$e=Me,Je=(0,d.Z)($e,Oe,Ee,!1,null,null,null),Re=Je.exports,We={data(){return{drawer:!1}},components:{Sidebar:fe,TitleBar:Re}},qe=We,ze=(0,d.Z)(qe,we,ye,!1,null,null,null),Ve=ze.exports;r.ZP.use(re()),r.ZP.component("apexchart",re()),r.ZP.component("sidebar",fe),r.ZP.component("blank-layout",be),r.ZP.component("side-layout",Ve),r.ZP.config.productionTip=!1,new r.ZP({router:X,vuetify:te,render:e=>e(p)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.b6fbe183.js"}}(),function(){n.miniCssF=function(e){return"css/about.191be512.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-expense:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-expense/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkvue_expense"]=self["webpackChunkvue_expense"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1624)}));r=n.O(r)})();
//# sourceMappingURL=app.a43fb21f.js.map