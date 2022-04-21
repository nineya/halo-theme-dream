const journalContext = {
    /* 评论及折叠 */
    initComment() {
        $(".journal .comment").on("click", function () {
            $(this).parent().parent().siblings(".journal-comment").stop().slideToggle(200);
        });
    },
    /* 点赞 */
    initLike() {
        $(".journal .like").each(function () {
            Utils.like($(this), $(this).next(), 'journals')
        });
    },
}
!(function () {
    const omits = [];
    document.addEventListener("DOMContentLoaded", function () {
        Object.keys(journalContext).forEach(
            (c) => !omits.includes(c) && journalContext[c]()
        );
    });
    window.addEventListener("load", function () {
        // journalContext.foldBlock();
    });
})();