(this["webpackJsonpweek3-day-4"]=this["webpackJsonpweek3-day-4"]||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},17:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),u=(n(17),n(3)),i=(n(24),n(2)),s=n.n(i),l=n(5);var f=function(){var e=Object(u.c)((function(e){return e.counter})),t=Object(u.c)((function(e){return e.todos})),n=Object(u.b)();return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Counter Buttons"),a.a.createElement("div",{className:"counter"},a.a.createElement("h3",null,"Counter : ",e),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"min",onClick:function(){n(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t({type:"KURANGI"})}),200);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Substract"),a.a.createElement("div",{className:"or"}),a.a.createElement("button",{className:"plus",onClick:function(){n(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t({type:"TAMBAHKAN"})}),200);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Add"))),a.a.createElement("button",{onClick:function(r){console.log(t),n(function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e<1?1:e,t.next=3,fetch("https://jsonplaceholder.typicode.com/todos/"+r);case 3:a=t.sent,setTimeout((function(){n({type:"GET_DATA",payload:a.json()})}),200);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}},"Fetch Api "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(11),m=n(1);var d=function(e,t){if("undefined"===typeof e)return 0;switch(t.type){case"TAMBAHKAN":return e+1;case"KURANGI":return e-1;default:return e}};var h=function(e,t){return"undefined"===typeof e?"":"GET_DATA"===t.type?t.payload:t},v=Object(m.c)({counter:d,todos:h}),b=Object(m.d)(v,Object(m.a)(p.a));o.a.render(a.a.createElement(u.a,{store:b},a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.7ac5896f.chunk.js.map