import{Y as j}from"./index-c3bf12b9.js";import{c as l}from"./index-abb66224.js";import{n as u}from"./index-ceeeeaf1.js";function f(e){return typeof e=="string"?`'${e.replace(/'/g,"''")}'`:e}function c(e){return`"${String(e).replace(/"/g,'""')}"`}function o(e){return String(e).replace(/\|/g,"\\|").replace(/`/g,"\\`")}function O(e,s,a={}){const n=a.nestify?e.map(t=>u(t)):e;switch(s){case"json":return JSON.stringify(n,null,2);case"yaml":return j.stringify(n);case"sql":return n.map(r=>{const i=Object.keys(r).map(m=>m?.replace(/\s/g,"")).join(", "),p=Object.values(r).map(f).join(", ");return`INSERT INTO ${a.tableName??"MyTable"} (${i}) VALUES (${p});`}).join(`
`);case"csv":case"tsv":case"csv_semicolon":let t=",";return s==="tsv"?t="	":s==="csv_semicolon"&&(t=";"),[Object.keys(n[0]).map(c).join(t),...n.map(r=>Object.values(r).map(c).join(t))].join(`
`);case"markdown":return`| ${Object.keys(n[0]).map(o).join(" | ")} |
| ${Object.keys(n[0]).map(()=>"---").join(" | ")} |
${n.map(r=>`| ${Object.values(r).map(o).join(" | ")} |`).join(`
`)}`;case"xml":return l.js2xml({root:n},{compact:!0});default:return""}}export{O as o};
