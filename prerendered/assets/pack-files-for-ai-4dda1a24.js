import{_ as W}from"./TextareaCopyable-4c7847d0.js";import{d as Q,a4 as X,r as T,ad as f,o as q,j as J,w as s,k as a,G as d,H as g,l as t,m as p,ak as K,aW as Y}from"./index-1de3a68b.js";import{_ as Z,N as ee}from"./Upload-b4fcc9be.js";import{_ as te}from"./RadioButton-34014012.js";import{_ as oe}from"./text-46fc9687.js";import{_ as ae}from"./Checkbox-8189c848.js";import{_ as ne}from"./Space-8a7671c5.js";import{_ as se}from"./Tree-98c8522f.js";import{_ as ie}from"./FormItem-be347854.js";import{_ as le}from"./Card-97d38412.js";import{_ as re}from"./RadioGroup-c4df1724.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";import"./Progress-a54aba79.js";import"./Image-667227c1.js";import"./_arrayReduce-865b0d3f.js";import"./download-953ccaa2.js";import"./get-slot-1efb97e5.js";import"./Empty-0e586e3d.js";import"./VirtualList-79e5248c.js";import"./context-589fe33b.js";const Be=Q({__name:"pack-files-for-ai",setup(ce){const{t:l}=X(),j=T([]),U=T([]),h=f({name:"fmt",storageName:"pack-ai:f",defaultValue:"markdown"}),y=f({name:"incl",storageName:"pack-ai:i",defaultValue:""}),b=f({name:"excl",storageName:"pack-ai:e",defaultValue:""}),k=f({name:"summary",storageName:"pack-ai:s",defaultValue:!0}),v=f({name:"dirstruct",storageName:"pack-ai:d",defaultValue:!0}),x=f({name:"linenums",storageName:"pack-ai:l",defaultValue:!1}),w=f({name:"empty",storageName:"pack-ai:y",defaultValue:!1}),$=f({name:"comments",storageName:"pack-ai:c",defaultValue:!1}),S=T(!1),N=T("");function D({fileList:o}){j.value=o,U.value=I(o)}function C(o,e=""){return Object.entries(o).map(([r,i])=>({label:r,key:e+r,children:i?C(i,`${e+r}/`):void 0}))}function _(o){return(o.fullPath||o.name).replace(/^[/\\]/g,"")}function I(o){const e={};return o.forEach(r=>{const i=_(r).split("/");let n=e;i.forEach((u,m)=>{n[u]||(n[u]=m===i.length-1?null:{}),n=n[u]})}),C(e)}async function A(){const o=j.value.filter(e=>{const r=_(e),i=y.value?new RegExp(y.value).test(r):!0,n=b.value?new RegExp(b.value).test(r):!1;return i&&!n});h.value==="xml"?N.value=await G(o):N.value=await M(o)}async function P(o){const e=await o.file?.text?.()||"";return L(e,o.name.split(".").slice(-1)[0]||"txt",{numberLines:x.value,removeEmptyLines:w.value,removeComments:$.value})}async function G(o){const e=`
This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

<file_summary>{{ t('tools.pack-files-for-ai.texts.tag-this-section-contains-a-summary-of-this-file') }}<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>
`,r=`
<directory_structure>
${o.map(n=>`  ${_(n)}`).join(`
`)}
</directory_structure>
`,i=`
<files>
This section contains the contents of the repository's files.

${(await Promise.all(o.map(async n=>`<file path="${_(n)}">
${await P(n)}
</file>`))).join(`
`)}
</files>
`;return`${k.value?e:""}
${v.value?r:""}
${i}`.trim()}async function M(o){const e=`
This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)
`,r=`
# Directory Structure
\`\`\`
${o.map(n=>`- ${_(n)}`).join(`
`)}
\`\`\`
`,i=`
# Files

${(await Promise.all(o.map(async n=>`## File: ${_(n)}
\`\`\`
${await P(n)}
\`\`\``))).join(`
`)}
`;return`${k.value?e:""}
${v.value?r:""}
${i}`.trim()}function L(o,e,r={}){let i=o.split(/\r?\n/);if(r.removeComments){const n=e.replace(/^\./,"").toLowerCase(),m={js:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],ts:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],java:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],cpp:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],c:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],cs:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],vb:[/('.*$)/gm,/(REM\s.*$)/gi],py:[/(#.*$)/gm],rb:[/(#.*$)/gm],php:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm,/(#.*$)/gm],swift:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],go:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],rs:[/(\/\/.*$)/gm,/(\/\*[\s\S]*?\*\/)/gm],sh:[/(#.*$)/gm]}[n];if(m){for(const R of m)o=o.replace(R,"");i=o.split(/\r?\n/)}}return r.removeEmptyLines&&(i=i.filter(n=>n.trim()!=="")),r.numberLines&&(i=i.map((n,u)=>`${u+1}: ${n}`)),i.join(`
`)}return(o,e)=>{const r=oe,i=Z,n=ee,u=ae,m=ne,R=se,F=ie,V=K,E=le,B=te,z=re,H=Y,O=W;return q(),J(E,{title:t(l)("tools.pack-files-for-ai.texts.title-repomix-like-ai-pack-generator")},{default:s(()=>[a(n,{multiple:"","directory-dnd":"","mb-1":"","show-file-list":t(S),onChange:D},{default:s(()=>[a(i,null,{default:s(()=>[a(r,{style:{"font-size":"16px"}},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-click-or-drag-code-source-files-or-folder-to-this-area-to-add-to-package")),1)]),_:1})]),_:1})]),_:1},8,["show-file-list"]),a(m,{justify:"center","mb-2":""},{default:s(()=>[a(u,{checked:t(S),"onUpdate:checked":e[0]||(e[0]=c=>p(S)?S.value=c:null)},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-show-uploaded-files")),1)]),_:1},8,["checked"])]),_:1}),a(F,{label:t(l)("tools.pack-files-for-ai.texts.label-directory-structure")},{default:s(()=>[a(R,{data:t(U),"block-line":""},null,8,["data"])]),_:1},8,["label"]),a(F,{label:t(l)("tools.pack-files-for-ai.texts.label-include-files-regexp"),"label-placement":"left"},{default:s(()=>[a(V,{value:t(y),"onUpdate:value":e[1]||(e[1]=c=>p(y)?y.value=c:null),placeholder:t(l)("tools.pack-files-for-ai.texts.placeholder-include-pattern-regexp")},null,8,["value","placeholder"])]),_:1},8,["label"]),a(F,{label:t(l)("tools.pack-files-for-ai.texts.label-exclude-files-regexp"),"label-placement":"left"},{default:s(()=>[a(V,{value:t(b),"onUpdate:value":e[2]||(e[2]=c=>p(b)?b.value=c:null),placeholder:t(l)("tools.pack-files-for-ai.texts.placeholder-exclude-pattern-regexp"),style:{"margin-top":"8px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),a(E,{title:t(l)("tools.pack-files-for-ai.texts.title-options"),"mb-2":""},{default:s(()=>[a(m,{justify:"space-evenly"},{default:s(()=>[a(u,{checked:t(k),"onUpdate:checked":e[3]||(e[3]=c=>p(k)?k.value=c:null)},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-include-file-summary")),1)]),_:1},8,["checked"]),a(u,{checked:t(v),"onUpdate:checked":e[4]||(e[4]=c=>p(v)?v.value=c:null)},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-include-directory-structure")),1)]),_:1},8,["checked"]),a(u,{checked:t(x),"onUpdate:checked":e[5]||(e[5]=c=>p(x)?x.value=c:null)},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-show-line-numbers")),1)]),_:1},8,["checked"]),a(u,{checked:t(w),"onUpdate:checked":e[6]||(e[6]=c=>p(w)?w.value=c:null)},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-remove-empty-lines")),1)]),_:1},8,["checked"]),a(u,{checked:t($),"onUpdate:checked":e[7]||(e[7]=c=>p($)?$.value=c:null)},{default:s(()=>[d(g(t(l)("tools.pack-files-for-ai.texts.tag-remove-comments")),1)]),_:1},8,["checked"])]),_:1})]),_:1},8,["title"]),a(m,{justify:"center"},{default:s(()=>[a(F,{label:t(l)("tools.pack-files-for-ai.texts.label-output-format"),"label-placement":"left"},{default:s(()=>[a(z,{value:t(h),"onUpdate:value":e[8]||(e[8]=c=>p(h)?h.value=c:null)},{default:s(()=>[a(B,{label:t(l)("tools.pack-files-for-ai.texts.label-xml"),value:"xml"},null,8,["label"]),a(B,{label:t(l)("tools.pack-files-for-ai.texts.label-markdown"),value:"markdown"},null,8,["label"])]),_:1},8,["value"])]),_:1},8,["label"])]),_:1}),a(m,{justify:"center"},{default:s(()=>[a(H,{"mb-1":"",onClick:A},{default:s(()=>[d(" Generate "+g(t(h).toUpperCase()),1)]),_:1})]),_:1}),a(O,{label:t(l)("tools.pack-files-for-ai.texts.label-output-preview"),download:"","download-file-name":`output.${t(h)==="xml"?".xml":".md"}`,value:t(N),language:t(h)},null,8,["label","download-file-name","value","language"])]),_:1},8,["title"])}}});export{Be as default};
