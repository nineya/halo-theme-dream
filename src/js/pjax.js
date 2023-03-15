const cssLoadCompletes = new Set($('link[href*=".css"]').map((i, item) => $(item).attr('href')).get())
const jsLoadCompletes = new Set($('script[src*=".js"]').map((i, item) => $(item).attr('src')).get())

// 为pjax请求创建一个序列号
const createSerialNumber = () => {
  const serialNumber = new Date().getTime()
  window.pjaxSerialNumber = serialNumber
  console.log(`sn = ${serialNumber}`)
  return serialNumber
}

const $indexInform = $('.section .container > .tips')
const $bulletScreen = $('.actions>.bullet-screen')
// pjax请求时进行界面预处理
const initPjax = () => {
  /* 重新加载首页提示 */
  if (location.pathname === '/') {
    $indexInform.removeClass('is-hidden-all')
  } else {
    $indexInform.addClass('is-hidden-all')
  }
  /* 重新加载悬浮导航按钮 */
  if ($('halo-comment[bullet-screen]').length === 0) {
    $bulletScreen.addClass('is-hidden-all')
  } else {
    $bulletScreen.removeClass('is-hidden-all')
  }
}

const computeScrollTop = (target) => {
  // 当前为横幅大图模式，处理滚动
  if (target.pathname !== '/' && $('.banner').length !== 0) {
    return window.innerHeight / 4
  }
  return 0
}

const syncLoadScripts = ($scripts, i, resolve) => {
  if (i >= $scripts.length) {
    resolve && resolve()
    return
  }
  let src = $($scripts[i]).attr('src')
  if (jsLoadCompletes.has(src)) {
    syncLoadScripts($scripts, i + 1, resolve)
    return
  }
  console.log((resolve ? '同步' : '异步') + '顺序加载js ' + src)
  Utils.cachedScript(src)
    .done(function () {
      console.log((resolve ? '同步' : '异步') + '顺序加载js完成 ' + src)
      jsLoadCompletes.add(src)
      window.DProgress && DProgress.inc()
      syncLoadScripts($scripts, i + 1, resolve)
    })
    .fail(function () {
      console.log((resolve ? '同步' : '异步') + '顺序加载js失败 ' + src)
      syncLoadScripts($scripts, i + 1, resolve)
    })
}

/**
 * 第二个参数是容器，即将被替换的内容
 * fragment:是加载的文本中被选中的目标内容
 */
$(document).on('click', 'a[target!=_blank][href]:not(data-not-pjax)', (event) => {
  $.pjax.click(event, '.column-main', {
    scrollTo: computeScrollTop(event.currentTarget),
    fragment: '.column-main',
    serialNumber: createSerialNumber(),
    timeout: 8000,
  })
})


$(document).on('submit', 'form[data-pjax]', function (event) {
  $.pjax.submit(event, '.column-main', {
    scrollTo: 0,
    fragment: '.column-main',
    serialNumber: createSerialNumber(),
    timeout: 8000,
  })
})

$(document).on('pjax:click', function (event, options) {
  console.log('------------------------')
  console.log(`pjax:click sn = ${options.serialNumber}`)
})

$(document).on('pjax:beforeSend', function (event, xhr, options) {
  console.log(`pjax:beforeSend sn = ${options.serialNumber}`)
  $('html').addClass('pjax-loading')
})

$(document).on('pjax:start', function (event, xhr, options) {
  console.log(`pjax:start sn = ${options.serialNumber}`)
  window.DProgress && DProgress.start()
  $('.pjax-close').remove()
})

$(document).on('pjax:send', function (event, xhr, options) {
  console.log(`pjax:send sn = ${options.serialNumber}`)
})

$(document).on('pjax:clicked', function (event, options) {
  console.log(`pjax:clicked sn = ${options.serialNumber}`)
})

/**
 * pjax加载和浏览器前进后退都会触发的事件
 * 在此处需要进行一些未进行pjax也需要执行的程序
 */
$(document).on('pjax:beforeReplace', function (event, contents, options) {
  console.log(`pjax:beforeReplace sn = ${options.serialNumber}`)
  /* 重新初始化导航条高亮 */
  $('.navbar-nav .current,.panel-side-menu .current').removeClass('current')
  commonContext.initNavbar()
  /* 移动端关闭抽屉弹窗 */
  $('html.disable-scroll').length > 0 && $('.navbar-mask').trigger('click')
})

