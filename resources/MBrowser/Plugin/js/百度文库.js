// ==UserScript== 
// @name   百度文库
// @description  
// @run-at   context-menu
// ==/UserScript==





/*
 * @name: 百度文库下载
 * @Author: 谷花泰
 * @version: 2.0
 * @description: 跳转到第三方网站下载文库文档
 * @include: *
 * @createTime: 2019-10-04 01:47:08
 * @updateTime   : 2020-02-06 03:06:22
 */
(function () {
  /* 判断是否该执行 */
  const whiteList = ['wenku.baidu.com', 'wk.baidu.com'];
  const hostname = window.location.hostname;
  const key = encodeURIComponent('谷花泰:百度文库直接下载:执行判断');
  const canLoad = whiteList.some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };
    return false;
  });

  if (!canLoad || window[key]) {
    return;
  };
  window[key] = true;

  /* 开始执行代码 */
  class DownloadDocuments {
    constructor() {
      /* example: http://wenku.baidu.com/view/f1e1b912571252d380eb6294dd88d0d233d43cd1.html*/
      this.init();
    };
    init() {
      const bar = document.querySelector('.bottom-bar-container');
      bar.style.display = 'none';
      const downBtn = document.createElement('div');
      downBtn.setAttribute('style', `
        width: 100vw;
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3));
      `);
      downBtn.innerHTML = `
        <div style="
          line-height: 44px;
          background-color: #1CB584;
          height: 44px;
          width: 95%;
          border-radius: 5px;
          text-align: center;
          color: #FFF;
          margin: 0 auto;
        ">插件脚本：下载此文档</div>
      `;
      downBtn.addEventListener('click', () => {
        location.href = `http://www.html22.com/d/?url=${location.href}`;
      });
      document.body.appendChild(downBtn);
    }
  };

  try {
    if (document.readyState === 'complete') {
      new DownloadDocuments();
      return;
    };
    window.addEventListener('load', () => {
      new DownloadDocuments();
    });
  } catch (err) {
    console.log('百度文库插件出错: ', err);
  };
})();