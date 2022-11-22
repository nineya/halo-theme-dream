try {
    ($("<link>").attr({href: "/themes/dream/source/lib/live2d/waifu.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head'),
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>'),
    $.ajax({url: DreamConfig['live2d_model_url'] + "dist/waifu-tips.min.js", dataType:"script", cache: true, success: function() {
            $.ajax({url: DreamConfig['live2d_model_url'] + "dist/live2d.js", dataType:"script", cache: true, success: function() {
                    live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
                    live2d_settings['modelId'] = 1;                  // 默认模型 ID
                    live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
                    live2d_settings['waifuSize'] = DreamConfig["live2d_waifu_size"],
                    live2d_settings['waifuTipsSize'] = "230x75",
                    live2d_settings['waifuFontSize'] = "16px",
                    live2d_settings['waifuToolFont'] = "16px",
                    live2d_settings['waifuToolLine'] = "26px",
                    live2d_settings['waifuEdgeSide'] = DreamConfig["live2d_edge_side"],
                    live2d_settings['homePageUrl'] = "/";
                    live2d_settings['modelCdnUrl'] = DreamConfig['live2d_model_url']
                    if (DreamConfig["live2d_about_page"]) {
                        live2d_settings['aboutPageUrl'] = DreamConfig["live2d_about_page"];
                    } else {
                        live2d_settings['canTurnToAboutPage']   = false;
                    }
                    /* 在 initModel 前添加 */
                    initModel("/themes/dream/source/lib/live2d/waifu-tips.json");
                }})
        }}))
} catch(err) { console.log("[Error] JQuery is not defined.") }
