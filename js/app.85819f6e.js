(function(t){function e(e){for(var a,l,s=e[0],c=e[1],i=e[2],f=0,d=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o=[];function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"43f3":function(t,e,r){"use strict";var a=r("a960"),n=r.n(a);n.a},5365:function(t,e,r){"use strict";var a=r("f0fb"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-3",attrs:{id:"main"}},[r("cabecalho"),r("lembrete")],1)},o=[],l=(r("f9e3"),r("7f10"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titulos text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:r("a189"),width:"200"}}),a("h1",[t._v("ReminderApp")]),a("hr")])}],c={name:"cabecalho"},i=c,u=(r("43f3"),r("2877")),f=Object(u["a"])(i,l,s,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lembrete mb-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"text-dark"},[t._v("Registrar")]),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.lembrar,expression:"lembrar"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Insira o lembrete"},domProps:{value:t.lembrar},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addLembrete(t.lembrar)},input:function(e){e.target.composing||(t.lembrar=e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.addLembrete(t.lembrar)}}},[r("span",{staticClass:"fa fa-plus"})])])]),r("hr"),r("h5",{staticClass:"text-dark"},[t._v(" Lembretes "),r("span",{staticClass:"badge badge-warning"},[t._v(t._s(t.lembretes.length))])]),r("ul",{staticClass:"list-group"},t._l(t.lembretes,(function(e){return r("li",{key:e,staticClass:"list-group-item"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("p",{staticClass:"mt-2",staticStyle:{"font-size":"19px"}},[t._v(t._s(e))])]),t._m(0,!0)])])})),0),r("clearStorage")],1)])])])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4 text-center"},[r("button",{staticClass:"btn btn-dark mt-2"},[r("span",{staticClass:"fa fa-trash"})]),r("br"),r("span",{staticStyle:{"font-size":"14px"}},[t._v("Excluir")])])}],b=(r("e25e"),r("1157")),v=r.n(b),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hr"),r("button",{staticClass:"btn btn-danger btn-block mt-2",on:{click:function(e){return t.apagarTudo()}}},[t._v(" Remover Todos "),r("span",{staticClass:"fa fa-trash"})])])},h=[],y=(r("4989"),v.a),_={name:"clearStorage",methods:{apagarTudo:function(){localStorage.clear(),alert("Lembretes deletados com sucesso!"),location.reload()}},created:function(){y("#meuModal").on("shown.bs.modal",(function(){y("#meuInput").trigger("focus")}))}},C=_,k=(r("5365"),Object(u["a"])(C,g,h,!1,null,null,null)),x=k.exports,S=v.a,w={name:"lembrete",components:{clearStorage:x},data:function(){return{lembrar:"",lembretes:[]}},methods:{addLembrete:function(t){if(""==this.lembrar)alert("Insira uma tarefa válida!");else{this.lembrar="";var e=localStorage.getItem("keyID");void 0==e||""==e?(e=1,localStorage.setItem("keyID",e)):(e=parseInt(e),e++,localStorage.setItem("keyID",e)),localStorage.setItem(e,t),location.reload()}}},created:function(){var t=localStorage.getItem("keyID");t=parseInt(t);for(var e=1;e<=t;e++){var r=localStorage.getItem(e);null!==r&&this.lembretes.push(r)}S(document).ready((function(){for(var t=document.querySelectorAll("button.btn-dark"),e=function(e){t[e].id=e+1;var r=document.getElementById(e+1);r.onclick=function(){localStorage.removeItem(r.id),location.reload()}},r=0;r<t.length;r++)e(r)}))}},I=w,O=(r("9e8b"),Object(u["a"])(I,p,m,!1,null,null,null)),j=O.exports,E={name:"app",components:{cabecalho:d,lembrete:j}},P=E,$=(r("034f"),Object(u["a"])(P,n,o,!1,null,null,null)),T=$.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(T)}}).$mount("#app")},"5c52":function(t,e,r){},"85ec":function(t,e,r){},"9e8b":function(t,e,r){"use strict";var a=r("5c52"),n=r.n(a);n.a},a189:function(t,e,r){t.exports="img/lembrete.0a39bf01.png"},a960:function(t,e,r){},f0fb:function(t,e,r){}});
//# sourceMappingURL=app.85819f6e.js.map