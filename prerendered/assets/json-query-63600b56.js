import{d as y,a4 as g,aj as j,r as f,i as v,T as q,aX as x,o as b,c as h,k as a,w as u,l as e,m,a as k,G as N,H as w,x as V,af as S}from"./index-1de3a68b.js";import{d as B}from"./jsonquery-52693bba.js";import{_ as Y}from"./TextareaCopyable-4c7847d0.js";import{_ as A}from"./a-8ba5a4c7.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";const C={"mb-2":"",flex:"","justify-center":""},J=2,L=y({__name:"json-query",setup(E){const{t}=g(),s=j({tool:"json-query",name:"q",defaultValue:`
  .friends 
    | filter(.city == "New York") 
    | sort(.age) 
    | pick(.name, .age)
`}),n=f(`{
  "friends": [
    { "name": "Chris", "age": 23, "city": "New York" },
    { "name": "Emily", "age": 19, "city": "Atlanta" },
    { "name": "Joe", "age": 32, "city": "New York" },
    { "name": "Kevin", "age": 19, "city": "Atlanta" },
    { "name": "Michelle", "age": 27, "city": "Los Angeles" },
    { "name": "Robert", "age": 45, "city": "Manhattan" },
    { "name": "Sarah", "age": 31, "city": "New York" }
  ]
}`),p=v(()=>{try{const o=JSON.parseBigInt(n.value);return JSON.stringify(B(o,s.value),null,J)}catch(o){return o.toString()}}),d=q({source:n,rules:[{validator:o=>x.parse(o),message:t("tools.json-query.texts.message-provided-json-is-not-valid")}]});return(o,l)=>{const i=V,_=A,c=S;return b(),h("div",null,[a(c,{title:e(t)("tools.json-query.texts.title-input"),"mb-2":""},{default:u(()=>[a(i,{value:e(s),"onUpdate:value":l[0]||(l[0]=r=>m(s)?s.value=r:null),label:e(t)("tools.json-query.texts.label-json-query"),placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-query-string-here"),"mb-2":""},null,8,["value","label","placeholder"]),k("div",C,[a(_,{target:"_blank",href:"https://jsonquerylang.org/docs/"},{default:u(()=>[N(w(e(t)("tools.json-query.texts.tag-see-json-query-lang-documentation")),1)]),_:1})]),a(i,{value:e(n),"onUpdate:value":l[1]||(l[1]=r=>m(n)?n.value=r:null),label:e(t)("tools.json-query.texts.label-json"),multiline:"",placeholder:e(t)("tools.json-query.texts.placeholder-put-your-json-here"),rows:"5",validation:e(d),"mb-2":""},null,8,["value","label","placeholder","validation"])]),_:1},8,["title"]),a(c,{title:e(t)("tools.json-query.texts.title-result")},{default:u(()=>[a(Y,{value:e(p),language:"json"},null,8,["value"])]),_:1},8,["title"])])}}});export{L as default};
