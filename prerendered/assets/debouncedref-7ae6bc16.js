import{r as a,P as c,_ as f}from"./index-1de3a68b.js";function l(t,u,n=!1){const e=a(t);return c((o,s)=>({get(){return o(),e.value},set:f.debounce(r=>{e.value=r,s()},u,{leading:n})}))}export{l as u};
