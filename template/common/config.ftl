<style>
    <#assign fontSrc=(settings.web_font?? && settings.web_font!='default')?then((settings.web_font=='custom')?then(settings.custom_font!'', '${theme_base!}/source/font/${settings.web_font}'), '')>
    <#if fontSrc!=''>
      <#if fontSrc?ends_with(".woff")>
      <#assign fontFormat="woff">
      <#elseif fontSrc?ends_with(".woff2")>
      <#assign fontFormat="woff2">
      <#elseif fontSrc?ends_with(".ttf")>
      <#assign fontFormat="truetype">
      <#elseif fontSrc?ends_with(".eot")>
      <#assign fontFormat="embedded-opentype">
      <#elseif fontSrc?ends_with(".svg")>
      <#assign fontFormat="svg">
      </#if>
    @font-face {
        font-family: "Dream Font";
        font-display: swap;
        font-weight: 400;
        src: url("${fontSrc!}")${(fontFormat??)?then(' format("${fontFormat}")', '')};
    }

    </#if>
    html {
    <#if settings.enable_gray_mode!false>
      filter: grayscale(1) !important;
    </#if>
    <#if settings.theme_color?? && settings.theme_color!=''>
        --theme: ${settings.theme_color};
    </#if>
    <#if settings.cursor_style?? && settings.cursor_style!='none'>
    <#if settings.cursor_style=='breeze'>
      --cursor-default: url(/themes/dream/source/cursor/breeze/Arrow.cur), auto;
      --cursor-pointer: url(/themes/dream/source/cursor/breeze/Hand.cur), pointer;
      --cursor-text: url(/themes/dream/source/cursor/breeze/IBeam.cur), auto;
      --cursor-zoom-in: url(/themes/dream/source/cursor/breeze/Cross.cur), zoom-in;
    <#elseif settings.cursor_style=='black_cat'>
      --cursor-default: url(/themes/dream/source/cursor/black_cat/normal.cur), auto;
      --cursor-pointer: url(/themes/dream/source/cursor/black_cat/ayuda.cur), pointer;
      --cursor-text: url(/themes/dream/source/cursor/black_cat/texto.cur), auto;
      --cursor-zoom-in: url(/themes/dream/source/cursor/black_cat/precision.cur), zoom-in;
    <#elseif settings.cursor_style=='overwatch'>
      --cursor-default: url(/themes/dream/source/cursor/overwatch/pointer.cur), auto;
      --cursor-pointer: url(/themes/dream/source/cursor/overwatch/link.cur), pointer;
      --cursor-text: url(/themes/dream/source/cursor/overwatch/text.cur), auto;
      --cursor-zoom-in: url(/themes/dream/source/cursor/overwatch/cross.cur), zoom-in;
    <#elseif settings.cursor_style=='rainbow_rain'>
      --cursor-default: url(/themes/dream/source/cursor/rainbow_rain/normal.cur), auto;
      --cursor-pointer: url(/themes/dream/source/cursor/rainbow_rain/link.cur), pointer;
      --cursor-text: url(/themes/dream/source/cursor/rainbow_rain/texto.cur), auto;
      --cursor-zoom-in: url(/themes/dream/source/cursor/rainbow_rain/precision.cur), zoom-in;
    <#elseif settings.cursor_style=='marry'>
      --cursor-default: url(/themes/dream/source/cursor/marry/arrow.cur), auto;
      --cursor-pointer: url(/themes/dream/source/cursor/marry/arrow.cur), pointer;
      --cursor-text: url(/themes/dream/source/cursor/marry/beam.cur), auto;
      --cursor-zoom-in: url(/themes/dream/source/cursor/marry/move.cur), zoom-in;
    <#else>
      --cursor-default: url(/themes/dream/source/cursor/${settings.cursor_style}/arrow.cur), auto;
      --cursor-pointer: url(/themes/dream/source/cursor/${settings.cursor_style}/hand.cur), pointer;
      --cursor-text: url(/themes/dream/source/cursor/${settings.cursor_style}/arrow.cur), auto;
      --cursor-zoom-in: url(/themes/dream/source/cursor/${settings.cursor_style}/arrow.cur), zoom-in;
    </#if>
    </#if>
    }

    <#if settings.night_theme_color?? && settings.night_theme_color!=''>
    html.night {
        --theme: ${settings.night_theme_color};
    }

    </#if>

    <#if (settings.enable_image_bg!false)==true && (settings.theme_style!'default')!='clean'>
    <#if settings.background_pc?? && settings.background_pc!=''>
    body:before {
        background: url("${settings.background_pc!}") center 0 no-repeat;
    }

    </#if>
    html.night body:before {
        background: ${(settings.night_background_pc?? && settings.night_background_pc!='')?then('url("${settings.night_background_pc!}") center 0 no-repeat','none')};
    }

    @media screen and (max-width: 768px) {
        body:before {
            background: ${(settings.background_mobile?? && settings.background_mobile!='')?then('url("${settings.background_mobile!}") center 0 no-repeat','none')};
        }

        html.night body:before {
            background: ${(settings.night_background_mobile?? && settings.night_background_mobile!='')?then('url("${settings.night_background_mobile!}") center 0 no-repeat','none')};
        }
    }

    </#if>
