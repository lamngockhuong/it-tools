import{o as a,c as s,S as r,d as c,bl as l,bm as i,k as h,l as t,bk as p}from"./index-1de3a68b.js";const u={class:"markdown-body"},g=r(`<h1>🧾 <code>sed</code> Command Cheatsheet (Stream Editor)</h1><p><code>sed</code> is a powerful Unix utility for parsing and transforming text using <strong>stream editing</strong>.</p><h2>📌 Basic Syntax</h2><pre><code class="language-bash">sed [OPTIONS] &#39;script&#39; [file...]
</code></pre><ul><li><code>&#39;script&#39;</code>: One or more editing commands.</li><li><code>[file]</code>: Input file(s). If omitted, <code>sed</code> reads from standard input.</li></ul><h2>⚙️ Common Options</h2><table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>-n</code></td><td>Suppress automatic printing of pattern space. Use <code>p</code> to print explicitly.</td></tr><tr><td><code>-e</code></td><td>Add multiple editing commands.</td></tr><tr><td><code>-i</code></td><td>Edit files in-place (with optional backup: <code>-i.bak</code>).</td></tr><tr><td><code>-f</code></td><td>Read commands from a file.</td></tr></tbody></table><h2>✂️ Basic Commands</h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>p</code></td><td>Print the current pattern space.</td></tr><tr><td><code>d</code></td><td>Delete the current pattern space.</td></tr><tr><td><code>s</code></td><td>Substitute text using regex.</td></tr><tr><td><code>q</code></td><td>Quit after processing first match.</td></tr><tr><td><code>a</code></td><td>Append text after current line.</td></tr><tr><td><code>i</code></td><td>Insert text before current line.</td></tr><tr><td><code>c</code></td><td>Replace line with new text.</td></tr><tr><td><code>y</code></td><td>Translate characters (like <code>tr</code>).</td></tr></tbody></table><h2>🔍 Substitution Syntax</h2><pre><code class="language-bash">sed &#39;s/pattern/replacement/flags&#39; file
</code></pre><h3>Flags</h3><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>g</code></td><td>Global replacement (all matches in line).</td></tr><tr><td><code>i</code></td><td>Case-insensitive matching.</td></tr><tr><td><code>p</code></td><td>Print the line if substitution occurred.</td></tr><tr><td><code>n</code></td><td>Replace nth occurrence only.</td></tr></tbody></table><h3>Examples</h3><pre><code class="language-bash">sed &#39;s/foo/bar/&#39; file       # Replace first &#39;foo&#39; with &#39;bar&#39;
sed &#39;s/foo/bar/g&#39; file      # Replace all &#39;foo&#39; with &#39;bar&#39;
sed &#39;s/foo/bar/2&#39; file      # Replace second &#39;foo&#39; only
sed &#39;s/foo/bar/ip&#39; file     # Case-insensitive + print
</code></pre><h2>🗑️ Deletion with <code>sed</code></h2><p><code>sed</code> can delete lines based on line numbers, patterns, or ranges.</p><h3>🔢 Delete by Line Number</h3><pre><code class="language-bash">sed &#39;2d&#39; file             # Delete line 2
sed &#39;5,10d&#39; file          # Delete lines 5 through 10
</code></pre><h3>🔍 Delete by Pattern</h3><pre><code class="language-bash">sed &#39;/error/d&#39; file       # Delete lines containing &#39;error&#39;
sed &#39;/^$/d&#39; file           # Delete blank lines
sed &#39;/^#/d&#39; file           # Delete comment lines (starting with #)
</code></pre><h3>🧮 Delete by Range and Pattern</h3><pre><code class="language-bash">sed &#39;1,/pattern/d&#39; file   # Delete from line 1 to first match of &#39;pattern&#39;
sed &#39;/start/,/end/d&#39; file # Delete lines between &#39;start&#39; and &#39;end&#39; (inclusive)
</code></pre><h3>🧠 Conditional Deletion</h3><pre><code class="language-bash">sed -n &#39;/pattern/!p&#39; file # Print only lines NOT matching &#39;pattern&#39;
</code></pre><h3>🧹 Delete Last Line</h3><pre><code class="language-bash">sed &#39;$d&#39; file             # Delete the last line
</code></pre><h2>📍 Addressing Lines</h2><h3>Line Numbers</h3><pre><code class="language-bash">sed &#39;2d&#39; file            # Delete line 2
sed &#39;3,5p&#39; file          # Print lines 3 to 5
</code></pre><h3>Patterns</h3><pre><code class="language-bash">sed &#39;/error/d&#39; file      # Delete lines containing &#39;error&#39;
sed &#39;/^#/d&#39; file         # Delete comment lines
</code></pre><h3>Combined</h3><pre><code class="language-bash">sed &#39;1,/pattern/d&#39; file  # Delete from line 1 to first match of &#39;pattern&#39;
</code></pre><h2>🧪 Advanced Substitution</h2><h3>Using Capture Groups</h3><pre><code class="language-bash">sed &#39;s/\\(foo\\)bar/\\1baz/&#39; file
</code></pre><ul><li><code>\\(...\\)</code> captures a group.</li><li><code>\\1</code>, <code>\\2</code>, etc., refer to captured groups.</li></ul><h3>Escaping Special Characters</h3><pre><code class="language-bash">sed &#39;s/\\/usr\\/bin/\\/usr\\/local\\/bin/&#39; file
</code></pre><p>Or use alternate delimiter:</p><pre><code class="language-bash">sed &#39;s|/usr/bin|/usr/local/bin|&#39; file
</code></pre><h2>🧨 In-Place Editing</h2><pre><code class="language-bash">sed -i &#39;s/foo/bar/g&#39; file           # Edit file directly
sed -i.bak &#39;s/foo/bar/g&#39; file       # Backup original as file.bak
</code></pre><h2>📂 Multiple Commands</h2><h3>Inline</h3><pre><code class="language-bash">sed -e &#39;s/foo/bar/&#39; -e &#39;/baz/d&#39; file
</code></pre><h3>Block Syntax</h3><pre><code class="language-bash">sed &#39;
s/foo/bar/
s/baz/qux/
&#39; file
</code></pre><h2>🧵 Append, Insert, Change</h2><pre><code class="language-bash">sed &#39;/pattern/a\\Text to append&#39; file
sed &#39;/pattern/i\\Text to insert&#39; file
sed &#39;/pattern/c\\New line content&#39; file
</code></pre><h2>🔄 Translate Characters</h2><pre><code class="language-bash">sed &#39;y/abc/ABC/&#39; file     # a→A, b→B, c→C
</code></pre><h2>🧠 Useful Recipes</h2><h3>Remove Blank Lines</h3><pre><code class="language-bash">sed &#39;/^$/d&#39; file
</code></pre><h3>Remove Leading/Trailing Whitespace</h3><pre><code class="language-bash">sed &#39;s/^[ \\t]*//&#39; file     # Remove leading
sed &#39;s/[ \\t]*$//&#39; file     # Remove trailing
</code></pre><h3>Replace Tabs with Spaces</h3><pre><code class="language-bash">sed &#39;s/\\t/    /g&#39; file
</code></pre><h3>Number Lines</h3><pre><code class="language-bash">sed = file | sed &#39;N;s/\\n/\\t/&#39;
</code></pre><h2>📚 Resources</h2><ul><li><code>man sed</code></li><li>GNU sed manual: <a href="https://www.gnu.org/software/sed/manual/sed.html">https://www.gnu.org/software/sed/manual/sed.html</a></li></ul>`,64),f=[g],b={__name:"sed",setup(n,{expose:e}){return e({frontmatter:{}}),(o,_)=>(a(),s("div",u,f))}},m=c({__name:"sed-memo",setup(n){l(d=>({"8dba7e1e":t(e).cardColor,"9a5b4486":t(e).textColor1}));const e=i();return(d,o)=>(a(),s("div",null,[h(t(b),{style:{"overflow-x":"auto"}})]))}});const y=p(m,[["__scopeId","data-v-3d35be74"]]);export{y as default};
