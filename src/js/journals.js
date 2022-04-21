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
            const $this = $(this);
            const cid = $this.attr("data-cid");
            console.log(`init ${cid}`)
            let agrees = localStorage.getItem(encryption("agree-journal"));
            agrees = agrees? JSON.parse(decrypt(agrees)) : [];
            // 已经喜欢过了
            if (agrees.includes(cid)) {
                $this.removeClass("like");
                return;
            }
            console.log(`bind ${cid}`)
            $this.on("click", function (e) {
                e.stopPropagation();
                let agrees = localStorage.getItem(encryption("agree-journal"));
                agrees = agrees? JSON.parse(decrypt(agrees)) : [];

                Utils.request({
                    url: "/api/content/journals/" + cid + "/likes",
                    method: "POST",
                })
                    .then((_res) => {
                        let likes = +($this.attr("data-likes") || 0) + 1;
                        agrees.push(cid);
                        $this.removeClass("like");
                        const name = encryption("agree-journal");
                        const val = encryption(JSON.stringify(agrees));
                        localStorage.setItem(name, val);
                        $this.off('click').next().html(likes);
                        Qmsg.success('点赞成功');
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            });
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