(function () {
  if (self.document) {
    const currentScriptUrl = document.currentScript.src
    const install = new URLSearchParams(currentScriptUrl.split('?')[1]).get('install')
    if (install) {
      navigator.serviceWorker.register(document.currentScript.src)
        .catch(function (error) {
          console.log('cache failed with ' + error) // registration failed
        })
    } else {
      console.log('uninstall service worker.')
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.active && registration.active.scriptURL && registration.active.scriptURL.indexOf('/sw.min.js') !== -1 && registration.unregister()
        }
      })
      window.caches && caches.keys && caches.keys().then(function (keys) {
        keys.forEach(function (key) {
          console.log('delete cache', key)
          caches.delete(key)
        })
      })
    }
  } else {
    //可以进行版本修改，删除缓存
    const version = '1.0.0'
    const cacheName = `Dream-${version}`
    const offLine = new URLSearchParams(location.href.split('?')[1]).get('offLine')

    // 需要走cdn和缓存的请求（cdn优先于缓存）
    const cdnAndCacheList = [
      new RegExp(`${location.origin}/themes`, 'i'), //主题目录
      /\/\/(unpkg\.com|npm\.elemecdn\.com|cdn\.jsdelivr\.net\/npm)\//i, //npm公共cdn网站
    ]

    //对这里面的请求只走缓存
    const onlyCacheList = [
      new RegExp(`${location.origin}/upload`, 'i'), //图片等附件目录
      /\/\/cdn.jsdelivr.net\//i,  //gh目前没有可用cdn源
    ]

    // 不缓存，不走cdn（优先级别最高）
    const notCacheList = [
      new RegExp(`${location.origin}/(admin|api)`, 'i'), //管理后台
    ]

    const cdn = {
      theme: {
        originUrl: `${location.origin}/themes/dream`,
        handleRequest: url => {
          if (url.indexOf(cdn.theme.originUrl) !== 0) return
          const path = url.substring(cdn.theme.originUrl.length)
          const version = new URLSearchParams(url.split('?')[1]).get('mew') || 'latest'
          return [
            url,
            ...cdn.npm.urlTemplates.map(value => `${value}/halo-theme-dream@${version}${path}`)
          ]
        },
      },
      npm: {
        urlTemplates: [
          'https://unpkg.com',
          'https://cdn.jsdelivr.net/npm',
          'https://npm.elemecdn.com',
        ],
        handleRequest: url => {
          return handleUrls(cdn.npm.urlTemplates, url)
        }
      },
    }

    /**
         * 使用模板替换url路径
         *
         * @param urlTemplates
         * @param url
         * @returns {*}
         */
    function handleUrls(urlTemplates, url) {
      for (let index in urlTemplates) {
        if (url.indexOf(urlTemplates[index]) === 0) {
          const path = url.substring(urlTemplates[index].length)
          return urlTemplates.map(value => value + path)
        }
      }
    }

    //添加缓存
    self.addEventListener('install', function (event) {
      console.log('install service worker.')
      event.waitUntil(self.skipWaiting()) //这样会触发activate事件
    })

    // 激活
    self.addEventListener('activate', function (event) {
      console.log('service worker activate.')
      const mainCache = [cacheName]
      event.waitUntil(
        caches.keys().then(function (cacheNames) {
          return Promise.all(
            cacheNames.map(function (cacheName) {
              if (mainCache.indexOf(cacheName) === -1) {//没有找到该版本号下面的缓存
                // When it doesn't match any condition, delete it.
                console.info('version changed, clean the cache, SW: deleting ' + cacheName)
                return caches.delete(cacheName)
              }
            })
          )
        })
      )
      return self.clients.claim()
    })

    /**
         * 判断ur是否符合list列表中的正则要求
         *
         * @param list
         * @param url
         * @returns {boolean}
         */
    function isExitInCacheList(list, url) {
      return list.some(function (value) {
        return value.test(url)
      })
    }

    /**
         * 判断两个url是否属于同一个请求，过滤掉部分参数
         *
         * @param urla
         * @param urlb
         * @returns {boolean}
         */
    function isSameRequest(urla, urlb) {
      // 除了这这些参数，其它的查询参数必须要一致，才认为是同一个请求
      const white_query = new Set([
        'mew',  // 自定义的版本号
        'v',
        'version',
        't',
        'time',
        'ts',
        'timestamp'
      ])

      const a_url = urla.split('?')
      const b_url = urlb.split('?')
      if (a_url[0] !== b_url[0]) {
        return false
      }

      const a_params = new URLSearchParams('?' + a_url[1])
      const b_params = new URLSearchParams('?' + b_url[1])

      // 显示所有的键
      for (const key of a_params.keys()) {
        if (white_query.has(key)) {//对于版本号的key 忽略
          continue
        }
        if (a_params.get(key) !== b_params.get(key)) {//其它key的值必须相等，比如type=POST 这种
          return false
        }
      }

      return true
    }

    // 拦截请求使用缓存的内容
    self.addEventListener('fetch', function (event) {
      if (event.request.method !== 'GET') {
        return false
      }
      const isCdnAndCache = isExitInCacheList(cdnAndCacheList, event.request.url)
      // 不符合缓存要求的
      if (!(isCdnAndCache || isExitInCacheList(onlyCacheList, event.request.url)) || isExitInCacheList(notCacheList, event.request.url)) {
        if (!offLine) { // 不需要离线
          return false
        }
        // return false;
        event.respondWith(caches.open(cacheName)
          .then(cache => {
            return fetch(event.request)
              .then((response) => {
                if (response.status === 200) cache.put(event.request, response.clone())
                return response
              })
              .catch(() => cache.match(event.request))
          })
        )
        return true
      }
      // 劫持 HTTP Request
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          // ignoreSearch 忽略请求参数进行查找，用于匹配不同版本
          return cache.match(event.request).then(function (cacheResponse) {
            // 直接返回缓存
            if (cacheResponse) return cacheResponse

            return handleRequest(event.request, isCdnAndCache)
              .then((response) => {
                const responseClone = response.clone()
                cache.matchAll(event.request, {'ignoreSearch': true})
                  .then(function (cache_response_list) {
                    // 删除旧版本的缓存文件
                    if (cache_response_list) {
                      for (const cache_response of cache_response_list) {
                        const responseUrl = cache_response.url || cache_response.headers.get('service-worker-origin')
                        if (isSameRequest(responseUrl, event.request.url)) {
                          cache.delete(responseUrl)
                        }
                      }
                    }
                    cache.put(event.request, responseClone)
                  })
                return response
              })
              .catch(error => {
                console.error(error)
                return cache.matchAll(event.request, {'ignoreSearch': true})
                  .then(function (cache_response_list) {
                    // 从缓存中取得历史版本的文件
                    if (cache_response_list) {
                      for (const cache_response of cache_response_list) {
                        if (isSameRequest(cache_response.url || cache_response.headers.get('service-worker-origin'), event.request.url)) {
                          return cache_response
                        }
                      }
                    }
                  })
              })
          })
        })
      )
    })

    /**
         * 处理请求
         * @param req
         * @param isCdnAndCache
         * @returns {Promise<Response>|*}
         */
    function handleRequest(req, isCdnAndCache) {
      // 不是cdn缓存的话，直接进行查询并返回
      if (!isCdnAndCache) return fetch(req)


      const reqUrl = req.url
      // 匹配 cdn
      for (const type in cdn) {
        const urls = cdn[type].handleRequest(reqUrl)
        if (urls) return fetchAny(reqUrl, urls)
      }
      // 没有匹配到url，直接发起请求
      return fetch(req)
    }

    // Promise.any 的 polyfill
    function createPromiseAny() {
      Promise.any = function (promises) {
        return new Promise((resolve, reject) => {
          promises = Array.isArray(promises) ? promises : []
          let len = promises.length
          let errs = []
          if (len === 0)
            return reject(new AggregateError('All promises were rejected'))
          promises.forEach((p) => {
            if (!(p instanceof Promise)) return reject(p)
            p.then(
              (res) => resolve(res),
              (err) => {
                len--
                errs.push(err)
                if (len === 0) reject(new AggregateError(errs))
              }
            )
          })
        })
      }
    }

    // 发送所有请求
    function fetchAny(originUrl, urls) {
      // 中断一个或多个请求
      const controller = new AbortController()
      const signal = controller.signal

      // 遍历将所有的请求地址转换为promise
      const PromiseAll = urls.map((url) => {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
          fetch(url, {signal})
            .then(async res => {    // 重新封装响应
              const newHeaders = new Headers(res.headers)
              newHeaders.set('service-worker-origin', originUrl)
              return new Response(await res.arrayBuffer(), {
                status: res.status,
                headers: newHeaders,
              })
            })
            .then((res) => {
              if (res.status !== 200) reject(null)
              controller.abort() // 中断
              resolve(res)
            })
            .catch(() => reject(null)) // 去除中断的错误信息
        })
      })

      // 判断浏览器是否支持 Promise.any
      if (!Promise.any) createPromiseAny()

      // 谁先返回"成功状态"则返回谁的内容，如果都返回"失败状态"则返回null
      return Promise.any(PromiseAll).catch(() => null)
    }
  }
})()
