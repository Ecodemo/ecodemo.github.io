// ==UserScript==
// @name         觅影
// @version      20.3.22
// @author       (o˘◡˘o)
// @description  平平无奇的原网页解析VIP视频
// @note         最近更新：优化嗅探，提升解析成功率；改进远程 css 文件加载；增加解析
// @namespace    (o˘◡˘o)
// @supportURL   https://gitee.com/ecruos/oo
// @icon         https://p.pstatp.com/origin/fe690000c9141955bbac
// @license      GPL License
// @include      *
// ==/UserScript==

!async function() {
  function Is(n) {
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Href;
    return n.test(o.replace(/=http[^&]+/, ""));
  }
  function IsNot(n, o) {
    return !Is(n, o);
  }
  function magicNumber(n) {
    return Number(n) + (n % 2 == 1 ? -1 : 1);
  }
  function magicLetter(n) {
    return numToChar(magicNumber(charToNum(n)));
  }
  function magicChar(n) {
    return /[a-z]/.test(n) ? magicLetter(n) : /\d/.test(n) ? magicNumber(n) : "";
  }
  function magicString(n) {
    return n.split("").reverse().map((function(n) {
      return magicChar(n);
    })).join("");
  }
  function magicSource(n) {
    return n.match(/\w+/g).forEach((function(o) {
      n = n.replace(o, magicString(o));
    })), n;
  }
  function getCache(n) {
    try {
      const o = JSON.parse(window.localStorage.getItem(cachePrefix + n));
      return o.data ? o : null;
    } catch (n) {
      return null;
    }
  }
  function setCache(n, o) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VERSION;
    !o || window.localStorage.setItem(cachePrefix + n, JSON.stringify({
      data: o,
      version: e
    }));
  }
  function getCdnUrl(n) {
    return "https://cdn.bootcss.com" + n;
  }
  async function fetchCdnUrl(n, o) {
    let e, i;
    const t = /^\/\w/.test(n);
    if (n = t ? getCdnUrl(n) : n, console.log("fetchCdnUrl:", n), !o && t) {
      const o = n.match(/cdn.bootcss.com\/([^\/]+)\/([^\/]+)\/.+(\.\w+)$/);
      e = o[1] + o[3], i = o[2];
    } else e = o.name || n, i = o.version || VERSION;
    const a = getCache(e);
    let r;
    return r = a && a.version === i ? a.data : await window.fetch(n).then((function(n) {
      return n.text();
    })).then((function(n) {
      return setCache(e, n, i), n;
    })), r;
  }
  async function addJs(url, opts) {
    const data = await fetchCdnUrl(url, opts);
    return eval(data);
  }
  async function addCssUrl(n) {
    addCss(await fetchCdnUrl(n));
  }
  function addCss(n) {
    let o;
    return /^(http|\/)/.test(n) ? addCssUrl(n) : (n = n.replace(/\n+\s*/g, " "), o = document.createElement("style"), 
    o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), 
    o.type = "text/css", void document.getElementsByTagName("head")[0].appendChild(o));
  }
  function $$(n, o) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return 0 === $(n).length ? void (e > 100 ? log("× waitToRun:", n, "warn") : setTimeout((function() {
      waitToRun(n, o, e + 1);
    }), 100)) : (log("✔ waitToRun:", n), void $((function() {
      o();
    })));
  }
  function uuid() {
    let n = 46656 * Math.random() | 0, o = 46656 * Math.random() | 0;
    return n = ("000" + n.toString(36)).slice(-2), o = ("000" + o.toString(36)).slice(-3), 
    "o" + n + o;
  }
  function emitter(n) {
    return n = n || Object.create(null), {
      on(o, e) {
        (n[o] || (n[o] = [])).push(e);
      },
      off(o, e) {
        n[o] && n[o].splice(n[o].indexOf(e) >>> 0, 1);
      },
      emit(o, e) {
        (n[o] || []).slice().map((function(n) {
          n(e);
        })), (n["*"] || []).slice().map((function(n) {
          n(o, e);
        }));
      }
    };
  }
  function log() {}
  function fixUrl(n) {
    return n.replace(/[\?#].+/g, "");
  }
  function fixVipUrl(n) {
    const o = BETTER_ADDONS.find((function(o) {
      return o.fixUrl && o.match.test(n);
    }));
    return o ? !0 === o.fixUrl ? fixUrl(n) : o.fixUrl(n) : n;
  }
  function toUrlRegex(n) {
    return new RegExp(n.map((function(n) {
      return n.replace(/.+\/\/|\/.+/g, "").replace(/\./g, "\\.");
    })).join("|"));
  }
  function getVipTargetUrl() {
    if (ooPlayUrl) return ooPlayUrl;
    let n = Is(isVipUrlRegex) ? location.href.replace(/.+=http/, "http") : location.href.replace(/&?\w+=http[^&]+/, "").replace(/.+http/, "http");
    return n = decodeURI(fixVipUrl(n) || n), n;
  }
  function getGlobal(n) {
    return (unsafeWindow || window)[n];
  }
  function pausePlay() {
    log("pausePlay");
    try {
      $("video, audio").each((function(n, o) {
        o.pause(), o.muted = "muted", $("video, audio").remove();
      }));
      let n = 0;
      const o = setInterval((function() {
        const e = getGlobal("playerObject") || getGlobal("MGTVPlayer") && getGlobal("MGTVPlayer").player || getGlobal("videoPlayer") || getGlobal("PLAYER");
        e && e.pause && e.pause(), (!e || n++ > 300) && clearInterval(o);
      }), 200);
    } catch (n) {
      console.error(PLUGIN_NAME + " play: " + n);
    }
  }
  function canPlayInPage(n) {
    return !isOnlyDownloadVideoUrlRegex.test(n) || !/vwecam.tc.qq.com/.test(n) || Is(v.qq.com);
  }
  function isValidVideoUrl(n) {
    return isValidUrlRegex.test(n) && isVideoUrlRegex.test(n) && !isInvalidSniffUrlRegex.test(n) && (!isBadVideoUrlRegex.test(n) || Date.now() - sniffTimestamp > 8e3);
  }
  function fixVideoUrl(n) {
    return n.replace(/http:\/\/(vwecam.tc.qq.com)/, "https://$1");
  }
  async function playBefore() {
    $(".o--vip-play").removeClass("is-hide"), !isLoadPlayer && (addCss("/plyr/3.5.10/plyr.css"), 
    await addJs("/hls.js/0.13.2/hls.min.js"), await addJs("/plyr/3.5.10/plyr.min.js"), 
    isLoadPlayer = !0);
  }
  function sniffStart() {
    isSniffing = !0, sniffTimestamp = Date.now(), sniffUrls = [], downloadUrls = [], 
    sniffUrlsKey = [], $("html").addClass("o--on");
  }
  function sniffDone() {
    log("Sniff done ✔"), isSniffing = !1, emptyIframes(), $(".o--sniff-progress").css({
      width: "100%"
    }), $("oo-movie").removeClass("is-active").addClass("is-done"), sniffUrls.length > 0 && 0 === $(".o--sniff-done").length && $(".o--vip-play .o--sources").length && $(".o--vip-play .o--sources").append('<span class="o--sniff-done">✔</span>');
  }
  function sniffSuccess(n, o) {
    let e = !!(arguments.length > 2 && void 0 !== arguments[2]) && arguments[2];
    const i = (n = n.replace(/^(http:)?\/\//, "https://")).replace(/\?.+/, "");
    if (sniffUrlsKey.includes(i)) return void log("Skip duplicate sniff url:", n);
    sniffUrlsKey.push(i), sniffUrls.push(n), log("✔ sniffSuccess:", n);
    const t = _D ? ' _from="'.concat(o, '"') : "", a = n.match(isVideoUrlRegex)[1];
    $(".o--vip-play .o--sources").append('<a _href="'.concat(n, '" class="is-').concat(a, '"').concat(t, ">线路").concat(sniffUrls.length, "</a>")), 
    $(".o--vip-play .o--sources a").off("click").on("click", (function() {
      const n = fixVideoUrl($(this).attr("_href"));
      log("→ playing:", n);
      let o = document.querySelector(".o--player video");
      !o && ($(".o--player").prepend('<video class="o--video" poster="'.concat(PlayerCover, '" controls playsinline></video>')), 
      o = document.querySelector(".o--player video"));
      const e = getGlobal("Plyr"), i = getGlobal("Hls");
      if (!window.ooPlyr && e) {
        const n = new e(o, {
          debug: _D,
          invertTime: !1,
          autoplay: !0,
          volume: .75,
          speed: {
            selected: 1,
            options: [ .5, .75, 1, 1.25, 1.5, 2 ]
          }
        });
        window.ooPlyr = n, unsafeWindow && (unsafeWindow.ooPlyr = n);
      } else e || console.warn("NO Plyr.");
      if ($(".o--player-bg").remove(), /\.m3u8/.test(n) && i && i.isSupported()) {
        const e = new i;
        e.loadSource(n), e.attachMedia(o), e.on(i.Events.MANIFEST_PARSED, (function() {
          o.play();
        }));
      } else o.src = n, o.addEventListener("loadedmetadata", (function() {
        o.play();
      }));
      $(".o--play-url").html('来源：<a _href="'.concat(n, '">').concat(toShortVideoUrl(n), "</a>")), 
      $(".o--play-url a").off("click").on("click", (function() {
        const n = $(this).attr("_href");
        log("click play url:", n), isHiker && window.fy_bridge_app.playVideo ? window.fy_bridge_app.playVideo(n) : isMixia && window.mx_browser_obj.playvideo ? window.mx_browser_obj.playvideo(n, n) : window.open(n, "_blank");
      })), $(".o--vip-play .o--sources a").removeClass("is-active"), $(this).addClass("is-active");
    })), 1 === sniffUrls.length && ($(".o--vip-play a").eq(0).click(), $("oo-movie").addClass("is-success"), 
    $(".o--vip-play").removeClass("is-hide")), e && sniffDone();
  }
  function sniffFail() {
    log("× sniffFail"), sniffDone(), $(".o--player-bg").addClass("is-fail");
  }
  function _Sniff() {
    log("_Sniff");
  }
  function hikerSniff(sniffTickId) {
    if (sniffTickId !== sniffTick) return;
    log("hikerSniff");
    let resource = eval(window.fy_bridge_app.getNetworkRecords());
    resource = resource.filter((function(n) {
      return n.timestamp > sniffTimestamp && /video/i.test(n.mediaType.name) && isValidVideoUrl(n.url);
    })), isSniffing && (resource.forEach((function(n) {
      sniffSuccess(n.url, "", !1);
    })), setTimeout((function() {
      hikerSniff(sniffTickId);
    }), 100));
  }
  function mixiaSniff(n) {
    if (n !== sniffTick) return;
    log("mixiaSniff");
    let o = [], e = window.mx_browser_obj.getweblogs("http");
    "error" !== e && (o = e.trim().split(/\s*\n[\n\s]*/), o = o.filter((function(n) {
      return isValidVideoUrl(n);
    }))), isSniffing && (o.forEach((function(n) {
      sniffSuccess(n, "", !1);
    })), setTimeout((function() {
      mixiaSniff(n);
    }), 100));
  }
  function sniff(n) {
    if (log("sniff / isAllowIframeSniff ".concat(isAllowIframeSniff ? "✔" : "×")), sniffStart(), 
    isAllowIframeSniff) _Sniff(); else if (isAllowHikerSniff) hikerSniff(n); else {
      if (!isAllowMixiaSniff) return void sniffDone();
      mixiaSniff(n);
    }
    const o = getVipPlayer(), e = '<div class="o--vip-play is-hide">\n  <div class="o--sources"></div>\n  <div class="o--play-url"></div>\n</div>';
    o.length > 0 && (o.empty().append('<div class="o--player">\n  <div class="o--player-bg">\n    <div class="o--sniff-progress"></div>\n    <div class="loader">'.concat(loaderIcon, '</div>\n    <div class="o--sign">(o˘◡˘o)</div>\n    <div class="o--slogan">\n      <strong>觅</strong>即知君不可见，挥毫点染湖山<strong>影</strong>\n    </div>\n    <div class="o--error-tip">尚未适配手机端，不保证能正常使用。</div>\n    <div class="o--error-text">解析失败，可以尝试到其它正版网站上解析</div>\n  </div>').concat(isMobile ? "" : e, "\n</div>")), 
    isMobile && $("body").append(e), $(".o--player").parent().addClass("o--player-box")), 
    pausePlay(), sniffUrls = [], goSniff();
  }
  function goSniff() {
    function n() {
      const e = $("oo-iframes > iframe").length;
      if (e > 3) setTimeout((function() {
        n();
      }), 500); else {
        const n = isMobile ? Math.min(200 * sniffUrls.length + 250 * e + 1e3, 3e3) : Math.min(300 * sniffUrls.length + 500 * e + 1e3, 5e3);
        setTimeout((function() {
          goSniff(o + 1);
        }), n);
      }
    }
    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (!isSniffing) return;
    const e = VU[o], i = Math.min(100 * (o + 1) / (VU.length + 1) + 1, 98).toFixed(4) + "%";
    if (log("【".concat(o, " - ").concat(i, "】goSniff:"), e), $(".o--sniff-progress").css({
      width: i
    }), !e) {
      const n = setInterval((function() {
        0 === $("oo-iframes > iframe").length && (clearInterval(n), 0 === sniffUrls.length ? sniffFail() : sniffDone());
      }), 1e3);
      return;
    }
    if (sniffUrls.length >= MAX_SNIFF_PLAY_COUNT) return void sniffDone();
    const t = getVipTargetUrl(), a = e + t;
    log("sniff: " + a);
    const r = addIframe(a);
    r.onload = function() {
      setTimeout((function() {
        removeIframe(r, "TIMEOUT");
      }), 18e3);
    }, n();
  }
  async function play() {
    await playBefore(), sniffTick > 0 && sniffDone(), sniff(++sniffTick), $("oo-movie").removeClass("is-success is-done").addClass("is-active");
  }
  function getVipPlayer() {
    let n = $(PlayerSelector).eq(0);
    return 0 === n.length && (n = $("#player, .player").eq(0)), n;
  }
  function insertVipFab() {
    $("oo-movie").length > 0 || (log("insertVipFab"), addCss("\noo-iframes {\n  visibility: hidden;\n  pointer-events: none;\n  position: fixed;\n  bottom: 0;\n  left: -9999px;\n  max-width: 100px;\n  max-height: 50px;\n  display: block;\n}\n\noo-iframes > iframe {\n  max-width: 20%;\n  display: inline-block;\n}\n\n.o--vip-play {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 1em;\n  font-size: 14px;\n}\n\n.o--m .o--vip-play {\n  top: auto;\n  bottom: 0;\n  position: fixed;\n  background-color: #2d2d2e;\n  width: 100%;\n  margin: 0;\n  padding: 1em;\n  z-index: ".concat(MAX_Z_INDEX, ";\n}\n\n.o--m .o--vip-play {\n  font-size: 12px;\n}\n\n.plyr--hide-controls ~ .o--vip-play {\n  display: none;\n}\n\n.o--player:hover .o--vip-play {\n  display: block !important;\n}\n\n.o--vip-play.is-hide {\n  display: none !important;\n}\n\n.o--vip-play a {\n  position: relative;\n  margin-right: 8px;\n}\n\n.o--vip-play .o--sources a {\n  background-color: #0db2fb;\n  padding: .3em .75em .25em .75em;\n  border-radius: 3px;\n  color: #ffffff;\n  cursor: pointer;\n  opacity: .85;\n}\n\n.o--vip-play .o--sources a.is-active {\n  background-color: #1c7ed6;\n}\n\n.o--vip-play .o--sources a.is-active,\n.o--vip-play .o--sources a:hover {\n  opacity: 1;\n  font-weight: bold;\n}\n\n.o--vip-play .o--sources a.is-mp4 {\n  border-bottom: 1px solid #eee;\n}\n\n.o--sniff-done {\n  color: #4CAF50;\n}\n\n.o--play-url {\n  color: #ffffff;\n  padding: 1em 1em .5em;\n}\n\n.o--play-url a {\n  color: #0db2fb !important;\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.o--play-url a span {\n  color: #FF9800;\n}\n\n.o--play-url a:hover {\n  color: #e67700 !important;\n}\n\n.o--player-box::before,\n.o--player-box::after {\n  display: none !important;\n}\n\n.o--player {\n  position: relative;\n  height: 100%;\n  max-height: 100%;\n  border-radius: 2px;\n  background-color: #2d2d2e;\n  overflow: hidden;\n  z-index: ").concat(MAX_Z_INDEX, ';\n}\n\n.o--player-bg {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 16px;\n  color: #f1f3f5;\n  background-color: #292929;\n  border: 2em solid #232325;\n  box-shadow: 0 0 5px 0 #232325;\n  overflow: hidden;\n}\n\n.o--m .o--player-bg {\n  font-size: 12px;\n  border-width: 1em;\n}\n\n.o--sign {\n  opacity: .1;\n}\n\n.o--slogan {\n  letter-spacing: 2px;\n  color: #f8964c;\n}\n\n.o--slogan strong {\n  font-size: 2.5em;\n  color: #FF5722;\n}\n\n.o--error-tip {\n  display: none;\n  letter-spacing: 2px;\n  color: #f8964c;\n}\n\n.o--m .o--error-tip {\n  display: block;\n}\n\n.o--error-text {\n  display: none;\n  padding: .5em;\n  letter-spacing: 1px;\n}\n\n.o--player-bg.is-fail .o--slogan {\n  color: #f76707;\n}\n\n.o--player-bg.is-fail .o--slogan strong {\n  color: #d9480f;\n}\n\n.o--player-bg.is-fail .loader,\n.o--player-bg.is-fail + .o--vip-play {\n  display: none;\n}\n\n.o--player-bg.is-fail .o--error-text {\n  display: block;\n}\n\n.o--sniff-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 1px;\n  width: 0;\n  background-color: #fab132;\n  border: 1px solid #bd7641;\n  border-top-right-radius: 2px;\n  transition: all 5s ease;\n}\n\n.o--player-bg.is-fail .o--sniff-progress {\n  background-color: #d94820;\n  border: 1px solid #db5b29;\n}\n\n@keyframes loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.loader {\n  margin: 1em;\n  border: 3.6px solid #ff974d;\n  box-sizing: border-box;\n  overflow: hidden;\n  width: 36px;\n  height: 36px;\n  left: 50%;\n  top: 50%;\n  animation: loader-spin 2s linear infinite reverse;\n  -webkit-filter: url(#oo-l-f);\n          filter: url(#oo-l-f);\n  box-shadow: 0 0 0 1px #ff974d inset;\n}\n\n.loader:before {\n  content: "";\n  position: absolute;\n  -webkit-animation: loader-spin 2s cubic-bezier(0.59, 0.25, 0.4, 0.69) infinite;\n          animation: loader-spin 2s cubic-bezier(0.59, 0.25, 0.4, 0.69) infinite;\n  background: #ff974d;\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  border-radius: 50%;\n  width: 150%;\n  height: 150%;\n  top: 50%;\n  left: -12.5%;\n}\n\n.o--player .plyr__progress input[type=range] {\n  cursor: pointer;\n}\n\n.o--video {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n}\n\noo-movie {\n  font-size: 16px;\n  position: fixed;\n  left: .5em;\n  bottom: 45%;\n  z-index: ').concat(MAX_Z_INDEX, ";\n}\n\n.o--m oo-movie {\n  bottom: 40%;\n}\n\n.o--m oo-movie {\n  font-size: 18px;\n}\n\noo-movie.is-success .o--vip-button {\n  background-color: #2f9e44;\n}\n\noo-movie.is-success.is-done .o--vip-button {\n  background-color: #2b8a3e;\n}\n\noo-movie.is-success .o--vip-button svg {\n  fill: #ebfbee;\n}\n\noo-movie.is-active .o--vip-button,\noo-movie.is-success .o--vip-button {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5 !important;\n}\n\noo-movie.is-done .o--vip-button {\n  opacity: .75 !important;\n}\n\noo-movie.is-active:not(.is-success) .o--vip-button {\n  animation: oo-beat 0.25s infinite alternate;\n}\n\n@keyframes oo-beat {\n  to { transform: scale(1.4); }\n}\n\n.o--vip-button, .o--log-button {\n  width: 1.8em !important;\n  height: 1.8em !important;\n  text-align: center;\n  cursor: pointer;\n  padding: .35em;\n  background-color: hsla(0,0%,100%,.9);\n  box-shadow: 0 0 5px 0 rgba(2,2,2,.2);\n  color: #999;\n  border-radius: 50%;\n}\n\n.o--vip-button svg {\n  fill: #ec5736;\n  padding-top: .1em;\n}\n\n.o--vip-button:hover {\n  background-color: #ec5736;\n}\n\n.o--vip-button:hover svg {\n  fill: rgba(255, 255, 255, 0.9);\n}\n\n.o--log-button {\n  bottom: 30%;\n  width: 2.5em;\n  height: 2em;\n  font-size: 14px;\n  color: #9e774a;\n  font-weight: bold;\n  margin-top: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.o--log-button:hover {\n  color: rgba(255, 255, 255, 0.9);\n  background-color: #9e774a;\n}\n")), 
    $("html").append('<oo-movie><div class="o--vip-button">'.concat(vipIcon, "</div>").concat(_D ? '<div class="o--log-button">LOG</div>' : "", "</oo-movie>")), 
    $(".o--vip-button").on("click", play), $(".o--log-button").on("click", (function() {
      $("oo-logs").toggleClass("is-active");
    })), urlDetector((function() {
      play();
    })));
  }
  function toShortVideoUrl(n) {
    const o = n.match(shortVideoUrlRegex);
    return o ? o[1] + " ... " + o[3].slice(-10) + "<span> . " + o[4] + "</span>" : n;
  }
  function urlDetector(n) {
    setInterval((function() {
      Href !== window.location.href && (log("urlDetector: ".concat(window.location.href, " → ").concat(Href)), 
      Href = window.location.href, n && n());
    }), 250);
  }
  function execQuickAddons(n) {
    log("execQuickAddons:", n.name || n.match);
    let o = "";
    n.hide && (o += "\n".concat(n.hide, " {").concat(PurifyStyle, "}\n")), n.css && (o += n.css), 
    o && addCss(o), $((function() {
      n.sign && $(n.sign).html(OO_SIGN), n.vip && (hasVipFab = !0, isAllowSniff && insertVipFab()), 
      n.js instanceof Function && n.js();
    }));
  }
  function addIframe(n) {
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "oo-iframes";
    const e = document.createElement("iframe");
    return e.id = uuid(), e.frameborder = "0", e.scrolling = "no", e.seamless = !0, 
    e.sandbox = "allow-scripts allow-same-origin allow-forms allow-top-navigation", 
    n && (e.src = n, iframes[n] = e.id), $(o).append(e), e;
  }
  function removeIframe() {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "oo-iframes > iframe", o = arguments.length > 1 ? arguments[1] : void 0;
    const e = $("string" == typeof n ? n.startsWith("oo-iframes") ? n : "#" + n : n.id ? "#" + n.id : n).get(0);
    e && (log("Remove iframe #".concat(e.id, " (").concat(e.src, ")") + (o ? "【".concat(o, "】") : "")), 
    delete iframes[e.src], e.src = "about:blank", $(e).remove());
  }
  function emptyIframes() {
    $("oo-iframes > iframe").each((function(n, o) {
      removeIframe(o);
    })), $("oo-iframes").empty();
  }
  const PLUGIN_ID = "(o˘◡˘o) 觅影", PLUGIN_ATTR = "oo-movie", PLUGIN_NAME = "oo.movie", VERSION = "20.3.22", HTML = document.getElementsByTagName("html")[0];
  if (HTML.getAttribute(PLUGIN_ATTR) === PLUGIN_ID) return;
  const MAX_Z_INDEX = 2147483647, BETTER_ADDONS = [ {
    name: "腾讯·播放页",
    match: /v\.qq\.com\/(cover|play|x\/cover|x\/page|x\/play|x\/m\/cover|x\/m\/page|x\/m\/play)/,
    vip: !0,
    title: ".mod_video_info .video_title, ._main_title, .player_title",
    fixUrl(n) {
      if (n.includes("cid=")) {
        const o = n.match(/cid=(\w+)/)[1];
        let e = n.match(/vid=(\w+)/);
        return e = e ? "/" + e[1] : "", "https://v.qq.com/x/cover/".concat(o).concat(e, ".html");
      }
      return n.includes("/x/cover") ? n.replace(/\.html.*/, ".html") : n;
    },
    hide: '.mod_source, .video_function, .mod_promotion, #vip_privilege, #vip_activity, .U_bg_b, .btn_open_v, .btn_openapp, #vip_header, .btn_user_hd, .mod_sideslip_privileges, .mod_game_rec, .mod_source, .mod_promotion, .mod_sideslip_h, .btn_open, .btn_pay, .mod_box_lastview, .mod_vip_popup, .mod_vip_popup + .mask_layer, txpdiv[data-role="hd-ad-adapter-interactivelayer"]',
    css: "\nbody, #vip_title {\n  padding-bottom: 0 !important;\n}\n\n.mod_episodes_numbers.is-vip .item {\n  width: auto;\n  padding: 0 1em;\n}\n\n.U_html_bg .container {\n  padding-bottom: 30px;\n}\n\n.mod_play .mod_player_viptips .btn_try {\n  left: 30%;\n}"
  }, {
    name: "爱奇艺·播放页",
    match: /\.iqiyi\.com\/v_/,
    vip: !0,
    title: "#widget-videotitle, .video-title, .c-title-link, .player-title a",
    fixUrl: !0,
    sign: ".m-footer",
    hide: '.m-iqyDown, .header-login + div, .m-video-action, div[name="m-vipRights"], div[name="m-extendBar"], .m-iqylink-diversion, .m-iqylink-guide, .c-openVip, .c-score-btn, .m-videoUser-spacing, .m-pp-entrance, .m-hotWords-bottom, div[template-type="ALBUM"] .m-player-tip, .iqp-box-integral, .o--on #iProgress ~ div[style]',
    css: '\n.page_play {\n  padding-bottom: 0;\n}\n\ndiv[name="m-videoInfo"] {\n  padding-top: 1em;\n}\n\n.m-box-items .o--album-item {\n  border-radius: 0.05em;\n  background-color: #e9ecef;\n  color: #495057;\n  padding: 0.5em 1em;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.25em;\n  font-weight: bold;\n}\n\n.m-video-player #o--player-iframe {\n  padding-top: 56.25%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.qy-header .header-wrap {\n  z-index: '.concat(MAX_Z_INDEX, ";\n}\n"),
    js() {
      log("修复爱奇艺选集");
      let n = [], o = ($('[name="apple-itunes-app"]').attr("content") || "").match(/aid=\d{2,}/);
      if (o) {
        fetch("https://pcw-api.iqiyi.com/albums/album/avlistinfo?page=1&size=9999&" + o[0]).then((function(n) {
          return n.json();
        })).then((function(o) {
          n = o.data.epsodelist;
        }));
        let e = 0;
        setInterval((function() {
          let o = Number($(".qy-episode-num .select-item.selected .select-link").text() || 0);
          if (o && o !== e) {
            log("change episode num: ".concat(e, " → ").concat(o)), e = o;
            let i = n[e - 1];
            if (i) {
              let n = i.playUrl.replace(/https?:/, location.protocol);
              n !== ooPlayUrl && (ooPlayUrl = n, play(), log("change episode to:", n));
            }
          }
        }), 100);
      }
    }
  }, {
    name: "优酷·播放页",
    match: /m\.youku\.com\/a|m\.youku\.com\/v|v\.youku\.com\/v_/,
    vip: !0,
    title: ".player-title .subtitle a, .module-name, .anthology-title-wrap .title, .title-link",
    fixUrl: !0,
    sign: ".copyright",
    hide: ".h5-detail-guide, .h5-detail-ad, .brief-btm, .smartBannerBtn, .cmt-user-action, #right-title-ad-banner, .Corner-container",
    css: "\n#bpmodule-playpage-lefttitle {\n  height: auto !important;\n}"
  }, {
    name: "土豆·播放页",
    match: /\.tudou.com\/v\//,
    vip: !0,
    title: ".td-listbox__title, .video-desc-title",
    fixUrl: !0,
    hide: ".video-player-topbar, .td-h5__player__appguide, #tudou-footer, .dropdown__panel__con"
  }, {
    name: "芒果·播放页",
    match: /\.mgtv\.com\/(b|l)\//,
    vip: [ ".xuanji | before", ".v-panel-box" ],
    title: ".v-panel-title, .vt-txt",
    fixUrl: !0,
    sign: ".mg-footer-copyright",
    hide: ".ad-banner, .video-area-bar, .video-error .btn, .m-vip-list, .m-vip-list + div:not([class]), .toapp, .video-comment .ft, .mg-app-swip"
  }, {
    name: "搜狐·播放页",
    match: /film\.sohu\.com\/album\/|tv\.sohu\.com\/(v|phone_play_film)/,
    vip: ".title-wrap, .videoInfo, .tw-info, .player-detail, .movie-info-content",
    title: "#vinfobox h2, .t-info, .movie-t h3",
    fixUrl(n) {
      if (/phone_play_film.+channeled=/.test(n)) {
        const o = n.match(/channeled=(\w+)/)[1], e = n.match(/aid=(\w+)/)[1];
        return "https://film.sohu.com/album/".concat(e, ".html?channeled=").concat(o);
      }
      return n;
    },
    sign: ".links",
    hide: ".actv-banner, .btn-xz-app, .twinfo_iconwrap, .btn-comment-app, #ad_banner, .advertise, .main-ad-view-box, .foot.sohu-swiper, .app-star-vbox, .app-guess-vbox, .main-rec-view-box, .app-qianfan-box, .comment-empty-bg, .copyinfo, .ph-vbox, .btn_m_action, .btn-xz-app, #film_top_banner, .btn-comment-app",
    css: "\n.comment-empty-txt {\n  margin-bottom: 0;\n}\n\n.app-view-box + footer {\n  padding: 0;\n  opacity: 0.5;\n}\n\n#sohuplayer #menu {\n  z-index: ".concat(MAX_Z_INDEX, ";\n}")
  }, {
    name: "乐视·播放页",
    match: /\.le\.com\/(ptv\/vplay\/|vplay_)/,
    vip: !0,
    title: ".briefIntro_info .info_tit, #j-introduction h2",
    fixUrl: !0,
    hide: ".gamePromotion, .gamePromotionTxt, #j-leappMore, .lbzDaoliu, .arkBox"
  }, {
    name: "咪咕·播放页",
    match: /miguvideo\.com\/.+\/detail\.html/,
    vip: !0,
    title: ".left-box .title, .episodeTitle, .video_title",
    hide: '.group-item[name*="广告"], .openClient'
  }, {
    name: "PPTV·播放页",
    match: /(v|m)\.pptv\.com\/show\//,
    vip: !0,
    title: "#video-info h1, .vod-tit-in span, .tit",
    fixUrl: !0,
    hide: '.w-video-vastad, #video-download-game, div[class*="openapp"], div[class*="side-adv"], div[id*="afp_"], div[id*="-afp"], iframe[src*="/game/"], .afpPosition, .download-iconbar'
  }, {
    name: "华数·播放页",
    match: /wasu\.cn\/.*[pP]lay\/show\//,
    vip: !0,
    title: ".movie_title h2",
    fixUrl: !0,
    hide: 'div[id*="BAIDU"], .player_menu_con, body > div[style*="fixed"]'
  }, {
    name: "1905·播放页",
    match: /1905.com\/play/,
    vip: !0,
    title: "#movie_info .infoInner .title, .movie-title, .tv_title",
    fixUrl: !0,
    hide: "#app_store, .openMembershipBtn, body > div[id] > iframe, .pv2-advertisement, .open-app",
    css: "\n#movie_info {\n  margin-top: 1em;\n}"
  } ], PurifyStyle = "\ndisplay: none !important;\nvisibility: hidden !important;\nwidth: 0 !important;\nheight: 0 !important;\nmax-width: 0 !important;\nmax-height: 0 !important;\noverflow: hidden !important;\nposition: absolute !important;\nleft: -99999px !important;\nopacity: 0 !important;\npointer-events: none !important;", PlayerSelector = "#iframaWrapper, #mgtv-player-wrap, #sohuplayer .x-player, #wPlayer, #video-box, #playerbox, .td-h5__player, .td-playbox, .iqp-player, .g-play .video-area, #mod_player, #playBox, #j-player, #video, .m-video-player, .site_player", DVU = "job.jwfji.bk,jwfji.hj7na.md,wi.pbahmbjwhmjz.md·oju.,u.fjipbanm.npd·jqhmjn·jqhmjn.,u.mgazc.npd·wfcmj.,wi.usjzupz.npd,xxx.upnld.oju·job.,jwfji.l192.npd,wilp.dd,xxx.ukewm.npd,job.138us.npd·wi,xxx.jtpbjcw.npd·oju,wi.czd6.npd,0y.6180n.md·?wi,jwfji.009061.dd·wi.,u.hmptjgymbd.md·v.,xxx.mjwzn.ops·wi·job.,xxx.wijnjfg.npd·wi·job·wi.,oo.ntjb.dd·ftqbo.,hmbsmfgtjzrd.md·pfcju.,xxx.9v2nzbko.md·jwfji.,xxx.mvz6060.npd·wi·zs.,xxx.h1819.md·jwfji,e83jz.md·oju·oju.,job.wi2.ops·oju,wi.h907.npd,f177.npd", PlayerCover = "https://p.pstatp.com/origin/ff460000f53068309d77";
  let Href = location.href;
  if (Is(/cookie.html/) || Is(/m\.le\.com/) && IsNot(/m.le.com\/search|so.le.com\/s|\.le\.com\/(ptv\/vplay\/|vplay_)/)) return;
  const D = decodeURIComponent, charToNum = function(n) {
    return n.charCodeAt(0) - 97;
  }, numToChar = function(n) {
    return String.fromCharCode(97 + n);
  }, _D = !1, OO_SIGN = "(o˘◡˘o)", screenWidth = window.screen.width, isMobile = screenWidth <= 600 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || !1, isTop = window.top === window.self, isNotTop = !isTop, VU = magicSource(DVU.replace(/·/g, "/")).split(",").map((function(n) {
    return "https://" + n + (n.includes("?") ? "" : (n.endsWith(".") ? "php" : n.includes("/") ? "" : "/") + "?url") + "=";
  })), cachePrefix = "oo.";
  await addJs("/jquery/3.4.1/jquery.min.js");
  const $ = jQuery.noConflict(!0), E = emitter();
  log("✔ Loaded v" + VERSION, isMobile ? "isMobile" : "isNotMobile", location.href);
  let topClass = isMobile ? "o--m" : "oo-pc";
  $("html").addClass(topClass), addCss("\n.o--m.o--debug {\n  max-width: 400px !important;\n  margin: 0 auto !important;\n}\n\n.o--m.o--debug .mod_player > .player_container {\n  height: 203px;\n}\n");
  const isVipUrlRegex = toUrlRegex(VU);
  let vipSiteSign = Href.match(/[\.\/](\w+)\.(\w+)\//);
  vipSiteSign = vipSiteSign ? vipSiteSign[1] : "oo.movie";
  let ooPlayUrl = "";
  const MAX_SNIFF_PLAY_COUNT = 8, isHiker = !!window.fy_bridge_app, isMixia = !!window.mx_browser_obj, isAllowHikerSniff = isHiker && !!window.fy_bridge_app.getNetworkRecords, isAllowMixiaSniff = isMixia && !!window.mx_browser_obj.getweblog;
  let isAllowSniff = isAllowHikerSniff || isAllowMixiaSniff, sniffTimestamp = Date.now(), isSniffing = !1, sniffTick = 0, sniffUrls = [], downloadUrls = [], sniffUrlsKey = [];
  log("【嗅探】isAllowSniff:", isAllowSniff);
  const isInvalidSniffUrlRegex = /btrace.video.qq.com|qzonestyle.gtimg.cn|dplayer\/\w+.mp4|vip.fwwmy1.cn|vwecam.gtimg.com|(titan.mgtv.com|nxflv.com).+.m3u8/, isBadVideoUrlRegex = /(71edge|com-l-youku)\.com/, isValidUrlRegex = /^(http|\/\/)/, isOnlyDownloadVideoUrlRegex = /pcvideotx.titan.mgtv.com/;
  let isLoadPlayer = !1;
  const vipIcon = '<svg viewBox="0 0 18 18" role="img" aria-hidden="true"><path d="M17.731,6.27l-2.771-4.464c-0.332-0.534-0.906-0.852-1.538-0.852h-2.364c-0.553,0-1,0.448-1,1s0.447,1,1,1h2.261l2.628,4.232l-6.955,7.58L2.053,7.187l2.628-4.233h2.33c0.552,0,1-0.448,1-1s-0.448-1-1-1H4.577c-0.623,0-1.212,0.327-1.537,0.853L0.267,6.272c-0.416,0.671-0.346,1.521,0.189,2.133l7.475,8.167c0.275,0.313,0.663,0.475,1.056,0.475c0.324,0,0.651-0.11,0.92-0.336l7.648-8.321C18.077,7.794,18.148,6.943,17.731,6.27z"></path><path d="M4.517,6.167C4.108,6.538,4.078,7.171,4.45,7.58l3.81,4.19c0.189,0.208,0.458,0.327,0.739,0.327c0,0,0,0,0,0c0.281,0,0.55-0.118,0.739-0.327l3.81-4.184c0.372-0.409,0.343-1.041-0.066-1.413c-0.407-0.372-1.039-0.342-1.412,0.066L9,9.612L5.929,6.234C5.558,5.826,4.926,5.796,4.517,6.167z"></path></svg>', loaderIcon = '<svg><defs><filter id="oo-l-f"><feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="gooey" /><feComposite in="SourceGraphic" in2="gooey" operator="atop"/></filter></defs></svg>';
  let hasVipFab = !1, isAllowIframeSniff = !1;
  const isVideoUrlRegex = /\.(mp4|m3u8|3gp|wmv|flv|avi|rmvb|m4v|ts)/, shortVideoUrlRegex = /\/\/([^\/]+)\/(.*\/)?([^\/]+)\.(mp4|m3u8|3gp|wmv|flv|avi|rmvb|m4v|ts)/, MESSAGE_ID = OO_SIGN, iframes = {};
  if (E.on("enable.sniff", (function(n) {
    n.from === PlayerCover && removeIframe(), !isAllowIframeSniff && (isAllowIframeSniff = !0, 
    isAllowSniff = !0, hasVipFab && insertVipFab());
  })), E.on("play.video", (function(n) {
    log("✔ Sniff url: ".concat(n.url, " (").concat(n.from, ") #").concat(iframes[n.from])), 
    removeIframe(iframes[n.from]), sniffSuccess(n.url, n.from, !1);
  })), E.on("sniff.fail", (function(n) {
    !isAllowSniff || (log("× Sniff fail url: ".concat(n.origin, " (").concat(n.from, ") #").concat(iframes[n.from])), 
    removeIframe(iframes[n.from]));
  })), E.on("log", (function(n) {
    log("GET LOG:", n);
  })), isNotTop) {
    if (location.href === PlayerCover && window.top.postMessage({
      _id: MESSAGE_ID,
      action: "enable.sniff",
      from: location.href
    }, "*"), location.href.includes("m1907")) {
      const n = window.alert;
      window.alert = function() {}, setTimeout((function() {
        window.alert = n;
      }), 1e3);
    }
    window.addEventListener("message", (function(n) {
      const o = n.data;
      !o || o._id !== MESSAGE_ID || (log("iframe message:", MESSAGE_ID, o), o.parent && (o.from = location.href, 
      window.parent.postMessage(o, "*")));
    }));
    const n = Date.now(), o = setInterval((function() {
      const e = Date.now() - n;
      if ($("video source[src], video[src]").length > 0) {
        clearInterval(o), $("video, audio").each((function(n, o) {
          o.pause();
          const e = o.muted;
          o.muted = "muted", setTimeout((function() {
            o.muted = e;
          }), 1e3);
        }));
        const n = $("video source[src]").eq(0).attr("src") || $("video[src]").eq(0).attr("src") || "";
        return /^\/[^\/]/.test(n) && (n = location.origin + n), void (isValidVideoUrl(n) && window.parent.postMessage({
          usedTime: e,
          _id: MESSAGE_ID,
          action: "play.video",
          from: location.href,
          origin: location.href,
          url: n,
          parent: !0
        }, "*"));
      }
      const i = $("iframe[src]").length > 0;
      if (e >= 4e3 && i) return void clearInterval(o);
      const t = $("video").length > 0;
      (e >= 1e4 || e >= 2e3 && t) && (clearInterval(o), window.parent.postMessage({
        usedTime: e,
        hasVideo: t,
        hasIframe: i,
        _id: MESSAGE_ID,
        action: "sniff.fail",
        from: location.href,
        origin: location.href,
        parent: !0
      }, "*"));
    }), 100);
  } else $((function() {
    $("html").append('<oo-iframes style="visibility: hidden; position: fixed; bottom: 0; pointer-events: none;"></oo-iframes>'), 
    addIframe(PlayerCover), window.addEventListener("message", (function(n) {
      const o = n.data;
      !o || o._id !== MESSAGE_ID || (log("message:", MESSAGE_ID, o), o.action && E.emit(o.action, o));
    }));
  })), BETTER_ADDONS.forEach((function(n) {
    ("string" == typeof n.match ? Href.includes(n.match) : Is(n.match)) && execQuickAddons(n);
  }));
}();