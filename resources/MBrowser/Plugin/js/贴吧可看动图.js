// ==UserScript== 
// @name   贴吧看高清图
// @run-at   context-menu
// ==/UserScript==
/*
* @name: tieba page
* @Author: 油猴 fthvgb1
* @version: 0.60
* @description: 查看楼中楼，显示楼层、 只看楼主、帖子列表热门讨论直接进入，显示动态图。
* @include: *
*/
(function () {
const script = document.createElement('script');
script.setAttribute('src', ' https://greasyfork.org/scripts/390510-tieba-page/code/tieba%20page.user.js'); 
document.body.append(script);
})();