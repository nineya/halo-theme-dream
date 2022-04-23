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
    body.ready:before {
        opacity: 1;
    }

    <#if settings.background_pc?? && settings.background_pc!=''>
    body:before {
        background: url("${settings.background_pc!}") center 0 no-repeat;
    }

    </#if>

    <#if settings.background_mobile?? && settings.background_mobile!=settings.background_pc!>
    @media screen and (max-width: 768px) {
        body:before {
            <#if settings.background_pc?? && settings.background_pc==''>
            background-image: none;
            <#else>
            background-image: url("${settings.background_mobile!}");
            </#if>
        }
    }

    </#if>

    </#if>
</style>
<script type="text/javascript">
    // 主题配置
    const DreamConfig = {};
    <#if settings.code_fold_line?? && settings.code_fold_line?number gte 20>
    DreamConfig["code_fold_line"] =${settings.code_fold_line};
    </#if>
    DreamConfig["spark_input_content"] = ['${user.description!}'<#if settings.color_character?? && settings.color_character!=''>, ${settings.color_character!}</#if>];
    <#if settings.website_time?? && settings.website_time!=''>
    DreamConfig["website_time"] = '${settings.website_time}';
    </#if>
    DreamConfig["notice_hide_mode"] = '${settings.notice_hide_mode!'index'}';

    // 配置主题模式
    let isNight = localStorage.getItem('night') || false;
    if (isNight.toString() === 'true') {
        document.documentElement.classList.add('night');
    }
</script>