import{_ as Cb}from"./TextareaCopyable-4c7847d0.js";import{f6 as Sb,bc as Ob,f7 as Eb,V as _b,f8 as Mb,f9 as Ab,fa as Tb,b as zb,fb as Ra,fc as Cl,b5 as Rb,fd as xu,fe as Pb,ff as ci,fg as Nb,fh as $b,fi as Ib,fj as qb,fk as wu,fl as Wc,fm as Vc,fn as Tv,fo as zv,fp as ws,fq as ig,fr as sg,fs as ks,ft as Xa,fu as lg,fv as cg,fw as Db,fx as Td,fy as sc,fz as gs,fA as Ub,fB as Lb,fC as ug,fD as Bb,fE as Fb,fF as qi,bd as Wb,fG as Bf,fH as Rv,fI as Hc,fJ as Ff,fK as Vb,fL as dg,fM as Hb,fN as Jb,fO as Kb,fP as Yb,R as Za,d as vg,cE as Qb,r as bl,Q as Gb,i as Wf,cS as Xb,c6 as Zb,K as Ku,l as Wa,h as e1,a4 as t1,c4 as n1,o as r1,c as o1,k as ns,m as a1,bn as i1,w as Vf}from"./index-1de3a68b.js";import{p as s1,m as l1,d as c1}from"./jsonquery-52693bba.js";import"./ajv-877b08d9.js";import{j as qo,a5 as ui,a6 as u1,a7 as Pv,a8 as d1,a9 as v1,aa as Nv,ab as $v,ac as Iv,ad as ta,ae as f1,af as fg,ag as p1,a2 as Fl,ah as h1,ai as g1,aj as m1,ak as qv,al as Jc,Q as b1,t as ol,R as pg,F as rs,B as Hf,a1 as y1,am as j1,an as x1,ao as w1,ap as k1,V as C1,aq as S1,ar as O1,as as E1,at as _1,au as M1,Y as A1,av as T1,aw as z1,ax as R1,ay as P1,az as N1,$ as $1,a3 as I1,aA as q1,aB as D1,aC as U1,K as L1,aD as Jf,f as B1,aE as Kf,k as Yu,O as F1,_ as al,aF as W1,aG as V1,aH as H1,aI as J1,aJ as K1,aK as Y1,aL as Q1}from"./index-237b5a2f.js";import{json as G1}from"./index-34e97210.js";import{c as zd,u as Ts,m as X1,a as lc,U as Z1,H as hg}from"./uniqueId-d2406816.js";import{l as Vt}from"./_baseExtremum-6ce8e2c5.js";import{i as fn}from"./isEmpty-b8e03c97.js";import{d as Kc}from"./debounce-b9bd8487.js";import{n as Mr}from"./_baseFlatten-17f0b146.js";import{j as aa}from"./jsonrepair-0c26ebc0.js";import{c as ey,g as ty,h as Ea}from"./groupBy-0c42a5be.js";import{b as ny,c as gg}from"./_castFunction-4513d3e4.js";import{t as ry}from"./toInteger-77d22f0c.js";import{_ as oy}from"./FormItem-be347854.js";import{_ as ay}from"./Divider-1cfe394a.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";import"./ajv-53acda87.js";import"./index-9fb136d3.js";import"./now-e91ce491.js";import"./toNumber-8a64c215.js";import"./context-589fe33b.js";var iy=1,sy=4;function ly(e,t){return t=typeof t=="function"?t:void 0,ny(e,iy|sy,t)}function cy(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}var uy=Sb(!0);const dy=uy;function vy(e,t){return e&&dy(e,t,Ob)}var fy=Eb(vy,!0);const py=fy;function hy(e,t){var n=_b(e)?cy:py;return n(e,gg(t))}function nn(e){var t=e==null?0:e.length;return t?Mb(e,0,-1):[]}function Lt(e,t){return Ab(e,t)}var gy=ey(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});const my=gy;var by=9007199254740991,Qu=4294967295,yy=Math.min;function jy(e,t){if(e=ry(e),e<1||e>by)return[];var n=Qu,o=yy(e,Qu);t=gg(t),e-=Qu;for(var a=Tb(o,t);++n<e;)t(n);return a}function ur(e){return Array.isArray(e)}function br(e){return e!==null&&typeof e=="object"&&(e.constructor===void 0||e.constructor.name==="Object")}function mg(e){return e&&typeof e=="object"?e.op==="add":!1}function bg(e){return e&&typeof e=="object"?e.op==="remove":!1}function Dv(e){return e&&typeof e=="object"?e.op==="replace":!1}function Rd(e){return e&&typeof e=="object"?e.op==="copy":!1}function Ri(e){return e&&typeof e=="object"?e.op==="move":!1}function xy(e,t){return JSON.stringify(e)===JSON.stringify(t)}function wy(e,t){return e===t}function yg(e){return e.slice(0,e.length-1)}function ky(e){return e[e.length-1]}function Cy(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:wy;if(e.length<t.length)return!1;for(let o=0;o<t.length;o++)if(!n(e[o],t[o]))return!1;return!0}function jg(e){return typeof e=="object"&&e!==null}function Uv(e){if(ur(e)){const t=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}else if(br(e)){const t={...e};return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}else return e}function Lv(e,t,n){if(e[t]===n)return e;{const o=Uv(e);return o[t]=n,o}}function Ke(e,t){let n=e,o=0;for(;o<t.length;)br(n)?n=n[t[o]]:ur(n)?n=n[parseInt(t[o])]:n=void 0,o++;return n}function lo(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return n;const a=t[0],i=lo(e?e[a]:void 0,t.slice(1),n,o);if(br(e)||ur(e))return Lv(e,a,i);if(o){const s=Sy.test(a)?[]:{};return s[a]=i,s}else throw new Error("Path does not exist")}const Sy=/^\d+$/;function Bv(e,t,n){if(t.length===0)return n(e);if(!jg(e))throw new Error("Path doesn't exist");const o=t[0],a=Bv(e[o],t.slice(1),n);return Lv(e,o,a)}function ku(e,t){if(t.length===0)return e;if(!jg(e))throw new Error("Path does not exist");if(t.length===1){const a=t[0];if(a in e){const i=Uv(e);return ur(i)&&i.splice(parseInt(a),1),br(i)&&delete i[a],i}else return e}const n=t[0],o=ku(e[n],t.slice(1));return Lv(e,n,o)}function Fv(e,t,n){const o=t.slice(0,t.length-1),a=t[t.length-1];return Bv(e,o,i=>{if(!Array.isArray(i))throw new TypeError("Array expected at path "+JSON.stringify(o));const s=Uv(i);return s.splice(parseInt(a),0,n),s})}function Ao(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:Ao(e[t[0]],t.slice(1))}function fo(e){const t=e.split("/");return t.shift(),t.map(n=>n.replace(/~1/g,"/").replace(/~0/g,"~"))}function ft(e){return e.map(xg).join("")}function xg(e){return"/"+String(e).replace(/~/g,"~0").replace(/\//g,"~1")}function cc(e,t){return e+xg(t)}function Bo(e,t,n){let o=e;for(let a=0;a<t.length;a++){Ry(t[a]);let i=t[a];if(n&&n.before){const c=n.before(o,i);if(c!==void 0){if(c.document!==void 0&&(o=c.document),c.json!==void 0)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"');c.operation!==void 0&&(i=c.operation)}}const s=o,l=Fo(o,i.path);if(i.op==="add")o=_y(o,l,i.value);else if(i.op==="remove")o=Ey(o,l);else if(i.op==="replace")o=Oy(o,l,i.value);else if(i.op==="copy")o=My(o,l,Pd(i.from));else if(i.op==="move")o=Ay(o,l,Pd(i.from));else if(i.op==="test")Ty(o,l,i.value);else throw new Error("Unknown JSONPatch operation "+JSON.stringify(i));if(n&&n.after){const c=n.after(o,i,s);c!==void 0&&(o=c)}}return o}function Oy(e,t,n){return lo(e,t,n)}function Ey(e,t){return ku(e,t)}function _y(e,t,n){return Wl(e,t)?Fv(e,t,n):lo(e,t,n)}function My(e,t,n){const o=Ke(e,n);if(Wl(e,t))return Fv(e,t,o);{const a=Ke(e,n);return lo(e,t,a)}}function Ay(e,t,n){const o=Ke(e,n),a=ku(e,n);return Wl(a,t)?Fv(a,t,o):lo(a,t,o)}function Ty(e,t,n){if(n===void 0)throw new Error(`Test failed: no value provided (path: "${ft(t)}")`);if(!Ao(e,t))throw new Error(`Test failed: path not found (path: "${ft(t)}")`);const o=Ke(e,t);if(!xy(o,n))throw new Error(`Test failed, value differs (path: "${ft(t)}")`)}function Wl(e,t){if(t.length===0)return!1;const n=Ke(e,yg(t));return Array.isArray(n)}function zy(e,t){if(ky(t)!=="-")return t;const n=yg(t),o=Ke(e,n);return n.concat(o.length)}function Ry(e){if(!["add","remove","replace","copy","move","test"].includes(e.op))throw new Error("Unknown JSONPatch op "+JSON.stringify(e.op));if(typeof e.path!="string")throw new Error('Required property "path" missing or not a string in operation '+JSON.stringify(e));if((e.op==="copy"||e.op==="move")&&typeof e.from!="string")throw new Error('Required property "from" missing or not a string in operation '+JSON.stringify(e))}function Fo(e,t){return zy(e,fo(t))}function Pd(e){return fo(e)}function wg(e,t,n){let o=[];return Bo(e,t,{before:(i,s)=>{let l;const c=Fo(i,s.path);if(s.op==="add")l=Sg(i,c);else if(s.op==="remove")l=Cg(i,c);else if(s.op==="replace")l=kg(i,c);else if(s.op==="copy")l=Py(i,c);else if(s.op==="move")l=Ny(i,c,Pd(s.from));else if(s.op==="test")l=[];else throw new Error("Unknown JSONPatch operation "+JSON.stringify(s));let u;if(n&&n.before){const d=n.before(i,s,l);if(d&&d.revertOperations&&(l=d.revertOperations),d&&d.document&&(u=d.document),d&&d.json)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"')}if(o=l.concat(o),u!==void 0)return{document:u}}}),o}function kg(e,t){return[{op:"replace",path:ft(t),value:Ke(e,t)}]}function Cg(e,t){return[{op:"add",path:ft(t),value:Ke(e,t)}]}function Sg(e,t){return Wl(e,t)||!Ao(e,t)?[{op:"remove",path:ft(t)}]:kg(e,t)}function Py(e,t){return Sg(e,t)}function Ny(e,t,n){if(t.length<n.length&&Cy(n,t))return[{op:"replace",path:ft(t),value:e}];const o={op:"move",from:ft(t),path:ft(n)};return!Wl(e,t)&&Ao(e,t)?[o,...Cg(e,t)]:[o]}var Cu={},Yf={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",'"':'"',"/":"/","\\":"\\"},$y="a".charCodeAt();Cu.parse=function(e,t,n){var o={},a=0,i=0,s=0,l=n&&n.bigint&&typeof BigInt<"u";return{data:c("",!0),pointers:o};function c(M,K){u();var J;T(M,"value");var I=b();switch(I){case"t":y("rue"),J=!0;break;case"f":y("alse"),J=!1;break;case"n":y("ull"),J=null;break;case'"':J=d();break;case"[":J=p(M);break;case"{":J=g(M);break;default:j(),"-0123456789".indexOf(I)>=0?J=v():z()}return T(M,"valueEnd"),u(),K&&s<e.length&&z(),J}function u(){e:for(;s<e.length;){switch(e[s]){case" ":i++;break;case"	":i+=4;break;case"\r":i=0;break;case`
`:i=0,a++;break;default:break e}s++}}function d(){for(var M="",K;K=b(),K!='"';)K=="\\"?(K=b(),K in Yf?M+=Yf[K]:K=="u"?M+=x():U()):M+=K;return M}function v(){var M="",K=!0;e[s]=="-"&&(M+=b()),M+=e[s]=="0"?b():C(),e[s]=="."&&(M+=b()+C(),K=!1),(e[s]=="e"||e[s]=="E")&&(M+=b(),(e[s]=="+"||e[s]=="-")&&(M+=b()),M+=C(),K=!1);var J=+M;return l&&K&&(J>Number.MAX_SAFE_INTEGER||J<Number.MIN_SAFE_INTEGER)?BigInt(M):J}function p(M){u();var K=[],J=0;if(b()=="]")return K;for(j();;){var I=M+"/"+J;K.push(c(I)),u();var re=b();if(re=="]")break;re!=","&&U(),u(),J++}return K}function g(M){u();var K={};if(b()=="}")return K;for(j();;){var J=w();b()!='"'&&U();var I=d(),re=M+"/"+Nd(I);O(re,"key",J),T(re,"keyEnd"),u(),b()!=":"&&U(),u(),K[I]=c(re),u();var we=b();if(we=="}")break;we!=","&&U(),u()}return K}function y(M){for(var K=0;K<M.length;K++)b()!==M[K]&&U()}function b(){ae();var M=e[s];return s++,i++,M}function j(){s--,i--}function x(){for(var M=4,K=0;M--;){K<<=4;var J=b().toLowerCase();J>="a"&&J<="f"?K+=J.charCodeAt()-$y+10:J>="0"&&J<="9"?K+=+J:U()}return String.fromCharCode(K)}function C(){for(var M="";e[s]>="0"&&e[s]<="9";)M+=b();if(M.length)return M;ae(),z()}function T(M,K){O(M,K,w())}function O(M,K,J){o[M]=o[M]||{},o[M][K]=J}function w(){return{line:a,column:i,pos:s}}function z(){throw new SyntaxError("Unexpected token "+e[s]+" in JSON at position "+s)}function U(){j(),z()}function ae(){if(s>=e.length)throw new SyntaxError("Unexpected end of JSON input")}};Cu.stringify=function(e,t,n){if(!uc(e))return;var o=0,a,i,s=typeof n=="object"?n.space:n;switch(typeof s){case"number":var l=s>10?10:s<0?0:Math.floor(s);s=l&&O(l," "),a=l,i=l;break;case"string":s=s.slice(0,10),a=0,i=0;for(var c=0;c<s.length;c++){var u=s[c];switch(u){case" ":i++;break;case"	":i+=4;break;case"\r":i=0;break;case`
`:i=0,o++;break;default:throw new Error("whitespace characters not allowed in JSON")}a++}break;default:s=void 0}var d="",v={},p=0,g=0,y=0,b=n&&n.es6&&typeof Map=="function";return j(e,0,""),{json:d,pointers:v};function j(w,z,U){switch(T(U,"value"),typeof w){case"number":case"bigint":case"boolean":x(""+w);break;case"string":x(dc(w));break;case"object":w===null?x("null"):typeof w.toJSON=="function"?x(dc(w.toJSON())):Array.isArray(w)?ae():b?w.constructor.BYTES_PER_ELEMENT?ae():w instanceof Map?K():w instanceof Set?K(!0):M():M()}T(U,"valueEnd");function ae(){if(w.length){x("[");for(var J=z+1,I=0;I<w.length;I++){I&&x(","),C(J);var re=uc(w[I])?w[I]:null,we=U+"/"+I;j(re,J,we)}C(z),x("]")}else x("[]")}function M(){var J=Object.keys(w);if(J.length){x("{");for(var I=z+1,re=0;re<J.length;re++){var we=J[re],se=w[we];if(uc(se)){re&&x(",");var ze=U+"/"+Nd(we);C(I),T(ze,"key"),x(dc(we)),T(ze,"keyEnd"),x(":"),s&&x(" "),j(se,I,ze)}}C(z),x("}")}else x("{}")}function K(J){if(w.size){x("{");for(var I=z+1,re=!0,we=w.entries(),se=we.next();!se.done;){var ze=se.value,Ie=ze[0],Ue=J?!0:ze[1];if(uc(Ue)){re||x(","),re=!1;var ue=U+"/"+Nd(Ie);C(I),T(ue,"key"),x(dc(Ie)),T(ue,"keyEnd"),x(":"),s&&x(" "),j(Ue,I,ue)}se=we.next()}C(z),x("}")}else x("{}")}}function x(w){g+=w.length,y+=w.length,d+=w}function C(w){if(s){for(d+=`
`+O(w,s),p++,g=0;w--;)o?(p+=o,g=i):g+=i,y+=a;y+=1}}function T(w,z){v[w]=v[w]||{},v[w][z]={line:p,column:g,pos:y}}function O(w,z){return Array(w+1).join(z)}};var Iy=["number","bigint","boolean","string","object"];function uc(e){return Iy.indexOf(typeof e)>=0}var qy=/"|\\/g,Dy=/[\b]/g,Uy=/\f/g,Ly=/\n/g,By=/\r/g,Fy=/\t/g;function dc(e){return e=e.replace(qy,"\\$&").replace(Uy,"\\f").replace(Dy,"\\b").replace(Ly,"\\n").replace(By,"\\r").replace(Fy,"\\t"),'"'+e+'"'}var Wy=/~/g,Vy=/\//g;function Nd(e){return e.replace(Wy,"~0").replace(Vy,"~1")}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Hy={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},Jy={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Og=Jy,Eg={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},Ky={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};var _g={exports:{}};/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var Qf=function(e,t){var n,o,a=1,i=0,s=0,l=String.alphabet;function c(u,d,v){if(v){for(n=d;v=c(u,n),v<76&&v>65;)++n;return+u.slice(d-1,n)}return v=l&&l.indexOf(u.charAt(d)),v>-1?v+76:(v=u.charCodeAt(d)||0,v<45||v>127?v:v<46?65:v<48?v-1:v<58?v+18:v<65?v-11:v<91?v+11:v<97?v-37:v<123?v+5:v-63)}if((e+="")!=(t+="")){for(;a;)if(o=c(e,i++),a=c(t,s++),o<76&&a<76&&o>66&&a>66&&(o=c(e,i,i),a=c(t,s,i=n),s=n),o!=a)return o<a?-1:1}return 0};try{_g.exports=Qf}catch{String.naturalCompare=Qf}var Yy=_g.exports;const Qy=zb(Yy);var Gf=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Gy(e,t){return!!(e===t||Gf(e)&&Gf(t))}function Xy(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Gy(e[n],t[n]))return!1;return!0}function Sl(e,t){t===void 0&&(t=Xy);var n=null;function o(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];if(n&&n.lastThis===this&&t(a,n.lastArgs))return n.lastResult;var s=e.apply(this,a);return n={lastResult:s,lastArgs:a,lastThis:this},s}return o.clear=function(){n=null},o}var Zy={};(function(e){(function(t){function n(k){return k!==null?Object.prototype.toString.call(k)==="[object Array]":!1}function o(k){return k!==null?Object.prototype.toString.call(k)==="[object Object]":!1}function a(k,S){if(k===S)return!0;var A=Object.prototype.toString.call(k);if(A!==Object.prototype.toString.call(S))return!1;if(n(k)===!0){if(k.length!==S.length)return!1;for(var $=0;$<k.length;$++)if(a(k[$],S[$])===!1)return!1;return!0}if(o(k)===!0){var oe={};for(var Se in k)if(hasOwnProperty.call(k,Se)){if(a(k[Se],S[Se])===!1)return!1;oe[Se]=!0}for(var Ee in S)if(hasOwnProperty.call(S,Ee)&&oe[Ee]!==!0)return!1;return!0}return!1}function i(k){if(k===""||k===!1||k===null)return!0;if(n(k)&&k.length===0)return!0;if(o(k)){for(var S in k)if(k.hasOwnProperty(S))return!1;return!0}else return!1}function s(k){for(var S=Object.keys(k),A=[],$=0;$<S.length;$++)A.push(k[S[$]]);return A}var l;typeof String.prototype.trimLeft=="function"?l=function(k){return k.trimLeft()}:l=function(k){return k.match(/^\s*(.*)/)[1]};var c=0,u=1,d=2,v=3,p=4,g=5,y=6,b=7,j=8,x=9,C={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},T="EOF",O="UnquotedIdentifier",w="QuotedIdentifier",z="Rbracket",U="Rparen",ae="Comma",M="Colon",K="Rbrace",J="Number",I="Current",re="Expref",we="Pipe",se="Or",ze="And",Ie="EQ",Ue="GT",ue="LT",me="GTE",Me="LTE",et="NE",ke="Flatten",de="Star",xe="Filter",mt="Dot",Gt="Not",fe="Lbrace",H="Lbracket",ge="Lparen",B="Literal",pe={".":mt,"*":de,",":ae,":":M,"{":fe,"}":K,"]":z,"(":ge,")":U,"@":I},G={"<":!0,">":!0,"=":!0,"!":!0},qe={" ":!0,"	":!0,"\n":!0};function te(k){return k>="a"&&k<="z"||k>="A"&&k<="Z"||k==="_"}function L(k){return k>="0"&&k<="9"||k==="-"}function st(k){return k>="a"&&k<="z"||k>="A"&&k<="Z"||k>="0"&&k<="9"||k==="_"}function it(){}it.prototype={tokenize:function(k){var S=[];this._current=0;for(var A,$,oe;this._current<k.length;)if(te(k[this._current]))A=this._current,$=this._consumeUnquotedIdentifier(k),S.push({type:O,value:$,start:A});else if(pe[k[this._current]]!==void 0)S.push({type:pe[k[this._current]],value:k[this._current],start:this._current}),this._current++;else if(L(k[this._current]))oe=this._consumeNumber(k),S.push(oe);else if(k[this._current]==="[")oe=this._consumeLBracket(k),S.push(oe);else if(k[this._current]==='"')A=this._current,$=this._consumeQuotedIdentifier(k),S.push({type:w,value:$,start:A});else if(k[this._current]==="'")A=this._current,$=this._consumeRawStringLiteral(k),S.push({type:B,value:$,start:A});else if(k[this._current]==="`"){A=this._current;var Se=this._consumeLiteral(k);S.push({type:B,value:Se,start:A})}else if(G[k[this._current]]!==void 0)S.push(this._consumeOperator(k));else if(qe[k[this._current]]!==void 0)this._current++;else if(k[this._current]==="&")A=this._current,this._current++,k[this._current]==="&"?(this._current++,S.push({type:ze,value:"&&",start:A})):S.push({type:re,value:"&",start:A});else if(k[this._current]==="|")A=this._current,this._current++,k[this._current]==="|"?(this._current++,S.push({type:se,value:"||",start:A})):S.push({type:we,value:"|",start:A});else{var Ee=new Error("Unknown character:"+k[this._current]);throw Ee.name="LexerError",Ee}return S},_consumeUnquotedIdentifier:function(k){var S=this._current;for(this._current++;this._current<k.length&&st(k[this._current]);)this._current++;return k.slice(S,this._current)},_consumeQuotedIdentifier:function(k){var S=this._current;this._current++;for(var A=k.length;k[this._current]!=='"'&&this._current<A;){var $=this._current;k[$]==="\\"&&(k[$+1]==="\\"||k[$+1]==='"')?$+=2:$++,this._current=$}return this._current++,JSON.parse(k.slice(S,this._current))},_consumeRawStringLiteral:function(k){var S=this._current;this._current++;for(var A=k.length;k[this._current]!=="'"&&this._current<A;){var $=this._current;k[$]==="\\"&&(k[$+1]==="\\"||k[$+1]==="'")?$+=2:$++,this._current=$}this._current++;var oe=k.slice(S+1,this._current-1);return oe.replace("\\'","'")},_consumeNumber:function(k){var S=this._current;this._current++;for(var A=k.length;L(k[this._current])&&this._current<A;)this._current++;var $=parseInt(k.slice(S,this._current));return{type:J,value:$,start:S}},_consumeLBracket:function(k){var S=this._current;return this._current++,k[this._current]==="?"?(this._current++,{type:xe,value:"[?",start:S}):k[this._current]==="]"?(this._current++,{type:ke,value:"[]",start:S}):{type:H,value:"[",start:S}},_consumeOperator:function(k){var S=this._current,A=k[S];if(this._current++,A==="!")return k[this._current]==="="?(this._current++,{type:et,value:"!=",start:S}):{type:Gt,value:"!",start:S};if(A==="<")return k[this._current]==="="?(this._current++,{type:Me,value:"<=",start:S}):{type:ue,value:"<",start:S};if(A===">")return k[this._current]==="="?(this._current++,{type:me,value:">=",start:S}):{type:Ue,value:">",start:S};if(A==="="&&k[this._current]==="=")return this._current++,{type:Ie,value:"==",start:S}},_consumeLiteral:function(k){this._current++;for(var S=this._current,A=k.length,$;k[this._current]!=="`"&&this._current<A;){var oe=this._current;k[oe]==="\\"&&(k[oe+1]==="\\"||k[oe+1]==="`")?oe+=2:oe++,this._current=oe}var Se=l(k.slice(S,this._current));return Se=Se.replace("\\`","`"),this._looksLikeJSON(Se)?$=JSON.parse(Se):$=JSON.parse('"'+Se+'"'),this._current++,$},_looksLikeJSON:function(k){var S='[{"',A=["true","false","null"],$="-0123456789";if(k==="")return!1;if(S.indexOf(k[0])>=0)return!0;if(A.indexOf(k)>=0)return!0;if($.indexOf(k[0])>=0)try{return JSON.parse(k),!0}catch{return!1}else return!1}};var Ce={};Ce[T]=0,Ce[O]=0,Ce[w]=0,Ce[z]=0,Ce[U]=0,Ce[ae]=0,Ce[K]=0,Ce[J]=0,Ce[I]=0,Ce[re]=0,Ce[we]=1,Ce[se]=2,Ce[ze]=3,Ce[Ie]=5,Ce[Ue]=5,Ce[ue]=5,Ce[me]=5,Ce[Me]=5,Ce[et]=5,Ce[ke]=9,Ce[de]=20,Ce[xe]=21,Ce[mt]=40,Ce[Gt]=45,Ce[fe]=50,Ce[H]=55,Ce[ge]=60;function wt(){}wt.prototype={parse:function(k){this._loadTokens(k),this.index=0;var S=this.expression(0);if(this._lookahead(0)!==T){var A=this._lookaheadToken(0),$=new Error("Unexpected token type: "+A.type+", value: "+A.value);throw $.name="ParserError",$}return S},_loadTokens:function(k){var S=new it,A=S.tokenize(k);A.push({type:T,value:"",start:k.length}),this.tokens=A},expression:function(k){var S=this._lookaheadToken(0);this._advance();for(var A=this.nud(S),$=this._lookahead(0);k<Ce[$];)this._advance(),A=this.led($,A),$=this._lookahead(0);return A},_lookahead:function(k){return this.tokens[this.index+k].type},_lookaheadToken:function(k){return this.tokens[this.index+k]},_advance:function(){this.index++},nud:function(k){var S,A,$;switch(k.type){case B:return{type:"Literal",value:k.value};case O:return{type:"Field",name:k.value};case w:var oe={type:"Field",name:k.value};if(this._lookahead(0)===ge)throw new Error("Quoted identifier not allowed for function names.");return oe;case Gt:return A=this.expression(Ce.Not),{type:"NotExpression",children:[A]};case de:return S={type:"Identity"},A=null,this._lookahead(0)===z?A={type:"Identity"}:A=this._parseProjectionRHS(Ce.Star),{type:"ValueProjection",children:[S,A]};case xe:return this.led(k.type,{type:"Identity"});case fe:return this._parseMultiselectHash();case ke:return S={type:ke,children:[{type:"Identity"}]},A=this._parseProjectionRHS(Ce.Flatten),{type:"Projection",children:[S,A]};case H:return this._lookahead(0)===J||this._lookahead(0)===M?(A=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},A)):this._lookahead(0)===de&&this._lookahead(1)===z?(this._advance(),this._advance(),A=this._parseProjectionRHS(Ce.Star),{type:"Projection",children:[{type:"Identity"},A]}):this._parseMultiselectList();case I:return{type:I};case re:return $=this.expression(Ce.Expref),{type:"ExpressionReference",children:[$]};case ge:for(var Se=[];this._lookahead(0)!==U;)this._lookahead(0)===I?($={type:I},this._advance()):$=this.expression(0),Se.push($);return this._match(U),Se[0];default:this._errorToken(k)}},led:function(k,S){var A;switch(k){case mt:var $=Ce.Dot;return this._lookahead(0)!==de?(A=this._parseDotRHS($),{type:"Subexpression",children:[S,A]}):(this._advance(),A=this._parseProjectionRHS($),{type:"ValueProjection",children:[S,A]});case we:return A=this.expression(Ce.Pipe),{type:we,children:[S,A]};case se:return A=this.expression(Ce.Or),{type:"OrExpression",children:[S,A]};case ze:return A=this.expression(Ce.And),{type:"AndExpression",children:[S,A]};case ge:for(var oe=S.name,Se=[],Ee,Z;this._lookahead(0)!==U;)this._lookahead(0)===I?(Ee={type:I},this._advance()):Ee=this.expression(0),this._lookahead(0)===ae&&this._match(ae),Se.push(Ee);return this._match(U),Z={type:"Function",name:oe,children:Se},Z;case xe:var ne=this.expression(0);return this._match(z),this._lookahead(0)===ke?A={type:"Identity"}:A=this._parseProjectionRHS(Ce.Filter),{type:"FilterProjection",children:[S,A,ne]};case ke:var lt={type:ke,children:[S]},tt=this._parseProjectionRHS(Ce.Flatten);return{type:"Projection",children:[lt,tt]};case Ie:case et:case Ue:case me:case ue:case Me:return this._parseComparator(S,k);case H:var Fe=this._lookaheadToken(0);return Fe.type===J||Fe.type===M?(A=this._parseIndexExpression(),this._projectIfSlice(S,A)):(this._match(de),this._match(z),A=this._parseProjectionRHS(Ce.Star),{type:"Projection",children:[S,A]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(k){if(this._lookahead(0)===k)this._advance();else{var S=this._lookaheadToken(0),A=new Error("Expected "+k+", got: "+S.type);throw A.name="ParserError",A}},_errorToken:function(k){var S=new Error("Invalid token ("+k.type+'): "'+k.value+'"');throw S.name="ParserError",S},_parseIndexExpression:function(){if(this._lookahead(0)===M||this._lookahead(1)===M)return this._parseSliceExpression();var k={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(z),k},_projectIfSlice:function(k,S){var A={type:"IndexExpression",children:[k,S]};return S.type==="Slice"?{type:"Projection",children:[A,this._parseProjectionRHS(Ce.Star)]}:A},_parseSliceExpression:function(){for(var k=[null,null,null],S=0,A=this._lookahead(0);A!==z&&S<3;){if(A===M)S++,this._advance();else if(A===J)k[S]=this._lookaheadToken(0).value,this._advance();else{var $=this._lookahead(0),oe=new Error("Syntax error, unexpected token: "+$.value+"("+$.type+")");throw oe.name="Parsererror",oe}A=this._lookahead(0)}return this._match(z),{type:"Slice",children:k}},_parseComparator:function(k,S){var A=this.expression(Ce[S]);return{type:"Comparator",name:S,children:[k,A]}},_parseDotRHS:function(k){var S=this._lookahead(0),A=[O,w,de];if(A.indexOf(S)>=0)return this.expression(k);if(S===H)return this._match(H),this._parseMultiselectList();if(S===fe)return this._match(fe),this._parseMultiselectHash()},_parseProjectionRHS:function(k){var S;if(Ce[this._lookahead(0)]<10)S={type:"Identity"};else if(this._lookahead(0)===H)S=this.expression(k);else if(this._lookahead(0)===xe)S=this.expression(k);else if(this._lookahead(0)===mt)this._match(mt),S=this._parseDotRHS(k);else{var A=this._lookaheadToken(0),$=new Error("Sytanx error, unexpected token: "+A.value+"("+A.type+")");throw $.name="ParserError",$}return S},_parseMultiselectList:function(){for(var k=[];this._lookahead(0)!==z;){var S=this.expression(0);if(k.push(S),this._lookahead(0)===ae&&(this._match(ae),this._lookahead(0)===z))throw new Error("Unexpected token Rbracket")}return this._match(z),{type:"MultiSelectList",children:k}},_parseMultiselectHash:function(){for(var k=[],S=[O,w],A,$,oe,Se;;){if(A=this._lookaheadToken(0),S.indexOf(A.type)<0)throw new Error("Expecting an identifier token, got: "+A.type);if($=A.value,this._advance(),this._match(M),oe=this.expression(0),Se={type:"KeyValuePair",name:$,value:oe},k.push(Se),this._lookahead(0)===ae)this._match(ae);else if(this._lookahead(0)===K){this._match(K);break}}return{type:"MultiSelectHash",children:k}}};function Le(k){this.runtime=k}Le.prototype={search:function(k,S){return this.visit(k,S)},visit:function(k,S){var A,$,oe,Se,Ee,Z,ne,lt,tt,Fe;switch(k.type){case"Field":return S!==null&&o(S)?(Z=S[k.name],Z===void 0?null:Z):null;case"Subexpression":for(oe=this.visit(k.children[0],S),Fe=1;Fe<k.children.length;Fe++)if(oe=this.visit(k.children[1],oe),oe===null)return null;return oe;case"IndexExpression":return ne=this.visit(k.children[0],S),lt=this.visit(k.children[1],ne),lt;case"Index":if(!n(S))return null;var He=k.value;return He<0&&(He=S.length+He),oe=S[He],oe===void 0&&(oe=null),oe;case"Slice":if(!n(S))return null;var Nt=k.children.slice(0),kn=this.computeSliceParams(S.length,Nt),En=kn[0],qt=kn[1],pn=kn[2];if(oe=[],pn>0)for(Fe=En;Fe<qt;Fe+=pn)oe.push(S[Fe]);else for(Fe=En;Fe>qt;Fe+=pn)oe.push(S[Fe]);return oe;case"Projection":var Bt=this.visit(k.children[0],S);if(!n(Bt))return null;for(tt=[],Fe=0;Fe<Bt.length;Fe++)$=this.visit(k.children[1],Bt[Fe]),$!==null&&tt.push($);return tt;case"ValueProjection":if(Bt=this.visit(k.children[0],S),!o(Bt))return null;tt=[];var Yt=s(Bt);for(Fe=0;Fe<Yt.length;Fe++)$=this.visit(k.children[1],Yt[Fe]),$!==null&&tt.push($);return tt;case"FilterProjection":if(Bt=this.visit(k.children[0],S),!n(Bt))return null;var dn=[],pt=[];for(Fe=0;Fe<Bt.length;Fe++)A=this.visit(k.children[2],Bt[Fe]),i(A)||dn.push(Bt[Fe]);for(var on=0;on<dn.length;on++)$=this.visit(k.children[1],dn[on]),$!==null&&pt.push($);return pt;case"Comparator":switch(Se=this.visit(k.children[0],S),Ee=this.visit(k.children[1],S),k.name){case Ie:oe=a(Se,Ee);break;case et:oe=!a(Se,Ee);break;case Ue:oe=Se>Ee;break;case me:oe=Se>=Ee;break;case ue:oe=Se<Ee;break;case Me:oe=Se<=Ee;break;default:throw new Error("Unknown comparator: "+k.name)}return oe;case ke:var Et=this.visit(k.children[0],S);if(!n(Et))return null;var Ge=[];for(Fe=0;Fe<Et.length;Fe++)$=Et[Fe],n($)?Ge.push.apply(Ge,$):Ge.push($);return Ge;case"Identity":return S;case"MultiSelectList":if(S===null)return null;for(tt=[],Fe=0;Fe<k.children.length;Fe++)tt.push(this.visit(k.children[Fe],S));return tt;case"MultiSelectHash":if(S===null)return null;tt={};var Ft;for(Fe=0;Fe<k.children.length;Fe++)Ft=k.children[Fe],tt[Ft.name]=this.visit(Ft.value,S);return tt;case"OrExpression":return A=this.visit(k.children[0],S),i(A)&&(A=this.visit(k.children[1],S)),A;case"AndExpression":return Se=this.visit(k.children[0],S),i(Se)===!0?Se:this.visit(k.children[1],S);case"NotExpression":return Se=this.visit(k.children[0],S),i(Se);case"Literal":return k.value;case we:return ne=this.visit(k.children[0],S),this.visit(k.children[1],ne);case I:return S;case"Function":var Pt=[];for(Fe=0;Fe<k.children.length;Fe++)Pt.push(this.visit(k.children[Fe],S));return this.runtime.callFunction(k.name,Pt);case"ExpressionReference":var _n=k.children[0];return _n.jmespathType=re,_n;default:throw new Error("Unknown node type: "+k.type)}},computeSliceParams:function(k,S){var A=S[0],$=S[1],oe=S[2],Se=[null,null,null];if(oe===null)oe=1;else if(oe===0){var Ee=new Error("Invalid slice, step cannot be 0");throw Ee.name="RuntimeError",Ee}var Z=oe<0;return A===null?A=Z?k-1:0:A=this.capSliceRange(k,A,oe),$===null?$=Z?-1:k:$=this.capSliceRange(k,$,oe),Se[0]=A,Se[1]=$,Se[2]=oe,Se},capSliceRange:function(k,S,A){return S<0?(S+=k,S<0&&(S=A<0?-1:0)):S>=k&&(S=A<0?k-1:k),S}};function Ve(k){this._interpreter=k,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[c]}]},avg:{_func:this._functionAvg,_signature:[{types:[j]}]},ceil:{_func:this._functionCeil,_signature:[{types:[c]}]},contains:{_func:this._functionContains,_signature:[{types:[d,v]},{types:[u]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[d]},{types:[d]}]},floor:{_func:this._functionFloor,_signature:[{types:[c]}]},length:{_func:this._functionLength,_signature:[{types:[d,v,p]}]},map:{_func:this._functionMap,_signature:[{types:[y]},{types:[v]}]},max:{_func:this._functionMax,_signature:[{types:[j,x]}]},merge:{_func:this._functionMerge,_signature:[{types:[p],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[v]},{types:[y]}]},sum:{_func:this._functionSum,_signature:[{types:[j]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[d]},{types:[d]}]},min:{_func:this._functionMin,_signature:[{types:[j,x]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[v]},{types:[y]}]},type:{_func:this._functionType,_signature:[{types:[u]}]},keys:{_func:this._functionKeys,_signature:[{types:[p]}]},values:{_func:this._functionValues,_signature:[{types:[p]}]},sort:{_func:this._functionSort,_signature:[{types:[x,j]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[v]},{types:[y]}]},join:{_func:this._functionJoin,_signature:[{types:[d]},{types:[x]}]},reverse:{_func:this._functionReverse,_signature:[{types:[d,v]}]},to_array:{_func:this._functionToArray,_signature:[{types:[u]}]},to_string:{_func:this._functionToString,_signature:[{types:[u]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[u]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[u],variadic:!0}]}}}Ve.prototype={callFunction:function(k,S){var A=this.functionTable[k];if(A===void 0)throw new Error("Unknown function: "+k+"()");return this._validateArgs(k,S,A._signature),A._func.call(this,S)},_validateArgs:function(k,S,A){var $;if(A[A.length-1].variadic){if(S.length<A.length)throw $=A.length===1?" argument":" arguments",new Error("ArgumentError: "+k+"() takes at least"+A.length+$+" but received "+S.length)}else if(S.length!==A.length)throw $=A.length===1?" argument":" arguments",new Error("ArgumentError: "+k+"() takes "+A.length+$+" but received "+S.length);for(var oe,Se,Ee,Z=0;Z<A.length;Z++){Ee=!1,oe=A[Z].types,Se=this._getTypeName(S[Z]);for(var ne=0;ne<oe.length;ne++)if(this._typeMatches(Se,oe[ne],S[Z])){Ee=!0;break}if(!Ee){var lt=oe.map(function(tt){return C[tt]}).join(",");throw new Error("TypeError: "+k+"() expected argument "+(Z+1)+" to be type "+lt+" but received type "+C[Se]+" instead.")}}},_typeMatches:function(k,S,A){if(S===u)return!0;if(S===x||S===j||S===v){if(S===v)return k===v;if(k===v){var $;S===j?$=c:S===x&&($=d);for(var oe=0;oe<A.length;oe++)if(!this._typeMatches(this._getTypeName(A[oe]),$,A[oe]))return!1;return!0}}else return k===S},_getTypeName:function(k){switch(Object.prototype.toString.call(k)){case"[object String]":return d;case"[object Number]":return c;case"[object Array]":return v;case"[object Boolean]":return g;case"[object Null]":return b;case"[object Object]":return k.jmespathType===re?y:p}},_functionStartsWith:function(k){return k[0].lastIndexOf(k[1])===0},_functionEndsWith:function(k){var S=k[0],A=k[1];return S.indexOf(A,S.length-A.length)!==-1},_functionReverse:function(k){var S=this._getTypeName(k[0]);if(S===d){for(var A=k[0],$="",oe=A.length-1;oe>=0;oe--)$+=A[oe];return $}else{var Se=k[0].slice(0);return Se.reverse(),Se}},_functionAbs:function(k){return Math.abs(k[0])},_functionCeil:function(k){return Math.ceil(k[0])},_functionAvg:function(k){for(var S=0,A=k[0],$=0;$<A.length;$++)S+=A[$];return S/A.length},_functionContains:function(k){return k[0].indexOf(k[1])>=0},_functionFloor:function(k){return Math.floor(k[0])},_functionLength:function(k){return o(k[0])?Object.keys(k[0]).length:k[0].length},_functionMap:function(k){for(var S=[],A=this._interpreter,$=k[0],oe=k[1],Se=0;Se<oe.length;Se++)S.push(A.visit($,oe[Se]));return S},_functionMerge:function(k){for(var S={},A=0;A<k.length;A++){var $=k[A];for(var oe in $)S[oe]=$[oe]}return S},_functionMax:function(k){if(k[0].length>0){var S=this._getTypeName(k[0][0]);if(S===c)return Math.max.apply(Math,k[0]);for(var A=k[0],$=A[0],oe=1;oe<A.length;oe++)$.localeCompare(A[oe])<0&&($=A[oe]);return $}else return null},_functionMin:function(k){if(k[0].length>0){var S=this._getTypeName(k[0][0]);if(S===c)return Math.min.apply(Math,k[0]);for(var A=k[0],$=A[0],oe=1;oe<A.length;oe++)A[oe].localeCompare($)<0&&($=A[oe]);return $}else return null},_functionSum:function(k){for(var S=0,A=k[0],$=0;$<A.length;$++)S+=A[$];return S},_functionType:function(k){switch(this._getTypeName(k[0])){case c:return"number";case d:return"string";case v:return"array";case p:return"object";case g:return"boolean";case y:return"expref";case b:return"null"}},_functionKeys:function(k){return Object.keys(k[0])},_functionValues:function(k){for(var S=k[0],A=Object.keys(S),$=[],oe=0;oe<A.length;oe++)$.push(S[A[oe]]);return $},_functionJoin:function(k){var S=k[0],A=k[1];return A.join(S)},_functionToArray:function(k){return this._getTypeName(k[0])===v?k[0]:[k[0]]},_functionToString:function(k){return this._getTypeName(k[0])===d?k[0]:JSON.stringify(k[0])},_functionToNumber:function(k){var S=this._getTypeName(k[0]),A;return S===c?k[0]:S===d&&(A=+k[0],!isNaN(A))?A:null},_functionNotNull:function(k){for(var S=0;S<k.length;S++)if(this._getTypeName(k[S])!==b)return k[S];return null},_functionSort:function(k){var S=k[0].slice(0);return S.sort(),S},_functionSortBy:function(k){var S=k[0].slice(0);if(S.length===0)return S;var A=this._interpreter,$=k[1],oe=this._getTypeName(A.visit($,S[0]));if([c,d].indexOf(oe)<0)throw new Error("TypeError");for(var Se=this,Ee=[],Z=0;Z<S.length;Z++)Ee.push([Z,S[Z]]);Ee.sort(function(lt,tt){var Fe=A.visit($,lt[1]),He=A.visit($,tt[1]);if(Se._getTypeName(Fe)!==oe)throw new Error("TypeError: expected "+oe+", received "+Se._getTypeName(Fe));if(Se._getTypeName(He)!==oe)throw new Error("TypeError: expected "+oe+", received "+Se._getTypeName(He));return Fe>He?1:Fe<He?-1:lt[0]-tt[0]});for(var ne=0;ne<Ee.length;ne++)S[ne]=Ee[ne][1];return S},_functionMaxBy:function(k){for(var S=k[1],A=k[0],$=this.createKeyFunction(S,[c,d]),oe=-1/0,Se,Ee,Z=0;Z<A.length;Z++)Ee=$(A[Z]),Ee>oe&&(oe=Ee,Se=A[Z]);return Se},_functionMinBy:function(k){for(var S=k[1],A=k[0],$=this.createKeyFunction(S,[c,d]),oe=1/0,Se,Ee,Z=0;Z<A.length;Z++)Ee=$(A[Z]),Ee<oe&&(oe=Ee,Se=A[Z]);return Se},createKeyFunction:function(k,S){var A=this,$=this._interpreter,oe=function(Se){var Ee=$.visit(k,Se);if(S.indexOf(A._getTypeName(Ee))<0){var Z="TypeError: expected one of "+S+", received "+A._getTypeName(Ee);throw new Error(Z)}return Ee};return oe}};function ht(k){var S=new wt,A=S.parse(k);return A}function De(k){var S=new it;return S.tokenize(k)}function Mt(k,S){var A=new wt,$=new Ve,oe=new Le($);$._interpreter=oe;var Se=A.parse(S);return oe.search(Se,k)}t.tokenize=De,t.compile=ht,t.search=Mt,t.strictDeepEqual=a})(e)})(Zy);class ej{add(t,n,o){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],n&&this[a][o?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(o){o.call(n&&n.context?n.context:n,n)})}}class tj{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];n.forEach(a=>{if(typeof a!="object"||!a.name||!a.init)throw new Error("Invalid JSEP plugin format");this.registered[a.name]||(a.init(this.jsep),this.registered[a.name]=a)})}}class le{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+le.version}static addUnaryOp(t){return le.max_unop_len=Math.max(t.length,le.max_unop_len),le.unary_ops[t]=1,le}static addBinaryOp(t,n,o){return le.max_binop_len=Math.max(t.length,le.max_binop_len),le.binary_ops[t]=n,o?le.right_associative.add(t):le.right_associative.delete(t),le}static addIdentifierChar(t){return le.additional_identifier_chars.add(t),le}static addLiteral(t,n){return le.literals[t]=n,le}static removeUnaryOp(t){return delete le.unary_ops[t],t.length===le.max_unop_len&&(le.max_unop_len=le.getMaxKeyLen(le.unary_ops)),le}static removeAllUnaryOps(){return le.unary_ops={},le.max_unop_len=0,le}static removeIdentifierChar(t){return le.additional_identifier_chars.delete(t),le}static removeBinaryOp(t){return delete le.binary_ops[t],t.length===le.max_binop_len&&(le.max_binop_len=le.getMaxKeyLen(le.binary_ops)),le.right_associative.delete(t),le}static removeAllBinaryOps(){return le.binary_ops={},le.max_binop_len=0,le}static removeLiteral(t){return delete le.literals[t],le}static removeAllLiterals(){return le.literals={},le}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new le(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(n=>n.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return le.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!le.binary_ops[String.fromCharCode(t)]||le.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return le.isIdentifierStart(t)||le.isDecimalDigit(t)}throwError(t){const n=new Error(t+" at character "+this.index);throw n.index=this.index,n.description=t,n}runHook(t,n){if(le.hooks[t]){const o={context:this,node:n};return le.hooks.run(t,o),o.node}return n}searchHook(t){if(le.hooks[t]){const n={context:this};return le.hooks[t].find(function(o){return o.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let t=this.code;for(;t===le.SPACE_CODE||t===le.TAB_CODE||t===le.LF_CODE||t===le.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),n=t.length===1?t[0]:{type:le.COMPOUND,body:t};return this.runHook("after-all",n)}gobbleExpressions(t){let n=[],o,a;for(;this.index<this.expr.length;)if(o=this.code,o===le.SEMCOL_CODE||o===le.COMMA_CODE)this.index++;else if(a=this.gobbleExpression())n.push(a);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return n}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,le.max_binop_len),n=t.length;for(;n>0;){if(le.binary_ops.hasOwnProperty(t)&&(!le.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!le.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=n,t;t=t.substr(0,--n)}return!1}gobbleBinaryExpression(){let t,n,o,a,i,s,l,c,u;if(s=this.gobbleToken(),!s||(n=this.gobbleBinaryOp(),!n))return s;for(i={value:n,prec:le.binaryPrecedence(n),right_a:le.right_associative.has(n)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+n),a=[s,i,l];n=this.gobbleBinaryOp();){if(o=le.binaryPrecedence(n),o===0){this.index-=n.length;break}i={value:n,prec:o,right_a:le.right_associative.has(n)},u=n;const d=v=>i.right_a&&v.right_a?o>v.prec:o<=v.prec;for(;a.length>2&&d(a[a.length-2]);)l=a.pop(),n=a.pop().value,s=a.pop(),t={type:le.BINARY_EXP,operator:n,left:s,right:l},a.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+u),a.push(i,t)}for(c=a.length-1,t=a[c];c>1;)t={type:le.BINARY_EXP,operator:a[c-1].value,left:a[c-2],right:t},c-=2;return t}gobbleToken(){let t,n,o,a;if(this.gobbleSpaces(),a=this.searchHook("gobble-token"),a)return this.runHook("after-token",a);if(t=this.code,le.isDecimalDigit(t)||t===le.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===le.SQUOTE_CODE||t===le.DQUOTE_CODE)a=this.gobbleStringLiteral();else if(t===le.OBRACK_CODE)a=this.gobbleArray();else{for(n=this.expr.substr(this.index,le.max_unop_len),o=n.length;o>0;){if(le.unary_ops.hasOwnProperty(n)&&(!le.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!le.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=o;const i=this.gobbleToken();return i||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:le.UNARY_EXP,operator:n,argument:i,prefix:!0})}n=n.substr(0,--o)}le.isIdentifierStart(t)?(a=this.gobbleIdentifier(),le.literals.hasOwnProperty(a.name)?a={type:le.LITERAL,value:le.literals[a.name],raw:a.name}:a.name===le.this_str&&(a={type:le.THIS_EXP})):t===le.OPAREN_CODE&&(a=this.gobbleGroup())}return a?(a=this.gobbleTokenProperty(a),this.runHook("after-token",a)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let n=this.code;for(;n===le.PERIOD_CODE||n===le.OBRACK_CODE||n===le.OPAREN_CODE||n===le.QUMARK_CODE;){let o;if(n===le.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==le.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===le.OBRACK_CODE?(t={type:le.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),n=this.code,n!==le.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):n===le.OPAREN_CODE?t={type:le.CALL_EXP,arguments:this.gobbleArguments(le.CPAREN_CODE),callee:t}:(n===le.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:le.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),n=this.code}return t}gobbleNumericLiteral(){let t="",n,o;for(;le.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===le.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);le.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(n=this.char,n==="e"||n==="E"){for(t+=this.expr.charAt(this.index++),n=this.char,(n==="+"||n==="-")&&(t+=this.expr.charAt(this.index++));le.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);le.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,le.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===le.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===le.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:le.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const n=this.index,o=this.expr.charAt(this.index++);let a=!1;for(;this.index<this.expr.length;){let i=this.expr.charAt(this.index++);if(i===o){a=!0;break}else if(i==="\\")switch(i=this.expr.charAt(this.index++),i){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=i}else t+=i}return a||this.throwError('Unclosed quote after "'+t+'"'),{type:le.LITERAL,value:t,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let t=this.code,n=this.index;for(le.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,le.isIdentifierPart(t));)this.index++;return{type:le.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(t){const n=[];let o=!1,a=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let i=this.code;if(i===t){o=!0,this.index++,t===le.CPAREN_CODE&&a&&a>=n.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(i===le.COMMA_CODE){if(this.index++,a++,a!==n.length){if(t===le.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===le.CBRACK_CODE)for(let s=n.length;s<a;s++)n.push(null)}}else if(n.length!==a&&a!==0)this.throwError("Expected comma");else{const s=this.gobbleExpression();(!s||s.type===le.COMPOUND)&&this.throwError("Expected comma"),n.push(s)}}return o||this.throwError("Expected "+String.fromCharCode(t)),n}gobbleGroup(){this.index++;let t=this.gobbleExpressions(le.CPAREN_CODE);if(this.code===le.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:le.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:le.ARRAY_EXP,elements:this.gobbleArguments(le.CBRACK_CODE)}}}const nj=new ej;Object.assign(le,{hooks:nj,plugins:new tj(le),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});le.max_unop_len=le.getMaxKeyLen(le.unary_ops);le.max_binop_len=le.getMaxKeyLen(le.binary_ops);const di=e=>new le(e).parse(),rj=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(le).filter(e=>!rj.includes(e)&&di[e]===void 0).forEach(e=>{di[e]=le[e]});di.Jsep=le;const oj="ConditionalExpression";var aj={name:"ternary",init(e){e.hooks.add("after-expression",function(n){if(n.node&&this.code===e.QUMARK_CODE){this.index++;const o=n.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const i=this.gobbleExpression();if(i||this.throwError("Expected expression"),n.node={type:oj,test:o,consequent:a,alternate:i},o.operator&&e.binary_ops[o.operator]<=.9){let s=o;for(;s.right.operator&&e.binary_ops[s.right.operator]<=.9;)s=s.right;n.node.test=s.right,s.right=n.node,n.node=o}}else this.throwError("Expected :")}})}};di.plugins.register(aj);const Xf=47,ij=92;var sj={name:"regex",init(e){e.hooks.add("gobble-token",function(n){if(this.code===Xf){const o=++this.index;let a=!1;for(;this.index<this.expr.length;){if(this.code===Xf&&!a){const i=this.expr.slice(o,this.index);let s="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)s+=this.char;else break}let l;try{l=new RegExp(i,s)}catch(c){this.throwError(c.message)}return n.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},n.node=this.gobbleTokenProperty(n.node),n.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&(a=!1),this.index+=this.code===ij?2:1}this.throwError("Unclosed Regex")}})}};const Gu=43,lj=45,vs={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[Gu,lj],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];vs.assignmentOperators.forEach(o=>e.addBinaryOp(o,vs.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(a){const i=this.code;vs.updateOperators.some(s=>s===i&&s===this.expr.charCodeAt(this.index+1))&&(this.index+=2,a.node={type:"UpdateExpression",operator:i===Gu?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!a.node.argument||!t.includes(a.node.argument.type))&&this.throwError(`Unexpected ${a.node.operator}`))}),e.hooks.add("after-token",function(a){if(a.node){const i=this.code;vs.updateOperators.some(s=>s===i&&s===this.expr.charCodeAt(this.index+1))&&(t.includes(a.node.type)||this.throwError(`Unexpected ${a.node.operator}`),this.index+=2,a.node={type:"UpdateExpression",operator:i===Gu?"++":"--",argument:a.node,prefix:!1})}}),e.hooks.add("after-expression",function(a){a.node&&n(a.node)});function n(o){vs.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",n(o.left),n(o.right)):o.operator||Object.values(o).forEach(a=>{a&&typeof a=="object"&&n(a)})}}};di.plugins.register(sj,vs);di.addUnaryOp("typeof");di.addLiteral("null",null);di.addLiteral("undefined",void 0);class Zf{constructor(t,n,o){this.from=t,this.to=n,this.diagnostic=o}}class Mi{constructor(t,n,o){this.diagnostics=t,this.panel=n,this.selected=o}static init(t,n,o){let a=t,i=o.facet(ra).markerFilter;i&&(a=i(a,o));let s=t.slice().sort((v,p)=>v.from-p.from||v.to-p.to),l=new qv,c=[],u=0;for(let v=0;;){let p=v==s.length?null:s[v];if(!p&&!c.length)break;let g,y;for(c.length?(g=u,y=c.reduce((j,x)=>Math.min(j,x.to),p&&p.from>g?p.from:1e8)):(g=p.from,y=p.to,c.push(p),v++);v<s.length;){let j=s[v];if(j.from==g&&(j.to>j.from||j.to==g))c.push(j),v++,y=Math.min(j.to,y);else{y=Math.min(j.from,y);break}}let b=Ng(c);if(c.some(j=>j.from==j.to||j.from==j.to-1&&o.doc.lineAt(j.from).to==j.from))l.add(g,g,ui.widget({widget:new bj(b),diagnostics:c.slice()}));else{let j=c.reduce((x,C)=>C.markClass?x+" "+C.markClass:x,"");l.add(g,y,ui.mark({class:"cm-lintRange cm-lintRange-"+b+j,diagnostics:c.slice(),inclusiveEnd:c.some(x=>x.to>y)}))}u=y;for(let j=0;j<c.length;j++)c[j].to<=u&&c.splice(j--,1)}let d=l.finish();return new Mi(d,n,zs(d))}}function zs(e,t=null,n=0){let o=null;return e.between(n,1e9,(a,i,{spec:s})=>{if(!(t&&s.diagnostics.indexOf(t)<0))if(!o)o=new Zf(a,i,t||s.diagnostics[0]);else{if(s.diagnostics.indexOf(o.diagnostic)<0)return!1;o=new Zf(o.from,i,o.diagnostic)}}),o}function Mg(e,t){let n=t.pos,o=t.end||n,a=e.state.facet(ra).hideOn(e,n,o);if(a!=null)return a;let i=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(s=>s.is(Su))||e.changes.touchesRange(i.from,Math.max(i.to,o)))}function Ag(e,t){return e.field(wo,!1)?t:t.concat(Fl.appendConfig.of(qg))}function cj(e,t){return{effects:Ag(e,[Su.of(t)])}}const Su=Fl.define(),Wv=Fl.define(),Tg=Fl.define(),wo=Pv.define({create(){return new Mi(ui.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),o=null,a=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);o=zs(n,e.selected.diagnostic,i)||zs(n,null,i)}!n.size&&a&&t.state.facet(ra).autoPanel&&(a=null),e=new Mi(n,a,o)}for(let n of t.effects)if(n.is(Su)){let o=t.state.facet(ra).autoPanel?n.value.length?Ol.open:null:e.panel;e=Mi.init(n.value,o,t.state)}else n.is(Wv)?e=new Mi(e.diagnostics,n.value?Ol.open:null,e.selected):n.is(Tg)&&(e=new Mi(e.diagnostics,e.panel,n.value));return e},provide:e=>[d1.from(e,t=>t.panel),qo.decorations.from(e,t=>t.diagnostics)]}),uj=ui.mark({class:"cm-lintRange cm-lintRange-active"});function dj(e,t,n){let{diagnostics:o}=e.state.field(wo),a,i=-1,s=-1;o.between(t-(n<0?1:0),t+(n>0?1:0),(c,u,{spec:d})=>{if(t>=c&&t<=u&&(c==u||(t>c||n>0)&&(t<u||n<0)))return a=d.diagnostics,i=c,s=u,!1});let l=e.state.facet(ra).tooltipFilter;return a&&l&&(a=l(a,e.state)),a?{pos:i,end:s,above:e.state.doc.lineAt(i).to<s,create(){return{dom:zg(e,a)}}}:null}function zg(e,t){return ta("ul",{class:"cm-tooltip-lint"},t.map(n=>Pg(e,n,!1)))}const vj=e=>{let t=e.state.field(wo,!1);(!t||!t.panel)&&e.dispatch({effects:Ag(e.state,[Wv.of(!0)])});let n=v1(e,Ol.open);return n&&n.dom.querySelector(".cm-panel-lint ul").focus(),!0},ep=e=>{let t=e.state.field(wo,!1);return!t||!t.panel?!1:(e.dispatch({effects:Wv.of(!1)}),!0)},fj=e=>{let t=e.state.field(wo,!1);if(!t)return!1;let n=e.state.selection.main,o=t.diagnostics.iter(n.to+1);return!o.value&&(o=t.diagnostics.iter(0),!o.value||o.from==n.from&&o.to==n.to)?!1:(e.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0}),!0)},pj=[{key:"Mod-Shift-m",run:vj,preventDefault:!0},{key:"F8",run:fj}],hj=Nv.fromClass(class{constructor(e){this.view=e,this.timeout=-1,this.set=!0;let{delay:t}=e.state.facet(ra);this.lintTime=Date.now()+t,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,t)}run(){clearTimeout(this.timeout);let e=Date.now();if(e<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-e);else{this.set=!1;let{state:t}=this.view,{sources:n}=t.facet(ra);n.length&&gj(n.map(o=>Promise.resolve(o(this.view))),o=>{this.view.state.doc==t.doc&&this.view.dispatch(cj(this.view.state,o.reduce((a,i)=>a.concat(i))))},o=>{h1(this.view.state,o)})}}update(e){let t=e.state.facet(ra);(e.docChanged||t!=e.startState.facet(ra)||t.needsRefresh&&t.needsRefresh(e))&&(this.lintTime=Date.now()+t.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,t.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}});function gj(e,t,n){let o=[],a=-1;for(let i of e)i.then(s=>{o.push(s),clearTimeout(a),o.length==e.length?t(o):a=setTimeout(()=>t(o),200)},n)}const ra=$v.define({combine(e){return Object.assign({sources:e.map(t=>t.source).filter(t=>t!=null)},Iv(e.map(t=>t.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{needsRefresh:(t,n)=>t?n?o=>t(o)||n(o):t:n}))}});function mj(e,t={}){return[ra.of({source:e,config:t}),hj,qg]}function Rg(e){let t=[];if(e)e:for(let{name:n}of e){for(let o=0;o<n.length;o++){let a=n[o];if(/[a-zA-Z]/.test(a)&&!t.some(i=>i.toLowerCase()==a.toLowerCase())){t.push(a);continue e}}t.push("")}return t}function Pg(e,t,n){var o;let a=n?Rg(t.actions):[];return ta("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},ta("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage(e):t.message),(o=t.actions)===null||o===void 0?void 0:o.map((i,s)=>{let l=!1,c=p=>{if(p.preventDefault(),l)return;l=!0;let g=zs(e.state.field(wo).diagnostics,t);g&&i.apply(e,g.from,g.to)},{name:u}=i,d=a[s]?u.indexOf(a[s]):-1,v=d<0?u:[u.slice(0,d),ta("u",u.slice(d,d+1)),u.slice(d+1)];return ta("button",{type:"button",class:"cm-diagnosticAction",onclick:c,onmousedown:c,"aria-label":` Action: ${u}${d<0?"":` (access key "${a[s]})"`}.`},v)}),t.source&&ta("div",{class:"cm-diagnosticSource"},t.source))}class bj extends g1{constructor(t){super(),this.sev=t}eq(t){return t.sev==this.sev}toDOM(){return ta("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class tp{constructor(t,n){this.diagnostic=n,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=Pg(t,n,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class Ol{constructor(t){this.view=t,this.items=[];let n=a=>{if(a.keyCode==27)ep(this.view),this.view.focus();else if(a.keyCode==38||a.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(a.keyCode==40||a.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(a.keyCode==36)this.moveSelection(0);else if(a.keyCode==35)this.moveSelection(this.items.length-1);else if(a.keyCode==13)this.view.focus();else if(a.keyCode>=65&&a.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:i}=this.items[this.selectedIndex],s=Rg(i.actions);for(let l=0;l<s.length;l++)if(s[l].toUpperCase().charCodeAt(0)==a.keyCode){let c=zs(this.view.state.field(wo).diagnostics,i);c&&i.actions[l].apply(t,c.from,c.to)}}else return;a.preventDefault()},o=a=>{for(let i=0;i<this.items.length;i++)this.items[i].dom.contains(a.target)&&this.moveSelection(i)};this.list=ta("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:n,onclick:o}),this.dom=ta("div",{class:"cm-panel-lint"},this.list,ta("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>ep(this.view)},"×")),this.update()}get selectedIndex(){let t=this.view.state.field(wo).selected;if(!t)return-1;for(let n=0;n<this.items.length;n++)if(this.items[n].diagnostic==t.diagnostic)return n;return-1}update(){let{diagnostics:t,selected:n}=this.view.state.field(wo),o=0,a=!1,i=null,s=new Set;for(t.between(0,this.view.state.doc.length,(l,c,{spec:u})=>{for(let d of u.diagnostics){if(s.has(d))continue;s.add(d);let v=-1,p;for(let g=o;g<this.items.length;g++)if(this.items[g].diagnostic==d){v=g;break}v<0?(p=new tp(this.view,d),this.items.splice(o,0,p),a=!0):(p=this.items[v],v>o&&(this.items.splice(o,v-o),a=!0)),n&&p.diagnostic==n.diagnostic?p.dom.hasAttribute("aria-selected")||(p.dom.setAttribute("aria-selected","true"),i=p):p.dom.hasAttribute("aria-selected")&&p.dom.removeAttribute("aria-selected"),o++}});o<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)a=!0,this.items.pop();this.items.length==0&&(this.items.push(new tp(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),a=!0),i?(this.list.setAttribute("aria-activedescendant",i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:l,panel:c})=>{let u=c.height/this.list.offsetHeight;l.top<c.top?this.list.scrollTop-=(c.top-l.top)/u:l.bottom>c.bottom&&(this.list.scrollTop+=(l.bottom-c.bottom)/u)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),a&&this.sync()}sync(){let t=this.list.firstChild;function n(){let o=t;t=o.nextSibling,o.remove()}for(let o of this.items)if(o.dom.parentNode==this.list){for(;t!=o.dom;)n();t=o.dom.nextSibling}else this.list.insertBefore(o.dom,t);for(;t;)n()}moveSelection(t){if(this.selectedIndex<0)return;let n=this.view.state.field(wo),o=zs(n.diagnostics,this.items[t].diagnostic);o&&this.view.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0,effects:Tg.of(o)})}static open(t){return new Ol(t)}}function Tc(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function vc(e){return Tc(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const yj=qo.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:vc("#d11")},".cm-lintRange-warning":{backgroundImage:vc("orange")},".cm-lintRange-info":{backgroundImage:vc("#999")},".cm-lintRange-hint":{backgroundImage:vc("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});function jj(e){return e=="error"?4:e=="warning"?3:e=="info"?2:1}function Ng(e){let t="hint",n=1;for(let o of e){let a=jj(o.severity);a>n&&(n=a,t=o.severity)}return t}class $g extends m1{constructor(t){super(),this.diagnostics=t,this.severity=Ng(t)}toDOM(t){let n=document.createElement("div");n.className="cm-lint-marker cm-lint-marker-"+this.severity;let o=this.diagnostics,a=t.state.facet(Ou).tooltipFilter;return a&&(o=a(o,t.state)),o.length&&(n.onmouseover=()=>wj(t,n,o)),n}}function xj(e,t){let n=o=>{let a=t.getBoundingClientRect();if(!(o.clientX>a.left-10&&o.clientX<a.right+10&&o.clientY>a.top-10&&o.clientY<a.bottom+10)){for(let i=o.target;i;i=i.parentNode)if(i.nodeType==1&&i.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",n),e.state.field(Ig)&&e.dispatch({effects:Vv.of(null)})}};window.addEventListener("mousemove",n)}function wj(e,t,n){function o(){let s=e.elementAtHeight(t.getBoundingClientRect().top+5-e.documentTop);e.coordsAtPos(s.from)&&e.dispatch({effects:Vv.of({pos:s.from,above:!1,clip:!1,create(){return{dom:zg(e,n),getCoords:()=>t.getBoundingClientRect()}}})}),t.onmouseout=t.onmousemove=null,xj(e,t)}let{hoverTime:a}=e.state.facet(Ou),i=setTimeout(o,a);t.onmouseout=()=>{clearTimeout(i),t.onmouseout=t.onmousemove=null},t.onmousemove=()=>{clearTimeout(i),i=setTimeout(o,a)}}function kj(e,t){let n=Object.create(null);for(let a of t){let i=e.lineAt(a.from);(n[i.from]||(n[i.from]=[])).push(a)}let o=[];for(let a in n)o.push(new $g(n[a]).range(+a));return fg.of(o,!0)}const Cj=f1({class:"cm-gutter-lint",markers:e=>e.state.field($d),widgetMarker:(e,t,n)=>{let o=[];return e.state.field($d).between(n.from,n.to,(a,i,s)=>{a>n.from&&a<n.to&&o.push(...s.diagnostics)}),o.length?new $g(o):null}}),$d=Pv.define({create(){return fg.empty},update(e,t){e=e.map(t.changes);let n=t.state.facet(Ou).markerFilter;for(let o of t.effects)if(o.is(Su)){let a=o.value;n&&(a=n(a||[],t.state)),e=kj(t.state.doc,a.slice(0))}return e}}),Vv=Fl.define(),Ig=Pv.define({create(){return null},update(e,t){return e&&t.docChanged&&(e=Mg(t,e)?null:Object.assign(Object.assign({},e),{pos:t.changes.mapPos(e.pos)})),t.effects.reduce((n,o)=>o.is(Vv)?o.value:n,e)},provide:e=>p1.from(e)}),Sj=qo.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:Tc('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:Tc('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:Tc('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),qg=[wo,qo.decorations.compute([wo],e=>{let{selected:t,panel:n}=e.field(wo);return!t||!n||t.from==t.to?ui.none:ui.set([uj.range(t.from,t.to)])}),u1(dj,{hideOn:Mg}),yj],Ou=$v.define({combine(e){return Iv(e,{hoverTime:300,markerFilter:null,tooltipFilter:null})}});function Oj(e={}){return[Ou.of(e),$d,Cj,Sj,Ig]}function Ej(e,t=e.state){const n=new Set;for(const{from:o,to:a}of e.visibleRanges){let i=o;for(;i<=a;){const s=t.doc.lineAt(i);n.has(s)||n.add(s),i=s.to+1}}return n}function Id(e){const t=e.selection.main.head;return e.doc.lineAt(t)}function np(e,t){let n=0;e:for(let o=0;o<e.length;o++)switch(e[o]){case" ":case" ":{n+=1;continue e}case"	":{n+=t-n%t;continue e}case"\r":continue e;default:break e}return n}const Yc=$v.define({combine(e){return Iv(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}});class _j{constructor(t,n,o,a){this.lines=t,this.state=n,this.map=new Map,this.unitWidth=o,this.markerType=a;for(const i of this.lines)this.add(i);this.state.facet(Yc).highlightActiveBlock&&this.findAndSetActiveLines()}has(t){return this.map.has(typeof t=="number"?t:t.number)}get(t){const n=this.map.get(typeof t=="number"?t:t.number);if(!n)throw new Error("Line not found in indentation map");return n}set(t,n,o){const a=!t.text.trim().length,i={line:t,col:n,level:o,empty:a};return this.map.set(i.line.number,i),i}add(t){if(this.has(t))return this.get(t);if(!t.length||!t.text.trim().length){if(t.number===1)return this.set(t,0,0);if(t.number===this.state.doc.lines){const s=this.closestNonEmpty(t,-1);return this.set(t,0,s.level)}const a=this.closestNonEmpty(t,-1),i=this.closestNonEmpty(t,1);return a.level>=i.level&&this.markerType!=="codeOnly"?this.set(t,0,a.level):a.empty&&a.level===0&&i.level!==0?this.set(t,0,0):i.level>a.level?this.set(t,0,a.level+1):this.set(t,0,i.level)}const n=np(t.text,this.state.tabSize),o=Math.floor(n/this.unitWidth);return this.set(t,n,o)}closestNonEmpty(t,n){let o=t.number+n;for(;n===-1?o>=1:o<=this.state.doc.lines;){if(this.has(o)){const s=this.get(o);if(!s.empty)return s}const i=this.state.doc.line(o);if(i.text.trim().length){const s=np(i.text,this.state.tabSize),l=Math.floor(s/this.unitWidth);return this.set(i,s,l)}o+=n}const a=this.state.doc.line(n===-1?1:this.state.doc.lines);return this.set(a,0,0)}findAndSetActiveLines(){const t=Id(this.state);if(!this.has(t))return;let n=this.get(t);if(this.has(n.line.number+1)){const i=this.get(n.line.number+1);i.level>n.level&&(n=i)}if(this.has(n.line.number-1)){const i=this.get(n.line.number-1);i.level>n.level&&(n=i)}if(n.level===0)return;n.active=n.level;let o,a;for(o=n.line.number;o>1;o--){if(!this.has(o-1))continue;const i=this.get(o-1);if(i.level<n.level)break;i.active=n.level}for(a=n.line.number;a<this.state.doc.lines;a++){if(!this.has(a+1))continue;const i=this.get(a+1);if(i.level<n.level)break;i.active=n.level}}}function Mj(e){const t={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"};let n=t;return e&&(n=Object.assign(Object.assign({},t),e)),qo.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function fc(e,t,n,o,a){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${n}ch)`} ${o*n}.5ch/calc(${n*a}ch - 1px) no-repeat`}function Aj(e,t,n,o,a){const{level:i,active:s}=e;if(a=a??o,n&&i===0)return[];const l=n?1:0,c=[];if(s!==void 0){const u=s-l-1;u>0&&c.push(fc("--indent-marker-bg-color",o,t,l,u)),c.push(fc("--indent-marker-active-bg-color",a,t,s-1,1)),s!==i&&c.push(fc("--indent-marker-bg-color",o,t,s,i-s))}else c.push(fc("--indent-marker-bg-color",o,t,l,i-l));return c.join(",")}class Tj{constructor(t){this.view=t,this.unitWidth=Jc(t.state),this.currentLineNumber=Id(t.state).number,this.generate(t.state)}update(t){const n=Jc(t.state),o=n!==this.unitWidth;o&&(this.unitWidth=n);const a=Id(t.state).number,i=a!==this.currentLineNumber;this.currentLineNumber=a;const s=t.state.facet(Yc).highlightActiveBlock&&i;(t.docChanged||t.viewportChanged||o||s)&&this.generate(t.state)}generate(t){const n=new qv,o=Ej(this.view,t),{hideFirstIndent:a,markerType:i,thickness:s,activeThickness:l}=t.facet(Yc),c=new _j(o,t,this.unitWidth,i);for(const u of o){const d=c.get(u.number);if(!d?.level)continue;const v=Aj(d,this.unitWidth,a,s,l);n.add(u.from,u.from,ui.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${v}`}}))}this.decorations=n.finish()}}function zj(e={}){return[Yc.of(e),Mj(e.colors),Nv.fromClass(Tj,{decorations:t=>t.decorations})]}var Rj=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Pj=["mainAxis","crossAxis","limiter"];function Dg(e,t){if(e==null)return{};var n,o,a=function(s,l){if(s==null)return{};var c={};for(var u in s)if({}.hasOwnProperty.call(s,u)){if(l.indexOf(u)!==-1)continue;c[u]=s[u]}return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(o){Rs(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function op(e,t,n,o,a,i,s){try{var l=e[i](s),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(o,a)}function gt(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function s(c){op(i,o,a,s,l,"next",c)}function l(c){op(i,o,a,s,l,"throw",c)}s(void 0)})}}function Ug(e,t){Lg(e,t),t.add(e)}function Yn(e,t,n){Lg(e,t),t.set(e,n)}function Lg(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function cn(e,t,n){return e.set(co(e,t),n),n}function Qe(e,t){return e.get(co(e,t))}function co(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function Rs(e,t,n){return(t=function(o){var a=function(i,s){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var c=l.call(i,s||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(i)}(o,"string");return typeof a=="symbol"?a:a+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ap,Xu,ip,Zu;typeof window<"u"&&((Xu=(ap=(Zu=(ip=window).__svelte)!==null&&Zu!==void 0?Zu:ip.__svelte={}).v)!==null&&Xu!==void 0?Xu:ap.v=new Set).add("5");var Vs=!1;Vs=!0;var Lr=Symbol(),Nj=!1,Hs=Array.isArray,$j=Array.prototype.indexOf,qd=Array.from,Dd=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,Bg=Object.getOwnPropertyDescriptors,Ij=Object.prototype,qj=Array.prototype,Hv=Object.getPrototypeOf,sp=Object.isExtensible;function il(e){return typeof e=="function"}var lp=()=>{};function Dj(e){return e()}function Qc(e){for(var t=0;t<e.length;t++)e[t]()}var Vl=16,Eu=32,Fg=64,Wo=256,Ud=512,Xr=1024,Pa=2048,hi=4096,ia=8192,Js=16384,Jv=32768,Hl=65536,Uj=1<<17,Wg=1<<19,Ld=1<<21,Lj=1<<22,Pi=1<<23,sa=Symbol("$state"),Vg=Symbol("legacy props"),Bj=Symbol(""),Kv=new class extends Error{constructor(){super(...arguments),Rs(this,"name","StaleReactionError"),Rs(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Jl(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Hg(e){return e===this.v}function Yv(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Fj(e,t){return e!==t}function Jg(e){return!Yv(e,this.v)}var qn=null;function Ps(e){qn=e}function gi(e){return Kg().get(e)}function ut(e){qn={p:qn,c:null,e:null,s:e,x:null,l:Vs&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function dt(e){var t=qn,n=t.e;if(n!==null)for(var o of(t.e=null,n))lm(o);return e!==void 0&&(t.x=e),qn=t.p,e??{}}function Ks(){return!Vs||qn!==null&&qn.l===null}function Kg(e){var t,n;return qn===null&&Jl(),(n=(t=qn).c)!==null&&n!==void 0?n:t.c=new Map(function(o){for(var a=o.p;a!==null;){var i=a.c;if(i!==null)return i;a=a.p}return null}(qn)||void 0)}var ei=[],zc=[];function Yg(){var e=ei;ei=[],Qc(e)}function Wj(){return ei.length>0||zc.length>0}function Ki(e){if(ei.length===0&&!jl){var t=ei;queueMicrotask(()=>{t===ei&&Yg()})}ei.push(e)}function Vj(){var e;ei.length>0&&Yg(),zc.length>0&&(e=zc,zc=[],Qc(e))}var Hj=new WeakMap;function Qg(e){var t=un;if(t===null)return bn.f|=Pi,e;if(t.f&Jv)Ns(e,t);else{if(!(128&t.f))throw!t.parent&&e instanceof Error&&Gg(e),e;t.b.error(e)}}function Ns(e,t){for(;t!==null;){if(128&t.f)try{return void t.b.error(e)}catch(n){e=n}t=t.parent}throw e instanceof Error&&Gg(e),e}function Gg(e){var t=Hj.get(e);t&&(Dd(e,"message",{value:t.message}),Dd(e,"stack",{value:t.stack}))}var ed=new Set,Ar=null,yl=null,Bd=new Set,Di=[],_u=null,Fd=!1,jl=!1,td=new WeakMap,Gc=new WeakMap,La=new WeakMap,pc=new WeakMap,Wd=new WeakMap,fl=new WeakMap,Rc=new WeakMap,sl=new WeakMap,fs=new WeakMap,Pc=new WeakMap,Vd=new WeakMap,Hd=new WeakMap,ki=new WeakSet;let Mu=class Jd{constructor(){Ug(this,ki),Rs(this,"current",new Map),Yn(this,td,new Map),Yn(this,Gc,new Set),Yn(this,La,0),Yn(this,pc,null),Yn(this,Wd,!1),Yn(this,fl,[]),Yn(this,Rc,[]),Yn(this,sl,[]),Yn(this,fs,[]),Yn(this,Pc,[]),Yn(this,Vd,[]),Yn(this,Hd,[]),Rs(this,"skipped_effects",new Set)}process(t){for(var n of(Di=[],yl=null,t))co(ki,this,Jj).call(this,n);if(Qe(fl,this).length===0&&Qe(La,this)===0){var o;co(ki,this,cp).call(this);var a=Qe(sl,this),i=Qe(fs,this);cn(sl,this,[]),cn(fs,this,[]),cn(Pc,this,[]),yl=Ar,Ar=null,up(a),up(i),Ar===null?Ar=this:ed.delete(this),(o=Qe(pc,this))===null||o===void 0||o.resolve()}else co(ki,this,nd).call(this,Qe(sl,this)),co(ki,this,nd).call(this,Qe(fs,this)),co(ki,this,nd).call(this,Qe(Pc,this));for(var s of Qe(fl,this))Ui(s);for(var l of Qe(Rc,this))Ui(l);cn(fl,this,[]),cn(Rc,this,[])}capture(t,n){Qe(td,this).has(t)||Qe(td,this).set(t,n),this.current.set(t,t.v)}activate(){Ar=this}deactivate(){for(var t of(Ar=null,yl=null,Bd))if(Bd.delete(t),t(),Ar!==null)break}neuter(){cn(Wd,this,!0)}flush(){Di.length>0?Xg():co(ki,this,cp).call(this),Ar===this&&(Qe(La,this)===0&&ed.delete(this),this.deactivate())}increment(){cn(La,this,Qe(La,this)+1)}decrement(){if(cn(La,this,Qe(La,this)-1),Qe(La,this)===0){for(var t of Qe(Vd,this))io(t,Pa),$s(t);for(var n of Qe(Hd,this))io(n,hi),$s(n);cn(sl,this,[]),cn(fs,this,[]),this.flush()}else this.deactivate()}add_callback(t){Qe(Gc,this).add(t)}settled(){var t,n,o;return((t=Qe(pc,this))!==null&&t!==void 0?t:cn(pc,this,{promise:new Promise((a,i)=>{n=a,o=i}),resolve:n,reject:o})).promise}static ensure(){if(Ar===null){var t=Ar=new Jd;ed.add(Ar),jl||Jd.enqueue(()=>{Ar===t&&t.flush()})}return Ar}static enqueue(t){Ki(t)}};function Jj(e){e.f^=Xr;for(var t=e.first;t!==null;){var n=t.f,o=!!(96&n);if(!(o&&n&Xr||n&ia||this.skipped_effects.has(t))&&t.fn!==null){if(o)t.f^=Xr;else if(4&n)Qe(fs,this).push(t);else if(!(n&Xr)){var a;n&Lj?((a=t.b)!==null&&a!==void 0&&a.is_pending()?Qe(Rc,this):Qe(fl,this)).push(t):Gl(t)&&(t.f&Vl&&Qe(Pc,this).push(t),Ui(t))}var i=t.first;if(i!==null){t=i;continue}}var s=t.parent;for(t=t.next;t===null&&s!==null;)t=s.next,s=s.parent}}function nd(e){for(var t of e)(t.f&Pa?Qe(Vd,this):Qe(Hd,this)).push(t),io(t,Xr);e.length=0}function cp(){if(!Qe(Wd,this))for(var e of Qe(Gc,this))e();Qe(Gc,this).clear()}function Fn(e){var t=jl;jl=!0;try{for(;;){var n;if(Vj(),Di.length===0&&!Wj()&&((n=Ar)===null||n===void 0||n.flush(),Di.length===0))return void(_u=null);Xg()}}finally{jl=t}}function Xg(){var e=Os;Fd=!0;try{var t=0;for(yp(!0);Di.length>0;){var n=Mu.ensure();t++>1e3&&Kj(),n.process(Di),ai.clear()}}finally{Fd=!1,yp(e),_u=null}}function Kj(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){Ns(e,_u)}}var Ai=null;function up(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var o,a=e[n++];if(!(24576&a.f)&&Gl(a)&&(Ai=[],Ui(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?vm(a):a.fn=null),((o=Ai)===null||o===void 0?void 0:o.length)>0)){for(var i of(ai.clear(),Ai))Ui(i);Ai=[]}}Ai=null}}function $s(e){for(var t=_u=e;t.parent!==null;){var n=(t=t.parent).f;if(Fd&&t===un&&n&Vl)return;if(96&n){if(!(n&Xr))return;t.f^=Xr}}Di.push(t)}function Yj(e){var t,n=0,o=Na(0);return()=>{bn===null||Uo||(r(o),Ys(()=>(n===0&&(t=D(()=>e(()=>xl(o)))),n+=1,()=>{Ki(()=>{var a;(n-=1)===0&&((a=t)===null||a===void 0||a(),t=void 0,xl(o))})})))}}var Oi=new WeakMap,Ti=new WeakMap,Qj=new WeakMap,Ei=new WeakMap,rd=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,wa=new WeakMap,Ba=new WeakMap,Cs=new WeakMap,os=new WeakMap,Ss=new WeakMap,ll=new WeakMap,as=new WeakMap,dp=new WeakMap,vp=new WeakMap,_i=new WeakSet;let Gj=class{constructor(t,n,o){Ug(this,_i),Rs(this,"parent",void 0),Yn(this,Oi,!1),Yn(this,Ti,void 0),Yn(this,Qj,null),Yn(this,Ei,void 0),Yn(this,rd,void 0),Yn(this,Ga,void 0),Yn(this,Ka,null),Yn(this,wa,null),Yn(this,Ba,null),Yn(this,Cs,null),Yn(this,os,0),Yn(this,Ss,0),Yn(this,ll,!1),Yn(this,as,null),Yn(this,dp,()=>{Qe(as,this)&&Is(Qe(as,this),Qe(os,this))}),Yn(this,vp,Yj(()=>(cn(as,this,Na(Qe(os,this))),()=>{cn(as,this,null)}))),cn(Ti,this,t),cn(Ei,this,n),cn(rd,this,o),this.parent=un.b,cn(Oi,this,!!Qe(Ei,this).pending),cn(Ga,this,mi(()=>{un.b=this;try{cn(Ka,this,So(()=>o(Qe(Ti,this))))}catch(a){this.error(a)}Qe(Ss,this)>0?co(_i,this,pp).call(this):cn(Oi,this,!1)},589952))}is_pending(){return Qe(Oi,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!Qe(Ei,this).pending}update_pending_count(t){co(_i,this,Zg).call(this,t),cn(os,this,Qe(os,this)+t),Bd.add(Qe(dp,this))}get_effect_pending(){return Qe(vp,this).call(this),r(Qe(as,this))}error(t){var n=Qe(Ei,this).onerror,o=Qe(Ei,this).failed;if(Qe(ll,this)||!n&&!o)throw t;Qe(Ka,this)&&(ro(Qe(Ka,this)),cn(Ka,this,null)),Qe(wa,this)&&(ro(Qe(wa,this)),cn(wa,this,null)),Qe(Ba,this)&&(ro(Qe(Ba,this)),cn(Ba,this,null));var a=!1,i=!1,s=()=>{a?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(a=!0,i&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),Mu.ensure(),cn(os,this,0),Qe(Ba,this)!==null&&Yi(Qe(Ba,this),()=>{cn(Ba,this,null)}),cn(Oi,this,this.has_pending_snippet()),cn(Ka,this,co(_i,this,fp).call(this,()=>(cn(ll,this,!1),So(()=>Qe(rd,this).call(this,Qe(Ti,this)))))),Qe(Ss,this)>0?co(_i,this,pp).call(this):cn(Oi,this,!1))},l=bn;try{po(null),i=!0,n?.(t,s),i=!1}catch(c){Ns(c,Qe(Ga,this)&&Qe(Ga,this).parent)}finally{po(l)}o&&Ki(()=>{cn(Ba,this,co(_i,this,fp).call(this,()=>{cn(ll,this,!0);try{return So(()=>{o(Qe(Ti,this),()=>t,()=>s)})}catch(c){return Ns(c,Qe(Ga,this).parent),null}finally{cn(ll,this,!1)}}))})}};function fp(e){var t=un,n=bn,o=qn;zo(Qe(Ga,this)),po(Qe(Ga,this)),Ps(Qe(Ga,this).ctx);try{return e()}catch(a){return Qg(a),null}finally{zo(t),po(n),Ps(o)}}function pp(){var e=Qe(Ei,this).pending;Qe(Ka,this)!==null&&(cn(Cs,this,document.createDocumentFragment()),function(t,n){for(var o=t.nodes_start,a=t.nodes_end;o!==null;){var i=o===a?null:Ql(o);n.append(o),o=i}}(Qe(Ka,this),Qe(Cs,this))),Qe(wa,this)===null&&cn(wa,this,So(()=>e(Qe(Ti,this))))}function Zg(e){var t;this.has_pending_snippet()?(cn(Ss,this,Qe(Ss,this)+e),Qe(Ss,this)===0&&(cn(Oi,this,!1),Qe(wa,this)&&Yi(Qe(wa,this),()=>{cn(wa,this,null)}),Qe(Cs,this)&&(Qe(Ti,this).before(Qe(Cs,this)),cn(Cs,this,null)))):this.parent&&co(_i,t=this.parent,Zg).call(t,e)}function em(e,t,n){var o=Ks()?Kl:Ze;if(t.length!==0){var a=Ar,i=un,s=function(){var l=un,c=bn,u=qn,d=Ar;return function(){zo(l),po(c),Ps(u),d?.activate()}}();Promise.all(t.map(l=>function(c){var u=un;u===null&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}();var d=u.b,v=void 0,p=Na(Lr),g=null,y=!bn;return function(b){pa(4718592,b,!0)}(()=>{var b,j;try{var x=c();g&&Promise.resolve(x).catch(()=>{})}catch(z){x=Promise.reject(z)}var C=()=>x;v=(b=(j=g)===null||j===void 0?void 0:j.then(C,C))!==null&&b!==void 0?b:Promise.resolve(x),g=v;var T=Ar,O=d.is_pending();y&&(d.update_pending_count(1),O||T.increment());var w=function(z){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;g=null,O||T.activate(),U?U!==Kv&&(p.f|=Pi,Is(p,U)):(p.f&Pi&&(p.f^=Pi),Is(p,z)),y&&(d.update_pending_count(-1),O||T.decrement()),hp()};if(v.then(w,z=>w(null,z||"unknown")),T)return()=>{queueMicrotask(()=>T.neuter())}}),new Promise(b=>{function j(x){function C(){x===v?b(p):j(v)}x.then(C,C)}j(v)})}(l))).then(l=>{a?.activate(),s();try{n([...e.map(o),...l])}catch(c){!(i.f&Js)&&Ns(c,i)}a?.deactivate(),hp()}).catch(l=>{Ns(l,i)})}else n(e.map(o))}function hp(){zo(null),po(null),Ps(null)}function Kl(e){var t=2050,n=bn!==null&&2&bn.f?bn:null;return un===null||n!==null&&n.f&Wo?t|=Wo:un.f|=Wg,{ctx:qn,deps:null,effects:null,equals:Hg,f:t,fn:e,reactions:null,rv:0,v:Lr,wv:0,parent:n??un,ac:null}}function vo(e){var t=Kl(e);return hm(t),t}function Ze(e){var t=Kl(e);return t.equals=Jg,t}function tm(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ro(t[n])}}function Qv(e){var t,n=un;zo(function(o){for(var a=o.parent;a!==null;){if(!(2&a.f))return a;a=a.parent}return null}(e));try{tm(e),t=ym(e)}finally{zo(n)}return t}function nm(e){var t=Qv(e);e.equals(t)||(e.v=t,e.wv=mm()),Qi||io(e,!ti&&!(e.f&Wo)||e.deps===null?Xr:hi)}var Ma,rm,om,am,ai=new Map;function Na(e,t){return{f:0,v:e,reactions:null,equals:Hg,rv:0,wv:0}}function ya(e,t){var n=Na(e);return hm(n),n}function N(e){var t,n,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=Na(e);return o||(i.equals=Jg),Vs&&a&&qn!==null&&qn.l!==null&&((n=(t=qn.l).s)!==null&&n!==void 0?n:t.s=[]).push(i),i}function jo(e,t){return f(e,D(()=>r(e))),t}function f(e,t){var n,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return bn===null||Uo&&!(bn.f&Uj)||!Ks()||!(4325394&bn.f)||(n=Aa)!==null&&n!==void 0&&n.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Is(e,o?ms(t):t)}function Is(e,t){if(!e.equals(t)){var n=e.v;Qi?ai.set(e,t):ai.set(e,n),e.v=t,Mu.ensure().capture(e,n),2&e.f&&(e.f&Pa&&Qv(e),io(e,e.f&Wo?hi:Xr)),e.wv=mm(),im(e,Pa),!Ks()||un===null||!(un.f&Xr)||96&un.f||(Oo===null?function(o){Oo=o}([e]):Oo.push(e))}return t}function gp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=r(e),o=t===1?n++:n--;return f(e,n),o}function xl(e){f(e,e.v+1)}function im(e,t){var n=e.reactions;if(n!==null)for(var o=Ks(),a=n.length,i=0;i<a;i++){var s=n[i],l=s.f;if(o||s!==un){var c=(l&Pa)===0;c&&io(s,t),2&l?im(s,hi):c&&(l&Vl&&Ai!==null&&Ai.push(s),$s(s))}}}function ms(e){if(typeof e!="object"||e===null||sa in e)return e;var t=Hv(e);if(t!==Ij&&t!==qj)return e;var n=new Map,o=Hs(e),a=ya(0),i=Ni,s=l=>{if(Ni===i)return l();var c=bn,u=Ni;po(null),xp(i);var d=l();return po(c),xp(u),d};return o&&n.set("length",ya(e.length)),new Proxy(e,{defineProperty(l,c,u){"value"in u&&u.configurable!==!1&&u.enumerable!==!1&&u.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var d=n.get(c);return d===void 0?d=s(()=>{var v=ya(u.value);return n.set(c,v),v}):f(d,u.value,!0),!0},deleteProperty(l,c){var u=n.get(c);if(u===void 0){if(c in l){var d=s(()=>ya(Lr));n.set(c,d),xl(a)}}else f(u,Lr),xl(a);return!0},get(l,c,u){var d;if(c===sa)return e;var v=n.get(c),p=c in l;if(v===void 0&&(!p||(d=_a(l,c))!==null&&d!==void 0&&d.writable)&&(v=s(()=>ya(ms(p?l[c]:Lr))),n.set(c,v)),v!==void 0){var g=r(v);return g===Lr?void 0:g}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var d=n.get(c);d&&(u.value=r(d))}else if(u===void 0){var v=n.get(c),p=v?.v;if(v!==void 0&&p!==Lr)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(l,c){var u;if(c===sa)return!0;var d=n.get(c),v=d!==void 0&&d.v!==Lr||Reflect.has(l,c);return(d!==void 0||un!==null&&(!v||(u=_a(l,c))!==null&&u!==void 0&&u.writable))&&(d===void 0&&(d=s(()=>ya(v?ms(l[c]):Lr)),n.set(c,d)),r(d)===Lr)?!1:v},set(l,c,u,d){var v,p=n.get(c),g=c in l;if(o&&c==="length")for(var y=u;y<p.v;y+=1){var b=n.get(y+"");b!==void 0?f(b,Lr):y in l&&(b=s(()=>ya(Lr)),n.set(y+"",b))}p===void 0?(!g||(v=_a(l,c))!==null&&v!==void 0&&v.writable)&&(f(p=s(()=>ya(void 0)),ms(u)),n.set(c,p)):(g=p.v!==Lr,f(p,s(()=>ms(u))));var j=Reflect.getOwnPropertyDescriptor(l,c);if(j!=null&&j.set&&j.set.call(d,u),!g){if(o&&typeof c=="string"){var x=n.get("length"),C=Number(c);Number.isInteger(C)&&C>=x.v&&f(x,C+1)}xl(a)}return!0},ownKeys(l){r(a);var c=Reflect.ownKeys(l).filter(v=>{var p=n.get(v);return p===void 0||p.v!==Lr});for(var[u,d]of n)d.v===Lr||u in l||c.push(u);return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function mp(e){try{if(e!==null&&typeof e=="object"&&sa in e)return e[sa]}catch{}return e}function Xj(e,t){return Object.is(mp(e),mp(t))}function Yl(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function xo(e){return om.call(e)}function Ql(e){return am.call(e)}function P(e,t){return xo(e)}function Xe(e){var t=xo(e);return t instanceof Comment&&t.data===""?Ql(t):t}function V(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;t--;)n=Ql(n);return n}var bp=!1;function Au(e){var t=bn,n=un;po(null),zo(null);try{return e()}finally{po(t),zo(n)}}function Zj(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(t,()=>Au(n));var a=e.__on_r;e.__on_r=a?()=>{a(),o(!0)}:()=>o(!0),bp||(bp=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(var s of i.target.elements){var l;(l=s.__on_r)===null||l===void 0||l.call(s)}})},{capture:!0}))}function sm(e){un===null&&bn===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),bn!==null&&bn.f&Wo&&un===null&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Qi&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function pa(e,t,n){var o=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],a=un;a!==null&&a.f&ia&&(e|=ia);var i={ctx:qn,deps:null,nodes_start:null,nodes_end:null,f:e|Pa,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Ui(i),i.f|=Jv}catch(u){throw ro(i),u}else t!==null&&$s(i);if(o){var s=i;if(n&&s.deps===null&&s.teardown===null&&s.nodes_start===null&&s.first===s.last&&!(s.f&Wg)&&(s=s.first),s!==null&&(s.parent=a,a!==null&&function(u,d){var v=d.last;v===null?d.last=d.first=u:(v.next=u,u.prev=v,d.last=u)}(s,a),bn!==null&&2&bn.f&&(e&Fg)===0)){var l,c=bn;((l=c.effects)!==null&&l!==void 0?l:c.effects=[]).push(s)}}return i}function Gv(e){var t=pa(8,null,!1);return io(t,Xr),t.teardown=e,t}function Kd(e){sm();var t=un.f;if(!(!bn&&t&Eu&&!(t&Jv)))return lm(e);var n,o=qn;((n=o.e)!==null&&n!==void 0?n:o.e=[]).push(e)}function lm(e){return pa(1048580,e,!1)}function Kr(e){return pa(4,e,!1)}function X(e,t){var n={effect:null,ran:!1,deps:e};qn.l.$.push(n),n.effect=Ys(()=>{e(),n.ran||(n.ran=!0,D(t))})}function wn(){var e=qn;Ys(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&Xr&&io(n,hi),Gl(n)&&Ui(n),t.ran=!1}})}function Ys(e){return pa(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function Te(e){em(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{pa(8,()=>e(...t.map(r)),!0)})}function mi(e){return pa(Vl|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function So(e){return pa(524320,e,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function cm(e){var t=e.teardown;if(t!==null){var n=Qi,o=bn;jp(!0),po(null);try{t.call(null)}finally{jp(n),po(o)}}}function um(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var o,a=function(){var i=n.ac;i!==null&&Au(()=>{i.abort(Kv)}),o=n.next,n.f&Fg?n.parent=null:ro(n,t),n=o};n!==null;)a()}function ro(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;(t||262144&e.f)&&e.nodes_start!==null&&e.nodes_end!==null&&(dm(e.nodes_start,e.nodes_end),n=!0),um(e,t&&!n),Xc(e,0),io(e,Js);var o=e.transitions;if(o!==null)for(var a of o)a.stop();cm(e);var i=e.parent;i!==null&&i.first!==null&&vm(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function dm(e,t){for(;e!==null;){var n=e===t?null:Ql(e);e.remove(),e=n}}function vm(e){var t=e.parent,n=e.prev,o=e.next;n!==null&&(n.next=o),o!==null&&(o.prev=n),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=n))}function Yi(e,t){var n=[];Xv(e,n,!0),fm(n,()=>{ro(e),t&&t()})}function fm(e,t){var n=e.length;if(n>0){var o=()=>--n||t();for(var a of e)a.out(o)}else t()}function Xv(e,t,n){if(!(e.f&ia)){if(e.f^=ia,e.transitions!==null)for(var o of e.transitions)(o.is_global||n)&&t.push(o);for(var a=e.first;a!==null;){var i=a.next;Xv(a,t,!!(a.f&Hl||a.f&Eu)&&n),a=i}}}function Yd(e){pm(e,!0)}function pm(e,t){if(e.f&ia){e.f^=ia,!(e.f&Xr)&&(io(e,Pa),$s(e));for(var n=e.first;n!==null;){var o=n.next;pm(n,!!(n.f&Hl||n.f&Eu)&&t),n=o}if(e.transitions!==null)for(var a of e.transitions)(a.is_global||t)&&a.in()}}var ex=null,Os=!1;function yp(e){Os=e}var Qi=!1;function jp(e){Qi=e}var bn=null,Uo=!1;function po(e){bn=e}var un=null;function zo(e){un=e}var Aa=null;function hm(e){bn!==null&&(Aa===null?Aa=[e]:Aa.push(e))}var oo=null,bo=0,Oo=null,gm=1,El=0,Ni=El;function xp(e){Ni=e}var ti=!1;function mm(){return++gm}function Gl(e){var t=e.f;if(t&Pa)return!0;if(t&hi){var n=e.deps,o=(t&Wo)!==0;if(n!==null){var a,i,s=(t&Ud)!==0,l=o&&un!==null&&!ti,c=n.length;if((s||l)&&(un===null||!(un.f&Js))){var u=e,d=u.parent;for(a=0;a<c;a++){var v,p,g;i=n[a],(s||(v=i)===null||v===void 0||(v=v.reactions)===null||v===void 0||!v.includes(u))&&((g=(p=i).reactions)!==null&&g!==void 0?g:p.reactions=[]).push(u)}s&&(u.f^=Ud),l&&d!==null&&!(d.f&Wo)&&(u.f^=Wo)}for(a=0;a<c;a++)if(Gl(i=n[a])&&nm(i),i.wv>e.wv)return!0}o&&(un===null||ti)||io(e,Xr)}return!1}function bm(e,t){var n,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=e.reactions;if(a!==null&&((n=Aa)===null||n===void 0||!n.includes(e)))for(var i=0;i<a.length;i++){var s=a[i];2&s.f?bm(s,t,!1):t===s&&(o?io(s,Pa):s.f&Xr&&io(s,hi),$s(s))}}function ym(e){var t=oo,n=bo,o=Oo,a=bn,i=ti,s=Aa,l=qn,c=Uo,u=Ni,d=e.f;oo=null,bo=0,Oo=null,ti=(d&Wo)!==0&&(Uo||!Os||bn===null),bn=96&d?null:e,Aa=null,Ps(e.ctx),Uo=!1,Ni=++El,e.ac!==null&&(Au(()=>{e.ac.abort(Kv)}),e.ac=null);try{e.f|=Ld;var v=(0,e.fn)(),p=e.deps;if(oo!==null){var g;if(Xc(e,bo),p!==null&&bo>0)for(p.length=bo+oo.length,g=0;g<oo.length;g++)p[bo+g]=oo[g];else e.deps=p=oo;if(!ti||2&d&&e.reactions!==null)for(g=bo;g<p.length;g++){var y,b;((b=(y=p[g]).reactions)!==null&&b!==void 0?b:y.reactions=[]).push(e)}}else p!==null&&bo<p.length&&(Xc(e,bo),p.length=bo);if(Ks()&&Oo!==null&&!Uo&&p!==null&&!(6146&e.f))for(g=0;g<Oo.length;g++)bm(Oo[g],e);return a!==null&&a!==e&&(El++,Oo!==null&&(o===null?o=Oo:o.push(...Oo))),e.f&Pi&&(e.f^=Pi),v}catch(j){return Qg(j)}finally{e.f^=Ld,oo=t,bo=n,Oo=o,bn=a,ti=i,Aa=s,Ps(l),Uo=c,Ni=u}}function tx(e,t){var n=t.reactions;if(n!==null){var o=$j.call(n,e);if(o!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[o]=n[a],n.pop())}}n===null&&2&t.f&&(oo===null||!oo.includes(t))&&(io(t,hi),768&t.f||(t.f^=Ud),tm(t),Xc(t,0))}function Xc(e,t){var n=e.deps;if(n!==null)for(var o=t;o<n.length;o++)tx(e,n[o])}function Ui(e){var t=e.f;if(!(t&Js)){io(e,Xr);var n=un,o=Os;un=e,Os=!0;try{t&Vl?function(i){for(var s=i.first;s!==null;){var l=s.next;!(s.f&Eu)&&ro(s),s=l}}(e):um(e),cm(e);var a=ym(e);e.teardown=typeof a=="function"?a:null,e.wv=gm}finally{Os=o,un=n}}}function jm(){return xm.apply(this,arguments)}function xm(){return(xm=gt(function*(){yield Promise.resolve(),Fn()})).apply(this,arguments)}function r(e){var t,n,o=!!(2&e.f);if((t=ex)===null||t===void 0||t.add(e),bn===null||Uo){if(o&&e.deps===null&&e.effects===null){var a=e,i=a.parent;i!==null&&!(i.f&Wo)&&(a.f^=Wo)}}else if(!(un!==null&&un.f&Js||(n=Aa)!==null&&n!==void 0&&n.includes(e))){var s=bn.deps;if(bn.f&Ld)e.rv<El&&(e.rv=El,oo===null&&s!==null&&s[bo]===e?bo++:oo===null?oo=[e]:ti&&oo.includes(e)||oo.push(e));else{var l,c;((c=(l=bn).deps)!==null&&c!==void 0?c:l.deps=[]).push(e);var u=e.reactions;u===null?e.reactions=[bn]:u.includes(bn)||u.push(bn)}}if(Qi){if(ai.has(e))return ai.get(e);if(o){var d=(a=e).v;return(!(a.f&Xr)&&a.reactions!==null||wm(a))&&(d=Qv(a)),ai.set(a,d),d}}else o&&Gl(a=e)&&nm(a);if(e.f&Pi)throw e.v;return e.v}function wm(e){if(e.v===Lr)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(ai.has(t)||2&t.f&&wm(t))return!0;return!1}function D(e){var t=Uo;try{return Uo=!0,e()}finally{Uo=t}}var nx=-7169;function io(e,t){e.f=e.f&nx|t}function m(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(sa in e)Qd(e);else if(!Array.isArray(e))for(var t in e){var n=e[t];typeof n=="object"&&n&&sa in n&&Qd(n)}}}function Qd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var n in t.add(e),e instanceof Date&&e.getTime(),e)try{Qd(e[n],t)}catch{}var o=Hv(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var a=Bg(o);for(var i in a){var s=a[i].get;if(s)try{s.call(e)}catch{}}}}}var km=new Set,Gd=new Set;function Cm(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function a(i){if(o.capture||pl.call(t,i),!i.cancelBubble)return Au(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ki(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function Oe(e,t,n,o,a){var i={capture:o,passive:a},s=Cm(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Gv(()=>{t.removeEventListener(e,s,i)})}function Xl(e){for(var t=0;t<e.length;t++)km.add(e[t]);for(var n of Gd)n(e)}function pl(e){var t,n=this,o=n.ownerDocument,a=e.type,i=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],s=i[0]||e.target,l=0,c=e===e&&e.__root;if(c){var u=i.indexOf(c);if(u!==-1&&(n===document||n===window))return void(e.__root=n);var d=i.indexOf(n);if(d===-1)return;u<=d&&(l=u)}if((s=i[l]||e.target)!==n){Dd(e,"currentTarget",{configurable:!0,get:()=>s||o});var v=bn,p=un;po(null),zo(null);try{for(var g,y=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var j=s["__"+a];if(j!=null&&(!s.disabled||e.target===s))if(Hs(j)){var[x,...C]=j;x.apply(s,[e,...C])}else j.call(s,e)}catch(w){g?y.push(w):g=w}if(e.cancelBubble||b===n||b===null)break;s=b}if(g){var T=function(w){queueMicrotask(()=>{throw w})};for(var O of y)T(O);throw g}}finally{e.__root=n,delete e.currentTarget,po(v),zo(p)}}}function Zv(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Li(e,t){var n=un;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function ee(e,t){var n,o=!!(1&t),a=!!(2&t),i=!e.startsWith("<!>");return()=>{n===void 0&&(n=Zv(i?e:"<!>"+e),o||(n=xo(n)));var s=a||rm?document.importNode(n,!0):n.cloneNode(!0);return o?Li(xo(s),s.lastChild):Li(s,s),s}}function bi(e,t){return function(n,o){var a,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",s=!n.startsWith("<!>"),l=!!(1&o),c="<".concat(i,">").concat(s?n:"<!>"+n,"</").concat(i,">");return()=>{if(!a){var u=xo(Zv(c));if(l)for(a=document.createDocumentFragment();xo(u);)a.appendChild(xo(u));else a=xo(u)}var d=a.cloneNode(!0);return l?Li(xo(d),d.lastChild):Li(d,d),d}}(e,t,"svg")}function Fr(){var e=Yl((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Li(e,e),e}function Ut(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Yl();return e.append(t,n),Li(t,n),e}function R(e,t){e!==null&&e.before(t)}var rx=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],ox={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},ax=["touchstart","touchmove"];function ix(e){return ax.includes(e)}function vt(e,t){var n,o=t==null?"":typeof t=="object"?t+"":t;o!==((n=e.__t)!==null&&n!==void 0?n:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function sx(e,t){return function(n,o){var{target:a,anchor:i,props:s={},events:l,context:c,intro:u=!0}=o;(function(){if(Ma===void 0){Ma=window,rm=/Firefox/.test(navigator.userAgent);var y=Element.prototype,b=Node.prototype,j=Text.prototype;om=_a(b,"firstChild").get,am=_a(b,"nextSibling").get,sp(y)&&(y.__click=void 0,y.__className=void 0,y.__attributes=null,y.__style=void 0,y.__e=void 0),sp(j)&&(j.__t=void 0)}})();var d=new Set,v=y=>{for(var b=0;b<y.length;b++){var j=y[b];if(!d.has(j)){d.add(j);var x=ix(j);a.addEventListener(j,pl,{passive:x});var C=is.get(j);C===void 0?(document.addEventListener(j,pl,{passive:x}),is.set(j,1)):is.set(j,C+1)}}};v(qd(km)),Gd.add(v);var p=void 0,g=function(y){Mu.ensure();var b=pa(524352,y,!0);return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(x=>{j.outro?Yi(b,()=>{ro(b),x(void 0)}):(ro(b),x(void 0))})}}(()=>{var y=i??a.appendChild(Yl());return function(b,j,x){new Gj(b,j,x)}(y,{pending:()=>{}},b=>{c&&(ut({}),qn.c=c),l&&(s.$$events=l),p=n(b,s)||{},c&&dt()}),()=>{for(var b of d){a.removeEventListener(b,pl);var j=is.get(b);--j===0?(document.removeEventListener(b,pl),is.delete(b)):is.set(b,j)}var x;Gd.delete(v),y!==i&&((x=y.parentNode)===null||x===void 0||x.removeChild(y))}});return Xd.set(p,g),p}(e,t)}var is=new Map,Xd=new WeakMap;function Zr(e){qn===null&&Jl(),Vs&&qn.l!==null?Sm(qn).m.push(e):Kd(()=>{var t=D(e);if(typeof t=="function")return t})}function Ro(e){qn===null&&Jl(),Zr(()=>()=>D(e))}function lx(){var e=qn;return e===null&&Jl(),(t,n,o)=>{var a,i=(a=e.s.$$events)===null||a===void 0?void 0:a[t];if(i){var s=Hs(i)?i.slice():[i],l=function(u,d){var{bubbles:v=!1,cancelable:p=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(u,{detail:d,bubbles:v,cancelable:p})}(t,n,o);for(var c of s)c.call(e.x,l);return!l.defaultPrevented}return!0}}function cx(e){qn===null&&Jl(),qn.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),Sm(qn).b.push(e)}function Sm(e){var t,n=e.l;return(t=n.u)!==null&&t!==void 0?t:n.u={a:[],b:[],m:[]}}function ie(e,t){var n=e,o=null,a=null,i=Lr,s=!1,l=function(d){s=!0,u(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],d)};function c(){var d=i?o:a,v=i?a:o;d&&Yd(d),v&&Yi(v,()=>{i?a=null:o=null})}var u=(d,v)=>{if(i!==(i=d)){var p=n;i?o!=null||(o=v&&So(()=>v(p))):a!=null||(a=v&&So(()=>v(p))),c()}};mi(()=>{s=!1,t(l),s||u(null,null)},arguments.length>2&&arguments[2]!==void 0&&arguments[2]?Hl:0)}function Om(e,t,n){var o,a,i=e,s=Lr,l=Ks()?Fj:Yv;function c(){o&&Yi(o),o=a}mi(()=>{if(l(s,s=t())){var u=i;a=So(()=>n(u)),c()}})}function Cr(e,t){return t}function dr(e,t,n,o,a){var i=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,s=e,l={flags:t,items:new Map,first:null};!(4&t)||(s=e.appendChild(Yl()));var c,u,d=null,v=!1,p=new Map,g=Ze(()=>{var b=n();return Hs(b)?b:b==null?[]:qd(b)});function y(){(function(b,j,x,C,T,O,w,z,U){var ae,M,K,J,I,re,we=!!(8&w),se=!!(3&w),ze=j.length,Ie=x.items,Ue=x.first,ue=Ue,me=null,Me=[],et=[];if(we)for(re=0;re<ze;re+=1){var ke;J=z(K=j[re],re),(I=Ie.get(J))!==void 0&&((ke=I.a)===null||ke===void 0||ke.measure(),(M??(M=new Set)).add(I))}for(re=0;re<ze;re+=1)if(J=z(K=j[re],re),(I=Ie.get(J))!==void 0){var de;if(se&&ux(I,K,re,w),I.e.f&ia&&(Yd(I.e),we&&((de=I.a)===null||de===void 0||de.unfix(),(M??(M=new Set)).delete(I))),I!==ue){if(ae!==void 0&&ae.has(I)){if(Me.length<et.length){var xe,mt=et[0];me=mt.prev;var Gt=Me[0],fe=Me[Me.length-1];for(xe=0;xe<Me.length;xe+=1)od(Me[xe],mt,T);for(xe=0;xe<et.length;xe+=1)ae.delete(et[xe]);Zo(x,Gt.prev,fe.next),Zo(x,me,Gt),Zo(x,fe,mt),ue=mt,me=fe,re-=1,Me=[],et=[]}else ae.delete(I),od(I,ue,T),Zo(x,I.prev,I.next),Zo(x,I,me===null?x.first:me.next),Zo(x,me,I),me=I;continue}for(Me=[],et=[];ue!==null&&ue.k!==J;)!(ue.e.f&ia)&&(ae??(ae=new Set)).add(ue),et.push(ue),ue=ue.next;if(ue===null)continue;I=ue}Me.push(I),me=I,ue=I.next}else{var H=C.get(J);if(H!==void 0){C.delete(J),Ie.set(J,H);var ge=me?me.next:ue;Zo(x,me,H),Zo(x,H,ge),od(H,ge,T),me=H}else me=dx(ue?ue.e.nodes_start:T,x,me,me===null?x.first:me.next,K,J,re,O,w,U);Ie.set(J,me),Me=[],et=[],ue=me.next}if(ue!==null||ae!==void 0){for(var B=ae===void 0?[]:qd(ae);ue!==null;)!(ue.e.f&ia)&&B.push(ue),ue=ue.next;var pe=B.length;if(pe>0){var G=4&w&&ze===0?T:null;if(we){for(re=0;re<pe;re+=1){var qe;(qe=B[re].a)===null||qe===void 0||qe.measure()}for(re=0;re<pe;re+=1){var te;(te=B[re].a)===null||te===void 0||te.fix()}}(function(st,it,Ce){for(var wt=st.items,Le=[],Ve=it.length,ht=0;ht<Ve;ht++)Xv(it[ht].e,Le,!0);var De=Ve>0&&Le.length===0&&Ce!==null;if(De){var Mt=Ce.parentNode;Mt.textContent="",Mt.append(Ce),wt.clear(),Zo(st,it[0].prev,it[Ve-1].next)}fm(Le,()=>{for(var k=0;k<Ve;k++){var S=it[k];De||(wt.delete(S.k),Zo(st,S.prev,S.next)),ro(S.e,!De)}})})(x,B,G)}}we&&Ki(()=>{if(M!==void 0)for(I of M){var st;(st=I.a)===null||st===void 0||st.apply()}});for(var L of(b.first=x.first&&x.first.e,b.last=me&&me.e,C.values()))ro(L.e);C.clear()})(u,c,l,p,s,a,t,o,n),i!==null&&(c.length===0?d?Yd(d):d=So(()=>i(s)):d!==null&&Yi(d,()=>{d=null}))}mi(()=>{u!=null||(u=un);var b=(c=r(g)).length;v&&b===0||(v=b===0,y(),r(g))})}function ux(e,t,n,o){1&o&&Is(e.v,t),2&o?Is(e.i,n):e.i=n}function dx(e,t,n,o,a,i,s,l,c,u,d){var v=1&c?16&c?Na(a):N(a,!1,!1):a,p=2&c?Na(s):s,g={i:p,v,k:i,a:null,e:null,prev:n,next:o};try{return e===null&&document.createDocumentFragment().append(e=Yl()),g.e=So(()=>l(e,v,p,u),!1),g.e.prev=n&&n.e,g.e.next=o&&o.e,n===null?d||(t.first=g):(n.next=g,n.e.next=g.e),o!==null&&(o.prev=g,o.e.prev=g.e),g}finally{}}function od(e,t,n){for(var o=e.next?e.next.e.nodes_start:n,a=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==null&&i!==o;){var s=Ql(i);a.before(i),i=s}}function Zo(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Em(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],a=e,i="";Te(()=>{var s,l=un;if(i!==(i=(s=t())!==null&&s!==void 0?s:"")&&(l.nodes_start!==null&&(dm(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),i!=="")){var c=i+"";n?c="<svg>".concat(c,"</svg>"):o&&(c="<math>".concat(c,"</math>"));var u=Zv(c);if((n||o)&&(u=xo(u)),Li(xo(u),u.lastChild),n||o)for(;xo(u);)a.before(xo(u));else a.before(u)}})}function cr(e,t,n,o,a){var i,s=(i=t.$$slots)===null||i===void 0?void 0:i[n],l=!1;s===!0&&(s=t[n==="default"?"children":n],l=!0),s===void 0?a!==null&&a(e):s(e,l?()=>o:o)}function _m(e,t,n){var o,a,i=e,s=null;function l(){a&&(Yi(a),a=null),a=s,s=null}mi(()=>{if(o!==(o=t())){if(o){var c=i;s=So(()=>n(c,o))}l()}},Hl)}function no(e,t,n){Kr(()=>{var o=D(()=>t(e,n?.())||{});if(n&&o!=null&&o.update){var a=!1,i={};Ys(()=>{var s=n();m(s),a&&Yv(i,s)&&(i=s,o.update(s))}),a=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function vx(e,t){var n,o=void 0;mi(()=>{o!==(o=t())&&(n&&(ro(n),n=null),o&&(n=So(()=>{Kr(()=>o(e))})))})}function Mm(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Mm(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function vi(e){return typeof e=="object"?function(){for(var t,n,o=0,a="",i=arguments.length;o<i;o++)(t=arguments[o])&&(n=Mm(t))&&(a&&(a+=" "),a+=n);return a}(e):e??""}var wp=[...` 	
\r\f \v\uFEFF`];function kp(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",n="";for(var o in e){var a=e[o];a!=null&&a!==""&&(n+=" "+o+": "+a+t)}return n}function ad(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Tt(e,t,n,o,a,i){var s=e.__className;if(s!==n||s===void 0){var l=function(d,v,p){var g=d==null?"":""+d;if(v&&(g=g?g+" "+v:v),p){for(var y in p)if(p[y])g=g?g+" "+y:y;else if(g.length)for(var b=y.length,j=0;(j=g.indexOf(y,j))>=0;){var x=j+b;j!==0&&!wp.includes(g[j-1])||x!==g.length&&!wp.includes(g[x])?j=x:g=(j===0?"":g.substring(0,j))+g.substring(x+1)}}return g===""?null:g}(n,o,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=n}else if(i&&a!==i)for(var c in i){var u=!!i[c];a!=null&&u===!!a[c]||e.classList.toggle(c,u)}return i}function id(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,o))}}function To(e,t,n,o){if(e.__style!==t){var a=function(i,s){if(s){var l,c,u="";if(Array.isArray(s)?(l=s[0],c=s[1]):l=s,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var d=!1,v=0,p=!1,g=[];l&&g.push(...Object.keys(l).map(ad)),c&&g.push(...Object.keys(c).map(ad));for(var y=0,b=-1,j=i.length,x=0;x<j;x++){var C=i[x];if(p?C==="/"&&i[x-1]==="*"&&(p=!1):d?d===C&&(d=!1):C==="/"&&i[x+1]==="*"?p=!0:C==='"'||C==="'"?d=C:C==="("?v++:C===")"&&v--,!p&&d===!1&&v===0){if(C===":"&&b===-1)b=x;else if(C===";"||x===j-1){if(b!==-1){var T=ad(i.substring(y,b).trim());g.includes(T)||(C!==";"&&x++,u+=" "+i.substring(y,x).trim()+";")}y=x+1,b=-1}}}}return l&&(u+=kp(l)),c&&(u+=kp(c,!0)),(u=u.trim())===""?null:u}return i==null?null:String(i)}(t,o);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else o&&(Array.isArray(o)?(id(e,n?.[0],o[0]),id(e,n?.[1],o[1],"important")):id(e,n,o));return o}function Zd(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!Hs(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(Cp(o))}else{for(o of e.options)if(Xj(Cp(o),t))return void(o.selected=!0);n&&t===void 0||(e.selectedIndex=-1)}}function fx(e){var t=new MutationObserver(()=>{Zd(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Gv(()=>{t.disconnect()})}function Cp(e){return"__value"in e?e.__value:e.value}var ps=Symbol("class"),cl=Symbol("style"),Am=Symbol("is custom element"),Tm=Symbol("is html");function Bi(e,t){var n=ef(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function xn(e,t,n,o){var a=ef(e);a[t]!==(a[t]=n)&&(t==="loading"&&(e[Bj]=n),n==null?e.removeAttribute(t):typeof n!="string"&&zm(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function px(e,t,n,o){var a,i=ef(e),s=i[Am],l=!i[Tm],c=t||{},u=e.tagName==="OPTION";for(var d in t)d in n||(n[d]=null);n.class?n.class=vi(n.class):(o||n[ps])&&(n.class=null),n[cl]&&((a=n.style)!==null&&a!==void 0||(n.style=null));var v,p,g,y,b,j,x=zm(e),C=function(O){var w=n[O];if(u&&O==="value"&&w==null)return e.value=e.__value="",c[O]=w,0;if(O==="class")return v=e.namespaceURI==="http://www.w3.org/1999/xhtml",Tt(e,v,w,o,t?.[ps],n[ps]),c[O]=w,c[ps]=n[ps],0;if(O==="style")return To(e,w,t?.[cl],n[cl]),c[O]=w,c[cl]=n[cl],0;if(w===(p=c[O])&&(w!==void 0||!e.hasAttribute(O))||(c[O]=w,(g=O[0]+O[1])==="$$"))return 0;if(g==="on"){var z={},U="$$"+O,ae=O.slice(2);if(y=function(re){return rx.includes(re)}(ae),function(re){return re.endsWith("capture")&&re!=="gotpointercapture"&&re!=="lostpointercapture"}(ae)&&(ae=ae.slice(0,-7),z.capture=!0),!y&&p){if(w!=null)return 0;e.removeEventListener(ae,c[U],z),c[U]=null}if(w!=null)if(y)e["__".concat(ae)]=w,Xl([ae]);else{let re=function(we){c[O].call(this,we)};c[U]=Cm(ae,e,re,z)}else y&&(e["__".concat(ae)]=void 0)}else if(O==="style")xn(e,O,w);else if(O==="autofocus")(function(re,we){if(we){var se=document.body;re.autofocus=!0,Ki(()=>{document.activeElement===se&&re.focus()})}})(e,!!w);else if(s||O!=="__value"&&(O!=="value"||w==null))if(O==="selected"&&u)(function(re,we){we?re.hasAttribute("selected")||re.setAttribute("selected",""):re.removeAttribute("selected")})(e,w);else if(b=O,l||(b=function(re){var we;return re=re.toLowerCase(),(we=ox[re])!==null&&we!==void 0?we:re}(b)),j=b==="defaultValue"||b==="defaultChecked",w!=null||s||j)j||x.includes(b)&&(s||typeof w!="string")?(e[b]=w,b in i&&(i[b]=Lr)):typeof w!="function"&&xn(e,b,w);else if(i[O]=null,b==="value"||b==="checked"){var M=e,K=t===void 0;if(b==="value"){var J=M.defaultValue;M.removeAttribute(b),M.defaultValue=J,M.value=M.__value=K?J:null}else{var I=M.defaultChecked;M.removeAttribute(b),M.defaultChecked=I,M.checked=!!K&&I}}else e.removeAttribute(O);else e.value=e.__value=w};for(var T in n)C(T);return c}function Nc(e,t){var n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&arguments[5]!==void 0&&arguments[5],a=arguments.length>6&&arguments[6]!==void 0&&arguments[6];em(arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],i=>{var s=void 0,l={},c=e.nodeName==="SELECT",u=!1;if(mi(()=>{var v=t(...i.map(r)),p=px(e,s,v,n,o,a);for(var g of(u&&c&&"value"in v&&Zd(e,v.value),Object.getOwnPropertySymbols(l)))v[g]||ro(l[g]);for(var y of Object.getOwnPropertySymbols(v)){var b=v[y];y.description!=="@attach"||s&&b===s[y]||(l[y]&&ro(l[y]),l[y]=So(()=>vx(e,()=>b))),p[y]=b}s=p}),c){var d=e;Kr(()=>{Zd(d,s.value,!0),fx(d)})}u=!0})}function ef(e){var t;return(t=e.__attributes)!==null&&t!==void 0?t:e.__attributes={[Am]:e.nodeName.includes("-"),[Tm]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var Sp=new Map;function zm(e){var t,n=e.getAttribute("is")||e.nodeName,o=Sp.get(n);if(o)return o;Sp.set(n,o=[]);for(var a=e,i=Element.prototype;i!==a;){for(var s in t=Bg(a))t[s].set&&o.push(s);a=Hv(a)}return o}function Zc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=new WeakSet;Zj(e,"input",function(){var a=gt(function*(i){var s=i?e.defaultValue:e.value;if(s=sd(e)?ld(s):s,n(s),Ar!==null&&o.add(Ar),yield jm(),s!==(s=t())){var l=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(c,e.value.length))}});return function(i){return a.apply(this,arguments)}}()),D(t)==null&&e.value&&(n(sd(e)?ld(e.value):e.value),Ar!==null&&o.add(Ar)),Ys(()=>{var a=t();if(e===document.activeElement){var i=yl??Ar;if(o.has(i))return}sd(e)&&a===ld(e.value)||(e.type!=="date"||a||e.value)&&a!==e.value&&(e.value=a??"")})}function sd(e){var t=e.type;return t==="number"||t==="range"}function ld(e){return e===""?null:+e}function xt(e,t,n){var o=_a(e,t);o&&o.set&&(e[t]=n,Gv(()=>{e[t]=null}))}function Op(e,t){return e===t||e?.[sa]===t}function Qn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return Kr(()=>{var o,a;return Ys(()=>{o=a,a=[],D(()=>{e!==n(...a)&&(t(e,...a),o&&Op(n(...o),e)&&t(null,...o))})}),()=>{Ki(()=>{a&&Op(n(...a),e)&&t(null,...a)})}}),e}function ja(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n[0].stopPropagation(),e?.apply(this,n)}}function Va(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n[0].preventDefault(),e?.apply(this,n)}}function zt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=qn,n=t.l.u;if(n){var o,a=()=>m(t.s);if(e){var i=0,s={},l=Kl(()=>{var c=!1,u=t.s;for(var d in u)u[d]!==s[d]&&(s[d]=u[d],c=!0);return c&&i++,i});a=()=>r(l)}n.b.length&&(o=()=>{Ep(t,a),Qc(n.b)},sm(),pa(1048584,o,!0)),Kd(()=>{var c=D(()=>n.m.map(Dj));return()=>{for(var u of c)typeof u=="function"&&u()}}),n.a.length&&Kd(()=>{Ep(t,a),Qc(n.a)})}}function Ep(e,t){if(e.l.s)for(var n of e.l.s)r(n);t()}function Tu(e){var t=Na(0);return function(){return arguments.length===1?(f(t,r(t)+1),arguments[0]):(r(t),e())}}function hl(e,t){var n,o=(n=e.$$events)===null||n===void 0?void 0:n[t.type],a=Hs(o)?o.slice():o==null?[]:[o];for(var i of a)i.call(this,t)}var hc=!1,hx={get(e,t){if(!e.exclude.includes(t))return r(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var o=un;try{zo(e.parent_effect),e.special[t]=h({get[t](){return e.props[t]}},t,4)}finally{zo(o)}}return e.special[t](n),gp(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),gp(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function gc(e,t){return new Proxy({props:e,exclude:t,special:{},version:Na(0),parent_effect:un},hx)}var gx={get(e,t){for(var n=e.props.length;n--;){var o=e.props[n];if(il(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,n){for(var o=e.props.length;o--;){var a=e.props[o];il(a)&&(a=a());var i=_a(a,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){for(var n=e.props.length;n--;){var o=e.props[n];if(il(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var a=_a(o,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===sa||t===Vg)return!1;for(var n of e.props)if(il(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){var t=[];for(var n of e.props)if(il(n)&&(n=n()),n){for(var o in n)t.includes(o)||t.push(o);for(var a of Object.getOwnPropertySymbols(n))t.includes(a)||t.push(a)}return t}};function ii(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Proxy({props:t},gx)}function h(e,t,n,o){var a,i,s=!Vs||!!(2&n),l=!!(8&n),c=!!(16&n),u=o,d=!0,v=()=>(d&&(d=!1,u=c?D(o):o),u);if(l){var p,g,y=sa in e||Vg in e;a=(p=(g=_a(e,t))===null||g===void 0?void 0:g.set)!==null&&p!==void 0?p:y&&t in e?w=>e[t]=w:void 0}var b,j=!1;if(l?[i,j]=function(w){var z=hc;try{return hc=!1,[w(),hc]}finally{hc=z}}(()=>e[t]):i=e[t],i===void 0&&o!==void 0&&(i=v(),a&&(s&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),a(i))),b=s?()=>{var w=e[t];return w===void 0?v():(d=!0,w)}:()=>{var w=e[t];return w!==void 0&&(u=void 0),w===void 0?u:w},s&&!(4&n))return b;if(a){var x=e.$$legacy;return function(w,z){return arguments.length>0?(s&&z&&!x&&!j||a(z?b():w),w):b()}}var C=!1,T=(1&n?Kl:Ze)(()=>(C=!1,b()));l&&r(T);var O=un;return function(w,z){if(arguments.length>0){var U=z?r(T):s&&l?ms(w):w;return f(T,U),C=!0,u!==void 0&&(u=U),w}return Qi&&C||O.f&Js?T.v:r(T)}}function Dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var a=function(i){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[i]}catch{}}("debug");return a!=null&&a.endsWith("*")?o.startsWith(a.slice(0,-1)):o===a}(e);if(!t)return mx;var n=function(o){for(var a=0,i=0;i<o.length;i++)a=(a<<5)-a+o.charCodeAt(i),a|=0;return _p[Math.abs(a)%_p.length]}(e);return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];console.log("%c".concat(e),"color:".concat(n),...a)}}function mx(){}var _p=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],bx=0;function bs(){return++bx}function Yr(e){return parseInt(e,10)}function tf(e){return yx.test(e)}var yx=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function yn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function ar(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function jx(e){return e===!0||e===!1}function ev(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return ev(Number(e));try{var t=e&&e.valueOf();if(t!==e)return ev(t)}catch{return!1}return!1}function Rm(e){(mc=mc||window.document.createElement("div")).style.color="",mc.style.color=e;var t=mc.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var mc=void 0;function xx(e){return typeof e=="string"&&e.length<99&&!!Rm(e)}function nf(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(yn(e))return"object";var n=t.stringify(e);return n&&tf(n)?"number":n==="true"||n==="false"?"boolean":n==="null"?"null":"unknown"}var wx=/^https?:\/\/\S+$/;function zu(e){return typeof e=="string"&&wx.test(e)}function Qs(e,t){if(e==="")return"";var n=e.trim();return n==="null"?null:n==="true"||n!=="false"&&(tf(n)?t.parse(n):e)}var kx=[];function Mp(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function tv(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(s,l){(!Array.isArray(s)&&!yn(s)||t&&l.length>0)&&(n[ft(l)]=!0),yn(s)&&Object.keys(s).forEach(c=>{o(s[c],l.concat(c))})}for(var a=Math.min(e.length,1e4),i=0;i<a;i++)o(e[i],kx);return Object.keys(n).sort().map(fo)}function Pm(e,t,n){if(!(t<=e))for(var o=e;o<t;o++)n(o)}function eu(e,t){return e.length>t?e.slice(0,t):e}function Ap(e){return Ae({},e)}function Tp(e){return Object.values(e)}function zp(e,t,n,o){var a=e.slice(0),i=a.splice(t,n);return a.splice.apply(a,[t+o,0,...i]),a}function Cx(e,t,n){return e.slice(0,t).concat(n).concat(e.slice(t))}function Zl(e,t){try{return t.parse(e)}catch{return t.parse(aa(e))}}function Nm(e,t){try{return Zl(e,t)}catch{return}}function ec(e,t){e=e.replace(Im,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function $m(e){e=e.replace(Im,"");try{return aa(e)}catch{}try{var t=aa("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var n=aa("{"+e+"}");return n.substring(1,n.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var Im=/,\s*$/;function qs(e,t){var n=Pp.exec(t);if(n){var o=Yr(n[2]),a=function(g,y){for(var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:g.length,x=0,C=b;C<j;C++)g.charAt(C)===y&&x++;return x}(e,`
`,0,o),i=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:a,column:i,message:t.replace(Pp,()=>"line ".concat(a+1," column ").concat(i+1))}}var s=_x.exec(t),l=s?Yr(s[1]):void 0,c=l!==void 0?l-1:void 0,u=Mx.exec(t),d=u?Yr(u[1]):void 0,v=d!==void 0?d-1:void 0,p=c!==void 0&&v!==void 0?function(g,y,b){for(var j=g.indexOf(`
`),x=1;x<y&&j!==-1;)j=g.indexOf(`
`,j+1),x++;return j!==-1?j+b+1:void 0}(e,c,v):void 0;return{position:p,line:c,column:v,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function cd(e,t){try{var n=Cu.parse(e),o=ft(t),a=n.pointers[o];if(a)return{path:t,line:a.key?a.key.line:a.value?a.value.line:0,column:a.key?a.key.column:a.value?a.value.column:0,from:a.key?a.key.pos:a.value?a.value.pos:0,to:a.keyEnd?a.keyEnd.pos:a.valueEnd?a.valueEnd.pos:0}}catch(i){console.error(i)}return{path:t,line:0,column:0,from:0,to:0}}function ud(e){return yn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function _l(e){return yn(e)&&typeof e.text=="string"}function Ml(e){return yn(e)&&e.json!==void 0}function Sx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return _l(e)?e:{text:n.stringify(e.json,null,t)}}function Rp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Ml(e)?e:{json:t.parse(e.text)}}function nv(e,t,n){return Sx(e,t,n).text}function Ox(e,t){return Ex(e,t)>t}function Ex(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(_l(e))return e.text.length;var n=e.json,o=0;return function a(i){if(Array.isArray(i)){if((o+=i.length-1+2)>t)return;for(var s=0;s<i.length;s++)if(a(i[s]),o>t)return}else if(yn(i)){var l=Object.keys(i);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var u=l[c],d=i[u];o+=u.length+2,a(d)}}else o+=typeof i=="string"?i.length+2:String(i).length}(n),o}var Pp=/(position|char) (\d+)/,_x=/line (\d+)/,Mx=/column (\d+)/;function qm(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function Np(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&Ax.test(t)}var kr,Nn,Lo,Vo,Ho,Mo,si,Ax=/[,:]\S/;function rf(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:n}=e;return t?n?Tx:zx:n?Rx:Px}(function(e){e.text="text",e.tree="tree",e.table="table"})(kr||(kr={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(Nn||(Nn={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(Lo||(Lo={})),function(e){e.info="info",e.warning="warning",e.error="error"}(Vo||(Vo={})),function(e){e.key="key",e.value="value"}(Ho||(Ho={})),function(e){e.asc="asc",e.desc="desc"}(Mo||(Mo={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(si||(si={}));var Tx={escapeValue:e=>Dm(Bm(String(e))),unescapeValue:e=>Fm(Um(e))},zx={escapeValue:e=>Bm(String(e)),unescapeValue:e=>Fm(e)},Rx={escapeValue:e=>Dm(String(e)),unescapeValue:e=>Um(e)},Px={escapeValue:e=>String(e),unescapeValue:e=>e};function Dm(e){return e.replace(/[^\x20-\x7F]/g,t=>{var n;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((n=t.codePointAt(0))===null||n===void 0?void 0:n.toString(16))).slice(-4)})}function Um(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var n=JSON.parse('"'+t+'"');return Lm[n]||n}catch{return t}})}var Lm={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Nx={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function Bm(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>Lm[t]||t)}function Fm(e){return e.replace(/\\["bfnrt\\]/g,t=>Nx[t]||t)}function Ds(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function Wm(e,t){return Gs(e,n=>n.nodeName.toUpperCase()===t.toUpperCase())}function ni(e,t,n){return Gs(e,o=>function(a,i,s){return typeof a.getAttribute=="function"&&a.getAttribute(i)===s}(o,t,n))}function Gs(e,t){return!!of(e,t)}function of(e,t){for(var n=e;n&&!t(n);)n=n.parentNode;return n}function tc(e){var t,n;return(t=e==null||(n=e.ownerDocument)===null||n===void 0?void 0:n.defaultView)!==null&&t!==void 0?t:void 0}function af(e){var t=tc(e),n=t?.document.activeElement;return!!n&&Gs(n,o=>o===e)}function Vm(e,t){return of(e,n=>n.nodeName===t)}function dd(e){return ni(e,"data-type","selectable-key")?Nn.key:ni(e,"data-type","selectable-value")?Nn.value:ni(e,"data-type","insert-selection-area-inside")?Nn.inside:ni(e,"data-type","insert-selection-area-after")?Nn.after:Nn.multi}function $c(e){return encodeURIComponent(ft(e))}function Hm(e){var t,n=of(e,a=>!(a==null||!a.hasAttribute)&&a.hasAttribute("data-path")),o=(t=n?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?fo(decodeURIComponent(o)):void 0}function $x(e){var{allElements:t,currentElement:n,direction:o,hasPrio:a=()=>!0,margin:i=10}=e,s=Wb(t.filter(function(x){var C=x.getBoundingClientRect();return C.width>0&&C.height>0}),c),l=c(n);function c(x){var C=x.getBoundingClientRect();return{x:C.left+C.width/2,y:C.top+C.height/2,rect:C,element:x}}function u(x,C){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,O=x.x-C.x,w=(x.y-C.y)*T;return Math.sqrt(O*O+w*w)}var d=x=>u(x,l);if(o==="Left"||o==="Right"){var v=o==="Left"?s.filter(x=>{return C=l,x.rect.left+i<C.rect.left;var C}):s.filter(x=>{return C=l,x.rect.right>C.rect.right+i;var C}),p=v.filter(x=>{return C=x,T=l,Math.abs(C.y-T.y)<i;var C,T}),g=lc(p,d)||lc(v,x=>u(x,l,10));return g?.element}if(o==="Up"||o==="Down"){var y=o==="Up"?s.filter(x=>{return C=l,x.y+i<C.y;var C}):s.filter(x=>{return C=l,x.y>C.y+i;var C}),b=y.filter(x=>a(x.element)),j=lc(b,d)||lc(y,d);return j?.element}}function sf(){var e,t,n,o;return typeof navigator<"u"&&(e=(t=(n=navigator)===null||n===void 0||(n=n.platform)===null||n===void 0?void 0:n.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",n=[];lf(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:sf)&&n.push("Ctrl"),e.altKey&&n.push("Alt"),e.shiftKey&&n.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in Ix||n.push(o),n.join(t)}function lf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sf;return e.ctrlKey||e.metaKey&&t()}var Ix={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function Ot(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}Ot(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var qx=ee('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),Dx=ee('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function Ux(e,t){ut(t,!1);var n=h(t,"popup",8),o=h(t,"closeAbsolutePopup",8),a=N(),i=N();function s(v){n().options&&n().options.closeOnOuterClick&&!Gs(v.target,p=>p===r(a))&&o()(n().id)}function l(v){$a(v)==="Escape"&&(v.preventDefault(),v.stopPropagation(),o()(n().id))}Zr(function(){r(i)&&r(i).focus()}),zt();var c=Dx();Oe("mousedown",Ma,function(v){s(v)},!0),Oe("keydown",Ma,l,!0),Oe("wheel",Ma,function(v){s(v)},!0);var u=P(c),d=v=>{var p=qx(),g=P(p);Qn(g,y=>f(i,y),()=>r(i)),_m(V(g,2),()=>n().component,(y,b)=>{b(y,ii(()=>n().props))}),Te(y=>To(p,y),[()=>(r(a),m(n()),D(()=>function(y,b){var j=y.getBoundingClientRect(),{left:x,top:C,positionAbove:T,positionLeft:O}=function(){if(b.anchor){var{anchor:w,width:z=0,height:U=0,offsetTop:ae=0,offsetLeft:M=0,position:K}=b,{left:J,top:I,bottom:re,right:we}=w.getBoundingClientRect(),se=K==="top"||I+U>window.innerHeight&&I>U,ze=K==="left"||J+z>window.innerWidth&&J>z;return{left:ze?we-M:J+M,top:se?I-ae:re+ae,positionAbove:se,positionLeft:ze}}if(typeof b.left=="number"&&typeof b.top=="number"){var{left:Ie,top:Ue,width:ue=0,height:me=0}=b;return{left:Ie,top:Ue,positionAbove:Ue+me>window.innerHeight&&Ue>me,positionLeft:Ie+ue>window.innerWidth&&Ie>ue}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(T?"bottom: ".concat(j.top-C,"px;"):"top: ".concat(C-j.top,"px;"))+(O?"right: ".concat(j.left-x,"px;"):"left: ".concat(x-j.left,"px;"))}(r(a),n().options)))]),R(v,p)};ie(u,v=>{r(a)&&v(d)}),Qn(c,v=>f(a,v),()=>r(a)),Oe("mousedown",c,function(v){v.stopPropagation()}),Oe("keydown",c,l),R(e,c),dt()}var Lx=ee("<!> <!>",1);function rv(e,t){ut(t,!1);var n=Dr("jsoneditor:AbsolutePopup"),o=N([],!0);function a(l){var c=r(o).findIndex(d=>d.id===l);if(c!==-1){var u=r(o)[c];u.options.onClose&&u.options.onClose(),f(o,r(o).filter(d=>d.id!==l))}}(function(l,c){Kg().set(l,c)})("absolute-popup",{openAbsolutePopup:function(l,c,u){n("open...",c,u);var d={id:bs(),component:l,props:c||{},options:u||{}};return f(o,[...r(o),d]),d.id},closeAbsolutePopup:a}),X(()=>r(o),()=>{n("popups",r(o))}),wn(),zt(!0);var i=Lx(),s=Xe(i);dr(s,1,()=>r(o),Cr,(l,c)=>{Ux(l,{get popup(){return r(c)},closeAbsolutePopup:a})}),cr(V(s,2),t,"default",{},null),R(e,i),dt()}function nc(e,t){for(var n=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),a=e,i=1;n.has(a);){var s="copy"+(i>1?" "+i:"");a="".concat(o," (").concat(s,")"),i++}return a}function ka(e,t){var n=t-3;return e.length>t?e.substring(0,n)+"...":e}function Bx(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var n=Number(e),o=parseFloat(e);return isNaN(n)||isNaN(o)?e:n}}var Fx={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:n,sort:o,projection:a}=t,i=[];n&&n.path&&n.relation&&n.value&&i.push(["filter",[(s=n.relation,s1("1 ".concat(s," 1"))[0]),bc(n.path),Bx(n.value)]]);var s;return o&&o.path&&o.direction&&i.push(["sort",bc(o.path),o.direction==="desc"?"desc":"asc"]),a&&a.paths&&(a.paths.length>1?i.push(["pick",...a.paths.map(bc)]):i.push(["map",bc(a.paths[0])])),l1(["pipe",...i])},executeQuery:function(e,t,n){var o=qm(n,JSON)?e:function(a){var i=n.stringify(a);return i!==void 0?JSON.parse(i):void 0}(e);return t.trim()!==""?c1(o,t):o}};function bc(e){return["get",...e]}var Wx=bi("<g><!></g>");function Vx(e,t){ut(t,!1);var n=870711,o=N(""),a=h(t,"data",8);function i(l){if(!l||!l.raw)return"";var c=l.raw,u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(d,v)=>{var p="fa-".concat((n+=1).toString(16));return u[v]=p,' id="'.concat(p,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,v,p,g)=>{var y=v||g;return y&&u[y]?"#".concat(u[y]):d}),c}X(()=>m(a()),()=>{f(o,i(a()))}),wn();var s=Wx();Em(P(s),()=>r(o),!0),R(e,s),dt()}Ot(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var Hx=bi("<svg><!></svg>"),Jx=bi("<path></path>"),Kx=bi("<polygon></polygon>"),Yx=bi("<!><!><!>",1);function rn(e,t){var n=gc(t,["children","$$slots","$$events","$$legacy"]),o=gc(n,["class","data","scale","spin","inverse","pulse","flip","label","style"]);ut(t,!1);var a=h(t,"class",8,""),i=h(t,"data",8),s=N(),l=h(t,"scale",8,1),c=h(t,"spin",8,!1),u=h(t,"inverse",8,!1),d=h(t,"pulse",8,!1),v=h(t,"flip",8,void 0),p=h(t,"label",8,""),g=h(t,"style",8,""),y=N(10),b=N(10),j=N(),x=N();function C(){var O=1;return l()!==void 0&&(O=Number(l())),isNaN(O)||O<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*O}function T(){return r(s)?Math.max(r(s).width,r(s).height)/16:1}X(()=>(m(i()),m(g()),m(l())),()=>{f(s,function(O){var w;if(O){if(!("definition"in O)){if("iconName"in O&&"icon"in O){O.iconName;var[z,U,,,ae]=O.icon;w={width:z,height:U,paths:(Array.isArray(ae)?ae:[ae]).map(M=>({d:M}))}}else w=O[Object.keys(O)[0]];return w}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(i())),g(),l(),f(y,r(s)?r(s).width/T()*C():0),f(b,r(s)?r(s).height/T()*C():0),f(j,function(){var O="";g()!==null&&(O+=g());var w=C();return w===1?O.length===0?"":O:(O===""||O.endsWith(";")||(O+="; "),"".concat(O,"font-size: ").concat(w,"em"))}()),f(x,r(s)?"0 0 ".concat(r(s).width," ").concat(r(s).height):"0 0 ".concat(r(y)," ").concat(r(b)))}),wn(),zt(),function(O,w){var z=gc(w,["children","$$slots","$$events","$$legacy"]),U=gc(z,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),ae=h(w,"class",8,""),M=h(w,"width",8),K=h(w,"height",8),J=h(w,"box",8,"0 0 0 0"),I=h(w,"spin",8,!1),re=h(w,"inverse",8,!1),we=h(w,"pulse",8,!1),se=h(w,"flip",8,"none"),ze=h(w,"style",8,""),Ie=h(w,"label",8,""),Ue=Hx();Nc(Ue,ue=>{var me;return Ae(Ae({version:"1.1",class:"fa-icon ".concat((me=ae())!==null&&me!==void 0?me:""),width:M(),height:K(),"aria-label":Ie(),role:Ie()?"img":"presentation",viewBox:J(),style:ze()},U),{},{[ps]:ue})},[()=>({"fa-spin":I(),"fa-pulse":we(),"fa-inverse":re(),"fa-flip-horizontal":se()==="horizontal","fa-flip-vertical":se()==="vertical"})],void 0,"svelte-v67cny"),cr(P(Ue),w,"default",{},null),R(O,Ue)}(e,ii({get label(){return p()},get width(){return r(y)},get height(){return r(b)},get box(){return r(x)},get style(){return r(j)},get spin(){return c()},get flip(){return v()},get inverse(){return u()},get pulse(){return d()},get class(){return a()}},()=>o,{children:(O,w)=>{var z=Ut();cr(Xe(z),t,"default",{},U=>{var ae=Yx(),M=Xe(ae);dr(M,1,()=>(r(s),D(()=>{var re;return((re=r(s))===null||re===void 0?void 0:re.paths)||[]})),Cr,(re,we)=>{var se=Jx();Nc(se,()=>Ae({},r(we))),R(re,se)});var K=V(M);dr(K,1,()=>(r(s),D(()=>{var re;return((re=r(s))===null||re===void 0?void 0:re.polygons)||[]})),Cr,(re,we)=>{var se=Kx();Nc(se,()=>Ae({},r(we))),R(re,se)});var J=V(K),I=re=>{Vx(re,{get data(){return r(s)},set data(we){f(s,we)},$$legacy:!0})};ie(J,re=>{r(s),D(()=>{var we;return(we=r(s))===null||we===void 0?void 0:we.raw})&&re(I)}),R(U,ae)}),R(O,z)},$$slots:{default:!0}})),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var Qx=ee('<div role="checkbox" tabindex="-1"><!></div>');function Gx(e,t){ut(t,!1);var n=h(t,"path",9),o=h(t,"value",9),a=h(t,"readOnly",9),i=h(t,"onPatch",9),s=h(t,"focus",9);zt(!0);var l,c=Qx(),u=P(c),d=Ze(()=>o()===!0?Og:Eg);rn(u,{get data(){return r(d)}}),Te(v=>{xn(c,"aria-checked",o()===!0),l=Tt(c,1,"jse-boolean-toggle svelte-eli4ob",null,l,v),xn(c,"title",a()?"Boolean value ".concat(o()):"Click to toggle this boolean value")},[()=>({"jse-readonly":a()})]),Oe("mousedown",c,function(v){v.stopPropagation(),a()||(i()([{op:"replace",path:ft(n()),value:!o()}]),s()())}),R(e,c),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var Xx=ee('<div class="jse-color-picker-popup svelte-v77py2"></div>');function Zx(e,t){ut(t,!1);var n=h(t,"color",8),o=h(t,"onChange",8),a=h(t,"showOnTop",8),i=N(),s=()=>{};Zr(gt(function*(){var c,u=new((c=yield Rb(()=>import("./vanilla-picker-2033e4d0.js"),[]))===null||c===void 0?void 0:c.default)({parent:r(i),color:n(),popup:a()?"top":"bottom",onDone(d){var v=d.rgba[3]===1?d.hex.substring(0,7):d.hex;o()(v)}});u.show(),s=()=>{u.destroy()}})),Ro(()=>{s()}),zt();var l=Xx();Qn(l,c=>f(i,c),()=>r(i)),R(e,l),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var ew=ee('<button type="button"></button>');function tw(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),{openAbsolutePopup:a}=gi("absolute-popup"),i=h(t,"path",9),s=h(t,"value",9),l=h(t,"readOnly",9),c=h(t,"onPatch",9),u=h(t,"focus",9);function d(y){c()([{op:"replace",path:ft(i()),value:y}]),v()}function v(){u()()}X(()=>m(s()),()=>{f(n,Rm(s()))}),X(()=>(m(l()),m(s())),()=>{f(o,l()?"Color ".concat(s()):"Click to open a color picker")}),wn(),zt(!0);var p,g=ew();Te(y=>{var b;p=Tt(g,1,"jse-color-picker-button svelte-13mgyo6",null,p,y),To(g,"background: ".concat((b=r(n))!==null&&b!==void 0?b:"")),xn(g,"title",r(o)),xn(g,"aria-label",r(o))},[()=>({"jse-readonly":l()})]),Oe("click",g,function(y){var b,j;if(!l()){var x=y.target,C=x.getBoundingClientRect().top,T=((b=(j=tc(x))===null||j===void 0?void 0:j.innerHeight)!==null&&b!==void 0?b:0)-C<300&&C>300,O={color:s(),onChange:d,showOnTop:T};a(Zx,O,{anchor:x,closeOnOuterClick:!0,onClose:v,offsetTop:18,offsetLeft:-8,height:300})}}),R(e,g),dt()}var vd=1e3,Al=100,yc=100,tu=2e4,Es=[{start:0,end:Al}],nw=1048576,rw=1048576,fd=10485760,pd="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",cf="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Ci="hover-insert-inside",jc="hover-insert-after",$p="hover-collection",hd="valid",Ip="repairable",Ca=336,Sa=260,gl=100,qp={[Mo.asc]:"ascending",[Mo.desc]:"descending"};function Jm(e){for(var t=Z1(e,l=>l.start),n=[t[0]],o=0;o<t.length;o++){var a=n.length-1,i=n[a],s=t[o];s.start<=i.end?n[a]={start:Math.min(i.start,s.start),end:Math.max(i.end,s.end)}:n.push(s)}return n}function ov(e){return nu(e)+Al}function nu(e){return Math.floor(e/Al)*Al}function av(e){return!!e&&(e.type==="space"||e.space===!0)}function Ya(e){return!!e&&(e.type==="separator"||e.separator===!0)}function Dp(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function xa(e){return!!e&&typeof e.onClick=="function"}function ss(e){return!!e&&e.type==="dropdown-button"&&xa(e.main)&&Array.isArray(e.items)}function Up(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function Lp(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function Bp(e){return yn(e)&&yn(e.parseError)}function ow(e){return yn(e)&&Array.isArray(e.validationErrors)}function aw(e){return yn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function iw(e){return yn(e)&&aw(e)&&typeof e.isChildError=="boolean"}function sw(e){return yn(e)&&typeof e.action=="function"&&yn(e.props)}function uo(e){return e!==void 0&&e.type==="object"}function qr(e){return e!==void 0&&e.type==="array"}function uf(e){return e!==void 0&&e.type==="value"}function Fi(e){return uo(e)||qr(e)}function Km(e){return e!==void 0&&Array.isArray(e.searchResults)}function ru(e){return!!e&&e.type==="tree"}function Fp(e){return!!e&&e.type==="text"}function Wp(e){return!!e&&e.type==="mode"}function iv(e){var{json:t,expand:n}=e,o=function(a){var{json:i,factory:s}=a;return Array.isArray(i)?s.createArrayDocumentState():yn(i)?s.createObjectDocumentState():i!==void 0?s.createValueDocumentState():void 0}({json:t,factory:ff});return n&&o?Io(t,o,[],n):o}function df(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:Es,items:[]}}function vf(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var ff={createObjectDocumentState:vf,createArrayDocumentState:df,createValueDocumentState:function(){return{type:"value"}}};function Ym(e,t,n,o){var{createObjectDocumentState:a,createArrayDocumentState:i,createValueDocumentState:s}=o;return function l(c,u,d){if(Array.isArray(c)){var v=qr(u)?u:i();if(d.length===0)return v;var p=Yr(d[0]),g=l(c[p],v.items[p],d.slice(1));return lo(v,["items",d[0]],g)}if(yn(c)){var y=uo(u)?u:a();if(d.length===0)return y;var b=d[0],j=l(c[b],y.properties[b],d.slice(1));return lo(y,["properties",b],j)}return uf(u)?u:s()}(e,t,n)}function yo(e,t){return Tl(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(n,o)=>{if(n!==void 0&&o!==void 0)return Array.isArray(n)?qr(o)?o:df({expanded:!!Fi(o)&&o.expanded}):yn(n)?uo(o)?o:vf({expanded:!!Fi(o)&&o.expanded}):uf(o)?o:void 0},()=>!0)}function Tl(e,t,n,o,a){var i=o(e,t,n);if(Array.isArray(e)&&qr(i)&&a(i)){var s=[];return pf(e,i.visibleSections,c=>{var u=n.concat(String(c)),d=Tl(e[c],i.items[c],u,o,a);d!==void 0&&(s[c]=d)}),Mp(s,i.items)?i:Ae(Ae({},i),{},{items:s})}if(yn(e)&&uo(i)&&a(i)){var l={};return Object.keys(e).forEach(c=>{var u=n.concat(c),d=Tl(e[c],i.properties[c],u,o,a);d!==void 0&&(l[c]=d)}),Mp(Object.values(l),Object.values(i.properties))?i:Ae(Ae({},i),{},{properties:l})}return i}function pf(e,t,n){t.forEach(o=>{var{start:a,end:i}=o;Pm(a,Math.min(e.length,i),n)})}function zl(e,t){for(var n=e,o=[],a=0;a<t.length;){if(Array.isArray(n)){var i=t[a];o.push("items",i),n=n[Yr(i)]}else{if(!yn(n))throw new Error("Cannot convert path: Object or Array expected at index ".concat(a));var s=t[a];o.push("properties",s),n=n[s]}a++}return o}function Io(e,t,n,o){for(var a=t,i=function(l){var c=n.slice(0,l);a=Us(e,a,c,(u,d)=>{var v=Fi(d)&&!d.expanded?Ae(Ae({},d),{},{expanded:!0}):d;return qr(v)?function(p,g){if(function(j,x){return j.some(C=>x>=C.start&&x<C.end)}(p.visibleSections,g))return p;var y=nu(g),b={start:y,end:ov(y)};return Ae(Ae({},p),{},{visibleSections:Jm(p.visibleSections.concat(b))})}(v,Yr(n[l])):v})},s=0;s<n.length;s++)i(s);return Us(e,a,n,(l,c)=>function(u,d,v,p){return Tl(u,d,v,(g,y,b)=>Array.isArray(g)&&p(b)?qr(y)?y.expanded?y:Ae(Ae({},y),{},{expanded:!0}):df({expanded:!0}):yn(g)&&p(b)?uo(y)?y.expanded?y:Ae(Ae({},y),{},{expanded:!0}):vf({expanded:!0}):y,g=>Fi(g)&&g.expanded)}(l,c,[],o))}function Vp(e,t,n,o){return Us(e,t,n,(a,i)=>o?function(s,l,c){return Tl(s,l,c,(u,d)=>Hp(d),()=>!0)}(a,i,n):Hp(i))}function Hp(e){return qr(e)&&e.expanded?Ae(Ae({},e),{},{expanded:!1,visibleSections:Es}):uo(e)&&e.expanded?Ae(Ae({},e),{},{expanded:!1}):e}function Qm(e,t,n){var o={json:e,documentState:t},a=n.reduce((i,s)=>({json:Bo(i.json,[s]),documentState:lw(i.json,i.documentState,s)}),o);return{json:a.json,documentState:yo(a.json,a.documentState)}}function lw(e,t,n){if(mg(n))return Jp(e,t,n,void 0);if(bg(n))return Kp(e,t,n);if(Dv(n)){var o=Fo(e,n.path),a=oa(e,t,o);return a?Ru(e,t,o,{type:"value",enforceString:a}):t}return Rd(n)||Ri(n)?function(i,s,l){if(Ri(l)&&l.from===l.path)return s;var c=s,u=Fo(i,l.from),d=ea(i,c,u);return Ri(l)&&(c=Kp(i,c,{path:l.from})),c=Jp(i,c,{path:l.path},d),c}(e,t,n):t}function ea(e,t,n){try{return Ke(t,zl(e,n))}catch{return}}function hf(e,t,n,o,a){var i=Ym(e,t,n,a);return Bv(i,zl(e,n),s=>{var l=Ke(e,n);return o(l,s)})}function Ru(e,t,n,o){return function(a,i,s,l,c){var u=Ym(a,i,s,c);return lo(u,zl(a,s),l)}(e,t,n,o,ff)}function Us(e,t,n,o){return hf(e,t,n,o,ff)}function Jp(e,t,n,o){var a=Fo(e,n.path),i=t;return i=Us(e,i,nn(a),(s,l)=>{if(!qr(l))return l;var c=Yr(Vt(a)),{items:u,visibleSections:d}=l;return Ae(Ae({},l),{},{items:c<u.length?Cx(u,c,o!==void 0?[o]:Array(1)):u,visibleSections:Gm(d,c,1)})}),Ru(e,i,a,o)}function Kp(e,t,n){var o=Fo(e,n.path),a=nn(o),i=Ke(e,a);return Array.isArray(i)?Us(e,t,a,(s,l)=>{if(!qr(l))return l;var c=Yr(Vt(o)),{items:u,visibleSections:d}=l;return Ae(Ae({},l),{},{items:u.slice(0,c).concat(u.slice(c+1)),visibleSections:Gm(d,c,-1)})}):function(s,l,c){var u=zl(s,c);return Ao(l,u)?ku(l,zl(s,c)):l}(e,t,o)}function Gm(e,t,n){return function(o){for(var a=o.slice(0),i=1;i<a.length;)a[i-1].end===a[i].start&&(a[i-1]={start:a[i-1].start,end:a[i].end},a.splice(i)),i++;return a}(e.map(o=>({start:o.start>t?o.start+n:o.start,end:o.end>t?o.end+n:o.end})))}function oa(e,t,n){var o,a=Ke(e,n),i=ea(e,t,n),s=uf(i)?i.enforceString:void 0;return typeof s=="boolean"?s:typeof(o=a)=="string"&&typeof Qs(o,JSON)!="string"}function rc(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?n?e.slice(o):e.slice(o+1):[]}function gf(e,t){var n=[];return function o(a,i,s){n.push(s),ur(a)&&qr(i)&&i.expanded&&pf(a,i.visibleSections,l=>{o(a[l],i.items[l],s.concat(String(l)))}),br(a)&&uo(i)&&i.expanded&&Object.keys(a).forEach(l=>{o(a[l],i.properties[l],s.concat(l))})}(e,t,[]),n}function Xm(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function a(i,s){o.push({path:s,type:Lo.value});var l=ea(e,t,s);if(i&&Fi(l)&&l.expanded){if(n&&o.push({path:s,type:Lo.inside}),ur(i)){var c=qr(l)?l.visibleSections:Es;pf(i,c,u=>{var d=s.concat(String(u));a(i[u],d),n&&o.push({path:d,type:Lo.after})})}br(i)&&Object.keys(i).forEach(u=>{var d=s.concat(u);o.push({path:d,type:Lo.key}),a(i[u],d),n&&o.push({path:d,type:Lo.after})})}}(e,[]),o}function gd(e,t,n){var o=gf(e,t),a=o.map(ft).indexOf(ft(n));if(a!==-1&&a<o.length-1)return o[a+1]}function Wi(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Io(e,t,n,Ox({json:Ke(e,n)},o)?ml:mf)}function md(e,t,n){var o=ea(e,t,n);return Fi(o)&&o.expanded?t:Wi(e,t,n)}function ml(e){return e.length===0||e.length===1&&e[0]==="0"}function sv(e){return e.length===0}function mf(){return!0}function Ic(){return!1}function ao(e){return e&&e.type===Nn.after||!1}function Tr(e){return e&&e.type===Nn.inside||!1}function $r(e){return e&&e.type===Nn.key||!1}function vn(e){return e&&e.type===Nn.value||!1}function Pn(e){return e&&e.type===Nn.multi||!1}function Pu(e){return Pn(e)&&Lt(e.focusPath,e.anchorPath)}function Rl(e){return Pn(e)||ao(e)||Tr(e)||$r(e)||vn(e)}function bd(e){return e&&e.type===Nn.text||!1}function fi(e,t){var n=[];return function(o,a,i){if(a){var s=$i(a),l=ot(a);if(Lt(s,l))return i(s);if(o!==void 0){var c=e0(s,l);if(s.length===c.length||l.length===c.length)return i(c);var u=eo(s,l),d=Oa(o,u),v=li(o,u),p=za(o,u,d),g=za(o,u,v);if(!(p===-1||g===-1)){var y=Ke(o,c);if(br(y)){for(var b=Object.keys(y),j=p;j<=g;j++){var x=i(c.concat(b[j]));if(x!==void 0)return x}return}if(ur(y)){for(var C=p;C<=g;C++){var T=i(c.concat(String(C)));if(T!==void 0)return T}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{n.push(o)}),n}function Zm(e){return Tr(e)?e.path:nn(ot(e))}function Oa(e,t){if(!Pn(t))return t.path;var n=za(e,t,t.anchorPath);return za(e,t,t.focusPath)<n?t.focusPath:t.anchorPath}function li(e,t){if(!Pn(t))return t.path;var n=za(e,t,t.anchorPath);return za(e,t,t.focusPath)>n?t.focusPath:t.anchorPath}function Yp(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var a=o?ot(n):Oa(e,n),i=function(c,u,d){var v=gf(c,u),p=v.map(ft),g=ft(d),y=p.indexOf(g);if(y!==-1&&y>0)return v[y-1]}(e,t,a);if(o)return Tr(n)||ao(n)?i!==void 0?eo(a,a):void 0:i!==void 0?eo($i(n),i):void 0;if(ao(n)||Tr(n))return Kt(a);if($r(n)){if(i===void 0||i.length===0)return;var s=nn(i),l=Ke(e,s);return Array.isArray(l)||fn(i)?Kt(i):Ia(i)}return vn(n),i!==void 0?Kt(i):void 0}}function Qp(e,t,n,o){if(!n)return{caret:void 0,previous:void 0,next:void 0};var a=Xm(e,t,o),i=a.findIndex(s=>Lt(s.path,ot(n))&&String(s.type)===String(n.type));return{caret:i!==-1?a[i]:void 0,previous:i!==-1&&i>0?a[i-1]:void 0,next:i!==-1&&i<a.length-1?a[i+1]:void 0}}function ls(e,t){for(var n=gf(e,t),o=0;o<n.length-1&&n[o+1].length>n[o].length;)o++;var a=n[o];return a===void 0||a.length===0||Array.isArray(Ke(e,nn(a)))?Kt(a):Ia(a)}function Ls(e,t){if(t.length===1){var n=Ea(t);if(n.op==="replace")return Kt(Fo(e,n.path))}if(!fn(t)&&t.every(s=>s.op==="move")){var o=Ea(t),a=t.slice(1);if((Rd(o)||Ri(o))&&o.from!==o.path&&a.every(s=>(Rd(s)||Ri(s))&&s.from===s.path))return Ia(Fo(e,o.path))}var i=t.filter(s=>s.op!=="test"&&s.op!=="remove"&&(s.op!=="move"||s.from!==s.path)&&typeof s.path=="string").map(s=>Fo(e,s.path));if(!fn(i))return{type:Nn.multi,anchorPath:Ea(i),focusPath:Vt(i)}}function e0(e,t){for(var n=0;n<e.length&&n<t.length&&e[n]===t[n];)n++;return e.slice(0,n)}function ou(e){return $r(e)||vn(e)||Pu(e)}function Gp(e,t){return ou(t)&&ar(Ke(e,ot(t)))?ot(t):nn(ot(t))}function la(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function na(e){if(Ir(e)){var{type:t,path:n}=e;return{type:t,path:n}}return e}function Ia(e){return{type:Nn.key,path:e}}function bf(e,t){return{type:Nn.key,path:e,edit:!0,initialValue:t}}function Kt(e){return{type:Nn.value,path:e}}function au(e,t){return{type:Nn.value,path:e,edit:!0,initialValue:t}}function qa(e){return{type:Nn.inside,path:e}}function Ta(e){return{type:Nn.after,path:e}}function eo(e,t){var n=e0(e,t),o=e.length>n.length&&t.length>n.length;return{type:Nn.multi,anchorPath:o?n.concat(e[n.length]):n,focusPath:o?n.concat(t[n.length]):n}}function t0(e,t,n,o){if($r(t))return String(Vt(t.path));if(vn(t)){var a=Ke(e,t.path);return typeof a=="string"?a:o.stringify(a,null,n)}if(Pn(t)){if(fn(t.focusPath))return o.stringify(e,null,n);var i=Zm(t),s=Ke(e,i);if(Array.isArray(s)){if(Pu(t)){var l=Ke(e,t.focusPath);return o.stringify(l,null,n)}return fi(e,t).map(c=>{var u=Ke(e,c);return"".concat(o.stringify(u,null,n),",")}).join(`
`)}return fi(e,t).map(c=>{var u=Vt(c),d=Ke(e,c);return"".concat(o.stringify(u),": ").concat(o.stringify(d,null,n),",")}).join(`
`)}}function Ir(e){return($r(e)||vn(e))&&e.edit===!0}function ys(e){return $r(e)||vn(e)||Pn(e)}function xc(e){return $r(e)||vn(e)||Pu(e)}function lv(e){switch(e.type){case Lo.key:return Ia(e.path);case Lo.value:return Kt(e.path);case Lo.after:return Ta(e.path);case Lo.inside:return qa(e.path)}}function Xp(e,t){switch(e){case Nn.key:return Ia(t);case Nn.value:return Kt(t);case Nn.after:return Ta(t);case Nn.inside:return qa(t);case Nn.multi:case Nn.text:return eo(t,t)}}function wc(e,t,n){if(t)return Pl(e,t,n)||la(Pn(t)?nn(t.focusPath):t.path,n)?t:void 0}function Pl(e,t,n){if(e===void 0||!t)return!1;if($r(t)||Tr(t)||ao(t))return Lt(t.path,n);if(vn(t))return la(n,t.path);if(Pn(t)){var o=Oa(e,t),a=li(e,t),i=nn(t.focusPath);if(!la(n,i)||n.length<=i.length)return!1;var s=za(e,t,o),l=za(e,t,a),c=za(e,t,n);return c!==-1&&c>=s&&c<=l}return!1}function za(e,t,n){var o=nn(t.focusPath);if(!la(n,o)||n.length<=o.length)return-1;var a=n[o.length],i=Ke(e,o);if(br(i))return Object.keys(i).indexOf(a);if(ur(i)){var s=Yr(a);if(s<i.length)return s}return-1}function ot(e){return Pn(e)?e.focusPath:e.path}function $i(e){return Pn(e)?e.anchorPath:e.path}function Qo(){for(var e=[],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];for(var a of n)if(typeof a=="string"&&e.push(a),a&&typeof a=="object")for(var i in a)Object.hasOwnProperty.call(a,i)&&a[i]&&e.push(i);return e.join(" ")}function n0(e,t,n){return Qo("jse-value","jse-"+nf(e,n),{"jse-url":zu(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===kr.table})}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var cw=ee('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function r0(e,t){ut(t,!1);var n=Dr("jsoneditor:EditableDiv"),o=h(t,"value",9),a=h(t,"initialValue",9),i=h(t,"shortText",9,!1),s=h(t,"label",9),l=h(t,"onChange",9),c=h(t,"onCancel",9),u=h(t,"onFind",9),d=h(t,"onPaste",9,Mr),v=h(t,"onValueClass",9,()=>""),p=N(void 0,!0),g=N(void 0,!0),y=!1;function b(){return r(p)?function(C){return C.replace(/\n$/,"")}(r(p).innerText):""}function j(C){r(p)&&jo(p,r(p).innerText=Ds(C))}Zr(()=>{n("onMount",{value:o(),initialValue:a()}),j(a()!==void 0?a():o()),r(p)&&function(C){if(C.firstChild!=null){var T=document.createRange(),O=window.getSelection();T.setStart(C,1),T.collapse(!0),O?.removeAllRanges(),O?.addRange(T)}else C.focus()}(r(p))}),Ro(()=>{var C=b();n("onDestroy",{closed:y,value:o(),newValue:C}),y||C===o()||l()(C,si.no)}),X(()=>(m(v()),m(o())),()=>{f(g,v()(o()))}),wn(),zt(!0);var x=cw();Qn(x,C=>f(p,C),()=>r(p)),Te(C=>{xn(x,"aria-label",s()),Tt(x,1,C,"svelte-1r0oryi")},[()=>vi((m(Qo),r(g),m(i()),D(()=>Qo("jse-editable-div",r(g),{"jse-short-text":i()}))))]),Oe("input",x,function(){var C=b();C===""&&j(""),f(g,v()(C))}),Oe("keydown",x,function(C){C.stopPropagation();var T=$a(C);if(T==="Escape"&&(C.preventDefault(),y=!0,c()()),T==="Enter"||T==="Tab"){C.preventDefault(),y=!0;var O=b();l()(O,si.nextInside)}T==="Ctrl+F"&&(C.preventDefault(),u()(!1)),T==="Ctrl+H"&&(C.preventDefault(),u()(!0))}),Oe("paste",x,function(C){if(C.stopPropagation(),d()&&C.clipboardData){var T=C.clipboardData.getData("text/plain");d()(T)}}),Oe("blur",x,function(){var C=document.hasFocus(),T=b();n("handleBlur",{hasFocus:C,closed:y,value:o(),newValue:T}),document.hasFocus()&&!y&&(y=!0,T!==o()&&l()(T,si.self))}),R(e,x),dt()}function uw(e,t){ut(t,!1);var n=h(t,"path",9),o=h(t,"value",9),a=h(t,"selection",9),i=h(t,"mode",9),s=h(t,"parser",9),l=h(t,"normalization",9),c=h(t,"enforceString",9),u=h(t,"onPatch",9),d=h(t,"onPasteJson",9),v=h(t,"onSelect",9),p=h(t,"onFind",9),g=h(t,"focus",9),y=h(t,"findNextInside",9);function b(T){return c()?T:Qs(T,s())}function j(){v()(Kt(n())),g()()}zt(!0);var x=Ze(()=>(m(l()),m(o()),D(()=>l().escapeValue(o())))),C=Ze(()=>(m(Ir),m(a()),D(()=>Ir(a())?a().initialValue:void 0)));r0(e,{get value(){return r(x)},get initialValue(){return r(C)},label:"Edit value",onChange:function(T,O){u()([{op:"replace",path:ft(n()),value:b(l().unescapeValue(T))}],(w,z,U)=>{if(!U||Lt(n(),ot(U)))return{state:z,selection:O===si.nextInside?y()(n()):Kt(n())}}),g()()},onCancel:j,onPaste:function(T){try{var O=s().parse(T);ar(O)&&d()({path:n(),contents:O,onPasteAsJson:()=>{j();var w=[{op:"replace",path:ft(n()),value:O}];u()(w,(z,U)=>({state:Wi(z,U,n())}))}})}catch{}},get onFind(){return p()},onValueClass:function(T){return n0(b(l().unescapeValue(T)),i(),s())}}),dt()}function js(e,t,n){var o=nn(t),a=Ke(e,o);if(ur(a)){var i=Yr(Vt(t));return n.map((u,d)=>({op:"add",path:ft(o.concat(String(i+d))),value:u.value}))}if(br(a)){var s=Vt(t),l=Object.keys(a),c=s!==void 0?rc(l,s,!0):[];return[...n.map(u=>{var d=nc(u.key,l);return{op:"add",path:ft(o.concat(d)),value:u.value}}),...c.map(u=>pi(o,u))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function cv(e,t,n){var o=Ke(e,t);if(Array.isArray(o)){var a=o.length;return n.map((i,s)=>({op:"add",path:ft(t.concat(String(a+s))),value:i.value}))}return n.map(i=>{var s=nc(i.key,Object.keys(o));return{op:"add",path:ft(t.concat(s)),value:i.value}})}function oc(e,t,n,o){var a=t.filter(l=>l!==n),i=nc(o,a),s=rc(t,n,!1);return[{op:"move",from:ft(e.concat(n)),path:ft(e.concat(i))},...s.map(l=>pi(e,l))]}function o0(e,t){var n=Vt(t);if(fn(n))throw new Error("Cannot duplicate root object");var o=nn(n),a=Vt(n),i=Ke(e,o);if(ur(i)){var s=Vt(t),l=s?Yr(Vt(s))+1:0;return[...t.map((d,v)=>({op:"copy",from:ft(d),path:ft(o.concat(String(v+l)))}))]}if(br(i)){var c=Object.keys(i),u=a!==void 0?rc(c,a,!1):[];return[...t.map(d=>{var v=nc(Vt(d),c);return{op:"copy",from:ft(d),path:ft(o.concat(v))}}),...u.map(d=>pi(o,d))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function a0(e,t){if(vn(t))return[{op:"move",from:ft(t.path),path:""}];if(!Pn(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var n=nn(t.focusPath),o=Ke(e,n);if(ur(o)){var a=fi(e,t).map(s=>{var l=Yr(Vt(s));return o[l]});return[{op:"replace",path:"",value:a}]}if(br(o)){var i={};return fi(e,t).forEach(s=>{var l=String(Vt(s));i[l]=o[l]}),[{op:"replace",path:"",value:i}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function i0(e,t,n,o){if($r(t)){var a=Nm(n,o),i=nn(t.path),s=Ke(e,i);return oc(i,Object.keys(s),Vt(t.path),typeof a=="string"?a:n)}if(vn(t)||Pn(t)&&fn(t.focusPath))try{return[{op:"replace",path:ft(ot(t)),value:ec(n,z=>Zl(z,o))}]}catch{return[{op:"replace",path:ft(ot(t)),value:n}]}if(Pn(t)){var l=yd(n,o);return function(z,U,ae){var M=Ea(U),K=nn(M),J=Ke(z,K);if(ur(J)){var I=Ea(U),re=I?Yr(Vt(I)):0;return[...iu(U),...ae.map((Me,et)=>({op:"add",path:ft(K.concat(String(et+re))),value:Me.value}))]}if(br(J)){var we=Vt(U),se=nn(we),ze=Vt(we),Ie=Object.keys(J),Ue=ze!==void 0?rc(Ie,ze,!1):[],ue=new Set(U.map(Me=>Vt(Me))),me=Ie.filter(Me=>!ue.has(Me));return[...iu(U),...ae.map(Me=>{var et=nc(Me.key,me);return{op:"add",path:ft(se.concat(et)),value:Me.value}}),...Ue.map(Me=>pi(se,Me))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,fi(e,t),l)}if(ao(t)){var c=yd(n,o),u=t.path,d=nn(u),v=Ke(e,d);if(ur(v)){var p=Yr(Vt(u));return js(e,d.concat(String(p+1)),c)}if(br(v)){var g=String(Vt(u)),y=Object.keys(v);if(fn(y)||Vt(y)===g)return cv(e,d,c);var b=y.indexOf(g),j=y[b+1];return js(e,d.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(Tr(t)){var x=yd(n,o),C=t.path,T=Ke(e,C);if(ur(T))return js(e,C.concat("0"),x);if(br(T)){var O=Object.keys(T);if(fn(O))return cv(e,C,x);var w=Ea(O);return js(e,C.concat(w),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function iu(e){return e.map(t=>({op:"remove",path:ft(t)})).reverse()}function pi(e,t){return{op:"move",from:ft(e.concat(t)),path:ft(e.concat(t))}}function yd(e,t){var n=/^\s*{/.test(e),o=/^\s*\[/.test(e),a=Nm(e,t),i=a!==void 0?a:ec(e,s=>Zl(s,t));return n&&yn(i)||o&&Array.isArray(i)?[{key:"New item",value:i}]:Array.isArray(i)?i.map((s,l)=>({key:"New item "+l,value:s})):yn(i)?Object.keys(i).map(s=>({key:s,value:i[s]})):[{key:"New item",value:i}]}function s0(e,t){if($r(t)){var n=nn(t.path),o=Ke(e,n),a=oc(n,Object.keys(o),Vt(t.path),"");return{operations:a,newSelection:Ls(e,a)}}if(vn(t))return{operations:[{op:"replace",path:ft(t.path),value:""}],newSelection:t};if(Pn(t)){var i=fi(e,t),s=iu(i),l=Vt(i);if(fn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Kt([])};var c=nn(l),u=Ke(e,c);if(ur(u)){var d=Ea(i),v=Yr(Vt(d));return{operations:s,newSelection:v===0?qa(c):Ta(c.concat(String(v-1)))}}if(br(u)){var p=Object.keys(u),g=Ea(i),y=Vt(g),b=p.indexOf(y),j=p[b-1];return{operations:s,newSelection:b===0?qa(c):Ta(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function l0(e,t){var n=function(o,a){if(fn(a)||!a.every(Ri))return a;var i=[];for(var s of a){var l=Zp(fo(s.from)),c=Zp(fo(s.path));if(!l||!c)return a;i.push({from:l,path:c,operation:s})}var u=i[0].path.parent,d=Ke(o,u);if(!br(d)||!i.every(y=>function(b,j){return Lt(b.from.parent,j)&&Lt(b.path.parent,j)}(y,u)))return a;var v=function(y,b){var j=Object.keys(b),x=j.slice();for(var C of y){var T=x.indexOf(C.from.key);T!==-1&&(x.splice(T,1),x.push(C.path.key))}for(var O=0;O<j.length&&j[O]===x[O];)O++;return x[O]}(i,o),p=y=>y.operation,g=i.filter(y=>y.operation.from!==y.operation.path);return g.some(y=>y.path.key===v)?g.map(p):[pi(u,v),...g.map(p)]}(e,t);return wg(e,n,{before:(o,a,i)=>{if(bg(a)){var s=fo(a.path);return{revertOperations:[...i,...jd(o,s)]}}if(Ri(a)){var l=fo(a.from);return{revertOperations:a.from===a.path?[a,...jd(o,l)]:[...i,...jd(o,l)]}}return{document:o}}})}function Zp(e){return e.length>0?{parent:nn(e),key:Vt(e)}:void 0}function jd(e,t){var n=nn(t),o=Vt(t),a=Ke(e,n);return br(a)?rc(Object.keys(a),o,!1).map(i=>pi(n,i)):[]}function eh(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[t],o=e.items.map((a,i)=>Ae(Ae({},a),{},{active:i===t}));return Ae(Ae({},e),{},{items:o,activeItem:n,activeIndex:t})}function th(e,t){var n,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.toLowerCase(),i=(n=o?.maxResults)!==null&&n!==void 0?n:1/0,s=o?.columns,l=[],c=[];function u(j){l.length>=i||l.push(j)}function d(j,x){if(ur(x)){var C=c.length;c.push("0");for(var T=0;T<x.length;T++)if(c[C]=String(T),d(j,x[T]),l.length>=i)return;c.pop()}else if(br(x)){var O=Object.keys(x),w=c.length;for(var z of(c.push(""),O))if(c[w]=z,nh(z,j,c,Ho.key,u),d(j,x[z]),l.length>=i)return;c.pop()}else nh(String(x),j,c,Ho.value,u)}if(e==="")return[];if(s){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var v=0;v<t.length;v++){c[0]=String(v);for(var p=t[v],g=0;g<s.length;g++){var y=s[g];if(y.length===1)c[1]=y[0];else for(var b=0;b<y.length;b++)c[b+1]=y[b];for(;c.length>y.length+1;)c.pop();d(a,Ke(p,y))}if(l.length>=i)break}return l}return d(a,t),l}function nh(e,t,n,o,a){var i=e.toLowerCase(),s=0,l=-1,c=-1;do(c=i.indexOf(t,l))!==-1&&(l=c+t.length,a({path:n.slice(0),field:o,fieldIndex:s,start:c,end:l}),s++);while(c!==-1)}function uv(e,t,n,o){return e.substring(0,n)+t+e.substring(o)}function rh(e,t,n){var o=e;return hy(n,a=>{o=uv(o,t,a.start,a.end)}),o}function dw(e,t,n,o,a){var{field:i,path:s,start:l,end:c}=o;if(i===Ho.key){var u=nn(s),d=Ke(e,u),v=Vt(s),p=oc(u,Object.keys(d),v,uv(v,n,l,c));return{newSelection:Ls(e,p),operations:p}}if(i===Ho.value){var g=Ke(e,s);if(g===void 0)throw new Error("Cannot replace: path not found ".concat(ft(s)));var y=typeof g=="string"?g:String(g),b=oa(e,t,s),j=uv(y,n,l,c),x=[{op:"replace",path:ft(s),value:b?j:Qs(j,a)}];return{newSelection:Ls(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(i))}function oh(e){return e.path.concat(e.field,String(e.fieldIndex))}function ah(e){var t=Km(e)?e.searchResults.filter(n=>n.field===Ho.key):void 0;return t&&t.length>0?t:void 0}function ih(e){var t=Km(e)?e.searchResults.filter(n=>n.field===Ho.value):void 0;return t&&t.length>0?t:void 0}var vw={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function c0(e,t){return t.reduce((n,o)=>function(a,i,s,l){return hf(a,i,s,l,vw)}(e,n,o.path,(a,i)=>Ae(Ae({},i),{},{searchResults:i.searchResults?i.searchResults.concat(o):[o]})),void 0)}function su(e){var t,n=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=uo(e)?Object.values(e.properties).flatMap(su):qr(e)?e.items.flatMap(su):[];return n.concat(o)}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var fw=ee("<span> </span>");function u0(e,t){ut(t,!1);var n=N(),o=h(t,"text",8),a=h(t,"searchResultItems",8);X(()=>(m(o()),m(a())),()=>{f(n,function(s,l){var c=[],u=0;for(var d of l){var v=s.slice(u,d.start);v!==""&&c.push({resultIndex:void 0,type:"normal",text:v,active:!1});var p=s.slice(d.start,d.end);c.push({resultIndex:d.resultIndex,type:"highlight",text:p,active:d.active}),u=d.end}var g=Vt(l);return g&&g.end<s.length&&c.push({type:"normal",text:s.slice(g.end),resultIndex:void 0,active:!1}),c}(String(o()),a()))}),wn(),zt();var i=Ut();dr(Xe(i),1,()=>r(n),Cr,(s,l)=>{var c=Ut(),u=Xe(c),d=p=>{var g=Fr();Te(()=>vt(g,(r(l),D(()=>r(l).text)))),R(p,g)},v=p=>{var g,y=fw(),b=P(y);Te((j,x,C)=>{g=Tt(y,1,"jse-highlight svelte-19qyvy6",null,g,j),xn(y,"data-search-result-index",x),vt(b,C)},[()=>({"jse-active":r(l).active}),()=>(r(l),D(()=>String(r(l).resultIndex))),()=>(m(Ds),r(l),D(()=>Ds(r(l).text)))]),R(p,y)};ie(u,p=>{r(l),D(()=>r(l).type==="normal")?p(d):p(v,!1)}),R(s,c)}),R(e,i),dt()}function qc(e){var t=1e3;if(e<900)return e.toFixed()+" B";var n=e/t;if(n<900)return n.toFixed(1)+" KB";var o=n/t;if(o<900)return o.toFixed(1)+" MB";var a=o/t;return a<900?a.toFixed(1)+" GB":(a/t).toFixed(1)+" TB"}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var pw=ee('<button type="button"><!></button>');function Dc(e,t){ut(t,!0);var n,o=vo(()=>t.onclick?i=>{i.preventDefault(),i.stopPropagation(),t.onclick()}:void 0),a=pw();a.__click=function(){for(var i,s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];(i=r(o))===null||i===void 0||i.apply(this,l)},function(i,s){for(var l=arguments.length,c=new Array(l>2?l-2:0),u=2;u<l;u++)c[u-2]=arguments[u];var d,v=i,p=lp;mi(()=>{p!==(p=s())&&(d&&(ro(d),d=null),d=So(()=>p(v,...c)))},Hl)}(P(a),()=>{var i;return(i=t.children)!==null&&i!==void 0?i:lp}),Te(i=>n=Tt(a,1,"jse-tag svelte-ubve9r",null,n,i),[()=>({disabled:!t.onclick})]),R(e,a),dt()}Xl(["click"]);function hw(e,t,n){typeof t.value=="string"&&r(n)&&lf(e)&&(e.preventDefault(),e.stopPropagation(),window.open(t.value,"_blank"))}function gw(e,t){t.readOnly||(e.preventDefault(),t.onSelect(au(t.path)))}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var mw=ee('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function bw(e,t){ut(t,!0);var n=ya(!0),o=vo(()=>r(n)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(g=>g.active&&g.end>t.truncateTextSize))),a=vo(()=>r(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),i=vo(()=>zu(t.value));function s(){f(n,!1)}var l=mw();l.__click=[hw,t,i],l.__dblclick=[gw,t];var c=P(l),u=g=>{var y=vo(()=>t.normalization.escapeValue(r(a)));u0(g,{get text(){return r(y)},get searchResultItems(){return t.searchResultItems}})},d=g=>{var y=Fr();Te(b=>vt(y,b),[()=>Ds(t.normalization.escapeValue(r(a)))]),R(g,y)};ie(c,g=>{t.searchResultItems?g(u):g(d,!1)});var v=V(c,2),p=g=>{Dc(g,{onclick:s,children:(y,b)=>{var j=Fr();Te(x=>vt(j,"Show more (".concat(x??"",")")),[()=>qc(t.value.length)]),R(y,j)},$$slots:{default:!0}})};ie(v,g=>{r(o)&&typeof t.value=="string"&&g(p)}),Te(g=>{Tt(l,1,g,"svelte-1saqp8c"),xn(l,"title",r(i)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>vi(n0(t.value,t.mode,t.parser))]),R(e,l),dt()}Xl(["click","dblclick"]);Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var yw=ee('<div class="jse-tooltip svelte-brt1mq"> </div>');function jw(e,t){var n=h(t,"text",8),o=yw(),a=P(o);Te(()=>vt(a,n())),R(e,o)}function Bs(e,t){var n,{text:o,openAbsolutePopup:a,closeAbsolutePopup:i}=t;function s(){n=a(jw,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){i(n)}return e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",s),e.removeEventListener("mouseleave",l)}}}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var xw=ee('<div class="jse-timestamp svelte-1jcpman"><!></div>');function ww(e,t){ut(t,!1);var n=N(void 0,!0),o=gi("absolute-popup"),a=h(t,"value",9);X(()=>m(a()),()=>{f(n,"Time: ".concat(new Date(a()).toString()))}),wn(),zt(!0);var i=xw();rn(P(i),{get data(){return Ky}}),no(i,(s,l)=>Bs?.(s,l),()=>Ae({text:r(n)},o)),R(e,i),dt()}function kw(e){var t=[];return!e.isEditing&&jx(e.value)&&t.push({component:Gx,props:e}),!e.isEditing&&xx(e.value)&&t.push({component:tw,props:e}),e.isEditing&&t.push({component:uw,props:e}),e.isEditing||t.push({component:bw,props:e}),!e.isEditing&&ev(e.value)&&t.push({component:ww,props:e}),t}function Br(e){return e.map((t,n)=>Sw.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(n>0?".":"")+t).join("")}function Cw(e){for(var t=[],n=0;n<e.length;)e[n]==="."&&n++,e[n]==="["?(n++,e[n]==='"'?(n++,t.push(o(i=>i==='"',!0)),a('"')):t.push(o(i=>i==="]")),a("]")):t.push(o(i=>i==="."||i==="["));function o(i){for(var s=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";n<e.length&&!i(e[n]);)s&&e[n]==="\\"&&e[n+1]==='"'?(l+='"',n+=2):(l+=e[n],n++);return l}function a(i){if(e[n]!==i)throw new SyntaxError("Invalid JSON path: ".concat(i," expected at position ").concat(n));n++}return t}function Qa(e){return{value:e,label:fn(e)?"(item root)":Br(e)}}var Sw=/^\d+$/,Ow={},Ew={showWizard:!0,showOriginal:!0},lu=Math.min,Ii=Math.max,cu=Math.round,kc=Math.floor,ca=e=>({x:e,y:e}),_w={left:"right",right:"left",bottom:"top",top:"bottom"},Mw={start:"end",end:"start"};function sh(e,t,n){return Ii(e,lu(t,n))}function Nu(e,t){return typeof e=="function"?e(t):e}function Vi(e){return e.split("-")[0]}function $u(e){return e.split("-")[1]}function d0(e){return e==="x"?"y":"x"}function v0(e){return e==="y"?"height":"width"}var Aw=new Set(["top","bottom"]);function ri(e){return Aw.has(Vi(e))?"y":"x"}function f0(e){return d0(ri(e))}function dv(e){return e.replace(/start|end/g,t=>Mw[t])}var lh=["left","right"],ch=["right","left"],Tw=["top","bottom"],zw=["bottom","top"];function Rw(e,t,n,o){var a=$u(e),i=function(s,l,c){switch(s){case"top":case"bottom":return c?l?ch:lh:l?lh:ch;case"left":case"right":return l?Tw:zw;default:return[]}}(Vi(e),n==="start",o);return a&&(i=i.map(s=>s+"-"+a),t&&(i=i.concat(i.map(dv)))),i}function Cc(e){return e.replace(/left|right|bottom|top/g,t=>_w[t])}function Pw(e){return typeof e!="number"?function(t){return Ae({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function uu(e){var{x:t,y:n,width:o,height:a}=e;return{width:o,height:a,top:n,left:t,right:t+o,bottom:n+a,x:t,y:n}}function uh(e,t,n){var o,{reference:a,floating:i}=e,s=ri(t),l=f0(t),c=v0(l),u=Vi(t),d=s==="y",v=a.x+a.width/2-i.width/2,p=a.y+a.height/2-i.height/2,g=a[c]/2-i[c]/2;switch(u){case"top":o={x:v,y:a.y-i.height};break;case"bottom":o={x:v,y:a.y+a.height};break;case"right":o={x:a.x+a.width,y:p};break;case"left":o={x:a.x-i.width,y:p};break;default:o={x:a.x,y:a.y}}switch($u(t)){case"start":o[l]-=g*(n&&d?-1:1);break;case"end":o[l]+=g*(n&&d?-1:1)}return o}var Nw=function(){var e=gt(function*(t,n,o){for(var{placement:a="bottom",strategy:i="absolute",middleware:s=[],platform:l}=o,c=s.filter(Boolean),u=yield l.isRTL==null?void 0:l.isRTL(n),d=yield l.getElementRects({reference:t,floating:n,strategy:i}),{x:v,y:p}=uh(d,a,u),g=a,y={},b=0,j=0;j<c.length;j++){var{name:x,fn:C}=c[j],{x:T,y:O,data:w,reset:z}=yield C({x:v,y:p,initialPlacement:a,placement:g,strategy:i,middlewareData:y,rects:d,platform:l,elements:{reference:t,floating:n}});v=T??v,p=O??p,y=Ae(Ae({},y),{},{[x]:Ae(Ae({},y[x]),w)}),z&&b<=50&&(b++,typeof z=="object"&&(z.placement&&(g=z.placement),z.rects&&(d=z.rects===!0?yield l.getElementRects({reference:t,floating:n,strategy:i}):z.rects),{x:v,y:p}=uh(d,g,u)),j=-1)}return{x:v,y:p,placement:g,strategy:i,middlewareData:y}});return function(t,n,o){return e.apply(this,arguments)}}();function p0(e,t){return vv.apply(this,arguments)}function vv(){return vv=gt(function*(e,t){var n;t===void 0&&(t={});var{x:o,y:a,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:v="floating",altBoundary:p=!1,padding:g=0}=Nu(t,e),y=Pw(g),b=l[p?v==="floating"?"reference":"floating":v],j=uu(yield i.getClippingRect({element:(n=yield i.isElement==null?void 0:i.isElement(b))==null||n?b:b.contextElement||(yield i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),x=v==="floating"?{x:o,y:a,width:s.floating.width,height:s.floating.height}:s.reference,C=yield i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating),T=(yield i.isElement==null?void 0:i.isElement(C))&&(yield i.getScale==null?void 0:i.getScale(C))||{x:1,y:1},O=uu(i.convertOffsetParentRelativeRectToViewportRelativeRect?yield i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:C,strategy:c}):x);return{top:(j.top-O.top+y.top)/T.y,bottom:(O.bottom-j.bottom+y.bottom)/T.y,left:(j.left-O.left+y.left)/T.x,right:(O.right-j.right+y.right)/T.x}}),vv.apply(this,arguments)}var $w=new Set(["left","top"]);function fv(){return fv=gt(function*(e,t){var{placement:n,platform:o,elements:a}=e,i=yield o.isRTL==null?void 0:o.isRTL(a.floating),s=Vi(n),l=$u(n),c=ri(n)==="y",u=$w.has(s)?-1:1,d=i&&c?-1:1,v=Nu(t,e),{mainAxis:p,crossAxis:g,alignmentAxis:y}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return l&&typeof y=="number"&&(g=l==="end"?-1*y:y),c?{x:g*d,y:p*u}:{x:p*u,y:g*d}}),fv.apply(this,arguments)}function Iu(){return typeof window<"u"}function Fs(e){return h0(e)?(e.nodeName||"").toLowerCase():"#document"}function ko(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ua(e){var t;return(t=(h0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function h0(e){return!!Iu()&&(e instanceof Node||e instanceof ko(e).Node)}function Jo(e){return!!Iu()&&(e instanceof Element||e instanceof ko(e).Element)}function da(e){return!!Iu()&&(e instanceof HTMLElement||e instanceof ko(e).HTMLElement)}function dh(e){return!(!Iu()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof ko(e).ShadowRoot)}var Iw=new Set(["inline","contents"]);function Nl(e){var{overflow:t,overflowX:n,overflowY:o,display:a}=Ko(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!Iw.has(a)}var qw=new Set(["table","td","th"]);function Dw(e){return qw.has(Fs(e))}var Uw=[":popover-open",":modal"];function du(e){return Uw.some(t=>{try{return e.matches(t)}catch{return!1}})}var Lw=["transform","translate","scale","rotate","perspective"],Bw=["transform","translate","scale","rotate","perspective","filter"],Fw=["paint","layout","strict","content"];function pv(e){var t=yf(),n=Jo(e)?Ko(e):e;return Lw.some(o=>!!n[o]&&n[o]!=="none")||!!n.containerType&&n.containerType!=="normal"||!t&&!!n.backdropFilter&&n.backdropFilter!=="none"||!t&&!!n.filter&&n.filter!=="none"||Bw.some(o=>(n.willChange||"").includes(o))||Fw.some(o=>(n.contain||"").includes(o))}function yf(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var Ww=new Set(["html","body","#document"]);function _s(e){return Ww.has(Fs(e))}function Ko(e){return ko(e).getComputedStyle(e)}function qu(e){return Jo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oi(e){if(Fs(e)==="html")return e;var t=e.assignedSlot||e.parentNode||dh(e)&&e.host||ua(e);return dh(t)?t.host:t}function g0(e){var t=oi(e);return _s(t)?e.ownerDocument?e.ownerDocument.body:e.body:da(t)&&Nl(t)?t:g0(t)}function $l(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);var a=g0(e),i=a===((o=e.ownerDocument)==null?void 0:o.body),s=ko(a);if(i){var l=hv(s);return t.concat(s,s.visualViewport||[],Nl(a)?a:[],l&&n?$l(l):[])}return t.concat(a,$l(a,[],n))}function hv(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function m0(e){var t=Ko(e),n=parseFloat(t.width)||0,o=parseFloat(t.height)||0,a=da(e),i=a?e.offsetWidth:n,s=a?e.offsetHeight:o,l=cu(n)!==i||cu(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function jf(e){return Jo(e)?e:e.contextElement}function Ms(e){var t=jf(e);if(!da(t))return ca(1);var n=t.getBoundingClientRect(),{width:o,height:a,$:i}=m0(t),s=(i?cu(n.width):n.width)/o,l=(i?cu(n.height):n.height)/a;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}var Vw=ca(0);function b0(e){var t=ko(e);return yf()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Vw}function Hi(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);var a=e.getBoundingClientRect(),i=jf(e),s=ca(1);t&&(o?Jo(o)&&(s=Ms(o)):s=Ms(e));var l=function(w,z,U){return z===void 0&&(z=!1),!(!U||z&&U!==ko(w))&&z}(i,n,o)?b0(i):ca(0),c=(a.left+l.x)/s.x,u=(a.top+l.y)/s.y,d=a.width/s.x,v=a.height/s.y;if(i)for(var p=ko(i),g=o&&Jo(o)?ko(o):o,y=p,b=hv(y);b&&o&&g!==y;){var j=Ms(b),x=b.getBoundingClientRect(),C=Ko(b),T=x.left+(b.clientLeft+parseFloat(C.paddingLeft))*j.x,O=x.top+(b.clientTop+parseFloat(C.paddingTop))*j.y;c*=j.x,u*=j.y,d*=j.x,v*=j.y,c+=T,u+=O,b=hv(y=ko(b))}return uu({width:d,height:v,x:c,y:u})}function vu(e,t){var n=qu(e).scrollLeft;return t?t.left+n:Hi(ua(e)).left+n}function y0(e,t){var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-vu(e,n),y:n.top+t.scrollTop}}var Hw=new Set(["absolute","fixed"]);function vh(e,t,n){var o;if(t==="viewport")o=function(i,s){var l=ko(i),c=ua(i),u=l.visualViewport,d=c.clientWidth,v=c.clientHeight,p=0,g=0;if(u){d=u.width,v=u.height;var y=yf();(!y||y&&s==="fixed")&&(p=u.offsetLeft,g=u.offsetTop)}var b=vu(c);if(b<=0){var j=c.ownerDocument,x=j.body,C=getComputedStyle(x),T=j.compatMode==="CSS1Compat"&&parseFloat(C.marginLeft)+parseFloat(C.marginRight)||0,O=Math.abs(c.clientWidth-x.clientWidth-T);O<=25&&(d-=O)}else b<=25&&(d+=b);return{width:d,height:v,x:p,y:g}}(e,n);else if(t==="document")o=function(i){var s=ua(i),l=qu(i),c=i.ownerDocument.body,u=Ii(s.scrollWidth,s.clientWidth,c.scrollWidth,c.clientWidth),d=Ii(s.scrollHeight,s.clientHeight,c.scrollHeight,c.clientHeight),v=-l.scrollLeft+vu(i),p=-l.scrollTop;return Ko(c).direction==="rtl"&&(v+=Ii(s.clientWidth,c.clientWidth)-u),{width:u,height:d,x:v,y:p}}(ua(e));else if(Jo(t))o=function(i,s){var l=Hi(i,!0,s==="fixed"),c=l.top+i.clientTop,u=l.left+i.clientLeft,d=da(i)?Ms(i):ca(1);return{width:i.clientWidth*d.x,height:i.clientHeight*d.y,x:u*d.x,y:c*d.y}}(t,n);else{var a=b0(e);o={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return uu(o)}function j0(e,t){var n=oi(e);return!(n===t||!Jo(n)||_s(n))&&(Ko(n).position==="fixed"||j0(n,t))}function Jw(e,t,n){var o=da(t),a=ua(t),i=n==="fixed",s=Hi(e,!0,i,t),l={scrollLeft:0,scrollTop:0},c=ca(0);function u(){c.x=vu(a)}if(o||!o&&!i)if((Fs(t)!=="body"||Nl(a))&&(l=qu(t)),o){var d=Hi(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else a&&u();i&&!o&&a&&u();var v=!a||o||i?ca(0):y0(a,l);return{x:s.left+l.scrollLeft-c.x-v.x,y:s.top+l.scrollTop-c.y-v.y,width:s.width,height:s.height}}function xd(e){return Ko(e).position==="static"}function fh(e,t){if(!da(e)||Ko(e).position==="fixed")return null;if(t)return t(e);var n=e.offsetParent;return ua(e)===n&&(n=n.ownerDocument.body),n}function ph(e,t){var n=ko(e);if(du(e))return n;if(!da(e)){for(var o=oi(e);o&&!_s(o);){if(Jo(o)&&!xd(o))return o;o=oi(o)}return n}for(var a=fh(e,t);a&&Dw(a)&&xd(a);)a=fh(a,t);return a&&_s(a)&&xd(a)&&!pv(a)?n:a||function(i){for(var s=oi(i);da(s)&&!_s(s);){if(pv(s))return s;if(du(s))return null;s=oi(s)}return null}(e)||n}var Kw={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:n,offsetParent:o,strategy:a}=e,i=a==="fixed",s=ua(o),l=!!t&&du(t.floating);if(o===s||l&&i)return n;var c={scrollLeft:0,scrollTop:0},u=ca(1),d=ca(0),v=da(o);if((v||!v&&!i)&&((Fs(o)!=="body"||Nl(s))&&(c=qu(o)),da(o))){var p=Hi(o);u=Ms(o),d.x=p.x+o.clientLeft,d.y=p.y+o.clientTop}var g=!s||v||i?ca(0):y0(s,c);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+g.x,y:n.y*u.y-c.scrollTop*u.y+d.y+g.y}},getDocumentElement:ua,getClippingRect:function(e){var{element:t,boundary:n,rootBoundary:o,strategy:a}=e,i=n==="clippingAncestors"?du(t)?[]:function(u,d){var v=d.get(u);if(v)return v;for(var p=$l(u,[],!1).filter(C=>Jo(C)&&Fs(C)!=="body"),g=null,y=Ko(u).position==="fixed",b=y?oi(u):u;Jo(b)&&!_s(b);){var j=Ko(b),x=pv(b);x||j.position!=="fixed"||(g=null),(y?!x&&!g:!x&&j.position==="static"&&g&&Hw.has(g.position)||Nl(b)&&!x&&j0(u,b))?p=p.filter(C=>C!==b):g=j,b=oi(b)}return d.set(u,p),p}(t,this._c):[].concat(n),s=[...i,o],l=s[0],c=s.reduce((u,d)=>{var v=vh(t,d,a);return u.top=Ii(v.top,u.top),u.right=lu(v.right,u.right),u.bottom=lu(v.bottom,u.bottom),u.left=Ii(v.left,u.left),u},vh(t,l,a));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ph,getElementRects:function(){var e=gt(function*(t){var n=this.getOffsetParent||ph,o=this.getDimensions,a=yield o(t.floating);return{reference:Jw(t.reference,yield n(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:n}=m0(e);return{width:t,height:n}},getScale:Ms,isElement:Jo,isRTL:function(e){return Ko(e).direction==="rtl"}};function hh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Yw(e,t,n,o){o===void 0&&(o={});var{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=jf(e),d=a||i?[...u?$l(u):[],...$l(t)]:[];d.forEach(j=>{a&&j.addEventListener("scroll",n,{passive:!0}),i&&j.addEventListener("resize",n)});var v,p=u&&l?function(j,x){var C,T=null,O=ua(j);function w(){var z;clearTimeout(C),(z=T)==null||z.disconnect(),T=null}return function z(U,ae){U===void 0&&(U=!1),ae===void 0&&(ae=1),w();var M=j.getBoundingClientRect(),{left:K,top:J,width:I,height:re}=M;if(U||x(),I&&re){var we={rootMargin:-kc(J)+"px "+-kc(O.clientWidth-(K+I))+"px "+-kc(O.clientHeight-(J+re))+"px "+-kc(K)+"px",threshold:Ii(0,lu(1,ae))||1},se=!0;try{T=new IntersectionObserver(ze,Ae(Ae({},we),{},{root:O.ownerDocument}))}catch{T=new IntersectionObserver(ze,we)}T.observe(j)}function ze(Ie){var Ue=Ie[0].intersectionRatio;if(Ue!==ae){if(!se)return z();Ue?z(!1,Ue):C=setTimeout(()=>{z(!1,1e-7)},1e3)}Ue!==1||hh(M,j.getBoundingClientRect())||z(),se=!1}}(!0),w}(u,n):null,g=-1,y=null;s&&(y=new ResizeObserver(j=>{var[x]=j;x&&x.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var C;(C=y)==null||C.observe(t)})),n()}),u&&!c&&y.observe(u),y.observe(t));var b=c?Hi(e):null;return c&&function j(){var x=Hi(e);b&&!hh(b,x)&&n(),b=x,v=requestAnimationFrame(j)}(),n(),()=>{var j;d.forEach(x=>{a&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),p?.(),(j=y)==null||j.disconnect(),y=null,c&&cancelAnimationFrame(v)}}var Qw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>gt(function*(){var n,o,{x:a,y:i,placement:s,middlewareData:l}=t,c=yield function(u,d){return fv.apply(this,arguments)}(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:a+c.x,y:i+c.y,data:Ae(Ae({},c),{},{placement:s})}})()}},Gw=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>gt(function*(){var{x:n,y:o,placement:a}=t,i=Nu(e,t),{mainAxis:s=!0,crossAxis:l=!1,limiter:c={fn:T=>{var{x:O,y:w}=T;return{x:O,y:w}}}}=i,u=Dg(i,Pj),d={x:n,y:o},v=yield p0(t,u),p=ri(Vi(a)),g=d0(p),y=d[g],b=d[p];if(s){var j=g==="y"?"bottom":"right";y=sh(y+v[g==="y"?"top":"left"],y,y-v[j])}if(l){var x=p==="y"?"bottom":"right";b=sh(b+v[p==="y"?"top":"left"],b,b-v[x])}var C=c.fn(Ae(Ae({},t),{},{[g]:y,[p]:b}));return Ae(Ae({},C),{},{data:{x:C.x-n,y:C.y-o,enabled:{[g]:s,[p]:l}}})})()}},Xw=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>gt(function*(){var n,o,{placement:a,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:u}=t,d=Nu(e,t),{mainAxis:v=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:j=!0}=d,x=Dg(d,Rj);if((n=i.arrow)!=null&&n.alignmentOffset)return{};var C=Vi(a),T=ri(l),O=Vi(l)===l,w=yield c.isRTL==null?void 0:c.isRTL(u.floating),z=g||(O||!j?[Cc(l)]:function(me){var Me=Cc(me);return[dv(me),Me,dv(Me)]}(l)),U=b!=="none";!g&&U&&z.push(...Rw(l,j,b,w));var ae=[l,...z],M=yield p0(t,x),K=[],J=((o=i.flip)==null?void 0:o.overflows)||[];if(v&&K.push(M[C]),p){var I=function(me,Me,et){et===void 0&&(et=!1);var ke=$u(me),de=f0(me),xe=v0(de),mt=de==="x"?ke===(et?"end":"start")?"right":"left":ke==="start"?"bottom":"top";return Me.reference[xe]>Me.floating[xe]&&(mt=Cc(mt)),[mt,Cc(mt)]}(a,s,w);K.push(M[I[0]],M[I[1]])}if(J=[...J,{placement:a,overflows:K}],!K.every(me=>me<=0)){var re,we,se=(((re=i.flip)==null?void 0:re.index)||0)+1,ze=ae[se];if(ze&&(!(p==="alignment"&&T!==ri(ze))||J.every(me=>ri(me.placement)!==T||me.overflows[0]>0)))return{data:{index:se,overflows:J},reset:{placement:ze}};var Ie=(we=J.filter(me=>me.overflows[0]<=0).sort((me,Me)=>me.overflows[1]-Me.overflows[1])[0])==null?void 0:we.placement;if(!Ie)switch(y){case"bestFit":var Ue,ue=(Ue=J.filter(me=>{if(U){var Me=ri(me.placement);return Me===T||Me==="y"}return!0}).map(me=>[me.placement,me.overflows.filter(Me=>Me>0).reduce((Me,et)=>Me+et,0)]).sort((me,Me)=>me[1]-Me[1])[0])==null?void 0:Ue[0];ue&&(Ie=ue);break;case"initialPlacement":Ie=l}if(a!==Ie)return{reset:{placement:Ie}}}return{}})()}};function Zw(e){var t,n,o={autoUpdate:!0},a=e,i=c=>Ae(Ae(Ae({},o),e||{}),c||{}),s=c=>{t&&n&&(a=i(c),((u,d,v)=>{var p=new Map,g=Ae({platform:Kw},v),y=Ae(Ae({},g.platform),{},{_c:p});return Nw(u,d,Ae(Ae({},g),{},{platform:y}))})(t,n,a).then(u=>{var d;Object.assign(n.style,{position:u.strategy,left:"".concat(u.x,"px"),top:"".concat(u.y,"px")}),!((d=a)===null||d===void 0)&&d.onComputed&&a.onComputed(u)}))},l=c=>{Ro(c.subscribe(u=>{t===void 0?(t=u,s()):(Object.assign(t,u),s())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,s()},(c,u)=>{var d;n=c,a=i(u),setTimeout(()=>s(u),0),s(u);var v=()=>{d&&(d(),d=void 0)},p=function(){var{autoUpdate:g}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a||{};v(),g!==!1&&jm().then(()=>Yw(t,n,()=>s(a),g===!0?{}:g))};return d=p(),{update(g){s(g),d=p(g)},destroy(){v()}}},s]}function ek(e){var{loadOptions:t,filterText:n,items:o,multiple:a,value:i,itemId:s,groupBy:l,filterSelectedItems:c,itemFilter:u,convertStringItemsToObjects:d,filterGroupedItems:v,label:p}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=d(o));var g=o.filter(y=>{var b=u(y[p],n,y);return b&&a&&i!=null&&i.length&&(b=!i.some(j=>!!c&&j[s]===y[s])),b});return l&&(g=v(g)),g}function tk(e){return x0.apply(this,arguments)}function x0(){return(x0=gt(function*(e){var{dispatch:t,loadOptions:n,convertStringItemsToObjects:o,filterText:a}=e,i=yield n(a).catch(s=>{console.warn("svelte-select loadOptions error :>> ",s),t("error",{type:"loadOptions",details:s})});if(i&&!i.cancelled)return i?(i&&i.length>0&&typeof i[0]!="object"&&(i=o(i)),t("loaded",{items:i})):i=[],{filteredItems:i,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}Ot(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var nk=bi(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);Ot(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var rk=bi(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function wd(e){R(e,rk())}Ot(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var ok=bi('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');Ot(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var ak=ee('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),ik=ee('<div class="empty svelte-1ul7oo4">No options</div>'),sk=ee('<div role="none"><!> <!> <!></div>'),lk=ee('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),ck=ee('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),uk=ee('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),dk=ee("<div><!></div>"),vk=ee('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),fk=ee('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),pk=ee('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),hk=ee('<input type="hidden" class="svelte-1ul7oo4"/>'),gk=ee('<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>'),mk=ee('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function zi(e,t){var n=function(q){var Y={};for(var be in q.children&&(Y.default=!0),q.$$slots)Y[be]=!0;return Y}(t);ut(t,!1);var o,a=N(),i=N(),s=N(),l=N(),c=N(),u=N(),d=N(),v=N(),p=N(),g=lx(),y=h(t,"justValue",12,null),b=h(t,"filter",8,ek),j=h(t,"getItems",8,tk),x=h(t,"id",8,null),C=h(t,"name",8,null),T=h(t,"container",12,void 0),O=h(t,"input",12,void 0),w=h(t,"multiple",8,!1),z=h(t,"multiFullItemClearable",8,!1),U=h(t,"disabled",8,!1),ae=h(t,"focused",12,!1),M=h(t,"value",12,null),K=h(t,"filterText",12,""),J=h(t,"placeholder",8,"Please select"),I=h(t,"placeholderAlwaysShow",8,!1),re=h(t,"items",12,null),we=h(t,"label",8,"label"),se=h(t,"itemFilter",8,(q,Y,be)=>"".concat(q).toLowerCase().includes(Y.toLowerCase())),ze=h(t,"groupBy",8,void 0),Ie=h(t,"groupFilter",8,q=>q),Ue=h(t,"groupHeaderSelectable",8,!1),ue=h(t,"itemId",8,"value"),me=h(t,"loadOptions",8,void 0),Me=h(t,"containerStyles",8,""),et=h(t,"hasError",8,!1),ke=h(t,"filterSelectedItems",8,!0),de=h(t,"required",8,!1),xe=h(t,"closeListOnChange",8,!0),mt=h(t,"clearFilterTextOnBlur",8,!0),Gt=h(t,"createGroupHeaderItem",8,(q,Y)=>({value:q,[we()]:q})),fe=()=>r(d),H=h(t,"searchable",8,!0),ge=h(t,"inputStyles",8,""),B=h(t,"clearable",8,!0),pe=h(t,"loading",12,!1),G=h(t,"listOpen",12,!1),qe=h(t,"debounce",8,function(q){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(q,Y)}),te=h(t,"debounceWait",8,300),L=h(t,"hideEmptyState",8,!1),st=h(t,"inputAttributes",24,()=>({})),it=h(t,"listAutoWidth",8,!0),Ce=h(t,"showChevron",8,!1),wt=h(t,"listOffset",8,5),Le=h(t,"hoverItemIndex",12,0),Ve=h(t,"floatingConfig",24,()=>({})),ht=h(t,"class",8,""),De=N(),Mt=N(),k=N(),S=N(),A=N();function $(q){return q.map((Y,be)=>({index:be,value:Y,label:"".concat(Y)}))}function oe(q){var Y=[],be={};q.forEach(nt=>{var rt=ze()(nt);Y.includes(rt)||(Y.push(rt),be[rt]=[],rt&&be[rt].push(Object.assign(Gt()(rt,nt),{id:rt,groupHeader:!0,selectable:Ue()}))),be[rt].push(Object.assign({groupItem:!!rt},nt))});var Pe=[];return Ie()(Y).forEach(nt=>{be[nt]&&Pe.push(...be[nt])}),Pe}function Se(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Y=arguments.length>1?arguments[1]:void 0;Le(q<0?0:q),!Y&&ze()&&r(d)[Le()]&&!r(d)[Le()].selectable&&Pt(1)}function Ee(){var q=!0;if(M()){var Y=[],be=[];M().forEach(Pe=>{Y.includes(Pe[ue()])?q=!1:(Y.push(Pe[ue()]),be.push(Pe))}),q||M(be)}return q}function Z(q){var Y=q?q[ue()]:M()[ue()];return re().find(be=>be[ue()]===Y)}function ne(q){return lt.apply(this,arguments)}function lt(){return(lt=gt(function*(q){var Y=M()[q];M().length===1?M(void 0):M(M().filter(be=>be!==Y)),g("clear",Y)})).apply(this,arguments)}function tt(q){if(ae())switch(q.stopPropagation(),q.key){case"Escape":q.preventDefault(),qt();break;case"Enter":if(q.preventDefault(),G()){if(r(d).length===0)break;var Y=r(d)[Le()];if(M()&&!w()&&M()[ue()]===Y[ue()]){qt();break}Ge(r(d)[Le()])}break;case"ArrowDown":q.preventDefault(),G()?Pt(1):(G(!0),f(De,void 0));break;case"ArrowUp":q.preventDefault(),G()?Pt(-1):(G(!0),f(De,void 0));break;case"Tab":if(G()&&ae()){if(r(d).length===0||M()&&M()[ue()]===r(d)[Le()][ue()])return qt();q.preventDefault(),Ge(r(d)[Le()]),qt()}break;case"Backspace":if(!w()||K().length>0)return;if(w()&&M()&&M().length>0){if(ne(r(De)!==void 0?r(De):M().length-1),r(De)===0||r(De)===void 0)break;f(De,M().length>r(De)?r(De)-1:void 0)}break;case"ArrowLeft":if(!M()||!w()||K().length>0)return;r(De)===void 0?f(De,M().length-1):M().length>r(De)&&r(De)!==0&&f(De,r(De)-1);break;case"ArrowRight":if(!M()||!w()||K().length>0||r(De)===void 0)return;r(De)===M().length-1?f(De,void 0):r(De)<M().length-1&&f(De,r(De)+1)}}function Fe(q){var Y,be;ae()&&O()===((Y=document)===null||Y===void 0?void 0:Y.activeElement)||(q&&g("focus",q),(be=O())===null||be===void 0||be.focus(),ae(!0))}function He(q){return Nt.apply(this,arguments)}function Nt(){return(Nt=gt(function*(q){var Y;Et||(G()||ae())&&(g("blur",q),qt(),ae(!1),f(De,void 0),(Y=O())===null||Y===void 0||Y.blur())})).apply(this,arguments)}function kn(){if(!U())return K().length>0?G(!0):void G(!G())}function En(){g("clear",M()),M(void 0),qt(),Fe()}function qt(){mt()&&K(""),G(!1)}cx(gt(function*(){f(Mt,M()),f(k,K()),f(S,w())})),Zr(()=>{G()&&ae(!0),ae()&&O()&&O().focus()});var pn=h(t,"ariaValues",8,q=>"Option ".concat(q,", selected.")),Bt=h(t,"ariaListOpen",8,(q,Y)=>"You are currently focused on option ".concat(q,". There are ").concat(Y," results available.")),Yt=h(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),dn,pt=N(null);function on(){clearTimeout(dn),dn=setTimeout(()=>{Et=!1},100)}Ro(()=>{var q;(q=r(pt))===null||q===void 0||q.remove()});var Et=!1;function Ge(q){q&&q.selectable!==!1&&function(Y){if(Y){K("");var be=Object.assign({},Y);if(be.groupHeader&&!be.selectable)return;M(w()?M()?M().concat([be]):[be]:M(be)),setTimeout(()=>{xe()&&qt(),f(De,void 0),g("change",M()),g("select",Y)})}}(q)}function Ft(q){Et||Le(q)}function Pt(q){if(r(d).filter(be=>!Object.hasOwn(be,"selectable")||be.selectable===!0).length===0)return Le(0);q>0&&Le()===r(d).length-1?Le(0):q<0&&Le()===0?Le(r(d).length-1):Le(Le()+q);var Y=r(d)[Le()];Y&&Y.selectable===!1&&(q!==1&&q!==-1||Pt(q))}function _n(q,Y,be){if(!w())return Y&&Y[be]===q[be]}var Ln=ir,Dn=ir;function ir(q){return{update(Y){Y.scroll&&(on(),q.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Wn=N({strategy:"absolute",placement:"bottom-start",middleware:[Qw(wt()),Xw(),Gw()],autoUpdate:!1}),[tr,vr,Gn]=Zw(r(Wn)),Sr=N(!0);X(()=>(m(re()),m(M())),()=>{re(),M()&&function(){if(typeof M()=="string"){var q=(re()||[]).find(Y=>Y[ue()]===M());M(q||{[ue()]:M(),label:M()})}else w()&&Array.isArray(M())&&M().length>0&&M(M().map(Y=>typeof Y=="string"?{value:Y,label:Y}:Y))}()}),X(()=>(m(st()),m(H())),()=>{!st()&&H()||(f(A,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},st())),x()&&jo(A,r(A).id=x()),H()||jo(A,r(A).readonly=!0))}),X(()=>m(w()),()=>{w()&&M()&&(Array.isArray(M())?M([...M()]):M([M()]))}),X(()=>(r(S),m(w())),()=>{r(S)&&!w()&&M()&&M(null)}),X(()=>(m(w()),m(M())),()=>{w()&&M()&&M().length>1&&Ee()}),X(()=>m(M()),()=>{M()&&(w()?JSON.stringify(M())!==JSON.stringify(r(Mt))&&Ee()&&g("input",M()):r(Mt)&&JSON.stringify(M()[ue()])===JSON.stringify(r(Mt)[ue()])||g("input",M()))}),X(()=>(m(M()),m(w()),r(Mt)),()=>{!M()&&w()&&r(Mt)&&g("input",M())}),X(()=>(m(ae()),m(O())),()=>{!ae()&&O()&&qt()}),X(()=>(m(K()),r(k)),()=>{K()!==r(k)&&(me()||K().length!==0)&&(me()?qe()(gt(function*(){pe(!0);var q=yield j()({dispatch:g,loadOptions:me(),convertStringItemsToObjects:$,filterText:K()});q?(pe(q.loading),G(G()?q.listOpen:K().length>0),ae(G()&&q.focused),re(ze()?oe(q.filteredItems):q.filteredItems)):(pe(!1),ae(!0),G(!0))}),te()):(G(!0),w()&&f(De,void 0)))}),X(()=>(m(b()),m(me()),m(K()),m(re()),m(w()),m(M()),m(ue()),m(ze()),m(we()),m(ke()),m(se())),()=>{f(d,b()({loadOptions:me(),filterText:K(),items:re(),multiple:w(),value:M(),itemId:ue(),groupBy:ze(),label:we(),filterSelectedItems:ke(),itemFilter:se(),convertStringItemsToObjects:$,filterGroupedItems:oe}))}),X(()=>(m(w()),m(G()),m(M()),r(d)),()=>{!w()&&G()&&M()&&r(d)&&Se(r(d).findIndex(q=>q[ue()]===M()[ue()]),!0)}),X(()=>(m(G()),m(w())),()=>{G()&&w()&&Le(0)}),X(()=>m(K()),()=>{K()&&Le(0)}),X(()=>m(Le()),()=>{var q;q=Le(),g("hoverItem",q)}),X(()=>(m(w()),m(M())),()=>{f(a,w()?M()&&M().length>0:M())}),X(()=>(r(a),m(K())),()=>{f(i,r(a)&&K().length>0)}),X(()=>(r(a),m(B()),m(U()),m(pe())),()=>{f(s,r(a)&&B()&&!U()&&!pe())}),X(()=>(m(I()),m(w()),m(J()),m(M())),()=>{var q;f(l,I()&&w()||w()&&((q=M())===null||q===void 0?void 0:q.length)===0?J():M()?"":J())}),X(()=>(m(M()),m(w())),()=>{var q,Y;f(c,M()?(q=w(),Y=void 0,Y=q&&M().length>0?M().map(be=>be[we()]).join(", "):M()[we()],pn()(Y)):"")}),X(()=>(r(d),m(Le()),m(ae()),m(G())),()=>{f(u,function(){if(!r(d)||r(d).length===0)return"";var q=r(d)[Le()];if(G()&&q){var Y=r(d)?r(d).length:0;return Bt()(q[we()],Y)}return Yt()()}((r(d),Le(),ae(),G())))}),X(()=>m(re()),()=>{(function(q){q&&q.length!==0&&!q.some(Y=>typeof Y!="object")&&M()&&(w()?!M().some(Y=>!Y||!Y[ue()]):M()[ue()])&&(Array.isArray(M())?M(M().map(Y=>Z(Y)||Y)):M(Z()||M()))})(re())}),X(()=>(m(w()),m(M()),m(ue())),()=>{y((w(),M(),ue(),w()?M()?M().map(q=>q[ue()]):null:M()?M()[ue()]:M()))}),X(()=>(m(w()),r(Mt),m(M())),()=>{w()||!r(Mt)||M()||g("input",M())}),X(()=>(m(G()),r(d),m(w()),m(M())),()=>{G()&&r(d)&&!w()&&!M()&&Se()}),X(()=>r(d),()=>{(function(q){G()&&g("filter",q)})(r(d))}),X(()=>(m(T()),m(Ve()),r(Wn)),()=>{T()&&Ve()&&Gn(Object.assign(r(Wn),Ve()))}),X(()=>r(pt),()=>{f(v,!!r(pt))}),X(()=>(r(pt),m(G())),()=>{(function(q,Y){if(!q||!Y)return f(Sr,!0);setTimeout(()=>{f(Sr,!1)},0)})(r(pt),G())}),X(()=>(m(G()),m(T()),r(pt)),()=>{G()&&T()&&r(pt)&&function(){var{width:q}=T().getBoundingClientRect();jo(pt,r(pt).style.width=it()?q+"px":"auto")}()}),X(()=>m(Le()),()=>{f(p,Le())}),X(()=>(m(O()),m(G()),m(ae())),()=>{O()&&G()&&!ae()&&Fe()}),X(()=>(m(T()),m(Ve())),()=>{var q;T()&&((q=Ve())===null||q===void 0?void 0:q.autoUpdate)===void 0&&jo(Wn,r(Wn).autoUpdate=!0)}),wn();var fr={getFilteredItems:fe,handleClear:En};zt();var yr,Xn=mk();Oe("click",Ma,function(q){var Y;G()||ae()||!T()||T().contains(q.target)||(Y=r(pt))!==null&&Y!==void 0&&Y.contains(q.target)||He()}),Oe("keydown",Ma,tt);var ye=P(Xn),$t=q=>{var Y,be=sk(),Pe=P(be),nt=At=>{var Zt=Ut();cr(Xe(Zt),t,"list-prepend",{},null),R(At,Zt)};ie(Pe,At=>{D(()=>n["list-prepend"])&&At(nt)});var rt=V(Pe,2),ct=At=>{var Zt=Ut();cr(Xe(Zt),t,"list",{get filteredItems(){return r(d)}},null),R(At,Zt)},In=At=>{var Zt=Ut(),Rr=Xe(Zt),bt=Qt=>{var hn=Ut();dr(Xe(hn),1,()=>r(d),Cr,(Bn,An,kt)=>{var Or,hr=ak(),Pr=P(hr);cr(P(Pr),t,"item",{get item(){return r(An)},index:kt},Cn=>{var Tn=Fr();Te(()=>vt(Tn,(r(An),m(we()),D(()=>{var xr;return(xr=r(An))===null||xr===void 0?void 0:xr[we()]})))),R(Cn,Tn)}),no(Pr,(Cn,Tn)=>Ln?.(Cn),()=>({scroll:_n(r(An),M(),ue()),listDom:r(v)})),no(Pr,(Cn,Tn)=>Dn?.(Cn),()=>({scroll:r(p)===kt,listDom:r(v)})),Te(Cn=>Or=Tt(Pr,1,"item svelte-1ul7oo4",null,Or,Cn),[()=>{var Cn,Tn;return{"list-group-title":r(An).groupHeader,active:_n(r(An),M(),ue()),first:(Tn=kt,Tn===0),hover:Le()===kt,"group-item":r(An).groupItem,"not-selectable":((Cn=r(An))===null||Cn===void 0?void 0:Cn.selectable)===!1}}]),Oe("mouseover",hr,()=>Ft(kt)),Oe("focus",hr,()=>Ft(kt)),Oe("click",hr,ja(()=>function(Cn){var{item:Tn,i:xr}=Cn;if(Tn?.selectable!==!1)return M()&&!w()&&M()[ue()]===Tn[ue()]?qt():void(function(_){return _.groupHeader&&_.selectable||_.selectable||!_.hasOwnProperty("selectable")}(Tn)&&(Le(xr),Ge(Tn)))}({item:r(An),i:kt}))),Oe("keydown",hr,Va(ja(function(Cn){hl.call(this,t,Cn)}))),R(Bn,hr)}),R(Qt,hn)},gn=Qt=>{var hn=Ut(),Bn=Xe(hn),An=kt=>{var Or=Ut();cr(Xe(Or),t,"empty",{},hr=>{R(hr,ik())}),R(kt,Or)};ie(Bn,kt=>{L()||kt(An)},!0),R(Qt,hn)};ie(Rr,Qt=>{r(d),D(()=>r(d).length>0)?Qt(bt):Qt(gn,!1)},!0),R(At,Zt)};ie(rt,At=>{D(()=>n.list)?At(ct):At(In,!1)});var Jt=V(rt,2),an=At=>{var Zt=Ut();cr(Xe(Zt),t,"list-append",{},null),R(At,Zt)};ie(Jt,At=>{D(()=>n["list-append"])&&At(an)}),no(be,At=>vr?.(At)),Qn(be,At=>f(pt,At),()=>r(pt)),Kr(()=>Oe("scroll",be,on)),Kr(()=>Oe("pointerup",be,Va(ja(function(At){hl.call(this,t,At)})))),Kr(()=>Oe("mousedown",be,Va(ja(function(At){hl.call(this,t,At)})))),Te(At=>Y=Tt(be,1,"svelte-select-list svelte-1ul7oo4",null,Y,At),[()=>({prefloat:r(Sr)})]),R(q,be)};ie(ye,q=>{G()&&q($t)});var jn=V(ye,2),$n=P(jn),sr=q=>{var Y=lk(),be=Xe(Y),Pe=P(be),nt=P(V(be,2));Te(()=>{vt(Pe,r(c)),vt(nt,r(u))}),R(q,Y)};ie($n,q=>{ae()&&q(sr)});var zr=V(jn,2);cr(P(zr),t,"prepend",{},null);var Ht=V(zr,2),jr=P(Ht),Wr=q=>{var Y=Ut(),be=Xe(Y),Pe=rt=>{var ct=Ut();dr(Xe(ct),1,M,Cr,(In,Jt,an)=>{var At,Zt=uk(),Rr=P(Zt);cr(P(Rr),t,"selection",{get selection(){return r(Jt)},index:an},Qt=>{var hn=Fr();Te(()=>vt(hn,(r(Jt),m(we()),D(()=>r(Jt)[we()])))),R(Qt,hn)});var bt=V(Rr,2),gn=Qt=>{var hn=ck();cr(P(hn),t,"multi-clear-icon",{},Bn=>{wd(Bn)}),Oe("pointerup",hn,Va(ja(()=>ne(an)))),R(Qt,hn)};ie(bt,Qt=>{U()||z()||!wd||Qt(gn)}),Te(Qt=>At=Tt(Zt,1,"multi-item svelte-1ul7oo4",null,At,Qt),[()=>({active:r(De)===an,disabled:U()})]),Oe("click",Zt,Va(()=>z()?ne(an):{})),Oe("keydown",Zt,Va(ja(function(Qt){hl.call(this,t,Qt)}))),R(In,Zt)}),R(rt,ct)},nt=rt=>{var ct,In=dk();cr(P(In),t,"selection",{get selection(){return M()}},Jt=>{var an=Fr();Te(()=>vt(an,(m(M()),m(we()),D(()=>M()[we()])))),R(Jt,an)}),Te(Jt=>ct=Tt(In,1,"selected-item svelte-1ul7oo4",null,ct,Jt),[()=>({"hide-selected-item":r(i)})]),R(rt,In)};ie(be,rt=>{w()?rt(Pe):rt(nt,!1)}),R(q,Y)};ie(jr,q=>{r(a)&&q(Wr)});var Zn=V(jr,2);Nc(Zn,()=>Ae(Ae({readOnly:!H()},r(A)),{},{placeholder:r(l),style:ge(),disabled:U()}),void 0,void 0,"svelte-1ul7oo4",!0),Qn(Zn,q=>O(q),()=>O());var Ur=V(Ht,2),Mn=P(Ur),Xt=q=>{var Y=vk();cr(P(Y),t,"loading-icon",{},be=>{(function(Pe){R(Pe,ok())})(be)}),R(q,Y)};ie(Mn,q=>{pe()&&q(Xt)});var Rt=V(Mn,2),zn=q=>{var Y=fk();cr(P(Y),t,"clear-icon",{},be=>{wd(be)}),Oe("click",Y,En),R(q,Y)};ie(Rt,q=>{r(s)&&q(zn)});var pr=V(Rt,2),nr=q=>{var Y=pk();cr(P(Y),t,"chevron-icon",{get listOpen(){return G()}},be=>{(function(Pe){R(Pe,nk())})(be)}),R(q,Y)};ie(pr,q=>{Ce()&&q(nr)});var W=V(Ur,2);cr(W,t,"input-hidden",{get value(){return M()}},q=>{var Y=hk();Te(be=>{xn(Y,"name",C()),Bi(Y,be)},[()=>(m(M()),D(()=>M()?JSON.stringify(M()):null))]),R(q,Y)});var ce=V(W,2),_e=q=>{var Y=Ut();cr(Xe(Y),t,"required",{get value(){return M()}},be=>{R(be,gk())}),R(q,Y)};return ie(ce,q=>{m(de()),m(M()),D(()=>de()&&(!M()||M().length===0))&&q(_e)}),Kr(()=>Oe("pointerup",Xn,Va(kn))),Qn(Xn,q=>T(q),()=>T()),no(Xn,q=>tr?.(q)),Te(q=>{var Y;yr=Tt(Xn,1,"svelte-select ".concat((Y=ht())!==null&&Y!==void 0?Y:""),"svelte-1ul7oo4",yr,q),To(Xn,Me())},[()=>({multi:w(),disabled:U(),focused:ae(),"list-open":G(),"show-chevron":Ce(),error:et()})]),Oe("keydown",Zn,tt),Oe("blur",Zn,He),Oe("focus",Zn,Fe),Zc(Zn,K),R(e,Xn),xt(t,"getFilteredItems",fe),xt(t,"handleClear",En),dt(fr)}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var bk=ee('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function yk(e,t){var n,o,a,i,s;ut(t,!1);var l=N(void 0,!0),c=N(void 0,!0),u=N(void 0,!0),d=N(void 0,!0),v=N(void 0,!0),p=N(void 0,!0),g=Dr("jsoneditor:TransformWizard"),y=h(t,"json",9),b=h(t,"queryOptions",29,()=>({})),j=h(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(ke=>({value:ke,label:ke})),C=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],T=N((n=b())!==null&&n!==void 0&&(n=n.filter)!==null&&n!==void 0&&n.path?Qa(b().filter.path):void 0,!0),O=N((o=x.find(ke=>{var de;return ke.value===((de=b().filter)===null||de===void 0?void 0:de.relation)}))!==null&&o!==void 0?o:x[0],!0),w=N(((a=b())===null||a===void 0||(a=a.filter)===null||a===void 0?void 0:a.value)||"",!0),z=N((i=b())!==null&&i!==void 0&&(i=i.sort)!==null&&i!==void 0&&i.path?Qa(b().sort.path):void 0,!0),U=N((s=C.find(ke=>{var de;return ke.value===((de=b().sort)===null||de===void 0?void 0:de.direction)}))!==null&&s!==void 0?s:C[0],!0);X(()=>m(y()),()=>{f(l,Array.isArray(y()))}),X(()=>(r(l),m(y())),()=>{f(c,r(l)?tv(y()):[])}),X(()=>(r(l),m(y())),()=>{f(u,r(l)?tv(y(),!0):[])}),X(()=>(r(c),Qa),()=>{f(d,r(c).map(Qa))}),X(()=>(r(u),Qa),()=>{f(v,r(u)?r(u).map(Qa):[])}),X(()=>(m(b()),r(v),Lt),()=>{var ke;f(p,(ke=b())!==null&&ke!==void 0&&(ke=ke.projection)!==null&&ke!==void 0&&ke.paths&&r(v)?b().projection.paths.map(de=>r(v).find(xe=>Lt(xe.value,de))).filter(de=>!!de):void 0)}),X(()=>r(T),()=>{var ke,de,xe;de=(ke=r(T))===null||ke===void 0?void 0:ke.value,Lt((xe=b())===null||xe===void 0||(xe=xe.filter)===null||xe===void 0?void 0:xe.path,de)||(g("changeFilterPath",de),b(lo(b(),["filter","path"],de,!0)),j()(b()))}),X(()=>r(O),()=>{var ke,de,xe;de=(ke=r(O))===null||ke===void 0?void 0:ke.value,Lt((xe=b())===null||xe===void 0||(xe=xe.filter)===null||xe===void 0?void 0:xe.relation,de)||(g("changeFilterRelation",de),b(lo(b(),["filter","relation"],de,!0)),j()(b()))}),X(()=>r(w),()=>{var ke,de;ke=r(w),Lt((de=b())===null||de===void 0||(de=de.filter)===null||de===void 0?void 0:de.value,ke)||(g("changeFilterValue",ke),b(lo(b(),["filter","value"],ke,!0)),j()(b()))}),X(()=>r(z),()=>{var ke,de,xe;de=(ke=r(z))===null||ke===void 0?void 0:ke.value,Lt((xe=b())===null||xe===void 0||(xe=xe.sort)===null||xe===void 0?void 0:xe.path,de)||(g("changeSortPath",de),b(lo(b(),["sort","path"],de,!0)),j()(b()))}),X(()=>r(U),()=>{var ke,de,xe;de=(ke=r(U))===null||ke===void 0?void 0:ke.value,Lt((xe=b())===null||xe===void 0||(xe=xe.sort)===null||xe===void 0?void 0:xe.direction,de)||(g("changeSortDirection",de),b(lo(b(),["sort","direction"],de,!0)),j()(b()))}),X(()=>r(p),()=>{(function(ke){var de;Lt((de=b())===null||de===void 0||(de=de.projection)===null||de===void 0?void 0:de.paths,ke)||(g("changeProjectionPaths",ke),b(lo(b(),["projection","paths"],ke,!0)),j()(b()))})(r(p)?r(p).map(ke=>ke.value):void 0)}),wn(),zt(!0);var ae=bk(),M=P(ae),K=P(M),J=V(P(K)),I=P(J),re=P(I);zi(re,{class:"jse-filter-path",showChevron:!0,get items(){return r(d)},get value(){return r(T)},set value(ke){f(T,ke)},$$legacy:!0});var we=V(re,2);zi(we,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return x},get value(){return r(O)},set value(ke){f(O,ke)},$$legacy:!0});var se=V(we,2),ze=V(K),Ie=V(P(ze)),Ue=P(Ie),ue=P(Ue);zi(ue,{class:"jse-sort-path",showChevron:!0,get items(){return r(d)},get value(){return r(z)},set value(ke){f(z,ke)},$$legacy:!0}),zi(V(ue,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return C},get value(){return r(U)},set value(ke){f(U,ke)},$$legacy:!0});var me=V(ze),Me=V(P(me)),et=P(Me);zi(P(et),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return r(v)},get value(){return r(p)},set value(ke){f(p,ke)},$$legacy:!0}),Zc(se,()=>r(w),ke=>f(w,ke)),R(e,ae),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var jk=ee('<button type="button"><!> </button>'),xk=ee('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function wk(e,t){ut(t,!1);var n=h(t,"queryLanguages",8),o=h(t,"queryLanguageId",12),a=h(t,"onChangeQueryLanguage",8);zt();var i=xk();dr(P(i),5,n,Cr,(s,l)=>{var c,u=jk(),d=P(u),v=y=>{rn(y,{get data(){return Og}})},p=y=>{rn(y,{get data(){return Eg}})};ie(d,y=>{r(l),m(o()),D(()=>r(l).id===o())?y(v):y(p,!1)});var g=V(d);Te(y=>{var b;c=Tt(u,1,"jse-query-language svelte-jrd4q2",null,c,y),xn(u,"title",(r(l),D(()=>"Select ".concat(r(l).name," as query language")))),vt(g," ".concat((r(l),(b=D(()=>r(l).name))!==null&&b!==void 0?b:"")))},[()=>({selected:r(l).id===o()})]),Oe("click",u,()=>{return y=r(l).id,o(y),void a()(y);var y}),R(s,u)}),R(e,i),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var kk=ee('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),Ck=ee('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function fu(e,t){ut(t,!1);var n=h(t,"title",9,"Modal"),o=h(t,"fullScreenButton",9,!1),a=h(t,"fullscreen",13,!1),i=h(t,"onClose",9,void 0);zt(!0);var s=Ck(),l=P(s),c=P(l),u=V(l,2);cr(u,t,"actions",{},null);var d=V(u,2),v=g=>{var y=kk(),b=P(y),j=Ze(()=>a()?$b:Ib);rn(b,{get data(){return r(j)}}),Oe("click",y,()=>a(!a())),R(g,y)};ie(d,g=>{o()&&g(v)});var p=V(d,2);rn(P(p),{get data(){return xu}}),Te(()=>vt(c,n())),Oe("click",p,()=>{var g;return(g=i())===null||g===void 0?void 0:g()}),R(e,s),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var Sk=ee('<button slot="actions" type="button" title="Select a query language"><!></button>'),kd=Dr("jsoneditor:AutoScrollHandler");function gh(e){var t,n;function o(l){return l<20?200:l<50?400:1200}function a(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function i(l){n&&l===t||(s(),kd("startAutoScroll",l),t=l,n=setInterval(a,50))}function s(){n&&(kd("stopAutoScroll"),clearInterval(n),n=void 0,t=void 0)}return kd("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:u,bottom:d}=e.getBoundingClientRect();c<u?i(-o(u-c)):c>d?i(o(c-d)):s()}},onDragEnd:function(){s()}}}var Ok=(e,t,n,o)=>(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t,w0=()=>{var e,t,n,o,a,i,s,l,c,u,d,v,p;function g(j){return j.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function y(j){e.scrollTo?e.scrollTo(e.scrollLeft,j):e.scrollTop=j}function b(j){u||(u=j),y(i(d=j-u,n,l,c)),p=!0,d<c?requestAnimationFrame(b):function(){y(n+l),t&&s&&(t.setAttribute("tabindex","-1"),t.focus()),typeof v=="function"&&v(),u=0,p=!1}()}return function(j){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,a=x.offset||0,v=x.callback,i=x.easing||Ok,s=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof j){case"number":t=void 0,s=!1,o=n+j;break;case"object":o=g(t=j);break;case"string":t=document.querySelector(j),o=g(t)}switch(l=o-n+a,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}p?u=0:requestAnimationFrame(b)}};function xs(e,t){var n=Date.now(),o=e();return t(Date.now()-n),o}var hs=Dr("validation"),Ek={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function mh(e,t,n,o){return hf(e,t,n,o,Ek)}function k0(e,t,n,o){if(hs("validateJSON"),!t)return[];if(n!==o){var a=n.stringify(e);return t(a!==void 0?o.parse(a):void 0)}return t(e)}function _k(e,t,n,o){if(hs("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:Vo.info}]};if(e.length!==0)try{var a=xs(()=>n.parse(e),c=>hs("validate: parsed json in ".concat(c," ms")));if(!t)return;var i=n===o?a:xs(()=>o.parse(e),c=>hs("validate: parsed json with the validationParser in ".concat(c," ms"))),s=xs(()=>t(i),c=>hs("validate: validated json in ".concat(c," ms")));return fn(s)?void 0:{validationErrors:s}}catch(c){var l=xs(()=>function(u,d){if(u.length>nw)return!1;try{return d.parse(aa(u)),!0}catch{return!1}}(e,n),u=>hs("validate: checked whether repairable in ".concat(u," ms")));return{parseError:qs(e,c.message||c.toString()),isRepairable:l}}}var Sc=Dr("jsoneditor:FocusTracker");function xf(e){var t,{onMount:n,onDestroy:o,getWindow:a,hasFocus:i,onFocus:s,onBlur:l}=e,c=!1;function u(){var v=i();v&&(clearTimeout(t),c||(Sc("focus"),s(),c=v))}function d(){c&&(clearTimeout(t),t=setTimeout(()=>{i()||(Sc("blur"),c=!1,l())}))}n(()=>{Sc("mount FocusTracker");var v=a();v&&(v.addEventListener("focusin",u,!0),v.addEventListener("focusout",d,!0))}),o(()=>{Sc("destroy FocusTracker");var v=a();v&&(v.removeEventListener("focusin",u,!0),v.removeEventListener("focusout",d,!0))})}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var Mk=ee('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),Ak=ee('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function Co(e,t){ut(t,!1);var n=h(t,"type",9,"success"),o=h(t,"icon",9,void 0),a=h(t,"message",9,void 0),i=h(t,"actions",25,()=>[]),s=h(t,"onClick",9,void 0),l=h(t,"onClose",9,void 0);l()&&Ro(l()),zt(!0);var c,u=Ak(),d=P(u),v=P(d),p=P(v),g=b=>{rn(b,{get data(){return o()}})};ie(p,b=>{o()&&b(g)});var y=V(p);dr(V(d,2),5,i,Cr,(b,j)=>{var x=Mk(),C=P(x),T=w=>{rn(w,{get data(){return r(j),D(()=>r(j).icon)}})};ie(C,w=>{r(j),D(()=>r(j).icon)&&w(T)});var O=V(C);Te(()=>{var w;xn(x,"title",(r(j),D(()=>r(j).title))),x.disabled=(r(j),D(()=>r(j).disabled)),vt(O," ".concat((r(j),(w=D(()=>r(j).text))!==null&&w!==void 0?w:"")))}),Oe("click",x,()=>{r(j).onClick&&r(j).onClick()}),Oe("mousedown",x,()=>{r(j).onMouseDown&&r(j).onMouseDown()}),R(b,x)}),Te(b=>{var j,x;Tt(u,1,"jse-message jse-".concat((j=n())!==null&&j!==void 0?j:""),"svelte-cbvd26"),c=Tt(d,1,"jse-text svelte-cbvd26",null,c,b),vt(y," ".concat((x=a())!==null&&x!==void 0?x:""))},[()=>({"jse-clickable":!!s()})]),Oe("click",d,function(){s()&&s()()}),R(e,u),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var Tk=ee('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),zk=ee('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),Rk=ee('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),Pk=ee('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),Nk=ee('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),$k=ee('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function wf(e,t){ut(t,!1);var n=N(void 0,!0),o=h(t,"validationErrors",9),a=h(t,"selectError",9),i=N(!0,!0);function s(){f(i,!1)}function l(){f(i,!0)}X(()=>m(o()),()=>{f(n,o().length)}),wn(),zt(!0);var c=Ut(),u=Xe(c),d=v=>{var p=$k(),g=P(p),y=j=>{var x=Pk(),C=P(x),T=P(C);dr(T,1,()=>(m(eu),m(o()),m(yc),D(()=>eu(o(),yc))),Cr,(z,U,ae)=>{var M=zk(),K=P(M);rn(P(K),{get data(){return qi}});var J=V(K),I=P(J),re=V(J),we=P(re),se=P(V(re)),ze=Ie=>{var Ue=Tk();rn(P(Ue),{get data(){return Kb}}),Oe("click",Ue,ja(s)),R(Ie,Ue)};ie(se,Ie=>{m(o()),D(()=>ae===0&&o().length>1)&&Ie(ze)}),Te(Ie=>{var Ue;Tt(M,1,"jse-validation-".concat((r(U),(Ue=D(()=>r(U).severity))!==null&&Ue!==void 0?Ue:"")),"svelte-1342rh4"),vt(I,Ie),vt(we,(r(U),D(()=>r(U).message)))},[()=>(m(Br),r(U),D(()=>Br(r(U).path)))]),Oe("click",M,()=>{setTimeout(()=>a()(r(U)))}),R(z,M)});var O=V(T),w=z=>{var U=Rk(),ae=V(P(U),2),M=P(ae);Te(()=>vt(M,"(and ".concat(r(n)-yc," more errors)"))),R(z,U)};ie(O,z=>{r(n)>yc&&z(w)}),R(j,x)},b=j=>{var x=Nk(),C=P(x),T=P(C),O=P(T);rn(P(O),{get data(){return qi}});var w=P(V(O));rn(P(V(w)),{get data(){return dg}}),Te(z=>{var U;Tt(T,1,"jse-validation-".concat(z??""),"svelte-1342rh4"),vt(w,"".concat((U=r(n))!==null&&U!==void 0?U:""," validation errors "))},[()=>(m(o()),D(()=>{return z=o(),[Vo.error,Vo.warning,Vo.info].find(U=>z.some(ae=>ae.severity===U));var z}))]),Oe("click",T,l),R(j,x)};ie(g,j=>{r(i)||r(n)===1?j(y):j(b,!1)}),R(v,p)};ie(u,v=>{m(fn),m(o()),D(()=>!fn(o()))&&v(d)}),R(e,c),dt()}function pu(e,t){if(e)return e.addEventListener("keydown",n),{destroy(){e.removeEventListener("keydown",n)}};function n(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var Ik=ee('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function Il(e,t){ut(t,!1);var n=h(t,"className",8,void 0),o=h(t,"fullscreen",8,!1),a=h(t,"onClose",8),i=N();function s(){a()()}Zr(()=>r(i).showModal()),Ro(()=>r(i).close()),zt();var l,c=Ik(),u=P(c);cr(P(u),t,"default",{},null),Qn(c,d=>f(i,d),()=>r(i)),Kr(()=>Oe("close",c,s)),Kr(()=>{return Oe("pointerdown",c,(d=s,function(){for(var v=arguments.length,p=new Array(v),g=0;g<v;g++)p[g]=arguments[g];p[0].target===this&&d?.apply(this,p)}));var d}),Kr(()=>Oe("cancel",c,Va(function(d){hl.call(this,t,d)}))),no(c,(d,v)=>pu?.(d,v),()=>s),Te((d,v)=>l=Tt(c,1,d,"svelte-2aoco4",l,v),[()=>vi((m(Qo),m(n()),D(()=>Qo("jse-modal",n())))),()=>({"jse-fullscreen":o()})]),R(e,c),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var qk=ee('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function C0(e,t){ut(t,!1);var n=h(t,"onClose",9),o=sf()?"⌘":"Ctrl";zt(!0),Il(e,{get onClose(){return n()},className:"jse-copy-paste",children:(a,i)=>{var s=qk(),l=Xe(s);fu(l,{title:"Copying and pasting",get onClose(){return n()}});var c=V(l,2),u=V(P(c),2),d=P(u),v=P(d),p=P(v),g=V(d,2),y=P(g),b=P(y),j=P(V(g,2)),x=P(j),C=P(V(u,2));Te(()=>{vt(p,"".concat(o,"+C")),vt(b,"".concat(o,"+X")),vt(x,"".concat(o,"+V"))}),Oe("click",C,function(){for(var T,O=arguments.length,w=new Array(O),z=0;z<O;z++)w[z]=arguments[z];(T=n())===null||T===void 0||T.apply(this,w)}),R(a,s)},$$slots:{default:!0}}),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var Dk=ee('<div class="jse-separator svelte-3erbu0"></div>'),Uk=ee('<div class="jse-space svelte-3erbu0"></div>'),Lk=ee('<button type="button"><!> <!></button>'),Bk=ee('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function Du(e,t){ut(t,!1);var n=h(t,"items",25,()=>[]);zt(!0);var o=Bk(),a=P(o);cr(a,t,"left",{},null);var i=V(a,2);dr(i,1,n,Cr,(s,l)=>{var c=Ut(),u=Xe(c),d=p=>{R(p,Dk())},v=p=>{var g=Ut(),y=Xe(g),b=x=>{R(x,Uk())},j=x=>{var C=Ut(),T=Xe(C),O=z=>{var U=Lk(),ae=P(U),M=I=>{rn(I,{get data(){return r(l),D(()=>r(l).icon)}})};ie(ae,I=>{r(l),D(()=>r(l).icon)&&I(M)});var K=V(ae,2),J=I=>{var re=Fr();Te(()=>vt(re,(r(l),D(()=>r(l).text)))),R(I,re)};ie(K,I=>{r(l),D(()=>r(l).text)&&I(J)}),Te(()=>{var I;Tt(U,1,"jse-button ".concat((r(l),(I=D(()=>r(l).className))!==null&&I!==void 0?I:"")),"svelte-3erbu0"),xn(U,"title",(r(l),D(()=>r(l).title))),U.disabled=(r(l),D(()=>r(l).disabled||!1))}),Oe("click",U,function(){for(var I,re=arguments.length,we=new Array(re),se=0;se<re;se++)we[se]=arguments[se];(I=r(l).onClick)===null||I===void 0||I.apply(this,we)}),R(z,U)},w=z=>{var U=Fr();Te(ae=>vt(U,ae),[()=>(r(l),D(()=>function(ae){return console.error("Unknown type of menu item",ae),"???"}(r(l))))]),R(z,U)};ie(T,z=>{m(xa),r(l),D(()=>xa(r(l)))?z(O):z(w,!1)},!0),R(x,C)};ie(y,x=>{m(av),r(l),D(()=>av(r(l)))?x(b):x(j,!1)},!0),R(p,g)};ie(u,p=>{m(Ya),r(l),D(()=>Ya(r(l)))?p(d):p(v,!1)}),R(s,c)}),cr(V(i,2),t,"right",{},null),R(e,o),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var Fk=ee('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),Wk=ee('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function Vk(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=N(void 0,!0),i=N(void 0,!0),s=N(void 0,!0),l=N(void 0,!0),c=h(t,"text",13,""),u=h(t,"readOnly",9,!1),d=h(t,"onParse",9),v=h(t,"onRepair",9),p=h(t,"onChange",9,void 0),g=h(t,"onApply",9),y=h(t,"onCancel",9),b=Dr("jsoneditor:JSONRepair"),j=N(void 0,!0);function x(){if(r(j)&&r(n)){var J=r(n).position!==void 0?r(n).position:0;r(j).setSelectionRange(J,J),r(j).focus()}}function C(){g()(c())}function T(){try{c(v()(c())),p()&&p()(c())}catch{}}var O=N(void 0,!0);X(()=>m(c()),()=>{f(n,function(J){try{return void d()(J)}catch(I){return qs(J,I.message)}}(c()))}),X(()=>m(c()),()=>{f(o,function(J){try{return v()(J),!0}catch{return!1}}(c()))}),X(()=>r(n),()=>{b("error",r(n))}),X(()=>m(y()),()=>{f(O,[{type:"space"},{type:"button",icon:xu,title:"Cancel repair",className:"jse-cancel",onClick:y()}])}),X(()=>Bf,()=>{f(a,{icon:Bf,text:"Show me",title:"Scroll to the error location",onClick:x})}),X(()=>ci,()=>{f(i,{icon:ci,text:"Auto repair",title:"Automatically repair JSON",onClick:T})}),X(()=>(r(o),r(a),r(i)),()=>{f(s,r(o)?[r(a),r(i)]:[r(a)])}),X(()=>m(u()),()=>{f(l,[{icon:Rv,text:"Apply",title:"Apply fixed JSON",disabled:u(),onClick:C}])}),wn(),zt(!0);var w=Wk(),z=P(w);Du(z,{get items(){return r(O)},$$slots:{left:(J,I)=>{R(J,Fk())}}});var U=V(z,2),ae=J=>{var I=Ze(()=>(r(n),D(()=>"Cannot parse JSON: ".concat(r(n).message))));Co(J,{type:"error",get icon(){return qi},get message(){return r(I)},get actions(){return r(s)}})},M=J=>{Co(J,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return r(l)}})};ie(U,J=>{r(n)?J(ae):J(M,!1)});var K=V(U,2);Qn(K,J=>f(j,J),()=>r(j)),Te(()=>{K.readOnly=u(),Bi(K,c())}),Oe("input",K,function(J){b("handleChange");var I=J.target.value;c()!==I&&(c(I),p()&&p()(c()))}),R(e,w),dt()}function S0(e,t){ut(t,!1);var n=h(t,"text",13),o=h(t,"onParse",9),a=h(t,"onRepair",9),i=h(t,"onApply",9),s=h(t,"onClose",9);function l(u){i()(u),s()()}function c(){s()()}zt(!0),Il(e,{get onClose(){return s()},className:"jse-repair-modal",children:(u,d)=>{Vk(u,{get onParse(){return o()},get onRepair(){return a()},onApply:l,onCancel:c,get text(){return n()},set text(v){n(v)},$$legacy:!0})},$$slots:{default:!0}}),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var Hk=ee('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),Jk=ee('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function Kk(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=N(void 0,!0),i=N(void 0,!0),s=N(void 0,!0),l=h(t,"visibleSections",9),c=h(t,"sectionIndex",9),u=h(t,"total",9),d=h(t,"path",9),v=h(t,"selection",9),p=h(t,"onExpandSection",9),g=h(t,"context",9);X(()=>(m(l()),m(c())),()=>{f(n,l()[c()])}),X(()=>r(n),()=>{f(o,r(n).end)}),X(()=>(m(l()),m(c()),m(u())),()=>{f(a,l()[c()+1]?l()[c()+1].start:u())}),X(()=>(m(g()),m(v()),m(d()),r(o)),()=>{f(i,Pl(g().getJson(),v(),d().concat(String(r(o)))))}),X(()=>(r(o),r(a)),()=>{f(s,function(O,w){var z={start:O,end:Math.min(ov(O),w)},U=Math.max(nu((O+w)/2),O),ae={start:U,end:Math.min(ov(U),w)},M=nu(w),K=M===w?M-Al:M,J={start:Math.max(K,O),end:w},I=[z],re=ae.start>=z.end&&ae.end<=J.start;return re&&I.push(ae),J.start>=(re?ae.end:z.end)&&I.push(J),I}(r(o),r(a)))}),wn(),zt(!0);var y,b,j=Jk(),x=P(j),C=P(x),T=P(C);dr(V(C,2),1,()=>r(s),Cr,(O,w)=>{var z=Hk(),U=P(z);Te(()=>{var ae,M;return vt(U,"show ".concat((r(w),(ae=D(()=>r(w).start))!==null&&ae!==void 0?ae:""),"-").concat((r(w),(M=D(()=>r(w).end))!==null&&M!==void 0?M:"")))}),Oe("click",z,()=>p()(d(),r(w))),R(O,z)}),Te((O,w)=>{var z,U;y=Tt(j,1,"jse-collapsed-items svelte-1v6dhm4",null,y,O),b=To(j,"",b,w),vt(T,"Items ".concat((z=r(o))!==null&&z!==void 0?z:"","-").concat((U=r(a))!==null&&U!==void 0?U:""))},[()=>({"jse-selected":r(i)}),()=>({"--level":(m(d()),D(()=>d().length+2))})]),Oe("mousemove",j,function(O){O.stopPropagation()}),R(e,j),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var Yk=ee('<button type="button"><!></button>');function Ha(e,t){ut(t,!1);var n=h(t,"root",9,!1),o=h(t,"insert",9,!1),a=h(t,"selected",9),i=h(t,"onContextMenu",9);zt(!0);var s,l=Yk();rn(P(l),{get data(){return Ra}}),Te(c=>{s=Tt(l,1,"jse-context-menu-pointer svelte-10ijtzr",null,s,c),xn(l,"title",cf)},[()=>({"jse-root":n(),"jse-insert":o(),"jse-selected":a()})]),Oe("click",l,function(c){for(var u=c.target;u&&u.nodeName!=="BUTTON";)u=u.parentNode;u&&i()({anchor:u,left:0,top:0,width:Sa,height:Ca,offsetTop:2,offsetLeft:0,showTip:!0})}),R(e,l),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var Qk=ee('<div role="none" data-type="selectable-key"><!></div>'),Gk=ee("<!> <!>",1),Xk=ee('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function O0(e,t){ut(t,!0);var n=vo(()=>vn(t.selection)&&Ir(t.selection)),o=vo(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:r(n),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),a=Ut();dr(Xe(a),17,()=>r(o),Cr,(i,s)=>{var l=Ut(),c=Xe(l),u=v=>{var p=vo(()=>r(s).action),g=Xk();no(g,(y,b)=>{var j;return(j=r(p))===null||j===void 0?void 0:j(y,b)},()=>r(s).props),R(v,g)},d=v=>{var p=vo(()=>r(s).component),g=Ut();_m(Xe(g),()=>r(p),(y,b)=>{b(y,ii(()=>r(s).props))}),R(v,g)};ie(c,v=>{sw(r(s))?v(u):v(d,!1)}),R(i,l)}),R(e,a),dt()}var Zk={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function Cd(e){var{json:t,selection:n,deltaY:o,items:a}=e;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var i=o<0?function(d){for(var{json:v,items:p,selection:g,deltaY:y}=d,b=Oa(v,g),j=p.findIndex(z=>Lt(z.path,b)),x=()=>{var z;return(z=p[C-1])===null||z===void 0?void 0:z.height},C=j,T=0;x()!==void 0&&Math.abs(y)>T+x()/2;)T+=x(),C-=1;var O=p[C].path,w=C-j;return C!==j&&p[C]!==void 0?{beforePath:O,offset:w}:void 0}({json:t,selection:n,deltaY:o,items:a}):function(d){for(var v,{json:p,items:g,selection:y,deltaY:b}=d,j=li(p,y),x=g.findIndex(K=>Lt(K.path,j)),C=0,T=x,O=()=>{var K;return(K=g[T+1])===null||K===void 0?void 0:K.height};O()!==void 0&&Math.abs(b)>C+O()/2;)C+=O(),T+=1;var w=nn(j),z=Ke(p,w),U=Array.isArray(z)?T:T+1,ae=(v=g[U])===null||v===void 0?void 0:v.path,M=T-x;return ae?{beforePath:ae,offset:M}:{append:!0,offset:M}}({json:t,selection:n,deltaY:o,items:a});if(!i||i.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var s=function(d,v,p){if(!v)return[];var g="beforePath"in p?p.beforePath:void 0,y="append"in p?p.append:void 0,b=nn(ot(v)),j=Ke(d,b);if(!(y||g&&la(g,b)&&g.length>b.length))return[];var x=Oa(d,v),C=li(d,v),T=Vt(x),O=Vt(C),w=g?g[b.length]:void 0;if(!br(j)){if(ur(j)){var z=Yr(T),U=Yr(O),ae=w!==void 0?Yr(w):j.length;return jy(U-z+1,ae<z?re=>({op:"move",from:ft(b.concat(String(z+re))),path:ft(b.concat(String(ae+re)))}):()=>({op:"move",from:ft(b.concat(String(z))),path:ft(b.concat(String(ae)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var M=Object.keys(j),K=M.indexOf(T),J=M.indexOf(O),I=y?M.length:w!==void 0?M.indexOf(w):-1;return K!==-1&&J!==-1&&I!==-1?I>K?[...M.slice(K,J+1),...M.slice(I,M.length)].map(re=>pi(b,re)):[...M.slice(I,K),...M.slice(J+1,M.length)].map(re=>pi(b,re)):[]}(t,n,i),l=nn(Oa(t,n)),c=Ke(t,l);if(Array.isArray(c)){var u=function(d){var v,p,{items:g,json:y,selection:b,offset:j}=d,x=Oa(y,b),C=li(y,b),T=g.findIndex(U=>Lt(U.path,x)),O=g.findIndex(U=>Lt(U.path,C)),w=(v=g[T+j])===null||v===void 0?void 0:v.path,z=(p=g[O+j])===null||p===void 0?void 0:p.path;return eo(w,z)}({items:a,json:t,selection:n,offset:i.offset});return{operations:s,updatedSelection:u,offset:i.offset}}return{operations:s,updatedSelection:void 0,offset:i.offset}}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var eC=ee('<button type="button"><!></button>');function As(e,t){ut(t,!1);var n=N(),o=gi("absolute-popup"),a=h(t,"validationError",8),i=h(t,"onExpand",8);X(()=>m(a()),()=>{f(n,iw(a())&&a().isChildError?"Contains invalid data":a().message)}),wn(),zt();var s=eC();rn(P(s),{get data(){return qi}}),Kr(()=>Oe("click",s,function(){for(var l,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];(l=i())===null||l===void 0||l.apply(this,u)})),no(s,(l,c)=>Bs?.(l,c),()=>Ae({text:r(n)},o)),Te(()=>{var l;return Tt(s,1,"jse-validation-".concat((m(a()),(l=D(()=>a().severity))!==null&&l!==void 0?l:"")),"svelte-q6a061")}),R(e,s),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Kn=Tu(()=>Zk),tC=ee('<div class="jse-separator svelte-1qi6rc1">:</div>'),nC=ee('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),rC=ee('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),oC=ee('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),aC=ee('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),iC=ee('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),sC=ee('<div data-type="insert-selection-area-inside"><!></div>'),lC=ee('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),cC=ee("<!> <!>",1),uC=ee('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),dC=ee('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),vC=ee('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),fC=ee('<div class="jse-separator svelte-1qi6rc1">:</div>'),pC=ee('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),hC=ee('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),gC=ee('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),mC=ee('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),bC=ee('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),yC=ee('<div data-type="insert-selection-area-inside"><!></div>'),jC=ee('<div slot="identifier"><!></div>'),xC=ee('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),wC=ee('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),kC=ee('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),CC=ee('<div class="jse-separator svelte-1qi6rc1">:</div>'),SC=ee('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),OC=ee('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),EC=ee('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),_C=ee('<div data-type="insert-selection-area-after"><!></div>'),MC=ee('<div role="treeitem" tabindex="-1"><!> <!></div>');function gv(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=h(t,"pointer",9),i=h(t,"value",9),s=h(t,"state",9),l=h(t,"validationErrors",9),c=h(t,"searchResults",9),u=h(t,"selection",9),d=h(t,"context",9),v=h(t,"onDragSelectionStart",9),p=Dr("jsoneditor:JSONNode"),g=N(void 0,!0),y=void 0,b=N(void 0,!0),j=N(void 0,!0),x=N(void 0,!0),C=N(void 0,!0),T=N(void 0,!0),O=N(void 0,!0),w=N(void 0,!0);function z(fe){fe.stopPropagation();var H=lf(fe);d().onExpand(r(j),!r(x),H)}function U(){d().onExpand(r(j),!0)}function ae(fe,H){var ge=oc(r(j),Object.keys(i()),fe,H);return d().onPatch(ge),Vt(fo(ge[0].path))}function M(fe){d().onDrag(fe)}function K(fe){Kn().selecting&&(Kn(Kn().selecting=!1),fe.stopPropagation()),d().onDragEnd(),document.removeEventListener("mousemove",M,!0),document.removeEventListener("mouseup",K)}function J(){var fe;return((fe=d().findElement([]))===null||fe===void 0||(fe=fe.getBoundingClientRect())===null||fe===void 0?void 0:fe.top)||0}function I(fe,H){var ge=J()-fe.initialContentTop;return H.clientY-fe.initialClientY-ge}function re(fe){if(!d().readOnly&&u()){var H=nn(ot(u()));if(Lt(r(j),H)){var ge=function(te,L){var st=[];function it(S){var A=r(j).concat(S),$=d().findElement(A);$!==void 0&&st.push({path:A,height:$.clientHeight})}if(Array.isArray(i())){var Ce=d().getJson();if(Ce===void 0)return;var wt=Oa(Ce,te),Le=li(Ce,te),Ve=parseInt(Vt(wt),10),ht=parseInt(Vt(Le),10),De=L.find(S=>Ve>=S.start&&ht<=S.end);if(!De)return;var{start:Mt,end:k}=De;Pm(Mt,Math.min(i().length,k),S=>it(String(S)))}else Object.keys(i()).forEach(it);return st}(u(),r(T)||Es);if(p("dragSelectionStart",{selection:u(),items:ge}),ge){var B=d().getJson();if(B!==void 0){var pe=Oa(B,u()),G=ge.findIndex(te=>Lt(te.path,pe)),{offset:qe}=Cd({json:B,selection:d().getSelection(),deltaY:0,items:ge});f(b,{initialTarget:fe.target,initialClientY:fe.clientY,initialContentTop:J(),selectionStartIndex:G,selectionItemsCount:fi(B,u()).length,items:ge,offset:qe,didMoveItems:!1}),Kn(Kn().dragging=!0),document.addEventListener("mousemove",we,!0),document.addEventListener("mouseup",se)}}else p("Cannot drag the current selection (probably spread over multiple sections)")}else v()(fe)}}function we(fe){if(r(b)){var H=d().getJson();if(H===void 0)return;var ge=I(r(b),fe),{offset:B}=Cd({json:H,selection:d().getSelection(),deltaY:ge,items:r(b).items});B!==r(b).offset&&(p("drag selection",B,ge),f(b,Ae(Ae({},r(b)),{},{offset:B,didMoveItems:!0})))}}function se(fe){if(r(b)){var H=d().getJson();if(H===void 0)return;var ge=I(r(b),fe),{operations:B,updatedSelection:pe}=Cd({json:H,selection:d().getSelection(),deltaY:ge,items:r(b).items});if(B)d().onPatch(B,(te,L)=>({state:L,selection:pe??u()}));else if(fe.target===r(b).initialTarget&&!r(b).didMoveItems){var G=dd(fe.target),qe=Hm(fe.target);qe&&d().onSelect(Xp(G,qe))}f(b,void 0),Kn(Kn().dragging=!1),document.removeEventListener("mousemove",we,!0),document.removeEventListener("mouseup",se)}}function ze(fe){fe.shiftKey||(fe.stopPropagation(),fe.preventDefault(),d().onSelect(qa(r(j))))}function Ie(fe){fe.shiftKey||(fe.stopPropagation(),fe.preventDefault(),d().onSelect(Ta(r(j))))}function Ue(fe){d().onSelect(qa(r(j))),Fn(),d().onContextMenu(fe)}function ue(fe){d().onSelect(Ta(r(j))),Fn(),d().onContextMenu(fe)}X(()=>m(a()),()=>{f(j,fo(a()))}),X(()=>m(a()),()=>{f(n,encodeURIComponent(a()))}),X(()=>m(s()),()=>{f(x,!!Fi(s())&&s().expanded)}),X(()=>(m(i()),m(s())),()=>{f(C,oa(i(),s(),[]))}),X(()=>m(s()),()=>{f(T,qr(s())?s().visibleSections:void 0)}),X(()=>m(l()),()=>{var fe;f(O,(fe=l())===null||fe===void 0?void 0:fe.validationError)}),X(()=>(m(d()),m(u()),r(j)),()=>{f(w,Pl(d().getJson(),u(),r(j)))}),X(()=>r(j),()=>{f(o,r(j).length===0)}),wn(),zt(!0);var me,Me,et=MC(),ke=P(et),de=fe=>{var H=vC(),ge=Xe(H),B=P(ge),pe=P(B),G=P(pe),qe=Z=>{rn(Z,{get data(){return Ra}})},te=Z=>{rn(Z,{get data(){return Cl}})};ie(G,Z=>{r(x)?Z(qe):Z(te,!1)});var L=V(pe,2);cr(L,t,"identifier",{},null);var st=V(L,2),it=Z=>{R(Z,tC())};ie(st,Z=>{r(o)||Z(it)});var Ce=V(st,2),wt=P(Ce),Le=P(wt),Ve=Z=>{var ne=nC();Dc(V(Xe(ne),2),{children:(lt,tt)=>{var Fe=Fr();Te(()=>{var He,Nt;return vt(Fe,"".concat((m(i()),(He=D(()=>i().length))!==null&&He!==void 0?He:""),`
                `).concat((m(i()),(Nt=D(()=>i().length===1?"item":"items"))!==null&&Nt!==void 0?Nt:"")))}),R(lt,Fe)},$$slots:{default:!0}}),R(Z,ne)},ht=Z=>{var ne=rC();Dc(V(Xe(ne),2),{onclick:U,children:(lt,tt)=>{var Fe=Fr();Te(()=>{var He,Nt;return vt(Fe,"".concat((m(i()),(He=D(()=>i().length))!==null&&He!==void 0?He:""),`
                `).concat((m(i()),(Nt=D(()=>i().length===1?"item":"items"))!==null&&Nt!==void 0?Nt:"")))}),R(lt,Fe)},$$slots:{default:!0}}),R(Z,ne)};ie(Le,Z=>{r(x)?Z(Ve):Z(ht,!1)});var De=V(Ce,2),Mt=Z=>{var ne=oC();Ha(P(ne),{get root(){return r(o)},selected:!0,get onContextMenu(){return m(d()),D(()=>d().onContextMenu)}}),R(Z,ne)};ie(De,Z=>{m(d()),r(w),m(u()),m(vn),m(Pn),m(Ir),m(Lt),m(ot),r(j),D(()=>!d().readOnly&&r(w)&&u()&&(vn(u())||Pn(u()))&&!Ir(u())&&Lt(ot(u()),r(j)))&&Z(Mt)});var k=V(B,2),S=Z=>{As(Z,{get validationError(){return r(O)},onExpand:U})};ie(k,Z=>{r(O),r(x),D(()=>r(O)&&(!r(x)||!r(O).isChildError))&&Z(S)});var A=V(k,2),$=Z=>{var ne=aC();Oe("click",ne,ze),R(Z,ne)},oe=Z=>{var ne=iC();Oe("click",ne,Ie),R(Z,ne)};ie(A,Z=>{r(x)?Z($):Z(oe,!1)});var Se=V(ge,2),Ee=Z=>{var ne=dC(),lt=Xe(ne),tt=P(lt),Fe=En=>{var qt,pn,Bt=sC(),Yt=P(Bt),dn=Ze(()=>(r(w),m(Tr),m(u()),D(()=>r(w)&&Tr(u()))));Ha(Yt,{insert:!0,get selected(){return r(dn)},onContextMenu:Ue}),Te((pt,on)=>{qt=Tt(Bt,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,qt,pt),xn(Bt,"title",pd),pn=To(Bt,"",pn,on)},[()=>({"jse-hovered":r(g)===Ci,"jse-selected":r(w)&&Tr(u())}),()=>({"--level":(r(j),D(()=>r(j).length+1))})]),R(En,Bt)};ie(tt,En=>{m(d()),r(g),m(Ci),r(w),m(Tr),m(u()),D(()=>!d().readOnly&&(r(g)===Ci||r(w)&&Tr(u())))&&En(Fe)}),dr(V(tt,2),1,()=>r(T)||Es,Cr,(En,qt,pn)=>{var Bt=cC(),Yt=Xe(Bt);dr(Yt,1,()=>(m(i()),r(qt),r(b),D(()=>function(on,Et,Ge){var Ft=Et.start,Pt=Math.min(Et.end,on.length),_n=hg(Ft,Pt);return Ge&&Ge.offset!==0?zp(_n,Ge.selectionStartIndex,Ge.selectionItemsCount,Ge.offset).map((Ln,Dn)=>({index:Ln,gutterIndex:Dn})):_n.map(Ln=>({index:Ln,gutterIndex:Ln}))}(i(),r(qt),r(b)))),on=>on.index,(on,Et)=>{var Ge=Ze(()=>(m(qr),m(l()),r(Et),D(()=>qr(l())?l().items[r(Et).index]:void 0))),Ft=Ze(()=>(m(wc),m(d()),m(u()),r(j),r(Et),D(()=>wc(d().getJson(),u(),r(j).concat(String(r(Et).index)))))),Pt=Ut(),_n=Xe(Pt),Ln=Ze(()=>(m(cc),m(a()),r(Et),D(()=>cc(a(),r(Et).index)))),Dn=Ze(()=>(m(qr),m(s()),r(Et),D(()=>qr(s())?s().items[r(Et).index]:void 0))),ir=Ze(()=>(m(qr),m(c()),r(Et),D(()=>qr(c())?c().items[r(Et).index]:void 0)));gv(_n,{get value(){return m(i()),r(Et),D(()=>i()[r(Et).index])},get pointer(){return r(Ln)},get state(){return r(Dn)},get validationErrors(){return r(Ge)},get searchResults(){return r(ir)},get selection(){return r(Ft)},get context(){return d()},onDragSelectionStart:re,$$slots:{identifier:(Wn,tr)=>{var vr=lC(),Gn=P(vr),Sr=P(Gn);Te(()=>vt(Sr,(r(Et),D(()=>r(Et).gutterIndex)))),R(Wn,vr)}}}),R(on,Pt)});var dn=V(Yt,2),pt=on=>{var Et=Ze(()=>r(T)||Es);Kk(on,{get visibleSections(){return r(Et)},sectionIndex:pn,get total(){return m(i()),D(()=>i().length)},get path(){return r(j)},get onExpandSection(){return m(d()),D(()=>d().onExpandSection)},get selection(){return u()},get context(){return d()}})};ie(dn,on=>{r(qt),m(i()),D(()=>r(qt).end<i().length)&&on(pt)}),R(En,Bt)});var He=V(lt,2),Nt=V(P(He),2),kn=En=>{var qt=uC();Oe("click",qt,Ie),R(En,qt)};ie(Nt,En=>{r(o)||En(kn)}),R(Z,ne)};ie(Se,Z=>{r(x)&&Z(Ee)}),Oe("click",pe,z),R(fe,H)},xe=fe=>{var H=Ut(),ge=Xe(H),B=G=>{var qe=kC(),te=Xe(qe),L=P(te),st=P(L),it=P(st),Ce=He=>{rn(He,{get data(){return Ra}})},wt=He=>{rn(He,{get data(){return Cl}})};ie(it,He=>{r(x)?He(Ce):He(wt,!1)});var Le=V(st,2);cr(Le,t,"identifier",{},null);var Ve=V(Le,2),ht=He=>{R(He,fC())};ie(Ve,He=>{r(o)||He(ht)});var De=V(Ve,2),Mt=P(De),k=P(Mt),S=He=>{R(He,pC())},A=He=>{var Nt=hC();Dc(V(Xe(Nt),2),{onclick:U,children:(kn,En)=>{var qt=Fr();Te((pn,Bt)=>vt(qt,"".concat(pn??"",`
                `).concat(Bt??"")),[()=>(m(i()),D(()=>Object.keys(i()).length)),()=>(m(i()),D(()=>Object.keys(i()).length===1?"prop":"props"))]),R(kn,qt)},$$slots:{default:!0}}),R(He,Nt)};ie(k,He=>{r(x)?He(S):He(A,!1)});var $=V(De,2),oe=He=>{var Nt=gC();Ha(P(Nt),{get root(){return r(o)},selected:!0,get onContextMenu(){return m(d()),D(()=>d().onContextMenu)}}),R(He,Nt)};ie($,He=>{m(d()),r(w),m(u()),m(vn),m(Pn),m(Ir),m(Lt),m(ot),r(j),D(()=>!d().readOnly&&r(w)&&u()&&(vn(u())||Pn(u()))&&!Ir(u())&&Lt(ot(u()),r(j)))&&He(oe)});var Se=V(L,2),Ee=He=>{As(He,{get validationError(){return r(O)},onExpand:U})};ie(Se,He=>{r(O),r(x),D(()=>r(O)&&(!r(x)||!r(O).isChildError))&&He(Ee)});var Z=V(Se,2),ne=He=>{var Nt=mC();Oe("click",Nt,ze),R(He,Nt)},lt=He=>{var Nt=Ut(),kn=Xe(Nt),En=qt=>{var pn=bC();Oe("click",pn,Ie),R(qt,pn)};ie(kn,qt=>{r(o)||qt(En)},!0),R(He,Nt)};ie(Z,He=>{r(x)?He(ne):He(lt,!1)});var tt=V(te,2),Fe=He=>{var Nt=wC(),kn=Xe(Nt),En=P(kn),qt=dn=>{var pt,on,Et=yC(),Ge=P(Et),Ft=Ze(()=>(r(w),m(Tr),m(u()),D(()=>r(w)&&Tr(u()))));Ha(Ge,{insert:!0,get selected(){return r(Ft)},onContextMenu:Ue}),Te((Pt,_n)=>{pt=Tt(Et,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,pt,Pt),xn(Et,"title",pd),on=To(Et,"",on,_n)},[()=>({"jse-hovered":r(g)===Ci,"jse-selected":r(w)&&Tr(u())}),()=>({"--level":(r(j),D(()=>r(j).length+1))})]),R(dn,Et)};ie(En,dn=>{m(d()),r(g),m(Ci),r(w),m(Tr),m(u()),D(()=>!d().readOnly&&(r(g)===Ci||r(w)&&Tr(u())))&&dn(qt)}),dr(V(En,2),1,()=>(m(i()),r(b),D(()=>function(dn,pt){var on=Object.keys(dn);return pt&&pt.offset!==0?zp(on,pt.selectionStartIndex,pt.selectionItemsCount,pt.offset):on}(i(),r(b)))),Cr,(dn,pt)=>{var on=Ze(()=>(m(cc),m(a()),r(pt),D(()=>cc(a(),r(pt))))),Et=Ze(()=>(m(uo),m(c()),r(pt),D(()=>uo(c())?c().properties[r(pt)]:void 0))),Ge=Ze(()=>(m(uo),m(l()),r(pt),D(()=>uo(l())?l().properties[r(pt)]:void 0))),Ft=Ze(()=>(r(j),r(pt),D(()=>r(j).concat(r(pt))))),Pt=Ze(()=>(m(wc),m(d()),m(u()),m(r(Ft)),D(()=>wc(d().getJson(),u(),r(Ft))))),_n=Ut(),Ln=Xe(_n),Dn=Ze(()=>(m(uo),m(s()),r(pt),D(()=>uo(s())?s().properties[r(pt)]:void 0)));gv(Ln,{get value(){return m(i()),r(pt),D(()=>i()[r(pt)])},get pointer(){return r(on)},get state(){return r(Dn)},get validationErrors(){return r(Ge)},get searchResults(){return r(Et)},get selection(){return r(Pt)},get context(){return d()},onDragSelectionStart:re,$$slots:{identifier:(ir,Wn)=>{var tr,vr=jC(),Gn=P(vr),Sr=Ze(()=>(m(ah),m(r(Et)),D(()=>ah(r(Et)))));(function(fr,yr){ut(yr,!1);var Xn=N(void 0,!0),ye=N(void 0,!0),$t=h(yr,"pointer",9),jn=h(yr,"key",9),$n=h(yr,"selection",9),sr=h(yr,"searchResultItems",9),zr=h(yr,"onUpdateKey",9),Ht=h(yr,"context",9),jr=N(void 0,!0);function Wr(W){r(ye)||Ht().readOnly||(W.preventDefault(),Ht().onSelect(bf(r(jr))))}function Zn(W,ce){var _e=zr()(jn(),Ht().normalization.unescapeValue(W)),q=nn(r(jr)).concat(_e);Ht().onSelect(ce===si.nextInside?Kt(q):Ia(q)),ce!==si.self&&Ht().focus()}function Ur(){Ht().onSelect(Ia(r(jr))),Ht().focus()}X(()=>m($t()),()=>{f(jr,fo($t()))}),X(()=>(m($n()),r(jr)),()=>{f(Xn,$r($n())&&Lt($n().path,r(jr)))}),X(()=>(r(Xn),m($n())),()=>{f(ye,r(Xn)&&Ir($n()))}),wn(),zt(!0);var Mn=Gk(),Xt=Xe(Mn),Rt=W=>{var ce=Ze(()=>(m(Ht()),m(jn()),D(()=>Ht().normalization.escapeValue(jn())))),_e=Ze(()=>(m(Ir),m($n()),D(()=>Ir($n())?$n().initialValue:void 0)));r0(W,{get value(){return r(ce)},get initialValue(){return r(_e)},label:"Edit key",shortText:!0,onChange:Zn,onCancel:Ur,get onFind(){return m(Ht()),D(()=>Ht().onFind)}})},zn=W=>{var ce,_e=Qk(),q=P(_e),Y=Pe=>{var nt=Ze(()=>(m(Ht()),m(jn()),D(()=>Ht().normalization.escapeValue(jn()))));u0(Pe,{get text(){return r(nt)},get searchResultItems(){return sr()}})},be=Pe=>{var nt=Fr();Te(rt=>vt(nt,rt),[()=>(m(Ds),m(Ht()),m(jn()),D(()=>Ds(Ht().normalization.escapeValue(jn()))))]),R(Pe,nt)};ie(q,Pe=>{sr()?Pe(Y):Pe(be,!1)}),Te(Pe=>ce=Tt(_e,1,"jse-key svelte-1n4cez4",null,ce,Pe),[()=>({"jse-empty":jn()===""})]),Oe("dblclick",_e,Wr),R(W,_e)};ie(Xt,W=>{m(Ht()),r(ye),D(()=>!Ht().readOnly&&r(ye))?W(Rt):W(zn,!1)});var pr=V(Xt,2),nr=W=>{Ha(W,{selected:!0,get onContextMenu(){return m(Ht()),D(()=>Ht().onContextMenu)}})};ie(pr,W=>{m(Ht()),r(Xn),r(ye),D(()=>!Ht().readOnly&&r(Xn)&&!r(ye))&&W(nr)}),R(fr,Mn),dt()})(Gn,{get pointer(){return r(on)},get key(){return r(pt)},get selection(){return r(Pt)},get searchResultItems(){return r(Sr)},get context(){return d()},onUpdateKey:ae}),Te(fr=>tr=Tt(vr,1,"jse-key-outer svelte-1qi6rc1",null,tr,fr),[()=>({"jse-selected-key":$r(r(Pt))&&Lt(r(Pt).path,r(Ft))})]),R(ir,vr)}}}),R(dn,_n)});var pn=V(kn,2),Bt=V(P(pn),2),Yt=dn=>{var pt=xC();Oe("click",pt,Ie),R(dn,pt)};ie(Bt,dn=>{r(o)||dn(Yt)}),R(He,Nt)};ie(tt,He=>{r(x)&&He(Fe)}),Oe("click",st,z),R(G,qe)},pe=G=>{var qe=EC(),te=P(qe),L=P(te);cr(L,t,"identifier",{},null);var st=V(L,2),it=$=>{R($,CC())};ie(st,$=>{r(o)||$(it)});var Ce=V(st,2),wt=P(Ce),Le=Ze(()=>r(w)?u():void 0),Ve=Ze(()=>(m(ih),m(c()),D(()=>ih(c()))));O0(wt,{get path(){return r(j)},get value(){return i()},get enforceString(){return r(C)},get selection(){return r(Le)},get searchResultItems(){return r(Ve)},get context(){return d()}});var ht=V(Ce,2),De=$=>{var oe=SC();Ha(P(oe),{get root(){return r(o)},selected:!0,get onContextMenu(){return m(d()),D(()=>d().onContextMenu)}}),R($,oe)};ie(ht,$=>{m(d()),r(w),m(u()),m(vn),m(Pn),m(Ir),m(Lt),m(ot),r(j),D(()=>!d().readOnly&&r(w)&&u()&&(vn(u())||Pn(u()))&&!Ir(u())&&Lt(ot(u()),r(j)))&&$(De)});var Mt=V(te,2),k=$=>{As($,{get validationError(){return r(O)},onExpand:U})};ie(Mt,$=>{r(O)&&$(k)});var S=V(Mt,2),A=$=>{var oe=OC();Oe("click",oe,Ie),R($,oe)};ie(S,$=>{r(o)||$(A)}),R(G,qe)};ie(ge,G=>{m(yn),m(i()),D(()=>yn(i()))?G(B):G(pe,!1)},!0),R(fe,H)};ie(ke,fe=>{m(i()),D(()=>Array.isArray(i()))?fe(de):fe(xe,!1)});var mt=V(ke,2),Gt=fe=>{var H,ge=_C(),B=P(ge),pe=Ze(()=>(r(w),m(ao),m(u()),D(()=>r(w)&&ao(u()))));Ha(B,{insert:!0,get selected(){return r(pe)},onContextMenu:ue}),Te(G=>{H=Tt(ge,1,"jse-insert-area jse-after svelte-1qi6rc1",null,H,G),xn(ge,"title",pd)},[()=>({"jse-hovered":r(g)===jc,"jse-selected":r(w)&&ao(u())})]),R(fe,ge)};ie(mt,fe=>{m(d()),r(g),m(jc),r(w),m(ao),m(u()),D(()=>!d().readOnly&&(r(g)===jc||r(w)&&ao(u())))&&fe(Gt)}),Te((fe,H,ge)=>{me=Tt(et,1,fe,"svelte-1qi6rc1",me,H),xn(et,"data-path",r(n)),xn(et,"aria-selected",r(w)),Me=To(et,"",Me,ge)},[()=>vi((m(Qo),r(x),m(d()),r(j),m(i()),D(()=>Qo("jse-json-node",{"jse-expanded":r(x)},d().onClassName(r(j),i()))))),()=>({"jse-root":r(o),"jse-selected":r(w)&&Pn(u()),"jse-selected-value":r(w)&&vn(u()),"jse-readonly":d().readOnly,"jse-hovered":r(g)===$p}),()=>({"--level":(r(j),D(()=>r(j).length))})]),Oe("mousedown",et,function(fe){if((fe.buttons===1||fe.buttons===2)&&!((H=fe.target).nodeName==="DIV"&&H.contentEditable==="true"||fe.buttons===1&&Wm(fe.target,"BUTTON"))){var H;fe.stopPropagation(),fe.preventDefault(),d().focus(),document.addEventListener("mousemove",M,!0),document.addEventListener("mouseup",K);var ge=dd(fe.target),B=d().getJson(),pe=d().getDocumentState();if(!u()||ge===Nn.after||ge===Nn.inside||u().type!==ge&&u().type!==Nn.multi||!Pl(B,u(),r(j)))if(Kn(Kn().selecting=!0),Kn(Kn().selectionAnchor=r(j)),Kn(Kn().selectionAnchorType=ge),Kn(Kn().selectionFocus=r(j)),fe.shiftKey){var G=d().getSelection();G&&d().onSelect(eo($i(G),r(j)))}else if(ge===Nn.multi)if(r(o)&&fe.target.hasAttribute("data-path")){var qe=Vt(Xm(i(),pe));d().onSelect(lv(qe))}else d().onSelect(eo(r(j),r(j)));else B!==void 0&&d().onSelect(Xp(ge,r(j)));else fe.button===0&&v()(fe)}}),Oe("mousemove",et,function(fe){if(Kn().selecting){fe.preventDefault(),fe.stopPropagation(),Kn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var H=dd(fe.target);Lt(r(j),Kn().selectionFocus)&&H===Kn().selectionAnchorType||(Kn(Kn().selectionFocus=r(j)),Kn(Kn().selectionAnchorType=H),d().onSelect(eo(Kn().selectionAnchor||Kn().selectionFocus,Kn().selectionFocus)))}}),Oe("mouseover",et,function(fe){Kn().selecting||Kn().dragging||(fe.stopPropagation(),ni(fe.target,"data-type","selectable-value")?f(g,$p):ni(fe.target,"data-type","selectable-key")?f(g,void 0):ni(fe.target,"data-type","insert-selection-area-inside")?f(g,Ci):ni(fe.target,"data-type","insert-selection-area-after")&&f(g,jc),clearTimeout(y))}),Oe("mouseout",et,function(fe){fe.stopPropagation(),y=window.setTimeout(()=>f(g,void 0))}),R(e,et),dt()}var E0={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},_0={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},bh={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},AC={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};function TC(e,t){e.stopPropagation(),t.onCreateObject()}function zC(e,t){e.stopPropagation(),t.onCreateArray()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var RC=(e,t)=>t.onClick(),PC=ee('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),NC=ee('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function mv(e,t){var n=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Qy(n,o)}function M0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=Ke(e,t);if(ur(a)){if(n===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=function(v,p){var g={boolean:0,number:1,string:2,undefined:4},y=3;return function(b,j){var x=Ke(b,v),C=Ke(j,v);if(typeof x!=typeof C){var T,O,w=(T=g[typeof x])!==null&&T!==void 0?T:y,z=(O=g[typeof C])!==null&&O!==void 0?O:y;return w>z?p:w<z?-p:0}return typeof x=="number"||typeof x=="boolean"?x>C?p:x<C?-p:0:ar(x)?0:p*mv(x,C)}}(l,c),d=Ke(i,s);return[{op:"replace",path:ft(s),value:d.slice(0).sort(u)}]}(e,t,n,o)}if(yn(a))return function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Ke(i,s),u=Object.keys(c).slice();u.sort((v,p)=>l*mv(v,p));var d={};return u.forEach(v=>d[v]=c[v]),[{op:"replace",path:ft(s),value:d}]}(e,t,o);throw new Error("Cannot sort: no array or object")}Xl(["click"]);Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var $C=ee('<button type="button"> </button>'),IC=ee('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),qC=ee('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function DC(e,t){ut(t,!1);var n=h(t,"items",9),o=h(t,"selectedItem",9),a=h(t,"onSelect",9);zt(!0);var i=qC(),s=P(i);dr(s,1,()=>(m(eu),m(n()),D(()=>eu(n(),100))),u=>u,(u,d)=>{var v,p=$C(),g=P(p);Te((y,b,j)=>{v=Tt(p,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,v,y),xn(p,"title",b),vt(g,j)},[()=>({"jse-selected":r(d)===o()}),()=>(r(d),D(()=>r(d).toString())),()=>(m(ka),r(d),D(()=>ka(r(d).toString(),30)))]),Oe("click",p,ja(()=>a()(r(d)))),R(u,p)});var l=V(s,2),c=u=>{var d=IC();xn(d,"title","Limited to 100 items"),R(u,d)};ie(l,u=>{m(n()),D(()=>n().length>100)&&u(c)}),R(e,i),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var UC=ee('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),LC=ee('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function yh(e,t){ut(t,!1);var n,o=N(void 0,!0),a=N(void 0,!0),{openAbsolutePopup:i,closeAbsolutePopup:s}=gi("absolute-popup"),l=h(t,"path",9),c=h(t,"index",9),u=h(t,"onSelect",9),d=h(t,"getItems",9),v=N(void 0,!0),p=N(!1,!0);function g(T){s(n),u()(r(o).concat(T))}X(()=>(m(l()),m(c())),()=>{f(o,l().slice(0,c()))}),X(()=>(m(l()),m(c())),()=>{f(a,l()[c()])}),wn(),zt(!0);var y,b=LC(),j=P(b);rn(P(j),{get data(){return dg}});var x=V(j,2),C=T=>{var O=UC(),w=P(O);Te(()=>vt(w,r(a))),Oe("click",O,()=>g(r(a))),R(T,O)};ie(x,T=>{r(a)!==void 0&&T(C)}),Qn(b,T=>f(v,T),()=>r(v)),Te(T=>y=Tt(j,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,y,T),[()=>({"jse-open":r(p)})]),Oe("click",j,function(){if(r(v)){f(p,!0);var T={items:d()(r(o)),selectedItem:r(a),onSelect:g};n=i(DC,T,{anchor:r(v),closeOnOuterClick:!0,onClose:()=>{f(p,!1)}})}}),R(e,b),dt()}function kf(e){var t,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(n=document).queryCommandSupported)!==null&&t!==void 0&&t.call(n,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var BC=ee('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),FC=ee('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),WC=ee('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function VC(e,t){ut(t,!1);var n=N(),o=gi("absolute-popup"),a=h(t,"path",8),i=h(t,"pathParser",8),s=h(t,"onChange",8),l=h(t,"onClose",8),c=h(t,"onError",8),u=h(t,"pathExists",8),d=N(),v=N(),p=N(!1),g=void 0,y=N(!1);function b(){r(d).focus()}function j(K){try{var J=i().parse(K);return function(I){if(!u()(I))throw new Error("Path does not exist in current document")}(J),{path:J,error:void 0}}catch(I){return{path:void 0,error:I}}}Zr(()=>{b()}),Ro(()=>{clearTimeout(g)}),X(()=>(m(i()),m(a())),()=>{f(v,i().stringify(a()))}),X(()=>(r(p),r(v)),()=>{f(n,r(p)?j(r(v)).error:void 0)}),wn(),zt();var x,C=WC(),T=P(C);Qn(T,K=>f(d,K),()=>r(d));var O=V(T,2),w=K=>{var J=BC();rn(P(J),{get data(){return qi}}),no(J,(I,re)=>Bs?.(I,re),()=>Ae({text:String(r(n)||"")},o)),R(K,J)};ie(O,K=>{r(n)&&K(w)});var z=V(O,2),U=K=>{R(K,FC())};ie(z,K=>{r(y)&&K(U)});var ae,M=V(z,2);rn(P(M),{get data(){return Xa}}),Te((K,J)=>{x=Tt(C,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,x,K),Bi(T,r(v)),ae=Tt(M,1,"jse-navigation-bar-copy svelte-uyexy4",null,ae,J)},[()=>({error:r(n)}),()=>({copied:r(y)})]),Oe("keydown",T,ja(function(K){var J=$a(K);if(J==="Escape"&&(K.preventDefault(),l()()),J==="Enter"){K.preventDefault(),f(p,!0);var I=j(r(v));I.path!==void 0?s()(I.path):c()(I.error)}})),Oe("input",T,function(K){f(v,K.currentTarget.value)}),Oe("click",M,function(){kf(r(v)),f(y,!0),g=window.setTimeout(()=>f(y,!1),1e3),b()}),R(e,C),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var HC=ee("<!> <!>",1),JC=ee('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function KC(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=Dr("jsoneditor:NavigationBar"),i=h(t,"json",9),s=h(t,"selection",9),l=h(t,"onSelect",9),c=h(t,"onError",9),u=h(t,"pathParser",9),d=N(void 0,!0),v=N(!1,!0);function p(J){a("get items for path",J);var I=Ke(i(),J);if(Array.isArray(I))return hg(0,I.length).map(String);if(yn(I)){var re=Object.keys(I).slice(0);return re.sort(mv),re}return[]}function g(J){return Ao(i(),J)}function y(J){a("select path",JSON.stringify(J)),l()(eo(J,J))}function b(){f(v,!1)}function j(J){b(),y(J)}X(()=>(m(s()),ot),()=>{f(n,s()?ot(s()):[])}),X(()=>(m(i()),r(n)),()=>{f(o,ar(Ke(i(),r(n))))}),X(()=>r(n),()=>{r(n),setTimeout(()=>{if(r(d)&&r(d).scrollTo){var J=r(d).scrollWidth-r(d).clientWidth;J>0&&(a("scrollTo ",J),r(d).scrollTo({left:J,behavior:"smooth"}))}})}),wn(),zt(!0);var x=JC(),C=P(x),T=J=>{var I=HC(),re=Xe(I);dr(re,1,()=>r(n),Cr,(ze,Ie,Ue)=>{yh(ze,{getItems:p,get path(){return r(n)},index:Ue,onSelect:y})});var we=V(re,2),se=ze=>{yh(ze,{getItems:p,get path(){return r(n)},get index(){return r(n),D(()=>r(n).length)},onSelect:y})};ie(we,ze=>{r(o)&&ze(se)}),R(J,I)},O=J=>{VC(J,{get path(){return r(n)},onClose:b,onChange:j,get onError(){return c()},pathExists:g,get pathParser(){return u()}})};ie(C,J=>{r(v)?J(O,!1):J(T)});var w,z=V(C,2),U=P(z),ae=P(U),M=V(U,2),K=Ze(()=>r(v)?Bb:Fb);rn(M,{get data(){return r(K)}}),Qn(x,J=>f(d,J),()=>r(d)),Te((J,I)=>{w=Tt(z,1,"jse-navigation-bar-edit svelte-hjhal6",null,w,J),xn(z,"title",r(v)?"Cancel editing the selected path":"Edit the selected path"),vt(ae,I)},[()=>({flex:!r(v),editing:r(v)}),()=>(m(ar),m(i()),r(v),D(()=>ar(i())||r(v)?" ":"Navigation bar"))]),Oe("click",z,function(){f(v,!r(v))}),R(e,x),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var YC=ee('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),QC=ee('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),GC=ee('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function A0(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=N(void 0,!0),i=Dr("jsoneditor:SearchBox"),s=h(t,"json",9),l=h(t,"documentState",9),c=h(t,"parser",9),u=h(t,"showSearch",9),d=h(t,"showReplace",13),v=h(t,"readOnly",9),p=h(t,"columns",9),g=h(t,"onSearch",9),y=h(t,"onFocus",9),b=h(t,"onPatch",9),j=h(t,"onClose",9),x=N("",!0),C="",T=N("",!0),O=N(!1,!0),w=N(void 0,!0),z=Kc(function(G){return xe.apply(this,arguments)},300),U=Kc(function(G){return mt.apply(this,arguments)},300);function ae(){d(!d()&&!v())}function M(G){G.stopPropagation();var qe=$a(G);qe==="Enter"&&(G.preventDefault(),r(x)!==C?z.flush():Ue()),qe==="Shift+Enter"&&(G.preventDefault(),me()),qe==="Ctrl+Enter"&&(G.preventDefault(),d()?re():Ue()),qe==="Ctrl+H"&&(G.preventDefault(),ae()),qe==="Escape"&&(G.preventDefault(),H())}function K(G){$a(G)==="Enter"&&(G.preventDefault(),G.stopPropagation(),re())}function J(){return I.apply(this,arguments)}function I(){return(I=gt(function*(){Fn(),yield z.flush()})).apply(this,arguments)}function re(){return we.apply(this,arguments)}function we(){return(we=gt(function*(){var G;if(!v()){var qe=(G=r(w))===null||G===void 0?void 0:G.activeItem;if(i("handleReplace",{replaceText:r(T),activeItem:qe}),r(w)&&qe&&s()!==void 0){f(w,Ae(Ae({},eh(r(w))),{},{activeIndex:r(o)}));var{operations:te,newSelection:L}=dw(s(),l(),r(T),qe,c());b()(te,(st,it)=>({state:it,selection:L})),Fn(),yield U.flush(),yield et()}}})).apply(this,arguments)}function se(){return ze.apply(this,arguments)}function ze(){return(ze=gt(function*(){if(!v()){i("handleReplaceAll",{text:r(x),replaceText:r(T)});var{operations:G,newSelection:qe}=function(te,L,st,it,Ce){for(var wt=th(st,te,{maxResults:1/0}),Le=[],Ve=0;Ve<wt.length;Ve++){var ht=wt[Ve-1],De=wt[Ve];Ve!==0&&De.field===ht.field&&Lt(De.path,ht.path)?Vt(Le).items.push(De):Le.push({path:De.path,field:De.field,items:[De]})}Le.sort((S,A)=>S.field!==A.field?S.field===Ho.key?1:-1:A.path.length-S.path.length);var Mt,k=[];return Le.forEach(S=>{var{field:A,path:$,items:oe}=S;if(A===Ho.key){var Se=nn($),Ee=Ke(te,Se),Z=Vt($),ne=oc(Se,Object.keys(Ee),Z,rh(Z,it,oe));k=k.concat(ne),Mt=Ls(te,ne)}else{if(A!==Ho.value)throw new Error("Cannot replace: unknown type of search result field ".concat(A));var lt=Ke(te,$);if(lt===void 0)throw new Error("Cannot replace: path not found ".concat(ft($)));var tt=typeof lt=="string"?lt:String(lt),Fe=oa(te,L,$),He=rh(tt,it,oe),Nt=[{op:"replace",path:ft($),value:Fe?He:Qs(He,Ce)}];k=k.concat(Nt),Mt=Ls(te,Nt)}}),{operations:k,newSelection:Mt}}(s(),l(),r(x),r(T),c());b()(G,(te,L)=>({state:L,selection:qe})),yield et()}})).apply(this,arguments)}function Ie(G){G.select()}function Ue(){return ue.apply(this,arguments)}function ue(){return(ue=gt(function*(){f(w,r(w)?eh(r(w)):void 0),yield et()})).apply(this,arguments)}function me(){return Me.apply(this,arguments)}function Me(){return Me=gt(function*(){f(w,r(w)?function(G){var qe=G.activeIndex>0?G.activeIndex-1:G.items.length-1,te=G.items[qe],L=G.items.map((st,it)=>Ae(Ae({},st),{},{active:it===qe}));return Ae(Ae({},G),{},{items:L,activeItem:te,activeIndex:qe})}(r(w)):void 0),yield et()}),Me.apply(this,arguments)}function et(){return ke.apply(this,arguments)}function ke(){return(ke=gt(function*(){var G;i("handleFocus",r(w));var qe=(G=r(w))===null||G===void 0?void 0:G.activeItem;qe&&s()!==void 0&&(yield y()(qe.path,qe.resultIndex))})).apply(this,arguments)}function de(){return de=gt(function*(G){yield Gt(G,r(x),s())}),de.apply(this,arguments)}function xe(){return xe=gt(function*(G){yield Gt(u(),G,s()),yield et()}),xe.apply(this,arguments)}function mt(){return mt=gt(function*(G){yield Gt(u(),r(x),G)}),mt.apply(this,arguments)}function Gt(G,qe,te){return fe.apply(this,arguments)}function fe(){return fe=gt(function*(G,qe,te){return G?(i("applySearch",{showSearch:G,text:qe}),qe===""?(i("clearing search result"),r(w)!==void 0&&f(w,void 0),Promise.resolve()):(C=qe,f(O,!0),new Promise(L=>{setTimeout(()=>{var st=th(qe,te,{maxResults:vd,columns:p()});f(w,function(it,Ce){var wt=Ce!=null&&Ce.activeItem?oh(Ce.activeItem):void 0,Le=it.findIndex(De=>Lt(wt,oh(De))),Ve=Le!==-1?Le:Ce?.activeIndex!==void 0&&Ce?.activeIndex<it.length?Ce?.activeIndex:it.length>0?0:-1,ht=it.map((De,Mt)=>Ae(Ae({resultIndex:Mt},De),{},{active:Mt===Ve}));return{items:ht,activeItem:ht[Ve],activeIndex:Ve}}(st,r(w))),f(O,!1),L()})}))):(r(w)&&f(w,void 0),Promise.resolve())}),fe.apply(this,arguments)}function H(){i("handleClose"),z.cancel(),U.cancel(),Gt(!1,r(x),s()),j()()}X(()=>r(w),()=>{var G;f(n,((G=r(w))===null||G===void 0||(G=G.items)===null||G===void 0?void 0:G.length)||0)}),X(()=>r(w),()=>{var G;f(o,((G=r(w))===null||G===void 0?void 0:G.activeIndex)||0)}),X(()=>(r(n),vd),()=>{f(a,r(n)>=vd?"".concat(999,"+"):String(r(n)))}),X(()=>(m(g()),r(w)),()=>{g()(r(w))}),X(()=>m(u()),()=>{(function(G){de.apply(this,arguments)})(u())}),X(()=>r(x),()=>{z(r(x))}),X(()=>m(s()),()=>{U(s())}),wn(),zt(!0);var ge=Ut(),B=Xe(ge),pe=G=>{var qe=GC(),te=P(qe),L=P(te),st=Z=>{var ne=YC(),lt=P(ne),tt=Ze(()=>d()?Ra:Cl);rn(lt,{get data(){return r(tt)}}),Oe("click",ne,ae),R(Z,ne)};ie(L,Z=>{v()||Z(st)});var it=P(V(L,2)),Ce=P(it),wt=P(Ce),Le=Z=>{rn(Z,{get data(){return Yb},spin:!0})},Ve=Z=>{rn(Z,{get data(){return wu}})};ie(wt,Z=>{r(O)?Z(Le):Z(Ve,!1)});var ht=V(Ce,2),De=P(ht);Kr(()=>Zc(De,()=>r(x),Z=>f(x,Z))),no(De,Z=>Ie?.(Z)),Kr(()=>Oe("paste",De,J));var Mt,k=V(ht,2),S=P(k),A=V(k,2);rn(P(A),{get data(){return Hb}});var $=V(A,2);rn(P($),{get data(){return Jb}});var oe=V($,2);rn(P(oe),{get data(){return xu}});var Se=V(it,2),Ee=Z=>{var ne=QC(),lt=P(ne),tt=V(lt,2),Fe=V(tt,2);Zc(lt,()=>r(T),He=>f(T,He)),Oe("keydown",lt,K),Oe("click",tt,re),Oe("click",Fe,se),R(Z,ne)};ie(Se,Z=>{d()&&!v()&&Z(Ee)}),Te(Z=>{var ne;Mt=Tt(k,1,"jse-search-count svelte-1x1x8q0",null,Mt,Z),vt(S,"".concat(r(o)!==-1&&r(o)<r(n)?"".concat(r(o)+1,"/"):"").concat((ne=r(a))!==null&&ne!==void 0?ne:""))},[()=>({"jse-visible":r(x)!==""})]),Oe("click",A,Ue),Oe("click",$,me),Oe("click",oe,H),Oe("keydown",te,M),R(G,qe)};ie(B,G=>{u()&&G(pe)}),R(e,ge),dt()}var ql=Symbol("path");function XC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(i,s,l){if(i.length<s)i.forEach(l);else for(var c=s>1?(i.length-1)/(s-1):i.length,u=0;u<s;u++){var d=Math.floor(u*c);l(i[d],d,i)}}(e,n,i=>{yn(i)?T0(i,o,t):o[ql]=!0});var a=[];return ql in o&&a.push([]),z0(o,[],a,t),a}function T0(e,t,n){for(var o in e){var a=e[o],i=t[o]||(t[o]={});yn(a)&&n?T0(a,i,n):i[ql]===void 0&&(i[ql]=!0)}}function z0(e,t,n,o){for(var a in e){var i=t.concat(a),s=e[a];s&&s[ql]===!0&&n.push(i),br(s)&&o&&z0(s,i,n,o)}}function ZC(e,t,n,o,a,i){for(var s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=ur(n)?n.length:0,c=function(C,T){var O=Object.values(C);if(fn(O))return T;var w=(z,U)=>z+U;return O.reduce(w)/O.length}(o,a),u=e-s,d=t+2*s,v=C=>o[C]||a,p=0,g=i;g<u&&p<l;)g+=v(p),p++;p>0&&(g-=v(--p));for(var y=p,b=0;b<d&&y<l;)b+=v(y),y++;for(var j=0,x=y;x<l;x++)j+=v(x);return{startIndex:p,endIndex:y,startHeight:g,endHeight:j,averageItemHeight:c,visibleHeight:b,visibleItems:ur(n)?n.slice(p,y):[]}}function jh(e,t,n,o){for(var{rowIndex:a}=Eo(e,t),i=0,s=0;s<a;s++)i+=n[s]||o;return i}function Eo(e,t){var[n,...o]=e,a=parseInt(n,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(i=>la(o,i))}}function Si(e,t){var{rowIndex:n,columnIndex:o}=e;return[String(n),...t[o]]}function eS(e,t){var[n,o]=my(e,s=>tf(s.path[0])),a=ty(n,tS),i=X1(a,s=>{var l={row:[],columns:{}};return s.forEach(c=>{var u=function(d,v){var p=Eo(d.path,v);return p.columnIndex!==-1?p.columnIndex:-1}(c,t);u!==-1?(l.columns[u]===void 0&&(l.columns[u]=[]),l.columns[u].push(c)):l.row.push(c)}),l});return{root:o,rows:i}}function cs(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(n=>Br(n.path)+" "+n.message).join(", "),severity:Vo.warning}}function tS(e){return parseInt(e.path[0],10)}function nS(e,t,n){var o=t.some(a=>function(i,s,l){if(!i)return!1;if(s.op==="replace"){var c=fo(s.path),{rowIndex:u,columnIndex:d}=Eo(c,l),v=l.findIndex(p=>Lt(p,i.path));if(u!==-1&&d!==-1&&d!==v)return!1}return!0}(e,a,n));return o?void 0:e}var to=Dr("jsoneditor:actions");function R0(e){return bv.apply(this,arguments)}function bv(){return bv=gt(function*(e){var{json:t,selection:n,indentation:o,readOnly:a,parser:i,onPatch:s}=e;if(!a&&t!==void 0&&n&&ys(n)){var l=t0(t,n,o,i);if(l!==void 0){to("cut",{selection:n,clipboard:l,indentation:o}),yield kf(l);var{operations:c,newSelection:u}=s0(t,n);s(c,(d,v)=>({state:v,selection:u}))}}}),bv.apply(this,arguments)}function P0(e){return yv.apply(this,arguments)}function yv(){return yv=gt(function*(e){var{json:t,selection:n,indentation:o,parser:a}=e,i=t0(t,n,o,a);i!==void 0&&(to("copy",{clipboard:i,indentation:o}),yield kf(i))}),yv.apply(this,arguments)}function N0(e){var{clipboardText:t,json:n,selection:o,readOnly:a,parser:i,onPatch:s,onChangeText:l,onPasteMultilineText:c,openRepairModal:u}=e;if(!a)try{d(t)}catch{u(t,p=>{to("repaired pasted text: ",p),d(p)})}function d(v){if(n!==void 0){var p=o||Kt([]),g=i0(n,p,v,i),y=function(b,j,x){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:rw;if(b.length>C)return!1;var T=/\n/.test(b);if(!T)return!1;var O=j.some(z=>z.op==="replace"&&Array.isArray(z.value)),w=j.filter(z=>z.op==="add").length>1;if(!O&&!w)return!1;try{return ec(b,x.parse),!1}catch{return!0}}(t,g,i);to("paste",{pastedText:v,operations:g,ensureSelection:p,pasteMultilineText:y}),s(g,(b,j)=>{var x=j;return g.filter(C=>(mg(C)||Dv(C))&&ar(C.value)).forEach(C=>{var T=Fo(n,C.path);x=Wi(b,x,T)}),{state:x}}),y&&c(v)}else to("paste text",{pastedText:v}),l(t,(b,j)=>{if(b)return{state:Wi(b,j,[])}})}}function $0(e){var{json:t,text:n,selection:o,keepSelection:a,readOnly:i,onChange:s,onPatch:l}=e;if(!i&&o){var c=t!==void 0&&($r(o)||vn(o))?eo(o.path,o.path):o;if(fn(ot(o)))to("remove root",{selection:o}),s&&s({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:n||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:u,newSelection:d}=s0(t,c);to("remove",{operations:u,selection:o,newSelection:d}),l(u,(v,p)=>({state:p,selection:a?o:d}))}}}function hu(e){var{insertType:t,selectInside:n,initialValue:o,json:a,selection:i,readOnly:s,parser:l,onPatch:c,onReplaceJson:u}=e;if(!s){var d=function(b,j,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&b!==void 0){var C=j?Zm(j):[],T=Ke(b,C);if(Array.isArray(T)&&!fn(T)){var O=Ea(T);return ar(O)?ly(O,w=>Array.isArray(w)?[]:yn(w)?void 0:""):""}}return""}(a,i,t);if(a!==void 0){var v=l.stringify(d),p=i0(a,i,v,l);to("onInsert",{insertType:t,operations:p,newValue:d,data:v});var g=Vt(p.filter(b=>b.op==="add"||b.op==="replace"));c(p,(b,j,x)=>{if(g){var C=Fo(b,g.path);if(ar(d))return{state:Io(b,j,C,mf),selection:n?qa(C):x};if(d===""){var T=fn(C)?void 0:Ke(b,nn(C));return{state:Io(b,j,C,Ic),selection:yn(T)?bf(C,o):au(C,o)}}}}),to("after patch")}else{to("onInsert",{insertType:t,newValue:d});var y=[];u(d,(b,j)=>({state:Wi(b,j,y),selection:ar(d)?qa(y):au(y)}))}}}function I0(e){return jv.apply(this,arguments)}function jv(){return jv=gt(function*(e){var{char:t,selectInside:n,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c,onSelect:u}=e;i||($r(a)?u(Ae(Ae({},a),{},{edit:!0,initialValue:t})):t==="{"?hu({insertType:"object",selectInside:n,initialValue:void 0,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c}):t==="["?hu({insertType:"array",selectInside:n,initialValue:void 0,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c}):vn(a)&&o!==void 0?ar(Ke(o,a.path))||u(Ae(Ae({},a),{},{edit:!0,initialValue:t})):(to("onInsertValueWithCharacter",{char:t}),yield function(d){return xv.apply(this,arguments)}({char:t,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c})))}),jv.apply(this,arguments)}function xv(){return xv=gt(function*(e){var{char:t,json:n,selection:o,readOnly:a,parser:i,onPatch:s,onReplaceJson:l}=e;a||hu({insertType:"value",selectInside:!1,initialValue:t,json:n,selection:o,readOnly:a,parser:i,onPatch:s,onReplaceJson:l})}),xv.apply(this,arguments)}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var rS=ee('<div class="jse-json-preview svelte-25xmyd"> </div>');function q0(e,t){ut(t,!1);var n=N(),o=N(),a=h(t,"text",8),i=h(t,"json",8),s=h(t,"indentation",8),l=h(t,"parser",8);X(()=>(m(i()),m(a())),()=>{f(n,i()!==void 0?{json:i()}:{text:a()||""})}),X(()=>(r(n),m(s()),m(l()),tu),()=>{f(o,ka(nv(r(n),s(),l()),tu))}),wn(),zt();var c=rS(),u=P(c);Te(()=>vt(u,r(o))),R(e,c),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var oS=ee('<button type="button"><!> <!></button>');function Sd(e,t){ut(t,!1);var n=h(t,"item",8),o=h(t,"className",8,void 0),a=h(t,"onRequestClose",8);zt();var i=oS(),s=P(i),l=d=>{rn(d,{get data(){return m(n()),D(()=>n().icon)}})};ie(s,d=>{m(n()),D(()=>n().icon)&&d(l)});var c=V(s,2),u=d=>{var v=Fr();Te(()=>vt(v,(m(n()),D(()=>n().text)))),R(d,v)};ie(c,d=>{m(n()),D(()=>n().text)&&d(u)}),Te(d=>{Tt(i,1,d,"svelte-16jz6ui"),xn(i,"title",(m(n()),D(()=>n().title))),i.disabled=(m(n()),D(()=>n().disabled||!1))},[()=>vi((m(Qo),m(o()),m(n()),D(()=>Qo("jse-context-menu-button",o(),n().className))))]),Oe("click",i,d=>{a()(),n().onClick(d)}),R(e,i),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var aS=ee('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),iS=ee('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var sS=ee('<button type="button" slot="defaultItem"><!> </button>');function Od(e,t){ut(t,!1);var n=N(),o=h(t,"item",8),a=h(t,"className",8,void 0),i=h(t,"onRequestClose",8);X(()=>(m(o()),m(i())),()=>{f(n,o().items.map(s=>Ae(Ae({},s),{},{onClick:l=>{i()(),s.onClick(l)}})))}),wn(),zt(),function(s,l){ut(l,!1);var c=N(void 0,!0),u=h(l,"items",25,()=>[]),d=h(l,"title",9,void 0),v=h(l,"width",9,"120px"),p=N(!1,!0);function g(){f(p,!1)}function y(w){$a(w)==="Escape"&&(w.preventDefault(),f(p,!1))}Zr(()=>{document.addEventListener("click",g),document.addEventListener("keydown",y)}),Ro(()=>{document.removeEventListener("click",g),document.removeEventListener("keydown",y)}),X(()=>m(u()),()=>{f(c,u().every(w=>w.disabled===!0))}),wn(),zt(!0);var b=iS(),j=P(b);cr(j,l,"defaultItem",{},null);var x,C=V(j,2);rn(P(C),{get data(){return Ra}});var T,O=V(C,2);dr(P(O),5,u,Cr,(w,z)=>{var U=aS(),ae=P(U),M=P(ae),K=I=>{rn(I,{get data(){return r(z),D(()=>r(z).icon)}})};ie(M,I=>{r(z),D(()=>r(z).icon)&&I(K)});var J=V(M);Te(()=>{var I;xn(ae,"title",(r(z),D(()=>r(z).title))),ae.disabled=(r(z),D(()=>r(z).disabled)),Tt(ae,1,vi((r(z),D(()=>r(z).className))),"svelte-bov1j6"),vt(J," ".concat((r(z),(I=D(()=>r(z).text))!==null&&I!==void 0?I:"")))}),Oe("click",ae,I=>r(z).onClick(I)),R(w,U)}),Te((w,z)=>{var U;xn(b,"title",d()),x=Tt(C,1,"jse-open-dropdown svelte-bov1j6",null,x,w),C.disabled=r(c),T=Tt(O,1,"jse-dropdown-items svelte-bov1j6",null,T,z),To(O,"width: ".concat((U=v())!==null&&U!==void 0?U:"",";"))},[()=>({"jse-visible":r(p)}),()=>({"jse-visible":r(p)})]),Oe("click",C,function(){var w=r(p);setTimeout(()=>f(p,!w))}),Oe("click",b,g),R(s,b),dt()}(e,{get width(){return m(o()),D(()=>o().width)},get items(){return r(n)},$$slots:{defaultItem:(s,l)=>{var c=sS(),u=P(c),d=p=>{rn(p,{get data(){return m(o()),D(()=>o().main.icon)}})};ie(u,p=>{m(o()),D(()=>o().main.icon)&&p(d)});var v=V(u);Te(p=>{var g;Tt(c,1,p,"svelte-1y5l9l1"),xn(c,"title",(m(o()),D(()=>o().main.title))),c.disabled=(m(o()),D(()=>o().main.disabled||!1)),vt(v," ".concat((m(o()),(g=D(()=>o().main.text))!==null&&g!==void 0?g:"")))},[()=>vi((m(Qo),m(a()),m(o()),D(()=>Qo("jse-context-menu-button",a(),o().main.className))))]),Oe("click",c,p=>{i()(),o().main.onClick(p)}),R(s,c)}}}),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var lS=ee('<div class="jse-separator svelte-1shjn02"></div>'),cS=ee('<div class="jse-label svelte-1shjn02"> </div>'),uS=ee('<div class="jse-column svelte-1shjn02"></div>'),dS=ee('<div class="jse-separator svelte-1shjn02"></div>'),vS=ee('<div class="jse-row svelte-1shjn02"></div>'),fS=ee('<div class="jse-separator svelte-1shjn02"></div>'),pS=ee('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),hS=ee('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function D0(e,t){ut(t,!1);var n=h(t,"items",9),o=h(t,"onRequestClose",9),a=h(t,"tip",9),i=N(void 0,!0);Zr(()=>{var p=Array.from(r(i).querySelectorAll("button")).find(g=>!g.disabled);p&&p.focus()});var s={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(p){return console.error("Unknown type of context menu item",p),"???"}zt(!0);var c=hS(),u=P(c);dr(u,1,n,Cr,(p,g)=>{var y=Ut(),b=Xe(y),j=C=>{Sd(C,{get item(){return r(g)},get onRequestClose(){return o()}})},x=C=>{var T=Ut(),O=Xe(T),w=U=>{Od(U,{get item(){return r(g)},get onRequestClose(){return o()}})},z=U=>{var ae=Ut(),M=Xe(ae),K=I=>{var re=vS();dr(re,5,()=>(r(g),D(()=>r(g).items)),Cr,(we,se)=>{var ze=Ut(),Ie=Xe(ze),Ue=me=>{Sd(me,{get item(){return r(se)},get onRequestClose(){return o()}})},ue=me=>{var Me=Ut(),et=Xe(Me),ke=xe=>{Od(xe,{get item(){return r(se)},get onRequestClose(){return o()}})},de=xe=>{var mt=Ut(),Gt=Xe(mt),fe=ge=>{var B=uS();dr(B,5,()=>(r(se),D(()=>r(se).items)),Cr,(pe,G)=>{var qe=Ut(),te=Xe(qe),L=it=>{Sd(it,{className:"left",get item(){return r(G)},get onRequestClose(){return o()}})},st=it=>{var Ce=Ut(),wt=Xe(Ce),Le=ht=>{Od(ht,{className:"left",get item(){return r(G)},get onRequestClose(){return o()}})},Ve=ht=>{var De=Ut(),Mt=Xe(De),k=A=>{R(A,lS())},S=A=>{var $=Ut(),oe=Xe($),Se=Z=>{var ne=cS(),lt=P(ne);Te(()=>vt(lt,(r(G),D(()=>r(G).text)))),R(Z,ne)},Ee=Z=>{var ne=Fr();Te(lt=>vt(ne,lt),[()=>(r(G),D(()=>l(r(G))))]),R(Z,ne)};ie(oe,Z=>{m(Dp),r(G),D(()=>Dp(r(G)))?Z(Se):Z(Ee,!1)},!0),R(A,$)};ie(Mt,A=>{m(Ya),r(G),D(()=>Ya(r(G)))?A(k):A(S,!1)},!0),R(ht,De)};ie(wt,ht=>{m(ss),r(G),D(()=>ss(r(G)))?ht(Le):ht(Ve,!1)},!0),R(it,Ce)};ie(te,it=>{m(xa),r(G),D(()=>xa(r(G)))?it(L):it(st,!1)}),R(pe,qe)}),R(ge,B)},H=ge=>{var B=Ut(),pe=Xe(B),G=te=>{R(te,dS())},qe=te=>{var L=Fr();Te(st=>vt(L,st),[()=>(r(se),D(()=>l(r(se))))]),R(te,L)};ie(pe,te=>{m(Ya),r(se),D(()=>Ya(r(se)))?te(G):te(qe,!1)},!0),R(ge,B)};ie(Gt,ge=>{m(Lp),r(se),D(()=>Lp(r(se)))?ge(fe):ge(H,!1)},!0),R(xe,mt)};ie(et,xe=>{m(ss),r(se),D(()=>ss(r(se)))?xe(ke):xe(de,!1)},!0),R(me,Me)};ie(Ie,me=>{m(xa),r(se),D(()=>xa(r(se)))?me(Ue):me(ue,!1)}),R(we,ze)}),R(I,re)},J=I=>{var re=Ut(),we=Xe(re),se=Ie=>{R(Ie,fS())},ze=Ie=>{var Ue=Fr();Te(ue=>vt(Ue,ue),[()=>(r(g),D(()=>l(r(g))))]),R(Ie,Ue)};ie(we,Ie=>{m(Ya),r(g),D(()=>Ya(r(g)))?Ie(se):Ie(ze,!1)},!0),R(I,re)};ie(M,I=>{m(Up),r(g),D(()=>Up(r(g)))?I(K):I(J,!1)},!0),R(U,ae)};ie(O,U=>{m(ss),r(g),D(()=>ss(r(g)))?U(w):U(z,!1)},!0),R(C,T)};ie(b,C=>{m(xa),r(g),D(()=>xa(r(g)))?C(j):C(x,!1)}),R(p,y)});var d=V(u,2),v=p=>{var g=pS(),y=P(g),b=P(y);rn(P(b),{get data(){return Hy}});var j=P(V(b,2));Te(()=>vt(j,a())),R(p,g)};ie(d,p=>{a()&&p(v)}),Qn(c,p=>f(i,p),()=>r(i)),Oe("keydown",c,function(p){var g=$a(p),y=s[g];if(y&&p.target){p.preventDefault();var b=$x({allElements:Array.from(r(i).querySelectorAll("button:not([disabled])")),currentElement:p.target,direction:y,hasPrio:j=>j.getAttribute("data-type")!=="jse-open-dropdown"});b&&b.focus()}}),R(e,c),dt()}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);ee("<option> </option>");ee("<select></select>");var Oc,Ec;function _c(e,t){return Oc||(Ec=new WeakMap,Oc=new ResizeObserver(n=>{for(var o of n){var a=Ec.get(o.target);a&&a(o.target)}})),Ec.set(e,t),Oc.observe(e),{destroy:()=>{Ec.delete(e),Oc.unobserve(e)}}}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var gS=ee("<!> <!>",1),mS=ee('<div class="jse-search-box-background svelte-10mlrw4"></div>'),bS=ee('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),yS=ee('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),jS=ee('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),xS=ee('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function wv(e,t){ut(t,!1);var n=N(void 0,!0),o=Dr("jsoneditor:TreeMode"),a=typeof window>"u";o("isSSR:",a);var i=Ts(),s=Ts(),{openAbsolutePopup:l,closeAbsolutePopup:c}=gi("absolute-popup"),u=N(void 0,!0),d=N(void 0,!0),v=N(void 0,!0),p=!1,g=w0(),y=h(t,"readOnly",9),b=h(t,"externalContent",9),j=h(t,"externalSelection",9),x=h(t,"history",9),C=h(t,"truncateTextSize",9),T=h(t,"mainMenuBar",9),O=h(t,"navigationBar",9),w=h(t,"escapeControlCharacters",9),z=h(t,"escapeUnicodeCharacters",9),U=h(t,"parser",9),ae=h(t,"parseMemoizeOne",9),M=h(t,"validator",9),K=h(t,"validationParser",9),J=h(t,"pathParser",9),I=h(t,"indentation",9),re=h(t,"onError",9),we=h(t,"onChange",9),se=h(t,"onChangeMode",9),ze=h(t,"onSelect",9),Ie=h(t,"onUndo",9),Ue=h(t,"onRedo",9),ue=h(t,"onRenderValue",9),me=h(t,"onRenderMenu",9),Me=h(t,"onRenderContextMenu",9),et=h(t,"onClassName",9),ke=h(t,"onFocus",9),de=h(t,"onBlur",9),xe=h(t,"onSortModal",9),mt=h(t,"onTransformModal",9),Gt=h(t,"onJSONEditorModal",9),fe=!1,H=N(!1,!0),ge=N(void 0,!0);xf({onMount:Zr,onDestroy:Ro,getWindow:()=>tc(r(v)),hasFocus:()=>fe&&document.hasFocus()||af(r(v)),onFocus:()=>{p=!0,ke()&&ke()()},onBlur:()=>{p=!1,de()&&de()()}});var B=N(void 0,!0),pe=N(void 0,!0),G=void 0,qe=!1,te=N(iv({json:r(B)}),!0),L=N(Rl(j())?j():void 0,!0);function st(E){f(L,E)}Zr(()=>{if(r(L)){var E=ot(r(L));f(te,Io(r(B),r(te),E,Ic)),setTimeout(()=>nr(E))}});var it,Ce=N(void 0,!0),wt=N(void 0,!0),Le=N(void 0,!0),Ve=N(void 0,!0),ht=N(!1,!0),De=N(!1,!0);function Mt(E){f(Ve,(it=E)?c0(r(B),it.items):void 0)}function k(E,F){return S.apply(this,arguments)}function S(){return(S=gt(function*(E,F){f(te,Io(r(B),r(te),E,Ic));var he=pr(F);yield Xt(E,{element:he})})).apply(this,arguments)}function A(){f(ht,!1),f(De,!1),kt()}function $(E){o("select validation error",E),f(L,Kt(E.path)),Xt(E.path)}function oe(E){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sv;o("expand"),f(te,Io(r(B),r(te),E,F))}function Se(E,F){f(te,Vp(r(B),r(te),E,F)),r(L)&&function(he,Be){return la(ot(he),Be)&&(ot(he).length>Be.length||Tr(he))}(r(L),E)&&f(L,void 0)}var Ee=N(!1,!0),Z=N([],!0),ne=N(void 0,!0),lt=Sl(k0);function tt(E,F,he,Be){xs(()=>{var Ne;try{Ne=lt(E,F,he,Be)}catch(Re){Ne=[{path:[],message:"Failed to validate: "+Re.message,severity:Vo.warning}]}Lt(Ne,r(Z))||(o("validationErrors changed:",Ne),f(Z,Ne),f(ne,function(Re,Ct){var St;return Ct.forEach(Wt=>{St=mh(Re,St,Wt.path,(Sn,tn)=>Ae(Ae({},tn),{},{validationError:Wt}))}),Ct.forEach(Wt=>{for(var Sn=Wt.path;Sn.length>0;)Sn=nn(Sn),St=mh(Re,St,Sn,(tn,Un)=>Un.validationError?Un:Ae(Ae({},Un),{},{validationError:{isChildError:!0,path:Sn,message:"Contains invalid data",severity:Vo.warning}}))}),St}(E,r(Z))))},Ne=>o("validationErrors updated in ".concat(Ne," ms")))}function Fe(){return o("validate"),G?{parseError:G,isRepairable:!1}:(tt(r(B),M(),U(),K()),fn(r(Z))?void 0:{validationErrors:r(Z)})}function He(){return r(B)}function Nt(){return r(te)}function kn(){return r(L)}function En(E){o("applyExternalContent",{updatedContent:E}),Ml(E)?function(F){if(F!==void 0){var he=!Lt(r(B),F);if(o("update external json",{isChanged:he,currentlyText:r(B)===void 0}),!!he){var Be={documentState:r(te),selection:r(L),json:r(B),text:r(pe),textIsRepaired:r(Ee)};f(B,F),f(te,yo(F,r(te))),qt(r(B)),f(pe,void 0),f(Ee,!1),G=void 0,pn(r(B)),Bt(Be)}}}(E.json):_l(E)&&function(F){if(!(F===void 0||Ml(b()))){var he=F!==r(pe);if(o("update external text",{isChanged:he}),!!he){var Be={documentState:r(te),selection:r(L),json:r(B),text:r(pe),textIsRepaired:r(Ee)};try{f(B,ae()(F)),f(te,yo(r(B),r(te))),qt(r(B)),f(pe,F),f(Ee,!1),G=void 0}catch(Ne){try{f(B,ae()(aa(F))),f(te,yo(r(B),r(te))),qt(r(B)),f(pe,F),f(Ee,!0),G=void 0,pn(r(B))}catch{f(B,void 0),f(te,void 0),f(pe,b().text),f(Ee,!1),G=r(pe)!==void 0&&r(pe)!==""?qs(r(pe),Ne.message||String(Ne)):void 0}}pn(r(B)),Bt(Be)}}}(E.text)}function qt(E){qe||(qe=!0,f(te,Wi(E,r(te),[])))}function pn(E){r(L)&&(Ao(E,$i(r(L)))&&Ao(E,ot(r(L)))||(o("clearing selection: path does not exist anymore",r(L)),f(L,ls(E,r(te)))))}function Bt(E){if(E.json!==void 0||E.text!==void 0){var F=r(B)!==void 0&&E.json!==void 0;x().add({type:"tree",undo:{patch:F?[{op:"replace",path:"",value:E.json}]:void 0,json:E.json,text:E.text,documentState:E.documentState,textIsRepaired:E.textIsRepaired,selection:na(E.selection),sortedColumn:void 0},redo:{patch:F?[{op:"replace",path:"",value:r(B)}]:void 0,json:r(B),text:r(pe),documentState:r(te),textIsRepaired:r(Ee),selection:na(r(L)),sortedColumn:void 0}})}}function Yt(E,F){var he;if(o("patch",E,F),r(B)===void 0)throw new Error("Cannot apply patch: no JSON");var Be=r(B),Ne={json:void 0,text:r(pe),documentState:r(te),selection:na(r(L)),textIsRepaired:r(Ee),sortedColumn:void 0},Re=l0(r(B),E),Ct=Qm(r(B),r(te),E),St=(he=Ls(r(B),E))!==null&&he!==void 0?he:r(L),Wt=typeof F=="function"?F(Ct.json,Ct.documentState,St):void 0;return f(B,Wt?.json!==void 0?Wt.json:Ct.json),f(te,Wt?.state!==void 0?Wt.state:Ct.documentState),f(L,Wt?.selection!==void 0?Wt.selection:St),f(pe,void 0),f(Ee,!1),f(wt,void 0),f(Le,void 0),G=void 0,pn(r(B)),x().add({type:"tree",undo:Ae({patch:Re},Ne),redo:{patch:E,json:void 0,text:r(pe),documentState:r(te),selection:na(r(L)),sortedColumn:void 0,textIsRepaired:r(Ee)}}),{json:r(B),previousJson:Be,undo:Re,redo:E}}function dn(){!y()&&r(L)&&f(L,bf(ot(r(L))))}function pt(){if(!y()&&r(L)){var E=ot(r(L)),F=Ke(r(B),E);ar(F)?function(he,Be){o("openJSONEditorModal",{path:he,value:Be}),fe=!0,Gt()({content:{json:Be},path:he,onPatch:r(Cn).onPatch,onClose:()=>{fe=!1,setTimeout(kt)}})}(E,F):f(L,au(E))}}function on(){if(!y()&&vn(r(L))){var E=ot(r(L)),F=ft(E),he=Ke(r(B),E),Be=!oa(r(B),r(te),E),Ne=Be?String(he):Qs(String(he),U());o("handleToggleEnforceString",{enforceString:Be,value:he,updatedValue:Ne}),ce([{op:"replace",path:F,value:Ne}],(Re,Ct)=>({state:Ru(r(B),Ct,E,{type:"value",enforceString:Be})}))}}function Et(){return r(Ee)&&r(B)!==void 0&&_e(r(B)),r(B)!==void 0?{json:r(B)}:{text:r(pe)||""}}function Ge(){return Ft.apply(this,arguments)}function Ft(){return Ft=gt(function*(){var E=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield R0({json:r(B),selection:r(L),indentation:E?I():void 0,readOnly:y(),parser:U(),onPatch:ce})}),Ft.apply(this,arguments)}function Pt(){return _n.apply(this,arguments)}function _n(){return _n=gt(function*(){var E=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];r(B)!==void 0&&(yield P0({json:r(B),selection:r(L),indentation:E?I():void 0,parser:U()}))}),_n.apply(this,arguments)}function Ln(E){var F;E.preventDefault(),Wn((F=E.clipboardData)===null||F===void 0?void 0:F.getData("text/plain"))}function Dn(){return ir.apply(this,arguments)}function ir(){return(ir=gt(function*(){try{Wn(yield navigator.clipboard.readText())}catch(E){console.error(E),f(H,!0)}})).apply(this,arguments)}function Wn(E){E!==void 0&&N0({clipboardText:E,json:r(B),selection:r(L),readOnly:y(),parser:U(),onPatch:ce,onChangeText:q,onPasteMultilineText:In,openRepairModal:tr})}function tr(E,F){f(ge,{text:E,onParse:he=>ec(he,Be=>Zl(Be,U())),onRepair:$m,onApply:F,onClose:kt})}function vr(){$0({json:r(B),text:r(pe),selection:r(L),keepSelection:!1,readOnly:y(),onChange:we(),onPatch:ce})}function Gn(){!y()&&r(B)!==void 0&&r(L)&&ys&&!fn(ot(r(L)))&&(o("duplicate",{selection:r(L)}),ce(o0(r(B),fi(r(B),r(L)))))}function Sr(){y()||!r(L)||!Pn(r(L))&&!vn(r(L))||fn(ot(r(L)))||(o("extract",{selection:r(L)}),ce(a0(r(B),r(L)),(E,F)=>{if(ar(E))return{state:md(E,F,[])}}))}function fr(E){hu({insertType:E,selectInside:!0,initialValue:void 0,json:r(B),selection:r(L),readOnly:y(),parser:U(),onPatch:ce,onReplaceJson:_e})}function yr(E){$r(r(L))&&f(L,Kt(r(L).path)),r(L)||f(L,ls(r(B),r(te))),fr(E)}function Xn(E){if(!y()&&r(L))if(xc(r(L)))try{var F=$i(r(L)),he=Ke(r(B),F),Be=function(Re,Ct,St){if(Ct==="array"){if(Array.isArray(Re))return Re;if(yn(Re))return Tp(Re);if(typeof Re=="string")try{var Wt=St.parse(Re);if(Array.isArray(Wt))return Wt;if(yn(Wt))return Tp(Wt)}catch{return[Re]}return[Re]}if(Ct==="object"){if(Array.isArray(Re))return Ap(Re);if(yn(Re))return Re;if(typeof Re=="string")try{var Sn=St.parse(Re);if(yn(Sn))return Sn;if(Array.isArray(Sn))return Ap(Sn)}catch{return{value:Re}}return{value:Re}}if(Ct==="value")return ar(Re)?St.stringify(Re):Re;throw new Error("Cannot convert ".concat(nf(Re,St)," to ").concat(Ct))}(he,E,U());if(Be===he)return;var Ne=[{op:"replace",path:ft(F),value:Be}];o("handleConvert",{selection:r(L),path:F,type:E,operations:Ne}),ce(Ne,(Re,Ct)=>({state:r(L)?Wi(Re,Ct,ot(r(L))):r(te)}))}catch(Re){re()(Re)}else re()(new Error("Cannot convert current selection to ".concat(E)))}function ye(){if(r(L)){var E=Yp(r(B),r(te),r(L),!1),F=nn(ot(r(L)));E&&!fn(ot(E))&&Lt(F,nn(ot(E)))?f(L,Ta(ot(E))):f(L,qa(F)),o("insert before",{selection:r(L),selectionBefore:E,parentPath:F}),Fn(),an()}}function $t(){if(r(L)){var E=li(r(B),r(L));o("insert after",E),f(L,Ta(E)),Fn(),an()}}function jn(E){return $n.apply(this,arguments)}function $n(){return($n=gt(function*(E){yield I0({char:E,selectInside:!0,json:r(B),selection:r(L),readOnly:y(),parser:U(),onPatch:ce,onReplaceJson:_e,onSelect:st})})).apply(this,arguments)}function sr(){if(!y()&&x().canUndo){var E=x().undo();if(ru(E)){var F={json:r(B),text:r(pe)};f(B,E.undo.patch?Bo(r(B),E.undo.patch):E.undo.json),f(te,E.undo.documentState),f(L,E.undo.selection),f(pe,E.undo.text),f(Ee,E.undo.textIsRepaired),G=void 0,o("undo",{item:E,json:r(B),documentState:r(te),selection:r(L)}),W(F,E.undo.patch&&E.redo.patch?{json:r(B),previousJson:F.json,redo:E.undo.patch,undo:E.redo.patch}:void 0),kt(),r(L)&&Xt(ot(r(L)),{scrollToWhenVisible:!1})}else Ie()(E)}}function zr(){if(!y()&&x().canRedo){var E=x().redo();if(ru(E)){var F={json:r(B),text:r(pe)};f(B,E.redo.patch?Bo(r(B),E.redo.patch):E.redo.json),f(te,E.redo.documentState),f(L,E.redo.selection),f(pe,E.redo.text),f(Ee,E.redo.textIsRepaired),G=void 0,o("redo",{item:E,json:r(B),documentState:r(te),selection:r(L)}),W(F,E.undo.patch&&E.redo.patch?{json:r(B),previousJson:F.json,redo:E.redo.patch,undo:E.undo.patch}:void 0),kt(),r(L)&&Xt(ot(r(L)),{scrollToWhenVisible:!1})}else Ue()(E)}}function Ht(E){var F;y()||r(B)===void 0||(fe=!0,xe()({id:i,json:r(B),rootPath:E,onSort:(F=gt(function*(he){var{operations:Be}=he;o("onSort",E,Be),ce(Be,(Ne,Re)=>({state:md(Ne,Re,E),selection:Kt(E)}))}),function(he){return F.apply(this,arguments)}),onClose:()=>{fe=!1,setTimeout(kt)}}))}function jr(){r(L)&&Ht(Gp(r(B),r(L)))}function Wr(){Ht([])}function Zn(E){if(r(B)!==void 0){var{id:F,onTransform:he,onClose:Be}=E,Ne=E.rootPath||[];fe=!0,mt()({id:F||s,json:r(B),rootPath:Ne,onTransform:Re=>{he?he({operations:Re,json:r(B),transformedJson:Bo(r(B),Re)}):(o("onTransform",Ne,Re),ce(Re,(Ct,St)=>({state:md(Ct,St,Ne),selection:Kt(Ne)})))},onClose:()=>{fe=!1,setTimeout(kt),Be&&Be()}})}}function Ur(){r(L)&&Zn({rootPath:Gp(r(B),r(L))})}function Mn(){Zn({rootPath:[]})}function Xt(E){return Rt.apply(this,arguments)}function Rt(){return Rt=gt(function*(E){var{scrollToWhenVisible:F=!0,element:he}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};f(te,Io(r(B),r(te),E,Ic));var Be=he??zn(E);if(o("scrollTo",{path:E,elem:Be,refContents:r(u)}),!Be||!r(u))return Promise.resolve();var Ne=r(u).getBoundingClientRect(),Re=Be.getBoundingClientRect();if(!F&&Re.bottom>Ne.top&&Re.top<Ne.bottom)return Promise.resolve();var Ct=-Ne.height/4;return new Promise(St=>{g(Be,{container:r(u),offset:Ct,duration:300,callback:()=>St()})})}),Rt.apply(this,arguments)}function zn(E){var F,he;return Fn(),(F=(he=r(u))===null||he===void 0?void 0:he.querySelector('div[data-path="'.concat($c(E),'"]')))!==null&&F!==void 0?F:void 0}function pr(E){var F,he;return Fn(),(F=(he=r(u))===null||he===void 0?void 0:he.querySelector('span[data-search-result-index="'.concat(E,'"]')))!==null&&F!==void 0?F:void 0}function nr(E){var F=zn(E);if(F&&r(u)){var he=r(u).getBoundingClientRect(),Be=F.getBoundingClientRect(),Ne=ar(Ke(r(B),E))?20:Be.height;Be.top<he.top+20?g(F,{container:r(u),offset:-20,duration:0}):Be.top+Ne>he.bottom-20&&g(F,{container:r(u),offset:-(he.height-Ne-20),duration:0})}}function W(E,F){if(E.json!==void 0||E?.text!==void 0){if(r(pe)!==void 0){var he,Be={text:r(pe),json:void 0};(he=we())===null||he===void 0||he(Be,E,{contentErrors:Fe(),patchResult:F})}else if(r(B)!==void 0){var Ne,Re={text:void 0,json:r(B)};(Ne=we())===null||Ne===void 0||Ne(Re,E,{contentErrors:Fe(),patchResult:F})}}}function ce(E,F){o("handlePatch",E,F);var he={json:r(B),text:r(pe)},Be=Yt(E,F);return W(he,Be),Be}function _e(E,F){var he={json:r(B),text:r(pe)},Be={documentState:r(te),selection:r(L),json:r(B),text:r(pe),textIsRepaired:r(Ee)},Ne=Io(r(B),yo(E,r(te)),[],ml),Re=typeof F=="function"?F(E,Ne,r(L)):void 0;f(B,Re?.json!==void 0?Re.json:E),f(te,Re?.state!==void 0?Re.state:Ne),f(L,Re?.selection!==void 0?Re.selection:r(L)),f(pe,void 0),f(Ee,!1),G=void 0,pn(r(B)),Bt(Be),W(he,void 0)}function q(E,F){o("handleChangeText");var he={json:r(B),text:r(pe)},Be={documentState:r(te),selection:r(L),json:r(B),text:r(pe),textIsRepaired:r(Ee)};try{f(B,ae()(E)),f(te,Io(r(B),yo(r(B),r(te)),[],ml)),f(pe,void 0),f(Ee,!1),G=void 0}catch(Re){try{f(B,ae()(aa(E))),f(te,Io(r(B),yo(r(B),r(te)),[],ml)),f(pe,E),f(Ee,!0),G=void 0}catch{f(B,void 0),f(te,iv({json:r(B),expand:ml})),f(pe,E),f(Ee,!1),G=r(pe)!==""?qs(r(pe),Re.message||String(Re)):void 0}}if(typeof F=="function"){var Ne=F(r(B),r(te),r(L));f(B,Ne?.json!==void 0?Ne.json:r(B)),f(te,Ne?.state!==void 0?Ne.state:r(te)),f(L,Ne?.selection!==void 0?Ne.selection:r(L))}pn(r(B)),Bt(Be),W(he,void 0)}function Y(E,F){var he=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:E,expanded:F,recursive:he}),F?oe(E,he?mf:sv):Se(E,he),kt()}function be(){Y([],!0,!0)}function Pe(){Y([],!1,!0)}function nt(E){o("openFind",{findAndReplace:E}),f(ht,!1),f(De,!1),Fn(),f(ht,!0),f(De,E)}function rt(E,F){o("handleExpandSection",E,F),f(te,function(he,Be,Ne,Re){return Us(he,Be,Ne,(Ct,St)=>{if(!qr(St))return St;var Wt=Jm(St.visibleSections.concat(Re));return Ae(Ae({},St),{},{visibleSections:Wt})})}(r(B),r(te),E,F))}function ct(E){o("pasted json as text",E),f(wt,E)}function In(E){o("pasted multiline text",{pastedText:E}),f(Le,E)}function Jt(E){var F,{anchor:he,left:Be,top:Ne,width:Re,height:Ct,offsetTop:St,offsetLeft:Wt,showTip:Sn}=E,tn=function(Rn){var{json:Hn,documentState:mn,selection:yt,readOnly:ln,onEditKey:jt,onEditValue:at,onToggleEnforceString:It,onCut:er,onCopy:Jn,onPaste:wr,onRemove:gr,onDuplicate:Vr,onExtract:ma,onInsertBefore:ho,onInsert:No,onConvert:Go,onInsertAfter:$o,onSort:Hr,onTransform:Jr}=Rn,go=Hn!==void 0,ba=!!yt,mo=!!yt&&fn(ot(yt)),On=yt?Ke(Hn,ot(yt)):void 0,Er=Array.isArray(On)?"Edit array":yn(On)?"Edit object":"Edit value",mr=go&&(Pn(yt)||$r(yt)||vn(yt)),yi=yt&&!mo?Ke(Hn,nn(ot(yt))):void 0,es=!ln&&go&&ou(yt)&&!mo&&!Array.isArray(yi),ji=!ln&&go&&yt!==void 0&&ou(yt),Xs=ji&&!ar(On),ts=!ln&&mr,Zs=mr,Vu=!ln&&ba,Hu=!ln&&go&&mr&&!mo,Ju=!ln&&go&&yt!==void 0&&(Pn(yt)||vn(yt))&&!mo,Xo=mr,xi=Xo?"Convert to:":"Insert:",_r=!ln&&(Tr(yt)&&Array.isArray(On)||ao(yt)&&Array.isArray(yi)),so=!ln&&(Xo?xc(yt)&&!yn(On):ba),el=!ln&&(Xo?xc(yt)&&!Array.isArray(On):ba),tl=!ln&&(Xo?xc(yt)&&ar(On):ba),wi=yt!==void 0&&oa(Hn,mn,ot(yt));function Qr(nl){mr?nl!=="structure"&&Go(nl):No(nl)}return[{type:"row",items:[{type:"button",onClick:()=>jt(),icon:ws,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!es},{type:"dropdown-button",main:{type:"button",onClick:()=>at(),icon:ws,text:Er,title:"Edit the value (Double-click on the value)",disabled:!ji},width:"11em",items:[{type:"button",icon:ws,text:Er,title:"Edit the value (Double-click on the value)",onClick:()=>at(),disabled:!ji},{type:"button",icon:wi?ig:sg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>It(),disabled:!Xs}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>er(!0),icon:ks,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!ts},width:"10em",items:[{type:"button",icon:ks,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>er(!0),disabled:!ts},{type:"button",icon:ks,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>er(!1),disabled:!ts}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Jn(!0),icon:Xa,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Zs},width:"12em",items:[{type:"button",icon:Xa,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Jn(!0),disabled:!Zs},{type:"button",icon:Xa,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Jn(!1),disabled:!Zs}]},{type:"button",onClick:()=>wr(),icon:lg,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!Vu}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Vr(),icon:cg,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!Hu},{type:"button",onClick:()=>ma(),icon:Db,text:"Extract",title:"Extract selected contents",disabled:!Ju},{type:"button",onClick:()=>Hr(),icon:Wc,text:"Sort",title:"Sort array or object contents",disabled:ln||!mr},{type:"button",onClick:()=>Jr(),icon:Vc,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:ln||!mr},{type:"button",onClick:()=>gr(),icon:Td,text:"Remove",title:"Remove selected contents (Delete)",disabled:ln||!mr}]},{type:"column",items:[{type:"label",text:xi},{type:"button",onClick:()=>Qr("structure"),icon:Xo?sc:gs,text:"Structure",title:xi+" structure like the first item in the array",disabled:!_r},{type:"button",onClick:()=>Qr("object"),icon:Xo?sc:gs,text:"Object",title:xi+" object",disabled:!so},{type:"button",onClick:()=>Qr("array"),icon:Xo?sc:gs,text:"Array",title:xi+" array",disabled:!el},{type:"button",onClick:()=>Qr("value"),icon:Xo?sc:gs,text:"Value",title:xi+" value",disabled:!tl}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>ho(),icon:Ub,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:ln||!mr||mo},{type:"button",onClick:()=>$o(),icon:Lb,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:ln||!mr||mo}]}]}({json:r(B),documentState:r(te),selection:r(L),readOnly:y(),onEditKey:dn,onEditValue:pt,onToggleEnforceString:on,onCut:Ge,onCopy:Pt,onPaste:Dn,onRemove:vr,onDuplicate:Gn,onExtract:Sr,onInsertBefore:ye,onInsert:yr,onInsertAfter:$t,onConvert:Xn,onSort:jr,onTransform:Ur}),Un=(F=Me()(tn))!==null&&F!==void 0?F:tn;if(Un!==!1){var _t={left:Be,top:Ne,offsetTop:St,offsetLeft:Wt,width:Re,height:Ct,anchor:he,closeOnOuterClick:!0,onClose:()=>{fe=!1,kt()}};fe=!0;var rr=l(D0,{tip:Sn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Un,onRequestClose:()=>c(rr)},_t)}}function an(E){if(!Ir(r(L)))if(E&&(E.stopPropagation(),E.preventDefault()),E&&E.type==="contextmenu"&&E.target!==r(d))Jt({left:E.clientX,top:E.clientY,width:Sa,height:Ca,showTip:!1});else{var F,he=(F=r(u))===null||F===void 0?void 0:F.querySelector(".jse-context-menu-pointer.jse-selected");if(he)Jt({anchor:he,offsetTop:2,width:Sa,height:Ca,showTip:!1});else{var Be,Ne=(Be=r(u))===null||Be===void 0?void 0:Be.getBoundingClientRect();Ne&&Jt({top:Ne.top+2,left:Ne.left+2,width:Sa,height:Ca,showTip:!1})}}}function At(E){Jt({anchor:Vm(E.target,"BUTTON"),offsetTop:0,width:Sa,height:Ca,showTip:!0})}function Zt(){return Rr.apply(this,arguments)}function Rr(){return(Rr=gt(function*(){if(o("apply pasted json",r(wt)),r(wt)){var{onPasteAsJson:E}=r(wt);f(wt,void 0),E(),setTimeout(kt)}})).apply(this,arguments)}function bt(){return gn.apply(this,arguments)}function gn(){return(gn=gt(function*(){o("apply pasted multiline text",r(Le)),r(Le)&&(Wn(JSON.stringify(r(Le))),setTimeout(kt))})).apply(this,arguments)}function Qt(){o("clear pasted json"),f(wt,void 0),kt()}function hn(){o("clear pasted multiline text"),f(Le,void 0),kt()}function Bn(){se()(kr.text)}function An(E){f(L,E),kt(),Xt(ot(E))}function kt(){o("focus"),r(d)&&(r(d).focus(),r(d).select())}function Or(E){return function(F,he,Be){var Ne=nn(Be),Re=[Vt(Be)],Ct=Ke(F,Ne),St=Ct?gd(Ct,he,Re):void 0;return St?Kt(Ne.concat(St)):Ta(Be)}(r(B),r(te),E)}function hr(E){r(n)&&r(n).onDrag(E)}function Pr(){r(n)&&r(n).onDragEnd()}var Cn=N(void 0,!0);X(()=>r(L),()=>{var E;E=r(L),Lt(E,j())||(o("onSelect",E),ze()(E))}),X(()=>(m(w()),m(z())),()=>{f(Ce,rf({escapeControlCharacters:w(),escapeUnicodeCharacters:z()}))}),X(()=>r(ht),()=>{(function(E){r(u)&&E&&r(u).scrollTop===0&&(jo(u,r(u).style.overflowAnchor="none"),jo(u,r(u).scrollTop+=gl),setTimeout(()=>{r(u)&&jo(u,r(u).style.overflowAnchor="")}))})(r(ht))}),X(()=>m(b()),()=>{En(b())}),X(()=>m(j()),()=>{(function(E){Lt(r(L),E)||(o("applyExternalSelection",{selection:r(L),externalSelection:E}),Rl(E)&&f(L,E))})(j())}),X(()=>(r(B),m(M()),m(U()),m(K())),()=>{tt(r(B),M(),U(),K())}),X(()=>(r(u),gh),()=>{f(n,r(u)?gh(r(u)):void 0)}),X(()=>(m(y()),m(C()),m(U()),r(Ce),m(ue()),m(et())),()=>{f(Cn,{mode:kr.tree,readOnly:y(),truncateTextSize:C(),parser:U(),normalization:r(Ce),getJson:He,getDocumentState:Nt,getSelection:kn,findElement:zn,findNextInside:Or,focus:kt,onPatch:ce,onInsert:fr,onExpand:Y,onSelect:st,onFind:nt,onExpandSection:rt,onPasteJson:ct,onRenderValue:ue(),onContextMenu:Jt,onClassName:et()||(()=>{}),onDrag:hr,onDragEnd:Pr})}),X(()=>r(Cn),()=>{o("context changed",r(Cn))}),wn();var Tn={expand:oe,collapse:Se,validate:Fe,getJson:He,patch:Yt,acceptAutoRepair:Et,openTransformModal:Zn,scrollTo:Xt,findElement:zn,findSearchResult:pr,focus:kt};zt(!0);var xr=xS();Oe("mousedown",Ma,function(E){!Gs(E.target,F=>F===r(v))&&Ir(r(L))&&(o("click outside the editor, exit edit mode"),f(L,na(r(L))),p&&r(d)&&(r(d).focus(),r(d).blur()),o("blur (outside editor)"),r(d)&&r(d).blur())});var _,Q=Xe(xr),je=P(Q),$e=E=>{(function(F,he){ut(he,!1);var Be=N(void 0,!0),Ne=N(void 0,!0),Re=N(void 0,!0),Ct=h(he,"json",9),St=h(he,"selection",9),Wt=h(he,"readOnly",9),Sn=h(he,"showSearch",13,!1),tn=h(he,"history",9),Un=h(he,"onExpandAll",9),_t=h(he,"onCollapseAll",9),rr=h(he,"onUndo",9),Rn=h(he,"onRedo",9),Hn=h(he,"onSort",9),mn=h(he,"onTransform",9),yt=h(he,"onContextMenu",9),ln=h(he,"onCopy",9),jt=h(he,"onRenderMenu",9);function at(){Sn(!Sn())}var It=N(void 0,!0),er=N(void 0,!0),Jn=N(void 0,!0),wr=N(void 0,!0);X(()=>m(Ct()),()=>{f(Be,Ct()!==void 0)}),X(()=>(r(Be),m(St()),vn),()=>{f(Ne,r(Be)&&(Pn(St())||$r(St())||vn(St())))}),X(()=>(m(Un()),m(Ct())),()=>{f(It,{type:"button",icon:E0,title:"Expand all",className:"jse-expand-all",onClick:Un(),disabled:!ar(Ct())})}),X(()=>(m(_t()),m(Ct())),()=>{f(er,{type:"button",icon:_0,title:"Collapse all",className:"jse-collapse-all",onClick:_t(),disabled:!ar(Ct())})}),X(()=>m(Ct()),()=>{f(Jn,{type:"button",icon:wu,title:"Search (Ctrl+F)",className:"jse-search",onClick:at,disabled:Ct()===void 0})}),X(()=>(m(Wt()),r(It),r(er),m(Hn()),m(Ct()),m(mn()),r(Jn),m(yt()),m(rr()),m(tn()),m(Rn()),m(ln()),r(Ne)),()=>{f(wr,Wt()?[r(It),r(er),{type:"separator"},{type:"button",icon:Xa,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:ln(),disabled:!r(Ne)},{type:"separator"},r(Jn),{type:"space"}]:[r(It),r(er),{type:"separator"},{type:"button",icon:Wc,title:"Sort",className:"jse-sort",onClick:Hn(),disabled:Wt()||Ct()===void 0},{type:"button",icon:Vc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:mn(),disabled:Wt()||Ct()===void 0},r(Jn),{type:"button",icon:ug,title:cf,className:"jse-contextmenu",onClick:yt()},{type:"separator"},{type:"button",icon:Tv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:rr(),disabled:!tn().canUndo},{type:"button",icon:zv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Rn(),disabled:!tn().canRedo},{type:"space"}])}),X(()=>(m(jt()),r(wr)),()=>{f(Re,jt()(r(wr))||r(wr))}),wn(),zt(!0),Du(F,{get items(){return r(Re)}}),dt()})(E,{get json(){return r(B)},get selection(){return r(L)},get readOnly(){return y()},get history(){return x()},onExpandAll:be,onCollapseAll:Pe,onUndo:sr,onRedo:zr,onSort:Wr,onTransform:Mn,onContextMenu:At,onCopy:Pt,get onRenderMenu(){return me()},get showSearch(){return r(ht)},set showSearch(F){f(ht,F)},$$legacy:!0})};ie(je,E=>{T()&&E($e)});var ve=V(je,2),We=E=>{KC(E,{get json(){return r(B)},get selection(){return r(L)},onSelect:An,get onError(){return re()},get pathParser(){return J()}})};ie(ve,E=>{O()&&E(We)});var Ye=V(ve,2),Je=E=>{var F=yS(),he=Xe(F),Be=P(he);Be.readOnly=!0,Qn(Be,St=>f(d,St),()=>r(d));var Ne=V(he,2),Re=St=>{var Wt=Ut(),Sn=Xe(Wt),tn=_t=>{(function(rr,Rn){ut(Rn,!0);var Hn=NC();Hn.__click=[RC,Rn];var mn=V(P(Hn),2),yt=V(P(mn),2),ln=jt=>{var at=PC(),It=V(Xe(at),2);xn(It,"title","Create an empty JSON object (press '{')"),It.__click=[TC,Rn];var er=V(It,2);xn(er,"title","Create an empty JSON array (press '[')"),er.__click=[zC,Rn],R(jt,at)};ie(yt,jt=>{Rn.readOnly||jt(ln)}),R(rr,Hn),dt()})(_t,{get readOnly(){return y()},onCreateObject:()=>{kt(),jn("{")},onCreateArray:()=>{kt(),jn("[")},onClick:()=>{kt()}})},Un=_t=>{var rr=gS(),Rn=Xe(rr),Hn=Ze(()=>y()?[]:[{icon:Hc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Bn}]);Co(Rn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return r(Hn)}}),q0(V(Rn,2),{get text(){return r(pe)},get json(){return r(B)},get indentation(){return I()},get parser(){return U()}}),R(_t,rr)};ie(Sn,_t=>{r(pe)===""||r(pe)===void 0?_t(tn):_t(Un,!1)}),R(St,Wt)},Ct=St=>{var Wt=bS(),Sn=Xe(Wt);A0(P(Sn),{get json(){return r(B)},get documentState(){return r(te)},get parser(){return U()},get showSearch(){return r(ht)},get showReplace(){return r(De)},get readOnly(){return y()},columns:void 0,onSearch:Mt,onFocus:k,onPatch:ce,onClose:A});var tn=V(Sn,2);xn(tn,"data-jsoneditor-scrollable-contents",!0);var Un=P(tn),_t=jt=>{R(jt,mS())};ie(Un,jt=>{r(ht)&&jt(_t)}),gv(V(Un,2),{get value(){return r(B)},pointer:"",get state(){return r(te)},get validationErrors(){return r(ne)},get searchResults(){return r(Ve)},get selection(){return r(L)},get context(){return r(Cn)},get onDragSelectionStart(){return Mr}}),Qn(tn,jt=>f(u,jt),()=>r(u));var rr=V(tn,2),Rn=jt=>{var at=Ze(()=>(r(wt),D(()=>"You pasted a JSON ".concat(Array.isArray(r(wt).contents)?"array":"object"," as text")))),It=Ze(()=>[{icon:ci,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Zt},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:Qt}]);Co(jt,{type:"info",get message(){return r(at)},get actions(){return r(It)}})};ie(rr,jt=>{r(wt)&&jt(Rn)});var Hn=V(rr,2),mn=jt=>{var at=Ze(()=>[{icon:ci,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:bt},{text:"Leave as is",title:"Keep the pasted array",onClick:hn}]);Co(jt,{type:"info",message:"Multiline text was pasted as array",get actions(){return r(at)}})};ie(Hn,jt=>{r(Le)&&jt(mn)});var yt=V(Hn,2),ln=jt=>{var at=Ze(()=>y()?[]:[{icon:Rv,text:"Ok",title:"Accept the repaired document",onClick:Et},{icon:Hc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Bn}]);Co(jt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return r(at)},onClose:kt})};ie(yt,jt=>{r(Ee)&&jt(ln)}),wf(V(yt,2),{get validationErrors(){return r(Z)},selectError:$}),R(St,Wt)};ie(Ne,St=>{r(B)===void 0?St(Re):St(Ct,!1)}),Oe("paste",Be,Ln),R(E,F)},Dt=E=>{R(E,jS())};ie(Ye,E=>{a?E(Dt,!1):E(Je)}),Qn(Q,E=>f(v,E),()=>r(v));var sn=V(Q,2),en=E=>{C0(E,{onClose:()=>f(H,!1)})};ie(sn,E=>{r(H)&&E(en)});var Vn=V(sn,2),Nr=E=>{S0(E,ii(()=>r(ge),{onClose:()=>{var F;(F=r(ge))===null||F===void 0||F.onClose(),f(ge,void 0)}}))};return ie(Vn,E=>{r(ge)&&E(Nr)}),Te(E=>_=Tt(Q,1,"jse-tree-mode svelte-10mlrw4",null,_,E),[()=>({"no-main-menu":!T()})]),Oe("keydown",Q,function(E){var F=$a(E),he=E.shiftKey;if(o("keydown",{combo:F,key:E.key}),F==="Ctrl+X"&&(E.preventDefault(),Ge(!0)),F==="Ctrl+Shift+X"&&(E.preventDefault(),Ge(!1)),F==="Ctrl+C"&&(E.preventDefault(),Pt(!0)),F==="Ctrl+Shift+C"&&(E.preventDefault(),Pt(!1)),F==="Ctrl+D"&&(E.preventDefault(),Gn()),F!=="Delete"&&F!=="Backspace"||(E.preventDefault(),vr()),F==="Insert"&&(E.preventDefault(),fr("structure")),F==="Ctrl+A"&&(E.preventDefault(),f(L,Kt([]))),F==="Ctrl+Q"&&an(E),F==="ArrowUp"||F==="Shift+ArrowUp"){E.preventDefault();var Be=r(L)?Yp(r(B),r(te),r(L),he)||r(L):ls(r(B),r(te));f(L,Be),nr(ot(Be))}if(F==="ArrowDown"||F==="Shift+ArrowDown"){E.preventDefault();var Ne=r(L)?function(tn,Un,_t){var rr=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(_t){var Rn=rr?ot(_t):li(tn,_t),Hn=ar(Ke(tn,Rn))?Vp(tn,Un,Rn,!0):Un,mn=gd(tn,Un,Rn),yt=gd(tn,Hn,Rn);if(rr)return Tr(_t)?mn!==void 0?eo(mn,mn):void 0:ao(_t)?yt!==void 0?eo(yt,yt):void 0:yt!==void 0?eo($i(_t),yt):void 0;if(ao(_t))return yt!==void 0?Kt(yt):void 0;if(Tr(_t)||vn(_t))return mn!==void 0?Kt(mn):void 0;if($r(_t)){if(mn===void 0||mn.length===0)return;var ln=nn(mn),jt=Ke(tn,ln);return Array.isArray(jt)?Kt(mn):Ia(mn)}return Pn(_t)?yt!==void 0?Kt(yt):mn!==void 0?Kt(mn):void 0:void 0}}(r(B),r(te),r(L),he)||r(L):ls(r(B),r(te));f(L,Ne),nr(ot(Ne))}if(F==="ArrowLeft"||F==="Shift+ArrowLeft"){E.preventDefault();var Re=r(L)?function(tn,Un,_t){var rr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Rn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(_t){var{caret:Hn,previous:mn}=Qp(tn,Un,_t,Rn);if(rr)return Pn(_t)?void 0:eo(_t.path,_t.path);if(Hn&&mn)return lv(mn);var yt=nn(ot(_t)),ln=Ke(tn,yt);return vn(_t)&&Array.isArray(ln)?eo(_t.path,_t.path):Pn(_t)&&!Array.isArray(ln)?Ia(_t.focusPath):void 0}}(r(B),r(te),r(L),he,!y())||r(L):ls(r(B),r(te));f(L,Re),nr(ot(Re))}if(F==="ArrowRight"||F==="Shift+ArrowRight"){E.preventDefault();var Ct=r(L)&&r(B)!==void 0?function(tn,Un,_t){var rr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Rn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(_t){var{caret:Hn,next:mn}=Qp(tn,Un,_t,Rn);return rr?Pn(_t)?void 0:eo(_t.path,_t.path):Hn&&mn?lv(mn):Pn(_t)?Kt(_t.focusPath):void 0}}(r(B),r(te),r(L),he,!y())||r(L):ls(r(B),r(te));f(L,Ct),nr(ot(Ct))}if(F==="Enter"&&r(L)){if(Pu(r(L))){var St=r(L).focusPath,Wt=Ke(r(B),nn(St));Array.isArray(Wt)&&(E.preventDefault(),f(L,Kt(St)))}$r(r(L))&&(E.preventDefault(),f(L,Ae(Ae({},r(L)),{},{edit:!0}))),vn(r(L))&&(E.preventDefault(),ar(Ke(r(B),r(L).path))?Y(r(L).path,!0):f(L,Ae(Ae({},r(L)),{},{edit:!0})))}if(F.replace(/^Shift\+/,"").length===1&&r(L))return E.preventDefault(),void jn(E.key);if(F==="Enter"&&(ao(r(L))||Tr(r(L))))return E.preventDefault(),void jn("");if(F==="Ctrl+Enter"&&vn(r(L))){var Sn=Ke(r(B),r(L).path);zu(Sn)&&window.open(String(Sn),"_blank")}F==="Escape"&&r(L)&&(E.preventDefault(),f(L,void 0)),F==="Ctrl+F"&&(E.preventDefault(),nt(!1)),F==="Ctrl+H"&&(E.preventDefault(),nt(!0)),F==="Ctrl+Z"&&(E.preventDefault(),sr()),F==="Ctrl+Shift+Z"&&(E.preventDefault(),zr())}),Oe("mousedown",Q,function(E){o("handleMouseDown",E);var F=E.target;Wm(F,"BUTTON")||F.isContentEditable||(kt(),r(L)||r(B)!==void 0||r(pe)!==""&&r(pe)!==void 0||(o("createDefaultSelection"),f(L,Kt([]))))}),Oe("contextmenu",Q,an),R(e,xr),xt(t,"expand",oe),xt(t,"collapse",Se),xt(t,"validate",Fe),xt(t,"getJson",He),xt(t,"patch",Yt),xt(t,"acceptAutoRepair",Et),xt(t,"openTransformModal",Zn),xt(t,"scrollTo",Xt),xt(t,"findElement",zn),xt(t,"findSearchResult",pr),xt(t,"focus",kt),dt(Tn)}function U0(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(n,o,a)=>U0(Reflect.get(n,o,a)),set:()=>!1,deleteProperty:()=>!1});var t}var Mc=Dr("jsoneditor:History");function L0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,n=[],o=0;function a(){return o<n.length}function i(){return o>0}function s(){return{canUndo:a(),canRedo:i(),items:()=>n.slice().reverse(),add:c,undo:d,redo:v,clear:u}}function l(){e.onChange&&e.onChange(s())}function c(p){Mc("add",p),n=[p].concat(n.slice(o)).slice(0,t),o=0,l()}function u(){Mc("clear"),n=[],o=0,l()}function d(){if(a()){var p=n[o];return o+=1,Mc("undo",p),l(),p}}function v(){if(i())return Mc("redo",n[o-=1]),l(),n[o]}return{get:s}}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var ul=Tu(()=>Ow),us=Tu(()=>Ew),wS=ee('<div class="query-error svelte-lta8xm"> </div>'),kS=ee("<!> <!>",1),CS=ee('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),SS=ee('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),OS=ee('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function ES(e,t){var n,o,a;ut(t,!1);var i=Dr("jsoneditor:TransformModal"),s=h(t,"id",25,()=>"transform-modal-"+bs()),l=h(t,"json",9),c=h(t,"rootPath",25,()=>[]),u=h(t,"indentation",9),d=h(t,"truncateTextSize",9),v=h(t,"escapeControlCharacters",9),p=h(t,"escapeUnicodeCharacters",9),g=h(t,"parser",9),y=h(t,"parseMemoizeOne",9),b=h(t,"validationParser",9),j=h(t,"pathParser",9),x=h(t,"queryLanguages",9),C=h(t,"queryLanguageId",13),T=h(t,"onChangeQueryLanguage",9),O=h(t,"onRenderValue",9),w=h(t,"onRenderMenu",9),z=h(t,"onRenderContextMenu",9),U=h(t,"onClassName",9),ae=h(t,"onTransform",9),M=h(t,"onClose",9),K=N(void 0,!0),J=N(L0({onChange:te=>f(J,te)}).get(),!0),I=N(void 0,!0),re=N(void 0,!0),we=N(!1,!0),se="".concat(s(),":").concat(ft(c())),ze=(n=ul()[se])!==null&&n!==void 0?n:{},Ie=N(us().showWizard!==!1,!0),Ue=N(us().showOriginal!==!1,!0),ue=N((o=ze.queryOptions)!==null&&o!==void 0?o:{},!0),me=N(C()===ze.queryLanguageId&&ze.query?ze.query:"",!0),Me=N((a=ze.isManual)!==null&&a!==void 0&&a,!0),et=N(void 0,!0),ke=N(void 0,!0),de=N({text:""},!0);function xe(te){var L;return(L=x().find(st=>st.id===te))!==null&&L!==void 0?L:x()[0]}function mt(te){try{f(ue,te),f(me,xe(C()).createQuery(r(I),te)),f(et,void 0),f(Me,!1),i("updateQueryByWizard",{queryOptions:r(ue),query:r(me),isManual:r(Me)})}catch(L){f(et,String(L))}}function Gt(te){f(me,te.target.value),f(Me,!0),i("handleChangeQuery",{query:r(me),isManual:r(Me)})}r(Me)||mt(r(ue)),Zr(()=>{var te;(te=r(K))===null||te===void 0||te.focus()});var fe=Kc(function(te,L){if(te===void 0)return f(de,{text:""}),void f(ke,"Error: No JSON");if(L.trim()!=="")try{i("previewTransform",{query:L});var st=xe(C()).executeQuery(te,L,g());f(de,{json:st}),f(ke,void 0)}catch(it){f(de,{text:""}),f(ke,String(it))}else f(de,{json:te})},300);function H(){if(r(I)===void 0)return f(de,{text:""}),void f(ke,"Error: No JSON");try{i("handleTransform",{query:r(me)});var te=xe(C()).executeQuery(r(I),r(me),g());ae()([{op:"replace",path:ft(c()),value:te}]),M()()}catch(L){console.error(L),f(de,{text:""}),f(ke,String(L))}}function ge(){f(Ie,!r(Ie)),us(us().showWizard=r(Ie))}function B(){f(Ue,!r(Ue)),us(us().showOriginal=r(Ue))}function pe(te){te.focus()}function G(te){i("handleChangeQueryLanguage",te),C(te),T()(te),mt(r(ue))}function qe(){r(we)?f(we,!r(we)):M()()}X(()=>(m(l()),m(c())),()=>{f(I,U0(Ke(l(),c())))}),X(()=>r(I),()=>{f(re,r(I)?{json:r(I)}:{text:""})}),X(()=>(r(I),r(me)),()=>{fe(r(I),r(me))}),X(()=>(ul(),r(ue),r(me),m(C()),r(Me)),()=>{ul(ul()[se]={queryOptions:r(ue),query:r(me),queryLanguageId:C(),isManual:r(Me)}),i("store state in memory",se,ul()[se])}),wn(),zt(!0),Il(e,{get onClose(){return M()},className:"jse-transform-modal",get fullscreen(){return r(we)},children:(te,L)=>{var st=OS();rv(P(st),{children:(it,Ce)=>{var wt=SS(),Le=Xe(wt);(function(Ge,Ft){ut(Ft,!1);var Pt,_n=h(Ft,"queryLanguages",9),Ln=h(Ft,"queryLanguageId",9),Dn=h(Ft,"fullscreen",13),ir=h(Ft,"onChangeQueryLanguage",9),Wn=h(Ft,"onClose",9),tr=N(void 0,!0),{openAbsolutePopup:vr,closeAbsolutePopup:Gn}=gi("absolute-popup");function Sr(){var fr={queryLanguages:_n(),queryLanguageId:Ln(),onChangeQueryLanguage:yr=>{Gn(Pt),ir()(yr)}};Pt=vr(wk,fr,{offsetTop:-2,offsetLeft:0,anchor:r(tr),closeOnOuterClick:!0})}zt(!0),fu(Ge,{title:"Transform",fullScreenButton:!0,get onClose(){return Wn()},get fullscreen(){return Dn()},set fullscreen(fr){Dn(fr)},$$slots:{actions:(fr,yr)=>{var Xn,ye=Sk();rn(P(ye),{get data(){return Pb}}),Qn(ye,$t=>f(tr,$t),()=>r(tr)),Te($t=>Xn=Tt(ye,1,"jse-config svelte-5gkegr",null,Xn,$t),[()=>({hide:_n().length<=1})]),Oe("click",ye,Sr),R(fr,ye)}},$$legacy:!0}),dt()})(Le,{get queryLanguages(){return x()},get queryLanguageId(){return C()},onChangeQueryLanguage:G,get onClose(){return M()},get fullscreen(){return r(we)},set fullscreen(Ge){f(we,Ge)},$$legacy:!0});var Ve=P(V(Le,2)),ht=P(Ve),De=V(P(ht),2);Em(P(De),()=>(m(C()),D(()=>xe(C()).description)));var Mt=V(De,4),k=V(Mt,2),S=P(k),A=P(S),$=P(A),oe=Ze(()=>r(Ie)?Ra:Cl);rn($,{get data(){return r(oe)}});var Se=V(k,2),Ee=Ge=>{var Ft=Ut(),Pt=Xe(Ft),_n=Dn=>{var ir=kS(),Wn=Xe(ir);yk(Wn,{get queryOptions(){return r(ue)},get json(){return r(I)},onChange:mt});var tr=V(Wn,2),vr=Gn=>{var Sr=wS(),fr=P(Sr);Te(()=>vt(fr,r(et))),R(Gn,Sr)};ie(tr,Gn=>{r(et)&&Gn(vr)}),R(Dn,ir)},Ln=Dn=>{R(Dn,Fr("(Only available for arrays, not for objects)"))};ie(Pt,Dn=>{r(I),D(()=>Array.isArray(r(I)))?Dn(_n):Dn(Ln,!1)}),R(Ge,Ft)};ie(Se,Ge=>{r(Ie)&&Ge(Ee)});var Z=V(Se,4);Qn(Z,Ge=>f(K,Ge),()=>r(K));var ne,lt,tt=V(ht,2),Fe=P(tt),He=P(Fe),Nt=P(He),kn=P(Nt),En=P(kn),qt=Ze(()=>r(Ue)?Ra:Cl);rn(En,{get data(){return r(qt)}});var pn=V(He,2),Bt=Ge=>{wv(Ge,{get externalContent(){return r(re)},externalSelection:void 0,get history(){return r(J)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return p()},get parser(){return g()},get parseMemoizeOne(){return y()},get onRenderValue(){return O()},get onRenderMenu(){return w()},get onRenderContextMenu(){return z()},onError:D(()=>console.error),get onChange(){return Mr},get onChangeMode(){return Mr},get onSelect(){return Mr},get onUndo(){return Mr},get onRedo(){return Mr},get onFocus(){return Mr},get onBlur(){return Mr},get onSortModal(){return Mr},get onTransformModal(){return Mr},get onJSONEditorModal(){return Mr},get onClassName(){return U()},validator:void 0,get validationParser(){return b()},get pathParser(){return j()}})};ie(pn,Ge=>{r(Ue)&&Ge(Bt)});var Yt=V(Fe,2),dn=V(P(Yt),2),pt=Ge=>{wv(Ge,{get externalContent(){return r(de)},externalSelection:void 0,get history(){return r(J)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return p()},get parser(){return g()},get parseMemoizeOne(){return y()},get onRenderValue(){return O()},get onRenderMenu(){return w()},get onRenderContextMenu(){return z()},onError:D(()=>console.error),get onChange(){return Mr},get onChangeMode(){return Mr},get onSelect(){return Mr},get onUndo(){return Mr},get onRedo(){return Mr},get onFocus(){return Mr},get onBlur(){return Mr},get onSortModal(){return Mr},get onTransformModal(){return Mr},get onJSONEditorModal(){return Mr},get onClassName(){return U()},validator:void 0,get validationParser(){return b()},get pathParser(){return j()}})},on=Ge=>{var Ft=CS(),Pt=P(Ft);Te(()=>vt(Pt,r(ke))),R(Ge,Ft)};ie(dn,Ge=>{r(ke)?Ge(on,!1):Ge(pt)});var Et=P(V(Ve,2));Kr(()=>Oe("click",Et,H)),no(Et,Ge=>pe?.(Ge)),Te((Ge,Ft,Pt)=>{Bi(Mt,Ge),Bi(Z,r(me)),ne=Tt(tt,1,"jse-data-contents svelte-lta8xm",null,ne,Ft),lt=Tt(Fe,1,"jse-original-data svelte-lta8xm",null,lt,Pt),Et.disabled=!!r(ke)},[()=>(m(fn),m(c()),m(Br),D(()=>fn(c())?"(document root)":Br(c()))),()=>({"jse-hide-original-data":!r(Ue)}),()=>({"jse-hide":!r(Ue)})]),Oe("click",A,ge),Oe("input",Z,Gt),Oe("click",kn,B),R(it,wt)},$$slots:{default:!0}}),no(st,(it,Ce)=>pu?.(it,Ce),()=>qe),R(te,st)},$$slots:{default:!0}}),dt()}function _o(){}var _S=0;class Gr{constructor(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=_S++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof t!="function"&&(t=Dl.match(t)),n=>{var o=t(n);return o===void 0?null:[this,o]}}}Gr.closedBy=new Gr({deserialize:e=>e.split(" ")}),Gr.openedBy=new Gr({deserialize:e=>e.split(" ")}),Gr.group=new Gr({deserialize:e=>e.split(" ")}),Gr.isolate=new Gr({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),Gr.contextHash=new Gr({perNode:!0}),Gr.lookAhead=new Gr({perNode:!0}),Gr.mounted=new Gr({perNode:!0});var xh,MS=Object.create(null);class Dl{constructor(t,n,o){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=t,this.props=n,this.id=o,this.flags=a}static define(t){var n=t.props&&t.props.length?Object.create(null):MS,o=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),a=new Dl(t.name||"",n,t.id,o);if(t.props){for(var i of t.props)if(Array.isArray(i)||(i=i(a)),i){if(i[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");n[i[0].id]=i[1]}}return a}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if(typeof t=="string"){if(this.name==t)return!0;var n=this.prop(Gr.group);return!!n&&n.indexOf(t)>-1}return this.id==t}static match(t){var n=Object.create(null);for(var o in t)for(var a of o.split(" "))n[a]=t[o];return i=>{for(var s=i.prop(Gr.group),l=-1;l<(s?s.length:0);l++){var c=n[l<0?i.name:s[l]];if(c)return c}}}}Dl.none=new Dl("",Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays"}(xh||(xh={})),new Gr({perNode:!0});Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var AS=ee('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),TS=ee('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),zS=ee('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),RS=ee('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),Cf=b1.define([{tag:ol.propertyName,color:"var(--internal-key-color)"},{tag:ol.number,color:"var(--internal-value-color-number)"},{tag:ol.bool,color:"var(--internal-value-color-boolean)"},{tag:ol.string,color:"var(--internal-value-color-string)"},{tag:ol.keyword,color:"var(--internal-value-color-null)"}]),PS=pg(Cf),NS=Cf.style;Cf.style=e=>NS(e||[]);var $S=[Nv.fromClass(class{constructor(e){this.view=e,this.indentUnit=Jc(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=Jc(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new qv;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:n=>{var o=n.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,n.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,n){var o=this.getVisibleLines(t);for(var a of o){var{numColumns:i,containsTab:s}=this.numColumns(a.text,t.tabSize),l="calc(".concat(i+this.indentUnit,"ch + ").concat(n,")"),c=this.isChrome?"calc(-".concat(i+this.indentUnit,"ch - ").concat(s?1:0,"px)"):"-".concat(i+this.indentUnit,"ch");e.add(a.from,a.from,ui.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,n=null;for(var{from:o,to:a}of this.view.visibleRanges)for(var i=o;i<=a;){var s=e.doc.lineAt(i);n!==s&&(t.add(s),n=s),i=s.to+1}return t}numColumns(e,t){var n=0,o=!1;e:for(var a=0;a<e.length;a++)switch(e[a]){case" ":n+=1;continue e;case"	":n+=t-n%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:n,containsTab:o}}},{decorations:e=>e.decorations})];Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name="close"] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var IS=ee('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),qS=ee('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),DS=ee("<!> <!> <!> <!>",1),US=ee("<div></div> <!> <!>",1),LS=ee('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),BS=ee("<div><!> <!> <!></div>");function FS(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=h(t,"readOnly",9),i=h(t,"mainMenuBar",9),s=h(t,"statusBar",9),l=h(t,"askToFormat",9),c=h(t,"externalContent",9),u=h(t,"externalSelection",9),d=h(t,"history",9),v=h(t,"indentation",9),p=h(t,"tabSize",9),g=h(t,"escapeUnicodeCharacters",9),y=h(t,"parser",9),b=h(t,"validator",9),j=h(t,"validationParser",9),x=h(t,"onChange",9),C=h(t,"onChangeMode",9),T=h(t,"onSelect",9),O=h(t,"onUndo",9),w=h(t,"onRedo",9),z=h(t,"onError",9),U=h(t,"onFocus",9),ae=h(t,"onBlur",9),M=h(t,"onRenderMenu",9),K=h(t,"onSortModal",9),J=h(t,"onTransformModal",9),I=Dr("jsoneditor:TextMode"),re={key:"Mod-i",run:Ee,shift:Z,preventDefault:!0},we=typeof window>"u";I("isSSR:",we);var se,ze=N(void 0,!0),Ie=N(void 0,!0),Ue=N(void 0,!0),ue=N(!1,!0),me=N(l(),!0),Me=N([],!0),et=N(!1,!0),ke=N(0,!0),de=N(0,!0),xe=null,mt=new al,Gt=new al,fe=new al,H=new al,ge=new al,B=c(),pe=N(nv(B,v(),y()),!0),G=W1.define(),qe=null;function te(){if(!qe||qe.length===0)return!1;var W=qe[0].startState,ce=qe[qe.length-1].state,_e=qe.map(Y=>Y.changes).reduce((Y,be)=>Y.compose(be)),q={type:"text",undo:{changes:_e.invert(W.doc).toJSON(),selection:yr(W.selection)},redo:{changes:_e.toJSON(),selection:yr(ce.selection)}};return I("add history item",q),d().add(q),qe=null,!0}var L=N(g(),!0);Zr(gt(function*(){if(!we)try{se=function(W){var{target:ce,initialText:_e,readOnly:q,indentation:Y}=W;I("Create CodeMirror editor",{readOnly:q,indentation:Y});var be=function(nt,rt){return bd(nt)?nt.ranges.every(ct=>ct.anchor<rt.length&&ct.head<rt.length):!1}(u(),_e)?_n(u()):void 0,Pe=rs.create({doc:_e,selection:be,extensions:[Hf.of([y1,re]),mt.of(pt()),Oj(),j1(),x1(),w1(),k1(),Le(),C1(),S1(),rs.allowMultipleSelections.of(!0),O1(),pg(E1,{fallback:!0}),_1(),M1(),A1(),T1(),z1(),R1(),P1(),Hf.of([...N1,...$1,...I1,{key:"Mod-z",run:Nt,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:kn,preventDefault:!0},{key:"Ctrl-Shift-z",run:kn,preventDefault:!0},...q1,...D1,...pj]),PS,zj({hideFirstIndent:!0}),qo.domEventHandlers({dblclick:dn}),qo.updateListener.of(nt=>{f(Ue,nt.state),nt.docChanged&&(nt.transactions.some(rt=>!!rt.annotation(G))||(qe=[...qe??[],nt]),vr()),nt.selectionSet&&fr()}),G1(),U1({top:!0}),qo.lineWrapping,Gt.of(rs.readOnly.of(q)),H.of(rs.tabSize.of(p())),fe.of(tr(Y)),ge.of(qo.theme({},{dark:on()}))]});return se=new qo({state:Pe,parent:ce}),be&&se.dispatch(se.state.update({selection:be.main,scrollIntoView:!0})),se}({target:r(ze),initialText:Xn(r(pe),r(ue))?"":r(n).escapeValue(r(pe)),readOnly:a(),indentation:v()})}catch(W){console.error(W)}})),Ro(()=>{Gn(),se&&(I("Destroy CodeMirror editor"),se.destroy()),Mt()});var st=Ts(),it=Ts();function Ce(){se&&(I("focus"),se.focus())}function wt(W,ce){if(se)try{(function(){var _e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],q=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],Y=se.state,be=Y.doc.length,Pe=Jf(Y,be,1/0);if(Pe){var nt=[];if(_e.length===0)nt=ht(Pe,Y,void 0,q);else{var{from:rt}=cd(r(n).escapeValue(r(pe)),_e);rt!==void 0&&rt!==0&&(nt=ht(Pe,Y,rt,q))}nt.length>0&&function(ct){De.apply(this,arguments)}(nt)}})(W,ce)}catch(_e){z()(_e)}}function Le(){return L1.of((W,ce,_e)=>{var q=Jf(W,W.doc.length,1/0);if(!q||q.length<_e)return null;for(var Y=null,be=q.resolveStack(_e,1);be;be=be.next){var Pe=be.node;if(!(Pe.to<=_e||Pe.from>_e)){if(Y&&Pe.from<ce)break;var nt=Pe.type.prop(B1);if(nt&&(Pe.to<q.length-50||q.length==W.doc.length||!Ve(Pe))){var rt=nt(Pe,W);rt&&rt.from<=_e&&rt.from>=ce&&rt.to>_e&&(Y=rt)}}}return Y})}function Ve(W){var ce=W.lastChild;return ce&&ce.to==W.to&&ce.type.isError}function ht(W,ce,_e){var q=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],Y=[],be=new Set;return W.iterate({enter(Pe){if(_e===void 0||Pe.from>=_e){var nt=V1(ce,Pe.from,Pe.to);if(nt){var rt="".concat(nt.from,"-").concat(nt.to);if(!be.has(rt))if(q)Y.push({from:nt.from,to:nt.to}),be.add(rt);else{var ct=Y.some(In=>In.from<=nt.from&&In.to>=nt.to);ct||(Y.push({from:nt.from,to:nt.to}),be.add(rt))}}}}}),Y}function De(){return De=gt(function*(W){if(W.length!==0){var ce=W.length>5e3;ce&&(f(et,!0),f(ke,0),f(de,W.length),xe=new AbortController);var _e=q=>new Promise(Y=>{var be;ce&&(be=xe)!==null&&be!==void 0&&be.signal.aborted?Y():requestAnimationFrame(()=>{var Pe=Math.min(q+100,W.length),nt=W.slice(q,Pe);se.dispatch({effects:nt.map(rt=>K1.of({from:rt.from,to:rt.to}))}),ce&&f(ke,Pe),Pe<W.length?_e(Pe).then(Y):Y()})});yield _e(0),ce&&(f(et,!1),f(ke,0),f(de,0),xe=null)}}),De.apply(this,arguments)}function Mt(){xe&&xe.abort()}function k(W){var ce=arguments.length>1&&arguments[1]!==void 0?arguments[1]:sv;if(se)try{if(W&&W.length>0){var{from:_e}=cd(r(n).escapeValue(r(pe)),W);_e!==void 0&&(se.dispatch({selection:{anchor:_e,head:_e}}),H1(se))}else J1(se);ce?.(W)}catch(q){z()(q)}}function S(){k([],()=>!0)}function A(){wt([],!0)}var $=!1;function oe(W){return Se(W,!1)}function Se(W,ce){I("handlePatch",W,ce);var _e=y().parse(r(pe)),q=Bo(_e,W),Y=wg(_e,W);return Pt({text:y().stringify(q,null,v())},ce,!1),{json:q,previousJson:_e,undo:Y,redo:W}}function Ee(){if(I("format"),a())return!1;try{var W=y().parse(r(pe));return Pt({text:y().stringify(W,null,v())},!0,!1),f(me,l()),!0}catch(ce){z()(ce)}return!1}function Z(){if(I("compact"),a())return!1;try{var W=y().parse(r(pe));return Pt({text:y().stringify(W)},!0,!1),f(me,!1),!0}catch(ce){z()(ce)}return!1}function ne(){if(I("repair"),!a())try{Pt({text:aa(r(pe))},!0,!1),f(ye,hd),f($t,void 0)}catch(W){z()(W)}}function lt(){var W;if(!a())try{var ce=y().parse(r(pe));$=!0,K()({id:st,json:ce,rootPath:[],onSort:(W=gt(function*(_e){var{operations:q}=_e;I("onSort",q),Se(q,!0)}),function(_e){return W.apply(this,arguments)}),onClose:()=>{$=!1,Ce()}})}catch(_e){z()(_e)}}function tt(W){var{id:ce,rootPath:_e,onTransform:q,onClose:Y}=W;try{var be=y().parse(r(pe));$=!0,J()({id:ce||it,json:be,rootPath:_e||[],onTransform:Pe=>{q?q({operations:Pe,json:be,transformedJson:Bo(be,Pe)}):(I("onTransform",Pe),Se(Pe,!0))},onClose:()=>{$=!1,Ce(),Y&&Y()}})}catch(Pe){z()(Pe)}}function Fe(){a()||tt({rootPath:[]})}function He(){se&&(r(ze)&&r(ze).querySelector(".cm-search")?Y1(se):Q1(se))}function Nt(){if(a())return!1;Gn();var W=d().undo();return I("undo",W),Fp(W)?(se.dispatch({annotations:G.of("undo"),changes:Kf.fromJSON(W.undo.changes),selection:Yu.fromJSON(W.undo.selection),scrollIntoView:!0}),!0):(O()(W),!1)}function kn(){if(a())return!1;Gn();var W=d().redo();return I("redo",W),Fp(W)?(se.dispatch({annotations:G.of("redo"),changes:Kf.fromJSON(W.redo.changes),selection:Yu.fromJSON(W.redo.selection),scrollIntoView:!0}),!0):(w()(W),!1)}function En(){f(ue,!0),Pt(c(),!0,!0)}function qt(){C()(kr.tree)}function pn(){ir()}function Bt(W){I("select validation error",W);var{from:ce,to:_e}=Et(W);ce!==void 0&&_e!==void 0&&(Yt(ce,_e),Ce())}function Yt(W,ce){I("setSelection",{anchor:W,head:ce}),se&&se.dispatch(se.state.update({selection:{anchor:W,head:ce},scrollIntoView:!0}))}function dn(W,ce){if(ce.state.selection.ranges.length===1){var _e=ce.state.selection.ranges[0],q=r(pe).slice(_e.from,_e.to);if(q==="{"||q==="["){var Y=Cu.parse(r(pe)),be=Object.keys(Y.pointers).find(nt=>{var rt;return((rt=Y.pointers[nt].value)===null||rt===void 0?void 0:rt.pos)===_e.from}),Pe=Y.pointers[be];be&&Pe&&Pe.value&&Pe.valueEnd&&(I("pointer found, selecting inner contents of path:",be,Pe),Yt(Pe.value.pos+1,Pe.valueEnd.pos-1))}}}function pt(){return mj(jn,{delay:300})}function on(){return!!r(ze)&&getComputedStyle(r(ze)).getPropertyValue("--jse-theme").includes("dark")}function Et(W){var{path:ce,message:_e,severity:q}=W,{line:Y,column:be,from:Pe,to:nt}=cd(r(n).escapeValue(r(pe)),ce);return{path:ce,line:Y,column:be,from:Pe,to:nt,message:_e,severity:q,actions:[]}}function Ge(W,ce){var{line:_e,column:q,position:Y,message:be}=W;return{path:[],line:_e,column:q,from:Y,to:Y,severity:Vo.error,message:be,actions:ce&&!a()?[{name:"Auto repair",apply:()=>ne()}]:void 0}}function Ft(W){return{from:W.from||0,to:W.to||0,message:W.message||"",actions:W.actions,severity:W.severity}}function Pt(W,ce,_e){var q=nv(W,v(),y()),Y=!Lt(W,B),be=B;I("setCodeMirrorContent",{isChanged:Y,emitChange:ce,forceUpdate:_e}),se&&(Y||_e)&&(B=W,f(pe,q),Xn(r(pe),r(ue))||se.dispatch({changes:{from:0,to:se.state.doc.length,insert:r(n).escapeValue(r(pe))}}),te(),Y&&ce&&Sr(B,be))}function _n(W){return bd(W)?Yu.fromJSON(W):void 0}function Ln(){return Dn.apply(this,arguments)}function Dn(){return Dn=gt(function*(){I("refresh"),yield function(){return Wn.apply(this,arguments)}()}),Dn.apply(this,arguments)}function ir(){if(se){var W=se?r(n).unescapeValue(se.state.doc.toString()):"",ce=W!==r(pe);if(I("onChangeCodeMirrorValue",{isChanged:ce}),ce){var _e=B;f(pe,W),B={text:r(pe)},te(),Sr(B,_e),Fn(),fr()}}}function Wn(){return(Wn=gt(function*(){if(Fn(),se){var W=on();return I("updateTheme",{dark:W}),se.dispatch({effects:[ge.reconfigure(qo.theme({},{dark:W}))]}),new Promise(ce=>setTimeout(ce))}return Promise.resolve()})).apply(this,arguments)}function tr(W){var ce=F1.of(typeof W=="number"?" ".repeat(W):W);return W==="	"?[ce]:[ce,$S]}xf({onMount:Zr,onDestroy:Ro,getWindow:()=>tc(r(Ie)),hasFocus:()=>$&&document.hasFocus()||af(r(Ie)),onFocus:U(),onBlur:()=>{Gn(),ae()()}});var vr=Kc(ir,300);function Gn(){vr.flush()}function Sr(W,ce){x()&&x()(W,ce,{contentErrors:$n(),patchResult:void 0})}function fr(){T()(yr(r(Ue).selection))}function yr(W){return Ae({type:Nn.text},W.toJSON())}function Xn(W,ce){return!!W&&W.length>fd&&!ce}var ye=N(hd,!0),$t=N(void 0,!0);function jn(){if(Xn(r(pe),r(ue)))return[];var W=$n();if(Bp(W)){var{parseError:ce,isRepairable:_e}=W;return[Ft(Ge(ce,_e))]}return ow(W)?W.validationErrors.map(Et).map(Ft):[]}function $n(){I("validate:start"),Gn();var W=sr(r(n).escapeValue(r(pe)),b(),y(),j());return Bp(W)?(f(ye,W.isRepairable?Ip:"invalid"),f($t,W.parseError),f(Me,[])):(f(ye,hd),f($t,void 0),f(Me,W?.validationErrors||[])),I("validate:end"),W}var sr=Sl(_k);function zr(){r($t)&&function(W){I("select parse error",W);var ce=Ge(W,!1);Yt(ce.from!=null?ce.from:0,ce.to!=null?ce.to:0),Ce()}(r($t))}var Ht={icon:qb,text:"Show me",title:"Move to the parse error location",onClick:zr};X(()=>m(g()),()=>{f(n,rf({escapeControlCharacters:!1,escapeUnicodeCharacters:g()}))}),X(()=>m(c()),()=>{Pt(c(),!1,!1)}),X(()=>m(u()),()=>{(function(W){if(bd(W)){var ce=_n(W);!se||!ce||r(Ue)&&r(Ue).selection.eq(ce)||(I("applyExternalSelection",ce),se.dispatch({selection:ce}))}})(u())}),X(()=>m(b()),()=>{(function(W){I("updateLinter",W),se&&se.dispatch({effects:mt.reconfigure(pt())})})(b())}),X(()=>m(v()),()=>{(function(W){se&&(I("updateIndentation",W),se.dispatch({effects:fe.reconfigure(tr(W))}))})(v())}),X(()=>m(p()),()=>{(function(W){se&&(I("updateTabSize",W),se.dispatch({effects:H.reconfigure(rs.tabSize.of(W))}))})(p())}),X(()=>m(a()),()=>{(function(W){se&&(I("updateReadOnly",W),se.dispatch({effects:[Gt.reconfigure(rs.readOnly.of(W))]}))})(a())}),X(()=>(r(L),m(g())),()=>{r(L)!==g()&&(f(L,g()),I("forceUpdateText",{escapeUnicodeCharacters:g()}),se&&se.dispatch({changes:{from:0,to:se.state.doc.length,insert:r(n).escapeValue(r(pe))}}))}),X(()=>(r(ye),m(a()),ci),()=>{f(o,r(ye)!==Ip||a()?[Ht]:[{icon:ci,text:"Auto repair",title:"Automatically repair JSON",onClick:ne},Ht])}),wn();var jr={focus:Ce,collapse:wt,expand:k,patch:oe,handlePatch:Se,openTransformModal:tt,refresh:Ln,flush:Gn,validate:$n};zt(!0);var Wr,Zn=BS(),Ur=P(Zn),Mn=W=>{var ce=Ze(()=>(r(pe),D(()=>r(pe).length===0))),_e=Ze(()=>!r(ce)),q=Ze(()=>!r(ce)),Y=Ze(()=>!r(ce)),be=Ze(()=>!r(ce)),Pe=Ze(()=>!r(ce)),nt=Ze(()=>!r(ce));(function(rt,ct){ut(ct,!1);var In=N(void 0,!0),Jt=h(ct,"readOnly",9,!1),an=h(ct,"onExpandAll",9),At=h(ct,"onCollapseAll",9),Zt=h(ct,"onFormat",9),Rr=h(ct,"onCompact",9),bt=h(ct,"onSort",9),gn=h(ct,"onTransform",9),Qt=h(ct,"onToggleSearch",9),hn=h(ct,"onUndo",9),Bn=h(ct,"onRedo",9),An=h(ct,"canExpandAll",9),kt=h(ct,"canCollapseAll",9),Or=h(ct,"canUndo",9),hr=h(ct,"canRedo",9),Pr=h(ct,"canFormat",9),Cn=h(ct,"canCompact",9),Tn=h(ct,"canSort",9),xr=h(ct,"canTransform",9),_=h(ct,"onRenderMenu",9),Q=N(void 0,!0),je=N(void 0,!0),$e={type:"button",icon:wu,title:"Search (Ctrl+F)",className:"jse-search",onClick:Qt()},ve=N(void 0,!0);X(()=>(m(an()),m(An())),()=>{f(Q,{type:"button",icon:E0,title:"Expand all",className:"jse-expand-all",onClick:an(),disabled:!An()})}),X(()=>(m(At()),m(kt())),()=>{f(je,{type:"button",icon:_0,title:"Collapse all",className:"jse-collapse-all",onClick:At(),disabled:!kt()})}),X(()=>(m(Jt()),r(Q),r(je),m(Zt()),m(Pr()),m(Rr()),m(Cn()),m(bt()),m(Tn()),m(gn()),m(xr()),m(hn()),m(Or()),m(Bn()),m(hr())),()=>{f(ve,Jt()?[r(Q),r(je),{type:"separator"},$e,{type:"space"}]:[r(Q),r(je),{type:"separator"},{type:"button",icon:bh,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Zt(),disabled:Jt()||!Pr()},{type:"button",icon:AC,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:Rr(),disabled:Jt()||!Cn()},{type:"separator"},{type:"button",icon:Wc,title:"Sort",className:"jse-sort",onClick:bt(),disabled:Jt()||!Tn()},{type:"button",icon:Vc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:gn(),disabled:Jt()||!xr()},$e,{type:"separator"},{type:"button",icon:Tv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:hn(),disabled:!Or()},{type:"button",icon:zv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Bn(),disabled:!hr()},{type:"space"}])}),X(()=>(m(_()),r(ve)),()=>{f(In,_()(r(ve))||r(ve))}),wn(),zt(!0),Du(rt,{get items(){return r(In)}}),dt()})(W,{get readOnly(){return a()},onExpandAll:S,onCollapseAll:A,onFormat:Ee,onCompact:Z,onSort:lt,onTransform:Fe,onToggleSearch:He,onUndo:Nt,onRedo:kn,get canExpandAll(){return r(_e)},get canCollapseAll(){return r(q)},get canFormat(){return r(Y)},get canCompact(){return r(be)},get canSort(){return r(Pe)},get canTransform(){return r(nt)},get canUndo(){return m(d()),D(()=>d().canUndo)},get canRedo(){return m(d()),D(()=>d().canRedo)},get onRenderMenu(){return M()}})};ie(Ur,W=>{i()&&W(Mn)});var Xt=V(Ur,2),Rt=W=>{var ce=IS(),_e=V(P(ce),2),q=P(_e),Y=V(_e,2);Te(()=>To(q,"width: ".concat(r(de)>0?r(ke)/r(de)*100:0,"%"))),Oe("click",Y,Mt),R(W,ce)};ie(Xt,W=>{r(et)&&W(Rt)});var zn=V(Xt,2),pr=W=>{var ce,_e=Ze(()=>(r(pe),r(ue),D(()=>Xn(r(pe),r(ue))))),q=US(),Y=Xe(q);Qn(Y,ct=>f(ze,ct),()=>r(ze));var be=V(Y,2),Pe=ct=>{var In=qS(),Jt=Xe(In),an=Ze(()=>(m(qc),m(fd),r(pe),D(()=>"The JSON document is larger than ".concat(qc(fd),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(qc(r(pe).length),"."))));Co(Jt,{get icon(){return qi},type:"error",get message(){return r(an)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:En},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:qt},{text:"Cancel",title:"Cancel opening this large document.",onClick:pn}],onClose:Ce});var At=P(V(Jt,2));Te(Zt=>vt(At,Zt),[()=>(m(ka),r(pe),m(tu),D(()=>ka(r(pe)||"",tu)))]),R(ct,In)};ie(be,ct=>{r(_e)&&ct(Pe)});var nt=V(be,2),rt=ct=>{var In=DS(),Jt=Xe(In),an=gn=>{(function(Qt,hn){ut(hn,!1);var Bn=h(hn,"editorState",8),An=N(),kt=N(),Or=N(),hr=N(),Pr=N();X(()=>m(Bn()),()=>{var ve;f(An,(ve=Bn())===null||ve===void 0||(ve=ve.selection)===null||ve===void 0||(ve=ve.main)===null||ve===void 0?void 0:ve.head)}),X(()=>(r(An),m(Bn())),()=>{var ve;f(kt,r(An)!==void 0?(ve=Bn())===null||ve===void 0||(ve=ve.doc)===null||ve===void 0?void 0:ve.lineAt(r(An)):void 0)}),X(()=>r(kt),()=>{f(Or,r(kt)!==void 0?r(kt).number:void 0)}),X(()=>(r(kt),r(An)),()=>{f(hr,r(kt)!==void 0&&r(An)!==void 0?r(An)-r(kt).from+1:void 0)}),X(()=>m(Bn()),()=>{var ve;f(Pr,(ve=Bn())===null||ve===void 0||(ve=ve.selection)===null||ve===void 0||(ve=ve.ranges)===null||ve===void 0?void 0:ve.reduce((We,Ye)=>We+Ye.to-Ye.from,0))}),wn(),zt();var Cn=RS(),Tn=P(Cn),xr=ve=>{var We=AS(),Ye=P(We);Te(()=>{var Je;return vt(Ye,"Line: ".concat((Je=r(Or))!==null&&Je!==void 0?Je:""))}),R(ve,We)};ie(Tn,ve=>{r(Or)!==void 0&&ve(xr)});var _=V(Tn,2),Q=ve=>{var We=TS(),Ye=P(We);Te(()=>{var Je;return vt(Ye,"Column: ".concat((Je=r(hr))!==null&&Je!==void 0?Je:""))}),R(ve,We)};ie(_,ve=>{r(hr)!==void 0&&ve(Q)});var je=V(_,2),$e=ve=>{var We=zS(),Ye=P(We);Te(()=>{var Je;return vt(Ye,"Selection: ".concat((Je=r(Pr))!==null&&Je!==void 0?Je:""," characters"))}),R(ve,We)};ie(je,ve=>{r(Pr)!==void 0&&r(Pr)>0&&ve($e)}),R(Qt,Cn),dt()})(gn,{get editorState(){return r(Ue)}})};ie(Jt,gn=>{s()&&gn(an)});var At=V(Jt,2),Zt=gn=>{Co(gn,{type:"error",get icon(){return qi},get message(){return r($t),D(()=>r($t).message)},get actions(){return r(o)},onClick:zr,onClose:Ce})};ie(At,gn=>{r($t)&&gn(Zt)});var Rr=V(At,2),bt=gn=>{var Qt=Ze(()=>[{icon:bh,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:Ee},{icon:xu,text:"No thanks",title:"Close this message",onClick:()=>f(me,!1)}]);Co(gn,{type:"success",message:"Do you want to format the JSON?",get actions(){return r(Qt)},onClose:Ce})};ie(Rr,gn=>{r($t),r(me),m(Np),r(pe),D(()=>!r($t)&&r(me)&&Np(r(pe)))&&gn(bt)}),wf(V(Rr,2),{get validationErrors(){return r(Me)},selectError:Bt}),R(ct,In)};ie(nt,ct=>{r(_e)||ct(rt)}),Te(ct=>ce=Tt(Y,1,"jse-contents svelte-k2b9e6",null,ce,ct),[()=>({"jse-hidden":r(_e)})]),R(W,q)},nr=W=>{R(W,LS())};return ie(zn,W=>{we?W(nr,!1):W(pr)}),Qn(Zn,W=>f(Ie,W),()=>r(Ie)),Te(W=>Wr=Tt(Zn,1,"jse-text-mode svelte-k2b9e6",null,Wr,W),[()=>({"no-main-menu":!i()})]),R(e,Zn),xt(t,"focus",Ce),xt(t,"collapse",wt),xt(t,"expand",k),xt(t,"patch",oe),xt(t,"handlePatch",Se),xt(t,"openTransformModal",tt),xt(t,"refresh",Ln),xt(t,"flush",Gn),xt(t,"validate",$n),dt(jr)}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var WS=ee('<button type="button"> </button>');Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var VS=ee('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),HS=ee('<button type="button"><span class="jse-column-name"> </span> <!></button>');Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var JS=(e,t)=>t.onClick(),KS=ee(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),YS=(e,t,n)=>t.openJSONEditorModal(r(n)),QS=(e,t,n)=>t.extractPath(r(n)),GS=ee('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),XS=ee('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),ZS=(e,t)=>t.onChangeMode(kr.tree),e2=ee('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function t2(e,t){ut(t,!0);var n=vo(()=>t.json?function(b){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,x=[];return function C(T,O){br(T)&&O.length<j&&Object.keys(T).forEach(w=>{C(T[w],O.concat(w))}),ur(T)&&x.push(O)}(b,[]),x}(t.json).slice(0,99).filter(b=>b.length>0):[]),o=vo(()=>!fn(r(n))),a=vo(()=>t.json===void 0&&(t.text===""||t.text===void 0)),i=vo(()=>r(o)?"Object with nested arrays":r(a)?"An empty document":br(t.json)?"An object":ur(t.json)?"An empty array":"A ".concat(nf(t.json,t.parser))),s=e2();s.__click=[JS,t];var l=V(P(s),2),c=P(l),u=P(c),d=V(c,2),v=P(d),p=b=>{R(b,Fr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},g=b=>{var j=Ut(),x=Xe(j),C=O=>{R(O,KS())},T=O=>{var w=Fr();Te(()=>{var z;return vt(w,"".concat((z=r(i))!==null&&z!==void 0?z:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),R(O,w)};ie(x,O=>{r(a)&&!t.readOnly?O(C):O(T,!1)},!0),R(b,j)};ie(v,b=>{r(o)?b(p):b(g,!1)});var y=V(d,2);dr(y,17,()=>r(n),Cr,(b,j)=>{var x=vo(()=>function(K){return Ke(t.json,K).length}(r(j))),C=XS(),T=P(C),O=P(T),w=P(V(O)),z=V(T,2);z.__click=[YS,t,j];var U=P(z),ae=V(z,2),M=K=>{var J=GS();J.__click=[QS,t,j],R(K,J)};ie(ae,K=>{t.readOnly||K(M)}),Te(K=>{var J;vt(O,'"'.concat(K??"",'" ')),vt(w,"(".concat((J=r(x))!==null&&J!==void 0?J:""," ").concat(r(x)!==1?"items":"item",")")),vt(U,t.readOnly?"View":"Edit")},[()=>Br(r(j))]),R(b,C)}),V(y,2).__click=[ZS,t],Te(()=>vt(u,r(i))),R(e,s),dt()}Xl(["click"]);Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var n2=ee('<button type="button"><!></button>');Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var r2=ee('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),o2=ee('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),a2=ee('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),i2=ee('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),s2=ee('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),l2=ee('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),c2=ee('<td class="jse-table-cell svelte-1p86y3c"></td>'),u2=ee('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),d2=ee('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),v2=ee("<!> <!>",1),f2=ee('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),p2=ee('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),h2=ee('<div role="table"><!> <!></div> <!> <!>',1);function g2(e,t){ut(t,!1);var n=N(void 0,!0),o=N(void 0,!0),a=N(void 0,!0),i=Dr("jsoneditor:TableMode"),{openAbsolutePopup:s,closeAbsolutePopup:l}=gi("absolute-popup"),c=w0(),u=Ts(),d=Ts(),v=typeof window>"u";i("isSSR:",v);var p=h(t,"readOnly",9),g=h(t,"externalContent",9),y=h(t,"externalSelection",9),b=h(t,"history",9),j=h(t,"truncateTextSize",9),x=h(t,"mainMenuBar",9),C=h(t,"escapeControlCharacters",9),T=h(t,"escapeUnicodeCharacters",9),O=h(t,"flattenColumns",9),w=h(t,"parser",9),z=h(t,"parseMemoizeOne",9),U=h(t,"validator",9),ae=h(t,"validationParser",9),M=h(t,"indentation",9),K=h(t,"onChange",9),J=h(t,"onChangeMode",9),I=h(t,"onSelect",9),re=h(t,"onUndo",9),we=h(t,"onRedo",9),se=h(t,"onRenderValue",9),ze=h(t,"onRenderMenu",9),Ie=h(t,"onRenderContextMenu",9),Ue=h(t,"onFocus",9),ue=h(t,"onBlur",9),me=h(t,"onSortModal",9),Me=h(t,"onTransformModal",9),et=h(t,"onJSONEditorModal",9),ke=N(void 0,!0),de=N(void 0,!0),xe=N(void 0,!0),mt=N(void 0,!0),Gt=N(void 0,!0);xf({onMount:Zr,onDestroy:Ro,getWindow:()=>tc(r(de)),hasFocus:()=>De&&document.hasFocus()||af(r(de)),onFocus:()=>{Mt=!0,Ue()&&Ue()()},onBlur:()=>{Mt=!1,ue()&&ue()()}});var fe,H=N(void 0,!0),ge=N(void 0,!0),B=N(void 0,!0),pe=N(void 0,!0),G=N(void 0,!0),qe=N(void 0,!0),te=N(!1,!0),L=N(!1,!0);function st(_){f(qe,(fe=_)?c0(r(H),fe.items):void 0)}function it(_){return Ce.apply(this,arguments)}function Ce(){return(Ce=gt(function*(_){f(ne,void 0),yield Ln(_)})).apply(this,arguments)}function wt(){f(te,!1),f(L,!1),Ge()}var Le=N(1e4,!0),Ve=N([],!0),ht=N(void 0,!0),De=!1,Mt=!1,k=N(!1,!0),S=N({},!0),A=N(600,!0),$=N(0,!0),oe=18;function Se(_){f(ne,_)}function Ee(_){r(ne)&&_!==void 0&&(Ao(_,$i(r(ne)))&&Ao(_,ot(r(ne)))||(i("clearing selection: path does not exist anymore",r(ne)),f(ne,void 0)))}var Z=N(r(H)!==void 0?iv({json:r(H)}):void 0,!0),ne=N(Rl(y())?y():void 0,!0),lt=N(void 0,!0),tt=N(!1,!0);function Fe(_){if(!p()){i("onSortByHeader",_);var Q=_.sortDirection===Mo.desc?-1:1;Yt(M0(r(H),[],_.path,Q),(je,$e)=>({state:$e,sortedColumn:_}))}}Zr(()=>{r(ne)&&ir(ot(r(ne)))});var He=N(void 0,!0);function Nt(_){if(_.json!==void 0||_.text!==void 0){var Q=r(H)!==void 0&&_.json!==void 0;b().add({type:"tree",undo:{patch:Q?[{op:"replace",path:"",value:_.json}]:void 0,json:_.json,text:_.text,documentState:_.documentState,textIsRepaired:_.textIsRepaired,selection:na(_.selection),sortedColumn:_.sortedColumn},redo:{patch:Q?[{op:"replace",path:"",value:r(H)}]:void 0,json:r(H),text:r(ge),documentState:r(Z),textIsRepaired:r(tt),selection:na(r(ne)),sortedColumn:r(lt)}})}}var kn=N([],!0),En=Sl(k0);function qt(_,Q,je,$e){xs(()=>{var ve;try{ve=En(_,Q,je,$e)}catch(We){ve=[{path:[],message:"Failed to validate: "+We.message,severity:Vo.warning}]}Lt(ve,r(kn))||(i("validationErrors changed:",ve),f(kn,ve))},ve=>i("validationErrors updated in ".concat(ve," ms")))}function pn(){return i("validate"),r(B)?{parseError:r(B),isRepairable:!1}:(qt(r(H),U(),w(),ae()),fn(r(kn))?void 0:{validationErrors:r(kn)})}function Bt(_,Q){if(i("patch",_,Q),r(H)===void 0)throw new Error("Cannot apply patch: no JSON");var je=r(H),$e={json:void 0,text:r(ge),documentState:r(Z),selection:na(r(ne)),sortedColumn:r(lt),textIsRepaired:r(tt)},ve=l0(r(H),_),We=Qm(r(H),r(Z),_),Ye=nS(r(lt),_,r(Ve)),Je=typeof Q=="function"?Q(We.json,We.documentState,r(ne)):void 0;return f(H,Je?.json!==void 0?Je.json:We.json),f(Z,Je?.state!==void 0?Je.state:We.documentState),f(ne,Je?.selection!==void 0?Je.selection:r(ne)),f(lt,Je?.sortedColumn!==void 0?Je.sortedColumn:Ye),f(ge,void 0),f(tt,!1),f(pe,void 0),f(G,void 0),f(B,void 0),b().add({type:"tree",undo:Ae({patch:ve},$e),redo:{patch:_,json:void 0,text:void 0,documentState:r(Z),selection:na(r(ne)),sortedColumn:r(lt),textIsRepaired:r(tt)}}),{json:r(H),previousJson:je,undo:ve,redo:_}}function Yt(_,Q){i("handlePatch",_,Q);var je={json:r(H),text:r(ge)},$e=Bt(_,Q);return dn(je,$e),$e}function dn(_,Q){if((_.json!==void 0||_?.text!==void 0)&&K()){if(r(ge)!==void 0){var je={text:r(ge),json:void 0};K()(je,_,{contentErrors:pn(),patchResult:Q})}else if(r(H)!==void 0){var $e={text:void 0,json:r(H)};K()($e,_,{contentErrors:pn(),patchResult:Q})}}}function pt(_){i("pasted json as text",_),f(pe,_)}function on(_){i("pasted multiline text",{pastedText:_}),f(G,_)}function Et(_){var Q=parseInt(_[0],10),je=[String(Q+1),..._.slice(1)];return Ao(r(H),je)?Kt(je):Kt(_)}function Ge(){i("focus"),r(mt)&&(r(mt).focus(),r(mt).select())}function Ft(_){f($,_.target.scrollTop)}function Pt(){r(ne)||f(ne,function(){if(ur(r(H))&&!fn(r(H))&&!fn(r(Ve)))return Kt(["0",...r(Ve)[0]])}())}function _n(){if(r(tt)&&r(H)!==void 0){var _={json:r(H),text:r(ge)},Q={json:r(H),documentState:r(Z),selection:r(ne),sortedColumn:r(lt),text:r(ge),textIsRepaired:r(tt)};f(ge,void 0),f(tt,!1),Ee(r(H)),Nt(Q),dn(_,void 0)}return{json:r(H),text:r(ge)}}function Ln(_){var{scrollToWhenVisible:Q=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},je=r(te)?gl:0,$e=jh(_,r(Ve),S,oe),ve=$e-r($)+je+oe,We=Wn(_);if(i("scrollTo",{path:_,top:$e,scrollTop:r($),elem:We}),!r(xe))return Promise.resolve();var Ye=r(xe).getBoundingClientRect();if(We&&!Q){var Je=We.getBoundingClientRect();if(Je.bottom>Ye.top&&Je.top<Ye.bottom)return Promise.resolve()}var Dt=-Math.max(je+2*oe,Ye.height/4);return new Promise(We?sn=>{c(We,{container:r(xe),offset:Dt,duration:300,callback:()=>{Dn(_),sn()}})}:sn=>{c(ve,{container:r(xe),offset:Dt,duration:300,callback:()=>{Fn(),Dn(_),sn()}})})}function Dn(_){var Q=Wn(_);if(Q&&r(xe)){var je=r(xe).getBoundingClientRect(),$e=Q.getBoundingClientRect();if($e.right>je.right){var ve=$e.right-je.right;jo(xe,r(xe).scrollLeft+=ve)}if($e.left<je.left){var We=je.left-$e.left;jo(xe,r(xe).scrollLeft-=We)}}}function ir(_){(function(Q){if(r(xe)){var{rowIndex:je}=Eo(Q,r(Ve)),$e=jh(Q,r(Ve),S,oe),ve=$e+(S[je]||oe),We=oe,Ye=r(xe).getBoundingClientRect(),Je=r($),Dt=r($)+Ye.height-We;if(ve>Dt){var sn=ve-Dt;jo(xe,r(xe).scrollTop+=sn)}if($e<Je){var en=Je-$e;jo(xe,r(xe).scrollTop-=en)}}})(_),Dn(_)}function Wn(_){var Q,je,$e=r(Ve).find(We=>la(_.slice(1),We)),ve=$e?_.slice(0,1).concat($e):_;return(Q=(je=r(xe))===null||je===void 0?void 0:je.querySelector('td[data-path="'.concat($c(ve),'"]')))!==null&&Q!==void 0?Q:void 0}function tr(_){var Q,{anchor:je,left:$e,top:ve,width:We,height:Ye,offsetTop:Je,offsetLeft:Dt,showTip:sn}=_,en=function(F){var{json:he,documentState:Be,selection:Ne,readOnly:Re,onEditValue:Ct,onEditRow:St,onToggleEnforceString:Wt,onCut:Sn,onCopy:tn,onPaste:Un,onRemove:_t,onDuplicateRow:rr,onInsertBeforeRow:Rn,onInsertAfterRow:Hn,onRemoveRow:mn}=F,yt=he!==void 0,ln=!!Ne,jt=he!==void 0&&Ne?Ke(he,ot(Ne)):void 0,at=yt&&(Pn(Ne)||$r(Ne)||vn(Ne)),It=!Re&&yt&&Ne!==void 0&&ou(Ne),er=It&&!ar(jt),Jn=!Re&&at,wr=Ne!==void 0&&oa(he,Be,ot(Ne));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>Ct(),icon:ws,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!It},width:"11em",items:[{type:"button",icon:ws,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>Ct(),disabled:!It},{type:"button",icon:wr?ig:sg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Wt(),disabled:!er}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Sn(!0),icon:ks,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Jn},width:"10em",items:[{type:"button",icon:ks,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>Sn(!0),disabled:Re||!at},{type:"button",icon:ks,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>Sn(!1),disabled:Re||!at}]},{type:"dropdown-button",main:{type:"button",onClick:()=>tn(!0),icon:Xa,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!at},width:"12em",items:[{type:"button",icon:Xa,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>tn(!1),disabled:!at},{type:"button",icon:Xa,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>tn(!1),disabled:!at}]},{type:"button",onClick:()=>Un(),icon:lg,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Re||!ln},{type:"button",onClick:()=>_t(),icon:Td,text:"Remove",title:"Remove selected contents (Delete)",disabled:Re||!at}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>St(),icon:ws,text:"Edit row",title:"Edit the current row",disabled:Re||!ln||!yt},{type:"button",onClick:()=>rr(),icon:cg,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Re||!ln||!yt},{type:"button",onClick:()=>Rn(),icon:gs,text:"Insert before",title:"Insert a row before the current row",disabled:Re||!ln||!yt},{type:"button",onClick:()=>Hn(),icon:gs,text:"Insert after",title:"Insert a row after the current row",disabled:Re||!ln||!yt},{type:"button",onClick:()=>mn(),icon:Td,text:"Remove row",title:"Remove current row",disabled:Re||!ln||!yt}]}]}]}({json:r(H),documentState:r(Z),selection:r(ne),readOnly:p(),onEditValue:Sr,onEditRow:fr,onToggleEnforceString:yr,onCut:Wr,onCopy:Ur,onPaste:$t,onRemove:Xt,onDuplicateRow:zn,onInsertBeforeRow:pr,onInsertAfterRow:nr,onRemoveRow:W}),Vn=(Q=Ie()(en))!==null&&Q!==void 0?Q:en;if(Vn!==!1){var Nr={left:$e,top:ve,offsetTop:Je,offsetLeft:Dt,width:We,height:Ye,anchor:je,closeOnOuterClick:!0,onClose:()=>{De=!1,Ge()}};De=!0;var E=s(D0,{tip:sn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Vn,onRequestClose(){l(E),Ge()}},Nr)}}function vr(_){if(!Ir(r(ne)))if(_&&(_.stopPropagation(),_.preventDefault()),_&&_.type==="contextmenu"&&_.target!==r(mt))tr({left:_.clientX,top:_.clientY,width:Sa,height:Ca,showTip:!1});else{var Q,je=(Q=r(xe))===null||Q===void 0?void 0:Q.querySelector(".jse-table-cell.jse-selected-value");if(je)tr({anchor:je,offsetTop:2,width:Sa,height:Ca,showTip:!1});else{var $e,ve=($e=r(xe))===null||$e===void 0?void 0:$e.getBoundingClientRect();ve&&tr({top:ve.top+2,left:ve.left+2,width:Sa,height:Ca,showTip:!1})}}}function Gn(_){tr({anchor:Vm(_.target,"BUTTON"),offsetTop:0,width:Sa,height:Ca,showTip:!0})}function Sr(){if(!p()&&r(ne)){var _=ot(r(ne));ar(Ke(r(H),_))?rt(_):f(ne,Kt(_))}}function fr(){!p()&&r(ne)&&rt(ot(r(ne)).slice(0,1))}function yr(){if(!p()&&vn(r(ne))){var _=r(ne).path,Q=ft(_),je=Ke(r(H),_),$e=!oa(r(H),r(Z),_),ve=$e?String(je):Qs(String(je),w());i("handleToggleEnforceString",{enforceString:$e,value:je,updatedValue:ve}),Yt([{op:"replace",path:Q,value:ve}],(We,Ye)=>({state:Ru(r(H),Ye,_,{type:"value",enforceString:$e})}))}}function Xn(){return ye.apply(this,arguments)}function ye(){return(ye=gt(function*(){if(i("apply pasted json",r(pe)),r(pe)){var{onPasteAsJson:_}=r(pe);_(),setTimeout(Ge)}})).apply(this,arguments)}function $t(){return jn.apply(this,arguments)}function jn(){return(jn=gt(function*(){try{q(yield navigator.clipboard.readText())}catch(_){console.error(_),f(k,!0)}})).apply(this,arguments)}function $n(){return sr.apply(this,arguments)}function sr(){return(sr=gt(function*(){i("apply pasted multiline text",r(G)),r(G)&&(q(JSON.stringify(r(G))),setTimeout(Ge))})).apply(this,arguments)}function zr(){i("clear pasted json"),f(pe,void 0),Ge()}function Ht(){i("clear pasted multiline text"),f(G,void 0),Ge()}function jr(){J()(kr.text)}function Wr(_){return Zn.apply(this,arguments)}function Zn(){return(Zn=gt(function*(_){yield R0({json:r(H),selection:r(ne),indentation:_?M():void 0,readOnly:p(),parser:w(),onPatch:Yt})})).apply(this,arguments)}function Ur(){return Mn.apply(this,arguments)}function Mn(){return Mn=gt(function*(){var _=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];r(H)!==void 0&&(yield P0({json:r(H),selection:r(ne),indentation:_?M():void 0,parser:w()}))}),Mn.apply(this,arguments)}function Xt(){$0({json:r(H),text:r(ge),selection:r(ne),keepSelection:!0,readOnly:p(),onChange:K(),onPatch:Yt})}function Rt(_){p()||(i("extract",{path:_}),Yt(a0(r(H),Kt(_))))}function zn(){(function(_){var{json:Q,selection:je,columns:$e,readOnly:ve,onPatch:We}=_;if(!ve&&Q!==void 0&&je&&ys(je)){var{rowIndex:Ye,columnIndex:Je}=Eo(ot(je),$e);to("duplicate row",{rowIndex:Ye});var Dt=[String(Ye)];We(o0(Q,[Dt]),(sn,en)=>({state:en,selection:Kt(Si({rowIndex:Ye<Q.length?Ye+1:Ye,columnIndex:Je},$e))}))}})({json:r(H),selection:r(ne),columns:r(Ve),readOnly:p(),onPatch:Yt})}function pr(){(function(_){var{json:Q,selection:je,columns:$e,readOnly:ve,onPatch:We}=_;if(!ve&&Q!==void 0&&je&&ys(je)){var{rowIndex:Ye}=Eo(ot(je),$e);to("insert before row",{rowIndex:Ye}),We(js(Q,[String(Ye)],[{key:"",value:br(Q[0])?{}:""}]))}})({json:r(H),selection:r(ne),columns:r(Ve),readOnly:p(),onPatch:Yt})}function nr(){(function(_){var{json:Q,selection:je,columns:$e,readOnly:ve,onPatch:We}=_;if(!ve&&Q!==void 0&&je&&ys(je)){var{rowIndex:Ye,columnIndex:Je}=Eo(ot(je),$e);to("insert after row",{rowIndex:Ye});var Dt=Ye+1,sn=[String(Dt)],en=[{key:"",value:br(Q[0])?{}:""}];We(Dt<Q.length?js(Q,sn,en):cv(Q,[],en),(Vn,Nr)=>({state:Nr,selection:Kt(Si({rowIndex:Dt,columnIndex:Je},$e))}))}})({json:r(H),selection:r(ne),columns:r(Ve),readOnly:p(),onPatch:Yt})}function W(){(function(_){var{json:Q,selection:je,columns:$e,readOnly:ve,onPatch:We}=_;if(!ve&&Q!==void 0&&je&&ys(je)){var{rowIndex:Ye,columnIndex:Je}=Eo(ot(je),$e);to("remove row",{rowIndex:Ye}),We(iu([[String(Ye)]]),(Dt,sn)=>{var en=Ye<Dt.length?Ye:Ye>0?Ye-1:void 0,Vn=en!==void 0?Kt(Si({rowIndex:en,columnIndex:Je},$e)):void 0;return to("remove row new selection",{rowIndex:Ye,newRowIndex:en,newSelection:Vn}),{state:sn,selection:Vn}})}})({json:r(H),selection:r(ne),columns:r(Ve),readOnly:p(),onPatch:Yt})}function ce(){return(ce=gt(function*(_){yield I0({char:_,selectInside:!1,json:r(H),selection:r(ne),readOnly:p(),parser:w(),onPatch:Yt,onReplaceJson:Y,onSelect:Se})})).apply(this,arguments)}function _e(_){var Q;_.preventDefault(),q((Q=_.clipboardData)===null||Q===void 0?void 0:Q.getData("text/plain"))}function q(_){_!==void 0&&N0({clipboardText:_,json:r(H),selection:r(ne),readOnly:p(),parser:w(),onPatch:Yt,onChangeText:be,onPasteMultilineText:on,openRepairModal:ct})}function Y(_,Q){var je={json:r(H),text:r(ge)},$e={json:r(H),documentState:r(Z),selection:r(ne),sortedColumn:r(lt),text:r(ge),textIsRepaired:r(tt)},ve=yo(_,r(Z)),We=typeof Q=="function"?Q(_,ve,r(ne)):void 0;f(H,We?.json!==void 0?We.json:_),f(Z,We?.state!==void 0?We.state:ve),f(ne,We?.selection!==void 0?We.selection:r(ne)),f(lt,void 0),f(ge,void 0),f(tt,!1),f(B,void 0),Ee(r(H)),Nt($e),dn(je,void 0)}function be(_,Q){i("handleChangeText");var je={json:r(H),text:r(ge)},$e={json:r(H),documentState:r(Z),selection:r(ne),sortedColumn:r(lt),text:r(ge),textIsRepaired:r(tt)};try{f(H,z()(_)),f(Z,yo(r(H),r(Z))),f(ge,void 0),f(tt,!1),f(B,void 0)}catch(We){try{f(H,z()(aa(_))),f(Z,yo(r(H),r(Z))),f(ge,_),f(tt,!0),f(B,void 0)}catch{f(H,void 0),f(Z,void 0),f(ge,_),f(tt,!1),f(B,r(ge)!==""?qs(r(ge),We.message||String(We)):void 0)}}if(typeof Q=="function"){var ve=Q(r(H),r(Z),r(ne));f(H,ve?.json!==void 0?ve.json:r(H)),f(Z,ve?.state!==void 0?ve.state:r(Z)),f(ne,ve?.selection!==void 0?ve.selection:r(ne))}Ee(r(H)),Nt($e),dn(je,void 0)}function Pe(_){i("select validation error",_),f(ne,Kt(_.path)),Ln(_.path)}function nt(_){if(r(H)!==void 0){var{id:Q,onTransform:je,onClose:$e}=_,ve=_.rootPath||[];De=!0,Me()({id:Q||d,json:r(H),rootPath:ve||[],onTransform:We=>{je?je({operations:We,json:r(H),transformedJson:Bo(r(H),We)}):(i("onTransform",ve,We),Yt(We))},onClose:()=>{De=!1,setTimeout(Ge),$e&&$e()}})}}function rt(_){i("openJSONEditorModal",{path:_}),De=!0,et()({content:{json:Ke(r(H),_)},path:_,onPatch:Yt,onClose:()=>{De=!1,setTimeout(Ge)}})}function ct(_,Q){f(Gt,{text:_,onParse:je=>ec(je,$e=>Zl($e,w())),onRepair:$m,onApply:Q,onClose:Ge})}function In(){(function(_){p()||r(H)===void 0||(De=!0,me()({id:u,json:r(H),rootPath:_,onSort:Q=>{var{operations:je,itemPath:$e,direction:ve}=Q;i("onSort",je,_,$e,ve),Yt(je,(We,Ye)=>({state:Ye,sortedColumn:{path:$e,sortDirection:ve===-1?Mo.desc:Mo.asc}}))},onClose:()=>{De=!1,setTimeout(Ge)}}))})([])}function Jt(){nt({rootPath:[]})}function an(_){i("openFind",{findAndReplace:_}),f(te,!1),f(L,!1),Fn(),f(te,!0),f(L,_)}function At(){if(!p()&&b().canUndo){var _=b().undo();if(ru(_)){var Q={json:r(H),text:r(ge)};f(H,_.undo.patch?Bo(r(H),_.undo.patch):_.undo.json),f(Z,_.undo.documentState),f(ne,_.undo.selection),f(lt,_.undo.sortedColumn),f(ge,_.undo.text),f(tt,_.undo.textIsRepaired),f(B,void 0),i("undo",{item:_,json:r(H)}),dn(Q,_.undo.patch&&_.redo.patch?{json:r(H),previousJson:Q.json,redo:_.undo.patch,undo:_.redo.patch}:void 0),Ge(),r(ne)&&Ln(ot(r(ne)),{scrollToWhenVisible:!1})}else re()(_)}}function Zt(){if(!p()&&b().canRedo){var _=b().redo();if(ru(_)){var Q={json:r(H),text:r(ge)};f(H,_.redo.patch?Bo(r(H),_.redo.patch):_.redo.json),f(Z,_.redo.documentState),f(ne,_.redo.selection),f(lt,_.redo.sortedColumn),f(ge,_.redo.text),f(tt,_.redo.textIsRepaired),f(B,void 0),i("redo",{item:_,json:r(H)}),dn(Q,_.undo.patch&&_.redo.patch?{json:r(H),previousJson:Q.json,redo:_.redo.patch,undo:_.undo.patch}:void 0),Ge(),r(ne)&&Ln(ot(r(ne)),{scrollToWhenVisible:!1})}else we()(_)}}function Rr(_){f(A,_.getBoundingClientRect().height)}X(()=>(m(C()),m(T())),()=>{f(ke,rf({escapeControlCharacters:C(),escapeUnicodeCharacters:T()}))}),X(()=>r(te),()=>{(function(_){if(r(xe)){var Q=_?gl:-100;r(xe).scrollTo({top:jo(xe,r(xe).scrollTop+=Q),left:r(xe).scrollLeft})}})(r(te))}),X(()=>m(g()),()=>{(function(_){var Q={json:r(H)},je=_l(_)?_.text!==r(ge):!Lt(Q.json,_.json);if(i("update external content",{isChanged:je}),je){var $e={json:r(H),documentState:r(Z),selection:r(ne),sortedColumn:r(lt),text:r(ge),textIsRepaired:r(tt)};if(_l(_))try{f(H,z()(_.text)),f(Z,yo(r(H),r(Z))),f(ge,_.text),f(tt,!1),f(B,void 0)}catch(ve){try{f(H,z()(aa(_.text))),f(Z,yo(r(H),r(Z))),f(ge,_.text),f(tt,!0),f(B,void 0)}catch{f(H,void 0),f(Z,void 0),f(ge,_.text),f(tt,!1),f(B,r(ge)!==""?qs(r(ge),ve.message||String(ve)):void 0)}}else f(H,_.json),f(Z,yo(r(H),r(Z))),f(ge,void 0),f(tt,!1),f(B,void 0);Ee(r(H)),f(lt,void 0),Nt($e)}})(g())}),X(()=>m(y()),()=>{(function(_){Lt(r(ne),_)||(i("applyExternalSelection",{selection:r(ne),externalSelection:_}),Rl(_)&&f(ne,_))})(y())}),X(()=>(r(Ve),r(H),m(O()),r(Le)),()=>{f(Ve,ur(r(H))?function(_,Q){var je=new Set(Q.map(ft)),$e=new Set(_.map(ft));for(var ve of je)$e.has(ve)||je.delete(ve);for(var We of $e)je.has(We)||je.add(We);return[...je].map(fo)}(XC(r(H),O(),r(Le)),r(Ve)):[])}),X(()=>(r(H),r(Ve)),()=>{f(ht,!(!r(H)||fn(r(Ve))))}),X(()=>(r(H),r(Le)),()=>{f(n,Array.isArray(r(H))&&r(H).length>r(Le))}),X(()=>(r($),r(A),r(H),r(te),gl),()=>{f(o,ZC(r($),r(A),r(H),S,oe,r(te)?gl:0))}),X(()=>r(H),()=>{r(H),r(xe)&&r(xe).scrollTo({top:r(xe).scrollTop,left:r(xe).scrollLeft})}),X(()=>r(ne),()=>{var _;_=r(ne),Lt(_,y())||(i("onSelect",_),I()(_))}),X(()=>(m(p()),m(j()),m(w()),r(ke),r(H),r(Z),m(se())),()=>{f(He,{mode:kr.table,readOnly:p(),truncateTextSize:j(),parser:w(),normalization:r(ke),getJson:()=>r(H),getDocumentState:()=>r(Z),findElement:Wn,findNextInside:Et,focus:Ge,onPatch:(_,Q)=>Yt(function(je,$e){return je.flatMap(ve=>{if(Dv(ve)){var We=fo(ve.path);if(We.length>0){for(var Ye=[ve],Je=nn(We);Je.length>0&&!Ao($e,Je);)Ye.unshift({op:"add",path:ft(Je),value:{}}),Je=nn(Je);return Ye}}return ve})}(_,r(H)),Q),onSelect:Se,onFind:an,onPasteJson:pt,onRenderValue:se()})}),X(()=>(r(H),m(U()),m(w()),m(ae())),()=>{qt(r(H),U(),w(),ae())}),X(()=>(r(kn),r(Ve)),()=>{f(a,eS(r(kn),r(Ve)))}),wn();var bt={validate:pn,patch:Bt,focus:Ge,acceptAutoRepair:_n,scrollTo:Ln,findElement:Wn,openTransformModal:nt};zt(!0);var gn=h2();Oe("mousedown",Ma,function(_){!Gs(_.target,Q=>Q===r(de))&&Ir(r(ne))&&(i("click outside the editor, exit edit mode"),f(ne,na(r(ne))),Mt&&r(mt)&&(r(mt).focus(),r(mt).blur()),i("blur (outside editor)"),r(mt)&&r(mt).blur())});var Qt,hn=Xe(gn),Bn=P(hn),An=_=>{(function(Q,je){ut(je,!1);var $e=h(je,"containsValidArray",9),ve=h(je,"readOnly",9),We=h(je,"showSearch",13,!1),Ye=h(je,"history",9),Je=h(je,"onSort",9),Dt=h(je,"onTransform",9),sn=h(je,"onContextMenu",9),en=h(je,"onUndo",9),Vn=h(je,"onRedo",9),Nr=h(je,"onRenderMenu",9);function E(){We(!We())}var F=N(void 0,!0),he=N(void 0,!0);X(()=>(m(ve()),m(Je()),m($e()),m(Dt()),m(sn()),m(en()),m(Ye()),m(Vn())),()=>{f(F,ve()?[{type:"space"}]:[{type:"button",icon:Wc,title:"Sort",className:"jse-sort",onClick:Je(),disabled:ve()||!$e()},{type:"button",icon:Vc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Dt(),disabled:ve()||!$e()},{type:"button",icon:wu,title:"Search (Ctrl+F)",className:"jse-search",onClick:E,disabled:!$e()},{type:"button",icon:ug,title:cf,className:"jse-contextmenu",onClick:sn()},{type:"separator"},{type:"button",icon:Tv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:en(),disabled:!Ye().canUndo},{type:"button",icon:zv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Vn(),disabled:!Ye().canRedo},{type:"space"}])}),X(()=>(m(Nr()),r(F)),()=>{f(he,Nr()(r(F))||r(F))}),wn(),zt(!0),Du(Q,{get items(){return r(he)}}),dt()})(_,{get containsValidArray(){return r(ht)},get readOnly(){return p()},get history(){return b()},onSort:In,onTransform:Jt,onUndo:At,onRedo:Zt,onContextMenu:Gn,get onRenderMenu(){return ze()},get showSearch(){return r(te)},set showSearch(Q){f(te,Q)},$$legacy:!0})};ie(Bn,_=>{x()&&_(An)});var kt=V(Bn,2),Or=_=>{var Q=f2(),je=Xe(Q),$e=P(je);$e.readOnly=!0,Qn($e,Je=>f(mt,Je),()=>r(mt));var ve=V(je,2),We=Je=>{var Dt=d2(),sn=Xe(Dt);A0(P(sn),{get json(){return r(H)},get documentState(){return r(Z)},get parser(){return w()},get showSearch(){return r(te)},get showReplace(){return r(L)},get readOnly(){return p()},get columns(){return r(Ve)},onSearch:st,onFocus:it,onPatch:Yt,onClose:wt});var en=V(sn,2),Vn=P(en),Nr=P(Vn),E=P(Nr),F=P(E),he=P(F),Be=at=>{var It=Ze(()=>(m(cs),r(a),D(()=>{var gr;return cs([],(gr=r(a))===null||gr===void 0?void 0:gr.root)}))),er=Ut(),Jn=Xe(er),wr=gr=>{var Vr=r2();As(P(Vr),{get validationError(){return r(It)},get onExpand(){return _o}}),R(gr,Vr)};ie(Jn,gr=>{r(It)&&gr(wr)}),R(at,er)};ie(he,at=>{m(fn),r(a),D(()=>{var It;return!fn((It=r(a))===null||It===void 0?void 0:It.root)})&&at(Be)});var Ne=V(F);dr(Ne,1,()=>r(Ve),Cr,(at,It)=>{var er=o2();(function(Jn,wr){ut(wr,!1);var gr=N(void 0,!0),Vr=N(void 0,!0),ma=N(void 0,!0),ho=h(wr,"path",9),No=h(wr,"sortedColumn",9),Go=h(wr,"readOnly",9),$o=h(wr,"onSort",9);X(()=>(m(ho()),Br),()=>{f(gr,fn(ho())?"values":Br(ho()))}),X(()=>(m(No()),m(ho())),()=>{var Er;f(Vr,No()&&Lt(ho(),(Er=No())===null||Er===void 0?void 0:Er.path)?No().sortDirection:void 0)}),X(()=>(r(Vr),qp),()=>{f(ma,r(Vr)?qp[r(Vr)]:void 0)}),wn(),zt(!0);var Hr,Jr=HS(),go=P(Jr),ba=P(go),mo=V(go,2),On=Er=>{var mr=VS(),yi=P(mr),es=Ze(()=>(r(Vr),m(Mo),m(Ra),m(Ff),D(()=>r(Vr)===Mo.asc?Ra:Ff)));rn(yi,{get data(){return r(es)}}),Te(()=>xn(mr,"title","Currently sorted in ".concat(r(ma)," order"))),R(Er,mr)};ie(mo,Er=>{r(Vr)!==void 0&&Er(On)}),Te((Er,mr)=>{Hr=Tt(Jr,1,"jse-column-header svelte-5pxwfq",null,Hr,Er),xn(Jr,"title",Go()?r(gr):r(gr)+" (Click to sort the data by this column)"),vt(ba,mr)},[()=>({"jse-readonly":Go()}),()=>(m(ka),r(gr),m(50),D(()=>ka(r(gr),50)))]),Oe("click",Jr,function(){Go()||$o()({path:ho(),sortDirection:r(Vr)===Mo.asc?Mo.desc:Mo.asc})}),R(Jn,Jr),dt()})(P(er),{get path(){return r(It)},get sortedColumn(){return r(lt)},get readOnly(){return p()},onSort:Fe}),R(at,er)});var Re=V(Ne),Ct=at=>{var It=a2(),er=P(It),Jn=Ze(()=>(r(H),D(()=>Array.isArray(r(H))?r(H).length:0)));(function(wr,gr){ut(gr,!1);var Vr=h(gr,"count",9),ma=h(gr,"maxSampleCount",9),ho=h(gr,"readOnly",9),No=h(gr,"onRefresh",9);zt(!0);var Go,$o=n2();rn(P($o),{get data(){return Vb}}),Te(Hr=>{Go=Tt($o,1,"jse-column-header svelte-1wgrwv3",null,Go,Hr),xn($o,"title","The Columns are created by sampling ".concat(ma()," items out of ").concat(Vr(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")},[()=>({"jse-readonly":ho()})]),Oe("click",$o,()=>No()()),R(wr,$o),dt()})(er,{get count(){return r(Jn)},get maxSampleCount(){return r(Le)},get readOnly(){return p()},onRefresh:()=>f(Le,1/0)}),R(at,It)};ie(Re,at=>{r(n)&&at(Ct)});var St,Wt,Sn=V(E),tn=P(Sn),Un=V(Sn);dr(Un,1,()=>(r(o),D(()=>r(o).visibleItems)),Cr,(at,It,er)=>{var Jn=Ze(()=>(r(o),D(()=>r(o).startIndex+er))),wr=Ze(()=>(r(a),m(r(Jn)),D(()=>r(a).rows[r(Jn)]))),gr=Ze(()=>(m(cs),m(r(Jn)),m(r(wr)),D(()=>{var Hr;return cs([String(r(Jn))],(Hr=r(wr))===null||Hr===void 0?void 0:Hr.row)}))),Vr=Ze(()=>(m(ea),r(H),r(qe),m(r(Jn)),D(()=>ea(r(H),r(qe),[String(r(Jn))])))),ma=u2(),ho=P(ma);Om(ho,()=>r(Jn),Hr=>{var Jr=i2(),go=P(Jr),ba=V(go),mo=On=>{As(On,{get validationError(){return r(gr)},get onExpand(){return _o}})};ie(ba,On=>{r(gr)&&On(mo)}),no(Jr,(On,Er)=>_c?.(On,Er),()=>On=>function(Er,mr){S[mr]=Er.getBoundingClientRect().height}(On,r(Jn))),Te(()=>{var On;return vt(go,"".concat((On=r(Jn))!==null&&On!==void 0?On:""," "))}),R(Hr,Jr)});var No=V(ho);dr(No,1,()=>r(Ve),Cr,(Hr,Jr,go,ba)=>{var mo,On=Ze(()=>(m(r(Jn)),r(Jr),D(()=>[String(r(Jn))].concat(r(Jr))))),Er=Ze(()=>(m(Ke),r(It),r(Jr),D(()=>Ke(r(It),r(Jr))))),mr=Ze(()=>(m(vn),r(ne),m(la),m(r(On)),D(()=>vn(r(ne))&&la(r(ne).path,r(On))))),yi=Ze(()=>(m(r(wr)),D(()=>{var _r;return(_r=r(wr))===null||_r===void 0?void 0:_r.columns[go]}))),es=Ze(()=>(m(cs),m(r(On)),m(r(yi)),D(()=>cs(r(On),r(yi))))),ji=l2(),Xs=P(ji),ts=P(Xs),Zs=_r=>{var so=Ze(()=>(m(su),m(ea),r(It),m(r(Vr)),r(Jr),D(()=>su(ea(r(It),r(Vr),r(Jr)))))),el=Ze(()=>(m(r(so)),D(()=>!!r(so)&&r(so).some(wi=>wi.active)))),tl=Ze(()=>(m(fn),m(r(so)),D(()=>!fn(r(so)))));(function(wi,Qr){ut(Qr,!1);var nl=h(Qr,"path",9),Df=h(Qr,"value",9),Uf=h(Qr,"parser",9),bb=h(Qr,"isSelected",9),yb=h(Qr,"containsSearchResult",9),jb=h(Qr,"containsActiveSearchResult",9),xb=h(Qr,"onEdit",9);zt(!0);var Lf,ic=WS(),wb=P(ic);Te((rl,kb)=>{Lf=Tt(ic,1,"jse-inline-value svelte-1jv89ui",null,Lf,rl),vt(wb,kb)},[()=>({"jse-selected":bb(),"jse-highlight":yb(),"jse-active":jb()}),()=>(m(ka),m(Uf()),m(Df()),m(50),D(()=>{var rl;return ka((rl=Uf().stringify(Df()))!==null&&rl!==void 0?rl:"",50)}))]),Oe("dblclick",ic,()=>xb()(nl())),R(wi,ic),dt()})(_r,{get path(){return r(On)},get value(){return r(Er)},get parser(){return w()},get isSelected(){return r(mr)},get containsSearchResult(){return r(tl)},get containsActiveSearchResult(){return r(el)},onEdit:rt})},Vu=_r=>{var so=Ze(()=>(m(ea),r(H),r(qe),m(r(On)),D(()=>{var Qr;return(Qr=ea(r(H),r(qe),r(On)))===null||Qr===void 0?void 0:Qr.searchResults}))),el=Ze(()=>r(Er)!==void 0?r(Er):""),tl=Ze(()=>(m(oa),r(H),r(Z),m(r(On)),D(()=>oa(r(H),r(Z),r(On))))),wi=Ze(()=>r(mr)?r(ne):void 0);O0(_r,{get path(){return r(On)},get value(){return r(el)},get enforceString(){return r(tl)},get selection(){return r(wi)},get searchResultItems(){return r(so)},get context(){return r(He)}})};ie(ts,_r=>{m(ar),m(r(Er)),D(()=>ar(r(Er)))?_r(Zs):_r(Vu,!1)});var Hu=V(ts),Ju=_r=>{var so=s2();Ha(P(so),{selected:!0,onContextMenu:tr}),R(_r,so)};ie(Hu,_r=>{m(p()),m(r(mr)),m(Ir),r(ne),D(()=>!p()&&r(mr)&&!Ir(r(ne)))&&_r(Ju)});var Xo=V(Xs,2),xi=_r=>{As(_r,{get validationError(){return r(es)},get onExpand(){return _o}})};ie(Xo,_r=>{r(es)&&_r(xi)}),Te((_r,so)=>{xn(ji,"data-path",_r),mo=Tt(Xs,1,"jse-value-outer svelte-1p86y3c",null,mo,so)},[()=>(m($c),m(r(On)),D(()=>$c(r(On)))),()=>({"jse-selected-value":r(mr)})]),R(Hr,ji)});var Go=V(No),$o=Hr=>{R(Hr,c2())};ie(Go,Hr=>{r(n)&&Hr($o)}),R(at,ma)});var _t,rr=P(V(Un));Qn(en,at=>f(xe,at),()=>r(xe)),no(en,(at,It)=>_c?.(at,It),()=>Rr),Kr(()=>Oe("scroll",en,Ft));var Rn=V(en,2),Hn=at=>{var It=Ze(()=>(r(pe),D(()=>"You pasted a JSON ".concat(Array.isArray(r(pe).contents)?"array":"object"," as text")))),er=Ze(()=>[{icon:ci,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:Xn},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:zr}]);Co(at,{type:"info",get message(){return r(It)},get actions(){return r(er)}})};ie(Rn,at=>{r(pe)&&at(Hn)});var mn=V(Rn,2),yt=at=>{var It=Ze(()=>[{icon:ci,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:$n},{text:"Leave as is",title:"Keep the pasted array",onClick:Ht}]);Co(at,{type:"info",message:"Multiline text was pasted as array",get actions(){return r(It)}})};ie(mn,at=>{r(G)&&at(yt)});var ln=V(mn,2),jt=at=>{var It=Ze(()=>p()?[]:[{icon:Rv,text:"Ok",title:"Accept the repaired document",onClick:_n},{icon:Hc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:jr}]);Co(at,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return r(It)},onClose:Ge})};ie(ln,at=>{r(tt)&&at(jt)}),wf(V(ln,2),{get validationErrors(){return r(kn)},selectError:Pe}),Te((at,It,er)=>{St=Tt(Sn,1,"jse-table-invisible-start-section svelte-1p86y3c",null,St,at),xn(tn,"colspan",(r(Ve),D(()=>r(Ve).length))),Wt=To(tn,"",Wt,It),xn(rr,"colspan",(r(Ve),D(()=>r(Ve).length))),_t=To(rr,"",_t,er)},[()=>({"jse-search-box-background":r(te)}),()=>({height:(r(o),D(()=>r(o).startHeight+"px"))}),()=>({height:(r(o),D(()=>r(o).endHeight+"px"))})]),R(Je,Dt)},Ye=Je=>{var Dt=Ut(),sn=Xe(Dt),en=Nr=>{var E=v2(),F=Xe(E),he=Ze(()=>p()?[]:[{icon:Hc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:jr}]);Co(F,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return r(he)}}),q0(V(F,2),{get text(){return r(ge)},get json(){return r(H)},get indentation(){return M()},get parser(){return w()}}),R(Nr,E)},Vn=Nr=>{t2(Nr,{get text(){return r(ge)},get json(){return r(H)},get readOnly(){return p()},get parser(){return w()},openJSONEditorModal:rt,extractPath:Rt,get onChangeMode(){return J()},onClick:()=>{Ge()}})};ie(sn,Nr=>{r(B)&&r(ge)!==void 0&&r(ge)!==""?Nr(en):Nr(Vn,!1)},!0),R(Je,Dt)};ie(ve,Je=>{r(ht)?Je(We):Je(Ye,!1)}),Oe("paste",$e,_e),R(_,Q)},hr=_=>{R(_,p2())};ie(kt,_=>{v?_(hr,!1):_(Or)}),Qn(hn,_=>f(de,_),()=>r(de));var Pr=V(hn,2),Cn=_=>{C0(_,{onClose:()=>f(k,!1)})};ie(Pr,_=>{r(k)&&_(Cn)});var Tn=V(Pr,2),xr=_=>{S0(_,ii(()=>r(Gt),{onClose:()=>{var Q;(Q=r(Gt))===null||Q===void 0||Q.onClose(),f(Gt,void 0)}}))};return ie(Tn,_=>{r(Gt)&&_(xr)}),Te(_=>Qt=Tt(hn,1,"jse-table-mode svelte-1p86y3c",null,Qt,_),[()=>({"no-main-menu":!x()})]),Oe("mousedown",hn,function(_){if(_.buttons===1||_.buttons===2){var Q=_.target;Q.isContentEditable||Ge();var je=Hm(Q);if(je){if(Ir(r(ne))&&Pl(r(H),r(ne),je))return;f(ne,Kt(je)),_.preventDefault()}}}),Oe("keydown",hn,function(_){var Q=$a(_);if(i("keydown",{combo:Q,key:_.key}),Q==="Ctrl+X"&&(_.preventDefault(),Wr(!0)),Q==="Ctrl+Shift+X"&&(_.preventDefault(),Wr(!1)),Q==="Ctrl+C"&&(_.preventDefault(),Ur(!0)),Q==="Ctrl+Shift+C"&&(_.preventDefault(),Ur(!1)),Q==="Ctrl+D"&&(_.preventDefault(),zn()),Q!=="Delete"&&Q!=="Backspace"||(_.preventDefault(),Xt()),Q==="Insert"&&_.preventDefault(),Q==="Ctrl+A"&&_.preventDefault(),Q==="Ctrl+Q"&&vr(_),Q==="ArrowLeft"&&(_.preventDefault(),Pt(),r(ne))){var je=function(Dt,sn){var{rowIndex:en,columnIndex:Vn}=Eo(ot(sn),Dt);return Vn>0?Kt(Si({rowIndex:en,columnIndex:Vn-1},Dt)):sn}(r(Ve),r(ne));f(ne,je),ir(ot(je))}if(Q==="ArrowRight"&&(_.preventDefault(),Pt(),r(ne))){var $e=function(Dt,sn){var{rowIndex:en,columnIndex:Vn}=Eo(ot(sn),Dt);return Vn<Dt.length-1?Kt(Si({rowIndex:en,columnIndex:Vn+1},Dt)):sn}(r(Ve),r(ne));f(ne,$e),ir(ot($e))}if(Q==="ArrowUp"&&(_.preventDefault(),Pt(),r(ne))){var ve=function(Dt,sn){var{rowIndex:en,columnIndex:Vn}=Eo(ot(sn),Dt);return en>0?Kt(Si({rowIndex:en-1,columnIndex:Vn},Dt)):sn}(r(Ve),r(ne));f(ne,ve),ir(ot(ve))}if(Q==="ArrowDown"&&(_.preventDefault(),Pt(),r(ne))){var We=function(Dt,sn,en){var{rowIndex:Vn,columnIndex:Nr}=Eo(ot(en),sn);return Vn<Dt.length-1?Kt(Si({rowIndex:Vn+1,columnIndex:Nr},sn)):en}(r(H),r(Ve),r(ne));f(ne,We),ir(ot(We))}if(Q==="Enter"&&r(ne)&&vn(r(ne))){_.preventDefault();var Ye=r(ne).path;ar(Ke(r(H),Ye))?rt(Ye):p()||f(ne,Ae(Ae({},r(ne)),{},{edit:!0}))}if(Q.replace(/^Shift\+/,"").length===1&&r(ne))return _.preventDefault(),void function(Dt){ce.apply(this,arguments)}(_.key);if(Q==="Ctrl+Enter"&&vn(r(ne))){_.preventDefault();var Je=Ke(r(H),r(ne).path);zu(Je)&&window.open(String(Je),"_blank")}Q==="Escape"&&r(ne)&&(_.preventDefault(),f(ne,void 0)),Q==="Ctrl+F"&&(_.preventDefault(),an(!1)),Q==="Ctrl+H"&&(_.preventDefault(),an(!0)),Q==="Ctrl+Z"&&(_.preventDefault(),At()),Q==="Ctrl+Shift+Z"&&(_.preventDefault(),Zt())}),Oe("contextmenu",hn,vr),R(e,gn),xt(t,"validate",pn),xt(t,"patch",Bt),xt(t,"focus",Ge),xt(t,"acceptAutoRepair",_n),xt(t,"scrollTo",Ln),xt(t,"findElement",Wn),xt(t,"openTransformModal",nt),dt(bt)}function wh(e,t){ut(t,!1);var n=h(t,"content",8),o=h(t,"selection",12),a=h(t,"readOnly",8),i=h(t,"indentation",8),s=h(t,"tabSize",8),l=h(t,"truncateTextSize",8),c=h(t,"externalMode",8),u=h(t,"mainMenuBar",8),d=h(t,"navigationBar",8),v=h(t,"statusBar",8),p=h(t,"askToFormat",8),g=h(t,"escapeControlCharacters",8),y=h(t,"escapeUnicodeCharacters",8),b=h(t,"flattenColumns",8),j=h(t,"parser",8),x=h(t,"parseMemoizeOne",8),C=h(t,"validator",8),T=h(t,"validationParser",8),O=h(t,"pathParser",8),w=h(t,"insideModal",8),z=h(t,"onChange",8),U=h(t,"onChangeMode",8),ae=h(t,"onSelect",8),M=h(t,"onRenderValue",8),K=h(t,"onClassName",8),J=h(t,"onRenderMenu",8),I=h(t,"onRenderContextMenu",8),re=h(t,"onError",8),we=h(t,"onFocus",8),se=h(t,"onBlur",8),ze=h(t,"onSortModal",8),Ie=h(t,"onTransformModal",8),Ue=h(t,"onJSONEditorModal",8),ue=N(),me=N(),Me=N(),et=Dr("jsoneditor:JSONEditorRoot"),ke=N(L0({onChange:S=>f(ke,S)}).get()),de=N(c());function xe(S){if(Wp(S)){f(de,S.undo.mode);var A=r(ke).items(),$=A.findIndex(Se=>Se===S),oe=$!==-1?A[$-1]:void 0;et("handleUndo",{index:$,item:S,items:A,prevItem:oe}),oe&&o(oe.redo.selection),U()(r(de))}}function mt(S){if(Wp(S)){f(de,S.redo.mode);var A=r(ke).items(),$=A.findIndex(Se=>Se===S),oe=$!==-1?A[$+1]:void 0;et("handleRedo",{index:$,item:S,items:A,nextItem:oe}),oe&&o(oe.undo.selection),U()(r(de))}}var Gt=N(),fe={type:"separator"},H=N(),ge=N();function B(S){if(r(ue))return r(ue).patch(S);if(r(me))return r(me).patch(S);if(r(Me))return r(Me).patch(S);throw new Error('Method patch is not available in mode "'.concat(r(de),'"'))}function pe(S,A){if(r(ue))return r(ue).expand(S,A);if(r(Me))return r(Me).expand(S,A);throw new Error('Method expand is not available in mode "'.concat(r(de),'"'))}function G(S,A){if(r(ue))return r(ue).collapse(S,A);if(r(Me))return r(Me).collapse(S,A);throw new Error('Method collapse is not available in mode "'.concat(r(de),'"'))}function qe(S){if(r(Me))r(Me).openTransformModal(S);else if(r(ue))r(ue).openTransformModal(S);else{if(!r(me))throw new Error('Method transform is not available in mode "'.concat(r(de),'"'));r(me).openTransformModal(S)}}function te(){if(r(Me))return r(Me).validate();if(r(ue))return r(ue).validate();if(r(me))return r(me).validate();throw new Error('Method validate is not available in mode "'.concat(r(de),'"'))}function L(){return r(ue)?r(ue).acceptAutoRepair():n()}function st(S){if(r(ue))return r(ue).scrollTo(S);if(r(me))return r(me).scrollTo(S);throw new Error('Method scrollTo is not available in mode "'.concat(r(de),'"'))}function it(S){if(r(ue))return r(ue).findElement(S);if(r(me))return r(me).findElement(S);throw new Error('Method findElement is not available in mode "'.concat(r(de),'"'))}function Ce(){r(Me)?r(Me).focus():r(ue)?r(ue).focus():r(me)&&r(me).focus()}function wt(){return Le.apply(this,arguments)}function Le(){return(Le=gt(function*(){r(Me)&&(yield r(Me).refresh())})).apply(this,arguments)}X(()=>m(c()),()=>{(function(S){if(S!==r(de)){var A={type:"mode",undo:{mode:r(de),selection:void 0},redo:{mode:S,selection:void 0}};r(de)==="text"&&r(Me)&&r(Me).flush(),et("add history item",A),r(ke).add(A),f(de,S)}})(c())}),X(()=>(r(de),m(U())),()=>{f(Gt,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(r(de),")"),className:"jse-group-button jse-first"+(r(de)===kr.text?" jse-selected":""),onClick:()=>U()(kr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(r(de),")"),className:"jse-group-button "+(r(de)===kr.tree?" jse-selected":""),onClick:()=>U()(kr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(r(de),")"),className:"jse-group-button jse-last"+(r(de)===kr.table?" jse-selected":""),onClick:()=>U()(kr.table)}])}),X(()=>(r(Gt),m(J()),r(de),m(w()),m(a())),()=>{f(H,S=>{var A=av(S[0])?r(Gt).concat(S):r(Gt).concat(fe,S),$=zd(A);return J()(A,{mode:r(de),modal:w(),readOnly:a()})||$})}),X(()=>(m(I()),r(de),m(w()),m(a()),m(o())),()=>{f(ge,S=>{var A,$=zd(S);return(A=I()(S,{mode:r(de),modal:w(),readOnly:a(),selection:o()}))!==null&&A!==void 0?A:!a()&&$})}),wn();var Ve={patch:B,expand:pe,collapse:G,transform:qe,validate:te,acceptAutoRepair:L,scrollTo:st,findElement:it,focus:Ce,refresh:wt};zt();var ht=Ut(),De=Xe(ht),Mt=S=>{Qn(FS(S,{get externalContent(){return n()},get externalSelection(){return o()},get history(){return r(ke)},get readOnly(){return a()},get indentation(){return i()},get tabSize(){return s()},get mainMenuBar(){return u()},get statusBar(){return v()},get askToFormat(){return p()},get escapeUnicodeCharacters(){return y()},get parser(){return j()},get validator(){return C()},get validationParser(){return T()},get onChange(){return z()},get onChangeMode(){return U()},get onSelect(){return ae()},onUndo:xe,onRedo:mt,get onError(){return re()},get onFocus(){return we()},get onBlur(){return se()},get onRenderMenu(){return r(H)},get onSortModal(){return ze()},get onTransformModal(){return Ie()},$$legacy:!0}),A=>f(Me,A),()=>r(Me))},k=S=>{var A=Ut(),$=Xe(A),oe=Ee=>{Qn(g2(Ee,{get externalContent(){return n()},get externalSelection(){return o()},get history(){return r(ke)},get readOnly(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return y()},get flattenColumns(){return b()},get parser(){return j()},get parseMemoizeOne(){return x()},get validator(){return C()},get validationParser(){return T()},get indentation(){return i()},get onChange(){return z()},get onChangeMode(){return U()},get onSelect(){return ae()},onUndo:xe,onRedo:mt,get onRenderValue(){return M()},get onFocus(){return we()},get onBlur(){return se()},get onRenderMenu(){return r(H)},get onRenderContextMenu(){return r(ge)},get onSortModal(){return ze()},get onTransformModal(){return Ie()},get onJSONEditorModal(){return Ue()},$$legacy:!0}),Z=>f(me,Z),()=>r(me))},Se=Ee=>{Qn(wv(Ee,{get externalContent(){return n()},get externalSelection(){return o()},get history(){return r(ke)},get readOnly(){return a()},get indentation(){return i()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get navigationBar(){return d()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return y()},get parser(){return j()},get parseMemoizeOne(){return x()},get validator(){return C()},get validationParser(){return T()},get pathParser(){return O()},get onError(){return re()},get onChange(){return z()},get onChangeMode(){return U()},get onSelect(){return ae()},onUndo:xe,onRedo:mt,get onRenderValue(){return M()},get onClassName(){return K()},get onFocus(){return we()},get onBlur(){return se()},get onRenderMenu(){return r(H)},get onRenderContextMenu(){return r(ge)},get onSortModal(){return ze()},get onTransformModal(){return Ie()},get onJSONEditorModal(){return Ue()},$$legacy:!0}),Z=>f(ue,Z),()=>r(ue))};ie($,Ee=>{r(de),m(kr),D(()=>r(de)===kr.table)?Ee(oe):Ee(Se,!1)},!0),R(S,A)};return ie(De,S=>{r(de),m(kr),D(()=>r(de)===kr.text||String(r(de))==="code")?S(Mt):S(k,!1)}),R(e,ht),xt(t,"patch",B),xt(t,"expand",pe),xt(t,"collapse",G),xt(t,"transform",qe),xt(t,"validate",te),xt(t,"acceptAutoRepair",L),xt(t,"scrollTo",st),xt(t,"findElement",it),xt(t,"focus",Ce),xt(t,"refresh",wt),dt(Ve)}Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var m2=ee('<div class="jse-error svelte-t4zsk3"> </div>'),b2=ee('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),y2=ee('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),j2=ee('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),x2=ee('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),w2=ee('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),k2={};Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var ds=Tu(()=>k2),C2=ee('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),S2=ee('<div class="jse-error svelte-lwzlls"> </div>'),O2=ee('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);Ot(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var E2=ee('<div role="none"><!></div> <!> <!> <!>',1);function _2(e,t){ut(t,!1);var n=N(void 0,!0),o=Dr("jsoneditor:JSONEditor"),a={text:""},i=void 0,s=!1,l=kr.tree,c=!0,u=!0,d=!0,v=!0,p=!1,g=!1,y=!0,b=JSON,j=void 0,x=JSON,C={parse:Cw,stringify:Br},T=[Fx],O=T[0].id,w=_o,z=void 0,U=void 0,ae=kw,M=_o,K=_o,J=_o,I=_o,re=ye=>{console.error(ye),alert(ye.toString())},we=_o,se=_o,ze=h(t,"content",13,a),Ie=h(t,"selection",13,i),Ue=h(t,"readOnly",13,s),ue=h(t,"indentation",13,2),me=h(t,"tabSize",13,4),Me=h(t,"truncateTextSize",13,1e3),et=h(t,"mode",13,l),ke=h(t,"mainMenuBar",13,c),de=h(t,"navigationBar",13,u),xe=h(t,"statusBar",13,d),mt=h(t,"askToFormat",13,v),Gt=h(t,"escapeControlCharacters",13,p),fe=h(t,"escapeUnicodeCharacters",13,g),H=h(t,"flattenColumns",13,y),ge=h(t,"parser",13,b),B=h(t,"validator",13,j),pe=h(t,"validationParser",13,x),G=h(t,"pathParser",13,C),qe=h(t,"queryLanguages",13,T),te=h(t,"queryLanguageId",13,O),L=h(t,"onChangeQueryLanguage",13,w),st=h(t,"onChange",13,z),it=h(t,"onSelect",13,U),Ce=h(t,"onRenderValue",13,ae),wt=h(t,"onClassName",13,M),Le=h(t,"onRenderMenu",13,K),Ve=h(t,"onRenderContextMenu",13,J),ht=h(t,"onChangeMode",13,I),De=h(t,"onError",13,re),Mt=h(t,"onFocus",13,we),k=h(t,"onBlur",13,se),S=N(bs(),!0),A=N(!1,!0),$=N(void 0,!0),oe=N(void 0,!0),Se=N(void 0,!0),Ee=N(void 0,!0),Z=N(ge(),!0);function ne(){return ze()}function lt(ye){o("set");var $t=ud(ye);if($t)throw new Error($t);f(S,bs()),ze(ye),Fn()}function tt(ye){o("update");var $t=ud(ye);if($t)throw new Error($t);ze(ye),Fn()}function Fe(ye){var $t=r($).patch(ye);return Fn(),$t}function He(ye){Ie(ye),Fn()}function Nt(ye,$t){r($).expand(ye,$t),Fn()}function kn(ye){var $t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];r($).collapse(ye,$t),Fn()}function En(){var ye=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};r($).transform(ye),Fn()}function qt(){return r($).validate()}function pn(){var ye=r($).acceptAutoRepair();return Fn(),ye}function Bt(ye){return Yt.apply(this,arguments)}function Yt(){return(Yt=gt(function*(ye){yield r($).scrollTo(ye)})).apply(this,arguments)}function dn(ye){return r($).findElement(ye)}function pt(){r($).focus(),Fn()}function on(){return Et.apply(this,arguments)}function Et(){return(Et=gt(function*(){yield r($).refresh()})).apply(this,arguments)}function Ge(ye){var $t,jn,$n,sr,zr,Ht,jr,Wr,Zn,Ur,Mn,Xt,Rt,zn,pr,nr,W,ce,_e,q,Y,be,Pe,nt,rt,ct,In,Jt,an,At,Zt,Rr=Object.keys(ye);for(var bt of Rr)switch(bt){case"content":ze(($t=ye[bt])!==null&&$t!==void 0?$t:a);break;case"selection":Ie((jn=ye[bt])!==null&&jn!==void 0?jn:i);break;case"readOnly":Ue(($n=ye[bt])!==null&&$n!==void 0?$n:s);break;case"indentation":ue((sr=ye[bt])!==null&&sr!==void 0?sr:2);break;case"tabSize":me((zr=ye[bt])!==null&&zr!==void 0?zr:4);break;case"truncateTextSize":Me((Ht=ye[bt])!==null&&Ht!==void 0?Ht:1e3);break;case"mode":et((jr=ye[bt])!==null&&jr!==void 0?jr:l);break;case"mainMenuBar":ke((Wr=ye[bt])!==null&&Wr!==void 0?Wr:c);break;case"navigationBar":de((Zn=ye[bt])!==null&&Zn!==void 0?Zn:u);break;case"statusBar":xe((Ur=ye[bt])!==null&&Ur!==void 0?Ur:d);break;case"askToFormat":mt((Mn=ye[bt])!==null&&Mn!==void 0?Mn:v);break;case"escapeControlCharacters":Gt((Xt=ye[bt])!==null&&Xt!==void 0?Xt:p);break;case"escapeUnicodeCharacters":fe((Rt=ye[bt])!==null&&Rt!==void 0?Rt:g);break;case"flattenColumns":H((zn=ye[bt])!==null&&zn!==void 0?zn:y);break;case"parser":ge((pr=ye[bt])!==null&&pr!==void 0?pr:b);break;case"validator":B((nr=ye[bt])!==null&&nr!==void 0?nr:j);break;case"validationParser":pe((W=ye[bt])!==null&&W!==void 0?W:x);break;case"pathParser":G((ce=ye[bt])!==null&&ce!==void 0?ce:C);break;case"queryLanguages":qe((_e=ye[bt])!==null&&_e!==void 0?_e:T);break;case"queryLanguageId":te((q=ye[bt])!==null&&q!==void 0?q:O);break;case"onChangeQueryLanguage":L((Y=ye[bt])!==null&&Y!==void 0?Y:w);break;case"onChange":st((be=ye[bt])!==null&&be!==void 0?be:z);break;case"onRenderValue":Ce((Pe=ye[bt])!==null&&Pe!==void 0?Pe:ae);break;case"onClassName":wt((nt=ye[bt])!==null&&nt!==void 0?nt:M);break;case"onRenderMenu":Le((rt=ye[bt])!==null&&rt!==void 0?rt:K);break;case"onRenderContextMenu":Ve((ct=ye[bt])!==null&&ct!==void 0?ct:J);break;case"onChangeMode":ht((In=ye[bt])!==null&&In!==void 0?In:I);break;case"onSelect":it((Jt=ye[bt])!==null&&Jt!==void 0?Jt:U);break;case"onError":De((an=ye[bt])!==null&&an!==void 0?an:re);break;case"onFocus":Mt((At=ye[bt])!==null&&At!==void 0?At:we);break;case"onBlur":k((Zt=ye[bt])!==null&&Zt!==void 0?Zt:se);break;default:gn(bt)}function gn(Qt){o('Unknown property "'.concat(Qt,'"'))}qe().some(Qt=>Qt.id===te())||te(qe()[0].id),Fn()}function Ft(){return Pt.apply(this,arguments)}function Pt(){return(Pt=gt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function _n(ye,$t,jn){ze(ye),st()&&st()(ye,$t,jn)}function Ln(ye){Ie(ye),it()&&it()(zd(ye))}function Dn(){f(A,!0),Mt()&&Mt()()}function ir(){f(A,!1),k()&&k()()}function Wn(ye){return tr.apply(this,arguments)}function tr(){return(tr=gt(function*(ye){et()!==ye&&(et(ye),Fn(),pt(),ht()(ye))})).apply(this,arguments)}function vr(ye){o("handleChangeQueryLanguage",ye),te(ye),L()(ye)}function Gn(ye){var{id:$t,json:jn,rootPath:$n,onTransform:sr,onClose:zr}=ye;Ue()||f(Ee,{id:$t,json:jn,rootPath:$n,indentation:ue(),truncateTextSize:Me(),escapeControlCharacters:Gt(),escapeUnicodeCharacters:fe(),parser:ge(),parseMemoizeOne:r(n),validationParser:pe(),pathParser:G(),queryLanguages:qe(),queryLanguageId:te(),onChangeQueryLanguage:vr,onRenderValue:Ce(),onRenderMenu:Ht=>Le()(Ht,{mode:et(),modal:!0,readOnly:Ue()}),onRenderContextMenu:Ht=>Ve()(Ht,{mode:et(),modal:!0,readOnly:Ue(),selection:Ie()}),onClassName:wt(),onTransform:sr,onClose:zr})}function Sr(ye){Ue()||f(Se,ye)}function fr(ye){var{content:$t,path:jn,onPatch:$n,onClose:sr}=ye;o("onJSONEditorModal",{content:$t,path:jn}),f(oe,{content:$t,path:jn,onPatch:$n,readOnly:Ue(),indentation:ue(),tabSize:me(),truncateTextSize:Me(),mainMenuBar:ke(),navigationBar:de(),statusBar:xe(),askToFormat:mt(),escapeControlCharacters:Gt(),escapeUnicodeCharacters:fe(),flattenColumns:H(),parser:ge(),validator:void 0,validationParser:pe(),pathParser:G(),onRenderValue:Ce(),onClassName:wt(),onRenderMenu:Le(),onRenderContextMenu:Ve(),onSortModal:Sr,onTransformModal:Gn,onClose:sr})}function yr(ye){ye.stopPropagation()}X(()=>(m(ge()),r(Z),m(ze()),bs),()=>{if(!qm(ge(),r(Z))){if(o("parser changed, recreate editor"),Ml(ze())){var ye=r(Z).stringify(ze().json);ze({json:ye!==void 0?ge().parse(ye):void 0})}f(Z,ge()),f(S,bs())}}),X(()=>m(ze()),()=>{var ye=ud(ze());ye&&console.error("Error: "+ye)}),X(()=>m(Ie()),()=>{Ie()===null&&console.warn("selection is invalid: it is null but should be undefined")}),X(()=>m(ge()),()=>{f(n,Sl(ge().parse))}),X(()=>m(et()),()=>{o("mode changed to",et())}),wn();var Xn={get:ne,set:lt,update:tt,patch:Fe,select:He,expand:Nt,collapse:kn,transform:En,validate:qt,acceptAutoRepair:pn,scrollTo:Bt,findElement:dn,focus:pt,refresh:on,updateProps:Ge,destroy:Ft};return zt(!0),rv(e,{children:(ye,$t)=>{var jn,$n=E2(),sr=Xe($n);Om(P(sr),()=>r(S),Mn=>{Qn(wh(Mn,{get externalMode(){return et()},get content(){return ze()},get selection(){return Ie()},get readOnly(){return Ue()},get indentation(){return ue()},get tabSize(){return me()},get truncateTextSize(){return Me()},get statusBar(){return xe()},get askToFormat(){return mt()},get mainMenuBar(){return ke()},get navigationBar(){return de()},get escapeControlCharacters(){return Gt()},get escapeUnicodeCharacters(){return fe()},get flattenColumns(){return H()},get parser(){return ge()},get parseMemoizeOne(){return r(n)},get validator(){return B()},get validationParser(){return pe()},get pathParser(){return G()},insideModal:!1,get onError(){return De()},onChange:_n,onChangeMode:Wn,onSelect:Ln,get onRenderValue(){return Ce()},get onClassName(){return wt()},onFocus:Dn,onBlur:ir,get onRenderMenu(){return Le()},get onRenderContextMenu(){return Ve()},onSortModal:Sr,onTransformModal:Gn,onJSONEditorModal:fr,$$legacy:!0}),Xt=>f($,Xt),()=>r($))});var zr=V(sr,2),Ht=Mn=>{(function(Xt,Rt){var zn,pr;ut(Rt,!1);var nr=N(void 0,!0),W=N(void 0,!0),ce=N(void 0,!0),_e=N(void 0,!0),q=Dr("jsoneditor:SortModal"),Y=h(Rt,"id",9),be=h(Rt,"json",9),Pe=h(Rt,"rootPath",9),nt=h(Rt,"onSort",9),rt=h(Rt,"onClose",9),ct={value:1,label:"ascending"},In=[ct,{value:-1,label:"descending"}],Jt="".concat(Y(),":").concat(ft(Pe())),an=N((zn=ds()[Jt])===null||zn===void 0?void 0:zn.selectedProperty,!0),At=N(((pr=ds()[Jt])===null||pr===void 0?void 0:pr.selectedDirection)||ct,!0),Zt=N(void 0,!0);function Rr(){try{var gn,Qt,hn;f(Zt,void 0);var Bn=((gn=r(an))===null||gn===void 0?void 0:gn.value)||((Qt=r(_e))===null||Qt===void 0||(Qt=Qt[0])===null||Qt===void 0?void 0:Qt.value)||[],An=(hn=r(At))===null||hn===void 0?void 0:hn.value,kt=M0(be(),Pe(),Bn,An);nt()!==void 0&&Pe()!==void 0&&nt()({operations:kt,rootPath:Pe(),itemPath:Bn,direction:An}),rt()()}catch(Or){f(Zt,String(Or))}}function bt(gn){gn.focus()}X(()=>(m(be()),m(Pe())),()=>{f(nr,Ke(be(),Pe()))}),X(()=>r(nr),()=>{f(W,Array.isArray(r(nr)))}),X(()=>(r(W),r(nr)),()=>{f(ce,r(W)?tv(r(nr)):void 0)}),X(()=>(r(ce),Qa),()=>{f(_e,r(ce)?r(ce).map(Qa):void 0)}),X(()=>(ds(),r(an),r(At)),()=>{ds(ds()[Jt]={selectedProperty:r(an),selectedDirection:r(At)}),q("store state in memory",Jt,ds()[Jt])}),wn(),zt(!0),Il(Xt,{get onClose(){return rt()},className:"jse-sort-modal",children:(gn,Qt)=>{var hn=O2(),Bn=Xe(hn),An=Ze(()=>r(W)?"Sort array items":"Sort object keys");fu(Bn,{get title(){return r(An)},get onClose(){return rt()}});var kt=P(V(Bn,2)),Or=V(P(kt)),hr=P(Or),Pr=V(P(hr)),Cn=P(Pr),Tn=V(hr),xr=Ye=>{var Je=C2(),Dt=V(P(Je));zi(P(Dt),{showChevron:!0,get items(){return r(_e)},get value(){return r(an)},set value(sn){f(an,sn)},$$legacy:!0}),R(Ye,Je)};ie(Tn,Ye=>{r(W),r(_e),D(()=>{var Je;return r(W)&&r(_e)&&((Je=r(_e))===null||Je===void 0?void 0:Je.length)>1})&&Ye(xr)});var _=V(Tn),Q=V(P(_));zi(P(Q),{showChevron:!0,clearable:!1,get items(){return In},get value(){return r(At)},set value(Ye){f(At,Ye)},$$legacy:!0});var je=V(kt,2),$e=P(je),ve=Ye=>{var Je=S2(),Dt=P(Je);Te(()=>vt(Dt,r(Zt))),R(Ye,Je)};ie($e,Ye=>{r(Zt)&&Ye(ve)});var We=P(V(je,2));Kr(()=>Oe("click",We,Rr)),no(We,Ye=>bt?.(Ye)),Te(Ye=>{Bi(Cn,Ye),We.disabled=(r(W),r(_e),r(an),D(()=>{var Je;return!!(r(W)&&r(_e)&&((Je=r(_e))===null||Je===void 0?void 0:Je.length)>1)&&!r(an)}))},[()=>(m(Pe()),m(fn),m(Br),D(()=>Pe()&&!fn(Pe())?Br(Pe()):"(document root)"))]),R(gn,hn)},$$slots:{default:!0}}),dt()})(Mn,ii(()=>r(Se),{onClose:()=>{var Xt;(Xt=r(Se))===null||Xt===void 0||Xt.onClose(),f(Se,void 0)}}))};ie(zr,Mn=>{r(Se)&&Mn(Ht)});var jr=V(zr,2),Wr=Mn=>{ES(Mn,ii(()=>r(Ee),{onClose:()=>{var Xt;(Xt=r(Ee))===null||Xt===void 0||Xt.onClose(),f(Ee,void 0)}}))};ie(jr,Mn=>{r(Ee)&&Mn(Wr)});var Zn=V(jr,2),Ur=Mn=>{(function(Xt,Rt){ut(Rt,!1);var zn=N(void 0,!0),pr=N(void 0,!0),nr=N(void 0,!0),W=N(void 0,!0),ce=Dr("jsoneditor:JSONEditorModal"),_e=h(Rt,"content",9),q=h(Rt,"path",9),Y=h(Rt,"onPatch",9),be=h(Rt,"readOnly",9),Pe=h(Rt,"indentation",9),nt=h(Rt,"tabSize",9),rt=h(Rt,"truncateTextSize",9),ct=h(Rt,"mainMenuBar",9),In=h(Rt,"navigationBar",9),Jt=h(Rt,"statusBar",9),an=h(Rt,"askToFormat",9),At=h(Rt,"escapeControlCharacters",9),Zt=h(Rt,"escapeUnicodeCharacters",9),Rr=h(Rt,"flattenColumns",9),bt=h(Rt,"parser",9),gn=h(Rt,"validator",9),Qt=h(Rt,"validationParser",9),hn=h(Rt,"pathParser",9),Bn=h(Rt,"onRenderValue",9),An=h(Rt,"onClassName",9),kt=h(Rt,"onRenderMenu",9),Or=h(Rt,"onRenderContextMenu",9),hr=h(Rt,"onSortModal",9),Pr=h(Rt,"onTransformModal",9),Cn=h(Rt,"onClose",9),Tn=N(void 0,!0),xr=N(void 0,!0),_={mode:$e(_e()),content:_e(),selection:void 0,relativePath:q()},Q=N([_],!0),je=N(void 0,!0);function $e(F){return Ml(F)&&ur(F.json)?kr.table:kr.tree}function ve(){var F,he=(F=Vt(r(Q)))===null||F===void 0?void 0:F.selection;Rl(he)&&r(Tn).scrollTo(ot(he))}function We(){if(ce("handleApply"),!be())try{f(je,void 0);var F=r(zn).relativePath,he=r(zn).content,Be=[{op:"replace",path:ft(F),value:Rp(he,bt()).json}];if(r(Q).length>1){var Ne=Rp(r(Q)[r(Q).length-2].content,bt()).json,Re={json:Bo(Ne,Be)},Ct=Ae(Ae({},r(Q)[r(Q).length-2]||_),{},{content:Re});f(Q,[...r(Q).slice(0,r(Q).length-2),Ct]),Fn(),ve()}else Y()(Be),Cn()()}catch(St){f(je,String(St))}}function Ye(){if(ce("handleClose"),r(xr))f(xr,!1);else if(r(Q).length>1){var F;f(Q,nn(r(Q))),Fn(),(F=r(Tn))===null||F===void 0||F.focus(),ve(),f(je,void 0)}else Cn()()}function Je(F){ce("handleChange",F),en(he=>Ae(Ae({},he),{},{content:F}))}function Dt(F){ce("handleChangeSelection",F),en(he=>Ae(Ae({},he),{},{selection:F}))}function sn(F){ce("handleChangeMode",F),en(he=>Ae(Ae({},he),{},{mode:F}))}function en(F){var he=F(Vt(r(Q)));f(Q,[...nn(r(Q)),he])}function Vn(F){f(je,F.toString()),console.error(F)}function Nr(F){var he,{content:Be,path:Ne}=F;ce("handleJSONEditorModal",{content:Be,path:Ne});var Re={mode:$e(Be),content:Be,selection:void 0,relativePath:Ne};f(Q,[...r(Q),Re]),Fn(),(he=r(Tn))===null||he===void 0||he.focus()}function E(F){F.focus()}Zr(()=>{var F;(F=r(Tn))===null||F===void 0||F.focus()}),X(()=>r(Q),()=>{f(zn,Vt(r(Q))||_)}),X(()=>r(Q),()=>{f(pr,r(Q).flatMap(F=>F.relativePath))}),X(()=>(r(pr),Br),()=>{f(nr,fn(r(pr))?"(document root)":Br(r(pr)))}),X(()=>m(bt()),()=>{f(W,Sl(bt().parse))}),wn(),zt(!0),Il(Xt,{onClose:Ye,className:"jse-jsoneditor-modal",get fullscreen(){return r(xr)},children:(F,he)=>{var Be=w2();rv(P(Be),{children:(Ne,Re)=>{var Ct=x2(),St=Xe(Ct),Wt=Ze(()=>(r(Q),D(()=>r(Q).length>1?" (".concat(r(Q).length,")"):"")));fu(St,{get title(){var jt;return"Edit nested content ".concat((jt=r(Wt))!==null&&jt!==void 0?jt:"")},fullScreenButton:!0,onClose:Ye,get fullscreen(){return r(xr)},set fullscreen(jt){f(xr,jt)},$$legacy:!0});var Sn=V(St,2),tn=V(P(Sn),2),Un=V(tn,4);Qn(wh(P(Un),{get externalMode(){return r(zn),D(()=>r(zn).mode)},get content(){return r(zn),D(()=>r(zn).content)},get selection(){return r(zn),D(()=>r(zn).selection)},get readOnly(){return be()},get indentation(){return Pe()},get tabSize(){return nt()},get truncateTextSize(){return rt()},get statusBar(){return Jt()},get askToFormat(){return an()},get mainMenuBar(){return ct()},get navigationBar(){return In()},get escapeControlCharacters(){return At()},get escapeUnicodeCharacters(){return Zt()},get flattenColumns(){return Rr()},get parser(){return bt()},get parseMemoizeOne(){return r(W)},get validator(){return gn()},get validationParser(){return Qt()},get pathParser(){return hn()},insideModal:!0,onError:Vn,onChange:Je,onChangeMode:sn,onSelect:Dt,get onRenderValue(){return Bn()},get onClassName(){return An()},get onFocus(){return _o},get onBlur(){return _o},get onRenderMenu(){return kt()},get onRenderContextMenu(){return Or()},get onSortModal(){return hr()},get onTransformModal(){return Pr()},onJSONEditorModal:Nr,$$legacy:!0}),jt=>f(Tn,jt),()=>r(Tn));var _t=P(V(Un,2)),rr=jt=>{var at=m2(),It=P(at);Te(()=>vt(It,r(je))),R(jt,at)};ie(_t,jt=>{r(je)&&jt(rr)});var Rn=V(_t,2),Hn=jt=>{var at=b2();rn(P(at),{get data(){return Nb}}),Oe("click",at,Ye),R(jt,at)};ie(Rn,jt=>{r(Q),D(()=>r(Q).length>1)&&jt(Hn)});var mn=V(Rn,2),yt=jt=>{var at=y2();Kr(()=>Oe("click",at,We)),no(at,It=>E?.(It)),R(jt,at)},ln=jt=>{var at=j2();Oe("click",at,Ye),R(jt,at)};ie(mn,jt=>{be()?jt(ln,!1):jt(yt)}),Te(()=>Bi(tn,r(nr))),R(Ne,Ct)},$$slots:{default:!0}}),R(F,Be)},$$slots:{default:!0}}),dt()})(Mn,ii(()=>r(oe),{onClose:()=>{var Xt;(Xt=r(oe))===null||Xt===void 0||Xt.onClose(),f(oe,void 0)}}))};ie(Zn,Mn=>{r(oe)&&Mn(Ur)}),Te(Mn=>jn=Tt(sr,1,"jse-main svelte-1l55585",null,jn,Mn),[()=>({"jse-focus":r(A)})]),Oe("keydown",sr,yr),R(ye,$n)},$$slots:{default:!0}}),xt(t,"get",ne),xt(t,"set",lt),xt(t,"update",tt),xt(t,"patch",Fe),xt(t,"select",He),xt(t,"expand",Nt),xt(t,"collapse",kn),xt(t,"transform",En),xt(t,"validate",qt),xt(t,"acceptAutoRepair",pn),xt(t,"scrollTo",Bt),xt(t,"findElement",dn),xt(t,"focus",pt),xt(t,"refresh",on),xt(t,"updateProps",Ge),xt(t,"destroy",Ft),dt(Xn)}function M2(e){var{target:t,props:n}=e,o=sx(_2,{target:t,props:n});return o.destroy=gt(function*(){return function(a,i){var s=Xd.get(a);return s?(Xd.delete(a),s(i)):Promise.resolve()}(o)}),Fn(),o}const A2=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,T2=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,z2=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function R2(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){P2(e);return}return t}function P2(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Uc(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const o=n.toLowerCase();if(o==="true")return!0;if(o==="false")return!1;if(o==="undefined")return;if(o==="null")return null;if(o==="nan")return Number.NaN;if(o==="infinity")return Number.POSITIVE_INFINITY;if(o==="-infinity")return Number.NEGATIVE_INFINITY}if(!z2.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(A2.test(e)||T2.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,R2)}return JSON.parse(e)}catch(o){if(t.strict)throw o;return e}}function N2(e,t={}){return Uc(e,{...t,strict:!0})}var $2=typeof Za=="object"&&Za&&Za.Object===Object&&Za,I2=typeof self=="object"&&self&&self.Object===Object&&self,B0=$2||I2||Function("return this")(),gu=B0.Symbol,F0=Object.prototype,q2=F0.hasOwnProperty,D2=F0.toString,dl=gu?gu.toStringTag:void 0;function U2(e){var t=q2.call(e,dl),n=e[dl];try{e[dl]=void 0;var o=!0}catch{}var a=D2.call(e);return o&&(t?e[dl]=n:delete e[dl]),a}var L2=Object.prototype,B2=L2.toString;function F2(e){return B2.call(e)}var W2="[object Null]",V2="[object Undefined]",kh=gu?gu.toStringTag:void 0;function H2(e){return e==null?e===void 0?V2:W2:kh&&kh in Object(e)?U2(e):F2(e)}function J2(e){return e!=null&&typeof e=="object"}var K2="[object Symbol]";function Y2(e){return typeof e=="symbol"||J2(e)&&H2(e)==K2}var Q2=/\s/;function G2(e){for(var t=e.length;t--&&Q2.test(e.charAt(t)););return t}var X2=/^\s+/;function Z2(e){return e&&e.slice(0,G2(e)+1).replace(X2,"")}function kv(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ch=NaN,e6=/^[-+]0x[0-9a-f]+$/i,t6=/^0b[01]+$/i,n6=/^0o[0-7]+$/i,r6=parseInt;function Sh(e){if(typeof e=="number")return e;if(Y2(e))return Ch;if(kv(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=kv(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Z2(e);var n=t6.test(e);return n||n6.test(e)?r6(e.slice(2),n?2:8):e6.test(e)?Ch:+e}var Ed=function(){return B0.Date.now()},o6="Expected a function",a6=Math.max,i6=Math.min;function s6(e,t,n){var o,a,i,s,l,c,u=0,d=!1,v=!1,p=!0;if(typeof e!="function")throw new TypeError(o6);t=Sh(t)||0,kv(n)&&(d=!!n.leading,v="maxWait"in n,i=v?a6(Sh(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function g(z){var U=o,ae=a;return o=a=void 0,u=z,s=e.apply(ae,U),s}function y(z){return u=z,l=setTimeout(x,t),d?g(z):s}function b(z){var U=z-c,ae=z-u,M=t-U;return v?i6(M,i-ae):M}function j(z){var U=z-c,ae=z-u;return c===void 0||U>=t||U<0||v&&ae>=i}function x(){var z=Ed();if(j(z))return C(z);l=setTimeout(x,b(z))}function C(z){return l=void 0,p&&o?g(z):(o=a=void 0,s)}function T(){l!==void 0&&clearTimeout(l),u=0,o=c=a=l=void 0}function O(){return l===void 0?s:C(Ed())}function w(){var z=Ed(),U=j(z);if(o=arguments,a=this,c=z,U){if(l===void 0)return y(c);if(v)return clearTimeout(l),l=setTimeout(x,t),g(c)}return l===void 0&&(l=setTimeout(x,t)),s}return w.cancel=T,w.flush=O,w}var W0=typeof Za=="object"&&Za&&Za.Object===Object&&Za,l6=typeof self=="object"&&self&&self.Object===Object&&self,ha=W0||l6||Function("return this")(),va=ha.Symbol,V0=Object.prototype,c6=V0.hasOwnProperty,u6=V0.toString,vl=va?va.toStringTag:void 0;function d6(e){var t=c6.call(e,vl),n=e[vl];try{e[vl]=void 0;var o=!0}catch{}var a=u6.call(e);return o&&(t?e[vl]=n:delete e[vl]),a}var v6=Object.prototype,f6=v6.toString;function p6(e){return f6.call(e)}var h6="[object Null]",g6="[object Undefined]",Oh=va?va.toStringTag:void 0;function Gi(e){return e==null?e===void 0?g6:h6:Oh&&Oh in Object(e)?d6(e):p6(e)}function fa(e){return e!=null&&typeof e=="object"}var m6="[object Symbol]";function Sf(e){return typeof e=="symbol"||fa(e)&&Gi(e)==m6}function b6(e,t){for(var n=-1,o=e==null?0:e.length,a=Array(o);++n<o;)a[n]=t(e[n],n,e);return a}var Po=Array.isArray,Eh=va?va.prototype:void 0,_h=Eh?Eh.toString:void 0;function H0(e){if(typeof e=="string")return e;if(Po(e))return b6(e,H0)+"";if(Sf(e))return _h?_h.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function ga(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Of(e){return e}var y6="[object AsyncFunction]",j6="[object Function]",x6="[object GeneratorFunction]",w6="[object Proxy]";function Ef(e){if(!ga(e))return!1;var t=Gi(e);return t==j6||t==x6||t==y6||t==w6}var _d=ha["__core-js_shared__"],Mh=function(){var e=/[^.]+$/.exec(_d&&_d.keys&&_d.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function k6(e){return!!Mh&&Mh in e}var C6=Function.prototype,S6=C6.toString;function Xi(e){if(e!=null){try{return S6.call(e)}catch{}try{return e+""}catch{}}return""}var O6=/[\\^$.*+?()[\]{}|]/g,E6=/^\[object .+?Constructor\]$/,_6=Function.prototype,M6=Object.prototype,A6=_6.toString,T6=M6.hasOwnProperty,z6=RegExp("^"+A6.call(T6).replace(O6,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R6(e){if(!ga(e)||k6(e))return!1;var t=Ef(e)?z6:E6;return t.test(Xi(e))}function P6(e,t){return e?.[t]}function Zi(e,t){var n=P6(e,t);return R6(n)?n:void 0}var Cv=Zi(ha,"WeakMap"),Ah=Object.create,N6=function(){function e(){}return function(t){if(!ga(t))return{};if(Ah)return Ah(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function $6(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function I6(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}var q6=800,D6=16,U6=Date.now;function L6(e){var t=0,n=0;return function(){var o=U6(),a=D6-(o-n);if(n=o,a>0){if(++t>=q6)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function B6(e){return function(){return e}}var mu=function(){try{var e=Zi(Object,"defineProperty");return e({},"",{}),e}catch{}}(),F6=mu?function(e,t){return mu(e,"toString",{configurable:!0,enumerable:!1,value:B6(t),writable:!0})}:Of,W6=L6(F6);function V6(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}var H6=9007199254740991,J6=/^(?:0|[1-9]\d*)$/;function _f(e,t){var n=typeof e;return t=t??H6,!!t&&(n=="number"||n!="symbol"&&J6.test(e))&&e>-1&&e%1==0&&e<t}function Uu(e,t,n){t=="__proto__"&&mu?mu(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ac(e,t){return e===t||e!==e&&t!==t}var K6=Object.prototype,Y6=K6.hasOwnProperty;function J0(e,t,n){var o=e[t];(!(Y6.call(e,t)&&ac(o,n))||n===void 0&&!(t in e))&&Uu(e,t,n)}function K0(e,t,n,o){var a=!n;n||(n={});for(var i=-1,s=t.length;++i<s;){var l=t[i],c=o?o(n[l],e[l],l,n,e):void 0;c===void 0&&(c=e[l]),a?Uu(n,l,c):J0(n,l,c)}return n}var Th=Math.max;function Q6(e,t,n){return t=Th(t===void 0?e.length-1:t,0),function(){for(var o=arguments,a=-1,i=Th(o.length-t,0),s=Array(i);++a<i;)s[a]=o[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=o[a];return l[t]=n(s),$6(e,this,l)}}function G6(e,t){return W6(Q6(e,t,Of),e+"")}var X6=9007199254740991;function Mf(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=X6}function Lu(e){return e!=null&&Mf(e.length)&&!Ef(e)}function Z6(e,t,n){if(!ga(n))return!1;var o=typeof t;return(o=="number"?Lu(n)&&_f(t,n.length):o=="string"&&t in n)?ac(n[t],e):!1}function Y0(e){return G6(function(t,n){var o=-1,a=n.length,i=a>1?n[a-1]:void 0,s=a>2?n[2]:void 0;for(i=e.length>3&&typeof i=="function"?(a--,i):void 0,s&&Z6(n[0],n[1],s)&&(i=a<3?void 0:i,a=1),t=Object(t);++o<a;){var l=n[o];l&&e(t,l,o,i)}return t})}var eO=Object.prototype;function Af(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||eO;return e===n}function tO(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}var nO="[object Arguments]";function zh(e){return fa(e)&&Gi(e)==nO}var Q0=Object.prototype,rO=Q0.hasOwnProperty,oO=Q0.propertyIsEnumerable,bu=zh(function(){return arguments}())?zh:function(e){return fa(e)&&rO.call(e,"callee")&&!oO.call(e,"callee")};function aO(){return!1}var G0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Rh=G0&&typeof module=="object"&&module&&!module.nodeType&&module,iO=Rh&&Rh.exports===G0,Ph=iO?ha.Buffer:void 0,sO=Ph?Ph.isBuffer:void 0,Ul=sO||aO,lO="[object Arguments]",cO="[object Array]",uO="[object Boolean]",dO="[object Date]",vO="[object Error]",fO="[object Function]",pO="[object Map]",hO="[object Number]",gO="[object Object]",mO="[object RegExp]",bO="[object Set]",yO="[object String]",jO="[object WeakMap]",xO="[object ArrayBuffer]",wO="[object DataView]",kO="[object Float32Array]",CO="[object Float64Array]",SO="[object Int8Array]",OO="[object Int16Array]",EO="[object Int32Array]",_O="[object Uint8Array]",MO="[object Uint8ClampedArray]",AO="[object Uint16Array]",TO="[object Uint32Array]",lr={};lr[kO]=lr[CO]=lr[SO]=lr[OO]=lr[EO]=lr[_O]=lr[MO]=lr[AO]=lr[TO]=!0;lr[lO]=lr[cO]=lr[xO]=lr[uO]=lr[wO]=lr[dO]=lr[vO]=lr[fO]=lr[pO]=lr[hO]=lr[gO]=lr[mO]=lr[bO]=lr[yO]=lr[jO]=!1;function zO(e){return fa(e)&&Mf(e.length)&&!!lr[Gi(e)]}function Tf(e){return function(t){return e(t)}}var X0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wl=X0&&typeof module=="object"&&module&&!module.nodeType&&module,RO=wl&&wl.exports===X0,Md=RO&&W0.process,Ws=function(){try{var e=wl&&wl.require&&wl.require("util").types;return e||Md&&Md.binding&&Md.binding("util")}catch{}}(),Nh=Ws&&Ws.isTypedArray,zf=Nh?Tf(Nh):zO,PO=Object.prototype,NO=PO.hasOwnProperty;function Z0(e,t){var n=Po(e),o=!n&&bu(e),a=!n&&!o&&Ul(e),i=!n&&!o&&!a&&zf(e),s=n||o||a||i,l=s?tO(e.length,String):[],c=l.length;for(var u in e)(t||NO.call(e,u))&&!(s&&(u=="length"||a&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||_f(u,c)))&&l.push(u);return l}function eb(e,t){return function(n){return e(t(n))}}var $O=eb(Object.keys,Object),IO=Object.prototype,qO=IO.hasOwnProperty;function DO(e){if(!Af(e))return $O(e);var t=[];for(var n in Object(e))qO.call(e,n)&&n!="constructor"&&t.push(n);return t}function Rf(e){return Lu(e)?Z0(e):DO(e)}function UO(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var LO=Object.prototype,BO=LO.hasOwnProperty;function FO(e){if(!ga(e))return UO(e);var t=Af(e),n=[];for(var o in e)o=="constructor"&&(t||!BO.call(e,o))||n.push(o);return n}function Pf(e){return Lu(e)?Z0(e,!0):FO(e)}var WO=Y0(function(e,t,n,o){K0(t,Pf(t),e,o)}),VO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,HO=/^\w*$/;function Nf(e,t){if(Po(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Sf(e)?!0:HO.test(e)||!VO.test(e)||t!=null&&e in Object(t)}var Ll=Zi(Object,"create");function JO(){this.__data__=Ll?Ll(null):{},this.size=0}function KO(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var YO="__lodash_hash_undefined__",QO=Object.prototype,GO=QO.hasOwnProperty;function XO(e){var t=this.__data__;if(Ll){var n=t[e];return n===YO?void 0:n}return GO.call(t,e)?t[e]:void 0}var ZO=Object.prototype,e4=ZO.hasOwnProperty;function t4(e){var t=this.__data__;return Ll?t[e]!==void 0:e4.call(t,e)}var n4="__lodash_hash_undefined__";function r4(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ll&&t===void 0?n4:t,this}function Ji(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Ji.prototype.clear=JO;Ji.prototype.delete=KO;Ji.prototype.get=XO;Ji.prototype.has=t4;Ji.prototype.set=r4;function o4(){this.__data__=[],this.size=0}function Bu(e,t){for(var n=e.length;n--;)if(ac(e[n][0],t))return n;return-1}var a4=Array.prototype,i4=a4.splice;function s4(e){var t=this.__data__,n=Bu(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():i4.call(t,n,1),--this.size,!0}function l4(e){var t=this.__data__,n=Bu(t,e);return n<0?void 0:t[n][1]}function c4(e){return Bu(this.__data__,e)>-1}function u4(e,t){var n=this.__data__,o=Bu(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}function Da(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Da.prototype.clear=o4;Da.prototype.delete=s4;Da.prototype.get=l4;Da.prototype.has=c4;Da.prototype.set=u4;var Bl=Zi(ha,"Map");function d4(){this.size=0,this.__data__={hash:new Ji,map:new(Bl||Da),string:new Ji}}function v4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Fu(e,t){var n=e.__data__;return v4(t)?n[typeof t=="string"?"string":"hash"]:n.map}function f4(e){var t=Fu(this,e).delete(e);return this.size-=t?1:0,t}function p4(e){return Fu(this,e).get(e)}function h4(e){return Fu(this,e).has(e)}function g4(e,t){var n=Fu(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}function Ua(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Ua.prototype.clear=d4;Ua.prototype.delete=f4;Ua.prototype.get=p4;Ua.prototype.has=h4;Ua.prototype.set=g4;var m4="Expected a function";function $f(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(m4);var n=function(){var o=arguments,a=t?t.apply(this,o):o[0],i=n.cache;if(i.has(a))return i.get(a);var s=e.apply(this,o);return n.cache=i.set(a,s)||i,s};return n.cache=new($f.Cache||Ua),n}$f.Cache=Ua;var b4=500;function y4(e){var t=$f(e,function(o){return n.size===b4&&n.clear(),o}),n=t.cache;return t}var j4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,x4=/\\(\\)?/g,w4=y4(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(j4,function(n,o,a,i){t.push(a?i.replace(x4,"$1"):o||n)}),t});function k4(e){return e==null?"":H0(e)}function tb(e,t){return Po(e)?e:Nf(e,t)?[e]:w4(k4(e))}function Wu(e){if(typeof e=="string"||Sf(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function nb(e,t){t=tb(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[Wu(t[n++])];return n&&n==o?e:void 0}function C4(e,t,n){var o=e==null?void 0:nb(e,t);return o===void 0?n:o}function S4(e,t){for(var n=-1,o=t.length,a=e.length;++n<o;)e[a+n]=t[n];return e}var rb=eb(Object.getPrototypeOf,Object),O4="[object Object]",E4=Function.prototype,_4=Object.prototype,ob=E4.toString,M4=_4.hasOwnProperty,A4=ob.call(Object);function T4(e){if(!fa(e)||Gi(e)!=O4)return!1;var t=rb(e);if(t===null)return!0;var n=M4.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&ob.call(n)==A4}function z4(){this.__data__=new Da,this.size=0}function R4(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function P4(e){return this.__data__.get(e)}function N4(e){return this.__data__.has(e)}var $4=200;function I4(e,t){var n=this.__data__;if(n instanceof Da){var o=n.__data__;if(!Bl||o.length<$4-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ua(o)}return n.set(e,t),this.size=n.size,this}function Yo(e){var t=this.__data__=new Da(e);this.size=t.size}Yo.prototype.clear=z4;Yo.prototype.delete=R4;Yo.prototype.get=P4;Yo.prototype.has=N4;Yo.prototype.set=I4;var ab=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$h=ab&&typeof module=="object"&&module&&!module.nodeType&&module,q4=$h&&$h.exports===ab,Ih=q4?ha.Buffer:void 0,qh=Ih?Ih.allocUnsafe:void 0;function ib(e,t){if(t)return e.slice();var n=e.length,o=qh?qh(n):new e.constructor(n);return e.copy(o),o}function D4(e,t){for(var n=-1,o=e==null?0:e.length,a=0,i=[];++n<o;){var s=e[n];t(s,n,e)&&(i[a++]=s)}return i}function U4(){return[]}var L4=Object.prototype,B4=L4.propertyIsEnumerable,Dh=Object.getOwnPropertySymbols,F4=Dh?function(e){return e==null?[]:(e=Object(e),D4(Dh(e),function(t){return B4.call(e,t)}))}:U4;function W4(e,t,n){var o=t(e);return Po(e)?o:S4(o,n(e))}function Sv(e){return W4(e,Rf,F4)}var Ov=Zi(ha,"DataView"),Ev=Zi(ha,"Promise"),_v=Zi(ha,"Set"),Uh="[object Map]",V4="[object Object]",Lh="[object Promise]",Bh="[object Set]",Fh="[object WeakMap]",Wh="[object DataView]",H4=Xi(Ov),J4=Xi(Bl),K4=Xi(Ev),Y4=Xi(_v),Q4=Xi(Cv),Do=Gi;(Ov&&Do(new Ov(new ArrayBuffer(1)))!=Wh||Bl&&Do(new Bl)!=Uh||Ev&&Do(Ev.resolve())!=Lh||_v&&Do(new _v)!=Bh||Cv&&Do(new Cv)!=Fh)&&(Do=function(e){var t=Gi(e),n=t==V4?e.constructor:void 0,o=n?Xi(n):"";if(o)switch(o){case H4:return Wh;case J4:return Uh;case K4:return Lh;case Y4:return Bh;case Q4:return Fh}return t});var G4=Object.prototype,X4=G4.hasOwnProperty;function Z4(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&X4.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var yu=ha.Uint8Array;function If(e){var t=new e.constructor(e.byteLength);return new yu(t).set(new yu(e)),t}function e8(e,t){var n=If(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var t8=/\w*$/;function n8(e){var t=new e.constructor(e.source,t8.exec(e));return t.lastIndex=e.lastIndex,t}var Vh=va?va.prototype:void 0,Hh=Vh?Vh.valueOf:void 0;function r8(e){return Hh?Object(Hh.call(e)):{}}function sb(e,t){var n=t?If(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var o8="[object Boolean]",a8="[object Date]",i8="[object Map]",s8="[object Number]",l8="[object RegExp]",c8="[object Set]",u8="[object String]",d8="[object Symbol]",v8="[object ArrayBuffer]",f8="[object DataView]",p8="[object Float32Array]",h8="[object Float64Array]",g8="[object Int8Array]",m8="[object Int16Array]",b8="[object Int32Array]",y8="[object Uint8Array]",j8="[object Uint8ClampedArray]",x8="[object Uint16Array]",w8="[object Uint32Array]";function k8(e,t,n){var o=e.constructor;switch(t){case v8:return If(e);case o8:case a8:return new o(+e);case f8:return e8(e);case p8:case h8:case g8:case m8:case b8:case y8:case j8:case x8:case w8:return sb(e,n);case i8:return new o;case s8:case u8:return new o(e);case l8:return n8(e);case c8:return new o;case d8:return r8(e)}}function lb(e){return typeof e.constructor=="function"&&!Af(e)?N6(rb(e)):{}}var C8="[object Map]";function S8(e){return fa(e)&&Do(e)==C8}var Jh=Ws&&Ws.isMap,O8=Jh?Tf(Jh):S8,E8="[object Set]";function _8(e){return fa(e)&&Do(e)==E8}var Kh=Ws&&Ws.isSet,M8=Kh?Tf(Kh):_8,A8=1,cb="[object Arguments]",T8="[object Array]",z8="[object Boolean]",R8="[object Date]",P8="[object Error]",ub="[object Function]",N8="[object GeneratorFunction]",$8="[object Map]",I8="[object Number]",db="[object Object]",q8="[object RegExp]",D8="[object Set]",U8="[object String]",L8="[object Symbol]",B8="[object WeakMap]",F8="[object ArrayBuffer]",W8="[object DataView]",V8="[object Float32Array]",H8="[object Float64Array]",J8="[object Int8Array]",K8="[object Int16Array]",Y8="[object Int32Array]",Q8="[object Uint8Array]",G8="[object Uint8ClampedArray]",X8="[object Uint16Array]",Z8="[object Uint32Array]",or={};or[cb]=or[T8]=or[F8]=or[W8]=or[z8]=or[R8]=or[V8]=or[H8]=or[J8]=or[K8]=or[Y8]=or[$8]=or[I8]=or[db]=or[q8]=or[D8]=or[U8]=or[L8]=or[Q8]=or[G8]=or[X8]=or[Z8]=!0;or[P8]=or[ub]=or[B8]=!1;function Lc(e,t,n,o,a,i){var s,l=t&A8;if(s!==void 0)return s;if(!ga(e))return e;var c=Po(e);if(c)s=Z4(e);else{var u=Do(e),d=u==ub||u==N8;if(Ul(e))return ib(e,l);if(u==db||u==cb||d&&!a)s=d?{}:lb(e);else{if(!or[u])return a?e:{};s=k8(e,u,l)}}i||(i=new Yo);var v=i.get(e);if(v)return v;i.set(e,s),M8(e)?e.forEach(function(y){s.add(Lc(y,t,n,y,e,i))}):O8(e)&&e.forEach(function(y,b){s.set(b,Lc(y,t,n,b,e,i))});var p=Sv,g=c?void 0:p(e);return V6(g||e,function(y,b){g&&(b=y,y=e[b]),J0(s,b,Lc(y,t,n,b,e,i))}),s}var eE=1,tE=4;function nE(e){return Lc(e,eE|tE)}var rE="__lodash_hash_undefined__";function oE(e){return this.__data__.set(e,rE),this}function aE(e){return this.__data__.has(e)}function ju(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ua;++t<n;)this.add(e[t])}ju.prototype.add=ju.prototype.push=oE;ju.prototype.has=aE;function iE(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function sE(e,t){return e.has(t)}var lE=1,cE=2;function vb(e,t,n,o,a,i){var s=n&lE,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var u=i.get(e),d=i.get(t);if(u&&d)return u==t&&d==e;var v=-1,p=!0,g=n&cE?new ju:void 0;for(i.set(e,t),i.set(t,e);++v<l;){var y=e[v],b=t[v];if(o)var j=s?o(b,y,v,t,e,i):o(y,b,v,e,t,i);if(j!==void 0){if(j)continue;p=!1;break}if(g){if(!iE(t,function(x,C){if(!sE(g,C)&&(y===x||a(y,x,n,o,i)))return g.push(C)})){p=!1;break}}else if(!(y===b||a(y,b,n,o,i))){p=!1;break}}return i.delete(e),i.delete(t),p}function uE(e){var t=-1,n=Array(e.size);return e.forEach(function(o,a){n[++t]=[a,o]}),n}function dE(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var vE=1,fE=2,pE="[object Boolean]",hE="[object Date]",gE="[object Error]",mE="[object Map]",bE="[object Number]",yE="[object RegExp]",jE="[object Set]",xE="[object String]",wE="[object Symbol]",kE="[object ArrayBuffer]",CE="[object DataView]",Yh=va?va.prototype:void 0,Ad=Yh?Yh.valueOf:void 0;function SE(e,t,n,o,a,i,s){switch(n){case CE:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case kE:return!(e.byteLength!=t.byteLength||!i(new yu(e),new yu(t)));case pE:case hE:case bE:return ac(+e,+t);case gE:return e.name==t.name&&e.message==t.message;case yE:case xE:return e==t+"";case mE:var l=uE;case jE:var c=o&vE;if(l||(l=dE),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;o|=fE,s.set(e,t);var d=vb(l(e),l(t),o,a,i,s);return s.delete(e),d;case wE:if(Ad)return Ad.call(e)==Ad.call(t)}return!1}var OE=1,EE=Object.prototype,_E=EE.hasOwnProperty;function ME(e,t,n,o,a,i){var s=n&OE,l=Sv(e),c=l.length,u=Sv(t),d=u.length;if(c!=d&&!s)return!1;for(var v=c;v--;){var p=l[v];if(!(s?p in t:_E.call(t,p)))return!1}var g=i.get(e),y=i.get(t);if(g&&y)return g==t&&y==e;var b=!0;i.set(e,t),i.set(t,e);for(var j=s;++v<c;){p=l[v];var x=e[p],C=t[p];if(o)var T=s?o(C,x,p,t,e,i):o(x,C,p,e,t,i);if(!(T===void 0?x===C||a(x,C,n,o,i):T)){b=!1;break}j||(j=p=="constructor")}if(b&&!j){var O=e.constructor,w=t.constructor;O!=w&&"constructor"in e&&"constructor"in t&&!(typeof O=="function"&&O instanceof O&&typeof w=="function"&&w instanceof w)&&(b=!1)}return i.delete(e),i.delete(t),b}var AE=1,Qh="[object Arguments]",Gh="[object Array]",Ac="[object Object]",TE=Object.prototype,Xh=TE.hasOwnProperty;function zE(e,t,n,o,a,i){var s=Po(e),l=Po(t),c=s?Gh:Do(e),u=l?Gh:Do(t);c=c==Qh?Ac:c,u=u==Qh?Ac:u;var d=c==Ac,v=u==Ac,p=c==u;if(p&&Ul(e)){if(!Ul(t))return!1;s=!0,d=!1}if(p&&!d)return i||(i=new Yo),s||zf(e)?vb(e,t,n,o,a,i):SE(e,t,c,n,o,a,i);if(!(n&AE)){var g=d&&Xh.call(e,"__wrapped__"),y=v&&Xh.call(t,"__wrapped__");if(g||y){var b=g?e.value():e,j=y?t.value():t;return i||(i=new Yo),a(b,j,n,o,i)}}return p?(i||(i=new Yo),ME(e,t,n,o,a,i)):!1}function qf(e,t,n,o,a){return e===t?!0:e==null||t==null||!fa(e)&&!fa(t)?e!==e&&t!==t:zE(e,t,n,o,qf,a)}var RE=1,PE=2;function NE(e,t,n,o){var a=n.length,i=a;if(e==null)return!i;for(e=Object(e);a--;){var s=n[a];if(s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){s=n[a];var l=s[0],c=e[l],u=s[1];if(s[2]){if(c===void 0&&!(l in e))return!1}else{var d=new Yo,v;if(!(v===void 0?qf(u,c,RE|PE,o,d):v))return!1}}return!0}function fb(e){return e===e&&!ga(e)}function $E(e){for(var t=Rf(e),n=t.length;n--;){var o=t[n],a=e[o];t[n]=[o,a,fb(a)]}return t}function pb(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function IE(e){var t=$E(e);return t.length==1&&t[0][2]?pb(t[0][0],t[0][1]):function(n){return n===e||NE(n,e,t)}}function qE(e,t){return e!=null&&t in Object(e)}function DE(e,t,n){t=tb(t,e);for(var o=-1,a=t.length,i=!1;++o<a;){var s=Wu(t[o]);if(!(i=e!=null&&n(e,s)))break;e=e[s]}return i||++o!=a?i:(a=e==null?0:e.length,!!a&&Mf(a)&&_f(s,a)&&(Po(e)||bu(e)))}function UE(e,t){return e!=null&&DE(e,t,qE)}var LE=1,BE=2;function FE(e,t){return Nf(e)&&fb(t)?pb(Wu(e),t):function(n){var o=C4(n,e);return o===void 0&&o===t?UE(n,e):qf(t,o,LE|BE)}}function WE(e){return function(t){return t?.[e]}}function VE(e){return function(t){return nb(t,e)}}function HE(e){return Nf(e)?WE(Wu(e)):VE(e)}function JE(e){return typeof e=="function"?e:e==null?Of:typeof e=="object"?Po(e)?FE(e[0],e[1]):IE(e):HE(e)}function KE(e){return function(t,n,o){for(var a=-1,i=Object(t),s=o(t),l=s.length;l--;){var c=s[++a];if(n(i[c],c,i)===!1)break}return t}}var hb=KE();function YE(e,t){return e&&hb(e,t,Rf)}function Mv(e,t,n){(n!==void 0&&!ac(e[t],n)||n===void 0&&!(t in e))&&Uu(e,t,n)}function QE(e){return fa(e)&&Lu(e)}function Av(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function GE(e){return K0(e,Pf(e))}function XE(e,t,n,o,a,i,s){var l=Av(e,n),c=Av(t,n),u=s.get(c);if(u){Mv(e,n,u);return}var d=i?i(l,c,n+"",e,t,s):void 0,v=d===void 0;if(v){var p=Po(c),g=!p&&Ul(c),y=!p&&!g&&zf(c);d=c,p||g||y?Po(l)?d=l:QE(l)?d=I6(l):g?(v=!1,d=ib(c,!0)):y?(v=!1,d=sb(c,!0)):d=[]:T4(c)||bu(c)?(d=l,bu(l)?d=GE(l):(!ga(l)||Ef(l))&&(d=lb(c))):v=!1}v&&(s.set(c,d),a(d,c,o,i,s),s.delete(c)),Mv(e,n,d)}function gb(e,t,n,o,a){e!==t&&hb(t,function(i,s){if(a||(a=new Yo),ga(i))XE(e,t,s,n,gb,o,a);else{var l=o?o(Av(e,s),i,s+"",e,t,a):void 0;l===void 0&&(l=i),Mv(e,s,l)}},Pf)}var ZE=Y0(function(e,t,n,o){gb(e,t,n,o)});function e3(e,t){var n={};return t=JE(t),YE(e,function(o,a,i){Uu(n,t(o,a,i),o)}),n}const t3=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),n3=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),r3=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),o3=/[^\p{L}\d]+/giu,Zh="$1\0$2",eg="";function mb(e){let t=e.trim();t=t.replace(t3,Zh).replace(n3,Zh),t=t.replace(o3,"\0");let n=0,o=t.length;for(;t.charAt(n)==="\0";)n++;if(n===o)return[];for(;t.charAt(o-1)==="\0";)o--;return t.slice(n,o).split(/\0/g)}function a3(e){const t=mb(e);for(let n=0;n<t.length;n++){const o=t[n],a=r3.exec(o);if(a){const i=a.index+(a[1]??a[2]).length;t.splice(n,1,o.slice(0,i),o.slice(i))}}return t}function i3(e,t){const[n,o,a]=u3(e,t),i=s3(void 0),s=l3(void 0),l=c3(i,s);return n+o.map((c,u)=>u===0?i(c):l(c,u)).join("")+a}function s3(e){return t=>t.toLocaleLowerCase(e)}function l3(e){return t=>t.toLocaleUpperCase(e)}function c3(e,t){return(n,o)=>{const a=n[0];return(o>0&&a>="0"&&a<="9"?"_"+a:t(a))+e(n.slice(1))}}function u3(e,t={}){const n=t.split??(t.separateNumbers?a3:mb),o=t.prefixCharacters??eg,a=t.suffixCharacters??eg;let i=0,s=e.length;for(;i<e.length;){const l=e.charAt(i);if(!o.includes(l))break;i++}for(;s>i;){const l=s-1,c=e.charAt(l);if(!a.includes(c))break;s=l}return[e.slice(0,i),n(e.slice(i,s)),e.slice(s)]}const kl=e=>/.+-.+/.test(e)?i3(e):e,d3=e=>Object.prototype.toString.call(e).slice(8,-1)==="Object";function v3(e,t){const n=Object.create(null),o=e.split(",");for(let a=0;a<o.length;a++)n[o[a]]=!0;return a=>!!n[a]}const f3=v3("String,Number,Boolean,Function,Symbol,BigInt");function p3(e){const t=e?.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function h3(e,t){let n;const o=p3(t);if(f3(o)){const a=typeof e;n=a===o.toLowerCase(),!n&&a==="object"&&(n=e instanceof t)}else o==="Object"?n=ga(e):o==="Array"?n=Array.isArray(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function g3({prop:e,type:t,validator:n}){if(![void 0,null].includes(e)&&t){let o=!1;const a=Array.isArray(t)?t:[t],i=[];for(let s=0;s<a.length&&!o;s++){const{valid:l,expectedType:c}=h3(e,a[s]);i.push(c||""),o=l}if(!o)throw new TypeError(`Invalid prop: type check failed, expecting [${i.join(", ")}], receiving: ${e}`)}if(n&&!n(e))throw new Error(`Invalid prop: validator check failed, receiving: ${e}`)}function m3(e,{mergeObject:t,mergeObjectCustomizer:n,mergeFunction:o}){const a=[];for(let s=e.length-1;s>=0;s--)a.push(e[s]);const i=n||(o?(s,l)=>typeof s=="function"&&typeof l=="function"?o?.(l,s):void 0:void 0);return t==="deep"?ZE(...a,i):WO(...a,i)}function b3(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function Ja(e,t={}){const{type:n,default:o,defaultIsDynamic:a=!1,required:i=!1,validator:s,camelizeObjectKeys:l=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:u=!0}=t;let{mergeObject:d="deep",mergeObjectCustomizer:v,mergeFunction:p=!1}=t;const g=[];let y,b=!1,j=!1;const x=C=>{if(C!==void 0){g3({type:n,prop:C,validator:s});const T=d3(C),O=typeof C=="function";return b=T,j=O,T?(C=nE(C),l?e3(C,(w,z)=>kl(z)):C):C}};for(const C of e)g.push(x(C));if(!a)g.push(x(o));else if(typeof o!="function")throw new TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${o}`);b||(d=!1,j||(p=!1));for(let C=0;C<g.length;C++){const T=g[C];if(T!==void 0){C===g.length-1?y=T:d?y=m3(c?[T,o]:g,{mergeObject:d,mergeObjectCustomizer:v,mergeFunction:p}):p?y=b3(u?[T,o]:g,{mergeFunction:p}):y=T;break}}if(i&&[void 0,null].includes(y))throw new Error("Missing required prop");return a?Ja(e,{...t,default:o(y),defaultIsDynamic:!1}):y}function tg(e){const t=Array.from(kl(e));return t[0]=t[0].toUpperCase(),t.unshift("o","n"),t.join("")}function y3(e,{props:t=[],camelizePropNames:n=!1}={}){const o={props:{},attrs:{},listeners:{},hooks:{},slots:{}};let a;if(Array.isArray(t))a=n?t.map(i=>kl(i)):t;else if(n){a=[];for(const i in t)a.push(kl(i))}else a=Object.keys(t);for(const i in e)if(i.startsWith("@")){const s=i.substring(1);if(s.startsWith("vue:"))o.hooks[tg(s.replace("vue:","vnode-"))]=e[i];else{if(s.startsWith("vnode"))throw new Error("@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.");o.listeners[tg(s)]=e[i]}}else if(i.startsWith("#")){const s=i.substring(1);s&&(o.slots[s]=e[i])}else{const s=n?kl(i):i;a.includes(s)?o.props[s]=e[i]:o.attrs[i]=e[i]}return o}const ng="JsonEditorVue",Bc=["mainMenuBar","navigationBar","statusBar","askToFormat","readOnly","escapeControlCharacters","escapeUnicodeCharacters","flattenColumns"],Fa={},rg={},Fc="modelValue",og="update:modelValue",ag={[Fc]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(Bc.map(e=>[e,{type:Boolean,default:void 0}]))},j3=vg({name:ng,install(e,t){const n=y3(t||{},{props:ag});Object.assign(Fa,n.props),Object.assign(rg,n.attrs),e.component(ng,this)},props:ag,emits:{[og](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:n,expose:o}){var a;const i=(a=Qb())==null?void 0:a.proxy,s=bl(),l=bl(!1),c=bl();Gb(()=>{var x;c.value=Ja([e.mode,Fa.mode],{type:String}),(x=s.value)==null||x.updateProps({mode:c.value||kr.tree})});const u=x=>{n("update:mode",x)};Fa.mode!==void 0&&e.mode===void 0&&u(Fa.mode);const d=Wf(()=>Ja([e.debounce,Fa.debounce,300],{type:Number})),v=Wf(()=>Ja([e.stringified,Fa.stringified,!0],{type:Boolean}));let p=Uc;const g=x=>{l.value=!0,!v.value&&x.text&&(s.value&&!s.value.validate()&&(x.json=p(x.text)),x.text=void 0),n(og,x.text===void 0?x.json:x.text)},y=s6(g,d.value),b=x=>{c.value==="text"?y(x):g(x)},j=(x,C)=>(...T)=>{x(...T),C(...T)};return o?.({jsonEditor:s}),Xb(()=>{var x;(x=s.value)==null||x.destroy()}),Zb(()=>{const x=Ja([e[Fc],Fa[Fc]]),C=Object.fromEntries(Array.from(Bc,O=>[O,Ja([e[O],Fa[O]])]).filter(([,O])=>O!==void 0)),T=Ja([C,t,rg],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:O=>{var w;return p=((w=O.parser)==null?void 0:w.parse)||Uc,{onChange:b,onChangeMode:u,mode:c.value,parser:{parse:N2,stringify:JSON.stringify},...x!==void 0&&{content:{[typeof x=="string"&&c.value==="text"&&v.value?"text":"json"]:x}}}},mergeFunction:j,mergeObject:"shallow",type:Object});s.value=M2({target:i?.$refs.jsonEditorRef,props:T}),Ku(()=>e[Fc],O=>{if(l.value){l.value=!1;return}s.value&&s.value.set([void 0,""].includes(O)?{text:""}:{[typeof O=="string"&&c.value==="text"&&v.value?"text":"json"]:O})},{deep:!0}),Ku(()=>Array.from(Bc,O=>e[O]),O=>{var w;(w=s.value)==null||w.updateProps(Object.fromEntries(Array.from(O,(z,U)=>[Bc[U],z]).filter(([,z])=>z!==void 0)))}),Ku(()=>t,O=>{var w,z;const U={};(O.onChange||O["on-change"])&&(U.onChange=b),(O.onChangeMode||O["on-change-mode"])&&(U.onChangeMode=u),p=((w=O.parser)==null?void 0:w.parse)||Uc,(z=s.value)==null||z.updateProps(Object.getOwnPropertyNames(U).length>0?Ja([O,U],{camelizeObjectKeys:!0,mergeFunction:j,mergeObject:"shallow",type:Object}):O)},{deep:!0}),o||(o=O=>{for(const w in O)i[w]=Wa(O[w])},o({jsonEditor:s}))}),()=>e1("div",{ref:"jsonEditorRef"})}});const X3=vg({__name:"json-editor",setup(e){const{t}=t1(),n=n1(),o=bl('{ "a": { "array": [1, 2, 3] } }'),a=bl("");function i(s){ao(s)?a.value=`$.${Br(s.path)}`:Tr(s)?a.value=`$.${Br(s.path)}`:$r(s)?a.value=`$.${Br(s.path)}`:vn(s)?a.value=`$.${Br(s.path)}`:Pn(s)?a.value=`$.${Br(s.focusPath)}`:a.value="No available in this mode"}return(s,l)=>{const c=Cb,u=oy,d=ay;return r1(),o1("div",null,[ns(Wa(j3),{modelValue:Wa(o),"onUpdate:modelValue":l[0]||(l[0]=v=>a1(o)?o.value=v:null),mode:"text",class:i1(Wa(n).isDarkTheme?"jse-theme-dark":""),"on-select":i,"mb-2":""},null,8,["modelValue","class"]),ns(u,{label:Wa(t)("tools.json-editor.texts.label-current-selected-node-jsonpath")},{default:Vf(()=>[ns(c,{value:Wa(a)},null,8,["value"])]),_:1},8,["label"]),ns(d),ns(u,{label:Wa(t)("tools.json-editor.texts.label-your-edited-json")},{default:Vf(()=>[ns(c,{value:Wa(o),language:"json"},null,8,["value"])]),_:1},8,["label"])])}}});export{X3 as default};
