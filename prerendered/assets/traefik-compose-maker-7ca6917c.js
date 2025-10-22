import{_}from"./TextareaCopyable-4c7847d0.js";import{d as h,a4 as N,r as S,i as $,o as v,j as k,w as p,k as r,l as e,O as y,ak as U,ah as w}from"./index-1de3a68b.js";import{_ as H}from"./FormItem-be347854.js";import{_ as P}from"./Switch-f888395d.js";import{_ as B}from"./Space-8a7671c5.js";import{_ as E}from"./Card-97d38412.js";import{_ as D}from"./Form-b9c860cb.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";import"./context-589fe33b.js";import"./get-slot-1efb97e5.js";function R(a){return a.proxiedServiceName===""||a.proxiedServiceImage===""||a.proxiedServiceHostName===""?"":`
version: "3.3"
services:
  traefik:
    image: "traefik:v2.11"
    container_name: "traefik"
    command:
      ${a.logDebug?'- "--log.level=DEBUG"':""}
      - "--api=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.${a.certResolverName}.acme.httpchallenge=true"
      - "--certificatesresolvers.${a.certResolverName}.acme.httpchallenge.entrypoint=web"
      ${a.letEncryptTest?`- "--certificatesresolvers.${a.certResolverName}.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"`:""}
      - "--certificatesresolvers.${a.certResolverName}.acme.email=${a.postmasterEmail}"
      - "--certificatesresolvers.${a.certResolverName}.acme.storage=/letsencrypt/acme.json"
    labels:
      ${a.dashboard?`
      - "traefik.http.routers.dashboard.rule=Host(\`${a.traefikDashboardHostName}\`) && (PathPrefix('/api') || PathPrefix('/dashboard'))"
      - "traefik.http.routers.dashboard.service=api@internal"
      - "traefik.http.routers.dashboard.middlewares=auth"
      - "traefik.http.middlewares.auth.basicauth.users=${a.dashboardUserAndPass}"
      `:""}
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  ${a.proxiedServiceName}:
    image: ${a.proxiedServiceImage}
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.${a.proxiedServiceName}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${a.proxiedServiceName}-redirect.redirectscheme.permanent=true"
      ${a.loadBalance?`- "traefik.http.services.${a.proxiedServiceName}.loadbalancer.server.port=${a.proxiedServiceLoadBalancePort}"`:""}
      - "traefik.http.routers.${a.proxiedServiceName}.rule=Host(\`${a.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${a.proxiedServiceName}.entrypoints=web"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.rule=Host(\`${a.proxiedServiceHostName}\`)"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.entrypoints=websecure"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.tls=true"
      - "traefik.http.routers.${a.proxiedServiceName}-secure.tls.certresolver=${a.certResolverName}"
      `}const W=h({__name:"traefik-compose-maker",setup(a){const{t:s}=N(),t=S({logDebug:!1,certResolverName:"",postmasterEmail:"",letEncryptTest:!1,dashboard:!1,traefikDashboardHostName:"",dashboardUserAndPass:"",proxiedServiceName:"",proxiedServiceImage:"",proxiedServiceLoadBalancePort:80,proxiedServiceHostName:"",loadBalance:!1}),n=$(()=>R(t.value));return(g,l)=>{const d=U,m=H,b=w,i=P,u=B,f=_,c=E,x=D;return v(),k(c,{title:e(s)("tools.traefik-compose-maker.texts.title-traefik-docker-compose-generator")},{default:p(()=>[r(x,{model:e(t),"label-placement":"left"},{default:p(()=>[r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-name")},{default:p(()=>[r(d,{value:e(t).proxiedServiceName,"onUpdate:value":l[0]||(l[0]=o=>e(t).proxiedServiceName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-service-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-image")},{default:p(()=>[r(d,{value:e(t).proxiedServiceImage,"onUpdate:value":l[1]||(l[1]=o=>e(t).proxiedServiceImage=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-image-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-host-name")},{default:p(()=>[r(d,{value:e(t).proxiedServiceHostName,"onUpdate:value":l[2]||(l[2]=o=>e(t).proxiedServiceHostName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-service-hostname")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(u,null,{default:p(()=>[r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-proxied-service-load-balancer-port")},{default:p(()=>[r(b,{value:e(t).proxiedServiceLoadBalancePort,"onUpdate:value":l[3]||(l[3]=o=>e(t).proxiedServiceLoadBalancePort=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-port")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-enable-load-balancer")},{default:p(()=>[r(i,{value:e(t).loadBalance,"onUpdate:value":l[4]||(l[4]=o=>e(t).loadBalance=o)},null,8,["value"])]),_:1},8,["label"])]),_:1}),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-cert-resolver-name")},{default:p(()=>[r(d,{value:e(t).certResolverName,"onUpdate:value":l[5]||(l[5]=o=>e(t).certResolverName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-cert-resolver-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-postmaster-email")},{default:p(()=>[r(d,{value:e(t).postmasterEmail,"onUpdate:value":l[6]||(l[6]=o=>e(t).postmasterEmail=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-email")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(u,null,{default:p(()=>[r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-let-s-encrypt-test-mode")},{default:p(()=>[r(i,{value:e(t).letEncryptTest,"onUpdate:value":l[7]||(l[7]=o=>e(t).letEncryptTest=o)},null,8,["value"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-enable-dashboard")},{default:p(()=>[r(i,{value:e(t).dashboard,"onUpdate:value":l[8]||(l[8]=o=>e(t).dashboard=o)},null,8,["value"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-log-level-debug")},{default:p(()=>[r(i,{value:e(t).logDebug,"onUpdate:value":l[9]||(l[9]=o=>e(t).logDebug=o)},null,8,["value"])]),_:1},8,["label"])]),_:1}),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-traefik-dashboard-host-name")},{default:p(()=>[r(d,{value:e(t).traefikDashboardHostName,"onUpdate:value":l[10]||(l[10]=o=>e(t).traefikDashboardHostName=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-enter-dashboard-host-name")},null,8,["value","placeholder"])]),_:1},8,["label"]),r(m,{label:e(s)("tools.traefik-compose-maker.texts.label-dashboard-user-and-password")},{default:p(()=>[r(d,{value:e(t).dashboardUserAndPass,"onUpdate:value":l[11]||(l[11]=o=>e(t).dashboardUserAndPass=o),placeholder:e(s)("tools.traefik-compose-maker.texts.placeholder-user-password")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(n)?(v(),k(c,{key:0,title:e(s)("tools.traefik-compose-maker.texts.title-generated-compose-entry")},{default:p(()=>[r(f,{value:e(n),language:"yaml"},null,8,["value"])]),_:1},8,["title"])):y("",!0)]),_:1},8,["model"])]),_:1},8,["title"])}}});export{W as default};
