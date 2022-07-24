import{o as f,c as g,n as S,a,g as v,w as u,r as x,b,u as I,p as w,d as E,_ as C}from"./index.096ac52f.js";import{_ as R,S as _,U as k,I as c,R as T}from"./plugin-vue_export-helper.1b5df2d2.js";import{l as N,g as U,y as A,A as B,R as D}from"./index.browser.esm2017.493ab2a2.js";var y={name:"ProgressSpinner",props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle(){return{"animation-duration":this.animationDuration}}}};const O={class:"p-progress-spinner",role:"alert","aria-busy":"true"},$=["fill","stroke-width"];function P(t,e,s,r,n,p){return f(),g("div",O,[(f(),g("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:S(p.svgStyle)},[a("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:s.fill,"stroke-width":s.strokeWidth,strokeMiterlimit:"10"},null,8,$)],4))])}function j(t,e){e===void 0&&(e={});var s=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var z=`
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
`;j(z);y.render=P;const i=t=>(w("data-v-194659fe"),t=t(),E(),t),J={class:"container"},V={class:"centered-element"},W=i(()=>a("img",{src:C,alt:"Logo muni Huaura"},null,-1)),G=i(()=>a("br",null,null,-1)),H=i(()=>a("br",null,null,-1)),L=i(()=>a("br",null,null,-1)),M=i(()=>a("p",{style:{"text-align":"center"}},"Cargando informaci\xF3n...",-1)),Y={__name:"SplashScreen",async setup(t){let e,s;const n=v().appContext.config.globalProperties.$firebaseApp,p=N(n);if(!sessionStorage.getItem(_)){let o=localStorage.getItem(k);if(o){let l=U(p,T,o),d=([e,s]=u(()=>B(l)),e=await e,s(),e).data();localStorage.setItem(k,o),sessionStorage.setItem(_,JSON.stringify(d))}}if(!sessionStorage.getItem(c)){let o=A(p,c),h=([e,s]=u(()=>D(o)),e=await e,s(),e).docs.map(d=>{let m=d.data();return m.id=d.id,m});sessionStorage.setItem(c,JSON.stringify(h))}return x.push({name:"S002"}),(o,l)=>(f(),g("div",J,[a("div",V,[W,G,H,b(I(y),{style:{width:"50px",height:"50px"}}),L,M])]))}};var Q=R(Y,[["__scopeId","data-v-194659fe"]]);export{Q as default};
