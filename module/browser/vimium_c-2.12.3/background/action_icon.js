"use strict"
;__filename="background/action_icon.js",define(["require","exports","./store","./utils","./i18n","./browser","./ports"],(e,l,t,i,n,a,s)=>{
Object.defineProperty(l,"__esModule",{value:!0}),l.e=l.l=void 0
;let o,r=["/icons/enabled.bin","/icons/partial.bin","/icons/disabled.bin"];l.l=a.t.action;let u=e=>{
fetch(r[e]).then(e=>e.arrayBuffer()).then(l=>{
let n=new Uint8ClampedArray(l),a=l.byteLength/5,s=Math.sqrt(a/4)|0,r=s+s,u=i.i()
;u[s]=new ImageData(n.subarray(0,a),s,s),u[r]=new ImageData(n.subarray(a),r,r),t.n[e]=u;let c=o.get(e);o.delete(e)
;for(let l=0,i=c.length;l<i;l++)t.a.has(c[l])&&t.o(c[l],e,!0)})};l.e=()=>{let e=t.r;e!==!!t.n&&(t.o=e?c:t.u,
e?(t.n=[null,null,null],o=new Map,s.c(0,({d:{s:l},b:i})=>{if(l.f!==0){if(i&512&&e)return void(l.f=0);t.o(l.m,e?l.f:0)}
},()=>t.r===e)):setTimeout(()=>{t.r||t.n==null||(t.n=null,o=null)},200))};let c=(e,i,n)=>{let s
;if(e<0);else if(s=t.n[i]){let t=l.l.setIcon,i={tabId:e,imageData:s};n?t(i,a.g):t(i)
}else o.has(i)?o.get(i).push(e):(setTimeout(u,0,i),o.set(i,[e]))};l.e()});