import{$ as h,o as n,c,b as s,y as m,u as r,a as l,m as v,V as i}from"./index.6c748e8d.js";import{s as f}from"./scrollpanel.esm.3c5ff8d0.js";const g={class:"muniform"},R={class:"container"},w={class:"field",style:{width:"100%"}},y={key:0},B=["src"],U={class:"field",style:{width:"100%"}},C={__name:"RecordAudio",emits:["attach"],setup(k,{emit:d}){const e=h({state:"none",audioBlob:null,audioURL:null,base64Blob:null});var a=null;const u=t=>{let o=new FileReader;o.readAsDataURL(t.data),o.onloadend=function(){e.value.base64Blob=o.result},e.value.audioURL=URL.createObjectURL(t.data)};!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia?alert("Your browser does not support recording!"):navigator.mediaDevices.getUserMedia({audio:!0}).then(t=>{a=new MediaRecorder(t),a.addEventListener("dataavailable",u)}).catch(t=>{alert(`The following error occurred: ${t}`)});const b=()=>{e.value.state="recording",a.start()},p=()=>{e.value.state="stop",a.stop()},_=()=>{d("attach",e.value.base64Blob),a=null};return(t,o)=>(n(),c("main",g,[s(r(f),{style:{width:"100%",height:"100%"}},{default:m(()=>[l("div",R,[l("div",w,[e.value.state=="recording"?(n(),c("span",y,"Grabando...")):v("",!0),l("audio",{src:e.value.base64Blob,controls:""},null,8,B)]),l("div",U,[s(r(i),{icon:"pi pi-circle-fill",class:"p-button-rounded p-button-outlined",style:{color:"blue"},onClick:b,label:"Grabar"}),s(r(i),{icon:"pi pi-stop",class:"p-button-rounded p-button-danger p-button-outlined",style:{color:"red"},onClick:p,label:"Detener"})]),s(r(i),{label:"Adjuntar grabacion",onClick:_,style:{width:"100%"}})])]),_:1})]))}};export{C as default};
