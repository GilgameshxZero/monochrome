"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./tools","./open_urls","./frame_commands","./tab_commands"],function(e,l,t,r,n,i,o,u,f,s,a,d,m,v,p,c,b,g,y){
let N;Object.defineProperty(l,"__esModule",{value:!0}),t.hn=[(e,l)=>{let r=e.handler
;r&&typeof r=="string"&&(r==="focus"?(l.s.b&4||(l.s.b|=4,l.postMessage({N:8
})),t.hn[12]({},l)):r==="command"?v.executeExternalCmd(e,null,l):r==="tip"&&(t.O=f.indexFrame(l.s.m,0)||l,
f.showHUD(e.tip||"Error: Lack .tip")))},()=>0,(e,l)=>{let r=e.k,n=u.Ni;if(!(r>=0&&r<n.length))return t.O=l,
f.complainLimits(d.A("notModify",[r]));let i=n[r],o=t.Di;t.z[i]!==e.v&&(o?o.then(()=>{u.ho(i,e.v)}):u.ho(i,e.v))
},(e,l)=>{let t=typeof e=="object";return c.ce.ln(l.s.se,t?e.q:"",t?1:e)},(e,l)=>{let t=o.Ne(e);if(e.i==null)return t
;l.postMessage({N:44,i:e.i,s:t})},(e,l)=>{let i=e.u,u=e.e,s=o.qi(e);r.Gl(),e.e=s,s.p==null?(t.O=l,
f.showHUD(s.u)):u||i!==s.u?!l||s.u.slice(0,7).toLowerCase()==="file://"&&i.slice(0,7).toLowerCase()!=="file://"?n.tabsUpdate({
url:s.u}):v.sendFgCmd(18,!1,{r:1,u:s.u}):(t.O=l,f.showHUD("Here is just root"),e.e={p:null,u:"(just root)"})},(e,l)=>{
let r,n=o.Ne(e);if(!n||!n.k)return t.O=l,f.showHUD(d.A("noEngineFound")),void(e.n&&v.runNextCmdBy(0,e.n))
;let i=e.o||b.parseOpenPageUrlOptions(e.n),u={}
;r=e.t.trim()&&t.S(e.t.trim(),524288,i.s,u).trim()||(e.c?t.Vl(i.s,0,u={}):""),Promise.resolve(r).then(r=>{var o
;let s=r===null?"It's not allowed to read clipboard":(r=r.trim())?"":d.A("noSelOrCopied");if(s)return t.O=l,
f.showHUD(s),void(e.n&&v.runNextCmdBy(0,e.n));i.k=(o=u.F)!==null&&o!==void 0?o:i.k==null?n.k:i.k,t.hn[8]({u:r,o:i,r:0,
n:v.parseFallbackOptions(e.n)||{}},l)})},(e,l)=>{let r=e.s,i=e.a!==0,o=e.a===2,u=t.we;if(t.O=f.findCPort(l),
typeof r=="number")return void n.selectTab(r,e=>(n.g()?f.showHUD(d.A("noTabItem")):n.selectWnd(e),n.g()))
;if(!n.Ie())return void f.complainNoSession();let s=l&&l.s.m>=0?l.s.m:t.he>=0?t.he:null,a=i?null:s
;n.Ie().restore(r[1],e=>{let l=n.g();return l?f.showHUD(d.A("noSessionItem")):y.Te(u,e,a).then(e=>{
o&&s&&e&&e.windowId!==u&&n.tabsGet(s,l=>{n.Me.move(e.id,{windowId:u,index:l?l.index+1:-1},n.g),n.tabsUpdate(e.id,{
active:!0})})}),l}),a&&n.selectTab(a,n.g)},b.openUrlReq,(e,l)=>{let r,n=l.s.m,i=t.a.get(n)
;if(!i)return void(t.r&&t.o(n,l.s.f));let o=i.d;l!==o&&(i.d=l,t.r&&(r=l.s.f)!==o.s.f&&t.o(n,r))},(e,l)=>{let r=l
;if(!r&&(r=f.indexFrame(e.tabId,e.frameId),!r)){let l=t.a.get(e.tabId);return void(l&&l.b&512&&(l.b|=4096))}
let{s:n}=r,i=n.Jl,o=t.a.get(n.m),u=n.Jl=l?e.u:e.url;if(o&&o.rs)return;let a=s.ss?s.as(u,n):null,d=a===null?0:a?1:2
;if(n.f!==d)n.f=d,t.r&&o.d===r&&t.o(n.m,d);else if(!a||a===s.as(i,n))return;r.postMessage({N:1,p:a,f:0})},(e,l)=>{
let r,n=e.t||0
;t.O=l,t.x=n||t.x>0?1:-1,t.Re=e.k,v.replaceCmdOptions(e.f||{}),n!==2?n===1?g.parentFrame():g.nextFrame():(r=f.An(l))?g.focusFrame(r.d,r.J.length<=2,e.o?1:2):f.safePost(l,{
N:45,l:t.Re})},(e,l)=>{let t=f.An(l);if(!t)return;if(l.s.b|=4,t.b|=4,t.J.length<2)return;let r={N:8};for(let e of t.J){
let l=e.s.b;e.s.b|=4,l&4||e.postMessage(r)}},(e,l,r)=>{let i=l.s.m,o=f.An(l),u=e.u;if(!o||o.J.length<2)return!1
;let s,a,d=u.startsWith("http")?new URL(u).origin:null;for(let e of o.J)if(e!==o.R&&e!==l){
if(e.s.Jl===u&&!(s=s?0:e))break;d&&a!==0&&e.s.Jl.startsWith("http")&&new URL(e.s.Jl).origin===d&&(a=a?0:e)}
return s=s!==null&&s!==void 0?s:a,s&&s!==l?(t.Re=e.k,k(e,l,s,1,1),!0):!!n.N()&&(n.N().getAllFrames({tabId:l.s.m},r=>{
let n=0,o=l.s.Q;for(let e of r)if(e.parentFrameId===o){if(n){n=0;break}n=e.frameId}let u=n&&f.indexFrame(i,n)
;u&&(t.Re=e.k,k(e,l,u,1,1))}),!!r&&l)},g.initHelp,(e,l)=>{f.An(l).b|=4,l.s.b|=12,l.postMessage({N:11,H:t.du})},(e,l)=>{
var n;let{i}=e;if(t.Re=0,e.u!=null){let{m:l,t:r}=e,i=l>=42&&l<=64,u=e.u,f={};u=i?o.Ti(u,!0):u,
u=t.S(u,i?1048576:524288,e.o&&e.o.s,f),v.replaceCmdOptions({url:u,newtab:r!=null?!!r:!i,
keyword:(n=f.F)!==null&&n!==void 0?n:e.o.k}),I(e.f),t.x=1}else{if(e.r!==9)return;if(t.$==null||t.$.k!=="omni"){
if(i)return;t.$=r.i(),t.x=1}else if(i&&t.$.v===t.Ze.Jn)return}t.O=l,g.showVomnibar(!!i)},(e,l)=>{
f.isNotVomnibarPage(l,!1)||t.xl.er(e.q,e,_.bind(l,e.i|0))},(e,l)=>{var n;if(e.i!=null){
let n=(e.r||"")+"",i=e.i,o=n.includes("name")?e.u:""
;return void Promise.all([/^data:/i.test(i)?Promise.resolve(i):r.Gi(i||e.u),null]).then(([e,i])=>{
let u=typeof e=="string",s=u?e:e?e[1]:"";t.O=l
;let a=s.indexOf(",")+1,m=s.slice(5,Math.max(5,a)).toLowerCase(),v=m.split(";")[0]
;if(!e||v.startsWith("text/"))return void(e?f.showHUD("",74):f.showHUD(d.A(e===0?"downloadTimeout":"downloadFail")))
;let p=s.slice(a,a+24);p=m.includes("base64")?r.rl(p,"atob"):p.slice(0,16)
;let c=p.startsWith("\x89PNG")?"PNG":p.startsWith("\xff\xd8\xff")?"JPEG":/^GIF8[79]a/.test(p)?"GIF":/^ftypavi[fs]/.test(p.slice(4))?"AVIF":/^\xff\xd8\xff(\xdb|\xe0|\xee|\xe1[^][^]Exif\0\0)/.test(p)?"JPEG":p.slice(8,12)==="WEBP"?"WebP":(v.split("/")[1]||"").toUpperCase()||v,b=o&&/^(http|ftp|file)/i.test(o)?o:"",y=n.includes("safe")&&c!=="GIF"||n.includes("force")
;g.handleImageUrl(s,u?null:e[0],y&&c!=="PNG"?9:1,e=>{
f.showHUD(d.A(e?"imgCopied":"failCopyingImg",[e===1?"HTML":y?"PNG":c]))},o,b,null,!1),r.Gl()})}
let i=e.n,u=e.o||i&&b.parseOpenPageUrlOptions(i)||{},s=!!(i&&i.copy&&i.o),a=e.s,p=a!=null&&e.m||0,c=s?null:u.s,y=s?null:u.k,N=p>=42&&p<=64&&(!c||c.r!==!1)
;if(!a&&i&&!(i.type==="frame"||e.u&&!l.s.Q&&"tab-url tab".includes(i.type||""))){let e=i.type,n=v.concatOptions(i,r.Sn({
url:null,type:e==="tab"&&i.url||e==="tab-url"?null:e==="tab-title"?"title":e})),o=f.An(l).R;return l=!o||o.s.b&512?l:o,
t.ki=null,void v.executeCommand(m.ai("copyCurrentUrl",n),1,t.Re,l,1,i.$f&&{c:i.$f,r:i.$retry,u:0,w:0})}
let _=e.u||a||"",k=!a&&(e.d?u.d!==!1:!!u.d),I=(n=e.t)!==null&&n!==void 0?n:i===null||i===void 0?void 0:i.trim;if(I){
let e=I==="start"||I==="left"?e=>e.trimLeft():I==="end"||I==="right"?e=>e.trimRight():e=>e.trim()
;if(typeof _=="string")_=e(_);else for(let l=_.length;0<=--l;)_[l]=e(_[l]+"")}
if(k)if(typeof _!="string")for(let e=_.length;0<=--e;)N&&(_[e]=o.Ti(_[e]+"")),_[e]=r.Dl(_[e]+"");else N&&(_=o.Ti(_)),
_=r.Dl(_);else typeof _=="string"&&(_=_.length<4&&!_.trim()&&(_[0]===" "||"\n\n\n".includes(_))?"":_)
;let P=!!_,x=_&&t.Ql(_,e.j,c,y,I===!1);x=a&&typeof a=="object"?`[${a.length}] `+a.slice(-1)[0]:x,
Promise.resolve(x).then(n=>{
t.O=l,i&&v.runNextCmdBy(P?1:0,i)||f.showHUD(k?n.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):n.replace(n.trim()?/[^\S ]/g:/[^]/g,e=>(e=JSON.stringify(e).slice(1,-1)).trim()?e:e<"\xff"?"\\x"+(e.charCodeAt(0)+256).toString(16).slice(1):r.$l(e)),e.u?14:15)
})},(e,l)=>{let n=l!=null?l.s:null;if(n!==null&&!(n.b&4)){n.b|=4;let e=f.An(l);e&&(e.b|=4)}
let i=e.k,o=1,u=/^\d+|^-\d*/.exec(i);if(u!=null){let e=u[0];i=i.slice(e.length),o=e!=="-"?parseInt(e,10)||1:-1
}else i.length>6&&i.startsWith(`<c-v-${i[5]}>`)&&(i=i[5]+i.slice(7));let s=t.Ln.get(i);s||(u=i.match(m.mo),
i=u[u.length-1],o=1,s=t.Ln.get(i)),r.Gl(),s&&(s.Rn===38&&s.Vn&&t.na(s),e.e&&(t.ki={element:r.Li(e.e)}),
v.executeCommand(s,o,e.l,l,0,null))},v.waitAndRunKeyReq,(e,l)=>{if(e.c===2){let l=c.ve.pe(e.u)
;return void(e.f&&v.runNextCmdBy(l>0?1:0,e.f))}let r=!!e.f,n=e.c.o;r||(t.O=l);let i=!r&&g.me(l,n.type,e.l)||l
;Promise.resolve(i).then(t=>{if(!(r||t===l&&e.u)){let l=e;return l.U=(n.extUrl?1:0)|(e.c.a?2:0),l.f=!0,
void f.be(l,!0,1,t)}
e.c.a===1?(c.ve.ho(e,l.s.se,l.s.m),f.showHUDEx(l,"mNormalMarkTask",1,[["mCreate"],[e.l?"Local":"Global"],e.n]),
v.runNextCmdBy(1,n)):c.ve.Ji(n,e,l,e.l&&r?e.k:0)})},b.Je,v.onBeforeConfirm,v.onConfirmResponse,(e,l)=>{var r
;if(e.t==="e")return void f.showHUD(d.A("cannotDelSug"))
;let{t:i,s:o,u}=e,s=i==="history"&&o!=null?"session":i,a=s==="tab"?s:s+" item",m=e=>{
Promise.resolve(d.A("sugs")).then(l=>{f.showHUD(d.A(e?"delSug":"notDelSug",[l&&d.no(l,s[0])||a]))})}
;if(t.O=f.findCPort(l),
s==="tab"&&t.he===o)f.showHUD(d.A("notRemoveCur"));else if(s!=="session")t.xl.bl(s==="tab"?o:u,s,m);else if((r=n.Ie())===null||r===void 0?void 0:r.forgetClosedTab){
let e=o;n.Ie().forgetClosedTab(e[0],e[1]).then(()=>1,t.u).then(m)}},g.openImgReq,(e,l)=>{t.O=null,
b.openJSUrl(e.u,{},()=>{t.O=l,f.showHUD(d.A("jsFail"))})},(e,l)=>{var t
;e.c!==2&&e.c!==4?k(e,l,((t=f.An(l))===null||t===void 0?void 0:t.R)||null,e.f):f.getParentFrame(l.s.m,l.s.Q,1).then(t=>{
var r;k(e,l,t||((r=f.An(l))===null||r===void 0?void 0:r.R)||null,e.f)})},(e,l)=>{e.t?(v.overrideCmdOptions({enable:e.v,
forced:!0}),t.M[46](null,t.u)):a.qe(1,e.v,e.b?2:9,l)},(e,l)=>{v.replaceCmdOptions({active:!0,returnToViewport:!0,
extend:!!(e.c&1),direction:e.c>=56?"before":null}),t.O=l,t.x=1,g.performFind()},g.framesGoBack,()=>(d.eo&&d.eo(),
d.lo),(e,l)=>{l.s.b|=8},(e,l)=>{v.replaceCmdOptions({mode:e.c?"caret":"",start:!0}),I(e.f),t.O=l,t.x=1,
g.enterVisualMode()},e=>{if(performance.now()-e.r.n<500){let l=e.r.c;l.element=r.Li(e.e),p.runKeyWithCond(l)}},(e,l)=>{
var r;let u=e.o||{},s={},a=t.S(o.Ti(e.u,!0),1048576,u.s,s),d=(r=s.F)!==null&&r!==void 0?r:u.k
;a=a!==e.u||d?i._r(a,d,0):a,t.O=l,f.showHUD(a,78),n.downloadFile(a,e.f,e.r||"").then(e.m<44?r=>{r||t.hn[26]({m:37,f:e.f,
u:a},l)}:void 0)},(e,l,t)=>e===0?9:(setTimeout(()=>{f.sendResponse(l,t,9)},e),l),({k:e,v:l})=>{let t=l!==!!l
;f.showHUD(d.A(t?"useVal":l?"turnOn":"turnOff",[e,t?JSON.stringify(l):""]))},(e,l)=>{t.hn[19](e,f.findCPort(l))
},(e,l,r)=>!(l.s!==!1&&!l.s.Jl.startsWith(t.ll))&&(P(e.q,e.i,l).then(e=>{l.postMessage(r?{N:4,m:r,r:e}:e)}),l),(e,l)=>{
let r=e.u,n=r.indexOf("://");r=n>0?r.slice(r.indexOf("/",n+4)+1):r,r=r.length>40?r.slice(0,39)+"\u2026":r,t.O=l,
f.showHUD(r,78)},(e,l)=>{let n=e.t,i=r.Dl(e.u),o=n&&i?(t.Wn.actions.find(e=>e.startsWith("itemJoin="))||"").slice(9):""
;o=o?o.includes("\\")?r.tryParse(o[0]==='"'?o:`"${o}"`):r.rl(o):"\n",t.hn[18]({s:n&&i?n+o+i:i||n,d:!1,m:0
},f.findCPort(l))},(e,l)=>{t.O=f.findCPort(l),f.showHUD(e.t,15)},(e,l)=>{
f.showHUDEx(l,"mLocalMarkTask",1,[[e.n?"mCreate":"mJumpTo"],e.i>1?e.i:["mLastMark"]]),t.O=l,v.runNextCmdBy(1,e.c.o)
},()=>{let e=t.Cn(null,null);return e&&(clearTimeout(e.i),e.r&&e.r(!1)),!e},(e,l)=>{let r=e>0&&f.indexFrame(l.s.m,e)
;return r?(g.focusFrame(r,!1,2,1),2):(e<=0&&t.hn[45](),e?4:2)},()=>{},(e,l)=>{
let[r,n,i]=e.s,o=i&&(n?"^ ":"")+i.join(" "),u={N:1,p:o,f:r};l.postMessage(u);let s=f.An(l),a=r===3?2:0
;if(s&&(!s.rs||s.rs.f!==a||s.rs.ts!==o)){s.rs={f:a,ts:o},t.r&&s.d.s.f!==a&&t.o(l.s.m,a);for(let e of s.J)e.s.f=a,
e.s.b&512||e.postMessage(u)}},(e,l)=>{let r=l.s.m,i=0,o=setInterval(()=>{let e=t.a.get(r);r!==t.he&&e?(clearInterval(o),
(e.J.includes(l)||l.s.b&512)&&n.selectTab(r,n.selectWndIfNeed)):(++i>=12||!e)&&clearInterval(o)},17)}]
;let _=function(e,l,n,i,o,u,s,a){let d=e===2?2:0;t.Tn<104&&(d=0),f.safePost(this,{N:43,a:n,c:a,i:d,l,m:i,r:s,s:o,t:u}),
r.Gl()};t.Vi=(e,l,r,n,i)=>{e.postMessage({N:7,H:i||l!==4?f.ensureInnerCSS(e.s):null,m:i?5:0,k:i?t.Re:0,f:{},c:l,n:n||0,
a:r})};let k=(e,l,r,n,i)=>{r&&(i||r.s.f!==2)?t.Vi(r,e.c,e.a,e.n,n):(e.a.$forced=1,v.portSendFgCmd(l,e.c,!1,e.a,e.n||0))
},I=e=>{e&&(typeof e=="string"&&(e=p.parseEmbeddedOptions(e)),e&&typeof e=="object"&&Object.assign(t.$,r.Sn(e)))
},P=(e,l,t)=>(N||(N=u.vl.then(()=>n.import2("/background/page_handlers.js"))),
N.then(l=>Promise.all(e.map(e=>l.onReq(e,t)))).then(e=>({i:l,a:e.map(e=>e!==void 0?e:null)})))});