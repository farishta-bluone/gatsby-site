(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87b745b6"],{4361:function(t,e,s){"use strict";s("901d")},"901d":function(t,e,s){},ce4f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"auto"}},[s("h2",{staticClass:"font-weight-bold"},[t._v("Rolled Stock")])]),s("v-col",{staticClass:"pb-0",attrs:{cols:"auto"}},[s("v-row",{attrs:{justify:"end"}},[s("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[s("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.thicknessList,label:"Select Thickness","item-text":"value","item-value":"value",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("thickness")}},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),s("v-col",{attrs:{cols:"auto"}},[s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,l=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}},"v-text-field",l,!1),a))]}}]),model:{value:t.addedFromMenu,callback:function(e){t.addedFromMenu=e},expression:"addedFromMenu"}},[s("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.addedFromMenu=!1},change:t.setOptions},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}})],1)],1)],1)],1)],1),s("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.$store.state.slittedCoils,loading:t.$store.state.isLoading,"disable-pagination":"","fixed-header":"",height:"calc(100vh - 190px)","hide-default-footer":""},scopedSlots:t._u([{key:"item.rolling_date",fn:function(e){var a=e.item;return[s("div",{staticClass:"body-2"},[s("span",[t._v(t._s(a.rolling_date?t.$options.filters.formatDate(a.rolling_date):"---"))])])]}}],null,!0)})],1)},l=[],o={components:{},data:function(){return{selected:[],selShift:"",selThickness:"",options:{},sortBy:"",orderBy:"desc",addedFromMenu:!1,addedFrom:null,maxDate:(new Date).toISOString(),headline:"",statusList:[{id:1,name:"Available"},{id:2,name:"In-Queue"},{id:3,name:"Slitted"}],headers:[{text:"Coil No",align:"start",value:"slit_no",sortable:!1},{text:"Parent Coil ID",value:"brand_no",sortable:!1},{text:"OD (mm)",value:"pickling_od"},{text:"Thickness (mm)",value:"rolling_thickness",sortable:!1},{text:"Weight (kg)",value:"rolled_weight",sortable:!1},{text:"Width (mm)",value:"pickled_width",sortable:!1},{text:"Rolling Date",value:"rolling_date",sortable:!1},{text:"Operator",value:"rolling_operator",sortable:!1}]}},mounted:function(){this.$store.dispatch("getSlittedCoils",{status:"rolled"}),this.$store.dispatch("getThicknesses")},watch:{options:{handler:function(t){var e=t.sortBy,s=t.sortDesc;1===e.length&&1===s.length&&(1==s[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0}},computed:{},methods:{setOptions:function(){this.searchData()},clearSearch:function(t){"date"===t?this.addedFrom=null:"thickness"===t?this.selThickness=null:"shift"===t&&(this.selShift=null),this.setOptions()},searchData:function(){var t={status:"rolled"};this.addedFrom&&(t.rolling_date=this.addedFrom),this.selThickness&&(t.rolling_thickness=this.selThickness),this.$store.dispatch("getSlittedCoils",t)}}},i=o,n=(s("4361"),s("2877")),r=Object(n["a"])(i,a,l,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-87b745b6.c7bcfd9d.js.map