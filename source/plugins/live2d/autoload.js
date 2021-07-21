try {
    768 < $(window).width() && ($("<link>").attr({href: "/themes/dream/source/plugins/live2d/waifu.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head'),
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>'),
    $.ajax({url: "/themes/dream/source/plugins/live2d/waifu-tips.js?v=1.4.2", dataType:"script", cache: true, success: function() {
            $.ajax({url: "/themes/dream/source/plugins/live2d/live2d.js?v=1.0.5", dataType:"script", cache: true, success: function() {
                    live2d_settings['modelAPI'] = "https://live2d.fghrsh.net/api/",
                    live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
                    live2d_settings['modelId'] = 1;                  // 默认模型 ID
                    live2d_settings['modelTexturesId'] = 83;          // 默认材质 ID
                    live2d_settings['waifuSize'] = "280x260",
                    live2d_settings['waifuTipsSize'] = "230x75",
                    live2d_settings['waifuFontSize'] = "16px",
                    live2d_settings['waifuToolFont'] = "16px",
                    live2d_settings['waifuToolLine'] = "26px",
                    live2d_settings['waifuEdgeSide'] = "right:10",
                    live2d_settings['homePageUrl'] = "/",
                    live2d_settings['aboutPageUrl'] = "/about/",
                    /* 在 initModel 前添加 */
                    initModel("/themes/dream/source/plugins/live2d/waifu-tips.json");
                }})
        }}))
} catch(err) { console.log("[Error] JQuery is not defined.") }
