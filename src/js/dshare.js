import QRCode from 'qrcode'
import html2canvas from 'html2canvas'

const channels = {
  qq: {
    name: 'QQ',
    template: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary={{SUMMARY}}'
  },
  qzone: {
    name: 'QQ空间',
    template: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}&pics={{IMAGE}}'
  },
  wechat: {
    name: '微信'
  },
  weibo: {
    name: '新浪微博',
    template: 'https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{KEY}}'
  },
  douban: {
    name: '豆瓣',
    template: 'http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11'
  },
  linkedin: {
    name: 'Linkedin',
    template: 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin'
  },
  facebook: {
    name: 'FaceBook',
    template: 'https://www.facebook.com/sharer/sharer.php?u={{URL}}'
  },
  twitter: {
    name: 'Twitter',
    template: 'https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}'
  },
  google: {
    name: 'Google',
    template: 'https://plus.google.com/share?url={{URL}}'
  },
  link: {
    name: '复制链接'
  },
  poster: {
    name: '海报'
  }
}

function defaultConfig() {
  return {
    url: location.href,
    origin: location.origin,
    source: getMetaContentByName('site') || getMetaContentByName('Site') || document.title,
    title: getMetaContentByName('title') || getMetaContentByName('Title') || document.title,
    description: getMetaContentByName('description') || getMetaContentByName('Description') || '',
    // 图片url
    image: undefined,
    // 图片或者图片所在的容器的选择器
    imageSelector: undefined,
    weiboKey: '',
    sites: ['qq', 'qzone', 'wechat', 'weibo', 'douban', 'linkedin', 'facebook', 'twitter', 'google', 'link', 'poster']
  }
}

let linkCopy

window.DShare = {
  create(element, options) {
    const $body = $('body')
    $body.off('click', '.icon-poster')
    linkCopy && linkCopy.destroy()
    const config = buildConfig(options)
    element = $(element)
    element.addClass('dshare-container')
    for (let site of config.sites) {
      let clazz = 'icon-' + site
      element.append(`<a class="dshare-icon ${clazz}" data-not-pjax${channels[site].template ? ` target="_blank" href=${makeUrl(site, config)}` : ''} title="${channels[site].name}"></a>`)
    }
    config.sites.indexOf('wechat') !== -1 && createWechatShare(config, element)
    if(config.sites.indexOf('link') !== -1){
      linkCopy = new ClipboardJS('.icon-link', {text: () => config.url})
        .on('error', () => Qmsg.error('您的浏览器不支持复制'))
        .on('success', () => Qmsg.success('链接复制成功'))
    }
    config.sites.indexOf('poster') !== -1 && $body.on('click', '.icon-poster', () => triggerPosterShare(config))
  },
  /**
     * 海报方式分享
     * @param options
     */
  sharePoster(options) {
    triggerPosterShare(buildConfig(options))
  }
}

/**
 * 创建微信分享
 * @param config 配置
 * @param element 实体
 */
function createWechatShare(config, element) {
  QRCode.toDataURL(config.url, { width: 140})
    .then(data => {
      element.find('.icon-wechat').append(`<div class="wechat-qrcode"><h4>微信扫一扫：分享</h4><img alt="微信分享" src="${data}"/></div>`)
    })
}

/**
 * 触发海报方式分享
 */
function triggerPosterShare(config) {
  QRCode.toDataURL(config.url)
    .then(data => {
      $('body').append(`<div class="dshare-poster click-animation-close pjax-close"><div class="dshare-poster-container"><div class="dshare-poster-crad">${
        config.image ? `<div class="dshare-poster-cover"><img alt="${config.title}封面" src="${config.image}"/></div>` : ''
      }${config.title !== '' ? `<div class="dshare-poster-content"><p class="dshare-poster-title">${config.title}</p>` : ''
      }<p class="dshare-poster-desc">${config.description}</p><div class="dshare-poster-footer"><img class="dshare-poster-qrcode" src="${data}" alt="${config.title
      }分享海报"/><div class="dshare-poster-qrcode-info"><p class="dshare-poster-qrcode-site">${config.origin}</p><p class="dshare-poster-qrcode-msg">手机扫描二维码查看</p></div></div></div></div><i title="点击下载封面" class="dshare-poster-download fa fa-arrow-down"></i></div></div>`)
      let $posterCrad = $('.dshare-poster-crad')
      $posterCrad.click(e => e.stopPropagation())
      $('.dshare-poster-download').click(e => {
        e.stopPropagation()
        let divWidth = $posterCrad.outerWidth()
        let divHeight =$posterCrad.outerHeight()
        html2canvas($posterCrad[0], {height: divHeight, width: divWidth, useCORS: true, scale: 2, onclone(doc){
          doc.getElementsByClassName('dshare-poster-crad')[0].style['transform'] = 'none'
          doc.getElementsByClassName('dshare-poster-crad')[0].style['border-radius'] = 0
        }})
          .then((canvas) => {
            let a = document.createElement('a')
            a.href= canvas.toDataURL('image/png')
            a.download = `share-${new Date().getTime()}.png`
            a.click()
            $('.dshare-poster').click()
          })
      })
    }
    )
}

/**
 * 创建配置
 * @param options
 * @returns {*}
 */
function buildConfig(options) {
  const config = Object.assign(defaultConfig(), options)
  if (!config.summary) {
    config.summary = config.description
  }
  if (!config.image && config.imageSelector) {
    let selector = $(config.imageSelector)
    config.image = selector.filter('img[src]').first().attr('src') || selector.find('img[src]').first().attr('src')
  }
  if (config.image) {
    if (config.image.substring(0, 2) === '//') {
      config.image = location.protocol + config.image
    } else if (config.image.substring(0, 1) === '/') {
      config.image = location.origin + config.image
    }
  }
  return config
}

/**
 * 获取元元素内容值
 *
 * @param {String} name
 *
 * @returns {String|*}
 */
function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content
}

/**
 * 创建网站的url
 *
 * @param {String} site
 * @param {Object} config
 *
 * @returns {String}
 */
function makeUrl(site, config) {
  let channel = channels[site]
  return channel.template.replace(/\{\{(\w)(\w*)\}\}/g, function (m, fix, key) {
    let nameKey = site + fix + key.toLowerCase()
    key = (fix + key).toLowerCase()

    return encodeURIComponent((config[nameKey] === undefined ? config[key] : config[nameKey]) || '')
  })
}