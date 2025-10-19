# Kiến trúc và API Calls của IT-Tools

## Tổng quan

IT-Tools là một **Progressive Web App (PWA)** chạy chủ yếu trên trình duyệt (client-side), được thiết kế để hoạt động **offline** và không yêu cầu backend server riêng.

## Kiến trúc hệ thống

### Frontend-Only Architecture

- **Framework**: Vue.js 3 + TypeScript
- **Build tool**: Vite
- **Deployment**: Static files (HTML/CSS/JS) được serve qua nginx
- **No Backend Required**: Tất cả xử lý được thực hiện trên trình duyệt

### Đặc điểm kỹ thuật

```text
┌─────────────────────────────────────────────┐
│           User's Browser (Client)           │
│  ┌─────────────────────────────────────┐   │
│  │     IT-Tools PWA (Vue.js App)       │   │
│  │  ┌───────────────────────────────┐  │   │
│  │  │  99% Tools (Client-side only) │  │   │
│  │  │  - Encryption/Decryption      │  │   │
│  │  │  - Code formatters            │  │   │
│  │  │  - Converters                 │  │   │
│  │  │  - Generators                 │  │   │
│  │  │  - WebAssembly tools          │  │   │
│  │  └───────────────────────────────┘  │   │
│  │  ┌───────────────────────────────┐  │   │
│  │  │  ~1% Tools (External APIs)    │  │   │
│  │  │  - My IP tool                 │  │   │
│  │  │  - DNSBL checker              │  │   │
│  │  │  - WHOIS checker              │  │   │
│  │  └───────────────────────────────┘  │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
         │                      │
         │ (optional)          │ (rare)
         ▼                      ▼
┌──────────────────┐   ┌──────────────────────┐
│  Static Assets   │   │   External APIs      │
│  - fonts         │   │  - ipify.org         │
│  - figlet fonts  │   │  - cloudflare-dns    │
│  - wasm files    │   │  - iana.org          │
└──────────────────┘   └──────────────────────┘
```

## Chi tiết các API Calls

### 1. ❌ External API Calls (Runtime)

Chỉ có **3-4 công cụ** trong hàng trăm công cụ gọi API bên ngoài:

#### a) My IP Tool (`src/tools/my-ip/my-ip.vue`)

**Mục đích**: Hiển thị địa chỉ IP công khai của người dùng

```javascript
// IPv4 detection
fetch('//api4.ipify.org?format=json', { mode: 'cors' })

// IPv6 detection
fetch('//api6.ipify.org?format=json', { mode: 'cors' })

// Geo-location lookup (local script)
window.IpLookup(ip) // Uses local iplookup.js script
```

**APIs sử dụng**:

- `api4.ipify.org` - Public IPv4 lookup service
- `api6.ipify.org` - Public IPv6 lookup service
- Local IP lookup script (không gọi API trực tiếp)

#### b) DNSBL Checker (`src/tools/dnsbl-checker/dnsbl-checker.vue`)

**Mục đích**: Kiểm tra IP có bị blacklist không

