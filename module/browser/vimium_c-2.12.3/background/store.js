"use strict";__filename="background/store.js",define(["require","exports"],(e,n)=>{
Object.defineProperty(n,"__esModule",{value:!0
}),n.Ze=n.tl=n.Ii=n.Mo=n.Fr=n.S=n.Fl=n.Vl=n.Ql=n.Di=n.Lo=n.o=n.getNextFakeTabId=n.xl=n.u=n.Cn=n.Hn=n.On=n.Vi=n.na=n.I=n.y=n.M=n.x=n.O=n.Re=n.Il=n.yo=n.Ln=n.wo=n.Nn=n.X=n.Mt=n.Wt=n.re=n.Co=n.Po=n._u=n.de=n.jn=n.we=n.he=n.Vo=n.ze=n.Fe=n.a=n.us=n.pl=n.hn=n.os=n.ul=n.uu=n.Ye=n.oa=n.n=n.Io=n.r=n.Bo=n.du=n.No=n.iu=n.au=n.Wn=n.Ke=n.Hl=n.V=n.vomnibarPage_f=n.newTabUrl_f=n.su=n.z=n.Ho=n.zo=n.vu=n.ll=n.il=n.G=n.Oo=n.Tn=n.el=n.OnSafari=n.OnEdge=n.OnFirefox=n.OnChrome=n.Do=void 0,
n.Do=1,n.OnChrome=!0,n.OnFirefox=!1,n.OnEdge=!1,n.OnSafari=!1;let l,o=navigator.userAgentData.brands
;n.el=!!o.find(e=>e.brand.includes("Edge")||e.brand.includes("Microsoft")),
n.Tn=(l=o.find(e=>e.brand.includes("Chromium")))&&parseInt(l.version)>82?parseInt(l.version):0|(navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/)||[0,998])[1],
n.Oo=999,n.G=2,n.ll=location.origin+"/",n.vu=navigator.language.startsWith("zh"),n.zo=!1,n.Ho=!1,n.z={},n.su=new Map,
n.newTabUrl_f="",n.vomnibarPage_f="",n.V={v:n.Tn,d:"",g:!1,m:!1},n.Hl={map:new Map,rules:[],keywords:null},n.Ke={
v:n.el?-n.Tn:n.Tn,c:"",i:0,l:0,m:null,n:0,s:"",t:""},n.Wn={actions:[],Qn:0},n.au=0,n.iu=0,n.r=!1,n.Ye=new Map,
n.uu=new Map,n.ul=0,n.pl={},n.us=-1,n.a=new Map,n.Fe=[],n.ze=new Map,n.Vo=0,n.he=-1,n.we=-1;n.jn=-1,n.de=0,n._u=null,
n.Po=null,n.Co=null,n.re={ie:[],Ue:[],f:0,Ee:0},n.Wt={Bt:null,Qt:new Map,St:0,Gt:0,Jt:0},n.Mt=new Map,n.Nn=null,
n.wo=null,n.yo=0,n.Il=new Map,n.Re=0,n.O=null,n.x=1,n.On=null,n.Hn=null,n.$=null,n.ki=null,n.Cn=(e,l)=>{
let o=n.On,t=!e||o&&o.i===e;return n.On=t?l:o,t?o:null},n.u=()=>{},n.xl={};let t=-4;n.getNextFakeTabId=()=>t--,n.o=n.u,
n.Lo=n.u,n.Di=null,n.Ql=()=>"",n.Vl=()=>"",n.Fl=()=>"",n.S=e=>e,n.Fr=()=>null,n.Mo=null,n.Ii=null,n.Ze={U:"chrome",Fo:0,
nl:n.el?/^https:\/\/(ntp|www)\.msn\.\w+\/(edge|spartan)\/ntp\b/:"chrome-search://local-ntp/local-ntp.html",ls:!1,
ol:null,fo:"",aa:"",GitVer:"dev",is:"/lib/injector.js",En:"/front/vomnibar-tee.html",Bn:"/front/offscreen.html",
HelpDialogJS:"/background/help_dialog.js",Qe:"pages/options.html",ko:"browser",Go:"",
ta:"https://github.com/gdh1995/vimium-c",To:null,ui:"/pages/show.html",Jn:"",cu:"/front/vomnibar.js",Un:""}});