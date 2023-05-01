"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[714,471],{9471:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a,c,i=e(168),s=e(7402),u=s.Z.img(r||(r=(0,i.Z)(["\n  width: 500px;\n"]))),o=s.Z.p(a||(a=(0,i.Z)(["\n  font-size: 36px;\n  font-weight: 300;\n"]))),p=s.Z.div(c||(c=(0,i.Z)(["\n  text-align: center;\n  margin-top: -50px;\n"]))),d=e(184),f=function(n){var t=n.message,e=n.img;return(0,d.jsxs)(p,{children:[(0,d.jsx)(u,{src:e,alt:"error"}),(0,d.jsx)(o,{children:t})]})}},4672:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,c,i,s,u=e(7689),o=e(168),p=e(7402),d=e(1087),f=p.Z.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px;\n  margin: 0 auto;\n  justify-content: center;\n  list-style: none;\n"]))),l=p.Z.li(a||(a=(0,o.Z)(["\n  background-color: white;\n  padding: 10px 10px 0 10px;\n"]))),x=(0,p.Z)(d.rU)(c||(c=(0,o.Z)(["\n  text-decoration: none;\n"]))),h=p.Z.img(i||(i=(0,o.Z)(["\n  width: 240px;\n"]))),g=p.Z.p(s||(s=(0,o.Z)(["\n  width: 200px;\n  margin: 0;\n  padding: 6px;\n  font-weight: 500;\n  font-size: 18px;\n  color: black;\n"]))),Z=e(7812),v=e(184),m=function(n){var t=n.movies,e=(0,u.TH)();return(0,v.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title,c=n.overview,i=n.original_title;return(0,v.jsx)(l,{children:(0,v.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(h,{src:r?"".concat("https://image.tmdb.org/t/p/w500/").concat(r):Z,alt:c}),(0,v.jsx)(g,{children:null!==a&&void 0!==a?a:i})]})},t)}))})}},9207:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r,a,c,i,s,u,o,p,d=e(9439),f=e(2791),l=e(1087),x=e(7689),h=e(1414),g=e(168),Z=e(7402),v=Z.Z.div(r||(r=(0,g.Z)(["\n  padding: 16px;\n"]))),m=Z.Z.form(a||(a=(0,g.Z)(["\n  text-align: end;\n  margin-right: 100px;\n  margin-bottom: 20px;\n"]))),w=Z.Z.p(c||(c=(0,g.Z)(["\n  font-size: 24px;\n  font-weight: 300;\n"]))),j=Z.Z.button(i||(i=(0,g.Z)(["\n  padding: 10px;\n  background-color: white;\n  border: solid 1px grey;\n"]))),b=Z.Z.input(s||(s=(0,g.Z)(["\n  padding: 8px 16px;\n  font-size: 16px;\n  width: 250px;\n"]))),k=e(8185),y=e(6445),S=e(4672),_=e(1246),U=e(9471),z=Z.Z.img(u||(u=(0,g.Z)(["\n  width: 300px;\n"]))),q=Z.Z.div(o||(o=(0,g.Z)(["\n  text-align: center;\n"]))),P=Z.Z.p(p||(p=(0,g.Z)(["\n  font-size: 36px;\n  font-weight: 300;\n"]))),C=e.p+"static/media/start.fc3d1025bc498d8d11a1.png",F=e(184),L=function(){return(0,F.jsxs)(q,{children:[(0,F.jsx)(z,{src:C,alt:"try to search"}),(0,F.jsx)(P,{children:"Try to search"})]})},N=function(){var n=(0,f.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(""),c=(0,d.Z)(a,2),i=c[0],s=c[1],u=(0,l.lr)(),o=(0,d.Z)(u,2),p=o[0],g=o[1],Z=(0,f.useState)("start"),z=(0,d.Z)(Z,2),q=z[0],P=z[1];(0,f.useEffect)((function(){var n,t=null!==(n=p.get("query"))&&void 0!==n?n:"";(0,h.Ph)(t).then(r),e.length>0&&P("resolved")}),[p,e]);return(0,F.jsxs)(v,{children:[(0,F.jsxs)(m,{onSubmit:function(n){n.preventDefault(),0===e.length&&i&&P("nothing"),g(""!==i?{query:i}:{})},children:[(0,F.jsxs)("label",{children:[(0,F.jsx)(w,{children:"Search Film"}),(0,F.jsx)(b,{type:"text",onChange:function(n){s(n.target.value),P("start")},placeholder:"Search search search",required:!0})]}),(0,F.jsx)(j,{type:"submit",children:(0,F.jsx)(k.Ud,{})})]}),"start"===q?(0,F.jsx)(L,{}):"resolved"===q?(0,F.jsx)(S.Z,{movies:e}):i?(0,F.jsx)(U.default,{message:"No results for ".concat(i),img:_}):(0,F.jsx)(L,{}),(0,F.jsx)(f.Suspense,{fallback:(0,F.jsx)(y.Z,{}),children:(0,F.jsx)(x.j3,{})})]})}},1414:function(n,t,e){e.d(t,{Pg:function(){return p},Ph:function(){return o},UJ:function(){return d},dW:function(){return f},wG:function(){return u}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"b026a5e55a93706d87a5f53b5d4e521f",language:"en-US",include_adult:!1}),u=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/week?".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?".concat(s,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7812:function(n,t,e){n.exports=e.p+"static/media/FileNotFound.02c7bc1de76c7c188efa.jpg"}}]);
//# sourceMappingURL=714.6b092e71.chunk.js.map