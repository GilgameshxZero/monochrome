"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./i18n","./completion_utils","./browsing_data_manager"],function(e,t,l,r,i,n,f,u,o,a){
Object.defineProperty(t,"__esModule",{value:!0})
;let s=0,_=!1,d=!1,m=0,c=0,h=0,p=0,w=0,v=[""],b="",g="",k="",$="",y=0,M=!1,S=!1,x="",T="",R=0,z=!0,A=function(e,t,l,r,i,n){
this.e=e,this.u=t,this.t=l,this.title=r,this.r=i(this,n),this.visit=0},j={Wl(e){
if(l.re.f===3&&!(R&6))return Promise.resolve(u.Xl("bookmarksRevoked",[])).then(t=>{
let r=new A("bookm",l.Ze.Qe+"#optionalPermissions","",t,o.get2ndArg,e?8:1.9);r.textSplit="\u2026",D.Yl([r],1)}),!0},
er(e,t){if(v.length===0){if(t||l.re.f!==0)return void(j.Wl(t==0)||D.Yl([],1));a.ot.vt=()=>{e.o||j.Wl()||D.Yl([],1)}
}else if(R&1)l.re.f>=2?j.tr():a.ot.vt=()=>{e.o||j.tr()};else if(D.Yl([],1),t)return;l.re.f===0&&a.ot.xt()},tr(){var e
;let t,r=v.some(e=>e.charCodeAt(0)===47),i=(e=o.kt.lr)===null||e===void 0?void 0:e.ie,n=o.kt.rr?[]:null,f=i&&i[0]===r?i[1]:l.re.ie,u=f.length,s=[]
;if(j.Wl())return;for(let e=0;e<u;e++){let t=f[e];if(o.ir(t.t,r?t.wt:t.Dt)&&(z||t.Lt)){if(n!==null&&n.push(t),
T&&t.u.length<T.length+2&&T===(t.u.endsWith("/")?t.u.slice(0,-1):t.u))continue;s.push([-o.nr(t.t,t.Dt),e])}}
n&&(o.kt.rr.ie=[r,n]),t=s.length,p+=t,t?(s.sort(o.sortBy0),w>0&&!(R&6)?(s=s.slice(w,w+c),
w=0):t>w+c&&(s.length=w+c)):R^=1;let _=[],d=m&64?-.666446:0;for(let[e,t]of s){let i=f[t];d&&(e=e<d?e:(e+d)/2)
;let n=new A("bookm",i.u,i.t,r?i.wt:i.Dt,o.get2ndArg,-e),u=m&32&&a.nt.jt?a.nt.Ut(i.u):-1;n.visit=u<0?0:l.Wt.Bt[u].zt,
_.push(n),i.We!==null&&(n.u=i.We,n.title=o.cutTitle(r?i.wt:i.Dt),n.textSplit="javascript: \u2026",n.t=i.Rt)}D.Yl(_,1)}
},F={er(e,t){if(!v.length&&m&1024||!(R&2))return D.Yl([],2);let r=v.length>0;if(l.Wt.Bt){if(r)return void F.tr()
;(l.Wt.Gt>10||l.Wt.Jt>0)&&a.nt.Kt()}else{let t=r?()=>{e.o||F.tr()}:null
;if(r&&(d||a.nt.Et))a.nt.Et>0&&clearTimeout(a.nt.Et),a.nt.Et=0,a.nt.Vt(t);else if(a.nt.Et||(a.nt.Et=setTimeout(()=>{
a.nt.Et=0,a.nt.Vt(t)},r?200:150)),r){let e=D.fr,t=e.length,l=t>0;D.ur(l&&e[0].t==="search"?[e[0]]:[],_&&l,0,0,t,g,y)}
if(r)return}t===0?o.or(S,m,F.ar,e):a.it(w+c,z,F.sr.bind(null,e))},tr(){var e
;let t=v.length===1?v[0]:"",r=t?t[0]==="."?/^\.[\da-zA-Z]+$/.test(t)?2:0:(n._r(t,null,-2),
n.dr<=2?n.dr>0?2:1:0):0,i=r>1?o.cr.mr[0]:null,f=o.kt.rr?[]:null,u=[-1.1,-1.1],s=[],_=o.ir,d=r>0&&t.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(t),m=c+w,h=-1.1,b=0,g=0,k=0
;for(x&&m++,g=m;--g;)u.push(-1.1,-1.1);m=m*2-2;let $=((e=o.kt.lr)===null||e===void 0?void 0:e.Bt)||l.Wt.Bt
;for(let e=$.length;b<e;b++){let e=$[b]
;if((r===0?_(e.t,e.Dt):r===1?(d?e.u:e.t).startsWith(t):i.test(d?e.u:e.t))&&(z||e.Lt)){f!==null&&f.push(e),k++
;let t=r?o.ComputeRecency(e.zt)||1e-16*Math.max(0,e.zt):o.ComputeRelevancy(e.t,e.Dt,e.zt);if(t>h){
for(g=m-2;0<=g&&u[g]<t;g-=2)u[g+2]=u[g],u[g+3]=u[g+1];u[g+2]=t,u[g+3]=b,h=u[m]}}}for(f&&(o.kt.rr.Bt=f),p+=k,k||(R^=2),
R&5?b=0:(b=w*2,w=0);b<=m;b+=2){let e=u[b];if(e<=0)break;let t=$[u[b+1]];if(t.u!==x){
let l=new A("history",t.u,d?t.u:t.t,t.Dt,o.get2ndArg,e);l.visit=t.zt,s.push(l)}}a.et.Ot(),D.Yl(s,2)},ar(e,t){
if(e.o)return;let l=new Set;for(let e of t)e.incognito&&o.tabsInNormal||l.add(r.getTabUrl(e));F.hr([],e,l,w,l.size)},
sr(e,t){if(e.o)return;let l=[],r=new Set,i=new Set,n=-w;t.some(e=>{let t,f=e.u;return t=f+"\n"+e.Dt,
!r.has(t)&&(r.add(t),i.add(f),++n>0&&l.push(e),l.length>=c)})?F.pr(l):F.hr(l,e,i,-n,0)},hr(e,t,i,n,f){(0,
r.t.history.search)({text:"",maxResults:(w+c)*(z?1:2)+f},r=>{for(let e of r)e.url.length>2e3&&(e.url=a.nt.qt(e.url,e))
;if(l.Wt.Bt&&a.nt.sl(r),t.o)return;r=r.filter(e=>!i.has(e.url)&&(z||a.lt(e.url,e.title||"")!==0)),
n<0?r.length=Math.min(r.length,c-e.length):n>0&&(r=r.slice(n,n+c));let f=r.map(e=>({u:e.url,Dt:e.title||"",
al:e.lastVisitTime,_l:null,ml:null}));n<0&&(f=e.concat(f)),F.pr(f)})},pr(e){e.forEach((e,t,l)=>{
let r=e.u,i=new A("history",r,a.et.Pt(r,r),e.Dt||"",o.get2ndArg,(99-t)/100),n=e._l;i.visit=e.al,n&&(i.s=n,
i.label='<span class="undo">&#8630;</span>'+e.ml),l[t]=i}),w=0,a.et.Ot(),D.Yl(e,2)}},P={er(e,t){
if(v.length!==1||!(R&16)||v[0].lastIndexOf("/",v[0].length-2)>=0)return D.Yl([],16);if(a.nt.Ct){
if(!l.Wt.Bt)return t>0?D.Yl([],16):a.nt.Vt(()=>{e.o||P.er(e,0)});a.nt.Ct(l.Wt.Bt)}return P.tr()},tr(){
let e,t=l.Wt.Qt,r=o.wr,n=R===16&&_?[]:null,f=v[0].replace("/","").toLowerCase(),u=f.length===v[0].length,a=[],s="",d=-1.1
;o.vr(3);for(let l of t.keys())if((u?l.includes(f):l.endsWith(f))&&(e=t.get(l),z||e.Xt>0)){
let t=o.ComputeRelevancy(l,"",e.zt);n?n.push({r:t,d:l,m:e}):t>d&&(d=t,s=l)}let m=s.length===f.length;if(s&&!m){
if(!s.startsWith("www.")&&!s.startsWith(f)){let l=s.slice(s.indexOf(".")+1);if(l.includes(f)){let r;l="www."+l,
(r=t.get(l))?(z||r.Xt>0)&&(s=l,e=r):(r=t.get(l="m."+l))&&(z||r.Xt>0)&&(z||r.Xt>0)&&(s=l,e=r)}}
let l=s.startsWith(f)?0:s.startsWith("www."+f)?4:-1;if(l>=0){let[e,t]=i.br(s),r=e.length-1
;t>1&&(l=s.length-l-f.length-e[r].length-1,(!l||t===3&&l===e[r-1].length+1)&&(m=!0))}}if(s)p++,_=!w&&m||_,
a=P.gr(s,e,0,u);else if(n){n.sort(P.kr),p=n.length,p>w+c&&(n.length=w+c);for(let e of n)a.push(P.gr(e.d,e.m,e.r,u)[0])}
o.vr(r),D.Yl(a,16)},gr(e,t,r,n){let f=t.Yt>0,u="";if(l.re.f===2){
let t=new RegExp(`^https?://${i.hl(e)}/?$`),r=l.re.ie.filter(e=>t.test(e.u)&&(z||e.Lt));if(r.length>0){
let e=r.filter(e=>e.u[4]==="s");f=e.length>0,r=f?e:r;let t=r[0].u;T=t.endsWith("/")?t.slice(0,-1):t,u=r[0].Dt}}
let s=(f?"https://":"http://")+e+"/";if(!r&&(x=s,w>0))return w--,[]
;let _=new A("domain",s,n?e:e+"/","",o.get2ndArg,r||2),d=a.nt.jt?a.nt.Ut(s):-1,m=d>0?l.Wt.Bt[d]:null;return o.$r(_),
m&&(z||m.Lt)&&(_.visit=m.zt,u=u||m.Dt),_.title=o.cutTitle(u,[]),--c,[_]},kr(e,t){return t.r-e.r}
},B="audible audio muted unmuted active discarded incognito normal pinned visited new grouped ungrouped".split(" "),E={
er(e,t){!(R&4)||t&&(!v.length||m&256)?D.Yl([],4):o.or(S,m,E.tr,e)},tr(e,t){if(e.o)return
;let n,f=l.he,u=v.length<=0,s=R&3,_=!!(m&8)&&S&&u,d=[],b=0;if(_&&!(m&128)&&t.length>w&&t.length>h){let e=new Map
;for(let l of t)e.set(l.id,l);{n=e.get(f)
;let l=n?n.openerTabId:0,r=l?e.get(l):null,i=r?t.indexOf(r):n?t.indexOf(n)-1:0,u=r?0:h/2|0
;for(;1<--u&&i>0&&t[i-1].openerTabId===l;i--);t=i>0?t.slice(i).concat(t.slice(0,i)):t}}
let g=[],k=[],$=(v.join("\n").match(/^:[a-z]+$/gm)||[]).reduce((e,t)=>{t=t.slice(1)
;for(let l=0;l<B.length;l++)B[l].startsWith(t)&&(e|=1<<l);return e},0);n=!n&&$?t.filter(e=>e.id===f)[0]:n
;let y=$&&n?r.getGroupId(n):null;for(let e of t){if(!S&&o.tabsInNormal&&e.incognito)continue
;let t=r.getTabUrl(e),i=e.text||(e.text=a.et.Pt(t,e.incognito?"":t)),n=e.title;if($&&(v.length===1&&(i=n=""),
e.audible&&($&1&&(n+=" :audible"),
$&2&&(n+=" :audio"),$&12&&(r.isTabMuted(e)?$&4&&(n+=" :muted"):$&8&&(n+=" :unmuted"))),
$&16&&e.active&&!S&&(n+=":active"),
$&32&&e.discarded&&(n+=" :discarded"),$&192&&(e.incognito?$&64&&(n+=" :incognito"):$&128&&(n+=" :normal")),
$&256&&e.pinned&&(n+=" :pinned"),$&1536&&(l.ze.has(e.id)?$&512&&(n+=" :visited"):$&1024&&(n+=" :new")),
$&6144&&(y&&r.getGroupId(e)===y?$&2048&&(n+=" :grouped"):$&4096&&(n+=" :ungrouped"))),u||o.ir(i,n)){let t=e.windowId
;!S&&k.lastIndexOf(t)<0&&k.push(t),g.push(e)}}s&&g.length===1&&g[0].id===f&&(g.length=0);let M=g.length;if(p+=M,
M||(R^=4),w>=M&&!s)return w=0,D.Yl(d,4);k.sort((e,t)=>e-t);let x=_?new Map:null,T=l.we;if(_)for(let e of g){
let t=e.openerTabId,l=t&&x.get(t);x.set(e.id,l?l<5?l+1:5:1)}let z=m&32?i.yr():0,j=u?_?(e,t)=>1/t:(b=performance.now(),
(e,t)=>l.ze.get(t)||(m&4?b+t:-t)):o.ComputeWordRelevancy;for(let e=0;e<g.length;){
let t=g[e++],i=t.id,n=_?x.get(i):1,a=r.getTabUrl(t),s=l.ze.get(i),m=new A("tab",a,t.text,t.title,j,_?e:i),c=t.windowId!==T?k.indexOf(t.windowId)+1+":":"",h=t.index+1+"",p=""
;t.active?(_||f!==i&&t.windowId!==T||(m.r=u||!/^(?!:[a-z]+)/m.test(v.join("\n"))?1<<31:0),h=`(${h})`):s||(h=`**${h}**`),
!o.tabsInNormal&&t.incognito&&(p+="*"),t.discarded&&(p+="~"),t.audible&&(p+=r.isTabMuted(t)?"\u266a":"\u266c"),
m.visit=s?s+z:0,m.s=i,m.label=`#${c}${h}${p&&" "+p}`,n>1&&(m.level=" level-"+n),d.push(m)}d.sort(D.Mr)
;let F=d.length,P=w+c-F;if(s||P<0||!u){w>0&&!s?(d=d.slice(w,w+c),F=c,w=0):F>w+c&&(d.length=F=w+c)
;for(let e=s?0:F,t=Math.min(F,28);e<t;e++)d[e].r*=8/(e/4+1);!w&&D.fr&&D.Sr(d)}else if(w>0){
let e=d.slice(0,P).map(e=>Object.assign({},e));for(let t of e)t.label+="[r]";d=d.slice(w).concat(e),F=d.length
;for(let e=0;e<F;e++)d[e].r=F-e;w=0}a.et.Ot(),D.Yl(d,4)}},O={xr:0,er:l.u,Tr(e,t,r){if(!(R&8))return D.Yl([],8)
;let i,f,u,_,d,m=v,c=m.length>0?m[0]:"";if(m.length===0);else{
if(!t&&c[0]==="\\"&&c[1]!=="\\")return c.length>1?m[0]=c.slice(1):m.shift(),c=k.slice(1).trimLeft(),
z=!a.st||z||a.tt.dl([c]),w?(w--,D.Yl([],8)):(i=O.Rr(c,r),D.Yl([i],8));f=l.Hl.map.get(c)}if(t){if(!f)return!0}else{
if(!f&&!c.startsWith("vimium://"))return s===0&&m.length<=1&&(s=m.length?o.Ar.zr()?-2:0:-1),D.Yl([],8);f&&$&&(m.push($),
w=0,k+=" "+$,$="",y&=-5),m.length>1||(s=-1)}if(m.length>1&&f?(m.shift(),k.length>200&&(m=k.split(" "),
m.shift())):f&&(m=[]),z=!a.st||z&&a.tt.dl([c]),f){let e=n.Kl(m,f.Jl,f.u,[]);d=u=e.Jl,_=e.jr}else d=u=m.join(" "),_=[]
;if(c==="~");else if(u.startsWith("vimium://")){let t=l.Fr(u.slice(9),1,!0),i=O.Pr.bind(O,m,u,d,r||f,_)
;if(t instanceof Promise)return t.then(O.Br.bind(O,e,r||f,i));if(t instanceof Array)return O.Br(e,r||f,i,t);t&&(u=d=t,
_=[])}else u=n._r(u,null,-2);return i=O.Pr(m,u,d,r||f,_),D.Yl([i],8)},Br(e,t,l,r){let n;if(!e.o){switch(r[1]){case 5:
case 7:let u=r[0];if(s=r[1]===7&&v.length>1?s:-1,!u)break;return k="\\ "+u,$="",
v=(k.length<201?k:i.fl(k,0,200).trim()).split(" "),v.length>1&&(v[1]=f.Er(v[1],v.length>2)),o.Or(v),O.Tr(e,null,t)
;case 2:let a=r[0];v=a.length>1||a.length===1&&a[0]?a:v,o.Or(v);let _=O.xr++;if(_>12)break;let d=O.Tr(e,!0,t)
;if(_<=0&&(O.xr=0),d!==!0)return d;break;case 0:r[0]&&(n=O.Dr(l(),r))}D.Yl(n||[l()],8)}},Pr(e,t,l,r,n){
let f=new A("search",t,l,(r?r.Ir+": ":"")+e.join(" "),o.get2ndArg,9);return e.length>0&&r?(f.t=O.Qr(l,n),
f.title=o.cutTitle(f.title,[r.Ir.length+2,f.title.length]),f.textSplit=o.highlight(f.t,n)):(f.t=i.rl(o.shortenUrl(l)),
f.title=o.cutTitle(f.title,[]),f.textSplit=i.Ur(f.t)),f.v=d?"":r&&r.u||o.Zr(t),f.p=d&&r?r.Ir:"",f},Dr(e,t){
let l=t[0],r="vimium://copy "+l,n=new A("math",e.u,l,l,o.get2ndArg,8);return e.u=r,
n.title=`<match style="text-decoration: none;">${o.cutTitle(n.title,[])}<match>`,n.textSplit=i.Ur(t[2]),[e,n]},Qr(e,t){
let l,r,n,f=t.length;if(r=i.rl(t.length>0?e.slice(0,t[0]):e),(l=i.qr(r))&&(r=r.slice(l),l=0),t.length<=0)return r
;for(n=t[0];t[l]=r.length,f>++l;)r+=i.rl(e.slice(n,t[l])),n=t[l];return n<e.length&&(r+=i.rl(e.slice(n))),r},Rr(e,t){
let r=n._r(e,null,-2),f=n.dr===4,u=new A("search",r,i.rl(o.shortenUrl(r)),"",o.get2ndArg,9)
;return u.title=f?(t&&t.Ir||"~")+": "+o.cutTitle(e,[0,e.length]):o.cutTitle(e,[]),u.textSplit=i.Ur(u.t),
u.v=d?"":f&&t&&((t.u||t.Jl).startsWith("vimium:")?l.Ze.Qe:t.u)||o.Zr(r),u.p=d&&f?"~":"",u.n=1,u}},D={Cr:0,Gr:0,fr:null,
Hr:null,ur:null,er(e){D.Hr&&(D.Hr.o=!0);let t=D.Hr={o:!1};D.Gr=0,R&=e[0];let l=1,r=R&-9?e.length:2;if(D.fr=[],D.Cr=r-1,
s=w&&-1,e[1]===O){let i=O.Tr(t);if(r<3)return;if(i)return void i.then(D.Wr.bind(null,e,t,l));l=2}D.Wr(e,t,l)},Wr(e,t,l){
for(o.Jr(Date.now()-18144e5),
o.vr(3*v.length||.01),v.indexOf("__proto__")>=0&&(v=v.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),
o.Or(v)),o.kt.Kr(z),v.sort(D.Lr),o.cr.Nr();l<e.length;l++)e[l].er(t,l-1)},
Lr:(e,t)=>t.length-e.length||(e<t?-1:e===t?0:1),Sr(e){let t=new Map(e.map(e=>[e.u,e]));D.fr=D.fr.filter(e=>{
let l=e.e==="search"?void 0:t.get(e.u);return l&&l.r<e.r&&(l.r=e.r),!l})},Yl(e,t){let l=D.fr,r=e.length
;if(r>0&&(D.Gr|=t,D.fr=l.length===0?e:l.concat(e),t===8&&(_=!0,c-=r,p+=r)),0==--D.Cr)return l=null,D.Vr()},Vr(){
let e=D.fr;if(D.fr=null,e.sort(D.Mr),w>0?(e=e.slice(w,w+h),w=0):e.length>h&&(e.length=h),o.cr.Xr=o.cr.Yr=null,
v.length>0){let e=v[0],t=o.shortenUrl(e),l=e.length!==t.length
;(l||e.endsWith("/")&&e.length>1&&!e.endsWith("//"))&&(l&&(v[0]=t),o.cr.ei(v[0],l))}e.forEach(o.$r)
;let t=e.length>0,l=_&&t,r=p,i=b===":",n=s<0?s!==-2||t||i?0:3:z?v.length<=0||M?0:t?2:i?0:1:0,f=g,u=y,a=n!==2||i?0:D.Gr,d=D.ur
;return D.ti(),d(e,l,n,a,r,f,u)},ti(){D.Hr=D.ur=null,o.li(),o.setupQueryTerms(v=[],d=!1,0),b=g=k=$=x=T="",o.cr.mr=null,
o.vr(3),o.Jr(0),s=D.Gr=m=c=h=p=0,R=0,y=0,_=!1,M=S=!1,z=!0},ri(){let e,t,l=k;if(w=0,$="",
!(l.length===0||(e=(l=l.slice(-5)).lastIndexOf("+"))<0||e!==0&&l.charCodeAt(e-1)!==32)){if(l=l.slice(e),
e=k.length-l.length,(t=parseInt(l,10))>=0&&"+"+t===l&&t<=(e>0?100:200))w=t;else if(l!=="+")return;k=k.slice(0,e&&e-1),
$=l,y|=4}},Mr:(e,t)=>t.r-e.r},I={__proto__:null,bookm:[1,j],domain:[16,P],history:[2,F],omni:[63,O,P,F,j,E],
search:[8,O],tab:[4,E]};l.xl.er=(e,t,r)=>{
if(e=e.trim(),M=!1,e&&l.G>1&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(e)||e.slice(0,5).toLowerCase()==="file:")){
":/\\".includes(e[1])&&(e=(e[1]===":"?"":"//")+e.slice(e[1]===":"?0:2).replace(/\\+/g,"/"))
;let t=(e=e.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2;if(t>=2&&t<e.length&&e[t]!=="/"){
let l=e.slice(t).split("/",1)[0];if(l.includes("%")){let r=i.rl(l);M=r===l,e=e.slice(0,t)+r+e.slice(t+l.length)}}}
b=k=e&&e.replace(i.q," "),g="",y=0,D.ri(),v=(e=k)?(e=e.length<201?e:i.fl(e,0,200).trimRight()).split(" "):[]
;let n=t.c|0||128
;n&&(n-=e.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-e.length),
n=Math.max(50,Math.min(n,320)),m=t.f,d=!!(m&1),h=c=Math.min(Math.max(3,t.r|0||10),25),p=0,D.ur=r
;let u=t.o==="bomni"?(m|=64,I.omni):I[t.o],s=v.length>=1?v[0]:"",w=t.t||63,$=t.e||63;if(u===I.tab&&(S=!!(m&2)),
s.length===2&&s[0]===":"){s=s[1]
;let e=s==="b"?I.bookm:s==="h"?I.history:s==="t"||s==="T"||s==="w"||s==="W"?(S=s!=="t"&&s!=="T",m|=0,m|=s==="T"?2048:0,
I.tab):s==="B"?(m|=64,I.omni):s==="H"?(m|=256,I.omni):s==="d"?I.domain:s==="s"?I.search:s==="o"?I.omni:null;e&&(u=e,
g=v.shift(),y|=1,k=k.slice(3),$=u[0])}if(v.length>0&&((s=v[0]).includes("\u3002")||s.includes("\uff1a"))&&!M){
M=v.length<2;let e=f.Er(s,M)
;e!==s?(v[0]=e,k=e+k.slice(s.length),M=M&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(s)):M=M&&s.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(s)
}z=!a.st||!(m&4096)&&a.tt.dl(v),R=w&$,_=u.length===2,k&&(y|=2),o.setupQueryTerms(v,d,n),D.er(u)}});