const commonContext = {

    /* 导航条高亮 */
    initNavbar() {
        const $nav_menus = $(".navbar-nav a");
        const $nav_side_menus = $(".panel-side-menu .link");
        let activeIndex = 0;
        const { href, pathname } = location;

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
}

!(function () {
    const omits = [
    ];

    document.addEventListener("DOMContentLoaded", function () {
        Object.keys(commonContext).forEach(
            (c) => !omits.includes(c) && commonContext[c]()
        );
    });

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