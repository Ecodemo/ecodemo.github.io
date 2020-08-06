// ==UserScript== 
// @name   会员VIP解析免费看江小白
// @run-at   document-end
// ==/UserScript==
// ==UserScript==
// @name 会员VIP解析免费看（已更新）
// @description 支持[优酷|腾讯|乐视|爱奇艺|芒果|搜狐|乐视|土豆|华数|风行|PPTV|1905] VIP破解，汇总全网所有解析接口，解析接口多到用不完！！在此，只是把油猴上的解析接口汇总，当接口解析失败，请换一个接口解析！！脚本功能目前如下 ：01：电脑浏览器网页 会员VIP视频 破解免费看（含有 原网页解析 和 弹窗解析 两种方式），02：手机浏览器网页 会员VIP视频 破解免费看（含有 原网页解析 和 跳转解析 两种方式）。（江小白友情提供）
// @author 江小白
// @version 963540817.96
// @charset UTF-8
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @license MIT
// @match *.youku.com/*
// @match *.mgtv.com/*
// @match *v.qq.com/*
// @match *.1905.com/*
// @match *.pptv.com/*
// @match *.sohu.com/*
// @match *.le.com/*
// @match *.iqiyi.com/*
// @match *.wasu.cn/*
// @match *.fun.tv/*
// @match *.tudou.com/*
// @include /^https?:\/\/(?:(?:tw|www|m)\.iqiyi\.com\/v_|v\.youku\.com\/v_show\/id_|m\.youku\.com\/(?:alipay_)?video\/id_|v\.qq\.com\/(?:x\/cover\/|cover\/(?:u|w)\/|x\/page\/)|(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=|(?!.+?[\?&]cid=)(?:.+?\/channel\/|index\.html|$)|(?:.+?\/)?cover\/\w+?\/(?![^\/]+?[\?&][cv]id=)\w+?\.htm)|(?:www|m)\.mgtv\.com\/b\/|(?:www|m)\.le\.com\/(?:vplay_|ptv\/vplay\/)|(?:m\.)?(?:tv|film)\.sohu\.com\/(?:(?:20|v[^\.]+?\.s?html|v\/[^=]*?==\.)|album\/)|(?:v|m)\.pptv\.com\/show\/|www\.wasu\.cn\/(?:Play\/show\/|wap\/play\/)|vip\.1905\.com\/play\/|www\.fun\.tv\/vplay\/g-|m\.fun\.tv\/mplay\/|video\.tudou\.com\/v\/)/
// @include /^https?:\/\/.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?:\/\/[^\/]+?\.(?:youku|mgtv|sohu|pptv|wasu|1905|iqiyi|le|tudou|qq|yinyuetai|bilibili|fun)\.)/
// @include /^https?:\/\/wanneng\.run\/n\/#/
// @namespace https://greasyfork.org/users/19349
// @grant unsafeWindow
// ==/UserScript==
-function(){
if(window.location.href.match(/^https?:\/\/.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?:\/\/[^\/]+?\.(?:youku|mgtv|sohu|pptv|wasu|1905|iqiyi|le|tudou|qq|yinyuetai|bilibili|fun)\.)/i)){
!function(){if(document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]){var shijian=document.querySelectorAll("embed,video,object,iframe[frameborder]")[0];shijian.currentTime=0;shijian.currentTimes=0;}if(document.querySelectorAll("marquee")[0]){document.querySelectorAll("marquee")[0].remove();}else{}}();
!function(){var t=location.href;if(!(t.match(/^https?:\/\/gitee\./i)))for(var e=new Array("div","img","span","p","a","li"),n=0;n<6;n++){var i=document.getElementsByTagName(e[n]);if(i&&i.length>0)for(var a=0;a<i.length;a++){var l=i[a],s=l.getAttribute("id"),d=l.getAttribute("class");d&&"A"==l.tagName&&-1!=d.indexOf("; ")&&l.getAttribute("onclick")&&l.getAttribute("target")&&l.href&&(l.style.display="none!important"),s&&d&&s==d&&d.length>10&&"LI"==l.tagName&&(l.style.display="none!important"),s&&(s.length>30&&-1==s.indexOf("-")&&(l.style.display="none!important"),/^[0-9]*$/.test(s)&&s.length>1&&(l.style.display="none!important"),s.length>7&&/[0-9]/.test(s)&&/[a-z]/i.test(s)&&l.getAttribute("style")&&(l.style.display="none!important")),s&&d&&(-1!=d.indexOf(" ")&&-1!=d.indexOf(s)&&l.getAttribute("style")&&(l.style.display="none!important"),s==d&&/[0-9]/.test(s)&&/[a-z]/i.test(s)&&(l.style.display="none!important"))}}}();
+(function($){var a=window.location.href;if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.youku\./)){document.title='优酷视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='优酷 视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.mgtv\./)){document.title='芒果视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='芒果 视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.iqiyi\./)){document.title='奇艺视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='奇艺视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.qq\./)){document.title='腾讯视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='腾讯视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.sohu\./)){document.title='搜狐视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='搜狐视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.le\./)){document.title='乐视视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='乐视视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.wasu\./)){document.title='华数视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='华数视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.pptv\./)){document.title='PPTV视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='PPTV视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.1905\./)){document.title='1905视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='1905视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.tudou\./)){document.title='土豆视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='土豆视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.fun\./)){document.title='风行视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='风行视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.acfun\./)){document.title='A站视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='A站视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.bilibili\./)){document.title='B站视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='B站视频解析中'},2000)}})}else if(a.match(/^https?:\/\/.+?(?:search|url|id|v|&[^\/]+?|\w+?\.html\?\w+?)[#=\?]https?\:\/\/[^\/]+?\.yinyuetai\./)){document.title='音乐台视频解析中';document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='≥△≤ 已自动隐藏 ≥△≤';clearTimeout(titleTime)}else{document.title='欢迎回来继续看视频';titleTime=setTimeout(function(){document.title='音乐台视频解析中'},2000)}})}})();
document.head.insertAdjacentHTML('beforeend',`<style>[id*="bottom"],[style*="position:fixed;"][style*="bottom:0px;"],[style*="position: fixed;"][style*="bottom: 0px;"],[style*="position:fixed;"][style*="left:0px;"],[style*="position: fixed;"][style*="left: 0px;"],[style^="display:inline-block"],[style^=" display"][style*="none"]+[style*="fixed"],[style^="display"][style*="none"]+[style*="fixed"],div[style^="display"][style*="none"] script,div[style^=" display"][style*="none"] script,span[style^="display"][style*="none"] img,span[style^=" display"][style*="none"] img,span[style^="display"][style*="none"]+script,span[style^=" display"][style*="none"]+script,span[style^="display"][style*="none"]+script+div,span[style^=" display"][style*="none"]+script+div,script+span[style^="display"][style*="none"]+div,script+span[style^=" display"][style*="none"]+div,[style*="bottom:0px;left:0px;"][style*="position:fixed"],[style*="bottom: 0px; left: 0px;"][style*="position: fixed"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}::-webkit-scrollbar{width:0px!important;height:0px!important}</style>`)
}if(window.location.href.match(/^https?:\/\/(?:jiuxihuan\.net|play\.ufanw\.com)\//i)){document.head.insertAdjacentHTML('beforeend',`<style>header,nav,[class*="tj"],[id*="tj"],[class*="dating_rukou"],[class*="dating"],[class*="waifu"],[id*="waifu"],[class*="-ad"],[id*="-ad"],[class*="ad_"],[id*="ad_"],[class^="tips_"],[id^="tips_"],canvas,[class*="bottom"],[id*="bottom"],[class^="trigger"][id^="trigger"],[class*="_top"],[id*="_top"],[style*="fixed"],br,img,iframe:not([id*="vip"]),[class="leftBg"],[class="juji-list"],[class$="-container"],[class^="login_"],[class^="mask_"],[class^="page_"],[class^="juji-"],[align="center"],[class^="live_"],[class*="-wrapper"],[class^="roll_"],[class*="layui-"],[class^="top_"],[class^="foot"],[class="jiaqun"],[class^="link"],[class*="menu"],[id*="menu"],[class*="-ad"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;}body{background:black!important;}body .login{border-top:none!important;}.allLines{margin-top:-75px!important;}.login{background:black!important;}.login .leftBg{background:black!important;background:-webkit-gradient(linear,left bottom,right top,color-stop(100%,black),color-stop(100%,black))!important;background:-webkit-linear-gradient(45deg,black 100%,#0c0c0c 100%)!important;background:linear-gradient(45deg,black 100%,#0c0c0c 100%)!important;}.allLines div{width:222px!important;height:20px;BORDER-LEFT:black 5px solid;TEXT-DECORATION:none!important;BORDER-LEFT-COLOR:black!important;BORDER-BOTTOM-COLOR:black!important;BORDER-TOP-COLOR:black!important;BORDER-RIGHT-COLOR:black!important;box-shadow:inset rgba(255,254,255,.6) 0 0.3em 0.3em,inset rgba(0,0,0,.15) 0 -0.1em 0.3em,#d82661 0 0.1em 3px,#b7144a 0 0.3em 1px,rgba(0,0,0,.2) 0 0;}</style>`)}
else if(window.location.href.match(/^https?:\/\/tv\.wandhi\.com\//i)){document.head.insertAdjacentHTML('beforeend',`<style>header,nav,[class="btn btn-success btn-lg btn-block "],[target*="_blank"],button[type="button"][onclick="dihejk2()"],input,span,p,[class*="-fixed-"],[class="container"],[role="alert"],section,[class^="unit-"],[class^="table"],[data-id],[data-uid],[class^="container-"],[class*="coin"],[id*="coin"],[id^="lv-"],[id*="coin"]~[class^="panel-"],[class*="tj"],[id*="tj"],[class*="dating_rukou"],[class*="dating"],[class*="waifu"],[id*="waifu"],[class*="-ad"],[id*="-ad"],[class*="ad_"],[id*="ad_"],[class^="tips_"],[id^="tips_"],canvas,[class*="bottom"],[id*="bottom"],[class^="trigger"][id^="trigger"],[class*="_top"],[id*="_top"],[style*="fixed"],br,img,[class="leftBg"],[class="juji-list"],[class$="-container"],[class^="login_"],[class^="mask_"],[class^="page_"],[class^="juji-"],[align="center"],[class^="live_"],[class*="-wrapper"],[class^="roll_"],[class*="layui-"],[class^="top_"],[class^="foot"],[class="jiaqun"],[class^="link"],[class*="menu"],[id*="menu"],[class*="-ad"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;}.center-block{top:-50px;width:100%!important;background:black!important}html,body{background-image:none!important;background:black!important}.panel{margin-bottom:0!important;background-color:transparent;border:none;border-radius:0;-webkit-box-shadow:none;box-shadow:none}section~div iframe{height:500px}html,body{background-image:none!important;background:black!important;zoom:0.95}</style>`)}
else if(window.location.href.match(/^https?:\/\/(?:chinese-elements\.com|tv\.oopw\.top)\//i)){document.head.insertAdjacentHTML('beforeend',`<style>header,nav,[class="control-row"] span[class="select-left"],[class^="link"],[id^="link"],[target*="_blank"],button[type="button"][onclick="dihejk2()"],input,p,[class*="-fixed-"],[role="alert"],[class^="unit-"],[class^="table"],[data-id],[data-uid],[class^="container-"],[class*="coin"],[id*="coin"],[id^="lv-"],[id*="coin"] ~ [class^="panel-"],[class*="tj"],[id*="tj"],[class*="dating_rukou"],[class*="dating"],[class*="waifu"],[id*="waifu"],[class*="-ad"],[id*="-ad"],[class*="ad_"],[id*="ad_"],[class^="tips_"],[id^="tips_"],canvas,[class*="bottom"],[id*="bottom"],[class^="trigger"][id^="trigger"],[class*="_top"],[id*="_top"],[style*="fixed"],br,img,[class="leftBg"],[class="juji-list"],[class$="-container"],[class^="login_"],[class^="mask_"],[class^="page_"],[class^="juji-"],[align="center"],[class^="live_"],[class*="-wrapper"],[class^="roll_"],[class*="layui-"],[class^="top_"],[class^="foot"],[class="jiaqun"],[class^="link"],[class*="menu"],[id*="menu"],[class*="-ad"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}html,body{background-image:none!important;background:black!important;zoom:0.9}</style>`)}
else if(window.location.href.match(/^https?:\/\/[^\/]*?guandianzhiku\.com\//i)){document.head.insertAdjacentHTML('beforeend',`<style>header,nav,[target*="_blank"],input,p,[class*="-fixed-"],[role="alert"],section,[class^="unit-"],[class^="table"],[data-id],[data-uid],[class*="coin"],[id*="coin"],[id^="lv-"],[id*="coin"] ~ [class^="panel-"],[class*="tj"],[id*="tj"],[class*="dating_rukou"],[class*="dating"],[class*="waifu"],[id*="waifu"],[class^="tips_"],[id^="tips_"],canvas,[class*="bottom"],[id*="bottom"],[class^="trigger"][id^="trigger"],[class*="_top"],[id*="_top"],[style*="fixed"],br,img,[class="leftBg"],[class="juji-list"],[class$="-container"],[class^="login_"],[class^="mask_"],[class^="page_"],[class^="juji-"],[align="center"],[class^="live_"],[class*="-wrapper"],[class^="roll_"],[class*="layui-"],[class^="top_"],[class^="foot"],[class="jiaqun"],[class^="link"],[class*="menu"],[id*="menu"],.jconfirm-open.jconfirm-light.jconfirm,.ad,.footer.text-center,#film-play-url,.header,.hidden-xs.hint-text,.visible-lg.import-message,.hint-text-instruction{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}html,body{background-image:none!important;background:black!important;zoom:0.95}</style>`)}
else if(window.location.href.match(/^https?:\/\/thinkibm\.now\.sh\//i)){document.head.insertAdjacentHTML('beforeend',`<style>header,nav,[class*="search"],[class*="topbar"],[class="col-md-14 column column-tips"]>[class="panel panel-default"],[class^="tips"],[class="panel panel-default"] span,[class^="link"],[id^="link"],[target*="_blank"],button[type="button"][onclick="dihejk2()"],[class*="copyright"],amp-auto-ads,input,ins,[data-use],p,[class*="-fixed-"],[role="alert"],section,[class^="unit-"],[class^="table"],[class^="container-"],[class*="coin"],[id*="coin"],[id^="lv-"],[id*="coin"] ~ [class^="panel-"],[class*="tj"],[id*="tj"],[class*="dating_rukou"],[class*="dating"],[class*="waifu"],[id*="waifu"],[class*="-ad"],[id*="-ad"],[class*="ad_"],[id*="ad_"],[class^="tips_"],[id^="tips_"],canvas,[class*="bottom"],[id*="bottom"],[class^="trigger"][id^="trigger"],[class*="_top"],[id*="_top"],[style*="fixed"],br,img,[class="leftBg"],[class="juji-list"],[class$="-container"],[class^="login_"],[class^="mask_"],[class^="page_"],[class^="juji-"],[align="center"],[class^="live_"],[class*="-wrapper"],[class^="roll_"],[class*="layui-"],[class^="top_"],[class^="foot"],[class="jiaqun"],[class^="link"],[class*="menu"],[id*="menu"],[class*="-ad"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}html,body{background-image:none!important;background:black!important}.panel-body{height:475px!important}</style>`)}
else if(window.location.href.match(/^https?:\/\/jx\.688ing\.com\//i)){document.head.insertAdjacentHTML('beforeend',`<style>div.vertical-middle>table:last-child>tbody>tr:first-child,#footer,nav,amp-auto-ads,#header>button.btn.f-right:last-child,#get-history,[data-use]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}html,body{background-image:none!important;background:black!important}</style>`)}
else if(window.location.href.match(/^https?:\/\/wanneng\.run\/n\/#/i)){document.head.insertAdjacentHTML('beforeend',`<style>#itemListId>.typeNameSp:nth-child(n+2),#itemListId>.floatleft.col-md-6.col-lg-4.tool-li:nth-child(n+9),[class="pass_buy"],[class^="head"],[class^="subShow"],[class^="box "],[class^="foot"],header,nav{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important}</style>`)}
else if(window.location.href.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=[^\/]+?&vid=(?:&|$)|(?!.+?[\?&]vid=).+?[\?&]cid=|(?!.+?[\?&]cid)(?:.+?\/channel\/|index\.html|$))/i)){
function tx(){
if(window.location.href.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=[^\/]+?&vid=(?:&|$)|(?!.+?[\?&]vid=).+?[\?&]cid=)/i)){
var c=window.location.href,a=document.location.toString().split("cid="),c=a[1].indexOf("cid=");a=a[1].substring(c);-1!=a.indexOf("&")&&(a=a.split("&")[0]);top.location.href="http://v.qq.com/x/cover/"+a+".html";
}else if(window.location.href.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/(?!.+?[\?&]cid)(?:.+?\/channel\/|index\.html|$)/i)){
var url=window.location.href;setInterval(function(){var newUrl=window.location.href;if(newUrl!=url){url=window.location.href;history.go(0)}});
}else{}};
if(document.readyState=="complete"){tx();}else{tx();}
}else if(window.location.href.match(/^https?:\/\/(?:(?:tw|www|m)\.iqiyi\.com\/v_|v\.youku\.com\/v_show\/id_|m\.youku\.com\/(?:alipay_)?video\/id_|v\.qq\.com\/(?:x\/cover\/|cover\/(?:u|w)\/|x\/page\/)|(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=|(?!.+?[\?&]cid=)(?:.+?\/channel\/|index\.html|$)|(?:.+?\/)?cover\/\w+?\/(?![^\/]+?[\?&][cv]id=)\w+?\.htm)|(?:www|m)\.mgtv\.com\/b\/|(?:www|m)\.le\.com\/(?:vplay_|ptv\/vplay\/)|(?:m\.)?(?:tv|film)\.sohu\.com\/(?:(?:20|v[^\.]+?\.s?html|v\/[^=]*?==\.)|album\/)|(?:v|m)\.pptv\.com\/show\/|www\.wasu\.cn\/(?:Play\/show\/|wap\/play\/)|vip\.1905\.com\/play\/|www\.fun\.tv\/vplay\/g-|m\.fun\.tv\/mplay\/|video\.tudou\.com\/v\/)/i)){
(function(){
setInterval(()=>{
if(window.location.href.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=[^\/]+?&vid=(?:&|$)|(?!.+?[\?&]vid=).+?[\?&]cid=)/i)){
var c=window.location.href,a=document.location.toString().split("cid="),c=a[1].indexOf("cid=");a=a[1].substring(c);-1!=a.indexOf("&")&&(a=a.split("&")[0]);top.location.href="http://v.qq.com/x/cover/"+a+".html";
}},1000);
var aa=1,aab=1,aac=1,bb=1,bbc=1,bbd=1,bbe=1,cc='<span><a1 style="color:#ff5f00">选集</a1>',cca='<span><a1 style="color:blueviolet">集合</a1>',ccb='<span><a1 style="color:blue">备用</a1>',ccd='<span><a1 style="color:blue;zoom:1.5">友情捐献</a1>',cce='<span><a1 style="color:blue;zoom:1.5">每日红包</a1>',ccf='<span><a1 style="color:blue;zoom:1.5">联系作者</a1>',ccg='<span><a1 style="color:blue;zoom:1.5">未知活动</a1>',dd='<span><a1 style="color:darkgreen">原</a1>',dda='<span><a1 style="color:darkgreen">弹</a1>',ee='<a3 style="color:#ff5f00;font-size:20px;font-family:Georgia">',eea='<a3 style="color:blueviolet;font-size:20px;font-family:Georgia">',eeb='<a3 style="color:#E91E63;font-size:20px;font-family:Georgia">',eed='<a3 style="color:blue;font-size:20px;font-family:Georgia">',ff='</a3><a5 style="color:#ff5f00">：</a5></span>',ffa='</a3><a5 style="color:blueviolet">：</a5></span>',ffb='</a3><a4 style="color:darkgreen">号</a4><a5 style="color:#2196F3;zoom:0.5">➽</a5></span>',ffc='</a3><a5 style="color:blue">：</a5></span>',gg=cc+ee,gga=cca+eea,ggb=dd+eeb,ggc=dda+eeb,gge=ccb+eed,https=[{
/* 这里是 原网页解析 接口存放处，根据以下格式可以自行添加接口（只支持 https接口） */
/* 这里是 看电视剧可以快速选集 */
name:gg+aa+++ff+"69",url:"https://api.69ne.com/?url="
},{name:gg+aa+++ff+"m1907",url:"https://z1.m1907.cn/?jx="
},{name:gg+aa+++ff+"初心",url:"https://jx.bwcxy.com/?v="
},{name:gg+aa+++ff+"宿命",url:"https://api.sumingys.com/index.php?url="
},{name:gg+aa+++ff+"围观",url:"https://www.wggvip.com/jiexi/?v="
},{name:gg+aa+++ff+"协议",url:"https://parse.xymov.net/?url="
},{name:gg+aa+++ff+"HK",url:"https://jx.rdhk.net/?v="
},{name:gg+aa+++ff+"梦中人",url:"https://mzrdy.applinzi.com/mzr/xyparse/?url="
},{name:gg+aa+++ff+"视点",url:"https://jx.shidian8.com/bt/?url="
},{name:gg+aa+++ff+"飞鸟",url:"https://api.ledboke.com/?url="
},{name:gg+aa+++ff+"920二",url:"https://api.tv920.com/vip/?url="
},{name:gg+aa+++ff+"52a",url:"https://jx.52a.ink/?url="
},{name:gg+aa+++ff+"98a",url:"https://jx.98a.ink/?url="
//////////////////////////////////////////////////////
/* 这里是有 切换接口按钮 */
},{name:gga+aab+++ffa+"瀚晶",url:"https://beaacc.com/api.php?url="
},{name:gga+aab+++ffa+"玻璃",url:"https://vip.bljiex.com/?v="
},{name:gga+aab+++ffa+"30",url:"https://030e.com/?url="
},{name:gga+aab+++ffa+"神奇",url:"https://aoye8.com/vip/vip.php?url="
},{name:gga+aab+++ffa+"音萌",url:"https://api.v6.chat/?url="
},{name:gga+aab+++ffa+"爱哈",url:"https://jx.jiexis.com/jx/?url="
},{name:gga+aab+++ffa+"解析啦",url:"https://www.jiexila.com/?url="
},{name:gga+aab+++ffa+"41",url:"https://jx.f41.cc/?url="
},{name:gga+aab+++ffa+"6080",url:"https://sp.6080jx.com/?url="
},{name:gga+aab+++ffa+"惊喜",url:"https://jiexi8.com/vip/index.php?url="
},{name:gga+aab+++ffa+"马刺",url:"https://api.mcncn.cn/?url="
},{name:gga+aab+++ffa+"OK一",url:"https://okjx.cc/?url="
},{name:gga+aab+++ffa+"思古",url:"https://607p.com/?url="
},{name:gga+aab+++ffa+"石云",url:"https://jiexi.071811.cc/jx.php?url="
},{name:gga+aab+++ffa+"金桥",url:"https://jqaaa.com/jx.php?url="
},{name:gga+aab+++ffa+"野马",url:"https://www.xymav.com/?url="
},{name:gga+aab+++ffa+"灵鸟",url:"https://xyatv.com/?url="
},{name:gga+aab+++ffa+"789",url:"https://api.jiexi789.com/index.php?url="
//////////////////////////////////////////////////////
/* 这里只有 单接口 */
},{name:ggb+aac+++ffb+"凉城",url:"https://jx.mw0.cc/?url="
},{name:ggb+aac+++ffb+"360",url:"https://www.360jx.vip/?url="
},{name:ggb+aac+++ffb+"618",url:"https://jx.618g.com/?url="
},{name:ggb+aac+++ffb+"流氓",url:"https://jx.wslmf.com/?url="////
},{name:ggb+aac+++ffb+"梦城",url:"https://jx.iztyy.com/svip/?url="
},{name:ggb+aac+++ffb+"TEST",url:"https://api.steak517.top/?url="
},{name:ggb+aac+++ffb+"烈日",url:"https://okjx.lrkdzx.com/okbyjiexi/?url="
},{name:ggb+aac+++ffb+"云端",url:"https://v.dybhn.com/?url="
},{name:ggb+aac+++ffb+"巅峰",url:"https://vip.ditouxiaoxiang.cn/?url="
},{name:ggb+aac+++ffb+"8B",url:"https://api.8bjx.cn/?url="
},{name:ggb+aac+++ffb+"517",url:"https://cn.bjbanshan.cn/jx.php?url="
},{name:ggb+aac+++ffb+"33t",url:"https://www.33tn.cn/?url="
},{name:ggb+aac+++ffb+"芭比云",url:"https://jx.1ff1.cn/?url="
},{name:ggb+aac+++ffb+"免费",url:"https://v.canzhisong.cn/k.php?url="
},{name:ggb+aac+++ffb+"黑云",url:"https://jiexi.adinisp.com/?url="
},{name:ggb+aac+++ffb+"ha12",url:"https://py.ha12.xyz/sos/index.php?url="
},{name:ggb+aac+++ffb+"2020",url:"https://api.2020jx.com/?url="
},{name:ggb+aac+++ffb+"4080",url:"https://jx.70808.net/?url="
},{name:ggb+aac+++ffb+"8090",url:"https://www.8090g.cn/jiexi/?url="
},{name:ggb+aac+++ffb+"1616",url:"https://www.1616jx.com/jx/api.php?url="
},{name:ggb+aac+++ffb+"沃澳",url:"https://www.wocao.xyz/index.php?url="
},{name:ggb+aac+++ffb+"黑米",url:"https://www.heimijx.com/jx/api/?url="
},{name:ggb+aac+++ffb+"界限",url:"https://api.jiexi.la/?url="
},{name:ggb+aac+++ffb+"文艺",url:"https://www.myxin.top/jx/api/?url="
},{name:ggb+aac+++ffb+"诺讯",url:"https://www.nxflv.com/?url="
},{name:ggb+aac+++ffb+"40",url:"https://jx40.net/url="
},{name:ggb+aac+++ffb+"47",url:"https://5.5252e.com/jx/b.php?url="
},{name:ggb+aac+++ffb+"无名",url:"https://www.administratorw.com/index.php?url="
},{name:ggb+aac+++ffb+"乐乐",url:"https://660e.com/?url="
},{name:ggb+aac+++ffb+"稳定",url:"https://19g.top/?url="
},{name:ggb+aac+++ffb+"A2",url:"https://v.canzhisong.cn/v.php?url="
},{name:ggb+aac+++ffb+"78",url:"https://api.78sy.cn/?url="
},{name:ggb+aac+++ffb+"千叶",url:"https://yi29f.cn/vip/vip.php?url="
},{name:ggb+aac+++ffb+"927",url:"https://api.927jx.com/vip/?url="
},{name:ggb+aac+++ffb+"ab33",url:"https://jx.ab33.top/vip/?url="
},{name:ggb+aac+++ffb+"OK二",url:"https://jx.okokjx.com/okokjiexi/jiexi.php?url="
},{name:ggb+aac+++ffb+"920一",url:"https://api.tv920.com/jx/?url="
},{name:ggb+aac+++ffb+"40",url:"https://0.azw520521.com/bt/?url="
},{name:ggb+aac+++ffb+"地铁",url:"https://jx.3dtou.cn/?url="
},{name:ggb+aac+++ffb+"科技",url:"https://by.dybhn.com/?url="
},{name:ggb+aac+++ffb+"哈巴",url:"https://www.h8jx.com/jiexi.php?url="
},{name:ggb+aac+++ffb+"云端",url:"https://www.6080jx.com/?url="
},{name:ggb+aac+++ffb+"老牌",url:"https://www.playm3u8.cn/jiexi.php?url="
},{name:ggb+aac+++ffb+"盘古",url:"https://www.pangujiexi.cc/jiexi.php?url="
},{name:ggb+aac+++ffb+"学习",url:"https://vip.qi71.cn/?url="
},{name:ggb+aac+++ffb+"九九",url:"https://jx.99yyw.com/?url="
},{name:ggb+aac+++ffb+"我爱",url:"https://vip.52jiexi.top/?url="
},{name:ggb+aac+++ffb+"宝黛",url:"https://player.baodai.org/ipsign/player.php?v="////
},{name:ggb+aac+++ffb+"穷二代",url:"https://jx.ejiafarm.com/dy.php?url="
},{name:ggb+aac+++ffb+"豪华",url:"https://api.lhh.la/vip/?url="
},{name:ggb+aac+++ffb+"解析狗",url:"https://www.jiexigo.com/?url="////
},{name:ggb+aac+++ffb+"大白",url:"https://jx.dabaiapi.com/?url="
},{name:ggb+aac+++ffb+"百灵",url:"https://xyatv.com/jx/?url="
},{name:ggb+aac+++ffb+"1717",url:"https://www.1717yun.com/jx/ty.php?url="
},{name:ggb+aac+++ffb+"星空",url:"https://jx.fo97.cn/?url="
},{name:ggb+aac+++ffb+"简傲",url:"https://vip.jaoyun.com/index.php?url="
},{name:ggb+aac+++ffb+"云逸",url:"https://jx.iztyy.com/svip/?url="
},{name:ggb+aac+++ffb+"风车",url:"https://player.chuangb.com/ipsign/dm530.php?id="
},{name:ggb+aac+++ffb+"宝码",url:"https://jiexi.cnbmly.cn/?url="
},{name:ggb+aac+++ffb+"乘客",url:"https://www.ckmov.vip/api.php?url="
},{name:ggb+aac+++ffb+"专用",url:"https://jx.yqmao.cn/jx.php?url="
},{name:ggb+aac+++ffb+"爱看",url:"https://jx.ikandie.cn/jiexi/?url="
},{name:ggb+aac+++ffb+"人人",url:"https://cdn.yangju.vip/k/?url="
},{name:ggb+aac+++ffb+"泥潭",url:"https://nitian9.com/?url="
},{name:ggb+aac+++ffb+"55",url:"https://55jx.top/?url="
},{name:ggb+aac+++ffb+"66",url:"https://vip.66parse.club/?url="
},{name:ggb+aac+++ffb+"77",url:"https://77jx.net/url="
},{name:ggb+aac+++ffb+"智能",url:"https://gege.ha123.club/gege12368/index.php?url="
},{name:ggb+aac+++ffb+"明日",url:"https://v.nmbaojie.com/mingri/mingri.php?url="
},{name:ggb+aac+++ffb+"云波",url:"https://timijx.yunboys.cn/?url="
},{name:ggb+aac+++ffb+"吾爱",url:"https://jx.3aym.cn/?url="
},{name:ggb+aac+++ffb+"飞飞",url:"https://jx.lfeifei.cn/?url="
},{name:ggb+aac+++ffb+"ABC",url:"https://api.2020abc.cn/?url="
},{name:ggb+aac+++ffb+"100",url:"https://j.wfss100.com/?url="////
}],
http=[{name:ccd,url:"https://gitee.com/qq963540817/tp/raw/master/juanxian.png###"},{name:cce,url:"https://gitee.com/qq963540817/tp/raw/master/hongbao.jpg###"},{name:ccg,url:"https://gitee.com/qq963540817/tp/raw/master/shouqianma.png###"},{name:ccf,url:"https://jq.qq.com/?_wv=1027&k=5m1iCjl###"},{name:gge+bb+++ffc+"有范",url:"http://play.ufanw.com/play.html?url="},{name:gge+bb+++ffc+"牛皮",url:"http://jiuxihuan.net/niupi/kankan/?url="},{name:gge+bb+++ffc+"工具",url:"https://wanneng.run/n/#"},{name:gge+bb+++ffc+"玩的嗨",url:"http://tv.wandhi.com/go.html?url="},{name:gge+bb+++ffc+"牛巴巴",url:"https://jx.688ing.com/?search="},{name:gge+bb+++ffc+"大河",url:"https://chinese-elements.com/v.html?zwx="},{name:gge+bb+++ffc+"大亨",url:"http://tv.oopw.top/v.php?url="},{name:gge+bb+++ffc+"GIF",url:"http://www.guandianzhiku.com/v/s?url="},{name:gge+bb+++ffc+"U-U",url:"https://thinkibm.now.sh/?url="//这九个接口只在电脑端显示，手机默认隐藏
/* 这里是 弹窗解析 接口存放处，根据以下格式可以自行添加接口（支持 http接口 或 https接口） */
//////////////////////////////////////////////////////
/* 这里是 看电视剧可以快速选集 */
},{name:gg+bbc+++ff+"花开",url:"http://jx.rdhk.net/?v="
},{name:gg+bbc+++ff+"小亨",url:"http://jx.cesms.cn/?url="
},{name:gg+bbc+++ff+"第九",url:"http://v.d9y.net/vip/?url="
},{name:gg+bbc+++ff+"知网",url:"http://jx.xyyh.xyz/?v="
},{name:gg+bbc+++ff+"77o",url:"http://vip.77o.net/jiexi/?v="
},{name:gg+bbc+++ff+"易云",url:"http://v.ioto.vip/?v="
},{name:gg+bbc+++ff+"冰豆",url:"http://api.bingdou.net/api/?url="
},{name:gg+bbc+++ff+"个五",url:"https://jx.ygwyy.com/Svip/?v="
},{name:gg+bbc+++ff+"逍遥",url:"http://jx.ixiaoyao.top/?v="
//////////////////////////////////////////////////////
/* 这里是有 切换接口按钮 */
},{name:gga+bbd+++ffa+"5252",url:"http://5.5252e.com/jx.php?url="
},{name:gga+bbd+++ffa+"乌桕",url:"http://jx.598110.com/?url="
},{name:gga+bbd+++ffa+"17云",url:"http://17kyun.com/api.php?url="
},{name:gga+bbd+++ffa+"无限",url:"http://v.88tv.org/?v="
},{name:gga+bbd+++ffa+"六子",url:"http://api.6uzi.com/?url="
},{name:gga+bbd+++ffa+"天看",url:"http://jx.tvtvkan.com/?v="
},{name:gga+bbd+++ffa+"牛牛",url:"http://jx.yuanzhi668.cn/index.php?url="
},{name:gga+bbd+++ffa+"干货",url:"http://k8aa.com/jx/index.php?url="
},{name:gga+bbd+++ffa+"花园",url:"http://j.zz22x.com/jx/?url="
},{name:gga+bbd+++ffa+"神盒",url:"http://cs.viphm.xyz/ceshi/?v="
},{name:gga+bbd+++ffa+"通用",url:"http://jx.aeidu.cn/index.php?url="
},{name:gga+bbd+++ffa+"妮可",url:"http://jiexi.kingsnug.cn/tx.php?url="
},{name:gga+bbd+++ffa+"挚爱",url:"http://www.10yy.com.cn/?url="
},{name:gga+bbd+++ffa+"极速",url:"http://jx.szwlss.cn/api/?url="
},{name:gga+bbd+++ffa+"瑞特",url:"http://jx.0421v.pw/index.php?url="
},{name:gga+bbd+++ffa+"酷搏",url:"http://jx.x-99.cn/api.php?id="
},{name:gga+bbd+++ffa+"弘易阁",url:"http://jx.hongyishuzhai.com/index.php?url="
},{name:gga+bbd+++ffa+"清风",url:"http://fateg.xyz/?url="
},{name:gga+bbd+++ffa+"飞儿",url:"http://www.freeget.org/jx.php?url="
},{name:gga+bbd+++ffa+"技术",url:"http://jx.isryun.com/?v="
},{name:gga+bbd+++ffa+"指南",url:"http://yun.tvznn.cn/lines?url="
},{name:gga+bbd+++ffa+"1988",url:"https://vip.1988ds.cn/?v="
},{name:gga+bbd+++ffa+"神马",url:"https://jx.smbk.cc/?v="
//////////////////////////////////////////////////////
/* 这里只有 单接口 */
},{name:ggc+bbe+++ffb+"米侠",url:"http://wodaoba.cn/cstxre506.abc?noxiu=.pchp_unun_&needxiu=ixigua.c_uyuy_&ten1g1=&ten1g2=&ten1g3=&isjquery=&isckplayer=&pid="
},{name:ggc+bbe+++ffb+"咪咪",url:"http://mimijiexi.top/?url="
},{name:ggc+bbe+++ffb+"百域阁",url:"http://api.baiyug.vip/index.php?url="
},{name:ggc+bbe+++ffb+"学习",url:"http://vip.jlsprh.com/index.php?url="
},{name:ggc+bbe+++ffb+"菜鸟",url:"http://jiexi.bm6ig.cn/?url="
},{name:ggc+bbe+++ffb+"杜尔",url:"http://jx.du2.cc/?url="
},{name:ggc+bbe+++ffb+"福祥",url:"http://jx.hao0606.com/?url="
},{name:ggc+bbe+++ffb+"百泽",url:"http://wabaiyi.com:520/vip/?url="
},{name:ggc+bbe+++ffb+"艾特",url:"http://at520.cn/jx/?url="
},{name:ggc+bbe+++ffb+"二度",url:"http://jx.drgxj.com/?url="
},{name:ggc+bbe+++ffb+"拉车",url:"http://jx.lache.me/cc/?url="
},{name:ggc+bbe+++ffb+"蚂蚁",url:"http://jx.v5ant.com/?v="
},{name:ggc+bbe+++ffb+"天天",url:"https://jx.mba98.com/?url="
},{name:ggc+bbe+++ffb+"设计",url:"https://www.sjzvip.com/v/c.php?url="
},{name:ggc+bbe+++ffb+"阿拉",url:"https://jx.aldsw.cn/jx/index.php?url="
},{name:ggc+bbe+++ffb+"雨见一",url:"http://api.mkxiu.cn/?url="
},{name:ggc+bbe+++ffb+"雨见二",url:"http://wwa.ha12.xyz/jian/index.php?url="
},{name:ggc+bbe+++ffb+"万能一",url:"http://jx.cx77m1.cn/?url="
},{name:ggc+bbe+++ffb+"万能二",url:"http://wbjx.cx77m1.cn/wabi/?url="
}];
function createSelecthttps(https){
var httpsvipul=document.createElement("ul");
httpsvipul.id="httpsvipul";
httpsvipul.setAttribute("style","display:none");
for(var i=0;i<https.length;i++){
var httpsvipli=document.createElement("li");
var that=this;
(function(num){
httpsvipli.onclick=function(){
Fn1();
function Fn1(){
if(document.getElementsByTagName("video")[0]){var v_player=document.getElementsByTagName("video");for(var i=0,length=v_player.length;i<length;i++){v_player[i].pause()}}else if(document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]){var v_player=document.querySelectorAll("embed,video,object,iframe[frameborder]");for(var i=0,length=v_player.length;i<length;i++){v_player[i].parentNode.removeChild(v_player[i])}};
};
Fn2();
function Fn2(){
var b=window.location.href;
var qp='data-ad="false" marginwidth="0" marginheight="0" autoplay="ture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" allowTransparency="allowTransparency" border="0" frameborder="0" scrolling="no" marginwidth="0"';
var style="border:none;outline:none;margin:0;padding:0;position:absolute;z-index:999999;";
function sx(){
if(document.querySelectorAll('iframe[id="jiangxiaobai"]')[0]){document.querySelectorAll('iframe[id="jiangxiaobai"]')[0].innerHTML=''}else{};
var url=window.location.href;setInterval(function(){var newUrl=window.location.href;if(newUrl!=url){url=window.location.href;history.go(0)}});
!function(){if(document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]){var shijian=document.querySelectorAll("embed,video,object,iframe[frameborder]")[0];shijian.currentTime=0;shijian.currentTimes=0}else{}}();
};
function lejs(){
setInterval(function(){var e=document.querySelector("#video video");e&&"about:blank"!=e.src&&(e.src="about:blank")},500),[].forEach.call(document.querySelectorAll("[data-vid]"),function(e){$(e).attr("data-newvid",$(e).data("vid")),$(e).removeAttr("data-vid"),e.onclick=function(t){var t=event||window.event||arguments.callee.caller.arguments[0],o=$(t.target).closest("[data-newvid]").data("vid"),i=window.location.href.match(/https?:\/\/.*?vplay\//)[0]+o+".html";document.getElementById("fla_box").src=localStorage.Wle_Last+i,history.pushState("","",i),$.get("https://www.le.com/service/getVideoInfo/"+o,function(e){$(".briefIntro_tit a").html(e.data.video.title),$(".briefIntro_tit a").href=i,$(".briefIntro_tit a").attr("title",e.data.video.title)}),$(e).parent().children().removeClass("cur"),$(e).addClass("cur")}});setInterval(function(){var e=document.querySelector("#video video");e&&"about:blank"!=e.src&&(e.src="about:blank")},500),[].forEach.call(document.querySelectorAll("[data-vid]"),function(e){$(e).attr("data-newvid",$(e).data("vid")),$(e).removeAttr("data-vid"),e.onclick=function(t){var t=event||window.event||arguments.callee.caller.arguments[0],o=$(t.target).closest("[data-newvid]").data("vid"),i=window.location.href.match(/https?:\/\/.*?vplay\//)[0]+o+".html";document.getElementById("fla_box").src=localStorage.Wle_Last+i,history.pushState("","",i),$.get("https://www.le.com/service/getVideoInfo/"+o,function(e){$(".briefIntro_tit a").html(e.data.video.title),$(".briefIntro_tit a").href=i,$(".briefIntro_tit a").attr("title",e.data.video.title)}),$(e).parent().children().removeClass("cur"),$(e).addClass("cur")}});
};
function qiyijs(){
(function($){var o=document.getElementById("flashbox"),i=window.location.href.match(/curid=(\d+)/);if(i){var a=document.createElement("script");a.src="https://mixer.video.iqiyi.com/jp/mixin/videos/"+i[1],a.id="vInfo_API",vInfo_API=document.getElementById("vInfo_API"),vInfo_API?(document.head.removeChild(vInfo_API),document.head.appendChild(a)):document.head.appendChild(a),a.onload=function(){o?o.src=localStorage.Wle_Last+tvInfoJs.url:vip_window.location.href=localStorage.Wle_Last+tvInfoJs.url}};var l=document.createElement("style");l.id="hide_vip_tip",l.innerHTML='[style*="visibility"][style*="visible"][style*="absolute"]{display:none!important}',document.getElementById("hide_vip_tip")||document.head.appendChild(l);var n=setInterval(function(){var e=document.querySelectorAll('.play-list-item,.select-item,.juji-list,[data-sourcelatest-elem="list"]');e.length>0&&([].forEach.call(e,function(e){e.onclick=function(e){setTimeout(function(){var e=window.location.href.match(/curid=(\d+)/)||window._qyv_info.slice(-1)[0].match(/dataid=(\d+)/)||window._qyv_info.slice(-1)[0].match(/video\/baseinfo\/(\d+)/);e&&Q.get("https://mixer.video.iqiyi.com/jp/mixin/videos/"+e[1],function(e){o?o.src=localStorage.Wle_Last+tvInfoJs.url:window.open(localStorage.Wle_Last+tvInfoJs.url,"vip_window","width=1280,height=720,scrollbars=no,toolba=no")},"script")},2e3)}}),clearInterval(n))},500)})();
};
if(b.match(/^https?:\/\/m\.youku\.com\/(?:alipay_)?video\/id_[^==]+?==\.html/i)){
sx();var c=window.location.href,a=document.location.toString().split("/id_"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.youku.com/v_show/id_'+a+'.html"></iframe>')})("player");
}else if(b.match(/^https?:\/\/m\.youku\.com\/(?:alipay_)?video\/id_[^\.]+?\.html/i)){
sx();var c=window.location.href,a=document.location.toString().split("://"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://m.youku.com'+a+'.html"></iframe>')})("player");
}else if(b.match(/^https?:\/\/m\.mgtv\.com\/b\//i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.mgtv.com'+a+'.html"></iframe>')})('.video-area');
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/(?:.+?\/)?cover\/\w+?\/(?![^\/]+?[\?&][cv]id=)\w+?\.htm/i)){
sx();var c=window.location.href,a=document.location.toString().split("/cover/"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.qq.com/x/cover'+a+'.html"></iframe>')})('.site_player,#player');
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/.+?[\?&]cid=[^\/]+?&vid=(?:&|$)/i)){
sx();var c=window.location.href,a=document.location.toString().split("cid="),c=a[1].indexOf("cid=");a=a[1].substring(c);-1!=a.indexOf("&")&&(a=a.split("&")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.qq.com/x/cover/'+a+'.html"></iframe>')})('.site_player,#player');
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/.+?[\?&]cid=[^\/]+?&vid=/i)){
sx();if(window.location.href.match(/[\?&]cid=/i)&&window.location.href.match(/&vid=/i)){var vipurl="";if(getvip('vid')==""){vipurl="http://v.qq.com/x/cover/"+getvip('cid')+".html"}else{vipurl="http://v.qq.com/x/cover/"+getvip('cid')+"/"+getvip('vid')+".html"}}function getvip(name){var reg=new RegExp("(?:^|&)"+name+"=([^&]*)(?:&|$)","i");var r=location.search.substr(1).match(reg);if(r!=null)return unescape(decodeURI(r[1]));return null};(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+vipurl+'"></iframe>')})('.site_player,#player');
}else if(b.match(/^https?:\/\/m\.pptv\.com\/show\//i)){
sx();var c=window.location.href,a=document.location.toString().split("/show/"),c=a[1].indexOf("/show/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.pptv.com/show/'+a+'.html"></iframe>')})("playerbox");
}else if(b.match(/^https?:\/\/vip\.1905\.com\/play\//i)){
sx();var c=window.location.href,a=document.location.toString().split("/play/"),c=a[1].indexOf("/play/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);if(document.getElementById("playBox")){(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://vip.1905.com/play/'+a+'.html"></iframe>')})("playBox");}else if(document.getElementById("player")){(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://vip.1905.com/play/'+a+'.html"></iframe>')})("player");};
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\/v/i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://m.tv.sohu.com'+a+'.shtml"></iframe>')})('.x-player');
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\/album\/s/i)){
sx();var c=window.location.href,a=document.location.toString().split("/album/s"),c=a[1].indexOf("/album/s");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://film.sohu.com/album/'+a+'.html"></iframe>')})('.x-player');
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\/album\//i)){
sx();var c=window.location.href,a=document.location.toString().split("/album/"),c=a[1].indexOf("/album/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://film.sohu.com/album/'+a+'.html"></iframe>')})('.x-player');
}else if(b.match(/^https?:\/\/m\.film\.sohu\.com\/album\//i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'right:0%" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://film.sohu.com'+a+'.html"></iframe>')})('#film_player_container');
}else if(b.match(/^https?:\/\/m\.le\.com\/vplay_/i)){
sx();var c=window.location.href,a=document.location.toString().split("/vplay_"),c=a[1].indexOf("/vplay_");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);if(document.querySelectorAll("#j-vipLook")[0]){(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<section class="column playB"><div class="column play"><div id="j-player" style="width:100%;height:205px;" style="display:none;"><iframe id="jiangxiaobai" style="'+style+'right:0%" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.le.com/ptv/vplay/'+a+'.html"></iframe></div></div></section>')})('.column.playB')}else{(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'right:0%" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.le.com/ptv/vplay/'+a+'.html"></iframe>')})('#j-player')}
}else if(b.match(/^https?:\/\/m\.iqiyi\.com\/(?:v_|dianying\/)/i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('.m-video-player-wrap{top:-205px!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<div><iframe id="jiangxiaobai" style="'+style+'" width="100%" height="210px"'+qp+'src="'+https[num].url+'http://www.iqiyi.com'+a+'.html"></iframe></div>')})('.m-video-player-wrap');
}else if(b.match(/^https?:\/\/www\.wasu\.cn\/wap\/play\/show\/id\//i)){
sx();var c=window.location.href,a=document.location.toString().split("://"),c=a[1].indexOf("/id/");a=a[1].substring(c);-1!=a&&(a=a);if(document.querySelectorAll('.vip_con.mb10')[0]){(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'right:0%" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.wasu.cn/Play/show'+a+'"></iframe>')})('.vip_con.mb10')}else{(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.wasu.cn/Play/show'+a+'"></iframe>')})('.ws_play.relative')};
}else if(b.match(/^https?:\/\/m\.fun\.tv\/mplay\//i)){
sx();var c=window.location.href,a=document.location.toString().split("?mid="),c=a[1].indexOf("?mid=");a=a[1].substring(c);-1!=a&&(a=a);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'right:0%" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.fun.tv/vplay/g-'+a+'/"></iframe>')})('#j-player-layout');
}else if(b.match(/^https?:\/\/v\.youku\.com\/v_show\/id_/i)){
sx();var b=window.location.href,a=document.location.toString().split("/id_"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf("==")&&(a=a.split("==")[0]);(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.youku.com/v_show/id_'+a+'==.html"></iframe>')})("#module_basic_player,#player");
}else if(b.match(/^https?:\/\/[^\/]*?\.tudou.com\/v\//i)){
sx();if(document.getElementsByClassName("js-player")[0]){document.getElementsByClassName("js-player")[0].innerHTML='<class="left-side"><div class="play-video-container"><div class="js-player"><div class="td-playbox"><div class="td-player"><div id="player_container"></div></div></div></div></div></div>'};window.onload=(function(b){var a=document.location.toString().split("/v/"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf("==")&&(a=a.split("==")[0]);b=document.getElementsByClassName("td-playbox")[0];b.innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.youku.com/v_show/id_'+a+'==.html"></iframe>'})();
}else if(b.match(/^https?:\/\/www\.mgtv\.com\/b\//i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('[class*="c-header-qcmenu"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("mgtv-player-wrap")){document.getElementById("mgtv-player-wrap").innerHTML=''};(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.mgtv.com'+a+'.html"></iframe>')})("mgtv-player-wrap");
}else if(b.match(/^https?:\/\/www\.le\.com\/(?:vplay_|ptv\/vplay\/)/i)){
lejs();sx();if(document.getElementById("video")){document.getElementById("video").innerHTML=''};var a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.le.com'+a+'.html"></iframe>')})("fla_box");
}else if(b.match(/^https?:\/\/v\.qq.com\/(?:x\/cover\/|cover\/(?:u|w)\/).+?.html\?vid=\w+$/i)){
sx();b=document.createElement("style");var d=document.createTextNode('[class*="mask_layer"],[id*="mask_layer"],[class*="vip"][class*="popup"],[id*="vip"][id*="popup"],[style*="visibility"][style*="visible"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("tenvideo_player")){document.getElementById("tenvideo_player").innerHTML=''};setTimeout(function(){function c(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.qq.com'+a+'"></iframe>')};var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a&&(a=a);b=document.createElement("style");var e=document.createTextNode('.site_channel,[class="tvip_layer"],[class*="_fixed_"],[id="mask_layer"]{display:none!important}');b.appendChild(e);document.getElementsByTagName("head")[0].appendChild(b);c("tenvideo_player");c("mod_player");setInterval(function(){window.location.href!=d&&(d=window.location.href,history.go(0))})},500)();
}else if(b.match(/^https?:\/\/v\.qq.com\/(?:x\/cover\/|cover\/(?:u|w)\/)/i)){
sx();b=document.createElement("style");var d=document.createTextNode('[class*="mask_layer"],[id*="mask_layer"],[class*="vip"][class*="popup"],[id*="vip"][id*="popup"],[style*="visibility"][style*="visible"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("tenvideo_player")){document.getElementById("tenvideo_player").innerHTML=''};setTimeout(function(){function c(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.qq.com'+a+'.html"></iframe>')}var d=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var e=document.createTextNode('.site_channel,[class="tvip_layer"],[class*="_fixed_"],[id="mask_layer"]{display:none!important}');b.appendChild(e);document.getElementsByTagName("head")[0].appendChild(b);c("tenvideo_player");c("mod_player");setInterval(function(){window.location.href!=d&&(d=window.location.href,history.go(0))})},500)();
}else if(b.match(/^https?:\/\/tv\.sohu\.com\/(?:20|v\/[^=]*?==\.)/i)){
sx();setTimeout(function(){if(document.getElementsByClassName('x-player')[0]){document.getElementsByClassName('x-player')[0].innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+document.location.href+'" class="x-player"></iframe>'}else{var dom=document.getElementById("player");if(typeof dom!='undefined'&&dom!=null){dom.outerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+document.location.href+'" id="player"></iframe>';var hidedom=document.getElementById("dmbar");if(typeof hidedom!="undefined")hidedom.style.display="none";dom=document.getElementById("player");var w=document.getElementById("sohuplayer").clientWidth-document.getElementById("menu").clientWidth;dom.style.width=w+"px";var vipdom=document.getElementById("player_vipTips");if(vipdom!=undefined&&vipdom!=null)vipdom.style.display="none"}}},500)();
}else if(b.match(/^https?:\/\/film\.sohu\.com\/album\//i)){
sx();b=document.createElement("style");var d=document.createTextNode('.header-nav.nav,#play-end-overlay,.J_play_end_pop.play-end-pop,.detailInfo_box>.singlePay{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("playerWrap")){document.getElementById("playerWrap").innerHTML=''};setTimeout(function(){var c=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('.header-nav.nav,#play-end-overlay,.J_play_end_pop.play-end-pop,.detailInfo_box > .singlePay{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'left:0%" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://film.sohu.com'+a+'.html"></iframe>')})("playerWrap")},500)();
}else if(b.match(/^https?:\/\/v\.pptv\.com\/show\//i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);if(document.getElementById("pptv_playpage_box")){document.getElementById("pptv_playpage_box").innerHTML=''};(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://v.pptv.com'+a+'.html"></iframe>')})("pptv_playpage_box");
}else if(b.match(/^https?:\/\/www\.fun\.tv\/vplay\/g-/i)){
sx();var a=window.location.href;if(document.getElementById("html-video-player-layout")){document.getElementById("html-video-player-layout").innerHTML=''};(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+a+'"></iframe>')})("html-video-player-layout");
}else if(b.match(/^https?:\/\/(?:tw|www)\.iqiyi\.com\/(?:v_|dianying\/)/i)){
qiyijs();sx();var a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('[class*="-player-vippay-popup"],[style*="visibility"][style*="visible"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementsByClassName('btn-pause')[0]){Fn1();function Fn1(){document.getElementsByClassName('btn-pause')[0].click()}Fn2();function Fn2(){if(document.getElementById("flashbox")){document.getElementById("flashbox").innerHTML=''};var url=window.location.href;setInterval(function(){var newUrl=window.location.href;if(newUrl!=url){url=window.location.href;history.go(0)}})}}else{};(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.iqiyi.com'+a+'.html"></iframe>')})("flashbox");
}else if(b.match(/^https?:\/\/www\.wasu\.cn\/Play\/show\//i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf("?")&&(a=a.split("?")[0]);b=document.createElement("style");var d=document.createTextNode('.sign_viph{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("flashContent")){document.getElementById("flashContent").innerHTML=''};(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<iframe id="jiangxiaobai" style="'+style+'" width="100%" height="100%"'+qp+'src="'+https[num].url+'http://www.wasu.cn'+a+'"></iframe>')})("flashContent");
};};};})(i);
httpsvipli.innerHTML=https[i].name;
httpsvipul.appendChild(httpsvipli);
};
document.body.appendChild(httpsvipul);
};
function createSelecthttp(http){
var httpvipul=document.createElement("ul");
httpvipul.id="httpvipul";
httpvipul.setAttribute("style","display:none");
for(var i=0;i<http.length;i++){
var httpvipli=document.createElement("li");
var that=this;
(function(num){
httpvipli.onclick=function(){
function Fn1(){
if(document.getElementsByTagName("video")[0]){var v_player=document.getElementsByTagName("video");for(var i=0,length=v_player.length;i<length;i++){v_player[i].pause()}}else if(document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]){var v_player=document.querySelectorAll("embed,video,object,iframe[frameborder]");for(var i=0,length=v_player.length;i<length;i++){v_player[i].parentNode.removeChild(v_player[i])}};
};
Fn2();
function Fn2(){
var b=window.location.href;
var arr=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"];
var bxjImg=Math.floor(Math.random()*arr.length);
var jxbimg="https://gitee.com/qq963540817/pt/raw/master/"+arr[bxjImg]+".jpg";
function sx(){
if(document.querySelectorAll('iframe[id="jiangxiaobai"]')[0]){document.querySelectorAll('iframe[id="jiangxiaobai"]')[0].innerHTML=''}else{};
var url=window.location.href;setInterval(function(){var newUrl=window.location.href;if(newUrl!=url){url=window.location.href;history.go(0)}});
};
function zt(){
var v_player=document.querySelectorAll('[class*=video][class*=player],[id*=video][id*=player],embed,video,object,iframe[frameborder],[src^=blob]');for(var i=0,length=v_player.length;i<length;i++){v_player[i].parentNode.removeChild(v_player[i])};
};
function youku(){
(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>')})("player");
};
function mgtv(){
(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%;"></img>')})('.video-area');
};
function qq(){
(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='')})('.site_player,#player');
};
function pptv(){
(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>')})("playerbox");
};
function sohudsj(){
(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>')})('.x-player');
};
function sohudy(){
(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<div class="top-poster" id="top-poster"><img src="'+jxbimg+'"style="width:100%;height:100%"></img></div>')})('#film_player_container');
var bb=document.createElement("style");var dd=document.createTextNode('[class*="album_title"],[id*="center_control"],[id*="center_loading"],[id*="control_bar"]{display:none!important}');bb.appendChild(dd);document.getElementsByTagName("head")[0].appendChild(bb);
};
function le(){
(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>')})('#j-player');
};
function fun(){
(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>')})('#film_player_container');
};
function lejs(){
setInterval(function(){var e=document.querySelector("#video video");e&&"about:blank"!=e.src&&(e.src="about:blank")},500),[].forEach.call(document.querySelectorAll("[data-vid]"),function(e){$(e).attr("data-newvid",$(e).data("vid")),$(e).removeAttr("data-vid"),e.onclick=function(t){var t=event||window.event||arguments.callee.caller.arguments[0],o=$(t.target).closest("[data-newvid]").data("vid"),i=window.location.href.match(/https?:\/\/.*?vplay\//)[0]+o+".html";document.getElementById("fla_box").src=localStorage.Wle_Last+i,history.pushState("","",i),$.get("https://www.le.com/service/getVideoInfo/"+o,function(e){$(".briefIntro_tit a").html(e.data.video.title),$(".briefIntro_tit a").href=i,$(".briefIntro_tit a").attr("title",e.data.video.title)}),$(e).parent().children().removeClass("cur"),$(e).addClass("cur")}});setInterval(function(){var e=document.querySelector("#video video");e&&"about:blank"!=e.src&&(e.src="about:blank")},500),[].forEach.call(document.querySelectorAll("[data-vid]"),function(e){$(e).attr("data-newvid",$(e).data("vid")),$(e).removeAttr("data-vid"),e.onclick=function(t){var t=event||window.event||arguments.callee.caller.arguments[0],o=$(t.target).closest("[data-newvid]").data("vid"),i=window.location.href.match(/https?:\/\/.*?vplay\//)[0]+o+".html";document.getElementById("fla_box").src=localStorage.Wle_Last+i,history.pushState("","",i),$.get("https://www.le.com/service/getVideoInfo/"+o,function(e){$(".briefIntro_tit a").html(e.data.video.title),$(".briefIntro_tit a").href=i,$(".briefIntro_tit a").attr("title",e.data.video.title)}),$(e).parent().children().removeClass("cur"),$(e).addClass("cur")}});
};
function qiyijs(){
(function($){var o=document.getElementById("flashbox"),i=window.location.href.match(/curid=(\d+)/);if(i){var a=document.createElement("script");a.src="https://mixer.video.iqiyi.com/jp/mixin/videos/"+i[1],a.id="vInfo_API",vInfo_API=document.getElementById("vInfo_API"),vInfo_API?(document.head.removeChild(vInfo_API),document.head.appendChild(a)):document.head.appendChild(a),a.onload=function(){o?o.src=localStorage.Wle_Last+tvInfoJs.url:vip_window.location.href=localStorage.Wle_Last+tvInfoJs.url}};var l=document.createElement("style");l.id="hide_vip_tip",l.innerHTML='[style*="visibility"][style*="visible"][style*="absolute"]{display:none!important}',document.getElementById("hide_vip_tip")||document.head.appendChild(l);var n=setInterval(function(){var e=document.querySelectorAll('.play-list-item,.select-item,.juji-list,[data-sourcelatest-elem="list"]');e.length>0&&([].forEach.call(e,function(e){e.onclick=function(e){setTimeout(function(){var e=window.location.href.match(/curid=(\d+)/)||window._qyv_info.slice(-1)[0].match(/dataid=(\d+)/)||window._qyv_info.slice(-1)[0].match(/video\/baseinfo\/(\d+)/);e&&Q.get("https://mixer.video.iqiyi.com/jp/mixin/videos/"+e[1],function(e){o?o.src=localStorage.Wle_Last+tvInfoJs.url:window.open(localStorage.Wle_Last+tvInfoJs.url,"vip_window","width=1280,height=720,scrollbars=no,toolba=no")},"script")},2e3)}}),clearInterval(n))},500)})();
};
if(b.match(/^https?:\/\/m\.youku\.com\/(?:alipay_)?video\/id_[^==]+?==\.html/i)){
sx();var c=window.location.href,a=document.location.toString().split("/id_"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);youku();window.open(http[num].url+"http://v.youku.com/v_show/id_"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.youku\.com\/(?:alipay_)?video\/id_[^\.]+?\.html/i)){
sx();var c=window.location.href,a=document.location.toString().split("://"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);youku();window.open(http[num].url+"http://m.youku.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.mgtv\.com\/b\//i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);mgtv();window.open(http[num].url+"http://www.mgtv.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/(?:.+?\/)?cover\/\w+?\/(?![^\/]+?[\?&][cv]id=)\w+?\.htm/i)){
sx();var c=window.location.href,a=document.location.toString().split("/cover/"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);qq();window.open(http[num].url+"http://v.qq.com/x/cover"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/.+?[\?&]cid=[^\/]+?&vid=(?:&|$)/i)){
sx();var c=window.location.href,a=document.location.toString().split("cid="),c=a[1].indexOf("cid=");a=a[1].substring(c);-1!=a.indexOf("&")&&(a=a.split("&")[0]);qq();window.open(http[num].url+"http://v.qq.com/x/cover/"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\/.+?[\?&]cid=[^\/]+?&vid=/i)){
sx();if(window.location.href.match(/[\?&]cid=/i)&&window.location.href.match(/&vid=/i)){var vipurl="";if(getvip('vid')==""){vipurl="http://v.qq.com/x/cover/"+getvip('cid')+".html"}else{vipurl="http://v.qq.com/x/cover/"+getvip('cid')+"/"+getvip('vid')+".html"}}function getvip(name){var reg=new RegExp("(?:^|&)"+name+"=([^&]*)(?:&|$)","i");var r=location.search.substr(1).match(reg);if(r!=null)return unescape(decodeURI(r[1]));return null};qq();window.open(http[num].url+vipurl,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.pptv\.com\/show\//i)){
sx();var c=window.location.href,a=document.location.toString().split("/show/"),c=a[1].indexOf("/show/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);pptv();window.open(http[num].url+"http://v.pptv.com/show/"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/vip\.1905\.com\/play\//i)){
zt();sx();var c=window.location.href,a=document.location.toString().split("/play/"),c=a[1].indexOf("/play/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);(function(b){document.getElementById(b)&&(document.getElementById(b).innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>')})("playBox");window.open(http[num].url+"http://vip.1905.com/play/"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\/v/i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);sohudsj();window.open(http[num].url+"http://m.tv.sohu.com"+a+".shtml","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\/album\/s/i)){
sx();var c=window.location.href,a=document.location.toString().split("/album/s"),c=a[1].indexOf("/album/s");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);sohudsj();window.open(http[num].url+"http://film.sohu.com/album/"+a+".shtml","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\/album\//i)){
sx();var c=window.location.href,a=document.location.toString().split("/album/"),c=a[1].indexOf("/album/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);sohudsj();window.open(http[num].url+"http://film.sohu.com/album/"+a+".shtml","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.film\.sohu\.com\/album\//i)){
sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);sohudy();window.open(http[num].url+"http://film.sohu.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.le\.com\/vplay_/i)){
sx();var c=window.location.href,a=document.location.toString().split("/vplay_"),c=a[1].indexOf("/vplay_");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);le();window.open(http[num].url+"http://www.le.com/ptv/vplay/"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.iqiyi\.com\/(?:v_|dianying\/)/i)){
zt();sx();var c=window.location.href,a=document.location.toString().split("//"),c=a[1].indexOf("/");a=a[1].substring(c);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('.m-video-player-wrap{top:-200px!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);window.open(http[num].url+"http://www.iqiyi.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/www\.wasu\.cn\/wap\/play\/show\/id\//i)){
zt();sx();var c=window.location.href,a=document.location.toString().split("://"),c=a[1].indexOf("/id/");a=a[1].substring(c);-1!=a&&(a=a);if(document.querySelectorAll('.vip_con.mb10')[0]){(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:210px"></img>')})('.vip_con.mb10')}else{(function(b){document.querySelectorAll(b)[0]&&(document.querySelectorAll(b)[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:210px"></img>')})('.ws_play.relative')}window.open(http[num].url+"http://www.wasu.cn/Play/show"+a+"","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/m\.fun\.tv\/mplay\//i)){
sx();var c=window.location.href,a=document.location.toString().split("?mid="),c=a[1].indexOf("?mid=");a=a[1].substring(c);-1!=a&&(a=a);fun();window.open(http[num].url+"http://www.fun.tv/vplay/g-"+a+"/","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/v\.youku\.com\/v_show\/id_/i)){
sx();var b=window.location.href,a=document.location.toString().split("/id_"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf("==")&&(a=a.split("==")[0]);if(document.querySelectorAll("#module_basic_player,#player")[0]){document.querySelectorAll("#module_basic_player,#player")[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'}window.open(http[num].url+"http://v.youku.com/v_show/id_"+a+"==.html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/[^\/]*?\.tudou.com\/v\//i)){
sx();var b=window.location.href,a=document.location.toString().split("/v/"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf("==")&&(a=a.split("==")[0]);if(document.getElementsByClassName("js-player")[0]){document.getElementsByClassName("js-player")[0].innerHTML='<class="left-side"><div class="play-video-container"><div class="js-player"><div class="td-playbox"><div class="td-player"><img src="'+jxbimg+'"style="width:100%;height:100%"></img></div></div></div></div></div>'};window.open(http[num].url+"http://v.youku.com/v_show/id_"+a+"==.html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/www\.mgtv\.com\/b\//i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('[class*="c-header-qcmenu"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("mgtv-player-wrap")){document.getElementById("mgtv-player-wrap").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+"http://www.mgtv.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/www\.le\.com\/(?:vplay_|ptv\/vplay\/)/i)){
lejs();zt();sx();if(document.getElementById("video")){document.getElementById("video").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'}setTimeout(function(){setTimeout(function(){var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);window.open(http[num].url+"http://www.le.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2)})()},500)();
}else if(b.match(/^https?:\/\/v\.qq.com\/(?:x\/cover\/|cover\/(?:u|w)\/).+?.html\?vid=\w+$/i)){
zt();sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a&&(a=a);b=document.createElement("style");var d=document.createTextNode('[class*="mask_layer"],[id*="mask_layer"],[class*="vip"][class*="popup"],[id*="vip"][id*="popup"],[style*="visibility"][style*="visible"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.querySelectorAll("#mod_player,#tenvideo_player")){document.querySelectorAll("#mod_player,#tenvideo_player")[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+"http://v.qq.com"+a,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/v\.qq.com\/(?:x\/cover\/|cover\/(?:u|w)\/)/i)){
zt();sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('[class*="mask_layer"],[id*="mask_layer"],[class*="vip"][class*="popup"],[id*="vip"][id*="popup"],[style*="visibility"][style*="visible"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.querySelectorAll("#mod_player,#tenvideo_player")){document.querySelectorAll("#mod_player,#tenvideo_player")[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+"http://v.qq.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/tv\.sohu\.com\/(?:20|v\/[^=]*?==\.)/i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);if(document.getElementsByClassName('x-player')[0]){document.getElementsByClassName('x-player')[0].innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'}else if(document.getElementById("player")){document.getElementById("player").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+"http://tv.sohu.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/film\.sohu\.com\/album\//i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('.header-nav.nav,#play-end-overlay,.J_play_end_pop.play-end-pop,.detailInfo_box>.singlePay{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("playerWrap")){document.getElementById("playerWrap").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+"http://film.sohu.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/v\.pptv\.com\/show\//i)){
sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);if(document.getElementById("pptv_playpage_box")){document.getElementById("pptv_playpage_box").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+"http://v.pptv.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/www\.fun\.tv\/vplay\/g-/i)){
sx();var a=window.location.href;if(document.getElementById("html-video-player-layout")){document.getElementById("html-video-player-layout").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};window.open(http[num].url+a,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/(?:tw|www)\.iqiyi\.com\/(?:v_|dianying\/)/i)){
qiyijs();zt();sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf(".")&&(a=a.split(".")[0]);b=document.createElement("style");var d=document.createTextNode('[class*="-player-vippay-popup"],[style*="visibility"][style*="visible"]{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementsByClassName('btn-pause')[0]){Fn1();function Fn1(){document.getElementsByClassName('btn-pause')[0].click()}Fn2();function Fn2(){if(document.getElementById("flashbox")){document.getElementById("flashbox").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'};var url=window.location.href;setInterval(function(){var newUrl=window.location.href;if(newUrl!=url){url=window.location.href;history.go(0)}})}}else{}window.open(http[num].url+"http://www.iqiyi.com"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
}else if(b.match(/^https?:\/\/www\.wasu\.cn\/Play\/show\//i)){
zt();sx();var b=window.location.href,a=document.location.toString().split("//"),b=a[1].indexOf("/");a=a[1].substring(b);-1!=a.indexOf("?")&&(a=a.split("?")[0]);b=document.createElement("style");var d=document.createTextNode('.sign_viph{display:none!important}');b.appendChild(d);document.getElementsByTagName("head")[0].appendChild(b);if(document.getElementById("flashContent")){document.getElementById("flashContent").innerHTML='<img src="'+jxbimg+'"style="width:100%;height:100%"></img>'}window.open(http[num].url+"http://www.wasu.cn"+a+".html","bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1050,height=600,left="+(screen.availWidth-1050)/2+",top="+(screen.availHeight-600)/2);
};};};})(i);
httpvipli.innerHTML=http[i].name;
httpvipul.appendChild(httpvipli);
};
document.body.appendChild(httpvipul);
};
function none(){
document.head.insertAdjacentHTML('beforeend','<style>span#juanxian,[class^="eruda-"],[id^="eruda-"],[class*="google"],[id*="google"],[class^="jjjxxxbbb"],span[id^="jiangxiaobaigongjuxiang"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}</style>')
};
function block(){
document.head.insertAdjacentHTML('beforeend','<style>span#juanxian,[class^="eruda-"],[id^="eruda-"],[class*="google"],[id*="google"],[class^="jjjxxxbbb"],[class^="jjjxxxbbb"],span[id^="jiangxiaobaigongjuxiang"]{display:block!important;max-width:none!important;max-height:none!important;overflow:auto!important;position:relative;left:auto}</style>')
};
var maomi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADyUlEQVRYhc2UbWhbVRjHf7dpZzXGBemmU2FtM1uEZssoOOhmXbsXXLPVidqydTiZzQfpGPhlH2T95GKKzDGwijgdTJlbohXUdU5aypbqHDIYKih1rg4VphtoJY1U23L8cM7NufcmWe6tRX3gcF7+z3Oe33nOuRf+R3YIuAAI4DfgA+BupTUAo0oTauycrwaOAuOWdau+B1hyo+TOIEFoi+CZMYFh5GtzaIZhTKjD5NkFQHx5GZERiJ8nVZCvUhB9WQAifkBqGYHY2yt1c95/WCcZ/0Wvm23oEx0D/F6oEocA8WZKB8V6LFVAbmJqofriAM7k1paDMBacNBOXyW7hVYD3BzTRiogaXBkCIKzm5z+Fy2PFblLb0dchYEB0HWSzcm3Hk0r0L41ya+fjEsDf9hCJiT58lQwktXPj/cp5dopYD/j9cvr5+dLJrZYegXePy3FNrVqcvAQdz6ao6tpexr7BjwCo3gDAZ6PSp2E5hOrlOFcN4MhhbwAAty0sIrTvPVaWm6zcJgHOaf3RDtk3t8rebfmtFuuBjW06HoBgOKdrgJr1ALzwnA5uCMsqmKXzUv6d3ZARcLBfXl82C6++pMR7owUAAovgriYbaaQRWtfrTT8+5R7AtOvXYPg0dLTDQBII1EN4WwEAgJVdgD5pTa2+/+/H5YOiKoIbM7+C2jvgkU1m7Cpo67f52QHq5HGtJ93ZLfv0iFoItbgCyFnFIli6GdbEof018C8uAjALLK6DqgjpEXliq6XUp0Sk0xtAw3ZYF4e6zXJu2GUNUKl6dcLciXGUv3qVNwCnCeCWcgvA/i1dNgd1wt0xeYcBA5aH7HDmYzX13TEdnre2pNEO4C+HP2bk+MMX9/iY/vYrzgxfpHWXfJrBe2DZJrj6NWR+lI5VEflytx6U8+rV8MNFrQfD0HoArn8HU9fsa3eu0MmDFZBRyVPxp5l4+xV9I74HouxPn8SLCeDKGExPgWHc2DdYARPTcvxOopvMiTfA9ghHB9n3YLRg8FzNZCqS3A4AMJs+NW8QBrJCty8omjwfYL4gzOQAv/6lksefciYvDGBC9K7daFv70wOAcMyTiSfIpI4Uci0MADBzdsgGcZNHCGvy7Im3isnFAeYDokTy0gA5iJYNniGSz+8oldwdAMDMmWF6m9fmQRhmc/wDUn2dZJPH3GztDgBgZvRsHsQUMO0oR6qvk8njKbfbugcoBFHp0D0m/wfW1ExCCBJCsOsL2W5++LF/IbHVAk05AO7bOtddyku7FLPMuRbfe2t+CvuDl/hmcO77/Mf2N6TgrX4E/h5BAAAAAElFTkSuQmCC";
var beijing="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQAQMAAAA26i3WAAAABlBMVEX5+fno6Oi2NwipAAAAM0lEQVQI12P4//8/QwMHAxw3rRBg6OBgArIbGBo8BBhA8kwMCgjMtYChSwHEVmLQYlQAABtcDYpaljWYAAAAAElFTkSuQmCC";
function createMenuhttps(){
var jxbhttps=document.createElement("div");
jxbhttps.id="jxbhttps";
jxbhttps.title="点击 此按钮 弹出 原网页解析 接口选择";
jxbhttps.setAttribute('style','display:inline-block;font-size:15px;width:35px;height:35px;line-height:35px;text-align:center;background-size:100% 100%;background-image:url('+maomi+');text-align:center;background-color:transparent;overflow:hidden;user-select:none;position:absolute;left:0;bottom:280px;border-radius:10px;zoom:.6');
jxbhttps.onclick=function(){
var httpsvipul=document.getElementById("httpsvipul");
var http=document.getElementById("jxbhttp");
httpsvipul.setAttribute('tabindex','1');
let redHide = document.getElementById('httpsvipul');
redHide.onblur=(()=>{
redHide.style.display='none';
this.style.transform="rotateZ(0deg)";
block();
});
if(httpsvipul.style.display=="none"){
httpsvipul.style.display="block";
httpvipul.style.display="none";
this.style.transform="rotateZ(-90deg)";
http.style.transform="rotateZ(0deg)";
none();
}else{
httpsvipul.style.display="none";
httpvipul.style.display="none";
this.style.transform="rotateZ(0deg)";
block();
};
};
document.body.appendChild(jxbhttps);
};
function createMenuhttp(){
var jxbhttp=document.createElement("div");
jxbhttp.id="jxbhttp";
jxbhttp.title="点击 此按钮 弹出 弹窗解析 接口选择";
jxbhttp.setAttribute('style','display:inline-block;font-size:15px;width:35px;height:35px;line-height:35px;text-align:center;background-size:100% 100%;background-image:url('+maomi+');text-align:center;background-color:transparent;overflow:hidden;user-select:none;position:absolute;right:0;bottom:280px;border-radius:10px;zoom:.6');
jxbhttp.onclick=function(){
var httpvipul=document.getElementById("httpvipul");
var https=document.getElementById("jxbhttps");
if(httpvipul.style.display=="none"){
httpvipul.style.display="block";
httpsvipul.style.display="none";
this.style.transform="rotateZ(90deg)";
https.style.transform="rotateZ(0deg)";
none();
}else{
httpvipul.style.display="none";
httpsvipul.style.display="none";
this.style.transform="rotateZ(0deg)";
block();
};
};
document.body.appendChild(jxbhttp);
};
createSelecthttps(https);
createSelecthttp(http);
createMenuhttps();
createMenuhttp();
function getRandomColor(){var c='#';var cArray=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];for(var i=0;i<6;i++){var cIndex=Math.round(Math.random()*15);c+=cArray[cIndex]}return c};
document.head.insertAdjacentHTML('beforeend','<style>#httpsvipul>li>span,#httpvipul>li>span{display:flex}ul[id^="http"][id$="vipul"]::-webkit-resizer,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-corner{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-track{border-left-color:transparent!important;background:transparent!important;-webkit-box-shadow:none!important;border:none!important;outline:none!important}ul[id^="http"][id$="vipul"]::-webkit-full-screen{visibility:visible;max-width:none}ul[id^="http"][id$="vipul"]::-webkit-scrollbar{width:10px;height:10px}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-track-piece{-webkit-border-radius:10px;background-color:transparent!important}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-thumb:vertical{height:10px;-webkit-border-radius:10px;background-color:#d0aba8}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-thumb:horizontal{width:10px;-webkit-border-radius:10px;background-color:#d1ac96}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-track-piece:no-button,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-thumb{border-radius:10px;background-color:transparent}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-thumb:hover{background-color:red}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-thumb:anniubianse{background-color:#4caf50}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button:horizontal,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button:vertical{width:10px}ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button:horizontal:end:increment,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button:horizontal:start:decrement,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button:vertical:end:increment,ul[id^="http"][id$="vipul"]::-webkit-scrollbar-button:vertical:start:decrement{background-color:transparent!important}</style>')
if(/(?:Android|Mobile\s*?Safari|iPhone|iPad|Symbian|Linux x86_64\s*?\))/i.test(navigator.userAgent)){
document.head.insertAdjacentHTML('beforeend','<style>div#jxbhttps,div#jxbhttp{top:0;z-index:999999}ul#httpsvipul{margin:0;padding:0;position:absolute;z-index:999;top:calc(45vh);transform:translate(0px,calc(5vh));border-radius:1.26vw;text-align:center;height:42vh;overflow:scroll;animation-duration:.1s;animation-delay:.1s}#httpsvipul>li{margin:0 1px 0 1px;border-radius:5px;cursor:pointer;float:left;line-height:25px;overflow:hidden;text-overflow:ellipsis;color:black;text-transform:uppercase;text-decoration:none;vertical-align:bottom;position:relative;font-family:Arial;font-weight:700;border:1px outset #ccc;padding:0 5px;text-align:center;box-shadow:1px 1px 4px #444,inset -2px -2px 4px #fff,inset 2px 2px 4px #aaa;list-style:none;letter-spacing:0;z-index:999;background-image:url('+beijing+')}#httpvipul{display:none;margin:0;padding:0;position:absolute;z-index:999;top:calc(55vh);transform:translate(0px,calc(5vh));border-radius:1.26vw;text-align:center;border:0;outline:0}#httpvipul>li{border:dashed 1px #006400;margin:5px 5px 5px 5px;display:inline-table;border-radius:20px;cursor:pointer;line-height:22.5px;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;text-decoration:none;vertical-align:bottom;position:relative;font-weight:700;padding:0 5px;text-align:center;list-style:none;letter-spacing:0;color:#508216!important;background-color:#9de051;box-shadow:inset rgba(255,254,255,.6) 0 .3em .3em,inset rgba(0,0,0,.15) 0 -0.1em .3em,#6aad1e 0 .1em 3px,#508216 0 .3em 1px,rgba(0,0,0,.2) 0 .5em 5px;z-index:999}#httpsvipul>li>span,#httpvipul>li>span{display:flex}#httpsvipul>li>span>a5,#httpvipul>li>span>a5{display:none}#httpvipul>li>span>a2{color:#9C27B0!important}#httpvipul>li>span>a4{color:#2196F3!important}#httpsvipul>li>span>a1,#httpvipul>li>span>a1{font-size:10px!important}#httpsvipul>li:hover,#httpvipul>li:hover{box-shadow:0 0 4px 4px rgba(130,190,10,0.6)!important;-moz-transition-property:box-shadow;-moz-transition-duration:.31s;}#httpvipul>li:nth-of-type(1),#httpvipul>li:nth-of-type(2),#httpvipul>li:nth-of-type(3),#httpvipul>li:nth-of-type(4){height:40px;line-height:40px}#httpvipul>li:nth-child(5),#httpvipul>li:nth-child(6),#httpvipul>li:nth-child(8),#httpvipul>li:nth-child(10),#httpvipul>li:nth-child(11),#httpvipul>li:nth-child(12),#httpvipul>li:nth-child(13){display:none!important}</style>')
}else{
document.head.insertAdjacentHTML('beforeend','<style>#httpsvipul>li{margin:1px 2px 2px 1px}#httpvipul>li{margin:1px 2px 2px 1px}div#jxbhttps,div#jxbhttp{top:123px!important;z-index:1234!important}ul#httpsvipul{width:678px;margin:0;padding:0;position:absolute;z-index:999999;top:111px;/*height:65vh;*/overflow:scroll}ul#httpvipul{width:432px;margin:0;padding:0;position:absolute;z-index:999999;top:111px;/*height:75vh;*/overflow:scroll}#httpsvipul>li,#httpvipul>li{zoom:0.95;color:black;display:flex;border-radius:20px;cursor:pointer;float:left;width:100pt;height:25px;line-height:25px;padding:0;font-size:17px;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;text-align:center;text-decoration:none;vertical-align:baseline;position:relative;box-shadow:1px 1px 4px #444,inset -2px -2px 4px #fff,inset 2px 2px 4px #aaa;background-image:url('+beijing+')}.anniubianse{border-radius:20px;background-color:'+getRandomColor()+'}#httpsvipul>li:hover,#httpvipul>li:hover{background-image:-webkit-linear-gradient(bottom,yellow 50%,yellow 50%);box-shadow:0 0 4px 4px rgba(130,190,10,0.6)!important;-moz-transition-property:box-shadow;-moz-transition-duration:.31s;}#httpvipul{display:none}div#jxbhttp{left:50px}</style>')
}
setInterval(()=>{
var anniubianse=document.querySelectorAll("ul#httpsvipul>li>span,ul#httpvipul>li>span"),l=anniubianse.length,ffll=document.querySelectorAll('ul#httpvipul>li:nth-of-type(1)>span>a1[style="color:blue;zoom:1.5"],ul#httpvipul>li:nth-of-type(2)>span>a1[style="color:blue;zoom:1.5"]'),llff=document.querySelectorAll('ul#httpvipul>li:nth-of-type(3)>span>a1[style="color:blue;zoom:1.5"],ul#httpvipul>li:nth-of-type(4)>span>a1[style="color:blue;zoom:1.5"]');if(ffll[1]||ffll[2]){}else{document.head.insertAdjacentHTML('beforeend',`<style>div#jxbhttps,div#jxbhttp,ul#httpsvipul,ul#httpvipul{display:none!important}</style>`);}if(llff[1]||llff[2]){}else{document.head.insertAdjacentHTML('beforeend',`<style>div#jxbhttps,div#jxbhttp,ul#httpsvipul,ul#httpvipul{display:none!important}</style>`);
}for(var i=0;i<l;i++){anniubianse[i].onclick=function(){for(var j=0;j<l;j++){if(this==anniubianse[j]){this.className="anniubianse"}else{anniubianse[j].className=""}}}}},2345);var b=window.location.href,style=document.createElement("style");style.type="text/css";document.querySelector('#jxbhttps').appendChild(style);
if(b.match(/^https?:\/\/m\.pptv\.com\//i)){
style.innerHTML='div#jxbhttps,div#jxbhttp{margin-top:-12%!important}ul#httpsvipul{transform:translate(0,-5vh)!important}';
}else if(b.match(/^https?:\/\/m\.mgtv\.com\//i)){
style.innerHTML='ul#httpsvipul{height:34vh!important;top:calc(46vh)!important;transform:translate(0,calc(15vh))!important}ul#httpsvipul>li{line-height:20px!important}';
}else if(b.match(/^https?:\/\/www\.wasu\.cn\/wap\/play\/show\/id\//i)){
style.innerHTML='ul#httpsvipul{top:calc(45vh)!important;transform:translate(0,calc(15vh))!important}ul#httpsvipul>li{line-height:20px!important}';
}else if(b.match(/^https?:\/\/(?:3g|m)\.v\.qq\.com\//i)){
style.innerHTML='[class*="open"][class*="banner"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}';
}else if(b.match(/^https?:\/\/m\.tv\.sohu\.com\//i)){
style.innerHTML='[class^="app-view-box "]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}';
}})();}else{return false;}
}(document);