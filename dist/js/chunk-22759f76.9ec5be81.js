(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22759f76"],{"051b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"auto"}},[s("h2",{staticClass:" font-weight-bold"},[e._v("Users")])]),s("v-col",{staticClass:"text-right",attrs:{cols:"auto"}},[s("v-btn",{staticClass:" mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:e.openForm}},[e._v("Add User")])],1),s("v-col",{staticClass:"caption red--text",attrs:{cols:"12"}},[e._v(e._s(e.errorMsg))])],1),s("v-row",[s("v-dialog",{staticClass:"py-5",attrs:{"max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("p",{staticClass:"body-1 font-weight-bold"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{color:"grey",dense:"",label:"User Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),s("v-row",[s("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[s("v-radio-group",{attrs:{row:"",dense:""},model:{value:e.userRole,callback:function(t){e.userRole=t},expression:"userRole"}},[s("span",{staticClass:"mr-3 grey--text text--darken-2"},[e._v("User Role")]),s("v-radio",{attrs:{label:"Admin",value:"admin",color:"grey darken-3"}}),s("v-radio",{attrs:{label:"Member",value:"member",color:"grey darken-3"}})],1)],1)],1),s("v-row",[s("v-col",{staticClass:"body-1",attrs:{cols:"12"}},[e._v("User Access")]),s("v-col",{staticClass:"body-2 pr-0 py-0",attrs:{cols:"auto"}},[s("v-checkbox",{staticClass:"ma-0 pa-0 body-2",attrs:{color:"grey darken-3",dense:"",label:"HR Stock",value:"hr_stock","hide-details":""},model:{value:e.userAccess,callback:function(t){e.userAccess=t},expression:"userAccess"}})],1),s("v-col",{staticClass:"pr-0 py-0",attrs:{cols:"auto"}},[s("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{color:"grey darken-3",dense:"",label:"Slits Stock",value:"slits_stock","hide-details":""},model:{value:e.userAccess,callback:function(t){e.userAccess=t},expression:"userAccess"}})],1),s("v-col",{staticClass:"pr-0 py-0",attrs:{cols:"auto"}},[s("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{color:"grey darken-3",dense:"",label:"Slits Preview",value:"slits_preview","hide-details":""},model:{value:e.userAccess,callback:function(t){e.userAccess=t},expression:"userAccess"}})],1),s("v-col",{staticClass:"pr-0 py-0",attrs:{cols:"auto"}},[s("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{color:"grey darken-3",dense:"",label:"User Creation",value:"users","hide-details":""},model:{value:e.userAccess,callback:function(t){e.userAccess=t},expression:"userAccess"}})],1)],1)],1)],1),s("v-card-actions",{staticClass:"pb-5 mt-4"},[s("v-spacer"),s("v-btn",{attrs:{outlined:"",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),s("v-btn",{attrs:{dark:e.name.length>0,disabled:e.name.length<=0},on:{click:e.addUpdateUser}},[e._v(" Save ")])],1)],1)],1)],1),s("v-data-table",{staticClass:"elevation-1 coils mt-3",attrs:{headers:e.headers,items:e.$store.state.users,"hide-default-footer":"",loading:e.$store.state.isLoading,"fixed-header":"",height:"calc(100vh - 210px)","disable-pagination":""},scopedSlots:e._u([{key:"item.access",fn:function(t){var r=t.item;return[s("p",{staticClass:"my-1"},[e._v("HR Stock: "+e._s(r.access.hr_stock?"Yes":"No"))]),s("p",{staticClass:"my-0"},[e._v("Slits Stock: "+e._s(r.access.slits_stock?"Yes":"No"))]),s("p",{staticClass:"py-0 my-1"},[e._v("Slits Preview: "+e._s(r.access.slits_preview?"Yes":"No"))]),s("p",{staticClass:"py-0 my-1"},[e._v("Users: "+e._s(r.access.users?"Yes":"No"))])]}},{key:"item.actions",fn:function(t){var r=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v(" mdi-pencil ")]),s("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r.id)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)},a=[];s("caad"),s("b0c0"),s("4fad"),s("2532");function n(e){if(Array.isArray(e))return e}s("a4d3"),s("e01a"),s("d28b"),s("d3b7"),s("3ca3"),s("ddb0");function c(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],r=!0,a=!1,n=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done);r=!0)if(s.push(c.value),t&&s.length===t)break}catch(i){a=!0,n=i}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw n}}return s}}var o=s("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return n(e)||c(e,t)||Object(o["a"])(e,t)||i()}s("96cf");var u=s("1da1"),d=s("5b34"),v={components:{},data:function(){return{pwd:null,userRole:null,userAccess:[],errorMsg:"",editedIndex:-1,dialog:!1,actionsList:[{icon:"mdi-plus-circle",text:"add"},{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"}],name:"",headers:[{text:"ID",align:"start",value:"id"},{text:"Name",value:"name",sortable:!1},{text:"Role",value:"role",sortable:!1},{text:"Access",value:"access",sortable:!1},{text:"Actions",value:"actions",sortable:!1}]}},mounted:function(){this.$store.dispatch("getUsers")},watch:{},computed:{formTitle:function(){return this.editedIndex<=0?"Add User":"Edit User"}},methods:{openForm:function(){this.editedIndex=0,this.dialog=!0,this.name="",this.userAccess=[],this.userRole=null,this.pwd=null},deleteItem:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d["a"].delete(e);case 3:r=s.sent,console.log("result",r.data),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),s.t0.response.data&&(t.errorMsg=s.t0.response.data,setTimeout((function(){t.errorMsg=""}),5e3));case 10:return s.prev=10,t.$store.dispatch("getUsers"),s.finish(10);case 13:case"end":return s.stop()}}),s,null,[[0,7,10,13]])})))()},editItem:function(e){this.userRole=e.role,this.pwd=e.pwd,this.userAccess=[];for(var t=0,s=Object.entries(e.access);t<s.length;t++){var r=l(s[t],2),a=r[0],n=r[1];n&&this.userAccess.push(a)}this.dialog=!0,this.editedIndex=e.id,this.name=e.name},addUpdateUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s={hr_stock:e.userAccess.includes("hr_stock"),slits_stock:e.userAccess.includes("slits_stock"),slits_preview:e.userAccess.includes("slits_preview"),users:e.userAccess.includes("users")},!(e.editedIndex>0)){t.next=19;break}return t.prev=2,t.next=5,d["a"].update(e.editedIndex,{name:e.name,pwd:e.pwd,access:JSON.stringify(s),role:e.userRole});case 5:r=t.sent,console.log("result",r),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.log("error",t.t0);case 12:return t.prev=12,e.dialog=!1,e.$store.dispatch("getUsers",{id:e.editedIndex}),e.$store.dispatch("getUsers"),t.finish(12);case 17:t.next=33;break;case 19:return t.prev=19,t.next=22,d["a"].add({name:e.name,pwd:"test123",access:JSON.stringify(s),role:e.userRole});case 22:a=t.sent,console.log("result",a),t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](19),console.log("error",t.t1);case 29:return t.prev=29,e.dialog=!1,e.$store.dispatch("getUsers"),t.finish(29);case 33:case"end":return t.stop()}}),t,null,[[2,9,12,17],[19,26,29,33]])})))()}}},f=v,p=(s("2ee6"),s("2877")),h=Object(p["a"])(f,r,a,!1,null,null,null);t["default"]=h.exports},"06c5":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s("a630"),s("fb6a"),s("b0c0"),s("d3b7"),s("25f0"),s("3ca3");var r=s("6b75");function a(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Object(r["a"])(e,t):void 0}}},2532:function(e,t,s){"use strict";var r=s("23e7"),a=s("5a34"),n=s("1d80"),c=s("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~String(n(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,s){"use strict";var r=s("6eeb"),a=s("825a"),n=s("d039"),c=s("ad6d"),o="toString",i=RegExp.prototype,l=i[o],u=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&r(RegExp.prototype,o,(function(){var e=a(this),t=String(e.source),s=e.flags,r=String(void 0===s&&e instanceof RegExp&&!("flags"in i)?c.call(e):s);return"/"+t+"/"+r}),{unsafe:!0})},"2ee6":function(e,t,s){"use strict";s("8c9a")},"4df4":function(e,t,s){"use strict";var r=s("0366"),a=s("7b0b"),n=s("9bdd"),c=s("e95a"),o=s("50c4"),i=s("8418"),l=s("35a1");e.exports=function(e){var t,s,u,d,v,f,p=a(e),h="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,g=void 0!==m,y=l(p),x=0;if(g&&(m=r(m,b>2?arguments[2]:void 0,2)),void 0==y||h==Array&&c(y))for(t=o(p.length),s=new h(t);t>x;x++)f=g?m(p[x],x):p[x],i(s,x,f);else for(d=y.call(p),v=d.next,s=new h;!(u=v.call(d)).done;x++)f=g?n(d,m,[u.value,x],!0):u.value,i(s,x,f);return s.length=x,s}},"4fad":function(e,t,s){var r=s("23e7"),a=s("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return a(e)}})},"5a34":function(e,t,s){var r=s("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6b75":function(e,t,s){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}s.d(t,"a",(function(){return r}))},"6f53":function(e,t,s){var r=s("83ab"),a=s("df75"),n=s("fc6a"),c=s("d1e7").f,o=function(e){return function(t){var s,o=n(t),i=a(o),l=i.length,u=0,d=[];while(l>u)s=i[u++],r&&!c.call(o,s)||d.push(e?[s,o[s]]:o[s]);return d}};e.exports={entries:o(!0),values:o(!1)}},8418:function(e,t,s){"use strict";var r=s("c04e"),a=s("9bf2"),n=s("5c6c");e.exports=function(e,t,s){var c=r(t);c in e?a.f(e,c,n(0,s)):e[c]=s}},"8c9a":function(e,t,s){},"9bdd":function(e,t,s){var r=s("825a"),a=s("2a62");e.exports=function(e,t,s,n){try{return n?t(r(s)[0],s[1]):t(s)}catch(c){throw a(e),c}}},a630:function(e,t,s){var r=s("23e7"),a=s("4df4"),n=s("1c7e"),c=!n((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:c},{from:a})},ab13:function(e,t,s){var r=s("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},caad:function(e,t,s){"use strict";var r=s("23e7"),a=s("4d64").includes,n=s("44d2"),c=s("ae40"),o=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!o},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},fb6a:function(e,t,s){"use strict";var r=s("23e7"),a=s("861d"),n=s("e8b5"),c=s("23cb"),o=s("50c4"),i=s("fc6a"),l=s("8418"),u=s("b622"),d=s("1dde"),v=s("ae40"),f=d("slice"),p=v("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),b=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!f||!p},{slice:function(e,t){var s,r,u,d=i(this),v=o(d.length),f=c(e,v),p=c(void 0===t?v:t,v);if(n(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?a(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return b.call(d,f,p);for(r=new(void 0===s?Array:s)(m(p-f,0)),u=0;f<p;f++,u++)f in d&&l(r,u,d[f]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-22759f76.9ec5be81.js.map