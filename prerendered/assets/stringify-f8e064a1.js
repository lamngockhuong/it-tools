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
 */let w=/^[a-z0-9-_]+$/i;function c(e){let t=typeof e;if(t==="object"){if(Array.isArray(e))return"array";if(e instanceof Date)return"date"}return t}function m(e){for(let t=0;t<e.length;t++)if(c(e[t])!=="object")return!1;return e.length!=0}function y(e){return JSON.stringify(e).replace(/\x7f/g,"\\u007f")}function a(e,t,r,i){if(r===0)throw new Error("Could not stringify the object: maximum object depth exceeded");if(t==="number")return isNaN(e)?"nan":e===1/0?"inf":e===-1/0?"-inf":i&&Number.isInteger(e)?e.toFixed(1):e.toString();if(t==="bigint"||t==="boolean")return e.toString();if(t==="string")return y(e);if(t==="date"){if(isNaN(e.getTime()))throw new TypeError("cannot serialize invalid date");return e.toISOString()}if(t==="object")return T(e,r,i);if(t==="array")return $(e,r,i)}function T(e,t,r){let i=Object.keys(e);if(i.length===0)return"{}";let n="{ ";for(let f=0;f<i.length;f++){let l=i[f];f&&(n+=", "),n+=w.test(l)?l:y(l),n+=" = ",n+=a(e[l],c(e[l]),t-1,r)}return n+" }"}function $(e,t,r){if(e.length===0)return"[]";let i="[ ";for(let n=0;n<e.length;n++){if(n&&(i+=", "),e[n]===null||e[n]===void 0)throw new TypeError("arrays cannot contain null or undefined values");i+=a(e[n],c(e[n]),t-1,r)}return i+" ]"}function b(e,t,r,i){if(r===0)throw new Error("Could not stringify the object: maximum object depth exceeded");let n="";for(let f=0;f<e.length;f++)n+=`[[${t}]]
`,n+=d(e[f],t,r,i),n+=`

`;return n}function d(e,t,r,i){if(r===0)throw new Error("Could not stringify the object: maximum object depth exceeded");let n="",f="",l=Object.keys(e);for(let g=0;g<l.length;g++){let o=l[g];if(e[o]!==null&&e[o]!==void 0){let u=c(e[o]);if(u==="symbol"||u==="function")throw new TypeError(`cannot serialize values of type '${u}'`);let s=w.test(o)?o:y(o);if(u==="array"&&m(e[o]))f+=b(e[o],t?`${t}.${s}`:s,r-1,i);else if(u==="object"){let h=t?`${t}.${s}`:s;f+=`[${h}]
`,f+=d(e[o],h,r-1,i),f+=`

`}else n+=s,n+=" = ",n+=a(e[o],u,r,i),n+=`
`}}return`${n}
${f}`.trim()}function E(e,{maxDepth:t=1e3,numbersAsFloat:r=!1}={}){if(c(e)!=="object")throw new TypeError("stringify can only be called with an object");return d(e,"",t,r)}export{E as s};
