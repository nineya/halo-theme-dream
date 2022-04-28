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