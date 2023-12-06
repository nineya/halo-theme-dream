var a_idx = 0
jQuery(document).ready(function ($) {
  $('body').click(function (e) {
    var a = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
    var $i = $('<span/>').text(a[a_idx])
    a_idx = (a_idx + 1) % a.length
    var x = e.pageX, y = e.pageY
    let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    y = y - scrolly
    $i.css({
      'z-index': 999,
      'top': y - 20,
      'left': x,
      'position': 'fixed',
      'font-weight': 'bold',
      'color': /*"#ff6651" 随机颜色写法：*/ 'rgb(' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ')'
    })
    $('body').append($i)
    $i.animate({'top': y - 180, 'opacity': 0}, 1500, function () {
      $i.remove()
    })
  })
})