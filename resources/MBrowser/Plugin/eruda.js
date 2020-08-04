// ==UserScript== 
// @name   Eruda
// @description  Eruda 是一个专为手机网页前端设计的调试面板，类似 DevTools 的迷你版，其主要功能包括：捕获 console 日志、检查元素状态、捕获XHR请求、显示本地存储和 Cookie 信息等等。
// @run-at   context-menu
// ==/UserScript==


(function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();