```javascript
fetch(`https://cloudflare-dns.com/dns-query?name=${domain}`)
```

**API sử dụng**:

- `cloudflare-dns.com/dns-query` - Cloudflare DNS over HTTPS

#### c) IANA WHOIS Checker (`src/tools/iana-whois-checker/iana-whois-checker.vue`)

**Mục đích**: Tra cứu thông tin WHOIS của domain

```javascript
const url = `https://www.iana.org/whois?q=${encodeURIComponent(domain)}`;
// Opens in new window, doesn't fetch directly
```

**API sử dụng**:

- `www.iana.org/whois` - IANA WHOIS service (mở trong tab mới)

### 2. ✅ Local Asset Fetches (Optional)

Các fetch này chỉ là load static files từ chính server host IT-Tools:

#### Configuration Files

```javascript
// src/main.ts
fetch(`${base}tools-settings.json`)  // Load tool settings
fetch(`${base}home.custom.md`)       // Load custom homepage content
fetch(`${base}tools-filter.json`)    // Load tool filters
```

**Lưu ý**: Đây không phải external API calls, chỉ là load config files từ `/public` folder.

### 3. 🔧 Build-time Only (Not Runtime)

#### Google Translate API

**Chỉ dùng trong development** để tự động dịch các file ngôn ngữ:

```javascript
// scripts/translate-missings.mjs
const TRANSLATE_ENDPOINT = 'https://translation.googleapis.com/language/translate/v2';
```

**Lưu ý**:

- Chỉ chạy khi developer dùng script `pnpm run script:translate-missing`
- Không ảnh hưởng đến end users
- Không chạy trong production runtime

### 4. 🔗 Static Links (Not API Calls)

Nhiều tools có links đến tài liệu bên ngoài, nhưng đây **không phải API calls**:

- Wikipedia links
- MDN documentation links
- External documentation
- Social media sharing URLs (Facebook, Twitter, LinkedIn, etc.)

## Các công nghệ Client-side

### WebAssembly (WASM)

Nhiều tools sử dụng WebAssembly để xử lý nặng trên browser:

- **QPDF**: PDF manipulation
- **Age Crypto**: Encryption
- **JQ**: JSON query processing
- **MiTeX**: Math rendering
- **SVG2PNG**: Image conversion

### Worker Threads

Một số công cụ sử dụng Web Workers để xử lý không blocking UI:

- Machine Learning models (@huggingface/transformers)
- Heavy computation tasks
- PDF processing

### Local Storage & IndexedDB

Lưu trữ settings và data locally:

```javascript
// Sử dụng composables
useQueryParamOrStorage({
  storageName: 'tool-name:setting',
  defaultValue: 'value'
});
```

## Deployment Options

### Docker

```yaml
services:
  it-tools:
    image: sharevb/it-tools:latest
    ports:
      - 8080:8080
```

Chỉ là nginx container serving static files.

### Static Hosting

Có thể deploy lên:

- ✅ GitHub Pages
- ✅ Vercel
- ✅ Netlify
- ✅ Cloudflare Pages
- ✅ Any static file server

### Self-hosted

Chỉ cần serve thư mục `dist/` sau khi build:

```bash
pnpm build
# Serve dist/ folder with any web server
```

## Privacy & Security

### Data Processing

- ✅ **99% công cụ**: Tất cả data được xử lý hoàn toàn trên browser
- ✅ **No server logging**: Không có server backend để log data
- ✅ **No analytics by default**: Chỉ có Plausible (optional, privacy-friendly)
- ❌ **3-4 công cụ**: Cần gọi external APIs (My IP, DNSBL, WHOIS)

### Security Features

- 🔒 WebCrypto API cho encryption tools
- 🔒 Yêu cầu HTTPS cho một số features (PGP, WebCrypto)
- 🔒 Content Security Policy
- 🔒 No third-party tracking scripts

## Performance

### Offline Support

- ✅ Service Worker caching
- ✅ PWA installable
- ✅ Works without internet (except 3-4 tools cần APIs)

### Bundle Size Optimization

- Code splitting per tool
- Lazy loading routes
- Tree-shaking unused dependencies
- WASM modules loaded on-demand

## Kết luận

### Ưu điểm

- ✅ **Privacy-first**: Hầu hết data không rời khỏi browser
- ✅ **Offline-capable**: Hoạt động không cần internet
- ✅ **Fast**: Không có network latency cho hầu hết operations
- ✅ **Self-hostable**: Dễ dàng tự host
- ✅ **No backend maintenance**: Không cần maintain server

### Giới hạn

- ❌ Một số tools cần external APIs (My IP, DNSBL, WHOIS)
- ❌ Browser limitations cho một số heavy operations
- ❌ Cross-origin restrictions cho một số features

### Khuyến nghị

Nếu muốn **hoàn toàn offline**:

- Có thể tắt/ẩn 3 tools cần external APIs
- Sử dụng `tools-filter.json` để filter out các tools này:

```json
{
  "excludeToolsFilterRegex": "my-ip|dnsbl-checker|iana-whois-checker"
}
```

---

**Cập nhật**: October 22, 2025
**Version**: 2025.10.19
