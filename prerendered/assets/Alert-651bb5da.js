import{bA as F,bN as M,bO as u,bC as b,an as I,aq as i,ap as y,bP as N,am as V,d as K,at as q,u as E,au as D,i as $,aw as Q,av as c,ax as U,r as G,h as s,bQ as J,al as X,aB as Y,bR as Z,bK as oo,bS as eo,bT as ro,bU as no,bV as to,a3 as so}from"./index-1de3a68b.js";function lo(r){const{lineHeight:o,borderRadius:d,fontWeightStrong:C,baseColor:l,dividerColor:v,actionColor:S,textColor1:g,textColor2:t,closeColorHover:h,closeColorPressed:f,closeIconColor:m,closeIconColorHover:p,closeIconColorPressed:n,infoColor:e,successColor:x,warningColor:z,errorColor:P,fontSize:T}=r;return Object.assign(Object.assign({},M),{fontSize:T,lineHeight:o,titleFontWeight:C,borderRadius:d,border:`1px solid ${v}`,color:S,titleTextColor:g,iconColor:t,contentTextColor:t,closeBorderRadius:d,closeColorHover:h,closeColorPressed:f,closeIconColor:m,closeIconColorHover:p,closeIconColorPressed:n,borderInfo:`1px solid ${u(l,b(e,{alpha:.25}))}`,colorInfo:u(l,b(e,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:e,contentTextColorInfo:t,closeColorHoverInfo:h,closeColorPressedInfo:f,closeIconColorInfo:m,closeIconColorHoverInfo:p,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${u(l,b(x,{alpha:.25}))}`,colorSuccess:u(l,b(x,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:x,contentTextColorSuccess:t,closeColorHoverSuccess:h,closeColorPressedSuccess:f,closeIconColorSuccess:m,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${u(l,b(z,{alpha:.33}))}`,colorWarning:u(l,b(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:t,closeColorHoverWarning:h,closeColorPressedWarning:f,closeIconColorWarning:m,closeIconColorHoverWarning:p,closeIconColorPressedWarning:n,borderError:`1px solid ${u(l,b(P,{alpha:.25}))}`,colorError:u(l,b(P,{alpha:.08})),titleTextColorError:g,iconColorError:P,contentTextColorError:t,closeColorHoverError:h,closeColorPressedError:f,closeIconColorError:m,closeIconColorHoverError:p,closeIconColorPressedError:n})}const io={name:"Alert",common:F,self:lo},ao=io,co=I("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),y("closable",[I("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),I("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),N({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),y("show-icon",[I("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("right-adjust",[I("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),I("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),go=Object.assign(Object.assign({},E.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),uo=K({name:"Alert",inheritAttrs:!1,props:go,slots:Object,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:d,inlineThemeDisabled:C,mergedRtlRef:l}=q(r),v=E("Alert","-alert",co,ao,r,o),S=D("Alert",l,o),g=$(()=>{const{common:{cubicBezierEaseInOut:n},self:e}=v.value,{fontSize:x,borderRadius:z,titleFontWeight:P,lineHeight:T,iconSize:H,iconMargin:R,iconMarginRtl:A,closeIconSize:w,closeBorderRadius:W,closeSize:B,closeMargin:_,closeMarginRtl:L,padding:j}=e,{type:a}=r,{left:k,right:O}=Q(R);return{"--n-bezier":n,"--n-color":e[c("color",a)],"--n-close-icon-size":w,"--n-close-border-radius":W,"--n-close-color-hover":e[c("closeColorHover",a)],"--n-close-color-pressed":e[c("closeColorPressed",a)],"--n-close-icon-color":e[c("closeIconColor",a)],"--n-close-icon-color-hover":e[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":e[c("closeIconColorPressed",a)],"--n-icon-color":e[c("iconColor",a)],"--n-border":e[c("border",a)],"--n-title-text-color":e[c("titleTextColor",a)],"--n-content-text-color":e[c("contentTextColor",a)],"--n-line-height":T,"--n-border-radius":z,"--n-font-size":x,"--n-title-font-weight":P,"--n-icon-size":H,"--n-icon-margin":R,"--n-icon-margin-rtl":A,"--n-close-size":B,"--n-close-margin":_,"--n-close-margin-rtl":L,"--n-padding":j,"--n-icon-margin-left":k,"--n-icon-margin-right":O}}),t=C?U("alert",$(()=>r.type[0]),g,r):void 0,h=G(!0),f=()=>{const{onAfterLeave:n,onAfterHide:e}=r;n&&n(),e&&e()};return{rtlEnabled:S,mergedClsPrefix:o,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{f()},mergedTheme:v,cssVars:C?void 0:g,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:d}=this,C={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},X(this.$attrs,C)),this.closable&&s(Y,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&s("div",{class:`${o}-alert__border`}),this.showIcon&&s("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},Z(d.icon,()=>[s(oo,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return s(to,null);case"info":return s(no,null);case"warning":return s(ro,null);case"error":return s(eo,null);default:return null}}})])),s("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},so(d.header,l=>{const v=l||this.title;return v?s("div",{class:`${o}-alert-body__title`},v):null}),d.default&&s("div",{class:`${o}-alert-body__content`},d))):null}})}});export{uo as N};
