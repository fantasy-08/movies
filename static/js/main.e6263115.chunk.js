(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(20),a(2)),s=a(14);var i=function(e){var t=e.handleInput,a=e.search;return c.a.createElement("section",{className:"searchbox-wrap"},c.a.createElement("input",{type:"text",placeholder:"Let's Binge it!",className:"searchbox",onChange:t,onKeyPress:a}))};var u=function(e){var t=e.result,a=e.openPopup;return c.a.createElement("div",{className:"result",onClick:function(){return a(t.imdbID)}},c.a.createElement("img",{src:t.Poster}),c.a.createElement("h3",null,t.Title))};var m=function(e){var t=e.results,a=e.openPopup;return c.a.createElement("section",{className:"results"},t.map((function(e){return c.a.createElement(u,{key:e.imdbID,result:e,openPopup:a})})))};var p=function(e){var t=e.selected,a=e.closePopup;return c.a.createElement("section",{className:"popup"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.Title," ",c.a.createElement("span",null,"(",t.Year,")")),c.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:t.Poster}),c.a.createElement("p",null,t.Plot)),c.a.createElement("button",{className:"close",onClick:a},"Back")))},d=a(3),h=a.n(d);var E=function(){var e="https://www.omdbapi.com/?apikey=dfe6d885",t=Object(n.useState)({s:"",results:[],selected:{}}),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Binge What?")),c.a.createElement("main",null,c.a.createElement(i,{handleInput:function(e){var t=e.target.value;l((function(e){return Object(o.a)(Object(o.a)({},e),{},{s:t})}))},search:function(t){"Enter"===t.key&&h()(e+"&s="+r.s).then((function(e){var t=e.data;console.log(t);var a=t.Search;console.log(t.Search),l((function(e){return Object(o.a)(Object(o.a)({},e),{},{results:a})}))}))}}),c.a.createElement(m,{results:r.results,openPopup:function(t){h()(e+"&i="+t).then((function(e){var t=e.data;l((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof r.selected.Title&&c.a.createElement(p,{selected:r.selected,closePopup:function(){l((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e6263115.chunk.js.map