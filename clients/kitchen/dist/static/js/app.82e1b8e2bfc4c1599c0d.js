webpackJsonp([10],{14:function(t,n,e){"use strict";var o=e(46),a=e.n(o);n.a={G_API:"http://api.step8step.com:8888",param:"__identity",get:function(){var t=localStorage.getItem(this.param);return t?JSON.parse(t):null},set:function(t){localStorage.setItem(this.param,a()(t))},clear:function(){localStorage.removeItem(this.param)},getUserId:function(){var t=this.get();return t?t.uid:null},getAccessToken:function(){var t=this.get();return t?t.access_token:null},isExpired:function(){var t=(new Date).getTime(),n=this.get();return!(n&&n.expire&&n.expire>t)}}},40:function(t,n,e){"use strict";var o=e(22),a=e(92);o.default.use(a.a),n.a=new a.a({routes:[{path:"/login",component:function(){return e.e(5).then(e.bind(null,97))}},{path:"/register",component:function(){return e.e(4).then(e.bind(null,98))}},{path:"/",component:function(){return e.e(0).then(e.bind(null,43))}},{path:"/courses",component:function(){return e.e(0).then(e.bind(null,43))}},{path:"/course/:id",component:function(){return e.e(6).then(e.bind(null,96))}},{path:"/section-codes/:sid",component:function(){return e.e(2).then(e.bind(null,99))}},{path:"/section-tests/:sid",component:function(){return e.e(3).then(e.bind(null,101))}},{path:"/section-docs/:sid",component:function(){return e.e(1).then(e.bind(null,100))}}]})},41:function(t,n,e){function o(t){e(84)}var a=e(42)(e(44),e(91),o,"data-v-0593154d",null);t.exports=a.exports},44:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(14);n.default={name:"app",data:function(){return{}},methods:{onSelect:function(t){if("/logout"===t)return o.a.clear(),window.location.reload();this.$router.push(t)}},computed:{isLogined:function(){return!o.a.isExpired()}}}},45:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(24),a=e.n(o),i=e(23),r=e.n(i),u=e(22),s=e(41),c=e.n(s),l=e(40),p=e(14),d=function(){var t=r()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7).then(e.bind(null,83));case 2:return t.next=4,e.e(8).then(e.bind(null,85));case 4:n=t.sent,u.default.use(n),l.a.beforeEach(function(t,e,o){n.Spin.show(),p.a.isExpired()&&"/login"!==t.path&&"/register"!==t.path?l.a.push("/login"):p.a.isExpired()||"/login"!==t.path?(n.LoadingBar.start(),o()):l.a.push("/")}),l.a.afterEach(function(t,e,o){n.LoadingBar.finish(),n.Spin.hide()}),new u.default({el:"#app",router:l.a,template:"<App/>",components:{App:c.a}});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();u.default.config.productionTip=!1,d()},84:function(t,n){},91:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout"},[e("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"/"},on:{"on-select":t.onSelect}},[e("div",{staticClass:"layout-logo"}),t._v(" "),t.isLogined?e("div",{staticClass:"layout-nav"},[e("Menu-item",{attrs:{name:"/courses"}},[e("Icon",{attrs:{type:"flag"}}),t._v("\n                我的作品\n            ")],1),t._v(" "),e("Menu-item",{attrs:{name:"/logout"}},[e("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                退出登录\n            ")],1)],1):t._e()]),t._v(" "),e("div",{staticClass:"layout-content"},[e("transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1),t._v(" "),e("div",{staticClass:"layout-copy"},[t._v("\n        2016-2017 © step8step.com\n    ")])],1)},staticRenderFns:[]}}},[45]);
//# sourceMappingURL=app.82e1b8e2bfc4c1599c0d.js.map