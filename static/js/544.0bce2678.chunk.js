"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{4672:function(n,t,e){e.d(t,{Z:function(){return Z}});var r,a,c,u,i,o=e(7689),s=e(168),p=e(7402),f=e(1087),d=p.Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px;\n  margin: 0 auto;\n  justify-content: center;\n  list-style: none;\n"]))),l=p.Z.li(a||(a=(0,s.Z)(["\n  background-color: white;\n  padding: 10px 10px 0 10px;\n"]))),v=(0,p.Z)(f.rU)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n"]))),h=p.Z.img(u||(u=(0,s.Z)(["\n  width: 240px;\n"]))),x=p.Z.p(i||(i=(0,s.Z)(["\n  width: 200px;\n  margin: 0;\n  padding: 6px;\n  font-weight: 500;\n  font-size: 18px;\n  color: black;\n"]))),m=e(7812),w=e(184),Z=function(n){var t=n.movies,e=(0,o.TH)();return(0,w.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title,c=n.overview,u=n.original_title;return(0,w.jsx)(l,{children:(0,w.jsxs)(v,{to:"/movies/".concat(t),state:{from:e},children:[(0,w.jsx)(h,{src:r?"".concat("https://image.tmdb.org/t/p/w500/").concat(r):m,alt:c}),(0,w.jsx)(x,{children:null!==a&&void 0!==a?a:u})]})},t)}))})}},9544:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(1414),u=e(4672),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,a.useEffect)((function(){(0,c.wG)().then(o)}),[]),(0,i.jsx)("div",{children:(0,i.jsx)(u.Z,{movies:e})})}},1414:function(n,t,e){e.d(t,{Pg:function(){return p},Ph:function(){return s},UJ:function(){return f},dW:function(){return d},wG:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({api_key:"b026a5e55a93706d87a5f53b5d4e521f",language:"en-US",include_adult:!1}),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/week?".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7812:function(n,t,e){n.exports=e.p+"static/media/FileNotFound.02c7bc1de76c7c188efa.jpg"}}]);
//# sourceMappingURL=544.0bce2678.chunk.js.map