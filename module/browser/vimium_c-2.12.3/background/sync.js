"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],(e,t,l,n,r,i)=>{
Object.defineProperty(t,"__esModule",{value:!0});let u,o=n.Sn({findModeRawQueryList:1,innerCSS:1,keyboard:1,
newTabUrl_f:1,vomnibarPage_f:1
}),s=r.t.storage,f="sync.cloud:",a=null,y=null,d="",c=null,S=null,p=null,b=()=>u||(u=s&&s.sync),g=(e,t)=>{let l=e=>{
if(c){n.Sn(e);for(let t in c){let l=t.split(":")[0],n=l===t;if(n||!(l in c)){let r=n?c[t]:null
;v(l,r!=null?r.newValue:e[l],e)}}c=null}};if(n.Sn(e),c?Object.assign(c,e):c=e,p)p.then(()=>g({},t));else{e=c,c=null
;for(let t in e){let n=e[t];if((t.includes(":")?8:v(t,n!=null?n.newValue:null))===8)return c=e,void b().get(l)
;delete e[t]}}},m=console.log.bind(console,"[%s]",{toString(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}}),v=(e,t,n)=>{
let r,u=t&&typeof t=="object"&&t.$_serialize||"";if(!(e in i.E)||!_(e)){let n=u||!i.$o?-1:i.qo.indexOf(e)
;return void(n>=0&&(r=l.su.get(e),(r!=null?r+"":null)!==(t!=null?t+"":null))&&(i.lu(e,t!=null?t:null),i.xo(n)))}
let o=i.E[e];if(u){if(u==="split"&&!n)return 8;if((t=N(e,t,n))===8)return}
if(t==null)return void(l.z[e]!=o&&(p||m("sync.this:","reset",e),O(e,o)));let s,f,a,y=l.z[e]
;(a=typeof o!="object"||!t||typeof t!="object")?(f=t,s=y):(f=JSON.stringify(t),s=JSON.stringify(y)),
f!==s&&(f===(a?o:JSON.stringify(o))&&(t=o),
p||m("sync.this:","update",e,typeof t=="string"?(t.length>32?t.slice(0,30)+"...":t).replace(/\n/g,"\\n"):t),O(e,t))
},O=(e,t)=>{d=e,e==="keyLayout"&&(t=t&-33|l.z[e]&32),i.ho(e,t),d="",e in i.B&&i.bn({N:6,d:[i.B[e]]})},j=(e,t)=>{
let l=_(e)?1:i.qo.includes(e)?2:0;l&&e!==d&&(a||(setTimeout(J,800),a=n.i()),l===1?(e==="keyLayout"&&(t&=-33),
a[e]=t):(y||(y=[])).push(e))},w=e=>{let t={Q:'\\"',S:"\\\\",d:"`",l:"<",n:"\u2029",q:'"',r:"\u2028"}
;return e.replace(/`[QSdlnqr]/g,e=>t[e[1]])},N=(e,t,l)=>{let n="";switch(t.$_serialize){case"split":
for(let{k:r,s:i}=t,u=0;u<i;u++){let t=l[e+":"+u];if(!t||typeof t!="string"||!t.startsWith(r))return 8
;n+=t.slice(r.length)}break;case"single":return JSON.parse(w(JSON.stringify(t.d)));default:
return m("Error: can not support the data format in synced settings data:",e,":",t.$_serialize),null}
return typeof i.E[e]=="string"?(n=w(n),n):(n=w(JSON.stringify(n)),JSON.parse(n.slice(1,-1)))},k=(e,t,l)=>{
if(!t||(typeof t!="string"?typeof t!="object":t.length<8192/6-40))return;let n=JSON.stringify(t),r=""
;if(n.length<8192/6-40)return;let u=n.length
;n=n.replace(/[<`\u2028\u2029]/g,e=>e==="<"?"`l":e==="`"?"`d":e==="\u2028"?"`r":"`n");let o=n.length
;if(3*(o-u)+u*3<8093)return;if(r=l.encode(n),r.length<8093)return r.length+4*(o-u)<8093?void 0:n
;let s=0,f=Date.now().toString(36)+":",a={}
;n=typeof i.E[e]=="string"?n.slice(1,-1):n.replace(/"|\\[\\"]/g,e=>e==='"'?"`q":e==='\\"'?"`Q":"`S"),
S||(S=new TextDecoder),r=l.encode(n);for(let t=0,l=r.length;t<l;){let i,u=Math.min(t+8134,l),o=0
;for(;u<l&&(r[u]&192)==128;u++);if(i=S.decode(r.subarray(t,u)),n=i.slice(-6),o=u<l?n.lastIndexOf("\\"):-1,
o>0&&o>n.length-2)i+="b",o=1;else if(o>0&&n[o+1]==="u"){o=n.length-o;for(let e=o;e++<6;i+="b");}else o=0
;if(i=JSON.parse(`"${i}"`),o){let e=i.endsWith("b");e||(u-=o),i=i.slice(0,o>1&&e?o-6:-1)}if(a[e+":"+s++]=f+i,t=u,
s>=13)break}return a[e]={$_serialize:"split",k:f,s},a},J=()=>{let e=a,t=y,u=[],o=[],s=[],d=n.i(),c={};if(a=y=null,
!e||l.Lo!==j)return;let p=Object.keys(e).length>0?new TextEncoder:null;for(let t in e){
let l=t,n=e[l],r=i.E[l],f=typeof r=="string"||typeof r=="object"&&l!=="vimSync"?0:13;if(n!=null){let e=k(l,n,p)
;e&&typeof e=="object"?(d[l]=e,f=e[l].s):(c[l]=e?{$_serialize:"single",d:JSON.parse(e)}:n,o.push(l))}else u.push(l)
;for(;f<13;f++)s.push(l+":"+f)}S=p=null,t&&u.push(...t),s.push(...u),u.length>0&&m(f,"reset",u.join(", ")),
s.length>0&&b().remove(s),o.length>0&&(m(f,"update",o.join(", ")),b().set(c));for(let e in d)b().set(d[e],()=>{
let t=r.g();return t?m("Failed to update",e,":",t.message||t):m(f,"update (serialized) "+e),t})
},_=e=>!(e in o),T=(e,t)=>{n.Sn(e);let r=e.vimSync||l.z.vimSync==null&&l.zo;if(l.pl.vimSync(!1,"vimSync"),
!r)return void t();e.vimSync||(m(f,"enable vimSync"),e.vimSync=!0,b().set({vimSync:!0}));let u=[]
;for(let t in l.z)l.z[t]!==i.E[t]&&!(t in e)&&_(t)&&(t==="keyLayout"&&i.$o&2||u.push(t));for(let e of u)v(e,null)
;for(let t in e)t.includes(":")||v(t,e[t],e);i.gl("vimSync"),setTimeout(()=>{t()},4),m(f,"download settings")}
;l.pl.vimSync=e=>{if(!b())return;let t=b().onChanged,n=g;if(!e)return t.removeListener(n),void(l.Lo=l.u)
;l.Lo!==j?(t.addListener(n),l.Lo=j):a&&(m(f,"save immediately"),J())},i.vl.then(()=>{let e=l.z.vimSync
;e===!1||!e&&!l.zo?l.il=null:l.il?(p=l.il.then(e=>(l.il=null,!!e&&e.reason==="install")).then(e=>new Promise(t=>{
b()?b().get(n=>{let u=r.g(),o=e&&l.zo&&(u||Object.keys(n).length===0)?()=>{i.ho("keyLayout",2),t()}:t
;return u?(l.pl.vimSync=l.u,o(),m("Error: failed to get storage:",u,"\n\tSo disable syncing temporarily.")):T(n,o),u
}):t()})).then(()=>{l.Di=null,p=null}),l.Di=Promise.race([p,new Promise(e=>{setTimeout(e,800)})]).then(()=>{l.Di=null,
l.z.vimSync&&l.Lo!==j&&i.gl("vimSync")})):i.gl("vimSync")})});