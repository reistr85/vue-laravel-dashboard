(function(t){function e(e){for(var s,r,i=e[0],c=e[1],u=e[2],m=0,d=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},o=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"370a":function(t,e,n){},"569a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var s={};n.r(s),n.d(s,"ActionLogin",(function(){return ce})),n.d(s,"ActionMe",(function(){return ue})),n.d(s,"ActionLogout",(function(){return le})),n.d(s,"ActionCleanLocalStorage",(function(){return me}));var a={};n.r(a),n.d(a,"isLoggedIn",(function(){return de})),n.d(a,"getStatus",(function(){return pe})),n.d(a,"getUser",(function(){return fe}));var o={};n.r(o),n.d(o,"ActionRegister",(function(){return _e}));var r={};n.r(r),n.d(r,"getStatusRegister",(function(){return Ce}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),c=n("73e4"),u=n.n(c);n("2a97");i["a"].use(u.a,{timeout:3e3,progressBar:!0,layout:"topRight"});n("15f5"),n("7051");var l,m=n("683f"),d=n("9949"),p=n.n(d),f=n("3a60"),h=n.n(f),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},g=[],b={name:"App",components:{}},_=b,C=n("2877"),y=Object(C["a"])(_,v,g,!1,null,null,null),w=y.exports,S=n("2f62"),x={status:"",access_token:localStorage.getItem("aguaritmo.access_token")||"",user:JSON.parse(localStorage.getItem("aguaritmo.user"))||""},$=n("ade3"),k="AUTH/AUTH_SET_USER",A="AUTH/AUTH_REQUEST",E="AUTH/AUTH_SUCCESS",O="AUTH/LOGOUT",j=(l={},Object($["a"])(l,k,(function(t,e){t.user=e})),Object($["a"])(l,A,(function(t){t.status=!t.status})),Object($["a"])(l,E,(function(t,e){t.access_token=e.token,t.user=e.user})),Object($["a"])(l,O,(function(t){t.status="",t.access_token=""})),l),P=(n("d3b7"),n("96cf"),n("1da1")),U=n("bc3a"),L=n.n(U);L.a.defaults.baseURL="https://aguaeritmo.api.mgetech.com.br/api/v1/academy",L.a.interceptors.request.use(function(){var t=Object(P["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=localStorage.getItem("aguaritmo.access_token"),e.headers={Authorization:"Bearer ".concat(n),ApiKey:"base64:FpGwDyZ/ZNdYHQOkVxjJSUxZqfRGxCks+Sich2Rlldg="},t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){Promise.reject(t)}));var I=L.a,R=n("8c4f"),T=(n("99af"),n("2909")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DashboardComponent",[n("div",{staticClass:"content-pages",attrs:{slot:"slot-pages"},slot:"slot-pages"},[n("header",{staticClass:"title_pages"},[n("h2",[t._v(t._s(this.$route.meta.title))]),n("p",[t._v(t._s(this.$route.meta.description))])]),n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-3"},[n("CardsComponent",{attrs:{type:"Clientes",percentage:"7%",icon:"fa-users",qtd:"250",bg:"#4CAF4F"}})],1),n("div",{staticClass:"col-12 col-md-3"},[n("CardsComponent",{attrs:{type:"Matrículas",percentage:"7%",icon:"fa-users",qtd:"198",bg:"#FB9801"}})],1),n("div",{staticClass:"col-12 col-md-3"},[n("CardsComponent",{attrs:{type:"Mensalidades",percentage:"7%",icon:"fa-users",qtd:"788",bg:"#30CAE3"}})],1),n("div",{staticClass:"col-12 col-md-3"},[n("CardsComponent",{attrs:{type:"Relatórios",percentage:"7%",icon:"fa-users",qtd:"523",bg:"#7872CF"}})],1)])])])])},q=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"sidebar"},[n("SideBarComponent")],1),n("div",{staticClass:"content-right"},[n("div",{staticClass:"navbar"},[n("NabBarConponent")],1),n("div",{staticClass:"pages"},[t._t("slot-pages")],2)])])},D=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t._m(0),n("div",{staticClass:"menu"},[n("ul",[n("li",{class:[{active:t.menuActive(["home"])}]},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"fa fa-home icon"}),t._v(" Início")])],1),n("li",{class:[{active:t.menuActive(["users","users_show","user_create"])}]},[n("router-link",{attrs:{to:{name:"users"}}},[n("i",{staticClass:"fa fa-users icon"}),t._v(" Usuários")])],1),n("li",{class:[{active:t.menuActive(["modalities"])}]},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"fa fa-box icon"}),t._v(" Modalidades")])],1),n("li",{class:[{active:t.menuActive(["customers"])}]},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"fa fa-users icon"}),t._v(" Clientes")])],1),n("li",{class:[{active:t.menuActive(["enrollments"])}]},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"fa fa-chart-bar icon"}),t._v(" Matrículas")])],1)])])])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",{staticClass:"info"},[n("h3",{staticClass:"name"},[t._v("Academia")])])])}],J=(n("b0c0"),{name:"SideBarComponent",methods:{menuActive:function(t){for(var e in t)if(t[e]==this.$route.name)return!0;return!1}}}),F=J,G=(n("7859"),Object(C["a"])(F,B,H,!1,null,null,null)),z=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("i",{staticClass:"fa fa-list icon-menu"}),n("a",{staticClass:"logout",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Sair "),n("i",{staticClass:"fa fa-sign-out-alt"})])])},Z=[],V={name:"NabBarConponent",methods:{logout:function(){this.$router.push({name:"login"})}}},K=V,Y=(n("6c17"),Object(C["a"])(K,Q,Z,!1,null,null,null)),W=Y.exports,X={name:"DashBoardComponent",components:{SideBarComponent:z,NabBarConponent:W}},tt=X,et=(n("b422"),Object(C["a"])(tt,N,D,!1,null,"3194a87b",null)),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my_card"},[n("div",{staticClass:"content top"},[n("div",{staticClass:"icon",style:{backgroundColor:t.bg}},[n("i",{class:["fa ico",t.icon]})]),n("div",{staticClass:"info"},[n("h3",[t._v(t._s(t.type))]),n("h4",[t._v(t._s(t.qtd))])])]),t._m(0)])},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content footer"},[n("p",{staticClass:"info"},[t._v("Lorem ipsun test")])])}],ot={name:"CardsComponent",props:{type:{type:String,default:""},percentage:{type:String,default:""},icon:{type:String,default:""},qtd:{type:String,default:""},bg:{type:String,default:""}}},rt=ot,it=(n("b925"),Object(C["a"])(rt,st,at,!1,null,"3455aa85",null)),ct=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lists"},[n("div",{staticClass:"top mb-5"},[n("ButtonSimpleComponent",{attrs:{icon:"fa-plus",label:"Novo",class_btn:"btn-success"},on:{action:t.action_btn_new}}),n("InputComponent",{attrs:{label:"",name:"value",id:"value",placeholder:"pesquise aqui",model:t.search}})],1),n("div",{staticClass:"content"},[n("table",{staticClass:"table table-striped my_table"},[n("thead",[n("tr",[t._l(Object.keys(t.columns),(function(e,s){return n("th",{key:s,attrs:{scope:"col"}},[t._v(" "+t._s(t.columns[e])+" ")])})),n("th",{attrs:{scope:"col"}},[t._v(" Ações ")])],2)]),n("tbody",t._l(t.data,(function(e,s){return n("tr",{key:e.id},[t._l(Object.keys(t.columns),(function(a,o){return n("td",{key:o},[n("p",{staticClass:"m-0 my-1"},[t._v(t._s(0==o?s+1:e[a]))])])})),n("td",[n("button",{staticClass:"btn btn-secondary btn-sm",on:{click:function(n){return n.preventDefault(),t.show(e.id)}}},[n("i",{staticClass:"fa fa-eye"})]),n("button",{staticClass:"btn btn-danger btn-sm mx-1",on:{click:function(n){return t.destroy(e.id)}}},[n("i",{staticClass:"fa fa-trash"})])])],2)})),0)])]),n("div",{staticClass:"footer mt-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("p",[t._v("Quantidade de registros"),n("span",{staticClass:"badge bg-secondary mx-2"},[t._v(t._s(t.data_list.length))])])])])])])},lt=[],mt=(n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{class:["btn btn-sm "+t.class_btn],on:{click:function(e){return t.action()}}},[n("i",{class:["fa "+t.icon]}),t._v(" "+t._s(t.label)+" ")])])}),dt=[],pt={name:"ButtonSimple",props:{class_btn:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""}},methods:{action:function(){this.$emit("action")}}},ft=pt,ht=Object(C["a"])(ft,mt,dt,!1,null,null,null),vt=ht.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),"checkbox"===t.input_type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model[t.name],expression:"model[name]"}],staticClass:"form-control",attrs:{name:t.name,id:t.id,placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.model[t.name])?t._i(t.model[t.name],null)>-1:t.model[t.name]},on:{change:function(e){var n=t.model[t.name],s=e.target,a=!!s.checked;if(Array.isArray(n)){var o=null,r=t._i(n,o);s.checked?r<0&&t.$set(t.model,t.name,n.concat([o])):r>-1&&t.$set(t.model,t.name,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.model,t.name,a)}}}):"radio"===t.input_type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.model[t.name],expression:"model[name]"}],staticClass:"form-control",attrs:{name:t.name,id:t.id,placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.model[t.name],null)},on:{change:function(e){return t.$set(t.model,t.name,null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.model[t.name],expression:"model[name]"}],staticClass:"form-control",attrs:{name:t.name,id:t.id,placeholder:t.placeholder,type:t.input_type},domProps:{value:t.model[t.name]},on:{input:function(e){e.target.composing||t.$set(t.model,t.name,e.target.value)}}})])},bt=[],_t={name:"Input",props:{label:{type:String,default:""},input_type:{type:String,default:"text"},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},model:{type:Object}},data:function(){return{}}},Ct=_t,yt=Object(C["a"])(Ct,gt,bt,!1,null,null,null),wt=yt.exports,St={name:"ListsComponent",props:{data:Array,description:String,columns:{},route_btn:{type:String,default:""}},watch:{"search.value":function(){console.log(123),this.$emit("filter",this.search.value)}},data:function(){return{data_list:this.data,search:{value:""}}},mounted:function(){this.listTable()},methods:{listTable:function(){console.log("555"),this.data_list=this.data},show:function(t){this.$emit("show",t)},destroy:function(t){this.$emit("destroy",t)},action_btn_new:function(){this.$router.push({name:"user_create"})}},components:{ButtonSimpleComponent:vt,InputComponent:wt}},xt=St,$t=(n("89d0"),Object(C["a"])(xt,ut,lt,!1,null,"63bbd422",null)),kt=$t.exports,At=(n("bc3a"),{name:"HomeComponent",data:function(){return{clients:[],products:[]}},mounted:function(){this.getData()},methods:{getData:function(){return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},components:{DashboardComponent:nt,CardsComponent:ct,ListsComponent:kt}}),Et=At,Ot=(n("f5fa"),Object(C["a"])(Et,M,q,!1,null,"541c2dc8",null)),jt=Ot.exports,Pt=[{path:"/home",name:"home",component:jt,meta:{title:"Dashboard",description:"Resumo dos principais registros no sistema.",requiresAuth:!0}}],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"login"},[n("div",{staticClass:"content-login"},[t._m(0),n("div",{staticClass:"form"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputEmail1"}},[t._v("E-mail")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group mt-3"},[n("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Senha")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Entrar")])])])])])])},Lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Login do sistema")])])}],It={login:function(t){return new Promise((function(e,n){L.a.post("/login",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}},Rt=It,Tt={name:"LoginComponent",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this,e={email:this.email,password:this.password};Rt.login(e).then((function(){t.$router.push({name:"home"})})).catch((function(t){console.log(t)}))}}},Mt=Tt,qt=(n("a769"),Object(C["a"])(Mt,Ut,Lt,!1,null,"7f31b670",null)),Nt=qt.exports,Dt=[{path:"/login",name:"login",component:Nt}],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DashboardComponent",[n("div",{staticClass:"content-pages",attrs:{slot:"slot-pages"},slot:"slot-pages"},[n("header",{staticClass:"title_pages"},[n("h2",[t._v(t._s(this.$route.meta.title))]),n("p",[t._v(t._s(this.$route.meta.description))])]),n("section",{staticClass:"content-main-pages"},[n("ListsComponent",{attrs:{data:t.users,columns:t.columnsList,route_btn:"user_create"},on:{filter:t.filter,show:t.show,destroy:t.destroy}})],1)])])},Ht=[],Jt=(n("caad"),n("2532"),{computed:{},methods:{limitCaracters:function(t,e){return t.length>=e?t.substring(0,e)+"...":t},stringSeparator:function(){},toastMessage:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";if("success"===n)if("string"===typeof t)this.$noty.success(t);else for(e in t)this.$noty.error(t[e]);else if("error"===n)if(void 0===t)this.$noty.error("Erro inesperado, tente novamente!");else if("string"===typeof t)this.$noty.error(t);else for(e in t)this.$noty.error(t[e])},alertConfirmation:function(t,e,n){var s=this,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new Promise((function(o,r){s.$fire({title:t,text:e,type:n,showCancelButton:a}).then((function(t){void 0===t.value&&o(!1),o(!0)})).catch((function(t){r(t)}))}))},datePT:function(t){if(t&&t.length>=10)return t.substring(8,10)+"/"+t.substring(5,7)+"/"+t.substring(0,4)},hour:function(t){if(t&&t.length>=11)return t.substring(11,13)+":"+t.substring(14,16)},dateHourPT:function(t){if(t&&t.length>=10)return"".concat(t.substring(8,10),"/").concat(t.substring(5,7),"/").concat(+t.substring(2,4)," ").concat(t.substring(11,13),":").concat(t.substring(14,16))},filterSearch:function(t){if(t.length>0){for(var e=[],n=0;n<this.users.length;n++){t=t.toLowerCase();var s=this.users[n].name.toLowerCase();s.includes(t)&&e.push(this.users[n])}this.users=e}else this.users=this.data_list}}}),Ft=Jt,Gt={getAllUsers:function(){return new Promise((function(t,e){L.a.get("/users").then((function(e){t(e)})).catch((function(t){e(t)}))}))},getUser:function(t){return new Promise((function(e,n){L.a.get("/users/".concat(t)).then((function(t){e(t)})).catch((function(t){n(t)}))}))},create:function(t){return new Promise((function(e,n){L.a.post("/users",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},update:function(t){return new Promise((function(e,n){L.a.put("/users/".concat(t.id),t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},delete:function(t){return new Promise((function(e,n){L.a.delete("/users/".concat(t)).then((function(t){e(t)})).catch((function(t){n(t)}))}))}},zt=Gt,Qt={name:"Users",data:function(){return{data_list:[],users:[],columnsList:{id:"#",name:"Nome",email:"E-mail"}}},mounted:function(){this.getAllUsers()},mixins:[Ft],methods:{getAllUsers:function(){var t=this;zt.getAllUsers().then((function(e){t.users=e.data.users,t.data_list=e.data.users})).catch((function(t){console.log(t)}))},show:function(t){this.$router.push({name:"users_show",params:{id:t,action:"update"},props:{action:"update"}})},destroy:function(t){var e=this;this.alertConfirmation("Excluir usuário","Você realmente deseja excluir este usuário?","question").then((function(n){n&&zt.delete(t).then((function(){e.toastMessage("Excluído com sucesso.","success"),e.getAllUsers()})).catch((function(t){500==t.response.status?e.toastMessage(t.response.data.message):e.toastMessage("Erro ao excluir o usuário.")}))}))},filter:function(t){this.filterSearch(t)}},components:{DashboardComponent:nt,ListsComponent:kt}},Zt=Qt,Vt=(n("aab1"),Object(C["a"])(Zt,Bt,Ht,!1,null,"2016a048",null)),Kt=Vt.exports,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DashboardComponent",[n("div",{staticClass:"content-pages",attrs:{slot:"slot-pages"},slot:"slot-pages"},[n("header",{staticClass:"title_pages"},[n("h2",[t._v(t._s(this.$route.meta.title))]),n("p",[t._v(t._s(this.$route.meta.description))])]),n("section",{staticClass:"content-main-pages"},[n("div",{staticClass:"content-header"}),n("div",{staticClass:"content-body"},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("InputComponent",{attrs:{label:"Nome",name:"name",id:"nome",model:t.user}})],1),n("div",{staticClass:"col-3"},[n("InputComponent",{attrs:{label:"E-mail",name:"email",id:"email",model:t.user}})],1),n("div",{staticClass:"col-3"},[n("InputComponent",{attrs:{input_type:"password",label:"Senha",name:"password",id:"password",model:t.user}})],1)])])]),n("div",{staticClass:"content-footer"},[n("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"users"},title:"voltar"}},[n("i",{staticClass:"fa fa-reply-all"}),t._v(" voltar ")]),n("button",{staticClass:"btn btn-success btn-sm mx-2",attrs:{title:"confirmar alterações"},on:{click:function(e){return t.confirm()}}},[n("i",{staticClass:"fa fa-check"}),t._v(" confirmar ")])],1)])])])},Wt=[],Xt={name:"UserCreate",mixins:[Ft],props:{action:{type:String,default:"create"}},data:function(){return{user:{}}},mounted:function(){this.getUser()},methods:{getUser:function(){var t=this,e=this.$route.params.id;e&&zt.getUser(e).then((function(e){t.user=e.data.user})).catch((function(t){console.log(t)}))},confirm:function(){this[this.action](),this.$router.push({name:"users"})},create:function(){var t=this;this.user.type="D",zt.create(this.user).then((function(){t.toastMessage("Realizadom com sucesso.","success")})).catch((function(e){console.log(e),t.toastMessage("Erro ao criar o usuário.")}))},update:function(){var t=this,e={id:this.user.id,name:this.user.name,email:this.user.email,password:this.user.password};zt.update(e).then((function(){t.toastMessage("Realizadom com sucesso.","success")})).catch((function(e){console.log(e),t.toastMessage("Erro ao atualizar o usuário.")}))}},components:{DashboardComponent:nt,InputComponent:wt}},te=Xt,ee=(n("571f"),Object(C["a"])(te,Yt,Wt,!1,null,"4791c81d",null)),ne=ee.exports,se="/usuarios",ae=[{path:"".concat(se),name:"users",component:Kt,meta:{title:"Usuários",description:"Lista de todos os usuários cadastrados no sistema.",requiresAuth:!0}},{path:"".concat(se,"/:id"),name:"users_show",component:ne,props:!0,meta:{title:"Usuário selecionado",description:"Exibe todos os dados do usuário selecionado.",requiresAuth:!0}},{path:"".concat(se,"/novo-usuario"),name:"user_create",component:ne,meta:{title:"Novo Usuário",description:"Preencha todos os dados para cadastrar um novo usuário.",requiresAuth:!0}}],oe=[].concat(Object(T["a"])(Dt),Object(T["a"])(Pt),Object(T["a"])(ae));i["a"].use(R["a"]);var re=new R["a"]({routes:oe}),ie=re,ce=function(t,e){var n=t.commit,s=t.dispatch;return new Promise((function(t,a){n(A),I.post("/login",e).then((function(e){var s=e.data.access_token,a=e.data.user;localStorage.setItem("aguaritmo.access_token",s),localStorage.setItem("aguaritmo.user",JSON.stringify(a)),n(E,{token:s,user:a}),n(A),n(k),t(e)})).catch((function(t){n(A),s("ActionCleanLocalStorage"),a(t)}))}))},ue=function(t){var e=t.commit,n=t.dispatch;return new Promise((function(t,s){I.post("/me").then((function(n){e(k,n.data.user),localStorage.setItem("aguaritmo.user",JSON.stringify(n.data.user)),t(n)})).catch((function(t){n("ActionLogout"),ie.push({name:"home"}),s(t)}))}))},le=function(t){var e=t.commit,n=t.dispatch;return new Promise((function(t,s){I.post("/logout").then((function(s){e(O,{}),n("ActionCleanLocalStorage"),ie.push({name:"home"}),t(s)})).catch((function(t){e(O,{}),n("ActionCleanLocalStorage"),s(t)}))}))},me=function(){localStorage.removeItem("aguaritmo.access_token"),localStorage.removeItem("aguaritmo.user")},de=function(t){return!!t.access_token},pe=function(t){return t.status},fe=function(t){return t.user||{}},he={state:x,actions:s,getters:a,mutations:j,namespace:!0},ve={status:!1},ge="REGISTER/REGISTER_REQUEST",be=Object($["a"])({},ge,(function(t){t.status=!t.status})),_e=function(t,e){var n=t.commit;return new Promise((function(t,s){n(ge);var a={type:e.type,terms:e.terms,name:e.user.name,email:e.user.email,phone:e.user.phone,password:e.user.password};I.post("/users",a).then((function(e){n(ge),t(e)})).catch((function(t){n(ge),s(t)}))}))},Ce=function(t){return t.status},ye={state:ve,actions:o,getters:r,mutations:be,namespace:!0},we={auth:he,users:ye};i["a"].use(S["a"]);var Se=new S["a"].Store({modules:we});i["a"].use(p.a),i["a"].use(m["a"]),i["a"].use(h.a),i["a"].config.productionTip=!1,i["a"].directive("scroll",{inserted:function(t,e){var n=function n(s){e.value(s,t)&&window.removeEventListener("scroll",n)};window.addEventListener("scroll",n)}}),new i["a"]({store:Se,router:ie,render:function(t){return t(w)}}).$mount("#app")},"571f":function(t,e,n){"use strict";var s=n("753a"),a=n.n(s);a.a},5998:function(t,e,n){},"6b4c":function(t,e,n){},"6c17":function(t,e,n){"use strict";var s=n("6b4c"),a=n.n(s);a.a},"753a":function(t,e,n){},7859:function(t,e,n){"use strict";var s=n("eb8a"),a=n.n(s);a.a},"89d0":function(t,e,n){"use strict";var s=n("e968"),a=n.n(s);a.a},a769:function(t,e,n){"use strict";var s=n("a88b"),a=n.n(s);a.a},a88b:function(t,e,n){},aab1:function(t,e,n){"use strict";var s=n("569a"),a=n.n(s);a.a},b422:function(t,e,n){"use strict";var s=n("370a"),a=n.n(s);a.a},b4b0:function(t,e,n){},b925:function(t,e,n){"use strict";var s=n("5998"),a=n.n(s);a.a},e968:function(t,e,n){},eb8a:function(t,e,n){},f5fa:function(t,e,n){"use strict";var s=n("b4b0"),a=n.n(s);a.a}});
//# sourceMappingURL=app.5f8593c4.js.map