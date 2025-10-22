function x(e){return e.replace(/[<>&'"]/g,t=>{switch(t){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":return"&apos;";case'"':return"&quot;"}return""})}const u="",a="\\\\",p="'",f='"',r=a+p+f,o=[{id:"raw",name:"Raw Text",cr:`
`,start_quote:"",prefix:"",suffix:"",begin:"",end:"",escape:u},{id:"bash",name:"Bash",crlf:"\\n",start_quote:'"',prefix:"echo ",suffix:"",begin:"",end:"",escape:a+f},{id:"pwsh",name:"PowerShell",crlf:"\\n",start_quote:'"',prefix:"Write-Output ",suffix:"",begin:"",end:"",escape:a+p},{id:"c",name:"C",crlf:"\\n",start_quote:'"',prefix:"printf(",suffix:");",suffix_eol:"\\n",begin:`#include <stdio.h>
`,end:"",escape:r},{id:"cpp",name:"C++",crlf:"\\n",start_quote:'"',prefix:"std::cout << ",suffix:";",suffix_eol:"\\n",begin:`#include <iostream>
`,end:"",escape:r},{id:"csharp",name:"C#",crlf:"\\n",start_quote:'"',prefix:"Console.WriteLine(",suffix:");",begin:`using System;
`,end:"",escape:e=>e.replace(/[\\'"]/g,t=>`\\${t}`).replace(/\t/g,"\\t")},{id:"csharp_verb",name:"C# (Verbatim)",crlf:'" + "\\n" + @"',start_quote:'@"',end_quote:'"',prefix:"Console.WriteLine(",suffix:");",begin:`using System;
`,end:"",escape:e=>e.replace(/["]/g,'""').replace(/\t/g,"\\t")},{id:"csharp_interf",name:"C# (Interpolated)",crlf:"\\n",start_quote:'$"',end_quote:'"',prefix:"Console.WriteLine(",suffix:");",begin:`using System;
`,end:"",escape:e=>e.replace(/["{}]/g,t=>t+t).replace(/\t/g,"\\t")},{id:"csharp_raw",name:"C# (Raw)",crlf:`
`,start_quote:'"""',prefix:"Console.WriteLine(",suffix:");",begin:`using System;
`,end:"",escape:u},{id:"vbnet",name:"VB.Net",crlf:'" & vbCrLf & "',start_quote:'"',prefix:"Console.WriteLine(",suffix:")",begin:"",end:"",escape:e=>e.replace(/"/g,'""')},{id:"node",name:"Node.js",crlf:"\\n",start_quote:'"',prefix:"console.log(",suffix:");",begin:"",end:"",escape:r},{id:"python",name:"Python",crlf:"\\n",start_quote:'"',prefix:"print(",suffix:")",begin:"",end:"",escape:a+f},{id:"html",name:"HTML",crlf:"<br />",start_quote:"",prefix:"",suffix:"",begin:`<pre>
`,end:`
</pre>`,escape:e=>x(e)},{id:"rust",name:"Rust",crlf:"\\n",start_quote:'"',prefix:"println!(",suffix:");",begin:"",end:"",escape:r},{id:"go",name:"Go",crlf:"\\n",start_quote:'"',prefix:"fmt.Println(",suffix:")",begin:`import "fmt"
`,end:"",escape:r},{id:"ruby",name:"Ruby",crlf:"\\n",start_quote:'"',prefix:"puts ",suffix:"",begin:"",end:"",escape:r},{id:"php",name:"PHP",crlf:"\\n",start_quote:'"',prefix:"echo ",suffix:";",suffix_eol:"\\n",begin:`<?php
`,end:`
?>`,escape:r},{id:"swift",name:"Swift",crlf:"\\n",start_quote:'"',prefix:"print(",suffix:")",begin:"",end:"",escape:r},{id:"kotlin",name:"Kotlin",crlf:"\\n",start_quote:'"',prefix:"println(",suffix:")",begin:"",end:"",escape:r},{id:"sql",name:"SQL",crlf:"' + CHAR(10 + '",start_quote:"'",prefix:"SELECT ",suffix:"",suffix_eol:"\\n",begin:"",end:"",escape:e=>e.replace(/'/g,"''")},{id:"java",name:"Java",crlf:"\\n",start_quote:'"',prefix:"System.out.println(",suffix:");",begin:"",end:"",escape:r}];function _(e,t){const i=o.find(n=>n.id===t);return i?i.begin+e.split(`
`).map(n=>i.prefix+g(n,t,{suffix_eol:i.suffix_eol||""})+i.suffix).join(`
`)+i.end:e}function g(e,t,i){const n=o.find(s=>s.id===t);if(!n)return e;const l=typeof n.escape=="function"?n.escape:function(s){return n.escape?s.replace(new RegExp(`([${n.escape}])`,"g"),"\\$1"):s},d=function(s){const c=l(s);return i.single_linize?c.replace(/\n/g,n.crlf||"\\n"):c};return(i.single_linize?[e]:e.split(`
`)).map(s=>n.start_quote+d(s)+(i.suffix_eol||"")+(n.end_quote||n.start_quote)).join(`
`)}export{g as e,o as l,_ as p};
