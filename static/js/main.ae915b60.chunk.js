(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{11:function(e,t,n){e.exports={movie:"Movie_movie__27rBX",movie__img:"Movie_movie__img__23OrX",movie__title:"Movie_movie__title__p6svq",movie__year:"Movie_movie__year__1Fz81",movie__genres:"Movie_movie__genres__2j2Od"}},14:function(e,t,n){e.exports={container:"Home_container__97rpc",loader:"Home_loader__4iU7f",movies:"Home_movies__3Ohm2"}},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(19),s=n.n(r),a=n(7),o=n(2),j=n(9),m=n.n(j),v=n(13),d=n(10),l=n(11),u=n.n(l),_=n(1);var b=function(e){var t=e.id,n=e.coverImg,c=e.title,i=e.year,r=e.summary,s=e.genres;return Object(_.jsxs)("div",{className:u.a.movie,children:[Object(_.jsx)("img",{src:n,alt:c,className:u.a.movie__img}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:u.a.movie__title,children:Object(_.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(_.jsx)("h3",{className:u.a.movie__year,children:i}),Object(_.jsx)("p",{children:r.length>235?"".concat(r.slice(0,235),"..."):r}),Object(_.jsx)("ul",{className:u.a.movie__genres,children:s.map((function(e){return Object(_.jsx)("li",{children:e},e)}))})]})]})},O=n(14),h=n.n(O);var x=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),a=s[0],o=s[1],j=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(_.jsx)("div",{className:h.a.container,children:n?Object(_.jsx)("div",{className:h.a.loader,children:Object(_.jsx)("span",{children:"Loading..."})}):Object(_.jsx)("div",{className:h.a.movies,children:a.map((function(e){return Object(_.jsx)(b,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var f=function(e){var t=e.id,n=e.coverImg,c=e.title,i=e.rating,r=e.genres;return Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:n,alt:c}),Object(_.jsx)("h2",{children:Object(_.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(_.jsx)("p",{children:i}),Object(_.jsx)("ul",{children:r.map((function(e){return Object(_.jsx)("li",{children:e},e)}))})]})};var g=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),a=s[0],j=s[1],l=Object(o.f)().id,u=function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(t));case 2:return e.next=4,e.sent.json();case 4:n=e.sent,console.log(n),j(n.data.movie),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u(l)}),[l]),Object(_.jsx)("div",{children:n?Object(_.jsx)("h1",{children:"Loading..."}):Object(_.jsx)("div",{children:Object(_.jsx)(f,{id:a.id,coverImg:a.medium_cover_image,title:a.title_long,rating:a.rating,genres:a.genres},a.id)})})};var p=function(){return Object(_.jsx)(a.a,{children:Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/movie/:id",children:Object(_.jsx)(g,{})}),Object(_.jsx)(o.a,{path:"/",children:Object(_.jsx)(x,{})})]})})};n(36);s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(p,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ae915b60.chunk.js.map