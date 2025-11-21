"use strict";__filename="background/utils.js",define(["require","exports","./store"],(e,t,n)=>{
Object.defineProperty(t,"__esModule",{value:!0
}),t.yr=t.nextConfUpdate=t.splitWhenKeepExpressions=t.Zi=t.tryParse=t.isNotPriviledged=t.ii=t.now=t.$l=t.Pl=t.bo=t.Z=t.Kn=t.hl=t.ni=t.Gi=t.so=t.pu=t.ns=t.Xe=t.$n=t.Tl=t.Li=t.Ki=t.qr=t.ql=t.Ul=t.El=t.Dl=t.rl=t.yn=t.kn=t.br=t.zi=t.Sn=t.i=t._i=t.Ur=t.sn=t.fl=t.Gl=t.on=t.Zn=t.an=t.q=void 0,
t.q=/\s+/g,t.an=/^[a-z][\+\-\.\da-z]+:\/\//,t.Zn=(e,t)=>{for(let n in t)e[n]!==void 0||(e[n]=t[n]);return e},
t.on=e=>Array.from(e.keys());let r=/a?/;t.Gl=()=>r.test(""),t.fl=(e,t,n)=>{let r=n<e.length&&n>t?e.charCodeAt(n-1):0
;return e.slice(t,n+=r>=55296&&r<56320||r===8205&&n>t+1?-1:0)},t.sn=(e,t,n)=>{
let r=t>0&&t<e.length&&t<n?e.charCodeAt(t):0;return e.slice(t+=r>=56320&&r<=57343||r===8205&&t<e.length-1&&t<n-1?1:0,n)
},t.Ur=e=>{function n(e){let t=e.charCodeAt(0);return t===38?"&amp;":t===39?"&apos;":t<39?"&quot;":t===60?"&lt;":"&gt;"}
let r=/["&'<>]/g;return t.Ur=e=>e.replace(r,n),t.Ur(e)
},t._i=e=>e.charCodeAt(10)===58&&e.slice(0,10).toLowerCase()==="javascript"
;let a=["","",".ac.ad.ae.af.ag.ai.al.am.ao.aq.ar.as.at.au.aw.ax.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cw.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gb.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.me.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.ni.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.qa.re.ro.rs.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.ss.st.su.sv.sx.sy.sz.tc.td.tf.tg.th.tj.tk.tl.tm.tn.to.tr.tt.tv.tw.tz.ua.ug.uk.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.za.zm.zw",".aaa.abb.abc.aco.ads.aeg.afl.aig.anz.aol.app.art.aws.axa.bar.bbc.bbt.bcg.bcn.bet.bid.bio.biz.bms.bmw.bnl.bom.boo.bot.box.buy.bzh.cab.cal.cam.car.cat.cba.cbn.cbs.ceb.ceo.cfa.cfd.com.cpa.crs.csc.dad.day.dds.dev.dhl.diy.dnp.dog.dot.dtv.dvr.eat.eco.edu.esq.eus.fan.fit.fly.foo.fox.frl.ftr.fun.fyi.gal.gap.gdn.gea.gle.gmo.gmx.goo.gop.got.gov.hbo.hiv.hkt.hot.how.ibm.ice.icu.ifm.inc.ing.ink.int.ist.itv.iwc.jcb.jcp.jio.jlc.jll.jmp.jnj.jot.joy.kfh.kia.kim.kpn.krd.lat.law.lds.llc.llp.lol.lpl.ltd.man.map.mba.med.men.mil.mit.mlb.mls.mma.moe.moi.mom.mov.msd.mtn.mtr.nab.nba.nec.net.new.nfl.ngo.nhk.now.nra.nrw.ntt.nyc.obi.off.one.ong.onl.ooo.org.ott.ovh.pay.pet.phd.pid.pin.pnc.pro.pru.pub.pwc.qvc.red.ren.ril.rio.rip.run.rwe.sap.sas.sbi.sbs.sca.scb.ses.sew.sex.sfr.ski.sky.soy.spa.srl.srt.stc.tab.tax.tci.tdk.tel.thd.tjx.top.trv.tui.tvs.ubs.uno.uol.ups.vet.vig.vin.vip.wed.win.wme.wow.wtc.wtf.xin.xxx.xyz.you.yun",".aero.arpa.asia.auto.band.beer.chat.city.club.cool.coop.date.fans.fund.game.gift.gold.guru.help.host.info.jobs.life.link.live.loan.love.luxe.mobi.name.news.pics.plus.shop.show.site.sohu.team.tech.wang.wiki.work.yoga.zone",".citic.cloud.email.games.group.local.onion.party.photo.press.rocks.space.store.today.trade.video.world",".center.design.lawyer.market.museum.online.social.studio.travel",".company.fashion.science.website",".engineer.software"]
;t.i=()=>Object.create(null),
t.Sn=e=>Object.setPrototypeOf(e,null),t.zi=(e,t,n)=>!t&&/[^a-z]/.test(e)?/^xn--[\x20-\x7f]+/.test(e)||".\u4e2d\u4fe1.\u4e2d\u56fd.\u4e2d\u570b.\u4e2d\u6587\u7f51.\u4f01\u4e1a.\u4f5b\u5c71.\u4fe1\u606f.\u516c\u53f8.\u516c\u76ca.\u5546\u57ce.\u5546\u5e97.\u5546\u6807.\u5728\u7ebf.\u5a31\u4e50.\u5e7f\u4e1c.\u6211\u7231\u4f60.\u624b\u673a.\u62db\u8058.\u653f\u52a1.\u6e38\u620f.\u7f51\u5740.\u7f51\u5e97.\u7f51\u5e97.\u7f51\u7edc.\u8d2d\u7269.\u96c6\u56e2.\u9910\u5385.".includes("."+e+".")?2:0:e.length===2&&n&&("cc.cu.in.rs.sh".includes(e)?n.includes("_"):e==="so"&&n.startsWith("lib"))?0:e&&e.length<a.length&&a[e.length].includes(e)?1:0,
t.br=e=>{let n=e.toLowerCase().split("."),r=n.length
;return[n,t.zi(n[r-1])===0?1:r>2&&n[r-1].length===2&&t.zi(n[r-2])===1?3:2]
},t.kn=(e,n)=>!!(n!==6&&/^\d{1,3}(?:\.\d{1,3}){3}$/.test(e)||n!==4&&/^\[[\da-f]{0,4}(?::[\da-f]{0,4}){1,5}(?:(?::[\da-f]{0,4}){1,2}|:\d{0,3}(?:\.\d{0,3}){3})]$/.test(e))&&!!t.yn("http://"+e),
t.yn=n.Tn>125?URL.parse:URL.parse||(e=>{try{return new URL(e)}catch(e){return null}}),t.rl=(e,t)=>{
if(!e||t!=="atob"&&!e.includes("%"))return e||"";try{e=(t?t==="atob"?atob:decodeURI:decodeURIComponent)(e)}catch(e){}
return e},t.Dl=(e,n)=>{if(!e.includes("%"))return e
;if(!t.an.test(e)&&!/^(about|data|javascript|vimium)/i.test(e))return e
;let r=e.replace(/%(2[356f]|3[adf]|40)/gi,"%25$1").replace(/%(?![\da-fA-F]{2})/g,"%25"),a=t.rl(r,1)
;a=a.length!==r.length?a:t.Ul(e,1)
;let o=!n&&(t.an.test(a)?!a.startsWith("vimium:"):a.startsWith("data:")||a.startsWith("about:"))
;a=a.replace(o?t.q:/[\r\n]+/g,encodeURIComponent);let l=a&&a.charAt(a.length-1)
;return l&&!/[a-z\d\ud800-\udfff]/i.test(l)&&(l=l<"\x7f"?"%"+(l.charCodeAt(0)+256).toString(16).slice(1):t.ql(l),
l.length>1&&(a=a.slice(0,a.length-1)+l)),a
},t.El=(e,n)=>(e=!e.includes("://")&&/%(?:2[36f]|3[adf])/i.test(e)?t.rl(e).trim():e,t.Dl(e,n)),
t.Ul=(e,n)=>(n?e:encodeURI(e)).replace(/(?:%[\da-f]{2})+/gi,e=>{let n=t.rl(e);return n.length<e.length?t.ql(n):e}),
t.ql=e=>e.replace(/[^\p{L}\p{N}]+/gu,encodeURIComponent),
t.qr=e=>(e=e.slice(0,8).toLowerCase()).startsWith("http://")?7:e==="https://"?8:0,
t.Ki=e=>e.trim()?e.trim().split(/[.\s]+/g).sort().filter(e=>!!e):[],t.Li=e=>e&&[e[0],e[1],t.Ki(e[2]||"")]||0,
t.Tl=(e,t,n)=>{try{return new RegExp(e,t)}catch(r){
n===0||console.log("%c/%s/%s","color:#c41a16",e,t,"is not a valid regexp.")}return null},t.$n=(e,t)=>{
if(!e.endsWith("*")){let t=e.indexOf("://"),n=t>0?e.indexOf("/",t+3):-1
;e+=t>0&&(n===e.length-1||n<0)?(n>0?"":"/")+"*\\?*#*":""}try{
return n.Tn<107?new URLPattern(e):new URLPattern(e,"http://localhost",{ignoreCase:!0})}catch(n){
t===0||console.log("%c/%s/%s","color:#c41a16",e,"is not a valid URLPattern.")}return null};let o=null,l=e=>{o=e}
;t.Xe=()=>{let e=new Promise(l),t=o;return o=null,{Ge:e,Le:t}},t.ns=e=>{queueMicrotask(e)},t.pu=(e,t,n)=>{let r=()=>{
n&&n()===!1&&(a=0);for(let n=0,r=0;n<32&&r<128&&a>0;){let o=t(e[--a]);if(o>0)n++,r+=o;else if(o<0)break}
a>0&&(e.length=a,setTimeout(r,150))},a=e.length;a>=10?setTimeout(r,17):e.length>0&&r()},t.so=(e,t)=>{
let n=!t&&e.endsWith(".json")
;return e=t||e.includes("/")?e:"/front/"+e,fetch(e).then(e=>n?e.json().then(e=>new Map(Object.entries(e))):t?t==="blob"?e.blob():e.arrayBuffer():e.text())
},t.Gi=(e,n)=>{let r,a=0;n=n||1e4;{let t=new AbortController;a=setTimeout(t.abort.bind(t),n),r=fetch(e,{
cache:"force-cache",signal:t.signal})}
return r=r.then(e=>e.status>=300||e.status<200?null:e.blob().catch(e=>(console.log("on reading response:",e),
0)),e=>(console.log("on requesting",e),null)),a&&r.then(()=>{clearTimeout(a)
}),r.then(e=>e?t.ni(e).then(e=>[null,e]):(console.clear(),e))},t.ni=e=>{let n=new FileReader,r=t.Xe()
;return n.onload=e=>{r.Le(e.target.result)},n.readAsDataURL(e),r.Ge},t.hl=e=>e.replace(/[$()*+.?\[\\\]\^{|}]/g,"\\$&")
;let c="",s=0;t.Kn=e=>{let t=Date.now();if(t-s>8e3){if(!e)return"";let t=new Uint8Array(8);crypto.getRandomValues(t),
c=t.reduce((e,t)=>e+(t<16?"0":"")+t.toString(16),"")}return s=t,c},t.Z=e=>{if(e!=null&&e!==!1){
for(e=typeof e!="string"?typeof e=="number"?[e,.5]:e===!0?[.5,.5]:e instanceof Array?e:[+e.x||0,+e.y||0,+e.s||0]:e.trim().split(/[\s,]+/).map((e,t)=>e==="count"&&t<2?e:isNaN(+e)?t<2?.5:0:+e);e.length<2;)e.push(.5)
;for(;e.length<3;)e.push(0);let t=e[0]==="count"||e[1]==="count";return{x:e[0],y:e[1],n:t?0:1,s:t?+e[2]||.01:0}}},
t.bo=e=>{let t="";for(let n=0,r=e.length-1;n<r;n++){let r=e[n];r.trimRight()&&e.indexOf(r,n+1)<0&&(t+=r)}return t},
t.Pl=(e,n,r)=>{let a=!0;a=r!==null&&r!==void 0&&r;let o=n?t.rl(e,"atob"):e;if(n){if(o!=e){
let e=/(?:\xed(?:[\xa1-\xbf][\x80-\xbf]|\xa0[\x80-\xbf])){2}/g,t=/([\xc0-\xdf][\x80-\xbf]|[\xe0-\xef][\x80-\xbf]{2}|[\xf0-\xf7][\x80-\xbf]{3})+/g
;try{o=o.replace(e,e=>{if(e[1]>"\xb0"||e[1]=="\xb0"&&e[2]>="\x80"||e[4]<"\xb0"||e[4]=="\xb0"&&e[4]<"\x80")return e
;let t=[].map.call(e,e=>e.charCodeAt(0))
;return String.fromCharCode((t[0]&15)<<12|(t[1]&63)<<6|t[2]&63,(t[3]&15)<<12|(t[4]&63)<<6|t[5]&63)}).replace(t,e=>{
if(a){let t=[].map.call(e,e=>e.charCodeAt(0));e=new TextDecoder("utf-8",{fatal:!0}).decode(new Uint8Array(t))}else{
let t=[].map.call(e,e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2));e=decodeURIComponent(t.join(""))}return e})
}catch(e){}}}else{let t
;a?t=(new TextEncoder).encode(e):(o=encodeURIComponent(e).replace(/%..|[^]/g,e=>e.length===1?e:String.fromCharCode(parseInt(e.slice(1),16))),
t=[].map.call(o,e=>e.charCodeAt(0))),o=btoa(String.fromCharCode.apply(String,t))}return o},
t.$l=e=>"\\u"+(e.charCodeAt(0)+65536).toString(16).slice(1),
t.now=()=>new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," "),
t.ii=()=>/\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)$/i,t.isNotPriviledged=e=>{let t=e.s.Jl
;return!(t.startsWith("chrome")||t.startsWith("edge"))};let i=(e,t)=>{let n=[],r=0,a=-1,o=0,l=e.length
;for(;r<l;r++)switch(e[r]){case"#":case"&":e.charAt(r+1)==="#"&&(n.push([r+1,l]),r=e.length);break;case"(":case")":
case"?":case"+":t&&(l=r);break;case":":o||t&&(l=r);break;case"{":case"[":o++||(a=r);break;case"]":case"}":
--o||n.push([a,r+1]);break;case'"':{let t=/^"([^"\\]|\\[^])*"/.exec(e.slice(r));o||t&&n.push([r,r+t[0].length]),
r+=t?t[0].length-1:0;break}default:{let t=/^(?:[$a-zA-Z_][$\w]*|\d[\d.eE+-]|,?\s+)/.exec(e.slice(r))
;r+=t?t[0].length-1:0}}return[n,l]};t.tryParse=e=>{try{return JSON.parse(e)}catch(t){return e}},t.Zi=e=>{
let[n,r]=i(e,1),a="",o=0;for(let[r,l]of n){if(e[r]==="#")break;if(e[r-1]!=="="||e[l]&&e[l]!=="&")continue
;a+=e.slice(o,r),o=l;let n=t.tryParse(e.slice(r,l))
;a+=typeof n!="string"||n.length!==l-r?JSON.stringify(n).replace(/[%\s&]/g,t.$l):n.replace(/&/g,"%26")}
return a+=e.slice(o,r),[a,r]},t.splitWhenKeepExpressions=(e,t)=>{let n=i(e)[0],r=-1,a=0,o=0,l=[]
;for(;(r=e.indexOf(t,r+1))>=0;){for(;a<n.length&&r>=n[a][1];)a++
;a<n.length&&r>=n[a][0]?r=n[a][1]-1:(l.push(e.slice(o,r)),o=r+1)}return l.push(e.slice(o)),l},t.nextConfUpdate=e=>{
let t=e?n.iu:n.au;return t=t+1&4095||1,e?n.iu=t:n.au=t},t.yr=()=>n.G===1?0:performance.timeOrigin});