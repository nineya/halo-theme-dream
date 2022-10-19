<style>
    <#if settings.enable_gray_mode!false>
    html {
        filter: grayscale(1) !important;
    }

    </#if>
    <#if settings.theme_color?? && settings.theme_color!=''>
    html {
        --theme: ${settings.theme_color};
    }

    </#if>
    <#if settings.night_theme_color?? && settings.night_theme_color!=''>
    html.night {
        --theme: ${settings.night_theme_color};
    }

    </#if>

    <#if settings.enable_image_bg?? && settings.enable_image_bg==true>
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
    /** 主题配置 */
    const DreamConfig = {};
    DreamConfig["theme_version"] = '${theme_version!}';
    DreamConfig["theme_base"] = '${theme_base!}';
    DreamConfig["access_key"] = '${settings.access_key!'dream'}';
    <#if settings.code_fold_line?? && settings.code_fold_line?number gte 20>
    DreamConfig["code_fold_line"] =${settings.code_fold_line};
    </#if>
    <#if settings.document_hidden_title?? && settings.document_hidden_title!=''>
    DreamConfig["document_hidden_title"] = '${settings.document_hidden_title}';
    </#if>
    <#if settings.document_visible_title?? && settings.document_visible_title!=''>
    DreamConfig["document_visible_title"] = '${settings.document_visible_title}';
    </#if>
    <#if settings.enable_color_character!false>
    DreamConfig["spark_input_content"] = ['${user.description?trim?replace('\n', '')}'<#if settings.color_character?? && settings.color_character?trim!=''>, '${settings.color_character?trim?replace('\n', "','")}'</#if>];
    </#if>
    <#if settings.website_time?? && settings.website_time!=''>
    DreamConfig["website_time"] = '${settings.website_time}';
    </#if>
    <#if settings.sidebar_notice?? && settings.sidebar_notice!='none'>
    DreamConfig["notice_show_mode"] = '${settings.notice_show_mode!'index'}';
    </#if>
    <#if settings.journals_fold_height?? && settings.journals_fold_height?number gte 260>
    DreamConfig["journals_fold_height"] =${settings.journals_fold_height};
    </#if>
    <#if settings.cursor_move?? && settings.cursor_move!='none'>
    DreamConfig["cursor_move"] = '${settings.cursor_move}';
    </#if>
    <#if settings.cursor_click?? && settings.cursor_click!='none'>
    DreamConfig["cursor_click"] = '${settings.cursor_click}';
    </#if>
    <#if settings.effects_sakura_mode?? && settings.effects_sakura_mode!='none'>
    DreamConfig["effects_sakura_mode"] = '${settings.effects_sakura_mode}';
    </#if>
    <#if settings.effects_universe_mode?? && settings.effects_universe_mode!='none'>
    DreamConfig["effects_universe_mode"] = '${settings.effects_universe_mode}';
    </#if>
    <#if settings.enable_post_share!false>
    DreamConfig["enable_post_share"] = true;
    </#if>
    <#if settings.enable_baidu_push!false>
    DreamConfig["enable_baidu_push"] = true;
    </#if>
    <#if settings.enable_toutiao_push!false>
    DreamConfig["enable_toutiao_push"] = true;
    </#if>
    <#if settings.load_progress?? && settings.load_progress != 'none'>
    DreamConfig["load_progress"] = '${settings.load_progress}';
    </#if>
    /** 看板娘相关配置 */
    <#if settings.enable_live2d!true>
    DreamConfig["live2d_url"] = '/source/lib/live2d/autoload.js';
    <#if settings.live2d_about_page?? && settings.live2d_about_page!=''>
    DreamConfig["live2d_about_page"] = '${settings.live2d_about_page}';
    </#if>
    DreamConfig["live2d_edge_side"] = '${settings.live2d_edge_side!'right:50'}';
    DreamConfig["live2d_waifu_size"] = '${settings.live2d_waifu_size!'280x260'}';
    </#if>

    /** 配置主题模式 */
    DreamConfig["default_theme"] = '${settings.default_theme!'light'}';

    (function(){
        let isNight = localStorage.getItem('night');
        if (isNight) {
            if (isNight.toString() === 'true') {
                document.documentElement.classList.add('night');
            }
        } else if (DreamConfig.default_theme === 'night') {
            localStorage.setItem('night', true);
            document.documentElement.classList.add('night');
        }
    })();
</script>