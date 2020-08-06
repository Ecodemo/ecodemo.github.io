// ==UserScript== 
// @name   贴吧增强版
// @description  贴吧去广告-查看隐藏回复-只看楼主-看动图查全图-按钮增强
// @run-at   context-menu
// ==/UserScript==






(function () {
    'use strict';
    let obs;

    function gif3(v) {
        let imgs = v.querySelectorAll('img.BDE_Image');
        if (imgs.length > 0) {
            imgs.forEach(img => {
                let src = img.src;
                let s = /&src=(.*)/.exec(src);
                if (s != null) {
                    let x = s.length > 0 ? s[1] : src;
                    img.src = decodeURIComponent(x);
                    img.setAttribute('data-ss', img.src);

                    img.setAttribute('data-src', src)
                }

            })
        }
    }

    function gif(v) {
        let imgs = v.querySelectorAll('div[data-class="BDE_Image"]');
        if (imgs.length > 0) {
            imgs.forEach(value => {
                let src = decodeURIComponent(value.getAttribute('data-url'));
                let s = /&src=(.*)/.exec(src);
                if (s != null) {
                    let ss = s[1];
                    let img = document.createElement('img');
                    img.src = (ss);
                    img.className = 'BDE_Image';
                    img.setAttribute('data-src', src);
                    img.setAttribute('data-ss', ss);
                    value.outerHTML = `<div class="pb_img_item" data-url="${ss}">${img.outerHTML}</div>`;
                }
            })
        }
        gif3(v)
    }

    function delElement(selectors) {
        selectors.forEach(value => {
            let x = document.querySelector(value);
            if (x) {
                x.parentNode.removeChild(x)
            }
        });
    }

    function gp() {
        let tttid = '';
        let xxjj = $('html').html();
        let pp = /tid: (\d+)/.exec(xxjj);
        tttid = pp[1];
        let fo_name = /forum_name: "(.*?)"/.exec(xxjj)[1];
        document.querySelector('#pblist').addEventListener('click', event => {
            let t = event.target;

            if (t.nodeName !== 'IMG') {
                return
            }
            if (t.classList.contains('BDE_Image')) {
                t.src = t.dataset.src;
                obs = t
            }

            let imgs = $(t).parents('#pb_imgs_div');
            if (imgs.length > 0) {
                let ff = decodeURIComponent(t.src).split('/');
                let c = ff[ff.length - 1].split('.')[0];

                location.href = `https://tieba.baidu.com/mo/q/album?word=${fo_name}&tid=${tttid}}&template=slide_image&img_quality=100&click_url=${c}`;

                event.stopPropagation();
                event.preventDefault();

            }


        }, true);
    }

    function t() {
        lz();
        gp();

        $("ul#pblist>li").forEach(function (e, iii) {
            f(e);
            if (iii === 0) {
                let oo = e.querySelectorAll('.pb_img_item');
                if (oo.length > 0) {
                    oo.forEach(value => {
                        if (value.getAttribute('data-url')) {
                            value.setAttribute('data-class', 'BDE_Image');
                            value.setAttribute('src', value.getAttribute('data-url'));
                        }
                    });
                    //oo[0].parentElement.outerHTML=`<span class="wrap pbimgwapper">${oo[0].parentElement.innerHTML}</span>`
                }

            }
            let videos = e.querySelectorAll('.video');
            if (videos.length > 0) {
                videos.forEach(video => {
                    let src = video.getAttribute('data-vhsrc');
                    let img = video.querySelector('img');
                    video.outerHTML = `<video poster="${img.src}" src="${src}" controls="controls"  style="max-width:100%;min-width:100%"></video>`;
                });
            }
            delElement(['#diversBanner', '.j_videoFootDownBtn']);
            gif(e);


            let ee = $(e);
            let bt = e.querySelector('.j_nreply_btn');
            if (bt) {

            }

            let tid = ee.attr("tid");
            let content = ee.find(".list_item_top");
            let x = ee.find('.list_item_top a.j_report_btn');
            let kz = 0;
            if (x && x.length > 0) {
                kz = x[0].href.match(/tid=(\d+)&/);
                kz = kz[1];
            }
            let floor = e.getElementsByClassName('pb_floow_load');
            if (floor.length > 0) {
                let text = floor[0].textContent;
                let url = `https://tieba.baidu.com/t/p/${tid}`;
                let num = parseInt(text.match(/\d+/));
                content.append(`<div style="text-align:center;background-color: #F5F5F5;margin: 0 0 0 43px;"><a style="padding:12px;display:block;" href="javascript:void(0)" data-url="${url}" class="reply">还有${num}条回复</a></div>`);
                let res = content.find('a.reply');
                let orgnum = num;
                //console.log(content,res);
                if (res) {
                    res.forEach(function (v, i) {
                        let page = 2;
                        v.addEventListener('click', function () {
                            let that = this;

                            if (num === orgnum) {
                                let url = this.getAttribute('data-url');
                                $.get(url, function (rst) {
                                    let dom = (new DOMParser()).parseFromString(rst, 'text/html');
                                    let r = dom.querySelector('.j_floor_panel');
                                    let lii = r.querySelectorAll('li');
                                    lii.forEach(function (li, index) {
                                        if (index < 2) {
                                            return;
                                        }
                                        let uuu = li.querySelector('.left>div .user_name');
                                        let ct = li.querySelector('.user_name + p').innerText;
                                        let username = uuu.outerHTML;
                                        username = username.replace('</a>', `</a> : <span style="color: #8fa391">${ct}</span>`).replace('javascript:;', `/home/main?un=${uuu.innerText.replace(/ /g, '')}`);
                                        let s = li.querySelector('.content span');
                                        s.className = 'floor_content';
                                        let c = li.querySelector('.content').innerHTML;
                                        let div = `
        <div class="fmain j_floor_main">
            <div class="floor_footer_item">
            ${username}
            ${c}
            </div>
        </div>`;
                                        li.innerHTML = div;
                                        let ll = document.createElement('li');
                                        ll.classList.add('list_item_floor');
                                        ll.classList.add('j_list_item_floor');
                                        ll.innerHTML = div;
                                        ll.setAttribute('data-info', li.dataset.info);
                                        //console.log(content.find('.flist'))
                                        content.find('.flist')[0].appendChild(ll)

                                    });
                                    if (num <= 8) {
                                        that.parentNode.removeChild(that);
                                    } else {
                                        num -= 8;
                                        that.innerText = `还有${num}条回复`;
                                    }
                                });
                            } else {
                                let url = `https://tieba.baidu.com/mo/q//flr?fpn=${page}&kz=${kz}&pid=${tid}&is_ajax=1&has_url_param=0&template=lzl`;
                                $.get(url, function (res) {
                                    let ht = (new DOMParser()).parseFromString(res.data.floor_html, 'text/html');
                                    let lii = ht.querySelectorAll('li');
                                    lii.forEach(function (li, index) {

                                        let uuu = li.querySelector('.left>div .user_name');
                                        let ct = li.querySelector('.user_name + p').innerText;
                                        let username = uuu.outerHTML;
                                        username = username.replace('</a>', `</a> : <span style="color: #8fa391">${ct}</span>`).replace('javascript:;', `/home/main?un=${uuu.innerText.replace(/ /g, '')}`);
                                        let s = li.querySelector('.content span');
                                        s.className = 'floor_content';
                                        let c = li.querySelector('.content').innerHTML;
                                        let div = `
        <div class="fmain j_floor_main">
            <div class="floor_footer_item">
            ${username}
            ${c}
            </div>
        </div>`;
                                        li.innerHTML = div;
                                        let ll = document.createElement('li');
                                        ll.classList.add('list_item_floor');
                                        ll.classList.add('j_list_item_floor');
                                        ll.innerHTML = div;
                                        ll.setAttribute('data-info', li.dataset.info);
                                        //console.log(content.find('.flist'))
                                        content.find('.flist')[0].appendChild(ll)

                                    });
                                    ++page;
                                    if (num > 10) {
                                        num -= 10;
                                        that.innerText = `还有${num}条回复`;
                                    } else {
                                        that.parentNode.removeChild(that);
                                    }
                                })
                            }

                        })
                    })
                }
                floor[0].parentNode.removeChild(floor[0])
            }

        });
    }

    function lz() {
        let lz = document.querySelector('span.poster_only');
        if (lz) {
            lz.onclick = null;
            let h = location.href;
            let ff = 0;
            if (h.indexOf('see_lz=1') > -1) {
                lz.textContent = '取消只看楼主';
                h = h.replace('see_lz=1', 'see_lz=0');
                ff = 1;
            }
            lz.addEventListener('click', () => {

                if (ff === 0) {
                    h = h.indexOf('?') < 0 ? h + '?see_lz=1' : h + '&see_lz=1';
                }
                location.href = h;

            });
        }
    }

    function f(value) {
        let dt = JSON.parse(value.getAttribute('data-info'));
        if (dt) {
            let fl = dt.floor_num;
            let l = document.createElement('span');
            l.style.color = 'green';
            l.textContent = fl + '楼';
            if (fl === 1) {
                l.textContent = '楼主';
            } else if (fl === 2) {
                l.textContent = '沙发';
            } else if (fl === 3) {
                l.textContent = '板凳';
            }
            value.querySelector('.list_item_time').parentNode.appendChild(l);
        }
    }

    function check() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = 0;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > -1) {
                flag = 1;
                break;
            }
        }
        return flag;
    }

    function createTime() {
        let url = location.href.replace('&mo_device=1', '');

        if (url[url.length - 1] === '&') {
            url = url + 'tab=main&'
        }
        url = decodeURIComponent(url);
        if (url.indexOf('/mo/') > -1) {
            let word = /word=(.*?)&/.exec(url)[1];
            url = url.replace('mo/q/m', 'f').replace(/word=(.*?)&/, 'kw=' + word + '&');

        }
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            headers: {
                "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36'
            },
            //responseType: obj.responseType,
            onload: function (res) {

                let r = (new DOMParser()).parseFromString(res.responseText, 'text/html');
                let w = r.getElementById('pagelet_html_frs-list/pagelet/thread_list').innerHTML;
                let ul = w.replace('<!--', '').replace('-->', '');
                let u = document.createElement('div');
                u.innerHTML = ul;
                let lis = u.querySelectorAll('li.j_thread_list');

                if (lis.length > 0) {
                    lis.forEach(li => {
                        //debugger
                        let time = li.querySelector('.is_show_create_time');
                        if (!time) {
                            return
                        }
                        time = time.textContent;
                        let tid = li.dataset.tid;


                        if (tid !== null || tid !== 'null') {
                            let tar = document.querySelector('li[data-tid="' + tid + '"] .ti_author_icons');
                            if (!tar) {
                                return;
                            }

                            let d = document.createElement('span');
                            d.style.marginLeft = '1rem';
                            d.innerHTML = `<span style="color: #9999b3">${time}</span>`;
                            tar.appendChild(d)
                        }

                    })
                }
            },

        });
    }


    function list() {
        delElement([
            '.frs_daoliu_for_app', '.tl_shadow_for_app_modle', '.footer_logo', '.footer_link_highlight',
            '.appBottomPromote', '.appPromote',
        ]);
        let ads = document.querySelectorAll('li.tl_shadow_for_app');
        if (ads.length > 0) {
            let url = document.querySelector('.tl_shadow_for_app').parentNode.querySelector('a.j_common').href;
            ads.forEach(v => {
                //v.classList.remove('tl_shadow_for_app');
                let a = v.querySelector('a.j_enter_for_app');
                let tid = v.getAttribute('data-tid');
                a.href = url.replace(/\/(\d+)\?/.exec(url)[1], tid);
                a.classList.remove('tl_shadow_for_app');
            })
        }

        createTime();


        let list = document.querySelector('#tlist');
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        let observer = new MutationObserver((mutations) => {
            if (mutations.length > 0) {
                createTime();
            }
        });

        observer.observe(list, {
            attributes: true,
            childList: true,
            characterData: true
        });

        /*let lis = document.querySelectorAll('li.tl_shadow>a[data-thread-type="0"]');
        if (lis.length > 0) {
            lis.forEach(value => {
                let url = value.href;
                value.href = 'javascript:void(0);';
                value.onclick = (v) => {
                    GM.openInTab(url, true);
                }
            })
        }*/


    }

    function detail() {


        document.querySelector('a[class="ui_button ui_back j_span_back"]').addEventListener('click', event => {
            obs.src = obs.dataset.ss
        });

        reply();


        document.querySelectorAll('ul#pblist>li').forEach(value => {
            if (value.classList.contains('class_hide_flag')) {
                value.classList.remove('class_hide_flag');
            }
        });
        t();

        delElement([
            '.img_desc', '.father-cut-recommend-normal-box', '.father-cut-daoliu-normal-box',
            '#diversBanner', '.footer_logo', '.j_footer_link', '.frs_daoliu_for_app',
            '.j_videoFootDownBtn', '.appBottomPromote', '.appPromote',
        ]);


        document.querySelector('.father-cut-pager-class-no-page').classList.remove('father-cut-pager-class-no-page');

        let list = document.querySelector('ul#pblist');
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        let observer = new MutationObserver((mutations) => {
            if (mutations.length > 0) {
                t();
            }
        });

        observer.observe(list, {
            attributes: true,
            childList: true,
            characterData: true
        });


    }

    function clickControl() {
        let el = ['list_item_top_name', 'j_new_header_reply', 'list_item_user_wrap', 'user_img', 'user_name', 'icon_tieba_edit', 'reply_num', 'for_app_label_text_tag'];
        document.querySelector('body').addEventListener('click', ev => {
            for (let i in el) {
                if (ev.target.classList.contains(el[i])) {
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }
            if (ev.target.classList.contains('j_postor_blue_kit_btn_return') || ev.target.classList.contains('j_submit_btn') || ev.target.classList.contains('close-btn')) {
                let pages = document.querySelectorAll('#list_pager');
                if (pages.length > 1) {
                    let count = pages.length;
                    pages.forEach(el => {
                        if (count !== 1) {
                            --count;
                            el.parentNode.removeChild(el);
                        }
                    })
                }
            }

            if (ev.target.tagName === 'svg') {
                ev.stopPropagation();
                ev.preventDefault();
                if (ev.target.innerHTML.indexOf('remind_on') > -1) {
                    location.href = '/mo/q/msg'
                }
                if (ev.target.innerHTML.indexOf('topbar_search') > -1) {
                    location.href = '/mo/q/searchpage'
                }
            }

            if (ev.target.tagName === 'A' && ev.target.classList.contains('notice')) {
                ev.stopPropagation();
                ev.preventDefault();
                location.href = '/mo/q/msg';
            }

            if (ev.target.tagName === 'A' && ev.target.className === 'item comment itemonly') {
                ev.stopPropagation();
                ev.preventDefault();
            }

            if (ev.target.classList.contains('j_new_header_reply')) {
                F.use('spb/widget/normal_post_list', function (threadList) {
                    let x = new threadList(window.conxx);
                    x.floorReply(ev);
                });
            }

            if (ev.target.classList.contains('user_img')) {
                let name = $(ev.target).parents('li').find('span.user_name').text();
                location.href = `/home/main?un=${name}`;
            }
            let ii;
            if (ev.target.tagName === 'IMG' && (ii = ev.target.parentNode, ii.classList.contains('ti_avatar'))) {
                location.href = ii.dataset.url;
            }

            if (ev.target.classList.contains('user_name')) {
                location.href = `/home/main?un=${ev.target.innerText}`;
            }
            if (ev.target.tagName === 'SPAN' && ev.target.classList.contains('forumname')) {
                location.href = `/f?kw=${ev.target.innerText}&pn=0&`;
            }
            if (ev.target.tagName === 'SPAN' && (ev.target.classList.contains('createtime') || ev.target.classList.contains('ti_time') || ev.target.classList.contains('ti_author'))) {
                ev.stopPropagation();
                ev.preventDefault();
            }
            if (ev.target.tagName === 'SPAN' && ev.target.classList.contains('btn_icon')) {
                ev.stopPropagation();
                ev.preventDefault();
            }
            if (ev.target.tagName === 'H4' && ev.target.classList.contains('title')) {
                location.href = `/home/main?un=${ev.target.innerText}`;
            }
            if (ev.target.classList.contains('icon_tieba_edit')) {
                //todo 发帖 似乎没相关的调用模块？？？
            }
            //console.log(ev.target,ev.target.tagName)

        }, true);
    }

    function reply() {
        let h = document.querySelector('html').innerHTML;
        let co = /spb\/widget\/normal_post_list', function \(threadList\) \{            new threadList\((.*?)\}\);/.exec(h);
        let con = co[1] + '}';
        let conf = (new Function("return " + con))();

        window.conxx = conf;

        document.querySelectorAll('.j_nreply_btn').forEach(value => {
            value.addEventListener('click', evt => {
                evt.preventDefault();
                evt.stopPropagation();
                F.use('spb/widget/normal_post_list', function (threadList) {
                    let x = new threadList(conf);
                    x.floorReply(evt);
                });

            })
        })
    }

    try {

        if (!check()) {
            return;
        }
        clickControl();
        
        var killAD = document.createElement("style");
        killAD.type = "text/css";
        killAD.innerHTML = ".class_hide_flag{display:block!important;}.father-cut-pager-class-no-page>#list_pager{visibility: visible!important;height: 44px!important;}#glob,body{margin-top: 0px!important;}.father_cut_list_class{padding-bottom: 0px!important;}.father-cut-recommend-normal-box,.footer,.father-cut-daoliu-normal-box,.fixed_bar,.pb,.frs,.no_mean,.addbodybottom,.img_desc,.tl_shadow_for_app,.top-guide-wrap,.open-style,.index-feed-cards .hot-topic,.appPromote_wrapper,.ui_image_header_bottom,.videoFooter,#diversBanner,.tb-footer-wrap,.interest-bar,.footer-wrap,.client-btn,.daoliu{display:none!important;}.tl_shadow:not([data-tid]),#pblist>li:not([data-tid]){display:none!important;}.navbar-view{top:24px!important;}.navbar-box{top:44px!important;}";
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(killAD);
        var oldURL, newURL;

        if (document.querySelector('#pblist')) {
            detail();
        }
        if (document.querySelector('#tlist')) {
            list();
        }

    } catch (e) {
        console.log(e)
    }
})();