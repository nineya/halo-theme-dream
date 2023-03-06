let photoContextInitial = false
let dataPromise = {}
let isLoading = false
let isEnd = false

let queryParams = {
  page: 0,
  size: 15,
  sort: 'createTime,desc',
}

// 渲染与设置画廊
const renderPhotos = ($photosGallery, data) => {
  const photosHtml = data.reduce((result, item, index) => {
    return `${result}<div href="${item.url}" data-fancybox="gallery" data-caption="${item.description || item.name || ''
    }"><img width="100%" height="100%" src="${item.thumbnail}" alt="${item.name || ''
    }"/><div class="info"><div><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M834.9 913.6H189.7c-69.2 0-125.5-56.3-125.5-125.5V381.5c0-69.2 56.3-125.5 125.5-125.5h14.7c14.4 0 27.3-8.6 32.9-21.8l19.2-45.1c19.7-46.3 65-76.3 115.4-76.3h280.6c50.4 0 95.7 30 115.4 76.3l19.2 45c5.7 13.2 18.6 21.8 33 21.8h14.7c69.2 0 125.5 56.3 125.5 125.5V788c0.1 69.3-56.2 125.6-125.4 125.6z m-645.2-568c-19.8 0-35.8 16.1-35.8 35.8V788c0 19.8 16.1 35.8 35.8 35.8h645.2c19.8 0 35.8-16.1 35.8-35.8V381.5c0-19.8-16.1-35.8-35.8-35.8h-14.7c-50.4 0-95.7-30-115.4-76.3l-19.2-45c-5.6-13.2-18.6-21.8-33-21.8H372c-14.4 0-27.3 8.6-33 21.8l-19.2 45c-19.7 46.3-65 76.3-115.4 76.3h-14.7z"></path><path d="M512.3 742.8c-97.4 0-176.6-79.2-176.6-176.6s79.2-176.6 176.6-176.6 176.6 79.2 176.6 176.6-79.2 176.6-176.6 176.6z m0-263.6c-48 0-87 39-87 87s39 87 87 87 87-39 87-87-39-87-87-87z"></path></svg><p>${item.name}</p></div>${
      item.location ? `<div><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.3 960.8c-9.3 0-18.6-2.9-26.5-8.7-14.1-10.4-345.6-256.4-345.6-516.1 0-205.2 166.9-372.1 372.1-372.1S883.4 230.8 883.4 436c0 259.7-331.5 505.8-345.6 516.1-7.8 5.8-17.2 8.7-26.5 8.7z m0-807.2c-155.7 0-282.4 126.7-282.4 282.4 0 176.5 207.5 361.8 282.4 422.9 74.9-61.1 282.4-246.4 282.4-422.9 0-155.8-126.7-282.4-282.4-282.4z"></path><path d="M511.3 611.7c-96.9 0-175.7-78.8-175.7-175.7s78.8-175.7 175.7-175.7S687.1 339.1 687.1 436s-78.9 175.7-175.8 175.7z m0-261.8c-47.5 0-86.1 38.6-86.1 86.1s38.6 86.1 86.1 86.1 86.1-38.6 86.1-86.1-38.6-86.1-86.1-86.1z"></path></svg><p>${item.location}</p></div>` : ''
    }<div><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512.7 959.8c-247 0-448-201-448-448s201-448 448-448 448 201 448 448-200.9 448-448 448z m0-806.4c-197.6 0-358.4 160.8-358.4 358.4s160.8 358.4 358.4 358.4 358.4-160.8 358.4-358.4-160.7-358.4-358.4-358.4z"></path><path d="M700 576.8H512.7c-24.6 0-44.6-19.9-44.8-44.5L466 254.5c-0.2-24.7 19.8-44.9 44.5-45.1h0.3c24.6 0 44.6 19.9 44.8 44.5l1.6 233.3H700c24.7 0 44.8 20.1 44.8 44.8 0 24.7-20.1 44.8-44.8 44.8z"></path></svg><p>${Utils.formatDate(item.takeTime)
    }</p></div>${item.description ? `<p>${item.description}</p>` : ''}</div></div>`
  }, '')
  $photosGallery.append(photosHtml)

  $photosGallery
    .justifiedGallery({
      rowHeight: 200,
      maxRowHeight: false,
      maxRowsCount: 0,
      sizeRangeSuffixes: {},
      lastRow: 'nojustify',
      captions: false,
      waitThumbnailsLoad: true, //等待图片加载完，这样就可以根据图片比例展示，如果为false，则都是统一比例
      margins: 10,
      extension: /\.(jpe?g|png|gif|bmp|webp)$/,
      cssAnimation: false,
    })
}

/* 获取相册数据 */
const getData = ($photosGallery, param) => {
  isLoading = true
  $photosGallery.addClass('loading')
  param && param.team && (param.team = param.team.substring(2))
  const params = {...queryParams, ...(param || {})}
  dataPromise.promise = new Promise((resolve, reject) => {
    dataPromise.abort = reject
    Utils.request({
      url: '/api/content/photos',
      method: 'GET',
      data: params,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
    .then((res) => {
      const photoContents = res.content || []
      if (photoContents.length !== 0) {
        renderPhotos($photosGallery, photoContents)
        isEnd = res.isLast
      } else {
        isEnd = true
      }
    })
    .catch((err) => console.log(err))
    .finally(() => {
      $photosGallery.removeClass('loading')
      dataPromise = {}
      isLoading = false
    })
}

// 重置列表
const reset = async ($photosGallery, param) => {
  if (dataPromise) {
    dataPromise.abort && dataPromise.abort('abort')
    await dataPromise.promise
  }
  $photosGallery.empty()
  isEnd = false
  isLoading = false
  queryParams.page = 0
  location.hash = param.team
  getData($photosGallery, param)
}

const photoContext = {
  /* 初始化事件 */
  initEvent() {
    if (photoContextInitial) return

    // 分组过滤
    $('body').on('click', '.photos-teams .item', function (e) {
      e.stopPropagation()
      const $this = $(this)
      if ($this.hasClass('active')) return
      $this.addClass('active').siblings('li').removeClass('active')
      reset($('.photos-gallery'), {team: $this.attr('data-team')})
    })

    // 滚动加载
    window.addEventListener(
      'scroll',
      function () {
        let $photosGallery = $('.photos-gallery')
        if ($photosGallery.length !== 0 && $(window).scrollTop() + $(window).height() >= $photosGallery.height()) {
          if (isLoading || isEnd) return
          queryParams.page++
          getData($photosGallery,{
            team: $('.photos-teams li.active').attr('data-team')
          })
        }
      }
    )
    photoContextInitial = true
  },
  /* 初始化相册列表 */
  initPhotos() {
    const $photosGallery = $('.photos-gallery')
    // 从新初始化参数
    dataPromise = {}
    isLoading = false
    isEnd = false
    queryParams = {
      page: 0,
      size: 15,
      sort: 'createTime,desc',
    }
    // 读取变量
    if (location.hash) {
      let team = decodeURI(location.hash.substring(1))
      let teamElem = $('.photos-teams li[data-team=' + team + ']')
      teamElem.length > 0 ? teamElem.click() : $('.photos-teams li:not([data-team])').addClass('active') && getData($photosGallery)
    } else {
      $('.photos-teams li:not([data-team])').addClass('active')
      getData($photosGallery)
    }

  },
}
window.photoPjax = function (serialNumber) {
  if ($('.photos-gallery').length === 0) return
  Object.keys(photoContext).forEach(
    (c) => window.pjaxSerialNumber === serialNumber && photoContext[c]()
  )
}
!(function () {
  !window.pjaxSerialNumber && photoContext.initEvent()
  !window.pjaxSerialNumber && photoContext.initPhotos()
})()