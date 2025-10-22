import{cQ as a,d as E,a4 as S,aj as B,be as F,dm as k,i as L,o,c as r,k as v,l as s,m as T,F as x,D as _,x as V,a as l,G as y,H as c,j as N,w as R,dn as U,b0 as $,af as j}from"./index-1de3a68b.js";/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=a("outline","circle-arrow-up-right","IconCircleArrowUpRight",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M15 9l-6 6",key:"svg-1"}],["path",{d:"M15 15v-6h-6",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var H=a("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var P=a("outline","database-exclamation","IconDatabaseExclamation",[["path",{d:"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3",key:"svg-0"}],["path",{d:"M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.182 -.086 3.148 -.241m4.852 -2.759v-6",key:"svg-1"}],["path",{d:"M4 12v6c0 1.657 3.582 3 8 3c1.064 0 2.079 -.078 3.007 -.22",key:"svg-2"}],["path",{d:"M19 16v3",key:"svg-3"}],["path",{d:"M19 22v.01",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A=a("outline","device-desktop-exclamation","IconDeviceDesktopExclamation",[["path",{d:"M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7",key:"svg-0"}],["path",{d:"M7 20h8",key:"svg-1"}],["path",{d:"M9 16v4",key:"svg-2"}],["path",{d:"M15 16v4",key:"svg-3"}],["path",{d:"M19 16v3",key:"svg-4"}],["path",{d:"M19 22v.01",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q=a("outline","external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var G=a("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);const W={"mb-2":"",flex:"","items-center":"","gap-2":"","text-xl":"","font-bold":""},q={flex:"","items-center":"","gap-2":"","text-lg":"","font-bold":""},J=["title","onClick"],K={"op-70":""},Z=E({__name:"http-status-codes",setup(O){const{t:h}=S(),n=B({tool:"http-status-codes",name:"s",defaultValue:""}),{searchResult:f}=F({search:n,data:k.flatMap(({codes:t,category:e})=>t.map(i=>({...i,category:e}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),M=L(()=>n.value?[{category:"Search results",codes:f.value}]:k);function I(t){const e=t.toLowerCase();return e.includes("1xx")?U:e.includes("2xx")?H:e.includes("3xx")?z:e.includes("4xx")?A:e.includes("5xx")?P:G}function C(t){window.open(`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${t}`,"_blank","noopener,noreferrer")}return(t,e)=>{const i=V,m=$,b=j;return o(),r("div",null,[v(i,{value:s(n),"onUpdate:value":e[0]||(e[0]=d=>T(n)?n.value=d:null),placeholder:s(h)("tools.http-status-codes.texts.placeholder-search-http-status"),autofocus:"","raw-text":"","mb-10":""},null,8,["value","placeholder"]),(o(!0),r(x,null,_(s(M),({codes:d,category:u})=>(o(),r("div",{key:u,"mb-8":""},[l("div",W,[v(m,{component:I(u),size:"26"},null,8,["component"]),y(" "+c(u),1)]),(o(!0),r(x,null,_(d,({code:p,description:w,name:D,type:g})=>(o(),N(b,{key:p,"mb-2":""},{default:R(()=>[l("div",q,[y(c(p)+" "+c(D)+" ",1),l("div",{class:"flex cursor-pointer items-center justify-center rounded text-gray-500 transition-colors hover:text-blue-600",title:s(h)("tools.http-status-codes.texts.title-view-mdn-documentation"),onClick:X=>C(p)},[v(m,{component:s(Q),size:"18"},null,8,["component"])],8,J)]),l("div",K,c(w)+" "+c(g!=="HTTP"?`For ${g}.`:""),1)]),_:2},1024))),128))]))),128))])}}});export{Z as default};
