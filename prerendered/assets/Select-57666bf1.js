import{c6 as Xe,dZ as Ue,K as be,cd as fn,d as Fe,h as r,bp as hn,d6 as Ce,d_ as en,bt as qe,bK as Un,aP as vn,an as x,aq as M,ap as U,am as ne,aD as Ye,cb as gn,u as Oe,at as nn,au as bn,br as j,d$ as qn,r as S,i as P,e0 as Gn,by as Qn,av as ge,aw as Ie,aQ as on,ax as tn,a3 as ln,aO as Jn,N as Yn,bR as Zn,c1 as pn,e1 as Be,e2 as Xn,e3 as et,Q as nt,e4 as rn,e5 as tt,F as ot,e6 as lt,e7 as it,bs as an,aN as rt,e8 as at,bJ as st,bq as dt,ce as ut,cf as Ze,cg as ct,ch as ft,ci as ht,da as vt,db as gt,dT as sn,e9 as bt,dS as pt,ay as ee}from"./index-1de3a68b.js";import{N as Ge}from"./Tag-78d4e208.js";import{F as mt}from"./FocusDetector-3b312503.js";import{V as wt}from"./VirtualList-79e5248c.js";import{N as yt}from"./Empty-0e586e3d.js";import{m as xt}from"./index-cbfaa337.js";function mn(e,a){a&&(Xe(()=>{const{value:s}=e;s&&Ue.registerHandler(s,a)}),be(e,(s,d)=>{d&&Ue.unregisterHandler(d)},{deep:!1}),fn(()=>{const{value:s}=e;s&&Ue.unregisterHandler(s)}))}function dn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Qe(e){const a=e.filter(s=>s!==void 0);if(a.length!==0)return a.length===1?a[0]:s=>{e.forEach(d=>{d&&d(s)})}}const Ct=Fe({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),un=Fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:a,labelFieldRef:s,nodePropsRef:d}=hn(en);return{labelField:s,nodeProps:d,renderLabel:e,renderOption:a}},render(){const{clsPrefix:e,renderLabel:a,renderOption:s,nodeProps:d,tmNode:{rawNode:f}}=this,v=d?.(f),h=a?a(f,!1):Ce(f[this.labelField],f,!1),i=r("div",Object.assign({},v,{class:[`${e}-base-select-group-header`,v?.class]}),h);return f.render?f.render({node:i,option:f}):s?s({node:i,option:f,selected:!1}):i}});function Ot(e,a){return r(vn,{name:"fade-in-scale-up-transition"},{default:()=>e?r(Un,{clsPrefix:a,class:`${a}-base-select-option__check`},{default:()=>r(Ct)}):null})}const cn=Fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:a,pendingTmNodeRef:s,multipleRef:d,valueSetRef:f,renderLabelRef:v,renderOptionRef:h,labelFieldRef:i,valueFieldRef:k,showCheckmarkRef:N,nodePropsRef:O,handleOptionClick:E,handleOptionMouseEnter:R}=hn(en),C=qe(()=>{const{value:T}=s;return T?e.tmNode.key===T.key:!1});function w(T){const{tmNode:F}=e;F.disabled||E(T,F)}function _(T){const{tmNode:F}=e;F.disabled||R(T,F)}function K(T){const{tmNode:F}=e,{value:z}=C;F.disabled||z||R(T,F)}return{multiple:d,isGrouped:qe(()=>{const{tmNode:T}=e,{parent:F}=T;return F&&F.rawNode.type==="group"}),showCheckmark:N,nodeProps:O,isPending:C,isSelected:qe(()=>{const{value:T}=a,{value:F}=d;if(T===null)return!1;const z=e.tmNode.rawNode[k.value];if(F){const{value:D}=f;return D.has(z)}else return T===z}),labelField:i,renderLabel:v,renderOption:h,handleMouseMove:K,handleMouseEnter:_,handleClick:w}},render(){const{clsPrefix:e,tmNode:{rawNode:a},isSelected:s,isPending:d,isGrouped:f,showCheckmark:v,nodeProps:h,renderOption:i,renderLabel:k,handleClick:N,handleMouseEnter:O,handleMouseMove:E}=this,R=Ot(s,e),C=k?[k(a,s),v&&R]:[Ce(a[this.labelField],a,s),v&&R],w=h?.(a),_=r("div",Object.assign({},w,{class:[`${e}-base-select-option`,a.class,w?.class,{[`${e}-base-select-option--disabled`]:a.disabled,[`${e}-base-select-option--selected`]:s,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:v}],style:[w?.style||"",a.style||""],onClick:Qe([N,w?.onClick]),onMouseenter:Qe([O,w?.onMouseenter]),onMousemove:Qe([E,w?.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},C));return a.render?a.render({node:_,option:a,selected:s}):i?i({node:_,option:a,selected:s}):_}}),Ft=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[M("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),M("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),M("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),M("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),M("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ne("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ne("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[ne("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[ne("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[ne("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[Ye("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),M("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[gn({enterScale:"0.5"})])])]),St=Fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=nn(e),d=bn("InternalSelectMenu",s,a),f=Oe("InternalSelectMenu","-internal-select-menu",Ft,qn,e,j(e,"clsPrefix")),v=S(null),h=S(null),i=S(null),k=P(()=>e.treeMate.getFlattenedNodes()),N=P(()=>Gn(k.value)),O=S(null);function E(){const{treeMate:o}=e;let u=null;const{value:$}=e;$===null?u=o.getFirstAvailableNode():(e.multiple?u=o.getNode(($||[])[($||[]).length-1]):u=o.getNode($),(!u||u.disabled)&&(u=o.getFirstAvailableNode())),Y(u||null)}function R(){const{value:o}=O;o&&!e.treeMate.getNode(o.key)&&(O.value=null)}let C;be(()=>e.show,o=>{o?C=be(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?E():R(),pn(ce)):R()},{immediate:!0}):C?.()},{immediate:!0}),fn(()=>{C?.()});const w=P(()=>Qn(f.value.self[ge("optionHeight",e.size)])),_=P(()=>Ie(f.value.self[ge("padding",e.size)])),K=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=P(()=>{const o=k.value;return o&&o.length===0});function F(o){const{onToggle:u}=e;u&&u(o)}function z(o){const{onScroll:u}=e;u&&u(o)}function D(o){var u;(u=i.value)===null||u===void 0||u.sync(),z(o)}function I(){var o;(o=i.value)===null||o===void 0||o.sync()}function G(){const{value:o}=O;return o||null}function q(o,u){u.disabled||Y(u,!1)}function de(o,u){u.disabled||F(u)}function ue(o){var u;Be(o,"action")||(u=e.onKeyup)===null||u===void 0||u.call(e,o)}function Q(o){var u;Be(o,"action")||(u=e.onKeydown)===null||u===void 0||u.call(e,o)}function J(o){var u;(u=e.onMousedown)===null||u===void 0||u.call(e,o),!e.focusable&&o.preventDefault()}function te(){const{value:o}=O;o&&Y(o.getNext({loop:!0}),!0)}function B(){const{value:o}=O;o&&Y(o.getPrev({loop:!0}),!0)}function Y(o,u=!1){O.value=o,u&&ce()}function ce(){var o,u;const $=O.value;if(!$)return;const le=N.value($.key);le!==null&&(e.virtualScroll?(o=h.value)===null||o===void 0||o.scrollTo({index:le}):(u=i.value)===null||u===void 0||u.scrollTo({index:le,elSize:w.value}))}function re(o){var u,$;!((u=v.value)===null||u===void 0)&&u.contains(o.target)&&(($=e.onFocus)===null||$===void 0||$.call(e,o))}function Se(o){var u,$;!((u=v.value)===null||u===void 0)&&u.contains(o.relatedTarget)||($=e.onBlur)===null||$===void 0||$.call(e,o)}on(en,{handleOptionMouseEnter:q,handleOptionClick:de,valueSetRef:K,pendingTmNodeRef:O,nodePropsRef:j(e,"nodeProps"),showCheckmarkRef:j(e,"showCheckmark"),multipleRef:j(e,"multiple"),valueRef:j(e,"value"),renderLabelRef:j(e,"renderLabel"),renderOptionRef:j(e,"renderOption"),labelFieldRef:j(e,"labelField"),valueFieldRef:j(e,"valueField")}),on(Xn,v),Xe(()=>{const{value:o}=i;o&&o.sync()});const oe=P(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:u},self:{height:$,borderRadius:le,color:me,groupHeaderTextColor:we,actionDividerColor:ie,optionTextColorPressed:H,optionTextColor:ye,optionTextColorDisabled:ae,optionTextColorActive:Re,optionOpacityDisabled:Te,optionCheckColor:Me,actionTextColor:Pe,optionColorPending:fe,optionColorActive:he,loadingColor:ke,loadingSize:ze,optionColorActivePending:_e,[ge("optionFontSize",o)]:xe,[ge("optionHeight",o)]:ve,[ge("optionPadding",o)]:V}}=f.value;return{"--n-height":$,"--n-action-divider-color":ie,"--n-action-text-color":Pe,"--n-bezier":u,"--n-border-radius":le,"--n-color":me,"--n-option-font-size":xe,"--n-group-header-text-color":we,"--n-option-check-color":Me,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":_e,"--n-option-height":ve,"--n-option-opacity-disabled":Te,"--n-option-text-color":ye,"--n-option-text-color-active":Re,"--n-option-text-color-disabled":ae,"--n-option-text-color-pressed":H,"--n-option-padding":V,"--n-option-padding-left":Ie(V,"left"),"--n-option-padding-right":Ie(V,"right"),"--n-loading-color":ke,"--n-loading-size":ze}}),{inlineThemeDisabled:pe}=e,W=pe?tn("internal-select-menu",P(()=>e.size[0]),oe,e):void 0,Z={selfRef:v,next:te,prev:B,getPendingTmNode:G};return mn(v,e.onResize),Object.assign({mergedTheme:f,mergedClsPrefix:a,rtlEnabled:d,virtualListRef:h,scrollbarRef:i,itemSize:w,padding:_,flattenedNodes:k,empty:T,virtualListContainer(){const{value:o}=h;return o?.listElRef},virtualListContent(){const{value:o}=h;return o?.itemsElRef},doScroll:z,handleFocusin:re,handleFocusout:Se,handleKeyUp:ue,handleKeyDown:Q,handleMouseDown:J,handleVirtualListResize:I,handleVirtualListScroll:D,cssVars:pe?void 0:oe,themeClass:W?.themeClass,onRender:W?.onRender},Z)},render(){const{$slots:e,virtualScroll:a,clsPrefix:s,mergedTheme:d,themeClass:f,onRender:v}=this;return v?.(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${s}-base-select-menu`,this.rtlEnabled&&`${s}-base-select-menu--rtl`,f,this.multiple&&`${s}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ln(e.header,h=>h&&r("div",{class:`${s}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?r("div",{class:`${s}-base-select-menu__loading`},r(Jn,{clsPrefix:s,strokeWidth:20})):this.empty?r("div",{class:`${s}-base-select-menu__empty`,"data-empty":!0},Zn(e.empty,()=>[r(yt,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty,size:this.size})])):r(Yn,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:a?this.virtualListContainer:void 0,content:a?this.virtualListContent:void 0,onScroll:a?void 0:this.doScroll},{default:()=>a?r(wt,{ref:"virtualListRef",class:`${s}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?r(un,{key:h.key,clsPrefix:s,tmNode:h}):h.ignored?null:r(cn,{clsPrefix:s,key:h.key,tmNode:h})}):r("div",{class:`${s}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?r(un,{key:h.key,clsPrefix:s,tmNode:h}):r(cn,{clsPrefix:s,key:h.key,tmNode:h})))}),ln(e.action,h=>h&&[r("div",{class:`${s}-base-select-menu__action`,"data-action":!0,key:"action"},h),r(mt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Rt=ne([x("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[x("base-loading",`
 color: var(--n-loading-color);
 `),x("base-selection-tags","min-height: var(--n-height);"),M("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),M("state-border",`
 z-index: 1;
 border-color: #0000;
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),x("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[M("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),x("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[M("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),x("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[x("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[M("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),M("render-label",`
 color: var(--n-text-color);
 `)]),Ye("disabled",[ne("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[M("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M("render-label",`
 color: var(--n-text-color-disabled);
 `)]),x("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),x("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),x("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[M("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),M("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[M("state-border",`border: var(--n-border-${e});`),Ye("disabled",[ne("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),x("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),x("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ne("&:last-child","padding-right: 0;"),x("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[M("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Tt=Fe({name:"InternalSelection",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=nn(e),d=bn("InternalSelection",s,a),f=S(null),v=S(null),h=S(null),i=S(null),k=S(null),N=S(null),O=S(null),E=S(null),R=S(null),C=S(null),w=S(!1),_=S(!1),K=S(!1),T=Oe("InternalSelection","-internal-selection",Rt,et,e,j(e,"clsPrefix")),F=P(()=>e.clearable&&!e.disabled&&(K.value||e.active)),z=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ce(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=P(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),I=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var t;const{value:c}=f;if(c){const{value:A}=v;A&&(A.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=R.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:t}=C;t&&(t.style.display="none")}function de(){const{value:t}=C;t&&(t.style.display="inline-block")}be(j(e,"active"),t=>{t||q()}),be(j(e,"pattern"),()=>{e.multiple&&pn(G)});function ue(t){const{onFocus:c}=e;c&&c(t)}function Q(t){const{onBlur:c}=e;c&&c(t)}function J(t){const{onDeleteOption:c}=e;c&&c(t)}function te(t){const{onClear:c}=e;c&&c(t)}function B(t){const{onPatternInput:c}=e;c&&c(t)}function Y(t){var c;(!t.relatedTarget||!(!((c=h.value)===null||c===void 0)&&c.contains(t.relatedTarget)))&&ue(t)}function ce(t){var c;!((c=h.value)===null||c===void 0)&&c.contains(t.relatedTarget)||Q(t)}function re(t){te(t)}function Se(){K.value=!0}function oe(){K.value=!1}function pe(t){!e.active||!e.filterable||t.target!==v.value&&t.preventDefault()}function W(t){J(t)}const Z=S(!1);function o(t){if(t.key==="Backspace"&&!Z.value&&!e.pattern.length){const{selectedOptions:c}=e;c?.length&&W(c[c.length-1])}}let u=null;function $(t){const{value:c}=f;if(c){const A=t.target.value;c.textContent=A,G()}e.ignoreComposition&&Z.value?u=t:B(t)}function le(){Z.value=!0}function me(){Z.value=!1,e.ignoreComposition&&B(u),u=null}function we(t){var c;_.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,t)}function ie(t){var c;_.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,t)}function H(){var t,c;if(e.filterable)_.value=!1,(t=N.value)===null||t===void 0||t.blur(),(c=v.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:A}=i;A?.blur()}else{const{value:A}=k;A?.blur()}}function ye(){var t,c,A;e.filterable?(_.value=!1,(t=N.value)===null||t===void 0||t.focus()):e.multiple?(c=i.value)===null||c===void 0||c.focus():(A=k.value)===null||A===void 0||A.focus()}function ae(){const{value:t}=v;t&&(de(),t.focus())}function Re(){const{value:t}=v;t&&t.blur()}function Te(t){const{value:c}=O;c&&c.setTextContent(`+${t}`)}function Me(){const{value:t}=E;return t}function Pe(){return v.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function ke(){e.active||(he(),fe=window.setTimeout(()=>{I.value&&(w.value=!0)},100))}function ze(){he()}function _e(t){t||(he(),w.value=!1)}be(I,t=>{t||(w.value=!1)}),Xe(()=>{nt(()=>{const t=N.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=_.value?-1:0)})}),mn(h,e.onResize);const{inlineThemeDisabled:xe}=e,ve=P(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:c},self:{fontWeight:A,borderRadius:je,color:Ke,placeholderColor:$e,textColor:Ne,paddingSingle:Ae,paddingMultiple:We,caretColor:He,colorDisabled:Ee,textColorDisabled:se,placeholderColorDisabled:n,colorActive:l,boxShadowFocus:g,boxShadowActive:y,boxShadowHover:p,border:b,borderFocus:m,borderHover:L,borderActive:X,arrowColor:yn,arrowColorDisabled:xn,loadingColor:Cn,colorActiveWarning:On,boxShadowFocusWarning:Fn,boxShadowActiveWarning:Sn,boxShadowHoverWarning:Rn,borderWarning:Tn,borderFocusWarning:Mn,borderHoverWarning:Pn,borderActiveWarning:kn,colorActiveError:zn,boxShadowFocusError:_n,boxShadowActiveError:In,boxShadowHoverError:Bn,borderError:$n,borderFocusError:Nn,borderHoverError:An,borderActiveError:En,clearColor:Dn,clearColorHover:Ln,clearColorPressed:Vn,clearSize:jn,arrowSize:Kn,[ge("height",t)]:Wn,[ge("fontSize",t)]:Hn}}=T.value,De=Ie(Ae),Le=Ie(We);return{"--n-bezier":c,"--n-border":b,"--n-border-active":X,"--n-border-focus":m,"--n-border-hover":L,"--n-border-radius":je,"--n-box-shadow-active":y,"--n-box-shadow-focus":g,"--n-box-shadow-hover":p,"--n-caret-color":He,"--n-color":Ke,"--n-color-active":l,"--n-color-disabled":Ee,"--n-font-size":Hn,"--n-height":Wn,"--n-padding-single-top":De.top,"--n-padding-multiple-top":Le.top,"--n-padding-single-right":De.right,"--n-padding-multiple-right":Le.right,"--n-padding-single-left":De.left,"--n-padding-multiple-left":Le.left,"--n-padding-single-bottom":De.bottom,"--n-padding-multiple-bottom":Le.bottom,"--n-placeholder-color":$e,"--n-placeholder-color-disabled":n,"--n-text-color":Ne,"--n-text-color-disabled":se,"--n-arrow-color":yn,"--n-arrow-color-disabled":xn,"--n-loading-color":Cn,"--n-color-active-warning":On,"--n-box-shadow-focus-warning":Fn,"--n-box-shadow-active-warning":Sn,"--n-box-shadow-hover-warning":Rn,"--n-border-warning":Tn,"--n-border-focus-warning":Mn,"--n-border-hover-warning":Pn,"--n-border-active-warning":kn,"--n-color-active-error":zn,"--n-box-shadow-focus-error":_n,"--n-box-shadow-active-error":In,"--n-box-shadow-hover-error":Bn,"--n-border-error":$n,"--n-border-focus-error":Nn,"--n-border-hover-error":An,"--n-border-active-error":En,"--n-clear-size":jn,"--n-clear-color":Dn,"--n-clear-color-hover":Ln,"--n-clear-color-pressed":Vn,"--n-arrow-size":Kn,"--n-font-weight":A}}),V=xe?tn("internal-selection",P(()=>e.size[0]),ve,e):void 0;return{mergedTheme:T,mergedClearable:F,mergedClsPrefix:a,rtlEnabled:d,patternInputFocused:_,filterablePlaceholder:z,label:D,selected:I,showTagsPanel:w,isComposing:Z,counterRef:O,counterWrapperRef:E,patternInputMirrorRef:f,patternInputRef:v,selfRef:h,multipleElRef:i,singleElRef:k,patternInputWrapperRef:N,overflowRef:R,inputTagElRef:C,handleMouseDown:pe,handleFocusin:Y,handleClear:re,handleMouseEnter:Se,handleMouseLeave:oe,handleDeleteOption:W,handlePatternKeyDown:o,handlePatternInputInput:$,handlePatternInputBlur:ie,handlePatternInputFocus:we,handleMouseEnterCounter:ke,handleMouseLeaveCounter:ze,handleFocusout:ce,handleCompositionEnd:me,handleCompositionStart:le,onPopoverUpdateShow:_e,focus:ye,focusInput:ae,blur:H,blurInput:Re,updateCounter:Te,getCounter:Me,getTail:Pe,renderLabel:e.renderLabel,cssVars:xe?void 0:ve,themeClass:V?.themeClass,onRender:V?.onRender}},render(){const{status:e,multiple:a,size:s,disabled:d,filterable:f,maxTagCount:v,bordered:h,clsPrefix:i,ellipsisTagPopoverProps:k,onRender:N,renderTag:O,renderLabel:E}=this;N?.();const R=v==="responsive",C=typeof v=="number",w=R||C,_=r(it,null,{default:()=>r(lt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,F;return(F=(T=this.$slots).arrow)===null||F===void 0?void 0:F.call(T)}})});let K;if(a){const{labelField:T}=this,F=B=>r("div",{class:`${i}-base-selection-tag-wrapper`,key:B.value},O?O({option:B,handleClose:()=>{this.handleDeleteOption(B)}}):r(Ge,{size:s,closable:!B.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(B)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>E?E(B,!0):Ce(B[T],B,!0)})),z=()=>(C?this.selectedOptions.slice(0,v):this.selectedOptions).map(F),D=f?r("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,I=R?()=>r("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Ge,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let G;if(C){const B=this.selectedOptions.length-v;B>0&&(G=r("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},r(Ge,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${B}`})))}const q=R?f?r(rn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:I,tail:()=>D}):r(rn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:I}):C&&G?z().concat(G):z(),de=w?()=>r("div",{class:`${i}-base-selection-popover`},R?z():this.selectedOptions.map(F)):void 0,ue=w?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},k):null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},r("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,te=f?r("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},q,R?null:D,_):r("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:d?void 0:0},q,_);K=r(ot,null,w?r(tt,Object.assign({},ue,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>te,default:de}):te,J)}else if(f){const T=this.pattern||this.isComposing,F=this.active?!T:!this.selected,z=this.active?!1:this.selected;K=r("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:dn(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),z?r("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},r("div",{class:`${i}-base-selection-overlay__wrapper`},O?O({option:this.selectedOption,handleClose:()=>{}}):E?E(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):null,F?r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else K=r("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${i}-base-selection-input`,title:dn(this.label),key:"input"},r("div",{class:`${i}-base-selection-input__content`},O?O({option:this.selectedOption,handleClose:()=>{}}):E?E(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):r("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),_);return r("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},K,h?r("div",{class:`${i}-base-selection__border`}):null,h?r("div",{class:`${i}-base-selection__state-border`}):null)}});function Ve(e){return e.type==="group"}function wn(e){return e.type==="ignored"}function Je(e,a){try{return!!(1+a.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Mt(e,a){return{getIsGroup:Ve,getIgnored:wn,getKey(d){return Ve(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[a]}}}function Pt(e,a,s,d){if(!a)return e;function f(v){if(!Array.isArray(v))return[];const h=[];for(const i of v)if(Ve(i)){const k=f(i[d]);k.length&&h.push(Object.assign({},i,{[d]:k}))}else{if(wn(i))continue;a(s,i)&&h.push(i)}return h}return f(e)}function kt(e,a,s){const d=new Map;return e.forEach(f=>{Ve(f)?f[s].forEach(v=>{d.set(v[a],v)}):d.set(f[a],f)}),d}const zt=ne([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[gn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),_t=Object.assign(Object.assign({},Oe.props),{to:Ze.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Dt=Fe({name:"Select",props:_t,slots:Object,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:s,namespaceRef:d,inlineThemeDisabled:f}=nn(e),v=Oe("Select","-select",zt,bt,e,a),h=S(e.defaultValue),i=j(e,"value"),k=an(i,h),N=S(!1),O=S(""),E=rt(e,["items","options"]),R=S([]),C=S([]),w=P(()=>C.value.concat(R.value).concat(E.value)),_=P(()=>{const{filter:n}=e;if(n)return n;const{labelField:l,valueField:g}=e;return(y,p)=>{if(!p)return!1;const b=p[l];if(typeof b=="string")return Je(y,b);const m=p[g];return typeof m=="string"?Je(y,m):typeof m=="number"?Je(y,String(m)):!1}}),K=P(()=>{if(e.remote)return E.value;{const{value:n}=w,{value:l}=O;return!l.length||!e.filterable?n:Pt(n,_.value,l,e.childrenField)}}),T=P(()=>{const{valueField:n,childrenField:l}=e,g=Mt(n,l);return at(K.value,g)}),F=P(()=>kt(w.value,e.valueField,e.childrenField)),z=S(!1),D=an(j(e,"show"),z),I=S(null),G=S(null),q=S(null),{localeRef:de}=st("Select"),ue=P(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:de.value.placeholder}),Q=[],J=S(new Map),te=P(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:l,valueField:g}=e;return y=>({[l]:String(y),[g]:y})}return n===!1?!1:l=>Object.assign(n(l),{value:l})});function B(n){const l=e.remote,{value:g}=J,{value:y}=F,{value:p}=te,b=[];return n.forEach(m=>{if(y.has(m))b.push(y.get(m));else if(l&&g.has(m))b.push(g.get(m));else if(p){const L=p(m);L&&b.push(L)}}),b}const Y=P(()=>{if(e.multiple){const{value:n}=k;return Array.isArray(n)?B(n):[]}return null}),ce=P(()=>{const{value:n}=k;return!e.multiple&&!Array.isArray(n)?n===null?null:B([n])[0]||null:null}),re=dt(e),{mergedSizeRef:Se,mergedDisabledRef:oe,mergedStatusRef:pe}=re;function W(n,l){const{onChange:g,"onUpdate:value":y,onUpdateValue:p}=e,{nTriggerFormChange:b,nTriggerFormInput:m}=re;g&&ee(g,n,l),p&&ee(p,n,l),y&&ee(y,n,l),h.value=n,b(),m()}function Z(n){const{onBlur:l}=e,{nTriggerFormBlur:g}=re;l&&ee(l,n),g()}function o(){const{onClear:n}=e;n&&ee(n)}function u(n){const{onFocus:l,showOnFocus:g}=e,{nTriggerFormFocus:y}=re;l&&ee(l,n),y(),g&&ie()}function $(n){const{onSearch:l}=e;l&&ee(l,n)}function le(n){const{onScroll:l}=e;l&&ee(l,n)}function me(){var n;const{remote:l,multiple:g}=e;if(l){const{value:y}=J;if(g){const{valueField:p}=e;(n=Y.value)===null||n===void 0||n.forEach(b=>{y.set(b[p],b)})}else{const p=ce.value;p&&y.set(p[e.valueField],p)}}}function we(n){const{onUpdateShow:l,"onUpdate:show":g}=e;l&&ee(l,n),g&&ee(g,n),z.value=n}function ie(){oe.value||(we(!0),z.value=!0,e.filterable&&Ae())}function H(){we(!1)}function ye(){O.value="",C.value=Q}const ae=S(!1);function Re(){e.filterable&&(ae.value=!0)}function Te(){e.filterable&&(ae.value=!1,D.value||ye())}function Me(){oe.value||(D.value?e.filterable?Ae():H():ie())}function Pe(n){var l,g;!((g=(l=q.value)===null||l===void 0?void 0:l.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(N.value=!1,Z(n),H())}function fe(n){u(n),N.value=!0}function he(){N.value=!0}function ke(n){var l;!((l=I.value)===null||l===void 0)&&l.$el.contains(n.relatedTarget)||(N.value=!1,Z(n),H())}function ze(){var n;(n=I.value)===null||n===void 0||n.focus(),H()}function _e(n){var l;D.value&&(!((l=I.value)===null||l===void 0)&&l.$el.contains(pt(n))||H())}function xe(n){if(!Array.isArray(n))return[];if(te.value)return Array.from(n);{const{remote:l}=e,{value:g}=F;if(l){const{value:y}=J;return n.filter(p=>g.has(p)||y.has(p))}else return n.filter(y=>g.has(y))}}function ve(n){V(n.rawNode)}function V(n){if(oe.value)return;const{tag:l,remote:g,clearFilterAfterSelect:y,valueField:p}=e;if(l&&!g){const{value:b}=C,m=b[0]||null;if(m){const L=R.value;L.length?L.push(m):R.value=[m],C.value=Q}}if(g&&J.value.set(n[p],n),e.multiple){const b=xe(k.value),m=b.findIndex(L=>L===n[p]);if(~m){if(b.splice(m,1),l&&!g){const L=t(n[p]);~L&&(R.value.splice(L,1),y&&(O.value=""))}}else b.push(n[p]),y&&(O.value="");W(b,B(b))}else{if(l&&!g){const b=t(n[p]);~b?R.value=[R.value[b]]:R.value=Q}Ne(),H(),W(n[p],n)}}function t(n){return R.value.findIndex(g=>g[e.valueField]===n)}function c(n){D.value||ie();const{value:l}=n.target;O.value=l;const{tag:g,remote:y}=e;if($(l),g&&!y){if(!l){C.value=Q;return}const{onCreate:p}=e,b=p?p(l):{[e.labelField]:l,[e.valueField]:l},{valueField:m,labelField:L}=e;E.value.some(X=>X[m]===b[m]||X[L]===b[L])||R.value.some(X=>X[m]===b[m]||X[L]===b[L])?C.value=Q:C.value=[b]}}function A(n){n.stopPropagation();const{multiple:l}=e;!l&&e.filterable&&H(),o(),l?W([],[]):W(null,null)}function je(n){!Be(n,"action")&&!Be(n,"empty")&&!Be(n,"header")&&n.preventDefault()}function Ke(n){le(n)}function $e(n){var l,g,y,p,b;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((l=I.value)===null||l===void 0)&&l.isComposing)){if(D.value){const m=(g=q.value)===null||g===void 0?void 0:g.getPendingTmNode();m?ve(m):e.filterable||(H(),Ne())}else if(ie(),e.tag&&ae.value){const m=C.value[0];if(m){const L=m[e.valueField],{value:X}=k;e.multiple&&Array.isArray(X)&&X.includes(L)||V(m)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;D.value&&((y=q.value)===null||y===void 0||y.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;D.value?(p=q.value)===null||p===void 0||p.next():ie();break;case"Escape":D.value&&(xt(n),H()),(b=I.value)===null||b===void 0||b.focus();break}}function Ne(){var n;(n=I.value)===null||n===void 0||n.focus()}function Ae(){var n;(n=I.value)===null||n===void 0||n.focusInput()}function We(){var n;D.value&&((n=G.value)===null||n===void 0||n.syncPosition())}me(),be(j(e,"options"),me);const He={focus:()=>{var n;(n=I.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=I.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=I.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=I.value)===null||n===void 0||n.blurInput()}},Ee=P(()=>{const{self:{menuBoxShadow:n}}=v.value;return{"--n-menu-box-shadow":n}}),se=f?tn("select",void 0,Ee,e):void 0;return Object.assign(Object.assign({},He),{mergedStatus:pe,mergedClsPrefix:a,mergedBordered:s,namespace:d,treeMate:T,isMounted:ut(),triggerRef:I,menuRef:q,pattern:O,uncontrolledShow:z,mergedShow:D,adjustedTo:Ze(e),uncontrolledValue:h,mergedValue:k,followerRef:G,localizedPlaceholder:ue,selectedOption:ce,selectedOptions:Y,mergedSize:Se,mergedDisabled:oe,focused:N,activeWithoutMenuOpen:ae,inlineThemeDisabled:f,onTriggerInputFocus:Re,onTriggerInputBlur:Te,handleTriggerOrMenuResize:We,handleMenuFocus:he,handleMenuBlur:ke,handleMenuTabOut:ze,handleTriggerClick:Me,handleToggle:ve,handleDeleteOption:V,handlePatternInput:c,handleClear:A,handleTriggerBlur:Pe,handleTriggerFocus:fe,handleKeydown:$e,handleMenuAfterLeave:ye,handleMenuClickOutside:_e,handleMenuScroll:Ke,handleMenuKeydown:$e,handleMenuMousedown:je,mergedTheme:v,cssVars:f?void 0:Ee,themeClass:se?.themeClass,onRender:se?.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(ct,null,{default:()=>[r(ft,null,{default:()=>r(Tt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),r(ht,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ze.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(vn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,s;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),vt(r(St,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(s=this.menuProps)===null||s===void 0?void 0:s.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var d,f;return[(f=(d=this.$slots).empty)===null||f===void 0?void 0:f.call(d)]},header:()=>{var d,f;return[(f=(d=this.$slots).header)===null||f===void 0?void 0:f.call(d)]},action:()=>{var d,f;return[(f=(d=this.$slots).action)===null||f===void 0?void 0:f.call(d)]}}),this.displayDirective==="show"?[[gt,this.mergedShow],[sn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[sn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{St as N,Dt as _,Mt as c,Qe as m};
