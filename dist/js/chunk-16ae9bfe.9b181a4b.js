(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16ae9bfe"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var a=n("6b75");function s(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(t,e):void 0}}},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),s=n("825a"),i=n("d039"),r=n("ad6d"),o="toString",l=RegExp.prototype,c=l[o],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=o;(u||d)&&a(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in l)?r.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||i(t)||Object(r["a"])(t)||o()}},"4df4":function(t,e,n){"use strict";var a=n("0366"),s=n("7b0b"),i=n("9bdd"),r=n("e95a"),o=n("50c4"),l=n("8418"),c=n("35a1");t.exports=function(t){var e,n,u,d,f,p,h=s(t),v="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,m=void 0!==b,k=c(h),y=0;if(m&&(b=a(b,g>2?arguments[2]:void 0,2)),void 0==k||v==Array&&r(k))for(e=o(h.length),n=new v(e);e>y;y++)p=m?b(h[y],y):h[y],l(n,y,p);else for(d=k.call(h),f=d.next,n=new v;!(u=f.call(d)).done;y++)p=m?i(d,b,[u.value,y],!0):u.value,l(n,y,p);return n.length=y,n}},"5ce8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-dialog",{staticClass:"py-5",attrs:{"max-width":"600px"},on:{"click:outside":t.clearData},model:{value:t.$store.state.picklingDialog,callback:function(e){t.$set(t.$store.state,"picklingDialog",e)},expression:"$store.state.picklingDialog"}},[n("v-card",[n("v-card-title",[n("p",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",t._l(t.$store.state.selSlits,(function(e,a){return n("v-row",{key:a},[n("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[n("v-text-field",{attrs:{outlined:"",readonly:"",color:"grey",dense:"",label:"Coil No"},model:{value:e.slit_no,callback:function(n){t.$set(e,"slit_no",n)},expression:"item.slit_no"}})],1),n("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[n("v-menu",{ref:"dates",refInFor:!0,attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[n("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Pickling Date",readonly:"",clearable:""},model:{value:e.pickling_date,callback:function(n){t.$set(e,"pickling_date",n)},expression:"item.pickling_date"}},"v-text-field",i,!1),s))]}}],null,!0),model:{value:e.dateMenu,callback:function(n){t.$set(e,"dateMenu",n)},expression:"item.dateMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.dateMenu=!1}},model:{value:e.pickling_date,callback:function(n){t.$set(e,"pickling_date",n)},expression:"item.pickling_date"}})],1)],1),n("v-col",{staticClass:"py-0 my-0",attrs:{cols:"4"}},[n("v-select",{attrs:{outlined:"",dense:"",items:t.$store.state.shifts,label:"Pickling Shift","item-text":"name","item-value":"id",color:"grey"},model:{value:e.pickling_shift,callback:function(n){t.$set(e,"pickling_shift",t._n(n))},expression:"item.pickling_shift"}})],1)],1)})),1)],1),n("v-card-actions",{staticClass:"pb-5 mt-3"},[n("v-spacer"),n("v-btn",{attrs:{outlined:"",text:""},on:{click:t.close}},[t._v(" Cancel ")]),n("v-btn",{attrs:{dark:!t.haltSave,disabled:t.haltSave},on:{click:t.savePlanning}},[t._v(" Save ")])],1)],1)],1)],1)],1)},s=[],i=(n("d81d"),n("96cf"),n("1da1")),r=n("b85c"),o=n("5629"),l={components:{},data:function(){return{selDate:null,dateMenu:!1}},mounted:function(){this.$store.dispatch("getShifts")},computed:{formTitle:function(){return"/pickling-stock"===this.$route.path?"Create Pickling Planning":"Edit Pickling Planning"},haltSave:function(){var t=!1;if(this.$store.state.selSlits.length>0){var e,n=Object(r["a"])(this.$store.state.selSlits);try{for(n.s();!(e=n.n()).done;){var a=e.value;if(!a.pickling_date||!a.pickling_shift){t=!0;break}}}catch(s){n.e(s)}finally{n.f()}return t}return!0}},methods:{clearData:function(){this.$store.state.selSlits=[],this.$store.state.selRows=[]},savePlanning:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],a=t.$options.filters.calendarDate((new Date).toISOString()),t.$store.state.selSlits.map((function(t){n.push({pickling_shift:t.pickling_shift,pickling_date:t.pickling_date,status:"in-process for pickling",id:t.ID,updated_at:a})})),e.prev=3,e.next=6,o["a"].update(n);case 6:s=e.sent,console.log("result",s),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),console.log("error",e.t0);case 13:return e.prev=13,t.$store.state.picklingDialog=!1,i={status:"in-process for pickling,approve for pickling"},"/pickling-stock"==t.$route.path&&(i={status:"slitted"}),t.$store.dispatch("getSlittedCoils",i),e.finish(13);case 19:case"end":return e.stop()}}),e,null,[[3,10,13,19]])})))()},close:function(){this.$store.state.picklingDialog=!1,this.$store.state.selSlits=[],this.$store.state.selRows=[]}}},c=l,u=n("2877"),d=Object(u["a"])(c,a,s,!1,null,null,null);e["a"]=d.exports},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},8418:function(t,e,n){"use strict";var a=n("c04e"),s=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?s.f(t,r,i(0,n)):t[r]=n}},"92f3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"auto"}},[n("h2",{staticClass:"pb-0 font-weight-bold"},[t._v("Slitted Coils Stock")]),n("p",{staticClass:"caption grey--text text--darken-2"},[t._v("Ready for pickling")])]),n("v-col",{staticClass:"pb-0",attrs:{cols:"auto"}},[n("v-row",{attrs:{justify:"end"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[n("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.thicknessList,label:"Select Thickness","item-text":"value","item-value":"value",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("thickness")}},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),n("v-col",{attrs:{cols:"auto"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}},"v-text-field",s,!1),a))]}}]),model:{value:t.addedFromMenu,callback:function(e){t.addedFromMenu=e},expression:"addedFromMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.addedFromMenu=!1},change:t.setOptions},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}})],1)],1),t.$store.state.selRows.length>0?n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"py-5 mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:t.openDialog}},[t._v("Create Pickling Planning")])],1):t._e()],1)],1)],1),n("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.$store.state.slittedCoils,"single-select":t.singleSelect,"item-key":"ID","show-select":"",loading:t.$store.state.isLoading,"disable-pagination":"","fixed-header":"",height:"calc(100vh - 190px)","hide-default-footer":""},scopedSlots:t._u([{key:"item.company",fn:function(e){var a=e.item;return[n("div",{staticClass:"body-2"},[n("span",[t._v(t._s(t.showCompany(a.company)))])])]}},{key:"item.slit_date",fn:function(e){var a=e.item;return[n("div",{staticClass:"body-2"},[n("span",[t._v(t._s(a.date?t.$options.filters.formatDate(a.slit_date):"---"))])])]}},{key:"item.status",fn:function(e){var a=e.item;return[n("div",{staticClass:"body-2"},[n("span",{staticClass:"text-capitalize",class:t.getTextColor(a.status)},[t._v(t._s(a.status))])])]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{small:"",outlined:""},on:{click:function(e){return t.createPlanning(a)}}},[t._v("Create Pickling Planning")])]}}],null,!0),model:{value:t.$store.state.selRows,callback:function(e){t.$set(t.$store.state,"selRows",e)},expression:"$store.state.selRows"}}),n("v-row",[t.$store.state.picklingDialog?n("PicklingPlanning"):t._e()],1)],1)},s=[],i=(n("d81d"),n("2909")),r=n("5ce8"),o={components:{PicklingPlanning:r["a"]},data:function(){return{selDate:null,dateMenu:!1,data:[],dialog:!1,selShift:"",selThickness:"",selRows:[],singleSelect:!1,options:{},sortBy:"",orderBy:"desc",selStatus:null,addedFromMenu:!1,addedFrom:null,headers:[{text:"Coil No",align:"start",value:"slit_no",sortable:!1},{text:"Parent Coil ID",value:"brand_no",sortable:!1},{text:"Thickness (mm)",value:"thickness",sortable:!1},{text:"Weight (kg)",value:"actual_weight",sortable:!1},{text:"Width (mm)",value:"actual_width",sortable:!1},{text:"Slitting Date",value:"slit_date",sortable:!1},{text:"Actions",value:"actions",sortable:!1,align:"end"}]}},mounted:function(){this.$store.state.selRows=[],this.$store.state.selSlits=[],this.$store.dispatch("getShifts");var t=JSON.parse(localStorage.getItem("user")).access;t&&t.slits_stock?(this.$store.dispatch("getSlittedCoils",{status:"slitted"}),this.$store.dispatch("getThicknesses")):this.$router.push({name:"forbidden"})},watch:{options:{handler:function(t){var e=t.sortBy,n=t.sortDesc;1===e.length&&1===n.length&&(1==n[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0}},computed:{},methods:{createPlanning:function(t){t.dateMenu=!1,this.$store.state.selSlits=[t],this.$store.state.picklingDialog=!0},openDialog:function(){this.$store.state.selRows.map((function(t){t.dateMenu=!1})),this.$store.state.picklingDialog=!0,this.$store.state.selSlits=Object(i["a"])(this.$store.state.selRows)},setOptions:function(){this.searchData()},getTextColor:function(t){var e="";switch(t){case"slitted":e="grey--text text--darken-1";break;case"available":e="green--text text--darken-2";break;case"edit-required":e="red--text text--lighten-1";break;default:e="yellow--text text--darken-4";break}return e},clearSearch:function(t){"date"===t?this.addedFrom=null:"status"===t?this.selStatus=null:"thickness"===t?this.selThickness=null:"shift"===t&&(this.selShift=null),this.setOptions()},searchData:function(){var t={status:"slitted"};this.addedFrom&&(t.slit_date=this.addedFrom),this.selThickness&&(t.thickness=this.selThickness),this.$store.dispatch("getSlittedCoils",t)}}},l=o,c=(n("b878"),n("2877")),u=Object(c["a"])(l,a,s,!1,null,null,null);e["default"]=u.exports},"9bdd":function(t,e,n){var a=n("825a"),s=n("2a62");t.exports=function(t,e,n,i){try{return i?e(a(n)[0],n[1]):e(n)}catch(r){throw s(t),r}}},a628:function(t,e,n){},a630:function(t,e,n){var a=n("23e7"),s=n("4df4"),i=n("1c7e"),r=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:r},{from:s})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("06c5");function s(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(a["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,r=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(l)throw r}}}}},b878:function(t,e,n){"use strict";n("a628")},d81d:function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").map,i=n("1dde"),r=n("ae40"),o=i("map"),l=r("map");a({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,n){"use strict";var a=n("23e7"),s=n("861d"),i=n("e8b5"),r=n("23cb"),o=n("50c4"),l=n("fc6a"),c=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var n,a,u,d=l(this),f=o(d.length),p=r(t,f),h=r(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?s(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,p,h);for(a=new(void 0===n?Array:n)(b(h-p,0)),u=0;p<h;p++,u++)p in d&&c(a,u,d[p]);return a.length=u,a}})}}]);
//# sourceMappingURL=chunk-16ae9bfe.9b181a4b.js.map