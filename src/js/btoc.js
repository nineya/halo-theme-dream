function Btoc(tocList, contentElement) {
  this.tocList = tocList
  this.elementList = getChild(contentElement, this.tocList)
  // 当前解析到第几个标签
  this.eIndex = 0

  /**
     * 递归读取目标标签中所有的符合要求的标签
     * @param element
     * @param tocList
     * @returns {any[]|null}
     */
  function getChild(element, tocList) {
    if (element == null) {
      return null
    }
    // 获取所有子元素
    var child = element.children
    if (child.length === 0) {
      return null
    }
    var childs = []
    for (var i = 0; i < child.length; i++) {
      var elem = child[i]
      if (tocList.indexOf(elem.tagName) !== -1) {
        childs.push(elem)
      }
      childs.push.apply(childs, getChild(elem, tocList))
    }
    return childs
  }

  /**
     * 生成目录
     */
  this.build = function () {
    if (this.elementList == null || this.elementList.length === 0) {
      return ''
    }
    // 解析获取到的标签元素为目录
    // 设置当前元素的最小度为-1表示当前元素为最外层目录元素，防止后续出现比当前元素序号更小的标签
    return this.analysis(-1, this.tocList.indexOf(this.elementList[this.eIndex].tagName))
  }

  /**
     * 解析目录
     * @param last 最小的标签（即上级目录的标签）
     * @param depth 当前标签
     * @returns {string} 解析的目录内容
     */
  this.analysis = function (last, depth) {
    var tocStr = '<ul class=\'menu-list\'>'
    while (this.eIndex < this.elementList.length) {
      var elem = this.elementList[this.eIndex]
      // 取得当前元素在标签列表中所属的位置
      var n = this.tocList.indexOf(elem.tagName)
      // 当级别大于最大级别，小于当前级别时，就当做当前级别来处理，并将新的级别设置为新级别
      if (n > last && n <= depth) {
        depth = n
        var id = elem.id
        var text = elem.innerText
        // 标签不存在id，设置id
        if (id == null || id === '') {
          id = text + '_' + this.eIndex
          elem.setAttribute('id', id)
        }
        tocStr += `<li><a data-id="#${id}"><i class="fa fa-paperclip"></i>${text}</a>`
        this.eIndex++
        if (this.eIndex >= this.elementList.length) {
          tocStr += '</li>'
          break
        }
        n = this.tocList.indexOf(this.elementList[this.eIndex].tagName)
        // 如果下一个元素的序号大于当前元素的序号，那么元素为子元素，需要递归获取
        if (n > depth) {
          tocStr += this.analysis(depth, n)
        }
        tocStr += '</li>'
      } else if (n <= last) {
        // 如果这个元素的序号已经小于最小序号了，那说明这个元素已经外面一层的元素了
        break
      }
    }
    return tocStr + '</ul>'
  }
}
const observers = []
function register($toc) {
  // toc滚动时间和偏移量
  const time = 20
  const headingsOffset = 50
  const currentInView = new Set()
  const headingToMenu = new Map()
  const $menus = Array.from($toc.querySelectorAll('.menu-list > li > a'))

  for (const $menu of $menus) {
    const elementId = $menu.getAttribute('data-id').trim().slice(1)
    const $heading = document.getElementById(elementId)
    if ($heading) {
      headingToMenu.set($heading, $menu)
    }
  }

  const $headings = Array.from(headingToMenu.keys())

  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        currentInView.add(entry.target)
      } else {
        currentInView.delete(entry.target)
      }
    }
    let $heading
    if (currentInView.size) {
      // heading is the first in-view heading
      $heading = [...currentInView].sort(($el1, $el2) => $el1.offsetTop - $el2.offsetTop)[0]
    } else if ($headings.length) {
      // heading is the closest heading above the viewport top
      $heading = $headings
        .filter(($heading) => $heading.offsetTop < window.scrollY)
        .sort(($el1, $el2) => $el2.offsetTop - $el1.offsetTop)[0]
    }
    if ($heading && headingToMenu.has($heading)) {
      $menus.forEach(($menu) => $menu.classList.remove('is-active'))

      const $menu = headingToMenu.get($heading)
      $menu.classList.add('is-active')
      let $menuList = $menu.parentElement.parentElement
      while (
        $menuList.classList.contains('menu-list') &&
                $menuList.parentElement.tagName.toLowerCase() === 'li'
      ) {
        $menuList.parentElement.children[0].classList.add('is-active')
        $menuList = $menuList.parentElement.parentElement
      }
    }
  }
  const observer = new IntersectionObserver(callback, { threshold: 0 })

  for (const $heading of $headings) {
    observer.observe($heading)
    // smooth scroll to the heading
    if (headingToMenu.has($heading)) {
      const $menu = headingToMenu.get($heading)
      $menu.addEventListener('click', () => {
        var element = document.getElementById($menu.getAttribute('data-id').substring(1))
        let rect = element.getBoundingClientRect()
        let currentY = window.pageYOffset
        let targetY = currentY + rect.top - headingsOffset
        let speed = (targetY - currentY) / time
        let offset = currentY > targetY ? -1 : 1
        let requestId
        function step(timestamp) {
          currentY+=speed
          if(currentY * offset < targetY * offset){
            window.scrollTo(0,currentY)
            requestId=window.requestAnimationFrame(step)
          }else{
            window.scrollTo(0,targetY)
            window.cancelAnimationFrame(requestId)
          }
        }
        window.requestAnimationFrame(step)
      })
    }
    if (headingToMenu.has($heading)) {
      $heading.style.scrollMargin = '1em'
    }
  }
  observers.push(observer)
}
Btoc.init = function (params) {
  const tocList = params['tocList']
  const contentElement = params['contentElement']
  const tocSelect = params['tocElement']
  if (tocList == null || tocList.length === 0 || contentElement == null) {
    $(tocSelect).children().remove()
    return false
  }
  for (var i = 0; i < tocList.length; i++) {
    tocList[i] = tocList[i].toUpperCase()
  }
  let tocContent = new Btoc(tocList, contentElement).build()
  $(tocSelect).html(tocContent)
}

window.tocPjax = function () {
  observers.forEach(observer => {
    observer.disconnect()
  })
  observers.splice(0)
  Btoc.init({
    tocList: ['h1', 'h2', 'h3', 'h4', 'h5'],
    contentElement: $('.main-content:not(.not-toc)')[0],
    tocElement: '.toc-content'
  })
  if (typeof window.IntersectionObserver === 'undefined') {
    return
  }
  document.querySelectorAll('.toc-content').forEach(register)
}
