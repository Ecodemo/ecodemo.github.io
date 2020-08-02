function switchComment() {
    const t = "切换为Gitalk" === $("#switch-comment").attr("title") ? "切换为Valine": "切换为Gitalk",
    i = $("#switch-comment>i");
    "none" === $("#gitalk-container").css("display") ? $("#vcomment").slideUp("normal", () = >{
        $("#gitalk-container").slideDown("normal", () = >{
            $("#switch-comment").attr("title", t),
            i.hasClass("fa-toggle-off") ? i.removeClass("fa-toggle-off").addClass("fa-toggle-on") : i.removeClass("fa-toggle-on").addClass("fa-toggle-off")
        })
    }) : $("#gitalk-container").slideUp("normal", () = >{
        $("#vcomment").slideDown("normal", () = >{
            $("#switch-comment").attr("title", t),
            i.hasClass("fa-toggle-off") ? i.removeClass("fa-toggle-off").addClass("fa-toggle-on") : i.removeClass("fa-toggle-on").addClass("fa-toggle-off")
        })
    })
} (function() {
    function t(t) {
        var i = "--light_bg_color: rgb(255, 255, 255," + t + ");",
        n = "--dark_bg_color: rgba(18,18,18," + t + ");";
        e.setAttribute("style", i + n)
    }
    var i = document.getElementById("web_bg"),
    e = document.getElementById("content-inner"),
    n = Cookies.get("opacity"),
    s = Cookies.get("bg"),
    a = Cookies.get("animation"),
    o = Cookies.get("type");
    s && (i.style.background = s, i.setAttribute("data-type", o), a && (i.style.animation = a)),
    t(n);
    for (var l = document.getElementById("mobile-sidebar-menus"), r = l.getElementsByClassName("menus_item_child"), h = l.getElementsByClassName("menus-expand"), c = 0; c < r.length; c++) r[c].style.display = "none",
    h[c].className += " menus-closed"
})(),
function(t) {
    "use strict";
    function i() {
        const i = t(".tabs");
        if (0 === i.length) return;
        let e = i.find(".nav-tabs .tab");
        for (var n = 0; n < e.length; n++) {
            let t = i.find(e[n].children[0]);
            t.addClass(t.attr("href")),
            t.removeAttr("href")
        }
        t(".tabs .nav-tabs").on("click", "a", i = >{
            i.preventDefault(),
            i.stopPropagation();
            let e = t(i.target.parentElement.parentElement.parentElement);
            return e.find(".nav-tabs .active").removeClass("active"),
            e.find(i.target.parentElement).addClass("active"),
            e.find(".tab-content .active").removeClass("active"),
            e.find(t(i.target).attr("class")).addClass("active"),
            !1
        })
    }
    t(function() {
        i(),
        t(".scroll-down").on("click",
        function() {
            scrolltoElement(".l_body")
        }),
        setTimeout(function() {
            t("#loading-bar-wrapper").fadeOut(500)
        },
        300)
    })
} (jQuery),
function() {
    function t(t) {
        this.wrap = t.wrap,
        this.imgList = t.imgList,
        this.imgNum = this.imgList.length,
        this.width = t.width || $(this.wrap).width(),
        this.height = t.height || $(this.wrap).height(),
        this.isAuto = t.isAuto || !0,
        this.moveTime = t.moveTime,
        this.direction = t.direction || "right",
        this.btnWidth = t.btnWidth,
        this.btnHeight = t.btnHeight,
        this.spanWidth = t.spanWidth,
        this.spanHeight = t.spanHeight,
        this.spanColor = t.spanColor,
        this.activeSpanColor = t.activeSpanColor,
        this.btnBackgroundColor = t.btnBackgroundColor,
        this.spanRadius = t.spanRadius,
        this.spanMargin = t.spanMargin,
        this.flag = !1,
        this.nowIndex = 0,
        this.createDom(),
        this.initStyle(),
        this.bindEvent(),
        !0 === this.isAuto && this.autoMove()
    }
    t.prototype.createDom = function() {
        var t = $('<ul class="imgList"></ul>'),
        i = $('<div class="spot"></div>');
        this.imgList.forEach(function(e) {
            var n = '<li><a  href=" ' + e.a + 'target="_blank" "><img src=" ' + e.img + ' "></a></li>';
            t.append(n);
            var s = "<span></span>";
            i.append(s)
        });
        var e = $('<div class="left-btn"><i class="fas fa-angle-left"></i></div>'),
        n = $('<div class="right-btn"><i class="fas fa-angle-right"></i></div>');
        this.wrap.append(t).append(e).append(n).append(i)
    },
    t.prototype.initStyle = function() {
        $("*", this.wrap).css({
            margin: 0,
            padding: 0,
            listStyle: "none"
        }),
        $(this.wrap).css({
            overflow: "hidden",
            position: "relative"
        }),
        $(".imgList", this.wrap).css({
            width: this.width,
            height: this.height,
            position: "relative"
        }),
        $(".imgList li", this.wrap).css({
            width: this.width,
            height: this.height,
            position: "absolute",
            left: 0,
            top: 0,
            display: "none"
        }).eq(this.nowIndex).css({
            display: "block"
        }),
        $(".imgList li a, .imgList li a img", this.wrap).css({
            display: "inline-block",
            width: this.width,
            height: this.height
        }),
        $(".left-btn, .right-btn", this.wrap).css({
            width: this.btnWidth,
            height: this.btnHeight,
            backgroundColor: this.btnBackgroundColor,
            color: "#fff",
            textAlign: "center",
            lineHeight: this.btnHeight + "px",
            position: "absolute",
            top: "50%",
            marginTop: -this.btnHeight / 2,
            cursor: "pointer"
        }),
        $(".right-btn", this.wrap).css({
            right: 0
        }),
        $(".spot", this.wrap).css({
            height: this.spanHeight + 2 * this.spanMargin,
            position: "absolute",
            left: "50%",
            marginLeft: -this.imgNum * (this.spanWidth + 2 * this.spanMargin) / 2,
            bottom: 10
        }),
        $(".spot span", this.wrap).css({
            display: "inline-block",
            width: this.spanWidth,
            height: this.spanHeight,
            margin: this.spanMargin,
            backgroundColor: this.spanColor,
            borderRadius: this.spanRadius,
            cursor: "pointer"
        }).eq(this.nowIndex).css({
            backgroundColor: this.activeSpanColor
        })
    },
    t.prototype.bindEvent = function() {
        var t = this;
        $(".left-btn", this.wrap).click(function() {
            t.move("prev")
        }),
        $(".right-btn", this.wrap).click(function() {
            t.move("next")
        }),
        $(".spot span").click(function(i) {
            t.move($(this).index())
        }),
        $(this.wrap).mouseenter(function() {
            clearInterval(t.time)
        })
    },
    t.prototype.move = function(t) {
        if (this.flag) return ! 1;
        switch (this.flag = !0, t) {
        case "prev":
            0 === this.nowIndex ? this.nowIndex = this.imgNum - 1 : this.nowIndex--;
            break;
        case "next":
            this.nowIndex === this.imgNum - 1 ? this.nowIndex = 0 : this.nowIndex++;
            break;
        default:
            this.nowIndex = t
        }
        var i = this;
        $(".imgList li", this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function() {
            i.flag = !1
        }),
        $(".spot  span", this.wrap).css({
            backgroundColor: this.spanColor
        }).eq(this.nowIndex % this.imgNum).css({
            backgroundColor: this.activeSpanColor
        })
    },
    t.prototype.autoMove = function() {
        var t = this;
        this.time = setInterval(function() {
            "left" == this.direction ? $(".left-btn", this.wrap).trigger("click") : $(".right-btn", this.wrap).trigger("click")
        },
        t.moveTime)
    },
    $.fn.extend({
        slider: function(i) {
            i.wrap = this,
            new t(i)
        }
    })
} ();
var commentElement = document.getElementsByClassName("comment_headling")[0];
null != commentElement && (commentElement.innerHTML += '<a id="switch-comment" href="javascript:void(0);" title="切换为Gitalk" target="_self"><i class="fa fas fa-toggle-off" aria-hidden="true"></i></a>', document.getElementById("gitalk-container").style.display = "none"),
$("#switch-comment").click(function() {
    return switchComment(),
    !1
}),
function() {
    var t = document.getElementsByClassName("full_page");
    t.length > 0 && (t[0].style.backgroundImage = 'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg")')
} ();