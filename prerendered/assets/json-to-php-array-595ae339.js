import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-83da1004.js";import{j as l}from"./index-7529cae3.js";import{d as i,a4 as u,aX as a,o as m,j as c,l as r}from"./index-1de3a68b.js";import{w as f}from"./defaults-4d6daddf.js";import"./TextareaCopyable-4c7847d0.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";const d=`{
  a:"b", 
  arr: [1, "2"], 
  nested: {
    c:12, 
    d: "az"
  }
}`,E=i({__name:"json-to-php-array",setup(_){const{t}=u();function e(o){return f(()=>l.arrify(a.parse(o),{prettify:!0}),"")}const s=[{validator:o=>a.parse(o),message:t("tools.json-to-php-array.texts.message-provided-json-is-not-valid")}];return(o,h)=>{const p=n;return m(),c(p,{"input-label":r(t)("tools.json-to-php-array.texts.input-label-your-json"),"input-default":d,"input-placeholder":r(t)("tools.json-to-php-array.texts.input-placeholder-paste-your-json-here"),"output-label":r(t)("tools.json-to-php-array.texts.output-label-php-array-version"),"input-validation-rules":s,transformer:e},null,8,["input-label","input-placeholder","output-label"])}}});export{E as default};
