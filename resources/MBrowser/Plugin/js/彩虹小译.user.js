// ==UserScript==
// @name 彩虹小译
// @description 《彩云小译js注入版v1.0》【说明】按钮开关“yF”是上滑隐藏下滑显示的。只有点击开关后才会联网加载彩云小译的js脚本。
// @include *
// @run-at document-end
// @version 20200506
// ==/UserScript==
!function() {
	if (!document.getElementById("gzfy")) {
		var zfyan = document.createElement("span");
		zfyan.id = "gzfy";
		zfyan.innerHTML = "yF";
		zfyan.style.cssText = "text-align:center !important;font-size:18px;width:30px;height:30px;line-height:30px;text-align:center;float:right;position:fixed;right:42px;top:80%;border: #20a53a 1px solid;color:#558B2F;opacity:0.8;background:rgba(250, 250, 250, 0.9);cursor:pointer;position:fixed !important;z-index:9999999999 !important;border-radius:50%";
		zfyan.addEventListener("click", function() {
			zfy()
		});
		document.body.appendChild(zfyan);
	}
	var zfyhdy1, zfyhdy2;
	document.addEventListener("touchstart", function(e) {
		zfyhdy1 = e.changedTouches[0].clientY
	});
	document.addEventListener("touchmove", function(e) {
		zfyhdy2 = e.changedTouches[0].clientY;
		document.getElementById("gzfy").style.display = zfyhdy2 - zfyhdy1 > 0 ? "block" : "none"
	});

	function zfy() {
		var zfyfy = document.getElementById("gzfy");
		zfyfy.parentNode.removeChild(zfyfy);
		var cyfy = document.createElement("script");
		cyfy.type = "text/javascript";
		cyfy.charset = "UTF-8";
		cyfy.src = ("https:" == document.location.protocol ? " https://" : "http://") + "caiyunapp.com/dest/trs.js";
		document.body.appendChild(cyfy);
	}
}();