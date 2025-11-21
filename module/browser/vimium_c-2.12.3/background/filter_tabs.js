"use strict"
;__filename="background/filter_tabs.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./run_commands"],(l,e,t,n,r,u,i,a)=>{
Object.defineProperty(e,"__esModule",{value:!0
}),e.wn=e.Mn=e.oe=e.In=e.mayRequireActiveTab=e.getNecessaryCurTabInfo=e._e=e.getNearArrIndex=e.Pn=e.Ve=e.ke=e.getTabRange=void 0,
e.getTabRange=(l,e,n,r)=>s(l,e,n,t.x,r,t.$.limited,t.$.filter);let s=(l,e,t,n,r,u,i)=>{let a=n>0;r&&(n+=a?r:-r)
;let s=l+n
;return s<=e&&s>-2?a?[l,s]:[s+1,l+1]:u===!1||(u==null||u==="auto")&&(Math.abs(n)<(t||e)*2||n<10||i&&u==null)?Math.abs(n)<e?a?[e-n,e]:[0,-n]:[0,e]:a?[l,e]:[0,l+1]
};e.ke=(l,n,u,i,s,o)=>{let c=i=>{if(!i||!i.length)return s(0),r.g()
;let o=r.selectIndexFrom(i),[c,d]=f?[0,i.length]:e.getTabRange(o,i.length,0,n);f&&(a.overrideCmdOptions({limited:!1
},!0),a.overrideOption("$limit",t.x),t.x=t.x>0?9999:-9999),u(i,l?[c,o,d]:[o+1===d||t.x>0&&c!==o?c:d-1,o,d],s)
},d=t.$.filter,f=d&&/(^|[&+])limit(ed)?=count\b/.test(d+"")
;if(i)if(i.length===0||Math.abs(t.x)>1||f)if(i.length===0||f){let l=i[0]?i[0].windowId:t.we;(l>=0?r.ye(r.Be.get,l,{
populate:!0}):r.ye(r.getCurWnd,!0)).then(l=>{c(l?l.tabs:[])})}else c(i);else n?i[0].index+t.x<0?r.le(c):r.Me.query({
windowId:i[0].windowId,index:i[0].index+t.x
},n=>(n&&n.length&&(o===!0||r.$e(n[0])&&(!o||o(n[0])))&&(!d||e.oe(i[0],n,d).length>0)?t.x<0?u([n[0],i[0]],[0,1,l?2:1],s):u([i[0],n[0]],[l?0:1,0,2],s):r.le(c),
r.g())):u(i,[0,0,1],s);else s(0)},e.Ve=()=>{let l=0,e=-1;return t.ze.forEach((n,r)=>{n>l&&r!==t.he&&(l=n,e=r)}),e},
e.Pn=(l,t,n)=>{let u
;return l&&(l.index||t)?n&&n[u=Math.max(n.indexOf(l),0)+(t?1:-1)]&&r.$e(n[u])?Promise.resolve(n[u]):r.ye(r.Me.query,{
windowId:l.windowId,index:l.index+(t?1:-1)
}).then(u=>u&&u[0]?r.$e(u[0])?u[0]:(n&&n.length>2?Promise.resolve(n.filter(r.$e)):r.ye(r.le)).then(n=>n&&n.length?n[e.getNearArrIndex(n,l.index+(t?1:-1),t)]:null):null):Promise.resolve(null)
},e.getNearArrIndex=(l,e,t)=>{
for(let n=l.length>1?0:1;n<l.length;n++)if(l[n].index>=e)return l[n].index===e||t?n:n>0?n-1:0;return l.length-1},
e._e=(l,e)=>{Math.abs(l)===1?r.getCurTab(t=>{let n=t[0].index+l;n>=0?r.Me.query({windowId:t[0].windowId,index:n
},n=>(n&&n[0]?e(l>0?[t[0],n[0]]:[n[0],t[0]]):r.getCurTabs(e),r.g())):r.getCurTabs(e)}):r.getCurTabs(e)},
e.getNecessaryCurTabInfo=l=>{if(!l)return null;let t=e.mayRequireActiveTab(l)
;return t>2?r.ye(r.getCurTab).then(l=>l&&l[0]||null):t?Promise.resolve(u.j(null,t>1)).then(l=>l?{url:l}:null):null},
e.mayRequireActiveTab=l=>{let e=0;for(let t of(l+"").split(/[&+]/)){
let l=t.split("=",1)[0],n=l.includes(".")?"":l||t,r=t.slice(n?n.length+1:0)
;if(n&&r==="same"&&n!=="hidden"&&!n.startsWith("discard"))return 3;if(!r&&n){
if(n.startsWith("title")||n==="group")return 3;e=n==="hash"?2:e||(n==="host"||n==="url"?1:0)}}return e}
;let o=(l,e)=>(l=l&&l.toLowerCase())===""||l==="1"||l==="true"?!e||null:l==="only"||l!=="0"&&l!=="false"&&null
;e.In=(l,e,t)=>{let n=l?(l+"").split(/[&+]/).find(l=>l.startsWith(e)):null,r=n?n.slice(1+e.length):null
;return r!==null?o(r,t):null};let c=(l,e)=>{
let t=l&&l[0]==="/"?l.lastIndexOf("/"):0,r=t>1&&/^[a-z]+$/.test(l.slice(t+1))?n.Tl(l.slice(1,t),l.slice(t+1).replace(/g/g,""),0):null,u=!r&&!!e&&e.toLowerCase()
;return r?(e=null,l=>r.test(l||"")):e?e===u?l=>!!l&&l.toLowerCase().includes(u):l=>!!l&&l.includes(e):null}
;e.oe=(l,e,a,d)=>{var f;let h=0,m=0,b=0,w=[];for(let e of(a+"").split(/[&+]/)){
let u=e.split("=",1)[0],a=u.includes("."),s=!a&&u.endsWith("!"),d=a?"":(s?u.slice(0,-1):u)||e,k=e.slice(a?0:u.length+(e.charAt(u.length+1)==="="?2:1)),p=k&&n.rl(k),v=p==="same"||p==="cur"||p==="current",g=null
;switch(d){case"title":case"title*":let e=c(p,p||l&&l.title);g=e?l=>e(l.title):null;break;case"url":case"urlhash":
case"url+hash":case"url-hash":case"hash":let u=null;if(d==="url"&&p)u=i.Ol(p);else{
let e=l?r.getTabUrl(l):null,t=d.includes("hash");u=e?i.Ol(":"+(t?e:e.split("#",1)[0])):null}
let a=!!u&&u.t===2&&p===p.toLowerCase();g=u?l=>i.Rl(u,a?r.getTabUrl(l).toLowerCase():r.getTabUrl(l)):g;break
;case"title+url":let s=p&&c(p,p);g=s?l=>s(l.title)||s(r.getTabUrl(l)):g;break;case"host":case"":
let w=p||(d&&l?(f=n.yn(r.getTabUrl(l)))===null||f===void 0?void 0:f.host:"");g=w?l=>{var e
;return w===((e=n.yn(r.getTabUrl(l)))===null||e===void 0?void 0:e.host)}:g;break;case"active":let k=o(p,1)
;g=k!=null?l=>l.active===k:g;break;case"new":case"old":case"visited":let x=o(p)===(d!=="new");g=l=>t.ze.has(l.id)===x
;case"discarded":case"discard":let M=!v&&o(p,1);g=M!=null?l=>l.discarded===M:g;break;case"group":
let _=p||(l?r.getGroupId(l)!=null?r.getGroupId(l)+"":"":null);g=_!=null?l=>{var e
;return((e=r.getGroupId(l))!==null&&e!==void 0?e:"")+""===_}:g;break;case"hidden":let I=null;g=I!=null?l=>r.$e(l)!==I:g
;break;case"highlight":case"highlighted":let P=v?l?l.highlighted:null:o(p);g=P!=null?l=>l.highlighted===P:g;break
;case"incognito":let $=v?l?l.incognito:null:o(p);g=$!=null?l=>l.incognito===$:g;break;case"pinned":
let y=v?l?l.pinned:null:o(p,1);g=y!=null?l=>l.pinned===y:g;break;case"mute":case"muted":{
let e=v?l?r.isTabMuted(l):null:o(p);g=e!=null?l=>r.isTabMuted(l)===e:g}break;case"audible":case"audio":{
let e=v?l?l.audible:null:o(p);g=e!=null?l=>l.audible===e:g}break;case"min":case"max":case"limit":case"limited":
let j=p==="count"?t.$.$limit||t.x:parseInt(p)||0;d==="min"?m=j:d==="max"?b=j:h=j||1,g=()=>!0}g&&w.push([g,s])}
if(d&&(d.known=w.length>0),w.length===0)return e.slice(0);let k=e,p=e.filter(l=>{
for(let e of w)if(e[0](l)===e[1])return!1;return!0}),v=p.length
;if(!v||m>0&&v<m||b>0&&v>b)return t.$&&t.$.$else||u.showHUD(v?`${v} tabs found but expect ${v<m?m:b}`:"No tabs matched the filter parameter"),
[];if(h){let e=l?k.indexOf(l):-1;if(e<0){let n=l?l.id:t.he;e=k.findIndex(l=>l.id===n)}if(e>=0){
let l=p.findIndex(l=>k.indexOf(l)>=e),n=l>=0&&k.indexOf(p[l])>e;n&&p.splice(l,0,null)
;let r=s(l>=0?l:v-1,v,0,t.x>0?h:-h,n?1:0,!1);p=p.slice(r[0],r[1]),n&&(p=p.filter(l=>!!l))
}else p=h>0?p.slice(0,h):p.slice(-h)}return p},e.Mn=(l,e)=>{let n,u=(l,e)=>{l.ind=e
},i=(l,e)=>l<e?-1:l>e?1:0,a=l.map((l,e)=>({tab:l,ind:e,time:null,rhost:null,group:r.getGroupId(l),pinned:l.pinned
})),s=-1,o=!1
;for(let l of(e instanceof Array?e.slice(0):(e===!0?"time":e+"").split(/[, ]+/g)).reverse())n=l[0]==="r"&&l[1]!=="e"||l[0]==="-"?(l=l.slice(1),
-1):1,l.includes("time")&&!l.includes("creat")||l.includes("recen")?(a[0].time==null&&a.forEach(l=>{
let e=l.tab.id,n=t.ze.get(e);l.time=e===t.he?1:n!=null?n:e+2
}),s=1):l.startsWith("host")||l==="url"?(a[0].rhost||a.forEach(l=>{
let e=l.tab.url,t=e.indexOf("://")+3,n=t>3?e.indexOf("/",t):0;if(n<t)return void(l.rhost=e)
;let r=e.slice(t,n),u=r.lastIndexOf(":"),i=u>0&&r.lastIndexOf(":",u-1)>0
;l.rhost=i?r:r.slice(0,u>0?u:r.length).split(".").reverse().join(".")+(u>0?" "+r.slice(1):"")}),
s=l==="url"?3:2):s=l==="title"?4:l.includes("creat")||l==="id"?5:l==="window"?6:l==="index"?7:l==="reverse"?(n=-1,7):-1,
s<0||(a.sort((l,e)=>(s===1?l.time-e.time:s<4?i(l.rhost,e.rhost)||(s===3?i(l.tab.url,e.tab.url):0):s===4?i(l.tab.title,e.tab.title):s===5?l.tab.id-e.tab.id:s===6?l.tab.windowId-e.tab.windowId:l.ind-e.ind)*n||(l.group!=null?e.group!=null?0:-1:e.group!=null?1:0)||l.ind-e.ind),
a.forEach(u),o=!0);if(o&&a.some(l=>l.group!=null)){let l=new Map
;for(let{group:e,ind:t}of a)e==null||l.has(e)||l.set(e,t)
;a.sort((e,t)=>(e.group!=null?l.get(e.group):e.ind)-(t.group!=null?l.get(t.group):t.ind)||e.ind-t.ind)}
return o&&(a.forEach(u),a.sort((l,e)=>l.pinned!==e.pinned?l.pinned?-1:1:l.ind-e.ind)),o?a.map(l=>l.tab):l},
e.wn=async(l,e,n,u,i)=>{let a=e=>(!l||e.type===l)&&(n==null||e.incognito===n)&&(i||e.state!=="minimized");if(t.jn>=0){
let l=await r.ye(r.Be.get,t.jn);if(l&&a(l))return l;t.jn=-1}let s=[];{let l=(await r.ye(r.getCurTabs)||[]).map(l=>l.id)
;l.push(t.he),t.ze.forEach((e,t)=>{l.includes(t)||s.push([t,e])}),s.sort((l,e)=>e[1]-l[1])}if(s.length>0){
let l=await r.je(r.Me.get,s[0][0]);if(!l){let e=s.find(l=>t.a.has(l[0]));l=e&&await r.je(r.Me.get,e[0])}
let e=l&&await r.je(r.Be.get,l.windowId);if(e&&a(e))return e}
let o=await r.je(r.Be.getAll),c=o.filter(a),d=c.filter(l=>l.id!==u);return d.sort((l,e)=>e.id-l.id),
(d.length>0?d[0]:null)||(e?o.find(l=>l.id===u)||o.find(l=>l.focused)||null:[c,o.find(l=>l.id===u)])}});