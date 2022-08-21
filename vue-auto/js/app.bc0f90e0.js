(function(){"use strict";var t={5991:function(t,n,o){o.d(n,{Z:function(){return u}});var e=o(4870),a=o(65),r=o(2483),i=o(6265),s=o.n(i);const l={host:"",pathToGraphics:"",pathToAPI:""};"localhost"===location.hostname?(l.host="http://localhost:8080",l.pathToAPI="http://jwt/api",l.pathToGraphics="http://127.0.0.1/react/react-cms/_graphics"):(l.host="https://massaclub.com",l.pathToAPI="https://massaclub.com/jwt/api",l.pathToGraphics="https://massaclub.com/jwt/_graphics");l.pathToAPI,l.pathToAPI,l.pathToGraphics;function u(){const t=(0,e.iH)("vasya2@coder.com"),n=(0,e.iH)("888"),o=(0,a.oR)(),i=(0,r.tv)();async function u(){try{const e=await s().post(l.pathToAPI+"/login.php",JSON.stringify({email:t.value,password:n.value}));console.log("response: ",e),console.log("response.status: ",e.status),o.commit("login"),i.push("/")}catch(e){switch(e.response.status){case 0:console.log("Нет соединения с сервером"),console.log("Сделать пуш уведомление");break;case 401:console.log("Логин или пароль указаны неверно / "+e.response.data.message),console.log("Сделать пуш уведомление");break;default:console.log(e),console.log("Сделать пуш уведомление");break}}}function c(){console.log("logOut"),o.commit("logout"),localStorage.removeItem("AccessToken")}return{email:t,password:n,login:u,logout:c,define:l}}},9551:function(t,n,o){var e=o(9242),a=o(3396);function r(t,n,o,e,r,i){const s=(0,a.up)("nav-bar"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(l,{class:"container view"})],64)}const i={class:"bg-dark"},s={class:"navbar navbar-dark justify-content-between container"},l={class:"nav nav-pills"},u={class:"nav-item"},c=(0,a.Uk)("Каталог"),p={class:"nav-item"},f=(0,a.Uk)("+ Добавить авто"),d={key:0},m={class:"nav-item"},v=(0,a.Uk)("Войти"),h={key:1},g={class:"nav-item"},b={class:"nav nav-pills"},w={class:"nav-item"},k=(0,a.Uk)("О сайте");function y(t,n,o,e,r,y){const _=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("nav",s,[(0,a._)("ul",l,[(0,a._)("li",u,[(0,a.Wm)(_,{to:"/",class:"nav-link"},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a._)("li",p,[(0,a.Wm)(_,{to:"/add",class:"nav-link"},{default:(0,a.w5)((()=>[f])),_:1})]),t.$store.state.isAuth?((0,a.wg)(),(0,a.iD)("span",h,[(0,a._)("li",g,[(0,a._)("div",{class:"nav-link",onClick:n[0]||(n[0]=(...t)=>e.logout&&e.logout(...t))},"Выйти")])])):((0,a.wg)(),(0,a.iD)("span",d,[(0,a._)("li",m,[(0,a.Wm)(_,{to:"/login",class:"nav-link"},{default:(0,a.w5)((()=>[v])),_:1})])]))]),(0,a._)("ul",b,[(0,a._)("li",w,[(0,a.Wm)(_,{to:"/about",class:"nav-link"},{default:(0,a.w5)((()=>[k])),_:1})])])])])}var _=o(5991),T={methods:{},setup(){const{logout:t}=(0,_.Z)();return{logout:t}}},O=o(89);const j=(0,O.Z)(T,[["render",y]]);var A=j,P={components:{NavBar:A}};const I=(0,O.Z)(P,[["render",r]]);var Z=I,x=o(2483);const C={class:"home"},D=(0,a._)("h1",null,"Каталог",-1),E={key:0},S={key:1},U=(0,a.Uk)(" Карточки с автомобилями, пагинацию + сортировку по цене и названию."),W=(0,a._)("br",null,null,-1),L=(0,a.Uk)(" Карточки содержит марку, модель, изображение, цену "),H=[U,W,L];function M(t,n,o,e,r,i){const s=(0,a.up)("login-form");return(0,a.wg)(),(0,a.iD)("div",C,[D,t.$store.state.isAuth?((0,a.wg)(),(0,a.iD)("div",S,H)):((0,a.wg)(),(0,a.iD)("div",E,[(0,a.Wm)(s)]))])}var N=o(7282),F={components:{LoginForm:N.Z},methods:{async login(){await this.$store.commit("login"),this.$router.push("/")}}};const G=(0,O.Z)(F,[["render",M]]);var $=G;const q=[{path:"/",component:$},{path:"/:id",component:()=>o.e(36).then(o.bind(o,4036))},{path:"/add",component:()=>o.e(21).then(o.bind(o,9021))},{path:"/login",component:()=>o.e(232).then(o.bind(o,4232))},{path:"/about",component:()=>o.e(879).then(o.bind(o,8879))}],B=(0,x.p7)({history:(0,x.PO)("/vue-auto/"),base:"/vue-auto/",routes:q});var V=B,Y=o(65),J=(0,Y.MT)({state(){return{isAuth:!1,storeLikes:4}},getters:{},mutations:{login(t){t.isAuth=!0},logout(t){t.isAuth=!1},increment(t){t.storeLikes+=1}},actions:{},modules:{}});(0,e.ri)(Z).use(J).use(V).mount("#app")},7282:function(t,n,o){o.d(n,{Z:function(){return b}});var e=o(3396),a=o(9242);const r=(0,e._)("p",null,"Доступ ограничен. Авторизуйтесь.",-1),i={class:"loginForm"},s={class:"mb-3"},l=(0,e._)("label",{for:"exampleInputEmail1",class:"form-label"},"Логин (email)",-1),u={class:"mb-3"},c=(0,e._)("label",{for:"exampleInputPassword1",class:"form-label"},"Пароль",-1),p=(0,e._)("button",{type:"submit",class:"btn btn-primary"},"Войти",-1),f=(0,e._)("br",null,null,-1);function d(t,n,o,d,m,v){return(0,e.wg)(),(0,e.iD)(e.HY,null,[r,(0,e._)("div",i,[(0,e._)("form",{onSubmit:n[2]||(n[2]=(0,a.iM)(((...t)=>d.login&&d.login(...t)),["prevent"]))},[(0,e._)("div",s,[l,(0,e.wy)((0,e._)("input",{type:"email","onUpdate:modelValue":n[0]||(n[0]=t=>d.email=t),class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:""},null,512),[[a.nr,d.email]])]),(0,e._)("div",u,[c,(0,e.wy)((0,e._)("input",{type:"password","onUpdate:modelValue":n[1]||(n[1]=t=>d.password=t),class:"form-control",id:"exampleInputPassword1",required:""},null,512),[[a.nr,d.password]])]),p],32),(0,e._)("button",{onClick:n[3]||(n[3]=(...t)=>d.login&&d.login(...t))},"Login"),f])],64)}var m=o(5991),v={data(){return{}},methods:{},setup(){const{email:t,password:n,login:o,define:e}=(0,m.Z)();return{email:t,password:n,login:o,define:e}}},h=o(89);const g=(0,h.Z)(v,[["render",d]]);var b=g}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(n,e,a,r){if(!e){var i=1/0;for(c=0;c<t.length;c++){e=t[c][0],a=t[c][1],r=t[c][2];for(var s=!0,l=0;l<e.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[e,a,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(n,e){return o.f[e](t,n),n}),[]))}}(),function(){o.u=function(t){return"js/"+t+"."+{21:"cd0067f6",36:"afe8098f",232:"2b40f931",879:"c948d14e"}[t]+".js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="vue-auto:";o.l=function(e,a,r,i){if(t[e])t[e].push(a);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+r){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",n+r),s.src=e),t[e]=[a];var f=function(n,o){s.onerror=s.onload=null,clearTimeout(d);var a=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(o)})),n)return n(o)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/vue-auto/"}(),function(){var t={143:0};o.f.j=function(n,e){var a=o.o(t,n)?t[n]:void 0;if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(o,e){a=t[n]=[o,e]}));e.push(a[2]=r);var i=o.p+o.u(n),s=new Error,l=function(e){if(o.o(t,n)&&(a=t[n],0!==a&&(t[n]=void 0),a)){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};o.l(i,l,"chunk-"+n,n)}},o.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,r,i=e[0],s=e[1],l=e[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var c=l(o)}for(n&&n(e);u<i.length;u++)r=i[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},e=self["webpackChunkvue_auto"]=self["webpackChunkvue_auto"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(9551)}));e=o.O(e)})();
//# sourceMappingURL=app.bc0f90e0.js.map