/**
 * 文章界面的所有操作
 *  |-代码前面加入行号
 *  |-在代码的右上角显示代码的格式
 *  |-剪切板功能
 *  Status: OK
 */
(function ($) {
    // 代码块展开和关闭点击事件
    $(".journal .comment").on("click", function () {
        $(this).parent().parent().siblings(".journal-comment").stop().slideToggle(200);
    });
})(jQuery);