"use strict";__filename="background/browser.js",define(["require","exports","./store","./utils"],(e,l,t,r)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.import2=l.s=l.p=l.v=l.w=l.removeTempTab=l.downloadFile=l.makeTempWindow_r=l.makeWindow=l.openMultiTabs=l.tabsCreate=l.selectWndIfNeed=l.selectWnd=l.selectTab=l.Oe=l.h=l.k=l.je=l.xe=l.ye=l.H=l.selectIndexFrom=l.selectFrom=l.getCurWnd=l.$e=l.le=l.getCurTabs=l.getCurTab=l.isTabMuted=l.getTabUrl=l.getGroupId=l.tabsUpdate=l.tabsGet=l.g=l.N=l.Ie=l.Be=l.Me=l.t=void 0,
l.t=chrome,l.Me=l.t.tabs,l.Be=l.t.windows,l.Ie=()=>l.t.sessions,l.N=()=>l.t.webNavigation,l.g=()=>l.t.runtime.lastError,
l.tabsGet=l.Me.get,l.tabsUpdate=l.Me.update,l.getGroupId=e=>{let l=e.groupId;return l!==-1&&l!=null?l:null},
l.getTabUrl=e=>e.url||e.pendingUrl||"",l.isTabMuted=e=>e.mutedInfo.muted,l.getCurTab=l.Me.query.bind(null,{active:!0,
lastFocusedWindow:!0}),l.getCurTabs=l.Me.query.bind(null,{lastFocusedWindow:!0}),l.le=l.getCurTabs,l.$e=()=>!0,
l.getCurWnd=(e,r)=>{let n={populate:e};return t.we>=0?l.Be.get(t.we,n,r):l.Be.getCurrent(n,r)},
l.selectFrom=e=>e[l.selectIndexFrom(e)],l.selectIndexFrom=e=>{for(let l=e.length;0<--l;)if(e[l].active)return l;return 0
},l.H=e=>/^(edge-)?extension:/.test(e)?t.Ze.U+"-"+e.slice(e.indexOf("ext")):e,l.ye=function(e){
let t=[].slice.call(arguments,1),{Ge:n,Le:o}=r.Xe();return t.push(e=>{let t=l.g();return o(t?void 0:e!=null?e:null),t}),
e.apply(void 0,t),n},l.xe=e=>e!==t.u?()=>{let t=l.g();return e(!t),t}:l.g,l.je=function(e){
let l=[].slice.call(arguments,1);return new Promise(t=>{l.push(t),e.apply(0,l)})};let n=(e,l)=>{let r=t.Ye.get(e)
;return r===1||r===2&&!(!t.el&&!l)};l.h=e=>{l.k=e},l.Oe=(e,t)=>{let r=e=>{let l=t;l&&(t=null,e&&clearTimeout(n),l&&l(e))
};if(t===l.g)return void l.Me.remove(e,t);let n=setTimeout(r,1500,!1);l.Me.remove(e,()=>{let e=l.g();return r(!e),e})},
l.selectTab=(e,t)=>{l.tabsUpdate(e,{active:!0},t)},l.selectWnd=e=>(e&&l.Be.update(e.windowId,{focused:!0}),l.g()),
l.selectWndIfNeed=e=>(e&&e.windowId!==t.we&&l.selectWnd(e),l.g()),l.tabsCreate=(e,r,o)=>{let{url:u}=e
;return u?n(u,t.de===2)&&delete e.url:(u=t.newTabUrl_f,
t.de===2&&(o===-1?u.includes("pages/blank.html")&&u.startsWith(t.ll):!o&&u.startsWith(location.protocol))||n(u,t.de===2)||(e.url=u),
e.url||delete e.url),l.Me.create(e,r)},l.openMultiTabs=(e,t,r,n,o,u,i)=>{let d;o=o!==!1,d=u!=null?l.getGroupId(u):null,
o||d==null||delete e.index,d=o&&d!=null&&l.Me.group?d:void 0,l.tabsCreate(e,r=>{if(l.g())return i&&i(),l.g()
;e.index=r.index,e.windowId=r.windowId,d!=null&&l.Me.group({tabIds:r.id,groupId:d}),i&&i(r),e.active=!1
;let o=e.index!=null,u=n?n.length:1,s=d!=null?e=>(e&&l.Me.group({tabIds:e.id,groupId:d}),l.g()):l.g
;n.length>1&&(n[0]=e.url);for(let r=0;r<t;r++)for(let t=r>0?0:1;t<u;t++)n.length>1&&(e.url=n[t]),o&&++e.index,
l.Me.create(e,s)},r)},l.makeWindow=(e,r,o)=>{let u=e.focused!==!1
;(r=r?r==="minimized"===u||e.type==="popup"||r==="normal"||r==="docked"?"":r:"")&&!r.includes("fullscreen")&&(e.state=r,
r=""),e.focused=!0;let i=e.url
;i||e.tabId!=null||(i=e.url=t.newTabUrl_f),typeof i=="string"&&n(i,e.incognito)&&delete e.url,
l.Be.create(e,r||!u||o?e=>{if(o&&o(e),!r&&u||!e)return l.g();let t=u?{}:{focused:!1};r&&(t.state=r),l.Be.update(e.id,t)
}:l.g)},l.makeTempWindow_r=(e,t,r)=>{l.Be.create({type:"normal",focused:!1,incognito:t,state:"minimized",tabId:e},r)},
l.downloadFile=(e,n)=>e.startsWith("data:")?t.tl(4,{u:e,t:n||""},null).then(e=>!!e):l.ye(l.t.permissions.contains,{
permissions:["downloads"]}).then(t=>{if(!t)return!1;let o={url:e};if(n){let l=/\.[a-z\d]{1,4}(?=$|[?&])/i
;if(n=(n=(n=r.rl(n))[0]==="#"?n.slice(1):n).replace(/[\r\n]+/g," ").replace(/[/\\?%*:|"<>_]+/g,"_"),!l.test(n)){
let t=l.exec(e);n+=t?t[0]:e.includes(".")?"":".bin"}o.filename=n}return l.ye(l.t.downloads.download,o).then(()=>!0)}),
l.removeTempTab=e=>{l.Me.remove(e,l.g)
},l.w=e=>(e=e.slice(0,99).toLowerCase(),t.Ye.get(e)!==1&&(e.startsWith("about:")?e!=="about:blank":e.startsWith("chrome:")?!e.startsWith("chrome://downloads"):e.startsWith(t.Ze.U)&&!(typeof t.Ze.nl!="string"?t.Ze.nl.test(e):e.startsWith(t.Ze.nl))||t.el&&/^(edge|extension):/.test(e)&&!e.startsWith("edge://downloads"))),
l.v=(e,t)=>{
let r=l.t.permissions,n=Promise.all(e.map(e=>e&&l.ye(l.t.permissions.contains,e))),o=e.map(e=>e&&(e.permissions||e.origins)[0])
;n.then(e=>{let l=!1,n=!1,u=(u,s)=>{let a=!s;if(s){let l=s.permissions;for(let t of l||[]){let l=o.indexOf(t)
;l>=0&&(e[l]=u,a=!0)}for(let t of(!l||l.length<=0)&&s.origins||[])if(t!=="chrome://*/*"){let l=o.indexOf(t)
;l>=0&&(e[l]=u,a=!0)}else for(let l=0;l<o.length;l++)(o[l]||"").startsWith("chrome://")&&(e[l]=u,a=!0)}
a&&(t(e,!0)===!1&&(l=n=!1),l!==e.includes(!1)&&r.onAdded[(l=!l)?"addListener":"removeListener"](i),
n!==e.includes(!0)&&r.onRemoved[(n=!n)?"addListener":"removeListener"](d))},i=u.bind(null,!0),d=u.bind(null,!1)
;e.includes(!1)||e.includes(!0)?u(!0):t(e,!1)})},l.p=(e,t,r,n,o,u)=>{l.t.scripting.executeScript({files:n?void 0:r,
func:n,args:o,target:t>=0?{tabId:e,frameIds:[t]}:{tabId:e,allFrames:!0},injectImmediately:!0},u||l.g)},l.s=e=>{
let r=t.ll.length-1;l.p(e,-1,t.Ze.ol.slice(0,-1).map(e=>e.slice(r)))
},l.import2=e=>Promise.resolve(__moduleMap[e.split("/").slice(-1)[0].replace(".js","")]),t.ul<6&&(t.il=new Promise(e=>{
let t=l.t.runtime.onInstalled,r=l=>{let n=r;n&&(r=null,e(l),t.removeListener(n))};t.addListener(r),
setTimeout(r,6e3,null)}))});