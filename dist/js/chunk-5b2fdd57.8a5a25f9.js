(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b2fdd57"],{"06c5":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("a630"),i("fb6a"),i("b0c0"),i("d3b7"),i("25f0"),i("3ca3");var a=i("6b75");function s(t,e){if(t){if("string"===typeof t)return Object(a["a"])(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(a["a"])(t,e):void 0}}},1148:function(t,e,i){"use strict";var a=i("a691"),s=i("1d80");t.exports="".repeat||function(t){var e=String(s(this)),i="",n=a(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(i+=e);return i}},"25f0":function(t,e,i){"use strict";var a=i("6eeb"),s=i("825a"),n=i("d039"),r=i("ad6d"),l="toString",o=RegExp.prototype,c=o[l],d=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=l;(d||u)&&a(RegExp.prototype,l,(function(){var t=s(this),e=String(t.source),i=t.flags,a=String(void 0===i&&t instanceof RegExp&&!("flags"in o)?r.call(t):i);return"/"+e+"/"+a}),{unsafe:!0})},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"4df4":function(t,e,i){"use strict";var a=i("0366"),s=i("7b0b"),n=i("9bdd"),r=i("e95a"),l=i("50c4"),o=i("8418"),c=i("35a1");t.exports=function(t){var e,i,d,u,h,f,v=s(t),p="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,g=void 0!==b,_=c(v),w=0;if(g&&(b=a(b,m>2?arguments[2]:void 0,2)),void 0==_||p==Array&&r(_))for(e=l(v.length),i=new p(e);e>w;w++)f=g?b(v[w],w):v[w],o(i,w,f);else for(u=_.call(v),h=u.next,i=new p;!(d=h.call(u)).done;w++)f=g?n(u,b,[d.value,w],!0):d.value,o(i,w,f);return i.length=w,i}},"6b75":function(t,e,i){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}i.d(e,"a",(function(){return a}))},8418:function(t,e,i){"use strict";var a=i("c04e"),s=i("9bf2"),n=i("5c6c");t.exports=function(t,e,i){var r=a(e);r in t?s.f(t,r,n(0,i)):t[r]=i}},"9bdd":function(t,e,i){var a=i("825a"),s=i("2a62");t.exports=function(t,e,i,n){try{return n?e(a(i)[0],i[1]):e(i)}catch(r){throw s(t),r}}},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("23cb"),n=i("a691"),r=i("50c4"),l=i("7b0b"),o=i("65f0"),c=i("8418"),d=i("1dde"),u=i("ae40"),h=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var i,a,d,u,h,f,g=l(this),_=r(g.length),w=s(t,_),y=arguments.length;if(0===y?i=a=0:1===y?(i=0,a=_-w):(i=y-2,a=p(v(n(e),0),_-w)),_+i-a>m)throw TypeError(b);for(d=o(g,a),u=0;u<a;u++)h=w+u,h in g&&c(d,u,g[h]);if(d.length=a,i<a){for(u=w;u<_-a;u++)h=u+a,f=u+i,h in g?g[f]=g[h]:delete g[f];for(u=_;u>_-a+i;u--)delete g[u-1]}else if(i>a)for(u=_-a;u>w;u--)h=u+a-1,f=u+i-1,h in g?g[f]=g[h]:delete g[f];for(u=0;u<i;u++)g[u+w]=arguments[u+2];return g.length=_-a+i,d}})},a630:function(t,e,i){var a=i("23e7"),s=i("4df4"),n=i("1c7e"),r=!n((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:r},{from:s})},b680:function(t,e,i){"use strict";var a=i("23e7"),s=i("a691"),n=i("408a"),r=i("1148"),l=i("d039"),o=1..toFixed,c=Math.floor,d=function(t,e,i){return 0===e?i:e%2===1?d(t,e-1,i*t):d(t*t,e/2,i)},u=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){o.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,i,a,l,o=n(this),h=s(t),f=[0,0,0,0,0,0],v="",p="0",m=function(t,e){var i=-1,a=e;while(++i<6)a+=t*f[i],f[i]=a%1e7,a=c(a/1e7)},b=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=c(i/t),i=i%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+r.call("0",7-i.length)+i}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(v="-",o=-o),o>1e-21)if(e=u(o*d(2,69,1))-69,i=e<0?o*d(2,-e,1):o/d(2,e,1),i*=4503599627370496,e=52-e,e>0){m(0,i),a=h;while(a>=7)m(1e7,0),a-=7;m(d(10,a,1),0),a=e-1;while(a>=23)b(1<<23),a-=23;b(1<<a),m(1,1),b(2),p=g()}else m(0,i),m(1<<-e,0),p=g()+r.call("0",h);return h>0?(l=p.length,p=v+(l<=h?"0."+r.call("0",h-l)+p:p.slice(0,l-h)+"."+p.slice(l-h))):p=v+p,p}})},c740:function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").findIndex,n=i("44d2"),r=i("ae40"),l="findIndex",o=!0,c=r(l);l in[]&&Array(1)[l]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(l)},d81d:function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").map,n=i("1dde"),r=i("ae40"),l=n("map"),o=r("map");a({target:"Array",proto:!0,forced:!l||!o},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ea81:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mt-3"},[i("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[i("v-btn",{staticClass:"caption",attrs:{text:""},on:{click:t.goBack}},[t._v("Go Back")])],1)],1),i("v-row",{staticClass:" mx-1",attrs:{justify:"space-around"}},[i("v-col",[i("h2",[t._v("Slit Planning")])])],1),t._l(t.$store.state.selRows,(function(t,e){return i("div",{key:e},[i("SlittedCoil",{attrs:{coilData:t}})],1)}))],2)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-5",attrs:{fluid:""}},[i("v-expansion-panels",{model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[i("v-expansion-panel",[i("v-expansion-panel-header",[[i("v-row",{staticClass:"pb-3"},[i("v-col",{staticClass:"my-3",attrs:{cols:"6"}},[i("h3",[t._v("Coil "+t._s(t.coilData.brand_no))])]),"available"===t.savedData.status.toLowerCase()?i("v-col",{staticClass:"text-right"},[i("v-btn",{staticClass:"mr-4",attrs:{disabled:t.haltSave||!t.validateForm,dark:!t.haltSave&&t.validateForm},on:{click:t.savePlanning}},[t._v("Save Planning")])],1):t._e()],1)]],2),i("v-expansion-panel-content",[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("h4",{staticClass:"mb-5"},[t._v("Available Coil")]),i("p",{staticClass:"mb-2"},[t._v("ID: "+t._s(t.coilData.id))]),i("p",{staticClass:"mb-2"},[t._v("Company: "+t._s(t.coilData.company))]),i("p",{staticClass:"mb-2"},[t._v("Weight: "+t._s(t.coilData.weight)+" kg")]),i("p",{staticClass:"mb-2"},[t._v("Formulated Weight: "+t._s(t.coilData.formulated_weight)+" kg")]),i("p",{staticClass:"mb-2"},[t._v("Width: "+t._s(t.coilData.width)+" mm")]),i("p",{staticClass:"mb-2"},[t._v("Thickness: "+t._s(t.coilData.thickness)+" mm")]),i("p",{staticClass:"font-weight-bold green--text text--darken-4",attrs:{color:"1B5E20"}},[t._v("Available width: "+t._s(t.avilableWidth)+" mm")])]),i("v-col",{attrs:{cols:"8"}},[i("v-row",[i("v-col",{attrs:{cols:"9"}},[i("v-row",{staticClass:"mb-5",attrs:{justify:"space-between"}},[i("v-col",{attrs:{cols:"7"}},[i("h4",[t._v("Slit Planning")])]),i("v-col",[i("v-btn",{attrs:{outlined:""},on:{click:t.addRule}},[t._v("Add Slit")])],1)],1),t.slittedItems.length>0?i("v-row",[i("v-col",[t._l(t.slittedItems,(function(e,a){return i("v-row",{key:a},[i("v-col",{attrs:{cols:"auto"}},[i("v-row",[i("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[i("v-text-field",{attrs:{label:"Slit Width (mm)",outlined:"",dense:"",color:"grey",type:"number"},model:{value:e.slitted_width,callback:function(i){t.$set(e,"slitted_width",t._n(i))},expression:"item.slitted_width"}})],1),i("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[i("v-text-field",{attrs:{label:"Slit Weight (kg)",outlined:"",dense:"",color:"grey",type:"number",readonly:"",value:t.formulatedWt(e.slitted_width)}})],1),i("v-col",{staticClass:"py-1",attrs:{cols:"auto"}},[i("v-icon",{staticClass:"mr-2",on:{click:function(i){return t.copySlit(e)}}},[t._v(" mdi-content-duplicate ")]),i("v-icon",{on:{click:function(i){return t.deleteSlit(e)}}},[t._v(" mdi-delete ")])],1)],1)],1)],1)})),i("div",{staticClass:"red--text caption"},[t._v(t._s(t.validateForm?"":"Total Slitted width cannot exceed the total Coil width"))])],2)],1):t._e()],1),i("v-col",{attrs:{cols:"3"}},[i("v-row",{staticClass:"mb-3"},[i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"mb-5"},[t._v("Schedule")])]),i("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){t.selDate=null}},model:{value:t.selDate,callback:function(e){t.selDate=e},expression:"selDate"}},"v-text-field",s,!1),a))]}}]),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:"",min:t.maxDate},on:{input:function(e){t.dateMenu=!1}},model:{value:t.selDate,callback:function(e){t.selDate=e},expression:"selDate"}})],1)],1),i("v-col",{staticClass:"py-0 my-0",attrs:{cols:"12"}},[i("v-select",{attrs:{outlined:"",dense:"",items:t.$store.state.shifts,label:"Select Shift","item-text":"name","item-value":"id",color:"grey"},model:{value:t.shift,callback:function(e){t.shift=t._n(e)},expression:"shift"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},r=[],l=(i("c740"),i("d81d"),i("a434"),i("b680"),i("6b75"));function o(t){if(Array.isArray(t))return Object(l["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var d=i("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return o(t)||c(t)||Object(d["a"])(t)||u()}i("96cf");var f=i("1da1"),v=i("df4b"),p={data:function(){return{panel:0,shift:"",rule:!0,data:{},saved:!1,savedData:{status:"available"},dateMenu:!1,selDate:null,maxDate:(new Date).toISOString(),slittedItems:[],errorMsg:"",deletedItems:[]}},props:{coilData:Object},computed:{haltSave:function(){var t=!1;if(this.selDate&&this.shift&&this.slittedItems.length>0){for(var e=0;e<this.slittedItems.length;e++)if(!this.slittedItems[e].slitted_width){t=!0;break}return t}return console.log("check else"),!0},validateForm:function(){return this.avilableWidth>=0},avilableWidth:function(){var t=0;return console.log(this.slittedItems),this.slittedItems.map((function(e){t+=e.slitted_width})),this.coilData.width-t}},mounted:function(){this.$store.dispatch("getShifts"),this.$route.params.id&&(this.slittedItems=this.$store.state.slits,this.selDate=this.$store.state.slittedDate,this.shift=this.$store.state.slittedShift)},methods:{savePlanning:function(){this.$route.params.id?this.updateSlits():this.saveSlit()},formulatedWt:function(t){return parseFloat((this.coilData.weight/this.coilData.width*t).toFixed(3))},updateSlits:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={},a=t.$options.filters.calendarDate((new Date).toISOString()),i.status="in-queue",i.slit_date=t.selDate,i.slit_shift=t.shift,i.slittedItems=h(t.slittedItems),t.slittedItems.map((function(e){e.created_at=e.created_at?e.created_at:a,e.updated_at=a,e.slitted_weight=t.formulatedWt(e.slitted_width),e.status="in-queue",e.is_avilable=!0,e.parent_id=t.coilData.id})),t.avilableWidth>0&&i.slittedItems.push({id:t.slittedItems.length+1,status:"in-queue",is_avilable:!0,created_at:a,updated_at:a,slitted_width:t.avilableWidth,slitted_weight:t.formulatedWt(t.avilableWidth),parent_id:t.coilData.id}),i.deletedItems=t.deletedItems,e.prev=9,e.next=12,v["a"].updateSlits(t.coilData.id,i);case 12:s=e.sent,console.log("result",s),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](9),console.log("error",e.t0);case 19:return e.prev=19,t.$router.push({path:"/coils"}),t.$store.dispatch("getCoils",{page:1,limit:10}),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[9,16,19,23]])})))()},saveSlit:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={},a=t.$options.filters.calendarDate((new Date).toISOString()),i.status="in-queue",i.slit_date=t.selDate,i.slit_shift=t.shift,i.slittedItems=h(t.slittedItems),t.slittedItems.map((function(e){e.status="in-queue",e.is_avilable=!0,e.created_at=a,e.updated_at=a,e.slitted_weight=t.formulatedWt(e.slitted_width),e.parent_id=t.coilData.id})),t.avilableWidth>0&&i.slittedItems.push({id:t.slittedItems.length+1,status:"in-queue",is_avilable:!0,created_at:a,updated_at:a,slitted_width:t.avilableWidth,slitted_weight:t.formulatedWt(t.avilableWidth),parent_id:t.coilData.id}),e.prev=8,e.next=11,v["a"].addSlits(t.coilData.id,i);case 11:s=e.sent,t.savedData=s.data[0],e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](8),console.log("error",e.t0);case 18:return e.prev=18,t.$store.state.coilDrawer=!1,t.saved=!0,e.finish(18);case 22:case"end":return e.stop()}}),e,null,[[8,15,18,22]])})))()},deleteSlit:function(t){if(t.ID){var e=this.slittedItems.findIndex((function(e){return e.ID==t.ID}));this.deletedItems.push(this.slittedItems[e]),this.slittedItems.splice(e,1)}else{var i=this.slittedItems.findIndex((function(e){return e.id==t.id}));this.slittedItems.splice(i,1)}},copySlit:function(t){var e=Object.assign({},t);this.slittedItems.push({id:this.slittedItems.length+1,slitted_width:e.slitted_width,slitted_weight:e.slitted_weight})},addRule:function(){this.slittedItems.push({id:this.slittedItems.length+1,slitted_width:"",slitted_weight:""})}}},m=p,b=i("2877"),g=Object(b["a"])(m,n,r,!1,null,null,null),_=g.exports,w={components:{SlittedCoil:_},data:function(){return{shiftDateMenu:!1,shiftDate:null,maxDate:(new Date).toISOString()}},mounted:function(){this.$route.params.id&&(this.$store.state.selRows=[],this.$store.state.coilId=this.$route.params.id,this.$store.dispatch("getSlits",{id:parseInt(this.$route.params.id)})),this.$store.state.coilId||0!==this.$store.state.selRows.length||this.$router.push({path:"/coils"})},methods:{goBack:function(){this.$router.push({path:"/coils"}),this.$store.dispatch("getCoils",{page:1,limit:10})},setOptions:function(){},clearSearch:function(t){console.log("type",t),this.shiftDate=null}}},y=w,x=Object(b["a"])(y,a,s,!1,null,null,null);e["default"]=x.exports},fb6a:function(t,e,i){"use strict";var a=i("23e7"),s=i("861d"),n=i("e8b5"),r=i("23cb"),l=i("50c4"),o=i("fc6a"),c=i("8418"),d=i("b622"),u=i("1dde"),h=i("ae40"),f=u("slice"),v=h("slice",{ACCESSORS:!0,0:0,1:2}),p=d("species"),m=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!f||!v},{slice:function(t,e){var i,a,d,u=o(this),h=l(u.length),f=r(t,h),v=r(void 0===e?h:e,h);if(n(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?s(i)&&(i=i[p],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return m.call(u,f,v);for(a=new(void 0===i?Array:i)(b(v-f,0)),d=0;f<v;f++,d++)f in u&&c(a,d,u[f]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-5b2fdd57.8a5a25f9.js.map