import{d as H,a4 as F,r as $,i as V,o as U,c as W,k as d,l as m,m as j,w as G,x as X}from"./index-1de3a68b.js";import{_ as Y}from"./TextareaCopyable-4c7847d0.js";import{_ as K}from"./Divider-1cfe394a.js";import{_ as z}from"./FormItem-be347854.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";import"./context-589fe33b.js";function q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}function A(e,t){return Array(t+1).join(e)}function Q(e){return e.replace(/^\n*/,"")}function J(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}var Z=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function E(e){return T(e,Z)}var w=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function B(e){return T(e,w)}function ee(e){return _(e,w)}var O=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function te(e){return T(e,O)}function re(e){return _(e,O)}function T(e,t){return t.indexOf(e.nodeName)>=0}function _(e,t){return e.getElementsByTagName&&t.some(function(r){return e.getElementsByTagName(r).length})}var u={};u.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};u.lineBreak={filter:"br",replacement:function(e,t,r){return r.br+`
`}};u.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,r){var n=Number(t.nodeName.charAt(1));if(r.headingStyle==="setext"&&n<3){var i=A(n===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+A("#",n)+" "+e+`

`}};u.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};u.list={filter:["ul","ol"],replacement:function(e,t){var r=t.parentNode;return r.nodeName==="LI"&&r.lastElementChild===t?`
`+e:`

`+e+`

`}};u.listItem={filter:"li",replacement:function(e,t,r){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=r.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),o=Array.prototype.indexOf.call(i.children,t);n=(a?Number(a)+o:o+1)+".  "}return n+e+(t.nextSibling&&!/\n$/.test(e)?`
`:"")}};u.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,r){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};u.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,r){for(var n=t.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,o=r.fence.charAt(0),s=3,l=new RegExp("^"+o+"{3,}","gm"),c;c=l.exec(a);)c[0].length>=s&&(s=c[0].length+1);var p=A(o,s);return`

`+p+i+`
`+a.replace(/\n$/,"")+`
`+p+`

`}};u.horizontalRule={filter:"hr",replacement:function(e,t,r){return`

`+r.hr+`

`}};u.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var r=t.getAttribute("href");r&&(r=r.replace(/([()])/g,"\\$1"));var n=h(t.getAttribute("title"));return n&&(n=' "'+n.replace(/"/g,'\\"')+'"'),"["+e+"]("+r+n+")"}};u.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,r){var n=t.getAttribute("href"),i=h(t.getAttribute("title"));i&&(i=' "'+i+'"');var a,o;switch(r.linkReferenceStyle){case"collapsed":a="["+e+"][]",o="["+e+"]: "+n+i;break;case"shortcut":a="["+e+"]",o="["+e+"]: "+n+i;break;default:var s=this.references.length+1;a="["+e+"]["+s+"]",o="["+s+"]: "+n+i}return this.references.push(o),a},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};u.emphasis={filter:["em","i"],replacement:function(e,t,r){return e.trim()?r.emDelimiter+e+r.emDelimiter:""}};u.strong={filter:["strong","b"],replacement:function(e,t,r){return e.trim()?r.strongDelimiter+e+r.strongDelimiter:""}};u.code={filter:function(e){var t=e.previousSibling||e.nextSibling,r=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!r},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",r="`",n=e.match(/`+/gm)||[];n.indexOf(r)!==-1;)r=r+"`";return r+t+e+t+r}};u.image={filter:"img",replacement:function(e,t){var r=h(t.getAttribute("alt")),n=t.getAttribute("src")||"",i=h(t.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+r+"]("+n+a+")":""}};function h(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function x(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}x.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=v(this.array,e,this.options))||(t=v(this._keep,e,this.options))||(t=v(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function v(e,t,r){for(var n=0;n<e.length;n++){var i=e[n];if(ne(i,t,r))return i}}function ne(e,t,r){var n=e.filter;if(typeof n=="string"){if(n===t.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,t,r))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function ie(e){var t=e.element,r=e.isBlock,n=e.isVoid,i=e.isPre||function(M){return M.nodeName==="PRE"};if(!(!t.firstChild||i(t))){for(var a=null,o=!1,s=null,l=C(s,t,i);l!==t;){if(l.nodeType===3||l.nodeType===4){var c=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!o&&c[0]===" "&&(c=c.substr(1)),!c){l=N(l);continue}l.data=c,a=l}else if(l.nodeType===1)r(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,o=!1):n(l)||i(l)?(a=null,o=!0):a&&(o=!1);else{l=N(l);continue}var p=C(s,l,i);s=l,l=p}a&&(a.data=a.data.replace(/ $/,""),a.data||N(a))}}function N(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function C(e,t,r){return e&&e.parentNode===t||r(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var y=typeof window<"u"?window:{};function ae(){var e=y.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function le(){var e=function(){};return oe()?e.prototype.parseFromString=function(t){var r=new window.ActiveXObject("htmlfile");return r.designMode="on",r.open(),r.write(t),r.close(),r}:e.prototype.parseFromString=function(t){var r=document.implementation.createHTMLDocument("");return r.open(),r.write(t),r.close(),r},e}function oe(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{y.ActiveXObject&&(e=!0)}return e}var ue=ae()?y.DOMParser:le();function se(e,t){var r;if(typeof e=="string"){var n=ce().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");r=n.getElementById("turndown-root")}else r=e.cloneNode(!0);return ie({element:r,isBlock:E,isVoid:B,isPre:t.preformattedCode?fe:null}),r}var k;function ce(){return k=k||new ue,k}function fe(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function pe(e,t){return e.isBlock=E(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=me(e),e.flankingWhitespace=de(e,t),e}function me(e){return!B(e)&&!te(e)&&/^\s*$/i.test(e.textContent)&&!ee(e)&&!re(e)}function de(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var r=he(e.textContent);return r.leadingAscii&&b("left",e,t)&&(r.leading=r.leadingNonAscii),r.trailingAscii&&b("right",e,t)&&(r.trailing=r.trailingNonAscii),{leading:r.leading,trailing:r.trailing}}function he(e){var t=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function b(e,t,r){var n,i,a;return e==="left"?(n=t.previousSibling,i=/ $/):(n=t.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):r.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!E(n)&&(a=i.test(n.textContent))),a}var ge=Array.prototype.reduce,ve=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function g(e){if(!(this instanceof g))return new g(e);var t={rules:u,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(r,n){return n.isBlock?`

`:""},keepReplacement:function(r,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(r,n){return n.isBlock?`

`+r+`

`:r}};this.options=q({},t,e),this.rules=new x(this.options)}g.prototype={turndown:function(e){if(!Ae(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=S.call(this,new se(e,this.options));return Ne.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return ve.reduce(function(t,r){return t.replace(r[0],r[1])},e)}};function S(e){var t=this;return ge.call(e.childNodes,function(r,n){n=new pe(n,t.options);var i="";return n.nodeType===3?i=n.isCode?n.nodeValue:t.escape(n.nodeValue):n.nodeType===1&&(i=ke.call(t,n)),D(r,i)},"")}function Ne(e){var t=this;return this.rules.forEach(function(r){typeof r.append=="function"&&(e=D(e,r.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function ke(e){var t=this.rules.forNode(e),r=S.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(r=r.trim()),n.leading+t.replacement(r,e,this.options)+n.trailing}function D(e,t){var r=J(e),n=Q(t),i=Math.max(e.length-r.length,t.length-n.length),a=`

`.substring(0,i);return r+a+n}function Ae(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}var R=/highlight-(?:text|source)-([a-z0-9]+)/;function Ee(e){e.addRule("highlightedCodeBlock",{filter:function(t){var r=t.firstChild;return t.nodeName==="DIV"&&R.test(t.className)&&r&&r.nodeName==="PRE"},replacement:function(t,r,n){var i=r.className||"",a=(i.match(R)||[null,""])[1];return`

`+n.fence+a+`
`+r.firstChild.textContent+`
`+n.fence+`

`}})}function Te(e){e.addRule("strikethrough",{filter:["del","s","strike"],replacement:function(t){return"~"+t+"~"}})}var ye=Array.prototype.indexOf,f={};f.tableCell={filter:["th","td"],replacement:function(e,t){return L(e,t)+P(t,"")}};f.tableRow={filter:"tr",replacement:function(e,t){var r="",n={left:":--",right:"--:",center:":-:"};if(Ce(t))for(var i=0;i<t.childNodes.length;i++){var a="---",o=(t.childNodes[i].getAttribute("align")||"").toLowerCase();o&&(a=n[o]||a),r+=L(a,t.childNodes[i])+P(t.childNodes[i],a)}return`
`+e+(r?`
`+r:"")}};f.table={filter:function(e){return e.nodeName==="TABLE"&&!I(e)},replacement:function(e){return e=e.replace(`

`,`
`),`

`+e+`

`}};f.tableSection={filter:["thead","tbody","tfoot"],replacement:function(e){return e}};f.captionSection={filter:"caption",replacement:function(e,t){return t.parentNode.nodeName==="TABLE"&&t.parentNode.childNodes[0]===t?e:""}};function Ce(e){var t=e.parentNode,r=t;return(t.nodeName==="THEAD"||t.nodeName==="TFOOT"||t.nodeName==="TBODY")&&(r=t.parentNode),r.nodeName==="TABLE"&&r.rows[0]===e}function L(e,t){var r=ye.call(t.parentNode.childNodes,t),n=" ";return r===0&&(n="| "),e=e.replace(/\r\n/g,`
`).replace(/\n/g," "),e=e.replace(/\|/g,"\\|"),n+e+" |"}function P(e,t){var r=e.getAttribute("colspan")||1;return r<=1?"":(" "+t+" |").repeat(r-1)}function I(e){for(var t=e.parentNode;t;){if(t.nodeName==="TABLE")return!0;t=t.parentNode}return!1}function be(e){e.keep(function(r){return r.nodeName==="TABLE"&&I(r)});for(var t in f)e.addRule(t,f[t])}function Re(e){e.addRule("taskListItems",{filter:function(t){return t.type==="checkbox"&&t.parentNode.nodeName==="LI"},replacement:function(t,r){return(r.checked?"[x]":"[ ]")+" "}})}function we(e){e.use([Ee,Te,be,Re])}const $e=H({__name:"html-to-markdown",setup(e){const{t}=F(),r=new g;we(r);const n=$(""),i=V(()=>{try{return r.turndown(n.value??"")}catch(a){return a.toString()}});return(a,o)=>{const s=X,l=K,c=z;return U(),W("div",null,[d(s,{value:m(n),"onUpdate:value":o[0]||(o[0]=p=>j(n)?n.value=p:null),multiline:"","raw-text":"",placeholder:m(t)("tools.html-to-markdown.texts.placeholder-your-html-content"),rows:"8",autofocus:"",label:m(t)("tools.html-to-markdown.texts.label-your-html-to-convert-can-paste-from-clipboard"),"paste-html":""},null,8,["value","placeholder","label"]),d(l),d(c,{label:m(t)("tools.html-to-markdown.texts.label-output-markdown")},{default:G(()=>[d(Y,{value:m(i)},null,8,["value"])]),_:1},8,["label"])])}}});export{$e as default};
