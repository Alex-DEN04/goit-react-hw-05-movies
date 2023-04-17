"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[517],{6600:function(n,e,r){r.d(e,{Pg:function(){return l},XT:function(){return p},qF:function(){return d},tx:function(){return h},zv:function(){return f}});var t=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s),u="https://api.themoviedb.org/3",o="f895f2516a047e2a437ac29e4da65e26",p=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u).concat("/trending/movie/day"),{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u,"/movie/").concat(e),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u,"/movie/").concat(e,"/credits"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u,"/movie/").concat(e,"/reviews"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u,"/search/movie"),{params:{api_key:o,query:e}});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4517:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,a,c,s,i=r(5861),u=r(885),o=r(7757),p=r.n(o),l=r(6731),f=r(470),h=r(2791),d=r(8185),x=r(6600),m=r(5067),v=r(168),g=r(4556),b=g.Z.img(t||(t=(0,v.Z)(["\n  max-width: 350px;\n  padding: ","px;\n  margin: ","px;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]})),w=g.Z.button(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: auto;\n  gap: ","px;\n  margin-bottom: ","px;\n  background-color: ",";\n  border-radius: ",";\n  border-color: ",";\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.buttonColor}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.buttonAccentColor})),j=g.Z.h3(c||(c=(0,v.Z)([""]))),k=g.Z.li(s||(s=(0,v.Z)(["\n  display: block;\n  list-style-type: none;\n  margin-right: ","px;\n"])),(function(n){return n.theme.space[3]})),y=r(407),Z=(0,g.Z)("div")(y.$_,y.Dh,y.bK,y.GQ,y.eC,y.Oq,y.Cg,y.FK,y.AF),_=r(184),C=function(){var n=(0,h.useState)(null),e=(0,u.Z)(n,2),r=e[0],t=e[1],a=(0,h.useState)(!1),c=(0,u.Z)(a,2),s=c[0],o=c[1],v=(0,h.useState)(null),g=(0,u.Z)(v,2),y=g[0],C=g[1],S=(0,f.UO)().movieId,F=(0,f.s0)(),O=(0,f.TH)();(0,h.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,x.Pg)(S);case 4:e=n.sent,r=e.data,t(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),C(n.t0);case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){t(null),C(null)}}),[S]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(w,{onClick:function(){return F(O.state.from)},children:[(0,_.jsx)(d.And,{}),"Go back"]}),y&&(0,_.jsxs)("div",{children:["Now showing product with id - ",S]}),r&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(Z,{display:"flex",boxShadow:"0 4px 2px -2px gray",pb:3,children:[(0,_.jsx)(b,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(r.poster_path),alt:""}),(0,_.jsxs)(Z,{ml:5,children:[(0,_.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,_.jsxs)("p",{children:["User Score:"," ",Math.round(100*Number(r.vote_average)/10)," %"]}),(0,_.jsx)("h3",{children:"Overviev:"}),(0,_.jsx)("p",{children:r.overview}),(0,_.jsx)(j,{children:"Genres:"}),(0,_.jsx)(Z,{m:0,p:0,display:"flex",as:"ul",children:r.genres.map((function(n){return(0,_.jsx)(k,{children:n.name},n.id)}))})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"Additional information:"}),(0,_.jsxs)(Z,{boxShadow:"0 4px 2px -2px gray",pb:3,as:"ul",children:[(0,_.jsx)("li",{children:(0,_.jsx)(l.OL,{to:"cast",state:{from:O.state.from},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(l.OL,{to:"reviews",state:{from:O.state.from},children:"Reviews"})})]}),(0,_.jsx)(h.Suspense,{fallback:(0,_.jsx)(m.a,{}),children:(0,_.jsx)(f.j3,{})})]})]}),s&&(0,_.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=517.ed65a92d.chunk.js.map