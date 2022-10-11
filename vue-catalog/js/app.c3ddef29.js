(function(){"use strict";var e={523:function(e,t,o){o.d(t,{AS:function(){return a},Cf:function(){return i},Ou:function(){return n},o7:function(){return r},re:function(){return s}});const n={host:"",pathToGraphics:"",pathToAPI:""};"localhost"===window.location.hostname?(n.host="http://localhost:8080",n.pathToAPI="https://api-catalog",n.pathToGraphics="https://api-catalog/libs/_graphics(copy)"):(n.host="https://massaclub.com",n.pathToAPI="https://massaclub.com/api-catalog",n.pathToGraphics="https://massaclub.com/api-catalog/libs/_graphics(copy)"),n.pathToUploads=n.pathToAPI+"/multiupload/uploads",n.prevFolder=n.pathToUploads+"/190px/",n.prevFolder2=n.pathToUploads+"/40px/";const r=["en","uk"],a=49,i=14e3,s=15e3;n.pathToGraphics},4143:function(e,t,o){o.d(t,{Z:function(){return u}});var n=o(4870),r=o(65),a=o(6265),i=o.n(a),s=o(523),c=o(5041),l={en:{errNetwork:"English version of Notification<br>Нет подключения к серверу",incorrectResp:"English version of Notification<br>Ошибка. Сервер вернул некорректный ответ",text5_1:"English version of Notification<br>Ошибка. Ответ сервера: ",text5_2:"<br>Подробности в консоли",welcome:"English version of Notification<br>Добро пожаловать!<br>Вам открыт доступ к приложению",hiAgain:"English version of Notification<br>У вас есть доступ к приложению",bye:"English version of Notification<br>Вы вышли из приложения",text1:"English version of Notification<br>Доступ закрыт<br>Проверьте логин и пароль",someError:"English version of Notification<br>Ошибка. Подробности в консоли",incorrectToken:"English version of Notification<br>Alarm! Передан некорректный токен.<br>Доступ закрыт",emptyToken:"English version of Notification<br>Alarm! Передан пустой токен.<br>Доступ закрыт",loginPlease:"English version of Notification<br>Залогиньтесь",accTokenUpdated:"English version of Notification<br>Access Token обновлен<br>У вас есть доступ к приложению",fakeToken:"Ошибка безопастности<br>Похоже на подделку токена доступа<br>Залогиньтесь или обратитесь в поддержку"},uk:{errNetwork:"Нет подключения к серверу",incorrectResp:"Ошибка. Сервер вернул некорректный ответ",text5_1:"Ошибка. Ответ сервера: ",text5_2:"<br>Подробности в консоли",welcome:"Добро пожаловать!<br>Вам открыт доступ к приложению",hiAgain:"У вас есть доступ к приложению",bye:"Вы вышли из приложения",text1:"Доступ закрыт<br>Проверьте логин и пароль",someError:"Ошибка. Подробности в консоли",incorrectToken:"Alarm! Передан некорректный токен.<br>Доступ закрыт",emptyToken:"Alarm! Передан пустой токен.<br>Доступ закрыт",loginPlease:"Залогиньтесь",accTokenUpdated:"Access Token обновлен<br>У вас есть доступ к приложению",fakeToken:"Ошибка безопастности<br>Похоже на подделку токена доступа<br>Залогиньтесь или обратитесь в поддержку"}},d=o(2276);function u(){const e=(0,r.oR)(),{pushNotify:t}=(0,c.Z)(),{lang:o}=(0,d.Z)(),a=(0,n.iH)("user@gmail.com"),u=(0,n.iH)("888"),p=(0,n.iH)(!1);let g=localStorage.getItem("AccessToken");g&&(g=encodeURI(g));const f=(0,n.iH)(g);async function m(){p.value=!0;try{const n=await i().post(s.Ou.pathToAPI+"/access/login.php",JSON.stringify({email:a.value,password:u.value}),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});"approved"===n.data.status&&n.data.accessToken&&n.data.name?(localStorage.setItem("AccessToken",n.data.accessToken),localStorage.setItem("name",n.data.name),i().defaults.headers.common.Authorization="Bearer "+n.data.accessToken,t(l[o.value].welcome,"notifyWelcome",s.re),l[o.value],e.commit("SetIsAuth",!0)):t(l[o.value].incorrectResp,"notifyOrange")}catch(n){if("ERR_NETWORK"===n.code)return void t(l[o.value].errNetwork,"notifyOrange");switch(n.response.data.status){case"expired":b();break;case"denied":t(l[o.value].text1,"notifyOrange");break;default:t(l[o.value].someError,"notifyOrange"),console.log(n);break}}finally{p.value=!1}}async function h(){p.value=!0;try{const e=await i().post(s.Ou.pathToAPI+"/access/logout.php",JSON.stringify({message:"Привет сервер! С этим сообщением ты сможешь прочитать cookie"}),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});"ok"===e.data.status?(v(),t(l[o.value].bye,"notifyWelcome",s.re)):t(l[o.value].text5_1+e.data.error+l[o.value].text5_2,"notifyOrange")}catch(e){if("ERR_NETWORK"===e.code)return void t(l[o.value].errNetwork,"notifyOrange")}finally{p.value=!1}}function v(){delete i().defaults.headers.common.Authorization,e.commit("SetIsAuth",!1),localStorage.removeItem("AccessToken"),localStorage.removeItem("name")}async function y(){if(f.value){i().defaults.headers.common.Authorization="Bearer "+f.value,p.value=!0;try{const n=await i().post(s.Ou.pathToAPI+"/access/validate_token.php",{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});"allowed"===n.data.status?(t(l[o.value].hiAgain,"notifyWelcome",s.re),e.commit("SetIsAuth",!0)):t(l[o.value].text5_1+n.data.error+l[o.value].text5_2,"notifyOrange")}catch(n){if("ERR_NETWORK"===n.code)return void t(l[o.value].errNetwork,"notifyOrange");switch(n.response.data.status){case"expired":b();break;case"failed":t(l[o.value].incorrectToken,"notifyRed");break;case"denied":t(l[o.value].emptyToken,"notifyRed");break;default:t(l[o.value].someError,"notifyOrange"),console.log(n);break}}finally{p.value=!1,e.state.appIsStarting&&e.commit("SetAppIsStarting",!1)}}else e.state.appIsStarting&&e.commit("SetAppIsStarting",!1)}async function b(){p.value=!0;try{const n=await i().post(s.Ou.pathToAPI+"/access/refresh_token.php",JSON.stringify({message:"Привет сервер! С этим сообщением ты сможешь прочитать cookie"}),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});return"approved"===n.data.status&&n.data.accessToken?(t(l[o.value].accTokenUpdated,"notifyWelcome",s.re),e.commit("SetIsAuth",!0),localStorage.setItem("AccessToken",n.data.accessToken),i().defaults.headers.common.Authorization="Bearer "+n.data.accessToken,!0):void t(l[o.value].text5_1+n.data.error+l[o.value].text5_2,"notifyOrange")}catch(n){if("ERR_NETWORK"===n.code)return void t(l[o.value].errNetwork,"notifyOrange");switch(n.response.data.status){case"expired":return t(l[o.value].loginPlease,"notifyBlue"),void v();case"failed":return void t(l[o.value].incorrectToken,"notifyRed");case"denied":return t(l[o.value].loginPlease,"notifyBlue"),void v();case"locked":return t(l[o.value].fakeToken,"notifyBlue",s.re),void v();default:return t(l[o.value].someError,"notifyOrange"),void console.log(n)}}finally{p.value=!1}}return{email:a,password:u,login:m,logout:h,validateToken:y,tokenRefresh:b,isAuthLoading:p}}},2276:function(e,t,o){o.d(t,{Z:function(){return s}});var n=o(4870),r=o(3396),a=o(65),i=o(523);function s(){const e=(0,a.oR)(),t=(0,n.iH)(e.state.language);function o(){let t=localStorage.getItem("language");t&&(t=encodeURI(t)),i.o7.includes(t)||(t="uk"),e.commit("SetLanguage",t)}return(0,r.YP)((()=>e.state.language),(function(){t.value=e.state.language})),{checkUserLanguage:o,lang:t}}},5041:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(65),r=o(523);function a(){const e=(0,n.oR)();function t(t){e.commit("DelNotify",t)}function o(t="Default Notification Text",o="notifyBlue",n=r.Cf){let a=Date.now(),i={id:a,notifyText:t,class:o};e.commit("AddNotify",i),setTimeout((()=>{e.commit("DelNotify",a)}),n)}return{delNotify:t,pushNotify:o}}},6673:function(e,t,o){o.d(t,{Z:function(){return u}});var n=o(4870),r=o(65),a=o(6265),i=o.n(a),s=o(523),c=o(5041),l={en:{incorrectResp:"English version of Notification<br>Ошибка. Сервер вернул некорректный ответ",errNetwork:"English version of Notification<br>Нет подключения к серверу",noData:"English version of Notification<br>Нет данных",errRespData:"English version of Notification<br>Ошибка при получении данных от сервера",deleted:"English version of Notification<br>Удаление выполнено"},uk:{incorrectResp:"Ошибка. Сервер вернул некорректный ответ",errNetwork:"Нет подключения к серверу",noData:"Нет данных",errRespData:"English version of Notification<br>Ошибка при получении данных от сервера",deleted:"Удаление выполнено"}},d=o(2276);function u(){const e=(0,r.oR)(),{pushNotify:t}=(0,c.Z)(),{lang:o}=(0,d.Z)(),a=(0,n.iH)(),u=(0,n.iH)(12);async function p(){if(e.state.isAuth){e.commit("SetIsProdsLoading",!0);try{const n=await i().get(s.Ou.pathToAPI+"/products/",{params:{sort:e.state.sortSelected,page:e.state.page,limit:u.value,language:e.state.language}});if(n.data){if(n.data.records.length>0){e.commit("SetProducts",n.data.records);let t=Math.ceil(n.data.totalCount/u.value);e.commit("SetTotalPages",t)}}else t(l[o.value].incorrectResp,"notifyOrange")}catch(n){if("ERR_NETWORK"===n.code)return void t(l[o.value].errNetwork,"notifyOrange");switch(n.response.data.status){case"notfound":e.commit("SetProducts",[]),console.log("Нет данных");break;default:t("Ошибка при получении данных от сервера","notifyOrange"),console.log("e: ",n);break}}finally{e.commit("SetIsProdsLoading",!1)}}}async function g(n,r){if(e.state.isAuth&&e.state.language){e.commit("SetIsProdsLoading",!0),e.commit("SetUpdProdFreeze",!0),e.commit("ClearUpdProd");try{const a=await i().get(s.Ou.pathToAPI+"/products/",{params:{id:n,language:e.state.language}});a.data.records[0].id>0?(e.commit("SetUpdProd",[a.data.records[0].id,a.data.records[0].price,a.data.records[0].pictures,a.data.records[0].brand,a.data.records[0].model]),r&&await f()):t(l[o.value].incorrectResp,"notifyOrange")}catch(a){if("ERR_NETWORK"===a.code)return void t(l[o.value].errNetwork,"notifyOrange");switch(a.response.data.status){case"notfound":t(l[o.value].noData,"notifyOrange"),console.log("Нет данных");break;default:t(l[o.value].errRespData,"notifyOrange"),console.log("e: ",a);break}}finally{e.commit("SetIsProdsLoading",!1),e.commit("SetUpdProdFreeze",!1)}}}async function f(){if(e.state.isAuth&&e.state.updProd.id){switch(e.state.language){case s.o7[0]:a.value=s.o7[1];break;case s.o7[1]:a.value=s.o7[0];break;default:a.value=s.o7[1];break}try{const n=await i().get(s.Ou.pathToAPI+"/products/",{params:{id:e.state.updProd.id,language:a.value}});n.data.records[0].id>0?e.commit("SetUpdProdTranslation",[n.data.records[0].brand,n.data.records[0].model]):t(l[o.value].incorrectResp,"notifyOrange")}catch(n){if("ERR_NETWORK"===n.code)return void t(l[o.value].errNetwork,"notifyOrange");switch(n.response.data.status){case"notfound":break;default:console.log("error: ",n);break}}}}function m(n){const r=e.state.products.filter((e=>e.id!==n));e.commit("SetProducts",r),t(l[o.value].deleted,"notifyOrange")}function h(e){let t=e.replace(/[^.\d]+/g,"").replace(/^([^.]*\.)|\./g,"$1");return t}return{limit:u,getProducts:p,getUpdProd:g,deleteData:m,checkPrice:h}}},3067:function(e,t,o){var n=o(9242),r=o(3396);function a(e,t,o,n,a,i){const s=(0,r.up)("notify-list"),c=(0,r.up)("nav-bar"),l=(0,r.up)("router-view"),d=(0,r.up)("my-counter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c),(0,r.Wm)(l,{class:"container view"}),(0,r.Wm)(d)],64)}var i=o(7139);const s={class:"bg-dark"},c={class:"navbar navbar-dark justify-content-between container"},l={class:"nav nav-pills"},d={class:"nav-item"},u={class:"nav-item"},p={key:0,class:"nav-item"},g={class:"nav nav-pills"},f={class:"nav-item"},m=["disabled"],h=["src"],v=(0,r.Uk)(" English"),y={class:"nav-item"},b=["disabled"],w=["src"],k=(0,r.Uk)(" Украинский"),P={class:"nav nav-pills"},S={class:"nav-item"};function T(e,t,o,n,a,T){const A=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("nav",c,[(0,r._)("ul",l,[(0,r._)("li",d,[(0,r.Wm)(A,{to:"/",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.insert[n.lang].catalog),1)])),_:1})]),(0,r._)("li",u,[(0,r.Wm)(A,{to:"/add",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.insert[n.lang].addAuto),1)])),_:1})]),e.$store.state.isAuth?((0,r.wg)(),(0,r.iD)("li",p,[(0,r._)("div",{class:"nav-link",onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},(0,i.zw)(n.insert[n.lang].logout),1)])):(0,r.kq)("",!0)]),(0,r._)("ul",g,[(0,r._)("li",f,[(0,r._)("button",{onClick:t[1]||(t[1]=e=>this.$store.dispatch("SaveLanguage","en")),class:"btn3 mr-6",disabled:e.$store.state.isProdsLoading||e.$store.state.updProdFreeze},[(0,r._)("img",{src:n.define.pathToGraphics+"/flags/en.png",class:"mr-6"},null,8,h),v],8,m)]),(0,r._)("li",y,[(0,r._)("button",{onClick:t[2]||(t[2]=e=>this.$store.dispatch("SaveLanguage","uk")),class:"btn3",disabled:e.$store.state.isProdsLoading||e.$store.state.updProdFreeze},[(0,r._)("img",{src:n.define.pathToGraphics+"/flags/ua.png",class:"mr-6"},null,8,w),k],8,b)])]),(0,r._)("ul",P,[(0,r._)("li",S,[(0,r.Wm)(A,{to:"/about",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.insert[n.lang].about),1)])),_:1})])])])])}var A=o(4143),O={en:{catalog:"Catalog",addAuto:"+ Add Auto",logout:"Sign Out",about:"About App"},uk:{catalog:"Каталог",addAuto:"+ Добавить авто",logout:"Выйти",about:"О приложении"}},_=o(2276),N=o(523),I={setup(){const{logout:e}=(0,A.Z)(),{lang:t}=(0,_.Z)();return{logout:e,lang:t,insert:O,define:N.Ou}}},E=o(89);const D=(0,E.Z)(I,[["render",T]]);var L=D;const R=["innerHTML"],U=["onClick"],C=["src"];function x(e,t,o,a,s,c){return(0,r.wg)(),(0,r.j4)(n.W3,{name:"notify",tag:"div",class:"notifyArea"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.$store.state.notifyList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,i.C_)(["notifyItem",e.class])},[(0,r._)("div",{class:"notifyText",innerHTML:e.notifyText},null,8,R),(0,r._)("span",{class:"delNotifyBtn",onClick:t=>a.delNotify(e.id)},[(0,r._)("img",{src:a.define.pathToGraphics+"/delete4_14px.png",alt:""},null,8,C)],8,U)],2)))),128))])),_:1})}var Z=o(5041),z={setup(){const{delNotify:e}=(0,Z.Z)();return{define:N.Ou,delNotify:e}}};const B=(0,E.Z)(z,[["render",x]]);var $=B,j=o(6673),W=o(1577);const H=["src"];function F(e,t,o,n,a,i){return(0,r.wg)(),(0,r.iD)("img",{src:"https://massaclub.com/stat2/?ref="+a.referrer+"&current="+a.href,alt:""},null,8,H)}var M={data(){return{referrer:document.referrer,href:document.location.href}}};const K=(0,E.Z)(M,[["render",F]]);var q=K,Y={components:{NavBar:L,NotifyList:$,MyCounter:q},mixins:[W.Z],beforeCreate(){this.validateToken(),this.checkUserLanguage()},setup(){const{validateToken:e}=(0,A.Z)(),{checkUserLanguage:t}=(0,_.Z)(),{getProducts:o,findUpdProd:n}=(0,j.Z)();return{validateToken:e,checkUserLanguage:t,getProducts:o,findUpdProd:n}}};const G=(0,E.Z)(Y,[["render",a]]);var J=G,V=o(2483);const Q={key:0,class:"loader1"},X={key:1},ee={key:0},te={key:1,class:"pt-30"};function oe(e,t,o,n,a,s){const c=(0,r.up)("login-form"),l=(0,r.up)("prod-list");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h1",null,(0,i.zw)(n.insert[n.lang].header),1),e.$store.state.appIsStarting?((0,r.wg)(),(0,r.iD)("div",Q)):((0,r.wg)(),(0,r.iD)("div",X,[e.$store.state.isAuth?((0,r.wg)(),(0,r.iD)("div",te,[(0,r.Wm)(l,{insert:n.insert[n.lang].prodList},null,8,["insert"])])):((0,r.wg)(),(0,r.iD)("div",ee,[(0,r.Wm)(c)]))]))])}var ne=o(450);const re=(0,r._)("hr",{class:"hr-dashed mb-30"},null,-1),ae={key:0,class:"loader1 mb-14"},ie={key:1},se={key:0},ce={class:"row row-cols-xs-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6"},le=["onClick"],de={class:"card4"},ue={key:1,class:"mb-30"},pe=(0,r._)("hr",{class:"hr-dashed mt-30"},null,-1),ge={key:2,class:"page__wrapper mb-30"},fe=["onClick"];function me(e,t,o,a,s,c){const l=(0,r.up)("my-select"),d=(0,r.up)("Prod-Items");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Uk)((0,i.zw)(o.insert.sorting)+": ",1),(0,r.Wm)(l,{class:"ml-4",options:s.sortOptions,insert:o.insert.mySelect,onUpdateSelect:c.updateSelect},null,8,["options","insert","onUpdateSelect"]),re,e.$store.state.isProdsLoading?((0,r.wg)(),(0,r.iD)("div",ae)):((0,r.wg)(),(0,r.iD)("div",ie,[e.$store.getters.products?((0,r.wg)(),(0,r.iD)("div",se,[(0,r._)("div",ce,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.$store.state.products,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"col mb-20",onClick:(0,n.iM)((t=>c.selectProduct(e.id,e.price,e.pictures,e.brand,e.model)),["stop"])},[(0,r._)("div",de,[(0,r.Wm)(d,{prod:e,insert:o.insert.prodItems},null,8,["prod","insert"])])],8,le)))),128))])])):((0,r.wg)(),(0,r.iD)("div",ue,(0,i.zw)(o.insert.notFound),1))])),pe,e.$store.state.isProdsLoading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",ge,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.$store.state.totalPages,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t,onClick:e=>c.changePage(t),class:(0,i.C_)(["page",{"current-page":e.$store.state.page===t}])},(0,i.zw)(t),11,fe)))),128))]))],64)}const he={key:0},ve=["src"],ye=["src"],be={class:"mb-4px"};function we(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o.prod.pictures?((0,r.wg)(),(0,r.iD)("div",he,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.prod.pictures,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[0===t?((0,r.wg)(),(0,r.iD)("img",{key:0,src:n.define.prevFolder+e,alt:""},null,8,ve)):(0,r.kq)("",!0)])))),128))])):((0,r.wg)(),(0,r.iD)("img",{key:1,src:n.define.pathToGraphics+"/default2_190px.png",alt:""},null,8,ye)),(0,r._)("h5",be,(0,i.zw)(o.prod.brand),1),(0,r._)("h5",null,(0,i.zw)(o.prod.model),1),(0,r.Uk)(" "+(0,i.zw)(o.insert.price)+": "+(0,i.zw)(o.prod.price)+" USD ",1)],64)}var ke={props:{prod:{type:Object,required:!0},insert:{type:Object,required:!0}},setup(){return{define:N.Ou}}};const Pe=(0,E.Z)(ke,[["render",we]]);var Se=Pe;const Te=["value"],Ae={disabled:"",value:""},Oe=["value"];function _e(e,t,o,n,a,s){return(0,r.wg)(),(0,r.iD)("select",{value:e.$store.state.sortSelected,onChange:t[0]||(t[0]=(...e)=>s.changeOption&&s.changeOption(...e))},[(0,r._)("option",Ae,(0,i.zw)(o.insert.defaultOption),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.options,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.value,value:e.value},(0,i.zw)(e.name),9,Oe)))),128))],40,Te)}var Ne={props:{modelValue:{type:String},options:{type:Array,default:()=>[]},insert:{type:Object,required:!0}},methods:{changeOption(e){this.$emit("updateSelect",e.target.value)}}};const Ie=(0,E.Z)(Ne,[["render",_e]]);var Ee=Ie,De={components:{ProdItems:Se,MySelect:Ee},props:{insert:{type:Object,required:!0}},data(){return{idToDelete:0,sortOptions:[{value:"brand",name:this.insert.byBrand},{value:"model",name:this.insert.byModel},{value:"price",name:this.insert.byPrice}]}},methods:{selectProduct(e,t,o,n,r){this.$store.commit("SetUpdProd",[e,t,o,n,r]),this.$store.commit("SetUpdProdTranslation",["",""]),this.$router.push("/cars/"+e)},changePage(e){this.$store.commit("SetPage",e),this.getProducts()},updateSelect(e){this.$store.commit("SetSortSelected",e),this.getProducts()}},watch:{"insert.sorting":{handler(){this.sortOptions=[{value:"brand",name:this.insert.byBrand},{value:"model",name:this.insert.byModel},{value:"price",name:this.insert.byPrice}]}}},setup(){const{tokenRefresh:e}=(0,A.Z)(),{pushNotify:t}=(0,Z.Z)(),{page:o,limit:n,getProducts:r}=(0,j.Z)();return{define:N.Ou,tokenRefresh:e,pushNotify:t,page:o,limit:n,getProducts:r}}};const Le=(0,E.Z)(De,[["render",me]]);var Re=Le,Ue={en:{header:"Catalog",prodList:{sorting:"Sort options",mySelect:{defaultOption:"Select from list"},byBrand:"By Brand",byModel:"By Model",byPrice:"By Price",prodItems:{price:"Price"},notFound:"Empty. There is no car with a description in English."}},uk:{header:"Каталог",prodList:{sorting:"Сортировка",mySelect:{defaultOption:"Выберите из списка"},byBrand:"По марке",byModel:"По модели",byPrice:"По цене",prodItems:{price:"Цена"},notFound:"Пусто. Нет авто с описанием на украинском."}}},Ce={components:{LoginForm:ne.Z,ProdList:Re},setup(){const{lang:e}=(0,_.Z)();return{define:N.Ou,lang:e,insert:Ue}}};const xe=(0,E.Z)(Ce,[["render",oe]]);var Ze=xe;const ze=[{path:"/",component:Ze},{path:"/cars/:id",component:()=>o.e(528).then(o.bind(o,9528))},{path:"/edit/:id",component:()=>Promise.all([o.e(297),o.e(373)]).then(o.bind(o,9589))},{path:"/add",component:()=>Promise.all([o.e(297),o.e(747)]).then(o.bind(o,6267))},{path:"/about",component:()=>o.e(976).then(o.bind(o,3229))},{path:"/:catchAll(.*)*",component:()=>o.e(275).then(o.bind(o,3275))}],Be=(0,V.p7)({history:(0,V.PO)("/vue-catalog/"),base:"/vue-catalog/",routes:ze});var $e=Be,je=o(65),We=(0,je.MT)({state(){return{appIsStarting:!0,isAuth:!1,language:"",products:[],isProdsLoading:!1,sortSelected:"",page:1,totalPages:0,notifyList:[],newProd:{id:0,price:1,pictures:[],brand:"",model:"",brand2:"",model2:""},updProd:{id:0,price:1,pictures:[],brand:"",model:"",brand2:"",model2:""},updProdFreeze:!1}},getters:{language(e){return e.language},products(e){if(e.products.length)return e.products},getPicsInDB(e){return e.updProd.pictures||(e.updProd.pictures=[]),e.updProd.pictures}},mutations:{SetAppIsStarting(e,t){e.appIsStarting=t},SetIsAuth(e,t){e.isAuth=t},SetLanguage(e,t){e.language=t},SetProducts(e,t){e.products=t},SetIsProdsLoading(e,t){e.isProdsLoading=t},SetTotalPages(e,t){e.totalPages=t},SetPage(e,t){e.page=t},SetSortSelected(e,t){e.sortSelected=t},SetUpdId(e,t){e.updProd.id=t},SetUpdProd(e,[t,o,n,r,a]){e.updProd.id=t,e.updProd.price=o,e.updProd.pictures=n,e.updProd.brand=r,e.updProd.model=a},SetUpdProdFreeze(e,t){e.updProdFreeze=t},SetUpdProdTranslation(e,[t,o]){e.updProd.brand2=t,e.updProd.model2=o},UpdatePicsInDB(e,t){e.updProd.pictures=t},AddToPicsInDB(e,t){e.updProd.pictures=[...e.pictures,...t]},ClearUpdProd(e){e.updProd.id=0,e.updProd.price=1,e.updProd.pictures=[],e.updProd.brand="",e.updProd.model="",e.updProd.brand2="",e.updProd.model2=""},ClearNewProd(e){e.newProd.price=1,e.newProd.brand="",e.newProd.model="",e.newProd.brand2="",e.newProd.model2=""},DelNotify(e,t){e.notifyList=e.notifyList.filter((e=>e.id!==t))},AddNotify(e,t){e.notifyList=[t,...e.notifyList]},SetNewId(e,t){e.newProd.id=t},SetNewPictures(e,t){e.newProd.pictures=t},SetNewPrice(e,t){e.newProd.price=t},SetNewBrand(e,t){e.newProd.brand=t.target.value},SetNewModel(e,t){e.newProd.model=t.target.value},SetUpdBrand(e,t){e.updProd.brand=t.target.value},SetUpdModel(e,t){e.updProd.model=t.target.value},SetUpdPrice(e,t){e.updProd.price=t}},actions:{SaveLanguage(e,t){localStorage.setItem("language",t),e.commit("SetLanguage",t)}}});(0,n.ri)(J).use(We).use($e).mount("#app")},1577:function(e,t){t["Z"]={watch:{"$store.state.language":function(){this.$store.commit("SetPage",1),this.getProducts()},"$store.state.isAuth":function(){this.getProducts()}}}},450:function(e,t,o){o.d(t,{Z:function(){return k}});var n=o(3396),r=o(7139),a=o(9242);const i={class:"mb-3"},s={for:"exampleInputEmail1",class:"form-label"},c={class:"mb-3"},l={for:"exampleInputPassword1",class:"form-label"},d={class:"d-flex align-items-center"},u={type:"submit",class:"btn btn-primary mr-15"},p={key:0,class:"loader1"};function g(e,t,o,g,f,m){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("p",null,(0,r.zw)(g.insert[g.lang].loginPlease),1),(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>g.login&&g.login(...e)),["prevent"])),class:"loginForm"},[(0,n._)("div",i,[(0,n._)("label",s,(0,r.zw)(g.insert[g.lang].login),1),(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>g.email=e),class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:""},null,512),[[a.nr,g.email]])]),(0,n._)("div",c,[(0,n._)("label",l,(0,r.zw)(g.insert[g.lang].password),1),(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>g.password=e),class:"form-control",id:"exampleInputPassword1",required:""},null,512),[[a.nr,g.password]])]),(0,n._)("div",d,[(0,n._)("button",u,(0,r.zw)(g.insert[g.lang].enterButton),1),g.isAuthLoading?((0,n.wg)(),(0,n.iD)("div",p)):(0,n.kq)("",!0)])],32)],64)}var f=o(4143),m={en:{loginPlease:"Access is denied. Sign In, please",login:"Login (email)",password:"Password",enterButton:"Sign In"},uk:{loginPlease:"Доступ ограничен. Авторизуйтесь.",login:"Логин (email)",password:"Пароль",enterButton:"Войти"}},h=o(2276),v=o(523),y={setup(){const{email:e,password:t,login:o,isAuthLoading:n}=(0,f.Z)(),{lang:r}=(0,h.Z)();return{email:e,password:t,login:o,isAuthLoading:n,lang:r,insert:m,define:v.Ou}}},b=o(89);const w=(0,b.Z)(y,[["render",g]]);var k=w}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{275:"bc9da541",297:"fcf437fd",373:"fa24a82c",528:"5dfbb12b",747:"19611111",976:"e57ba33a"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{373:"1dce86a8",528:"5cd818ec",747:"1dce86a8"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-catalog:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var p=function(t,o){s.onerror=s.onload=null,clearTimeout(g);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/vue-catalog/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)}))},r={143:0};o.f.miniCss=function(e,t){var o={373:1,528:1,747:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,c=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var d=c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkvue_catalog"]=self["webpackChunkvue_catalog"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3067)}));n=o.O(n)})();
//# sourceMappingURL=app.c3ddef29.js.map