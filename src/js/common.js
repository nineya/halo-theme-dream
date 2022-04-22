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
    /* 初始化主题模式（仅用户模式） */
    initMode() {
        let isNight = localStorage.getItem('night') || false;
        const applyNight = (value) => {
            if (value.toString() === 'true') {
                document.documentElement.classList.add('night');
            } else {
                document.documentElement.classList.remove('night');
            }
        }
        applyNight(isNight);
        $("#toggle-mode").on('click', function () {
            isNight = isNight ? isNight.toString() !== 'true' : true;
            applyNight(isNight);
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
            $nav_menus.each((index, item) => {
                const cur_href = item.getAttribute("href");
                if (pathname.includes(cur_href) || href.includes(cur_href)) {
                    activeIndex = index;
                }
            });
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
            if (direction) {
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
    /* 个人信息界面打印彩字 */
    sparkInput() {
        const sparkInputContent = DreamConfig.spark_input_content && DreamConfig.spark_input_content.filter(s => s.length > 0);
        if (sparkInputContent && sparkInputContent.length > 0) {
            window.sparkInput("spark-input", sparkInputContent);
        }
    },
    /* 激活全局下拉框功能 */
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
    /* 小屏幕伸缩侧边栏 */
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
                // 保存滚动位置
                window.sessionStorage.setItem("lastScroll", $html.scrollTop());
                $html.addClass("disable-scroll");
                $mask.addClass("active slideout");
                $slide_out.addClass("active");
            }
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
                // 保存滚动位置
                window.sessionStorage.setItem("lastScroll", $html.scrollTop());
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
                const $html = $("html");
                $html.removeClass("disable-scroll");
                $(".navbar-mask").removeClass("active slideout");
                $(".navbar-searchout").removeClass("active");
                $(".navbar-slideout").removeClass("active");
                $(".navbar-above").removeClass("solid");
                // 还原滚动位置
                const lastScroll = window.sessionStorage.getItem("lastScroll");
                lastScroll && $html.scrollTop(lastScroll);
                window.sessionStorage.removeItem("lastScroll");
            })
            .on("touchmove", (e) => e.preventDefault);
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
    /* 激活图片预览功能 */
    initGallery() {
        // 用链接和标题包装图像
        $('.main-content img:not(".not-gallery")').each(function () {
            if ($(this).parents('[data-fancybox]').length === 0) {
                $(this).wrap($(`<span class="gallery-item" data-fancybox="gallery" data-caption="${$(this).attr('alt')}" href="${$(this).attr('src')}"></span>`));
                if (this.alt) {
                    $(this).after(`<p>${this.alt}</p>`);
                }
            }
        });
    },
    /* 激活全局返回顶部功能 */
    back2Top() {
        $('#back-to-top').on('click', function () {
            $('body, html').animate({scrollTop: 0}, 400);
        });
    },
}

!(function () {
    const omits = [];

    // 当前html加载完执行
    document.addEventListener("DOMContentLoaded", function () {
        Object.keys(commonContext).forEach(
            (c) => !omits.includes(c) && commonContext[c]()
        );
    });

    // 所有内容加载完执行
    window.addEventListener("load", function () {
        if (omits.length === 1) {
            commonContext[omits[0]]();
        } else {
            omits.forEach(
                (c) => commonContext[c] && commonContext[c]()
            );
        }
    });
})();

window.commonContext = commonContext;