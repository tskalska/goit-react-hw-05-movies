(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{18:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(4),c=n(2);function r(e){var t=e.movies;return Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:t&&t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))})})}},27:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var i=n(5),c=n(0);var r=n(18),s=n(2);function o(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=0840ee49b4e805937e2935e9747ee2d4").then((function(e){return e.json()})).then((function(e){o(e.results)}))}),[]),Object(s.jsx)("div",{children:Object(s.jsx)(r.a,{movies:n})})}}}]);
//# sourceMappingURL=homepage.4bfbc2a5.chunk.js.map