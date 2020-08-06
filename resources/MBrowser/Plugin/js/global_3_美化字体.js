// ==UserScript==
// @name         质感字体&&页面平滑滚动
// @namespace    http://svnzk.github.io/
// @version      0.11
// @description  让每个页面的字体变得有质感 页面滚动更平滑 字体换为萍方字体并添加字体阴影
// @author       svnzk
// @match        *://*/*
// @run-at       document-start
// @require      https://cdn.bootcss.com/smoothscroll/1.4.9/SmoothScroll.min.js
// @grant        none
// ==/UserScript==
//2019-09-16 更新 v0.11 :  [新增] 添加 Heiti SC 字体 [新增] icomoon 图标 [修复]修复一些使用防盗字体的网站
(function() {
var font_style = document.createElement("style");
    font_style.type = 'text/css';
    font_style.innerHTML = " *:not([class*='icon']):not(.fa):not(.fas):not(i) {font-family: 'PingFang SC','Heiti SC','myfont','Microsoft YaHei','Source Han Sans SC','Noto Sans CJK SC','HanHei SC', 'sans-serif' ,'icomoon','Icons' ,'brand-icons' ,'FontAwesome','Material Icons','Material Icons Extended','Glyphicons Halflings'  !important;} *{text-shadow:1px 1px 10px #c3c3c3 !important; font-weight:bold !important;font-family: 'PingFang SC','Microsoft YaHei';}";
document.head.append(font_style);
})();