import QRCode from "qrcode"

const channels = {
  qq: {
    name: 'QQ',
    template: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"'
  },
  qzone: {
    name: 'QQ空间',
    template: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}&pics={{IMAGE}}'
  },
  wechat: {
    name: '微信',
    template: 'javascript:;'
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
  }
};

const defaultConfig = {
  url: location.href,
  origin: location.origin,
  source: getMetaContentByName('site') || getMetaContentByName('Site') || document.title,
  title: getMetaContentByName('title') || getMetaContentByName('Title') || document.title,
  description: getMetaContentByName('description') || getMetaContentByName('Description') || '',
  // 图片url
  image: undefined,
  // 图片或者图片所在的容器的选择器
  imageSelector: '.main-content',
  weiboKey: '',

  sites: ['qq', 'qzone', 'wechat', 'weibo', 'douban', 'linkedin', 'facebook', 'twitter', 'google'],
};

window.DShare = {
  create(element, options) {
    const config = buildConfig(defaultConfig, options)
    element = $(element);
    element.addClass('dshare-container')
    for (let site of config.sites) {
      let clazz = 'icon-' + site;
      let url = makeUrl(site, config);
      element.append(`<a class="dshare-icon ${clazz}" href="${url}" title="${channels[site].name}"></a>`)
    }
  },
  /**
   * 海报方式分享
   * @param options
   */
  sharePoster(options) {
    triggerPosterShare(buildConfig(defaultConfig, options))
  }
}

/**
 * 触发海报方式分享
 */
function triggerPosterShare(config) {
  QRCode.toDataURL(config.url)
    .then(data => {
      let elem = $('body').append(`<div class="dshare-poster click-close"><div class="dshare-poster-crad"${config.image ? ` style="background-image: url('${config.image}')"` : ''
      }>${config.title !== '' ? `<p class="dshare-poster-title">${config.title}</p>` : ''
      }<p class="dshare-poster-desc">${config.description}</p><img class="dshare-poster-qrcode" src="${data}" alt="${config.title}分享海报"/></div></div>`)
      console.log(elem)
    }
)
}

/**
 * 创建配置
 * @param options
 * @returns {*}
 */
function buildConfig(options) {
  const config = options && Object.assign(defaultConfig, options)
  if (!config.summary) {
    config.summary = config.description;
  }
  if (!config.image && config.imageSelector) {
    let selector = $(config.imageSelector);
    config.image = selector.filter('img[src]').first().attr('src') || selector.find('img[src]').first().attr('src')
  }
  if (config.image) {
    if (config.image.substr(0, 2) === '//') {
      config.image = location.protocol + config.image
    } else if (config.image.substr(0, 1) === '/') {
      config.image = location.origin + config.image
    }
  }
  return config;
}

/**
 * 获取元元素内容值
 *
 * @param {String} name
 *
 * @returns {String|*}
 */
function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content;
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
    let nameKey = site + fix + key.toLowerCase();
    key = (fix + key).toLowerCase();

    return encodeURIComponent((config[nameKey] === undefined ? config[key] : config[nameKey]) || '');
  });
}