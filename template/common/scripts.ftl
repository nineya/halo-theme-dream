<script src="${theme_base!}/source/js/common.min.js"></script>
<script type="text/javascript" src="${theme_base!}/source/js/universe.min.js"></script>
<script src="//cdn.bootcdn.net/ajax/libs/jquery.pjax/2.0.0/jquery.pjax.min.js"></script>
<script src="${theme_base!}/source/js/pjax.min.js"></script>

<#include "../plugin/animejs.ftl">
<#include "../plugin/gallery.ftl">
<#include "../plugin/mathjax.ftl">
<#include "../plugin/sakura.ftl">
<#include "../plugin/live2d.ftl">
<#include "../plugin/baidu_push.ftl">
<#include "../plugin/toutiao_push.ftl">
<#include "../plugin/seo360_push.ftl">

${settings.external_js_body!}
<#if settings.inline_js_body?? && settings.inline_js_body!=''>
    <script type="text/javascript">
        ${settings.inline_js_body!}
    </script>
</#if>