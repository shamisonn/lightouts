(this.webpackJsonplightouts=this.webpackJsonplightouts||[]).push([[0],{24:function(e,n,t){e.exports=t(33)},28:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(19),i=t.n(r),c=(t(28),t(16)),l=t(3),u=t(14),s=t(17);Object(u.b)({OrbitControls:s.a});for(var f=window.innerWidth>window.innerHeight?1:.5,m=[],h=0;h<3;h++){m[h]=[];for(var v=0;v<3;v++)m[h][v]=Math.floor(2*Math.random())}for(var p=[],g=0;g<9;g++){p[g]=[];for(var j=0;j<9;j++)p[g][j]=g===j||0<=g-1&&g-1===j&&j%3!==2||g+1<9&&g+1===j&&j%3!==0||0<=g-3&&g-3===j||g+3<=9&&g+3===j?1:0}console.log(p.map((function(e){return e.join(", ")})).join("\n"));var d=JSON.parse(JSON.stringify(p));console.log(d.map((function(e){return e.join(", ")})).join("\n"));for(var b=[],E=0;E<9;E++){b[E]=[];for(var O=0;O<9;O++)b[E][O]=E===O?1:0}var w=JSON.parse(JSON.stringify(b));function k(e){var n=Object(o.useRef)();return a.a.createElement("mesh",Object.assign({},e,{ref:n}),a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[f,f,f]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:e.color}))}function y(e){Object(o.useRef)();var n=Object(o.useState)(e),t=Object(l.a)(n,2),r=t[0],i=t[1],u=[-1*(f+f/2),0,f+f/2],s=u.map((function(e){return u.map((function(n){return[e,n,0]}))})).flat(),h=[],v=function(e){var n,t=parseInt(s[e][0]/(f+f/2)+1),o=2-parseInt(s[e][1]/(f+f/2)+1);h.push(a.a.createElement(k,{onClick:function(e){!function(e){var n=e[0],t=e[1];m[t][n]=1&~m[t][n],[[1,0],[0,1],[-1,0],[0,-1]].forEach((function(e){0<=e[0]+t&&e[0]+t<3&&0<=e[1]+n&&e[1]+n<3&&(m[e[0]+t][e[1]+n]=1&~m[e[0]+t][e[1]+n])})),console.log(m.map((function(e){return e.join(", ")})).join("\n"))}([t,o]),i(Object(c.a)(Object(c.a)({},r),{},{active:m}))},key:e,position:s[e],color:(n=r.active[o][t],n?"darkorange":"darkslateblue")}))};for(var p in s)v(p);return a.a.createElement("mesh",null,h)}console.log(w.map((function(e){return e.join(", ")})).join("\n")),console.log(b.map((function(e){return e.join(", ")})).join("\n")),y.defaultProps={active:m};var S=function(){var e=Object(u.c)(),n=e.camera,t=e.gl;return Object(o.useEffect)((function(){var e=new s.a(n,t.domElement);return e.minDistance=3,e.maxDistance=20,function(){e.dispose()}}),[n,t]),null};var J=function(){return a.a.createElement(u.a,null,a.a.createElement(S,null),a.a.createElement("ambientLight",null),a.a.createElement("pointLight",{position:[10,10,10]}),a.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.1b5cad76.chunk.js.map