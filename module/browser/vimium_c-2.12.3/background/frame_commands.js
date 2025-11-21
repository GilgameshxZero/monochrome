"use strict"
;__filename="background/frame_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./open_urls","./tools"],(e,l,t,n,i,r,o,u,a,s,f,d,c)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.blurInsertOnTabChange=l.ge=l.focusFrame=l.framesGoNext=l.toggleZoom=l.mainFrame=l.framesGoBack=l.openImgReq=l.captureTab=l.handleImageUrl=l.enterVisualMode=l.L=l.me=l.showVomnibar=l.initHelp=l.performFind=l.parentFrame=l.nextFrame=void 0
;let m=!1,p=!1;t.tl=(e,l)=>{var r;if(e===3&&l>=0)return navigator.permissions.query({name:"clipboard-read"
}).catch(t.u).then(e=>!!e&&e.state!=="denied"&&t.tl(3,-1-l,null))
;let u=!m&&t.Tn>108&&e!==1&&e!==9,a=u?null:t.a.get(t.he)||t.O&&o.C(),s=u?null:a?a.d:t.O
;!a||!a.R||s===a.R||a.R.s.b&512||n.an.test(a.R.s.Jl)&&!(s.s.b&512)&&s.s.Jl.startsWith((((r=n.yn(a.R.s.Jl))===null||r===void 0?void 0:r.origin)||"")+"/")||(s=a.R)
;let d=setTimeout(()=>{let e=t.Cn(d,null);e&&e.r&&e.r(!1)},4e4),c=n.Xe();if(t.Cn(null,{i:d,t:e,s:l,d:null,r:c.Le}),u){
if(t.Hn)try{o.Gn(t.Hn,t.On)}catch(e){o.qn()}if(t.Hn);else if(!p){
let e=i.t.offscreen.Reason,l=[e.BLOBS,e.CLIPBOARD,e.MATCH_MEDIA].filter(e=>!!e);p=!0,i.t.offscreen.createDocument({
reasons:l.length>0?l:["CLIPBOARD"],url:t.Ze.Bn,justification:"read and write system clipboard"},()=>{let e=i.g()
;if(p=!1,e)return m=!0,o.qn(),e})}}else if(s)f.portSendFgCmd(s,0,1,{u:t.Ze.En,c:"R TEE UI",
a:e===1||e===5||e===9||e===3?"clipboard-write; clipboard-read":"",t:3e3,i:!a||s===a.d||a.d.s.b&512?0:a.d.s.Q},1);else{
let e=c.Ge;i.getCurWnd(!1,l=>{let n=l?l.id:t.we;i.makeWindow({type:"popup",url:t.Ze.En,focused:!0,incognito:!1,left:0,
top:0,width:100,height:32},"",l=>{let r=l?null:t.Cn(null,null);if(l){let r=l.id;e.then(()=>{n!==t.we&&i.Be.update(n,{
focused:!0},i.g),i.Be.remove(r,i.g)}),e=null}else r&&r.i===d&&(clearTimeout(r.i),r.r&&r.r(!1))})})}return c.Ge},
l.nextFrame=()=>{let e=t.O,n=-1,i=o.C(),r=i&&i.J;if(r&&r.length>1){n=r.indexOf(e)
;for(let e=Math.abs(t.x);e>0;e--)n+=t.x>0?1:-1,n===r.length?n=0:n<0&&(n=r.length-1);e=r[n]}
l.focusFrame(e,e.s.Q===0,e!==t.O&&i&&e!==i.d?4:3)},l.parentFrame=()=>{
let e=t.O.s,n=e.m>=0&&o.An(t.O)?null:"Vimium C can not access frames in current tab";n&&o.showHUD(n),
o.getParentFrame(e.m,e.Q,t.x).then(e=>{e?l.focusFrame(e,!0,5):l.mainFrame()})},l.performFind=()=>{
let e=t.O.s,l=t.x<0?-t.x:t.x,n=t.$.index,r=n?n==="other"?l+1:n==="count"?l:n>=0?-1-(0|n):0:0,o=t.$.highlight,u=t.$.extend,a=u==="before"||t.$.direction==="before"?-1:1,s=!r&&l<2?t.$.selected:null,d=!!r||!t.$.active,m=null
;e.b&32||(e.b|=32,m=i.k(e)),f.sendFgCmd(1,!0,f.wrapFallbackOptions({c:r>0?t.x/l:t.x,l:d?1:0,f:m,d:a,
m:typeof o=="number"?o>=1?Math.min(o|0,200):0:o?d?100:20:0,n:!!t.$.normalize,r:t.$.returnToViewport===!0,
s:s==null?0:typeof s!="string"?typeof s=="number"?Math.max(0,s|0):5:(s.includes("auto")||s.includes("fallback")?0:4)|(s.includes("any")?2:1),
t:u?a>0?2:1:0,p:!!t.$.postOnEsc,e:!!t.$.restart,u:!!t.$.scroll&&t.$.scroll!=="auto",
q:t.$.query?t.$.query+"":d||t.$.last?c.ce.ln(e.se,"",r<0?-r:r):""}))},l.initHelp=(e,l)=>f.initHelpDialog().then(n=>{
var i;if(!n)return;let r=e.w&&((i=o.An(l))===null||i===void 0?void 0:i.R)||l,u=r.s.Jl.startsWith(t.Ze.Qe),a=e.a||{}
;if(r.s.b|=262144,t.O=r,e.f){let e=t.Ln.get("?"),l=e&&e.Rn===8&&e.Vn?"?":"";l||t.Ln.forEach((t,n)=>{
t.Rn===8&&t.Vn&&(l=l&&l.length<n.length?l:(e=t,n))}),a=l&&s.zn(e)||a}f.sendFgCmd(17,!0,{h:n.Dn(u,a.commandNames),
o:t.Ze.Qe,f:e.f,e:!!a.exitOnClick,c:u&&!!s.Fn||t.z.showAdvancedCommands})}),l.showVomnibar=e=>{var i
;let r=t.O,u=t.$.url,a=t.$.query;if(a!=null&&(u=a,a=null,t.$.url=u,delete t.$.query),
u!=null&&u!==!0&&typeof u!="string"&&(u=null,delete t.$.url),!r){if(r=((i=o.C())===null||i===void 0?void 0:i.R)||null,
!r)return;t.O=r}let s=null;if(u!=null&&t.$.urlSedKeys){let n=typeof u=="string"?u:typeof t.$.u=="string"?t.$.u:o.j()
;if(n&&n instanceof Promise)return void n.then(t=>{f.overrideCmdOptions({u:t||""},!0),l.showVomnibar(e)});let i={}
;s=t.S(n,0,{r:null,k:t.$.urlSedKeys},i),i.F!=null&&f.overrideCmdOptions({keyword:i.F})}
t.$.mode==="bookmark"&&f.overrideOption("mode","bookm")
;let d=t.vomnibarPage_f,{Jl:c}=r.s,m=!d.startsWith(t.Ze.U),p=c.startsWith(t.Ze.U),g=e||!d.startsWith(t.ll)?t.Ze.Jn:d,v=(e=e||(m?p||d.startsWith("file:")&&!c.startsWith("file:///")||d.startsWith("http:")&&!/^http:/.test(c)&&!/^http:\/\/localhost[:/]/i.test(d):r.s.se||p&&!d.startsWith(c.slice(0,c.indexOf("/",c.indexOf("://")+3)+1))))||d===g||r.s.m<0,b=t.$.trailingSlash,h=t.$.trailing_slash,y=f.copyCmdOptions(n.Sn({
v:v?g:d,i:v?null:g,t:v?0:m?2:1,s:b!=null?!!b:h!=null?!!h:null,j:v?"":t.Ze.Un,e:!!t.$.exitOnClick,u:s,
url:typeof u=="string"&&s||u,k:n.Kn(!0),h:t.Wn.Qn}),t.$);y.icase==null&&t.Wn.actions.includes("icase")&&(y.icase=!0),
f.portSendFgCmd(r,6,!0,y,t.x),y.k="omni",t.$=y},l.me=(e,l,n)=>{let i=e.s.m,r=i>=0?i:t.he,u=e.s.Q||i<0?t.a.get(r):null
;return u&&(i<0&&(e.s.b&64||e.s.Jl.startsWith("about:"))&&(e=u.d),(l==="tab"||!l&&!n&&i<0)&&(u.R||i<0)&&(e=u.R||u.d),
e.s.b&64||e.s.Jl.startsWith("blob:"))?o.getParentFrame(r,e.s.Q,1).then(e=>e||u.R||u.d):e},l.L=()=>{
let e=t.$.mode,l=t.x<2||t.x>10?1:t.x,n=e&&(e+"").toLowerCase()==="create"?1:0,i=t.$.key,r={a:n,n:!t.$.storeCount,
s:t.$.swap!==!0,t:"",o:t.$};if(typeof i=="string"&&i.trim().length===1)return r.a=0,void t.hn[21]({H:21,c:r,k:t.Re,
n:i.trim(),s:0,u:"",l:!!t.$.local},t.O);Promise.resolve(a.A(n===1?"mBeginCreate":"mBeginGoto")).then(e=>{r.t=e,
f.portSendFgCmd(t.O,3,!0,r,l)})},l.enterVisualMode=()=>{
let e=t.$.mode,l=t.$.start,r=typeof e=="string"?e.toLowerCase():"",o=t.O.s,u=null,a=null,d=null
;16&~o.b&&(o.b&32||(o.b|=32,u=i.k(o)),a=s.Xn,d=s.Yn,o.b|=16);let c=n.Zn({m:r==="caret"?3:r==="line"?2:1,f:u,g:d,k:a,
t:!!t.$.richText,s:l!=null?!!l:null,w:""},t.$);delete c.mode,delete c.start,delete c.richText,f.sendFgCmd(5,!0,c)},
l.handleImageUrl=(e,l,r,u,a,s,f)=>{var d;if(r){if(r&1&&(e?Promise.resolve():n.ni(l).then(l=>{e=l
})).then(()=>t.tl(r===9?9:1,{u:e,t:s,b:1},l)).then(async e=>{u(!!e)}),r&2)return f(e),void(r&1||u(1));if(r&4){
let l=((d=o.C())===null||d===void 0?void 0:d.R)||t.O,s=n.Xe();r&1?setTimeout(s.Le,800):s.Le(0),
s.Ge.then(()=>i.downloadFile("",a,l?l.s.Jl:null)).then(l=>{!l&&f(e),r===4&&u(!0)})}}else u(1)},l.captureTab=(e,r)=>{
let u=t.$.show,s=!!t.$.copy,f=t.$.download,d=s?f===!0:f!==!1,c=!!t.$.richText,m=t.$.png?0:Math.min(Math.max(t.$.jpeg|0,0),100),p=e&&e[0],g=!!p&&p.url.startsWith(location.protocol),v=p?p.windowId:t.we,b=p?p.title:"Tab"+(p?p.id:t.he)
;b=t.$.name==="title"?b:n.now().replace(/[-: ]/g,e=>e===" "?"_":"")+"-"+b,b=b.replace(n.ii(),""),b+=m>0?".jpg":".png",
i.Me.captureVisibleTab(v,m>0?{format:"jpeg",quality:m}:{format:"png"},e=>{
if(!e)return t.O&&o.showHUD("Can not capture "+(g?"injected extensions":"this tab")),r(0),i.g()
;l.handleImageUrl(e,null,(u?2:0)|(d?4:0)|(s?1:0),s?e=>{
o.showHUD(a.A(e?"imgCopied":"failCopyingImg",[e===1?"HTML":m?"JPEG":"PNG"])),r(e)
}:r,b,((c||"")+"").includes("name")?b:"",e=>{t.hn[26]({t:"pixel=1&",u:e,f:b,a:!1,m:37,o:{r:t.$.reuse,m:t.$.replace,
p:t.$.position,w:t.$.window}},t.O)})})},l.openImgReq=(e,l)=>{var i,u;let s=e.u;if(/^<svg[\s>]/i.test(s)){if(s=r.oi(s),
!s)return t.O=l,void o.showHUD(a.A("invalidImg"));e.f=e.f||"SVG Image"}if(!n.yn(s))return t.O=l,
void o.showHUD(a.A("invalidImg"));let c=t.Ze.ui+"#!image ";e.f&&(c+="download="+n.ql(e.f)+"&"),
e.r&&(c+="src="+n.ql(e.r)+"&"),e.a!==!1&&(c+="auto=once&"),e.t&&(c+=e.t)
;let m=e.o||n.i(),p={},g=m.s?t.S(s,32768,m.s,p):s,v=(i=p.F)!==null&&i!==void 0?i:m.k,b=(u=m.t)!==null&&u!==void 0?u:!v,h=g!==s
;s=g,f.replaceCmdOptions({opener:!0,reuse:m.r!=null?m.r:e.m&16?-2:-1,replace:m.m,position:m.p,window:m.w}),t.x=1
;let y=v||h?b?r._r(s,v,2):r.K(s.trim().split(n.q),v,2):s;l&&o.safePost(l,{N:11,H:o.ensureInnerCSS(t.O.s),k:1,t:" ",
d:1e-4}),d.openUrlWithActions(typeof y!="string"||!b||y.startsWith(location.protocol)&&!y.startsWith(t.ll)?y:c+y,9)},
l.framesGoBack=(e,t,r)=>{if(e.o.r)return void f.executeCommand(s.ai("reloadTab",n.Sn(e.o)),e.s,0,t,0,e.o.$f&&{c:e.o.$f,
r:e.o.$retry,u:0,w:0});let o=f.hasFallbackOptions(e.o)?(f.replaceCmdOptions(e.o),
f.getRunNextCmdBy(0)):i.g,u=r?r.id:t.s.m,a=e.s,c=d.parseReuse(e.o.reuse||0);if(c){let t=e.o.position
;i.Me.duplicate(u,n=>{if(!n)return o();c===-2&&i.selectTab(u);{let t=f.parseFallbackOptions(e.o)||{};t.reuse=0,
l.framesGoBack({s:a,o:t},null,n)}let r=n.index--,s=t==="end"?-1:d.newTabIndex(n,t,!1,!0)
;s!=null&&s!==r&&i.Me.move(n.id,{index:s===3e4?-1:s},i.g)})}else{let e=a>0?i.Me.goForward:i.Me.goBack
;for(let l=0,t=a>0?a:-a;l<t;l++)e(u,l?i.g:o)}},l.mainFrame=()=>{let e=o.C(),n=e&&e.R
;!n||n===e.d&&t.$.$else&&typeof t.$.$else=="string"?f.runNextCmd(0):l.focusFrame(n,!0,n===e.d?3:5)},l.toggleZoom=e=>{
i.ye(i.Me.getZoom).then(l=>{if(!l)return void e(0);let n=t.x<-4?-t.x:t.x;(t.$.in||t.$.out)&&(n=0,t.x=t.$.in?t.x:-t.x)
;let r,o=t.$.level,u=Math;if(t.$.reset)r=1;else if(o!=null&&!isNaN(+o)||n>4){
let e=u.max(.1,u.min(t.$.min|0||.25,.9)),l=u.max(1.1,u.min(t.$.min|0||5,100))
;r=o==null||isNaN(+o)?n>1e3?1:n/(n>49?100:10):1+o*t.x,r=u.max(e,u.min(r,l))}else{
let e=0,n=9,i=[.25,1/3,.5,2/3,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5]
;for(let t=0,r=0;t<i.length&&(r=Math.abs(i[t]-l))<n;t++)e=t,n=r;r=i[e+t.x<0?0:u.min(e+t.x,i.length-1)]}
Math.abs(r-l)>.005?i.Me.setZoom(r,i.xe(e)):e(0)})},l.framesGoNext=(e,l)=>{let n=t.$.patterns,i=!1
;if(n&&n instanceof Array||(n=n&&typeof n=="string"?n:(i=!0,e?t.z.nextPatterns:t.z.previousPatterns),n=n.split(",")),
i||!t.$.$fmt){let e=[];for(let l of n)if(l=l&&(l+"").trim(),l&&e.push(".#[:".includes(l[0])?l:l.toLowerCase()),
e.length===200)break;n=e,i||(f.overrideOption("patterns",n),f.overrideOption("$fmt",1))}
let r=n.map(e=>Math.max(e.length+12,e.length*4)),o=Math.max.apply(Math,r);f.sendFgCmd(10,!0,f.wrapFallbackOptions({
r:t.$.noRel?"":l,n:e,match:t.$.match,clickable:t.$.clickable,clickableOnHost:t.$.clickableOnHost,exclude:t.$.exclude,
excludeOnHost:t.$.excludeOnHost,evenIf:t.$.evenIf,scroll:t.$.scroll,p:n,l:r,m:o>0&&o<99?o:32,v:t.$.view!==!1,
a:!!t.$.avoidClick}))},l.focusFrame=(e,l,n,i)=>{e.postMessage({N:7,H:l?o.ensureInnerCSS(e.s):null,m:n,k:t.Re,c:0,
f:!i&&t.$&&f.parseFallbackOptions(t.$)||{}})},l.ge=()=>{var e;return(e=t.$.blur)!==null&&e!==void 0?e:t.$.grabFocus},
l.blurInsertOnTabChange=e=>{let r=f.parseFallbackOptions(t.$);r&&r.$then?r.$else=r.$then:r=null;let a=l.ge()
;if(typeof a=="string"){let e=u.Ol(a)||!1;f.overrideOption(a===t.$.blur?"blur":"grabFocus",e),a=e}
let s=e?t.a.get(e.id):null;if(i.g()||!s||a&&a!==!0&&!u.Rl(a,s.d.s.Q?s.d.s.Jl:e.url))return r&&f.runNextCmdBy(1,r),i.g()
;setTimeout(()=>{o.si(t.a.get(t.he),!0).then(()=>{let e=t.a.get(t.he);if(!e||e.b&512)r&&f.runNextCmdBy(1,r);else{
let l=n.Sn({esc:!0});r&&f.copyCmdOptions(l,n.Sn(r)),f.portSendFgCmd(e.d,16,!1,l,-1)}})},17)}});