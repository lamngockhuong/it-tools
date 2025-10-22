import{A as ee,bp as oe,bq as E,r as k,br as I,bs as A,bt as V,at as P,ay as B,an as _,aq as m,ap as C,am as F,aD as T,d as te,u as $,aQ as ne,au as re,i as U,av as D,ax as ae,bu as ie,h as G,aH as de}from"./index-1de3a68b.js";import{g as se}from"./get-slot-1efb97e5.js";const he={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},H=ee("n-radio-group");function ve(e){const o=oe(H,null),n=E(e,{mergedSize(t){const{size:a}=e;if(a!==void 0)return a;if(o){const{mergedSizeRef:{value:d}}=o;if(d!==void 0)return d}return t?t.mergedSize.value:"medium"},mergedDisabled(t){return!!(e.disabled||o?.disabledRef.value||t?.disabled.value)}}),{mergedSizeRef:b,mergedDisabledRef:r}=n,s=k(null),u=k(null),l=k(e.defaultChecked),f=I(e,"checked"),g=A(f,l),v=V(()=>o?o.valueRef.value===e.value:g.value),R=V(()=>{const{name:t}=e;if(t!==void 0)return t;if(o)return o.nameRef.value}),h=k(!1);function x(){if(o){const{doUpdateValue:t}=o,{value:a}=e;B(t,a)}else{const{onUpdateChecked:t,"onUpdate:checked":a}=e,{nTriggerFormInput:d,nTriggerFormChange:i}=n;t&&B(t,!0),a&&B(a,!0),d(),i(),l.value=!0}}function p(){r.value||v.value||x()}function y(){p(),s.value&&(s.value.checked=v.value)}function z(){h.value=!1}function S(){h.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:P(e).mergedClsPrefixRef,inputRef:s,labelRef:u,mergedName:R,mergedDisabled:r,renderSafeChecked:v,focus:h,mergedSize:b,handleRadioInputChange:y,handleRadioInputBlur:z,handleRadioInputFocus:S}}const ue=_("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[_("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),_("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[_("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),F("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),F("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),T("disabled",`
 cursor: pointer;
 `,[F("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),T("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[F("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function le(e,o,n){var b;const r=[];let s=!1;for(let u=0;u<e.length;++u){const l=e[u],f=(b=l.type)===null||b===void 0?void 0:b.name;f==="RadioButton"&&(s=!0);const g=l.props;if(f!=="RadioButton"){r.push(l);continue}if(u===0)r.push(l);else{const v=r[r.length-1].props,R=o===v.value,h=v.disabled,x=o===g.value,p=g.disabled,y=(R?2:0)+(h?0:1),z=(x?2:0)+(p?0:1),S={[`${n}-radio-group__splitor--disabled`]:h,[`${n}-radio-group__splitor--checked`]:R},t={[`${n}-radio-group__splitor--disabled`]:p,[`${n}-radio-group__splitor--checked`]:x},a=y<z?t:S;r.push(G("div",{class:[`${n}-radio-group__splitor`,a]}),l)}}return{children:r,isButtonGroup:s}}const ce=Object.assign(Object.assign({},$.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ge=te({name:"RadioGroup",props:ce,setup(e){const o=k(null),{mergedSizeRef:n,mergedDisabledRef:b,nTriggerFormChange:r,nTriggerFormInput:s,nTriggerFormBlur:u,nTriggerFormFocus:l}=E(e),{mergedClsPrefixRef:f,inlineThemeDisabled:g,mergedRtlRef:v}=P(e),R=$("Radio","-radio-group",ue,de,e,f),h=k(e.defaultValue),x=I(e,"value"),p=A(x,h);function y(i){const{onUpdateValue:c,"onUpdate:value":w}=e;c&&B(c,i),w&&B(w,i),h.value=i,r(),s()}function z(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||l())}function S(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||u())}ne(H,{mergedClsPrefixRef:f,nameRef:I(e,"name"),valueRef:p,disabledRef:b,mergedSizeRef:n,doUpdateValue:y});const t=re("Radio",v,f),a=U(()=>{const{value:i}=n,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:w,buttonBorderColorActive:j,buttonBorderRadius:M,buttonBoxShadow:N,buttonBoxShadowFocus:K,buttonBoxShadowHover:O,buttonColor:q,buttonColorActive:L,buttonTextColor:Q,buttonTextColorActive:J,buttonTextColorHover:W,opacityDisabled:X,[D("buttonHeight",i)]:Y,[D("fontSize",i)]:Z}}=R.value;return{"--n-font-size":Z,"--n-bezier":c,"--n-button-border-color":w,"--n-button-border-color-active":j,"--n-button-border-radius":M,"--n-button-box-shadow":N,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":O,"--n-button-color":q,"--n-button-color-active":L,"--n-button-text-color":Q,"--n-button-text-color-hover":W,"--n-button-text-color-active":J,"--n-height":Y,"--n-opacity-disabled":X}}),d=g?ae("radio-group",U(()=>n.value[0]),a,e):void 0;return{selfElRef:o,rtlEnabled:t,mergedClsPrefix:f,mergedValue:p,handleFocusout:S,handleFocusin:z,cssVars:g?void 0:a,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:n,handleFocusin:b,handleFocusout:r}=this,{children:s,isButtonGroup:u}=le(ie(se(this)),o,n);return(e=this.onRender)===null||e===void 0||e.call(this),G("div",{onFocusin:b,onFocusout:r,ref:"selfElRef",class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,u&&`${n}-radio-group--button-group`],style:this.cssVars},s)}});export{ge as _,he as r,ve as s};
