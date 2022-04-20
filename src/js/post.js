/**
 * 文章界面的所有操作
 *  |-代码前面加入行号
 *  |-在代码的右上角显示代码的格式
 *  |-剪切板功能
 *  Status: OK
 */
(function ($) {
    $("pre > code").each(function (index) {
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
        let titleButton = `<div><i class="fa fa-angle-down${close}" data-code='#${id}'></i><i class="fa fa-clipboard btn-clipboard" title="复制代码" data-clipboard-target='#${id}'></i></div>`;

        // 组装代码块
        if (nums > 20) {
            $pre.wrap(`<figure class="fold"></figure>`).parent().append(`<div class="expand-done"><i class="fa fa-angle-double-down"></i></div>`)
        } else {
            $pre.wrap(`<figure></figure>`);
        }
        $pre.parent().prepend(`<figcaption>${title}${titleButton}</figcaption>`);

        $(this).attr("id", id);
        $pre.prepend(`<ul>${lis}</ul>`);
    })

    // 初始化代码块高亮工具
    hljs.initHighlightingOnLoad();
    // 初始化代码块复制插件
    let clipboard = new ClipboardJS('.btn-clipboard');
    clipboard.on('error', function (e) {
        e.clearSelection();
        alert("您的浏览器不支持复制");
    });
    // 代码块展开和关闭点击事件
    $(".main-content figure>figcaption .fa-angle-down").on("click", function () {
        if ($(this).is('.close')) {
            $($(this).attr('data-code')).parent().slideDown(200);
            $(this).removeClass('close');
        } else {
            $($(this).attr('data-code')).parent().slideUp(200);
            $(this).addClass('close');
        }
    });
})(jQuery);