</style>
<script type="text/javascript">
    window.logger = console.log;
    <#if !(settings.enable_debug!false)>
    console.logStorage = [];
    console.log = function (message, ...optionalParams) {
      console.logStorage.push(()=>window.logger(message, optionalParams));
      if (console.logStorage.length > 100) {
        console.logStorage.shift()
      }
    };
    console.logPrint = function () {
      for (let logItem of console.logStorage) {
        logItem();
      }
    };
    </#if>
    <#if settings.copy_explain?? && settings.copy_explain!=''>
    document.addEventListener('copy', function (event) {
      let clipboardData = event.clipboardData || window.clipboardData;
      if (!clipboardData) { return; }
      let text = window.getSelection().toString();
      if (text) {
        event.preventDefault();
        clipboardData.setData('text/plain', text + '\n${settings.copy_explain?trim?js_string}');
      }
    });
    </#if>
    /** 主题配置 */
    const DreamConfig = {};
    DreamConfig["theme_version"] = '${theme.version!}';
    DreamConfig["theme_base"] = '${theme_base!}';
    DreamConfig["access_key"] = '${settings.access_key!'dream'}';
    <#if settings.code_fold_line?? && settings.code_fold_line?number gte 20>
    DreamConfig["code_fold_line"] =${settings.code_fold_line};
    </#if>
    <#if settings.document_hidden_title?? && settings.document_hidden_title!=''>
    DreamConfig["document_hidden_title"] = '${settings.document_hidden_title?js_string}';
    </#if>
    <#if settings.document_visible_title?? && settings.document_visible_title!=''>
    DreamConfig["document_visible_title"] = '${settings.document_visible_title?js_string}';
    </#if>
    <#if settings.enable_color_character!false>
    DreamConfig["spark_input_content"] = ['${user.description?trim?replace('\n', '')?js_string}'<#if settings.color_character?? && settings.color_character?trim!=''>, '${settings.color_character?trim?js_string?replace('\\n', "','")}'</#if>];
    </#if>
    <#if settings.website_time?? && settings.website_time!=''>
    DreamConfig["website_time"] = '${settings.website_time}';
    </#if>
    DreamConfig["notice_show_mode"] = '${settings.notice_show_mode!'index'}';
    <#if settings.img_fold_height?? && settings.img_fold_height?number gte 400>
    DreamConfig["img_fold_height"] = ${settings.img_fold_height};
    </#if>
    <#if settings.journals_fold_height?? && settings.journals_fold_height?number gte 260>
    DreamConfig["journals_fold_height"] = ${settings.journals_fold_height};
    </#if>
    <#if settings.cursor_move?? && settings.cursor_move!='none'>
    DreamConfig["cursor_move"] = '${settings.cursor_move}';
    </#if>
    <#if settings.cursor_click?? && settings.cursor_click!='none'>
    DreamConfig["cursor_click"] = '${settings.cursor_click}';
    </#if>
    <#if settings.effects_lantern_mode?? && settings.effects_lantern_mode!='none'>
    DreamConfig["effects_lantern_mode"] = '${settings.effects_lantern_mode}';
    </#if>
    <#if settings.effects_sakura_mode?? && settings.effects_sakura_mode!='none'>
    DreamConfig["effects_sakura_mode"] = '${settings.effects_sakura_mode}';
    </#if>
    <#if settings.effects_snowflake_mode?? && settings.effects_snowflake_mode!='none'>
    DreamConfig["effects_snowflake_mode"] = '${settings.effects_snowflake_mode}';
    </#if>
    <#if settings.effects_universe_mode?? && settings.effects_universe_mode!='none'>
    DreamConfig["effects_universe_mode"] = '${settings.effects_universe_mode}';
    </#if>
    <#if settings.effects_circle_magic_mode?? && settings.effects_circle_magic_mode!='none'>
    DreamConfig["effects_circle_magic_mode"] = '${settings.effects_circle_magic_mode}';
    </#if>
    <#if settings.enable_baidu_push!false>
    DreamConfig["enable_baidu_push"] = true;
    </#if>
    <#if settings.enable_toutiao_push!false>
    DreamConfig["enable_toutiao_push"] = true;
    </#if>
    <#if settings.show_img_name!true>
    DreamConfig["show_img_name"] = true;
    </#if>
    <#if settings.load_progress?? && settings.load_progress != 'none'>
    DreamConfig["load_progress"] = '${settings.load_progress}';
    </#if>
    <#if settings.journals_share_image?? && settings.journals_share_image != ''>
    DreamConfig["journals_share_image"] = '${settings.journals_share_image}';
    </#if>
    <#if settings.meting_api?? && settings.meting_api != ''>
    var meting_api = '${settings.meting_api}';
    </#if>
    /** 看板娘相关配置 */
    <#if settings.enable_live2d!true>
    DreamConfig["enable_live2d"] = true;
    <#if settings.live2d_about_page?? && settings.live2d_about_page!=''>
    DreamConfig["live2d_about_page"] = '${settings.live2d_about_page}';
    </#if>
    DreamConfig["live2d_model_url"] = '${settings.live2d_model_url!'https://unpkg.com/live2d-widget-model@1.0.1/'}';
    DreamConfig["live2d_tips_url"] = '${settings.live2d_tips_url!'/themes/dream/source/lib/live2d@1.0.1/waifu-tips.json'}';
    DreamConfig["live2d_edge_side"] = '${settings.live2d_edge_side!'right:50'}';
    DreamConfig["live2d_waifu_size"] = '${settings.live2d_waifu_size!'280x260'}';
    DreamConfig["live2d_model_id"] = '${settings.live2d_model_id!'0'}';
    DreamConfig["live2d_model_textures_id"] = '${settings.live2d_model_textures_id!'0'}';
    DreamConfig["live2d_model_rand_mode"] = '${settings.live2d_model_rand_mode!'switch'}';
    DreamConfig["live2d_model_textures_rand_mode"] = '${settings.live2d_model_textures_rand_mode!'rand'}';
    DreamConfig["live2d_show_tool_menu"] = ${(settings.live2d_show_tool_menu!true)?c};
    <#list settings.live2d_tool_button as button>
    DreamConfig["${button!}"] = true;
    </#list>
    </#if>

    /** 配置主题模式 */
    DreamConfig["default_theme"] = '${settings.default_theme!'light'}';

    (function(){
        let isNight = DreamConfig.default_theme === 'system'? matchMedia('(prefers-color-scheme: dark)').matches : localStorage.getItem('night') || DreamConfig.default_theme === 'night';
        if (isNight.toString() === 'true') {
            localStorage.setItem('night', 'true');
            document.documentElement.classList.add('night');
        } else {
          localStorage.setItem('night', 'false');
        }
    })();
</script>