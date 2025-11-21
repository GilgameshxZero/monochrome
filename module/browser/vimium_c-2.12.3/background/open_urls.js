"use strict"
;__filename="background/open_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./tools","./clipboard","./filter_tabs"],(l,e,n,i,t,r,u,o,s,d,f,a,v,p,m)=>{
Object.defineProperty(e,"__esModule",{value:!0
}),e.Je=e.openUrlReq=e.openUrl=e.goToNextUrl=e.openUrlWithActions=e.openShowPage=e.openJSUrl=e.parseReuse=e.yi=e.parseOpenPageUrlOptions=e.preferLastWnd=e.newTabIndex=void 0
;let c={current:0,reuse:1,newwnd:2,frame:3,newtab:-1,newbg:-2,lastwndfg:-5,lastwnd:-5,lastwndbg:-6,iflastwnd:-7,
reuseincurwnd:-3,lastwndbgbg:-8,lastwndbginactive:-8}
;e.newTabIndex=(l,e,n,i)=>e==="before"||e==="left"||e==="prev"||e==="previous"?l.index:e==="after"||e==="next"||e==="right"?l.index+1:e==="default"?void 0:i!==!1&&t.getGroupId(l)!=null?e==="start"||e==="begin"?l.index:e==="end"?void 0:l.index+1:e==="start"||e==="begin"?0:e==="end"?n?3e4:void 0:l.index+1,
e.preferLastWnd=l=>l.find(l=>l.id===n.jn)||l[l.length-1],e.parseOpenPageUrlOptions=(l,e)=>({d:(e=l.decoded,
e!=null?e:l.decode),g:l.group,i:l.incognito,k:l.keyword,m:l.replace,o:l.opener,p:l.position,r:l.reuse,s:p.T(l),
t:l.testUrl,w:l.window})
;let w=l=>typeof l=="boolean"?l:l?l==="force"||(l==="reverse"?n.de!==2:l==="same"||l==="keep"?n.de===2:null):null,g=l=>l==="popup"||l==="normal"?l:void 0
;e.yi=(l,e)=>{l=l.slice(0,128).split("?")[0].replace(/\\/g,"/")
;let i=n.G>1&&/\/globalroot\/device\/condrv|\bdevice\/condrv\/kernelconnect/.test(l);return i&&(n.O=e||n.O,
o.showHUD(d.A("harmfulURL"))),i};let b=(l,u,s,d)=>{i.Gl();let v=l=>{a.replaceCmdOptions(u),a.overrideCmdOptions({urls:l,
url:null,url_f:null,copied:null,keyword:null},!0)};switch(d[1]){case 1:o.showHUD(d[0],15),a.runNextCmdBy(1,u);break
;case 5:case 7:v(null),d[1]===7||u.$p?l=0:a.overrideOption("$p",1),e.openUrlWithActions(r._r(d[0]),l,!1,s);break;case 4:
l>=3&&d[0]&&a.runNextCmdBy(1,u);break;case 9:a.runNextCmdBy(1,u);break;case 3:o.showHUD(d[0],1),a.runNextCmdBy(0,u)
;break;case 6:let p=d[0],m=n.he;if(p[0]==="openUrls"){let e=p.slice(1),n=[]
;for(let i of e)typeof i=="string"||i[1]!==5&&i[1]!==7||(i=r._r(d[0],null,l)),
typeof i!="string"?Promise.resolve(i).then(e=>{e[1]===6&&e[0][0]==="openUrls"||b(l,u,s,e)}):n.push(i)
;return void(n.length>0&&(s&&s.length>0?(v(n),M(s)):t.getCurTab(l=>{v(n),M(l)})))}setTimeout(()=>{
let l=n.a.get(m),e=l?l.d:null,t=i.Sn({keys:[p[1]]});n.ki=null,p[0]==="run1"?n.I(p[1],e,{c:u.$f,r:u.$retry,u:0,w:0
}):a.executeCommand(f.ai("runKey",t),1,0,e,0,null)},0)}},y=(l,e,n)=>{l?a.runNextOnTabLoaded(e,n):a.runNextCmdBy(0,e)
},h=(l,e,i,r,u)=>{let o=e=>(y(e,l,e),t.g());if(u){if(u.length>0&&u[0].incognito&&t.w(i))return void t.tabsCreate({url:i
},o)}else if(t.w(i)&&r!==!0)return void t.getCurTab(h.bind(null,l,e,i,!0));if(e===3&&n.O&&n.O.s.Q){let e={id:n.O.s.m}
;return a.sendFgCmd(18,!1,{r:1,u:i}),void setTimeout(()=>y(!0,l,e),100)}u?t.tabsUpdate(u[0].id,{url:i},o):t.tabsUpdate({
url:i},o)},k=(l,e,n,i,r,u)=>{t.makeWindow({url:l,focused:e,incognito:n,
type:typeof l=="string"||l.length===1?g(i.window):void 0,left:r.left,top:r.top,width:r.width,height:r.height
},r.state!=null?r.state:u&&u.state!=="minimized"?u.state:"",l=>{y(l,i,l&&l.tabs[0])})},$=(l,i,r,u,o)=>{
let s=i!==-2,d=u?u.windowId:n.we,f=o.find(l=>l.id===d),a=f!=null&&f.incognito
;if(!r.window&&i!==2&&(a||(o=o.filter(l=>l.incognito&&l.type==="normal")).length>0)){let i={url:l[0],active:s,
windowId:a?d:e.preferLastWnd(o).id};if(a){let l=r.opener===!0;i.index=e.newTabIndex(u,r.position,l,r.group),
l&&(i.openerTabId=u.id)}t.openMultiTabs(i,n.x,!0,l,a&&r.group,u,l=>{!a&&s&&t.selectWnd(l),y(l,r,l)})
}else k(l,!0,!0,r,r,f)}
;e.parseReuse=l=>l==null?-1:typeof l!="string"||/^-?\d+$/.test(l)?typeof l=="boolean"?l?1:-1:isNaN(l=+l&&0|+l)||l>3||l<-8?-1:l:(l=l.toLowerCase().replace("window","wnd").replace(/-/g,""))in c?c[l]:-1
;let _=(l,e,r)=>{
let u=e&&e.length>0?t.getTabUrl(e[0]):"",o=[r!==!0?r===!1?"":r:(/[%$]s/i.exec(l)||["${url_mask}"])[0],n.$.host_mask||n.$.host_mark,n.$.tabid_mask||n.$.tabId_mask||n.$.tabid_mark||n.$.tabId_mark,n.$.title_mask||n.$.title_mark,n.$.id_mask||n.$.id_mark||n.$.id_marker],s=[]
;for(let n=0;n<o.length;n++){let r=o[n]!=null?o[n]+"":"",d=r?l.indexOf(r):-1;if(d>=0){let l=d+r.length;for(let l of s);
s.push([d,l,n===0?/^[%$]S|^\$\{S:/.test(r)?u:i.ql(u):n===1?i.ql(new URL(u).host):n===2?u&&""+e[0].id:n===3?u&&""+i.ql(e[0].title):t.t.runtime.id])
}}if(s.length){let e="",n=0;s.sort((l,e)=>l[0]-e[0]);for(let i of s)e=e+l.slice(n,i[0])+i[2],n=i[1];l=e+l.slice(n)}
return l},I=(l,i,r,u)=>{let o,s=w(u.incognito);o=(i>-4?new Promise(l=>{t.getCurWnd(!1,e=>(l(e||null),t.g()))
}):m.wn(g(u.window),!0,s,n.we)).then(l=>l&&new Promise(e=>{t.Me.query({active:!0,windowId:l.id},n=>(l.tabs=n,e(l),
t.g()))})),o.then(o=>{let d=!!o&&!o.focused&&o.id!==n.we,f=i===-7&&!d;if(!o||!d&&(i!==-7||s!=null&&o.incognito!==!!s)){
if(i===-7&&a.runNextCmdBy(0,u))return;return void k(l,i>-8,s!=null?!!s:r,u,u,o)}
let v=o.tabs&&o.tabs.length>0?t.selectFrom(o.tabs):null;t.openMultiTabs({url:l[0],active:i>-6||f,windowId:o.id,
pinned:!!u.pinned,index:v?e.newTabIndex(v,u.position,!1,u.group):void 0
},n.x,!!u.incognito&&typeof u.incognito=="string",l,u.group,v,l=>{i>-6?d&&t.selectWnd(l):l&&i>-8&&!f&&t.selectTab(l.id),
y(l,u,i>-6&&i!==-2&&l)})})},P=(l,i,r,u)=>{
let o=u&&u[0],s=!!o&&o.incognito||n.de===2,d=i!==-2&&i!==-8,f=i===2||i<-3||!!r.window,a=w(r.incognito),v=a!=null&&typeof r.incognito=="string"
;if(!v&&l.some(t.w))f=s||f;else if(s)f=a===!1||f;else if(a&&i>-4)return void t.Be.getAll($.bind(null,l,i,r,o))
;if(f)return void I(l,i,s,r);let p=r.opener&&o?o.id:void 0,m={url:l[0],active:d,windowId:o?o.windowId:void 0,
openerTabId:p,pinned:!!r.pinned,index:o?e.newTabIndex(o,r.position,p!=null,r.group):void 0}
;t.openMultiTabs(m,n.x,v,l,r.group,o,l=>{d&&l&&t.selectWndIfNeed(l),y(l,r,d&&l)})},T=(l,i,r,u,o,d)=>{
let f,v=r?typeof r=="string"?s.Ol(r):typeof r=="object"&&r.t&&r.v?r:null:null,p=i===2||i===1,c=i===1||i===-3,b=c&&o.q||{},h=g(c?b.w:u.window),k=w(c?b.i:u.incognito),$=(c?b.g:u.group)===!0
;n.x=1,c?(b.m=null,b.g=$):(a.overrideOption("group",$,u),u.replace!=null&&a.overrideOption("replace",v,u)),
f=i<-3&&v?m.wn(h,i===-7,k,n.we).then(l=>!l||l instanceof Array?null:l):Promise.resolve(!p&&n.we>=0?{id:n.we}:null),
Promise.all([f,!$||d?null:new Promise(l=>{t.getCurTab(e=>{d=e||[],l()})})]).then(([l,e])=>v&&(l||p)?new Promise(e=>{
t.Me.query(l?{windowId:l.id}:{windowType:h||void 0},l=>{
let r=k!=null?!k:i>-4?n.de!==2:-2,u=(l||[]).filter(l=>s.Rl(v,l.url)&&l.incognito!==r);if($&&u.length>0&&d.length>0){
let e=t.getGroupId(d[0]);l&&(u=u.filter(l=>t.getGroupId(l)===e))}if(u.sort((l,e)=>{let i=n.ze.get(e.id),t=n.ze.get(l.id)
;return t?i?i-t:1:i?-1:e.id-l.id}),i===1){let l=u.filter(l=>l.windowId===n.we);u=l.length>0?l:u}
return e(u.length?u[0]:null),t.g()})}):null).then(r=>{
if(r==null||r.id===n.he&&!c)c?e.Je(o):!a.runNextCmdBy(0,u)&&(d?P([l],i,u,d):t.getCurTab(P.bind(null,[l],i,u)));else if(n.Ii&&r.url.startsWith(n.Ze.ui))x(c?o.f||{}:u,r);else{
let e=i!==-2&&i!==-8,s=r.windowId!==n.we&&i>-6;t.tabsUpdate(r.id,{url:l},l=>(l&&(e&&(t.selectTab(l.id),l.active=!0),
s&&t.selectWnd(l)),y(l,c?o.f||{}:u,i!==-2&&i>-6&&l),t.g()))}})};e.openJSUrl=(l,e,r,u)=>{var s
;if(/^(void|\(void\))? ?(0|\(0\))?;?$/.test(l.slice(11).trim()))a.runNextCmdBy(1,e);else{if(!r&&n.O){
if(u===0&&(n.O=((s=o.C())===null||s===void 0?void 0:s.R)||n.O),o.safePost(n.O,{N:5,u:l,f:a.parseFallbackOptions(e)
}))return;if(u!==-1)return void a.runNextCmdBy(0,e);n.O=null}i.rl(l.slice(11)),Promise.resolve().then(l=>{
l===void 0&&r&&r(),y(!!l,e,null)}),t.g()}},e.openShowPage=(l,i,r,u)=>{let o=n.Ze.ui
;if(l.length<o.length+3||!l.startsWith(o))return!1
;if(u===void 0)return t.getCurTab(n=>(e.openShowPage(l,n&&n.length>0||i===-2?i:-1,r,n&&n[0]||null),t.g())),!0
;l=l.slice(o.length);let s=u?u.incognito:n.de===2
;l.startsWith("#!image ")&&s&&(l="#!image incognito=1&"+l.slice(8).trim());let d=[l,null,0]
;return n.Ii=d[1]=()=>(clearTimeout(d[2]),n.Ii=null,d[0]),d[2]=setTimeout(()=>{
d[0]="#!url vimium://error (vimium://show: sorry, the info has expired.)",d[2]=setTimeout(()=>{n.Ii===d[1]&&(n.Ii=null),
d[0]="",d[1]=null},2e3)},1200),n.x=1,i===0||i===3||s&&(i===-2||i===-1)?s?t.tabsCreate({url:o,active:i!==-2},l=>{y(l,r,l)
}):x(r,u):(r.incognito=!1,i===1||i===-3?T(l,i,r.replace,null,{u:o,a:r.parent,p:r.prefix,q:e.parseOpenPageUrlOptions(r),
f:a.parseFallbackOptions(r)},u?[u]:void 0):P([o],i,r,u?[u]:void 0)),!0};let x=(l,e)=>{t.tabsUpdate(e.id,{url:n.Ze.ui,
active:!0}),i.ns(()=>{a.runNextOnTabLoaded(l,null)})},M=l=>{let i=n.$,u=i.urls;if(i.$fmt!==2){
if(i.$fmt!==1)for(let l=0;l<u.length;l++)u[l]=r._r(u[l]+"");a.overrideCmdOptions({},!0),a.overrideOption("urls",u),
a.overrideOption("$fmt",2)}for(let l of u)if(e.yi(l))return t.g()
;let o=e.parseReuse(i.reuse),s=o===1||o===0||o===3||o===-3?-1:o;n.$=null,P(u,s,i,l)};e.openUrlWithActions=(l,u,o,s)=>{
var d,f;if(typeof l!="string");else if(l||u!==9){
let t=a.fillOptionWithMask(l,n.$.mask,"value",["url","url_mask","url_mark","value"],n.x),v={};t.ok&&(l=t.result,
t.useCount&&(n.x=1));let m=n.$.url_mask,c=n.$.url_mark;if(m==null&&c==null||(l=_(l,s,m!=null?m:c)),o){let e=p.T(n.$)
;l=n.S(l,0,e,v)}if(u!==9){
let e=(d=v.F)!==null&&d!==void 0?d:(n.$.keyword||"")+"",t=(f=n.$.testUrl)!==null&&f!==void 0?f:!e,o=!!v.F||!!v.Zl||!!e&&e!=="~"
;l=t?r._r(l,e,u):r.K(l.trim().split(i.q),e,o?-2:u),l=t||!o?l:r._r(l,null,r.wi&&l.startsWith("vimium:")?3:u)}
let w=n.$.goNext;w&&l&&typeof l=="string"&&(l=n.S(l,8192,null,{}),l=e.goToNextUrl(l,n.x,w==="absolute")[1],
v.F&&(l=r.K(l.trim().split(i.q),v.F,3))),l=typeof l=="string"?r.fi(l):l}else l=n.newTabUrl_f
;let v=n.$,m=e.parseReuse(v.reuse),c=m===0||m===3?w(v.incognito):null;n.$=null,i.Gl(),c!=null&&c!==(n.de===2)&&(m=-1),
typeof l!="string"?Promise.resolve(l).then(b.bind(0,u,v,s)):!e.openShowPage(l,m,v)&&(i._i(l)?e.openJSUrl(l,v,null,m):e.yi(l)?a.runNextCmdBy(0,v):m===1||m===-3?T(l,m,v.replace,null,{
u:l,a:v.parent,p:v.prefix,q:e.parseOpenPageUrlOptions(v),f:a.parseFallbackOptions(v)
},s):m===0||m===3?h(v,m,l):v.replace?T(l,m,v.replace,v,null,s):s?P([l],m,v,s):t.getCurTab(P.bind(null,[l],m,v)))}
;let N=(l,s,f,v)=>{if(v===null)return o.complainLimits(d.A("readClipboard")),void a.runNextCmd(0)
;if(!(v=v.trim()))return o.showHUD(d.A("noCopied")),void a.runNextCmd(0);s.F!=null&&a.overrideCmdOptions({keyword:s.F})
;let p,m=(l=typeof l=="string"?l:"").includes("any");if((l.includes("urls")||m)&&(p=v.split(/[\r\n]+/g)).length>1){
let e=[],u=m&&n.$.keyword,s=u?u+"":null,d=!1;for(let l of p)if(l=l.trim(),l){if(l=r._r(l,s,0),!(m||r.dr<=2)){e.length=0,
d=!0;break}e.push(l)}if(e.length>1)return n.$=a.copyCmdOptions(i.i(),n.$),n.$.urls=e,n.$.$fmt=1,
void(f&&f.length>0?M(f):t.getCurTab(M))
;if(d&&l.includes("auto"))v=v.replace(/[\r\n]+/g," ");else if(d)return void(a.runNextCmd(0)||o.showHUD("The copied lines are not URLs"))
}if(r.es.test(v))v=v.slice(1,-1);else{let l=n.$.testUrl;(l!=null?l:!n.$.keyword)&&(v=u.Pi(v,l))}let c=v.indexOf("://")+3
;if(c>3&&i.an.test(v)){
let l,e=(v=/^ttps?:/i.test(v)?"h"+v:v).indexOf("/",c)+1||v.length,n=v.slice(c,e),i=n.startsWith("0.0.0.0")?7:n.includes(":::")&&(l=/^(\[?::\]?):\d{2,5}$/.exec(n))?l[1].length:0
;v=i?v.slice(0,c)+(i>6?"127.0.0.1":"[::1]")+v.slice(c+i):v}e.openUrlWithActions(v,2,!1,f)};e.goToNextUrl=(l,e,n)=>{
let i=(l,e)=>typeof l!="number"||isNaN(l)?e:l,t=!1
;return l=l.replace(/\$\{([\da-zA-Z_-]+)(?:[,\/#@](-?\d*)(?::(-?\d*)(:-?\d*)?)?(?:[,\/#@]([^}]+))?)?\}|\$\$/g,(l,r,u,o,s,d)=>{
if(l==="$$")return"$";t=!0;let f=10,a=1,v=!1,p=0
;for(let[l,e]of d?d.split("&").map(l=>l.split("=")):[])l==="min_len"||l==="len"?a=+e||1:l==="radix"?(f=e,
f=f>=2&&f<=36?f:10):l.startsWith("out")&&l.endsWith("radix")?(p=e,
p=p>=2&&p<=36?p:p&&10):l==="reverse"&&(v=e==="1"||e.toLowerCase()==="true")
;let m=i(r&&parseInt(r,f),1),c=s&&parseInt(s.slice(1))||0,w=c<0||!c&&(s||"0")[0]==="-",g=i(u&&parseInt(u),w?-1:1),b=i(o&&parseInt(o),1/0*(w?-1:1))
;c=(b>=g?1:-1)*(Math.abs(c)||1),
e*=v?-c:c,m=n&&e?c>0?e>0?g+e-1:(isFinite(b)?b:1e4)+e:e<0?g+e+1:(isFinite(b)?b:-1e4)+e:m+e,
m=b>=g?Math.max(g,Math.min(m,b-1)):Math.max(b+1,Math.min(m,g));let y=m.toString(p||f)
;return y=y.length<a?"0".repeat(a-y.length)+y:y,y}),[t,l]},e.openUrl=l=>{
if(n.$.urls)return void(n.$.urls instanceof Array&&(l&&l.length>0?M(l):t.getCurTab(M)))
;if((n.$.url_mask!=null||n.$.url_mark!=null)&&!l)return t.g()||void t.getCurTab(e.openUrl);let i=n.$.url;if(n.$.copied){
let e,i=n.$.copied,t=typeof i!="string"?null:i.includes("<")?i.split("<")[1]:i.includes(">")?i.split(">")[0]:null,r={}
;t?(i=i.includes("<")?i.split("<")[0]:i.split(">")[1],e=n.Il.get(t)||"",e=n.S(e,32768,p.T(n.$),r)):e=n.Vl(p.T(n.$),0,r),
e instanceof Promise?e.then(N.bind(null,i,r,l)):N(i,r,l,e)
}else i||n.$.sed?e.openUrlWithActions(i!=null?i+"":"",3,!0,l):e.openUrlWithActions(n.$.url_f||"",9,!1,l)},
e.openUrlReq=(l,t)=>{var s,d;i.Sn(l);let f=t!=null&&o.isNotVomnibarPage(t,!0);n.O=f?t:o.findCPort(t)||n.O
;let v=l.u||"",p=l.n&&a.parseFallbackOptions(l.n)||{},m=l.o||l.n&&e.parseOpenPageUrlOptions(l.n)||{},c=(m.k||"")+"",g=(s=m.t)!==null&&s!==void 0?s:!c,b=m.s,y=l.m||0,h=y<64?y&-17:y,k=l.f!=null?l.f:h===45||h===46
;p.group=!f||m.g,p.incognito=w(m.i)!=null?m.i:h===45||null,p.replace=m.m,p.position=m.p
;let $=m.r!=null?m.r:y?l.t==="window"?2:(y&16?-2:-1)+(l.t==="last-window"?-4:0):l.r;if(p.reuse=$,p.window=m.w,v||!f){
v[0]===":"&&!f&&/^:[bhtwWBHdso]\s/.test(v)&&(v=l.u=v.slice(2).trim());let e=v,t={},o=f?k?1048576:524288:g?16384:0
;v=g?u.Ti(v,k):v,v=n.S(v,o,b,t);let s=(d=t.F)!==null&&d!==void 0?d:c,a=v.trim();r.ci(),
k&&!s?v=v!==e?r._r(a,null,-1):a:g||!f&&!s?(a=g?u.Pi(a,g):a,v=r._r(a,s,f?-1:3)):(v=r.K(a.split(i.q),s,s&&s!=="~"?-1:0),
v=r.wi?r._r(a=v,s="",v.startsWith("vimium:")?3:0):v),
r.dr===4&&!s&&n.z.preferBrowserSearch&&(v=`vimium://b-search-at/${$}/${a}`,v=r._r(v,null,2)),
r.dr!==2&&r.dr!==1||l.h==null?r.dr===3&&v.startsWith("vimium:")&&!e.startsWith("vimium://")&&(v=r._r(v,null,r.wi||v.startsWith("vimium://run")?3:0)):v=(l.h?"https":"http")+v.slice(v[4]==="s"?5:4),
p.opener=f?m.o!==!1:n.Wn.actions.includes("opener"),p.url_f=v}else{if(!l.c)return n.O=t||o.findCPort(null),
void(a.runNextCmdBy(0,p)||o.showHUD("",14));p.copied=l.c,p.keyword=c,p.testUrl=m.t,p.sed=b}n.x=1,a.replaceCmdOptions(p),
e.openUrl()},e.Je=(l,u)=>{let o,s=i=>{var r;let s=(r=w(c.i))!==null&&r!==void 0?r:n.de===2&&null;if(i=i||[],
s!==null&&(i=i.filter(l=>l.incognito===s)),c.g&&o.length>0){let l=t.getGroupId(o[0]);i=i.filter(e=>t.getGroupId(e)===l)}
if(i.length>0){let l=i.filter(l=>l.windowId===n.we);return void d(l.length>0?l:i)}let v=n.de===2&&t.w(l.u)
;return l.f&&a.runNextCmdBy(0,l.f)||(o.length<=0||c.w||b===2?t.makeWindow({url:l.u,type:g(c.w),incognito:!v&&n.de===2
},"",l=>{f(l&&l.tabs&&l.tabs.length>0?l.tabs[0]:null)}):v?t.openMultiTabs({url:l.u,active:!0
},1,null,[null],c.g,null,f):b===0||b===3?(h({},b,l.u),b===3&&u&&u.s.Q?(a.sendFgCmd(18,!1,{r:1,u:l.u}),
f(o[0])):t.tabsUpdate(o[0].id,{url:l.u},f)):t.openMultiTabs({url:l.u,index:e.newTabIndex(o[0],c.p,!1,!0),
openerTabId:c.o&&o[0]?o[0].id:void 0,windowId:o[0].windowId,active:!0},1,null,[null],c.g,o[0],f)),t.g()},d=e=>{
let i=l.u,r=!!l.p,u=r?1:l.a?-1:0;u&&e.sort((l,e)=>(l.url.length-e.url.length)*u);let o=t.selectFrom(e)
;if(u&&o.url.length>e[0].url.length===r&&(o=e[0]),
!i.startsWith(n.Ze.Qe)||n.a.get(o.id)||l.s)if(n.Ii&&o.url.startsWith(n.Ze.ui))x(l.f||{},o),t.selectWndIfNeed(o);else{
let e=n.el?o.url.replace(/^edge:/,"chrome:"):o.url,u=n.el?i.replace(/^edge:/i,"chrome:"):i
;p=r?e.startsWith(u):l.a?u.startsWith(e):u===e,t.tabsUpdate(o.id,{url:p?void 0:i,active:!0},f),t.selectWndIfNeed(o)
}else t.tabsCreate({url:i},f),t.Me.remove(o.id)},f=e=>{if(!e)return l.f&&a.runNextCmdBy(0,l.f),t.g()
;a.runNextOnTabLoaded(l.f||{},e,l.s&&(()=>{v.ve.Mi(l,e.id,0,p)}))},p=!1,m=r.fi(l.u.split("#",1)[0]);if(e.yi(m,u))return
;let c=l.q||(l.q={});(c.g==null||m.startsWith(n.Ze.Qe))&&(c.g=!1);let b=c.r!=null?e.parseReuse(c.r):1
;c.m?T(l.u,b!==3&&b!==0?b:1,c.m,null,l):t.ye(t.getCurTab).then(async e=>{o=e
;let r=[],u=b===-3&&n.we>=0?n.we:void 0,d=m,f=g(c.w)||"normal";if(i.an.test(m)){
let e=m.indexOf("/")+2,n=m.indexOf("/",e+1),i=m.slice(e,n>0?n:void 0);l.a&&(m=m.slice(0,n>0?n+1:void 0),
d=m=m.endsWith("/")?m:m+"/"),i&&i.includes("@")&&(d=m=m.slice(0,e)+i.split("@")[1]+m.slice(n))}let a=!(!l.p&&!l.a)
;!m.startsWith("file:")&&!m.startsWith("ftp")||m.includes(".",m.lastIndexOf("/")+1)||r.push(d+(a?"/*":"/")),
r.push(a?d+"*":d);for(let e of r){let i=await t.ye(t.Me.query,{url:e,windowType:f,windowId:u})
;if(i&&l.a&&(n.el&&(m=m.replace(/^chrome:/i,"edge:")),i=i.filter(l=>m.startsWith(l.url.split(/[#?]/,1)[0]))),
i&&i.length>0)return s(i)}s([])})}});