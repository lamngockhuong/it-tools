import{o as d,c as r,S as c,d as a,bl as l,bm as i,k as p,l as t,bk as u}from"./index-1de3a68b.js";const m={class:"markdown-body"},h=c(`<p>Docker Compose is a powerful tool for defining and running multi-container Docker applications. It uses a YAML file (<code>compose.yaml</code>) to configure application services, networks, volumes, and more. This file allows developers to declaratively describe infrastructure and dependencies, making it easier to manage complex environments.</p><p>Whether you’re building a local dev stack or deploying to production, Compose simplifies orchestration and keeps your configuration readable and version-controlled.</p><h2>📁 File Name</h2><pre><code class="language-yaml">compose.yaml
</code></pre><h3>✅ YAML Formatting Rules</h3><ul><li>Use <strong>2 spaces</strong> for indentation (not tabs)</li><li>Keys and values are <strong>case-sensitive</strong></li><li>Lists use <code>-</code> for each item</li><li>Strings with special characters should be quoted</li><li>Environment variables can be defined inline or via <code>.env</code> files</li></ul><h2>🧱 Basic Structure</h2><pre><code class="language-yaml">services:
  service_name:
    image: image_name:tag
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - &quot;host_port:container_port&quot;
    volumes:
      - ./host_path:/container_path
    environment:
      - VAR_NAME=value
    depends_on:
      - other_service
    networks:
      - custom_network
networks:
  custom_network:
    driver: bridge
volumes:
  custom_volume:
</code></pre><h2>⚙️ Services</h2><p>Each service defines a container.</p><h3>Common Service Options</h3><pre><code class="language-yaml">services:
  web:
    image: nginx:latest
    build:
      context: ./app
      dockerfile: Dockerfile
    command: [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]
    container_name: custom_name
    ports:
      - &quot;8080:80&quot;
    expose:
      - &quot;80&quot;
    environment:
      - DEBUG=true
    env_file:
      - .env
    volumes:
      - ./data:/data
    restart: always
    depends_on:
      - db
    networks:
      - frontend
    healthcheck:
      test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]
      interval: 30s
      timeout: 10s
      retries: 5
</code></pre><h2>🏗️ Build Options</h2><pre><code class="language-yaml">build:
  context: ./dir
  dockerfile: Dockerfile
  args:
    build_arg: value
  target: build-stage
</code></pre><ul><li><strong><code>build:</code></strong> Tells Compose how to build the image. <ul><li><code>context:</code> is the directory containing the Dockerfile and source code.</li><li><code>dockerfile:</code> lets you specify a custom Dockerfile name or path.</li></ul></li></ul><h2>📦 Volumes</h2><pre><code class="language-yaml">volumes:
  data_volume:
    driver: local
    driver_opts:
      type: none
      device: /path/on/host
      o: bind
</code></pre><h3>Mounting Volumes</h3><pre><code class="language-yaml">volumes:
  - data_volume:/app/data
  - ./local:/container/path
</code></pre><ul><li><strong><code>volumes:</code></strong> Mounts host directories or named volumes into the container. <ul><li><code>./src:/app/src</code> mounts the local <code>src</code> folder into the container at <code>/app/src</code>.</li></ul></li></ul><h2>🌐 Networks</h2><pre><code class="language-yaml">networks:
  frontend:
    driver: bridge
  backend:
    driver: overlay
</code></pre><ul><li><strong><code>networks:</code></strong> Connects the service to one or more custom networks. Enables service discovery and isolation.</li></ul><h3>Assigning Networks to Services</h3><pre><code class="language-yaml">services:
  app:
    networks:
      - frontend
      - backend
</code></pre><h2>🌐 Ports</h2><pre><code class="language-yaml">    ports:
      - &quot;3000:3000&quot;
</code></pre><ul><li><strong><code>ports:</code></strong> Maps container ports to host ports. Format is <code>&quot;host:container&quot;</code>. Useful for exposing services to your local machine.</li></ul><h2>🔐 Secrets (Docker Swarm only)</h2><pre><code class="language-yaml">secrets:
  db_password:
    file: ./db_password.txt

services:
  db:
    secrets:
      - db_password
</code></pre><h2>🔑 Configs (Docker Swarm only)</h2><pre><code class="language-yaml">configs:
  my_config:
    file: ./config.txt

services:
  app:
    configs:
      - source: my_config
        target: /etc/config.txt
</code></pre><h2>🧪 Healthcheck</h2><pre><code class="language-yaml">healthcheck:
  test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 5s
</code></pre><ul><li><strong><code>healthcheck:</code></strong> Defines how Docker checks if the container is healthy. <ul><li><code>test:</code> is the command to run</li><li><code>interval:</code> how often to run the check</li><li><code>timeout:</code> how long to wait for a response</li><li><code>retries:</code> how many failures before marking unhealthy</li></ul></li></ul><h2>🔄 Restart Policies</h2><pre><code class="language-yaml">restart: no         # Never restart
restart: always     # Always restart
restart: on-failure # Restart on failure
restart: unless-stopped
</code></pre><h2>🧬 Environment Variables</h2><pre><code class="language-yaml">environment:
  - VAR1=value1
  - VAR2=value2
env_file:
  - .env
</code></pre><ul><li><strong><code>environment:</code></strong> Sets environment variables inside the container. Useful for configuration.</li><li><strong><code>env_file:</code></strong> Loads environment variables from a file. Keeps secrets and config separate from the Compose file.</li></ul><h2>Command</h2><pre><code class="language-yaml">    command: npm start
</code></pre><ul><li><strong><code>command:</code></strong> Overrides the default command defined in the Dockerfile. Useful for customizing container behavior.</li></ul><h2>Dependencies</h2><pre><code class="language-yaml">    depends_on:
      - db
</code></pre><ul><li><strong><code>depends_on:</code></strong> Specifies service startup order. In Compose, this does not wait for the service to be “ready”—just started.</li></ul><h2>🧹 Clean Up</h2><pre><code class="language-bash">docker compose down         # Stop and remove containers, networks, volumes
docker compose down -v      # Also remove named volumes
</code></pre><h2>🚀 Commands</h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>docker compose up</code></td><td>Start services</td></tr><tr><td><code>docker compose up -d</code></td><td>Start in detached mode</td></tr><tr><td><code>docker compose down</code></td><td>Stop and remove services</td></tr><tr><td><code>docker compose build</code></td><td>Build images</td></tr><tr><td><code>docker compose ps</code></td><td>List containers</td></tr><tr><td><code>docker compose logs</code></td><td>View logs</td></tr><tr><td><code>docker compose exec &lt;service&gt; &lt;cmd&gt;</code></td><td>Run command in container</td></tr><tr><td><code>docker compose config</code></td><td>Validate and view config</td></tr></tbody></table><h2>🧠 Mounting GPU / iGPU</h2><p>Docker Compose supports GPU access via the <code>device_requests</code> field (Compose v3.8+ and Docker 19.03+).</p><h3>✅ NVIDIA GPU Example</h3><pre><code class="language-yaml">services:
  gpu-app:
    image: nvidia/cuda:11.0-base
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
</code></pre><h3>✅ Intel iGPU (via VAAPI or OpenCL)</h3><pre><code class="language-yaml">services:
  igpu-app:
    image: intel/openvino
    devices:
      - /dev/dri:/dev/dri
</code></pre><blockquote><p>🔧 Make sure your host has the necessary drivers and runtime (e.g., NVIDIA Container Toolkit or Intel Media SDK).</p></blockquote><h2>🔄 Compose vs Swarm YAML Differences</h2><table><thead><tr><th>Feature</th><th>Docker Compose (<code>compose.yaml</code>)</th><th>Docker Swarm (<code>stack.yml</code>)</th></tr></thead><tbody><tr><td><code>restart</code></td><td>✅ Supported</td><td>❌ Not supported</td></tr><tr><td><code>depends_on</code></td><td>✅ Supported</td><td>❌ Not supported</td></tr><tr><td><code>deploy</code></td><td>❌ Ignored</td><td>✅ Required for replicas</td></tr><tr><td><code>build</code></td><td>✅ Supported</td><td>❌ Not supported</td></tr><tr><td><code>volumes</code> (bind)</td><td>✅ Supported</td><td>✅ Supported</td></tr><tr><td><code>configs</code>/<code>secrets</code></td><td>❌ Ignored</td><td>✅ Supported</td></tr><tr><td><code>healthcheck</code></td><td>✅ Supported</td><td>✅ Supported</td></tr></tbody></table><blockquote><p>🧠 <strong>Tip:</strong> Use <code>compose.yaml</code> for local development and <code>stack.yml</code> for Swarm deployments.</p></blockquote><h2>🧬 Profiles (Compose v3.9+)</h2><p>Profiles allow conditional inclusion of services based on the active profile. This is useful for separating dev/test/staging environments.</p><h3>✅ Defining Profiles</h3><pre><code class="language-yaml">services:
  web:
    image: nginx
    profiles:
      - default

  debug:
    image: busybox
    command: top
    profiles:
      - debug
</code></pre><h3>✅ Activating Profiles</h3><pre><code class="language-bash">docker compose --profile debug up
</code></pre><h3>✅ Notes</h3><ul><li>Services without a <code>profiles</code> key are always included.</li><li>Multiple profiles can be activated simultaneously.</li><li>Useful for feature toggles, optional services, or environment-specific setups.</li></ul><h2>⚔️ YAML Differences: Docker Compose vs Docker Swarm Mode</h2><p>Docker Compose and Docker Swarm both use YAML files to define services, but they serve different purposes and support different features. Compose is optimized for local development and testing, while Swarm is designed for production-grade orchestration across clusters.</p><h3>🧭 Purpose</h3><table><thead><tr><th>Mode</th><th>Use Case</th></tr></thead><tbody><tr><td>Compose</td><td>Local development, testing</td></tr><tr><td>Swarm</td><td>Cluster deployment, scaling</td></tr></tbody></table><h3>🧩 Key Differences in YAML Structure</h3><table><thead><tr><th>Feature</th><th>Compose (<code>compose.yaml</code>)</th><th>Swarm (<code>stack.yml</code>)</th></tr></thead><tbody><tr><td><code>build:</code></td><td>✅ Supported</td><td>❌ Ignored</td></tr><tr><td><code>restart:</code></td><td>✅ Supported</td><td>❌ Ignored</td></tr><tr><td><code>depends_on:</code></td><td>✅ Supported</td><td>❌ Ignored</td></tr><tr><td><code>deploy:</code></td><td>❌ Ignored</td><td>✅ Required for scaling, placement</td></tr><tr><td><code>configs:</code></td><td>❌ Ignored</td><td>✅ Supported</td></tr><tr><td><code>secrets:</code></td><td>❌ Ignored</td><td>✅ Supported</td></tr><tr><td><code>healthcheck:</code></td><td>✅ Supported</td><td>✅ Supported</td></tr><tr><td><code>volumes:</code> (bind)</td><td>✅ Supported</td><td>✅ Supported</td></tr><tr><td><code>networks:</code></td><td>✅ Supported</td><td>✅ Supported</td></tr><tr><td><code>profiles:</code></td><td>✅ Supported (v3.9+)</td><td>❌ Not supported</td></tr></tbody></table><h3>🔧 Compose-Only Features</h3><p>These features are useful for local development but are ignored in Swarm:</p><h4><code>build:</code></h4><pre><code class="language-yaml">services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
</code></pre><ul><li>Compose builds images locally.</li><li>Swarm requires pre-built images pushed to a registry.</li></ul><h4><code>restart:</code></h4><pre><code class="language-yaml">restart: unless-stopped
</code></pre><ul><li>Compose uses this to auto-restart containers.</li><li>Swarm uses <code>deploy.restart_policy</code> instead.</li></ul><h4><code>depends_on:</code></h4><pre><code class="language-yaml">depends_on:
  - db
</code></pre><ul><li>Compose starts services in order.</li><li>Swarm ignores this; use healthchecks and wait-for-it scripts.</li></ul><h3>🛡️ Swarm-Only Features</h3><p>These features are exclusive to Swarm and ignored by Compose:</p><h4><code>deploy:</code></h4><pre><code class="language-yaml">services:
  app:
    deploy:
      replicas: 3
      placement:
        constraints:
          - node.role == manager
      restart_policy:
        condition: on-failure
</code></pre><ul><li>Controls scaling, placement, and restart behavior in a cluster.</li></ul><h4><code>configs:</code> and <code>secrets:</code></h4><pre><code class="language-yaml">configs:
  app_config:
    file: ./config.yml

secrets:
  db_password:
    file: ./password.txt
</code></pre><ul><li>Used to securely distribute configuration and secrets across nodes.</li></ul><h4><code>placement:</code> (inside <code>deploy</code>)</h4><pre><code class="language-yaml">placement:
  constraints:
    - node.labels.env == production
</code></pre><ul><li>Assigns services to specific nodes based on labels.</li></ul><h3>🧪 Healthchecks (Supported in Both)</h3><pre><code class="language-yaml">healthcheck:
  test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]
  interval: 30s
  timeout: 10s
  retries: 3
</code></pre><ul><li>Works in both Compose and Swarm.</li><li>In Swarm, health status can influence service rescheduling.</li></ul><h3>📦 Volume Differences</h3><table><thead><tr><th>Type</th><th>Compose</th><th>Swarm</th></tr></thead><tbody><tr><td>Bind mount</td><td>✅</td><td>✅</td></tr><tr><td>Named volume</td><td>✅</td><td>✅</td></tr><tr><td>External volume</td><td>✅</td><td>✅</td></tr><tr><td>Volume driver options</td><td>✅</td><td>✅</td></tr></tbody></table><p>Swarm requires external volumes to be pre-created on all nodes.</p><h3>🧠 Summary</h3><table><thead><tr><th>Feature Category</th><th>Compose</th><th>Swarm</th></tr></thead><tbody><tr><td>Local builds</td><td>✅</td><td>❌</td></tr><tr><td>Cluster scaling</td><td>❌</td><td>✅</td></tr><tr><td>Secrets/configs</td><td>❌</td><td>✅</td></tr><tr><td>Profiles</td><td>✅</td><td>❌</td></tr><tr><td>Restart policies</td><td>✅</td><td>✅ (via <code>deploy</code>)</td></tr><tr><td>Service dependencies</td><td>✅</td><td>❌</td></tr></tbody></table><blockquote><p>🧭 <strong>Tip:</strong> Use <code>compose.yaml</code> for development and <code>stack.yml</code> for Swarm. You can split your configuration into multiple files or use tools like <code>kompose</code> to convert Kubernetes manifests.</p></blockquote><h2>📚 Resources</h2><ul><li><a href="https://docs.docker.com/compose/compose-file/">Compose File Reference</a></li><li><a href="https://docs.docker.com/engine/reference/commandline/compose/">Docker CLI Reference</a></li><li><a href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html">NVIDIA GPU Support</a></li><li><a href="https://github.com/intel/media-driver">Intel GPU Support</a></li></ul>`,107),g=[h],f={__name:"docker-compose",setup(n,{expose:e}){return e({frontmatter:{}}),(s,b)=>(d(),r("div",m,g))}},v=a({__name:"docker-compose-memo",setup(n){l(o=>({"5e185a50":t(e).cardColor,d5b8ee94:t(e).textColor1}));const e=i();return(o,s)=>(d(),r("div",null,[p(t(f),{style:{"overflow-x":"auto"}})]))}});const k=u(v,[["__scopeId","data-v-c7d27cdb"]]);export{k as default};
