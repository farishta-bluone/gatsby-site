(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fb28256"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,l,"next",t)}function l(t){n(a,i,o,s,l,"throw",t)}s(void 0)}))}}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,o=r("44d2"),a=r("ae40"),s="find",l=!0,c=a(s);s in[]&&Array(1)[s]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(D){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new F(n||[]);return o._invoke=C(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=c;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function w(){}function g(){}function y(){}var m={};m[o]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(O([])));_&&_!==r&&n.call(_,o)&&(m=_);var x=y.prototype=w.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,s){var l=u(t[i],t,o);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function C(t,e,r){var n=h;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return R()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?p:d,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,s,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,o=r("1dde"),a=r("ae40"),s=o("map"),l=a("map");n({target:"Array",proto:!0,forced:!s||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f0d8:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.state.slitDrawer?r("v-navigation-drawer",{staticStyle:{position:"fixed",top:"0",right:"0","overflow-y":"scroll","z-index":"101"},attrs:{temporary:"",right:"",width:"420"},model:{value:t.$store.state.slitDrawer,callback:function(e){t.$set(t.$store.state,"slitDrawer",e)},expression:"$store.state.slitDrawer"}},[r("div",{staticClass:"body-1 font-weight-bold px-4 py-2"},[t._v("HR Slitting Planning Preview "),r("v-icon",{staticClass:"float-right",on:{click:t.close}},[t._v(" mdi-close-circle ")])],1),r("v-divider"),t.rows.length>0?r("v-container",[r("v-row",{staticClass:"px-4"},[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"body-1 font-weight-bold mb-1"},[t._v("Parent Coil: "+t._s(t.rows[0].brand_no))])]),r("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[r("v-text-field",{attrs:{value:t.rows[0].thickness,label:"Thickness",outlined:"",dense:"",color:"grey",type:"number",readonly:""}})],1),r("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[r("v-text-field",{attrs:{value:t.rows[0].weight,label:"Weight (kg)",outlined:"",dense:"",color:"grey",type:"number",readonly:""}})],1),r("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[r("v-text-field",{attrs:{value:t.rows[0].width,label:"Width (mm)",outlined:"",dense:"",color:"grey",type:"number",readonly:""}})],1)],1)],1):t._e(),r("v-divider"),r("v-container",[r("div",{staticClass:"pb-5"},[r("p",{staticClass:"body-1 font-weight-bold mx-3 mb-1"},[t._v("Slits "),r("span",{staticClass:"float-right"})])]),t._l(t.rows,(function(e){return r("v-row",{key:e.id,staticClass:"px-4"},[t.$route.path.includes("preview")||e.slit_no?r("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Coil No",outlined:"",dense:"",color:"grey"},model:{value:e.slit_no,callback:function(r){t.$set(e,"slit_no",r)},expression:"item.slit_no"}})],1):t._e(),r("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Weight (kg)",outlined:"",dense:"",color:"grey",type:"number",readonly:!t.editFlag("weight")},model:{value:e.slitted_weight,callback:function(r){t.$set(e,"slitted_weight",r)},expression:"item.slitted_weight"}})],1),r("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Width (mm)",outlined:"",dense:"",color:"grey",type:"number",readonly:!t.editFlag("width")},model:{value:e.slitted_width,callback:function(r){t.$set(e,"slitted_width",r)},expression:"item.slitted_width"}})],1),t.checkRole("member")&&"in-queue"===e.status||t.checkRole("admin")&&"in-process"===e.status||"slitted"==e.status?r("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Actual Weight (kg)",outlined:"",dense:"",color:"grey",type:"number",readonly:!t.editFlag("actual_weight")},model:{value:e.actual_weight,callback:function(r){t.$set(e,"actual_weight",r)},expression:"item.actual_weight"}})],1):t._e(),t.checkRole("member")&&"in-queue"===e.status||t.checkRole("admin")&&"in-process"===e.status||"slitted"==e.status?r("v-col",{staticClass:"py-0 pl-2",attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Actual Width (mm)",outlined:"",dense:"",color:"grey",type:"number",readonly:!t.editFlag("actual_width")},model:{value:e.actual_width,callback:function(r){t.$set(e,"actual_width",r)},expression:"item.actual_width"}})],1):t._e(),r("v-col",{attrs:{cols:"12"}},[r("v-divider",{staticClass:"py-2"})],1)],1)})),t.errorMsg?r("v-row",{staticClass:"caption red--text px-4"},[t._v(t._s(t.errorMsg))]):t._e()],2),t.$route.path.includes("preview")?r("div",{staticClass:"mx-4 mt-8 float-right"},[r("v-btn",{staticClass:"mr-2",attrs:{outlined:""},on:{click:t.close}},[t._v(" Cancel ")]),r("v-btn",{attrs:{dark:t.validateFields,disabled:!t.validateFields},on:{click:t.saveCoil}},[t._v(" Save ")])],1):t._e()],1):t._e()},i=[],o=(r("d81d"),r("96cf"),r("1da1")),a=r("df4b"),s={name:"SlitCoil",data:function(){return{drawer:null,data:{},maxDate:(new Date).toISOString(),dateMenu:!1,selDate:null,time:null,times:[],rows:[],errorMsg:""}},computed:{validateFields:function(){for(var t=!0,e=0;e<this.rows.length;e++)if(!this.rows[e].slitted_width||!this.rows[e].slitted_weight){t=!1;break}return t},validateForm:function(){var t=0,e=0;return!(this.rows.length>0)||(this.rows.map((function(r){t=parseFloat(t)+parseFloat(r.slitted_width),e=parseFloat(e)+parseFloat(r.slitted_weight)})),this.rows[0].width>=t&&this.rows[0].weight>=e)}},mounted:function(){this.getSlits()},methods:{editFlag:function(t){return!!this.checkRole("admin")||(!this.checkRole("member")||"weight"!=t&&"width"!=t)},checkRole:function(t){var e=JSON.parse(localStorage.getItem("user"));return!(!e||e.role!=t)},saveCoil:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.validateForm){e.next=5;break}return t.errorMsg="Total of slits weight & width can't exceed parent coil's weight & width.",e.abrupt("return");case 5:t.errorMsg="";case 6:return r=t.rows[0].status,t.checkRole("admin")&&"in-queue"==r&&(r="in-queue"),t.checkRole("member")&&"in-queue"==r&&(r="in-process"),t.checkRole("admin")&&"in-process"==r&&(r="slitted"),n={slittedItems:[],status:r,updated_at:t.$options.filters.calendarDate((new Date).toISOString())},t.rows.map((function(t){n.slittedItems.push({ID:t.ID,slit_no:t.slit_no,status:r,actual_weight:t.actual_weight,actual_width:t.actual_width,slitted_weight:t.slitted_weight,slitted_width:t.slitted_width})})),e.prev=12,e.next=15,a["a"].updateSlits(t.$store.state.coilId,n);case 15:i=e.sent,console.log("result",i),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](12),console.log("error",e.t0);case 22:return e.prev=22,o={status:"in-queue,in-process"},t.$store.state.previewShift&&(o.slit_shift=t.$store.state.previewShift),t.$store.state.previewDate&&(o.slit_date=t.$store.state.previewDate),t.$store.state.slitDrawer=!1,t.$store.dispatch("getSlittedCoils",o),e.finish(22);case 29:case"end":return e.stop()}}),e,null,[[12,19,22,29]])})))()},clearSearch:function(t){console.log("data",t)},searchData:function(){},getSlits:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["a"].getSlits(t.$store.state.coilId);case 3:r=e.sent,t.rows=r.data.rows,console.log("result",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error",e.t0);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,8,11,13]])})))()},close:function(){this.$store.state.slitDrawer=!1}}},l=s,c=r("2877"),u=Object(c["a"])(l,n,i,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-0fb28256.c0c6be98.js.map