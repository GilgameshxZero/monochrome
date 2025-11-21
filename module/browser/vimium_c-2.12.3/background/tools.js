"use strict"
;__filename="background/tools.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./run_commands","./open_urls","./tab_commands"],(e,t,n,l,r,o,i,a,s,u,c,f,d,_)=>{
function m(e){let t=e.tabId,l=n.a.get(t)
;if(l&&l.b&512&&s.fu(l,0),s.xn(),e.windowId!==n.we)return void r.Be.get(e.windowId,p);let o=performance.now()
;if(o-n.Vo>666){let e=n.G===1?Date.now():o;h.set(n.he,e)}n.Vo=o,n.he=t,u.tu.Ao()}function p(e){
if(!e||!e.focused)return r.g();let t=e.id;t!==n.we&&(n.jn=n.we,n.we=t),r.Me.query({windowId:t,active:!0},e=>{
e&&e.length>0&&t===n.we&&g(e)})}function g(e){if(!e||e.length===0)return r.g();let l=e[0],o=l.windowId,i=n.we
;o!==i&&(n.we=o,n.jn=i),n.de=l.incognito?2:0,t.He._n(),m({tabId:l.id,windowId:o})}Object.defineProperty(t,"__esModule",{
value:!0}),t.He=t.ce=t.ve=t.ue=void 0,t.ue={Uo:(e,t)=>"vimiumContent|"+e+(t?"|"+t:""),Ro(e,t){let o=r.t.contentSettings
;try{o&&o.images.get({primaryUrl:"https://127.0.0.1/"},r.g)}catch(e){o=null}
return o?o[e]&&!/^[A-Z]/.test(e)&&o[e].get?!(!t.startsWith("read:")&&l.an.test(t)&&!t.startsWith(n.Ze.U)||(s.complainLimits(c.A("changeItsCS")),
0)):(s.showHUD(c.A("unknownCS",[e])),!0):(s.showHUD("Has not permitted to set contentSettings"),setTimeout(()=>{d.Je({
u:n.Ze.Qe+"#optionalPermissions"})},800),!0)},Wo(e,t){if(e.startsWith("file:")){let t=1
;return t?(s.complainLimits(t===1?c.A("setFileCS",[56]):c.A("setFolderCS")),[]):[e.split(/[?#]/,1)[0]]}
if(e.startsWith("ftp"))return s.complainLimits(c.A("setFTPCS")),[]
;let n,r=e.match(/^([^:]+:\/\/)([^\/]+)/),i=o.Ei.exec(r[2]),a=i[3]+(i[4]||"");if(n=[(e=r[1])+a+"/*"],
t<2||l.kn(i[3],0))return n;i=null;let[u,f]=l.br(a),d=Math.min(u.length-f,t-1)
;for(let t=0;t<d;t++)a=a.slice(u[t].length+1),n.push(e+a+"/*");return n.push(e+"*."+a+"/*"),
d===u.length-f&&e==="http://"&&n.push("https://*."+a+"/*"),n},Jo(e){let t;for(let{s:{Jl:n}}of e.J){let e=new URL(n).host
;if(t&&t!==e)return!0;t=e}return!1},Qo(e,n){let l=r.t.contentSettings[e];n==null?(l.clear({scope:"regular"}),l.clear({
scope:"incognito_session_only"},r.g),a.lu(t.ue.Uo(e),null)):l.clear({scope:n?"incognito_session_only":"regular"})},
ae(e,l){let r=e.type?""+e.type:"images";return!t.ue.Ro(r,"http://a.cc/")&&(t.ue.Qo(r,l?l.s.se:n.de===2),
s.showHUDEx(l,"csCleared",0,[[r[0].toUpperCase()+r.slice(1)]]),!0)},Se(e,n,l,r){let o=e.type?""+e.type:"images",i=l[0]
;e.incognito?t.ue.Ko(n,o,i,r):t.ue.Zo(o,n,i,e.action==="reopen",r)},Zo(e,l,i,s,u){let c=o.di(i.url)
;t.ue.Ro(e,c)?u(0):r.t.contentSettings[e].get({primaryUrl:c,incognito:i.incognito},o=>{t.ue.Eo(e,c,l,{
scope:i.incognito?"incognito_session_only":"regular",setting:o&&o.setting==="allow"?"block":"allow"},l=>{
if(l)return void u(0);if(!i.incognito){let n=t.ue.Uo(e);a.jo(n)!==1&&a.lu(n,1)}
let o,c=!r.Ie()||(o=n.a.get(i.id))&&o.J.length>1&&t.ue.Jo(o)
;i.incognito||s?_.Pe(i):i.index>0?_.Pe(i,c?0:2):r.getCurWnd(!0,e=>(e&&e.type==="normal"?_.Pe(i,c?0:e.tabs.length>1?2:1):r.Me.reload(f.getRunNextCmdBy(0)),
r.g()))})})},Ko(e,l,i,a){if(n.Ze.ls)return s.complainLimits(c.A("setIncogCS")),void a(0);let u=o.di(i.url)
;t.ue.Ro(l,u)?a(0):r.t.contentSettings[l].get({primaryUrl:u,incognito:!0},n=>r.g()?(r.t.contentSettings[l].get({
primaryUrl:u},n=>{n&&n.setting==="allow"?a(1):r.Be.create({type:"normal",incognito:!0,focused:!1,url:"about:blank"},n=>{
let o=n.tabs[0].id;return t.ue.Xo(e,l,i,u,n.id,!0,()=>{r.Me.remove(o)})})
}),r.g()):n&&n.setting==="allow"&&i.incognito?t.ue.Yo(i):void r.Be.getAll(r=>{
if(!(r=r.filter(e=>e.incognito&&e.type==="normal")).length)return void console.log("%cContentSettings.ensure","color:red","get incognito content settings",n," but can not find an incognito window.")
;let o=d.preferLastWnd(r);if(n&&n.setting==="allow")return t.ue.Yo(i,o.id)
;let a=i.windowId,s=i.incognito&&r.some(e=>e.id===a);return t.ue.Xo(e,l,i,u,s?void 0:o.id)}))},Xo(e,n,l,o,i,a,s){
let u=t.ue.Wi.bind(null,l,i,s);return t.ue.Eo(n,o,e,{scope:"incognito_session_only",setting:"allow"
},a&&i!==l.windowId?e=>{if(e)return u(e);r.Be.get(l.windowId,u)}:u)},Eo(e,n,o,i,a){
let s,u=!1,c=r.t.contentSettings[e],f=()=>{let e=r.g();return e&&console.log("[%o]",Date.now(),e),u||(--s,u=!!e,
(u||s===0)&&setTimeout(a,0,u)),e},d=t.ue.Wo(n,o|0);if(s=d.length,s<=0)return a(!0);l.Sn(i)
;for(let e of d)c.set(Object.assign({primaryPattern:e},i),f)},Wi(e,n,l,o){o!==!0&&t.ue.Yo(e,n),l&&l(),
o!==!0?n&&r.Be.update(n,{focused:!0,state:o?o.state:void 0}):f.runNextCmd(0)},Yo(e,t){e.active=!0,
typeof t=="number"&&e.windowId!==t&&(e.index=void 0,e.windowId=t),_.Pe(e)}},t.ve={ho({l:e,n:l,s:r,u:o},i,s){
if(e&&r[0]===0&&r[1]===0)if(r.length===2){let e=o.indexOf("#");e>0&&e<o.length-1&&(r=[0,0,o.slice(e)])
}else(r[2]||"").length<2&&(r=[0,0]);s=s>=0?s:-1
;let u=i?r:r.length!==2||r[0]||r[1]?r.length!==2||r[1]>524287||r[0]>8191?r:Math.max(0,r[0])|Math.max(0,r[1])<<13:0,c=t.ve.Qi(l,e?o:""),f=e?u:u?{
s:u,t:s,u:o.slice(0,8192)}:{t:s,u:o.slice(0,8192)};i?(n.Co||(y.Bi(),n.Co=new Map)).set(c,f):a.lu(c,f)},Ji(e,o,i,u){
let{n:c}=o,_=t.ve.Qi(c,o.l?o.u:""),m=i.s.se&&(n.Co===null||n.Co===void 0?void 0:n.Co.get(_))||a.jo(_),p=typeof m=="number"?[m&8191,m>>>13]:typeof m=="string"?JSON.parse(m):m?m instanceof Array?m.slice(0):{
url:m.u,tabId:m.t,scroll:typeof m.s!="number"?m.s||[0,0]:[m.s&8191,m.s>>>13]}:m;if(typeof m=="string"&&t.ve.ho({l:o.l,
n:c,s:p instanceof Array?p:p.scroll||[0,0],u:o.u},!1,i.s.m),!p&&o.s)try{let e=JSON.parse(o.s);if(e&&typeof e=="object"){
let t=+e.scrollX,n=+e.scrollY;t>=0&&n>=0&&(p=[t|0,n|0,""+(e.hash||"")])}}catch(e){}
if(!p)return s.showHUDEx(i,"noMark",0,[[o.l?"Local":"Global"],c]),void f.runNextCmdBy(0,e)
;let g=f.parseFallbackOptions(e);if(p instanceof Array)return g&&(g.$else=null),void t.ve.Xi(i.s.m,null,i,!0,c,p,0,g,u)
;g&&(g.$else=g.$then);let y=p.tabId,h=e.wait,w=e.prefix,b=p.url,v={n:c,a:!!e.parent&&!w,p:!0,
q:d.parseOpenPageUrlOptions(e),s:p.scroll||[0,0],t:y,u:b,f:g,w:typeof h=="number"?Math.min(Math.max(0,h||0),2e3):h}
;v.p=!!w||w==null&&!v.a&&v.s[1]===0&&v.s[0]===0&&!!l.qr(b)&&(!b.includes("#")||o.u.startsWith(b)),
t.ve.Yi(o.u,b,v)?t.ve.Xi(i.s.m,null,i,!1,c,v.s,0,g,u):y>=0&&n.a.has(y)?r.tabsGet(y,t.ve.la.bind(0,v,u)):d.Je(v)},
Yi(e,t,n){let l=e.split("#",1)[0],r=t.split("#",1)[0]
;return l===r||!!n.p&&l.startsWith(r.endsWith("/")||r.includes("?")?r:r+"/")||!!n.a&&r.startsWith(l.endsWith("/")||l.includes("?")?l:l+"/")
},la(e,l,o){let i=r.getTabUrl(o);if(t.ve.Yi(i,e.u,e)){let i=o.id===n.he;i||r.selectTab(o.id,r.selectWndIfNeed),
t.ve.Mi(e,o.id,i?l:0,!0)}else d.Je(e)},
Qi:(e,t)=>t?"vimiumMark|"+i.Ri(t.slice(0,499).split("#",1)[0])+(t.length>1?"|"+e:""):"vimiumGlobalMark|"+e,
Xi(e,t,l,o,i,a,s,u,d){if(l=!t||!t.R||t.R.s.b&512?l:t.R){let e={g:!o,s:a,t:"",f:u||{},w:s||0}
;Promise.resolve(i&&c.Xl("mNormalMarkTask",[["mJumpTo"],[o?"Local":"Global"],i])).then(t=>{e.t=t||"",d?(n.Re=d,
n.Vi(l,19,e,1,1)):f.portSendFgCmd(l,19,!0,e,1)})}else r.p(e,0,null,(e,t)=>{window.scrollTo(e,t)
},[a[0],a[1]],u?()=>(f.runNextCmdBy(1,u),r.g()):null)},Mi(e,l,r,o){let i=n.a.get(l),a=e.w;s.si(i).then(()=>{
t.ve.Xi(l,i,null,!1,e.n,e.s,o||a===!1?0:typeof a!="number"?200:a,e.f,r)}),e.t!==l&&e.n&&t.ve.ho({l:!1,n:e.n,s:e.s,u:e.u
},n.de===2,l)},pe(e){let l=t.ve.Qi("",e),r=0;n.su.forEach((e,t)=>{t.startsWith(l)&&(r++,a.lu(t,null))});let o=n.Co
;return o&&o.forEach((e,t)=>{t.startsWith(l)&&(r++,o.delete(t))
}),s.showHUDEx(n.O,"markRemoved",0,[r,[e==="#"?"allLocal":e?"Local":"Global"],[r!==1?"have":"has"]]),r}},t.ce={ia:null,
Zt:0,sa(){let e=n.su.get("findModeRawQueryList")||"";t.ce.ia=e?e.split("\n"):[],t.ce.sa=null},ln(e,r,o){let i=t.ce
;i.sa&&i.sa();let s=e?n.Po||(y.Bi(),n.Po=i.ia.slice(0)):i.ia;if(!r)return(s[s.length-(o||1)]||"").replace(/\r/g,"\n")
;if(r=r.replace(/\n/g,"\r"),e)return void i.ua(r,s,!0);r=l.fl(r,0,99);let u=i.ua(r,s);u&&a.lu("findModeRawQueryList",u),
n.Po&&i.ua(r,n.Po,!0)},ua(e,t,n){let l=t.lastIndexOf(e);if(l>=0){if(l===t.length-1)return;t.splice(l,1)
}else t.length>=50&&t.shift();if(t.push(e),!n)return t.join("\n")},fe(e){e?n.Po&&(n.Po=[]):(t.ce.sa=null,t.ce.ia=[],
a.lu("findModeRawQueryList",""))}};let y={ca:!1,Zt:0,Bi(){y.ca||(r.Be.onRemoved.addListener(y.fa),y.ca=!0)},fa(){
y.ca&&(y.Zt=y.Zt||setTimeout(y.da,34))},da(){y.Zt=0;for(let e of n.a.values())if(e.d.s.se)return;r.Be.getAll(e=>{
e.some(e=>e.incognito)||y._a()})},_a(){n.Po=null,n.Co=null,r.Be.onRemoved.removeListener(y.fa),y.ca=!1}},h=n.ze;t.He={
Ae(e,t){return h.get(t.id)-h.get(e.id)},_n:n.u};let w=0;r.Me.onActivated.addListener(m),
r.Be.onFocusChanged.addListener(e=>{e!==-1&&r.Me.query({windowId:e,active:!0},g)}),r.Me.onRemoved.addListener(e=>{
let t=n.a.delete(e);h.delete(e),!(n.Tn>109)&&e===n.us&&t&&s.tryToKeepAliveIfNeeded_mv3_non_ff(e)}),a.vl.then(()=>{
r.getCurTab(e=>{n.Vo=performance.now();let t=e&&e[0];if(!t)return r.g();n.he=t.id,n.we=t.windowId,n.de=t.incognito?2:0
;let o=r.t.storage.session;o&&o.get("recency").then(e=>{let t=e&&e.recency;if(t){let e=l.yr()-t.b
;for(let[n,l]of t.e)h.set(n,l-e)}o.remove("recency"),n._u=()=>{if(w==n.Vo)return;w=n.Vo;let e={
e:Array.from(h.entries()),b:l.yr()};o.set({recency:e})}},n.u)});let e=[]
;for(let l of["images","plugins","javascript","cookies"])n.su.get(t.ue.Uo(l))!=null&&e.push(l)
;e.length&&r.t.contentSettings&&setTimeout(()=>{for(let n of e)t.ue.Qo(n)},100)}),n.pl.vomnibarOptions=e=>{
let t=a.E.vomnibarOptions,l=n.Ke,r=!0,{actions:o,maxMatches:i,queryInterval:s,styles:c,sizes:f}=t
;if(e!==t&&e&&typeof e=="object"){
let t=Math.max(3,Math.min(e.maxMatches|0||i,25)),n=e.actions,l=n?n.replace(/[,\s]+/g," ").trim():"",a=+e.queryInterval,u=((e.sizes||"")+"").trim(),d=e.styles,_=d instanceof Array?d:((d||"")+"").trim(),m=Math.max(0,Math.min(a>=0?a:s,1200))
;r=i===t&&s===m&&u===f&&o===l&&c===_,r||(o=l,i=t,s=m,f=u,c=_),e.actions=l,e.maxMatches=t,e.queryInterval=m,e.sizes=u,
e.styles=_}let d=c instanceof Array?c.join(" "):c;n.z.vomnibarOptions=r?t:e,l.n=i,l.i=s,l.s=f,l.t=d,u.tu.Kr(0,1),
u.tu.Kr(1,1),a.De({n:i,i:s,s:f,t:l.t}),n.Wn.actions=o.split(" ")
;let _=f.split(","),m=Math.max(24,Math.min(Math.max(24,Math.min(_.length&&+_[0]||77,320))+(_.length>1&&+_[1]||3),320))
;n.Wn.Qn=i*Math.max(14,Math.min(_.length>2&&+_[2]||44,120))+m}});