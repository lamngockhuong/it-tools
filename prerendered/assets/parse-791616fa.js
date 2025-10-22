/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function L(e,n){let i=e.slice(0,n).split(/\r\n|\n|\r/g);return[i.length,i.pop().length+1]}function P(e,n,i){let o=e.split(/\r\n|\n|\r/g),f="",l=(Math.log10(n+1)|0)+1;for(let t=n-1;t<=n+1;t++){let a=o[t-1];a&&(f+=t.toString().padEnd(l," "),f+=":  ",f+=a,f+=`
`,t===n&&(f+=" ".repeat(l+i+2),f+=`^
`))}return f}class u extends Error{line;column;codeblock;constructor(n,i){const[o,f]=L(i.toml,i.ptr),l=P(i.toml,o,f);super(`Invalid TOML document: ${n}

${l}`,i),this.line=o,this.column=f,this.codeblock=l}}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function v(e,n){let i=0;for(;e[n-++i]==="\\";);return--i&&i%2}function g(e,n=0,i=e.length){let o=e.indexOf(`
`,n);return e[o-1]==="\r"&&o--,o<=i?o:-1}function y(e,n){for(let i=n;i<e.length;i++){let o=e[i];if(o===`
`)return i;if(o==="\r"&&e[i+1]===`
`)return i+1;if(o<" "&&o!=="	"||o==="")throw new u("control characters are not allowed in comments",{toml:e,ptr:n})}return e.length}function w(e,n,i,o){let f;for(;(f=e[n])===" "||f==="	"||!i&&(f===`
`||f==="\r"&&e[n+1]===`
`);)n++;return o||f!=="#"?n:w(e,y(e,n),i)}function T(e,n,i,o,f=!1){if(!o)return n=g(e,n),n<0?e.length:n;for(let l=n;l<e.length;l++){let t=e[l];if(t==="#")l=g(e,l);else{if(t===i)return l+1;if(t===o||f&&(t===`
`||t==="\r"&&e[l+1]===`
`))return l}}throw new u("cannot find end of structure",{toml:e,ptr:n})}function p(e,n){let i=e[n],o=i===e[n+1]&&e[n+1]===e[n+2]?e.slice(n,n+3):i;n+=o.length-1;do n=e.indexOf(o,++n);while(n>-1&&i!=="'"&&v(e,n));return n>-1&&(n+=o.length,o.length>1&&(e[n]===i&&n++,e[n]===i&&n++)),n}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let N=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i;class s extends Date{#n=!1;#i=!1;#e=null;constructor(n){let i=!0,o=!0,f="Z";if(typeof n=="string"){let l=n.match(N);l?(l[1]||(i=!1,n=`0000-01-01T${n}`),o=!!l[2],o&&n[10]===" "&&(n=n.replace(" ","T")),l[2]&&+l[2]>23?n="":(f=l[3]||null,n=n.toUpperCase(),!f&&o&&(n+="Z"))):n=""}super(n),isNaN(this.getTime())||(this.#n=i,this.#i=o,this.#e=f)}isDateTime(){return this.#n&&this.#i}isLocal(){return!this.#n||!this.#i||!this.#e}isDate(){return this.#n&&!this.#i}isTime(){return this.#i&&!this.#n}isValid(){return this.#n||this.#i}toISOString(){let n=super.toISOString();if(this.isDate())return n.slice(0,10);if(this.isTime())return n.slice(11,23);if(this.#e===null)return n.slice(0,-1);if(this.#e==="Z")return n;let i=+this.#e.slice(1,3)*60+ +this.#e.slice(4,6);return i=this.#e[0]==="-"?i:-i,new Date(this.getTime()-i*6e4).toISOString().slice(0,-1)+this.#e}static wrapAsOffsetDateTime(n,i="Z"){let o=new s(n);return o.#e=i,o}static wrapAsLocalDateTime(n){let i=new s(n);return i.#e=null,i}static wrapAsLocalDate(n){let i=new s(n);return i.#i=!1,i.#e=null,i}static wrapAsLocalTime(n){let i=new s(n);return i.#n=!1,i.#e=null,i}}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let k=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,$=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,C=/^[+-]?0[0-9_]/,R=/^[0-9a-f]{4,8}$/i,_={b:"\b",t:"	",n:`
`,f:"\f",r:"\r",'"':'"',"\\":"\\"};function A(e,n=0,i=e.length){let o=e[n]==="'",f=e[n++]===e[n]&&e[n]===e[n+1];f&&(i-=2,e[n+=2]==="\r"&&n++,e[n]===`
`&&n++);let l=0,t,a="",c=n;for(;n<i-1;){let r=e[n++];if(r===`
`||r==="\r"&&e[n]===`
`){if(!f)throw new u("newlines are not allowed in strings",{toml:e,ptr:n-1})}else if(r<" "&&r!=="	"||r==="")throw new u("control characters are not allowed in strings",{toml:e,ptr:n-1});if(t){if(t=!1,r==="u"||r==="U"){let d=e.slice(n,n+=r==="u"?4:8);if(!R.test(d))throw new u("invalid unicode escape",{toml:e,ptr:l});try{a+=String.fromCodePoint(parseInt(d,16))}catch{throw new u("invalid unicode escape",{toml:e,ptr:l})}}else if(f&&(r===`
`||r===" "||r==="	"||r==="\r")){if(n=w(e,n-1,!0),e[n]!==`
`&&e[n]!=="\r")throw new u("invalid escape: only line-ending whitespace may be escaped",{toml:e,ptr:l});n=w(e,n)}else if(r in _)a+=_[r];else throw new u("unrecognized escape sequence",{toml:e,ptr:l});c=n}else!o&&r==="\\"&&(l=n-1,t=!0,a+=e.slice(c,l))}return a+e.slice(c,i-1)}function Z(e,n,i,o){if(e==="true")return!0;if(e==="false")return!1;if(e==="-inf")return-1/0;if(e==="inf"||e==="+inf")return 1/0;if(e==="nan"||e==="+nan"||e==="-nan")return NaN;if(e==="-0")return o?0n:0;let f=k.test(e);if(f||$.test(e)){if(C.test(e))throw new u("leading zeroes are not allowed",{toml:n,ptr:i});e=e.replace(/_/g,"");let t=+e;if(isNaN(t))throw new u("invalid number",{toml:n,ptr:i});if(f){if((f=!Number.isSafeInteger(t))&&!o)throw new u("integer value cannot be represented losslessly",{toml:n,ptr:i});(f||o===!0)&&(t=BigInt(e))}return t}const l=new s(e);if(!l.isValid())throw new u("invalid value",{toml:n,ptr:i});return l}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function j(e,n,i,o){let f=e.slice(n,i),l=f.indexOf("#");l>-1&&(y(e,l),f=f.slice(0,l));let t=f.trimEnd();if(!o){let a=f.indexOf(`
`,t.length);if(a>-1)throw new u("newlines are not allowed in inline tables",{toml:e,ptr:n+a})}return[t,l]}function E(e,n,i,o,f){if(o===0)throw new u("document contains excessively nested structures. aborting.",{toml:e,ptr:n});let l=e[n];if(l==="["||l==="{"){let[c,r]=l==="["?F(e,n,o,f):V(e,n,o,f),d=i?T(e,r,",",i):r;if(r-d&&i==="}"){let h=g(e,r,d);if(h>-1)throw new u("newlines are not allowed in inline tables",{toml:e,ptr:h})}return[c,d]}let t;if(l==='"'||l==="'"){t=p(e,n);let c=A(e,n,t);if(i){if(t=w(e,t,i!=="]"),e[t]&&e[t]!==","&&e[t]!==i&&e[t]!==`
`&&e[t]!=="\r")throw new u("unexpected character encountered",{toml:e,ptr:t});t+=+(e[t]===",")}return[c,t]}t=T(e,n,",",i);let a=j(e,n,t-+(e[t-1]===","),i==="]");if(!a[0])throw new u("incomplete key-value declaration: no value specified",{toml:e,ptr:n});return i&&a[1]>-1&&(t=w(e,n+a[1]),t+=+(e[t]===",")),[Z(a[0],e,n,f),t]}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let M=/^[a-zA-Z0-9-_]+[ \t]*$/;function b(e,n,i="="){let o=n-1,f=[],l=e.indexOf(i,n);if(l<0)throw new u("incomplete key-value: cannot find end of key",{toml:e,ptr:n});do{let t=e[n=++o];if(t!==" "&&t!=="	")if(t==='"'||t==="'"){if(t===e[n+1]&&t===e[n+2])throw new u("multiline strings are not allowed in keys",{toml:e,ptr:n});let a=p(e,n);if(a<0)throw new u("unfinished string encountered",{toml:e,ptr:n});o=e.indexOf(".",a);let c=e.slice(a,o<0||o>l?l:o),r=g(c);if(r>-1)throw new u("newlines are not allowed in keys",{toml:e,ptr:n+o+r});if(c.trimStart())throw new u("found extra tokens after the string part",{toml:e,ptr:a});if(l<a&&(l=e.indexOf(i,a),l<0))throw new u("incomplete key-value: cannot find end of key",{toml:e,ptr:n});f.push(A(e,n,a))}else{o=e.indexOf(".",n);let a=e.slice(n,o<0||o>l?l:o);if(!M.test(a))throw new u("only letter, numbers, dashes and underscores are allowed in keys",{toml:e,ptr:n});f.push(a.trimEnd())}}while(o+1&&o<l);return[f,w(e,l+1,!0,!0)]}function V(e,n,i,o){let f={},l=new Set,t,a=0;for(n++;(t=e[n++])!=="}"&&t;){let c={toml:e,ptr:n-1};if(t===`
`)throw new u("newlines are not allowed in inline tables",c);if(t==="#")throw new u("inline tables cannot contain comments",c);if(t===",")throw new u("expected key-value, found comma",c);if(t!==" "&&t!=="	"){let r,d=f,h=!1,[x,I]=b(e,n-1);for(let m=0;m<x.length;m++){if(m&&(d=h?d[r]:d[r]={}),r=x[m],(h=Object.hasOwn(d,r))&&(typeof d[r]!="object"||l.has(d[r])))throw new u("trying to redefine an already defined value",{toml:e,ptr:n});!h&&r==="__proto__"&&Object.defineProperty(d,r,{enumerable:!0,configurable:!0,writable:!0})}if(h)throw new u("trying to redefine an already defined value",{toml:e,ptr:n});let[O,D]=E(e,I,"}",i-1,o);l.add(O),d[r]=O,n=D,a=e[n-1]===","?n-1:0}}if(a)throw new u("trailing commas are not allowed in inline tables",{toml:e,ptr:a});if(!t)throw new u("unfinished table encountered",{toml:e,ptr:n});return[f,n]}function F(e,n,i,o){let f=[],l;for(n++;(l=e[n++])!=="]"&&l;){if(l===",")throw new u("expected value, found comma",{toml:e,ptr:n-1});if(l==="#")n=y(e,n);else if(l!==" "&&l!=="	"&&l!==`
`&&l!=="\r"){let t=E(e,n-1,"]",i-1,o);f.push(t[0]),n=t[1]}}if(!l)throw new u("unfinished array encountered",{toml:e,ptr:n});return[f,n]}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function S(e,n,i,o){let f=n,l=i,t,a=!1,c;for(let r=0;r<e.length;r++){if(r){if(f=a?f[t]:f[t]={},l=(c=l[t]).c,o===0&&(c.t===1||c.t===2))return null;if(c.t===2){let d=f.length-1;f=f[d],l=l[d].c}}if(t=e[r],(a=Object.hasOwn(f,t))&&l[t]?.t===0&&l[t]?.d)return null;a||(t==="__proto__"&&(Object.defineProperty(f,t,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(l,t,{enumerable:!0,configurable:!0,writable:!0})),l[t]={t:r<e.length-1&&o===2?3:o,d:!1,i:0,c:{}})}if(c=l[t],c.t!==o&&!(o===1&&c.t===3)||(o===2&&(c.d||(c.d=!0,f[t]=[]),f[t].push(f={}),c.c[c.i++]=c={t:1,d:!1,i:0,c:{}}),c.d))return null;if(c.d=!0,o===1)f=a?f[t]:f[t]={};else if(o===0&&a)return null;return[t,f,c.c]}function G(e,{maxDepth:n=1e3,integersAsBigInt:i}={}){let o={},f={},l=o,t=f;for(let a=w(e,0);a<e.length;){if(e[a]==="["){let c=e[++a]==="[",r=b(e,a+=+c,"]");if(c){if(e[r[1]-1]!=="]")throw new u("expected end of table declaration",{toml:e,ptr:r[1]-1});r[1]++}let d=S(r[0],o,f,c?2:1);if(!d)throw new u("trying to redefine an already defined table or value",{toml:e,ptr:a});t=d[2],l=d[1],a=r[1]}else{let c=b(e,a),r=S(c[0],l,t,0);if(!r)throw new u("trying to redefine an already defined table or value",{toml:e,ptr:a});let d=E(e,c[1],void 0,n,i);r[1][r[0]]=d[0],a=d[1]}if(a=w(e,a,!0),e[a]&&e[a]!==`
`&&e[a]!=="\r")throw new u("each key-value declaration must be followed by an end-of-line",{toml:e,ptr:a});a=w(e,a)}return o}export{G as p};
