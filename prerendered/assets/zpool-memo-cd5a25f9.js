import{o as s,c as a,S as r,d as l,bl as p,bm as i,k as c,l as e,bk as m}from"./index-1de3a68b.js";const h={class:"markdown-body"},u=r(`<h2>📦 ZFS Pool Basics</h2><pre><code class="language-bash"># Create a new pool
zpool create mypool /dev/sdX

# List all pools
zpool list

# Show detailed pool status
zpool status mypool

# Add a new vdev to an existing pool
zpool add mypool /dev/sdY

# Destroy a pool (⚠️ irreversible!)
zpool destroy mypool

# Export (unmount) a pool
zpool export mypool

# Import (mount) a pool
zpool import mypool

# Scrub a pool (check for errors)
zpool scrub mypool

# Check scrub status
zpool status mypool
</code></pre><h2>🛠️ Vdev Types &amp; RAID Equivalents</h2><table><thead><tr><th>ZFS Vdev Type</th><th>Description</th><th>RAID Equivalent</th><th>Min Disks</th><th>Fault Tolerance</th></tr></thead><tbody><tr><td><code>stripe</code></td><td>Data striped across disks, no redundancy</td><td>RAID 0</td><td>1</td><td>0</td></tr><tr><td><code>mirror</code></td><td>Identical copies on multiple disks</td><td>RAID 1</td><td>2+</td><td>1 per mirror</td></tr><tr><td><code>raidz1</code></td><td>Single parity</td><td>RAID 5</td><td>3+</td><td>1</td></tr><tr><td><code>raidz2</code></td><td>Double parity</td><td>RAID 6</td><td>4+</td><td>2</td></tr><tr><td><code>raidz3</code></td><td>Triple parity</td><td>RAID 7 (uncommon)</td><td>5+</td><td>3</td></tr></tbody></table><blockquote><p>⚠️ ZFS pools are built from one or more vdevs. If any vdev fails, the entire pool fails—even if other vdevs are healthy.</p></blockquote><h2>📁 Dataset &amp; Filesystem Management</h2><pre><code class="language-bash"># Create a dataset
zfs create mypool/mydataset

# List datasets
zfs list

# Set quota on a dataset
zfs set quota=10G mypool/mydataset

# Snapshot a dataset
zfs snapshot mypool/mydataset@snap1

# Roll back to a snapshot
zfs rollback mypool/mydataset@snap1

# Send snapshot to another system
zfs send mypool/mydataset@snap1 | ssh user@host zfs receive backup/mirror
</code></pre><h2>🧮 Tips &amp; Best Practices</h2><ul><li>✅ Always use whole disks (not partitions) for ZFS.</li><li>✅ Use ECC RAM if possible—ZFS relies heavily on memory integrity.</li><li>✅ Avoid mixing vdev types in a single pool.</li><li>✅ Use <code>zpool scrub</code> regularly to detect and fix silent corruption.</li><li>✅ Remember: redundancy is at the vdev level, not the pool level.</li></ul>`,9),y=[u],_={__name:"zpool.content",setup(d,{expose:t}){return t({frontmatter:{}}),(n,f)=>(s(),a("div",h,y))}},v=l({__name:"zpool-memo",setup(d){p(o=>({"5f67c512":e(t).cardColor,"55a44488":e(t).textColor1}));const t=i();return(o,n)=>(s(),a("div",null,[c(e(_))]))}});const z=m(v,[["__scopeId","data-v-0e7e71c8"]]);export{z as default};
