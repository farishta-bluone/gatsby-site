(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0429a22"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var s=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(s["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(s["a"])(t,e):void 0}}},"1cb4":function(t,e,n){},"25f0":function(t,e,n){"use strict";var s=n("6eeb"),a=n("825a"),o=n("d039"),r=n("ad6d"),l="toString",i=RegExp.prototype,c=i[l],d=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=l;(d||u)&&s(RegExp.prototype,l,(function(){var t=a(this),e=String(t.source),n=t.flags,s=String(void 0===n&&t instanceof RegExp&&!("flags"in i)?r.call(t):n);return"/"+e+"/"+s}),{unsafe:!0})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("6b75");function a(t){if(Array.isArray(t))return Object(s["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=n("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){return a(t)||o(t)||Object(r["a"])(t)||l()}},"2ea6":function(t,e,n){"use strict";n("1cb4")},"4df4":function(t,e,n){"use strict";var s=n("0366"),a=n("7b0b"),o=n("9bdd"),r=n("e95a"),l=n("50c4"),i=n("8418"),c=n("35a1");t.exports=function(t){var e,n,d,u,f,h,g=a(t),v="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,m=void 0!==b,y=c(g),k=0;if(m&&(b=s(b,p>2?arguments[2]:void 0,2)),void 0==y||v==Array&&r(y))for(e=l(g.length),n=new v(e);e>k;k++)h=m?b(g[k],k):g[k],i(n,k,h);else for(u=y.call(g),f=u.next,n=new v;!(d=f.call(u)).done;k++)h=m?o(u,b,[d.value,k],!0):d.value,i(n,k,h);return n.length=k,n}},"6b75":function(t,e,n){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}n.d(e,"a",(function(){return s}))},"733f":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"auto"}},[n("h2",{staticClass:"pb-0 font-weight-bold"},[t._v("Pickled Coils Stock")]),n("p",{staticClass:"caption grey--text text--darken-2"},[t._v("Ready for rolling")])]),n("v-col",{staticClass:"pb-0",attrs:{cols:"auto"}},[n("v-row",{attrs:{justify:"end"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[n("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.thicknessList,label:"Select Thickness","item-text":"value","item-value":"value",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("thickness")}},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),n("v-col",{attrs:{cols:"auto"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}},"v-text-field",a,!1),s))]}}]),model:{value:t.addedFromMenu,callback:function(e){t.addedFromMenu=e},expression:"addedFromMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.addedFromMenu=!1},change:t.setOptions},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}})],1)],1),t.selMultiRows.length>0?n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"py-5 mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:t.openDialog}},[t._v("Create Rolling Planning")])],1):t._e()],1)],1)],1),n("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.$store.state.slittedCoils,"single-select":t.singleSelect,"item-key":"ID","show-select":"",loading:t.$store.state.isLoading,"disable-pagination":"","fixed-header":"",height:"calc(100vh - 190px)","hide-default-footer":""},scopedSlots:t._u([{key:"item.pickling_date",fn:function(e){var s=e.item;return[n("div",{staticClass:"body-2"},[n("span",[t._v(t._s(s.pickling_date?t.$options.filters.formatDate(s.pickling_date):"---"))])])]}},{key:"item.status",fn:function(e){var s=e.item;return[n("div",{staticClass:"body-2"},[n("span",{staticClass:"text-capitalize",class:t.getTextColor(s.status)},[t._v(t._s(s.status))])])]}},{key:"item.actions",fn:function(e){var s=e.item;return[n("v-btn",{attrs:{small:"",outlined:""},on:{click:function(e){return t.createPlanning(s)}}},[t._v("Create Rolling Planning")])]}}],null,!0),model:{value:t.selMultiRows,callback:function(e){t.selMultiRows=e},expression:"selMultiRows"}}),n("v-row",[t.$store.state.rolling.dialog?n("RollingPlanning"):t._e()],1)],1)},a=[],o=(n("d81d"),n("2909")),r=n("b468"),l={components:{RollingPlanning:r["a"]},data:function(){return{selMultiRows:[],selDate:null,dateMenu:!1,data:[],selThickness:"",singleSelect:!1,options:{},sortBy:"",orderBy:"desc",selStatus:null,addedFromMenu:!1,addedFrom:null,headers:[{text:"Coil No",align:"start",value:"slit_no",sortable:!1},{text:"Parent Coil ID",value:"brand_no",sortable:!1},{text:"Thickness (mm)",value:"pickled_thickness",sortable:!1},{text:"Weight (kg)",value:"pickled_weight",sortable:!1},{text:"Width (mm)",value:"pickled_width",sortable:!1},{text:"Pickling Date",value:"pickling_date",sortable:!1},{text:"Actions",value:"actions",sortable:!1,align:"end"}]}},mounted:function(){this.$store.state.selRows=[],this.$store.state.selSlits=[],this.$store.dispatch("getShifts");var t=JSON.parse(localStorage.getItem("user")).access;t&&t.slits_stock?(this.$store.dispatch("getSlittedCoils",{status:"pickled"}),this.$store.dispatch("getThicknesses")):this.$router.push({name:"forbidden"})},watch:{options:{handler:function(t){var e=t.sortBy,n=t.sortDesc;1===e.length&&1===n.length&&(1==n[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0},"$store.state.rolling.selRows":function(t){0===t.length&&this.selMultiRows.length>0&&(this.selMultiRows=[])}},computed:{},methods:{createPlanning:function(t){t.dateMenu=!1,this.$store.state.rolling.selRows=[Object.assign({},t)],this.$store.state.rolling.dialog=!0},openDialog:function(){this.$store.state.rolling.selRows=Object(o["a"])(this.selMultiRows),this.$store.state.rolling.selRows.map((function(t){t.dateMenu=!1})),this.$store.state.rolling.dialog=!0},setOptions:function(){this.searchData()},getTextColor:function(t){var e="";switch(t){case"slitted":e="grey--text text--darken-1";break;case"available":e="green--text text--darken-2";break;case"edit-required":e="red--text text--lighten-1";break;default:e="yellow--text text--darken-4";break}return e},clearSearch:function(t){"date"===t?this.addedFrom=null:"status"===t?this.selStatus=null:"thickness"===t&&(this.selThickness=null),this.setOptions()},searchData:function(){var t={status:"pickled"};this.addedFrom&&(t.pickling_date=this.addedFrom),this.selThickness&&(t.pickled_thickness=this.selThickness),this.$store.dispatch("getSlittedCoils",t)}}},i=l,c=(n("2ea6"),n("2877")),d=Object(c["a"])(i,s,a,!1,null,null,null);e["default"]=d.exports},8418:function(t,e,n){"use strict";var s=n("c04e"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var r=s(e);r in t?a.f(t,r,o(0,n)):t[r]=n}},"9bdd":function(t,e,n){var s=n("825a"),a=n("2a62");t.exports=function(t,e,n,o){try{return o?e(s(n)[0],n[1]):e(n)}catch(r){throw a(t),r}}},a630:function(t,e,n){var s=n("23e7"),a=n("4df4"),o=n("1c7e"),r=!o((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:r},{from:a})},b468:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-dialog",{staticClass:"py-5",attrs:{"max-width":"700px"},on:{"click:outside":t.clearData},model:{value:t.$store.state.rolling.dialog,callback:function(e){t.$set(t.$store.state.rolling,"dialog",e)},expression:"$store.state.rolling.dialog"}},[n("v-card",[n("v-card-title",[n("p",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",t._l(t.$store.state.rolling.selRows,(function(e,s){return n("v-row",{key:s},[n("v-col",{staticClass:"py-0",attrs:{cols:"3"}},[n("v-text-field",{attrs:{outlined:"",readonly:"",color:"grey",dense:"",label:"Coil No"},model:{value:e.slit_no,callback:function(n){t.$set(e,"slit_no",n)},expression:"item.slit_no"}})],1),n("v-col",{staticClass:"py-0",attrs:{cols:"3"}},[n("v-menu",{ref:"dates",refInFor:!0,attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,o=s.attrs;return[n("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Date",readonly:"",clearable:""},model:{value:e.rolling_date,callback:function(n){t.$set(e,"rolling_date",n)},expression:"item.rolling_date"}},"v-text-field",o,!1),a))]}}],null,!0),model:{value:e.dateMenu,callback:function(n){t.$set(e,"dateMenu",n)},expression:"item.dateMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.dateMenu=!1}},model:{value:e.rolling_date,callback:function(n){t.$set(e,"rolling_date",n)},expression:"item.rolling_date"}})],1)],1),n("v-col",{staticClass:"py-0 my-0",attrs:{cols:"3"}},[n("v-select",{attrs:{outlined:"",dense:"",items:t.$store.state.shifts,label:"Shift","item-text":"name","item-value":"id",color:"grey"},model:{value:e.rolling_shift,callback:function(n){t.$set(e,"rolling_shift",t._n(n))},expression:"item.rolling_shift"}})],1),n("v-col",{staticClass:"py-0 my-0",attrs:{cols:"3"}},[n("v-text-field",{attrs:{outlined:"",dense:"",label:"Final Thickness",type:"number",color:"grey"},model:{value:e.rolling_thickness,callback:function(n){t.$set(e,"rolling_thickness",t._n(n))},expression:"item.rolling_thickness"}})],1)],1)})),1)],1),n("v-card-actions",{staticClass:"pb-5 mt-3"},[n("v-spacer"),n("v-btn",{attrs:{outlined:"",text:""},on:{click:t.close}},[t._v(" Cancel ")]),n("v-btn",{attrs:{dark:!t.haltSave,disabled:t.haltSave},on:{click:t.savePlanning}},[t._v(" Save ")])],1)],1)],1)],1)],1)},a=[],o=(n("d81d"),n("96cf"),n("1da1")),r=n("b85c"),l=n("5629"),i={components:{},data:function(){return{selDate:null,dateMenu:!1}},mounted:function(){this.$store.dispatch("getShifts")},computed:{formTitle:function(){return"/rolling-stock"===this.$route.path?"Create Rolling Planning":"Edit Rolling Planning"},haltSave:function(){var t=!1;if(this.$store.state.rolling.selRows.length>0){var e,n=Object(r["a"])(this.$store.state.rolling.selRows);try{for(n.s();!(e=n.n()).done;){var s=e.value;if(!s.rolling_date||!s.rolling_shift||!s.rolling_thickness){t=!0;break}}}catch(a){n.e(a)}finally{n.f()}return t}return!0}},methods:{clearData:function(){this.$store.state.rolling.selRows=[]},savePlanning:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],s=t.$options.filters.calendarDate((new Date).toISOString()),t.$store.state.rolling.selRows.map((function(t){n.push({rolling_shift:t.rolling_shift,rolling_thickness:t.rolling_thickness,rolling_date:t.rolling_date,status:"in-process for rolling",id:t.ID,updated_at:s})})),e.prev=3,e.next=6,l["a"].update(n);case 6:a=e.sent,console.log("result",a),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),console.log("error",e.t0);case 13:return e.prev=13,t.$store.state.rolling.dialog=!1,o={status:"in-process for rolling,approve for rolling"},"/rolling-stock"==t.$route.path&&(o={status:"pickled"}),t.$store.dispatch("getSlittedCoils",o),e.finish(13);case 19:case"end":return e.stop()}}),e,null,[[3,10,13,19]])})))()},close:function(){this.$store.state.rolling.dialog=!1,this.$store.state.rolling.selRows=[]}}},c=i,d=n("2877"),u=Object(d["a"])(c,s,a,!1,null,null,null);e["a"]=u.exports},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var s=n("06c5");function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(s["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){i=!0,r=t},f:function(){try{l||null==n["return"]||n["return"]()}finally{if(i)throw r}}}}},d81d:function(t,e,n){"use strict";var s=n("23e7"),a=n("b727").map,o=n("1dde"),r=n("ae40"),l=o("map"),i=r("map");s({target:"Array",proto:!0,forced:!l||!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,n){"use strict";var s=n("23e7"),a=n("861d"),o=n("e8b5"),r=n("23cb"),l=n("50c4"),i=n("fc6a"),c=n("8418"),d=n("b622"),u=n("1dde"),f=n("ae40"),h=u("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),p=[].slice,b=Math.max;s({target:"Array",proto:!0,forced:!h||!g},{slice:function(t,e){var n,s,d,u=i(this),f=l(u.length),h=r(t,f),g=r(void 0===e?f:e,f);if(o(u)&&(n=u.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(u,h,g);for(s=new(void 0===n?Array:n)(b(g-h,0)),d=0;h<g;h++,d++)h in u&&c(s,d,u[h]);return s.length=d,s}})}}]);
//# sourceMappingURL=chunk-b0429a22.bee2a4d6.js.map