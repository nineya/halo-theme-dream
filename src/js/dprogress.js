(function() {
  var DProgress = {}

  var Settings = DProgress.settings = {
    minimum: 0.08,      // 最小值
    easing: 'linear',   // 动画规律
    speed: 400,         // 动画速度
    trickle: true,      // 开启自动增量
    trickleSpeed: 200,  // 缓慢增量
    parent: 'body',
    template: '<div class="bar"></div>'
  }

  /**
     * Updates configuration.
     *
     *     DProgress.configure({
     *       minimum: 0.1
     *     });
     */
  DProgress.configure = function(options) {
    var key, value
    for (key in options) {
      value = options[key]
      // eslint-disable-next-line no-prototype-builtins
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value
    }

    return this
  }

  /**
     * 进度状态，0-1
     */

  DProgress.status = null

  function clamp(n, min, max) {
    if (n < min) return min
    if (n > max) return max
    return n
  }

  /**
     * 开始进度条
     *
     *     DProgress.start();
     *
     */
  DProgress.start = function() {
    if (!DProgress.status) DProgress.set(0)
    $('#dprogress').show()

    var work = function() {
      setTimeout(function() {
        if (!DProgress.status ||DProgress.status === 1) return
        DProgress.trickle()
        work()
      }, Settings.trickleSpeed)
    }

    if (Settings.trickle) work()

    return this
  }

  /**
     * 缓慢增量
     * @returns {undefined}
     */
  DProgress.trickle = function() {
    return DProgress.inc()
  }

  /**
     * 增量
     */
  DProgress.inc = function(amount) {
    var n = DProgress.status

    if (!n) {
      return DProgress.start()
      // eslint-disable-next-line no-empty
    } else if(n >= 1) {

    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.2) { amount = 0.1 }
        else if (n >= 0.2 && n < 0.5) { amount = 0.04 }
        else if (n >= 0.5 && n < 0.8) { amount = 0.02 }
        else if (n >= 0.8 && n < 0.98) { amount = 0.005 }
        else { amount = 0 }
      }

      n = clamp(n + amount, 0, 0.98)
      return DProgress.set(n)
    }
  }

  /**
     * 设置进度状态 `0.0` to `1.0`.
     *
     *     DProgress.set(0.4);
     *     DProgress.set(1.0);
     */
  DProgress.set = function(n) {

    DProgress.status = clamp(n, Settings.minimum, 1)

    var progress = document.getElementById('dprogress')
    if (!progress) {
      progress = document.createElement('div')
      progress.id = 'dprogress'
      progress.innerHTML = Settings.template
      var bar = $(progress.querySelector('.bar'))
      bar.css('transition', `all ${Settings.speed}ms ${Settings.easing}`)
      if (DreamConfig.load_progress === 'center') {
        bar.css('margin', 'auto')
      }
      $(Settings.parent).prepend(progress)
    }
    progress.querySelector('.bar').style.width = `${n * 100}%`

    return this
  }

  /**
     * 进度条是否已经开始
     * @returns {boolean}
     */
  DProgress.isStarted = function() {
    return typeof DProgress.status === 'number'
  }

  /**
     * 完成进度条
     * @param force
     * @returns {DProgress|*}
     */
  DProgress.done = function() {
    DProgress.inc(0.3 + 0.5 * Math.random()).set(1)

    setTimeout(function() {
      $('#dprogress').hide()
      DProgress.status = undefined
    }, Settings.speed)
    return this
  }

  /**
     * 检查进度条是否显示
     */

  DProgress.isRendered = function() {
    return !!document.getElementById('dprogress')
  }


  window.DProgress = DProgress
})()