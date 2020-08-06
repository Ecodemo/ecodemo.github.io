//==========via-plugin:25==========
//==========N-lib==========
(function() {
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
}),0;
})();
//==========via-plugin:25==========
//==========via-plugin:33==========
//==========隐藏广告==========
(function() {
`
@name hide-ads
@version 0.0.6
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

function style(ele, sty, pseudo = null) {
    return window.getComputedStyle(ele, pseudo).getPropertyValue(sty).trim();
}

function is_fixed_element(ele) {
    if (ele.tagName != 'BODY') {
        if (style(ele, 'position') === 'fixed' ||
            style(ele, 'position', '::before') === 'fixed' ||
            style(ele, 'position', '::after') === 'fixed') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function maybe_float(ele) {
    return is_fixed_element(ele);
}

function get_maybe_float_advertising(parent_ele = document.body) {
    const maybe_float_eles = [];
    Array.from(parent_ele.children).forEach(child => {
        if (maybe_float(child)) {
            maybe_float_eles.push(child);
        } else if (child.tagName === 'IFRAME') {
            try {
                [].push.apply(maybe_float_eles,
                              get_maybe_float_advertising(child.contentWindow.document.body));
            } catch {
            }
        }  else {
            [].push.apply(maybe_float_eles, get_maybe_float_advertising(child));
        }
    });
    return maybe_float_eles;
}

function visible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView && style(el, 'display') !== 'none');
}

function max_image(el1, el2) {
    if (!el1) {
        return el2;
    } else if (!el2) {
        return el1;
    } else if (el1.clientWidth > el2.clientWidth) {
        return el1;
    } else {
        return el2;
    }
}

function get_max_image(el) {
    const image_in_background = el => {
        if (style(el, 'background').match(/url\s*\(/) ||
            style(el, 'background', '::before').match(/url\s*\(/) ||
            style(el, 'background', '::after').match(/url\s*\(/)) {
            return el;
        } else {
            return null;
        }
    };
    if (el.tagName === 'IMG' || image_in_background(el)) {
        return el;
    } else {
        return Array.from(el.children, get_max_image).reduce(max_image, null);
    }
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

function find_top_wrap_ele(ele) {
    if (ele.tagName !== 'BODY') {
        if (ele.parentElement.tagName !== 'BODY' &&
            is_same_size_position(ele, ele.parentElement)) {
            return find_top_wrap_ele(ele.parentElement);
        } else {
            return ele;
        }
    } else {
        return ele;
    }
}

function find_advertising_wrap_element(el) {
    while (el.parentElement.childElementCount === 1) {
        el = el.parentElement;
    }
    return el;
}

function legalize_id(id) {
    return id.trim().replace(/^\d/, '\\3$& ').replace(/\./g, '\\.');
}

function dom_path(el) {
    if (!(el instanceof Element) || el.nodeType !== Node.ELEMENT_NODE) {
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

function area(el) {
    return !el ? 0 : el.clientWidth * el.clientHeight;
}

function maybe_advertising(el) {
    const img = get_max_image(el);
    return img && (area(img) / area(el) >= .5 ||
                   img.clientWidth / el.clientWidth >= .6);
}

function get_float_advertising(parent_ele = document.body) {
    return get_maybe_float_advertising(parent_ele)
        .filter(maybe_advertising)
        .map(find_advertising_wrap_element)
        .map(find_top_wrap_ele)
        .filter(el => area(el) / area(document.documentElement) <= .8);
}

function maybe_scroll_advertising(el) {
    const img = get_max_image(el);
    return img && img.clientWidth / document.documentElement.clientWidth >= .8;
}

function get_maybe_scroll_advertising(el) {
    return Array.from(document.querySelectorAll('a img'));
}

function get_scroll_advertising(parent_ele = document.body) {
    return get_maybe_scroll_advertising(parent_ele)
        .filter(maybe_advertising)
        .filter(maybe_scroll_advertising)
        .filter(el => find_advertising_wrap_element(el) != el)
        .map(find_advertising_wrap_element)
        .map(find_top_wrap_ele)
        .filter(el => area(el) / area(document.documentElement) <= .8);
}

const style_sheet = new Set();
let style_size = 0;

function remove_advertising(ad_els, hint = '') {
    ad_els.forEach(ele => {
        if (ele.id) {
            style_sheet.add('#' + legalize_id(ele.id));
        } else {
            style_sheet.add(dom_path(ele));
        }
    });

    if (style_sheet.size !== style_size) {
        const style_eles = [top].concat(Array.from(top.frames))
            .filter(window => { try { return window.document } catch {} })
            .map(window => {
                const style = window.document.createElement('style');
                window.document.body.append(style);
                return style;
            });
        style_size = style_sheet.size;
        style_eles.forEach(style => style.innerHTML = Array.from(style_sheet).join(', ') + ' { display: none !important; }');
        console.log('hide-ads: ' + hint, ad_els);
    }


    return ad_els;
}

const remove_ad = throttle(() => {
    remove_advertising(get_float_advertising(document.body), 'float: ');
    remove_advertising(get_scroll_advertising(document.body), 'scroll: ');
}, 1000);

let interval = setInterval(() => {
    remove_ad();
    if (style_size) {
        clearInterval(interval);
        interval = setInterval(remove_ad, 5000);
        console.log('set hide-ads invocation interval to 5s.');
    }
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log('close hide-ads.');
}, 60 * 1000);

console.log('start hide-ads.');
remove_ad();

}]);return _;}),0;
})();
//==========via-plugin:33==========
