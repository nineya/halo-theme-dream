let journalContextInitial = false
const journalContext = {
  /* 初始化事件 */
  initEvent() {
    if (journalContextInitial) return
    let $body = $('body')
    // 展开和关闭评论区事件
    $body.on('click', '.journal .comment', function () {
      $(this).parent().parent().siblings('.journal-comment').stop().slideToggle(200)
    })
    // 折叠日志区域
    $body.on('click', '.journal-content>.expand-done', function () {
      Utils.foldBlock($(this).parent())
    })
    $body.on('click', '.journal-operation-item>.share', function () {
      let $journal = $(this).parents('.journal')
      let title = '动态: ' + $journal.find('.journal-date>em').text()
      let desc = $journal.children('.journal-content').children('.main-content').text()
      DShare.sharePoster({
        image: DreamConfig.journals_share_image,
        title: title,
        description: desc.length > 220 ? desc.substring(0, 220) + '...' :desc
      })
    })
    Utils.initLikeEvent('.journal .like', 'journals', ($elem) => $elem.next())
    journalContextInitial = true
  },
  /* 点赞 */
  initLike() {
    Utils.initLikeButton('.journal .like', 'journals')
  },
  /* 折叠日志区域 */
  foldJournals() {
    const $journals = $('.journal .journal-content')
    $journals.each(function () {
      const $this = $(this)
      if (this.scrollHeight >= DreamConfig.journals_fold_height) {
        $this.append('<div class="expand-done"><i class="fa fa-angle-double-up"></i></div>')
      } else {
        $this.removeClass('fold')
      }
    })
  },
}
window.journalPjax = function (serialNumber) {
  if ($('.card.journal').length === 0) return
  Object.keys(journalContext).forEach(
    (c) => window.pjaxSerialNumber === serialNumber && journalContext[c]()
  )
}
!(function () {
  !window.pjaxSerialNumber && journalContext.initEvent()
  !window.pjaxSerialNumber && journalContext.initLike()

  document.addEventListener('DOMContentLoaded', function () {
    !window.pjaxSerialNumber && journalContext.foldJournals()
  })
})()