/**
 * pjax 替换内容成功之后
 * 浏览器前进后退时不会执行
 */
$(document).on('pjax:success', async function (event, data, status, xhr, options) {
  const serialNumber = options.serialNumber
  console.log(`pjax:success sn = ${serialNumber}`)
  if (window.pjaxSerialNumber !== serialNumber) return
  /* 重新激活图片预览功能 */
  commonContext.initGallery()
  /* 重新加载目录和公告 */
  commonContext.initTocAndNotice()
  /* 初始化pjax加载 */
  initPjax()
  /* 已经完成页面渲染 */
  $('html').removeClass('pjax-loading')

  const $currentTarget = $($.parseHTML(data, document, true))
  const $head = $('head')
  $head.find('meta').remove()
  $head.append($currentTarget.filter('meta'))
  $currentTarget.filter('link[data-pjax]').each(function () {
    let href = $(this).attr('href')
    if (!cssLoadCompletes.has(href)) {
      $head.append($(this))
      console.log('加载css ' + $(this).attr('href'))
      this.onload = function () {
        cssLoadCompletes.add(href)
        window.DProgress && DProgress.inc()
        console.log('加载css完成 ' + $(this).attr('href'))
      }
    }
  })
  let $scripts = $currentTarget.filter('script[data-pjax]')
  if ($scripts.length > 0) {
    $scripts.filter('[async]').each(function () {
      let src = $(this).attr('src')
      if (jsLoadCompletes.has(src)) {
        return
      }
      console.log('异步无序加载js ' + src)
      Utils.cachedScript(src)
        .done(function () {
          console.log('异步无序js完成 ' + src)
          window.DProgress && DProgress.inc()
          jsLoadCompletes.add(src)
        })
        .fail(function () {
          console.log('异步无序js失败 ' + src)
        })
    })
    new Promise(() => {
      syncLoadScripts($scripts.filter('[defer]'), 0)
    })
    let $syncScripts = $scripts.filter(':not([async]):not([defer])')
    $syncScripts.length > 0 && await new Promise((resolve) => {
      syncLoadScripts($syncScripts, 0, resolve)
    })
  }
  console.log('全部处理完成')
  if (window.pjaxSerialNumber !== serialNumber) return
  /* 初始化日志界面 */
  window.journalPjax && window.journalPjax(serialNumber)
  /* 初始化文章界面 */
  window.postPjax && window.postPjax(serialNumber)
  /* 初始化相册界面 */
  window.photoPjax && window.photoPjax(serialNumber)
  /* 初始化轮播 */
  commonContext.initCarousel()
  /* 加载主动推送或统计脚本 */
  commonContext.loadMaintain()
  window.DProgress && DProgress.done()
})

$(document).on('pjax:timeout', function (event, xhr, options) {
  console.log(`pjax:timeout sn = ${options.serialNumber}`)
})

$(document).on('pjax:error', function (event, xhr, textStatus, error, options) {
  console.log(`pjax:error sn = ${options.serialNumber} error ${error}`)
})

// pjax结束
$(document).on('pjax:complete', function (event, xhr, textStatus, options) {
  console.log(`pjax:complete sn = ${options.serialNumber}`)
})

/**
 *    pjax结束，无论是pjax加载还是浏览器前进后退都会被调用
 *    浏览器前进后退时，唯一一个在渲染后被调用的方法
 */
$(document).on('pjax:end', function (event, xhr, options) {
  console.log(`pjax:end sn = ${options.serialNumber}`)
  // 如果是浏览器前进后退
  if (xhr == null) {
    /* 重新加载目录和公告 */
    commonContext.initTocAndNotice()
    /* 初始化pjax加载 */
    initPjax()
    /* 初始化轮播 */
    commonContext.initCarousel()
    window.DProgress && DProgress.done()
    // 应该是由于浏览器缓存失效，有时候浏览器前后退还是会执行pjax:beforeSend
    $('html').removeClass('pjax-loading')
  }
})

$(document).on('pjax:popstate', function () {
  console.log('pjax:popstate')
})
