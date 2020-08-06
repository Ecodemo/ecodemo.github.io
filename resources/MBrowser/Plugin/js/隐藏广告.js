// ==UserScript== 
// @name   隐藏广告
// @author   酷安Nihility
// @description  隐藏广告
通用型插件，通过隐藏广告的方式达到去广告效果。
目前只能去浮动广告。
因为样本太少，太家也不够热情，所以可能存在部分广告无法隐藏或误杀的情况
PS：因浏览器限制，对同源限制的 iframe 无效。

误杀自行填写白名单
// @match   *
// @run-at   document-start
// ==/UserScript==
// @exclude http*://m.baidu.com/*
// @exclude http*://www.baidu.com/*
// ==/UserScript==
`
@name hide-ads
@version 0.0.7
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://填写白名单域名.*
@exclude https?://www.nicotv.*
@exclude https?://iafuns.*
@exclude https?://xukunx.*
@exclude https?://halihali.*
@exclude https?://1090ys.*
@exclude https?://17kyun.*

`
.replace("", (_, __, config_text) => {
(window.__load_scripts__ = window.__load_scripts__ || []).push([config_text,
function () {

function throttle(fn, wait) {
    let inThrottle, lastFn, lastTime;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function() {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(this, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

function unique_filter(obj, idx, lst) {
    return lst.indexOf(obj) === idx;
}

function legalize_id(id) {
    return id.trim().replace(/^\d/, '\\3$& ').replace(/\./g, '\\.');
}

function dom_path(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) {
        return;
    } else if (el.tagName === 'BODY') {
        return 'body';
    } else if (el.id) {
        return '#' + legalize_id(el.id);
    } else {
        const cur_nth = (el, nth = 0) =>
            el.parentElement.children[nth] === el ? nth + 1 : cur_nth(el, nth + 1);
        const tag = el.tagName.toLowerCase();
        return `${dom_path(el.parentElement)} > ${tag}:nth-child(${cur_nth(el)})`;
    }
}

function flatten(lst) {
    return [].concat.apply([], lst);
}

function all_vaild_window(window = top) {
    const vaild = w => { try { return w.document } catch {} };
    return [window].concat(flatten(Array.from(window.frames)
                                   .filter(vaild)
                                   .map(all_vaild_window)));
}

function get_all_element(window) {
    return Array.from(window.document.body.querySelectorAll('*'));
}

function style(el, sty, pseudo = null) {
    return window.getComputedStyle(el, pseudo).getPropertyValue(sty).trim();
}

function is_fixed_element(el) {
    if (el.tagName == 'BODY') {
        return false;
    } else {
        return style(el, 'position') === 'fixed' ||
            style(el, 'position', '::before') === 'fixed' ||
            style(el, 'position', '::after') === 'fixed';
    }
}

function maybe_float(el) {
    return is_fixed_element(el);
}

function at_side(dir, el, dis = window.innerHeight * .2) {
    return parseInt(style(el, dir)) <= dis ||
        parseInt(style(el, dir, '::before')) <= dis ||
        parseInt(style(el, dir, '::after')) <= dis;
}

function max_image(el1, el2) {
    if (!el1) {
        return el2;
    } else if (!el2) {
        return el1;
    } else {
        if (el1.clientWidth > el2.clientWidth) {
            return el1;
        } else {
            return el2;
        }
    }
}

function get_max_image(el) {
    const image_in_background = el =>
        style(el, 'background').match(/url\s*\(/) ||
        style(el, 'background', '::before').match(/url\s*\(/) ||
        style(el, 'background', '::after').match(/url\s*\(/);

    if (el.tagName === 'IMG' || image_in_background(el)) {
        return el;
    } else if (el.tagName === 'IFRAME') {
        try {
            return get_max_image(el.contentDocument.body);
        } catch {
            return null;
        }
    } else {
        return Array.from(el.children, get_max_image).reduce(max_image, null);
    }
}
function exist_image(el) {
    return get_max_image(el);
}

function exist_frame(el) {
    return el.querySelector('iframe');
}

function maybe_advertising(el) {
    return exist_frame(el) || get_max_image(el);
}

function area(el) {
    return !el ? 0 : el.clientWidth * el.clientHeight;
}

function image_size_ge_50(el) {
    const img = get_max_image(el);
    return img && (area(img) / area(el) >= .5 ||
                   img.clientWidth / el.clientWidth >= .6);
}

function get_url(str) {
    return (str.match(/['"]([^'"]+)/) || {})[1] || '';
}

function is_same_domain(url1, url2, level = 0) {
    if (typeof url1 !== 'string' || typeof url2 !== 'string') {
        return false;
    }

    if (url1.match(/^\s*\//) || url2.match(/^\s*\//)) {
        return true;
    }

    const get_hostname = url => (url.match(/^\s*https?:\/\/([^:/]+)/) || {})[1] || '';
    const u1_domain = get_hostname(url1).split('.').slice(-level).join('.');
    const u2_domain = get_hostname(url2).split('.').slice(-level).join('.');
    return u1_domain === u2_domain;
}
function is_same_seconde_level_domain(url1, url2) {
    return is_same_domain(url1, url2, 2);
}

function visible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView && style(el, 'display') !== 'none');
}

function is_same_size(el1, el2) {
    if (el1 && el2) {
        return el1.clientWidth === el2.clientWidth &&
            el1.clientHeight === el2.clientHeight;
    } else {
        return false;
    }
}

function is_same_position(el1, el2) {
    if (el1 && el2) {
        return el1.scrollHeight === el2.scrollHeight;
    } else {
        return false;
    }
}

function is_same_size_position(el1, el2) {
    return is_same_size(el1, el2) && is_same_position(el1, el2);
}

function find_top_wrap_element(el) {
    if (el.tagName === 'BODY') {
        return el;
    } else {
        if (is_same_size_position(el, el.parentElement)) {
            return find_top_wrap_element(el.parentElement);
        } else {
            return el;
        }
    }
}

function find_advertising_wrap_element(el) {
    while (el.parentElement.childElementCount === 1) {
        el = el.parentElement;
    }
    return el;
}

function is_clickable(el) {
    return el.onclick || el.href || el.dataset.href;
}
function clickable(el) {
    if (is_clickable(el)) {
        return el;
    } else {
        return el.querySelector('a[href]:not([href^="java"]), [onclick], [data-href]');
    }
}
function clickables(el) {
    return (is_clickable(el) ? [el] : [])
        .concat(Array.from(el.querySelectorAll('a[href]:not([href^="java"]), [onclick], [data-href]')));
}

function link_to_external(el) {
    const link_els = clickables(el);
    return link_els.some(link_el => {
        const link = link_el.href || link_el.dataset.href;
        return link && !is_same_seconde_level_domain(link, top.location.href) ||
            link_el.onclick && link_el.onclick.toString().match(/{\s*.+\s*}/) &&
            !is_same_seconde_level_domain(get_url(link_el.onclick.toString()),
                                          top.location.href) &&
            !link_el.onclick.toString().includes('parent') &&
            !link_el.onclick.toString().includes('next');
    });
}

function image_link_to_external(el) {
    const link_els = clickables(el);
    return link_els.some(link_el => {
        return exist_image(link_el) && link_to_external(link_el);
    });
}

function width_is_page_width(lower, upper, el) {
    const scale = el.clientWidth / document.documentElement.clientWidth;
    return scale >= lower && scale <= upper;
}

function image_width_is_page_width(lower, upper, el) {
    const img = get_max_image(el);
    if (img) {
        return width_is_page_width(lower, upper, img);
    } else {
        return false;
    }
}

function get_maybe_float_advertising() {
    return flatten(all_vaild_window().map(get_all_element))
        .filter(maybe_float)
        .filter(maybe_advertising)
        .filter(el => {
            if (exist_frame(el)) {
                return true;
            }
            if ((at_side('top', el) || at_side('bottom', el))) {
                return image_link_to_external(el) ||
                    image_width_is_page_width(0.8, 1, el);
            }
            if ((at_side('left', el) || at_side('right', el))) {
                return exist_image(el) &&
                    width_is_page_width(0, 0.5, el) &&
                    image_width_is_page_width(0, 0.5, el);
            }
            return false;
        })
        .filter(unique_filter);
}

function get_float_advertising() {
    return get_maybe_float_advertising()
        .map(find_advertising_wrap_element)
        .map(find_top_wrap_element)
        .filter(el => el.tagName !== 'BODY')
        .filter(el => area(el) / area(document.documentElement) <= .8)
        .filter(unique_filter)
        .filter((el, idx, lst) => !lst.some(e => e !== el && e.contains(el)));
}

function get_maybe_scroll_advertising() {
    const include_text = el => ['点击下载', '广告'].some(s => el.textContent.includes(s));
    return flatten(all_vaild_window().map(get_all_element))
        .filter(maybe_advertising)
        .map(el =>
             (include_text(el) && el) ||
             get_max_image(el) ||
             exist_frame(el)
        ).filter(x => x)
        .map(find_advertising_wrap_element)
        .map(find_top_wrap_element)
        .filter(el => [
            el => exist_frame(el) &&
            width_is_page_width(0.8, 1, el) && !el.innerHTML.includes('play'),
            el => image_link_to_external(el) &&
            clickables(el).some(img => image_width_is_page_width(0.8, 1, img)),
            el => (el.tagName === 'UL' || el.tagName === 'LI') &&
            image_width_is_page_width(0.3, 0.6, el),
            el => include_text(el) && link_to_external(el),
        ].some(p => p(el)))
        .filter(unique_filter);
}

function get_scroll_advertising() {
    return get_maybe_scroll_advertising()
        /* .filter(el => find_advertising_wrap_element(el) != el) */
        .map(find_advertising_wrap_element)
        .map(find_top_wrap_element)
        .filter(el => !el.className.includes('slider') && !el.className.includes('swip'))
        .filter(el => el.tagName !== 'BODY')
        .filter(el => area(el) / area(document.documentElement) <= .8)
        .filter(unique_filter)
        .filter((el, idx, lst) => !lst.some(e => e !== el && e.contains(el)));
}

function maybe_fullscreen_link(el) {
    return maybe_float(el) && !exist_image(el) && link_to_external(el) &&
        area(el) / area(document.documentElement) >= .9 &&
        width_is_page_width(0.95, 1, el);
}

function get_maybe_fullscreen_advertising() {
    return flatten(all_vaild_window().map(get_all_element))
        .filter(maybe_float)
        .filter(maybe_fullscreen_link)
        .filter(el => el.textContent.trim() === '')
        .filter(unique_filter);
}

function get_fullscreen_advertising() {
    return get_maybe_fullscreen_advertising()
        .map(find_advertising_wrap_element)
        .map(find_top_wrap_element)
        .filter(el => el.tagName !== 'BODY')
        .filter(unique_filter)
        .filter((el, idx, lst) => !lst.some(e => e !== el && e.contains(el)));
}

function remove_advertising(ad_els, hint = '') {
    const self = remove_advertising;
    self.style_sheet = self.style_sheet || new Set();
    const size = self.style_sheet.size;
    ad_els = ad_els.filter(el => el.tagName !== 'BODY');
    ad_els.forEach(el => {
        if (!el.id && !el.classList.length) {
            self.style_sheet.add(dom_path(el));
        } else {
            if (el.classList.length) {
                self.style_sheet.add(Array.from(el.classList, name => `.${legalize_id(name)}`).join(''));
            }
            if (el.id) {
                self.style_sheet.add(`#${legalize_id(el.id)}`);
            }
        }
    });


    if (size !== self.style_sheet.size) {
        const style_els = all_vaild_window().map(window => {
            const style = window.document.getElementById('hide-ads-style') ||
                window.document.createElement('style');
            style.id = 'hide-ads-style';
            window.document.body.append(style);
            return style;
        });

        const style_content = Array.from(self.style_sheet).join(', ') +
            ' { display: none !important; }';
        style_els.forEach(style => style.innerHTML = style_content);
        console.log('hide-ads: ' + hint, ad_els);
    }

    return ad_els;
}

var remove_ad = throttle(() => {
    remove_advertising(get_float_advertising(document.body), 'float: ');
    remove_advertising(get_scroll_advertising(document.body), 'scroll: ');
    remove_advertising(get_fullscreen_advertising(document.body), 'fullscreen: ');
}, 1000);

var interval_id;
function create_invocation(fn, interval) {
    clearInterval(interval_id);
    interval_id = setInterval(() => {
        remove_ad();
    }, interval);
}

create_invocation(remove_ad, 1000);

setTimeout(() => create_invocation(remove_ad, 3000), 5000);

setTimeout(() => {
    clearInterval(interval_id);
    console.log('hide-ads: exit');
}, 60 * 1000);

console.log('hide-ads: run');
remove_ad();

}]);return _;}),0;;
`
@name N-lib
@version 0.0.3
`
.replace("", (_, __, config_text) => {
    const parse = config_text => {
        const config_item_regex = new RegExp(`@(\\S+)\\b\\s+([^@\\s]+([^\\r\\n\\S]+[^@\\s]+)*)`, 'gm');
        return Object.assign({ include: ['.*'], exclude: [], match: [] },
            (config_text.match(config_item_regex) || [])
            .map(config_item => config_item.replace(/^\s*@/, '').split(/\s+/))
            .reduce((config, item) => {
                (config[item[0]] = config[item[0]] || []).push(item[1]);
                return config;
            }, {}));
    };

    const once = (config = parse(``)) => fn => {
        const include_ptn = new RegExp('^(' + config.include.concat(config.match).join('|') + ')$');
        const exclude_ptn = new RegExp('^(' + config.exclude.join('|') + ')$');
        if (!window.location.href.match(include_ptn) ||
            window.location.href.match(exclude_ptn)) {
            return;
        }

        const hash_code = str => Array.from(str)
            .reduce((hash, ch) => (hash << 5) - hash + ch.charCodeAt(), 0);
        window.__loaded_scripts__ = window.__loaded_scripts__ || {};
        const key = config.name || hash_code(fn.toString());
        if (!(key in window.__loaded_scripts__)) {
            try {
                fn.call(config);
            } catch (e) {
                window.__loaded_scripts__[key] = e;
                console.log(`script "${key}" load failed!`);
            }
            window.__loaded_scripts__[key] = config;
            console.log(`script "${key}" load successful!`);
        }
    };

    once(parse(config_text))(() => {
		function exec(x)  {
			if (typeof x === 'function') {
				once()(x);
			} else if (Array.isArray(x)) {
				once(parse(x[0]))(x[1]);
			}
		}
		(window.__load_scripts__ || []).forEach(exec);
		window.__load_scripts__ = { push: exec };
	});

	return _;
}),0;;