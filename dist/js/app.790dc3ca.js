(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-07924f43":"1163de7a","chunk-2d217a99":"0fb1727c","chunk-2d21a3d2":"2699047d","chunk-3bc843ad":"652cd9f5","chunk-3e3fa395":"900de685","chunk-5f4ad635":"fff56bba","chunk-6371e5f8":"fa0da5da","chunk-7e1d8c94":"fa99717e","chunk-c420df12":"b63326b1"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-3bc843ad":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-07924f43":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-3bc843ad":"78f05e43","chunk-3e3fa395":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-6371e5f8":"31d6cfe0","chunk-7e1d8c94":"31d6cfe0","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0d94":function(e,t,r){"use strict";r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f");var n=r("bd86"),a=(r("ac6a"),r("456d"),r("6d67"),r("96cf"),r("3b8d")),o=r("260b");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]={actions:{createRecord:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,e.prev=1,e.next=4,n("getUid");case 4:return c=e.sent,e.next=7,o["a"].database().ref("/users/".concat(c,"/records")).push(r);case 7:e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),a("setError",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchRecords:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.commit,e.prev=1,e.next=4,r("getUid");case 4:return a=e.sent,e.next=7,o["a"].database().ref("/users/".concat(a,"/records")).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return c=e.t0,e.abrupt("return",Object.keys(c).map((function(e){return i(i({},c[e]),{},{id:e})})));case 14:throw e.prev=14,e.t1=e["catch"](1),n("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchRecordById:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,e.prev=1,console.log("this"),e.next=5,n("getUid");case 5:return c=e.sent,e.next=8,o["a"].database().ref("/users/".concat(c,"/records")).child(r).once("value");case 8:if(e.t0=e.sent.val(),e.t0){e.next=11;break}e.t0={};case 11:return s=e.t0,console.log("this1"),e.abrupt("return",i(i({},s),{},{id:r}));case 16:throw e.prev=16,e.t1=e["catch"](1),a("setError",e.t1),e.t1;case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));function t(t,r){return e.apply(this,arguments)}return t}()}}},4360:function(e,t,r){"use strict";r("96cf");var n,a=r("3b8d"),o=r("2b0e"),c=r("2f62"),i=(r("7f7f"),r("260b")),s={actions:{login:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dispatch,n=t.commit,a=r.email,o=r.password,e.prev=2,e.next=5,i["a"].auth().signInWithEmailAndPassword(a,o);case 5:e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,o=r.email,c=r.password,s=r.name,e.prev=2,e.next=5,i["a"].auth().createUserWithEmailAndPassword(o,c);case 5:return e.next=7,n("getUid");case 7:return u=e.sent,e.next=10,i["a"].database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e["catch"](2),a("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),getUid:function(){var e=i["a"].auth().currentUser;return e?e.uid:null},logout:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i["a"].auth().signOut();case 3:r("CLEAR_INFO");case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},u=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("bd86"));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={state:{info:{}},actions:{fetchInfo:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.commit,e.prev=1,e.next=4,r("getUid");case 4:return a=e.sent,e.next=7,i["a"].database().ref("/users/".concat(a,"/info")).once("value");case 7:o=e.sent.val(),n("SET_INFO",o),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),n("setError",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),updateInfo:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,o=t.getters,e.prev=1,e.next=4,n("getUid");case 4:return c=e.sent,s=f(f({},o.info),r),e.next=8,i["a"].database().ref("/users/".concat(c,"/info")).update(s);case 8:a("SET_INFO",s),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),a("setError",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}()},mutations:(n={},Object(u["a"])(n,"SET_INFO",(function(e,t){e.info=t})),Object(u["a"])(n,"CLEAR_INFO",(function(e){e.info={}})),n),getters:{info:function(e){return e.info}}},d=r("0d94"),h=(r("6d67"),r("2591"));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={actions:{fetchCategories:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.dispatch,e.prev=1,e.next=4,n("getUid");case 4:return a=e.sent,e.next=7,h["a"].database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return o=e.t0,e.abrupt("return",Object.keys(o).map((function(e){return v(v({},o[e]),{},{id:e})})));case 14:throw e.prev=14,e.t1=e["catch"](1),r("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchCategoryById:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,a("getUid");case 4:return o=e.sent,e.next=7,h["a"].database().ref("/users/".concat(o,"/categories")).child(r).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return c=e.t0,e.abrupt("return",v(v({},c),{},{id:r}));case 14:throw e.prev=14,e.t1=e["catch"](1),n("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),createCategory:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.title,c=r.limit,e.prev=2,e.next=5,a("getUid");case 5:return i=e.sent,e.next=8,h["a"].database().ref("/users/".concat(i,"/categories")).push({title:o,limit:c});case 8:return s=e.sent,e.abrupt("return",{title:o,limit:c,id:s.key});case 12:throw e.prev=12,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateCategory:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.title,c=r.limit,i=r.id,e.prev=2,e.next=5,a("getUid");case 5:return s=e.sent,e.next=8,h["a"].database().ref("/users/".concat(s,"/categories")).child(i).update({title:o,limit:c});case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}()}};o["a"].use(c["a"]);t["a"]=new c["a"].Store({state:{error:null},actions:{fetchCurrency:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="d90e92c8030ca4a01761918df3f966bf",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,UAH"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},modules:{auth:s,info:p,category:b,record:d["a"]}})},"56d7":function(e,t,r){"use strict";r.r(t);r("d25f"),r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},u=[],l=r("b444"),f={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(l["a"][e.code]||"Что-то пошло не так")}}},p=f,d=r("2877"),h=Object(d["a"])(p,s,u,!1,null,null,null),m=h.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):e._e(),r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Create new record",expression:"'Create new record'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},b=[],g=(r("ac6a"),r("456d"),r("96cf"),r("3b8d")),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v("\n          "+e._s(e.name)+"\n          "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль\n            ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти\n            ")])])])])])])])},w=[],O=(r("7f7f"),{data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("logout");case 2:this.$router.push("/login?message=logout");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()},computed:{name:function(){return this.$store.getters.info.name}}}),k=O,x=Object(d["a"])(k,y,w,!1,null,null,null),j=x.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},C=[],E={props:["value"],data:function(){return{links:[{title:"Счет",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},R=E,P=Object(d["a"])(R,_,C,!1,null,null,null),S=P.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper big active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},U=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],$={name:"Loader",computed:{color:function(){var e=["spinner-blue-only","spinner-red-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},N=$,I=Object(d["a"])(N,D,U,!1,null,"c3e027a6",null),A=I.exports,T={name:"main-layout",data:function(){return{isOpen:!1,loading:!0}},mounted:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object.keys(this.$store.getters.info).length){e.next=3;break}return e.next=3,this.$store.dispatch("fetchInfo");case 3:this.loading=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{Navbar:j,Sidebar:S,Loader:A},computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(l["a"][e.code]||"Что-то пошло не так")}}},L=T,F=Object(d["a"])(L,v,b,!1,null,null,null),B=F.exports,z={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:m,MainLayout:B}},J=z,K=(r("5c0b"),Object(d["a"])(J,c,i,!1,null,null,null)),W=K.exports,q=(r("759f"),r("8c4f")),H=r("260b");n["a"].use(q["a"]);var V=new q["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-3e3fa395").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-6371e5f8").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-07924f43").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-3bc843ad").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-7e1d8c94").then(r.bind(null,"43ef"))}}]});V.beforeEach((function(e,t,r){var n=H["a"].auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var G=V,Q=r("4360"),X=r("8832"),Y=r.n(X);r("6762"),r("2fdb");function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=Q["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}var ee=r("5bb3"),te=r("e977"),re={bind:function(e,t){var r=t.value;M.Tooltip.init(e,{html:r})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},ne={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},ae=r("9483");Object(ae["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("6885"),r("ea7b"),r("66ce");var oe,ce=r("58ca");n["a"].config.productionTip=!1,n["a"].use(ne),n["a"].use(ne),n["a"].component("Paginate",Y.a),n["a"].use(o.a),n["a"].component("Loader",A),n["a"].filter("date",Z),n["a"].filter("locale",te["a"]),n["a"].filter("currency",ee["a"]),n["a"].directive("tooltip",re),n["a"].use(ce["a"],{refreshOnceOnNavigation:!0}),H["a"].initializeApp({apiKey:"AIzaSyDJSp9SmQfTkmjuEVMpRLWz8znUbCDc6Ko",authDomain:"youtoo-5eb03.firebaseapp.com",databaseURL:"https://youtoo-5eb03.firebaseio.com",projectId:"youtoo-5eb03",storageBucket:"youtoo-5eb03.appspot.com",messagingSenderId:"672173648218",appId:"1:672173648218:web:3080c0d27bb58502d6ab63",measurementId:"G-92974RV320"}),H["a"].auth().onAuthStateChanged((function(){oe||(oe=new n["a"]({router:G,store:Q["a"],render:function(e){return e(W)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"UAH";return new Intl.NumberFormat("ua-UK",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";r("e332")},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Name":"Имя"}')},b444:function(e,t,r){"use strict";t["a"]={logout:"Вы вышли из системы",login:"Для начала войдите в систему","auth/user-not-found":"Пользователя с таким email не существует","auth/wrong-password":"Неверный пароль","auth/email-already-in-use":"Email уже занят"}},e332:function(e,t,r){},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("4360"),a=r("7704"),o=r("edd4"),c={"ru-RU":a,"en-US":o};function i(e){var t=n["a"].getters.info.locale||"ru-RU";return c[t][e]||"[Localization error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Name":"Name"}')}});
//# sourceMappingURL=app.790dc3ca.js.map