(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-0fb28256":"67849da9","chunk-0d441fd3":"088a3955","chunk-12b94d54":"7e624750","chunk-3f63e019":"5bbc6de6","chunk-1e57cdd8":"16ce33fb","chunk-494bfc45":"83b5ddea","chunk-7c38df72":"39b6fe18"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-0d441fd3":1,"chunk-12b94d54":1,"chunk-1e57cdd8":1,"chunk-7c38df72":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0fb28256":"31d6cfe0","chunk-0d441fd3":"1688ebec","chunk-12b94d54":"feb3057c","chunk-3f63e019":"31d6cfe0","chunk-1e57cdd8":"29f8ca35","chunk-494bfc45":"31d6cfe0","chunk-7c38df72":"d919c1f2"}[t]+".css",r=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[t],f.parentNode.removeChild(f),n(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){s[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"41cb":function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),s=n("8c4f");a["default"].use(s["a"]),e["a"]=new s["a"]({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",redirect:{name:"coils"}},{path:"/login",name:"login",meta:{layout:"no-header"},component:function(){return n.e("chunk-7c38df72").then(n.bind(null,"013f"))}},{path:"/coils",name:"coils",component:function(){return Promise.all([n.e("chunk-0fb28256"),n.e("chunk-0d441fd3")]).then(n.bind(null,"7c86"))}},{path:"/slit-planning/:id",name:"edit-slit-planning",component:function(){return Promise.all([n.e("chunk-3f63e019"),n.e("chunk-494bfc45")]).then(n.bind(null,"ea81"))}},{path:"/slit-planning",name:"slit-planning",component:function(){return Promise.all([n.e("chunk-3f63e019"),n.e("chunk-494bfc45")]).then(n.bind(null,"ea81"))}},{path:"/slits-preview",name:"slits-preview",component:function(){return Promise.all([n.e("chunk-0fb28256"),n.e("chunk-12b94d54")]).then(n.bind(null,"da6d"))}},{path:"/companies",name:"companies",component:function(){return Promise.all([n.e("chunk-3f63e019"),n.e("chunk-1e57cdd8")]).then(n.bind(null,"9887"))}}]})},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},4878:function(t,e,n){"use strict";n("d3b7");var a=n("bc3a"),s=n.n(a),r=n("41cb"),o=s.a.create({baseURL:"https://api-admin.vanser.org/",timeout:5e5,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),c=function(t){if(!t.response)return Promise.reject(t);switch(t.response.status){case 400:break;case 401:r["a"].push({path:"/login"});break;default:}return Promise.reject(t)},i=function(t){switch(t.status){case 200:break;default:}return t};o.interceptors.response.use(i,c),e["a"]=o},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},r=[],o="default",c={name:"App",computed:{layout:function(){return(this.$route.meta.layout||o)+"-layout"}},data:function(){return{}}},i=c,l=(n("034f"),n("2877")),u=Object(l["a"])(i,s,r,!1,null,null,null),d=u.exports,f=n("ce5b"),b=n.n(f);n("bf40");a["default"].use(b.a);var m={},p=new b.a(m),h=n("41cb"),j=(n("5363"),n("4de4"),n("c1df")),v=n.n(j);a["default"].prototype.moment=v.a,a["default"].filter("formatDate",(function(t){return null!=t?v()(t).format("ll"):""})),a["default"].filter("calendarDate",(function(t){return null!=t?v()(t).format("YYYY-MM-DD hh:mm:ss"):""}));var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"default-page"},[n("div",{staticStyle:{"min-height":"56px"}},[n("Header")],1),n("Menu"),n("div",{staticClass:"mx-7 pl-12"},[t._t("default")],2)],1)},k=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticStyle:{"z-index":"11"},attrs:{color:"#455A64",dark:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return t.showMenu()}}}),n("v-toolbar-title",{staticClass:"title font-weight-bold"},[t._v("Vanser Metallics")]),n("v-spacer"),n("span",{staticClass:"subtitle-1 font-weight-bold mx-3"},[t._v("Farishta Sharma")]),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-bell")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-login")])],1),n("div",{staticStyle:{cursor:"pointer"}},[t._v("Logout")])],1)],1)},w=[],_={name:"Header",data:function(){return{}},methods:{showMenu:function(){this.$store.state.menu=!0,this.$store.state.miniMenu=!this.$store.state.miniMenu}}},x=_,S=Object(l["a"])(x,y,w,!1,null,null,null),z=S.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-navigation-drawer",{staticStyle:{position:"fixed",top:"60px",right:"0","z-index":"10"},attrs:{permanent:"","mini-variant":t.$store.state.miniMenu,dark:"",width:"240"},on:{"update:miniVariant":function(e){return t.$set(t.$store.state,"miniMenu",e)},"update:mini-variant":function(e){return t.$set(t.$store.state,"miniMenu",e)}},model:{value:t.$store.state.menu,callback:function(e){t.$set(t.$store.state,"menu",e)},expression:"$store.state.menu"}},[n("v-list",{attrs:{dense:""}},t._l(t.settings,(function(e){return n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.action,"no-action":"",to:e.link,color:"grey lighten-4"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},t._l(e.items,(function(a){return n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:e.items,expression:"item.items"}],key:a.title,attrs:{to:a.link}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(a.icon)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(a.title)}})],1)],1)})),1)})),1)],1)],1)},O=[],M={data:function(){return{menuItems:[{title:"Dashboard",icon:"mdi-newspaper-variant-outline",link:"/dashboard"},{title:"Hot Rolled",icon:"mdi-paper-roll",link:"/coils"}],settings:[{action:"mdi-paper-roll",items:[{title:"HR Stock",icon:"mdi-paper-roll",link:"/coils"},{title:"Slits Preview",icon:"mdi-view-grid",link:"/slits-preview"},{title:"Slits Stock",icon:"mdi-rollupjs",link:"/"}],title:"Hot Rolled"},{action:"mdi-office-building",link:"/companies",items:[{title:"Lists",icon:"mdi-view-list",link:"/companies"}],title:"Companies"}]}},computed:{}},P=M,$=Object(l["a"])(P,C,O,!1,null,null,null),L=$.exports,D={components:{Header:z,Menu:L},data:function(){return{}}},E=D,T=(n("d04a"),Object(l["a"])(E,g,k,!1,null,"d376fd76",null)),A=T.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},R=[],Y={},H=Y,q=Object(l["a"])(H,N,R,!1,null,null,null),B=q.exports,U=(n("d3b7"),n("ac1f"),n("1276"),n("2f62")),F=n("df4b"),I=n("d6e8"),J=n("4878"),V="/shifts",K={get:function(){return J["a"].get("".concat(V))}},G="/slitted-coils",Q={get:function(t){return J["a"].get("".concat(G),{params:t})},add:function(t){return J["a"].post("".concat(G),t)},delete:function(t){return J["a"].delete("".concat(G,"/").concat(t))},update:function(t,e){return J["a"].put("".concat(G,"/").concat(t),e)}};a["default"].use(U["a"]);var W=new U["a"].Store({state:{miniMenu:!0,shifts:[],slittedDate:null,slittedShift:null,slits:[],slittedCoils:[],selRows:[],coilId:null,coilData:{},totalRows:0,coils:[],isLoading:!1,btnColor:"#9932CC",coilDrawer:!1,slitDrawer:!1,companies:[]},mutations:{},actions:{getSlittedCoils:function(t,e){var n=t.state;return e||(e={}),n.isLoading=!0,Q.get(e).then((function(t){n.slittedCoils=t.data.rows})).catch((function(t){return console.log("error",t)})).finally((function(){return n.isLoading=!1}))},getCompanies:function(t){var e=t.state;return I["a"].get().then((function(t){e.companies=t.data.rows})).catch((function(t){return console.log("error",t)}))},getShifts:function(t){var e=t.state;return K.get().then((function(t){e.shifts=t.data.rows})).catch((function(t){return console.log("error",t)}))},getSlits:function(t,e){var n=t.state;return F["a"].getSlits(e.id).then((function(t){var e=t.data.rows[0];n.selRows=[{id:e.parent_id,brand_no:e.brand_no,weight:e.weight,thickness:e.thickness,width:e.width,company:e.company,formulated_weight:e.formulated_weight}],n.slits=t.data.rows;var a=v()(n.slits[0].slit_date).format("YYYY-MM-DD hh:mm:ss").split(" ");n.slittedDate=a[0],n.slittedShift=n.slits[0].slit_shift})).catch((function(t){return console.log("error",t)})).finally((function(){return n.isLoading=!1}))},getCoils:function(t,e){var n=t.state;return e||(e={}),n.isLoading=!0,F["a"].get(e).then((function(t){n.coils=t.data.rows,n.totalRows=t.data.count})).catch((function(t){return console.log("error",t)})).finally((function(){return n.isLoading=!1}))},deleteCoil:function(t,e){var n=t.state;return e||(e={}),n.isLoading=!0,F["a"].delete(e).then((function(t){console.log("res",t)})).catch((function(t){return console.log("error",t)})).finally((function(){return n.isLoading=!1}))}},modules:{}}),X=n("7898"),Z=n.n(X),tt={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","https://unpkg.com/kidlat-css/css/kidlat.css"]};a["default"].use(Z.a,tt),a["default"].component("default-layout",A),a["default"].component("no-header-layout",B),a["default"].config.productionTip=!1,new a["default"]({router:h["a"],vuetify:p,store:W,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,n){},9965:function(t,e,n){},d04a:function(t,e,n){"use strict";n("9965")},d6e8:function(t,e,n){"use strict";var a=n("4878"),s="/companies";e["a"]={get:function(){return a["a"].get("".concat(s))},add:function(t){return a["a"].post("".concat(s),t)},delete:function(t){return a["a"].delete("".concat(s,"/").concat(t))},update:function(t,e){return a["a"].put("".concat(s,"/").concat(t),e)}}},df4b:function(t,e,n){"use strict";var a=n("4878"),s="/coils";e["a"]={get:function(t){return a["a"].get("".concat(s),{params:t})},add:function(t){return a["a"].post("".concat(s),t)},delete:function(t){return a["a"].delete("".concat(s,"/").concat(t))},update:function(t,e){return a["a"].put("".concat(s,"/").concat(t),e)},getSlits:function(t){return a["a"].get("".concat(s,"/").concat(t,"/slits"))},addSlits:function(t,e){return a["a"].post("".concat(s,"/").concat(t,"/slits"),e)},updateSlits:function(t,e){return a["a"].put("".concat(s,"/").concat(t,"/slits"),e)},deleteSlits:function(t,e){return console.log(e),a["a"].delete("".concat(s,"/").concat(t,"/slits"),{params:e})}}}});
//# sourceMappingURL=app.e82fe9d7.js.map