"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],(e,t,s,o,n,l,r,i,u)=>{
Object.defineProperty(t,"__esModule",{value:!0});let c=e=>{let t=s.a.get(s.he);e==="quickNext"&&(e="nextTab");let o=i.uo
;s.ul!==6||(o&&o.get(e)?t==null||t.b&4||s.he<0?u.executeShortcut(e,t):n.tabsGet(s.he,t=>(u.executeShortcut(e,t&&t.status==="complete"?s.a.get(t.id):null),
n.g())):(o&&o.get(e)!==null&&(o.set(e,null),console.log("Shortcut %o has not been configured.",e)),t&&(s.O=t.d),
r.showHUD(`Shortcut "${e}" has not been configured.`)))};s.os=()=>{if(s.ul===6){
if(s.os)return o.ns(l.vl.then.bind(l.vl,s.os)),void(s.os=null);s.Nn||(l.gl("keyMappings"),s.G||(i.Xn["m-s-c"]=36)),
l.gl("exclusionListenHash"),l.gl("vomnibarOptions"),l.gl("autoDarkMode"),l.gl("autoReduceMotion"),
n.t.runtime.onConnectExternal.addListener(e=>{let t,{sender:o,name:n}=e
;if(o&&r.isExtIdAllowed(o)&&n.startsWith("vimium-c.")&&(t=n.split("@")).length>1){
if(t[1]!==s.Ze.GitVer)return e.postMessage({N:2,t:1}),void e.disconnect();r.OnConnect(e,t[0].slice(9)|1024)
}else e.disconnect()}),n.t.extension.isAllowedIncognitoAccess(e=>{s.Ze.ls=e===!1})}},
n.t.runtime.onConnect.addListener(e=>{if(s.ul===6)return r.OnConnect(e,e.name|0);e.disconnect()}),
n.t.commands.onCommand.addListener(c),l.vl.then(()=>{
l.gl("extAllowList"),n.t.runtime.onMessageExternal.addListener((e,t,o)=>{if(r.isExtIdAllowed(t)){
if(typeof e=="string")u.executeExternalCmd({command:e},t);else if(typeof e=="object"&&e)switch(e.handler){
case"shortcut":let n=e.shortcut;n&&c(n+"");break;case"id":return void o({name:"Vimium C",host:location.host,
shortcuts:!0,injector:s.Ze.is,version:s.Ze.fo});case 99:return void o({s:e.scripts?s.Ze.ol:null,version:s.Ze.fo,host:"",
h:"@"+s.Ze.GitVer});case"command":u.executeExternalCmd(e,t)}}else o(!1)}),l.gl("vomnibarPage",null),
l.gl("searchUrl",null)}),n.Me.onReplaced.addListener((e,t)=>{let o=s.a.get(t);if(s.us===t&&(s.us=e),o){s.a.delete(t),
s.a.set(e,o);for(let t of o.J)t.s.m=e;o.d.s.m=e;for(let o of s.Fe)o.s.m===t&&(o.s.m=e)}}),s.xl.er=(e,t,o)=>{
setTimeout(()=>{s.xl.er(e,t,o)},210)},s.ul=s.ul|4,s.os(),n.t.scripting.registerContentScripts([{id:"extend_click",
js:["content/extend_click_vc.js"],matches:["<all_urls>"],allFrames:!0,runAt:"document_start",world:"MAIN"}]).catch(e=>{
(e+"").includes("Duplicate script ID")||console.log("Can not register extend_click:",e)})});