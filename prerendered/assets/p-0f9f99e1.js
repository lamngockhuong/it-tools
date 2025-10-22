import{an as v,am as r,d as C,at as x,u as l,aT as b,i as a,ax as z,h as T}from"./index-1de3a68b.js";const y=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),R=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),P=C({name:"P",props:R,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:t}=x(e),h=l("Typography","-p",y,b,e,s),i=a(()=>{const{depth:o}=e,d=o||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:m,pLineHeight:p,pMargin:g,pTextColor:u,[`pTextColor${d}Depth`]:f}}=h.value;return{"--n-bezier":c,"--n-font-size":m,"--n-line-height":p,"--n-margin":g,"--n-text-color":o===void 0?u:f}}),n=t?z("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:s,cssVars:t?void 0:i,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),T("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{P as _};
