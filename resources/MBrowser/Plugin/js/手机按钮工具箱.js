// ==UserScript== 
// @name   江小白手机按钮工具箱
// @description  脚本功能目前如下 ：1: 表情解析 2：彩云翻译 3：谷歌翻译 4：万能网页 5：网页编辑 6：网页调试
// @match   *://*/*
// @run-at   document-end
// ==/UserScript==



'use strict';
(function(){try{
///* ! ------------------------------------------------------------------------------------------------------------------------------------------------------ */
if(document.onreadystatechange){shoujianniugongjuxiang();}
else if(document.childNodes){shoujianniugongjuxiang();}
else if(document.readyState){shoujianniugongjuxiang();}
else{shoujianniugongjuxiang();}
///* ! ------------------------------------------------------------------------------------------------------------------------------------------------------ */
function shoujianniugongjuxiang(){
if(!(location.href.match(/^https?:\/\/wn\.run\//i)||location.href.match(/^https?:\/\/.+?(?:(?:\.|\$|\?|\#)(?:md5|ts|m(?:p(?:2|3|4)|4a|kv|ov|3u8)|a(?:sf|vi)|w(?:mv|av|ma)|og(?:g|v)|a(?:c|a)c|(?:f|h)(?:l|4)v)(?:\?\w+?=|$)|[#=\?]\w+?\Whttp.+?\.(?:youku|mgtv|sohu|pptv|wasu|1905|iqiyi|le|tudou|qq|yinyuetai|bilibili|fun)\.)/i))){
///* ! ----------------------------------------------------------以下代码 禁止在 iframe框架内执行----------------------------------------------------------- */
if(self!=top&&get_setting_funs_value('tmsetting_iframe')=="checked"){}else{var div=document.createElement("div");div.innerHTML='<div class="jjjxxxbbb"><ul><li><a id="jxbanyd"  type="button" style="color:black!important;">😘</a><ul style="left:15vw!important;top:68vh!important;position:fixed;z-index:999999;font-size:4vw!important;width:10vw!important"><li><a id="jjjxxxbbb-cy-jjjxxxbbb" type="button" style="color:black!important;">彩💥云</a></li><li><a id="jjjxxxbbb-gu-jjjxxxbbb" type="button" style="color:black!important;">谷🌓歌</a></li><li><a id="jjjxxxbbb-wan-jjjxxxbbb" type="button" style="color:black!important;">万🧰能</a></li><li><a id="jjjxxxbbb-bian-jjjxxxbbb" type="button" style="color:black!important;">编💻辑</a></li><li><a id="jjjxxxbbb-tiao-jjjxxxbbb" type="button" style="color:black!important;">调🛠试</a></li></ul></li></ul></div>';document.body.appendChild(div);var style=document.createElement("style");style.type="text/css";style.innerHTML=".jjjxxxbbb{padding:0!important;margin:50px!important;z-index:999999!important;position:fixed!important;top:calc(100vh/1.125)!important;left:-45px!important;font-size:30px!important;text-decoration:none!important;border:none!important;outline:none!important;background-color:transparent!important}"+".jjjxxxbbb ul{padding:0!important;margin:0!important;list-style-type:none!important}"+".jjjxxxbbb ul li{float:right!important;position:relative!important;list-style-type:none!important}"+".jjjxxxbbb ul li a{display:block!important;height:30px!important;line-height:30px!important;font-size:20px!important;width:85px!important;border-radius:10px!important;cursor:pointer!important;text-align:center!important;border:1.5px outset buttonface!important;text-decoration:none!important;vertical-align:baseline!important;font-family:Georgia!important;margin:5px 0 5px 0!important;border-radius:10px!important;BORDER-LEFT:#000 5px solid;MARGIN-RIGHT:auto!important;background-color:#FFFFFF!important;box-shadow:inset rgba(255,255,255,.0) 0 .3em .3em,inset rgba(255,255,255,0) 0 -0.1em .3em,#414654 0 .1em 3px,#414654 0 .3em 1px,rgba(255,255,255,0) 0 .5em 5px!important;transition-property:color,text-shadow!important;transition-duration:423ms!important;transition-timing-function:ease!important}"+".jjjxxxbbb ul li a:visited{display:block;height:30px;background:#c9c9a7;line-height:30px;font-size:20px;width:85px;border-radius:10px;cursor:pointer;text-align:center;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;font-family:Georgia;margin:5px 0 5px 0}"+".jjjxxxbbb ul li a:hover{background-color:#8BC34A}"+".jjjxxxbbb ul li ul{display:none}"+".jjjxxxbbb ul li:hover ul{display:block;position:absolute;top:30px;right:0;width:105px}"+".jjjxxxbbb ul li:hover ul li a:hover{background:#4CAF50}"+"a#jxbanyd{width:8vw!important;height:8vw!important;text-align:center!important;position:fixed!important;z-index:999999!important;border-radius:10vw!important;display:block!important;opacity:.5;bottom:2vh!important}"+"a#jxbanyd:hover{opacity:1}";document.querySelector(".jjjxxxbbb").appendChild(style);
///* ! ---------------------------------------------------------------------------------------------------------------------------------------------------- */
if(document.querySelectorAll('[class^="jjjxxxbbb"]')[0]){document.head.insertAdjacentHTML('beforeend','<style>span[id="vip"][style^="font-size"],span[id="oovip"][style^="font-size"]{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}.jjxbb{left:50px!important}</style>')}else{};
///* ! -------------------------------------------------------------------视频点击------------------------------------------------------------------------- */
document.querySelector(".jjjxxxbbb a#jxbanyd").addEventListener("click",function() {
if(location.href.match(/^https?:\/\/(?:(?:tw|www|m)\.iqiyi\.com\/v_|v\.youku\.com\/v_show\/id_|m\.youku\.com\/(?:alipay_)?video\/id_|v\.qq\.com\/(?:x\/cover\/|cover\/(?:u|w)\/|x\/page\/)|(?:3g|m)\.v\.qq\.com\/(?:.+?[\?&]cid=|(?!.+?[\?&]cid=)(?:.+?\/channel\/|index\.html|$)|(?:.+?\/)?cover\/\w+?\/(?:\w+?\.html\?vid=\w+$|(?![^\/]+?[\?&][cv]id=)\w+?\.htm))|(?:www|m)\.mgtv\.com\/b\/|(?:www|m)\.le\.com\/(?:vplay_|ptv\/vplay\/)|(?:m\.)?(?:tv|film)\.sohu\.com\/(?:(?:20|v[^\.]+?\.s?html|v\/[^=]*?==\.)|album\/)|(?:v|m)\.pptv\.com\/show\/|www\.wasu\.cn\/(?:Play\/show\/|wap\/play\/)|vip\.1905\.com\/play\/|m\.douban\.com|www\.fun\.tv\/vplay\/g-|m\.fun\.tv\/mplay\/|video\.tudou\.com\/v\/)/i)) {

// 用户自定义 VIP视频解析接口 → 后面自动补全要解析的网址
var CUSTOM_VIP_URLS = ``;

// 搜索源 → ** 表示搜索时的关键词
var SEARCH_SOURCES = `

  爱奇艺  https://m.iqiyi.com/search.html?source=default&key=**  https://so.iqiyi.com/so/q_**

  腾讯  https://m.v.qq.com/search.html?act=0&keyWord=**   https://v.qq.com/x/search/?q=**

  哔哩哔哩  https://m.bilibili.com/search.html?keyword=**  https://search.bilibili.com/all?keyword=**

  优酷  https://www.soku.com/m/y/video?q=**  https://so.youku.com/search_video/q_**

  搜狐  https://m.tv.sohu.com/upload/h5/m/mso.html?key=**  https://so.tv.sohu.com/mts?wd=**

  芒果  https://m.mgtv.com/so/?k=**  https://so.mgtv.com/so/k-**

  乐视  http://m.le.com/search?wd=**  http://so.le.com/s?wd=**

  奈菲  https://www.nfmovies.com/search.php?page=1&searchword=**

  残月  http://ys.23yue.cn/seacher-**.html

  云播  https://m.yunbtv.com/vodsearch/-------------.html?wd=**  https://www.yunbtv.com/vodsearch/-------------.html?wd=**

  飞极速  http://m.feijisu8.com/search/**  http://feijisu8.com/search/**

  独播  https://www.duboku.net/vodsearch/-------------.html?wd=**

  拾伍  https://www.shiwutv.com/vodsearch/-------------.html?wd=**

  大全  http://01th.net/search/?wd=**

  樱花  http://m.yhdm.tv/search/**/  http://www.yhdm.tv/search/**/

  1090  https://1090ys.com/?c=search&sort=addtime&order=desc&page=1&wd=**

  APP  https://app.movie/index.php/vod/search.html?wd=**

  八兔  http://www.8tutv.com/search/?category=0&q=**

  Vipku  http://www.2n65.cn/index.php/vod/search.html?wd=**

  影迷  https://www.yingmiwo.com/vodsearch.html?wd=**

`;

/**
 * VIP解析 + 换站搜索 + 网站净化
 *
 * name: 用作说明
 * match: 匹配网址，可以是正则，也可以是字符串
 * hide: 要净化隐藏掉的css选择器
 * css: 注入css
 * jump: 在搜索页要添加 换站搜索 的css选择器
 * keyword: 在搜索页获取标题，用于 换站搜索 的搜索词
 * vip: 在播放页要添加 Vip解析列表 的css选择器
 * title: 在播放页获取标题，用于 换站搜索 的搜索词
 * fixUrl: 解析时对播放网址进行变换，比如将手机端播放网址变成电脑端播放网址
 */
var BETTER_ADDONS = [
  // 正版源
  {
    name: 'bilibili·搜索',
    match: /bilibili.com\/search|search.bilibili.com/,
    jump: '#all-list | append, .index__board__src-search-board-'
  },
  {
    name: 'bilibili - m',
    match: /m\.bilibili\.com/,
    sign: '.mg-footer-copyright',
    hide:
      '.index__openAppBtn__src-commonComponent-topArea-, .index__container__src-commonComponent-bottomOpenApp-, .bili-app, .recom-wrapper, .b-footer, .open-app-bar, .open-app-float, .more-review-wrapper'
  },
  {
    name: '腾讯·搜索',
    match: /v.qq.com\/(\w+\/)?search/,
    jump: '#result, .wrapper_main > .mod_pages',
    sign: '.copyright',
    hide: '.tvp_app_bar'
  },
  {
    name: '腾讯·播放页',
    match: /v\.qq\.com\/(cover|play|x\/cover|x\/page|x\/play|x\/m\/cover|x\/m\/page|x\/m\/play)/,
    vip: '#vip_title, .U_box_bg_a, .player_headline, .mod_video_info',
    title: '.mod_video_info .video_title, ._main_title',
    fixUrl(url) {
      if (url.includes('cid=')) {
        var cid = url.match(/cid=(\w+)/)[1];
        var vid = url.match(/vid=(\w+)/);
        vid = vid ? '/' + vid[1] : '';
        return `https://v.qq.com/x/cover/${cid}${vid}.html`;
      }
      return url;
    },
    hide:
      '.mod_source, .video_function, .mod_promotion, #vip_privilege, #vip_activity, .U_bg_b, .btn_open_v, .btn_openapp, #vip_header, .btn_user_hd, .mod_sideslip_privileges, .mod_game_rec, .mod_source, .mod_promotion, .mod_sideslip_h, .btn_open, .btn_pay, .mod_box_lastview, .mod_vip_popup, .mod_vip_popup + .mask_layer',
    css: `
body, #vip_title {
  padding-bottom: 0 !important;
}

.mod_episodes_numbers.is-vip .item {
  width: auto;
  padding: 0 1em;
}

.U_html_bg .container {
  padding-bottom: 30px;
}

.mod_play .mod_player_viptips .btn_try {
  left: 30%;
}`
  },
  {
    name: '爱奇艺·搜索',
    match: /m.iqiyi.com\/search|so.iqiyi.com/,
    jump: '-.m-box, .search-con-page',
    sign: '.m-footer',
    hide: '.btn-ticket, .btn-yuyue, .btn-download, .m-iqyDown'
  },
  {
    name: '爱奇艺·播放页',
    match: /\.iqiyi\.com\/(a_|v_|w_|adv)/,
    vip: 'div[name="m-videoInfo"], #block-C',
    title: '#widget-videotitle, .c-title-link, .player-title a',
    sign: '.m-footer',
    hide:
      '.m-iqyDown, .header-login + div, .m-video-action, div[name="m-vipRights"], div[name="m-extendBar"], .m-iqylink-diversion, .m-iqylink-guide, .c-openVip, .c-score-btn, .m-videoUser-spacing, .m-pp-entrance, .m-hotWords-bottom, div[template-type="ALBUM"] .m-player-tip',
    css: `
.page_play {
  padding-bottom: 0;
}

div[name="m-videoInfo"] {
  padding-top: 1em;
}

.m-box-items .oo-album-item {
  border-radius: .05rem;
  background-color: #e9ecef;
  color: #495057;
  padding: .5em 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: .25em;
  font-weight: bold;
}

.m-video-player #oo-player {
  padding-top: 56.25%;
  top: 50%;
  transform: translateY(-50%);
}
`
  },
  {
    name: '优酷·搜索',
    match: /soku.com\/m.+q=|so.youku.com\/search_video/,
    jump: '#bpmodule-main, .yk_result'
  },
  {
    name: '优酷·播放页',
    match: /m\.youku\.com\/a|m\.youku\.com\/v|v\.youku\.com\/v_/,
    vip: '.h5-detail-info, .player-title',
    title: '.player-title .subtitle a, .module-name',
    sign: '.copyright',
    hide:
      '.h5-detail-guide, .h5-detail-ad, .brief-btm, .smartBannerBtn, .cmt-user-action, #right-title-ad-banner',
    css: `
#bpmodule-playpage-lefttitle {
  height: auto !important;
}`
  },
  {
    name: '芒果·搜索',
    match: /m.mgtv.com\/so\/|so.mgtv.com\/so/,
    jump: '#paginator, .result-box .media',
    keyword: /k[-=]([^&\?\/\.]+)/
  },
  {
    name: '芒果·播放页',
    match: /\.mgtv\.com\/(b|l)\//,
    vip: ['.xuanji | before', '.v-panel-box'],
    sign: '.mg-footer-copyright',
    hide:
      '.ad-banner, .video-area-bar, .video-error .btn, .m-vip-list, .m-vip-list + div:not([class]), .toapp, .video-comment .ft, .mg-app-swip'
  },
  {
    name: '搜狐·搜索',
    match: /m.tv.sohu.com.+key=|so.tv.sohu.com.+wd=/,
    jump: '.ssMore | before, .select-container | before'
  },
  {
    name: '搜狐·播放页',
    match: /film\.sohu\.com\/album\/|tv\.sohu\.com\/v/,
    vip: '.title-wrap, .videoInfo',
    sign: '.links',
    hide:
      '.actv-banner, .btn-xz-app, .twinfo_iconwrap, .btn-comment-app, #ad_banner, .advertise, .main-ad-view-box, .foot.sohu-swiper, .app-star-vbox, .app-guess-vbox, .main-rec-view-box, .app-qianfan-box, .comment-empty-bg, .copyinfo, .ph-vbox',
    css: `
.comment-empty-txt {
  margin-bottom: 0;
}

.app-view-box + footer {
  padding: 0;
  opacity: 0.5;
}`
  },
  {
    name: '乐视·搜索',
    match: /m.le.com\/search|so.le.com\/s/,
    jump: '.column_tit | before, .Relate | before'
  },
  {
    name: '乐视·播放页',
    match: /\.le\.com\/(ptv\/vplay\/|vplay_)/,
    vip: '.introduction_box, .briefIntro_left .info_list',
    hide: '.gamePromotion'
  },
  {
    name: '咪咕·播放页',
    match: /miguvideo\.com\/.+\/detail\.html/,
    vip: '.playerFooter, .programgroup',
    hide: '.group-item[name*="广告"], .openClient'
  },
  {
    name: 'PPTV·搜索',
    match: /sou.pptv.com\/s_video.+kw=|msou.pptv.com\/s_video\/.+keyword=/,
    jump: '.pagination, .zhengpian-box | append'
  },
  {
    name: 'PPTV·播放页',
    match: /(v|m)\.pptv\.com\/show\//,
    vip: ['.m .cf', '.vod-tit'],
    hide:
      '.w-video-vastad, #video-download-game, div[class*="openapp"], div[class*="side-adv"], div[id*="afp_"], div[id*="-afp"], iframe[src*="/game/"], .afpPosition, .download-iconbar'
  },
  {
    name: '华数·搜索',
    match: /wasu\.cn\/.+Search\/.+k=/,
    jump: '#topVod'
  },
  {
    name: '华数·播放页',
    match: /wasu\.cn\/.*play\/show\//,
    vip: '.movie_title',
    hide: 'div[id*="BAIDU"], .player_menu_con, body > div[style*="fixed"]'
  },
  {
    name: '1905·搜索',
    match: /\.1905\.com\/(Search|search)/,
    jump: '.pagination, #new_page'
  },
  {
    name: '1905·播放页',
    match: /1905.com\/play/,
    vip: '#movie_info, .player-nav',
    hide:
      '#app_store, .openMembershipBtn, div[id] > iframe, .pv2-advertisement, .open-app',
    css: `
#movie_info {
  margin-top: 1em;
}`
  },

  // 优质源
  {
    name: '奈菲·搜索',
    match: 'nfmovies.com/search',
    jump: '.hy-page',
    keyword($) {
      return $('.hy-video-head .text-color')
        .eq(1)
        .text()
        .replace(/^“|”$/g, '');
    }
  },
  {
    name: '奈菲',
    match: /nfmovies\.com/,
    hide: 'img[src*="tu/ad"], .clearfix a[onclick] img',
    css: `
#adleft, #adright {
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}`
  },
  {
    name: '飞极速·搜索',
    match: 'feijisu8.com/search',
    jump: '#result'
  },
  {
    name: '飞极速',
    match: /feijisu8\.com/,
    hide: '.index-top ~ div, .v-top ~ div[id], .footer ~ div, .footer ~ brde'
  },
  {
    name: '樱花动漫·搜索',
    match: 'yhdm.tv/search',
    jump: '.footer | before, .foot | before'
  },
  {
    name: '樱花动漫',
    match: /yhdm\.tv/,
    hide:
      '.footer ~ div, a[href*="elfdoll.cn"], .head + .area ~ div:not([class])'
  },
  {
    name: '1090影视·搜索',
    match: /1090ys.com\/.+c=search/,
    jump: '.stui-page, .stui-pannel'
  },
  {
    name: '1090影视',
    match: /1090ys\.com/,
    hide: '.container ~ *[id]'
  },
  {
    name: '云播·搜索',
    match: 'yunbtv.com/vodsearch',
    jump: '.pager',
    keyword: '.breadcrumb font'
  },
  {
    name: '残月·搜索',
    match: 'ys.23yue.cn/seacher',
    jump: '.stui-pannel_bd > .stui-vodlist__media'
  },
  {
    name: '独播库·搜索',
    match: 'duboku.net/vodsearch',
    jump: '.myui-panel_bd > .myui-vodlist__media'
  },
  {
    name: '拾伍·搜索',
    match: 'shiwutv.com/vodsearch',
    jump: '.stui-page, .stui-pannel'
  },
  {
    name: '零一·搜索',
    match: '01th.net/search',
    jump: '.stui-page, .stui-pannel'
  },
  {
    name: 'APP·搜索',
    match: 'app.movie/index.php/vod/search.html',
    jump: '.stui-page, .stui-pannel'
  },
  {
    name: '八兔·搜索',
    match: '8tutv.com/search',
    jump: '.ys'
  },
  {
    name: 'Vipku·搜索',
    match: /2n65.cn\/.+\/search/,
    jump: '.left_row | append'
  },
  {
    name: '影迷窝·搜索',
    match: 'yingmiwo.com/vodsearch',
    jump: '.left_row | append'
  },
  {
    name: '影迷窝',
    match: /yingmiwo\.com/,
    hide: '#bottom_ads, .ads_box'
  }
];

// 搜索时标题净化，比如去掉 第N季
var PurifyKeywordRegex = /\s+第.{1,3}季/;

// 从搜索网址匹配搜索词
var CommonSearchKeywordRegex = /(wd|key|keyword|keyWord|kw|q)=([^&\?\/\.-]+)|(search\/|seacher-|q_)([^&\?\/\.-]+)/;

// 通用净化样式
var PurifyStyle = `
display: none !important;
visibility: hidden !important;
position: absolute !important;
left: -9999px !important;
opacity: 0 !important;
pointer-events: none !important;
z-index: -9999 !important;`;

// 支持电脑端原网页解析的解析
var InnerVipUrlRegex = /(okjx|071811|sjzvip|380k)\.(com|cn|cc|vip)/;

// 支持手机端原网页解析的解析
var MInnerVipUrlRegex = /(sjzvip)\.(com|cn|cc|vip)/;

// 支持原网页解析的正版网站
var InnerUrlRegex = /v\.qq\.com|\.(iqiyi|youku|mgtv)\.com/;

// 正版网站原网页解析时替换的播放器选择器
var PlayerSelector =
  '#iframaWrapper, #mgtv-player-wrap, .g-play .video-area, #mod_player, #player, .m-video-player, .site_player';

!function(){var n="20.1.14",t=!!window.GM;if(!(window.top!==window.self||t&&location.href.includes("doubleclick.net"))){var e="(o˘◡˘o) oo.movie",i="oo-movie",o=document.getElementsByTagName("html")[0];if(o.getAttribute(i)!==e){var r=!1,a=window.VIP_URLS||CUSTOM_VIP_URLS||"";SEARCH_SOURCES=window.SEARCH_SOURCES||SEARCH_SOURCES;var s=function(){var n,t,e,i,o,r,a=[],s=a.concat,c=a.filter,l=a.slice,u=window.document,p={},f={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},d=/^\s*<(\w+|!)[^>]*>/,m=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,b=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=u.createElement("table"),w=u.createElement("tr"),j={tr:u.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:w,th:w,"*":u.createElement("div")},E=/complete|loaded|interactive/,k=/^[\w-]*$/,_={},S=_.toString,C={},T=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},N=Array.isArray||function(n){return n instanceof Array};function $(n){return null==n?String(n):_[S.call(n)]||"object"}function O(n){return"function"==$(n)}function P(n){return null!=n&&n==n.window}function F(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE}function R(n){return"object"==$(n)}function D(n){return R(n)&&!P(n)&&Object.getPrototypeOf(n)==Object.prototype}function z(n){var t=!!n&&"length"in n&&n.length,i=e.type(n);return"function"!=i&&!P(n)&&("array"==i||0===t||"number"==typeof t&&t>0&&t-1 in n)}function I(n){return n.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(n){return n in f?f[n]:f[n]=new RegExp("(^|\\s)"+n+"(\\s|$)")}function L(n,t){return"number"!=typeof t||h[I(n)]?t:t+"px"}function U(n){return"children"in n?l.call(n.children):e.map(n.childNodes,function(n){if(1==n.nodeType)return n})}function M(n,t){var e,i=n?n.length:0;for(e=0;e<i;e++)this[e]=n[e];this.length=i,this.selector=t||""}function V(n,t){return null==t?e(n):e(n).filter(t)}function B(n,t,e,i){return O(t)?t.call(n,e,i):t}function H(n,t,e){null==e?n.removeAttribute(t):n.setAttribute(t,e)}function Z(t,e){var i=t.className||"",o=i&&i.baseVal!==n;if(e===n)return o?i.baseVal:i;o?i.baseVal=e:t.className=e}function X(n){try{return n?"true"==n||"false"!=n&&("null"==n?null:+n+""==n?+n:/^[\[\{]/.test(n)?e.parseJSON(n):n):n}catch(t){return n}}return C.matches=function(n,t){if(!t||!n||1!==n.nodeType)return!1;var e=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.matchesSelector;if(e)return e.call(n,t);var i,o=n.parentNode,r=!o;return r&&(o=T).appendChild(n),i=~C.qsa(o,t).indexOf(n),r&&T.removeChild(n),i},o=function(n){return n.replace(/-+(.)?/g,function(n,t){return t?t.toUpperCase():""})},r=function(n){return c.call(n,function(t,e){return n.indexOf(t)==e})},C.fragment=function(t,i,o){var r,a,s;return m.test(t)&&(r=e(u.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(v,"<$1></$2>")),i===n&&(i=d.test(t)&&RegExp.$1),i in j||(i="*"),(s=j[i]).innerHTML=""+t,r=e.each(l.call(s.childNodes),function(){s.removeChild(this)})),D(o)&&(a=e(r),e.each(o,function(n,t){y.indexOf(n)>-1?a[n](t):a.attr(n,t)})),r},C.Z=function(n,t){return new M(n,t)},C.isZ=function(n){return n instanceof C.Z},C.init=function(t,i){var o,r;if(!t)return C.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&d.test(t))o=C.fragment(t,RegExp.$1,i),t=null;else{if(i!==n)return e(i).find(t);o=C.qsa(u,t)}else{if(O(t))return e(u).ready(t);if(C.isZ(t))return t;if(N(t))r=t,o=c.call(r,function(n){return null!=n});else if(R(t))o=[t],t=null;else if(d.test(t))o=C.fragment(t.trim(),RegExp.$1,i),t=null;else{if(i!==n)return e(i).find(t);o=C.qsa(u,t)}}return C.Z(o,t)},(e=function(n,t){return C.init(n,t)}).extend=function(e){var i,o=l.call(arguments,1);return"boolean"==typeof e&&(i=e,e=o.shift()),o.forEach(function(o){!function e(i,o,r){for(t in o)r&&(D(o[t])||N(o[t]))?(D(o[t])&&!D(i[t])&&(i[t]={}),N(o[t])&&!N(i[t])&&(i[t]=[]),e(i[t],o[t],r)):o[t]!==n&&(i[t]=o[t])}(e,o,i)}),e},C.qsa=function(n,t){var e,i="#"==t[0],o=!i&&"."==t[0],r=i||o?t.slice(1):t,a=k.test(r);return n.getElementById&&a&&i?(e=n.getElementById(r))?[e]:[]:1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType?[]:l.call(a&&!i&&n.getElementsByClassName?o?n.getElementsByClassName(r):n.getElementsByTagName(t):n.querySelectorAll(t))},e.contains=u.documentElement.contains?function(n,t){return n!==t&&n.contains(t)}:function(n,t){for(;t&&(t=t.parentNode);)if(t===n)return!0;return!1},e.type=$,e.isFunction=O,e.isWindow=P,e.isArray=N,e.isPlainObject=D,e.isEmptyObject=function(n){var t;for(t in n)return!1;return!0},e.isNumeric=function(n){var t=Number(n),e=typeof n;return null!=n&&"boolean"!=e&&("string"!=e||n.length)&&!isNaN(t)&&isFinite(t)||!1},e.inArray=function(n,t,e){return a.indexOf.call(t,n,e)},e.camelCase=o,e.trim=function(n){return null==n?"":String.prototype.trim.call(n)},e.uuid=0,e.support={},e.expr={},e.noop=function(){},e.map=function(n,t){var i,o,r,a,s=[];if(z(n))for(o=0;o<n.length;o++)null!=(i=t(n[o],o))&&s.push(i);else for(r in n)null!=(i=t(n[r],r))&&s.push(i);return(a=s).length>0?e.fn.concat.apply([],a):a},e.each=function(n,t){var e,i;if(z(n)){for(e=0;e<n.length;e++)if(!1===t.call(n[e],e,n[e]))return n}else for(i in n)if(!1===t.call(n[i],i,n[i]))return n;return n},e.grep=function(n,t){return c.call(n,t)},window.JSON&&(e.parseJSON=JSON.parse),e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,t){_["[object "+t+"]"]=t.toLowerCase()}),e.fn={constructor:C.Z,length:0,forEach:a.forEach,reduce:a.reduce,push:a.push,sort:a.sort,splice:a.splice,indexOf:a.indexOf,concat:function(){var n,t,e=[];for(n=0;n<arguments.length;n++)t=arguments[n],e[n]=C.isZ(t)?t.toArray():t;return s.apply(C.isZ(this)?this.toArray():this,e)},map:function(n){return e(e.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return e(l.apply(this,arguments))},ready:function(n){return E.test(u.readyState)&&u.body?n(e):u.addEventListener("DOMContentLoaded",function(){n(e)},!1),this},get:function(t){return t===n?l.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return a.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(n){return O(n)?this.not(this.not(n)):e(c.call(this,function(t){return C.matches(t,n)}))},add:function(n,t){return e(r(this.concat(e(n,t))))},is:function(n){return this.length>0&&C.matches(this[0],n)},not:function(t){var i=[];if(O(t)&&t.call!==n)this.each(function(n){t.call(this,n)||i.push(this)});else{var o="string"==typeof t?this.filter(t):z(t)&&O(t.item)?l.call(t):e(t);this.forEach(function(n){o.indexOf(n)<0&&i.push(n)})}return e(i)},has:function(n){return this.filter(function(){return R(n)?e.contains(this,n):e(this).find(n).size()})},eq:function(n){return-1===n?this.slice(n):this.slice(n,+n+1)},first:function(){var n=this[0];return n&&!R(n)?n:e(n)},last:function(){var n=this[this.length-1];return n&&!R(n)?n:e(n)},find:function(n){var t=this;return n?"object"==typeof n?e(n).filter(function(){var n=this;return a.some.call(t,function(t){return e.contains(t,n)})}):1==this.length?e(C.qsa(this[0],n)):this.map(function(){return C.qsa(this,n)}):e()},closest:function(n,t){var i=[],o="object"==typeof n&&e(n);return this.each(function(e,r){for(;r&&!(o?o.indexOf(r)>=0:C.matches(r,n));)r=r!==t&&!F(r)&&r.parentNode;r&&i.indexOf(r)<0&&i.push(r)}),e(i)},parents:function(n){for(var t=[],i=this;i.length>0;)i=e.map(i,function(n){if((n=n.parentNode)&&!F(n)&&t.indexOf(n)<0)return t.push(n),n});return V(t,n)},parent:function(n){return V(r(this.pluck("parentNode")),n)},children:function(n){return V(this.map(function(){return U(this)}),n)},contents:function(){return this.map(function(){return this.contentDocument||l.call(this.childNodes)})},siblings:function(n){return V(this.map(function(n,t){return c.call(U(t.parentNode),function(n){return n!==t})}),n)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(n){return e.map(this,function(t){return t[n]})},show:function(){return this.each(function(){var n,t,e;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(n=this.nodeName,p[n]||(t=u.createElement(n),u.body.appendChild(t),e=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==e&&(e="block"),p[n]=e),p[n]))})},replaceWith:function(n){return this.before(n).remove()},wrap:function(n){var t=O(n);if(this[0]&&!t)var i=e(n).get(0),o=i.parentNode||this.length>1;return this.each(function(r){e(this).wrapAll(t?n.call(this,r):o?i.cloneNode(!0):i)})},wrapAll:function(n){if(this[0]){var t;for(e(this[0]).before(n=e(n));(t=n.children()).length;)n=t.first();e(n).append(this)}return this},wrapInner:function(n){var t=O(n);return this.each(function(i){var o=e(this),r=o.contents(),a=t?n.call(this,i):n;r.length?r.wrapAll(a):o.append(a)})},unwrap:function(){return this.parent().each(function(){e(this).replaceWith(e(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var i=e(this);(t===n?"none"==i.css("display"):t)?i.show():i.hide()})},prev:function(n){return e(this.pluck("previousElementSibling")).filter(n||"*")},next:function(n){return e(this.pluck("nextElementSibling")).filter(n||"*")},html:function(n){return 0 in arguments?this.each(function(t){var i=this.innerHTML;e(this).empty().append(B(this,n,t,i))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=B(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(e,i){var o;return"string"!=typeof e||1 in arguments?this.each(function(n){if(1===this.nodeType)if(R(e))for(t in e)H(this,t,e[t]);else H(this,e,B(this,i,n,this.getAttribute(e)))}):0 in this&&1==this[0].nodeType&&null!=(o=this[0].getAttribute(e))?o:n},removeAttr:function(n){return this.each(function(){1===this.nodeType&&n.split(" ").forEach(function(n){H(this,n)},this)})},prop:function(n,t){return n=A[n]||n,1 in arguments?this.each(function(e){this[n]=B(this,t,e,this[n])}):this[0]&&this[0][n]},removeProp:function(n){return n=A[n]||n,this.each(function(){delete this[n]})},data:function(t,e){var i="data-"+t.replace(b,"-$1").toLowerCase(),o=1 in arguments?this.attr(i,e):this.attr(i);return null!==o?X(o):n},val:function(n){return 0 in arguments?(null==n&&(n=""),this.each(function(t){this.value=B(this,n,t,this.value)})):this[0]&&(this[0].multiple?e(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(n){if(n)return this.each(function(t){var i=e(this),o=B(this,n,t,i.offset()),r=i.offsetParent().offset(),a={top:o.top-r.top,left:o.left-r.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)});if(!this.length)return null;if(u.documentElement!==this[0]&&!e.contains(u.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(n,i){if(arguments.length<2){var r=this[0];if("string"==typeof n){if(!r)return;return r.style[o(n)]||getComputedStyle(r,"").getPropertyValue(n)}if(N(n)){if(!r)return;var a={},s=getComputedStyle(r,"");return e.each(n,function(n,t){a[t]=r.style[o(t)]||s.getPropertyValue(t)}),a}}var c="";if("string"==$(n))i||0===i?c=I(n)+":"+L(n,i):this.each(function(){this.style.removeProperty(I(n))});else for(t in n)n[t]||0===n[t]?c+=I(t)+":"+L(t,n[t])+";":this.each(function(){this.style.removeProperty(I(t))});return this.each(function(){this.style.cssText+=";"+c})},index:function(n){return n?this.indexOf(e(n)[0]):this.parent().children().indexOf(this[0])},hasClass:function(n){return!!n&&a.some.call(this,function(n){return this.test(Z(n))},q(n))},addClass:function(n){return n?this.each(function(t){if("className"in this){i=[];var o=Z(this);B(this,n,t,o).split(/\s+/g).forEach(function(n){e(this).hasClass(n)||i.push(n)},this),i.length&&Z(this,o+(o?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===n)return Z(this,"");i=Z(this),B(this,t,e,i).split(/\s+/g).forEach(function(n){i=i.replace(q(n)," ")}),Z(this,i.trim())}})},toggleClass:function(t,i){return t?this.each(function(o){var r=e(this);B(this,t,o,Z(this)).split(/\s+/g).forEach(function(t){(i===n?!r.hasClass(t):i)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===n?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===n?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var n=this[0],t=this.offsetParent(),i=this.offset(),o=g.test(t[0].nodeName)?{top:0,left:0}:t.offset();return i.top-=parseFloat(e(n).css("margin-top"))||0,i.left-=parseFloat(e(n).css("margin-left"))||0,o.top+=parseFloat(e(t[0]).css("border-top-width"))||0,o.left+=parseFloat(e(t[0]).css("border-left-width"))||0,{top:i.top-o.top,left:i.left-o.left}}},offsetParent:function(){return this.map(function(){for(var n=this.offsetParent||u.body;n&&!g.test(n.nodeName)&&"static"==e(n).css("position");)n=n.offsetParent;return n})}},e.fn.detach=e.fn.remove,["width","height"].forEach(function(t){var i=t.replace(/./,function(n){return n[0].toUpperCase()});e.fn[t]=function(o){var r,a=this[0];return o===n?P(a)?a["inner"+i]:F(a)?a.documentElement["scroll"+i]:(r=this.offset())&&r[t]:this.each(function(n){(a=e(this)).css(t,B(this,o,n,a[t]()))})}}),["after","prepend","before","append"].forEach(function(t,i){var o=i%2;e.fn[t]=function(){var t,r,a=e.map(arguments,function(i){var o=[];return"array"==(t=$(i))?(i.forEach(function(t){return t.nodeType!==n?o.push(t):e.zepto.isZ(t)?o=o.concat(t.get()):void(o=o.concat(C.fragment(t)))}),o):"object"==t||null==i?i:C.fragment(i)}),s=this.length>1;return a.length<1?this:this.each(function(n,t){r=o?t:t.parentNode,t=0==i?t.nextSibling:1==i?t.firstChild:2==i?t:null;var c=e.contains(u.documentElement,r);a.forEach(function(n){if(s)n=n.cloneNode(!0);else if(!r)return e(n).remove();r.insertBefore(n,t),c&&function n(t,e){e(t);for(var i=0,o=t.childNodes.length;i<o;i++)n(t.childNodes[i],e)}(n,function(n){if(!(null==n.nodeName||"SCRIPT"!==n.nodeName.toUpperCase()||n.type&&"text/javascript"!==n.type||n.src)){var t=n.ownerDocument?n.ownerDocument.defaultView:window;t.eval.call(t,n.innerHTML)}})})})},e.fn[o?t+"To":"insert"+(i?"Before":"After")]=function(n){return e(n)[t](this),this}}),C.Z.prototype=M.prototype=e.fn,C.uniq=r,C.deserializeValue=X,e.zepto=C,e}();window.Zepto=s,void 0===window.$&&(window.$=s),function(n){var t,e=1,i=Array.prototype.slice,o=n.isFunction,r=function(n){return"string"==typeof n},a={},s={},c="onfocusin"in window,l={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"};function p(n){return n._zid||(n._zid=e++)}function f(n,t,e,i){if((t=h(t)).ns)var o=(r=t.ns,new RegExp("(?:^| )"+r.replace(" "," .* ?")+"(?: |$)"));var r;return(a[p(n)]||[]).filter(function(n){return n&&(!t.e||n.e==t.e)&&(!t.ns||o.test(n.ns))&&(!e||p(n.fn)===p(e))&&(!i||n.sel==i)})}function h(n){var t=(""+n).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function d(n,t){return n.del&&!c&&n.e in l||!!t}function m(n){return u[n]||c&&l[n]||n}function v(e,i,o,r,s,c,l){var f=p(e),v=a[f]||(a[f]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return n(document).ready(o);var a=h(i);a.fn=o,a.sel=s,a.e in u&&(o=function(t){var e=t.relatedTarget;if(!e||e!==this&&!n.contains(this,e))return a.fn.apply(this,arguments)}),a.del=c;var p=c||o;a.proxy=function(n){if(!(n=j(n)).isImmediatePropagationStopped()){n.data=r;var i=p.apply(e,n._args==t?[n]:[n].concat(n._args));return!1===i&&(n.preventDefault(),n.stopPropagation()),i}},a.i=v.length,v.push(a),"addEventListener"in e&&e.addEventListener(m(a.e),a.proxy,d(a,l))})}function g(n,t,e,i,o){var r=p(n);(t||"").split(/\s/).forEach(function(t){f(n,t,e,i).forEach(function(t){delete a[r][t.i],"removeEventListener"in n&&n.removeEventListener(m(t.e),t.proxy,d(t,o))})})}s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",n.event={add:v,remove:g},n.proxy=function(t,e){var a=2 in arguments&&i.call(arguments,2);if(o(t)){var s=function(){return t.apply(e,a?a.concat(i.call(arguments)):arguments)};return s._zid=p(t),s}if(r(e))return a?(a.unshift(t[e],t),n.proxy.apply(null,a)):n.proxy(t[e],t);throw new TypeError("expected function")},n.fn.bind=function(n,t,e){return this.on(n,t,e)},n.fn.unbind=function(n,t){return this.off(n,t)},n.fn.one=function(n,t,e,i){return this.on(n,t,e,i,1)};var b=function(){return!0},y=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function j(e,i){return!i&&e.isDefaultPrevented||(i||(i=e),n.each(w,function(n,t){var o=i[n];e[n]=function(){return this[t]=b,o&&o.apply(i,arguments)},e[t]=y}),e.timeStamp||(e.timeStamp=Date.now()),(i.defaultPrevented!==t?i.defaultPrevented:"returnValue"in i?!1===i.returnValue:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function E(n){var e,i={originalEvent:n};for(e in n)x.test(e)||n[e]===t||(i[e]=n[e]);return j(i,n)}n.fn.delegate=function(n,t,e){return this.on(t,n,e)},n.fn.undelegate=function(n,t,e){return this.off(t,n,e)},n.fn.live=function(t,e){return n(document.body).delegate(this.selector,t,e),this},n.fn.die=function(t,e){return n(document.body).undelegate(this.selector,t,e),this},n.fn.on=function(e,a,s,c,l){var u,p,f=this;return e&&!r(e)?(n.each(e,function(n,t){f.on(n,a,s,t,l)}),f):(r(a)||o(c)||!1===c||(c=s,s=a,a=t),c!==t&&!1!==s||(c=s,s=t),!1===c&&(c=y),f.each(function(t,o){l&&(u=function(n){return g(o,n.type,c),c.apply(this,arguments)}),a&&(p=function(t){var e,r=n(t.target).closest(a,o).get(0);if(r&&r!==o)return e=n.extend(E(t),{currentTarget:r,liveFired:o}),(u||c).apply(r,[e].concat(i.call(arguments,1)))}),v(o,e,c,s,a,p||u)}))},n.fn.off=function(e,i,a){var s=this;return e&&!r(e)?(n.each(e,function(n,t){s.off(n,i,t)}),s):(r(i)||o(a)||!1===a||(a=i,i=t),!1===a&&(a=y),s.each(function(){g(this,e,a,i)}))},n.fn.trigger=function(t,e){return(t=r(t)||n.isPlainObject(t)?n.Event(t):j(t))._args=e,this.each(function(){t.type in l&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):n(this).triggerHandler(t,e)})},n.fn.triggerHandler=function(t,e){var i,o;return this.each(function(a,s){(i=E(r(t)?n.Event(t):t))._args=e,i.target=s,n.each(f(s,t.type||t),function(n,t){if(o=t.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){n.fn[t]=function(n){return 0 in arguments?this.bind(t,n):this.trigger(t)}}),n.Event=function(n,t){r(n)||(n=(t=n).type);var e=document.createEvent(s[n]||"Events"),i=!0;if(t)for(var o in t)"bubbles"==o?i=!!t[o]:e[o]=t[o];return e.initEvent(n,i,!0),j(e)}}(s),function(n){var t,e,i=+new Date,o=window.document,r=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,c="application/json",l="text/html",u=/^\s*$/,p=o.createElement("a");function f(t,e,i,r){if(t.global)return function(t,e,i){var o=n.Event(e);return n(t).trigger(o,i),!o.isDefaultPrevented()}(e||o,i,r)}function h(n,t){var e=t.context;if(!1===t.beforeSend.call(e,n,t)||!1===f(t,e,"ajaxBeforeSend",[n,t]))return!1;f(t,e,"ajaxSend",[n,t])}function d(n,t,e,i){var o=e.context;e.success.call(o,n,"success",t),i&&i.resolveWith(o,[n,"success",t]),f(e,o,"ajaxSuccess",[t,e,n]),v("success",t,e)}function m(n,t,e,i,o){var r=i.context;i.error.call(r,e,t,n),o&&o.rejectWith(r,[e,t,n]),f(i,r,"ajaxError",[e,i,n||t]),v(t,e,i)}function v(t,e,i){var o=i.context;i.complete.call(o,e,t),f(i,o,"ajaxComplete",[e,i]),function(t){t.global&&!--n.active&&f(t,null,"ajaxStop")}(i)}function g(){}function b(n,t){return""==t?n:(n+"&"+t).replace(/[&?]{1,2}/,"?")}function y(t,e,i,o){return n.isFunction(e)&&(o=i,i=e,e=void 0),n.isFunction(i)||(o=i,i=void 0),{url:t,data:e,success:i,dataType:o}}p.href=window.location.href,n.active=0,n.ajaxJSONP=function(t,e){if(!("type"in t))return n.ajax(t);var r,a,s=t.jsonpCallback,c=(n.isFunction(s)?s():s)||"Zepto"+i++,l=o.createElement("script"),u=window[c],p=function(t){n(l).triggerHandler("error",t||"abort")},f={abort:p};return e&&e.promise(f),n(l).on("load error",function(i,o){clearTimeout(a),n(l).off().remove(),"error"!=i.type&&r?d(r[0],f,t,e):m(null,o||"error",f,t,e),window[c]=u,r&&n.isFunction(u)&&u(r[0]),u=r=void 0}),!1===h(f,t)?(p("abort"),f):(window[c]=function(){r=arguments},l.src=t.url.replace(/\?(.+)=\?/,"?$1="+c),o.head.appendChild(l),t.timeout>0&&(a=setTimeout(function(){p("timeout")},t.timeout)),f)},n.ajaxSettings={type:"GET",beforeSend:g,success:g,error:g,complete:g,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:c,xml:"application/xml, text/xml",html:l,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:g},n.ajax=function(i){var r,v,y=n.extend({},i||{}),x=n.Deferred&&n.Deferred();for(t in n.ajaxSettings)void 0===y[t]&&(y[t]=n.ajaxSettings[t]);!function(t){t.global&&0==n.active++&&f(t,null,"ajaxStart")}(y),y.crossDomain||((r=o.createElement("a")).href=y.url,r.href=r.href,y.crossDomain=p.protocol+"//"+p.host!=r.protocol+"//"+r.host),y.url||(y.url=window.location.toString()),(v=y.url.indexOf("#"))>-1&&(y.url=y.url.slice(0,v)),function(t){t.processData&&t.data&&"string"!=n.type(t.data)&&(t.data=n.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=b(t.url,t.data),t.data=void 0)}(y);var w=y.dataType,j=/\?.+=\?/.test(y.url);if(j&&(w="jsonp"),!1!==y.cache&&(i&&!0===i.cache||"script"!=w&&"jsonp"!=w)||(y.url=b(y.url,"_="+Date.now())),"jsonp"==w)return j||(y.url=b(y.url,y.jsonp?y.jsonp+"=?":!1===y.jsonp?"":"callback=?")),n.ajaxJSONP(y,x);var E,k=y.accepts[w],_={},S=function(n,t){_[n.toLowerCase()]=[n,t]},C=/^([\w-]+:)\/\//.test(y.url)?RegExp.$1:window.location.protocol,T=y.xhr(),A=T.setRequestHeader;if(x&&x.promise(T),y.crossDomain||S("X-Requested-With","XMLHttpRequest"),S("Accept",k||"*/*"),(k=y.mimeType||k)&&(k.indexOf(",")>-1&&(k=k.split(",",2)[0]),T.overrideMimeType&&T.overrideMimeType(k)),(y.contentType||!1!==y.contentType&&y.data&&"GET"!=y.type.toUpperCase())&&S("Content-Type",y.contentType||"application/x-www-form-urlencoded"),y.headers)for(e in y.headers)S(e,y.headers[e]);if(T.setRequestHeader=S,T.onreadystatechange=function(){if(4==T.readyState){T.onreadystatechange=g,clearTimeout(E);var t,e=!1;if(T.status>=200&&T.status<300||304==T.status||0==T.status&&"file:"==C){if(w=w||((i=y.mimeType||T.getResponseHeader("content-type"))&&(i=i.split(";",2)[0]),i&&(i==l?"html":i==c?"json":a.test(i)?"script":s.test(i)&&"xml")||"text"),"arraybuffer"==T.responseType||"blob"==T.responseType)t=T.response;else{t=T.responseText;try{t=function(n,t,e){if(e.dataFilter==g)return n;var i=e.context;return e.dataFilter.call(i,n,t)}(t,w,y),"script"==w?(0,eval)(t):"xml"==w?t=T.responseXML:"json"==w&&(t=u.test(t)?null:n.parseJSON(t))}catch(n){e=n}if(e)return m(e,"parsererror",T,y,x)}d(t,T,y,x)}else m(T.statusText||null,T.status?"error":"abort",T,y,x)}var i},!1===h(T,y))return T.abort(),m(null,"abort",T,y,x),T;var N=!("async"in y)||y.async;if(T.open(y.type,y.url,N,y.username,y.password),y.xhrFields)for(e in y.xhrFields)T[e]=y.xhrFields[e];for(e in _)A.apply(T,_[e]);return y.timeout>0&&(E=setTimeout(function(){T.onreadystatechange=g,T.abort(),m(null,"timeout",T,y,x)},y.timeout)),T.send(y.data?y.data:null),T},n.get=function(){return n.ajax(y.apply(null,arguments))},n.post=function(){var t=y.apply(null,arguments);return t.type="POST",n.ajax(t)},n.getJSON=function(){var t=y.apply(null,arguments);return t.dataType="json",n.ajax(t)},n.fn.load=function(t,e,i){if(!this.length)return this;var o,a=this,s=t.split(/\s/),c=y(t,e,i),l=c.success;return s.length>1&&(c.url=s[0],o=s[1]),c.success=function(t){a.html(o?n("<div>").html(t.replace(r,"")).find(o):t),l&&l.apply(a,arguments)},n.ajax(c),this};var x=encodeURIComponent;n.param=function(t,e){var i=[];return i.add=function(t,e){n.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(x(t)+"="+x(e))},function t(e,i,o,r){var a,s=n.isArray(i),c=n.isPlainObject(i);n.each(i,function(i,l){a=n.type(l),r&&(i=o?r:r+"["+(c||"object"==a||"array"==a?i:"")+"]"),!r&&s?e.add(l.name,l.value):"array"==a||!o&&"object"==a?t(e,l,o,i):e.add(i,l)})}(i,t,e),i.join("&").replace(/%20/g,"+")}}(s),function(n){n.fn.serializeArray=function(){var t,e,i=[],o=function(n){if(n.forEach)return n.forEach(o);i.push({name:t,value:n})};return this[0]&&n.each(this[0].elements,function(i,r){e=r.type,(t=r.name)&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&"file"!=e&&("radio"!=e&&"checkbox"!=e||r.checked)&&o(n(r).val())}),i},n.fn.serialize=function(){var n=[];return this.serializeArray().forEach(function(t){n.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),n.join("&")},n.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=n.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(s),function(){try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;window.getComputedStyle=function(t,e){try{return n(t,e)}catch(n){return null}}}}();var c=window.Zepto||window.jQuery||window.$;_("✔ Loaded",d?"isMobile":"notMobile");var l,u,p=decodeURIComponent("(o%CB%98%E2%97%A1%CB%98o)"),f=location.href,h=window.screen.width,d=h<=600,m=n=>n.charCodeAt(0)-97,v=n=>String.fromCharCode(97+n),g=(l=5,u=15,Math.floor(Math.random()*(u-l+1)+l)),b={encrypt:n=>n.split("").reverse().map(n=>(n=>v(m(n)+g%26))(n)).join(""),decrypt:n=>n.split("").reverse().map(n=>(n=>v(m(n)-g%26))(n)).join("")};SEARCH_SOURCES=F(SEARCH_SOURCES).map(n=>{var t=N(n);return{url:t.url,name:t.name}});var y=decodeURIComponent("%0A%0A%20%20Stone%20%20https%3A%2F%2Fjiexi.071811.cc%2Fjx.php%3Furl%3D%E2%9C%94%0A%0A%20%20OK%20%20https%3A%2F%2Fokjx.cc%2F%3Furl%3D%E2%9C%94%0A%0A%20%20Sjz%20%20https%3A%2F%2Fwww.sjzvip.com%2Fv%2Fc.php%3Furl%3D%E2%9C%94%0A%0A%20%20https%3A%2F%2Fjiexi.380k.com%2F%3Furl%3D%E2%9C%94%0A%0A%20%20http%3A%2F%2Fckmov.vip%2Fapi.php%3Furl%3D%E2%9C%94%0A%0A%20%20m3u8%20%20https%3A%2F%2Fwww.playm3u8.cn%2Fjiexi.php%3Furl%3D%E2%9C%94%0A%0A%20%20Egg%20%20https%3A%2F%2Fwww.eggvod.cn%2Fjx.php%3Fzhm_jx%3D%0A%0A");0===(a=F(a).filter(n=>n.includes("http"))).length&&(a=F(y));var x,w=a.filter(n=>n.includes("✔")),j=R(a),E=w.length>0?R(w):/$^/;if(a=a.map(n=>n.replace(/=http.+/g,"=").replace(/\s*✔.*/g,"")),S(j)||S(/oo\.movie&/))A(`\n.google-auto-placed,\nbody > script ~ div[id] {${PurifyStyle}}\n`),c("title").html(e),c(function(){c("title").html(e)}),S(/=http/)&&S(E)||S(/oo\.movie&/)?(A(`\nbody:not(.oo) > *:not(video) {${PurifyStyle}}\n\nbody:not(.oo)::after {\n  content: "oo.movie 正在为你解析";\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2147483647;\n  color: white;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-color: black;\n}\n\nbody > video {\n  position: fixed !important;\n  top: 0px !important;\n  left: 0px !important;\n  min-width: 0px !important;\n  min-height: 0px !important;\n  max-width: 99.99% !important;\n  max-height: 99.99% !important;\n  margin: 0px !important;\n  visibility: visible !important;\n  border-width: 0px !important;\n  background: black !important;\n  z-index: 2147483647 !important;\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.oo.is-fail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #000;\n}\n\n.oo.is-fail .tip {\n  text-align: center;\n  padding: 1em;\n  color: white;\n}\n    `),c(function(){var n,t,i=!0,o=!1,r=!1,a=setInterval(function(){if(!r){r=!0;var s=c("iframe");if(0!==s.length){var l,u=s.attr("src"),p=u.match(/\/\/([^\/]+)/)[1],h=f.match(/oo\.movie=([^&]+)/);if(h=h?h[1]:"",1===c("iframe").length&&0===s.contents().find("iframe").length&&0===s.contents().find("video").length&&/=http/.test(u)&&!h.includes(p))return clearInterval(a),void(location.href=u.replace("?",`?oo.movie=${h?h+","+p:p}&`));for(;0===(n=s.contents().find("video")).length&&(l=s.contents().find("iframe")).length>0;)s=l;t=(n.length||c("video").length)>0,alert(n.length+" | "+c("video").length),t?(clearInterval(a),i&&(i=!0,c("body").addClass("oo").append(n.attr("src")?n:c("video")),c("title").html(e))):o&&(clearInterval(a),c("body").addClass("oo is-fail").html('<div class="tip">解析失败，请换源观看！</div>'),$("body","append"),c("title").html(e)),r=!1}else c("video").length>0&&(clearInterval(a),c("body").addClass("oo"))}},250);setTimeout(function(){o=!0},13e3)})):S(/eggvod\.cn/)&&(A(`\n#alertBox > div[style] {${PurifyStyle}}\n\nbody > .alertBox {\n  width: 100% !important;\n  top: 0 !important;\n  min-height: 100vh;\n  border-radius: 0;\n  border: none;\n}\n    `),$("#alertBox","append"));else if(S(/search\.douban\.com\/movie\//))_("豆瓣·电影·搜索 - pc"),A(`\n#dale_movie_subject_search_bottom,\n#dale_movie_subject_search_top_right,\n#dale_movie_subject_top_right,\n#dale_movie_subject_bottom_super_banner,\n#dale_movie_subject_middle_right {${PurifyStyle}}\n\n.oo-sources {\n  padding-left: 1em;\n}\n\n.oo-sources a {\n  display: inline-flex !important;\n  align-items: center;\n  border-radius: 4px;\n  font-size: .75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: .75em;\n  padding-right: .75em;\n  white-space: nowrap;\n  background-color: #effaf3;\n  color: #257942;\n  margin-top: .5em;\n  margin-right: .5em;\n}\n`),c("#icp").html(p),c(".gemzcp").each(function(n,t){var e=c(".title",t).text();c(t).append(`<p class="oo-sources">\n${O(e)}\n</p>`)});else if(S(/m\.douban\.com\/search\/\?.*type=movie/))_("豆瓣·电影·搜索 - m"),A(`\n#TalionNav,\n.search-results-modules-name {${PurifyStyle}}\n\n.search-module {\n  margin-top: 0;\n}\n\n.search-results img {\n  width: 80px;\n}\n\n.search-results {\n  padding-bottom: 10px;\n}\n\n.search-results li a {\n  display: flex;\n  align-items: center;\n}\n\n.search-results img {\n  height: 100%;\n  padding: 0;\n  border: 2px solid;\n  border-image: linear-gradient(to bottom, #2b68c4 0%,#cf2d6e 100%)1;\n}\n`),c("#more-search").append("    "+p),c(".subject-info").each(function(n,t){P(c(".subject-title",t).text(),t,"append")}),c(".search-hd input").on("keyup",function(n){13===n.keyCode&&(n.preventDefault(),location.href="/search/?query="+n.target.value+"&type=movie")}),c(".search-hd .button-search").attr("id",p),c(".search-hd .button-search").on("click",function(n){n.preventDefault();var t=c(".search-hd input").val();location.href="/search/?query="+t+"&type=movie"});else if(S(/movie\.douban\.com\/subject\//)){_("豆瓣·电影·详情 - pc"),A(`\n#dale_movie_subject_search_bottom,\n#dale_movie_subject_search_top_right,\n#dale_movie_subject_top_right,\n#dale_movie_subject_bottom_super_banner,\n#dale_movie_subject_middle_right {${PurifyStyle}}\n`),c("#icp").html(p);var k=C(c("title").text().replace("(豆瓣)","").trim());c("#info").append(`<div>\n<span class="pl">在线观看：</span>\n<span>\n${SEARCH_SOURCES.map(function(n){return"<span><a "+(d?"":'target="_blank" ')+'href="'+n.url.replace("**",k)+'">'+n.name+"</a>"}).join(" / </span>")}\n</span></span></div>\n`)}else if(S(/m\.douban\.com\/movie\/subject\//))_("豆瓣·电影·详情 - m"),A(`\n.score-write,\na[href*='to_app']:not(.sub-honor):not(.sub-cover),\na[href*='doubanapp'],\ndiv[id*='BAIDU'],\ndiv[id*='google'],\nsection + .center,\n.bottom_ad_download,\n.sub-vendor,\n.to_pc,\n.TalionNav-static,\n.sub-detail .mark-movie,\n.sub-detail .mark-tv,\n.subject-banner,\n.bottom_ad_download,\n.cover-count,\n#google_esf,\n.adsbygoogle,\n.adsbygoogle {${PurifyStyle}}\n\n.sub-info .sub-cover {\n  display: block !important;\n}\n\n.TalionNav-primary {\n  position: relative !important;\n}\n\n.subject-comments,\n.subject-reviews {\n  margin-bottom: 0 !important;\n}\n\n.TalionNav .TalionNav-primary .search-box {\n  width: 230px;\n  flex: 230px 0 0;\n  animation: none;\n}\n\n.sub-original-title {\n  padding: 0.25em 0;\n}\n\n._V_sign {\n  font-size: 0.85em;\n  opacity: 0.15;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\n._V_source, .sub-score + .sub-score {\n  margin-top: 1.5em;\n  color: #fff;\n}\n\n._V_source .sub-score .sub-content {\n  display: block;\n}\n\n._V_source .sub-score a {\n  padding: .25em .5em;\n  line-height: 1.5;\n  margin: 0 .15em;\n  border: 1px solid rgba(255,255,255,0.2);\n  font-size: 1.05em;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin-top: .5em;\n  display: inline-block;\n  color: #ffe8cc;\n  background: rgba(239, 238, 238, 0.05);\n  border-radius: 4px;\n}\n\n#TalionNav {\n  display: none;\n}\n\n#TalionNav .logo {\n  background: none;\n  font-size: 1em;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #dee2e6;\n}\n\n.search-box:not(.on-search) {\n  opacity: 0.7;\n}\n\n#channel_tags {\n  margin-bottom: 10px;\n}\n\n.subject-header-wrap .sub-detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n#channel_tags {\n  margin-top: 10px;\n}\n\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n`),c(function(){c(".movie-reviews .show-all").after(`<div class="_V_sign"><a href="https://gitee.com/ecruos/oo">豆瓣·净化 ${p}</a></div>`),c("section + .center").each(function(n,t){c(t).remove()}),c(".subject-header-wrap").after(c("#TalionNav")),c("#TalionNav").css("display","block"),c("#TalionNav .logo").html(p).attr("href","https://movie.douban.com/tag/#/"),c(".search-box").remove(),c(".TalionNav-primary .logo").after('<div class="search-box"><input class="search-input" type="search" placeholder="搜索"></div>'),c(".search-input").on("focus",function(){c(this).parent().addClass("on-search")}).on("blur",function(){c(this).parent().removeClass("on-search")}),c(".search-input").on("keyup",function(n){13===n.keyCode&&(n.preventDefault(),location.href="/search/?query="+n.target.value+"&type=movie")});var n=C(c(".sub-title").text().trim());0===c("._V_source").length&&c(".subject-header-wrap").append(`<div class="_V_source subject-mark">\n\n<div class="sub-score">\n  <div class="sub-trademark">\n  在线观看\n  </div>\n  <div class="sub-content">\n${O(n)}\n  </div>\n</div>\n\n</div>`),setTimeout(function(){c(".subject-intro .bd p").click(),c(".sub-cover").attr("href","#"),c("#subject-honor-root a").attr("href","#")},1e3);var t=0,e=setInterval(function(){c("body > ins, body > iframe, .adsbygoogle").remove(),t++>5&&clearInterval(e)},500);!function n(){var t=c("#subject-header-container").attr("style");if(t){var e=t.match(/:\s*([^;]+);?/)[1],i=e.replace(")",", 0)");try{A(`\n.sub-cover::before {\n  background: -webkit-linear-gradient(bottom, ${e} 0%, ${i} 15%), -webkit-linear-gradient(right, ${e} 0%, ${i} 15%),-webkit-linear-gradient(top, ${e} 0%, ${i} 15%), -webkit-linear-gradient(left, ${e} 0%, ${i} 15%);\n  content: "";\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 102px;\n  height: 142px;\n  border-radius: 4px;\n}\n`)}catch(n){console.error("syncCoverColor:",n)}}else setTimeout(function(){n()},100)}()});else{if(S(/m\.tv\.sohu\.com\/phone_play_film/))return location.href=f.replace("phone_play_film",`v${f.match(/vid=(\d+)/)[1]}.shtml`);if(d&&S(/movie\.douban\.com\/tag\/#/)){_("豆瓣·选影视");A(T(`\n.category {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n\n.tags {\n  margin-bottom: 1em;\n}\n\n.checkbox__input {\n  vertical-align: text-top;\n}\n\n.tag-nav {\n  margin: 0 auto;\n  font-size: 12px;\n}\n\n.tag-nav .tabs, .tag-nav .check {\n  display: flex;\n  justify-content: space-around;\n}\n\n.tag-nav .tabs a {\n  padding: 7.5px 5px 5px;\n}\n\n.tabs a:not(.tab-checked) {\n  border: 1px solid #dfdfdf;\n}\n\n.tabs .tab-checked {\n  border: 1px solid #258dcd!important;\n}\n\n.tab-checked:after {\n  display: none;\n}\n\n.checkbox, .range {\n  margin-right: 5px;\n}\n\n.check {\n  float: none;\n  margin-top: 5px;\n}\n\n.list-wp, .item .cover-wp {\n  overflow: unset;\n}\n\na img {\n  padding: 2px;\n  border-radius: 5px;\n  background: linear-gradient(to bottom, #2b68c4 0%,#cf2d6e 100%);\n}\n\na.item {\n  width: ${parseInt(100/3)}%;\n  text-align: center;\n}\n\na.item p {\n  padding-right: 0;\n}\n\na.item .cover-wp {\n  height: auto;\n  padding: 0 0.5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na.item .cover-wp:after, .poster:after {\n  display: none;\n}\n\na.item .pic img {\n  width: 100%;\n  height: ${parseInt(4*h/3/3)}px;\n  max-width: 150px;\n  object-fit: cover;\n}\n\n.tag-nav .range-dropdown {\n  left: 0 !important;\n  width: auto !important;\n  right: 0 !important;\n  top: -4em !important;\n}\n\n.more {\n  margin: 0 1em .5em;\n}\n\n`,".oo")+`\nbody > *:not(.oo) {${PurifyStyle}}\n\n#app .article, .article.oo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 6px;\n  transition: all .8s;\n}\n\n.category::-webkit-scrollbar {\n  width: 1px;\n  height: 1px;\n  background-color: rgba(223, 223, 223, 0.25);\n}\n\n.category::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n\n.category::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 2.5px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 0 2.5px rgba(0, 0, 0, 0.1);\n  border-radius: 2.5px;\n  background-color: rgba(223, 223, 223, 0.25);\n  opacity: 0.7;\n  transition: opacity ease-in-out 200ms;\n}\n\n.category::-webkit-scrollbar-thumb:hover {\n  opacity: 1;\n  background-color: rgba(223, 223, 223, 0.25);\n}\n\n.oo-search {\n  position: relative;\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.oo-search .inp {\n  height: 34px;\n  text-align: center;\n  cursor: text;\n  width: 90%;\n}\n\n.oo-search .inp input {\n  background: #fff;\n  width: 96%;\n  margin: 0;\n  text-align: left;\n  height: 30px;\n  padding-left: 10px;\n  outline: none;\n}\n\n.oo-search input {\n  -webkit-appearance: none;\n  border: none;\n  background: transparent;\n}\n\n.oo-search .inp-btn {\n  position: relative;\n  width: 37px;\n  height: 34px;\n}\n\n.oo-search .inp-btn input {\n  width: 100%;\n  height: 100%;\n  font-size: 0;\n  padding: 35px 0 0 0;\n  overflow: hidden;\n  color: transparent;\n  cursor: pointer;\n}\n\n.oo-search .inp-btn input:focus {\n  outline: none;\n}\n\n.oo-search .inp {\n  background-image: url(//img3.doubanio.com/dae/accounts/resources/a4a38a5/movie/assets/nav_mv_bg.png?s=1);\n}\n\n.oo-search .inp-btn input {\n  background: url(//img3.doubanio.com/dae/accounts/resources/a4a38a5/movie/assets/nav_mv_bg.png?s=1) no-repeat 0 -40px;\n}\n`),c(function(){function n(){c(window).scrollTop()+c(window).height()>c(document).height()-40&&(c(window).unbind("scroll"),c(".more").click())}c("title").append(" - oo"),c("#app .article .tags").before(`<div class="oo-search">\n  <div class="inp"><input name="${p}" size="22" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" value="" autocomplete="off"></div>\n  <div class="inp-btn"><input type="submit" value="搜索"></div>\n</div>`),c("body").append(c("#app .article").addClass("oo")),c(".oo-search input").on("keyup",function(n){13===n.keyCode&&(n.preventDefault(),location.href="https://m.douban.com/search/?query="+n.target.value+"&type=movie")}),c(".oo-search .inp-btn input").on("click",function(n){n.preventDefault();var t=c(".oo-search input").val();location.href="https://m.douban.com/search/?query="+t+"&type=movie"}),c("a.item").each(function(n,t){c(t).attr("href",c(t).attr("href").replace("movie.douban.com","m.douban.com/movie")).removeAttr("target")});var t=document.querySelector(".list-wp");new MutationObserver(function(t){var e=!1;for(var i of t)"childList"==i.type&&(e=!0,i.addedNodes.forEach(function(n){n.classList.contains("item")&&(n.setAttribute("href",n.getAttribute("href").replace("movie.douban.com","m.douban.com/movie")),n.removeAttribute("target"))})),e&&setTimeout(function(){c(window).scroll(n)},1500)}).observe(t,{attributes:!0,childList:!0})})}else S(/localhost:1234|ecruos\.gitee\.io\/one/)&&(_("One·主页"),c(function(){localStorage.setItem("One.plugin.version",n)}))}z(),c(function(){o.setAttribute(i,e),setTimeout(function(){o.removeAttribute(i)},3e3)}),S(/m\.v\.qq\.com/)&&(x=function(){if(S(/v\.qq\.com\/(cover|play|x\/cover|x\/page|x\/play|x\/m\/cover|x\/m\/page|x\/m\/play)/))var n=0,t=!1,e=setInterval(function(){t||(t=!0,z(),n++>40||c(".oo-vip").length>0?clearInterval(e):t=!1)},250)},setInterval(function(){f!==window.location.href&&(f=window.location.href,x&&x())},250))}}function _(){if(r){var n=[];n.push(e+"  ");for(var t=0;t<arguments.length;t++)n.push(arguments[t]);console.log.apply(console,n)}}function S(n){return n.test(f)}function C(n){return(PurifyKeywordRegex?n.replace(PurifyKeywordRegex,""):n).replace(/\s*:\s*$/,"").trim()}function T(n,t){var e,i,o,r,a=t.length;t+=" ",n=(n=(n=n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"")).replace(/}(\s*)@/g,"}@")).replace(/}(\s*)}/g,"}}");for(var s=0;s<n.length-2;s++)e=n[s],i=n[s+1],"@"===e&&(o=!0),o||"{"!==e||(r=!0),r&&"}"===e&&(r=!1),r||"@"===i||"}"===i||"}"!==e&&","!==e&&("{"!==e&&";"!==e||!o)||(n=n.slice(0,s+1)+t+n.slice(s+1),s+=a,o=!1);return 0!==n.indexOf(t)&&0!==n.indexOf("@")&&(n=t+n),n}function A(n,t){t&&(n=T(n,t)),n=n.replace(/\n+\s*/g," ");var e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),document.getElementsByTagName("head")[0].appendChild(e)}function N(n,t){var e,i,o=n.trim().split(/[\s@]+/),r=o.filter(n=>/https?:\/\//.test(n));o=o.filter(n=>!/https?:\/\//.test(n)),r.forEach(n=>{/\/\/m\.|\/m\//.test(n)?e=n:i=n});var a=(d?e:i)||r[0];return t&&(a=a.replace("**",t)),{url:a,name:o.length>0?o.join(" "):a.match(/\/\/(.+\.)?([^\/]+)\.\w+\//)[2].replace(/^(\w)/,function(n){return n.toUpperCase()})}}function $(t,e="after",i=0){if(!(c(".oo-vip").length>0||i>20)){var o=c(t);if(0!==o.length){_("insertVipSource"),A(`\n.oo-vip {\n  padding-bottom: 0.5em;\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 5px;\n}\n\n.oo-vip + .oo-vip {${PurifyStyle}}\n\n.oo-vip-panel {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0;\n  font-size: 15px;\n  width: 100%;\n}\n\n.oo-vip-title {\n  padding: .5em;\n  font-weight: bold;\n  color: #257942;\n}\n\n.oo-vip-title span {\n  font-size: 0.75em;\n  margin: 0 10px;\n  color: #ced4da;\n}\n\n.oo-vip-panel, .oo-vip-list {\n  height: auto !important;\n}\n\n.oo-vip-sign {\n  padding: .5em;\n  opacity: .25;\n  margin-right: 1em;\n}\n\n.oo-vip-list {\n  padding: .5em;\n  letter-spacing: 1px;\n}\n\n.oo-vip-list .oo-vip-item {\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  background-color: #eef6fc;\n  color: #1d72aa;\n  margin: 4px;\n  padding: .5em .75em .5em .75em;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.25;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.oo-vip-list .oo-vip-item:hover, .oo-vip-list .oo-vip-item:active {\n  background-color: #1d72aa;\n  color: #eef6fc;\n}\n\n.oo-vip-list .oo-vip-item.is-active {\n  background-color: #2b8a3e;\n  color: #eef6fc;\n}\n`),o.eq(0)[e](`\n<div class="oo-vip">\n  <div class="oo-vip-panel">\n    <div class="oo-vip-title">VIP 解析<span>v${n}</span></div>\n    <div class="oo-vip-sign">${p}</div>\n  </div>\n  <div class="oo-vip-list">\n${a.map(function(n){var t=N(n);return t.url.includes("eggvod.cn")?'<span class="oo-vip-item" id="oo-vip-eggvod">'+t.name+"</span>":'<span class="oo-vip-item" _ooKey="'+b.encrypt(t.url)+'">'+t.name+"</span>"}).join("\n")}\n  </div>\n</div>\n</div>\n`);var r=!1;f();var s=0,l=setInterval(function(){f(),s++>25&&clearInterval(l)},500)}else setTimeout(function(){$(t,e,i+1)},250)}function u(n,t){var e,i,o=location.href.replace(/.+http/,"http");e=o;var a=n+(o=((i=BETTER_ADDONS.find(n=>n.fixUrl&&n.match.test(e)))?i.fixUrl(e):e)||o);_("click: "+a),c(".oo-vip-item").removeClass("is-active"),c(t).addClass("is-active"),(!d||MInnerVipUrlRegex.test(n))&&InnerVipUrlRegex.test(n)&&InnerUrlRegex.test(o)?function(n){var t=c(PlayerSelector);if(0!==t.length){c('iframe[id="oo-player"]').eq(0).html("");var e=window.location.href;if(setInterval(function(){window.location.href!=e&&(e=window.location.href,history.go(0))}),document.querySelectorAll("embed,video,object,iframe[frameborder]")[0]){var i=document.querySelectorAll("embed,video,object,iframe[frameborder]")[0];i.currentTime=0,i.currentTimes=0}t.eq(0).html(`<iframe id="oo-player" style="border: none; outline: none; margin: 0; padding: 0; position: absolute; z-index: 2147483647;" width="100%" height="100%" data-ad="false" marginwidth="0" marginheight="0" autoplay="ture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" allowTransparency="allowTransparency" border="0" frameborder="0" scrolling="no" marginwidth="0" src="${n}"></iframe>`)}else location.href=n}(a):location.href=a,setTimeout(function(){r=!1},500)}function f(){c("#oo-vip-eggvod").click(function(){if(!r){_("click eggvod"),r=!0;var n=this;c.get("https://www.eggvod.cn/jxcode.php",{in:81566699},function(t){u("https://www.eggvod.cn/jx.php?lrspm="+t+"&zhm_jx=",n)})}}),c(".oo-vip-item:not([id])").click(function(){r||(r=!0,u(b.decrypt(c(this).attr("_ooKey")),this))}),c(".oo-vip-panel").click(function(){r||(r=!0,location.href="https://gitee.com/ecruos/oo")})}}function O(n){var t=f.match(/\/\/([^\/]+)/)[1];return SEARCH_SOURCES.map(function(e){return e.url.includes(t)?"":"<a "+(d?"":'target="_blank" ')+'href="'+e.url.replace("**",n)+'">'+e.name+"</a>"}).join("\n")}function P(n,t,e="after",i=0){if(!(c(".oo-sources").length>0||i>20)){_("insertSearchAddon");var o=t.startsWith("-");o&&(t=t.slice(1));var r=c(t);0!==r.length?(A(`\n.oo-sources {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.oo-vip .oo-sources {\n  max-width: unset;\n  border-top: 1px solid rgba(73, 80, 87, 0.15);\n  margin-top: 5px;\n}\n\n.oo-sources + .oo-sources {${PurifyStyle}}\n\n.oo-sources a {\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  font-size: 12px !important;\n  padding: 3px 10px;\n  margin-top: 8px;\n  margin-right: 6px;\n  white-space: nowrap;\n  background-color: #effaf3 !important;\n  color: #257942 !important;\n  cursor: pointer;\n  border: 1px solid #f1f3f5;\n  text-decoration: none;\n}\n\n.oo-sources a:hover {\n  border: 1px solid #099268;\n  background-color: #257942 !important;\n  color: #effaf3 !important;\n}\n`),r[o?"last":"first"]()[e](`<div class="oo-sources">\n${O(C(n))}\n</div>`)):setTimeout(function(){P(n,t,e,i+1)},500)}}function F(n){return Array.isArray(n)?n:n.trim().split(/[\n\s]*\n+[\n\s]*/)}function R(n){return new RegExp(n.map(n=>n.replace(/.+\/\/|\/.+/g,"").replace(/\./g,"\\.")).join("|"))}function D(n){_("execQuickAddons:",n.name||n.match);var t="";n.hide&&(t+=`\n${n.hide} {${PurifyStyle}}\n`),n.css&&(t+=n.css),t&&A(t),c(function(){(n.sign&&c(n.sign).html(p),n.vip)&&((Array.isArray(n.vip)?n.vip:[n.vip]).forEach(n=>{$((n=n.split(/\s*\|\s*/))[0],n[1])}),n.title&&P(c(n.title).eq(0).text(),".oo-vip","append"));n.jump&&(_("searchAddon:",n),c(function(){var t,e,i,o="string"==typeof n.keyword?c(n.keyword).eq(0).text():"function"==typeof n.keyword?n.keyword(c):(t=n.keyword,(i=(e||location.href).match(t||CommonSearchKeywordRegex))?decodeURIComponent(t?i[1]:i[2]||i[4]):"");(Array.isArray(n.jump)?n.jump:n.jump.split(/\s*,\s*/)).forEach(function(n){n=n.split(/\s*\|\s*/),P(o,n[0],n[1]||"after")})}))})}function z(){BETTER_ADDONS.forEach(n=>{("string"==typeof n.match?f.includes(n.match):S(n.match))&&D(n)})}}();}else{}});
///* ! -------------------------------------------------------------------彩云翻译------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-cy-jjjxxxbbb").addEventListener("click",function(){var tiaojjjxxxbbbObj=document.getElementById("div.eruda-entry-btn");if(tiaojjjxxxbbbObj){tiaojjjxxxbbbObj.style.display="block"}else{var element=document.createElement('script');element.id='div.eruda-entry-btn';(function(){var script=document.createElement('script');script.src='https://caiyunapp.com/dest/trs.js';document.body.appendChild(script);script.onload=function(){eruda.init()}})()}});
///* ! -------------------------------------------------------------------谷歌翻译------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-gu-jjjxxxbbb").addEventListener("click",function(){if(document.querySelector("#google_translate_element")){}else{var script=document.createElement('script');script.src='https://news.yujianweb.cn/js/translate/element.js';document.getElementsByTagName('head')[0].appendChild(script);var google_translate_element=document.createElement('div');google_translate_element.id='google_translate_element';google_translate_element.style='font-size:16px;position:fixed;bottom:66px;right:0;cursor:pointer;z-index:999999;text-align:center;border-radius:10px;cursor:pointer;padding:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;border:1.5px outset buttonface;text-decoration:none;vertical-align:baseline;box-shadow:#7fd2f1 0 1px 0 inset,#156785 0 3px 0;background-image:-webkit-linear-gradient(bottom,#000 0,#156785 100%);font-family:Georgia;text-shadow:transparent 0 0 0;font-weight:bolder';document.documentElement.appendChild(google_translate_element);script=document.createElement('script');script.innerHTML="function googleTranslateElementInit(){new google.translate.TranslateElement({layout:google.translate.TranslateElement.InlineLayout.SIMPLE,multilanguagePage:true,pageLanguage:'auto',includedLanguages:'zh-CN,zh-TW'},'google_translate_element');}";document.getElementsByTagName('head')[0].appendChild(script)}});
///* ! -------------------------------------------------------------------万能工具------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-wan-jjjxxxbbb").addEventListener("click",function(){window.open("https://wn.run/f/#"+document.location.href,"bkmk_popup","allowfullscreen=true,allowfullscreen=allowfullscreen,esizable=1,scrollbars=1,toolbar=0,status=0,width=1100,height=600,left="+(screen.availWidth-1100)/2+",top="+(screen.availHeight-600)/2)});
///* ! -------------------------------------------------------------------网页编辑------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-bian-jjjxxxbbb").addEventListener("click",function(){document.body.contentEditable='true';document.designMode='on'});
///* ! -------------------------------------------------------------------网页调试------------------------------------------------------------------------- */
document.querySelector("a#jjjxxxbbb-tiao-jjjxxxbbb").addEventListener("click",function(){var tiaojjjxxxbbbObj=document.getElementById("div.eruda-entry-btn");if(tiaojjjxxxbbbObj){tiaojjjxxxbbbObj.style.display="block"}else{var element=document.createElement('script');element.id='div.eruda-entry-btn';(function(){var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/eruda';document.body.appendChild(script);script.onload=function(){eruda.init()}})()}});
///* ! ----------------------------------------------------------------------------------------------------------------------------------------------------- */
};};
///* ! ------------------------------------------------------------------------------------------------------------------------------------------------------ */
};
}catch(err){return false;};
//}catch(e){window.requestAnimationFrame(shoujianniugongjuxiang);};
})();