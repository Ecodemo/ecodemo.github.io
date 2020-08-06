// ==UserScript== 
// @name   IT之家去广告
// @description  
// @match   m.ithome.com
// @run-at   document-start
// ==/UserScript==




(function() {
    'use strict';

    $(".open-app-banner").remove();
    $(".open-app").remove();
    $("div[class='news-class']").remove();
    $(".main-site").remove();//去除文章内容中的购物链接
    removeIthomeAds();

    window.addEventListener("scroll", function() {
        removeIthomeAds();
        removeIthomeArticleAds();
    })
})();

function removeIthomeArticleAds() {
    $(".down-app-box").remove();
    $("div[class='relevant-news']").remove();
    $("div[class='hot-app']").remove();
    $("div[class='ggp-promotion']").remove();
    $("div[class='grade']").remove();
    $("div[id='bd-share-box']").remove();
    $("div[class='lapin']").remove();
    $("div[class='ruanmei-footer']").remove();
}

function removeIthomeAds() {
    var spans1 = $("span[class='tip-suggest']");
    spans1.each(function() {
        $(this).closest("div.placeholder").remove();
    });

    var spans2 = $("span[class='tip tip-gray']");
    spans2.each(function() {
        $(this).closest("div.placeholder").remove();
    });

    var spans3 = $("span[class='tip tip-green']");
    spans3.each(function() {
        $(this).closest("div.placeholder").remove();
    });

    var p1 = $("p[class='plc-title']");//删除标题关键字
    p1.each(function() {
        if($(this).text().match("福包") || $(this).text().match("大促") || $(this).text().match("开售") || $(this).text().match("预约") || $(this).text().match("限免") || $(this).text().match("精选") || $(this).text().match("限时")|| $(this).text().match("节")|| $(this).text().match("抢")) {
            $(this).closest("div.placeholder").remove();
        }
    });


}