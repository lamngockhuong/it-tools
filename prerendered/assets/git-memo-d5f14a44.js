import{o as n,c as t,S as r,d as l,bl as g,bm as i,k as p,l as c,bk as d}from"./index-1de3a68b.js";const h={class:"markdown-body"},m=r(`<h2>Configuration</h2><p>Set the global config</p><pre><code class="language-shell">git config --global user.name &quot;[name]&quot;
git config --global user.email &quot;[email]&quot;
</code></pre><h2>Get started</h2><p>Create a git repository</p><pre><code class="language-shell">git init
</code></pre><p>Pull a git repository</p><pre><code class="language-shell">git pull [url]
</code></pre><p>Clone an existing git repository</p><pre><code class="language-shell">git clone [url]
</code></pre><h2>Commit</h2><p>Commit all tracked changes</p><pre><code class="language-shell">git commit -am &quot;[commit message]&quot;
</code></pre><p>Add new modifications to the last commit</p><pre><code class="language-shell">git commit --amend --no-edit
</code></pre><h2>Branches</h2><p>Lists all local branches in your repository (use -a for local and remote branches)</p><pre><code class="language-shell">git branch
</code></pre><p>Switch to an existing branch</p><pre><code class="language-shell">git switch [branch name]
</code></pre><p>Create a new branch</p><pre><code class="language-shell">git checkout -b [branch name]
</code></pre><h2>I’ve made a mistake</h2><p>Change last commit message</p><pre><code class="language-shell">git commit --amend
</code></pre><p>Undo most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~1
</code></pre><p>Undo the <code>N</code> most recent commit and keep changes</p><pre><code class="language-shell">git reset HEAD~N
</code></pre><p>Undo most recent commit and get rid of changes</p><pre><code class="language-shell">git reset HEAD~1 --hard
</code></pre><p>Reset branch to remote state</p><pre><code class="language-shell">git fetch origin
git reset --hard origin/[branch-name]
</code></pre><h2>Miscellaneous</h2><p>Renaming the local master branch to main</p><pre><code class="language-shell">git branch -m master main
</code></pre><p>Checking log graph</p><pre><code class="language-shell">git log --graph
</code></pre><p>Checking log graph (merges only)</p><pre><code class="language-shell">git log --graph --merges
</code></pre><p>Tracking down a bad commit using binary search</p><pre><code class="language-shell">git bisect start
git bisect good 13c988d4f15e06bcdd0b0af290086a3079cdadb0
git bisect bad ca82a6dff817ec66f44342007202690a93763949
</code></pre><p>Pulling new changes into current branch from mainline</p><pre><code class="language-shell">git checkout [branch-name]
git fetch origin [master-branch-name]
git rebase origin/[master-branch-name]
</code></pre>`,44),u=[m],b={__name:"git-memo.content",setup(o,{expose:e}){return e({frontmatter:{}}),(s,f)=>(n(),t("div",h,u))}},_=l({__name:"git-memo",setup(o){g(a=>({"8cb22b3c":c(e).cardColor}));const e=i();return(a,s)=>(n(),t("div",null,[p(c(b))]))}});const C=d(_,[["__scopeId","data-v-c7dbeca3"]]);export{C as default};
