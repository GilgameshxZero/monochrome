"use strict"
;__filename="background/completion_utils.js",define(["require","exports","./store","./browser","./utils","./settings","./normalize_urls","./tools","./browsing_data_manager"],(e,t,l,r,n,u,o,i,f)=>{
Object.defineProperty(t,"__esModule",{value:!0
}),t.or=t.Zr=t.sortBy0=t.shortenUrl=t.highlight=t.cutTitle=t.$r=t.get2ndArg=t.ComputeRelevancy=t.ComputeRecency=t.ComputeWordRelevancy=t.nr=t.ir=t.cr=t.Ar=t.kt=t.vr=t.Jr=t.Or=t.setupQueryTerms=t.li=t.wr=t.tabsInNormal=void 0
;let a=[0,0],s=null;t.tabsInNormal=s;let _,c,h,m,d=null,b=0,p=[],w=0,g=3;t.wr=g,t.li=()=>{t.tabsInNormal=s=null},
t.setupQueryTerms=(e,t,l)=>{_=e,c=t,m=!1,h=l},t.Or=e=>{_=e},t.Jr=e=>{w=e},t.vr=e=>{t.wr=g=e},t.kt={lr:null,rr:null,Zt:0,
en:0,Kr(e){let r=null,n=0,u=_.join(" ");for(let t=p,l=u?t.length:0;0<=--l;){if(!t[l].tn&&e)continue
;let n=t[l].ln,u=0,o=0;for(;u<n.length&&o<_.length;o++)_[o].includes(n[u])&&u++;if(u>=n.length){r=t[l];break}}t.kt.lr=r,
r&&(l.Ke.i<200||!r.Bt||r.Bt.length>1e3)&&(n=performance.now())-r.zt<Math.max(300,l.Ke.i*1.3)?(t.kt.rr=r,
r.ln=_.slice(0)):!u||r&&u===r.ln.join(" ")||!(u.length>4||/\w\S|[^\x00-\x80]/.test(u))?t.kt.rr=null:(t.kt.rr={
ln:_.slice(0),tn:e,zt:n||performance.now(),Bt:r&&r.Bt,ie:r&&r.ie},p.push(t.kt.rr),
t.kt.Zt||(t.kt.Zt=setInterval(t.kt.rn,6e3)))},rn(){let e=p,l=-1,r=performance.now()-5983;for(;++l<e.length&&e[l].zt<r;);
l++,l<e.length?e.splice(0,l):(e.length=0,clearInterval(t.kt.Zt),t.kt.Zt=0)},pe(e){
for(let t of p)e<2?t.Bt=null:e<3?t.ie=null:d=null},yl(e){d!==e&&(t.kt.en&&(clearTimeout(t.kt.en),t.kt.en=0),d=e,
e&&(f.rt(e),t.kt.en=setTimeout(t.kt.yl,3e3,null)))}},t.Ar={nn:0,pt:0,zr(){let e=_[0],r=l.Hl.keywords
;return r===null?(t.Ar.pt=t.Ar.pt||setTimeout(t.Ar.un,67),!0):!(e.length>=t.Ar.nn)&&r.includes("\n"+e)},un(){
let e=n.on(l.Hl.map).sort(),r=0,u="",o=[];for(let t=e.length;0<=--t;){let l=e[t];if(!u.startsWith(l)){let e=l.length
;r=e>r?e:r,u=l,o.push(l)}}l.Hl.keywords="\n"+o.join("\n"),t.Ar.nn=r,t.Ar.pt=0}},t.cr={mr:null,Yr:null,Xr:null,Nr(){
let e=t.cr.mr=[];t.cr.Yr=t.cr.Xr=null
;for(let t of _)e.push(new RegExp(n.hl(t),t!==t.toUpperCase()&&t.toLowerCase()===t?"i":""))},in(){
let e=t.cr.Yr=[],l=t.cr.Xr=[];for(let r of t.cr.mr){let t="\\b"+r.source,n=r.flags;e.push(new RegExp(t,n)),
l.push(new RegExp(t+"\\b",n))}},ei(e,l){
t.cr.mr&&(e=n.hl(l?e:e.slice(0,-1)),t.cr.mr[0]=new RegExp(l?e:e+"(?:/|$)",t.cr.mr[0].flags))}},t.ir=(e,l)=>{
for(let r of t.cr.mr)if(!r.test(e)&&!r.test(l))return!1;return!0},t.nr=(e,l)=>{let r=0,n=0,u=0,o=0,i=!!l
;t.cr.Yr||t.cr.in();for(let t=0,f=_.length;t<f;t++){let f=M(t,e);o+=f[0],u+=f[1],i&&(f=M(t,l),n+=f[0],r+=f[1])}
return o=o/g*x(u,e.length),r===0?l?o/2:o:(n=n/g*x(r,l.length),o<n?n:(o+n)/2)};let x=(e,t)=>e<t?e/t:t/e,M=(e,l)=>{
let r=0,n=0;return r=l.split(t.cr.mr[e]).length,r<1?a:(n=1,t.cr.Yr[e].test(l)&&(n+=1,t.cr.Xr[e].test(l)&&(n+=1)),
[n,(r-1)*_[e].length])};t.ComputeWordRelevancy=e=>t.nr(e.t,e.title),t.ComputeRecency=e=>{let t=(e-w)/18144e5
;return t<0?0:t<1?t*t*.666667:t<1.000165?.666446:0},t.ComputeRelevancy=(e,l,r)=>{let n=t.ComputeRecency(r),u=t.nr(e,l)
;return n<=u?u:(u+n)/2},t.get2ndArg=(e,t)=>t,t.$r=e=>{if(c||e.v!==void 0||(e.v=t.Zr(e.u)),
e.textSplit!=null)return void(e.t===e.u&&(e.t=""));e.title=t.cutTitle(e.title);let l,r=e.t,n=o.fn(r,e.u)
;n.length!==r.length?l=T(r,n[0]==="\\"?5:r.charAt(7)==="/"&&r.substr(9,3).toLowerCase()==="%3a"?10:8):(n=t.shortenUrl(r),
l=k(n)),e.t=r.length!==e.u.length?n:"",e.textSplit=v(n,l,r.length-n.length,c?h-13-Math.min(e.title.length,40):h)},
t.cutTitle=(e,l)=>{let r=e.length>h+40;return r&&(e=n.fl(e,0,h+39)),t.highlight(r?e+"\u2026":e,l||k(e))},
t.highlight=(e,t)=>{if(m)return e;if(t.length===0)return n.Ur(e);let l="",r=0;for(let u=0;u<t.length;u+=2){
let o=t[u],i=t[u+1];o>=e.length||(l+=n.Ur(e.slice(r,o)),l+="<match>",l+=n.Ur(e.slice(o,i)),l+="</match>",r=i)}
return l+n.Ur(e.slice(r))},t.shortenUrl=e=>{let t=n.qr(e)
;return!t||t>=e.length?e:e.slice(t,e.length-+(e.endsWith("/")&&!e.endsWith("://")))};let T=(e,t)=>{let l=k(e)
;for(let e=0;e<l.length;)l[e+1]<=t?l.splice(e,2):(l[e]=Math.max(l[e]-t,0),l[e+1]-=t,e+=2);return l},k=e=>{let l=[]
;for(let r=0,n=_.length;r<n;r++){let n,u=0,o=0,i=e.split(t.cr.mr[r]),f=i.length-1,a=_[r].length;for(;u<f;u++,
o=n)n=(o+=i[u].length)+a,l.push([o,n])}if(l.length===0)return l;if(l.length===1)return l[0];l.sort(t.sortBy0);let r=l[0]
;for(let e=1,t=1,n=l.length;t<n;t++){let n=l[t];r[e]>=n[0]?r[e]<n[1]&&(r[e]=n[1]):(r.push(n[0],n[1]),e+=2)}return r}
;t.sortBy0=(e,t)=>e[0]-t[0];let v=(e,t,l,r)=>{let u="",o=e.length,i=o,f=""
;if(o<=r||(l>1?i=e.indexOf("/")+1||o:(i=e.indexOf(":"))<0?i=o:n.an.test(e.slice(0,i+3).toLowerCase())?i=e.indexOf("/",i+4)+1||o:i+=22),
i<o&&t.length)for(let e=t.length,l=o+8;(e-=2)>-4&&l>=i;l=e<0?0:t[e]){let n=e<0?i:t[e+1],u=l-20-Math.max(n,i)
;if(u>0&&(o-=u,o<=r)){i=n+(r-o);break}}o=0;for(let l=0;o<r&&l<t.length;l+=2){let a=t[l],s=Math.max(o,i),_=a-20-s
;_>0?(r+=_,f=n.fl(e,o,s+11),u+=m?f:n.Ur(f),u+="\u2026",f=n.sn(e,a-8,a),u+=m?f:n.Ur(f)):o<a&&(f=e.slice(o,a),
u+=m?f:n.Ur(f)),o=t[l+1],f=e.slice(a,o),m?u+=f:(u+="<match>",u+=n.Ur(f),u+="</match>")}
return f=e.length<=r?e.slice(o):n.fl(e,o,r-1>o?r-1:o+10),u+(m?f:n.Ur(f))+(e.length<=r?"":"\u2026")};t.Zr=e=>{
let t=f.nt.jt&&e.startsWith("http")?f.nt.Ut(e):-1,r=t<0?~t-1:t,n=r<0?[]:l.Wt.Bt,u=e.indexOf(":")+3,o=0,i=0,a="",s="",_=0,c=0
;for(;o<=r&&(u=e[u]==="/"?u+1:e.indexOf("/",u+1)+(i?0:1))>0;i=u){for(a=e.slice(i,u),c=r;o<=c;)if(_=o+c>>>1,
s=n[_].u.slice(i),s>a)c=_-1;else{if(s===a)return i?n[_].u:"";o=_+1}if(o<=r&&i&&(a=n[o].u,
a[u]==="/"&&a.length<=++u))return a}return""},t.or=(e,n,u,o,i)=>{{t.tabsInNormal=s=l.de!==2&&!(n&2048)
;let f=(s?2:0)|(e?1:0);b!==f&&(d=null,b=f);let a=i||d;if(t.kt.yl(a),a)u(o,a);else{let t=u.bind(null,o)
;e?(n&512?r.getCurTabs:r.le)(t):r.Me.query({},t)}}},i.He._n=()=>{d&&(b&1||!(b&2)!=(l.de===2))&&t.kt.yl(null)},
u.vl.then(()=>{u.gl("searchEngines",null)})});