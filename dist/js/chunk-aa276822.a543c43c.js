(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa276822"],{"0d54":function(t,e,s){"use strict";s("4b7d")},"4b7d":function(t,e,s){},"6f80":function(t,e,s){},8418:function(t,e,s){"use strict";var i=s("c04e"),a=s("9bf2"),o=s("5c6c");t.exports=function(t,e,s){var l=i(e);l in t?a.f(t,l,o(0,s)):t[l]=s}},"99af":function(t,e,s){"use strict";var i=s("23e7"),a=s("d039"),o=s("e8b5"),l=s("861d"),n=s("7b0b"),r=s("50c4"),c=s("8418"),d=s("65f0"),u=s("1dde"),h=s("b622"),v=s("2d00"),p=h("isConcatSpreadable"),f=9007199254740991,_="Maximum allowed index exceeded",m=v>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),w=u("concat"),g=function(t){if(!l(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},b=!m||!w;i({target:"Array",proto:!0,forced:b},{concat:function(t){var e,s,i,a,o,l=n(this),u=d(l,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?l:arguments[e],g(o)){if(a=r(o.length),h+a>f)throw TypeError(_);for(s=0;s<a;s++,h++)s in o&&c(u,h,o[s])}else{if(h>=f)throw TypeError(_);c(u,h++,o)}return u.length=h,u}})},a465:function(t,e,s){"use strict";s("6f80")},da6d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"mt-3",attrs:{justify:"space-between"}},[s("v-col",[s("h2",{staticClass:" font-weight-bold"},[t._v("HR Slitting Planning Preview")])]),s("v-col",[s("v-row",{attrs:{justify:"end"}},[s("v-col",{attrs:{cols:"auto"}},[s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"body-2",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")},click:t.setOptions},model:{value:t.$store.state.previewDate,callback:function(e){t.$set(t.$store.state,"previewDate",e)},expression:"$store.state.previewDate"}},"v-text-field",a,!1),i))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[s("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.menu=!1},change:t.setOptions},model:{value:t.$store.state.previewDate,callback:function(e){t.$set(t.$store.state,"previewDate",e)},expression:"$store.state.previewDate"}})],1)],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[s("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.shifts,label:"Select Shift","item-text":"name","item-value":"id",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("shift")}},model:{value:t.$store.state.previewShift,callback:function(e){t.$set(t.$store.state,"previewShift",t._n(e))},expression:"$store.state.previewShift"}})],1),t.selMultiRows.length>0?s("v-col",{attrs:{cols:"auto"}},[s("v-btn",{attrs:{dark:""},on:{click:t.downloadPdf}},[t._v("Download PDF")])],1):t._e()],1)],1)],1),s("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.orderedData,loading:t.$store.state.isLoading,"footer-props":{"items-per-page-options":[5,10,25,50,100]},"fixed-header":"",height:"calc(100vh - 190px)",options:t.options,"disable-pagination":"",id:"pdf","single-select":t.singleSelect,"show-select":"","hide-default-footer":""},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.slit_date",fn:function(e){var i=e.item;return[s("div",{staticClass:"body-2"},[s("span",[t._v(t._s(i.slit_date?t.$options.filters.formatDate(i.slit_date):"---"))])])]}},{key:"item.parent_size",fn:function(e){var i=e.item;return[s("div",{staticClass:"body-2"},[s("p",{staticClass:"mb-0"},[t._v("Width: "+t._s(i.width)+" mm")]),s("p",{staticClass:"mb-0"},[t._v("Weight: "+t._s(i.weight)+" kg")]),s("p",{staticClass:"mb-0"},[t._v("Thickness: "+t._s(i.thickness)+" mm")])])]}},{key:"item.slits",fn:function(e){var i=e.item;return t._l(i.slits,(function(e){return s("v-row",{key:e.id,staticClass:"body-2"},[e.slit_no?s("v-col",{attrs:{cols:"auto"}},[t._v(t._s(e.slit_no))]):t._e(),s("v-col",[s("v-row",[s("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[s("span",[t._v("Width: "+t._s(e.slitted_width)+" mm")])]),s("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[s("span",[t._v("Weight: "+t._s(e.slitted_weight)+" kg")])]),s("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[e.actual_width?s("span",[t._v("Actual Width: "+t._s(e.actual_width)+" mm")]):t._e()]),s("v-col",{staticClass:"py-0",attrs:{cols:"6"}},[e.actual_weight?s("span",[t._v("Actual Weight: "+t._s(e.actual_weight)+" kg")]):t._e()])],1)],1),s("v-col",{attrs:{cols:"12"}},[s("v-divider")],1)],1)}))}},{key:"item.slit_shift",fn:function(e){var i=e.item;return[s("div",{staticClass:"body-2"},[t._v(" "+t._s(i.slit_shift?t.getShiftName:"24 Hour Shift")+" ")])]}},{key:"item.status",fn:function(e){var i=e.item;return[s("div",{staticClass:"body-2"},[s("span",{staticClass:"text-capitalize",class:t.getTextColor(i.status)},[t._v(t._s(i.status))])])]}},{key:"item.actions",fn:function(e){var i=e.item;return[s("v-row",{attrs:{align:"center"}},[t.checkRole("admin")&&"in-queue"===i.status?s("v-col",{staticClass:"pb-0",attrs:{cols:"12"},on:{click:function(e){return t.openDrawer(i)}}},[s("v-btn",{attrs:{small:"",outlined:""}},[t._v("Edit Planning")])],1):t._e(),t.checkRole("admin")&&"in-queue"===i.status?s("v-col",{attrs:{cols:"12"},on:{click:function(e){return t.resetCoil(i)}}},[s("v-btn",{attrs:{small:"",outlined:""}},[t._v("Reset to Available")])],1):t._e(),t.checkRole("member")&&"in-queue"===i.status?s("v-col",{attrs:{cols:"12"},on:{click:function(e){return t.openDrawer(i)}}},[s("v-btn",{attrs:{small:"",outlined:""}},[t._v("View & Process")])],1):t._e(),t.checkRole("admin")&&"in-process"===i.status?s("v-col",{attrs:{cols:"12"},on:{click:function(e){return t.openDrawer(i)}}},[s("v-btn",{attrs:{small:"",outlined:""}},[t._v("Mark Complete")])],1):t._e()],1)]}}],null,!0),model:{value:t.selMultiRows,callback:function(e){t.selMultiRows=e},expression:"selMultiRows"}}),s("div",{staticClass:"d-none",attrs:{id:"checkMe"}},[s("h2",{staticClass:"my-3"},[t._v("HR Coil Slitted Stock")]),s("table",{staticClass:"table table-bordered"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Parent Coil ID")]),s("th",{attrs:{scope:"col"}},[t._v("Parent Coil Size")]),s("th",{attrs:{scope:"col"}},[t._v("Slits")]),s("th",{attrs:{scope:"col"}},[t._v("Status")])])]),s("tbody",t._l(t.selMultiRows,(function(e){return s("tr",{key:e.name},[s("td",[t._v(t._s(e.brand_no))]),s("td",[s("div",[s("p",{staticClass:"mb-0"},[t._v("Width: "+t._s(e.width)+" mm")]),s("p",{staticClass:"mb-0"},[t._v("Weight: "+t._s(e.weight)+" kg")]),s("p",{staticClass:"mb-0"},[t._v("Thickness: "+t._s(e.thickness)+" mm")])])]),s("td",t._l(e.slits,(function(e){return s("div",{key:e.id},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" Coil No: "+t._s(e.slit_no)+" ")]),s("div",{staticClass:"col"},[t._v(" Width: "+t._s(e.slitted_width)+" mm ")]),s("div",{staticClass:"col"},[t._v(" Weight: "+t._s(e.slitted_weight)+" kg ")])])])})),0),s("td",[s("div",[s("span",{staticClass:"text-capitalize",class:t.getTextColor(e.status)},[t._v(t._s(e.status))])])])])})),0)])]),t.$store.state.slitDrawer?s("SlitCoil"):t._e()],1)},a=[],o=(s("99af"),s("7db0"),s("d81d"),s("96cf"),s("1da1")),l=s("f0d8"),n=s("df4b"),r={components:{SlitCoil:l["a"]},data:function(){return{selMultiRows:[],singleSelect:!1,actionsList:[{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"}],options:{},sortBy:"",orderBy:"desc",selCompany:null,selStatus:null,menu:!1,maxDate:(new Date).toISOString(),headline:"",statusList:[{id:1,name:"Avilable"},{id:2,name:"Slitted"}],headers:[{text:"Parent Coil ID",value:"brand_no"},{text:"Parent Coil Size",value:"parent_size"},{text:"Slits",value:"slits",sortable:!1},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1}]}},mounted:function(){this.$store.dispatch("getShifts")},computed:{orderedData:function(){var t=this;if(this.$store.state.slittedCoils.length>0){for(var e=[],s=function(s){var i=t.$store.state.slittedCoils[s],a=e.find((function(t){return t.id==i.parent_id}));if(a)a.slits.push({id:i.ID,slitted_weight:i.slitted_weight,slitted_width:i.slitted_width,actual_weight:i.actual_weight,actual_width:i.actual_width,slit_no:i.slit_no});else{var o={id:i.parent_id,status:i.status,thickness:i.thickness,width:i.width,weight:i.weight,slit_shift:i.slit_shift,slit_date:i.slit_date,formulated_weigth:i.formulated_weigth,company:i.company,brand_no:i.brand_no,slits:[{id:i.ID,slitted_weight:i.slitted_weight,slitted_width:i.slitted_width,actual_weight:i.actual_weight,actual_width:i.actual_width,slit_no:i.slit_no}]};e.push(o)}},i=0;i<this.$store.state.slittedCoils.length;i++)s(i);return e}return[]}},watch:{options:{handler:function(t){var e=t.sortBy,s=t.sortDesc;1===e.length&&1===s.length&&(1==s[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0}},methods:{checkRole:function(t){var e=JSON.parse(localStorage.getItem("user"));return!(!e||e.role!=t)},resetCoil:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var i,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log(t),i={status:"available",ids:"",updated_at:e.$options.filters.calendarDate((new Date).toISOString())},t.slits.map((function(t){i.ids?i.ids="".concat(i.ids,",").concat(t.id):i.ids=t.id})),console.log("Data"),s.prev=4,s.next=7,n["a"].deleteSlits(t.id,i);case 7:a=s.sent,console.log("result",a),s.next=14;break;case 11:s.prev=11,s.t0=s["catch"](4),console.log("error",s.t0);case 14:return s.prev=14,e.searchData(),s.finish(14);case 17:case"end":return s.stop()}}),s,null,[[4,11,14,17]])})))()},openDrawer:function(t){console.log("item",t),this.$store.state.coilId=t.id,this.$store.state.slitDrawer=!0},downloadPdf:function(){this.$htmlToPaper("checkMe")},openSlitForm:function(){this.$store.state.selRows=this.selMultiRows,this.$router.push({path:"/slit-planning"})},setOptions:function(){console.log("Calleddddddd"),1===this.options.page?this.searchData():this.options.page=1},getTextColor:function(t){var e="";switch(t){case"slitted":e="grey--text text--darken-1";break;case"avilable":e="green--text text--darken-2";break;case"edit-required":e="red--text text--lighten-1";break;default:e="yellow--text text--darken-3";break}return e},openForm:function(){console.log(this.$store.state),this.$store.state.coilId=null,this.$store.state.coilDrawer=!0},clearSearch:function(t){"date"===t?this.$store.state.previewDate=null:"status"===t?this.selStatus=null:"company"===t?this.selCompany=null:"shift"===t&&(this.$store.state.previewShift=null),this.setOptions()},searchData:function(){var t={status:"in-queue,in-process"},e=this.options,s=e.page,i=e.itemsPerPage;t.sortBy=this.sortBy,t.orderBy=this.orderBy,t.page=s,t.limit=i,this.$store.state.previewShift&&(t.slit_shift=this.$store.state.previewShift),this.$store.state.previewDate&&(t.slit_date=this.$store.state.previewDate),this.$store.dispatch("getSlittedCoils",t)}}},c=r,d=(s("0d54"),s("a465"),s("2877")),u=Object(d["a"])(c,i,a,!1,null,"e08ef644",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-aa276822.a543c43c.js.map