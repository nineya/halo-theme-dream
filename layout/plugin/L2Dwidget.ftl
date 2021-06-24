<#if settings.l2dwidget!true>
<script src="${theme_base!}/source/live2d/L2Dwidget.min.js"></script>
<script>
    L2Dwidget.init({
        "model": {
　　　　jsonPath: "${theme_base!}/source/live2d/live2d-widget-model-shizuku/assets/shizuku.model.json",
            "scale": 1
        },
        "display": {
            "position": "right", //显示位置左、右
            "width": 120,  // 宽度
            "height": 240, //高度
        },
        "mobile": {
            "show": <#if settings.l2dwidget_mobile!true>true<#else>false</#if>,	// 移动端显示
            "scale": 0.2	//移动端显示缩小比例
        },
        "react": {
            "opacityDefault": 0.9,	//默认透明度
            "opacityOnHover": 0.2	//鼠标选中透明度
        }
    });
</script>
</#if>