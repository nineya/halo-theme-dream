(function () {
    if (compareVersion('2.0.8', '2.0.8')) {
        addCss('.main-content ol:not([class]):not([style]):not([start])>li:not([class]):not([style]):before {width: max-content}')
    }

    /**
     * 添加css
     * @param cssContent
     */
    function addCss(cssContent) {
        let n = setInterval(function () {
            if (!document.body) return
            const style = document.createElement('style')
            style.appendChild(document.createTextNode(cssContent));
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
        let vCode1 = v1 ? versionCode(v1) : 0;
        let vCode2 = v2 ? versionCode(v2) : 1 << 31 - 1;
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
        let code = 0;
        let vSplit = version.split('-');
        if (vSplit.length > 1) {
            let vn = vSplit[1].split('.')
            let n = vn[0] === 'alpha' ? 0 : vn[0] === 'fix' ? 2 : 1;
            if (vn.length > 1) {
                code = parseInt(vn[1])
            }
            code |= n << 6
        } else {
            code = 1 << 6
        }
        console.log(code)
    }
})();