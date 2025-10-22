import{_ as f}from"./TextareaCopyable-4c7847d0.js";import{d as U,a4 as C,r as S,i as H,o as G,j as A,w as n,k as o,l as e,a as O,ak as _,af as x,ah as k}from"./index-1de3a68b.js";import{_ as y}from"./FormItem-be347854.js";import{_ as $}from"./DynamicInput-08e3a3a8.js";import{_ as E}from"./Select-57666bf1.js";import{_ as W}from"./Switch-f888395d.js";import{_ as I}from"./Form-b9c860cb.js";import{_ as D}from"./Card-97d38412.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";import"./context-589fe33b.js";import"./ArrowDown-1689df4a.js";import"./Tag-78d4e208.js";import"./FocusDetector-3b312503.js";import"./VirtualList-79e5248c.js";import"./Empty-0e586e3d.js";import"./index-cbfaa337.js";const F={style:{display:"flex","align-items":"center",width:"100%"}},Re=U({__name:"htaccess-generator",setup(B){const{t:l}=C(),t=S({domainName:"",redirects:[],cacheExtensions:"",cacheDuration:60,cacheDurationMultiple:"60",cacheType:"public",mustRevalidate:!1,protectedFile:"",htpasswdPath:"",referrer:"",hotlinkExtensions:"",nohotlinkImageHref:"",errorPages:[],ipRules:[],blockBots:!1,defaultPage:"",preventDirectoryListing:!1,preventViewingHtaccess:!0}),h=H(()=>{let d="";return t.value.domainName&&(d+=`Options +FollowSymLinks
RewriteEngine On
RewriteCond %{HTTP_HOST} ^${t.value.domainName}[nc]
RewriteRule ^(.*)$ https://www.${t.value.domainName}/$1 [R=301,nc]

`),t.value.redirects.forEach(({key:a,value:s})=>{!a||!s||(d+=`Redirect 301 ${a} ${s}
`)}),t.value.cacheExtensions&&(d+=`<FilesMatch "\\.(${t.value.cacheExtensions.split(",").join("|")})$">
Header set Cache-Control "${t.value.cacheType}${t.value.mustRevalidate?", proxy-revalidate":""}, max-age=${t.value.cacheDuration*Number(t.value.cacheDurationMultiple)}"
</FilesMatch>

`),t.value.protectedFile&&t.value.htpasswdPath&&(d+=`<Files "${t.value.protectedFile}">
AuthType Basic
AuthName "Restricted"
AuthUserFile ${t.value.htpasswdPath}
Require valid-user
</Files>

`),t.value.referrer&&t.value.hotlinkExtensions&&(d+=`RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^https?://(www.)?${t.value.referrer}/.*$ [NC]
RewriteRule \\.(${t.value.hotlinkExtensions.split(",").join("|")})$ ${t.value.nohotlinkImageHref}[R=302,L]

`),t.value.errorPages.forEach(({key:a,value:s})=>{!a||!s||(d+=`ErrorDocument ${a} ${s}
`)}),t.value.ipRules.forEach(({key:a,value:s})=>{!a||!s||(d+=`${a==="Block"?"Deny":"Allow"} from ${s}
`)}),t.value.blockBots&&(d+=`//Block bad bots
RewriteEngine On 
RewriteCond %{HTTP_USER_AGENT} ^BlackWidow [OR]
RewriteCond %{HTTP_USER_AGENT} ^Bot\\ mailto:craftbot@yahoo.com [OR]
RewriteCond %{HTTP_USER_AGENT} ^ChinaClaw [OR]
RewriteCond %{HTTP_USER_AGENT} ^Custo [OR]
RewriteCond %{HTTP_USER_AGENT} ^DISCo [OR]
RewriteCond %{HTTP_USER_AGENT} ^Download\\ Demon [OR]
RewriteCond %{HTTP_USER_AGENT} ^eCatch [OR]
RewriteCond %{HTTP_USER_AGENT} ^EirGrabber [OR]
RewriteCond %{HTTP_USER_AGENT} ^EmailSiphon [OR]
RewriteCond %{HTTP_USER_AGENT} ^EmailWolf [OR]
RewriteCond %{HTTP_USER_AGENT} ^Express\\ WebPictures [OR]
RewriteCond %{HTTP_USER_AGENT} ^ExtractorPro [OR]
RewriteCond %{HTTP_USER_AGENT} ^EyeNetIE [OR]
RewriteCond %{HTTP_USER_AGENT} ^FlashGet [OR]
RewriteCond %{HTTP_USER_AGENT} ^GetRight [OR]
RewriteCond %{HTTP_USER_AGENT} ^GetWeb! [OR]
RewriteCond %{HTTP_USER_AGENT} ^Go!Zilla [OR]
RewriteCond %{HTTP_USER_AGENT} ^Go-Ahead-Got-It [OR]
RewriteCond %{HTTP_USER_AGENT} ^GrabNet [OR]
RewriteCond %{HTTP_USER_AGENT} ^Grafula [OR]
RewriteCond %{HTTP_USER_AGENT} ^HMView [OR]
RewriteCond %{HTTP_USER_AGENT} HTTrack [NC,OR]
RewriteCond %{HTTP_USER_AGENT} ^Image\\ Stripper [OR]
RewriteCond %{HTTP_USER_AGENT} ^Image\\ Sucker [OR]
RewriteCond %{HTTP_USER_AGENT} Indy\\ Library [NC,OR]
RewriteCond %{HTTP_USER_AGENT} ^InterGET [OR]
RewriteCond %{HTTP_USER_AGENT} ^Internet\\ Ninja [OR]
RewriteCond %{HTTP_USER_AGENT} ^JetCar [OR]
RewriteCond %{HTTP_USER_AGENT} ^JOC\\ Web\\ Spider [OR]
RewriteCond %{HTTP_USER_AGENT} ^larbin [OR]
RewriteCond %{HTTP_USER_AGENT} ^LeechFTP [OR]
RewriteCond %{HTTP_USER_AGENT} ^Mass\\ Downloader [OR]
RewriteCond %{HTTP_USER_AGENT} ^MIDown\\ tool [OR]
RewriteCond %{HTTP_USER_AGENT} ^Mister\\ PiX [OR]
RewriteCond %{HTTP_USER_AGENT} ^Navroad [OR]
RewriteCond %{HTTP_USER_AGENT} ^NearSite [OR]
RewriteCond %{HTTP_USER_AGENT} ^NetAnts [OR]
RewriteCond %{HTTP_USER_AGENT} ^NetSpider [OR]
RewriteCond %{HTTP_USER_AGENT} ^Net\\ Vampire [OR]
RewriteCond %{HTTP_USER_AGENT} ^NetZIP [OR]
RewriteCond %{HTTP_USER_AGENT} ^Octopus [OR]
RewriteCond %{HTTP_USER_AGENT} ^Offline\\ Explorer [OR]
RewriteCond %{HTTP_USER_AGENT} ^Offline\\ Navigator [OR]
RewriteCond %{HTTP_USER_AGENT} ^PageGrabber [OR]
RewriteCond %{HTTP_USER_AGENT} ^Papa\\ Foto [OR]
RewriteCond %{HTTP_USER_AGENT} ^pavuk [OR]
RewriteCond %{HTTP_USER_AGENT} ^pcBrowser [OR]
RewriteCond %{HTTP_USER_AGENT} ^RealDownload [OR]
RewriteCond %{HTTP_USER_AGENT} ^ReGet [OR]
RewriteCond %{HTTP_USER_AGENT} ^SiteSnagger [OR]
RewriteCond %{HTTP_USER_AGENT} ^SmartDownload [OR]
RewriteCond %{HTTP_USER_AGENT} ^SuperBot [OR]
RewriteCond %{HTTP_USER_AGENT} ^SuperHTTP [OR]
RewriteCond %{HTTP_USER_AGENT} ^Surfbot [OR]
RewriteCond %{HTTP_USER_AGENT} ^tAkeOut [OR]
RewriteCond %{HTTP_USER_AGENT} ^Teleport\\ Pro [OR]
RewriteCond %{HTTP_USER_AGENT} ^VoidEYE [OR]
RewriteCond %{HTTP_USER_AGENT} ^Web\\ Image\\ Collector [OR]
RewriteCond %{HTTP_USER_AGENT} ^Web\\ Sucker [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebAuto [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebCopier [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebFetch [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebGo\\ IS [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebLeacher [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebReaper [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebSauger [OR]
RewriteCond %{HTTP_USER_AGENT} ^Website\\ eXtractor [OR]
RewriteCond %{HTTP_USER_AGENT} ^Website\\ Quester [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebStripper [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebWhacker [OR]
RewriteCond %{HTTP_USER_AGENT} ^WebZIP [OR]
RewriteCond %{HTTP_USER_AGENT} ^Wget [OR]
RewriteCond %{HTTP_USER_AGENT} ^Widow [OR]
RewriteCond %{HTTP_USER_AGENT} ^WWWOFFLE [OR]
RewriteCond %{HTTP_USER_AGENT} ^Xaldon\\ WebSpider [OR]
RewriteCond %{HTTP_USER_AGENT} ^Zeus
RewriteRule ^.* - [F,L]

`),t.value.defaultPage&&(d+=`DirectoryIndex ${t.value.defaultPage}

`),t.value.preventDirectoryListing&&(d+=`Options All -Indexes

`),t.value.preventViewingHtaccess&&(d+=`<Files .htaccess>
order allow,deny
deny from all
</Files>

`),d});function w(){return{key:"Allow",value:""}}return(d,a)=>{const s=_,i=y,R=x,u=$,v=k,p=E,c=W,m=E,b=_,g=I,N=f,P=D;return G(),A(P,{title:e(l)("tools.htaccess-generator.texts.title-htaccess-generator")},{default:n(()=>[o(g,{model:e(t),"label-placement":"left"},{default:n(()=>[o(R,{title:e(l)("tools.htaccess-generator.texts.title-rewrite-to-www"),"mb-1":""},{default:n(()=>[o(i,{label:e(l)("tools.htaccess-generator.texts.label-domain-name")},{default:n(()=>[o(s,{value:e(t).domainName,"onUpdate:value":a[0]||(a[0]=r=>e(t).domainName=r),placeholder:e(l)("tools.htaccess-generator.texts.placeholder-example-com")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-301-redirect-file-or-directory"),"mb-1":""},{default:n(()=>[o(u,{value:e(t).redirects,"onUpdate:value":a[1]||(a[1]=r=>e(t).redirects=r),preset:"pair","key-placeholder":e(l)("tools.htaccess-generator.texts.placeholder-old-path"),"value-placeholder":e(l)("tools.htaccess-generator.texts.placeholder-new-path")},null,8,["value","key-placeholder","value-placeholder"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-cache-settings"),"mb-1":""},{default:n(()=>[o(i,{label:e(l)("tools.htaccess-generator.texts.label-cache-extensions")},{default:n(()=>[o(s,{value:e(t).cacheExtensions,"onUpdate:value":a[2]||(a[2]=r=>e(t).cacheExtensions=r),placeholder:e(l)("tools.htaccess-generator.texts.placeholder-js-css-png")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-cache-duration")},{default:n(()=>[o(v,{value:e(t).cacheDuration,"onUpdate:value":a[3]||(a[3]=r=>e(t).cacheDuration=r),"mr-1":""},null,8,["value"]),o(p,{value:e(t).cacheDurationMultiple,"onUpdate:value":a[4]||(a[4]=r=>e(t).cacheDurationMultiple=r),options:[{label:e(l)("tools.htaccess-generator.texts.label-seconds"),value:"1"},{label:e(l)("tools.htaccess-generator.texts.label-minutes"),value:"60"},{label:e(l)("tools.htaccess-generator.texts.label-hours"),value:"3600"},{label:e(l)("tools.htaccess-generator.texts.label-days"),value:"86400"},{label:e(l)("tools.htaccess-generator.texts.label-weeks"),value:"36288000"},{label:e(l)("tools.htaccess-generator.texts.label-months"),value:"160704000"}]},null,8,["value","options"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-cache-type")},{default:n(()=>[o(p,{value:e(t).cacheType,"onUpdate:value":a[5]||(a[5]=r=>e(t).cacheType=r),options:[{label:e(l)("tools.htaccess-generator.texts.label-public"),value:"public"},{label:e(l)("tools.htaccess-generator.texts.label-private"),value:"private"}]},null,8,["value","options"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-must-revalidate")},{default:n(()=>[o(c,{value:e(t).mustRevalidate,"onUpdate:value":a[6]||(a[6]=r=>e(t).mustRevalidate=r)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-password-protection"),"mb-1":""},{default:n(()=>[o(i,{label:e(l)("tools.htaccess-generator.texts.label-path-to-protect")},{default:n(()=>[o(s,{value:e(t).protectedFile,"onUpdate:value":a[7]||(a[7]=r=>e(t).protectedFile=r),"label-position":"left",placeholder:e(l)("tools.htaccess-generator.texts.placeholder-path-to-protect")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-htpasswd-file-path")},{default:n(()=>[o(s,{value:e(t).htpasswdPath,"onUpdate:value":a[8]||(a[8]=r=>e(t).htpasswdPath=r),"label-position":"left",placeholder:e(l)("tools.htaccess-generator.texts.placeholder-htpasswd-file-path")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-prevent-hotlinking"),"mb-1":""},{default:n(()=>[o(i,{label:e(l)("tools.htaccess-generator.texts.label-referring-url")},{default:n(()=>[o(s,{value:e(t).referrer,"onUpdate:value":a[9]||(a[9]=r=>e(t).referrer=r),placeholder:e(l)("tools.htaccess-generator.texts.placeholder-the-domain-that-is-hotlinking-to-you")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-file-extension")},{default:n(()=>[o(s,{value:e(t).hotlinkExtensions,"onUpdate:value":a[10]||(a[10]=r=>e(t).hotlinkExtensions=r),placeholder:e(l)("tools.htaccess-generator.texts.placeholder-extensions")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-no-hotlinking-image")},{default:n(()=>[o(s,{value:e(t).nohotlinkImageHref,"onUpdate:value":a[11]||(a[11]=r=>e(t).nohotlinkImageHref=r),placeholder:e(l)("tools.htaccess-generator.texts.placeholder-href")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-custom-error-pages"),"mb-1":""},{default:n(()=>[o(u,{value:e(t).errorPages,"onUpdate:value":a[12]||(a[12]=r=>e(t).errorPages=r),preset:"pair","key-placeholder":e(l)("tools.htaccess-generator.texts.placeholder-error-code"),"value-placeholder":e(l)("tools.htaccess-generator.texts.placeholder-file-path")},null,8,["value","key-placeholder","value-placeholder"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-block-or-allow-ip-addresses"),"mb-1":""},{default:n(()=>[o(u,{value:e(t).ipRules,"onUpdate:value":a[13]||(a[13]=r=>e(t).ipRules=r),preset:"pair","on-create":w},{default:n(({value:r})=>[O("div",F,[o(m,{value:r.key,"onUpdate:value":T=>r.key=T,options:[{label:e(l)("tools.htaccess-generator.texts.label-allow"),value:"Allow"},{label:e(l)("tools.htaccess-generator.texts.label-block"),value:"Block"}],placeholder:e(l)("tools.htaccess-generator.texts.placeholder-select-authorization"),style:{width:"150px"},"mr-2":""},null,8,["value","onUpdate:value","options","placeholder"]),o(b,{value:r.value,"onUpdate:value":T=>r.value=T,placeholder:e(l)("tools.htaccess-generator.texts.placeholder-ip-address")},null,8,["value","onUpdate:value","placeholder"])])]),_:1},8,["value"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-directory-settings")},{default:n(()=>[o(i,{label:e(l)("tools.htaccess-generator.texts.label-default-directory-page")},{default:n(()=>[o(s,{value:e(t).defaultPage,"onUpdate:value":a[14]||(a[14]=r=>e(t).defaultPage=r),placeholder:e(l)("tools.htaccess-generator.texts.placeholder-default-directory-page")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-prevent-directory-listing")},{default:n(()=>[o(c,{value:e(t).preventDirectoryListing,"onUpdate:value":a[15]||(a[15]=r=>e(t).preventDirectoryListing=r)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["title"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-other-settings")},{default:n(()=>[o(i,{label:e(l)("tools.htaccess-generator.texts.label-block-bots")},{default:n(()=>[o(c,{value:e(t).blockBots,"onUpdate:value":a[16]||(a[16]=r=>e(t).blockBots=r)},null,8,["value"])]),_:1},8,["label"]),o(i,{label:e(l)("tools.htaccess-generator.texts.label-prevent-viewing-of-htaccess-file")},{default:n(()=>[o(c,{value:e(t).preventViewingHtaccess,"onUpdate:value":a[17]||(a[17]=r=>e(t).preventViewingHtaccess=r)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["title"])]),_:1},8,["model"]),o(R,{title:e(l)("tools.htaccess-generator.texts.title-generated-htaccess-file"),"mt-2":""},{default:n(()=>[o(N,{value:e(h)},null,8,["value"])]),_:1},8,["title"])]),_:1},8,["title"])}}});export{Re as default};
