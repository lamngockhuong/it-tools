import{d as J,r as $,cJ as bt,cK as ct,h as l,cO as he,y as ft,A as pt,bp as Se,d5 as ut,i as q,al as vt,F as ht,bK as gt,c0 as xt,d6 as mt,aB as yt,d7 as wt,an as r,ap as o,am as u,aq as y,aD as St,at as Ct,u as Ce,aN as ge,bu as te,bs as Rt,K as ae,c6 as zt,aQ as $t,br as E,d8 as Tt,Q as Pt,av as j,aw as G,ax as _t,a3 as xe,cN as re,d9 as Wt,ay as Y,by as Lt,c1 as ne,da as At,db as Bt,dc as Et,dd as jt}from"./index-1de3a68b.js";import{d as kt}from"./debounce-b9bd8487.js";const Ht=he(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[he("&::-webkit-scrollbar",{width:0,height:0})]),Ot=J({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=$(null);function i(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const b=bt();return Ht.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ct,ssr:b}),Object.assign({selfRef:e,handleWheel:i},{scrollTo(...d){var w;(w=e.value)===null||w===void 0||w.scrollTo(...d)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Ft="Expected a function";function oe(e,i,b){var v=!0,d=!0;if(typeof e!="function")throw new TypeError(Ft);return ft(b)&&(v="leading"in b?!!b.leading:v,d="trailing"in b?!!b.trailing:d),kt(e,i,{leading:v,maxWait:i,trailing:d})}const le=pt("n-tabs"),Re={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Xt=J({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Re,slots:Object,setup(e){const i=Se(le,null);return i||ut("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:i.paneStyleRef,class:i.paneClassRef,mergedClsPrefix:i.mergedClsPrefixRef}},render(){return l("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),It=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},wt(Re,["displayDirective"])),se=J({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:It,setup(e){const{mergedClsPrefixRef:i,valueRef:b,typeRef:v,closableRef:d,tabStyleRef:w,addTabStyleRef:h,tabClassRef:S,addTabClassRef:C,tabChangeIdRef:g,onBeforeLeaveRef:f,triggerRef:k,handleAdd:A,activateTab:x,handleClose:R}=Se(le);return{trigger:k,mergedClosable:q(()=>{if(e.internalAddable)return!1;const{closable:m}=e;return m===void 0?d.value:m}),style:w,addStyle:h,tabClass:S,addTabClass:C,clsPrefix:i,value:b,type:v,handleClose(m){m.stopPropagation(),!e.disabled&&R(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){A();return}const{name:m}=e,P=++g.id;if(m!==b.value){const{value:B}=f;B?Promise.resolve(B(e.name,b.value)).then(T=>{T&&g.id===P&&x(m)}):x(m)}}}},render(){const{internalAddable:e,clsPrefix:i,name:b,disabled:v,label:d,tab:w,value:h,mergedClosable:S,trigger:C,$slots:{default:g}}=this,f=d??w;return l("div",{class:`${i}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${i}-tabs-tab-pad`}):null,l("div",Object.assign({key:b,"data-name":b,"data-disabled":v?!0:void 0},vt({class:[`${i}-tabs-tab`,h===b&&`${i}-tabs-tab--active`,v&&`${i}-tabs-tab--disabled`,S&&`${i}-tabs-tab--closable`,e&&`${i}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${i}-tabs-tab__label`},e?l(ht,null,l("div",{class:`${i}-tabs-tab__height-placeholder`}," "),l(gt,{clsPrefix:i},{default:()=>l(xt,null)})):g?g():typeof f=="object"?f:mt(f??b)),S&&this.type==="card"?l(yt,{clsPrefix:i,class:`${i}-tabs-tab__close`,onClick:this.handleClose,disabled:v}):null))}}),Dt=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[o("segment-type",[r("tabs-rail",[u("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),o("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),o("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),o("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),o("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),o("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[o("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),o("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[y("prefix, suffix",`
 display: flex;
 align-items: center;
 `),y("prefix","padding-right: 16px;"),y("suffix","padding-left: 16px;")]),o("top, bottom",[r("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),u("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),o("shadow-start",[u("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),o("shadow-end",[u("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),o("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),u("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),o("shadow-start",[u("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),o("shadow-end",[u("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[u("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),u("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("disabled",{cursor:"not-allowed"}),y("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),y("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[u("&.transition-disabled",`
 transition: none;
 `),o("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[u("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),u("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),u("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),u("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),u("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),o("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[u("&:hover",{color:"var(--n-tab-text-color-hover)"}),o("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),o("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[o("line-type",[o("top",[y("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),o("left",[y("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),o("right",[y("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),o("bottom",[y("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),y("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),o("card-type",[y("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[o("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[y("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),St("disabled",[u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),o("closable","padding-right: 8px;"),o("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),o("disabled","color: var(--n-tab-text-color-disabled);")])]),o("left, right",`
 flex-direction: column; 
 `,[y("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),o("top",[o("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),y("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),o("left",[o("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),y("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),o("right",[o("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),y("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),o("bottom",[o("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),y("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Mt=Object.assign(Object.assign({},Ce.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ut=J({name:"Tabs",props:Mt,slots:Object,setup(e,{slots:i}){var b,v,d,w;const{mergedClsPrefixRef:h,inlineThemeDisabled:S}=Ct(e),C=Ce("Tabs","-tabs",Dt,Wt,e,h),g=$(null),f=$(null),k=$(null),A=$(null),x=$(null),R=$(null),m=$(!0),P=$(!0),B=ge(e,["labelSize","size"]),T=ge(e,["activeName","value"]),N=$((v=(b=T.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&v!==void 0?v:i.default?(w=(d=te(i.default())[0])===null||d===void 0?void 0:d.props)===null||w===void 0?void 0:w.name:null),_=Rt(T,N),c={id:0},z=q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ae(_,()=>{c.id=0,X(),be()});function H(){var t;const{value:a}=_;return a===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function ze(t){if(e.type==="card")return;const{value:a}=f;if(!a)return;const n=a.style.opacity==="0";if(t){const s=`${h.value}-tabs-bar--disabled`,{barWidth:p,placement:W}=e;if(t.dataset.disabled==="true"?a.classList.add(s):a.classList.remove(s),["top","bottom"].includes(W)){if(de(["top","maxHeight","height"]),typeof p=="number"&&t.offsetWidth>=p){const L=Math.floor((t.offsetWidth-p)/2)+t.offsetLeft;a.style.left=`${L}px`,a.style.maxWidth=`${p}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",n&&(a.style.transition="none"),a.offsetWidth,n&&(a.style.transition="",a.style.opacity="1")}else{if(de(["left","maxWidth","width"]),typeof p=="number"&&t.offsetHeight>=p){const L=Math.floor((t.offsetHeight-p)/2)+t.offsetTop;a.style.top=`${L}px`,a.style.maxHeight=`${p}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",n&&(a.style.transition="none"),a.offsetHeight,n&&(a.style.transition="",a.style.opacity="1")}}}function $e(){if(e.type==="card")return;const{value:t}=f;t&&(t.style.opacity="0")}function de(t){const{value:a}=f;if(a)for(const n of t)a.style[n]=""}function X(){if(e.type==="card")return;const t=H();t?ze(t):$e()}function be(){var t;const a=(t=x.value)===null||t===void 0?void 0:t.$el;if(!a)return;const n=H();if(!n)return;const{scrollLeft:s,offsetWidth:p}=a,{offsetLeft:W,offsetWidth:L}=n;s>W?a.scrollTo({top:0,left:W,behavior:"smooth"}):W+L>s+p&&a.scrollTo({top:0,left:W+L-p,behavior:"smooth"})}const U=$(null);let Q=0,O=null;function Te(t){const a=U.value;if(a){Q=t.getBoundingClientRect().height;const n=`${Q}px`,s=()=>{a.style.height=n,a.style.maxHeight=n};O?(s(),O(),O=null):O=s}}function Pe(t){const a=U.value;if(a){const n=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${n}px`,a.style.height=`${Math.max(Q,n)}px`};O?(O(),O=null,s()):O=s}}function _e(){const t=U.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:n,height:s}=a;n!==void 0&&(t.style.maxHeight=n),s!==void 0&&(t.style.height=s)}}}const ce={value:[]},fe=$("next");function We(t){const a=_.value;let n="next";for(const s of ce.value){if(s===a)break;if(s===t){n="prev";break}}fe.value=n,Le(t)}function Le(t){const{onActiveNameChange:a,onUpdateValue:n,"onUpdate:value":s}=e;a&&Y(a,t),n&&Y(n,t),s&&Y(s,t),N.value=t}function Ae(t){const{onClose:a}=e;a&&Y(a,t)}function pe(){const{value:t}=f;if(!t)return;const a="transition-disabled";t.classList.add(a),X(),t.classList.remove(a)}const F=$(null);function Z({transitionDisabled:t}){const a=g.value;if(!a)return;t&&a.classList.add("transition-disabled");const n=H();n&&F.value&&(F.value.style.width=`${n.offsetWidth}px`,F.value.style.height=`${n.offsetHeight}px`,F.value.style.transform=`translateX(${n.offsetLeft-Lt(getComputedStyle(a).paddingLeft)}px)`,t&&F.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ae([_],()=>{e.type==="segment"&&ne(()=>{Z({transitionDisabled:!1})})}),zt(()=>{e.type==="segment"&&Z({transitionDisabled:!0})});let ue=0;function Be(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ue===t.contentRect.width)return;ue=t.contentRect.width;const{type:n}=e;if((n==="line"||n==="bar")&&pe(),n!=="segment"){const{placement:s}=e;ee((s==="top"||s==="bottom"?(a=x.value)===null||a===void 0?void 0:a.$el:R.value)||null)}}const Ee=oe(Be,64);ae([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{const{type:t}=e;(t==="line"||t==="bar")&&pe()})});const I=$(!1);function je(t){var a;const{target:n,contentRect:{width:s,height:p}}=t,W=n.parentElement.parentElement.offsetWidth,L=n.parentElement.parentElement.offsetHeight,{placement:M}=e;if(!I.value)M==="top"||M==="bottom"?W<s&&(I.value=!0):L<p&&(I.value=!0);else{const{value:V}=A;if(!V)return;M==="top"||M==="bottom"?W-s>V.$el.offsetWidth&&(I.value=!1):L-p>V.$el.offsetHeight&&(I.value=!1)}ee(((a=x.value)===null||a===void 0?void 0:a.$el)||null)}const ke=oe(je,64);function He(){const{onAdd:t}=e;t&&t(),ne(()=>{const a=H(),{value:n}=x;!a||!n||n.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function ee(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:n,scrollWidth:s,offsetWidth:p}=t;m.value=n<=0,P.value=n+p>=s}else{const{scrollTop:n,scrollHeight:s,offsetHeight:p}=t;m.value=n<=0,P.value=n+p>=s}}const Oe=oe(t=>{ee(t.target)},64);$t(le,{triggerRef:E(e,"trigger"),tabStyleRef:E(e,"tabStyle"),tabClassRef:E(e,"tabClass"),addTabStyleRef:E(e,"addTabStyle"),addTabClassRef:E(e,"addTabClass"),paneClassRef:E(e,"paneClass"),paneStyleRef:E(e,"paneStyle"),mergedClsPrefixRef:h,typeRef:E(e,"type"),closableRef:E(e,"closable"),valueRef:_,tabChangeIdRef:c,onBeforeLeaveRef:E(e,"onBeforeLeave"),activateTab:We,handleClose:Ae,handleAdd:He}),Tt(()=>{X(),be()}),Pt(()=>{const{value:t}=k;if(!t)return;const{value:a}=h,n=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;m.value?t.classList.remove(n):t.classList.add(n),P.value?t.classList.remove(s):t.classList.add(s)});const Fe={syncBarPosition:()=>{X()}},Ie=()=>{Z({transitionDisabled:!0})},ve=q(()=>{const{value:t}=B,{type:a}=e,n={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${n}`,{self:{barColor:p,closeIconColor:W,closeIconColorHover:L,closeIconColorPressed:M,tabColor:V,tabBorderColor:De,paneTextColor:Me,tabFontWeight:Ne,tabBorderRadius:Ve,tabFontWeightActive:Xe,colorSegment:Ue,fontWeightStrong:Ke,tabColorSegment:Ge,closeSize:Ye,closeIconSize:qe,closeColorHover:Je,closeColorPressed:Qe,closeBorderRadius:Ze,[j("panePadding",t)]:K,[j("tabPadding",s)]:et,[j("tabPaddingVertical",s)]:tt,[j("tabGap",s)]:at,[j("tabGap",`${s}Vertical`)]:rt,[j("tabTextColor",a)]:nt,[j("tabTextColorActive",a)]:ot,[j("tabTextColorHover",a)]:it,[j("tabTextColorDisabled",a)]:st,[j("tabFontSize",t)]:lt},common:{cubicBezierEaseInOut:dt}}=C.value;return{"--n-bezier":dt,"--n-color-segment":Ue,"--n-bar-color":p,"--n-tab-font-size":lt,"--n-tab-text-color":nt,"--n-tab-text-color-active":ot,"--n-tab-text-color-disabled":st,"--n-tab-text-color-hover":it,"--n-pane-text-color":Me,"--n-tab-border-color":De,"--n-tab-border-radius":Ve,"--n-close-size":Ye,"--n-close-icon-size":qe,"--n-close-color-hover":Je,"--n-close-color-pressed":Qe,"--n-close-border-radius":Ze,"--n-close-icon-color":W,"--n-close-icon-color-hover":L,"--n-close-icon-color-pressed":M,"--n-tab-color":V,"--n-tab-font-weight":Ne,"--n-tab-font-weight-active":Xe,"--n-tab-padding":et,"--n-tab-padding-vertical":tt,"--n-tab-gap":at,"--n-tab-gap-vertical":rt,"--n-pane-padding-left":G(K,"left"),"--n-pane-padding-right":G(K,"right"),"--n-pane-padding-top":G(K,"top"),"--n-pane-padding-bottom":G(K,"bottom"),"--n-font-weight-strong":Ke,"--n-tab-color-segment":Ge}}),D=S?_t("tabs",q(()=>`${B.value[0]}${e.type[0]}`),ve,e):void 0;return Object.assign({mergedClsPrefix:h,mergedValue:_,renderedNames:new Set,segmentCapsuleElRef:F,tabsPaneWrapperRef:U,tabsElRef:g,barElRef:f,addTabInstRef:A,xScrollInstRef:x,scrollWrapperElRef:k,addTabFixed:I,tabWrapperStyle:z,handleNavResize:Ee,mergedSize:B,handleScroll:Oe,handleTabsResize:ke,cssVars:S?void 0:ve,themeClass:D?.themeClass,animationDirection:fe,renderNameListRef:ce,yScrollElRef:R,handleSegmentResize:Ie,onAnimationBeforeLeave:Te,onAnimationEnter:Pe,onAnimationAfterEnter:_e,onRender:D?.onRender},Fe)},render(){const{mergedClsPrefix:e,type:i,placement:b,addTabFixed:v,addable:d,mergedSize:w,renderNameListRef:h,onRender:S,paneWrapperClass:C,paneWrapperStyle:g,$slots:{default:f,prefix:k,suffix:A}}=this;S?.();const x=f?te(f()).filter(c=>c.type.__TAB_PANE__===!0):[],R=f?te(f()).filter(c=>c.type.__TAB__===!0):[],m=!R.length,P=i==="card",B=i==="segment",T=!P&&!B&&this.justifyContent;h.value=[];const N=()=>{const c=l("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:b==="top"||b==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),m?x.map((z,H)=>(h.value.push(z.props.name),ie(l(se,Object.assign({},z.props,{internalCreatedByPane:!0,internalLeftPadded:H!==0&&(!T||T==="center"||T==="start"||T==="end")}),z.children?{default:z.children.tab}:void 0)))):R.map((z,H)=>(h.value.push(z.props.name),ie(H!==0&&!T?we(z):z))),!v&&d&&P?ye(d,(m?x.length:R.length)!==0):null,T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&d?l(re,{onResize:this.handleTabsResize},{default:()=>c}):c,P?l("div",{class:`${e}-tabs-pad`}):null,P?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},_=B?"top":b;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${i}-type`,`${e}-tabs--${w}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${_}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${i}-type`,`${e}-tabs-nav--${_}`,`${e}-tabs-nav`]},xe(k,c=>c&&l("div",{class:`${e}-tabs-nav__prefix`},c)),B?l(re,{onResize:this.handleSegmentResize},{default:()=>l("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},l("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},l("div",{class:`${e}-tabs-wrapper`},l("div",{class:`${e}-tabs-tab`}))),m?x.map((c,z)=>(h.value.push(c.props.name),l(se,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0}),c.children?{default:c.children.tab}:void 0))):R.map((c,z)=>(h.value.push(c.props.name),z===0?c:we(c))))}):l(re,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(_)?l(Ot,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:N}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},N()))}),v&&d&&P?ye(d,!0):null,xe(A,c=>c&&l("div",{class:`${e}-tabs-nav__suffix`},c))),m&&(this.animated&&(_==="top"||_==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,C]},me(x,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):me(x,this.mergedValue,this.renderedNames)))}});function me(e,i,b,v,d,w,h){const S=[];return e.forEach(C=>{const{name:g,displayDirective:f,"display-directive":k}=C.props,A=R=>f===R||k===R,x=i===g;if(C.key!==void 0&&(C.key=g),x||A("show")||A("show:lazy")&&b.has(g)){b.has(g)||b.add(g);const R=!A("if");S.push(R?At(C,[[Bt,x]]):C)}}),h?l(Et,{name:`${h}-transition`,onBeforeLeave:v,onEnter:d,onAfterEnter:w},{default:()=>S}):S}function ye(e,i){return l(se,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:i,disabled:typeof e=="object"&&e.disabled})}function we(e){const i=jt(e);return i.props?i.props.internalLeftPadded=!0:i.props={internalLeftPadded:!0},i}function ie(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Xt as _,Ut as a};
