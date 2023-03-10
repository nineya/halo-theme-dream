<#global theme_version="2.1.3">
<#macro layout0 title,canonical>
    <#if RequestParameters?? && RequestParameters._pjax?? >
        <#global is_pjax=RequestParameters._pjax>
        <#include "layout_pjax.ftl">
        <@layout_pjax title,canonical><#nested /></@layout_pjax>
    <#else>
        <#include "layout_default.ftl">
        <@layout_default title,canonical><#nested /></@layout_default>
    </#if>
</#macro>
<#macro layout title,canonical>
    <#if post?? || is_journals?? || is_error?? || (settings.enable_compress!'none')=='none'>
        <@layout0 title,canonical><#nested /></@layout0>
    <#elseif settings.enable_compress == 'format'>
        <@compress>
            <@layout0 title,canonical><#nested /></@layout0>
        </@compress>
    <#elseif settings.enable_compress == 'single'>
        <@compress single_line=true>
            <@layout0 title,canonical><#nested /></@layout0>
        </@compress>
    </#if>
</#macro>