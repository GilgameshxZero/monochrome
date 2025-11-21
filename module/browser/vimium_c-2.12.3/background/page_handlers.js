"use strict"
;__filename="background/page_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./key_mappings","./run_commands","./open_urls","./frame_commands"],(l,e,n,t,r,u,o,s,i,a,d,f,v,m,c)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.onReq=void 0;let p=[()=>[s.E,n.G,n.Ze.ko],l=>{
if(n.Di)return n.Di.then(p[1].bind(null,l,null));let e={};for(let l in s.E){let t=n.z[l];t!==s.E[l]&&(e[l]=t)}return e
},l=>{var e,t;if(n.Di)return n.Di.then(p[2].bind(null,l,null))
;let r=l.key,u=(t=(e=l.val)!==null&&e!==void 0?e:s.E[r])!==null&&t!==void 0?t:null;s.ho(r,u);let o=n.z[r]
;return o!==u?o:null},l=>{let e=s.W(l.key,l.val);return e!==l.val?e:null},l=>{s.bn({N:6,d:l})},l=>n.z[l.key],l=>{
n.a.has(l)||r.s(l)},()=>{let l=f.Fn;if(n.V.l&1&&!l){let l=l=>/[^ -\xff]/.test(l.join("")),e=l(Object.keys(n.Nn))?1:0
;if(e|=n.wo&&l(Object.keys(n.wo))?2:0,e&&(e|=e&2||!n.wo||!l(Object.values(n.wo))?0:4,e&2||!(e&4)))return!0}
return l?(l=>{let e,n,t=l.length>1?l.length+" Errors:\n":"Error: ";for(n of l)e=0,
t+=n[0].replace(/%([a-z])/g,(l,t)=>(++e,t==="c"?"":t==="s"||t==="d"?n[e]:JSON.stringify(n[e]))),
e+1<n.length&&(t+=" "+n.slice(e+1).map(l=>typeof l=="object"&&l?JSON.stringify(l):l).join(" ")),t+=".\n";return t
})(l):""},l=>{let e=i.indexFrame(l[1],0);return e&&e.s&&(e.s.b|=44),d.mergeCSS(l[0],-1)},l=>{
l&&s.lu("isHC_f",l.hc?"1":null),d.eu(2)},l=>[u._r(l[0],null,l[1]),u.dr],()=>{d.tu.nu()},()=>{
let l=n.Ln.get("?"),e=l&&l.Rn===8&&l.Vn?"?":"";return e||n.Ln.forEach((l,n)=>{
l.Rn===8&&l.Vn&&(e=e&&e.length<n.length?e:n)}),e},l=>{var e
;return[l=u._r(l,null,0),(e=n.Ye.get(l))!==null&&e!==void 0?e:null]},l=>{let e=new Map;o.ru("k:"+l,e);let n=e.get("k")
;if(n==null)return null;let t=u._r(n.Jl,null,-2),r=u.dr>2
;return[!r,r?n.Jl:t.replace(/\s+/g,"%20")+(n.Ir&&n.Ir!=="k"?" "+n.Ir:"")]},l=>{m.Je(l)},l=>{let e=null
;return l.startsWith("vimium://")&&(e=n.Fr(l.slice(9),1,!0)),e=e!==null?e:u._r(l,null,-1),
typeof e=="string"&&(e=o.Pi(e,"whole"),e=u.fi(e)),e},()=>n.Ii&&n.Ii(),l=>n.S(l[0],l[1]),l=>m.yi(l),()=>{
let l=n.he>=0&&n.a.get(n.he)||null,e=l?n.he:-1,u=l?l.d.s.Q:-1,o=u>=0&&r.N()||null
;return Promise.all([r.ye(r.getCurTab).then(l=>l&&l.length?l:e<0?null:r.ye(r.tabsGet,e).then(l=>l&&[l])),o?r.ye(o.getFrame,{
tabId:e,frameId:u}):null,n.Di]).then(([l,o])=>{var i,d,f
;let v=l&&l[0]||null,m=v?v.id:n.he,p=(i=n.a.get(m))!==null&&i!==void 0?i:null
;o&&o.url&&e===m&&p.d.s.Q===u&&(p.d.s.Jl=o.url);let b=v?r.getTabUrl(v):p&&(p.R||p.d).s.Jl||"";v&&p&&p.R&&(p.R.s.Jl=b)
;let _=!p||p.d.s.Q&&!t.an.test(p.d.s.Jl)?null:p.d.s,h=!(p||v&&b&&v.status==="loading"&&/^(ht|s?f)tp/.test(b)),k=g(p),w=!h&&!k,y=0,O=w?null:k||!b?k:b.startsWith(location.protocol)&&!b.startsWith(n.ll)?new URL(b).host:null,j=O?n.uu.get(O):null
;if(w||j==null||j===!0?O=null:p&&(p.ou=-1),w&&p&&p.J.length>1&&b.startsWith("http")){
let l=(d=t.yn(b))===null||d===void 0?void 0:d.host;if(l&&!t.kn(l,0)){let e=b.startsWith("http:"),n="."+l
;for(let r of p.J){
let u=r!==(p.R||p.d)?r.s.Jl:null,o=(u===null||u===void 0?void 0:u.startsWith("http"))?(f=t.yn(u))===null||f===void 0?void 0:f.host:null
;if(o&&o.length>l.length&&o.endsWith(n)&&(y=e||o.startsWith("http:")?2:1,y>1))break}}}let x=_&&_.Q?p.R:null
;if(x&&!y&&!(_.b&512))try{c.focusFrame(p.d,!0,5,1)}catch(l){}return{ver:n.Ze.aa,runnable:w,url:b,tabId:m,
frameId:p&&(_||p.R)?(_||p.R.s).Q:0,topUrl:x===null||x===void 0?void 0:x.s.Jl,frameUrl:_&&_.Jl,lock:p&&p.rs?p.rs.f:null,
status:_?_.f:0,hasSubDomain:y,unknownExt:O,exclusions:w?{rules:n.z.exclusionRules,onlyFirst:n.z.exclusionOnlyFirstMatch,
matchers:a.dn(null),defaults:s.E.exclusionRules}:null,os:n.G,reduceMotion:n.V.m}})},([l,e])=>{
let u=n.z.extAllowList,o=u.split("\n");if(o.indexOf(e)<0){let l=o.indexOf("# "+e)+1||o.indexOf("#"+e)+1
;o.splice(l?l-1:o.length,l?1:0,e),u=o.join("\n"),s.ho("extAllowList",u)}let i=n.a.get(l);return i&&(i.ou=null),
r.ye(r.t.tabs.get,l).then(l=>{let e=t.Xe(),n=()=>(v.runNextOnTabLoaded({},l,e.Le),r.t.runtime.lastError)
;return l?r.t.tabs.reload(l.id,n):r.t.tabs.reload(n),e.Ge})},([l,e,t])=>{n.Fr("status/"+l,3)
;let r=i.indexFrame(e,t)||i.indexFrame(e,0),u=r?n.a.get(e).rs:null;return r&&!u&&n.hn[10]({u:r.s.Jl},r),
[r?r.s.f:0,u?u.f:null]},l=>a.dn(l)[0],(l,e)=>c.initHelp({f:!0},e),l=>{let e=l.module,n=l.name,t=b[e]
;if(!b.hasOwnProperty(e)||!t.includes(n))return[void 0,{message:"refused"}];let u=r.t[e],o=l.args,s=u[n]
;return new Promise(l=>{o.push(e=>{let n=r.g();return l(n?[void 0,n]:[_(e),void 0]),n}),s.apply(u,o)})
},(l,e)=>e.s.m,l=>{let e=t.i();if(l){let t=n.su.get(l);e[l]=t!=null?t:null}else n.su.forEach((l,n)=>{e[n]=l});return e
},({key:l,val:e})=>{l.includes("|")&&s.lu(l,e)},({key:l,val:e},t)=>{let r=t&&t.s&&t.s.m||n.he,u=n.Fe.find(l=>l.s.m===r)
;u&&u.postMessage({N:47,d:{[l]:e},v:n.iu})},()=>{n.z.vimSync&&n.pl.vimSync(!0,"vimSync")},()=>({os:n.G}),l=>{
r.tabsCreate({url:l.url}),r.t.tabs.remove(l.tabId)},()=>Promise.all([new Promise(l=>{
r.t.extension.isAllowedIncognitoAccess(e=>{l(e)})}),new Promise(l=>{r.t.extension.isAllowedFileSchemeAccess(e=>{l(e)})
})])],b={permissions:["contains","request","remove"],tabs:["update"]},_=l=>({
message:l&&l.message?l.message+"":JSON.stringify(l)});e.onReq=(l,e)=>p[l.n](l.q,e)
;let g=l=>l&&typeof l.ou=="string"&&n.uu.get(l.ou)!==!0?l.ou:null});