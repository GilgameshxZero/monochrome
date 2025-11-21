"use strict"
;__filename="background/parse_urls.js",define(["require","exports","./store","./utils","./normalize_urls"],(e,t,l,i,r)=>{
Object.defineProperty(t,"__esModule",{value:!0}),t.Ri=t.ru=t.Er=t.Ti=t.Pi=t.qi=t.Ne=void 0,t.Ne=e=>{
let u,n,f=e.u,s=f.toLowerCase(),a=null,o=!1;if(!i.an.test(r.di(s)))return i.Gl(),null;if(e.p){let l=t.qi(e);return{k:"",
s:0,u:l.p!=null?l.u:f,e:l.p!=null?l.p:l.u}}for(u of((n=i.qr(s))&&(s=s.slice(n),f=f.slice(n)),
l.Hl.rules))if(s.startsWith(u.Ui)&&(a=f.slice(u.Ui.length).match(u.Ai),a))break;if(!a||!u){let e=l.Ze.ui
;return s.startsWith(e)?(f=f.slice(e.length).replace(/^#!?/,""),{k:"vimium://show",u:f,
s:f.startsWith("image")&&f.lastIndexOf("&",f.indexOf(":")+1)+1||f.indexOf(" ")+1}):(i.Gl(),null)}
a.length>1&&!u.Ai.global&&a.shift();let p=u.Hi,g=0;if(a.length>1)o=!0;else if(p instanceof RegExp)s=a[0],
(a=s.match(p))?(a.shift(),o=!0):a=[s];else if(p==" "||p==="+"||p instanceof Array){s=a[0].toLowerCase()
;let t=s.indexOf(":");if(t=t>0&&t<s.length?t:0,t&&!i.an.test(s)&&!s.startsWith("file:")){let e=r.pi(s,t,s.indexOf(" "))
;t=e!==-1&&e<=3?t:0}if(g=t>0?s.startsWith("data:")?2:1:0,g)a=[a[0]];else{let t=typeof p=="object",l=t?p[0]:p
;if(t&&l==="+"){let t=u.Ui.length;u.Ai.global||(t+=a.index),t=n+t+Math.max(0,f.slice(t).indexOf(a[0])),l=r.mi(e.u,t),
l=l==="%20"?/%20| /:"+"}a=a[0].split(l)}}else a=a[0].split(p);s="";for(let e of a)s+=" "+(g?e:i.rl(e))
;s=s.trim().replace(g>1?/\xa0/g:i.q," ")
;let c=l.Hl.map.get("~"),m=!!s&&c.Jl===l.Hl.map.get(u.Ir).Jl&&!l.Hl.map.has(s.split(" ",1)[0]);return i.Gl(),{k:u.Ir,
c:m,u:s,s:o?s.lastIndexOf(" ")+1:0}},t.qi=e=>{let{u:t}=e,n=t.toLowerCase();if(e.p===1){let i=l.S(t,131072,e.s)
;if(i!==t&&i&&i!==t+"/"&&i+"/"!==t){let e=r._r(i,null,-2);if(r.dr===0)return{u:e,p:"(sed)"}}}
if(!i.an.test(r.di(n)))return{u:"This url has no upper paths",p:null}
;let f,s,a,o,p=encodeURIComponent,g="",c=!1,m=!1,$=!1,d=null,h=0,_=0,b=!1
;if((a=t.lastIndexOf("#")+1)&&(g=t.slice(a+ +(t.substr(a,1)==="!")),f=i.rl(g),a=f.lastIndexOf("/"),
a>0||a===0&&f.length>1)){b=f!==g;let e=/([^&=]+=)([^&\/=]*\/[^&]*)/
;s=e.exec(f)||/(^|&)([^&\/=]*\/[^&=]*)(?:&|$)/.exec(f),
d=s?s[2]:f,d==="/"||d.includes("://")?d=null:s?b?(f="https://example.com/",f=encodeURI(f+d).slice(f.length),
a=(g.indexOf(f)+1||g.indexOf(f=p(d))+1)-1,a<0&&(b=!1,a=g.indexOf(f=d)),_=a+f.length,
a<0&&s[1]!=="&"&&(a=g.indexOf(f=s[1]),a<0&&(b=!0,f=p(s[1].slice(0,-1)),a=g.indexOf(f)),a>=0&&(a+=f.length,
_=g.indexOf("&",a)+1)),a>=0?h=a:(o=e.exec(g))?(d=i.rl(o[2]),h=o.index+o[1].length,
_=h+o[2].length):(f=s[1])!=="&"&&(a=t.length-g.length,g=f+p(d),t=t.slice(0,a)+g,h=f.length,
_=0)):h=s.index+s[1].length:h=0,d&&(a=t.length-g.length,h+=a,_>0&&(_+=a))}if(!d){if(n.startsWith(l.Ze.U)&&!e.f)return{
u:"An extension has no upper-level pages",p:null};g="",h=t.indexOf("/",t.indexOf("://")+3),
n.startsWith("filesystem:")&&(h=t.indexOf("/",h+1)),h=h<0?0:h,a=t.indexOf("?",h),_=t.indexOf("#",h),
a=_<0?a:a<0?_:a<_?a:_,a=a>0?a:t.length,d=t.slice(h,a),_=0,b=!1}if(a=e.p,c=d.startsWith("/"),!g&&n.startsWith("file:")){
if(d.length<=1||t.length===11&&t.endsWith(":/")){if(!e.f)return{u:"Here has been the root path",p:null};a=0}m=!0,
e.f||a===1&&(a=-1)
}else m=!(g||!n.startsWith("ftp"))||(e.t!=null?!!e.t:e.r!=null?!!e.r:d.length>1&&d.endsWith("/")||/\.([a-z]{2,3}|apng|avif|icon|jpeg|tiff|webp)$/i.test(d))
;let x=d.slice(+c,d.length-+d.endsWith("/")).split("/"),v=x.length,w=a<0?a+v:a;$=v<=1&&a<=-2&&t.lastIndexOf("#",h)>0,
a=w>v?v:a>0?w-1:w>0?w:0,x.length=a,d=x.join("/"),(f=e.a||"")&&(d+=f[0]==="/"?f:"/"+f),
d=d?(d[0]==="/"?"":"/")+d+(!m||d.endsWith("/")?"":"/"):"/",!_&&t.lastIndexOf("git",h-3)>0&&(d=u(t,d)||d),
!_&&/[/.](?:askubuntu|serverfault|stack(?:overflow|exchange)|superuser)\.com$/.test(t.slice(0,h))&&/^\/questions\/\d+$/i.test(d)&&(d="/questions"),
!$||d&&d!=="/"?(f=b?p(d):d,t=t.slice(0,h)+(_?f+t.slice(_):f)):t=t.split("#",1)[0];let k=l.S(t,64,e.s)||t;if(k!==t){
let e=r._r(k,null,-2);t=r.dr===0?e:t}return{u:t,p:d}};let u=(e,t)=>{var l
;let r=(l=i.yn(e))===null||l===void 0?void 0:l.host;if(!r)return
;if(!/git\b|\bgit/i.test(r)||!/^[\w\-]+(\.\w+)?(:\d{2,5})?$/.test(r))return;let u=t.split("/"),n=u.length-1;u[n]||(n--,
u.pop());let f=u[n];if(r.startsWith("github.")){
if(n===3)return f==="pull"||f==="milestone"||f==="commit"?t+"s":f==="tree"||f==="blob"?u.slice(0,3).join("/"):null
;if(n===4&&u[3]==="releases"&&(u[4]==="tag"||u[4]==="edit"))return u.slice(0,4).join("/")
;if(n>3)return u[3]==="blob"?(u[3]="tree",u.join("/")):null
}else if(r.startsWith("gitee.")&&n===4&&u[3]==="releases"&&u[4]==="tag")return u.slice(0,4).join("/")}
;t.Pi=(e,l)=>typeof l=="string"&&l.toLowerCase().startsWith("whole")?t.Er(e):n(e),t.Ti=e=>{
if(!/^https?:\/\//i.test(e))return e
;let t=e.indexOf("://")+3,l=e.indexOf("/",t),r=e.slice(t,l>0?l:e.length).toLowerCase(),u=new RegExp("\\p{S}|[^\\P{P}.:\\uff1a%-]","u").exec(r)
;if(u)return e.slice(0,t+u.index);let n=r.indexOf("%",r.indexOf("@")+1),f=r.lastIndexOf(".xn--",n>0?n:void 0)+5
;if(f>5&&/^[a-z\d]{2}/.test(r.slice(f))&&!/\.[a-z]/.test(r.slice(f))&&r.lastIndexOf("xn--",f-6)<0&&!/[\x7f-\uffff]/.test(r.slice(0,f-6))){
let l=r.slice(f),u=(/^[a-z\d]+/.exec(l)||[""])[0]
;if(u&&u.length<l.length&&(i.zi(u,!0)||"%-".includes(l[u.length])))return e.slice(0,t+f-4)+e.substr(t+f,u.length)}
return e};let n=e=>{let l,u=e.indexOf("\uff1a")+1||e.indexOf(":")+1;if(u&&e[u]!=="/"){
let t=e.slice(0,u-1).trim().toLowerCase();if(t!=="link"&&t!=="\u94fe\u63a5")return e;l=e.slice(u).trim()
;let n=l.indexOf("\uff1a")+1
;if(u=l.indexOf(":")+1,u=u&&n?Math.min(u,n):u||n,!u||!i.an.test(l.slice(0,u-1)+"://"))return e
;if(r._r(l.slice(u),null,-2),r.dr!==1)return e}else{if(!u||e.substr(u+1,1)!=="/")return e;l=e}
let n=/\s|[^=][\u3002\uff0c\uff1b]([^a-z?&#-]|$)/.exec(l),f=!!n&&n[0].length===1,s=n?l.slice(0,n.index+(f?0:1)):null,a=/["(\u2018\u201c\u300a\uff08\uff1c]/,o=(s||l).includes("#~:text=")?0:7
;return o&&s&&(f?",.;\u3002\uff0c\uff1b".lastIndexOf(s.slice(-1),2)>=0?(l=s.slice(0,-1),
o=3):'")\u2019\u201d\u300b\uff09\uff1e'.includes(s.slice(-1))&&(o=a.test(s.slice(u))?0:(l=s.slice(0,-1),1)):(l=s,o=3)),
o&4&&",.;\u3002\uff0c\uff1b".includes(l.slice(-1))&&(l=l.slice(0,-1)),
o&2&&'")\u2019\u201d\u300b\uff09\uff1e'.includes(l.slice(-1))&&(a.test(l.slice(u))?o=0:l=l.slice(0,-1)),
l&&",.;\u3002\uff0c\uff1b".includes(l[0])&&(l=l.slice(1).trim()),o&1&&l&&a.test(l[0])&&(l=l.slice(1)),r.ci(),
l=t.Er(l,!1,!0),r.dr<=2&&!l.startsWith("vimium:")?l:e};t.Er=(e,t,l)=>{
let i=+e.includes("\u3002")+2*+e.includes("\uff1a");if(!i&&!l)return e;let u=e.indexOf("//")
;if(u=e.indexOf("/",u>=0?u+2:0),u>=0&&u<4)return e;let n=u>0?e.slice(0,u):e
;return/^(data|javascript)[:\uff1a]/i.test(n)?e:(i&1&&(n=n.replace(/\u3002/g,".")),
i&2&&(n=n.replace("\uff1a",":").replace("\uff1a",":")),u>0&&(n+=e.slice(u)),r._r(n,null,-2),
r.dr<=2?n:i!==1||!t||/[^.\w\u3002-]/.test(e)?e:e.replace(/\u3002/g,"."))},t.ru=(e,l)=>{
let u,n,s,a,o,p,g,c=[],m=/\s/,$=e=>!!((e=e.trim())&&e.length<51)&&(l.set(e,o),!0)
;for(let d of e.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").split("\n")){if(d=d.trim(),d<"$")continue;p=0;do{
p=d.indexOf(":",p+1)}while(d.charCodeAt(p-1)===92);if(p<=0||!(a=d.slice(0,p).trimRight()))continue
;if(u=a.replace(/\\:/g,":").split("|"),d=d.slice(p+1).trimLeft(),!d)continue;a=d.replace(/\\\s/g,"\\s"),p=a.search(m)
;let h="";if(p>=0){if(e=d.slice(p),d=a.slice(0,p),p=e.search(/\sblank=/i),p>=0){let t=e.slice(p+7).search(m)
;t=t>0?p+7+t:0,h=e.slice(p+7,t||void 0),e=e.slice(0,p)+(t?e.slice(t):"")}p=e.search(/\sre=/i)}else d=a,e=""
;if(d=d.replace(/\\s/g," ").trim().replace(/([^\\]|^)%(s)/gi,"$1$$$2").replace(/\\%/g,"%"),o={Ir:"",Jl:d,u:h,Oi:l.size>1
},u.includes("~")&&o.Oi&&(r._r(d,null,-2),r.dr>2&&(u=u.filter(e=>e!=="~"))),u=u.filter($),u.length!==0){if(p===-1){
for(r.vi.lastIndex=0;(g=r.vi.exec(d))&&g[0].endsWith("$"););g&&(p=g.index+1)&&(a=g[2],
a?(a=/^s:/i.test(a)?a[0]==="s"?"+":" ":a,
s=""):(a=g[1]==="s"?"+":" ",s=[a]),d=d.replace(r.vi,(e,t)=>"$"+(t||"s")).toLowerCase(),d=r._r(d,null,-1),
r.dr>2&&(d=d.replace(/%24(%24|s)/g,decodeURIComponent)),p=0,d=d.replace(/\$[$s]/g,(e,t)=>e==="$$"?(p>0||p--,
"$"):(p=p>0?p:p+t+1,e)),(n=f(d,p,a))&&(a.includes("$")?(a=a.replace(r.hi,e=>e==="$$"?"\\$":"(.*)"),
s=new RegExp("^"+a,/[a-z]/i.test(a)?"i":"")):s=s||a.trim()||" ",c.push({Ui:n.Ui,Ai:n.Ai,Ir:u[0].trimRight(),Hi:s})))
}else if(e.charAt(p+4)&&!m.test(e.charAt(p+4))){a=p>1?e.slice(1,p).trim():"";let l=e.charCodeAt(p+4)===47
;l?(e=e.slice(p+5),p=e.search(/[^\\]\//)+1):(e=e.slice(p+4),p=e.search(m)),d=e.slice(0,p),e=e.slice(l?p+1:p),
p=e.search(m);let r=i.Tl(d,l?p>=0?e.slice(0,p):e:"");r&&(a=t.Ri(a),c.push({Ui:a,Ai:r,Ir:u[0].trimRight(),
Hi:[o.Jl.lastIndexOf("$S")>=0?" ":"+"]})),e=p>=0?e.slice(p+1):""}else e=e.slice(p+4);e=e.trimLeft(),
o.Ir=e?i.rl(e):u[u.length-1].trimLeft()}}return c};let f=(e,l,r)=>{if(l<1||!i.an.test(e))return null;let u,n,f,s
;if(u=e.slice(0,l-1),l=Math.max(u.lastIndexOf("?"),u.lastIndexOf("#"))+1){f=n=u.slice(l),u=u.slice(0,u.search(/[#?]/)),
(s=n.lastIndexOf("&")+1)&&(f=n.slice(s));let t=(r.includes("&")?"":"&")+(r.includes("#")?"":"#")
;f&&f.indexOf("=")>=1?(n="[#&?]",e=`([^${t}]*)`):(f=n,n=e[l-1]==="#"?"#":f?"[#?]":"\\?",e=`([^${t}?]*)`)
}else n=`^([^${(r.includes("#")?"":"#")+(r.includes("?")?"":"?")}]*)`,
(f=e.slice(u.length+2))&&(l=f.search(/[#?]/)+1)&&(f=f.slice(0,l-1)),e=""
;return f=f&&i.hl(f).replace(/\\\+|%20| /g,"(?:\\+|%20| )"),u=t.Ri(u),{Ui:u,Ai:new RegExp(n+f+e,/[a-z]/i.test(f)?"i":"")
}};t.Ri=e=>{let t=e.slice(0,9).toLowerCase(),l=i.qr(t)
;return l?e=e.slice(l):t==="vimium://"&&(e=r.gn(e.slice(9),!1,-1)),e}});