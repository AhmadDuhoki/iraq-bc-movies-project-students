(this["webpackJsonpreact-assissans"]=this["webpackJsonpreact-assissans"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c);a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(11),i=(a(21),a(46)),m=a(47),s=a(41);function u(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),s=m[0],u=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-inline my-2",onSubmit:function(t){u(!0),t.preventDefault(),E(c).then((function(t){u(!1),e.onSubmit(t.results)}))}},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search for a Movie",value:c,onChange:function(t){u(!0),l(t.target.value),e.onHandle(t.target.value),E(c).then((function(e){u(!1)}))}}),r.a.createElement("button",{className:" btn btn-primary ml-3",type:"submit"},"Search")),s&&r.a.createElement(v,null))}var v=function(){return r.a.createElement(s.a,{animation:"grow",role:"status",variant:"warning",className:"ml-4"},r.a.createElement("span",{className:"sr-only spin "},"Loading..."))},h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{bg:"dark",variant:"dark"},r.a.createElement(i.a.Brand,{href:"#"},"Assassins Movies"),r.a.createElement(m.a,null,r.a.createElement(m.a.Link,{href:"#home"},"Home")),r.a.createElement(u,{onHandle:e.handleQuery,onSubmit:e.handleMovies})))};function E(e){return fetch("".concat("https://api.themoviedb.org/3/search/movie/?api_key=1d54e327869a62aba4dc1b58c2b30233","&query=").concat(e)).then((function(e){return e.json()}))}var f=a(43),d=a(44),g=a(45),p=a(48),b=a(42);var w=function(e){var t=e.item,a="https://image.tmdb.org/t/p/w500".concat(t.poster_path);return console.log(t),r.a.createElement("div",null,r.a.createElement(p.a,{style:{width:"20rem",hieght:"10rem"}},r.a.createElement(p.a.Img,{variant:"top",src:a}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,t.title),r.a.createElement(p.a.Text,null,t.overview),r.a.createElement(p.a.Text,null,r.a.createElement(b.a,{variant:"success"},t.vote_average)))))};var y=function(e){return r.a.createElement(f.a,{className:"mt-5"},r.a.createElement(d.a,null,e.movies.map((function(e){return r.a.createElement(g.a,{lg:"6"},r.a.createElement(w,{item:e}))}))))};function S(e){return console.log(e.moviesData),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{movies:e.moviesData.map((function(e){return e}))}))}var j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("X"),i=Object(o.a)(l,2),m=(i[0],i[1]);return r.a.createElement("div",null,r.a.createElement(h,{handleQuery:function(e){m(e)},handleMovies:function(e){return c(e)}}),r.a.createElement(S,{moviesData:a}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.5fc5960a.chunk.js.map