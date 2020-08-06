// ==UserScript== 
// @name   Pure百度美化
// @description  一个非常漂亮的百度质感美化皮肤
// @run-at   document-end
// ==/UserScript==







(function () {
  const whiteList = ["m.baidu.com", "www.baidu.com", "wapbaike.baidu.com", "baike.baidu.com", "http://m.baidu.com/?tn=simple", "https://m.baidu.com/?tn=simple", "mbd.baidu.com", "pae.baidu.com", "baijiahao.baidu.com", "haokan.baidu.com", "mobile.baidu.com", "zhidao.baidu.com", "wk.baidu.com", "fanyi.baidu.com", "jingyan.baidu.com"];
  const hostname = window.location.hostname;
  const key = encodeURIComponent('酷安搜CWorld:Pure百度美化:执行判断');
  const canLoad = whiteList.some(url => {
    if (url.match(hostname)) {
      return true;
    };
    return false;
  });

  if (!canLoad || window[key]) {
    return;
  };
  window[key] = true;

  if (["m.baidu.com", "www.baidu.com", "wapbaike.baidu.com", "baike.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /**广告**/

/*------以下内容为可选，选择文字后按 Ctrl+SHift+/ 即可更改------*/

/*首页实时热点*/

/* #hotwordlist{display: none !important;} */

/*搜索页小视频*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="xsp"] {
  display: none !important;
}

/*搜索页热议（集成微博）*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="realtime_ugc"] {
  display: none !important;
}

/*搜索页采购*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="b2b"] {
  display: none !important;
}

/*搜索页招聘*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="baipin"] {
  display: none !important;
}

/*搜索页小程序*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="mini_program"] {
  display: none !important;
}

/*搜索页小程序*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="notes"] {
  display: none !important;
}

/*百度百科 猜你关注*/

.baike-app-view .theme-container {
  display: none !important;
}

/*百度百科 TA说*/

.baike-app-view .tashuo-list {
  display: none !important;
}

/*------以下内容请勿改动------*/

#header > div:last-child {
  padding-bottom: 0 !important;
  opacity: 0 !important;
  height: 0 !important;
}

.ns-square-point,
.ts-image-uploader-icon-point,
a.index-banner.square-banner-bgicon,
.news-container,
.banners a[href="https://m.baidu.com/l=1/tc?logid=2598984798&from=0&ref=index_iphone&nsrc=IlPT2AEptyoA_yixCFOxCGZb8c3JV3T5AB3ORS5K1De8mVjte4viZQRAUj0sNTrIBTLS5GOChAJ-iyubKk2t7gV1mv5wgjN6jiHwdsjqea&bdenc=1&ct=10&cst=2&logFrom=operatebanner&logInfo=1"],
.square-hot-container,
.se-ft-promlink,
.hudong-btn,
.sfc-image-content-mediacy-slider-toolbar-download-tips,
._1k19YN3-qdVhoYpBLDMjYV,
.commentEmbed-backHomeCard,
.ec_wise_ad_card div,
.hint-fold-results-box .hint-text,
.banner-item a {
  display: none !important;
}

/**配色**/

.menu-container .menu-item.current {
  color: #5892e3;
}

.mui-switch.mui-switch-animbg:checked,
.menu-container .menu-item.current span,
.ivk-button.ivk-button-popup {
  background-color: #5892e3;
}

/**动画**/

.menu-item a:hover {
  transition: 0.3s;
}

/**细节调整**/

/*卡片*/

.c-result.result,
.rec-item,
.user-listview .panel,
.c-result,
.sfc-image-content-waterfall-vertical .sfc-image-content-waterfall-item,
.sfc-realtime .c-infinite-scroll > div,
.new-pagenav,
.se-relativewords,
.video-cell {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

.icard:active {
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px #0000003d;
}

.c-container {
  margin: 0;
}

.sfc-image-content-waterfall-vertical .sfc-image-content-waterfall-item {
  margin: 3px 0 0;
  border-radius: 2px;
}

.new-pagenav,
.se-relativewords {
  margin: 6px 5px !important;
}

.video-cell {
  padding: 0 0.17rem 0.1rem 0.17rem !important;
}

/*首页*/

.tab_news .tab-news-content {
  background-color: #00000005;
}

.menu-container.showtabs {
  box-shadow: 0 2px 10px #0000001f;
}

.sf-container .sf-header {
  background: #fff;
  border-bottom: 0;
}

.searchbox-exp #index-form,
.his-wrap-new #index-form .index-fix,
.se-form,
.his-wrap-new .index-fix {
  transition: 0.3s;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  border: none;
  overflow: visible;
  background: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

.searchbox-exp #index-form:focus,
.his-wrap-new #index-form .index-fix:focus,
.se-form:focus {
  box-shadow: 0 2px 5px #0000003b;
}

.searchbox-exp #index-bn {
  transition: 0.3s;
  color: #fff;
  border-radius: 0 5px 5px 0;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

.searchbox-exp #index-bn:active {
  background: #4879bd !important;
}

.newHisBtn {
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  border: none;
}

.rn-three-pic-wrap {
  margin-right: 3px;
}

.rn-three-pic-wrap img {
  transition: 0.3s;
  border-radius: 3px;
}

#hotwordlist,
#hotwordlist .hotword-container {
  background: #fff0;
}

.his-wrap-new #index-form .his,
.his-wrap-new #index-form .sug {
  border-bottom: 1px solid #00000005;
}

.menu-container .menu-item span {
  width: 40px;
  height: 4px;
  border-radius: 3px 3px 0 0;
}

.se-tablink-scroll-wrapper .se-tab-cur:after {
  border-bottom: 0;
  background-color: #5892e3;
  height: 3px;
  border-radius: 2px 2px 0 0;
}

.news-item-div {
  background: #fff0;
  padding-top: 0;
}

.rn-channelMgr#channel_mgrview .channel-content .channel-item .name,
.rn-channelMgr#channel_offline .channel-content .channel-item .name {
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

.user-listview .panel li:nth-child(1),
.user-listview .panel li:nth-child(2),
.user-listview .panel li:nth-child(3),
.user-listview .panel h2,
.user-listview .panel li {
  border: none;
}

.user-listview .panel ul {
  background-color: #00000005;
  margin-bottom: 0;
}

.filter-panel-confirm {
  background: #5892e3;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 10px #5892e354;
}

.filter-panel-reset {
  background: #0000000f;
  border: none;
  border-radius: 5px;
  height: 0.38rem;
  line-height: 0.38rem;
  margin-right: 0.08rem;
}

.se-tab-lists.c-flexbox {
  width: 200% !important;
}

.se-head-tablink {
  background: #fff0;
}

.his-wrap-new {
  background: #eee;
}

.suggest-div {
  top: 15px !important;
  right: 0;
  left: -0.14rem;
  padding: 0 0.1rem;
  border: 0;
  border-top: none;
}

.his-wrap-new .suggest-feedback {
  border-top: none;
  background-color: #fff0;
}

/*百度搜索 展开全部内容*/

.hint-fold-results-box {
  display: none;
}

div#page-relative,
div#page-controller {
  display: block;
}

#results,
.se-page-bd,
section.hint-fold-results-wrapper.hint-no-fold {
  height: 100%;
}

/*设置*/

.user-setting li {
  border-bottom: 0;
}

.mui-switch {
  width: 40px;
  height: 15px;
  border: none;
  box-shadow: none;
  border-radius: 20px;
  right: 16px;
  top: 28px;
  background-color: rgba(0, 0, 0, 0.1);
}

.mui-switch:before {
  content: "";
  width: 24px;
  height: 24px;
  top: -5px;
  left: -5px;
  border-radius: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.23);
}

