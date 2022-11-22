import{o as u,c as _,n as I,a as i,g as b,w as g,r as w,b as E,u as C,p as R,d as T,_ as N}from"./index.eeda083e.js";import{_ as U,S as y,U as k,I as h,a as m,R as A}from"./plugin-vue_export-helper.6144179f.js";import{l as B,g as D,y as S,A as O,R as v}from"./index.browser.esm2017.4728d279.js";var x={name:"ProgressSpinner",props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle(){return{"animation-duration":this.animationDuration}}}};const $={class:"p-progress-spinner",role:"alert","aria-busy":"true"},J=["fill","stroke-width"];function P(s,e,n,a,t,p){return u(),_("div",$,[(u(),_("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:I(p.svgStyle)},[i("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},null,8,J)],4))])}function j(s,e){e===void 0&&(e={});var n=e.insertAt;if(!(!s||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s))}}var z=`
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}
.p-progress-spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
}
.p-progress-spinner-svg {
    -webkit-animation: p-progress-spinner-rotate 2s linear infinite;
            animation: p-progress-spinner-rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
            transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: #d62d20;
    -webkit-animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}
@-webkit-keyframes p-progress-spinner-rotate {
100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
}
}
@keyframes p-progress-spinner-rotate {
100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
}
}
@-webkit-keyframes p-progress-spinner-dash {
0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
}
50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
}
100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
}
}
@keyframes p-progress-spinner-dash {
0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
}
50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
}
100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
}
}
@-webkit-keyframes p-progress-spinner-color {
100%,
    0% {
        stroke: #d62d20;
}
40% {
        stroke: #0057e7;
}
66% {
        stroke: #008744;
}
80%,
    90% {
        stroke: #ffa700;
}
}
@keyframes p-progress-spinner-color {
100%,
    0% {
        stroke: #d62d20;
}
40% {
        stroke: #0057e7;
}
66% {
        stroke: #008744;
}
80%,
    90% {
        stroke: #ffa700;
}
}
`;j(z);x.render=P;const l=s=>(R("data-v-9f5289d0"),s=s(),T(),s),V={class:"container"},W={class:"centered-element"},G=l(()=>i("img",{src:N,alt:"Logo muni Huaura"},null,-1)),H=l(()=>i("br",null,null,-1)),L=l(()=>i("br",null,null,-1)),M=l(()=>i("br",null,null,-1)),Y=l(()=>i("p",{style:{"text-align":"center"}},"Cargando informaci\xF3n...",-1)),q={__name:"SplashScreen",async setup(s){let e,n;const t=b().appContext.config.globalProperties.$firebaseApp,p=B(t);if(!sessionStorage.getItem(y)){let r=localStorage.getItem(k);if(r){let c=D(p,A,r),o=([e,n]=g(()=>O(c)),e=await e,n(),e).data();localStorage.setItem(k,r),sessionStorage.setItem(y,JSON.stringify(o))}}if(!sessionStorage.getItem(h)){let r=S(p,h),f=([e,n]=g(()=>v(r)),e=await e,n(),e).docs.map(o=>{let d=o.data();return d.id=o.id,d});sessionStorage.setItem(h,JSON.stringify(f))}if(!sessionStorage.getItem(m)){let r=S(p,m),f=([e,n]=g(()=>v(r)),e=await e,n(),e).docs.map(o=>{let d=o.data();return d.id=o.id,d});sessionStorage.setItem(m,JSON.stringify(f))}return w.push({name:"S002"}),(r,c)=>(u(),_("div",V,[i("div",W,[G,H,L,E(C(x),{style:{width:"50px",height:"50px"}}),M,Y])]))}};var X=U(q,[["__scopeId","data-v-9f5289d0"]]);export{X as default};
