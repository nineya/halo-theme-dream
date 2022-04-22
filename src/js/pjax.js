/**
 * 第二个参数是容器，即将被替换的内容
 * fragment:是加载的文本中被选中的目标内容
 */
$(document).pjax("a[target!=_blank]", ".column-main", {
    scrollTo: $("body").offsetTop - 60,
    fragment: ".column-main",
    timeout: 8000,
});

$(document).on('submit', 'form[data-pjax]', function(event) {
    $.pjax.submit(event, ".column-main", {
        scrollTo: $("body").offsetTop - 60,
        fragment: ".column-main",
        timeout: 8000,
    })
})

$(document).on("pjax:click", function () {
    console.log("------------------------")
    console.log("pjax:click")
});

$(document).on("pjax:beforeSend", function () {
    console.log("pjax:beforeSend")
});

$(document).on("pjax:start", function () {
    console.log("pjax:start")
});

$(document).on("pjax:send", function () {
    console.log("pjax:send")
    $("html, body").animate(
        {
            scrollTop: $("body").position().top - 60,
        },
        500
    );
});

$(document).on("pjax:clicked", function () {
    console.log("pjax:clicked")
});

/**
 * pjax加载和浏览器前进后退都会触发的事件
 */
$(document).on("pjax:beforeReplace", function () {
    console.log("pjax:beforeReplace")
    /* 重新初始化导航条高亮 */
    $(".navbar-nav .current,.panel-side-menu .current").removeClass("current");
    commonContext.initNavbar();
    /* 移动端关闭抽屉弹窗 */
    $('html.disable-scroll').length > 0 && $('.navbar-mask').trigger("click");
});

/**
 * pjax 替换内容成功之后
 * 浏览器前进后退时不会执行
 */
$(document).on("pjax:success", async function (event, data, status, xhr, options) {
    console.log("pjax success");
    /* 重新激活图片预览功能 */
    commonContext.initGallery()
    /* 重新加载目录 */
    window.tocPjax && window.tocPjax();

    const $currentTarget = $($.parseHTML(data, document, true));
    const $document = $(document);
    const $head = $("head");
    $currentTarget.filter('link[data-pjax]').each(function () {
        if ($document.find(`link[href='${$(this).attr('href')}']`).length === 0) {
            $head.append($(this))
            console.log('加载css ' + $(this).attr('href'))
        }
    })
    let $scripts = $currentTarget.filter('script[data-pjax]');
    for (let script of $scripts) {
        let src = script.src;
        if ($document.find(`script[src='${src}']`).length === 0) {
            // 异步加载
            if (script.defer || script.async) {
                $head.append($(script))
                console.log('异步加载js ' + src)
            } else {
                console.log('同步加载js ' + src)
                let scriptElement = document.createElement('script');
                let head = document.getElementsByTagName('head')[0];
                scriptElement.type = 'text/javascript';
                scriptElement.src = src;
                head.appendChild(scriptElement);
                await new Promise(function (resolve) {
                    scriptElement.onload = scriptElement.onreadystatechange = function () {
                        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                            scriptElement.onload = scriptElement.onreadystatechange = null;
                            console.log('加载js完成 ' + src)
                            resolve()
                        }
                    };
                })
            }
        }
    }
    console.log('全部处理完成')
    /* 初始化日志界面 */
    window.journalPjax && window.journalPjax();
    /* 初始化文章界面 */
    window.postPjax && window.postPjax();
});

$(document).on("pjax:timeout", function () {
    console.log("pjax:timeout")
});

$(document).on("pjax:error", function () {
    console.log("pjax:error")
});

// pjax结束
$(document).on("pjax:complete", function () {
    console.log("pjax:complete")
});

/**
 * 	pjax结束，无论是pjax加载还是浏览器前进后退都会被调用
 * 	浏览器前进后退时，唯一一个在渲染后被调用的方法
 */
$(document).on("pjax:end", function (event, xhr, options) {
    console.log("pjax:end")
    // 浏览器前进后退
    if (xhr == null) {
        /* 重新加载目录 */
        window.tocPjax && window.tocPjax();
    }
});

$(document).on("pjax:popstate", function () {
    console.log("pjax:popstate")
});
