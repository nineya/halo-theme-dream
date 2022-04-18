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
    body:before {
        background: url("${settings.background_pc!}") center 0 no-repeat;
        content: '';
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
        transition: opacity 1s;
    }
    @media screen and (max-width: 768px) {
        body:before {
            background-image: url("${settings.background_mobile!}");
        }
    }
</style>
<script type="text/javascript">
    // 配置主题模式
    let isNight = localStorage.getItem('night') || false;
    if (isNight.toString() === 'true') {
        document.documentElement.classList.add('night');
    }
</script>