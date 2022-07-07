import{R as c,l as b,q as r,o as i,c as s,e as p,j as n,f as a,a as u,t as l}from"./index.8d857366.js";var g={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:c}};const h=["disabled"],y={class:"p-button-label"};function m(o,f,t,C,S,e){const d=b("ripple");return r((i(),s("button",{class:n(e.buttonClass),type:"button",disabled:e.disabled},[p(o.$slots,"default",{},()=>[t.loading&&!t.icon?(i(),s("span",{key:0,class:n(e.iconClass)},null,2)):a("",!0),t.icon?(i(),s("span",{key:1,class:n(e.iconClass)},null,2)):a("",!0),u("span",y,l(t.label||"\xA0"),1),t.badge?(i(),s("span",{key:2,class:n(e.badgeStyleClass)},l(t.badge),3)):a("",!0)])],10,h)),[[d]])}g.render=m;export{g as s};