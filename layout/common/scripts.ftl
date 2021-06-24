<#include "../plugin/gallery.ftl">
<#include "../plugin/outdated-browser.ftl">
<#include "../plugin/mathjax.ftl">
<#include "../plugin/back-to-top.ftl">
<#include "../plugin/sakura.ftl">
<#include "../plugin/busuanzi.ftl">
<#include "../plugin/L2Dwidget.ftl">
<#include "../plugin/baidu-push.ftl">
<#include "../plugin/seo360-push.ftl">


<script src="${theme_base!}/source/js/bundle.js"></script>

<script>
    var url = location.href;
    var urlstatus = false;
    $(".navbar-start a").each(function () {
        if ((url + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') != '/') {
            $(this).addClass('is-active');
            urlstatus = true;
        } else {
            $(this).removeClass('is-active');
        }
    });
    if (!urlstatus) {
        $(".navbar-start a").eq(0).addClass('is-active');
    }
</script>

<script src="${theme_base!}/source/js/main.js"></script>