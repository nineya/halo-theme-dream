(function () {
  if (compareVersion('2.1.0', '2.1.1')) {
    addCss('.widget.profile .level-item {flex-shrink: 1;}')
  }
  if (compareVersion(undefined, '2.0.9')) {
    addCss('.main-content .katex {line-height: 1.4;display: block;overflow-x: auto;overflow-y: hidden;}')
  }

  /**
     * 添加css
     * @param cssContent
     */
  function addCss(cssContent) {
    let n = setInterval(function () {
      if (!document.body) return
      const style = document.createElement('style')
      style.appendChild(document.createTextNode(cssContent))
      document.body.appendChild(style)
      clearInterval(n)
    }, 100)
  }

  /**
     * 判断是否在这个区间里
     * @param v1
     * @param v2
     */
  function compareVersion(v1, v2) {
    let vCode1 = v1 ? versionCode(v1) : 0
    let vCode2 = v2 ? versionCode(v2) : 1 << 31 - 1
    let cvCode = versionCode(DreamConfig.theme_version)
    return cvCode >= vCode1 && cvCode <= vCode2
  }

  /**
     * 取得版本code
     * v(6位).(6位).(6位)-(4位).(6位)
     * @param version
     * @returns {number}
     */
  function versionCode(version) {
    let code = 0
    let vSplit = version.split('-')
    if (vSplit.length > 1) {
      let vn = vSplit[1].split('.')
      let n = vn[0] === 'alpha' ? 0 : vn[0] === 'fix' ? 2 : 1
      if (vn.length > 1) {
        code = parseInt(vn[1])
      }
      code |= n << 6
    } else {
      code = 1 << 6
    }
    let vs = vSplit[0].split('.')
    for (let i = 3; i > 0; i--) {
      if (i > vs.length) {
        continue
      }
      code |= parseInt(vs[i - 1]) << (10 + ((3 - i) * 6))
    }
    return code
  }
})()