"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387,471],{9471:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a,u,c=e(168),s=e(7402),o=s.Z.img(r||(r=(0,c.Z)(["\n  width: 500px;\n"]))),i=s.Z.p(a||(a=(0,c.Z)(["\n  font-size: 36px;\n  font-weight: 300;\n"]))),f=s.Z.div(u||(u=(0,c.Z)(["\n  text-align: center;\n"]))),p=e(184),d=function(n){var t=n.message,e=n.img;return(0,p.jsxs)(f,{children:[(0,p.jsx)(o,{src:e,alt:"error"}),(0,p.jsx)(i,{children:t})]})}},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,u,c,s=e(9439),o=e(2791),i=e(7689),f=e(1414),p=e(168),d=e(7402),h=d.Z.ul(r||(r=(0,p.Z)(["\n  background-color: white;\n  padding: 16px;\n  list-style: none;\n"]))),l=d.Z.li(a||(a=(0,p.Z)([""]))),v=d.Z.h4(u||(u=(0,p.Z)(["\n  margin: 0;\n"]))),Z=d.Z.p(c||(c=(0,p.Z)([""]))),m=e(9471),g=e(1246),w=e(184),x=function(){var n=(0,o.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,i.UO)().movieId;return(0,o.useEffect)((function(){(0,f.dW)(a).then(r)}),[a]),console.log(e),e.length>0?(0,w.jsxs)(h,{children:[" ",e.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,w.jsxs)(l,{children:[(0,w.jsx)(v,{children:t}),(0,w.jsx)(Z,{children:e})]},r)}))]}):(0,w.jsx)(m.default,{message:"Sorry, but there are no reviews yet",img:g})}},1414:function(n,t,e){e.d(t,{Pg:function(){return f},Ph:function(){return i},UJ:function(){return p},dW:function(){return d},wG:function(){return o}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"b026a5e55a93706d87a5f53b5d4e521f",language:"en-US"}),o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week?".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(s,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.6226a2d0.chunk.js.map