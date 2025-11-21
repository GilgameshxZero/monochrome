"use strict"
;__filename="background/ui_css.js",define(["require","exports","./store","./utils","./browser","./settings","./ports"],(e,t,n,l,r,o,i)=>{
let s,u;Object.defineProperty(t,"__esModule",{value:!0}),t.qe=t.tu=t.mergeCSS=t.eu=void 0;let f=0;t.eu=(e,r)=>{
if(e===-1)return t.mergeCSS(r,-1);e===2&&(n.oa=null);{let t;if(e===0&&(t=n.su.get("findCSS")))return u=null,n.No=c(t),
n.du=r.slice(s.length),void(n.Ke.c=n.su.get("omniCSS")||"")}l.so("vimium-c.css").then(l=>{s.slice(s.indexOf(",")+1)
;let r=d(l);{let e=(l=r.ui).indexOf("all:"),t=l.lastIndexOf("{",e),n=l.indexOf(";",e)
;l=l.slice(0,t+1)+l.slice(e,n+1)+l.slice(l.indexOf("\n",n)+1||l.length)}{
let e=l.indexOf("display:"),t=l.lastIndexOf("{",e);l=l.slice(0,t+1)+l.slice(e)}
n.Tn<109&&(l=l.replace(/\.PO\{[^}]+\}/,"")),l=l.replace(/\n/g,""),o.lu("innerCSS",s+l);let i=r.find
;o.lu("findCSS",i.length+"\n"+i),t.mergeCSS(n.z.userDefinedCss,e)})};let d=e=>{
let t=e?e.split(/^\/\*\s?#!?([A-Za-z:]+)\s?\*\//m):[""],n={ui:t[0].trim()};for(let e=1;e<t.length;e+=2){
let l=t[e].toLowerCase();n[l]=(n[l]||"")+t[e+1].trim()}return n},c=e=>{
let t=(e=e.slice(e.indexOf("\n")+1)).indexOf("\n")+1,n=e.indexOf("\n",t);return{c:e.slice(0,t-1).replace("  ","\n"),
s:e.slice(t,n).replace("  ","\n"),i:e.slice(n+1)}};t.mergeCSS=(e,u)=>{let f=n.su.get("innerCSS"),a=f.indexOf("\n")
;f=a>0?f.slice(0,a):f
;let m=d(e),S=m.ui?f+"\n"+m.ui:f,v=m["find:host"],_=m["find:selection"],p=m.find,b=m.omni,C="findCSS",y="omniCSS"
;f=n.su.get(C),a=f.indexOf("\n"),f=f.slice(0,a+1+ +f.slice(0,a));let g=f.indexOf("\n",a+1),j=f.slice(0,g).indexOf("  ")
;_=_?"  "+_.replace(/\n/g," "):"",(j>0?f.slice(j,g)!==_:_)&&(j=j>0?j:g,f=f.slice(a+1,j)+_+f.slice(g),g=j-(a+1)+_.length,
a=-1);let h=f.indexOf("\n",g+1),N=f.slice(0,h).indexOf("  ",g);if(v=v?"  "+v.replace(/\n/g," "):"",
(N>0?f.slice(N,h)!==v:v)&&(f=f.slice(a+1,N>0?N:h)+v+f.slice(h),a=-1),a<0&&(f=f.length+"\n"+f),p=p?f+"\n"+p:f,
f=(n.su.get(y)||"").split("\n",1)[0],b=b?f+"\n"+b:f,u===-1)return{ui:S.slice(s.length),find:c(p),omni:b}
;o.lu("innerCSS",S),o.lu(C,p),o.lu(y,b||null),t.eu(0,S),u!==0&&u!==1&&(l.nextConfUpdate(0),i.c(16384,e=>{
for(let t of e.J){let e=t.s.b;e&8&&(t.postMessage({N:11,H:n.du,f:e&32?r.k(t.s):void 0}),t.postMessage({N:6,d:{},v:n.au
}))}}),o.De({c:n.Ke.c}))},t.tu={fs:[2,2],ds(e){let n=t.tu.fs[e];return typeof n=="object"?n.matches:null},cs(e,n){
let l=n===2,r=t.tu.fs,o=r[e];if(l&&o===2){r[e]={
media:`(${e?"prefers-color-scheme":"prefers-reduced-motion"}: ${e?"dark":"reduce"})`,matches:!1},f||t.tu.Ao()
}else l||typeof o!="object"||(r[e]=2,f>0&&r.every(e=>typeof e!="object")&&(clearInterval(f),f=0))},Kr(e,l,r){
let o=t.tu.fs[e];t.qe(e,typeof o=="object"?o.matches:r!=null?r:(e?n.z.autoDarkMode:n.z.autoReduceMotion)===1,l?0:1)},
nu(){f>0&&performance.now()-n.Vo>27e4&&(clearInterval(f),f=0);{if(n.Tn<109)return
;let e=t.tu.fs.map(e=>typeof e=="object"?e.media:"");return void(e.join("")&&n.tl(10,e,null).then(t.tu.ms))}},Ao(){
f||(f=-2,setTimeout(()=>{t.tu.nu(),f=setInterval(t.tu.nu,6e4)},0))},ms(e){let n=e;for(let e=0;e<t.tu.fs.length;e++){
let l=t.tu.fs[e];typeof l=="object"&&l.matches!==n[e]&&(l.matches=n[e],t.tu.Kr(e))}},Ss:0},t.qe=(e,t,r,s)=>{var u
;let f=e?"d":"m",d=o.W(f,t),c=n.Ke.t;{let n=e?" dark ":" less-motion ",r=c&&` ${c} `,o=r.includes(n)
;c=t?o?c:c+n:r.replace(n," "),c=c.trim().replace(l.q," ")}if(r!==9)n.V[f]===d&&r!==2||(n.V[f]=d,r&&o.bn({N:6,d:[f]})),
c===n.Ke.t&&r!==2||(n.Ke.t=c,r&&o.De({t:c}));else{
for(let e of((u=i.An(s))===null||u===void 0?void 0:u.J)||[])e.postMessage({N:6,d:{[f]:d},v:n.au});s.postMessage({N:47,
d:{t:c},v:n.iu})}},n.pl.autoDarkMode=n.pl.autoReduceMotion=(e,n)=>{let l=n.length>12?0:1
;t.tu.cs(l,e=typeof e=="boolean"?e?2:0:e),t.tu.Kr(l,0,e===2?null:e>0)},r.k=()=>n.No,o.vl.then(()=>{
s=n.Ze.fo+","+n.Tn+";",n.du=n.su.get("innerCSS")||"",n.du&&!n.du.startsWith(s)?(n.su.set("vomnibarPage_f",""),
t.eu(1)):(t.eu(0,n.du),n.il&&n.il.then(e=>e&&t.eu(1))),n.pl.userDefinedCss=t.mergeCSS})});