<style>
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

    <#if !settings.background_mobile?? || settings.background_mobile==''>
    @media screen and (max-width: 768px) {
        body:before {
            background-image: none;
        }
    }

    </#if>
    </#if>
    <#if settings.background_mobile?? && settings.background_mobile!='' && settings.background_mobile!=settings.background_pc! >
    @media screen and (max-width: 768px) {
        body:before {
            background-image: url("${settings.background_mobile!}");
        }
    }

    </#if>
    </#if>
</style>
<script type="text/javascript">
    // 主题配置
    const DreamConfig = {};
    DreamConfig["theme_base"] = '${theme_base!}';
    <#if settings.code_fold_line?? && settings.code_fold_line?number gte 20>
    DreamConfig["code_fold_line"] =${settings.code_fold_line};
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
    <#if settings.foreground_effects?? && settings.foreground_effects!='none'>
    DreamConfig["foreground_effects"] = '${settings.foreground_effects}';
    </#if>
    <#if settings.background_effects?? && settings.background_effects!='none'>
    DreamConfig["background_effects"] = '${settings.background_effects}';
    </#if>
    <#if settings.enable_live2d!true>
    DreamConfig["live2d_url"] = '/source/lib/live2d/autoload.js';
    </#if>
    <#if settings.enable_baidu_push!false>
    DreamConfig["enable_baidu_push"] = true;
    </#if>
    <#if settings.enable_toutiao_push!false>
    DreamConfig["enable_toutiao_push"] = true;
    </#if>

    // 配置主题模式
    let isNight = localStorage.getItem('night') || false;
    if (isNight.toString() === 'true') {
        document.documentElement.classList.add('night');
    }
    <#if !settings.enable_freecdn!false>
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
            registration.active && registration.active.scriptURL && registration.active.scriptURL.endsWith("/freecdn-loader.min.js") && registration.unregister()
        }
    })
    </#if>
</script>