<#macro widget position>
<div class="column is-4-tablet is-4-desktop is-3-widescreen <#if position=='right'>is-hidden-touch is-hidden-desktop-only</#if> <#if position == 'left'>has-order-1<#else>has-order-3</#if> column-${position} <#if position == 'left'><#if settings.left_sidebar_sticky?? && settings.left_sidebar_sticky == 'top'>is-sticky</#if><#if settings.left_sidebar_sticky?? && settings.left_sidebar_sticky == 'bottom'>is-sticky left-bottom</#if><#else><#if settings.right_sidebar_sticky?? && settings.right_sidebar_sticky == 'top'>is-sticky</#if><#if settings.right_sidebar_sticky?? && settings.right_sidebar_sticky == 'bottom'>is-sticky right-bottom</#if></#if>">
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
    <#if settings.sidebar_recentpost?? && settings.sidebar_recentpost == position>
        <#include "../widget/recent_posts.ftl">
    </#if>
    <#if settings.sidebar_recentcomment?? && settings.sidebar_recentcomment == position>
        <#include "../widget/recent_comments.ftl">
    </#if>
    <#if settings.sidebar_categories?? && settings.sidebar_categories == position>
        <#include "../widget/category.ftl">
    </#if>
    <#if settings.sidebar_tags?? && settings.sidebar_tags == position>
        <#include "../widget/tag.ftl">
    </#if>
    <#if settings.sidebar_tagcloud?? && settings.sidebar_tagcloud == position>
        <#include "../widget/tagcloud.ftl">
    </#if>
    <#if settings.sidebar_links?? && settings.sidebar_links == position>
        <#include "../widget/links.ftl">
    </#if>
    <#--        <#include "../widget/archive.ftl">-->
    <#if position == 'left'>
        <div class="column-right-shadow is-hidden-widescreen">
        </div>
    </#if>
</div>
</#macro>