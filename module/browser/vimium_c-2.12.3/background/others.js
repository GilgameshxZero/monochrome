"use strict"
;__filename="background/others.js",define(["require","exports","./store","./browser","./utils","./settings","./i18n","./normalize_urls","./normalize_urls","./open_urls"],(e,t,n,l,i,o,r,u,s,c)=>{
Object.defineProperty(t,"__esModule",{value:!0}),n.pl.showActionIcon=e=>{let t=l.t.action;t?(n.r=e,
l.import2("/background/action_icon.js").then(e=>{e.e()}),Promise.resolve(r.Ce("name")).then(n=>{
e||(n+="\n\n"+r.Ce("noActiveState")),t.setTitle({title:n})})):n.pl.showActionIcon=void 0},o.vl.then(()=>{
n.z.showActionIcon?n.pl.showActionIcon(!0,"showActionIcon"):n.o=n.u}),(()=>{function e(){w&&(w.Ci=null),y=P=w=_=null,
k&&clearTimeout(k),$&&clearTimeout($),g=F=S=k=$=0,T="",i.Gl()}function t(){let n=Date.now()-g
;if(n>5e3||n<-5e3)return e();k=setTimeout(t,3e4)}function o(){$=0;let e=w;if(e&&!e.Fi&&(w=null,e.Ci)){let t=Date.now()
;return t<g&&(g=t-1e3),m(e.Si,e.Ci)}}function a(e,t,o,r,u){if(!e.Ci)return void(w===e&&(w=null));w=null
;let c,a=t.length>0?t[0]:null;F=r,S=u,P=[];let m=new Set,f=` ${n.Ke.t} `.includes(" type-letter ")
;for(let e=0,l=o?0:1,r=t.length;e<r;e++){
let r=t[e],{title:u,u:c,e:a}=r,d=c,g="",p=r.s!=null,b=!(o&&e===0||(a==="tab"?r.s===n.he:a!=="history"||p));d=i.Ul(d,1),
d.startsWith("file")&&(d=s.fn(d)),d=d.replace(/%20/g," "),m.has(d)?d=`:${e+l} ${d}`:m.add(d),b&&(g=` ~${e+l}~`),
g=(u||f?(u?u+" <dim>":"<dim>")+(f?`[${r.e[0].toUpperCase()}] `:"")+(u?"-</dim> <url>":"</dim><url>"):"<url>")+r.textSplit+"</url>"+(g&&`<dim>${g}</dim>`)
;let h={content:d,description:g};b&&(h.deletable=!0),(b||p)&&(y||(y=new Map),y.has(d)||y.set(d,{ji:a,_l:p?r.s:null,Jl:c
})),P.push(h)}if(_=e.Si,o)if(a.e==="search"){let e=a.p;c=(e&&`<dim>${i.Ur(e)+p}</dim>`)+`<url>${a.textSplit}</url>`,C=2,
(a=t[1])&&a.e==="math"&&(P[1].description=`${a.textSplit} = <url><match>${a.t}</match></url>`)}else C=3,
c=P[0].description;else C!==1&&(c=`<dim>${h}</dim><url>%s</url>`,C=1);o&&(T=t[0].u,
y&&P.length>0&&T!==P[0].content&&y.set(T,y.get(P[0].content)),P.shift()),c&&l.t.omnibox.setDefaultSuggestion({
description:c}),e.Ci(P),i.Gl()}function m(e,l){if(e=D(e),w){let t=e===w.Si;if(w.Ci=t?l:null,t)return}
if(e===_)return void(P&&l(P));if(F===1&&e.startsWith(_))return void l([]);if(w={Ci:l,Si:e,Fi:!1},$)return
;let i=Date.now(),r=n.Ke.i+g-i;if(r>30&&r<3e3)return void($=setTimeout(o,r));w.Fi=!0,k||(k=setTimeout(t,3e4)),g=i,
y=P=null,T="";let u=F<2||!e.startsWith(_)?0:F===3?e.includes(" ")?0:8:S;n.xl.er(e,{o:"omni",t:u,r:j,c:M,f:1
},a.bind(null,w))}function f(e,t,l){
return e?e[0]===":"&&/^:([1-9]|1[0-2]) /.test(e)&&(e=e.slice(e[2]===" "?3:4)):e=u._r(""),
e.slice(0,7).toLowerCase()==="file://"&&(e=i.ii().test(e)?u.gn("show image "+e,!1,0):e),l!=null?n.hn[7]({s:l
}):c.openUrlReq({u:e,r:t==="currentTab"?0:t==="newForegroundTab"?-1:-2})}let d=l.t.omnibox;if(!d)return
;let g,p=": ",b=!1,h="Open: ",v=d.onDeleteSuggestion,_=null,T="",w=null,$=0,y=null,M=128,P=null,k=0,C=0,F=0,S=0,j=12,D=e=>{
if(e=e.trim().replace(i.q," "),n.Wn.actions.includes("icase")){let t=/^:[WBH] /.test(e)?3:0
;e=t?e.slice(0,t)+e.slice(t).toLowerCase():e.toLowerCase()}return e};d.onInputStarted.addListener(()=>{
if(l.getCurWnd(!1,e=>{let t=e&&e.width;M=t?Math.floor((t-160)/7.72):128}),b||(b=!0,
Promise.resolve(r.Ce("i18n")).then(()=>{r.ro()!=="en"&&Promise.resolve(r.A("colon")).then(e=>{p=e+r.A("NS")||p,
h=r.A("OpenC")||h})})),k)return e()}),d.onInputChanged.addListener(m),d.onInputEntered.addListener(function t(l,i){
let r=w;if(r&&r.Ci){if(r.Ci=t.bind(null,l,i),r.Fi)return;return $&&clearTimeout($),o()}if(l=D(l),
_===null&&l)return n.xl.er(l,{o:"omni",t:0,r:3,c:M,f:1},(e,t)=>t?f(e[0].u,i,e[0].s):f(l,i));T&&l===_&&(l=T)
;let u=y===null||y===void 0?void 0:y.get(l),s=u===null||u===void 0?void 0:u._l;return e(),f(u?u.Jl:l,i,s)}),
v.addListener(e=>{
let t=parseInt(e.slice(e.lastIndexOf("~",e.length-2)+1))-1,l=P&&P[t].content,i=l&&y?y.get(l):null,o=i&&i.ji;o?n.hn[25]({
t:o,s:i._l,u:i.Jl
}):console.log("Error: want to delete a suggestion but no related info found (may spend too long before deleting).")})
})(),(()=>{let e=0,t=!1,i=0,o=n.el?"edge:":"chrome:",r=n.el?"":o+"//newtab/",u=n.el?"":o+"//new-tab-page/",s=t=>{
t.frameId===0&&t.url.startsWith(o)&&e&(n.el||!t.url.startsWith(r)&&!t.url.startsWith(u)?1:2)&&!i&&l.s(t.tabId)};l.v([{
origins:["chrome://*/*"]},n.el?null:{origins:["chrome://new-tab-page/*"]}],function c(a){if(e=(a[0]?1:0)+(a[1]?2:0),
e&1&&!n.z.allBrowserUrls&&(e^=1),t!==!!e){let e=l.N();if(!e)return!1
;e.onCommitted[(t=!t)?"addListener":"removeListener"](s)}i=i||e&&setTimeout(()=>{e?l.Me.query({url:o+"//*/*"},t=>{i=0
;for(let i of t||[])!n.a.has(i.id)&&e&(i.url.startsWith(r)||i.url.startsWith(u)?2:1)&&l.s(i.id);return l.g()}):i=0
},120),e&&!n.pl.allBrowserUrls&&(n.pl.allBrowserUrls=c.bind(null,a,!1))})
})(),n.il&&Promise.all([n.il,o.vl]).then(([e])=>{
let t=e&&e.reason,s=t==="install"?"":t==="update"&&e.previousVersion||"none";s!=="none"&&setTimeout(()=>{if(l.Me.query({
status:"complete"},e=>{let t=/^(file|ftps?|https?):/;for(let i of e)t.test(i.url)&&!n.a.has(i.id)&&l.s(i.id)}),
console.log("%cVimium C%c has been %cinstalled%c with %o at %c%s%c.","color:red","color:auto","color:#0c85e9","color:auto",e,"color:#0c85e9",i.now(),"color:auto"),
n.Ze.ls&&console.log("Sorry, but some commands of Vimium C require the permission to run in incognito mode."),!s){
let e=()=>{n.os||n.Di?++t<25&&setTimeout(e,200):c.Je({u:n.Ze.Qe+"#commands"})},t=0;return void e()}
if(o.gl("vomnibarPage"),parseFloat(s)>=parseFloat(n.Ze.fo)&&(s>="1.99.98"||n.Ze.fo<"1.99.98"))return
;if(o.gl("newTabUrl"),!n.z.notifyUpdate)return;let t="vimium_c-upgrade-notification"
;Promise.all([r.A("Upgrade"),r.A("upgradeMsg",[n.Ze.aa]),r.A("upgradeMsg2"),r.A("clickForMore")]).then(([e,i,o,r])=>{
let s={type:"basic",iconUrl:n.ll+"icons/icon128.png",title:"Vimium C "+e,message:i+o+"\n\n"+r};n.Tn>=70&&(s.silent=!0)
;let a=l.t.notifications;a&&a.create(t,s,e=>{let n;if(n=l.g())return n;t=e||t,a.onClicked.addListener(function e(t){
t==t&&(a.clear(t),c.Je({u:u._r("vimium://release")}),a.onClicked.removeListener(e))})})})},500)}),setTimeout(()=>{
let e=globalThis.document;e&&e.body&&(e.body.innerText=""),i.Gl()},1e3)});