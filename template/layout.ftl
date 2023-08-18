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
    <#assign enable_comment = (settings.enable_comment!true) && ((post?? && (!post.disallowComment!false)) || (is_journals?? && settings.enable_journals_comment!true) || (is_links?? && settings.link_comment_id?? && settings.link_comment_id!=''))>
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