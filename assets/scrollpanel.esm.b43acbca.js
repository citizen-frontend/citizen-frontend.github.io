import{D as s,o as h,c as d,a,l as c}from"./index.f1d981da.js";var u={name:"ScrollPanel",initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,mounted(){this.$el.offsetParent&&this.initialize()},updated(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight(){let e=getComputedStyle(this.$el),t=getComputedStyle(this.$refs.xBar),l=s.getHeight(this.$el)-parseInt(t.height,10);e["max-height"]!=="none"&&l===0&&(this.$refs.content.offsetHeight+parseInt(t.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar(){let e=this.$refs.content.scrollWidth,t=this.$refs.content.clientWidth,l=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=t/e;let o=this.$refs.content.scrollHeight,n=this.$refs.content.clientHeight,i=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=n/o,this.frame=this.requestAnimationFrame(()=>{this.scrollXRatio>=1?s.addClass(this.$refs.xBar,"p-scrollpanel-hidden"):(s.removeClass(this.$refs.xBar,"p-scrollpanel-hidden"),this.$refs.xBar.style.cssText="width:"+Math.max(this.scrollXRatio*100,10)+"%; left:"+this.$refs.content.scrollLeft/e*100+"%;bottom:"+l+"px;"),this.scrollYRatio>=1?s.addClass(this.$refs.yBar,"p-scrollpanel-hidden"):(s.removeClass(this.$refs.yBar,"p-scrollpanel-hidden"),this.$refs.yBar.style.cssText="height:"+Math.max(this.scrollYRatio*100,10)+"%; top: calc("+this.$refs.content.scrollTop/o*100+"% - "+this.$refs.xBar.clientHeight+"px);right:"+i+"px;")})},onYBarMouseDown(e){this.isYBarClicked=!0,this.lastPageY=e.pageY,s.addClass(this.$refs.yBar,"p-scrollpanel-grabbed"),s.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown(e){this.isXBarClicked=!0,this.lastPageX=e.pageX,s.addClass(this.$refs.xBar,"p-scrollpanel-grabbed"),s.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onDocumentMouseMove(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar(e){let t=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(()=>{this.$refs.content.scrollLeft+=t/this.scrollXRatio})},onMouseMoveForYBar(e){let t=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(()=>{this.$refs.content.scrollTop+=t/this.scrollYRatio})},onDocumentMouseUp(){s.removeClass(this.$refs.yBar,"p-scrollpanel-grabbed"),s.removeClass(this.$refs.xBar,"p-scrollpanel-grabbed"),s.removeClass(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame(e){return(window.requestAnimationFrame||this.timeoutFrame)(e)},refresh(){this.moveBar()},scrollTop(e){let t=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>t?t:e>0?e:0,this.$refs.contentscrollTop=e},bindDocumentMouseListeners(){this.documentMouseMoveListener||(this.documentMouseMoveListener=e=>{this.onDocumentMouseMove(e)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=e=>{this.onDocumentMouseUp(e)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=()=>{this.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}}};const p={class:"p-scrollpanel p-component"},m={class:"p-scrollpanel-wrapper"};function f(e,t,l,o,n,i){return h(),d("div",p,[a("div",m,[a("div",{ref:"content",class:"p-scrollpanel-content",onScroll:t[0]||(t[0]=(...r)=>i.moveBar&&i.moveBar(...r)),onMouseenter:t[1]||(t[1]=(...r)=>i.moveBar&&i.moveBar(...r))},[c(e.$slots,"default")],544)]),a("div",{ref:"xBar",class:"p-scrollpanel-bar p-scrollpanel-bar-x",onMousedown:t[2]||(t[2]=(...r)=>i.onXBarMouseDown&&i.onXBarMouseDown(...r))},null,544),a("div",{ref:"yBar",class:"p-scrollpanel-bar p-scrollpanel-bar-y",onMousedown:t[3]||(t[3]=(...r)=>i.onYBarMouseDown&&i.onYBarMouseDown(...r))},null,544)])}function g(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var v=`
.p-scrollpanel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}
.p-scrollpanel-content {
    height: calc(100% + 18px);
    width: calc(100% + 18px);
    padding: 0 18px 18px 0;
    position: relative;
    overflow: scroll;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
.p-scrollpanel-bar {
    position: relative;
    background: #c1c1c1;
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: opacity 0.25s linear;
    transition: opacity 0.25s linear;
}
.p-scrollpanel-bar-y {
    width: 9px;
    top: 0;
}
.p-scrollpanel-bar-x {
    height: 9px;
    bottom: 0;
}
.p-scrollpanel-hidden {
    visibility: hidden;
}
.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}
.p-scrollpanel-grabbed {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
`;g(v);u.render=f;export{u as s};
