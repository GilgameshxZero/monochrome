"use strict"
;__filename="background/ports.js",define(["require","exports","./store","./utils","./browser","./exclusions","./i18n"],(e,l,t,r,n,u,o)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.si=l.fu=l.tryToKeepAliveIfNeeded_mv3_non_ff=l.getParentFrame=l.complainNoSession=l.complainLimits=l.c=l.ensuredExitAllGrab=l.showHUDEx=l.showHUD=l.safePost=l.isNotVomnibarPage=l.ensureInnerCSS=l.indexFrame=l.An=l.C=l.isExtIdAllowed=l.findCPort=l.be=l.j=l.qn=l.Gn=l.OnConnect=l.sendResponse=l.xn=void 0
;let f=t.Tn>109,i=0,s=0,a=0;l.xn=()=>{a=0};let c=(e,l)=>{if(a=0,e.H!==90)t.hn[e.H](e,l);else{let r=t.hn[e.c](e.a,l,e.i)
;r!==l&&l.postMessage({N:4,m:e.i,r})}};l.sendResponse=(e,t,r)=>{let n=l.An(e);if(n&&n.J.includes(e))try{e.postMessage({
N:4,m:t,r})}catch(e){}},l.OnConnect=(e,l)=>{if(l&128)return void b(e,l)
;let r=e.sender.documentLifecycle,o=!!r&&r!=="active",f=N(e),i=f.Jl,s=i===t.vomnibarPage_f;if(l>7||s){
if(l===999)return void(f.m>=0&&!f.Q&&n.removeTempTab(f.m,e.sender.tab.windowId,f.Jl))
;if(l&256||s)return void v(e,l,s||i===t.Ze.Jn);if(o)return void e.disconnect()}
let a,p,_,m=f.m,h=m>=0?t.a.get(m):void(m=f.m=t.getNextFakeTabId()),k=(l&9)!=1&&(l&33)!=33&&h!==void 0
;if(k&&h.rs!==null?(p=h.rs.ts,a=h.rs.f,_=a===2?3:1):(p=!u.ss||l&8?null:u.as(i,f),a=p===null?0:p?1:2,_=0),f.f=a,
l&64&&(f.b=_|=64),k&&(_|=h.b&4,l&1024&&(_|=128,h.b|=128),f.b=_),l&8)l&4096&&e.postMessage({N:1,p:_&1?p:u.as(i,f),f:_&3
}),w(h,e,l);else if(e.postMessage(l&4?{N:0,c:null,d:o,f:_,p,v:t.au}:{N:0,c:t.V,d:o,f:_,k:t.Nn,m:t.wo,p,t:t.yo,v:t.au}),
o)return void e.disconnect();e.onDisconnect.addListener(d),e.onMessage.addListener(c);let I=f.Q===0
;k?(l&2?(t.r&&h.d.s.f!==a&&t.o(m,a),h.d=e):h.d.s.b&512&&(h.d=e),I&&(h.R=e),h.J.push(e)):(t.a.set(m,{d:e,R:I?e:null,
J:[e],rs:null,b:0}),a!==0&&t.r&&t.o(m,a),h!==void 0&&g(h))};let d=e=>{let r=e.s,n=r.m,u=t.a.get(n)
;if(e===t.O&&(r.b|=512),!u)return;let o=u.J,i=o.lastIndexOf(e),s=!r.Q,a=o.length;i>=0&&(a--==1?o.length=0:o.splice(i,1),
a>0&&e===u.d&&(u.d=o[0])),
(s?i>=0:!a)&&(u.b&512?r.b|=512:t.a.delete(n),!f&&n===t.us&&l.tryToKeepAliveIfNeeded_mv3_non_ff(n))},v=(e,l,u)=>{
if(l&256){if(u)return e.s.m<0&&(e.s.m=l&8?t.getNextFakeTabId():t.O?t.O.s.m:t.he),e.s.b|=256,t.Fe.push(e),
e.onDisconnect.addListener(p),e.onMessage.addListener(c),void(l&8?l>>13!==t.iu&&e.postMessage({N:47,d:t.Ke,v:t.iu
}):e.postMessage({N:42,l:t.Ke,s:r.Kn(!1),v:t.iu}))}else e.s.m<0||e.s.Q===0||n.p(e.s.m,e.s.Q,[t.Ze.cu]);e.disconnect()
},p=e=>{let l=t.Fe,r=l.lastIndexOf(e);return r>=0&&(r===l.length-1?--l.length:l.splice(r,1)),n.g()};l.Gn=(e,l)=>{
e.postMessage({N:49,t:l.t,s:l.s})};let _=e=>{if(e.H!==92)return;let l=t.Cn(null,null);l&&(clearTimeout(l.i),
l.r&&l.r(e.r))},m=()=>{_({H:92,r:!1})};l.qn=()=>{t.Hn=null,_({H:92,r:!1}),n.t.offscreen.closeDocument(n.g)}
;let b=(e,r)=>{if(r&1024)e.disconnect();else if(r&2048)if(t.On){let n=r&4096;e.onMessage.addListener(_),l.Gn(e,t.On),
e.onDisconnect.addListener(n?l.qn:m),n&&(t.Hn=e)}else e.disconnect();else e.s=!1,e.onMessage.addListener(c)},N=e=>{
let l=e.sender,t=l.tab;return l.tab=null,e.s={Q:l.frameId||0,b:0,f:0,se:t!=null&&t.incognito,m:t!=null?t.id:-3,Jl:l.url}
},g=e=>{t.O&&t.O.s.m===e.d.s.m&&(t.O.s.b|=512);for(let l of e.J)l.s.Q&&h(l)},h=e=>{e.s.b|=512;try{
e.onDisconnect.removeListener(d),e.onMessage.removeListener(c),e.postMessage({N:15})}catch(l){return k(e),1}},k=e=>{try{
e.disconnect()}catch(e){}};l.j=(e,o,f,i)=>{var s
;return(e=e||((s=t.a.get(t.he))===null||s===void 0?void 0:s.R)||null)&&!f&&u.ss&&(o||u.mn)?e.s.Jl:new Promise(t=>{
let u=e&&e.s.Q&&r.isNotPriviledged(e)?n.N():null;e?(e.s.Q?u?u.getFrame:(e,l)=>l(null):n.tabsGet)(u?{tabId:e.s.m,
frameId:e.s.Q}:e.s.m,r=>{let u=r?r.url:"";return!u&&i&&(i.N=3,l.safePost(e,i)),t(u),n.g()
}):n.getCurTab(e=>(t(e&&e.length?n.getTabUrl(e[0]):""),n.g()))})},l.be=(e,r,n,u)=>{var o
;u||(u=t.O||((o=t.a.get(t.he))===null||o===void 0?void 0:o.R));let f=l.j(u,r,n,e)
;if(typeof f!="string")return f.then(l=>(e.u=l,l&&t.hn[e.H](e,u),l));e.u=f,t.hn[e.H](e,u)},l.findCPort=e=>{
let l=t.a.get(e&&e.s.m>=0?e.s.m:t.he);return l?l.d:null},l.isExtIdAllowed=e=>{
let l=e.id!=null?e.id:"unknown_sender",r=e.url,n=e.tab,u=t.uu,o=u.get(l);if(o!==!0&&n){let e=t.a.get(n.id),r=e?e.ou:null
;e&&(r==null||r!==l&&typeof r=="string")&&(e.ou=r==null?l:2)}
return o!=null?o:r===t.vomnibarPage_f||(console.log("%cReceive message from an extension/sender not in the allow list: %c%s","background-color:#fffbe5","background-color:#fffbe5;color:red",l),
u.set(l,!1),!1)},l.C=()=>t.a.get(t.O?t.O.s.m:t.he),l.An=e=>t.a.get(e.s.m),l.indexFrame=(e,l)=>{let r=t.a.get(e)
;for(let e of r?r.J:[])if(e.s.Q===l)return e;return null},l.ensureInnerCSS=e=>{if(e.b&8)return null;let l=t.a.get(e.m)
;return l&&(l.b|=4),e.b|=12,t.du},l.isNotVomnibarPage=(e,l)=>{let t=e.s,r=t.b
;return!(r&256||(l||r&2048||(console.warn("Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o","color:red","color:auto",t.Jl.slice(0,128),t.m),
t.b|=2048),0))},l.safePost=(e,l)=>{try{let t=e.s.b&512;return!t&&e.postMessage(l),t?0:1}catch(e){return 0}}
;let I=(e,t)=>{l.showHUD(t+"",e)};l.showHUD=(e,r)=>{if(typeof e!="string")return void e.then(I.bind(null,r))
;let n=r===14||r===15
;n&&(e.startsWith(t.Ze.U+"-")&&e.includes("://")&&(e=e.slice(e.indexOf("/",e.indexOf("/")+2)+1)||e),
e=e.length>41?e.slice(0,41)+"\u2026":e&&e+(t.vu?"\u3002":".")),t.O&&!l.safePost(t.O,{N:11,H:l.ensureInnerCSS(t.O.s),
k:n&&e?20:r||1,t:e})&&(t.O=null)},l.showHUDEx=(e,t,r,n,u)=>{if(!e)return;let f=u||o.Xl(t,n)
;typeof f=="string"?l.safePost(e,{N:11,H:l.ensureInnerCSS(e.s),k:1,d:r,t:f}):f.then(l.showHUDEx.bind(null,e,"NS",r,[]))
},l.ensuredExitAllGrab=e=>{let l={N:8};for(let t of e.J)t.s.b&4||(t.s.b|=4,t.postMessage(l));e.b|=4},l.c=(e,l,n)=>{
let u=r.on(t.a),o=t.he,f=r=>{let n=t.a.get(r),u=0;return n!==void 0&&(n.b&512&&e&&(n.b|=e),u=Math.min(n.J.length,8),
l(n)),u};if(u.length>=10){let e=u.indexOf(o);e>=0&&(u.splice(e,1),f(o)),r.pu(u,f,n)}else u.forEach(f)},
l.complainLimits=e=>{l.showHUDEx(t.O,"notAllowA",0,[e])},l.complainNoSession=()=>{
l.complainLimits("control tab sessions")},l.getParentFrame=(e,t,r)=>t&&n.N()?r===1?n.ye(n.N().getFrame,{tabId:e,
frameId:t}).then(t=>{let r=t?t.parentFrameId:0;return r>0?l.indexFrame(e,r):null}):n.ye(n.N().getAllFrames,{tabId:e
}).then(n=>{let u=!1,o=t;if(!n)return null;do{u=!1;for(let e of n)if(e.frameId===o){o=e.parentFrameId,u=o>0;break}
}while(u&&0<--r);return o>0&&o!==t?l.indexFrame(e,o):null}):Promise.resolve(null);let y=e=>{let n=performance.now(),u=!e
;if(!f&&i&&(u&&clearTimeout(i),i=0),u)for(let e=t.Fe.length;0<=--e;){let l=t.Fe[e],r=l.s.b
;r&1024?l.s.m!==t.he?(l.s.b=r|512,k(l),t.Fe.splice(e,1)):r&524288||(l.s.b=r|524288,l.postMessage({N:48})):l.s.b=r|1024}
let o=0;if(u){let e=[];t.a.forEach((l,r)=>{let n=l.J.length&&r>=0&&t.ze.get(r)||0;n>0&&e.push(n)}),e.sort((e,l)=>l-e),
o=Math.max(n-288e3,e.length?e[Math.min(5,e.length-1)]-1e3:0)}let s=0,a=null,c=[];t.a.forEach((e,l)=>{
let n=e.J,f=n.length;if(s>3&&!f)return;(!s||f&&s===3)&&(s=f?4:3,a=e);let i=[]
;for(let e of u?n:[])e.s.b&1024?i.push(e):e.s.b|=1024;if(!i.length)return void(s===4&&f&&(s=5,a=e))
;let d=(l>=0&&t.ze.get(l)||0)<o&&l!==t.he&&(f===1&&!(e.b&131072)&&n[0]===e.R||n.some(r.isNotPriviledged));if(f){
!d||(e.b|=512);for(let e of i)e.s.b|=512;c.push(e)}});let d=a;for(let e of c){
let t=!!(e.b&512)&&e!==d,n=!!(e.b&131072)||e.J.length>1,u=0,o=[]
;for(let l of e.J)l.s.b&512?!t||n&&!r.isNotPriviledged(l)?h(l)?u=1:s<6&&(s=6,a=e):(l.disconnect(),
l.s.Q&&(e.b|=131072)):(s<5&&(s=5,a=e),o.push(l));e===a&&(e.b&=-513),e.J.length=0,u&&(o.forEach(h),l.fu(e,1))}
let v=a?a.d.s.m:-1;return t.us!==v&&(t.us=v),t.us===-1?u&&t._u&&t._u():s<5&&s&&(l.fu(a,0),s=6),s}
;l.tryToKeepAliveIfNeeded_mv3_non_ff=e=>{if(e!==t.us||i)return
;for(let e of t.a.values())if(e.J.length)return void(t.us=e.d.s.m)
;let l=30001-performance.now()%3e4|0,r=l>3e3?Math.max(1e3,l-5e3)|0:l>1200?0:-1;t.us=-1,r<0?y(1):i=setTimeout(y,r,1)},
l.fu=(e,l)=>{let u=e.b;if(u&524288||!(u&131072||r.isNotPriviledged(e.d)))return;let o=e.d.s.m;n.p(o,-1,null,(e,l)=>{
typeof VApi=="object"&&VApi&&VApi.q(0,l)},[0,512|(l?8:0)|u&126976],()=>{let e=t.a.get(o);return e&&(e.b&=-524289),n.g()
}),u&=-258561,e.b=u|524288};let w=(e,r,u)=>{r.s.b|=u&16&&8,e||l.fu({d:r,R:null,J:[],rs:null,b:131072},0);let o=u
;if(u&512);else if(u>>13===t.au||e&&e.b&126976){if(!(u&2&&e&&e.b&512))return;o=e.b&258048,(o&131072||r.s.Q)&&l.fu(e,0)
}else o=126976;o&8192&&r.postMessage({N:6,d:t.V,v:t.au}),o&32768&&r.postMessage({N:9,m:t.wo,t:t.yo,k:o&65536?t.Nn:null,
v:t.au}),o&16384&&r.s.b&8&&(r.s.b|=32,r.postMessage({N:11,H:t.du,f:n.k(r.s)}))};l.si=(e,t)=>{
let u=r.Xe(),o=e&&(t?e.d:e.R);if(e&&(!o||o.s.b&512)){
l.fu(e,0),/^(?:http|file|ftp)/i.test(e.d.s.Jl)||n.selectTab(e.d.s.m,n.selectWndIfNeed);let r=0,o=setInterval(()=>{r++
;let l=t?e.d:e.R;r!==5&&(!l||l.s.b&512)||(clearInterval(o),u.Le())},33)}else u.Le();return u.Ge},f?setInterval(()=>{
if(++a>=37)return;let e=e=>{let l=e&&e.J.length?e.d.s.b&512?e.R||e.J[0]:e.d:null
;return!l||l.s.b&512||!l.s.Jl.startsWith("http")&&!l.s.Jl.startsWith("file:")?null:l
},r=e(t.a.get(t.he))||(t.us!==t.he&&t.us>0?e(t.a.get(t.us)):null);if(!r)for(let l of t.a.values())if(r=e(l))break
;!r&&y(1)<5&&(r=e(t.a.get(t.us)));let u=0;r&&(u=l.safePost(r,{N:11,H:null,k:0,t:""})),u||n.getCurTab(t.u)
;let o=performance.now();o-s>113900&&(s=o,y(0))},24e3):setInterval(y,144e3,0)});