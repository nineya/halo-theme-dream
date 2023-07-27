<#macro widget position>
<aside class="column column-side column-${position} ${settings[position+'_sidebar_sticky']!'none'}-sticky">
    <#list settings.sidebar_show as sidebar>
        <#if sidebar.location ?? && sidebar.location == position>
            <#include "../widget/${sidebar.type}.ftl">
        </#if>
    </#list>
    <#if position == 'left'>
        <div class="column-right-shadow is-hidden-desktop">
        </div>
    </#if>
</aside>
</#macro>