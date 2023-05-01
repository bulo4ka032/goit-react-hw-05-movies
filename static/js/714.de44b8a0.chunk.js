"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[714,471],{9471:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a,c,i=e(168),o=e(7402),s=o.Z.img(r||(r=(0,i.Z)(["\n  width: 500px;\n"]))),u=o.Z.p(a||(a=(0,i.Z)(["\n  font-size: 36px;\n  font-weight: 300;\n"]))),p=o.Z.div(c||(c=(0,i.Z)(["\n  text-align: center;\n  margin-top: -50px;\n"]))),d=e(184),f=function(n){var t=n.message,e=n.img;return(0,d.jsxs)(p,{children:[(0,d.jsx)(s,{src:e,alt:"error"}),(0,d.jsx)(u,{children:t})]})}},4672:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,c,i,o,s=e(7689),u=e(168),p=e(7402),d=e(1087),f=p.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px;\n  margin: 0 auto;\n  justify-content: center;\n  list-style: none;\n"]))),l=p.Z.li(a||(a=(0,u.Z)(["\n  background-color: white;\n  padding: 10px 10px 0 10px;\n"]))),x=(0,p.Z)(d.rU)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n"]))),h=p.Z.img(i||(i=(0,u.Z)(["\n  width: 240px;\n"]))),g=p.Z.p(o||(o=(0,u.Z)(["\n  width: 200px;\n  margin: 0;\n  padding: 6px;\n  font-weight: 500;\n  font-size: 18px;\n  color: black;\n"]))),Z=e(7812),v=e(184),m=function(n){var t=n.movies,e=(0,s.TH)();return(0,v.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title,c=n.overview,i=n.original_title;return(0,v.jsx)(l,{children:(0,v.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(h,{src:r?"".concat("https://image.tmdb.org/t/p/w500/").concat(r):Z,alt:c}),(0,v.jsx)(g,{children:null!==a&&void 0!==a?a:i})]})},t)}))})}},9207:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,a,c,i,o,s,u,p,d=e(9439),f=e(2791),l=e(1087),x=e(1414),h=e(168),g=e(7402),Z=g.Z.div(r||(r=(0,h.Z)(["\n  padding: 16px;\n"]))),v=g.Z.form(a||(a=(0,h.Z)(["\n  text-align: end;\n  margin-right: 100px;\n  margin-bottom: 20px;\n"]))),m=g.Z.p(c||(c=(0,h.Z)(["\n  font-size: 24px;\n  font-weight: 300;\n"]))),w=g.Z.button(i||(i=(0,h.Z)(["\n  padding: 10px;\n  background-color: white;\n  border: solid 1px grey;\n"]))),j=g.Z.input(o||(o=(0,h.Z)(["\n  padding: 8px 16px;\n  font-size: 16px;\n  width: 250px;\n"]))),b=e(8185),y=e(4672),k=e(1246),S=e(9471),_=g.Z.img(s||(s=(0,h.Z)(["\n  width: 300px;\n"]))),U=g.Z.div(u||(u=(0,h.Z)(["\n  text-align: center;\n"]))),z=g.Z.p(p||(p=(0,h.Z)(["\n  font-size: 36px;\n  font-weight: 300;\n"]))),q=e.p+"static/media/start.fc3d1025bc498d8d11a1.png",P=e(184),C=function(){return(0,P.jsxs)(U,{children:[(0,P.jsx)(_,{src:q,alt:"try to search"}),(0,P.jsx)(z,{children:"Try to search"})]})},F=function(){var n=(0,f.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(""),c=(0,d.Z)(a,2),i=c[0],o=c[1],s=(0,l.lr)(),u=(0,d.Z)(s,2),p=u[0],h=u[1],g=(0,f.useState)("start"),_=(0,d.Z)(g,2),U=_[0],z=_[1];(0,f.useEffect)((function(){var n,t=null!==(n=p.get("query"))&&void 0!==n?n:"";(0,x.Ph)(t).then(r),e.length>0&&z("resolved")}),[p,e]);return(0,P.jsxs)(Z,{children:[(0,P.jsxs)(v,{onSubmit:function(n){n.preventDefault(),0===e.length&&i&&z("nothing"),h(""!==i?{query:i}:{})},children:[(0,P.jsxs)("label",{children:[(0,P.jsx)(m,{children:"Search Film"}),(0,P.jsx)(j,{type:"text",onChange:function(n){o(n.target.value),z("start")},placeholder:"Search search search",required:!0})]}),(0,P.jsx)(w,{type:"submit",children:(0,P.jsx)(b.Ud,{})})]}),"start"===U?(0,P.jsx)(C,{}):"resolved"===U?(0,P.jsx)(y.Z,{movies:e}):i?(0,P.jsx)(S.default,{message:"No results for ".concat(i),img:k}):(0,P.jsx)(C,{})]})}},1414:function(n,t,e){e.d(t,{Pg:function(){return p},Ph:function(){return u},UJ:function(){return d},dW:function(){return f},wG:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({api_key:"b026a5e55a93706d87a5f53b5d4e521f",language:"en-US"}),s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/week?".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?".concat(o,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7812:function(n,t,e){n.exports=e.p+"static/media/FileNotFound.02c7bc1de76c7c188efa.jpg"}}]);
//# sourceMappingURL=714.de44b8a0.chunk.js.map