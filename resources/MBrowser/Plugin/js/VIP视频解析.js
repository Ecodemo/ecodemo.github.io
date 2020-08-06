// ==UserScript== 
// @name   VIP视频解析
// @description  
// @match   *
// @require   file:///meta_webapp/1583124824.js
// @run-at   document-end
// ==/UserScript==


// ==UserScript==
// @name         oo.movie（ VIP视频解析 + 精选在线观看源 ）
// @name:en      oo.movie
// @version      20.3.14
// @description  精选VIP视频解析和在线观看源，视频广告少，原网页解析，享受VIP的原画观影体验。支持腾讯视频、爱奇艺、优酷、芒果TV、搜狐视频、PPTV、1905、乐视等网站。VIP解析评分排序，不同网站不同排序，越好用的解析越靠前。
// @description:en  NO VIP NO VIDEO. For v.qq, iqiyi, youku, mgtv, tv.sohu, pptv, 1905, letv.
// @author       (o˘◡˘o)
// @namespace    https://gitee.com/ecruos/oo
// @supportURL   https://gitee.com/ecruos/oo
// @icon         https://gw.alicdn.com/tfs/TB1ZvwSycbpK1RjSZFyXXX_qFXa-48-48.ico
// @license      GPL License
// @run-at       document-start
// @include      *
// ==/UserScript==

