window.encryption = (str) => window.btoa(unescape(encodeURIComponent(str)));
window.decrypt = (str) => decodeURIComponent(escape(window.atob(str)));

const commonContext = {
    /* 初始化widget */
    initWidget() {
        const $columnRight = $('.columns .column-right');
        const $columnRightShadow = $('.columns .column-right-shadow');
        // 实现将右边widget拷贝的左边
        if ($columnRight.length && $columnRightShadow.length && !$columnRightShadow[0].children.length) {
            for (const child of $columnRight[0].children) {
                $columnRightShadow[0].append(child.cloneNode(true));
            }
        }
    },
    /* 初始化目录和公告模块 */
    initTocAndNotice() {
        const {pathname} = location;
        window.tocPjax && window.tocPjax()
        let hideToc = $('.widget.toc .card-content ul').length === 0;
        let hideNotice = (DreamConfig.notice_show_mode === 'toc' && !hideToc)
            || (DreamConfig.notice_show_mode === 'index' && pathname !== '/')
        if (hideToc) {
            $('.widget.toc,.action-toc').addClass("is-hidden-all");
        } else {
            $('.widget.toc,.action-toc').removeClass("is-hidden-all");
        }
        if (hideNotice) {
            $('.widget.notice').addClass("is-hidden-all");
        } else {
            $('.widget.notice').removeClass("is-hidden-all");
        }
    },
    /* widget固定底部 */
    widgetFixedBottom() {
        const columnLeft = $(".left-bottom")[0];
        const columnRight = $(".right-bottom")[0];

        function leftSetBottom() {
            if ($(window).width() < 769) {
                columnLeft.style.top = null
            } else {
                columnLeft.style.top = $(window).height() - columnLeft.scrollHeight - 10 + "px";
            }
        }

        function rightSetBottom() {
            if ($(window).width() >= 1216) {
                columnRight.style.top = $(window).height() - columnRight.scrollHeight - 10 + "px";
            }
        }

        if (columnLeft) {
            leftSetBottom(), $(window).resize(leftSetBottom), document.addEventListener("scroll", leftSetBottom);
        }
        if (columnRight) {
            rightSetBottom(), $(window).resize(rightSetBottom), document.addEventListener("scroll", rightSetBottom);
        }
    },
    /* 激活图片预览功能 */
    initGallery() {
        // 用链接和标题包装图像
        $('.main-content img:not(.not-gallery)').each(function () {
            if ($(this).parents('[data-fancybox],mew-photos').length === 0) {
                $(this).wrap($(`<span class="gallery-item" data-fancybox="gallery" ${this.alt ? "data-caption=\"" + this.alt + "\"" : ""} href="${$(this).attr('src')}"></span>`));
                if (this.alt) {
                    $(this).after(`<p>${this.alt}</p>`);
                }
            }
        });
    },
    /* 初始化主题模式（仅用户模式） */
    initMode() {
        let isNight = localStorage.getItem('night');
        const applyNight = (value) => {
            if (value.toString() === 'true') {
                document.documentElement.classList.add('night');
            } else {
                document.documentElement.classList.remove('night');
            }
        }
        $("#toggle-mode").on('click', function () {
            isNight = isNight.toString() !== 'true';
            applyNight(isNight);
            $("halo-comment").each(function () {
                const shadowDom = this.shadowRoot.getElementById("halo-comment");
                $(shadowDom)[`${isNight ? "add" : "remove"}Class`]("night");
            })
            localStorage.setItem('night', isNight);
        });
    },
    /* 导航条高亮 */
    initNavbar() {
        const $nav_menus = $(".navbar-nav a");
        const $nav_side_menus = $(".panel-side-menu .link");
        let activeIndex = 0;
        const {href, pathname} = location;

        if (pathname && pathname !== "/") {
            for (let i = 0; i < $nav_menus.length; i++) {
                const cur_href = $nav_menus[i].getAttribute("href");
                if (pathname.includes(cur_href) || href.includes(cur_href)) {
                    activeIndex = i;
                    if (pathname === cur_href || href === cur_href) break;
                }
            }
        }

        // 高亮PC端
        const $curMenu = $nav_menus.eq(activeIndex);
        $curMenu.addClass("current");
        if ($curMenu.parents(".item-dropdown").length) {
            $curMenu
                .parents(".item-dropdown")
                .find(".item-dropdown-link a")
                .addClass("current");
        }

        // 高亮移动端
        $nav_side_menus.eq(activeIndex).addClass("current");
    },
    /* 激活导航栏全局下拉框功能 */
    initDropMenu() {
        $(".item-dropdown").each(function (index, item) {
            const menu = $(this).find(".item-dropdown-menu");
            const trigger = $(item).attr("trigger") || "click";
            const placement = $(item).attr("placement") || $(this).height() || 0;
            menu.css("top", placement);
            if (trigger === "hover") {
                $(this).hover(
                    () => $(this).addClass("active"),
                    () => $(this).removeClass("active")
                );
            } else {
                $(this).on("click", function (e) {
                    e.stopPropagation();
                    $(this).toggleClass("active");
                    $(document).one("click", () => $(this).removeClass("active"));
                    e.stopPropagation();
                });
                menu.on("click", (e) => e.stopPropagation());
            }
        });
    },
    /* 处理滚动 */
    initScroll() {
        let initTop = 0

        // true：上划，false：下滑
        function scrollDirection(currentTop) {
            const result = currentTop > initTop
            initTop = currentTop
            return result
        }

        const handleScroll = () => {
            const scrollTop = $(document).scrollTop();
            const direction = scrollDirection(scrollTop);
            const $body = $("body");
            const $actions = $(".actions");
            if (scrollTop > 50 && direction) {
                $body.addClass("move-up");
            } else {
                $body.removeClass("move-up");
            }
            if (scrollTop > 100) {
                $actions.addClass("show");
            } else {
                $actions.removeClass("show");
            }
        }
        document.addEventListener("scroll", handleScroll);
    },
    /* 搜索框弹窗 */
    searchDialog() {
        const $result = $(".navbar-search .result");
        $(".navbar-search .input").on("click", function (e) {
            e.stopPropagation();
            $result.addClass("active");
        });
        $(document).on("click", function () {
            $result.removeClass("active");
        });
    },
    /* 小屏幕伸缩侧边栏，包含导航或者目录 */
    drawerMobile() {
        $(".navbar-slideicon").on("click", function (e) {
            e.stopPropagation();
            /* 关闭搜索框 */
            $(".navbar-searchout").removeClass("active");
            /* 处理开启关闭状态 */
            const $html = $("html");
            const $mask = $(".navbar-mask");
            const $slide_out = $(".navbar-slideout");
            if ($slide_out.hasClass("active")) {
                $html.removeClass("disable-scroll");
                $mask.removeClass("active slideout");
                $slide_out.removeClass("active");
            } else {
                $html.addClass("disable-scroll");
                $mask.addClass("active slideout");
                $slide_out.addClass("active");
            }
        });
        $(".action-toc").on("click", function (e) {
            e.stopPropagation();
            /* 关闭搜索框 */
            $(".navbar-searchout").removeClass("active");
            /* 处理开启关闭状态 */
            const $html = $("html");
            const $mask = $(".navbar-mask");
            const $slide_out = $(".navbar-slideout");
            if ($slide_out.hasClass("active")) {
                $html.removeClass("disable-scroll");
                $mask.removeClass("active slideout");
                $slide_out.removeClass("active slideout-toc");
            } else {
                $html.addClass("disable-scroll");
                $mask.addClass("active slideout");
                $slide_out.addClass("active slideout-toc");
            }
        });
    },
    /* 激活全局返回顶部功能 */
    back2Top() {
        $('#back-to-top').on('click', function () {
            $('body, html').animate({scrollTop: 0}, 400);
        });
    },
    /* 小屏幕搜索框 */
    searchMobile() {
        $(".navbar-searchicon").on("click", function (e) {
            e.stopPropagation();
            /* 关闭侧边栏 */
            $(".navbar-slideout").removeClass("active");
            /* 处理开启关闭状态 */
            const $html = $("html");
            const $mask = $(".navbar-mask");
            const $above = $(".navbar-above");
            const $search_out = $(".navbar-searchout");
            if ($search_out.hasClass("active")) {
                $html.removeClass("disable-scroll");
                $mask.removeClass("active slideout");
                $search_out.removeClass("active");
                $above.removeClass("solid");
            } else {
                $html.addClass("disable-scroll");
                $mask.addClass("active");
                $above.addClass("solid");
                $search_out.addClass("active");
            }
        });
    },
    /* 点击遮罩层关闭 */
    maskClose() {
        $(".navbar-mask")
            .on("click", function (e) {
                e.stopPropagation();
                $("html").removeClass("disable-scroll");
                $(".navbar-mask").removeClass("active slideout");
                $(".navbar-searchout").removeClass("active");
                $(".navbar-slideout").removeClass("active slideout-toc");
                $(".navbar-above").removeClass("solid");
            })
            .on("touchmove", (e) => e.preventDefault);
        $(".navbar .toc-content")
            .on("click", function (e) {
                e.stopPropagation();
                $("html").removeClass("disable-scroll");
                $(".navbar-mask").removeClass("active slideout");
                $(".navbar-slideout").removeClass("active slideout-toc");
            })
    },
    /* 移动端侧边栏菜单手风琴 */
    sideMenuMobile() {
        $(".navbar-slideout-menu .current")
            .parents(".panel-body")
            .show()
            .siblings(".panel")
            .addClass("in");
        $(".navbar-slideout-menu .panel").on("click", function (e) {
            e.stopPropagation();
            const $this = $(this);
            const panelBox = $this.parent().parent();
            /* 清除全部内容 */
            panelBox.find(".panel").not($this).removeClass("in");
            panelBox
                .find(".panel-body")
                .not($this.siblings(".panel-body"))
                .stop()
                .hide("fast");
            /* 激活当前的内容 */
            $this.toggleClass("in").siblings(".panel-body").stop().toggle("fast");
        });
    },
    /* 初始化事件 */
    initEvent() {
        $("body").on("click", ".click-close", function (e) {
            e.stopPropagation();
            const closeSelect = $(this).attr('data-close').trim();
            if (closeSelect && closeSelect !== '') {
                $(this).closest(closeSelect).remove();
            } else {
                $(this).closest().remove();
            }
        });
    },
    /* 离屏提示 */
    offscreenTip() {
        if (Utils.isMobile() || (!DreamConfig.document_hidden_title && !DreamConfig.document_visible_title)) return;
        const originTitle = document.title;
        let timer = null;
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                DreamConfig.document_hidden_title && (document.title = DreamConfig.document_hidden_title)
                clearTimeout(timer);
            } else {
                document.title = DreamConfig.document_visible_title || originTitle;
                DreamConfig.document_visible_title && (timer = setTimeout(function () {
                    document.title = originTitle;
                }, 2000));
            }
        });
    },
    /* 个人信息界面打印彩字 */
    sparkInput() {
        const sparkInputContent = DreamConfig.spark_input_content && DreamConfig.spark_input_content.filter(s => s.length > 0);
        if (sparkInputContent && sparkInputContent.length > 0) {
            Utils.cachedScript(`${DreamConfig.theme_base}/source/js/spark-input.min.js`, function () {
                document.getElementsByClassName('main-content')
                $('.spark-input').each((index, domEle) => sparkInput(domEle, sparkInputContent));
            })
        }
    },
    /* 激活建站倒计时功能 */
    websiteTime() {
        if (!DreamConfig.website_time) {
            return;
        }
        const websiteDate = document.getElementById("websiteDate");
        if (!/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/.test(DreamConfig.website_time)) {
            websiteDate.innerText = `建站 ${DreamConfig.website_time}`
            return;
        }
        const now = new Date();
        const grt = new Date(DreamConfig.website_time);
        setInterval(function () {
            now.setTime(now.getTime() + 1000);
            let difference = parseInt((now - grt) / 1000);
            let seconds = difference % 60;
            if (String(seconds).length === 1) {
                seconds = "0" + seconds;
            }
            difference = parseInt(difference / 60);

            let minutes = difference % 60;
            if (String(minutes).length === 1) {
                minutes = "0" + minutes;
            }
            difference = parseInt(difference / 60);

            let hours = difference % 24;
            if (String(hours).length === 1) {
                hours = "0" + hours;
            }
            let days = parseInt(difference / 24);
            websiteDate.innerHTML = `建站<span class="stand">${days}</span>天<span class="stand">${hours}</span>小时<span class="stand">${minutes}</span>分<span class="stand">${seconds}</span>秒`
        }, 1000);
    },
    /* 初始化特效，只需要初始化一次，移动端设备不初始化 */
    initEffects() {
        if (Utils.isMobile()) return;
        DreamConfig.cursor_move && Utils.cachedScript(`${DreamConfig.theme_base}/source/js/cursor/move/${DreamConfig.cursor_move}.min.js`)
        DreamConfig.cursor_click && Utils.cachedScript(`${DreamConfig.theme_base}/source/js/cursor/click/${DreamConfig.cursor_click}.min.js`)
        DreamConfig.live2d_url && Utils.cachedScript(`${DreamConfig.theme_base}${DreamConfig.live2d_url}`)
        DreamConfig.effects_sakura_mode && Utils.cachedScript(`${DreamConfig.theme_base}/source/js/effects/sakura.min.js`)
        DreamConfig.effects_universe_mode && Utils.cachedScript(`${DreamConfig.theme_base}/source/js/effects/universe.min.js`)
    },
    /* 加载主动推送、统计脚本等参数 */
    loadMaintain() {
        DreamConfig.enable_baidu_push && Utils.baiduPush();
        DreamConfig.enable_toutiao_push && Utils.toutiaoPush();
    }
}

window.commonContext = commonContext;

!(function () {
    const loads = ["sparkInput", "websiteTime"];
    const omits = ["initEffects", "loadMaintain"];

    Object.keys(commonContext).forEach(
        (c) => !loads.includes(c) && !omits.includes(c) && commonContext[c]()
    );

    // 当前html加载完执行
    document.addEventListener("DOMContentLoaded", function () {
        loads.forEach((c) => commonContext[c] && commonContext[c]());
    });

    // 所有内容加载完执行
    window.addEventListener("load", function () {
        omits.forEach((c) => commonContext[c] && commonContext[c]());
        $("html").addClass("ready");
    });
})();