(function(t){function e(e){for(var a,i,l=e[0],s=e[1],u=e[2],d=0,p=[];d<l.length;d++)i=l[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md",theme:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-light"},[t._v("TATIANA TALI MAKOVSKY")])]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.items,function(e){return n("v-btn",{attrs:{flat:""},on:{click:function(n){t.goToNamedRoute(e.title)}}},[t._v(t._s(e.title)+"\n      ")])}),1),n("v-toolbar-items",{staticClass:"hidden-md-and-up"},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),n("v-content",[n("router-view")],1),n("v-navigation-drawer",{attrs:{temporary:"",right:"","mini-variant":"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"pa-1"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("John Leider")])],1)],1)],1),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-divider"),t._l(t.items,function(e){return n("v-list-tile",{key:e.title,on:{click:function(n){t.goToNamedRoute(e.title)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1),n("v-footer",{staticClass:"footer"},[n("span",{staticStyle:{margin:"auto"}},[t._v("© 2019 ")])])],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t.isMobile?t._e():n("v-flex",{attrs:{"d-flex":"",xs12:"",md8:""}},[n("v-img",{attrs:{src:"https://picsum.photos/510/300","aspect-ratio":"1:10"}})],1),n("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[n("v-card",{attrs:{color:"blue lighten-2",dark:""}},[n("v-card-text",[t._v(t._s(t.lorem.slice(0,100)))])],1)],1)],1)],1)},s=[],u=(n("7f7f"),{name:"Home",data:function(){return{lorem:"Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."}},methods:{},computed:{isMobile:function(){switch(this.$vuetify.breakpoint.name){case"sm":return!0;case"xs":return!0;default:return!1}}}}),c=u,d=n("2877"),p=n("6544"),f=n.n(p),v=n("b0af"),m=n("99d9"),h=n("a523"),b=n("0e8f"),_=n("adda"),g=n("a722"),w=Object(d["a"])(c,l,s,!1,null,"638fd8b5",null);w.options.__file="Home.vue";var V=w.exports;f()(w,{VCard:v["a"],VCardText:m["a"],VContainer:h["a"],VFlex:b["a"],VImg:_["a"],VLayout:g["a"]});var x={name:"App",data:function(){return{isAdmin:!0,drawer:null,items:[{title:"Home",icon:"dashboard"},{title:"Photos",icon:"question_answer"},{title:"Blog",icon:"question_answer"},{title:"Resume",icon:"question_answer"}]}},methods:{goToNamedRoute:function(t){this.$router.push({name:t})}},mounted:function(){}},y=x,T=n("7496"),j=n("8336"),O=n("549c"),A=n("ce7e"),C=n("553a"),P=n("132d"),k=n("8860"),L=n("ba95"),S=n("40fe"),R=n("c954"),$=n("5d23"),q=n("f774"),M=n("9910"),I=n("71d9"),B=n("2a7f"),E=n("706c"),H=Object(d["a"])(y,o,i,!1,null,null,null);H.options.__file="App.vue";var N=H.exports;f()(H,{VApp:T["a"],VBtn:j["a"],VContent:O["a"],VDivider:A["a"],VFooter:C["a"],VIcon:P["a"],VList:k["a"],VListTile:L["a"],VListTileAction:S["a"],VListTileAvatar:R["a"],VListTileContent:$["a"],VListTileTitle:$["b"],VNavigationDrawer:q["a"],VSpacer:M["a"],VToolbar:I["a"],VToolbarItems:B["a"],VToolbarSideIcon:E["a"],VToolbarTitle:B["b"]});var J=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Photos")])},F=[],K={data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],right:null}}},Y=K,z=Object(d["a"])(Y,D,F,!1,null,null,null);z.options.__file="Photos.vue";var G=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Blog")])},U=[],W={},X=W,Z=Object(d["a"])(X,Q,U,!1,null,null,null);Z.options.__file="Blog.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Resume")])},nt=[],at={},rt=at,ot=Object(d["a"])(rt,et,nt,!1,null,null,null);ot.options.__file="Resume.vue";var it=ot.exports;a["a"].use(J["a"]),a["a"].config.productionTip=!1;var lt=[{path:"/",name:"Home",component:V},{path:"/photos",name:"Photos",component:G},{path:"/blog",name:"Blog",component:tt},{path:"/resume",name:"Resume",component:it}],st=new J["a"]({mode:"history",routes:lt});new a["a"]({router:st,render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.f813fbe6.js.map