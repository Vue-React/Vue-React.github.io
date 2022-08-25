(function(){"use strict";var t={523:function(t,e,n){n.d(e,{Cf:function(){return a},Ou:function(){return o},re:function(){return i}});const o={host:"",pathToGraphics:"",pathToAPI:""};"localhost"===location.hostname?(o.host="http://localhost:8080",o.pathToAPI="https://jwt/api",o.pathToGraphics="https://jwt/_graphics(copy)"):(o.host="https://massaclub.com",o.pathToAPI="https://massaclub.com/jwt/api",o.pathToGraphics="https://massaclub.com/jwt/_graphics(copy)");o.pathToAPI,o.pathToAPI;const a=14e3,i=15e3;o.pathToGraphics},4601:function(t,e,n){n.d(e,{Z:function(){return u}});var o=n(4870),a=n(65),i=n(2483),r=n(6265),s=n.n(r),l=n(523),c=n(5041);function u(){const t=(0,a.oR)(),e=(0,i.tv)(),{pushNotify:n}=(0,c.Z)(),r=(0,o.iH)("vasya2@coder.com"),u=(0,o.iH)("888"),f=(0,o.iH)(localStorage.getItem("accessToken"));async function d(){try{const o=await s().post(l.Ou.pathToAPI+"/login.php",JSON.stringify({email:r.value,password:u.value}),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});console.log("response: ",o),console.log("response.data: ",o.data),console.log("-----"),"approved"===o.data.status&&o.data.accessToken&&o.data.name?(localStorage.setItem("accessToken",o.data.accessToken),localStorage.setItem("name",o.data.name),s().defaults.headers.common.Authorization="Bearer "+o.data.accessToken,n("Добро пожаловать!<br>Вам открыт доступ к приложению","notifyWelcome",l.re),t.commit("SetIsAuth",!0),e.push("/")):n("Ошибка. Сервер вернул некорректный ответ","notifyOrange")}catch(o){switch(console.log("e: ",o),o.response.data.status){case"expired":n("Токен просрочен. Сделать Refresh","notifyOrange"),h();break;case"denied":n("Доступ закрыт<br>Проверьте логин и пароль","notifyOrange");break;default:n("Ошибка. Подробности в консоли","notifyOrange"),console.log(o);break}}}function p(){t.commit("SetIsAuth",!1),delete s().defaults.headers.common.Authorization,localStorage.removeItem("AccessToken"),localStorage.removeItem("name"),n("Вы вышли из приложения","notifyWelcome",l.re)}async function m(){if(f.value){s().defaults.headers.common.Authorization="Bearer "+f.value;try{const e=await s().post(l.Ou.pathToAPI+"/validate_token.php",{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});console.log("response: ",e),console.log("response.data: ",e.data),console.log("-----"),"allowed"===e.data.status?(n("У вас есть доступ к приложению","notifyWelcome",l.re),t.commit("SetIsAuth",!0)):(n("Ошибка. Ответ сервера: "+e.data.error+"<br>Подробности в консоли","notifyOrange"),console.log(e))}catch(e){switch(console.log("e: ",e),e.response.data.status){case"expired":n("Токен просрочен. Сделать Refresh","notifyOrange"),h();break;case"failed":n("Alarm! Передан некорректный токен.<br>Доступ закрыт","notifyRed");break;case"denied":n("Alarm! Передан пустой токен.<br>Доступ закрыт","notifyRed");break;default:n("Ошибка. Подробности в консоли","notifyOrange"),console.log(e);break}}}}async function h(){console.log("\ntokenRefresh!\n-------------");try{const t=await s().post(l.Ou.pathToAPI+"/refresh_token.php",{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});console.log("response: ",t),console.log("response.data: ",t.data),console.log("-----")}catch(t){switch(console.log("e: ",t),t.response.data.status){case"expired":n("Токен просрочен. Сделать Refresh","notifyOrange");break;case"failed":n("Alarm! Передан некорректный токен.<br>Доступ закрыт","notifyRed");break;case"denied":n("Alarm! Передан пустой токен.<br>Доступ закрыт","notifyRed");break;default:n("Ошибка. Подробности в консоли","notifyOrange"),console.log(t);break}}}return{email:r,password:u,login:d,logout:p,validateToken:m}}},5041:function(t,e,n){n.d(e,{Z:function(){return i}});var o=n(65),a=n(523);function i(){const t=(0,o.oR)();function e(e){t.commit("DelNotify",e)}function n(e="Default Notification Text",n="notifyBlue",o=a.Cf){let i=Date.now(),r={id:i,notifyText:e,class:n};t.commit("AddNotify",r),setTimeout((()=>{t.commit("DelNotify",i)}),o)}return{delNotify:e,pushNotify:n}}},991:function(t,e,n){var o=n(9242),a=n(3396);function i(t,e,n,o,i,r){const s=(0,a.up)("NotifyList"),l=(0,a.up)("nav-bar"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(l),(0,a.Wm)(c,{class:"container view"})],64)}const r={class:"bg-dark"},s={class:"navbar navbar-dark justify-content-between container"},l={class:"nav nav-pills"},c={class:"nav-item"},u=(0,a.Uk)("Каталог"),f={class:"nav-item"},d=(0,a.Uk)("+ Добавить авто"),p={key:0},m={class:"nav-item"},h=(0,a.Uk)("Войти"),v={key:1},g={class:"nav-item"},y={class:"nav nav-pills"},b={class:"nav-item"},k=(0,a.Uk)("О сайте");function w(t,e,n,o,i,w){const T=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("nav",s,[(0,a._)("ul",l,[(0,a._)("li",c,[(0,a.Wm)(T,{to:"/",class:"nav-link"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("li",f,[(0,a.Wm)(T,{to:"/add",class:"nav-link"},{default:(0,a.w5)((()=>[d])),_:1})]),t.$store.state.isAuth?((0,a.wg)(),(0,a.iD)("span",v,[(0,a._)("li",g,[(0,a._)("div",{class:"nav-link",onClick:e[0]||(e[0]=(...t)=>o.logout&&o.logout(...t))},"Выйти")])])):((0,a.wg)(),(0,a.iD)("span",p,[(0,a._)("li",m,[(0,a.Wm)(T,{to:"/login",class:"nav-link"},{default:(0,a.w5)((()=>[h])),_:1})])]))]),(0,a._)("ul",y,[(0,a._)("li",b,[(0,a.Wm)(T,{to:"/about",class:"nav-link"},{default:(0,a.w5)((()=>[k])),_:1})])])])])}var T=n(4601),_={methods:{},setup(){const{logout:t}=(0,T.Z)();return{logout:t}}},A=n(89);const O=(0,A.Z)(_,[["render",w]]);var j=O,N=n(7139);const I=["innerHTML"],C=["onClick"],P=["src"];function x(t,e,n,i,r,s){return(0,a.wg)(),(0,a.j4)(o.W3,{name:"notify",tag:"div",className:"notifyArea"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.$store.state.notifyList,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,N.C_)(["notifyItem",t.class])},[(0,a._)("div",{className:"notifyText",innerHTML:t.notifyText},null,8,I),(0,a._)("span",{className:"delNotifyBtn",onClick:e=>i.delNotify(t.id)},[(0,a._)("img",{src:r.define.pathToGraphics+"/delete4_14px.png",alt:""},null,8,P)],8,C)],2)))),128))])),_:1})}var S=n(523),D=n(5041),L={data(){return{define:S.Ou}},setup(){const{delNotify:t}=(0,D.Z)();return{delNotify:t}}};const Z=(0,A.Z)(L,[["render",x]]);var W=Z,R={components:{NavBar:j,NotifyList:W},created(){this.validateToken()},setup(){const{validateToken:t}=(0,T.Z)();return{validateToken:t}}};const H=(0,A.Z)(R,[["render",i]]);var E=H,U=n(2483);const M={class:"home"},B=(0,a._)("h1",null,"Каталог",-1),G={key:0},$={key:1},F=(0,a.Uk)(" Карточки с автомобилями, пагинацию + сортировку по цене и названию."),q=(0,a._)("br",null,null,-1),z=(0,a.Uk)(" Карточки содержит марку, модель, изображение, цену "),Y=[F,q,z];function V(t,e,n,o,i,r){const s=(0,a.up)("login-form");return(0,a.wg)(),(0,a.iD)("div",M,[B,t.$store.state.isAuth?((0,a.wg)(),(0,a.iD)("div",$,Y)):((0,a.wg)(),(0,a.iD)("div",G,[(0,a.Wm)(s)]))])}var J=n(815),K={components:{LoginForm:J.Z},methods:{async login(){await this.$store.commit("Login"),this.$router.push("/")}}};const Q=(0,A.Z)(K,[["render",V]]);var X=Q;const tt=[{path:"/",component:X},{path:"/:id",component:()=>n.e(36).then(n.bind(n,4036))},{path:"/add",component:()=>n.e(767).then(n.bind(n,1767))},{path:"/login",component:()=>n.e(281).then(n.bind(n,6281))},{path:"/about",component:()=>n.e(823).then(n.bind(n,5823))}],et=(0,U.p7)({history:(0,U.PO)("/vue-auto/"),base:"/vue-auto/",routes:tt});var nt=et,ot=n(65),at=(0,ot.MT)({state(){return{isAuth:!1,notifyList:[]}},mutations:{SetIsAuth(t,e){t.isAuth=e},DelNotify(t,e){t.notifyList=t.notifyList.filter((t=>t.id!==e))},AddNotify(t,e){t.notifyList=[e,...t.notifyList]}}});(0,o.ri)(E).use(at).use(nt).mount("#app")},815:function(t,e,n){n.d(e,{Z:function(){return g}});var o=n(3396),a=n(9242);const i=(0,o._)("p",null,"Доступ ограничен. Авторизуйтесь.",-1),r={class:"loginForm"},s={class:"mb-3"},l=(0,o._)("label",{for:"exampleInputEmail1",class:"form-label"},"Логин (email)",-1),c={class:"mb-3"},u=(0,o._)("label",{for:"exampleInputPassword1",class:"form-label"},"Пароль",-1),f=(0,o._)("button",{type:"submit",class:"btn btn-primary"},"Войти",-1);function d(t,e,n,d,p,m){return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("div",r,[(0,o._)("form",{onSubmit:e[2]||(e[2]=(0,a.iM)(((...t)=>d.login&&d.login(...t)),["prevent"]))},[(0,o._)("div",s,[l,(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=t=>d.email=t),class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:""},null,512),[[a.nr,d.email]])]),(0,o._)("div",c,[u,(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>d.password=t),class:"form-control",id:"exampleInputPassword1",required:""},null,512),[[a.nr,d.password]])]),f],32)])],64)}var p=n(4601),m={data(){return{}},methods:{},setup(){const{email:t,password:e,login:n}=(0,p.Z)();return{email:t,password:e,login:n}}},h=n(89);const v=(0,h.Z)(m,[["render",d]]);var g=v}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{36:"6a0201f9",281:"5e05132c",767:"88591911",823:"7cfb8f58"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-auto:";n.l=function(o,a,i,r){if(t[o])t[o].push(a);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[a];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var a=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue-auto/"}(),function(){var t={143:0};n.f.j=function(e,o){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=t[e]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(e),s=new Error,l=function(o){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(e&&e(o);c<r.length;c++)i=r[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkvue_auto"]=self["webpackChunkvue_auto"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(991)}));o=n.O(o)})();
//# sourceMappingURL=app.aa502bea.js.map