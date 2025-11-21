"use strict";__filename="background/i18n.js",define(["require","exports","./store","./utils","./browser"],(e,r,n,l,o)=>{
let s,t;Object.defineProperty(r,"__esModule",{value:!0}),r.eo=r.getI18nJson=r.ro=r.no=r.Xl=r.A=r.Ce=r.lo=r.oo=void 0,
r.oo=1;let i=0;r.lo=[],r.Ce=e=>o.t.i18n.getMessage(e),r.A=(e,n)=>{if(i===1){let r=t.get(e)
;return n!=null&&r?r.replace(/\$\d/g,e=>n[+e[1]-1]):r||""}return i||(i=r.getI18nJson("background").then(e=>{t=e,i=1})),
i.then(r.A.bind(null,e,n))},r.Xl=(e,n)=>{if(n.forEach((e,n,l)=>{if(e instanceof Array){let o=e[0]
;l[n]=i===1?t.get(o)||o:r.A(o).then(e=>e||o)}}),n.some(e=>e instanceof Promise)){let l=Promise.all(n)
;return(i===1?l:(i||r.A("NS")).then(()=>l)).then(n=>r.A(e,n))}return r.A(e,n)
},r.no=(e,r)=>e&&e.split(" ").reduce((e,n)=>e||(n.includes("=")?r&&n.startsWith(r)?n.slice(r.length+1):e:n),""),
r.ro=e=>{let n=r.Ce("i18n");return r.no(n,e||"background")||r.Ce("lang1")||"en"},
r.getI18nJson=e=>r.oo===0?(r.oo=Promise.all([l.so("/_locales/en/messages.json"),o.ye(o.t.i18n.getAcceptLanguages)]).then(([e,r])=>{
let n=((e.get("i18nAll")||{}).message||"").split(" "),o=""
;for(o of r||[])if(n.includes(o)||n.includes(o=o.split("-")[0])||(o=""),o)break
;return o?Promise.all([e,l.so(`/_locales/${o}/messages.json`)]):[e]}).then(e=>{s=new Map,r.oo=1
;for(let r of e)for(let[e,n]of r.entries())s.set(e,n.message)
})).then(r.getI18nJson.bind(0,e)):l.so(`/i18n/${r.ro(e)}/${e}.json`),r.eo=()=>{let e=r.lo,n=["$1","$2","$3","$4"]
;for(let r=0;r<124;r++)e.push(o.t.i18n.getMessage(""+r,n));r.eo=null}});