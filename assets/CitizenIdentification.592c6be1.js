import{s as S}from"./password.esm.4b0b8871.js";import{b as I,a as C}from"./toast.esm.ce455301.js";import{g as R,a0 as U,$ as k,o as x,c as V,b as i,u as s,a as t,V as d,r,v as E,p as N,d as $}from"./index.096ac52f.js";import{_ as A,R as m,U as z,S as D}from"./plugin-vue_export-helper.1b5df2d2.js";import{l as O,i as B,u as f,y as G,R as M,g as P,A as T}from"./index.browser.esm2017.493ab2a2.js";const p=n=>(N("data-v-2e81a955"),n=n(),$(),n),j={class:"muniform"},q={class:"container"},F=p(()=>t("div",{style:{width:"100%",padding:"10px"}},[t("h3",null,"Identificarme")],-1)),H={class:"field",style:{width:"100%"}},J=p(()=>t("label",{for:"dni"},"DNI",-1)),K={class:"field",style:{width:"100%"}},L=p(()=>t("label",{for:"password"},"Contrase\xF1a",-1)),Q=p(()=>t("br",null,null,-1)),W={__name:"CitizenIdentification",setup(n){const g=R().appContext.config.globalProperties.$firebaseApp,c=O(g),v=U(),e=k({dni:null,password:null}),w=async()=>{console.log(e.value.dni.toString(),btoa(e.value.password));let u=B(G(c,m),f("dni","==",e.value.dni.toString()),f("password","==",btoa(e.value.password))),o=(await M(u)).docs.map(l=>l.id);if(o.length==0)v.add({severity:"error",summary:"MuniHuaura",detail:"No se encontr\xF3 el usuario",life:3e3});else{let l=o[0],y=P(c,m,l),_=(await T(y)).data();console.log("Asignando usuario",_),localStorage.setItem(z,l),sessionStorage.setItem(D,JSON.stringify(_)),r.replace({name:"S002"})}},b=()=>{r.push({name:"S005",params:{dni:e.dni}})},h=()=>{r.push({name:"S006"})};return(u,a)=>(x(),V(E,null,[i(s(I),{position:"bottom-left",style:{width:"90%"}}),t("main",j,[t("div",q,[F,t("div",H,[J,i(s(C),{id:"dni",modelValue:e.value.dni,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.dni=o),mode:"decimal",useGrouping:!1,style:{width:"100%"}},null,8,["modelValue"])]),t("div",K,[L,i(s(S),{id:"password",modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value.password=o),feedback:!1,toggleMask:"",style:{width:"100%"}},null,8,["modelValue"])]),Q,i(s(d),{onClick:w,label:"Continuar",style:{width:"100%"}}),i(s(d),{onClick:h,label:"Registrarme",style:{width:"100%"},class:"p-button-outlined p-button-success"}),i(s(d),{onClick:b,label:"Olvid\xE9 mi contrase\xF1a",class:"p-button-outlined p-button-danger",style:{width:"100%"}}),i(s(d),{onClick:a[2]||(a[2]=o=>s(r).go(-1)),label:"Regresar",class:"p-button-outlined p-button-info",style:{width:"100%"}})])])],64))}};var oe=A(W,[["__scopeId","data-v-2e81a955"]]);export{oe as default};
