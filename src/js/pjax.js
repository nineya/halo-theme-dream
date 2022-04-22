/**
 * 第二个参数是容器，即将被替换的内容
 * fragment:是加载的文本中被选中的目标内容
 */
$(document).pjax("a[target!=_blank]", ".column-main", {
    scrollTo: $("body").offsetTop - 60,
    fragment: ".column-main",
    timeout: 8000,
});

// NProgress.configure({
// 	showSpinner: true,
// 	easing: "ease-out",
// 	speed: 1000,
// });

// pjax开始
$(document).on("pjax:send", function () {
    // NProgress.start();
    console.log("pjax start")
    $("html, body").animate(
        {
            scrollTop: $("body").position().top - 60,
        },
        500
    );
});

// pjax内容被替换之前
$(document).on("pjax:beforeReplace", function (contents, options) {
    console.log("pjax beforeReplace");
});

// pjax 替换内容成功之后
$(document).on("pjax:success", function (enve, data, status, xhr, options) {
    console.log("pjax success");
    $currentTarget = $($.parseHTML(data, document, true));
    $document = $(document);
    $head = $("head");
    $currentTarget.filter('link[data-pjax]').each(function () {
        if ($document.find(`link[href='${$(this).attr('href')}']`).length === 0) {
            $head.append($(this))
            console.log('加载css ' + $(this).attr('href'))
        }
    })
    $currentTarget.filter('script[data-pjax]').each(function () {
        if ($document.find(`script[src='${$(this).attr('src')}']`).length === 0) {
            $head.append($(this))
            console.log('加载js ' + $(this).attr('src'))
        }
    })
});

// pjax结束
$(document).on("pjax:complete", function () {
    console.log("pjax end")
    /* 重新初始化导航条高亮 */
    $(".navbar-nav .current,.panel-side-menu .current").removeClass("current");
    commonContext.initNavbar();
    /* 重新激活图片预览功能 */
    commonContext.initGallery()
    /* 初始化日志界面 */
    window.journalPjax && window.journalPjax();
    /* 初始化文章界面 */
    window.postPjax && window.postPjax();
});