/*文章*/

.packupButton,
.bottomMargin {
  display: none;
}

.mainContent {
  height: 100% !important;
}

/*------百度百科------*/

/*广告*/

.baike-app-view .declare,
.baike-app-view .topbar .top-icon.spark-icon,
.JiyxvaTlnAg0,
ul#VpwCdqhH5,
.baike-app-view .catalog-tip.show,
.baike-app-view .button-fixed.tashuo-button-fixed,
.YWgIycS0,
ul#yjgRTqXU9,
div#nOrlCV6,
ul#ksAabJ7 {
  display: none !important;
}

/*颜色*/

/*卡片*/

.baike-app-view .qtqy-container,
.baike-app-view .movie-actor,
.baike-app-view .movie-video,
.baike-app-view .movie-photo,
.baike-app-view .movie-comment {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

.baike-app-view .qtqy-container {
  position: relative;
  top: 5px;
  left: -7px;
  width: 100%;
  padding: 7px;
  margin: 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

/*细节优化*/

.baike-app-view .button-fixed {
  border: none;
  background: #fff0;
  box-shadow: none;
  color: #000;
  width: 0.44rem;
  height: 0.44rem;
  line-height: 0.38rem;
  font-size: 0.24rem;
  border-radius: 50%;
  bottom: auto;
  right: 100px;
}

.baike-app-view .yx-load-more-flow .yx-load-more-inner {
  background: #fff;
  border: none;
  border-radius: 19px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.23);
}

.baike-app-view .ui-suggestion ul li {
  border-bottom: 1px solid #00000008;
  padding: 0;
}

.baike-app-view .ui-suggestion .ui-suggestion-button {
  border-bottom: none;
  background: #f8f8f8;
  height: 0.45rem;
  overflow: hidden;
}

.baike-app-view .extra-info-n .extra-list-item.extra-polysemant .more-means {
  border: none;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px #0000003b;
  color: #5892e3;
  padding: 8px 15px;
}

.baike-app-view
    .extra-info-n
    .extra-list-item.extra-polysemant
    .more-means-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
          </style>
        `;
  };

  if (["http://m.baidu.com/?tn=simple", "https://m.baidu.com/?tn=simple"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .tab_news .tab-news-content,
.s-loading-frame.bottom .bottom-load-before {
  display: none !important;
}

#logo {
  padding-bottom: 200px !important;
}

.searchbox-exp #index-form {
  margin-bottom: 200px !important;
}
          </style>
        `;
  };

  if (["mbd.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.icard .icard-float-point .icard-point-img {
  display: none !important;
}

/*配色*/

.ccard-nav .selected:before,
.follow-no {
  background-color: #5892e3;
}

/*动画*/

.icard-ttcont,
.ccard-nav-text {
  transition: 0.3s;
}

/*细节调整*/

#cardbox {
  background-color: #00000005;
}

