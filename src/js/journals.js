const journalContext = {
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
    /* 折叠日志区域 */
    foldJournals() {
        const $journals = $(".journal .journal-content");
        $journals.each(function () {
            const $this = $(this);
            if (this.scrollHeight >= DreamConfig.journals_fold_height) {
                $this.append(`<div class="expand-done"><i class="fa fa-angle-double-up"></i></div>`);
            } else {
                $this.removeClass('fold');
            }
        })
        $(".journal-content>.expand-done").on("click", function () {
            Utils.foldBlock($(this).parent());
        })
    },
}
window.journalPjax = function (serialNumber) {
    if ($('.card.journal').length === 0) return
    Object.keys(journalContext).forEach(
        (c) => window.pjaxSerialNumber === serialNumber && journalContext[c]()
    );
}
!(function () {
    !window.pjaxSerialNumber && journalContext.initLike();
    !window.pjaxSerialNumber && journalContext.initComment();

    document.addEventListener("DOMContentLoaded", function () {
        !window.pjaxSerialNumber && journalContext.foldJournals();
    });
})();