(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{21:function(t,e,c){t.exports={profilePhoto:"Cast_profilePhoto__16Jjl",actorslist:"Cast_actorslist__3NTQt"}},25:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return l}));var i=c(5),r=c(0),o=c(1),s=c(21),n=c.n(s),a=c(2);function l(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),c=e[0],s=e[1],l=Object(o.h)().movieId;return Object(r.useEffect)((function(){return fetch("https://api.themoviedb.org/3/movie/".concat(l,"/credits?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US")).then((function(t){return t.json()})).then((function(t){s(t.cast)}))}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:n.a.actorslist,children:c&&c.map((function(t){return Object(a.jsxs)("li",{children:[null===t.profile_path&&Object(a.jsx)("p",{children:"No image"}),Object(a.jsx)("br",{}),t.profile_path&&Object(a.jsx)("img",{src:"http://image.tmdb.org/t/p/w92".concat(t.profile_path),alt:"film poster",className:n.a.profilePhoto}),Object(a.jsx)("br",{}),t.name,Object(a.jsx)("p",{children:t.character}),Object(a.jsx)("br",{})]},t.id)}))})})}}}]);
//# sourceMappingURL=cast.f0459775.chunk.js.map