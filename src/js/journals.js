const journalContext = {
    /* 折叠日志区域 */
    foldJournals() {
        const $journals = $(".journal .journal-content");
        $journals.each(function () {
            const $this = $(this);
            if ($this[0].scrollHeight >= DreamConfig.journals_fold_height) {
                $this.append(`<div class="expand-done"><i class="fa fa-angle-double-up"></i></div>`);
            }
        })
        $(".journal-content>.expand-done").on("click", function () {
            Utils.foldBlock($(this).parent());
        })
    },
    /* 点赞 */
    initLike() {
        $(".journal .like").each(function () {
            Utils.like($(this), $(this).next(), 'journals')
        });
    },
    /* 评论及折叠 */
    initComment() {
        $(".journal .comment").on("click", function () {
            $(this).parent().parent().siblings(".journal-comment").stop().slideToggle(200);
        });
    },
}
window.journalPjax = function () {
    Object.keys(journalContext).forEach(
        (c) => journalContext[c]()
    );
}
!(function () {
    const omits = [];
    document.addEventListener("DOMContentLoaded", function () {
        Object.keys(journalContext).forEach(
            (c) => !omits.includes(c) && journalContext[c]()
        );
    });
})();