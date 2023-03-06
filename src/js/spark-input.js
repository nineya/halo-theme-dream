const sparkInput = function(element, list) {
  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  function randomCode() {
    return String.fromCharCode(94 * Math.random() + 33)
  }
  function buildFragment(r) {
    for (var fragment = document.createDocumentFragment(), i = 0; r > i; i++) {
      var span = document.createElement('span')
      span.textContent = randomCode(),
      span.style.color = randomColor(),
      fragment.appendChild(span)
    }
    return fragment
  }
  function start() {
    var msg = messages[entry.skillI]
    if(entry.step) {
      entry.step--
    } else {
      entry.step = step
      if(entry.prefixP < message.length) {
        (entry.prefixP >= 0 && (entry.text += message[entry.prefixP]), entry.prefixP++)
      } else {
        if('forward' === entry.direction) {
          if(entry.skillP < msg.length) {
            (entry.text += msg[entry.skillP], entry.skillP++)
          } else {
            if(entry.delay){
              entry.delay--
            } else {
              entry.direction = 'backward'
              entry.delay = delay
            }
          }
        }else{
          if(entry.skillP > 0) {
            entry.text = entry.text.slice(0, -1)
            entry.skillP--
          } else {
            entry.skillI = (entry.skillI + 1) % messages.length
            entry.direction = 'forward'
          }
        }
      }
    }
    element.textContent = entry.text,
    element.appendChild(buildFragment(entry.prefixP < message.length ? Math.min(prefixP, prefixP + entry.prefixP) : Math.min(prefixP, msg.length - entry.skillP))),
    setTimeout(start, sleep)
  }
  var message = '',
    messages = list.map(function (s) {
      return s + ''
    }),
    delay = 2,
    // 彩字显示需要的步骤
    step = 1,
    // 乱码最大长度
    prefixP = 5,
    // 时间间隔
    sleep = 75,
    colors = ['rgb(110,64,170)', 'rgb(150,61,179)', 'rgb(191,60,175)', 'rgb(228,65,157)', 'rgb(254,75,131)', 'rgb(255,94,99)', 'rgb(255,120,71)', 'rgb(251,150,51)', 'rgb(226,183,47)', 'rgb(198,214,60)', 'rgb(175,240,91)', 'rgb(127,246,88)', 'rgb(82,246,103)', 'rgb(48,239,130)', 'rgb(29,223,163)', 'rgb(26,199,194)', 'rgb(35,171,216)', 'rgb(54,140,225)', 'rgb(76,110,219)', 'rgb(96,84,200)'],
    entry = {
      text: '',
      prefixP: -prefixP,
      skillI: 0,
      skillP: 0,
      direction: 'forward',
      delay: delay,
      step: step
    }
  start()
}

window.sparkInput = sparkInput