"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{6600:function(e,n,r){r.d(n,{Pg:function(){return p},XT:function(){return i},qF:function(){return d},tx:function(){return l},zv:function(){return f}});var t=r(5861),a=r(7757),c=r.n(a),s=r(4569),o=r.n(s),u="https://api.themoviedb.org/3",i=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u).concat("/trending/movie/day"),{params:{api_key:"f895f2516a047e2a437ac29e4da65e26"}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(n),{params:{api_key:"f895f2516a047e2a437ac29e4da65e26"}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(n,"/credits"),{params:{api_key:"f895f2516a047e2a437ac29e4da65e26"}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(n,"/reviews"),{params:{api_key:"f895f2516a047e2a437ac29e4da65e26"}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/search/movie"),{params:{api_key:"f895f2516a047e2a437ac29e4da65e26",query:n}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4517:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var t,a,c,s,o=r(5861),u=r(885),i=r(7757),p=r.n(i),f=r(6731),l=r(470),d=r(2791),h=r(8185),x=r(6600),m=r(5067),v=r(168),g=r(4556),b=g.Z.img(t||(t=(0,v.Z)(["\n  max-width: 350px;\n  padding: ","px;\n  margin: ","px;\n"])),(function(e){return e.theme.space[0]}),(function(e){return e.theme.space[0]})),w=g.Z.button(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: auto;\n  height: auto;\n  gap: ","px;\n  margin-bottom: ","px;\n  background-color: ",";\n  border-radius: ",";\n  border-color: ",";\n  &:hover,\n  :focus {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[2]}),(function(e){return e.theme.colors.buttonColor}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.buttonAccentColor})),j=g.Z.h3(c||(c=(0,v.Z)([""]))),k=g.Z.li(s||(s=(0,v.Z)(["\n  display: block;\n  list-style-type: none;\n  margin-right: ","px;\n"])),(function(e){return e.theme.space[3]})),y=r(407),Z=(0,g.Z)("div")(y.$_,y.Dh,y.bK,y.GQ,y.eC,y.Oq,y.Cg,y.FK,y.AF),_=r(184),C=function(){var e=(0,d.useState)(null),n=(0,u.Z)(e,2),r=n[0],t=n[1],a=(0,d.useState)(!1),c=(0,u.Z)(a,2),s=c[0],i=c[1],v=(0,d.useState)(null),g=(0,u.Z)(v,2),y=g[0],C=g[1],S=(0,l.UO)().movieId,F=(0,l.s0)(),O=(0,l.TH)();(0,d.useEffect)((function(){var e=function(){var e=(0,o.Z)(p().mark((function e(){var n,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,(0,x.Pg)(S);case 4:n=e.sent,r=n.data,t(r),C(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),C(e.t0);case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(w,{onClick:function(){return F(O.state.from)},children:[(0,_.jsx)(h.And,{}),"Go back"]}),y&&(0,_.jsxs)("div",{children:["Now showing product with id - ",S]}),r&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(Z,{display:"flex",boxShadow:"0 4px 2px -2px gray",pb:3,children:[(0,_.jsx)(b,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(r.poster_path),alt:""}),(0,_.jsxs)(Z,{ml:5,children:[(0,_.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,_.jsxs)("p",{children:["User Score:"," ",Math.round(100*Number(r.vote_average)/10)," %"]}),(0,_.jsx)("h3",{children:"Overviev:"}),(0,_.jsx)("p",{children:r.overview}),(0,_.jsx)(j,{children:"Genres:"}),(0,_.jsx)(Z,{m:0,p:0,display:"flex",as:"ul",children:r.genres.map((function(e){return(0,_.jsx)(k,{children:e.name},e.id)}))})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"Additional information:"}),(0,_.jsxs)(Z,{boxShadow:"0 4px 2px -2px gray",pb:3,as:"ul",children:[(0,_.jsx)("li",{children:(0,_.jsx)(f.OL,{to:"cast",state:{from:O.state.from},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(f.OL,{to:"reviews",state:{from:O.state.from},children:"Reviews"})})]}),(0,_.jsx)(d.Suspense,{fallback:(0,_.jsx)(m.a,{}),children:(0,_.jsx)(l.j3,{})})]})]}),s&&(0,_.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=517.815ca5b6.chunk.js.map