"use strict";(self["webpackChunkvue_catalog"]=self["webpackChunkvue_catalog"]||[]).push([[54],{3414:function(e,t,o){o.r(t),o.d(t,{default:function(){return D}});var r=o(3396),l=o(7139);const s={key:0,class:"loader1"},n={key:1},i={key:0},a={key:1};function d(e,t,o,d,c,u){const p=(0,r.up)("login-form"),h=(0,r.up)("form-add");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h1",null,(0,l.zw)(d.insert[d.lang].header),1),e.$store.state.appIsStarting?((0,r.wg)(),(0,r.iD)("div",s)):((0,r.wg)(),(0,r.iD)("div",n,[e.$store.state.isAuth?((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(h,{insert:d.insert[d.lang]},null,8,["insert"])])):((0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(p)]))]))])}var c=o(5950),u=o(9242);const p={class:"form-group mb-10"},h=["value","placeholder"],m={class:"form-group mb-10"},g=["value","placeholder"],b={class:"form-group mb-20"},f=["value"],w=(0,r._)("hr",{class:"w540 hr-dashed"},null,-1),k={class:"form-group mb-10"},P=["placeholder"],v={class:"form-group mb-10"},_=["placeholder"],$=(0,r._)("br",null,null,-1);function y(e,t,o,s,n,i){const a=(0,r.up)("multi-upload");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("form",{onSubmit:t[6]||(t[6]=(0,u.iM)((()=>{}),["prevent"]))},[(0,r.Uk)((0,l.zw)(o.insert.brand.label)+": ",1),(0,r._)("div",p,[(0,r._)("input",{class:(0,l.C_)(["form-control w540",{notfilled:n.isFilled1}]),value:e.$store.state.newProd.brand,onInput:t[0]||(t[0]=(...e)=>i.inputBrand&&i.inputBrand(...e)),placeholder:o.insert.brand.placeholder},null,42,h)]),(0,r.Uk)((0,l.zw)(o.insert.model.label)+": ",1),(0,r._)("div",m,[(0,r._)("input",{class:(0,l.C_)(["form-control w540",{notfilled:n.isFilled2}]),value:e.$store.state.newProd.model,onInput:t[1]||(t[1]=(...e)=>i.inputModel&&i.inputModel(...e)),placeholder:o.insert.model.placeholder},null,42,g)]),(0,r.Uk)((0,l.zw)(o.insert.price)+": ",1),(0,r._)("div",b,[(0,r._)("input",{class:"form-control w100 text-center inline-block",value:e.$store.state.newProd.price,onInput:t[2]||(t[2]=(...e)=>i.inputPrice&&i.inputPrice(...e)),placeholder:""},null,40,f)]),(0,r.Wm)(a,{ref:"uplModule",uploadButton:o.insert.uploadButton,uploadedFiles:o.insert.uploadedFiles},null,8,["uploadButton","uploadedFiles"]),w,(0,r._)("h5",null,(0,l.zw)(o.insert.translationHeader)+":",1),(0,r.Uk)(" "+(0,l.zw)(o.insert.brand2.label)+": ",1),(0,r._)("div",k,[(0,r.wy)((0,r._)("input",{class:(0,l.C_)(["form-control w540"]),"onUpdate:modelValue":t[3]||(t[3]=t=>e.$store.state.newProd.brand2=t),placeholder:o.insert.brand2.placeholder},null,8,P),[[u.nr,e.$store.state.newProd.brand2]])]),(0,r.Uk)((0,l.zw)(o.insert.model2.label)+": ",1),(0,r._)("div",v,[(0,r.wy)((0,r._)("input",{class:(0,l.C_)(["form-control w540 mb-30"]),"onUpdate:modelValue":t[4]||(t[4]=t=>e.$store.state.newProd.model2=t),placeholder:o.insert.model2.placeholder},null,8,_),[[u.nr,e.$store.state.newProd.model2]])]),(0,r._)("button",{onClick:t[5]||(t[5]=(...e)=>i.checkForm&&i.checkForm(...e)),class:"btn2 greenBtn"},(0,l.zw)(o.insert.addButton),1)],32),$],64)}var F=o(8144),N=o(523),B=o(4143),A=o(5041),U=o(6265),x=o.n(U),E=o(6673),M={en:{errNetwork:"English version of Notification<br>Нет подключения к серверу",text1:"English version of Notification<br>Автомобиль успешно добавлен",text5_1:"English version of Notification<br>Ошибка. Ответ сервера: ",text5_2:"<br>Подробности в консоли"},uk:{errNetwork:"Нет подключения к серверу",text1:"Автомобиль успешно добавлен",text5_1:"Ошибка. Ответ сервера: ",text5_2:"<br>Подробности в консоли"}},C=o(2276),R={components:{MultiUpload:F.Z},props:{insert:{type:Object,required:!0}},data(){return{name:"FormAdd",isFilled1:!1,isFilled2:!1}},methods:{inputPrice(e){this.$store.commit("SetNewPrice",this.checkPrice(e.target.value))},inputBrand(e){this.$store.commit("SetNewBrand",e),0!==this.$store.state.newProd.brand.length?this.isFilled1=!1:this.isFilled1=!0},inputModel(e){this.$store.commit("SetNewModel",e),0!==this.$store.state.newProd.model.length?this.isFilled2=!1:this.isFilled2=!0},checkForm(){0===this.$store.state.newProd.brand.length&&(this.isFilled1=!0),0===this.$store.state.newProd.model.length&&(this.isFilled2=!0),this.isFilled1||this.isFilled2||this.createProduct()},async createProduct(){console.log("\n\n@click ~~~~~~~~~~ createProduct ~~~~~~~~~~ ");const e=x().create({withCredentials:!0});e.interceptors.request.use((e=>{console.log(">>>> customAxios - request (config)");let t=localStorage.getItem("AccessToken");return t&&(t=encodeURI(t)),e.headers.Authorization="Bearer "+t,e})),e.interceptors.response.use((e=>(console.log(">>>> customAxios - response (config)"),e)),(async t=>{console.log(">>>> customAxios - response (error)");const o=t.config;if(401==t.response.status&&t.config&&!t.config._isRetry&&(o._isRetry=!0,console.log("> 401 !!!!!!!!!!!: "),await this.tokenRefresh()))return console.log(" tokenRefresh TRUE!"),e.request(o);throw t}));try{const t=await e.post(N.Ou.pathToAPI+"/products/create.php",JSON.stringify({price:this.$store.state.newProd.price,pictures:this.$refs.uplModule.newPics,language:this.$store.state.language,brand:this.$store.state.newProd.brand,model:this.$store.state.newProd.model,brand2:this.$store.state.newProd.brand2,model2:this.$store.state.newProd.model2}),{headers:{Accept:"application/json","Content-Type":"application/json"}});console.log("[3] response: ",t),"success"===t.data.status?(this.$store.commit("SetNewId",t.data.id),this.$store.commit("SetNewPictures",this.$refs.uplModule.newPics),this.getProducts("createProduct()"),this.$store.commit("ClearNewProd"),this.$refs.uplModule.hideBarAndClean(),this.pushNotify(M[this.lang].text1,"notifyGreen")):(this.pushNotify(M[this.lang].text5_1+t.data.error+M[this.lang].text5_2,"notifyOrange"),console.log("Ошибка:"+t))}catch(t){if(!t.response)return;if(console.log("e: ",t),"ERR_NETWORK"===t.code)return this.pushNotify(M[this.lang].errNetwork,"notifyOrange"),void console.log("Нет подключения к серверу");switch(t.response.data.status){case"expired":console.log(" expired [E1] (BOTH TOKENS IS EXPIRED) ");break;case"failed":console.log(" failed [E2]");break;case"denied":console.log(" denied [E3]");break;case"approved":console.log(" approved [E4] ");break;case"locked":console.log(" locked [E5] ");break;default:console.log("error [E6]: "+t);break}}}},beforeMount(){this.$store.commit("ClearUpdProd")},setup(){const{tokenRefresh:e}=(0,B.Z)(),{lang:t}=(0,C.Z)("FormAdd"),{pushNotify:o}=(0,A.Z)(),{checkPrice:r,getProducts:l}=(0,E.Z)();return{tokenRefresh:e,lang:t,pushNotify:o,checkPrice:r,getProducts:l}}},T=o(89);const I=(0,T.Z)(R,[["render",y]]);var S=I,z={en:{header:"Adding Auto",brand:{label:"Brand",placeholder:"Type here brand"},model:{label:"Model",placeholder:"Type here model"},price:"Price",uploadButton:"Upload Images",uploadedFiles:"Uploaded Files",translationHeader:"Translation into Ukrainian (not required)",brand2:{label:"Brand",placeholder:"Type here the brand in Ukrainian"},model2:{label:"Model",placeholder:"Type here the model in Ukrainian"},addButton:"Add Auto"},uk:{header:"Добавление авто",brand:{label:"Марка",placeholder:"Напишите марку автомобиля"},model:{label:"Модель",placeholder:"Напишите модель"},price:"Цена",uploadButton:"Загрузить",uploadedFiles:"Загружены файлы",translationHeader:"Перевод на английский (необязательно)",brand2:{label:"Марка",placeholder:"Напишите марку на английском"},model2:{label:"Модель",placeholder:"Напишите модель на английском"},addButton:"Добавить"}},Z={components:{LoginForm:c.Z,FormAdd:S},setup(){const{lang:e}=(0,C.Z)("AddView");return{lang:e,insert:z}}};const O=(0,T.Z)(Z,[["render",d]]);var D=O}}]);
//# sourceMappingURL=54.daf1d7f4.js.map