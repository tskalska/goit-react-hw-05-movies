(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{20:function(e,t,c){e.exports={backBatton:"MovieDetails_backBatton__3QJky"}},23:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return b}));var n=c(5),i=c(1),s=c(4),r=c(0),j=c(20),a=c.n(j),o=c(2);function b(){var e=Object(i.h)().movieId,t=Object(r.useState)(""),c=Object(n.a)(t,2),j=c[0],b=c[1],h=Object(i.g)();Object(r.useEffect)((function(){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US")).then((function(e){return e.json()})).then((function(e){b(e)}))}),[e]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:a.a.backBatton,onClick:function(e){e.preventDefault(),h(-1)},children:"back"}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"http://image.tmdb.org/t/p/w92".concat(j.poster_path),alt:"film poster"}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:j.title||j.name}),Object(o.jsxs)("span",{children:["User score: ",j.vote_average," "]}),Object(o.jsx)("h2",{children:"Overview"}),Object(o.jsx)("span",{children:j.overview}),Object(o.jsx)("h3",{children:"Genres"}),Object(o.jsx)("ul",{children:j.genres&&j.genres.map((function(e){return Object(o.jsx)("li",{children:e.name},e.id)}))}),Object(o.jsx)("span",{children:"Aditional Information"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"cast",children:"Cast"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"review",children:"Review"})})]}),Object(o.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=movies-details.9112ce3a.chunk.js.map