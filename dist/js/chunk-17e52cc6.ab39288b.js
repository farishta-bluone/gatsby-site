(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e52cc6"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}},"742b":function(t,e,r){},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,o=r("44d2"),a=r("ae40"),s="find",c=!0,l=a(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new F(n||[]);return o._invoke=L(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function m(){}function g(){}function y(){}var w={};w[o]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==r&&n.call(b,o)&&(w=b);var k=y.prototype=m.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(i,o,a,s){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function L(t,e,r){var n=d;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return I()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=k.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(C.prototype),C.prototype[a]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new C(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),c(k,s,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},a458:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[r("v-col",{attrs:{cols:"auto"}},[r("h2",{staticClass:"font-weight-bold"},[t._v("HR Coil Slitted Stock")])]),r("v-col",{staticClass:"pb-0",attrs:{cols:"auto"}},[r("v-row",{attrs:{justify:"end"}},[r("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[r("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.thicknessList,label:"Select Thickness","item-text":"value","item-value":"value",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("thickness")}},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),r("v-col",{attrs:{cols:"auto"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}},"v-text-field",i,!1),n))]}}]),model:{value:t.addedFromMenu,callback:function(e){t.addedFromMenu=e},expression:"addedFromMenu"}},[r("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.addedFromMenu=!1},change:t.setOptions},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}})],1)],1),r("v-col",{staticClass:"text-right",attrs:{cols:"auto"}},[r("v-btn",{staticClass:"py-5 mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:function(e){return t.$router.push({path:"/compare-slits"})}}},[t._v("Compare Slits")])],1)],1)],1),t.preventSlitting?r("v-col",{staticClass:"red--text caption py-0",attrs:{color:"red",cols:"12"}},[t._v("You can create slits for available coils only.")]):t._e()],1),r("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.$store.state.slittedCoils,loading:t.$store.state.isLoading,"disable-pagination":"","fixed-header":"",height:"calc(100vh - 190px)","hide-default-footer":""},scopedSlots:t._u([{key:"item.company",fn:function(e){var n=e.item;return[r("div",{staticClass:"body-2"},[r("span",[t._v(t._s(t.showCompany(n.company)))])])]}},{key:"item.slit_date",fn:function(e){var n=e.item;return[r("div",{staticClass:"body-2"},[r("span",[t._v(t._s(n.date?t.$options.filters.formatDate(n.slit_date):"---"))])])]}},{key:"item.status",fn:function(e){var n=e.item;return[r("div",{staticClass:"body-2"},[r("span",{staticClass:"text-capitalize",class:t.getTextColor(n.status)},[t._v(t._s(n.status))])])]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),n),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[r("v-list",{attrs:{dense:""}},t._l(n.actions,(function(e){return r("v-list-item",{key:e.text,on:{click:function(r){return t.actions(e.text,n)}}},[r("v-list-item-icon",{staticClass:"mr-0"},[r("v-icon",{staticClass:"mt-1",attrs:{small:""},domProps:{textContent:t._s(e.icon)}})],1),r("v-list-item-title",{staticClass:"body-2 text-capitalize mt-1"},[t._v(" "+t._s(e.text)+" ")])],1)})),1)],1)]}}],null,!0)})],1)},i=[],o=(r("4de4"),r("7db0"),r("c740"),r("b0c0"),r("96cf"),r("1da1")),a=r("df4b"),s={components:{},data:function(){return{selShift:"",selThickness:"",selMultiRows:[],singleSelect:!1,actionsList:[{icon:"mdi-plus-circle",text:"create slit"},{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"},{icon:"mdi-view-grid",text:"preview planning"}],options:{},sortBy:"",orderBy:"desc",selCompany:null,selStatus:null,addedFromMenu:!1,addedFrom:null,maxDate:(new Date).toISOString(),headline:"",statusList:[{id:1,name:"Available"},{id:2,name:"In-Queue"},{id:3,name:"Slitted"}],headers:[{text:"Coil No",align:"start",value:"slit_no",sortable:!1},{text:"Parent Coil ID",value:"brand_no",sortable:!1},{text:"Thickness (mm)",value:"thickness",sortable:!1},{text:"Weight (kg)",value:"actual_weight",sortable:!1},{text:"Width (mm)",value:"actual_width",sortable:!1},{text:"Slitting Date",value:"slit_date",sortable:!1}]}},mounted:function(){var t=JSON.parse(localStorage.getItem("user")).access;t&&t.slits_stock?(this.$store.dispatch("getSlittedCoils",{status:"slitted"}),this.$store.dispatch("getThicknesses")):this.$router.push({name:"forbidden"})},watch:{options:{handler:function(t){var e=t.sortBy,r=t.sortDesc;1===e.length&&1===r.length&&(1==r[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0}},computed:{preventSlitting:function(){var t=this.selMultiRows.findIndex((function(t){return"available"!=t.status.toLowerCase()}));return t>=0},coilRows:function(){return this.$store.state.coils.filter((function(t){var e=[];return e="available"===t.status?[{icon:"mdi-plus-circle",text:"create slit"},{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"}]:"slitted"===t.status?[{icon:"mdi-view-grid",text:"preview planning"}]:[{icon:"mdi-view-grid",text:"preview planning"},{icon:"mdi-pencil",text:"edit planning"}],t.actions=e}))}},methods:{showCompany:function(t){return this.$store.state.companies.length>0?this.$store.state.companies.find((function(e){return e.id==t})).name:""},actions:function(t,e){"delete"===t&&this.deleteCoil([e.id]),"edit"===t?(this.$store.state.coilId=e.id,this.$store.state.coilData=e,this.$store.state.coilDrawer=!0):(this.$store.state.coilId=null,this.$store.state.coilData={}),"create slit"===t&&(this.$store.state.coilId=e.id,this.$store.state.selRows=[e],this.$router.push({path:"/slit-planning"})),"preview planning"===t&&(this.$store.state.coilId=e.id,this.$store.state.slitDrawer=!0,console.log("preview")),"edit planning"===t&&(this.$store.state.coilId=e.id,this.$router.push({path:"/slit-planning/".concat(e.id)}))},openSlitForm:function(){this.$store.state.selRows=this.selMultiRows,this.$router.push({path:"/slit-planning"})},setOptions:function(){console.log("Calleddddddd"),1===this.options.page?this.searchData():this.options.page=1},getTextColor:function(t){var e="";switch(t){case"slitted":e="grey--text text--darken-1";break;case"available":e="green--text text--darken-2";break;case"edit-required":e="red--text text--lighten-1";break;default:e="yellow--text text--darken-4";break}return e},openForm:function(){console.log(this.$store.state),this.$store.state.coilId=null,this.$store.state.coilDrawer=!0},clearSearch:function(t){"date"===t?this.addedFrom=null:"status"===t?this.selStatus=null:"company"===t?this.selCompany=null:"thickness"===t?this.selThickness=null:"shift"===t&&(this.selShift=null),this.setOptions()},searchData:function(){var t={status:"slitted"};this.addedFrom&&(t.slit_date=this.addedFrom),this.selThickness&&(t.thickness=this.selThickness),this.$store.dispatch("getSlittedCoils",t)},deleteCoil:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a["a"].delete(t);case 3:n=r.sent,e.$store.dispatch("getCoils",{page:1}),console.log("result",n),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},editCoil:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a["a"].update(t.id,t);case 3:n=r.sent,e.$store.dispatch("getCoils",{page:1}),console.log("result",n),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}},c=s,l=(r("dcc2"),r("2877")),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},c740:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").findIndex,o=r("44d2"),a=r("ae40"),s="findIndex",c=!0,l=a(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},dcc2:function(t,e,r){"use strict";r("742b")}}]);
//# sourceMappingURL=chunk-17e52cc6.ab39288b.js.map