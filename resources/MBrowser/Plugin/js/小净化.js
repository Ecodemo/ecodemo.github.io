// ==UserScript== 
// @name   小净化
// @description  
// @match   *
// @require   file:///meta_res/1563586713.js
// @run-at   document-end
// ==/UserScript==


/*小净化*/function clearAds(elm, array_url) {
    var isUrl = false;
    for (var x = 0; x < array_url.length; x++) {
        if (location.href.match(array_url[x])) {
            isUrl = true;
        };
    };
    if (isUrl) {
        var head = document.getElementsByTagName('head')[0];
        var myStyle = document.createElement('style');
        myStyle.type = "text/css";
        myStyle.innerHTML = elm + "{display:none !important;visibility:hidden !important;width:0 !important;height:0 !important;}";
        head.appendChild(myStyle);
    };
};
clearAds(".appTips,aside.tips", ["weibo.cn"]);
clearAds(".index__openBtn__src-commonComponent-openBtn-,.index__openAppBtn__src-commonComponent-topArea-,.index__openAppBtn__src-videoPage-openAppBtn-,.index__downLoadBtn__src-videoPage-commentArea-", ["bilibili.com"]);
clearAds("div#index-card>div:last-child,.baiduapp-ad-body", ["m.baidu.com", "www.baidu.com"]);
clearAds(".scroll-content>div[dpr]", ["taobao.com"]);
clearAds("div[data-stat-role],div#banner,div[sourcetype],div[data-spm]", ["youku.com"]);
clearAds("div[data-node],div.header-app,div.m-box-items[data-component],div.iqy-items[glue-component='page.home.fragment.focusMap'],[glue-node=ad]", ["iqiyi.com"]);
clearAds("div.topfr,div.ftwrap,div.footer-wrap,div.u-footer",["music.163.com"]);
clearAds("div.download-app,div.js-downloadApp,div.download-box",["m.kugou.com"]);
clearAds("div.download,div.open_app,div.topAppWrap",["m.kuwo.cn"]);
clearAds(".btn_download,div.top_bar",["y.qq.com"]);
clearAds("#tip-download,.btn-download,.not-in-live>p,.download",["m.panda.tv"]);
clearAds(".h5_footer,.app_open,div.gift_block",["chushou.tv"]);
clearAds(".u-btn-down,#globalRightSide",["m.huya.com"]);
clearAds("#js-fix-download,.btn-open-app,.download,.layout-ball,div.get-gift-box",["m.douyu.com"]);
clearAds(".scroll-download,div[data-cate=zhaomu],[data-label=h5-dw-app],[data-label=topbar-login],.footer-item-1",["m.longzhu.com"]);
clearAds(".MobileAppHeader-downloadLink,.OpenInApp,.OpenInAppButton",["zhihu.com"]);
clearAds("div.download.clearfix,div.download-box,div.order-box",["yinyuetai.com"]);