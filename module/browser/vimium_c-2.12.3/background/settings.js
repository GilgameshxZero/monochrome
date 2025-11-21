"use strict"
;__filename="background/settings.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports"],(e,o,t,s,a,n,l,i)=>{
Object.defineProperty(o,"__esModule",{value:!0
}),o.qo=o.B=o.Ni=o.E=o.W=o.xo=o.De=o.bn=o.gl=o.jo=o.lu=o.ho=o.vl=o._o=o.So=o.$o=void 0;let c=null,r=null;o.$o=0,
o.So=null,o._o=a.t.storage.local,o.vl=Promise.all([0,a.je(a.t.runtime.getPlatformInfo).then(e=>{
let o=e.os.toLowerCase(),s=a.t.runtime.PlatformOs,n=o===s.WIN?2:o===s.MAC?0:1;t.Ze.ko=o,t.Ke.o=t.V.o=n,t.G=n
}),a.je(o._o.get.bind(o._o)).then(e=>{let s=t.z;Object.assign(s,o.E),e=e||{}
;for(let a of Object.entries(e))a[0]in o.E?s[a[0]]=a[1]:t.su.set(a[0],a[1]);let a=0+Object.keys(e).length
;return t.zo=a===0,a})]).then(e=>{t.z.keyLayout===260&&(o.$o|=1,w());for(let e in o.B)o.W(o.B[e],t.z[e],t.V)
;return t.V.g=t.z.grabBackFocus,t.Ke.l=t.V.l,t.ul=t.ul|2,e[2]}),o.vl.then(()=>{t.os&&t.os()}),o.ho=(e,a)=>{t.z[e]=a,
r||(r=s.i(),setTimeout(h,0));let n,l=a!==o.E[e]?a:null;if(r[e]=l,t.Lo(e,l),e in o.B&&o.W(o.B[e],a,t.V),
n=t.pl[e])return n(a,e)},o.lu=(e,o)=>{let a=t.su.get(e);(a!==void 0?a:null)!==o&&(r||(r=s.i(),setTimeout(h,0)),r[e]=o,
o!==null?t.su.set(e,o):t.su.delete(e))},o.jo=e=>t.su.get(e);let h=()=>{let e=r,t=[];r=null
;for(let[o,s]of Object.entries(e))s===null&&(t.push(o),delete e[o]);o._o.remove(t),o._o.set(e)}
;o.gl=(e,o)=>t.pl[e](o!==void 0?o:t.z[e],e),o.bn=e=>{if(e.N!==6)m(e);else if(e.d.length==null)m(e);else{let o=e.d
;c?o=o.concat(c):s.ns(m.bind(null,e)),c=o,e.d=null}};let m=e=>{let o=e.N;if(o===6&&!e.d){let o=c,s=e.d={}
;for(let e of o)s[e]=t.V[e];c=null}let s=o===9||6;i.c(o===3?4096:o===9?32768|(e.k?65536:0):8192,o=>{s&&(e.v=t.au)
;for(let t of o.J)t.postMessage(e)})};o.De=e=>{let o={N:47,d:e,v:s.nextConfUpdate(1)}
;s.pu(t.Fe.slice(0),e=>(t.Fe.includes(e)&&e.postMessage(o),1))};let w=()=>{
let e=t.su.get(o.qo[0]),s=t.su.get(o.qo[1]),a=t.su.get(o.qo[2]);e!==void 0&&(e+=""),s!==void 0&&(s+=""),
a!==void 0&&(a+="");let n=260;return e!==void 0||s!==void 0||a!==void 0?(n=e==null?4:e==="2"||e==="true"?1:e==="1"?12:4,
n|=s==null||n===1?0:s==="2"||s==="true"?16:s==="1"?512:0,n|=a==null?0:a==="2"?128:a==="1"?64:0,o.$o|=2):o.$o&=-3,
t.z.keyLayout=n};o.xo=e=>{if(e<3&&o.$o&1){let e=t.V.l,s=w();o.W("l",s,t.V)!==e&&o.gl("keyLayout",s)}}
;let p=e=>e.startsWith("# ")?"":e.split("//",1)[0].trim();o.W=(e,o,s)=>{switch(e){case"c":case"n":
o=o.toLowerCase().toUpperCase();break;case"l":o=o&255|(o&512&&!t.G?16:0);break;case"d":o=o?" D":"";break;case"p":
o=o.replace("[aria-controls],[role=combobox],#kw.s_ipt",":default");case"y":o=o.split("\n").map(p).join("")}
return s?s[e]=o:o},Object.assign(t.pl,{extAllowList(e){let o=t.uu;if(o.forEach((e,t)=>{e!==!1&&o.delete(t)}),
e)for(let t=e.split("\n"),s=t.length,a=/^[\da-z_]/i;0<=--s;)(e=t[s].trim())&&a.test(e)&&o.set(e,!0)},grabBackFocus(e){
t.V.g=e},keyLayout(e){if(t.Ke.l=t.V.l,o.De({l:t.V.l}),o.$o&1&&!(e&256)){let e=o.$o&2;o.$o&=-4
;for(let s=0,a=e?3:0;s<a;s++)o.lu(o.qo[s],null),t.Lo(o.qo[s],null)}},newTabUrl(e){
e=/^\/?pages\/[a-z]+.html\b/i.test(e)?a.t.runtime.getURL(e):a.H(n._r(e)),t.newTabUrl_f=e,o.lu("newTabUrl_f",e)},
searchEngines(){
t.Hl.map.clear(),t.Hl.keywords=null,t.Hl.rules=l.ru("~:"+t.z.searchUrl+"\n\n_browser: vimium://b-search-at/new-tab/$s re= Browser default search\n"+t.z.searchEngines,t.Hl.map).reverse()
},searchUrl(e){var s;let a=t.Hl.map
;if(e)((s=a.get("~"))===null||s===void 0?void 0:s.Oi)||l.ru("~:"+e,a);else if(a.clear(),a.set("~",{Ir:"~",
Jl:t.z.searchUrl.split(" ",1)[0],u:"",Oi:!1}),t.Hl.rules=[],t.newTabUrl_f=t.su.get("newTabUrl_f")||"",
t.newTabUrl_f)return;o.gl("newTabUrl")},vomnibarPage(e){let s=t.su.get("vomnibarPage_f")
;!s||e?((e=e?a.H(e):t.z.vomnibarPage)===o.E.vomnibarPage?e=t.Ze.Jn:e.startsWith("front/")?e=a.t.runtime.getURL(e):(e=n._r(e),
e=(e=n.fi(e)).replace(":version",`${parseFloat(t.Ze.fo)}`)),
t.vomnibarPage_f=e,o.lu("vomnibarPage_f",e)):t.vomnibarPage_f=s}}),o.E={__proto__:null,allBrowserUrls:!1,autoDarkMode:2,
autoReduceMotion:2,
clipSub:"p=^git@([^/:]+):=https://$1/=\ns@^https://(?:www\\.)?google\\.com(?:\\.[^/]+)?/url\\?(?:[^&#]+&)*?url=([^&#]+)@$1@,matched,decodecomp\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
exclusionListenHash:!0,exclusionOnlyFirstMatch:!1,exclusionRules:[{passKeys:"",pattern:":https://mail.google.com/"}],
extAllowList:"# modified versions of X New Tab and PDF Viewer,\n# NewTab Adapter, and Shortcuts Forwarding Tool\nhdnehngglnbnehkfcidabjckinphnief\nnacjakoppgmdcpemlfnfegmlhipddanj\ncglpcedifkgalfdklahhcchnjepcckfn\nclnalilglegcjmlgenoppklmfppddien\n# EdgeTranslate\nbocbaocobfecmglnmeaeppambideimao\nbfdogplmndidlpjfhoijckpakkdjkkil\n# SalaDict\ncdonnmffkdaoajfknoeeecmchibpmkmg\nidghocbbahafpfhjnfhpbfbmpegphmmp",
filterLinkHints:!1,grabBackFocus:!1,hideHud:!1,ignoreReadonly:":default",keyLayout:260,keyboard:[560,33],keyupTime:120,
keyMappings:"",linkHintCharacters:"sadjklewcmpgh",linkHintNumbers:"0123456789",localeEncoding:"gbk",mouseReachable:!0,
newTabUrl:"",
nextPatterns:"\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,\u4e0b\u4e00\u5f20,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
notifyUpdate:!0,omniBlockList:"",passEsc:":default",preferBrowserSearch:!0,
previousPatterns:"\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,\u4e0a\u4e00\u5f20,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
regexFindMode:!1,scrollStepSize:100,
searchUrl:t.vu?"https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6":"https://www.google.com/search?q=%s Google",
searchEngines:t.vu?"b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://www.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://cn.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://www.google.com/ Google\nsogou|sougou: https://www.sogou.com/web?ie=UTF-8&query=$s \u641c\u72d7\n360so|360sou|360ss: https://www.so.com/s?ie=UTF-8&q=$s 360 \u641c\u7d22\nshenma: https://m.sm.cn/s?q=$s \u795e\u9a6c\u641c\u7d22\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c \\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s \\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript":"bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://www.google.com/ Google\nsg|sogou|sougou: https://www.sogou.com/web?ie=UTF-8&query=$s \u641c\u72d7\n360|360so|360sou|360ss: https://www.so.com/s?ie=UTF-8&q=$s 360 \u641c\u7d22\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c \\\n  blank=https://map.baidu.com/\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i \\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ Amazon\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= Calculate\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
showActionIcon:!0,showAdvancedCommands:!0,showInIncognito:!1,smoothScroll:!0,titleIgnoreList:"",userDefinedCss:"",
vomnibarOptions:{actions:"",maxMatches:10,queryInterval:333,sizes:"77,3,44,0.8,1944",styles:"mono-url"},vimSync:null,
vomnibarPage:"front/vomnibar.html",waitForEnter:!0},o.Ni=["showAdvancedCommands"],o.B={__proto__:null,
filterLinkHints:"f",hideHud:"h",ignoreReadonly:"y",keyLayout:"l",keyboard:"k",keyupTime:"u",linkHintCharacters:"c",
linkHintNumbers:"n",mouseReachable:"e",passEsc:"p",regexFindMode:"r",smoothScroll:"s",scrollStepSize:"t",
waitForEnter:"w"},o.qo=["ignoreKeyboardLayout","ignoreCapsLock","mapModifier"],t.ul<6&&(()=>{
let e=a.t.runtime.getManifest(),{origin:s}=location,n=s+"/",l=e.content_scripts[0].js,i=t.Ze,c=t.Ye,r=e=>(e.charCodeAt(0)===47?s:e.startsWith(n)?"":n)+e
;o.E.newTabUrl=t.el?"edge://newtab":"chrome://newtab",c.set("about:newtab",1),c.set("about:newtab/",1);{
c.set("chrome://newtab",1),c.set("chrome://newtab/",1),t.el&&(c.set("edge://newtab",1),c.set("edge://newtab/",1))
;let e="chrome://new-tab-page";c.set(e,2),c.set(e+"/",2)}
i.To=Object.keys(e.commands||{}).map(e=>e==="quickNext"?"nextTab":e),i.fo=e.version,i.aa=e.version_name||e.version,
i.Qe=r(i.Qe),i.ui=r(i.ui),i.Jn=r(o.E.vomnibarPage),i.Un=r(i.cu),i.ta=e.homepage_url||i.ta,i.is=r(i.is),i.En=r(i.En),
l.push("content/injected_end.js"),i.ol=l.map(r)})()});