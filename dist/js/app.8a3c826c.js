(function(e){function t(t){for(var a,s,r=t[0],i=t[1],u=t[2],l=0,f=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==c[r]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},c={app:0},o=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0fb28256":"07685d13","chunk-2430c8b8":"c4556553","chunk-40a5eedf":"2a292bd5","chunk-2d0e6322":"06fe9928","chunk-2d212bc4":"b3258633","chunk-5f2657ee":"7c57c74e","chunk-22759f76":"83bf63de","chunk-5b2fdd57":"8a5a25f9","chunk-8dc309fc":"c0a2945f","chunk-6315f0e4":"0a996217","chunk-7c38df72":"0df12c9f","chunk-f4ed9c98":"3e443e57"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2430c8b8":1,"chunk-40a5eedf":1,"chunk-22759f76":1,"chunk-8dc309fc":1,"chunk-6315f0e4":1,"chunk-7c38df72":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0fb28256":"31d6cfe0","chunk-2430c8b8":"e12f49ce","chunk-40a5eedf":"1688ebec","chunk-2d0e6322":"31d6cfe0","chunk-2d212bc4":"31d6cfe0","chunk-5f2657ee":"31d6cfe0","chunk-22759f76":"29f8ca35","chunk-5b2fdd57":"31d6cfe0","chunk-8dc309fc":"29f8ca35","chunk-6315f0e4":"1688ebec","chunk-7c38df72":"d919c1f2","chunk-f4ed9c98":"31d6cfe0"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){u=f[r],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[e],d.parentNode.removeChild(d),n(o)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1e7e":function(e,t,n){},"41cb":function(e,t,n){"use strict";n("b0c0"),n("d3b7");var a=n("2b0e"),s=n("8c4f");a["default"].use(s["a"]);var c=new s["a"]({mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:[{path:"/",redirect:{name:"hr_stock"}},{path:"/login",name:"login",meta:{layout:"no-header"},component:function(){return n.e("chunk-7c38df72").then(n.bind(null,"013f"))}},{path:"/coils",name:"hr_stock",component:function(){return Promise.all([n.e("chunk-0fb28256"),n.e("chunk-40a5eedf")]).then(n.bind(null,"7c86"))}},{path:"/slit-planning/:id",name:"edit-slit-planning",component:function(){return Promise.all([n.e("chunk-5f2657ee"),n.e("chunk-5b2fdd57")]).then(n.bind(null,"ea81"))}},{path:"/slit-planning",name:"slit-planning",component:function(){return Promise.all([n.e("chunk-5f2657ee"),n.e("chunk-5b2fdd57")]).then(n.bind(null,"ea81"))}},{path:"/slits-preview",name:"slits_preview",component:function(){return Promise.all([n.e("chunk-0fb28256"),n.e("chunk-2430c8b8")]).then(n.bind(null,"da6d"))}},{path:"/companies",name:"companies",component:function(){return Promise.all([n.e("chunk-5f2657ee"),n.e("chunk-8dc309fc")]).then(n.bind(null,"9887"))}},{path:"/slits",name:"slits_stock",component:function(){return n.e("chunk-6315f0e4").then(n.bind(null,"a458"))}},{path:"/compare-slits",name:"compare-slits",component:function(){return n.e("chunk-f4ed9c98").then(n.bind(null,"4792"))}},{path:"/users",name:"users",component:function(){return Promise.all([n.e("chunk-5f2657ee"),n.e("chunk-22759f76")]).then(n.bind(null,"051b"))}},{path:"/403",name:"forbidden",component:function(){return n.e("chunk-2d0e6322").then(n.bind(null,"985b"))}},{path:"*",name:"not_found",component:function(){return n.e("chunk-2d212bc4").then(n.bind(null,"aa4b"))}}]});c.beforeEach((function(e,t,n){var a=localStorage.getItem("access_token");"login"===e.name||a?"login"===e.name&&a?n({name:"hr_stock"}):n():n({name:"login"})})),t["a"]=c},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="4678"},4878:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),s=n.n(a),c=n("41cb"),o=function(){return localStorage.getItem("access_token")},r=function(e){return o()&&(e.headers.common["Authorization"]="Bearer "+o()),e},i=s.a.create({baseURL:"https://api-uat.vanser.org/",timeout:5e5,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use(r);var u=function(e){if(!e.response)return Promise.reject(e);switch(e.response.status){case 400:break;case 401:localStorage.removeItem("access_token"),c["a"].push({path:"/login"});break;default:}return Promise.reject(e)},l=function(e){switch(e.status){case 200:break;default:}return e};i.interceptors.response.use(l,u),t["a"]=i},5629:function(e,t,n){"use strict";var a=n("4878"),s="/slits";t["a"]={get:function(e){return a["a"].get("".concat(s),{params:e})},add:function(e){return a["a"].post("".concat(s),e)},delete:function(e){return a["a"].delete("".concat(s,"/").concat(e))},update:function(e,t){return a["a"].put("".concat(s,"/").concat(e),t)}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},c=[],o="default",r={name:"App",computed:{layout:function(){return(this.$route.meta.layout||o)+"-layout"}},mounted:function(){localStorage.getItem("access_token")&&localStorage.getItem("user")&&this.$store.dispatch("getUsers",{id:JSON.parse(localStorage.getItem("user")).id})},data:function(){return{}}},i=r,u=(n("034f"),n("2877")),l=Object(u["a"])(i,s,c,!1,null,null,null),f=l.exports,d=n("ce5b"),m=n.n(d);n("bf40");a["default"].use(m.a);var h={},p=new m.a(h),b=n("41cb"),j=(n("5363"),n("4de4"),n("c1df")),g=n.n(j);a["default"].prototype.moment=g.a,a["default"].filter("formatDate",(function(e){return null!=e?g()(e).format("ll"):""})),a["default"].filter("calendarDate",(function(e){return null!=e?g()(e).format("YYYY-MM-DD hh:mm:ss"):""}));var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-page"},[n("div",{staticStyle:{"min-height":"56px"}},[n("Header")],1),n("Menu"),n("div",{staticClass:"mx-7 pl-12",on:{click:function(t){e.$store.state.miniMenu=!0}}},[e._t("default")],2)],1)},k=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{staticStyle:{"z-index":"11"},attrs:{color:"#455A64",dark:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.showMenu()}}}),n("v-toolbar-title",{staticClass:"title font-weight-bold"},[e._v("Vanser Metallics")]),n("v-spacer"),n("span",{staticClass:"subtitle-1 font-weight-bold mx-3 text-capitalize"},[e._v(e._s(e.$store.state.userInfo.name))]),n("span",{staticClass:"subtitle-1 font-weight-bold mx-3 text-capitalize"},[e._v(e._s(e.$store.state.userInfo.role))]),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-bell")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-login")])],1),n("div",{staticStyle:{cursor:"pointer"},on:{click:e.logout}},[e._v("Logout")])],1)],1)},w=[],_={name:"Header",data:function(){return{}},methods:{showMenu:function(){this.$store.state.menu=!0,this.$store.state.miniMenu=!this.$store.state.miniMenu},logout:function(){this.$store.state.miniMenu=!0,localStorage.removeItem("user"),localStorage.removeItem("access_token"),this.$router.push({path:"/login"})}}},S=_,x=Object(u["a"])(S,y,w,!1,null,null,null),C=x.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-navigation-drawer",{staticStyle:{position:"fixed",top:"60px",right:"0","z-index":"10"},attrs:{permanent:"","mini-variant":e.$store.state.miniMenu,dark:"",width:"240"},on:{"update:miniVariant":function(t){return e.$set(e.$store.state,"miniMenu",t)},"update:mini-variant":function(t){return e.$set(e.$store.state,"miniMenu",t)}},model:{value:e.$store.state.menu,callback:function(t){e.$set(e.$store.state,"menu",t)},expression:"$store.state.menu"}},[n("v-list",{attrs:{dense:""}},e._l(e.settings,(function(t){return n("v-list-group",{key:t.title,attrs:{"prepend-icon":t.action,"no-action":"",to:t.link,color:"grey lighten-4"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)]},proxy:!0}],null,!0),model:{value:t.active,callback:function(n){e.$set(t,"active",n)},expression:"item.active"}},e._l(t.items,(function(a){return n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.items,expression:"item.items"}],key:a.title,attrs:{to:a.link}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(a.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(a.title)}})],1)],1)})),1)})),1),n("v-list",{staticClass:"py-0 my-0",attrs:{dense:""}},e._l(e.menuItems,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.link}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1)},$=[],O={data:function(){return{menuItems:[{title:"Users",icon:"mdi-account",link:"/users"},{title:"Companies",icon:"mdi-office-building",link:"/companies"}],settings:[{action:"mdi-paper-roll",items:[{title:"HR Stock",icon:"mdi-paper-roll",link:"/coils"},{title:"Slits Preview",icon:"mdi-view-grid",link:"/slits-preview"},{title:"Slits Stock",icon:"mdi-rollupjs",link:"/slits"}],title:"Hot Rolled"}]}},computed:{}},M=O,P=Object(u["a"])(M,z,$,!1,null,null,null),I=P.exports,E={components:{Header:C,Menu:I},data:function(){return{}}},L=E,D=(n("a82d"),Object(u["a"])(L,v,k,!1,null,"2eec09de",null)),T=D.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},A=[],R={},U=R,Y=Object(u["a"])(U,N,A,!1,null,null,null),H=Y.exports,q=(n("b0c0"),n("d3b7"),n("ac1f"),n("1276"),n("2f62")),B=n("df4b"),J=n("d6e8"),F=n("4878"),V="/shifts",K={get:function(){return F["a"].get("".concat(V))}},G=n("5629"),Q=n("e5ca"),W=n("5b34");a["default"].use(q["a"]);var X=new q["a"].Store({state:{userInfo:{name:"",role:""},users:[],slitCards:[{id:1,thickness:null,slittedCoils:[]}],thicknessList:[],previewShift:null,previewDate:null,miniMenu:!0,shifts:[],slittedDate:null,slittedShift:null,slits:[],slittedCoils:[],selRows:[],coilId:null,coilData:{},totalRows:0,coils:[],isLoading:!1,btnColor:"#9932CC",coilDrawer:!1,slitDrawer:!1,companies:[]},mutations:{SET_USER_INFO:function(e,t){e.userInfo=t}},actions:{getSlittedCoils:function(e,t){var n=e.state;return t||(t={}),n.isLoading=!0,G["a"].get(t).then((function(e){n.slittedCoils=e.data.rows})).catch((function(e){return console.log("error",e)})).finally((function(){return n.isLoading=!1}))},getCompanies:function(e){var t=e.state;return J["a"].get().then((function(e){t.companies=e.data.rows})).catch((function(e){return console.log("error",e)}))},getUsers:function(e,t){var n=e.state;return t||(t={}),W["a"].get(t).then((function(e){if(t.id){n.userInfo=e.data.rows[0];var a=n.userInfo,s=a.name,c=a.id,o=a.role,r=a.access;localStorage.setItem("user",JSON.stringify({name:s,id:c,role:o,access:r}))}else n.users=e.data.rows})).catch((function(e){return console.log("error",e)}))},getThicknesses:function(e){var t=e.state;return Q["a"].get().then((function(e){t.thicknessList=e.data.rows})).catch((function(e){return console.log("error",e)}))},getShifts:function(e){var t=e.state;return K.get().then((function(e){t.shifts=e.data.rows})).catch((function(e){return console.log("error",e)}))},getSlits:function(e,t){var n=e.state;return B["a"].getSlits(t.id).then((function(e){var t=e.data.rows[0];n.selRows=[{id:t.parent_id,brand_no:t.brand_no,weight:t.weight,thickness:t.thickness,width:t.width,company:t.company,formulated_weight:t.formulated_weight}],n.slits=e.data.rows;var a=g()(n.slits[0].slit_date).format("YYYY-MM-DD hh:mm:ss").split(" ");n.slittedDate=a[0],n.slittedShift=n.slits[0].slit_shift})).catch((function(e){return console.log("error",e)})).finally((function(){return n.isLoading=!1}))},getCoils:function(e,t){var n=e.state;return t||(t={}),n.isLoading=!0,B["a"].get(t).then((function(e){n.coils=e.data.rows,n.totalRows=e.data.count})).catch((function(e){return console.log("error",e)})).finally((function(){return n.isLoading=!1}))},deleteCoil:function(e,t){var n=e.state;return t||(t={}),n.isLoading=!0,B["a"].delete(t).then((function(e){console.log("res",e)})).catch((function(e){return console.log("error",e)})).finally((function(){return n.isLoading=!1}))}},modules:{}}),Z=n("7898"),ee=n.n(Z),te={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","https://unpkg.com/kidlat-css/css/kidlat.css"]};a["default"].use(ee.a,te),a["default"].component("default-layout",T),a["default"].component("no-header-layout",H),a["default"].config.productionTip=!1,new a["default"]({router:b["a"],vuetify:p,store:X,render:function(e){return e(f)}}).$mount("#app")},"5b34":function(e,t,n){"use strict";var a=n("4878"),s="/users";t["a"]={get:function(e){return a["a"].get("".concat(s),{params:e})},add:function(e){return a["a"].post("".concat(s),e)},delete:function(e){return a["a"].delete("".concat(s,"/").concat(e))},update:function(e,t){return a["a"].put("".concat(s,"/").concat(e),t)}}},"85ec":function(e,t,n){},a82d:function(e,t,n){"use strict";n("1e7e")},d6e8:function(e,t,n){"use strict";var a=n("4878"),s="/companies";t["a"]={get:function(){return a["a"].get("".concat(s))},add:function(e){return a["a"].post("".concat(s),e)},delete:function(e){return a["a"].delete("".concat(s,"/").concat(e))},update:function(e,t){return a["a"].put("".concat(s,"/").concat(e),t)}}},df4b:function(e,t,n){"use strict";var a=n("4878"),s="/coils";t["a"]={get:function(e){return a["a"].get("".concat(s),{params:e})},add:function(e){return a["a"].post("".concat(s),e)},delete:function(e){return a["a"].delete("".concat(s,"/").concat(e))},update:function(e,t){return a["a"].put("".concat(s,"/").concat(e),t)},getSlits:function(e){return a["a"].get("".concat(s,"/").concat(e,"/slits"))},addSlits:function(e,t){return a["a"].post("".concat(s,"/").concat(e,"/slits"),t)},updateSlits:function(e,t){return a["a"].put("".concat(s,"/").concat(e,"/slits"),t)},deleteSlits:function(e,t){return console.log(t),a["a"].delete("".concat(s,"/").concat(e,"/slits"),{params:t})}}},e5ca:function(e,t,n){"use strict";var a=n("4878"),s="/thicknesses";t["a"]={get:function(){return a["a"].get("".concat(s))},add:function(e){return a["a"].post("".concat(s),e)},delete:function(e){return a["a"].delete("".concat(s,"/").concat(e))},update:function(e,t){return a["a"].put("".concat(s,"/").concat(e),t)}}}});
//# sourceMappingURL=app.8a3c826c.js.map