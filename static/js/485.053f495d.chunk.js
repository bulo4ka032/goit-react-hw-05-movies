"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{4672:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,c,u,i,o=e(7689),s=e(168),p=e(7402),f=e(1087),d=p.Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px;\n  margin: 0 auto;\n  justify-content: center;\n  list-style: none;\n"]))),l=p.Z.li(a||(a=(0,s.Z)(["\n  background-color: white;\n  padding: 10px 10px 0 10px;\n"]))),v=(0,p.Z)(f.rU)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n"]))),x=p.Z.img(u||(u=(0,s.Z)(["\n  width: 240px;\n"]))),h=p.Z.p(i||(i=(0,s.Z)(["\n  width: 200px;\n  margin: 0;\n  padding: 6px;\n  font-weight: 500;\n  font-size: 18px;\n  color: black;\n"]))),w=e(7812),g=e(184),m=function(n){var t=n.movies,e=(0,o.TH)();return(0,g.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title,c=n.overview,u=n.original_title;return(0,g.jsx)(l,{children:(0,g.jsxs)(v,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)(x,{src:r?"".concat("https://image.tmdb.org/t/p/w500/").concat(r):w,alt:c}),(0,g.jsx)(h,{children:null!==a&&void 0!==a?a:u})]})},t)}))})}},3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a,c=e(9439),u=e(2791),i=e(1414),o=e(168),s=e(7402),p=(s.Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n"]))),s.Z.h1(a||(a=(0,o.Z)(["\n  margin: 0;\n  padding: 16px 16px 0 16px;\n  text-align: end;\n  /* font-size: 28px; */\n  font-weight: 300;\n"])))),f=e(4672),d=e(184),l=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,u.useEffect)((function(){(0,i.wG)().then(r)}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(p,{children:"Trending to week"}),(0,d.jsx)(f.Z,{movies:e})]})}},1414:function(n,t,e){e.d(t,{Pg:function(){return p},Ph:function(){return s},UJ:function(){return f},dW:function(){return d},wG:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({api_key:"b026a5e55a93706d87a5f53b5d4e521f",language:"en-US",include_adult:!1}),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/week?".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7812:function(n,t,e){n.exports=e.p+"static/media/FileNotFound.02c7bc1de76c7c188efa.jpg"}}]);
//# sourceMappingURL=485.053f495d.chunk.js.map