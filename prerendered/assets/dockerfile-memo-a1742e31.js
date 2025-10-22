import{o as a,c,S as r,d as i,bl as l,bm as d,k as p,l as o,bk as u}from"./index-1de3a68b.js";const g={class:"markdown-body"},m=r(`<p>A <strong>Dockerfile</strong> is a script composed of instructions to build a Docker image. Each instruction creates a layer in the image.</p><h2>📦 Basic Structure</h2><pre><code class="language-Dockerfile"># Comment
INSTRUCTION arguments
</code></pre><h2>🚀 Core Instructions</h2><h3><code>FROM</code></h3><p>Specifies the base image.</p><pre><code class="language-Dockerfile">FROM ubuntu:20.04
FROM node:22-alpine
</code></pre><h3><code>LABEL</code></h3><p>Adds metadata to the image.</p><pre><code class="language-Dockerfile">LABEL maintainer=&quot;you@example.com&quot;
LABEL version=&quot;1.0&quot; description=&quot;My App&quot;
</code></pre><h3><code>ENV</code></h3><p>Sets environment variables.</p><pre><code class="language-Dockerfile">ENV NODE_ENV=production
ENV PATH=&quot;/app/bin:$PATH&quot;
</code></pre><h3><code>RUN</code></h3><p>Executes commands in a shell during build.</p><pre><code class="language-Dockerfile">RUN apt-get update &amp;&amp; apt-get install -y curl
RUN npm install
</code></pre><p>Use <code>RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code> for JSON array form.</p><h3><code>COPY</code></h3><p>Copies files from host to image.</p><pre><code class="language-Dockerfile">COPY . /app
COPY config.json /app/config.json
</code></pre><h3><code>ADD</code></h3><p>Similar to <code>COPY</code>, but supports remote URLs and auto-extracts archives.</p><pre><code class="language-Dockerfile">ADD https://example.com/file.tar.gz /app/
ADD archive.zip /app/
</code></pre><h3><code>CMD</code></h3><p>Sets default command to run when container starts.</p><pre><code class="language-Dockerfile">CMD [&quot;node&quot;, &quot;server.js&quot;]     # Preferred exec form
CMD node server.js            # Shell form
</code></pre><p>Only one <code>CMD</code> allowed; later ones override earlier.</p><h3><code>ENTRYPOINT</code></h3><p>Configures a container to run as an executable.</p><pre><code class="language-Dockerfile">ENTRYPOINT [&quot;python&quot;, &quot;app.py&quot;]
</code></pre><p>Use with <code>CMD</code> to pass default arguments.</p><h3><code>WORKDIR</code></h3><p>Sets the working directory for subsequent instructions.</p><pre><code class="language-Dockerfile">WORKDIR /app
</code></pre><h3><code>EXPOSE</code></h3><p>Documents the port the container listens on.</p><pre><code class="language-Dockerfile">EXPOSE 80
EXPOSE 443
</code></pre><p>Note: This does not publish the port.</p><h3><code>VOLUME</code></h3><p>Creates a mount point for persistent or shared data.</p><pre><code class="language-Dockerfile">VOLUME [&quot;/data&quot;]
</code></pre><h3><code>USER</code></h3><p>Sets the user to run subsequent instructions.</p><pre><code class="language-Dockerfile">USER appuser
</code></pre><h3><code>ARG</code></h3><p>Defines build-time variables.</p><pre><code class="language-Dockerfile">ARG VERSION=1.0
RUN echo $VERSION
</code></pre><p>Use <code>--build-arg VERSION=2.0</code> during <code>docker build</code>.</p><h3><code>ONBUILD</code></h3><p>Triggers instructions when the image is used as a base.</p><pre><code class="language-Dockerfile">ONBUILD COPY . /app
</code></pre><h2>🧠 Best Practices</h2><ul><li>Use minimal base images (e.g., <code>alpine</code>) for smaller size.</li><li>Combine <code>RUN</code> commands to reduce layers.</li><li>Use <code>.dockerignore</code> to exclude unnecessary files.</li><li>Prefer <code>COPY</code> over <code>ADD</code> unless you need archive extraction.</li><li>Use <code>ENTRYPOINT</code> for fixed commands and <code>CMD</code> for arguments.</li><li>Avoid hardcoding secrets or credentials.</li></ul><h2>🧪 Example Dockerfile</h2><pre><code class="language-Dockerfile">FROM node:22-alpine

LABEL maintainer=&quot;guillaume@example.com&quot;

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV=production

CMD [&quot;node&quot;, &quot;index.js&quot;]
</code></pre><h2>🛠️ Build &amp; Run</h2><pre><code class="language-bash"># Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app
</code></pre><h2>📁 .dockerignore Example</h2><pre><code class="language-plaintext">node_modules
*.log
Dockerfile
.git
</code></pre><h2>🏗️ Multistage Builds</h2><p><strong>Multistage builds</strong> allow you to use multiple <code>FROM</code> statements in one Dockerfile to optimize image size and separate build dependencies from runtime.</p><h3>🎯 Why Use Multistage Builds?</h3><ul><li>Reduce final image size by excluding build tools and intermediate files.</li><li>Improve security by minimizing attack surface.</li><li>Keep Dockerfiles clean and maintainable.</li></ul><h3>🧱 Basic Syntax</h3><pre><code class="language-Dockerfile"># Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
</code></pre><h3>🏷️ Named Stages</h3><p>You can name each stage using <code>AS &lt;name&gt;</code> and reference it later with <code>--from=&lt;name&gt;</code>.</p><pre><code class="language-Dockerfile">FROM golang:1.21 AS build
WORKDIR /src
COPY . .
RUN go build -o myapp

FROM alpine:latest
COPY --from=build /src/myapp /usr/local/bin/myapp
ENTRYPOINT [&quot;myapp&quot;]
</code></pre><h3>📦 Copying Artifacts</h3><p>Use <code>COPY --from=&lt;stage&gt;</code> to copy files from one stage to another.</p><pre><code class="language-Dockerfile">COPY --from=builder /app/output /app/output
</code></pre><p>You can copy:</p><ul><li>Files</li><li>Directories</li><li>Binaries</li><li>Configs</li></ul><h3>🧼 Clean Final Image</h3><p>Multistage builds help you avoid bloated images:</p><pre><code class="language-Dockerfile"># Without multistage: includes compilers, source code, etc.
# With multistage: only includes runtime essentials
</code></pre><h3>🧪 Real-World Example: React App</h3><pre><code class="language-Dockerfile"># Build stage
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]
</code></pre>`,78),h=[m],f={__name:"dockerfile",setup(t,{expose:e}){return e({frontmatter:{}}),(s,O)=>(a(),c("div",g,h))}},D=i({__name:"dockerfile-memo",setup(t){l(n=>({"053abb51":o(e).cardColor,"2c8ca146":o(e).textColor1}));const e=d();return(n,s)=>(a(),c("div",null,[p(o(f),{style:{"overflow-x":"auto"}})]))}});const b=u(D,[["__scopeId","data-v-7ae970ea"]]);export{b as default};
