(this.webpackJsonplightouts=this.webpackJsonplightouts||[]).push([[0],{32:function(n,t,e){n.exports=e(43)},36:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(24),i=e.n(o),c=(e(36),e(19)),u=e(7),l=e(3),s=e(4),f=e(8),h=function(n){return n>15},m=function(n){return!n.some((function(n,t){return n.some((function(n,e){return t===e&&1!==n||t!==e&&0!==n}))}))},g=function(n){return JSON.parse(JSON.stringify(n))},p=function(n,t,e){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(s.a)(Array(Math.floor(n.length/t)).keys()).map((function(e){return n.slice(e*t,e*t+t)}))}(t.map((function(t){return 1&t.map((function(t,e){return t*n[e]})).filter((function(n){return 1===n})).length})),e)},v=e(20);Object(f.b)({OrbitControls:v.a});var w,d=function(){var n=Object(f.d)(),t=n.camera,e=n.gl;return Object(r.useEffect)((function(){var n=new v.a(t,e.domElement);return t.position.set(0,0,700),n.minDistance=0,n.maxDistance=1e3,function(){n.dispose()}}),[t,e]),null},b=!window.location.href.split("#")[1]||parseInt(window.location.href.split("#")[1])<2?3:parseInt(window.location.href.split("#")[1]),O=(window.innerWidth>window.innerHeight?window.innerHeight:1.25*window.innerWidth)/(2*b),j=(w=b,Object(s.a)(Array(w).keys()).map((function(n){return Object(s.a)(Array(w).keys()).map((function(n){return Math.floor(2*Math.random())}))})));console.log(h(b)?"Difficult":"Easy");for(var y=function(n){return Object(s.a)(Array(n*n).keys()).map((function(t){return Object(s.a)(Array(n*n).keys()).map((function(e){return t===e||0<=t-1&&t-1===e&&e%n!==n-1||t+1<n*n&&t+1===e&&e%n!==0||0<=t-n&&t-n===e||t+n<n*n&&t+n===e?1:0}))}))}(b),E=function(n){return Object(s.a)(Array(n*n).keys()).map((function(t){return Object(s.a)(Array(n*n).keys()).map((function(n){return t===n?1:0}))}))}(b),A=function(n,t,e){for(var r=Array(n*n).fill(!1),a=Array(n*n).fill(!1),o=0;!m(t)&&o++<n;)t.forEach((function(o,i){o.forEach((function(c,u){if(i!==u&&1===c)for(var l=0;l<n*n;l++)if(i!==l&&!t[l].slice(0,u).includes(1)&&1===t[l][u]){for(var s=t[l],f=e[l],h=0;h<n*n;h++)o[h]=o[h]+s[h]&1,e[i][h]=e[i][h]+f[h]&1;if(!r[i]&&1===o.filter((function(n){return 1===n})).length){r[i]=!0;var m=o.indexOf(1),p=o,v=e[i];t[i]=g(t[m]),e[i]=g(e[m]),t[m]=g(p),e[m]=g(v);for(var w=0;w<n*n;w++){if(w!==m&&1===t[w][m])for(var d=0;d<n*n;d++)t[w][d]=t[w][d]+t[m][d]&1,e[w][d]=e[w][d]+e[m][d]&1;r[w]||1!==t[w].filter((function(n){return 1===n})).length||(a[w]=!0)}a.forEach((function(o,i){if(o&&!r[i]&&1===t[i].filter((function(n){return 1===n})).length){a[i]=!1,r[i]=!0;var c=t[i].indexOf(1),u=t[i],l=e[i];t[i]=g(t[c]),e[i]=g(e[c]),t[c]=g(u),e[c]=g(l);for(var s=0;s<n*n;s++)if(s!==c&&1===t[s][c])for(var f=0;f<n*n;f++)t[s][f]=t[s][f]+t[c][f]&1,e[s][f]=e[s][f]+e[c][f]&1}}))}break}}))}));return m(t)?(console.log(o),console.log("toIdt","\n",t.map((function(n){return n.join(", ")})).join("\n"),"\n"),console.log("mapLightsInv","\n",e.map((function(n){return n.join(", ")})).join("\n"),"\n"),e):(console.warn("Inverse Matrix isnt EXIST!"),!1)}(b,y,E),k=[],S=0;S<b;S++){k[S]=[];for(var M=0;M<b;M++)k[S][M]=0}var x=!h(b)&&A?p(j.flat(),A,b):JSON.parse(JSON.stringify(k));function F(n){var t=Object(r.useRef)();return Object(f.c)((function(){n.showAnsFlag&&1===n.ansMap[n.x][n.y]?t.current.rotation.y+=.1:t.current.rotation.y=0})),a.a.createElement("mesh",Object.assign({},n,{ref:t}),a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[O,O,O]}),a.a.createElement("meshStandardMaterial",{attach:"material",color:n.color}))}function I(n){Object(r.useRef)();var t=Object(r.useState)(n),e=Object(l.a)(t,2),o=e[0],i=e[1],c=O+O/2,f=Object(s.a)(Array(b).keys()).map((function(n,t){return(t-Math.floor(b/2))*c+(1&b?0:c/2)})),m=f.map((function(n){return f.map((function(t){return[n,t,0]}))})).flat(),g=[],v=function(t){var e,r=parseInt(m[t][0]/c+Math.floor(b/2)),l=b-1-parseInt(m[t][1]/c+Math.floor(b/2));g.push(a.a.createElement(F,{onClick:function(){!function(n){var t=n[0],e=n[1];j[e][t]=1&~j[e][t],[[1,0],[0,1],[-1,0],[0,-1]].forEach((function(n){0<=n[0]+e&&n[0]+e<b&&0<=n[1]+t&&n[1]+t<b&&(j[n[0]+e][n[1]+t]=1&~j[n[0]+e][n[1]+t])})),!h(b)&&A&&(x=JSON.parse(JSON.stringify(p(j.flat(),A,b)))),console.log(j.map((function(n){return n.join(", ")})).join("\n"))}([r,l]),i(Object(u.a)(Object(u.a)({},o),{},{active:j,answer:x}))},key:t,y:r,x:l,showAnsFlag:n.showAnsFlag,ansMap:o.answer,position:m[t],color:(e=o.active[l][r],e?"darkorange":"darkslateblue")}))};for(var w in m)v(w);return a.a.createElement("mesh",null,g)}I.defaultProps={active:j,answer:x};var J=function(n){return a.a.createElement(f.a,null,a.a.createElement(d,null),a.a.createElement("ambientLight",null),a.a.createElement("pointLight",{position:[0,0,1e3]}),a.a.createElement(I,{showAnsFlag:n.showAnsFlag}))},N=e(16);function W(){var n=Object(c.a)(["\n    z-index: 1;\n    position: absolute;\n    top: 5vh;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 30vh;\n    text-align: center;\n    font-size: 3vh;\n    padding: 1vh;\n    background: white;\n"]);return W=function(){return n},n}function B(){var n=Object(c.a)(["\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 100vw;\n"]);return B=function(){return n},n}function C(n){var t=Object(r.useState)(n),e=Object(l.a)(t,2),o=e[0],i=e[1];return a.a.createElement(D,null,a.a.createElement(H,{onClick:function(){i(Object(u.a)(Object(u.a)({},o),{},{showAnsFlag:!o.showAnsFlag}))},className:"ans-show-button"},"SHOW ANSWER"),a.a.createElement(J,{showAnsFlag:o.showAnsFlag}))}C.defaultProps={showAnsFlag:!1};var D=N.a.div(B()),H=N.a.button(W()),L=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c3686cee.chunk.js.map