(function(t){function e(e){for(var n,o,l=e[0],c=e[1],i=e[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1df6":function(t,e,a){"use strict";a("899c")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"boards"},t._l(t.boards,(function(e,n){return a("board",{key:e.name,model:{value:t.boards[n],callback:function(e){t.$set(t.boards,n,e)},expression:"boards[index]"}},t._l(e.items,(function(t){return a("card",{key:t.name,attrs:{title:t.name,"board-class":e.class}})})),1)})),1)])},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[a("div",{staticClass:"header-board"},[a("div",{staticClass:"background-wrapper",style:{borderBottom:"3px solid"+this.value.color}},[a("h3",[t._v(t._s(t.value.name))])])]),a("div",{staticClass:"body-board"},[a("draggable",t._b({staticClass:"tasks",attrs:{list:t.value.items,"data-key":t.value.class,move:t.moveHandler,"ghost-class":"ghost",group:"board"}},"draggable",t.draggableOptions,!1),[t._t("default")],2)],1),t._m(0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-board"},[a("div",{staticClass:"add-new-task-btn"})])}],c=[{name:"Новые",items:[{name:"Карточка 1"},{name:"Карточка 2"},{name:"Карточка 3"},{name:"Карточка 4"}],color:"#FFC93C",class:"new"},{name:"В работе",items:[{name:"Карточка 5"},{name:"Карточка 6"}],color:"#0052B3",class:"work"},{name:"Оплачен",items:[],color:"#00A161",class:"done"},{name:"Отменен",items:[],color:"#FF4F01",class:"close"}],i="#FDF139",u={animation:300,disabled:!1,ghostClass:"ghost"},d=a("b76a"),f=a.n(d),p={name:"Board",components:{draggable:f.a},data:function(){return{defaultColor:i,draggableOptions:u}},props:{value:{type:Object}},methods:{moveHandler:function(t){var e=t.dragged,a=e.dataset.board;console.log("get ",t.from.getAttribute("data-key"));var n=t.to.getAttribute("data-key");a!==n&&(e.classList.remove(a),e.classList.add(n),console.log("set ",e.dataset.board),e.dataset.board=n)}}},b=p,m=(a("c823"),a("2877")),v=Object(m["a"])(b,o,l,!1,null,"63b509ac",null),g=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task",class:t.boardClass,attrs:{"data-board":t.boardClass}},[a("div",{staticClass:"plug"}),t._m(0),t._m(1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[a("div",{staticClass:"plug"}),a("div",{staticClass:"plug"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[a("div",{staticClass:"plug"}),a("div",{staticClass:"plug"})])}],C={name:"Card",props:{title:String,boardClass:String}},y=C,k=(a("1df6"),Object(m["a"])(y,h,_,!1,null,"24ccf9f1",null)),w=k.exports,O={name:"App",components:{Board:g,Card:w},mounted:function(){console.log(this.boards)},data:function(){return{boards:c}},methods:{createTask:function(){this.newTask&&(this.arrBacklog.push({name:this.newTask}),this.newTask)}}},x=O,j=(a("034f"),Object(m["a"])(x,s,r,!1,null,null,null)),$=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t($)}}).$mount("#app")},"5e9a":function(t,e,a){},"85ec":function(t,e,a){},"899c":function(t,e,a){},c823:function(t,e,a){"use strict";a("5e9a")}});
//# sourceMappingURL=app.6b657708.js.map