.icard {
  transition: 0.3s;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px #dfdfdf;
  border-radius: 5px;
}

.icard:active {
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px #0000003d;
}

.cardHeaderBar,
.ccard-hd {
  box-shadow: 0 2px 10px #0000001f;
}

.icard-btn {
  transition: 0.3s;
  border-radius: 100px;
}

.icard-btn:hover {
  background-color: #0000000f;
}

.icard-btn:active {
  background-color: #00000017;
}

.ccard-nav .selected {
  box-shadow: 0 2px 10px #5892e31f;
}

.mainContent {
  height: 100% !important;
}

.commentEmbed-backHomeCard,
.packupButton {
  display: none !important;
}

._3JB0JD_e7aW8naKy7Bz-kE ul li {
  position: relative;
  z-index: 999;
}
          </style>
        `;
  };

  if (["pae.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

/*配色*/

/*动画*/

.icard-ttcont,
.ccard-nav-text {
  transition: 0.3s;
}

/*细节调整*/

.fav-head {
  background-color: #fff;
  color: #5892e3;
  box-shadow: 0 2px 10px #0000001f;
}
          </style>
        `;
  };

  if (["baijiahao.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.contentMedia .openImg {
  display: none !important;
}

/*配色*/

/*动画*/

m {
  transition: 0.3s;
}

/**细节调整**/

/*文章*/

.mainContent {
  height: 100% !important;
}

.packupButton.packupButton3 {
  display: none !important;
}

._1k19YN3-qdVhoYpBLDMjYV {
  transition: 0.3s;
  opacity: 0.5;
  background-color: rgba(51, 136, 255, 0.95);
  box-shadow: none;
}

._1k19YN3-qdVhoYpBLDMjYV {
  opacity: 1;
  background-color: rgba(51, 136, 255, 0.95);
  box-shadow: 0 1px 10px 1px rgba(59, 107, 174, 0.2);
}

._1k19YN3-qdVhoYpBLDMjYV ._2v86xffLyWbTz5nRDFr_L_ {
  transition: 0.3s;
  width: 0;
  padding-right: 0;
}

._1k19YN3-qdVhoYpBLDMjYV:hover ._2v86xffLyWbTz5nRDFr_L_ {
  transition: 0.3s;
  width: auto;
  padding-right: 8px;
}

/*个人*/

.s-avatar-lg {
  overflow: visible;
  border-radius: 100%;
  box-shadow: 0 2px 10px #0000001f;
}

.s-tabs-wrap.s-tabs-wrap-hairline.s-tabs-wrap-scrollable.s-tabs-suctop.nav-wrap {
  box-shadow: 0 2px 10px #0000001f;
}
          </style>
        `;
  };

  if (["haokan.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.rmb-carsousel-position-top,
.extraDiv,
.link-tpl-container,
.rmb-growth-common-tpl-1-wrapper,
.eye-catching-feeditem,
.commentEmbed-backHomeCard {
  display: none !important;
}

/*配色*/

/*动画*/

m {
  transition: 0.3s;
}

/**细节调整**/

.mod-play1er .play1er {
  position: fixed;
  top: 0 !important;
  left: 0;
  right: 0;
  background: #000;
  z-index: 99;
}
          </style>
        `;
  };

  if (["mobile.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.detail-card-app .logo-wrap,
button.c-btn.btn.c-btn--primary,
.detail-download-layer .detail-modal .modal-container .modal-footer .safe,
section.detail-appsearch-button,
.detail-card-comment .comment-link,
a[href="/item?pid=825114773&f0=home_homeHeader%400"] {
  display: none !important;
}

/*配色*/

/*卡片*/

section.card-wrap.home-card-recommend,
section.card-wrap.home-card-normal,
section.card-wrap.detail-card-comment,
section.card-wrap.detail-card-dev,
section.card-wrap.detail-card-recommend,
.cate-content .cate-item {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

/*动画*/

a {
  transition: 0.3s;
}

/**细节调整**/

span.normal-down {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px 13.5px 3px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  font-size: 13px;
  position: relative;
  margin: 0 auto;
  width: 289px;
  line-height: 18px;
  height: 37px;
  padding-top: 7px;
  padding-bottom: 9px;
  color: #fff !important;
  background-image: -webkit-linear-gradient(55deg, #25cdff, #467bf3);
  background-image: linear-gradient(35deg, #25cdff, #467bf3);
  background-color: #467bf3;
}

.detail-download-layer .detail-modal .modal-container .modal-body {
  height: 1px;
  opacity: 0;
}
          </style>
        `;
  };

  if (["zhidao.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.iknow-root-dom-element .doodle-container.show,
.iknow-root-dom-element #iknow-common-header .dib.msg-new-ico:after,
.iknow-root-dom-element
    #iknow-common-header
    .iknow-msg-list
    .msg-list
    .ico-msg.msg-new-ico:after,
.iknow-root-dom-element .icon-bdad,
.iknow-root-dom-element .feed-recommend.mm-content-box {
  display: none !important;
}

/*配色*/

/*卡片*/

ul#home-list-container li,
.new-search-list.w-list .w-solved-list-li {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

.home-list ul#home-list-container li {
  margin: 6px 5px 0;
  padding: 0 10px;
}

.home-list.home-mod,
.home-list #home-list-container {
  background: #00000005;
}

/*动画*/

a {
  transition: 0.3s;
}

/*展开*/

.iknow-root-dom-element .w-detail-full .w-detail-display-btn {
  display: none !important;
}

.iknow-root-dom-element .w-detail-full .w-detail-container {
  max-height: initial !important;
}

/**细节调整**/

.iknow-root-dom-element #iknow-common-header {
  box-shadow: 0 2px 5px #0000001f;
}

.pannel {
  background-color: #00000005;
  padding: 0;
}

.new-search-list.w-list .w-solved-list-li {
  padding: 10px;
}

.wm-wrapper {
  padding-left: 20px;
}
          </style>
        `;
  };

  if (["wk.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

nav.ui-nav-container#ui-nav ul li a .new-item,
.ui-toolbar .ui-toolbar-right > button.icon-app,
.sf-edu-wenku .top-bar-root > .wk-container .right-panel > button.btn-vip,
.sf-edu-wenku .bottom-bar-container,
.sf-edu-wenku .top-doc-info-root .btn-view-in-app,
.sf-edu-wenku .gain-doc-block-root,
.sf-edu-wenku .guidetowkappwg-root,
.sf-edu-wenku .vip-guide-contanier,
.sf-edu-wenku .rec-text-root .rec-list li div.doc-see-in-app,
.sf-edu-wenku
    .bottombarwg-root
    .bottombarwg-root-bottom
    .handel-box
    .wangpan-area
    .vip-icon-super {
  display: none !important;
}

/*配色*/

/*卡片*/

.searchList .search-li,
.searchList .kg-search-li,
.searchList .op-search-li {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

/*动画*/

a {
  transition: 0.3s;
}

/**细节调整**/
          </style>
        `;
  };

  if (["fanyi.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.fanyi-sfr-container .app-guide,
a.app-bar,
.fanyi-sfr-container .article,
section.bottom-intro,
.fanyi-sfr-container .extend-title-inner .usecase-title::after {
  display: none !important;
}

/*配色*/

.fanyi-sfr-container .setting-container .setting-header {
  background: #5892e3;
}

/*卡片*/

.fanyi-sfr-container .translang,
.fanyi-sfr-container .translatein,
.fanyi-sfr-container .trans-btn,
.fanyi-sfr-container .sug-wrap {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

/*动画*/

a {
  transition: 0.3s;
}

/**细节调整**/

.fanyi-sfr-container .sug-box:first-child {
  border-top: none;
}

.fanyi-sfr-container .sug-box {
  border-bottom: 1px solid #0000000d;
}

.fanyi-sfr-container.with-middle-app-bar .translatein {
  margin-bottom: 6px;
}

.fanyi-sfr-container .extend-style {
  border-bottom: 0;
  height: 48px;
}

.fanyi-sfr-container.with-middle-app-bar .extend-output {
  z-index: 99;
  box-shadow: 0 0 10px #0000005c;
  border-radius: 8px 8px 0 0;
}
          </style>
        `;
  };

  if (["jingyan.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.main-nav .lk-btn,
.wgt-ad-guess {
  display: none !important;
}

/*配色*/

.wgt-sub-nav a.act,
.h2,
.expDlList em,
.wgt-exp-content .go-to-step-text {
  color: #2db68a;
}

#navigation,
.wgt-toolbar2,
.origin-ico,
.good-ico,
.wgt-exp-head .article-feed-header .article-feed-btn {
  background: #2db68a;
}

.wgt-sub-nav a.act,
.origin-ico,
.good-ico {
  border-color: #2db68a;
}

/*卡片*/

ul.good-mag.clr li,
.rec-list li,
.usr-nav,
.ui-suggestion,
#excellentTab .expDlList li,
.content-box,
.wgt-rel-exp-feed {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

/*动画*/

a {
  transition: 0.3s;
}

/**细节调整**/

body {
  background-color: #fbfbfb;
}

.read-whole-mask {
  display: none !important;
}

.exp-content-container.fold {
  overflow: hidden;
  max-height: 100% !important;
}

#navigation,
.wgt-toolbar2 {
  border: none;
}

.main-nav .btn {
  border: none;
  background-color: #ffffff1c;
  top: 6px;
  left: 10px;
}

.wgt-sub-nav .wp {
  background: #fff;
}

ul.good-mag.clr li {
  width: 47.61%;
  height: 167px;
  margin: 0 3px;
}

.category-wrapper {
  padding: 11px 11px 0 11px;
  overflow: hidden;
  border-radius: 5px;
}

.search-input,
.wgt-toolbar2 .input-btn-search {
  transition: 0.3s;
  border: none;
  -webkit-box-shadow: 0 2px 5px #0000001a;
  background-color: #fff;
  border-radius: 5px;
}

.search-input:focus {
  -webkit-box-shadow: 0 2px 5px #00000026;
  background-color: #fff;
  border-radius: 5px;
  outline: none !important;
}

.search-input input {
  outline: none !important;
}

.search-button {
  border: none;
}

.search-button input {
  border: none;
  border-radius: 0 5px 5px 0 !important;
  background: #2db68a;
  color: #fff;
}

.flat-footer,
#footer {
  border: none;
}

.usr-img {
  padding: 0;
  overflow: hidden;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: none;
}

.usr-nav li,
.usr-nav {
  border: none;
}

.search {
  position: relative;
  padding: 5px 5px 6px;
  background: #fff0;
  border-bottom: none;
  -webkit-box-shadow: inset 1px 1px 1px #fff;
}

.ui-suggestion,
#excellentTab .expDlList li {
  border: none;
  background-color: #fff;
  margin: 5px 0;
}

.wgt-exp-copyright .wp {
  padding-left: 15px;
}
          </style>
        `;
  };
  document.head.innerHTML += `
        <style>
          
        </style>
      `;
})();
