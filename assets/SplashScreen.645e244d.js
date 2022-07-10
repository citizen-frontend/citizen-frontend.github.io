import{o as i,c as p,n as c,a as t,r as f,b as h,u,p as g,d as m,_ as k}from"./index.4928b364.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";var d={name:"ProgressSpinner",props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle(){return{"animation-duration":this.animationDuration}}}};const y={class:"p-progress-spinner",role:"alert","aria-busy":"true"},v=["fill","stroke-width"];function x(e,r,o,s,n,l){return i(),p("div",y,[(i(),p("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:c(l.svgStyle)},[t("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:o.fill,"stroke-width":o.strokeWidth,strokeMiterlimit:"10"},null,8,v)],4))])}function b(e,r){r===void 0&&(r={});var o=r.insertAt;if(!(!e||typeof document=="undefined")){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var S=`
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
`;b(S);d.render=x;const a=e=>(g("data-v-16fdcfa2"),e=e(),m(),e),w={class:"container"},B={class:"centered-element"},C=a(()=>t("img",{src:k,alt:"Logo muni Huaura"},null,-1)),I=a(()=>t("br",null,null,-1)),N=a(()=>t("br",null,null,-1)),T=a(()=>t("br",null,null,-1)),E=a(()=>t("p",{style:{"text-align":"center"}},"Cargando informaci\xF3n...",-1)),$={__name:"SplashScreen",setup(e){return setTimeout(()=>{f.push({name:"S002"})},3e3),(r,o)=>(i(),p("div",w,[t("div",B,[C,I,N,h(u(d),{style:{width:"50px",height:"50px"}}),T,E])]))}};var A=_($,[["__scopeId","data-v-16fdcfa2"]]);export{A as default};
