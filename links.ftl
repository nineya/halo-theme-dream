<#include "template/layout.ftl">
<@layout title="友链 - ${blog_title!}" canonical="${links_url!}">
    <div class="card">
        <#if settings.links_thumbnail?? && settings.links_thumbnail!=''>
            <div class="card-image cover-image" style="background-image: url(${settings.links_thumbnail!})">
            </div>
        </#if>
        <div class="card-content main">
            <h1 class="title">友情链接 - ${user.nickname!}的小伙伴们</h1>
            <div class="main-content">
                <@linkTag method="listTeams">
                    <#assign defaultAvatar= (settings.links_default_avatar?? && settings.links_default_avatar!='')?string(settings.links_default_avatar!, static + "/source/img/avatar.svg") />
                    <#list teams as item>
                        <div class="links">
                            <#if item.team?? && item.team!=''>
                                <h3 class="link-title" id="toc${item_index}">${item.team}</h3>
                            <#else>
                                <h3 class="link-title" id="toc${item_index}">小伙伴们</h3>
                            </#if>
                            <ul class="link-items">
                                <#list item.links as link>
                                    <li>
                                        <a class="links-item" href="${link.url!}" rel="noopener" target="_blank"
                                           title="${link.description!}">
                                            <#if link.logo?? && link.logo!=''>
                                                <img class="not-gallery" title="${link.name!}" src="${defaultAvatar!}"
                                                     onload="if(!this.finish){this.finish=true;this.src='${link.logo!}'}"
                                                     onerror="this.onerror='';this.finish=true;this.src='${defaultAvatar!}'">
                                            <#else>
                                                <img class="not-gallery" title="${link.name!}" src="${defaultAvatar!}">
                                            </#if>

                                            <span class="link-name">${link.name!}</span>
                                            <#if link.description?? && link.description!=''>
                                                <div class="link-desc">${link.description!}</div>
                                            <#else>
                                                <div class="link-desc">他还没有自我介绍呢</div>
                                            </#if>
                                        </a>
                                    </li>
                                </#list>
                            </ul>
                        </div>
                    </#list>
                </@linkTag>
                <#if (settings.show_exchange_info!true) || (settings.links_info?? && settings.links_info != '')>
                    <hr/>
                </#if>
                <#if settings.show_exchange_info!true>
                    申请友链的方法：
                    <#assign bloggerAvatar= (settings.links_blogger_avatar?? && settings.links_blogger_avatar!='')?string(settings.links_blogger_avatar!, user.avatar!) />
                    <ul>
                        <li>名称：${blog_title!}</li>
                        <li>地址：<a href="${blog_url!}">${blog_url!}</a></li>
                        <li>图标：<a href="${bloggerAvatar!}">${bloggerAvatar!}</a></li>
                        <li>描述：${user.description!}</li>
                    </ul>
                </#if>
                <div>${settings.links_info!}</div>
            </div>
            <#if settings.share_type?? && settings.share_type!=''>
                <#include "template/share/${settings.share_type}.ftl">
            </#if>
        </div>
    </div>
    <#if settings.link_comment_id?? && settings.link_comment_id!=''>
        <div class="card card-content" id="comment-wrapper">
            <h3 class="title">评论</h3>
            <#include "template/main/comment.ftl">
            <@comment settings.link_comment_id, "sheet" />
        </div>
    </#if>
</@layout>