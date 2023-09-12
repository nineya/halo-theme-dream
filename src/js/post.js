let postContextInitial = false
const postContext = {
  /* 初始化代码块 */
  initCodeBlock() {
    const $code = $('*:not(figure) > pre > code')
    if ($code.length === 0) return
    $code.each(function (index) {
      const $pre = $(this).parent()
      let clazz = $(this).attr('class')
      // 通过class初始化代码块标题和是否默认关闭
      let title = ''
      let lines = false
      let isClose = false
      if (clazz != null) {
        let str1 = clazz.match(/[|<](.*)$/)
        let str2 = clazz.match(/:select/)
        if (str1 || str2) {
          let num = 0
          if (str2) {
            num = str2.index
            if (str1) {
              if (str1[1].endsWith(str2[0])) {
                str1[1] = str1[1].substring(0, str1[1].length - str2[0].length)
              }
            } else {
              title = clazz.substring(9, str2.index)
            }
            lines = true
          }
          if (str1) {
            num = str1.index < num ? str1.index : num
            if (str1[0][0] === '<') {
              isClose = true
            }
            title = str1[1]
          }
          $(this).attr('class', clazz.substring(0, num))
          if (!title) title = clazz.substring(9, num)
        } else {
          title = clazz.substring(9)
        }
      }
      // 生成行号
      let codes = $(this).text().split('\n') || []
      let nums = codes.length - 1
      let lineDigit = String(nums).length
      if (lineDigit === 1) lineDigit = 2
      let lis = ''
      for (var i = 0; i < nums; i++) {
        lis += `<li ${(lines && /^\s*\|\+\s+/.test(codes[i]))? 'class="code-select"' : ''}>${String(i + 1).padStart(lineDigit, 0)}</li>`
      }
      if (lines) {
        $(this).text($(this).text().replace(/(^\s*)\|\+\s/gm,'$1'))
      }
      // 代码块的id，用于代码块复制和折叠
      let id = `codeBlock${index}-${new Date().getTime()}`
      let close = ''
      if (isClose) {
        close = ' close'
        $(this).parent().hide()
      }
      // 生成标题栏的按钮
      let titleButton = `<div><i class="ri-arrow-down-s-line${close}" data-code='#${id}'></i><i class="ri-file-copy-2-line btn-clipboard" title="复制代码" data-clipboard-target='#${id}'></i></div>`

      // 组装代码块
      $(this).attr('id', id)
      $pre.prepend(`<ul>${lis}</ul>`)
      if (nums > DreamConfig.code_fold_line) {
        $pre.wrap('<figure class="fold hljs"></figure>').append('<div class="expand-done"><i class="ri-arrow-up-double-line"></i></div>')
      } else {
        $pre.wrap('<figure class="hljs"></figure>')
      }
      $pre.parent().prepend(`<figcaption>${title}${titleButton}</figcaption>`)
    })
  },
  /* 初始化文艺模式 */
  initLiterature() {
    $('.literature-content>p:not([class]),.literature-content>mew-hide>p:not([class])').each(function () {
      if ($(this).children(':not(code,a,strong,em,ins,b,s,br,span.pwd)').length === 0) {
        $(this).addClass('note')
      }
    })
  },
  /* 初始化喜欢功能 */
  /* 点赞 */
  initLike() {
    Utils.initLikeButton('.admire .agree.like', 'posts')
  },
  /* 代码块高亮 */
  initHighlighting() {
    // 初始化代码块高亮工具
    hljs.initHighlightingOnLoad()
  },
  /**
     * 初始化分享
     */
  initShare() {
    if (!window.DShare) return
    let imageUrl = $('.cover-image').css('background-image')
    imageUrl && (imageUrl = imageUrl.substring(5, imageUrl.length - 2))
    DShare.create('.dshare', {image: imageUrl, imageSelector: '.main-content'})
  },
  /* 代码块复制 */
  initClipboard() {
    if (window.clipboard) {
      return
    }
    // 初始化代码块复制插件，一个界面仅需初始化一次
    window.clipboard = new ClipboardJS('.btn-clipboard')
    clipboard.on('error', function (e) {
      e.clearSelection()
      Qmsg.error('您的浏览器不支持复制')
    })
    clipboard.on('success', function () {
      Qmsg.success('复制成功')
    })
  },
  /* 初始化图片折叠 */
  foldImage() {
    if (!DreamConfig.img_fold_height) return
    const $galleryList = $('.article .gallery-item>[data-fancybox]>img')
    $galleryList.parent().addClass('fold')
    $galleryList.each(function () {
      const $gallery = $(this).parent()
      if (this.complete) {
        if (this.scrollHeight >= DreamConfig.img_fold_height) {
          $gallery.append('<div class="expand-done"><i class="ri-arrow-up-double-line"></i></div>')
        } else {
          $gallery.removeClass('fold')
        }
      } else {
        this.onload = function () {
          if (this.scrollHeight >= DreamConfig.img_fold_height) {
            $gallery.append('<div class="expand-done"><i class="ri-arrow-up-double-line"></i></div>')
          } else {
            $gallery.removeClass('fold')
          }
        }
      }
    })
  },
  /* 初始化事件 */
  initEvent() {
    if (postContextInitial) return
    let $body = $('body')
    // 代码块展开和关闭点击事件
    $body.on('click', 'figure>figcaption .ri-arrow-down-s-line', function () {
      let $this = $(this)
      if ($this.is('.close')) {
        $($this.attr('data-code')).parent().slideDown(200)
        $this.removeClass('close')
      } else {
        $($this.attr('data-code')).parent().slideUp(200)
        $this.addClass('close')
      }
    })
    // 代码内容块展开和折叠点击事件
    $body.on('click', 'figure > pre > .expand-done', function () {
      Utils.foldBlock($(this).parent().parent())
    })
    // 图片的展开和折叠事件
    $body.on('click', '.gallery-item .expand-done', function (e) {
      e.stopPropagation()
      Utils.foldBlock($(this).parent())
    })
    // 喜欢
    Utils.initLikeEvent('.admire .agree.like', 'posts', ($elem) => $elem.find('span').find('span'))
    // 隐藏内容
    window.onCommentSuccessEvent = (comment, target) => {
      let name = encrypt('mew-hide-' + target)
      let commentIds = localStorage.getItem(name)
      commentIds = commentIds ? JSON.parse(decrypt(commentIds)) : []
      let id = String(comment.postId)
      if (commentIds.includes(id)) {
        return
      }
      commentIds.push(id)
      $(`.main-content[data-target='${target}'][data-id='${id}'] mew-hide[hide]`)
        .each(function () {
          $(this).before(decrypt(this.getAttribute('hide')))
          $(this).remove()
          commonContext.initGallery()
          postContext.initCodeBlock()
          postContext.initLiterature()
          postContext.initHighlighting()
          if (this.getAttribute('toc') === 'true') commonContext.initTocAndNotice()
        })
      localStorage.setItem(name, encrypt(JSON.stringify(commentIds)))
    }
    postContextInitial = true
  },
}
window.postPjax = function (serialNumber) {
  if ($('.main-content').length === 0) return
  Object.keys(postContext).forEach(
    (c) => window.pjaxSerialNumber === serialNumber && postContext[c]()
  )
}
!(function () {
  const advances = ['initCodeBlock', 'initLiterature', 'initLike', 'foldImage', 'initEvent']
  Object.keys(postContext).forEach(
    (c) => !window.pjaxSerialNumber && advances.includes(c) && postContext[c]()
  )

  document.addEventListener('DOMContentLoaded', function () {
    Object.keys(postContext).forEach(
      (c) => !window.pjaxSerialNumber && !advances.includes(c) && postContext[c]()
    )
  })
})()