import{o as t,c as s,S as l,d as c,bl as i,bm as d,k as p,l as a,bk as g}from"./index-1de3a68b.js";const m={class:"markdown-body"},u=l(`<p><strong>Docker Swarm Mode</strong> is Docker’s native clustering and orchestration solution. It allows you to manage a group of Docker nodes as a single virtual system, enabling high availability, load balancing, and simplified deployment of containerized applications.</p><p>Key features:</p><ul><li>Built-in orchestration</li><li>Declarative service model</li><li>Rolling updates</li><li>Auto-scaling and self-healing</li><li>Secure node communication via TLS</li></ul><h2>📌 Swarm Initialization</h2><ul><li><p><strong>Initialize Swarm</strong></p><pre><code class="language-bash">docker swarm init
</code></pre></li><li><p><strong>Join Swarm (on worker/manager node)</strong></p><pre><code class="language-bash">docker swarm join-token worker
</code></pre></li><li><p><strong>Leave Swarm</strong></p><pre><code class="language-bash">docker swarm leave
</code></pre></li><li><p><strong>Force Leave (on manager)</strong></p><pre><code class="language-bash">docker swarm leave --force
</code></pre></li></ul><h2>👥 Node Management</h2><ul><li><p><strong>List nodes</strong></p><pre><code class="language-bash">docker node ls
</code></pre></li><li><p><strong>Promote node to manager</strong></p><pre><code class="language-bash">docker node promote &lt;node-name&gt;
</code></pre></li><li><p><strong>Demote node to worker</strong></p><pre><code class="language-bash">docker node demote &lt;node-name&gt;
</code></pre></li><li><p><strong>Inspect node</strong></p><pre><code class="language-bash">docker node inspect &lt;node-name&gt; --pretty
</code></pre></li><li><p><strong>Drain node (prevent scheduling)</strong></p><pre><code class="language-bash">docker node update --availability drain &lt;node-name&gt;
</code></pre></li><li><p><strong>Activate node</strong></p><pre><code class="language-bash">docker node update --availability active &lt;node-name&gt;
</code></pre></li></ul><h2>🧠 Manager Nodes</h2><p>Manager nodes are responsible for:</p><ul><li>Orchestrating tasks and services</li><li>Maintaining cluster state</li><li>Handling API requests</li></ul><p>You can have multiple managers for high availability, but only one is the <strong>leader</strong> at any time.</p><ul><li><p><strong>Check manager status</strong></p><pre><code class="language-bash">docker node ls
</code></pre></li><li><p><strong>View Raft consensus info</strong></p><pre><code class="language-bash">docker swarm inspect
</code></pre></li></ul><h2>📦 Service Management</h2><ul><li><p><strong>Create service</strong></p><pre><code class="language-bash">docker service create --name &lt;service-name&gt; &lt;image&gt;
</code></pre></li><li><p><strong>Create service with replicas</strong></p><pre><code class="language-bash">docker service create --name &lt;service-name&gt; --replicas &lt;n&gt; &lt;image&gt;
</code></pre></li><li><p><strong>List services</strong></p><pre><code class="language-bash">docker service ls
</code></pre></li><li><p><strong>Inspect service</strong></p><pre><code class="language-bash">docker service inspect &lt;service-name&gt; --pretty
</code></pre></li><li><p><strong>Scale service</strong></p><pre><code class="language-bash">docker service scale &lt;service-name&gt;=&lt;n&gt;
</code></pre></li><li><p><strong>Update service</strong></p><pre><code class="language-bash">docker service update --image &lt;new-image&gt; &lt;service-name&gt;
</code></pre></li><li><p><strong>Remove service</strong></p><pre><code class="language-bash">docker service rm &lt;service-name&gt;
</code></pre></li></ul><h2>🔁 Replicas</h2><p>Replicas define how many instances of a service should run across the swarm.</p><ul><li><p><strong>Set replicas when creating a service</strong></p><pre><code class="language-bash">docker service create --replicas 5 --name myapp myimage
</code></pre></li><li><p><strong>Scale replicas</strong></p><pre><code class="language-bash">docker service scale myapp=10
</code></pre></li></ul><p>Swarm automatically distributes replicas across available nodes and restarts them if they fail.</p><h2>🐝 Task &amp; Container Management</h2><ul><li><p><strong>List tasks of a service</strong></p><pre><code class="language-bash">docker service ps &lt;service-name&gt;
</code></pre></li><li><p><strong>List all tasks</strong></p><pre><code class="language-bash">docker node ps &lt;node-name&gt;
</code></pre></li><li><p><strong>List containers</strong></p><pre><code class="language-bash">docker container ls
</code></pre></li><li><p><strong>Inspect container</strong></p><pre><code class="language-bash">docker container inspect &lt;container-id&gt;
</code></pre></li></ul><h2>🌐 Networking</h2><h3>🧠 What Is an Overlay Network?</h3><p>An overlay network is a virtual network that spans across multiple Docker hosts. It allows containers running on different nodes</p><h3>Commands</h3><ul><li><p><strong>Create overlay network</strong></p><pre><code class="language-bash">docker network create --driver overlay &lt;network-name&gt;
</code></pre></li><li><p><strong>List networks</strong></p><pre><code class="language-bash">docker network ls
</code></pre></li><li><p><strong>Attach service to network</strong></p><pre><code class="language-bash">docker service create --name &lt;service-name&gt; --network &lt;network-name&gt; &lt;image&gt;
</code></pre></li></ul><h2>🛠 Useful Flags</h2><table><thead><tr><th>Flag</th><th>Description</th></tr></thead><tbody><tr><td><code>--replicas</code></td><td>Number of service instances</td></tr><tr><td><code>--publish</code></td><td>Port mapping (<code>&lt;host&gt;:&lt;container&gt;</code>)</td></tr><tr><td><code>--mount</code></td><td>Volume mounting</td></tr><tr><td><code>--constraint</code></td><td>Node placement rules</td></tr><tr><td><code>--update-delay</code></td><td>Delay between updates</td></tr><tr><td><code>--limit-cpu</code> / <code>--limit-memory</code></td><td>Resource limits</td></tr></tbody></table><h2>📄 Example: Create a Web Service</h2><pre><code class="language-bash">docker service create \\
  --name web \\
  --replicas 3 \\
  --publish 80:80 \\
  --network webnet \\
  nginx
</code></pre>`,29),h=[u],v={__name:"docker-swarm",setup(o,{expose:e}){return e({frontmatter:{}}),(n,b)=>(t(),s("div",m,h))}},k=c({__name:"docker-swarm-memo",setup(o){i(r=>({"53645f1f":a(e).cardColor,"60c4854f":a(e).textColor1}));const e=d();return(r,n)=>(t(),s("div",null,[p(a(v),{style:{"overflow-x":"auto"}})]))}});const _=g(k,[["__scopeId","data-v-9eb362f2"]]);export{_ as default};
