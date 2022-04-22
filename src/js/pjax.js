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

$(document).on("pjax:beforeReplace", function () {
    console.log("pjax:beforeReplace")
    /* 重新初始化导航条高亮 */
    $(".navbar-nav .current,.panel-side-menu .current").removeClass("current");
    commonContext.initNavbar();
});

// pjax 替换内容成功之后
$(document).on("pjax:success", async function (enve, data, status, xhr, options) {
    console.log("pjax success");

    const $currentTarget = $($.parseHTML(data, document, true));
    const $document = $(document);
    const $head = $("head");
    $currentTarget.filter('link[data-pjax]').each(function () {
        if ($document.find(`link[href='${$(this).attr('href')}']`).length === 0) {
            $head.append($(this))
            console.log('加载css ' + $(this).attr('href'))
        }
    })
    /* 重新激活图片预览功能 */
    commonContext.initGallery()
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
    // $currentTarget.filter('script[data-pjax]').each(async function () {
    //     let $this = $(this)
    //     console.log('同步加载js ' + $(this).attr('src'))
    //     let head = document.getElementsByTagName('head')[0];
    //     let script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = $this.attr('src');
    //     head.appendChild(script);
    //
    //     await new Promise(function (resolve) {
    //         script.onload = script.onreadystatechange = function () {
    //             if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
    //                 console.log('加载js完成 ' + $this.attr('src'))
    //                 script.onload = script.onreadystatechange = null;
    //                 resolve()
    //             }
    //         };
    //     });
    //     console.log('同步加载js完成 ' + $this.attr('src'))
    // })
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
    console.log("pjax end")
});

$(document).on("pjax:end", function () {
    console.log("pjax:end")
});

$(document).on("pjax:popstate", function () {
    console.log("pjax:popstate")
});
