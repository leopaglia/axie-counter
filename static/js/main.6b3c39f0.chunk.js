(this["webpackJsonpaxie-counter-pwa"]=this["webpackJsonpaxie-counter-pwa"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),o=(n(11),n(2)),s=n(4),l=n(3),d=n(0),j=Object(c.createContext)(),u=function(){return Object(c.useContext)(j)},b=[[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1]],h=[!0,!0,!0],O=function(e){var t=e.children,n=Object(c.useState)(3),r=Object(o.a)(n,2),i=r[0],a=r[1],u=Object(c.useState)(6),O=Object(o.a)(u,2),g=O[0],f=O[1],x=Object(c.useState)(0),v=Object(o.a)(x,2),p=v[0],m=v[1];Object(c.useEffect)((function(){m(g+3>12?g+3-12:0)}),[g]);var w=Object(c.useState)(b),k=Object(o.a)(w,2),C=k[0],y=k[1],A=Object(c.useState)(1),S=Object(o.a)(A,2),N=S[0],E=S[1],M=Object(c.useState)(h),R=Object(o.a)(M,2),W=R[0],T=R[1];return Object(d.jsx)(j.Provider,{value:{energyCount:i,increaseEnergyCount:function(){return a(10!==i?i+1:10)},decreaseEnergyCount:function(){return a(0!==i?i-1:0)},cardCount:g,amountToDiscard:p,usedCards:C,toggleCard:function(e,t){if(0!==g){var n=Object(l.a)({},C),c=Object(l.a)({},n[e]);y(Object.values(Object(l.a)(Object(l.a)({},n),{},Object(s.a)({},e,Object.values(Object(l.a)(Object(l.a)({},c),{},Object(s.a)({},t,!c[t]))))))),f(C[e][t]?g+1:g-1)}},round:N,endRound:function(){f(g+3<12?g+3:12),a(i+2<10?i+2:10),E(N+1)},axiesAlive:W,toggleAxieAlive:function(e){var t=Object(l.a)({},W);T(Object.values(Object(l.a)(Object(l.a)({},t),{},Object(s.a)({},e,!W[e]))))},resetAll:function(){a(3),f(6),m(0),y(b),E(1),T(h)},MAX_ENERGY:10},children:t})},g=(n(13),function(){var e=u(),t=e.cardCount,n=e.amountToDiscard;return Object(d.jsxs)("div",{className:"cards-counter",children:[Object(d.jsx)("img",{height:"60",src:"img/cards.png",alt:"card count"}),Object(d.jsxs)("h3",{children:["x",t]}),!!n&&Object(d.jsxs)("small",{children:["discards ",n," next round"]})]})}),f=(n(14),function(){var e=u(),t=e.usedCards,n=e.toggleCard,r=e.axiesAlive,i=e.toggleAxieAlive,a={0:{src:"img/teeth.png",alt:"mouth"},1:{src:"img/horns.png",alt:"horns"},2:{src:"img/back.png",alt:"back"},3:{src:"img/tail.png",alt:"tail"}};return Object(d.jsxs)("table",{className:"cards-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("th",{children:"#1"}),Object(d.jsx)("th",{children:"#2"}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"icon",children:Object(d.jsx)("img",{src:a[t%4].src,alt:a[t%4].alt})}),e.map((function(e,c){return Object(d.jsx)("td",{className:r[Math.floor(t/4)]?e?"used":"potential-draw":"disabled",onClick:function(){return r[Math.floor(t/4)]&&n(t,c)},children:e?"X":""},"cell-".concat(t,"-").concat(c))})),t%4===0?Object(d.jsx)("td",{className:"kill-btn",rowSpan:4,onClick:function(){return i(t/4)},children:r[Math.floor(t/4)]?Object(d.jsx)("img",{height:40,width:50,src:"img/alive.png",alt:"dead"}):Object(d.jsx)("img",{height:40,src:"img/dead.png",alt:"dead"})}):null]}),t%4===3&&t<11&&Object(d.jsx)("tr",{children:Object(d.jsx)("td",{className:"divider",colSpan:4,children:Object(d.jsx)("hr",{})})},"divider-".concat(Math.floor(t/4)))]},"row-".concat(t))}))})]})}),x=(n(15),function(){var e=u(),t=e.energyCount,n=e.increaseEnergyCount,c=e.decreaseEnergyCount,r=e.MAX_ENERGY;return Object(d.jsxs)("div",{className:"energy-counter",children:[Object(d.jsx)("img",{height:"60",src:"img/energy.png",alt:"energy"}),Object(d.jsxs)("h3",{children:[t," / ",r]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:c,children:"-"}),Object(d.jsx)("button",{onClick:n,children:"+"})]})]})}),v=function(){var e=u().resetAll;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:e,children:"New Game"})})},p=function(){var e=u(),t=e.round,n=e.endRound;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Round ",t]}),Object(d.jsx)("button",{onClick:n,children:"Next round"})]})},m=(n(16),function(){return window.matchMedia("(display-mode: standalone)").matches||!!window.navigator.standalone}),w=function(){m&&window.resizeTo(540,1250);var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),a=Object(o.a)(i,2),s=a[0],l=a[1];return Object(c.useEffect)((function(){"getInstalledRelatedApps"in navigator&&navigator.getInstalledRelatedApps().then((function(e){console.log({installed:e}),m||(e?l(!0):r(!0))}))}),[]),Object(d.jsxs)("div",{className:"app",children:[n&&Object(d.jsx)("button",{children:"Install"}),s&&Object(d.jsx)("button",{children:"Open"}),Object(d.jsx)(p,{}),Object(d.jsx)(x,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(g,{}),Object(d.jsx)(f,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(v,{})]})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(w,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/axie-counter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/axie-counter","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(t,e)}))}}()}],[[17,1,2]]]);
//# sourceMappingURL=main.6b3c39f0.chunk.js.map