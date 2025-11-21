"use strict"
;__filename="background/all_commands.js",define(["require","exports","./utils","./store","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tab_commands","./tools"],(e,t,l,o,n,i,r,a,u,s,d,f,c,m,p,v,b,h,y,k)=>{
Object.defineProperty(t,"__esModule",{value:!0
}),o.y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,1,0,0,0,0,2,0,1,0,2,2,0,0,1,0,0,1,0,0,1,0,2,1,1,0,0,0,0,0,0],
o.M=[()=>{let e=o.$.for||o.$.wait,t=o.$.isError?0:1;if(e!=="ready"){
if(e=e?Math.abs(e==="count"||e==="number"?o.x:e|0):c.hasFallbackOptions(o.$)?Math.abs(o.x):0,e){e=Math.max(34,e)
;let t=o.$.block;t=t!=null?!!t:e>17&&e<=1e3,t&&o.O&&o.O.postMessage({N:14,t:e+50})}c.runNextCmdBy(o.x>0?t:1-t,o.$,e)
}else c.runNextOnTabLoaded({},null,()=>{c.runNextCmdBy(t,o.$,1)})},()=>{
let e=(o.$.$then||"")+"",t=(o.$.$else||"")+"",l=o.x
;if(!e&&!t)return void u.showHUD('"confirm" requires "$then" or "$else"')
;let n=o.$.question||o.$.ask||o.$.text||o.$.value,i=n?null:[e,t].map(e=>e.split("#",1)[0].split("+").slice(-1)[0]),r=Math.abs((o.$.minRepeat||0)|0),a=[o.$.$f,o.$.$retry]
;(Math.abs(l)<r?Promise.resolve():c.P([i?i[0]===i[1]?e:i[0].replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""):[n+""]],l)).then(n=>{
(n?t:e)&&setTimeout(()=>{o.x=l,o.I(n?t:e,o.O,{c:a[0],r:a[1],u:0,w:0},n?1:l)},0)})},()=>{
let e=o.$.rel,t=!!o.$.absolute,n=e?(e+"").toLowerCase():"next",r=o.$.isNext!=null?!!o.$.isNext:!n.includes("prev")&&!n.includes("before"),a=p.T(o.$)
;p.doesNeedToSed(8192,a)||t?Promise.resolve(u.j(o.O&&u.C().R)).then(e=>{
let u=r?o.x:-o.x,s={},d=e&&o.S(e,8192,a),[f,m]=d?v.goToNextUrl(d,u,t):[!1,e];if(f&&m){
let e=s.F?i.K(m.trim().split(l.q),s.F,3):m;o.x=u,o.$.reuse==null&&c.overrideOption("reuse",0),c.overrideCmdOptions({
url_f:e,goNext:!1}),v.openUrl()}else t?c.runNextCmd(0):b.framesGoNext(r,n)}):b.framesGoNext(r,n)},()=>{var e,t
;let l=o.$.key,n=l&&typeof l=="string"?f.D(l).trim():""
;n=n.length>1||n.length===1&&!/[0-9a-z]/i.test(n)&&n===n.toUpperCase()&&n===n.toLowerCase()?n:""
;let i=(t=(e=o.$.hideHUD)!==null&&e!==void 0?e:o.$.hideHud)!==null&&t!==void 0?t:o.z.hideHud,r=i==="auto"?!n:i
;Promise.resolve(d.A("globalInsertMode",[n&&": "+(n.length===1?`" ${n} "`:`<${n}>`)])).then(e=>{
c.sendFgCmd(7,!r,Object.assign({h:r?null:e,k:n||null,i:!!o.$.insert,p:!!o.$.passExitKey,r:+!!o.$.reset,
bubbles:!!o.$.bubbles,u:!!o.$.unhover},c.parseFallbackOptions(o.$)||{})),r&&r!=="force"&&r!=="always"&&u.showHUD(e,1)})
},b.nextFrame,b.parentFrame,b.performFind,e=>{
let t=(o.$.key||"")+"",l=t==="darkMode"?"d":t==="reduceMotion"?"m":a.B[t],n=l?o.V[l]:0,i=d.A("quoteA",[t]),r=o.$.value,s=typeof r=="boolean",f=null,m=""
;l?typeof n=="boolean"?s||(r=null):s||r===void 0?f=s?"notBool":"needVal":typeof r!=typeof n&&(m=JSON.stringify(n),
f="unlikeVal",m=m.length>10?m.slice(0,9)+"\u2026":m):f=t in a.E?"notFgOpt":"unknownA",Promise.resolve(i).then(t=>{
if(f)u.showHUD(d.A(f,[t,m]));else{if(r=a.W(l,r),l==="c"||l==="n"){let e=""
;for(let t of r.replace(/\s/g,""))e.includes(t)||(e+=t);r=e}let o=u.C(),n=o.d;for(let e of o.J){let o=e===n
;c.portSendFgCmd(e,8,o,{k:l,n:o?t:"",v:r},1)}e(1)}})},()=>{
o.O.s.Q!==0||o.O.s.b&262144?c.sendFgCmd(17,!0,o.$):b.initHelp({a:o.$},o.O)},()=>{let e=c.copyCmdOptions(l.i(),o.$)
;if(!e.esc){let t=e.key,n=(e.type||(t?"keydown":""))+"",i=e.class,r=e.delay,{xy:a,direct:s,directOptions:d}=e
;if(i=i&&i[0]==="$"?i.slice(1):(i&&i[0].toUpperCase()+i.slice(1).replace(/event$/i,"")||(n.startsWith("mouse")||n.includes("click")?"Mouse":"Keyboard"))+"Event",
a=/^(Mouse|Pointer|Wheel)/.test(i)&&a==null?[.5,.5]:a,a=e.xy=l.Z(a),a&&!a.n&&(a.n=o.x,o.x=1),e.click)n="click",
e.c=1;else if(o.x<0)for(let e of"down up;enter leave;start end;over out".split(";")){let[t,l]=e.split(" ")
;n=n.replace(t,l)}if(!n)return u.showHUD('Require a "type" parameter'),void c.runNextCmd(0)
;let f=e.init,m=f&&typeof f=="object"?f:e,p={};r=r&&+r>=0?Math.max(0|+r,1):null
;for(let t of["bubbles","cancelable","composed"]){let l=m!==e&&t in m?m[t]:e[t]
;p[t]=l!==!1&&(l!=null||n!=="mouseenter"&&n!=="mouseleave")}let v={e:1,c:1,t:1,class:1,type:1,key:1,return:1,delay:1,
esc:1,click:1,init:1,xy:1,match:1,direct:1,directOptions:1,clickable:1,exclude:1,evenIf:1,scroll:1,typeFilter:1,
textFilter:1,clickableOnHost:1,excludeOnHost:1,closedShadow:1,trust:1,trusted:1,isTrusted:1,superKey:1,target:1,
targetOptions:1};for(let t of m===e?"alt ctrl meta shift super".split(" "):[])t in e&&!(t+"Key"in e)&&(e[t+"Key"]=e[t],
delete e[t]);e.superKey&&(o.G?p.ctrlKey=!0:p.metaKey=!0,delete e.superKey)
;for(let[t,l]of Object.entries(m))!t||m===e&&t[0]==="$"||v.hasOwnProperty(t)||(p[m===e?t.startsWith("o.")?t.slice(2):t:t.startsWith("$")?t.slice(1):t]=l,
m===e&&delete e[t]);let b=null;if(t&&(typeof t=="object"||typeof t=="string")){
typeof t=="string"&&(b=/[^\w]/.exec(t.slice(1)));let e=typeof t=="object"?t:b?t.split(b[0]):[t]
;if(e[0]&&(e.length==1||!e[1]||+e[1]>=0)){b&&!e[0]&&(e[0]=t[0],e[1]||e.splice(1,1))
;let l=e[0],o=/^[a-z]$/i.test(l),i=!o&&l>="0"&&l<="9"&&l.length===1,r=l.toLowerCase(),a=e[1]&&0|+e[1]?0|+e[1]:o?r.charCodeAt(0)-(n!=="keypress"||l!==r?32:0):i?l.charCodeAt(0)-0:l==="Space"?32:0
;p.key=l==="Space"?" ":l==="Comma"?",":l==="Slash"?"/":l==="Minus"?"-":l[0]==="$"&&l.length>1?l.slice(1):l,
a&&m.keyCode==null&&(p.keyCode=a),
a&&m.which==null&&(p.which=a),(e.length>=3&&e[2]||m.code==null)&&(p.code=e[2]||(o?"Key"+l.toUpperCase():i?"Digit"+l:l))}
}e.type=n,e.class=i,e.init=p,e.delay=r,e.direct=s&&typeof s=="string"?s:"element,hover,scroll,focus",
d&&!d.search&&(d.search="doc"),e.directOptions=d||{search:"doc"},e.e=`Can't create "${i}#${n}"`,
e.t=n.startsWith("key")&&!(!e.trust&&!e.trusted&&(e.isTrusted||m.isTrusted)!=="force")}c.portSendFgCmd(o.O,16,!1,e,o.x)
},()=>{b.showVomnibar()},b.L,b.enterVisualMode,e=>{
let t=o.$.id,l=t!=null&&t+""||o.$.folder||o.$.path,i=((o.$.position||"")+"").toLowerCase(),r=!!o.$.all
;if(!l||typeof l!="string")return u.showHUD('Need "folder" to refer a bookmark folder.'),void e(0)
;o.X(l,t!=null&&!!(t+"")).then(t=>{if(!t)return e(0),void M(t===!1&&'Need valid "folder"')
;let l=t.u!=null,a=l?t.Y:t.ee,s=i==="begin"?0:i==="end"?-1:i==="before"?l?t.te:0:l&&i==="after"?t.te+1:-1
;(!r&&o.x*o.x<2?n.getCurTab:n.le)(function t(l){if(!l||!l.length)return e(0),n.g()
;let i=n.selectIndexFrom(l),d=l[i],[f,m]=r?[0,l.length]:h.getTabRange(i,l.length),p=o.$.filter,v=l;if(l=l.slice(f,m),
p&&!(l=h.oe(d,l,p)).length)return void e(0);let b=l.length;if(b>20&&c.ne())c.P("addBookmark",b).then(t.bind(0,v));else{
s=s>=0?s:o.re.ie.length;for(let e of l)n.t.bookmarks.create({parentId:a,title:e.title,url:n.getTabUrl(e),index:s++},n.g)
;u.showHUD(`Added ${b} bookmark${b>1?"s":""}.`),e(1)}})})},e=>{o.$.copied!==!1?(c.overrideCmdOptions({
copied:o.$.copied||!0}),v.openUrl()):e(0)},b.captureTab,e=>{e(k.ue.ae(o.$,o.O))},e=>{let t=o.O?o.O.s.se:o.de===2
;k.ce.fe(t),u.showHUDEx(o.O,"fhCleared",0,[t?["incog"]:""]),e(1)},e=>{let t=o.O&&b.me(o.O,o.$.type,!!o.$.local)
;Promise.resolve(t).then(t=>{let l=o.$.local?o.$.all?k.ve.pe("#"):void u.be({H:21,U:0,c:2,f:c.parseFallbackOptions(o.$)
},!0,1,t):k.ve.pe();typeof l=="number"&&e(l>0?1:0)})},y.copyWindowInfo,function e(t,l,i){let r,a=o.$.$pure
;if(a==null&&c.overrideOption("$pure",a=!Object.keys(o.$).some(e=>e!=="opener"&&e!=="position"&&e!=="evenIncognito"&&e[0]!=="$")),
a)if(!(r=t&&t.length>0?t[0]:null)&&o.he>=0&&!n.g()&&i!=="dedup")n.ye(n.tabsGet,o.he).then(t=>{e(t&&[t],0,"dedup")
});else{let e=o.$.opener===!0;n.openMultiTabs(r?{active:!0,windowId:r.windowId,openerTabId:e?r.id:void 0,
index:v.newTabIndex(r,o.$.position,e,!0)}:{active:!0},o.x,o.$.evenIncognito,[null],!0,r,e=>{e&&n.selectWndIfNeed(e),
c.getRunNextCmdBy(3)(e)})}else v.openUrl(t)},(e,t)=>{h.ke(!0,1,function e(t,[l,i,r],a,s){
s&&([l,r]=h.getTabRange(i,t.length,0,1));let f=o.$.filter,m=t;t=t.slice(l,r)
;let p=n.selectFrom(t),v=(t=f?h.oe(p,t,f):t).includes(p)?t.length-1:t.length;if(!v)return void a(0)
;if(v>20&&c.ne())return void c.P("discardTab",v).then(e.bind(null,m,[l,i,r],a))
;let b=t[h.getNearArrIndex(t,p.index+(o.x>0?1:-1),o.x>0)],y=[],k=!b.discarded
;k&&(v<2||b.autoDiscardable!==!1)&&y.push(n.ye(n.Me.discard,b.id));for(let e of t)e===p||e===b||e.discarded||(k=!0,
e.autoDiscardable!==!1&&y.push(n.ye(n.Me.discard,e.id)));y.length?Promise.all(y).then(e=>{
let t=e.filter(e=>e!==void 0),l=t.length>0;u.showHUD(l?`Discarded ${t.length} tab(s).`:d.A("discardFail")),a(l)
}):(u.showHUD(k?d.A("discardFail"):"Discarded."),a(0))},e,t)},e=>{let t=o.O?o.O.s.m:o.he
;if(t<0)return u.complainLimits(d.A("dupTab")),void e(0);let l=o.$.active===!1;n.ye(n.Me.duplicate,t).then(i=>{
i?(l&&n.selectTab(t,n.g),l?e(1):c.runNextOnTabLoaded(o.$,i),o.x<2||n.tabsGet(t,e=>{n.openMultiTabs({url:n.getTabUrl(e),
active:!1,windowId:e.windowId,pinned:e.pinned,index:e.index+2,openerTabId:e.id},o.x-1,!0,[null],!0,e,null)})):e(0)}),
l&&n.selectTab(t,n.g)},e=>{e.length&&b.framesGoBack({s:o.x,o:o.$},null,e[0])},e=>{
let t=!!o.$.absolute,l=o.$.filter,i=o.$.wrap!==!1,r=b.ge(),a=a=>{let u=o.x,s=n.selectFrom(a),d=a.length
;if(l&&!(a=h.oe(s,a,l)).length)return void e(0)
;let f=a.length,m=h.getNearArrIndex(a,s.index,u<0),p=t?u>0?Math.min(f,u)-1:Math.max(0,f+u):Math.abs(u)>d*2?u>0?f-1:0:m+u
;if(p=i?p>=0?p%f:f+(p%f||-f):p>=f?f-1:p<0?0:p,a[0].pinned&&o.$.noPinned&&!s.pinned&&(u<0||t)){let l=1
;for(;l<f&&a[l].pinned;)l++;if(f-=l,f<1)return void e(0);t||Math.abs(u)>d*2||!i?p=t?Math.max(l,p):p||l:(p=m-l+u,
p=p>=0?p%f:f+(p%f||-f),p+=l)}let v=a[p],y=!v.active
;y?n.selectTab(v.id,r?b.blurInsertOnTabChange:c.getRunNextCmdBy(1)):e(y)},u=t=>{h.ke(!0,1,a,t||[],e,null)}
;t?o.x!==1||l?u():n.ye(n.Me.query,{windowId:o.we,index:0}).then(e=>{e&&e[0]&&n.$e(e[0])?a(e):u()
}):Math.abs(o.x)===1?n.ye(n.getCurTab).then(u):u()},()=>{var e
;o.$.type!=="frame"&&o.O&&o.O.s.Q&&(o.O=((e=u.C())===null||e===void 0?void 0:e.R)||o.O);let t={H:5,U:0,p:o.x,
t:o.$.trailingSlash,r:o.$.trailing_slash,s:p.T(o.$),e:o.$.reloadOnRoot!==!1},l=u.be(t);Promise.resolve(l||"").then(()=>{
typeof t.e=="object"&&c.getRunNextCmdBy(2)(t.e.p!=null||void 0)})},y.joinTabs,b.mainFrame,(e,t)=>{
let l=n.selectIndexFrom(e);if(e.length>0&&(o.x<0?(o.x<-1?l:e[l].index)===0:o.x>1&&l===e.length-1))return void t(0)
;let i=o.$.group,r=i!=="ignore"&&i!==!1;h.ke(!0,1,l=>{
let i=n.selectIndexFrom(l),a=l[i],u=a.pinned,s=Math.max(0,Math.min(l.length-1,i+o.x))
;for(;u!==l[s].pinned;)s-=o.x>0?1:-1;if(s!==i&&r){let e=n.getGroupId(a),t=n.getGroupId(l[s])
;if(t!==e&&(Math.abs(o.x)===1||e!==n.getGroupId(l[o.x>0?s<l.length-1?s+1:s:s&&s-1]))){
for(e!==null&&(i>0&&n.getGroupId(l[i-1])===e||i+1<l.length&&n.getGroupId(l[i+1])===e)&&(s=i,t=e);s+=o.x>0?1:-1,
0<=s&&s<l.length&&n.getGroupId(l[s])===t;);s-=o.x>0?1:-1}}s===i&&a.active?t(0):n.Me.move((a.active?a:e[0]).id,{
index:l[s].index},n.xe(t))},e,t,r?t=>n.getGroupId(e[0])===n.getGroupId(t):null)
},y.moveTabToNewWindow,y.moveTabToNextWindow,()=>{v.openUrl()},(e,t)=>{h.ke(!o.$.single,0,y.reloadTab,e,t)},(e,t)=>{
h.ke(!1,1,(e,[t],l)=>{n.Oe(e[t].id,l)},e,t)},y.removeTab,e=>{function t(l){let a=l;if(!a||a.length===0)return n.g()
;let u=r?a.findIndex(e=>e.id===o.he):-1,s=u>=0?u:n.selectIndexFrom(a),d=o.$.noPinned,f=o.$.filter,m=a[s];i>0?(++s,
a=a.slice(s,s+i)):(d=d!==null&&d!==void 0?d:s>0&&a[0].pinned&&!a[s-1].pinned,
i<0?a=a.slice(Math.max(s+i,0),s):(a=a.slice(0)).splice(s,1)),d&&(a=a.filter(e=>!e.pinned)),f&&(a=h.oe(m,a,f))
;let p=o.$.mayConfirm
;p&&a.length>(typeof p=="number"?Math.max(p,5):20)&&c.ne()?c.P("closeSomeOtherTabs",a.length).then(t.bind(null,l)):a.length>0?(i<0&&(a=a.reverse()),
n.Oe(a.map(e=>e.id),e)):e(0)}let l=o.$.others,i=(l!=null?l:o.$.other)?0:o.x,r=i===0&&o.$.acrossWindows
;r?n.Me.query({},t):h._e(i,t)},(e,t)=>{e.length<=0?t(0):y.Pe(e[0],void 0,void 0,o.$.group!==!1)},e=>{let t=n.Ie()
;if(!t)return e(0),u.complainNoSession();let l=!!o.$.one,i=+t.MAX_SESSION_RESULTS||25,r=Math.abs(o.x);if(r>i){
if(l)return e(0),void u.showHUD(d.A("indexOOR"));r=i}if(!l&&r<2&&(o.O?o.O.s.se:o.de===2)&&!o.$.incognito)return e(0),
u.showHUD(d.A("notRestoreIfIncog"));let a=o.$.active!==!1,s=o.$.currentWindow===!0,f=o.O?o.O.s.m:o.he,m=o.we,p=t=>{
t!==void 0?y.Te(m,t,a?null:f).then(t=>{a&&t?c.runNextOnTabLoaded(o.$,t):e(1)}):e(0)};(async()=>{
let o,v=Math.max(r*1.2|0,2),b=!1,h=s?e=>!!e.tab&&e.tab.windowId>0&&e.tab.windowId===m:null
;if(s&&r<=Math.min(i,25)&&(o=await n.je(t.getRecentlyClosed,{maxResults:r
}),o.some(e=>!(!e.tab||e.tab.windowId>0))&&(c.overrideOption("currentWindow",!1),s=!1),b=o.length>r,o=h?o.filter(h):o,
!b&&o.length<r&&v<=Math.min(i,25)&&(o=await n.je(t.getRecentlyClosed,{maxResults:v}),o=h?o.filter(h):o)),
(!o||!b&&o.length<r)&&(o=await n.je(t.getRecentlyClosed,r<=25&&!s?{maxResults:r}:{}),o=h?o.filter(h):o),
o.length<(l?r:1))return e(0),u.showHUD(d.A("indexOOR"))
;r===1?n.ye(t.restore,s?o[0].tab.sessionId:null).then(p):Promise.all(o.slice(l?r-1:0,r).map(e=>n.ye(t.restore,(e.tab||e.window).sessionId))).then(e=>{
p(l?e[0]:null)}),a||n.selectTab(f,n.g)})()},()=>{o.$.$seq==null?m.runKeyWithCond():m.runKeyInSeq(o.$.$seq,o.x,null)
},e=>{let t=(o.$.keyword||"")+"",l=r.Ne({u:n.getTabUrl(e[0])})
;if(!l||!t)return void(c.runNextCmd(0)||u.showHUD(d.A(t?"noQueryFound":"noKw")));let a={},s=p.T(o.$);l.u=o.S(l.u,0,s,a),
a.F!=null&&(t=a.F);let f=i.K(l.u.split(" "),t,2),m=o.$.reuse;c.overrideCmdOptions({url_f:f,reuse:m!=null?m:0,opener:!0,
keyword:""}),v.openUrl(e)},e=>{let t=o.$.id,l=o.$.data
;if(!t||typeof t!="string"||l===void 0)return u.showHUD('Require a string "id" and message "data"'),void e(0)
;let i=Date.now(),r=l=>{l=l&&l.message||l+"",console.log("Can not send message to the extension %o:",t,l),
u.showHUD("Error: "+l),e(0)};try{n.t.runtime.sendMessage(t,o.$.raw?l:{handler:"message",from:"Vimium C",count:o.x,
keyCode:o.Re,data:l},t=>{let l=n.g();return l?r(l):typeof t=="string"&&Math.abs(Date.now()-i)<1e3&&u.showHUD(t),
l||e(t!==!1),l})}catch(e){r(e)}},e=>{let t=o.$.text,l=typeof t=="number",n=!!o.$.silent,i=o.$.isError
;if(!t&&!l&&!n&&i==null&&o.$.$f){let l=o.$.$f;if(t=l&&l.t?d.Ce(`${l.t}`):"",!t)return void e(!1)}
n||u.showHUD(t||l?t instanceof Promise?t:t+"":d.A("needText")),e(i!=null?!!i:!!t||l)},(e,t)=>{k.ue.Se(o.$,o.x,e,t)
},y.toggleMuteTab,(e,t)=>{h.ke(!0,0,y.togglePinTab,e,t)},y.toggleTabUrl,e=>{
let t=e?e[0].id:o.O?o.O.s.m:o.he,n=((o.$.style||"")+"").trim()||"dark",i=!!o.$.current,r=o.$.enable;if(r==null){
let e=o.Fe.find(e=>e.s.m===t);if(e)return void e.postMessage({N:46,t:n,b:!i})}
let u=o.Ke.t,d=u&&` ${u} `,f=d.includes(` ${n} `)
;r=r!=null?!!r:!f,(r!==f||o.$.forced)&&(n==="dark"?s.qe(1,r,2):(u=r===f?u:r?u+n:d.replace(n," "),
u=u.trim().replace(l.q," "),o.Ke.t=u,a.De({t:u}))),c.runNextCmdBy(r?1:0,o.$,100)},b.toggleZoom,e=>{
let t=!!o.$.acrossWindows,l=!!o.$.onlyActive,i=o.$.filter,r=b.ge(),a={},s=t=>{
if(t.length<2)return l&&u.showHUD("Only found one browser window"),e(0),n.g()
;let a=o.O?o.O.s.m:o.he,s=t.findIndex(e=>e.id===a),f=s>=0?t[s]:null;if(s>=0&&t.splice(s,1),
i&&!(t=h.oe(f,t,i)).length)return void e(0)
;let c=t.filter(e=>o.ze.has(e.id)).sort(k.He.Ae),m=(t=l&&c.length===0?t.sort((e,t)=>t.id-e.id):c)[o.x>0?Math.min(o.x,t.length)-1:Math.max(0,t.length+o.x)]
;m?l?n.Be.update(m.windowId,{focused:!0},r?()=>b.blurInsertOnTabChange(m):n.xe(e)):d(m.id):e(0)},d=t=>{
n.selectTab(t,t=>(t&&n.selectWndIfNeed(t),r?b.blurInsertOnTabChange(t):n.xe(e)()))};if(o.x===1&&!l&&o.he!==-1){
let e=h.Ve();if(e>=0)return void Promise.all([n.ye(n.tabsGet,e),h.getNecessaryCurTabInfo(i)]).then(([e,l])=>{
e&&(t||e.windowId===o.we)&&n.$e(e)&&(!i||h.oe(l,[e],i).length>0)?d(e.id):t?n.Me.query(a,s):n.le(s)})}t||l?n.Me.query(l?{
active:!0}:a,s):n.le(s)},e=>{let t=o.$.newWindow;t!==!0?n.ye(n.t.permissions.contains,{
permissions:["downloads.shelf","downloads"]}).then(l=>{if(l){let t,l=n.t.downloads.setShelfEnabled;try{l(!1),
setTimeout(()=>{l(!0),e(1)},256)}catch(e){t=(e&&e.message||e)+""}
u.showHUD(t?"Can not close the shelf: "+t:d.A("downloadBarClosed")),t&&e(0)
}else t===!1&&o.O?(u.showHUD("No permissions to close download bar"),e(0)):o.M[29](e)}):o.M[29](e)},()=>{
let e=u.C(),t=!!o.$.unhover,l=o.$.suppress;for(let l of e?e.J:[]){let n={r:1,u:t};if(l===e.d){
let e=c.parseFallbackOptions(o.$);e&&Object.assign(n,e)}c.portSendFgCmd(l,7,!1,n,1)}
(c.hasFallbackOptions(o.$)?l===!0:l!==!1)&&e&&e.d.postMessage({N:14,t:150})},e=>{let t,l=o.$.$cache;if(l!=null){
let e=o.re.Ee===l[1]?l[0]:"",n=e&&(o.re.ie.find(t=>t.ee===e)||o.re.Ue.find(t=>t.ee===e))
;n?t=Promise.resolve(n):c.overrideOption("$cache",null)}let n=!!t,i=o.x,r=!1;if(!t){
let l=o.$.id,n=o.$.path,a=l!=null&&l+""||n||o.$.title
;if(!a||typeof a!="string")return u.showHUD("Invalid bookmark "+(l!=null?"id":n?"path":"title")),void e(0)
;let s=c.fillOptionWithMask(a,o.$.mask,"name",["path","title","mask","name","value"],i)
;if(!s.ok)return void u.showHUD((s.result?"Too many potential names":"No name")+" to find bookmarks");r=s.useCount,
t=o.X(s.result,l!=null&&!!(l+""))}t.then(t=>{if(t){n||r||c.overrideOption("$cache",[t.ee,o.re.Ee]);let e=t.u!=null
;c.overrideCmdOptions(e?{url:t.We||t.u}:{urls:o.re.ie.filter(e=>e.Y===t.ee).map(e=>e.We||e.u)},!0),o.x=r||!e?1:i,
v.openUrl()}else e(0),M(t===!1&&'Need valid "title" or "title"')})},y.toggleWindow];let M=e=>{
o.re.f==3?(u.showHUDEx(o.O,"bookmarksRevoked",1,[]),setTimeout(()=>{v.Je({u:o.Ze.Qe+"#optionalPermissions"})
},800)):u.showHUD(e||"The bookmark node is not found")}});