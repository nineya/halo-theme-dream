<#macro widget position>
<aside class="column column-side column-${position} <#if position == 'left'><#if settings.left_sidebar_sticky?? && settings.left_sidebar_sticky == 'top'>is-sticky</#if><#if settings.left_sidebar_sticky?? && settings.left_sidebar_sticky == 'bottom'>is-sticky left-bottom</#if><#else><#if settings.right_sidebar_sticky?? && settings.right_sidebar_sticky == 'top'>is-sticky</#if><#if settings.right_sidebar_sticky?? && settings.right_sidebar_sticky == 'bottom'>is-sticky right-bottom</#if></#if>">
    <#if settings.sidebar_profile?? && settings.sidebar_profile == position>
        <#include "../widget/profile.ftl">
    </#if>
    <#if settings.sidebar_toc?? && settings.sidebar_toc == position>
        <#include "../widget/toc.ftl">
    </#if>
    <#if settings.sidebar_notice?? && settings.sidebar_notice == position>
        <#include "../widget/notice.ftl">
    </#if>
    <#if settings.sidebar_music?? && settings.sidebar_music == position>
        <#include "../widget/music.ftl">
    </#if>
    <#if settings.sidebar_ad_piece?? && settings.sidebar_ad_piece == position>
        <#include "../widget/ad_piece.ftl">
    </#if>
    <#if settings.sidebar_recent_posts?? && settings.sidebar_recent_posts == position>
        <#include "../widget/recent_posts.ftl">
    </#if>
    <#if settings.sidebar_recent_comments?? && settings.sidebar_recent_comments == position>
        <#include "../widget/recent_comments.ftl">
    </#if>
    <#if settings.sidebar_categories?? && settings.sidebar_categories == position>
        <#include "../widget/categories.ftl">
    </#if>
    <#if settings.sidebar_tags?? && settings.sidebar_tags == position>
        <#include "../widget/tags.ftl">
    </#if>
    <#if settings.sidebar_tagcloud?? && settings.sidebar_tagcloud == position>
        <#include "../widget/tagcloud.ftl">
    </#if>
    <#if settings.sidebar_links?? && settings.sidebar_links == position>
        <#include "../widget/links.ftl">
    </#if>
    <#if position == 'left'>
        <div class="column-right-shadow is-hidden-desktop">
        </div>
    </#if>
</aside>
</#macro>