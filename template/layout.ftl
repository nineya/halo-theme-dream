<!-- halo不会及时更新版本号，自定义版本号全局变量 -->
<#global theme_version="2.0.6">
<#macro layout title,canonical>
    <#if RequestParameters?? && RequestParameters._pjax?? >
        <#global is_pjax=RequestParameters._pjax>
        <#include "layout_pjax.ftl">
        <@layout_pjax title,canonical>
            <#nested />
        </@layout_pjax>
    <#else>
        <#include "layout_default.ftl">
        <@layout_default title,canonical>
            <#nested />
        </@layout_default>
    </#if>
</#macro>