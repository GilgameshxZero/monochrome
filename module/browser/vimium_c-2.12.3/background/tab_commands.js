"use strict"
;__filename="background/tab_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./i18n","./run_commands","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tools"],(e,l,i,t,n,r,o,d,u,f,a,s,v,w,m)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.toggleWindow=l.Te=l.Pe=l.toggleTabUrl=l.togglePinTab=l.toggleMuteTab=l.removeTab=l.reloadTab=l.moveTabToNextWindow=l.moveTabToNewWindow=l.joinTabs=l.copyWindowInfo=void 0
;let c=Math.abs,p=()=>{i.O&&v.focusFrame(i.O,!1,0,1)
},b=e=>i.$.end?null:i.$.position!=null?s.newTabIndex(e,i.$.position,!1,!1):i.$.rightInOld!=null?e.index+(i.$.rightInOld?0:1):e.index+(i.$.right!==!1?1:0)
;l.copyWindowInfo=e=>{
let l=i.$.filter,r=i.$.keyword,o=i.$.decoded,s=o!=null?o:i.$.decode,v=i.$.format,m=i.$.type,p=m==="tab"&&(c(i.x)>1||!!l),b=a.T(i.$),I={
d:s!==!1,s:b,k:r};if(m==="frame"&&i.O&&!v){let l;return i.O.s.b&128?(i.O.postMessage({N:3,H:18,U:1,o:I}),l=1):l=d.be({
H:18,U:1,o:I}),void(l!==1&&(l&&l instanceof Promise?l.then(()=>{e(1)}):e(1)))}n.Me.query(m==="browser"?{
windowType:"normal"}:{active:m!=="window"&&!p||void 0,lastFocusedWindow:!0},o=>{var a
;if((!m||m!=="browser"&&m!=="window"&&m!=="tab"&&typeof m=="string")&&!v){if(!o.length)return void e(0)
;let l=!!m&&/^raw.?url$/i.test(m),r=m==="title"?o[0].title:!m||m==="frame"||m==="url"||l?n.getTabUrl(o[0]):(((a=t.yn(n.getTabUrl(o[0])))===null||a===void 0?void 0:a[m])||"")+"",d=m==="title"?{
s:r}:{u:r};return d.o=I,l&&(I.d=!1),d.n=f.parseFallbackOptions(i.$),void i.hn[18](d,i.O)}
let c=i.O?i.O.s.se:i.de===2,g=""+(v||"${title}: ${url}"),x=i.$.join,_=x==="json"&&!v;if(p){
let e=o.length<2?0:n.selectIndexFrom(o),l=w.getTabRange(e,o.length);o=o.slice(l[0],l[1])
}else o=o.filter(e=>e.incognito===c);if(l){let e=i.O?i.O.s.m:i.he,t=o.find(l=>l.id===e);o=w.oe(t,o,l)}
if(!o.length)return void e(0);m==="browser"&&o.sort((e,l)=>e.windowId-l.windowId||e.index-l.index);let h=o.map(e=>_?{
title:e.title,url:s?t.Dl(n.getTabUrl(e)):n.getTabUrl(e)}:g.replace(/\$\{([^}]+)}/g,(l,i)=>i.split("||").reduce((l,i)=>{
var r;let o
;return l||(s&&i==="url"?t.Dl(n.getTabUrl(e)):/^raw.?url$/i.test(i)?n.getTabUrl(e):i==="host"?((r=t.yn(n.getTabUrl(e)))===null||r===void 0?void 0:r.host)||"":i!=="__proto__"&&(o=e[i],
o&&typeof o=="object"?JSON.stringify(o):o||""))},"")));Promise.resolve(i.Ql(h,x,b,r)).then(l=>{e(1),
d.showHUD(m==="tab"&&o.length<2?l:u.A("copiedWndInfo"),15)})})},l.joinTabs=e=>{
let l=i.$.order!=null?i.$.order:i.$.sort,r=i.$.windows,o=r==="current",d=r==="all",u=u=>{let f=i.de===2
;u=o?u:u.filter(e=>e.incognito===f);let a=o?u:u.filter(e=>e.id===i.we);if(!o&&!a.length)return void e(0);let s=r=>{
let d=[],f=e=>{d.push(e)};if(u.sort((e,l)=>e.id-l.id).forEach(e=>{e.tabs.forEach(f)}),!d.length)return void e(0)
;let a=i.$.filter,s=r?r.id:i.we,v=d.find(e=>e.id===i.he)||(r?n.selectFrom(r.tabs):d[0]);if(o&&c(i.x)>1&&d.length>1){
let e=d.findIndex(e=>e.id===v.id),l=w.getTabRange(e,d.length);d=d.slice(l[0],l[1])}if(a){let e={};d=w.oe(v,d,a,e),
a=e.known?a:null}if(!d.length)return void e(0);d=l?w.Mn(d,l):d
;let m,p=i.$.position,b=p==="before"||(p+"").startsWith("prev")
;a&&r?p&&typeof p=="string"&&p!=="keep"?p==="begin"||p==="start"?m=r.tabs.filter(e=>e.pinned).length:p!=="end"?(d.includes(v)&&d.splice(d.indexOf(v),1),
b?d.push(v):d.unshift(v),
m=Math.max(0,r.tabs.findIndex(e=>e.id===i.he)-d.filter(e=>e.windowId===s&&e.index<v.index).length)):m=r.tabs.length:m=d.reduce((e,l)=>l.windowId===s?Math.min(l.index,e):e,d.length):m=r?r.tabs.length:0
;let I,g=d.some(e=>n.getGroupId(e)!=null),x=t.Xe(),_=d.length,h=()=>(_--,_===0&&x.Le(1),n.g()),y=g?0:_,T=1
;for(;y<d.length;y=T,T=y+1)if(I=n.getGroupId(d[y]),I!==null){for(;T<d.length&&n.getGroupId(d[T])===I;T++);if(T>y+1){
let e=d[y].id,l=d.slice(y+1,T).map(e=>e.id);n.Me.ungroup(l,h),_++,x.Ge.then(()=>{n.Me.get(e,e=>{if(!e)return n.g()
;let i=n.getGroupId(e);n.Me.group(i!==null?{groupId:i,tabIds:l}:(l.unshift(e.id),{tabIds:l}))})})}
d[y].windowId!==s&&(n.t.tabGroups.move(I,{index:-1,windowId:s},h),_++)}
for(y=0;y<d.length;y++)n.Me.move(d[y].id,d[y].windowId!==s?{windowId:s,index:m+y}:{index:m+y},h)
;for(let e of d)e.pinned&&e.windowId!==s&&(n.tabsUpdate(e.id,{pinned:!0},h),_++);x.Ge.then(e)};{let e=a.length?a[0]:null
;if(e&&e.type==="popup"&&e.tabs.length){let l=n.selectFrom(e.tabs).id;e.tabs=e.tabs.filter(e=>e.id!==l),n.makeWindow({
tabId:l,incognito:e.incognito},e.state,e=>{e&&(i.we=e.id,e.tabs[0]&&(i.he=e.tabs[0].id)),s(e)})
}else u=o||!e||d||l&&!r?u:u.filter(l=>l.id!==e.id),s(e)}};o?n.getCurWnd(!0,e=>e?u([e]):n.g()):(i.x=1,n.Be.getAll({
populate:!0,windowTypes:["normal","popup"]},u))},l.moveTabToNewWindow=e=>{let l=!!i.$.all,t=r=>{var o
;let a,s=r.tabs,v=s.length,m=i.$.focused!==!1,I=n.selectIndexFrom(s),g=s[I]
;if(!l&&v<=1&&(!v||g.index===0&&c(i.x)>1))return void e(0);if(l){
for(let l of s)if(n.getGroupId(l)!=null)return d.showHUD("Can not keep groups info during this command"),void e(0)
;a=[0,v]}else a=v===1?[0,1]:w.getTabRange(I,v);let x=i.$.filter,_=s.slice(a[0],a[1]);if(_=x?w.oe(g,_,x):_,
!_.length)return void e(0);if(!l){let l=_.length;if(l>=v&&v>1)return e(0),void d.showHUD(u.A("moveAllTabs"))
;if(l>30&&f.ne())return void f.P("moveTabToNewWindow",l).then(t.bind(null,r))
;if(v===1&&g.index===0&&c(i.x)===1)return void n.ye(n.Me.query,{windowId:r.id,index:1}).then(l=>{
if(!l||!l.length)return e(0),void d.showHUD(u.A("moveAllTabs"));r.tabs=[r.tabs[0],l[0]],t(r)})}
let h=g.incognito,y=_.includes(g)?g:_[0],T=((o=b(g))!==null&&o!==void 0?o:g.index+1)<=g.index,k={tabId:y.id,incognito:h,
focused:m},$=r.type==="normal"?r.state:"";w.Pn(_[T?_.length-1:0],T,s).then(l=>{m||l&&n.selectTab(l.id),
n.makeWindow(k,$,i=>{if(!i)return void e(0);p(),m&&l&&n.selectTab(l.id)
;let t=_.indexOf(y),r=_.slice(0,t),o=_.slice(t+1),d=r.length,u=o.length,f=e=>e.id;d&&(n.Me.move(r.map(f),{index:0,
windowId:i.id},n.g),d>1&&n.Me.move(_[t].id,{index:d})),u&&n.Me.move(o.map(f),{index:d+1,windowId:i.id},n.g)
;for(let e of _)e.pinned&&n.tabsUpdate(e.id,{pinned:!0});e(1)})})},r=l=>{let t=n.selectFrom(l.tabs)
;if(l.incognito&&t.incognito)return e(0),d.showHUD(u.A("hasIncog"));let r=t.id,o={incognito:!0},a=n.getTabUrl(t)
;if(t.incognito);else{if(n.w(a))return e(0),d.complainLimits(u.A("openIncog"));o.url=a}l.tabs=null,n.Be.getAll(t=>{
let d=i.$.focused!==!1;if((t=t.filter(e=>e.incognito&&e.type==="normal")).length)return void n.Me.query({
windowId:s.preferLastWnd(t).id,active:!0},([e])=>{n.tabsCreate({url:a,windowId:e.windowId,active:i.$.active!==!1,
index:s.newTabIndex(e,i.$.position,!1,!1)},f.getRunNextCmdBy(3)),d&&n.selectWnd(e),n.Me.remove(r)})
;let u=l.type==="normal"?l.state:"",v=o.url!=null;v?i.Ze.ls&&(d=!0,u=""):o.tabId=r,o.focused=d,n.makeWindow(o,u,l=>{
v||l&&p(),v&&l?f.getRunNextCmdBy(0)(l.tabs&&l.tabs[0]||null):e(!!l)}),v&&n.Me.remove(r)})},o=!!i.$.incognito
;o&&(i.O?i.O.s.se:i.de===2)?(d.showHUD(u.A("hasIncog")),
e(0)):(l||c(i.x)!==1&&!o?n.ye(n.getCurWnd,!0):n.ye(n.getCurWnd,!1).then(e=>e&&n.ye(n.Me.query,{windowId:e.id,active:!0
}).then(l=>(e.tabs=l,l&&l.length?e:void 0)))).then(l=>{l?(o?r:t)(l):e(0)})},l.moveTabToNextWindow=([e],t)=>{
function r(r,u){let f,a=i.$.focused!==!1,s=i.$.filter,v=!!(i.$.tabs||s||d);if(r.length>0){
f=r.map(e=>e.id).sort((e,l)=>e-l);let l=f.indexOf(e.windowId);if(f.length>=2||f.length>0&&l<0){
let m=i.$.nextWindow,I=d?1:(m==null?1:typeof m=="boolean"?m?1:-1:0|+m||1)*(v?1:i.x),g=d?0:l>=0?I>0?l+1:l:0,x=I>0?g+I-1:g+I
;x=(x%f.length+f.length)%f.length,x=x!==l?x:x+(I>0?1:-1),x=(x%f.length+f.length)%f.length
;let _=f[x],h=r.find(e=>e.id===_),y=a&&!o&&h&&h.state==="minimized"?u&&u.state==="maximized"?u.state:"normal":""
;return void n.Me.query({windowId:_,active:!0},([l])=>{let r=b(l),o=r==null||r>l.index,d=null,u=!1,f=null,m=()=>{
if(u===!1)return void w.Pn(e,!o,f).then(e=>{u=e,m()});let s;a||u&&n.selectTab(u.id),n.Me.move(e.id,{
index:r!==null&&r!==void 0?r:-1,windowId:_},l=>{if(n.g())return t(0),n.selectWnd(e),n.g()
;Promise.resolve(s).then(()=>t(1)),d=d||[e];for(let e=0;e<d.length;e++)d[e].id!==l.id&&n.Me.move(d[e].id,{
index:l.index+e,windowId:l.windowId},n.g),d[e].pinned&&n.Me.update(d[e].id,{pinned:!0});i.O&&i.O.s.m===l.id&&p()}),
a&&(y&&n.Be.update(_,{state:y}),n.selectWnd(l)),s=i.$.active!==!1&&new Promise(l=>{n.selectTab(e.id,l)}),
a&&u&&n.selectTab(u.id)};!v||!s&&c(i.x)===1?m():w.ke(!0,0,(l,n)=>{if(f=l.slice(0),e=l[n[1]],l=l.slice(n[0],n[2]),
i.Tn<52&&(l=l.filter(l=>l.incognito===e.incognito)),s){if(!(l=w.oe(e,l,s)).length)return void t(0)
;e=l.includes(e)?e:l[0]}d=l,u=(d.length!==1||!d[0].active)&&null,m()},[],t)})}}else r=u?[u]:[]
;v&&c(i.x)>1?l.moveTabToNewWindow(t):w.Pn(e,!1).then(l=>{a||l&&n.selectTab(l.id),n.makeWindow({tabId:e.id,
incognito:e.incognito,focused:a},r.length===1&&r[0].type==="normal"?r[0].state:"",i=>{i&&(p(),a&&l&&n.selectTab(l.id)),
e.pinned&&i&&i.tabs&&i.tabs[0]&&n.tabsUpdate(i.tabs[0].id,{pinned:!0}),t(!!i)})})}
let o=i.$.minimized===!1||i.$.min===!1,d=i.$.last;d?w.wn("normal",!1,e.incognito,e.windowId,o).then(e=>{
!e||e instanceof Array?r(e[0].slice(0,1),e[1]):r([e])}):n.Be.getAll(l=>{
r(l.filter(l=>l.incognito===e.incognito&&l.type==="normal"&&(!o||l.state!=="minimized")),l.find(l=>l.id===e.windowId))})
},l.reloadTab=(e,[t,r,o],d,u)=>{let a={bypassCache:i.$.hard===!0},s=n.Me.reload,v=e
;if(c(i.x)<2||i.$.single)return void s(e[u?r:t].id,a,f.getRunNextCmdBy(0));let m=e[r],p=i.$.filter;if(e=e.slice(t,o),p){
if(!(e=w.oe(m,e,p)).length)return void d(0);m=e.includes(m)?m:e[0]}
if(e.length>20&&f.ne())f.P("reloadTab",e.length).then(l.reloadTab.bind(null,v,[t,r,o],d));else{
s(m.id,a,f.getRunNextCmdBy(0));for(let l of e)l!==m&&s(l.id,a)}},l.removeTab=(e,t,r)=>{var o
;let d=i.$.highlighted,u=i.$.goto||(i.$.left?"left":""),a=(u+"").split(/[\/,;\s]/),s=a.length>1?a[c(i.x)>1?1:0]:u+"",v=s==="near"||s==="reverse"||s.startsWith("back"),p=s.startsWith("forw"),b=v?i.x>0:p?i.x<0:s==="left",x=v?i.x<0:p?i.x>0:s==="right",_=s.includes("previous"),h=_&&s.includes("only")
;if(!t){let t=c(i.x)>1||d||_&&!h;return void(t?n.getCurTabs:n.getCurTab)(l.removeTab.bind(null,e,t?2:1))}
if(!r||!r.length)return e(0),n.g()
;let y,T=r.length,k=n.selectIndexFrom(r),$=r[k],z=1,M=k,j=k+1,P=(o=i.$.noPinned)!==null&&o!==void 0?o:r[0].pinned!==$.pinned&&!(i.x<0&&k&&r[k-1].pinned)
;if(c(i.x)>1&&T>1){let i=0;if(P){for(;i<r.length&&r[i].pinned;)i++;if(i>=r.length)return void e(0)}
let n=w.getTabRange(k-i,T-i,T)
;if(z=n[1]-n[0],z>20&&f.ne()&&t<3)return void f.P("removeTab",z).then(l.removeTab.bind(null,e,2,r));z>1&&(M=i+n[0],
j=i+n[1])}else if(d){let l=r.filter(e=>e.highlighted&&e!==$&&!(P&&e.pinned)),i=d==="no-current"||P&&$.pinned
;if(z=l.length+1,z>1&&(i||z<T)&&n.Me.remove(l.map(e=>e.id),n.g),i)return void e(z>1)}else{
if(P&&$.pinned)return void e(0);if(i.$.filter&&w.oe($,[$],i.$.filter).length===0)return void e(0)}
if(!M&&z>=T&&(i.$.mayClose!=null?i.$.mayClose:i.$.allow_close)!==!0)return void(t<2?n.getCurTabs(l.removeTab.bind(null,e,3)):n.Be.getAll(I.bind(null,e,$,r)))
;if(t<2){if(h){let e=w.Ve();e>=0&&(y=n.ye(n.tabsGet,e))}else(x||b&&M>0)&&(y=n.ye(n.Me.query,{windowId:$.windowId,
index:b?M-1:M+1}).then(e=>e&&e[0]));if(y)return void y.then(i=>{i&&i.windowId===$.windowId&&n.$e(i)?n.Oe($.id,l=>{
l&&n.selectTab(i.id),e(l)}):n.getCurTabs(l.removeTab.bind(null,e,3))})}let A=T;if(z>=T);else if(_){
let e=!h&&j<T&&!i.ze.has(r[j].id)?r[j]:r.filter((e,l)=>(l<M||l>=j)&&i.ze.has(e.id)).sort(m.He.Ae)[0];A=e?r.indexOf(e):T
}else if(b||x){let e=A=b?M>0?M-1:j:j<T?j:M-1;for(;e>=0&&e<T&&(e<M||e>=j)&&!n.$e(r[e]);)e+=e<M?-1:1;A=e>=0&&e<T?e:A}
if(A>=0&&A<T){let l=r[A].id;if(Math.min(j,r.length)-Math.max(0,M)==1)return n.Oe($.id,i=>{i&&n.selectTab(l),e(i)}),
void n.selectTab(l);n.selectTab(l)}g($,r,M,j,e)};let I=(e,l,t,r)=>{let o,d,u=!1;r=r.filter(e=>e.type==="normal"),
i.$.keepWindow==="always"?u=!r.length||r.some(e=>e.id===l.windowId):r.length<=1?(u=!0,
(d=r[0])&&(d.id!==l.windowId?u=!1:d.incognito&&!n.w(i.newTabUrl_f)&&(o=d.id))):l.incognito||(r=r.filter(e=>!e.incognito)).length===1&&r[0].id===l.windowId&&(o=r[0].id,
u=!0),u&&n.tabsCreate({index:t.length,url:"",windowId:o},f.getRunNextCmdBy(3)),g(l,t,0,t.length,u?null:e)
},g=(e,l,t,r,o)=>{let d=Math.max(0,l.indexOf(e));n.Oe(e.id,o||n.g);let u=l.slice(d+1,r),f=l.slice(t,d)
;i.x<0&&([u,f]=[f,u]),u.length>0&&n.Me.remove(u.map(e=>e.id),n.g),f.length>0&&n.Me.remove(f.map(e=>e.id).reverse(),n.g)}
;l.toggleMuteTab=e=>{let l,t=i.$.filter,r=i.$.currentWindow,o=i.$.others,f=o!=null?o:i.$.other
;if(!(i.$.all||r||t||f))return void n.getCurTab(([l])=>{let t=!n.isTabMuted(l),r=i.$.mute!=null?!!i.$.mute:t
;r===t&&n.tabsUpdate(l.id,{muted:r}),d.showHUD(u.A(r?"muted":"unmuted")),e(1)});let a=r=>{
let o=f?i.O?i.O.s.m:i.he:-1,u=r.length===0||o!==-1&&r.length===1&&r[0].id===o
;if(i.$.mute!=null)u=!!i.$.mute;else for(let e of r)if(e.id!==o&&!n.isTabMuted(e)){u=!0;break}
if(t&&!(r=w.oe(l,r,t)).length)return void e(0);let a={muted:u}
;for(let e of r)e.id!==o&&u!==n.isTabMuted(e)&&n.tabsUpdate(e.id,a)
;d.showHUDEx(i.O,u?"mute":"unmute",0,[[o===-1?"All":"Other"]]),e(1)},s=w.getNecessaryCurTabInfo(t),v=r&&i.we>=0?{
audible:!0,windowId:i.we}:{audible:!0};s?s.then(e=>{l=e,n.Me.query(v,a)}):n.Me.query(v,a)},l.togglePinTab=(e,l,t)=>{
let r=i.$.filter,o=l[1],d=e[o];e=r?w.oe(d,e,r):e;let u=!r||e.includes(d)?!d.pinned:!!e.find(e=>!e.pinned),a={pinned:u
},s=u?0:1,v=0;if(c(i.x)>1&&u)for(;e[v].pinned;)v++
;let m=w.getTabRange(o-v,e.length-v,e.length),p=v+m[s]-s,b=v+m[1-s]-s,I=[]
;for(;p!==b;p+=u?1:-1)(u||e[p].pinned)&&I.push(e[p])
;b=I.length,b?(b<=30||!f.ne()?Promise.resolve(!1):f.P("togglePinTab",b)).then(e=>{e&&(I.length=1)}).then(()=>{
let e=I.includes(d)?d.id:I[0].id;for(let l of I)n.tabsUpdate(l.id,a,l.id===e?n.xe(t):n.g)}):t(0)},
l.toggleTabUrl=(e,l)=>{let a=n.getTabUrl(e[0]),v=i.$.reader,w=i.$.keyword
;if(a.startsWith(i.Ze.U))return d.complainLimits(u.A(v?"noReader":"openExtSrc")),void l(0);if(v&&w){let l=o.Ne({u:a})
;l&&l.k===w?(f.overrideCmdOptions({keyword:""}),s.openUrlWithActions(l.u,0,!0,e)):(a=r._r(l&&i.$.parsed?l.u:a,w),
s.openUrlWithActions(a,9,!0,e))
}else v?i.el&&t.an.test(a)?(a=a.startsWith("read:")?t.rl(a.slice(a.indexOf("?url=")+5)):`read://${new URL(a).origin.replace(/:\/\/|:/g,"_")}/?url=${t.ql(a)}`,
s.openUrlWithActions(a,9,!0,e)):(d.complainLimits(u.A("noReader")),
l(0)):i.$.viewSource?(a=a.startsWith("view-source:")?a.slice(12):"view-source:"+a,
s.openUrlWithActions(a,9,!0,e)):s.openUrlWithActions("$S",3,!0,e)},l.Pe=(e,l,t,r)=>{let o,d=e.id,u=l===1
;if(l&&n.Ie()&&(r!==!1||n.getGroupId(e)==null)){let l=0,i=-1,t=()=>{let e=n.g()
;if(e)return n.Ie().restore(null,f.getRunNextCmdBy(0)),i>=0&&n.Me.remove(i),i=0,e;l+=1,l>=5||setTimeout(()=>{
n.tabsGet(d,t)},50*l*l)};return u&&n.tabsCreate({url:"about:blank",active:!1,windowId:e.windowId},e=>{
i?i=e.id:n.Me.remove(e.id)}),void n.Oe(d,e=>{e&&n.tabsGet(d,t)})}{let l=n.isTabMuted(e);o=e=>{
l!==n.isTabMuted(e)&&n.tabsUpdate(e.id,{muted:l})}}let a={windowId:e.windowId,index:e.index,url:n.getTabUrl(e),
active:e.active,pinned:e.pinned,openerTabId:e.openerTabId};t&&(a=Object.assign(t,a)),a.index!=null&&a.index++,
n.openMultiTabs(a,1,!0,[null],r,e,e=>{e&&o&&o(e),e?f.runNextOnTabLoaded(i.$,e):f.runNextCmd(0)}),n.Me.remove(d)},
l.Te=(e,l,r)=>{let o=null;return(async()=>{var r;let d=l?l.window?n.selectFrom(l.window.tabs):l.tab:null;if(d&&(o=d),
!d||!(l.window||d.windowId!==e&&d.index===0))return;let u=d.url,f=/^(file|ftps?|https?)/.test(u)||u.startsWith(i.ll)
;if(!f&&u.startsWith(location.protocol)&&!u.startsWith(i.ll)){let e=new URL(u).host;f=!!e&&i.uu.get(e)===!0}if(!f)return
;let a=l.window;if(!a){let e=await n.ye(n.Me.query,{windowId:d.windowId,index:1})
;a=e&&e.length?null:await n.ye(n.Be.get,d.windowId)}if(!a||a.type==="popup")return;let s=n.ye(n.Me.create,{
url:"about:blank",windowId:a.id}),{Ge:v,Le:w}=t.Xe();n.Oe(d.id,w);let m=await v,c=await s
;o=m&&((r=await n.ye(n.Ie().restore))===null||r===void 0?void 0:r.tab)||null,c&&await n.Me.remove(c.id)
})().then(async()=>(r&&(await n.ye(n.tabsUpdate,r,{active:!0}),i.we!==e&&await n.ye(n.Be.update,e,{focused:!0})),o))},
l.toggleWindow=e=>{let l=i.$.target,t=i.$.states;t=typeof t=="string"?t.trim().split(/[\s,;]+/):t,
t=t||["normal","maximized"];let r=i.we,o=l&&l!=="current"&&l!=="all"?i.jn:r
;o<0?e(0):n.ye(n.Be.get,o).then(e=>e||n.ye(n.Be.get,i.we)).then(async d=>{if(!d)return void e(0)
;let u=l==="other"||l==="others"?await n.je(n.Be.getAll).then(e=>(e=e===null||e===void 0?void 0:e.filter(e=>e.id!==r&&e.id!==o&&e.type!=="devtools"))?e.map(e=>e.id):[]):[],f={}
;if(t instanceof Array){let e=["normal","maximized","fullscreen","minimized"];t=t.map(l=>{var i
;return(i=e.find(e=>e.startsWith(l)))!==null&&i!==void 0?i:"current keep".includes(l)?"":" "}).filter(e=>e!==" ")
;let l=i.x>1?i.x-2:t.indexOf(d.state)+1,n=t.length>0&&t[l%t.length]||d.state;(n!==d.state||u.length>0)&&(f.state=n)}
Object.keys(f).length&&n.Be.update(o,f,n.xe(e));for(let e of u)n.Be.update(e,f,n.g)})}});