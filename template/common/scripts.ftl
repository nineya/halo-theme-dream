<#if settings.sidebar_toc?? && settings.sidebar_toc != 'none'>
    <script src="${theme_base!}/source/js/btoc.min.js"></script>
</#if>
<script src="${theme_base!}/source/js/common.min.js"></script>
<script src="${theme_base!}/source/js/utils.min.js"></script>

<#if post?? || is_journals?? || is_error??>
    <script data-pjax src="${theme_base!}/source/lib/highlightjs@11.5.1/highlight.min.js"></script>
    <script data-pjax src="//cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>
    <script data-pjax src="${theme_base!}/source/js/post.min.js"></script>
</#if>

<#if is_journals??>
    <script data-pjax src="${theme_base!}/source/js/journals.min.js"></script>
</#if>
<#if (post?? && !post.disallowComment!false) || is_journals?? || (is_links?? && settings.link_comment_id?? && settings.link_comment_id!='')>
    <script data-pjax defer src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
    <script data-pjax defer src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
</#if>

<script src="${theme_base!}/source/js/spark-input.min.js"></script>
<script src="//cdn.bootcdn.net/ajax/libs/jquery.pjax/2.0.0/jquery.pjax.min.js"></script>
<#--<script src="${theme_base!}/source/lib/jquery.pjax.js"></script>-->
<script src="${theme_base!}/source/js/pjax.min.js"></script>

<script async src="${theme_base!}/source/lib/qmsg/qmsg.min.js"></script>

<#if is_post?? || is_sheet?? || is_photos?? || is_journals?? >
    <script data-pjax async src="//cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.js"></script>
</#if>

<script async src="${theme_base!}/source/js/universe.min.js"></script>

<#if settings.sidebar_music?? && settings.sidebar_music != 'none'>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
    <script defer src="//cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
    <script defer src="//cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
</#if>
<#if settings.busuanzi!true>
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
</#if>

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
<@global.statistics />