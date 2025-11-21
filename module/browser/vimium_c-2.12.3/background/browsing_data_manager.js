"use strict"
;__filename="background/browsing_data_manager.js",define(["require","exports","./store","./browser","./utils","./settings","./completion_utils"],(e,t,l,i,r,n,o)=>{
Object.defineProperty(t,"__esModule",{value:!0}),t.et=t.tt=t.lt=t.it=t.rt=t.nt=t.ot=t.ut=t.ft=t.st=void 0
;let u,f,s=decodeURIComponent,a=-1,_="1",m=null,d=null,c=null,p=!1;t.st=d;let h=null;t.ft=h,t.ut=e=>{
let t,l,i=e.slice(0,5);if(i==="https")t=8;else if(i==="http:")t=7;else{if(!i.startsWith("ftp"))return null;t=6}
return l=e.indexOf("/",t),{at:e=e.slice(t,l<0?e.length:l),_t:t}};let T=[()=>{
i.t.bookmarks.onCreated.removeListener(t.ot.mt)},()=>{i.t.bookmarks.onCreated.addListener(t.ot.mt),t.ot.mt()}],v=e=>{
l.re.ie=[],l.re.Ue=[],t.ot.dt(e[0]?0:3)};t.ot={ct:null,pt:0,ht:!1,Tt:0,vt:null,dt(e){let i=t.ot.vt;t.ot.vt=null,
l.re.f=e,i&&i()},gt(){let e=i.t.bookmarks;e.onCreated.addListener(t.ot.mt),e.onRemoved.addListener(t.ot.bt),
e.onChanged.addListener(t.ot.bt),e.onMoved.addListener(t.ot.mt),e.onImportBegan.addListener(T[0]),
e.onImportEnded.addListener(T[1])},xt(){let e=i.t.bookmarks;if(v&&(i.v([{permissions:["bookmarks"]}],v),v=null),e){
l.re.f=1,t.ot.pt&&(clearTimeout(t.ot.pt),t.ot.pt=0);try{e.getTree(t.ot.yt)}catch(e){t.ot.dt(3)}}else t.ot.dt(3)},yt(e){
let n="",u="",f=0;l.re.ie=[],l.re.Ue=[],o.kt.pe(2);let s=(e,i)=>{let o=e.title,a=e.id,_=o||a,m=n+"/"+_;if(e.children){
l.re.Ue.push({ee:a,wt:m,Dt:_});let t=n,i=u;return 2<++f&&(n=m),u=a,e.children.forEach(s),--f,n=t,void(u=i)}
let d=e.url,h=d.startsWith("javascript:");l.re.ie.push({ee:a,wt:m,Dt:_,t:h?"javascript:":d,Lt:c!==null?t.lt(d,p?m:o):1,
u:h?"javascript:":d,Y:u,te:i,We:h?d:null,Rt:h?r.rl(d):null})};if(!e)return t.ot.dt(3),i.g();e.forEach(s),t.ot.dt(2),
setTimeout(()=>t.et.It(l.re.ie),50),t.ot.ht||(setTimeout(t.ot.gt,0),t.ot.ht=!0)},mt(){let e=()=>{
let i=performance.now()-l.re.Ee;l.re.f===0&&(i>=59900||i<-5e3?(t.ot.pt=t.ot.Tt=0,t.ot.xt()):t.ot.pt=setTimeout(e,3e4))}
;l.re.Ee=performance.now(),l.re.f===2&&(t.ot.pt=setTimeout(e,6e4),l.re.f=0)},bt(e,i){
let r=l.re.ie,n=i&&i.title,o=r.findIndex(t=>t.ee===e);if(o>=0){let e=r[o],f=e.u,s=i&&i.url
;if(u&&(n==null?f!==e.t||!i:s!=null&&f!==s)&&l.Mt.has(f)&&t.nt.jt&&t.nt.Ut(f)<0&&l.Mt.delete(f),
n!=null)e.wt=e.wt.slice(0,-e.Dt.length)+(n||e.ee),e.Dt=n||e.ee,s&&(e.u=s,e.t=t.et.Pt(s,e),t.et.Ot()),
c!==null&&(e.Lt=t.lt(e.We||e.u,p?e.wt:e.Dt)),l.re.Ee=performance.now();else{r.splice(o,1)
;for(let t=i?o:r.length;t<r.length;t++)r[t].Y===e.Y&&r[t].te--;i||t.ot.mt()}}else if(l.re.Ue.find(t=>t.ee===e)){
if(n==null&&!t.ot.Tt&&u){let e=l.Mt,i=t.nt.Ut;for(let{u:l}of t.nt.jt?r:[])e.has(l)&&i(l)<0&&e.delete(l);t.ot.Tt=1}
t.ot.mt()}}},l.X=(e,i)=>{if(l.re.f<2){let n=r.Xe();return t.ot.vt=n.Le,t.ot.xt(),n.Ge.then(l.X.bind(0,e,i))}
let n=!i&&e.includes("/"),o=n?(e+"").replace(/\\\/?|\//g,e=>e.length>1?"/":"\n").split("\n").filter(e=>e):[]
;if(!e||n&&!o.length)return Promise.resolve(!1)
;if(i)return Promise.resolve(l.re.ie.find(t=>t.ee===e)||l.re.Ue.find(t=>t.ee===e)||null)
;let u=n?"/"+o.slice(1).join("/"):"",f=n?"/"+o[0]+u:""
;for(let t of l.re.ie)if(n&&(t.wt===f||t.wt===u)||t.Dt===e)return Promise.resolve(t)
;for(let t of l.re.Ue)if(n&&(t.wt===f||t.wt===u)||t.Dt===e)return Promise.resolve(t);let s=null
;for(let t of l.re.ie)if(t.Dt.includes(e)){if(s){s=null;break}s=t}return Promise.resolve(s)};let g=e=>{e&&e()};t.nt={
jt:!1,Et:0,At:null,Vt(e){t.nt.At?e&&t.nt.At.push(e):(l.Wt.St=Date.now(),t.nt.At=e?[e]:[],t.nt.Et||i.t.history.search({
text:"",maxResults:2e4,startTime:0},e=>{setTimeout(t.nt.$t,0,e)}))},$t(e){t.nt.$t=null;let r=t.nt.qt,n=0
;for(let t of e){let l=t.url;l.length>2e3&&(l=r(l,t)),e[n++]={t:l,Dt:t.title,zt:t.lastVisitTime,Lt:1,u:l}}
if(c)for(let l of e)t.lt(l.t,l.Dt)===0&&(l.Lt=0);setTimeout(()=>{setTimeout(()=>{let e=l.Wt.Bt
;for(let l=e.length-1;0<l;){let i=e[l],r=i.u,n=i.t=t.et.Pt(r,i),o=n.length>=r.length;for(;0<=--l;){let i=e[l],u=i.u
;if(u.length>=r.length||!r.startsWith(u))break;i.u=r.slice(0,u.length);let f=o?u:t.et.Pt(u,i)
;i.t=o||f.length<u.length?n.slice(0,f.length):f}}t.nt.Ct&&setTimeout(()=>{t.nt.Ct&&t.nt.Ct(l.Wt.Bt)},200)},100),
l.Wt.Bt.sort((e,t)=>e.u>t.u?1:-1),t.nt.jt=!0,i.t.history.onVisitRemoved.addListener(t.nt.Ht),
i.t.history.onVisited.addListener(t.nt.Ft)},100),l.Wt.Bt=e,t.nt.Vt=g,t.nt.At&&t.nt.At.length>0&&setTimeout(e=>{
for(let t of e)t()},1,t.nt.At),t.nt.At=null},Ft(e){let i=e.url;i.length>2e3&&(i=t.nt.qt(i,e))
;let r=++l.Wt.Gt,n=t.nt.Ut(i);n<0&&l.Wt.Jt++,(r>59||r>10&&Date.now()-l.Wt.St>3e5)&&t.nt.Kt(),t.nt.Nt(e,i,n)},Nt(e,i,r){
let n,u=e.lastVisitTime,f=e.title,s=r>=0?l.Wt.Bt[r]:{t:"",Dt:f,zt:u,Lt:c!==null?t.lt(i,f):1,u:i},a=t.ut(i)
;if(a===null||((n=l.Wt.Qt.get(a.at))!==void 0?(n.zt=u,r<0&&(n.Xt+=s.Lt),a._t>6&&(n.Yt=a._t===8?1:0)):l.Wt.Qt.set(a.at,{
zt:u,Xt:s.Lt,Yt:a._t===8?1:0})),r>=0){if(s.zt=u,f&&f!==s.Dt&&(h===null||!h.test(f.slice(0,100)))&&(s.Dt=f,
o.kt.Zt!==0&&o.kt.pe(1),c!==null)){let e=t.lt(i,f);s.Lt!==e&&(s.Lt=e,n!==void 0&&(n.Xt+=e||-1))}}else s.t=t.et.Pt(i,s),
l.Wt.Bt.splice(~r,0,s),o.kt.Zt!==0&&o.kt.pe(1)},Ht(e){f.length=0;let i=l.Mt;if(o.kt.pe(1),e.allHistory){l.Wt.Bt=[],
l.Wt.Qt=new Map;let e=[];for(let t of l.re.ie){let l=i.get(t.u);l!==void 0&&e.push([t.u,l])}
if(e.length)l.Mt=new Map(e);else{i.clear();for(let[t,l]of e)i.set(t,l)}return}let r,n=t.nt.Ut,{Bt:u,Qt:s}=l.Wt
;for(let l of e.urls){let e=n(l);if(e>=0){if(u[e].Lt){let e=t.ut(l);e&&(r=s.get(e.at))&&--r.Xt<=0&&s.delete(e.at)}
u.splice(e,1),i.delete(l)}}},qt(e,t){let l=e.lastIndexOf(":",9),i=l>0&&e.substr(l,3)==="://",n=t.title
;return e=e.slice(0,(i?e.indexOf("/",l+4):l)+320)+"\u2026",n&&n.length>160&&(t.title=r.fl(n,0,160)),e},Kt(){
let e=Date.now();if(l.Wt.Jt<=0);else{if(e<l.Wt.St+1e3&&e>=l.Wt.St)return;setTimeout(i.t.history.search,50,{text:"",
maxResults:Math.min(999,l.Wt.Gt+10),startTime:e<l.Wt.St?e-3e5:l.Wt.St},t.nt.sl)}return l.Wt.St=e,l.Wt.Jt=l.Wt.Gt=0,
t.et.Ot()},Ct(e){t.nt.Ct=null;let i=l.Wt.Qt;for(let{u:l,zt:r,Lt:n}of e){let e=t.ut(l);if(e===null)continue
;let{at:o,_t:u}=e,f=i.get(o);f!==void 0?(f.zt<r&&(f.zt=r),f.Xt+=n,u>6&&(f.Yt=u===8?1:0)):i.set(o,{zt:r,Xt:n,Yt:u===8?1:0
})}},sl(e){let i=l.Wt.Bt,r=t.nt.Ut;if(!(i.length<=0)&&t.nt.jt)for(let l of e){let e=l.url;e.length>2e3&&(e=t.nt.qt(e,l))
;let n=r(e);if(n>=0){let r=i[n],o=l.title;o&&o!==r.Dt&&(t.nt.Nt(l,e,n),l.title=r.Dt)}else t.nt.Nt(l,e,n)}},Ut(e){
let t="",i=l.Wt.Bt,r=i.length-1,n=0,o=0;for(;n<=r;)if(o=n+r>>>1,t=i[o].u,t>e)r=o-1;else{if(t===e)return o;n=o+1}return~n
}},t.rt=e=>{let i,r,n=l.Wt.Bt,o=!!n&&n.length>0&&t.nt.jt&&h!==null;for(let l of e){let e=l.url
;if(e.length>2e3&&(e=l.url=t.nt.qt(e,l)),o&&(i=l.title)&&h.test(i.slice(0,100))){
let i=r===null||r===void 0?void 0:r.get(e);if(i===void 0){let l=t.nt.Ut(e);i=l>=0?n[l].Dt:"",(r||(r=new Map)).set(e,i)}
i&&(l.title=i)}}},t.it=(e,r,n)=>{let o=i.Ie();o?o.getRecentlyClosed({
maxResults:Math.min(Math.round(e*1.2),+o.MAX_SESSION_RESULTS||25,25)},e=>{let o,u=[],f=0,s=Date.now()-performance.now()
;for(let i of e||[]){let e=i.tab,n=null;if(!e){if(!(n=i.window)||!n.tabs||!n.tabs.length)continue;f=1,
e=n.tabs.find(e=>e.active)||n.tabs[0],n.sessionId||(n=null)}t.rt([e]);let{url:a,title:_}=e;if(!r&&!t.lt(a,_))continue
;o=i.lastModified,o=o<3e11&&o>-4e10?o*1e3:o;let m=e.windowId;u.push({u:a,Dt:_,al:o,
_l:[m,(n||e).sessionId,n?n.tabs.length:0],ml:n?` +${n.tabs.length>1?n.tabs.length-1:""}`:m&&m!==l.we&&o>s?" +":""})}
return f?setTimeout(n,0,u):n(u),i.g()}):n([])},t.lt=(e,t)=>c.test(t)||c.test(e)?0:1,t.tt={dl(e){
if(d)for(let t of e)for(let e of d)if(e=e.trim(),t.includes(e)||e.length>9&&t.length+2>=e.length&&e.includes(t))return!0
;return!1},cl(){let e=l.Wt.Qt,i=c!==null;if(l.re.ie)for(let e of l.re.ie)e.Lt=i?t.lt(e.We||e.u,p?e.wt:e.Dt):1
;if(l.Wt.Bt)for(let r of l.Wt.Bt){let l=i?t.lt(r.u,r.Dt):1;if(r.Lt!==l){r.Lt=l;let i=t.ut(r.u),n=i&&e.get(i.at)
;n&&(n.Xt+=l||-1)}}}},t.et={Pt(e,t){if(e.length>=400||e.lastIndexOf("%")<0)return e;try{return s(e)}catch(e){}
return l.Mt.get(e)||(t&&f.push(t),e)},It(e){let i,r,n=l.Mt,o=f,u=-1,a=e.length;for(;;)try{for(;++u<a;)i=e[u],r=i.u,
i.t=r.length>=400||r.lastIndexOf("%")<0?r:s(r);break}catch(e){i.t=n.get(r)||(o.push(i),r)}t.et.Ot()},Ot(){
f.length!==0&&a===-1&&(a=0,setTimeout(b,17))}};let b=()=>{let e,t=f.length;if(!_||a>=t)return f.length=0,a=-1,
void(m=null);for(t=Math.min(a+32,t),m=m||new TextDecoder(_);a<t;a++){let t=f[a],i=typeof t=="string",r=i?t:t.u
;(e=l.Mt.get(r))?i||(t.t=e):(e=r.replace(/%[a-f\d]{2}(?:%[a-f\d]{2})+/gi,x),e=e.length!==r.length?e:r,
typeof t!="string"?l.Mt.set(t.u,t.t=e):l.Mt.set(t,e))}a<f.length?setTimeout(b,4):(f.length=0,a=-1,m=null)},x=e=>{
let t=new Uint8Array(e.length/3);for(let l=1,i=0;l<e.length;l+=3)t[i++]=parseInt(e.substr(l,2),16);return m.decode(t)
},y=e=>{let t=[];for(let l of e.split("\n"))l&&l.trim()&&l[0]!=="#"&&t.push(l);return t};l.pl.omniBlockList=e=>{
let i=e?y(e):[];c=i.length>0?new RegExp(i.map(r.hl).join("|"),""):null,p=i.join("").includes("/"),
t.st=d=i.length>0?i:null,(l.Wt.Bt||l.re.ie.length)&&setTimeout(t.tt.cl,100)},l.pl.titleIgnoreList=e=>{if(t.ft=h=null,
e=e&&y(e).join("\n").replace(/\\\n/g,"").replace(/\n/g,"|")){
let l=e.replace(/^\/\|?/,""),i=l.length<e.length?/\|?\/([a-z]{0,16})$/.exec(l):null
;i&&!i.index||(t.ft=h=r.Tl(i?l.slice(0,i.index):l,i?i[1].replace("g",""):""))}},n.vl.then(()=>{n.gl("omniBlockList"),
n.gl("titleIgnoreList")}),l.pl.localeEncoding=e=>{let i=!!e&&!(e=e.toLowerCase()).startsWith("utf"),r=_;if(_=i?e:"",
_!==r){try{new TextDecoder(_)}catch(e){i=!1}i?r!=="1"&&setTimeout(()=>(l.Wt.Bt&&t.et.It(l.Wt.Bt),
t.et.It(l.re.ie)),100):(l.Mt.clear(),f&&(f.length=0)),u!==i&&(f=i?[]:{length:0,push:l.u},u=i,a=-1)}},
n.gl("localeEncoding"),l.xl.bl=(e,l,r)=>{switch(l){case"tab":o.kt.yl(null),i.Oe(+e,e=>{e&&o.kt.yl(null),r(e)});break
;case"history":let l=!t.nt.jt||t.nt.Ut(e)>=0;i.t.history.deleteUrl({url:e}),l&&o.kt.pe(1),r(l)}},l.xl.kl=t.tt.dl});