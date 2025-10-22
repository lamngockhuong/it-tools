import{d as N,a4 as O,r as C,i as _,o,c as r,k as l,w as c,a as k,l as e,m as b,F as w,D as T,G as i,H as m,aZ as B,j as D,O as L}from"./index-1de3a68b.js";import{_ as S}from"./c-monaco-editor.vue_vue_type_script_setup_true_lang-5a2a5ecd.js";import{c as V}from"./composeverter-672d14b2.js";import{N as E}from"./Alert-651bb5da.js";import{_ as I}from"./a-8ba5a4c7.js";import"./editor.main-dfeaf08b.js";import"./index-a6f01dde.js";import"./index-d2077065.js";import"./index-c3bf12b9.js";import"./public-api-dca47901.js";import"./ajv-53acda87.js";const R={relative:"","w-full":""},A={key:0},F={key:1},Q=N({__name:"docker-compose-validator",setup(P){const{t}=O(),s=C(`version: '3.3'
services:
    nginx:
        ports:
            - '80:80'
        volumes:
            - '/var/run/docker.sock:/tmp/docker.sock:ro'
        restart: always
        logging:
            options:
                max-size: 1g
        image: nginx`),v=_(()=>{try{return V.validateDockerComposeToCommonSpec(s.value)}catch(u){return u.toString().split(`
`).map(a=>({line:-1,message:a,helpLink:""}))}}),p=_(()=>v.value),f={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0};return(u,a)=>{const g=S,x=B,y=I,d=E;return o(),r("div",null,[l(x,{label:e(t)("tools.docker-compose-validator.texts.label-paste-your-docker-compose-file-content")},{default:c(()=>[k("div",R,[l(g,{value:e(s),"onUpdate:value":a[0]||(a[0]=n=>b(s)?s.value=n:null),theme:"vs-dark",language:"yaml",height:"250px",options:f},null,8,["value"])])]),_:1},8,["label"]),e(p).length>0?(o(),r("div",A,[l(d,{title:e(t)("tools.docker-compose-validator.texts.title-the-following-errors-occured"),type:"error","mt-5":""},{default:c(()=>[k("ul",null,[(o(!0),r(w,null,T(e(p),(n,h)=>(o(),r("li",{key:h},[i(m(n.message)+" (",1),n.helpLink?(o(),D(y,{key:0,target:"_blank",rel:"noreferer noopener"},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-see-docker-compose-help")),1)]),_:1})):L("",!0),i(m(e(t)("tools.docker-compose-validator.texts.tag-")),1)]))),128))])]),_:1},8,["title"])])):(o(),r("div",F,[l(d,{type:"success","mt-5":""},{default:c(()=>[i(m(e(t)("tools.docker-compose-validator.texts.tag-validation-successful")),1)]),_:1})]))])}}});export{Q as default};
