"use strict"
;__filename="background/key_mappings.js",define(["require","exports","./store","./utils","./utils","./settings","./exclusions"],(e,t,o,a,n,i,r)=>{
Object.defineProperty(t,"__esModule",{value:!0}),t.Xn=t.Yn=t.to=t.ao=t.zn=t.ai=t.io=t.co=t.D=t.Fn=t.uo=t.do=t.mo=void 0
;let l,s,c,u=n.tryParse,d=/<(?!<)(?:.-){0,4}.\w*?(?::i)?>|./g;t.mo=d,t.uo=s,t.do=c;let m,p=!0,b=null;t.Fn=b,
t.D=e=>e.length>1?e==="<escape>"?"esc":e.slice(1,-1):e
;let v=e=>e.length>1?`<${e}>`:e,g=(e,o)=>e.length<=o?null:e.includes(" $",o)||e.includes(" =",o)?t.co(e.slice(o+1),e.includes(" $if=",o)?0:1):e.slice(o+1)
;t.co=(e,t)=>{let o=a.i(),n=0;for(let a of e.split(" ")){let e=a.indexOf("=");if("$#/=_".includes(a[0])){
if(e===0||a==="__proto__"||a[0]==="$"&&!"$if=$key=$desc=$count=$then=$else=$retry=".includes(a.slice(0,e+1))){
t<2&&$("%s option key:",e===0?"Missing":"Unsupported",a);continue}if(a[0]==="#"||a.startsWith("//"))break}
if(e<0)o[a]=!0,n=1;else{let i=a.slice(e+1);a=a.slice(0,e),o[a]=t===2?i&&k(i):t===1?1:i&&u(i),n=1}}
return n===1?t===1?e:o:null};let k=e=>{let t
;return e!=="false"&&(e==="null"?null:e==="true"||((e>="0"?e<":":e[0]==="-")?(t=parseFloat(e))+""===e?t:/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]\d+)?$/.test(e)?isNaN(t)?u(e):t:e:'{["'.includes(e[0])?u(e):e))
};t.io=(e,o)=>{let n,i=e.po;if(o===void 0&&(o=t.to[e.ra]),n=o.length<4?null:a.Sn(o[3]),
typeof i=="string"&&(i=t.co(i,3)),i){
if(("$count"in i||"count"in i)&&(o[2]===1?delete i.$count:i.$count=i.$count!=null?parseFloat(i.$count)||1:(parseFloat(i.count||1)||1)*(n&&n.$count||1),
delete i.count),i.$if){if(w(i)===!1)return!1;delete i.$if}if(n&&a.Zn(i,n),o[0]===2&&!o[1]&&f(i,e))return!0}else i=n
;return e.po=i,!0};let f=(e,t)=>{
let o=e.mode,n=e.m,r=e.characters,l=e.action,s=e.button,c=r&&typeof r=="string"?a.bo(i.W("c",r)):null,u=typeof o=="string"&&o.endsWith(".queue")
;if(c&&c.length<4)return t.Rn=41,t.Vn=1,t.po=a.Sn({text:"Too few characters for LinkHints",isError:!0}),t.vo=1,!0
;c?e.c=c:"c"in e&&delete e.c,r!=null&&delete e.characters,"action"in e&&delete e.action,"mode"in e&&delete e.mode,
o=l?C[l]:typeof o=="number"?o:typeof o=="string"?C[o.split(".",1)[0]]:null,o=o!=null?o:Math.max(0,n|0),
o>33&&(o=o===65?e.url?64:o:o===40?e.url?e.join!=null?59:42:e.join!=null?57:o:o>79?o-16:o),u&&(o=o<64?o|16:o),
s!=null&&(e.button=typeof s=="string"?s==="right"||s==="auxclick"?2:s.startsWith("mid")||s.startsWith("aux")?1:0:Math.max(0,Math.min(s|0,2))),
e.xy!==void 0&&(e.xy=a.Z(e.xy)),(e.direct||e.target)&&(e.direct=e.direct||e.target,
e.directOptions=e.directOptions||e.targetOptions,delete e.target,delete e.targetOptions,o&=-17),
e.hideHud!=null&&(e.hideHUD||(e.hideHUD=e.hideHud),delete e.hideHud),o!==n&&(e.m=o),o>63&&(t.vo=1)};t.ai=(e,o,n)=>{
n===void 0&&(n=t.to[e]);let i={Rn:n[0],Vn:n[1],ra:e,po:o||(n.length<4?null:a.Sn(n[3])),go:null,vo:n[2]}
;return o&&typeof o=="object"&&!t.io(i,n)?null:i},t.zn=e=>{let o=e.po;return typeof o=="string"&&(t.io(e),o=e.po),o}
;let T=(e,t)=>{let o;return e.length>t&&(o=e.indexOf(" $if=",t))>0&&!/ (#|\/\/)/.test(e.slice(t,o+2))},w=e=>{
let t=e&&typeof e=="object"&&e.$if,a=!1;return typeof t=="string"&&(t=t.toLowerCase(),t[0]==="!"&&(t=t.slice(1).trim(),
a=!0),t=/(?:mac|win|linux)/.test(t)?{sys:t}:/(?:chrom|edg|firefox|safari)/.test(t)?{browser:{c:1,
e:t.includes("edge")&&!t.includes("chrom")?4:1,f:2,s:8}[t[0]]
}:null),t&&typeof t=="object"?t.sys&&t.sys!==o.Ze.ko||t.browser&&!(t.browser&1)||t.before&&t.before.replace("v","")<o.Ze.fo?a:!a:null
};t.ao=(e,t)=>{let o=!0,n=0,i=t;if(e[t].startsWith("#if")){
let n=e[t].slice(4).trim(),i=n.startsWith("{")?u(n):n.split(/#|\/\//)[0];o=i&&w(a.Sn({$if:i}))===!1}
if(o)for(;++i<e.length;)if(e[i].startsWith("#endif")){if(--n<0)break}else e[i].startsWith("#if")&&n++;return i}
;let y=e=>`<${e.slice(1,-1)+":i"}>`,h=e=>{
let n,i,r,u,v,k,f,h,H,x=0,M=new Map,C=new Map,I=null,U=!1,V=null,F=null,N=null,S="color:red";for(m=null,
n=e.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").replace(/[\t ]+/g," ").split("\n");x<n.length&&(!n[x]||(i=n[x])[0]==="#");x++)i&&i[1]==="!"&&(i=i.slice(2).trim(),
i==="no-check"&&(U=!0));for(p=!U,x>=n.length||n[x]!=="unmapAll"&&n[x]!=="unmapall"||(V=0,x++),r=n.length;x<r;x++){
let e=n[x].trim();if(e<"$"){/^#(?:if|else)\b/.test(e)&&(x=t.ao(n,x),U=!1);continue}
let r=e.split(" ",3),l=r[0],s=r.length>1?r[1]:"",c=r.length>2?r[2]:"",p=l.length+s.length+c.length+2,O=U;switch(l){
case"map":case"map!":case"run":case"run!":let n=l==="run"
;u=void 0,U||(!s||s.length>8&&s.includes("<__proto__>")?$('Unsupported key sequence %c"%s"',S,s||'""',`for "${c||""}"`):l.length===4&&(s.length<2||s.match(d).length!==1||s.slice(-3,-2)===":")?$('"map!" should only be used for a single long key without mode suffix'):M.has(s)&&!T(e,p)?$('Key %c"%s"',S,s,"has been mapped to",M.get(s).ra):c?n||(u=t.to[c])?!(s>="0"&&s<":"||s[0]==="-")||m&&m.has(s[0])?O=!0:$('Invalid key: %c"%s"',S,s,"- a first char can not be '-' or numbers, unless before is `unmap "+s[0]+"`"):$('Command %c"%s"',S,c,"doesn't exist"):$((n?"Lack target when running":"Lack command when mapping")+' %c"%s"',S,s)),
O&&(k=n?t.ai("runKey",g(` keys="${c.replace(/"|\\/g,"\\$&")}"`+e.slice(p),0),u):t.ai(c,g(e,p),u),k&&(M.set(s,k),
l.length===4&&M.set(y(s),k)));break;case"unmapAll":case"unmapall":M=new Map,C=new Map,I=m=F=N=null,V=0,
b&&$("All key mappings is unmapped, but there %s been %c%d error%s%c before this instruction",b.length>1?"have":"has",S,b.length,b.length>1?"s":"","color:auto")
;break;case"mapKey":case"mapkey":
h=s.length>1&&s.slice(-3,-1)===":o",H=h?N:F,U?i=t.D(s):!c||e.length>p&&!/^(#|\/\/|\$if=\{)/.test(e.slice(p).trimLeft())?$("mapKey: need %s source and target keys:",c?"only":"both",e):s.length>1&&!/^<(?!<[^:]|__proto__>)([acms]-){0,4}.\w*(:[a-z])?>$/.test(s)?$("mapKey: a source key should be a single key with an optional mode id:",e):c.length>1&&!/^<(?!<|__proto__>)([a-z]-){0,4}.\w*>$/.test(c)?$("mapKey: a target key should be a single key:",e):(i=t.D(s),
H&&i in H&&H[i]!==t.D(c)?m&&m.has(i[0])&&i.slice(1)===":n"?w(g(e,p))!==!1&&$("`mapKey %s` and `unmap %s...` can not be used at the same time",s,i[0]):T(e,p)?O=!0:$('The key %c"%s"',S,s,"has been mapped to another key:",H[i].length>1?`<${H[i]}>`:H[i]):O=!0),
O&&w(g(e,p))!==!1&&(H||(H=a.i(),h?N=H:F=H),H[i]=t.D(c),(i.length<2||i.slice(-2,-1)!==":")&&((N||(N=a.i()))[i]=t.D(c)))
;break;case"shortcut":case"command":
U||(c?!(s.startsWith("userCustomized")&&s.length>14)&&o.Ze.To.indexOf(s)<0?$('Shortcut %c"%s"',S,s,"is not a valid name"):C.has(s)&&!T(e,p-1-c.length)?$('Shortcut %c"%s"',S,s,"has been configured"):O=!0:$("Lack command name and options in shortcut:",e)),
O&&(f=g(e,p-1-c.length),w(f)!==!1&&(i=L(C,s,f),i&&$('Shortcut %c"%s"',S,s,i)));break;case"env":
U||(c?I&&I.has(s)&&!T(e,p-1-c.length)?$('The environment name %c"%s"',S,s,"has been used"):O=!0:$("Lack conditions in env declaration:",e)),
O&&(f=g(e,p-1-c.length),w(f)!==!1&&(I||(I=new Map)).set(s,f));break;case"unmap":case"unmap!":
!s||c&&!"#$".includes(c[0])?$(`unmap: ${c?"only ":""}needs one mapped key:`,e):w(g(e,l.length+s.length+1))===!1||(v=-1,
V!==0&&(v=(V||(V=_.split(" "))).indexOf(s))>=0&&!(v&1)||M.has(s)||s.length>1&&M.has(y(s))?(M.delete(s),
l.length===6&&s.length>1&&M.delete(y(s)),
v<0||V.splice(v,2)):(s.length===1?s>"/"&&s<":"||s[0]==="-":t.D(s)==="esc"||s==="<c-[>")?(i=t.D(s)+":n",
F&&i in F&&F[i]!=="c-v-"+s?$("`unmap %s...` and `mapKey <%s>` can not be used at the same time",s,i):s.length===1&&m&&m.has(s)?l.length!==6&&$('Number prefix: %c"%s"',S,s,"has been unmapped"):(s.length===1&&(m||(m=new Set)).add(s),
F||(F=a.i()),
F[i]="c-v-"+(s.length===1?s:s[1]==="e"?"esc":"["),s.length>1&&(F[i.slice(0,-1)+"i"]=F[i]))):l.length!==6&&$('Unmap: %c"%s"',S,s,"has not been mapped"))
;break;default:$('Unknown mapping command: %c"%s"',S,l,"in",e)}}
for(let e of o.Ze.To)e.startsWith("user")||C.has(e)||(k=t.ai(e,null))&&C.set(e,k);if(V!==0)for(l=M.size,
V||(V=_.split(" ")),r=V.length,x=0;x<r;x+=2)M.has(V[x])||M.set(V[x],t.ai(V[x+1],null));o.Ln=M,t.uo=s=C,t.do=c=I,o.wo=F,
o.Ke.m=N},L=(e,o,a)=>{let n,i=1,r=(a=a&&typeof a=="string"?t.co(a,3):a)&&a.command||(i=0,
o.startsWith("user")?"":o),l=r?1:0;return l&&r in t.to&&(i&&delete a.command,(n=t.ai(r,a))&&e.set(o,n),l=2),
l<1?'requires a "command" option':l>1?"":"gets an unknown command"},H=e=>{let t=0;for(let o in e){let a=o.length
;if(a>2&&o[a-2]===":")t|=o[a-1]==="i"?2:o[a-1]==="n"?1:4;else{
let n=e[o],i=n.length>1,r=i&&(n==="esc"||n==="c-["||n.startsWith("v-")||(n=n.slice(n.lastIndexOf("-")+1))<"f:"&&n>"f0")
;t|=a>1||i?r?40:8:o.toUpperCase()!==o&&n.toUpperCase()!==n?16:8}}return t},x=e=>{let n=new Map,i=e!==null,s=b!==null
;i&&(o.Nn=t.Fn=b=null,h(e));let c,u=a.on(o.Ln),v=i&&p;i&&(o.yo=(o.wo?H(o.wo):0)|(u.join().includes(":i>")?64:0))
;for(let e=0;e<u.length;e++){let a=u[e],i=a.match(d),r=i.length-1,s=t.D(i[0]),m=n.get(s)
;if(e>=l&&m!==void 0&&(m===1||r===0||typeof m[i[1]]=="object")){o.Ln.delete(a);continue}if(r===0){m!==void 0&&v&&M(a,m),
n.set(s,1);continue}if(m===1){v&&M(i[0],a);continue}let p=m,b=1;for(m||n.set(s,p={});(c=p[t.D(i[b])])&&c!==1&&b<r;)b++,
p=c;if(c!==1){for(c&&v&&M(a,c);b<r;)p=p[t.D(i[b++])]={};p[t.D(i[r])]=1}else v&&M(i.slice(0,b+1),a)}if(m)for(let e of m){
let t=n.get(e);t&&n.set("c-v-"+e,t)}if(u.length>0){n.set("-",2);for(let e=0;e<=9;e++)n.set(""+e,2)}m=null,
i&&(b?b.length>1?(console.group(b.length+" Errors in custom Key mappings:"),b.map(e=>console.log(...e)),
console.groupEnd()):console.log.apply(console,b[0]):s&&console.log("The new key mappings have no errors"))
;let g=r.cn(),k=e=>{for(let t in e){let o=e[t]
;o!==1?t.startsWith("v-")||k(o):(g!==!0&&n.get(t)===1&&(!g||!g.has(t))&&(t.length<2||!n.has(t+":i"))||t.startsWith("v-")&&typeof n.get(t)!="object")&&delete e[t]
}};n.forEach((e,t)=>{t.startsWith("v-")?e===1&&n.delete(t):typeof e=="object"&&k(e)});let f={},T=a.on(n).sort()
;for(let e of T)f[e]=n.get(e);o.Nn=f,e&&I(e)},M=(e,t)=>{let o=[],a=(e,t)=>{for(let[n,i]of Object.entries(t))n=e+v(n),
i===1?o.push(n):a(n,i)};e=typeof e!="string"?e.map(v).join(""):e,t=typeof t!="string"?(a("",t),
o.join(", ")):t.slice(e.length),$('Inactive suffixes: %o under "%s"',t,e)},$=function(){
(b||(t.Fn=b=[])).push([].slice.call(arguments,0))
},_="? showHelp <a-c> previousTab <a-s-c> nextTab d scrollPageDown <c-e> scrollDown f LinkHints.activate <f1> simBackspace <s-f1> switchFocus <f2> switchFocus <f8> enterVisualMode G scrollToBottom gf nextFrame gg scrollToTop gi focusInput gn toggleVomnibarStyle gs toggleViewSource gt nextTab gu goUp gF mainFrame gT previousTab gU goToRoot g0 firstTab g$ lastTab h scrollLeft H goBack i enterInsertMode j scrollDown J previousTab K nextTab k scrollUp l scrollRight L goForward <a-m> toggleMuteTab N performBackwardsFind n performFind <a-n> performAnotherFind o Vomnibar.activate <a-p> togglePinTab r reload R reloadGivenTab <a-r> reloadTab <a-s-r> reopenTab t createTab <a-t> createTab u scrollPageUp V enterVisualLineMode v enterVisualMode <a-v> nextTab W moveTabToNextWindow x removeTab X restoreTab yt duplicateTab yy copyCurrentUrl <c-y> scrollUp zH scrollToLeft zL scrollToRight / enterFindMode ` Marks.activate ^ visitPreviousTab [[ goPrevious ]] goNext << moveTabLeft >> moveTabRight b Vomnibar.activateBookmarks ge Vomnibar.activateUrl gE Vomnibar.activateUrlInNewTab m Marks.activateCreate p openCopiedUrlInCurrentTab yf LinkHints.activateCopyLinkUrl B Vomnibar.activateBookmarksInNewTab F LinkHints.activateOpenInNewTab O Vomnibar.activateInNewTab P openCopiedUrlInNewTab T Vomnibar.activateTabs <a-f> LinkHints.activateWithQueue yv LinkHints.activateSelect yi LinkHints.activateCopyImage"
;t.to={__proto__:null,"LinkHints.activate":[2,0,0,{m:0}],"LinkHints.activateCopyImage":[2,0,0,{m:36}],
"LinkHints.activateCopyLinkText":[2,0,0,{m:40}],"LinkHints.activateCopyLinkUrl":[2,0,0,{m:42}],
"LinkHints.activateDownloadImage":[2,0,0,{m:35}],"LinkHints.activateDownloadLink":[2,0,0,{m:44}],
"LinkHints.activateEdit":[2,0,1,{m:67}],"LinkHints.activateFocus":[2,0,0,{m:34}],"LinkHints.activateHover":[2,0,0,{m:32
}],"LinkHints.activateLeave":[2,0,0,{m:33}],"LinkHints.activateMode":[2,0,0,{m:0}],
"LinkHints.activateModeToCopyImage":[2,0,0,{m:36}],"LinkHints.activateModeToCopyLinkText":[2,0,0,{m:40}],
"LinkHints.activateModeToCopyLinkUrl":[2,0,0,{m:42}],"LinkHints.activateModeToDownloadImage":[2,0,0,{m:35}],
"LinkHints.activateModeToDownloadLink":[2,0,0,{m:44}],"LinkHints.activateModeToEdit":[2,0,1,{m:67}],
"LinkHints.activateModeToFocus":[2,0,1,{m:34}],"LinkHints.activateModeToHover":[2,0,0,{m:32}],
"LinkHints.activateModeToLeave":[2,0,0,{m:33}],"LinkHints.activateModeToOpenImage":[2,0,0,{m:37}],
"LinkHints.activateModeToOpenIncognito":[2,0,0,{m:45}],"LinkHints.activateModeToOpenInNewForegroundTab":[2,0,0,{m:3}],
"LinkHints.activateModeToOpenInNewTab":[2,0,0,{m:2}],"LinkHints.activateModeToOpenUrl":[2,0,0,{m:46}],
"LinkHints.activateModeToOpenVomnibar":[2,0,1,{m:65}],"LinkHints.activateModeToSearchLinkText":[2,0,0,{m:38}],
"LinkHints.activateModeToSelect":[2,0,0,{m:66}],"LinkHints.activateModeToUnhover":[2,0,0,{m:33}],
"LinkHints.activateModeWithQueue":[2,0,0,{m:18}],"LinkHints.activateOpenImage":[2,0,0,{m:37}],
"LinkHints.activateOpenIncognito":[2,0,0,{m:45}],"LinkHints.activateOpenInNewForegroundTab":[2,0,0,{m:3}],
"LinkHints.activateOpenInNewTab":[2,0,0,{m:2}],"LinkHints.activateOpenUrl":[2,0,0,{m:46}],
"LinkHints.activateOpenVomnibar":[2,0,1,{m:65}],"LinkHints.activateSearchLinkText":[2,0,0,{m:38}],
"LinkHints.activateSelect":[2,0,0,{m:66}],"LinkHints.activateUnhover":[2,0,0,{m:33}],
"LinkHints.activateWithQueue":[2,0,0,{m:18}],"LinkHints.click":[2,0,0,{direct:!0,m:0}],"LinkHints.unhoverLast":[7,0,1,{
u:!0}],"Marks.activate":[11,1,0],"Marks.activateCreate":[11,1,0,{mode:"create"}],"Marks.activateCreateMode":[11,1,0,{
mode:"create"}],"Marks.activateGoto":[11,1,0],"Marks.activateGotoMode":[11,1,0],"Marks.clearGlobal":[18,1,1],
"Marks.clearLocal":[18,1,1,{local:!0}],"Vomnibar.activate":[10,1,0],"Vomnibar.activateBookmarks":[10,1,1,{mode:"bookm"
}],"Vomnibar.activateBookmarksInNewTab":[10,1,1,{mode:"bookm",newtab:1}],"Vomnibar.activateEditUrl":[10,1,0,{url:!0}],
"Vomnibar.activateEditUrlInNewTab":[10,1,0,{url:!0,newtab:1}],"Vomnibar.activateHistory":[10,1,1,{mode:"history"}],
"Vomnibar.activateHistoryInNewTab":[10,1,1,{mode:"history",newtab:1}],"Vomnibar.activateInNewTab":[10,1,0,{newtab:1}],
"Vomnibar.activateTabs":[10,1,1,{mode:"tab",newtab:1}],"Vomnibar.activateTabSelection":[10,1,1,{mode:"tab",newtab:1}],
"Vomnibar.activateUrl":[10,1,0,{url:!0}],"Vomnibar.activateUrlInNewTab":[10,1,0,{url:!0,newtab:1}],addBookmark:[13,1,0],
autoCopy:[11,0,1,{copy:!0}],autoOpen:[11,0,1,{o:1}],blank:[0,1,0],captureTab:[15,1,1],clearContentSetting:[16,1,1],
clearContentSettings:[16,1,1],clearCS:[16,1,1],clearFindHistory:[17,1,1],closeDownloadBar:[49,1,1,{all:1}],
closeOtherTabs:[35,1,1,{other:!0,mayConfirm:!0}],closeSomeOtherTabs:[35,1,0],closeTabsOnLeft:[35,1,0,{$count:-1e6,
mayConfirm:!0}],closeTabsOnRight:[35,1,0,{$count:1e6,mayConfirm:!0}],confirm:[1,1,0],copyCurrentTitle:[19,1,1,{
type:"title"}],copyCurrentUrl:[19,1,1],copyWindowInfo:[19,1,0,{type:"window"}],createTab:[20,1,20],
debugBackground:[31,1,1,{reuse:1,url:"chrome://extensions/?id=$id",id_mask:"$id",url_mask:!1}],discardTab:[21,1,0],
dispatchEvent:[9,1,0],duplicateTab:[22,1,20],editText:[13,0,0],enableContentSettingTemp:[42,1,0,{incognito:!0}],
enableCSTemp:[42,1,0,{incognito:!0}],enterFindMode:[6,1,1,{active:!0,selected:"auto-line"}],enterInsertMode:[3,1,1,{
insert:!0}],enterVisualLineMode:[12,1,1,{mode:"line"}],enterVisualMode:[12,1,1],findSelected:[6,1,0,{selected:"line"}],
findSelectedBackwards:[6,1,0,{selected:"line",$count:-1}],firstTab:[24,1,0,{absolute:!0}],focusInput:[12,0,0],
focusOrLaunch:[31,1,1,{reuse:1}],goBack:[18,0,0,{$count:-1}],goForward:[18,0,0],goNext:[2,1,0,{sed:!0}],
goPrevious:[2,1,0,{sed:!0,rel:"prev"}],goToRoot:[25,1,0,{}],goUp:[25,1,0,{$count:-1,type:"frame"}],joinTabs:[26,1,0],
lastTab:[24,1,0,{$count:-1,absolute:!0}],mainFrame:[27,1,1],moveTabLeft:[28,1,0,{$count:-1}],moveTabRight:[28,1,0],
moveTabToIncognito:[29,1,1,{incognito:!0}],moveTabToNewWindow:[29,1,0],moveTabToNextWindow:[30,1,0],newTab:[20,1,20],
nextFrame:[4,1,0],nextTab:[24,1,0],openBookmark:[51,1,0],openCopiedUrlInCurrentTab:[31,1,1,{reuse:0,copied:!0}],
openCopiedUrlInNewTab:[31,1,20,{copied:!0}],openUrl:[31,1,20],parentFrame:[5,1,0],passNextKey:[9,0,0],
performAnotherFind:[6,1,0,{index:"other"}],performBackwardsFind:[6,1,0,{$count:-1}],performFind:[6,1,0],
previousTab:[24,1,0,{$count:-1}],quickNext:[24,1,0],reload:[18,0,0,{r:1}],reloadGivenTab:[32,1,0,{single:!0}],
reloadTab:[32,1,0],removeRightTab:[33,1,0],removeTab:[34,1,0],reopenTab:[36,1,1],reset:[50,1,1],
restoreGivenTab:[37,1,0,{one:!0}],restoreTab:[37,1,25],runKey:[38,1,0],scrollDown:[4,0,0],scrollFullPageDown:[4,0,0,{
view:2}],scrollFullPageUp:[4,0,0,{dir:-1,view:2}],scrollLeft:[4,0,0,{dir:-1,axis:"x"}],scrollPageDown:[4,0,0,{dir:.5,
view:2}],scrollPageUp:[4,0,0,{dir:-.5,view:2}],scrollPxDown:[4,0,0,{view:1}],scrollPxLeft:[4,0,0,{dir:-1,axis:"x",view:1
}],scrollPxRight:[4,0,0,{axis:"x",view:1}],scrollPxUp:[4,0,0,{dir:-1,view:1}],scrollRight:[4,0,0,{axis:"x"}],
scrollSelect:[14,0,0],scrollTo:[4,0,0,{dest:"min"}],scrollToBottom:[4,0,0,{dest:"max"}],scrollToLeft:[4,0,0,{axis:"x",
dest:"min"}],scrollToRight:[4,0,0,{axis:"x",dest:"max"}],scrollToTop:[4,0,0,{dest:"min"}],scrollUp:[4,0,0,{dir:-1}],
searchAs:[11,0,1,{s:1,copied:!0,selected:!0}],searchInAnother:[39,1,1],sendToExtension:[40,1,0],showHelp:[8,1,1],
showHud:[41,1,1],showHUD:[41,1,1],showTip:[41,1,1],simBackspace:[12,0,1,{action:"backspace"}],
simulateBackspace:[12,0,1,{action:"backspace"}],sortTabs:[26,1,0,{sort:"recency",windows:"current"}],
switchFocus:[12,0,1,{action:"switch"}],toggleContentSetting:[42,1,0],toggleCS:[42,1,0],toggleLinkHintCharacters:[7,1,1,{
key:"linkHintCharacters"}],toggleMuteTab:[43,1,1],togglePinTab:[44,1,0],toggleReaderMode:[45,1,1,{reader:!0,reuse:0,
opener:!0}],toggleStyle:[15,0,1],toggleSwitchTemp:[7,1,1],toggleUrl:[45,1,1,{url_mask:!0,reuse:0}],
toggleViewSource:[45,1,1,{opener:!0,viewSource:!0}],toggleVomnibarStyle:[46,1,1],toggleWindow:[52,1,0],
visitPreviousTab:[48,1,0],wait:[0,1,0,{wait:"count"}],zoom:[47,1,0],zoomIn:[47,1,0],zoomOut:[47,1,0,{$count:-1}],
zoomReset:[47,1,0,{reset:!0}]};let C={__proto__:null,newtab:2,queue:18,"cur-queue":16,"new-active":3,"newtab-active":3,
hover:32,"hover-and-scroll":32,unhover:33,leave:33,focus:34,"download-media":35,"download-image":35,image:37,
"open-image":37,media:37,search:38,"search-text":38,copy:40,"copy-text":40,"copy-list":57,"copy-url":42,
"copy-url-list":59,download:44,incognito:45,"open-incognito":45,"open-link":46,"open-url":46,"direct-open":46,
"open-directly":46,"directly-open":46,"open-direct":46,"copy-image":36,"edit-url":64,edit:65,"edit-text":65,input:67,
"focus-input":67,editable:67,"focus-editable":67,visual:66,select:66}
;t.Yn=["character","word","","lineboundary","line","sentence","paragraphboundary","paragraph","documentboundary"],t.Xn={
l:1,h:0,j:9,k:8,$:7,0:6,"}":15,"{":14,")":11,"(":10,w:5,W:5,e:3,b:2,B:2,G:17,gg:16,o:20,a:-2,g:-2,aw:21,as:25,ap:26,
"a}":26,y:31,Y:32,C:33,"c-s-c":36,p:35,P:34,f:55,F:57,n:47,N:46,f1:48,"a-f1":48,v:51,V:52,c:53,"/":54,"?":56,"c-e":62,
"c-y":61,"c-down":62,"c-up":61};let I=e=>{let t="";if(!b&&p&&(t="#!no-check\n"),t){let a=o.pl.keyMappings
;o.pl.keyMappings=void 0;try{i.ho("keyMappings",t+e)}catch(e){}o.pl.keyMappings=a}};o.ul&2&&(x(o.z.keyMappings),
o.G||(t.Xn["m-s-c"]=36)),o.pl.keyMappings=e=>{let t=o.wo,n=o.Ke.m,r=o.Nn;x(e)
;let l=JSON.stringify,s=o.wo,c=o.Ke.m,u=!!r&&l(o.Nn)!==l(r);((t?!s||l(t)!==l(s):!!r&&!!s)||u)&&i.bn({N:9,m:o.wo,t:o.yo,
k:u?o.Nn:null,v:a.nextConfUpdate(0)}),(n?!c||l(n)!==l(c):c)&&i.De({m:c})}});