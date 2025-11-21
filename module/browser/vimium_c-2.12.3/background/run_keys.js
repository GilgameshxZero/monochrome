"use strict"
;__filename="background/run_keys.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./i18n","./key_mappings","./run_commands"],(e,l,t,n,r,i,o,u,f,s)=>{
Object.defineProperty(l,"__esModule",{value:!0
}),l.parseEmbeddedOptions=l.parseKeyNode=l.runKeyInSeq=l.parseKeySeq=l.runKeyWithCond=void 0
;let a=Math.abs,d=["expect","keys","options","mask"],v=0,p=e=>{let l=n.i(),t=[],r=""
;for(let n in e)n.includes("$")||(n.startsWith("o.")?n.length>2&&(l[r=n.slice(2)]=e[n]):d.includes(n)||t.push(n))
;for(let n of t)l[r=n]=e[n];return r?l:null},c=(e,u)=>{let{host:f,iframe:s,fullscreen:a,element:d,incognito:v}=e
;if(f===void 0&&(f=e.host=e.url!=null?e.url:null,delete e.url),v!=null&&t.de===2!=!!v)return 1
;if(typeof f=="string"&&(f=e.host=o.Ol(f)),f!=null){let e,n=u.url
;if(n==null&&(f.t===3?["/*","*"].includes(f.v.p.pathname)&&f.v.p.search==="*"&&f.v.p.hash==="*":f.t===2&&((e=f.v.indexOf("/",f.v.indexOf("://")+3))===f.v.length-1||e===-1))){
let e=i.C(),l=e&&e.R||t.O;n=l?l.s.Jl:null}if(n==null&&(n=i.j(null,!0))instanceof Promise)return n.then(e=>{var n
;u.url=e||(t.O?(((n=i.C())===null||n===void 0?void 0:n.R)||t.O).s.Jl:""),l.runKeyWithCond(u)}),0;if(!o.Rl(f,n))return 1}
if(s!=null){if(!t.O&&s!==!1)return 1;if(typeof s=="string"&&(s=e.iframe=o.Ol(s)||!0),typeof s=="boolean"){
if(s!==!(!t.O||!t.O.s.Q))return 1}else if(!o.Rl(s,t.O.s.Jl))return 1}if(a==null);else{
if(u.fullscreen==null)return r.getCurWnd(!1,e=>(u.fullscreen=!!e&&e.state.includes("fullscreen"),l.runKeyWithCond(u),
r.g())),0;if(!!a!==u.fullscreen)return 1}if(d&&d!=="*"){let l=typeof d=="string"?[]:d
;typeof d=="string"&&(e.element=d.split(",").some(e=>{
let t=(e=e[0]==="*"?e.slice(1):e).indexOf("#"),r=e.indexOf("."),i=e.length;return e&&l.push({
tag:e.slice(0,t<0?r<0?i:r:r<0?t:Math.min(r,t)),id:t>=0?e.slice(t+1,r>t?r:i):"",
classList:n.Ki(r>=0?e.slice(r+1,t>r?t:i):"")}),e==="*"||e.includes(" ")})?(l.length=0,"*"):l);let r=u.element
;if(l.length){if(r==null)return t.O&&i.safePost(t.O,{N:13,n:performance.now(),c:u}),t.O?0:1
;if(!l.some(e=>r===0?e.tag==="body"&&!e.id&&!e.classList:(!e.tag||r[0]===e.tag)&&(!e.id||r[1]===e.id)&&(!e.classList.length||r[2].length>0&&e.classList.every(e=>r[2].includes(e)))))return 1
}}return 2},y=e=>{let l=e.expect;if(e.$normalized)return l
;let t=e=>e?typeof e!="string"?e instanceof Array?e:[]:(e=e.trim()).includes(" ")?e.split(/ +/):n.splitWhenKeepExpressions(e,",").map(e=>e.trim()):[],r=[]
;if(l)if(l instanceof Array)r=l.map(e=>e instanceof Array?{env:e[0],keys:t(e[1]),options:e[2]}:e&&typeof e=="object"?{
env:e.env||e,keys:t(e.keys),options:e.options}:null);else if(typeof l=="object")r=Object.keys(l).map(e=>{
let n=l[e],r=n&&typeof n=="object"&&!(n instanceof Array);return{env:e,keys:t(r?n.keys:n),options:r?n.options:null}
});else if(typeof l=="string"&&/^[^{].*?[:=]/.test(l)){let e=l.includes(":")?/:/:/=/
;r=l.split(l.includes(";")?/[;\s]+/g:/[,\s]+/g).map(l=>l.split(e)).map(e=>e.length!==2?null:{env:e[0].trim(),
keys:t(e[1]),options:null})}return r=r.map(e=>e&&e.env&&(e.keys.length||e.options)?e:null),
s.overrideOption("expect",r,e),s.overrideOption("keys",t(e.keys),e),s.overrideOption("$normalized",1,e),r},$=e=>{
let t=e.startsWith("#")?e.split("+",1)[0]:"";return{tree:l.parseKeySeq(e.slice(t?t.length+1:0)),
options:t.length>1?l.parseEmbeddedOptions(t.slice(1)):null}};l.runKeyWithCond=e=>{let n,r=a(t.x),o=i.C()
;t.O||(t.O=o?o.d:null),e=e||t.ki||{},t.ki=null;let u=y(t.$);for(let l of u){if(!l)continue;let t=l.env,r=t
;if(typeof r=="string"){if(!f.do)return void i.showHUD("No environments have been declared");if(r=f.do.get(r),
r===void 0)return void i.showHUD(`No environment named "${t}"`);if(typeof r=="string"&&(r=f.co(r,2),f.do.set(t,r)),
r===null)continue}let o=c(r,e);if(o===0)return;if(o===2){n=l;break}}
let g,m,h=n&&n.keys.length?n.keys:t.$.keys,j=n?typeof n.env=="string"?`[${n.env}]: `:`(${u.indexOf(n)})`:""
;if(h.length===0)i.showHUD(j+"Require keys: comma-seperated-string | string[]");else if(r>h.length&&h.length!==1)i.showHUD(j+"Has no such a key");else if(g=h[m=h.length===1?0:t.x>0?r-1:h.length-r],
g&&(typeof g=="string"||typeof g=="object"&&g.tree&&typeof g.tree=="object"&&typeof g.tree.t=="number")){
let r=h.length===1?t.x:1;if(typeof g=="string"){let e=t.$.mask;if(e!=null){let l=s.fillOptionWithMask(g,e,"",d,r)
;if(!l.ok)return void i.showHUD((l.result?"Too many potential keys":"No key")+" to fill masks");e=l.ok>0,g=l.result,
r=l.useCount?1:r}g=$(g),e||(h[m]=g)}let o=g.tree,u=g.options
;if(o.t===3||o.val.length===0)return void(o.t===3&&i.showHUD(o.val))
;let a=n&&n.options&&typeof n.options=="object"&&n.options||t.$.options||(t.$.$masked?null:p(t.$))
;a=s.concatOptions(a,u);let c=(v+1)%64||1,y={keys:o,repeat:r,options:a,cursor:o,timeout:0,id:"single",
fallback:s.parseFallbackOptions(t.$)};if(o.val.length>1||o.val[0].t!==0){let n="<v-runKey:$1>".replace("$1",""+c),r={
$seq:y,$then:n,$else:"-"+n,$retry:-999};y.id=n,v=c,s.replaceCmdOptions(r),t.Ln.set(n,f.ai("runKey",r)),
l.runKeyInSeq(y,1,e)}else s.replaceCmdOptions({$seq:y}),b(y,o.val[0]),k(o.val[0],y,e)
}else i.showHUD(j+"The key is invalid")},l.parseKeySeq=e=>{
let l,t=/^([$%][a-zA-Z]\+?)*([\d-]\d*\+?)?([$%][a-zA-Z]\+?)*((<([acmsv]-){0,4}.\w*(:i)?>|[^#()?:+$%-])+|-)(#[^()?:+]*)?/,r={
t:1,val:[],par:null},i=r;for(let o=e.length>1?0:e.length;o<e.length;o++)switch(e[o]){case"(":l=r,r={t:1,val:[],par:r},
l.val.push(r);break;case")":l=r;do{l=l.par}while(l.t===2);r=l;break;case"?":case":":
for(l=e[o]==="?"?null:r;l&&l.t!==2;)l=l.par;l&&!l.val.f||(l=r.par,r.par={t:2,val:{cond:r,t:null,f:null},par:l||(i={t:1,
val:[],par:null})
},l?l.t===1?l.val.splice(l.val.indexOf(r),1,r.par):l.val.t===r?l.val.t=r.par:l.val.f=r.par:i.val.push(r.par),l=r.par),
r={t:1,val:[],par:l},e[o]==="?"?l.val.t=r:l.val.f=r;break;case"+":break;default:
for(;o<e.length&&!"()?:+".includes(e[o]);){let l=t.exec(e.slice(o));if(!l){let l=e.slice(o);return{t:3,
val:"Invalid item to run: "+(l.length>12?l.slice(0,11)+"\u2026":l),par:null}}let i=l[0],u=i.indexOf("#")
;if(u>0&&/[#&]#/.test(i.slice(u)))i=e.slice(o),o=e.length;else if(u>0&&/["\[]/.test(i.slice(u))){
let l=n.Zi(e.slice(o+u));i=i.slice(0,u)+l[0],o+=u+l[1]}else o+=i.length;r.val.push({t:0,val:i,par:r})}o--}
return e.length===1&&i.val.push({t:0,val:e,par:i}),n.Gl(),i};let g=(e,l)=>{let t,n,r=!0,i=e;for(i.t===0&&(t=i.par,
n=t.val.indexOf(i),
i=n<t.val.length-1&&l>0?t.val[n+1]:(r=!1,t));i&&i.t!==0;)if(r&&i.t===1&&i.val.length>0)i=i.val[0];else if(r&&i.t===2)i=i.val.cond;else{
if(!i.par){i=null;break}i.par.t===1?(t=i.par,n=t.val.indexOf(i),r=n<t.val.length-1,r&&l<0&&(l=1),
i=r?t.val[n+1]:t):(t=i.par,r=i===t.val.cond,i=r&&(l>0?t.val.t:(l=1,t.val.f))||(r=!1,t))}return i},b=(e,l)=>{
let n=t.$,r=e.fallback
;l&&n&&(delete n.$then,delete n.$else),r&&(l?e.options=e.options?Object.assign(r,e.options):r:(n===null||n===void 0?void 0:n.$f)&&(r.$f=s.makeFallbackContext(r.$f,0,n.$f.t)),
n&&(n.$f=r.$f))};l.runKeyInSeq=(e,l,n)=>{var r,o
;let f=g(e.cursor,l),a=f&&g(f,1),d=f&&g(f,-1),p=!(f&&(a||d)),c=e.fallback,y=e.id
;p&&("<v-runKey:$1>".replace("$1",""+v)===e.id&&(v=Math.max(--v,0)),t.Ln.delete(y),clearTimeout(e.timeout||0),b(e,f))
;let $=t.$;if(!f){if(c&&s.runNextCmdBy(l>0?1:0,c,1))return
;let e=l>0?0:((r=$.$f)===null||r===void 0?void 0:r.t)||((o=c===null||c===void 0?void 0:c.$f)===null||o===void 0?void 0:o.t)||0
;return void(e&&i.showHUD(u.Ce(`${e}`)))}
let m=a&&$.$then?typeof a.val=="string"?a.val:a.val.prefix:"",h=d&&$.$else?typeof d.val=="string"?d.val:d.val.prefix:"",j=(m.includes("$l")?1:0)+(h.includes("$l")?2:0),A=(m.includes("$D")?1:0)+(h.includes("$D")?2:0)
;(j||A)&&(e.cursor===e.keys&&(s.overrideCmdOptions({}),$=t.$),$.$then=(j&1?"$l+":"")+(A&1?"$D+":"")+$.$then,
$.$else=(j&2?"$l+":"")+(A&2?"$D+":"")+$.$else);let z=p?0:e.timeout=setTimeout(()=>{let e=t.Ln.get(y),l=e&&e.po
;l&&l.$seq&&l.$seq.timeout===z&&t.Ln.delete(y)},3e4);k(f,e,n)},l.parseKeyNode=e=>{let t=e.val
;if(typeof t!="string")return t
;let n=/^([$%][a-zA-Z]\+?|-)+/.exec(t),r=!!n&&n[0].includes("-"),i=!n||"+-".includes(n[0].slice(-1)),o=n?n[0].replace(/[+-]/g,"").replace(/%/g,"$"):""
;t=n?t.slice(n[0].length):t,n=/^\d+/.exec(t);let u=(r?-1:1)*(n&&parseInt(n[0],10)||1);t=n?t.slice(n[0].length):t,
t=i||n||!t.startsWith("+")?t:t.slice(1);let f=t.indexOf("#",1),s=f>0?t.slice(0,f):t,a=null
;return f>0&&f+1<t.length&&(t=t.slice(f+1),a=l.parseEmbeddedOptions(t)),e.val={prefix:o,count:u,key:s,options:a}},
l.parseEmbeddedOptions=e=>{
let l=/(^|&)#/.exec(e),t=l?e.slice(l.index+l[0].length):"",r=e=>/\s/.test(e)?JSON.stringify(e).replace(/\s/g,n.$l):e
;if(e=(l?e.slice(0,l.index):e).split("&").map(e=>{let l=e.split("=",1)[0],t=e.slice(l.length)
;return l?l+(t?"="+r(n.rl(t.slice(1))):""):""}).join(" "),t){let l=t.split("=",1)[0],n=t.slice(l.length)
;e=l?(e?e+" ":"")+l+(n?"="+r(n.slice(1)):""):e}return f.co(e,2)};let k=(e,r,i)=>{
let o=l.parseKeyNode(e),u=r.cursor===r.keys,f=u||o.prefix.includes("$c"),a=o.prefix.includes("$W"),d=t.$,v=a?s.concatOptions(o.options,n.Sn({
$then:"",$else:""})):s.concatOptions(r.options,o.options);r.cursor=e,A(o.key,o.count*(f?r.repeat:1),v,i,null,u),
a&&setTimeout(()=>{s.replaceCmdOptions(d),l.runKeyInSeq(r,1,null)},0)
},m=e=>!e.includes("<")&&!e.includes(":",1),h=e=>m(e)&&t.Ln.get(`<v-${e}>`)||null;t.I=(e,l,n,r)=>{
e=e.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,"");let i=/^\d+|^-\d*/.exec(e),o=1;if(i!=null){let l=i[0];e=e.slice(l.length),
o=l!=="-"?parseInt(l,10)||1:-1}r&&(o*=r),e=e.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,"");let u=1
;for(;u=e.indexOf("#",u)+1;){let l=e.slice(0,u-1);if(t.Ln.has(l)||h(l)||/^[a-z]+(\.[a-z]+)?$/i.test(l))break}t.O=l,
t.Re=0,t.$=null,A(u?e.slice(0,u-1):e,o,u?e.slice(u):null,null,n)};let j=e=>{let l=t.$;for(;l&&l!==e;)l=l.$o;return l===e
},A=(e,r,o,u,a,d)=>{let v=e,p=t.Ln.get(e)||m(e)&&t.Ln.get(v=`<v-${e}>`)||null,c=!0;if(p==null&&e in f.to&&(c=!1,
p=f.ai(e,null)),p==null){let l=/^\w+$/.test(e)?v:e
;return void i.showHUD(`"${l.length>=20?l.slice(0,19)+"\u2026":l}" has not been mapped`)}if(p.Rn===38&&p.Vn&&(t.na(p),
j(p.po)))return void i.showHUD('"runKey" should not call itself')
;typeof o=="string"&&(o=o?l.parseEmbeddedOptions(o):null);let y=t.$,$=y&&s.parseFallbackOptions(y),g=y&&y.$f
;if(o&&typeof o=="object"||$||g){let e=f.zn(p);p=c?Object.assign({},p):p;let l=n.i();o&&s.copyCmdOptions(l,n.Sn(o)),
$&&s.copyCmdOptions(l,n.Sn($)),
e&&s.copyCmdOptions(l,e),l.$f=g,o&&"$count"in o?l.$count=o.$count:e&&"$count"in e&&(o&&"count"in o||(l.$count=e.$count)),
p.po=l,f.io(p,f.to[p.Rn===38&&p.Vn?"runKey":p.ra])}n.Gl(),d&&p.Rn===38&&p.Vn?setTimeout(()=>{t.ki=u,
s.executeCommand(p,r,t.Re,t.O,0,a)},0):(t.ki=u,s.executeCommand(p,r,t.Re,t.O,0,a))};t.na=(e,r)=>{var i,o,u,a
;let v=f.zn(e);if(v||(v=e.po=n.i()),v.$normalized===2)return;let c=v,b=!0;y(c),c.$normalized=2;let k=1
;for(c.$count&&(k=c.$count,c=v=s.copyCmdOptions(n.i(),c));c&&y(c).length===0&&c.keys.length>=1;){let y=c.keys,m=y[0]
;if(b=b&&y.length===1,typeof m=="string"){let e=c.mask;if(e!=null){c!==v&&(c=v=s.concatOptions(c,v||n.i()))
;let l=s.fillOptionWithMask(m,e,"",d,1,v);if(!l.ok)return;e=l.ok>0,m=l.result,b=b&&!!l.value&&!l.useCount&&!l.useDict}
m=$(m),e||(y[0]=m)}let j=m.tree.t===1?g(m.tree,1):null;if(!j)return;b=b&&m.tree.val.length===1&&m.tree.val[0]===j
;let A=l.parseKeyNode(j),z=A.key,_=t.Ln.get(z)||h(z);if(_!=null&&_.Rn===38&&_.Vn){if(r||(r=[e]),
r.includes(_))return e.Rn=41,e.ra="showHUD",void(e.po=n.Sn({text:'"runKey" should not call itself'}));r.push(_),
t.na(_,r.slice(0))}let w=_?_.ra:z in f.to?z:null;if(!w)return;let x=_!=null&&_.Rn===38&&_.Vn
;if(!x&&!b)return void(e.ra=w)
;c!==v&&(v=s.concatOptions(c,v)),v=v.options?s.copyCmdOptions(n.i(),v.options):v.$masked?null:p(v)
;let O=(a=(o=(i=A.options)===null||i===void 0?void 0:i.$count)!==null&&o!==void 0?o:(u=m.options)===null||u===void 0?void 0:u.$count)!==null&&a!==void 0?a:v===null||v===void 0?void 0:v.$count
;v=s.concatOptions(s.concatOptions(v,m.options),A.options),
v=!v||v!==m.options&&v!==A.options?v:s.copyCmdOptions(n.i(),v),
v&&("count"in v||O!=null)&&(O=O!=null?parseFloat(O)||1:parseFloat(v.count||1)||1,delete v.count),
k*=(O!==null&&O!==void 0?O:1)*A.count;let T=_&&f.zn(_);if(!x)return v=s.concatOptions(T,v),
v&&v===T&&(v=s.copyCmdOptions(n.i(),v)),k!==1&&((v||(v=n.i())).$count=k),void Object.assign(e,f.ai(w,v))
;c=!v||v.keys===void 0&&v.expect===void 0&&v.mask===void 0?T||n.i():v=s.concatOptions(T,v)}}});