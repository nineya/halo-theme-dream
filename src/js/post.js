const postContext = {
    /* 初始化代码块 */
    initCodeBlock() {
        const $code = $("*:not(figure) > pre > code");
        if ($code.length === 0) return;
        $code.each(function (index) {
            const $pre = $(this).parent();
            let clazz = $(this).attr("class");
            // 通过class初始化代码块标题和是否默认关闭
            let title = "";
            let isClose = false;
            if (clazz != null) {
                let num = clazz.indexOf('|');
                let closeNum = clazz.indexOf('<');
                if (num !== -1 || closeNum !== -1) {
                    if (num === -1 || (closeNum !== -1 && closeNum < num)) {
                        isClose = true;
                        num = closeNum;
                    }
                    $(this).attr('class', clazz.substring(0, num));
                    title = num === clazz.length - 1 ? clazz.substring(9, num) : clazz.substring(num + 1);
                } else {
                    title = clazz.substring(9);
                }
            }
            // 生成行号
            let nums = $(this).text().split("\n").length - 1 || 1;
            let lineDigit = String(nums).length;
            if (lineDigit === 1) lineDigit = 2;
            let lis = '';
            for (var i = 0; i < nums; i++) {
                lis += `<li>${String(i + 1).padStart(lineDigit, 0)}</li>`
            }
            // 代码块复制的id
            let id = `codeBlock${index}`;
            let close = "";
            if (isClose) {
                close = ` close`;
                $(this).hide();
            }
            // 生成标题栏的按钮
            let titleButton = `<div><i class="fa fa-angle-down${close}" data-code='#${id}'></i><i class="fa fa-clone btn-clipboard" title="复制代码" data-clipboard-target='#${id}'></i></div>`;

            // 组装代码块
            $(this).attr("id", id);
            $pre.prepend(`<ul>${lis}</ul>`);
            if (nums > DreamConfig.code_fold_line) {
                $pre.wrap(`<figure class="fold hljs"></figure>`).append(`<div class="expand-done"><i class="fa fa-angle-double-up"></i></div>`)
            } else {
                $pre.wrap(`<figure class="hljs"></figure>`);
            }
            $pre.parent().prepend(`<figcaption>${title}${titleButton}</figcaption>`);
        })
        // 代码块展开和关闭点击事件
        $(".main-content").on("click", "figure>figcaption .fa-angle-down", function () {
            if ($(this).is('.close')) {
                $($(this).attr('data-code')).parent().slideDown(200);
                $(this).removeClass('close');
            } else {
                $($(this).attr('data-code')).parent().slideUp(200);
                $(this).addClass('close');
            }
        });
        // 内容块展开和折叠点击事件
        $(".main-content .expand-done").on("click", function () {
            Utils.foldBlock($(this).parent().parent());
        })
    },
    /* 初始化喜欢功能 */
    /* 点赞 */
    initLike() {
        $(".admire .agree.like").each(function () {
            Utils.like($(this), $(this).find('span').find('span'), 'posts')
        });
    },
    /* 代码块高亮 */
    initHighlighting() {
        // 初始化代码块高亮工具
        hljs.initHighlightingOnLoad();
    },
    /* 代码块复制 */
    initClipboard() {
        if (window.clipboard) {
            return;
        }
        // 初始化代码块复制插件，一个界面仅需初始化一次
        window.clipboard = new ClipboardJS('.btn-clipboard');
        clipboard.on('error', function (e) {
            e.clearSelection();
            Qmsg.error("您的浏览器不支持复制");
        });
        clipboard.on('success', function () {
            Qmsg.success("复制成功");
        })
    },
    /* 加载分享模块 */
    initShare(){
        DreamConfig.enable_post_share && Utils.cachedScript(`https://unpkg.com/social-share.js@1.0.16/dist/js/social-share.min.js`)
    }
}
window.postPjax = function (serialNumber) {
    if ($('.main-content').length === 0) return
    Object.keys(postContext).forEach(
        (c) => window.pjaxSerialNumber === serialNumber && postContext[c]()
    );
}
!(function () {
    !window.pjaxSerialNumber && postContext.initLike();
    !window.pjaxSerialNumber && postContext.initCodeBlock();
    !window.pjaxSerialNumber && postContext.initShare();

    document.addEventListener("DOMContentLoaded", function () {
        !window.pjaxSerialNumber && postContext.initHighlighting();
        !window.pjaxSerialNumber && postContext.initClipboard();
    });
})();