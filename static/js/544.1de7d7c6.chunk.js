"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{6600:function(n,t,r){r.d(t,{Pg:function(){return f},XT:function(){return p},qF:function(){return l},tx:function(){return h},zv:function(){return v}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c),s="https://api.themoviedb.org/3",o="f895f2516a047e2a437ac29e4da65e26",p=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s).concat("/trending/movie/day"),{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(t),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(t,"/credits"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(t,"/reviews"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/search/movie"),{params:{api_key:o,query:t}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6368:function(n,t,r){r.d(t,{O:function(){return c}});var e=r(470),a=r(6731),u=r(184),c=function(n){var t=n.items,r=(0,e.TH)();return(0,u.jsx)("main",{children:(0,u.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title,c=n.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"/movies/".concat(t),state:{from:r},children:e||c})},t)}))})})}},9544:function(n,t,r){r.r(t);var e=r(5861),a=r(885),u=r(7757),c=r.n(u),i=r(2791),s=r(6600),o=r(5067),p=r(6368),f=r(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),r=t[0],u=t[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),l=h[0],m=h[1],d=(0,i.useState)(!1),x=(0,a.Z)(d,2),w=x[0],g=x[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,s.XT)();case 4:t=n.sent,u(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),g(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){u(null),g(null)}}),[]),(0,f.jsxs)(f.Fragment,{children:[w&&(0,f.jsx)("div",{children:"Something went wrong, please try again"}),(0,f.jsx)("h1",{children:"Trending today"}),r&&(0,f.jsx)(p.O,{items:r}),l&&(0,f.jsx)(o.a,{})]})}}}]);
//# sourceMappingURL=544.1de7d7c6.chunk.js.map