! function() {
  var VIP解析 = "\n\n  蓝调影视 http://lcoc.top/coc/jiexi.php?url=\n\n  baidu.oss.aliyuncs http://47.97.170.115:39001/jiexi/?url=\n\n  福星解析 https://jx.fuxing56.com/jiexi/?url=\n\n  BY科技 https://v.dybhn.com/index.php?url=\n\n  盘古解析 https://jxla.ylybz.cn/pangu/jiexi.php?url=\n\n  8B解析 https://api.8bjx.cn/qw/?url=\n\n  来看影视 https://api.lkan.cc/?url=\n\n  4080 https://www.4080.xyz/jx/?url=\n\n  playm3u8 https://www.playm3u8.cn/jiexi.php?url=\n\n  H8 https://www.h8jx.com/jiexi.php?url=\n\n  98a https://jx.98a.ink/?url=\n\n  69解析 https://api.69ne.com/?url=\n\n  TV920 https://api.tv920.com/vip/?url=\n\n  618解析 https://jx.618g.com/?url=\n\n  去广告UA http://shimo.im/docs/6crHV6h8jhDdrC8w/read#\n\n",
    搜索源 = "\n\n  豆瓣 https://search.douban.com/movie/subject_search?search_text=** https://m.douban.com/search/?type=movie&query=**\n\n  360影视 http://m.360kan.com/search/index?kw=**\n\n  完美 https://www.wanmeikk.me/search/-------------.html?wd=**\n\n  哔滴 https://bde4.com/search/**\n\n  1090 https://1090ys.com/?c=search&sort=addtime&order=desc&page=1&wd=**\n\n  9亿看看 https://www.9ekk.com/vodsearch.html?wd=**\n\n  吾爱电影 https://www.52dy.vip/vodsearch/-------------.html?wd=**\n\n  独播库 https://www.duboku.net/vodsearch/-------------.html?wd=**&submit=\n\n  奈菲影视 https://www.nfmovies.com/search.php?searchword=;**\n\n  神马影院 https://www.shenma4480.com/search/-------------/?wd=**\n\n  17K云 http://17kyun.com/s/**.html\n\n  云播 https://m.yunbtv.com/vodsearch/-------------.html?wd=** https://www.yunbtv.com/vodsearch/-------------.html?wd=**\n\n  飞极速 http://m.feijisu8.com/search/** http://feijisu8.com/search/**\n\n",
    BETTER_ADDONS = [{
      name: "哔哩哔哩·搜索",
      match: /bilibili.com\/search|search.bilibili.com/,
      jump: "#all-list | append, .index__board__src-search-board-"
    }, {
      name: "哔哩哔哩 - m",
      match: /m\.bilibili\.com/,
      sign: ".mg-footer-copyright",
      hide: ".index__openAppBtn__src-commonComponent-topArea-, .index__container__src-commonComponent-bottomOpenApp-, .bili-app, .recom-wrapper, .b-footer, .open-app-bar, .open-app-float, .more-review-wrapper"
    }, {
      name: "腾讯·搜索",
      match: /v.qq.com\/(\w+\/)?search/,
      jump: "#result, .wrapper_main > .mod_pages",
      sign: ".copyright",
      hide: ".tvp_app_bar"
    }, {
      name: "腾讯·播放页",
      match: /v\.qq\.com\/(cover|play|x\/cover|x\/page|x\/play|x\/m\/cover|x\/m\/page|x\/m\/play)/,
      vip: "#vip_title, .U_box_bg_a, .player_headline, .mod_video_info",
      title: ".mod_video_info .video_title, ._main_title, .player_title",
      fixUrl: function(n) {
        if (n.includes("cid=")) {
          var e = n.match(/cid=(\w+)/)[1],
            t = n.match(/vid=(\w+)/);
          return t = t ? "/" + t[1] : "", "https://v.qq.com/x/cover/".concat(e).concat(t, ".html")
        }
        return n.includes("/x/cover") ? n.replace(/\.html.*/, ".html") : n
      },
      hide: '.mod_source, .video_function, .mod_promotion, #vip_privilege, #vip_activity, .U_bg_b, .btn_open_v, .btn_openapp, #vip_header, .btn_user_hd, .mod_sideslip_privileges, .mod_game_rec, .mod_source, .mod_promotion, .mod_sideslip_h, .btn_open, .btn_pay, .mod_box_lastview, .mod_vip_popup, .mod_vip_popup + .mask_layer, txpdiv[data-role="hd-ad-adapter-interactivelayer"]',
      css: "\nbody, #vip_title {\n  padding-bottom: 0 !important;\n}\n\n.mod_episodes_numbers.is-vip .item {\n  width: auto;\n  padding: 0 1em;\n}\n\n.U_html_bg .container {\n  padding-bottom: 30px;\n}\n\n.mod_play .mod_player_viptips .btn_try {\n  left: 30%;\n}"
    }, {
      name: "爱奇艺·搜索",
      match: /m.iqiyi.com\/search|so.iqiyi.com/,
      jump: "-.m-box, .search-con-page",
      sign: ".m-footer",
      hide: ".btn-ticket, .btn-yuyue, .btn-download, .m-iqyDown"
    }, {
      name: "爱奇艺·播放页",
      match: /\.iqiyi\.com\/v_/,
      vip: 'div[name="m-videoInfo"], #block-C',
      title: "#widget-videotitle, .video-title, .c-title-link, .player-title a",
      fixUrl: !0,
      sign: ".m-footer",
      hide: '.m-iqyDown, .header-login + div, .m-video-action, div[name="m-vipRights"], div[name="m-extendBar"], .m-iqylink-diversion, .m-iqylink-guide, .c-openVip, .c-score-btn, .m-videoUser-spacing, .m-pp-entrance, .m-hotWords-bottom, div[template-type="ALBUM"] .m-player-tip, .iqp-box-integral',
      css: '\n.page_play {\n  padding-bottom: 0;\n}\n\ndiv[name="m-videoInfo"] {\n  padding-top: 1em;\n}\n\n.m-box-items .oo-album-item {\n  border-radius: 0.05em;\n  background-color: #e9ecef;\n  color: #495057;\n  padding: 0.5em 1em;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.25em;\n  font-weight: bold;\n}\n\n.m-video-player #oo-player {\n  padding-top: 56.25%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n'
    }, {
      name: "优酷·搜索",
      match: /soku.com\/m.+q=|so.youku.com\/search_video/,
      jump: "#bpmodule-main, .yk_result"
    }, {
      name: "优酷·播放页",
      match: /m\.youku\.com\/a|m\.youku\.com\/v|v\.youku\.com\/v_/,
      vip: ".h5-detail-info, .player-title",
      title: ".player-title .subtitle a, .module-name, .anthology-title-wrap .title, .title-link",
      fixUrl: !0,
      sign: ".copyright",
      hide: ".h5-detail-guide, .h5-detail-ad, .brief-btm, .smartBannerBtn, .cmt-user-action, #right-title-ad-banner, .Corner-container",
      css: "\n#bpmodule-playp\n// NOTE SPLITERage-lefttitle {\n  height: auto !important;\n}"
    }, {
      name: "土豆·播放页",
      match: /\.tudou.com\/v\//,
      vip: ".play-video-desc, .td-play__baseinfo",
      title: ".td-listbox__title, .video-desc-title",
      fixUrl: !0,
      hide: ".video-player-topbar, .td-h5__player__appguide, #tudou-footer, .dropdown__panel__con"
    }, {
      name: "芒果·搜索",
      match: /m.mgtv.com\/so\/|so.mgtv.com\/so/,
      jump: "#paginator, .result-box .media",
      keyword: /k[-=]([^&\?\/\.]+)/
    }, {
      name: "芒果·播放页",
      match: /\.mgtv\.com\/(b|l)\//,
      vip: [".xuanji | before", ".v-panel-box"],
      title: ".v-panel-title, .vt-txt",
      fixUrl: !0,
      sign: ".mg-footer-copyright",
      hide: ".ad-banner, .video-area-bar, .video-error .btn, .m-vip-list, .m-vip-list + div:not([class]), .toapp, .video-comment .ft, .mg-app-swip"
    }, {
      name: "搜狐·搜索",
      match: /m.tv.sohu.com.+key=|so.tv.sohu.com.+wd=/,
      jump: ".ssMore | before, .select-container | before"
    }, {
      name: "搜狐·播放页",
      match: /film\.sohu\.com\/album\/|tv\.sohu\.com\/(v|phone_play_film)/,
      vip: ".title-wrap, .videoInfo, .tw-info, .player-detail, .movie-info-content",
      title: "#vinfobox h2, .t-info, .movie-t h3",
      fixUrl: function(n) {
        if (/phone_play_film.+channeled=/.test(n)) {
          var e = n.match(/channeled=(\w+)/)[1],
            t = n.match(/aid=(\w+)/)[1];
          return "https://film.sohu.com/album/".concat(t, ".html?channeled=").concat(e)
        }
        return n
      },
      sign: ".links",
      hide: ".actv-banner, .btn-xz-app, .twinfo_iconwrap, .btn-comment-app, #ad_banner, .advertise, .main-ad-view-box, .foot.sohu-swiper, .app-star-vbox, .app-guess-vbox, .main-rec-view-box, .app-qianfan-box, .comment-empty-bg, .copyinfo, .ph-vbox, .btn_m_action, .btn-xz-app, #film_top_banner, .btn-comment-app",
      css: "\n.comment-empty-txt {\n  margin-bottom: 0;\n}\n\n.app-view-box + footer {\n  padding: 0;\n  opacity: 0.5;\n}\n\n#sohuplayer #menu {\n  z-index: 2147483647;\n}"
    }, {
      name: "乐视·搜索",
      match: /m.le.com\/search|so.le.com\/s/,
      jump: ".column_tit | before, .Relate | before"
    }, {
      name: "乐视·播放页",
      match: /\.le\.com\/(ptv\/vplay\/|vplay_)/,
      vip: ".introduction_box, .briefIntro_left .info_list",
      title: ".briefIntro_info .info_tit, #j-introduction h2",
      fixUrl: !0,
      hide: ".gamePromotion, .gamePromotionTxt, #j-leappMore, .lbzDaoliu, .arkBox"
    }, {
      name: "咪咕.cn·搜索",
      match: /\.migu\.cn\/search\.html/,
      jump: ".pagination, .copyright | before",
      keyword: /content=([^&\?\/\.]+)/,
      hide: ".down-btn"
    }, {
      name: "咪咕·搜索",
      match: /\.miguvideo\.com\/.*search.html/,
      jump: ".search-pagination, .search-main",
      keyword: /keywords=([^&\?\/\.]+)|\?.*#([^&\?\/\.]+)/
    }, {
      name: "咪咕·播放页",
      match: /miguvideo\.com\/.+\/detail\.html/,
      vip: ".playerFooter, .programgroup",
      title: ".left-box .title, .episodeTitle, .video_title",
      hide: '.group-item[name*="广告"], .openClient'
    }, {
      name: "PPTV·搜索",
      match: /sou.pptv.com\/s_video.+kw=|msou.pptv.com\/s_video\/.+keyword=/,
      jump: ".pagination, .zhengpian-box | append"
    }, {
      name: "PPTV·播放页",
      match: /(v|m)\.pptv\.com\/show\//,
      vip: ".m .cf, .vod-tit, .vod-intor",
      title: "#video-info h1, .vod-tit-in span, .tit",
      fixUrl: !0,
      hide: '.w-video-vastad, #video-download-game, div[class*="openapp"], div[class*="side-adv"], div[id*="afp_"], div[id*="-afp"], iframe[src*="/game/"], .afpPosition, .download-iconbar'
    }, {
      name: "华数·搜索",
      match: /wasu\.cn\/.+Search\/.+k=/,
      jump: "#topVod"
    }, {
      name: "华数·播放页",
      match: /wasu\.cn\/.*[pP]lay\/show\//,
      vip: ".movie_title",
      title: ".movie_title h2",
      fixUrl: !0,
      hide: 'div[id*="BAIDU"], .player_menu_con, body > div[style*="fixed"]'
    }, {
      name: "1905·搜索",
      match: /\.1905\.com\/(Search|search