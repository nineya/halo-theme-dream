try {
  ($('<link>').attr({href: '/themes/dream/source/lib/live2d@1.0.1/waifu.min.css', rel: 'stylesheet', type: 'text/css'}).appendTo('head'),
  $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>'),
  $.ajax({url: '/themes/dream/source/lib/live2d@1.0.1/waifu-tips.min.js', dataType:'script', cache: true, success: function() {
    $.ajax({url: '/themes/dream/source/lib/live2d@1.0.1/live2d.min.js', dataType:'script', cache: true, success: function() {
      live2d_settings['hitokotoAPI'] = 'hitokoto.cn'  // 一言 API
      live2d_settings['modelId'] = DreamConfig['live2d_model_id']                  // 默认模型 ID
      live2d_settings['modelTexturesId'] = DreamConfig['live2d_model_textures_id']          // 默认材质 ID
      live2d_settings['waifuSize'] = DreamConfig['live2d_waifu_size'],
      live2d_settings['waifuTipsSize'] = '230x75',
      live2d_settings['waifuFontSize'] = '16px',
      live2d_settings['waifuToolFont'] = '16px',
      live2d_settings['waifuToolLine'] = '26px',
      live2d_settings['waifuEdgeSide'] = DreamConfig['live2d_edge_side'],
      live2d_settings['homePageUrl'] = '/'
      live2d_settings['modelCdnUrl'] = DreamConfig['live2d_model_url']
      live2d_settings['showToolMenu'] = DreamConfig['live2d_show_tool_menu']
      live2d_settings['canTurnToHomePage']   = DreamConfig['live2d_can_turn_to_home_page']
      live2d_settings['canSwitchHitokoto']   = DreamConfig['live2d_can_switch_hitokoto']
      live2d_settings['canSwitchModel']   = DreamConfig['live2d_can_switch_model']
      live2d_settings['canSwitchTextures']   = DreamConfig['live2d_can_switch_textures']
      live2d_settings['canTakeScreenshot']   = DreamConfig['live2d_can_take_screenshot']
      if (DreamConfig['live2d_about_page']) {
        live2d_settings['canTurnToAboutPage']   = DreamConfig['live2d_can_turn_to_about_page']
        live2d_settings['aboutPageUrl'] = DreamConfig['live2d_about_page']
      } else {
        live2d_settings['canTurnToAboutPage']   = false
      }
      live2d_settings['canCloseLive2d']   = DreamConfig['live2d_can_close_live2d']
      live2d_settings['modelRandMode']   = DreamConfig['live2d_model_rand_mode']
      live2d_settings['modelTexturesRandMode']   = DreamConfig['live2d_model_textures_rand_mode']
      /* 在 initModel 前添加 */
      initModel(DreamConfig['live2d_tips_url'])
    }})
  }}))
} catch(err) { console.log('[Error] JQuery is not defined.') }
