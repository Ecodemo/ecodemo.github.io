// ==UserScript==
// @name 万能命令
// @description 无聊的万能命令脚本。
// @include *
// @run-at document-end
// @version 20200511
// ==/UserScript==
!function() {
	if (!(location.href.match(/^https?:\/\/(?:[^\/]+?\.)?(?:wn|wanneng)\.run/i))) {
		if (!document.getElementById("wnmla")) {
			const c = document.createElement("span");
			c.id = "wnmla";
			c.innerHTML = "万";
			c.style.cssText = "text-align:center !important;font-size:18px;width:30px;height:30px;line-height:30px;text-align:center;float:right;position:fixed;right:42px;top:50%;border: #20a53a 1px solid;color:#558B2F;opacity:0.8;background:rgba(250, 250, 250, 0.9);cursor:pointer;position:fixed !important;z-index:9999999999 !important;border-radius:50%";
			c.addEventListener("click", function() {
				ml()
			});
			document.body.appendChild(c)
		}
		var d, wnmlb;
		document.addEventListener("touchstart", function(e) {
			d = e.changedTouches[0].clientY
		});
		document.addEventListener("touchmove", function(e) {
			wnmlb = e.changedTouches[0].clientY;
			document.getElementById("wnmla").style.display = wnmlb - d > 0 ? "block" : "none"
		});

		function ml() {
			function GetUrlRelativePath() {
				const a = document.location.toString();
				const b = a.split("://");
				const c = b[1].indexOf("://");
				const d = b[1].substring(c);
				return d
			}
			window.open("https://wanneng.run/" + GetUrlRelativePath())
		}
	} else if (location.href.match(/^https?:\/\/(?:[^\/]+?\.)?(?:wn|wanneng)\.run/i)) {
		document.head.insertAdjacentHTML('beforeend', '<style>div[class*="head"],div[class^="box howUseShow"],div[class*="footer"],p[class^="subShow"] {display: none!important;max-width: 0!important;max-height: 0!important;overflow: hidden!important;position: absolute;left: -102030px}</style>')
	}
}();

