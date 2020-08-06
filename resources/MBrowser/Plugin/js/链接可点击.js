// ==UserScript== 
// @name   链接可点击
// @description  
// @match   *
// @require   file:///meta_webapp/1583310084.js
// @run-at   document-end
// ==/UserScript==


// @run-at  document-start
/*
 * @name: 让链接可点击
 * @Author: 谷花泰
 * @version: 1.0
 * @description: 不用再复制链接打开这么麻烦了
 * @include: *
 * @createTime: 2019-11-12 13:47:41
 * @updateTime: 2019-11-16 23:04:54
 */
(function () {
  /* 判断是否该执行 */
  /* 网址黑名单制，遇到这些域名不执行 */
  const blackList = ['example.com'];

  const hostname = window.location.hostname;
  const key = encodeURIComponent('谷花泰:让链接可点击:执行判断');
  const isBlack = blackList.some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };
    return false;
  });

  if (isBlack || window[key]) {
    return;
  };
  window[key] = true;

  class ClickLink {
    constructor() {
      this.init();
    };
    init() {
      document.head.innerHTML += `
        <style>
          .via-link {
            color: #00c !important;
            cursor: pointer;
          }
        </style>
      `;
      this.listenNode();
      document.body.addEventListener('click', (e) => {
        if (Array.from(e.target.classList).includes('via-link')) {
          window.location.href = e.target.dataset.viaLink;
        }
      }, false);
    };
    observe({ targetNode, config = {}, callback = () => { } }) {
      if (!targetNode) {
        return;
      };

      config = Object.assign({
        attributes: true,
        childList: true,
        subtree: true
      }, config);

      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    };
    getTextNode(elm) {
      let node;
      const nodes = [];
      const walk = document.createTreeWalker(elm, NodeFilter.SHOW_TEXT, null, false);
      while (node = walk.nextNode()) {
        nodes.push(node);
      };
      return nodes;
    };
    markLink(_elm) {
      const elm = _elm || document.body;
      const textNodes = this.getTextNode(elm);
      const linkReg = /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;
      /* const linkReg = /(([\w\d\.]|\:\/\/)+?\.[\w\d\.]+)(\/[\x21-\x7e]*)?/gi; */
      for (let i = 0; i < textNodes.length; i++) {
        const textNode = textNodes[i];
        const parentNodeName = textNode.parentNode.nodeName.toLowerCase();
        if (['script', 'style'].includes(parentNodeName)) {
          continue;
        };
        const linkMatchResult = textNode.textContent.match(linkReg);
        if (!linkMatchResult || linkMatchResult.length === 0) {
          continue;
        };

        let link = linkMatchResult[0];
        if (!(/\:\/\//gi.test(link))) {
          link = 'http://' + link;
        };
        textNode.parentNode.dataset.viaLink = link;
        textNode.parentNode.classList.add('via-link');
      };
    };
    listenNode() {
      let that = this;
      this.observe({
        targetNode: document.documentElement,
        config: {
          attributes: false
        },
        callback(mutations, observe) {
          that.markLink();
        }
      })
    };
  };

  try {
    new ClickLink();
  } catch (err) {
    console.log('让链接可点击：', err);
  };
})();